import{_ as d,a0 as a,w as i,s as l,I as n,x as t,a1 as r,A as p,ao as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"如何在 Fedora 22 上配置 Proftpd 服務器 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Fedora 22 上配置 Proftpd 服務器 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Fedora 22 上配置 Proftpd 服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Fedora 22 上配置 Proftpd 服務器 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150717 Howto Configure FTP Server with Proftpd on Fedora 22","title":"如何在 Fedora 22 上配置 Proftpd 服務器","tag":"201508","desc":""},"relativePath":"201508/20150717 Howto Configure FTP Server with Proftpd on Fedora 22.md","filePath":"[post].md"}'),f={name:"201508/20150717 Howto Configure FTP Server with Proftpd on Fedora 22.md"};function u(c,e,P,T,m,g){const o=a("Link");return i(),l("div",null,[e[19]||(e[19]=n("h1",{id:"如何在-fedora-22-上配置-proftpd-服務器",tabindex:"-1"},[t("如何在 Fedora 22 上配置 Proftpd 服務器 "),n("a",{class:"header-anchor",href:"#如何在-fedora-22-上配置-proftpd-服務器","aria-label":"Permalink to “如何在 Fedora 22 上配置 Proftpd 服務器”"},"​")],-1)),n("p",null,[e[1]||(e[1]=t("在本文中，我們將瞭解如何在運行 Fedora 22 的電腦或服務器上使用 Proftpd 架設 FTP 服務器。",-1)),r(o,{href:"http://www.proftpd.org/"},{default:p(()=>[...e[0]||(e[0]=[t("ProFTPD",-1)])]),_:1}),e[2]||(e[2]=t(" 是一款基於 GPL 授權的自由開源 FTP 服務器軟件，是 Linux 上的主流 FTP 服務器。它的主要設計目標是提供許多高級功能以及給用户提供豐富的配置選項以輕鬆實現定製。它具備許多在其他一些 FTP 服務器軟件裏仍然沒有的配置選項。最初它是被開發作為 wu-ftpd 服務器的一個更安全更容易配置的替代。",-1))]),n("p",null,[e[4]||(e[4]=t("FTP 服務器是這樣一個軟件，用户可以通過 FTP 客户端從安裝了它的遠端服務器上傳或下載文件和目錄。下面是一些 ProFTPD 服務器的主要功能，更詳細的資料可以訪問 ",-1)),r(o,{href:"http://www.proftpd.org/features.html"},{default:p(()=>[...e[3]||(e[3]=[t("http://www.proftpd.org/features.html",-1)])]),_:1}),e[5]||(e[5]=t("。",-1))]),e[20]||(e[20]=s(`<ul><li>每個目錄都可以包含 &quot;.ftpaccess&quot; 文件用於訪問控制，類似 Apache 的 &quot;.htaccess&quot;</li><li>支持多個虛擬 FTP 服務器以及多用户登錄和匿名 FTP 服務。</li><li>可以作為獨立進程啓動服務或者通過 inetd/xinetd 啓動</li><li>它的文件/目錄屬性、屬主和權限是基於 UNIX 方式的。</li><li>它可以獨立運行，保護系統避免 root 訪問可能帶來的損壞。</li><li>模組化的設計讓它可以輕鬆擴展其他模組，比如 LDAP 服務器，SSL/TLS 加密，RADIUS 支持，等等。</li><li>ProFTPD 服務器還支持 IPv6.</li></ul><p>下面是如何在運行 Fedora 22 操作系統的計算機上使用 ProFTPD 架設 FTP 服務器的一些簡單步驟。</p><h3 id="_1-安裝-proftpd" tabindex="-1">1. 安裝 ProFTPD <a class="header-anchor" href="#_1-安裝-proftpd" aria-label="Permalink to “1. 安裝 ProFTPD”">​</a></h3><p>首先，我們將在運行 Fedora 22 的機器上安裝 Proftpd 軟件。因為 yum 包管理器已經被拋棄了，我們將使用最新最好的包管理器 dnf。DNF 很容易使用，是 Fedora 22 上採用的非常人性化的包管理器。我們將用它來安裝 proftpd 軟件。這需要在終端或控制台裏用 sudo 模式運行下面的命令。</p><pre><code>$ sudo dnf -y install proftpd proftpd-utils
</code></pre><h3 id="_2-配置-proftpd" tabindex="-1">2. 配置 ProFTPD <a class="header-anchor" href="#_2-配置-proftpd" aria-label="Permalink to “2. 配置 ProFTPD”">​</a></h3><p>現在，我們將修改軟件的一些配置。要配置它，我們需要用文本編輯器編輯 /etc/proftpd.conf 文件。<strong>/etc/proftpd.conf</strong> 文件是 ProFTPD 軟件的主要配置文件，所以，這個文件的任何改動都會影響到 FTP 服務器。在這裏，是我們在初始步驟裏做出的改動。</p><pre><code>$ sudo vi /etc/proftpd.conf
</code></pre><p>之後，在用文本編輯器打開這個文件後，我們會想改下 ServerName 以及 ServerAdmin，分別填入自己的域名和 email 地址。下面是我們改的。</p><pre><code>ServerName       &quot;ftp.linoxide.com&quot;
ServerAdmin      arun@linoxide.com
</code></pre><p>在這之後，我們將把下面的設定加到配置文件裏，這樣可以讓服務器將訪問和授權記錄到相應的日誌文件裏。</p><pre><code>ExtendedLog /var/log/proftpd/access.log WRITE,READ default
ExtendedLog /var/log/proftpd/auth.log AUTH auth
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/configuring-proftpd-config.png" alt="調整 ProFTPD 設置"></p><h3 id="_3-添加-ftp-用户" tabindex="-1">3. 添加 FTP 用户 <a class="header-anchor" href="#_3-添加-ftp-用户" aria-label="Permalink to “3. 添加 FTP 用户”">​</a></h3><p>在設定好了基本的配置文件後，我們很自然地希望添加一個以特定目錄為根目錄的 FTP 用户。目前登錄的用户自動就可以使用 FTP 服務，可以用來登錄到 FTP 服務器。但是，在這篇教程裏，我們將創建一個以 ftp 服務器上指定目錄為主目錄的新用户。</p><p>下面，我們將建立一個名字是 ftpgroup 的新用户組。</p><pre><code>$ sudo groupadd ftpgroup
</code></pre><p>然後，我們將以目錄 /ftp-dir/ 作為主目錄增加一個新用户 arunftp 並加入這個組中。</p><pre><code>$ sudo useradd -G ftpgroup arunftp -s /sbin/nologin -d /ftp-dir/
</code></pre><p>在創建好用户並加入用户組後，我們將為用户 arunftp 設置一個密碼。</p><pre><code>$ sudo passwd arunftp

Changing password for user arunftp.
New password:
Retype new password:
passwd: all authentication tokens updated successfully.
</code></pre><p>現在，我們將通過下面命令為這個 ftp 用户設定主目錄的讀寫權限（LCTT 譯註：這是SELinux 相關設置，如果未啓用 SELinux，可以不用）。</p><pre><code>$ sudo setsebool -P allow_ftpd_full_access=1
$ sudo setsebool -P ftp_home_dir=1
</code></pre><p>然後，我們會設定不允許其他用户移動或重命名這個目錄以及裏面的內容。</p><pre><code>$ sudo chmod -R 1777 /ftp-dir/
</code></pre><h3 id="_4-打開-tls-支持" tabindex="-1">4. 打開 TLS 支持 <a class="header-anchor" href="#_4-打開-tls-支持" aria-label="Permalink to “4. 打開 TLS 支持”">​</a></h3><p>目前 FTP 所用的加密手段並不安全，任何人都可以通過監聽網卡來讀取 FTP 傳輸的數據。所以，我們將為自己的服務器打開 TLS 加密支持。這樣的話，需要編輯 /etc/proftpd.conf 配置文件。在這之前，我們先備份一下當前的配置文件，可以保證在改出問題後還可以恢復。</p><pre><code>$ sudo cp /etc/proftpd.conf /etc/proftpd.conf.bak
</code></pre><p>然後，我們可以用自己喜歡的文本編輯器修改配置文件。</p><pre><code>$ sudo vi /etc/proftpd.conf
</code></pre><p>然後，把下面幾行附加到我們在第 2 步中所增加內容的後面。</p><pre><code>TLSEngine on
TLSRequired on
TLSProtocol SSLv23
TLSLog /var/log/proftpd/tls.log
TLSRSACertificateFile /etc/pki/tls/certs/proftpd.pem
TLSRSACertificateKeyFile /etc/pki/tls/certs/proftpd.pem
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/tls-configuration.png" alt="打開 TLS 配置"></p><p>完成上面的設定後，保存退出。</p><p>然後，我們需要生成 SSL 憑證 proftpd.pem 並放到 <strong>/etc/pki/tls/certs/</strong> 目錄裏。這樣的話，首先需要在 Fedora 22 上安裝 openssl。</p><pre><code>$ sudo dnf install openssl
</code></pre><p>然後，可以通過執行下面的命令生成 SSL 憑證。</p><pre><code>$ sudo openssl req -x509 -nodes -newkey rsa:2048 -keyout /etc/pki/tls/certs/proftpd.pem -out /etc/pki/tls/certs/proftpd.pem
</code></pre><p>系統會詢問一些將寫入憑證裏的基本信息。在填完資料後，就會生成一個 2048 位的 RSA 私鑰。</p><pre><code>Generating a 2048 bit RSA private key
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
</code></pre><p>在這之後，我們要改變所生成憑證文件的權限以增加安全性。</p><pre><code>$ sudo chmod 600 /etc/pki/tls/certs/proftpd.pem
</code></pre><h3 id="_5-允許-ftp-通過-firewall" tabindex="-1">5. 允許 FTP 通過 Firewall <a class="header-anchor" href="#_5-允許-ftp-通過-firewall" aria-label="Permalink to “5. 允許 FTP 通過 Firewall”">​</a></h3><p>現在，需要允許 ftp 端口，一般默認被防火牆阻止了。就是説，需要允許 ftp 端口能通過防火牆訪問。</p><p>如果 <strong>打開了 TLS/SSL 加密</strong>，執行下面的命令。</p><pre><code>$ sudo firewall-cmd --add-port=1024-65534/tcp
$ sudo firewall-cmd --add-port=1024-65534/tcp --permanent
</code></pre><p>如果 <strong>沒有打開 TLS/SSL 加密</strong>，執行下面的命令。</p><pre><code>$ sudo firewall-cmd --permanent --zone=public --add-service=ftp

success
</code></pre><p>然後，重新加載防火牆設定。</p><pre><code>$ sudo firewall-cmd --reload

success
</code></pre><h3 id="_6-啓動並激活-proftpd" tabindex="-1">6. 啓動並激活 ProFTPD <a class="header-anchor" href="#_6-啓動並激活-proftpd" aria-label="Permalink to “6. 啓動並激活 ProFTPD”">​</a></h3><p>全部設定好後，最後就是啓動 ProFTPD 並試一下。可以運行下面的命令來啓動 proftpd ftp 守護程序。</p><pre><code>$ sudo systemctl start proftpd.service
</code></pre><p>然後，我們可以設定開機啓動。</p><pre><code>$ sudo systemctl enable proftpd.service

Created symlink from /etc/systemd/system/multi-user.target.wants/proftpd.service to /usr/lib/systemd/system/proftpd.service.
</code></pre><h3 id="_7-登錄到-ftp-服務器" tabindex="-1">7. 登錄到 FTP 服務器 <a class="header-anchor" href="#_7-登錄到-ftp-服務器" aria-label="Permalink to “7. 登錄到 FTP 服務器”">​</a></h3><p>現在，如果都是按照本教程設置好的，我們一定可以連接到 ftp 服務器並使用以上設置的信息登錄上去。在這裏，我們將配置一下 FTP 客户端 filezilla，使用 **服務器的 IP 或名稱 **作為主機名，協議選擇 <strong>FTP</strong>，用户名填入 <strong>arunftp</strong>，密碼是在上面第 3 步中設定的密碼。如果你按照第 4 步中的方式打開了 TLS 支持，還需要在加密類型中選擇 <strong>要求顯式的基於 TLS 的 FTP</strong>，如果沒有打開，也不想使用 TLS 加密，那麼加密類型選擇 <strong>簡單 FTP</strong>。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/ftp-login-details.png" alt="FTP 登錄細節"></p><p>要做上述設定，需要打開菜單裏的文件，點擊站點管理器，然後點擊新建站點，再按上面的方式設置。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/ftp-ssl-certificate.png" alt="FTP SSL 憑證"></p><p>隨後系統會要求允許 SSL 憑證，點確定。之後，就可以從我們的 FTP 服務器上傳下載文件和文件夾了。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>最後，我們成功地在 Fedora 22 機器上安裝並配置好了 Proftpd FTP 服務器。Proftpd 是一個超級強大，能高度定製和擴展的 FTP 守護軟件。上面的教程展示瞭如何配置一個採用 TLS 加密的安全 FTP 服務器。強烈建議設置 FTP 服務器支持 TLS 加密，因為它允許使用 SSL 憑證加密數據傳輸和登錄。本文中，我們也沒有配置 FTP 的匿名訪問，因為一般受保護的 FTP 系統不建議這樣做。 FTP 訪問讓人們的上傳和下載變得非常簡單也更高效。我們還可以改變用户端口增加安全性。好吧，如果你有任何疑問，建議，反饋，請在下面評論區留言，這樣我們就能夠改善並更新文章內容。謝謝！玩的開心 😃</p><hr>`,64)),n("p",null,[e[7]||(e[7]=t("via: ",-1)),r(o,{href:"http://linoxide.com/linux-how-to/configure-ftp-proftpd-fedora-22/"},{default:p(()=>[...e[6]||(e[6]=[t("http://linoxide.com/linux-how-to/configure-ftp-proftpd-fedora-22/",-1)])]),_:1})]),n("p",null,[e[11]||(e[11]=t("作者：",-1)),r(o,{href:"http://linoxide.com/author/arunp/"},{default:p(()=>[...e[8]||(e[8]=[t("Arun Pyasi",-1)])]),_:1}),e[12]||(e[12]=t(" 譯者：",-1)),r(o,{href:"https://github.com/zpl1025"},{default:p(()=>[...e[9]||(e[9]=[t("zpl1025",-1)])]),_:1}),e[13]||(e[13]=t(" 校對：",-1)),r(o,{href:"https://github.com/wxy"},{default:p(()=>[...e[10]||(e[10]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[16]||(e[16]=t("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[14]||(e[14]=[t("LCTT",-1)])]),_:1}),e[17]||(e[17]=t(" 原創翻譯，",-1)),r(o,{href:"https://linux.cn/"},{default:p(()=>[...e[15]||(e[15]=[t("Linux中國",-1)])]),_:1}),e[18]||(e[18]=t(" 榮譽推出",-1))])])}const w=d(f,[["render",u]]);export{S as __pageData,w as default};
