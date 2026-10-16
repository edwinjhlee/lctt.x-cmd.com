import{_ as a,a0 as l,w as d,s as i,ao as r,I as n,x as t,a1 as o,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const h=JSON.parse('{"title":"在openSUSE 13.1中配置FTP服务器 | LCTT x X-CMD","titleTemplate":false,"description":"在openSUSE 13.1中配置FTP服务器 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在openSUSE 13.1中配置FTP服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在openSUSE 13.1中配置FTP服务器 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Setup FTP Server On openSUSE 13.1","title":"在openSUSE 13.1中配置FTP服务器","tag":"201312","desc":""},"relativePath":"201312/Setup FTP Server On openSUSE 13.1.md","filePath":"[post].md"}'),f={name:"201312/Setup FTP Server On openSUSE 13.1.md"};function u(c,e,m,T,S,g){const p=l("Link");return d(),i("div",null,[e[16]||(e[16]=r(`<h1 id="在opensuse-13-1中配置ftp服务器" tabindex="-1">在openSUSE 13.1中配置FTP服务器 <a class="header-anchor" href="#在opensuse-13-1中配置ftp服务器" aria-label="Permalink to “在openSUSE 13.1中配置FTP服务器”">​</a></h1><p><strong>vsftpd</strong> （ <strong>非常安全的文件传输协议守护进程</strong>） 是Unix/Linux系统中的一个安全快速的FTP服务器。 在这篇指导教程中，让我们看看在openSUSE 13.1中怎样使用vsftpd来配置一个基本的FTP服务器。</p><h3 id="安装-vsftpd" tabindex="-1">安装 vsftpd <a class="header-anchor" href="#安装-vsftpd" aria-label="Permalink to “安装 vsftpd”">​</a></h3><p>作为root用户登录然后输入以下命令。</p><pre><code># zypper in vsftpd
</code></pre><p>启动 vsftpd 服务然后通过设置使它在每次系统重启时自动启动。</p><pre><code># systemctl enable vsftpd.service
# systemctl start vsftpd.service
</code></pre><h3 id="配置-vsftpd" tabindex="-1">配置 vsftpd <a class="header-anchor" href="#配置-vsftpd" aria-label="Permalink to “配置 vsftpd”">​</a></h3><p>为ftp用户新建一个文件夹。</p><pre><code># mkdir /srv/ftp
</code></pre><p>创建一个名为 <strong>ftp-users</strong> 的组。</p><pre><code># groupadd ftp-users
</code></pre><p>让我们来创建一个叫unixmen的示例用户 并设置其主目录为 <strong>/srv/ftp</strong> 组为 <strong>ftp-users</strong> 。</p><pre><code># useradd -g ftp-users -d /srv/ftp/ unixmen
</code></pre><p>为新用户设置密码。</p><pre><code># passwd unixmen
</code></pre><p>使ftp主目录 <strong>/srv/ftp/</strong> 可以被ftp用户所访问。</p><pre><code># chmod 750 /srv/ftp/
# chown unixmen:ftp-users /srv/ftp/
</code></pre><p>编辑 vsftpd.conf 文件</p><pre><code># nano /etc/vsftpd.conf
</code></pre><p>设置如下的更改。</p><pre><code>[...]
#Uncomment and  Set YES to enable write.
write_enable=YES
[...]
# Uncomment and Set banner name for your website
ftpd_banner=Welcome to Unixmen FTP service.
[...]
# Uncomment
ls_recurse_enable=YES
[...]
# Uncomment and set YES to allow local users to log in.
local_enable=YES
[...]
# To disable anonymous access, set NO.
anonymous_enable=NO
[...]
# Uncomment to enable ascii download and upload.
ascii_upload_enable=YES
ascii_download_enable=YES
[...]
## Add at the end of this  file ##
use_localtime=YES
</code></pre><p>保存并退出文件。</p><h3 id="测试本地ftp服务器" tabindex="-1">测试本地FTP服务器 <a class="header-anchor" href="#测试本地ftp服务器" aria-label="Permalink to “测试本地FTP服务器”">​</a></h3><p>首先 让我们按如下步骤尝试登录FTP服务器</p><pre><code># ftp localhost
Trying ::1:21 ...
Connected to localhost.
220 (vsFTPd 3.0.2)
Name (localhost:root): unixmen
331 Please specify the password.
Password: 
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp&gt;
</code></pre><p>正如你在上面所输出的那样, 我们能够用unixmen用户登录到ftp服务器。</p><h3 id="测试远程ftp服务器" tabindex="-1">测试远程FTP服务器 <a class="header-anchor" href="#测试远程ftp服务器" aria-label="Permalink to “测试远程FTP服务器”">​</a></h3><p>默认 openSUSE 内置的防火墙不允许远程系统登录FTP。所以让我们允许vsftpd服务通过suse的防火墙。然后我们需要打开： <strong>Yast -&gt; 安全性与用户 -&gt; 防火墙</strong>.</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/11/openSUSE-12.3-Running-Oracle-VM-VirtualBox_001.jpg" alt=""></p><p>在防火墙界面，进入 <strong>允许服务</strong>. 在区域选择下拉框中，选择 <strong>外部区域</strong> 在服务允许下拉框中，选择 <strong>vsftpd 服务器</strong> 然后点击添加。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/11/openSUSE-12.3-Running-Oracle-VM-VirtualBox_004.jpg" alt=""></p><p>单击下一步并关闭Yast控制中心</p><p>现在尝试从远程系统连接FTP。</p><p>我试着从我的ubuntu桌面系统登录FTP服务器。</p><pre><code>sk@sk:~$ ftp 192.168.1.53
Connected to 192.168.1.53.
220 (vsFTPd 3.0.2)
Name (192.168.1.53:sk): unixmen
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp&gt;
</code></pre><p>正如你在上面输出中所看到的，我能够连接到ftp服务器。如果不允许vsftpd服务通过防火墙，你将会得到一个连接超时的报错。</p><h3 id="从浏览器连接" tabindex="-1">从浏览器连接 <a class="header-anchor" href="#从浏览器连接" aria-label="Permalink to “从浏览器连接”">​</a></h3>`,38)),n("p",null,[e[1]||(e[1]=t("打开你的浏览器并导航到**",-1)),o(p,{href:"ftp://ip-address/**%E3%80%82%E8%BE%93%E5%85%A5ftp%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E5%AF%86%E7%A0%81%E3%80%82"},{default:s(()=>[...e[0]||(e[0]=[t("ftp://ip-address/**。输入ftp用户名和密码。",-1)])]),_:1})]),e[17]||(e[17]=n("p",null,[n("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2013/11/Index-of-ftp-192.168.1.53-Mozilla-Firefox_005.jpg",alt:""})],-1)),e[18]||(e[18]=n("h3",{id:"使用filezilla连接到ftp服务器",tabindex:"-1"},[t("使用FileZilla连接到FTP服务器 "),n("a",{class:"header-anchor",href:"#使用filezilla连接到ftp服务器","aria-label":"Permalink to “使用FileZilla连接到FTP服务器”"},"​")],-1)),n("p",null,[e[3]||(e[3]=t("对于新手来说，在命令行模式下工作可能会很烦恼。所以让我们来安装一个叫",-1)),o(p,{href:"https://filezilla-project.org/"},{default:s(()=>[...e[2]||(e[2]=[n("strong",null,"Filezilla",-1)])]),_:1}),e[4]||(e[4]=t("的图形化的FTP客户端。它可以让我们登陆FTP变得更加简单:",-1))]),e[19]||(e[19]=r(`<p>几乎所有的发行版在它们的官方软件仓库中都有filezilla客户端。 为了在基于Linux的系统上安装filezilla 需要键入以下的命令:</p><p>在基于Ubuntu的系统中:</p><pre><code>$ sudo apt-get install filezilla
</code></pre><p>在Fedora/Redhat系统中:</p><pre><code>$ sudo yum install filezilla
</code></pre><p>在openSUSE中:</p><pre><code># zypper in filezilla
</code></pre><p>安装完fielzilla后打开它。输入ftp服务器的IP地址、用户名和密码，然后点击快速连接。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/11/unixmen@192.168.1.53-FileZilla_006.jpg" alt=""></p><p>为了增加安全性，你可以通过将用户添加到 <strong>/etc/vsftpd.chroot_list</strong>文件中来限制特定用户对FTP服务器的访问。</p><p>编辑 vsftpd.conf 文件,</p><pre><code>nano /etc/vsftpd.conf
</code></pre><p>设置如下的更改.</p><pre><code>[...]
# Uncomment and set YES
chroot_local_user=YES
chroot_list_enable=YES
chroot_list_file=/etc/vsftpd.chroot_list
[...]
</code></pre><p>创建 <strong>文件 /etc/vsftpd.chroot_list</strong>,</p><pre><code>nano /etc/vsftpd.chroot_list
</code></pre><p>添加你希望能够访问FTP服务器的用户。我添加了用户<strong>unixmen</strong>。</p><pre><code>unixmen
</code></pre><p>重启ftp服务.</p><pre><code># systemctl restart vsftpd.service
</code></pre><p>现在你能够使用chroot_list文件中列出的用户来连接到FTP服务器。</p><p>如果chroot_list以外的用户想访问FTP服务器，他们将得到如下错误提示。</p><pre><code>500 OOPS: could not read chroot() list file:/etc/vsftpd.chroot_list
ftp: Login failed
</code></pre><p>就是现在这样，你的FTP服务器已经可以使用了，好好享受吧!</p><hr>`,25)),n("p",null,[e[6]||(e[6]=t("via: ",-1)),o(p,{href:"http://www.unixmen.com/setup-ftp-server-opensuse-13-1/"},{default:s(()=>[...e[5]||(e[5]=[t("http://www.unixmen.com/setup-ftp-server-opensuse-13-1/",-1)])]),_:1})]),n("p",null,[e[9]||(e[9]=t("译者：",-1)),o(p,{href:"https://github.com/%E8%AF%91%E8%80%85ID"},{default:s(()=>[...e[7]||(e[7]=[t("zsJacky",-1)])]),_:1}),e[10]||(e[10]=t(" 校对：",-1)),o(p,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...e[8]||(e[8]=[t("Caroline",-1)])]),_:1})]),n("p",null,[e[13]||(e[13]=t("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[11]||(e[11]=[t("LCTT",-1)])]),_:1}),e[14]||(e[14]=t(" 原创翻译，",-1)),o(p,{href:"http://linux.cn/"},{default:s(()=>[...e[12]||(e[12]=[t("Linux中国",-1)])]),_:1}),e[15]||(e[15]=t(" 荣誉推出",-1))])])}const E=a(f,[["render",u]]);export{h as __pageData,E as default};
