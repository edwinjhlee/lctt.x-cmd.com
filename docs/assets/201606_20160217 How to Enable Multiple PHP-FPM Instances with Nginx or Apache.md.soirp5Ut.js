import{_ as l,a0 as a,w as s,s as r,ao as P,I as o,x as n,a1 as t,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"如何启用 Nginx/Apache 的 PHP-FPM 多实例 | LCTT x X-CMD","titleTemplate":false,"description":"如何启用 Nginx/Apache 的 PHP-FPM 多实例 | LCTT (201606) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何启用 Nginx/Apache 的 PHP-FPM 多实例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何启用 Nginx/Apache 的 PHP-FPM 多实例 | LCTT (201606) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201606/20160217 How to Enable Multiple PHP-FPM Instances with Nginx or Apache","title":"如何启用 Nginx/Apache 的 PHP-FPM 多实例","tag":"201606","desc":""},"relativePath":"201606/20160217 How to Enable Multiple PHP-FPM Instances with Nginx or Apache.md","filePath":"[post].md"}'),h={name:"201606/20160217 How to Enable Multiple PHP-FPM Instances with Nginx or Apache.md"};function g(x,e,m,d,c,u){const p=a("Link");return s(),r("div",null,[e[13]||(e[13]=P(`<h1 id="如何启用-nginx-apache-的-php-fpm-多实例" tabindex="-1">如何启用 Nginx/Apache 的 PHP-FPM 多实例 <a class="header-anchor" href="#如何启用-nginx-apache-的-php-fpm-多实例" aria-label="Permalink to “如何启用 Nginx/Apache 的 PHP-FPM 多实例”">​</a></h1><p>PHP-FPM 作为 FastCGI 进程管理器而广为熟知，它是 PHP FastCGI 实现的改进，带有更为有用的功能，用于处理高负载的服务器和网站。下面列出其中一些功能：</p><h3 id="新功能" tabindex="-1">新功能 <a class="header-anchor" href="#新功能" aria-label="Permalink to “新功能”">​</a></h3><ul><li>拥有具有优雅（graceful）启动/停止选项的高级进程管理能力。</li><li>可以通过不同的用户身份/组身份来以监听多个端口以及使用多个PHP配置。</li><li>错误日志记录。</li><li>支持上传加速。</li><li>特别用于在处理一些耗时任务时结束请求和清空所有数据的功能。</li><li>同时支持动态和静态的子进程重生。</li><li>支持IP地址限制。</li></ul><p>在本文中，我将要讨论的是，在运行 CPanel 11.52 及 EA3 （EasyApache）的 CentOS 7 服务器上，于 Nginx 和 Apache 之上安装 PHP-FPM，以及如何来通过 CPanel 管理这些安装好的多个 PHP-FPM 实例。</p><p>在我们开始安装前， 先看看安装的先决条件。</p><h3 id="先决条件" tabindex="-1">先决条件 <a class="header-anchor" href="#先决条件" aria-label="Permalink to “先决条件”">​</a></h3><ol><li>启用 Mod_proxy_fcgi 模块</li><li>启用 MPM_Event</li></ol><p>由于我们要将 PHP-FPM 安装到一台 EA3 服务器，我们需要运行 EasyApache 来编译 Apache 以启用这些模块。</p><p>你们可以参考我以前写的，关于如何在 Apache 服务器上安装 Nginx 作为反向代理的文档来了解 Nginx 的安装。</p><p>这里，我将再次简述那些安装步骤。具体细节，你可以参考我之前写的<strong>（如何在 CentOS 7/CPanel 服务器上配置 Nginx 反向代理）</strong>一文。</p><ul><li>步骤 1：安装 Epel 仓库</li><li>步骤 2：安装 nDeploy RPM 仓库，这是此次安装中最为<strong>重要</strong>的步骤。</li><li>步骤 3：使用 yum 从 nDeploy 仓库安装 nDeploy 和 Nginx 插件。</li><li>步骤 4：启用/配置 Nginx 为反向代理。</li></ul><p>完成这些步骤后，下面为服务器中所有可用 PHP 版本安装 PHP-FPM 包，EA3 使用 remi 仓库来安装这些包。你可以运行这个 nDeploy 脚本来下载所有的包。</p><pre><code>root@server1 [~]# /opt/nDeploy/scripts/easy_php_setup.sh
Loaded plugins: fastestmirror, tsflags, universal-hooks
EA4 | 2.9 kB 00:00:00
base | 3.6 kB 00:00:00
epel/x86_64/metalink | 9.7 kB 00:00:00
epel | 4.3 kB 00:00:00
extras | 3.4 kB 00:00:00
updates | 3.4 kB 00:00:00
(1/2): epel/x86_64/updateinfo | 460 kB 00:00:00
(2/2): epel/x86_64/primary_db
</code></pre><p>运行该脚本将为 PHP 54，PHP 55，PHP 56 和 PHP 70 安装所有这些 FPM 包。</p><pre><code>Installed Packages
php54-php-fpm.x86_64 5.4.45-3.el7.remi @remi
php55-php-fpm.x86_64 5.5.31-1.el7.remi @remi
php56-php-fpm.x86_64 5.6.17-1.el7.remi @remi
php70-php-fpm.x86_64 7.0.2-1.el7.remi @remi
</code></pre><p>在以上安装完成后，你需要为 Apache 启用 PHP-FPM SAPI。你可以运行下面这个脚本来启用 PHP-FPM 实例。</p><pre><code>root@server1 [~]# /opt/nDeploy/scripts/apache_php-fpm_setup.sh enable
mod_proxy_fcgi.c
Please choose one default PHP version from the list below
PHP70
PHP56
PHP54
PHP55
Provide the exact desired version string here and press ENTER: PHP54
ConfGen:: lxblogger
ConfGen:: blogr
ConfGen:: saheetha
ConfGen:: satest
which: no cagefsctl in (/usr/local/jdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin:/usr/X11R6/bin:/root/bin)
info [rebuildhttpdconf] Missing owner for domain server1.centos7-test.com, force lookup to root
Built /usr/local/apache/conf/httpd.conf OK
Waiting for “httpd” to restart gracefully …waiting for “httpd” to initialize ……
…finished.
</code></pre><p>它会问你需要运行哪个 PHP 版本作为服务器默认版本，你可以输入那些细节内容，然后继续配置并为现存的域名生成虚拟主机文件。</p><p>我选择了 PHP 54 作为我服务器上的默认 PHP-FPM 版本。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/confirm-php-fpm-1024x525.png" alt="confirm-php-fpm"></p><p>虽然服务器配置了 PHP-FPM 54，但是我们可以通过 CPanel 为各个独立的域名修改 PHP-FPM 实例。</p><p>下面我将通过一些截图来为你们说明一下，怎样通过 CPanel 为各个独立域修改 PHP-FPM 实例。</p><p>安装了 Nginx 插件后，你的域名的 CPanel 就会有一个 Nginx Webstack 图标，你可以点击该图标来配置你的 Web 服务器。我已经登录进了我其中的一个 CPanel 来配置相应的 Web 服务器。</p><p>请看这些截图。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/nginx-webstack.png" alt="nginx webstack"></p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/nginxicon1-1024x253.png" alt="nginxicon1"></p><p>现在，你可以根据需要为选中的主域配置 web 服务器（这里，我已经选择了主域 saheetha.com）。我已经继续通过自动化配置选项来进行了，因为我不需要添加任何手动设置。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/nginx_auto_proxy-1024x408.png" alt="nginx_auto_proxy"></p><p>当 Nginx 配置完后，你可以在这里为你的域名选择 PHP-FPM 实例。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/php-fpm1-1024x408.png" alt="php-fpm1"></p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/php54-1024x169.png" alt="php54"></p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/php55.png" alt="php55"></p><p>就像你在截图中所看到的，我服务器上的默认 PHP-FPM 是<strong>PHP 54</strong>，而我正要将我的域名的 PHP-FPM 实例单独修改成 <strong>PHP 55</strong>。当你为你的域修改 PHP-FPM 后，你可以通过访问 <strong>phpinfo</strong> 页面来确认。</p><p>谢谢你们参考本文，我相信这篇文章会给你提供不少信息和帮助。我会为你们推荐关于这个内容的有价值的评论 😃。</p><hr>`,36)),o("p",null,[e[1]||(e[1]=n("via: ",-1)),t(p,{href:"http://linoxide.com/linux-how-to/enable-multiple-php-fpm-instances-nginx-apache/"},{default:i(()=>[...e[0]||(e[0]=[n("http://linoxide.com/linux-how-to/enable-multiple-php-fpm-instances-nginx-apache/",-1)])]),_:1})]),o("p",null,[e[5]||(e[5]=n("作者：",-1)),t(p,{href:"http://linoxide.com/author/saheethas/"},{default:i(()=>[...e[2]||(e[2]=[n("Saheetha Shameer",-1)])]),_:1}),e[6]||(e[6]=n(" 译者：",-1)),t(p,{href:"https://github.com/GOLinux"},{default:i(()=>[...e[3]||(e[3]=[n("GOLinux",-1)])]),_:1}),e[7]||(e[7]=n(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:i(()=>[...e[4]||(e[4]=[n("wxy",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:i(()=>[...e[9]||(e[9]=[n("Linux中国",-1)])]),_:1}),e[12]||(e[12]=n(" 荣誉推出",-1))])])}const M=l(h,[["render",g]]);export{b as __pageData,M as default};
