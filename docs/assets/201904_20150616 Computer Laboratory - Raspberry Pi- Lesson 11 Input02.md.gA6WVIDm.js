import{_ as t,a0 as r,w as d,s as c,I as n,x as a,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"计算机实验室之树莓派：课程 11 输入02 | LCTT x X-CMD","titleTemplate":false,"description":"计算机实验室之树莓派：课程 11 输入02 | LCTT (201904) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"计算机实验室之树莓派：课程 11 输入02 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"计算机实验室之树莓派：课程 11 输入02 | LCTT (201904) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201904/20150616 Computer Laboratory - Raspberry Pi- Lesson 11 Input02","title":"计算机实验室之树莓派：课程 11 输入02","tag":"201904","desc":""},"relativePath":"201904/20150616 Computer Laboratory - Raspberry Pi- Lesson 11 Input02.md","filePath":"[post].md"}'),o={name:"201904/20150616 Computer Laboratory - Raspberry Pi- Lesson 11 Input02.md"};function h(g,s,b,k,u,m){const p=r("Link");return d(),c("div",null,[s[26]||(s[26]=n("h1",{id:"计算机实验室之树莓派-课程-11-输入02",tabindex:"-1"},[a("计算机实验室之树莓派：课程 11 输入02 "),n("a",{class:"header-anchor",href:"#计算机实验室之树莓派-课程-11-输入02","aria-label":"Permalink to “计算机实验室之树莓派：课程 11 输入02”"},"​")],-1)),n("p",null,[s[1]||(s[1]=a("课程输入 02 是以课程输入 01 为基础讲解的，通过一个简单的命令行实现用户的命令输入和计算机的处理和显示。本文假设你已经具备 ",-1)),e(p,{href:"https://linux.cn/article-10676-1.html"},{default:i(()=>[...s[0]||(s[0]=[a("课程11：输入01",-1)])]),_:1}),s[2]||(s[2]=a(" 的操作系统代码基础。",-1))]),s[27]||(s[27]=l(`<h3 id="_1、终端" tabindex="-1">1、终端 <a class="header-anchor" href="#_1、终端" aria-label="Permalink to “1、终端”">​</a></h3><p>几乎所有的操作系统都是以字符终端显示启动的。经典的黑底白字，通过键盘输入计算机要执行的命令，然后会提示你拼写错误，或者恰好得到你想要的执行结果。这种方法有两个主要优点：键盘和显示器可以提供简易、健壮的计算机交互机制，几乎所有的计算机系统都采用这个机制，这个也广泛被系统管理员应用。</p><blockquote><p>早期的计算一般是在一栋楼里的一个巨型计算机系统，它有很多可以输命令的&#39;终端&#39;。计算机依次执行不同来源的命令。</p></blockquote><p>让我们分析下真正想要哪些信息：</p><ol><li>计算机打开后，显示欢迎信息</li><li>计算机启动后可以接受输入标志</li><li>用户从键盘输入带参数的命令</li><li>用户输入回车键或提交按钮</li><li>计算机解析命令后执行可用的命令</li><li>计算机显示命令的执行结果，过程信息</li><li>循环跳转到步骤 2</li></ol><p>这样的终端被定义为标准的输入输出设备。用于（显示）输入的屏幕和打印输出内容的屏幕是同一个（LCTT 译注：最早期的输出打印真是“打印”到打印机/电传机的，而用于输入的终端只是键盘，除非做了回显，否则输出终端是不会显示输入的字符的）。也就是说终端是对字符显示的一个抽象。字符显示中，单个字符是最小的单元，而不是像素。屏幕被划分成固定数量不同颜色的字符。我们可以在现有的屏幕代码基础上，先存储字符和对应的颜色，然后再用方法 <code>DrawCharacter</code> 把其推送到屏幕上。一旦我们需要字符显示，就只需要在屏幕上画出一行字符串。</p><p>新建文件名为 <code>terminal.s</code>，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.section .data</span></span>
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
<span class="line"><span>.endr</span></span></code></pre></div><p>这是文件终端的配置数据文件。我们有两个主要的存储变量：<code>terminalBuffer</code> 和 <code>terminalScreen</code>。<code>terminalBuffer</code> 保存所有显示过的字符。它保存 128 行字符文本（1 行包含 128 个字符）。每个字符有一个 ASCII 字符和颜色单元组成，初始值为 0x7f（ASCII 的删除字符）和 0（前景色和背景色为黑）。<code>terminalScreen</code> 保存当前屏幕显示的字符。它保存 128x48 个字符，与 <code>terminalBuffer</code> 初始化值一样。你可能会觉得我仅需要 <code>terminalScreen</code> 就够了，为什么还要<code>terminalBuffer</code>，其实有两个好处：</p><ol><li>我们可以很容易看到字符串的变化，只需画出有变化的字符。</li><li>我们可以回滚终端显示的历史字符，也就是缓冲的字符（有限制）</li></ol><p>这种独特的技巧在低功耗系统里很常见。画屏是很耗时的操作，因此我们仅在不得已的时候才去执行这个操作。在这个系统里，我们可以任意改变 <code>terminalBuffer</code>，然后调用一个仅拷贝屏幕上字节变化的方法。也就是说我们不需要持续画出每个字符，这样可以节省一大段跨行文本的操作时间。</p><blockquote><p>你总是需要尝试去设计一个高效的系统，如果在很少变化的情况下这个系统会运行的更快。</p></blockquote><p>其他在 <code>.data</code> 段的值得含义如下：</p><ul><li><code>terminalStart</code> 写入到 <code>terminalBuffer</code> 的第一个字符</li><li><code>terminalStop</code> 写入到 <code>terminalBuffer</code> 的最后一个字符</li><li><code>terminalView</code> 表示当前屏幕的第一个字符，这样我们可以控制滚动屏幕</li><li><code>temrinalColour</code> 即将被描画的字符颜色</li></ul><p><code>terminalStart</code> 需要保存起来的原因是 <code>termainlBuffer</code> 是一个环状缓冲区。意思是当缓冲区变满时，末尾地方会回滚覆盖开始位置，这样最后一个字符变成了第一个字符。因此我们需要将 <code>terminalStart</code> 往前推进，这样我们知道我们已经占满它了。如何实现缓冲区检测：如果索引越界到缓冲区的末尾，就将索引指向缓冲区的开始位置。环状缓冲区是一个比较常见的存储大量数据的高明方法，往往这些数据的最近部分比较重要。它允许无限制的写入，只保证最近一些特定数据有效。这个常常用于信号处理和数据压缩算法。这样的情况，可以允许我们存储 128 行终端记录，超过128行也不会有问题。如果不是这样，当超过第 128 行时，我们需要把 127 行分别向前拷贝一次，这样很浪费时间。</p><p><img src="https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/images/circular_buffer.png" alt="显示 Hellow world 插入到大小为5的循环缓冲区的示意图。"></p><blockquote><p>环状缓冲区是<strong>数据结构</strong>一个例子。这是一个组织数据的思路，有时我们通过软件实现这种思路。</p></blockquote>`,17)),n("p",null,[s[4]||(s[4]=a("之前已经提到过 ",-1)),s[5]||(s[5]=n("code",null,"terminalColour",-1)),s[6]||(s[6]=a(" 几次了。你可以根据你的想法实现终端颜色，但这个文本终端有 16 个前景色和 16 个背景色（这里相当于有 16^2 = 256 种组合）。",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Color_Graphics_Adapter"},{default:i(()=>[...s[3]||(s[3]=[a("CGA",-1)])]),_:1}),s[7]||(s[7]=a("终端的颜色定义如下：",-1))]),s[28]||(s[28]=l(`<p>表格 1.1 - CGA 颜色编码</p><div class="table-wrap"><table><thead><tr><th>序号</th><th>颜色 (R, G, B)</th></tr></thead><tbody><tr><td>0</td><td>黑 (0, 0, 0)</td></tr><tr><td>1</td><td>蓝 (0, 0, ⅔)</td></tr><tr><td>2</td><td>绿 (0, ⅔, 0)</td></tr><tr><td>3</td><td>青色 (0, ⅔, ⅔)</td></tr><tr><td>4</td><td>红色 (⅔, 0, 0)</td></tr><tr><td>5</td><td>品红 (⅔, 0, ⅔)</td></tr><tr><td>6</td><td>棕色 (⅔, ⅓, 0)</td></tr><tr><td>7</td><td>浅灰色 (⅔, ⅔, ⅔)</td></tr><tr><td>8</td><td>灰色 (⅓, ⅓, ⅓)</td></tr><tr><td>9</td><td>淡蓝色 (⅓, ⅓, 1)</td></tr><tr><td>10</td><td>淡绿色 (⅓, 1, ⅓)</td></tr><tr><td>11</td><td>淡青色 (⅓, 1, 1)</td></tr><tr><td>12</td><td>淡红色 (1, ⅓, ⅓)</td></tr><tr><td>13</td><td>浅品红 (1, ⅓, 1)</td></tr><tr><td>14</td><td>黄色 (1, 1, ⅓)</td></tr><tr><td>15</td><td>白色 (1, 1, 1)</td></tr></tbody></table></div><p>我们将前景色保存到颜色的低字节，背景色保存到颜色高字节。除了棕色，其他这些颜色遵循一种模式如二进制的高位比特代表增加 ⅓ 到每个组件，其他比特代表增加 ⅔ 到各自组件。这样很容易进行 RGB 颜色转换。</p><blockquote><p>棕色作为替代色（黑黄色）既不吸引人也没有什么用处。</p></blockquote><p>我们需要一个方法从 <code>TerminalColour</code> 读取颜色编码的四个比特，然后用 16 比特等效参数调用 <code>SetForeColour</code>。尝试你自己实现。如果你感觉麻烦或者还没有完成屏幕系列课程，我们的实现如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.section .text</span></span>
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
<span class="line"><span>b SetForeColour</span></span></code></pre></div><h3 id="_2、文本显示" tabindex="-1">2、文本显示 <a class="header-anchor" href="#_2、文本显示" aria-label="Permalink to “2、文本显示”">​</a></h3><p>我们的终端第一个真正需要的方法是 <code>TerminalDisplay</code>，它用来把当前的数据从 <code>terminalBuffer</code>拷贝到 <code>terminalScreen</code> 和实际的屏幕。如上所述，这个方法必须是最小开销的操作，因为我们需要频繁调用它。它主要比较 <code>terminalBuffer</code> 与 <code>terminalDisplay</code> 的文本，然后只拷贝有差异的字节。请记住 <code>terminalBuffer</code> 是以环状缓冲区运行的，这种情况，就是从 <code>terminalView</code> 到 <code>terminalStop</code>，或者 128*48 个字符，要看哪个来的最快。如果我们遇到 <code>terminalStop</code>，我们将会假定在这之后的所有字符是 7f<sub>16</sub> (ASCII 删除字符)，颜色为 0（黑色前景色和背景色）。</p><p>让我们看看必须要做的事情：</p><ol><li>加载 <code>terminalView</code>、<code>terminalStop</code> 和 <code>terminalDisplay</code> 的地址。</li><li>对于每一行： 1. 对于每一列： <ol><li>如果 <code>terminalView</code> 不等于 <code>terminalStop</code>，根据 <code>terminalView</code> 加载当前字符和颜色</li><li>否则加载 0x7f 和颜色 0</li><li>从 <code>terminalDisplay</code> 加载当前的字符</li><li>如果字符和颜色相同，直接跳转到第 10 步</li><li>存储字符和颜色到 <code>terminalDisplay</code></li><li>用 <code>r0</code> 作为背景色参数调用 <code>TerminalColour</code></li><li>用 <code>r0 = 0x7f</code>（ASCII 删除字符，一个块）、 <code>r1 = x</code>、<code>r2 = y</code> 调用 <code>DrawCharacter</code></li><li>用 <code>r0</code> 作为前景色参数调用 <code>TerminalColour</code></li><li>用 <code>r0 = 字符</code>、<code>r1 = x</code>、<code>r2 = y</code> 调用 <code>DrawCharacter</code></li><li>对位置参数 <code>terminalDisplay</code> 累加 2</li><li>如果 <code>terminalView</code> 不等于 <code>terminalStop</code>，<code>terminalView</code> 位置参数累加 2</li><li>如果 <code>terminalView</code> 位置已经是文件缓冲器的末尾，将它设置为缓冲区的开始位置</li><li>x 坐标增加 8</li></ol></li></ol><pre><code>2. y 坐标增加 16
</code></pre><p>尝试去自己实现吧。如果你遇到问题，我们的方案下面给出来了：</p><p>1、我这里的变量有点乱。为了方便起见，我用 <code>taddr</code> 存储 <code>textBuffer</code> 的末尾位置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl TerminalDisplay</span></span>
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
<span class="line"><span>mov screen,taddr</span></span></code></pre></div><p>2、从 <code>yLoop</code> 开始运行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov y,#0</span></span>
<span class="line"><span>yLoop$:</span></span></code></pre></div><p>2.1、</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov x,#0</span></span>
<span class="line"><span>xLoop$:</span></span></code></pre></div><p>从 <code>xLoop</code> 开始运行。</p><p>2.1.1、为了方便起见，我把字符和颜色同时加载到 <code>char</code> 变量了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq view,stop</span></span>
<span class="line"><span>ldrneh char,[view]</span></span></code></pre></div><p>2.1.2、这行是对上面一行的补充说明：读取黑色的删除字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>moveq char,#0x7f</span></span></code></pre></div><p>2.1.3、为了简便我把字符和颜色同时加载到 <code>col</code> 里。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ldrh col,[screen]</span></span></code></pre></div><p>2.1.4、 现在我用 <code>teq</code> 指令检查是否有数据变化</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq col,char</span></span>
<span class="line"><span>beq xLoopContinue$</span></span></code></pre></div><p>2.1.5、我可以容易的保存当前值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>strh char,[screen]</span></span></code></pre></div><p>2.1.6、我用比特偏移指令 <code>lsr</code> 和 <code>and</code> 指令从切分 <code>char</code> 变量，将颜色放到 <code>col</code> 变量，字符放到 <code>char</code> 变量，然后再用比特偏移指令 <code>lsr</code> 获取背景色后调用 <code>TerminalColour</code> 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lsr col,char,#8</span></span>
<span class="line"><span>and char,#0x7f</span></span>
<span class="line"><span>lsr r0,col,#4</span></span>
<span class="line"><span>bl TerminalColour</span></span></code></pre></div><p>2.1.7、写入一个彩色的删除字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#0x7f</span></span>
<span class="line"><span>mov r1,x</span></span>
<span class="line"><span>mov r2,y</span></span>
<span class="line"><span>bl DrawCharacter</span></span></code></pre></div><p>2.1.8、用 <code>and</code> 指令获取 <code>col</code> 变量的低半字节，然后调用 <code>TerminalColour</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>and r0,col,#0xf</span></span>
<span class="line"><span>bl TerminalColour</span></span></code></pre></div><p>2.1.9、写入我们需要的字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,char</span></span>
<span class="line"><span>mov r1,x</span></span>
<span class="line"><span>mov r2,y</span></span>
<span class="line"><span>bl DrawCharacter</span></span></code></pre></div><p>2.1.10、自增屏幕指针</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>xLoopContinue$:</span></span>
<span class="line"><span>add screen,#2</span></span></code></pre></div><p>2.1.11、如果可能自增 <code>view</code> 指针</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq view,stop</span></span>
<span class="line"><span>addne view,#2</span></span></code></pre></div><p>2.1.12、很容易检测 <code>view</code> 指针是否越界到缓冲区的末尾，因为缓冲区的地址保存在 <code>taddr</code> 变量里</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq view,taddr</span></span>
<span class="line"><span>subeq view,#128*128*2</span></span></code></pre></div><p>2.1.13、 如果还有字符需要显示，我们就需要自增 <code>x</code> 变量然后到 <code>xLoop</code> 循环执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>add x,#8</span></span>
<span class="line"><span>teq x,#1024</span></span>
<span class="line"><span>bne xLoop$</span></span></code></pre></div><p>2.2、 如果还有更多的字符显示我们就需要自增 <code>y</code> 变量，然后到 <code>yLoop</code> 循环执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>add y,#16</span></span>
<span class="line"><span>teq y,#768</span></span>
<span class="line"><span>bne yLoop$</span></span></code></pre></div><p>3、不要忘记最后清除变量</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pop {r4,r5,r6,r7,r8,r9,r10,r11,pc}</span></span>
<span class="line"><span>.unreq x</span></span>
<span class="line"><span>.unreq y</span></span>
<span class="line"><span>.unreq char</span></span>
<span class="line"><span>.unreq col</span></span>
<span class="line"><span>.unreq screen</span></span>
<span class="line"><span>.unreq taddr</span></span>
<span class="line"><span>.unreq view</span></span>
<span class="line"><span>.unreq stop</span></span></code></pre></div><h3 id="_3、行打印" tabindex="-1">3、行打印 <a class="header-anchor" href="#_3、行打印" aria-label="Permalink to “3、行打印”">​</a></h3><p>现在我有了自己 <code>TerminalDisplay</code> 方法，它可以自动显示 <code>terminalBuffer</code> 内容到 <code>terminalScreen</code>，因此理论上我们可以画出文本。但是实际上我们没有任何基于字符显示的例程。 首先快速容易上手的方法便是 <code>TerminalClear</code>， 它可以彻底清除终端。这个方法不用循环也很容易实现。可以尝试分析下面的方法应该不难：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl TerminalClear</span></span>
<span class="line"><span>TerminalClear:</span></span>
<span class="line"><span>ldr r0,=terminalStart</span></span>
<span class="line"><span>add r1,r0,#terminalBuffer-terminalStart</span></span>
<span class="line"><span>str r1,[r0]</span></span>
<span class="line"><span>str r1,[r0,#terminalStop-terminalStart]</span></span>
<span class="line"><span>str r1,[r0,#terminalView-terminalStart]</span></span>
<span class="line"><span>mov pc,lr</span></span></code></pre></div><p>现在我们需要构造一个字符显示的基础方法：<code>Print</code> 函数。它将保存在 <code>r0</code> 的字符串和保存在 <code>r1</code> 的字符串长度简单的写到屏幕上。有一些特定字符需要特别的注意，这些特定的操作是确保 <code>terminalView</code> 是最新的。我们来分析一下需要做什么：</p><ol><li>检查字符串的长度是否为 0，如果是就直接返回</li><li>加载 <code>terminalStop</code> 和 <code>terminalView</code></li><li>计算出 <code>terminalStop</code> 的 x 坐标</li><li>对每一个字符的操作： 1. 检查字符是否为新起一行 2. 如果是的话，自增 <code>bufferStop</code> 到行末，同时写入黑色删除字符 3. 否则拷贝当前 <code>terminalColour</code> 的字符 4. 检查是否在行末 5. 如果是，检查从 <code>terminalView</code> 到 <code>terminalStop</code> 之间的字符数是否大于一屏 6. 如果是，<code>terminalView</code> 自增一行 7. 检查 <code>terminalView</code> 是否为缓冲区的末尾，如果是的话将其替换为缓冲区的起始位置 8. 检查 <code>terminalStop</code> 是否为缓冲区的末尾，如果是的话将其替换为缓冲区的起始位置 9. 检查 <code>terminalStop</code> 是否等于 <code>terminalStart</code>， 如果是的话 <code>terminalStart</code> 自增一行。 10. 检查 <code>terminalStart</code> 是否为缓冲区的末尾，如果是的话将其替换为缓冲区的起始位置</li><li>存取 <code>terminalStop</code> 和 <code>terminalView</code></li></ol><p>试一下自己去实现。我们的方案提供如下：</p><p>1、这个是 <code>Print</code> 函数开始快速检查字符串为0的代码</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl Print</span></span>
<span class="line"><span>Print:</span></span>
<span class="line"><span>teq r1,#0</span></span>
<span class="line"><span>moveq pc,lr</span></span></code></pre></div><p>2、这里我做了很多配置。 <code>bufferStart</code> 代表 <code>terminalStart</code>， <code>bufferStop</code> 代表<code>terminalStop</code>， <code>view</code> 代表 <code>terminalView</code>，<code>taddr</code> 代表 <code>terminalBuffer</code> 的末尾地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>push {r4,r5,r6,r7,r8,r9,r10,r11,lr}</span></span>
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
<span class="line"><span>add taddr,#128*128*2</span></span></code></pre></div><p>3、和通常一样，巧妙的对齐技巧让许多事情更容易。由于需要对齐 <code>terminalBuffer</code>，每个字符的 x 坐标需要 8 位要除以 2。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>and x,bufferStop,#0xfe</span></span>
<span class="line"><span>lsr x,#1</span></span></code></pre></div><p>4.1、我们需要检查新行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>charLoop$:</span></span>
<span class="line"><span>ldrb char,[string]</span></span>
<span class="line"><span>and char,#0x7f</span></span>
<span class="line"><span>teq char,#&#39;\\n&#39;</span></span>
<span class="line"><span>bne charNormal$</span></span></code></pre></div><p>4.2、循环执行值到行末写入 0x7f；黑色删除字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#0x7f</span></span>
<span class="line"><span>clearLine$:</span></span>
<span class="line"><span>strh r0,[bufferStop]</span></span>
<span class="line"><span>add bufferStop,#2</span></span>
<span class="line"><span>add x,#1</span></span>
<span class="line"><span>teq x,#128 blt clearLine$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>b charLoopContinue$</span></span></code></pre></div><p>4.3、存储字符串的当前字符和 <code>terminalBuffer</code> 末尾的 <code>terminalColour</code> 然后将它和 x 变量自增</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>charNormal$:</span></span>
<span class="line"><span>strb char,[bufferStop]</span></span>
<span class="line"><span>ldr r0,=terminalColour</span></span>
<span class="line"><span>ldrb r0,[r0]</span></span>
<span class="line"><span>strb r0,[bufferStop,#1]</span></span>
<span class="line"><span>add bufferStop,#2</span></span>
<span class="line"><span>add x,#1</span></span></code></pre></div><p>4.4、检查 x 是否为行末；128</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>charLoopContinue$:</span></span>
<span class="line"><span>cmp x,#128</span></span>
<span class="line"><span>blt noScroll$</span></span></code></pre></div><p>4.5、设置 x 为 0 然后检查我们是否已经显示超过 1 屏。请记住，我们是用的循环缓冲区，因此如果 <code>bufferStop</code> 和 <code>view</code> 之前的差是负值，我们实际上是环绕了缓冲区。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov x,#0</span></span>
<span class="line"><span>subs r0,bufferStop,view</span></span>
<span class="line"><span>addlt r0,#128*128*2</span></span>
<span class="line"><span>cmp r0,#128*(768/16)*2</span></span></code></pre></div><p>4.6、增加一行字节到 <code>view</code> 的地址</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>addge view,#128*2</span></span></code></pre></div><p>4.7、 如果 <code>view</code> 地址是缓冲区的末尾，我们就从它上面减去缓冲区的长度，让其指向开始位置。我会在开始的时候设置 <code>taddr</code> 为缓冲区的末尾地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq view,taddr</span></span>
<span class="line"><span>subeq view,taddr,#128*128*2</span></span></code></pre></div><p>4.8、如果 <code>stop</code> 的地址在缓冲区末尾，我们就从它上面减去缓冲区的长度，让其指向开始位置。我会在开始的时候设置 <code>taddr</code> 为缓冲区的末尾地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>noScroll$:</span></span>
<span class="line"><span>teq bufferStop,taddr</span></span>
<span class="line"><span>subeq bufferStop,taddr,#128*128*2</span></span></code></pre></div><p>4.9、检查 <code>bufferStop</code> 是否等于 <code>bufferStart</code>。 如果等于增加一行到 <code>bufferStart</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq bufferStop,bufferStart</span></span>
<span class="line"><span>addeq bufferStart,#128*2</span></span></code></pre></div><p>4.10、如果 <code>start</code> 的地址在缓冲区的末尾，我们就从它上面减去缓冲区的长度，让其指向开始位置。我会在开始的时候设置 <code>taddr</code> 为缓冲区的末尾地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq bufferStart,taddr</span></span>
<span class="line"><span>subeq bufferStart,taddr,#128*128*2</span></span></code></pre></div><p>循环执行知道字符串结束</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>subs length,#1</span></span>
<span class="line"><span>add string,#1</span></span>
<span class="line"><span>bgt charLoop$</span></span></code></pre></div><p>5、保存变量然后返回</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>charLoopBreak$:</span></span>
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
<span class="line"><span>.unreq view</span></span></code></pre></div><p>这个方法允许我们打印任意字符到屏幕。然而我们用了颜色变量，但实际上没有设置它。一般终端用特性的组合字符去行修改颜色。如 ASCII 转义（1b<sub>16</sub>）后面跟着一个 0 - f 的 16 进制的数，就可以设置前景色为 CGA 颜色号。如果你自己想尝试实现；在下载页面有一个我的详细的例子。</p><h3 id="_4、标志输入" tabindex="-1">4、标志输入 <a class="header-anchor" href="#_4、标志输入" aria-label="Permalink to “4、标志输入”">​</a></h3><p>现在我们有一个可以打印和显示文本的输出终端。这仅仅是说对了一半，我们需要输入。我们想实现一个方法：<code>ReadLine</code>，可以保存文件的一行文本，文本位置由 <code>r0</code> 给出，最大的长度由 <code>r1</code> 给出，返回 <code>r0</code> 里面的字符串长度。棘手的是用户输出字符的时候要回显功能，同时想要退格键的删除功能和命令回车执行功能。它们还需要一个闪烁的下划线代表计算机需要输入。这些完全合理的要求让构造这个方法更具有挑战性。有一个方法完成这些需求就是存储用户输入的文本和文件大小到内存的某个地方。然后当调用 <code>ReadLine</code> 的时候，移动 <code>terminalStop</code> 的地址到它开始的地方然后调用 <code>Print</code>。也就是说我们只需要确保在内存维护一个字符串，然后构造一个我们自己的打印函数。</p><blockquote><p>按照惯例，许多编程语言中，任意程序可以访问 stdin 和 stdin，它们可以连接到终端的输入和输出流。在图形程序其实也可以进行同样操作，但实际几乎不用。</p></blockquote><p>让我们看看 <code>ReadLine</code> 做了哪些事情：</p><ol><li>如果字符串可保存的最大长度为 0，直接返回</li><li>检索 <code>terminalStop</code> 和 <code>terminalStop</code> 的当前值</li><li>如果字符串的最大长度大约缓冲区的一半，就设置大小为缓冲区的一半</li><li>从最大长度里面减去 1 来确保输入的闪烁字符或结束符</li><li>向字符串写入一个下划线</li><li>写入一个 <code>terminalView</code> 和 <code>terminalStop</code> 的地址到内存</li><li>调用 <code>Print</code> 打印当前字符串</li><li>调用 <code>TerminalDisplay</code></li><li>调用 <code>KeyboardUpdate</code></li><li>调用 <code>KeyboardGetChar</code></li><li>如果是一个新行直接跳转到第 16 步</li><li>如果是一个退格键，将字符串长度减 1（如果其大于 0）</li><li>如果是一个普通字符，将它写入字符串（字符串大小确保小于最大值）</li><li>如果字符串是以下划线结束，写入一个空格，否则写入下划线</li><li>跳转到第 6 步</li><li>字符串的末尾写入一个新行字符</li><li>调用 <code>Print</code> 和 <code>TerminalDisplay</code></li><li>用结束符替换新行</li><li>返回字符串的长度</li></ol><p>为了方便读者理解，然后然后自己去实现，我们的实现提供如下：</p><ol><li>快速处理长度为 0 的情况</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl ReadLine</span></span>
<span class="line"><span>ReadLine:</span></span>
<span class="line"><span>teq r1,#0</span></span>
<span class="line"><span>moveq r0,#0</span></span>
<span class="line"><span>moveq pc,lr</span></span></code></pre></div><p>2、考虑到常见的场景，我们初期做了很多初始化动作。<code>input</code> 代表 <code>terminalStop</code> 的值，<code>view</code> 代表 <code>terminalView</code>。<code>Length</code> 默认为 <code>0</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>string .req r4</span></span>
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
<span class="line"><span>mov length,#0</span></span></code></pre></div><p>3、我们必须检查异常大的读操作，我们不能处理超过 <code>terminalBuffer</code> 大小的输入（理论上可行，但是 <code>terminalStart</code> 移动越过存储的 terminalStop\`，会有很多问题）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cmp maxLength,#128*64</span></span>
<span class="line"><span>movhi maxLength,#128*64</span></span></code></pre></div><p>4、由于用户需要一个闪烁的光标，我们需要一个备用字符在理想状况在这个字符串后面放一个结束符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sub maxLength,#1</span></span></code></pre></div><p>5、写入一个下划线让用户知道我们可以输入了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#&#39;_&#39;</span></span>
<span class="line"><span>strb r0,[string,length]</span></span></code></pre></div><p>6、保存 <code>terminalStop</code> 和 <code>terminalView</code>。这个对重置一个终端很重要，它会修改这些变量。严格讲也可以修改 <code>terminalStart</code>，但是不可逆。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>readLoop$:</span></span>
<span class="line"><span>str input,[taddr,#terminalStop-terminalStart]</span></span>
<span class="line"><span>str view,[taddr,#terminalView-terminalStart]</span></span></code></pre></div><p>7、写入当前的输入。由于下划线因此字符串长度加 1</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,string</span></span>
<span class="line"><span>mov r1,length</span></span>
<span class="line"><span>add r1,#1</span></span>
<span class="line"><span>bl Print</span></span></code></pre></div><p>8、拷贝下一个文本到屏幕</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bl TerminalDisplay</span></span></code></pre></div><p>9、获取最近一次键盘输入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bl KeyboardUpdate</span></span></code></pre></div><p>10、检索键盘输入键值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bl KeyboardGetChar</span></span></code></pre></div><p>11、如果我们有一个回车键，循环中断。如果有结束符和一个退格键也会同样跳出循环。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>teq r0,#&#39;\\n&#39;</span></span>
<span class="line"><span>beq readLoopBreak$</span></span>
<span class="line"><span>teq r0,#0</span></span>
<span class="line"><span>beq cursor$</span></span>
<span class="line"><span>teq r0,#&#39;\\b&#39;</span></span>
<span class="line"><span>bne standard$</span></span></code></pre></div><p>12、从 <code>length</code> 里面删除一个字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>delete$:</span></span>
<span class="line"><span>cmp length,#0</span></span>
<span class="line"><span>subgt length,#1</span></span>
<span class="line"><span>b cursor$</span></span></code></pre></div><p>13、写回一个普通字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>standard$:</span></span>
<span class="line"><span>cmp length,maxLength</span></span>
<span class="line"><span>bge cursor$</span></span>
<span class="line"><span>strb r0,[string,length]</span></span>
<span class="line"><span>add length,#1</span></span></code></pre></div><p>14、加载最近的一个字符，如果不是下划线则修改为下换线，如果是则修改为空格</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cursor$:</span></span>
<span class="line"><span>ldrb r0,[string,length]</span></span>
<span class="line"><span>teq r0,#&#39;_&#39;</span></span>
<span class="line"><span>moveq r0,#&#39; &#39;</span></span>
<span class="line"><span>movne r0,#&#39;_&#39;</span></span>
<span class="line"><span>strb r0,[string,length]</span></span></code></pre></div><p>15、循环执行值到用户输入按下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>b readLoop$</span></span>
<span class="line"><span>readLoopBreak$:</span></span></code></pre></div><p>16、在字符串的结尾处存入一个新行字符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#&#39;\\n&#39;</span></span>
<span class="line"><span>strb r0,[string,length]</span></span></code></pre></div><p>17、重置 <code>terminalView</code> 和 <code>terminalStop</code> 然后调用 <code>Print</code> 和 <code>TerminalDisplay</code> 显示最终的输入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>str input,[taddr,#terminalStop-terminalStart]</span></span>
<span class="line"><span>str view,[taddr,#terminalView-terminalStart]</span></span>
<span class="line"><span>mov r0,string</span></span>
<span class="line"><span>mov r1,length</span></span>
<span class="line"><span>add r1,#1</span></span>
<span class="line"><span>bl Print</span></span>
<span class="line"><span>bl TerminalDisplay</span></span></code></pre></div><p>18、写入一个结束符</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#0</span></span>
<span class="line"><span>strb r0,[string,length]</span></span></code></pre></div><p>19、返回长度</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,length</span></span>
<span class="line"><span>pop {r4,r5,r6,r7,r8,r9,pc}</span></span>
<span class="line"><span>.unreq string</span></span>
<span class="line"><span>.unreq maxLength</span></span>
<span class="line"><span>.unreq input</span></span>
<span class="line"><span>.unreq taddr</span></span>
<span class="line"><span>.unreq length</span></span>
<span class="line"><span>.unreq view</span></span></code></pre></div><h3 id="_5、终端-机器进化" tabindex="-1">5、终端：机器进化 <a class="header-anchor" href="#_5、终端-机器进化" aria-label="Permalink to “5、终端：机器进化”">​</a></h3><p>现在我们理论用终端和用户可以交互了。最显而易见的事情就是拿去测试了！删除 <code>main.s</code> 里 <code>bl UsbInitialise</code> 后面的代码后如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>reset$:</span></span>
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
<span class="line"><span>.int commandStringEnd, 0</span></span></code></pre></div><p>这块代码集成了一个简易的命令行操作系统。支持命令：<code>echo</code>、<code>reset</code>、<code>ok</code> 和 <code>cls</code>。<code>echo</code> 拷贝任意文本到终端，<code>reset</code> 命令会在系统出现问题的是复位操作系统，<code>ok</code> 有两个功能：设置 OK 灯亮灭，最后 <code>cls</code> 调用 TerminalClear 清空终端。</p><p>试试树莓派的代码吧。如果遇到问题，请参照问题集锦页面吧。</p>`,135)),n("p",null,[s[9]||(s[9]=a("如果运行正常，祝贺你完成了一个操作系统基本终端和输入系列的课程。很遗憾这个教程先讲到这里，但是我希望将来能制作更多教程。有问题请反馈至 ",-1)),e(p,{href:"mailto:awc32@cam.ac.uk"},{default:i(()=>[...s[8]||(s[8]=[a("awc32@cam.ac.uk",-1)])]),_:1}),s[10]||(s[10]=a("。",-1))]),s[29]||(s[29]=n("p",null,[a("你已经在建立了一个简易的终端操作系统。我们的代码在 commandTable 构造了一个可用的命令表格。每个表格的入口是一个整型数字，用来表示字符串的地址，和一个整型数字表格代码的执行入口。 最后一个入口是 为 0 的 "),n("code",null,"commandStringEnd"),a("。尝试实现你自己的命令，可以参照已有的函数，建立一个新的。函数的参数 "),n("code",null,"r0"),a(" 是用户输入的命令地址，"),n("code",null,"r1"),a(" 是其长度。你可以用这个传递你输入值到你的命令。也许你有一个计算器程序，或许是一个绘图程序或国际象棋。不管你的什么点子，让它跑起来！")],-1)),s[30]||(s[30]=n("hr",null,null,-1)),n("p",null,[s[12]||(s[12]=a("via: ",-1)),e(p,{href:"https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/input02.html"},{default:i(()=>[...s[11]||(s[11]=[a("https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/input02.html",-1)])]),_:1})]),n("p",null,[s[17]||(s[17]=a("作者：",-1)),e(p,{href:"https://www.cl.cam.ac.uk"},{default:i(()=>[...s[13]||(s[13]=[a("Alex Chadwick",-1)])]),_:1}),s[18]||(s[18]=a(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[14]||(s[14]=[a("lujun9972",-1)])]),_:1}),s[19]||(s[19]=a(" 译者：",-1)),e(p,{href:"https://github.com/guevaraya"},{default:i(()=>[...s[15]||(s[15]=[a("guevaraya",-1)])]),_:1}),s[20]||(s[20]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[16]||(s[16]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[23]||(s[23]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[a("LCTT",-1)])]),_:1}),s[24]||(s[24]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[a("Linux中国",-1)])]),_:1}),s[25]||(s[25]=a(" 荣誉推出",-1))])])}const C=t(o,[["render",h]]);export{v as __pageData,C as default};
