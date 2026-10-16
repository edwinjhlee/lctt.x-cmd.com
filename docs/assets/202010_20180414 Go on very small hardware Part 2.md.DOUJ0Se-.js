import{_ as t,a0 as o,w as r,s as c,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"Go 语言在极小硬件上的运用（二） | LCTT x X-CMD","titleTemplate":false,"description":"Go 语言在极小硬件上的运用（二） | LCTT (202010) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Go 语言在极小硬件上的运用（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Go 语言在极小硬件上的运用（二） | LCTT (202010) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202010/20180414 Go on very small hardware Part 2","title":"Go 语言在极小硬件上的运用（二）","tag":"202010","desc":""},"relativePath":"202010/20180414 Go on very small hardware Part 2.md","filePath":"[post].md"}'),d={name:"202010/20180414 Go on very small hardware Part 2.md"};function g(u,s,h,b,k,f){const p=o("Link");return r(),c("div",null,[s[89]||(s[89]=a("h1",{id:"go-语言在极小硬件上的运用-二",tabindex:"-1"},[n("Go 语言在极小硬件上的运用（二） "),a("a",{class:"header-anchor",href:"#go-语言在极小硬件上的运用-二","aria-label":"Permalink to “Go 语言在极小硬件上的运用（二）”"},"​")],-1)),s[90]||(s[90]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201909/24/210256yihkuy8kcigugr2h.png",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("在本文的 ",-1)),e(p,{href:"https://linux.cn/article-11383-1.html"},{default:l(()=>[...s[0]||(s[0]=[n("第一部分",-1)])]),_:1}),s[2]||(s[2]=n(" 的结尾，我承诺要写关于接口的内容。我不想在这里写有关接口或完整或简短的讲义。相反，我将展示一个简单的示例，来说明如何定义和使用接口，以及如何利用无处不在的 ",-1)),s[3]||(s[3]=a("code",null,"io.Writer",-1)),s[4]||(s[4]=n(" 接口。还有一些关于",-1)),s[5]||(s[5]=a("ruby",null,[n("反射"),a("rt",null,"reflection")],-1)),s[6]||(s[6]=n("和",-1)),s[7]||(s[7]=a("ruby",null,[n("半主机"),a("rt",null,"semihosting")],-1)),s[8]||(s[8]=n("的内容。",-1))]),s[91]||(s[91]=a("p",null,[a("img",{src:"https://ziutek.github.io/images/mcu/f030-demo-board/board.jpg",alt:"STM32F030F4P6"})],-1)),a("p",null,[s[11]||(s[11]=n("接口是 Go 语言的重要组成部分。如果你想了解更多有关它们的信息，我建议你阅读《",-1)),e(p,{href:"https://golang.org/doc/effective_go.html#interfaces"},{default:l(()=>[...s[9]||(s[9]=[n("高效的 Go 编程",-1)])]),_:1}),s[12]||(s[12]=n("》 和 ",-1)),e(p,{href:"https://research.swtch.com/interfaces"},{default:l(()=>[...s[10]||(s[10]=[n("Russ Cox 的文章",-1)])]),_:1}),s[13]||(s[13]=n("。",-1))]),s[92]||(s[92]=i(`<h3 id="并发-blinky-–-回顾" tabindex="-1">并发 Blinky – 回顾 <a class="header-anchor" href="#并发-blinky-–-回顾" aria-label="Permalink to “并发 Blinky – 回顾”">​</a></h3><p>当你阅读前面示例的代码时，你可能会注意到一中打开或关闭 LED 的反直觉方式。 <code>Set</code> 方法用于关闭 LED，<code>Clear</code> 方法用于打开 LED。这是由于在 <ruby>漏极开路配置<rt>open-drain configuration</rt></ruby> 下驱动了 LED。我们可以做些什么来减少代码的混乱？让我们用 <code>On</code> 和 <code>Off</code> 方法来定义 <code>LED</code> 类型：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type LED struct {</span></span>
<span class="line"><span>    pin gpio.Pin</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led LED) On() {</span></span>
<span class="line"><span>    led.pin.Clear()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led LED) Off() {</span></span>
<span class="line"><span>    led.pin.Set()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在我们可以简单地调用 <code>led.On()</code> 和 <code>led.Off()</code>，这不会再引起任何疑惑了。</p><p>在前面的所有示例中，我都尝试使用相同的 <ruby>漏极开路配置<rt>open-drain configuration</rt></ruby>来避免代码复杂化。但是在最后一个示例中，对于我来说，将第三个 LED 连接到 GND 和 PA3 引脚之间并将 PA3 配置为<ruby>推挽模式<rt>push-pull mode</rt></ruby>会更容易。下一个示例将使用以此方式连接的 LED。</p><p>但是我们的新 <code>LED</code> 类型不支持推挽配置，实际上，我们应该将其称为 <code>OpenDrainLED</code>，并定义另一个类型 <code>PushPullLED</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type PushPullLED struct {</span></span>
<span class="line"><span>    pin gpio.Pin</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led PushPullLED) On() {</span></span>
<span class="line"><span>    led.pin.Set()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (led PushPullLED) Off() {</span></span>
<span class="line"><span>    led.pin.Clear()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>请注意，这两种类型都具有相同的方法，它们的工作方式也相同。如果在 LED 上运行的代码可以同时使用这两种类型，而不必注意当前使用的是哪种类型，那就太好了。 接口类型可以提供帮助：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我们定义了 <code>LED</code> 接口，它有两个方法： <code>On</code> 和 <code>Off</code>。 <code>PushPullLED</code> 和 <code>OpenDrainLED</code> 类型代表两种驱动 LED 的方式。我们还定义了两个用作构造函数的 <code>Make*LED</code> 函数。这两种类型都实现了 <code>LED</code> 接口，因此可以将这些类型的值赋给 <code>LED</code> 类型的变量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>led1 = MakeOpenDrainLED(gpio.A.Pin(4))</span></span>
<span class="line"><span>led2 = MakePushPullLED(gpio.A.Pin(3))</span></span></code></pre></div><p>在这种情况下，<ruby>可赋值性<rt>assignability</rt></ruby>在编译时检查。赋值后，<code>led1</code> 变量包含一个 <code>OpenDrainLED{gpio.A.Pin(4)}</code>，以及一个指向 <code>OpenDrainLED</code> 类型的方法集的指针。 <code>led1.On()</code> 调用大致对应于以下 C 代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>led1.methods-&gt;On(led1.value)</span></span></code></pre></div><p>如你所见，如果仅考虑函数调用的开销，这是相当廉价的抽象。</p><p>但是，对接口的任何赋值都会导致包含有关已赋值类型的大量信息。对于由许多其他类型组成的复杂类型，可能会有很多信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  10356     196     212   10764    2a0c cortexm0.elf</span></span></code></pre></div>`,16)),a("p",null,[s[15]||(s[15]=n("如果我们不使用 ",-1)),e(p,{href:"https://blog.golang.org/laws-of-reflection"},{default:l(()=>[...s[14]||(s[14]=[n("反射",-1)])]),_:1}),s[16]||(s[16]=n("，可以通过避免包含类型和结构字段的名称来节省一些字节：",-1))]),s[93]||(s[93]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc -nf -nt</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  10312     196     212   10720    29e0 cortexm0.elf</span></span></code></pre></div><p>生成的二进制文件仍然包含一些有关类型的必要信息和关于所有导出方法（带有名称）的完整信息。在运行时，主要是当你将存储在接口变量中的一个值赋值给任何其他变量时，需要此信息来检查可赋值性。</p><p>我们还可以通过重新编译所导入的包来删除它们的类型和字段名称：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd $HOME/emgo</span></span>
<span class="line"><span>$ ./clean.sh</span></span>
<span class="line"><span>$ cd $HOME/firstemgo</span></span>
<span class="line"><span>$ egc -nf -nt</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  10272     196     212   10680    29b8 cortexm0.elf</span></span></code></pre></div>`,4)),a("p",null,[s[18]||(s[18]=n("让我们加载这个程序，看看它是否按预期工作。这一次我们将使用 ",-1)),e(p,{href:"https://github.com/texane/stlink"},{default:l(()=>[...s[17]||(s[17]=[n("st-flash",-1)])]),_:1}),s[19]||(s[19]=n(" 命令：",-1))]),s[94]||(s[94]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ arm-none-eabi-objcopy -O binary cortexm0.elf cortexm0.bin</span></span>
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
<span class="line"><span>2018-04-10T22:04:35 INFO common.c: Flash written and verified! jolly good!</span></span></code></pre></div><p>我没有将 NRST 信号连接到编程器，因此无法使用 <code>-reset</code> 选项，必须按下复位按钮才能运行程序。</p><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/interfaces.png" alt="Interfaces"></p><p>看来，<code>st-flash</code> 与此板配合使用有点不可靠（通常需要复位 ST-LINK 加密狗）。此外，当前版本不会通过 SWD 发出复位命令（仅使用 NRST 信号）。软件复位是不现实的，但是它通常是有效的，缺少它会将会带来不便。对于<ruby>板卡程序员<rt>board-programmer</rt></ruby> 来说 OpenOCD 工作得更好。</p><h3 id="uart" tabindex="-1">UART <a class="header-anchor" href="#uart" aria-label="Permalink to “UART”">​</a></h3><p>UART（<ruby>通用异步收发传输器<rt>Universal Aynchronous Receiver-Transmitter</rt></ruby>）仍然是当今微控制器最重要的外设之一。它的优点是以下属性的独特组合：</p><ul><li>相对较高的速度，</li><li>仅两条信号线（在 <ruby>半双工<rt>half-duplex</rt></ruby> 通信的情况下甚至一条），</li><li>角色对称，</li><li>关于新数据的 <ruby>同步带内信令<rt>synchronous in-band signaling</rt></ruby>（起始位），</li><li>在传输 <ruby>字<rt>words</rt></ruby> 内的精确计时。</li></ul>`,7)),a("p",null,[s[22]||(s[22]=n("这使得最初用于传输由 7-9 位的字组成的异步消息的 UART，也被用于有效地实现各种其他物理协议，例如被 ",-1)),e(p,{href:"http://www.world-semi.com/solution/list-4-1.html"},{default:l(()=>[...s[20]||(s[20]=[n("WS28xx LEDs",-1)])]),_:1}),s[23]||(s[23]=n(" 或 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/1-Wire"},{default:l(()=>[...s[21]||(s[21]=[n("1-wire",-1)])]),_:1}),s[24]||(s[24]=n(" 设备使用的协议。",-1))]),s[95]||(s[95]=i(`<p>但是，我们将以其通常的角色使用 UART：从程序中打印文本消息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>你会发现此代码可能有些复杂，但目前 STM32 HAL 中没有更简单的 UART 驱动程序（在某些情况下，简单的轮询驱动程序可能会很有用）。 <code>usart.Driver</code> 是使用 DMA 和中断来减轻 CPU 负担的高效驱动程序。</p><p>STM32 USART 外设提供传统的 UART 及其同步版本。要将其用作输出，我们必须将其 Tx 信号连接到正确的 GPIO 引脚：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tx.Setup(&amp;gpio.Config{Mode: gpio.Alt})</span></span>
<span class="line"><span>tx.SetAltFunc(gpio.USART1_AF1)</span></span></code></pre></div><p>在 Tx-only 模式下配置 <code>usart.Driver</code> （rxdma 和 rxbuf 设置为 nil）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tts = usart.NewDriver(usart.USART1, d.Channel(2, 0), nil, nil)</span></span></code></pre></div><p>我们使用它的 <code>WriteString</code> 方法来打印这句名言。让我们清理所有内容并编译该程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd $HOME/emgo</span></span>
<span class="line"><span>$ ./clean.sh</span></span>
<span class="line"><span>$ cd $HOME/firstemgo</span></span>
<span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>  text       data        bss        dec        hex    filename</span></span>
<span class="line"><span>  12728        236        176      13140       3354    cortexm0.elf</span></span></code></pre></div><p>要查看某些内容，你需要在 PC 中使用 UART 外设。</p><p><strong>请勿使用 RS232 端口或 USB 转 RS232 转换器！</strong></p><p>STM32 系列使用 3.3V 逻辑，但是 RS232 可以产生 -15 V ~ +15 V 的电压，这可能会损坏你的 MCU。你需要使用 3.3V 逻辑的 USB 转 UART 转换器。流行的转换器基于 FT232 或 CP2102 芯片。</p><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/uart.jpg" alt="UART"></p>`,13)),a("p",null,[s[26]||(s[26]=n("你还需要一些终端仿真程序（我更喜欢 ",-1)),e(p,{href:"https://github.com/npat-efault/picocom"},{default:l(()=>[...s[25]||(s[25]=[n("picocom",-1)])]),_:1}),s[27]||(s[27]=n("）。刷新新图像，运行终端仿真器，然后按几次复位按钮：",-1))]),s[96]||(s[96]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ openocd -d0 -f interface/stlink.cfg -f target/stm32f0x.cfg -c &#39;init; program cortexm0.elf; reset run; exit&#39;</span></span>
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
<span class="line"><span>Hello, World!</span></span></code></pre></div><p>每次按下复位按钮都会产生新的 “Hello，World！”行。一切都在按预期进行。</p>`,2)),a("p",null,[s[29]||(s[29]=n("要查看此 MCU 的 ",-1)),s[30]||(s[30]=a("ruby",null,[n("双向"),a("rt",null,"bi-directional")],-1)),s[31]||(s[31]=n(" UART 代码，请查看 ",-1)),e(p,{href:"https://github.com/ziutek/emgo/blob/master/egpath/src/stm32/examples/f030-demo-board/usart/main.go"},{default:l(()=>[...s[28]||(s[28]=[n("此示例",-1)])]),_:1}),s[32]||(s[32]=n("。",-1))]),s[97]||(s[97]=i(`<h3 id="io-writer-接口" tabindex="-1">io.Writer 接口 <a class="header-anchor" href="#io-writer-接口" aria-label="Permalink to “io.Writer 接口”">​</a></h3><p><code>io.Writer</code> 接口可能是 Go 中第二种最常用的接口类型，仅次于 <code>error</code> 接口。其定义如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type Writer interface {</span></span>
<span class="line"><span>    Write(p []byte) (n int, err error)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>usart.Driver</code> 实现了 <code>io.Writer</code>，因此我们可以替换：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tts.WriteString(&quot;Hello, World!\\r\\n&quot;)</span></span></code></pre></div><p>为</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>io.WriteString(tts, &quot;Hello, World!\\r\\n&quot;)</span></span></code></pre></div><p>此外，你需要将 <code>io</code> 包添加到 <code>import</code> 部分。</p><p><code>io.WriteString</code> 函数的声明如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func WriteString(w Writer, s string) (n int, err error)</span></span></code></pre></div><p>如你所见，<code>io.WriteString</code> 允许使用实现了 <code>io.Writer</code> 接口的任何类型来编写字符串。在内部，它检查基础类型是否具有 <code>WriteString</code> 方法，并使用该方法代替 <code>Write</code>（如果可用）。</p><p>让我们编译修改后的程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  15456     320     248   16024    3e98 cortexm0.elf</span></span></code></pre></div><p>如你所见，<code>io.WriteString</code> 导致二进制文件的大小显着增加：15776-12964 = 2812 字节。 Flash 上没有太多空间了。是什么引起了这么大规模的增长？</p><p>使用这个命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>arm-none-eabi-nm --print-size --size-sort --radix=d cortexm0.elf</span></span></code></pre></div><p>我们可以打印两种情况下按其大小排序的所有符号。通过过滤和分析获得的数据（<code>awk</code>，<code>diff</code>），我们可以找到大约 80 个新符号。最大的十个如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt; 00000062 T stm32$hal$usart$Driver$DisableRx</span></span>
<span class="line"><span>&gt; 00000072 T stm32$hal$usart$Driver$RxDMAISR</span></span>
<span class="line"><span>&gt; 00000076 T internal$Type$Implements</span></span>
<span class="line"><span>&gt; 00000080 T stm32$hal$usart$Driver$EnableRx</span></span>
<span class="line"><span>&gt; 00000084 t errors$New</span></span>
<span class="line"><span>&gt; 00000096 R $8$stm32$hal$usart$Driver$$</span></span>
<span class="line"><span>&gt; 00000100 T stm32$hal$usart$Error$Error</span></span>
<span class="line"><span>&gt; 00000360 T io$WriteString</span></span>
<span class="line"><span>&gt; 00000660 T stm32$hal$usart$Driver$Read</span></span></code></pre></div><p>因此，即使我们不使用 <code>usart.Driver.Read</code> 方法，但它被编译进来了，与 <code>DisableRx</code>、<code>RxDMAISR</code>、<code>EnableRx</code> 以及上面未提及的其他方法一样。不幸的是，如果你为接口赋值了一些内容，就需要它的完整方法集（包含所有依赖项）。对于使用大多数方法的大型程序来说，这不是问题。但是对于我们这种极简的情况而言，这是一个巨大的负担。</p><p>我们已经接近 MCU 的极限，但让我们尝试打印一些数字（你需要在 <code>import</code> 部分中用 <code>strconv</code> 替换 <code>io</code> 包）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>与使用 <code>io.WriteString</code> 函数的情况一样，<code>strconv.WriteInt</code> 的第一个参数的类型为 <code>io.Writer</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>/usr/local/arm/bin/arm-none-eabi-ld: /home/michal/firstemgo/cortexm0.elf section \`.rodata&#39; will not fit in region \`Flash&#39;</span></span>
<span class="line"><span>/usr/local/arm/bin/arm-none-eabi-ld: region \`Flash&#39; overflowed by 692 bytes</span></span>
<span class="line"><span>exit status 1</span></span></code></pre></div><p>这一次我们的空间超出的不多。让我们试着精简一下有关类型的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd $HOME/emgo</span></span>
<span class="line"><span>$ ./clean.sh</span></span>
<span class="line"><span>$ cd $HOME/firstemgo</span></span>
<span class="line"><span>$ egc -nf -nt</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  15876     316     320   16512    4080 cortexm0.elf</span></span></code></pre></div><p>很接近，但很合适。让我们加载并运行此代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>a = 12</span></span>
<span class="line"><span>b = -123</span></span>
<span class="line"><span>hex(a) = c</span></span>
<span class="line"><span>hex(b) = -7b</span></span></code></pre></div><p>Emgo 中的 <code>strconv</code> 包与 Go 中的原型有很大的不同。它旨在直接用于写入格式化的数字，并且在许多情况下可以替换沉重的 <code>fmt</code> 包。 这就是为什么函数名称以 <code>Write</code> 而不是 <code>Format</code> 开头，并具有额外的两个参数的原因。 以下是其用法示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>下面是它的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-123</span></span>
<span class="line"><span>  -123</span></span>
<span class="line"><span>-00123</span></span>
<span class="line"><span>..-123</span></span>
<span class="line"><span>-123</span></span>
<span class="line"><span>-123</span></span>
<span class="line"><span>-123..</span></span></code></pre></div><h3 id="unix-流-和-莫尔斯电码morse-code" tabindex="-1">Unix 流 和 <ruby>莫尔斯电码<rt>Morse code</rt></ruby> <a class="header-anchor" href="#unix-流-和-莫尔斯电码morse-code" aria-label="Permalink to “Unix 流 和 莫尔斯电码Morse code”">​</a></h3><p>由于大多数写入的函数都使用 <code>io.Writer</code> 而不是具体类型（例如 C 中的 <code>FILE</code> ），因此我们获得了类似于 Unix <ruby>流<rt>stream</rt></ruby> 的功能。在 Unix 中，我们可以轻松地组合简单的命令来执行更大的任务。例如，我们可以通过以下方式将文本写入文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello, World!&quot; &gt; file.txt</span></span></code></pre></div><p><code>&gt;</code> 操作符将前面命令的输出流写入文件。还有 <code>|</code> 操作符，用于连接相邻命令的输出流和输入流。</p><p>多亏了流，我们可以轻松地转换/过滤任何命令的输出。例如，要将所有字母转换为大写，我们可以通过 <code>tr</code> 命令过滤 <code>echo</code> 的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello, World!&quot; | tr a-z A-Z &gt; file.txt</span></span></code></pre></div><p>为了显示 <code>io.Writer</code> 和 Unix 流之间的类比，让我们编写以下代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>io.WriteString(tts, &quot;Hello, World!\\r\\n&quot;)</span></span></code></pre></div><p>采用以下伪 unix 形式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>io.WriteString &quot;Hello, World!&quot; | usart.Driver usart.USART1</span></span></code></pre></div><p>下一个示例将显示如何执行此操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>io.WriteString &quot;Hello, World!&quot; | MorseWriter | usart.Driver usart.USART1</span></span></code></pre></div><p>让我们来创建一个简单的编码器，它使用莫尔斯电码对写入的文本进行编码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type MorseWriter struct {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,45)),a("p",null,[s[34]||(s[34]=n("你可以在 ",-1)),e(p,{href:"https://github.com/ziutek/emgo/blob/master/egpath/src/stm32/examples/f030-demo-board/morseuart/main.go"},{default:l(()=>[...s[33]||(s[33]=[n("这里",-1)])]),_:1}),s[35]||(s[35]=n(" 找到完整的 ",-1)),s[36]||(s[36]=a("code",null,"morseSymbols",-1)),s[37]||(s[37]=n(" 数组。 ",-1)),s[38]||(s[38]=a("code",null,"//emgo:const",-1)),s[39]||(s[39]=n(" 指令确保 ",-1)),s[40]||(s[40]=a("code",null,"morseSymbols",-1)),s[41]||(s[41]=n(" 数组不会被复制到 RAM 中。",-1))]),s[98]||(s[98]=i(`<p>现在我们可以通过两种方式打印句子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>    s := &quot;Hello, World!\\r\\n&quot;</span></span>
<span class="line"><span>    mw := &amp;MorseWriter{tts}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    io.WriteString(tts, s)</span></span>
<span class="line"><span>    io.WriteString(mw, s)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们使用指向 <code>MorseWriter</code> <code>&amp;MorseWriter{tts}</code> 的指针而不是简单的 <code>MorseWriter{tts}</code> 值，因为 <code>MorseWriter</code> 太大，不适合接口变量。</p><p>与 Go 不同，Emgo 不会为存储在接口变量中的值动态分配内存。接口类型的大小受限制，相当于三个指针（适合 <code>slice</code> ）或两个 <code>float64</code>（适合 <code>complex128</code>）的大小，以较大者为准。它可以直接存储所有基本类型和小型 “结构体/数组” 的值，但是对于较大的值，你必须使用指针。</p><p>让我们编译此代码并查看其输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  15152     324     248   15724    3d6c cortexm0.elf</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hello, World!</span></span>
<span class="line"><span>.... . .-.. .-.. --- --..--   .-- --- .-. .-.. -.. ---.</span></span></code></pre></div><h3 id="终极闪烁" tabindex="-1">终极闪烁 <a class="header-anchor" href="#终极闪烁" aria-label="Permalink to “终极闪烁”">​</a></h3><p>Blinky 是等效于 “Hello，World！” 程序的硬件。一旦有了摩尔斯编码器，我们就可以轻松地将两者结合起来以获得终极闪烁程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>// Some code omitted...</span></span></code></pre></div>`,10)),a("p",null,[s[43]||(s[43]=n("在上面的示例中，我省略了 ",-1)),s[44]||(s[44]=a("code",null,"MorseWriter",-1)),s[45]||(s[45]=n(" 类型的定义，因为它已在前面展示过。完整版可通过 ",-1)),e(p,{href:"https://github.com/ziutek/emgo/blob/master/egpath/src/stm32/examples/f030-demo-board/morseled/main.go"},{default:l(()=>[...s[42]||(s[42]=[n("这里",-1)])]),_:1}),s[46]||(s[46]=n(" 获取。让我们编译它并运行：",-1))]),s[99]||(s[99]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  11772     244     244   12260    2fe4 cortexm0.elf</span></span></code></pre></div><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/morse.png" alt="Ultimate Blinky"></p><h3 id="反射" tabindex="-1">反射 <a class="header-anchor" href="#反射" aria-label="Permalink to “反射”">​</a></h3>`,3)),a("p",null,[s[48]||(s[48]=n("是的，Emgo 支持 ",-1)),e(p,{href:"https://blog.golang.org/laws-of-reflection"},{default:l(()=>[...s[47]||(s[47]=[n("反射",-1)])]),_:1}),s[49]||(s[49]=n("。",-1)),s[50]||(s[50]=a("code",null,"reflect",-1)),s[51]||(s[51]=n(" 包尚未完成，但是已完成的部分足以实现 ",-1)),s[52]||(s[52]=a("code",null,"fmt.Print",-1)),s[53]||(s[53]=n(" 函数族了。来看看我们可以在小型 MCU 上做什么。",-1))]),a("p",null,[s[56]||(s[56]=n("为了减少内存使用，我们将使用 ",-1)),a("ruby",null,[e(p,{href:"http://infocenter.arm.com/help/topic/com.arm.doc.dui0471g/Bgbjjgij.html"},{default:l(()=>[...s[54]||(s[54]=[n("半主机",-1)])]),_:1}),s[55]||(s[55]=a("rt",null,"semihosting",-1))]),s[57]||(s[57]=n(" 作为标准输出。为了方便起见，我们还编写了简单的 ",-1)),s[58]||(s[58]=a("code",null,"println",-1)),s[59]||(s[59]=n(" 函数，它在某种程度上类似于 ",-1)),s[60]||(s[60]=a("code",null,"fmt.Println",-1)),s[61]||(s[61]=n("。",-1))]),s[100]||(s[100]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p><code>semihosting.OpenFile</code> 函数允许在主机端打开/创建文件。特殊路径 <code>:tt</code> 对应于主机的标准输出。</p><p><code>println</code> 函数接受任意数量的参数，每个参数的类型都是任意的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func println(args ...interface{})</span></span></code></pre></div>`,4)),a("p",null,[s[63]||(s[63]=n("可能是因为任何类型都实现了空接口 ",-1)),s[64]||(s[64]=a("code",null,"interface{}",-1)),s[65]||(s[65]=n("。 ",-1)),s[66]||(s[66]=a("code",null,"println",-1)),s[67]||(s[67]=n(" 使用 ",-1)),e(p,{href:"https://golang.org/doc/effective_go.html#type_switch"},{default:l(()=>[...s[62]||(s[62]=[n("类型开关",-1)])]),_:1}),s[68]||(s[68]=n(" 打印字符串，整数和布尔值：",-1))]),s[101]||(s[101]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>switch v := a.(type) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>此外，它还支持任何实现了 <code>stringer</code> 接口的类型，即任何具有 <code>String()</code> 方法的类型。在任何 <code>case</code> 子句中，<code>v</code> 变量具有正确的类型，与 <code>case</code> 关键字后列出的类型相同。</p><p><code>reflect.ValueOf(p)</code> 函数通过允许以编程的方式分析其类型和内容的形式返回 <code>p</code>。如你所见，我们甚至可以使用 <code>v.Elem()</code> 取消引用指针，并打印所有结构体及其名称。</p><p>让我们尝试编译这段代码。现在让我们看看如果编译时没有类型和字段名，会有什么结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc -nt -nf</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  16028     216     312   16556    40ac cortexm0.elf</span></span></code></pre></div><p>闪存上只剩下 140 个可用字节。让我们使用启用了半主机的 OpenOCD 加载它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ openocd -d0 -f interface/stlink.cfg -f target/stm32f0x.cfg -c &#39;init; program cortexm0.elf; arm semihosting enable; reset run&#39;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>如果你实际运行此代码，则会注意到半主机运行缓慢，尤其是在逐字节写入时（缓冲很有用）。</p><p>如你所见，<code>*p</code> 没有类型名称，并且所有结构字段都具有相同的 <code>X.</code> 名称。让我们再次编译该程序，这次不带 <code>-nt -nf</code> 选项：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  16052     216     312   16580    40c4 cortexm0.elf</span></span></code></pre></div><p>现在已经包括了类型和字段名称，但仅在 <s><em>main.go</em> 文件中</s> <code>main</code> 包中定义了它们。该程序的输出如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>kind(p) = ptr</span></span>
<span class="line"><span>kind(*p) = struct</span></span>
<span class="line"><span>type(*p) = S</span></span>
<span class="line"><span>*p = {</span></span>
<span class="line"><span>   A : -123</span></span>
<span class="line"><span>   B : true</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,12)),a("p",null,[s[70]||(s[70]=n("反射是任何易于使用的序列化库的关键部分，而像 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/JSON"},{default:l(()=>[...s[69]||(s[69]=[n("JSON",-1)])]),_:1}),s[71]||(s[71]=n(" 这样的序列化 ",-1)),s[72]||(s[72]=a("s",null,"算法",-1)),s[73]||(s[73]=n(" 在",-1)),s[74]||(s[74]=a("ruby",null,[n("物联网"),a("rt",null,"IoT")],-1)),s[75]||(s[75]=n("时代也越来越重要。",-1))]),s[102]||(s[102]=a("p",null,"这些就是我完成的本文的第二部分。我认为有机会进行第三部分，更具娱乐性的部分，在那里我们将各种有趣的设备连接到这块板上。如果这块板装不下，我们就换一块大一点的。",-1)),s[103]||(s[103]=a("hr",null,null,-1)),a("p",null,[s[77]||(s[77]=n("via: ",-1)),e(p,{href:"https://ziutek.github.io/2018/04/14/go_on_very_small_hardware2.html"},{default:l(()=>[...s[76]||(s[76]=[n("https://ziutek.github.io/2018/04/14/go_on_very_small_hardware2.html",-1)])]),_:1})]),a("p",null,[s[81]||(s[81]=n("作者：",-1)),e(p,{href:"https://ziutek.github.io/"},{default:l(()=>[...s[78]||(s[78]=[n("Michał Derkacz",-1)])]),_:1}),s[82]||(s[82]=n(" 译者：",-1)),e(p,{href:"https://github.com/gxlct008"},{default:l(()=>[...s[79]||(s[79]=[n("gxlct008",-1)])]),_:1}),s[83]||(s[83]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[80]||(s[80]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[86]||(s[86]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[84]||(s[84]=[n("LCTT",-1)])]),_:1}),s[87]||(s[87]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[85]||(s[85]=[n("Linux中国",-1)])]),_:1}),s[88]||(s[88]=n(" 荣誉推出",-1))])])}const x=t(d,[["render",g]]);export{v as __pageData,x as default};
