import{_ as l,a0 as o,w as d,s as c,I as a,x as n,a1 as p,A as t,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const h=JSON.parse('{"title":"从 Rust 调用 C 库函数 | LCTT x X-CMD","titleTemplate":false,"description":"从 Rust 调用 C 库函数 | LCTT (202212) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"从 Rust 调用 C 库函数 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"从 Rust 调用 C 库函数 | LCTT (202212) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202212/20221122.2 ⭐️⭐️⭐️ Introducing Rust calls to C library functions","title":"从 Rust 调用 C 库函数","tag":"202212","desc":""},"relativePath":"202212/20221122.2 ⭐️⭐️⭐️ Introducing Rust calls to C library functions.md","filePath":"[post].md"}'),u={name:"202212/20221122.2 ⭐️⭐️⭐️ Introducing Rust calls to C library functions.md"};function r(m,s,b,g,C,f){const e=o("Link");return d(),c("div",null,[s[60]||(s[60]=a("h1",{id:"从-rust-调用-c-库函数",tabindex:"-1"},[n("从 Rust 调用 C 库函数 "),a("a",{class:"header-anchor",href:"#从-rust-调用-c-库函数","aria-label":"Permalink to “从 Rust 调用 C 库函数”"},"​")],-1)),s[61]||(s[61]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202212/16/110147q4kk0qoqe0e3m6bb.jpg",alt:""})],-1)),s[62]||(s[62]=a("blockquote",null,[a("p",null,"Rust FFI 和 bindgen 工具是为 Rust 调用 C 库而设计的。Rust 很容易与 C 语言对话，从而与任何其它可以与 C 语言对话的语言对话。")],-1)),a("p",null,[s[1]||(s[1]=n("为什么要从 Rust 调用 C 函数？简短的答案就是软件库。冗长的答案则触及到 C 在众多编程语言中的地位，特别是相对 Rust 而言。C、C++，还有 Rust 都是系统语言，这意味着程序员可以访问机器层面的数据类型与操作。在这三个系统语言中，C 依然占据主导地位。现代操作系统的内核主要是用 C 来写的，其余部分依靠汇编语言补充。在标准系统函数库中，输入与输出、数字处理、加密计算、安全、网络、国际化、字符串处理、内存管理等等，大多都是用 C 来写的。这些函数库所代表的是一个庞大的基础设施，支撑着用其他语言写出来的应用。Rust 发展至今也有着可观的函数库，但是 C 的函数库 —— 自 1970 年代就已存在，迄今还在蓬勃发展 —— 是一种无法被忽视的资源。最后一点是，C 依然还是编程语言中的 ",-1)),p(e,{href:"https://baike.baidu.com/item/lingua%20franka/5359711"},{default:t(()=>[...s[0]||(s[0]=[n("通用语",-1)])]),_:1}),s[2]||(s[2]=n("：大部分语言都可以与 C 交流，透过 C，语言之间可以互相交流。",-1))]),s[63]||(s[63]=i('<h3 id="两个概念证明的例子" tabindex="-1">两个概念证明的例子 <a class="header-anchor" href="#两个概念证明的例子" aria-label="Permalink to “两个概念证明的例子”">​</a></h3><p>Rust 支持 FFI（<ruby>外部函数接口<rt>Foreign Function Interface</rt></ruby>）用以调用 C 函数。任何 FFI 所需要面临的问题是调用方语言是否涵盖了被调用语言的数据类型。例如，<code>ctypes</code> 是 Python 调用 C 的 FFI，但是 Python 并没有包括 C 所支持的无符号整数类型。结果就是，<code>ctypes</code> 必须寻求解决方案。</p><p>相比之下，Rust 包含了所有 C 中的原始（即，机器层面）类型。比如说，Rust 中的 <code>i32</code> 类对应 C 中的 <code>int</code> 类。C 特别声明了 <code>char</code> 类必须是一个字节大小，而其他类型，比如 <code>int</code>，必须至少是这个大小（LCTT 译注：原文处有评论指出 <code>int</code> 大小依照 C 标准应至少为 2 字节）；然而如今所有合理的 C 编译器都支持四字节的 <code>int</code>，以及八字节的 <code>double</code>（Rust 中则是 <code>f64</code> 类），以此类推。</p><p>针对 C 的 FFI 所面临的另一个挑战是：FFI 是否能够处理 C 的裸指针，包括指向被看作是字符串的数组指针。C 没有字符串类型，它通过结合字符组和一个非打印终止符（大名鼎鼎的 <em>空终止符</em>）来实现字符串。相比之下，Rust 有两个字符串类型：<code>String</code> 和 <code>&amp;str</code> （字符串切片）。问题是，Rust FFI 是否能将 C 字符串转化成 Rust 字符串——答案是 <em>肯定的</em>。</p><p>出于对效率的追求，结构体指针在 C 中也很常见。一个 C 结构体在作为一个函数的参数或者返回值的时候，其默认行为是传递值（即，逐字节复制）。C 结构体，如同它在 Rust 中的对应部分一样，可以包含数组和嵌套其他结构体，所以其大小是不定的。结构体在两种语言中的最佳用法是传递或返回引用，也就是说，传递或返回结构体的地址而不是结构体本身的副本。Rust FFI 再一次成功处理了 C 的结构体指针，其在 C 函数库中十分普遍。</p>',5)),a("p",null,[s[5]||(s[5]=n("第一段代码案例专注于调用相对简单的 C 库函数，比如 ",-1)),s[6]||(s[6]=a("code",null,"abs",-1)),s[7]||(s[7]=n("（绝对值）和 ",-1)),s[8]||(s[8]=a("code",null,"sqrt",-1)),s[9]||(s[9]=n("（平方根）。这些函数使用非指针标量参数并返回一个非指针标量值。第二段代码案例则涉及了字符串和结构体指针，在这里会介绍工具 ",-1)),p(e,{href:"https://github.com/rust-lang/rust-bindgen"},{default:t(()=>[...s[3]||(s[3]=[n("bindgen",-1)])]),_:1}),s[10]||(s[10]=n("，其通过 C 接口（头文件）生成 Rust 代码，比如 ",-1)),s[11]||(s[11]=a("code",null,"math.h",-1)),s[12]||(s[12]=n(" 以及 ",-1)),s[13]||(s[13]=a("code",null,"time.h",-1)),s[14]||(s[14]=n("。C 头文件声明了 C 函数的调用语法，并定义了会被调用的结构体。两段代码都能在 ",-1)),p(e,{href:"https://condor.depaul.edu/mkalin"},{default:t(()=>[...s[4]||(s[4]=[n("我的主页上",-1)])]),_:1}),s[15]||(s[15]=n(" 找到。",-1))]),s[64]||(s[64]=i(`<h3 id="调用相对简单的-c-函数" tabindex="-1">调用相对简单的 C 函数 <a class="header-anchor" href="#调用相对简单的-c-函数" aria-label="Permalink to “调用相对简单的 C 函数”">​</a></h3><p>第一段代码案例有四处 Rust 对标准数学库内的 C 函数的调用：两处分别调用了 <code>abs</code>（绝对值）和 <code>pow</code>（幂），两处重复调用了 <code>sqrt</code>（平方根）。这个程序可以直接用 <code>rustc</code> 编译器进行构建，或者使用更方便的命令 <code>cargo build</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::os::raw::c_int;  // 32位</span></span>
<span class="line"><span>use std::os::raw::c_double; // 64位</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 从标准库 libc 中引入三个函数。</span></span>
<span class="line"><span>// 此处是 Rust 对三个 C 函数的声明：</span></span>
<span class="line"><span>extern &quot;C&quot; {</span></span>
<span class="line"><span>  fn abs(num: c_int) -&gt; c_int;</span></span>
<span class="line"><span>  fn sqrt(num: c_double) -&gt; c_double;</span></span>
<span class="line"><span>  fn pow(num: c_double, power: c_double) -&gt; c_double;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>  let x: i32 = -123;</span></span>
<span class="line"><span>  println!(&quot;\\n{x}的绝对值是: {}.&quot;, unsafe { abs(x) });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let n: f64 = 9.0;</span></span>
<span class="line"><span>  let p: f64 = 3.0;</span></span>
<span class="line"><span>  println!(&quot;\\n{n}的{p}次方是: {}.&quot;, unsafe { pow(n, p) });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let mut y: f64 = 64.0;</span></span>
<span class="line"><span>  println!(&quot;\\n{y}的平方根是: {}.&quot;, unsafe { sqrt(y) });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  y = -3.14;</span></span>
<span class="line"><span>  println!(&quot;\\n{y}的平方根是: {}.&quot;, unsafe { sqrt(y) }); //** NaN = NotaNumber（不是数字）</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>顶部的两个 <code>use</code> 声明是 Rust 的数据类型 <code>c_int</code> 和 <code>c_double</code>，对应 C 类型里的 <code>int</code> 和 <code>double</code>。Rust 标准模块 <code>std::os::raw</code> 定义了 14 个类似的类型以确保跟 C 的兼容性。模块 <code>std::ffi</code> 中有 14 个同样的类型定义，以及对字符串的支持。</p><p>位于 <code>main</code> 函数上的 <code>extern &quot;C&quot;</code> 区域声明了 3 个 C 库函数，这些函数会在 <code>main</code> 函数内被调用。每次调用都使用了标准的 C 函数名，但每次调用都必须发生在一个 <code>unsafe</code> 区域内。正如每个新接触 Rust 的程序员所发现的那样，Rust 编译器极度强制内存安全。其他语言（特别是 C 和 C++）作不出相同的保证。<code>unsafe</code> 区域其实是说：Rust 对外部调用中可能存在的不安全行为不负责。</p><p>第一个程序输出为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-123的绝对值是: 123.</span></span>
<span class="line"><span>9的3次方是: 729.</span></span>
<span class="line"><span>64的平方根是: 8.</span></span>
<span class="line"><span>-3.14的平方根是: NaN.</span></span></code></pre></div><p>输出的最后一行的 <code>NaN</code> 表示<ruby>不是数字<rt>Not a Number</rt></ruby>：C 库函数 <code>sqrt</code> 期待一个非负值作为参数，这使得参数 <code>-3.14</code> 生成了 <code>NaN</code> 作为返回值。</p><h3 id="调用涉及指针的-c-函数" tabindex="-1">调用涉及指针的 C 函数 <a class="header-anchor" href="#调用涉及指针的-c-函数" aria-label="Permalink to “调用涉及指针的 C 函数”">​</a></h3><p>C 库函数为了提高效率，经常在安全、网络、字符串处理、内存管理，以及其他领域中使用指针。例如，库函数 <code>asctime</code>（ASCII 字符串形式的时间）期待一个结构体指针作为其参数。Rust 调用类似 <code>asctime</code> 的 C 函数就会比调用 <code>sqrt</code> 要更加棘手一些，后者既没有牵扯到指针，也不涉及到结构体。</p>`,10)),a("p",null,[s[18]||(s[18]=i("函数 <code>asctime</code> 调用的 C 结构体类型为 <code>struct tm</code>。一个指向此结构体的指针会作为参数被传递给库函数 <code>mktime</code>（时间作为值）。此结构体会将时间拆分成诸如年、月、小时之类的单位。此结构体的<ruby>字段<rt>field</rt></ruby>类型为 <code>time_t</code>，是 <code>int</code>（32位）和 <code>long</code>（64 位）的别名。两个库函数将这些破碎的时间片段组合成了一个单一值：<code>asctime</code> 返回一个以字符串表示的时间，而 <code>mktime</code> 返回一个 <code>time_t</code> 值表示自 “",21)),a("ruby",null,[p(e,{href:"https://baike.baidu.com/item/UNIX%E6%97%B6%E9%97%B4/8932323"},{default:t(()=>[...s[16]||(s[16]=[n("纪元",-1)])]),_:1}),s[17]||(s[17]=a("rt",null,"Epoch",-1))]),s[19]||(s[19]=n(" 以来所经历的秒数，这是一个系统的时钟和时间戳的相对时间。典型的纪元设置为 1900 年或 1970 年，1 月 1 日 0 时 0 分 0 秒。（LCTT 校注：Unix、Linux 乃至于如今所有主要的计算机和网络的时间纪元均采用 1970 年为起点。）",-1))]),s[65]||(s[65]=i(`<p>以下的 C 程序调用了 <code>asctime</code> 和 <code>mktime</code>，并使用了其他库函数 <code>strftime</code> 来将 <code>mktime</code> 的返回值转化成一个格式化的字符串。这个程序可被视作 Rust 对应版本的预热：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;time.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main () {</span></span>
<span class="line"><span>  struct tm sometime;  /* 时间被打破细分 */</span></span>
<span class="line"><span>  char buffer[80];</span></span>
<span class="line"><span>  int utc;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  sometime.tm_sec = 1;</span></span>
<span class="line"><span>  sometime.tm_min = 1;</span></span>
<span class="line"><span>  sometime.tm_hour = 1;</span></span>
<span class="line"><span>  sometime.tm_mday = 1;</span></span>
<span class="line"><span>  sometime.tm_mon = 1;</span></span>
<span class="line"><span>  sometime.tm_year = 1; /*LCTT 校注：注意，相对于 1900 年的年数*/</span></span>
<span class="line"><span>  sometime.tm_hour = 1;</span></span>
<span class="line"><span>  sometime.tm_wday = 1;</span></span>
<span class="line"><span>  sometime.tm_yday = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  printf(&quot;日期与时间: %s\\n&quot;, asctime(&amp;sometime));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  utc = mktime(&amp;sometime);</span></span>
<span class="line"><span>  if( utc &lt; 0 ) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;错误: mktime 无法生成时间\\n&quot;);</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    printf(&quot;返回的整数值: %d\\n&quot;, utc);</span></span>
<span class="line"><span>    strftime(buffer, sizeof(buffer), &quot;%c&quot;, &amp;sometime);</span></span>
<span class="line"><span>    printf(&quot;更加可读的版本: %s\\n&quot;, buffer);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>程序输出为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>日期与时间: Fri Feb  1 01:01:01 1901</span></span>
<span class="line"><span>返回的整数值: 2120218157</span></span>
<span class="line"><span>更加可读的版本: Fri Feb  1 01:01:01 1901</span></span></code></pre></div>`,4)),a("p",null,[s[22]||(s[22]=n("（LCTT 译注：如果你尝试在自己电脑上运行这段代码，然后得到了一行关于 ",-1)),s[23]||(s[23]=a("code",null,"mktime",-1)),s[24]||(s[24]=n(" 的错误信息，然后又在网上随便找了个在线 C 编译器，复制代码然后得到了跟这里的结果有区别但是没有错误的结果，不要慌，我的电脑上也是这样的。导致本地机器上 ",-1)),s[25]||(s[25]=a("code",null,"mktime",-1)),s[26]||(s[26]=n(" 失败的原因是作者没有设置 ",-1)),s[27]||(s[27]=a("code",null,"tm_isdst",-1)),s[28]||(s[28]=n("，这个是用来标记夏令时的标志。",-1)),p(e,{href:"https://cplusplus.com/reference/ctime/tm/"},{default:t(()=>[...s[20]||(s[20]=[a("code",null,"tm_isdst",-1),n(" 大于零则夏令时生效中，等于零则不生效，小于零标记未知",-1)])]),_:1}),s[29]||(s[29]=n("。加入 ",-1)),s[30]||(s[30]=a("code",null,"sometime.tm_isdst = 0",-1)),s[31]||(s[31]=n(" 或 ",-1)),s[32]||(s[32]=a("code",null,"= -1",-1)),s[33]||(s[33]=n(" 后应该就能得到跟在线编译器大致一样的结果。不同的地方在于结果第一行我得到的是 ",-1)),s[34]||(s[34]=a("code",null,"Mon Feb ...",-1)),s[35]||(s[35]=n("，这个与作者代码中 ",-1)),s[36]||(s[36]=a("code",null,"sometime.tm_wday = 1",-1)),s[37]||(s[37]=n(" 对应，这里应该是作者",-1)),s[38]||(s[38]=a("strong",null,"写错了",-1)),s[39]||(s[39]=n("；第二行我和作者和网上得到的数字都不一样，这大概是合理的，因为这与机器的纪元有关；第三行我跟作者的结果是一样的，1901 年 2 月 1 日也确实是周五，这是因为 ",-1)),p(e,{href:"https://cplusplus.com/reference/ctime/mktime/"},{default:t(()=>[...s[21]||(s[21]=[a("code",null,"mktime",-1),n(" 其实会修正时间参数中不合理的地方",-1)])]),_:1}),s[40]||(s[40]=n("。至于夏令时具体是如何影响 ",-1)),s[41]||(s[41]=a("code",null,"mktime",-1)),s[42]||(s[42]=n(" 这个问题，我能查到的只有 ",-1)),s[43]||(s[43]=a("code",null,"mktime",-1)),s[44]||(s[44]=n(" 的计算受时区影响，更底层的原因我也不知道了。）",-1))]),s[66]||(s[66]=i(`<p>总的来说，Rust 在调用库函数 <code>asctime</code> 和 <code>mktime</code> 时，必须处理以下两个问题：</p><ul><li>将裸指针作为唯一参数传递给每个库函数。</li><li>把从 <code>asctime</code> 返回的 C 字符串转化为 Rust 字符串。</li></ul><h3 id="rust-调用-asctime-和-mktime" tabindex="-1">Rust 调用 asctime 和 mktime <a class="header-anchor" href="#rust-调用-asctime-和-mktime" aria-label="Permalink to “Rust 调用 asctime 和 mktime”">​</a></h3><p>工具 <code>bindgen</code> 会根据类似 <code>math.h</code> 和 <code>time.h</code> 之类的 C 头文件生成 Rust 支持的代码。下面这个简化版的 <code>time.h</code> 就可以用来做例子，简化版与原版主要有两个不同：</p><ul><li>内置类型 <code>int</code> 被用来取代别名类型 <code>time_t</code>。工具 bindgen 可以处理 <code>time_t</code> 类，但是会生成一些烦人的警告，因为 <code>time_t</code> 不符合 Rust 的命名规范：<code>time_t</code> 以下划线区分 <code>time</code> 和 <code>t</code>；Rust 更偏好驼峰式命名方法，比如 <code>TimeT</code>。</li><li>出于同样的原因，这里选择 <code>StructTM</code> 作为 <code>struct tm</code> 的别名。</li></ul><p>以下是一份简化版的头文件，<code>mktime</code> 和 <code>asctime</code> 在文件底部：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>typedef struct tm {</span></span>
<span class="line"><span>  int tm_sec;  /* 秒 */</span></span>
<span class="line"><span>  int tm_min;  /* 分钟 */</span></span>
<span class="line"><span>  int tm_hour;   /* 小时 */</span></span>
<span class="line"><span>  int tm_mday;   /* 日 */</span></span>
<span class="line"><span>  int tm_mon;  /* 月 */</span></span>
<span class="line"><span>  int tm_year;   /* 年 */</span></span>
<span class="line"><span>  int tm_wday;   /* 星期 */</span></span>
<span class="line"><span>  int tm_yday;   /* 一年中的第几天 */</span></span>
<span class="line"><span>  int tm_isdst;  /* 夏令时 */</span></span>
<span class="line"><span>} StructTM;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern int mktime(StructTM*);</span></span>
<span class="line"><span>extern char* asctime(StructTM*);</span></span></code></pre></div><p><code>bindgen</code> 安装好后，<code>mytime.h</code> 作为以上提到的头文件，以下命令（<code>%</code> 是命令行提示符）可以生成所需的 Rust 代码并将其保存到文件 <code>mytime.rs</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% bindgen mytime.h &gt; mytime.rs</span></span></code></pre></div><p>以下是 <code>mytime.rs</code> 中的重要部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* automatically generated by rust-bindgen 0.61.0 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[repr(C)]</span></span>
<span class="line"><span>#[derive(Debug, Copy, Clone)]</span></span>
<span class="line"><span>pub struct tm {</span></span>
<span class="line"><span>  pub tm_sec: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_min: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_hour: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_mday: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_mon: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_year: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_wday: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_yday: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_isdst: ::std::os::raw::c_int,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pub type StructTM = tm;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern &quot;C&quot; {</span></span>
<span class="line"><span>  pub fn mktime(arg1: *mut StructTM) -&gt; ::std::os::raw::c_int;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern &quot;C&quot; {</span></span>
<span class="line"><span>  pub fn asctime(arg1: *mut StructTM) -&gt; *mut ::std::os::raw::c_char;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[test]</span></span>
<span class="line"><span>fn bindgen_test_layout_tm() {</span></span>
<span class="line"><span>  const UNINIT: ::std::mem::MaybeUninit&lt;tm&gt; = ::std::mem::MaybeUninit::uninit();</span></span>
<span class="line"><span>  let ptr = UNINIT.as_ptr();</span></span>
<span class="line"><span>  assert_eq!(</span></span>
<span class="line"><span>  ::std::mem::size_of::&lt;tm&gt;(),</span></span>
<span class="line"><span>  36usize,</span></span>
<span class="line"><span>  concat!(&quot;Size of: &quot;, stringify!(tm))</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  ...</span></span></code></pre></div><p>Rust 结构体 <code>struct tm</code>，跟原本在 C 中的一样，包含了 9 个 4 字节的整型字段。这些字段名称在 C 和 Rust 中是一样的。<code>extern &quot;C&quot;</code> 区域声明了库函数 <code>astime</code> 和 <code>mktime</code> 分别需要只一个参数，一个指向可变实例 <code>StructTM</code> 的裸指针。（库函数可能会通过指针改变作为参数传递的结构体。）</p><p><code>#[test]</code> 属性下的其余代码是用来测试 Rust 版的时间结构体的布局。通过命令 <code>cargo test</code> 可以进行这些测试。问题在于，C 没有规定编译器应该如何对结构体中的字段进行布局。比如说，C 的 <code>struct tm</code> 以字段 <code>tm_sec</code> 开头用以表示秒；但是 C 不需要编译版本遵循这个排序。不管怎样，Rust 测试应该会成功，而 Rust 对库函数的调用也应如预期般工作。</p><h3 id="设置好第二个案例并开始运行" tabindex="-1">设置好第二个案例并开始运行 <a class="header-anchor" href="#设置好第二个案例并开始运行" aria-label="Permalink to “设置好第二个案例并开始运行”">​</a></h3><p>从 <code>bindgen</code> 生成的代码不包含 <code>main</code> 函数，所以是一个天然的模块。以下是一个 <code>main</code> 函数初始化了 <code>StructTM</code> 并调用了 <code>asctime</code> 和 <code>mktime</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mod mytime;</span></span>
<span class="line"><span>use mytime::*;</span></span>
<span class="line"><span>use std::ffi::CStr;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>  let mut sometime  = StructTM {</span></span>
<span class="line"><span>    tm_year: 1,</span></span>
<span class="line"><span>    tm_mon: 1,</span></span>
<span class="line"><span>    tm_mday: 1,</span></span>
<span class="line"><span>    tm_hour: 1,</span></span>
<span class="line"><span>    tm_min: 1,</span></span>
<span class="line"><span>    tm_sec: 1,</span></span>
<span class="line"><span>    tm_isdst: -1,</span></span>
<span class="line"><span>    tm_wday: 1,</span></span>
<span class="line"><span>    tm_yday: 1</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  unsafe {</span></span>
<span class="line"><span>    let c_ptr = &amp;mut sometime; // 裸指针</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 调用，转化，并拥有</span></span>
<span class="line"><span>    // 返回的 C 字符串</span></span>
<span class="line"><span>    let char_ptr = asctime(c_ptr);</span></span>
<span class="line"><span>    let c_str = CStr::from_ptr(char_ptr);</span></span>
<span class="line"><span>    println!(&quot;{:#?}&quot;, c_str.to_str());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let utc = mktime(c_ptr);</span></span>
<span class="line"><span>    println!(&quot;{}&quot;, utc);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这段 Rust 代码可以被编译（直接用 <code>rustc</code> 或使用 <code>cargo</code>）并运行。输出为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Ok(</span></span>
<span class="line"><span>    &quot;Mon Feb  1 01:01:01 1901\\n&quot;,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>2120218157</span></span></code></pre></div><p>对 C 函数 <code>asctime</code> 和 <code>mktime</code> 的调用必须再一次被放在 <code>unsafe</code> 区域内，因为 Rust 编译器无法对这些外部函数的潜在内存安全风险负责。此处声明一下，<code>asctime</code> 和 <code>mktime</code> 并没有安全风险。调用的两个函数的参数是裸指针 <code>ptr</code>，其指向结构体 <code>sometime</code> （在<ruby>栈<rt>stack</rt></ruby>中）的地址。</p><p><code>asctime</code> 是两个函数中调用起来更棘手的那个，因为这个函数返回的是一个指向 C <code>char</code> 的指针，如果函数返回 <code>Mon</code> 那么指针就指向 <code>M</code>。但是 Rust 编译器并不知道 C 字符串 （<code>char</code> 的空终止数组）的储存位置。是内存里的静态空间？还是<ruby>堆<rt>heap</rt></ruby>？<code>asctime</code> 函数内用来储存时间的文字表达的数组实际上是在内存的静态空间里。无论如何，C 到 Rust 字符串转化需要两个步骤来避免编译错误：</p><ul><li>调用 <code>Cstr::from_ptr(char_ptr)</code> 来将 C 字符串转化为 Rust 字符串并返回一个引用储存在变量 <code>c_str</code> 中。</li><li>对 <code>c_str.to_str()</code> 的调用确保了 <code>c_str</code> 是所有者。</li></ul><p>Rust 代码不会增加从 <code>mktime</code> 返回的整型值的易读性，这一部分留作课外作业给感兴趣的人去探究。Rust 模板 <code>chrono::format</code> 也有一个 <code>strftime</code> 函数，它可以被当作 C 的同名函数来使用，两者都是获取时间的文字表达。</p><h3 id="使用-ffi-和-bindgen-调用-c" tabindex="-1">使用 FFI 和 bindgen 调用 C <a class="header-anchor" href="#使用-ffi-和-bindgen-调用-c" aria-label="Permalink to “使用 FFI 和 bindgen 调用 C”">​</a></h3><p>Rust FFI 和工具 <code>bindgen</code> 都能够出色地协助 Rust 调用 C 库，无论是标准库还是第三方库。Rust 可以轻松地与 C 交流，并透过 C 与其他语言交流。对于调用像 <code>sqrt</code> 一样简单的库函数，Rust FFI 表现直截了当，这是因为 Rust 的原始数据类型覆盖了它们在 C 中的对应部分。</p><p>对于更为复杂的交流 —— 特别是 Rust 调用像 <code>asctime</code> 和 <code>mktime</code> 一样，会涉及到结构体和指针的 C 库函数 —— <code>bindgen</code> 工具是优秀的帮手。这个工具会生成支持代码以及所需要的测试。当然，Rust 编译器无法假设 C 代码对内存安全的考虑会符合 Rust 的标准；因此，Rust 必须在 <code>unsafe</code> 区域内调用 C。</p><hr>`,26)),a("p",null,[s[46]||(s[46]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/22/11/rust-calls-c-library-functions"},{default:t(()=>[...s[45]||(s[45]=[n("https://opensource.com/article/22/11/rust-calls-c-library-functions",-1)])]),_:1})]),a("p",null,[s[51]||(s[51]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/mkalindepauledu"},{default:t(()=>[...s[47]||(s[47]=[n("Marty Kalin",-1)])]),_:1}),s[52]||(s[52]=n(" 选题：",-1)),p(e,{href:"https://github.com/lkxed"},{default:t(()=>[...s[48]||(s[48]=[n("lkxed",-1)])]),_:1}),s[53]||(s[53]=n(" 译者：",-1)),p(e,{href:"https://github.com/yzuowei"},{default:t(()=>[...s[49]||(s[49]=[n("yzuowei",-1)])]),_:1}),s[54]||(s[54]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:t(()=>[...s[50]||(s[50]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[57]||(s[57]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[55]||(s[55]=[n("LCTT",-1)])]),_:1}),s[58]||(s[58]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:t(()=>[...s[56]||(s[56]=[n("Linux中国",-1)])]),_:1}),s[59]||(s[59]=n(" 荣誉推出",-1))])])}const R=l(u,[["render",r]]);export{h as __pageData,R as default};
