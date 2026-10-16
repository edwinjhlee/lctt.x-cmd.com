import{_ as l,a0 as e,w as t,s as c,ao as p,I as a,x as n,a1 as o,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"使用 badIPs.com 保護你的服務器，並通過 Fail2ban 報告惡意 IP | LCTT x X-CMD","titleTemplate":false,"description":"使用 badIPs.com 保護你的服務器，並通過 Fail2ban 報告惡意 IP | LCTT (201704) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 badIPs.com 保護你的服務器，並通過 Fail2ban 報告惡意 IP | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 badIPs.com 保護你的服務器，並通過 Fail2ban 報告惡意 IP | LCTT (201704) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201704/20170209 How to protect your server with badIPs.com and report IPs with Fail2ban on Debian","title":"使用 badIPs.com 保護你的服務器，並通過 Fail2ban 報告惡意 IP","tag":"201704","desc":""},"relativePath":"201704/20170209 How to protect your server with badIPs.com and report IPs with Fail2ban on Debian.md","filePath":"[post].md"}'),d={name:"201704/20170209 How to protect your server with badIPs.com and report IPs with Fail2ban on Debian.md"};function b(h,s,u,g,w,f){const i=e("Link");return t(),c("div",null,[s[8]||(s[8]=p('<h1 id="使用-badips-com-保護你的服務器-並通過-fail2ban-報告惡意-ip" tabindex="-1">使用 badIPs.com 保護你的服務器，並通過 Fail2ban 報告惡意 IP <a class="header-anchor" href="#使用-badips-com-保護你的服務器-並通過-fail2ban-報告惡意-ip" aria-label="Permalink to “使用 badIPs.com 保護你的服務器，並通過 Fail2ban 報告惡意 IP”">​</a></h1><p>這篇指南向你介紹使用 badips 濫用追蹤器（abuse tracker） 和 Fail2ban 保護你的服務器或計算機的步驟。我已經在 Debian 8 Jessie 和 Debian 7 Wheezy 系統上進行了測試。</p><p><strong>什麼是 badIPs？</strong></p><p>BadIps 是通過 [fail2ban][8] 報告為不良 IP 的列表。</p><p>這個指南包括兩個部分，第一部分介紹列表的使用，第二部分介紹數據注入。</p><h3 id="使用-badips-列表" tabindex="-1">使用 badIPs 列表 <a class="header-anchor" href="#使用-badips-列表" aria-label="Permalink to “使用 badIPs 列表”">​</a></h3><h4 id="定義安全等級和類別" tabindex="-1">定義安全等級和類別 <a class="header-anchor" href="#定義安全等級和類別" aria-label="Permalink to “定義安全等級和類別”">​</a></h4><p>你可以通過使用 REST API 獲取 IP 地址列表。</p>',8)),a("ul",null,[a("li",null,[s[1]||(s[1]=n("當你使用 GET 請求獲取 URL：[",-1)),o(i,{href:"https://www.badips.com/get/categories"},{default:r(()=>[...s[0]||(s[0]=[n("https://www.badips.com/get/categories",-1)])]),_:1}),s[2]||(s[2]=n("][9] 後，你就可以看到服務中現有的所有不同類別。",-1))]),s[3]||(s[3]=a("li",null,[n("第二步，決定適合你的等級。 參考 badips 應該有所幫助（我個人使用 "),a("code",null,"scope = 3"),n("）：")],-1)),s[4]||(s[4]=a("li",null,"如果你想要編譯一個統計信息模組或者將數據用於實驗目的，那麼你應該用等級 0 開始。",-1)),s[5]||(s[5]=a("li",null,"如果你想用防火牆保護你的服務器或者網站，使用等級 2。可能也要和你的結果相結合，儘管它們可能沒有超過 0 或 1 的情況。",-1)),s[6]||(s[6]=a("li",null,"如果你想保護一個網絡商店、或高流量、賺錢的電子商務服務器，我推薦你使用值 3 或 4。當然還是要和你的結果相結合。",-1)),s[7]||(s[7]=a("li",null,"如果你是偏執狂，那就使用 5。",-1))]),s[9]||(s[9]=p(`<p>現在你已經有了兩個變量，通過把它們兩者連接起來獲取你的鏈接。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>http://www.badips.com/get/list/{{SERVICE}}/{{LEVEL}}</span></span></code></pre></div><p>注意：像我一樣，你可以獲取所有服務。在這種情況下把服務的名稱改為 <code>any</code>。</p><p>最終的 URL 就是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>https://www.badips.com/get/list/any/3</span></span></code></pre></div><h3 id="創建腳本" tabindex="-1">創建腳本 <a class="header-anchor" href="#創建腳本" aria-label="Permalink to “創建腳本”">​</a></h3><p>所有都完成了之後，我們就會創建一個簡單的腳本。</p><p>1、 把你的列表放到一個臨時文件。</p><p>2、 在 iptables 中創建一個鏈（chain）（只需要創建一次）。（LCTT 譯註：iptables 可能包括多個表（tables），表可能包括多個鏈（chains），鏈可能包括多個規則（rules））</p><p>3、 把所有鏈接到該鏈的數據（舊條目）刷掉。</p><p>4、 把每個 IP 鏈接到這個新的鏈。</p><p>5、 完成後，阻塞所有鏈接到該鏈的 INPUT / OUTPUT /FORWARD 請求。</p><p>6、 刪除我們的臨時文件。</p><p>為此，我們創建腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cd /home/&lt;user&gt;/</span></span>
<span class="line"><span>vi myBlacklist.sh</span></span></code></pre></div><p>把以下內容輸入到文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>### based on this version http://www.timokorthals.de/?p=334</span></span>
<span class="line"><span>### adapted by Stéphane T.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_ipt=/sbin/iptables    ### iptables 路徑（應該是這個）</span></span>
<span class="line"><span>_input=badips.db       ### 資料庫的名稱（會用這個名稱下載）</span></span>
<span class="line"><span>_pub_if=eth0           ### 連接到互聯網的設備（執行 $ifconfig 獲取）</span></span>
<span class="line"><span>_droplist=droplist     ### iptables 中鏈的名稱（如果你已經有這麼一個名稱的鏈，你就換另外一個）</span></span>
<span class="line"><span>_level=3               ### Blog（LCTT 譯註：Bad log）等級：不怎麼壞（0）、確認壞（3）、相當壞（5）（從 www.badips.com 獲取詳情）</span></span>
<span class="line"><span>_service=any           ### 記錄日誌的服務（從 www.badips.com 獲取詳情）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 獲取不良 IPs</span></span>
<span class="line"><span>wget -qO- http://www.badips.com/get/list/\${_service}/$_level &gt; $_input || { echo &quot;$0: Unable to download ip list.&quot;; exit 1; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 設置我們的黑名單 ###</span></span>
<span class="line"><span>### 首先清除該鏈</span></span>
<span class="line"><span>$_ipt --flush $_droplist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 創建新的鏈</span></span>
<span class="line"><span>### 首次運行時取消下面一行的註釋</span></span>
<span class="line"><span># $_ipt -N $_droplist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 過濾掉註釋和空行</span></span>
<span class="line"><span>### 保存每個 ip 到 $ip</span></span>
<span class="line"><span>for ip in \`cat $_input\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>	### 添加到 $_droplist</span></span>
<span class="line"><span>	$_ipt -A $_droplist -i \${_pub_if} -s $ip -j LOG --log-prefix &quot;Drop Bad IP List &quot;</span></span>
<span class="line"><span>	$_ipt -A $_droplist -i \${_pub_if} -s $ip -j DROP</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 最後，插入或者追加到我們的黑名單列表</span></span>
<span class="line"><span>$_ipt -I INPUT -j $_droplist</span></span>
<span class="line"><span>$_ipt -I OUTPUT -j $_droplist</span></span>
<span class="line"><span>$_ipt -I FORWARD -j $_droplist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 刪除你的臨時文件</span></span>
<span class="line"><span>rm $_input</span></span>
<span class="line"><span>exit 0</span></span></code></pre></div><p>完成這些後，你應該創建一個定時任務定期更新我們的黑名單。</p><p>為此，我使用 crontab 在每天晚上 11:30（在我的延遲備份之前） 運行腳本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>crontab -e</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>23 30 * * * /home/&lt;user&gt;/myBlacklist.sh #Block BAD IPS</span></span></code></pre></div><p>別忘了更改腳本的權限：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chmod + x myBlacklist.sh</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>現在終於完成了，你的服務器/計算機應該更安全了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你也可以像下面這樣手動運行腳本：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>cd /home/&lt;user&gt;/</span></span>
<span class="line"><span>./myBlacklist.sh</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>它可能要花費一些時間，因此期間別中斷腳本。事實上，耗時取決於該腳本的最後一行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 使用 Fail2ban 向 badIPs 報告 IP 地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在本篇指南的第二部分，我會向你展示如何通過使用 Fail2ban 向 badips.com 網站報告不良 IP 地址。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### Fail2ban &gt;= 0.8.12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通過 Fail2ban 完成報告。取決於你 Fail2ban 的版本，你要使用本章的第一或第二節。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果你 fail2ban 的版本是 0.8.12 或更新版本。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>fail2ban-server --version</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在每個你要報告的類別中，添加一個 action。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>[ssh]</span></span>
<span class="line"><span>enabled = true</span></span>
<span class="line"><span>action = iptables-multiport</span></span>
<span class="line"><span>         badips[category=ssh]</span></span>
<span class="line"><span>port = ssh</span></span>
<span class="line"><span>filter = sshd</span></span>
<span class="line"><span>logpath = /var/log/auth.log</span></span>
<span class="line"><span>maxretry= 6</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正如你看到的，類別是 SSH，從 ([https://www.badips.com/get/categories][11]) 查找正確類別。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### Fail2ban &lt; 0.8.12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果版本是 0.8.12 之前，你需要新建一個 action。你可以從 [https://www.badips.com/asset/fail2ban/badips.conf][12] 下載。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>wget https://www.badips.com/asset/fail2ban/badips.conf -O /etc/fail2ban/action.d/badips.conf</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在上面的 badips.conf 中，你可以像前面那樣激活每個類別，也可以全局啓用它：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>cd /etc/fail2ban/</span></span>
<span class="line"><span>vi jail.conf</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>[DEFAULT]</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>banaction = iptables-multiport</span></span>
<span class="line"><span>            badips</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>現在重啓 fail2ban - 從現在開始它就應該開始報告了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	service fail2ban restart</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 你的 IP 報告統計信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最後一步 - 沒那麼有用。你可以創建一個密鑰。  但如果你想看你的數據，這一步就很有幫助。  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>複製/粘貼下面的命令，你的控制台中就會出現一個 JSON 響應。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>wget https://www.badips.com/get/key -qO -</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;err&quot;:&quot;&quot;,</span></span>
<span class="line"><span>  &quot;suc&quot;:&quot;new key 5f72253b673eb49fc64dd34439531b5cca05327f has been set.&quot;,</span></span>
<span class="line"><span>  &quot;key&quot;:&quot;5f72253b673eb49fc64dd34439531b5cca05327f&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>到 [badips][13] 網站，輸入你的 “key” 並點擊 “statistics”。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>現在你就可以看到不同類別的統計信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>via: https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>作者：[Stephane T][a]</span></span>
<span class="line"><span>譯者：[ictlyh](https://github.com/ictlyh)</span></span>
<span class="line"><span>校對：[wxy](https://github.com/wxy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>本文由 [LCTT](https://github.com/LCTT/TranslateProject) 原創編譯，[Linux中國](https://linux.cn/) 榮譽推出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[a]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/</span></span>
<span class="line"><span>[1]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#define-your-security-level-and-category</span></span>
<span class="line"><span>[2]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#failban-gt-</span></span>
<span class="line"><span>[3]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#failban-ltnbsp</span></span>
<span class="line"><span>[4]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#use-the-badips-list</span></span>
<span class="line"><span>[5]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#lets-create-the-script</span></span>
<span class="line"><span>[6]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#report-ip-addresses-to-badips-with-failban</span></span>
<span class="line"><span>[7]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#statistics-of-your-ip-reporting</span></span>
<span class="line"><span>[8]:http://www.fail2ban.org/</span></span>
<span class="line"><span>[9]:https://www.badips.com/get/categories</span></span>
<span class="line"><span>[10]:http://www.timokorthals.de/?p=334</span></span>
<span class="line"><span>[11]:https://www.badips.com/get/categories</span></span>
<span class="line"><span>[12]:https://www.badips.com/asset/fail2ban/badips.conf</span></span>
<span class="line"><span>[13]:https://www.badips.com/</span></span></code></pre></div>`,23))])}const y=l(d,[["render",b]]);export{_ as __pageData,y as default};
