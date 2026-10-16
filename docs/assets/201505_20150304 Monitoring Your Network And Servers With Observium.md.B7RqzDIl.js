import{_ as s,a0 as a,w as m,s as l,ao as n,I as i,x as r,a1 as t,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const O=JSON.parse('{"title":"使用Observium来监控你的网络和服务器 | LCTT x X-CMD","titleTemplate":false,"description":"使用Observium来监控你的网络和服务器 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用Observium来监控你的网络和服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用Observium来监控你的网络和服务器 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150304 Monitoring Your Network And Servers With Observium","title":"使用Observium来监控你的网络和服务器","tag":"201505","desc":""},"relativePath":"201505/20150304 Monitoring Your Network And Servers With Observium.md","filePath":"[post].md"}'),u={name:"201505/20150304 Monitoring Your Network And Servers With Observium.md"};function d(b,e,v,g,c,h){const o=a("Link");return m(),l("div",null,[e[16]||(e[16]=n('<h1 id="使用observium来监控你的网络和服务器" tabindex="-1">使用Observium来监控你的网络和服务器 <a class="header-anchor" href="#使用observium来监控你的网络和服务器" aria-label="Permalink to “使用Observium来监控你的网络和服务器”">​</a></h1><h3 id="简介" tabindex="-1">简介### <a class="header-anchor" href="#简介" aria-label="Permalink to “简介###”">​</a></h3><p>在监控你的服务器、交换机或者设备时遇到过问题吗？<strong>Observium</strong> 可以满足你的需求。这是一个免费的监控系统，它可以帮助你远程监控你的服务器。它是一个由PHP编写的基于自动发现 SNMP 的网络监控平台，支持非常广泛的网络硬件和操作系统，包括 Cisco、Windows、Linux、HP、NetApp 等等。在此我会给出在 Ubuntu 12.04 上一步步地设置一个 <strong>Observium</strong> 服务器的介绍。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2015/03/Capture1.png" alt=""></p><p>目前有两种不同的 <strong>observium</strong> 版本。</p><ul><li>Observium 社区版本是一个在 QPL 开源许可证下的免费工具，这个版本是对于较小部署的最好解决方案。该版本每6个月进行一次安全性更新。</li><li>第2个版本是 Observium 专业版，该版本采用基于 SVN 的发布机制。 会得到每日安全性更新。 该工具适用于服务提供商和企业级部署。</li></ul>',6)),i("p",null,[e[1]||(e[1]=r("更多信息可以通过其",-1)),t(o,{href:"http://www.observium.org/"},{default:p(()=>[...e[0]||(e[0]=[r("官网",-1)])]),_:1}),e[2]||(e[2]=r("获得。",-1))]),e[17]||(e[17]=n(`<h3 id="系统需求" tabindex="-1">系统需求### <a class="header-anchor" href="#系统需求" aria-label="Permalink to “系统需求###”">​</a></h3><p>要安装 <strong>Observium</strong>， 需要具有一个最新安装的服务器。<strong>Observium</strong> 是在 Ubuntu LTS 和 Debian 系统上进行开发的，所以推荐在 Ubuntu 或 Debian 上安装 <strong>Observium</strong>，因为可能在别的平台上会有一些小问题。</p><p>该文章会引导你在 Ubuntu 12.04 上安装 <strong>Observium</strong>。对于小型的 <strong>Observium</strong> 安装，建议使用 256MB 内存和双核处理器的配置。</p><h3 id="安装需求" tabindex="-1">安装需求 <a class="header-anchor" href="#安装需求" aria-label="Permalink to “安装需求”">​</a></h3><p>在安装 <strong>Observuim</strong> 之前，你需要确认安装所有的依赖关系包。</p><p>首先，使用下面的命令更新你的服务器：</p><pre><code>sudo apt-get update
</code></pre><p>然后你需要安装下列运行 Observuim 所需的全部软件包。</p><p>Observium 需要使用下面所列出的软件才能正确的运行：</p><ul><li>LAMP 服务器</li><li>fping</li><li>Net-SNMP 5.4+</li><li>RRDtool 1.3+</li><li>Graphviz</li></ul><p>对于可选特性的要求：</p><ul><li><p>Ipmitool - 仅在当你想要获取服务器上的 IPMI（Intelligent Platform Management Interface 智能平台管理接口）基板控制器时。</p></li><li><p>Libvirt-bin - 仅在当你想要使用 libvirt 进行远程 VM 主机监控时。</p><p>sudo apt-get install libapache2-mod-php5 php5-cli php5-mysql php5-gd php5-mcrypt php5-json php-pear snmp fping mysql-server mysql-client python-mysqldb rrdtool subversion whois mtr-tiny ipmitool graphviz imagemagick libvirt ipmitool</p></li></ul><h3 id="为-observium-创建-mysql-数据库及其用户。" tabindex="-1">为 Observium 创建 MySQL 数据库及其用户。 <a class="header-anchor" href="#为-observium-创建-mysql-数据库及其用户。" aria-label="Permalink to “为 Observium 创建 MySQL 数据库及其用户。”">​</a></h3><p>现在你需要登录到 MySQL 中并为 <strong>Observium</strong> 创建数据库：</p><pre><code>mysql -u root -p
</code></pre><p>在用户验证成功之后，你需要按照下面的命令创建该数据库。</p><pre><code>CREATE DATABASE observium;
</code></pre><p>数据库名为 <strong>Observium</strong>，稍后你会需要这个信息。</p><p>现在你需要创建数据库管理员用户。</p><pre><code>CREATE USER observiumadmin@localhost IDENTIFIED BY &#39;observiumpassword&#39;;
</code></pre><p>接下来，你需要给该管理员用户相应的权限来管理创建的数据库。</p><pre><code>GRANT ALL PRIVILEGES ON observium.* TO observiumadmin@localhost;
</code></pre><p>你需要将权限信息写回到磁盘中来激活新的 MySQL 用户：</p><pre><code>FLUSH PRIVILEGES;
exit
</code></pre><h3 id="下载并安装-observium" tabindex="-1">下载并安装 Observium### <a class="header-anchor" href="#下载并安装-observium" aria-label="Permalink to “下载并安装 Observium###”">​</a></h3><p>现在我们的系统已经准备好了， 可以开始Observium的安装了。</p><p>第一步，创建 Observium 将要使用的文件目录：</p><pre><code>mkdir -p /opt/observium &amp;&amp; cd /opt
</code></pre><p>按本教程的目的，我们将会使用 Observium 的社区/开源版本。使用下面的命令下载并解压：</p><pre><code>wget http://www.observium.org/observium-community-latest.tar.gz
tar zxvf observium-community-latest.tar.gz
</code></pre><p>现在进入到 Observium 目录。</p><pre><code>cd observium
</code></pre><p>将默认的配置文件 &#39;<strong>config.php.default</strong>&#39; 复制到 &#39;<strong>config.php</strong>&#39;，并将数据库配置选项填充到配置文件中：</p><pre><code>cp config.php.default config.php
nano config.php
</code></pre><hr><pre><code>/ Database config
$config[&#39;db_host&#39;] = &#39;localhost&#39;;
$config[&#39;db_user&#39;] = &#39;observiumadmin&#39;;
$config[&#39;db_pass&#39;] = &#39;observiumpassword&#39;;
$config[&#39;db_name&#39;] = &#39;observium&#39;;
</code></pre><p>现在为 MySQL 数据库设置默认的数据库模式：</p><pre><code>php includes/update/update.php
</code></pre><p>现在你需要创建一个文件目录来存储 rrd 文件，并修改其权限以便让 apache 能将写入到文件中。</p><pre><code>mkdir rrd
chown apache:apache rrd
</code></pre><p>为了在出现问题时排错，你需要创建日志文件。</p><pre><code>mkdir -p /var/log/observium
chown apache:apache /var/log/observium
</code></pre><p>现在你需要为 Observium 创建虚拟主机配置。</p><pre><code>&lt;VirtualHost *:80&gt;
  DocumentRoot /opt/observium/html/
  ServerName  observium.domain.com
  CustomLog /var/log/observium/access_log combined
  ErrorLog /var/log/observium/error_log
  &lt;Directory &quot;/opt/observium/html/&quot;&gt;
  AllowOverride All
  Options FollowSymLinks MultiViews
  &lt;/Directory&gt;
  &lt;/VirtualHost&gt;
</code></pre><p>下一步你需要让你的 Apache 服务器的 rewrite (重写)功能生效。</p><p>为了让 &#39;mod_rewrite&#39; 生效，输入以下命令：</p><pre><code>sudo a2enmod rewrite
</code></pre><p>该模块在下一次 Apache 服务重启之后就会生效。</p><pre><code>sudo service apache2 restart
</code></pre><p>###配置 Observium###</p><p>在登入 Web 界面之前，你需要为 Observium 创建一个管理员账户（级别10）。</p><pre><code># cd /opt/observium
# ./adduser.php admin adminpassword 10 
User admin added successfully.
</code></pre><p>下一步为发现和探寻任务设置一个 cron 任务，创建一个新的文件 ‘<strong>/etc/cron.d/observium</strong>’ 并在其中添加以下的内容。</p><pre><code>33  */6   * * *   root    /opt/observium/discovery.php -h all &gt;&gt; /dev/null 2&gt;&amp;1
*/5 *      * * *   root    /opt/observium/discovery.php -h new &gt;&gt; /dev/null 2&gt;&amp;1
*/5 *      * * *   root    /opt/observium/poller-wrapper.py 1 &gt;&gt; /dev/null 2&gt;&amp;1
</code></pre><p>重载 cron 进程来增加新的任务。</p><pre><code># /etc/init.d/cron reload
</code></pre><p>好啦，你已经完成了 Observium 服务器的安装拉！ 使用你的浏览器登录到 <strong>http://&lt;Server IP&gt;</strong>，然后上路吧。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2015/03/Capture.png" alt=""></p><p>尽情享受吧！</p><hr>`,60)),i("p",null,[e[4]||(e[4]=r("via: ",-1)),t(o,{href:"http://www.unixmen.com/monitoring-network-servers-observium/"},{default:p(()=>[...e[3]||(e[3]=[r("http://www.unixmen.com/monitoring-network-servers-observium/",-1)])]),_:1})]),i("p",null,[e[8]||(e[8]=r("作者：",-1)),t(o,{href:"http://www.unixmen.com/author/anis/"},{default:p(()=>[...e[5]||(e[5]=[r("anismaj",-1)])]),_:1}),e[9]||(e[9]=r(" 译者：",-1)),t(o,{href:"http://github.com/theo-l"},{default:p(()=>[...e[6]||(e[6]=[r("theo-l",-1)])]),_:1}),e[10]||(e[10]=r(" 校对：",-1)),t(o,{href:"http://github.com/wxy"},{default:p(()=>[...e[7]||(e[7]=[r("wxy",-1)])]),_:1})]),i("p",null,[e[13]||(e[13]=r("本文由 ",-1)),t(o,{href:"http://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[11]||(e[11]=[r("LCTT",-1)])]),_:1}),e[14]||(e[14]=r(" 原创翻译，",-1)),t(o,{href:"http://linux.cn/"},{default:p(()=>[...e[12]||(e[12]=[r("Linux中国",-1)])]),_:1}),e[15]||(e[15]=r(" 荣誉推出",-1))])])}const T=s(u,[["render",d]]);export{O as __pageData,T as default};
