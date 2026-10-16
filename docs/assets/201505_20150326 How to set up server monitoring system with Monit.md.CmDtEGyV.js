import{_ as a,a0 as s,w as m,s as p,I as i,x as o,a1 as e,A as r,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"如何使用Monit部署服务器监控系统 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用Monit部署服务器监控系统 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用Monit部署服务器监控系统 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用Monit部署服务器监控系统 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150326 How to set up server monitoring system with Monit","title":"如何使用Monit部署服务器监控系统","tag":"201505","desc":""},"relativePath":"201505/20150326 How to set up server monitoring system with Monit.md","filePath":"[post].md"}'),d={name:"201505/20150326 How to set up server monitoring system with Monit.md"};function u(f,t,g,h,M,S){const n=s("Link");return m(),p("div",null,[t[31]||(t[31]=i("h1",{id:"如何使用monit部署服务器监控系统",tabindex:"-1"},[o("如何使用Monit部署服务器监控系统 "),i("a",{class:"header-anchor",href:"#如何使用monit部署服务器监控系统","aria-label":"Permalink to “如何使用Monit部署服务器监控系统”"},"​")],-1)),i("p",null,[t[2]||(t[2]=o("很多Linux系统管理员依赖一个集中式的远程监控系统（比如",-1)),e(n,{href:"http://xmodulo.com/monitor-common-services-nagios.html"},{default:r(()=>[...t[0]||(t[0]=[o("Nagios",-1)])]),_:1}),t[3]||(t[3]=o("或者",-1)),e(n,{href:"http://xmodulo.com/monitor-linux-servers-snmp-cacti.html"},{default:r(()=>[...t[1]||(t[1]=[o("Cacti",-1)])]),_:1}),t[4]||(t[4]=o("）来检查他们网络基础设备的健康状况。虽然集中式监控让管理员的生活更简单了，然而处理很多机器和服务时，专用的监控中心显然成为了一个单点故障，如果监控中心挂了或者因为什么原因（比如硬件或者网络故障）不可访问了，你就会失去整个网络基础设备情况的任何信息。",-1))]),t[32]||(t[32]=i("p",null,"一个给你的监控系统增加冗余度的方法是安装独立的监控软件（作为后备），至少在网络中的关键/核心服务器上。这样在集中式监控系统挂掉的情况，你还有能力通过后备的监控方式来获取核心服务器的运行状况。",-1)),t[33]||(t[33]=i("h3",{id:"monit是什么",tabindex:"-1"},[o("Monit是什么？ "),i("a",{class:"header-anchor",href:"#monit是什么","aria-label":"Permalink to “Monit是什么？”"},"​")],-1)),i("p",null,[e(n,{href:"http://mmonit.com/monit/"},{default:r(()=>[...t[5]||(t[5]=[o("Monit",-1)])]),_:1}),t[6]||(t[6]=o("是一个跨平台的用来监控Unix/linux系统（比如Linux、BSD、OSX、Solaris）的工具。Monit特别易于安装，而且非常轻量级（只有500KB大小），并且不依赖任何第三方程序、插件或者库。然而，Monit可以胜任全面监控、进程状态监控、文件系统变动监控、邮件通知和对核心服务的自定义动作等场景。易于安装、轻量级的实现以及强大的功能，让Monit成为一个理想的后备监控工具。",-1))]),t[34]||(t[34]=i("p",null,"我已经在一些机器使用Monit几年了，而且我对它的可靠性非常满意。甚至作为全面的监控系统，对任何Linux系统管理员来说Monit也是非常有用和强大的。在这篇教程中，我会展示如何在一个本地服务器部署Monit（作为后备监控系统）来监控常见的服务。在部署过程中，我只会展示我们用到的部分。",-1)),t[35]||(t[35]=i("h3",{id:"在linux安装monit",tabindex:"-1"},[o("在Linux安装Monit "),i("a",{class:"header-anchor",href:"#在linux安装monit","aria-label":"Permalink to “在Linux安装Monit”"},"​")],-1)),t[36]||(t[36]=i("p",null,"Monit已经被包含在多数Linux发行版的软件仓库中了。",-1)),t[37]||(t[37]=i("p",null,"Debian、Ubuntu或者Linux Mint：",-1)),t[38]||(t[38]=i("pre",null,[i("code",null,`$ sudo aptitude install monit
`)],-1)),t[39]||(t[39]=i("p",null,"Fedora或者CentOS/RHEL：",-1)),i("p",null,[t[9]||(t[9]=o("在CentOS/RHEL中，你必须首先启用",-1)),e(n,{href:"https://linux.cn/article-2324-1.html"},{default:r(()=>[...t[7]||(t[7]=[o("EPEL",-1)])]),_:1}),t[10]||(t[10]=o("或者",-1)),e(n,{href:"http://xmodulo.com/how-to-set-up-rpmforge-repoforge-repository-on-centos.html"},{default:r(()=>[...t[8]||(t[8]=[o("Repoforge",-1)])]),_:1}),t[11]||(t[11]=o("软件仓库.",-1))]),t[40]||(t[40]=l(`<pre><code># yum install monit
</code></pre><p>Monit自带一个文档完善的配置文件，其中包含了很多例子。主配置文件在/etc/monit.conf（Fedora/CentOS/RHEL 中），或者/etc/monit/monitrc（Debian/Ubuntu/Mint 中）。Monit配置文件有两部分：“Global”（全局）和“Services”（服务）。</p><h3 id="global-configuration-web-status-page-全局配置-web状态页面" tabindex="-1">Global Configuration: Web Status Page （全局配置：Web状态页面） <a class="header-anchor" href="#global-configuration-web-status-page-全局配置-web状态页面" aria-label="Permalink to “Global Configuration: Web Status Page （全局配置：Web状态页面）”">​</a></h3><p>Monit可以使用邮件服务来发送通知，也可以使用HTTP/HTTPS页面来展示。我们先使用如下配置的web状态页面吧：</p><ul><li>Monit监听1966端口。</li><li>对web状态页面的访问是通过SSL加密的。</li><li>使用monituser/romania作为用户名/口令登录。</li><li>只允许通过localhost、myhost.mydomain.ro和在局域网内部（192.168.0.0/16）访问。</li><li>Monit使用pem格式的SSL证书。</li></ul><p>之后的步骤，我会使用一个基于Red Hat的系统。在基于Debian的系统中的步骤也是类似的。</p><p>首先，在/var/cert生成一个自签名的证书（monit.pem）：</p><pre><code># mkdir /var/certs
# cd /etc/pki/tls/certs
# ./make-dummy-cert monit.pem
# cp monit.pem /var/certs
# chmod 0400 /var/certs/monit.pem 
</code></pre><p>现在将下列代码片段放到Monit的主配置文件中。你可以创建一个空配置文件，或者基于自带的配置文件修改。</p><pre><code>set httpd port 1966 and
     SSL ENABLE
     PEMFILE  /var/certs/monit.pem
     allow monituser:romania
     allow localhost
     allow 192.168.0.0/16
     allow myhost.mydomain.ro
</code></pre><h3 id="global-configuration-email-notification-全局配置-邮件通知" tabindex="-1">Global Configuration: Email Notification （全局配置：邮件通知） <a class="header-anchor" href="#global-configuration-email-notification-全局配置-邮件通知" aria-label="Permalink to “Global Configuration: Email Notification （全局配置：邮件通知）”">​</a></h3>`,11)),i("p",null,[t[13]||(t[13]=o("然后，我们来设置Monit的邮件通知。我们至少需要一个可用的",-1)),e(n,{href:"http://xmodulo.com/mail-server-ubuntu-debian.html"},{default:r(()=>[...t[12]||(t[12]=[o("SMTP服务器",-1)])]),_:1}),t[14]||(t[14]=o("来让Monit发送邮件。这样就可以（按照你的实际情况修改）：",-1))]),t[41]||(t[41]=l(`<ul><li>邮件服务器的机器名：smtp.monit.ro</li><li>Monit使用的发件人：monit@monit.ro</li><li>邮件的收件人：guletz@monit.ro</li><li>邮件服务器使用的SMTP端口：587（默认是25）</li></ul><p>有了以上信息，邮件通知就可以这样配置：</p><pre><code>set mailserver  smtp.monit.ro port 587
set mail-format {
 from: monit@monit.ro
 subject: $SERVICE $EVENT at $DATE on $HOST
 message: Monit $ACTION $SERVICE $EVENT at $DATE on $HOST : $DESCRIPTION.

       Yours sincerely,
          Monit

  }

set alert guletz@monit.ro
</code></pre><p>就像你看到的，Monit会提供几个内部变量（<code>$DATE</code>、<code>$EVENT</code>、<code>$HOST</code>等），你可以按照你的需求自定义邮件内容。如果你想要从Monit所在机器发送邮件，就需要一个已经安装的与sendmail兼容的程序（如postfix或者ssmtp）。</p><h3 id="global-configuration-monit-daemon-全局配置-monit守护进程" tabindex="-1">Global Configuration: Monit Daemon （全局配置：Monit守护进程）### <a class="header-anchor" href="#global-configuration-monit-daemon-全局配置-monit守护进程" aria-label="Permalink to “Global Configuration: Monit Daemon （全局配置：Monit守护进程）###”">​</a></h3><p>接下来就该配置Monit守护进程了。可以将其设置成这样：</p><ul><li>在120秒后进行第一次检测。</li><li>每3分钟检测一次服务。</li><li>使用syslog来记录日志。</li></ul><p>如下代码段可以满足上述需求。</p><pre><code>set daemon 120
   with start delay 240
set logfile syslog facility log_daemon
</code></pre><p>我们必须定义“idfile”，Monit守护进程的一个独一无二的ID文件；以及“eventqueue”，当monit的邮件因为SMTP或者网络故障发不出去，邮件会暂存在这里；以及确保/var/monit路径是存在的。然后使用下边的配置就可以了。</p><pre><code>set idfile /var/monit/id
set eventqueue
     basedir /var/monit
</code></pre><h3 id="测试全局配置" tabindex="-1">测试全局配置 <a class="header-anchor" href="#测试全局配置" aria-label="Permalink to “测试全局配置”">​</a></h3><p>现在“Global”部分就完成了。Monit配置文件看起来像这样：</p><pre><code>#  Global Section

# status webpage and acl&#39;s
set httpd port 1966 and
     SSL ENABLE
     PEMFILE  /var/certs/monit.pem
     allow monituser:romania
     allow localhost
     allow 192.168.0.0/16
     allow myhost.mydomain.ro

# mail-server
set mailserver  smtp.monit.ro port 587
# email-format
set mail-format {
 from: monit@monit.ro
 subject: $SERVICE $EVENT at $DATE on $HOST
 message: Monit $ACTION $SERVICE $EVENT at $DATE on $HOST : $DESCRIPTION.

       Yours sincerely,
          Monit

  }

set alert guletz@monit.ro

# delay checks
set daemon 120
   with start delay 240
set logfile syslog facility log_daemon

# idfile and mail queue path
set idfile /var/monit/id
 set eventqueue
     basedir /var/monit
</code></pre><p>现在是时候验证我们的工作了，你可以通过运行如下命令来验证存在的配置文件（/etc/monit.conf）：</p><pre><code># monit -t

Control file syntax OK
</code></pre><p>如果monit提示任何错误，请再检查下配置文件。幸运的是，错误/警告信息是可以帮助你发现问题的，比如：</p><pre><code>monit: Cannot stat the SSL server PEM file &#39;/var/certs/monit.pem&#39; -- No such file or directory
/etc/monit/monitrc:10: Warning: hostname did not resolve &#39;smtp.monit.ro&#39;
</code></pre><p>一旦你确认配置文件没问题了，可以启动monit守护进程，然后等2到3分钟：</p><pre><code># service monit start
</code></pre><p>如果你使用的是systemd，运行：</p><pre><code># systemctl start monit
</code></pre><p>现在打开一个浏览器窗口，然后访问<code>https://&lt;monit_host&gt;:1966</code>。将<code>&lt;monit_host&gt;</code>替换成Monit所在机器的机器名或者IP地址。</p><p>如果你使用的是自签名的SSL证书，你会在浏览器中看到一个警告信息。继续访问即可。</p><p><img src="https://farm8.staticflickr.com/7596/16737206479_96b9f7dfdb_c.jpg" alt=""></p><p>你完成登录后，就会看到这个页面。</p><p><img src="https://farm8.staticflickr.com/7594/16303369973_6019482dea_c.jpg" alt=""></p>`,27)),i("p",null,[t[16]||(t[16]=o("在这个教程的其余部分，我们演示监控一个本地服务器和常见服务的方法。你会在",-1)),e(n,{href:"http://mmonit.com/wiki/Monit/ConfigurationExamples"},{default:r(()=>[...t[15]||(t[15]=[o("官方wiki页面",-1)])]),_:1}),t[17]||(t[17]=o("看到很多有用的例子。其中的多数是可以直接复制粘贴的！",-1))]),t[42]||(t[42]=l(`<h3 id="service-configuration-cpu-memory-monitoring-服务配置-cpu、内存监控" tabindex="-1">Service Configuration: CPU/Memory Monitoring （服务配置：CPU、内存监控） <a class="header-anchor" href="#service-configuration-cpu-memory-monitoring-服务配置-cpu、内存监控" aria-label="Permalink to “Service Configuration: CPU/Memory Monitoring （服务配置：CPU、内存监控）”">​</a></h3><p>我们先来监控本地服务器的CPU、内存占用。复制如下代码段到配置文件中。</p><pre><code>check system localhost
    if loadavg (1min) &gt; 10 then alert
    if loadavg (5min) &gt; 6 then alert
    if memory usage &gt; 75% then alert
    if cpu usage (user) &gt; 70% then alert
    if cpu usage (system) &gt; 60% then alert
    if cpu usage (wait) &gt; 75% then alert
</code></pre><p>你可以很容易理解上边的配置。最上边的check是指每个监控周期（全局配置里设置的120秒）都对本机进行下面的操作。如果满足了任何条件，monit守护进程就会使用邮件发送一条报警。</p><p>如果某个监控项不需要每个周期都检查，可以使用如下格式，它会每240秒检查一次平均负载。</p><pre><code>if loadavg (1min) &gt; 10 for 2 cycles then alert
</code></pre><h3 id="service-configuration-ssh-service-monitoring-服务配置-ssh服务监控" tabindex="-1">Service Configuration: SSH Service Monitoring （服务配置：SSH服务监控） <a class="header-anchor" href="#service-configuration-ssh-service-monitoring-服务配置-ssh服务监控" aria-label="Permalink to “Service Configuration: SSH Service Monitoring （服务配置：SSH服务监控）”">​</a></h3><p>先检查我们的sshd是否安装在/usr/sbin/sshd：</p><pre><code>check file sshd_bin with path /usr/sbin/sshd
</code></pre><p>我们还想检查sshd的启动脚本是否存在：</p><pre><code>check file sshd_init with path /etc/init.d/sshd
</code></pre><p>最后，我们还想检查sshd守护进程是否存活，并且在监听22端口：</p><pre><code>check process sshd with pidfile /var/run/sshd.pid
   start program  &quot;/etc/init.d/sshd start&quot;
   stop program  &quot;/etc/init.d/sshd stop&quot;
   if failed port 22 protocol ssh then restart
   if 5 restarts within 5 cycles then timeout
</code></pre><p>我们可以这样解释上述配置：我们检查是否存在名为sshd的进程，并且有一个保存其pid的文件存在（/var/run/sshd.pid）。如果任何一个不存在，我们就使用启动脚本重启sshd。我们检查是否有进程在监听22端口，并且使用的是SSH协议。如果没有，我们还是重启sshd。如果在最近的5个监控周期（5x120秒）至少重启5次了，sshd就被认为是不能用的，我们就不再检查了。</p><p><img src="https://farm9.staticflickr.com/8685/16735725998_62c26a24bc_c.jpg" alt=""></p><h3 id="service-configuration-smtp-service-monitoring-服务配置-smtp服务监控" tabindex="-1">Service Configuration: SMTP Service Monitoring （服务配置：SMTP服务监控） <a class="header-anchor" href="#service-configuration-smtp-service-monitoring-服务配置-smtp服务监控" aria-label="Permalink to “Service Configuration: SMTP Service Monitoring （服务配置：SMTP服务监控）”">​</a></h3><p>现在我们来设置一个检查远程SMTP服务器（如192.168.111.102）的监控。假定SMTP服务器运行着SMTP、IMAP、SSH服务。</p><pre><code>check host MAIL with address 192.168.111.102
   if failed icmp type echo within 10 cycles then alert
   if failed port 25  protocol smtp then alert
             else if recovered then exec &quot;/scripts/mail-script&quot;
   if failed port 22  protocol ssh  then alert
   if failed port 143 protocol imap then alert
</code></pre><p>我们检查远程主机是否响应ICMP协议。如果我们在10个周期内没有收到ICMP回应，就发送一条报警。如果监测到25端口上的SMTP协议是异常的，就发送一条报警。如果在一次监测失败后又监测成功了，就运行一个脚本（/scripts/mail-script）。如果检查22端口上的SSH或者143端口上的IMAP协议不正常，同样发送报警。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>在这个教程，我演示了如何在本地服务器设置Monit，当然这只是Monit功能的冰山一角。你可以花些时间阅读Monit的man手册（写得很好）。Monit可以为任何Linux系统管理员做很多事情，并且具有非常优美和易于理解的语法。如果你将一个集中式的远程监控系统和Monit一同使用，你会得到一个更可靠的监控系统。你感觉Monit怎么样？</p><hr>`,22)),i("p",null,[t[19]||(t[19]=o("via: ",-1)),e(n,{href:"http://xmodulo.com/server-monitoring-system-monit.html"},{default:r(()=>[...t[18]||(t[18]=[o("http://xmodulo.com/server-monitoring-system-monit.html",-1)])]),_:1})]),i("p",null,[t[23]||(t[23]=o("作者：",-1)),e(n,{href:"http://xmodulo.com/author/iulian"},{default:r(()=>[...t[20]||(t[20]=[o("Iulian Murgulet",-1)])]),_:1}),t[24]||(t[24]=o(" 译者：",-1)),e(n,{href:"https://github.com/goreliu"},{default:r(()=>[...t[21]||(t[21]=[o("goreliu",-1)])]),_:1}),t[25]||(t[25]=o(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:r(()=>[...t[22]||(t[22]=[o("wxy",-1)])]),_:1})]),i("p",null,[t[28]||(t[28]=o("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[26]||(t[26]=[o("LCTT",-1)])]),_:1}),t[29]||(t[29]=o(" 原创翻译，",-1)),e(n,{href:"http://linux.cn/"},{default:r(()=>[...t[27]||(t[27]=[o("Linux中国",-1)])]),_:1}),t[30]||(t[30]=o(" 荣誉推出",-1))])])}const v=a(d,[["render",u]]);export{b as __pageData,v as default};
