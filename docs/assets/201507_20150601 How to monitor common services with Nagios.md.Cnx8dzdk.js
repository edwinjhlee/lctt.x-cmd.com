import{_ as r,a0 as t,w as c,s as p,I as n,x as o,a1 as a,A as i,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"如何用 Nagios 监控通用服务 | LCTT x X-CMD","titleTemplate":false,"description":"如何用 Nagios 监控通用服务 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用 Nagios 监控通用服务 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用 Nagios 监控通用服务 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150601 How to monitor common services with Nagios","title":"如何用 Nagios 监控通用服务","tag":"201507","desc":""},"relativePath":"201507/20150601 How to monitor common services with Nagios.md","filePath":"[post].md"}'),l={name:"201507/20150601 How to monitor common services with Nagios.md"};function g(m,e,h,f,u,v){const s=t("Link");return c(),p("div",null,[e[16]||(e[16]=n("h1",{id:"如何用-nagios-监控通用服务",tabindex:"-1"},[o("如何用 Nagios 监控通用服务 "),n("a",{class:"header-anchor",href:"#如何用-nagios-监控通用服务","aria-label":"Permalink to “如何用 Nagios 监控通用服务”"},"​")],-1)),e[17]||(e[17]=n("p",null,"Nagios内置了很多脚本来监控服务。本篇会使用其中一些来检查通用服务如MySql、Apache、DNS等等。",-1)),n("p",null,[e[1]||(e[1]=o("为了保证本篇集中在系统监控，我们不会在这里配置主机组或者模板，它们已经在 ",-1)),a(s,{href:"https://linux.cn/article-2436-1.html"},{default:i(()=>[...e[0]||(e[0]=[o("前面的教程",-1)])]),_:1}),e[2]||(e[2]=o("中覆盖了，它们可以满足需要了。",-1))]),e[18]||(e[18]=d(`<h3 id="在命令行中运行nagios" tabindex="-1">在命令行中运行Nagios <a class="header-anchor" href="#在命令行中运行nagios" aria-label="Permalink to “在命令行中运行Nagios”">​</a></h3><p>通常建议在添加到Nagios前，先在命令行中运行Nagios服务检测脚本。它会给出执行是否成功以及脚本的输出将会看上去的样子。</p><p>这些脚本存储在 /etc/nagios-plugins/config/ ，可执行文件在 /usr/lib/nagios/plugins/。</p><p>下面就是该怎么做</p><pre><code>root@nagios:~# cd /etc/nagios-plugins/config/
</code></pre><p>提供的脚本包含了语法帮助。示例包含了部分输出。</p><pre><code>root@nagios:~# cat /etc/nagios-plugins/config/tcp_udp.cfg
</code></pre><hr><pre><code># &#39;check_tcp&#39; command definition
define command{
        command_name    check_tcp
        command_line    /usr/lib/nagios/plugins/check_tcp -H &#39;$HOSTADDRESS$&#39; -p &#39;$ARG1$&#39;
</code></pre><p>了解了语法，TCP 80端口可以用下面的方法检查。</p><pre><code>root@nagios:~# /usr/lib/nagios/plugins/check_tcp -H 10.10.10.1 -p 80
</code></pre><hr><pre><code>TCP OK - 0.000 second response time on port 80|time=0.000222s;;;0.000000;10.000000
</code></pre><h3 id="示例拓扑" tabindex="-1">示例拓扑 <a class="header-anchor" href="#示例拓扑" aria-label="Permalink to “示例拓扑”">​</a></h3><p>本片中使用下面三台服务器。每台服务器运行多个通用服务。Nagios服务器现在运行的是Ubuntu。</p><ul><li>Server 1 (10.10.10.1) : MySQL, Apache2</li><li>Server 2 (10.10.10.2) : Postfix, Apache2</li><li>Server 3 (10.10.10.3) : DNS</li></ul><p>首先，这些服务器被定义在了Nagios中。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/example.cfg
</code></pre><hr><pre><code>define host{
        use                     generic-host            
        host_name               test-server-1
        alias                   test-server-1
        address                 10.10.10.1
        }

define host{
        use                     generic-host            
        host_name               test-server-2
        alias                   test-server-2
        address                 10.10.10.2
        }

define host{
        use                     generic-host            
        host_name               test-server-3
        alias                   test-server-3
        address                 10.10.10.3
        }
</code></pre><h3 id="监控mysql服务" tabindex="-1">监控MySQL服务 <a class="header-anchor" href="#监控mysql服务" aria-label="Permalink to “监控MySQL服务”">​</a></h3><h4 id="mysql-监控需要" tabindex="-1">MySQL 监控需要 <a class="header-anchor" href="#mysql-监控需要" aria-label="Permalink to “MySQL 监控需要”">​</a></h4><ul><li>通过检查3306端口来检测MySQL是否运行中。</li><li>检测特定的数据库&#39;testDB&#39;是否可用。</li></ul><h4 id="mysql-服务器设置" tabindex="-1">MySQL 服务器设置 <a class="header-anchor" href="#mysql-服务器设置" aria-label="Permalink to “MySQL 服务器设置”">​</a></h4><p>开始检测MySQL时，需要记住MySQL默认只监听回环接口127.0.0.1。这增加了数据库的安全。手动调节需要告诉MySQL该监听什么其他接口。下面是该怎么做。</p><p>这个设置要在所有的MySQL服务器上完成。</p><pre><code>root@nagios:~# vim /etc/mysql/my.cnf
</code></pre><p>下面这行被注释掉以监听所有网络接口。</p><pre><code>#bind-address           = 127.0.0.1
</code></pre><p>同样，MySQL也不会让任意主机来连接它。需要为localhost和“任意”主机创建MySQL用户‘nagios’，接着在所有的数据库中为这个用户授予ALL权限，会这将在会用在监控中。</p><p>下面的设置对所有的MySQL服务器都已经设置。</p><pre><code>root@nagios:~# mysql -u root –p
## MySQL root 密码 ##
</code></pre><p>在MySQL服务器中创建&#39;nagios@localhost&#39;用户。</p><pre><code>mysql&gt; CREATE USER &#39;nagios&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;nagios-pass&#39;;
mysql&gt; GRANT ALL PRIVILEGES ON *.* TO &#39;nagios&#39;@&#39;localhost&#39;;
</code></pre><p>创建&#39;nagios@任意主机&#39;用户。（LCTT 译注：实际上这两个是同一个用户，只是分别授权给localhost和任意主机的访问；因为它们所用的密码的同一个，修改任何一个，另外一个也相应变化。）</p><pre><code>mysql&gt; CREATE USER &#39;nagios&#39;@&#39;%&#39; IDENTIFIED BY &#39;nagios-pass&#39;;
mysql&gt; GRANT ALL PRIVILEGES ON *.* TO &#39;nagios&#39;@&#39;%&#39;;
 
mysql&gt; FLUSH PRIVILEGES;
</code></pre><p>这使MySQL监听所有的网络接口，同样接受来自用户&#39;nagios&#39;的进入连接。</p><p>请注意，这种修改可能有安全隐患，所以需要提示几点：</p><ul><li>这个设置将会暴露MySQL给所有的接口，包括外网。确保只有合法的网络访问是非常重要的。应该使用防火墙和TCP wrapper等过滤器。</li><li>MySQL用户‘nagios’的密码应该非常强。如果只有几台Nagios服务器，那么应该创建&#39;nagios@服务器名&#39;用户而不是任意用户的&#39;nagios@%&#39;。</li></ul><h4 id="对mysql的nagios配置" tabindex="-1">对MySQL的Nagios配置 <a class="header-anchor" href="#对mysql的nagios配置" aria-label="Permalink to “对MySQL的Nagios配置”">​</a></h4><p>按如下配置来做一些调整。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/services_nagios2.cfg
</code></pre><hr><pre><code>define service{
use			generic-service
host_name		test-server-1
;hostgroup can be used instead as well

service_description		Check MYSQL via TCP port
check_command			check_tcp!3306
        }

define service{
use				generic-service
host_name			test-server-1
;hostgroup can be used instead as well

service_description	Check availability of database &#39;testDB&#39;
check_command	check_mysql_database!nagios!nagios-pass!testDB
;check_mysql!userName!userPassword!databaseName
        }
</code></pre><p>这样，Nagios就可以同时监控MySQL服务器及其数据库的可用性。</p><h3 id="监控apache服务器" tabindex="-1">监控Apache服务器 <a class="header-anchor" href="#监控apache服务器" aria-label="Permalink to “监控Apache服务器”">​</a></h3><p>Nagios同样也可以监控Apache服务。</p><h4 id="apache监控需要" tabindex="-1">Apache监控需要 <a class="header-anchor" href="#apache监控需要" aria-label="Permalink to “Apache监控需要”">​</a></h4><ul><li>监控apache服务是否可用</li></ul><p>这个任务非常简单因为Nagios有一个内置命令。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/services_nagios2.cfg
</code></pre><hr><pre><code>define service{
use			generic-service
host_name		test-server-1, test-server-2
service_description	Check Apache Web Server
check_command		check_http
        }
</code></pre><p>现在就非常简单了。</p><h3 id="监控dns服务" tabindex="-1">监控DNS服务 <a class="header-anchor" href="#监控dns服务" aria-label="Permalink to “监控DNS服务”">​</a></h3><p>Nagios通过向DNS服务器查询一个完全限定域名（FQDN），或者使用dig工具来查询。默认用于查询的FQDN的是www.google.com，但是这个可以按需改变。按照下面的文件修改来完成这个任务。</p><pre><code>root@nagios:~# vim /etc/nagios-plugins/config/dns.cfg
</code></pre><hr><pre><code>## The -H portion can be modified to replace Google ##
define command{
command_name    check_dns
command_line    /usr/lib/nagios/plugins/check_dns -H www.google.com -s &#39;$HOSTADDRESS$&#39;
}
</code></pre><p>编辑下面的行。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/services_nagios2.cfg
</code></pre><hr><pre><code>## Nagios asks server-3 to resolve the IP for google.com ##
define service{
use                             generic-service
host_name                       test-server-3
service_description     Check DNS
check_command           check_dns
        }

## Nagios asks server-3 to dig google.com ##
define service{
use                             generic-service
host_name                       test-server-3
service_description     Check DNS via dig
check_command           check_dig!www.google.com
        }
</code></pre><h3 id="监控邮件服务器" tabindex="-1">监控邮件服务器 <a class="header-anchor" href="#监控邮件服务器" aria-label="Permalink to “监控邮件服务器”">​</a></h3><p>Nagios可以监控不同的邮件服务组件如SMTP、POP、IMAP和mailq。之前提过，server-2设置了Postfix邮件服务。Nagios将被配置来监控SMTP和邮件队列。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/services_nagios2.cfg
</code></pre><hr><pre><code>define service{
use                     generic-service
host_name               test-server-2
service_description     Check SMTP
check_command           check_smtp
        }

define service{
use                     generic-service
host_name               test-server-2
service_description     Check Mail Queue
check_command           check_mailq_postfix!50!100
					;warning at 50, critical at 100
        }
</code></pre><p>下面的截屏显示了目前配置监控服务的概览。</p><p><img src="http://farm8.staticflickr.com/7333/11428095956_2868bbdfcc_z.jpg" alt=""></p><h3 id="基于端口自定义监控程序" tabindex="-1">基于端口自定义监控程序 <a class="header-anchor" href="#基于端口自定义监控程序" aria-label="Permalink to “基于端口自定义监控程序”">​</a></h3><p>让我们假设如下定制程序同样运行在网络中，监听着一个特定的端口。</p><ul><li>测试1号服务器：定制程序（TCP端口 12345）</li></ul><p>做一些小的调整，Nagios也可以帮助我们监控这个程序。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/services_nagios2.cfg
</code></pre><hr><pre><code>define service{
use                     generic-service
host_name               test-server-1
service_description     Check server 1 custom application
check_command           check_tcp!12345
        }
</code></pre><p>在结束之前的提示，Nagios可以监控网络很多其他的方面。存储在/etc/nagios-plugins/config/中的脚本为Nagios提供了很棒的能力。</p><p>一些Nagios提供的脚本被仅限于本地服务器，比如，服务器负载、进程并发数量、登录用户数量等。这些检查可以提供Nagios服务器内有用的信息。</p><p>希望这篇文章对你有用。</p><hr>`,81)),n("p",null,[e[4]||(e[4]=o("via: ",-1)),a(s,{href:"http://xmodulo.com/monitor-common-services-nagios.html"},{default:i(()=>[...e[3]||(e[3]=[o("http://xmodulo.com/monitor-common-services-nagios.html",-1)])]),_:1})]),n("p",null,[e[8]||(e[8]=o("作者：",-1)),a(s,{href:"http://xmodulo.com/author/sarmed"},{default:i(()=>[...e[5]||(e[5]=[o("Sarmed Rahman",-1)])]),_:1}),e[9]||(e[9]=o(" 译者：",-1)),a(s,{href:"https://github.com/geekpi"},{default:i(()=>[...e[6]||(e[6]=[o("geekpi",-1)])]),_:1}),e[10]||(e[10]=o(" 校对：",-1)),a(s,{href:"https://github.com/wxy"},{default:i(()=>[...e[7]||(e[7]=[o("wxy",-1)])]),_:1})]),n("p",null,[e[13]||(e[13]=o("本文由 ",-1)),a(s,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[11]||(e[11]=[o("LCTT",-1)])]),_:1}),e[14]||(e[14]=o(" 原创翻译，",-1)),a(s,{href:"https://linux.cn/"},{default:i(()=>[...e[12]||(e[12]=[o("Linux中国",-1)])]),_:1}),e[15]||(e[15]=o(" 荣誉推出",-1))])])}const k=r(l,[["render",g]]);export{S as __pageData,k as default};
