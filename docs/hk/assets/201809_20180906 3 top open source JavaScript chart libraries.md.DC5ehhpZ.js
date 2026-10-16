import{_ as i,a0 as r,w as c,s as o,ao as e,I as t,a1 as p,A as l,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"最好的 3 個開源 JavaScript 圖表庫 | LCTT x X-CMD","titleTemplate":false,"description":"最好的 3 個開源 JavaScript 圖表庫 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"最好的 3 個開源 JavaScript 圖表庫 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"最好的 3 個開源 JavaScript 圖表庫 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180906 3 top open source JavaScript chart libraries","title":"最好的 3 個開源 JavaScript 圖表庫","tag":"201809","desc":""},"relativePath":"201809/20180906 3 top open source JavaScript chart libraries.md","filePath":"[post].md"}'),d={name:"201809/20180906 3 top open source JavaScript chart libraries.md"};function u(h,s,g,b,f,m){const a=r("Link");return c(),o("div",null,[s[23]||(s[23]=e('<h1 id="最好的-3-個開源-javascript-圖表庫" tabindex="-1">最好的 3 個開源 JavaScript 圖表庫 <a class="header-anchor" href="#最好的-3-個開源-javascript-圖表庫" aria-label="Permalink to “最好的 3 個開源 JavaScript 圖表庫”">​</a></h1><blockquote><p>圖表及其它可視化方式讓傳遞數據的信息變得更簡單。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/books_library_reading_list_colorful.jpg?itok=jJtnyniB" alt=""></p><p>對於數據可視化和製作精美網站來説，圖表和圖形很重要。視覺上的展示讓分析大塊數據及傳遞信息變得更簡單。JavaScript 圖表庫能讓數據以極好的、易於理解的和交互的方式進行可視化，還能夠優化你的網站設計。</p><p>本文會帶你學習最好的 3 個開源 JavaScript 圖表庫。</p><h3 id="_1、-chart-js" tabindex="-1">1、 Chart.js <a class="header-anchor" href="#_1、-chart-js" aria-label="Permalink to “1、 Chart.js”">​</a></h3>',6)),t("p",null,[p(a,{href:"https://www.chartjs.org/"},{default:l(()=>[...s[0]||(s[0]=[n("Chart.js",-1)])]),_:1}),s[1]||(s[1]=n(" 是一個開源的 JavaScript 庫，你可以在自己的應用中用它創建生動美麗和交互式的圖表。使用它需要遵循 MIT 協議。",-1))]),s[24]||(s[24]=e(`<p>使用 Chart.js，你可以創建各種各樣令人印象深刻的圖表和圖形，包括條形圖、折線圖、範圍圖、線性標度和散點圖。它可以響應各種設備，使用 HTML5 Canvas 元素進行繪製。</p><p>示例代碼如下，它使用該庫繪製了一個條形圖。本例中我們使用 Chart.js 的內容分發網絡（CDN）來包含這個庫。注意這裏使用的數據僅用於展示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    &lt;canvas id=&quot;bar-chart&quot; width=300&quot; height=&quot;150&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>new Chart(document.getElementById(&quot;bar-chart&quot;), {</span></span>
<span class="line"><span>    type: &#39;bar&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      labels: [&quot;North America&quot;, &quot;Latin America&quot;, &quot;Europe&quot;, &quot;Asia&quot;, &quot;Africa&quot;],</span></span>
<span class="line"><span>      datasets: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          label: &quot;Number of developers (millions)&quot;,</span></span>
<span class="line"><span>          backgroundColor: [&quot;red&quot;, &quot;blue&quot;,&quot;yellow&quot;,&quot;green&quot;,&quot;pink&quot;],</span></span>
<span class="line"><span>          data: [7,4,6,9,3]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    options: {</span></span>
<span class="line"><span>      legend: { display: false },</span></span>
<span class="line"><span>      title: {</span></span>
<span class="line"><span>        display: true,</span></span>
<span class="line"><span>        text: &#39;Number of Developers in Every Continent&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      scales: {</span></span>
<span class="line"><span>            yAxes: [{</span></span>
<span class="line"><span>                ticks: {</span></span>
<span class="line"><span>                    beginAtZero:true</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>如你所見，通過設置 <code>type</code> 和 <code>bar</code> 來構造條形圖。你可以把條形體的方向改成其他類型 —— 比如把 <code>type</code> 設置成 <code>horizontalBar</code>。</p><p>在 <code>backgroundColor</code> 數組參數中提供顏色類型，就可以設置條形圖的顏色。</p><p>顏色被分配給關聯數組中相同索引的標籤和數據。例如，第二個標籤 “Latin American”，顏色會是 “藍色（blue）”（第二個顏色），數值是 4（data 中的第二個數字）。</p><p>代碼的執行結果如下。</p><p><img src="https://opensource.com/sites/default/files/uploads/chartjs-output.png" alt=""></p><h3 id="_2、-chartist-js" tabindex="-1">2、 Chartist.js <a class="header-anchor" href="#_2、-chartist-js" aria-label="Permalink to “2、 Chartist.js”">​</a></h3>`,9)),t("p",null,[p(a,{href:"https://gionkunz.github.io/chartist-js/"},{default:l(()=>[...s[2]||(s[2]=[n("Chartist.js",-1)])]),_:1}),s[3]||(s[3]=n(" 是一個簡單的 JavaScript 動畫庫，你能夠自制美麗的響應式圖表，或者進行其他創作。使用它需要遵循 WTFPL 或者 MIT 協議。",-1))]),s[25]||(s[25]=e(`<p>這個庫是由一些對現有圖表工具不滿的開發者進行開發的，它可以為設計師或程序員提供美妙的功能。</p><p>在項目中包含 Chartist.js 庫後，你可以使用它們來創建各式各樣的圖表，包括動畫，條形圖和折線圖。它使用 SVG 來動態渲染圖表。</p><p>這裏是使用該庫繪製一個餅圖的例子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    &lt;link href=&quot;https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot; /&gt;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        .ct-series-a .ct-slice-pie {</span></span>
<span class="line"><span>            fill: hsl(100, 20%, 50%); /* filling pie slices */</span></span>
<span class="line"><span>            stroke: white; /*giving pie slices outline */          </span></span>
<span class="line"><span>            stroke-width: 5px;  /* outline width */</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          .ct-series-b .ct-slice-pie {</span></span>
<span class="line"><span>            fill: hsl(10, 40%, 60%);</span></span>
<span class="line"><span>            stroke: white;</span></span>
<span class="line"><span>            stroke-width: 5px;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          .ct-series-c .ct-slice-pie {</span></span>
<span class="line"><span>            fill: hsl(120, 30%, 80%);</span></span>
<span class="line"><span>            stroke: white;</span></span>
<span class="line"><span>            stroke-width: 5px;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          .ct-series-d .ct-slice-pie {</span></span>
<span class="line"><span>            fill: hsl(90, 70%, 30%);</span></span>
<span class="line"><span>            stroke: white;</span></span>
<span class="line"><span>            stroke-width: 5px;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          .ct-series-e .ct-slice-pie {</span></span>
<span class="line"><span>            fill: hsl(60, 140%, 20%);</span></span>
<span class="line"><span>            stroke: white;</span></span>
<span class="line"><span>            stroke-width: 5px;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>     &lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;ct-chart ct-golden-section&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script src=&quot;https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>      var data = {</span></span>
<span class="line"><span>            series: [45, 35, 20]</span></span>
<span class="line"><span>            };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      var sum = function(a, b) { return a + b };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      new Chartist.Pie(&#39;.ct-chart&#39;, data, {</span></span>
<span class="line"><span>        labelInterpolationFnc: function(value) {</span></span>
<span class="line"><span>          return Math.round(value / data.series.reduce(sum) * 100) + &#39;%&#39;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>     &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>使用 Chartist JavaScript 庫，你可以使用各種預先構建好的 CSS 樣式，而不是在項目中指定各種與樣式相關的部分。你可以使用這些樣式來設置已創建的圖表的外觀。</p><p>比如，預創建的 CSS 類 <code>.ct-chart</code> 是用來構建餅狀圖的容器。還有 <code>.ct-golden-section</code> 類可用於獲取縱橫比，它基於響應式設計進行縮放，幫你解決了計算固定尺寸的麻煩。Chartist 還提供了其它類別的比例容器，你可以在自己的項目中使用它們。</p><p>為了給各個扇形設置樣式，可以使用默認的 <code>.ct-serials-a</code> 類。字母 <code>a</code> 是根據系列的數量變化的（a、b、c，等等），因此它與每個要設置樣式的扇形相對應。</p><p><code>Chartist.Pie</code> 方法用來創建一個餅狀圖。要創建另一種類型的圖表，比如折線圖，請使用 <code>Chartist.Line</code>。</p><p>代碼的執行結果如下。</p><p><img src="https://opensource.com/sites/default/files/uploads/chartistjs-output.png" alt=""></p><h3 id="_3、-d3-js" tabindex="-1">3、 D3.js <a class="header-anchor" href="#_3、-d3-js" aria-label="Permalink to “3、 D3.js”">​</a></h3>`,11)),t("p",null,[p(a,{href:"https://d3js.org/"},{default:l(()=>[...s[4]||(s[4]=[n("D3.js",-1)])]),_:1}),s[5]||(s[5]=n(" 是另一個好用的開源 JavaScript 圖表庫。使用它需要遵循 BSD 許可證。D3 的主要用途是，根據提供的數據，處理和添加文檔的交互功能，。",-1))]),s[26]||(s[26]=e(`<p>藉助這個 3D 動畫庫，你可以通過 HTML5、SVG 和 CSS 來可視化你的數據，並且讓你的網站變得更精美。更重要的是，使用 D3，你可以把數據綁定到文檔對象模型（DOM）上，然後使用基於數據的函數改變文檔。</p><p>示例代碼如下，它使用該庫繪製了一個簡單的條形圖。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>    .chart div {</span></span>
<span class="line"><span>      font: 15px sans-serif;</span></span>
<span class="line"><span>      background-color: lightblue;</span></span>
<span class="line"><span>      text-align: right;</span></span>
<span class="line"><span>      padding:5px;</span></span>
<span class="line"><span>      margin:5px;</span></span>
<span class="line"><span>      color: white;</span></span>
<span class="line"><span>      font-weight: bold;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>     &lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;chart&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      var data = [342,222,169,259,173];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      d3.select(&quot;.chart&quot;)</span></span>
<span class="line"><span>        .selectAll(&quot;div&quot;)</span></span>
<span class="line"><span>        .data(data)</span></span>
<span class="line"><span>          .enter()</span></span>
<span class="line"><span>          .append(&quot;div&quot;)</span></span>
<span class="line"><span>          .style(&quot;width&quot;, function(d){ return d + &quot;px&quot;; })</span></span>
<span class="line"><span>          .text(function(d) { return d; });</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>使用 D3 庫的主要概念是應用 CSS 樣式選擇器來定位 DOM 節點，然後對其執行操作，就像其它的 DOM 框架，比如 JQuery。</p><p>將數據綁定到文檔上後，.<code>enter()</code> 函數會被調用，為即將到來的數據構建新的節點。所有在 .<code>enter()</code> 之後調用的方法會為數據中的每一個項目調用一次。</p><p>代碼的執行結果如下。</p><p><img src="https://opensource.com/sites/default/files/uploads/d3js-output.png" alt=""></p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3>`,8)),t("p",null,[p(a,{href:"https://www.liveedu.tv/guides/programming/javascript/"},{default:l(()=>[...s[6]||(s[6]=[n("JavaScript",-1)])]),_:1}),s[7]||(s[7]=n(" 圖表庫提供了強大的工具，你可以將自己的網絡資源進行數據可視化。通過這三個開源庫，你可以把自己的網站變得更好看，更容易使用。",-1))]),s[27]||(s[27]=t("p",null,"你知道其它強大的用於創造 JavaScript 動畫效果的前端庫嗎？請在下方的評論區留言分享。",-1)),s[28]||(s[28]=t("hr",null,null,-1)),t("p",null,[s[9]||(s[9]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/18/9/open-source-javascript-chart-libraries"},{default:l(()=>[...s[8]||(s[8]=[n("https://opensource.com/article/18/9/open-source-javascript-chart-libraries",-1)])]),_:1})]),t("p",null,[s[14]||(s[14]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/drmjg"},{default:l(()=>[...s[10]||(s[10]=[n("Dr.Michael J.Garbade",-1)])]),_:1}),s[15]||(s[15]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[11]||(s[11]=[n("lujun9972",-1)])]),_:1}),s[16]||(s[16]=n(" 譯者：",-1)),p(a,{href:"https://github.com/brifuture"},{default:l(()=>[...s[12]||(s[12]=[n("BriFuture",-1)])]),_:1}),s[17]||(s[17]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:l(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),t("p",null,[s[20]||(s[20]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:l(()=>[...s[19]||(s[19]=[n("Linux中國",-1)])]),_:1}),s[22]||(s[22]=n(" 榮譽推出",-1))])])}const C=i(d,[["render",u]]);export{v as __pageData,C as default};
