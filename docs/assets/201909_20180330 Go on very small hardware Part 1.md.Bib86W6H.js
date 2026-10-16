import{_ as t,a0 as o,w as d,s as r,ao as i,I as a,a1 as e,A as l,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"Go 语言在极小硬件上的运用（一） | LCTT x X-CMD","titleTemplate":false,"description":"Go 语言在极小硬件上的运用（一） | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Go 语言在极小硬件上的运用（一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Go 语言在极小硬件上的运用（一） | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20180330 Go on very small hardware Part 1","title":"Go 语言在极小硬件上的运用（一）","tag":"201909","desc":""},"relativePath":"201909/20180330 Go on very small hardware Part 1.md","filePath":"[post].md"}'),c={name:"201909/20180330 Go on very small hardware Part 1.md"};function g(u,s,m,k,h,b){const p=o("Link");return d(),r("div",null,[s[63]||(s[63]=i('<h1 id="go-语言在极小硬件上的运用-一" tabindex="-1">Go 语言在极小硬件上的运用（一） <a class="header-anchor" href="#go-语言在极小硬件上的运用-一" aria-label="Permalink to “Go 语言在极小硬件上的运用（一）”">​</a></h1><p>Go 语言，能在多低下的配置上运行并发挥作用呢？</p><p>我最近购买了一个特别便宜的开发板：</p><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/board.jpg" alt="STM32F030F4P6"></p><p>我购买它的理由有三个。首先，我（作为程序员）从未接触过 STM320 系列的开发板。其次，STM32F10x 系列使用也有点少了。STM320 系列的 MCU 很便宜，有更新一些的外设，对系列产品进行了改进，问题修复也做得更好了。最后，为了这篇文章，我选用了这一系列中最低配置的开发板，整件事情就变得有趣起来了。</p><h3 id="硬件部分" tabindex="-1">硬件部分 <a class="header-anchor" href="#硬件部分" aria-label="Permalink to “硬件部分”">​</a></h3>',6)),a("p",null,[e(p,{href:"http://www.st.com/content/st_com/en/products/microcontrollers/stm32-32-bit-arm-cortex-mcus/stm32-mainstream-mcus/stm32f0-series/stm32f0x0-value-line/stm32f030f4.html"},{default:l(()=>[...s[0]||(s[0]=[n("STM32F030F4P6",-1)])]),_:1}),s[1]||(s[1]=n(" 给人留下了很深的印象：",-1))]),a("ul",null,[a("li",null,[s[3]||(s[3]=n("CPU: ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/ARM_Cortex-M#Cortex-M0"},{default:l(()=>[...s[2]||(s[2]=[n("Cortex M0",-1)])]),_:1}),s[4]||(s[4]=n(" 48 MHz（最低配置，只有 12000 个逻辑门电路）",-1))]),s[5]||(s[5]=a("li",null,"RAM: 4 KB，",-1)),s[6]||(s[6]=a("li",null,"Flash: 16 KB，",-1)),s[7]||(s[7]=a("li",null,"ADC、SPI、I2C、USART 和几个定时器",-1))]),s[64]||(s[64]=a("p",null,"以上这些采用了 TSSOP20 封装。正如你所见，这是一个很小的 32 位系统。",-1)),s[65]||(s[65]=a("h3",{id:"软件部分",tabindex:"-1"},[n("软件部分 "),a("a",{class:"header-anchor",href:"#软件部分","aria-label":"Permalink to “软件部分”"},"​")],-1)),a("p",null,[s[9]||(s[9]=n("如果你想知道如何在这块开发板上使用 ",-1)),e(p,{href:"https://golang.org/"},{default:l(()=>[...s[8]||(s[8]=[n("Go",-1)])]),_:1}),s[10]||(s[10]=n(" 编程，你需要反复阅读硬件规范手册。你必须面对这样的真实情况：在 Go 编译器中给 Cortex-M0 提供支持的可能性很小。而且，这还仅仅只是第一个要解决的问题。",-1))]),a("p",null,[s[12]||(s[12]=n("我会使用 ",-1)),e(p,{href:"https://github.com/ziutek/emgo"},{default:l(()=>[...s[11]||(s[11]=[n("Emgo",-1)])]),_:1}),s[13]||(s[13]=n("，但别担心，之后你会看到，它如何让 Go 在如此小的系统上尽可能发挥作用。",-1))]),a("p",null,[s[16]||(s[16]=n("在我拿到这块开发板之前，对 ",-1)),e(p,{href:"https://github.com/ziutek/emgo/tree/master/egpath/src/stm32/hal"},{default:l(()=>[...s[14]||(s[14]=[n("stm32/hal",-1)])]),_:1}),s[17]||(s[17]=n(" 系列下的 F0 MCU 没有任何支持。在简单研究",-1)),e(p,{href:"http://www.st.com/resource/en/reference_manual/dm00091010.pdf"},{default:l(()=>[...s[15]||(s[15]=[n("参考手册",-1)])]),_:1}),s[18]||(s[18]=n("后，我发现 STM32F0 系列是 STM32F3 削减版，这让在新端口上开发的工作变得容易了一些。",-1))]),s[66]||(s[66]=i(`<p>如果你想接着本文的步骤做下去，需要先安装 Emgo</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cd $HOME</span></span>
<span class="line"><span>git clone https://github.com/ziutek/emgo/</span></span>
<span class="line"><span>cd emgo/egc</span></span>
<span class="line"><span>go install</span></span></code></pre></div><p>然后设置一下环境变量</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>export EGCC=path_to_arm_gcc      # eg. /usr/local/arm/bin/arm-none-eabi-gcc</span></span>
<span class="line"><span>export EGLD=path_to_arm_linker   # eg. /usr/local/arm/bin/arm-none-eabi-ld</span></span>
<span class="line"><span>export EGAR=path_to_arm_archiver # eg. /usr/local/arm/bin/arm-none-eabi-ar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export EGROOT=$HOME/emgo/egroot</span></span>
<span class="line"><span>export EGPATH=$HOME/emgo/egpath</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export EGARCH=cortexm0</span></span>
<span class="line"><span>export EGOS=noos</span></span>
<span class="line"><span>export EGTARGET=f030x6</span></span></code></pre></div>`,4)),a("p",null,[s[20]||(s[20]=n("更详细的说明可以在 ",-1)),e(p,{href:"https://github.com/ziutek/emgo"},{default:l(()=>[...s[19]||(s[19]=[n("Emgo",-1)])]),_:1}),s[21]||(s[21]=n(" 官网上找到。",-1))]),s[67]||(s[67]=i(`<p>要确保 <code>egc</code> 在你的 <code>PATH</code> 中。 你可以使用 <code>go build</code> 来代替 <code>go install</code>，然后把 <code>egc</code> 复制到你的 <code>$HOME/bin</code> 或 <code>/usr/local/bin</code> 中。</p><p>现在，为你的第一个 Emgo 程序创建一个新文件夹，随后把示例中链接器脚本复制过来：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir $HOME/firstemgo</span></span>
<span class="line"><span>cd $HOME/firstemgo</span></span>
<span class="line"><span>cp $EGPATH/src/stm32/examples/f030-demo-board/blinky/script.ld .</span></span></code></pre></div><h3 id="最基本程序" tabindex="-1">最基本程序 <a class="header-anchor" href="#最基本程序" aria-label="Permalink to “最基本程序”">​</a></h3><p>在 <code>main.go</code> 文件中创建一个最基本的程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>文件编译没有出现任何问题：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>   7452     172     104    7728    1e30 cortexm0.elf</span></span></code></pre></div><p>第一次编译可能会花点时间。编译后产生的二进制占用了 7624 个字节的 Flash 空间（文本 + 数据）。对于一个什么都没做的程序来说，占用的空间有些大。还剩下 8760 字节，可以用来做些有用的事。</p><p>不妨试试传统的 “Hello, World!” 程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	fmt.Println(&quot;Hello, World!&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>不幸的是，这次结果有些糟糕：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>/usr/local/arm/bin/arm-none-eabi-ld: /home/michal/P/go/src/github.com/ziutek/emgo/egpath/src/stm32/examples/f030-demo-board/blog/cortexm0.elf section \`.text&#39; will not fit in region \`Flash&#39;</span></span>
<span class="line"><span>/usr/local/arm/bin/arm-none-eabi-ld: region \`Flash&#39; overflowed by 10880 bytes</span></span>
<span class="line"><span>exit status 1</span></span></code></pre></div><p>“Hello, World!” 需要 STM32F030x6 上至少 32KB 的 Flash 空间。</p><p><code>fmt</code> 包强制包含整个 <code>strconv</code> 和 <code>reflect</code> 包。这三个包，即使在精简版本中的 Emgo 中，占用空间也很大。我们不能使用这个例子了。有很多的应用不需要好看的文本输出。通常，一个或多个 LED，或者七段数码管显示就足够了。不过，在第二部分，我会尝试使用 <code>strconv</code> 包来格式化，并在 UART 上显示一些数字和文本。</p><h3 id="闪烁" tabindex="-1">闪烁 <a class="header-anchor" href="#闪烁" aria-label="Permalink to “闪烁”">​</a></h3><p>我们的开发板上有一个与 PA4 引脚和 VCC 相连的 LED。这次我们的代码稍稍长了一些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>按照惯例，<code>init</code> 函数用来初始化和配置外设。</p><p><code>system.SetupPLL(8, 1, 48/8)</code> 用来配置 RCC，将外部的 8 MHz 振荡器的 PLL 作为系统时钟源。PLL 分频器设置为 1，倍频数设置为 48/8 =6，这样系统时钟频率为 48MHz。</p><p><code>systick.Setup(2e6)</code> 将 Cortex-M SYSTICK 时钟作为系统时钟，每隔 2e6 次纳秒运行一次（每秒钟 500 次）。</p><p><code>gpio.A.EnableClock(false)</code> 开启了 GPIO A 口的时钟。<code>False</code> 意味着这一时钟在低功耗模式下会被禁用，但在 STM32F0 系列中并未实现这一功能。</p><p><code>led.Setup(cfg)</code> 设置 PA4 引脚为开漏输出。</p><p><code>led.Clear()</code> 将 PA4 引脚设为低，在开漏设置中，打开 LED。</p><p><code>led.Set()</code> 将 PA4 设为高电平状态，关掉LED。</p><p>编译这个代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>   9772     172     168   10112    2780 cortexm0.elf</span></span></code></pre></div><p>正如你所看到的，这个闪烁程序占用了 2320 字节，比最基本程序占用空间要大。还有 6440 字节的剩余空间。</p><p>看看代码是否能运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ openocd -d0 -f interface/stlink.cfg -f target/stm32f0x.cfg -c &#39;init; program cortexm0.elf; reset run; exit&#39;</span></span>
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
<span class="line"><span>adapter speed: 950 kHz</span></span></code></pre></div>`,30)),a("p",null,[s[24]||(s[24]=n("在这篇文章中，这是我第一次，将一个短视频转换成",-1)),e(p,{href:"https://en.wikipedia.org/wiki/APNG"},{default:l(()=>[...s[22]||(s[22]=[n("动画 PNG",-1)])]),_:1}),s[25]||(s[25]=n("。我对此印象很深，再见了 YouTube。 对于 IE 用户，我很抱歉，更多信息请看 ",-1)),e(p,{href:"http://apngasm.sourceforge.net/"},{default:l(()=>[...s[23]||(s[23]=[n("apngasm",-1)])]),_:1}),s[26]||(s[26]=n("。我本应该学习 HTML5，但现在，APNG 是我最喜欢的，用来播放循环短视频的方法了。",-1))]),s[68]||(s[68]=i(`<p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/blinky.png" alt="STM32F030F4P6"></p><h3 id="更多的-go-语言编程" tabindex="-1">更多的 Go 语言编程 <a class="header-anchor" href="#更多的-go-语言编程" aria-label="Permalink to “更多的 Go 语言编程”">​</a></h3><p>如果你不是一个 Go 程序员，但你已经听说过一些关于 Go 语言的事情，你可能会说：“Go 语法很好，但跟 C 比起来，并没有明显的提升。让我看看 Go 语言的通道和协程！”</p><p>接下来我会一一展示:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>代码改动很小: 添加了第二个 LED，上一个例子中的 <code>main</code> 函数被重命名为 <code>blinky</code> 并且需要提供两个参数。 <code>main</code> 在新的协程中先调用 <code>blinky</code>，所以两个 LED 灯在并行使用。值得一提的是，<code>gpio.Pin</code> 可以同时访问同一 GPIO 口的不同引脚。</p><p>Emgo 还有很多不足。其中之一就是你需要提前规定 <code>goroutines(tasks)</code> 的最大执行数量。是时候修改 <code>script.ld</code> 了:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ISRStack = 1024;</span></span>
<span class="line"><span>MainStack = 1024;</span></span>
<span class="line"><span>TaskStack = 1024;</span></span>
<span class="line"><span>MaxTasks = 2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INCLUDE stm32/f030x4</span></span>
<span class="line"><span>INCLUDE stm32/loadflash</span></span>
<span class="line"><span>INCLUDE noos-cortexm</span></span></code></pre></div><p>栈的大小需要靠猜，现在还不用关心这一点。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  10020     172     172   10364    287c cortexm0.elf</span></span></code></pre></div><p>另一个 LED 和协程一共占用了 248 字节的 Flash 空间。</p><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/goroutines.png" alt="STM32F030F4P6"></p><h3 id="通道" tabindex="-1">通道 <a class="header-anchor" href="#通道" aria-label="Permalink to “通道”">​</a></h3>`,13)),a("p",null,[s[28]||(s[28]=n("通道是 Go 语言中协程之间相互通信的一种",-1)),e(p,{href:"https://blog.golang.org/share-memory-by-communicating"},{default:l(()=>[...s[27]||(s[27]=[n("推荐方式",-1)])]),_:1}),s[29]||(s[29]=n("。Emgo 甚至能允许通过",-1)),s[30]||(s[30]=a("em",null,"中断处理",-1)),s[31]||(s[31]=n("来使用缓冲通道。下一个例子就展示了这种情况。",-1))]),s[69]||(s[69]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>与之前例子相比较下的不同:</p><ol><li>添加了第三个 LED，并连接到 PA9 引脚（UART 头的 TXD 引脚）。</li><li>时钟（<code>TIM3</code>）作为中断源。</li><li>新函数 <code>timerISR</code> 用来处理 <code>irq.TIM3</code> 的中断。</li><li>新增容量为 1 的缓冲通道是为了 <code>timerISR</code> 和 <code>blinky</code> 协程之间的通信。</li><li><code>ISRs</code> 数组作为<em>中断向量表</em>，是更大的<em>异常向量表</em>的一部分。</li><li><code>blinky</code> 中的 <code>for</code> 语句被替换成 <code>range</code> 语句。</li></ol><p>为了方便起见，所有的 LED，或者说它们的引脚，都被放在 <code>leds</code> 这个数组里。另外，所有引脚在被配置为输出之前，都设置为一种已知的初始状态（高电平状态）。</p><p>在这个例子里，我们想让时钟以 1 kHz 的频率运行。为了配置 TIM3 预分频器，我们需要知道它的输入时钟频率。通过参考手册我们知道，输入时钟频率在 <code>APBCLK = AHBCLK</code> 时，与 <code>APBCLK</code> 相同，反之等于 2 倍的 <code>APBCLK</code>。</p><p>如果 CNT 寄存器增加 1 kHz，那么 ARR 寄存器的值等于<em>更新事件</em>（重载事件）在毫秒中的计数周期。 为了让更新事件产生中断，必须要设置 DIER 寄存器中的 UIE 位。CEN 位能启动时钟。</p><p>时钟外设在低功耗模式下必须启用，为了自身能在 CPU 处于休眠时保持运行: <code>timer.EnableClock(true)</code>。这在 STM32F0 中无关紧要，但对代码可移植性却十分重要。</p>`,7)),a("p",null,[s[33]||(s[33]=a("code",null,"timerISR",-1)),s[34]||(s[34]=n(" 函数处理 ",-1)),s[35]||(s[35]=a("code",null,"irq.TIM3",-1)),s[36]||(s[36]=n(" 的中断请求。",-1)),s[37]||(s[37]=a("code",null,"timer.SR.Store(0)",-1)),s[38]||(s[38]=n(" 会清除 SR 寄存器里的所有事件标志，无效化向 ",-1)),e(p,{href:"http://infocenter.arm.com/help/topic/com.arm.doc.ddi0432c/Cihbecee.html"},{default:l(()=>[...s[32]||(s[32]=[n("NVIC",-1)])]),_:1}),s[39]||(s[39]=n(" 发出的所有中断请求。凭借经验，由于中断请求无效的延时性，需要在程序一开始马上清除所有的中断标志。这避免了无意间再次调用处理。为了确保万无一失，需要先清除标志，再读取，但是在我们的例子中，清除标志就已经足够了。",-1))]),s[70]||(s[70]=i(`<p>下面的这几行代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>select {</span></span>
<span class="line"><span>case ch &lt;- 0:</span></span>
<span class="line"><span>	// Success</span></span>
<span class="line"><span>default:</span></span>
<span class="line"><span>	leds[0].Clear()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>是 Go 语言中，如何在通道上非阻塞地发送消息的方法。中断处理程序无法一直等待通道中的空余空间。如果通道已满，则执行 <code>default</code>，开发板上的LED就会开启，直到下一次中断。</p><p><code>ISRs</code> 数组包含了中断向量表。<code>//c:__attribute__((section(&quot;.ISRs&quot;)))</code> 会导致链接器将数组插入到 <code>.ISRs</code> 节中。</p><p><code>blinky</code> 的 <code>for</code> 循环的新写法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for range ch {</span></span>
<span class="line"><span>	led.Clear()</span></span>
<span class="line"><span>	delay.Millisec(100)</span></span>
<span class="line"><span>	led.Set()</span></span>
<span class="line"><span>	delay.Millisec(period - 100)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>等价于：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for {</span></span>
<span class="line"><span>	_, ok := &lt;-ch</span></span>
<span class="line"><span>	if !ok {</span></span>
<span class="line"><span>		break // Channel closed.</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	led.Clear()</span></span>
<span class="line"><span>	delay.Millisec(100)</span></span>
<span class="line"><span>	led.Set()</span></span>
<span class="line"><span>	delay.Millisec(period - 100)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意，在这个例子中，我们不在意通道中收到的值，我们只对其接受到的消息感兴趣。我们可以在声明时，将通道元素类型中的 <code>int</code> 用空结构体 <code>struct{}</code> 来代替，发送消息时，用 <code>struct{}{}</code> 结构体的值代替 0，但这部分对新手来说可能会有些陌生。</p><p>让我们来编译一下代码:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ egc</span></span>
<span class="line"><span>$ arm-none-eabi-size cortexm0.elf</span></span>
<span class="line"><span>   text    data     bss     dec     hex filename</span></span>
<span class="line"><span>  11096     228     188   11512    2cf8 cortexm0.elf</span></span></code></pre></div><p>新的例子占用了 11324 字节的 Flash 空间，比上一个例子多占用了 1132 字节。</p>`,12)),a("p",null,[s[41]||(s[41]=n("采用现在的时序，两个闪烁协程从通道中获取数据的速度，比 ",-1)),s[42]||(s[42]=a("code",null,"timerISR",-1)),s[43]||(s[43]=n(" 发送数据的速度要快。所以它们在同时等待新数据，你还能观察到 ",-1)),s[44]||(s[44]=a("code",null,"select",-1)),s[45]||(s[45]=n(" 的随机性，这也是 ",-1)),e(p,{href:"https://golang.org/ref/spec#Select_statements"},{default:l(()=>[...s[40]||(s[40]=[n("Go 规范",-1)])]),_:1}),s[46]||(s[46]=n("所要求的。",-1))]),s[71]||(s[71]=i('<p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/channels1.png" alt="STM32F030F4P6"></p><p>开发板上的 LED 一直没有亮起，说明通道从未出现过溢出。</p><p>我们可以加快消息发送的速度，将 <code>timer.ARR.Store(700)</code> 改为 <code>timer.ARR.Store(200)</code>。 现在 <code>timerISR</code> 每秒钟发送 5 条消息，但是两个接收者加起来，每秒也只能接受 4 条消息。</p><p><img src="https://ziutek.github.io/images/mcu/f030-demo-board/channels2.png" alt="STM32F030F4P6"></p><p>正如你所看到的，<code>timerISR</code> 开启黄色 LED 灯，意味着通道上已经没有剩余空间了。</p><p>第一部分到这里就结束了。你应该知道，这一部分并未展示 Go 中最重要的部分，接口。</p>',6)),a("p",null,[s[48]||(s[48]=n("协程和通道只是一些方便好用的语法。你可以用自己的代码来替换它们，这并不容易，但也可以实现。接口是Go 语言的基础。这是文章中 ",-1)),e(p,{href:"https://ziutek.github.io/2018/04/14/go_on_very_small_hardware2.html"},{default:l(()=>[...s[47]||(s[47]=[n("第二部分",-1)])]),_:1}),s[49]||(s[49]=n("所要提到的.",-1))]),s[72]||(s[72]=a("p",null,"在 Flash 上我们还有些剩余空间。",-1)),s[73]||(s[73]=a("hr",null,null,-1)),a("p",null,[s[51]||(s[51]=n("via: ",-1)),e(p,{href:"https://ziutek.github.io/2018/03/30/go_on_very_small_hardware.html"},{default:l(()=>[...s[50]||(s[50]=[n("https://ziutek.github.io/2018/03/30/go_on_very_small_hardware.html",-1)])]),_:1})]),a("p",null,[s[55]||(s[55]=n("作者：",-1)),e(p,{href:"https://ziutek.github.io/"},{default:l(()=>[...s[52]||(s[52]=[n("Michał Derkacz",-1)])]),_:1}),s[56]||(s[56]=n(" 译者：",-1)),e(p,{href:"https://github.com/wenwensnow"},{default:l(()=>[...s[53]||(s[53]=[n("wenwensnow",-1)])]),_:1}),s[57]||(s[57]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[54]||(s[54]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[60]||(s[60]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[58]||(s[58]=[n("LCTT",-1)])]),_:1}),s[61]||(s[61]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[59]||(s[59]=[n("Linux中国",-1)])]),_:1}),s[62]||(s[62]=n(" 荣誉推出",-1))])])}const S=t(c,[["render",g]]);export{y as __pageData,S as default};
