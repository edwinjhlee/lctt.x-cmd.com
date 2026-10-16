import{_ as t,a0 as r,w as d,s as c,I as n,x as a,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"計算機實驗室之樹莓派：課程 11 輸入02 | LCTT x X-CMD","titleTemplate":false,"description":"計算機實驗室之樹莓派：課程 11 輸入02 | LCTT (201904) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"計算機實驗室之樹莓派：課程 11 輸入02 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"計算機實驗室之樹莓派：課程 11 輸入02 | LCTT (201904) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201904/20150616 Computer Laboratory - Raspberry Pi- Lesson 11 Input02","title":"計算機實驗室之樹莓派：課程 11 輸入02","tag":"201904","desc":""},"relativePath":"201904/20150616 Computer Laboratory - Raspberry Pi- Lesson 11 Input02.md","filePath":"[post].md"}'),o={name:"201904/20150616 Computer Laboratory - Raspberry Pi- Lesson 11 Input02.md"};function h(g,s,b,k,u,m){const p=r("Link");return d(),c("div",null,[s[26]||(s[26]=n("h1",{id:"計算機實驗室之樹莓派-課程-11-輸入02",tabindex:"-1"},[a("計算機實驗室之樹莓派：課程 11 輸入02 "),n("a",{class:"header-anchor",href:"#計算機實驗室之樹莓派-課程-11-輸入02","aria-label":"Permalink to “計算機實驗室之樹莓派：課程 11 輸入02”"},"​")],-1)),n("p",null,[s[1]||(s[1]=a("課程輸入 02 是以課程輸入 01 為基礎講解的，通過一個簡單的命令列實現用户的命令輸入和計算機的處理和顯示。本文假設你已經具備 ",-1)),e(p,{href:"https://linux.cn/article-10676-1.html"},{default:i(()=>[...s[0]||(s[0]=[a("課程11：輸入01",-1)])]),_:1}),s[2]||(s[2]=a(" 的操作系統代碼基礎。",-1))]),s[27]||(s[27]=l(`<h3 id="_1、終端" tabindex="-1">1、終端 <a class="header-anchor" href="#_1、終端" aria-label="Permalink to “1、終端”">​</a></h3><p>幾乎所有的操作系統都是以字符終端顯示啓動的。經典的黑底白字，通過鍵盤輸入計算機要執行的命令，然後會提示你拼寫錯誤，或者恰好得到你想要的執行結果。這種方法有兩個主要優點：鍵盤和顯示器可以提供簡易、健壯的計算機交互機制，幾乎所有的計算機系統都採用這個機制，這個也廣泛被系統管理員應用。</p><blockquote><p>早期的計算一般是在一棟樓裏的一個巨型計算機系統，它有很多可以輸命令的&#39;終端&#39;。計算機依次執行不同來源的命令。</p></blockquote><p>讓我們分析下真正想要哪些信息：</p><ol><li>計算機打開後，顯示歡迎信息</li><li>計算機啓動後可以接受輸入標誌</li><li>用户從鍵盤輸入帶參數的命令</li><li>用户輸入回車鍵或提交按鈕</li><li>計算機解析命令後執行可用的命令</li><li>計算機顯示命令的執行結果，過程信息</li><li>循環跳轉到步驟 2</li></ol><p>這樣的終端被定義為標準的輸入輸出設備。用於（顯示）輸入的屏幕和打印輸出內容的屏幕是同一個（LCTT 譯註：最早期的輸出打印真是“打印”到打印機/電傳機的，而用於輸入的終端只是鍵盤，除非做了回顯，否則輸出終端是不會顯示輸入的字符的）。也就是説終端是對字符顯示的一個抽象。字符顯示中，單個字符是最小的單元，而不是像素。屏幕被劃分成固定數量不同顏色的字符。我們可以在現有的屏幕代碼基礎上，先存儲字符和對應的顏色，然後再用方法 <code>DrawCharacter</code> 把其推送到屏幕上。一旦我們需要字符顯示，就只需要在屏幕上畫出一行字符串。</p><p>新建文件名為 <code>terminal.s</code>，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.section .data</span></span>
<span class="line"><span>.align 4</span></span>
<span class="line"><span>terminalStart:</span></span>
<span class="line"><span>.int terminalBuffer</span></span>
<span class="line"><span>terminalStop:</span></span>
<span class="line"><span>.int terminalBuffer</span></span>
<span class="line"><span>terminalView:</span></span>
<span class="line"><span>.int terminalBuffer</span></span>
<span class="line"><span>terminalColour:</span></span>
<span class="line"><span>.byte 0xf</span></span>
<span class="line"><span>.align 8</span></span>
<span class="line"><span>terminalBuffer:</span></span>
<span class="line"><span>.rept 128*128</span></span>
<span class="line"><span>.byte 0x7f</span></span>
<span class="line"><span>.byte 0x0</span></span>
<span class="line"><span>.endr</span></span>
<span class="line"><span>terminalScreen:</span></span>
<span class="line"><span>.rept 1024/8 core.md Dict.md lctt2014.md lctt2016.md lctt2018.md LICENSE published README.md scripts sources translated 768/16</span></span>
<span class="line"><span>.byte 0x7f</span></span>
<span class="line"><span>.byte 0x0</span></span>
<span class="line"><span>.endr</span></span></code></pre></div><p>這是文件終端的配置數據文件。我們有兩個主要的存儲變量：<code>terminalBuffer</code> 和 <code>terminalScreen</code>。<code>terminalBuffer</code> 保存所有顯示過的字符。它保存 128 行字符文本（1 行包含 128 個字符）。每個字符有一個 ASCII 字符和顏色單元組成，初始值為 0x7f（ASCII 的刪除字符）和 0（前景色和背景色為黑）。<code>terminalScreen</code> 保存當前屏幕顯示的字符。它保存 128x48 個字符，與 <code>terminalBuffer</code> 初始化值一樣。你可能會覺得我僅需要 <code>terminalScreen</code> 就夠了，為什麼還要<code>terminalBuffer</code>，其實有兩個好處：</p><ol><li>我們可以很容易看到字符串的變化，只需畫出有變化的字符。</li><li>我們可以回滾終端顯示的歷史字符，也就是緩衝的字符（有限制）</li></ol><p>這種獨特的技巧在低功耗系統裏很常見。畫屏是很耗時的操作，因此我們僅在不得已的時候才去執行這個操作。在這個系統裏，我們可以任意改變 <code>terminalBuffer</code>，然後調用一個僅拷貝屏幕上字節變化的方法。也就是説我們不需要持續畫出每個字符，這樣可以節省一大段跨行文本的操作時間。</p><blockquote><p>你總是需要嘗試去設計一個高效的系統，如果在很少變化的情況下這個系統會運行的更快。</p></blockquote><p>其他在 <code>.data</code> 段的值得含義如下：</p><ul><li><code>terminalStart</code> 寫入到 <code>terminalBuffer</code> 的第一個字符</li><li><code>terminalStop</code> 寫入到 <code>terminalBuffer</code> 的最後一個字符</li><li><code>terminalView</code> 表示當前屏幕的第一個字符，這樣我們可以控制滾動屏幕</li><li><code>temrinalColour</code> 即將被描畫的字符顏色</li></ul><p><code>terminalStart</code> 需要保存起來的原因是 <code>termainlBuffer</code> 是一個環狀緩衝區。意思是當緩衝區變滿時，末尾地方會回滾覆蓋開始位置，這樣最後一個字符變成了第一個字符。因此我們需要將 <code>terminalStart</code> 往前推進，這樣我們知道我們已經佔滿它了。如何實現緩衝區檢測：如果索引越界到緩衝區的末尾，就將索引指向緩衝區的開始位置。環狀緩衝區是一個比較常見的存儲大量數據的高明方法，往往這些數據的最近部分比較重要。它允許無限制的寫入，只保證最近一些特定數據有效。這個常常用於信號處理和數據壓縮算法。這樣的情況，可以允許我們存儲 128 行終端記錄，超過128行也不會有問題。如果不是這樣，當超過第 128 行時，我們需要把 127 行分別向前拷貝一次，這樣很浪費時間。</p><p><img src="https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/images/circular_buffer.png" alt="顯示 Hellow world 插入到大小為5的循環緩衝區的示意圖。"></p><blockquote><p>環狀緩衝區是<strong>數據結構</strong>一個例子。這是一個組織數據的思路，有時我們通過軟件實現這種思路。</p></blockquote>`,17)),n("p",null,[s[4]||(s[4]=a("之前已經提到過 ",-1)),s[5]||(s[5]=n("code",null,"terminalColour",-1)),s[6]||(s[6]=a(" 幾次了。你可以根據你的想法實現終端顏色，但這個文本終端有 16 個前景色和 16 個背景色（這裏相當於有 16^2 = 256 種組合）。",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Color_Graphics_Adapter"},{default:i(()=>[...s[3]||(s[3]=[a("CGA",-1)])]),_:1}),s[7]||(s[7]=a("終端的顏色定義如下：",-1))]),s[28]||(s[28]=l(`<p>表格 1.1 - CGA 顏色編碼</p><div class="table-wrap"><table><thead><tr><th>序號</th><th>顏色 (R, G, B)</th></tr></thead><tbody><tr><td>0</td><td>黑 (0, 0, 0)</td></tr><tr><td>1</td><td>藍 (0, 0, ⅔)</td></tr><tr><td>2</td><td>綠 (0, ⅔, 0)</td></tr><tr><td>3</td><td>青色 (0, ⅔, ⅔)</td></tr><tr><td>4</td><td>紅色 (⅔, 0, 0)</td></tr><tr><td>5</td><td>品紅 (⅔, 0, ⅔)</td></tr><tr><td>6</td><td>棕色 (⅔, ⅓, 0)</td></tr><tr><td>7</td><td>淺灰色 (⅔, ⅔, ⅔)</td></tr><tr><td>8</td><td>灰色 (⅓, ⅓, ⅓)</td></tr><tr><td>9</td><td>淡藍色 (⅓, ⅓, 1)</td></tr><tr><td>10</td><td>淡綠色 (⅓, 1, ⅓)</td></tr><tr><td>11</td><td>淡青色 (⅓, 1, 1)</td></tr><tr><td>12</td><td>淡紅色 (1, ⅓, ⅓)</td></tr><tr><td>13</td><td>淺品紅 (1, ⅓, 1)</td></tr><tr><td>14</td><td>黃色 (1, 1, ⅓)</td></tr><tr><td>15</td><td>白色 (1, 1, 1)</td></tr></tbody></table></div><p>我們將前景色保存到顏色的低字節，背景色保存到顏色高字節。除了棕色，其他這些顏色遵循一種模式如二進制的高位比特代表增加 ⅓ 到每個組件，其他比特代表增加 ⅔ 到各自組件。這樣很容易進行 RGB 顏色轉換。</p><blockquote><p>棕色作為替代色（黑黃色）既不吸引人也沒有什麼用處。</p></blockquote><p>我們需要一個方法從 <code>TerminalColour</code> 讀取顏色編碼的四個比特，然後用 16 比特等效參數調用 <code>SetForeColour</code>。嘗試你自己實現。如果你感覺麻煩或者還沒有完成屏幕系列課程，我們的實現如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.section .text</span></span>
<span class="line"><span>TerminalColour:</span></span>
<span class="line"><span>teq r0,#6</span></span>
<span class="line"><span>ldreq r0,=0x02B5</span></span>
<span class="line"><span>beq SetForeColour</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tst r0,#0b1000</span></span>
<span class="line"><span>ldrne r1,=0x52AA</span></span>
<span class="line"><span>moveq r1,#0</span></span>
<span class="line"><span>tst r0,#0b0100</span></span>
<span class="line"><span>addne r1,#0x15</span></span>
<span class="line"><span>tst r0,#0b0010</span></span>
<span class="line"><span>addne r1,#0x540</span></span>
<span class="line"><span>tst r0,#0b0001</span></span>
<span class="line"><span>addne r1,#0xA800</span></span>
<span class="line"><span>mov r0,r1</span></span>
<span class="line"><span>b SetForeColour</span></span></code></pre></div><h3 id="_2、文本顯示" tabindex="-1">2、文本顯示 <a class="header-anchor" href="#_2、文本顯示" aria-label="Permalink to “2、文本顯示”">​</a></h3><p>我們的終端第一個真正需要的方法是 <code>TerminalDisplay</code>，它用來把當前的數據從 <code>terminalBuffer</code>拷貝到 <code>terminalScreen</code> 和實際的屏幕。如上所述，這個方法必須是最小開銷的操作，因為我們需要頻繁調用它。它主要比較 <code>terminalBuffer</code> 與 <code>terminalDisplay</code> 的文本，然後只拷貝有差異的字節。請記住 <code>terminalBuffer</code> 是以環狀緩衝區運行的，這種情況，就是從 <code>terminalView</code> 到 <code>terminalStop</code>，或者 128*48 個字符，要看哪個來的最快。如果我們遇到 <code>terminalStop</code>，我們將會假定在這之後的所有字符是 7f<sub>16</sub> (ASCII 刪除字符)，顏色為 0（黑色前景色和背景色）。</p><p>讓我們看看必須要做的事情：</p><ol><li>加載 <code>terminalView</code>、<code>terminalStop</code> 和 <code>terminalDisplay</code> 的地址。</li><li>對於每一行： 1. 對於每一列： <ol><li>如果 <code>terminalView</code> 不等於 <code>terminalStop</code>，根據 <code>terminalView</code> 加載當前字符和顏色</li><li>否則加載 0x7f 和顏色 0</li><li>從 <code>terminalDisplay</code> 加載當前的字符</li><li>如果字符和顏色相同，直接跳轉到第 10 步</li><li>存儲字符和顏色到 <code>terminalDisplay</code></li><li>用 <code>r0</code> 作為背景色參數調用 <code>TerminalColour</code></li><li>用 <code>r0 = 0x7f</code>（ASCII 刪除字符，一個塊）、 <code>r1 = x</code>、<code>r2 = y</code> 調用 <code>DrawCharacter</code></li><li>用 <code>r0</code> 作為前景色參數調用 <code>TerminalColour</code></li><li>用 <code>r0 = 字符</code>、<code>r1 = x</code>、<code>r2 = y</code> 調用 <code>DrawCharacter</code></li><li>對位置參數 <code>terminalDisplay</code> 累加 2</li><li>如果 <code>terminalView</code> 不等於 <code>terminalStop</code>，<code>terminalView</code> 位置參數累加 2</li><li>如果 <code>terminalView</code> 位置已經是文件緩衝器的末尾，將它設置為緩衝區的開始位置</li><li>x 座標增加 8</li></ol></li></ol><pre><code>2. y 座標增加 16
</code></pre><p>嘗試去自己實現吧。如果你遇到問題，我們的方案下面給出來了：</p><p>1、我這裏的變量有點亂。為了方便起見，我用 <code>taddr</code> 存儲 <code>textBuffer</code> 的末尾位置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl TerminalDisplay</span></span>
<span class="line"><span>TerminalDisplay:</span></span>
<span class="line"><span>push {r4,r5,r6,r7,r8,r9,r10,r11,lr}</span></span>
<span class="line"><span>x .req r4</span></span>
<span class="line"><span>y .req r5</span></span>
<span class="line"><span>char .req r6</span></span>
<span class="line"><span>col .req r7</span></span>
<span class="line"><span>screen .req r8</span></span>
<span class="line"><span>taddr .req r9</span></span>
<span class="line"><span>view .req r10</span></span>
<span class="line"><span>stop .req r11</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ldr taddr,=terminalStart</span></span>
<span class="line"><span>ldr view,[taddr,#terminalView - terminalStart]</span></span>
<span class="line"><span>ldr stop,[taddr,#terminalStop - terminalStart]</span></span>
<span class="line"><span>add taddr,#terminalBuffer - terminalStart</span></span>
<span class="line"><span>add taddr,#128*128*2</span></span>
<span class="line"><span>mov screen,taddr</span></span></code></pre></div><p>2、從 <code>yLoop</code> 開始運行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov y,#0</span></span>
<span class="line"><span>yLoop$:</span></span></code></pre></div><p>2.1、</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov x,#0</span></span>
<span class="line"><span>xLoop$:</span></span></code></pre></div><p>從 <code>xLoop</code> 開始運行。</p><p>2.1.1、為了方便起見，我把字符和顏色同時加載到 <code>char</code> 變量了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq view,stop</span></span>
<span class="line"><span>ldrneh char,[view]</span></span></code></pre></div><p>2.1.2、這行是對上面一行的補充説明：讀取黑色的刪除字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>moveq char,#0x7f</span></span></code></pre></div><p>2.1.3、為了簡便我把字符和顏色同時加載到 <code>col</code> 裏。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ldrh col,[screen]</span></span></code></pre></div><p>2.1.4、 現在我用 <code>teq</code> 指令檢查是否有數據變化</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq col,char</span></span>
<span class="line"><span>beq xLoopContinue$</span></span></code></pre></div><p>2.1.5、我可以容易的保存當前值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>strh char,[screen]</span></span></code></pre></div><p>2.1.6、我用比特偏移指令 <code>lsr</code> 和 <code>and</code> 指令從切分 <code>char</code> 變量，將顏色放到 <code>col</code> 變量，字符放到 <code>char</code> 變量，然後再用比特偏移指令 <code>lsr</code> 獲取背景色後調用 <code>TerminalColour</code> 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lsr col,char,#8</span></span>
<span class="line"><span>and char,#0x7f</span></span>
<span class="line"><span>lsr r0,col,#4</span></span>
<span class="line"><span>bl TerminalColour</span></span></code></pre></div><p>2.1.7、寫入一個彩色的刪除字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#0x7f</span></span>
<span class="line"><span>mov r1,x</span></span>
<span class="line"><span>mov r2,y</span></span>
<span class="line"><span>bl DrawCharacter</span></span></code></pre></div><p>2.1.8、用 <code>and</code> 指令獲取 <code>col</code> 變量的低半字節，然後調用 <code>TerminalColour</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>and r0,col,#0xf</span></span>
<span class="line"><span>bl TerminalColour</span></span></code></pre></div><p>2.1.9、寫入我們需要的字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,char</span></span>
<span class="line"><span>mov r1,x</span></span>
<span class="line"><span>mov r2,y</span></span>
<span class="line"><span>bl DrawCharacter</span></span></code></pre></div><p>2.1.10、自增屏幕指針</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>xLoopContinue$:</span></span>
<span class="line"><span>add screen,#2</span></span></code></pre></div><p>2.1.11、如果可能自增 <code>view</code> 指針</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq view,stop</span></span>
<span class="line"><span>addne view,#2</span></span></code></pre></div><p>2.1.12、很容易檢測 <code>view</code> 指針是否越界到緩衝區的末尾，因為緩衝區的地址保存在 <code>taddr</code> 變量裏</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq view,taddr</span></span>
<span class="line"><span>subeq view,#128*128*2</span></span></code></pre></div><p>2.1.13、 如果還有字符需要顯示，我們就需要自增 <code>x</code> 變量然後到 <code>xLoop</code> 循環執行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>add x,#8</span></span>
<span class="line"><span>teq x,#1024</span></span>
<span class="line"><span>bne xLoop$</span></span></code></pre></div><p>2.2、 如果還有更多的字符顯示我們就需要自增 <code>y</code> 變量，然後到 <code>yLoop</code> 循環執行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>add y,#16</span></span>
<span class="line"><span>teq y,#768</span></span>
<span class="line"><span>bne yLoop$</span></span></code></pre></div><p>3、不要忘記最後清除變量</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pop {r4,r5,r6,r7,r8,r9,r10,r11,pc}</span></span>
<span class="line"><span>.unreq x</span></span>
<span class="line"><span>.unreq y</span></span>
<span class="line"><span>.unreq char</span></span>
<span class="line"><span>.unreq col</span></span>
<span class="line"><span>.unreq screen</span></span>
<span class="line"><span>.unreq taddr</span></span>
<span class="line"><span>.unreq view</span></span>
<span class="line"><span>.unreq stop</span></span></code></pre></div><h3 id="_3、行打印" tabindex="-1">3、行打印 <a class="header-anchor" href="#_3、行打印" aria-label="Permalink to “3、行打印”">​</a></h3><p>現在我有了自己 <code>TerminalDisplay</code> 方法，它可以自動顯示 <code>terminalBuffer</code> 內容到 <code>terminalScreen</code>，因此理論上我們可以畫出文本。但是實際上我們沒有任何基於字符顯示的例程。 首先快速容易上手的方法便是 <code>TerminalClear</code>， 它可以徹底清除終端。這個方法不用循環也很容易實現。可以嘗試分析下面的方法應該不難：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl TerminalClear</span></span>
<span class="line"><span>TerminalClear:</span></span>
<span class="line"><span>ldr r0,=terminalStart</span></span>
<span class="line"><span>add r1,r0,#terminalBuffer-terminalStart</span></span>
<span class="line"><span>str r1,[r0]</span></span>
<span class="line"><span>str r1,[r0,#terminalStop-terminalStart]</span></span>
<span class="line"><span>str r1,[r0,#terminalView-terminalStart]</span></span>
<span class="line"><span>mov pc,lr</span></span></code></pre></div><p>現在我們需要構造一個字符顯示的基礎方法：<code>Print</code> 函數。它將保存在 <code>r0</code> 的字符串和保存在 <code>r1</code> 的字符串長度簡單的寫到屏幕上。有一些特定字符需要特別的注意，這些特定的操作是確保 <code>terminalView</code> 是最新的。我們來分析一下需要做什麼：</p><ol><li>檢查字符串的長度是否為 0，如果是就直接返回</li><li>加載 <code>terminalStop</code> 和 <code>terminalView</code></li><li>計算出 <code>terminalStop</code> 的 x 座標</li><li>對每一個字符的操作： 1. 檢查字符是否為新起一行 2. 如果是的話，自增 <code>bufferStop</code> 到行末，同時寫入黑色刪除字符 3. 否則拷貝當前 <code>terminalColour</code> 的字符 4. 檢查是否在行末 5. 如果是，檢查從 <code>terminalView</code> 到 <code>terminalStop</code> 之間的字符數是否大於一屏 6. 如果是，<code>terminalView</code> 自增一行 7. 檢查 <code>terminalView</code> 是否為緩衝區的末尾，如果是的話將其替換為緩衝區的起始位置 8. 檢查 <code>terminalStop</code> 是否為緩衝區的末尾，如果是的話將其替換為緩衝區的起始位置 9. 檢查 <code>terminalStop</code> 是否等於 <code>terminalStart</code>， 如果是的話 <code>terminalStart</code> 自增一行。 10. 檢查 <code>terminalStart</code> 是否為緩衝區的末尾，如果是的話將其替換為緩衝區的起始位置</li><li>存取 <code>terminalStop</code> 和 <code>terminalView</code></li></ol><p>試一下自己去實現。我們的方案提供如下：</p><p>1、這個是 <code>Print</code> 函數開始快速檢查字符串為0的代碼</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl Print</span></span>
<span class="line"><span>Print:</span></span>
<span class="line"><span>teq r1,#0</span></span>
<span class="line"><span>moveq pc,lr</span></span></code></pre></div><p>2、這裏我做了很多配置。 <code>bufferStart</code> 代表 <code>terminalStart</code>， <code>bufferStop</code> 代表<code>terminalStop</code>， <code>view</code> 代表 <code>terminalView</code>，<code>taddr</code> 代表 <code>terminalBuffer</code> 的末尾地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>push {r4,r5,r6,r7,r8,r9,r10,r11,lr}</span></span>
<span class="line"><span>bufferStart .req r4</span></span>
<span class="line"><span>taddr .req r5</span></span>
<span class="line"><span>x .req r6</span></span>
<span class="line"><span>string .req r7</span></span>
<span class="line"><span>length .req r8</span></span>
<span class="line"><span>char .req r9</span></span>
<span class="line"><span>bufferStop .req r10</span></span>
<span class="line"><span>view .req r11</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mov string,r0</span></span>
<span class="line"><span>mov length,r1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ldr taddr,=terminalStart</span></span>
<span class="line"><span>ldr bufferStop,[taddr,#terminalStop-terminalStart]</span></span>
<span class="line"><span>ldr view,[taddr,#terminalView-terminalStart]</span></span>
<span class="line"><span>ldr bufferStart,[taddr]</span></span>
<span class="line"><span>add taddr,#terminalBuffer-terminalStart</span></span>
<span class="line"><span>add taddr,#128*128*2</span></span></code></pre></div><p>3、和通常一樣，巧妙的對齊技巧讓許多事情更容易。由於需要對齊 <code>terminalBuffer</code>，每個字符的 x 座標需要 8 位要除以 2。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>and x,bufferStop,#0xfe</span></span>
<span class="line"><span>lsr x,#1</span></span></code></pre></div><p>4.1、我們需要檢查新行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>charLoop$:</span></span>
<span class="line"><span>ldrb char,[string]</span></span>
<span class="line"><span>and char,#0x7f</span></span>
<span class="line"><span>teq char,#&#39;\\n&#39;</span></span>
<span class="line"><span>bne charNormal$</span></span></code></pre></div><p>4.2、循環執行值到行末寫入 0x7f；黑色刪除字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#0x7f</span></span>
<span class="line"><span>clearLine$:</span></span>
<span class="line"><span>strh r0,[bufferStop]</span></span>
<span class="line"><span>add bufferStop,#2</span></span>
<span class="line"><span>add x,#1</span></span>
<span class="line"><span>teq x,#128 blt clearLine$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>b charLoopContinue$</span></span></code></pre></div><p>4.3、存儲字符串的當前字符和 <code>terminalBuffer</code> 末尾的 <code>terminalColour</code> 然後將它和 x 變量自增</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>charNormal$:</span></span>
<span class="line"><span>strb char,[bufferStop]</span></span>
<span class="line"><span>ldr r0,=terminalColour</span></span>
<span class="line"><span>ldrb r0,[r0]</span></span>
<span class="line"><span>strb r0,[bufferStop,#1]</span></span>
<span class="line"><span>add bufferStop,#2</span></span>
<span class="line"><span>add x,#1</span></span></code></pre></div><p>4.4、檢查 x 是否為行末；128</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>charLoopContinue$:</span></span>
<span class="line"><span>cmp x,#128</span></span>
<span class="line"><span>blt noScroll$</span></span></code></pre></div><p>4.5、設置 x 為 0 然後檢查我們是否已經顯示超過 1 屏。請記住，我們是用的循環緩衝區，因此如果 <code>bufferStop</code> 和 <code>view</code> 之前的差是負值，我們實際上是環繞了緩衝區。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov x,#0</span></span>
<span class="line"><span>subs r0,bufferStop,view</span></span>
<span class="line"><span>addlt r0,#128*128*2</span></span>
<span class="line"><span>cmp r0,#128*(768/16)*2</span></span></code></pre></div><p>4.6、增加一行字節到 <code>view</code> 的地址</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>addge view,#128*2</span></span></code></pre></div><p>4.7、 如果 <code>view</code> 地址是緩衝區的末尾，我們就從它上面減去緩衝區的長度，讓其指向開始位置。我會在開始的時候設置 <code>taddr</code> 為緩衝區的末尾地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq view,taddr</span></span>
<span class="line"><span>subeq view,taddr,#128*128*2</span></span></code></pre></div><p>4.8、如果 <code>stop</code> 的地址在緩衝區末尾，我們就從它上面減去緩衝區的長度，讓其指向開始位置。我會在開始的時候設置 <code>taddr</code> 為緩衝區的末尾地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>noScroll$:</span></span>
<span class="line"><span>teq bufferStop,taddr</span></span>
<span class="line"><span>subeq bufferStop,taddr,#128*128*2</span></span></code></pre></div><p>4.9、檢查 <code>bufferStop</code> 是否等於 <code>bufferStart</code>。 如果等於增加一行到 <code>bufferStart</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq bufferStop,bufferStart</span></span>
<span class="line"><span>addeq bufferStart,#128*2</span></span></code></pre></div><p>4.10、如果 <code>start</code> 的地址在緩衝區的末尾，我們就從它上面減去緩衝區的長度，讓其指向開始位置。我會在開始的時候設置 <code>taddr</code> 為緩衝區的末尾地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq bufferStart,taddr</span></span>
<span class="line"><span>subeq bufferStart,taddr,#128*128*2</span></span></code></pre></div><p>循環執行知道字符串結束</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>subs length,#1</span></span>
<span class="line"><span>add string,#1</span></span>
<span class="line"><span>bgt charLoop$</span></span></code></pre></div><p>5、保存變量然後返回</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>charLoopBreak$:</span></span>
<span class="line"><span>sub taddr,#128*128*2</span></span>
<span class="line"><span>sub taddr,#terminalBuffer-terminalStart</span></span>
<span class="line"><span>str bufferStop,[taddr,#terminalStop-terminalStart]</span></span>
<span class="line"><span>str view,[taddr,#terminalView-terminalStart]</span></span>
<span class="line"><span>str bufferStart,[taddr]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pop {r4,r5,r6,r7,r8,r9,r10,r11,pc}</span></span>
<span class="line"><span>.unreq bufferStart</span></span>
<span class="line"><span>.unreq taddr</span></span>
<span class="line"><span>.unreq x</span></span>
<span class="line"><span>.unreq string</span></span>
<span class="line"><span>.unreq length</span></span>
<span class="line"><span>.unreq char</span></span>
<span class="line"><span>.unreq bufferStop</span></span>
<span class="line"><span>.unreq view</span></span></code></pre></div><p>這個方法允許我們打印任意字符到屏幕。然而我們用了顏色變量，但實際上沒有設置它。一般終端用特性的組合字符去行修改顏色。如 ASCII 轉義（1b<sub>16</sub>）後面跟着一個 0 - f 的 16 進制的數，就可以設置前景色為 CGA 顏色號。如果你自己想嘗試實現；在下載頁面有一個我的詳細的例子。</p><h3 id="_4、標誌輸入" tabindex="-1">4、標誌輸入 <a class="header-anchor" href="#_4、標誌輸入" aria-label="Permalink to “4、標誌輸入”">​</a></h3><p>現在我們有一個可以打印和顯示文本的輸出終端。這僅僅是説對了一半，我們需要輸入。我們想實現一個方法：<code>ReadLine</code>，可以保存文件的一行文本，文本位置由 <code>r0</code> 給出，最大的長度由 <code>r1</code> 給出，返回 <code>r0</code> 裏面的字符串長度。棘手的是用户輸出字符的時候要回顯功能，同時想要退格鍵的刪除功能和命令回車執行功能。它們還需要一個閃爍的下劃線代表計算機需要輸入。這些完全合理的要求讓構造這個方法更具有挑戰性。有一個方法完成這些需求就是存儲用户輸入的文本和文件大小到內存的某個地方。然後當調用 <code>ReadLine</code> 的時候，移動 <code>terminalStop</code> 的地址到它開始的地方然後調用 <code>Print</code>。也就是説我們只需要確保在內存維護一個字符串，然後構造一個我們自己的打印函數。</p><blockquote><p>按照慣例，許多編程語言中，任意程序可以訪問 stdin 和 stdin，它們可以連接到終端的輸入和輸出流。在圖形程序其實也可以進行同樣操作，但實際幾乎不用。</p></blockquote><p>讓我們看看 <code>ReadLine</code> 做了哪些事情：</p><ol><li>如果字符串可保存的最大長度為 0，直接返回</li><li>檢索 <code>terminalStop</code> 和 <code>terminalStop</code> 的當前值</li><li>如果字符串的最大長度大約緩衝區的一半，就設置大小為緩衝區的一半</li><li>從最大長度裏面減去 1 來確保輸入的閃爍字符或結束符</li><li>向字符串寫入一個下劃線</li><li>寫入一個 <code>terminalView</code> 和 <code>terminalStop</code> 的地址到內存</li><li>調用 <code>Print</code> 打印當前字符串</li><li>調用 <code>TerminalDisplay</code></li><li>調用 <code>KeyboardUpdate</code></li><li>調用 <code>KeyboardGetChar</code></li><li>如果是一個新行直接跳轉到第 16 步</li><li>如果是一個退格鍵，將字符串長度減 1（如果其大於 0）</li><li>如果是一個普通字符，將它寫入字符串（字符串大小確保小於最大值）</li><li>如果字符串是以下劃線結束，寫入一個空格，否則寫入下劃線</li><li>跳轉到第 6 步</li><li>字符串的末尾寫入一個新行字符</li><li>調用 <code>Print</code> 和 <code>TerminalDisplay</code></li><li>用結束符替換新行</li><li>返回字符串的長度</li></ol><p>為了方便讀者理解，然後然後自己去實現，我們的實現提供如下：</p><ol><li>快速處理長度為 0 的情況</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl ReadLine</span></span>
<span class="line"><span>ReadLine:</span></span>
<span class="line"><span>teq r1,#0</span></span>
<span class="line"><span>moveq r0,#0</span></span>
<span class="line"><span>moveq pc,lr</span></span></code></pre></div><p>2、考慮到常見的場景，我們初期做了很多初始化動作。<code>input</code> 代表 <code>terminalStop</code> 的值，<code>view</code> 代表 <code>terminalView</code>。<code>Length</code> 默認為 <code>0</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>string .req r4</span></span>
<span class="line"><span>maxLength .req r5</span></span>
<span class="line"><span>input .req r6</span></span>
<span class="line"><span>taddr .req r7</span></span>
<span class="line"><span>length .req r8</span></span>
<span class="line"><span>view .req r9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>push {r4,r5,r6,r7,r8,r9,lr}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mov string,r0</span></span>
<span class="line"><span>mov maxLength,r1</span></span>
<span class="line"><span>ldr taddr,=terminalStart</span></span>
<span class="line"><span>ldr input,[taddr,#terminalStop-terminalStart]</span></span>
<span class="line"><span>ldr view,[taddr,#terminalView-terminalStart]</span></span>
<span class="line"><span>mov length,#0</span></span></code></pre></div><p>3、我們必須檢查異常大的讀操作，我們不能處理超過 <code>terminalBuffer</code> 大小的輸入（理論上可行，但是 <code>terminalStart</code> 移動越過存儲的 terminalStop\`，會有很多問題）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cmp maxLength,#128*64</span></span>
<span class="line"><span>movhi maxLength,#128*64</span></span></code></pre></div><p>4、由於用户需要一個閃爍的光標，我們需要一個備用字符在理想狀況在這個字符串後面放一個結束符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sub maxLength,#1</span></span></code></pre></div><p>5、寫入一個下劃線讓用户知道我們可以輸入了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#&#39;_&#39;</span></span>
<span class="line"><span>strb r0,[string,length]</span></span></code></pre></div><p>6、保存 <code>terminalStop</code> 和 <code>terminalView</code>。這個對重置一個終端很重要，它會修改這些變量。嚴格講也可以修改 <code>terminalStart</code>，但是不可逆。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>readLoop$:</span></span>
<span class="line"><span>str input,[taddr,#terminalStop-terminalStart]</span></span>
<span class="line"><span>str view,[taddr,#terminalView-terminalStart]</span></span></code></pre></div><p>7、寫入當前的輸入。由於下劃線因此字符串長度加 1</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,string</span></span>
<span class="line"><span>mov r1,length</span></span>
<span class="line"><span>add r1,#1</span></span>
<span class="line"><span>bl Print</span></span></code></pre></div><p>8、拷貝下一個文本到屏幕</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bl TerminalDisplay</span></span></code></pre></div><p>9、獲取最近一次鍵盤輸入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bl KeyboardUpdate</span></span></code></pre></div><p>10、檢索鍵盤輸入鍵值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bl KeyboardGetChar</span></span></code></pre></div><p>11、如果我們有一個回車鍵，循環中斷。如果有結束符和一個退格鍵也會同樣跳出循環。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq r0,#&#39;\\n&#39;</span></span>
<span class="line"><span>beq readLoopBreak$</span></span>
<span class="line"><span>teq r0,#0</span></span>
<span class="line"><span>beq cursor$</span></span>
<span class="line"><span>teq r0,#&#39;\\b&#39;</span></span>
<span class="line"><span>bne standard$</span></span></code></pre></div><p>12、從 <code>length</code> 裏面刪除一個字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>delete$:</span></span>
<span class="line"><span>cmp length,#0</span></span>
<span class="line"><span>subgt length,#1</span></span>
<span class="line"><span>b cursor$</span></span></code></pre></div><p>13、寫回一個普通字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>standard$:</span></span>
<span class="line"><span>cmp length,maxLength</span></span>
<span class="line"><span>bge cursor$</span></span>
<span class="line"><span>strb r0,[string,length]</span></span>
<span class="line"><span>add length,#1</span></span></code></pre></div><p>14、加載最近的一個字符，如果不是下劃線則修改為下換線，如果是則修改為空格</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cursor$:</span></span>
<span class="line"><span>ldrb r0,[string,length]</span></span>
<span class="line"><span>teq r0,#&#39;_&#39;</span></span>
<span class="line"><span>moveq r0,#&#39; &#39;</span></span>
<span class="line"><span>movne r0,#&#39;_&#39;</span></span>
<span class="line"><span>strb r0,[string,length]</span></span></code></pre></div><p>15、循環執行值到用户輸入按下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>b readLoop$</span></span>
<span class="line"><span>readLoopBreak$:</span></span></code></pre></div><p>16、在字符串的結尾處存入一個新行字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#&#39;\\n&#39;</span></span>
<span class="line"><span>strb r0,[string,length]</span></span></code></pre></div><p>17、重置 <code>terminalView</code> 和 <code>terminalStop</code> 然後調用 <code>Print</code> 和 <code>TerminalDisplay</code> 顯示最終的輸入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>str input,[taddr,#terminalStop-terminalStart]</span></span>
<span class="line"><span>str view,[taddr,#terminalView-terminalStart]</span></span>
<span class="line"><span>mov r0,string</span></span>
<span class="line"><span>mov r1,length</span></span>
<span class="line"><span>add r1,#1</span></span>
<span class="line"><span>bl Print</span></span>
<span class="line"><span>bl TerminalDisplay</span></span></code></pre></div><p>18、寫入一個結束符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#0</span></span>
<span class="line"><span>strb r0,[string,length]</span></span></code></pre></div><p>19、返回長度</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,length</span></span>
<span class="line"><span>pop {r4,r5,r6,r7,r8,r9,pc}</span></span>
<span class="line"><span>.unreq string</span></span>
<span class="line"><span>.unreq maxLength</span></span>
<span class="line"><span>.unreq input</span></span>
<span class="line"><span>.unreq taddr</span></span>
<span class="line"><span>.unreq length</span></span>
<span class="line"><span>.unreq view</span></span></code></pre></div><h3 id="_5、終端-機器進化" tabindex="-1">5、終端：機器進化 <a class="header-anchor" href="#_5、終端-機器進化" aria-label="Permalink to “5、終端：機器進化”">​</a></h3><p>現在我們理論用終端和用户可以交互了。最顯而易見的事情就是拿去測試了！刪除 <code>main.s</code> 裏 <code>bl UsbInitialise</code> 後面的代碼後如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>reset$:</span></span>
<span class="line"><span>  mov sp,#0x8000</span></span>
<span class="line"><span>  bl TerminalClear</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ldr r0,=welcome</span></span>
<span class="line"><span>  mov r1,#welcomeEnd-welcome</span></span>
<span class="line"><span>  bl Print</span></span>
<span class="line"><span></span></span>
<span class="line"><span>loop$:</span></span>
<span class="line"><span>  ldr r0,=prompt</span></span>
<span class="line"><span>  mov r1,#promptEnd-prompt</span></span>
<span class="line"><span>  bl Print</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ldr r0,=command</span></span>
<span class="line"><span>  mov r1,#commandEnd-command</span></span>
<span class="line"><span>  bl ReadLine</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  teq r0,#0</span></span>
<span class="line"><span>  beq loopContinue$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  mov r4,r0</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ldr r5,=command</span></span>
<span class="line"><span>  ldr r6,=commandTable</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ldr r7,[r6,#0]</span></span>
<span class="line"><span>  ldr r9,[r6,#4]</span></span>
<span class="line"><span>  commandLoop$:</span></span>
<span class="line"><span>    ldr r8,[r6,#8]</span></span>
<span class="line"><span>    sub r1,r8,r7</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    cmp r1,r4</span></span>
<span class="line"><span>    bgt commandLoopContinue$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    mov r0,#0</span></span>
<span class="line"><span>    commandName$:</span></span>
<span class="line"><span>      ldrb r2,[r5,r0]</span></span>
<span class="line"><span>      ldrb r3,[r7,r0]</span></span>
<span class="line"><span>      teq r2,r3</span></span>
<span class="line"><span>      bne commandLoopContinue$</span></span>
<span class="line"><span>      add r0,#1</span></span>
<span class="line"><span>      teq r0,r1</span></span>
<span class="line"><span>      bne commandName$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ldrb r2,[r5,r0]</span></span>
<span class="line"><span>    teq r2,#0</span></span>
<span class="line"><span>    teqne r2,#&#39; &#39;</span></span>
<span class="line"><span>    bne commandLoopContinue$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    mov r0,r5</span></span>
<span class="line"><span>    mov r1,r4</span></span>
<span class="line"><span>    mov lr,pc</span></span>
<span class="line"><span>    mov pc,r9</span></span>
<span class="line"><span>    b loopContinue$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  commandLoopContinue$:</span></span>
<span class="line"><span>    add r6,#8</span></span>
<span class="line"><span>    mov r7,r8</span></span>
<span class="line"><span>    ldr r9,[r6,#4]</span></span>
<span class="line"><span>    teq r9,#0</span></span>
<span class="line"><span>    bne commandLoop$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ldr r0,=commandUnknown</span></span>
<span class="line"><span>  mov r1,#commandUnknownEnd-commandUnknown</span></span>
<span class="line"><span>  ldr r2,=formatBuffer</span></span>
<span class="line"><span>  ldr r3,=command</span></span>
<span class="line"><span>  bl FormatString</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  mov r1,r0</span></span>
<span class="line"><span>  ldr r0,=formatBuffer</span></span>
<span class="line"><span>  bl Print</span></span>
<span class="line"><span></span></span>
<span class="line"><span>loopContinue$:</span></span>
<span class="line"><span>  bl TerminalDisplay</span></span>
<span class="line"><span>  b loop$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo:</span></span>
<span class="line"><span>  cmp r1,#5</span></span>
<span class="line"><span>  movle pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  add r0,#5</span></span>
<span class="line"><span>  sub r1,#5</span></span>
<span class="line"><span>  b Print</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ok:</span></span>
<span class="line"><span>  teq r1,#5</span></span>
<span class="line"><span>  beq okOn$</span></span>
<span class="line"><span>  teq r1,#6</span></span>
<span class="line"><span>  beq okOff$</span></span>
<span class="line"><span>  mov pc,lr</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  okOn$:</span></span>
<span class="line"><span>    ldrb r2,[r0,#3]</span></span>
<span class="line"><span>    teq r2,#&#39;o&#39;</span></span>
<span class="line"><span>    ldreqb r2,[r0,#4]</span></span>
<span class="line"><span>    teqeq r2,#&#39;n&#39;</span></span>
<span class="line"><span>    movne pc,lr</span></span>
<span class="line"><span>    mov r1,#0</span></span>
<span class="line"><span>    b okAct$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  okOff$:</span></span>
<span class="line"><span>    ldrb r2,[r0,#3]</span></span>
<span class="line"><span>    teq r2,#&#39;o&#39;</span></span>
<span class="line"><span>    ldreqb r2,[r0,#4]</span></span>
<span class="line"><span>    teqeq r2,#&#39;f&#39;</span></span>
<span class="line"><span>    ldreqb r2,[r0,#5]</span></span>
<span class="line"><span>    teqeq r2,#&#39;f&#39;</span></span>
<span class="line"><span>    movne pc,lr</span></span>
<span class="line"><span>    mov r1,#1</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  okAct$:</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    mov r0,#16</span></span>
<span class="line"><span>    b SetGpio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.section .data</span></span>
<span class="line"><span>.align 2</span></span>
<span class="line"><span>welcome: .ascii &quot;Welcome to Alex&#39;s OS - Everyone&#39;s favourite OS&quot;</span></span>
<span class="line"><span>welcomeEnd:</span></span>
<span class="line"><span>.align 2</span></span>
<span class="line"><span>prompt: .ascii &quot;\\n&gt; &quot;</span></span>
<span class="line"><span>promptEnd:</span></span>
<span class="line"><span>.align 2</span></span>
<span class="line"><span>command:</span></span>
<span class="line"><span>  .rept 128</span></span>
<span class="line"><span>    .byte 0</span></span>
<span class="line"><span>  .endr</span></span>
<span class="line"><span>commandEnd:</span></span>
<span class="line"><span>.byte 0</span></span>
<span class="line"><span>.align 2</span></span>
<span class="line"><span>commandUnknown: .ascii &quot;Command \`%s&#39; was not recognised.\\n&quot;</span></span>
<span class="line"><span>commandUnknownEnd:</span></span>
<span class="line"><span>.align 2</span></span>
<span class="line"><span>formatBuffer:</span></span>
<span class="line"><span>  .rept 256</span></span>
<span class="line"><span>    .byte 0</span></span>
<span class="line"><span>  .endr</span></span>
<span class="line"><span>formatEnd:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.align 2</span></span>
<span class="line"><span>commandStringEcho: .ascii &quot;echo&quot;</span></span>
<span class="line"><span>commandStringReset: .ascii &quot;reset&quot;</span></span>
<span class="line"><span>commandStringOk: .ascii &quot;ok&quot;</span></span>
<span class="line"><span>commandStringCls: .ascii &quot;cls&quot;</span></span>
<span class="line"><span>commandStringEnd:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.align 2</span></span>
<span class="line"><span>commandTable:</span></span>
<span class="line"><span>.int commandStringEcho, echo</span></span>
<span class="line"><span>.int commandStringReset, reset$</span></span>
<span class="line"><span>.int commandStringOk, ok</span></span>
<span class="line"><span>.int commandStringCls, TerminalClear</span></span>
<span class="line"><span>.int commandStringEnd, 0</span></span></code></pre></div><p>這塊代碼集成了一個簡易的命令列操作系統。支持命令：<code>echo</code>、<code>reset</code>、<code>ok</code> 和 <code>cls</code>。<code>echo</code> 拷貝任意文本到終端，<code>reset</code> 命令會在系統出現問題的是復位操作系統，<code>ok</code> 有兩個功能：設置 OK 燈亮滅，最後 <code>cls</code> 調用 TerminalClear 清空終端。</p><p>試試樹莓派的代碼吧。如果遇到問題，請參照問題集錦頁面吧。</p>`,135)),n("p",null,[s[9]||(s[9]=a("如果運行正常，祝賀你完成了一個操作系統基本終端和輸入系列的課程。很遺憾這個教程先講到這裏，但是我希望將來能製作更多教程。有問題請反饋至 ",-1)),e(p,{href:"mailto:awc32@cam.ac.uk"},{default:i(()=>[...s[8]||(s[8]=[a("awc32@cam.ac.uk",-1)])]),_:1}),s[10]||(s[10]=a("。",-1))]),s[29]||(s[29]=n("p",null,[a("你已經在建立了一個簡易的終端操作系統。我們的代碼在 commandTable 構造了一個可用的命令表格。每個表格的入口是一個整型數字，用來表示字符串的地址，和一個整型數字表格代碼的執行入口。 最後一個入口是 為 0 的 "),n("code",null,"commandStringEnd"),a("。嘗試實現你自己的命令，可以參照已有的函數，建立一個新的。函數的參數 "),n("code",null,"r0"),a(" 是用户輸入的命令地址，"),n("code",null,"r1"),a(" 是其長度。你可以用這個傳遞你輸入值到你的命令。也許你有一個計算器程序，或許是一個繪圖程序或國際象棋。不管你的什麼點子，讓它跑起來！")],-1)),s[30]||(s[30]=n("hr",null,null,-1)),n("p",null,[s[12]||(s[12]=a("via: ",-1)),e(p,{href:"https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/input02.html"},{default:i(()=>[...s[11]||(s[11]=[a("https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/input02.html",-1)])]),_:1})]),n("p",null,[s[17]||(s[17]=a("作者：",-1)),e(p,{href:"https://www.cl.cam.ac.uk"},{default:i(()=>[...s[13]||(s[13]=[a("Alex Chadwick",-1)])]),_:1}),s[18]||(s[18]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[14]||(s[14]=[a("lujun9972",-1)])]),_:1}),s[19]||(s[19]=a(" 譯者：",-1)),e(p,{href:"https://github.com/guevaraya"},{default:i(()=>[...s[15]||(s[15]=[a("guevaraya",-1)])]),_:1}),s[20]||(s[20]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[16]||(s[16]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[23]||(s[23]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[a("LCTT",-1)])]),_:1}),s[24]||(s[24]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[a("Linux中國",-1)])]),_:1}),s[25]||(s[25]=a(" 榮譽推出",-1))])])}const C=t(o,[["render",h]]);export{v as __pageData,C as default};
