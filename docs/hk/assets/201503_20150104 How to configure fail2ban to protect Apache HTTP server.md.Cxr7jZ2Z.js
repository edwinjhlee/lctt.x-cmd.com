import{_ as o,a0 as p,w as i,s,I as t,x as e,a1 as l,A as r,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const A=JSON.parse('{"title":"如何配置 fail2ban 來保護 Apache 服務器 | LCTT x X-CMD","titleTemplate":false,"description":"如何配置 fail2ban 來保護 Apache 服務器 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何配置 fail2ban 來保護 Apache 服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何配置 fail2ban 來保護 Apache 服務器 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150104 How to configure fail2ban to protect Apache HTTP server","title":"如何配置 fail2ban 來保護 Apache 服務器","tag":"201503","desc":""},"relativePath":"201503/20150104 How to configure fail2ban to protect Apache HTTP server.md","filePath":"[post].md"}'),f={name:"201503/20150104 How to configure fail2ban to protect Apache HTTP server.md"};function h(b,a,c,u,m,g){const n=p("Link");return i(),s("div",null,[a[22]||(a[22]=t("h1",{id:"如何配置-fail2ban-來保護-apache-服務器",tabindex:"-1"},[e("如何配置 fail2ban 來保護 Apache 服務器 "),t("a",{class:"header-anchor",href:"#如何配置-fail2ban-來保護-apache-服務器","aria-label":"Permalink to “如何配置 fail2ban 來保護 Apache 服務器”"},"​")],-1)),a[23]||(a[23]=t("p",null,"生產環境中的 Apache 服務器可能會受到不同的攻擊。攻擊者或許試圖通過暴力攻擊或者執行惡意腳本來獲取未經授權或者禁止訪問的目錄。一些惡意爬蟲或許會掃描你網站下的各種安全漏洞，或者通過收集email地址和web表單來發送垃圾郵件。",-1)),a[24]||(a[24]=t("p",null,[e("Apache服務器具有全面的日誌功能，可以捕捉到各種攻擊所反映的異常事件。然而，它還不能系統地解析具體的apache 日誌並迅速地對潛在的攻擊進行反應（比如，禁止/解禁IP地址）。這時候"),t("code",null,"fail2ban"),e("可以解救這一切，解放了系統管理員的工作。")],-1)),a[25]||(a[25]=t("p",null,[t("code",null,"fail2ban"),e("是一款入侵防禦工具，可以基於系統日誌檢測不同的工具並且可以自動採取保護措施比如：通過"),t("code",null,"iptables"),e("禁止ip、通過 /etc/hosts.deny 阻止連接、或者通過郵件發送通知。fail2ban具有一系列預定義的“監獄”，它使用特定程序日誌過濾器來檢測通常的攻擊。你也可以編寫自定義的規則來檢測來自任意程序的攻擊。")],-1)),t("p",null,[a[1]||(a[1]=e("在本教程中，我會演示如何配置fail2ban來保護你的apache服務器。我假設你已經安裝了apache和fail2ban。對於安裝，請參考",-1)),l(n,{href:"http://linux.cn/article-5067-1.html"},{default:r(()=>[...a[0]||(a[0]=[e("另外一篇教程",-1)])]),_:1}),a[2]||(a[2]=e("。",-1))]),a[26]||(a[26]=t("h3",{id:"什麼是-fail2ban-監獄",tabindex:"-1"},[e("什麼是 Fail2ban 監獄 "),t("a",{class:"header-anchor",href:"#什麼是-fail2ban-監獄","aria-label":"Permalink to “什麼是 Fail2ban 監獄”"},"​")],-1)),t("p",null,[a[4]||(a[4]=e("讓我們更深入地瞭解 fail2ban 監獄。監獄定義了具體的應用策略，它會為指定的程序觸發一個保護措施。fail2ban在 /etc/fail2ban/jail.conf 下為一些流行程序如Apache、Dovecot、Lighttpd、MySQL、Postfix、",-1)),l(n,{href:"http://linux.cn/article-5067-1.html"},{default:r(()=>[...a[3]||(a[3]=[e("SSH",-1)])]),_:1}),a[5]||(a[5]=e(" 等預定義了一些監獄。每個監獄都通過特定的程序日誌過濾器（在/etc/fail2ban/fileter.d 下面）來檢測通常的攻擊。讓我看一個例子監獄：SSH監獄。",-1))]),a[27]||(a[27]=d(`<pre><code>[ssh]
enabled   = true
port      = ssh
filter    = sshd
logpath   = /var/log/auth.log
maxretry  = 6
banaction = iptables-multiport
</code></pre><p>SSH監獄的配置定義了這些參數：</p><ul><li><strong>[ssh]</strong>： 方括號內是監獄的名字。</li><li><strong>enabled</strong>：是否啓用監獄</li><li><strong>port</strong>： 端口號(或者對應的服務名稱)</li><li><strong>filter</strong>： 檢測攻擊的日誌解析規則</li><li><strong>logpath</strong>： 所檢測的日誌文件</li><li><strong>maxretry</strong>： 最大失敗次數</li><li><strong>banaction</strong>： 所進行的禁止操作</li></ul><p>定義在監獄配置中的任意參數都會覆蓋<code>fail2ban-wide</code> 中相應的默認配置參數。相反，任何缺少的參數都會使用定義在[DEFAULT] 字段的默認值。</p><p>預定義的日誌過濾器都放在/etc/fail2ban/filter.d，而可以採取的禁止操作放在 /etc/fail2ban/action.d。</p><p><img src="https://farm8.staticflickr.com/7538/16076581722_cbca3c1307_b.jpg" alt=""></p><p>如果你想要覆蓋<code>fail2ban</code>的默認操作或者定義任何自定義監獄，你可以創建*/etc/fail2ban/jail.local**文件。本篇教程中，我會使用/etc/fail2ban/jail.local。</p><h3 id="啓用預定義的apache監獄" tabindex="-1">啓用預定義的apache監獄 <a class="header-anchor" href="#啓用預定義的apache監獄" aria-label="Permalink to “啓用預定義的apache監獄”">​</a></h3><p><code>fail2ban</code>的默認安裝為Apache服務提供了一些預定義監獄和過濾器。我要啓用這些內建的Apache監獄。由於Debian和RedHat配置的稍微不同，我會分別提供它們的配置文件。</p><h4 id="在debian-或者-ubuntu啓用apache監獄" tabindex="-1">在Debian 或者 Ubuntu啓用Apache監獄 <a class="header-anchor" href="#在debian-或者-ubuntu啓用apache監獄" aria-label="Permalink to “在Debian 或者 Ubuntu啓用Apache監獄”">​</a></h4><p>要在基於Debian的系統上啓用預定義的apache監獄，如下創建/etc/fail2ban/jail.local。</p><pre><code>$ sudo vi /etc/fail2ban/jail.local 
</code></pre><hr><pre><code># 檢測密碼認證失敗
[apache]
enabled  = true
port     = http,https
filter   = apache-auth
logpath  = /var/log/apache*/*error.log
maxretry = 6
 
# 檢測漏洞和 PHP 脆弱性掃描 
[apache-noscript]
enabled  = true
port     = http,https
filter   = apache-noscript
logpath  = /var/log/apache*/*error.log
maxretry = 6
 
# 檢測 Apache 溢出攻擊 
[apache-overflows]
enabled  = true
port     = http,https
filter   = apache-overflows
logpath  = /var/log/apache*/*error.log
maxretry = 2
 
# 檢測在服務器尋找主目錄的嘗試
[apache-nohome]
enabled  = true
port     = http,https
filter   = apache-nohome
logpath  = /var/log/apache*/*error.log
maxretry = 2
</code></pre><p>由於上面的監獄沒有指定措施，這些監獄都將會觸發默認的措施。要查看默認的措施，在/etc/fail2ban/jail.conf中的[DEFAULT]下找到“banaction”。</p><pre><code>banaction = iptables-multiport
</code></pre><p>本例中，默認的操作是iptables-multiport（定義在/etc/fail2ban/action.d/iptables-multiport.conf）。這個措施使用iptable的多端口模組禁止一個IP地址。</p><p>在啓用監獄後，你必須重啓fail2ban來加載監獄。</p><pre><code>$ sudo service fail2ban restart 
</code></pre><h4 id="在centos-rhel-或者-fedora中啓用apache監獄" tabindex="-1">在CentOS/RHEL 或者 Fedora中啓用Apache監獄 <a class="header-anchor" href="#在centos-rhel-或者-fedora中啓用apache監獄" aria-label="Permalink to “在CentOS/RHEL 或者 Fedora中啓用Apache監獄”">​</a></h4><p>要在基於紅帽的系統中啓用預定義的監獄，如下創建/etc/fail2ban/jail.local。</p><pre><code>$ sudo vi /etc/fail2ban/jail.local 
</code></pre><hr><pre><code># 檢測密碼認證失敗
[apache]
enabled  = true
port     = http,https
filter   = apache-auth
logpath  = /var/log/httpd/*error_log
maxretry = 6
 
# 檢測抓取郵件地址的爬蟲
[apache-badbots]
enabled  = true
port     = http,https
filter   = apache-badbots
logpath  = /var/log/httpd/*access_log
bantime  = 172800
maxretry = 1
 
# 檢測漏洞和 PHP 脆弱性掃描 
[apache-noscript]
enabled  = true
port     = http,https
filter   = apache-noscript
logpath  = /var/log/httpd/*error_log
maxretry = 6
 
# 檢測 Apache 溢出攻擊 
[apache-overflows]
enabled  = true
port     = http,https
filter   = apache-overflows
logpath  = /var/log/httpd/*error_log
maxretry = 2
 
# 檢測在服務器尋找主目錄的嘗試
[apache-nohome]
enabled  = true
port     = http,https
filter   = apache-nohome
logpath  = /var/log/httpd/*error_log
maxretry = 2
 
# 檢測執行不存在的腳本的企圖
# 這些都是流行的網站服務程序
# 如：webmail， phpMyAdmin，WordPress
port     = http,https
filter   = apache-botsearch
logpath  = /var/log/httpd/*error_log
maxretry = 2
</code></pre><p>注意這些監獄文件默認的操作是iptables-multiport（定義在/etc/fail2ban/jail.conf中[DEFAULT]字段下的“banaction”中）。這個措施使用iptable的多端口模組禁止一個IP地址。</p><p>啓用監獄後，你必須重啓fail2ban來加載監獄。</p><p>在 Fedora 或者 CentOS/RHEL 7中：</p><pre><code>$ sudo systemctl restart fail2ban 
</code></pre><p>在 CentOS/RHEL 6中：</p><pre><code>$ sudo service fail2ban restart 
</code></pre><h3 id="檢查和管理fail2ban禁止狀態" tabindex="-1">檢查和管理fail2ban禁止狀態 <a class="header-anchor" href="#檢查和管理fail2ban禁止狀態" aria-label="Permalink to “檢查和管理fail2ban禁止狀態”">​</a></h3><p>監獄一旦激活後，你可以用fail2ban的客户端命令列工具來監測當前的禁止狀態。</p><p>查看激活的監獄列表：</p><pre><code>$ sudo fail2ban-client status 
</code></pre><p>查看特定監獄的狀態（包含禁止的IP列表）：</p><pre><code>$ sudo fail2ban-client status [監獄名] 
</code></pre><p><img src="https://farm8.staticflickr.com/7572/15891521967_5c6cbc5f8f_c.jpg" alt=""></p><p>你也可以手動禁止或者解禁IP地址：</p><p>要用制定監獄禁止IP：</p><pre><code>$ sudo fail2ban-client set [name-of-jail] banip [ip-address] 
</code></pre><p>要解禁指定監獄屏蔽的IP：</p><pre><code>$ sudo fail2ban-client set [name-of-jail] unbanip [ip-address] 
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3>`,43)),t("p",null,[a[7]||(a[7]=e("本篇教程解釋了fail2ban監獄如何工作以及如何使用內置的監獄來保護Apache服務器。依賴於你的環境以及要保護的web服務器類型，你或許要調整已有的監獄或者編寫自定義監獄和日誌過濾器。查看outfail2ban的",-1)),l(n,{href:"https://github.com/fail2ban/fail2ban"},{default:r(()=>[...a[6]||(a[6]=[e("官方Github頁面",-1)])]),_:1}),a[8]||(a[8]=e("來獲取最新的監獄和過濾器示例。",-1))]),a[28]||(a[28]=t("p",null,"你有在生產環境中使用fail2ban麼？分享一下你的經驗吧。",-1)),a[29]||(a[29]=t("hr",null,null,-1)),t("p",null,[a[10]||(a[10]=e("via: ",-1)),l(n,{href:"http://xmodulo.com/configure-fail2ban-apache-http-server.html"},{default:r(()=>[...a[9]||(a[9]=[e("http://xmodulo.com/configure-fail2ban-apache-http-server.html",-1)])]),_:1})]),t("p",null,[a[14]||(a[14]=e("作者：",-1)),l(n,{href:"http://xmodulo.com/author/nanni"},{default:r(()=>[...a[11]||(a[11]=[e("Dan Nanni",-1)])]),_:1}),a[15]||(a[15]=e(" 譯者：",-1)),l(n,{href:"https://github.com/geekpi"},{default:r(()=>[...a[12]||(a[12]=[e("geekpi",-1)])]),_:1}),a[16]||(a[16]=e(" 校對：",-1)),l(n,{href:"https://github.com/wxy"},{default:r(()=>[...a[13]||(a[13]=[e("wxy",-1)])]),_:1})]),t("p",null,[a[19]||(a[19]=e("本文由 ",-1)),l(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...a[17]||(a[17]=[e("LCTT",-1)])]),_:1}),a[20]||(a[20]=e(" 原創翻譯，",-1)),l(n,{href:"http://linux.cn/"},{default:r(()=>[...a[18]||(a[18]=[e("Linux中國",-1)])]),_:1}),a[21]||(a[21]=e(" 榮譽推出",-1))])])}const v=o(f,[["render",h]]);export{A as __pageData,v as default};
