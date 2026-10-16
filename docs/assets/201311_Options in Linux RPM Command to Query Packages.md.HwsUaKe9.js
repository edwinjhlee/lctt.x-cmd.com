import{_ as i,a0 as a,w as m,s as d,ao as o,I as t,x as e,a1 as r,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"Linux 下用来查询安装包信息的RPM选项 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 下用来查询安装包信息的RPM选项 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 下用来查询安装包信息的RPM选项 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 下用来查询安装包信息的RPM选项 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Options in Linux RPM Command to Query Packages","title":"Linux 下用来查询安装包信息的RPM选项","tag":"201311","desc":""},"relativePath":"201311/Options in Linux RPM Command to Query Packages.md","filePath":"[post].md"}'),l={name:"201311/Options in Linux RPM Command to Query Packages.md"};function h(u,s,x,g,f,_){const n=a("Link");return m(),d("div",null,[s[16]||(s[16]=o(`<h1 id="linux-下用来查询安装包信息的rpm选项" tabindex="-1">Linux 下用来查询安装包信息的RPM选项 <a class="header-anchor" href="#linux-下用来查询安装包信息的rpm选项" aria-label="Permalink to “Linux 下用来查询安装包信息的RPM选项”">​</a></h1><p>RPM是RedHat的包管理器，用来安装、卸载、升级和查询基于RedHat Linux的安装包。RHEL和基于它的系统使用rpm命令来完成这些功能。以下是一些例子来演示rpm的查询功能，和展示了用不同的方法来查询rpm数据库和还原配置文件。</p><p>我在示例命令中使用SSH包来做说明。</p><h2 id="查询rpm数据库和包" tabindex="-1">查询RPM数据库和包 <a class="header-anchor" href="#查询rpm数据库和包" aria-label="Permalink to “查询RPM数据库和包”">​</a></h2><p>###1、 在整个RPM数据库中查询，使用下面的命令</p><pre><code># rpm -qa
plymouth-0.8.3-27.el6.x86_64
pciutils-libs-3.1.10-2.el6.i686 
netcf-libs-0.1.9-3.el6.x86_64
..
...
..
Output Truncated
</code></pre><p>###2、 你可以通过grep命令来确定上面的例子中有哪些SSH包已经安装</p><pre><code># rpm -qa |grep ssh
libssh2-1.4.2-1.el6.x86_64
openssh-askpass-5.3p1-84.1.el6.x86_64
libssh2-1.4.2-1.el6.i686
openssh-server-5.3p1-84.1.el6.x86_64
openssh-clients-5.3p1-84.1.el6.x86_64
openssh-5.3p1-84.1.el6.x86_64
</code></pre><p>输出显示了一些关于SSH的包，但是你仍需确定哪个包真正安装了SSH。为了更近一步，请看下面的示例。</p><p>###3、 检查已安装的SSH包 a) 通过sshd守护进程 b) 通过它的配置文件</p><pre><code># rpm -qf /etc/init.d/sshd
openssh-server-5.3p1-84.1.el6.x86_64
# rpm -qf /etc/ssh/sshd_config
openssh-server-5.3p1-84.1.el6.x86_64
</code></pre><p>如你所见，ssh是通过openssh-server-5.3p1-84.1.el6.x86_64包安装的，你可以在守护进程或者配置文件中使用rpm -qf命令（查询ssh包所包含的任一文件来查询）。两者都会输出从那个软件包安装的。</p><p>###4、 现在你有了包名，你可能想要了解更多，并想要知道包中包含了哪些不同的文件。这种情况下，使用rpm -ql命令</p><pre><code># rpm -ql openssh-server-5.3p1-84.1.el6.x86_64
/etc/pam.d/ssh-keycat
/etc/pam.d/sshd
/etc/rc.d/init.d/sshd
/etc/ssh/sshd_config
/etc/sysconfig/sshd
/usr/libexec/openssh/sftp-server
/usr/libexec/openssh/ssh-keycat
/usr/sbin/.sshd.hmac
/usr/sbin/sshd
/usr/share/doc/openssh-server-5.3p1
/usr/share/doc/openssh-server-5.3p1/HOWTO.ssh-keycat
/usr/share/man/man5/moduli.5.gz
/usr/share/man/man5/sshd_config.5.gz
/usr/share/man/man8/sftp-server.8.gz
/usr/share/man/man8/sshd.8.gz
/var/empty/sshd
</code></pre><p>上面的输出显示了所有该包在系统中安装的文件。现在让我们更进一步，我们只想要看到该包提供的配置文件和文档。</p><p>###5、 只列出其中的配置文件，使用rpm -qc命令</p><pre><code># rpm -qc openssh-server-5.3p1-84.1.el6.x86_64
/etc/pam.d/ssh-keycat
/etc/pam.d/sshd
/etc/ssh/sshd_config
/etc/sysconfig/sshd
</code></pre><p>###6、 只列出其中的帮助文档，使用rpm -qd命令</p><pre><code># rpm -qd openssh-server-5.3p1-84.1.el6.x86_64
/usr/share/doc/openssh-server-5.3p1/HOWTO.ssh-keycat
/usr/share/man/man5/moduli.5.gz
/usr/share/man/man5/sshd_config.5.gz
/usr/share/man/man8/sftp-server.8.gz
/usr/share/man/man8/sshd.8.gz
</code></pre><p>考虑一种情况，你想要配置一个服务，但是你不知道哪里找到配置文件。举例来说，如上面的例子：使用<strong>rpm -qf rpm -qf /etc/init.d/sshd</strong>来找出 <strong>/etc/ssh/sshd_config</strong>这个文件源于哪个包。这应该会给你显示<strong>openssh-server-5.3p1-84.1.el6.x86_64</strong>包。使用<strong>rpm -ql openssh-server-5.3p1-84.1.el6.x86_64</strong>来显示包中所含的所有文件。如你所见，许多文件名显示了出来，但是输出并不很有用。</p>`,20)),t("p",null,[s[1]||(s[1]=e("现在使用",-1)),s[2]||(s[2]=t("strong",null,"rpm -qc openssh-server-5.3p1-84.1.el6.x86_64",-1)),s[3]||(s[3]=e(" 来只显示这个包的配置文件。这只会显示4个文件并给出了",-1)),r(n,{href:"http://www.linoxide.com/how-tos/disable-ssh-direct-login/"},{default:p(()=>[...s[0]||(s[0]=[e("/etc/ssh/sshd_config file",-1)])]),_:1}),s[4]||(s[4]=e("的绝对路径，可以用来开始配置服务。",-1))]),s[17]||(s[17]=o("<p>###7、 从PRM包还原配置文件，而不重新安装包。</p><p>如果由于一些原因文件损坏或者从系统中删除了，你可以以<strong>rpm -qf</strong>开头来找出文件存在于哪个包。接下来使用<strong>rpm2cpio | cpio -idmv</strong>来从包中解压出文件。用ssh的例子。</p><p>假设<strong>/etc/ssh/sshd_config</strong>文件已经删除并且你不希望重装ssh，按以下步骤来还原文件。</p><ul><li>使用rpm -qf /etc/init.d/sshd 这个命令会显示文件来自于openssh-server-5.3p1-84.1.el6.x86_64包。</li><li>从它的源中下载Openssh的rpm包。</li><li>复制openssh-server-5.3p1-84.1.el6.x86_64包到/tmp目录或者其他任何你选择的目录。</li><li>使用rpm2cpio |cpio -idmv解压包。</li></ul><p>上面步骤中你使用的命令会在/tmp下面创建一个子目录。你现在可以复制到它的原始目录。</p><hr>",6)),t("p",null,[s[6]||(s[6]=e("via: ",-1)),r(n,{href:"http://linoxide.com/linux-command/rpm-command-query/"},{default:p(()=>[...s[5]||(s[5]=[e("http://linoxide.com/linux-command/rpm-command-query/",-1)])]),_:1})]),t("p",null,[s[9]||(s[9]=e("译者：",-1)),r(n,{href:"https://github.com/geekpi"},{default:p(()=>[...s[7]||(s[7]=[e("geekpi",-1)])]),_:1}),s[10]||(s[10]=e(" 校对：",-1)),r(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[8]||(s[8]=[e("wxy",-1)])]),_:1})]),t("p",null,[s[13]||(s[13]=e("本文由 ",-1)),r(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[11]||(s[11]=[e("LCTT",-1)])]),_:1}),s[14]||(s[14]=e(" 原创翻译，",-1)),r(n,{href:"http://linux.cn/"},{default:p(()=>[...s[12]||(s[12]=[e("Linux中国",-1)])]),_:1}),s[15]||(s[15]=e(" 荣誉推出",-1))])])}const v=i(l,[["render",h]]);export{P as __pageData,v as default};
