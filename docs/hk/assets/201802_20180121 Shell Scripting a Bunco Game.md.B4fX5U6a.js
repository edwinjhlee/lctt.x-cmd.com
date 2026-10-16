import{_ as l,a0 as o,w as t,s as c,ao as d,I as i,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"腳本編程之骰子游戲 | LCTT x X-CMD","titleTemplate":false,"description":"腳本編程之骰子游戲 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"腳本編程之骰子游戲 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"腳本編程之骰子游戲 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20180121 Shell Scripting a Bunco Game","title":"腳本編程之骰子游戲","tag":"201802","desc":""},"relativePath":"201802/20180121 Shell Scripting a Bunco Game.md","filePath":"[post].md"}'),r={name:"201802/20180121 Shell Scripting a Bunco Game.md"};function h(u,s,g,k,b,f){const a=o("Link");return t(),c("div",null,[s[13]||(s[13]=d(`<h1 id="腳本編程之骰子游戲" tabindex="-1">腳本編程之骰子游戲 <a class="header-anchor" href="#腳本編程之骰子游戲" aria-label="Permalink to “腳本編程之骰子游戲”">​</a></h1><blockquote><p>Bunco：一個使你的“快艇”遊戲看起來更復雜的擲骰子游戲。</p></blockquote><p>我已經有段時間沒有編寫遊戲了，所以我覺得現在正是做一些這方面事情的時候。起初，我想“用腳本編一個 Halo遊戲？”（LCTT 譯註：Halo，光暈系列遊戲），但我後來意識到這不太可能。來編一個叫 Bunco 的簡單骰子游戲吧。你也許沒有聽説過，不過你母親絕對知道 —— 當一羣年輕女孩聚在當地的酒吧或者小酒館的時候，這是個很受歡迎的遊戲。</p><p>遊戲一共六輪，有三個骰子，規則很簡單。每次投三個骰子，投出的點數要和當前的輪數數字一致。如果三個骰子都和當前的輪數一致，(比如，在第三輪三個骰子都是 3)，你這一輪的分數就是 21。 如果三個骰子點數都相同但和輪數數字不同，你會得到最低的 Bunco 分數，只有 5 分。如果你投出的點數兩者都不是，每一個和當前輪數相同的骰子得 1 分。</p><p>要想玩這個遊戲，它還涉及到團隊合作，每一隊（包括贏的那隊），每人付 5 美元現金，或贏家得到其他類似現金獎勵，並規定什麼樣的情況下才是贏家，例如“最多 Buncos” 或“最大點數”的情況下勝利。在這裏我會跳過這些，而只關注投骰子這一部分。</p><h3 id="關於數學邏輯部分" tabindex="-1">關於數學邏輯部分 <a class="header-anchor" href="#關於數學邏輯部分" aria-label="Permalink to “關於數學邏輯部分”">​</a></h3><p>在專注於編程這方面的事之前，我先簡單説説遊戲背後的數學邏輯。要是有一個適當重量的骰子投骰子會變得很容易，任意一個值出現概率都是 1/6。</p><p>完全隨機小提示：不確定你的骰子是否每個面都是一樣重量? 把它們扔進鹽水裏然後擲一下。YouTube 上有一些有趣的 D&amp;D 世界的視頻向你展示了怎麼來做這個測試。</p><p>所以三個骰子點數一樣的幾率有多大? 第一個骰子 100% 會有一個值 (這兒沒什麼可説的)，所以很簡單。第二個則有 16.66% 的概率和第一個骰子的值一樣，接下來第三個骰子也是一樣。 但當然，總概率是三個概率相乘的結果，所以最後，三個骰子值相等的概率是 2.7%。</p><p>接下來，每個骰子和當前輪數數字相同的概率都是 16.66%。從數學角度來説：0.166 * 0.166 * 0.166 = 0.00462 。</p><p>換句話説，你有 0.46% 的可能性投出 Bunco，比 200 次中出現一次的可能性還小一點。</p><p>實際上還可以更難。如果你有 5 個骰子，投出 Mini Bunco (也可以叫做 Yahtzee “快艇”) 的概率為 0.077%，如果你想所有的骰子的值都相同，假設都是 6，那概率就是 0.00012%，那就基本上沒什麼可能了。</p><h3 id="開始編程吧" tabindex="-1">開始編程吧 <a class="header-anchor" href="#開始編程吧" aria-label="Permalink to “開始編程吧”">​</a></h3><p>和所有遊戲一樣，最難的部分是有一個能生成真正的隨機數的隨機數發生器。這一部分在 shell 腳本中還是很難實現的，所以我需要先回避這個問題，並假設 shell 內置的隨機數發生器就夠用了。</p><p>不過好在內置的隨機數發生器很好用。用 <code>$RANDOM</code> 就能得到一個 <code>0</code> 到 <code>MAXINT(32767)</code> 之間的隨機值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo $RANDOM $RANDOM $RANDOM</span></span>
<span class="line"><span>10252 22142 14863</span></span></code></pre></div><p>為了確保產生的值一定是 <code>1</code> - <code>6</code> 之中的某個值，使用取餘函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo $(( $RANDOM % 6 ))</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>$ echo $(( $RANDOM % 6 ))</span></span>
<span class="line"><span>0</span></span></code></pre></div><p>哦！我忘了要加 <code>1</code>，下面是另一次嘗試：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo $(( ( $RANDOM % 6 ) + 1 ))</span></span>
<span class="line"><span>6</span></span></code></pre></div><p>下面要實現投骰子這一功能。這個函數中你可以聲明一個局部變量來存儲生成的隨機值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rolldie()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   local result=$1</span></span>
<span class="line"><span>   rolled=$(( ( $RANDOM % 6 ) + 1 ))</span></span>
<span class="line"><span>   eval $result=$rolled</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用 <code>eval</code> 確保生成的隨機數被實際存儲在變量中。這一部分也很容易：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rolldie die1</span></span></code></pre></div><p>這會為第一個骰子生成一個 <code>1</code> - <code>6</code> 之間的隨機值存儲到 <code>die1</code> 中。要擲 3 個骰子，很簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rolldie die1 ; rolldie die2 ; rolldie die3</span></span></code></pre></div><p>現在判斷下生成的值。首先，判斷是不是 Bunco（3 個骰子值相同），然後是不是和當前輪數值也相同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if [ $die1 -eq $die2 ] &amp;&amp; [ $die2 -eq $die3 ] ; then</span></span>
<span class="line"><span>  if [ $die1 -eq $round ] ; then</span></span>
<span class="line"><span>    echo &quot;BUNCO!&quot;</span></span>
<span class="line"><span>    score=25</span></span>
<span class="line"><span>  else</span></span>
<span class="line"><span>    echo &quot;Mini Bunco!&quot;</span></span>
<span class="line"><span>    score=5</span></span>
<span class="line"><span>  fi</span></span></code></pre></div><p>這可能是所有判斷語句中最難的部分了，注意第一個條件語句中這種不常用的寫法 ： <code>[ cond1 ] &amp;&amp; [ cond2 ]</code>。如果你想寫成 <code>cond1 -a cond2</code> ，這樣也可以。在 shell 編程中，解決問題的方法往往不止一種。</p><p>代碼剩下的部分很直白，你只需要判斷每個骰子的值是不是和本輪數字相同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if [ $die1 -eq $round ] ; then</span></span>
<span class="line"><span>  score=1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>if [ $die2 -eq $round ] ; then</span></span>
<span class="line"><span>  score=$(( $score + 1 ))</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>if [ $die3 -eq $round ] ; then</span></span>
<span class="line"><span>  score=$(( $score + 1 ))</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>唯一要注意的是當出現 Bunco/Mini Bunco 就不需要再統計本輪分數了。所以整個第二部分的判斷語句都要寫在第一個條件語句的 <code>else</code> 中（為了判斷 3 個骰子值是否都相同）。</p><p>把所有的綜合起來，然後在命令列中輸入輪數，下面是現在的腳本執行後的結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sh bunco.sh 5</span></span>
<span class="line"><span>You rolled: 1 1 5</span></span>
<span class="line"><span>score = 1</span></span>
<span class="line"><span>$ sh bunco.sh 2</span></span>
<span class="line"><span>You rolled: 6 4 3</span></span>
<span class="line"><span>score = 0</span></span>
<span class="line"><span>$ sh bunco.sh 1</span></span>
<span class="line"><span>You rolled: 1 1 1</span></span>
<span class="line"><span>BUNCO!</span></span>
<span class="line"><span>score = 25</span></span></code></pre></div><p>竟然這麼快就出現 Bunco 了? 好吧，就像我説的，shell 內置的隨機數發生器在隨機數產生這方面可能有些問題。</p><p>你可以再寫個腳本測試一下，去運行上述腳本幾百次，然後看看 Bunco/Mini Bunco 出現次數所佔的百分比。但是我想把這部分作為練習，留給親愛的讀者你們。不過，也許我下次會抽時間完成剩下的部分。</p><p>讓我們完成這一腳本吧，還有分數統計和一次性執行 6 次投骰子（這次不用再在命令列中手動輸入當前輪數了）這兩個功能。這也很容易，因為只是將上面的內容整個嵌套在裏面，換句話説，就是將一個複雜的條件嵌套結構全部寫在了一個函數中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>BuncoRound()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   # roll, display, and score a round of bunco!</span></span>
<span class="line"><span>   # round is specified when invoked, score added to totalscore</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   local score=0 ; local round=$1 ; local hidescore=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   rolldie die1 ; rolldie die2 ; rolldie die3</span></span>
<span class="line"><span>   echo Round $round. You rolled: $die1 $die2 $die3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if [ $die1 -eq $die2 ] &amp;&amp; [ $die2 -eq $die3 ] ; then</span></span>
<span class="line"><span>     if [ $die1 -eq $round ] ; then</span></span>
<span class="line"><span>       echo &quot;  BUNCO!&quot;</span></span>
<span class="line"><span>       score=25</span></span>
<span class="line"><span>       hidescore=1</span></span>
<span class="line"><span>     else</span></span>
<span class="line"><span>       echo &quot;  Mini Bunco!&quot;</span></span>
<span class="line"><span>       score=5</span></span>
<span class="line"><span>       hidescore=1</span></span>
<span class="line"><span>     fi</span></span>
<span class="line"><span>   else</span></span>
<span class="line"><span>     if [ $die1 -eq $round ] ; then</span></span>
<span class="line"><span>       score=1</span></span>
<span class="line"><span>     fi</span></span>
<span class="line"><span>     if [ $die2 -eq $round ] ; then</span></span>
<span class="line"><span>       score=$(( $score + 1 ))</span></span>
<span class="line"><span>     fi</span></span>
<span class="line"><span>     if [ $die3 -eq $round ] ; then</span></span>
<span class="line"><span>       score=$(( $score + 1 ))</span></span>
<span class="line"><span>     fi</span></span>
<span class="line"><span>   fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if [ $hidescore -eq 0 ] ; then</span></span>
<span class="line"><span>     echo &quot;  score this round: $score&quot;</span></span>
<span class="line"><span>   fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   totalscore=$(( $totalscore + $score ))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我承認，我忍不住自己做了一點改進，包括判斷當前是 Bunco、Mini Bunco 還是其他需要計算分數的情況這一部分 （這就是 <code>$hidescore</code> 這一變量的作用）。</p><p>實現這個簡直是小菜一碟，只要一個循環就好了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for round in {1..6} ; do</span></span>
<span class="line"><span>  BuncoRound $round</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>這就是現在所寫的整個程序。讓我們執行一下看看結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>$ sh bunco.sh 1</span></span>
<span class="line"><span>Round 1\\. You rolled: 2 3 3</span></span>
<span class="line"><span>  score this round: 0</span></span>
<span class="line"><span>Round 2\\. You rolled: 2 6 6</span></span>
<span class="line"><span>  score this round: 1</span></span>
<span class="line"><span>Round 3\\. You rolled: 1 2 4</span></span>
<span class="line"><span>  score this round: 0</span></span>
<span class="line"><span>Round 4\\. You rolled: 2 1 4</span></span>
<span class="line"><span>  score this round: 1</span></span>
<span class="line"><span>Round 5\\. You rolled: 5 5 6</span></span>
<span class="line"><span>  score this round: 2</span></span>
<span class="line"><span>Round 6\\. You rolled: 2 1 3</span></span>
<span class="line"><span>  score this round: 0</span></span>
<span class="line"><span>Game over. Your total score was 4</span></span></code></pre></div><p>嗯。並不是很令人滿意，可能是因為它只是遊戲的一次完整執行。不過，你可以將腳本執行幾百幾千次，記下“Game over”出現的位置，然後用一些快速分析工具來看看你在每 6 輪中有幾次得分超過 3 分。（要讓 3 個骰子值相同，這個概率大概在 50% 左右）。</p><p>無論怎麼説，這都不是一個複雜的遊戲，但是它是一個很有意思的小程序項目。現在，如果有一個 20 面的骰子，每一輪遊戲有好幾十輪，每輪都擲同一個骰子，情況又會發生什麼變化呢?</p><hr>`,46)),i("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"http://www.linuxjournal.com/content/shell-scripting-bunco-game"},{default:e(()=>[...s[0]||(s[0]=[n("http://www.linuxjournal.com/content/shell-scripting-bunco-game",-1)])]),_:1})]),i("p",null,[s[5]||(s[5]=n("作者：",-1)),p(a,{href:"http://www.linuxjournal.com/users/dave-taylor"},{default:e(()=>[...s[2]||(s[2]=[n("Dave Taylor",-1)])]),_:1}),s[6]||(s[6]=n(" 譯者：",-1)),p(a,{href:"https://github.com/wenwensnow"},{default:e(()=>[...s[3]||(s[3]=[n("wenwensnow",-1)])]),_:1}),s[7]||(s[7]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[4]||(s[4]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[10]||(s[10]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[8]||(s[8]=[n("LCTT",-1)])]),_:1}),s[11]||(s[11]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[9]||(s[9]=[n("Linux中國",-1)])]),_:1}),s[12]||(s[12]=n(" 榮譽推出",-1))])])}const y=l(r,[["render",h]]);export{C as __pageData,y as default};
