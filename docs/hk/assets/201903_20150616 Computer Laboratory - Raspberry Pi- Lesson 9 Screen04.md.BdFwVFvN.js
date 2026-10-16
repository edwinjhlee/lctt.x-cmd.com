import{_ as e,a0 as h,w as k,s as r,I as n,x as a,a1 as p,A as t,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"計算機實驗室之樹莓派：課程 9 屏幕04 | LCTT x X-CMD","titleTemplate":false,"description":"計算機實驗室之樹莓派：課程 9 屏幕04 | LCTT (201903) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"計算機實驗室之樹莓派：課程 9 屏幕04 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"計算機實驗室之樹莓派：課程 9 屏幕04 | LCTT (201903) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201903/20150616 Computer Laboratory - Raspberry Pi- Lesson 9 Screen04","title":"計算機實驗室之樹莓派：課程 9 屏幕04","tag":"201903","desc":""},"relativePath":"201903/20150616 Computer Laboratory - Raspberry Pi- Lesson 9 Screen04.md","filePath":"[post].md"}'),d={name:"201903/20150616 Computer Laboratory - Raspberry Pi- Lesson 9 Screen04.md"};function E(g,s,c,o,y,F){const i=h("Link");return k(),r("div",null,[s[27]||(s[27]=n("h1",{id:"計算機實驗室之樹莓派-課程-9-屏幕04",tabindex:"-1"},[a("計算機實驗室之樹莓派：課程 9 屏幕04 "),n("a",{class:"header-anchor",href:"#計算機實驗室之樹莓派-課程-9-屏幕04","aria-label":"Permalink to “計算機實驗室之樹莓派：課程 9 屏幕04”"},"​")],-1)),n("p",null,[s[1]||(s[1]=a("屏幕04 課程基於屏幕03 課程來構建，它教你如何操作文本。假設你已經有了",-1)),p(i,{href:"https://linux.cn/article-10585-1.html"},{default:t(()=>[...s[0]||(s[0]=[a("課程 8：屏幕03",-1)])]),_:1}),s[2]||(s[2]=a(" 的操作系統代碼，我們將以它為基礎。",-1))]),s[28]||(s[28]=l('<h3 id="_1、操作字符串" tabindex="-1">1、操作字符串 <a class="header-anchor" href="#_1、操作字符串" aria-label="Permalink to “1、操作字符串”">​</a></h3><p>能夠繪製文本是極好的，但不幸的是，現在你只能繪製預先準備好的字符串。如果能夠像命令列那樣顯示任何東西才是完美的，而理想情況下應該是，我們能夠顯示任何我們期望的東西。一如既往地，如果我們付出努力而寫出一個非常好的函數，它能夠操作我們所希望的所有字符串，而作為回報，這將使我們以後寫代碼更容易。曾經如此複雜的函數，在 C 語言編程中只不過是一個 <code>sprintf</code> 而已。這個函數基於給定的另一個字符串和作為描述的額外的一個參數而生成一個字符串。我們對這個函數感興趣的地方是，這個函數是個變長函數。這意味着它可以帶可變數量的參數。參數的數量取決於具體的格式字符串，因此它的參數的數量不能預先確定。</p><blockquote><p>變長函數在彙編代碼中看起來似乎不好理解，然而 ，它卻是非常有用和很強大的概念。</p></blockquote><p>這個完整的函數有許多選項，而我們在這裏只列出了幾個。在本教程中將要實現的選項我做了高亮處理，當然，你可以嘗試去實現更多的選項。</p><p>函數通過讀取格式化字符串來工作，然後使用下表的意思去解釋它。一旦一個參數已經使用了，就不會再次考慮它了。函數的返回值是寫入的字符數。如果方法失敗，將返回一個負數。</p><p>表 1.1 sprintf 格式化規則</p><div class="table-wrap"><table><thead><tr><th>選項</th><th>含義</th></tr></thead><tbody><tr><td>==除了 <code>%</code> 之外的任何支付==</td><td>複製字符到輸出。</td></tr><tr><td>==<code>%%</code>==</td><td>寫一個 % 字符到輸出。</td></tr><tr><td>==<code>%c</code>==</td><td>將下一個參數寫成字符格式。</td></tr><tr><td>==<code>%d</code> 或 <code>%i</code>==</td><td>將下一個參數寫成十進制的有符號整數。</td></tr><tr><td><code>%e</code></td><td>將下一個參數寫成科學記數法，使用 eN，意思是 ×10<sup>N</sup>。</td></tr><tr><td><code>%E</code></td><td>將下一個參數寫成科學記數法，使用 EN，意思是 ×10<sup>N</sup>。</td></tr><tr><td><code>%f</code></td><td>將下一個參數寫成十進制的 IEEE 754 浮點數。</td></tr><tr><td><code>%g</code></td><td>與 <code>%e</code> 和 <code>%f</code> 的指數表示形式相同。</td></tr><tr><td><code>%G</code></td><td>與 <code>%E</code> 和 <code>%f</code> 的指數表示形式相同。</td></tr><tr><td>==<code>%o</code>==</td><td>將下一個參數寫成八進制的無符號整數。</td></tr><tr><td>==<code>%s</code>==</td><td>下一個參數如果是一個指針，將它寫成空終止符字符串。</td></tr><tr><td>==<code>%u</code>==</td><td>將下一個參數寫成十進制無符號整數。</td></tr><tr><td>==<code>%x</code>==</td><td>將下一個參數寫成十六進制無符號整數（使用小寫的 a、b、c、d、e 和 f）。</td></tr><tr><td><code>%X</code></td><td>將下一個參數寫成十六進制的無符號整數（使用大寫的 A、B、C、D、E 和 F）。</td></tr><tr><td><code>%p</code></td><td>將下一個參數寫成指針地址。</td></tr><tr><td>==<code>%n</code>==</td><td>什麼也不輸出。而是複製到目前為止被下一個參數在本地處理的字符個數。</td></tr></tbody></table></div>',7)),n("p",null,[s[4]||(s[4]=a("除此之外，對序列還有許多額外的處理，比如指定最小長度，符號等等。更多信息可以在 ",-1)),p(i,{href:"http://www.cplusplus.com/reference/clibrary/cstdio/sprintf/"},{default:t(()=>[...s[3]||(s[3]=[a("sprintf - C++ 參考",-1)])]),_:1}),s[5]||(s[5]=a(" 上找到。",-1))]),s[29]||(s[29]=l('<p>下面是調用方法和返回的結果的示例。</p><p>表 1.2 sprintf 調用示例</p><div class="table-wrap"><table><thead><tr><th>格式化字符串</th><th>參數</th><th>結果</th></tr></thead><tbody><tr><td><code>&quot;%d&quot;</code></td><td>13</td><td>&quot;13&quot;</td></tr><tr><td><code>&quot;+%d degrees&quot;</code></td><td>12</td><td>&quot;+12 degrees&quot;</td></tr><tr><td><code>&quot;+%x degrees&quot;</code></td><td>24</td><td>&quot;+1c degrees&quot;</td></tr><tr><td><code>&quot;&#39;%c&#39; = 0%o&quot;</code></td><td>65, 65</td><td>&quot;&#39;A&#39; = 0101&quot;</td></tr><tr><td><code>&quot;%d * %d%% = %d&quot;</code></td><td>200, 40, 80</td><td>&quot;200 * 40% = 80&quot;</td></tr><tr><td><code>&quot;+%d degrees&quot;</code></td><td>-5</td><td>&quot;+-5 degrees&quot;</td></tr><tr><td><code>&quot;+%u degrees&quot;</code></td><td>-5</td><td>&quot;+4294967291 degrees&quot;</td></tr></tbody></table></div><p>希望你已經看到了這個函數是多麼有用。實現它需要大量的編程工作，但給我們的回報卻是一個非常有用的函數，可以用於各種用途。</p><h3 id="_2、除法" tabindex="-1">2、除法 <a class="header-anchor" href="#_2、除法" aria-label="Permalink to “2、除法”">​</a></h3><p>雖然這個函數看起來很強大、也很複雜。但是，處理它的許多情況的最容易的方式可能是，編寫一個函數去處理一些非常常見的任務。它是個非常有用的函數，可以為任何底的一個有符號或無符號的數字生成一個字符串。那麼，我們如何去實現呢？在繼續閲讀之前，嘗試快速地設計一個算法。</p><blockquote><p>除法是非常慢的，也是非常複雜的基礎數學運算。它在 ARM 彙編代碼中不能直接實現，因為如果直接實現的話，它得出答案需要花費很長的時間，因此它不是個“簡單的”運算。</p></blockquote>',7)),n("p",null,[s[7]||(s[7]=a("最簡單的方法或許就是我在 ",-1)),p(i,{href:"https://linux.cn/article-10458-1.html"},{default:t(()=>[...s[6]||(s[6]=[a("課程 1：OK01",-1)])]),_:1}),s[8]||(s[8]=a(" 中提到的“除法餘數法”。它的思路如下：",-1))]),s[30]||(s[30]=l(`<ol><li>用當前值除以你使用的底。</li><li>保存餘數。</li><li>如果得到的新值不為 0，轉到第 1 步。</li><li>將餘數反序連起來就是答案。</li></ol><p>例如：</p><p>表 2.1 以 2 為底的例子</p><p>轉換</p><div class="table-wrap"><table><thead><tr><th>值</th><th>新值</th><th>餘數</th></tr></thead><tbody><tr><td>137</td><td>68</td><td>1</td></tr><tr><td>68</td><td>34</td><td>0</td></tr><tr><td>34</td><td>17</td><td>0</td></tr><tr><td>17</td><td>8</td><td>1</td></tr><tr><td>8</td><td>4</td><td>0</td></tr><tr><td>4</td><td>2</td><td>0</td></tr><tr><td>2</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td></tr></tbody></table></div><p>因此答案是 10001001<sub>2</sub></p><p>這個過程的不幸之外在於使用了除法。所以，我們必須首先要考慮二進制中的除法。</p><p>我們複習一下長除法</p><blockquote><p>假如我們想把 4135 除以 17。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>   0243 r 4</span></span>
<span class="line"><span>17)4135</span></span>
<span class="line"><span>   0        0 × 17 = 0000</span></span>
<span class="line"><span>   4135     4135 - 0 = 4135</span></span>
<span class="line"><span>   34       200 × 17 = 3400</span></span>
<span class="line"><span>   735      4135 - 3400 = 735</span></span>
<span class="line"><span>   68       40 × 17 = 680</span></span>
<span class="line"><span>   55       735 - 680 = 55</span></span>
<span class="line"><span>   51       3 × 17 = 51</span></span>
<span class="line"><span>   4        55 - 51 = 4</span></span></code></pre></div><p>答案：243 餘 4</p><p>首先我們來看被除數的最高位。我們看到它是小於或等於除數的最小倍數，因此它是 0。我們在結果中寫一個 0。</p><p>接下來我們看被除數倒數第二位和所有的高位。我們看到小於或等於那個數的除數的最小倍數是 34。我們在結果中寫一個 2，和減去 3400。</p><p>接下來我們看被除數的第三位和所有高位。我們看到小於或等於那個數的除數的最小倍數是 68。我們在結果中寫一個 4，和減去 680。</p><p>最後，我們看一下所有的餘位。我們看到小於餘數的除數的最小倍數是 51。我們在結果中寫一個 3，減去 51。減法的結果就是我們的餘數。</p></blockquote><p>在彙編代碼中做除法，我們將實現二進制的長除法。我們之所以實現它是因為，數字都是以二進制方式保存的，這讓我們很容易地訪問所有重要位的移位操作，並且因為在二進制中做除法比在其它高進制中做除法都要簡單，因為它的數更少。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        1011 r 1</span></span>
<span class="line"><span>1010)1101111</span></span>
<span class="line"><span>     1010</span></span>
<span class="line"><span>      11111</span></span>
<span class="line"><span>      1010</span></span>
<span class="line"><span>       1011</span></span>
<span class="line"><span>       1010</span></span>
<span class="line"><span>          1</span></span></code></pre></div><p>這個示例展示瞭如何做二進制的長除法。簡單來説就是，在不超出被除數的情況下，儘可能將除數右移，根據位置輸出一個 1，和減去這個數。剩下的就是餘數。在這個例子中，我們展示了 1101111<sub>2</sub> ÷ 1010<sub>2</sub> = 1011<sub>2</sub> 餘數為 1<sub>2</sub>。用十進制表示就是，111 ÷ 10 = 11 餘 1。</p><p>你自己嘗試去實現這個長除法。你應該去寫一個函數 <code>DivideU32</code> ，其中 <code>r0</code> 是被除數，而 <code>r1</code> 是除數，在 <code>r0</code> 中返回結果，在 <code>r1</code> 中返回餘數。下面，我們將完成一個有效的實現。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DivideU32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dividend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">divisor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set shift to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">31</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set result to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shift ≥ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dividend ≥ (divisor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shift) then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       set dividend to dividend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (divisor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lt shift)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       set result to result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     set result to result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     set shift to shift </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  loop</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (result, dividend)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>這段代碼實現了我們的目標，但卻不能用於彙編代碼。我們出現的問題是，我們的寄存器只能保存 32 位，而 <code>divisor &lt;&lt; shift</code> 的結果可能在一個寄存器中裝不下（我們稱之為溢出）。這確實是個問題。你的解決方案是否有溢出的問題呢？</p><p>幸運的是，有一個稱為 <code>clz</code>（<ruby>計數前導零<rt>count leading zeros</rt></ruby>）的指令，它能計算一個二進制表示的數字的前導零的個數。這樣我們就可以在溢出發生之前，可以將寄存器中的值進行相應位數的左移。你可以找出的另一個優化就是，每個循環我們計算 <code>divisor &lt;&lt; shift</code> 了兩遍。我們可以通過將除數移到開始位置來改進它，然後在每個循環結束的時候將它移下去，這樣可以避免將它移到別處。</p><p>我們來看一下進一步優化之後的彙編代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl DivideU32</span></span>
<span class="line"><span>DivideU32:</span></span>
<span class="line"><span>result .req r0</span></span>
<span class="line"><span>remainder .req r1</span></span>
<span class="line"><span>shift .req r2</span></span>
<span class="line"><span>current .req r3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clz shift,r1</span></span>
<span class="line"><span>lsl current,r1,shift</span></span>
<span class="line"><span>mov remainder,r0</span></span>
<span class="line"><span>mov result,#0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>divideU32Loop$:</span></span>
<span class="line"><span>  cmp shift,#0</span></span>
<span class="line"><span>  blt divideU32Return$</span></span>
<span class="line"><span>  cmp remainder,current</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  addge result,result,#1</span></span>
<span class="line"><span>  subge remainder,current</span></span>
<span class="line"><span>  sub shift,#1</span></span>
<span class="line"><span>  lsr current,#1</span></span>
<span class="line"><span>  lsl result,#1</span></span>
<span class="line"><span>  b divideU32Loop$</span></span>
<span class="line"><span>divideU32Return$:</span></span>
<span class="line"><span>.unreq current</span></span>
<span class="line"><span>mov pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.unreq result</span></span>
<span class="line"><span>.unreq remainder</span></span>
<span class="line"><span>.unreq shift</span></span></code></pre></div><p>你可能毫無疑問的認為這是個非常高效的作法。它是很好，但是除法是個代價非常高的操作，並且我們的其中一個願望就是不要經常做除法，因為如果能以任何方式提升速度就是件非常好的事情。當我們查看有循環的優化代碼時，我們總是重點考慮一個問題，這個循環會運行多少次。在本案例中，在輸入為 1 的情況下，這個循環最多運行 31 次。在不考慮特殊情況的時候，這很容易改進。例如，當 1 除以 1 時，不需要移位，我們將把除數移到它上面的每個位置。這可以通過簡單地在被除數上使用新的 <code>clz</code> 命令並從中減去它來改進。在 <code>1 ÷ 1</code> 的案例中，這意味着移位將設置為 0，明確地表示它不需要移位。如果它設置移位為負數，表示除數大於被除數，因此我們就可以知道結果是 0，而餘數是被除數。我們可以做的另一個快速檢查就是，如果當前值為 0，那麼它是一個整除的除法，我們就可以停止循環了。</p><blockquote><p><code>clz dest,src</code> 將第一個寄存器 <code>dest</code> 中二進制表示的值的前導零的數量，保存到第二個寄存器 <code>src</code> 中。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl DivideU32</span></span>
<span class="line"><span>DivideU32:</span></span>
<span class="line"><span>result .req r0</span></span>
<span class="line"><span>remainder .req r1</span></span>
<span class="line"><span>shift .req r2</span></span>
<span class="line"><span>current .req r3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clz shift,r1</span></span>
<span class="line"><span>clz r3,r0</span></span>
<span class="line"><span>subs shift,r3</span></span>
<span class="line"><span>lsl current,r1,shift</span></span>
<span class="line"><span>mov remainder,r0</span></span>
<span class="line"><span>mov result,#0</span></span>
<span class="line"><span>blt divideU32Return$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>divideU32Loop$:</span></span>
<span class="line"><span>  cmp remainder,current</span></span>
<span class="line"><span>  blt divideU32LoopContinue$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  add result,result,#1</span></span>
<span class="line"><span>  subs remainder,current</span></span>
<span class="line"><span>  lsleq result,shift</span></span>
<span class="line"><span>  beq divideU32Return$</span></span>
<span class="line"><span>divideU32LoopContinue$:</span></span>
<span class="line"><span>  subs shift,#1</span></span>
<span class="line"><span>  lsrge current,#1</span></span>
<span class="line"><span>  lslge result,#1</span></span>
<span class="line"><span>  bge divideU32Loop$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>divideU32Return$:</span></span>
<span class="line"><span>.unreq current</span></span>
<span class="line"><span>mov pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.unreq result</span></span>
<span class="line"><span>.unreq remainder</span></span>
<span class="line"><span>.unreq shift</span></span></code></pre></div><p>複製上面的代碼到一個名為 <code>maths.s</code> 的文件中。</p><h3 id="_3、數字字符串" tabindex="-1">3、數字字符串 <a class="header-anchor" href="#_3、數字字符串" aria-label="Permalink to “3、數字字符串”">​</a></h3><p>現在，我們已經可以做除法了，我們來看一下另外的一個將數字轉換為字符串的實現。下列的偽代碼將寄存器中的一個數字轉換成以 36 為底的字符串。根據慣例，a % b 表示 a 被 b 相除之後的餘數。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SignedString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r2 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value ≥ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  then </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UnsignedString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value, dest, base)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  otherwise</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      setByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dest, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set dest to dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UnsignedString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value, dest, base) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UnsignedString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r2 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set length to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (value, rem) to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DivideU32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value, base)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rem </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    then set rem to rem </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;0&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    otherwise set rem to rem </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;a&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> length, rem)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ReverseString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dest, length)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> length</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ReverseString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set end to string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set temp1 to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(start)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set temp2 to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(end)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(start, temp2)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(end, temp1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set start to start </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set end to end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>上述代碼實現在一個名為 <code>text.s</code> 的彙編文件中。記住，如果你遇到了困難，可以在下載頁面找到完整的解決方案。</p><h3 id="_4、格式化字符串" tabindex="-1">4、格式化字符串 <a class="header-anchor" href="#_4、格式化字符串" aria-label="Permalink to “4、格式化字符串”">​</a></h3><p>我們繼續回到我們的字符串格式化方法。因為我們正在編寫我們自己的操作系統，我們根據我們自己的意願來添加或修改格式化規則。我們可以發現，添加一個 <code>a % b</code> 操作去輸出一個二進制的數字比較有用，而如果你不使用空終止符字符串，那麼你應該去修改 <code>%s</code> 的行為，讓它從另一個參數中得到字符串的長度，或者如果你願意，可以從長度前綴中獲取。我在下面的示例中使用了一個空終止符。</p><p>實現這個函數的一個主要的障礙是它的參數個數是可變的。根據 ABI 規定，額外的參數在調用方法之前以相反的順序先推送到棧上。比如，我們使用 8 個參數 1、2、3、4、5、6、7 和 8 來調用我們的方法，我們將按下面的順序來處理：</p>`,29)),s[31]||(s[31]=n("ol",null,[n("li",null,"設置 r0 = 5、r1 = 6、r2 = 7、r3 = 8"),n("li",{"r0,r1,r2,r3":""},"推入"),n("li",null,"設置 r0 = 1、r1 = 2、r2 = 3、r3 = 4"),n("li",null,"調用函數"),n("li",null,"將 sp 和 #4*4 加起來")],-1)),s[32]||(s[32]=l(`<p>現在，我們必須確定我們的函數確切需要的參數。在我的案例中，我將寄存器 <code>r0</code> 用來保存格式化字符串地址，格式化字符串長度則放在寄存器 <code>r1</code> 中，目標字符串地址放在寄存器 <code>r2</code> 中，緊接着是要求的參數列表，從寄存器 <code>r3</code> 開始和像上面描述的那樣在棧上繼續。如果你想去使用一個空終止符格式化字符串，在寄存器 r1 中的參數將被移除。如果你想有一個最大緩衝區長度，你可以將它保存在寄存器 <code>r3</code> 中。由於有額外的修改，我認為這樣修改函數是很有用的，如果目標字符串地址為 0，意味着沒有字符串被輸出，但如果仍然返回一個精確的長度，意味着能夠精確的判斷格式化字符串的長度。</p><p>如果你希望嘗試實現你自己的函數，現在就可以去做了。如果不去實現你自己的，下面我將首先構建方法的偽代碼，然後給出實現的彙編代碼。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">StringFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">formatLength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r2 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ...)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set index to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set length to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> formatLength</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set index to index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> length, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> length, nextArg)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> or </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;i&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SignedString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nextArg, dest, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;o&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UnsignedString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nextArg, dest, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;u&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UnsignedString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nextArg, dest, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UnsignedString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nextArg, dest, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;x&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UnsignedString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nextArg, dest, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set str to nextArg</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        while</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> length, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          set str to str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;n&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        setWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nextArg, length)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    otherwise</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> length, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set index to index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  loop</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> length</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>雖然這個函數很大，但它還是很簡單的。大多數的代碼都是在檢查所有各種條件，每個代碼都是很簡單的。此外，所有的無符號整數的大小寫都是相同的（除了底以外）。因此在彙編中可以將它們彙總。下面是它的彙編代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl FormatString</span></span>
<span class="line"><span>FormatString:</span></span>
<span class="line"><span>format .req r4</span></span>
<span class="line"><span>formatLength .req r5</span></span>
<span class="line"><span>dest .req r6</span></span>
<span class="line"><span>nextArg .req r7</span></span>
<span class="line"><span>argList .req r8</span></span>
<span class="line"><span>length .req r9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>push {r4,r5,r6,r7,r8,r9,lr}</span></span>
<span class="line"><span>mov format,r0</span></span>
<span class="line"><span>mov formatLength,r1</span></span>
<span class="line"><span>mov dest,r2</span></span>
<span class="line"><span>mov nextArg,r3</span></span>
<span class="line"><span>add argList,sp,#7*4</span></span>
<span class="line"><span>mov length,#0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>formatLoop$:</span></span>
<span class="line"><span>  subs formatLength,#1</span></span>
<span class="line"><span>  movlt r0,length</span></span>
<span class="line"><span>  poplt {r4,r5,r6,r7,r8,r9,pc}</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ldrb r0,[format]</span></span>
<span class="line"><span>  add format,#1</span></span>
<span class="line"><span>  teq r0,#&#39;%&#39;</span></span>
<span class="line"><span>  beq formatArg$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>formatChar$:</span></span>
<span class="line"><span>  teq dest,#0</span></span>
<span class="line"><span>  strneb r0,[dest]</span></span>
<span class="line"><span>  addne dest,#1</span></span>
<span class="line"><span>  add length,#1</span></span>
<span class="line"><span>  b formatLoop$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>formatArg$:</span></span>
<span class="line"><span>  subs formatLength,#1</span></span>
<span class="line"><span>  movlt r0,length</span></span>
<span class="line"><span>  poplt {r4,r5,r6,r7,r8,r9,pc}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ldrb r0,[format]</span></span>
<span class="line"><span>  add format,#1</span></span>
<span class="line"><span>  teq r0,#&#39;%&#39;</span></span>
<span class="line"><span>  beq formatChar$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  teq r0,#&#39;c&#39;</span></span>
<span class="line"><span>  moveq r0,nextArg</span></span>
<span class="line"><span>  ldreq nextArg,[argList]</span></span>
<span class="line"><span>  addeq argList,#4</span></span>
<span class="line"><span>  beq formatChar$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  teq r0,#&#39;s&#39;</span></span>
<span class="line"><span>  beq formatString$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  teq r0,#&#39;d&#39;</span></span>
<span class="line"><span>  beq formatSigned$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  teq r0,#&#39;u&#39;</span></span>
<span class="line"><span>  teqne r0,#&#39;x&#39;</span></span>
<span class="line"><span>  teqne r0,#&#39;b&#39;</span></span>
<span class="line"><span>  teqne r0,#&#39;o&#39;</span></span>
<span class="line"><span>  beq formatUnsigned$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  b formatLoop$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>formatString$:</span></span>
<span class="line"><span>  ldrb r0,[nextArg]</span></span>
<span class="line"><span>  teq r0,#0x0</span></span>
<span class="line"><span>  ldreq nextArg,[argList]</span></span>
<span class="line"><span>  addeq argList,#4</span></span>
<span class="line"><span>  beq formatLoop$</span></span>
<span class="line"><span>  add length,#1</span></span>
<span class="line"><span>  teq dest,#0</span></span>
<span class="line"><span>  strneb r0,[dest]</span></span>
<span class="line"><span>  addne dest,#1</span></span>
<span class="line"><span>  add nextArg,#1</span></span>
<span class="line"><span>  b formatString$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>formatSigned$:</span></span>
<span class="line"><span>  mov r0,nextArg</span></span>
<span class="line"><span>  ldr nextArg,[argList]</span></span>
<span class="line"><span>  add argList,#4</span></span>
<span class="line"><span>  mov r1,dest</span></span>
<span class="line"><span>  mov r2,#10</span></span>
<span class="line"><span>  bl SignedString</span></span>
<span class="line"><span>  teq dest,#0</span></span>
<span class="line"><span>  addne dest,r0</span></span>
<span class="line"><span>  add length,r0</span></span>
<span class="line"><span>  b formatLoop$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>formatUnsigned$:</span></span>
<span class="line"><span>  teq r0,#&#39;u&#39;</span></span>
<span class="line"><span>  moveq r2,#10</span></span>
<span class="line"><span>  teq r0,#&#39;x&#39;</span></span>
<span class="line"><span>  moveq r2,#16</span></span>
<span class="line"><span>  teq r0,#&#39;b&#39;</span></span>
<span class="line"><span>  moveq r2,#2</span></span>
<span class="line"><span>  teq r0,#&#39;o&#39;</span></span>
<span class="line"><span>  moveq r2,#8</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  mov r0,nextArg</span></span>
<span class="line"><span>  ldr nextArg,[argList]</span></span>
<span class="line"><span>  add argList,#4</span></span>
<span class="line"><span>  mov r1,dest</span></span>
<span class="line"><span>  bl UnsignedString</span></span>
<span class="line"><span>  teq dest,#0</span></span>
<span class="line"><span>  addne dest,r0</span></span>
<span class="line"><span>  add length,r0</span></span>
<span class="line"><span>  b formatLoop$</span></span></code></pre></div><h3 id="_5、一個轉換操作系統" tabindex="-1">5、一個轉換操作系統 <a class="header-anchor" href="#_5、一個轉換操作系統" aria-label="Permalink to “5、一個轉換操作系統”">​</a></h3><p>你可以使用這個方法隨意轉換你希望的任何東西。比如，下面的代碼將生成一個換算表，可以做從十進制到二進制到十六進制到八進制以及到 ASCII 的換算操作。</p><p>刪除 <code>main.s</code> 文件中 <code>bl SetGraphicsAddress</code> 之後的所有代碼，然後粘貼以下的代碼進去。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r4,#0</span></span>
<span class="line"><span>loop$:</span></span>
<span class="line"><span>ldr r0,=format</span></span>
<span class="line"><span>mov r1,#formatEnd-format</span></span>
<span class="line"><span>ldr r2,=formatEnd</span></span>
<span class="line"><span>lsr r3,r4,#4</span></span>
<span class="line"><span>push {r3}</span></span>
<span class="line"><span>push {r3}</span></span>
<span class="line"><span>push {r3}</span></span>
<span class="line"><span>push {r3}</span></span>
<span class="line"><span>bl FormatString</span></span>
<span class="line"><span>add sp,#16</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mov r1,r0</span></span>
<span class="line"><span>ldr r0,=formatEnd</span></span>
<span class="line"><span>mov r2,#0</span></span>
<span class="line"><span>mov r3,r4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cmp r3,#768-16</span></span>
<span class="line"><span>subhi r3,#768</span></span>
<span class="line"><span>addhi r2,#256</span></span>
<span class="line"><span>cmp r3,#768-16</span></span>
<span class="line"><span>subhi r3,#768</span></span>
<span class="line"><span>addhi r2,#256</span></span>
<span class="line"><span>cmp r3,#768-16</span></span>
<span class="line"><span>subhi r3,#768</span></span>
<span class="line"><span>addhi r2,#256</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bl DrawString</span></span>
<span class="line"><span></span></span>
<span class="line"><span>add r4,#16</span></span>
<span class="line"><span>b loop$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.section .data</span></span>
<span class="line"><span>format:</span></span>
<span class="line"><span>.ascii &quot;%d=0b%b=0x%x=0%o=&#39;%c&#39;&quot;</span></span>
<span class="line"><span>formatEnd:</span></span></code></pre></div><p>你能在測試之前推算出將發生什麼嗎？特別是對於 <code>r3 ≥ 128</code> 會發生什麼？嘗試在樹莓派上運行它，看看你是否猜對了。如果不能正常運行，請查看我們的排錯頁面。</p><p>如果一切順利，恭喜你！你已經完成了屏幕04 教程，屏幕系列的課程結束了！我們學習了像素和幀緩衝的知識，以及如何將它們應用到樹莓派上。我們學習瞭如何繪製簡單的線條，也學習如何繪製字符，以及將數字格式化為文本的寶貴技能。我們現在已經擁有了在一個操作系統上進行圖形輸出的全部知識。你可以寫出更多的繪製方法嗎？三維繪圖是什麼？你能實現一個 24 位幀緩衝嗎？能夠從命令列上讀取幀緩衝的大小嗎？</p>`,11)),n("p",null,[s[10]||(s[10]=a("接下來的課程是",-1)),p(i,{href:"https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/input01.html"},{default:t(()=>[...s[9]||(s[9]=[a("輸入",-1)])]),_:1}),s[11]||(s[11]=a("系列課程，它將教我們如何使用鍵盤和鼠標去實現一個傳統的計算機控制台。",-1))]),s[33]||(s[33]=n("hr",null,null,-1)),n("p",null,[s[13]||(s[13]=a("via: ",-1)),p(i,{href:"https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/screen04.html"},{default:t(()=>[...s[12]||(s[12]=[a("https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/screen04.html",-1)])]),_:1})]),n("p",null,[s[18]||(s[18]=a("作者：",-1)),p(i,{href:"https://www.cl.cam.ac.uk"},{default:t(()=>[...s[14]||(s[14]=[a("Alex Chadwick",-1)])]),_:1}),s[19]||(s[19]=a(" 選題：",-1)),p(i,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[15]||(s[15]=[a("lujun9972",-1)])]),_:1}),s[20]||(s[20]=a(" 譯者：",-1)),p(i,{href:"https://github.com/qhwdw"},{default:t(()=>[...s[16]||(s[16]=[a("qhwdw",-1)])]),_:1}),s[21]||(s[21]=a(" 校對：",-1)),p(i,{href:"https://github.com/wxy"},{default:t(()=>[...s[17]||(s[17]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[24]||(s[24]=a("本文由 ",-1)),p(i,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[22]||(s[22]=[a("LCTT",-1)])]),_:1}),s[25]||(s[25]=a(" 原創編譯，",-1)),p(i,{href:"https://linux.cn/"},{default:t(()=>[...s[23]||(s[23]=[a("Linux中國",-1)])]),_:1}),s[26]||(s[26]=a(" 榮譽推出",-1))])])}const f=e(d,[["render",E]]);export{b as __pageData,f as default};
