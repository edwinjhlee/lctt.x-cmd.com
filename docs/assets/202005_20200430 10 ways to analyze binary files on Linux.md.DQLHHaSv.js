import{_ as t,a0 as o,w as d,s as c,ao as i,I as l,x as a,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"在 Linux 上分析二进制文件的 10 种方法 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 上分析二进制文件的 10 种方法 | LCTT (202005) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 上分析二进制文件的 10 种方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 上分析二进制文件的 10 种方法 | LCTT (202005) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202005/20200430 10 ways to analyze binary files on Linux","title":"在 Linux 上分析二进制文件的 10 种方法","tag":"202005","desc":""},"relativePath":"202005/20200430 10 ways to analyze binary files on Linux.md","filePath":"[post].md"}'),r={name:"202005/20200430 10 ways to analyze binary files on Linux.md"};function b(h,s,u,g,f,x){const n=o("Link");return d(),c("div",null,[s[23]||(s[23]=i(`<h1 id="在-linux-上分析二进制文件的-10-种方法" tabindex="-1">在 Linux 上分析二进制文件的 10 种方法 <a class="header-anchor" href="#在-linux-上分析二进制文件的-10-种方法" aria-label="Permalink to “在 Linux 上分析二进制文件的 10 种方法”">​</a></h1><blockquote><p>这些简单的命令和工具可以帮助你轻松完成分析二进制文件的任务。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202005/05/232115nn0oduodo4oztv0a.jpg" alt=""></p><p>“这个世界上有 10 种人：懂二进制的人和不懂二进制的人。”</p><p>我们每天都在与二进制文件打交道，但我们对二进制文件却知之甚少。我所说的二进制，是指你每天运行的可执行文件，从命令行工具到成熟的应用程序都是。</p><p>Linux 提供了一套丰富的工具，让分析二进制文件变得轻而易举。无论你的工作角色是什么，如果你在 Linux 上工作，了解这些工具的基本知识将帮助你更好地理解你的系统。</p><p>在这篇文章中，我们将介绍其中一些最流行的 Linux 工具和命令，其中大部分都是 Linux 发行版的一部分。如果没有找到，你可以随时使用你的软件包管理器来安装和探索它们。请记住：学习在正确的场合使用正确的工具需要大量的耐心和练习。</p><h3 id="file" tabindex="-1">file <a class="header-anchor" href="#file" aria-label="Permalink to “file”">​</a></h3><p>它的作用：帮助确定文件类型。</p><p>这将是你进行二进制分析的起点。我们每天都在与文件打交道，并非所有的文件都是可执行类型，除此之外还有各种各样的文件类型。在你开始之前，你需要了解要分析的文件类型。是二进制文件、库文件、ASCII 文本文件、视频文件、图片文件、PDF、数据文件等文件吗？</p><p><code>file</code> 命令将帮助你确定你所处理的文件类型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ file /bin/ls</span></span>
<span class="line"><span>/bin/ls: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=94943a89d17e9d373b2794dcb1f7e38c95b66c86, stripped</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file /etc/passwd</span></span>
<span class="line"><span>/etc/passwd: ASCII text</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="ldd" tabindex="-1">ldd <a class="header-anchor" href="#ldd" aria-label="Permalink to “ldd”">​</a></h3><p>它的作用：打印共享对象依赖关系。</p><p>如果你已经在一个可执行的二进制文件上使用了上面的 <code>file</code> 命令，你肯定会看到输出中的“<ruby>动态链接<rt>dynamically linked</rt></ruby>”信息。它是什么意思呢？</p><p>在开发软件的时候，我们尽量不要重造轮子。有一组常见的任务是大多数软件程序需要的，比如打印输出或从标准输入/打开的文件中读取等。所有这些常见的任务都被抽象成一组通用的函数，然后每个人都可以使用，而不是写出自己的变体。这些常用的函数被放在一个叫 <code>libc</code> 或 <code>glibc</code> 的库中。</p><p>如何找到可执行程序所依赖的库？这就是 <code>ldd</code> 命令的作用了。对动态链接的二进制文件运行该命令会显示出所有依赖库和它们的路径。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ldd /bin/ls</span></span>
<span class="line"><span>        linux-vdso.so.1 =&gt;  (0x00007ffef5ba1000)</span></span>
<span class="line"><span>        libselinux.so.1 =&gt; /lib64/libselinux.so.1 (0x00007fea9f854000)</span></span>
<span class="line"><span>        libcap.so.2 =&gt; /lib64/libcap.so.2 (0x00007fea9f64f000)</span></span>
<span class="line"><span>        libacl.so.1 =&gt; /lib64/libacl.so.1 (0x00007fea9f446000)</span></span>
<span class="line"><span>        libc.so.6 =&gt; /lib64/libc.so.6 (0x00007fea9f079000)</span></span>
<span class="line"><span>        libpcre.so.1 =&gt; /lib64/libpcre.so.1 (0x00007fea9ee17000)</span></span>
<span class="line"><span>        libdl.so.2 =&gt; /lib64/libdl.so.2 (0x00007fea9ec13000)</span></span>
<span class="line"><span>        /lib64/ld-linux-x86-64.so.2 (0x00007fea9fa7b000)</span></span>
<span class="line"><span>        libattr.so.1 =&gt; /lib64/libattr.so.1 (0x00007fea9ea0e000)</span></span>
<span class="line"><span>        libpthread.so.0 =&gt; /lib64/libpthread.so.0 (0x00007fea9e7f2000)</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="ltrace" tabindex="-1">ltrace <a class="header-anchor" href="#ltrace" aria-label="Permalink to “ltrace”">​</a></h3><p>它的作用：库调用跟踪器。</p><p>我们现在知道如何使用 <code>ldd</code> 命令找到一个可执行程序所依赖的库。然而，一个库可以包含数百个函数。在这几百个函数中，哪些是我们的二进制程序正在使用的实际函数？</p><p><code>ltrace</code> 命令可以显示运行时从库中调用的所有函数。在下面的例子中，你可以看到被调用的函数名称，以及传递给该函数的参数。你也可以在输出的最右边看到这些函数返回的内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ltrace ls</span></span>
<span class="line"><span>__libc_start_main(0x4028c0, 1, 0x7ffd94023b88, 0x412950 &lt;unfinished ...&gt;</span></span>
<span class="line"><span>strrchr(&quot;ls&quot;, &#39;/&#39;)                                                                  = nil</span></span>
<span class="line"><span>setlocale(LC_ALL, &quot;&quot;)                                                               = &quot;en_US.UTF-8&quot;</span></span>
<span class="line"><span>bindtextdomain(&quot;coreutils&quot;, &quot;/usr/share/locale&quot;)                                    = &quot;/usr/share/locale&quot;</span></span>
<span class="line"><span>textdomain(&quot;coreutils&quot;)                                                             = &quot;coreutils&quot;</span></span>
<span class="line"><span>__cxa_atexit(0x40a930, 0, 0, 0x736c6974756572)                                      = 0</span></span>
<span class="line"><span>isatty(1)                                                                           = 1</span></span>
<span class="line"><span>getenv(&quot;QUOTING_STYLE&quot;)                                                             = nil</span></span>
<span class="line"><span>getenv(&quot;COLUMNS&quot;)                                                                   = nil</span></span>
<span class="line"><span>ioctl(1, 21523, 0x7ffd94023a50)                                                     = 0</span></span>
<span class="line"><span>&lt;&lt; snip &gt;&gt;</span></span>
<span class="line"><span>fflush(0x7ff7baae61c0)                                                              = 0</span></span>
<span class="line"><span>fclose(0x7ff7baae61c0)                                                              = 0</span></span>
<span class="line"><span>+++ exited (status 0) +++</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="hexdump" tabindex="-1">hexdump <a class="header-anchor" href="#hexdump" aria-label="Permalink to “hexdump”">​</a></h3><p>它的作用：以 ASCII、十进制、十六进制或八进制显示文件内容。</p><p>通常情况下，当你用一个应用程序打开一个文件，而它不知道如何处理该文件时，就会出现这种情况。尝试用 <code>vim</code> 打开一个可执行文件或视频文件，你屏幕上会看到的只是抛出的乱码。</p><p>在 <code>hexdump</code> 中打开未知文件，可以帮助你看到文件的具体内容。你也可以选择使用一些命令行选项来查看用 ASCII 表示的文件数据。这可能会帮助你了解到它是什么类型的文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ hexdump -C /bin/ls | head</span></span>
<span class="line"><span>00000000  7f 45 4c 46 02 01 01 00  00 00 00 00 00 00 00 00  |.ELF............|</span></span>
<span class="line"><span>00000010  02 00 3e 00 01 00 00 00  d4 42 40 00 00 00 00 00  |..&gt;......B@.....|</span></span>
<span class="line"><span>00000020  40 00 00 00 00 00 00 00  f0 c3 01 00 00 00 00 00  |@...............|</span></span>
<span class="line"><span>00000030  00 00 00 00 40 00 38 00  09 00 40 00 1f 00 1e 00  |....@.8...@.....|</span></span>
<span class="line"><span>00000040  06 00 00 00 05 00 00 00  40 00 00 00 00 00 00 00  |........@.......|</span></span>
<span class="line"><span>00000050  40 00 40 00 00 00 00 00  40 00 40 00 00 00 00 00  |@.@.....@.@.....|</span></span>
<span class="line"><span>00000060  f8 01 00 00 00 00 00 00  f8 01 00 00 00 00 00 00  |................|</span></span>
<span class="line"><span>00000070  08 00 00 00 00 00 00 00  03 00 00 00 04 00 00 00  |................|</span></span>
<span class="line"><span>00000080  38 02 00 00 00 00 00 00  38 02 40 00 00 00 00 00  |8.......8.@.....|</span></span>
<span class="line"><span>00000090  38 02 40 00 00 00 00 00  1c 00 00 00 00 00 00 00  |8.@.............|</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="strings" tabindex="-1">strings <a class="header-anchor" href="#strings" aria-label="Permalink to “strings”">​</a></h3><p>它的作用：打印文件中的可打印字符的字符串。</p><p>如果你只是在二进制中寻找可打印的字符，那么 <code>hexdump</code> 对于你的使用场景来说似乎有点矫枉过正，你可以使用 <code>strings</code> 命令。</p><p>在开发软件的时候，各种文本/ASCII 信息会被添加到其中，比如打印信息、调试信息、帮助信息、错误等。只要这些信息都存在于二进制文件中，就可以用 <code>strings</code> 命令将其转储到屏幕上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ strings /bin/ls</span></span></code></pre></div><h3 id="readelf" tabindex="-1">readelf <a class="header-anchor" href="#readelf" aria-label="Permalink to “readelf”">​</a></h3><p>它的作用：显示有关 ELF 文件的信息。</p><p>ELF（<ruby>可执行和可链接文件格式<rt>Executable and Linkable File Format</rt></ruby>）是可执行文件或二进制文件的主流格式，不仅是 Linux 系统，也是各种 UNIX 系统的主流文件格式。如果你已经使用了像 <code>file</code> 命令这样的工具，它告诉你文件是 ELF 格式，那么下一步就是使用 <code>readelf</code> 命令和它的各种选项来进一步分析文件。</p>`,36)),l("p",null,[s[1]||(s[1]=a("在使用 ",-1)),s[2]||(s[2]=l("code",null,"readelf",-1)),s[3]||(s[3]=a(" 命令时，有一份实际的 ELF 规范的参考是非常有用的。你可以在",-1)),p(n,{href:"http://www.skyfree.org/linux/references/ELF_Format.pdf"},{default:e(()=>[...s[0]||(s[0]=[a("这里",-1)])]),_:1}),s[4]||(s[4]=a("找到该规范。",-1))]),s[24]||(s[24]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ readelf -h /bin/ls</span></span>
<span class="line"><span>ELF Header:</span></span>
<span class="line"><span>  Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00</span></span>
<span class="line"><span>  Class:                             ELF64</span></span>
<span class="line"><span>  Data:                              2&#39;s complement, little endian</span></span>
<span class="line"><span>  Version:                           1 (current)</span></span>
<span class="line"><span>  OS/ABI:                            UNIX - System V</span></span>
<span class="line"><span>  ABI Version:                       0</span></span>
<span class="line"><span>  Type:                              EXEC (Executable file)</span></span>
<span class="line"><span>  Machine:                           Advanced Micro Devices X86-64</span></span>
<span class="line"><span>  Version:                           0x1</span></span>
<span class="line"><span>  Entry point address:               0x4042d4</span></span>
<span class="line"><span>  Start of program headers:          64 (bytes into file)</span></span>
<span class="line"><span>  Start of section headers:          115696 (bytes into file)</span></span>
<span class="line"><span>  Flags:                             0x0</span></span>
<span class="line"><span>  Size of this header:               64 (bytes)</span></span>
<span class="line"><span>  Size of program headers:           56 (bytes)</span></span>
<span class="line"><span>  Number of program headers:         9</span></span>
<span class="line"><span>  Size of section headers:           64 (bytes)</span></span>
<span class="line"><span>  Number of section headers:         31</span></span>
<span class="line"><span>  Section header string table index: 30</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="objdump" tabindex="-1">objdump <a class="header-anchor" href="#objdump" aria-label="Permalink to “objdump”">​</a></h3><p>它的作用：从对象文件中显示信息。</p><p>二进制文件是通过你编写的源码创建的，这些源码会通过一个叫做编译器的工具进行编译。这个编译器会生成相对于源代码的机器语言指令，然后由 CPU 执行特定的任务。这些机器语言代码可以通过被称为汇编语言的助记词来解读。汇编语言是一组指令，它可以帮助你理解由程序所进行并最终在 CPU 上执行的操作。</p><p><code>objdump</code> 实用程序读取二进制或可执行文件，并将汇编语言指令转储到屏幕上。汇编语言知识对于理解 <code>objdump</code> 命令的输出至关重要。</p><p>请记住：汇编语言是特定于体系结构的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ objdump -d /bin/ls | head</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/bin/ls:     file format elf64-x86-64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Disassembly of section .init:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0000000000402150 &lt;_init@@Base&gt;:</span></span>
<span class="line"><span>  402150:       48 83 ec 08             sub    $0x8,%rsp</span></span>
<span class="line"><span>  402154:       48 8b 05 6d 8e 21 00    mov    0x218e6d(%rip),%rax        # 61afc8 &lt;__gmon_start__&gt;</span></span>
<span class="line"><span>  40215b:       48 85 c0                test   %rax,%rax</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="strace" tabindex="-1">strace <a class="header-anchor" href="#strace" aria-label="Permalink to “strace”">​</a></h3><p>它的作用：跟踪系统调用和信号。</p><p>如果你用过前面提到的 <code>ltrace</code>，那就把 <code>strace</code> 想成是类似的。唯一的区别是，<code>strace</code> 工具不是追踪调用的库，而是追踪系统调用。系统调用是你与内核对接来完成工作的。</p><p>举个例子，如果你想把一些东西打印到屏幕上，你会使用标准库 <code>libc</code> 中的 <code>printf</code> 或 <code>puts</code> 函数；但是，在底层，最终会有一个名为 <code>write</code> 的系统调用来实际把东西打印到屏幕上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ strace -f /bin/ls</span></span>
<span class="line"><span>execve(&quot;/bin/ls&quot;, [&quot;/bin/ls&quot;], [/* 17 vars */]) = 0</span></span>
<span class="line"><span>brk(NULL)                               = 0x686000</span></span>
<span class="line"><span>mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f967956a000</span></span>
<span class="line"><span>access(&quot;/etc/ld.so.preload&quot;, R_OK)      = -1 ENOENT (No such file or directory)</span></span>
<span class="line"><span>open(&quot;/etc/ld.so.cache&quot;, O_RDONLY|O_CLOEXEC) = 3</span></span>
<span class="line"><span>fstat(3, {st_mode=S_IFREG|0644, st_size=40661, ...}) = 0</span></span>
<span class="line"><span>mmap(NULL, 40661, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f9679560000</span></span>
<span class="line"><span>close(3)                                = 0</span></span>
<span class="line"><span>&lt;&lt; snip &gt;&gt;</span></span>
<span class="line"><span>fstat(1, {st_mode=S_IFCHR|0620, st_rdev=makedev(136, 1), ...}) = 0</span></span>
<span class="line"><span>mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f9679569000</span></span>
<span class="line"><span>write(1, &quot;R2  RH\\n&quot;, 7R2  RH</span></span>
<span class="line"><span>)                 = 7</span></span>
<span class="line"><span>close(1)                                = 0</span></span>
<span class="line"><span>munmap(0x7f9679569000, 4096)            = 0</span></span>
<span class="line"><span>close(2)                                = 0</span></span>
<span class="line"><span>exit_group(0)                           = ?</span></span>
<span class="line"><span>+++ exited with 0 +++</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="nm" tabindex="-1">nm <a class="header-anchor" href="#nm" aria-label="Permalink to “nm”">​</a></h3><p>它的作用：列出对象文件中的符号。</p><p>如果你所使用的二进制文件没有被剥离，<code>nm</code> 命令将为你提供在编译过程中嵌入到二进制文件中的有价值的信息。<code>nm</code> 可以帮助你从二进制文件中识别变量和函数。你可以想象一下，如果你无法访问二进制文件的源代码时，这将是多么有用。</p><p>为了展示 <code>nm</code>，我们快速编写了一个小程序，用 <code>-g</code> 选项编译，我们会看到这个二进制文件没有被剥离。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat hello.c</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    printf(&quot;Hello world!&quot;);</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ gcc -g hello.c -o hello</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file hello</span></span>
<span class="line"><span>hello: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=3de46c8efb98bce4ad525d3328121568ba3d8a5d, not stripped</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ./hello</span></span>
<span class="line"><span>Hello world!$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ nm hello | tail</span></span>
<span class="line"><span>0000000000600e20 d __JCR_END__</span></span>
<span class="line"><span>0000000000600e20 d __JCR_LIST__</span></span>
<span class="line"><span>00000000004005b0 T __libc_csu_fini</span></span>
<span class="line"><span>0000000000400540 T __libc_csu_init</span></span>
<span class="line"><span>                 U __libc_start_main@@GLIBC_2.2.5</span></span>
<span class="line"><span>000000000040051d T main</span></span>
<span class="line"><span>                 U printf@@GLIBC_2.2.5</span></span>
<span class="line"><span>0000000000400490 t register_tm_clones</span></span>
<span class="line"><span>0000000000400430 T _start</span></span>
<span class="line"><span>0000000000601030 D __TMC_END__</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="gdb" tabindex="-1">gdb <a class="header-anchor" href="#gdb" aria-label="Permalink to “gdb”">​</a></h3><p>它的作用：GNU 调试器。</p><p>好吧，不是所有的二进制文件中的东西都可以进行静态分析。我们确实执行了一些运行二进制文件（进行分析）的命令，比如 <code>ltrace</code> 和 <code>strace</code>；然而，软件由各种条件组成，这些条件可能会导致执行不同的替代路径。</p><p>分析这些路径的唯一方法是在运行时环境，在任何给定的位置停止或暂停程序，并能够分析信息，然后再往下执行。</p><p>这就是调试器的作用，在 Linux 上，<code>gdb</code> 就是调试器的事实标准。它可以帮助你加载程序，在特定的地方设置断点，分析内存和 CPU 的寄存器，以及更多的功能。它是对上面提到的其他工具的补充，可以让你做更多的运行时分析。</p><p>有一点需要注意的是，一旦你使用 <code>gdb</code> 加载一个程序，你会看到它自己的 <code>(gdb)</code> 提示符。所有进一步的命令都将在这个 <code>gdb</code> 命令提示符中运行，直到你退出。</p><p>我们将使用我们之前编译的 <code>hello</code> 程序，使用 <code>gdb</code> 来看看它的工作原理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gdb -q ./hello</span></span>
<span class="line"><span>Reading symbols from /home/flash/hello...done.</span></span>
<span class="line"><span>(gdb) break main</span></span>
<span class="line"><span>Breakpoint 1 at 0x400521: file hello.c, line 4.</span></span>
<span class="line"><span>(gdb) info break</span></span>
<span class="line"><span>Num     Type           Disp Enb Address            What</span></span>
<span class="line"><span>1       breakpoint     keep y   0x0000000000400521 in main at hello.c:4</span></span>
<span class="line"><span>(gdb) run</span></span>
<span class="line"><span>Starting program: /home/flash/./hello</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Breakpoint 1, main () at hello.c:4</span></span>
<span class="line"><span>4           printf(&quot;Hello world!&quot;);</span></span>
<span class="line"><span>Missing separate debuginfos, use: debuginfo-install glibc-2.17-260.el7_6.6.x86_64</span></span>
<span class="line"><span>(gdb) bt</span></span>
<span class="line"><span>#0  main () at hello.c:4</span></span>
<span class="line"><span>(gdb) c</span></span>
<span class="line"><span>Continuing.</span></span>
<span class="line"><span>Hello world![Inferior 1 (process 29620) exited normally]</span></span>
<span class="line"><span>(gdb) q</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to “结语”">​</a></h3>`,26)),l("p",null,[s[6]||(s[6]=a("一旦你习惯了使用这些原生的 Linux 二进制分析工具，并理解了它们提供的输出，你就可以转向更高级和专业的开源二进制分析工具，比如 ",-1)),p(n,{href:"https://github.com/radareorg/radare2"},{default:e(()=>[...s[5]||(s[5]=[a("radare2",-1)])]),_:1}),s[7]||(s[7]=a("。",-1))]),s[25]||(s[25]=l("hr",null,null,-1)),l("p",null,[s[9]||(s[9]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/20/4/linux-binary-analysis"},{default:e(()=>[...s[8]||(s[8]=[a("https://opensource.com/article/20/4/linux-binary-analysis",-1)])]),_:1})]),l("p",null,[s[14]||(s[14]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/gkamathe"},{default:e(()=>[...s[10]||(s[10]=[a("Gaurav Kamathe",-1)])]),_:1}),s[15]||(s[15]=a(" 选题：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[11]||(s[11]=[a("lujun9972",-1)])]),_:1}),s[16]||(s[16]=a(" 译者：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[12]||(s[12]=[a("wxy",-1)])]),_:1}),s[17]||(s[17]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[13]||(s[13]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[20]||(s[20]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[18]||(s[18]=[a("LCTT",-1)])]),_:1}),s[21]||(s[21]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[19]||(s[19]=[a("Linux中国",-1)])]),_:1}),s[22]||(s[22]=a(" 荣誉推出",-1))])])}const _=t(r,[["render",b]]);export{y as __pageData,_ as default};
