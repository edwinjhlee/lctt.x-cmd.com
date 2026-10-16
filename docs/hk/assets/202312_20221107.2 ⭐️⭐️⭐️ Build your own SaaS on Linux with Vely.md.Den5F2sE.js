import{_ as i,a0 as o,w as c,s as r,I as n,x as a,a1 as p,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"利用 Vely 在 Linux 構建你自己的 SaaS | LCTT x X-CMD","titleTemplate":false,"description":"利用 Vely 在 Linux 構建你自己的 SaaS | LCTT (202312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"利用 Vely 在 Linux 構建你自己的 SaaS | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"利用 Vely 在 Linux 構建你自己的 SaaS | LCTT (202312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202312/20221107.2 ⭐️⭐️⭐️ Build your own SaaS on Linux with Vely","title":"利用 Vely 在 Linux 構建你自己的 SaaS","tag":"202312","desc":""},"relativePath":"202312/20221107.2 ⭐️⭐️⭐️ Build your own SaaS on Linux with Vely.md","filePath":"[post].md"}'),d={name:"202312/20221107.2 ⭐️⭐️⭐️ Build your own SaaS on Linux with Vely.md"};function u(h,s,g,q,b,m){const e=o("Link");return c(),r("div",null,[s[20]||(s[20]=n("h1",{id:"利用-vely-在-linux-構建你自己的-saas",tabindex:"-1"},[a("利用 Vely 在 Linux 構建你自己的 SaaS "),n("a",{class:"header-anchor",href:"#利用-vely-在-linux-構建你自己的-saas","aria-label":"Permalink to “利用 Vely 在 Linux 構建你自己的 SaaS”"},"​")],-1)),s[21]||(s[21]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202312/12/110902myyfcm3hdmwqv3zy.jpg",alt:""})],-1)),s[22]||(s[22]=n("blockquote",null,[n("p",null,"Vely 可讓你在網絡應用程序中利用 C 語言的強大功能。")],-1)),n("p",null,[p(e,{href:"https://opensource.com/article/22/5/write-c-appplications-vely-linux"},{default:l(()=>[...s[0]||(s[0]=[a("Vely",-1)])]),_:1}),s[1]||(s[1]=a(" 將 C 語言的高性能和低內存佔用與 PHP 等語言的易用性和安全性相結合。作為自由開源軟件，它以 GPLv3 和 LGPL 3 授權，所以你甚至可以用它來構建商業軟件。",-1))]),s[23]||(s[23]=t('<h3 id="利用-vely-構建-saas" tabindex="-1">利用 Vely 構建 SaaS <a class="header-anchor" href="#利用-vely-構建-saas" aria-label="Permalink to “利用 Vely 構建 SaaS”">​</a></h3><p>你可以使用 Vely 創建一個多租户網絡應用程序，它可以作為軟件即服務模式（SaaS）在互聯網上運行。每個用户都有一個完全獨立的數據空間。</p><p>在這個網絡應用程序示例中，用户可以註冊一個筆記本服務來創建筆記，然後查看和刪除它們。它僅用了 7 個源文件，310 行代碼，就展示瞭如何集成多項技術:</p><ul><li>MariaDB</li><li>網絡瀏覽器</li><li>Apache</li><li>Unix 套接字</li></ul><h4 id="運作原理" tabindex="-1">運作原理 <a class="header-anchor" href="#運作原理" aria-label="Permalink to “運作原理”">​</a></h4><p>以下是從用户的角度來看應用程序是如何工作的。下圖是代碼演示。</p><p>該應用允許用户通過指定電子郵件地址和密碼創建新的登錄名。你可以用任何你喜歡的方式設置它們，例如運用 CSS：</p><p><img src="https://opensource.com/sites/default/files/2022-10/1createuser.png" alt="創建一個用户賬户"></p><p>驗證用户的電子郵件:</p><p><img src="https://opensource.com/sites/default/files/2022-10/2verifyemail.png" alt="驗證用户的電子郵件地址"></p><p>每個用户使用自己獨有的用户名和密碼登錄：</p><p><img src="https://opensource.com/sites/default/files/2022-10/3login.png" alt="用户登錄"></p><p>一旦登錄，用户就可以添加筆記：</p><p><img src="https://opensource.com/sites/default/files/2022-10/4addnote.png" alt="用户可以添加筆記"></p><p>用户可以獲取筆記列表：</p><p><img src="https://opensource.com/sites/default/files/2022-10/5listnotes.png" alt="用户列舉筆記"></p><p>刪除筆記之前，應用會申請確認信息：</p><p><img src="https://opensource.com/sites/default/files/2022-10/6confirmdelete.png" alt="刪除筆記之前，應用會申請確認信息"></p><p>用户確認後，筆記被刪除：</p><p><img src="https://opensource.com/sites/default/files/2022-10/7notedeleted.png" alt="用户確認後，筆記被刪除"></p><h4 id="設置先決條件" tabindex="-1">設置先決條件 <a class="header-anchor" href="#設置先決條件" aria-label="Permalink to “設置先決條件”">​</a></h4>',21)),n("p",null,[s[3]||(s[3]=a("遵照 ",-1)),p(e,{href:"https://vely.dev/"},{default:l(()=>[...s[2]||(s[2]=[a("Vely.dev",-1)])]),_:1}),s[4]||(s[4]=a(" 上的安裝指示。這是一個使用 DNF、APT、Pacman 或者 Zypper 等標準工具包的快速流程。",-1))]),s[24]||(s[24]=t(`<p>由於它們都是這個範例的一部分，你必須安裝 Apache 作為網絡服務器，安裝 MariaDB 作為資料庫。</p><p>安裝 Vely 後，如使用 Vim，打開裏面的“語法高亮顯示”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vv -m</span></span></code></pre></div><h4 id="獲取源代碼" tabindex="-1">獲取源代碼 <a class="header-anchor" href="#獲取源代碼" aria-label="Permalink to “獲取源代碼”">​</a></h4><p>這個演示 SaaS 應用程序的源代碼是 Vely 安裝的一部分。為每個應用程序創建一個單獨的源代碼目錄不失為一個好主意（而且你可以按自己喜好命名）。在這種情況下，解包源代碼會幫你完成這些工作:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tar xvf $(vv -o)/examples/multitenant_SaaS.tar.gz</span></span>
<span class="line"><span>$ cd multitenant_SaaS</span></span></code></pre></div><p>默認情況下，該應用程序以 <code>multitenant_SaaS</code> 命名，但你可以將其命名為任何內容（如果這麼做，其他每個地方你都需要改一下）。</p><h3 id="創建應用程序" tabindex="-1">創建應用程序 <a class="header-anchor" href="#創建應用程序" aria-label="Permalink to “創建應用程序”">​</a></h3><p>第一步是創建一個應用程序。使用 Vely 的 <code>vf</code> 工具就可以輕鬆完成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo vf -i-u $(whoami) multitenant_SaaS</span></span></code></pre></div><p>這個命令創建了一個新的應用程序主目錄（<code>/var/lib/vv/multitenant_SaaS</code>），並幫你執行應用程序設置。通常，這意味着在該主目錄中創建各種子目錄並分配權限。在這種情況下，只有當前用户（<code>whoami</code> 的結果）擁有目錄，具有 <code>0700</code> 權限，這確保了其他人沒有訪問文件的權限。</p><h3 id="創建資料庫" tabindex="-1">創建資料庫 <a class="header-anchor" href="#創建資料庫" aria-label="Permalink to “創建資料庫”">​</a></h3><p>在你鍵入任何代碼之前，你需要一個能夠存儲該應用程序所用信息的空間。首先，創建一個名為 <code>db_multitenant_SaaS</code> 的 MariaDB 資料庫，由用户名為 <code>vely</code> 的用户所有，密碼為 <code>your_password</code> 。你可以修改剛才提到的任何值，但得記住，在這個示例裏，你需要將包含這些內容的每個地方都得修改一遍。</p><p>在 MySQL 中以 root 身份登錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>create database if not exists db_multitenant_SaaS;</span></span>
<span class="line"><span>create user if not exists vely identified by &#39;your_password&#39;;</span></span>
<span class="line"><span>grant create,alter,drop,select,insert,delete,update on db_multitenant_SaaS.* to vely;</span></span></code></pre></div><p>然後在資料庫內創建資料庫對象（表，記錄等等）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use db_multitenant_SaaS;</span></span>
<span class="line"><span>source setup.sql;</span></span>
<span class="line"><span>exit</span></span></code></pre></div><h3 id="將-vely-連接至資料庫" tabindex="-1">將 Vely 連接至資料庫 <a class="header-anchor" href="#將-vely-連接至資料庫" aria-label="Permalink to “將 Vely 連接至資料庫”">​</a></h3><p>為了讓 Vely 知曉你資料庫的位置以及如何登錄進去，創建一個名為 <code>db_multitenant_SaaS</code> 的資料庫配置文件。（該名稱用於在源代碼中的資料庫聲明，所以如果你改了它，確保在它存在的每個地方都改一遍。）</p><p>Vely 使用原生的 MariaDB 資料庫連接，因此你可以指定給定的資料庫所能允許的任何選項:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &#39;[client]</span></span>
<span class="line"><span>user=vely</span></span>
<span class="line"><span>password=your_password</span></span>
<span class="line"><span>database=db_multitenant_SaaS</span></span>
<span class="line"><span>protocol=TCP</span></span>
<span class="line"><span>host=127.0.0.1</span></span>
<span class="line"><span>port=3306&#39; &gt; db_multitenant_SaaS</span></span></code></pre></div><h3 id="構建應用程序" tabindex="-1">構建應用程序 <a class="header-anchor" href="#構建應用程序" aria-label="Permalink to “構建應用程序”">​</a></h3><p>使用 <code>vv</code> 工具構建應用程序，利用 <code>--db</code> 選項指定 MariaDB 資料庫和資料庫配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vv -q--db=mariadb:db_multitenant_SaaS</span></span></code></pre></div><h3 id="啓用應用服務器" tabindex="-1">啓用應用服務器 <a class="header-anchor" href="#啓用應用服務器" aria-label="Permalink to “啓用應用服務器”">​</a></h3><p>啓動你的網絡應用程序的服務器，需要使用 <code>vf</code> FastCGI 進程管理器。應用程序服務器使用 Unix 套接字與網絡服務器（創建反向代理）通信：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vf -w3 multitenant_SaaS</span></span></code></pre></div><p>這麼做會啓用三個守護進程，為接收到的請求提供服務。你也可以啓動一個自適應服務器，它會增加進程的數量從而服務更多的請求，並在不需要他們時減少進程的數量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vf multitenant_SaaS</span></span></code></pre></div><p>請參閲 <code>vf</code> 瞭解更多選項，以幫助你實現最佳性能。</p><p>當你需要停止你的應用程序服務器，使用 <code>-m quit</code> 選項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vf -m quit multitenant_SaaS</span></span></code></pre></div><h3 id="創建網絡服務器" tabindex="-1">創建網絡服務器 <a class="header-anchor" href="#創建網絡服務器" aria-label="Permalink to “創建網絡服務器”">​</a></h3><p>這是一個網絡應用程序，那麼應用程序就得需要一個網絡服務器。該示例通過一個 Unix 套接字監聽器使用 Apache。</p><h4 id="_1、設置-apache" tabindex="-1">1、設置 Apache <a class="header-anchor" href="#_1、設置-apache" aria-label="Permalink to “1、設置 Apache”">​</a></h4><p>將 Apache 配置為一個反向代理，並將你的應用程序與之連接，你需要啓用 FastCGI 代理支持，這通常使用 <code>proxy</code> 和 <code>proxy_fcgi</code> 模組。</p><p>對於 Fedora 系統（或者其它的，比如 Arch）來説，通過在 Apache 配置文件 <code>/etc/httpd/conf/httpd.conf</code> 中添加（或取消註釋）適當的 <code>LoadModule</code> 指令，就可啓用 <code>proxy</code> 和 <code>proxy_fcgi</code> 模組。</p><p>以下指令適用於 Debian，Ubuntu 以及類似的系統，啓用 <code>proxy</code> 和 <code>proxy_fcgi</code> 模組：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo a2enmod proxy</span></span>
<span class="line"><span>$ sudo a2enmod proxy_fcgi</span></span></code></pre></div><p>以下指令適用於 OpenSUSE，將這幾行添加在 <code>/etc/apache2/httpd.conf</code> 結尾處：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>LoadModule proxy_module modules/mod_proxy.so</span></span>
<span class="line"><span>LoadModule proxy_fcgi_module modules/mod_proxy_fcgi.so</span></span></code></pre></div><h4 id="_2、配置-apache" tabindex="-1">2、配置 Apache <a class="header-anchor" href="#_2、配置-apache" aria-label="Permalink to “2、配置 Apache”">​</a></h4><p>現在你必須將代理信息添加在 Apache 的配置文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ProxyPass &quot;/multitenant_SaaS&quot; unix:///var/lib/vv/multitenant_SaaS/sock/sock|fcgi://localhost/multitenant_SaaS</span></span></code></pre></div><p>你的配置文件的位置可能會有所不同，這取決於不同的 Linux 發行版：</p><ul><li>Fedora、CentOS、Mageia 和 Arch： <code>/etc/httpd/conf/httpd.conf</code></li><li>Debian、Ubuntu、Mint： <code>/etc/apache2/apache2.conf</code></li><li>OpenSUSE：<code>/etc/apache2/httpd.conf</code></li></ul><h4 id="_3、重新啓動" tabindex="-1">3、重新啓動 <a class="header-anchor" href="#_3、重新啓動" aria-label="Permalink to “3、重新啓動”">​</a></h4><p>最後，重啓 Apache。在 Fedora 和類似系統，還有 Arch Linux 是如下指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl restart httpd</span></span></code></pre></div><p>在 Debian 和基於 Debian 的系統，還有 OpenSUSE 是如下指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl restart apache2</span></span></code></pre></div><h3 id="設置本地郵箱" tabindex="-1">設置本地郵箱 <a class="header-anchor" href="#設置本地郵箱" aria-label="Permalink to “設置本地郵箱”">​</a></h3><p>這個示例中，電子郵件是其功能的一部分。如果你的服務器已經可以發送電子郵件了，你可以跳過這一條。此外，你可以使用本地郵箱（<code>myuser@localhost</code>）來測試它。要做到這一點，需安裝 Sendmail。</p><p>在 Fedora 和類似系統中是如下指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf installsendmail</span></span>
<span class="line"><span>$ sudo systemctl start sendmail</span></span></code></pre></div><p>而在 Debian 和類似系統（如 Ubuntu）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt installsendmail</span></span>
<span class="line"><span>$ sudo systemctl start sendmail</span></span></code></pre></div><p>當應用程序向本地用户發送電子郵件，比如説 <code>OS_user@localhost</code>，你就可以通過查看 <code>/var/mail/</code> 處（即所謂“郵件池”）來確認電子郵件是否被髮送。</p><h3 id="從瀏覽器訪問應用服務器" tabindex="-1">從瀏覽器訪問應用服務器 <a class="header-anchor" href="#從瀏覽器訪問應用服務器" aria-label="Permalink to “從瀏覽器訪問應用服務器”">​</a></h3><p>假設你在本地運行該應用，可以通過使用 <code>http://127.0.0.1/multitenant_SaaS?req=notes&amp;action=begin</code> 域名從你的網絡服務器訪問你的應用服務器。如果你在互聯網上的在線服務器運行該程序，你可能就需要調整防火牆設置以允許 HTTP 通信。</p><h3 id="源代碼" tabindex="-1">源代碼 <a class="header-anchor" href="#源代碼" aria-label="Permalink to “源代碼”">​</a></h3><p>該應用程序示例包含 7 個源文件。你可以自行回顧代碼（記住，這些文件只有 310 行代碼），下面是每個文件的概述。</p><h4 id="sql-設置-setup-sql" tabindex="-1">SQL 設置（setup.sql） <a class="header-anchor" href="#sql-設置-setup-sql" aria-label="Permalink to “SQL 設置（setup.sql）”">​</a></h4><p>創建的兩個表：</p><ul><li><code>users</code>：每個用户的信息。在 <code>users</code> 表中，每個用户都有自己唯一的 ID （<code>userId</code> 列），以及其他信息，如電子郵件地址和該地址是否通過了驗證。還有一個哈希密碼。實際的密碼永遠不會存儲在純文本（或其他形式）中，單向哈希用於檢查密碼。</li><li><code>notes</code>：用户輸入的筆記。<code>notes</code> 表包含了所有的筆記，每個筆記都有一個 <code>userId</code> 列，表示哪個用户擁有它們。<code>userId</code> 列的值與 <code>users</code> 表中的同名列匹配。這樣，每個筆記顯然都屬於單個用户。</li></ul><p>該文件內容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>create table if not exists notes (dateOf datetime, noteId bigint auto_increment primary key, userId bigint, note varchar(1000));</span></span>
<span class="line"><span>create table if not exists users (userId bigint auto_increment primary key, email varchar(100), hashed_pwd varchar(100), verified smallint, verify_token varchar(30), session varchar(100));</span></span>
<span class="line"><span>create unique index if not exists users1 on users (email);</span></span></code></pre></div><h4 id="運行時數據-login-h" tabindex="-1">運行時數據（login.h） <a class="header-anchor" href="#運行時數據-login-h" aria-label="Permalink to “運行時數據（login.h）”">​</a></h4><p>為了正確地顯示登錄、註冊和註銷鏈接，你需要一些在應用程序中任何地方都可以使用的標誌。此外，應用程序使用 cookie 來維護會話，因此它需要在任何地方都可用，例如，驗證會話是否有效。發送到應用程序的每個請求都以這種方式進行確認。只有帶有可驗證 cookie 的請求是允許的。</p><p>所以要做到這種效果，你需要有一個 <code>global_request_data</code> 類型的 <code>reqdata</code>（請求數據），其中包含 <code>sess_userId</code>（用户的 ID）以及 <code>sess_id</code>（用户目前的會話 ID）。此外，還有一些不言自明的標誌，可以幫助渲染頁面：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#ifndef _VV_LOGIN</span></span>
<span class="line"><span>#define _VV_LOGIN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct s_reqdata {</span></span>
<span class="line"><span>    bool displayed_logout; // true 則顯示登出連接</span></span>
<span class="line"><span>    bool is_logged_in; // true 則會話已驗證登錄</span></span>
<span class="line"><span>    char *sess_userId; // 目前會話的用户 ID</span></span>
<span class="line"><span>    char *sess_id; // 會話 ID</span></span>
<span class="line"><span>} reqdata;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void login_or_signup ();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif</span></span></code></pre></div><h4 id="會話檢查和會話數據-before-vely" tabindex="-1">會話檢查和會話數據（_before.vely） <a class="header-anchor" href="#會話檢查和會話數據-before-vely" aria-label="Permalink to “會話檢查和會話數據（_before.vely）”">​</a></h4><p>Vely 裏有一個 <ruby>請求前處理程序<rt>before_request handler</rt></ruby> 的概念。你寫的代碼會在其它處理請求的代碼之前執行的。要達到這個目的，你只需要將這樣的代碼寫在名為 <code>_before.vely</code> 的文件中，然後剩餘的部分將會自動處理。</p><p>SaaS 應用程序所作的任何事情，例如處理發送至應用程序的請求，必須驗證其安全性。這樣，應用程序就能知曉調用方是否有執行操作所需要的權限。</p><p>在這裏，通過請求前處理程序進行權限檢查。這樣，無論其他代碼如何處理請求，都已經掌握了會話信息。</p><p>為保持會話數據（比如會話 ID 和用户 ID）在你代碼中的任何地方都可用，你可以使用 <code>global_request_data</code>。它只是一個指向內存的通用指針（<code>void*</code>），任何處理請求的代碼都可以訪問它。這非常適合處理會話，如下所示:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &quot;vely.h&quot;</span></span>
<span class="line"><span>#include &quot;login.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// _before() 是一個請求前處理程序。</span></span>
<span class="line"><span>// 它總是在處理請求的其他代碼之前執行。</span></span>
<span class="line"><span>// 對於任何類型的請求範圍設置或數據初始化，它都是一個很好的位置。</span></span>
<span class="line"><span>void _before() {</span></span>
<span class="line"><span>    // 輸出 HTTP 請求頭</span></span>
<span class="line"><span>    out-header default</span></span>
<span class="line"><span>    reqdata *rd; // 這是全局請求數據，見 login.h</span></span>
<span class="line"><span>    // 為全局請求數據分配內存，</span></span>
<span class="line"><span>    // 將在請求結束時自動釋放</span></span>
<span class="line"><span>    new-mem rd size sizeof(reqdata)</span></span>
<span class="line"><span>    // 初始化標誌</span></span>
<span class="line"><span>    rd-&gt;displayed_logout = false;</span></span>
<span class="line"><span>    rd-&gt;is_logged_in = false;</span></span>
<span class="line"><span>    // 將我們創建的數據設置為全局請求數據，</span></span>
<span class="line"><span>    // 可以從任何處理請求的代碼中訪問</span></span>
<span class="line"><span>    set-req data rd</span></span>
<span class="line"><span>    // 檢查會話是否存在（基於來自客户端的 cookie）</span></span>
<span class="line"><span>    // 這在任何其他請求處理代碼之前執行，</span></span>
<span class="line"><span>    // 使其更容易準備好會話信息</span></span>
<span class="line"><span>    _check_session ();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="檢查會話是否有效-check-session-vely" tabindex="-1">檢查會話是否有效（_check_session.vely） <a class="header-anchor" href="#檢查會話是否有效-check-session-vely" aria-label="Permalink to “檢查會話是否有效（_check_session.vely）”">​</a></h4><p>多租户 SaaS 應用程序中最重要的任務之一就是通過檢查用户是否登錄來（儘快）檢查會話是否有效。這是通過從客户端（例如網絡瀏覽器）獲取會話 ID 和用户 ID 的 cookie，並將它們與存儲會話的資料庫進行比較來實現的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &quot;vely.h&quot;</span></span>
<span class="line"><span>#include &quot;login.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 檢查會話是否有效</span></span>
<span class="line"><span>void _check_session () {</span></span>
<span class="line"><span>    // 獲取全局請求數據</span></span>
<span class="line"><span>    reqdata *rd;</span></span>
<span class="line"><span>    get-req data to rd</span></span>
<span class="line"><span>    // 自用户瀏覽器獲取 cookies</span></span>
<span class="line"><span>    get-cookie rd-&gt;sess_userId=&quot;sess_userId&quot;</span></span>
<span class="line"><span>    get-cookie rd-&gt;sess_id=&quot;sess_id&quot;</span></span>
<span class="line"><span>    if (rd-&gt;sess_id[0] != 0) {</span></span>
<span class="line"><span>        // 檢查給定用户 ID 下的會話 ID 是否正確</span></span>
<span class="line"><span>        char *email;</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;select email from users where userId=&#39;%s&#39; and session=&#39;%s&#39;&quot; output email : rd-&gt;sess_userId, rd-&gt;sess_id row-count define rcount</span></span>
<span class="line"><span>            query-result email to email</span></span>
<span class="line"><span>        end-query</span></span>
<span class="line"><span>        if (rcount == 1) {</span></span>
<span class="line"><span>            // 如果正確，設置登錄標誌</span></span>
<span class="line"><span>            rd-&gt;is_logged_in = true;</span></span>
<span class="line"><span>            // 如果登出鏈接不顯示，則顯示它</span></span>
<span class="line"><span>            if (rd-&gt;displayed_logout == false) {</span></span>
<span class="line"><span>                @Hi &lt;&lt;p-out email&gt;&gt;! &lt;a href=&quot;https://opensource.com/?req=login&amp;action=logout&quot;&gt;Logout&lt;/a&gt;&lt;br/&gt;</span></span>
<span class="line"><span>                rd-&gt;displayed_logout = true;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else rd-&gt;is_logged_in = false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="註冊、登錄、登出-login-vely" tabindex="-1">註冊、登錄、登出（login.vely） <a class="header-anchor" href="#註冊、登錄、登出-login-vely" aria-label="Permalink to “註冊、登錄、登出（login.vely）”">​</a></h4><p>任何多租户系統的基礎便是具有用户註冊\\登錄和登出的功能。通常情況下，註冊包括驗證電子郵件地址；不止於此，同一電子郵件地址會作為一個用户名。這裏就是這種情況。</p><p>這裏實現了幾個執行該功能所必須的子請求：</p><ul><li>註冊新用户時，顯示 HTML 表單以收集信息。它的 URL 請求籤名是 <code>req=login&amp;action=newuser</code>。</li><li>作為對註冊表單的響應，創建一個新用户。URL 請求的簽名是 <code>req=login&amp;action=createuser</code>。輸入參數（<code>input-param</code>）信號獲取 <code>email</code> 和 <code>pwd</code> 的 POST 表單字段。密碼值是單向散列，電子郵件驗證令牌是一個隨機的 5 位數字。這些被插入到 <code>users</code> 表中，創建一個新用户。系統會發送一封驗證郵件，並提示用户閲讀郵件並輸入代碼。</li><li>通過輸入發送到該電子郵件的驗證碼來驗證電子郵件。URL 請求的簽名是 <code>req=login&amp;action=verify</code>。</li><li>顯示一個登錄表單，讓用户登錄。URL 請求的簽名是 <code>req=login</code>（例如，<code>action</code> 為空）。</li><li>通過驗證電子郵件地址（用户名）和密碼登錄。URL 請求的簽名是 <code>req=login&amp;action=login</code>。</li><li>應用户要求登出。URL 請求的簽名是 <code>req=login&amp;action=logout</code>。</li><li>應用程序的登錄頁。URL 請求的簽名是 <code>req=login&amp;action=begin</code>。</li><li>如果用户當前已登錄，轉到應用程序的登錄頁面。</li></ul><p>可以看看下面這些例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &quot;vely.h&quot;</span></span>
<span class="line"><span>#include &quot;login.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 處理雲端多租户應用程序的會話維護、登錄、註銷、會話驗證</span></span>
<span class="line"><span>void login () {</span></span>
<span class="line"><span>    // 獲取 URL 的輸入參數 \`action\`</span></span>
<span class="line"><span>    input-param action</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 獲取全局請求數據，我們在其中記錄會話信息，所以它很方便</span></span>
<span class="line"><span>    reqdata *rd;</span></span>
<span class="line"><span>    get-req data to rd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果會話已經建立，我們不會</span></span>
<span class="line"><span>    // 繼續到應用程序主頁的唯一原因是我們正在登出</span></span>
<span class="line"><span>    if (rd-&gt;is_logged_in) {</span></span>
<span class="line"><span>        if (strcmp(action, &quot;logout&quot;)) {</span></span>
<span class="line"><span>            _show_home();</span></span>
<span class="line"><span>            exit-request</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 應用程序頁面啓動。顯示登錄或註冊的鏈接，</span></span>
<span class="line"><span>    // 並顯示適當的主屏幕</span></span>
<span class="line"><span>    if (!strcmp (action, &quot;begin&quot;)) {</span></span>
<span class="line"><span>        _show_home();</span></span>
<span class="line"><span>        exit-request</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 開始創建新用户。詢問電子郵件和密碼，</span></span>
<span class="line"><span>    // 然後提交此表單時創建用户。</span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;newuser&quot;)) {</span></span>
<span class="line"><span>        @Create New User&lt;hr/&gt;</span></span>
<span class="line"><span>        @&lt;form action=&quot;https://opensource.com/?req=login&quot; method=&quot;POST&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;action&quot; type=&quot;hidden&quot; value=&quot;createuser&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;email&quot; type=&quot;text&quot; value=&quot;&quot; size=&quot;50&quot; maxlength=&quot;50&quot; required autofocus placeholder=&quot;Email&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;pwd&quot; type=&quot;password&quot; value=&quot;&quot; size=&quot;50&quot; maxlength=&quot;50&quot; required placeholder=&quot;Password&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input type=&quot;submit&quot; value=&quot;Sign Up&quot;&gt;</span></span>
<span class="line"><span>        @&lt;/form&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 驗證用户發送到電子郵件的代碼。代碼必須匹配，從而驗證電子郵件地址   </span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;verify&quot;)) {</span></span>
<span class="line"><span>        input-param code</span></span>
<span class="line"><span>        input-param email</span></span>
<span class="line"><span>        // 獲取基於電子郵件的驗證令牌</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;select verify_token from users where email=&#39;%s&#39;&quot; output db_verify : email</span></span>
<span class="line"><span>            query-result db_verify to define db_verify</span></span>
<span class="line"><span>            // 將資料庫中記錄的令牌與用户提供的令牌進行比較</span></span>
<span class="line"><span>            if (!strcmp (code, db_verify)) {</span></span>
<span class="line"><span>                @Your email has been verifed. Please &lt;a href=&quot;https://opensource.com/?req=login&quot;&gt;Login&lt;/a&gt;.</span></span>
<span class="line"><span>                // 如果匹配，更新用户信息以表明已驗證。</span></span>
<span class="line"><span>                run-query @db_multitenant_SaaS no-loop = &quot;update users set verified=1 where email=&#39;%s&#39;&quot; : email</span></span>
<span class="line"><span>                exit-request</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        end-query</span></span>
<span class="line"><span>        @Could not verify the code. Please try &lt;a href=&quot;https://opensource.com/?req=login&quot;&gt;again&lt;/a&gt;.</span></span>
<span class="line"><span>        exit-request</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 創建用户 —— 當用户使用電子郵件和密碼提交表單以創建用户時運行    </span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;createuser&quot;)) {</span></span>
<span class="line"><span>        input-param email</span></span>
<span class="line"><span>        input-param pwd</span></span>
<span class="line"><span>        // 創建散列（單向）密碼</span></span>
<span class="line"><span>        hash-string pwd to define hashed_pwd</span></span>
<span class="line"><span>        // 生成隨機的 5 位數字字符串驗證代碼</span></span>
<span class="line"><span>        random-string to define verify length 5 number</span></span>
<span class="line"><span>        // 創建用户：插入電子郵件、哈希密碼、驗證令牌。當前驗證狀態為 0，或未驗證</span></span>
<span class="line"><span>        begin-transaction @db_multitenant_SaaS</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS no-loop = &quot;insert into users (email, hashed_pwd, verified, verify_token, session) values (&#39;%s&#39;, &#39;%s&#39;, &#39;0&#39;, &#39;%s&#39;, &#39;&#39;)&quot; : email, hashed_pwd, verify affected-rows define arows error define err on-error-continue</span></span>
<span class="line"><span>        if (strcmp (err, &quot;0&quot;) || arows != 1) {</span></span>
<span class="line"><span>            // 如果不能添加用户，則可能該用户不存在。不管怎樣，我們都無法繼續。</span></span>
<span class="line"><span>            login_or_signup();</span></span>
<span class="line"><span>            @User with this email already exists.</span></span>
<span class="line"><span>            rollback-transaction @db_multitenant_SaaS</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 創建帶有驗證碼的電子郵件並將其發送給用户</span></span>
<span class="line"><span>            write-string define msg</span></span>
<span class="line"><span>                @From: vely@vely.dev</span></span>
<span class="line"><span>                @To: &lt;&lt;p-out email&gt;&gt;</span></span>
<span class="line"><span>                @Subject: verify your account</span></span>
<span class="line"><span>                @</span></span>
<span class="line"><span>                @Your verification code is: &lt;&lt;p-out verify&gt;&gt;</span></span>
<span class="line"><span>            end-write-string</span></span>
<span class="line"><span>            exec-program &quot;/usr/sbin/sendmail&quot; args &quot;-i&quot;, &quot;-t&quot; input msg status define st</span></span>
<span class="line"><span>            if (st != 0) {</span></span>
<span class="line"><span>                @Could not send email to &lt;&lt;p-out email&gt;&gt;, code is &lt;&lt;p-out verify&gt;&gt;</span></span>
<span class="line"><span>                rollback-transaction @db_multitenant_SaaS</span></span>
<span class="line"><span>                exit-request</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            commit-transaction @db_multitenant_SaaS</span></span>
<span class="line"><span>            // 通知用户查看郵件並輸入驗證碼</span></span>
<span class="line"><span>            @Please check your email and enter verification code here:</span></span>
<span class="line"><span>            @&lt;form action=&quot;https://opensource.com/?req=login&quot; method=&quot;POST&quot;&gt;</span></span>
<span class="line"><span>            @&lt;input name=&quot;action&quot; type=&quot;hidden&quot; value=&quot;verify&quot; size=&quot;50&quot; maxlength=&quot;50&quot;&gt;</span></span>
<span class="line"><span>            @&lt;input name=&quot;email&quot; type=&quot;hidden&quot; value=&quot;&lt;&lt;p-out email&gt;&gt;&quot;&gt;</span></span>
<span class="line"><span>            @&lt;input name=&quot;code&quot; type=&quot;text&quot; value=&quot;&quot; size=&quot;50&quot; maxlength=&quot;50&quot; required autofocus placeholder=&quot;Verification code&quot;&gt;</span></span>
<span class="line"><span>            @&lt;button type=&quot;submit&quot;&gt;Verify&lt;/button&gt;</span></span>
<span class="line"><span>            @&lt;/form&gt;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 這裏在登錄用户登出時運行    </span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;logout&quot;)) {</span></span>
<span class="line"><span>        // 更新用户表以清除會話，即沒有該用户登錄</span></span>
<span class="line"><span>        if (rd-&gt;is_logged_in) {</span></span>
<span class="line"><span>            run-query @db_multitenant_SaaS = &quot;update users set session=&#39;&#39; where userId=&#39;%s&#39;&quot; : rd-&gt;sess_userId no-loop affected-rows define arows</span></span>
<span class="line"><span>            if (arows == 1) {</span></span>
<span class="line"><span>                rd-&gt;is_logged_in = false; // 提示用户未登錄</span></span>
<span class="line"><span>                @You have been logged out.&lt;hr/&gt;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        _show_home();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 登錄：當用户輸入用户名和密碼時運行</span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;login&quot;)) {</span></span>
<span class="line"><span>        input-param pwd</span></span>
<span class="line"><span>        input-param email</span></span>
<span class="line"><span>        // 創建單向散列，目的是與用户表進行比較 —— 密碼**永遠不會**被記錄</span></span>
<span class="line"><span>        hash-string pwd to define hashed_pwd</span></span>
<span class="line"><span>        // 為會話 ID 創建一個隨機的 30 位長的字符串</span></span>
<span class="line"><span>        random-string to rd-&gt;sess_id length 30</span></span>
<span class="line"><span>        // 檢查用户名和哈希密碼是否匹配</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;select userId from users where email=&#39;%s&#39; and hashed_pwd=&#39;%s&#39;&quot; output sess_userId : email, hashed_pwd</span></span>
<span class="line"><span>            query-result sess_userId to rd-&gt;sess_userId</span></span>
<span class="line"><span>            // 如果匹配，使用會話 ID 更新用户表</span></span>
<span class="line"><span>            run-query @db_multitenant_SaaS no-loop = &quot;update users set session=&#39;%s&#39; where userId=&#39;%s&#39;&quot; : rd-&gt;sess_id, rd-&gt;sess_userId affected-rows define arows</span></span>
<span class="line"><span>            if (arows != 1) {</span></span>
<span class="line"><span>                @Could not create a session. Please try again. &lt;&lt;.login_or_signup();&gt;&gt; &lt;hr/&gt;</span></span>
<span class="line"><span>                exit-request</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 設置“用户 ID”和“會話 ID”為 cookie。用户的瀏覽器將在每個請求中返回這些信息</span></span>
<span class="line"><span>            set-cookie &quot;sess_userId&quot; = rd-&gt;sess_userId</span></span>
<span class="line"><span>            set-cookie &quot;sess_id&quot; = rd-&gt;sess_id</span></span>
<span class="line"><span>            // 顯示主頁，確保會話是正確的，並設置標誌</span></span>
<span class="line"><span>            _check_session();</span></span>
<span class="line"><span>            _show_home();</span></span>
<span class="line"><span>            exit-request</span></span>
<span class="line"><span>        end-query</span></span>
<span class="line"><span>        @Email or password are not correct. &lt;&lt;.login_or_signup();&gt;&gt;&lt;hr/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 登錄界面，要求用户輸入用户名和密碼  </span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;&quot;)) {</span></span>
<span class="line"><span>        login_or_signup();</span></span>
<span class="line"><span>        @Please Login:&lt;hr/&gt;</span></span>
<span class="line"><span>        @&lt;form action=&quot;https://opensource.com/?req=login&quot; method=&quot;POST&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;action&quot; type=&quot;hidden&quot; value=&quot;login&quot; size=&quot;50&quot; maxlength=&quot;50&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;email&quot; type=&quot;text&quot; value=&quot;&quot; size=&quot;50&quot; maxlength=&quot;50&quot; required autofocus placeholder=&quot;Email&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;pwd&quot; type=&quot;password&quot; value=&quot;&quot; size=&quot;50&quot; maxlength=&quot;50&quot; required placeholder=&quot;Password&quot;&gt;</span></span>
<span class="line"><span>        @&lt;button type=&quot;submit&quot;&gt;Go&lt;/button&gt;</span></span>
<span class="line"><span>        @&lt;/form&gt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 顯示登錄或註冊鏈接</span></span>
<span class="line"><span>void login_or_signup() {</span></span>
<span class="line"><span>        @&lt;a href=&quot;https://opensource.com/?req=login&quot;&gt;Login&lt;/a&gt; &amp; &amp; &lt;a href=&quot;https://opensource.com/?req=login&amp;action=newuser&quot;&gt;Sign Up&lt;/a&gt;&lt;hr/&gt;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="通用應用程序-show-home-vely" tabindex="-1">通用應用程序（_show_home.vely） <a class="header-anchor" href="#通用應用程序-show-home-vely" aria-label="Permalink to “通用應用程序（_show_home.vely）”">​</a></h4><p>藉助本教程，你可以創建你想要的任何多租户 SaaS 應用程序。上面的多租户處理模組（<code>login.vely</code>）調用 <code>_show_home()</code> 函數，它可以容納你的任何代碼。這個示例代碼展示了筆記應用程序，但它可以是任何內容。<code>_show_home()</code> 函數可以調用你想要的任何代碼，它是一個通用的多租户應用程序插件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &quot;vely.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void _show_home() {</span></span>
<span class="line"><span>    notes();</span></span>
<span class="line"><span>    exit-request</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="筆記應用程序-notes-vely" tabindex="-1">筆記應用程序（notes.vely） <a class="header-anchor" href="#筆記應用程序-notes-vely" aria-label="Permalink to “筆記應用程序（notes.vely）”">​</a></h4><p>該應用程序能夠添加、列舉以及刪除任何給定的筆記：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &quot;vely.h&quot;</span></span>
<span class="line"><span>#include &quot;login.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多租户雲中的筆記應用程序</span></span>
<span class="line"><span>void notes () {</span></span>
<span class="line"><span>    // 獲取全局請求數據</span></span>
<span class="line"><span>    reqdata *rd;</span></span>
<span class="line"><span>    get-req data to rd</span></span>
<span class="line"><span>    // 如果會話有效，顯示登錄或註冊</span></span>
<span class="line"><span>    if (!rd-&gt;is_logged_in) {</span></span>
<span class="line"><span>        login_or_signup();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 問候用户</span></span>
<span class="line"><span>    @&lt;h1&gt;Welcome to Notes!&lt;/h1&gt;&lt;hr/&gt;</span></span>
<span class="line"><span>    // 如果沒有登出，退出 —— 這裏確保對用户身份的安全驗證</span></span>
<span class="line"><span>    if (!rd-&gt;is_logged_in) {</span></span>
<span class="line"><span>        exit-request</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 獲取 URL 參數，告訴筆記要做什麼</span></span>
<span class="line"><span>    input-param subreq</span></span>
<span class="line"><span>    // 顯示筆記能夠做什麼操作（添加或列舉筆記）</span></span>
<span class="line"><span>    @&lt;a href=&quot;https://opensource.com/?req=notes&amp;subreq=add&quot;&gt;Add Note&lt;/a&gt; &lt;a href=&quot;https://opensource.com/?req=notes&amp;subreq=list&quot;&gt;List Notes&lt;/a&gt;&lt;hr/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 列舉該用户的所有筆記</span></span>
<span class="line"><span>    if (!strcmp (subreq, &quot;list&quot;)) {</span></span>
<span class="line"><span>        // **只**選取該用户的筆記</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;select dateOf, note, noteId from notes where userId=&#39;%s&#39; order by dateOf desc&quot; : rd-&gt;sess_userId output dateOf, note, noteId</span></span>
<span class="line"><span>            query-result dateOf to define dateOf</span></span>
<span class="line"><span>            query-result note to define note</span></span>
<span class="line"><span>            query-result noteId to define noteId</span></span>
<span class="line"><span>            // 使用快速緩存正則表達式將新行更改為&lt;br/&gt;</span></span>
<span class="line"><span>            match-regex &quot;\\n&quot; in note replace-with &quot;&lt;br/&gt;\\n&quot; result define with_breaks status define st cache</span></span>
<span class="line"><span>            if (st == 0) with_breaks = note; // 什麼都沒有發現/替換，只用原來的</span></span>
<span class="line"><span>            // 顯示筆記</span></span>
<span class="line"><span>            @Date: &lt;&lt;p-out dateOf&gt;&gt; (&lt;a href=&quot;https://opensource.com/?req=notes&amp;subreq=delete_note_ask&amp;note_id=%3C%3Cp-out%20noteId%3E%3E&quot;&gt;delete note&lt;/a&gt;)&lt;br/&gt;</span></span>
<span class="line"><span>            @Note: &lt;&lt;p-out with_breaks&gt;&gt;&lt;br/&gt;</span></span>
<span class="line"><span>            @&lt;hr/&gt;</span></span>
<span class="line"><span>        end-query</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 要求刪除筆記</span></span>
<span class="line"><span>    else if (!strcmp (subreq, &quot;delete_note_ask&quot;)) {</span></span>
<span class="line"><span>        input-param note_id</span></span>
<span class="line"><span>        @Are you sure you want to delete a note? Use Back button to go back, or &lt;a href=&quot;https://opensource.com/?req=notes&amp;subreq=delete_note&amp;note_id=%3C%3Cp-out%20note_id%3E%3E&quot;&gt;delete note now&lt;/a&gt;.</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 刪除筆記</span></span>
<span class="line"><span>    else if (!strcmp (subreq, &quot;delete_note&quot;)) {</span></span>
<span class="line"><span>        input-param note_id</span></span>
<span class="line"><span>        // 刪除筆記</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;delete from notes where noteId=&#39;%s&#39; and userId=&#39;%s&#39;&quot; : note_id, rd-&gt;sess_userId affected-rows define arows no-loop error define errnote</span></span>
<span class="line"><span>        // 告知用户狀態</span></span>
<span class="line"><span>        if (arows == 1) {</span></span>
<span class="line"><span>            @Note deleted</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            @Could not delete note (&lt;&lt;p-out errnote&gt;&gt;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 添加筆記</span></span>
<span class="line"><span>    else if (!strcmp (subreq, &quot;add_note&quot;)) {</span></span>
<span class="line"><span>        // 從 note 表單中獲取 URL POST 數據</span></span>
<span class="line"><span>        input-param note</span></span>
<span class="line"><span>        // 在該用户的 ID 下插入筆記</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;insert into notes (dateOf, userId, note) values (now(), &#39;%s&#39;, &#39;%s&#39;)&quot; : rd-&gt;sess_userId, note affected-rows define arows no-loop error define errnote</span></span>
<span class="line"><span>        // 告知用户狀態</span></span>
<span class="line"><span>        if (arows == 1) {</span></span>
<span class="line"><span>            @Note added</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            @Could not add note (&lt;&lt;p-out errnote&gt;&gt;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 顯示一個 HTML 表單來收集筆記，並將其發送回這裏（使用 subreq=&quot;add_note&quot; URL 參數）</span></span>
<span class="line"><span>    else if (!strcmp (subreq, &quot;add&quot;)) {</span></span>
<span class="line"><span>        @Add New Note</span></span>
<span class="line"><span>        @&lt;form action=&quot;https://opensource.com/?req=notes&quot; method=&quot;POST&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;subreq&quot; type=&quot;hidden&quot; value=&quot;add_note&quot;&gt;</span></span>
<span class="line"><span>        @&lt;textarea name=&quot;note&quot; rows=&quot;5&quot; cols=&quot;50&quot; required autofocus placeholder=&quot;Enter Note&quot;&gt;&lt;/textarea&gt;</span></span>
<span class="line"><span>        @&lt;button type=&quot;submit&quot;&gt;Create&lt;/button&gt;</span></span>
<span class="line"><span>        @&lt;/form&gt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="具有-c-性能的-saas" tabindex="-1">具有 C 性能的 SaaS <a class="header-anchor" href="#具有-c-性能的-saas" aria-label="Permalink to “具有 C 性能的 SaaS”">​</a></h3><p>Vely 語言使得 C 語言在你的網絡應用程序中得到充分利用這件事成為可能。多租户 SaaS 應用程序便是從中受益的一個典型用例。</p><p>看一看參考代碼示例，寫一寫代碼，然後試試 Vely。</p><p><em>（題圖：DA/126624c8-1a47-481b-b149-92273e8e0f4f）</em></p><hr>`,97)),n("p",null,[s[6]||(s[6]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/22/11/build-your-own-saas-vely"},{default:l(()=>[...s[5]||(s[5]=[a("https://opensource.com/article/22/11/build-your-own-saas-vely",-1)])]),_:1})]),n("p",null,[s[11]||(s[11]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/vely"},{default:l(()=>[...s[7]||(s[7]=[a("Sergio Mijatovic",-1)])]),_:1}),s[12]||(s[12]=a(" 選題：",-1)),p(e,{href:"https://github.com/lkxed"},{default:l(()=>[...s[8]||(s[8]=[a("lkxed",-1)])]),_:1}),s[13]||(s[13]=a(" 譯者：",-1)),p(e,{href:"https://github.com/Drwhooooo"},{default:l(()=>[...s[9]||(s[9]=[a("Drwhooooo",-1)])]),_:1}),s[14]||(s[14]=a(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[17]||(s[17]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[15]||(s[15]=[a("LCTT",-1)])]),_:1}),s[18]||(s[18]=a(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[16]||(s[16]=[a("Linux中國",-1)])]),_:1}),s[19]||(s[19]=a(" 榮譽推出",-1))])])}const _=i(d,[["render",u]]);export{y as __pageData,_ as default};
