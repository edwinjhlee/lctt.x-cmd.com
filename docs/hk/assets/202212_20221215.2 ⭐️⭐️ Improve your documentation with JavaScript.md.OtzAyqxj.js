import{_ as e,a0 as i,w as o,s as r,I as a,x as n,a1 as t,A as l,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"使用 JavaScript 增強你的文檔 | LCTT x X-CMD","titleTemplate":false,"description":"使用 JavaScript 增強你的文檔 | LCTT (202212) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 JavaScript 增強你的文檔 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 JavaScript 增強你的文檔 | LCTT (202212) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202212/20221215.2 ⭐️⭐️ Improve your documentation with JavaScript","title":"使用 JavaScript 增強你的文檔","tag":"202212","desc":""},"relativePath":"202212/20221215.2 ⭐️⭐️ Improve your documentation with JavaScript.md","filePath":"[post].md"}'),u={name:"202212/20221215.2 ⭐️⭐️ Improve your documentation with JavaScript.md"};function d(g,s,h,m,b,k){const p=i("Link");return o(),r("div",null,[s[18]||(s[18]=a("h1",{id:"使用-javascript-增強你的文檔",tabindex:"-1"},[n("使用 JavaScript 增強你的文檔 "),a("a",{class:"header-anchor",href:"#使用-javascript-增強你的文檔","aria-label":"Permalink to “使用 JavaScript 增強你的文檔”"},"​")],-1)),s[19]||(s[19]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202212/23/100615quu385qf83bu3p35.jpg",alt:""})],-1)),s[20]||(s[20]=a("blockquote",null,[a("p",null,"讓你的開源項目文檔充滿活力，從而吸引各種經驗水平的用户。")],-1)),s[21]||(s[21]=a("p",null,"開源軟件項目通常擁有非常多樣化的用户人羣。有些用户非常擅長使用該系統，並且只需要很少的文檔。對於這些實力派用户，文檔只需要提供必要的提示，並且可以包含更多的技術信息，比如説在 Shell 中運行的命令列。有些用户可能只是初學者。這些用户需要更多的幫助來設置系統並學習如何使用它。",-1)),s[22]||(s[22]=a("p",null,"寫一個同時適合這兩個用户羣體的文檔是令人生畏的。網站文檔需要在 “提供詳細的技術信息” 和 “提供更多的概述和指導” 之間尋求一個平衡。這是一個很難找到的平衡。如果你的文檔不能同時滿足這兩個用户人羣，那麼考慮一下另外一個選擇 —— 動態文檔。",-1)),a("p",null,[s[1]||(s[1]=n("探索在網頁中添加一點 ",-1)),t(p,{href:"https://opensource.com/downloads/learn-javascript"},{default:l(()=>[...s[0]||(s[0]=[n("JavaScript",-1)])]),_:1}),s[2]||(s[2]=n(" 使用户可以選擇自己想看的內容。",-1))]),s[23]||(s[23]=c(`<h3 id="構建你的內容" tabindex="-1">構建你的內容 <a class="header-anchor" href="#構建你的內容" aria-label="Permalink to “構建你的內容”">​</a></h3><p>你可以把例程添加的你的文檔中需要同時滿足 <ruby>專家<rt>expert</rt></ruby> 和 <ruby>初學者<rt>novice</rt></ruby> 的地方。在這個例程中，我們可以使用一個虛構的名為 AwesmeProject 的音樂播放器。</p><p>你可以用 HTML 編寫一個簡短的安裝文檔，通過 HTML 的 <ruby>類<rt>class</rt></ruby> 功能同時為專家和初學者提供操作指南。</p><p>例如，你可以用下面的代碼來為專家定義一個段落：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p class=&quot;expert reader&quot;&gt;</span></span></code></pre></div><p>這同時指派了 “專家類” 和 “讀者類”。你可以用下面的代碼來為初學者創建一個相同的段落。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p class=&quot;novice reader&quot;&gt;</span></span></code></pre></div><p>完整的 HTML 文件同時包含初學者的段落和專家的段落。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;title&gt;How to install the software&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;h1&gt;How to install the software&lt;/h1&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p&gt;Thanks for installing AwesomeProject! With AwesomeProject,</span></span>
<span class="line"><span>you can manage your music collection like a wizard.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p&gt;But first, we need to install it:&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p class=&quot;expert reader&quot;&gt;You can install AwesomeProject from</span></span>
<span class="line"><span>source. Download the tar file, extract it, then run:</span></span>
<span class="line"><span>&lt;code&gt;./configure ; make ; make install&lt;/code&gt;&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p class=&quot;novice reader&quot;&gt;AwesomeProject is available in</span></span>
<span class="line"><span>most Linux distributions. Check your graphical package manager and search for AwesomeProject to install it.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>例子中的 HTML 文檔沒有與之關聯的樣式表，所以瀏覽器中會顯示所有的段落。</p><p><img src="https://opensource.com/sites/default/files/2022-12/publishonec.textblack.png" alt="Image of html in black text."></p><p>我們可在文檔中添加一些簡單的樣式來為 <ruby>讀者<rt>reader</rt></ruby>、<ruby>專家<rt>expert</rt></ruby> 或者 <ruby>初學者<rt>novice</rt></ruby> 突出任何元素。為了使不同的文本更容易區分，讓我們把讀者類的背景顏色設置成米白色，專家類的字體顏色設置為深紅色，初學者的字體顏色則設置為深藍色。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;title&gt;How to install the software&lt;/title&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.reader {</span></span>
<span class="line"><span>background-color: ghostwhite;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.expert {</span></span>
<span class="line"><span>color: darkred;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.novice {</span></span>
<span class="line"><span>color: darkblue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;h1&gt;How to install the software&lt;/h1&gt;</span></span></code></pre></div><p>當你在瀏覽器中查看這個網頁時，這些樣式有助於突出這兩個段落。安裝指導的所有段落都有一個米白色背景，因為他們都有 <ruby>讀者<rt>reader</rt></ruby> 這個類。第一個段落的字體是深紅色的，這是由 <ruby>專家<rt>expert</rt></ruby> 這個類定義的。第二個段落的字體是深藍色的，則是由 <ruby>初學者<rt>novice</rt></ruby> 這個類定義的。</p><p><img src="https://opensource.com/sites/default/files/2022-12/publishone.red_.blue_.png" alt="Image of html in red and black text."></p><h3 id="添加-javascript-控件" tabindex="-1">添加 JavaScript 控件 <a class="header-anchor" href="#添加-javascript-控件" aria-label="Permalink to “添加 JavaScript 控件”">​</a></h3><p>這些類的應用，使你可以添加一些簡單的 JavaScript 函數，只顯示其中一個內容塊。一個方法是，首先給所有的讀者類元素設置 <code>display:none</code> 。這會將內容隱藏，使其不會在頁面上顯示。然後，用函數將你想顯示的類元素設置為 <code>display:block</code> :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>function readerview(audience) {</span></span>
<span class="line"><span>  var list, item;</span></span>
<span class="line"><span>  // hide all class=&quot;reader&quot;</span></span>
<span class="line"><span>  list = document.getElementsByClassName(&quot;reader&quot;);</span></span>
<span class="line"><span>  for (item = 0; item &lt; list.length; item++) {</span></span>
<span class="line"><span>    list[item].style.display = &quot;none&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // show all class=audience</span></span>
<span class="line"><span>  list = document.getElementsByClassName(audience);</span></span>
<span class="line"><span>  for (item = 0; item &lt; list.length; item++) {</span></span>
<span class="line"><span>    list[item].style.display = &quot;block&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>要在 HTML 文檔中使用這個 JavaScript，你可以吧這個功能附加到一個按鈕上。由於 <code>readerview</code> 函數需要一個<ruby>聽眾<rt>audience</rt></ruby>（這應該是相對那個虛擬音樂播放器來説的）作為參數，你可以使用你想查看的聽眾類別來調用這個函數，可以是<ruby>讀者<rt>reader</rt></ruby>，<ruby>專家<rt>expert</rt></ruby> 或者 <ruby>初學者<rt>novice</rt></ruby> 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>&lt;title&gt;How to install the software&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;style&gt;</span></span>
<span class="line"><span>    .reader {</span></span>
<span class="line"><span>    background-color: ghostwhite;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .expert {</span></span>
<span class="line"><span>    color: darkred;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .novice {</span></span>
<span class="line"><span>    color: darkblue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>function readerview(audience) {</span></span>
<span class="line"><span>  var list, item;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // hide all class=&quot;reader&quot;</span></span>
<span class="line"><span>  list = document.getElementsByClassName(&quot;reader&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (item = 0; item &lt; list.length; item++) {</span></span>
<span class="line"><span>    list[item].style.display = &quot;none&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // show all class=audience</span></span>
<span class="line"><span>  list = document.getElementsByClassName(audience);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (item = 0; item &lt; list.length; item++) {</span></span>
<span class="line"><span>    list[item].style.display = &quot;block&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;h1&gt;How to install the software&lt;/h1&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;nav&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;button onclick=&quot;readerview(&#39;novice&#39;)&quot;&gt;view novice text&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;button onclick=&quot;readerview(&#39;expert&#39;)&quot;&gt;view expert text&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/nav&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p&gt;Thanks for installing AwesomeProject! With AwesomeProject,</span></span>
<span class="line"><span>you can manage your music collection like a wizard.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p&gt;But first, we need to install it:&lt;/p&gt;</span></span>
<span class="line"><span>&lt;p class=&quot;expert reader&quot;&gt;You can install AwesomeProject from</span></span>
<span class="line"><span>source. Download the tar file, extract it, then run</span></span>
<span class="line"><span>&lt;code&gt;./configure ; make ; make install&lt;/code&gt;&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p class=&quot;novice reader&quot;&gt;AwesomeProject is available in</span></span>
<span class="line"><span>most Linux distributions. Check your graphical package</span></span>
<span class="line"><span>manager and search for AwesomeProject to install it.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>有了這些設置，用户可以在網頁上選擇他們想看的文本。</p><p><img src="https://opensource.com/sites/default/files/2022-12/publishone.novicexpert.png" alt="Image of window that allows you to select between novice and expert text."></p><p>點擊任何一個按鈕都將只顯示用户想要閲讀的文本。例如，如果你點擊了 “<ruby>閲讀初學者內容<rt>view novice text</rt></ruby>” 按鈕，你就只會看到藍色段落。</p><p><img src="https://opensource.com/sites/default/files/2022-12/publishone.blue_.png" alt="Image showing blue text when you press the novice button."></p><p>點擊 “<ruby>閲讀專家內容<rt>view expert text</rt></ruby>” 按鈕，就會隱藏初學者文本，只顯示紅色的專家文本。</p><p><img src="https://opensource.com/sites/default/files/2022-12/publishone.red_.png" alt="Image of red text after the expert button is clicked."></p><h3 id="將此擴展到你的文檔" tabindex="-1">將此擴展到你的文檔 <a class="header-anchor" href="#將此擴展到你的文檔" aria-label="Permalink to “將此擴展到你的文檔”">​</a></h3><p>如果你的項目需要你為不同的聽眾編寫多個操作文檔，你可以考慮使用這種方法，一次發佈，多次閲讀。為所有的用户編寫一個文檔，是每個人都能很容易的發現和分享你項目的文檔。而你也不必同時維護盡在細節上有所不同的多個文檔。</p><hr>`,29)),a("p",null,[s[4]||(s[4]=n("via: ",-1)),t(p,{href:"https://opensource.com/article/22/12/dynamic-documentation-javascript"},{default:l(()=>[...s[3]||(s[3]=[n("https://opensource.com/article/22/12/dynamic-documentation-javascript",-1)])]),_:1})]),a("p",null,[s[9]||(s[9]=n("作者：",-1)),t(p,{href:"https://opensource.com/users/jim-hall"},{default:l(()=>[...s[5]||(s[5]=[n("Jim Hall",-1)])]),_:1}),s[10]||(s[10]=n(" 選題：",-1)),t(p,{href:"https://github.com/lkxed"},{default:l(()=>[...s[6]||(s[6]=[n("lkxed",-1)])]),_:1}),s[11]||(s[11]=n(" 譯者：",-1)),t(p,{href:"https://github.com/duoluoxiaosehng"},{default:l(()=>[...s[7]||(s[7]=[n("duoluoxiaosheng",-1)])]),_:1}),s[12]||(s[12]=n(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[8]||(s[8]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[15]||(s[15]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:l(()=>[...s[14]||(s[14]=[n("Linux中國",-1)])]),_:1}),s[17]||(s[17]=n(" 榮譽推出",-1))])])}const w=e(u,[["render",d]]);export{v as __pageData,w as default};
