import{_ as t,a0 as o,w as r,s as c,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"Go 語言在極小硬件上的運用（二） | LCTT x X-CMD","titleTemplate":false,"description":"Go 語言在極小硬件上的運用（二） | LCTT (202010) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Go 語言在極小硬件上的運用（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Go 語言在極小硬件上的運用（二） | LCTT (202010) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202010/20180414 Go on very small hardware Part 2","title":"Go 語言在極小硬件上的運用（二）","tag":"202010","desc":""},"relativePath":"202010/20180414 Go on very small hardware Part 2.md","filePath":"[post].md"}'),d={name:"202010/20180414 Go on very small hardware Part 2.md"};function g(u,s,h,b,k,f){const p=o("Link");return r(),c("div",null,[s[89]||(s[89]=a("h1",{id:"go-語言在極小硬件上的運用-二",tabindex:"-1"},[n("Go 語言在極小硬件上的運用（二） "),a("a",{class:"header-anchor",href:"#go-語言在極小硬件上的運用-二","aria-label":"Permalink to “Go 語言在極小硬件上的運用（二）”"},"​")],-1)),s[90]||(s[90]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201909/24/210256yihkuy8kcigugr2h.png",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("在本文的 ",-1)),e(p,{href:"https://linux.cn/article-11383-1.html"},{default:l(()=>[...s[0]||(s[0]=[n("第一部分",-1)])]),_:1}),s[2]||(s[2]=n(" 的結尾，我承諾要寫關於接口的內容。我不想在這裏寫有關接口或完整或簡短的講義。相反，我將展示一個簡單的示例，來説明如何定義和使用接口，以及如何利用無處不在的 ",-1)),s[3]||(s[3]=a("code",null,"io.Writer",-1)),s[4]||(s[4]=n(" 接口。還有一些關於",-1)),s[5]||(s[5]=a("ruby",null,[n("反射"),a("rt",null,"reflection")],-1)),s[6]||(s[6]=n("和",-1)),s[7]||(s[7]=a("ruby",null,[n("半主機"),a("rt",null,"semihosting")],-1)),s[8]||(s[8]=n("的內容。",-1))]),s[91]||(s[91]=a("p",null,[a("img",{src:"https://ziutek.github.io/images/mcu/f030-demo-board/board.jpg",alt:"STM32F030F4P6"})],-1)),a("p",null,[s[11]||(s[11]=n("接口是 Go 語言的重要組成部分。如果你想了解更多有關它們的信息，我建議你閲讀《",-1)),e(p,{href:"https://golang.org/doc/effective_go.html#interfaces"},{default:l(()=>[...s[9]||(s[9]=[n("高效的 Go 編程",-1)])]),_:1}),s[12]||(s[12]=n("》 和 ",-1)),e(p,{href:"https://research.swtch.com/interfaces"},{default:l(()=>[...s[10]||(s[10]=[n("Russ Cox 的文章",-1)])]),_:1}),s[13]||(s[13]=n("。",-1))]),s[92]||(s[92]=i(`<h3 id="併發-blinky-–-回顧" tabindex="-1">併發 Blinky – 回顧 <a class="header-anchor" href="#併發-blinky-–-回顧" aria-label="Permalink to “併發 Blinky – 回顧”">​</a></h3><p>當你閲讀前面示例的代碼時，你可能會注意到一中打開或關閉 LED 的反直覺方式。 <code>Set</code> 方法用於關閉 LED，<code>Clear</code> 方法用於打開 LED。這是由於在 <ruby>漏極開路配置<rt>open-drain configuration</rt></ruby> 下驅動了 LED。我們可以做些什麼來減少代碼的混亂？讓我們用 <code>On</code> 和 <code>Off</code> 方法來定義 <code>LED</code> 類型：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type LED struct {</span></span>
<span class="line"><span>    pin gpio.Pin</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led LED) On() {</span></span>
<span class="line"><span>    led.pin.Clear()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led LED) Off() {</span></span>
<span class="line"><span>    led.pin.Set()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>現在我們可以簡單地調用 <code>led.On()</code> 和 <code>led.Off()</code>，這不會再引起任何疑惑了。</p><p>在前面的所有示例中，我都嘗試使用相同的 <ruby>漏極開路配置<rt>open-drain configuration</rt></ruby>來避免代碼複雜化。但是在最後一個示例中，對於我來説，將第三個 LED 連接到 GND 和 PA3 引腳之間並將 PA3 配置為<ruby>推輓模式<rt>push-pull mode</rt></ruby>會更容易。下一個示例將使用以此方式連接的 LED。</p><p>但是我們的新 <code>LED</code> 類型不支持推輓配置，實際上，我們應該將其稱為 <code>OpenDrainLED</code>，並定義另一個類型 <code>PushPullLED</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type PushPullLED struct {</span></span>
<span class="line"><span>    pin gpio.Pin</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led PushPullLED) On() {</span></span>
<span class="line"><span>    led.pin.Set()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led PushPullLED) Off() {</span></span>
<span class="line"><span>    led.pin.Clear()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>請注意，這兩種類型都具有相同的方法，它們的工作方式也相同。如果在 LED 上運行的代碼可以同時使用這兩種類型，而不必注意當前使用的是哪種類型，那就太好了。 接口類型可以提供幫助：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;delay&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;stm32/hal/gpio&quot;</span></span>
<span class="line"><span>    &quot;stm32/hal/system&quot;</span></span>
<span class="line"><span>    &quot;stm32/hal/system/timer/systick&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type LED interface {</span></span>
<span class="line"><span>    On()</span></span>
<span class="line"><span>    Off()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type PushPullLED struct{ pin gpio.Pin }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led PushPullLED) On()  {</span></span>
<span class="line"><span>    led.pin.Set()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led PushPullLED) Off() {</span></span>
<span class="line"><span>    led.pin.Clear()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func MakePushPullLED(pin gpio.Pin) PushPullLED {</span></span>
<span class="line"><span>    pin.Setup(&amp;gpio.Config{Mode: gpio.Out, Driver: gpio.PushPull})</span></span>
<span class="line"><span>    return PushPullLED{pin}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type OpenDrainLED struct{ pin gpio.Pin }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led OpenDrainLED) On()  {</span></span>
<span class="line"><span>    led.pin.Clear()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led OpenDrainLED) Off() {</span></span>
<span class="line"><span>    led.pin.Set()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func MakeOpenDrainLED(pin gpio.Pin) OpenDrainLED {</span></span>
<span class="line"><span>    pin.Setup(&amp;gpio.Config{Mode: gpio.Out, Driver: gpio.OpenDrain})</span></span>
<span class="line"><span>    return OpenDrainLED{pin}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var led1, led2 LED</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>    system.SetupPLL(8, 1, 48/8)</span></span>
<span class="line"><span>    systick.Setup(2e6)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    gpio.A.EnableClock(false)</span></span>
<span class="line"><span>    led1 = MakeOpenDrainLED(gpio.A.Pin(4))</span></span>
<span class="line"><span>    led2 = MakePushPullLED(gpio.A.Pin(3))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func blinky(led LED, period int) {</span></span>
<span class="line"><span>    for {</span></span>
<span class="line"><span>        led.On()</span></span>
<span class="line"><span>        delay.Millisec(100)</span></span>
<span class="line"><span>        led.Off()</span></span>
<span class="line"><span>        delay.Millisec(period - 100)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    go blinky(led1, 500)</span></span>
<span class="line"><span>    blinky(led2, 1000)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們定義了 <code>LED</code> 接口，它有兩個方法： <code>On</code> 和 <code>Off</code>。 <code>PushPullLED</code> 和 <code>OpenDrainLED</code> 類型代表兩種驅動 LED 的方式。我們還定義了兩個用作構造函數的 <code>Make*LED</code> 函數。這兩種類型都實現了 <code>LED</code> 接口，因此可以將這些類型的值賦給 <code>LED</code> 類型的變量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>led1 = MakeOpenDrainLED(gpio.A.Pin(4))</span></span>
<span class="line"><span>led2 = MakePushPullLED(gpio.A.Pin(3))</span></span></code></pre></div><p>在這種情況下，<ruby>可賦值性<rt>assignability</rt></ruby>在編譯時檢查。賦值後，<code>led1</code> 變量包含一個 <code>OpenDrainLED{gpio.A.Pin(4)}</code>，以及一個指向 <code>OpenDrainLED</code> 類型的方法集的指針。 <code>led1.On()</code> 調用大致對應於以下 C 代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>led1.methods-&gt;On(led1.value)</span></span></code></pre></div><p>如你所見，如果僅考慮函數調用的開銷，這是相當廉價的抽象。</p><p>但是，對接口的任何賦值都會導致包含有關已賦值類型的大量信息。對於由許多其他類型組成的複雜類型，可能會有很多信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  10356     196     212   10764    2a0c cortexm0.elf</span></span></code></pre></div>`,16)),a("p",null,[s[15]||(s[15]=n("如果我們不使用 ",-1)),e(p,{href:"https://blog.golang.org/laws-of-reflection"},{default:l(()=>[...s[14]||(s[14]=[n("反射",-1)])]),_:1}),s[16]||(s[16]=n("，可以通過避免包含類型和結構字段的名稱來節省一些字節：",-1))]),s[93]||(s[93]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc -nf -nt</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  10312     196     212   10720    29e0 cortexm0.elf</span></span></code></pre></div><p>生成的二進制文件仍然包含一些有關類型的必要信息和關於所有導出方法（帶有名稱）的完整信息。在運行時，主要是當你將存儲在接口變量中的一個值賦值給任何其他變量時，需要此信息來檢查可賦值性。</p><p>我們還可以通過重新編譯所導入的包來刪除它們的類型和字段名稱：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd $HOME/emgo</span></span>
<span class="line"><span>$ ./clean.sh</span></span>
<span class="line"><span>$ cd $HOME/firstemgo</span></span>
<span class="line"><span>$ egc -nf -nt</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  10272     196     212   10680    29b8 cortexm0.elf</span></span></code></pre></div>`,4)),a("p",null,[s[18]||(s[18]=n("讓我們加載這個程序，看看它是否按預期工作。這一次我們將使用 ",-1)),e(p,{href:"https://github.com/texane/stlink"},{default:l(()=>[...s[17]||(s[17]=[n("st-flash",-1)])]),_:1}),s[19]||(s[19]=n(" 命令：",-1))]),s[94]||(s[94]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ arm-none-eabi-objcopy -O binary cortexm0.elf cortexm0.bin</span></span>
<span class="line"><span>$ st-flash write cortexm0.bin 0x8000000</span></span>
<span class="line"><span>st-flash 1.4.0-33-gd76e3c7</span></span>
<span class="line"><span>2018-04-10T22:04:34 INFO usb.c: -- exit_dfu_mode</span></span>
<span class="line"><span>2018-04-10T22:04:34 INFO common.c: Loading device parameters....</span></span>
<span class="line"><span>2018-04-10T22:04:34 INFO common.c: Device connected is: F0 small device, id 0x10006444</span></span>
<span class="line"><span>2018-04-10T22:04:34 INFO common.c: SRAM size: 0x1000 bytes (4 KiB), Flash: 0x4000 bytes (16 KiB) in pages of 1024 bytes</span></span>
<span class="line"><span>2018-04-10T22:04:34 INFO common.c: Attempting to write 10468 (0x28e4) bytes to stm32 address: 134217728 (0x8000000)</span></span>
<span class="line"><span>Flash page at addr: 0x08002800 erased</span></span>
<span class="line"><span>2018-04-10T22:04:34 INFO common.c: Finished erasing 11 pages of 1024 (0x400) bytes</span></span>
<span class="line"><span>2018-04-10T22:04:34 INFO common.c: Starting Flash write for VL/F0/F3/F1_XL core id</span></span>
<span class="line"><span>2018-04-10T22:04:34 INFO flash_loader.c: Successfully loaded flash loader in sram</span></span>
<span class="line"><span> 11/11 pages written</span></span>
<span class="line"><span>2018-04-10T22:04:35 INFO common.c: Starting verification of write complete</span></span>
<span class="line"><span>2018-04-10T22:04:35 INFO common.c: Flash written and verified! jolly good!</span></span></code></pre></div><p>我沒有將 NRST 信號連接到編程器，因此無法使用 <code>-reset</code> 選項，必須按下復位按鈕才能運行程序。</p><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/interfaces.png" alt="Interfaces"></p><p>看來，<code>st-flash</code> 與此板配合使用有點不可靠（通常需要復位 ST-LINK 加密狗）。此外，當前版本不會通過 SWD 發出復位命令（僅使用 NRST 信號）。軟件復位是不現實的，但是它通常是有效的，缺少它會將會帶來不便。對於<ruby>板卡程序員<rt>board-programmer</rt></ruby> 來説 OpenOCD 工作得更好。</p><h3 id="uart" tabindex="-1">UART <a class="header-anchor" href="#uart" aria-label="Permalink to “UART”">​</a></h3><p>UART（<ruby>通用異步收發傳輸器<rt>Universal Aynchronous Receiver-Transmitter</rt></ruby>）仍然是當今微控制器最重要的外設之一。它的優點是以下屬性的獨特組合：</p><ul><li>相對較高的速度，</li><li>僅兩條信號線（在 <ruby>半雙工<rt>half-duplex</rt></ruby> 通信的情況下甚至一條），</li><li>角色對稱，</li><li>關於新數據的 <ruby>同步帶內信令<rt>synchronous in-band signaling</rt></ruby>（起始位），</li><li>在傳輸 <ruby>字<rt>words</rt></ruby> 內的精確計時。</li></ul>`,7)),a("p",null,[s[22]||(s[22]=n("這使得最初用於傳輸由 7-9 位的字組成的異步消息的 UART，也被用於有效地實現各種其他物理協議，例如被 ",-1)),e(p,{href:"http://www.world-semi.com/solution/list-4-1.html"},{default:l(()=>[...s[20]||(s[20]=[n("WS28xx LEDs",-1)])]),_:1}),s[23]||(s[23]=n(" 或 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/1-Wire"},{default:l(()=>[...s[21]||(s[21]=[n("1-wire",-1)])]),_:1}),s[24]||(s[24]=n(" 設備使用的協議。",-1))]),s[95]||(s[95]=i(`<p>但是，我們將以其通常的角色使用 UART：從程序中打印文本消息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;io&quot;</span></span>
<span class="line"><span>    &quot;rtos&quot;</span></span>
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
<span class="line"><span>    d := dma.DMA1</span></span>
<span class="line"><span>    d.EnableClock(true)</span></span>
<span class="line"><span>    tts = usart.NewDriver(usart.USART1, d.Channel(2, 0), nil, nil)</span></span>
<span class="line"><span>    tts.Periph().EnableClock(true)</span></span>
<span class="line"><span>    tts.Periph().SetBaudRate(115200)</span></span>
<span class="line"><span>    tts.Periph().Enable()</span></span>
<span class="line"><span>    tts.EnableTx()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rtos.IRQ(irq.USART1).Enable()</span></span>
<span class="line"><span>    rtos.IRQ(irq.DMA1_Channel2_3).Enable()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    io.WriteString(tts, &quot;Hello, World!\\r\\n&quot;)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>你會發現此代碼可能有些複雜，但目前 STM32 HAL 中沒有更簡單的 UART 驅動程序（在某些情況下，簡單的輪詢驅動程序可能會很有用）。 <code>usart.Driver</code> 是使用 DMA 和中斷來減輕 CPU 負擔的高效驅動程序。</p><p>STM32 USART 外設提供傳統的 UART 及其同步版本。要將其用作輸出，我們必須將其 Tx 信號連接到正確的 GPIO 引腳：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tx.Setup(&amp;gpio.Config{Mode: gpio.Alt})</span></span>
<span class="line"><span>tx.SetAltFunc(gpio.USART1_AF1)</span></span></code></pre></div><p>在 Tx-only 模式下配置 <code>usart.Driver</code> （rxdma 和 rxbuf 設置為 nil）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tts = usart.NewDriver(usart.USART1, d.Channel(2, 0), nil, nil)</span></span></code></pre></div><p>我們使用它的 <code>WriteString</code> 方法來打印這句名言。讓我們清理所有內容並編譯該程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd $HOME/emgo</span></span>
<span class="line"><span>$ ./clean.sh</span></span>
<span class="line"><span>$ cd $HOME/firstemgo</span></span>
<span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>  text       data        bss        dec        hex    filename</span></span>
<span class="line"><span>  12728        236        176      13140       3354    cortexm0.elf</span></span></code></pre></div><p>要查看某些內容，你需要在 PC 中使用 UART 外設。</p><p><strong>請勿使用 RS232 端口或 USB 轉 RS232 轉換器！</strong></p><p>STM32 系列使用 3.3V 邏輯，但是 RS232 可以產生 -15 V ~ +15 V 的電壓，這可能會損壞你的 MCU。你需要使用 3.3V 邏輯的 USB 轉 UART 轉換器。流行的轉換器基於 FT232 或 CP2102 芯片。</p><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/uart.jpg" alt="UART"></p>`,13)),a("p",null,[s[26]||(s[26]=n("你還需要一些終端仿真程序（我更喜歡 ",-1)),e(p,{href:"https://github.com/npat-efault/picocom"},{default:l(()=>[...s[25]||(s[25]=[n("picocom",-1)])]),_:1}),s[27]||(s[27]=n("）。刷新新圖像，運行終端仿真器，然後按幾次復位按鈕：",-1))]),s[96]||(s[96]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ openocd -d0 -f interface/stlink.cfg -f target/stm32f0x.cfg -c &#39;init; program cortexm0.elf; reset run; exit&#39;</span></span>
<span class="line"><span>Open On-Chip Debugger 0.10.0+dev-00319-g8f1f912a (2018-03-07-19:20)</span></span>
<span class="line"><span>Licensed under GNU GPL v2</span></span>
<span class="line"><span>For bug reports, read</span></span>
<span class="line"><span>        http://openocd.org/doc/doxygen/bugs.html</span></span>
<span class="line"><span>debug_level: 0</span></span>
<span class="line"><span>adapter speed: 1000 kHz</span></span>
<span class="line"><span>adapter_nsrst_delay: 100</span></span>
<span class="line"><span>none separate</span></span>
<span class="line"><span>adapter speed: 950 kHz</span></span>
<span class="line"><span>target halted due to debug-request, current mode: Thread</span></span>
<span class="line"><span>xPSR: 0xc1000000 pc: 0x080016f4 msp: 0x20000a20</span></span>
<span class="line"><span>adapter speed: 4000 kHz</span></span>
<span class="line"><span>** Programming Started **</span></span>
<span class="line"><span>auto erase enabled</span></span>
<span class="line"><span>target halted due to breakpoint, current mode: Thread</span></span>
<span class="line"><span>xPSR: 0x61000000 pc: 0x2000003a msp: 0x20000a20</span></span>
<span class="line"><span>wrote 13312 bytes from file cortexm0.elf in 1.020185s (12.743 KiB/s)</span></span>
<span class="line"><span>** Programming Finished **</span></span>
<span class="line"><span>adapter speed: 950 kHz</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ picocom -b 115200 /dev/ttyUSB0</span></span>
<span class="line"><span>picocom v3.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>port is        : /dev/ttyUSB0</span></span>
<span class="line"><span>flowcontrol    : none</span></span>
<span class="line"><span>baudrate is    : 115200</span></span>
<span class="line"><span>parity is      : none</span></span>
<span class="line"><span>databits are   : 8</span></span>
<span class="line"><span>stopbits are   : 1</span></span>
<span class="line"><span>escape is      : C-a</span></span>
<span class="line"><span>local echo is  : no</span></span>
<span class="line"><span>noinit is      : no</span></span>
<span class="line"><span>noreset is     : no</span></span>
<span class="line"><span>hangup is      : no</span></span>
<span class="line"><span>nolock is      : no</span></span>
<span class="line"><span>send_cmd is    : sz -vv</span></span>
<span class="line"><span>receive_cmd is : rz -vv -E</span></span>
<span class="line"><span>imap is        :</span></span>
<span class="line"><span>omap is        :</span></span>
<span class="line"><span>emap is        : crcrlf,delbs,</span></span>
<span class="line"><span>logfile is     : none</span></span>
<span class="line"><span>initstring     : none</span></span>
<span class="line"><span>exit_after is  : not set</span></span>
<span class="line"><span>exit is        : no</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type [C-a] [C-h] to see available commands</span></span>
<span class="line"><span>Terminal ready</span></span>
<span class="line"><span>Hello, World!</span></span>
<span class="line"><span>Hello, World!</span></span>
<span class="line"><span>Hello, World!</span></span></code></pre></div><p>每次按下復位按鈕都會產生新的 “Hello，World！”行。一切都在按預期進行。</p>`,2)),a("p",null,[s[29]||(s[29]=n("要查看此 MCU 的 ",-1)),s[30]||(s[30]=a("ruby",null,[n("雙向"),a("rt",null,"bi-directional")],-1)),s[31]||(s[31]=n(" UART 代碼，請查看 ",-1)),e(p,{href:"https://github.com/ziutek/emgo/blob/master/egpath/src/stm32/examples/f030-demo-board/usart/main.go"},{default:l(()=>[...s[28]||(s[28]=[n("此示例",-1)])]),_:1}),s[32]||(s[32]=n("。",-1))]),s[97]||(s[97]=i(`<h3 id="io-writer-接口" tabindex="-1">io.Writer 接口 <a class="header-anchor" href="#io-writer-接口" aria-label="Permalink to “io.Writer 接口”">​</a></h3><p><code>io.Writer</code> 接口可能是 Go 中第二種最常用的接口類型，僅次於 <code>error</code> 接口。其定義如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type Writer interface {</span></span>
<span class="line"><span>    Write(p []byte) (n int, err error)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>usart.Driver</code> 實現了 <code>io.Writer</code>，因此我們可以替換：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tts.WriteString(&quot;Hello, World!\\r\\n&quot;)</span></span></code></pre></div><p>為</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>io.WriteString(tts, &quot;Hello, World!\\r\\n&quot;)</span></span></code></pre></div><p>此外，你需要將 <code>io</code> 包添加到 <code>import</code> 部分。</p><p><code>io.WriteString</code> 函數的聲明如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func WriteString(w Writer, s string) (n int, err error)</span></span></code></pre></div><p>如你所見，<code>io.WriteString</code> 允許使用實現了 <code>io.Writer</code> 接口的任何類型來編寫字符串。在內部，它檢查基礎類型是否具有 <code>WriteString</code> 方法，並使用該方法代替 <code>Write</code>（如果可用）。</p><p>讓我們編譯修改後的程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  15456     320     248   16024    3e98 cortexm0.elf</span></span></code></pre></div><p>如你所見，<code>io.WriteString</code> 導致二進制文件的大小顯着增加：15776-12964 = 2812 字節。 Flash 上沒有太多空間了。是什麼引起了這麼大規模的增長？</p><p>使用這個命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>arm-none-eabi-nm --print-size --size-sort --radix=d cortexm0.elf</span></span></code></pre></div><p>我們可以打印兩種情況下按其大小排序的所有符號。通過過濾和分析獲得的數據（<code>awk</code>，<code>diff</code>），我們可以找到大約 80 個新符號。最大的十個如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt; 00000062 T stm32$hal$usart$Driver$DisableRx</span></span>
<span class="line"><span>&gt; 00000072 T stm32$hal$usart$Driver$RxDMAISR</span></span>
<span class="line"><span>&gt; 00000076 T internal$Type$Implements</span></span>
<span class="line"><span>&gt; 00000080 T stm32$hal$usart$Driver$EnableRx</span></span>
<span class="line"><span>&gt; 00000084 t errors$New</span></span>
<span class="line"><span>&gt; 00000096 R $8$stm32$hal$usart$Driver$$</span></span>
<span class="line"><span>&gt; 00000100 T stm32$hal$usart$Error$Error</span></span>
<span class="line"><span>&gt; 00000360 T io$WriteString</span></span>
<span class="line"><span>&gt; 00000660 T stm32$hal$usart$Driver$Read</span></span></code></pre></div><p>因此，即使我們不使用 <code>usart.Driver.Read</code> 方法，但它被編譯進來了，與 <code>DisableRx</code>、<code>RxDMAISR</code>、<code>EnableRx</code> 以及上面未提及的其他方法一樣。不幸的是，如果你為接口賦值了一些內容，就需要它的完整方法集（包含所有依賴項）。對於使用大多數方法的大型程序來説，這不是問題。但是對於我們這種極簡的情況而言，這是一個巨大的負擔。</p><p>我們已經接近 MCU 的極限，但讓我們嘗試打印一些數字（你需要在 <code>import</code> 部分中用 <code>strconv</code> 替換 <code>io</code> 包）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>    a := 12</span></span>
<span class="line"><span>    b := -123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    tts.WriteString(&quot;a = &quot;)</span></span>
<span class="line"><span>    strconv.WriteInt(tts, a, 10, 0, 0)</span></span>
<span class="line"><span>    tts.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span>    tts.WriteString(&quot;b = &quot;)</span></span>
<span class="line"><span>    strconv.WriteInt(tts, b, 10, 0, 0)</span></span>
<span class="line"><span>    tts.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    tts.WriteString(&quot;hex(a) = &quot;)</span></span>
<span class="line"><span>    strconv.WriteInt(tts, a, 16, 0, 0)</span></span>
<span class="line"><span>    tts.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span>    tts.WriteString(&quot;hex(b) = &quot;)</span></span>
<span class="line"><span>    strconv.WriteInt(tts, b, 16, 0, 0)</span></span>
<span class="line"><span>    tts.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>與使用 <code>io.WriteString</code> 函數的情況一樣，<code>strconv.WriteInt</code> 的第一個參數的類型為 <code>io.Writer</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>/usr/local/arm/bin/arm-none-eabi-ld: /home/michal/firstemgo/cortexm0.elf section \`.rodata&#39; will not fit in region \`Flash&#39;</span></span>
<span class="line"><span>/usr/local/arm/bin/arm-none-eabi-ld: region \`Flash&#39; overflowed by 692 bytes</span></span>
<span class="line"><span>exit status 1</span></span></code></pre></div><p>這一次我們的空間超出的不多。讓我們試着精簡一下有關類型的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd $HOME/emgo</span></span>
<span class="line"><span>$ ./clean.sh</span></span>
<span class="line"><span>$ cd $HOME/firstemgo</span></span>
<span class="line"><span>$ egc -nf -nt</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  15876     316     320   16512    4080 cortexm0.elf</span></span></code></pre></div><p>很接近，但很合適。讓我們加載並運行此代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>a = 12</span></span>
<span class="line"><span>b = -123</span></span>
<span class="line"><span>hex(a) = c</span></span>
<span class="line"><span>hex(b) = -7b</span></span></code></pre></div><p>Emgo 中的 <code>strconv</code> 包與 Go 中的原型有很大的不同。它旨在直接用於寫入格式化的數字，並且在許多情況下可以替換沉重的 <code>fmt</code> 包。 這就是為什麼函數名稱以 <code>Write</code> 而不是 <code>Format</code> 開頭，並具有額外的兩個參數的原因。 以下是其用法示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>    b := -123</span></span>
<span class="line"><span>    strconv.WriteInt(tts, b, 10, 0, 0)</span></span>
<span class="line"><span>    tts.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span>    strconv.WriteInt(tts, b, 10, 6, &#39; &#39;)</span></span>
<span class="line"><span>    tts.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span>    strconv.WriteInt(tts, b, 10, 6, &#39;0&#39;)</span></span>
<span class="line"><span>    tts.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span>    strconv.WriteInt(tts, b, 10, 6, &#39;.&#39;)</span></span>
<span class="line"><span>    tts.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span>    strconv.WriteInt(tts, b, 10, -6, &#39; &#39;)</span></span>
<span class="line"><span>    tts.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span>    strconv.WriteInt(tts, b, 10, -6, &#39;0&#39;)</span></span>
<span class="line"><span>    tts.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span>    strconv.WriteInt(tts, b, 10, -6, &#39;.&#39;)</span></span>
<span class="line"><span>    tts.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下面是它的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-123</span></span>
<span class="line"><span>  -123</span></span>
<span class="line"><span>-00123</span></span>
<span class="line"><span>..-123</span></span>
<span class="line"><span>-123</span></span>
<span class="line"><span>-123</span></span>
<span class="line"><span>-123..</span></span></code></pre></div><h3 id="unix-流-和-莫爾斯電碼morse-code" tabindex="-1">Unix 流 和 <ruby>莫爾斯電碼<rt>Morse code</rt></ruby> <a class="header-anchor" href="#unix-流-和-莫爾斯電碼morse-code" aria-label="Permalink to “Unix 流 和 莫爾斯電碼Morse code”">​</a></h3><p>由於大多數寫入的函數都使用 <code>io.Writer</code> 而不是具體類型（例如 C 中的 <code>FILE</code> ），因此我們獲得了類似於 Unix <ruby>流<rt>stream</rt></ruby> 的功能。在 Unix 中，我們可以輕鬆地組合簡單的命令來執行更大的任務。例如，我們可以通過以下方式將文本寫入文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello, World!&quot; &gt; file.txt</span></span></code></pre></div><p><code>&gt;</code> 操作符將前面命令的輸出流寫入文件。還有 <code>|</code> 操作符，用於連接相鄰命令的輸出流和輸入流。</p><p>多虧了流，我們可以輕鬆地轉換/過濾任何命令的輸出。例如，要將所有字母轉換為大寫，我們可以通過 <code>tr</code> 命令過濾 <code>echo</code> 的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello, World!&quot; | tr a-z A-Z &gt; file.txt</span></span></code></pre></div><p>為了顯示 <code>io.Writer</code> 和 Unix 流之間的類比，讓我們編寫以下代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>io.WriteString(tts, &quot;Hello, World!\\r\\n&quot;)</span></span></code></pre></div><p>採用以下偽 unix 形式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>io.WriteString &quot;Hello, World!&quot; | usart.Driver usart.USART1</span></span></code></pre></div><p>下一個示例將顯示如何執行此操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>io.WriteString &quot;Hello, World!&quot; | MorseWriter | usart.Driver usart.USART1</span></span></code></pre></div><p>讓我們來創建一個簡單的編碼器，它使用莫爾斯電碼對寫入的文本進行編碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type MorseWriter struct {</span></span>
<span class="line"><span>    W io.Writer</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (w *MorseWriter) Write(s []byte) (int, error) {</span></span>
<span class="line"><span>    var buf [8]byte</span></span>
<span class="line"><span>    for n, c := range s {</span></span>
<span class="line"><span>        switch {</span></span>
<span class="line"><span>        case c == &#39;\\n&#39;:</span></span>
<span class="line"><span>            c = &#39; &#39; // Replace new lines with spaces.</span></span>
<span class="line"><span>        case &#39;a&#39; &lt;= c &amp;&amp; c &lt;= &#39;z&#39;:</span></span>
<span class="line"><span>            c -= &#39;a&#39; - &#39;A&#39; // Convert to upper case.</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if c &lt; &#39; &#39; || &#39;Z&#39; &lt; c {</span></span>
<span class="line"><span>            continue // c is outside ASCII [&#39; &#39;, &#39;Z&#39;]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var symbol morseSymbol</span></span>
<span class="line"><span>        if c == &#39; &#39; {</span></span>
<span class="line"><span>            symbol.length = 1</span></span>
<span class="line"><span>            buf[0] = &#39; &#39;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            symbol = morseSymbols[c-&#39;!&#39;]</span></span>
<span class="line"><span>            for i := uint(0); i &lt; uint(symbol.length); i++ {</span></span>
<span class="line"><span>                if (symbol.code&gt;&gt;i)&amp;1 != 0 {</span></span>
<span class="line"><span>                    buf[i] = &#39;-&#39;</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    buf[i] = &#39;.&#39;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        buf[symbol.length] = &#39; &#39;</span></span>
<span class="line"><span>        if _, err := w.W.Write(buf[:symbol.length+1]); err != nil {</span></span>
<span class="line"><span>            return n, err</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return len(s), nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type morseSymbol struct {</span></span>
<span class="line"><span>    code, length byte</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//emgo:const</span></span>
<span class="line"><span>var morseSymbols = [...]morseSymbol{</span></span>
<span class="line"><span>    {1&lt;&lt;0 | 1&lt;&lt;1 | 1&lt;&lt;2, 4}, // ! ---.</span></span>
<span class="line"><span>    {1&lt;&lt;1 | 1&lt;&lt;4, 6},        // &quot; .-..-.</span></span>
<span class="line"><span>    {},                      // #</span></span>
<span class="line"><span>    {1&lt;&lt;3 | 1&lt;&lt;6, 7},        // $ ...-..-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Some code omitted...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    {1&lt;&lt;0 | 1&lt;&lt;3, 4},        // X -..-</span></span>
<span class="line"><span>    {1&lt;&lt;0 | 1&lt;&lt;2 | 1&lt;&lt;3, 4}, // Y -.--</span></span>
<span class="line"><span>    {1&lt;&lt;0 | 1&lt;&lt;1, 4},        // Z --..</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,45)),a("p",null,[s[34]||(s[34]=n("你可以在 ",-1)),e(p,{href:"https://github.com/ziutek/emgo/blob/master/egpath/src/stm32/examples/f030-demo-board/morseuart/main.go"},{default:l(()=>[...s[33]||(s[33]=[n("這裏",-1)])]),_:1}),s[35]||(s[35]=n(" 找到完整的 ",-1)),s[36]||(s[36]=a("code",null,"morseSymbols",-1)),s[37]||(s[37]=n(" 數組。 ",-1)),s[38]||(s[38]=a("code",null,"//emgo:const",-1)),s[39]||(s[39]=n(" 指令確保 ",-1)),s[40]||(s[40]=a("code",null,"morseSymbols",-1)),s[41]||(s[41]=n(" 數組不會被複制到 RAM 中。",-1))]),s[98]||(s[98]=i(`<p>現在我們可以通過兩種方式打印句子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>    s := &quot;Hello, World!\\r\\n&quot;</span></span>
<span class="line"><span>    mw := &amp;MorseWriter{tts}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    io.WriteString(tts, s)</span></span>
<span class="line"><span>    io.WriteString(mw, s)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們使用指向 <code>MorseWriter</code> <code>&amp;MorseWriter{tts}</code> 的指針而不是簡單的 <code>MorseWriter{tts}</code> 值，因為 <code>MorseWriter</code> 太大，不適合接口變量。</p><p>與 Go 不同，Emgo 不會為存儲在接口變量中的值動態分配內存。接口類型的大小受限制，相當於三個指針（適合 <code>slice</code> ）或兩個 <code>float64</code>（適合 <code>complex128</code>）的大小，以較大者為準。它可以直接存儲所有基本類型和小型 “結構體/數組” 的值，但是對於較大的值，你必須使用指針。</p><p>讓我們編譯此代碼並查看其輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  15152     324     248   15724    3d6c cortexm0.elf</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hello, World!</span></span>
<span class="line"><span>.... . .-.. .-.. --- --..--   .-- --- .-. .-.. -.. ---.</span></span></code></pre></div><h3 id="終極閃爍" tabindex="-1">終極閃爍 <a class="header-anchor" href="#終極閃爍" aria-label="Permalink to “終極閃爍”">​</a></h3><p>Blinky 是等效於 “Hello，World！” 程序的硬件。一旦有了摩爾斯編碼器，我們就可以輕鬆地將兩者結合起來以獲得終極閃爍程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;delay&quot;</span></span>
<span class="line"><span>    &quot;io&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;stm32/hal/gpio&quot;</span></span>
<span class="line"><span>    &quot;stm32/hal/system&quot;</span></span>
<span class="line"><span>    &quot;stm32/hal/system/timer/systick&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var led gpio.Pin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>    system.SetupPLL(8, 1, 48/8)</span></span>
<span class="line"><span>    systick.Setup(2e6)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    gpio.A.EnableClock(false)</span></span>
<span class="line"><span>    led = gpio.A.Pin(4)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cfg := gpio.Config{Mode: gpio.Out, Driver: gpio.OpenDrain, Speed: gpio.Low}</span></span>
<span class="line"><span>    led.Setup(&amp;cfg)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Telegraph struct {</span></span>
<span class="line"><span>    Pin   gpio.Pin</span></span>
<span class="line"><span>    Dotms int // Dot length [ms]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (t Telegraph) Write(s []byte) (int, error) {</span></span>
<span class="line"><span>    for _, c := range s {</span></span>
<span class="line"><span>        switch c {</span></span>
<span class="line"><span>        case &#39;.&#39;:</span></span>
<span class="line"><span>            t.Pin.Clear()</span></span>
<span class="line"><span>            delay.Millisec(t.Dotms)</span></span>
<span class="line"><span>            t.Pin.Set()</span></span>
<span class="line"><span>            delay.Millisec(t.Dotms)</span></span>
<span class="line"><span>        case &#39;-&#39;:</span></span>
<span class="line"><span>            t.Pin.Clear()</span></span>
<span class="line"><span>            delay.Millisec(3 * t.Dotms)</span></span>
<span class="line"><span>            t.Pin.Set()</span></span>
<span class="line"><span>            delay.Millisec(t.Dotms)</span></span>
<span class="line"><span>        case &#39; &#39;:</span></span>
<span class="line"><span>            delay.Millisec(3 * t.Dotms)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return len(s), nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    telegraph := &amp;MorseWriter{Telegraph{led, 100}}</span></span>
<span class="line"><span>    for {</span></span>
<span class="line"><span>        io.WriteString(telegraph, &quot;Hello, World! &quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Some code omitted...</span></span></code></pre></div>`,10)),a("p",null,[s[43]||(s[43]=n("在上面的示例中，我省略了 ",-1)),s[44]||(s[44]=a("code",null,"MorseWriter",-1)),s[45]||(s[45]=n(" 類型的定義，因為它已在前面展示過。完整版可通過 ",-1)),e(p,{href:"https://github.com/ziutek/emgo/blob/master/egpath/src/stm32/examples/f030-demo-board/morseled/main.go"},{default:l(()=>[...s[42]||(s[42]=[n("這裏",-1)])]),_:1}),s[46]||(s[46]=n(" 獲取。讓我們編譯它並運行：",-1))]),s[99]||(s[99]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  11772     244     244   12260    2fe4 cortexm0.elf</span></span></code></pre></div><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/morse.png" alt="Ultimate Blinky"></p><h3 id="反射" tabindex="-1">反射 <a class="header-anchor" href="#反射" aria-label="Permalink to “反射”">​</a></h3>`,3)),a("p",null,[s[48]||(s[48]=n("是的，Emgo 支持 ",-1)),e(p,{href:"https://blog.golang.org/laws-of-reflection"},{default:l(()=>[...s[47]||(s[47]=[n("反射",-1)])]),_:1}),s[49]||(s[49]=n("。",-1)),s[50]||(s[50]=a("code",null,"reflect",-1)),s[51]||(s[51]=n(" 包尚未完成，但是已完成的部分足以實現 ",-1)),s[52]||(s[52]=a("code",null,"fmt.Print",-1)),s[53]||(s[53]=n(" 函數族了。來看看我們可以在小型 MCU 上做什麼。",-1))]),a("p",null,[s[56]||(s[56]=n("為了減少內存使用，我們將使用 ",-1)),a("ruby",null,[e(p,{href:"http://infocenter.arm.com/help/topic/com.arm.doc.dui0471g/Bgbjjgij.html"},{default:l(()=>[...s[54]||(s[54]=[n("半主機",-1)])]),_:1}),s[55]||(s[55]=a("rt",null,"semihosting",-1))]),s[57]||(s[57]=n(" 作為標準輸出。為了方便起見，我們還編寫了簡單的 ",-1)),s[58]||(s[58]=a("code",null,"println",-1)),s[59]||(s[59]=n(" 函數，它在某種程度上類似於 ",-1)),s[60]||(s[60]=a("code",null,"fmt.Println",-1)),s[61]||(s[61]=n("。",-1))]),s[100]||(s[100]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;debug/semihosting&quot;</span></span>
<span class="line"><span>    &quot;reflect&quot;</span></span>
<span class="line"><span>    &quot;strconv&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;stm32/hal/system&quot;</span></span>
<span class="line"><span>    &quot;stm32/hal/system/timer/systick&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var stdout semihosting.File</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>    system.SetupPLL(8, 1, 48/8)</span></span>
<span class="line"><span>    systick.Setup(2e6)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var err error</span></span>
<span class="line"><span>    stdout, err = semihosting.OpenFile(&quot;:tt&quot;, semihosting.W)</span></span>
<span class="line"><span>    for err != nil {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type stringer interface {</span></span>
<span class="line"><span>    String() string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func println(args ...interface{}) {</span></span>
<span class="line"><span>    for i, a := range args {</span></span>
<span class="line"><span>        if i &gt; 0 {</span></span>
<span class="line"><span>            stdout.WriteString(&quot; &quot;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        switch v := a.(type) {</span></span>
<span class="line"><span>        case string:</span></span>
<span class="line"><span>            stdout.WriteString(v)</span></span>
<span class="line"><span>        case int:</span></span>
<span class="line"><span>            strconv.WriteInt(stdout, v, 10, 0, 0)</span></span>
<span class="line"><span>        case bool:</span></span>
<span class="line"><span>            strconv.WriteBool(stdout, v, &#39;t&#39;, 0, 0)</span></span>
<span class="line"><span>        case stringer:</span></span>
<span class="line"><span>            stdout.WriteString(v.String())</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>            stdout.WriteString(&quot;%unknown&quot;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    stdout.WriteString(&quot;\\r\\n&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type S struct {</span></span>
<span class="line"><span>    A int</span></span>
<span class="line"><span>    B bool</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    p := &amp;S{-123, true}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    v := reflect.ValueOf(p)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println(&quot;kind(p) =&quot;, v.Kind())</span></span>
<span class="line"><span>    println(&quot;kind(*p) =&quot;, v.Elem().Kind())</span></span>
<span class="line"><span>    println(&quot;type(*p) =&quot;, v.Elem().Type())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    v = v.Elem()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println(&quot;*p = {&quot;)</span></span>
<span class="line"><span>    for i := 0; i &lt; v.NumField(); i++ {</span></span>
<span class="line"><span>        ft := v.Type().Field(i)</span></span>
<span class="line"><span>        fv := v.Field(i)</span></span>
<span class="line"><span>        println(&quot;  &quot;, ft.Name(), &quot;:&quot;, fv.Interface())</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    println(&quot;}&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>semihosting.OpenFile</code> 函數允許在主機端打開/創建文件。特殊路徑 <code>:tt</code> 對應於主機的標準輸出。</p><p><code>println</code> 函數接受任意數量的參數，每個參數的類型都是任意的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func println(args ...interface{})</span></span></code></pre></div>`,4)),a("p",null,[s[63]||(s[63]=n("可能是因為任何類型都實現了空接口 ",-1)),s[64]||(s[64]=a("code",null,"interface{}",-1)),s[65]||(s[65]=n("。 ",-1)),s[66]||(s[66]=a("code",null,"println",-1)),s[67]||(s[67]=n(" 使用 ",-1)),e(p,{href:"https://golang.org/doc/effective_go.html#type_switch"},{default:l(()=>[...s[62]||(s[62]=[n("類型開關",-1)])]),_:1}),s[68]||(s[68]=n(" 打印字符串，整數和布爾值：",-1))]),s[101]||(s[101]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>switch v := a.(type) {</span></span>
<span class="line"><span>case string:</span></span>
<span class="line"><span>    stdout.WriteString(v)</span></span>
<span class="line"><span>case int:</span></span>
<span class="line"><span>    strconv.WriteInt(stdout, v, 10, 0, 0)</span></span>
<span class="line"><span>case bool:</span></span>
<span class="line"><span>    strconv.WriteBool(stdout, v, &#39;t&#39;, 0, 0)</span></span>
<span class="line"><span>case stringer:</span></span>
<span class="line"><span>    stdout.WriteString(v.String())</span></span>
<span class="line"><span>default:</span></span>
<span class="line"><span>    stdout.WriteString(&quot;%unknown&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>此外，它還支持任何實現了 <code>stringer</code> 接口的類型，即任何具有 <code>String()</code> 方法的類型。在任何 <code>case</code> 子句中，<code>v</code> 變量具有正確的類型，與 <code>case</code> 關鍵字後列出的類型相同。</p><p><code>reflect.ValueOf(p)</code> 函數通過允許以編程的方式分析其類型和內容的形式返回 <code>p</code>。如你所見，我們甚至可以使用 <code>v.Elem()</code> 取消引用指針，並打印所有結構體及其名稱。</p><p>讓我們嘗試編譯這段代碼。現在讓我們看看如果編譯時沒有類型和字段名，會有什麼結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc -nt -nf</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  16028     216     312   16556    40ac cortexm0.elf</span></span></code></pre></div><p>閃存上只剩下 140 個可用字節。讓我們使用啓用了半主機的 OpenOCD 加載它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ openocd -d0 -f interface/stlink.cfg -f target/stm32f0x.cfg -c &#39;init; program cortexm0.elf; arm semihosting enable; reset run&#39;</span></span>
<span class="line"><span>Open On-Chip Debugger 0.10.0+dev-00319-g8f1f912a (2018-03-07-19:20)</span></span>
<span class="line"><span>Licensed under GNU GPL v2</span></span>
<span class="line"><span>For bug reports, read</span></span>
<span class="line"><span>        http://openocd.org/doc/doxygen/bugs.html</span></span>
<span class="line"><span>debug_level: 0</span></span>
<span class="line"><span>adapter speed: 1000 kHz</span></span>
<span class="line"><span>adapter_nsrst_delay: 100</span></span>
<span class="line"><span>none separate</span></span>
<span class="line"><span>adapter speed: 950 kHz</span></span>
<span class="line"><span>target halted due to debug-request, current mode: Thread</span></span>
<span class="line"><span>xPSR: 0xc1000000 pc: 0x08002338 msp: 0x20000a20</span></span>
<span class="line"><span>adapter speed: 4000 kHz</span></span>
<span class="line"><span>** Programming Started **</span></span>
<span class="line"><span>auto erase enabled</span></span>
<span class="line"><span>target halted due to breakpoint, current mode: Thread</span></span>
<span class="line"><span>xPSR: 0x61000000 pc: 0x2000003a msp: 0x20000a20</span></span>
<span class="line"><span>wrote 16384 bytes from file cortexm0.elf in 0.700133s (22.853 KiB/s)</span></span>
<span class="line"><span>** Programming Finished **</span></span>
<span class="line"><span>semihosting is enabled</span></span>
<span class="line"><span>adapter speed: 950 kHz</span></span>
<span class="line"><span>kind(p) = ptr</span></span>
<span class="line"><span>kind(*p) = struct</span></span>
<span class="line"><span>type(*p) =</span></span>
<span class="line"><span>*p = {</span></span>
<span class="line"><span>   X. : -123</span></span>
<span class="line"><span>   X. : true</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果你實際運行此代碼，則會注意到半主機運行緩慢，尤其是在逐字節寫入時（緩衝很有用）。</p><p>如你所見，<code>*p</code> 沒有類型名稱，並且所有結構字段都具有相同的 <code>X.</code> 名稱。讓我們再次編譯該程序，這次不帶 <code>-nt -nf</code> 選項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  16052     216     312   16580    40c4 cortexm0.elf</span></span></code></pre></div><p>現在已經包括了類型和字段名稱，但僅在 <s><em>main.go</em> 文件中</s> <code>main</code> 包中定義了它們。該程序的輸出如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>kind(p) = ptr</span></span>
<span class="line"><span>kind(*p) = struct</span></span>
<span class="line"><span>type(*p) = S</span></span>
<span class="line"><span>*p = {</span></span>
<span class="line"><span>   A : -123</span></span>
<span class="line"><span>   B : true</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,12)),a("p",null,[s[70]||(s[70]=n("反射是任何易於使用的序列化庫的關鍵部分，而像 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/JSON"},{default:l(()=>[...s[69]||(s[69]=[n("JSON",-1)])]),_:1}),s[71]||(s[71]=n(" 這樣的序列化 ",-1)),s[72]||(s[72]=a("s",null,"算法",-1)),s[73]||(s[73]=n(" 在",-1)),s[74]||(s[74]=a("ruby",null,[n("物聯網"),a("rt",null,"IoT")],-1)),s[75]||(s[75]=n("時代也越來越重要。",-1))]),s[102]||(s[102]=a("p",null,"這些就是我完成的本文的第二部分。我認為有機會進行第三部分，更具娛樂性的部分，在那裏我們將各種有趣的設備連接到這塊板上。如果這塊板裝不下，我們就換一塊大一點的。",-1)),s[103]||(s[103]=a("hr",null,null,-1)),a("p",null,[s[77]||(s[77]=n("via: ",-1)),e(p,{href:"https://ziutek.github.io/2018/04/14/go_on_very_small_hardware2.html"},{default:l(()=>[...s[76]||(s[76]=[n("https://ziutek.github.io/2018/04/14/go_on_very_small_hardware2.html",-1)])]),_:1})]),a("p",null,[s[81]||(s[81]=n("作者：",-1)),e(p,{href:"https://ziutek.github.io/"},{default:l(()=>[...s[78]||(s[78]=[n("Michał Derkacz",-1)])]),_:1}),s[82]||(s[82]=n(" 譯者：",-1)),e(p,{href:"https://github.com/gxlct008"},{default:l(()=>[...s[79]||(s[79]=[n("gxlct008",-1)])]),_:1}),s[83]||(s[83]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[80]||(s[80]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[86]||(s[86]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[84]||(s[84]=[n("LCTT",-1)])]),_:1}),s[87]||(s[87]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[85]||(s[85]=[n("Linux中國",-1)])]),_:1}),s[88]||(s[88]=n(" 榮譽推出",-1))])])}const x=t(d,[["render",g]]);export{v as __pageData,x as default};
