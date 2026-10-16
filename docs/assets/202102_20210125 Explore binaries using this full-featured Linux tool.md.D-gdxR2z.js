import{_ as t,a0 as d,w as r,s as c,I as n,x as a,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"全功能的二进制文件分析工具 Radare2 指南 | LCTT x X-CMD","titleTemplate":false,"description":"全功能的二进制文件分析工具 Radare2 指南 | LCTT (202102) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"全功能的二进制文件分析工具 Radare2 指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"全功能的二进制文件分析工具 Radare2 指南 | LCTT (202102) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202102/20210125 Explore binaries using this full-featured Linux tool","title":"全功能的二进制文件分析工具 Radare2 指南","tag":"202102","desc":""},"relativePath":"202102/20210125 Explore binaries using this full-featured Linux tool.md","filePath":"[post].md"}'),o={name:"202102/20210125 Explore binaries using this full-featured Linux tool.md"};function g(h,s,b,x,f,u){const p=d("Link");return r(),c("div",null,[s[37]||(s[37]=n("h1",{id:"全功能的二进制文件分析工具-radare2-指南",tabindex:"-1"},[a("全功能的二进制文件分析工具 Radare2 指南 "),n("a",{class:"header-anchor",href:"#全功能的二进制文件分析工具-radare2-指南","aria-label":"Permalink to “全功能的二进制文件分析工具 Radare2 指南”"},"​")],-1)),s[38]||(s[38]=n("blockquote",null,[n("p",null,"Radare2 是一个为二进制分析定制的开源工具。")],-1)),s[39]||(s[39]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202102/01/112611baw4gpqlch10ps1c.jpg",alt:""})],-1)),n("p",null,[s[2]||(s[2]=a("在《",-1)),e(p,{href:"https://linux.cn/article-12187-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("Linux 上分析二进制文件的 10 种方法",-1)])]),_:1}),s[3]||(s[3]=a("》中，我解释了如何使用 Linux 上丰富的原生工具集来分析二进制文件。但如果你想进一步探索你的二进制文件，你需要一个为二进制分析定制的工具。如果你是二进制分析的新手，并且大多使用的是脚本语言，这篇文章《",-1)),e(p,{href:"https://linux.cn/article-11441-1.html"},{default:l(()=>[...s[1]||(s[1]=[a("GNU binutils 里的九种武器",-1)])]),_:1}),s[4]||(s[4]=a("》可以帮助你开始学习编译过程和什么是二进制。",-1))]),s[40]||(s[40]=n("h3",{id:"为什么我需要另一个工具",tabindex:"-1"},[a("为什么我需要另一个工具？ "),n("a",{class:"header-anchor",href:"#为什么我需要另一个工具","aria-label":"Permalink to “为什么我需要另一个工具？”"},"​")],-1)),s[41]||(s[41]=n("p",null,[a("如果现有的 Linux 原生工具也能做类似的事情，你自然会问为什么需要另一个工具。嗯，这和你用手机做闹钟、做笔记、做相机、听音乐、上网、偶尔打电话和接电话的原因是一样的。以前，使用单独的设备和工具处理这些功能 —— 比如拍照的实体相机，记笔记的小记事本，起床的床头闹钟等等。对用户来说，有一个设备来做多件（但相关的）事情是"),n("em",null,"方便的"),a("。另外，杀手锏就是独立功能之间的"),n("em",null,"互操作性"),a("。")],-1)),n("p",null,[s[6]||(s[6]=a("同样，即使许多 Linux 工具都有特定的用途，但在一个工具中捆绑类似（和更好）的功能是非常有用的。这就是为什么我认为 ",-1)),e(p,{href:"https://rada.re/n/"},{default:l(()=>[...s[5]||(s[5]=[a("Radare2",-1)])]),_:1}),s[7]||(s[7]=a(" 应该是你需要处理二进制文件时的首选工具。",-1))]),n("p",null,[s[9]||(s[9]=a("根据其 ",-1)),e(p,{href:"https://github.com/radareorg/radare2"},{default:l(()=>[...s[8]||(s[8]=[a("GitHub 简介",-1)])]),_:1}),s[10]||(s[10]=a("，Radare2（也称为 r2）是一个“类 Unix 系统上的逆向工程框架和命令行工具集”。它名字中的 “2” 是因为这个版本从头开始重写的，使其更加模块化。",-1))]),s[42]||(s[42]=n("h3",{id:"为什么选择-radare2",tabindex:"-1"},[a("为什么选择 Radare2？ "),n("a",{class:"header-anchor",href:"#为什么选择-radare2","aria-label":"Permalink to “为什么选择 Radare2？”"},"​")],-1)),s[43]||(s[43]=n("p",null,"有大量（非原生的）Linux 工具可用于二进制分析，为什么要选择 Radare2 呢？我的理由很简单。",-1)),s[44]||(s[44]=n("p",null,"首先，它是一个开源项目，有一个活跃而健康的社区。如果你正在寻找新颖的功能或提供着 bug 修复的工具，这很重要。",-1)),n("p",null,[s[12]||(s[12]=a("其次，Radare2 可以在命令行上使用，而且它有一个功能丰富的图形用户界面（GUI）环境，叫做 Cutter，适合那些对 GUI 比较熟悉的人。作为一个长期使用 Linux 的用户，我对习惯于在 shell 上输入。虽然熟悉 Radare2 的命令稍微有一点学习曲线，但我会把它比作 ",-1)),e(p,{href:"https://opensource.com/article/19/3/getting-started-vim"},{default:l(()=>[...s[11]||(s[11]=[a("学习 Vim",-1)])]),_:1}),s[13]||(s[13]=a("。你可以先学习基本的东西，一旦你掌握了它们，你就可以继续学习更高级的东西。很快，它就变成了肌肉记忆。",-1))]),n("p",null,[s[15]||(s[15]=a("第三，Radare2 通过插件可以很好的支持外部工具。例如，最近开源的 ",-1)),e(p,{href:"https://ghidra-sre.org/"},{default:l(()=>[...s[14]||(s[14]=[a("Ghidra",-1)])]),_:1}),s[16]||(s[16]=a(" 二进制分析和",-1)),s[17]||(s[17]=n("ruby",null,[a("逆向工具"),n("rt",null,"reversing tool")],-1)),s[18]||(s[18]=a("很受欢迎，因为它的反编译器功能是逆向软件的关键要素。你可以直接从 Radare2 控制台安装 Ghidra 反编译器并使用，这很神奇，让你两全其美。",-1))]),s[45]||(s[45]=i(`<h3 id="开始使用-radare2" tabindex="-1">开始使用 Radare2 <a class="header-anchor" href="#开始使用-radare2" aria-label="Permalink to “开始使用 Radare2”">​</a></h3><p>要安装 Radare2，只需克隆其存储库并运行 <code>user.sh</code> 脚本。如果你的系统上还没有一些预备软件包，你可能需要安装它们。一旦安装完成，运行 <code>r2 -v</code> 命令来查看 Radare2 是否被正确安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git clone https://github.com/radareorg/radare2.git</span></span>
<span class="line"><span>$ cd radare2</span></span>
<span class="line"><span>$ ./sys/user.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ r2 -v</span></span>
<span class="line"><span>radare2 4.6.0-git 25266 @ linux-x86-64 git.4.4.0-930-g48047b317</span></span>
<span class="line"><span>commit: 48047b3171e6ed0480a71a04c3693a0650d03543 build: 2020-11-17__09:31:03</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="获取二进制测试样本" tabindex="-1">获取二进制测试样本 <a class="header-anchor" href="#获取二进制测试样本" aria-label="Permalink to “获取二进制测试样本”">​</a></h4><p>现在 <code>r2</code> 已经安装好了，你需要一个样本二进制程序来试用它。你可以使用任何系统二进制文件（<code>ls</code>、<code>bash</code> 等），但为了使本教程的内容简单，请编译以下 C 程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat adder.c</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int adder(int num) {</span></span>
<span class="line"><span>        return num + 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>        int res, num1 = 100;</span></span>
<span class="line"><span>        res = adder(num1);</span></span>
<span class="line"><span>        printf(&quot;Number now is  : %d\\n&quot;, res);</span></span>
<span class="line"><span>        return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc adder.c -o adder</span></span>
<span class="line"><span>$ file adder</span></span>
<span class="line"><span>adder: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=9d4366f7160e1ffb46b14466e8e0d70f10de2240, not stripped</span></span>
<span class="line"><span>$ ./adder</span></span>
<span class="line"><span>Number now is  : 101</span></span></code></pre></div><h4 id="加载二进制文件" tabindex="-1">加载二进制文件 <a class="header-anchor" href="#加载二进制文件" aria-label="Permalink to “加载二进制文件”">​</a></h4><p>要分析二进制文件，你必须在 Radare2 中加载它。通过提供文件名作为 <code>r2</code> 命令的一个命令行参数来加载它。你会进入一个独立的 Radare2 控制台，这与你的 shell 不同。要退出控制台，你可以输入 <code>Quit</code> 或 <code>Exit</code> 或按 <code>Ctrl+D</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2 ./adder</span></span>
<span class="line"><span> -- Learn pancake as if you were radare!</span></span>
<span class="line"><span>[0x004004b0]&gt; quit</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="分析二进制" tabindex="-1">分析二进制 <a class="header-anchor" href="#分析二进制" aria-label="Permalink to “分析二进制”">​</a></h4><p>在你探索二进制之前，你必须让 <code>r2</code> 为你分析它。你可以通过在 <code>r2</code> 控制台中运行 <code>aaa</code> 命令来实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2 ./adder</span></span>
<span class="line"><span> -- Sorry, radare2 has experienced an internal error.</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span>
<span class="line"><span>[0x004004b0]&gt; aaa</span></span>
<span class="line"><span>[x] Analyze all flags starting with sym. and entry0 (aa)</span></span>
<span class="line"><span>[x] Analyze function calls (aac)</span></span>
<span class="line"><span>[x] Analyze len bytes of instructions for references (aar)</span></span>
<span class="line"><span>[x] Check for vtables</span></span>
<span class="line"><span>[x] Type matching analysis for all functions (aaft)</span></span>
<span class="line"><span>[x] Propagate noreturn information</span></span>
<span class="line"><span>[x] Use -AA or aaaa to perform additional experimental analysis.</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><p>这意味着每次你选择一个二进制文件进行分析时，你必须在加载二进制文件后输入一个额外的命令 <code>aaa</code>。你可以绕过这一点，在命令后面跟上 <code>-A</code> 来调用 <code>r2</code>；这将告诉 <code>r2</code> 为你自动分析二进制：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2 -A ./adder</span></span>
<span class="line"><span>[x] Analyze all flags starting with sym. and entry0 (aa)</span></span>
<span class="line"><span>[x] Analyze function calls (aac)</span></span>
<span class="line"><span>[x] Analyze len bytes of instructions for references (aar)</span></span>
<span class="line"><span>[x] Check for vtables</span></span>
<span class="line"><span>[x] Type matching analysis for all functions (aaft)</span></span>
<span class="line"><span>[x] Propagate noreturn information</span></span>
<span class="line"><span>[x] Use -AA or aaaa to perform additional experimental analysis.</span></span>
<span class="line"><span> -- Already up-to-date.</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h4 id="获取一些关于二进制的基本信息" tabindex="-1">获取一些关于二进制的基本信息 <a class="header-anchor" href="#获取一些关于二进制的基本信息" aria-label="Permalink to “获取一些关于二进制的基本信息”">​</a></h4><p>在开始分析一个二进制文件之前，你需要一些背景信息。在许多情况下，这可以是二进制文件的格式（ELF、PE 等）、二进制的架构（x86、AMD、ARM 等），以及二进制是 32 位还是 64 位。方便的 <code>r2</code> 的 <code>iI</code> 命令可以提供所需的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; iI</span></span>
<span class="line"><span>arch     x86</span></span>
<span class="line"><span>baddr    0x400000</span></span>
<span class="line"><span>binsz    14724</span></span>
<span class="line"><span>bintype  elf</span></span>
<span class="line"><span>bits     64</span></span>
<span class="line"><span>canary   false</span></span>
<span class="line"><span>class    ELF64</span></span>
<span class="line"><span>compiler GCC: (GNU) 8.3.1 20190507 (Red Hat 8.3.1-4)</span></span>
<span class="line"><span>crypto   false</span></span>
<span class="line"><span>endian   little</span></span>
<span class="line"><span>havecode true</span></span>
<span class="line"><span>intrp    /lib64/ld-linux-x86-64.so.2</span></span>
<span class="line"><span>laddr    0x0</span></span>
<span class="line"><span>lang     c</span></span>
<span class="line"><span>linenum  true</span></span>
<span class="line"><span>lsyms    true</span></span>
<span class="line"><span>machine  AMD x86-64 architecture</span></span>
<span class="line"><span>maxopsz  16</span></span>
<span class="line"><span>minopsz  1</span></span>
<span class="line"><span>nx       true</span></span>
<span class="line"><span>os       linux</span></span>
<span class="line"><span>pcalign  0</span></span>
<span class="line"><span>pic      false</span></span>
<span class="line"><span>relocs   true</span></span>
<span class="line"><span>relro    partial</span></span>
<span class="line"><span>rpath    NONE</span></span>
<span class="line"><span>sanitiz  false</span></span>
<span class="line"><span>static   false</span></span>
<span class="line"><span>stripped false</span></span>
<span class="line"><span>subsys   linux</span></span>
<span class="line"><span>va       true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="导入和导出" tabindex="-1">导入和导出 <a class="header-anchor" href="#导入和导出" aria-label="Permalink to “导入和导出”">​</a></h3><p>通常情况下，当你知道你要处理的是什么样的文件后，你就想知道二进制程序使用了什么样的标准库函数，或者了解程序的潜在功能。在本教程中的示例 C 程序中，唯一的库函数是 <code>printf</code>，用来打印信息。你可以通过运行 <code>ii</code> 命令看到这一点，它显示了该二进制所有导入的库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; ii</span></span>
<span class="line"><span>[Imports]</span></span>
<span class="line"><span>nth vaddr      bind   type   lib name</span></span>
<span class="line"><span>―――――――――――――――――――――――――――――――――――――</span></span>
<span class="line"><span>1   0x00000000 WEAK   NOTYPE     _ITM_deregisterTMCloneTable</span></span>
<span class="line"><span>2   0x004004a0 GLOBAL FUNC       printf</span></span>
<span class="line"><span>3   0x00000000 GLOBAL FUNC       __libc_start_main</span></span>
<span class="line"><span>4   0x00000000 WEAK   NOTYPE     __gmon_start__</span></span>
<span class="line"><span>5   0x00000000 WEAK   NOTYPE     _ITM_registerTMCloneTable</span></span></code></pre></div><p>该二进制也可以有自己的符号、函数或数据。这些函数通常显示在 <code>Exports</code> 下。这个测试的二进制导出了两个函数：<code>main</code> 和 <code>adder</code>。其余的函数是在编译阶段，当二进制文件被构建时添加的。加载器需要这些函数来加载二进制文件（现在不用太关心它们）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt;</span></span>
<span class="line"><span>[0x004004b0]&gt; iE</span></span>
<span class="line"><span>[Exports]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nth paddr       vaddr      bind   type   size lib name</span></span>
<span class="line"><span>――――――――――――――――――――――――――――――――――――――――――――――――――――――</span></span>
<span class="line"><span>82   0x00000650 0x00400650 GLOBAL FUNC   5        __libc_csu_fini</span></span>
<span class="line"><span>85   ---------- 0x00601024 GLOBAL NOTYPE 0        _edata</span></span>
<span class="line"><span>86   0x00000658 0x00400658 GLOBAL FUNC   0        _fini</span></span>
<span class="line"><span>89   0x00001020 0x00601020 GLOBAL NOTYPE 0        __data_start</span></span>
<span class="line"><span>90   0x00000596 0x00400596 GLOBAL FUNC   15       adder</span></span>
<span class="line"><span>92   0x00000670 0x00400670 GLOBAL OBJ    0        __dso_handle</span></span>
<span class="line"><span>93   0x00000668 0x00400668 GLOBAL OBJ    4        _IO_stdin_used</span></span>
<span class="line"><span>94   0x000005e0 0x004005e0 GLOBAL FUNC   101      __libc_csu_init</span></span>
<span class="line"><span>95   ---------- 0x00601028 GLOBAL NOTYPE 0        _end</span></span>
<span class="line"><span>96   0x000004e0 0x004004e0 GLOBAL FUNC   5        _dl_relocate_static_pie</span></span>
<span class="line"><span>97   0x000004b0 0x004004b0 GLOBAL FUNC   47       _start</span></span>
<span class="line"><span>98   ---------- 0x00601024 GLOBAL NOTYPE 0        __bss_start</span></span>
<span class="line"><span>99   0x000005a5 0x004005a5 GLOBAL FUNC   55       main</span></span>
<span class="line"><span>100  ---------- 0x00601028 GLOBAL OBJ    0        __TMC_END__</span></span>
<span class="line"><span>102  0x00000468 0x00400468 GLOBAL FUNC   0        _init</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="哈希信息" tabindex="-1">哈希信息 <a class="header-anchor" href="#哈希信息" aria-label="Permalink to “哈希信息”">​</a></h3><p>如何知道两个二进制文件是否相似？你不能只是打开一个二进制文件并查看里面的源代码。在大多数情况下，二进制文件的哈希值（md5sum、sha1、sha256）是用来唯一识别它的。你可以使用 <code>it</code> 命令找到二进制的哈希值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; it</span></span>
<span class="line"><span>md5 7e6732f2b11dec4a0c7612852cede670</span></span>
<span class="line"><span>sha1 d5fa848c4b53021f6570dd9b18d115595a2290ae</span></span>
<span class="line"><span>sha256 13dd5a492219dac1443a816ef5f91db8d149e8edbf26f24539c220861769e1c2</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to “函数”">​</a></h3><p>代码按函数分组；要列出二进制中存在的函数，请运行 <code>afl</code> 命令。下面的列表显示了 <code>main</code> 函数和 <code>adder</code> 函数。通常，以 <code>sym.imp</code> 开头的函数是从标准库（这里是 glibc）中导入的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; afl</span></span>
<span class="line"><span>0x004004b0    1 46           entry0</span></span>
<span class="line"><span>0x004004f0    4 41   -&gt; 34   sym.deregister_tm_clones</span></span>
<span class="line"><span>0x00400520    4 57   -&gt; 51   sym.register_tm_clones</span></span>
<span class="line"><span>0x00400560    3 33   -&gt; 32   sym.__do_global_dtors_aux</span></span>
<span class="line"><span>0x00400590    1 6            entry.init0</span></span>
<span class="line"><span>0x00400650    1 5            sym.__libc_csu_fini</span></span>
<span class="line"><span>0x00400658    1 13           sym._fini</span></span>
<span class="line"><span>0x00400596    1 15           sym.adder</span></span>
<span class="line"><span>0x004005e0    4 101          loc..annobin_elf_init.c</span></span>
<span class="line"><span>0x004004e0    1 5            loc..annobin_static_reloc.c</span></span>
<span class="line"><span>0x004005a5    1 55           main</span></span>
<span class="line"><span>0x004004a0    1 6            sym.imp.printf</span></span>
<span class="line"><span>0x00400468    3 27           sym._init</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="交叉引用" tabindex="-1">交叉引用 <a class="header-anchor" href="#交叉引用" aria-label="Permalink to “交叉引用”">​</a></h3><p>在 C 语言中，<code>main</code> 函数是一个程序开始执行的地方。理想情况下，其他函数都是从 <code>main</code> 函数调用的，在退出程序时，<code>main</code> 函数会向操作系统返回一个退出状态。这在源代码中是很明显的，然而，二进制程序呢？如何判断 <code>adder</code> 函数的调用位置呢？</p><p>你可以使用 <code>axt</code> 命令，后面加上函数名，看看 <code>adder</code> 函数是在哪里调用的；如下图所示，它是从 <code>main</code> 函数中调用的。这就是所谓的<ruby>交叉引用<rt>cross-referencing</rt></ruby>。但什么调用 <code>main</code> 函数本身呢？从下面的 <code>axt main</code> 可以看出，它是由 <code>entry0</code> 调用的（关于 <code>entry0</code> 的学习我就不说了，留待读者练习）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; axt sym.adder</span></span>
<span class="line"><span>main 0x4005b9 [CALL] call sym.adder</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span>
<span class="line"><span>[0x004004b0]&gt; axt main</span></span>
<span class="line"><span>entry0 0x4004d1 [DATA] mov rdi, main</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="寻找定位" tabindex="-1">寻找定位 <a class="header-anchor" href="#寻找定位" aria-label="Permalink to “寻找定位”">​</a></h3><p>在处理文本文件时，你经常通过引用行号和行或列号在文件内移动；在二进制文件中，你需要使用地址。这些是以 <code>0x</code> 开头的十六进制数字，后面跟着一个地址。要找到你在二进制中的位置，运行 <code>s</code> 命令。要移动到不同的位置，使用 <code>s</code> 命令，后面跟上地址。</p><p>函数名就像标签一样，内部用地址表示。如果函数名在二进制中（未剥离的），可以使用函数名后面的 <code>s</code> 命令跳转到一个特定的函数地址。同样，如果你想跳转到二进制的开始，输入 <code>s 0</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; s</span></span>
<span class="line"><span>0x4004b0</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span>
<span class="line"><span>[0x004004b0]&gt; s main</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span>
<span class="line"><span>[0x004005a5]&gt; s</span></span>
<span class="line"><span>0x4005a5</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span>
<span class="line"><span>[0x004005a5]&gt; s sym.adder</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span>
<span class="line"><span>[0x00400596]&gt; s</span></span>
<span class="line"><span>0x400596</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span>
<span class="line"><span>[0x00400596]&gt; s 0</span></span>
<span class="line"><span>[0x00000000]&gt;</span></span>
<span class="line"><span>[0x00000000]&gt; s</span></span>
<span class="line"><span>0x0</span></span>
<span class="line"><span>[0x00000000]&gt;</span></span></code></pre></div><h3 id="十六进制视图" tabindex="-1">十六进制视图 <a class="header-anchor" href="#十六进制视图" aria-label="Permalink to “十六进制视图”">​</a></h3><p>通常情况下，原始二进制没有意义。在十六进制模式下查看二进制及其等效的 ASCII 表示法会有帮助：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; s main</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span>
<span class="line"><span>[0x004005a5]&gt; px</span></span>
<span class="line"><span>- offset -   0 1  2 3  4 5  6 7  8 9  A B  C D  E F  0123456789ABCDEF</span></span>
<span class="line"><span>0x004005a5  5548 89e5 4883 ec10 c745 fc64 0000 008b  UH..H....E.d....</span></span>
<span class="line"><span>0x004005b5  45fc 89c7 e8d8 ffff ff89 45f8 8b45 f889  E.........E..E..</span></span>
<span class="line"><span>0x004005c5  c6bf 7806 4000 b800 0000 00e8 cbfe ffff  ..x.@...........</span></span>
<span class="line"><span>0x004005d5  b800 0000 00c9 c30f 1f40 00f3 0f1e fa41  .........@.....A</span></span>
<span class="line"><span>0x004005e5  5749 89d7 4156 4989 f641 5541 89fd 4154  WI..AVI..AUA..AT</span></span>
<span class="line"><span>0x004005f5  4c8d 2504 0820 0055 488d 2d04 0820 0053  L.%.. .UH.-.. .S</span></span>
<span class="line"><span>0x00400605  4c29 e548 83ec 08e8 57fe ffff 48c1 fd03  L).H....W...H...</span></span>
<span class="line"><span>0x00400615  741f 31db 0f1f 8000 0000 004c 89fa 4c89  t.1........L..L.</span></span>
<span class="line"><span>0x00400625  f644 89ef 41ff 14dc 4883 c301 4839 dd75  .D..A...H...H9.u</span></span>
<span class="line"><span>0x00400635  ea48 83c4 085b 5d41 5c41 5d41 5e41 5fc3  .H...[]A\\A]A^A_.</span></span>
<span class="line"><span>0x00400645  9066 2e0f 1f84 0000 0000 00f3 0f1e fac3  .f..............</span></span>
<span class="line"><span>0x00400655  0000 00f3 0f1e fa48 83ec 0848 83c4 08c3  .......H...H....</span></span>
<span class="line"><span>0x00400665  0000 0001 0002 0000 0000 0000 0000 0000  ................</span></span>
<span class="line"><span>0x00400675  0000 004e 756d 6265 7220 6e6f 7720 6973  ...Number now is</span></span>
<span class="line"><span>0x00400685  2020 3a20 2564 0a00 0000 0001 1b03 3b44    : %d........;D</span></span>
<span class="line"><span>0x00400695  0000 0007 0000 0000 feff ff88 0000 0020  ...............</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span></code></pre></div><h3 id="反汇编" tabindex="-1">反汇编 <a class="header-anchor" href="#反汇编" aria-label="Permalink to “反汇编”">​</a></h3><p>如果你使用的是编译后的二进制文件，则无法查看源代码。编译器将源代码转译成 CPU 可以理解和执行的机器语言指令；其结果就是二进制或可执行文件。然而，你可以查看汇编指令（的助记词）来理解程序正在做什么。例如，如果你想查看 <code>main</code> 函数在做什么，你可以使用 <code>s main</code> 寻找 <code>main</code> 函数的地址，然后运行 <code>pdf</code> 命令来查看反汇编的指令。</p><p>要理解汇编指令，你需要参考体系结构手册（这里是 x86），它的应用二进制接口（ABI，或调用惯例），并对堆栈的工作原理有基本的了解：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; s main</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span>
<span class="line"><span>[0x004005a5]&gt; s</span></span>
<span class="line"><span>0x4005a5</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span>
<span class="line"><span>[0x004005a5]&gt; pdf</span></span>
<span class="line"><span>            ; DATA XREF from entry0 @ 0x4004d1</span></span>
<span class="line"><span>┌ 55: int main (int argc, char **argv, char **envp);</span></span>
<span class="line"><span>│           ; var int64_t var_8h @ rbp-0x8</span></span>
<span class="line"><span>│           ; var int64_t var_4h @ rbp-0x4</span></span>
<span class="line"><span>│           0x004005a5      55             push rbp</span></span>
<span class="line"><span>│           0x004005a6      4889e5         mov rbp, rsp</span></span>
<span class="line"><span>│           0x004005a9      4883ec10       sub rsp, 0x10</span></span>
<span class="line"><span>│           0x004005ad      c745fc640000.  mov dword [var_4h], 0x64    ; &#39;d&#39; ; 100</span></span>
<span class="line"><span>│           0x004005b4      8b45fc         mov eax, dword [var_4h]</span></span>
<span class="line"><span>│           0x004005b7      89c7           mov edi, eax</span></span>
<span class="line"><span>│           0x004005b9      e8d8ffffff     call sym.adder</span></span>
<span class="line"><span>│           0x004005be      8945f8         mov dword [var_8h], eax</span></span>
<span class="line"><span>│           0x004005c1      8b45f8         mov eax, dword [var_8h]</span></span>
<span class="line"><span>│           0x004005c4      89c6           mov esi, eax</span></span>
<span class="line"><span>│           0x004005c6      bf78064000     mov edi, str.Number_now_is__:__d ; 0x400678 ; &quot;Number now is  : %d\\n&quot; ; const char *format</span></span>
<span class="line"><span>│           0x004005cb      b800000000     mov eax, 0</span></span>
<span class="line"><span>│           0x004005d0      e8cbfeffff     call sym.imp.printf         ; int printf(const char *format)</span></span>
<span class="line"><span>│           0x004005d5      b800000000     mov eax, 0</span></span>
<span class="line"><span>│           0x004005da      c9             leave</span></span>
<span class="line"><span>└           0x004005db      c3             ret</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span></code></pre></div><p>这是 <code>adder</code> 函数的反汇编结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004005a5]&gt; s sym.adder</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span>
<span class="line"><span>[0x00400596]&gt; s</span></span>
<span class="line"><span>0x400596</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span>
<span class="line"><span>[0x00400596]&gt; pdf</span></span>
<span class="line"><span>            ; CALL XREF from main @ 0x4005b9</span></span>
<span class="line"><span>┌ 15: sym.adder (int64_t arg1);</span></span>
<span class="line"><span>│           ; var int64_t var_4h @ rbp-0x4</span></span>
<span class="line"><span>│           ; arg int64_t arg1 @ rdi</span></span>
<span class="line"><span>│           0x00400596      55             push rbp</span></span>
<span class="line"><span>│           0x00400597      4889e5         mov rbp, rsp</span></span>
<span class="line"><span>│           0x0040059a      897dfc         mov dword [var_4h], edi     ; arg1</span></span>
<span class="line"><span>│           0x0040059d      8b45fc         mov eax, dword [var_4h]</span></span>
<span class="line"><span>│           0x004005a0      83c001         add eax, 1</span></span>
<span class="line"><span>│           0x004005a3      5d             pop rbp</span></span>
<span class="line"><span>└           0x004005a4      c3             ret</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span></code></pre></div><h3 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to “字符串”">​</a></h3><p>查看二进制中存在哪些字符串可以作为二进制分析的起点。字符串是硬编码到二进制中的，通常会提供重要的提示，可以让你将重点转移到分析某些区域。在二进制中运行 <code>iz</code> 命令来列出所有的字符串。这个测试二进制中只有一个硬编码的字符串：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; iz</span></span>
<span class="line"><span>[Strings]</span></span>
<span class="line"><span>nth paddr      vaddr      len size section type  string</span></span>
<span class="line"><span>―――――――――――――――――――――――――――――――――――――――――――――――――――――――</span></span>
<span class="line"><span>0   0x00000678 0x00400678 20  21   .rodata ascii Number now is  : %d\\n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="交叉引用字符串" tabindex="-1">交叉引用字符串 <a class="header-anchor" href="#交叉引用字符串" aria-label="Permalink to “交叉引用字符串”">​</a></h3><p>和函数一样，你可以交叉引用字符串，看看它们是从哪里被打印出来的，并理解它们周围的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; ps @ 0x400678</span></span>
<span class="line"><span>Number now is  : %d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span>
<span class="line"><span>[0x004004b0]&gt; axt 0x400678</span></span>
<span class="line"><span>main 0x4005c6 [DATA] mov edi, str.Number_now_is__:__d</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="可视模式" tabindex="-1">可视模式 <a class="header-anchor" href="#可视模式" aria-label="Permalink to “可视模式”">​</a></h3><p>当你的代码很复杂，有多个函数被调用时，很容易迷失方向。如果能以图形或可视化的方式查看哪些函数被调用，根据某些条件采取了哪些路径等，会很有帮助。在移动到感兴趣的函数后，可以通过 <code>VV</code> 命令来探索 <code>r2</code> 的可视化模式。例如，对于 <code>adder</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; s sym.adder</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span>
<span class="line"><span>[0x00400596]&gt; VV</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/uploads/radare2_visual-mode_0.png" alt="Radare2 Visual mode" title="Radare2 Visual mode"></p>`,57)),n("p",null,[n("em",null,[s[20]||(s[20]=a("(Gaurav Kamathe, ",-1)),e(p,{href:"https://creativecommons.org/licenses/by-sa/4.0/"},{default:l(()=>[...s[19]||(s[19]=[a("CC BY-SA 4.0",-1)])]),_:1}),s[21]||(s[21]=a(")",-1))])]),s[46]||(s[46]=i(`<h3 id="调试器" tabindex="-1">调试器 <a class="header-anchor" href="#调试器" aria-label="Permalink to “调试器”">​</a></h3><p>到目前为止，你一直在做的是静态分析 —— 你只是在看二进制文件中的东西，而没有运行它，有时你需要执行二进制文件，并在运行时分析内存中的各种信息。<code>r2</code> 的内部调试器允许你运行二进制文件、设置断点、分析变量的值、或者转储寄存器的内容。</p><p>用 <code>-d</code> 标志启动调试器，并在加载二进制时添加 <code>-A</code> 标志进行分析。你可以通过使用 <code>db &lt;function-name&gt;</code> 命令在不同的地方设置断点，比如函数或内存地址。要查看现有的断点，使用 <code>dbi</code> 命令。一旦你放置了断点，使用 <code>dc</code> 命令开始运行二进制文件。你可以使用 <code>dbt</code> 命令查看堆栈，它可以显示函数调用。最后，你可以使用 <code>drr</code> 命令转储寄存器的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2 -d -A ./adder</span></span>
<span class="line"><span>Process with PID 17453 started...</span></span>
<span class="line"><span>= attach 17453 17453</span></span>
<span class="line"><span>bin.baddr 0x00400000</span></span>
<span class="line"><span>Using 0x400000</span></span>
<span class="line"><span>asm.bits 64</span></span>
<span class="line"><span>[x] Analyze all flags starting with sym. and entry0 (aa)</span></span>
<span class="line"><span>[x] Analyze function calls (aac)</span></span>
<span class="line"><span>[x] Analyze len bytes of instructions for references (aar)</span></span>
<span class="line"><span>[x] Check for vtables</span></span>
<span class="line"><span>[x] Type matching analysis for all functions (aaft)</span></span>
<span class="line"><span>[x] Propagate noreturn information</span></span>
<span class="line"><span>[x] Use -AA or aaaa to perform additional experimental analysis.</span></span>
<span class="line"><span> -- git checkout hamster</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt;</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt; db main</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt;</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt; db sym.adder</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt;</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt; dbi</span></span>
<span class="line"><span>0 0x004005a5 E:1 T:0</span></span>
<span class="line"><span>1 0x00400596 E:1 T:0</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt;</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt; afl | grep main</span></span>
<span class="line"><span>0x004005a5    1 55           main</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt;</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt; afl | grep sym.adder</span></span>
<span class="line"><span>0x00400596    1 15           sym.adder</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt;</span></span>
<span class="line"><span>[0x7f77b0a28030]&gt; dc</span></span>
<span class="line"><span>hit breakpoint at: 0x4005a5</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span>
<span class="line"><span>[0x004005a5]&gt; dbt</span></span>
<span class="line"><span>0  0x4005a5           sp: 0x0                 0    [main]  main sym.adder+15</span></span>
<span class="line"><span>1  0x7f77b0687873     sp: 0x7ffe35ff6858      0    [??]  section..gnu.build.attributes-1345820597</span></span>
<span class="line"><span>2  0x7f77b0a36e0a     sp: 0x7ffe35ff68e8      144  [??]  map.usr_lib64_ld_2.28.so.r_x+65034</span></span>
<span class="line"><span>[0x004005a5]&gt; dc</span></span>
<span class="line"><span>hit breakpoint at: 0x400596</span></span>
<span class="line"><span>[0x00400596]&gt; dbt</span></span>
<span class="line"><span>0  0x400596           sp: 0x0                 0    [sym.adder]  rip entry.init0+6</span></span>
<span class="line"><span>1  0x4005be           sp: 0x7ffe35ff6838      0    [main]  main+25</span></span>
<span class="line"><span>2  0x7f77b0687873     sp: 0x7ffe35ff6858      32   [??]  section..gnu.build.attributes-1345820597</span></span>
<span class="line"><span>3  0x7f77b0a36e0a     sp: 0x7ffe35ff68e8      144  [??]  map.usr_lib64_ld_2.28.so.r_x+65034</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span>
<span class="line"><span>[0x00400596]&gt; dr</span></span>
<span class="line"><span>rax = 0x00000064</span></span>
<span class="line"><span>rbx = 0x00000000</span></span>
<span class="line"><span>rcx = 0x7f77b0a21738</span></span>
<span class="line"><span>rdx = 0x7ffe35ff6948</span></span>
<span class="line"><span>r8 = 0x7f77b0a22da0</span></span>
<span class="line"><span>r9 = 0x7f77b0a22da0</span></span>
<span class="line"><span>r10 = 0x0000000f</span></span>
<span class="line"><span>r11 = 0x00000002</span></span>
<span class="line"><span>r12 = 0x004004b0</span></span>
<span class="line"><span>r13 = 0x7ffe35ff6930</span></span>
<span class="line"><span>r14 = 0x00000000</span></span>
<span class="line"><span>r15 = 0x00000000</span></span>
<span class="line"><span>rsi = 0x7ffe35ff6938</span></span>
<span class="line"><span>rdi = 0x00000064</span></span>
<span class="line"><span>rsp = 0x7ffe35ff6838</span></span>
<span class="line"><span>rbp = 0x7ffe35ff6850</span></span>
<span class="line"><span>rip = 0x00400596</span></span>
<span class="line"><span>rflags = 0x00000202</span></span>
<span class="line"><span>orax = 0xffffffffffffffff</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span></code></pre></div><h3 id="反编译器" tabindex="-1">反编译器 <a class="header-anchor" href="#反编译器" aria-label="Permalink to “反编译器”">​</a></h3><p>能够理解汇编是二进制分析的前提。汇编语言总是与二进制建立和预期运行的架构相关。一行源代码和汇编代码之间从来没有 1:1 的映射。通常，一行 C 源代码会产生多行汇编代码。所以，逐行读取汇编代码并不是最佳的选择。</p><p>这就是反编译器的作用。它们试图根据汇编指令重建可能的源代码。这与用于创建二进制的源代码绝不完全相同，它是基于汇编的源代码的近似表示。另外，要考虑到编译器进行的优化，它会生成不同的汇编代码以加快速度，减小二进制的大小等，会使反编译器的工作更加困难。另外，恶意软件作者经常故意混淆代码，让恶意软件的分析人员望而却步。</p><p>Radare2 通过插件提供反编译器。你可以安装任何 Radare2 支持的反编译器。使用 <code>r2pm -l</code> 命令可以查看当前插件。使用 <code>r2pm install</code> 命令来安装一个示例的反编译器 <code>r2dec</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2pm  -l</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ r2pm install r2dec</span></span>
<span class="line"><span>Cloning into &#39;r2dec&#39;...</span></span>
<span class="line"><span>remote: Enumerating objects: 100, done.</span></span>
<span class="line"><span>remote: Counting objects: 100% (100/100), done.</span></span>
<span class="line"><span>remote: Compressing objects: 100% (97/97), done.</span></span>
<span class="line"><span>remote: Total 100 (delta 18), reused 27 (delta 1), pack-reused 0</span></span>
<span class="line"><span>Receiving objects: 100% (100/100), 1.01 MiB | 1.31 MiB/s, done.</span></span>
<span class="line"><span>Resolving deltas: 100% (18/18), done.</span></span>
<span class="line"><span>Install Done For r2dec</span></span>
<span class="line"><span>gmake: Entering directory &#39;/root/.local/share/radare2/r2pm/git/r2dec/p&#39;</span></span>
<span class="line"><span>[CC] duktape/duktape.o</span></span>
<span class="line"><span>[CC] duktape/duk_console.o</span></span>
<span class="line"><span>[CC] core_pdd.o</span></span>
<span class="line"><span>[CC] core_pdd.so</span></span>
<span class="line"><span>gmake: Leaving directory &#39;/root/.local/share/radare2/r2pm/git/r2dec/p&#39;</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ r2pm  -l</span></span>
<span class="line"><span>r2dec</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="反编译器视图" tabindex="-1">反编译器视图 <a class="header-anchor" href="#反编译器视图" aria-label="Permalink to “反编译器视图”">​</a></h3><p>要反编译一个二进制文件，在 <code>r2</code> 中加载二进制文件并自动分析它。在本例中，使用 <code>s sym.adder</code> 命令移动到感兴趣的 <code>adder</code> 函数，然后使用 <code>pdda</code> 命令并排查看汇编和反编译后的源代码。阅读这个反编译后的源代码往往比逐行阅读汇编更容易：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2 -A ./adder</span></span>
<span class="line"><span>[x] Analyze all flags starting with sym. and entry0 (aa)</span></span>
<span class="line"><span>[x] Analyze function calls (aac)</span></span>
<span class="line"><span>[x] Analyze len bytes of instructions for references (aar)</span></span>
<span class="line"><span>[x] Check for vtables</span></span>
<span class="line"><span>[x] Type matching analysis for all functions (aaft)</span></span>
<span class="line"><span>[x] Propagate noreturn information</span></span>
<span class="line"><span>[x] Use -AA or aaaa to perform additional experimental analysis.</span></span>
<span class="line"><span> -- What do you want to debug today?</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span>
<span class="line"><span>[0x004004b0]&gt; s sym.adder</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span>
<span class="line"><span>[0x00400596]&gt; s</span></span>
<span class="line"><span>0x400596</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span>
<span class="line"><span>[0x00400596]&gt; pdda</span></span>
<span class="line"><span>    ; assembly                               | /* r2dec pseudo code output */</span></span>
<span class="line"><span>                                             | /* ./adder @ 0x400596 */</span></span>
<span class="line"><span>                                             | #include &amp;lt;stdint.h&gt;</span></span>
<span class="line"><span>                                             |  </span></span>
<span class="line"><span>    ; (fcn) sym.adder ()                     | int32_t adder (int64_t arg1) {</span></span>
<span class="line"><span>                                             |     int64_t var_4h;</span></span>
<span class="line"><span>                                             |     rdi = arg1;</span></span>
<span class="line"><span>    0x00400596 push rbp                      |    </span></span>
<span class="line"><span>    0x00400597 mov rbp, rsp                  |    </span></span>
<span class="line"><span>    0x0040059a mov dword [rbp - 4], edi      |     *((rbp - 4)) = edi;</span></span>
<span class="line"><span>    0x0040059d mov eax, dword [rbp - 4]      |     eax = *((rbp - 4));</span></span>
<span class="line"><span>    0x004005a0 add eax, 1                    |     eax++;</span></span>
<span class="line"><span>    0x004005a3 pop rbp                       |    </span></span>
<span class="line"><span>    0x004005a4 ret                           |     return eax;</span></span>
<span class="line"><span>                                             | }</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span></code></pre></div><h3 id="配置设置" tabindex="-1">配置设置 <a class="header-anchor" href="#配置设置" aria-label="Permalink to “配置设置”">​</a></h3><p>随着你对 Radare2 的使用越来越熟悉，你会想改变它的配置，以适应你的工作方式。你可以使用 <code>e</code> 命令查看 <code>r2</code> 的默认配置。要设置一个特定的配置，在 <code>e</code> 命令后面添加 <code>config = value</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004005a5]&gt; e | wc -l</span></span>
<span class="line"><span>593</span></span>
<span class="line"><span>[0x004005a5]&gt; e | grep syntax</span></span>
<span class="line"><span>asm.syntax = intel</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span>
<span class="line"><span>[0x004005a5]&gt; e asm.syntax = att</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span>
<span class="line"><span>[0x004005a5]&gt; e | grep syntax</span></span>
<span class="line"><span>asm.syntax = att</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span></code></pre></div><p>要使配置更改永久化，请将它们放在 <code>r2</code> 启动时读取的名为 <code>.radare2rc</code> 的启动文件中。这个文件通常在你的主目录下，如果没有，你可以创建一个。一些示例配置选项包括：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat ~/.radare2rc</span></span>
<span class="line"><span>e asm.syntax = att</span></span>
<span class="line"><span>e scr.utf8 = true</span></span>
<span class="line"><span>eco solarized</span></span>
<span class="line"><span>e cmd.stack = true</span></span>
<span class="line"><span>e stack.size = 256</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="探索更多" tabindex="-1">探索更多 <a class="header-anchor" href="#探索更多" aria-label="Permalink to “探索更多”">​</a></h3><p>你已经看到了足够多的 Radare2 功能，对这个工具有了一定的了解。因为 Radare2 遵循 Unix 哲学，即使你可以从它的主控台做各种事情，它也会在下面使用一套独立的二进制来完成它的任务。</p><p>探索下面列出的独立二进制文件，看看它们是如何工作的。例如，用 <code>iI</code> 命令在控制台看到的二进制信息也可以用 <code>rabin2 &lt;binary&gt;</code> 命令找到：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd bin/</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>prefix  r2agent    r2pm  rabin2   radiff2  ragg2    rarun2   rasm2</span></span>
<span class="line"><span>r2      r2-indent  r2r   radare2  rafind2  rahash2  rasign2  rax2</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>你觉得 Radare2 怎么样？请在评论中分享你的反馈。</p><hr>`,23)),n("p",null,[s[23]||(s[23]=a("via: ",-1)),e(p,{href:"https://opensource.com/article/21/1/linux-radare2"},{default:l(()=>[...s[22]||(s[22]=[a("https://opensource.com/article/21/1/linux-radare2",-1)])]),_:1})]),n("p",null,[s[28]||(s[28]=a("作者：",-1)),e(p,{href:"https://opensource.com/users/gkamathe"},{default:l(()=>[...s[24]||(s[24]=[a("Gaurav Kamathe",-1)])]),_:1}),s[29]||(s[29]=a(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[25]||(s[25]=[a("lujun9972",-1)])]),_:1}),s[30]||(s[30]=a(" 译者：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[26]||(s[26]=[a("wxy",-1)])]),_:1}),s[31]||(s[31]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[27]||(s[27]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[34]||(s[34]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[32]||(s[32]=[a("LCTT",-1)])]),_:1}),s[35]||(s[35]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[33]||(s[33]=[a("Linux中国",-1)])]),_:1}),s[36]||(s[36]=a(" 荣誉推出",-1))])])}const C=t(o,[["render",g]]);export{y as __pageData,C as default};
