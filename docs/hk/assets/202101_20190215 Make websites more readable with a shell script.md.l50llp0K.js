import{_ as i,a0 as o,w as r,s as c,ao as t,I as a,a1 as l,A as e,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"利用 Shell 腳本讓網站更具可讀性 | LCTT x X-CMD","titleTemplate":false,"description":"利用 Shell 腳本讓網站更具可讀性 | LCTT (202101) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"利用 Shell 腳本讓網站更具可讀性 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"利用 Shell 腳本讓網站更具可讀性 | LCTT (202101) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202101/20190215 Make websites more readable with a shell script","title":"利用 Shell 腳本讓網站更具可讀性","tag":"202101","desc":""},"relativePath":"202101/20190215 Make websites more readable with a shell script.md","filePath":"[post].md"}'),d={name:"202101/20190215 Make websites more readable with a shell script.md"};function u(b,s,g,h,f,$){const p=o("Link");return r(),c("div",null,[s[34]||(s[34]=t('<h1 id="利用-shell-腳本讓網站更具可讀性" tabindex="-1">利用 Shell 腳本讓網站更具可讀性 <a class="header-anchor" href="#利用-shell-腳本讓網站更具可讀性" aria-label="Permalink to “利用 Shell 腳本讓網站更具可讀性”">​</a></h1><blockquote><p>測算網站的文本和背景之間的對比度，以確保站點易於閲讀。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202101/25/231152ce5ufhjtufxj1eeu.jpg" alt=""></p><p>如果希望人們發現你的網站實用，那麼他們需要能夠閲讀它。為文本選擇的顏色可能會影響網站的可讀性。不幸的是，網頁設計中的一種流行趨勢是在打印輸出文本時使用低對比度的顏色，就像在白色背景上的灰色文本。對於 Web 設計師來説，這也許看起來很酷，但對於許多閲讀它的人來説確實很困難。</p><p>W3C 提供了《<ruby>Web 內容可訪問性指南<rt>Web Content Accessibility Guidelines</rt></ruby>》，其中包括幫助 Web 設計人員選擇易於區分文本和背景色的指導。z這就是所謂的“<ruby>對比度<rt>contrast ratio</rt></ruby>”。 W3C 定義的對比度需要進行一些計算：給定兩種顏色，首先計算每種顏色的相對亮度，然後計算對比度。對比度在 1 到 21 的範圍內（通常寫為 1:1 到 21:1）。對比度越高，文本在背景下的突出程度就越高。例如，白色背景上的黑色文本非常醒目，對比度為 21:1。對比度為 1:1 的白色背景上的白色文本不可讀。</p>',5)),a("p",null,[l(p,{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast"},{default:e(()=>[...s[0]||(s[0]=[n("W3C 説，正文",-1)])]),_:1}),s[1]||(s[1]=n(" 的對比度至少應為 4.5:1，標題至少應為 3:1。但這似乎是最低限度的要求。W3C 還建議正文至少 7:1，標題至少 4.5:1。",-1))]),s[35]||(s[35]=a("p",null,"計算對比度可能比較麻煩，因此最好將其自動化。我已經用這個方便的 Bash 腳本做到了這一點。通常，腳本執行以下操作：",-1)),s[36]||(s[36]=a("ol",null,[a("li",null,"獲取文本顏色和背景顏色"),a("li",null,"計算相對亮度"),a("li",null,"計算對比度")],-1)),s[37]||(s[37]=a("h3",{id:"獲取顏色",tabindex:"-1"},[n("獲取顏色 "),a("a",{class:"header-anchor",href:"#獲取顏色","aria-label":"Permalink to “獲取顏色”"},"​")],-1)),s[38]||(s[38]=a("p",null,"你可能知道顯示器上的每種顏色都可以用紅色、綠色和藍色（R、G 和 B）來表示。要計算顏色的相對亮度，腳本需要知道顏色的紅、綠和藍的各個分量。理想情況下，腳本會將這些信息讀取為單獨的 R、G 和 B 值。 Web 設計人員可能知道他們喜歡的顏色的特定 RGB 代碼，但是大多數人不知道不同顏色的 RGB 值。作為一種替代的方法是，大多數人通過 “red” 或 “gold” 或 “maroon” 之類的名稱來引用顏色。",-1)),a("p",null,[s[3]||(s[3]=n("幸運的是，GNOME 的 ",-1)),l(p,{href:"https://wiki.gnome.org/Projects/Zenity"},{default:e(()=>[...s[2]||(s[2]=[n("Zenity",-1)])]),_:1}),s[4]||(s[4]=n(" 工具有一個顏色選擇器應用程序，可讓你使用不同的方法選擇顏色，然後用可預測的格式 ",-1)),s[5]||(s[5]=a("code",null,"rgb(R,G,B)",-1)),s[6]||(s[6]=n(" 返回 RGB 值。使用 Zenity 可以輕鬆獲得顏色值：",-1))]),s[39]||(s[39]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>color=$( zenity --title &#39;Set text color&#39; --color-selection --color=&#39;black&#39; )</span></span></code></pre></div><p>如果用户（意外地）單擊 “Cancel（取消）” 按鈕，腳本將假定一種顏色：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if [ $? -ne 0 ] ; then</span></span>
<span class="line"><span>        echo &#39;** color canceled .. assume black&#39;</span></span>
<span class="line"><span>        color=&#39;rgb(0,0,0)&#39;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>腳本對背景顏色值也執行了類似的操作，將其設置為 <code>$background</code>。</p><h3 id="計算相對亮度" tabindex="-1">計算相對亮度 <a class="header-anchor" href="#計算相對亮度" aria-label="Permalink to “計算相對亮度”">​</a></h3>`,5)),a("p",null,[s[8]||(s[8]=n("一旦你在 ",-1)),s[9]||(s[9]=a("code",null,"$color",-1)),s[10]||(s[10]=n(" 中設置了前景色，並在 ",-1)),s[11]||(s[11]=a("code",null,"$background",-1)),s[12]||(s[12]=n(" 中設置了背景色，下一步就是計算每種顏色的相對亮度。 ",-1)),l(p,{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef"},{default:e(()=>[...s[7]||(s[7]=[n("W3C 提供了一個算法",-1)])]),_:1}),s[13]||(s[13]=n(" 用以計算顏色的相對亮度。",-1))]),s[40]||(s[40]=t(`<blockquote><p>對於 sRGB 色彩空間，一種顏色的相對亮度定義為：</p><p>L = 0.2126 * R + 0.7152 * G + 0.0722 * B</p><p>R、G 和 B 定義為：</p><p>if $R_{sRGB}$ &lt;= 0.03928 then R = $R_{sRGB}$/12.92</p><p>else R = (($R_{sRGB}$+0.055)/1.055) $^{2.4}$</p><p>if $G_{sRGB}$ &lt;= 0.03928 then G = $G_{sRGB}$/12.92</p><p>else G = (($G_{sRGB}$+0.055)/1.055) $^{2.4}$</p><p>if $B_{sRGB}$ &lt;= 0.03928 then B = $B_{sRGB}$/12.92</p><p>else B = (($B_{sRGB}$+0.055)/1.055) $^{2.4}$</p><p>$R_{sRGB}$、$G_{sRGB}$ 和 $B_{sRGB}$ 定義為：</p><p>$R_{sRGB}$ = $R_{8bit}$/255</p><p>$G_{sRGB}$ = $G_{8bit}$/255</p><p>$B_{sRGB}$ = $B_{8bit}$/255</p></blockquote><p>由於 Zenity 以 <code>rgb(R,G,B)</code> 的格式返回顏色值，因此腳本可以輕鬆拉取分隔開的 R、B 和 G 的值以計算相對亮度。AWK 可以使用逗號作為字段分隔符（<code>-F,</code>），並使用 <code>substr()</code> 字符串函數從 <code>rgb(R,G,B)</code> 中提取所要的顏色值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>R=$( echo $color | awk -F, &#39;{print substr($1,5)}&#39; )</span></span>
<span class="line"><span>G=$( echo $color | awk -F, &#39;{print $2}&#39; )</span></span>
<span class="line"><span>B=$( echo $color | awk -F, &#39;{n=length($3); print substr($3,1,n-1)}&#39; )</span></span></code></pre></div>`,3)),a("p",null,[a("em",null,[s[15]||(s[15]=n("有關使用 AWK 提取和顯示數據的更多信息，",-1)),l(p,{href:"https://opensource.com/article/18/7/cheat-sheet-awk"},{default:e(()=>[...s[14]||(s[14]=[n("查看 AWK 備忘表",-1)])]),_:1})])]),s[41]||(s[41]=t(`<p>最好使用 BC 計算器來計算最終的相對亮度。BC 支持計算中所需的簡單 <code>if-then-else</code>，這使得這一過程變得簡單。但是由於 BC 無法使用非整數指數直接計算乘冪，因此需要使用自然對數替代它做一些額外的數學運算：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;scale=4</span></span>
<span class="line"><span>rsrgb=$R/255</span></span>
<span class="line"><span>gsrgb=$G/255</span></span>
<span class="line"><span>bsrgb=$B/255</span></span>
<span class="line"><span>if ( rsrgb &lt;= 0.03928 ) r = rsrgb/12.92 else r = e( 2.4 * l((rsrgb+0.055)/1.055) )</span></span>
<span class="line"><span>if ( gsrgb &lt;= 0.03928 ) g = gsrgb/12.92 else g = e( 2.4 * l((gsrgb+0.055)/1.055) )</span></span>
<span class="line"><span>if ( bsrgb &lt;= 0.03928 ) b = bsrgb/12.92 else b = e( 2.4 * l((bsrgb+0.055)/1.055) )</span></span>
<span class="line"><span>0.2126 * r + 0.7152 * g + 0.0722 * b&quot; | bc -l</span></span></code></pre></div><p>這會將一些指令傳遞給 BC，包括作為相對亮度公式一部分的 <code>if-then-else</code> 語句。接下來 BC 打印出最終值。</p><h3 id="計算對比度" tabindex="-1">計算對比度 <a class="header-anchor" href="#計算對比度" aria-label="Permalink to “計算對比度”">​</a></h3>`,4)),a("p",null,[s[17]||(s[17]=n("利用文本顏色和背景顏色的相對亮度，腳本就可以計算對比度了。 ",-1)),l(p,{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef"},{default:e(()=>[...s[16]||(s[16]=[n("W3C 確定對比度",-1)])]),_:1}),s[18]||(s[18]=n(" 是使用以下公式：",-1))]),s[42]||(s[42]=t(`<blockquote><p>(L1 + 0.05) / (L2 + 0.05)，這裏的 L1 是顏色較淺的相對亮度， L2 是顏色較深的相對亮度。</p></blockquote><p>給定兩個相對亮度值 <code>$r1</code> 和 <code>$r2</code>，使用 BC 計算器很容易計算對比度：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;scale=2</span></span>
<span class="line"><span>if ( $r1 &gt; $r2 ) { l1=$r1; l2=$r2 } else { l1=$r2; l2=$r1 }</span></span>
<span class="line"><span>(l1 + 0.05) / (l2 + 0.05)&quot; | bc</span></span></code></pre></div><p>使用 <code>if-then-else</code> 語句確定哪個值（<code>$r1</code> 或 <code>$r2</code>）是較淺還是較深的顏色。BC 執行結果計算並打印結果，腳本可以將其存儲在變量中。</p><h3 id="最終腳本" tabindex="-1">最終腳本 <a class="header-anchor" href="#最終腳本" aria-label="Permalink to “最終腳本”">​</a></h3><p>通過以上內容，我們可以將所有內容整合到一個最終腳本。 我使用 Zenity 在文本框中顯示最終結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/sh</span></span>
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
<span class="line"><span>W3C 説明：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.4.3 對比度（最小值）：文本和文本圖像的視覺呈現方式的對比度至少為 4.5：1，但以下情況除外：（AA 級）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    大文本：大文本和大文本圖像的對比度至少為 3:1；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    附帶説明：作為非活動用户界面組件一部分，純裝飾的，任何人都不可見或圖片的一部分包含特定的其他可視內容的文本或文本圖像沒有對比度要求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    小示意圖：徽標或商標名稱中的文本沒有最低對比度要求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.4.6 對比度（增強）：文本和文本圖像的視覺表示具有至少 7:1 的對比度，但以下情況除外：（AAA 級）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    大文本：大文本和大文本圖像的對比度至少為 4.5:1；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    附帶説明：作為非活動用户界面組件一部分，純裝飾的，任何人都不可見或圖片的一部分包含特定的其他可視內容的文本或文本圖像沒有對比度要求。</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    小示意圖：徽標或商標名稱中的文本沒有最低對比度要求。</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>) | zenity --text-info --title=&#39;Relative Luminance&#39; --width=800 --height=600</span></span></code></pre></div><p>最後，我希望提供有關 W3C 建議的參考信息，以提醒自己。</p><p>Zenity 顏色選擇器完成了所有解釋顏色的艱苦工作，用户可以通過單擊色輪或輸入值來選擇顏色。 Zenity 接受網站上使用的標準十六進制顏色值，例如 <code>＃000000</code> 或 <code>＃000</code>或 <code>rgb(0,0,0)</code>（所有這些均為黑色）。這是白色背景上的黑色文本的示例計算：</p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot1-a.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot1-b.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/relativeluminescence1-result.png" alt=""></p><p>Zenity 還識別標準的顏色名稱，如“cadetblue”、“orange”或“gold”。在Zenity 中輸入顏色名稱，然後點擊 <code>Tab</code> 鍵，Zenity 會將顏色名稱轉換為十六進制顏色值，如以下示例中對金色背景上的黑色文本的計算：</p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot2-a-name.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot2-a-value.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot2-b-name.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/zenity_screenshot2-b-value.png" alt=""></p><p><img src="https://opensource.com/sites/default/files/uploads/relativeluminescence2-result.png" alt=""></p><hr>`,19)),a("p",null,[s[20]||(s[20]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/19/2/make-websites-more-readable-shell-script"},{default:e(()=>[...s[19]||(s[19]=[n("https://opensource.com/article/19/2/make-websites-more-readable-shell-script",-1)])]),_:1})]),a("p",null,[s[25]||(s[25]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/jim-hall"},{default:e(()=>[...s[21]||(s[21]=[n("Jim Hall",-1)])]),_:1}),s[26]||(s[26]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[22]||(s[22]=[n("lujun9972",-1)])]),_:1}),s[27]||(s[27]=n(" 譯者：",-1)),l(p,{href:"https://github.com/stevenzdg988"},{default:e(()=>[...s[23]||(s[23]=[n("stevenzdg988",-1)])]),_:1}),s[28]||(s[28]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[24]||(s[24]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[31]||(s[31]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[29]||(s[29]=[n("LCTT",-1)])]),_:1}),s[32]||(s[32]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[30]||(s[30]=[n("Linux中國",-1)])]),_:1}),s[33]||(s[33]=n(" 榮譽推出",-1))])])}const R=i(d,[["render",u]]);export{C as __pageData,R as default};
