import{_ as p,a0 as o,w as s,s as i,ao as d,I as l,x as a,a1 as r,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const L=JSON.parse('{"title":"如何在 CentOS 7 / Ubuntu 15.04 上安裝 PHP 框架 Laravel | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7 / Ubuntu 15.04 上安裝 PHP 框架 Laravel | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7 / Ubuntu 15.04 上安裝 PHP 框架 Laravel | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7 / Ubuntu 15.04 上安裝 PHP 框架 Laravel | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151204 How to Install Laravel PHP Framework on CentOS 7 or Ubuntu 15.04","title":"如何在 CentOS 7 / Ubuntu 15.04 上安裝 PHP 框架 Laravel","tag":"201601","desc":""},"relativePath":"201601/20151204 How to Install Laravel PHP Framework on CentOS 7 or Ubuntu 15.04.md","filePath":"[post].md"}'),h={name:"201601/20151204 How to Install Laravel PHP Framework on CentOS 7 or Ubuntu 15.04.md"};function c(u,e,m,b,v,P){const t=o("Link");return s(),i("div",null,[e[13]||(e[13]=d(`<h1 id="如何在-centos-7-ubuntu-15-04-上安裝-php-框架-laravel" tabindex="-1">如何在 CentOS 7 / Ubuntu 15.04 上安裝 PHP 框架 Laravel <a class="header-anchor" href="#如何在-centos-7-ubuntu-15-04-上安裝-php-框架-laravel" aria-label="Permalink to “如何在 CentOS 7 / Ubuntu 15.04 上安裝 PHP 框架 Laravel”">​</a></h1><p>大家好，這篇文章將要講述如何在 CentOS 7 / Ubuntu 15.04 上安裝 Laravel。如果你是一個 PHP Web 的開發者，你並不需要考慮如何在琳琅滿目的現代 PHP 框架中選擇，Laravel 是最輕鬆啓動和運行的，它省時省力，能讓你享受到 web 開發的樂趣。Laravel 信奉着一個普世的開發哲學，通過簡單的指導創建出可維護代碼具有最高優先級，你將保持着高速的開發效率，能夠隨時毫不畏懼更改你的代碼來改進現有功能。</p><p>Laravel 安裝並不繁瑣，你只要跟着本文章一步步操作就能在 CentOS 7 或者 Ubuntu 15 服務器上安裝。</p><h3 id="_1-服務器要求" tabindex="-1">1) 服務器要求 <a class="header-anchor" href="#_1-服務器要求" aria-label="Permalink to “1) 服務器要求”">​</a></h3><p>在安裝 Laravel 前需要安裝一些它的依賴前提條件，主要是一些基本的參數調整，比如升級系統到最新版本，sudo 權限和安裝依賴包。</p><p>當你連接到你的服務器時，請確保你能通以下命令能成功的使用 EPEL 倉庫並且升級你的服務器。</p><h4 id="centos-7" tabindex="-1">CentOS-7 <a class="header-anchor" href="#centos-7" aria-label="Permalink to “CentOS-7”">​</a></h4><pre><code># yum install epel-release

# rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
# rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm

# yum update
</code></pre><h4 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-label="Permalink to “Ubuntu”">​</a></h4><pre><code># apt-get install python-software-properties
# add-apt-repository ppa:ondrej/php5

# apt-get update

# apt-get install -y php5 mcrypt php5-mcrypt php5-gd
</code></pre><h3 id="_2-防火牆安裝" tabindex="-1">2) 防火牆安裝 <a class="header-anchor" href="#_2-防火牆安裝" aria-label="Permalink to “2) 防火牆安裝”">​</a></h3><p>系統防火牆和 SELinux 設置對於用於產品應用安全來説非常重要，當你使用測試服務器的時候可以關閉防火牆，用以下命令列設置 SELinux 成寬容模式（permissive）來保證安裝程序不受它們的影響。</p><pre><code># setenforce 0
</code></pre><h3 id="_3-apache-mariadb-php-安裝" tabindex="-1">3) Apache, MariaDB, PHP 安裝 <a class="header-anchor" href="#_3-apache-mariadb-php-安裝" aria-label="Permalink to “3) Apache, MariaDB, PHP 安裝”">​</a></h3><p>Laravel 安裝程序需要完成安裝 LAMP 整個環境，需要額外安裝 OpenSSL、PDO，Mbstring 和 Tokenizer 等 PHP 擴展。如果 LAMP 已經運行在你的服務器上你可以跳過這一步，直接確認一些必要的 PHP 插件是否安裝好。</p><p>要安裝完整 AMP 你需要在自己的服務器上運行以下命令。</p><h4 id="centos" tabindex="-1">CentOS <a class="header-anchor" href="#centos" aria-label="Permalink to “CentOS”">​</a></h4><pre><code># yum install httpd mariadb-server php56w php56w-mysql php56w-mcrypt php56w-dom php56w-mbstring
</code></pre><p>要在 CentOS 7 上實現 MySQL / Mariadb 服務開機自動啓動，你需要運行以下命令。</p><pre><code># systemctl start httpd
# systemctl enable httpd

#systemctl start mysqld
#systemctl enable mysqld
</code></pre><p>在啓動 MariaDB 服務之後，你需要運行以下命令配置一個足夠安全的密碼。</p><pre><code>#mysql_secure_installation
</code></pre><h4 id="ubuntu-1" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu-1" aria-label="Permalink to “Ubuntu”">​</a></h4><pre><code># apt-get install mysql-server apache2 libapache2-mod-php5 php5-mysql
</code></pre><h3 id="_4-安裝-composer" tabindex="-1">4) 安裝 Composer <a class="header-anchor" href="#_4-安裝-composer" aria-label="Permalink to “4) 安裝 Composer”">​</a></h3><p>在我們安裝 Laravel 前，先讓我們開始安裝 composer。安裝 composer 是安裝 Laravel 的最重要步驟之一，因為 composer 能幫我們安裝 Laravel 的各種依賴。</p><h4 id="centos-ubuntu" tabindex="-1">CentOS/Ubuntu <a class="header-anchor" href="#centos-ubuntu" aria-label="Permalink to “CentOS/Ubuntu”">​</a></h4><p>在 CentOS / Ubuntu 下運行以下命令來配置 composer 。</p><pre><code># curl -sS https://getcomposer.org/installer | php
# mv composer.phar /usr/local/bin/composer
# chmod +x /usr/local/bin/composer
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/14.png" alt="composer installation"></p><h3 id="_5-安裝-laravel" tabindex="-1">5) 安裝 Laravel <a class="header-anchor" href="#_5-安裝-laravel" aria-label="Permalink to “5) 安裝 Laravel”">​</a></h3><p>我們可以運行以下命令從 github 上下載 Laravel 的安裝包。</p><pre><code># wget https://github.com/laravel/laravel/archive/develop.zip
</code></pre><p>運行以下命令解壓安裝包並且移動 document 的根目錄。</p><pre><code># unzip develop.zip

# mv laravel-develop /var/www/
</code></pre><p>現在使用 compose 命令來安裝目錄下所有 Laravel 所需要的依賴。</p><pre><code># cd /var/www/laravel-develop/
# composer install
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/25.png" alt="compose laravel"></p><h3 id="_6-密鑰" tabindex="-1">6) 密鑰 <a class="header-anchor" href="#_6-密鑰" aria-label="Permalink to “6) 密鑰”">​</a></h3><p>為了加密服務器，我們使用以下命令來生成一個加密後的 32 位的密鑰。</p><pre><code># php artisan key:generate

Application key [Lf54qK56s3qDh0ywgf9JdRxO2N0oV9qI] set successfully
</code></pre><p>現在把這個密鑰放到 &#39;app.php&#39; 文件，如以下所示。</p><pre><code># vim /var/www/laravel-develop/config/app.php
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/45.png" alt="Key encryption"></p><h3 id="_7-虛擬主機和所屬用户" tabindex="-1">7) 虛擬主機和所屬用户 <a class="header-anchor" href="#_7-虛擬主機和所屬用户" aria-label="Permalink to “7) 虛擬主機和所屬用户”">​</a></h3><p>在 composer 安裝好後，分配 document 根目錄的權限和所屬用户，如下所示。</p><pre><code># chmod 775 /var/www/laravel-develop/app/storage

# chown -R apache:apache /var/www/laravel-develop
</code></pre><p>用任意一款編輯器打開 apache 服務器的默認配置文件，在文件最後加上虛擬主機配置。</p><pre><code># vim /etc/httpd/conf/httpd.conf
</code></pre><hr><pre><code>ServerName laravel-develop
DocumentRoot /var/www/laravel/public

start Directory /var/www/laravel
AllowOverride All
Directory close
</code></pre><p>現在我們用以下命令重啓 apache 服務器，打開瀏覽器查看 localhost 頁面。</p><h4 id="centos-1" tabindex="-1">CentOS <a class="header-anchor" href="#centos-1" aria-label="Permalink to “CentOS”">​</a></h4><pre><code># systemctl restart httpd
</code></pre><h4 id="ubuntu-2" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu-2" aria-label="Permalink to “Ubuntu”">​</a></h4><pre><code># service apache2 restart
</code></pre><h3 id="_8-laravel-5-網絡訪問" tabindex="-1">8) Laravel 5 網絡訪問 <a class="header-anchor" href="#_8-laravel-5-網絡訪問" aria-label="Permalink to “8) Laravel 5 網絡訪問”">​</a></h3><p>打開瀏覽器然後輸入你配置的 IP 地址或者完整域名（Fully qualified domain name）你將會看到 Laravel 5 的默認頁面。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/35.png" alt="Laravel Default"></p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>Laravel 框架對於開發網頁應用來説是一個絕好的的工具。所以，看了這篇文章你將學會在 Ubuntu 15 和 CentOS 7 上安裝 Laravel， 之後你就可以使用這個超棒的 PHP 框架提供的各種功能和舒適便捷性來進行你的開發工作。</p><p>如果您有什麼意見或者建議請在以下評論區中回覆，我們將根據您寶貴的反饋來使我們的文章更加淺顯易懂。</p><hr>`,63)),l("p",null,[e[1]||(e[1]=a("via: ",-1)),r(t,{href:"http://linoxide.com/linux-how-to/install-laravel-php-centos-7-ubuntu-15-04/"},{default:n(()=>[...e[0]||(e[0]=[a("http://linoxide.com/linux-how-to/install-laravel-php-centos-7-ubuntu-15-04/",-1)])]),_:1})]),l("p",null,[e[5]||(e[5]=a("作者：",-1)),r(t,{href:"http://linoxide.com/author/kashifs/"},{default:n(()=>[...e[2]||(e[2]=[a("Kashif",-1)])]),_:1}),e[6]||(e[6]=a(" 譯者：",-1)),r(t,{href:"https://github.com/NearTan"},{default:n(()=>[...e[3]||(e[3]=[a("NearTan",-1)])]),_:1}),e[7]||(e[7]=a(" 校對：",-1)),r(t,{href:"https://github.com/carolinewuyan"},{default:n(()=>[...e[4]||(e[4]=[a("Caroline",-1)])]),_:1})]),l("p",null,[e[10]||(e[10]=a("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[8]||(e[8]=[a("LCTT",-1)])]),_:1}),e[11]||(e[11]=a(" 原創編譯，",-1)),r(t,{href:"https://linux.cn/"},{default:n(()=>[...e[9]||(e[9]=[a("Linux中國",-1)])]),_:1}),e[12]||(e[12]=a(" 榮譽推出",-1))])])}const C=p(h,[["render",c]]);export{L as __pageData,C as default};
