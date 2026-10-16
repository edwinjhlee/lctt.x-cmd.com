import{_ as t,a0 as d,w as o,s as c,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"GNU binutils 裏的九種武器 | LCTT x X-CMD","titleTemplate":false,"description":"GNU binutils 裏的九種武器 | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"GNU binutils 裏的九種武器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"GNU binutils 裏的九種武器 | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20191004 9 essential GNU binutils tools","title":"GNU binutils 裏的九種武器","tag":"201910","desc":""},"relativePath":"201910/20191004 9 essential GNU binutils tools.md","filePath":"[post].md"}'),r={name:"201910/20191004 9 essential GNU binutils tools.md"};function h(b,s,g,u,k,f){const p=d("Link");return o(),c("div",null,[s[59]||(s[59]=a("h1",{id:"gnu-binutils-裏的九種武器",tabindex:"-1"},[n("GNU binutils 裏的九種武器 "),a("a",{class:"header-anchor",href:"#gnu-binutils-裏的九種武器","aria-label":"Permalink to “GNU binutils 裏的九種武器”"},"​")],-1)),s[60]||(s[60]=a("blockquote",null,[a("p",null,"二進制分析是計算機行業中最被低估的技能。")],-1)),s[61]||(s[61]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201910/10/115409g9nkdm2omutduw7u.jpg",alt:""})],-1)),s[62]||(s[62]=a("p",null,"想像一下，在無法訪問軟件的源代碼時，但仍然能夠理解軟件的實現方式，在其中找到漏洞，並且更厲害的是還能修復錯誤。所有這些都是在只有二進制文件時做到的。這聽起來就像是超能力，對吧？",-1)),a("p",null,[s[1]||(s[1]=n("你也可以擁有這樣的超能力，GNU 二進制實用程序（binutils）就是一個很好的起點。[GNU binutils] ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/GNU_Binutils"},{default:i(()=>[...s[0]||(s[0]=[n("2",-1)])]),_:1}),s[2]||(s[2]=n(" 是一個二進制工具集，默認情況下所有 Linux 發行版中都會安裝這些二進制工具。",-1))]),s[63]||(s[63]=l(`<p>二進制分析是計算機行業中最被低估的技能。它主要由惡意軟件分析師、反向工程師和使用底層軟件的人使用。</p><p>本文探討了 binutils 可用的一些工具。我使用的是 RHEL，但是這些示例應該在任何 Linux 發行版上可以運行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[~]# cat /etc/redhat-release </span></span>
<span class="line"><span>Red Hat Enterprise Linux Server release 7.6 (Maipo)</span></span>
<span class="line"><span>[~]# </span></span>
<span class="line"><span>[~]# uname -r</span></span>
<span class="line"><span>3.10.0-957.el7.x86_64</span></span>
<span class="line"><span>[~]#</span></span></code></pre></div><p>請注意，某些打包命令（例如 <code>rpm</code>）在基於 Debian 的發行版中可能不可用，因此請使用等效的 <code>dpkg</code> 命令替代。</p><h3 id="軟件開發的基礎知識" tabindex="-1">軟件開發的基礎知識 <a class="header-anchor" href="#軟件開發的基礎知識" aria-label="Permalink to “軟件開發的基礎知識”">​</a></h3><p>在開源世界中，我們很多人都專注於源代碼形式的軟件。當軟件的源代碼隨時可用時，很容易獲得源代碼的副本，打開喜歡的編輯器，喝杯咖啡，然後就可以開始探索了。</p><p>但是源代碼不是在 CPU 上執行的代碼，在 CPU 上執行的是二進制或者説是機器語言指令。二進制或可執行文件是編譯源代碼時獲得的。熟練的調試人員深諳通常這種差異。</p><h3 id="編譯的基礎知識" tabindex="-1">編譯的基礎知識 <a class="header-anchor" href="#編譯的基礎知識" aria-label="Permalink to “編譯的基礎知識”">​</a></h3><p>在深入研究 binutils 軟件包本身之前，最好先了解編譯的基礎知識。</p><p>編譯是將程序從某種編程語言（如 C/C++）的源代碼（文本形式）轉換為機器代碼的過程。</p>`,10)),a("p",null,[s[5]||(s[5]=n("機器代碼是 CPU（或一般而言，硬件）可以理解的 1 和 0 的序列，因此可以由 CPU 執行或運行。該機器碼以特定格式保存到文件，通常稱為可執行文件或二進制文件。在 Linux（和使用 ",-1)),e(p,{href:"https://www.freebsd.org/doc/handbook/linuxemu.html"},{default:i(()=>[...s[3]||(s[3]=[n("Linux 兼容二進制",-1)])]),_:1}),s[6]||(s[6]=n("的 BSD）上，這稱為 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Executable_and_Linkable_Format"},{default:i(()=>[...s[4]||(s[4]=[n("ELF",-1)])]),_:1}),s[7]||(s[7]=n("（",-1)),s[8]||(s[8]=a("ruby",null,[n("可執行和可鏈接格式"),a("rt",null,"Executable and Linkable Format")],-1)),s[9]||(s[9]=n("）。",-1))]),s[64]||(s[64]=l(`<p>在生成給定的源文件的可執行文件或二進制文件之前，編譯過程將經歷一系列複雜的步驟。以這個源程序（C 代碼）為例。打開你喜歡的編輯器，然後鍵入以下程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  printf(&quot;Hello World\\n&quot;);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="步驟-1-用-cpp-預處理" tabindex="-1">步驟 1：用 cpp 預處理 <a class="header-anchor" href="#步驟-1-用-cpp-預處理" aria-label="Permalink to “步驟 1：用 cpp 預處理”">​</a></h4>`,3)),a("p",null,[e(p,{href:"https://en.wikipedia.org/wiki/C_preprocessor"},{default:i(()=>[...s[10]||(s[10]=[n("C 預處理程序（cpp）",-1)])]),_:1}),s[11]||(s[11]=n("用於擴展所有宏並將頭文件包含進來。在此示例中，頭文件 ",-1)),s[12]||(s[12]=a("code",null,"stdio.h",-1)),s[13]||(s[13]=n(" 將被包含在源代碼中。",-1)),s[14]||(s[14]=a("code",null,"stdio.h",-1)),s[15]||(s[15]=n(" 是一個頭文件，其中包含有關程序內使用的 ",-1)),s[16]||(s[16]=a("code",null,"printf",-1)),s[17]||(s[17]=n(" 函數的信息。對源代碼運行 ",-1)),s[18]||(s[18]=a("code",null,"cpp",-1)),s[19]||(s[19]=n("，其結果指令保存在名為 ",-1)),s[20]||(s[20]=a("code",null,"hello.i",-1)),s[21]||(s[21]=n(" 的文件中。可以使用文本編輯器打開該文件以查看其內容。打印 “hello world” 的源代碼在該文件的底部。",-1))]),s[65]||(s[65]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# cat hello.c</span></span>
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
<span class="line"><span>[testdir]#</span></span></code></pre></div><h4 id="步驟-2-用-gcc-編譯" tabindex="-1">步驟 2：用 gcc 編譯 <a class="header-anchor" href="#步驟-2-用-gcc-編譯" aria-label="Permalink to “步驟 2：用 gcc 編譯”">​</a></h4>`,2)),a("p",null,[s[23]||(s[23]=n("在此階段，無需創建目標文件就將步驟 1 中生成的預處理源代碼轉換為彙編語言指令。這個階段使用 ",-1)),e(p,{href:"https://gcc.gnu.org/onlinedocs/gcc/"},{default:i(()=>[...s[22]||(s[22]=[n("GNU 編譯器集合（gcc）",-1)])]),_:1}),s[24]||(s[24]=n("。對 ",-1)),s[25]||(s[25]=a("code",null,"hello.i",-1)),s[26]||(s[26]=n(" 文件運行帶有 ",-1)),s[27]||(s[27]=a("code",null,"-S",-1)),s[28]||(s[28]=n(" 選項的 ",-1)),s[29]||(s[29]=a("code",null,"gcc",-1)),s[30]||(s[30]=n(" 命令後，它將創建一個名為 ",-1)),s[31]||(s[31]=a("code",null,"hello.s",-1)),s[32]||(s[32]=n(" 的新文件。該文件包含該 C 程序的彙編語言指令。",-1))]),s[66]||(s[66]=l(`<p>你可以使用任何編輯器或 <code>cat</code> 命令查看其內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]#</span></span>
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
<span class="line"><span>[testdir]#</span></span></code></pre></div><h4 id="步驟-3-用-as-彙編" tabindex="-1">步驟 3：用 as 彙編 <a class="header-anchor" href="#步驟-3-用-as-彙編" aria-label="Permalink to “步驟 3：用 as 彙編”">​</a></h4><p>彙編器的目的是將彙編語言指令轉換為機器語言代碼，並生成擴展名為 <code>.o</code> 的目標文件。此階段使用默認情況下在所有 Linux 平台上都可用的 GNU 彙編器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>testdir]# as hello.s -o hello.o</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# ls -l</span></span>
<span class="line"><span>total 32</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 76 Sep 13 03:20 hello.c</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 16877 Sep 13 03:22 hello.i</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 1496 Sep 13 03:39 hello.o</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 448 Sep 13 03:25 hello.s</span></span>
<span class="line"><span>[testdir]#</span></span></code></pre></div><p>現在，你有了第一個 ELF 格式的文件；但是，還不能執行它。稍後，你將看到“<ruby>目標文件<rt>object file</rt></ruby>”和“<ruby>可執行文件<rt>executable file</rt></ruby>”之間的區別。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# file hello.o</span></span>
<span class="line"><span>hello.o: ELF 64-bit LSB relocatable, x86-64, version 1 (SYSV), not stripped</span></span></code></pre></div><h4 id="步驟-4-用-ld-鏈接" tabindex="-1">步驟 4：用 ld 鏈接 <a class="header-anchor" href="#步驟-4-用-ld-鏈接" aria-label="Permalink to “步驟 4：用 ld 鏈接”">​</a></h4><p>這是編譯的最後階段，將目標文件鏈接以創建可執行文件。可執行文件通常需要外部函數，這些外部函數通常來自系統庫（<code>libc</code>）。</p><p>你可以使用 <code>ld</code> 命令直接調用鏈接器；但是，此命令有些複雜。相反，你可以使用帶有 <code>-v</code>（詳細）標誌的 <code>gcc</code> 編譯器，以瞭解鏈接是如何發生的。（使用 <code>ld</code> 命令進行鏈接作為一個練習，你可以自行探索。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# gcc -v hello.o</span></span>
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
<span class="line"><span>[testdir]#</span></span></code></pre></div><p>運行此命令後，你應該看到一個名為 <code>a.out</code> 的可執行文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# ls -l</span></span>
<span class="line"><span>total 44</span></span>
<span class="line"><span>-rwxr-xr-x. 1 root root 8440 Sep 13 03:45 a.out</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 76 Sep 13 03:20 hello.c</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 16877 Sep 13 03:22 hello.i</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 1496 Sep 13 03:39 hello.o</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 448 Sep 13 03:25 hello.s</span></span></code></pre></div><p>對 <code>a.out</code> 運行 <code>file</code> 命令，結果表明它確實是 ELF 可執行文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# file a.out</span></span>
<span class="line"><span>a.out: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=48e4c11901d54d4bf1b6e3826baf18215e4255e5, not stripped</span></span></code></pre></div><p>運行該可執行文件，看看它是否如源代碼所示工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# ./a.out Hello World</span></span></code></pre></div><p>工作了！在幕後發生了很多事情它才在屏幕上打印了 “Hello World”。想像一下在更復雜的程序中會發生什麼。</p><h3 id="探索-binutils-工具" tabindex="-1">探索 binutils 工具 <a class="header-anchor" href="#探索-binutils-工具" aria-label="Permalink to “探索 binutils 工具”">​</a></h3><p>上面這個練習為使用 binutils 軟件包中的工具提供了良好的背景。我的系統帶有 binutils 版本 2.27-34；你的 Linux 發行版上的版本可能有所不同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[~]# rpm -qa | grep binutils </span></span>
<span class="line"><span>binutils-2.27-34.base.el7.x86_64</span></span></code></pre></div><p>binutils 軟件包中提供了以下工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[~]# rpm -ql binutils-2.27-34.base.el7.x86_64 | grep bin/</span></span>
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
<span class="line"><span>/usr/bin/strip</span></span></code></pre></div><p>上面的編譯練習已經探索了其中的兩個工具：用作彙編器的 <code>as</code> 命令，用作鏈接器的 <code>ld</code> 命令。繼續閲讀以瞭解上述 GNU binutils 軟件包工具中的其他七個。</p><h4 id="readelf-顯示-elf-文件信息" tabindex="-1">readelf：顯示 ELF 文件信息 <a class="header-anchor" href="#readelf-顯示-elf-文件信息" aria-label="Permalink to “readelf：顯示 ELF 文件信息”">​</a></h4><p>上面的練習提到了術語“目標文件”和“可執行文件”。使用該練習中的文件，通過帶有 <code>-h</code>（標題）選項的 <code>readelf</code> 命令，以將文件的 ELF 標題轉儲到屏幕上。請注意，以 <code>.o</code> 擴展名結尾的目標文件顯示為 <code>Type: REL (Relocatable file)</code>（可重定位文件）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# readelf -h hello.o</span></span>
<span class="line"><span>ELF Header:</span></span>
<span class="line"><span>Magic: 7f 45 4c 46 02 01 01 00 [...]</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>Type: REL (Relocatable file)</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>如果嘗試執行此目標文件，會收到一條錯誤消息，指出無法執行。這僅表示它尚不具備在 CPU 上執行所需的信息。</p><p>請記住，你首先需要使用 <code>chmod</code> 命令在對象文件上添加 <code>x</code>（可執行位），否則你將得到“權限被拒絕”的錯誤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# ./hello.o</span></span>
<span class="line"><span>bash: ./hello.o: Permission denied</span></span>
<span class="line"><span>[testdir]# chmod +x ./hello.o</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# ./hello.o</span></span>
<span class="line"><span>bash: ./hello.o: cannot execute binary file</span></span></code></pre></div><p>如果對 <code>a.out</code> 文件嘗試相同的命令，則會看到其類型為 <code>EXEC (Executable file)</code>（可執行文件）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# readelf -h a.out</span></span>
<span class="line"><span>ELF Header:</span></span>
<span class="line"><span>Magic: 7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00</span></span>
<span class="line"><span>Class: ELF64</span></span>
<span class="line"><span>[...] Type: EXEC (Executable file)</span></span></code></pre></div><p>如上所示，該文件可以直接由 CPU 執行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# ./a.out Hello World</span></span></code></pre></div><p><code>readelf</code> 命令可提供有關二進制文件的大量信息。在這裏，它會告訴你它是 ELF 64 位格式，這意味着它只能在 64 位 CPU 上執行，而不能在 32 位 CPU 上運行。它還告訴你它應在 X86-64（Intel/AMD）架構上執行。該二進制文件的入口點是地址 <code>0x400430</code>，它就是 C 源程序中 <code>main</code> 函數的地址。</p>`,35)),a("p",null,[s[34]||(s[34]=n("在你知道的其他系統二進制文件上嘗試一下 ",-1)),s[35]||(s[35]=a("code",null,"readelf",-1)),s[36]||(s[36]=n(" 命令，例如 ",-1)),s[37]||(s[37]=a("code",null,"ls",-1)),s[38]||(s[38]=n("。請注意，在 RHEL 8 或 Fedora 30 及更高版本的系統上，由於安全原因改用了",-1)),s[39]||(s[39]=a("ruby",null,[n("位置無關可執行文件"),a("rt",null,"position independent executable")],-1)),s[40]||(s[40]=n("（",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Position-independent_code#Position-independent_executables"},{default:i(()=>[...s[33]||(s[33]=[n("PIE",-1)])]),_:1}),s[41]||(s[41]=n("），因此你的輸出（尤其是 ",-1)),s[42]||(s[42]=a("code",null,"Type:",-1)),s[43]||(s[43]=n("）可能會有所不同。",-1))]),s[67]||(s[67]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# readelf -h /bin/ls</span></span>
<span class="line"><span>ELF Header:</span></span>
<span class="line"><span>Magic: 7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00</span></span>
<span class="line"><span>Class: ELF64</span></span>
<span class="line"><span>Data: 2&#39;s complement, little endian</span></span>
<span class="line"><span>Version: 1 (current)</span></span>
<span class="line"><span>OS/ABI: UNIX - System V</span></span>
<span class="line"><span>ABI Version: 0</span></span>
<span class="line"><span>Type: EXEC (Executable file)</span></span></code></pre></div><p>使用 <code>ldd</code> 命令瞭解 <code>ls</code> 命令所依賴的系統庫，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# ldd /bin/ls</span></span>
<span class="line"><span>linux-vdso.so.1 =&gt; (0x00007ffd7d746000)</span></span>
<span class="line"><span>libselinux.so.1 =&gt; /lib64/libselinux.so.1 (0x00007f060daca000)</span></span>
<span class="line"><span>libcap.so.2 =&gt; /lib64/libcap.so.2 (0x00007f060d8c5000)</span></span>
<span class="line"><span>libacl.so.1 =&gt; /lib64/libacl.so.1 (0x00007f060d6bc000)</span></span>
<span class="line"><span>libc.so.6 =&gt; /lib64/libc.so.6 (0x00007f060d2ef000)</span></span>
<span class="line"><span>libpcre.so.1 =&gt; /lib64/libpcre.so.1 (0x00007f060d08d000)</span></span>
<span class="line"><span>libdl.so.2 =&gt; /lib64/libdl.so.2 (0x00007f060ce89000)</span></span>
<span class="line"><span>/lib64/ld-linux-x86-64.so.2 (0x00007f060dcf1000)</span></span>
<span class="line"><span>libattr.so.1 =&gt; /lib64/libattr.so.1 (0x00007f060cc84000)</span></span>
<span class="line"><span>libpthread.so.0 =&gt; /lib64/libpthread.so.0 (0x00007f060ca68000)</span></span></code></pre></div><p>對 <code>libc</code> 庫文件運行 <code>readelf</code> 以查看它是哪種文件。正如它指出的那樣，它是一個 <code>DYN (Shared object file)</code>（共享對象文件），這意味着它不能直接執行；必須由內部使用了該庫提供的任何函數的可執行文件使用它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# readelf -h /lib64/libc.so.6</span></span>
<span class="line"><span>ELF Header:</span></span>
<span class="line"><span>Magic: 7f 45 4c 46 02 01 01 03 00 00 00 00 00 00 00 00</span></span>
<span class="line"><span>Class: ELF64</span></span>
<span class="line"><span>Data: 2&#39;s complement, little endian</span></span>
<span class="line"><span>Version: 1 (current)</span></span>
<span class="line"><span>OS/ABI: UNIX - GNU</span></span>
<span class="line"><span>ABI Version: 0</span></span>
<span class="line"><span>Type: DYN (Shared object file)</span></span></code></pre></div><h4 id="size-列出節的大小和全部大小" tabindex="-1">size：列出節的大小和全部大小 <a class="header-anchor" href="#size-列出節的大小和全部大小" aria-label="Permalink to “size：列出節的大小和全部大小”">​</a></h4><p><code>size</code> 命令僅適用於目標文件和可執行文件，因此，如果嘗試在簡單的 ASCII 文件上運行它，則會拋出錯誤，提示“文件格式無法識別”。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# echo &quot;test&quot; &gt; file1</span></span>
<span class="line"><span>[testdir]# cat file1</span></span>
<span class="line"><span>test</span></span>
<span class="line"><span>[testdir]# file file1</span></span>
<span class="line"><span>file1: ASCII text</span></span>
<span class="line"><span>[testdir]# size file1</span></span>
<span class="line"><span>size: file1: File format not recognized</span></span></code></pre></div><p>現在，在上面的練習中，對目標文件和可執行文件運行 <code>size</code> 命令。請注意，根據 <code>size</code> 命令的輸出可以看出，可執行文件（<code>a.out</code>）的信息要比目標文件（<code>hello.o</code>）多得多：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# size hello.o</span></span>
<span class="line"><span>text data bss dec hex filename</span></span>
<span class="line"><span>89 0 0 89 59 hello.o</span></span>
<span class="line"><span>[testdir]# size a.out</span></span>
<span class="line"><span>text data bss dec hex filename</span></span>
<span class="line"><span>1194 540 4 1738 6ca a.out</span></span></code></pre></div><p>但是這裏的 <code>text</code>、<code>data</code> 和 <code>bss</code> 節是什麼意思？</p><p><code>text</code> 節是指二進制文件的代碼部分，其中包含所有可執行指令。<code>data</code> 節是所有初始化數據所在的位置，<code>bss</code> 節是所有未初始化數據的存儲位置。（LCTT 譯註：一般來説，在靜態的映像文件中，各個部分稱之為<ruby>節<rt>section</rt></ruby>，而在運行時的各個部分稱之為<ruby>段<rt>segment</rt></ruby>，有時統稱為段。）</p><p>比較其他一些可用的系統二進制文件的 <code>size</code> 結果。</p><p>對於 <code>ls</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# size /bin/ls</span></span>
<span class="line"><span>text data bss dec hex filename</span></span>
<span class="line"><span>103119 4768 3360 111247 1b28f /bin/ls</span></span></code></pre></div><p>只需查看 <code>size</code> 命令的輸出，你就可以看到 <code>gcc</code> 和 <code>gdb</code> 是比 <code>ls</code> 大得多的程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# size /bin/gcc</span></span>
<span class="line"><span>text data bss dec hex filename</span></span>
<span class="line"><span>755549 8464 81856 845869 ce82d /bin/gcc</span></span>
<span class="line"><span>[testdir]# size /bin/gdb</span></span>
<span class="line"><span>text data bss dec hex filename</span></span>
<span class="line"><span>6650433 90842 152280 6893555 692ff3 /bin/gdb</span></span></code></pre></div><h4 id="strings-打印文件中的可打印字符串" tabindex="-1">strings：打印文件中的可打印字符串 <a class="header-anchor" href="#strings-打印文件中的可打印字符串" aria-label="Permalink to “strings：打印文件中的可打印字符串”">​</a></h4><p>在 <code>strings</code> 命令中添加 <code>-d</code> 標誌以僅顯示 <code>data</code> 節中的可打印字符通常很有用。</p><p><code>hello.o</code> 是一個目標文件，其中包含打印出 <code>Hello World</code> 文本的指令。因此，<code>strings</code> 命令的唯一輸出是 <code>Hello World</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# strings -d hello.o </span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><p>另一方面，在 <code>a.out</code>（可執行文件）上運行 <code>strings</code> 會顯示在鏈接階段該二進制文件中包含的其他信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# strings -d a.out</span></span>
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
<span class="line"><span>;*3$&quot;</span></span></code></pre></div><h4 id="objdump-顯示目標文件信息" tabindex="-1">objdump：顯示目標文件信息 <a class="header-anchor" href="#objdump-顯示目標文件信息" aria-label="Permalink to “objdump：顯示目標文件信息”">​</a></h4><p>另一個可以從二進制文件中轉儲機器語言指令的 binutils 工具稱為 <code>objdump</code>。使用 <code>-d</code> 選項，可從二進制文件中反彙編出所有彙編指令。</p><p>回想一下，編譯是將源代碼指令轉換為機器代碼的過程。機器代碼僅由 1 和 0 組成，人類難以閲讀。因此，它有助於將機器代碼表示為彙編語言指令。彙編語言是什麼樣的？請記住，彙編語言是特定於體系結構的；由於我使用的是 Intel（x86-64）架構，因此如果你使用 ARM 架構編譯相同的程序，指令將有所不同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# objdump -d hello.o</span></span>
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
<span class="line"><span>14: c3              retq</span></span></code></pre></div><p>該輸出乍一看似乎令人生畏，但請花一點時間來理解它，然後再繼續。回想一下，<code>.text</code> 節包含所有的機器代碼指令。彙編指令可以在第四列中看到（即 <code>push</code>、<code>mov</code>、<code>callq</code>、<code>pop</code>、<code>retq</code> 等）。這些指令作用於寄存器，寄存器是 CPU 內置的存儲器位置。本示例中的寄存器是 <code>rbp</code>、<code>rsp</code>、<code>edi</code>、<code>eax</code> 等，並且每個寄存器都有特殊的含義。</p><p>現在對可執行文件（<code>a.out</code>）運行 <code>objdump</code> 並查看得到的內容。可執行文件的 <code>objdump</code> 的輸出可能很大，因此我使用 <code>grep</code> 命令將其縮小到 <code>main</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# objdump -d a.out | grep -A 9 main\\&gt;</span></span>
<span class="line"><span>000000000040051d</span></span>
<span class="line"><span>:</span></span>
<span class="line"><span>40051d: 55              push %rbp</span></span>
<span class="line"><span>40051e: 48 89 e5        mov %rsp,%rbp</span></span>
<span class="line"><span>400521: bf d0 05 40 00  mov $0x4005d0,%edi</span></span>
<span class="line"><span>400526: e8 d5 fe ff ff  callq 400400</span></span>
<span class="line"><span>40052b: b8 00 00 00 00  mov $0x0,%eax</span></span>
<span class="line"><span>400530: 5d              pop %rbp</span></span>
<span class="line"><span>400531: c3              retq</span></span></code></pre></div><p>請注意，這些指令與目標文件 <code>hello.o</code> 相似，但是其中包含一些其他信息：</p><ul><li>目標文件 <code>hello.o</code> 具有以下指令：<code>callq e</code></li><li>可執行文件 <code>a.out</code> 由以下指令組成，該指令帶有一個地址和函數：<code>callq 400400 &lt;puts@plt&gt;</code>    上面的彙編指令正在調用 <code>puts</code> 函數。請記住，你在源代碼中使用了一個 <code>printf</code> 函數。編譯器插入了對 <code>puts</code> 庫函數的調用，以將 <code>Hello World</code> 輸出到屏幕。</li></ul><p>查看 <code>put</code> 上方一行的説明：</p><ul><li>目標文件 <code>hello.o</code> 有個指令 <code>mov</code>：<code>mov $0x0,%edi</code></li><li>可執行文件 <code>a.out</code> 的 <code>mov</code> 指令帶有實際地址（<code>$0x4005d0</code>）而不是 <code>$0x0</code>：<code>mov $0x4005d0,%edi</code></li></ul><p>該指令將二進制文件中地址 <code>$0x4005d0</code> 處存在的內容移動到名為 <code>edi</code> 的寄存器中。</p><p>這個存儲位置的內容中還能是別的什麼嗎？是的，你猜對了：它就是文本 <code>Hello, World</code>。你是如何確定的？</p><p><code>readelf</code> 命令使你可以將二進制文件（<code>a.out</code>）的任何節轉儲到屏幕上。以下要求它將 <code>.rodata</code>（這是隻讀數據）轉儲到屏幕上：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# readelf -x .rodata a.out</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hex dump of section &#39;.rodata&#39;:</span></span>
<span class="line"><span>0x004005c0 01000200 00000000 00000000 00000000 ....</span></span>
<span class="line"><span>0x004005d0 48656c6c 6f20576f 726c6400 Hello World.</span></span></code></pre></div><p>你可以在右側看到文本 <code>Hello World</code>，在左側可以看到其二進制格式的地址。它是否與你在上面的 <code>mov</code> 指令中看到的地址匹配？是的，確實匹配。</p><h4 id="strip-從目標文件中剝離符號" tabindex="-1">strip：從目標文件中剝離符號 <a class="header-anchor" href="#strip-從目標文件中剝離符號" aria-label="Permalink to “strip：從目標文件中剝離符號”">​</a></h4><p>該命令通常用於在將二進制文件交付給客户之前減小二進制文件的大小。</p><p>請記住，由於重要信息已從二進制文件中刪除，因此它會妨礙調試。但是，這個二進制文件可以完美地執行。</p><p>對 <code>a.out</code> 可執行文件運行該命令，並注意會發生什麼。首先，通過運行以下命令確保二進制文件沒有被剝離（<code>not stripped</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# file a.out</span></span>
<span class="line"><span>a.out: ELF 64-bit LSB executable, x86-64, [......] not stripped</span></span></code></pre></div><p>另外，在運行 <code>strip</code> 命令之前，請記下二進制文件中最初的字節數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# du -b a.out</span></span>
<span class="line"><span>8440 a.out</span></span></code></pre></div><p>現在對該可執行文件運行 <code>strip</code> 命令，並使用 <code>file</code> 命令以確保正常完成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# strip a.out</span></span>
<span class="line"><span>[testdir]# file a.out a.out: ELF 64-bit LSB executable, x86-64, [......] stripped</span></span></code></pre></div><p>剝離該二進制文件後，此小程序的大小從之前的 <code>8440</code> 字節減小為 <code>6296</code> 字節。對於這樣小的一個程序都能有這麼大的空間節省，難怪大型程序經常被剝離。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# du -b a.out </span></span>
<span class="line"><span>6296 a.out</span></span></code></pre></div><h4 id="addr2line-轉換地址到文件名和行號" tabindex="-1">addr2line：轉換地址到文件名和行號 <a class="header-anchor" href="#addr2line-轉換地址到文件名和行號" aria-label="Permalink to “addr2line：轉換地址到文件名和行號”">​</a></h4><p><code>addr2line</code> 工具只是在二進制文件中查找地址，並將其與 C 源代碼程序中的行進行匹配。很酷，不是嗎？</p><p>為此編寫另一個測試程序；只是這一次確保使用 <code>gcc</code> 的 <code>-g</code> 標誌進行編譯，這將為二進制文件添加其它調試信息，並包含有助於調試的行號（由源代碼中提供）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# cat -n atest.c</span></span>
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
<span class="line"><span>23 }</span></span></code></pre></div><p>用 <code>-g</code> 標誌編譯並執行它。正如預期：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# gcc -g atest.c</span></span>
<span class="line"><span>[testdir]# ./a.out</span></span>
<span class="line"><span>Within function1</span></span>
<span class="line"><span>Within function2</span></span>
<span class="line"><span>Within main</span></span></code></pre></div><p>現在使用 <code>objdump</code> 來標識函數開始的內存地址。你可以使用 <code>grep</code> 命令來過濾出所需的特定行。函數的地址在下面突出顯示（<code>55 push %rbp</code> 前的地址）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# objdump -d a.out | grep -A 2 -E &#39;main&gt;:|function1&gt;:|function2&gt;:&#39;</span></span>
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
<span class="line"><span>400548: 48 89 e5 mov %rsp,%rbp</span></span></code></pre></div><p>現在，使用 <code>addr2line</code> 工具從二進制文件中的這些地址映射到 C 源代碼匹配的地址：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# addr2line -e a.out 40051d</span></span>
<span class="line"><span>/tmp/testdir/atest.c:6</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# addr2line -e a.out 400532</span></span>
<span class="line"><span>/tmp/testdir/atest.c:12</span></span>
<span class="line"><span>[testdir]#</span></span>
<span class="line"><span>[testdir]# addr2line -e a.out 400547</span></span>
<span class="line"><span>/tmp/testdir/atest.c:18</span></span></code></pre></div><p>它説 <code>40051d</code> 從源文件 <code>atest.c</code> 中的第 <code>6</code> 行開始，這是 <code>function1</code> 的起始大括號（<code>{</code>）開始的行。<code>function2</code> 和 <code>main</code> 的輸出也匹配。</p><h4 id="nm-列出目標文件的符號" tabindex="-1">nm：列出目標文件的符號 <a class="header-anchor" href="#nm-列出目標文件的符號" aria-label="Permalink to “nm：列出目標文件的符號”">​</a></h4><p>使用上面的 C 程序測試 <code>nm</code> 工具。使用 <code>gcc</code> 快速編譯並執行它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# gcc atest.c</span></span>
<span class="line"><span>[testdir]# ./a.out</span></span>
<span class="line"><span>Within function1</span></span>
<span class="line"><span>Within function2</span></span>
<span class="line"><span>Within main</span></span></code></pre></div><p>現在運行 <code>nm</code> 和 <code>grep</code> 獲取有關函數和變量的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# nm a.out | grep -Ei &#39;function|main|globalvar&#39;</span></span>
<span class="line"><span>000000000040051d T function1</span></span>
<span class="line"><span>0000000000400532 T function2</span></span>
<span class="line"><span>000000000060102c D globalvar</span></span>
<span class="line"><span>U __libc_start_main@@GLIBC_2.2.5</span></span>
<span class="line"><span>0000000000400547 T main</span></span></code></pre></div><p>你可以看到函數被標記為 <code>T</code>，它表示 <code>text</code> 節中的符號，而變量標記為 <code>D</code>，表示初始化的 <code>data</code> 節中的符號。</p><p>想像一下在沒有源代碼的二進制文件上運行此命令有多大用處？這使你可以窺視內部並瞭解使用了哪些函數和變量。當然，除非二進制文件已被剝離，這種情況下它們將不包含任何符號，因此 <code>nm</code> 就命令不會很有用，如你在此處看到的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[testdir]# strip a.out</span></span>
<span class="line"><span>[testdir]# nm a.out | grep -Ei &#39;function|main|globalvar&#39;</span></span>
<span class="line"><span>nm: a.out: no symbols</span></span></code></pre></div><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>GNU binutils 工具為有興趣分析二進制文件的人提供了許多選項，這只是它們可以為你做的事情的冰山一角。請閲讀每種工具的手冊頁，以瞭解有關它們以及如何使用它們的更多信息。</p><hr>`,72)),a("p",null,[s[45]||(s[45]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/10/gnu-binutils"},{default:i(()=>[...s[44]||(s[44]=[n("https://opensource.com/article/19/10/gnu-binutils",-1)])]),_:1})]),a("p",null,[s[50]||(s[50]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/gkamathe"},{default:i(()=>[...s[46]||(s[46]=[n("Gaurav Kamathe",-1)])]),_:1}),s[51]||(s[51]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[47]||(s[47]=[n("lujun9972",-1)])]),_:1}),s[52]||(s[52]=n(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[48]||(s[48]=[n("wxy",-1)])]),_:1}),s[53]||(s[53]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[49]||(s[49]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[56]||(s[56]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[54]||(s[54]=[n("LCTT",-1)])]),_:1}),s[57]||(s[57]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[55]||(s[55]=[n("Linux中國",-1)])]),_:1}),s[58]||(s[58]=n(" 榮譽推出",-1))])])}const y=t(r,[["render",h]]);export{C as __pageData,y as default};
