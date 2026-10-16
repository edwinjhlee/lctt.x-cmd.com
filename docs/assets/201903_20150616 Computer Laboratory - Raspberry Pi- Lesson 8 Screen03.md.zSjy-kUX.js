import{_ as l,a0 as h,w as e,s as k,I as t,x as a,a1 as n,A as p,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const u=JSON.parse('{"title":"计算机实验室之树莓派：课程 8 屏幕03 | LCTT x X-CMD","titleTemplate":false,"description":"计算机实验室之树莓派：课程 8 屏幕03 | LCTT (201903) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"计算机实验室之树莓派：课程 8 屏幕03 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"计算机实验室之树莓派：课程 8 屏幕03 | LCTT (201903) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201903/20150616 Computer Laboratory - Raspberry Pi- Lesson 8 Screen03","title":"计算机实验室之树莓派：课程 8 屏幕03","tag":"201903","desc":""},"relativePath":"201903/20150616 Computer Laboratory - Raspberry Pi- Lesson 8 Screen03.md","filePath":"[post].md"}'),r={name:"201903/20150616 Computer Laboratory - Raspberry Pi- Lesson 8 Screen03.md"};function E(g,s,c,o,y,F){const i=h("Link");return e(),k("div",null,[s[21]||(s[21]=t("h1",{id:"计算机实验室之树莓派-课程-8-屏幕03",tabindex:"-1"},[a("计算机实验室之树莓派：课程 8 屏幕03 "),t("a",{class:"header-anchor",href:"#计算机实验室之树莓派-课程-8-屏幕03","aria-label":"Permalink to “计算机实验室之树莓派：课程 8 屏幕03”"},"​")],-1)),t("p",null,[s[1]||(s[1]=a("屏幕03 课程基于屏幕02 课程来构建，它教你如何绘制文本，和一个操作系统命令行参数上的一个小特性。假设你已经有了",-1)),n(i,{href:"https://linux.cn/article-10551-1.html"},{default:p(()=>[...s[0]||(s[0]=[a("课程 7：屏幕02",-1)])]),_:1}),s[2]||(s[2]=a(" 的操作系统代码，我们将以它为基础来构建。",-1))]),s[22]||(s[22]=d(`<h3 id="_1、字符串的理论知识" tabindex="-1">1、字符串的理论知识 <a class="header-anchor" href="#_1、字符串的理论知识" aria-label="Permalink to “1、字符串的理论知识”">​</a></h3><p>是的，我们的任务是为这个操作系统绘制文本。我们有几个问题需要去处理，最紧急的那个可能是如何去保存文本。令人难以置信的是，文本是迄今为止在计算机上最大的缺陷之一。原本应该是简单的数据类型却导致了操作系统的崩溃，从而削弱其他方面的加密效果，并给使用其它字母表的用户带来了许多问题。尽管如此，它仍然是极其重要的数据类型，因为它将计算机和用户很好地连接起来。文本是计算机能够理解的非常好的结构，同时人类使用它时也有足够的可读性。</p><p>那么，文本是如何保存的呢？非常简单，我们使用一种方法，给每个字母分配一个唯一的编号，然后我们保存一系列的这种编号。看起来很容易吧。问题是，那个编号的数量是不固定的。一些文本段可能比其它的长。保存普通数字，我们有一些固有的限制，即：32 位，我们不能超过这个限制，我们要添加方法去使用该长度的数字等等。“文本”这个术语，我们经常也叫它“字符串”，我们希望能够写一个可用于可变长度字符串的函数，否则就需要写很多函数！对于一般的数字来说，这不是个问题，因为只有几种通用的数字格式（字节、字、半字节、双字节）。</p><blockquote><p>可变数据类型（比如文本）要求能够进行很复杂的处理。</p></blockquote><p>因此，如何判断字符串长度？我想显而易见的答案是存储字符串的长度，然后去存储组成字符串的字符。这称为长度前缀，因为长度位于字符串的前面。不幸的是，计算机科学家的先驱们不同意这么做。他们认为使用一个称为空终止符（<code>NULL</code>）的特殊字符（用 <code>\\0</code> 表示）来表示字符串结束更有意义。这样确定简化了许多字符串算法，因为你只需要持续操作直到遇到空终止符为止。不幸的是，这成为了许多安全问题的根源。如果一个恶意用户给你一个特别长的字符串会发生什么状况？如果没有足够的空间去保存这个特别长的字符串会发生什么状况？你可以使用一个字符串复制函数来做复制，直到遇到空终止符为止，但是因为字符串特别长，而覆写了你的程序，怎么办？这看上去似乎有些较真，但是，缓冲区溢出攻击还是经常发生。长度前缀可以很容易地缓解这种问题，因为它可以很容易地推算出保存这个字符串所需要的缓冲区的长度。作为一个操作系统开发者，我留下这个问题，由你去决定如何才能更好地存储文本。</p><blockquote><p>缓冲区溢出攻击祸害计算机由来已久。最近，Wii、Xbox 和 Playstation 2、以及大型系统如 Microsoft 的 Web 和数据库服务器，都遭受到缓冲区溢出攻击。</p></blockquote><p>接下来的事情是，我们需要确定的是如何最好地将字符映射到数字。幸运的是，这是高度标准化的，我们有两个主要的选择，Unicode 和 ASCII。Unicode 几乎将每个有用的符号都映射为数字，作为代价，我们需要有很多很多的数字，和一个更复杂的编码方法。ASCII 为每个字符使用一个字节，因此它仅保存拉丁字母、数字、少数符号和少数特殊字符。因此，ASCII 是非常易于实现的，与之相比，Unicode 的每个字符占用的空间并不相同，这使得字符串算法更棘手。通常，操作系统上字符使用 ASCII，并不是为了显示给最终用户的（开发者和专家用户除外），给终端用户显示信息使用 Unicode，因为 Unicode 能够支持像日语字符这样的东西，并且因此可以实现本地化。</p><p>幸运的是，在这里我们不需要去做选择，因为它们的前 128 个字符是完全相同的，并且编码也是完全一样的。</p><p>表 1.1 ASCII/Unicode 符号 0-127</p><div class="table-wrap"><table><thead><tr><th></th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th></th></tr></thead><tbody><tr><td>00</td><td>NUL</td><td>SOH</td><td>STX</td><td>ETX</td><td>EOT</td><td>ENQ</td><td>ACK</td><td>BEL</td><td>BS</td><td>HT</td><td>LF</td><td>VT</td><td>FF</td><td>CR</td><td>SO</td><td>SI</td><td></td></tr><tr><td>10</td><td>DLE</td><td>DC1</td><td>DC2</td><td>DC3</td><td>DC4</td><td>NAK</td><td>SYN</td><td>ETB</td><td>CAN</td><td>EM</td><td>SUB</td><td>ESC</td><td>FS</td><td>GS</td><td>RS</td><td>US</td><td></td></tr><tr><td>20</td><td>!</td><td>&quot;</td><td>#</td><td>$</td><td>%</td><td>&amp;</td><td>.</td><td>(</td><td>)</td><td>*</td><td>+</td><td>,</td><td>-</td><td>.</td><td>/</td><td></td><td></td></tr><tr><td>30</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>:</td><td>;</td><td>&lt;</td><td>=</td><td>&gt;</td><td>?</td><td></td></tr><tr><td>40</td><td>@</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td></td></tr><tr><td>50</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>[</td><td>\\</td><td>]</td><td>^</td><td>_</td><td></td></tr><tr><td>60</td><td>\`</td><td>a</td><td>b</td><td>c</td><td>d</td><td>e</td><td>f</td><td>g</td><td>h</td><td>i</td><td>j</td><td>k</td><td>l</td><td>m</td><td>n</td><td>o</td><td></td></tr><tr><td>70</td><td>p</td><td>q</td><td>r</td><td>s</td><td>t</td><td>u</td><td>v</td><td>w</td><td>x</td><td>y</td><td>z</td><td>{</td><td></td><td></td><td>}</td><td>~</td><td>DEL</td></tr></tbody></table></div><p>这个表显示了前 128 个符号。一个符号的十六进制表示是行的值加上列的值，比如 A 是 41<sub>16</sub>。你可以惊奇地发现前两行和最后的值。这 33 个特殊字符是不可打印字符。事实上，许多人都忽略了它们。它们之所以存在是因为 ASCII 最初设计是基于计算机网络来传输数据的一种方法。因此它要发送的信息不仅仅是符号。你应该学习的重要的特殊字符是 <code>NUL</code>，它就是我们前面提到的空终止符。<code>HT</code> 水平制表符就是我们经常说的 <code>tab</code>，而 <code>LF</code> 换行符用于生成一个新行。你可能想研究和使用其它特殊字符在你的操行系统中的意义。</p><h3 id="_2、字符" tabindex="-1">2、字符 <a class="header-anchor" href="#_2、字符" aria-label="Permalink to “2、字符”">​</a></h3><p>到目前为止，我们已经知道了一些关于字符串的知识，我们可以开始想想它们是如何显示的。为了显示一个字符串，我们需要做的最基础的事情是能够显示一个字符。我们的第一个任务是编写一个 <code>DrawCharacter</code> 函数，给它一个要绘制的字符和一个位置，然后它将这个字符绘制出来。</p><p>这就很自然地引出关于字体的讨论。我们已经知道有许多方式去按照选定的字体去显示任何给定的字母。那么字体又是如何工作的呢？在计算机科学的早期阶段，字体就是所有字母的一系列小图片而已，这种字体称为位图字体，而所有的字符绘制方法就是将图片复制到屏幕上。当人们想去调整字体大小时就出问题了。有时我们需要大的字母，而有时我们需要的是小的字母。尽管我们可以为每个字体、每种大小、每个字符都绘制新图片，但这种作法过于单调乏味。所以，发明了矢量字体。矢量字体不包含字体的图像，它包含的是如何去绘制字符的描述，即：一个 <code>o</code> 可能是最大字母高度的一半为半径绘制的圆。现代操作系统都几乎仅使用这种字体，因为这种字体在任何分辨率下都很完美。</p><blockquote><p>在许多操作系统中使用的 TrueType 字体格式是很强大的，它内置有它自己的汇编语言，以确保在任何分辨率下字母看起来都是正确的。</p></blockquote><p>不幸的是，虽然我很想包含一个矢量字体的格式的实现，但它的内容太多了，将占用这个网站的剩余部分。所以，我们将去实现一个位图字体，可是，如果你想去做一个像样的图形操作系统，那么矢量字体将是很有用的。</p><p>在下载页面上的字体节中，我们提供了几个 <code>.bin</code> 文件。这些只是字体的原始二进制数据文件。为完成本教程，从等宽、单色、8x16 节中挑选你喜欢的字体。然后下载它并保存到 <code>source</code> 目录中并命名为 <code>font.bin</code> 文件。这些文件只是每个字母的单色图片，它们每个字母刚好是 8 x 16 个像素。所以，每个字母占用 16 字节，第一个字节是第一行，第二个字节是第二行，依此类推。</p><p><img src="https://ws2.sinaimg.cn/large/006tNc79ly1fzzb2064agj305l0apt96.jpg" alt="bitmap"></p><p>这个示意图展示了等宽、单色、8x16 的字符 A 的 “Bitstream Vera Sans Mono” 字体。在这个文件中，我们可以找到，它从第 41<sub>16</sub> × 10<sub>16</sub> = 410<sub>16</sub> 字节开始的十六进制序列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>00, 00, 00, 10, 28, 28, 28, 44, 44, 7C, C6, 82, 00, 00, 00, 00</span></span></code></pre></div><p>在这里我们将使用等宽字体，因为等宽字体的每个字符大小是相同的。不幸的是，大多数字体的复杂之处就是因为它的宽度不同，从而导致它的显示代码更复杂。在下载页面上还包含有几个其它的字体，并包含了这种字体的存储格式介绍。</p><p>我们回到正题。复制下列代码到 <code>drawing.s</code> 中的 <code>graphicsAddress</code> 的 <code>.int 0</code> 之后。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.align 4</span></span>
<span class="line"><span>font:</span></span>
<span class="line"><span>.incbin &quot;font.bin&quot;</span></span></code></pre></div><blockquote><p><code>.incbin &quot;file&quot;</code> 插入来自文件 “file” 中的二进制数据。</p></blockquote><p>这段代码复制文件中的字体数据到标签为 <code>font</code> 的地址。我们在这里使用了一个 <code>.align 4</code> 去确保每个字符都是从 16 字节的倍数开始，这是一个以后经常用到的用于加快访问速度的技巧。</p><p>现在我们去写绘制字符的方法。我在下面给出了伪代码，你可以尝试自己去实现它。按惯例 <code>&gt;&gt;</code> 的意思是逻辑右移。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drawCharacter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">character</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r2 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> character </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 127</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then exit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set charAddress to font </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> character × </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set bits to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(charAddress </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> bit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPixel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bit, y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    next</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  next</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>如果直接去实现它，这显然不是个高效率的做法。像绘制字符这样的事情，效率是最重要的。因为我们要频繁使用它。我们来探索一些改善的方法，使其成为最优化的汇编代码。首先，因为我们有一个 <code>× 16</code>，你应该会马上想到它等价于逻辑左移 4 位。紧接着我们有一个变量 <code>row</code>，它只与 <code>charAddress</code> 和 <code>y</code> 相加。所以，我们可以通过增加替代变量来消除它。现在唯一的问题是如何判断我们何时完成。这时，一个很好用的 <code>.align 4</code> 上场了。我们知道，<code>charAddress</code> 将从包含 0 的低位半字节开始。这意味着我们可以通过检查低位半字节来看到进入字符数据的程度。</p><p>虽然我们可以消除对 <code>bit</code> 的需求，但我们必须要引入新的变量才能实现，因此最好还是保留它。剩下唯一的改进就是去除嵌套的 <code>bits &gt;&gt; bit</code>。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drawCharacter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">character</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r2 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> character </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 127</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then exit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set charAddress to font </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> character </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set bits to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(charAddress)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set bit to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set bits to bits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set bit to bit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bits, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPixel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bit, y)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    until bit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set y to y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set chadAddress to chadAddress </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  until charAddress AND </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1111</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>现在，我们已经得到了非常接近汇编代码的代码了，并且代码也是经过优化的。下面就是上述代码用汇编写出来的代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl DrawCharacter</span></span>
<span class="line"><span>DrawCharacter:</span></span>
<span class="line"><span>cmp r0,#127</span></span>
<span class="line"><span>movhi r0,#0</span></span>
<span class="line"><span>movhi r1,#0</span></span>
<span class="line"><span>movhi pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>push {r4,r5,r6,r7,r8,lr}</span></span>
<span class="line"><span>x .req r4</span></span>
<span class="line"><span>y .req r5</span></span>
<span class="line"><span>charAddr .req r6</span></span>
<span class="line"><span>mov x,r1</span></span>
<span class="line"><span>mov y,r2</span></span>
<span class="line"><span>ldr charAddr,=font</span></span>
<span class="line"><span>add charAddr, r0,lsl #4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lineLoop$:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  bits .req r7</span></span>
<span class="line"><span>  bit .req r8</span></span>
<span class="line"><span>  ldrb bits,[charAddr]</span></span>
<span class="line"><span>  mov bit,#8</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  charPixelLoop$:</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    subs bit,#1</span></span>
<span class="line"><span>    blt charPixelLoopEnd$</span></span>
<span class="line"><span>    lsl bits,#1</span></span>
<span class="line"><span>    tst bits,#0x100</span></span>
<span class="line"><span>    beq charPixelLoop$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    add r0,x,bit</span></span>
<span class="line"><span>    mov r1,y</span></span>
<span class="line"><span>    bl DrawPixel</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    teq bit,#0</span></span>
<span class="line"><span>    bne charPixelLoop$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  charPixelLoopEnd$:</span></span>
<span class="line"><span>  .unreq bit</span></span>
<span class="line"><span>  .unreq bits</span></span>
<span class="line"><span>  add y,#1</span></span>
<span class="line"><span>  add charAddr,#1</span></span>
<span class="line"><span>  tst charAddr,#0b1111</span></span>
<span class="line"><span>  bne lineLoop$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.unreq x</span></span>
<span class="line"><span>.unreq y</span></span>
<span class="line"><span>.unreq charAddr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>width .req r0</span></span>
<span class="line"><span>height .req r1</span></span>
<span class="line"><span>mov width,#8</span></span>
<span class="line"><span>mov height,#16</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pop {r4,r5,r6,r7,r8,pc}</span></span>
<span class="line"><span>.unreq width</span></span>
<span class="line"><span>.unreq height</span></span></code></pre></div><h3 id="_3、字符串" tabindex="-1">3、字符串 <a class="header-anchor" href="#_3、字符串" aria-label="Permalink to “3、字符串”">​</a></h3><p>现在，我们可以绘制字符了，我们可以绘制文本了。我们需要去写一个方法，给它一个字符串为输入，它通过递增位置来绘制出每个字符。为了做的更好，我们应该去实现新的行和制表符。是时候决定关于空终止符的问题了，如果你想让你的操作系统使用它们，可以按需来修改下面的代码。为避免这个问题，我将给 <code>DrawString</code> 函数传递一个字符串长度，以及字符串的地址，和 <code>x</code> 和 <code>y</code> 的坐标作为参数。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drawString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r2 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r3 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set x0 to x</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pos)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cwidth, cheight) to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DrawCharacter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x, y)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x to x0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set y to y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cheight</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x1 to x</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      until x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set x1 to x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> × cwidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set x to x1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    otherwise</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x to x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cwidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  next</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>同样，这个函数与汇编代码还有很大的差距。你可以随意去尝试实现它，即可以直接实现它，也可以简化它。我在下面给出了简化后的函数和汇编代码。</p><p>很明显，写这个函数的人并不很有效率（感到奇怪吗？它就是我写的）。再说一次，我们有一个 <code>pos</code> 变量，它用于递增及与其它东西相加，这是完全没有必要的。我们可以去掉它，而同时进行长度递减，直到减到 0 为止，这样就少用了一个寄存器。除了那个烦人的乘以 5 以外，函数的其余部分还不错。在这里要做的一个重要事情是，将乘法移到循环外面；即便使用位移运算，乘法仍然是很慢的，由于我们总是加一个乘以 5 的相同的常数，因此没有必要重新计算它。实际上，在汇编代码中它可以在一个操作数中通过参数移位来实现，因此我将代码改变为下面这样。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drawString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r2 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r3 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set x0 to x</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  until length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(string)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cwidth, cheight) to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DrawCharacter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x, y)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x to x0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set y to y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cheight</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x1 to x</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set cwidth to cwidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cwidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      until x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set x1 to x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cwidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x to x1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    otherwise</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x to x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cwidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set string to string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>以下是它的汇编代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl DrawString</span></span>
<span class="line"><span>DrawString:</span></span>
<span class="line"><span>x .req r4</span></span>
<span class="line"><span>y .req r5</span></span>
<span class="line"><span>x0 .req r6</span></span>
<span class="line"><span>string .req r7</span></span>
<span class="line"><span>length .req r8</span></span>
<span class="line"><span>char .req r9</span></span>
<span class="line"><span>push {r4,r5,r6,r7,r8,r9,lr}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mov string,r0</span></span>
<span class="line"><span>mov x,r2</span></span>
<span class="line"><span>mov x0,x</span></span>
<span class="line"><span>mov y,r3</span></span>
<span class="line"><span>mov length,r1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>stringLoop$:</span></span>
<span class="line"><span>  subs length,#1</span></span>
<span class="line"><span>  blt stringLoopEnd$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ldrb char,[string]</span></span>
<span class="line"><span>  add string,#1</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  mov r0,char</span></span>
<span class="line"><span>  mov r1,x</span></span>
<span class="line"><span>  mov r2,y</span></span>
<span class="line"><span>  bl DrawCharacter</span></span>
<span class="line"><span>  cwidth .req r0</span></span>
<span class="line"><span>  cheight .req r1</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  teq char,#&#39;\\n&#39;</span></span>
<span class="line"><span>  moveq x,x0</span></span>
<span class="line"><span>  addeq y,cheight</span></span>
<span class="line"><span>  beq stringLoop$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  teq char,#&#39;\\t&#39;</span></span>
<span class="line"><span>  addne x,cwidth</span></span>
<span class="line"><span>  bne stringLoop$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  add cwidth, cwidth,lsl #2</span></span>
<span class="line"><span>  x1 .req r1</span></span>
<span class="line"><span>  mov x1,x0</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  stringLoopTab$:</span></span>
<span class="line"><span>    add x1,cwidth</span></span>
<span class="line"><span>    cmp x,x1</span></span>
<span class="line"><span>    bge stringLoopTab$</span></span>
<span class="line"><span>  mov x,x1</span></span>
<span class="line"><span>  .unreq x1</span></span>
<span class="line"><span>  b stringLoop$</span></span>
<span class="line"><span>stringLoopEnd$:</span></span>
<span class="line"><span>.unreq cwidth</span></span>
<span class="line"><span>.unreq cheight</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pop {r4,r5,r6,r7,r8,r9,pc}</span></span>
<span class="line"><span>.unreq x</span></span>
<span class="line"><span>.unreq y</span></span>
<span class="line"><span>.unreq x0</span></span>
<span class="line"><span>.unreq string</span></span>
<span class="line"><span>.unreq length</span></span></code></pre></div><p>这个代码中非常聪明地使用了一个新运算，<code>subs</code> 是从一个操作数中减去另一个数，保存结果，然后将结果与 0 进行比较。实现上，所有的比较都可以实现为减法后的结果与 0 进行比较，但是结果通常会丢弃。这意味着这个操作与 <code>cmp</code> 一样快。</p><blockquote><p><code>subs reg,#val</code> 从寄存器 <code>reg</code> 中减去 <code>val</code>，然后将结果与 <code>0</code> 进行比较。</p></blockquote><h3 id="_4、你的意愿是我的命令行" tabindex="-1">4、你的意愿是我的命令行 <a class="header-anchor" href="#_4、你的意愿是我的命令行" aria-label="Permalink to “4、你的意愿是我的命令行”">​</a></h3><p>现在，我们可以输出字符串了，而挑战是找到一个有意思的字符串去绘制。一般在这样的教程中，人们都希望去绘制 “Hello World!”，但是到目前为止，虽然我们已经能做到了，我觉得这有点“君临天下”的感觉（如果喜欢这种感觉，请随意！）。因此，作为替代，我们去继续绘制我们的命令行。</p><p>有一个限制是我们所做的操作系统是用在 ARM 架构的计算机上。最关键的是，在它们引导时，给它一些信息告诉它有哪些可用资源。几乎所有的处理器都有某些方式来确定这些信息，而在 ARM 上，它是通过位于地址 100<sub>16</sub> 处的数据来确定的，这个数据的格式如下：</p><pre><code>1. 数据是可分解的一系列的标签。
2. 这里有九种类型的标签：\`core\`、\`mem\`、\`videotext\`、\`ramdisk\`、\`initrd2\`、\`serial\`、\`revision\`、\`videolfb\`、\`cmdline\`。
3. 每个标签只能出现一次，除了 \`core\` 标签是必不可少的之外，其它的都是可有可无的。
4. 所有标签都依次放置在地址 \`0x100\` 处。
5. 标签列表的结束处总是有两个&lt;ruby&gt;字&lt;rt&gt;word&lt;/rt&gt;&lt;/ruby&gt;，它们全为 0。
6. 每个标签的字节数都是 4 的倍数。
7. 每个标签都是以标签中（以字为单位）的标签大小开始（标签包含这个数字）。
8. 紧接着是包含标签编号的一个半字。编号是按上面列出的顺序，从 1 开始（\`core\` 是 1，\`cmdline\` 是 9）。
9. 紧接着是一个包含 5441&lt;sub&gt;16&lt;/sub&gt; 的半字。
10. 之后是标签的数据，它根据标签不同是可变的。数据大小（以字为单位）+ 2 的和总是与前面提到的长度相同。
11. 一个 \`core\` 标签的长度可以是 2 个字也可以是 5 个字。如果是 2 个字，表示没有数据，如果是 5 个字，表示它有 3 个字的数据。
12. 一个 \`mem\` 标签总是 4 个字的长度。数据是内存块的第一个地址，和内存块的长度。
13. 一个 \`cmdline\` 标签包含一个 \`null\` 终止符字符串，它是个内核参数。
</code></pre><p>在目前的树莓派版本中，只提供了 <code>core</code>、<code>mem</code> 和 <code>cmdline</code> 标签。你可以在后面找到它们的用法，更全面的参考资料在树莓派的参考页面上。现在，我们感兴趣的是 <code>cmdline</code> 标签，因为它包含一个字符串。我们继续写一些搜索这个命令行（<code>cmdline</code>）标签的代码，如果找到了，以每个条目一个新行的形式输出它。命令行只是图形处理器或用户认为操作系统应该知道的东西的一个列表。在树莓派上，这包含了 MAC 地址、序列号和屏幕分辨率。字符串本身也是一个由空格隔开的表达式（像 <code>key.subkey=value</code> 这样的）的列表。</p><blockquote><p>几乎所有的操作系统都支持一个“命令行”的程序。它的想法是为选择一个程序所期望的行为而提供一个通用的机制。</p></blockquote><p>我们从查找 <code>cmdline</code> 标签开始。将下列的代码复制到一个名为 <code>tags.s</code> 的新文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.section .data</span></span>
<span class="line"><span>tag_core: .int 0</span></span>
<span class="line"><span>tag_mem: .int 0</span></span>
<span class="line"><span>tag_videotext: .int 0</span></span>
<span class="line"><span>tag_ramdisk: .int 0</span></span>
<span class="line"><span>tag_initrd2: .int 0</span></span>
<span class="line"><span>tag_serial: .int 0</span></span>
<span class="line"><span>tag_revision: .int 0</span></span>
<span class="line"><span>tag_videolfb: .int 0</span></span>
<span class="line"><span>tag_cmdline: .int 0</span></span></code></pre></div><p>通过标签列表来查找是一个很慢的操作，因为这涉及到许多内存访问。因此，我们只想做一次。代码创建一些数据，用于保存每个类型的第一个标签的内存地址。接下来，用下面的伪代码就可以找到一个标签了。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FindTag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> or tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set tagAddr to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tag_core </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) × </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> not tagAddr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tagAddr</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tag_core) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set tagAddr to </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  loop forever</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set tagIndex to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readHalfWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tagAddr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tagIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FindTag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tag)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tag_core</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tagIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)×</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">storeWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tagAddr, tag_core</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tagIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)×</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set tagAddr to tagAddr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loadWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tagAddr) × </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>这段代码已经是优化过的，并且很接近汇编了。它尝试直接加载标签，第一次这样做是有些乐观的，但是除了第一次之外的其它所有情况都是可以这样做的。如果失败了，它将去检查 <code>core</code> 标签是否有地址。因为 <code>core</code> 标签是必不可少的，如果它没有地址，唯一可能的原因就是它不存在。如果它有地址，那就是我们没有找到我们要找的标签。如果没有找到，那我们就需要查找所有标签的地址。这是通过读取标签编号来做的。如果标签编号为 0，意味着已经到了标签列表的结束位置。这意味着我们已经查找了目录中所有的标签。所以，如果我们再次运行我们的函数，现在它应该能够给出一个答案。如果标签编号不为 0，我们检查这个标签类型是否已经有一个地址。如果没有，我们在目录中保存这个标签的地址。然后增加这个标签的长度（以字节为单位）到标签地址中，然后去查找下一个标签。</p><p>尝试去用汇编实现这段代码。你将需要简化它。如果被卡住了，下面是我的答案。不要忘了 <code>.section .text</code>！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.section .text</span></span>
<span class="line"><span>.globl FindTag</span></span>
<span class="line"><span>FindTag:</span></span>
<span class="line"><span>tag .req r0</span></span>
<span class="line"><span>tagList .req r1</span></span>
<span class="line"><span>tagAddr .req r2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sub tag,#1</span></span>
<span class="line"><span>cmp tag,#8</span></span>
<span class="line"><span>movhi tag,#0</span></span>
<span class="line"><span>movhi pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ldr tagList,=tag_core</span></span>
<span class="line"><span>tagReturn$:</span></span>
<span class="line"><span>add tagAddr,tagList, tag,lsl #2</span></span>
<span class="line"><span>ldr tagAddr,[tagAddr]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>teq tagAddr,#0</span></span>
<span class="line"><span>movne r0,tagAddr</span></span>
<span class="line"><span>movne pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ldr tagAddr,[tagList]</span></span>
<span class="line"><span>teq tagAddr,#0</span></span>
<span class="line"><span>movne r0,#0</span></span>
<span class="line"><span>movne pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mov tagAddr,#0x100</span></span>
<span class="line"><span>push {r4}</span></span>
<span class="line"><span>tagIndex .req r3</span></span>
<span class="line"><span>oldAddr .req r4</span></span>
<span class="line"><span>tagLoop$:</span></span>
<span class="line"><span>ldrh tagIndex,[tagAddr,#4]</span></span>
<span class="line"><span>subs tagIndex,#1</span></span>
<span class="line"><span>poplt {r4}</span></span>
<span class="line"><span>blt tagReturn$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>add tagIndex,tagList, tagIndex,lsl #2</span></span>
<span class="line"><span>ldr oldAddr,[tagIndex]</span></span>
<span class="line"><span>teq oldAddr,#0</span></span>
<span class="line"><span>.unreq oldAddr</span></span>
<span class="line"><span>streq tagAddr,[tagIndex]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ldr tagIndex,[tagAddr]</span></span>
<span class="line"><span>add tagAddr, tagIndex,lsl #2</span></span>
<span class="line"><span>b tagLoop$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.unreq tag</span></span>
<span class="line"><span>.unreq tagList</span></span>
<span class="line"><span>.unreq tagAddr</span></span>
<span class="line"><span>.unreq tagIndex</span></span></code></pre></div><h3 id="_5、hello-world" tabindex="-1">5、Hello World <a class="header-anchor" href="#_5、hello-world" aria-label="Permalink to “5、Hello World”">​</a></h3><p>现在，我们已经万事俱备了，我们可以去绘制我们的第一个字符串了。在 <code>main.s</code> 文件中删除 <code>bl SetGraphicsAddress</code> 之后的所有代码，然后将下面的代码放进去：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#9</span></span>
<span class="line"><span>bl FindTag</span></span>
<span class="line"><span>ldr r1,[r0]</span></span>
<span class="line"><span>lsl r1,#2</span></span>
<span class="line"><span>sub r1,#8</span></span>
<span class="line"><span>add r0,#8</span></span>
<span class="line"><span>mov r2,#0</span></span>
<span class="line"><span>mov r3,#0</span></span>
<span class="line"><span>bl DrawString</span></span>
<span class="line"><span>loop$:</span></span>
<span class="line"><span>b loop$</span></span></code></pre></div><p>这段代码简单地使用了我们的 <code>FindTag</code> 方法去查找第 9 个标签（<code>cmdline</code>），然后计算它的长度，然后传递命令和长度给 <code>DrawString</code> 方法，告诉它在 <code>0,0</code> 处绘制字符串。现在可以在树莓派上测试它了。你应该会在屏幕上看到一行文本。如果没有，请查看我们的排错页面。</p>`,59)),t("p",null,[s[4]||(s[4]=a("如果一切正常，恭喜你已经能够绘制文本了。但它还有很大的改进空间。如果想去写了一个数字，或内存的一部分，或操作我们的命令行，该怎么做呢？在 ",-1)),n(i,{href:"https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/screen04.html"},{default:p(()=>[...s[3]||(s[3]=[a("课程 9：屏幕04",-1)])]),_:1}),s[5]||(s[5]=a(" 中，我们将学习如何操作文本和显示有用的数字和信息。",-1))]),s[23]||(s[23]=t("hr",null,null,-1)),t("p",null,[s[7]||(s[7]=a("via: ",-1)),n(i,{href:"https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/screen03.html"},{default:p(()=>[...s[6]||(s[6]=[a("https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/screen03.html",-1)])]),_:1})]),t("p",null,[s[12]||(s[12]=a("作者：",-1)),n(i,{href:"https://www.cl.cam.ac.uk"},{default:p(()=>[...s[8]||(s[8]=[a("Alex Chadwick",-1)])]),_:1}),s[13]||(s[13]=a(" 选题：",-1)),n(i,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[9]||(s[9]=[a("lujun9972",-1)])]),_:1}),s[14]||(s[14]=a(" 译者：",-1)),n(i,{href:"https://github.com/qhwdw"},{default:p(()=>[...s[10]||(s[10]=[a("qhwdw",-1)])]),_:1}),s[15]||(s[15]=a(" 校对：",-1)),n(i,{href:"https://github.com/wxy"},{default:p(()=>[...s[11]||(s[11]=[a("wxy",-1)])]),_:1})]),t("p",null,[s[18]||(s[18]=a("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[16]||(s[16]=[a("LCTT",-1)])]),_:1}),s[19]||(s[19]=a(" 原创编译，",-1)),n(i,{href:"https://linux.cn/"},{default:p(()=>[...s[17]||(s[17]=[a("Linux中国",-1)])]),_:1}),s[20]||(s[20]=a(" 荣誉推出",-1))])])}const A=l(r,[["render",E]]);export{u as __pageData,A as default};
