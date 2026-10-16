import{_ as e,a0 as t,w as h,s as r,I as i,x as a,a1 as p,A as l,ao as k}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"計算機實驗室之樹莓派：課程 7 屏幕02 | LCTT x X-CMD","titleTemplate":false,"description":"計算機實驗室之樹莓派：課程 7 屏幕02 | LCTT (201902) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"計算機實驗室之樹莓派：課程 7 屏幕02 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"計算機實驗室之樹莓派：課程 7 屏幕02 | LCTT (201902) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201902/20150616 Computer Laboratory - Raspberry Pi- Lesson 7 Screen02","title":"計算機實驗室之樹莓派：課程 7 屏幕02","tag":"201902","desc":""},"relativePath":"201902/20150616 Computer Laboratory - Raspberry Pi- Lesson 7 Screen02.md","filePath":"[post].md"}'),d={name:"201902/20150616 Computer Laboratory - Raspberry Pi- Lesson 7 Screen02.md"};function o(c,s,E,g,y,F){const n=t("Link");return h(),r("div",null,[s[23]||(s[23]=i("h1",{id:"計算機實驗室之樹莓派-課程-7-屏幕02",tabindex:"-1"},[a("計算機實驗室之樹莓派：課程 7 屏幕02 "),i("a",{class:"header-anchor",href:"#計算機實驗室之樹莓派-課程-7-屏幕02","aria-label":"Permalink to “計算機實驗室之樹莓派：課程 7 屏幕02”"},"​")],-1)),i("p",null,[s[1]||(s[1]=a("屏幕02 課程在屏幕01 的基礎上構建，它教你如何繪製線和一個生成偽隨機數的小特性。假設你已經有了 ",-1)),p(n,{href:"https://linux.cn/article-10540-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("課程 6：屏幕01",-1)])]),_:1}),s[2]||(s[2]=a(" 的操作系統代碼，我們將以它為基礎來構建。",-1))]),s[24]||(s[24]=k(`<h3 id="_1、點" tabindex="-1">1、點 <a class="header-anchor" href="#_1、點" aria-label="Permalink to “1、點”">​</a></h3><p>現在，我們的屏幕已經正常工作了，現在開始去創建一個更實用的圖像，是水到渠成的事。如果我們能夠繪製出更實用的圖形那就更好了。如果我們能夠在屏幕上的兩點之間繪製一條線，那我們就能夠組合這些線繪製出更復雜的圖形了。</p><p>我們將嘗試用匯編代碼去實現它，但在開始時，我們確實需要使用一些其它的函數去輔助。我們需要一個這樣的函數，我將調用 <code>SetPixel</code> 去修改指定像素的顏色，而在寄存器 <code>r0</code> 和 <code>r1</code> 中提供輸入。如果我們寫出的代碼可以在任意內存中而不僅僅是屏幕上繪製圖形，這將在以後非常有用，因此，我們首先需要一些控制真實繪製位置的方法。我認為實現上述目標的最好方法是，能夠有一個內存片段用於保存將要繪製的圖形。我應該最終得到的是一個存儲地址，它通常指向到自上次的幀緩存結構上。我們將一直在我們的代碼中使用這個繪製方法。這樣，如果我們想在我們的操作系統的另一部分繪製一個不同的圖像，我們就可以生成一個不同結構的地址值，而使用的是完全相同的代碼。為簡單起見，我們將使用另一個數據片段去控制我們繪製的顏色。</p><blockquote><p>為了繪製出更復雜的圖形，一些方法使用一個着色函數而不是一個顏色去繪製。每個點都能夠調用着色函數來確定在那裏用什麼顏色去繪製。</p></blockquote><p>複製下列代碼到一個名為 <code>drawing.s</code> 的新文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.section .data</span></span>
<span class="line"><span>.align 1</span></span>
<span class="line"><span>foreColour:</span></span>
<span class="line"><span>.hword 0xFFFF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.align 2</span></span>
<span class="line"><span>graphicsAddress:</span></span>
<span class="line"><span>.int 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.section .text</span></span>
<span class="line"><span>.globl SetForeColour</span></span>
<span class="line"><span>SetForeColour:</span></span>
<span class="line"><span>cmp r0,#0x10000</span></span>
<span class="line"><span>movhs pc,lr</span></span>
<span class="line"><span>ldr r1,=foreColour</span></span>
<span class="line"><span>strh r0,[r1]</span></span>
<span class="line"><span>mov pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.globl SetGraphicsAddress</span></span>
<span class="line"><span>SetGraphicsAddress:</span></span>
<span class="line"><span>ldr r1,=graphicsAddress</span></span>
<span class="line"><span>str r0,[r1]</span></span>
<span class="line"><span>mov pc,lr</span></span></code></pre></div><p>這段代碼就是我上面所説的一對函數以及它們的數據。我們將在 <code>main.s</code> 中使用它們，在繪製圖像之前去控制在何處繪製什麼內容。</p><p>我們的下一個任務是去實現一個 <code>SetPixel</code> 方法。它需要帶兩個參數，像素的 x 和 y 軸，並且它應該要使用 <code>graphicsAddress</code> 和 <code>foreColour</code>，我們只定義精確控制在哪裏繪製什麼圖像即可。如果你認為你能立即實現這些，那麼去動手實現吧，如果不能，按照我們提供的步驟，按示例去實現它。</p><blockquote><p>構建一個通用方法，比如 <code>SetPixel</code>，我們將在它之上構建另一個方法是一個很好的想法。但我們必須要確保這個方法很快，因為我們要經常使用它。</p></blockquote><ol><li>加載 <code>graphicsAddress</code>。</li><li>檢查像素的 x 和 y 軸是否小於寬度和高度。</li><li>計算要寫入的像素地址（提示：<code>frameBufferAddress +（x + y * 寬度）* 像素大小</code>）</li><li>加載 <code>foreColour</code>。</li><li>保存到地址。</li></ol><p>上述步驟實現如下：</p><p>1、加載 <code>graphicsAddress</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl DrawPixel</span></span>
<span class="line"><span>DrawPixel:</span></span>
<span class="line"><span>px .req r0</span></span>
<span class="line"><span>py .req r1</span></span>
<span class="line"><span>addr .req r2</span></span>
<span class="line"><span>ldr addr,=graphicsAddress</span></span>
<span class="line"><span>ldr addr,[addr]</span></span></code></pre></div><p>2、記住，寬度和高度被各自保存在幀緩衝偏移量的 0 和 4 處。如有必要可以參考 <code>frameBuffer.s</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>height .req r3</span></span>
<span class="line"><span>ldr height,[addr,#4]</span></span>
<span class="line"><span>sub height,#1</span></span>
<span class="line"><span>cmp py,height</span></span>
<span class="line"><span>movhi pc,lr</span></span>
<span class="line"><span>.unreq height</span></span>
<span class="line"><span></span></span>
<span class="line"><span>width .req r3</span></span>
<span class="line"><span>ldr width,[addr,#0]</span></span>
<span class="line"><span>sub width,#1</span></span>
<span class="line"><span>cmp px,width</span></span>
<span class="line"><span>movhi pc,lr</span></span></code></pre></div><p>3、確實，這段代碼是專用於高色值幀緩存的，因為我使用一個邏輯左移操作去計算地址。你可能希望去編寫一個不需要專用的高色值幀緩衝的函數版本，記得去更新 <code>SetForeColour</code> 的代碼。它實現起來可能更復雜一些。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ldr addr,[addr,#32]</span></span>
<span class="line"><span>add width,#1</span></span>
<span class="line"><span>mla px,py,width,px</span></span>
<span class="line"><span>.unreq width</span></span>
<span class="line"><span>.unreq py</span></span>
<span class="line"><span>add addr, px,lsl #1</span></span>
<span class="line"><span>.unreq px</span></span></code></pre></div><blockquote><p><code>mla dst,reg1,reg2,reg3</code> 將寄存器 <code>reg1</code> 和 <code>reg2</code> 中的值相乘，然後將結果與寄存器 <code>reg3</code> 中的值相加，並將結果的低 32 位保存到 <code>dst</code> 中。</p></blockquote><p>4、這是專用於高色值的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fore .req r3</span></span>
<span class="line"><span>ldr fore,=foreColour</span></span>
<span class="line"><span>ldrh fore,[fore]</span></span></code></pre></div><p>5、這是專用於高色值的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>strh fore,[addr]</span></span>
<span class="line"><span>.unreq fore</span></span>
<span class="line"><span>.unreq addr</span></span>
<span class="line"><span>mov pc,lr</span></span></code></pre></div><h3 id="_2、線" tabindex="-1">2、線 <a class="header-anchor" href="#_2、線" aria-label="Permalink to “2、線”">​</a></h3><p>問題是，線的繪製並不是你所想像的那麼簡單。到目前為止，你必須認識到，編寫一個操作系統時，幾乎所有的事情都必須我們自己去做，繪製線條也不例外。我建議你們花點時間想想如何在任意兩點之間繪製一條線。</p><p>我估計大多數的策略可能是去計算線的梯度，並沿着它來繪製。這看上去似乎很完美，但它事實上是個很糟糕的主意。主要問題是它涉及到除法，我們知道在彙編中，做除法很不容易，並且還要始終記錄小數，這也很困難。事實上，在這裏，有一個叫布魯塞姆的算法，它非常適合彙編代碼，因為它只使用加法、減法和位移運算。</p><blockquote><p>在我們日常編程中，我們對像除法這樣的運算通常懶得去優化。但是操作系統不同，它必須高效，因此我們要始終專注於如何讓事情做的儘可能更好。</p></blockquote><p>.</p><blockquote><p>我們從定義一個簡單的直線繪製算法開始，代碼如下：</p><div class="language-matlab"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/* 我們希望從 (x0,y0) 到 (x1,y1) 去繪製一條線，只使用一個函數 setPixel(x,y)，它的功能是在給定的 (x,y) 上繪製一個點。 */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x0 then</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deltax to x1 - x0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stepx to +1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">otherwise</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deltax to x0 - x1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stepx to -1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y0 then</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deltay to y1 - y0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stepy to +1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">otherwise</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deltay to y0 - y1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stepy to -1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> deltax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> deltay then</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">until</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x0 = x1 + stepx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">setPixel(x0, y0)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to error + deltax ÷ deltay</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> error ≥ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> y0 to y0 + stepy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to error - 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x0 to x0 + stepx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repeat</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">otherwise</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span></span></code></pre></div><p>這個算法用來表示你可能想像到的那些東西。變量 <code>error</code> 用來記錄你離實線的距離。沿着 x 軸每走一步，這個 <code>error</code> 的值都會增加，而沿着 y 軸每走一步，這個 <code>error</code> 值就會減 1 個單位。<code>error</code> 是用於測量距離 y 軸的距離。</p><p>雖然這個算法是有效的，但它存在一個重要的問題，很明顯，我們使用了小數去保存 <code>error</code>，並且也使用了除法。所以，一個立即要做的優化將是去改變 <code>error</code> 的單位。這裏並不需要用特定的單位去保存它，只要我們每次使用它時都按相同數量去伸縮即可。所以，我們可以重寫這個算法，通過在所有涉及 <code>error</code> 的等式上都簡單地乘以 <code>deltay</code>，從面讓它簡化。下面只展示主要的循環：</p><div class="language-matlab"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to 0 × deltay</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">until</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x0 = x1 + stepx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">setPixel(x0, y0)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to error + deltax ÷ deltay × deltay</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> error ≥ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> × deltay then</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> y0 to y0 + stepy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to error - 1 × deltay</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x0 to x0 + stepx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repeat</span></span></code></pre></div><p>它將簡化為：</p><div class="language-matlab"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">until</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x0 = x1 + stepx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">setPixel(x0, y0)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to error + deltax</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> error × </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ≥ deltay then</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> y0 to y0 + stepy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to error - deltay</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x0 to x0 + stepx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repeat</span></span></code></pre></div><p>突然，我們有了一個更好的算法。現在，我們看一下如何完全去除所需要的除法運算。最好保留唯一的被 2 相乘的乘法運算，我們知道它可以通過左移 1 位來實現！現在，這是非常接近布魯塞姆算法的，但還可以進一步優化它。現在，我們有一個 <code>if</code> 語句，它將導致產生兩個代碼塊，其中一個用於 x 差異較大的線，另一個用於 y 差異較大的線。對於這兩種類型的線，如果審查代碼能夠將它們轉換成一個單語句，還是很值得去做的。</p><p>困難之處在於，在第一種情況下，<code>error</code> 是與 y 一起變化，而第二種情況下 <code>error</code> 是與 x 一起變化。解決方案是在一個變量中同時記錄它們，使用負的 <code>error</code> 去表示 x 中的一個 <code>error</code>，而用正的 <code>error</code> 表示它是 y 中的。</p><div class="language-matlab"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to deltax - deltay</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">until</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x0 = x1 + stepx or y0 = y1 + stepy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">setPixel(x0, y0)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> error × </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -deltay then</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x0 to x0 + stepx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to error - deltay</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> error × </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> deltax then</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> y0 to y0 + stepy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to error + deltax</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repeat</span></span></code></pre></div><p>你可能需要一些時間來搞明白它。在每一步中，我們都認為它正確地在 x 和 y 中移動。我們通過檢查來做到這一點，如果我們在 x 或 y 軸上移動，<code>error</code> 的數量會變低，那麼我們就繼續這樣移動。</p></blockquote><p>.</p><blockquote><p>布魯塞姆算法是在 1962 年由 Jack Elton Bresenham 開發，當時他 24 歲，正在攻讀博士學位。</p></blockquote><p>用於畫線的布魯塞姆算法可以通過以下的偽代碼來描述。以下偽代碼是文本，它只是看起來有點像是計算機指令而已，但它卻能讓程序員實實在在地理解算法，而不是為機器可讀。</p><div class="language-matlab"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/* 我們希望從 (x0,y0) 到 (x1,y1) 去繪製一條線，只使用一個函數 setPixel(x,y)，它的功能是在給定的 (x,y) 上繪製一個點。 */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x0 then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deltax to x1 - x0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stepx to +1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">otherwise</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deltax to x0 - x1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stepx to -1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to deltax - deltay</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">until</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x0 = x1 + stepx or y0 = y1 + stepy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    setPixel(x0, y0)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> error × </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ≥ -deltay then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x0 to x0 + stepx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to error - deltay</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> error × </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ≤ deltax then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> y0 to y0 + stepy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error to error + deltax</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repeat</span></span></code></pre></div><p>與我們目前所使用的編號列表不同，這個算法的表示方式更常用。看看你能否自己實現它。我在下面提供了我的實現作為參考。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl DrawLine</span></span>
<span class="line"><span>DrawLine:</span></span>
<span class="line"><span>push {r4,r5,r6,r7,r8,r9,r10,r11,r12,lr}</span></span>
<span class="line"><span>x0 .req r9</span></span>
<span class="line"><span>x1 .req r10</span></span>
<span class="line"><span>y0 .req r11</span></span>
<span class="line"><span>y1 .req r12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mov x0,r0</span></span>
<span class="line"><span>mov x1,r2</span></span>
<span class="line"><span>mov y0,r1</span></span>
<span class="line"><span>mov y1,r3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dx .req r4</span></span>
<span class="line"><span>dyn .req r5  /* 注意，我們只使用 -deltay，因此為了速度，我保存它的負值。（因此命名為 dyn）*/</span></span>
<span class="line"><span>sx .req r6</span></span>
<span class="line"><span>sy .req r7</span></span>
<span class="line"><span>err .req r8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cmp x0,x1</span></span>
<span class="line"><span>subgt dx,x0,x1</span></span>
<span class="line"><span>movgt sx,#-1</span></span>
<span class="line"><span>suble dx,x1,x0</span></span>
<span class="line"><span>movle sx,#1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cmp y0,y1</span></span>
<span class="line"><span>subgt dyn,y1,y0</span></span>
<span class="line"><span>movgt sy,#-1</span></span>
<span class="line"><span>suble dyn,y0,y1</span></span>
<span class="line"><span>movle sy,#1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>add err,dx,dyn</span></span>
<span class="line"><span>add x1,sx</span></span>
<span class="line"><span>add y1,sy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pixelLoop$:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    teq x0,x1</span></span>
<span class="line"><span>    teqne y0,y1</span></span>
<span class="line"><span>    popeq {r4,r5,r6,r7,r8,r9,r10,r11,r12,pc}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    mov r0,x0</span></span>
<span class="line"><span>    mov r1,y0</span></span>
<span class="line"><span>    bl DrawPixel</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    cmp dyn, err,lsl #1</span></span>
<span class="line"><span>    addle err,dyn</span></span>
<span class="line"><span>    addle x0,sx</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    cmp dx, err,lsl #1</span></span>
<span class="line"><span>    addge err,dx</span></span>
<span class="line"><span>    addge y0,sy</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    b pixelLoop$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.unreq x0</span></span>
<span class="line"><span>.unreq x1</span></span>
<span class="line"><span>.unreq y0</span></span>
<span class="line"><span>.unreq y1</span></span>
<span class="line"><span>.unreq dx</span></span>
<span class="line"><span>.unreq dyn</span></span>
<span class="line"><span>.unreq sx</span></span>
<span class="line"><span>.unreq sy</span></span>
<span class="line"><span>.unreq err</span></span></code></pre></div><h3 id="_3、隨機性" tabindex="-1">3、隨機性 <a class="header-anchor" href="#_3、隨機性" aria-label="Permalink to “3、隨機性”">​</a></h3><p>到目前，我們可以繪製線條了。雖然我們可以使用它來繪製圖片及諸如此類的東西（你可以隨意去做！），我想應該藉此機會引入計算機中隨機性的概念。我將這樣去做，選擇一對隨機的座標，然後從上一對座標用漸變色繪製一條線到那個點。我這樣做純粹是認為它看起來很漂亮。</p><p>那麼，總結一下，我們如何才能產生隨機數呢？不幸的是，我們並沒有產生隨機數的一些設備（這種設備很罕見）。因此只能利用我們目前所學過的操作，需要我們以某種方式來發明“隨機數”。你很快就會意識到這是不可能的。各種操作總是給出定義好的結果，用相同的寄存器運行相同的指令序列總是給出相同的答案。而我們要做的是推導出一個偽隨機序列。這意味着數字在外人看來是隨機的，但實際上它是完全確定的。因此，我們需要一個生成隨機數的公式。其中有人可能會想到很垃圾的數學運算，比如：4x<sup>2</sup>! / 64，而事實上它產生的是一個低質量的隨機數。在這個示例中，如果 x 是 0，那麼答案將是 0。看起來很愚蠢，我們需要非常謹慎地選擇一個能夠產生高質量隨機數的方程式。</p><blockquote><p>硬件隨機數生成器很少用在安全中，因為可預測的隨機數序列可能影響某些加密的安全。</p></blockquote><p>我將要教給你的方法叫“二次同餘發生器”。這是一個非常好的選擇，因為它能夠在 5 個指令中實現，並且能夠產生一個從 0 到 232-1 之間的看似很隨機的數字序列。</p><p>不幸的是，對為什麼使用如此少的指令能夠產生如此長的序列的原因的研究，已經遠超出了本課程的教學範圍。但我還是鼓勵有興趣的人去研究它。它的全部核心所在就是下面的二次方程，其中 <code>xn</code> 是產生的第 <code>n</code> 個隨機數。</p><blockquote><p>這類討論經常尋求一個問題，那就是我們所謂的隨機數到底是什麼？通常從統計學的角度來説的隨機性是：一組沒有明顯模式或屬性能夠概括它的數的序列。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>x_(n+1) = ax_(n)^2 + bx_(n) + c mod 2^32</span></span></code></pre></div><p>這個方程受到以下的限制：</p><ol><li>a 是偶數</li><li>b = a + 1 mod 4</li><li>c 是奇數</li></ol><p>如果你之前沒有見到過 <code>mod</code> 運算，我來解釋一下，它的意思是被它後面的數相除之後的餘數。比如 <code>b = a + 1 mod 4</code> 的意思是 <code>b</code> 是 <code>a + 1</code> 除以 <code>4</code> 的餘數，因此，如果 <code>a</code> 是 12，那麼 <code>b</code> 將是 <code>1</code>，因為 <code>a + 1</code> 是 13，而 <code>13</code> 除以 4 的結果是 3 餘 1。</p><p>複製下列代碼到名為 <code>random.s</code> 的文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl Random</span></span>
<span class="line"><span>Random:</span></span>
<span class="line"><span>xnm .req r0</span></span>
<span class="line"><span>a .req r1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mov a,#0xef00</span></span>
<span class="line"><span>mul a,xnm</span></span>
<span class="line"><span>mul a,xnm</span></span>
<span class="line"><span>add a,xnm</span></span>
<span class="line"><span>.unreq xnm</span></span>
<span class="line"><span>add r0,a,#73</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.unreq a</span></span>
<span class="line"><span>mov pc,lr</span></span></code></pre></div><p>這是隨機函數的一個實現，使用一個在寄存器 <code>r0</code> 中最後生成的值作為輸入，而接下來的數字則是輸出。在我的案例中，我使用 a = EF00<sub>16</sub>，b = 1, c = 73。這個選擇是隨意的，但是需要滿足上述的限制。你可以使用任何數字代替它們，只要符合上述的規則就行。</p><h3 id="_4、pi-casso" tabindex="-1">4、Pi-casso <a class="header-anchor" href="#_4、pi-casso" aria-label="Permalink to “4、Pi-casso”">​</a></h3><p>OK，現在我們有了所有我們需要的函數，我們來試用一下它們。獲取幀緩衝信息的地址之後，按如下的要求修改 <code>main</code>：</p><ol><li>使用包含了幀緩衝信息地址的寄存器 <code>r0</code> 調用 <code>SetGraphicsAddress</code>。</li><li>設置四個寄存器為 0。一個將是最後的隨機數，一個將是顏色，一個將是最後的 x 座標，而最後一個將是最後的 y 座標。</li><li>調用 <code>random</code> 去產生下一個 x 座標，使用最後一個隨機數作為輸入。</li><li>調用 <code>random</code> 再次去生成下一個 y 座標，使用你生成的 x 座標作為輸入。</li><li>更新最後的隨機數為 y 座標。</li><li>使用 <code>colour</code> 值調用 <code>SetForeColour</code>，接着增加 <code>colour</code> 值。如果它大於 FFFF~16~，確保它返回為 0。</li><li>我們生成的 x 和 y 座標將介於 0 到 FFFFFFFF<sub>16</sub>。通過將它們邏輯右移 22 位，將它們轉換為介於 0 到 1023<sub>10</sub> 之間的數。</li><li>檢查 y 座標是否在屏幕上。驗證 y 座標是否介於 0 到 767<sub>10</sub> 之間。如果不在這個區間，返回到第 3 步。</li><li>從最後的 x 座標和 y 座標到當前的 x 座標和 y 座標之間繪製一條線。</li><li>更新最後的 x 和 y 座標去為當前的座標。</li><li>返回到第 3 步。</li></ol><p>一如既往，你可以在下載頁面上找到這個解決方案。</p><p>在你完成之後，在樹莓派上做測試。你應該會看到一系列顏色遞增的隨機線條以非常快的速度出現在屏幕上。它一直持續下去。如果你的代碼不能正常工作，請查看我們的排錯頁面。</p>`,53)),i("p",null,[s[4]||(s[4]=a("如果一切順利，恭喜你！我們現在已經學習了有意義的圖形和隨機數。我鼓勵你去使用它繪製線條，因為它能夠用於渲染你想要的任何東西，你可以去探索更復雜的圖案了。它們中的大多數都可以由線條生成，但這需要更好的策略？如果你願意寫一個畫線程序，嘗試使用 ",-1)),s[5]||(s[5]=i("code",null,"SetPixel",-1)),s[6]||(s[6]=a(" 函數。如果不是去設置像素值而是一點點地增加它，會發生什麼情況？你可以用它產生什麼樣的圖案？在下一節課 ",-1)),p(n,{href:"https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/screen03.html"},{default:l(()=>[...s[3]||(s[3]=[a("課程 8：屏幕 03",-1)])]),_:1}),s[7]||(s[7]=a(" 中，我們將學習繪製文本的寶貴技能。",-1))]),s[25]||(s[25]=i("hr",null,null,-1)),i("p",null,[s[9]||(s[9]=a("via: ",-1)),p(n,{href:"https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/screen02.html"},{default:l(()=>[...s[8]||(s[8]=[a("https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/screen02.html",-1)])]),_:1})]),i("p",null,[s[14]||(s[14]=a("作者：",-1)),p(n,{href:"https://www.cl.cam.ac.uk"},{default:l(()=>[...s[10]||(s[10]=[a("Alex Chadwick",-1)])]),_:1}),s[15]||(s[15]=a(" 選題：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[11]||(s[11]=[a("lujun9972",-1)])]),_:1}),s[16]||(s[16]=a(" 譯者：",-1)),p(n,{href:"https://github.com/qhwdw"},{default:l(()=>[...s[12]||(s[12]=[a("qhwdw",-1)])]),_:1}),s[17]||(s[17]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:l(()=>[...s[13]||(s[13]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[20]||(s[20]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[18]||(s[18]=[a("LCTT",-1)])]),_:1}),s[21]||(s[21]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:l(()=>[...s[19]||(s[19]=[a("Linux中國",-1)])]),_:1}),s[22]||(s[22]=a(" 榮譽推出",-1))])])}const f=e(d,[["render",o]]);export{b as __pageData,f as default};
