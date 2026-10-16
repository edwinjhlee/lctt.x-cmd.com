import{_ as i,a0 as a,w as m,s as d,ao as o,I as t,x as e,a1 as r,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"Linux 下用來查詢安裝包信息的RPM選項 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 下用來查詢安裝包信息的RPM選項 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 下用來查詢安裝包信息的RPM選項 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 下用來查詢安裝包信息的RPM選項 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Options in Linux RPM Command to Query Packages","title":"Linux 下用來查詢安裝包信息的RPM選項","tag":"201311","desc":""},"relativePath":"201311/Options in Linux RPM Command to Query Packages.md","filePath":"[post].md"}'),l={name:"201311/Options in Linux RPM Command to Query Packages.md"};function h(u,s,x,g,f,_){const n=a("Link");return m(),d("div",null,[s[16]||(s[16]=o(`<h1 id="linux-下用來查詢安裝包信息的rpm選項" tabindex="-1">Linux 下用來查詢安裝包信息的RPM選項 <a class="header-anchor" href="#linux-下用來查詢安裝包信息的rpm選項" aria-label="Permalink to “Linux 下用來查詢安裝包信息的RPM選項”">​</a></h1><p>RPM是RedHat的包管理器，用來安裝、卸載、升級和查詢基於RedHat Linux的安裝包。RHEL和基於它的系統使用rpm命令來完成這些功能。以下是一些例子來演示rpm的查詢功能，和展示了用不同的方法來查詢rpm資料庫和還原配置文件。</p><p>我在示例命令中使用SSH包來做説明。</p><h2 id="查詢rpm資料庫和包" tabindex="-1">查詢RPM資料庫和包 <a class="header-anchor" href="#查詢rpm資料庫和包" aria-label="Permalink to “查詢RPM資料庫和包”">​</a></h2><p>###1、 在整個RPM資料庫中查詢，使用下面的命令</p><pre><code># rpm -qa
plymouth-0.8.3-27.el6.x86_64
pciutils-libs-3.1.10-2.el6.i686 
netcf-libs-0.1.9-3.el6.x86_64
..
...
..
Output Truncated
</code></pre><p>###2、 你可以通過grep命令來確定上面的例子中有哪些SSH包已經安裝</p><pre><code># rpm -qa |grep ssh
libssh2-1.4.2-1.el6.x86_64
openssh-askpass-5.3p1-84.1.el6.x86_64
libssh2-1.4.2-1.el6.i686
openssh-server-5.3p1-84.1.el6.x86_64
openssh-clients-5.3p1-84.1.el6.x86_64
openssh-5.3p1-84.1.el6.x86_64
</code></pre><p>輸出顯示了一些關於SSH的包，但是你仍需確定哪個包真正安裝了SSH。為了更近一步，請看下面的示例。</p><p>###3、 檢查已安裝的SSH包 a) 通過sshd守護進程 b) 通過它的配置文件</p><pre><code># rpm -qf /etc/init.d/sshd
openssh-server-5.3p1-84.1.el6.x86_64
# rpm -qf /etc/ssh/sshd_config
openssh-server-5.3p1-84.1.el6.x86_64
</code></pre><p>如你所見，ssh是通過openssh-server-5.3p1-84.1.el6.x86_64包安裝的，你可以在守護進程或者配置文件中使用rpm -qf命令（查詢ssh包所包含的任一文件來查詢）。兩者都會輸出從那個軟件包安裝的。</p><p>###4、 現在你有了包名，你可能想要了解更多，並想要知道包中包含了哪些不同的文件。這種情況下，使用rpm -ql命令</p><pre><code># rpm -ql openssh-server-5.3p1-84.1.el6.x86_64
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
</code></pre><p>上面的輸出顯示了所有該包在系統中安裝的文件。現在讓我們更進一步，我們只想要看到該包提供的配置文件和文檔。</p><p>###5、 只列出其中的配置文件，使用rpm -qc命令</p><pre><code># rpm -qc openssh-server-5.3p1-84.1.el6.x86_64
/etc/pam.d/ssh-keycat
/etc/pam.d/sshd
/etc/ssh/sshd_config
/etc/sysconfig/sshd
</code></pre><p>###6、 只列出其中的幫助文檔，使用rpm -qd命令</p><pre><code># rpm -qd openssh-server-5.3p1-84.1.el6.x86_64
/usr/share/doc/openssh-server-5.3p1/HOWTO.ssh-keycat
/usr/share/man/man5/moduli.5.gz
/usr/share/man/man5/sshd_config.5.gz
/usr/share/man/man8/sftp-server.8.gz
/usr/share/man/man8/sshd.8.gz
</code></pre><p>考慮一種情況，你想要配置一個服務，但是你不知道哪裏找到配置文件。舉例來説，如上面的例子：使用<strong>rpm -qf rpm -qf /etc/init.d/sshd</strong>來找出 <strong>/etc/ssh/sshd_config</strong>這個文件源於哪個包。這應該會給你顯示<strong>openssh-server-5.3p1-84.1.el6.x86_64</strong>包。使用<strong>rpm -ql openssh-server-5.3p1-84.1.el6.x86_64</strong>來顯示包中所含的所有文件。如你所見，許多文件名顯示了出來，但是輸出並不很有用。</p>`,20)),t("p",null,[s[1]||(s[1]=e("現在使用",-1)),s[2]||(s[2]=t("strong",null,"rpm -qc openssh-server-5.3p1-84.1.el6.x86_64",-1)),s[3]||(s[3]=e(" 來只顯示這個包的配置文件。這隻會顯示4個文件並給出了",-1)),r(n,{href:"http://www.linoxide.com/how-tos/disable-ssh-direct-login/"},{default:p(()=>[...s[0]||(s[0]=[e("/etc/ssh/sshd_config file",-1)])]),_:1}),s[4]||(s[4]=e("的絕對路徑，可以用來開始配置服務。",-1))]),s[17]||(s[17]=o("<p>###7、 從PRM包還原配置文件，而不重新安裝包。</p><p>如果由於一些原因文件損壞或者從系統中刪除了，你可以以<strong>rpm -qf</strong>開頭來找出文件存在於哪個包。接下來使用<strong>rpm2cpio | cpio -idmv</strong>來從包中解壓出文件。用ssh的例子。</p><p>假設<strong>/etc/ssh/sshd_config</strong>文件已經刪除並且你不希望重裝ssh，按以下步驟來還原文件。</p><ul><li>使用rpm -qf /etc/init.d/sshd 這個命令會顯示文件來自於openssh-server-5.3p1-84.1.el6.x86_64包。</li><li>從它的源中下載Openssh的rpm包。</li><li>複製openssh-server-5.3p1-84.1.el6.x86_64包到/tmp目錄或者其他任何你選擇的目錄。</li><li>使用rpm2cpio |cpio -idmv解壓包。</li></ul><p>上面步驟中你使用的命令會在/tmp下面創建一個子目錄。你現在可以複製到它的原始目錄。</p><hr>",6)),t("p",null,[s[6]||(s[6]=e("via: ",-1)),r(n,{href:"http://linoxide.com/linux-command/rpm-command-query/"},{default:p(()=>[...s[5]||(s[5]=[e("http://linoxide.com/linux-command/rpm-command-query/",-1)])]),_:1})]),t("p",null,[s[9]||(s[9]=e("譯者：",-1)),r(n,{href:"https://github.com/geekpi"},{default:p(()=>[...s[7]||(s[7]=[e("geekpi",-1)])]),_:1}),s[10]||(s[10]=e(" 校對：",-1)),r(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[8]||(s[8]=[e("wxy",-1)])]),_:1})]),t("p",null,[s[13]||(s[13]=e("本文由 ",-1)),r(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[11]||(s[11]=[e("LCTT",-1)])]),_:1}),s[14]||(s[14]=e(" 原創翻譯，",-1)),r(n,{href:"http://linux.cn/"},{default:p(()=>[...s[12]||(s[12]=[e("Linux中國",-1)])]),_:1}),s[15]||(s[15]=e(" 榮譽推出",-1))])])}const v=i(l,[["render",h]]);export{P as __pageData,v as default};
