import{_ as s,a0 as d,w as l,s as p,ao as o,I as a,x as r,a1 as n,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const A=JSON.parse('{"title":"在 Ubuntu 15.04 / CentOS 7 上安裝廣告服務器 Revive Adserver | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 15.04 / CentOS 7 上安裝廣告服務器 Revive Adserver | LCTT (201602) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 15.04 / CentOS 7 上安裝廣告服務器 Revive Adserver | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 15.04 / CentOS 7 上安裝廣告服務器 Revive Adserver | LCTT (201602) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201602/20151119 How to Install Revive Adserver on Ubuntu 15.04 or CentOS 7","title":"在 Ubuntu 15.04 / CentOS 7 上安裝廣告服務器 Revive Adserver","tag":"201602","desc":""},"relativePath":"201602/20151119 How to Install Revive Adserver on Ubuntu 15.04 or CentOS 7.md","filePath":"[post].md"}'),v={name:"201602/20151119 How to Install Revive Adserver on Ubuntu 15.04 or CentOS 7.md"};function u(c,e,h,b,m,g){const t=d("Link");return l(),p("div",null,[e[25]||(e[25]=o(`<h1 id="在-ubuntu-15-04-centos-7-上安裝廣告服務器-revive-adserver" tabindex="-1">在 Ubuntu 15.04 / CentOS 7 上安裝廣告服務器 Revive Adserver <a class="header-anchor" href="#在-ubuntu-15-04-centos-7-上安裝廣告服務器-revive-adserver" aria-label="Permalink to “在 Ubuntu 15.04 / CentOS 7 上安裝廣告服務器 Revive Adserver”">​</a></h1><p>Revive Adserver是一個自由開源的廣告管理系統，能使出版商，廣告平台和廣告商在網頁、應用、視頻上投放並管理廣告的系統。Revive Adserver以前叫做OpenX Source，遵循GNU通用公共授權協議。它集廣告管理、網站定位、地理定位和一個用於數據收集的跟蹤系統於一體。能使網站站長管理內部的、付費的以及第三方來源的廣告，如谷歌的AdSense。本教程中，將會教會你在Ubuntu 15.04或CentOS 7安裝並運行Revive Adserver。</p><h3 id="_1-安裝lamp" tabindex="-1">1. 安裝LAMP### <a class="header-anchor" href="#_1-安裝lamp" aria-label="Permalink to “1. 安裝LAMP###”">​</a></h3><p>首先，Revive Adserver需要完整的LAMP環境才能運行，所以我們先安裝LAMP。LAMP是Apache網頁服務器，MySQL/MariaDB資料庫和PHP模組的集合。要使Revive正常運行，需要安裝PHP的眾多模組，如apc, zlib, xml, pcre, mysql和mbstring。在不同的Linux發行版中，我們可以用下列命令進行LAMP的配置:</p><h4 id="在ubuntu-15-04下" tabindex="-1">在Ubuntu 15.04下#### <a class="header-anchor" href="#在ubuntu-15-04下" aria-label="Permalink to “在Ubuntu 15.04下####”">​</a></h4><pre><code># apt-get install apache2 mariadb-server php5 php5-gd php5-mysql php5-curl php-apc zlibc zlib1g zlib1g-dev libpcre3 libpcre3-dev libapache2-mod-php5 zip
</code></pre><h4 id="在centos-7下" tabindex="-1">在CentOS 7下 <a class="header-anchor" href="#在centos-7下" aria-label="Permalink to “在CentOS 7下”">​</a></h4><pre><code># yum install httpd mariadb php php-gd php-mysql php-curl php-mbstring php-xml php-apc zlibc zlib1g zlib1g-dev libpcre3 libpcre3-dev zip
</code></pre><h3 id="_2-啓動apache-web和mariadb服務" tabindex="-1">2. 啓動Apache Web和MariaDB服務 <a class="header-anchor" href="#_2-啓動apache-web和mariadb服務" aria-label="Permalink to “2. 啓動Apache Web和MariaDB服務”">​</a></h3><p>可以用下列命令啓動剛剛安裝好的Apache Web服務和MariaDB資料庫服務。</p><h4 id="在ubuntu-15-04下-1" tabindex="-1">在Ubuntu 15.04下#### <a class="header-anchor" href="#在ubuntu-15-04下-1" aria-label="Permalink to “在Ubuntu 15.04下####”">​</a></h4><p>Ubuntu15.04使用Systemd作為默認初始系統，所以用下列命令啓動Apache和MariaDB進程：</p><pre><code># systemctl start apache2 mysql
</code></pre><p>可以用下列命令使其開機自動運行：</p><pre><code># systemctl enable apache2 mysql

Synchronizing state for apache2.service with sysvinit using update-rc.d...
Executing /usr/sbin/update-rc.d apache2 defaults
Executing /usr/sbin/update-rc.d apache2 enable
Synchronizing state for mysql.service with sysvinit using update-rc.d...
Executing /usr/sbin/update-rc.d mysql defaults
Executing /usr/sbin/update-rc.d mysql enable
</code></pre><h4 id="在centos-7下-1" tabindex="-1">在CentOS 7下 <a class="header-anchor" href="#在centos-7下-1" aria-label="Permalink to “在CentOS 7下”">​</a></h4><p>CentOS 7同樣是以Systemd作為默認初始系統，可以用下列命令啓動:</p><pre><code># systemctl start httpd mariadb

ln -s &#39;/usr/lib/systemd/system/httpd.service&#39; &#39;/etc/systemd/system/multi-user.target.wants/httpd.service&#39;
ln -s &#39;/usr/lib/systemd/system/mariadb.service&#39; &#39;/etc/systemd/system/multi-user.target.wants/mariadb.service&#39;
</code></pre><h3 id="_3-配置mariadb" tabindex="-1">3. 配置MariaDB <a class="header-anchor" href="#_3-配置mariadb" aria-label="Permalink to “3. 配置MariaDB”">​</a></h3><h4 id="在centos-7-ubuntu-15-04下" tabindex="-1">在CentOS 7/Ubuntu 15.04下 <a class="header-anchor" href="#在centos-7-ubuntu-15-04下" aria-label="Permalink to “在CentOS 7/Ubuntu 15.04下”">​</a></h4><p>當我們第一次啓動MariaDB時，MariaDB是沒有分配密碼的，所以要先設置一個root密碼。之後再創建一個新的資料庫用來儲存Revive Adserver的數據。</p><p>使用以下命令配置MariaDB並設置其root密碼：</p><pre><code># mysql_secure_installation
</code></pre><p>這時會要我們輸入root密碼，但我們之前什麼密碼都沒設置，所以按回車下一步。之後，要求設置root密碼，這時我們輸入Y，然後輸入自己想要的密碼。回車繼續下一步。</p><pre><code> ….
so you should just press enter here.

Enter current password for root (enter for none):
OK, successfully used password, moving on…

Setting the root password ensures that nobody can log into the MariaDB
root user without the proper authorisation.

Set root password? [Y/n] y
New password:
Re-enter new password:
Password updated successfully!
Reloading privilege tables..
… Success!
…
installation should now be secure.
Thanks for using MariaDB!
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-mariadb.png" alt="Configuring MariaDB"></p><h3 id="_4-創建新的資料庫" tabindex="-1">4. 創建新的資料庫 <a class="header-anchor" href="#_4-創建新的資料庫" aria-label="Permalink to “4. 創建新的資料庫”">​</a></h3><p>為MariaDB的root用户設置了密碼之後，就可以創建用來儲存Revive Adserver應用數據的資料庫。首先通過以下命令登錄MariaDB控制台：</p><pre><code># mysql -u root -p
</code></pre><p>這時要求輸入root用户的密碼，我們只要輸入上一步設置好的密碼。然後進入MariaDB控制台創建新的資料庫，資料庫用户及其密碼，並且授予其創建、刪除、編輯和存儲表與數據的全部權限。</p><pre><code>&gt; CREATE DATABASE revivedb;
&gt; CREATE USER &#39;reviveuser&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;Pa$$worD123&#39;;
&gt; GRANT ALL PRIVILEGES ON revivedb.* TO &#39;reviveuser&#39;@&#39;localhost&#39;;
&gt; FLUSH PRIVILEGES;
&gt; EXIT;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/creating-mariadb-revive-database.png" alt="Creating Mariadb Revive Database"></p><h3 id="_5-下載revive-adserver" tabindex="-1">5. 下載Revive Adserver <a class="header-anchor" href="#_5-下載revive-adserver" aria-label="Permalink to “5. 下載Revive Adserver”">​</a></h3>`,33)),a("p",null,[e[1]||(e[1]=r("接下來下載Revive Adserver的最新版本Revive Adserver.3.2.2（寫本文時）。可以使用wget命令從Revive Adserverde 官方網站下載壓縮包，網址是：",-1)),n(t,{href:"http://www.revive-adserver.com/download/"},{default:i(()=>[...e[0]||(e[0]=[r("http://www.revive-adserver.com/download/",-1)])]),_:1}),e[2]||(e[2]=r(" 。命令如下：",-1))]),e[26]||(e[26]=o(`<pre><code># cd /tmp/
# wget http://download.revive-adserver.com/revive-adserver-3.2.2.zip

--2015-11-09 17:03:48-- http://download.revive-adserver.com/revive-adserver-3.2.2.zip
Resolving download.revive-adserver.com (download.revive-adserver.com)... 54.230.119.219, 54.239.132.177, 54.230.116.214, ...
Connecting to download.revive-adserver.com (download.revive-adserver.com)|54.230.119.219|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 11663620 (11M) [application/zip]
Saving to: &#39;revive-adserver-3.2.2.zip&#39;
revive-adserver-3.2 100%[=====================&gt;] 11.12M 1.80MB/s in 13s
2015-11-09 17:04:02 (906 KB/s) - &#39;revive-adserver-3.2.2.zip&#39; saved [11663620/11663620]
</code></pre><p>解壓到臨時目錄下：</p><pre><code># unzip revive-adserver-3.2.2.zip
</code></pre><p>把解壓後的整個文件夾移動到Apache Web服務器的默認根目錄/var/www/html/下：</p><pre><code># mv revive-adserver-3.2.2 /var/www/html/reviveads
</code></pre><h3 id="_6-配置apache-web服務" tabindex="-1">6. 配置Apache Web服務 <a class="header-anchor" href="#_6-配置apache-web服務" aria-label="Permalink to “6. 配置Apache Web服務”">​</a></h3><p>現在配置Apache服務使Revive正常運行。通過創建配置文件reviveads.conf來創建一個新的虛擬主機。這個目錄在不同的Linux發行版上有所不同。</p><h4 id="在ubuntu-15-04下-2" tabindex="-1">在Ubuntu 15.04下 <a class="header-anchor" href="#在ubuntu-15-04下-2" aria-label="Permalink to “在Ubuntu 15.04下”">​</a></h4><pre><code># touch /etc/apache2/sites-available/reviveads.conf
# ln -s /etc/apache2/sites-available/reviveads.conf /etc/apache2/sites-enabled/reviveads.conf
# nano /etc/apache2/sites-available/reviveads.conf
</code></pre><p>在這個文件中添加下列幾行文本：</p><pre><code>&lt;VirtualHost *:80&gt;
ServerAdmin info@reviveads.linoxide.com
DocumentRoot /var/www/html/reviveads/
ServerName reviveads.linoxide.com
ServerAlias www.reviveads.linoxide.com
&lt;Directory /var/www/html/reviveads/&gt;
Options FollowSymLinks
AllowOverride All
&lt;/Directory&gt;
ErrorLog /var/log/apache2/reviveads.linoxide.com-error_log
CustomLog /var/log/apache2/reviveads.linoxide.com-access_log common
&lt;/VirtualHost&gt;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-apache2-ubuntu.png" alt="Configuring Apache2 Ubuntu"></p><p>保存並退出，重啓Apache Web服務：</p><pre><code># systemctl restart apache2
</code></pre><h4 id="在centos-7下-2" tabindex="-1">在CentOS 7下 <a class="header-anchor" href="#在centos-7下-2" aria-label="Permalink to “在CentOS 7下”">​</a></h4><p>在CentOS下，我們直接在/etc/httpd/conf.d/ 目錄下創建reviveads.conf :</p><pre><code># nano /etc/httpd/conf.d/reviveads.conf	
</code></pre><p>在這個文件中添加下列幾行文本：</p><pre><code>&lt;VirtualHost *:80&gt;
ServerAdmin info@reviveads.linoxide.com
DocumentRoot /var/www/html/reviveads/
ServerName reviveads.linoxide.com
ServerAlias www.reviveads.linoxide.com
&lt;Directory /var/www/html/reviveads/&gt;
Options FollowSymLinks
AllowOverride All
&lt;/Directory&gt;
ErrorLog /var/log/httpd/reviveads.linoxide.com-error_log
CustomLog /var/log/httpd/reviveads.linoxide.com-access_log common
&lt;/VirtualHost&gt;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-httpd-centos.png" alt="Configuring httpd Centos"></p><p>保存並退出，重啓Apache Web服務：</p><pre><code># systemctl restart httpd
</code></pre><h3 id="_7-修復權限和所有權" tabindex="-1">7. 修復權限和所有權 <a class="header-anchor" href="#_7-修復權限和所有權" aria-label="Permalink to “7. 修復權限和所有權”">​</a></h3><p>現在我們修改安裝路徑下文件的權限和所有權。把安裝目錄的所有權改成Apache進程所有，以便Apache Web服務有文件和目錄的編輯、創建和刪除的完全權限。</p><h4 id="在ubuntu-15-04下-3" tabindex="-1">在Ubuntu 15.04下#### <a class="header-anchor" href="#在ubuntu-15-04下-3" aria-label="Permalink to “在Ubuntu 15.04下####”">​</a></h4><pre><code># chown www-data: -R /var/www/html/reviveads
</code></pre><h4 id="在centos-7下-3" tabindex="-1">在CentOS 7下 <a class="header-anchor" href="#在centos-7下-3" aria-label="Permalink to “在CentOS 7下”">​</a></h4><pre><code># chown apache: -R /var/www/html/reviveads	
</code></pre><h3 id="_8-設置防火牆" tabindex="-1">8. 設置防火牆 <a class="header-anchor" href="#_8-設置防火牆" aria-label="Permalink to “8. 設置防火牆”">​</a></h3><pre><code>現在要配置防火牆，打開80端口使Apache Web服務運行的Revive Adserver能夠被網絡上的其他機器所訪問。
</code></pre><h4 id="在ubuntu-15-04-centos-7下" tabindex="-1">在Ubuntu 15.04/CentOS 7下 <a class="header-anchor" href="#在ubuntu-15-04-centos-7下" aria-label="Permalink to “在Ubuntu 15.04/CentOS 7下”">​</a></h4><p>Ubuntu15.04/CentOS 7都使用Systemd作為默認初始系統，使用firewalld作為其防火牆。要打開80端口（http服務端口），執行以下命令：</p><pre><code># firewall-cmd --permanent --add-service=http

success

# firewall-cmd --reload

success	
</code></pre><h3 id="_9-網站的安裝" tabindex="-1">9. 網站的安裝 <a class="header-anchor" href="#_9-網站的安裝" aria-label="Permalink to “9. 網站的安裝”">​</a></h3>`,34)),a("p",null,[e[6]||(e[6]=r("順利的話我們能夠使用瀏覽器進行交互，並可以將瀏覽器指向正在運行的網絡服務器。只要在瀏覽器輸入",-1)),n(t,{href:"http://ip-address/"},{default:i(()=>[...e[3]||(e[3]=[r("http://ip-address/",-1)])]),_:1}),e[7]||(e[7]=r(" 或者 ",-1)),n(t,{href:"http://domain.com"},{default:i(()=>[...e[4]||(e[4]=[r("http://domain.com",-1)])]),_:1}),e[8]||(e[8]=r(" 。這裏我們要訪問 ",-1)),n(t,{href:"http://reviveads.linoxide.com/"},{default:i(()=>[...e[5]||(e[5]=[r("http://reviveads.linoxide.com/",-1)])]),_:1})]),e[27]||(e[27]=a("p",null,"打開後可以看到Revive Adserver的歡迎頁面，上面還有作為它發行許可證的GNU通用公共許可證V2。點擊 I agree 繼續下一步安裝。",-1)),e[28]||(e[28]=a("p",null,"在下一頁中，我們要輸入資料庫信息以便把Revive Adserver和MariaDB資料庫服務連接起來。要輸入之前設置的資料庫名稱，用户名以及密碼。在本教程中，我們分別輸入資料庫名稱為revivedb，用户名為reviveuser，密碼為Pa$$worD123,並且令主機名為localhost，點擊continue繼續。",-1)),e[29]||(e[29]=a("p",null,[a("img",{src:"http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-revive-adserver.png",alt:"Configuring Revive Adserver"})],-1)),e[30]||(e[30]=a("p",null,"輸入要填的信息，如：管理員用户名，密碼和郵箱。可以以這些信息登錄Adserver的控制界面。然後跳到最後一頁，可以看到Revive Adserver已經安裝成功了。",-1)),e[31]||(e[31]=a("p",null,"接着，轉到Adverstiser頁面，添加新的廣告管理。在控制界面添加新用户到adserver，為廣告庫户添加標題，網頁，視頻 廣告。",-1)),e[32]||(e[32]=a("h3",{id:"總結",tabindex:"-1"},[r("總結 "),a("a",{class:"header-anchor",href:"#總結","aria-label":"Permalink to “總結”"},"​")],-1)),a("p",null,[e[10]||(e[10]=r("本文中，我們學習瞭如何在Ubuntu 15.04和CentOS 7上安裝並配置Revive Adserver。儘管Revive Adserver的原始代碼是從OpenX那買的，但現在OpenX Enterprise和Revive Adserver已經完全分開了。可以從",-1)),n(t,{href:"http://www.adserverplugins.com/"},{default:i(()=>[...e[9]||(e[9]=[r("http://www.adserverplugins.com/",-1)])]),_:1}),e[11]||(e[11]=r(" 獲得更多插件來擴展新特性。講真，這個軟件確實讓網頁，應用，視頻上的廣告管理變得容易了許多。",-1))]),e[33]||(e[33]=a("hr",null,null,-1)),a("p",null,[e[13]||(e[13]=r("via: ",-1)),n(t,{href:"http://linoxide.com/linux-how-to/install-revive-adserver-ubuntu-15-04-centos-7/"},{default:i(()=>[...e[12]||(e[12]=[r("http://linoxide.com/linux-how-to/install-revive-adserver-ubuntu-15-04-centos-7/",-1)])]),_:1})]),a("p",null,[e[17]||(e[17]=r("作者：",-1)),n(t,{href:"http://linoxide.com/author/arunp/"},{default:i(()=>[...e[14]||(e[14]=[r("Arun Pyasi",-1)])]),_:1}),e[18]||(e[18]=r(" 譯者：",-1)),n(t,{href:"https://github.com/chisper"},{default:i(()=>[...e[15]||(e[15]=[r("chisper",-1)])]),_:1}),e[19]||(e[19]=r(" 校對：",-1)),n(t,{href:"https://github.com/wxy"},{default:i(()=>[...e[16]||(e[16]=[r("wxy",-1)])]),_:1})]),a("p",null,[e[22]||(e[22]=r("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[20]||(e[20]=[r("LCTT",-1)])]),_:1}),e[23]||(e[23]=r(" 原創編譯，",-1)),n(t,{href:"https://linux.cn/"},{default:i(()=>[...e[21]||(e[21]=[r("Linux中國",-1)])]),_:1}),e[24]||(e[24]=r(" 榮譽推出",-1))])])}const x=s(v,[["render",u]]);export{A as __pageData,x as default};
