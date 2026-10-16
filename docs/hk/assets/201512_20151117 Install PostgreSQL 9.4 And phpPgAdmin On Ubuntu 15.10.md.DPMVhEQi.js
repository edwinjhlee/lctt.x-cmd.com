import{_ as a,a0 as d,w as l,s as g,ao as n,I as t,a1 as r,A as s,x as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"在 Ubuntu 上安裝世界上最先進的開源資料庫 PostgreSQL 9.4 和 phpPgAdmin | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 上安裝世界上最先進的開源資料庫 PostgreSQL 9.4 和 phpPgAdmin | LCTT (201512) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 上安裝世界上最先進的開源資料庫 PostgreSQL 9.4 和 phpPgAdmin | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 上安裝世界上最先進的開源資料庫 PostgreSQL 9.4 和 phpPgAdmin | LCTT (201512) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201512/20151117 Install PostgreSQL 9.4 And phpPgAdmin On Ubuntu 15.10","title":"在 Ubuntu 上安裝世界上最先進的開源資料庫 PostgreSQL 9.4 和 phpPgAdmin","tag":"201512","desc":""},"relativePath":"201512/20151117 Install PostgreSQL 9.4 And phpPgAdmin On Ubuntu 15.10.md","filePath":"[post].md"}'),i={name:"201512/20151117 Install PostgreSQL 9.4 And phpPgAdmin On Ubuntu 15.10.md"};function u(c,p,h,m,P,b){const o=d("Link");return l(),g("div",null,[p[22]||(p[22]=n('<h1 id="在-ubuntu-上安裝世界上最先進的開源資料庫-postgresql-9-4-和-phppgadmin" tabindex="-1">在 Ubuntu 上安裝世界上最先進的開源資料庫 PostgreSQL 9.4 和 phpPgAdmin <a class="header-anchor" href="#在-ubuntu-上安裝世界上最先進的開源資料庫-postgresql-9-4-和-phppgadmin" aria-label="Permalink to “在 Ubuntu 上安裝世界上最先進的開源資料庫 PostgreSQL 9.4 和 phpPgAdmin”">​</a></h1><p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2014/05/postgresql.png" alt=""></p><h3 id="簡介" tabindex="-1">簡介 <a class="header-anchor" href="#簡介" aria-label="Permalink to “簡介”">​</a></h3>',3)),t("p",null,[r(o,{href:"http://www.postgresql.org/"},{default:s(()=>[...p[0]||(p[0]=[e("PostgreSQL",-1)])]),_:1}),p[1]||(p[1]=e(" 是一款強大的，開源的，對象關係型資料庫系統。它支持所有的主流操作系統，包括 Linux、Unix（AIX、BSD、HP-UX，SGI IRIX、Mac OS、Solaris、Tru64） 以及 Windows 操作系統。",-1))]),p[23]||(p[23]=n(`<p>下面是 <strong>Ubuntu</strong> 發起者 <strong>Mark Shuttleworth</strong> 對 PostgreSQL 的一段評價。</p><blockquote><p>PostgreSQL 是一款極讚的資料庫系統。剛開始我們在 Launchpad 上使用它的時候，並不確定它能否勝任工作。但我是錯了。它很強壯、快速，在各個方面都很專業。</p><p>— Mark Shuttleworth.</p></blockquote><p>在這篇簡短的指南中，讓我們來看看如何在 Ubuntu 15.10 服務器中安裝 PostgreSQL 9.4。</p><h3 id="安裝-postgresql" tabindex="-1">安裝 PostgreSQL <a class="header-anchor" href="#安裝-postgresql" aria-label="Permalink to “安裝 PostgreSQL”">​</a></h3><p>默認倉庫中就有可用的 PostgreSQL。在終端中輸入下面的命令安裝它。</p><pre><code>sudo apt-get install postgresql postgresql-contrib
</code></pre><p>如果你需要其它的版本，按照下面那樣先添加 PostgreSQL 倉庫然後再安裝。</p><p><strong>PostgreSQL apt 倉庫</strong> 支持 amd64 和 i386 架構的 Ubuntu 長期支持版（10.04、12.04 和 14.04），以及非長期支持版（14.04）。對於其它非長期支持版，該軟件包雖然沒有完全支持，但使用和 LTS 版本近似的也能正常工作。</p><h4 id="ubuntu-14-10-系統" tabindex="-1">Ubuntu 14.10 系統： <a class="header-anchor" href="#ubuntu-14-10-系統" aria-label="Permalink to “Ubuntu 14.10 系統：”">​</a></h4><p>新建文件<strong>/etc/apt/sources.list.d/pgdg.list</strong>；</p><pre><code>sudo vi /etc/apt/sources.list.d/pgdg.list
</code></pre><p>用下面一行添加倉庫：</p><pre><code>deb http://apt.postgresql.org/pub/repos/apt/ utopic-pgdg main
</code></pre><p><strong>注意</strong>： 上面的庫只能用於 Ubuntu 14.10。還沒有升級到 Ubuntu 15.04 和 15.10。</p><p>對於 <strong>Ubuntu 14.04</strong>，添加下面一行：</p><pre><code>deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main
</code></pre><p>對於 <strong>Ubuntu 12.04</strong>，添加下面一行：</p><pre><code>deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main
</code></pre><p>導入庫簽名密鑰：</p><pre><code>wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc

sudo apt-key add -
</code></pre><p>更新軟件包列表：</p><pre><code>sudo apt-get update
</code></pre><p>然後安裝需要的版本。</p><pre><code>sudo apt-get install postgresql-9.4
</code></pre><h3 id="訪問-postgresql-命令窗口" tabindex="-1">訪問 PostgreSQL 命令窗口 <a class="header-anchor" href="#訪問-postgresql-命令窗口" aria-label="Permalink to “訪問 PostgreSQL 命令窗口”">​</a></h3><p>默認的資料庫名稱和資料庫用户名稱都是 “<strong>postgres</strong>”。切換到 postgres 用户進行 postgresql 相關的操作：</p><pre><code>sudo -u postgres psql postgres
</code></pre><h4 id="示例輸出" tabindex="-1">示例輸出： <a class="header-anchor" href="#示例輸出" aria-label="Permalink to “示例輸出：”">​</a></h4><pre><code>psql (9.4.5)
Type &quot;help&quot; for help.
postgres=#
</code></pre><p>要退出 postgresql 窗口，在 <strong>psql</strong> 窗口輸入 <strong>\\q</strong> 退出到終端。</p><h3 id="設置-postgres-用户密碼" tabindex="-1">設置 “postgres” 用户密碼 <a class="header-anchor" href="#設置-postgres-用户密碼" aria-label="Permalink to “設置 “postgres” 用户密碼”">​</a></h3><p>登錄到 postgresql 窗口，</p><pre><code>sudo -u postgres psql postgres
</code></pre><p>用下面的命令為用户 postgres 設置密碼：</p><pre><code>postgres=# \\password postgres 
Enter new password: 
Enter it again: 
postgres=# \\q
</code></pre><p>要安裝 PostgreSQL Adminpack 擴展，在 postgresql 窗口輸入下面的命令：</p><pre><code>sudo -u postgres psql postgres
</code></pre><hr><pre><code>postgres=# CREATE EXTENSION adminpack;
CREATE EXTENSION
</code></pre><p>在 <strong>psql</strong> 窗口輸入 <strong>\\q</strong> 從 postgresql 窗口退回到終端。</p><h3 id="創建新用户和資料庫" tabindex="-1">創建新用户和資料庫 <a class="header-anchor" href="#創建新用户和資料庫" aria-label="Permalink to “創建新用户和資料庫”">​</a></h3><p>例如，讓我們創建一個新的用户，名為 “<strong>senthil</strong>”，密碼是 “<strong>ubuntu</strong>”，以及名為 “<strong>mydb</strong>” 的資料庫。</p><pre><code>sudo -u postgres createuser -D -A -P senthil
</code></pre><hr><pre><code>sudo -u postgres createdb -O senthil mydb
</code></pre><h3 id="刪除用户和資料庫" tabindex="-1">刪除用户和資料庫 <a class="header-anchor" href="#刪除用户和資料庫" aria-label="Permalink to “刪除用户和資料庫”">​</a></h3><p>要刪除資料庫，首先切換到 postgres 用户：</p><pre><code>sudo -u postgres psql postgres
</code></pre><p>輸入命令：</p><pre><code>$ drop database &lt;database-name&gt;
</code></pre><p>要刪除一個用户，輸入下面的命令：</p><pre><code>$ drop user &lt;user-name&gt;
</code></pre><h3 id="配置-postgresql-md5-驗證" tabindex="-1">配置 PostgreSQL-MD5 驗證 <a class="header-anchor" href="#配置-postgresql-md5-驗證" aria-label="Permalink to “配置 PostgreSQL-MD5 驗證”">​</a></h3><p><strong>MD5 驗證</strong> 要求用户提供一個 MD5 加密的密碼用於認證。首先編輯 <strong>/etc/postgresql/9.4/main/pg_hba.conf</strong> 文件：</p><pre><code>sudo vi /etc/postgresql/9.4/main/pg_hba.conf
</code></pre><p>按照下面所示添加或修改行</p><pre><code>[...]
# TYPE  DATABASE        USER            ADDRESS                 METHOD
# &quot;local&quot; is for Unix domain socket connections only
local   all             all                                     md5
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
host    all             all             192.168.1.0/24          md5
# IPv6 local connections:
host    all             all             ::1/128                 md5
[...]
</code></pre><p>其中， 192.168.1.0/24 是我的本地網絡 IP 地址。用你自己的地址替換。</p><p>重啓 postgresql 服務以使更改生效：</p><pre><code>sudo systemctl restart postgresql
</code></pre><p>或者，</p><pre><code>sudo service postgresql restart
</code></pre><h3 id="配置-postgresql-tcp-ip-配置" tabindex="-1">配置 PostgreSQL TCP/IP 配置 <a class="header-anchor" href="#配置-postgresql-tcp-ip-配置" aria-label="Permalink to “配置 PostgreSQL TCP/IP 配置”">​</a></h3><p>默認情況下，沒有啓用 TCP/IP 連接，因此其它計算機的用户不能訪問 postgresql。為了允許其它計算機的用户訪問，編輯文件 <strong>/etc/postgresql/9.4/main/postgresql.conf:</strong></p><pre><code>sudo vi /etc/postgresql/9.4/main/postgresql.conf
</code></pre><p>找到下面一行：</p><pre><code>[...]
#listen_addresses = &#39;localhost&#39;
[...]
#port = 5432
[...]
</code></pre><p>取消該行的註釋，然後設置你 postgresql 服務器的 IP 地址，或者設置為 ‘*’ 監聽所有用户。你應該謹慎設置所有遠程用户都可以訪問 PostgreSQL。</p><pre><code>[...]
listen_addresses = &#39;*&#39;
[...]
port = 5432
[...]
</code></pre><p>重啓 postgresql 服務保存更改：</p><pre><code>sudo systemctl restart postgresql
</code></pre><p>或者，</p><pre><code>sudo service postgresql restart
</code></pre><h3 id="用-phppgadmin-管理-postgresql" tabindex="-1">用 phpPgAdmin 管理 PostgreSQL <a class="header-anchor" href="#用-phppgadmin-管理-postgresql" aria-label="Permalink to “用 phpPgAdmin 管理 PostgreSQL”">​</a></h3>`,74)),t("p",null,[r(o,{href:"http://phppgadmin.sourceforge.net/doku.php"},{default:s(()=>[...p[2]||(p[2]=[t("strong",null,"phpPgAdmin",-1)])]),_:1}),p[3]||(p[3]=e(" 是基於 web 用 PHP 寫的 PostgreSQL 管理工具。",-1))]),p[24]||(p[24]=t("p",null,"默認倉庫中有可用的 phpPgAdmin。用下面的命令安裝 phpPgAdmin：",-1)),p[25]||(p[25]=t("pre",null,[t("code",null,`sudo apt-get install phppgadmin
`)],-1)),t("p",null,[p[5]||(p[5]=e("默認情況下，你可以在本地系統的 web 瀏覽器用 ",-1)),t("strong",null,[r(o,{href:"http://localhost/phppgadmin"},{default:s(()=>[...p[4]||(p[4]=[e("http://localhost/phppgadmin",-1)])]),_:1})]),p[6]||(p[6]=e(" 訪問 phppgadmin。",-1))]),p[26]||(p[26]=n(`<p>要訪問遠程系統，在 Ubuntu 15.10 上做如下操作：</p><p>編輯文件 <strong>/etc/apache2/conf-available/phppgadmin.conf</strong>,</p><pre><code>sudo vi /etc/apache2/conf-available/phppgadmin.conf
</code></pre><p>找到 <strong>Require local</strong> 的一行在這行前面添加 <strong>#</strong> 註釋掉它。</p><pre><code>#Require local
</code></pre><p>添加下面的一行：</p><pre><code>allow from all
</code></pre><p>保存並退出文件。</p><p>然後重啓 apache 服務。</p><pre><code>sudo systemctl restart apache2
</code></pre><p>對於 Ubuntu 14.10 及之前版本：</p><p>編輯 <strong>/etc/apache2/conf.d/phppgadmin</strong>:</p><pre><code>sudo nano /etc/apache2/conf.d/phppgadmin
</code></pre><p>註釋掉下面一行：</p><pre><code>[...]
#allow from 127.0.0.0/255.0.0.0 ::1/128
</code></pre><p>取消下面一行的註釋使所有系統都可以訪問 phppgadmin。</p><pre><code>allow from all
</code></pre><p>編輯 <strong>/etc/apache2/apache2.conf</strong>:</p><pre><code>sudo vi /etc/apache2/apache2.conf
</code></pre><p>添加下面一行：</p><pre><code>Include /etc/apache2/conf.d/phppgadmin
</code></pre><p>然後重啓 apache 服務。</p><pre><code>sudo service apache2 restart
</code></pre><h3 id="配置-phppgadmin" tabindex="-1">配置 phpPgAdmin <a class="header-anchor" href="#配置-phppgadmin" aria-label="Permalink to “配置 phpPgAdmin”">​</a></h3><p>編輯文件 <strong>/etc/phppgadmin/config.inc.php</strong>， 做以下更改。下面大部分選項都帶有解釋。認真閲讀以便了解為什麼要更改這些值。</p><pre><code>sudo nano /etc/phppgadmin/config.inc.php
</code></pre><p>找到下面一行：</p><pre><code>$conf[&#39;servers&#39;][0][&#39;host&#39;] = &#39;&#39;;
</code></pre><p>按照下面這樣更改：</p><pre><code>$conf[&#39;servers&#39;][0][&#39;host&#39;] = &#39;localhost&#39;;
</code></pre><p>找到這一行：</p><pre><code>$conf[&#39;extra_login_security&#39;] = true;
</code></pre><p>更改值為 <strong>false</strong>。</p><pre><code>$conf[&#39;extra_login_security&#39;] = false;
</code></pre><p>找到這一行：</p><pre><code>$conf[&#39;owned_only&#39;] = false;
</code></pre><p>更改值為 <strong>true</strong>。</p><pre><code>$conf[&#39;owned_only&#39;] = true;
</code></pre><p>保存並關閉文件。重啓 postgresql 服務和 Apache 服務。</p><pre><code>sudo systemctl restart postgresql

sudo systemctl restart apache2
</code></pre><p>或者，</p><pre><code>sudo service postgresql restart

sudo service apache2 restart
</code></pre>`,42)),t("p",null,[p[8]||(p[8]=e("現在打開你的瀏覽器並導航到 **",-1)),r(o,{href:"http://ip-address/phppgadmin**%E3%80%82%E4%BD%A0%E6%9C%83%E7%9C%8B%E5%88%B0%E4%BB%A5%E4%B8%8B%E6%88%AA%E5%9C%96%E3%80%82"},{default:s(()=>[...p[7]||(p[7]=[e("http://ip-address/phppgadmin**。你會看到以下截圖。",-1)])]),_:1})]),p[27]||(p[27]=n('<p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2015/11/phpPgAdmin-Google-Chrome_001.jpg" alt="phpPgAdmin "></p><p>用你之前創建的用户登錄。我之前已經創建了一個名為 “<strong>senthil</strong>” 的用户，密碼是 “<strong>ubuntu</strong>”，因此我以 “senthil” 用户登錄。</p><p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2015/11/phpPgAdmin-Google-Chrome_002.jpg" alt="phpPgAdmin  "></p><p>然後你就可以訪問 phppgadmin 面板了。</p><p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2015/11/phpPgAdmin-Google-Chrome_003.jpg" alt="phpPgAdmin "></p><p>用 postgres 用户登錄：</p><p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2015/11/phpPgAdmin-Google-Chrome_004.jpg" alt="phpPgAdmin "></p><p>就是這樣。現在你可以用 phppgadmin 可視化創建、刪除或者更改資料庫了。</p><p>加油！</p><hr>',10)),t("p",null,[p[10]||(p[10]=e("via: ",-1)),r(o,{href:"http://www.unixmen.com/install-postgresql-9-4-and-phppgadmin-on-ubuntu-15-10/"},{default:s(()=>[...p[9]||(p[9]=[e("http://www.unixmen.com/install-postgresql-9-4-and-phppgadmin-on-ubuntu-15-10/",-1)])]),_:1})]),t("p",null,[p[14]||(p[14]=e("作者：",-1)),r(o,{href:"http://www.twitter.com/ostechnix"},{default:s(()=>[...p[11]||(p[11]=[e("SK",-1)])]),_:1}),p[15]||(p[15]=e(" 譯者：",-1)),r(o,{href:"http://mutouxiaogui.cn/blog/"},{default:s(()=>[...p[12]||(p[12]=[e("ictlyh",-1)])]),_:1}),p[16]||(p[16]=e(" 校對：",-1)),r(o,{href:"https://github.com/wxy"},{default:s(()=>[...p[13]||(p[13]=[e("wxy",-1)])]),_:1})]),t("p",null,[p[19]||(p[19]=e("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...p[17]||(p[17]=[e("LCTT",-1)])]),_:1}),p[20]||(p[20]=e(" 原創編譯，",-1)),r(o,{href:"https://linux.cn/"},{default:s(()=>[...p[18]||(p[18]=[e("Linux中國",-1)])]),_:1}),p[21]||(p[21]=e(" 榮譽推出",-1))])])}const A=a(i,[["render",u]]);export{S as __pageData,A as default};
