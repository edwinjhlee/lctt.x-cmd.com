import{_ as p,a0 as l,w as i,s as d,I as r,x as o,a1 as t,A as n,ao as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const m=JSON.parse('{"title":"使用 HAProxy 配置 HTTP 負載均衡器 | LCTT x X-CMD","titleTemplate":false,"description":"使用 HAProxy 配置 HTTP 負載均衡器 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 HAProxy 配置 HTTP 負載均衡器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 HAProxy 配置 HTTP 負載均衡器 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141008 How to configure HTTP load balancer with HAProxy on Linux","title":"使用 HAProxy 配置 HTTP 負載均衡器","tag":"201501","desc":""},"relativePath":"201501/20141008 How to configure HTTP load balancer with HAProxy on Linux.md","filePath":"[post].md"}'),x={name:"201501/20141008 How to configure HTTP load balancer with HAProxy on Linux.md"};function h(u,e,y,P,b,c){const a=l("Link");return i(),d("div",null,[e[22]||(e[22]=r("h1",{id:"使用-haproxy-配置-http-負載均衡器",tabindex:"-1"},[o("使用 HAProxy 配置 HTTP 負載均衡器 "),r("a",{class:"header-anchor",href:"#使用-haproxy-配置-http-負載均衡器","aria-label":"Permalink to “使用 HAProxy 配置 HTTP 負載均衡器”"},"​")],-1)),e[23]||(e[23]=r("p",null,"隨着基於 Web 的應用和服務的增多，IT 系統管理員肩上的責任也越來越重。當遇到不可預期的事件如流量達到高峯，流量增大或者內部的挑戰比如硬件的損壞或緊急維修，無論如何，你的 Web 應用都必須要保持可用性。甚至現在流行的 devops 和持續交付（CD）也可能威脅到你的 Web 服務的可靠性和性能的一致性。",-1)),r("p",null,[e[1]||(e[1]=o("不可預測，不一致的性能表現是你無法接受的。但是我們怎樣消除這些缺點呢？大多數情況下一個合適的負載均衡解決方案可以解決這個問題。今天我會給你們介紹如何使用 ",-1)),t(a,{href:"http://www.haproxy.org/"},{default:n(()=>[...e[0]||(e[0]=[o("HAProxy",-1)])]),_:1}),e[2]||(e[2]=o(" 配置 HTTP 負載均衡器。",-1))]),e[24]||(e[24]=r("p",null,"###什麼是 HTTP 負載均衡？ ###",-1)),e[25]||(e[25]=r("p",null,"HTTP 負載均衡是一個網絡解決方案，它將進入的 HTTP 或 HTTPs 請求分配至一組提供相同的 Web 應用內容的服務器用於響應。通過將請求在這樣的多個服務器間進行均衡，負載均衡器可以防止服務器出現單點故障，可以提升整體的可用性和響應速度。它還可以讓你能夠簡單的通過添加或者移除服務器來進行橫向擴展或收縮，對工作負載進行調整。",-1)),e[26]||(e[26]=r("h3",{id:"什麼時候-什麼情況下需要使用負載均衡",tabindex:"-1"},[o("什麼時候，什麼情況下需要使用負載均衡？ "),r("a",{class:"header-anchor",href:"#什麼時候-什麼情況下需要使用負載均衡","aria-label":"Permalink to “什麼時候，什麼情況下需要使用負載均衡？”"},"​")],-1)),e[27]||(e[27]=r("p",null,"負載均衡可以提升服務器的使用性能和最大可用性，當你的服務器開始出現高負載時就可以使用負載均衡。或者你在為一個大型項目設計架構時，在前端使用負載均衡是一個很好的習慣。當你的環境需要擴展的時候它會很有用。",-1)),e[28]||(e[28]=r("h3",{id:"什麼是-haproxy",tabindex:"-1"},[o("什麼是 HAProxy？ "),r("a",{class:"header-anchor",href:"#什麼是-haproxy","aria-label":"Permalink to “什麼是 HAProxy？”"},"​")],-1)),r("p",null,[e[4]||(e[4]=o("HAProxy 是一個流行的開源的 GNU/Linux 平台下的 TCP/HTTP 服務器的負載均衡和代理軟件。HAProxy 是單線程，事件驅動架構，可以輕鬆的處理 ",-1)),t(a,{href:"http://www.haproxy.org/10g.html"},{default:n(()=>[...e[3]||(e[3]=[o("10 Gbps 速率",-1)])]),_:1}),e[5]||(e[5]=o(" 的流量，在生產環境中被廣泛的使用。它的功能包括自動健康狀態檢查，自定義負載均衡算法，HTTPS/SSL 支持，會話速率限制等等。",-1))]),e[29]||(e[29]=r("h3",{id:"這個教程要實現怎樣的負載均衡",tabindex:"-1"},[o("這個教程要實現怎樣的負載均衡 "),r("a",{class:"header-anchor",href:"#這個教程要實現怎樣的負載均衡","aria-label":"Permalink to “這個教程要實現怎樣的負載均衡”"},"​")],-1)),e[30]||(e[30]=r("p",null,"在這個教程中，我們會為 HTTP Web 服務器配置一個基於 HAProxy 的負載均衡。",-1)),e[31]||(e[31]=r("h3",{id:"準備條件",tabindex:"-1"},[o("準備條件 "),r("a",{class:"header-anchor",href:"#準備條件","aria-label":"Permalink to “準備條件”"},"​")],-1)),r("p",null,[e[7]||(e[7]=o("你至少要有一台，或者最好是兩台 Web 服務器來驗證你的負載均衡的功能。我們假設後端的 HTTP Web 服務器已經配置好並",-1)),t(a,{href:"http://linux.cn/article-1567-1.html"},{default:n(()=>[...e[6]||(e[6]=[o("可以運行",-1)])]),_:1}),e[8]||(e[8]=o("。",-1))]),e[32]||(e[32]=s(`<h2 id="在-linux-中安裝-haproxy" tabindex="-1">在 Linux 中安裝 HAProxy <a class="header-anchor" href="#在-linux-中安裝-haproxy" aria-label="Permalink to “在 Linux 中安裝 HAProxy”">​</a></h2><p>對於大多數的發行版，我們可以使用發行版的包管理器來安裝 HAProxy。</p><h3 id="在-debian-中安裝-haproxy" tabindex="-1">在 Debian 中安裝 HAProxy <a class="header-anchor" href="#在-debian-中安裝-haproxy" aria-label="Permalink to “在 Debian 中安裝 HAProxy”">​</a></h3><p>在 Debian Wheezy 中我們需要添加源，在 /etc/apt/sources.list.d 下創建一個文件 &quot;backports.list&quot; ，寫入下面的內容</p><pre><code>deb http://cdn.debian.net/debian wheezy­backports main 
</code></pre><p>刷新倉庫的數據，並安裝 HAProxy</p><pre><code># apt­ get update
# apt ­get install haproxy 
</code></pre><h3 id="在-ubuntu-中安裝-haproxy" tabindex="-1">在 Ubuntu 中安裝 HAProxy <a class="header-anchor" href="#在-ubuntu-中安裝-haproxy" aria-label="Permalink to “在 Ubuntu 中安裝 HAProxy”">​</a></h3><pre><code># apt ­get install haproxy 
</code></pre><h3 id="在-centos-和-rhel-中安裝-haproxy" tabindex="-1">在 CentOS 和 RHEL 中安裝 HAProxy <a class="header-anchor" href="#在-centos-和-rhel-中安裝-haproxy" aria-label="Permalink to “在 CentOS 和 RHEL 中安裝 HAProxy”">​</a></h3><pre><code># yum install haproxy 
</code></pre><h2 id="配置-haproxy" tabindex="-1">配置 HAProxy <a class="header-anchor" href="#配置-haproxy" aria-label="Permalink to “配置 HAProxy”">​</a></h2><p>本教程假設有兩台運行的 HTTP Web 服務器，它們的 IP 地址是 192.168.100.2 和 192.168.100.3。我們將負載均衡配置在 192.168.100.4 的這台服務器上。</p><p>為了讓 HAProxy 工作正常，你需要修改 /etc/haproxy/haproxy.cfg 中的一些選項。我們會在這一節中解釋這些修改。一些配置可能因 GNU/Linux 發行版的不同而變化，這些會被標註出來。</p><h3 id="_1-配置日誌功能" tabindex="-1">1. 配置日誌功能 <a class="header-anchor" href="#_1-配置日誌功能" aria-label="Permalink to “1. 配置日誌功能”">​</a></h3><p>你要做的第一件事是為 HAProxy 配置日誌功能，在排錯時日誌將很有用。日誌配置可以在 /etc/haproxy/haproxy.cfg 的 global 段中找到他們。下面是針對不同的 Linux 髮型版的 HAProxy 日誌配置。</p><h4 id="centos-或-rhel" tabindex="-1">CentOS 或 RHEL:#### <a class="header-anchor" href="#centos-或-rhel" aria-label="Permalink to “CentOS 或 RHEL:####”">​</a></h4><p>在 CentOS/RHEL中啓用日誌，將下面的：</p><pre><code>log         127.0.0.1 local2 
</code></pre><p>替換為：</p><pre><code>log         127.0.0.1 local0 
</code></pre><p>然後配置 HAProxy 在 /var/log 中的日誌分割，我們需要修改當前的 rsyslog 配置。為了簡潔和明瞭，我們在 /etc/rsyslog.d 下創建一個叫 haproxy.conf 的文件，添加下面的內容：</p><pre><code>$ModLoad imudp 
$UDPServerRun 514  
$template Haproxy,&quot;%msg%\\n&quot; 
local0.=info ­/var/log/haproxy.log;Haproxy 
local0.notice ­/var/log/haproxy­status.log;Haproxy 
local0.* ~ 
</code></pre><p>這個配置會基於 $template 在 /var/log 中分割 HAProxy 日誌。現在重啓 rsyslog 應用這些更改。</p><pre><code># service rsyslog restart 
</code></pre><p>####Debian 或 Ubuntu:####</p><p>在 Debian 或 Ubuntu 中啓用日誌，將下面的內容</p><pre><code>log /dev/log        local0 
log /dev/log        local1 notice 
</code></pre><p>替換為：</p><pre><code>log         127.0.0.1 local0 
</code></pre><p>然後為 HAProxy 配置日誌分割，編輯 /etc/rsyslog.d/ 下的 haproxy.conf （在 Debian 中可能叫 49-haproxy.conf），寫入下面你的內容</p><pre><code>$ModLoad imudp 
$UDPServerRun 514  
$template Haproxy,&quot;%msg%\\n&quot; 
local0.=info ­/var/log/haproxy.log;Haproxy 
local0.notice ­/var/log/haproxy­status.log;Haproxy 
local0.* ~ 
</code></pre><p>這個配置會基於 $template 在 /var/log 中分割 HAProxy 日誌。現在重啓 rsyslog 應用這些更改。</p><pre><code> # service rsyslog restart 
</code></pre><h3 id="_2-設置默認選項" tabindex="-1">2. 設置默認選項 <a class="header-anchor" href="#_2-設置默認選項" aria-label="Permalink to “2. 設置默認選項”">​</a></h3><p>下一步是設置 HAProxy 的默認選項。在 /etc/haproxy/haproxy.cfg 的 default 段中，替換為下面的配置：</p><pre><code>    defaults 
    log     global 
    mode    http 
    option  httplog 
    option  dontlognull 
    retries 3 
    option redispatch 
    maxconn 20000 
    contimeout      5000 
    clitimeout      50000 
    srvtimeout      50000
</code></pre><p>上面的配置是當 HAProxy 為 HTTP 負載均衡時建議使用的，但是並不一定是你的環境的最優方案。你可以自己研究 HAProxy 的手冊並配置它。</p><h3 id="_3-web-集羣配置" tabindex="-1">3. Web 集羣配置 <a class="header-anchor" href="#_3-web-集羣配置" aria-label="Permalink to “3. Web 集羣配置”">​</a></h3><p>Web 集羣配置定義了一組可用的 HTTP 服務器。我們的負載均衡中的大多數設置都在這裏。現在我們會創建一些基本配置，定義我們的節點。將配置文件中從 frontend 段開始的內容全部替換為下面的：</p><pre><code>listen webfarm *:80 
       mode http 
       stats enable 
       stats uri /haproxy?stats 
       stats realm Haproxy\\ Statistics 
       stats auth haproxy:stats 
       balance roundrobin 
       cookie LBN insert indirect nocache 
       option httpclose 
       option forwardfor 
       server web01 192.168.100.2:80 cookie node1 check 
       server web02 192.168.100.3:80 cookie node2 check 
</code></pre><p>&quot;listen webfarm *:80&quot; 定義了負載均衡器監聽的地址和端口。為了教程的需要，我設置為 &quot;*&quot; 表示監聽在所有接口上。在真實的場景彙總，這樣設置可能不太合適，應該替換為可以從 internet 訪問的那個網卡接口。</p><pre><code>stats enable 
stats uri /haproxy?stats 
stats realm Haproxy\\ Statistics 
stats auth haproxy:stats 
</code></pre><p>上面的設置定義了，負載均衡器的狀態統計信息可以通過 http://&lt;load-balancer-IP&gt;/haproxy?stats 訪問。訪問需要簡單的 HTTP 認證，用户名為 &quot;haproxy&quot; 密碼為 &quot;stats&quot;。這些設置可以替換為你自己的認證方式。如果你不需要狀態統計信息，可以完全禁用掉。</p><p>下面是一個 HAProxy 統計信息的例子</p><p><img src="https://farm4.staticflickr.com/3928/15416835905_a678c8f286_c.jpg" alt=""></p><p>&quot;balance roundrobin&quot; 這一行表明我們使用的負載均衡類型。這個教程中，我們使用簡單的輪詢算法，可以完全滿足 HTTP 負載均衡的需要。HAProxy 還提供其他的負載均衡類型：</p><ul><li><strong>leastconn</strong>：將請求調度至連接數最少的服務器­</li><li><strong>source</strong>：對請求的客户端 IP 地址進行哈希計算，根據哈希值和服務器的權重將請求調度至後端服務器。</li><li><strong>uri</strong>：對 URI 的左半部分（問號之前的部分）進行哈希，根據哈希結果和服務器的權重對請求進行調度</li><li><strong>url_param</strong>：根據每個 HTTP GET 請求的 URL 查詢參數進行調度，使用固定的請求參數將會被調度至指定的服務器上</li><li><strong>hdr(name</strong>)：根據 HTTP 首部中的 &lt;name&gt; 字段來進行調度</li></ul><p>&quot;cookie LBN insert indirect nocache&quot; 這一行表示我們的負載均衡器會存儲 cookie 信息，可以將後端服務器池中的節點與某個特定會話綁定。節點的 cookie 存儲為一個自定義的名字。這裏，我們使用的是 &quot;LBN&quot;，你可以指定其他的名稱。後端節點會保存這個 cookie 的會話。</p><pre><code>server web01 192.168.100.2:80 cookie node1 check 
server web02 192.168.100.3:80 cookie node2 check 
</code></pre><p>上面是我們的 Web 服務器節點的定義。服務器有由內部名稱（如web01，web02），IP 地址和唯一的 cookie 字符串表示。cookie 字符串可以自定義，我這裏使用的是簡單的 node1，node2 ... node(n)</p><h2 id="啓動-haproxy" tabindex="-1">啓動 HAProxy <a class="header-anchor" href="#啓動-haproxy" aria-label="Permalink to “啓動 HAProxy”">​</a></h2><p>如果你完成了配置，現在啓動 HAProxy 並驗證是否運行正常。</p><h3 id="在-centos-rhel-中啓動-haproxy" tabindex="-1">在 Centos/RHEL 中啓動 HAProxy <a class="header-anchor" href="#在-centos-rhel-中啓動-haproxy" aria-label="Permalink to “在 Centos/RHEL 中啓動 HAProxy”">​</a></h3><p>讓 HAProxy 開機自啓，使用下面的命令</p><pre><code># chkconfig haproxy on
# service haproxy start 
</code></pre><p>當然，防火牆需要開放 80 端口，像下面這樣</p><p>####CentOS/RHEL 7 的防火牆####</p><pre><code># firewall­cmd ­­permanent ­­zone=public ­­add­port=80/tcp
# firewall­cmd ­­reload 
</code></pre><p>####CentOS/RHEL 6 的防火牆####</p><p>把下面內容加至 /etc/sysconfig/iptables 中的 &quot;:OUTPUT ACCEPT&quot; 段中</p><pre><code>­A INPUT ­m state ­­state NEW ­m tcp ­p tcp ­­dport 80 ­j ACCEPT 
</code></pre><p>重啓<strong>iptables</strong>：</p><pre><code># service iptables restart 
</code></pre><h3 id="在-debian-中啓動-haproxy" tabindex="-1">在 Debian 中啓動 HAProxy <a class="header-anchor" href="#在-debian-中啓動-haproxy" aria-label="Permalink to “在 Debian 中啓動 HAProxy”">​</a></h3><p>啓動 HAProxy</p><pre><code># service haproxy start 
</code></pre><p>不要忘了防火牆開放 80 端口，在 /etc/iptables.up.rules 中加入：</p><pre><code>­A INPUT ­p tcp ­­dport 80 ­j ACCEPT 
</code></pre><h3 id="在-ubuntu-中啓動haproxy" tabindex="-1">在 Ubuntu 中啓動HAProxy <a class="header-anchor" href="#在-ubuntu-中啓動haproxy" aria-label="Permalink to “在 Ubuntu 中啓動HAProxy”">​</a></h3><p>讓 HAProxy 開機自動啓動在 /etc/default/haproxy 中配置</p><pre><code>ENABLED=1 
</code></pre><p>啓動 HAProxy：</p><pre><code># service haproxy start 
</code></pre><p>防火牆開放 80 端口：</p><pre><code># ufw allow 80 
</code></pre><h2 id="測試-haproxy" tabindex="-1">測試 HAProxy <a class="header-anchor" href="#測試-haproxy" aria-label="Permalink to “測試 HAProxy”">​</a></h2><p>檢查 HAProxy 是否工作正常，我們可以這樣做</p><p>首先準備一個 test.php 文件，文件內容如下</p><pre><code>&lt;?php
header(&#39;Content-Type: text/plain&#39;);
echo &quot;Server IP: &quot;.$_SERVER[&#39;SERVER_ADDR&#39;];
echo &quot;\\nX-Forwarded-for: &quot;.$_SERVER[&#39;HTTP_X_FORWARDED_FOR&#39;];
?&gt;
</code></pre><p>這個 PHP 文件會告訴我們哪台服務器（如負載均衡）轉發了請求，哪台後端 Web 服務器實際處理了請求。</p><p>將這個 PHP 文件放到兩個後端 Web 服務器的 Web 根目錄中。然後用 curl 命令通過負載均衡器（192.168.100.4）訪問這個文件</p><pre><code>$ curl http://192.168.100.4/test.php 
</code></pre><p>我們多次運行這個命令此時，會發現交替的輸出下面的內容（因為使用了輪詢算法）：</p><pre><code>Server IP: 192.168.100.2
X-Forwarded-for: 192.168.100.4
</code></pre><hr><pre><code>Server IP: 192.168.100.3
X-Forwarded-for: 192.168.100.4
</code></pre><p>如果我們停掉一台後端 Web 服務，curl 命令仍然正常工作，請求被分發至另一台可用的 Web 服務器。</p><h2 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h2><p>現在你有了一個完全可用的負載均衡器，以輪詢的模式對你的 Web 節點進行負載均衡。還可以去實驗其他的配置選項以適應你的環境。希望這個教程可以幫助你們的 Web 項目有更好的可用性。</p><p>你可能已經發現了，這個教程只包含單台負載均衡的設置。這意味着我們仍然有單點故障的問題。在真實場景中，你應該至少部署 2 台或者 3 台負載均衡以防止意外發生，但這不是本教程的範圍。</p><p>如果你有任何問題或建議，請在評論中提出，我會盡我的努力回答。</p><hr>`,93)),r("p",null,[e[10]||(e[10]=o("via: ",-1)),t(a,{href:"http://xmodulo.com/haproxy-http-load-balancer-linux.html"},{default:n(()=>[...e[9]||(e[9]=[o("http://xmodulo.com/haproxy-http-load-balancer-linux.html",-1)])]),_:1})]),r("p",null,[e[14]||(e[14]=o("作者：",-1)),t(a,{href:"http://xmodulo.com/author/jaroslav"},{default:n(()=>[...e[11]||(e[11]=[o("Jaroslav Štěpánek",-1)])]),_:1}),e[15]||(e[15]=o(" 譯者：",-1)),t(a,{href:"https://github.com/liaoishere"},{default:n(()=>[...e[12]||(e[12]=[o("Liao",-1)])]),_:1}),e[16]||(e[16]=o(" 校對：",-1)),t(a,{href:"https://github.com/wxy"},{default:n(()=>[...e[13]||(e[13]=[o("wxy",-1)])]),_:1})]),r("p",null,[e[19]||(e[19]=o("本文由 ",-1)),t(a,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[17]||(e[17]=[o("LCTT",-1)])]),_:1}),e[20]||(e[20]=o(" 原創翻譯，",-1)),t(a,{href:"http://linux.cn/"},{default:n(()=>[...e[18]||(e[18]=[o("Linux中國",-1)])]),_:1}),e[21]||(e[21]=o(" 榮譽推出",-1))])])}const f=p(x,[["render",h]]);export{m as __pageData,f as default};
