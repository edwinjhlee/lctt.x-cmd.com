import{_ as t,a0 as d,w as o,s as c,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"GNU binutils 里的九种武器 | LCTT x X-CMD","titleTemplate":false,"description":"GNU binutils 里的九种武器 | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"GNU binutils 里的九种武器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"GNU binutils 里的九种武器 | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20191004 9 essential GNU binutils tools","title":"GNU binutils 里的九种武器","tag":"201910","desc":""},"relativePath":"201910/20191004 9 essential GNU binutils tools.md","filePath":"[post].md"}'),r={name:"201910/20191004 9 essential GNU binutils tools.md"};function h(b,s,g,u,k,f){const p=d("Link");return o(),c("div",null,[s[59]||(s[59]=a("h1",{id:"gnu-binutils-里的九种武器",tabindex:"-1"},[n("GNU binutils 里的九种武器 "),a("a",{class:"header-anchor",href:"#gnu-binutils-里的九种武器","aria-label":"Permalink to “GNU binutils 里的九种武器”"},"​")],-1)),s[60]||(s[60]=a("blockquote",null,[a("p",null,"二进制分析是计算机行业中最被低估的技能。")],-1)),s[61]||(s[61]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201910/10/115409g9nkdm2omutduw7u.jpg",alt:""})],-1)),s[62]||(s[62]=a("p",null,"想象一下，在无法访问软件的源代码时，但仍然能够理解软件的实现方式，在其中找到漏洞，并且更厉害的是还能修复错误。所有这些都是在只有二进制文件时做到的。这听起来就像是超能力，对吧？",-1)),a("p",null,[s[1]||(s[1]=n("你也可以拥有这样的超能力，GNU 二进制实用程序（binutils）就是一个很好的起点。[GNU binutils] ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/GNU_Binutils"},{default:i(()=>[...s[0]||(s[0]=[n("2",-1)])]),_:1}),s[2]||(s[2]=n(" 是一个二进制工具集，默认情况下所有 Linux 发行版中都会安装这些二进制工具。",-1))]),s[63]||(s[63]=l(`<p>二进制分析是计算机行业中最被低估的技能。它主要由恶意软件分析师、反向工程师和使用底层软件的人使用。</p><p>本文探讨了 binutils 可用的一些工具。我使用的是 RHEL，但是这些示例应该在任何 Linux 发行版上可以运行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[~]# cat /etc/redhat-release </span></span>
<span class="line"><span>Red Hat Enterprise Linux Server release 7.6 (Maipo)</span></span>
<span class="line"><span>[~]# </span></span>
<span class="line"><span>[~]# uname -r</span></span>
<span class="line"><span>3.10.0-957.el7.x86_64</span></span>
<span class="line"><span>[~]#</span></span></code></pre></div><p>请注意，某些打包命令（例如 <code>rpm</code>）在基于 Debian 的发行版中可能不可用，因此请使用等效的 <code>dpkg</code> 命令替代。</p><h3 id="软件开发的基础知识" tabindex="-1">软件开发的基础知识 <a class="header-anchor" href="#软件开发的基础知识" aria-label="Permalink to “软件开发的基础知识”">​</a></h3><p>在开源世界中，我们很多人都专注于源代码形式的软件。当软件的源代码随时可用时，很容易获得源代码的副本，打开喜欢的编辑器，喝杯咖啡，然后就可以开始探索了。</p><p>但是源代码不是在 CPU 上执行的代码，在 CPU 上执行的是二进制或者说是机器语言指令。二进制或可执行文件是编译源代码时获得的。熟练的调试人员深谙通常这种差异。</p><h3 id="编译的基础知识" tabindex="-1">编译的基础知识 <a class="header-anchor" href="#编译的基础知识" aria-label="Permalink to “编译的基础知识”">​</a></h3><p>在深入研究 binutils 软件包本身之前，最好先了解编译的基础知识。</p><p>编译是将程序从某种编程语言（如 C/C++）的源代码（文本形式）转换为机器代码的过程。</p>`,10)),a("p",null,[s[5]||(s[5]=n("机器代码是 CPU（或一般而言，硬件）可以理解的 1 和 0 的序列，因此可以由 CPU 执行或运行。该机器码以特定格式保存到文件，通常称为可执行文件或二进制文件。在 Linux（和使用 ",-1)),e(p,{href:"https://www.freebsd.org/doc/handbook/linuxemu.html"},{default:i(()=>[...s[3]||(s[3]=[n("Linux 兼容二进制",-1)])]),_:1}),s[6]||(s[6]=n("的 BSD）上，这称为 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Executable_and_Linkable_Format"},{default:i(()=>[...s[4]||(s[4]=[n("ELF",-1)])]),_:1}),s[7]||(s[7]=n("（",-1)),s[8]||(s[8]=a("ruby",null,[n("可执行和可链接格式"),a("rt",null,"Executable and Linkable Format")],-1)),s[9]||(s[9]=n("）。",-1))]),s[64]||(s[64]=l(`<p>在生成给定的源文件的可执行文件或二进制文件之前，编译过程将经历一系列复杂的步骤。以这个源程序（C 代码）为例。打开你喜欢的编辑器，然后键入以下程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  printf(&quot;Hello World\\n&quot;);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="步骤-1-用-cpp-预处理" tabindex="-1">步骤 1：用 cpp 预处理 <a class="header-anchor" href="#步骤-1-用-cpp-预处理" aria-label="Permalink to “步骤 1：用 cpp 预处理”">​</a></h4>`,3)),a("p",null,[e(p,{href:"https://en.wikipedia.org/wiki/C_preprocessor"},{default:i(()=>[...s[10]||(s[10]=[n("C 预处理程序（cpp）",-1)])]),_:1}),s[11]||(s[11]=n("用于扩展所有宏并将头文件包含进来。在此示例中，头文件 ",-1)),s[12]||(s[12]=a("code",null,"stdio.h",-1)),s[13]||(s[13]=n(" 将被包含在源代码中。",-1)),s[14]||(s[14]=a("code",null,"stdio.h",-1)),s[15]||(s[15]=n(" 是一个头文件，其中包含有关程序内使用的 ",-1)),s[16]||(s[16]=a("code",null,"printf",-1)),s[17]||(s[17]=n(" 函数的信息。对源代码运行 ",-1)),s[18]||(s[18]=a("code",null,"cpp",-1)),s[19]||(s[19]=n("，其结果指令保存在名为 ",-1)),s[20]||(s[20]=a("code",null,"hello.i",-1)),s[21]||(s[21]=n(" 的文件中。可以使用文本编辑器打开该文件以查看其内容。打印 “hello world” 的源代码在该文件的底部。",-1))]),s[65]||(s[65]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# cat hello.c</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  printf(&quot;Hello World\\n&quot;);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# cpp hello.c &gt; hello.i</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# ls -lrt</span></span>
<span class="line"><span>total 24</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 76 Sep 13 03:20 hello.c</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 16877 Sep 13 03:22 hello.i</span></span>
<span class="line"><span>[testdir]#</span></span></code></pre></div><h4 id="步骤-2-用-gcc-编译" tabindex="-1">步骤 2：用 gcc 编译 <a class="header-anchor" href="#步骤-2-用-gcc-编译" aria-label="Permalink to “步骤 2：用 gcc 编译”">​</a></h4>`,2)),a("p",null,[s[23]||(s[23]=n("在此阶段，无需创建目标文件就将步骤 1 中生成的预处理源代码转换为汇编语言指令。这个阶段使用 ",-1)),e(p,{href:"https://gcc.gnu.org/onlinedocs/gcc/"},{default:i(()=>[...s[22]||(s[22]=[n("GNU 编译器集合（gcc）",-1)])]),_:1}),s[24]||(s[24]=n("。对 ",-1)),s[25]||(s[25]=a("code",null,"hello.i",-1)),s[26]||(s[26]=n(" 文件运行带有 ",-1)),s[27]||(s[27]=a("code",null,"-S",-1)),s[28]||(s[28]=n(" 选项的 ",-1)),s[29]||(s[29]=a("code",null,"gcc",-1)),s[30]||(s[30]=n(" 命令后，它将创建一个名为 ",-1)),s[31]||(s[31]=a("code",null,"hello.s",-1)),s[32]||(s[32]=n(" 的新文件。该文件包含该 C 程序的汇编语言指令。",-1))]),s[66]||(s[66]=l(`<p>你可以使用任何编辑器或 <code>cat</code> 命令查看其内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# gcc -Wall -S hello.i</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# ls -l</span></span>
<span class="line"><span>total 28</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 76 Sep 13 03:20 hello.c</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 16877 Sep 13 03:22 hello.i</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 448 Sep 13 03:25 hello.s</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# cat hello.s</span></span>
<span class="line"><span>.file &quot;hello.c&quot;</span></span>
<span class="line"><span>.section .rodata</span></span>
<span class="line"><span>.LC0:</span></span>
<span class="line"><span>.string &quot;Hello World&quot;</span></span>
<span class="line"><span>.text</span></span>
<span class="line"><span>.globl main</span></span>
<span class="line"><span>.type main, @function</span></span>
<span class="line"><span>main:</span></span>
<span class="line"><span>.LFB0:</span></span>
<span class="line"><span>.cfi_startproc</span></span>
<span class="line"><span>pushq %rbp</span></span>
<span class="line"><span>.cfi_def_cfa_offset 16</span></span>
<span class="line"><span>.cfi_offset 6, -16</span></span>
<span class="line"><span>movq %rsp, %rbp</span></span>
<span class="line"><span>.cfi_def_cfa_register 6</span></span>
<span class="line"><span>movl $.LC0, %edi</span></span>
<span class="line"><span>call puts</span></span>
<span class="line"><span>movl $0, %eax</span></span>
<span class="line"><span>popq %rbp</span></span>
<span class="line"><span>.cfi_def_cfa 7, 8</span></span>
<span class="line"><span>ret</span></span>
<span class="line"><span>.cfi_endproc</span></span>
<span class="line"><span>.LFE0:</span></span>
<span class="line"><span>.size main, .-main</span></span>
<span class="line"><span>.ident &quot;GCC: (GNU) 4.8.5 20150623 (Red Hat 4.8.5-36)&quot;</span></span>
<span class="line"><span>.section .note.GNU-stack,&quot;&quot;,@progbits</span></span>
<span class="line"><span>[testdir]#</span></span></code></pre></div><h4 id="步骤-3-用-as-汇编" tabindex="-1">步骤 3：用 as 汇编 <a class="header-anchor" href="#步骤-3-用-as-汇编" aria-label="Permalink to “步骤 3：用 as 汇编”">​</a></h4><p>汇编器的目的是将汇编语言指令转换为机器语言代码，并生成扩展名为 <code>.o</code> 的目标文件。此阶段使用默认情况下在所有 Linux 平台上都可用的 GNU 汇编器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>testdir]# as hello.s -o hello.o</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# ls -l</span></span>
<span class="line"><span>total 32</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 76 Sep 13 03:20 hello.c</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 16877 Sep 13 03:22 hello.i</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 1496 Sep 13 03:39 hello.o</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 448 Sep 13 03:25 hello.s</span></span>
<span class="line"><span>[testdir]#</span></span></code></pre></div><p>现在，你有了第一个 ELF 格式的文件；但是，还不能执行它。稍后，你将看到“<ruby>目标文件<rt>object file</rt></ruby>”和“<ruby>可执行文件<rt>executable file</rt></ruby>”之间的区别。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# file hello.o</span></span>
<span class="line"><span>hello.o: ELF 64-bit LSB relocatable, x86-64, version 1 (SYSV), not stripped</span></span></code></pre></div><h4 id="步骤-4-用-ld-链接" tabindex="-1">步骤 4：用 ld 链接 <a class="header-anchor" href="#步骤-4-用-ld-链接" aria-label="Permalink to “步骤 4：用 ld 链接”">​</a></h4><p>这是编译的最后阶段，将目标文件链接以创建可执行文件。可执行文件通常需要外部函数，这些外部函数通常来自系统库（<code>libc</code>）。</p><p>你可以使用 <code>ld</code> 命令直接调用链接器；但是，此命令有些复杂。相反，你可以使用带有 <code>-v</code>（详细）标志的 <code>gcc</code> 编译器，以了解链接是如何发生的。（使用 <code>ld</code> 命令进行链接作为一个练习，你可以自行探索。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# gcc -v hello.o</span></span>
<span class="line"><span>Using built-in specs.</span></span>
<span class="line"><span>COLLECT_GCC=gcc</span></span>
<span class="line"><span>COLLECT_LTO_WRAPPER=/usr/libexec/gcc/x86_64-redhat-linux/4.8.5/lto-wrapper</span></span>
<span class="line"><span>Target: x86_64-redhat-linux</span></span>
<span class="line"><span>Configured with: ../configure --prefix=/usr --mandir=/usr/share/man [...] --build=x86_64-redhat-linux</span></span>
<span class="line"><span>Thread model: posix</span></span>
<span class="line"><span>gcc version 4.8.5 20150623 (Red Hat 4.8.5-36) (GCC)</span></span>
<span class="line"><span>COMPILER_PATH=/usr/libexec/gcc/x86_64-redhat-linux/4.8.5/:/usr/libexec/gcc/x86_64-redhat-linux/4.8.5/:[...]:/usr/lib/gcc/x86_64-redhat-linux/</span></span>
<span class="line"><span>LIBRARY_PATH=/usr/lib/gcc/x86_64-redhat-linux/4.8.5/:/usr/lib/gcc/x86_64-redhat-linux/4.8.5/../../../../lib64/:/lib/../lib64/:/usr/lib/../lib64/:/usr/lib/gcc/x86_64-redhat-linux/4.8.5/../../../:/lib/:/usr/lib/</span></span>
<span class="line"><span>COLLECT_GCC_OPTIONS=&#39;-v&#39; &#39;-mtune=generic&#39; &#39;-march=x86-64&#39;</span></span>
<span class="line"><span>/usr/libexec/gcc/x86_64-redhat-linux/4.8.5/collect2 --build-id --no-add-needed --eh-frame-hdr --hash-style=gnu [...]/../../../../lib64/crtn.o</span></span>
<span class="line"><span>[testdir]#</span></span></code></pre></div><p>运行此命令后，你应该看到一个名为 <code>a.out</code> 的可执行文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# ls -l</span></span>
<span class="line"><span>total 44</span></span>
<span class="line"><span>-rwxr-xr-x. 1 root root 8440 Sep 13 03:45 a.out</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 76 Sep 13 03:20 hello.c</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 16877 Sep 13 03:22 hello.i</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 1496 Sep 13 03:39 hello.o</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 448 Sep 13 03:25 hello.s</span></span></code></pre></div><p>对 <code>a.out</code> 运行 <code>file</code> 命令，结果表明它确实是 ELF 可执行文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# file a.out</span></span>
<span class="line"><span>a.out: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=48e4c11901d54d4bf1b6e3826baf18215e4255e5, not stripped</span></span></code></pre></div><p>运行该可执行文件，看看它是否如源代码所示工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# ./a.out Hello World</span></span></code></pre></div><p>工作了！在幕后发生了很多事情它才在屏幕上打印了 “Hello World”。想象一下在更复杂的程序中会发生什么。</p><h3 id="探索-binutils-工具" tabindex="-1">探索 binutils 工具 <a class="header-anchor" href="#探索-binutils-工具" aria-label="Permalink to “探索 binutils 工具”">​</a></h3><p>上面这个练习为使用 binutils 软件包中的工具提供了良好的背景。我的系统带有 binutils 版本 2.27-34；你的 Linux 发行版上的版本可能有所不同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[~]# rpm -qa | grep binutils </span></span>
<span class="line"><span>binutils-2.27-34.base.el7.x86_64</span></span></code></pre></div><p>binutils 软件包中提供了以下工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[~]# rpm -ql binutils-2.27-34.base.el7.x86_64 | grep bin/</span></span>
<span class="line"><span>/usr/bin/addr2line</span></span>
<span class="line"><span>/usr/bin/ar</span></span>
<span class="line"><span>/usr/bin/as</span></span>
<span class="line"><span>/usr/bin/c++filt</span></span>
<span class="line"><span>/usr/bin/dwp</span></span>
<span class="line"><span>/usr/bin/elfedit</span></span>
<span class="line"><span>/usr/bin/gprof</span></span>
<span class="line"><span>/usr/bin/ld</span></span>
<span class="line"><span>/usr/bin/ld.bfd</span></span>
<span class="line"><span>/usr/bin/ld.gold</span></span>
<span class="line"><span>/usr/bin/nm</span></span>
<span class="line"><span>/usr/bin/objcopy</span></span>
<span class="line"><span>/usr/bin/objdump</span></span>
<span class="line"><span>/usr/bin/ranlib</span></span>
<span class="line"><span>/usr/bin/readelf</span></span>
<span class="line"><span>/usr/bin/size</span></span>
<span class="line"><span>/usr/bin/strings</span></span>
<span class="line"><span>/usr/bin/strip</span></span></code></pre></div><p>上面的编译练习已经探索了其中的两个工具：用作汇编器的 <code>as</code> 命令，用作链接器的 <code>ld</code> 命令。继续阅读以了解上述 GNU binutils 软件包工具中的其他七个。</p><h4 id="readelf-显示-elf-文件信息" tabindex="-1">readelf：显示 ELF 文件信息 <a class="header-anchor" href="#readelf-显示-elf-文件信息" aria-label="Permalink to “readelf：显示 ELF 文件信息”">​</a></h4><p>上面的练习提到了术语“目标文件”和“可执行文件”。使用该练习中的文件，通过带有 <code>-h</code>（标题）选项的 <code>readelf</code> 命令，以将文件的 ELF 标题转储到屏幕上。请注意，以 <code>.o</code> 扩展名结尾的目标文件显示为 <code>Type: REL (Relocatable file)</code>（可重定位文件）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# readelf -h hello.o</span></span>
<span class="line"><span>ELF Header:</span></span>
<span class="line"><span>Magic: 7f 45 4c 46 02 01 01 00 [...]</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>Type: REL (Relocatable file)</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>如果尝试执行此目标文件，会收到一条错误消息，指出无法执行。这仅表示它尚不具备在 CPU 上执行所需的信息。</p><p>请记住，你首先需要使用 <code>chmod</code> 命令在对象文件上添加 <code>x</code>（可执行位），否则你将得到“权限被拒绝”的错误。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# ./hello.o</span></span>
<span class="line"><span>bash: ./hello.o: Permission denied</span></span>
<span class="line"><span>[testdir]# chmod +x ./hello.o</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# ./hello.o</span></span>
<span class="line"><span>bash: ./hello.o: cannot execute binary file</span></span></code></pre></div><p>如果对 <code>a.out</code> 文件尝试相同的命令，则会看到其类型为 <code>EXEC (Executable file)</code>（可执行文件）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# readelf -h a.out</span></span>
<span class="line"><span>ELF Header:</span></span>
<span class="line"><span>Magic: 7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00</span></span>
<span class="line"><span>Class: ELF64</span></span>
<span class="line"><span>[...] Type: EXEC (Executable file)</span></span></code></pre></div><p>如上所示，该文件可以直接由 CPU 执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# ./a.out Hello World</span></span></code></pre></div><p><code>readelf</code> 命令可提供有关二进制文件的大量信息。在这里，它会告诉你它是 ELF 64 位格式，这意味着它只能在 64 位 CPU 上执行，而不能在 32 位 CPU 上运行。它还告诉你它应在 X86-64（Intel/AMD）架构上执行。该二进制文件的入口点是地址 <code>0x400430</code>，它就是 C 源程序中 <code>main</code> 函数的地址。</p>`,35)),a("p",null,[s[34]||(s[34]=n("在你知道的其他系统二进制文件上尝试一下 ",-1)),s[35]||(s[35]=a("code",null,"readelf",-1)),s[36]||(s[36]=n(" 命令，例如 ",-1)),s[37]||(s[37]=a("code",null,"ls",-1)),s[38]||(s[38]=n("。请注意，在 RHEL 8 或 Fedora 30 及更高版本的系统上，由于安全原因改用了",-1)),s[39]||(s[39]=a("ruby",null,[n("位置无关可执行文件"),a("rt",null,"position independent executable")],-1)),s[40]||(s[40]=n("（",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Position-independent_code#Position-independent_executables"},{default:i(()=>[...s[33]||(s[33]=[n("PIE",-1)])]),_:1}),s[41]||(s[41]=n("），因此你的输出（尤其是 ",-1)),s[42]||(s[42]=a("code",null,"Type:",-1)),s[43]||(s[43]=n("）可能会有所不同。",-1))]),s[67]||(s[67]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# readelf -h /bin/ls</span></span>
<span class="line"><span>ELF Header:</span></span>
<span class="line"><span>Magic: 7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00</span></span>
<span class="line"><span>Class: ELF64</span></span>
<span class="line"><span>Data: 2&#39;s complement, little endian</span></span>
<span class="line"><span>Version: 1 (current)</span></span>
<span class="line"><span>OS/ABI: UNIX - System V</span></span>
<span class="line"><span>ABI Version: 0</span></span>
<span class="line"><span>Type: EXEC (Executable file)</span></span></code></pre></div><p>使用 <code>ldd</code> 命令了解 <code>ls</code> 命令所依赖的系统库，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# ldd /bin/ls</span></span>
<span class="line"><span>linux-vdso.so.1 =&gt; (0x00007ffd7d746000)</span></span>
<span class="line"><span>libselinux.so.1 =&gt; /lib64/libselinux.so.1 (0x00007f060daca000)</span></span>
<span class="line"><span>libcap.so.2 =&gt; /lib64/libcap.so.2 (0x00007f060d8c5000)</span></span>
<span class="line"><span>libacl.so.1 =&gt; /lib64/libacl.so.1 (0x00007f060d6bc000)</span></span>
<span class="line"><span>libc.so.6 =&gt; /lib64/libc.so.6 (0x00007f060d2ef000)</span></span>
<span class="line"><span>libpcre.so.1 =&gt; /lib64/libpcre.so.1 (0x00007f060d08d000)</span></span>
<span class="line"><span>libdl.so.2 =&gt; /lib64/libdl.so.2 (0x00007f060ce89000)</span></span>
<span class="line"><span>/lib64/ld-linux-x86-64.so.2 (0x00007f060dcf1000)</span></span>
<span class="line"><span>libattr.so.1 =&gt; /lib64/libattr.so.1 (0x00007f060cc84000)</span></span>
<span class="line"><span>libpthread.so.0 =&gt; /lib64/libpthread.so.0 (0x00007f060ca68000)</span></span></code></pre></div><p>对 <code>libc</code> 库文件运行 <code>readelf</code> 以查看它是哪种文件。正如它指出的那样，它是一个 <code>DYN (Shared object file)</code>（共享对象文件），这意味着它不能直接执行；必须由内部使用了该库提供的任何函数的可执行文件使用它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# readelf -h /lib64/libc.so.6</span></span>
<span class="line"><span>ELF Header:</span></span>
<span class="line"><span>Magic: 7f 45 4c 46 02 01 01 03 00 00 00 00 00 00 00 00</span></span>
<span class="line"><span>Class: ELF64</span></span>
<span class="line"><span>Data: 2&#39;s complement, little endian</span></span>
<span class="line"><span>Version: 1 (current)</span></span>
<span class="line"><span>OS/ABI: UNIX - GNU</span></span>
<span class="line"><span>ABI Version: 0</span></span>
<span class="line"><span>Type: DYN (Shared object file)</span></span></code></pre></div><h4 id="size-列出节的大小和全部大小" tabindex="-1">size：列出节的大小和全部大小 <a class="header-anchor" href="#size-列出节的大小和全部大小" aria-label="Permalink to “size：列出节的大小和全部大小”">​</a></h4><p><code>size</code> 命令仅适用于目标文件和可执行文件，因此，如果尝试在简单的 ASCII 文件上运行它，则会抛出错误，提示“文件格式无法识别”。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# echo &quot;test&quot; &gt; file1</span></span>
<span class="line"><span>[testdir]# cat file1</span></span>
<span class="line"><span>test</span></span>
<span class="line"><span>[testdir]# file file1</span></span>
<span class="line"><span>file1: ASCII text</span></span>
<span class="line"><span>[testdir]# size file1</span></span>
<span class="line"><span>size: file1: File format not recognized</span></span></code></pre></div><p>现在，在上面的练习中，对目标文件和可执行文件运行 <code>size</code> 命令。请注意，根据 <code>size</code> 命令的输出可以看出，可执行文件（<code>a.out</code>）的信息要比目标文件（<code>hello.o</code>）多得多：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# size hello.o</span></span>
<span class="line"><span>text data bss dec hex filename</span></span>
<span class="line"><span>89 0 0 89 59 hello.o</span></span>
<span class="line"><span>[testdir]# size a.out</span></span>
<span class="line"><span>text data bss dec hex filename</span></span>
<span class="line"><span>1194 540 4 1738 6ca a.out</span></span></code></pre></div><p>但是这里的 <code>text</code>、<code>data</code> 和 <code>bss</code> 节是什么意思？</p><p><code>text</code> 节是指二进制文件的代码部分，其中包含所有可执行指令。<code>data</code> 节是所有初始化数据所在的位置，<code>bss</code> 节是所有未初始化数据的存储位置。（LCTT 译注：一般来说，在静态的映像文件中，各个部分称之为<ruby>节<rt>section</rt></ruby>，而在运行时的各个部分称之为<ruby>段<rt>segment</rt></ruby>，有时统称为段。）</p><p>比较其他一些可用的系统二进制文件的 <code>size</code> 结果。</p><p>对于 <code>ls</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# size /bin/ls</span></span>
<span class="line"><span>text data bss dec hex filename</span></span>
<span class="line"><span>103119 4768 3360 111247 1b28f /bin/ls</span></span></code></pre></div><p>只需查看 <code>size</code> 命令的输出，你就可以看到 <code>gcc</code> 和 <code>gdb</code> 是比 <code>ls</code> 大得多的程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# size /bin/gcc</span></span>
<span class="line"><span>text data bss dec hex filename</span></span>
<span class="line"><span>755549 8464 81856 845869 ce82d /bin/gcc</span></span>
<span class="line"><span>[testdir]# size /bin/gdb</span></span>
<span class="line"><span>text data bss dec hex filename</span></span>
<span class="line"><span>6650433 90842 152280 6893555 692ff3 /bin/gdb</span></span></code></pre></div><h4 id="strings-打印文件中的可打印字符串" tabindex="-1">strings：打印文件中的可打印字符串 <a class="header-anchor" href="#strings-打印文件中的可打印字符串" aria-label="Permalink to “strings：打印文件中的可打印字符串”">​</a></h4><p>在 <code>strings</code> 命令中添加 <code>-d</code> 标志以仅显示 <code>data</code> 节中的可打印字符通常很有用。</p><p><code>hello.o</code> 是一个目标文件，其中包含打印出 <code>Hello World</code> 文本的指令。因此，<code>strings</code> 命令的唯一输出是 <code>Hello World</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# strings -d hello.o </span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><p>另一方面，在 <code>a.out</code>（可执行文件）上运行 <code>strings</code> 会显示在链接阶段该二进制文件中包含的其他信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# strings -d a.out</span></span>
<span class="line"><span>/lib64/ld-linux-x86-64.so.2</span></span>
<span class="line"><span>!^BU</span></span>
<span class="line"><span>libc.so.6</span></span>
<span class="line"><span>puts</span></span>
<span class="line"><span>__libc_start_main</span></span>
<span class="line"><span>__gmon_start__</span></span>
<span class="line"><span>GLIBC_2.2.5</span></span>
<span class="line"><span>UH-0</span></span>
<span class="line"><span>UH-0</span></span>
<span class="line"><span>=(</span></span>
<span class="line"><span>[]A\\A]A^A_</span></span>
<span class="line"><span>Hello World</span></span>
<span class="line"><span>;*3$&quot;</span></span></code></pre></div><h4 id="objdump-显示目标文件信息" tabindex="-1">objdump：显示目标文件信息 <a class="header-anchor" href="#objdump-显示目标文件信息" aria-label="Permalink to “objdump：显示目标文件信息”">​</a></h4><p>另一个可以从二进制文件中转储机器语言指令的 binutils 工具称为 <code>objdump</code>。使用 <code>-d</code> 选项，可从二进制文件中反汇编出所有汇编指令。</p><p>回想一下，编译是将源代码指令转换为机器代码的过程。机器代码仅由 1 和 0 组成，人类难以阅读。因此，它有助于将机器代码表示为汇编语言指令。汇编语言是什么样的？请记住，汇编语言是特定于体系结构的；由于我使用的是 Intel（x86-64）架构，因此如果你使用 ARM 架构编译相同的程序，指令将有所不同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# objdump -d hello.o</span></span>
<span class="line"><span>hello.o: file format elf64-x86-64</span></span>
<span class="line"><span>Disassembly of section .text:</span></span>
<span class="line"><span>0000000000000000</span></span>
<span class="line"><span>:</span></span>
<span class="line"><span>0:  55              push %rbp</span></span>
<span class="line"><span>1:  48 89 e5        mov %rsp,%rbp</span></span>
<span class="line"><span>4:  bf 00 00 00 00  mov $0x0,%edi</span></span>
<span class="line"><span>9:  e8 00 00 00 00  callq e</span></span>
<span class="line"><span></span></span>
<span class="line"><span>e:  b8 00 00 00 00  mov $0x0,%eax</span></span>
<span class="line"><span>13: 5d              pop %rbp</span></span>
<span class="line"><span>14: c3              retq</span></span></code></pre></div><p>该输出乍一看似乎令人生畏，但请花一点时间来理解它，然后再继续。回想一下，<code>.text</code> 节包含所有的机器代码指令。汇编指令可以在第四列中看到（即 <code>push</code>、<code>mov</code>、<code>callq</code>、<code>pop</code>、<code>retq</code> 等）。这些指令作用于寄存器，寄存器是 CPU 内置的存储器位置。本示例中的寄存器是 <code>rbp</code>、<code>rsp</code>、<code>edi</code>、<code>eax</code> 等，并且每个寄存器都有特殊的含义。</p><p>现在对可执行文件（<code>a.out</code>）运行 <code>objdump</code> 并查看得到的内容。可执行文件的 <code>objdump</code> 的输出可能很大，因此我使用 <code>grep</code> 命令将其缩小到 <code>main</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# objdump -d a.out | grep -A 9 main\\&gt;</span></span>
<span class="line"><span>000000000040051d</span></span>
<span class="line"><span>:</span></span>
<span class="line"><span>40051d: 55              push %rbp</span></span>
<span class="line"><span>40051e: 48 89 e5        mov %rsp,%rbp</span></span>
<span class="line"><span>400521: bf d0 05 40 00  mov $0x4005d0,%edi</span></span>
<span class="line"><span>400526: e8 d5 fe ff ff  callq 400400</span></span>
<span class="line"><span>40052b: b8 00 00 00 00  mov $0x0,%eax</span></span>
<span class="line"><span>400530: 5d              pop %rbp</span></span>
<span class="line"><span>400531: c3              retq</span></span></code></pre></div><p>请注意，这些指令与目标文件 <code>hello.o</code> 相似，但是其中包含一些其他信息：</p><ul><li>目标文件 <code>hello.o</code> 具有以下指令：<code>callq e</code></li><li>可执行文件 <code>a.out</code> 由以下指令组成，该指令带有一个地址和函数：<code>callq 400400 &lt;puts@plt&gt;</code>    上面的汇编指令正在调用 <code>puts</code> 函数。请记住，你在源代码中使用了一个 <code>printf</code> 函数。编译器插入了对 <code>puts</code> 库函数的调用，以将 <code>Hello World</code> 输出到屏幕。</li></ul><p>查看 <code>put</code> 上方一行的说明：</p><ul><li>目标文件 <code>hello.o</code> 有个指令 <code>mov</code>：<code>mov $0x0,%edi</code></li><li>可执行文件 <code>a.out</code> 的 <code>mov</code> 指令带有实际地址（<code>$0x4005d0</code>）而不是 <code>$0x0</code>：<code>mov $0x4005d0,%edi</code></li></ul><p>该指令将二进制文件中地址 <code>$0x4005d0</code> 处存在的内容移动到名为 <code>edi</code> 的寄存器中。</p><p>这个存储位置的内容中还能是别的什么吗？是的，你猜对了：它就是文本 <code>Hello, World</code>。你是如何确定的？</p><p><code>readelf</code> 命令使你可以将二进制文件（<code>a.out</code>）的任何节转储到屏幕上。以下要求它将 <code>.rodata</code>（这是只读数据）转储到屏幕上：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# readelf -x .rodata a.out</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hex dump of section &#39;.rodata&#39;:</span></span>
<span class="line"><span>0x004005c0 01000200 00000000 00000000 00000000 ....</span></span>
<span class="line"><span>0x004005d0 48656c6c 6f20576f 726c6400 Hello World.</span></span></code></pre></div><p>你可以在右侧看到文本 <code>Hello World</code>，在左侧可以看到其二进制格式的地址。它是否与你在上面的 <code>mov</code> 指令中看到的地址匹配？是的，确实匹配。</p><h4 id="strip-从目标文件中剥离符号" tabindex="-1">strip：从目标文件中剥离符号 <a class="header-anchor" href="#strip-从目标文件中剥离符号" aria-label="Permalink to “strip：从目标文件中剥离符号”">​</a></h4><p>该命令通常用于在将二进制文件交付给客户之前减小二进制文件的大小。</p><p>请记住，由于重要信息已从二进制文件中删除，因此它会妨碍调试。但是，这个二进制文件可以完美地执行。</p><p>对 <code>a.out</code> 可执行文件运行该命令，并注意会发生什么。首先，通过运行以下命令确保二进制文件没有被剥离（<code>not stripped</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# file a.out</span></span>
<span class="line"><span>a.out: ELF 64-bit LSB executable, x86-64, [......] not stripped</span></span></code></pre></div><p>另外，在运行 <code>strip</code> 命令之前，请记下二进制文件中最初的字节数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# du -b a.out</span></span>
<span class="line"><span>8440 a.out</span></span></code></pre></div><p>现在对该可执行文件运行 <code>strip</code> 命令，并使用 <code>file</code> 命令以确保正常完成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# strip a.out</span></span>
<span class="line"><span>[testdir]# file a.out a.out: ELF 64-bit LSB executable, x86-64, [......] stripped</span></span></code></pre></div><p>剥离该二进制文件后，此小程序的大小从之前的 <code>8440</code> 字节减小为 <code>6296</code> 字节。对于这样小的一个程序都能有这么大的空间节省，难怪大型程序经常被剥离。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# du -b a.out </span></span>
<span class="line"><span>6296 a.out</span></span></code></pre></div><h4 id="addr2line-转换地址到文件名和行号" tabindex="-1">addr2line：转换地址到文件名和行号 <a class="header-anchor" href="#addr2line-转换地址到文件名和行号" aria-label="Permalink to “addr2line：转换地址到文件名和行号”">​</a></h4><p><code>addr2line</code> 工具只是在二进制文件中查找地址，并将其与 C 源代码程序中的行进行匹配。很酷，不是吗？</p><p>为此编写另一个测试程序；只是这一次确保使用 <code>gcc</code> 的 <code>-g</code> 标志进行编译，这将为二进制文件添加其它调试信息，并包含有助于调试的行号（由源代码中提供）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# cat -n atest.c</span></span>
<span class="line"><span>1  #include &lt;stdio.h&gt;</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3  int globalvar = 100;</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5  int function1(void)</span></span>
<span class="line"><span>6  {</span></span>
<span class="line"><span>7    printf(&quot;Within function1\\n&quot;);</span></span>
<span class="line"><span>8    return 0;</span></span>
<span class="line"><span>9  }</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>11 int function2(void)</span></span>
<span class="line"><span>12 {</span></span>
<span class="line"><span>13   printf(&quot;Within function2\\n&quot;);</span></span>
<span class="line"><span>14   return 0;</span></span>
<span class="line"><span>15 }</span></span>
<span class="line"><span>16</span></span>
<span class="line"><span>17 int main(void)</span></span>
<span class="line"><span>18 {</span></span>
<span class="line"><span>19   function1();</span></span>
<span class="line"><span>20   function2();</span></span>
<span class="line"><span>21   printf(&quot;Within main\\n&quot;);</span></span>
<span class="line"><span>22   return 0;</span></span>
<span class="line"><span>23 }</span></span></code></pre></div><p>用 <code>-g</code> 标志编译并执行它。正如预期：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# gcc -g atest.c</span></span>
<span class="line"><span>[testdir]# ./a.out</span></span>
<span class="line"><span>Within function1</span></span>
<span class="line"><span>Within function2</span></span>
<span class="line"><span>Within main</span></span></code></pre></div><p>现在使用 <code>objdump</code> 来标识函数开始的内存地址。你可以使用 <code>grep</code> 命令来过滤出所需的特定行。函数的地址在下面突出显示（<code>55 push %rbp</code> 前的地址）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# objdump -d a.out | grep -A 2 -E &#39;main&gt;:|function1&gt;:|function2&gt;:&#39;</span></span>
<span class="line"><span>000000000040051d :</span></span>
<span class="line"><span>40051d: 55 push %rbp</span></span>
<span class="line"><span>40051e: 48 89 e5 mov %rsp,%rbp</span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>0000000000400532 :</span></span>
<span class="line"><span>400532: 55 push %rbp</span></span>
<span class="line"><span>400533: 48 89 e5 mov %rsp,%rbp</span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>0000000000400547</span></span>
<span class="line"><span>:</span></span>
<span class="line"><span>400547: 55 push %rbp</span></span>
<span class="line"><span>400548: 48 89 e5 mov %rsp,%rbp</span></span></code></pre></div><p>现在，使用 <code>addr2line</code> 工具从二进制文件中的这些地址映射到 C 源代码匹配的地址：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# addr2line -e a.out 40051d</span></span>
<span class="line"><span>/tmp/testdir/atest.c:6</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# addr2line -e a.out 400532</span></span>
<span class="line"><span>/tmp/testdir/atest.c:12</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# addr2line -e a.out 400547</span></span>
<span class="line"><span>/tmp/testdir/atest.c:18</span></span></code></pre></div><p>它说 <code>40051d</code> 从源文件 <code>atest.c</code> 中的第 <code>6</code> 行开始，这是 <code>function1</code> 的起始大括号（<code>{</code>）开始的行。<code>function2</code> 和 <code>main</code> 的输出也匹配。</p><h4 id="nm-列出目标文件的符号" tabindex="-1">nm：列出目标文件的符号 <a class="header-anchor" href="#nm-列出目标文件的符号" aria-label="Permalink to “nm：列出目标文件的符号”">​</a></h4><p>使用上面的 C 程序测试 <code>nm</code> 工具。使用 <code>gcc</code> 快速编译并执行它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# gcc atest.c</span></span>
<span class="line"><span>[testdir]# ./a.out</span></span>
<span class="line"><span>Within function1</span></span>
<span class="line"><span>Within function2</span></span>
<span class="line"><span>Within main</span></span></code></pre></div><p>现在运行 <code>nm</code> 和 <code>grep</code> 获取有关函数和变量的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# nm a.out | grep -Ei &#39;function|main|globalvar&#39;</span></span>
<span class="line"><span>000000000040051d T function1</span></span>
<span class="line"><span>0000000000400532 T function2</span></span>
<span class="line"><span>000000000060102c D globalvar</span></span>
<span class="line"><span>U __libc_start_main@@GLIBC_2.2.5</span></span>
<span class="line"><span>0000000000400547 T main</span></span></code></pre></div><p>你可以看到函数被标记为 <code>T</code>，它表示 <code>text</code> 节中的符号，而变量标记为 <code>D</code>，表示初始化的 <code>data</code> 节中的符号。</p><p>想象一下在没有源代码的二进制文件上运行此命令有多大用处？这使你可以窥视内部并了解使用了哪些函数和变量。当然，除非二进制文件已被剥离，这种情况下它们将不包含任何符号，因此 <code>nm</code> 就命令不会很有用，如你在此处看到的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# strip a.out</span></span>
<span class="line"><span>[testdir]# nm a.out | grep -Ei &#39;function|main|globalvar&#39;</span></span>
<span class="line"><span>nm: a.out: no symbols</span></span></code></pre></div><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>GNU binutils 工具为有兴趣分析二进制文件的人提供了许多选项，这只是它们可以为你做的事情的冰山一角。请阅读每种工具的手册页，以了解有关它们以及如何使用它们的更多信息。</p><hr>`,72)),a("p",null,[s[45]||(s[45]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/10/gnu-binutils"},{default:i(()=>[...s[44]||(s[44]=[n("https://opensource.com/article/19/10/gnu-binutils",-1)])]),_:1})]),a("p",null,[s[50]||(s[50]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/gkamathe"},{default:i(()=>[...s[46]||(s[46]=[n("Gaurav Kamathe",-1)])]),_:1}),s[51]||(s[51]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[47]||(s[47]=[n("lujun9972",-1)])]),_:1}),s[52]||(s[52]=n(" 译者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[48]||(s[48]=[n("wxy",-1)])]),_:1}),s[53]||(s[53]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[49]||(s[49]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[56]||(s[56]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[54]||(s[54]=[n("LCTT",-1)])]),_:1}),s[57]||(s[57]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[55]||(s[55]=[n("Linux中国",-1)])]),_:1}),s[58]||(s[58]=n(" 荣誉推出",-1))])])}const y=t(r,[["render",h]]);export{C as __pageData,y as default};
