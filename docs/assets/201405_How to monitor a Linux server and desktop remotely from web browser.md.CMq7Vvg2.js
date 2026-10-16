import{_ as p,a0 as s,w as d,s as l,I as t,x as e,a1 as i,A as r,ao as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"如何从Web浏览器远程监视Linux服务器和桌面 | LCTT x X-CMD","titleTemplate":false,"description":"如何从Web浏览器远程监视Linux服务器和桌面 | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何从Web浏览器远程监视Linux服务器和桌面 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何从Web浏览器远程监视Linux服务器和桌面 | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/How to monitor a Linux server and desktop remotely from web browser","title":"如何从Web浏览器远程监视Linux服务器和桌面","tag":"201405","desc":""},"relativePath":"201405/How to monitor a Linux server and desktop remotely from web browser.md","filePath":"[post].md"}'),u={name:"201405/How to monitor a Linux server and desktop remotely from web browser.md"};function x(m,n,f,g,h,c){const o=s("Link");return d(),l("div",null,[n[19]||(n[19]=t("h1",{id:"如何从web浏览器远程监视linux服务器和桌面",tabindex:"-1"},[e("如何从Web浏览器远程监视Linux服务器和桌面 "),t("a",{class:"header-anchor",href:"#如何从web浏览器远程监视linux服务器和桌面","aria-label":"Permalink to “如何从Web浏览器远程监视Linux服务器和桌面”"},"​")],-1)),t("p",null,[n[1]||(n[1]=e("当你要监视一台Linux机器时，你会有很多的选择。虽然现在有很多产品质量监控方案(比如 Nagios、 Zabbix、 Zenoss)，它们拥有华丽的UI，可扩展监控，易于理解的报告等等，这些方案对于大多数终端用户都太过于强大了。如果你只需检查Linux服务器或桌面的基本状态（比如，CPU负载、内存使用、活跃进程），就请考虑一下",-1)),i(o,{href:"https://github.com/afaqurk/linux-dash"},{default:r(()=>[...n[0]||(n[0]=[e("linux-dash",-1)])]),_:1}),n[2]||(n[2]=e("。",-1))]),n[20]||(n[20]=a(`<p>linux-dash是一款面向Linux机器的基于web的轻量级监控面板，可以实时显示不同的系统属性，比如CPU负载、内存使用、磁盘使用、网络速度、网络连接、上下行带宽、登录用户、运行中的进程等等。linux-dash没有后端数据库库来存储长期统计。在任何已有的web服务器(如Apache、Nginx)上运行linux-dash，你就可以用了。这是一个快速又简单的方法来对个人项目进行远程监控。</p><p>在这篇教程中，我会描述<strong>如何在Linux的Nginx web服务器上设置linux-dash</strong>。这里用Nginx，而不是Apache，是因为它更轻量。</p><h3 id="在debian、ubuntu或者linux-mint上设置linux-dash" tabindex="-1">在Debian、Ubuntu或者Linux Mint上设置linux-dash <a class="header-anchor" href="#在debian、ubuntu或者linux-mint上设置linux-dash" aria-label="Permalink to “在Debian、Ubuntu或者Linux Mint上设置linux-dash”">​</a></h3><p>首先，安装带php-fpm的Nginx web服务器。</p><pre><code>$ sudo apt-get install git nginx php5-json php5-fpm php5-curl
</code></pre><p>为linux-dash创建如下Nginx配置文件/etc/nginx/conf.d/linuxdash.conf。 本例中，我们使用8080端口。</p><pre><code>$ sudo vi /etc/nginx/conf.d/linuxdash.conf 
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
</code></pre><p>禁止默认站点配置。</p><pre><code>$ sudo rm /etc/nginx/sites-enabled/default
</code></pre><p>编辑<code>/etc/php5/fpm/pool.d/www.conf</code>来配置php-fpm。确保按如下编辑&quot;user&quot;, &quot;group&quot; 和 &quot;listen&quot;指令。你可以不改变剩下的配置。</p><pre><code>$ sudo vi /etc/php5/fpm/pool.d/www.conf 

user = www-data
group = www-data
listen = /var/run/php5-fpm.sock
</code></pre><p>开始下载并安装linux-dash。</p><pre><code>$ git clone https://github.com/afaqurk/linux-dash.git
$ sudo cp -r linux-dash/ /var/www/
$ sudo chown -R www-data:www-data /var/www
</code></pre><p>重启Nginx与php-fpm来完成安装。</p><pre><code>$ sudo service php5-fpm restart
$ sudo service nginx restart 
</code></pre><h3 id="在centos、fedora、rhel上设置linux-dash" tabindex="-1">在CentOS、Fedora、RHEL上设置linux-dash <a class="header-anchor" href="#在centos、fedora、rhel上设置linux-dash" aria-label="Permalink to “在CentOS、Fedora、RHEL上设置linux-dash”">​</a></h3>`,18)),t("p",null,[n[4]||(n[4]=e("在CentOS上，需要首先",-1)),i(o,{href:"http://xmodulo.com/2013/03/how-to-set-up-epel-repository-on-centos.html"},{default:r(()=>[...n[3]||(n[3]=[e("启用EPEL仓库",-1)])]),_:1})]),n[21]||(n[21]=a(`<p>安装Nginx与php-fpm组件。</p><pre><code>$ sudo yum install git nginx php-common php-fpm 
</code></pre><p>为linux-dash程序配置Nginx，如下创建/etc/nginx/conf.d/linuxdash.conf</p><pre><code>$ sudo vi /etc/nginx/conf.d/linuxdash.conf 
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
</code></pre><p>接下来，编辑<code>/etc/php-fpm.d/www.conf</code>来配置php-fpm。在这个文件中，确保按如下编辑&quot;user&quot;, &quot;group&quot; 和 &quot;listen&quot;字段。你可以不改变剩下的配置。</p><pre><code>$ sudo vi /etc/php-fpm.d/www.conf 

 listen = /var/run/php-fpm.sock
 user = nginx
 group = nginx
</code></pre><p>在/var/wwwx下载并安装linux-dash。</p><pre><code>$ git clone https://github.com/afaqurk/linux-dash.git
$ sudo cp -r linux-dash/ /var/www/
$ sudo chown -R nginx:nginx /var/www 
</code></pre><p>最后，重启Nginx和php-fpm，并设置开机自启。</p><pre><code>$ sudo service php-fpm restart
$ sudo service nginx restart
$ sudo chkconfig nginx on
$ sudo chkconfig php-fpm on 
</code></pre><p>在本例中，我们已经配置linux-dash使用TCP端口8080。所以确保防火墙没有阻止TCP 8080端口。</p><h3 id="用linux-dash监视linux机器" tabindex="-1">用linux-dash监视Linux机器 <a class="header-anchor" href="#用linux-dash监视linux机器" aria-label="Permalink to “用linux-dash监视Linux机器”">​</a></h3><p>要在web浏览器上访问linux-dash，只需在web浏览器中输入http://&lt;linux ip地址&gt;:8080/linux-dash/</p>`,15)),t("p",null,[n[6]||(n[6]=e("下面是linux-dash的截图。web面板包含了几个小部件，每个都会显示特性的系统参数。你可以通过重安排并且/或者关闭一些小部件来自定义web面板的外观。",-1)),i(o,{href:"http://afaq.dreamhosters.com/linux-dash/"},{default:r(()=>[...n[5]||(n[5]=[e("这里",-1)])]),_:1}),n[7]||(n[7]=e("是一个linux-dash创建者的演示站点。",-1))]),n[22]||(n[22]=a('<p><img src="https://farm8.staticflickr.com/7268/13799855404_249533c250_z.jpg" alt=""></p><p><img src="https://farm8.staticflickr.com/7066/13799535593_4b40f2c529_z.jpg" alt=""></p><h2 id="" tabindex="-1"><img src="https://farm8.staticflickr.com/7091/13799524135_10c9a86b68_z.jpg" alt=""> <a class="header-anchor" href="#" aria-label="Permalink to “”">​</a></h2>',3)),t("p",null,[n[9]||(n[9]=e("via: ",-1)),i(o,{href:"http://xmodulo.com/2014/04/monitor-linux-server-desktop-remotely-web-browser.html"},{default:r(()=>[...n[8]||(n[8]=[e("http://xmodulo.com/2014/04/monitor-linux-server-desktop-remotely-web-browser.html",-1)])]),_:1})]),t("p",null,[n[12]||(n[12]=e("译者：",-1)),i(o,{href:"https://github.com/geekpi"},{default:r(()=>[...n[10]||(n[10]=[e("geekpi",-1)])]),_:1}),n[13]||(n[13]=e(" 校对：",-1)),i(o,{href:"https://github.com/wxy"},{default:r(()=>[...n[11]||(n[11]=[e("wxy",-1)])]),_:1})]),t("p",null,[n[16]||(n[16]=e("本文由 ",-1)),i(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[14]||(n[14]=[e("LCTT",-1)])]),_:1}),n[17]||(n[17]=e(" 原创翻译，",-1)),i(o,{href:"http://linux.cn/"},{default:r(()=>[...n[15]||(n[15]=[e("Linux中国",-1)])]),_:1}),n[18]||(n[18]=e(" 荣誉推出",-1))])])}const v=p(u,[["render",x]]);export{b as __pageData,v as default};
