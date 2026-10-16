import{_ as i,a0 as r,w as c,s as o,ao as e,I as t,a1 as p,A as l,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"最好的 3 个开源 JavaScript 图表库 | LCTT x X-CMD","titleTemplate":false,"description":"最好的 3 个开源 JavaScript 图表库 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"最好的 3 个开源 JavaScript 图表库 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"最好的 3 个开源 JavaScript 图表库 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180906 3 top open source JavaScript chart libraries","title":"最好的 3 个开源 JavaScript 图表库","tag":"201809","desc":""},"relativePath":"201809/20180906 3 top open source JavaScript chart libraries.md","filePath":"[post].md"}'),d={name:"201809/20180906 3 top open source JavaScript chart libraries.md"};function u(h,s,g,b,f,m){const a=r("Link");return c(),o("div",null,[s[23]||(s[23]=e('<h1 id="最好的-3-个开源-javascript-图表库" tabindex="-1">最好的 3 个开源 JavaScript 图表库 <a class="header-anchor" href="#最好的-3-个开源-javascript-图表库" aria-label="Permalink to “最好的 3 个开源 JavaScript 图表库”">​</a></h1><blockquote><p>图表及其它可视化方式让传递数据的信息变得更简单。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/books_library_reading_list_colorful.jpg?itok=jJtnyniB" alt=""></p><p>对于数据可视化和制作精美网站来说，图表和图形很重要。视觉上的展示让分析大块数据及传递信息变得更简单。JavaScript 图表库能让数据以极好的、易于理解的和交互的方式进行可视化，还能够优化你的网站设计。</p><p>本文会带你学习最好的 3 个开源 JavaScript 图表库。</p><h3 id="_1、-chart-js" tabindex="-1">1、 Chart.js <a class="header-anchor" href="#_1、-chart-js" aria-label="Permalink to “1、 Chart.js”">​</a></h3>',6)),t("p",null,[p(a,{href:"https://www.chartjs.org/"},{default:l(()=>[...s[0]||(s[0]=[n("Chart.js",-1)])]),_:1}),s[1]||(s[1]=n(" 是一个开源的 JavaScript 库，你可以在自己的应用中用它创建生动美丽和交互式的图表。使用它需要遵循 MIT 协议。",-1))]),s[24]||(s[24]=e(`<p>使用 Chart.js，你可以创建各种各样令人印象深刻的图表和图形，包括条形图、折线图、范围图、线性标度和散点图。它可以响应各种设备，使用 HTML5 Canvas 元素进行绘制。</p><p>示例代码如下，它使用该库绘制了一个条形图。本例中我们使用 Chart.js 的内容分发网络（CDN）来包含这个库。注意这里使用的数据仅用于展示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
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
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>如你所见，通过设置 <code>type</code> 和 <code>bar</code> 来构造条形图。你可以把条形体的方向改成其他类型 —— 比如把 <code>type</code> 设置成 <code>horizontalBar</code>。</p><p>在 <code>backgroundColor</code> 数组参数中提供颜色类型，就可以设置条形图的颜色。</p><p>颜色被分配给关联数组中相同索引的标签和数据。例如，第二个标签 “Latin American”，颜色会是 “蓝色（blue）”（第二个颜色），数值是 4（data 中的第二个数字）。</p><p>代码的执行结果如下。</p><p><img src="https://opensource.com/sites/default/files/uploads/chartjs-output.png" alt=""></p><h3 id="_2、-chartist-js" tabindex="-1">2、 Chartist.js <a class="header-anchor" href="#_2、-chartist-js" aria-label="Permalink to “2、 Chartist.js”">​</a></h3>`,9)),t("p",null,[p(a,{href:"https://gionkunz.github.io/chartist-js/"},{default:l(()=>[...s[2]||(s[2]=[n("Chartist.js",-1)])]),_:1}),s[3]||(s[3]=n(" 是一个简单的 JavaScript 动画库，你能够自制美丽的响应式图表，或者进行其他创作。使用它需要遵循 WTFPL 或者 MIT 协议。",-1))]),s[25]||(s[25]=e(`<p>这个库是由一些对现有图表工具不满的开发者进行开发的，它可以为设计师或程序员提供美妙的功能。</p><p>在项目中包含 Chartist.js 库后，你可以使用它们来创建各式各样的图表，包括动画，条形图和折线图。它使用 SVG 来动态渲染图表。</p><p>这里是使用该库绘制一个饼图的例子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
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
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>使用 Chartist JavaScript 库，你可以使用各种预先构建好的 CSS 样式，而不是在项目中指定各种与样式相关的部分。你可以使用这些样式来设置已创建的图表的外观。</p><p>比如，预创建的 CSS 类 <code>.ct-chart</code> 是用来构建饼状图的容器。还有 <code>.ct-golden-section</code> 类可用于获取纵横比，它基于响应式设计进行缩放，帮你解决了计算固定尺寸的麻烦。Chartist 还提供了其它类别的比例容器，你可以在自己的项目中使用它们。</p><p>为了给各个扇形设置样式，可以使用默认的 <code>.ct-serials-a</code> 类。字母 <code>a</code> 是根据系列的数量变化的（a、b、c，等等），因此它与每个要设置样式的扇形相对应。</p><p><code>Chartist.Pie</code> 方法用来创建一个饼状图。要创建另一种类型的图表，比如折线图，请使用 <code>Chartist.Line</code>。</p><p>代码的执行结果如下。</p><p><img src="https://opensource.com/sites/default/files/uploads/chartistjs-output.png" alt=""></p><h3 id="_3、-d3-js" tabindex="-1">3、 D3.js <a class="header-anchor" href="#_3、-d3-js" aria-label="Permalink to “3、 D3.js”">​</a></h3>`,11)),t("p",null,[p(a,{href:"https://d3js.org/"},{default:l(()=>[...s[4]||(s[4]=[n("D3.js",-1)])]),_:1}),s[5]||(s[5]=n(" 是另一个好用的开源 JavaScript 图表库。使用它需要遵循 BSD 许可证。D3 的主要用途是，根据提供的数据，处理和添加文档的交互功能，。",-1))]),s[26]||(s[26]=e(`<p>借助这个 3D 动画库，你可以通过 HTML5、SVG 和 CSS 来可视化你的数据，并且让你的网站变得更精美。更重要的是，使用 D3，你可以把数据绑定到文档对象模型（DOM）上，然后使用基于数据的函数改变文档。</p><p>示例代码如下，它使用该库绘制了一个简单的条形图。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
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
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>使用 D3 库的主要概念是应用 CSS 样式选择器来定位 DOM 节点，然后对其执行操作，就像其它的 DOM 框架，比如 JQuery。</p><p>将数据绑定到文档上后，.<code>enter()</code> 函数会被调用，为即将到来的数据构建新的节点。所有在 .<code>enter()</code> 之后调用的方法会为数据中的每一个项目调用一次。</p><p>代码的执行结果如下。</p><p><img src="https://opensource.com/sites/default/files/uploads/d3js-output.png" alt=""></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3>`,8)),t("p",null,[p(a,{href:"https://www.liveedu.tv/guides/programming/javascript/"},{default:l(()=>[...s[6]||(s[6]=[n("JavaScript",-1)])]),_:1}),s[7]||(s[7]=n(" 图表库提供了强大的工具，你可以将自己的网络资源进行数据可视化。通过这三个开源库，你可以把自己的网站变得更好看，更容易使用。",-1))]),s[27]||(s[27]=t("p",null,"你知道其它强大的用于创造 JavaScript 动画效果的前端库吗？请在下方的评论区留言分享。",-1)),s[28]||(s[28]=t("hr",null,null,-1)),t("p",null,[s[9]||(s[9]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/18/9/open-source-javascript-chart-libraries"},{default:l(()=>[...s[8]||(s[8]=[n("https://opensource.com/article/18/9/open-source-javascript-chart-libraries",-1)])]),_:1})]),t("p",null,[s[14]||(s[14]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/drmjg"},{default:l(()=>[...s[10]||(s[10]=[n("Dr.Michael J.Garbade",-1)])]),_:1}),s[15]||(s[15]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[11]||(s[11]=[n("lujun9972",-1)])]),_:1}),s[16]||(s[16]=n(" 译者：",-1)),p(a,{href:"https://github.com/brifuture"},{default:l(()=>[...s[12]||(s[12]=[n("BriFuture",-1)])]),_:1}),s[17]||(s[17]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:l(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),t("p",null,[s[20]||(s[20]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:l(()=>[...s[19]||(s[19]=[n("Linux中国",-1)])]),_:1}),s[22]||(s[22]=n(" 荣誉推出",-1))])])}const C=i(d,[["render",u]]);export{v as __pageData,C as default};
