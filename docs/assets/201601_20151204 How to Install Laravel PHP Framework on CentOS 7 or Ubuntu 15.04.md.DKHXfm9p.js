import{_ as p,a0 as o,w as s,s as i,ao as d,I as l,x as a,a1 as r,A as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const L=JSON.parse('{"title":"如何在 CentOS 7 / Ubuntu 15.04 上安装 PHP 框架 Laravel | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7 / Ubuntu 15.04 上安装 PHP 框架 Laravel | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7 / Ubuntu 15.04 上安装 PHP 框架 Laravel | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7 / Ubuntu 15.04 上安装 PHP 框架 Laravel | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151204 How to Install Laravel PHP Framework on CentOS 7 or Ubuntu 15.04","title":"如何在 CentOS 7 / Ubuntu 15.04 上安装 PHP 框架 Laravel","tag":"201601","desc":""},"relativePath":"201601/20151204 How to Install Laravel PHP Framework on CentOS 7 or Ubuntu 15.04.md","filePath":"[post].md"}'),h={name:"201601/20151204 How to Install Laravel PHP Framework on CentOS 7 or Ubuntu 15.04.md"};function c(u,e,m,b,v,P){const t=o("Link");return s(),i("div",null,[e[13]||(e[13]=d(`<h1 id="如何在-centos-7-ubuntu-15-04-上安装-php-框架-laravel" tabindex="-1">如何在 CentOS 7 / Ubuntu 15.04 上安装 PHP 框架 Laravel <a class="header-anchor" href="#如何在-centos-7-ubuntu-15-04-上安装-php-框架-laravel" aria-label="Permalink to “如何在 CentOS 7 / Ubuntu 15.04 上安装 PHP 框架 Laravel”">​</a></h1><p>大家好，这篇文章将要讲述如何在 CentOS 7 / Ubuntu 15.04 上安装 Laravel。如果你是一个 PHP Web 的开发者，你并不需要考虑如何在琳琅满目的现代 PHP 框架中选择，Laravel 是最轻松启动和运行的，它省时省力，能让你享受到 web 开发的乐趣。Laravel 信奉着一个普世的开发哲学，通过简单的指导创建出可维护代码具有最高优先级，你将保持着高速的开发效率，能够随时毫不畏惧更改你的代码来改进现有功能。</p><p>Laravel 安装并不繁琐，你只要跟着本文章一步步操作就能在 CentOS 7 或者 Ubuntu 15 服务器上安装。</p><h3 id="_1-服务器要求" tabindex="-1">1) 服务器要求 <a class="header-anchor" href="#_1-服务器要求" aria-label="Permalink to “1) 服务器要求”">​</a></h3><p>在安装 Laravel 前需要安装一些它的依赖前提条件，主要是一些基本的参数调整，比如升级系统到最新版本，sudo 权限和安装依赖包。</p><p>当你连接到你的服务器时，请确保你能通以下命令能成功的使用 EPEL 仓库并且升级你的服务器。</p><h4 id="centos-7" tabindex="-1">CentOS-7 <a class="header-anchor" href="#centos-7" aria-label="Permalink to “CentOS-7”">​</a></h4><pre><code># yum install epel-release

# rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
# rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm

# yum update
</code></pre><h4 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-label="Permalink to “Ubuntu”">​</a></h4><pre><code># apt-get install python-software-properties
# add-apt-repository ppa:ondrej/php5

# apt-get update

# apt-get install -y php5 mcrypt php5-mcrypt php5-gd
</code></pre><h3 id="_2-防火墙安装" tabindex="-1">2) 防火墙安装 <a class="header-anchor" href="#_2-防火墙安装" aria-label="Permalink to “2) 防火墙安装”">​</a></h3><p>系统防火墙和 SELinux 设置对于用于产品应用安全来说非常重要，当你使用测试服务器的时候可以关闭防火墙，用以下命令行设置 SELinux 成宽容模式（permissive）来保证安装程序不受它们的影响。</p><pre><code># setenforce 0
</code></pre><h3 id="_3-apache-mariadb-php-安装" tabindex="-1">3) Apache, MariaDB, PHP 安装 <a class="header-anchor" href="#_3-apache-mariadb-php-安装" aria-label="Permalink to “3) Apache, MariaDB, PHP 安装”">​</a></h3><p>Laravel 安装程序需要完成安装 LAMP 整个环境，需要额外安装 OpenSSL、PDO，Mbstring 和 Tokenizer 等 PHP 扩展。如果 LAMP 已经运行在你的服务器上你可以跳过这一步，直接确认一些必要的 PHP 插件是否安装好。</p><p>要安装完整 AMP 你需要在自己的服务器上运行以下命令。</p><h4 id="centos" tabindex="-1">CentOS <a class="header-anchor" href="#centos" aria-label="Permalink to “CentOS”">​</a></h4><pre><code># yum install httpd mariadb-server php56w php56w-mysql php56w-mcrypt php56w-dom php56w-mbstring
</code></pre><p>要在 CentOS 7 上实现 MySQL / Mariadb 服务开机自动启动，你需要运行以下命令。</p><pre><code># systemctl start httpd
# systemctl enable httpd

#systemctl start mysqld
#systemctl enable mysqld
</code></pre><p>在启动 MariaDB 服务之后，你需要运行以下命令配置一个足够安全的密码。</p><pre><code>#mysql_secure_installation
</code></pre><h4 id="ubuntu-1" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu-1" aria-label="Permalink to “Ubuntu”">​</a></h4><pre><code># apt-get install mysql-server apache2 libapache2-mod-php5 php5-mysql
</code></pre><h3 id="_4-安装-composer" tabindex="-1">4) 安装 Composer <a class="header-anchor" href="#_4-安装-composer" aria-label="Permalink to “4) 安装 Composer”">​</a></h3><p>在我们安装 Laravel 前，先让我们开始安装 composer。安装 composer 是安装 Laravel 的最重要步骤之一，因为 composer 能帮我们安装 Laravel 的各种依赖。</p><h4 id="centos-ubuntu" tabindex="-1">CentOS/Ubuntu <a class="header-anchor" href="#centos-ubuntu" aria-label="Permalink to “CentOS/Ubuntu”">​</a></h4><p>在 CentOS / Ubuntu 下运行以下命令来配置 composer 。</p><pre><code># curl -sS https://getcomposer.org/installer | php
# mv composer.phar /usr/local/bin/composer
# chmod +x /usr/local/bin/composer
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/14.png" alt="composer installation"></p><h3 id="_5-安装-laravel" tabindex="-1">5) 安装 Laravel <a class="header-anchor" href="#_5-安装-laravel" aria-label="Permalink to “5) 安装 Laravel”">​</a></h3><p>我们可以运行以下命令从 github 上下载 Laravel 的安装包。</p><pre><code># wget https://github.com/laravel/laravel/archive/develop.zip
</code></pre><p>运行以下命令解压安装包并且移动 document 的根目录。</p><pre><code># unzip develop.zip

# mv laravel-develop /var/www/
</code></pre><p>现在使用 compose 命令来安装目录下所有 Laravel 所需要的依赖。</p><pre><code># cd /var/www/laravel-develop/
# composer install
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/25.png" alt="compose laravel"></p><h3 id="_6-密钥" tabindex="-1">6) 密钥 <a class="header-anchor" href="#_6-密钥" aria-label="Permalink to “6) 密钥”">​</a></h3><p>为了加密服务器，我们使用以下命令来生成一个加密后的 32 位的密钥。</p><pre><code># php artisan key:generate

Application key [Lf54qK56s3qDh0ywgf9JdRxO2N0oV9qI] set successfully
</code></pre><p>现在把这个密钥放到 &#39;app.php&#39; 文件，如以下所示。</p><pre><code># vim /var/www/laravel-develop/config/app.php
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/45.png" alt="Key encryption"></p><h3 id="_7-虚拟主机和所属用户" tabindex="-1">7) 虚拟主机和所属用户 <a class="header-anchor" href="#_7-虚拟主机和所属用户" aria-label="Permalink to “7) 虚拟主机和所属用户”">​</a></h3><p>在 composer 安装好后，分配 document 根目录的权限和所属用户，如下所示。</p><pre><code># chmod 775 /var/www/laravel-develop/app/storage

# chown -R apache:apache /var/www/laravel-develop
</code></pre><p>用任意一款编辑器打开 apache 服务器的默认配置文件，在文件最后加上虚拟主机配置。</p><pre><code># vim /etc/httpd/conf/httpd.conf
</code></pre><hr><pre><code>ServerName laravel-develop
DocumentRoot /var/www/laravel/public

start Directory /var/www/laravel
AllowOverride All
Directory close
</code></pre><p>现在我们用以下命令重启 apache 服务器，打开浏览器查看 localhost 页面。</p><h4 id="centos-1" tabindex="-1">CentOS <a class="header-anchor" href="#centos-1" aria-label="Permalink to “CentOS”">​</a></h4><pre><code># systemctl restart httpd
</code></pre><h4 id="ubuntu-2" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu-2" aria-label="Permalink to “Ubuntu”">​</a></h4><pre><code># service apache2 restart
</code></pre><h3 id="_8-laravel-5-网络访问" tabindex="-1">8) Laravel 5 网络访问 <a class="header-anchor" href="#_8-laravel-5-网络访问" aria-label="Permalink to “8) Laravel 5 网络访问”">​</a></h3><p>打开浏览器然后输入你配置的 IP 地址或者完整域名（Fully qualified domain name）你将会看到 Laravel 5 的默认页面。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/35.png" alt="Laravel Default"></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>Laravel 框架对于开发网页应用来说是一个绝好的的工具。所以，看了这篇文章你将学会在 Ubuntu 15 和 CentOS 7 上安装 Laravel， 之后你就可以使用这个超棒的 PHP 框架提供的各种功能和舒适便捷性来进行你的开发工作。</p><p>如果您有什么意见或者建议请在以下评论区中回复，我们将根据您宝贵的反馈来使我们的文章更加浅显易懂。</p><hr>`,63)),l("p",null,[e[1]||(e[1]=a("via: ",-1)),r(t,{href:"http://linoxide.com/linux-how-to/install-laravel-php-centos-7-ubuntu-15-04/"},{default:n(()=>[...e[0]||(e[0]=[a("http://linoxide.com/linux-how-to/install-laravel-php-centos-7-ubuntu-15-04/",-1)])]),_:1})]),l("p",null,[e[5]||(e[5]=a("作者：",-1)),r(t,{href:"http://linoxide.com/author/kashifs/"},{default:n(()=>[...e[2]||(e[2]=[a("Kashif",-1)])]),_:1}),e[6]||(e[6]=a(" 译者：",-1)),r(t,{href:"https://github.com/NearTan"},{default:n(()=>[...e[3]||(e[3]=[a("NearTan",-1)])]),_:1}),e[7]||(e[7]=a(" 校对：",-1)),r(t,{href:"https://github.com/carolinewuyan"},{default:n(()=>[...e[4]||(e[4]=[a("Caroline",-1)])]),_:1})]),l("p",null,[e[10]||(e[10]=a("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[8]||(e[8]=[a("LCTT",-1)])]),_:1}),e[11]||(e[11]=a(" 原创编译，",-1)),r(t,{href:"https://linux.cn/"},{default:n(()=>[...e[9]||(e[9]=[a("Linux中国",-1)])]),_:1}),e[12]||(e[12]=a(" 荣誉推出",-1))])])}const C=p(h,[["render",c]]);export{L as __pageData,C as default};
