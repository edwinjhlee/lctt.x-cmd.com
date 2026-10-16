import{_ as l,a0 as p,w as i,s as d,I as a,x as e,a1 as o,A as n,ao as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"如何為你的平台部署一個公開的系統狀態頁 | LCTT x X-CMD","titleTemplate":false,"description":"如何為你的平台部署一個公開的系統狀態頁 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何為你的平台部署一個公開的系統狀態頁 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何為你的平台部署一個公開的系統狀態頁 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150826 How to set up a system status page of your infrastructure","title":"如何為你的平台部署一個公開的系統狀態頁","tag":"201509","desc":""},"relativePath":"201509/20150826 How to set up a system status page of your infrastructure.md","filePath":"[post].md"}'),c={name:"201509/20150826 How to set up a system status page of your infrastructure.md"};function h(u,t,m,g,f,b){const r=p("Link");return i(),d("div",null,[t[36]||(t[36]=a("h1",{id:"如何為你的平台部署一個公開的系統狀態頁",tabindex:"-1"},[e("如何為你的平台部署一個公開的系統狀態頁 "),a("a",{class:"header-anchor",href:"#如何為你的平台部署一個公開的系統狀態頁","aria-label":"Permalink to “如何為你的平台部署一個公開的系統狀態頁”"},"​")],-1)),t[37]||(t[37]=a("p",null,"如果你是一個系統管理員，負責關鍵的 IT 基礎設置或公司的服務，你將明白有效的溝通在日常任務中的重要性。假設你的線上存儲服務器故障了。你希望團隊所有人達成共識你好儘快的解決問題。當你忙來忙去時，你不會想一半的人問你為什麼他們不能訪問他們的文檔。當一個維護計劃快到時間了你想在計劃前提醒相關人員，這樣避免了不必要的開銷。",-1)),t[38]||(t[38]=a("p",null,"這一切的要求或多或少改進了你、你的團隊、和你服務的用户之間溝通渠道。一個實現它的方法是維護一個集中的系統狀態頁面，報告和記錄故障停機詳情、進度更新和維護計劃等。這樣，在故障期間你避免了不必要的打擾，也可以提醒一些相關方，以及加入一些可選的狀態更新。",-1)),a("p",null,[t[1]||(t[1]=e("有一個不錯的",-1)),t[2]||(t[2]=a("strong",null,"開源, 自承載系統狀態頁解決方案",-1)),t[3]||(t[3]=e("叫做 ",-1)),o(r,{href:"https://cachethq.io/"},{default:n(()=>[...t[0]||(t[0]=[e("Cachet",-1)])]),_:1}),t[4]||(t[4]=e("。在這個教程，我將要描述如何用 Cachet 部署一個自承載系統狀態頁面。",-1))]),t[39]||(t[39]=s(`<h3 id="cachet-特性" tabindex="-1">Cachet 特性 <a class="header-anchor" href="#cachet-特性" aria-label="Permalink to “Cachet 特性”">​</a></h3><p>在詳細的配置 Cachet 之前，讓我簡單的介紹一下它的主要特性。</p><ul><li><strong>全 JSON API</strong>：Cachet API 可以讓你使用任意的外部程序或腳本（例如，uptime 腳本）連接到 Cachet 來自動報告突發事件或更新狀態。</li><li><strong>認證</strong>：Cachet 支持基礎認證和 JSON API 的 API 令牌，所以只有認證用户可以更新狀態頁面。</li><li><strong>衡量系統</strong>：這通常用來展現隨着時間推移的自定義數據（例如，服務器負載或者響應時間）。</li><li><strong>通知</strong>：可選地，你可以給任一註冊了狀態頁面的人發送突發事件的提示郵件。</li><li><strong>多語言</strong>：狀態頁被翻譯為11種不同的語言。</li><li><strong>雙因子認證</strong>：這允許你使用 Google 的雙因子認證來提升 Cachet 管理賬户的安全性。</li><li><strong>跨資料庫支持</strong>：你可以選擇 MySQL，SQLite，Redis，APC 和 PostgreSQL 作為後端存儲。</li></ul><p>剩下的教程，我會説明如何在 Linux 上安裝配置 Cachet。</p><h3 id="第一步-下載和安裝-cachet" tabindex="-1">第一步：下載和安裝 Cachet <a class="header-anchor" href="#第一步-下載和安裝-cachet" aria-label="Permalink to “第一步：下載和安裝 Cachet”">​</a></h3><p>Cachet 需要一個 web 服務器和一個後端資料庫來運轉。在這個教程中，我將使用 LAMP 架構。以下是一些特定發行版上安裝 Cachet 和 LAMP 架構的指令。</p><h4 id="debian-ubuntu-或者-linux-mint" tabindex="-1">Debian，Ubuntu 或者 Linux Mint <a class="header-anchor" href="#debian-ubuntu-或者-linux-mint" aria-label="Permalink to “Debian，Ubuntu 或者 Linux Mint”">​</a></h4><pre><code>$ sudo apt-get install curl git apache2 mysql-server mysql-client php5 php5-mysql
$ sudo git clone https://github.com/cachethq/Cachet.git /var/www/cachet
$ cd /var/www/cachet
$ sudo git checkout v1.1.1
$ sudo chown -R www-data:www-data .
</code></pre>`,8)),a("p",null,[t[6]||(t[6]=e("在基於 Debian 的系統上設置 LAMP 架構的更多細節，參考這個",-1)),o(r,{href:"http://xmodulo.com/install-lamp-stack-ubuntu-server.html"},{default:n(()=>[...t[5]||(t[5]=[e("教程",-1)])]),_:1}),t[7]||(t[7]=e("。",-1))]),t[40]||(t[40]=a("h4",{id:"fedora-centos-或-rhel",tabindex:"-1"},[e("Fedora， CentOS 或 RHEL "),a("a",{class:"header-anchor",href:"#fedora-centos-或-rhel","aria-label":"Permalink to “Fedora， CentOS 或 RHEL”"},"​")],-1)),a("p",null,[t[9]||(t[9]=e("在基於 Red Hat 系統上，你首先需要",-1)),o(r,{href:"https://linux.cn/article-4192-1.html"},{default:n(()=>[...t[8]||(t[8]=[e("設置 REMI 軟件庫",-1)])]),_:1}),t[10]||(t[10]=e("（以滿足 PHP 的版本需求）。然後執行下面命令。",-1))]),t[41]||(t[41]=a("pre",null,[a("code",null,`$ sudo yum install curl git httpd mariadb-server
$ sudo yum --enablerepo=remi-php56 install php php-mysql php-mbstring
$ sudo git clone https://github.com/cachethq/Cachet.git /var/www/cachet
$ cd /var/www/cachet
$ sudo git checkout v1.1.1
$ sudo chown -R apache:apache .
$ sudo firewall-cmd --permanent --zone=public --add-service=http
$ sudo firewall-cmd --reload
$ sudo systemctl enable httpd.service; sudo systemctl start httpd.service
$ sudo systemctl enable mariadb.service; sudo systemctl start mariadb.service
`)],-1)),a("p",null,[t[12]||(t[12]=e("在基於 Red Hat 系統上設置 LAMP 的更多細節，參考這個",-1)),o(r,{href:"https://linux.cn/article-5789-1.html"},{default:n(()=>[...t[11]||(t[11]=[e("教程",-1)])]),_:1}),t[13]||(t[13]=e("。",-1))]),t[42]||(t[42]=s(`<h3 id="配置-cachet-的後端資料庫" tabindex="-1">配置 Cachet 的後端資料庫### <a class="header-anchor" href="#配置-cachet-的後端資料庫" aria-label="Permalink to “配置 Cachet 的後端資料庫###”">​</a></h3><p>下一步是配置後端資料庫。</p><p>登錄到 MySQL/MariaDB 服務，然後創建一個空的資料庫稱為‘cachet’。</p><pre><code>$ sudo mysql -uroot -p
</code></pre><hr><pre><code>mysql&gt; create database cachet;
mysql&gt; quit
</code></pre><p>現在用一個示例配置文件創建一個 Cachet 配置文件。</p><pre><code>$ cd /var/www/cachet
$ sudo mv .env.example .env
</code></pre><p>在 .env 文件裏，填寫你自己設置的資料庫信息（例如，DB_*）。其他的字段先不改變。</p><pre><code>APP_ENV=production
APP_DEBUG=false
APP_URL=http://localhost
APP_KEY=SomeRandomString
 
DB_DRIVER=mysql
DB_HOST=localhost
DB_DATABASE=cachet
DB_USERNAME=root
DB_PASSWORD=&lt;root-password&gt;
 
CACHE_DRIVER=apc
SESSION_DRIVER=apc
QUEUE_DRIVER=database
 
MAIL_DRIVER=smtp
MAIL_HOST=mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ADDRESS=null
MAIL_NAME=null
 
REDIS_HOST=null
REDIS_DATABASE=null
REDIS_PORT=null
</code></pre><h3 id="第三步-安裝-php-依賴和執行資料庫遷移" tabindex="-1">第三步：安裝 PHP 依賴和執行資料庫遷移 <a class="header-anchor" href="#第三步-安裝-php-依賴和執行資料庫遷移" aria-label="Permalink to “第三步：安裝 PHP 依賴和執行資料庫遷移”">​</a></h3><p>下面，我們將要安裝必要的PHP依賴包。我們會使用 composer 來安裝。如果你的系統還沒有安裝 composer，先安裝它：</p><pre><code>$ curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
</code></pre><p>現在開始用 composer 安裝 PHP 依賴包。</p><pre><code>$ cd /var/www/cachet
$ sudo composer install --no-dev -o
</code></pre><p>下面執行一次性的資料庫遷移。這一步會在我們之前創建的資料庫裏面創建那些所需的表。</p><pre><code>$ sudo php artisan migrate
</code></pre><p>假設在 /var/www/cachet/.env 的資料庫配置無誤，資料庫遷移應該像下面顯示一樣成功完成。</p><p><img src="https://farm6.staticflickr.com/5814/20235620184_54048676b0_c.jpg" alt=""></p><p>下面，創建一個密鑰，它將用來加密進入 Cachet 的數據。</p><pre><code>$ sudo php artisan key:generate
$ sudo php artisan config:cache
</code></pre><p><img src="https://farm6.staticflickr.com/5717/20831952096_7105c9fdc7_c.jpg" alt=""></p><p>生成的應用密鑰將自動添加到你的 .env 文件 APP_KEY 變量中。你不需要自己編輯 .env。</p><h3 id="第四步-配置-apache-http-服務" tabindex="-1">第四步：配置 Apache HTTP 服務 <a class="header-anchor" href="#第四步-配置-apache-http-服務" aria-label="Permalink to “第四步：配置 Apache HTTP 服務”">​</a></h3>`,24)),a("p",null,[t[15]||(t[15]=e("現在到了配置運行 Cachet 的 web 服務的時候了。我們使用 Apache HTTP 服務器，為 Cachet 創建一個新的",-1)),o(r,{href:"http://xmodulo.com/configure-virtual-hosts-apache-http-server.html"},{default:n(()=>[...t[14]||(t[14]=[e("虛擬主機",-1)])]),_:1}),t[16]||(t[16]=e("，如下：",-1))]),t[43]||(t[43]=s(`<h4 id="debian-ubuntu-或-linux-mint" tabindex="-1">Debian，Ubuntu 或 Linux Mint <a class="header-anchor" href="#debian-ubuntu-或-linux-mint" aria-label="Permalink to “Debian，Ubuntu 或 Linux Mint”">​</a></h4><pre><code>$ sudo vi /etc/apache2/sites-available/cachet.conf
</code></pre><hr><pre><code>&lt;VirtualHost *:80&gt;
    ServerName cachethost
    ServerAlias cachethost
    DocumentRoot &quot;/var/www/cachet/public&quot;
    &lt;Directory &quot;/var/www/cachet/public&quot;&gt;
        Require all granted
        Options Indexes FollowSymLinks
        AllowOverride All
        Order allow,deny
        Allow from all
    &lt;/Directory&gt;
&lt;/VirtualHost&gt;
</code></pre><p>啓用新虛擬主機和 mod_rewrite：</p><pre><code>$ sudo a2ensite cachet.conf
$ sudo a2enmod rewrite
$ sudo service apache2 restart
</code></pre><h4 id="fedora-centos-或-rhel-1" tabindex="-1">Fedora， CentOS 或 RHEL <a class="header-anchor" href="#fedora-centos-或-rhel-1" aria-label="Permalink to “Fedora， CentOS 或 RHEL”">​</a></h4><p>在基於 Red Hat 系統上，創建一個虛擬主機文件，如下：</p><pre><code>$ sudo vi /etc/httpd/conf.d/cachet.conf
</code></pre><hr><pre><code>&lt;VirtualHost *:80&gt;
    ServerName cachethost
    ServerAlias cachethost
    DocumentRoot &quot;/var/www/cachet/public&quot;
    &lt;Directory &quot;/var/www/cachet/public&quot;&gt;
        Require all granted
        Options Indexes FollowSymLinks
        AllowOverride All
        Order allow,deny
        Allow from all
    &lt;/Directory&gt;
&lt;/VirtualHost&gt;
</code></pre><p>現在重載 Apache 配置：</p><pre><code>$ sudo systemctl reload httpd.service
</code></pre><h3 id="第五步-配置-etc-hosts-來測試-cachet" tabindex="-1">第五步：配置 /etc/hosts 來測試 Cachet <a class="header-anchor" href="#第五步-配置-etc-hosts-來測試-cachet" aria-label="Permalink to “第五步：配置 /etc/hosts 來測試 Cachet”">​</a></h3><p>這時候，初始的 Cachet 狀態頁面應該啓動運行了，現在測試一下。</p><p>由於 Cachet 被配置為Apache HTTP 服務的虛擬主機，我們需要調整你的客户機的 /etc/hosts 來訪問他。你將從這個客户端電腦訪問 Cachet 頁面。（LCTT 譯註：如果你給了這個頁面一個正式的主機地址，則不需要這一步。）</p><p>打開 /etc/hosts，加入如下行：</p><pre><code>$ sudo vi /etc/hosts
</code></pre><hr><pre><code>&lt;cachet 服務器的 IP 地址&gt;    cachethost
</code></pre><p>上面名為“cachethost”必須匹配 Cachet 的 Apache 虛擬主機文件的 ServerName。</p><h3 id="測試-cachet-狀態頁面" tabindex="-1">測試 Cachet 狀態頁面 <a class="header-anchor" href="#測試-cachet-狀態頁面" aria-label="Permalink to “測試 Cachet 狀態頁面”">​</a></h3>`,22)),a("p",null,[t[18]||(t[18]=e("現在你準備好訪問 Cachet 狀態頁面。在你瀏覽器地址欄輸入 ",-1)),o(r,{href:"http://cachethost"},{default:n(()=>[...t[17]||(t[17]=[e("http://cachethost",-1)])]),_:1}),t[19]||(t[19]=e("。你將被轉到如下的 Cachet 狀態頁的初始化設置頁面。",-1))]),t[44]||(t[44]=s('<p><img src="https://farm6.staticflickr.com/5745/20858228815_405fce1301_c.jpg" alt=""></p><p>選擇 cache/session 驅動。這裏 cache 和 session 驅動兩個都選“File”。</p><p>下一步，輸入關於狀態頁面的基本信息（例如，站點名稱、域名、時區和語言），以及管理員認證賬户。</p><p><img src="https://farm1.staticflickr.com/611/20237229693_c22014e4fd_c.jpg" alt=""></p><p><img src="https://farm6.staticflickr.com/5707/20858228875_b056c9e1b4_c.jpg" alt=""></p><p><img src="https://farm6.staticflickr.com/5653/20671482009_8629572886_c.jpg" alt=""></p><p>你的狀態頁初始化就要完成了。</p><p><img src="https://farm6.staticflickr.com/5692/20237229793_f6a48f379a_c.jpg" alt=""></p><p>繼續創建組件（你的系統單元）、事件或者任意你要做的維護計劃。</p><p>例如，增加一個組件：</p><p><img src="https://farm6.staticflickr.com/5672/20848624752_9d2e0a07be_c.jpg" alt=""></p><p>增加一個維護計劃：</p><p>公共 Cachet 狀態頁就像這樣：</p><p><img src="https://farm1.staticflickr.com/577/20848624842_df68c0026d_c.jpg" alt=""></p><p>集成了 SMTP，你可以在狀態更新時發送郵件給訂閲者。並且你可以使用 CSS 和 markdown 格式來完全自定義佈局和狀態頁面。</p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3>',16)),a("p",null,[t[21]||(t[21]=e("Cachet 是一個相當易於使用，自託管的狀態頁面軟件。Cachet 一個高級特性是支持全 JSON API。使用它的 RESTful API，Cachet 可以輕鬆連接單獨的監控後端（例如，",-1)),o(r,{href:"http://xmodulo.com/monitor-common-services-nagios.html"},{default:n(()=>[...t[20]||(t[20]=[e("Nagios",-1)])]),_:1}),t[22]||(t[22]=e("），然後回饋給 Cachet 事件報告並自動更新狀態。比起手工管理一個狀態頁它更快和有效率。",-1))]),t[45]||(t[45]=s(`<p>最後一句，我喜歡提及一個事。用 Cachet 設置一個漂亮的狀態頁面是很簡單的，但要將這個軟件用好並不像安裝它那麼容易。你需要完全保障所有 IT 團隊習慣準確及時的更新狀態頁，從而建立公共信息的準確性。同時，你需要教用户去查看狀態頁面。最後，如果沒有很好的填充數據，部署狀態頁面就沒有意義，並且/或者沒有一個人查看它。記住這個，尤其是當你考慮在你的工作環境中部署 Cachet 時。</p><h3 id="故障排查" tabindex="-1">故障排查 <a class="header-anchor" href="#故障排查" aria-label="Permalink to “故障排查”">​</a></h3><p>補充，萬一你安裝 Cachet 時遇到問題，這有一些有用的故障排查的技巧。</p><ol><li><p>Cachet 頁面沒有加載任何東西，並且你看到如下報錯。</p><pre><code> production.ERROR: exception &#39;RuntimeException&#39; with message &#39;No supported encrypter found. The cipher and / or key length are invalid.&#39; in /var/www/cachet/bootstrap/cache/compiled.php:6695
</code></pre><p><strong>解決方案</strong>：確保你創建了一個應用密鑰，以及明確配置緩存如下所述。</p><pre><code> $ cd /path/to/cachet
 $ sudo php artisan key:generate
 $ sudo php artisan config:cache
</code></pre></li><li><p>調用 composer 命令時有如下報錯。</p><pre><code> - danielstjules/stringy 1.10.0 requires ext-mbstring * -the requested PHP extension mbstring is missing from your system.
 - laravel/framework v5.1.8 requires ext-mbstring * -the requested PHP extension mbstring is missing from your system.
 - league/commonmark 0.10.0 requires ext-mbstring * -the requested PHP extension mbstring is missing from your system.
</code></pre><p><strong>解決方案</strong>：確保在你的系統上安裝了必要的 PHP 擴展 mbstring ，並且兼容你的 PHP 版本。在基於 Red Hat 的系統上，由於我們從 REMI-56 庫安裝PHP，所以要從同一個庫安裝擴展。</p><pre><code> $ sudo yum --enablerepo=remi-php56 install php-mbstring
</code></pre></li><li><p>你訪問 Cachet 狀態頁面時得到一個白屏。HTTP 日誌顯示如下錯誤。</p><pre><code> PHP Fatal error:  Uncaught exception &#39;UnexpectedValueException&#39; with message &#39;The stream or file &quot;/var/www/cachet/storage/logs/laravel-2015-08-21.log&quot; could not be opened: failed to open stream: Permission denied&#39; in /var/www/cachet/bootstrap/cache/compiled.php:12851
</code></pre><p><strong>解決方案</strong>：嘗試如下命令。</p><pre><code> $ cd /var/www/cachet
 $ sudo php artisan cache:clear
 $ sudo chmod -R 777 storage
 $ sudo composer dump-autoload
</code></pre><p>如果上面的方法不起作用，試試禁止SELinux：</p><pre><code> $ sudo setenforce 0 
</code></pre></li></ol><hr>`,5)),a("p",null,[t[24]||(t[24]=e("via: ",-1)),o(r,{href:"http://xmodulo.com/setup-system-status-page.html"},{default:n(()=>[...t[23]||(t[23]=[e("http://xmodulo.com/setup-system-status-page.html",-1)])]),_:1})]),a("p",null,[t[28]||(t[28]=e("作者：",-1)),o(r,{href:"http://xmodulo.com/author/nanni"},{default:n(()=>[...t[25]||(t[25]=[e("Dan Nanni",-1)])]),_:1}),t[29]||(t[29]=e(" 譯者：",-1)),o(r,{href:"https://github.com/wyangsun"},{default:n(()=>[...t[26]||(t[26]=[e("wyangsun",-1)])]),_:1}),t[30]||(t[30]=e(" 校對：",-1)),o(r,{href:"https://github.com/wxy"},{default:n(()=>[...t[27]||(t[27]=[e("wxy",-1)])]),_:1})]),a("p",null,[t[33]||(t[33]=e("本文由 ",-1)),o(r,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...t[31]||(t[31]=[e("LCTT",-1)])]),_:1}),t[34]||(t[34]=e(" 原創翻譯，",-1)),o(r,{href:"https://linux.cn/"},{default:n(()=>[...t[32]||(t[32]=[e("Linux中國",-1)])]),_:1}),t[35]||(t[35]=e(" 榮譽推出",-1))])])}const T=l(c,[["render",h]]);export{C as __pageData,T as default};
