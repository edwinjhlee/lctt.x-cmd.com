import{_ as i,a0 as d,w as s,s as l,ao as o,I as p,a1 as r,A as t,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"Shilpa Nair 分享的 RedHat Linux 包管理方面的面試經驗 | LCTT x X-CMD","titleTemplate":false,"description":"Shilpa Nair 分享的 RedHat Linux 包管理方面的面試經驗 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shilpa Nair 分享的 RedHat Linux 包管理方面的面試經驗 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shilpa Nair 分享的 RedHat Linux 包管理方面的面試經驗 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150623 Shilpa Nair Shares Her Interview Experience on RedHat Linux Package Management","title":"Shilpa Nair 分享的 RedHat Linux 包管理方面的面試經驗","tag":"201509","desc":""},"relativePath":"201509/20150623 Shilpa Nair Shares Her Interview Experience on RedHat Linux Package Management.md","filePath":"[post].md"}'),c={name:"201509/20150623 Shilpa Nair Shares Her Interview Experience on RedHat Linux Package Management.md"};function m(h,e,f,u,x,g){const a=d("Link");return s(),l("div",null,[e[18]||(e[18]=o(`<h1 id="shilpa-nair-分享的-redhat-linux-包管理方面的面試經驗" tabindex="-1">Shilpa Nair 分享的 RedHat Linux 包管理方面的面試經驗 <a class="header-anchor" href="#shilpa-nair-分享的-redhat-linux-包管理方面的面試經驗" aria-label="Permalink to “Shilpa Nair 分享的 RedHat Linux 包管理方面的面試經驗”">​</a></h1><p><strong>Shilpa Nair 剛於2015年畢業。她之後去了一家位於 Noida，Delhi 的國家新聞電視台，應聘實習生的崗位。在她去年畢業季的時候，常逛 Tecmint 尋求作業上的幫助。從那時開始，她就常去 Tecmint。</strong></p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Linux-Interview-Questions-on-RPM.jpeg" alt="Linux Interview Questions on RPM"></p><p><em>有關 RPM 方面的 Linux 面試題</em></p><p>所有的問題和回答都是 Shilpa Nair 根據回憶重寫的。</p><blockquote><p>“大家好！我是來自 Delhi 的Shilpa Nair。我不久前才順利畢業，正尋找一個實習的機會。在大學早期的時候，我就對 UNIX 十分喜愛，所以我也希望這個機會能適合我，滿足我的興趣。我被提問了很多問題，大部分都是關於 RedHat 包管理的基礎問題。”</p></blockquote><p>下面就是我被問到的問題，和對應的回答。我僅貼出了與 RedHat GNU/Linux 包管理相關的，也是主要被提問的。</p><h3 id="_1-linux-裏如何查找一個包安裝與否-假設你需要確認-nano-有沒有安裝-你怎麼做" tabindex="-1">1，Linux 裏如何查找一個包安裝與否？假設你需要確認 ‘nano’ 有沒有安裝，你怎麼做？ <a class="header-anchor" href="#_1-linux-裏如何查找一個包安裝與否-假設你需要確認-nano-有沒有安裝-你怎麼做" aria-label="Permalink to “1，Linux 裏如何查找一個包安裝與否？假設你需要確認 ‘nano’ 有沒有安裝，你怎麼做？”">​</a></h3><p><strong>回答</strong>：為了確認 nano 軟件包有沒有安裝，我們可以使用 rpm 命令，配合 -q 和 -a 選項來查詢所有已安裝的包</p><pre><code># rpm -qa nano
或
# rpm -qa | grep -i nano

nano-2.3.1-10.el7.x86_64
</code></pre><p>同時包的名字必須是完整的，不完整的包名會返回到提示符，不打印任何東西，就是説這包（包名字不全）未安裝。下面的例子會更好理解些：</p><p>我們通常使用 vim 替代 vi 命令。當時如果我們查找安裝包 vi/vim 的時候，我們就會看到標準輸出上沒有任何結果。</p><pre><code># vi
# vim
</code></pre><p>儘管如此，我們仍然可以像上面一樣運行 vi/vim 命令來清楚地知道包有沒有安裝。只是因為我們不知道它的完整包名才不能找到的。如果我們不確切知道完整的文件名，我們可以使用通配符：</p><pre><code># rpm -qa vim*

vim-minimal-7.4.160-1.el7.x86_64
</code></pre><p>通過這種方式，我們可以獲得任何軟件包的信息，安裝與否。</p><h3 id="_2-你如何使用-rpm-命令安裝-xyz-軟件包" tabindex="-1">2. 你如何使用 rpm 命令安裝 XYZ 軟件包？ <a class="header-anchor" href="#_2-你如何使用-rpm-命令安裝-xyz-軟件包" aria-label="Permalink to “2. 你如何使用 rpm 命令安裝 XYZ 軟件包？”">​</a></h3><p><strong>回答</strong>：我們可以使用 rpm 命令安裝任何的軟件包（*.rpm），像下面這樣，選項 -i（安裝），-v（冗餘或者顯示額外的信息）和 -h（在安裝過程中，打印#號顯示進度）。</p><pre><code># rpm -ivh peazip-1.11-1.el6.rf.x86_64.rpm

Preparing...                          ################################# [100%]
Updating / installing...
   1:peazip-1.11-1.el6.rf             ################################# [100%]
</code></pre><p>如果要升級一個早期版本的包，應加上 -U 選項，選項 -v 和 -h 可以確保我們得到用 # 號表示的冗餘輸出，這增加了可讀性。</p><h3 id="_3-你已經安裝了一個軟件包-假設是-httpd-現在你想看看軟件包創建並安裝的所有文件和目錄-你會怎麼做" tabindex="-1">3. 你已經安裝了一個軟件包（假設是 httpd），現在你想看看軟件包創建並安裝的所有文件和目錄，你會怎麼做？ <a class="header-anchor" href="#_3-你已經安裝了一個軟件包-假設是-httpd-現在你想看看軟件包創建並安裝的所有文件和目錄-你會怎麼做" aria-label="Permalink to “3. 你已經安裝了一個軟件包（假設是 httpd），現在你想看看軟件包創建並安裝的所有文件和目錄，你會怎麼做？”">​</a></h3><p><strong>回答</strong>：使用選項 -l（列出所有文件）和 -q（查詢）列出 httpd 軟件包安裝的所有文件（Linux 哲學：所有的都是文件，包括目錄）。</p><pre><code># rpm -ql httpd

/etc/httpd
/etc/httpd/conf
/etc/httpd/conf.d
...
</code></pre><h3 id="_4-假如你要移除一個軟件包-叫-postfix。你會怎麼做" tabindex="-1">4. 假如你要移除一個軟件包，叫 postfix。你會怎麼做？ <a class="header-anchor" href="#_4-假如你要移除一個軟件包-叫-postfix。你會怎麼做" aria-label="Permalink to “4. 假如你要移除一個軟件包，叫 postfix。你會怎麼做？”">​</a></h3><p><strong>回答</strong>：首先我們需要知道什麼包安裝了 postfix。查找安裝 postfix 的包名後，使用 -e（擦除/卸載軟件包）和 -v（冗餘輸出）兩個選項來實現。</p><pre><code># rpm -qa postfix*

postfix-2.10.1-6.el7.x86_64
</code></pre><p>然後移除 postfix，如下:</p><pre><code># rpm -ev postfix-2.10.1-6.el7.x86_64

Preparing packages...
postfix-2:3.0.1-2.fc22.x86_64
</code></pre><h3 id="_5-獲得一個已安裝包的具體信息-如版本-發行號-安裝日期-大小-總結和一個簡短的描述。" tabindex="-1">5. 獲得一個已安裝包的具體信息，如版本，發行號，安裝日期，大小，總結和一個簡短的描述。 <a class="header-anchor" href="#_5-獲得一個已安裝包的具體信息-如版本-發行號-安裝日期-大小-總結和一個簡短的描述。" aria-label="Permalink to “5. 獲得一個已安裝包的具體信息，如版本，發行號，安裝日期，大小，總結和一個簡短的描述。”">​</a></h3><p><strong>回答</strong>：我們通過使用 rpm 的選項 -qi，後面接包名，可以獲得關於一個已安裝包的具體信息。</p><p>舉個例子，為了獲得 openssh 包的具體信息，我需要做的就是：</p><pre><code># rpm -qi openssh

[root@tecmint tecmint]# rpm -qi openssh
Name        : openssh
Version     : 6.8p1
Release     : 5.fc22
Architecture: x86_64
Install Date: Thursday 28 May 2015 12:34:50 PM IST
Group       : Applications/Internet
Size        : 1542057
License     : BSD
....
</code></pre><h3 id="_6-假如你不確定一個指定包的配置文件在哪-比如-httpd。你如何找到所有-httpd-提供的配置文件列表和位置。" tabindex="-1">6. 假如你不確定一個指定包的配置文件在哪，比如 httpd。你如何找到所有 httpd 提供的配置文件列表和位置。 <a class="header-anchor" href="#_6-假如你不確定一個指定包的配置文件在哪-比如-httpd。你如何找到所有-httpd-提供的配置文件列表和位置。" aria-label="Permalink to “6. 假如你不確定一個指定包的配置文件在哪，比如 httpd。你如何找到所有 httpd 提供的配置文件列表和位置。”">​</a></h3><p><strong>回答</strong>： 我們需要用選項 -c 接包名，這會列出所有配置文件的名字和他們的位置。</p><pre><code># rpm -qc httpd

/etc/httpd/conf.d/autoindex.conf
/etc/httpd/conf.d/userdir.conf
/etc/httpd/conf.d/welcome.conf
/etc/httpd/conf.modules.d/00-base.conf
/etc/httpd/conf/httpd.conf
/etc/sysconfig/httpd
</code></pre><p>相似地，我們可以列出所有相關的文檔文件，如下：</p><pre><code># rpm -qd httpd

/usr/share/doc/httpd/ABOUT_APACHE
/usr/share/doc/httpd/CHANGES
/usr/share/doc/httpd/LICENSE
...
</code></pre><p>我們也可以列出所有相關的證書文件，如下：</p><pre><code># rpm -qL openssh

/usr/share/licenses/openssh/LICENCE
</code></pre><p>忘了説明上面的選項 -d 和 -L 分別表示 “文檔” 和 “證書”，抱歉。</p><h3 id="_7-你找到了一個配置文件-位於-usr-share-alsa-cards-aaci-conf-現在你不確定該文件屬於哪個包。你如何查找出包的名字" tabindex="-1">7. 你找到了一個配置文件，位於‘/usr/share/alsa/cards/AACI.conf’，現在你不確定該文件屬於哪個包。你如何查找出包的名字？ <a class="header-anchor" href="#_7-你找到了一個配置文件-位於-usr-share-alsa-cards-aaci-conf-現在你不確定該文件屬於哪個包。你如何查找出包的名字" aria-label="Permalink to “7. 你找到了一個配置文件，位於‘/usr/share/alsa/cards/AACI.conf’，現在你不確定該文件屬於哪個包。你如何查找出包的名字？”">​</a></h3><p><strong>回答</strong>：當一個包被安裝後，相關的信息就存儲在了資料庫裏。所以使用選項 -qf（-f 查詢包擁有的文件）很容易追蹤誰提供了上述的包。</p><pre><code># rpm -qf /usr/share/alsa/cards/AACI.conf
alsa-lib-1.0.28-2.el7.x86_64
</code></pre><p>類似地，我們可以查找（誰提供的）關於任何子包，文檔和證書文件的信息。</p><h3 id="_8-你如何使用-rpm-查找最近安裝的軟件列表" tabindex="-1">8. 你如何使用 rpm 查找最近安裝的軟件列表？ <a class="header-anchor" href="#_8-你如何使用-rpm-查找最近安裝的軟件列表" aria-label="Permalink to “8. 你如何使用 rpm 查找最近安裝的軟件列表？”">​</a></h3><p><strong>回答</strong>：如剛剛説的，每一樣被安裝的文件都記錄在了資料庫裏。所以這並不難，通過查詢 rpm 的資料庫，找到最近安裝軟件的列表。</p><p>我們通過運行下面的命令，使用選項 -last（打印出最近安裝的軟件）達到目的。</p><pre><code># rpm -qa --last
</code></pre><p>上面的命令會打印出所有安裝的軟件，最近安裝的軟件在列表的頂部。</p><p>如果我們關心的是找出特定的包，我們可以使用 grep 命令從列表中匹配包（假設是 sqlite ），簡單如下：</p><pre><code># rpm -qa --last | grep -i sqlite

sqlite-3.8.10.2-1.fc22.x86_64                 Thursday 18 June 2015 05:05:43 PM IST
</code></pre><p>我們也可以獲得10個最近安裝的軟件列表，簡單如下：</p><pre><code># rpm -qa --last | head
</code></pre><p>我們可以重定義一下，輸出想要的結果，簡單如下：</p><pre><code># rpm -qa --last | head -n 2
</code></pre><p>上面的命令中，-n 代表數目，後面接一個常數值。該命令是打印2個最近安裝的軟件的列表。</p><h3 id="_9-安裝一個包之前-你如果要檢查其依賴。你會怎麼做" tabindex="-1">9. 安裝一個包之前，你如果要檢查其依賴。你會怎麼做？ <a class="header-anchor" href="#_9-安裝一個包之前-你如果要檢查其依賴。你會怎麼做" aria-label="Permalink to “9. 安裝一個包之前，你如果要檢查其依賴。你會怎麼做？”">​</a></h3><p><strong>回答</strong>：檢查一個 rpm 包（XYZ.rpm）的依賴，我們可以使用選項 -q（查詢包），-p（指定包名）和 -R（查詢/列出該包依賴的包，嗯，就是依賴）。</p><pre><code># rpm -qpR gedit-3.16.1-1.fc22.i686.rpm 

/bin/sh
/usr/bin/env
glib2(x86-32) &gt;= 2.40.0
gsettings-desktop-schemas
gtk3(x86-32) &gt;= 3.16
gtksourceview3(x86-32) &gt;= 3.16
gvfs
libX11.so.6
...
</code></pre><h3 id="_10-rpm-是不是一個前端的包管理工具呢" tabindex="-1">10. rpm 是不是一個前端的包管理工具呢？ <a class="header-anchor" href="#_10-rpm-是不是一個前端的包管理工具呢" aria-label="Permalink to “10. rpm 是不是一個前端的包管理工具呢？”">​</a></h3><p><strong>回答</strong>：<strong>不是！</strong>rpm 是一個後端管理工具，適用於基於 Linux 發行版的 RPM （此處指 Redhat Package Management）。</p>`,61)),p("p",null,[r(a,{href:"http://www.tecmint.com/20-linux-yum-yellowdog-updater-modified-commands-for-package-mangement/"},{default:t(()=>[...e[0]||(e[0]=[n("YUM",-1)])]),_:1}),e[1]||(e[1]=n("，全稱 Yellowdog Updater Modified，是一個 RPM 的前端工具。YUM 命令自動完成所有工作，包括解決依賴和其他一切事務。",-1))]),p("p",null,[e[3]||(e[3]=n("最近，",-1)),r(a,{href:"https://linux.cn/article-5718-1.html"},{default:t(()=>[...e[2]||(e[2]=[n("DNF",-1)])]),_:1}),e[4]||(e[4]=n("（YUM命令升級版）在Fedora 22發行版中取代了 YUM。儘管 YUM 仍然可以在 RHEL 和 CentOS 平台使用，我們也可以安裝 dnf，與 YUM 命令共存使用。據説 DNF 較於 YUM 有很多提高。",-1))]),e[19]||(e[19]=o(`<p>知道更多總是好的，保持自我更新。現在我們移步到前端部分來談談。</p><h3 id="_11-你如何列出一個系統上面所有可用的倉庫列表。" tabindex="-1">11. 你如何列出一個系統上面所有可用的倉庫列表。 <a class="header-anchor" href="#_11-你如何列出一個系統上面所有可用的倉庫列表。" aria-label="Permalink to “11. 你如何列出一個系統上面所有可用的倉庫列表。”">​</a></h3><p><strong>回答</strong>：簡單地使用下面的命令，我們就可以列出一個系統上所有可用的倉庫列表。</p><pre><code># yum repolist
或
# dnf repolist

Last metadata expiration check performed 0:30:03 ago on Mon Jun 22 16:50:00 2015.
repo id       repo name                      status
*fedora       Fedora 22 - x86_64             44,762
ozonos        Repository for Ozon OS         61
*updates      Fedora 22 - x86_64 - Updates   
</code></pre><p>上面的命令僅會列出可用的倉庫。如果你需要列出所有的倉庫，不管可用與否，可以這樣做。</p><pre><code># yum repolist all
或
# dnf repolist all

Last metadata expiration check performed 0:29:45 ago on Mon Jun 22 16:50:00 2015.
repo id           repo name                       status
*fedora           Fedora 22 - x86_64              enabled: 44,762
fedora-debuginfo  Fedora 22 - x86_64 - Debug      disabled
fedora-source     Fedora 22 - Source              disabled
ozonos            Repository for Ozon OS          enabled:     61
*updates          Fedora 22 - x86_64 - Updates    enabled:  5,018
updates-debuginfo Fedora 22 - x86_64 - Updates - Debug
</code></pre><h3 id="_12-你如何列出一個系統上所有可用並且安裝了的包" tabindex="-1">12. 你如何列出一個系統上所有可用並且安裝了的包？ <a class="header-anchor" href="#_12-你如何列出一個系統上所有可用並且安裝了的包" aria-label="Permalink to “12. 你如何列出一個系統上所有可用並且安裝了的包？”">​</a></h3><p><strong>回答</strong>：列出一個系統上所有可用的包，我們可以這樣做：</p><pre><code># yum list available
或
# dnf list available

ast metadata expiration check performed 0:34:09 ago on Mon Jun 22 16:50:00 2015.
Available Packages
0ad.x86_64                 0.0.18-1.fc22                   fedora 
0ad-data.noarch            0.0.18-1.fc22                   fedora 
0install.x86_64            2.6.1-2.fc21                    fedora 
0xFFFF.x86_64              0.3.9-11.fc22                   fedora 
2048-cli.x86_64            0.9-4.git20141214.723738c.fc22  fedora 
2048-cli-nocurses.x86_64   0.9-4.git20141214.723738c.fc22  fedora 
....
</code></pre><p>而列出一個系統上所有已安裝的包，我們可以這樣做。</p><pre><code># yum list installed
或
# dnf list installed

Last metadata expiration check performed 0:34:30 ago on Mon Jun 22 16:50:00 2015.
Installed Packages
GeoIP.x86_64                    1.6.5-1.fc22       @System
GeoIP-GeoLite-data.noarch       2015.05-1.fc22     @System
NetworkManager.x86_64           1:1.0.2-1.fc22     @System
NetworkManager-libnm.x86_64     1:1.0.2-1.fc22     @System
aajohan-comfortaa-fonts.noarch  2.004-4.fc22       @System
....
</code></pre><p>而要同時滿足兩個要求的時候，我們可以這樣做。</p><pre><code># yum list
或
# dnf list

Last metadata expiration check performed 0:32:56 ago on Mon Jun 22 16:50:00 2015.
Installed Packages
GeoIP.x86_64                    1.6.5-1.fc22       @System
GeoIP-GeoLite-data.noarch       2015.05-1.fc22     @System
NetworkManager.x86_64           1:1.0.2-1.fc22     @System
NetworkManager-libnm.x86_64     1:1.0.2-1.fc22     @System
aajohan-comfortaa-fonts.noarch  2.004-4.fc22       @System
acl.x86_64                      2.2.52-7.fc22      @System
....
</code></pre><h3 id="_13-你會怎麼在一個系統上面使用-yum-或-dnf-分別安裝和升級一個包與一組包" tabindex="-1">13. 你會怎麼在一個系統上面使用 YUM 或 DNF 分別安裝和升級一個包與一組包？ <a class="header-anchor" href="#_13-你會怎麼在一個系統上面使用-yum-或-dnf-分別安裝和升級一個包與一組包" aria-label="Permalink to “13. 你會怎麼在一個系統上面使用 YUM 或 DNF 分別安裝和升級一個包與一組包？”">​</a></h3><p><strong>回答</strong>：安裝一個包（假設是 nano），我們可以這樣做，</p><pre><code>  # yum install nano
</code></pre><p>而安裝一組包（假設是 Haskell），我們可以這樣做，</p><pre><code>  # yum groupinstall &#39;haskell&#39;
</code></pre><p>升級一個包（還是 nano），我們可以這樣做，</p><pre><code>  # yum update nano
</code></pre><p>而為了升級一組包（還是 haskell），我們可以這樣做，</p><pre><code>  # yum groupupdate &#39;haskell&#39;
</code></pre><h3 id="_14-你會如何同步一個系統上面的所有安裝軟件到穩定發行版" tabindex="-1">14. 你會如何同步一個系統上面的所有安裝軟件到穩定發行版？ <a class="header-anchor" href="#_14-你會如何同步一個系統上面的所有安裝軟件到穩定發行版" aria-label="Permalink to “14. 你會如何同步一個系統上面的所有安裝軟件到穩定發行版？”">​</a></h3><p><strong>回答</strong>：我們可以一個系統上（假設是 CentOS 或者 Fedora）的所有包到穩定發行版，如下，</p><pre><code> # yum distro-sync		[在 CentOS/ RHEL]
 或
 # dnf distro-sync		[在 Fedora 20之後版本]
</code></pre><p>似乎來面試之前你做了相當不多的功課，很好！在進一步交談前，我還想問一兩個問題。</p><h3 id="_15-你對-yum-本地倉庫熟悉嗎-你嘗試過建立一個本地-yum-倉庫嗎-讓我們簡單看看你會怎麼建立一個本地-yum-倉庫。" tabindex="-1">15. 你對 YUM 本地倉庫熟悉嗎？你嘗試過建立一個本地 YUM 倉庫嗎？讓我們簡單看看你會怎麼建立一個本地 YUM 倉庫。 <a class="header-anchor" href="#_15-你對-yum-本地倉庫熟悉嗎-你嘗試過建立一個本地-yum-倉庫嗎-讓我們簡單看看你會怎麼建立一個本地-yum-倉庫。" aria-label="Permalink to “15. 你對 YUM 本地倉庫熟悉嗎？你嘗試過建立一個本地 YUM 倉庫嗎？讓我們簡單看看你會怎麼建立一個本地 YUM 倉庫。”">​</a></h3><p><strong>回答</strong>：首先，感謝你的誇獎。回到問題，我必須承認我對本地 YUM 倉庫十分熟悉，並且在我的本地主機上也部署過，作為測試用。</p><p>1、 為了建立本地 YUM 倉庫，我們需要安裝下面三個包：</p><pre><code># yum install deltarpm  python-deltarpm  createrepo
</code></pre><p>2、 新建一個目錄(假設 /home/$USER/rpm)，然後複製 RedHat/CentOS DVD 上的 RPM 包到這個文件夾下</p><pre><code># mkdir /home/$USER/rpm
# cp /path/to/rpm/on/DVD/*.rpm /home/$USER/rpm
</code></pre><p>3、 新建基本的庫頭文件如下。</p><pre><code># createrepo -v /home/$USER/rpm
</code></pre><p>4、 在路徑 /etc/yum.repo.d 下創建一個 .repo 文件（如 abc.repo):</p><pre><code>cd /etc/yum.repos.d &amp;&amp; cat &lt;&lt; EOF abc.repo
[local-installation]name=yum-local
baseurl=file:///home/$USER/rpm
enabled=1
gpgcheck=0
EOF
</code></pre><p><strong>重要</strong>：用你的用户名替換掉 $USER。</p><p>以上就是創建一個本地 YUM 倉庫所要做的全部工作。我們現在可以從這裏安裝軟件了，相對快一些，安全一些，並且最重要的是不需要 Internet 連接。</p><p>好了！面試過程很愉快。我已經問完了。我會將你推薦給 HR。你是一個年輕且十分聰明的候選者，我們很願意你加入進來。如果你有任何問題，你可以問我。</p><p><strong>我</strong>：謝謝，這確實是一次愉快的面試，我感到今天非常幸運，可以搞定這次面試...</p><p>顯然，不會在這裏結束。我問了很多問題，比如他們正在做的項目。我會擔任什麼角色，負責什麼，，，balabalabala</p><p>小夥伴們，這之後的 3 天會經過 HR 輪，到時候所有問題到時候也會被寫成文檔。希望我當時表現不錯。感謝你們所有的祝福。</p><p>謝謝夥伴們和 Tecmint，花時間來編輯我的面試經歷。我相信 Tecmint 好夥伴們做了很大的努力，必要要贊一個。當我們與他人分享我們的經歷的時候，其他人從我們這裏知道了更多，而我們自己則發現了自己的不足。</p><p>這增加了我們的信心。如果你最近也有任何類似的面試經歷，別自己蔵着。分享出來！讓我們所有人都知道。你可以使用如下的表單來與我們分享你的經歷。</p><hr>`,45)),p("p",null,[e[6]||(e[6]=n("via: ",-1)),r(a,{href:"http://www.tecmint.com/linux-rpm-package-management-interview-questions/"},{default:t(()=>[...e[5]||(e[5]=[n("http://www.tecmint.com/linux-rpm-package-management-interview-questions/",-1)])]),_:1})]),p("p",null,[e[10]||(e[10]=n("作者：",-1)),r(a,{href:"http://www.tecmint.com/author/avishek/"},{default:t(()=>[...e[7]||(e[7]=[n("Avishek Kumar",-1)])]),_:1}),e[11]||(e[11]=n(" 譯者：",-1)),r(a,{href:"https://github.com/wi-cuckoo"},{default:t(()=>[...e[8]||(e[8]=[n("wi-cuckoo",-1)])]),_:1}),e[12]||(e[12]=n(" 校對：",-1)),r(a,{href:"https://github.com/wxy"},{default:t(()=>[...e[9]||(e[9]=[n("wxy",-1)])]),_:1})]),p("p",null,[e[15]||(e[15]=n("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[13]||(e[13]=[n("LCTT",-1)])]),_:1}),e[16]||(e[16]=n(" 原創翻譯，",-1)),r(a,{href:"https://linux.cn/"},{default:t(()=>[...e[14]||(e[14]=[n("Linux中國",-1)])]),_:1}),e[17]||(e[17]=n(" 榮譽推出",-1))])])}const S=i(c,[["render",m]]);export{k as __pageData,S as default};
