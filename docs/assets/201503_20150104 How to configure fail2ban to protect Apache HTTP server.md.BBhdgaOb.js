import{_ as o,a0 as p,w as i,s,I as t,x as e,a1 as l,A as r,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const A=JSON.parse('{"title":"如何配置 fail2ban 来保护 Apache 服务器 | LCTT x X-CMD","titleTemplate":false,"description":"如何配置 fail2ban 来保护 Apache 服务器 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何配置 fail2ban 来保护 Apache 服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何配置 fail2ban 来保护 Apache 服务器 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150104 How to configure fail2ban to protect Apache HTTP server","title":"如何配置 fail2ban 来保护 Apache 服务器","tag":"201503","desc":""},"relativePath":"201503/20150104 How to configure fail2ban to protect Apache HTTP server.md","filePath":"[post].md"}'),f={name:"201503/20150104 How to configure fail2ban to protect Apache HTTP server.md"};function h(b,a,c,u,m,g){const n=p("Link");return i(),s("div",null,[a[22]||(a[22]=t("h1",{id:"如何配置-fail2ban-来保护-apache-服务器",tabindex:"-1"},[e("如何配置 fail2ban 来保护 Apache 服务器 "),t("a",{class:"header-anchor",href:"#如何配置-fail2ban-来保护-apache-服务器","aria-label":"Permalink to “如何配置 fail2ban 来保护 Apache 服务器”"},"​")],-1)),a[23]||(a[23]=t("p",null,"生产环境中的 Apache 服务器可能会受到不同的攻击。攻击者或许试图通过暴力攻击或者执行恶意脚本来获取未经授权或者禁止访问的目录。一些恶意爬虫或许会扫描你网站下的各种安全漏洞，或者通过收集email地址和web表单来发送垃圾邮件。",-1)),a[24]||(a[24]=t("p",null,[e("Apache服务器具有全面的日志功能，可以捕捉到各种攻击所反映的异常事件。然而，它还不能系统地解析具体的apache 日志并迅速地对潜在的攻击进行反应（比如，禁止/解禁IP地址）。这时候"),t("code",null,"fail2ban"),e("可以解救这一切，解放了系统管理员的工作。")],-1)),a[25]||(a[25]=t("p",null,[t("code",null,"fail2ban"),e("是一款入侵防御工具，可以基于系统日志检测不同的工具并且可以自动采取保护措施比如：通过"),t("code",null,"iptables"),e("禁止ip、通过 /etc/hosts.deny 阻止连接、或者通过邮件发送通知。fail2ban具有一系列预定义的“监狱”，它使用特定程序日志过滤器来检测通常的攻击。你也可以编写自定义的规则来检测来自任意程序的攻击。")],-1)),t("p",null,[a[1]||(a[1]=e("在本教程中，我会演示如何配置fail2ban来保护你的apache服务器。我假设你已经安装了apache和fail2ban。对于安装，请参考",-1)),l(n,{href:"http://linux.cn/article-5067-1.html"},{default:r(()=>[...a[0]||(a[0]=[e("另外一篇教程",-1)])]),_:1}),a[2]||(a[2]=e("。",-1))]),a[26]||(a[26]=t("h3",{id:"什么是-fail2ban-监狱",tabindex:"-1"},[e("什么是 Fail2ban 监狱 "),t("a",{class:"header-anchor",href:"#什么是-fail2ban-监狱","aria-label":"Permalink to “什么是 Fail2ban 监狱”"},"​")],-1)),t("p",null,[a[4]||(a[4]=e("让我们更深入地了解 fail2ban 监狱。监狱定义了具体的应用策略，它会为指定的程序触发一个保护措施。fail2ban在 /etc/fail2ban/jail.conf 下为一些流行程序如Apache、Dovecot、Lighttpd、MySQL、Postfix、",-1)),l(n,{href:"http://linux.cn/article-5067-1.html"},{default:r(()=>[...a[3]||(a[3]=[e("SSH",-1)])]),_:1}),a[5]||(a[5]=e(" 等预定义了一些监狱。每个监狱都通过特定的程序日志过滤器（在/etc/fail2ban/fileter.d 下面）来检测通常的攻击。让我看一个例子监狱：SSH监狱。",-1))]),a[27]||(a[27]=d(`<pre><code>[ssh]
enabled   = true
port      = ssh
filter    = sshd
logpath   = /var/log/auth.log
maxretry  = 6
banaction = iptables-multiport
</code></pre><p>SSH监狱的配置定义了这些参数：</p><ul><li><strong>[ssh]</strong>： 方括号内是监狱的名字。</li><li><strong>enabled</strong>：是否启用监狱</li><li><strong>port</strong>： 端口号(或者对应的服务名称)</li><li><strong>filter</strong>： 检测攻击的日志解析规则</li><li><strong>logpath</strong>： 所检测的日志文件</li><li><strong>maxretry</strong>： 最大失败次数</li><li><strong>banaction</strong>： 所进行的禁止操作</li></ul><p>定义在监狱配置中的任意参数都会覆盖<code>fail2ban-wide</code> 中相应的默认配置参数。相反，任何缺少的参数都会使用定义在[DEFAULT] 字段的默认值。</p><p>预定义的日志过滤器都放在/etc/fail2ban/filter.d，而可以采取的禁止操作放在 /etc/fail2ban/action.d。</p><p><img src="https://farm8.staticflickr.com/7538/16076581722_cbca3c1307_b.jpg" alt=""></p><p>如果你想要覆盖<code>fail2ban</code>的默认操作或者定义任何自定义监狱，你可以创建*/etc/fail2ban/jail.local**文件。本篇教程中，我会使用/etc/fail2ban/jail.local。</p><h3 id="启用预定义的apache监狱" tabindex="-1">启用预定义的apache监狱 <a class="header-anchor" href="#启用预定义的apache监狱" aria-label="Permalink to “启用预定义的apache监狱”">​</a></h3><p><code>fail2ban</code>的默认安装为Apache服务提供了一些预定义监狱和过滤器。我要启用这些内建的Apache监狱。由于Debian和RedHat配置的稍微不同，我会分别提供它们的配置文件。</p><h4 id="在debian-或者-ubuntu启用apache监狱" tabindex="-1">在Debian 或者 Ubuntu启用Apache监狱 <a class="header-anchor" href="#在debian-或者-ubuntu启用apache监狱" aria-label="Permalink to “在Debian 或者 Ubuntu启用Apache监狱”">​</a></h4><p>要在基于Debian的系统上启用预定义的apache监狱，如下创建/etc/fail2ban/jail.local。</p><pre><code>$ sudo vi /etc/fail2ban/jail.local 
</code></pre><hr><pre><code># 检测密码认证失败
[apache]
enabled  = true
port     = http,https
filter   = apache-auth
logpath  = /var/log/apache*/*error.log
maxretry = 6
 
# 检测漏洞和 PHP 脆弱性扫描 
[apache-noscript]
enabled  = true
port     = http,https
filter   = apache-noscript
logpath  = /var/log/apache*/*error.log
maxretry = 6
 
# 检测 Apache 溢出攻击 
[apache-overflows]
enabled  = true
port     = http,https
filter   = apache-overflows
logpath  = /var/log/apache*/*error.log
maxretry = 2
 
# 检测在服务器寻找主目录的尝试
[apache-nohome]
enabled  = true
port     = http,https
filter   = apache-nohome
logpath  = /var/log/apache*/*error.log
maxretry = 2
</code></pre><p>由于上面的监狱没有指定措施，这些监狱都将会触发默认的措施。要查看默认的措施，在/etc/fail2ban/jail.conf中的[DEFAULT]下找到“banaction”。</p><pre><code>banaction = iptables-multiport
</code></pre><p>本例中，默认的操作是iptables-multiport（定义在/etc/fail2ban/action.d/iptables-multiport.conf）。这个措施使用iptable的多端口模块禁止一个IP地址。</p><p>在启用监狱后，你必须重启fail2ban来加载监狱。</p><pre><code>$ sudo service fail2ban restart 
</code></pre><h4 id="在centos-rhel-或者-fedora中启用apache监狱" tabindex="-1">在CentOS/RHEL 或者 Fedora中启用Apache监狱 <a class="header-anchor" href="#在centos-rhel-或者-fedora中启用apache监狱" aria-label="Permalink to “在CentOS/RHEL 或者 Fedora中启用Apache监狱”">​</a></h4><p>要在基于红帽的系统中启用预定义的监狱，如下创建/etc/fail2ban/jail.local。</p><pre><code>$ sudo vi /etc/fail2ban/jail.local 
</code></pre><hr><pre><code># 检测密码认证失败
[apache]
enabled  = true
port     = http,https
filter   = apache-auth
logpath  = /var/log/httpd/*error_log
maxretry = 6
 
# 检测抓取邮件地址的爬虫
[apache-badbots]
enabled  = true
port     = http,https
filter   = apache-badbots
logpath  = /var/log/httpd/*access_log
bantime  = 172800
maxretry = 1
 
# 检测漏洞和 PHP 脆弱性扫描 
[apache-noscript]
enabled  = true
port     = http,https
filter   = apache-noscript
logpath  = /var/log/httpd/*error_log
maxretry = 6
 
# 检测 Apache 溢出攻击 
[apache-overflows]
enabled  = true
port     = http,https
filter   = apache-overflows
logpath  = /var/log/httpd/*error_log
maxretry = 2
 
# 检测在服务器寻找主目录的尝试
[apache-nohome]
enabled  = true
port     = http,https
filter   = apache-nohome
logpath  = /var/log/httpd/*error_log
maxretry = 2
 
# 检测执行不存在的脚本的企图
# 这些都是流行的网站服务程序
# 如：webmail， phpMyAdmin，WordPress
port     = http,https
filter   = apache-botsearch
logpath  = /var/log/httpd/*error_log
maxretry = 2
</code></pre><p>注意这些监狱文件默认的操作是iptables-multiport（定义在/etc/fail2ban/jail.conf中[DEFAULT]字段下的“banaction”中）。这个措施使用iptable的多端口模块禁止一个IP地址。</p><p>启用监狱后，你必须重启fail2ban来加载监狱。</p><p>在 Fedora 或者 CentOS/RHEL 7中：</p><pre><code>$ sudo systemctl restart fail2ban 
</code></pre><p>在 CentOS/RHEL 6中：</p><pre><code>$ sudo service fail2ban restart 
</code></pre><h3 id="检查和管理fail2ban禁止状态" tabindex="-1">检查和管理fail2ban禁止状态 <a class="header-anchor" href="#检查和管理fail2ban禁止状态" aria-label="Permalink to “检查和管理fail2ban禁止状态”">​</a></h3><p>监狱一旦激活后，你可以用fail2ban的客户端命令行工具来监测当前的禁止状态。</p><p>查看激活的监狱列表：</p><pre><code>$ sudo fail2ban-client status 
</code></pre><p>查看特定监狱的状态（包含禁止的IP列表）：</p><pre><code>$ sudo fail2ban-client status [监狱名] 
</code></pre><p><img src="https://farm8.staticflickr.com/7572/15891521967_5c6cbc5f8f_c.jpg" alt=""></p><p>你也可以手动禁止或者解禁IP地址：</p><p>要用制定监狱禁止IP：</p><pre><code>$ sudo fail2ban-client set [name-of-jail] banip [ip-address] 
</code></pre><p>要解禁指定监狱屏蔽的IP：</p><pre><code>$ sudo fail2ban-client set [name-of-jail] unbanip [ip-address] 
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3>`,43)),t("p",null,[a[7]||(a[7]=e("本篇教程解释了fail2ban监狱如何工作以及如何使用内置的监狱来保护Apache服务器。依赖于你的环境以及要保护的web服务器类型，你或许要调整已有的监狱或者编写自定义监狱和日志过滤器。查看outfail2ban的",-1)),l(n,{href:"https://github.com/fail2ban/fail2ban"},{default:r(()=>[...a[6]||(a[6]=[e("官方Github页面",-1)])]),_:1}),a[8]||(a[8]=e("来获取最新的监狱和过滤器示例。",-1))]),a[28]||(a[28]=t("p",null,"你有在生产环境中使用fail2ban么？分享一下你的经验吧。",-1)),a[29]||(a[29]=t("hr",null,null,-1)),t("p",null,[a[10]||(a[10]=e("via: ",-1)),l(n,{href:"http://xmodulo.com/configure-fail2ban-apache-http-server.html"},{default:r(()=>[...a[9]||(a[9]=[e("http://xmodulo.com/configure-fail2ban-apache-http-server.html",-1)])]),_:1})]),t("p",null,[a[14]||(a[14]=e("作者：",-1)),l(n,{href:"http://xmodulo.com/author/nanni"},{default:r(()=>[...a[11]||(a[11]=[e("Dan Nanni",-1)])]),_:1}),a[15]||(a[15]=e(" 译者：",-1)),l(n,{href:"https://github.com/geekpi"},{default:r(()=>[...a[12]||(a[12]=[e("geekpi",-1)])]),_:1}),a[16]||(a[16]=e(" 校对：",-1)),l(n,{href:"https://github.com/wxy"},{default:r(()=>[...a[13]||(a[13]=[e("wxy",-1)])]),_:1})]),t("p",null,[a[19]||(a[19]=e("本文由 ",-1)),l(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...a[17]||(a[17]=[e("LCTT",-1)])]),_:1}),a[20]||(a[20]=e(" 原创翻译，",-1)),l(n,{href:"http://linux.cn/"},{default:r(()=>[...a[18]||(a[18]=[e("Linux中国",-1)])]),_:1}),a[21]||(a[21]=e(" 荣誉推出",-1))])])}const v=o(f,[["render",h]]);export{A as __pageData,v as default};
