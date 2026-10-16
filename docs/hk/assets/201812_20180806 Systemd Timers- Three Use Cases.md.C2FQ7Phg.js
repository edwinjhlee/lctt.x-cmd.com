import{_ as l,a0 as o,w as d,s as r,I as e,x as n,a1 as i,A as p,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"Systemd 定時器：三種使用場景 | LCTT x X-CMD","titleTemplate":false,"description":"Systemd 定時器：三種使用場景 | LCTT (201812) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Systemd 定時器：三種使用場景 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Systemd 定時器：三種使用場景 | LCTT (201812) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201812/20180806 Systemd Timers- Three Use Cases","title":"Systemd 定時器：三種使用場景","tag":"201812","desc":""},"relativePath":"201812/20180806 Systemd Timers- Three Use Cases.md","filePath":"[post].md"}'),c={name:"201812/20180806 Systemd Timers- Three Use Cases.md"};function m(u,s,g,b,h,k){const a=o("Link");return d(),r("div",null,[s[38]||(s[38]=e("h1",{id:"systemd-定時器-三種使用場景",tabindex:"-1"},[n("Systemd 定時器：三種使用場景 "),e("a",{class:"header-anchor",href:"#systemd-定時器-三種使用場景","aria-label":"Permalink to “Systemd 定時器：三種使用場景”"},"​")],-1)),s[39]||(s[39]=e("blockquote",null,[e("p",null,"繼續 systemd 教程，這些特殊的例子可以展示給你如何更好的利用 systemd 定時器單元。")],-1)),s[40]||(s[40]=e("p",null,[e("img",{src:"https://www.linux.com/sites/lcom/files/styles/rendered_file/public/timer-analogue-1078057.jpg?itok=IKS4TrkE",alt:""})],-1)),e("p",null,[s[1]||(s[1]=n("在這個 systemd 系列教程中，我們",-1)),i(a,{href:"https://linux.cn/article-10182-1.html"},{default:p(()=>[...s[0]||(s[0]=[n("已經在某種程度上討論了 systemd 定時器單元",-1)])]),_:1}),s[2]||(s[2]=n("。不過，在我們開始討論 sockets 之前，我們先來看三個例子，這些例子展示瞭如何最佳化利用這些單元。",-1))]),s[41]||(s[41]=e("h3",{id:"簡單的類-cron-行為",tabindex:"-1"},[n("簡單的類 cron 行為 "),e("a",{class:"header-anchor",href:"#簡單的類-cron-行為","aria-label":"Permalink to “簡單的類 cron 行為”"},"​")],-1)),e("p",null,[s[4]||(s[4]=n("我每週都要去收集 ",-1)),i(a,{href:"https://popcon.debian.org/"},{default:p(()=>[...s[3]||(s[3]=[n("Debian popcon 數據",-1)])]),_:1}),s[5]||(s[5]=n("，如果每次都能在同一時間收集更好，這樣我就能看到某些應用程序的下載趨勢。這是一個可以使用 cron 任務來完成的典型事例，但 systemd 定時器同樣能做到：",-1))]),s[42]||(s[42]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 類 cron 的 popcon.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 這裏描述了下載並處理 popcon 數據的時刻</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>OnCalendar= Thu *-*-* 05:32:07</span></span>
<span class="line"><span>Unit= popcon.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= basic.target</span></span></code></pre></div><p>實際的 <code>popcon.service</code> 會執行一個常規的 <code>wget</code> 任務，並沒有什麼特別之處。這裏的新內容是 <code>OnCalendar=</code> 指令。這個指令可以讓你在一個特定日期的特定時刻來運行某個服務。在這個例子中，<code>Thu</code> 表示 “在週四運行”，<code>*-*-*</code> 表示“具體年份、月份和日期無關緊要”，這些可以翻譯成 “不管年月日，只在每週四運行”。</p><p>這樣，你就設置了這個服務的運行時間。我選擇在歐洲中部夏令時區的上午 5:30 左右運行，那個時候服務器不是很忙。</p><p>如果你的服務器關閉了，而且剛好錯過了每週的截止時間，你還可以在同一個計時器中使用像 anacron 一樣的功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 具備類似 anacron 功能的 popcon.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 這裏描述了下載並處理 popcon 數據的時刻</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>Unit=popcon.service</span></span>
<span class="line"><span>OnCalendar=Thu *-*-* 05:32:07</span></span>
<span class="line"><span>Persistent=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=basic.target</span></span></code></pre></div><p>當你將 <code>Persistent=</code> 指令設為真值時，它會告訴 systemd，如果服務器在本該它運行的時候關閉了，那麼在啓動後就要立刻運行服務。這意味着，如果機器在週四凌晨停機了（比如説維護），一旦它再次啓動後，<code>popcon.service</code> 將會立刻執行。在這之後，它的運行時間將會回到例行性的每週四早上 5:32.</p><p>到目前為止，就是這麼簡單直白。</p><h3 id="延遲執行" tabindex="-1">延遲執行 <a class="header-anchor" href="#延遲執行" aria-label="Permalink to “延遲執行”">​</a></h3>`,8)),e("p",null,[s[7]||(s[7]=n("但是，我們提升一個檔次，來“改進”這個",-1)),i(a,{href:"https://www.linux.com/blog/intro-to-linux/2018/6/systemd-services-reacting-change"},{default:p(()=>[...s[6]||(s[6]=[n("基於 systemd 的監控系統",-1)])]),_:1}),s[8]||(s[8]=n("。你應該記得，當你接入攝像頭的時候，系統就會開始拍照。假設你並不希望它在你安裝攝像頭的時候拍下你的臉。你希望將拍照服務的啓動時間向後推遲一兩分鐘，這樣你就有時間接入攝像頭，然後走到畫框外面。",-1))]),s[43]||(s[43]=t(`<p>為了完成這件事，首先你要更改 Udev 規則，將它指向一個定時器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ACTION==&quot;add&quot;, SUBSYSTEM==&quot;video4linux&quot;, ATTRS{idVendor}==&quot;03f0&quot;, </span></span>
<span class="line"><span>ATTRS{idProduct}==&quot;e207&quot;, TAG+=&quot;systemd&quot;, ENV{SYSTEMD_WANTS}=&quot;picchanged.timer&quot;, </span></span>
<span class="line"><span>SYMLINK+=&quot;mywebcam&quot;, MODE=&quot;0666&quot;</span></span></code></pre></div><p>這個定時器看起來像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># picchanged.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 在攝像頭接入的一分鐘後，開始運行 picchanged</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>OnActiveSec= 1 m</span></span>
<span class="line"><span>Unit= picchanged.path</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= basic.target</span></span></code></pre></div>`,4)),e("p",null,[s[10]||(s[10]=n("在你接入攝像頭後，Udev 規則被觸發，它會調用定時器。這個定時器啓動後會等上一分鐘（",-1)),s[11]||(s[11]=e("code",null,"OnActiveSec= 1 m",-1)),s[12]||(s[12]=n("），然後運行 ",-1)),s[13]||(s[13]=e("code",null,"picchanged.path",-1)),s[14]||(s[14]=n("，它會",-1)),i(a,{href:"https://www.linux.com/blog/learn/intro-to-linux/2018/6/systemd-services-monitoring-files-and-directories"},{default:p(()=>[...s[9]||(s[9]=[n("監視主圖片的變化",-1)])]),_:1}),s[15]||(s[15]=n("。",-1)),s[16]||(s[16]=e("code",null,"picchanged.path",-1)),s[17]||(s[17]=n(" 還會負責接觸 ",-1)),s[18]||(s[18]=e("code",null,"webcan.service",-1)),s[19]||(s[19]=n("，這個實際用來拍照的服務。",-1))]),s[44]||(s[44]=t(`<h3 id="在每天的特定時刻啓停-minetest-服務器" tabindex="-1">在每天的特定時刻啓停 Minetest 服務器 <a class="header-anchor" href="#在每天的特定時刻啓停-minetest-服務器" aria-label="Permalink to “在每天的特定時刻啓停 Minetest 服務器”">​</a></h3><p>在最後一個例子中，我們認為你決定用 systemd 作為唯一的依賴。講真，不管怎麼樣，systemd 差不多要接管你的生活了。為什麼不擁抱這個必然性呢？</p><p>你有個為你的孩子設置的 Minetest 服務。不過，你還想要假裝關心一下他們的教育和成長，要讓他們做作業和家務活。所以你要確保 Minetest 只在每天晚上的一段時間內可用，比如五點到七點。</p><p>這個跟之前的“<em>在特定時間啓動服務</em>”不太一樣。寫個定時器在下午五點啓動服務很簡單…：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># minetest.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 在每天下午五點運行 minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>OnCalendar= *-*-* 17:00:00</span></span>
<span class="line"><span>Unit= minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= basic.target</span></span></code></pre></div><p>…可是編寫一個對應的定時器，讓它在特定時刻關閉服務，則需要更大劑量的橫向思維。</p><p>我們從最明顯的東西開始 —— 設置定時器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># stopminetest.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 每天晚上七點停止 minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>OnCalendar= *-*-* 19:05:00</span></span>
<span class="line"><span>Unit= stopminetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= basic.target</span></span></code></pre></div><p>這裏棘手的部分是如何去告訴 <code>stopminetest.service</code> 去 —— 你知道的 —— 停止 Minetest. 我們無法從 <code>minetest.service</code> 中傳遞 Minetest 服務器的 PID. 而且 systemd 的單元詞彙表中也沒有明顯的命令來停止或禁用正在運行的服務。</p><p>我們的訣竅是使用 systemd 的 <code>Conflicts=</code> 指令。它和 systemd 的 <code>Wants=</code> 指令類似，不過它所做的事情_正相反_。如果你有一個 <code>b.service</code> 單元，其中包含一個 <code>Wants=a.service</code> 指令，在這個單元啓動時，如果 <code>a.service</code> 沒有運行，則 <code>b.service</code> 會運行它。同樣，如果你的 <code>b.service</code> 單元中有一行寫着 <code>Conflicts= a.service</code>，那麼在 <code>b.service</code> 啓動時，systemd 會停止 <code>a.service</code>.</p><p>這種機制用於兩個服務在嘗試同時控制同一資源時會發生衝突的場景，例如當兩個服務要同時訪問打印機的時候。通過在首選服務中設置 <code>Conflicts=</code>，你就可以確保它會覆蓋掉最不重要的服務。</p><p>不過，你會在一個稍微不同的場景中來使用 <code>Conflicts=</code>. 你將使用 <code>Conflicts=</code> 來乾淨地關閉 <code>minetest.service</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># stopminetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 關閉 Minetest 服務</span></span>
<span class="line"><span>Conflicts= minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type= oneshot</span></span>
<span class="line"><span>ExecStart= /bin/echo &quot;Closing down minetest.service&quot;</span></span></code></pre></div><p><code>stopminetest.service</code> 並不會做特別的東西。事實上，它什麼都不會做。不過因為它包含那行 <code>Conflicts=</code>，所以在它啓動時，systemd 會關掉 <code>minetest.service</code>.</p><p>在你完美的 Minetest 設置中，還有最後一點漣漪：你下班晚了，錯過了服務器的開機時間，可當你開機的時候遊戲時間還沒結束，這該怎麼辦？<code>Persistent=</code> 指令（如上所述）在錯過開始時間後仍然可以運行服務，但這個方案還是不行。如果你在早上十一點把服務器打開，它就會啓動 Minetest，而這不是你想要的。你真正需要的是一個確保 systemd 只在晚上五到七點啓動 Minetest 的方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># minetest.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 在下午五到七點內的每分鐘都運行 minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>OnCalendar= *-*-* 17..19:*:00</span></span>
<span class="line"><span>Unit= minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= basic.target</span></span></code></pre></div><p><code>OnCalendar= *-*-* 17..19:*:00</code> 這一行有兩個有趣的地方：(1) <code>17..19</code> 並不是一個時間點，而是一個時間段，在這個場景中是 17 到 19 點；以及，(2) 分鐘字段中的 <code>*</code> 表示服務每分鐘都要運行。因此，你會把它讀做 “在下午五到七點間的每分鐘，運行 minetest.service”</p><p>不過還有一個問題：一旦 <code>minetest.service</code> 啓動並運行，你會希望 <code>minetest.timer</code> 不要再次嘗試運行它。你可以在 <code>minetest.service</code> 中包含一條 <code>Conflicts=</code> 指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 運行 Minetest 服務器</span></span>
<span class="line"><span>Conflicts= minetest.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type= simple</span></span>
<span class="line"><span>User= &lt;your user name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ExecStart= /usr/bin/minetest --server</span></span>
<span class="line"><span>ExecStop= /bin/kill -2 $MAINPID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= multi-user.targe</span></span></code></pre></div><p>上面的 <code>Conflicts=</code> 指令會保證在 <code>minstest.service</code> 成功運行後，<code>minetest.timer</code> 就會立即停止。</p><p>現在，啓用並啓動 <code>minetest.timer</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemctl enable minetest.timer</span></span>
<span class="line"><span>systemctl start minetest.timer</span></span></code></pre></div><p>而且，如果你在六點鐘啓動了服務器，<code>minetest.timer</code> 會啓用；到了五到七點，<code>minetest.timer</code> 每分鐘都會嘗試啓動 <code>minetest.service</code>。不過，一旦 <code>minetest.service</code> 開始運行，systemd 會停止 <code>minetest.timer</code>，因為它會與 <code>minetest.service</code> “衝突”，從而避免計時器在服務已經運行的情況下還會不斷嘗試啓動服務。</p><p>在首先啓動某個服務時殺死啓動它的計時器，這麼做有點反直覺，但它是有效的。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>你可能會認為，有更好的方式來做上面這些事。我在很多文章中看到過“過度設計”這個術語，尤其是在用 systemd 定時器來代替 cron 的時候。</p><p>但是，這個系列文章的目的不是為任何具體問題提供最佳解決方案。它的目的是為了儘可能多地使用 systemd 來解決問題，甚至會到荒唐的程度。它的目的是展示大量的例子，來説明如何利用不同類型的單位及其包含的指令。我們的讀者，也就是你，可以從這篇文章中找到所有這些的可實踐範例。</p><p>儘管如此，我們還有一件事要做：下回中，我們會關注 sockets 和 targets，然後我們將完成對 systemd 單元的介紹。</p>`,28)),e("p",null,[s[21]||(s[21]=n("你可以在 Linux 基金會和 edX 中，通過免費的 ",-1)),i(a,{href:"https://training.linuxfoundation.org/linux-courses/system-administration-training/introduction-to-linux"},{default:p(()=>[...s[20]||(s[20]=[n("Linux 介紹",-1)])]),_:1}),s[22]||(s[22]=n("課程中，學到更多關於 Linux 的知識。",-1))]),s[45]||(s[45]=e("hr",null,null,-1)),e("p",null,[s[24]||(s[24]=n("via: ",-1)),i(a,{href:"https://www.linux.com/blog/intro-to-linux/2018/8/systemd-timers-two-use-cases-0"},{default:p(()=>[...s[23]||(s[23]=[n("https://www.linux.com/blog/intro-to-linux/2018/8/systemd-timers-two-use-cases-0",-1)])]),_:1})]),e("p",null,[s[29]||(s[29]=n("作者：",-1)),i(a,{href:"https://www.linux.com/users/bro66"},{default:p(()=>[...s[25]||(s[25]=[n("Paul Brown",-1)])]),_:1}),s[30]||(s[30]=n(" 選題：",-1)),i(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[26]||(s[26]=[n("lujun9972",-1)])]),_:1}),s[31]||(s[31]=n(" 譯者：",-1)),i(a,{href:"https://github.com/StdioA"},{default:p(()=>[...s[27]||(s[27]=[n("StdioA",-1)])]),_:1}),s[32]||(s[32]=n(" 校對：",-1)),i(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[28]||(s[28]=[n("wxy",-1)])]),_:1})]),e("p",null,[s[35]||(s[35]=n("本文由 ",-1)),i(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[33]||(s[33]=[n("LCTT",-1)])]),_:1}),s[36]||(s[36]=n(" 原創編譯，",-1)),i(a,{href:"https://linux.cn/"},{default:p(()=>[...s[34]||(s[34]=[n("Linux中國",-1)])]),_:1}),s[37]||(s[37]=n(" 榮譽推出",-1))])])}const T=l(c,[["render",m]]);export{v as __pageData,T as default};
