import{_ as a,a0 as s,w as m,s as p,I as i,x as o,a1 as e,A as r,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"如何使用Monit部署服務器監控系統 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用Monit部署服務器監控系統 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用Monit部署服務器監控系統 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用Monit部署服務器監控系統 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150326 How to set up server monitoring system with Monit","title":"如何使用Monit部署服務器監控系統","tag":"201505","desc":""},"relativePath":"201505/20150326 How to set up server monitoring system with Monit.md","filePath":"[post].md"}'),d={name:"201505/20150326 How to set up server monitoring system with Monit.md"};function u(f,t,g,h,M,S){const n=s("Link");return m(),p("div",null,[t[31]||(t[31]=i("h1",{id:"如何使用monit部署服務器監控系統",tabindex:"-1"},[o("如何使用Monit部署服務器監控系統 "),i("a",{class:"header-anchor",href:"#如何使用monit部署服務器監控系統","aria-label":"Permalink to “如何使用Monit部署服務器監控系統”"},"​")],-1)),i("p",null,[t[2]||(t[2]=o("很多Linux系統管理員依賴一個集中式的遠程監控系統（比如",-1)),e(n,{href:"http://xmodulo.com/monitor-common-services-nagios.html"},{default:r(()=>[...t[0]||(t[0]=[o("Nagios",-1)])]),_:1}),t[3]||(t[3]=o("或者",-1)),e(n,{href:"http://xmodulo.com/monitor-linux-servers-snmp-cacti.html"},{default:r(()=>[...t[1]||(t[1]=[o("Cacti",-1)])]),_:1}),t[4]||(t[4]=o("）來檢查他們網絡基礎設備的健康狀況。雖然集中式監控讓管理員的生活更簡單了，然而處理很多機器和服務時，專用的監控中心顯然成為了一個單點故障，如果監控中心掛了或者因為什麼原因（比如硬件或者網絡故障）不可訪問了，你就會失去整個網絡基礎設備情況的任何信息。",-1))]),t[32]||(t[32]=i("p",null,"一個給你的監控系統增加冗餘度的方法是安裝獨立的監控軟件（作為後備），至少在網絡中的關鍵/核心服務器上。這樣在集中式監控系統掛掉的情況，你還有能力通過後備的監控方式來獲取核心服務器的運行狀況。",-1)),t[33]||(t[33]=i("h3",{id:"monit是什麼",tabindex:"-1"},[o("Monit是什麼？ "),i("a",{class:"header-anchor",href:"#monit是什麼","aria-label":"Permalink to “Monit是什麼？”"},"​")],-1)),i("p",null,[e(n,{href:"http://mmonit.com/monit/"},{default:r(()=>[...t[5]||(t[5]=[o("Monit",-1)])]),_:1}),t[6]||(t[6]=o("是一個跨平台的用來監控Unix/linux系統（比如Linux、BSD、OSX、Solaris）的工具。Monit特別易於安裝，而且非常輕量級（只有500KB大小），並且不依賴任何第三方程序、插件或者庫。然而，Monit可以勝任全面監控、進程狀態監控、文件系統變動監控、郵件通知和對核心服務的自定義動作等場景。易於安裝、輕量級的實現以及強大的功能，讓Monit成為一個理想的後備監控工具。",-1))]),t[34]||(t[34]=i("p",null,"我已經在一些機器使用Monit幾年了，而且我對它的可靠性非常滿意。甚至作為全面的監控系統，對任何Linux系統管理員來説Monit也是非常有用和強大的。在這篇教程中，我會展示如何在一個本地服務器部署Monit（作為後備監控系統）來監控常見的服務。在部署過程中，我只會展示我們用到的部分。",-1)),t[35]||(t[35]=i("h3",{id:"在linux安裝monit",tabindex:"-1"},[o("在Linux安裝Monit "),i("a",{class:"header-anchor",href:"#在linux安裝monit","aria-label":"Permalink to “在Linux安裝Monit”"},"​")],-1)),t[36]||(t[36]=i("p",null,"Monit已經被包含在多數Linux發行版的軟件倉庫中了。",-1)),t[37]||(t[37]=i("p",null,"Debian、Ubuntu或者Linux Mint：",-1)),t[38]||(t[38]=i("pre",null,[i("code",null,`$ sudo aptitude install monit
`)],-1)),t[39]||(t[39]=i("p",null,"Fedora或者CentOS/RHEL：",-1)),i("p",null,[t[9]||(t[9]=o("在CentOS/RHEL中，你必須首先啓用",-1)),e(n,{href:"https://linux.cn/article-2324-1.html"},{default:r(()=>[...t[7]||(t[7]=[o("EPEL",-1)])]),_:1}),t[10]||(t[10]=o("或者",-1)),e(n,{href:"http://xmodulo.com/how-to-set-up-rpmforge-repoforge-repository-on-centos.html"},{default:r(()=>[...t[8]||(t[8]=[o("Repoforge",-1)])]),_:1}),t[11]||(t[11]=o("軟件倉庫.",-1))]),t[40]||(t[40]=l(`<pre><code># yum install monit
</code></pre><p>Monit自帶一個文檔完善的配置文件，其中包含了很多例子。主配置文件在/etc/monit.conf（Fedora/CentOS/RHEL 中），或者/etc/monit/monitrc（Debian/Ubuntu/Mint 中）。Monit配置文件有兩部分：“Global”（全局）和“Services”（服務）。</p><h3 id="global-configuration-web-status-page-全局配置-web狀態頁面" tabindex="-1">Global Configuration: Web Status Page （全局配置：Web狀態頁面） <a class="header-anchor" href="#global-configuration-web-status-page-全局配置-web狀態頁面" aria-label="Permalink to “Global Configuration: Web Status Page （全局配置：Web狀態頁面）”">​</a></h3><p>Monit可以使用郵件服務來發送通知，也可以使用HTTP/HTTPS頁面來展示。我們先使用如下配置的web狀態頁面吧：</p><ul><li>Monit監聽1966端口。</li><li>對web狀態頁面的訪問是通過SSL加密的。</li><li>使用monituser/romania作為用户名/口令登錄。</li><li>只允許通過localhost、myhost.mydomain.ro和在局域網內部（192.168.0.0/16）訪問。</li><li>Monit使用pem格式的SSL證書。</li></ul><p>之後的步驟，我會使用一個基於Red Hat的系統。在基於Debian的系統中的步驟也是類似的。</p><p>首先，在/var/cert生成一個自簽名的證書（monit.pem）：</p><pre><code># mkdir /var/certs
# cd /etc/pki/tls/certs
# ./make-dummy-cert monit.pem
# cp monit.pem /var/certs
# chmod 0400 /var/certs/monit.pem 
</code></pre><p>現在將下列代碼片段放到Monit的主配置文件中。你可以創建一個空配置文件，或者基於自帶的配置文件修改。</p><pre><code>set httpd port 1966 and
     SSL ENABLE
     PEMFILE  /var/certs/monit.pem
     allow monituser:romania
     allow localhost
     allow 192.168.0.0/16
     allow myhost.mydomain.ro
</code></pre><h3 id="global-configuration-email-notification-全局配置-郵件通知" tabindex="-1">Global Configuration: Email Notification （全局配置：郵件通知） <a class="header-anchor" href="#global-configuration-email-notification-全局配置-郵件通知" aria-label="Permalink to “Global Configuration: Email Notification （全局配置：郵件通知）”">​</a></h3>`,11)),i("p",null,[t[13]||(t[13]=o("然後，我們來設置Monit的郵件通知。我們至少需要一個可用的",-1)),e(n,{href:"http://xmodulo.com/mail-server-ubuntu-debian.html"},{default:r(()=>[...t[12]||(t[12]=[o("SMTP服務器",-1)])]),_:1}),t[14]||(t[14]=o("來讓Monit發送郵件。這樣就可以（按照你的實際情況修改）：",-1))]),t[41]||(t[41]=l(`<ul><li>郵件服務器的機器名：smtp.monit.ro</li><li>Monit使用的發件人：monit@monit.ro</li><li>郵件的收件人：guletz@monit.ro</li><li>郵件服務器使用的SMTP端口：587（默認是25）</li></ul><p>有了以上信息，郵件通知就可以這樣配置：</p><pre><code>set mailserver  smtp.monit.ro port 587
set mail-format {
 from: monit@monit.ro
 subject: $SERVICE $EVENT at $DATE on $HOST
 message: Monit $ACTION $SERVICE $EVENT at $DATE on $HOST : $DESCRIPTION.

       Yours sincerely,
          Monit

  }

set alert guletz@monit.ro
</code></pre><p>就像你看到的，Monit會提供幾個內部變量（<code>$DATE</code>、<code>$EVENT</code>、<code>$HOST</code>等），你可以按照你的需求自定義郵件內容。如果你想要從Monit所在機器發送郵件，就需要一個已經安裝的與sendmail兼容的程序（如postfix或者ssmtp）。</p><h3 id="global-configuration-monit-daemon-全局配置-monit守護進程" tabindex="-1">Global Configuration: Monit Daemon （全局配置：Monit守護進程）### <a class="header-anchor" href="#global-configuration-monit-daemon-全局配置-monit守護進程" aria-label="Permalink to “Global Configuration: Monit Daemon （全局配置：Monit守護進程）###”">​</a></h3><p>接下來就該配置Monit守護進程了。可以將其設置成這樣：</p><ul><li>在120秒後進行第一次檢測。</li><li>每3分鐘檢測一次服務。</li><li>使用syslog來記錄日誌。</li></ul><p>如下代碼段可以滿足上述需求。</p><pre><code>set daemon 120
   with start delay 240
set logfile syslog facility log_daemon
</code></pre><p>我們必須定義“idfile”，Monit守護進程的一個獨一無二的ID文件；以及“eventqueue”，當monit的郵件因為SMTP或者網絡故障發不出去，郵件會暫存在這裏；以及確保/var/monit路徑是存在的。然後使用下邊的配置就可以了。</p><pre><code>set idfile /var/monit/id
set eventqueue
     basedir /var/monit
</code></pre><h3 id="測試全局配置" tabindex="-1">測試全局配置 <a class="header-anchor" href="#測試全局配置" aria-label="Permalink to “測試全局配置”">​</a></h3><p>現在“Global”部分就完成了。Monit配置文件看起來像這樣：</p><pre><code>#  Global Section

# status webpage and acl&#39;s
set httpd port 1966 and
     SSL ENABLE
     PEMFILE  /var/certs/monit.pem
     allow monituser:romania
     allow localhost
     allow 192.168.0.0/16
     allow myhost.mydomain.ro

# mail-server
set mailserver  smtp.monit.ro port 587
# email-format
set mail-format {
 from: monit@monit.ro
 subject: $SERVICE $EVENT at $DATE on $HOST
 message: Monit $ACTION $SERVICE $EVENT at $DATE on $HOST : $DESCRIPTION.

       Yours sincerely,
          Monit

  }

set alert guletz@monit.ro

# delay checks
set daemon 120
   with start delay 240
set logfile syslog facility log_daemon

# idfile and mail queue path
set idfile /var/monit/id
 set eventqueue
     basedir /var/monit
</code></pre><p>現在是時候驗證我們的工作了，你可以通過運行如下命令來驗證存在的配置文件（/etc/monit.conf）：</p><pre><code># monit -t

Control file syntax OK
</code></pre><p>如果monit提示任何錯誤，請再檢查下配置文件。幸運的是，錯誤/警告信息是可以幫助你發現問題的，比如：</p><pre><code>monit: Cannot stat the SSL server PEM file &#39;/var/certs/monit.pem&#39; -- No such file or directory
/etc/monit/monitrc:10: Warning: hostname did not resolve &#39;smtp.monit.ro&#39;
</code></pre><p>一旦你確認配置文件沒問題了，可以啓動monit守護進程，然後等2到3分鐘：</p><pre><code># service monit start
</code></pre><p>如果你使用的是systemd，運行：</p><pre><code># systemctl start monit
</code></pre><p>現在打開一個瀏覽器窗口，然後訪問<code>https://&lt;monit_host&gt;:1966</code>。將<code>&lt;monit_host&gt;</code>替換成Monit所在機器的機器名或者IP地址。</p><p>如果你使用的是自簽名的SSL證書，你會在瀏覽器中看到一個警告信息。繼續訪問即可。</p><p><img src="https://farm8.staticflickr.com/7596/16737206479_96b9f7dfdb_c.jpg" alt=""></p><p>你完成登錄後，就會看到這個頁面。</p><p><img src="https://farm8.staticflickr.com/7594/16303369973_6019482dea_c.jpg" alt=""></p>`,27)),i("p",null,[t[16]||(t[16]=o("在這個教程的其餘部分，我們演示監控一個本地服務器和常見服務的方法。你會在",-1)),e(n,{href:"http://mmonit.com/wiki/Monit/ConfigurationExamples"},{default:r(()=>[...t[15]||(t[15]=[o("官方wiki頁面",-1)])]),_:1}),t[17]||(t[17]=o("看到很多有用的例子。其中的多數是可以直接複製粘貼的！",-1))]),t[42]||(t[42]=l(`<h3 id="service-configuration-cpu-memory-monitoring-服務配置-cpu、內存監控" tabindex="-1">Service Configuration: CPU/Memory Monitoring （服務配置：CPU、內存監控） <a class="header-anchor" href="#service-configuration-cpu-memory-monitoring-服務配置-cpu、內存監控" aria-label="Permalink to “Service Configuration: CPU/Memory Monitoring （服務配置：CPU、內存監控）”">​</a></h3><p>我們先來監控本地服務器的CPU、內存佔用。複製如下代碼段到配置文件中。</p><pre><code>check system localhost
    if loadavg (1min) &gt; 10 then alert
    if loadavg (5min) &gt; 6 then alert
    if memory usage &gt; 75% then alert
    if cpu usage (user) &gt; 70% then alert
    if cpu usage (system) &gt; 60% then alert
    if cpu usage (wait) &gt; 75% then alert
</code></pre><p>你可以很容易理解上邊的配置。最上邊的check是指每個監控週期（全局配置裏設置的120秒）都對本機進行下面的操作。如果滿足了任何條件，monit守護進程就會使用郵件發送一條報警。</p><p>如果某個監控項不需要每個週期都檢查，可以使用如下格式，它會每240秒檢查一次平均負載。</p><pre><code>if loadavg (1min) &gt; 10 for 2 cycles then alert
</code></pre><h3 id="service-configuration-ssh-service-monitoring-服務配置-ssh服務監控" tabindex="-1">Service Configuration: SSH Service Monitoring （服務配置：SSH服務監控） <a class="header-anchor" href="#service-configuration-ssh-service-monitoring-服務配置-ssh服務監控" aria-label="Permalink to “Service Configuration: SSH Service Monitoring （服務配置：SSH服務監控）”">​</a></h3><p>先檢查我們的sshd是否安裝在/usr/sbin/sshd：</p><pre><code>check file sshd_bin with path /usr/sbin/sshd
</code></pre><p>我們還想檢查sshd的啓動腳本是否存在：</p><pre><code>check file sshd_init with path /etc/init.d/sshd
</code></pre><p>最後，我們還想檢查sshd守護進程是否存活，並且在監聽22端口：</p><pre><code>check process sshd with pidfile /var/run/sshd.pid
   start program  &quot;/etc/init.d/sshd start&quot;
   stop program  &quot;/etc/init.d/sshd stop&quot;
   if failed port 22 protocol ssh then restart
   if 5 restarts within 5 cycles then timeout
</code></pre><p>我們可以這樣解釋上述配置：我們檢查是否存在名為sshd的進程，並且有一個保存其pid的文件存在（/var/run/sshd.pid）。如果任何一個不存在，我們就使用啓動腳本重啓sshd。我們檢查是否有進程在監聽22端口，並且使用的是SSH協議。如果沒有，我們還是重啓sshd。如果在最近的5個監控週期（5x120秒）至少重啓5次了，sshd就被認為是不能用的，我們就不再檢查了。</p><p><img src="https://farm9.staticflickr.com/8685/16735725998_62c26a24bc_c.jpg" alt=""></p><h3 id="service-configuration-smtp-service-monitoring-服務配置-smtp服務監控" tabindex="-1">Service Configuration: SMTP Service Monitoring （服務配置：SMTP服務監控） <a class="header-anchor" href="#service-configuration-smtp-service-monitoring-服務配置-smtp服務監控" aria-label="Permalink to “Service Configuration: SMTP Service Monitoring （服務配置：SMTP服務監控）”">​</a></h3><p>現在我們來設置一個檢查遠程SMTP服務器（如192.168.111.102）的監控。假定SMTP服務器運行着SMTP、IMAP、SSH服務。</p><pre><code>check host MAIL with address 192.168.111.102
   if failed icmp type echo within 10 cycles then alert
   if failed port 25  protocol smtp then alert
             else if recovered then exec &quot;/scripts/mail-script&quot;
   if failed port 22  protocol ssh  then alert
   if failed port 143 protocol imap then alert
</code></pre><p>我們檢查遠程主機是否響應ICMP協議。如果我們在10個週期內沒有收到ICMP回應，就發送一條報警。如果監測到25端口上的SMTP協議是異常的，就發送一條報警。如果在一次監測失敗後又監測成功了，就運行一個腳本（/scripts/mail-script）。如果檢查22端口上的SSH或者143端口上的IMAP協議不正常，同樣發送報警。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>在這個教程，我演示瞭如何在本地服務器設置Monit，當然這只是Monit功能的冰山一角。你可以花些時間閲讀Monit的man手冊（寫得很好）。Monit可以為任何Linux系統管理員做很多事情，並且具有非常優美和易於理解的語法。如果你將一個集中式的遠程監控系統和Monit一同使用，你會得到一個更可靠的監控系統。你感覺Monit怎麼樣？</p><hr>`,22)),i("p",null,[t[19]||(t[19]=o("via: ",-1)),e(n,{href:"http://xmodulo.com/server-monitoring-system-monit.html"},{default:r(()=>[...t[18]||(t[18]=[o("http://xmodulo.com/server-monitoring-system-monit.html",-1)])]),_:1})]),i("p",null,[t[23]||(t[23]=o("作者：",-1)),e(n,{href:"http://xmodulo.com/author/iulian"},{default:r(()=>[...t[20]||(t[20]=[o("Iulian Murgulet",-1)])]),_:1}),t[24]||(t[24]=o(" 譯者：",-1)),e(n,{href:"https://github.com/goreliu"},{default:r(()=>[...t[21]||(t[21]=[o("goreliu",-1)])]),_:1}),t[25]||(t[25]=o(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:r(()=>[...t[22]||(t[22]=[o("wxy",-1)])]),_:1})]),i("p",null,[t[28]||(t[28]=o("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[26]||(t[26]=[o("LCTT",-1)])]),_:1}),t[29]||(t[29]=o(" 原創翻譯，",-1)),e(n,{href:"http://linux.cn/"},{default:r(()=>[...t[27]||(t[27]=[o("Linux中國",-1)])]),_:1}),t[30]||(t[30]=o(" 榮譽推出",-1))])])}const v=a(d,[["render",u]]);export{b as __pageData,v as default};
