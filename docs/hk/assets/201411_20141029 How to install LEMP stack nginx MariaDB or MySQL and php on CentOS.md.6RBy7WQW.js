import{_ as o,a0 as s,w as l,s as d,I as e,x as t,a1 as r,A as i,ao as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"CentOS 下安裝 LEMP 服務(nginx、MariaDB/MySQL 和 php) | LCTT x X-CMD","titleTemplate":false,"description":"CentOS 下安裝 LEMP 服務(nginx、MariaDB/MySQL 和 php) | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"CentOS 下安裝 LEMP 服務(nginx、MariaDB/MySQL 和 php) | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"CentOS 下安裝 LEMP 服務(nginx、MariaDB/MySQL 和 php) | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20141029 How to install LEMP stack nginx MariaDB or MySQL and php on CentOS","title":"CentOS 下安裝 LEMP 服務(nginx、MariaDB/MySQL 和 php)","tag":"201411","desc":""},"relativePath":"201411/20141029 How to install LEMP stack nginx MariaDB or MySQL and php on CentOS.md","filePath":"[post].md"}'),P={name:"201411/20141029 How to install LEMP stack nginx MariaDB or MySQL and php on CentOS.md"};function m(g,n,x,h,u,f){const p=s("Link");return l(),d("div",null,[n[30]||(n[30]=e("h1",{id:"centos-下安裝-lemp-服務-nginx、mariadb-mysql-和-php",tabindex:"-1"},[t("CentOS 下安裝 LEMP 服務(nginx、MariaDB/MySQL 和 php) "),e("a",{class:"header-anchor",href:"#centos-下安裝-lemp-服務-nginx、mariadb-mysql-和-php","aria-label":"Permalink to “CentOS 下安裝 LEMP 服務(nginx、MariaDB/MySQL 和 php)”"},"​")],-1)),n[31]||(n[31]=e("p",null,"LEMP 組合包是一款日益流行的網站服務組合軟件包，在許多生產環境中的核心網站服務上起着強有力的作用。正如其名稱所暗示的， LEMP 包是由 Linux、nginx、MariaDB/MySQL 和 PHP 組成的。在傳統的 LAMP 包中使用的 Apache HTTP 協議服務器性能低下而且難於大規模集羣，相比來説 nginx 的高性能及輕量級等特性，正是其的替代方案。 MariaDB 是一款社區支持驅動的 MySQL 資料庫的分支，其功能更多性能更佳。PHP，服務端編程語言，具體是由 PHP FastCGI 的增強版 PHP-FPM 組件來處理，生成網頁動態內容。",-1)),n[32]||(n[32]=e("p",null,[t("這篇文章裏，我們示範"),e("strong",null,"如何在 CentOS 操作平台上安裝 LEMP 包"),t("。我們安裝的目標是 CentOS 6 和 CentOS 7 兩個操作平台，如有必要會指出它們的不同。")],-1)),n[33]||(n[33]=e("h3",{id:"第一步-nginx",tabindex:"-1"},[t("第一步: Nginx "),e("a",{class:"header-anchor",href:"#第一步-nginx","aria-label":"Permalink to “第一步: Nginx”"},"​")],-1)),e("p",null,[n[1]||(n[1]=t("讓我們在 CentOS 上安裝 nginx 作為第一步，然後對它作些基本的配置，比如使其能引導時啓動和",-1)),r(p,{href:"http://linux.cn/article-4243-1.html"},{default:i(()=>[...n[0]||(n[0]=[t("對防火牆做個性化設置",-1)])]),_:1}),n[2]||(n[2]=t("。",-1))]),n[34]||(n[34]=a(`<h4 id="安裝-nginx" tabindex="-1">安裝 Nginx <a class="header-anchor" href="#安裝-nginx" aria-label="Permalink to “安裝 Nginx”">​</a></h4><p>讓我們從它的官方的 RPM 源來安裝一個預構建的穩定版本的 nginx 包。</p><p>在 CentOS 7 系統上:</p><pre><code>$ sudo rpm --import http://nginx.org/keys/nginx_signing.key
$ sudo rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
$ sudo yum install nginx 
</code></pre><p>在 CentOS 6 系統上:</p><pre><code>$ sudo rpm --import http://nginx.org/keys/nginx_signing.key
$ sudo rpm -ivh http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm
$ sudo yum install nginx 
</code></pre><p>注意在安裝 nginx RPM 包之前，如果您沒有導入 nginx 的官方 GPG 密鑰的話，會出一如下所示的警告:</p><pre><code>warning: /var/tmp/rpm-tmp.KttVHD: Header V4 RSA/SHA1 Signature, key ID 7bd9bf62: NOKEY
</code></pre><h4 id="啓動-nginx" tabindex="-1">啓動 Nginx <a class="header-anchor" href="#啓動-nginx" aria-label="Permalink to “啓動 Nginx”">​</a></h4><p>安裝完成後，nginx 是不會自動啓動的。現在讓我們來啓動它吧，還要做些配置讓其可以隨着操作系統啓動而啓動。我們也需要在防火牆裏打開 TCP/80 端口，以使得可以遠程訪問 nginx 的 web 服務。所有這些操作、設置都只需要輸入如下命令就可實現。</p><p>在 CentOS 7 系統上:</p><pre><code>$ sudo systemctl start nginx
$ sudo systemctl enable nginx
$ sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
$ sudo firewall-cmd --reload 
</code></pre><p>在 CentOS 6 系統上:</p><pre><code>$ sudo service nginx start
$ sudo chkconfig nginx on
$ sudo iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT
$ sudo service iptables save 
</code></pre><h4 id="測試-nginx" tabindex="-1">測試 Nginx <a class="header-anchor" href="#測試-nginx" aria-label="Permalink to “測試 Nginx”">​</a></h4>`,15)),e("p",null,[n[4]||(n[4]=t("nginx 的默認文檔要目錄是 /usr/share/nginx/html。默認的 index.html 文件一定已經在這目錄下了。讓我們檢測下是否可以訪問到這個測試 web 頁，輸入 ",-1)),r(p,{href:"http://xn--nginxip-x68lueu844a/"},{default:i(()=>[...n[3]||(n[3]=[t("http://nginx的ip地址/",-1)])]),_:1}),n[5]||(n[5]=t(" 訪問。",-1))]),n[35]||(n[35]=a(`<p><img src="https://farm4.staticflickr.com/3940/15461279287_8573948074_b.jpg" alt=""></p><p>如果您看到的是如上所示的頁面的話，説明 nginx 已經正常啓動。繼續往下。</p><h3 id="第二步-mariadb-mysql" tabindex="-1">第二步: MariaDB/MySQL <a class="header-anchor" href="#第二步-mariadb-mysql" aria-label="Permalink to “第二步: MariaDB/MySQL”">​</a></h3><p>下一步就是安裝 LEMP 包的資料庫組件。CentOS/RHEL 6 或早期的版本中提供的是 MySQL 的服務器/客户端安裝包，但 CentOS/RHEL 7 已使用了 MariaDB 替代了默認的 MySQL。作為 MySQL 的簡單替代品，MariaDB 保證了與 MySQL 的 API 和命令列用法方面最大的兼容性。下面是關於怎麼在 CentOS 上安裝和配置 MaraDB/MySQL 的操作示例。</p><p>在 CentOS 7 系統上:</p><p>如下所示操作來安裝 MariaDB 服務/客户端包以及啓動 MariaDB 服務。</p><pre><code>$ sudo yum install mariadb-server
$ sudo systemctl start mariadb
$ sudo systemctl enable mariadb 
</code></pre><p>在 CentOS 6 系統上:</p><p>如下示，安裝 MySQL 服務/客户端包並且啓動 MySQL 服務。</p><pre><code>$ sudo yum install mysql-server
$ sudo service mysqld start
$ sudo chkconfig mysqld on 
</code></pre><p>在成功啓動 MariaDB/MySQL 服務後，執行在 MariaDB/MySQL 服務包中的腳本。這一次的運行會為為資料庫服務器進行一些安全強化措施，如設置（非空）的 root 密碼、刪除匿名用户、鎖定遠程訪問。</p><pre><code> $ sudo mysql_secure_installation
</code></pre><p><img src="https://farm8.staticflickr.com/7545/15644566071_8c39875512_z.jpg" alt=""></p><p>這就是資料庫的設置。現在進行下一步。</p><h3 id="第三步-php" tabindex="-1">第三步: PHP <a class="header-anchor" href="#第三步-php" aria-label="Permalink to “第三步: PHP”">​</a></h3><p>PHP 是 LEMP 包中一個重要的組件，它負責把存儲在 MariaDB/MySQL 服務器的數據取出生成動態內容。為了 LEMP 需要，您至少需要安裝上 PHP-FPM 和 PHP-MySQL 兩個模組。PHP-FPM（FastCGI 進程管理器）實現的是 nginx 服務器和生成動態內容的 PHP 應用程序的訪問接口。PHP-MySQL 模組使 PHP 程序能訪問 MariaDB/MySQL 資料庫。</p><h4 id="安裝-php-模組" tabindex="-1">安裝 PHP 模組 <a class="header-anchor" href="#安裝-php-模組" aria-label="Permalink to “安裝 PHP 模組”">​</a></h4><p>在 CentOS 7 系統上:</p><pre><code>$ sudo yum php php-fpm php-mysql 
</code></pre><p>在 CentOS 6 系統上:</p>`,20)),e("p",null,[n[7]||(n[7]=t("首先，您需要從倉庫中安裝 REMI 庫（參見",-1)),r(p,{href:"http://linux.cn/article-4192-1.html"},{default:i(()=>[...n[6]||(n[6]=[t("本指南",-1)])]),_:1}),n[8]||(n[8]=t("），並安裝軟件包。",-1))]),n[36]||(n[36]=a(`<pre><code>$ sudo yum --enablerepo=remi install php php-fpm php-mysql 
</code></pre><p><img src="https://farm4.staticflickr.com/3934/15644566121_60cbaab8b7_z.jpg" alt=""></p><p>在安裝 PHP 時，得注意兩個地方:</p><p>在 CentOS 6 系統中，安裝 REMI倉庫中最新的 php-mysql 模組時，MySQL 的服務端包和客户端包會被當做一部分依賴包而自動的更新。</p><p>在 CentOS 6 和 CentOS 7 中，在安裝 PHP 包的同時會把 Apache web 服務器（即 httpd）當做它的依賴包一起安裝。這會跟 nginx web 服務器起衝突。這個問題會在下一節來討論。</p><p>取決於您的使用情況，可以使用 yum 命令來定製您的 PHP 引擎，也許會想安裝下面的任意一個擴展 PHP 模組包。</p><ul><li><strong>php-cli</strong>: PHP 的命令列界面。從命令列裏測試 PHP 時非常有用。</li><li><strong>php-gd</strong>: PHP 的圖像處理支持。</li><li><strong>php-bcmath</strong>: PHP 的數學支持。</li><li><strong>php-mcrypt</strong>: PHP 的加密算法支持 (例如 DES、Blowfish、CBC、 CFB、ECB ciphers 等)。</li><li><strong>php-xml</strong>: PHP 的 XML 解析和處理支持。</li><li><strong>php-dba</strong>: PHP 的數據抽象層支持。</li><li><strong>php-pecl-apc</strong>: PHP 加速器/緩存支持。</li></ul><p>安裝時，要查看可用的 PHP 模組的完整列表的話，可以運行：</p><pre><code>$ sudo yum search php- (CentOS 7)
$ sudo yum --enablerepo=remi search php- (CentOS 6)
</code></pre><h4 id="啓動-php-fpm" tabindex="-1">啓動 PHP-FPM <a class="header-anchor" href="#啓動-php-fpm" aria-label="Permalink to “啓動 PHP-FPM”">​</a></h4><p>您需要啓動 PHP-FPM ，然後把它放到自動啓動服務列表。</p><p>在 CentOS 7 系統上:</p><pre><code>$ sudo systemctl start php-fpm
$ sudo systemctl enable php-fpm
</code></pre><p>在 CentOS 6 系統上:</p><pre><code>$ sudo chkconfig php-fpm on
$ sudo service php-fpm start 
</code></pre><h3 id="第四步-配置-lemp-組合包" tabindex="-1">第四步: 配置 LEMP 組合包 <a class="header-anchor" href="#第四步-配置-lemp-組合包" aria-label="Permalink to “第四步: 配置 LEMP 組合包”">​</a></h3><p>本教程的最後一步是調整 LEMP 組合包的配置。</p><h4 id="使-httpd-不可用" tabindex="-1">使 Httpd 不可用 <a class="header-anchor" href="#使-httpd-不可用" aria-label="Permalink to “使 Httpd 不可用”">​</a></h4><p>首先，讓我們把早先隨 PHP 包安裝的 httpd 服務給禁用掉。</p><p>在 CentOS 7 系統上:</p><pre><code>$ sudo systemctl disable httpd
</code></pre><p>在 CentOS 6 系統上:</p><pre><code>$ sudo chkconfig httpd off 
</code></pre><h4 id="配置-nginx" tabindex="-1">配置 Nginx <a class="header-anchor" href="#配置-nginx" aria-label="Permalink to “配置 Nginx”">​</a></h4><p>接下來，讓我們配置 nginx 虛擬主機，使得 nginx 可以通過 PHP-FPM 來處理 PHP 的任務。用文本編輯器打開 /etc/nginx/conf.d/default.conf ，然後按如下所示修改。</p><pre><code> $ sudo vi /etc/nginx/conf.d/default.conf 
</code></pre><hr><pre><code>server {
    listen       80;
    server_name  www.server_domain.com;
    root   /usr/share/nginx/html;
    index  index.php index.html index.htm;

    location / {
    }

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
    }

    # nginx passes PHP scripts to FastCGI server via a TCP/9000 socket
    # this setting much be consistent with /etc/php-fpm.d/www.conf
    # try_files prevents nginx from passing bad scripts to FastCGI server
    location ~ \\.php$ {
        try_files $uri =404;
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
</code></pre><p>nginx 的默認工作線程數（在 /etc/nginx/nginx.conf 文件中指定的）是 1，讓我們也來調整一下這個數字。通常來説我們創建的工作線程數應該和 CPU 核數相同。要確信您的 CPU 的核數，請運行下面這命令：</p><pre><code>$ grep processor /proc/cpuinfo | wc -l
</code></pre><p>如果您的 CPU 是 4 核的，就如下所示修改 /etc/nginx/nginx.conf 文件。</p><pre><code>$ sudo vi /etc/nginx/nginx.conf 
</code></pre><hr><pre><code>worker_processes  4;
</code></pre><h4 id="配置-php" tabindex="-1">配置 PHP <a class="header-anchor" href="#配置-php" aria-label="Permalink to “配置 PHP”">​</a></h4><p>接下來，讓我們對 PHP 的配置文件 /etc/php.ini 做自定義設置。更具體的就是在 /etc/php.ini 文件中增加以下兩行。</p><pre><code>cgi.fix_pathinfo=0
date.timezone = &quot;PRC&quot;
</code></pre><p>為了安全起見，我們希望的是 PHP 解釋器只是處理指定文件路徑的文件任務，而不是預測搜索一些並不存在的文件任務。上面的第一行起的就是這個作用。（LCTT 譯註：原文用的時區是“America/New York”，根據國內情況，應該用 PRC或 Asia 下的中國城市。）</p>`,38)),e("p",null,[n[10]||(n[10]=t("第二行定義的是 PHP 中日期/時間相關函數使用相關的默認時區。使用",-1)),r(p,{href:"http://ask.xmodulo.com/set-default-timezone-php.html"},{default:i(()=>[...n[9]||(n[9]=[t("本指南",-1)])]),_:1}),n[11]||(n[11]=t("，找出您所在的時區，並設置相應 ",-1)),n[12]||(n[12]=e("strong",null,"date.timezone 的值",-1)),n[13]||(n[13]=t("。",-1))]),n[37]||(n[37]=a(`<h4 id="測試-php" tabindex="-1">測試 PHP <a class="header-anchor" href="#測試-php" aria-label="Permalink to “測試 PHP”">​</a></h4><p>最後，讓我們來測試下 nginx 是否能處理 PHP 頁面。在測試之前，請確保重啓 nginx 和 PHP-FPM。</p><p>在 CentOS 7 系統上:</p><pre><code>$ sudo systemctl restart nginx
$ sudo systemctl restart php-fpm 
</code></pre><p>在 CentOS 6 系統上:</p><pre><code>$ sudo service nginx restart
$ sudo service php-fpm restart 
</code></pre><p>創建一個叫名叫 test.php 的文件，然後寫入如下內容，並放入 /var/www/html/ 目錄。</p><pre><code>&lt;?php phpinfo(); ?&gt;
</code></pre>`,8)),e("p",null,[n[15]||(n[15]=t("打開瀏覽器，輸入 ",-1)),r(p,{href:"http://xn--nginxIP-x68lueu844a/test.php"},{default:i(()=>[...n[14]||(n[14]=[t("http://nginx的IP地址/test.php",-1)])]),_:1}),n[16]||(n[16]=t(" 。",-1))]),n[38]||(n[38]=e("p",null,[e("img",{src:"https://farm6.staticflickr.com/5608/15647258715_9d7bcd8c73_z.jpg",alt:""})],-1)),n[39]||(n[39]=e("p",null,"如果您能看到如上所示的頁面，説明設置的 LEMP 完全成功！",-1)),n[40]||(n[40]=e("hr",null,null,-1)),e("p",null,[n[18]||(n[18]=t("via: ",-1)),r(p,{href:"http://xmodulo.com/install-lemp-stack-centos.html"},{default:i(()=>[...n[17]||(n[17]=[t("http://xmodulo.com/install-lemp-stack-centos.html",-1)])]),_:1})]),e("p",null,[n[22]||(n[22]=t("作者：",-1)),r(p,{href:"http://xmodulo.com/author/nanni"},{default:i(()=>[...n[19]||(n[19]=[t("Dan Nanni",-1)])]),_:1}),n[23]||(n[23]=t(" 譯者：",-1)),r(p,{href:"https://github.com/runningwater"},{default:i(()=>[...n[20]||(n[20]=[t("runningwater",-1)])]),_:1}),n[24]||(n[24]=t(" 校對：",-1)),r(p,{href:"https://github.com/wxy"},{default:i(()=>[...n[21]||(n[21]=[t("wxy",-1)])]),_:1})]),e("p",null,[n[27]||(n[27]=t("本文由 ",-1)),r(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[25]||(n[25]=[t("LCTT",-1)])]),_:1}),n[28]||(n[28]=t(" 原創翻譯，",-1)),r(p,{href:"http://linux.cn/"},{default:i(()=>[...n[26]||(n[26]=[t("Linux中國",-1)])]),_:1}),n[29]||(n[29]=t(" 榮譽推出",-1))])])}const c=o(P,[["render",m]]);export{C as __pageData,c as default};
