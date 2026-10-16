import{_ as i,a0 as o,w as r,s as c,ao as t,I as a,a1 as l,A as e,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"利用 Shell 脚本让网站更具可读性 | LCTT x X-CMD","titleTemplate":false,"description":"利用 Shell 脚本让网站更具可读性 | LCTT (202101) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"利用 Shell 脚本让网站更具可读性 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"利用 Shell 脚本让网站更具可读性 | LCTT (202101) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202101/20190215 Make websites more readable with a shell script","title":"利用 Shell 脚本让网站更具可读性","tag":"202101","desc":""},"relativePath":"202101/20190215 Make websites more readable with a shell script.md","filePath":"[post].md"}'),d={name:"202101/20190215 Make websites more readable with a shell script.md"};function u(b,s,g,h,f,$){const p=o("Link");return r(),c("div",null,[s[34]||(s[34]=t('<h1 id="利用-shell-脚本让网站更具可读性" tabindex="-1">利用 Shell 脚本让网站更具可读性 <a class="header-anchor" href="#利用-shell-脚本让网站更具可读性" aria-label="Permalink to “利用 Shell 脚本让网站更具可读性”">​</a></h1><blockquote><p>测算网站的文本和背景之间的对比度，以确保站点易于阅读。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202101/25/231152ce5ufhjtufxj1eeu.jpg" alt=""></p><p>如果希望人们发现你的网站实用，那么他们需要能够阅读它。为文本选择的颜色可能会影响网站的可读性。不幸的是，网页设计中的一种流行趋势是在打印输出文本时使用低对比度的颜色，就像在白色背景上的灰色文本。对于 Web 设计师来说，这也许看起来很酷，但对于许多阅读它的人来说确实很困难。</p><p>W3C 提供了《<ruby>Web 内容可访问性指南<rt>Web Content Accessibility Guidelines</rt></ruby>》，其中包括帮助 Web 设计人员选择易于区分文本和背景色的指导。z这就是所谓的“<ruby>对比度<rt>contrast ratio</rt></ruby>”。 W3C 定义的对比度需要进行一些计算：给定两种颜色，首先计算每种颜色的相对亮度，然后计算对比度。对比度在 1 到 21 的范围内（通常写为 1:1 到 21:1）。对比度越高，文本在背景下的突出程度就越高。例如，白色背景上的黑色文本非常醒目，对比度为 21:1。对比度为 1:1 的白色背景上的白色文本不可读。</p>',5)),a("p",null,[l(p,{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast"},{default:e(()=>[...s[0]||(s[0]=[n("W3C 说，正文",-1)])]),_:1}),s[1]||(s[1]=n(" 的对比度至少应为 4.5:1，标题至少应为 3:1。但这似乎是最低限度的要求。W3C 还建议正文至少 7:1，标题至少 4.5:1。",-1))]),s[35]||(s[35]=a("p",null,"计算对比度可能比较麻烦，因此最好将其自动化。我已经用这个方便的 Bash 脚本做到了这一点。通常，脚本执行以下操作：",-1)),s[36]||(s[36]=a("ol",null,[a("li",null,"获取文本颜色和背景颜色"),a("li",null,"计算相对亮度"),a("li",null,"计算对比度")],-1)),s[37]||(s[37]=a("h3",{id:"获取颜色",tabindex:"-1"},[n("获取颜色 "),a("a",{class:"header-anchor",href:"#获取颜色","aria-label":"Permalink to “获取颜色”"},"​")],-1)),s[38]||(s[38]=a("p",null,"你可能知道显示器上的每种颜色都可以用红色、绿色和蓝色（R、G 和 B）来表示。要计算颜色的相对亮度，脚本需要知道颜色的红、绿和蓝的各个分量。理想情况下，脚本会将这些信息读取为单独的 R、G 和 B 值。 Web 设计人员可能知道他们喜欢的颜色的特定 RGB 代码，但是大多数人不知道不同颜色的 RGB 值。作为一种替代的方法是，大多数人通过 “red” 或 “gold” 或 “maroon” 之类的名称来引用颜色。",-1)),a("p",null,[s[3]||(s[3]=n("幸运的是，GNOME 的 ",-1)),l(p,{href:"https://wiki.gnome.org/Projects/Zenity"},{default:e(()=>[...s[2]||(s[2]=[n("Zenity",-1)])]),_:1}),s[4]||(s[4]=n(" 工具有一个颜色选择器应用程序，可让你使用不同的方法选择颜色，然后用可预测的格式 ",-1)),s[5]||(s[5]=a("code",null,"rgb(R,G,B)",-1)),s[6]||(s[6]=n(" 返回 RGB 值。使用 Zenity 可以轻松获得颜色值：",-1))]),s[39]||(s[39]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>color=$( zenity --title &#39;Set text color&#39; --color-selection --color=&#39;black&#39; )</span></span></code></pre></div><p>如果用户（意外地）单击 “Cancel（取消）” 按钮，脚本将假定一种颜色：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if [ $? -ne 0 ] ; then</span></span>
<span class="line"><span>        echo &#39;** color canceled .. assume black&#39;</span></span>
<span class="line"><span>        color=&#39;rgb(0,0,0)&#39;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>脚本对背景颜色值也执行了类似的操作，将其设置为 <code>$background</code>。</p><h3 id="计算相对亮度" tabindex="-1">计算相对亮度 <a class="header-anchor" href="#计算相对亮度" aria-label="Permalink to “计算相对亮度”">​</a></h3>`,5)),a("p",null,[s[8]||(s[8]=n("一旦你在 ",-1)),s[9]||(s[9]=a("code",null,"$color",-1)),s[10]||(s[10]=n(" 中设置了前景色，并在 ",-1)),s[11]||(s[11]=a("code",null,"$background",-1)),s[12]||(s[12]=n(" 中设置了背景色，下一步就是计算每种颜色的相对亮度。 ",-1)),l(p,{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef"},{default:e(()=>[...s[7]||(s[7]=[n("W3C 提供了一个算法",-1)])]),_:1}),s[13]||(s[13]=n(" 用以计算颜色的相对亮度。",-1))]),s[40]||(s[40]=t(`<blockquote><p>对于 sRGB 色彩空间，一种颜色的相对亮度定义为：</p><p>L = 0.2126 * R + 0.7152 * G + 0.0722 * B</p><p>R、G 和 B 定义为：</p><p>if $R_{sRGB}$ &lt;= 0.03928 then R = $R_{sRGB}$/12.92</p><p>else R = (($R_{sRGB}$+0.055)/1.055) $^{2.4}$</p><p>if $G_{sRGB}$ &lt;= 0.03928 then G = $G_{sRGB}$/12.92</p><p>else G = (($G_{sRGB}$+0.055)/1.055) $^{2.4}$</p><p>if $B_{sRGB}$ &lt;= 0.03928 then B = $B_{sRGB}$/12.92</p><p>else B = (($B_{sRGB}$+0.055)/1.055) $^{2.4}$</p><p>$R_{sRGB}$、$G_{sRGB}$ 和 $B_{sRGB}$ 定义为：</p><p>$R_{sRGB}$ = $R_{8bit}$/255</p><p>$G_{sRGB}$ = $G_{8bit}$/255</p><p>$B_{sRGB}$ = $B_{8bit}$/255</p></blockquote><p>由于 Zenity 以 <code>rgb(R,G,B)</code> 的格式返回颜色值，因此脚本可以轻松拉取分隔开的 R、B 和 G 的值以计算相对亮度。AWK 可以使用逗号作为字段分隔符（<code>-F,</code>），并使用 <code>substr()</code> 字符串函数从 <code>rgb(R,G,B)</code> 中提取所要的颜色值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>R=$( echo $color | awk -F, &#39;{print substr($1,5)}&#39; )</span></span>
<span class="line"><span>G=$( echo $color | awk -F, &#39;{print $2}&#39; )</span></span>
<span class="line"><span>B=$( echo $color | awk -F, &#39;{n=length($3); print substr($3,1,n-1)}&#39; )</span></span></code></pre></div>`,3)),a("p",null,[a("em",null,[s[15]||(s[15]=n("有关使用 AWK 提取和显示数据的更多信息，",-1)),l(p,{href:"https://opensource.com/article/18/7/cheat-sheet-awk"},{default:e(()=>[...s[14]||(s[14]=[n("查看 AWK 备忘表",-1)])]),_:1})])]),s[41]||(s[41]=t(`<p>最好使用 BC 计算器来计算最终的相对亮度。BC 支持计算中所需的简单 <code>if-then-else</code>，这使得这一过程变得简单。但是由于 BC 无法使用非整数指数直接计算乘幂，因此需要使用自然对数替代它做一些额外的数学运算：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;scale=4</span></span>
<span class="line"><span>rsrgb=$R/255</span></span>
<span class="line"><span>gsrgb=$G/255</span></span>
<span class="line"><span>bsrgb=$B/255</span></span>
<span class="line"><span>if ( rsrgb &lt;= 0.03928 ) r = rsrgb/12.92 else r = e( 2.4 * l((rsrgb+0.055)/1.055) )</span></span>
<span class="line"><span>if ( gsrgb &lt;= 0.03928 ) g = gsrgb/12.92 else g = e( 2.4 * l((gsrgb+0.055)/1.055) )</span></span>
<span class="line"><span>if ( bsrgb &lt;= 0.03928 ) b = bsrgb/12.92 else b = e( 2.4 * l((bsrgb+0.055)/1.055) )</span></span>
<span class="line"><span>0.2126 * r + 0.7152 * g + 0.0722 * b&quot; | bc -l</span></span></code></pre></div><p>这会将一些指令传递给 BC，包括作为相对亮度公式一部分的 <code>if-then-else</code> 语句。接下来 BC 打印出最终值。</p><h3 id="计算对比度" tabindex="-1">计算对比度 <a class="header-anchor" href="#计算对比度" aria-label="Permalink to “计算对比度”">​</a></h3>`,4)),a("p",null,[s[17]||(s[17]=n("利用文本颜色和背景颜色的相对亮度，脚本就可以计算对比度了。 ",-1)),l(p,{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef"},{default:e(()=>[...s[16]||(s[16]=[n("W3C 确定对比度",-1)])]),_:1}),s[18]||(s[18]=n(" 是使用以下公式：",-1))]),s[42]||(s[42]=t(`<blockquote><p>(L1 + 0.05) / (L2 + 0.05)，这里的 L1 是颜色较浅的相对亮度， L2 是颜色较深的相对亮度。</p></blockquote><p>给定两个相对亮度值 <code>$r1</code> 和 <code>$r2</code>，使用 BC 计算器很容易计算对比度：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;scale=2</span></span>
<span class="line"><span>if ( $r1 &gt; $r2 ) { l1=$r1; l2=$r2 } else { l1=$r2; l2=$r1 }</span></span>
<span class="line"><span>(l1 + 0.05) / (l2 + 0.05)&quot; | bc</span></span></code></pre></div><p>使用 <code>if-then-else</code> 语句确定哪个值（<code>$r1</code> 或 <code>$r2</code>）是较浅还是较深的颜色。BC 执行结果计算并打印结果，脚本可以将其存储在变量中。</p><h3 id="最终脚本" tabindex="-1">最终脚本 <a class="header-anchor" href="#最终脚本" aria-label="Permalink to “最终脚本”">​</a></h3><p>通过以上内容，我们可以将所有内容整合到一个最终脚本。 我使用 Zenity 在文本框中显示最终结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span># script to calculate contrast ratio of colors</span></span>
<span class="line"><span></span></span>
<span class="line"><span># read color and background color:</span></span>
<span class="line"><span># zenity returns values like &#39;rgb(255,140,0)&#39; and &#39;rgb(255,255,255)&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>color=$( zenity --title &#39;Set text color&#39; --color-selection --color=&#39;black&#39; )</span></span>
<span class="line"><span>if [ $? -ne 0 ] ; then</span></span>
<span class="line"><span>        echo &#39;** color canceled .. assume black&#39;</span></span>
<span class="line"><span>        color=&#39;rgb(0,0,0)&#39;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>background=$( zenity --title &#39;Set background color&#39; --color-selection --color=&#39;white&#39; )</span></span>
<span class="line"><span>if [ $? -ne 0 ] ; then</span></span>
<span class="line"><span>        echo &#39;** background canceled .. assume white&#39;</span></span>
<span class="line"><span>        background=&#39;rgb(255,255,255)&#39;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># compute relative luminance:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function luminance()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>        R=$( echo $1 | awk -F, &#39;{print substr($1,5)}&#39; )</span></span>
<span class="line"><span>        G=$( echo $1 | awk -F, &#39;{print $2}&#39; )</span></span>
<span class="line"><span>        B=$( echo $1 | awk -F, &#39;{n=length($3); print substr($3,1,n-1)}&#39; )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        echo &quot;scale=4</span></span>
<span class="line"><span>rsrgb=$R/255</span></span>
<span class="line"><span>gsrgb=$G/255</span></span>
<span class="line"><span>bsrgb=$B/255</span></span>
<span class="line"><span>if ( rsrgb &lt;= 0.03928 ) r = rsrgb/12.92 else r = e( 2.4 * l((rsrgb+0.055)/1.055) )</span></span>
<span class="line"><span>if ( gsrgb &lt;= 0.03928 ) g = gsrgb/12.92 else g = e( 2.4 * l((gsrgb+0.055)/1.055) )</span></span>
<span class="line"><span>if ( bsrgb &lt;= 0.03928 ) b = bsrgb/12.92 else b = e( 2.4 * l((bsrgb+0.055)/1.055) )</span></span>
<span class="line"><span>0.2126 * r + 0.7152 * g + 0.0722 * b&quot; | bc -l</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lum1=$( luminance $color )</span></span>
<span class="line"><span>lum2=$( luminance $background )</span></span>
<span class="line"><span></span></span>
<span class="line"><span># compute contrast</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function contrast()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>        echo &quot;scale=2</span></span>
<span class="line"><span>if ( $1 &gt; $2 ) { l1=$1; l2=$2 } else { l1=$2; l2=$1 }</span></span>
<span class="line"><span>(l1 + 0.05) / (l2 + 0.05)&quot; | bc</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rel=$( contrast $lum1 $lum2 )</span></span>
<span class="line"><span></span></span>
<span class="line"><span># print results</span></span>
<span class="line"><span></span></span>
<span class="line"><span>( cat&lt;&lt;EOF</span></span>
<span class="line"><span>Color is $color on $background</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Contrast ratio is $rel</span></span>
<span class="line"><span>Contrast ratios can range from 1 to 21 (commonly written 1:1 to 21:1).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ \${rel%.*} -ge 4 ] ; then</span></span>
<span class="line"><span>        echo &quot;Ok for body text&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>        echo &quot;Not good for body text&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>if [ \${rel%.*} -ge 3 ] ; then</span></span>
<span class="line"><span>        echo &quot;Ok for title text&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>        echo &quot;Not good for title text&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat&lt;&lt;EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>W3C 说明：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.4.3 对比度（最小值）：文本和文本图像的视觉呈现方式的对比度至少为 4.5：1，但以下情况除外：（AA 级）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    大文本：大文本和大文本图像的对比度至少为 3:1；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    附带说明：作为非活动用户界面组件一部分，纯装饰的，任何人都不可见或图片的一部分包含特定的其他可视内容的文本或文本图像没有对比度要求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    小示意图：徽标或商标名称中的文本没有最低对比度要求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.4.6 对比度（增强）：文本和文本图像的视觉表示具有至少 7:1 的对比度，但以下情况除外：（AAA 级）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    大文本：大文本和大文本图像的对比度至少为 4.5:1；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    附带说明：作为非活动用户界面组件一部分，纯装饰的，任何人都不可见或图片的一部分包含特定的其他可视内容的文本或文本图像没有对比度要求。</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    小示意图：徽标或商标名称中的文本没有最低对比度要求。</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>) | zenity --text-info --title=&#39;Relative Luminance&#39; --width=800 --height=600</span></span></code></pre></div><p>最后，我希望提供有关 W3C 建议的参考信息，以提醒自己。</p><p>Zenity 颜色选择器完成了所有解释颜色的艰苦工作，用户可以通过单击色轮或输入值来选择颜色。 Zenity 接受网站上使用的标准十六进制颜色值，例如 <code>＃000000</code> 或 <code>＃000</code>或 <code>rgb(0,0,0)</code>（所有这些均为黑色）。这是白色背景上的黑色文本的示例计算：</p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot1-a.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot1-b.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/relativeluminescence1-result.png" alt=""></p><p>Zenity 还识别标准的颜色名称，如“cadetblue”、“orange”或“gold”。在Zenity 中输入颜色名称，然后点击 <code>Tab</code> 键，Zenity 会将颜色名称转换为十六进制颜色值，如以下示例中对金色背景上的黑色文本的计算：</p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot2-a-name.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot2-a-value.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot2-b-name.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot2-b-value.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/relativeluminescence2-result.png" alt=""></p><hr>`,19)),a("p",null,[s[20]||(s[20]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/19/2/make-websites-more-readable-shell-script"},{default:e(()=>[...s[19]||(s[19]=[n("https://opensource.com/article/19/2/make-websites-more-readable-shell-script",-1)])]),_:1})]),a("p",null,[s[25]||(s[25]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/jim-hall"},{default:e(()=>[...s[21]||(s[21]=[n("Jim Hall",-1)])]),_:1}),s[26]||(s[26]=n(" 选题：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[22]||(s[22]=[n("lujun9972",-1)])]),_:1}),s[27]||(s[27]=n(" 译者：",-1)),l(p,{href:"https://github.com/stevenzdg988"},{default:e(()=>[...s[23]||(s[23]=[n("stevenzdg988",-1)])]),_:1}),s[28]||(s[28]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[24]||(s[24]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[31]||(s[31]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[29]||(s[29]=[n("LCTT",-1)])]),_:1}),s[32]||(s[32]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[30]||(s[30]=[n("Linux中国",-1)])]),_:1}),s[33]||(s[33]=n(" 荣誉推出",-1))])])}const R=i(d,[["render",u]]);export{C as __pageData,R as default};
