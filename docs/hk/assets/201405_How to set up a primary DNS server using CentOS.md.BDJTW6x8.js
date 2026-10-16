import{_ as s,a0 as l,w as i,s as m,I as t,x as r,a1 as n,A as o,ao as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"CentOS上配置主DNS服務器的簡易指南 | LCTT x X-CMD","titleTemplate":false,"description":"CentOS上配置主DNS服務器的簡易指南 | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"CentOS上配置主DNS服務器的簡易指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"CentOS上配置主DNS服務器的簡易指南 | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/How to set up a primary DNS server using CentOS","title":"CentOS上配置主DNS服務器的簡易指南","tag":"201405","desc":""},"relativePath":"201405/How to set up a primary DNS server using CentOS.md","filePath":"[post].md"}'),N={name:"201405/How to set up a primary DNS server using CentOS.md"};function c(u,e,S,x,h,D){const d=l("Link"),a=l("tt");return i(),m("div",null,[e[30]||(e[30]=t("h1",{id:"centos上配置主dns服務器的簡易指南",tabindex:"-1"},[r("CentOS上配置主DNS服務器的簡易指南 "),t("a",{class:"header-anchor",href:"#centos上配置主dns服務器的簡易指南","aria-label":"Permalink to “CentOS上配置主DNS服務器的簡易指南”"},"​")],-1)),e[31]||(e[31]=t("p",null,"任何運作中的域名至少有兩台DNS服務器，一台稱為主域名服務器（比如叫做ns1），而另一台稱為從域名服務器（比如叫做ns2）。這些服務器通常用於故障轉移：如果一台宕機，另外一台就激活成為DNS服務器（譯註：此處譯者有不同意見，事實上兩個或更多的DNS服務器是共同工作的，並不是第一台停止服務後，第二台才接替工作。解析器是隨機選擇一個DNS服務器進行詢問，如果超時則會詢問下一個，這是多個DNS的故障容錯機制）。也可以實現包括負載均衡、防火牆和集羣在內的更為複雜的故障轉移機制。",-1)),e[32]||(e[32]=t("p",null,"一個域的所有DNS條目都會被添加到主域名服務器，從服務器只會根據主服務器上的SOA記錄的序列號參數從主服務器同步所有信息。",-1)),t("p",null,[e[1]||(e[1]=r("此教程將會講述",-1)),e[2]||(e[2]=t("strong",null,"如何創建一台在CentOS上運行的主DNS服務器",-1)),e[3]||(e[3]=r("。請注意，本教程中提到的DNS服務器將會是一台開放DNS服務器，這也就是説該服務器將會回應來自任何IP地址的查詢。對於DNS服務器的訪問控制將在",-1)),n(d,{href:"http://xmodulo.com/2014/04/close-open-dns-resolver.html"},{default:o(()=>[...e[0]||(e[0]=[r("此教程",-1)])]),_:1}),e[4]||(e[4]=r("中討論（譯註：開放的DNS服務器是一個安全隱患。）。",-1))]),e[33]||(e[33]=p(`<p>在開始之前，我想要提一下的是，DNS可以在chroot環境中配置，也可以在非chroot環境中配置。chroot環境將DNS服務器限制在系統中某個特定目錄中，以避免讓服務器具有系統級的訪問權限。在此環境中，任何DNS服務器的安全漏洞不會導致整個系統的破壞。將DNS服務器置於chroot環境中，對於部署測試也很有用。</p><h3 id="目標" tabindex="-1">目標 <a class="header-anchor" href="#目標" aria-label="Permalink to “目標”">​</a></h3><p>我們將在基於域名example.tst的測試環境中配置一台DNS服務器，這個域名是虛假的（並不真實存在的）。這樣，我們就不會意外干擾到其它真實的域名。</p><p>在該域中，有以下三台服務器。</p><table><tbody><tr><td>服務器</td><td>IP地址</td><td>託管的服務</td><td>完全限定域名（FQDN）</td></tr><tr><td>Server A</td><td>172.16.1.1</td><td>Mail</td><td>mail.example.tst</td></tr><tr><td>Server B</td><td>172.16.1.2</td><td>Web, FTP</td><td>www.example.tst<br>ftp.example.tst</td></tr><tr><td>Server C</td><td>172.16.1.3</td><td>Primary DNS server</td><td>ns1.example.tst</td></tr></tbody></table><p>我們將會配置一台主域名服務器，並添加上表中必要的域和DNS記錄。</p><h3 id="設置主機名" tabindex="-1">設置主機名 <a class="header-anchor" href="#設置主機名" aria-label="Permalink to “設置主機名”">​</a></h3><p>所有的主機名必須以完全限定域名的方式正確定義，可以通過以下方法完成設置。</p><pre><code># vim /etc/sysconfig/network 
</code></pre><blockquote><p>HOSTNAME=ns1.example.tst</p></blockquote><p>注：該文件中指定的主機名參數在服務器啓動後才會啓用（譯註：或者網絡服務重啓後），因此，該設置不會馬上生效。下面的命令可以立刻臨時性地修改主機名。</p><pre><code># hostname ns1.example.tst 
</code></pre><p>一旦設置，主機名可以通過以下命令驗證。</p><pre><code># hostname 
</code></pre><blockquote><p>ns1.example.tst</p></blockquote><p>在進入下一步之前，請確保上述三台服務器上的主機名已經設置正確。</p><h3 id="安裝軟件包" tabindex="-1">安裝軟件包 <a class="header-anchor" href="#安裝軟件包" aria-label="Permalink to “安裝軟件包”">​</a></h3><p>我們將使用bind來配置DNS服務，該軟件可以很方便地通過yum來安裝。</p><p>不使用chroot環境的：</p><pre><code># yum install bind bind-chroot 
</code></pre><p>使用chroot環境的：</p><pre><code># yum install bind bind-chroot 
</code></pre><h3 id="準備配置文件" tabindex="-1">準備配置文件 <a class="header-anchor" href="#準備配置文件" aria-label="Permalink to “準備配置文件”">​</a></h3><p>正如前面提到的，bind可以在chroot環境下配置，或者在非chroot環境下配置，配置文件的路徑會因為是否安裝chroot包而不同。</p>`,24)),t("table",null,[t("tbody",null,[e[13]||(e[13]=t("tr",null,[t("td"),t("td",null,"配置文件路徑"),t("td",null,"區域文件路徑")],-1)),t("tr",null,[t("td",null,[e[6]||(e[6]=r(" 不帶有 ",-1)),n(a,null,{default:o(()=>[...e[5]||(e[5]=[r("chroot",-1)])]),_:1})]),e[7]||(e[7]=t("td",null," /etc/ ",-1)),e[8]||(e[8]=t("td",null," /var/named/ ",-1))]),t("tr",null,[t("td",null,[e[10]||(e[10]=r(" 帶有 ",-1)),n(a,null,{default:o(()=>[...e[9]||(e[9]=[r("chroot",-1)])]),_:1})]),e[11]||(e[11]=t("td",null," /var/named/chroot/etc/ ",-1)),e[12]||(e[12]=t("td",null," /var/named/chroot/var/named/ ",-1))])])]),e[34]||(e[34]=p(`<p>可以使用默認提供的named.conf配置文件，但是為了更方便使用，我們將使用另外一個簡單的配置文件模板。</p><p>非<code>chroot</code>環境：</p><pre><code># cp /usr/share/doc/bind-9.8.2/sample/etc/named.rfc1912.zones /etc/named.conf
</code></pre><p><code>chroot</code>環境：</p><pre><code># cp /usr/share/doc/bind-9.8.2/sample/etc/named.rfc1912.zones /var/named/chroot/etc/named.conf
</code></pre><p>現在來備份並修改配置文件。</p><p>非<code>chroot</code>環境：</p><pre><code># vim /etc/named.conf 
</code></pre><p><code>chroot</code>環境：</p><pre><code># vim /var/named/chroot/etc/named.conf 
</code></pre><p>添加/修改以下行：</p><pre><code>options {
## 區域文件存放目錄 ##
directory &quot;/var/named&quot;;

## 對於非本地權威域的請求轉發到 Google 的公開 DNS 服務器 ##
forwarders { 8.8.8.8; };
};

## 申明一個本地域 example.tst ##
zone &quot;example.tst&quot; IN {
        type master;
        file &quot;example-fz&quot;; ## 存儲文件名，放在 /var/named ##
        allow-update { none; };
};

## 為IP段 172.16.1.0 提供反向解析 ##
zone &quot;1.16.172.in-addr.arpa&quot; IN {
        type master;
        file &quot;rz-172-16-1&quot;; ## 存儲文件名，放在 /var/named ##
        allow-update { none; };
};
</code></pre><h3 id="準備區域文件" tabindex="-1">準備區域文件 <a class="header-anchor" href="#準備區域文件" aria-label="Permalink to “準備區域文件”">​</a></h3><p>那些默認的區域文件會自動創建到<code>/var/named</code> 或者<code>/var/named/chroot/var/named</code> (<code>chroot</code>環境)。如果在這些地方找不到這些文件，<code>/usr/share/doc/bind</code>目錄中提供了模板文件，可以從這裏拷貝。</p><p>假設默認區域文件沒有提供，我們可以從<code>/usr</code>拷貝模板文件。</p><p>非<code>chroot</code>環境：</p><pre><code># cp /usr/share/doc/bind-9.8.2/sample/var/named/named.* /var/named/
</code></pre><p><code>chroot</code>環境：</p><pre><code># cp /usr/share/doc/bind-9.8.2/sample/var/named/named.* /var/named/chroot/var/named
</code></pre><p>很好！由於現在默認的區域文件已經準備好，我們可以為example.tst和172.16.1.0網絡創建區域文件了，以下要點必須時刻謹記。</p><ul><li>區域文件中的特殊字符‘@’意味着空。（譯註：意即代表本域。）</li><li>所有的完全限定域名必須以點‘.’結束。如：example.tst.如果沒有這個點，你會發生問題。（譯註：即會被當做當前@所代表的域的子域。）</li></ul><h4 id="_1-轉發區域-本地權威域" tabindex="-1">1. 轉發區域（本地權威域） <a class="header-anchor" href="#_1-轉發區域-本地權威域" aria-label="Permalink to “1. 轉發區域（本地權威域）”">​</a></h4><p>轉發區域包含了名稱到IP地址的映射。對於公開的域，域名託管提供商的DNS服務器存儲了轉發區域文件。（譯註：轉發區域即本地的權威域，由這個服務器自身提供權威的解析數據）</p><p>非<code>chroot</code>環境：</p><pre><code># vim /var/named/example-fz 
</code></pre><p><code>chroot</code>環境：</p><pre><code># vim /var/named/chroot/var/named/example-fz 
</code></pre><hr><pre><code>$TTL 1D
@       IN SOA  ns1.example.tst. sarmed.example.tst. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
IN NS      ns1.example.tst.
IN A       172.16.1.3
mail		IN A		172.16.1.1
		IN MX 10	mail.example.tst.
www		IN A		172.16.1.2
ns1		IN A		172.16.1.3
ftp		IN CNAME	www.example.tst.
</code></pre><p><strong>説明</strong>：在區域文件中，SOA是開始授權（Start Of Authority）的意思。它的值的第一段是授權名稱服務器的完全限定域名。完全限定域名後面跟着的是電子郵件地址。由於不能在sarmed@example.tst這樣的格式中使用‘@’符號（譯註：@有特定意義，代表本域。），我們將電子郵件地址重寫成sarmed.example.tst.這樣的格式。</p><p>以下是典型的常用DNS記錄類型：</p><ul><li><strong>NS</strong>：域名服務器</li><li><strong>A</strong>: 地址記錄，記錄主機名到IP地址的映射（譯註，此處原文有誤。）</li><li><strong>MX</strong>: 郵件交換記錄。這裏我們只用了一個郵件交換記錄，設置其優先級為10。如果有多個郵件交換記錄，我們可以使用多個數值優先級，數字小的優先級最高。例如，MX 0比MX 1優先級更高。</li><li><strong>CNAME</strong>: 標準名。如果在一台單一服務器上託管了多個服務，也很可能將多個名稱解析到某個單一服務器。CNAME指定了一台服務器可能有的其它名稱，並且將它們指向具有實際A記錄的名稱。</li></ul><h4 id="_2-反向區域" tabindex="-1">2. 反向區域 <a class="header-anchor" href="#_2-反向區域" aria-label="Permalink to “2. 反向區域”">​</a></h4><p>反向區域包含了IP地址到名稱的映射。這裏，我們為172.16.1.0網絡創建反向區域。在正式的域中，公共IP區塊的擁有者擁有的DNS服務器存儲反向區域文件。（某些服務，如郵件服務，要求IP地址具備正確的反向解析才能正常工作。而IP的反向解析，通常是由IP的擁有者如接入商或IDC來負責解析。）</p><p>非<code>chroot</code>環境：</p><pre><code># vim /var/named/rz-172-16-1 
</code></pre><p><code>chroot</code>環境：</p><pre><code># vim /var/named/chroot/var/named/rz-172-16-1 
</code></pre><hr><pre><code>$TTL 1D
@       IN SOA  ns1.example.tst. sarmed.example.tst. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
IN NS      ns1.example.tst.
1		IN PTR	mail.example.tst.
2		IN PTR	www.example.tst.
3		IN PTR	ns1.example.tst.
</code></pre><p><strong>説明</strong>:除了下面的參數外，反向區域文件中的大多數參數和轉發區域文件中的相同。</p><ul><li>PTR: IP反向解析記錄，指向一個反向限定域名。</li></ul><h3 id="結束工作" tabindex="-1">結束工作 <a class="header-anchor" href="#結束工作" aria-label="Permalink to “結束工作”">​</a></h3><p>既然區域文件已經準備好，我們接下來調整它們的權限。</p><p>非<code>chroot</code>環境：</p><pre><code># chgrp named /var/named/* 
</code></pre><p><code>chroot</code>環境：</p><pre><code># chgrp named /var/named/chroot/var/named/* 
</code></pre><p>現在，我們為DNS服務器設置IP地址。</p><pre><code># vim /etc/resolv.conf 
</code></pre><blockquote><p>nameserver 172.16.1.3</p></blockquote><p>最後，我們可以啓動DNS服務，並確保將它添加到啓動服務中。</p><pre><code># service named restart
# chkconfig named on 
</code></pre><p>DNS服務器起動後，建議關注一下日誌文件/var/log/messages，這裏頭包含了後台運行的一些有用信息。如果沒有發現錯誤，我們可以開始測試DNS服務器。</p><h3 id="測試dns" tabindex="-1">測試DNS <a class="header-anchor" href="#測試dns" aria-label="Permalink to “測試DNS”">​</a></h3><p>我們可以使用dig或者nslookup來測試DNS。首先，我們需要安裝必要的軟件包。</p><pre><code># yum install bind-utils 
</code></pre><h4 id="_1-使用dig測試轉發區域" tabindex="-1">1. 使用dig測試轉發區域 <a class="header-anchor" href="#_1-使用dig測試轉發區域" aria-label="Permalink to “1. 使用dig測試轉發區域”">​</a></h4><p>使用dig來測試時，必須時刻關注狀態信息：“NOERROR”，任何其它值都表明存在問題。</p><pre><code># dig example.tst 
</code></pre><hr><pre><code>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY,  status: NOERROR, id: 31184

;; QUESTION SECTION:
;example.com.                   IN      A

;; ANSWER SECTION:
example.com.            86400   IN      A       172.16.1.3

;; AUTHORITY SECTION:
example.com.            86400   IN      NS      ns1.example.com.

;; ADDITIONAL SECTION:
ns1.example.com.        86400   IN      A       172.16.1.3
</code></pre><h4 id="_2-使用dig測試ptr記錄" tabindex="-1">2. 使用dig測試PTR記錄 <a class="header-anchor" href="#_2-使用dig測試ptr記錄" aria-label="Permalink to “2. 使用dig測試PTR記錄”">​</a></h4><p>使用dig來測試時，必須時刻關注狀態信息：“NOERROR”，任何其它值都表明存在問題。（譯註，也可用 dig 1.1.16.172.in-addr.arpa. ptr 來測試。）</p><pre><code># dig -x 172.16.1.1 
</code></pre><hr><pre><code>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 27415

;; QUESTION SECTION:
;1.1.17.172.in-addr.arpa.       IN      PTR

;; ANSWER SECTION:
1.1.16.172.in-addr.arpa. 86400  IN      PTR     mail.example.tst.

;; AUTHORITY SECTION:
1.16.172.in-addr.arpa.  86400   IN      NS      ns1.example.tst.

;; ADDITIONAL SECTION:
ns1.example.tst.        86400   IN      A       172.16.1.3
</code></pre><h4 id="_3-使用dig測試mx記錄" tabindex="-1">3. 使用dig測試MX記錄 <a class="header-anchor" href="#_3-使用dig測試mx記錄" aria-label="Permalink to “3. 使用dig測試MX記錄”">​</a></h4><pre><code># dig example.tst mx 
</code></pre><hr><pre><code>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 35405

;; QUESTION SECTION:
;example.tst.                        IN      MX

;; ANSWER SECTION:
example.tst.         14366   IN      MX     10	mail.example.tst.
</code></pre><h3 id="排錯提示" tabindex="-1">排錯提示 <a class="header-anchor" href="#排錯提示" aria-label="Permalink to “排錯提示”">​</a></h3><ol><li>我已經把SELinux關閉。</li><li>保證防火牆沒有阻擋UDP 53端口</li><li>萬一出錯，可在/var/log/messages中查看到有用的信息</li><li>確保區域文件的屬主為‘named’</li><li>確保DNS服務器的IP地址是/etc/resolv.conf中的第一條目</li><li>如果你使用example.tst作為實驗環境，確保將服務器從互聯網斷開，因為example.tst是一個不存在的域。</li></ol>`,73)),t("p",null,[e[16]||(e[16]=r("最後小結，該教程關注的是實驗環境中配置example.tst域用作為演示。請注意，該教程中創建了一台公共DNS服務器，此服務器會回應來自任何源IP地址的查詢。如果你是在配置DNS生產服務器，請確保檢查與公共DNS相關的策略。其它教程涵蓋了",-1)),n(d,{href:"http://xmodulo.com/2014/04/secondary-dns-server-centos.html"},{default:o(()=>[...e[14]||(e[14]=[r("創建從DNS服務器",-1)])]),_:1}),e[17]||(e[17]=r(", ",-1)),n(d,{href:"http://xmodulo.com/2014/04/close-open-dns-resolver.html"},{default:o(()=>[...e[15]||(e[15]=[r("限制對DNS服務器的訪問",-1)])]),_:1}),e[18]||(e[18]=r("以及部署DNSSEC。",-1))]),e[35]||(e[35]=t("h2",{id:"希望此教程對您有所幫助。",tabindex:"-1"},[r("希望此教程對您有所幫助。 "),t("a",{class:"header-anchor",href:"#希望此教程對您有所幫助。","aria-label":"Permalink to “希望此教程對您有所幫助。”"},"​")],-1)),t("p",null,[e[20]||(e[20]=r("via: ",-1)),n(d,{href:"http://xmodulo.com/2014/04/primary-dns-server-using-centos.html"},{default:o(()=>[...e[19]||(e[19]=[r("http://xmodulo.com/2014/04/primary-dns-server-using-centos.html",-1)])]),_:1})]),t("p",null,[e[23]||(e[23]=r("譯者：",-1)),n(d,{href:"https://github.com/GOLinux"},{default:o(()=>[...e[21]||(e[21]=[r("GOLinux",-1)])]),_:1}),e[24]||(e[24]=r(" 校對：",-1)),n(d,{href:"https://github.com/wxy"},{default:o(()=>[...e[22]||(e[22]=[r("wxy",-1)])]),_:1})]),t("p",null,[e[27]||(e[27]=r("本文由 ",-1)),n(d,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[25]||(e[25]=[r("LCTT",-1)])]),_:1}),e[28]||(e[28]=r(" 原創翻譯，",-1)),n(d,{href:"http://linux.cn/"},{default:o(()=>[...e[26]||(e[26]=[r("Linux中國",-1)])]),_:1}),e[29]||(e[29]=r(" 榮譽推出",-1))])])}const g=s(N,[["render",c]]);export{T as __pageData,g as default};
