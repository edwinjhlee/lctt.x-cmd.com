import{_ as l,a0 as p,w as i,s as d,I as a,x as e,a1 as o,A as n,ao as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"如何为你的平台部署一个公开的系统状态页 | LCTT x X-CMD","titleTemplate":false,"description":"如何为你的平台部署一个公开的系统状态页 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何为你的平台部署一个公开的系统状态页 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何为你的平台部署一个公开的系统状态页 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150826 How to set up a system status page of your infrastructure","title":"如何为你的平台部署一个公开的系统状态页","tag":"201509","desc":""},"relativePath":"201509/20150826 How to set up a system status page of your infrastructure.md","filePath":"[post].md"}'),c={name:"201509/20150826 How to set up a system status page of your infrastructure.md"};function h(u,t,m,g,f,b){const r=p("Link");return i(),d("div",null,[t[36]||(t[36]=a("h1",{id:"如何为你的平台部署一个公开的系统状态页",tabindex:"-1"},[e("如何为你的平台部署一个公开的系统状态页 "),a("a",{class:"header-anchor",href:"#如何为你的平台部署一个公开的系统状态页","aria-label":"Permalink to “如何为你的平台部署一个公开的系统状态页”"},"​")],-1)),t[37]||(t[37]=a("p",null,"如果你是一个系统管理员，负责关键的 IT 基础设置或公司的服务，你将明白有效的沟通在日常任务中的重要性。假设你的线上存储服务器故障了。你希望团队所有人达成共识你好尽快的解决问题。当你忙来忙去时，你不会想一半的人问你为什么他们不能访问他们的文档。当一个维护计划快到时间了你想在计划前提醒相关人员，这样避免了不必要的开销。",-1)),t[38]||(t[38]=a("p",null,"这一切的要求或多或少改进了你、你的团队、和你服务的用户之间沟通渠道。一个实现它的方法是维护一个集中的系统状态页面，报告和记录故障停机详情、进度更新和维护计划等。这样，在故障期间你避免了不必要的打扰，也可以提醒一些相关方，以及加入一些可选的状态更新。",-1)),a("p",null,[t[1]||(t[1]=e("有一个不错的",-1)),t[2]||(t[2]=a("strong",null,"开源, 自承载系统状态页解决方案",-1)),t[3]||(t[3]=e("叫做 ",-1)),o(r,{href:"https://cachethq.io/"},{default:n(()=>[...t[0]||(t[0]=[e("Cachet",-1)])]),_:1}),t[4]||(t[4]=e("。在这个教程，我将要描述如何用 Cachet 部署一个自承载系统状态页面。",-1))]),t[39]||(t[39]=s(`<h3 id="cachet-特性" tabindex="-1">Cachet 特性 <a class="header-anchor" href="#cachet-特性" aria-label="Permalink to “Cachet 特性”">​</a></h3><p>在详细的配置 Cachet 之前，让我简单的介绍一下它的主要特性。</p><ul><li><strong>全 JSON API</strong>：Cachet API 可以让你使用任意的外部程序或脚本（例如，uptime 脚本）连接到 Cachet 来自动报告突发事件或更新状态。</li><li><strong>认证</strong>：Cachet 支持基础认证和 JSON API 的 API 令牌，所以只有认证用户可以更新状态页面。</li><li><strong>衡量系统</strong>：这通常用来展现随着时间推移的自定义数据（例如，服务器负载或者响应时间）。</li><li><strong>通知</strong>：可选地，你可以给任一注册了状态页面的人发送突发事件的提示邮件。</li><li><strong>多语言</strong>：状态页被翻译为11种不同的语言。</li><li><strong>双因子认证</strong>：这允许你使用 Google 的双因子认证来提升 Cachet 管理账户的安全性。</li><li><strong>跨数据库支持</strong>：你可以选择 MySQL，SQLite，Redis，APC 和 PostgreSQL 作为后端存储。</li></ul><p>剩下的教程，我会说明如何在 Linux 上安装配置 Cachet。</p><h3 id="第一步-下载和安装-cachet" tabindex="-1">第一步：下载和安装 Cachet <a class="header-anchor" href="#第一步-下载和安装-cachet" aria-label="Permalink to “第一步：下载和安装 Cachet”">​</a></h3><p>Cachet 需要一个 web 服务器和一个后端数据库来运转。在这个教程中，我将使用 LAMP 架构。以下是一些特定发行版上安装 Cachet 和 LAMP 架构的指令。</p><h4 id="debian-ubuntu-或者-linux-mint" tabindex="-1">Debian，Ubuntu 或者 Linux Mint <a class="header-anchor" href="#debian-ubuntu-或者-linux-mint" aria-label="Permalink to “Debian，Ubuntu 或者 Linux Mint”">​</a></h4><pre><code>$ sudo apt-get install curl git apache2 mysql-server mysql-client php5 php5-mysql
$ sudo git clone https://github.com/cachethq/Cachet.git /var/www/cachet
$ cd /var/www/cachet
$ sudo git checkout v1.1.1
$ sudo chown -R www-data:www-data .
</code></pre>`,8)),a("p",null,[t[6]||(t[6]=e("在基于 Debian 的系统上设置 LAMP 架构的更多细节，参考这个",-1)),o(r,{href:"http://xmodulo.com/install-lamp-stack-ubuntu-server.html"},{default:n(()=>[...t[5]||(t[5]=[e("教程",-1)])]),_:1}),t[7]||(t[7]=e("。",-1))]),t[40]||(t[40]=a("h4",{id:"fedora-centos-或-rhel",tabindex:"-1"},[e("Fedora， CentOS 或 RHEL "),a("a",{class:"header-anchor",href:"#fedora-centos-或-rhel","aria-label":"Permalink to “Fedora， CentOS 或 RHEL”"},"​")],-1)),a("p",null,[t[9]||(t[9]=e("在基于 Red Hat 系统上，你首先需要",-1)),o(r,{href:"https://linux.cn/article-4192-1.html"},{default:n(()=>[...t[8]||(t[8]=[e("设置 REMI 软件库",-1)])]),_:1}),t[10]||(t[10]=e("（以满足 PHP 的版本需求）。然后执行下面命令。",-1))]),t[41]||(t[41]=a("pre",null,[a("code",null,`$ sudo yum install curl git httpd mariadb-server
$ sudo yum --enablerepo=remi-php56 install php php-mysql php-mbstring
$ sudo git clone https://github.com/cachethq/Cachet.git /var/www/cachet
$ cd /var/www/cachet
$ sudo git checkout v1.1.1
$ sudo chown -R apache:apache .
$ sudo firewall-cmd --permanent --zone=public --add-service=http
$ sudo firewall-cmd --reload
$ sudo systemctl enable httpd.service; sudo systemctl start httpd.service
$ sudo systemctl enable mariadb.service; sudo systemctl start mariadb.service
`)],-1)),a("p",null,[t[12]||(t[12]=e("在基于 Red Hat 系统上设置 LAMP 的更多细节，参考这个",-1)),o(r,{href:"https://linux.cn/article-5789-1.html"},{default:n(()=>[...t[11]||(t[11]=[e("教程",-1)])]),_:1}),t[13]||(t[13]=e("。",-1))]),t[42]||(t[42]=s(`<h3 id="配置-cachet-的后端数据库" tabindex="-1">配置 Cachet 的后端数据库### <a class="header-anchor" href="#配置-cachet-的后端数据库" aria-label="Permalink to “配置 Cachet 的后端数据库###”">​</a></h3><p>下一步是配置后端数据库。</p><p>登录到 MySQL/MariaDB 服务，然后创建一个空的数据库称为‘cachet’。</p><pre><code>$ sudo mysql -uroot -p
</code></pre><hr><pre><code>mysql&gt; create database cachet;
mysql&gt; quit
</code></pre><p>现在用一个示例配置文件创建一个 Cachet 配置文件。</p><pre><code>$ cd /var/www/cachet
$ sudo mv .env.example .env
</code></pre><p>在 .env 文件里，填写你自己设置的数据库信息（例如，DB_*）。其他的字段先不改变。</p><pre><code>APP_ENV=production
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
</code></pre><h3 id="第三步-安装-php-依赖和执行数据库迁移" tabindex="-1">第三步：安装 PHP 依赖和执行数据库迁移 <a class="header-anchor" href="#第三步-安装-php-依赖和执行数据库迁移" aria-label="Permalink to “第三步：安装 PHP 依赖和执行数据库迁移”">​</a></h3><p>下面，我们将要安装必要的PHP依赖包。我们会使用 composer 来安装。如果你的系统还没有安装 composer，先安装它：</p><pre><code>$ curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
</code></pre><p>现在开始用 composer 安装 PHP 依赖包。</p><pre><code>$ cd /var/www/cachet
$ sudo composer install --no-dev -o
</code></pre><p>下面执行一次性的数据库迁移。这一步会在我们之前创建的数据库里面创建那些所需的表。</p><pre><code>$ sudo php artisan migrate
</code></pre><p>假设在 /var/www/cachet/.env 的数据库配置无误，数据库迁移应该像下面显示一样成功完成。</p><p><img src="https://farm6.staticflickr.com/5814/20235620184_54048676b0_c.jpg" alt=""></p><p>下面，创建一个密钥，它将用来加密进入 Cachet 的数据。</p><pre><code>$ sudo php artisan key:generate
$ sudo php artisan config:cache
</code></pre><p><img src="https://farm6.staticflickr.com/5717/20831952096_7105c9fdc7_c.jpg" alt=""></p><p>生成的应用密钥将自动添加到你的 .env 文件 APP_KEY 变量中。你不需要自己编辑 .env。</p><h3 id="第四步-配置-apache-http-服务" tabindex="-1">第四步：配置 Apache HTTP 服务 <a class="header-anchor" href="#第四步-配置-apache-http-服务" aria-label="Permalink to “第四步：配置 Apache HTTP 服务”">​</a></h3>`,24)),a("p",null,[t[15]||(t[15]=e("现在到了配置运行 Cachet 的 web 服务的时候了。我们使用 Apache HTTP 服务器，为 Cachet 创建一个新的",-1)),o(r,{href:"http://xmodulo.com/configure-virtual-hosts-apache-http-server.html"},{default:n(()=>[...t[14]||(t[14]=[e("虚拟主机",-1)])]),_:1}),t[16]||(t[16]=e("，如下：",-1))]),t[43]||(t[43]=s(`<h4 id="debian-ubuntu-或-linux-mint" tabindex="-1">Debian，Ubuntu 或 Linux Mint <a class="header-anchor" href="#debian-ubuntu-或-linux-mint" aria-label="Permalink to “Debian，Ubuntu 或 Linux Mint”">​</a></h4><pre><code>$ sudo vi /etc/apache2/sites-available/cachet.conf
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
</code></pre><p>启用新虚拟主机和 mod_rewrite：</p><pre><code>$ sudo a2ensite cachet.conf
$ sudo a2enmod rewrite
$ sudo service apache2 restart
</code></pre><h4 id="fedora-centos-或-rhel-1" tabindex="-1">Fedora， CentOS 或 RHEL <a class="header-anchor" href="#fedora-centos-或-rhel-1" aria-label="Permalink to “Fedora， CentOS 或 RHEL”">​</a></h4><p>在基于 Red Hat 系统上，创建一个虚拟主机文件，如下：</p><pre><code>$ sudo vi /etc/httpd/conf.d/cachet.conf
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
</code></pre><p>现在重载 Apache 配置：</p><pre><code>$ sudo systemctl reload httpd.service
</code></pre><h3 id="第五步-配置-etc-hosts-来测试-cachet" tabindex="-1">第五步：配置 /etc/hosts 来测试 Cachet <a class="header-anchor" href="#第五步-配置-etc-hosts-来测试-cachet" aria-label="Permalink to “第五步：配置 /etc/hosts 来测试 Cachet”">​</a></h3><p>这时候，初始的 Cachet 状态页面应该启动运行了，现在测试一下。</p><p>由于 Cachet 被配置为Apache HTTP 服务的虚拟主机，我们需要调整你的客户机的 /etc/hosts 来访问他。你将从这个客户端电脑访问 Cachet 页面。（LCTT 译注：如果你给了这个页面一个正式的主机地址，则不需要这一步。）</p><p>打开 /etc/hosts，加入如下行：</p><pre><code>$ sudo vi /etc/hosts
</code></pre><hr><pre><code>&lt;cachet 服务器的 IP 地址&gt;    cachethost
</code></pre><p>上面名为“cachethost”必须匹配 Cachet 的 Apache 虚拟主机文件的 ServerName。</p><h3 id="测试-cachet-状态页面" tabindex="-1">测试 Cachet 状态页面 <a class="header-anchor" href="#测试-cachet-状态页面" aria-label="Permalink to “测试 Cachet 状态页面”">​</a></h3>`,22)),a("p",null,[t[18]||(t[18]=e("现在你准备好访问 Cachet 状态页面。在你浏览器地址栏输入 ",-1)),o(r,{href:"http://cachethost"},{default:n(()=>[...t[17]||(t[17]=[e("http://cachethost",-1)])]),_:1}),t[19]||(t[19]=e("。你将被转到如下的 Cachet 状态页的初始化设置页面。",-1))]),t[44]||(t[44]=s('<p><img src="https://farm6.staticflickr.com/5745/20858228815_405fce1301_c.jpg" alt=""></p><p>选择 cache/session 驱动。这里 cache 和 session 驱动两个都选“File”。</p><p>下一步，输入关于状态页面的基本信息（例如，站点名称、域名、时区和语言），以及管理员认证账户。</p><p><img src="https://farm1.staticflickr.com/611/20237229693_c22014e4fd_c.jpg" alt=""></p><p><img src="https://farm6.staticflickr.com/5707/20858228875_b056c9e1b4_c.jpg" alt=""></p><p><img src="https://farm6.staticflickr.com/5653/20671482009_8629572886_c.jpg" alt=""></p><p>你的状态页初始化就要完成了。</p><p><img src="https://farm6.staticflickr.com/5692/20237229793_f6a48f379a_c.jpg" alt=""></p><p>继续创建组件（你的系统单元）、事件或者任意你要做的维护计划。</p><p>例如，增加一个组件：</p><p><img src="https://farm6.staticflickr.com/5672/20848624752_9d2e0a07be_c.jpg" alt=""></p><p>增加一个维护计划：</p><p>公共 Cachet 状态页就像这样：</p><p><img src="https://farm1.staticflickr.com/577/20848624842_df68c0026d_c.jpg" alt=""></p><p>集成了 SMTP，你可以在状态更新时发送邮件给订阅者。并且你可以使用 CSS 和 markdown 格式来完全自定义布局和状态页面。</p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3>',16)),a("p",null,[t[21]||(t[21]=e("Cachet 是一个相当易于使用，自托管的状态页面软件。Cachet 一个高级特性是支持全 JSON API。使用它的 RESTful API，Cachet 可以轻松连接单独的监控后端（例如，",-1)),o(r,{href:"http://xmodulo.com/monitor-common-services-nagios.html"},{default:n(()=>[...t[20]||(t[20]=[e("Nagios",-1)])]),_:1}),t[22]||(t[22]=e("），然后回馈给 Cachet 事件报告并自动更新状态。比起手工管理一个状态页它更快和有效率。",-1))]),t[45]||(t[45]=s(`<p>最后一句，我喜欢提及一个事。用 Cachet 设置一个漂亮的状态页面是很简单的，但要将这个软件用好并不像安装它那么容易。你需要完全保障所有 IT 团队习惯准确及时的更新状态页，从而建立公共信息的准确性。同时，你需要教用户去查看状态页面。最后，如果没有很好的填充数据，部署状态页面就没有意义，并且/或者没有一个人查看它。记住这个，尤其是当你考虑在你的工作环境中部署 Cachet 时。</p><h3 id="故障排查" tabindex="-1">故障排查 <a class="header-anchor" href="#故障排查" aria-label="Permalink to “故障排查”">​</a></h3><p>补充，万一你安装 Cachet 时遇到问题，这有一些有用的故障排查的技巧。</p><ol><li><p>Cachet 页面没有加载任何东西，并且你看到如下报错。</p><pre><code> production.ERROR: exception &#39;RuntimeException&#39; with message &#39;No supported encrypter found. The cipher and / or key length are invalid.&#39; in /var/www/cachet/bootstrap/cache/compiled.php:6695
</code></pre><p><strong>解决方案</strong>：确保你创建了一个应用密钥，以及明确配置缓存如下所述。</p><pre><code> $ cd /path/to/cachet
 $ sudo php artisan key:generate
 $ sudo php artisan config:cache
</code></pre></li><li><p>调用 composer 命令时有如下报错。</p><pre><code> - danielstjules/stringy 1.10.0 requires ext-mbstring * -the requested PHP extension mbstring is missing from your system.
 - laravel/framework v5.1.8 requires ext-mbstring * -the requested PHP extension mbstring is missing from your system.
 - league/commonmark 0.10.0 requires ext-mbstring * -the requested PHP extension mbstring is missing from your system.
</code></pre><p><strong>解决方案</strong>：确保在你的系统上安装了必要的 PHP 扩展 mbstring ，并且兼容你的 PHP 版本。在基于 Red Hat 的系统上，由于我们从 REMI-56 库安装PHP，所以要从同一个库安装扩展。</p><pre><code> $ sudo yum --enablerepo=remi-php56 install php-mbstring
</code></pre></li><li><p>你访问 Cachet 状态页面时得到一个白屏。HTTP 日志显示如下错误。</p><pre><code> PHP Fatal error:  Uncaught exception &#39;UnexpectedValueException&#39; with message &#39;The stream or file &quot;/var/www/cachet/storage/logs/laravel-2015-08-21.log&quot; could not be opened: failed to open stream: Permission denied&#39; in /var/www/cachet/bootstrap/cache/compiled.php:12851
</code></pre><p><strong>解决方案</strong>：尝试如下命令。</p><pre><code> $ cd /var/www/cachet
 $ sudo php artisan cache:clear
 $ sudo chmod -R 777 storage
 $ sudo composer dump-autoload
</code></pre><p>如果上面的方法不起作用，试试禁止SELinux：</p><pre><code> $ sudo setenforce 0 
</code></pre></li></ol><hr>`,5)),a("p",null,[t[24]||(t[24]=e("via: ",-1)),o(r,{href:"http://xmodulo.com/setup-system-status-page.html"},{default:n(()=>[...t[23]||(t[23]=[e("http://xmodulo.com/setup-system-status-page.html",-1)])]),_:1})]),a("p",null,[t[28]||(t[28]=e("作者：",-1)),o(r,{href:"http://xmodulo.com/author/nanni"},{default:n(()=>[...t[25]||(t[25]=[e("Dan Nanni",-1)])]),_:1}),t[29]||(t[29]=e(" 译者：",-1)),o(r,{href:"https://github.com/wyangsun"},{default:n(()=>[...t[26]||(t[26]=[e("wyangsun",-1)])]),_:1}),t[30]||(t[30]=e(" 校对：",-1)),o(r,{href:"https://github.com/wxy"},{default:n(()=>[...t[27]||(t[27]=[e("wxy",-1)])]),_:1})]),a("p",null,[t[33]||(t[33]=e("本文由 ",-1)),o(r,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...t[31]||(t[31]=[e("LCTT",-1)])]),_:1}),t[34]||(t[34]=e(" 原创翻译，",-1)),o(r,{href:"https://linux.cn/"},{default:n(()=>[...t[32]||(t[32]=[e("Linux中国",-1)])]),_:1}),t[35]||(t[35]=e(" 荣誉推出",-1))])])}const T=l(c,[["render",h]]);export{C as __pageData,T as default};
