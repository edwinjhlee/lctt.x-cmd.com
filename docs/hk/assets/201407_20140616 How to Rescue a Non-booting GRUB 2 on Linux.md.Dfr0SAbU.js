import{_ as d,a0 as g,w as a,s,ao as u,I as i,x as o,a1 as r,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const R=JSON.parse('{"title":"如何拯救一台GRUB 2啓動失敗的Linux電腦 | LCTT x X-CMD","titleTemplate":false,"description":"如何拯救一台GRUB 2啓動失敗的Linux電腦 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何拯救一台GRUB 2啓動失敗的Linux電腦 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何拯救一台GRUB 2啓動失敗的Linux電腦 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140616 How to Rescue a Non-booting GRUB 2 on Linux","title":"如何拯救一台GRUB 2啓動失敗的Linux電腦","tag":"201407","desc":""},"relativePath":"201407/20140616 How to Rescue a Non-booting GRUB 2 on Linux.md","filePath":"[post].md"}'),l={name:"201407/20140616 How to Rescue a Non-booting GRUB 2 on Linux.md"};function b(p,e,m,c,x,f){const t=g("Link");return a(),s("div",null,[e[19]||(e[19]=u(`<h1 id="如何拯救一台grub-2啓動失敗的linux電腦" tabindex="-1">如何拯救一台GRUB 2啓動失敗的Linux電腦 <a class="header-anchor" href="#如何拯救一台grub-2啓動失敗的linux電腦" aria-label="Permalink to “如何拯救一台GRUB 2啓動失敗的Linux電腦”">​</a></h1><p><img src="http://www.linux.com/images/stories/41373/grub-command-shell.jpg" alt="Figure 1: GRUB 2 menu with cool Apollo 17 background."></p><p>舊版GRUB我們使用了一段時間了，這個重要的Linux通用引導器的版本已經到了0.97。儘管舊版GRUB有很多的優點，但是它已經有點陳舊了，並且它的開發者也希望添加更多的功能，於是，GRUB 2 時代就要來了。</p><p>GRUB 2 做了幾個明顯的改進。它可以從移動存儲設備上啓動，並且可以通過配置一個選項來進入系統BIOS。相對於將所有的配置都放到一個配置文件<code>/boot/grub/menu.lst</code>中 （現在默認是<code>/boot/grub/grub.cfg </code>），使用各種腳本來配置會更復雜。你不要直接編輯這個文件，那不是人乾的事，太複雜了，我們需要使用其它的腳本來改變。我們卑微的人類可以編輯修改<code>/etc/default/grub</code>文件，它主要是控制Grub菜單的外觀。我們還可以修改<code>/etc/grub.d/</code>下的腳本，這些腳本用於啓動操作系統、控制外部應用程序，如memtest 、os_prober和theming等等 。<code>./boot/grub/grub.cfg</code>是由<code>/etc/default/grub</code>和<code>/etc/grub.d/*</code>生成的。當你修改了某個地方，你必須要運行update-grub命令來生成它。</p><p>好消息是，update-grub腳本可以可靠的檢測內核、啓動文件，並添加所有的操作系統，自動生成你的啓動菜單，所以你不必手動的修改他們。</p><p>我們還要學習如何解決兩個常見的故障。當啓動系統時，它會停在grub&gt;提示上，這是一個完整的GRUB 2命令界面，所以不要驚慌。這意味着GRUB 2依舊可以正常啓動和加載normal.mod模組（它和其他模組分別位於/boot/grub/[架構]/ 下），但沒有找到你的grub.cfg文件。如果你看到grub rescue&gt; 這意味着它無法找到normal.mod，因此它有可能找不到你的啓動文件。</p><p>這是如何發生的？因為內核可能改變驅動器分區號碼的分配，或者您移動了您的硬盤驅動器，或者你手動改變一些分區，也有可能是安裝一個新的操作系統或者移動一些文件。在這些情況下你的啓動文件仍然存在，但GRUB不能找到他們。所以你可以在GRUB提示符中找到啓動文件，設置它們的位置，然後啓動您的系統並修復GRUB配置。</p><h3 id="grub-2-命令列" tabindex="-1">GRUB 2 命令列 <a class="header-anchor" href="#grub-2-命令列" aria-label="Permalink to “GRUB 2 命令列”">​</a></h3><p>GRUB 2 的命令界面和上一代GRUB中的一樣強大。你可以用它來找到引導鏡像，內核和根文件系統。事實上，它可以讓你避開權限和其它訪問控制，完全訪問本地計算機上的所有文件。有些人可能會認為這是一個安全漏洞，但是你知道古老的UNIX的名言：有物理訪問機器權限的人，就是擁有它的人。</p><p>當你在<code>grub &gt;</code>提示時，你有許多類似命令列界面的功能，如命令歷史和tab補全。但是<code>grub rescue&gt; </code>模式是受限的，沒有命令歷史，沒有tab補全。</p><p>如果你是在一個正常運作的系統上練習，那就當GRUB菜單出現時，可以按下C來打開GRUB命令列界面。你可以通過向上和向下光標鍵滾動你的菜單條目來停止啓動倒計時。在GRUB命令列下做實驗是安全的，因為做不了永久的修改，一切都是暫時的。如果你已經看到<code>grub &gt; </code>或<code>grub rescue&gt; </code>提示符，那就説明你的表現時刻到了。</p><p>接下來的幾個命令可以在<code>grub&gt;</code>和<code>grub rescue</code>模式下運行。你應該運行的第一個命令是設置一個分頁器，將長的命令分頁。如下：</p><pre><code>grub&gt; set pager=1
</code></pre><p>等號兩側必須不能出現空格。現在讓我們做一點探索。輸入<code>ls</code>來列出的GRUB識別的所有分區：</p><pre><code>grub&gt; ls
(hd0) (hd0,msdos2) (hd0,msdos1)
</code></pre>`,15)),i("p",null,[e[1]||(e[1]=o("msdos是什麼？這意味着該系統具有老式的MS-DOS分區表，而不是全新的全局唯一標識符的分區表（GPT）。參見“",-1)),r(t,{href:"http://www.linux.com/learn/tutorials/730440-using-the-new-guid-partition-table-in-linux-good-bye-ancient-mbr-"},{default:n(()=>[...e[0]||(e[0]=[o("在Linux下使用新的GUID分區表，和古老的MBR説再見！",-1)])]),_:1}),e[2]||(e[2]=o("”。如果你正在運行的GPT，它會出現(hd0，GPT1)。現在讓我們看看，使用ls命令查看你的系統裏面有什麼文件：",-1))]),e[20]||(e[20]=u(`<pre><code>grub&gt; ls (hd0,1)/
lost+found/ bin/ boot/ cdrom/ dev/ etc/ home/  lib/
lib64/ media/ mnt/ opt/ proc/ root/ run/ sbin/ 
srv/ sys/ tmp/ usr/ var/ vmlinuz vmlinuz.old 
initrd.img initrd.img.old
</code></pre><p>太好了，我們已經找到了根文件系統。你可以省略msdos和GPT的標籤。如果沒有加分區後面的斜槓/，則只會列出分區的信息。你可以用cat命令顯示文件系統上的任何文件：</p><pre><code>grub&gt; cat (hd0,1)/etc/issue
Ubuntu 14.04 LTS \\n \\l
</code></pre><p>在一個多引導系統上，通過/etc/issue文件可以知道這是哪個Linux系統。</p><h3 id="從-grub-中啓動" tabindex="-1">從 grub&gt; 中啓動### <a class="header-anchor" href="#從-grub-中啓動" aria-label="Permalink to “從 grub&gt; 中啓動###”">​</a></h3><p>下面講述如何設置啓動文件並從<code>grub &gt;</code>提示下啓動系統。我們已經知道如何從Linux根文件系統(hd0,1)下運行ls命令，你可以一直尋找直到找到你的/boot/grub所在位置。然後運行以下命令，記得使用您自己的根分區，內核和initrd映像等參數：</p><pre><code>grub&gt; set root=(hd0,1)
grub&gt; linux /boot/vmlinuz-3.13.0-29-generic root=/dev/sda1
grub&gt; initrd /boot/initrd.img-3.13.0-29-generic
grub&gt; boot
</code></pre><p>第一行設置分區的根文件系統。第二行告訴GRUB您想要使用的內核位置。開始輸入/boot/vmli，然後使用tab補完填寫。輸入<code>root= /dev/sdX</code>設置根文件系統位置。是的，這似乎是多餘的，但如果你忘記了輸入，你會得到一個kernel panic。你知道怎麼找到正確的分區嗎？hd0,1 即 /dev/sda1，hd1,1 即 /dev/sdb1，hd3,2 即 /dev/ sdd2。我想你可以自己推算剩下的了。</p><p>第三行設置initrd文件，必須是和內核相同的版本號。</p><p>最後一行啓動系統。</p><p>在一些Linux系統上，內核和initrd是被符號鏈接到當前的根文件系統的根目錄，就像：</p><pre><code>$ ls -l /
vmlinuz -&gt; boot/vmlinuz-3.13.0-29-generic
initrd.img -&gt; boot/initrd.img-3.13.0-29-generic
</code></pre><p>所以，你也可以這樣輸入命令：</p><pre><code>grub&gt; set root=(hd0,1)
grub&gt; linux /vmlinuz root=/dev/sda1
grub&gt; initrd /initrd.img
grub&gt; boot
</code></pre><h3 id="從grub-rescue-中啓動" tabindex="-1">從grub rescue&gt; 中啓動 <a class="header-anchor" href="#從grub-rescue-中啓動" aria-label="Permalink to “從grub rescue&gt; 中啓動”">​</a></h3><p>如果你處在grub rescue&gt; 命令界面下，命令有所不同，你必須要先加載兩個模組normal.mod 和 linux.mod。</p><pre><code>grub rescue&gt; set prefix=(hd0,1)/boot/grub
grub rescue&gt; set root=(hd0,1)
grub rescue&gt; insmod normal
grub rescue&gt; normal
grub rescue&gt; insmod linux
grub rescue&gt; linux /boot/vmlinuz-3.13.0-29-generic root=/dev/sda1
grub rescue&gt; initrd /boot/initrd.img-3.13.0-29-generic
grub rescue&gt; boot
</code></pre><p>在你加載了這兩個模組之後tab補完的功能就可以用了。</p><h3 id="永久性的修復" tabindex="-1">永久性的修復 <a class="header-anchor" href="#永久性的修復" aria-label="Permalink to “永久性的修復”">​</a></h3><p>當你成功地啓動你的系統，運行這些命令來永久修復GRUB：</p><pre><code># update-grub
Generating grub configuration file ...
Found background: /usr/share/images/grub/Apollo_17_The_Last_Moon_Shot_Edit1.tga
Found background image: /usr/share/images/grub/Apollo_17_The_Last_Moon_Shot_Edit1.tga
Found linux image: /boot/vmlinuz-3.13.0-29-generic
Found initrd image: /boot/initrd.img-3.13.0-29-generic
Found linux image: /boot/vmlinuz-3.13.0-27-generic
Found initrd image: /boot/initrd.img-3.13.0-27-generic
Found linux image: /boot/vmlinuz-3.13.0-24-generic
Found initrd image: /boot/initrd.img-3.13.0-24-generic
Found memtest86+ image: /boot/memtest86+.elf
Found memtest86+ image: /boot/memtest86+.bin
done
# grub-install /dev/sda
Installing for i386-pc platform.
Installation finished. No error reported.
</code></pre><p>當你運行 <code>grub-install</code> 時，記得GRUB是安裝到整個硬盤驅動器的主引導扇區而不是到一個具體分區，所以不要加上像/dev/sda1一樣的分區號。</p><h3 id="如果還是不能使用" tabindex="-1">如果還是不能使用 <a class="header-anchor" href="#如果還是不能使用" aria-label="Permalink to “如果還是不能使用”">​</a></h3>`,23)),i("p",null,[e[5]||(e[5]=o("如果你的系統是如此的倒霉，而且這個方式沒有能起作用，那就嘗試",-1)),r(t,{href:"http://www.supergrubdisk.org/"},{default:n(()=>[...e[3]||(e[3]=[o("超級GRUB2現場救援磁盤",-1)])]),_:1}),e[6]||(e[6]=o("吧。",-1)),r(t,{href:"https://www.gnu.org/software/grub/manual/grub.html"},{default:n(()=>[...e[4]||(e[4]=[o("官方GNU GRUB手冊",-1)])]),_:1}),e[7]||(e[7]=o("也應該有所幫助。",-1))]),e[21]||(e[21]=i("hr",null,null,-1)),i("p",null,[e[9]||(e[9]=o("via: ",-1)),r(t,{href:"http://www.linux.com/learn/tutorials/776643-how-to-rescue-a-non-booting-grub-2-on-linux"},{default:n(()=>[...e[8]||(e[8]=[o("http://www.linux.com/learn/tutorials/776643-how-to-rescue-a-non-booting-grub-2-on-linux",-1)])]),_:1})]),i("p",null,[e[12]||(e[12]=o("譯者：",-1)),r(t,{href:"https://github.com/MikeCoder"},{default:n(()=>[...e[10]||(e[10]=[o("MikeCoder",-1)])]),_:1}),e[13]||(e[13]=o(" 校對：",-1)),r(t,{href:"https://github.com/wxy"},{default:n(()=>[...e[11]||(e[11]=[o("wxy",-1)])]),_:1})]),i("p",null,[e[16]||(e[16]=o("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[14]||(e[14]=[o("LCTT",-1)])]),_:1}),e[17]||(e[17]=o(" 原創翻譯，",-1)),r(t,{href:"http://linux.cn/"},{default:n(()=>[...e[15]||(e[15]=[o("Linux中國",-1)])]),_:1}),e[18]||(e[18]=o(" 榮譽推出",-1))])])}const B=d(l,[["render",b]]);export{R as __pageData,B as default};
