import{_ as p,a0 as l,w as i,s as d,ao as a,I as s,a1 as o,A as r,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const A=JSON.parse('{"title":"Debian/Ubuntu系統中安裝和配置UFW－簡單的防火牆 | LCTT x X-CMD","titleTemplate":false,"description":"Debian/Ubuntu系統中安裝和配置UFW－簡單的防火牆 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Debian/Ubuntu系統中安裝和配置UFW－簡單的防火牆 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Debian/Ubuntu系統中安裝和配置UFW－簡單的防火牆 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/How to Install and Configure UFW – An Un-complicated FireWall in Debian or Ubuntu","title":"Debian/Ubuntu系統中安裝和配置UFW－簡單的防火牆","tag":"201401","desc":""},"relativePath":"201401/How to Install and Configure UFW – An Un-complicated FireWall in Debian or Ubuntu.md","filePath":"[post].md"}'),u={name:"201401/How to Install and Configure UFW – An Un-complicated FireWall in Debian or Ubuntu.md"};function g(c,t,w,f,h,b){const e=l("Link");return i(),d("div",null,[t[12]||(t[12]=a('<h1 id="debian-ubuntu系統中安裝和配置ufw-簡單的防火牆" tabindex="-1">Debian/Ubuntu系統中安裝和配置UFW－簡單的防火牆 <a class="header-anchor" href="#debian-ubuntu系統中安裝和配置ufw-簡單的防火牆" aria-label="Permalink to “Debian/Ubuntu系統中安裝和配置UFW－簡單的防火牆”">​</a></h1><p>自從計算機互連後，各種服務迅速發展。用户使用的<strong>電子郵件、社交媒體、在線商城、即時聊天</strong>甚至<strong>網絡會議</strong>等服務如雨後春筍般湧現。但從另一方面來説，這些連接服務也具有雙刃劍，比如它們當中的<strong>病毒、惡意軟件、特洛伊木馬</strong>等會向計算機發送惡意消息。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2013/12/UFW-Firewall.jpeg" alt="Ubuntu下的 UFW 防火牆"></p><p><em>安裝 UFW 防火牆</em></p><p>作為最大的計算機網絡，互聯網上可並不都是善意的用户。因此，為了確保我們的計算機或服務器安全，我們需要進行保護。</p><p>在你的計算機或服務器上一個必須有的組件就是<strong>防火牆</strong>。在<strong>維基百科</strong>中，其定義是：</p><blockquote><p>防火牆是計算機中一款應用軟件或基於硬件的網絡安全系統。它根據應用配置的規則，分析數據包，然後決定是否允許此數據包通過，來控制整個系統的網絡數據進出訪問權限。</p></blockquote><p><strong>iptables</strong> 是一款廣泛使用於服務器的防火牆。它是一款應用程序，它會根據一系列規則來管理服務器上的進出數據流。一般來説，只有可信任的連接才允許進入服務器。但 <strong>iptables</strong> 是在控制台模式下運行，它非常的複雜。不熟悉 iptables 配置規則和命令的用户可以讀讀下面的文章，它描述瞭如何使用iptables防火牆。</p>',8)),s("ul",null,[s("li",null,[o(e,{href:"http://www.tecmint.com/basic-guide-on-iptables-linux-firewall-tips-commands/"},{default:r(()=>[...t[0]||(t[0]=[n("iptables 基礎 (Linux 防火牆) 指南",-1)])]),_:1})])]),t[13]||(t[13]=a(`<h2 id="debian-ubuntu-系統中安裝-ufw-防火牆" tabindex="-1">Debian/Ubuntu 系統中安裝 UFW 防火牆 <a class="header-anchor" href="#debian-ubuntu-系統中安裝-ufw-防火牆" aria-label="Permalink to “Debian/Ubuntu 系統中安裝 UFW 防火牆”">​</a></h2><p>為了降低 <strong>iptables</strong> 設置的複雜度，有許多對應的前端應用。如果你運行的是 <strong>Ubuntu</strong> linux 系統的話， <strong>UFW</strong> 就是一款默認的防火牆工具。我們開始來探討 <strong>UFW</strong> 防火牆吧。</p><h3 id="什麼是-ufw" tabindex="-1">什麼是 UFW <a class="header-anchor" href="#什麼是-ufw" aria-label="Permalink to “什麼是 UFW”">​</a></h3><p><strong>UFW (簡單的防火牆)</strong> 是廣泛使用的 <strong>iptables 防火牆</strong> 的前端應用，這是非常適合於基於主機的防火牆。UFW 即提供了一套管理<strong>網絡過濾器</strong>的框架，又提供了控制防火牆的命令列界面接口。它給那些不熟悉防火牆概念的 Linux 新用户提供了友好、易使用的用户界面。</p><p>同時，另一方面，它也提供了命令列界面，為系統管理員準備了一套複雜的命令，用來設置複雜的防火牆規則。<strong>UFW</strong> 對像 <strong>Debian、Ubuntu</strong> 和 <strong>Linux Mint</strong> 這些發佈版本來説也是上上之選。</p><h2 id="ufw-基本用法" tabindex="-1">UFW 基本用法 <a class="header-anchor" href="#ufw-基本用法" aria-label="Permalink to “UFW 基本用法”">​</a></h2><p>首先，用如下命令來檢查下系統上是否已經安裝了 <strong>UFW</strong> 。</p><pre><code>$ sudo dpkg --get-selections | grep ufw
</code></pre><p>如還沒有安裝，可以使用 <strong>apt</strong> 命令來安裝，如下所示：</p><pre><code>$ sudo apt-get install ufw
</code></pre><p>在使用前，你應該檢查下 <strong>UFW</strong> 是否已經在運行。用下面的命令來檢查。</p><pre><code>$ sudo ufw status
</code></pre><p>如果你發現狀態是： <strong>inactive</strong> , 意思是沒有被激活或不起作用。</p><h3 id="啓用-禁用-ufw" tabindex="-1">啓用/禁用 UFW <a class="header-anchor" href="#啓用-禁用-ufw" aria-label="Permalink to “啓用/禁用 UFW”">​</a></h3><p>要啓用它，你只需在終端下鍵入如下命令：</p><pre><code>$ sudo ufw enable
</code></pre><p>在系統啓動時啓用和激活防火牆</p><p>要禁用，只需輸入：</p><pre><code>$ sudo ufw disable
</code></pre><h3 id="列出當前ufw規則" tabindex="-1">列出當前UFW規則 <a class="header-anchor" href="#列出當前ufw規則" aria-label="Permalink to “列出當前UFW規則”">​</a></h3><p>在防火牆被激活後，你可以向裏面添加你自己的規則。如果你想看看默認的規則，可以輸入。</p><pre><code>$ sudo ufw status verbose
</code></pre><p>輸出樣例：</p><pre><code>Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing)
New profiles: skip
$
</code></pre><h3 id="添加ufw規則" tabindex="-1">添加UFW規則 <a class="header-anchor" href="#添加ufw規則" aria-label="Permalink to “添加UFW規則”">​</a></h3><p>如你所見，默認是不允許所有外部訪問連接的。如果你想遠程連接你的機器，就得開放相應的端口。例如，你想用 ssh 來連接，下面是添加的命令。</p><h3 id="允許訪問" tabindex="-1">允許訪問 <a class="header-anchor" href="#允許訪問" aria-label="Permalink to “允許訪問”">​</a></h3><pre><code>$ sudo ufw allow ssh

[sudo] password for pungki :
Rule added
Rule added (v6)
$
</code></pre><p>再一次檢查狀態，會看到如下的一些輸出。</p><pre><code>$ sudo ufw status

To 		Action 			From
-- 		----------- 		------
22 		ALLOW 			Anywhere
22 		ALLOW 			Anywhere (v6)
</code></pre><p>如果你有很多條規則，想快速的在每條規則上加個序號數字的話，請使用 numbered 參數。</p><pre><code>$ sudo ufw status numbered

To 		Action 			From
------ 		----------- 		------
[1] 22 		ALLOW 			Anywhere
[2] 22 		ALLOW 			Anywhere (v6)
</code></pre><p>第一條規則的意思是<strong>所有</strong>通過<strong>22端口</strong>訪問機器的 <strong>tcp</strong> 或 <strong>udp</strong> 數據包都是允許的。如果你希望僅允許 <strong>tcp</strong> 數據包訪問應該怎麼辦？可以在<strong>服務端口</strong>後加個 <strong>tcp</strong> 參數。下面的示例及相應的輸出。</p><pre><code>$ sudo ufw allow ssh/tcp

To 		Action 			From
------ 		----------- 		------
22/tcp 		ALLOW 			Anywhere
22/tcp 		ALLOW 			Anywhere (v6)
</code></pre><h3 id="拒絕訪問" tabindex="-1">拒絕訪問 <a class="header-anchor" href="#拒絕訪問" aria-label="Permalink to “拒絕訪問”">​</a></h3><p>添加拒絕規則也是同樣的招數。我們假設你想拒絕 ftp 訪問, 你只需輸入</p><pre><code>$ sudo ufw deny ftp

To 		Action 			From
------ 		----------- 		------
21/tcp 		DENY 			Anywhere
21/tcp 		DENY 			Anywhere (v6)
</code></pre><h3 id="添加特定端口" tabindex="-1">添加特定端口 <a class="header-anchor" href="#添加特定端口" aria-label="Permalink to “添加特定端口”">​</a></h3><p>有時候，我們會自定義一個端口而不是使用標準提供的。讓我們試着把機器上 <strong>ssh</strong> 的 <strong>22</strong> 端口換成 <strong>2290</strong> 端口，然後允許從 <strong>2290</strong> 端口訪問，我們像這樣添加：</p><pre><code>$ sudo ufw allow 2290/ssh (譯者注：些處演示例子有問題)

To 		Action 			From
-- 		----------- 		------
2290 		ALLOW 			Anywhere
2290 		ALLOW 			Anywhere (v6)
</code></pre><p>你也可以把<strong>端口範圍</strong>添加進規則。如果我們想打開從 <strong>2290到2300</strong> 的端口以供 <strong>tcp</strong> 協議使用，命令如下示：</p><pre><code>$ sudo ufw allow 2290:2300/tcp

To 			Action 			From
------ 			----------- 		------
2290:2300/tcp 		ALLOW 			Anywhere
2290:2300/tcp 		ALLOW			Anywhere (v6)
</code></pre><p>同樣你想使用 <strong>udp</strong> 的話，如下操作。</p><pre><code>$ sudo ufw allow 2290:2300/udp

To 			Action 			From
------ 			----------- 		------
2290:2300/udp 		ALLOW 			Anywhere
2290:2300/udp 		ALLOW			Anywhere (v6)
</code></pre><p>請注意你得明確的指定是 ‘<strong>tcp</strong>’ 或 ‘<strong>udp</strong>’，否則會出現跟下面類似的錯誤信息。</p><pre><code>ERROR: Must specify ‘tcp’ or ‘udp’ with multiple ports
</code></pre><h3 id="添加特定-ip" tabindex="-1">添加特定 IP <a class="header-anchor" href="#添加特定-ip" aria-label="Permalink to “添加特定 IP”">​</a></h3><p>前面我們添加的規則都是基於 <strong>服務程序</strong> 或 <strong>端口</strong> 的，UFW 也可以添加基於 <strong>IP 地址</strong>的規則。下面是命令樣例。</p><pre><code>$ sudo ufw allow from 192.168.0.104
</code></pre><p>你也可以使用子網掩碼來擴寬範圍。</p><pre><code>$ sudo ufw allow form 192.168.0.0/24

To 		Action 			From
-- 		----------- 		------
Anywhere	ALLOW 			192.168.0.104
Anywhere	ALLOW 			192.168.0.0/24
</code></pre><p>如你所見， from 參數僅僅限制連接的來源，而目的（用 <strong>To</strong> 列表示）是<strong>所有地方</strong>。讓我們看看允許訪問 <strong>22端口(ssh)</strong>的例子。</p><pre><code>$ sudo ufw allow to any port 22
</code></pre><p>上面的命令會允許從任何地方以及任何協議都可以訪問<strong>22端口</strong>。</p><h3 id="組合參數" tabindex="-1">組合參數 <a class="header-anchor" href="#組合參數" aria-label="Permalink to “組合參數”">​</a></h3><p>對於更具體的規則，你也可以把 <strong>IP 地址</strong>、<strong>協議</strong>和<strong>端口</strong>這些組合在一起用。我們想創建一條規則，限制僅僅來自於 192.168.0.104 的 IP ，而且只能使用 <strong>tcp 協議</strong>和通過 <strong>22端口</strong> 來訪問本地資源。我們可以用如下所示的命令。</p><pre><code>$ sudo ufw allow from 192.168.0.104 proto tcp to any port 22
</code></pre><p>創建拒絕規則的命令和允許的規則類似，僅需要把 <strong>allow</strong> 參數換成 <strong>deny</strong> 參數就可以。</p><h3 id="刪除規則" tabindex="-1">刪除規則 <a class="header-anchor" href="#刪除規則" aria-label="Permalink to “刪除規則”">​</a></h3><p>某些時候需要刪除現有的規則。再一次使用 <strong>UFW</strong> 刪除規則是很簡單的。在上面的示例中，已經創建瞭如下的規則，現在你想刪除它們。</p><pre><code>To 		Action 			From
-- 		----------- 		------
22/tcp		ALLOW 			192.168.0.104
21/tcp		ALLOW 			Anywhere
21/tcp 		ALLOW 			Anywhere (v6)
</code></pre><p>刪除規則有兩個方法。</p><p><strong>方法1</strong></p><p>下面的命令將會 <strong>刪除</strong> 與 <strong>ftp</strong> 相關的規則。所以像 <strong>21/tcp</strong> 這條 <strong>ftp</strong> 默認訪問端口的規則將會被刪除掉。</p><pre><code>$ sudo ufw delete allow ftp
</code></pre><p><strong>方法2</strong></p><p>但當你使用如下命令來刪除上面例子中的規則時，</p><pre><code>$ sudo ufw delete allow ssh

或者 

$ sudo ufw delete allow 22/tcp
</code></pre><p>會出現如下所示的一些錯誤</p><pre><code>Could not delete non-existent rule
Could not delete non-existent rule (v6)
</code></pre><p>我們還有一招。上面已經提到過，可以序列數字來代替你想刪除的規則。讓我們試試。</p><pre><code>$ sudo ufw status numbered

To 		Action 			From
-- 		----------- 		------
[1] 22/tcp		ALLOW 			192.168.0.104
[2] 21/tcp		ALLOW 			Anywhere
[3] 21/tcp 		ALLOW 			Anywhere (v6)
</code></pre><p>然後我們刪除正在使用的第一條規則。按 “ <strong>y</strong> ” 就會永久的刪除這條規則。</p><pre><code>$ sudo ufw delete 1

Deleting :
Allow from 192.168.0.104 to any port 22 proto tcp
Proceed with operation (y|n)? y
</code></pre><p>從這些用法中你就可以發現它們的不同。 <strong>方法2</strong> 在刪除前需要 <strong>用户確認</strong> ，而 <strong>方法1</strong> 不需要。</p><h3 id="重置所有規則" tabindex="-1">重置所有規則### <a class="header-anchor" href="#重置所有規則" aria-label="Permalink to “重置所有規則###”">​</a></h3><p>某些情況下，你也許需要 <strong>刪除/重置</strong> 所有的規則。可以輸入。</p><pre><code>$ sudo ufw reset

Resetting all rules to installed defaults. Proceed with operation (y|n)? y
</code></pre><p>如果你輸入“ <strong>y</strong> ”， <strong>UFW</strong> 在重置你的 ufw 前會備份所有已經存在規則，然後重置。重置操作也會使你的防火牆處於不可用狀態，如果你想使用得再一次啓用它。</p><h3 id="高級功能" tabindex="-1">高級功能 <a class="header-anchor" href="#高級功能" aria-label="Permalink to “高級功能”">​</a></h3><p>正如我上面所説，UFW防火牆能夠做到iptables可以做到的一切。這是通過一些規則文件來完成的，他們只不過是 <strong>iptables-restore</strong> 所對應的文本文件而已。是否可以通過 ufw 命令微調 UFW 的與/或邏輯來增加 iptables 命令其實就是編輯幾個文本文件的事。</p><ul><li>/etc/default/ufw: 默認策略的主配置文件，支持 IPv6 和 內核模組。</li><li>/etc/ufw/before[6].rules: 通過 ufw 命令添加進規則之前裏面存在的規則會首先計算。</li><li>/etc/ufw/after[6].rules: 通過 ufw 命令添加進規則之後裏面存在的規則會進行計算。</li><li>/etc/ufw/sysctl.conf: 內核網絡可調參數。</li><li>/etc/ufw/ufw.conf: 設置系統啓動時 UFW 是否可用，和設置日誌級別。</li></ul><h2 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h2><p><strong>UFW</strong> 作為 iptables 的前端應用，給用户提供了簡單的接口界面。使用着不需要去記非常複雜的 iptables 語法。<strong>UFW</strong> 也使用了‘ <strong>簡單英語</strong> ’作為它的參數。</p><p>像 <strong>Allow、deny、reset</strong> 就是他們當中的一部分。我相信有很多很多 iptables 前端應用，但 UFW 絕對是那些想要快速、簡單的就建立自己的防火牆，而且還很安全的用户的最佳替代品之一。請輸入 <strong>man ufw</strong> 查看 <strong>ufw 用户手冊</strong>，來了解更多詳情。</p><hr>`,86)),s("p",null,[t[2]||(t[2]=n("via: ",-1)),o(e,{href:"http://www.tecmint.com/how-to-install-and-configure-ufw-firewall/"},{default:r(()=>[...t[1]||(t[1]=[n("http://www.tecmint.com/how-to-install-and-configure-ufw-firewall/",-1)])]),_:1})]),s("p",null,[t[5]||(t[5]=n("譯者：",-1)),o(e,{href:"https://github.com/runningwater"},{default:r(()=>[...t[3]||(t[3]=[n("runningwater",-1)])]),_:1}),t[6]||(t[6]=n(" 校對：",-1)),o(e,{href:"https://github.com/carolinewuyan"},{default:r(()=>[...t[4]||(t[4]=[n("Caroline",-1)])]),_:1})]),s("p",null,[t[9]||(t[9]=n("本文由 ",-1)),o(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[7]||(t[7]=[n("LCTT",-1)])]),_:1}),t[10]||(t[10]=n(" 原創翻譯，",-1)),o(e,{href:"http://linux.cn/"},{default:r(()=>[...t[8]||(t[8]=[n("Linux中國",-1)])]),_:1}),t[11]||(t[11]=n(" 榮譽推出",-1))])])}const U=p(u,[["render",g]]);export{A as __pageData,U as default};
