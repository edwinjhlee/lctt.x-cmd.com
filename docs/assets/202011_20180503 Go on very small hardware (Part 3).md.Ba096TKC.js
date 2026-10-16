import{_ as t,a0 as r,w as o,s as d,I as a,x as n,a1 as l,A as i,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"Go 语言在极小硬件上的运用（三） | LCTT x X-CMD","titleTemplate":false,"description":"Go 语言在极小硬件上的运用（三） | LCTT (202011) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Go 语言在极小硬件上的运用（三） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Go 语言在极小硬件上的运用（三） | LCTT (202011) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202011/20180503 Go on very small hardware (Part 3)","title":"Go 语言在极小硬件上的运用（三）","tag":"202011","desc":""},"relativePath":"202011/20180503 Go on very small hardware (Part 3).md","filePath":"[post].md"}'),u={name:"202011/20180503 Go on very small hardware (Part 3).md"};function g(b,s,m,h,k,f){const p=r("Link");return o(),d("div",null,[s[85]||(s[85]=a("h1",{id:"go-语言在极小硬件上的运用-三",tabindex:"-1"},[n("Go 语言在极小硬件上的运用（三） "),a("a",{class:"header-anchor",href:"#go-语言在极小硬件上的运用-三","aria-label":"Permalink to “Go 语言在极小硬件上的运用（三）”"},"​")],-1)),s[86]||(s[86]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202010/24/090026to9c9sweyrw9ww37.png",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("在本系列的 ",-1)),l(p,{href:"https://linux.cn/article-11383-1.html"},{default:i(()=>[...s[0]||(s[0]=[n("第一",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),l(p,{href:"https://linux.cn/article-12747-1.html"},{default:i(()=>[...s[1]||(s[1]=[n("第二",-1)])]),_:1}),s[4]||(s[4]=n(" 部分中讨论的大多数示例都是以某种方式闪烁的 LED。起初它可能很有趣，但是一段时间后变得有些无聊。让我们做些更有趣的事情……",-1))]),s[87]||(s[87]=a("p",null,"…让我们点亮更多的 LED！",-1)),s[88]||(s[88]=a("p",null,[a("img",{src:"https://ziutek.github.io/images/mcu/f030-demo-board/board.jpg",alt:"STM32F030F4P6"})],-1)),s[89]||(s[89]=a("h3",{id:"ws281x-led",tabindex:"-1"},[n("WS281x LED "),a("a",{class:"header-anchor",href:"#ws281x-led","aria-label":"Permalink to “WS281x LED”"},"​")],-1)),a("p",null,[l(p,{href:"http://www.world-semi.com/solution/list-4-1.html"},{default:i(()=>[...s[5]||(s[5]=[n("WS281x",-1)])]),_:1}),s[6]||(s[6]=n(" RGB LED（及其克隆品）非常受欢迎。你可以以单个元素购买、链成长条或组装成矩阵、环或其他形状。",-1))]),s[90]||(s[90]=a("p",null,[a("img",{src:"https://ziutek.github.io/images/led/ws2812b.jpg",alt:"WS2812B"})],-1)),s[91]||(s[91]=a("p",null,[n("它们可以串联连接，基于这个事实，你可以只用 MCU 的单个引脚就可以控制一个很长的 LED 灯条。不幸的是，它们的内部控制器使用的物理协议不能直接适用于你在 MCU 中可以找到的任何外围设备。你必须使用 "),a("ruby",null,[n("位脉冲"),a("rt",null,"bit-banging")]),n("或以特殊方式使用可用的外设。")],-1)),a("p",null,[s[8]||(s[8]=n("哪种可用的解决方案最有效取决于同时控制的 LED 灯条数量。如果你必须驱动 4 到 16 个灯条，那么最有效的方法是 ",-1)),l(p,{href:"http://www.martinhubacek.cz/arm/improved-stm32-ws2812b-library"},{default:i(()=>[...s[7]||(s[7]=[n("使用定时器和 DMA",-1)])]),_:1}),s[9]||(s[9]=n("（请不要忽略这篇文章末尾的链接）。",-1))]),s[92]||(s[92]=a("p",null,"如果只需要控制一个或两个灯条，请使用可用的 SPI 或 UART 外设。对于 SPI，你只能在发送的一个字节中编码两个 WS281x 位。由于巧妙地使用了起始位和停止位，UART 允许更密集的编码：每发送一个字节 3 位。",-1)),a("p",null,[s[12]||(s[12]=n("我在 ",-1)),l(p,{href:"http://mikrokontrolery.blogspot.com/2011/03/Diody-WS2812B-sterowanie-XMega-cz-2.html"},{default:i(()=>[...s[10]||(s[10]=[n("此站点",-1)])]),_:1}),s[13]||(s[13]=n(" 上找到了有关 UART 协议如何适用于 WS281x 协议的最佳解释。如果你不懂波兰语，这里是 ",-1)),l(p,{href:"https://translate.google.pl/translate?sl=pl&tl=en&u=http://mikrokontrolery.blogspot.com/2011/03/Diody-WS2812B-sterowanie-XMega-cz-2.html"},{default:i(()=>[...s[11]||(s[11]=[n("英文翻译",-1)])]),_:1}),s[14]||(s[14]=n("。",-1))]),a("p",null,[s[20]||(s[20]=n("基于 WS281x 的 LED 仍然是最受欢迎的，但市场上也有 SPI 控制的 LED：",-1)),l(p,{href:"http://neon-world.com/en/product.php"},{default:i(()=>[...s[15]||(s[15]=[n("APA102",-1)])]),_:1}),s[21]||(s[21]=n("、",-1)),l(p,{href:"http://www.normandled.com/index.php/Product/view/id/800.html"},{default:i(()=>[...s[16]||(s[16]=[n("SK9822",-1)])]),_:1}),s[22]||(s[22]=n("。关于它们的三篇有趣的文章在这里：",-1)),l(p,{href:"https://cpldcpu.wordpress.com/2014/08/27/apa102/"},{default:i(()=>[...s[17]||(s[17]=[n("1",-1)])]),_:1}),s[23]||(s[23]=n("、",-1)),l(p,{href:"https://cpldcpu.wordpress.com/2014/11/30/understanding-the-apa102-superled/"},{default:i(()=>[...s[18]||(s[18]=[n("2",-1)])]),_:1}),s[24]||(s[24]=n("、",-1)),l(p,{href:"https://cpldcpu.wordpress.com/2016/12/13/sk9822-a-clone-of-the-apa102/"},{default:i(()=>[...s[19]||(s[19]=[n("3",-1)])]),_:1}),s[25]||(s[25]=n("。",-1))]),s[93]||(s[93]=a("h3",{id:"led-环",tabindex:"-1"},[n("LED 环 "),a("a",{class:"header-anchor",href:"#led-环","aria-label":"Permalink to “LED 环”"},"​")],-1)),s[94]||(s[94]=a("p",null,"市场上有许多基于 WS2812 的环。我有一个这样的：",-1)),s[95]||(s[95]=a("p",null,[a("img",{src:"https://ziutek.github.io/images/led/rgbring.jpg",alt:"WS2812B"})],-1)),s[96]||(s[96]=a("p",null,"它具有 24 个可单独寻址的 RGB LED（WS2812B），并暴露出四个端子：GND、5V、DI 和 DO。通过将 DI（数据输入）端子连接到上一个的 DO（数据输出）端子，可以链接更多的环或其他基于 WS2812 的东西。",-1)),s[97]||(s[97]=a("p",null,"让我们将这个环连接到我们的 STM32F030 板上。我们将使用基于 UART 的驱动程序，因此 DI 应连接到 UART 接头连接器上的 TXD 引脚。 WS2812B LED 需要至少 3.5V 的电源。 24 个 LED 会消耗大量电流，因此在编程/调试期间，最好将环上的 GND 和 5V 端子直接连接到 ST-LINK 编程器上可用的 GND 和 5V 引脚：",-1)),s[98]||(s[98]=a("p",null,[a("img",{src:"https://ziutek.github.io/images/led/ring-stlink-f030.jpg",alt:"WS2812B"})],-1)),a("p",null,[s[27]||(s[27]=n("我们的 STM32F030F4P6 MCU 和整个 STM32 F0、F3、F7、L4 系列具有 F1、F4、L1 MCU 不具备的一项重要功能：它可以反转 UART 信号，因此我们可以将环直接连接到 UART TXD 引脚。如果你不知道我们需要这种反转，那么你可能没有读过我上面提到的 ",-1)),l(p,{href:"https://translate.google.pl/translate?sl=pl&tl=en&u=http://mikrokontrolery.blogspot.com/2011/03/Diody-WS2812B-sterowanie-XMega-cz-2.html"},{default:i(()=>[...s[26]||(s[26]=[n("文章",-1)])]),_:1}),s[28]||(s[28]=n("。",-1))]),a("p",null,[s[33]||(s[33]=n("因此，你不能以这种方式使用流行的 ",-1)),l(p,{href:"https://jeelabs.org/article/1649a/"},{default:i(()=>[...s[29]||(s[29]=[n("Blue Pill",-1)])]),_:1}),s[34]||(s[34]=n(" 或 ",-1)),l(p,{href:"http://www.st.com/en/evaluation-tools/stm32f4discovery.html"},{default:i(()=>[...s[30]||(s[30]=[n("STM32F4-DISCOVERY",-1)])]),_:1}),s[35]||(s[35]=n("。使用其 SPI 外设或外部反相器。有关使用 SPI 的 NUCLEO-F411RE，请参见 ",-1)),l(p,{href:"https://github.com/ziutek/emgo/tree/master/egpath/src/stm32/examples/minidev/treelights"},{default:i(()=>[...s[31]||(s[31]=[n("圣诞树灯",-1)])]),_:1}),s[36]||(s[36]=n(" 项目作为 UART + 逆变器的示例或 ",-1)),l(p,{href:"https://github.com/ziutek/emgo/tree/master/egpath/src/stm32/examples/nucleo-f411re/ws2812"},{default:i(()=>[...s[32]||(s[32]=[n("WS2812示例",-1)])]),_:1}),s[37]||(s[37]=n("。",-1))]),s[99]||(s[99]=e(`<p>顺便说一下，大多数 DISCOVERY 板可能还有一个问题：它们在 VDD = 3V 而不是 3.3V 的情况下工作。 对于高 DI，WS281x 至少要求电源电压 * 0.7。如果是 5V 电源，则为 3.5V；如果是 4.7V 电源，则为 3.3V；可在 DISCOVERY 的 5V 引脚上找到。如你所见，即使在我们的情况下，第一个 LED 的工作电压也低于规格 0.2V。对于 DISCOVERY 板，如果供电 4.7V，它将工作在低于规格的 0.3V 下；如果供电 5V，它将工作在低于规格 0.5V 下。</p><p>让我们结束这段冗长的介绍并转到代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h4 id="导入部分" tabindex="-1">导入部分 <a class="header-anchor" href="#导入部分" aria-label="Permalink to “导入部分”">​</a></h4><p>与前面的示例相比，导入部分中的新内容是 <code>rand/math</code> 包和带有 <code>led/ws281x</code> 子树的 <code>led</code> 包。 <code>led</code> 包本身包含 <code>Color</code> 类型的定义。 <code>led/ws281x/wsuart</code> 定义了 <code>ColorOrder</code>、<code>Pixel</code> 和 <code>Strip</code> 类型。</p>`,5)),a("p",null,[s[39]||(s[39]=n("我想知道如何使用 ",-1)),s[40]||(s[40]=a("code",null,"image/color",-1)),s[41]||(s[41]=n(" 中的 ",-1)),s[42]||(s[42]=a("code",null,"Color",-1)),s[43]||(s[43]=n(" 或 ",-1)),s[44]||(s[44]=a("code",null,"RGBA",-1)),s[45]||(s[45]=n(" 类型，以及如何以它将实现 ",-1)),s[46]||(s[46]=a("code",null,"image.Image",-1)),s[47]||(s[47]=n(" 接口的方式定义 ",-1)),s[48]||(s[48]=a("code",null,"Strip",-1)),s[49]||(s[49]=n("。 但是由于使用了 ",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Gamma_correction"},{default:i(()=>[...s[38]||(s[38]=[n("gamma 校正",-1)])]),_:1}),s[50]||(s[50]=n(" 和 大开销的 ",-1)),s[51]||(s[51]=a("code",null,"color/draw",-1)),s[52]||(s[52]=n(" 包，我以简单的方式结束：",-1))]),s[100]||(s[100]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type Color uint32</span></span>
<span class="line"><span>type Strip []Pixel</span></span></code></pre></div><p>使用一些有用的方法。然而，这种情况在未来可能会改变。</p><h4 id="init-函数" tabindex="-1">init 函数 <a class="header-anchor" href="#init-函数" aria-label="Permalink to “init 函数”">​</a></h4><p><code>init</code> 函数没有太多新颖之处。 UART 波特率从 115200 更改为 3000000000/1390 ≈ 2158273，相当于每个 WS2812 位 1390 纳秒。 CR2 寄存器中的 TxInv 位设置为反转 TXD 信号。</p><h4 id="main-函数" tabindex="-1">main 函数 <a class="header-anchor" href="#main-函数" aria-label="Permalink to “main 函数”">​</a></h4>`,5)),a("p",null,[s[54]||(s[54]=a("code",null,"XorShift64",-1)),s[55]||(s[55]=n(" 伪随机数生成器用于生成随机颜色。 ",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Xorshift"},{default:i(()=>[...s[53]||(s[53]=[n("XORSHIFT",-1)])]),_:1}),s[56]||(s[56]=n(" 是目前由 ",-1)),s[57]||(s[57]=a("code",null,"math/rand",-1)),s[58]||(s[58]=n(" 包实现的唯一算法。你必须使用带有非零参数的 ",-1)),s[59]||(s[59]=a("code",null,"Seed",-1)),s[60]||(s[60]=n(" 方法显式初始化它。",-1))]),s[101]||(s[101]=e(`<p><code>rgb</code> 变量的类型为 <code>wsuart.ColorOrder</code>，并设置为 WS2812 使用的 GRB 颜色顺序（WS2811 使用 RGB 顺序）。然后用于将颜色转换为像素。</p><p><code>wsuart.Make(24)</code> 创建 24 像素的初始化条带。它等效于：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>strip := make(wsuart.Strip, 24)</span></span>
<span class="line"><span>strip.Clear()</span></span></code></pre></div><p>其余代码使用随机颜色绘制类似于 “Please Wait…” 微调器的内容。</p><p><code>strip</code> 切片充当帧缓冲区。 <code>tts.Write(strip.Bytes())</code> 将帧缓冲区的内容发送到环。</p><h4 id="中断" tabindex="-1">中断 <a class="header-anchor" href="#中断" aria-label="Permalink to “中断”">​</a></h4>`,6)),a("p",null,[s[62]||(s[62]=n("该程序由处理中断的代码组成，与先前的 ",-1)),l(p,{href:"https://ziutek.github.io/2018/04/14/go_on_very_small_hardware2.html#uart"},{default:i(()=>[...s[61]||(s[61]=[n("UART 示例",-1)])]),_:1}),s[63]||(s[63]=n(" 中的代码相同。",-1))]),s[102]||(s[102]=e(`<p>让我们编译并运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  14088     240     204   14532    38c4 cortexm0.elf</span></span>
<span class="line"><span>$ openocd -d0 -f interface/stlink.cfg -f target/stm32f0x.cfg -c &#39;init; program cortexm0.elf; reset run; exit&#39;</span></span></code></pre></div><p>我跳过了 <code>openocd</code> 的输出。下面的视频显示了该程序的工作原理：</p><p><img src="https://ziutek.github.io/videos/rgbspinner.mp4" alt="video"></p><h3 id="让我们做些有用的事情" tabindex="-1">让我们做些有用的事情... <a class="header-anchor" href="#让我们做些有用的事情" aria-label="Permalink to “让我们做些有用的事情...”">​</a></h3>`,5)),a("p",null,[s[65]||(s[65]=n("在 ",-1)),l(p,{href:"https://linux.cn/article-11383-1.html"},{default:i(()=>[...s[64]||(s[64]=[n("第一部分",-1)])]),_:1}),s[66]||(s[66]=n(" 的开头，我曾问过：“Go 能深入到多低层，而还能做一些有用的事情？”。 我们的 MCU 实际上是一种低端设备（8 比特的人可能会不同意我的看法），但到目前为止，我们还没有做任何有用的事情。",-1))]),s[103]||(s[103]=e(`<p>所以... 让我们做些有用的事情... 让我们做个时钟！</p><p>在互联网上有许多由 RGB LED 构成的时钟示例。让我们用我们的小板子和 RGB 环制作自己的时钟。我们按照下面的描述更改先前的代码。</p><h4 id="导入部分-1" tabindex="-1">导入部分 <a class="header-anchor" href="#导入部分-1" aria-label="Permalink to “导入部分”">​</a></h4><p>删除 <code>math/rand</code> 包，然后添加 <code>stm32/hal/exti</code>。</p><h4 id="全局变量" tabindex="-1">全局变量 <a class="header-anchor" href="#全局变量" aria-label="Permalink to “全局变量”">​</a></h4><p>添加两个新的全局变量：<code>btn</code> 和 <code>btnev</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var (</span></span>
<span class="line"><span>    tts   *usart.Driver</span></span>
<span class="line"><span>    btn   gpio.Pin</span></span>
<span class="line"><span>    btnev rtos.EventFlag</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>它们将用来处理那些用于设置时钟的 “按钮”。我们的板子除了重置之外没有其他按钮，但是如果没有它，我们仍然可以通过某种方式进行管理。</p><h4 id="init-函数-1" tabindex="-1">init 函数 <a class="header-anchor" href="#init-函数-1" aria-label="Permalink to “init 函数”">​</a></h4><p>将这段代码添加到 <code>init</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>btn = gpio.A.Pin(4)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>btn.Setup(&amp;gpio.Config{Mode: gpio.In, Pull: gpio.PullUp})</span></span>
<span class="line"><span>ei := exti.Lines(btn.Mask())</span></span>
<span class="line"><span>ei.Connect(btn.Port())</span></span>
<span class="line"><span>ei.EnableFallTrig()</span></span>
<span class="line"><span>ei.EnableRiseTrig()</span></span>
<span class="line"><span>ei.EnableIRQ()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rtos.IRQ(irq.EXTI4_15).Enable()</span></span></code></pre></div><p>在内部<ruby>上拉电阻<rt>pull-up resistor</rt></ruby>启用的情况下，将 PA4 引脚配置为输入。它已连接至板载 LED，但这不会妨碍任何事情。更重要的是它位于 GND 引脚旁边，所以我们可以使用任何金属物体来模拟按钮并设置时钟。作为奖励，我们还有来自板载 LED 的其他反馈。</p><p>我们使用 EXTI 外设来跟踪 PA4 状态。它被配置为在发生任何更改时都会产生中断。</p><h4 id="btnwait-函数" tabindex="-1">btnWait 函数 <a class="header-anchor" href="#btnwait-函数" aria-label="Permalink to “btnWait 函数”">​</a></h4><p>定义一个新的辅助函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func btnWait(state int, deadline int64) bool {</span></span>
<span class="line"><span>    for btn.Load() != state {</span></span>
<span class="line"><span>        if !btnev.Wait(1, deadline) {</span></span>
<span class="line"><span>            return false // timeout</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        btnev.Reset(0)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    delay.Millisec(50) // debouncing</span></span>
<span class="line"><span>    return true</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>它等待 “按钮” 引脚上的指定状态，但只等到最后期限出现。这是稍微改进的轮询代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for btn.Load() != state {</span></span>
<span class="line"><span>    if rtos.Nanosec() &gt;= deadline {</span></span>
<span class="line"><span>        // timeout</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们的 <code>btnWait</code> 函数不是忙于等待 <code>state</code> 或 <code>deadline</code>，而是使用 <code>rtos.EventFlag</code> 类型的 <code>btnev</code> 变量休眠，直到有事情发生。你当然可以使用通道而不是 <code>rtos.EventFlag</code>，但是后者便宜得多。</p><h4 id="main-函数-1" tabindex="-1">main 函数 <a class="header-anchor" href="#main-函数-1" aria-label="Permalink to “main 函数”">​</a></h4><p>我们需要全新的 <code>main</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我们使用 <code>rtos.Nanosec</code> 函数代替 <code>time.Now</code> 来获取当前时间。这样可以节省大量的闪存，但也使我们的时钟变成了不知道日、月、年的老式设备，最糟糕的是它无法处理夏令时的变化。</p><p>我们的环有 24 个 LED，因此秒针的显示精度可以达到 2.5 秒。为了不牺牲这种精度并获得流畅的运行效果，我们使用 1/4 秒作为基准间隔。半秒就足够了，但四分之一秒更准确，而且与 16 和 48 个 LED 配合使用也很好。</p><p>红色、绿色和蓝色分别用于时针、分针和秒针。这允许我们使用简单的“逻辑或操作”进行颜色混合。我们 <code>Color.Blend</code> 方法可以混合任意颜色，但是我们闪存不多，所以我们选择最简单的解决方案。</p><p>我们只有在秒针移动时才重画时钟。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>btnWait(0, int64(qs+ds)*25e7)</span></span></code></pre></div><p>上面的这行代码等待的正是那一刻，或者是按钮的按下。</p><p>每按一下按钮就会把时钟向前调一调。按住按钮一段时间会加速调整。</p><h4 id="中断-1" tabindex="-1">中断 <a class="header-anchor" href="#中断-1" aria-label="Permalink to “中断”">​</a></h4><p>定义新的中断处理程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func exti4_15ISR() {</span></span>
<span class="line"><span>    pending := exti.Pending() &amp; 0xFFF0</span></span>
<span class="line"><span>    pending.ClearPending()</span></span>
<span class="line"><span>    if pending&amp;exti.Lines(btn.Mask()) != 0 {</span></span>
<span class="line"><span>        btnev.Signal(1)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>并将 <code>irq.EXTI4_15: exti4_15ISR</code> 条目添加到 ISR 数组。</p><p>该处理程序（或中断服务程序）处理 EXTI4_15 IRQ。 Cortex-M0 CPU 支持的 IRQ 明显少于其较大的同类兄弟处理器，因此你经常可以看到一个 IRQ 被多个中断源共享。在我们的例子中，一个 IRQ 由 12 个 EXTI 线共享。</p><p>exti4_15ISR 读取所有挂起的位，并从中选择 12 个更高的有效位。接下来，它清除 EXTI 中选中的位并开始处理它们。在我们的例子中，仅检查第 4 位。 <code>btnev.Signal(1)</code> 引发 <code>btnev.Wait(1, deadline)</code> 唤醒并返回 <code>true</code>。</p>`,35)),a("p",null,[s[68]||(s[68]=n("你可以在 ",-1)),l(p,{href:"https://github.com/ziutek/emgo/tree/master/egpath/src/stm32/examples/f030-demo-board/ws2812-clock"},{default:i(()=>[...s[67]||(s[67]=[n("Github",-1)])]),_:1}),s[69]||(s[69]=n(" 上找到完整的代码。让我们来编译它：",-1))]),s[104]||(s[104]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  15960     240     216   16416    4020 cortexm0.elf</span></span></code></pre></div><p>这里所有的改进只得到 184 个字节。让我们再次重新构建所有内容，但这次在 typeinfo 中不使用任何类型和字段名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd $HOME/emgo</span></span>
<span class="line"><span>$ ./clean.sh</span></span>
<span class="line"><span>$ cd $HOME/firstemgo</span></span>
<span class="line"><span>$ egc -nf -nt</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  15120     240     216   15576    3cd8 cortexm0.elf</span></span></code></pre></div><p>现在，有了千字节的空闲空间，你可以改进一些东西。让我们看看它是如何工作的：</p><p><img src="https://ziutek.github.io/videos/rgbclock.mp4" alt="video"></p><p>我不知道我是怎么精确打到 3:00 的！？</p><p>以上就是所有内容！在第 4 部分（本系列的结束）中，我们将尝试在 LCD 上显示一些内容。（LCTT 译注：然而烂尾了，第三篇写于 2018 年，整个博客当年就停更了。）</p><hr>`,8)),a("p",null,[s[71]||(s[71]=n("via: ",-1)),l(p,{href:"https://ziutek.github.io/2018/05/03/go_on_very_small_hardware3.html"},{default:i(()=>[...s[70]||(s[70]=[n("https://ziutek.github.io/2018/05/03/go_on_very_small_hardware3.html",-1)])]),_:1})]),a("p",null,[s[76]||(s[76]=n("作者：",-1)),l(p,{href:"https://ziutek.github.io"},{default:i(()=>[...s[72]||(s[72]=[n("Michał Derkacz",-1)])]),_:1}),s[77]||(s[77]=n(" 选题：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[73]||(s[73]=[n("lujun9972",-1)])]),_:1}),s[78]||(s[78]=n(" 译者：",-1)),l(p,{href:"https://github.com/gxlct008"},{default:i(()=>[...s[74]||(s[74]=[n("gxlct008",-1)])]),_:1}),s[79]||(s[79]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[75]||(s[75]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[82]||(s[82]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[80]||(s[80]=[n("LCTT",-1)])]),_:1}),s[83]||(s[83]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:i(()=>[...s[81]||(s[81]=[n("Linux中国",-1)])]),_:1}),s[84]||(s[84]=n(" 荣誉推出",-1))])])}const T=t(u,[["render",g]]);export{S as __pageData,T as default};
