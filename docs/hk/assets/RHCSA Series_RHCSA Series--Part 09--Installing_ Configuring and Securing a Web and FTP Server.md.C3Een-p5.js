import{_ as l,a0 as d,w as i,s as c,ao as a,I as n,x as t,a1 as r,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"RHCSA 系列（九）: 安裝、配置及加固一個 Web 和 FTP 服務器 | LCTT x X-CMD","titleTemplate":false,"description":"RHCSA 系列（九）: 安裝、配置及加固一個 Web 和 FTP 服務器 | LCTT (RHCSA Series) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RHCSA 系列（九）: 安裝、配置及加固一個 Web 和 FTP 服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RHCSA 系列（九）: 安裝、配置及加固一個 Web 和 FTP 服務器 | LCTT (RHCSA Series) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"RHCSA Series/RHCSA Series--Part 09--Installing, Configuring and Securing a Web and FTP Server","title":"RHCSA 系列（九）: 安裝、配置及加固一個 Web 和 FTP 服務器","tag":"RHCSA Series","desc":""},"relativePath":"RHCSA Series/RHCSA Series--Part 09--Installing, Configuring and Securing a Web and FTP Server.md","filePath":"[post].md"}'),s={name:"RHCSA Series/RHCSA Series--Part 09--Installing, Configuring and Securing a Web and FTP Server.md"};function m(f,e,u,S,h,T){const p=d("Link");return i(),c("div",null,[e[21]||(e[21]=a(`<h1 id="rhcsa-系列-九-安裝、配置及加固一個-web-和-ftp-服務器" tabindex="-1">RHCSA 系列（九）: 安裝、配置及加固一個 Web 和 FTP 服務器 <a class="header-anchor" href="#rhcsa-系列-九-安裝、配置及加固一個-web-和-ftp-服務器" aria-label="Permalink to “RHCSA 系列（九）: 安裝、配置及加固一個 Web 和 FTP 服務器”">​</a></h1><p>Web 服務器（也被稱為 HTTP 服務器）是在網絡中將內容（最為常見的是網頁，但也支持其他類型的文件）進行處理並傳遞給客户端的服務。</p><p>FTP 服務器是最為古老且最常使用的資源之一（即便到今天也是這樣），在身份認證不是必須的情況下，它可通過客户端在一個網絡訪問文件，因為 FTP 使用沒有加密的用户名和密碼，所以有些情況下不需要驗證也行。</p><p>在 RHEL 7 中可用的 web 服務器是版本號為 2.4 的 Apache HTTP 服務器。至於 FTP 服務器，我們將使用 Very Secure Ftp Daemon (又名 vsftpd) 來建立用 TLS 加固的連接。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/05/Install-Configure-Secure-Apache-FTP-Server.png" alt="配置和加固 Apache 和 FTP 服務器"></p><p><em>RHCSA: 安裝，配置及加固 Apache 和 FTP 服務器 – Part 9</em></p><p>在這篇文章中，我們將解釋如何在 RHEL 7 中安裝、配置和加固 web 和 FTP 服務器。</p><h3 id="安裝-apache-和-ftp-服務器" tabindex="-1">安裝 Apache 和 FTP 服務器 <a class="header-anchor" href="#安裝-apache-和-ftp-服務器" aria-label="Permalink to “安裝 Apache 和 FTP 服務器”">​</a></h3><p>在本指導中，我們將使用一個靜態 IP 地址為 192.168.0.18/24 的 RHEL 7 服務器。為了安裝 Apache 和 VSFTPD，運行下面的命令：</p><pre><code># yum update &amp;&amp; yum install httpd vsftpd
</code></pre><p>當安裝完成後，這兩個服務在開始時是默認被禁用的，所以我們需要暫時手動開啓它們並讓它們在下一次啓動時自動地開啓它們：</p><pre><code># systemctl start httpd
# systemctl enable httpd
# systemctl start vsftpd
# systemctl enable vsftpd
</code></pre><p>另外，我們必須打開 80 和 21 端口，它們分別是 web 和 ftp 守護進程監聽的端口，為的是允許從外面訪問這些服務：</p><pre><code># firewall-cmd --zone=public --add-port=80/tcp --permanent
# firewall-cmd --zone=public --add-service=ftp --permanent
# firewall-cmd --reload
</code></pre><p>為了確認 web 服務工作正常，打開你的瀏覽器並輸入服務器的 IP，則你應該可以看到如下的測試頁面：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/05/Confirm-Apache-Web-Server.png" alt="確認 Apache Web 服務器"></p><p><em>確認 Apache Web 服務器</em></p><p>對於 ftp 服務器，在確保它如期望中的那樣工作之前，我們必須進一步地配置它，我們將在幾分鐘後來做這件事。</p><h3 id="配置並加固-apache-web-服務器" tabindex="-1">配置並加固 Apache Web 服務器 <a class="header-anchor" href="#配置並加固-apache-web-服務器" aria-label="Permalink to “配置並加固 Apache Web 服務器”">​</a></h3><p>Apache 的主要配置文件位於 <code>/etc/httpd/conf/httpd.conf</code> 中，但它可能依賴 <code>/etc/httpd/conf.d</code> 中的其他文件。</p>`,20)),n("p",null,[e[1]||(e[1]=t("儘管默認的配置對於大多數的情形都夠用了，但熟悉在 ",-1)),r(p,{href:"http://httpd.apache.org/docs/2.4/"},{default:o(()=>[...e[0]||(e[0]=[t("官方文檔",-1)])]),_:1}),e[2]||(e[2]=t(" 中介紹的所有可用選項是一個不錯的主意。",-1))]),e[22]||(e[22]=a(`<p>同往常一樣，在編輯主配置文件前先做一個備份：</p><pre><code># cp /etc/httpd/conf/httpd.conf /etc/httpd/conf/httpd.conf.$(date +%Y%m%d)
</code></pre><p>然後用你鍾愛的文本編輯器打開它，並查找下面這些變量：</p><ul><li><code>ServerRoot</code>： 服務器的配置，錯誤和日誌文件保存的目錄。</li><li><code>Listen</code>： 通知 Apache 去監聽特定的 IP 地址或端口。</li><li><code>Include</code>: 允許包含其他配置文件，要包含的文件必須存在，否則，服務器將會失敗。它恰好與 IncludeOptional 相反，假如特定的配置文件不存在，它將靜默地忽略掉它們。</li><li><code>User</code> 和 <code>Group</code>： 運行 httpd 服務的用户/組的名稱。</li><li><code>DocumentRoot</code>： Apache 為你的文檔所服務的目錄。默認情況下，所有的請求將在這個目錄中被獲取，但符號鏈接和別名可能會被用於指向其他位置。</li><li><code>ServerName</code>： 這個指令將設定用於識別它自身的主機名（或 IP 地址）和端口。</li></ul><p>安全措施的第一步將包含創建一個特定的用户和組（如 tecmint/tecmint）來運行 web 服務器，以及更改默認的端口為一個更高的端口（在這個例子中為 9000） （LCTT 譯註：如果你的 Web 服務器對外公開提供服務，則不建議修改為非默認端口。）：</p><pre><code>ServerRoot &quot;/etc/httpd&quot;
Listen 192.168.0.18:9000
User tecmint
Group tecmint
DocumentRoot &quot;/var/www/html&quot;
ServerName 192.168.0.18:9000
</code></pre><p>你可以使用下面的命令來測試配置文件：</p><pre><code># apachectl configtest
</code></pre><p>假如一切 OK，接着重啓 web 服務器。</p><pre><code># systemctl restart httpd
</code></pre><p>並別忘了在防火牆中開啓新的端口（並禁用舊的端口）：</p><pre><code># firewall-cmd --zone=public --remove-port=80/tcp --permanent
# firewall-cmd --zone=public --add-port=9000/tcp --permanent
# firewall-cmd --reload
</code></pre><p>請注意，由於 SELinux 策略，你只能給給 web 服務器使用如下命令所返回的端口。</p><pre><code># semanage port -l | grep -w &#39;^http_port_t&#39;
</code></pre><p>假如你想讓 httpd 服務使用另一個端口（如 TCP 端口 8100），你必須將它加到 SELinux 的端口上下文：</p><pre><code># semanage port -a -t http_port_t -p tcp 8100
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/05/Add-Apache-Port-to-SELinux-Policies.png" alt="添加 Apache 端口到 SELinux 策略"></p><p><em>添加 Apache 端口到 SELinux 策略</em></p><p>為了進一步加固你安裝的 Apache，請遵循以下步驟：</p><ol><li><p>運行 Apache 的用户不應該擁有訪問 shell 的能力：</p><pre><code> # usermod -s /sbin/nologin tecmint
</code></pre></li><li><p>禁用目錄列表功能，這是為了阻止瀏覽器展示一個未包含 index.html 文件的目錄裏的內容。</p><pre><code>編輯 \`/etc/httpd/conf/httpd.conf\` (以及虛擬主機的配置文件，假如有的話)，並確保出現在頂層的和Directory 塊中的 Options 指令都被設置為 None：

 Options None
</code></pre></li><li><p>在 HTTP 響應中隱藏有關 web 服務器和操作系統的信息。像下面這樣編輯文件 <code>/etc/httpd/conf/httpd.conf</code>：</p><pre><code> ServerTokens Prod 
 ServerSignature Off
</code></pre></li></ol><p>現在，你已經做好了從 <code>/var/www/html</code> 目錄開始服務內容的準備了。</p><h3 id="配置並加固-ftp-服務器" tabindex="-1">配置並加固 FTP 服務器 <a class="header-anchor" href="#配置並加固-ftp-服務器" aria-label="Permalink to “配置並加固 FTP 服務器”">​</a></h3><p>和 Apache 的情形類似， Vsftpd 的主配置文件 <code>/etc/vsftpd/vsftpd.conf</code> 帶有詳細的註釋，且雖然對於大多數的應用實例，默認的配置應該足夠了，但為了更有效率地操作 ftp 服務器，你應該開始熟悉相關的文檔和 man 頁 <code>man vsftpd.conf</code>（對於這點，再多的強調也不為過！）。</p><p>在我們的示例中，使用了這些指令：</p><pre><code>anonymous_enable=NO
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
</code></pre><p>通過使用 <code>chroot_local_user=YES</code>，（默認情況下）本地用户在登錄之後，將被限制在以用户的家目錄為 chroot 監獄的環境中。這意味着本地用户將不能訪問除其家目錄之外的任何文件。</p><p>最後，為了讓 ftp 能夠在用户的家目錄中讀取文件，設置如下的 SELinux 布爾值：</p><pre><code># setsebool -P ftp_home_dir on
</code></pre><p>現在，你可以使用一個客户端例如 Filezilla 來連接一個 ftp 服務器：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/05/Check-FTP-Connection.png" alt="查看 FTP 連接"></p><p><em>查看 FTP 連接</em></p><p>注意， <code>/var/log/xferlog</code> 日誌將會記錄下載和上傳的情況，這與上圖的目錄列表一致：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/05/Monitor-FTP-Download-Upload.png" alt="監視 FTP 的下載和上傳情況"></p><p><em>監視 FTP 的下載和上傳情況</em></p>`,34)),n("p",null,[e[4]||(e[4]=t("另外請參考： ",-1)),r(p,{href:"https://linux.cn/article-5517-1.html"},{default:o(()=>[...e[3]||(e[3]=[t("在 Linux 系統中使用 Trickle 來限制應用使用的 FTP 網絡帶寬",-1)])]),_:1})]),e[23]||(e[23]=n("h3",{id:"總結",tabindex:"-1"},[t("總結 "),n("a",{class:"header-anchor",href:"#總結","aria-label":"Permalink to “總結”"},"​")],-1)),n("p",null,[e[6]||(e[6]=t("在本教程中，我們解釋瞭如何設置 web 和 ftp 服務器。由於這個主題的廣泛性，涵蓋這些話題的所有方面是不可能的（如虛擬主機）。因此，我推薦你也閲讀這個網站中有關 ",-1)),r(p,{href:"http://www.google.com/cse?cx=partner-pub-2601749019656699:2173448976&ie=UTF-8&q=virtual+hosts&sa=Search&gws_rd=cr&ei=Dy9EVbb0IdHisASnroG4Bw#gsc.tab=0&gsc.q=apache"},{default:o(()=>[...e[5]||(e[5]=[t("Apache",-1)])]),_:1}),e[7]||(e[7]=t(" 的其他卓越的文章。",-1))]),e[24]||(e[24]=n("hr",null,null,-1)),n("p",null,[e[9]||(e[9]=t("via: ",-1)),r(p,{href:"http://www.tecmint.com/rhcsa-series-install-and-secure-apache-web-server-and-ftp-in-rhel/"},{default:o(()=>[...e[8]||(e[8]=[t("http://www.tecmint.com/rhcsa-series-install-and-secure-apache-web-server-and-ftp-in-rhel/",-1)])]),_:1})]),n("p",null,[e[13]||(e[13]=t("作者：",-1)),r(p,{href:"http://www.tecmint.com/author/gacanepa/"},{default:o(()=>[...e[10]||(e[10]=[t("Gabriel Cánepa",-1)])]),_:1}),e[14]||(e[14]=t(" 譯者：",-1)),r(p,{href:"https://github.com/FSSlc"},{default:o(()=>[...e[11]||(e[11]=[t("FSSlc",-1)])]),_:1}),e[15]||(e[15]=t(" 校對：",-1)),r(p,{href:"https://github.com/wxy"},{default:o(()=>[...e[12]||(e[12]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[18]||(e[18]=t("本文由 ",-1)),r(p,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[16]||(e[16]=[t("LCTT",-1)])]),_:1}),e[19]||(e[19]=t(" 原創翻譯，",-1)),r(p,{href:"https://linux.cn/"},{default:o(()=>[...e[17]||(e[17]=[t("Linux中國",-1)])]),_:1}),e[20]||(e[20]=t(" 榮譽推出",-1))])])}const g=l(s,[["render",m]]);export{P as __pageData,g as default};
