import{_ as p,a0 as s,w as d,s as l,I as t,x as e,a1 as i,A as r,ao as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"如何從Web瀏覽器遠程監視Linux服務器和桌面 | LCTT x X-CMD","titleTemplate":false,"description":"如何從Web瀏覽器遠程監視Linux服務器和桌面 | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何從Web瀏覽器遠程監視Linux服務器和桌面 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何從Web瀏覽器遠程監視Linux服務器和桌面 | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/How to monitor a Linux server and desktop remotely from web browser","title":"如何從Web瀏覽器遠程監視Linux服務器和桌面","tag":"201405","desc":""},"relativePath":"201405/How to monitor a Linux server and desktop remotely from web browser.md","filePath":"[post].md"}'),u={name:"201405/How to monitor a Linux server and desktop remotely from web browser.md"};function x(m,n,f,g,h,c){const o=s("Link");return d(),l("div",null,[n[19]||(n[19]=t("h1",{id:"如何從web瀏覽器遠程監視linux服務器和桌面",tabindex:"-1"},[e("如何從Web瀏覽器遠程監視Linux服務器和桌面 "),t("a",{class:"header-anchor",href:"#如何從web瀏覽器遠程監視linux服務器和桌面","aria-label":"Permalink to “如何從Web瀏覽器遠程監視Linux服務器和桌面”"},"​")],-1)),t("p",null,[n[1]||(n[1]=e("當你要監視一台Linux機器時，你會有很多的選擇。雖然現在有很多產品質量監控方案(比如 Nagios、 Zabbix、 Zenoss)，它們擁有華麗的UI，可擴展監控，易於理解的報告等等，這些方案對於大多數終端用户都太過於強大了。如果你只需檢查Linux服務器或桌面的基本狀態（比如，CPU負載、內存使用、活躍進程），就請考慮一下",-1)),i(o,{href:"https://github.com/afaqurk/linux-dash"},{default:r(()=>[...n[0]||(n[0]=[e("linux-dash",-1)])]),_:1}),n[2]||(n[2]=e("。",-1))]),n[20]||(n[20]=a(`<p>linux-dash是一款面向Linux機器的基於web的輕量級監控面板，可以實時顯示不同的系統屬性，比如CPU負載、內存使用、磁盤使用、網絡速度、網絡連接、上下行帶寬、登錄用户、運行中的進程等等。linux-dash沒有後端資料庫庫來存儲長期統計。在任何已有的web服務器(如Apache、Nginx)上運行linux-dash，你就可以用了。這是一個快速又簡單的方法來對個人項目進行遠程監控。</p><p>在這篇教程中，我會描述<strong>如何在Linux的Nginx web服務器上設置linux-dash</strong>。這裏用Nginx，而不是Apache，是因為它更輕量。</p><h3 id="在debian、ubuntu或者linux-mint上設置linux-dash" tabindex="-1">在Debian、Ubuntu或者Linux Mint上設置linux-dash <a class="header-anchor" href="#在debian、ubuntu或者linux-mint上設置linux-dash" aria-label="Permalink to “在Debian、Ubuntu或者Linux Mint上設置linux-dash”">​</a></h3><p>首先，安裝帶php-fpm的Nginx web服務器。</p><pre><code>$ sudo apt-get install git nginx php5-json php5-fpm php5-curl
</code></pre><p>為linux-dash創建如下Nginx配置文件/etc/nginx/conf.d/linuxdash.conf。 本例中，我們使用8080端口。</p><pre><code>$ sudo vi /etc/nginx/conf.d/linuxdash.conf 
</code></pre><hr><pre><code>server {
    server_name     $domain_name;
    listen          8080;
    root            /var/www;
    index           index.html index.php;
    access_log      /var/log/nginx/access.log;
    error_log       /var/log/nginx/error.log;

    location ~* \\.(?:xml|ogg|mp3|mp4|ogv|svg|svgz|eot|otf|woff|ttf|css|js|jpg|jpeg|gif|png|ico)$ {
            try_files $uri =404;
            expires max;
            access_log off;
            add_header Pragma public;
            add_header Cache-Control &quot;public, must-revalidate, proxy-revalidate&quot;;
    }

    location /linux-dash {
        index index.html index.php;
    }

    # PHP-FPM via sockets
    location ~ \\.php(/|$) {
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_split_path_info ^(.+?\\.php)(/.*)$;
            fastcgi_pass unix:/var/run/php5-fpm.sock;
            if (!-f $document_root$fastcgi_script_name) {
                    return 404;
            }
            try_files $uri $uri/ /index.php?$args;
            include fastcgi_params;
    }
}
</code></pre><p>禁止默認站點配置。</p><pre><code>$ sudo rm /etc/nginx/sites-enabled/default
</code></pre><p>編輯<code>/etc/php5/fpm/pool.d/www.conf</code>來配置php-fpm。確保按如下編輯&quot;user&quot;, &quot;group&quot; 和 &quot;listen&quot;指令。你可以不改變剩下的配置。</p><pre><code>$ sudo vi /etc/php5/fpm/pool.d/www.conf 

user = www-data
group = www-data
listen = /var/run/php5-fpm.sock
</code></pre><p>開始下載並安裝linux-dash。</p><pre><code>$ git clone https://github.com/afaqurk/linux-dash.git
$ sudo cp -r linux-dash/ /var/www/
$ sudo chown -R www-data:www-data /var/www
</code></pre><p>重啓Nginx與php-fpm來完成安裝。</p><pre><code>$ sudo service php5-fpm restart
$ sudo service nginx restart 
</code></pre><h3 id="在centos、fedora、rhel上設置linux-dash" tabindex="-1">在CentOS、Fedora、RHEL上設置linux-dash <a class="header-anchor" href="#在centos、fedora、rhel上設置linux-dash" aria-label="Permalink to “在CentOS、Fedora、RHEL上設置linux-dash”">​</a></h3>`,18)),t("p",null,[n[4]||(n[4]=e("在CentOS上，需要首先",-1)),i(o,{href:"http://xmodulo.com/2013/03/how-to-set-up-epel-repository-on-centos.html"},{default:r(()=>[...n[3]||(n[3]=[e("啓用EPEL倉庫",-1)])]),_:1})]),n[21]||(n[21]=a(`<p>安裝Nginx與php-fpm組件。</p><pre><code>$ sudo yum install git nginx php-common php-fpm 
</code></pre><p>為linux-dash程序配置Nginx，如下創建/etc/nginx/conf.d/linuxdash.conf</p><pre><code>$ sudo vi /etc/nginx/conf.d/linuxdash.conf 
</code></pre><hr><pre><code>server {
    server_name     $domain_name;
    listen          8080;
    root            /var/www;
    index           index.html index.php;
    access_log      /var/log/nginx/access.log;
    error_log       /var/log/nginx/error.log;

    location ~* \\.(?:xml|ogg|mp3|mp4|ogv|svg|svgz|eot|otf|woff|ttf|css|js|jpg|jpeg|gif|png|ico)$ {
            try_files $uri =404;
            expires max;
            access_log off;
            add_header Pragma public;
            add_header Cache-Control &quot;public, must-revalidate, proxy-revalidate&quot;;
    }

    location /linux-dash {
        index index.html index.php;
    }

    # PHP-FPM via sockets
    location ~ \\.php(/|$) {
            fastcgi_param  SCRIPT_FILENAME   $document_root$fastcgi_script_name;
            fastcgi_split_path_info ^(.+?\\.php)(/.*)$;
            fastcgi_pass unix:/var/run/php-fpm.sock;
            if (!-f $document_root$fastcgi_script_name) {
                    return 404;
            }
            try_files $uri $uri/ /index.php?$args;
            include fastcgi_params;
    }
}
</code></pre><p>接下來，編輯<code>/etc/php-fpm.d/www.conf</code>來配置php-fpm。在這個文件中，確保按如下編輯&quot;user&quot;, &quot;group&quot; 和 &quot;listen&quot;字段。你可以不改變剩下的配置。</p><pre><code>$ sudo vi /etc/php-fpm.d/www.conf 

 listen = /var/run/php-fpm.sock
 user = nginx
 group = nginx
</code></pre><p>在/var/wwwx下載並安裝linux-dash。</p><pre><code>$ git clone https://github.com/afaqurk/linux-dash.git
$ sudo cp -r linux-dash/ /var/www/
$ sudo chown -R nginx:nginx /var/www 
</code></pre><p>最後，重啓Nginx和php-fpm，並設置開機自啓。</p><pre><code>$ sudo service php-fpm restart
$ sudo service nginx restart
$ sudo chkconfig nginx on
$ sudo chkconfig php-fpm on 
</code></pre><p>在本例中，我們已經配置linux-dash使用TCP端口8080。所以確保防火牆沒有阻止TCP 8080端口。</p><h3 id="用linux-dash監視linux機器" tabindex="-1">用linux-dash監視Linux機器 <a class="header-anchor" href="#用linux-dash監視linux機器" aria-label="Permalink to “用linux-dash監視Linux機器”">​</a></h3><p>要在web瀏覽器上訪問linux-dash，只需在web瀏覽器中輸入http://&lt;linux ip地址&gt;:8080/linux-dash/</p>`,15)),t("p",null,[n[6]||(n[6]=e("下面是linux-dash的截圖。web面板包含了幾個小部件，每個都會顯示特性的系統參數。你可以通過重安排並且/或者關閉一些小部件來自定義web面板的外觀。",-1)),i(o,{href:"http://afaq.dreamhosters.com/linux-dash/"},{default:r(()=>[...n[5]||(n[5]=[e("這裏",-1)])]),_:1}),n[7]||(n[7]=e("是一個linux-dash創建者的演示站點。",-1))]),n[22]||(n[22]=a('<p><img src="https://farm8.staticflickr.com/7268/13799855404_249533c250_z.jpg" alt=""></p><p><img src="https://farm8.staticflickr.com/7066/13799535593_4b40f2c529_z.jpg" alt=""></p><h2 id="" tabindex="-1"><img src="https://farm8.staticflickr.com/7091/13799524135_10c9a86b68_z.jpg" alt=""> <a class="header-anchor" href="#" aria-label="Permalink to “”">​</a></h2>',3)),t("p",null,[n[9]||(n[9]=e("via: ",-1)),i(o,{href:"http://xmodulo.com/2014/04/monitor-linux-server-desktop-remotely-web-browser.html"},{default:r(()=>[...n[8]||(n[8]=[e("http://xmodulo.com/2014/04/monitor-linux-server-desktop-remotely-web-browser.html",-1)])]),_:1})]),t("p",null,[n[12]||(n[12]=e("譯者：",-1)),i(o,{href:"https://github.com/geekpi"},{default:r(()=>[...n[10]||(n[10]=[e("geekpi",-1)])]),_:1}),n[13]||(n[13]=e(" 校對：",-1)),i(o,{href:"https://github.com/wxy"},{default:r(()=>[...n[11]||(n[11]=[e("wxy",-1)])]),_:1})]),t("p",null,[n[16]||(n[16]=e("本文由 ",-1)),i(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[14]||(n[14]=[e("LCTT",-1)])]),_:1}),n[17]||(n[17]=e(" 原創翻譯，",-1)),i(o,{href:"http://linux.cn/"},{default:r(()=>[...n[15]||(n[15]=[e("Linux中國",-1)])]),_:1}),n[18]||(n[18]=e(" 榮譽推出",-1))])])}const v=p(u,[["render",x]]);export{b as __pageData,v as default};
