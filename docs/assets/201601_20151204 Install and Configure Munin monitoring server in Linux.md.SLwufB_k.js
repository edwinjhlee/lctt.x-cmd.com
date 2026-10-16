import{_ as l,a0 as p,w as a,s as d,I as e,x as i,a1 as r,A as u,ao as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"在 Linux 上安装和配置 Munin 监控服务器 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 上安装和配置 Munin 监控服务器 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 上安装和配置 Munin 监控服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 上安装和配置 Munin 监控服务器 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151204 Install and Configure Munin monitoring server in Linux","title":"在 Linux 上安装和配置 Munin 监控服务器","tag":"201601","desc":""},"relativePath":"201601/20151204 Install and Configure Munin monitoring server in Linux.md","filePath":"[post].md"}'),s={name:"201601/20151204 Install and Configure Munin monitoring server in Linux.md"};function m(x,n,f,g,M,h){const t=p("Link");return a(),d("div",null,[n[21]||(n[21]=e("h1",{id:"在-linux-上安装和配置-munin-监控服务器",tabindex:"-1"},[i("在 Linux 上安装和配置 Munin 监控服务器 "),e("a",{class:"header-anchor",href:"#在-linux-上安装和配置-munin-监控服务器","aria-label":"Permalink to “在 Linux 上安装和配置 Munin 监控服务器”"},"​")],-1)),n[22]||(n[22]=e("p",null,[e("img",{src:"http://www.linuxnix.com/wp-content/uploads/2015/12/munin_page.jpg",alt:""})],-1)),e("p",null,[n[1]||(n[1]=i("Munin 是一款类似 ",-1)),r(t,{href:"http://www.linuxnix.com/network-monitoringinfo-gathering-tools-in-linux/"},{default:u(()=>[...n[0]||(n[0]=[i("RRD tool",-1)])]),_:1}),n[2]||(n[2]=i(" 的非常棒的系统监控工具，它能提供给你多方面的系统性能信息，例如 ",-1)),n[3]||(n[3]=e("strong",null,"磁盘、网络、进程、系统和用户",-1)),n[4]||(n[4]=i("。这些是 Munin 默认监控的内容。",-1))]),n[23]||(n[23]=o(`<h3 id="munin-如何工作" tabindex="-1">Munin 如何工作？ <a class="header-anchor" href="#munin-如何工作" aria-label="Permalink to “Munin 如何工作？”">​</a></h3><p>Munin 以客户端-服务器模式运行。主服务器上运行的 Munin 服务器进程会从本地运行的客户端守护进程（Munin 可以监控它自己的资源）或者远程客户端（Munin 可以监控上百台机器）收集数据，然后在它的 web 界面上以图形的方式显示出来。</p><h3 id="在-nutshell-中配置-munin" tabindex="-1">在 nutshell 中配置 Munin <a class="header-anchor" href="#在-nutshell-中配置-munin" aria-label="Permalink to “在 nutshell 中配置 Munin”">​</a></h3><p>要配置服务器端和客户端，我们需要完成以下两步。</p><ol><li>安装 Munin 服务器软件包并配置，使得它能从客户端收集数据。</li><li>安装 Munin 客户端，使得服务器能连接到客户端守护进程进行数据收集。</li></ol><h3 id="在-linux-上安装-munin-服务器端" tabindex="-1">在 Linux 上安装 munin 服务器端 <a class="header-anchor" href="#在-linux-上安装-munin-服务器端" aria-label="Permalink to “在 Linux 上安装 munin 服务器端”">​</a></h3><p>在基于 Ubuntu/Debian 的机器上安装 Munin 服务器：</p><pre><code>apt-get install munin apache2
</code></pre><p>在基于 Redhat/CentOS 的机器上安装 Munin 服务器：</p>`,9)),e("p",null,[n[6]||(n[6]=i("在基于 Redhat 的机器上安装 Munin 之前，你需要确保 ",-1)),r(t,{href:"https://linux.cn/article-2324-1.html"},{default:u(()=>[...n[5]||(n[5]=[i("启用 EPEL 软件仓库",-1)])]),_:1}),n[7]||(n[7]=i("，因为基于 Redhat 的机器的软件仓库默认没有 Munin。",-1))]),n[24]||(n[24]=o(`<pre><code>yum install munin httpd
</code></pre><h3 id="在-linux-上配置-munin-服务器端" tabindex="-1">在 Linux 上配置 Munin 服务器端 <a class="header-anchor" href="#在-linux-上配置-munin-服务器端" aria-label="Permalink to “在 Linux 上配置 Munin 服务器端”">​</a></h3><p>下面是我们要在服务器上启动 Munini 所进行的步骤：</p><ol><li>在 /etc/munin/munin.conf 中添加需要监控的主机详情。</li><li>配置 apache web 服务器使其包括 munin 配置。</li><li>为 web 界面创建用户名和密码</li><li>重启 apache 服务器</li></ol><p>####步骤 1####</p><p>在 <strong>/etc/munin/munin.conf</strong> 文件中添加主机条目。调到文件末尾添加要监控的客户端。在这个例子中，我添加了要监控的数据库服务器和它的 IP 地址。</p><p>示例：</p><pre><code>[db.linuxnix.com]
 address 192.168.1.25
 use_node_name yes
</code></pre><p>保存文件并退出。</p><p>####步骤 2####</p><p>在 /etc/apache2/conf.d 目录中编辑或创建文件 munin.conf 用于包括 Munin 和 Apache 相关的配置。另外注意一点，默认其它和 web 相关的 Munin 配置保存在 /var/www/munin 目录。</p><pre><code>vi /etc/apache2/conf.d/munin.conf
</code></pre><p>内容：</p><pre><code>Alias /munin /var/www/munin
&lt;Directory /var/www/munin&gt;
 Order allow,deny
 Allow from localhost 127.0.0.0/8 ::1
 AllowOverride None
 Options ExecCGI FollowSymlinks
 AddHandler cgi-script .cgi
 DirectoryIndex index.cgi
 AuthUserFile /etc/munin/munin.passwd
 AuthType basic
 AuthName &quot;Munin stats&quot;
 require valid-user
 &lt;IfModule mod_expires.c&gt;
 ExpiresActive On
 ExpiresDefault M310
 &lt;/IfModule&gt;
&lt;/Directory&gt;
</code></pre><p>保存文件并退出。</p><p>####步骤 3####</p><p>现在为查看 munin 的图示而创建用户名和密码：</p><pre><code>htpasswd -c /etc/munin/munin-htpasswd munin
</code></pre><p><strong>注意</strong>：对于 Redhat/Centos 机器，要访问你的配置文件，需要在每个路径中用 “<strong>httpd</strong>” 替换 “<strong>apache2</strong>”。</p><p>####步骤 4####</p><p>重启 Apache 服务器，使得 Munin 配置生效。</p><p>基于 Ubuntu/Debian ：</p><pre><code>service apache2 restart
</code></pre><p>基于 Centos/Redhat ：</p><pre><code>service httpd restart
</code></pre><h3 id="在-linux-上安装和配置-munin-客户端" tabindex="-1">在 Linux 上安装和配置 Munin 客户端 <a class="header-anchor" href="#在-linux-上安装和配置-munin-客户端" aria-label="Permalink to “在 Linux 上安装和配置 Munin 客户端”">​</a></h3><p>####步骤 1####</p><p>在 Linux 上安装 Munin 客户端</p><pre><code>apt-get install munin-node
</code></pre><p><strong>注意</strong>：如果你想监控你的 Munin 服务器端，你也需要在服务器端安装 munin-node。</p><p>####步骤 2####</p><p>编辑 munin-node.conf 文件配置客户端。</p><pre><code>vi /etc/munin/munin-node.conf
</code></pre><p>示例：</p><pre><code>allow ^127\\.0\\.0\\.1$
allow ^10\\.10\\.20\\.20$
</code></pre><hr><pre><code># 监听到哪个地址上
host *
</code></pre><hr><pre><code># 以及哪个端口
port 4949
</code></pre><p><strong>注意</strong>： 10.10.20.20 是我的 Munin 服务器，它连接到客户端的 4949 端口获取数据。</p><p>####步骤 3####</p><p>在客户端机器中重启 munin-node：</p><pre><code>service munin-node restart
</code></pre><h3 id="测试连接" tabindex="-1">测试连接 <a class="header-anchor" href="#测试连接" aria-label="Permalink to “测试连接”">​</a></h3><p>检查你是否能从服务器的连接到客户端的 4949 端口，如果不行，你需要在客户端机器中的防火墙打开该端口。</p><pre><code>telnet db.linuxnix.com 4949
</code></pre><p>访问 Munin web 页面</p><pre><code>http://munin.linuxnix.com/munin/index.html
</code></pre><p>希望这些能对你配置基本的 Munin 服务器有所帮助。</p><hr>`,50)),e("p",null,[n[9]||(n[9]=i("via: ",-1)),r(t,{href:"http://www.linuxnix.com/install-and-configure-munin-monitoring-server-in-linux/"},{default:u(()=>[...n[8]||(n[8]=[i("http://www.linuxnix.com/install-and-configure-munin-monitoring-server-in-linux/",-1)])]),_:1})]),e("p",null,[n[13]||(n[13]=i("作者：",-1)),r(t,{href:"http://www.linuxnix.com/author/surendra/"},{default:u(()=>[...n[10]||(n[10]=[i("Surendra Anne",-1)])]),_:1}),n[14]||(n[14]=i(" 译者：",-1)),r(t,{href:"http://mutouxiaogui.cn/blog/"},{default:u(()=>[...n[11]||(n[11]=[i("ictlyh",-1)])]),_:1}),n[15]||(n[15]=i(" 校对：",-1)),r(t,{href:"https://github.com/wxy"},{default:u(()=>[...n[12]||(n[12]=[i("wxy",-1)])]),_:1})]),e("p",null,[n[18]||(n[18]=i("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:u(()=>[...n[16]||(n[16]=[i("LCTT",-1)])]),_:1}),n[19]||(n[19]=i(" 原创编译，",-1)),r(t,{href:"https://linux.cn/"},{default:u(()=>[...n[17]||(n[17]=[i("Linux中国",-1)])]),_:1}),n[20]||(n[20]=i(" 荣誉推出",-1))])])}const b=l(s,[["render",m]]);export{T as __pageData,b as default};
