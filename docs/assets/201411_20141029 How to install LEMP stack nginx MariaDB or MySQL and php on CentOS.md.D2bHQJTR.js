import{_ as o,a0 as s,w as l,s as d,I as e,x as t,a1 as r,A as i,ao as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"CentOS 下安装 LEMP 服务(nginx、MariaDB/MySQL 和 php) | LCTT x X-CMD","titleTemplate":false,"description":"CentOS 下安装 LEMP 服务(nginx、MariaDB/MySQL 和 php) | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"CentOS 下安装 LEMP 服务(nginx、MariaDB/MySQL 和 php) | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"CentOS 下安装 LEMP 服务(nginx、MariaDB/MySQL 和 php) | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20141029 How to install LEMP stack nginx MariaDB or MySQL and php on CentOS","title":"CentOS 下安装 LEMP 服务(nginx、MariaDB/MySQL 和 php)","tag":"201411","desc":""},"relativePath":"201411/20141029 How to install LEMP stack nginx MariaDB or MySQL and php on CentOS.md","filePath":"[post].md"}'),P={name:"201411/20141029 How to install LEMP stack nginx MariaDB or MySQL and php on CentOS.md"};function m(g,n,x,h,u,f){const p=s("Link");return l(),d("div",null,[n[30]||(n[30]=e("h1",{id:"centos-下安装-lemp-服务-nginx、mariadb-mysql-和-php",tabindex:"-1"},[t("CentOS 下安装 LEMP 服务(nginx、MariaDB/MySQL 和 php) "),e("a",{class:"header-anchor",href:"#centos-下安装-lemp-服务-nginx、mariadb-mysql-和-php","aria-label":"Permalink to “CentOS 下安装 LEMP 服务(nginx、MariaDB/MySQL 和 php)”"},"​")],-1)),n[31]||(n[31]=e("p",null,"LEMP 组合包是一款日益流行的网站服务组合软件包，在许多生产环境中的核心网站服务上起着强有力的作用。正如其名称所暗示的， LEMP 包是由 Linux、nginx、MariaDB/MySQL 和 PHP 组成的。在传统的 LAMP 包中使用的 Apache HTTP 协议服务器性能低下而且难于大规模集群，相比来说 nginx 的高性能及轻量级等特性，正是其的替代方案。 MariaDB 是一款社区支持驱动的 MySQL 数据库的分支，其功能更多性能更佳。PHP，服务端编程语言，具体是由 PHP FastCGI 的增强版 PHP-FPM 组件来处理，生成网页动态内容。",-1)),n[32]||(n[32]=e("p",null,[t("这篇文章里，我们示范"),e("strong",null,"如何在 CentOS 操作平台上安装 LEMP 包"),t("。我们安装的目标是 CentOS 6 和 CentOS 7 两个操作平台，如有必要会指出它们的不同。")],-1)),n[33]||(n[33]=e("h3",{id:"第一步-nginx",tabindex:"-1"},[t("第一步: Nginx "),e("a",{class:"header-anchor",href:"#第一步-nginx","aria-label":"Permalink to “第一步: Nginx”"},"​")],-1)),e("p",null,[n[1]||(n[1]=t("让我们在 CentOS 上安装 nginx 作为第一步，然后对它作些基本的配置，比如使其能引导时启动和",-1)),r(p,{href:"http://linux.cn/article-4243-1.html"},{default:i(()=>[...n[0]||(n[0]=[t("对防火墙做个性化设置",-1)])]),_:1}),n[2]||(n[2]=t("。",-1))]),n[34]||(n[34]=a(`<h4 id="安装-nginx" tabindex="-1">安装 Nginx <a class="header-anchor" href="#安装-nginx" aria-label="Permalink to “安装 Nginx”">​</a></h4><p>让我们从它的官方的 RPM 源来安装一个预构建的稳定版本的 nginx 包。</p><p>在 CentOS 7 系统上:</p><pre><code>$ sudo rpm --import http://nginx.org/keys/nginx_signing.key
$ sudo rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
$ sudo yum install nginx 
</code></pre><p>在 CentOS 6 系统上:</p><pre><code>$ sudo rpm --import http://nginx.org/keys/nginx_signing.key
$ sudo rpm -ivh http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm
$ sudo yum install nginx 
</code></pre><p>注意在安装 nginx RPM 包之前，如果您没有导入 nginx 的官方 GPG 密钥的话，会出一如下所示的警告:</p><pre><code>warning: /var/tmp/rpm-tmp.KttVHD: Header V4 RSA/SHA1 Signature, key ID 7bd9bf62: NOKEY
</code></pre><h4 id="启动-nginx" tabindex="-1">启动 Nginx <a class="header-anchor" href="#启动-nginx" aria-label="Permalink to “启动 Nginx”">​</a></h4><p>安装完成后，nginx 是不会自动启动的。现在让我们来启动它吧，还要做些配置让其可以随着操作系统启动而启动。我们也需要在防火墙里打开 TCP/80 端口，以使得可以远程访问 nginx 的 web 服务。所有这些操作、设置都只需要输入如下命令就可实现。</p><p>在 CentOS 7 系统上:</p><pre><code>$ sudo systemctl start nginx
$ sudo systemctl enable nginx
$ sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
$ sudo firewall-cmd --reload 
</code></pre><p>在 CentOS 6 系统上:</p><pre><code>$ sudo service nginx start
$ sudo chkconfig nginx on
$ sudo iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT
$ sudo service iptables save 
</code></pre><h4 id="测试-nginx" tabindex="-1">测试 Nginx <a class="header-anchor" href="#测试-nginx" aria-label="Permalink to “测试 Nginx”">​</a></h4>`,15)),e("p",null,[n[4]||(n[4]=t("nginx 的默认文档要目录是 /usr/share/nginx/html。默认的 index.html 文件一定已经在这目录下了。让我们检测下是否可以访问到这个测试 web 页，输入 ",-1)),r(p,{href:"http://xn--nginxip-x68lueu844a/"},{default:i(()=>[...n[3]||(n[3]=[t("http://nginx的ip地址/",-1)])]),_:1}),n[5]||(n[5]=t(" 访问。",-1))]),n[35]||(n[35]=a(`<p><img src="https://farm4.staticflickr.com/3940/15461279287_8573948074_b.jpg" alt=""></p><p>如果您看到的是如上所示的页面的话，说明 nginx 已经正常启动。继续往下。</p><h3 id="第二步-mariadb-mysql" tabindex="-1">第二步: MariaDB/MySQL <a class="header-anchor" href="#第二步-mariadb-mysql" aria-label="Permalink to “第二步: MariaDB/MySQL”">​</a></h3><p>下一步就是安装 LEMP 包的数据库组件。CentOS/RHEL 6 或早期的版本中提供的是 MySQL 的服务器/客户端安装包，但 CentOS/RHEL 7 已使用了 MariaDB 替代了默认的 MySQL。作为 MySQL 的简单替代品，MariaDB 保证了与 MySQL 的 API 和命令行用法方面最大的兼容性。下面是关于怎么在 CentOS 上安装和配置 MaraDB/MySQL 的操作示例。</p><p>在 CentOS 7 系统上:</p><p>如下所示操作来安装 MariaDB 服务/客户端包以及启动 MariaDB 服务。</p><pre><code>$ sudo yum install mariadb-server
$ sudo systemctl start mariadb
$ sudo systemctl enable mariadb 
</code></pre><p>在 CentOS 6 系统上:</p><p>如下示，安装 MySQL 服务/客户端包并且启动 MySQL 服务。</p><pre><code>$ sudo yum install mysql-server
$ sudo service mysqld start
$ sudo chkconfig mysqld on 
</code></pre><p>在成功启动 MariaDB/MySQL 服务后，执行在 MariaDB/MySQL 服务包中的脚本。这一次的运行会为为数据库服务器进行一些安全强化措施，如设置（非空）的 root 密码、删除匿名用户、锁定远程访问。</p><pre><code> $ sudo mysql_secure_installation
</code></pre><p><img src="https://farm8.staticflickr.com/7545/15644566071_8c39875512_z.jpg" alt=""></p><p>这就是数据库的设置。现在进行下一步。</p><h3 id="第三步-php" tabindex="-1">第三步: PHP <a class="header-anchor" href="#第三步-php" aria-label="Permalink to “第三步: PHP”">​</a></h3><p>PHP 是 LEMP 包中一个重要的组件，它负责把存储在 MariaDB/MySQL 服务器的数据取出生成动态内容。为了 LEMP 需要，您至少需要安装上 PHP-FPM 和 PHP-MySQL 两个模块。PHP-FPM（FastCGI 进程管理器）实现的是 nginx 服务器和生成动态内容的 PHP 应用程序的访问接口。PHP-MySQL 模块使 PHP 程序能访问 MariaDB/MySQL 数据库。</p><h4 id="安装-php-模块" tabindex="-1">安装 PHP 模块 <a class="header-anchor" href="#安装-php-模块" aria-label="Permalink to “安装 PHP 模块”">​</a></h4><p>在 CentOS 7 系统上:</p><pre><code>$ sudo yum php php-fpm php-mysql 
</code></pre><p>在 CentOS 6 系统上:</p>`,20)),e("p",null,[n[7]||(n[7]=t("首先，您需要从仓库中安装 REMI 库（参见",-1)),r(p,{href:"http://linux.cn/article-4192-1.html"},{default:i(()=>[...n[6]||(n[6]=[t("本指南",-1)])]),_:1}),n[8]||(n[8]=t("），并安装软件包。",-1))]),n[36]||(n[36]=a(`<pre><code>$ sudo yum --enablerepo=remi install php php-fpm php-mysql 
</code></pre><p><img src="https://farm4.staticflickr.com/3934/15644566121_60cbaab8b7_z.jpg" alt=""></p><p>在安装 PHP 时，得注意两个地方:</p><p>在 CentOS 6 系统中，安装 REMI仓库中最新的 php-mysql 模块时，MySQL 的服务端包和客户端包会被当做一部分依赖包而自动的更新。</p><p>在 CentOS 6 和 CentOS 7 中，在安装 PHP 包的同时会把 Apache web 服务器（即 httpd）当做它的依赖包一起安装。这会跟 nginx web 服务器起冲突。这个问题会在下一节来讨论。</p><p>取决于您的使用情况，可以使用 yum 命令来定制您的 PHP 引擎，也许会想安装下面的任意一个扩展 PHP 模块包。</p><ul><li><strong>php-cli</strong>: PHP 的命令行界面。从命令行里测试 PHP 时非常有用。</li><li><strong>php-gd</strong>: PHP 的图像处理支持。</li><li><strong>php-bcmath</strong>: PHP 的数学支持。</li><li><strong>php-mcrypt</strong>: PHP 的加密算法支持 (例如 DES、Blowfish、CBC、 CFB、ECB ciphers 等)。</li><li><strong>php-xml</strong>: PHP 的 XML 解析和处理支持。</li><li><strong>php-dba</strong>: PHP 的数据抽象层支持。</li><li><strong>php-pecl-apc</strong>: PHP 加速器/缓存支持。</li></ul><p>安装时，要查看可用的 PHP 模块的完整列表的话，可以运行：</p><pre><code>$ sudo yum search php- (CentOS 7)
$ sudo yum --enablerepo=remi search php- (CentOS 6)
</code></pre><h4 id="启动-php-fpm" tabindex="-1">启动 PHP-FPM <a class="header-anchor" href="#启动-php-fpm" aria-label="Permalink to “启动 PHP-FPM”">​</a></h4><p>您需要启动 PHP-FPM ，然后把它放到自动启动服务列表。</p><p>在 CentOS 7 系统上:</p><pre><code>$ sudo systemctl start php-fpm
$ sudo systemctl enable php-fpm
</code></pre><p>在 CentOS 6 系统上:</p><pre><code>$ sudo chkconfig php-fpm on
$ sudo service php-fpm start 
</code></pre><h3 id="第四步-配置-lemp-组合包" tabindex="-1">第四步: 配置 LEMP 组合包 <a class="header-anchor" href="#第四步-配置-lemp-组合包" aria-label="Permalink to “第四步: 配置 LEMP 组合包”">​</a></h3><p>本教程的最后一步是调整 LEMP 组合包的配置。</p><h4 id="使-httpd-不可用" tabindex="-1">使 Httpd 不可用 <a class="header-anchor" href="#使-httpd-不可用" aria-label="Permalink to “使 Httpd 不可用”">​</a></h4><p>首先，让我们把早先随 PHP 包安装的 httpd 服务给禁用掉。</p><p>在 CentOS 7 系统上:</p><pre><code>$ sudo systemctl disable httpd
</code></pre><p>在 CentOS 6 系统上:</p><pre><code>$ sudo chkconfig httpd off 
</code></pre><h4 id="配置-nginx" tabindex="-1">配置 Nginx <a class="header-anchor" href="#配置-nginx" aria-label="Permalink to “配置 Nginx”">​</a></h4><p>接下来，让我们配置 nginx 虚拟主机，使得 nginx 可以通过 PHP-FPM 来处理 PHP 的任务。用文本编辑器打开 /etc/nginx/conf.d/default.conf ，然后按如下所示修改。</p><pre><code> $ sudo vi /etc/nginx/conf.d/default.conf 
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
</code></pre><p>nginx 的默认工作线程数（在 /etc/nginx/nginx.conf 文件中指定的）是 1，让我们也来调整一下这个数字。通常来说我们创建的工作线程数应该和 CPU 核数相同。要确信您的 CPU 的核数，请运行下面这命令：</p><pre><code>$ grep processor /proc/cpuinfo | wc -l
</code></pre><p>如果您的 CPU 是 4 核的，就如下所示修改 /etc/nginx/nginx.conf 文件。</p><pre><code>$ sudo vi /etc/nginx/nginx.conf 
</code></pre><hr><pre><code>worker_processes  4;
</code></pre><h4 id="配置-php" tabindex="-1">配置 PHP <a class="header-anchor" href="#配置-php" aria-label="Permalink to “配置 PHP”">​</a></h4><p>接下来，让我们对 PHP 的配置文件 /etc/php.ini 做自定义设置。更具体的就是在 /etc/php.ini 文件中增加以下两行。</p><pre><code>cgi.fix_pathinfo=0
date.timezone = &quot;PRC&quot;
</code></pre><p>为了安全起见，我们希望的是 PHP 解释器只是处理指定文件路径的文件任务，而不是预测搜索一些并不存在的文件任务。上面的第一行起的就是这个作用。（LCTT 译注：原文用的时区是“America/New York”，根据国内情况，应该用 PRC或 Asia 下的中国城市。）</p>`,38)),e("p",null,[n[10]||(n[10]=t("第二行定义的是 PHP 中日期/时间相关函数使用相关的默认时区。使用",-1)),r(p,{href:"http://ask.xmodulo.com/set-default-timezone-php.html"},{default:i(()=>[...n[9]||(n[9]=[t("本指南",-1)])]),_:1}),n[11]||(n[11]=t("，找出您所在的时区，并设置相应 ",-1)),n[12]||(n[12]=e("strong",null,"date.timezone 的值",-1)),n[13]||(n[13]=t("。",-1))]),n[37]||(n[37]=a(`<h4 id="测试-php" tabindex="-1">测试 PHP <a class="header-anchor" href="#测试-php" aria-label="Permalink to “测试 PHP”">​</a></h4><p>最后，让我们来测试下 nginx 是否能处理 PHP 页面。在测试之前，请确保重启 nginx 和 PHP-FPM。</p><p>在 CentOS 7 系统上:</p><pre><code>$ sudo systemctl restart nginx
$ sudo systemctl restart php-fpm 
</code></pre><p>在 CentOS 6 系统上:</p><pre><code>$ sudo service nginx restart
$ sudo service php-fpm restart 
</code></pre><p>创建一个叫名叫 test.php 的文件，然后写入如下内容，并放入 /var/www/html/ 目录。</p><pre><code>&lt;?php phpinfo(); ?&gt;
</code></pre>`,8)),e("p",null,[n[15]||(n[15]=t("打开浏览器，输入 ",-1)),r(p,{href:"http://xn--nginxIP-x68lueu844a/test.php"},{default:i(()=>[...n[14]||(n[14]=[t("http://nginx的IP地址/test.php",-1)])]),_:1}),n[16]||(n[16]=t(" 。",-1))]),n[38]||(n[38]=e("p",null,[e("img",{src:"https://farm6.staticflickr.com/5608/15647258715_9d7bcd8c73_z.jpg",alt:""})],-1)),n[39]||(n[39]=e("p",null,"如果您能看到如上所示的页面，说明设置的 LEMP 完全成功！",-1)),n[40]||(n[40]=e("hr",null,null,-1)),e("p",null,[n[18]||(n[18]=t("via: ",-1)),r(p,{href:"http://xmodulo.com/install-lemp-stack-centos.html"},{default:i(()=>[...n[17]||(n[17]=[t("http://xmodulo.com/install-lemp-stack-centos.html",-1)])]),_:1})]),e("p",null,[n[22]||(n[22]=t("作者：",-1)),r(p,{href:"http://xmodulo.com/author/nanni"},{default:i(()=>[...n[19]||(n[19]=[t("Dan Nanni",-1)])]),_:1}),n[23]||(n[23]=t(" 译者：",-1)),r(p,{href:"https://github.com/runningwater"},{default:i(()=>[...n[20]||(n[20]=[t("runningwater",-1)])]),_:1}),n[24]||(n[24]=t(" 校对：",-1)),r(p,{href:"https://github.com/wxy"},{default:i(()=>[...n[21]||(n[21]=[t("wxy",-1)])]),_:1})]),e("p",null,[n[27]||(n[27]=t("本文由 ",-1)),r(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[25]||(n[25]=[t("LCTT",-1)])]),_:1}),n[28]||(n[28]=t(" 原创翻译，",-1)),r(p,{href:"http://linux.cn/"},{default:i(()=>[...n[26]||(n[26]=[t("Linux中国",-1)])]),_:1}),n[29]||(n[29]=t(" 荣誉推出",-1))])])}const c=o(P,[["render",m]]);export{C as __pageData,c as default};
