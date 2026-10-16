import{_ as l,a0 as d,w as i,s as c,ao as a,I as n,x as t,a1 as r,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"RHCSA 系列（九）: 安装、配置及加固一个 Web 和 FTP 服务器 | LCTT x X-CMD","titleTemplate":false,"description":"RHCSA 系列（九）: 安装、配置及加固一个 Web 和 FTP 服务器 | LCTT (RHCSA Series) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RHCSA 系列（九）: 安装、配置及加固一个 Web 和 FTP 服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RHCSA 系列（九）: 安装、配置及加固一个 Web 和 FTP 服务器 | LCTT (RHCSA Series) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"RHCSA Series/RHCSA Series--Part 09--Installing, Configuring and Securing a Web and FTP Server","title":"RHCSA 系列（九）: 安装、配置及加固一个 Web 和 FTP 服务器","tag":"RHCSA Series","desc":""},"relativePath":"RHCSA Series/RHCSA Series--Part 09--Installing, Configuring and Securing a Web and FTP Server.md","filePath":"[post].md"}'),s={name:"RHCSA Series/RHCSA Series--Part 09--Installing, Configuring and Securing a Web and FTP Server.md"};function m(f,e,u,S,h,T){const p=d("Link");return i(),c("div",null,[e[21]||(e[21]=a(`<h1 id="rhcsa-系列-九-安装、配置及加固一个-web-和-ftp-服务器" tabindex="-1">RHCSA 系列（九）: 安装、配置及加固一个 Web 和 FTP 服务器 <a class="header-anchor" href="#rhcsa-系列-九-安装、配置及加固一个-web-和-ftp-服务器" aria-label="Permalink to “RHCSA 系列（九）: 安装、配置及加固一个 Web 和 FTP 服务器”">​</a></h1><p>Web 服务器（也被称为 HTTP 服务器）是在网络中将内容（最为常见的是网页，但也支持其他类型的文件）进行处理并传递给客户端的服务。</p><p>FTP 服务器是最为古老且最常使用的资源之一（即便到今天也是这样），在身份认证不是必须的情况下，它可通过客户端在一个网络访问文件，因为 FTP 使用没有加密的用户名和密码，所以有些情况下不需要验证也行。</p><p>在 RHEL 7 中可用的 web 服务器是版本号为 2.4 的 Apache HTTP 服务器。至于 FTP 服务器，我们将使用 Very Secure Ftp Daemon (又名 vsftpd) 来建立用 TLS 加固的连接。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/05/Install-Configure-Secure-Apache-FTP-Server.png" alt="配置和加固 Apache 和 FTP 服务器"></p><p><em>RHCSA: 安装，配置及加固 Apache 和 FTP 服务器 – Part 9</em></p><p>在这篇文章中，我们将解释如何在 RHEL 7 中安装、配置和加固 web 和 FTP 服务器。</p><h3 id="安装-apache-和-ftp-服务器" tabindex="-1">安装 Apache 和 FTP 服务器 <a class="header-anchor" href="#安装-apache-和-ftp-服务器" aria-label="Permalink to “安装 Apache 和 FTP 服务器”">​</a></h3><p>在本指导中，我们将使用一个静态 IP 地址为 192.168.0.18/24 的 RHEL 7 服务器。为了安装 Apache 和 VSFTPD，运行下面的命令：</p><pre><code># yum update &amp;&amp; yum install httpd vsftpd
</code></pre><p>当安装完成后，这两个服务在开始时是默认被禁用的，所以我们需要暂时手动开启它们并让它们在下一次启动时自动地开启它们：</p><pre><code># systemctl start httpd
# systemctl enable httpd
# systemctl start vsftpd
# systemctl enable vsftpd
</code></pre><p>另外，我们必须打开 80 和 21 端口，它们分别是 web 和 ftp 守护进程监听的端口，为的是允许从外面访问这些服务：</p><pre><code># firewall-cmd --zone=public --add-port=80/tcp --permanent
# firewall-cmd --zone=public --add-service=ftp --permanent
# firewall-cmd --reload
</code></pre><p>为了确认 web 服务工作正常，打开你的浏览器并输入服务器的 IP，则你应该可以看到如下的测试页面：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/05/Confirm-Apache-Web-Server.png" alt="确认 Apache Web 服务器"></p><p><em>确认 Apache Web 服务器</em></p><p>对于 ftp 服务器，在确保它如期望中的那样工作之前，我们必须进一步地配置它，我们将在几分钟后来做这件事。</p><h3 id="配置并加固-apache-web-服务器" tabindex="-1">配置并加固 Apache Web 服务器 <a class="header-anchor" href="#配置并加固-apache-web-服务器" aria-label="Permalink to “配置并加固 Apache Web 服务器”">​</a></h3><p>Apache 的主要配置文件位于 <code>/etc/httpd/conf/httpd.conf</code> 中，但它可能依赖 <code>/etc/httpd/conf.d</code> 中的其他文件。</p>`,20)),n("p",null,[e[1]||(e[1]=t("尽管默认的配置对于大多数的情形都够用了，但熟悉在 ",-1)),r(p,{href:"http://httpd.apache.org/docs/2.4/"},{default:o(()=>[...e[0]||(e[0]=[t("官方文档",-1)])]),_:1}),e[2]||(e[2]=t(" 中介绍的所有可用选项是一个不错的主意。",-1))]),e[22]||(e[22]=a(`<p>同往常一样，在编辑主配置文件前先做一个备份：</p><pre><code># cp /etc/httpd/conf/httpd.conf /etc/httpd/conf/httpd.conf.$(date +%Y%m%d)
</code></pre><p>然后用你钟爱的文本编辑器打开它，并查找下面这些变量：</p><ul><li><code>ServerRoot</code>： 服务器的配置，错误和日志文件保存的目录。</li><li><code>Listen</code>： 通知 Apache 去监听特定的 IP 地址或端口。</li><li><code>Include</code>: 允许包含其他配置文件，要包含的文件必须存在，否则，服务器将会失败。它恰好与 IncludeOptional 相反，假如特定的配置文件不存在，它将静默地忽略掉它们。</li><li><code>User</code> 和 <code>Group</code>： 运行 httpd 服务的用户/组的名称。</li><li><code>DocumentRoot</code>： Apache 为你的文档所服务的目录。默认情况下，所有的请求将在这个目录中被获取，但符号链接和别名可能会被用于指向其他位置。</li><li><code>ServerName</code>： 这个指令将设定用于识别它自身的主机名（或 IP 地址）和端口。</li></ul><p>安全措施的第一步将包含创建一个特定的用户和组（如 tecmint/tecmint）来运行 web 服务器，以及更改默认的端口为一个更高的端口（在这个例子中为 9000） （LCTT 译注：如果你的 Web 服务器对外公开提供服务，则不建议修改为非默认端口。）：</p><pre><code>ServerRoot &quot;/etc/httpd&quot;
Listen 192.168.0.18:9000
User tecmint
Group tecmint
DocumentRoot &quot;/var/www/html&quot;
ServerName 192.168.0.18:9000
</code></pre><p>你可以使用下面的命令来测试配置文件：</p><pre><code># apachectl configtest
</code></pre><p>假如一切 OK，接着重启 web 服务器。</p><pre><code># systemctl restart httpd
</code></pre><p>并别忘了在防火墙中开启新的端口（并禁用旧的端口）：</p><pre><code># firewall-cmd --zone=public --remove-port=80/tcp --permanent
# firewall-cmd --zone=public --add-port=9000/tcp --permanent
# firewall-cmd --reload
</code></pre><p>请注意，由于 SELinux 策略，你只能给给 web 服务器使用如下命令所返回的端口。</p><pre><code># semanage port -l | grep -w &#39;^http_port_t&#39;
</code></pre><p>假如你想让 httpd 服务使用另一个端口（如 TCP 端口 8100），你必须将它加到 SELinux 的端口上下文：</p><pre><code># semanage port -a -t http_port_t -p tcp 8100
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/05/Add-Apache-Port-to-SELinux-Policies.png" alt="添加 Apache 端口到 SELinux 策略"></p><p><em>添加 Apache 端口到 SELinux 策略</em></p><p>为了进一步加固你安装的 Apache，请遵循以下步骤：</p><ol><li><p>运行 Apache 的用户不应该拥有访问 shell 的能力：</p><pre><code> # usermod -s /sbin/nologin tecmint
</code></pre></li><li><p>禁用目录列表功能，这是为了阻止浏览器展示一个未包含 index.html 文件的目录里的内容。</p><pre><code>编辑 \`/etc/httpd/conf/httpd.conf\` (以及虚拟主机的配置文件，假如有的话)，并确保出现在顶层的和Directory 块中的 Options 指令都被设置为 None：

 Options None
</code></pre></li><li><p>在 HTTP 响应中隐藏有关 web 服务器和操作系统的信息。像下面这样编辑文件 <code>/etc/httpd/conf/httpd.conf</code>：</p><pre><code> ServerTokens Prod 
 ServerSignature Off
</code></pre></li></ol><p>现在，你已经做好了从 <code>/var/www/html</code> 目录开始服务内容的准备了。</p><h3 id="配置并加固-ftp-服务器" tabindex="-1">配置并加固 FTP 服务器 <a class="header-anchor" href="#配置并加固-ftp-服务器" aria-label="Permalink to “配置并加固 FTP 服务器”">​</a></h3><p>和 Apache 的情形类似， Vsftpd 的主配置文件 <code>/etc/vsftpd/vsftpd.conf</code> 带有详细的注释，且虽然对于大多数的应用实例，默认的配置应该足够了，但为了更有效率地操作 ftp 服务器，你应该开始熟悉相关的文档和 man 页 <code>man vsftpd.conf</code>（对于这点，再多的强调也不为过！）。</p><p>在我们的示例中，使用了这些指令：</p><pre><code>anonymous_enable=NO
local_enable=YES
write_enable=YES
local_umask=022
dirmessage_enable=YES
xferlog_enable=YES
connect_from_port_20=YES
xferlog_std_format=YES
chroot_local_user=YES
allow_writeable_chroot=YES
listen=NO
listen_ipv6=YES
pam_service_name=vsftpd
userlist_enable=YES
tcp_wrappers=YES
</code></pre><p>通过使用 <code>chroot_local_user=YES</code>，（默认情况下）本地用户在登录之后，将被限制在以用户的家目录为 chroot 监狱的环境中。这意味着本地用户将不能访问除其家目录之外的任何文件。</p><p>最后，为了让 ftp 能够在用户的家目录中读取文件，设置如下的 SELinux 布尔值：</p><pre><code># setsebool -P ftp_home_dir on
</code></pre><p>现在，你可以使用一个客户端例如 Filezilla 来连接一个 ftp 服务器：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/05/Check-FTP-Connection.png" alt="查看 FTP 连接"></p><p><em>查看 FTP 连接</em></p><p>注意， <code>/var/log/xferlog</code> 日志将会记录下载和上传的情况，这与上图的目录列表一致：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/05/Monitor-FTP-Download-Upload.png" alt="监视 FTP 的下载和上传情况"></p><p><em>监视 FTP 的下载和上传情况</em></p>`,34)),n("p",null,[e[4]||(e[4]=t("另外请参考： ",-1)),r(p,{href:"https://linux.cn/article-5517-1.html"},{default:o(()=>[...e[3]||(e[3]=[t("在 Linux 系统中使用 Trickle 来限制应用使用的 FTP 网络带宽",-1)])]),_:1})]),e[23]||(e[23]=n("h3",{id:"总结",tabindex:"-1"},[t("总结 "),n("a",{class:"header-anchor",href:"#总结","aria-label":"Permalink to “总结”"},"​")],-1)),n("p",null,[e[6]||(e[6]=t("在本教程中，我们解释了如何设置 web 和 ftp 服务器。由于这个主题的广泛性，涵盖这些话题的所有方面是不可能的（如虚拟主机）。因此，我推荐你也阅读这个网站中有关 ",-1)),r(p,{href:"http://www.google.com/cse?cx=partner-pub-2601749019656699:2173448976&ie=UTF-8&q=virtual+hosts&sa=Search&gws_rd=cr&ei=Dy9EVbb0IdHisASnroG4Bw#gsc.tab=0&gsc.q=apache"},{default:o(()=>[...e[5]||(e[5]=[t("Apache",-1)])]),_:1}),e[7]||(e[7]=t(" 的其他卓越的文章。",-1))]),e[24]||(e[24]=n("hr",null,null,-1)),n("p",null,[e[9]||(e[9]=t("via: ",-1)),r(p,{href:"http://www.tecmint.com/rhcsa-series-install-and-secure-apache-web-server-and-ftp-in-rhel/"},{default:o(()=>[...e[8]||(e[8]=[t("http://www.tecmint.com/rhcsa-series-install-and-secure-apache-web-server-and-ftp-in-rhel/",-1)])]),_:1})]),n("p",null,[e[13]||(e[13]=t("作者：",-1)),r(p,{href:"http://www.tecmint.com/author/gacanepa/"},{default:o(()=>[...e[10]||(e[10]=[t("Gabriel Cánepa",-1)])]),_:1}),e[14]||(e[14]=t(" 译者：",-1)),r(p,{href:"https://github.com/FSSlc"},{default:o(()=>[...e[11]||(e[11]=[t("FSSlc",-1)])]),_:1}),e[15]||(e[15]=t(" 校对：",-1)),r(p,{href:"https://github.com/wxy"},{default:o(()=>[...e[12]||(e[12]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[18]||(e[18]=t("本文由 ",-1)),r(p,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[16]||(e[16]=[t("LCTT",-1)])]),_:1}),e[19]||(e[19]=t(" 原创翻译，",-1)),r(p,{href:"https://linux.cn/"},{default:o(()=>[...e[17]||(e[17]=[t("Linux中国",-1)])]),_:1}),e[20]||(e[20]=t(" 荣誉推出",-1))])])}const g=l(s,[["render",m]]);export{P as __pageData,g as default};
