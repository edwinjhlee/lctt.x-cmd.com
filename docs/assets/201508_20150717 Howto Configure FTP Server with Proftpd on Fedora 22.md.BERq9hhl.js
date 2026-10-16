import{_ as d,a0 as a,w as i,s as l,I as n,x as t,a1 as r,A as p,ao as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"如何在 Fedora 22 上配置 Proftpd 服务器 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Fedora 22 上配置 Proftpd 服务器 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Fedora 22 上配置 Proftpd 服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Fedora 22 上配置 Proftpd 服务器 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150717 Howto Configure FTP Server with Proftpd on Fedora 22","title":"如何在 Fedora 22 上配置 Proftpd 服务器","tag":"201508","desc":""},"relativePath":"201508/20150717 Howto Configure FTP Server with Proftpd on Fedora 22.md","filePath":"[post].md"}'),f={name:"201508/20150717 Howto Configure FTP Server with Proftpd on Fedora 22.md"};function u(c,e,P,T,m,g){const o=a("Link");return i(),l("div",null,[e[19]||(e[19]=n("h1",{id:"如何在-fedora-22-上配置-proftpd-服务器",tabindex:"-1"},[t("如何在 Fedora 22 上配置 Proftpd 服务器 "),n("a",{class:"header-anchor",href:"#如何在-fedora-22-上配置-proftpd-服务器","aria-label":"Permalink to “如何在 Fedora 22 上配置 Proftpd 服务器”"},"​")],-1)),n("p",null,[e[1]||(e[1]=t("在本文中，我们将了解如何在运行 Fedora 22 的电脑或服务器上使用 Proftpd 架设 FTP 服务器。",-1)),r(o,{href:"http://www.proftpd.org/"},{default:p(()=>[...e[0]||(e[0]=[t("ProFTPD",-1)])]),_:1}),e[2]||(e[2]=t(" 是一款基于 GPL 授权的自由开源 FTP 服务器软件，是 Linux 上的主流 FTP 服务器。它的主要设计目标是提供许多高级功能以及给用户提供丰富的配置选项以轻松实现定制。它具备许多在其他一些 FTP 服务器软件里仍然没有的配置选项。最初它是被开发作为 wu-ftpd 服务器的一个更安全更容易配置的替代。",-1))]),n("p",null,[e[4]||(e[4]=t("FTP 服务器是这样一个软件，用户可以通过 FTP 客户端从安装了它的远端服务器上传或下载文件和目录。下面是一些 ProFTPD 服务器的主要功能，更详细的资料可以访问 ",-1)),r(o,{href:"http://www.proftpd.org/features.html"},{default:p(()=>[...e[3]||(e[3]=[t("http://www.proftpd.org/features.html",-1)])]),_:1}),e[5]||(e[5]=t("。",-1))]),e[20]||(e[20]=s(`<ul><li>每个目录都可以包含 &quot;.ftpaccess&quot; 文件用于访问控制，类似 Apache 的 &quot;.htaccess&quot;</li><li>支持多个虚拟 FTP 服务器以及多用户登录和匿名 FTP 服务。</li><li>可以作为独立进程启动服务或者通过 inetd/xinetd 启动</li><li>它的文件/目录属性、属主和权限是基于 UNIX 方式的。</li><li>它可以独立运行，保护系统避免 root 访问可能带来的损坏。</li><li>模块化的设计让它可以轻松扩展其他模块，比如 LDAP 服务器，SSL/TLS 加密，RADIUS 支持，等等。</li><li>ProFTPD 服务器还支持 IPv6.</li></ul><p>下面是如何在运行 Fedora 22 操作系统的计算机上使用 ProFTPD 架设 FTP 服务器的一些简单步骤。</p><h3 id="_1-安装-proftpd" tabindex="-1">1. 安装 ProFTPD <a class="header-anchor" href="#_1-安装-proftpd" aria-label="Permalink to “1. 安装 ProFTPD”">​</a></h3><p>首先，我们将在运行 Fedora 22 的机器上安装 Proftpd 软件。因为 yum 包管理器已经被抛弃了，我们将使用最新最好的包管理器 dnf。DNF 很容易使用，是 Fedora 22 上采用的非常人性化的包管理器。我们将用它来安装 proftpd 软件。这需要在终端或控制台里用 sudo 模式运行下面的命令。</p><pre><code>$ sudo dnf -y install proftpd proftpd-utils
</code></pre><h3 id="_2-配置-proftpd" tabindex="-1">2. 配置 ProFTPD <a class="header-anchor" href="#_2-配置-proftpd" aria-label="Permalink to “2. 配置 ProFTPD”">​</a></h3><p>现在，我们将修改软件的一些配置。要配置它，我们需要用文本编辑器编辑 /etc/proftpd.conf 文件。<strong>/etc/proftpd.conf</strong> 文件是 ProFTPD 软件的主要配置文件，所以，这个文件的任何改动都会影响到 FTP 服务器。在这里，是我们在初始步骤里做出的改动。</p><pre><code>$ sudo vi /etc/proftpd.conf
</code></pre><p>之后，在用文本编辑器打开这个文件后，我们会想改下 ServerName 以及 ServerAdmin，分别填入自己的域名和 email 地址。下面是我们改的。</p><pre><code>ServerName       &quot;ftp.linoxide.com&quot;
ServerAdmin      arun@linoxide.com
</code></pre><p>在这之后，我们将把下面的设定加到配置文件里，这样可以让服务器将访问和授权记录到相应的日志文件里。</p><pre><code>ExtendedLog /var/log/proftpd/access.log WRITE,READ default
ExtendedLog /var/log/proftpd/auth.log AUTH auth
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/configuring-proftpd-config.png" alt="调整 ProFTPD 设置"></p><h3 id="_3-添加-ftp-用户" tabindex="-1">3. 添加 FTP 用户 <a class="header-anchor" href="#_3-添加-ftp-用户" aria-label="Permalink to “3. 添加 FTP 用户”">​</a></h3><p>在设定好了基本的配置文件后，我们很自然地希望添加一个以特定目录为根目录的 FTP 用户。目前登录的用户自动就可以使用 FTP 服务，可以用来登录到 FTP 服务器。但是，在这篇教程里，我们将创建一个以 ftp 服务器上指定目录为主目录的新用户。</p><p>下面，我们将建立一个名字是 ftpgroup 的新用户组。</p><pre><code>$ sudo groupadd ftpgroup
</code></pre><p>然后，我们将以目录 /ftp-dir/ 作为主目录增加一个新用户 arunftp 并加入这个组中。</p><pre><code>$ sudo useradd -G ftpgroup arunftp -s /sbin/nologin -d /ftp-dir/
</code></pre><p>在创建好用户并加入用户组后，我们将为用户 arunftp 设置一个密码。</p><pre><code>$ sudo passwd arunftp

Changing password for user arunftp.
New password:
Retype new password:
passwd: all authentication tokens updated successfully.
</code></pre><p>现在，我们将通过下面命令为这个 ftp 用户设定主目录的读写权限（LCTT 译注：这是SELinux 相关设置，如果未启用 SELinux，可以不用）。</p><pre><code>$ sudo setsebool -P allow_ftpd_full_access=1
$ sudo setsebool -P ftp_home_dir=1
</code></pre><p>然后，我们会设定不允许其他用户移动或重命名这个目录以及里面的内容。</p><pre><code>$ sudo chmod -R 1777 /ftp-dir/
</code></pre><h3 id="_4-打开-tls-支持" tabindex="-1">4. 打开 TLS 支持 <a class="header-anchor" href="#_4-打开-tls-支持" aria-label="Permalink to “4. 打开 TLS 支持”">​</a></h3><p>目前 FTP 所用的加密手段并不安全，任何人都可以通过监听网卡来读取 FTP 传输的数据。所以，我们将为自己的服务器打开 TLS 加密支持。这样的话，需要编辑 /etc/proftpd.conf 配置文件。在这之前，我们先备份一下当前的配置文件，可以保证在改出问题后还可以恢复。</p><pre><code>$ sudo cp /etc/proftpd.conf /etc/proftpd.conf.bak
</code></pre><p>然后，我们可以用自己喜欢的文本编辑器修改配置文件。</p><pre><code>$ sudo vi /etc/proftpd.conf
</code></pre><p>然后，把下面几行附加到我们在第 2 步中所增加内容的后面。</p><pre><code>TLSEngine on
TLSRequired on
TLSProtocol SSLv23
TLSLog /var/log/proftpd/tls.log
TLSRSACertificateFile /etc/pki/tls/certs/proftpd.pem
TLSRSACertificateKeyFile /etc/pki/tls/certs/proftpd.pem
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/tls-configuration.png" alt="打开 TLS 配置"></p><p>完成上面的设定后，保存退出。</p><p>然后，我们需要生成 SSL 凭证 proftpd.pem 并放到 <strong>/etc/pki/tls/certs/</strong> 目录里。这样的话，首先需要在 Fedora 22 上安装 openssl。</p><pre><code>$ sudo dnf install openssl
</code></pre><p>然后，可以通过执行下面的命令生成 SSL 凭证。</p><pre><code>$ sudo openssl req -x509 -nodes -newkey rsa:2048 -keyout /etc/pki/tls/certs/proftpd.pem -out /etc/pki/tls/certs/proftpd.pem
</code></pre><p>系统会询问一些将写入凭证里的基本信息。在填完资料后，就会生成一个 2048 位的 RSA 私钥。</p><pre><code>Generating a 2048 bit RSA private key
...................+++
...................+++
writing new private key to &#39;/etc/pki/tls/certs/proftpd.pem&#39;
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter &#39;.&#39;, the field will be left blank.
-----
Country Name (2 letter code) [XX]:NP
State or Province Name (full name) []:Narayani
Locality Name (eg, city) [Default City]:Bharatpur
Organization Name (eg, company) [Default Company Ltd]:Linoxide
Organizational Unit Name (eg, section) []:Linux Freedom
Common Name (eg, your name or your server&#39;s hostname) []:ftp.linoxide.com
Email Address []:arun@linoxide.com
</code></pre><p>在这之后，我们要改变所生成凭证文件的权限以增加安全性。</p><pre><code>$ sudo chmod 600 /etc/pki/tls/certs/proftpd.pem
</code></pre><h3 id="_5-允许-ftp-通过-firewall" tabindex="-1">5. 允许 FTP 通过 Firewall <a class="header-anchor" href="#_5-允许-ftp-通过-firewall" aria-label="Permalink to “5. 允许 FTP 通过 Firewall”">​</a></h3><p>现在，需要允许 ftp 端口，一般默认被防火墙阻止了。就是说，需要允许 ftp 端口能通过防火墙访问。</p><p>如果 <strong>打开了 TLS/SSL 加密</strong>，执行下面的命令。</p><pre><code>$ sudo firewall-cmd --add-port=1024-65534/tcp
$ sudo firewall-cmd --add-port=1024-65534/tcp --permanent
</code></pre><p>如果 <strong>没有打开 TLS/SSL 加密</strong>，执行下面的命令。</p><pre><code>$ sudo firewall-cmd --permanent --zone=public --add-service=ftp

success
</code></pre><p>然后，重新加载防火墙设定。</p><pre><code>$ sudo firewall-cmd --reload

success
</code></pre><h3 id="_6-启动并激活-proftpd" tabindex="-1">6. 启动并激活 ProFTPD <a class="header-anchor" href="#_6-启动并激活-proftpd" aria-label="Permalink to “6. 启动并激活 ProFTPD”">​</a></h3><p>全部设定好后，最后就是启动 ProFTPD 并试一下。可以运行下面的命令来启动 proftpd ftp 守护程序。</p><pre><code>$ sudo systemctl start proftpd.service
</code></pre><p>然后，我们可以设定开机启动。</p><pre><code>$ sudo systemctl enable proftpd.service

Created symlink from /etc/systemd/system/multi-user.target.wants/proftpd.service to /usr/lib/systemd/system/proftpd.service.
</code></pre><h3 id="_7-登录到-ftp-服务器" tabindex="-1">7. 登录到 FTP 服务器 <a class="header-anchor" href="#_7-登录到-ftp-服务器" aria-label="Permalink to “7. 登录到 FTP 服务器”">​</a></h3><p>现在，如果都是按照本教程设置好的，我们一定可以连接到 ftp 服务器并使用以上设置的信息登录上去。在这里，我们将配置一下 FTP 客户端 filezilla，使用 **服务器的 IP 或名称 **作为主机名，协议选择 <strong>FTP</strong>，用户名填入 <strong>arunftp</strong>，密码是在上面第 3 步中设定的密码。如果你按照第 4 步中的方式打开了 TLS 支持，还需要在加密类型中选择 <strong>要求显式的基于 TLS 的 FTP</strong>，如果没有打开，也不想使用 TLS 加密，那么加密类型选择 <strong>简单 FTP</strong>。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/ftp-login-details.png" alt="FTP 登录细节"></p><p>要做上述设定，需要打开菜单里的文件，点击站点管理器，然后点击新建站点，再按上面的方式设置。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/ftp-ssl-certificate.png" alt="FTP SSL 凭证"></p><p>随后系统会要求允许 SSL 凭证，点确定。之后，就可以从我们的 FTP 服务器上传下载文件和文件夹了。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>最后，我们成功地在 Fedora 22 机器上安装并配置好了 Proftpd FTP 服务器。Proftpd 是一个超级强大，能高度定制和扩展的 FTP 守护软件。上面的教程展示了如何配置一个采用 TLS 加密的安全 FTP 服务器。强烈建议设置 FTP 服务器支持 TLS 加密，因为它允许使用 SSL 凭证加密数据传输和登录。本文中，我们也没有配置 FTP 的匿名访问，因为一般受保护的 FTP 系统不建议这样做。 FTP 访问让人们的上传和下载变得非常简单也更高效。我们还可以改变用户端口增加安全性。好吧，如果你有任何疑问，建议，反馈，请在下面评论区留言，这样我们就能够改善并更新文章内容。谢谢！玩的开心 😃</p><hr>`,64)),n("p",null,[e[7]||(e[7]=t("via: ",-1)),r(o,{href:"http://linoxide.com/linux-how-to/configure-ftp-proftpd-fedora-22/"},{default:p(()=>[...e[6]||(e[6]=[t("http://linoxide.com/linux-how-to/configure-ftp-proftpd-fedora-22/",-1)])]),_:1})]),n("p",null,[e[11]||(e[11]=t("作者：",-1)),r(o,{href:"http://linoxide.com/author/arunp/"},{default:p(()=>[...e[8]||(e[8]=[t("Arun Pyasi",-1)])]),_:1}),e[12]||(e[12]=t(" 译者：",-1)),r(o,{href:"https://github.com/zpl1025"},{default:p(()=>[...e[9]||(e[9]=[t("zpl1025",-1)])]),_:1}),e[13]||(e[13]=t(" 校对：",-1)),r(o,{href:"https://github.com/wxy"},{default:p(()=>[...e[10]||(e[10]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[16]||(e[16]=t("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[14]||(e[14]=[t("LCTT",-1)])]),_:1}),e[17]||(e[17]=t(" 原创翻译，",-1)),r(o,{href:"https://linux.cn/"},{default:p(()=>[...e[15]||(e[15]=[t("Linux中国",-1)])]),_:1}),e[18]||(e[18]=t(" 荣誉推出",-1))])])}const w=d(f,[["render",u]]);export{S as __pageData,w as default};
