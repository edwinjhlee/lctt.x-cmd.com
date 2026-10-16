import{_ as t,a0 as d,w as o,s as r,I as n,x as a,a1 as e,A as l,ao as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"使用 fail2ban 和 FirewallD 黑名單保護你的系統 | LCTT x X-CMD","titleTemplate":false,"description":"使用 fail2ban 和 FirewallD 黑名單保護你的系統 | LCTT (202007) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 fail2ban 和 FirewallD 黑名單保護你的系統 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 fail2ban 和 FirewallD 黑名單保護你的系統 | LCTT (202007) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202007/20200622 Protect your system with fail2ban and firewalld blacklists","title":"使用 fail2ban 和 FirewallD 黑名單保護你的系統","tag":"202007","desc":""},"relativePath":"202007/20200622 Protect your system with fail2ban and firewalld blacklists.md","filePath":"[post].md"}'),c={name:"202007/20200622 Protect your system with fail2ban and firewalld blacklists.md"};function h(b,s,g,u,k,f){const i=d("Link");return o(),r("div",null,[s[21]||(s[21]=n("h1",{id:"使用-fail2ban-和-firewalld-黑名單保護你的系統",tabindex:"-1"},[a("使用 fail2ban 和 FirewallD 黑名單保護你的系統 "),n("a",{class:"header-anchor",href:"#使用-fail2ban-和-firewalld-黑名單保護你的系統","aria-label":"Permalink to “使用 fail2ban 和 FirewallD 黑名單保護你的系統”"},"​")],-1)),s[22]||(s[22]=n("p",null,[n("img",{src:"https://fedoramagazine.org/wp-content/uploads/2020/06/fail2ban-and-firewalld-816x345.png",alt:""})],-1)),s[23]||(s[23]=n("p",null,"如果你運行的服務器有面向公眾的 SSH 訪問，你可能遇到過惡意登錄嘗試。本文介紹瞭如何使用兩個實用程序來防止入侵者進入我們的系統。",-1)),n("p",null,[s[1]||(s[1]=a("為了防止反覆的 ssh 登錄嘗試，我們來看看 fail2ban。而且，如果你不經常旅行，基本上停留在一兩個國家，你可以將 FirewallD 配置為只允許",-1)),e(i,{href:"https://www.linode.com/community/questions/11143/top-tip-firewalld-and-ipset-country-blacklist"},{default:l(()=>[...s[0]||(s[0]=[a("從你選擇的國家訪問",-1)])]),_:1}),s[2]||(s[2]=a("。",-1))]),s[24]||(s[24]=p(`<p>首先，讓我們為不熟悉這些應用程序的人員介紹一些術語，以完成這項工作：</p><p><strong>fail2ban</strong>：一個守護進程，用於禁止發生多次認證錯誤的主機。fail2ban 將監控 SystemD 日誌，以查找對任何已啓用的“<ruby>監獄<rt>jail</rt></ruby>”的失敗的驗證嘗試。在達到指定失敗次數後，它將添加一個防火牆規則，在配置的時間內阻止該特定 IP 地址。</p><p><strong>FirewallD</strong>：一個帶有 D-Bus 接口的防火牆守護進程，提供動態防火牆。除非你另行決定使用傳統的 iptables，否則你已經在所有支持的 Fedora 和 CentOS 上安裝了 FirewallD。</p><h3 id="假定前提" tabindex="-1">假定前提 <a class="header-anchor" href="#假定前提" aria-label="Permalink to “假定前提”">​</a></h3><ul><li>主機系統有一個互聯網連接，並且要麼是直接暴露在互聯網上，要麼是通過 DMZ（這兩個都是非常糟糕的想法，除非你知道你在做什麼），要麼是有一個端口從路由器轉發過來。</li><li>雖然大部分的內容可能適用於其他系統，但本文假設當前系統是 Fedora（31 及以上）或 RHEL/CentOS 8 版本。在 CentOS 上，你必須用 <code>sudo dnf install epel-release</code> 啓用 Fedora EPEL 倉庫。</li></ul><h3 id="安裝與配置" tabindex="-1">安裝與配置 <a class="header-anchor" href="#安裝與配置" aria-label="Permalink to “安裝與配置”">​</a></h3><h4 id="fail2ban" tabindex="-1">Fail2Ban <a class="header-anchor" href="#fail2ban" aria-label="Permalink to “Fail2Ban”">​</a></h4><p>很有可能已經有某個 Firewalld 區已經允許 SSH 訪問，但 sshd 服務本身默認沒有啓用。要手動啓動它，並且不在啓動時永久啓用它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl start sshd</span></span></code></pre></div><p>或者在系統啓動時啓用，並同時啓動它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl enable --now sshd</span></span></code></pre></div><p>下一步就是安裝、配置、啓用 fail2ban。和往常一樣，安裝可以通過命令列完成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install fail2ban</span></span></code></pre></div><p>安裝完畢後，下一步就是配置“監獄”（你要以設置的任何閾值監視並禁止的服務）。默認情況下，IP 會被禁止 1 小時（這其實不夠長）。最好的做法是使用 <code>*.local</code> 文件覆蓋系統默認值，而不是直接修改 <code>*.config</code> 文件。如果我們查看我的 <code>jail.local</code>，我們可以看到：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat /etc/fail2ban/jail.local</span></span>
<span class="line"><span>[DEFAULT]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># &quot;bantime&quot; is the number of seconds that a host is banned.</span></span>
<span class="line"><span>bantime  = 1d</span></span>
<span class="line"><span></span></span>
<span class="line"><span># A host is banned if it has generated &quot;maxretry&quot; during the last &quot;findtime&quot;</span></span>
<span class="line"><span>findtime  = 1h</span></span>
<span class="line"><span></span></span>
<span class="line"><span># &quot;maxretry&quot; is the number of failures before a host get banned.</span></span>
<span class="line"><span>maxretry = 5</span></span></code></pre></div><p>換成通俗的語言講，就是在過去一小時內嘗試 5 次後，該 IP 將被封禁 1 天。對於多次被封的 IP，也可以選擇增加封禁時間，但這是另一篇文章的主題。</p><p>下一步是配置“監獄”。在本教程中顯示的是 <code>sshd</code>，但其他服務的步驟大致相同。在 <code>/etc/fail2ban/jail.d</code> 中創建一個配置文件。這是我的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat /etc/fail2ban/jail.d/sshd.local</span></span>
<span class="line"><span>[sshd]</span></span>
<span class="line"><span>enabled = true</span></span></code></pre></div><p>就這麼簡單! 很多配置已經在為 Fedora 構建的軟件包中處理了（提示：我是當前的維護者）。接下來啓用並啓動 fail2ban 服務：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl enable --now fail2ban</span></span></code></pre></div><p>希望沒有立即出錯，如果沒有，請使用下面的命令檢查 fail2ban 的狀態：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl status fail2ban</span></span></code></pre></div><p>如果它沒有錯誤地啓動，應該是這樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ systemctl status fail2ban</span></span>
<span class="line"><span>● fail2ban.service - Fail2Ban Service</span></span>
<span class="line"><span>Loaded: loaded (/usr/lib/systemd/system/fail2ban.service; disabled; vendor preset: disabled)</span></span>
<span class="line"><span>Active: active (running) since Tue 2020-06-16 07:57:40 CDT; 5s ago</span></span>
<span class="line"><span>Docs: man:fail2ban(1)</span></span>
<span class="line"><span>Process: 11230 ExecStartPre=/bin/mkdir -p /run/fail2ban (code=exited, status=0/SUCCESS)</span></span>
<span class="line"><span>Main PID: 11235 (f2b/server)</span></span>
<span class="line"><span>Tasks: 5 (limit: 4630)</span></span>
<span class="line"><span>Memory: 12.7M</span></span>
<span class="line"><span>CPU: 109ms</span></span>
<span class="line"><span>CGroup: /system.slice/fail2ban.service</span></span>
<span class="line"><span>└─11235 /usr/bin/python3 -s /usr/bin/fail2ban-server -xf start</span></span>
<span class="line"><span>Jun 16 07:57:40 localhost.localdomain systemd[1]: Starting Fail2Ban Service…</span></span>
<span class="line"><span>Jun 16 07:57:40 localhost.localdomain systemd[1]: Started Fail2Ban Service.</span></span>
<span class="line"><span>Jun 16 07:57:41 localhost.localdomain fail2ban-server[11235]: Server ready</span></span></code></pre></div><p>如果是剛剛啓動的，fail2ban 不太可能顯示任何有意思的信息，但要檢查 fail2ban 的狀態，並確保“監獄”被啓用，請輸入：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo fail2ban-client status</span></span>
<span class="line"><span>Status</span></span>
<span class="line"><span>|- Number of jail:      1</span></span>
<span class="line"><span>\`- Jail list:   sshd</span></span></code></pre></div><p>sshd “監獄”的上級狀態也會顯示出來。如果啓用了多個“監獄”，它們會在這裏顯示出來。</p><p>要查看一個“監獄”的詳細狀態，只需在前面的命令中添加“監獄”名稱。下面是我的系統的輸出，它已經運行了一段時間。我已經從輸出中刪除了被禁止的 IP：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo fail2ban-client status sshd</span></span>
<span class="line"><span>Status for the jail: sshd</span></span>
<span class="line"><span>|- Filter</span></span>
<span class="line"><span>|  |- Currently failed: 8</span></span>
<span class="line"><span>|  |- Total failed:     4399</span></span>
<span class="line"><span>|  \`- Journal matches:  _SYSTEMD_UNIT=sshd.service + _COMM=sshd</span></span>
<span class="line"><span>\`- Actions</span></span>
<span class="line"><span>   |- Currently banned: 101</span></span>
<span class="line"><span>   |- Total banned:     684</span></span>
<span class="line"><span>   \`- Banned IP list:   ...</span></span></code></pre></div><p>監控 fail2ban 日誌文件是否有入侵嘗試，可以通過“尾隨”日誌來實現：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tail -f /var/log/fail2ban.log</span></span></code></pre></div><p><code>tail</code> 是一個很好的命令列工具，默認情況下，它可以顯示一個文件的最後 10 行。添加 <code>-f</code> 告訴它尾隨文件，這是個觀察一個仍在被寫入的文件的很好方式。</p><p>由於輸出的內容中有真實的 IP，所以這裏不會提供樣本，但它的可讀性很高。<code>INFO</code> 行通常是登錄的嘗試。如果從一個特定的 IP 地址進行了足夠多的嘗試，你會看到一個 <code>NOTICE</code> 行顯示一個 IP 地址被禁止。在達到禁止時間後，你會看到一個 <code>NOTICE</code> 解禁行。</p><p>注意幾個警告行。最常見的情況是，當添加了一個禁止後，fail2ban 發現該 IP 地址已經在其禁止資料庫中，這意味着禁止可能無法正常工作。如果是最近安裝的 fail2ban 包，它應該被設置為 FirewallD 的富規則。這個包在 fail2ban-0.11.1-6 版本時從 ipset 方式切換到了富規則方式，所以如果你的 fail2ban 安裝時間較早，它可能還在嘗試使用 ipset 方式，這種方式使用的是傳統的 iptables，不是很可靠。</p><h4 id="firewalld-配置" tabindex="-1">FirewallD 配置 <a class="header-anchor" href="#firewalld-配置" aria-label="Permalink to “FirewallD 配置”">​</a></h4><h5 id="被動還是主動" tabindex="-1">被動還是主動？ <a class="header-anchor" href="#被動還是主動" aria-label="Permalink to “被動還是主動？”">​</a></h5><p>有兩種策略可以分開或一起使用：<strong>被動</strong>地將單個 IP 地址或<strong>主動</strong>地根據來源國將子網永久列入黑名單。</p><p>對於被動方式，一旦 fail2ban 運行了一段時間，最好再運行 <code>sudo fail2ban-client status sshd</code> 來看看有哪些壞蛋。很可能會有很多被禁止的 IP 地址。選擇一個，然後試着對它運行 <code>whois</code>。在輸出結果中可能會有很多有趣的信息，但是對於這個方法來説，只有來源國是重要的。為了保持簡單，讓我們過濾掉除了國家以外的所有信息。</p><p>在這個例子中，我們將使用一些著名的域名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ whois google.com | grep -i country</span></span>
<span class="line"><span>Registrant Country: US</span></span>
<span class="line"><span>Admin Country: US</span></span>
<span class="line"><span>Tech Country: US</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ whois rpmfusion.org | grep -i country</span></span>
<span class="line"><span>Registrant Country: FR</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ whois aliexpress.com | grep -i country</span></span>
<span class="line"><span>Registrant Country: CN</span></span></code></pre></div><p>使用 <code>grep -i</code> 的原因是為了使 <code>grep</code> 不區分大小寫，而大多數條目都使用的是 “Country”，而有些條目則是全小寫的 “country”，所以這種方法無論如何都能匹配。</p><p>現在知道了嘗試入侵的來源國，問題是，“是否有來自這個國家的人有合法的理由連接到這台計算機？”如果答案是否定的，那麼封鎖整個國家應該是可以接受的。</p><p>從功能上看，主動式方法它與被動式方法沒有太大區別，然而，來自有些國家的入侵企圖是非常普遍的。如果你的系統既不放在這些國家裏，也沒有任何源自這些國家的客户，那麼為什麼不現在就把它們加入黑名單而是等待呢？（LCTT 譯註：我的經驗是，動輒以國家的範疇而列入黑名單有些過於武斷。建議可以將該 IP 所屬的 WHOIS 網段放入到黑名單，因為這些網段往往具有相同的使用性質，如都用於用户接入或 IDC 託管，其安全狀況也大致相同，因此，如果有來自該網段的某個 IP 的惡意嘗試，可以預期該網段內的其它 IP 也可能被利用來做這樣的嘗試。）</p><h5 id="黑名單腳本和配置" tabindex="-1">黑名單腳本和配置 <a class="header-anchor" href="#黑名單腳本和配置" aria-label="Permalink to “黑名單腳本和配置”">​</a></h5><p>那麼如何做到這一點呢？用 FirewallD ipset。我開發了下面的腳本來儘可能地自動化這個過程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># Based on the below article</span></span>
<span class="line"><span># https://www.linode.com/community/questions/11143/top-tip-firewalld-and-ipset-country-blacklist</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Source the blacklisted countries from the configuration file</span></span>
<span class="line"><span>. /etc/blacklist-by-country</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Create a temporary working directory</span></span>
<span class="line"><span>ipdeny_tmp_dir=$(mktemp -d -t blacklist-XXXXXXXXXX)</span></span>
<span class="line"><span>pushd $ipdeny_tmp_dir</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Download the latest network addresses by country file</span></span>
<span class="line"><span>curl -LO http://www.ipdeny.com/ipblocks/data/countries/all-zones.tar.gz</span></span>
<span class="line"><span>tar xf all-zones.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span># For updates, remove the ipset blacklist and recreate</span></span>
<span class="line"><span>if firewall-cmd -q --zone=drop --query-source=ipset:blacklist; then</span></span>
<span class="line"><span>    firewall-cmd -q --permanent --delete-ipset=blacklist</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Create the ipset blacklist which accepts both IP addresses and networks</span></span>
<span class="line"><span>firewall-cmd -q --permanent --new-ipset=blacklist --type=hash:net \\</span></span>
<span class="line"><span>    --option=family=inet --option=hashsize=4096 --option=maxelem=200000 \\</span></span>
<span class="line"><span>    --set-description=&quot;An ipset list of networks or ips to be dropped.&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Add the address ranges by country per ipdeny.com to the blacklist</span></span>
<span class="line"><span>for country in $countries; do</span></span>
<span class="line"><span>    firewall-cmd -q --permanent --ipset=blacklist \\</span></span>
<span class="line"><span>        --add-entries-from-file=./$country.zone &amp;&amp; \\</span></span>
<span class="line"><span>        echo &quot;Added $country to blacklist ipset.&quot;</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Block individual IPs if the configuration file exists and is not empty</span></span>
<span class="line"><span>if [ -s &quot;/etc/blacklist-by-ip&quot; ]; then</span></span>
<span class="line"><span>    echo &quot;Adding IPs blacklists.&quot;</span></span>
<span class="line"><span>    firewall-cmd -q --permanent --ipset=blacklist \\</span></span>
<span class="line"><span>        --add-entries-from-file=/etc/blacklist-by-ip &amp;&amp; \\</span></span>
<span class="line"><span>        echo &quot;Added IPs to blacklist ipset.&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Add the blacklist ipset to the drop zone if not already setup</span></span>
<span class="line"><span>if firewall-cmd -q --zone=drop --query-source=ipset:blacklist; then</span></span>
<span class="line"><span>    echo &quot;Blacklist already in firewalld drop zone.&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;Adding ipset blacklist to firewalld drop zone.&quot;</span></span>
<span class="line"><span>    firewall-cmd --permanent --zone=drop --add-source=ipset:blacklist</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>firewall-cmd -q --reload</span></span>
<span class="line"><span></span></span>
<span class="line"><span>popd</span></span>
<span class="line"><span>rm -rf $ipdeny_tmp_dir</span></span></code></pre></div><p>這個應該安裝到 <code>/usr/local/sbin</code>，不要忘了讓它可執行！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo chmod +x /usr/local/sbin/firewalld-blacklist</span></span></code></pre></div><p>然後創建一個配置文件 <code>/etc/blacklist-by-country</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Which countries should be blocked?</span></span>
<span class="line"><span># Use the two letter designation separated by a space.</span></span>
<span class="line"><span>countries=&quot;&quot;</span></span></code></pre></div><p>而另一個配置文件 <code>/etc/blacklist-by-ip</code>，每行只有一個 IP，沒有任何額外的格式化。</p><p>在這個例子中，從 ipdeny 的區文件中隨機選擇了 10 個國家：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ls | shuf -n 10 | sed &quot;s/\\.zone//g&quot; | tr &#39;\\n&#39; &#39; &#39;</span></span>
<span class="line"><span>nl ee ie pk is sv na om gp bn</span></span></code></pre></div><p>現在只要在配置文件中加入至少一個國家，就可以運行了！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo firewalld-blacklist</span></span>
<span class="line"><span>  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current</span></span>
<span class="line"><span>                                 Dload  Upload   Total   Spent    Left  Speed</span></span>
<span class="line"><span>100   142  100   142    0     0   1014      0 --:--:-- --:--:-- --:--:--  1014</span></span>
<span class="line"><span>100  662k  100  662k    0     0   989k      0 --:--:-- --:--:-- --:--:--  989k</span></span>
<span class="line"><span>Added nl to blacklist ipset.</span></span>
<span class="line"><span>Added ee to blacklist ipset.</span></span>
<span class="line"><span>Added ie to blacklist ipset.</span></span>
<span class="line"><span>Added pk to blacklist ipset.</span></span>
<span class="line"><span>Added is to blacklist ipset.</span></span>
<span class="line"><span>Added sv to blacklist ipset.</span></span>
<span class="line"><span>Added na to blacklist ipset.</span></span>
<span class="line"><span>Added om to blacklist ipset.</span></span>
<span class="line"><span>Added gp to blacklist ipset.</span></span>
<span class="line"><span>Added bn to blacklist ipset.</span></span>
<span class="line"><span>Adding ipset blacklist to firewalld drop zone.</span></span>
<span class="line"><span>success</span></span></code></pre></div><p>要驗證 FirewallD 黑名單是否成功，請檢查 <code>drop</code> 區和 <code>blacklist</code> ipset。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo firewall-cmd --info-zone=drop</span></span>
<span class="line"><span>drop (active)</span></span>
<span class="line"><span>  target: DROP</span></span>
<span class="line"><span>  icmp-block-inversion: no</span></span>
<span class="line"><span>  interfaces:</span></span>
<span class="line"><span>  sources: ipset:blacklist</span></span>
<span class="line"><span>  services:</span></span>
<span class="line"><span>  ports:</span></span>
<span class="line"><span>  protocols:</span></span>
<span class="line"><span>  masquerade: no</span></span>
<span class="line"><span>  forward-ports:</span></span>
<span class="line"><span>  source-ports:</span></span>
<span class="line"><span>  icmp-blocks:</span></span>
<span class="line"><span>  rich rules:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo firewall-cmd --info-ipset=blacklist | less</span></span>
<span class="line"><span>blacklist</span></span>
<span class="line"><span>  type: hash:net</span></span>
<span class="line"><span>  options: family=inet hashsize=4096 maxelem=200000</span></span>
<span class="line"><span>  entries:</span></span></code></pre></div><p>第二條命令將輸出所有的子網，這些子網是基於被封殺的國家而添加的，可能會相當長。</p><h3 id="那麼現在我該怎麼做" tabindex="-1">那麼現在我該怎麼做？ <a class="header-anchor" href="#那麼現在我該怎麼做" aria-label="Permalink to “那麼現在我該怎麼做？”">​</a></h3><p>雖然在開始的時候，監控的頻率會比較高，但隨着時間的推移，入侵嘗試的次數應該會隨着黑名單的增加而減少。那麼目標應該是維護而不是主動監控。</p>`,62)),n("p",null,[s[4]||(s[4]=a("為此，我創建了一個 SystemD 服務文件和定時器，這樣每月都會刷新由 ipdeny 維護的每個國家的子網。事實上，這裏討論的所有內容都可以從我的 ",-1)),e(i,{href:"https://pagure.io/firewalld-blacklist"},{default:l(()=>[...s[3]||(s[3]=[a("pagure.io",-1)])]),_:1}),s[5]||(s[5]=a(" 項目中下載。",-1))]),s[25]||(s[25]=p(`<p>是不是很高興你看完了整篇文章？現在只要把服務文件和定時器下載到 <code>/etc/systemd/system/</code>，並啓用定時器就行了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl daemon-reload</span></span>
<span class="line"><span>$ sudo systemctl enable --now firewalld-blacklist.timer</span></span></code></pre></div><hr>`,3)),n("p",null,[s[7]||(s[7]=a("via: ",-1)),e(i,{href:"https://fedoramagazine.org/protect-your-system-with-fail2ban-and-firewalld-blacklists/"},{default:l(()=>[...s[6]||(s[6]=[a("https://fedoramagazine.org/protect-your-system-with-fail2ban-and-firewalld-blacklists/",-1)])]),_:1})]),n("p",null,[s[12]||(s[12]=a("作者：",-1)),e(i,{href:"https://fedoramagazine.org/author/hobbes1069/"},{default:l(()=>[...s[8]||(s[8]=[a("hobbes1069",-1)])]),_:1}),s[13]||(s[13]=a(" 選題：",-1)),e(i,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[9]||(s[9]=[a("lujun9972",-1)])]),_:1}),s[14]||(s[14]=a(" 譯者：",-1)),e(i,{href:"https://github.com/wxy"},{default:l(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1}),s[15]||(s[15]=a(" 校對：",-1)),e(i,{href:"https://github.com/wxy"},{default:l(()=>[...s[11]||(s[11]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[18]||(s[18]=a("本文由 ",-1)),e(i,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[16]||(s[16]=[a("LCTT",-1)])]),_:1}),s[19]||(s[19]=a(" 原創編譯，",-1)),e(i,{href:"https://linux.cn/"},{default:l(()=>[...s[17]||(s[17]=[a("Linux中國",-1)])]),_:1}),s[20]||(s[20]=a(" 榮譽推出",-1))])])}const C=t(c,[["render",h]]);export{w as __pageData,C as default};
