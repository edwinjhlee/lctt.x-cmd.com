import{_ as t,a0 as o,w as d,s as r,ao as i,I as a,a1 as e,A as l,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"Go 語言在極小硬件上的運用（一） | LCTT x X-CMD","titleTemplate":false,"description":"Go 語言在極小硬件上的運用（一） | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Go 語言在極小硬件上的運用（一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Go 語言在極小硬件上的運用（一） | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20180330 Go on very small hardware Part 1","title":"Go 語言在極小硬件上的運用（一）","tag":"201909","desc":""},"relativePath":"201909/20180330 Go on very small hardware Part 1.md","filePath":"[post].md"}'),c={name:"201909/20180330 Go on very small hardware Part 1.md"};function g(u,s,m,k,h,b){const p=o("Link");return d(),r("div",null,[s[63]||(s[63]=i('<h1 id="go-語言在極小硬件上的運用-一" tabindex="-1">Go 語言在極小硬件上的運用（一） <a class="header-anchor" href="#go-語言在極小硬件上的運用-一" aria-label="Permalink to “Go 語言在極小硬件上的運用（一）”">​</a></h1><p>Go 語言，能在多低下的配置上運行併發揮作用呢？</p><p>我最近購買了一個特別便宜的開發板：</p><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/board.jpg" alt="STM32F030F4P6"></p><p>我購買它的理由有三個。首先，我（作為程序員）從未接觸過 STM320 系列的開發板。其次，STM32F10x 系列使用也有點少了。STM320 系列的 MCU 很便宜，有更新一些的外設，對系列產品進行了改進，問題修復也做得更好了。最後，為了這篇文章，我選用了這一系列中最低配置的開發板，整件事情就變得有趣起來了。</p><h3 id="硬件部分" tabindex="-1">硬件部分 <a class="header-anchor" href="#硬件部分" aria-label="Permalink to “硬件部分”">​</a></h3>',6)),a("p",null,[e(p,{href:"http://www.st.com/content/st_com/en/products/microcontrollers/stm32-32-bit-arm-cortex-mcus/stm32-mainstream-mcus/stm32f0-series/stm32f0x0-value-line/stm32f030f4.html"},{default:l(()=>[...s[0]||(s[0]=[n("STM32F030F4P6",-1)])]),_:1}),s[1]||(s[1]=n(" 給人留下了很深的印象：",-1))]),a("ul",null,[a("li",null,[s[3]||(s[3]=n("CPU: ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/ARM_Cortex-M#Cortex-M0"},{default:l(()=>[...s[2]||(s[2]=[n("Cortex M0",-1)])]),_:1}),s[4]||(s[4]=n(" 48 MHz（最低配置，只有 12000 個邏輯門電路）",-1))]),s[5]||(s[5]=a("li",null,"RAM: 4 KB，",-1)),s[6]||(s[6]=a("li",null,"Flash: 16 KB，",-1)),s[7]||(s[7]=a("li",null,"ADC、SPI、I2C、USART 和幾個定時器",-1))]),s[64]||(s[64]=a("p",null,"以上這些採用了 TSSOP20 封裝。正如你所見，這是一個很小的 32 位系統。",-1)),s[65]||(s[65]=a("h3",{id:"軟件部分",tabindex:"-1"},[n("軟件部分 "),a("a",{class:"header-anchor",href:"#軟件部分","aria-label":"Permalink to “軟件部分”"},"​")],-1)),a("p",null,[s[9]||(s[9]=n("如果你想知道如何在這塊開發板上使用 ",-1)),e(p,{href:"https://golang.org/"},{default:l(()=>[...s[8]||(s[8]=[n("Go",-1)])]),_:1}),s[10]||(s[10]=n(" 編程，你需要反覆閲讀硬件規範手冊。你必須面對這樣的真實情況：在 Go 編譯器中給 Cortex-M0 提供支持的可能性很小。而且，這還僅僅只是第一個要解決的問題。",-1))]),a("p",null,[s[12]||(s[12]=n("我會使用 ",-1)),e(p,{href:"https://github.com/ziutek/emgo"},{default:l(()=>[...s[11]||(s[11]=[n("Emgo",-1)])]),_:1}),s[13]||(s[13]=n("，但別擔心，之後你會看到，它如何讓 Go 在如此小的系統上儘可能發揮作用。",-1))]),a("p",null,[s[16]||(s[16]=n("在我拿到這塊開發板之前，對 ",-1)),e(p,{href:"https://github.com/ziutek/emgo/tree/master/egpath/src/stm32/hal"},{default:l(()=>[...s[14]||(s[14]=[n("stm32/hal",-1)])]),_:1}),s[17]||(s[17]=n(" 系列下的 F0 MCU 沒有任何支持。在簡單研究",-1)),e(p,{href:"http://www.st.com/resource/en/reference_manual/dm00091010.pdf"},{default:l(()=>[...s[15]||(s[15]=[n("參考手冊",-1)])]),_:1}),s[18]||(s[18]=n("後，我發現 STM32F0 系列是 STM32F3 削減版，這讓在新端口上開發的工作變得容易了一些。",-1))]),s[66]||(s[66]=i(`<p>如果你想接着本文的步驟做下去，需要先安裝 Emgo</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cd $HOME</span></span>
<span class="line"><span>git clone https://github.com/ziutek/emgo/</span></span>
<span class="line"><span>cd emgo/egc</span></span>
<span class="line"><span>go install</span></span></code></pre></div><p>然後設置一下環境變量</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>export EGCC=path_to_arm_gcc      # eg. /usr/local/arm/bin/arm-none-eabi-gcc</span></span>
<span class="line"><span>export EGLD=path_to_arm_linker   # eg. /usr/local/arm/bin/arm-none-eabi-ld</span></span>
<span class="line"><span>export EGAR=path_to_arm_archiver # eg. /usr/local/arm/bin/arm-none-eabi-ar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export EGROOT=$HOME/emgo/egroot</span></span>
<span class="line"><span>export EGPATH=$HOME/emgo/egpath</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export EGARCH=cortexm0</span></span>
<span class="line"><span>export EGOS=noos</span></span>
<span class="line"><span>export EGTARGET=f030x6</span></span></code></pre></div>`,4)),a("p",null,[s[20]||(s[20]=n("更詳細的説明可以在 ",-1)),e(p,{href:"https://github.com/ziutek/emgo"},{default:l(()=>[...s[19]||(s[19]=[n("Emgo",-1)])]),_:1}),s[21]||(s[21]=n(" 官網上找到。",-1))]),s[67]||(s[67]=i(`<p>要確保 <code>egc</code> 在你的 <code>PATH</code> 中。 你可以使用 <code>go build</code> 來代替 <code>go install</code>，然後把 <code>egc</code> 複製到你的 <code>$HOME/bin</code> 或 <code>/usr/local/bin</code> 中。</p><p>現在，為你的第一個 Emgo 程序創建一個新文件夾，隨後把示例中鏈接器腳本複製過來：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir $HOME/firstemgo</span></span>
<span class="line"><span>cd $HOME/firstemgo</span></span>
<span class="line"><span>cp $EGPATH/src/stm32/examples/f030-demo-board/blinky/script.ld .</span></span></code></pre></div><h3 id="最基本程序" tabindex="-1">最基本程序 <a class="header-anchor" href="#最基本程序" aria-label="Permalink to “最基本程序”">​</a></h3><p>在 <code>main.go</code> 文件中創建一個最基本的程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>文件編譯沒有出現任何問題：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>   7452     172     104    7728    1e30 cortexm0.elf</span></span></code></pre></div><p>第一次編譯可能會花點時間。編譯後產生的二進制佔用了 7624 個字節的 Flash 空間（文本 + 數據）。對於一個什麼都沒做的程序來説，佔用的空間有些大。還剩下 8760 字節，可以用來做些有用的事。</p><p>不妨試試傳統的 “Hello, World!” 程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	fmt.Println(&quot;Hello, World!&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>不幸的是，這次結果有些糟糕：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>/usr/local/arm/bin/arm-none-eabi-ld: /home/michal/P/go/src/github.com/ziutek/emgo/egpath/src/stm32/examples/f030-demo-board/blog/cortexm0.elf section \`.text&#39; will not fit in region \`Flash&#39;</span></span>
<span class="line"><span>/usr/local/arm/bin/arm-none-eabi-ld: region \`Flash&#39; overflowed by 10880 bytes</span></span>
<span class="line"><span>exit status 1</span></span></code></pre></div><p>“Hello, World!” 需要 STM32F030x6 上至少 32KB 的 Flash 空間。</p><p><code>fmt</code> 包強制包含整個 <code>strconv</code> 和 <code>reflect</code> 包。這三個包，即使在精簡版本中的 Emgo 中，佔用空間也很大。我們不能使用這個例子了。有很多的應用不需要好看的文本輸出。通常，一個或多個 LED，或者七段數碼管顯示就足夠了。不過，在第二部分，我會嘗試使用 <code>strconv</code> 包來格式化，並在 UART 上顯示一些數字和文本。</p><h3 id="閃爍" tabindex="-1">閃爍 <a class="header-anchor" href="#閃爍" aria-label="Permalink to “閃爍”">​</a></h3><p>我們的開發板上有一個與 PA4 引腳和 VCC 相連的 LED。這次我們的代碼稍稍長了一些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;delay&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&quot;stm32/hal/gpio&quot;</span></span>
<span class="line"><span>	&quot;stm32/hal/system&quot;</span></span>
<span class="line"><span>	&quot;stm32/hal/system/timer/systick&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var led gpio.Pin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>	system.SetupPLL(8, 1, 48/8)</span></span>
<span class="line"><span>	systick.Setup(2e6)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	gpio.A.EnableClock(false)</span></span>
<span class="line"><span>	led = gpio.A.Pin(4)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	cfg := &amp;gpio.Config{Mode: gpio.Out, Driver: gpio.OpenDrain}</span></span>
<span class="line"><span>	led.Setup(cfg)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		led.Clear()</span></span>
<span class="line"><span>		delay.Millisec(100)</span></span>
<span class="line"><span>		led.Set()</span></span>
<span class="line"><span>		delay.Millisec(900)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>按照慣例，<code>init</code> 函數用來初始化和配置外設。</p><p><code>system.SetupPLL(8, 1, 48/8)</code> 用來配置 RCC，將外部的 8 MHz 振盪器的 PLL 作為系統時鐘源。PLL 分頻器設置為 1，倍頻數設置為 48/8 =6，這樣系統時鐘頻率為 48MHz。</p><p><code>systick.Setup(2e6)</code> 將 Cortex-M SYSTICK 時鐘作為系統時鐘，每隔 2e6 次納秒運行一次（每秒鐘 500 次）。</p><p><code>gpio.A.EnableClock(false)</code> 開啓了 GPIO A 口的時鐘。<code>False</code> 意味着這一時鐘在低功耗模式下會被禁用，但在 STM32F0 系列中並未實現這一功能。</p><p><code>led.Setup(cfg)</code> 設置 PA4 引腳為開漏輸出。</p><p><code>led.Clear()</code> 將 PA4 引腳設為低，在開漏設置中，打開 LED。</p><p><code>led.Set()</code> 將 PA4 設為高電平狀態，關掉LED。</p><p>編譯這個代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>   9772     172     168   10112    2780 cortexm0.elf</span></span></code></pre></div><p>正如你所看到的，這個閃爍程序佔用了 2320 字節，比最基本程序佔用空間要大。還有 6440 字節的剩餘空間。</p><p>看看代碼是否能運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ openocd -d0 -f interface/stlink.cfg -f target/stm32f0x.cfg -c &#39;init; program cortexm0.elf; reset run; exit&#39;</span></span>
<span class="line"><span>Open On-Chip Debugger 0.10.0+dev-00319-g8f1f912a (2018-03-07-19:20)</span></span>
<span class="line"><span>Licensed under GNU GPL v2</span></span>
<span class="line"><span>For bug reports, read</span></span>
<span class="line"><span>        http://openocd.org/doc/doxygen/bugs.html</span></span>
<span class="line"><span>debug_level: 0</span></span>
<span class="line"><span>adapter speed: 1000 kHz</span></span>
<span class="line"><span>adapter_nsrst_delay: 100</span></span>
<span class="line"><span>none separate</span></span>
<span class="line"><span>adapter speed: 950 kHz</span></span>
<span class="line"><span>target halted due to debug-request, current mode: Thread </span></span>
<span class="line"><span>xPSR: 0xc1000000 pc: 0x0800119c msp: 0x20000da0</span></span>
<span class="line"><span>adapter speed: 4000 kHz</span></span>
<span class="line"><span>** Programming Started **</span></span>
<span class="line"><span>auto erase enabled</span></span>
<span class="line"><span>target halted due to breakpoint, current mode: Thread </span></span>
<span class="line"><span>xPSR: 0x61000000 pc: 0x2000003a msp: 0x20000da0</span></span>
<span class="line"><span>wrote 10240 bytes from file cortexm0.elf in 0.817425s (12.234 KiB/s)</span></span>
<span class="line"><span>** Programming Finished **</span></span>
<span class="line"><span>adapter speed: 950 kHz</span></span></code></pre></div>`,30)),a("p",null,[s[24]||(s[24]=n("在這篇文章中，這是我第一次，將一個短視頻轉換成",-1)),e(p,{href:"https://en.wikipedia.org/wiki/APNG"},{default:l(()=>[...s[22]||(s[22]=[n("動畫 PNG",-1)])]),_:1}),s[25]||(s[25]=n("。我對此印象很深，再見了 YouTube。 對於 IE 用户，我很抱歉，更多信息請看 ",-1)),e(p,{href:"http://apngasm.sourceforge.net/"},{default:l(()=>[...s[23]||(s[23]=[n("apngasm",-1)])]),_:1}),s[26]||(s[26]=n("。我本應該學習 HTML5，但現在，APNG 是我最喜歡的，用來播放循環短視頻的方法了。",-1))]),s[68]||(s[68]=i(`<p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/blinky.png" alt="STM32F030F4P6"></p><h3 id="更多的-go-語言編程" tabindex="-1">更多的 Go 語言編程 <a class="header-anchor" href="#更多的-go-語言編程" aria-label="Permalink to “更多的 Go 語言編程”">​</a></h3><p>如果你不是一個 Go 程序員，但你已經聽説過一些關於 Go 語言的事情，你可能會説：“Go 語法很好，但跟 C 比起來，並沒有明顯的提升。讓我看看 Go 語言的通道和協程！”</p><p>接下來我會一一展示:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;delay&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&quot;stm32/hal/gpio&quot;</span></span>
<span class="line"><span>	&quot;stm32/hal/system&quot;</span></span>
<span class="line"><span>	&quot;stm32/hal/system/timer/systick&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var led1, led2 gpio.Pin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>	system.SetupPLL(8, 1, 48/8)</span></span>
<span class="line"><span>	systick.Setup(2e6)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	gpio.A.EnableClock(false)</span></span>
<span class="line"><span>	led1 = gpio.A.Pin(4)</span></span>
<span class="line"><span>	led2 = gpio.A.Pin(5)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	cfg := &amp;gpio.Config{Mode: gpio.Out, Driver: gpio.OpenDrain}</span></span>
<span class="line"><span>	led1.Setup(cfg)</span></span>
<span class="line"><span>	led2.Setup(cfg)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func blinky(led gpio.Pin, period int) {</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		led.Clear()</span></span>
<span class="line"><span>		delay.Millisec(100)</span></span>
<span class="line"><span>		led.Set()</span></span>
<span class="line"><span>		delay.Millisec(period - 100)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	go blinky(led1, 500)</span></span>
<span class="line"><span>	blinky(led2, 1000)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>代碼改動很小: 添加了第二個 LED，上一個例子中的 <code>main</code> 函數被重命名為 <code>blinky</code> 並且需要提供兩個參數。 <code>main</code> 在新的協程中先調用 <code>blinky</code>，所以兩個 LED 燈在並行使用。值得一提的是，<code>gpio.Pin</code> 可以同時訪問同一 GPIO 口的不同引腳。</p><p>Emgo 還有很多不足。其中之一就是你需要提前規定 <code>goroutines(tasks)</code> 的最大執行數量。是時候修改 <code>script.ld</code> 了:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ISRStack = 1024;</span></span>
<span class="line"><span>MainStack = 1024;</span></span>
<span class="line"><span>TaskStack = 1024;</span></span>
<span class="line"><span>MaxTasks = 2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INCLUDE stm32/f030x4</span></span>
<span class="line"><span>INCLUDE stm32/loadflash</span></span>
<span class="line"><span>INCLUDE noos-cortexm</span></span></code></pre></div><p>棧的大小需要靠猜，現在還不用關心這一點。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  10020     172     172   10364    287c cortexm0.elf</span></span></code></pre></div><p>另一個 LED 和協程一共佔用了 248 字節的 Flash 空間。</p><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/goroutines.png" alt="STM32F030F4P6"></p><h3 id="通道" tabindex="-1">通道 <a class="header-anchor" href="#通道" aria-label="Permalink to “通道”">​</a></h3>`,13)),a("p",null,[s[28]||(s[28]=n("通道是 Go 語言中協程之間相互通信的一種",-1)),e(p,{href:"https://blog.golang.org/share-memory-by-communicating"},{default:l(()=>[...s[27]||(s[27]=[n("推薦方式",-1)])]),_:1}),s[29]||(s[29]=n("。Emgo 甚至能允許通過",-1)),s[30]||(s[30]=a("em",null,"中斷處理",-1)),s[31]||(s[31]=n("來使用緩衝通道。下一個例子就展示了這種情況。",-1))]),s[69]||(s[69]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;delay&quot;</span></span>
<span class="line"><span>	&quot;rtos&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&quot;stm32/hal/gpio&quot;</span></span>
<span class="line"><span>	&quot;stm32/hal/irq&quot;</span></span>
<span class="line"><span>	&quot;stm32/hal/system&quot;</span></span>
<span class="line"><span>	&quot;stm32/hal/system/timer/systick&quot;</span></span>
<span class="line"><span>	&quot;stm32/hal/tim&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var (</span></span>
<span class="line"><span>	leds  [3]gpio.Pin</span></span>
<span class="line"><span>	timer *tim.Periph</span></span>
<span class="line"><span>	ch    = make(chan int, 1)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>	system.SetupPLL(8, 1, 48/8)</span></span>
<span class="line"><span>	systick.Setup(2e6)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	gpio.A.EnableClock(false)</span></span>
<span class="line"><span>	leds[0] = gpio.A.Pin(4)</span></span>
<span class="line"><span>	leds[1] = gpio.A.Pin(5)</span></span>
<span class="line"><span>	leds[2] = gpio.A.Pin(9)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	cfg := &amp;gpio.Config{Mode: gpio.Out, Driver: gpio.OpenDrain}</span></span>
<span class="line"><span>	for _, led := range leds {</span></span>
<span class="line"><span>		led.Set()</span></span>
<span class="line"><span>		led.Setup(cfg)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	timer = tim.TIM3</span></span>
<span class="line"><span>	pclk := timer.Bus().Clock()</span></span>
<span class="line"><span>	if pclk &lt; system.AHB.Clock() {</span></span>
<span class="line"><span>		pclk *= 2</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	freq := uint(1e3) // Hz</span></span>
<span class="line"><span>	timer.EnableClock(true)</span></span>
<span class="line"><span>	timer.PSC.Store(tim.PSC(pclk/freq - 1))</span></span>
<span class="line"><span>	timer.ARR.Store(700) // ms</span></span>
<span class="line"><span>	timer.DIER.Store(tim.UIE)</span></span>
<span class="line"><span>	timer.CR1.Store(tim.CEN)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	rtos.IRQ(irq.TIM3).Enable()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func blinky(led gpio.Pin, period int) {</span></span>
<span class="line"><span>	for range ch {</span></span>
<span class="line"><span>		led.Clear()</span></span>
<span class="line"><span>		delay.Millisec(100)</span></span>
<span class="line"><span>		led.Set()</span></span>
<span class="line"><span>		delay.Millisec(period - 100)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	go blinky(leds[1], 500)</span></span>
<span class="line"><span>	blinky(leds[2], 500)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func timerISR() {</span></span>
<span class="line"><span>	timer.SR.Store(0)</span></span>
<span class="line"><span>	leds[0].Set()</span></span>
<span class="line"><span>	select {</span></span>
<span class="line"><span>	case ch &lt;- 0:</span></span>
<span class="line"><span>		// Success</span></span>
<span class="line"><span>	default:</span></span>
<span class="line"><span>		leds[0].Clear()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//c:__attribute__((section(&quot;.ISRs&quot;)))</span></span>
<span class="line"><span>var ISRs = [...]func(){</span></span>
<span class="line"><span>	irq.TIM3: timerISR,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>與之前例子相比較下的不同:</p><ol><li>添加了第三個 LED，並連接到 PA9 引腳（UART 頭的 TXD 引腳）。</li><li>時鐘（<code>TIM3</code>）作為中斷源。</li><li>新函數 <code>timerISR</code> 用來處理 <code>irq.TIM3</code> 的中斷。</li><li>新增容量為 1 的緩衝通道是為了 <code>timerISR</code> 和 <code>blinky</code> 協程之間的通信。</li><li><code>ISRs</code> 數組作為<em>中斷向量表</em>，是更大的<em>異常向量表</em>的一部分。</li><li><code>blinky</code> 中的 <code>for</code> 語句被替換成 <code>range</code> 語句。</li></ol><p>為了方便起見，所有的 LED，或者説它們的引腳，都被放在 <code>leds</code> 這個數組裏。另外，所有引腳在被配置為輸出之前，都設置為一種已知的初始狀態（高電平狀態）。</p><p>在這個例子裏，我們想讓時鐘以 1 kHz 的頻率運行。為了配置 TIM3 預分頻器，我們需要知道它的輸入時鐘頻率。通過參考手冊我們知道，輸入時鐘頻率在 <code>APBCLK = AHBCLK</code> 時，與 <code>APBCLK</code> 相同，反之等於 2 倍的 <code>APBCLK</code>。</p><p>如果 CNT 寄存器增加 1 kHz，那麼 ARR 寄存器的值等於<em>更新事件</em>（重載事件）在毫秒中的計數週期。 為了讓更新事件產生中斷，必須要設置 DIER 寄存器中的 UIE 位。CEN 位能啓動時鐘。</p><p>時鐘外設在低功耗模式下必須啓用，為了自身能在 CPU 處於休眠時保持運行: <code>timer.EnableClock(true)</code>。這在 STM32F0 中無關緊要，但對代碼可移植性卻十分重要。</p>`,7)),a("p",null,[s[33]||(s[33]=a("code",null,"timerISR",-1)),s[34]||(s[34]=n(" 函數處理 ",-1)),s[35]||(s[35]=a("code",null,"irq.TIM3",-1)),s[36]||(s[36]=n(" 的中斷請求。",-1)),s[37]||(s[37]=a("code",null,"timer.SR.Store(0)",-1)),s[38]||(s[38]=n(" 會清除 SR 寄存器裏的所有事件標誌，無效化向 ",-1)),e(p,{href:"http://infocenter.arm.com/help/topic/com.arm.doc.ddi0432c/Cihbecee.html"},{default:l(()=>[...s[32]||(s[32]=[n("NVIC",-1)])]),_:1}),s[39]||(s[39]=n(" 發出的所有中斷請求。憑藉經驗，由於中斷請求無效的延時性，需要在程序一開始馬上清除所有的中斷標誌。這避免了無意間再次調用處理。為了確保萬無一失，需要先清除標誌，再讀取，但是在我們的例子中，清除標誌就已經足夠了。",-1))]),s[70]||(s[70]=i(`<p>下面的這幾行代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>select {</span></span>
<span class="line"><span>case ch &lt;- 0:</span></span>
<span class="line"><span>	// Success</span></span>
<span class="line"><span>default:</span></span>
<span class="line"><span>	leds[0].Clear()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>是 Go 語言中，如何在通道上非阻塞地發送消息的方法。中斷處理程序無法一直等待通道中的空餘空間。如果通道已滿，則執行 <code>default</code>，開發板上的LED就會開啓，直到下一次中斷。</p><p><code>ISRs</code> 數組包含了中斷向量表。<code>//c:__attribute__((section(&quot;.ISRs&quot;)))</code> 會導致鏈接器將數組插入到 <code>.ISRs</code> 節中。</p><p><code>blinky</code> 的 <code>for</code> 循環的新寫法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for range ch {</span></span>
<span class="line"><span>	led.Clear()</span></span>
<span class="line"><span>	delay.Millisec(100)</span></span>
<span class="line"><span>	led.Set()</span></span>
<span class="line"><span>	delay.Millisec(period - 100)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>等價於：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for {</span></span>
<span class="line"><span>	_, ok := &lt;-ch</span></span>
<span class="line"><span>	if !ok {</span></span>
<span class="line"><span>		break // Channel closed.</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	led.Clear()</span></span>
<span class="line"><span>	delay.Millisec(100)</span></span>
<span class="line"><span>	led.Set()</span></span>
<span class="line"><span>	delay.Millisec(period - 100)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意，在這個例子中，我們不在意通道中收到的值，我們只對其接受到的消息感興趣。我們可以在聲明時，將通道元素類型中的 <code>int</code> 用空結構體 <code>struct{}</code> 來代替，發送消息時，用 <code>struct{}{}</code> 結構體的值代替 0，但這部分對新手來説可能會有些陌生。</p><p>讓我們來編譯一下代碼:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  11096     228     188   11512    2cf8 cortexm0.elf</span></span></code></pre></div><p>新的例子佔用了 11324 字節的 Flash 空間，比上一個例子多佔用了 1132 字節。</p>`,12)),a("p",null,[s[41]||(s[41]=n("採用現在的時序，兩個閃爍協程從通道中獲取數據的速度，比 ",-1)),s[42]||(s[42]=a("code",null,"timerISR",-1)),s[43]||(s[43]=n(" 發送數據的速度要快。所以它們在同時等待新數據，你還能觀察到 ",-1)),s[44]||(s[44]=a("code",null,"select",-1)),s[45]||(s[45]=n(" 的隨機性，這也是 ",-1)),e(p,{href:"https://golang.org/ref/spec#Select_statements"},{default:l(()=>[...s[40]||(s[40]=[n("Go 規範",-1)])]),_:1}),s[46]||(s[46]=n("所要求的。",-1))]),s[71]||(s[71]=i('<p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/channels1.png" alt="STM32F030F4P6"></p><p>開發板上的 LED 一直沒有亮起，説明通道從未出現過溢出。</p><p>我們可以加快消息發送的速度，將 <code>timer.ARR.Store(700)</code> 改為 <code>timer.ARR.Store(200)</code>。 現在 <code>timerISR</code> 每秒鐘發送 5 條消息，但是兩個接收者加起來，每秒也只能接受 4 條消息。</p><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/channels2.png" alt="STM32F030F4P6"></p><p>正如你所看到的，<code>timerISR</code> 開啓黃色 LED 燈，意味着通道上已經沒有剩餘空間了。</p><p>第一部分到這裏就結束了。你應該知道，這一部分並未展示 Go 中最重要的部分，接口。</p>',6)),a("p",null,[s[48]||(s[48]=n("協程和通道只是一些方便好用的語法。你可以用自己的代碼來替換它們，這並不容易，但也可以實現。接口是Go 語言的基礎。這是文章中 ",-1)),e(p,{href:"https://ziutek.github.io/2018/04/14/go_on_very_small_hardware2.html"},{default:l(()=>[...s[47]||(s[47]=[n("第二部分",-1)])]),_:1}),s[49]||(s[49]=n("所要提到的.",-1))]),s[72]||(s[72]=a("p",null,"在 Flash 上我們還有些剩餘空間。",-1)),s[73]||(s[73]=a("hr",null,null,-1)),a("p",null,[s[51]||(s[51]=n("via: ",-1)),e(p,{href:"https://ziutek.github.io/2018/03/30/go_on_very_small_hardware.html"},{default:l(()=>[...s[50]||(s[50]=[n("https://ziutek.github.io/2018/03/30/go_on_very_small_hardware.html",-1)])]),_:1})]),a("p",null,[s[55]||(s[55]=n("作者：",-1)),e(p,{href:"https://ziutek.github.io/"},{default:l(()=>[...s[52]||(s[52]=[n("Michał Derkacz",-1)])]),_:1}),s[56]||(s[56]=n(" 譯者：",-1)),e(p,{href:"https://github.com/wenwensnow"},{default:l(()=>[...s[53]||(s[53]=[n("wenwensnow",-1)])]),_:1}),s[57]||(s[57]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[54]||(s[54]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[60]||(s[60]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[58]||(s[58]=[n("LCTT",-1)])]),_:1}),s[61]||(s[61]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[59]||(s[59]=[n("Linux中國",-1)])]),_:1}),s[62]||(s[62]=n(" 榮譽推出",-1))])])}const S=t(c,[["render",g]]);export{y as __pageData,S as default};
