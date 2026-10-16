import{_ as t,a0 as d,w as o,s as r,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"如何组织构建多文件 C 语言程序（二） | LCTT x X-CMD","titleTemplate":false,"description":"如何组织构建多文件 C 语言程序（二） | LCTT (202003) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何组织构建多文件 C 语言程序（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何组织构建多文件 C 语言程序（二） | LCTT (202003) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202003/20190731 How to structure a multi-file C program- Part 2","title":"如何组织构建多文件 C 语言程序（二）","tag":"202003","desc":""},"relativePath":"202003/20190731 How to structure a multi-file C program- Part 2.md","filePath":"[post].md"}'),u={name:"202003/20190731 How to structure a multi-file C program- Part 2.md"};function c(f,s,b,m,g,h){const p=d("Link");return o(),r("div",null,[s[43]||(s[43]=a("h1",{id:"如何组织构建多文件-c-语言程序-二",tabindex:"-1"},[n("如何组织构建多文件 C 语言程序（二） "),a("a",{class:"header-anchor",href:"#如何组织构建多文件-c-语言程序-二","aria-label":"Permalink to “如何组织构建多文件 C 语言程序（二）”"},"​")],-1)),s[44]||(s[44]=a("blockquote",null,[a("p",null,"我将在本系列的第二篇中深入研究由多个文件组成的 C 程序的结构。")],-1)),s[45]||(s[45]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202003/16/122928i6qheufnh24jq2qf.jpg",alt:""})],-1)),a("p",null,[s[3]||(s[3]=n("在",-1)),e(p,{href:"https://linux.cn/article-11935-1.html"},{default:l(()=>[...s[0]||(s[0]=[n("第一篇",-1)])]),_:1}),s[4]||(s[4]=n("中，我设计了一个名为",-1)),e(p,{href:"https://github.com/jnyjny/MeowMeow.git"},{default:l(()=>[...s[1]||(s[1]=[n("喵呜喵呜",-1)])]),_:1}),s[5]||(s[5]=n("的多文件 C 程序，该程序实现了一个玩具",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Codec"},{default:l(()=>[...s[2]||(s[2]=[n("编解码器",-1)])]),_:1}),s[6]||(s[6]=n("。我也提到了程序设计中的 Unix 哲学，即在一开始创建多个空文件，并建立一个好的结构。最后，我创建了一个 ",-1)),s[7]||(s[7]=a("code",null,"Makefile",-1)),s[8]||(s[8]=n(" 文件夹并阐述了它的作用。在本文中将另一个方向展开：现在我将介绍简单但具有指导性的喵呜喵呜编解码器的实现。",-1))]),a("p",null,[s[10]||(s[10]=n("当读过我的《",-1)),e(p,{href:"https://linux.cn/article-10949-1.html"},{default:l(()=>[...s[9]||(s[9]=[n("如何写一个好的 C 语言 main 函数",-1)])]),_:1}),s[11]||(s[11]=n("》后，你会觉得喵呜喵呜编解码器的 ",-1)),s[12]||(s[12]=a("code",null,"main.c",-1)),s[13]||(s[13]=n(" 文件的结构很熟悉，其主体结构如下：",-1))]),s[46]||(s[46]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c - 喵呜喵呜流式编解码器 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 00 系统包含文件 */</span></span>
<span class="line"><span>/* 01 项目包含文件 */</span></span>
<span class="line"><span>/* 02 外部声明 */</span></span>
<span class="line"><span>/* 03 定义 */</span></span>
<span class="line"><span>/* 04 类型定义 */</span></span>
<span class="line"><span>/* 05 全局变量声明（不要用）*/</span></span>
<span class="line"><span>/* 06 附加的函数原型 */</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>int main(int argc, char *argv[])</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  /* 07 变量声明 */</span></span>
<span class="line"><span>  /* 08 检查 argv[0] 以查看该程序是被如何调用的 */</span></span>
<span class="line"><span>  /* 09 处理来自用户的命令行选项 */</span></span>
<span class="line"><span>  /* 10 做点有用的事情 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>/* 11 其它辅助函数 */</span></span></code></pre></div><h3 id="包含项目头文件" tabindex="-1">包含项目头文件 <a class="header-anchor" href="#包含项目头文件" aria-label="Permalink to “包含项目头文件”">​</a></h3><p>位于第二部分中的 <code>/* 01 项目包含文件 */</code> 的源代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c - 喵呜喵呜流式编解码器 */</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>/* 01 项目包含文件 */</span></span>
<span class="line"><span>#include &quot;main.h&quot;</span></span>
<span class="line"><span>#include &quot;mmecode.h&quot;</span></span>
<span class="line"><span>#include &quot;mmdecode.h&quot;</span></span></code></pre></div><p><code>#include</code> 是 C 语言的预处理命令，它会将该文件名的文件内容拷贝到当前文件中。如果程序员在头文件名称周围使用双引号（<code>&quot;&quot;</code>），编译器将会在当前目录寻找该文件。如果文件被尖括号包围（<code>&lt;&gt;</code>），编译器将在一组预定义的目录中查找该文件。</p>`,5)),a("p",null,[e(p,{href:"https://github.com/JnyJny/meowmeow/blob/master/main.h"},{default:l(()=>[...s[14]||(s[14]=[n("main.h",-1)])]),_:1}),s[16]||(s[16]=n(" 文件中包含了 ",-1)),e(p,{href:"https://github.com/JnyJny/meowmeow/blob/master/main.c"},{default:l(()=>[...s[15]||(s[15]=[n("main.c",-1)])]),_:1}),s[17]||(s[17]=n(" 文件中用到的定义和类型定义。我喜欢尽可能多将声明放在头文件里，以便我在我的程序的其他位置使用这些定义。",-1))]),a("p",null,[s[20]||(s[20]=n("头文件 ",-1)),e(p,{href:"https://github.com/JnyJny/meowmeow/blob/master/mmencode.h"},{default:l(()=>[...s[18]||(s[18]=[n("mmencode.h",-1)])]),_:1}),s[21]||(s[21]=n(" 和 ",-1)),e(p,{href:"https://github.com/JnyJny/meowmeow/blob/master/mmdecode.h"},{default:l(()=>[...s[19]||(s[19]=[n("mmdecode.h",-1)])]),_:1}),s[22]||(s[22]=n(" 几乎相同，因此我以 ",-1)),s[23]||(s[23]=a("code",null,"mmencode.h",-1)),s[24]||(s[24]=n(" 为例来分析。",-1))]),s[47]||(s[47]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* mmencode.h - 喵呜喵呜流编解码器 */</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>#ifndef _MMENCODE_H</span></span>
<span class="line"><span>#define _MMENCODE_H</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int mm_encode(FILE *src, FILE *dst);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>#endif /* _MMENCODE_H */</span></span></code></pre></div><p><code>#ifdef</code>、<code>#define</code>、<code>#endif</code> 指令统称为 “防护” 指令。其可以防止 C 编译器在一个文件中多次包含同一文件。如果编译器在一个文件中发现多个定义/原型/声明，它将会产生警告。因此这些防护措施是必要的。</p><p>在这些防护内部，只有两个东西：<code>#include</code> 指令和函数原型声明。我在这里包含了 <code>stdio.h</code> 头文件，以便于能在函数原型中使用 <code>FILE</code> 定义。函数原型也可以被包含在其他 C 文件中，以便于在文件的命名空间中创建它。你可以将每个文件视为一个独立的命名空间，其中的变量和函数不能被另一个文件中的函数或者变量使用。</p><p>编写头文件很复杂，并且在大型项目中很难管理它。不要忘记使用防护。</p><h3 id="喵呜喵呜编码的最终实现" tabindex="-1">喵呜喵呜编码的最终实现 <a class="header-anchor" href="#喵呜喵呜编码的最终实现" aria-label="Permalink to “喵呜喵呜编码的最终实现”">​</a></h3><p>该程序的功能是按照字节进行 <code>MeowMeow</code> 字符串的编解码，事实上这是该项目中最简单的部分。截止目前我所做的工作便是支持允许在适当的位置调用此函数：解析命令行，确定要使用的操作，并打开将要操作的文件。下面的循环是编码的过程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* mmencode.c - 喵呜喵呜流式编解码器 */</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>   while (!feof(src)) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     if (!fgets(buf, sizeof(buf), src))</span></span>
<span class="line"><span>       break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     for(i=0; i&lt;strlen(buf); i++) {</span></span>
<span class="line"><span>       lo = (buf[i] &amp; 0x000f);</span></span>
<span class="line"><span>       hi = (buf[i] &amp; 0x00f0) &gt;&gt; 4;</span></span>
<span class="line"><span>       fputs(tbl[hi], dst);</span></span>
<span class="line"><span>       fputs(tbl[lo], dst);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span></code></pre></div><p>简单的说，当文件中还有数据块时（ <code>feof(3)</code> ），该循环读取（<code>feof(3)</code> ）文件中的一个数据块。然后将读入的内容的每个字节分成两个 <code>hi</code> 和 <code>lo</code> 的<ruby>半字节<rt>nibble</rt></ruby>。半字节是半个字节，即 4 个位。这里的奥妙之处在于可以用 4 个位来编码 16 个值。我将 <code>hi</code> 和 <code>lo</code> 用作 16 个字符串查找表 <code>tbl</code> 的索引，表中包含了用半字节编码的 <code>MeowMeow</code> 字符串。这些字符串使用 <code>fputs(3)</code> 函数写入目标 <code>FILE</code> 流，然后我们继续处理缓存区的下一个字节。</p>`,8)),a("p",null,[s[26]||(s[26]=n("该表使用 ",-1)),e(p,{href:"https://github.com/JnyJny/meowmeow/blob/master/table.h"},{default:l(()=>[...s[25]||(s[25]=[n("table.h",-1)])]),_:1}),s[27]||(s[27]=n(" 中的宏定义进行初始化，在没有特殊原因（比如：要展示包含了另一个项目的本地头文件）时，我喜欢使用宏来进行初始化。我将在未来的文章中进一步探讨原因。",-1))]),s[48]||(s[48]=i(`<h3 id="喵呜喵呜解码的实现" tabindex="-1">喵呜喵呜解码的实现 <a class="header-anchor" href="#喵呜喵呜解码的实现" aria-label="Permalink to “喵呜喵呜解码的实现”">​</a></h3><p>我承认在开始工作前花了一些时间。解码的循环与编码类似：读取 <code>MeowMeow</code> 字符串到缓冲区，将编码从字符串转换为字节</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> /* mmdecode.c - 喵呜喵呜流式编解码器 */</span></span>
<span class="line"><span> ...</span></span>
<span class="line"><span> int mm_decode(FILE *src, FILE *dst)</span></span>
<span class="line"><span> {</span></span>
<span class="line"><span>   if (!src || !dst) {</span></span>
<span class="line"><span>     errno = EINVAL;</span></span>
<span class="line"><span>     return -1;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   return stupid_decode(src, dst);</span></span>
<span class="line"><span> }</span></span></code></pre></div><p>这不符合你的期望吗？</p><p>在这里，我通过外部公开的 <code>mm_decode()</code> 函数公开了 <code>stupid_decode()</code> 函数细节。我上面所说的“外部”是指在这个文件之外。因为 <code>stupid_decode()</code> 函数不在该头文件中，因此无法在其他文件中调用它。</p><p>当我们想发布一个可靠的公共接口时，有时候会这样做，但是我们还没有完全使用函数解决问题。在本例中，我编写了一个 I/O 密集型函数，该函数每次从源中读取 8 个字节，然后解码获得 1 个字节写入目标流中。较好的实现是一次处理多于 8 个字节的缓冲区。更好的实现还可以通过缓冲区输出字节，进而减少目标流中单字节的写入次数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* mmdecode.c - 喵呜喵呜流式编解码器 */</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>int stupid_decode(FILE *src, FILE *dst)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  char           buf[9];</span></span>
<span class="line"><span>  decoded_byte_t byte;</span></span>
<span class="line"><span>  int            i;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  while (!feof(src)) {</span></span>
<span class="line"><span>    if (!fgets(buf, sizeof(buf), src))</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    byte.field.f0 = isupper(buf[0]);</span></span>
<span class="line"><span>    byte.field.f1 = isupper(buf[1]);</span></span>
<span class="line"><span>    byte.field.f2 = isupper(buf[2]);</span></span>
<span class="line"><span>    byte.field.f3 = isupper(buf[3]);</span></span>
<span class="line"><span>    byte.field.f4 = isupper(buf[4]);</span></span>
<span class="line"><span>    byte.field.f5 = isupper(buf[5]);</span></span>
<span class="line"><span>    byte.field.f6 = isupper(buf[6]);</span></span>
<span class="line"><span>    byte.field.f7 = isupper(buf[7]);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    fputc(byte.value, dst);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我并没有使用编码器中使用的位移方法，而是创建了一个名为 <code>decoded_byte_t</code> 的自定义数据结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* mmdecode.c - 喵呜喵呜流式编解码器 */</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  unsigned char f7:1;</span></span>
<span class="line"><span>  unsigned char f6:1;</span></span>
<span class="line"><span>  unsigned char f5:1;</span></span>
<span class="line"><span>  unsigned char f4:1;</span></span>
<span class="line"><span>  unsigned char f3:1;</span></span>
<span class="line"><span>  unsigned char f2:1;</span></span>
<span class="line"><span>  unsigned char f1:1;</span></span>
<span class="line"><span>  unsigned char f0:1;</span></span>
<span class="line"><span>} fields_t;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>typedef union {</span></span>
<span class="line"><span>  fields_t      field;</span></span>
<span class="line"><span>  unsigned char value;</span></span>
<span class="line"><span>} decoded_byte_t;</span></span></code></pre></div><p>初次看到代码时可能会感到有点儿复杂，但不要放弃。<code>decoded_byte_t</code> 被定义为 <code>fields_t</code> 和 <code>unsigned char</code> 的 <strong>联合</strong>。可以将联合中的命名成员看作同一内存区域的别名。在这种情况下，<code>value</code> 和 <code>field</code> 指向相同的 8 位内存区域。将 <code>field.f0</code> 设置为 <code>1</code> 也将会设置 <code>value</code> 中的最低有效位。</p><p>虽然 <code>unsigned char</code> 并不神秘，但是对 <code>fields_t</code> 的类型定义（<code>typedef</code>）也许看起来有些陌生。现代 C 编译器允许程序员在结构体中指定单个位字段的值。字段所在的类型是一个无符号整数类型，并在成员标识符后紧跟一个冒号和一个整数，该整数指定了位字段的长度。</p><p>这种数据结构使得按字段名称访问字节中的每个位变得简单，并可以通过联合中的 <code>value</code> 字段访问组合后的值。我们依赖编译器生成正确的移位指令来访问字段，这可以在调试时为你节省不少时间。</p><p>最后，因为 <code>stupid_decode()</code> 函数一次仅从源 <code>FILE</code> 流中读取 8 个字节，所以它效率并不高。通常我们尝试最小化读写次数，以提高性能和降低调用系统调用的开销。请记住：少量的读取/写入大的块比大量的读取/写入小的块好得多。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>用 C 语言编写一个多文件程序需要程序员要比只是是一个 <code>main.c</code> 做更多的规划。但是当你添加功能或者重构时，只需要多花费一点儿努力便可以节省大量时间以及避免让你头痛的问题。</p><p>回顾一下，我更喜欢这样做：多个文件，每个文件仅有简单功能；通过头文件公开那些文件中的小部分功能；把数字常量和字符串常量保存在头文件中；使用 <code>Makefile</code> 而不是 Bash 脚本来自动化处理事务；使用 <code>main()</code> 函数来处理命令行参数解析并作为程序主要功能的框架。</p><p>我知道我只是蜻蜓点水般介绍了这个简单的程序，并且我很高兴知道哪些事情对你有所帮助，以及哪些主题需要详细的解释。请在评论中分享你的想法，让我知道。</p><hr>`,18)),a("p",null,[s[29]||(s[29]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/7/structure-multi-file-c-part-2"},{default:l(()=>[...s[28]||(s[28]=[n("https://opensource.com/article/19/7/structure-multi-file-c-part-2",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/jnyjny"},{default:l(()=>[...s[30]||(s[30]=[n("Erik O'Shaughnessy",-1)])]),_:1}),s[35]||(s[35]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[31]||(s[31]=[n("lujun9972",-1)])]),_:1}),s[36]||(s[36]=n(" 译者：",-1)),e(p,{href:"https://github.com/mengxinayan"},{default:l(()=>[...s[32]||(s[32]=[n("萌新阿岩",-1)])]),_:1}),s[37]||(s[37]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[33]||(s[33]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[40]||(s[40]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[38]||(s[38]=[n("LCTT",-1)])]),_:1}),s[41]||(s[41]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[39]||(s[39]=[n("Linux中国",-1)])]),_:1}),s[42]||(s[42]=n(" 荣誉推出",-1))])])}const T=t(u,[["render",c]]);export{C as __pageData,T as default};
