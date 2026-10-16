import{_ as i,a0 as t,w as o,s as d,I as n,x as a,a1 as e,A as l,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"使用 Bash 制作 Web 安全颜色 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Bash 制作 Web 安全颜色 | LCTT (202306) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Bash 制作 Web 安全颜色 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Bash 制作 Web 安全颜色 | LCTT (202306) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202306/20230406.0 ⭐️⭐️ Make a web-safe color guide with Bash","title":"使用 Bash 制作 Web 安全颜色","tag":"202306","desc":""},"relativePath":"202306/20230406.0 ⭐️⭐️ Make a web-safe color guide with Bash.md","filePath":"[post].md"}'),c={name:"202306/20230406.0 ⭐️⭐️ Make a web-safe color guide with Bash.md"};function h(b,s,g,f,k,u){const p=t("Link");return o(),d("div",null,[s[20]||(s[20]=n("h1",{id:"使用-bash-制作-web-安全颜色",tabindex:"-1"},[a("使用 Bash 制作 Web 安全颜色 "),n("a",{class:"header-anchor",href:"#使用-bash-制作-web-安全颜色","aria-label":"Permalink to “使用 Bash 制作 Web 安全颜色”"},"​")],-1)),s[21]||(s[21]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202306/21/133552hlgt2vdditxfzzcl.jpg",alt:""})],-1)),s[22]||(s[22]=n("blockquote",null,[n("p",null,"使用 Bash 中的 for 循环，为网页创建一个方便的调色板。")],-1)),n("p",null,[s[1]||(s[1]=a("当计算机显示器的调色板有限时，网页设计师通常使用一组 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Web_colors#Web-safe_colors"},{default:l(()=>[...s[0]||(s[0]=[a("Web 安全颜色",-1)])]),_:1}),s[2]||(s[2]=a(" 来创建网站。虽然在较新设备上显示的现代网站可以显示比最初的 Web 安全调色板更多的颜色，但我有时喜欢在创建网页时参考 Web 安全颜色。这样我就知道我的网页在任何地方都看起来不错。",-1))]),s[23]||(s[23]=n("p",null,[a("你可以在网上找到 Web 安全调色板，但我想拥有自己的副本以方便参考。你也可以使用 Bash 中的 "),n("code",null,"for"),a(" 循环创建一个。")],-1)),s[24]||(s[24]=n("h3",{id:"bash-for-循环",tabindex:"-1"},[a("Bash for 循环 "),n("a",{class:"header-anchor",href:"#bash-for-循环","aria-label":"Permalink to “Bash for 循环”"},"​")],-1)),n("p",null,[e(p,{href:"https://opensource.com/article/19/6/how-write-loop-bash"},{default:l(()=>[...s[3]||(s[3]=[a("Bash 中的 for 循环",-1)])]),_:1}),s[4]||(s[4]=a(" 的语法如下所示：",-1))]),s[25]||(s[25]=r(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for 变量 in 集合 ; do 语句 ; done</span></span></code></pre></div><p>例如，假设你想打印从 1 到 3 的所有数字。你可以快速在 Bash 命令行上编写一个 <code>for</code> 循环来为你完成这项工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ for n in 1 2 3 ; do echo $n ; done</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span></code></pre></div><p>分号是标准的 Bash 语句分隔符。它们允许你在一行中编写多个命令。如果你要在 Bash 脚本文件中包含这个 <code>for</code> 循环，你可以用换行符替换分号并像这样写出 <code>for</code> 循环：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for n in 1 2 3</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>    echo $n</span></span>
<span class="line"><span>  done</span></span></code></pre></div><p>我喜欢将 <code>do</code> 和 <code>for</code> 放在同一行，这样我更容易阅读：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for n in 1 2 3 ; do</span></span>
<span class="line"><span>  echo $n</span></span>
<span class="line"><span>done</span></span></code></pre></div><h3 id="一次多个-for-循环" tabindex="-1">一次多个 for 循环 <a class="header-anchor" href="#一次多个-for-循环" aria-label="Permalink to “一次多个 for 循环”">​</a></h3><p>你可以将一个循环放在另一个循环中。这可以帮助你迭代多个变量，一次做不止一件事。假设你想打印出字母 A、B 和 C 与数字 1、2 和 3 的所有组合。你可以在 Bash 中使用两个 <code>for</code> 循环来实现，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for number in 1 2 3 ; do</span></span>
<span class="line"><span>  for letter in A B C ; do</span></span>
<span class="line"><span>    echo $letter$number</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果将这些行放在名为 <code>for.bash</code> 的 Bash 脚本文件中并运行它，你会看到九行显示了所有字母与每个数字配对的组合：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash for.bash</span></span>
<span class="line"><span>A1</span></span>
<span class="line"><span>B1</span></span>
<span class="line"><span>C1</span></span>
<span class="line"><span>A2</span></span>
<span class="line"><span>B2</span></span>
<span class="line"><span>C2</span></span>
<span class="line"><span>A3</span></span>
<span class="line"><span>B3</span></span>
<span class="line"><span>C3</span></span></code></pre></div><h3 id="遍历-web-安全颜色" tabindex="-1">遍历 Web 安全颜色 <a class="header-anchor" href="#遍历-web-安全颜色" aria-label="Permalink to “遍历 Web 安全颜色”">​</a></h3><p>Web 安全颜色是从十六进制颜色 <code>#000</code>（黑色，即红色、绿色和蓝色值均为零）到 <code>#fff</code>（白色，即红色、绿色和蓝色均为最高），每个十六进制值的步进为 0、3、6、9、c 和 f。</p><p>你可以在 Bash 中使用三个 <code>for</code> 循环生成 Web 安全颜色的所有组合的列表，其中循环遍历红色、绿色和蓝色值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for r in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>  for g in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>    for b in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>      echo &quot;#$r$g$b&quot;</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果将其保存在名为 <code>websafe.bash</code> 的新 Bash 脚本中并运行它，你就会看到所有 Web 安全颜色的十六进制值的迭代：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash websafe.bash | head</span></span>
<span class="line"><span>#000</span></span>
<span class="line"><span>#003</span></span>
<span class="line"><span>#006</span></span>
<span class="line"><span>#009</span></span>
<span class="line"><span>#00c</span></span>
<span class="line"><span>#00f</span></span>
<span class="line"><span>#030</span></span>
<span class="line"><span>#033</span></span>
<span class="line"><span>#036</span></span>
<span class="line"><span>#039</span></span></code></pre></div><p>要制作可用作 Web 安全颜色参考的 HTML 页面，你需要使每个条目成为一个单独的 HTML 元素。将每种颜色放在一个 <code>&lt;div&gt;</code> 元素中，并将背景设置为 Web 安全颜色。为了使十六进制值更易于阅读，将其放在单独的 <code>&lt;code&gt;</code> 元素中。将 Bash 脚本更新为如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for r in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>  for g in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>    for b in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>      echo &quot;&lt;div style=&#39;background-color:#$r$g$b&#39;&gt;&lt;code&gt;#$r$g$b&lt;/code&gt;&lt;/div&gt;&quot;</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>当你运行新的 Bash 脚本并将结果保存到 HTML 文件时，你可以在浏览器中查看所有 Web 安全颜色的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash websafe.bash &gt; websafe.html</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/2023-03/10000001000002620000013685924861376B1AB6.webp" alt="Colour gradient."></p><p>这个网页不是很好看。深色背景上的黑色文字无法阅读。我喜欢应用一些 HTML 样式来确保十六进制值在颜色矩形内以黑色背景上的白色文本显示。为了使页面看起来非常漂亮，我还使用 HTML 网格样式来排列每行六个框，每个框之间留出一些空间。</p><p>要添加这种额外的样式，你需要在 for 循环前后包含其他 HTML 元素。顶部的 HTML 代码定义样式，底部的 HTML 代码关闭所有打开的 HTML 标签：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat&lt;&lt;EOF</span></span>
<span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>  &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Web-safe colors&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>div {</span></span>
<span class="line"><span>  padding-bottom: 1em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>code {</span></span>
<span class="line"><span>  background-color: black;</span></span>
<span class="line"><span>  color: white;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media only screen and (min-width:600px) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>body {</span></span>
<span class="line"><span>  display: grid;</span></span>
<span class="line"><span>  grid-template-columns: repeat(6,1fr);</span></span>
<span class="line"><span>  column-gap: 1em;</span></span>
<span class="line"><span>  row-gap: 1em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>div {</span></span>
<span class="line"><span>  padding-bottom: 3em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for r in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>for g in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>for b in 0 3 6 9 c f ; do</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;&lt;div</span></span>
<span class="line"><span>style=&#39;background-color:#$r$g$b&#39;&gt;&lt;code&gt;#$r$g$b&lt;/code&gt;&lt;/div&gt;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat&lt;&lt;EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>这个完成的 Bash 脚本以 HTML 格式生成 Web 安全颜色指南。每当你需要引用网络安全颜色时，运行脚本并将结果保存到 HTML 页面。现在你可以在浏览器中看到 Web 安全颜色的演示，作为你下一个 Web 项目的简单参考：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash websafe.bash &gt; websafe.html</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/2023-03/10000001000002620000013633233DC8DC56C891.webp" alt="Web colors."></p><p><em>（题图：MJ/abf9daf2-b72f-4929-8dd8-b77fb5b9d39b）</em></p><hr>`,31)),n("p",null,[s[6]||(s[6]=a("via: ",-1)),e(p,{href:"https://opensource.com/article/23/4/web-safe-color-guide-bash"},{default:l(()=>[...s[5]||(s[5]=[a("https://opensource.com/article/23/4/web-safe-color-guide-bash",-1)])]),_:1})]),n("p",null,[s[11]||(s[11]=a("作者：",-1)),e(p,{href:"https://opensource.com/users/jim-hall"},{default:l(()=>[...s[7]||(s[7]=[a("Jim Hall",-1)])]),_:1}),s[12]||(s[12]=a(" 选题：",-1)),e(p,{href:"https://github.com/lkxed/"},{default:l(()=>[...s[8]||(s[8]=[a("lkxed",-1)])]),_:1}),s[13]||(s[13]=a(" 译者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:l(()=>[...s[9]||(s[9]=[a("geekpi",-1)])]),_:1}),s[14]||(s[14]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[17]||(s[17]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[15]||(s[15]=[a("LCTT",-1)])]),_:1}),s[18]||(s[18]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[16]||(s[16]=[a("Linux中国",-1)])]),_:1}),s[19]||(s[19]=a(" 荣誉推出",-1))])])}const v=i(c,[["render",h]]);export{y as __pageData,v as default};
