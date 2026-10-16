import{_ as e,a0 as o,w as r,s as u,I as a,x as n,a1 as p,A as t,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"使用 Plotly 来简化 Python 中的数据可视化 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Plotly 来简化 Python 中的数据可视化 | LCTT (202006) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Plotly 来简化 Python 中的数据可视化 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Plotly 来简化 Python 中的数据可视化 | LCTT (202006) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202006/20200528 Simplify data visualization in Python with Plotly","title":"使用 Plotly 来简化 Python 中的数据可视化","tag":"202006","desc":""},"relativePath":"202006/20200528 Simplify data visualization in Python with Plotly.md","filePath":"[post].md"}'),d={name:"202006/20200528 Simplify data visualization in Python with Plotly.md"};function y(g,s,f,b,m,k){const l=o("Link");return r(),u("div",null,[s[85]||(s[85]=a("h1",{id:"使用-plotly-来简化-python-中的数据可视化",tabindex:"-1"},[n("使用 Plotly 来简化 Python 中的数据可视化 "),a("a",{class:"header-anchor",href:"#使用-plotly-来简化-python-中的数据可视化","aria-label":"Permalink to “使用 Plotly 来简化 Python 中的数据可视化”"},"​")],-1)),s[86]||(s[86]=a("blockquote",null,[a("p",null,"Plotly 是一个数据绘图库，具有整洁的接口，它旨在允许你构建自己的 API。")],-1)),s[87]||(s[87]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202006/27/215314y0rkrz0e9zw7wd2o.jpg",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("Plotly 是一个绘图生态系统，可以让你在 ",-1)),p(l,{href:"https://opensource.com/resources/python"},{default:t(()=>[...s[0]||(s[0]=[n("Python",-1)])]),_:1}),s[3]||(s[3]=n(" 以及 JavaScript 和 R 中进行绘图。在本文中，我将重点介绍",-1)),p(l,{href:"https://linux.cn/article-12327-1.html"},{default:t(()=>[...s[1]||(s[1]=[n("使用 Python 库进行绘图",-1)])]),_:1}),s[4]||(s[4]=n("。",-1))]),s[88]||(s[88]=a("p",null,"Plotly 有三种不同的 Python API，你可以选择不同的方法来使用它：",-1)),s[89]||(s[89]=a("ul",null,[a("li",null,"类似于 Matplotlib 的面向对象的 API"),a("li",null,"数据驱动的 API，通过构造类似 JSON 的数据结构来定义绘图"),a("li",null,"类似于 Seaborn 的高级绘图接口，称为 “Plotly Express” API")],-1)),s[90]||(s[90]=a("p",null,"我将通过使用每个 API 来绘制相同的图来探索它们：英国大选结果的分组柱状图。",-1)),s[91]||(s[91]=a("p",null,"在我们进一步探讨之前，请注意，你可能需要调整你的 Python 环境来让这段代码运行，包括以下内容：",-1)),a("ul",null,[a("li",null,[s[8]||(s[8]=n("运行最新版本的Python（",-1)),p(l,{href:"https://opensource.com/article/20/4/install-python-linux"},{default:t(()=>[...s[5]||(s[5]=[n("Linux",-1)])]),_:1}),s[9]||(s[9]=n("、",-1)),p(l,{href:"thttps://opensource.com/article/19/5/python-3-default-mac"},{default:t(()=>[...s[6]||(s[6]=[n("Mac",-1)])]),_:1}),s[10]||(s[10]=n(" 和 ",-1)),p(l,{href:"https://opensource.com/article/19/8/how-install-python-windows"},{default:t(()=>[...s[7]||(s[7]=[n("Windows",-1)])]),_:1}),s[11]||(s[11]=n(" 的说明）",-1))]),s[12]||(s[12]=a("li",null,"确认你运行的 Python 版本能与这些库一起工作",-1))]),s[92]||(s[92]=i(`<p>数据可在线获得，可以用 Pandas 导入。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import pandas as pd</span></span>
<span class="line"><span>df = pd.read_csv(&#39;https://anvil.works/blog/img/plotting-in-python/uk-election-results.csv&#39;)</span></span></code></pre></div><p>现在我们可以继续进行了。</p><h3 id="使用图对象来绘制图" tabindex="-1">使用图对象来绘制图 <a class="header-anchor" href="#使用图对象来绘制图" aria-label="Permalink to “使用图对象来绘制图”">​</a></h3>`,4)),a("p",null,[s[14]||(s[14]=n("Plotly 面向对象的 API 被称为 ",-1)),s[15]||(s[15]=a("code",null,"graph_objects",-1)),s[16]||(s[16]=n("，它有点类似于 ",-1)),p(l,{href:"https://opensource.com/article/20/5/matplotlib-python"},{default:t(()=>[...s[13]||(s[13]=[n("Matplotlib 的面向对象 API",-1)])]),_:1}),s[17]||(s[17]=n("。",-1))]),s[93]||(s[93]=i(`<p>要创建一个柱状图，你可以构造一个包含四个柱状图的对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 导入 Plotly 和数据</span></span>
<span class="line"><span>import plotly.graph_objects as go</span></span>
<span class="line"><span>from votes import wide as df</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 得到 x 列表</span></span>
<span class="line"><span>years = df[&#39;year&#39;]</span></span>
<span class="line"><span>x = list(range(len(years)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定义绘图</span></span>
<span class="line"><span>bar_plots = [</span></span>
<span class="line"><span>  go.Bar(x=x, y=df[&#39;conservative&#39;], name=&#39;Conservative&#39;, marker=go.bar.Marker(color=&#39;#0343df&#39;)),</span></span>
<span class="line"><span>  go.Bar(x=x, y=df[&#39;labour&#39;], name=&#39;Labour&#39;, marker=go.bar.Marker(color=&#39;#e50000&#39;)),</span></span>
<span class="line"><span>  go.Bar(x=x, y=df[&#39;liberal&#39;], name=&#39;Liberal&#39;, marker=go.bar.Marker(color=&#39;#ffff14&#39;)),</span></span>
<span class="line"><span>  go.Bar(x=x, y=df[&#39;others&#39;], name=&#39;Others&#39;, marker=go.bar.Marker(color=&#39;#929591&#39;)),</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定样式</span></span>
<span class="line"><span>layout = go.Layout(</span></span>
<span class="line"><span>  title=go.layout.Title(text=&quot;Election results&quot;, x=0.5),</span></span>
<span class="line"><span>  yaxis_title=&quot;Seats&quot;,</span></span>
<span class="line"><span>  xaxis_tickmode=&quot;array&quot;,</span></span>
<span class="line"><span>  xaxis_tickvals=list(range(27)),</span></span>
<span class="line"><span>  xaxis_ticktext=tuple(df[&#39;year&#39;].values),</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span># 绘制柱状图</span></span>
<span class="line"><span>fig = go.Figure(data=bar_plots, layout=layout)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 告诉 Plotly 去渲染</span></span>
<span class="line"><span>fig.show()</span></span></code></pre></div><p>与 Matplotlib 不同的是，你无需手动计算柱状图的 <code>x</code> 轴位置，Plotly 会帮你适配。</p><p>最终结果图：</p><p><img src="https://opensource.com/sites/default/files/uploads/plotly.png" alt="A multi-bar plot made using Graph Objects" title="A multi-bar plot made using Graph Objects"></p>`,5)),a("p",null,[a("em",null,[s[19]||(s[19]=n("A multi-bar plot made using Graph Objects (© 2019 ",-1)),p(l,{href:"https://anvil.works/blog/plotting-in-plotly"},{default:t(()=>[...s[18]||(s[18]=[n("Anvil",-1)])]),_:1}),s[20]||(s[20]=n(")",-1))])]),s[94]||(s[94]=i(`<h3 id="使用-python-数据结构来绘图" tabindex="-1">使用 Python 数据结构来绘图 <a class="header-anchor" href="#使用-python-数据结构来绘图" aria-label="Permalink to “使用 Python 数据结构来绘图”">​</a></h3><p>你还可以使用 Python 基本数据结构来定义绘图，它与面对对象 API 具有相同的结构。这直接对应于 Plotly 的 JavaScript 实现的 JSON API。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 定义绘图数据</span></span>
<span class="line"><span>fig = {</span></span>
<span class="line"><span>    &#39;data&#39;: [</span></span>
<span class="line"><span>        {&#39;type&#39;: &#39;bar&#39;, &#39;x&#39;: x, &#39;y&#39;: df[&#39;conservative&#39;], &#39;name&#39;: &#39;Conservative&#39;, &#39;marker&#39;: {&#39;color&#39;: &#39;#0343df&#39;}},</span></span>
<span class="line"><span>        {&#39;type&#39;: &#39;bar&#39;, &#39;x&#39;: x, &#39;y&#39;: df[&#39;labour&#39;], &#39;name&#39;: &#39;Labour&#39;, &#39;marker&#39;: {&#39;color&#39;: &#39;#e50000&#39;}},</span></span>
<span class="line"><span>        {&#39;type&#39;: &#39;bar&#39;, &#39;x&#39;: x, &#39;y&#39;: df[&#39;liberal&#39;], &#39;name&#39;: &#39;Liberal&#39;, &#39;marker&#39;: {&#39;color&#39;: &#39;#ffff14&#39;}},</span></span>
<span class="line"><span>        {&#39;type&#39;: &#39;bar&#39;, &#39;x&#39;: x, &#39;y&#39;: df[&#39;others&#39;], &#39;name&#39;: &#39;Others&#39;, &#39;marker&#39;: {&#39;color&#39;: &#39;#929591&#39;}},</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &#39;layout&#39;: {</span></span>
<span class="line"><span>        &#39;title&#39;: {&#39;text&#39;: &#39;Election results&#39;, &#39;x&#39;: 0.5},</span></span>
<span class="line"><span>        &#39;yaxis&#39;: {&#39;title&#39;: &#39;Seats&#39;},</span></span>
<span class="line"><span>        &#39;xaxis&#39;: {</span></span>
<span class="line"><span>            &#39;tickmode&#39;: &#39;array&#39;,</span></span>
<span class="line"><span>            &#39;tickvals&#39;: list(range(27)),</span></span>
<span class="line"><span>            &#39;ticktext&#39;: tuple(df[&#39;year&#39;].values),</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 告诉 Plotly 去渲染它</span></span>
<span class="line"><span>pio.show(fig)</span></span></code></pre></div><p>最终结果与上次完全相同：</p><p><img src="https://opensource.com/sites/default/files/uploads/plotly-pio.png" alt="A multi-bar plot made using JSON-like data structures" title="A multi-bar plot made using JSON-like data structures"></p>`,5)),a("p",null,[a("em",null,[s[22]||(s[22]=n("A multi-bar plot made using JSON-like data structures (© 2019 ",-1)),p(l,{href:"https://anvil.works/blog/plotting-in-plotly"},{default:t(()=>[...s[21]||(s[21]=[n("Anvil",-1)])]),_:1}),s[23]||(s[23]=n(")",-1))])]),s[95]||(s[95]=a("h4",{id:"使用-plotly-express-进行绘图",tabindex:"-1"},[n("使用 Plotly Express 进行绘图 "),a("a",{class:"header-anchor",href:"#使用-plotly-express-进行绘图","aria-label":"Permalink to “使用 Plotly Express 进行绘图”"},"​")],-1)),a("p",null,[p(l,{href:"https://plot.ly/python/plotly-express/"},{default:t(()=>[...s[24]||(s[24]=[n("Plotly Express",-1)])]),_:1}),s[25]||(s[25]=n(" 是对图对象进行封装的高级 API。",-1))]),s[96]||(s[96]=i(`<p>你可以使用一行代码来绘制柱状图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 导入 Plotly 和数据</span></span>
<span class="line"><span>import plotly.express as px</span></span>
<span class="line"><span>from votes import long as df</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定义颜色字典获得自定义栏颜色</span></span>
<span class="line"><span>cmap = {</span></span>
<span class="line"><span>    &#39;Conservative&#39;: &#39;#0343df&#39;,</span></span>
<span class="line"><span>    &#39;Labour&#39;: &#39;#e50000&#39;,</span></span>
<span class="line"><span>    &#39;Liberal&#39;: &#39;#ffff14&#39;,</span></span>
<span class="line"><span>    &#39;Others&#39;: &#39;#929591&#39;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 生成图</span></span>
<span class="line"><span>fig = px.bar(df, x=&quot;year&quot;, y=&quot;seats&quot;, color=&quot;party&quot;, barmode=&quot;group&quot;, color_discrete_map=cmap)</span></span></code></pre></div>`,2)),a("p",null,[s[29]||(s[29]=n("这里使用了",-1)),a("ruby",null,[p(l,{href:"https://anvil.works/blog/tidy-data"},{default:t(()=>[...s[26]||(s[26]=[n("长表",-1)])]),_:1}),s[27]||(s[27]=a("rt",null,"Long Form",-1))]),s[30]||(s[30]=n(" 数据，也称为“整洁数据”。这些列代表年份、政党和席位，而不是按政党划分。这与在 ",-1)),p(l,{href:"https://opensource.com/article/20/5/seaborn-visualization-python"},{default:t(()=>[...s[28]||(s[28]=[n("Seaborn",-1)])]),_:1}),s[31]||(s[31]=n(" 中制作柱状图非常相似。",-1))]),s[97]||(s[97]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt; print(long)</span></span>
<span class="line"><span>     year         party  seats</span></span>
<span class="line"><span>0    1922  Conservative    344</span></span>
<span class="line"><span>1    1923  Conservative    258</span></span>
<span class="line"><span>2    1924  Conservative    412</span></span>
<span class="line"><span>3    1929  Conservative    260</span></span>
<span class="line"><span>4    1931  Conservative    470</span></span>
<span class="line"><span>..    ...           ...    ...</span></span>
<span class="line"><span>103  2005        Others     30</span></span>
<span class="line"><span>104  2010        Others     29</span></span>
<span class="line"><span>105  2015        Others     80</span></span>
<span class="line"><span>106  2017        Others     59</span></span>
<span class="line"><span>107  2019        Others     72</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[108 rows x 3 columns]</span></span></code></pre></div><p>你可以访问底层的图对象 API 进行详细调整。如添加标题和 <code>y</code> 轴标签：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 使用图对象 API 来调整绘图</span></span>
<span class="line"><span>import plotly.graph_objects as go</span></span>
<span class="line"><span>fig.layout = go.Layout(</span></span>
<span class="line"><span>    title=go.layout.Title(text=&quot;Election results&quot;, x=0.5),</span></span>
<span class="line"><span>    yaxis_title=&quot;Seats&quot;,</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>最后，让 Plotly 渲染：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fig.show()</span></span></code></pre></div><p>这将在未使用的端口上运行一个临时 Web 服务器，并打开默认的 Web 浏览器来查看图像（Web 服务器将会马上被关闭）。</p><p>不幸的是，结果并不完美。<code>x</code> 轴被视为整数，因此两组之间的距离很远且很小，这使得我们很难看到趋势。</p><p><img src="https://opensource.com/sites/default/files/uploads/plotly-express.png" alt="使用 Plotly Express 制作的柱状图" title="A multi-bar plot made using Plotly Express"></p>`,8)),a("p",null,[a("em",null,[s[33]||(s[33]=n("A multi-bar plot made using Plotly Express (© 2019 ",-1)),p(l,{href:"https://anvil.works/blog/plotting-in-plotly"},{default:t(()=>[...s[32]||(s[32]=[n("Anvil",-1)])]),_:1}),s[34]||(s[34]=n(")",-1))])]),s[98]||(s[98]=a("p",null,[n("你可能会尝试通过将 "),a("code",null,"x"),n(" 值转换为字符串来使 Plotly Express 将其视为字符串，这样它就会以均匀的间隔和词法顺序来绘制。不幸的是，它们的间隔还是很大，像在 "),a("code",null,"graph_objects"),n("中那样设置 "),a("code",null,"xaxis_tickvals"),n(" 也不行。")],-1)),a("p",null,[s[37]||(s[37]=n("与 ",-1)),p(l,{href:"https://opensource.com/article/20/5/seaborn-visualization-python"},{default:t(()=>[...s[35]||(s[35]=[n("Seaborn",-1)])]),_:1}),s[38]||(s[38]=n(" 中的类似示例不同，在这种情况下，抽象似乎没有提供足够的",-1)),p(l,{href:"https://anvil.works/blog/escape-hatches-and-ejector-seats"},{default:t(()=>[...s[36]||(s[36]=[n("应急方案",-1)])]),_:1}),s[39]||(s[39]=n("来提供你想要的东西，但是也许你可以编写",-1)),s[40]||(s[40]=a("em",null,"自己",-1)),s[41]||(s[41]=n("的 API？",-1))]),s[99]||(s[99]=a("h3",{id:"构建自己的-plotly-api",tabindex:"-1"},[n("构建自己的 Plotly API "),a("a",{class:"header-anchor",href:"#构建自己的-plotly-api","aria-label":"Permalink to “构建自己的 Plotly API”"},"​")],-1)),s[100]||(s[100]=a("p",null,"对 Plotly 的操作方式不满意？那就构建自己的 Plotly API！",-1)),a("p",null,[s[44]||(s[44]=n("Plotly 的核心是一个 JavaScript 库，它使用 ",-1)),p(l,{href:"https://d3js.org/"},{default:t(()=>[...s[42]||(s[42]=[n("D3",-1)])]),_:1}),s[45]||(s[45]=n(" 和 ",-1)),p(l,{href:"http://stack.gl/"},{default:t(()=>[...s[43]||(s[43]=[n("stack.gl",-1)])]),_:1}),s[46]||(s[46]=n(" 进行绘图。JavaScript 库的接口使用指定的 JSON 结构来绘图。因此，你只需要输出 JavaScript 库喜欢使用的 JSON 结构就好了。",-1))]),s[101]||(s[101]=a("p",null,"Anvil 这样做是为了创建一个完全在浏览器中工作的 Python Plotly API。",-1)),s[102]||(s[102]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/uploads/plotly-arch.png",alt:"Ployly 使用 JavaScript 库创建图形，由其它语言库通过 JSON 使用",title:"Plotly uses a JavaScript library to create plots, driven by libraries in other languages via JSON"})],-1)),a("p",null,[a("em",null,[s[48]||(s[48]=n("Plotly uses a JavaScript library to create plots, driven by libraries in other languages via JSON (© 2019 ",-1)),p(l,{href:"https://anvil.works/blog/plotting-in-plotly"},{default:t(()=>[...s[47]||(s[47]=[n("Anvil",-1)])]),_:1}),s[49]||(s[49]=n(")",-1))])]),a("p",null,[s[51]||(s[51]=n("在 Anvil 版本中，你可以同时使用图对象 API 和上面介绍的 Python 数据结构方法。运行完全相同的命令，将数据和布局分配给 Anvil 应用程序中的 ",-1)),p(l,{href:"https://anvil.works/docs/client/components/plots"},{default:t(()=>[...s[50]||(s[50]=[n("Plot 组件",-1)])]),_:1}),s[52]||(s[52]=n("。",-1))]),s[103]||(s[103]=i(`<p>这是用 Anvil 的客户端 Python API 绘制的多列柱状图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 导入 Anvil 库</span></span>
<span class="line"><span>from ._anvil_designer import EntrypointTemplate</span></span>
<span class="line"><span>from anvil import *</span></span>
<span class="line"><span>import anvil.server</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 导入客户端 Plotly</span></span>
<span class="line"><span>import plotly.graph_objs as go</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 这是一个 Anvil 表单</span></span>
<span class="line"><span>class Entrypoint(EntrypointTemplate):</span></span>
<span class="line"><span>  def __init__(self, **properties):</span></span>
<span class="line"><span>    # Set Form properties and Data Bindings.</span></span>
<span class="line"><span>    self.init_components(**properties)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 从服务器获取数据</span></span>
<span class="line"><span>    data = anvil.server.call(&#39;get_election_data&#39;)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    # 获取一个方便的 x 值列表</span></span>
<span class="line"><span>    years = data[&#39;year&#39;]</span></span>
<span class="line"><span>    x = list(range(len(years)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 定义绘图</span></span>
<span class="line"><span>    bar_plots = [</span></span>
<span class="line"><span>      go.Bar(x=x, y=data[&#39;conservative&#39;], name=&#39;Conservative&#39;, marker=go.Marker(color=&#39;#0343df&#39;)),</span></span>
<span class="line"><span>      go.Bar(x=x, y=data[&#39;labour&#39;], name=&#39;Labour&#39;, marker=go.Marker(color=&#39;#e50000&#39;)),</span></span>
<span class="line"><span>      go.Bar(x=x, y=data[&#39;liberal&#39;], name=&#39;Liberal&#39;, marker=go.Marker(color=&#39;#ffff14&#39;)),</span></span>
<span class="line"><span>      go.Bar(x=x, y=data[&#39;others&#39;], name=&#39;Others&#39;, marker=go.Marker(color=&#39;#929591&#39;)),</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>    # 规定布局</span></span>
<span class="line"><span>    layout = {</span></span>
<span class="line"><span>      &#39;title&#39;: &#39;Election results&#39;,</span></span>
<span class="line"><span>      &#39;yaxis&#39;: {&#39;title&#39;: &#39;Seats&#39;},</span></span>
<span class="line"><span>      &#39;xaxis&#39;: {</span></span>
<span class="line"><span>        &#39;tickmode&#39;: &#39;array&#39;,</span></span>
<span class="line"><span>        &#39;tickvals&#39;: list(range(27)),</span></span>
<span class="line"><span>        &#39;ticktext&#39;: data[&#39;year&#39;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 生成多列柱状图</span></span>
<span class="line"><span>    self.plot_1.data = bar_plots</span></span>
<span class="line"><span>    self.plot_1.layout = layout</span></span></code></pre></div>`,2)),a("p",null,[s[54]||(s[54]=n("绘图逻辑与上面相同，但是它完全在 Web 浏览器中运行，绘图是由用户计算机上的 Plotly JavaScript 库完成的！与本系列的所有其它 ",-1)),p(l,{href:"https://linux.cn/article-12327-1.html"},{default:t(()=>[...s[53]||(s[53]=[n("Python 绘图库",-1)])]),_:1}),s[55]||(s[55]=n("相比，这是一个很大的优势。因为其它 Python 库都需要在服务器上运行。",-1))]),s[104]||(s[104]=a("p",null,"这是在 Anvil 应用中运行的交互式 Plotly 图：",-1)),s[105]||(s[105]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/uploads/plotting-in-anvil.gif",alt:"The election plot on the web using Anvil's client-side-Python Plotly library",title:"The election plot on the web using Anvil's client-side-Python Plotly library"})],-1)),a("p",null,[a("em",null,[s[58]||(s[58]=n("The election plot on the web using Anvil's ",-1)),p(l,{href:"https://anvil.works/docs/client/python"},{default:t(()=>[...s[56]||(s[56]=[n("client-side-Python",-1)])]),_:1}),s[59]||(s[59]=n(" Plotly library (© 2019 ",-1)),p(l,{href:"https://anvil.works/blog/plotting-in-plotly"},{default:t(()=>[...s[57]||(s[57]=[n("Anvil",-1)])]),_:1}),s[60]||(s[60]=n(")",-1))])]),a("p",null,[s[62]||(s[62]=n("你可以",-1)),p(l,{href:"https://anvil.works/login?app-name=Plotting%20in%20Plotly&app-author=shaun%40anvil.works"},{default:t(()=>[...s[61]||(s[61]=[n("复制此示例",-1)])]),_:1}),s[63]||(s[63]=n("作为一个 Anvil 应用程序（注意：Anvil 需要注册才能使用）。",-1))]),s[106]||(s[106]=i(`<p>在前端运行 Plotly 还有另一个优势：它为自定义交互行为提供了更多选项。</p><h3 id="在-plotly-中自定义交互" tabindex="-1">在 Plotly 中自定义交互 <a class="header-anchor" href="#在-plotly-中自定义交互" aria-label="Permalink to “在 Plotly 中自定义交互”">​</a></h3><p>Plotly 绘图不仅是动态的，你可以自定义它们的互动行为。例如，你可以在每个柱状图中使用 <code>hovertemplate</code> 自定义工具提示的格式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    go.Bar(</span></span>
<span class="line"><span>      x=x,</span></span>
<span class="line"><span>      y=df[&#39;others&#39;],</span></span>
<span class="line"><span>      name=&#39;others&#39;,</span></span>
<span class="line"><span>      marker=go.bar.Marker(color=&#39;#929591&#39;),</span></span>
<span class="line"><span>      hovertemplate=&#39;Seats: &lt;b&gt;%{y}&lt;/b&gt;&#39;,</span></span>
<span class="line"><span>    ),</span></span></code></pre></div><p>当你把这个应用到每个柱状图时，你会看到以下结果：</p><p><img src="https://opensource.com/sites/default/files/uploads/plotly-tooltips.png" alt="A multi-bar plot with custom tool-tips" title="A multi-bar plot with custom tool-tips"></p>`,6)),a("p",null,[a("em",null,[s[65]||(s[65]=n("A multi-bar plot with custom tool-tips (© 2019 ",-1)),p(l,{href:"https://anvil.works/blog/plotting-in-plotly"},{default:t(()=>[...s[64]||(s[64]=[n("Anvil",-1)])]),_:1}),s[66]||(s[66]=n(")",-1))])]),s[107]||(s[107]=a("p",null,"这很有用，当你想要在某些事件发生时执行任何你想要的代码就更好了（例如，当用户将鼠标悬停在栏上，你想要显示一个相关选举的信息框）。在 Anvil 的 Plotly 库中，你可以将事件处理程序绑定到诸如悬停之类的事件，这使得复杂的交互成为可能。",-1)),s[108]||(s[108]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/uploads/plotly-event-handling.gif",alt:"A multi-bar plot with a hover event handler",title:"A multi-bar plot with a hover event handler"})],-1)),a("p",null,[a("em",null,[s[68]||(s[68]=n("A multi-bar plot with a hover event handler (© 2019 ",-1)),p(l,{href:"https://anvil.works/blog/plotting-in-plotly"},{default:t(()=>[...s[67]||(s[67]=[n("Anvil",-1)])]),_:1}),s[69]||(s[69]=n(")",-1))])]),s[109]||(s[109]=i(`<p>你可以通过将方法绑定到绘图的悬停事件来实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  def plot_1_hover(self, points, **event_args):</span></span>
<span class="line"><span>    &quot;&quot;&quot;This method is called when a data point is hovered.&quot;&quot;&quot;</span></span>
<span class="line"><span>    i = points[0][&#39;point_number&#39;]</span></span>
<span class="line"><span>    self.label_year.text = self.data[&#39;year&#39;][i]</span></span>
<span class="line"><span>    self.label_con.text = self.data[&#39;conservative&#39;][i]</span></span>
<span class="line"><span>    self.label_lab.text = self.data[&#39;labour&#39;][i]</span></span>
<span class="line"><span>    self.label_lib.text = self.data[&#39;liberal&#39;][i]</span></span>
<span class="line"><span>    self.label_oth.text = self.data[&#39;others&#39;][i]</span></span>
<span class="line"><span>    url = f&quot;https://en.wikipedia.org/wiki/{self.data[&#39;year&#39;][i]}_United_Kingdom_general_election&quot;</span></span>
<span class="line"><span>    self.link_more_info.text = url</span></span>
<span class="line"><span>    self.link_more_info.url = url</span></span></code></pre></div><p>这是一种相当极端的交互性，从开发人员的角度来看，也是一种极端的可定制性。这都要归功于 Plotly 的架构 —— 它有一个简洁的接口，明确的设计是为了让你建立自己的API。如果到处都能看到这种伟大的设计，那将会很有帮助！</p><h3 id="使用-bokeh-进行自定义交互" tabindex="-1">使用 Bokeh 进行自定义交互 <a class="header-anchor" href="#使用-bokeh-进行自定义交互" aria-label="Permalink to “使用 Bokeh 进行自定义交互”">​</a></h3><p>现在你已经了解了 Plotly 如何使用 JavaScript 来创建动态图，并且可以使用 Anvil 的客户端编写 Python 代码在浏览器中实时编辑它们。</p><p>Bokeh 是另一个 Python 绘图库，它可以输出可嵌入 Web 应用程序的 HTML 文档，并获得与 Plotly 提供的功能类似的动态功能（如果你想知道如何发音，那就是 “BOE-kay”）。</p><hr>`,7)),a("p",null,[s[71]||(s[71]=n("via: ",-1)),p(l,{href:"https://opensource.com/article/20/5/plotly-python"},{default:t(()=>[...s[70]||(s[70]=[n("https://opensource.com/article/20/5/plotly-python",-1)])]),_:1})]),a("p",null,[s[76]||(s[76]=n("作者：",-1)),p(l,{href:"https://opensource.com/users/shaun-taylor-morgan"},{default:t(()=>[...s[72]||(s[72]=[n("Shaun Taylor-Morgan",-1)])]),_:1}),s[77]||(s[77]=n(" 选题：",-1)),p(l,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[73]||(s[73]=[n("lujun9972",-1)])]),_:1}),s[78]||(s[78]=n(" 译者：",-1)),p(l,{href:"https://github.com/MjSeven"},{default:t(()=>[...s[74]||(s[74]=[n("MjSeven",-1)])]),_:1}),s[79]||(s[79]=n(" 校对：",-1)),p(l,{href:"https://github.com/wxy"},{default:t(()=>[...s[75]||(s[75]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[82]||(s[82]=n("本文由 ",-1)),p(l,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[80]||(s[80]=[n("LCTT",-1)])]),_:1}),s[83]||(s[83]=n(" 原创编译，",-1)),p(l,{href:"https://linux.cn/"},{default:t(()=>[...s[81]||(s[81]=[n("Linux中国",-1)])]),_:1}),s[84]||(s[84]=n(" 荣誉推出",-1))])])}const x=e(d,[["render",y]]);export{P as __pageData,x as default};
