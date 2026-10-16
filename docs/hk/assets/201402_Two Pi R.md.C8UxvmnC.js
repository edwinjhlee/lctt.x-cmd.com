import{_ as p,a0 as o,w as l,s as i,ao as u,I as a,x as t,a1 as s,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"樹莓派使用實例之：2 Pi R | LCTT x X-CMD","titleTemplate":false,"description":"樹莓派使用實例之：2 Pi R | LCTT (201402) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"樹莓派使用實例之：2 Pi R | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"樹莓派使用實例之：2 Pi R | LCTT (201402) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201402/Two Pi R","title":"樹莓派使用實例之：2 Pi R","tag":"201402","desc":""},"relativePath":"201402/Two Pi R.md","filePath":"[post].md"}'),d={name:"201402/Two Pi R.md"};function g(m,e,c,v,S,f){const r=o("Link");return l(),i("div",null,[e[11]||(e[11]=u(`<h1 id="樹莓派使用實例之-2-pi-r" tabindex="-1">樹莓派使用實例之：2 Pi R <a class="header-anchor" href="#樹莓派使用實例之-2-pi-r" aria-label="Permalink to “樹莓派使用實例之：2 Pi R”">​</a></h1><p>很多人都對樹莓派的硬件 hack 功能（譯註：就是用户可以自己發揮想像力，把樹莓派設計成自己想要的機器）感興趣，而我看中的一點是樹莓派的低耗電功能，我可以用它來代替現在在用的 Linux 服務器。在以前的文章中我已經介紹過如何用樹莓派代替這些服務器來管理我的啤酒冰箱，以及我在澳大利亞託管的一台樹莓派。託管樹莓派之後，我開始思考我正在使用的服務器的單點故障問題，並且考慮着手解決它。當你看到文章標題裏的“2 Pi R”，你也許會想到圓周長計算公式（C = 2<em>Pi</em>R，Pi 為圓周率，R 為半徑），但在本文中，“R”的意思是“冗餘（redundancy）”。當然，一塊樹莓派並不能實現冗餘，至少需要兩塊。下面我將介紹如何用兩塊樹莓派實現冗餘。</p><p>本文將建立一個底層框架，為倆樹莓派實現冗餘提供基礎服務，首先我要用 GlusterFS 建立一個集羣網絡文件系統。在之後的文章中，我還會介紹如何利用共享存儲來建立其他冗餘服務。注意，雖然本文使用的是樹莓派，但下面的配置操作同樣適用於其他硬件。</p><h3 id="配置倆樹莓派" tabindex="-1">配置倆樹莓派 <a class="header-anchor" href="#配置倆樹莓派" aria-label="Permalink to “配置倆樹莓派”">​</a></h3><p>首先從樹莓派官網下載最新的 Linux 發行版，並安裝到兩塊 SD 卡中。將樹莓派接到電視機上，然後按照文檔提示選擇內核鏡像並啓動系統，確認一下 SSH 服務有沒有啓動（默認情況下 SSH 應該是開機啓動的）。你可以使用 raspi-config 命令來增加根分區空間，以便能充分利用 SD 卡的容量。確認系統正常工作、SSH 正常啓動後，我可以過程訪問它了。我將樹莓派與電視機斷開，並連到交換機上，重啓系統，沒有顯示界面。</p><p>默認情況下，Raspbian 會通過 DHCP 獲取自己的網絡信息，但是在設置冗餘服務時，我們希望樹莓派每次開機都使用同一個 IP 地址。在我的環境中，我設置了我的 DHCP 服務器，它會在樹莓派啓動時為它們分配固定的 IP 地址。而你可以編輯 /etc/network/interfaces 文件：</p><pre><code>iface eth0 inet dhcp
</code></pre><p>修改成：</p><pre><code>auto eth0
iface eth0 inet static
  address 192.168.0.121
  netmask 255.255.255.0
  gateway 192.168.0.1
</code></pre><p>當然，要將上面的參數修改成你自己的參數，確保每個樹莓派使用不同的 IP 地址。我把兩個樹莓派的主機名都改了，便於在（通過 SSH）登錄的時候區分它們。怎麼改主機名呢？以 root 權限編輯 /etc/hostname 文件。最後重啓系統，確認樹莓派使用了正確的網絡配置和主機名。</p><h3 id="配置-glusterfs-服務器" tabindex="-1">配置 GlusterFS 服務器 <a class="header-anchor" href="#配置-glusterfs-服務器" aria-label="Permalink to “配置 GlusterFS 服務器”">​</a></h3><p>GlusterFS 是一個用户態的集羣文件系統，我選擇它，是因為它配置共享網絡文件系統很方便。首先選一個樹莓派作為主設備（master）。在主設備上你需要做一些初始化操作，完成後，它們會自動執行故障轉移。下面是我架設的環境：</p><pre><code>Master hostname: pi1
Master IP: 192.168.0.121
Master brick path: /srv/gv0
Secondary hostname: pi2
Secondary IP: 192.168.0.122
Secondary brick path: /srv/gv0
</code></pre><p>在開始之前，登入這兩個樹莓派，然後安裝 glusterfs-server 軟件包：</p><pre><code>$ sudo apt-get install glusterfs-server
</code></pre><p>GlusterFS 將數據保存在一些被稱為“塊”的設備中。一個“塊”是一個系統路徑，由你指定給 gluster 使用。GlusterFS 會將所有“塊”組合成一個存儲卷，給客户端使用。GlusterFS 會將文件的數據分割成多份，保存在不同的“塊”中。所以雖然一個“塊”看起來就是一個普通的路徑，你最好不要在樹莓派中直接操作它，而應該通過客户端訪問 GlusterFS 服務，讓 GlusterFS 操作。本文中我在兩個樹莓派中都新建一個 /srv/gv0 目錄作為 GlusterFS 的“塊”：</p><pre><code>$ sudo mkdir /srv/gv0
</code></pre><p>在我的環境中，我將 SD 卡上的根文件系統共享出來，而你可能需要共享更大的存儲空間。如果是這樣的話，在兩塊樹莓派上都接上 USB 硬盤，格式化後掛載到 /srv/gv0 上。編輯下 /etc/fstab 文件，確保系統每次啓動時都會把你的 USB 硬盤掛載上去。兩個樹莓派上的“塊”不一定需要有相同的名字或者相同的路徑名稱，但是把它們設置為相同的值也沒什麼壞處。</p><p>配置好“塊”的路徑，安裝好 glusterfs-server 軟件包，確認兩個樹莓派都正常工作，然後登入被你設為主設備的樹莓派，輸入“gluster peer probe”命令，將次設備加入到集羣中。在我的環境中，我用 IP 地址表示第二個節點，如果你比較有個性，並且有設置過 DNS，你也可以用主機名錶示這個節點。</p><pre><code>pi@pi1 ~ $ sudo gluster peer probe 192.168.0.122
Probe successful
</code></pre><p>目前為止，我的 pi1 (192.168.0.121) 信任 pi2 (192.168.0.122)，我可以建立一個存儲卷，名字都想好了：gv0。在主設備端運行命令“gluster volume create”：</p><pre><code>pi@pi1 ~ $ sudo gluster volume create gv0 replica 2 192.168.0.121:/srv/gv0 192.168.0.122:/srv/gv0
Creation of volume gv0 has been successful. Please start 
the volume to access data.
</code></pre><p>這裏稍微解釋一下命令的意思。“gluster volume create”就是新建一個卷；“gv0”是卷名，這個名稱將會在客户端被用到；“replica 2”表示這個卷的數據會在兩個“塊”之間作冗餘，而不是將數據分割成兩份分別存於兩個“塊”。這個命令保證了卷內的數據會被複製成兩份分別保存在兩個“塊”中。最後我定義兩個獨立的“塊”，作為卷的存儲空間：192.168.0.121 上的 /srv/gv0 和 192.168.0.122 上的 /srv/gv0。</p><p>現在，卷被成功創建，我只需啓動它：</p><pre><code>pi@pi1 ~ $ sudo gluster volume start gv0
Starting volume gv0 has been successful
</code></pre><p>然後我可以在任何一個樹莓派上使用“volume info”命令來查看狀態：</p><pre><code>$ sudo gluster volume info

Volume Name: gv0
Type: Replicate
Status: Started
Number of Bricks: 2
Transport-type: tcp
Bricks:
Brick1: 192.168.0.121:/srv/gv0
Brick2: 192.168.0.122:/srv/gv0
</code></pre><h3 id="配置-glusterfs-客户端" tabindex="-1">配置 GlusterFS 客户端 <a class="header-anchor" href="#配置-glusterfs-客户端" aria-label="Permalink to “配置 GlusterFS 客户端”">​</a></h3><p>卷已啓動，現在我可以在一個支持 GlusterFS 的客户端上，將它作為一個 GlusterFS 類型的文件系統掛載起來。首先我想在這兩個樹莓派上掛載這個卷，於是我在兩個樹莓派上都創建了掛載點，並下面的命令把這個卷掛載上去：</p><pre><code>$ sudo mkdir -p /mnt/gluster1
$ sudo mount -t glusterfs 192.168.0.121:/gv0 /mnt/gluster1
$ df
Filesystem         1K-blocks    Used Available Use% Mounted on
rootfs               1804128 1496464    216016  88% /
/dev/root            1804128 1496464    216016  88% /
devtmpfs               86184       0     86184   0% /dev
tmpfs                  18888     216     18672   2% /run
tmpfs                   5120       0      5120   0% /run/lock
tmpfs                  37760       0     37760   0% /run/shm
/dev/mmcblk0p1         57288   18960     38328  34% /boot
192.168.0.121:/gv0   1804032 1496448    215936  88% /mnt/gluster1
</code></pre><p>如果你是一個喜歡鑽研的讀者，你可能會問了：“如果我指定了一個 IP 地址，如果192.168.0.121當機了，怎麼辦？”。別擔心，這個 IP 地址僅僅是為了指定使用哪個卷，當我們訪問這個卷的時候，卷內的兩個“塊”都會被訪問到。</p><p>當你掛載好這個文件系統後，試試在裏面新建文件，然後查看一下“塊”對應的路徑：/srv/gv0。你應該可以看到你在 /mngt/gluster1 裏創建的文件，在兩個樹莓派的 /srv/gv0 上都出現了（重申一遍，不要往 /srv/gv0 裏寫數據）：</p><pre><code>pi@pi1 ~ $ sudo touch /mnt/gluster1/test1
pi@pi1 ~ $ ls /mnt/gluster1/test1
/mnt/gluster1/test1
pi@pi1 ~ $ ls /srv/gv0
test1
pi@pi2 ~ $ ls /srv/gv0
test1
</code></pre><p>你可以在 /etc/fstab 上添加下面一段，就可以在系統啓動的時候自動把 GlusterFS 的卷掛載上來：</p><pre><code>192.168.0.121:/gv0  /mnt/gluster1  glusterfs  defaults,_netdev  0  0
</code></pre><p>注意：如果你想通過其他客户端訪問到這個 GlusterFS 卷，只需要安裝一個 GlusterFS 客户端（在基於 Debian 的發行版裏，這個客户端叫 glusterfs-client），然後接我上面介紹的，創建掛載點，將卷掛載上去。</p><h3 id="冗餘測試" tabindex="-1">冗餘測試 <a class="header-anchor" href="#冗餘測試" aria-label="Permalink to “冗餘測試”">​</a></h3><p>現在我們就來測試一下這個冗餘文件系統。我們的目標是，當其中一個節點當掉，我們還能訪問 GlusterFS 卷裏面的文件。首先我配置一個獨立的客户端用於掛載 GlusterFS 卷，然後新建一個簡單的腳本文件放在卷中，文件名為“glustertest”：</p><pre><code>#!/bin/bash

while [ 1 ]
do
  date &gt; /mnt/gluster1/test1
  cat /mnt/gluster1/test1
  sleep 1
done
</code></pre><p>這個腳本運行無限循環並每隔1秒打印出系統時間。當我運行這個腳本時，我可以看到下面的信息：</p><pre><code># chmod a+x /mnt/gluster1/glustertest
root@moses:~# /mnt/gluster1/glustertest
Sat Mar  9 13:19:02 PST 2013
Sat Mar  9 13:19:04 PST 2013
Sat Mar  9 13:19:05 PST 2013
Sat Mar  9 13:19:06 PST 2013
Sat Mar  9 13:19:07 PST 2013
Sat Mar  9 13:19:08 PST 2013
</code></pre><p>我發現這個腳本偶爾會跳過1秒，可能是 date 這個命令並不是很精確地每隔1秒鐘打印一次，所以偶爾會出現輸出時間不連慣的現象。</p><p>當我執行這個腳本後，我登入一個樹莓派並輸入“sudo reboot”重啓這個設備。這個腳本一直在運行，如果出現輸出時間不連慣現象，我不知道還是不是上面説的偶然現象。當第一個樹莓派啓動後，我重啓第二個樹莓派，確認下這個系統有一個節點丟失後，我的程序仍然能正常工作。這個冗餘系統配置起來只需要幾個命令，如果你需要一個冗餘系統，這是個不錯的選擇。</p><p>現在你已經實現了 2 Pi R 組成的冗餘文件系統，在我的下篇文章中，我將會加入新的冗餘服務，將這個共享存儲系統好好利用起來。</p><hr>`,45)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),s(r,{href:"http://www.linuxjournal.com/content/two-pi-r"},{default:n(()=>[...e[0]||(e[0]=[t("http://www.linuxjournal.com/content/two-pi-r",-1)])]),_:1})]),a("p",null,[e[4]||(e[4]=t("譯者：",-1)),s(r,{href:"https://github.com/bazz2"},{default:n(()=>[...e[2]||(e[2]=[t("bazz2",-1)])]),_:1}),e[5]||(e[5]=t(" 校對：",-1)),s(r,{href:"https://github.com/wxy"},{default:n(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[8]||(e[8]=t("本文由 ",-1)),s(r,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原創翻譯，",-1)),s(r,{href:"http://linux.cn/"},{default:n(()=>[...e[7]||(e[7]=[t("Linux中國",-1)])]),_:1}),e[10]||(e[10]=t(" 榮譽推出",-1))])])}const b=p(d,[["render",g]]);export{T as __pageData,b as default};
