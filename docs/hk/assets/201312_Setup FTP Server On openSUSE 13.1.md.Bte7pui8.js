import{_ as a,a0 as l,w as d,s as i,ao as r,I as n,x as t,a1 as o,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"在openSUSE 13.1中配置FTP服務器 | LCTT x X-CMD","titleTemplate":false,"description":"在openSUSE 13.1中配置FTP服務器 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在openSUSE 13.1中配置FTP服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在openSUSE 13.1中配置FTP服務器 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Setup FTP Server On openSUSE 13.1","title":"在openSUSE 13.1中配置FTP服務器","tag":"201312","desc":""},"relativePath":"201312/Setup FTP Server On openSUSE 13.1.md","filePath":"[post].md"}'),f={name:"201312/Setup FTP Server On openSUSE 13.1.md"};function u(c,e,m,T,S,g){const p=l("Link");return d(),i("div",null,[e[16]||(e[16]=r(`<h1 id="在opensuse-13-1中配置ftp服務器" tabindex="-1">在openSUSE 13.1中配置FTP服務器 <a class="header-anchor" href="#在opensuse-13-1中配置ftp服務器" aria-label="Permalink to “在openSUSE 13.1中配置FTP服務器”">​</a></h1><p><strong>vsftpd</strong> （ <strong>非常安全的文件傳輸協議守護進程</strong>） 是Unix/Linux系統中的一個安全快速的FTP服務器。 在這篇指導教程中，讓我們看看在openSUSE 13.1中怎樣使用vsftpd來配置一個基本的FTP服務器。</p><h3 id="安裝-vsftpd" tabindex="-1">安裝 vsftpd <a class="header-anchor" href="#安裝-vsftpd" aria-label="Permalink to “安裝 vsftpd”">​</a></h3><p>作為root用户登錄然後輸入以下命令。</p><pre><code># zypper in vsftpd
</code></pre><p>啓動 vsftpd 服務然後通過設置使它在每次系統重啓時自動啓動。</p><pre><code># systemctl enable vsftpd.service
# systemctl start vsftpd.service
</code></pre><h3 id="配置-vsftpd" tabindex="-1">配置 vsftpd <a class="header-anchor" href="#配置-vsftpd" aria-label="Permalink to “配置 vsftpd”">​</a></h3><p>為ftp用户新建一個文件夾。</p><pre><code># mkdir /srv/ftp
</code></pre><p>創建一個名為 <strong>ftp-users</strong> 的組。</p><pre><code># groupadd ftp-users
</code></pre><p>讓我們來創建一個叫unixmen的示例用户 並設置其主目錄為 <strong>/srv/ftp</strong> 組為 <strong>ftp-users</strong> 。</p><pre><code># useradd -g ftp-users -d /srv/ftp/ unixmen
</code></pre><p>為新用户設置密碼。</p><pre><code># passwd unixmen
</code></pre><p>使ftp主目錄 <strong>/srv/ftp/</strong> 可以被ftp用户所訪問。</p><pre><code># chmod 750 /srv/ftp/
# chown unixmen:ftp-users /srv/ftp/
</code></pre><p>編輯 vsftpd.conf 文件</p><pre><code># nano /etc/vsftpd.conf
</code></pre><p>設置如下的更改。</p><pre><code>[...]
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
</code></pre><p>保存並退出文件。</p><h3 id="測試本地ftp服務器" tabindex="-1">測試本地FTP服務器 <a class="header-anchor" href="#測試本地ftp服務器" aria-label="Permalink to “測試本地FTP服務器”">​</a></h3><p>首先 讓我們按如下步驟嘗試登錄FTP服務器</p><pre><code># ftp localhost
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
</code></pre><p>正如你在上面所輸出的那樣, 我們能夠用unixmen用户登錄到ftp服務器。</p><h3 id="測試遠程ftp服務器" tabindex="-1">測試遠程FTP服務器 <a class="header-anchor" href="#測試遠程ftp服務器" aria-label="Permalink to “測試遠程FTP服務器”">​</a></h3><p>默認 openSUSE 內置的防火牆不允許遠程系統登錄FTP。所以讓我們允許vsftpd服務通過suse的防火牆。然後我們需要打開： <strong>Yast -&gt; 安全性與用户 -&gt; 防火牆</strong>.</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/11/openSUSE-12.3-Running-Oracle-VM-VirtualBox_001.jpg" alt=""></p><p>在防火牆界面，進入 <strong>允許服務</strong>. 在區域選擇下拉框中，選擇 <strong>外部區域</strong> 在服務允許下拉框中，選擇 <strong>vsftpd 服務器</strong> 然後點擊添加。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/11/openSUSE-12.3-Running-Oracle-VM-VirtualBox_004.jpg" alt=""></p><p>單擊下一步並關閉Yast控制中心</p><p>現在嘗試從遠程系統連接FTP。</p><p>我試着從我的ubuntu桌面系統登錄FTP服務器。</p><pre><code>sk@sk:~$ ftp 192.168.1.53
Connected to 192.168.1.53.
220 (vsFTPd 3.0.2)
Name (192.168.1.53:sk): unixmen
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp&gt;
</code></pre><p>正如你在上面輸出中所看到的，我能夠連接到ftp服務器。如果不允許vsftpd服務通過防火牆，你將會得到一個連接超時的報錯。</p><h3 id="從瀏覽器連接" tabindex="-1">從瀏覽器連接 <a class="header-anchor" href="#從瀏覽器連接" aria-label="Permalink to “從瀏覽器連接”">​</a></h3>`,38)),n("p",null,[e[1]||(e[1]=t("打開你的瀏覽器並導航到**",-1)),o(p,{href:"ftp://ip-address/**%E3%80%82%E8%BC%B8%E5%85%A5ftp%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E5%AF%86%E7%A2%BC%E3%80%82"},{default:s(()=>[...e[0]||(e[0]=[t("ftp://ip-address/**。輸入ftp用户名和密碼。",-1)])]),_:1})]),e[17]||(e[17]=n("p",null,[n("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2013/11/Index-of-ftp-192.168.1.53-Mozilla-Firefox_005.jpg",alt:""})],-1)),e[18]||(e[18]=n("h3",{id:"使用filezilla連接到ftp服務器",tabindex:"-1"},[t("使用FileZilla連接到FTP服務器 "),n("a",{class:"header-anchor",href:"#使用filezilla連接到ftp服務器","aria-label":"Permalink to “使用FileZilla連接到FTP服務器”"},"​")],-1)),n("p",null,[e[3]||(e[3]=t("對於新手來説，在命令列模式下工作可能會很煩惱。所以讓我們來安裝一個叫",-1)),o(p,{href:"https://filezilla-project.org/"},{default:s(()=>[...e[2]||(e[2]=[n("strong",null,"Filezilla",-1)])]),_:1}),e[4]||(e[4]=t("的圖形化的FTP客户端。它可以讓我們登陸FTP變得更加簡單:",-1))]),e[19]||(e[19]=r(`<p>幾乎所有的發行版在它們的官方軟件倉庫中都有filezilla客户端。 為了在基於Linux的系統上安裝filezilla 需要鍵入以下的命令:</p><p>在基於Ubuntu的系統中:</p><pre><code>$ sudo apt-get install filezilla
</code></pre><p>在Fedora/Redhat系統中:</p><pre><code>$ sudo yum install filezilla
</code></pre><p>在openSUSE中:</p><pre><code># zypper in filezilla
</code></pre><p>安裝完fielzilla後打開它。輸入ftp服務器的IP地址、用户名和密碼，然後點擊快速連接。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/11/unixmen@192.168.1.53-FileZilla_006.jpg" alt=""></p><p>為了增加安全性，你可以通過將用户添加到 <strong>/etc/vsftpd.chroot_list</strong>文件中來限制特定用户對FTP服務器的訪問。</p><p>編輯 vsftpd.conf 文件,</p><pre><code>nano /etc/vsftpd.conf
</code></pre><p>設置如下的更改.</p><pre><code>[...]
# Uncomment and set YES
chroot_local_user=YES
chroot_list_enable=YES
chroot_list_file=/etc/vsftpd.chroot_list
[...]
</code></pre><p>創建 <strong>文件 /etc/vsftpd.chroot_list</strong>,</p><pre><code>nano /etc/vsftpd.chroot_list
</code></pre><p>添加你希望能夠訪問FTP服務器的用户。我添加了用户<strong>unixmen</strong>。</p><pre><code>unixmen
</code></pre><p>重啓ftp服務.</p><pre><code># systemctl restart vsftpd.service
</code></pre><p>現在你能夠使用chroot_list文件中列出的用户來連接到FTP服務器。</p><p>如果chroot_list以外的用户想訪問FTP服務器，他們將得到如下錯誤提示。</p><pre><code>500 OOPS: could not read chroot() list file:/etc/vsftpd.chroot_list
ftp: Login failed
</code></pre><p>就是現在這樣，你的FTP服務器已經可以使用了，好好享受吧!</p><hr>`,25)),n("p",null,[e[6]||(e[6]=t("via: ",-1)),o(p,{href:"http://www.unixmen.com/setup-ftp-server-opensuse-13-1/"},{default:s(()=>[...e[5]||(e[5]=[t("http://www.unixmen.com/setup-ftp-server-opensuse-13-1/",-1)])]),_:1})]),n("p",null,[e[9]||(e[9]=t("譯者：",-1)),o(p,{href:"https://github.com/%E8%AD%AF%E8%80%85ID"},{default:s(()=>[...e[7]||(e[7]=[t("zsJacky",-1)])]),_:1}),e[10]||(e[10]=t(" 校對：",-1)),o(p,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...e[8]||(e[8]=[t("Caroline",-1)])]),_:1})]),n("p",null,[e[13]||(e[13]=t("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[11]||(e[11]=[t("LCTT",-1)])]),_:1}),e[14]||(e[14]=t(" 原創翻譯，",-1)),o(p,{href:"http://linux.cn/"},{default:s(()=>[...e[12]||(e[12]=[t("Linux中國",-1)])]),_:1}),e[15]||(e[15]=t(" 榮譽推出",-1))])])}const E=a(f,[["render",u]]);export{h as __pageData,E as default};
