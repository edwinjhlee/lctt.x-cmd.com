import{_ as t,a0 as r,w as o,s as d,I as a,x as n,a1 as l,A as i,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"Go 語言在極小硬件上的運用（三） | LCTT x X-CMD","titleTemplate":false,"description":"Go 語言在極小硬件上的運用（三） | LCTT (202011) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Go 語言在極小硬件上的運用（三） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Go 語言在極小硬件上的運用（三） | LCTT (202011) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202011/20180503 Go on very small hardware (Part 3)","title":"Go 語言在極小硬件上的運用（三）","tag":"202011","desc":""},"relativePath":"202011/20180503 Go on very small hardware (Part 3).md","filePath":"[post].md"}'),u={name:"202011/20180503 Go on very small hardware (Part 3).md"};function g(b,s,m,h,k,f){const p=r("Link");return o(),d("div",null,[s[85]||(s[85]=a("h1",{id:"go-語言在極小硬件上的運用-三",tabindex:"-1"},[n("Go 語言在極小硬件上的運用（三） "),a("a",{class:"header-anchor",href:"#go-語言在極小硬件上的運用-三","aria-label":"Permalink to “Go 語言在極小硬件上的運用（三）”"},"​")],-1)),s[86]||(s[86]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202010/24/090026to9c9sweyrw9ww37.png",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("在本系列的 ",-1)),l(p,{href:"https://linux.cn/article-11383-1.html"},{default:i(()=>[...s[0]||(s[0]=[n("第一",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),l(p,{href:"https://linux.cn/article-12747-1.html"},{default:i(()=>[...s[1]||(s[1]=[n("第二",-1)])]),_:1}),s[4]||(s[4]=n(" 部分中討論的大多數示例都是以某種方式閃爍的 LED。起初它可能很有趣，但是一段時間後變得有些無聊。讓我們做些更有趣的事情……",-1))]),s[87]||(s[87]=a("p",null,"…讓我們點亮更多的 LED！",-1)),s[88]||(s[88]=a("p",null,[a("img",{src:"https://ziutek.github.io/images/mcu/f030-demo-board/board.jpg",alt:"STM32F030F4P6"})],-1)),s[89]||(s[89]=a("h3",{id:"ws281x-led",tabindex:"-1"},[n("WS281x LED "),a("a",{class:"header-anchor",href:"#ws281x-led","aria-label":"Permalink to “WS281x LED”"},"​")],-1)),a("p",null,[l(p,{href:"http://www.world-semi.com/solution/list-4-1.html"},{default:i(()=>[...s[5]||(s[5]=[n("WS281x",-1)])]),_:1}),s[6]||(s[6]=n(" RGB LED（及其克隆品）非常受歡迎。你可以以單個元素購買、鏈成長條或組裝成矩陣、環或其他形狀。",-1))]),s[90]||(s[90]=a("p",null,[a("img",{src:"https://ziutek.github.io/images/led/ws2812b.jpg",alt:"WS2812B"})],-1)),s[91]||(s[91]=a("p",null,[n("它們可以串聯連接，基於這個事實，你可以只用 MCU 的單個引腳就可以控制一個很長的 LED 燈條。不幸的是，它們的內部控制器使用的物理協議不能直接適用於你在 MCU 中可以找到的任何外圍設備。你必須使用 "),a("ruby",null,[n("位脈衝"),a("rt",null,"bit-banging")]),n("或以特殊方式使用可用的外設。")],-1)),a("p",null,[s[8]||(s[8]=n("哪種可用的解決方案最有效取決於同時控制的 LED 燈條數量。如果你必須驅動 4 到 16 個燈條，那麼最有效的方法是 ",-1)),l(p,{href:"http://www.martinhubacek.cz/arm/improved-stm32-ws2812b-library"},{default:i(()=>[...s[7]||(s[7]=[n("使用定時器和 DMA",-1)])]),_:1}),s[9]||(s[9]=n("（請不要忽略這篇文章末尾的鏈接）。",-1))]),s[92]||(s[92]=a("p",null,"如果只需要控制一個或兩個燈條，請使用可用的 SPI 或 UART 外設。對於 SPI，你只能在發送的一個字節中編碼兩個 WS281x 位。由於巧妙地使用了起始位和停止位，UART 允許更密集的編碼：每發送一個字節 3 位。",-1)),a("p",null,[s[12]||(s[12]=n("我在 ",-1)),l(p,{href:"http://mikrokontrolery.blogspot.com/2011/03/Diody-WS2812B-sterowanie-XMega-cz-2.html"},{default:i(()=>[...s[10]||(s[10]=[n("此站點",-1)])]),_:1}),s[13]||(s[13]=n(" 上找到了有關 UART 協議如何適用於 WS281x 協議的最佳解釋。如果你不懂波蘭語，這裏是 ",-1)),l(p,{href:"https://translate.google.pl/translate?sl=pl&tl=en&u=http://mikrokontrolery.blogspot.com/2011/03/Diody-WS2812B-sterowanie-XMega-cz-2.html"},{default:i(()=>[...s[11]||(s[11]=[n("英文翻譯",-1)])]),_:1}),s[14]||(s[14]=n("。",-1))]),a("p",null,[s[20]||(s[20]=n("基於 WS281x 的 LED 仍然是最受歡迎的，但市場上也有 SPI 控制的 LED：",-1)),l(p,{href:"http://neon-world.com/en/product.php"},{default:i(()=>[...s[15]||(s[15]=[n("APA102",-1)])]),_:1}),s[21]||(s[21]=n("、",-1)),l(p,{href:"http://www.normandled.com/index.php/Product/view/id/800.html"},{default:i(()=>[...s[16]||(s[16]=[n("SK9822",-1)])]),_:1}),s[22]||(s[22]=n("。關於它們的三篇有趣的文章在這裏：",-1)),l(p,{href:"https://cpldcpu.wordpress.com/2014/08/27/apa102/"},{default:i(()=>[...s[17]||(s[17]=[n("1",-1)])]),_:1}),s[23]||(s[23]=n("、",-1)),l(p,{href:"https://cpldcpu.wordpress.com/2014/11/30/understanding-the-apa102-superled/"},{default:i(()=>[...s[18]||(s[18]=[n("2",-1)])]),_:1}),s[24]||(s[24]=n("、",-1)),l(p,{href:"https://cpldcpu.wordpress.com/2016/12/13/sk9822-a-clone-of-the-apa102/"},{default:i(()=>[...s[19]||(s[19]=[n("3",-1)])]),_:1}),s[25]||(s[25]=n("。",-1))]),s[93]||(s[93]=a("h3",{id:"led-環",tabindex:"-1"},[n("LED 環 "),a("a",{class:"header-anchor",href:"#led-環","aria-label":"Permalink to “LED 環”"},"​")],-1)),s[94]||(s[94]=a("p",null,"市場上有許多基於 WS2812 的環。我有一個這樣的：",-1)),s[95]||(s[95]=a("p",null,[a("img",{src:"https://ziutek.github.io/images/led/rgbring.jpg",alt:"WS2812B"})],-1)),s[96]||(s[96]=a("p",null,"它具有 24 個可單獨尋址的 RGB LED（WS2812B），並暴露出四個端子：GND、5V、DI 和 DO。通過將 DI（數據輸入）端子連接到上一個的 DO（數據輸出）端子，可以鏈接更多的環或其他基於 WS2812 的東西。",-1)),s[97]||(s[97]=a("p",null,"讓我們將這個環連接到我們的 STM32F030 板上。我們將使用基於 UART 的驅動程序，因此 DI 應連接到 UART 接頭連接器上的 TXD 引腳。 WS2812B LED 需要至少 3.5V 的電源。 24 個 LED 會消耗大量電流，因此在編程/調試期間，最好將環上的 GND 和 5V 端子直接連接到 ST-LINK 編程器上可用的 GND 和 5V 引腳：",-1)),s[98]||(s[98]=a("p",null,[a("img",{src:"https://ziutek.github.io/images/led/ring-stlink-f030.jpg",alt:"WS2812B"})],-1)),a("p",null,[s[27]||(s[27]=n("我們的 STM32F030F4P6 MCU 和整個 STM32 F0、F3、F7、L4 系列具有 F1、F4、L1 MCU 不具備的一項重要功能：它可以反轉 UART 信號，因此我們可以將環直接連接到 UART TXD 引腳。如果你不知道我們需要這種反轉，那麼你可能沒有讀過我上面提到的 ",-1)),l(p,{href:"https://translate.google.pl/translate?sl=pl&tl=en&u=http://mikrokontrolery.blogspot.com/2011/03/Diody-WS2812B-sterowanie-XMega-cz-2.html"},{default:i(()=>[...s[26]||(s[26]=[n("文章",-1)])]),_:1}),s[28]||(s[28]=n("。",-1))]),a("p",null,[s[33]||(s[33]=n("因此，你不能以這種方式使用流行的 ",-1)),l(p,{href:"https://jeelabs.org/article/1649a/"},{default:i(()=>[...s[29]||(s[29]=[n("Blue Pill",-1)])]),_:1}),s[34]||(s[34]=n(" 或 ",-1)),l(p,{href:"http://www.st.com/en/evaluation-tools/stm32f4discovery.html"},{default:i(()=>[...s[30]||(s[30]=[n("STM32F4-DISCOVERY",-1)])]),_:1}),s[35]||(s[35]=n("。使用其 SPI 外設或外部反相器。有關使用 SPI 的 NUCLEO-F411RE，請參見 ",-1)),l(p,{href:"https://github.com/ziutek/emgo/tree/master/egpath/src/stm32/examples/minidev/treelights"},{default:i(()=>[...s[31]||(s[31]=[n("聖誕樹燈",-1)])]),_:1}),s[36]||(s[36]=n(" 項目作為 UART + 逆變器的示例或 ",-1)),l(p,{href:"https://github.com/ziutek/emgo/tree/master/egpath/src/stm32/examples/nucleo-f411re/ws2812"},{default:i(()=>[...s[32]||(s[32]=[n("WS2812示例",-1)])]),_:1}),s[37]||(s[37]=n("。",-1))]),s[99]||(s[99]=e(`<p>順便説一下，大多數 DISCOVERY 板可能還有一個問題：它們在 VDD = 3V 而不是 3.3V 的情況下工作。 對於高 DI，WS281x 至少要求電源電壓 * 0.7。如果是 5V 電源，則為 3.5V；如果是 4.7V 電源，則為 3.3V；可在 DISCOVERY 的 5V 引腳上找到。如你所見，即使在我們的情況下，第一個 LED 的工作電壓也低於規格 0.2V。對於 DISCOVERY 板，如果供電 4.7V，它將工作在低於規格的 0.3V 下；如果供電 5V，它將工作在低於規格 0.5V 下。</p><p>讓我們結束這段冗長的介紹並轉到代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;delay&quot;</span></span>
<span class="line"><span>    &quot;math/rand&quot;</span></span>
<span class="line"><span>    &quot;rtos&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;led&quot;</span></span>
<span class="line"><span>    &quot;led/ws281x/wsuart&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;stm32/hal/dma&quot;</span></span>
<span class="line"><span>    &quot;stm32/hal/gpio&quot;</span></span>
<span class="line"><span>    &quot;stm32/hal/irq&quot;</span></span>
<span class="line"><span>    &quot;stm32/hal/system&quot;</span></span>
<span class="line"><span>    &quot;stm32/hal/system/timer/systick&quot;</span></span>
<span class="line"><span>    &quot;stm32/hal/usart&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var tts *usart.Driver</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>    system.SetupPLL(8, 1, 48/8)</span></span>
<span class="line"><span>    systick.Setup(2e6)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    gpio.A.EnableClock(true)</span></span>
<span class="line"><span>    tx := gpio.A.Pin(9)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    tx.Setup(&amp;gpio.Config{Mode: gpio.Alt})</span></span>
<span class="line"><span>    tx.SetAltFunc(gpio.USART1_AF1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    d := dma.DMA1</span></span>
<span class="line"><span>    d.EnableClock(true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    tts = usart.NewDriver(usart.USART1, d.Channel(2, 0), nil, nil)</span></span>
<span class="line"><span>    tts.Periph().EnableClock(true)</span></span>
<span class="line"><span>    tts.Periph().SetBaudRate(3000000000 / 1390)</span></span>
<span class="line"><span>    tts.Periph().SetConf2(usart.TxInv)</span></span>
<span class="line"><span>    tts.Periph().Enable()</span></span>
<span class="line"><span>    tts.EnableTx()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rtos.IRQ(irq.USART1).Enable()</span></span>
<span class="line"><span>    rtos.IRQ(irq.DMA1_Channel2_3).Enable()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    var rnd rand.XorShift64</span></span>
<span class="line"><span>    rnd.Seed(1)</span></span>
<span class="line"><span>    rgb := wsuart.GRB</span></span>
<span class="line"><span>    strip := wsuart.Make(24)</span></span>
<span class="line"><span>    black := rgb.Pixel(0)</span></span>
<span class="line"><span>    for {</span></span>
<span class="line"><span>        c := led.Color(rnd.Uint32()).Scale(127)</span></span>
<span class="line"><span>        pixel := rgb.Pixel(c)</span></span>
<span class="line"><span>        for i := range strip {</span></span>
<span class="line"><span>            strip[i] = pixel</span></span>
<span class="line"><span>            tts.Write(strip.Bytes())</span></span>
<span class="line"><span>            delay.Millisec(40)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        for i := range strip {</span></span>
<span class="line"><span>            strip[i] = black</span></span>
<span class="line"><span>            tts.Write(strip.Bytes())</span></span>
<span class="line"><span>            delay.Millisec(20)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func ttsISR() {</span></span>
<span class="line"><span>    tts.ISR()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func ttsDMAISR() {</span></span>
<span class="line"><span>    tts.TxDMAISR()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//c:__attribute__((section(&quot;.ISRs&quot;)))</span></span>
<span class="line"><span>var ISRs = [...]func(){</span></span>
<span class="line"><span>    irq.USART1:          ttsISR,</span></span>
<span class="line"><span>    irq.DMA1_Channel2_3: ttsDMAISR,</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="導入部分" tabindex="-1">導入部分 <a class="header-anchor" href="#導入部分" aria-label="Permalink to “導入部分”">​</a></h4><p>與前面的示例相比，導入部分中的新內容是 <code>rand/math</code> 包和帶有 <code>led/ws281x</code> 子樹的 <code>led</code> 包。 <code>led</code> 包本身包含 <code>Color</code> 類型的定義。 <code>led/ws281x/wsuart</code> 定義了 <code>ColorOrder</code>、<code>Pixel</code> 和 <code>Strip</code> 類型。</p>`,5)),a("p",null,[s[39]||(s[39]=n("我想知道如何使用 ",-1)),s[40]||(s[40]=a("code",null,"image/color",-1)),s[41]||(s[41]=n(" 中的 ",-1)),s[42]||(s[42]=a("code",null,"Color",-1)),s[43]||(s[43]=n(" 或 ",-1)),s[44]||(s[44]=a("code",null,"RGBA",-1)),s[45]||(s[45]=n(" 類型，以及如何以它將實現 ",-1)),s[46]||(s[46]=a("code",null,"image.Image",-1)),s[47]||(s[47]=n(" 接口的方式定義 ",-1)),s[48]||(s[48]=a("code",null,"Strip",-1)),s[49]||(s[49]=n("。 但是由於使用了 ",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Gamma_correction"},{default:i(()=>[...s[38]||(s[38]=[n("gamma 校正",-1)])]),_:1}),s[50]||(s[50]=n(" 和 大開銷的 ",-1)),s[51]||(s[51]=a("code",null,"color/draw",-1)),s[52]||(s[52]=n(" 包，我以簡單的方式結束：",-1))]),s[100]||(s[100]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type Color uint32</span></span>
<span class="line"><span>type Strip []Pixel</span></span></code></pre></div><p>使用一些有用的方法。然而，這種情況在未來可能會改變。</p><h4 id="init-函數" tabindex="-1">init 函數 <a class="header-anchor" href="#init-函數" aria-label="Permalink to “init 函數”">​</a></h4><p><code>init</code> 函數沒有太多新穎之處。 UART 波特率從 115200 更改為 3000000000/1390 ≈ 2158273，相當於每個 WS2812 位 1390 納秒。 CR2 寄存器中的 TxInv 位設置為反轉 TXD 信號。</p><h4 id="main-函數" tabindex="-1">main 函數 <a class="header-anchor" href="#main-函數" aria-label="Permalink to “main 函數”">​</a></h4>`,5)),a("p",null,[s[54]||(s[54]=a("code",null,"XorShift64",-1)),s[55]||(s[55]=n(" 偽隨機數生成器用於生成隨機顏色。 ",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Xorshift"},{default:i(()=>[...s[53]||(s[53]=[n("XORSHIFT",-1)])]),_:1}),s[56]||(s[56]=n(" 是目前由 ",-1)),s[57]||(s[57]=a("code",null,"math/rand",-1)),s[58]||(s[58]=n(" 包實現的唯一算法。你必須使用帶有非零參數的 ",-1)),s[59]||(s[59]=a("code",null,"Seed",-1)),s[60]||(s[60]=n(" 方法顯式初始化它。",-1))]),s[101]||(s[101]=e(`<p><code>rgb</code> 變量的類型為 <code>wsuart.ColorOrder</code>，並設置為 WS2812 使用的 GRB 顏色順序（WS2811 使用 RGB 順序）。然後用於將顏色轉換為像素。</p><p><code>wsuart.Make(24)</code> 創建 24 像素的初始化條帶。它等效於：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>strip := make(wsuart.Strip, 24)</span></span>
<span class="line"><span>strip.Clear()</span></span></code></pre></div><p>其餘代碼使用隨機顏色繪製類似於 “Please Wait…” 微調器的內容。</p><p><code>strip</code> 切片充當幀緩衝區。 <code>tts.Write(strip.Bytes())</code> 將幀緩衝區的內容發送到環。</p><h4 id="中斷" tabindex="-1">中斷 <a class="header-anchor" href="#中斷" aria-label="Permalink to “中斷”">​</a></h4>`,6)),a("p",null,[s[62]||(s[62]=n("該程序由處理中斷的代碼組成，與先前的 ",-1)),l(p,{href:"https://ziutek.github.io/2018/04/14/go_on_very_small_hardware2.html#uart"},{default:i(()=>[...s[61]||(s[61]=[n("UART 示例",-1)])]),_:1}),s[63]||(s[63]=n(" 中的代碼相同。",-1))]),s[102]||(s[102]=e(`<p>讓我們編譯並運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  14088     240     204   14532    38c4 cortexm0.elf</span></span>
<span class="line"><span>$ openocd -d0 -f interface/stlink.cfg -f target/stm32f0x.cfg -c &#39;init; program cortexm0.elf; reset run; exit&#39;</span></span></code></pre></div><p>我跳過了 <code>openocd</code> 的輸出。下面的視頻顯示了該程序的工作原理：</p><p><img src="https://ziutek.github.io/videos/rgbspinner.mp4" alt="video"></p><h3 id="讓我們做些有用的事情" tabindex="-1">讓我們做些有用的事情... <a class="header-anchor" href="#讓我們做些有用的事情" aria-label="Permalink to “讓我們做些有用的事情...”">​</a></h3>`,5)),a("p",null,[s[65]||(s[65]=n("在 ",-1)),l(p,{href:"https://linux.cn/article-11383-1.html"},{default:i(()=>[...s[64]||(s[64]=[n("第一部分",-1)])]),_:1}),s[66]||(s[66]=n(" 的開頭，我曾問過：“Go 能深入到多低層，而還能做一些有用的事情？”。 我們的 MCU 實際上是一種低端設備（8 比特的人可能會不同意我的看法），但到目前為止，我們還沒有做任何有用的事情。",-1))]),s[103]||(s[103]=e(`<p>所以... 讓我們做些有用的事情... 讓我們做個時鐘！</p><p>在互聯網上有許多由 RGB LED 構成的時鐘示例。讓我們用我們的小板子和 RGB 環製作自己的時鐘。我們按照下面的描述更改先前的代碼。</p><h4 id="導入部分-1" tabindex="-1">導入部分 <a class="header-anchor" href="#導入部分-1" aria-label="Permalink to “導入部分”">​</a></h4><p>刪除 <code>math/rand</code> 包，然後添加 <code>stm32/hal/exti</code>。</p><h4 id="全局變量" tabindex="-1">全局變量 <a class="header-anchor" href="#全局變量" aria-label="Permalink to “全局變量”">​</a></h4><p>添加兩個新的全局變量：<code>btn</code> 和 <code>btnev</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var (</span></span>
<span class="line"><span>    tts   *usart.Driver</span></span>
<span class="line"><span>    btn   gpio.Pin</span></span>
<span class="line"><span>    btnev rtos.EventFlag</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>它們將用來處理那些用於設置時鐘的 “按鈕”。我們的板子除了重置之外沒有其他按鈕，但是如果沒有它，我們仍然可以通過某種方式進行管理。</p><h4 id="init-函數-1" tabindex="-1">init 函數 <a class="header-anchor" href="#init-函數-1" aria-label="Permalink to “init 函數”">​</a></h4><p>將這段代碼添加到 <code>init</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>btn = gpio.A.Pin(4)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>btn.Setup(&amp;gpio.Config{Mode: gpio.In, Pull: gpio.PullUp})</span></span>
<span class="line"><span>ei := exti.Lines(btn.Mask())</span></span>
<span class="line"><span>ei.Connect(btn.Port())</span></span>
<span class="line"><span>ei.EnableFallTrig()</span></span>
<span class="line"><span>ei.EnableRiseTrig()</span></span>
<span class="line"><span>ei.EnableIRQ()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rtos.IRQ(irq.EXTI4_15).Enable()</span></span></code></pre></div><p>在內部<ruby>上拉電阻<rt>pull-up resistor</rt></ruby>啓用的情況下，將 PA4 引腳配置為輸入。它已連接至板載 LED，但這不會妨礙任何事情。更重要的是它位於 GND 引腳旁邊，所以我們可以使用任何金屬物體來模擬按鈕並設置時鐘。作為獎勵，我們還有來自板載 LED 的其他反饋。</p><p>我們使用 EXTI 外設來跟蹤 PA4 狀態。它被配置為在發生任何更改時都會產生中斷。</p><h4 id="btnwait-函數" tabindex="-1">btnWait 函數 <a class="header-anchor" href="#btnwait-函數" aria-label="Permalink to “btnWait 函數”">​</a></h4><p>定義一個新的輔助函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func btnWait(state int, deadline int64) bool {</span></span>
<span class="line"><span>    for btn.Load() != state {</span></span>
<span class="line"><span>        if !btnev.Wait(1, deadline) {</span></span>
<span class="line"><span>            return false // timeout</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        btnev.Reset(0)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    delay.Millisec(50) // debouncing</span></span>
<span class="line"><span>    return true</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>它等待 “按鈕” 引腳上的指定狀態，但只等到最後期限出現。這是稍微改進的輪詢代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for btn.Load() != state {</span></span>
<span class="line"><span>    if rtos.Nanosec() &gt;= deadline {</span></span>
<span class="line"><span>        // timeout</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們的 <code>btnWait</code> 函數不是忙於等待 <code>state</code> 或 <code>deadline</code>，而是使用 <code>rtos.EventFlag</code> 類型的 <code>btnev</code> 變量休眠，直到有事情發生。你當然可以使用通道而不是 <code>rtos.EventFlag</code>，但是後者便宜得多。</p><h4 id="main-函數-1" tabindex="-1">main 函數 <a class="header-anchor" href="#main-函數-1" aria-label="Permalink to “main 函數”">​</a></h4><p>我們需要全新的 <code>main</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>    rgb := wsuart.GRB</span></span>
<span class="line"><span>    strip := wsuart.Make(24)</span></span>
<span class="line"><span>    ds := 4 * 60 / len(strip) // Interval between LEDs (quarter-seconds).</span></span>
<span class="line"><span>    adjust := 0</span></span>
<span class="line"><span>    adjspeed := ds</span></span>
<span class="line"><span>    for {</span></span>
<span class="line"><span>        qs := int(rtos.Nanosec() / 25e7) // Quarter-seconds since reset.</span></span>
<span class="line"><span>        qa := qs + adjust</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        qa %= 12 * 3600 * 4 // Quarter-seconds since 0:00 or 12:00.</span></span>
<span class="line"><span>        hi := len(strip) * qa / (12 * 3600 * 4)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        qa %= 3600 * 4 // Quarter-seconds in the current hour.</span></span>
<span class="line"><span>        mi := len(strip) * qa / (3600 * 4)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        qa %= 60 * 4 // Quarter-seconds in the current minute.</span></span>
<span class="line"><span>        si := len(strip) * qa / (60 * 4)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        hc := led.Color(0x550000)</span></span>
<span class="line"><span>        mc := led.Color(0x005500)</span></span>
<span class="line"><span>        sc := led.Color(0x000055)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Blend the colors if the hands of the clock overlap.</span></span>
<span class="line"><span>        if hi == mi {</span></span>
<span class="line"><span>            hc |= mc</span></span>
<span class="line"><span>            mc = hc</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if mi == si {</span></span>
<span class="line"><span>            mc |= sc</span></span>
<span class="line"><span>            sc = mc</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if si == hi {</span></span>
<span class="line"><span>            sc |= hc</span></span>
<span class="line"><span>            hc = sc</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Draw the clock and write to the ring.</span></span>
<span class="line"><span>        strip.Clear()</span></span>
<span class="line"><span>        strip[hi] = rgb.Pixel(hc)</span></span>
<span class="line"><span>        strip[mi] = rgb.Pixel(mc)</span></span>
<span class="line"><span>        strip[si] = rgb.Pixel(sc)</span></span>
<span class="line"><span>        tts.Write(strip.Bytes())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Sleep until the button pressed or the second hand should be moved.</span></span>
<span class="line"><span>        if btnWait(0, int64(qs+ds)*25e7) {</span></span>
<span class="line"><span>            adjust += adjspeed</span></span>
<span class="line"><span>            // Sleep until the button is released or timeout.</span></span>
<span class="line"><span>            if !btnWait(1, rtos.Nanosec()+100e6) {</span></span>
<span class="line"><span>                if adjspeed &lt; 5*60*4 {</span></span>
<span class="line"><span>                    adjspeed += 2 * ds</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            adjspeed = ds</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們使用 <code>rtos.Nanosec</code> 函數代替 <code>time.Now</code> 來獲取當前時間。這樣可以節省大量的閃存，但也使我們的時鐘變成了不知道日、月、年的老式設備，最糟糕的是它無法處理夏令時的變化。</p><p>我們的環有 24 個 LED，因此秒針的顯示精度可以達到 2.5 秒。為了不犧牲這種精度並獲得流暢的運行效果，我們使用 1/4 秒作為基準間隔。半秒就足夠了，但四分之一秒更準確，而且與 16 和 48 個 LED 配合使用也很好。</p><p>紅色、綠色和藍色分別用於時針、分針和秒針。這允許我們使用簡單的“邏輯或操作”進行顏色混合。我們 <code>Color.Blend</code> 方法可以混合任意顏色，但是我們閃存不多，所以我們選擇最簡單的解決方案。</p><p>我們只有在秒針移動時才重畫時鐘。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>btnWait(0, int64(qs+ds)*25e7)</span></span></code></pre></div><p>上面的這行代碼等待的正是那一刻，或者是按鈕的按下。</p><p>每按一下按鈕就會把時鐘向前調一調。按住按鈕一段時間會加速調整。</p><h4 id="中斷-1" tabindex="-1">中斷 <a class="header-anchor" href="#中斷-1" aria-label="Permalink to “中斷”">​</a></h4><p>定義新的中斷處理程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func exti4_15ISR() {</span></span>
<span class="line"><span>    pending := exti.Pending() &amp; 0xFFF0</span></span>
<span class="line"><span>    pending.ClearPending()</span></span>
<span class="line"><span>    if pending&amp;exti.Lines(btn.Mask()) != 0 {</span></span>
<span class="line"><span>        btnev.Signal(1)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>並將 <code>irq.EXTI4_15: exti4_15ISR</code> 條目添加到 ISR 數組。</p><p>該處理程序（或中斷服務程序）處理 EXTI4_15 IRQ。 Cortex-M0 CPU 支持的 IRQ 明顯少於其較大的同類兄弟處理器，因此你經常可以看到一個 IRQ 被多箇中斷源共享。在我們的例子中，一個 IRQ 由 12 個 EXTI 線共享。</p><p>exti4_15ISR 讀取所有掛起的位，並從中選擇 12 個更高的有效位。接下來，它清除 EXTI 中選中的位並開始處理它們。在我們的例子中，僅檢查第 4 位。 <code>btnev.Signal(1)</code> 引發 <code>btnev.Wait(1, deadline)</code> 喚醒並返回 <code>true</code>。</p>`,35)),a("p",null,[s[68]||(s[68]=n("你可以在 ",-1)),l(p,{href:"https://github.com/ziutek/emgo/tree/master/egpath/src/stm32/examples/f030-demo-board/ws2812-clock"},{default:i(()=>[...s[67]||(s[67]=[n("Github",-1)])]),_:1}),s[69]||(s[69]=n(" 上找到完整的代碼。讓我們來編譯它：",-1))]),s[104]||(s[104]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  15960     240     216   16416    4020 cortexm0.elf</span></span></code></pre></div><p>這裏所有的改進只得到 184 個字節。讓我們再次重新構建所有內容，但這次在 typeinfo 中不使用任何類型和字段名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd $HOME/emgo</span></span>
<span class="line"><span>$ ./clean.sh</span></span>
<span class="line"><span>$ cd $HOME/firstemgo</span></span>
<span class="line"><span>$ egc -nf -nt</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  15120     240     216   15576    3cd8 cortexm0.elf</span></span></code></pre></div><p>現在，有了千字節的空閒空間，你可以改進一些東西。讓我們看看它是如何工作的：</p><p><img src="https://ziutek.github.io/videos/rgbclock.mp4" alt="video"></p><p>我不知道我是怎麼精確打到 3:00 的！？</p><p>以上就是所有內容！在第 4 部分（本系列的結束）中，我們將嘗試在 LCD 上顯示一些內容。（LCTT 譯註：然而爛尾了，第三篇寫於 2018 年，整個Blog當年就停更了。）</p><hr>`,8)),a("p",null,[s[71]||(s[71]=n("via: ",-1)),l(p,{href:"https://ziutek.github.io/2018/05/03/go_on_very_small_hardware3.html"},{default:i(()=>[...s[70]||(s[70]=[n("https://ziutek.github.io/2018/05/03/go_on_very_small_hardware3.html",-1)])]),_:1})]),a("p",null,[s[76]||(s[76]=n("作者：",-1)),l(p,{href:"https://ziutek.github.io"},{default:i(()=>[...s[72]||(s[72]=[n("Michał Derkacz",-1)])]),_:1}),s[77]||(s[77]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[73]||(s[73]=[n("lujun9972",-1)])]),_:1}),s[78]||(s[78]=n(" 譯者：",-1)),l(p,{href:"https://github.com/gxlct008"},{default:i(()=>[...s[74]||(s[74]=[n("gxlct008",-1)])]),_:1}),s[79]||(s[79]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[75]||(s[75]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[82]||(s[82]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[80]||(s[80]=[n("LCTT",-1)])]),_:1}),s[83]||(s[83]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:i(()=>[...s[81]||(s[81]=[n("Linux中國",-1)])]),_:1}),s[84]||(s[84]=n(" 榮譽推出",-1))])])}const T=t(u,[["render",g]]);export{S as __pageData,T as default};
