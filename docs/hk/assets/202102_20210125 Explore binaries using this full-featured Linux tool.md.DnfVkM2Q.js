import{_ as t,a0 as d,w as r,s as c,I as n,x as a,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"全功能的二進制文件分析工具 Radare2 指南 | LCTT x X-CMD","titleTemplate":false,"description":"全功能的二進制文件分析工具 Radare2 指南 | LCTT (202102) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"全功能的二進制文件分析工具 Radare2 指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"全功能的二進制文件分析工具 Radare2 指南 | LCTT (202102) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202102/20210125 Explore binaries using this full-featured Linux tool","title":"全功能的二進制文件分析工具 Radare2 指南","tag":"202102","desc":""},"relativePath":"202102/20210125 Explore binaries using this full-featured Linux tool.md","filePath":"[post].md"}'),o={name:"202102/20210125 Explore binaries using this full-featured Linux tool.md"};function g(h,s,b,x,f,u){const p=d("Link");return r(),c("div",null,[s[37]||(s[37]=n("h1",{id:"全功能的二進制文件分析工具-radare2-指南",tabindex:"-1"},[a("全功能的二進制文件分析工具 Radare2 指南 "),n("a",{class:"header-anchor",href:"#全功能的二進制文件分析工具-radare2-指南","aria-label":"Permalink to “全功能的二進制文件分析工具 Radare2 指南”"},"​")],-1)),s[38]||(s[38]=n("blockquote",null,[n("p",null,"Radare2 是一個為二進制分析定製的開源工具。")],-1)),s[39]||(s[39]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202102/01/112611baw4gpqlch10ps1c.jpg",alt:""})],-1)),n("p",null,[s[2]||(s[2]=a("在《",-1)),e(p,{href:"https://linux.cn/article-12187-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("Linux 上分析二進制文件的 10 種方法",-1)])]),_:1}),s[3]||(s[3]=a("》中，我解釋瞭如何使用 Linux 上豐富的原生工具集來分析二進制文件。但如果你想進一步探索你的二進制文件，你需要一個為二進制分析定製的工具。如果你是二進制分析的新手，並且大多使用的是腳本語言，這篇文章《",-1)),e(p,{href:"https://linux.cn/article-11441-1.html"},{default:l(()=>[...s[1]||(s[1]=[a("GNU binutils 裏的九種武器",-1)])]),_:1}),s[4]||(s[4]=a("》可以幫助你開始學習編譯過程和什麼是二進制。",-1))]),s[40]||(s[40]=n("h3",{id:"為什麼我需要另一個工具",tabindex:"-1"},[a("為什麼我需要另一個工具？ "),n("a",{class:"header-anchor",href:"#為什麼我需要另一個工具","aria-label":"Permalink to “為什麼我需要另一個工具？”"},"​")],-1)),s[41]||(s[41]=n("p",null,[a("如果現有的 Linux 原生工具也能做類似的事情，你自然會問為什麼需要另一個工具。嗯，這和你用手機做鬧鐘、做筆記、做相機、聽音樂、上網、偶爾打電話和接電話的原因是一樣的。以前，使用單獨的設備和工具處理這些功能 —— 比如拍照的實體相機，記筆記的小記事本，起牀的牀頭鬧鐘等等。對用户來説，有一個設備來做多件（但相關的）事情是"),n("em",null,"方便的"),a("。另外，殺手鐧就是獨立功能之間的"),n("em",null,"互操作性"),a("。")],-1)),n("p",null,[s[6]||(s[6]=a("同樣，即使許多 Linux 工具都有特定的用途，但在一個工具中捆綁類似（和更好）的功能是非常有用的。這就是為什麼我認為 ",-1)),e(p,{href:"https://rada.re/n/"},{default:l(()=>[...s[5]||(s[5]=[a("Radare2",-1)])]),_:1}),s[7]||(s[7]=a(" 應該是你需要處理二進制文件時的首選工具。",-1))]),n("p",null,[s[9]||(s[9]=a("根據其 ",-1)),e(p,{href:"https://github.com/radareorg/radare2"},{default:l(()=>[...s[8]||(s[8]=[a("GitHub 簡介",-1)])]),_:1}),s[10]||(s[10]=a("，Radare2（也稱為 r2）是一個“類 Unix 系統上的逆向工程框架和命令列工具集”。它名字中的 “2” 是因為這個版本從頭開始重寫的，使其更加模組化。",-1))]),s[42]||(s[42]=n("h3",{id:"為什麼選擇-radare2",tabindex:"-1"},[a("為什麼選擇 Radare2？ "),n("a",{class:"header-anchor",href:"#為什麼選擇-radare2","aria-label":"Permalink to “為什麼選擇 Radare2？”"},"​")],-1)),s[43]||(s[43]=n("p",null,"有大量（非原生的）Linux 工具可用於二進制分析，為什麼要選擇 Radare2 呢？我的理由很簡單。",-1)),s[44]||(s[44]=n("p",null,"首先，它是一個開源項目，有一個活躍而健康的社區。如果你正在尋找新穎的功能或提供着 bug 修復的工具，這很重要。",-1)),n("p",null,[s[12]||(s[12]=a("其次，Radare2 可以在命令列上使用，而且它有一個功能豐富的圖形用户界面（GUI）環境，叫做 Cutter，適合那些對 GUI 比較熟悉的人。作為一個長期使用 Linux 的用户，我對習慣於在 shell 上輸入。雖然熟悉 Radare2 的命令稍微有一點學習曲線，但我會把它比作 ",-1)),e(p,{href:"https://opensource.com/article/19/3/getting-started-vim"},{default:l(()=>[...s[11]||(s[11]=[a("學習 Vim",-1)])]),_:1}),s[13]||(s[13]=a("。你可以先學習基本的東西，一旦你掌握了它們，你就可以繼續學習更高級的東西。很快，它就變成了肌肉記憶。",-1))]),n("p",null,[s[15]||(s[15]=a("第三，Radare2 通過插件可以很好的支持外部工具。例如，最近開源的 ",-1)),e(p,{href:"https://ghidra-sre.org/"},{default:l(()=>[...s[14]||(s[14]=[a("Ghidra",-1)])]),_:1}),s[16]||(s[16]=a(" 二進制分析和",-1)),s[17]||(s[17]=n("ruby",null,[a("逆向工具"),n("rt",null,"reversing tool")],-1)),s[18]||(s[18]=a("很受歡迎，因為它的反編譯器功能是逆向軟件的關鍵要素。你可以直接從 Radare2 控制台安裝 Ghidra 反編譯器並使用，這很神奇，讓你兩全其美。",-1))]),s[45]||(s[45]=i(`<h3 id="開始使用-radare2" tabindex="-1">開始使用 Radare2 <a class="header-anchor" href="#開始使用-radare2" aria-label="Permalink to “開始使用 Radare2”">​</a></h3><p>要安裝 Radare2，只需克隆其存儲庫並運行 <code>user.sh</code> 腳本。如果你的系統上還沒有一些預備軟件包，你可能需要安裝它們。一旦安裝完成，運行 <code>r2 -v</code> 命令來查看 Radare2 是否被正確安裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git clone https://github.com/radareorg/radare2.git</span></span>
<span class="line"><span>$ cd radare2</span></span>
<span class="line"><span>$ ./sys/user.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ r2 -v</span></span>
<span class="line"><span>radare2 4.6.0-git 25266 @ linux-x86-64 git.4.4.0-930-g48047b317</span></span>
<span class="line"><span>commit: 48047b3171e6ed0480a71a04c3693a0650d03543 build: 2020-11-17__09:31:03</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="獲取二進制測試樣本" tabindex="-1">獲取二進制測試樣本 <a class="header-anchor" href="#獲取二進制測試樣本" aria-label="Permalink to “獲取二進制測試樣本”">​</a></h4><p>現在 <code>r2</code> 已經安裝好了，你需要一個樣本二進制程序來試用它。你可以使用任何系統二進制文件（<code>ls</code>、<code>bash</code> 等），但為了使本教程的內容簡單，請編譯以下 C 程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat adder.c</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
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
<span class="line"><span>Number now is  : 101</span></span></code></pre></div><h4 id="加載二進制文件" tabindex="-1">加載二進制文件 <a class="header-anchor" href="#加載二進制文件" aria-label="Permalink to “加載二進制文件”">​</a></h4><p>要分析二進制文件，你必須在 Radare2 中加載它。通過提供文件名作為 <code>r2</code> 命令的一個命令列參數來加載它。你會進入一個獨立的 Radare2 控制台，這與你的 shell 不同。要退出控制台，你可以輸入 <code>Quit</code> 或 <code>Exit</code> 或按 <code>Ctrl+D</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2 ./adder</span></span>
<span class="line"><span> -- Learn pancake as if you were radare!</span></span>
<span class="line"><span>[0x004004b0]&gt; quit</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="分析二進制" tabindex="-1">分析二進制 <a class="header-anchor" href="#分析二進制" aria-label="Permalink to “分析二進制”">​</a></h4><p>在你探索二進制之前，你必須讓 <code>r2</code> 為你分析它。你可以通過在 <code>r2</code> 控制台中運行 <code>aaa</code> 命令來實現：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2 ./adder</span></span>
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
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><p>這意味着每次你選擇一個二進制文件進行分析時，你必須在加載二進制文件後輸入一個額外的命令 <code>aaa</code>。你可以繞過這一點，在命令後面跟上 <code>-A</code> 來調用 <code>r2</code>；這將告訴 <code>r2</code> 為你自動分析二進制：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2 -A ./adder</span></span>
<span class="line"><span>[x] Analyze all flags starting with sym. and entry0 (aa)</span></span>
<span class="line"><span>[x] Analyze function calls (aac)</span></span>
<span class="line"><span>[x] Analyze len bytes of instructions for references (aar)</span></span>
<span class="line"><span>[x] Check for vtables</span></span>
<span class="line"><span>[x] Type matching analysis for all functions (aaft)</span></span>
<span class="line"><span>[x] Propagate noreturn information</span></span>
<span class="line"><span>[x] Use -AA or aaaa to perform additional experimental analysis.</span></span>
<span class="line"><span> -- Already up-to-date.</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h4 id="獲取一些關於二進制的基本信息" tabindex="-1">獲取一些關於二進制的基本信息 <a class="header-anchor" href="#獲取一些關於二進制的基本信息" aria-label="Permalink to “獲取一些關於二進制的基本信息”">​</a></h4><p>在開始分析一個二進制文件之前，你需要一些背景信息。在許多情況下，這可以是二進制文件的格式（ELF、PE 等）、二進制的架構（x86、AMD、ARM 等），以及二進制是 32 位還是 64 位。方便的 <code>r2</code> 的 <code>iI</code> 命令可以提供所需的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; iI</span></span>
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
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="導入和導出" tabindex="-1">導入和導出 <a class="header-anchor" href="#導入和導出" aria-label="Permalink to “導入和導出”">​</a></h3><p>通常情況下，當你知道你要處理的是什麼樣的文件後，你就想知道二進制程序使用了什麼樣的標準庫函數，或者瞭解程序的潛在功能。在本教程中的示例 C 程序中，唯一的庫函數是 <code>printf</code>，用來打印信息。你可以通過運行 <code>ii</code> 命令看到這一點，它顯示了該二進制所有導入的庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; ii</span></span>
<span class="line"><span>[Imports]</span></span>
<span class="line"><span>nth vaddr      bind   type   lib name</span></span>
<span class="line"><span>―――――――――――――――――――――――――――――――――――――</span></span>
<span class="line"><span>1   0x00000000 WEAK   NOTYPE     _ITM_deregisterTMCloneTable</span></span>
<span class="line"><span>2   0x004004a0 GLOBAL FUNC       printf</span></span>
<span class="line"><span>3   0x00000000 GLOBAL FUNC       __libc_start_main</span></span>
<span class="line"><span>4   0x00000000 WEAK   NOTYPE     __gmon_start__</span></span>
<span class="line"><span>5   0x00000000 WEAK   NOTYPE     _ITM_registerTMCloneTable</span></span></code></pre></div><p>該二進制也可以有自己的符號、函數或數據。這些函數通常顯示在 <code>Exports</code> 下。這個測試的二進制導出了兩個函數：<code>main</code> 和 <code>adder</code>。其餘的函數是在編譯階段，當二進制文件被構建時添加的。加載器需要這些函數來加載二進制文件（現在不用太關心它們）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt;</span></span>
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
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="哈希信息" tabindex="-1">哈希信息 <a class="header-anchor" href="#哈希信息" aria-label="Permalink to “哈希信息”">​</a></h3><p>如何知道兩個二進制文件是否相似？你不能只是打開一個二進制文件並查看裏面的源代碼。在大多數情況下，二進制文件的哈希值（md5sum、sha1、sha256）是用來唯一識別它的。你可以使用 <code>it</code> 命令找到二進制的哈希值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; it</span></span>
<span class="line"><span>md5 7e6732f2b11dec4a0c7612852cede670</span></span>
<span class="line"><span>sha1 d5fa848c4b53021f6570dd9b18d115595a2290ae</span></span>
<span class="line"><span>sha256 13dd5a492219dac1443a816ef5f91db8d149e8edbf26f24539c220861769e1c2</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="函數" tabindex="-1">函數 <a class="header-anchor" href="#函數" aria-label="Permalink to “函數”">​</a></h3><p>代碼按函數分組；要列出二進制中存在的函數，請運行 <code>afl</code> 命令。下面的列表顯示了 <code>main</code> 函數和 <code>adder</code> 函數。通常，以 <code>sym.imp</code> 開頭的函數是從標準庫（這裏是 glibc）中導入的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; afl</span></span>
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
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="交叉引用" tabindex="-1">交叉引用 <a class="header-anchor" href="#交叉引用" aria-label="Permalink to “交叉引用”">​</a></h3><p>在 C 語言中，<code>main</code> 函數是一個程序開始執行的地方。理想情況下，其他函數都是從 <code>main</code> 函數調用的，在退出程序時，<code>main</code> 函數會向操作系統返回一個退出狀態。這在源代碼中是很明顯的，然而，二進制程序呢？如何判斷 <code>adder</code> 函數的調用位置呢？</p><p>你可以使用 <code>axt</code> 命令，後面加上函數名，看看 <code>adder</code> 函數是在哪裏調用的；如下圖所示，它是從 <code>main</code> 函數中調用的。這就是所謂的<ruby>交叉引用<rt>cross-referencing</rt></ruby>。但什麼調用 <code>main</code> 函數本身呢？從下面的 <code>axt main</code> 可以看出，它是由 <code>entry0</code> 調用的（關於 <code>entry0</code> 的學習我就不説了，留待讀者練習）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; axt sym.adder</span></span>
<span class="line"><span>main 0x4005b9 [CALL] call sym.adder</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span>
<span class="line"><span>[0x004004b0]&gt; axt main</span></span>
<span class="line"><span>entry0 0x4004d1 [DATA] mov rdi, main</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="尋找定位" tabindex="-1">尋找定位 <a class="header-anchor" href="#尋找定位" aria-label="Permalink to “尋找定位”">​</a></h3><p>在處理文本文件時，你經常通過引用行號和行或列號在文件內移動；在二進制文件中，你需要使用地址。這些是以 <code>0x</code> 開頭的十六進制數字，後面跟着一個地址。要找到你在二進制中的位置，運行 <code>s</code> 命令。要移動到不同的位置，使用 <code>s</code> 命令，後面跟上地址。</p><p>函數名就像標籤一樣，內部用地址表示。如果函數名在二進制中（未剝離的），可以使用函數名後面的 <code>s</code> 命令跳轉到一個特定的函數地址。同樣，如果你想跳轉到二進制的開始，輸入 <code>s 0</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; s</span></span>
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
<span class="line"><span>[0x00000000]&gt;</span></span></code></pre></div><h3 id="十六進制視圖" tabindex="-1">十六進制視圖 <a class="header-anchor" href="#十六進制視圖" aria-label="Permalink to “十六進制視圖”">​</a></h3><p>通常情況下，原始二進制沒有意義。在十六進制模式下查看二進制及其等效的 ASCII 表示法會有幫助：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; s main</span></span>
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
<span class="line"><span>[0x004005a5]&gt;</span></span></code></pre></div><h3 id="反彙編" tabindex="-1">反彙編 <a class="header-anchor" href="#反彙編" aria-label="Permalink to “反彙編”">​</a></h3><p>如果你使用的是編譯後的二進制文件，則無法查看源代碼。編譯器將源代碼轉譯成 CPU 可以理解和執行的機器語言指令；其結果就是二進制或可執行文件。然而，你可以查看彙編指令（的助記詞）來理解程序正在做什麼。例如，如果你想查看 <code>main</code> 函數在做什麼，你可以使用 <code>s main</code> 尋找 <code>main</code> 函數的地址，然後運行 <code>pdf</code> 命令來查看反彙編的指令。</p><p>要理解彙編指令，你需要參考體系結構手冊（這裏是 x86），它的應用二進制接口（ABI，或調用慣例），並對堆棧的工作原理有基本的瞭解：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; s main</span></span>
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
<span class="line"><span>[0x004005a5]&gt;</span></span></code></pre></div><p>這是 <code>adder</code> 函數的反彙編結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004005a5]&gt; s sym.adder</span></span>
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
<span class="line"><span>[0x00400596]&gt;</span></span></code></pre></div><h3 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to “字符串”">​</a></h3><p>查看二進制中存在哪些字符串可以作為二進制分析的起點。字符串是硬編碼到二進制中的，通常會提供重要的提示，可以讓你將重點轉移到分析某些區域。在二進制中運行 <code>iz</code> 命令來列出所有的字符串。這個測試二進制中只有一個硬編碼的字符串：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; iz</span></span>
<span class="line"><span>[Strings]</span></span>
<span class="line"><span>nth paddr      vaddr      len size section type  string</span></span>
<span class="line"><span>―――――――――――――――――――――――――――――――――――――――――――――――――――――――</span></span>
<span class="line"><span>0   0x00000678 0x00400678 20  21   .rodata ascii Number now is  : %d\\n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="交叉引用字符串" tabindex="-1">交叉引用字符串 <a class="header-anchor" href="#交叉引用字符串" aria-label="Permalink to “交叉引用字符串”">​</a></h3><p>和函數一樣，你可以交叉引用字符串，看看它們是從哪裏被打印出來的，並理解它們周圍的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; ps @ 0x400678</span></span>
<span class="line"><span>Number now is  : %d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span>
<span class="line"><span>[0x004004b0]&gt; axt 0x400678</span></span>
<span class="line"><span>main 0x4005c6 [DATA] mov edi, str.Number_now_is__:__d</span></span>
<span class="line"><span>[0x004004b0]&gt;</span></span></code></pre></div><h3 id="可視模式" tabindex="-1">可視模式 <a class="header-anchor" href="#可視模式" aria-label="Permalink to “可視模式”">​</a></h3><p>當你的代碼很複雜，有多個函數被調用時，很容易迷失方向。如果能以圖形或可視化的方式查看哪些函數被調用，根據某些條件採取了哪些路徑等，會很有幫助。在移動到感興趣的函數後，可以通過 <code>VV</code> 命令來探索 <code>r2</code> 的可視化模式。例如，對於 <code>adder</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004004b0]&gt; s sym.adder</span></span>
<span class="line"><span>[0x00400596]&gt;</span></span>
<span class="line"><span>[0x00400596]&gt; VV</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/uploads/radare2_visual-mode_0.png" alt="Radare2 Visual mode" title="Radare2 Visual mode"></p>`,57)),n("p",null,[n("em",null,[s[20]||(s[20]=a("(Gaurav Kamathe, ",-1)),e(p,{href:"https://creativecommons.org/licenses/by-sa/4.0/"},{default:l(()=>[...s[19]||(s[19]=[a("CC BY-SA 4.0",-1)])]),_:1}),s[21]||(s[21]=a(")",-1))])]),s[46]||(s[46]=i(`<h3 id="調試器" tabindex="-1">調試器 <a class="header-anchor" href="#調試器" aria-label="Permalink to “調試器”">​</a></h3><p>到目前為止，你一直在做的是靜態分析 —— 你只是在看二進制文件中的東西，而沒有運行它，有時你需要執行二進制文件，並在運行時分析內存中的各種信息。<code>r2</code> 的內部調試器允許你運行二進制文件、設置斷點、分析變量的值、或者轉儲寄存器的內容。</p><p>用 <code>-d</code> 標誌啓動調試器，並在加載二進制時添加 <code>-A</code> 標誌進行分析。你可以通過使用 <code>db &lt;function-name&gt;</code> 命令在不同的地方設置斷點，比如函數或內存地址。要查看現有的斷點，使用 <code>dbi</code> 命令。一旦你放置了斷點，使用 <code>dc</code> 命令開始運行二進制文件。你可以使用 <code>dbt</code> 命令查看堆棧，它可以顯示函數調用。最後，你可以使用 <code>drr</code> 命令轉儲寄存器的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2 -d -A ./adder</span></span>
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
<span class="line"><span>[0x00400596]&gt;</span></span></code></pre></div><h3 id="反編譯器" tabindex="-1">反編譯器 <a class="header-anchor" href="#反編譯器" aria-label="Permalink to “反編譯器”">​</a></h3><p>能夠理解彙編是二進制分析的前提。彙編語言總是與二進制建立和預期運行的架構相關。一行源代碼和彙編代碼之間從來沒有 1:1 的映射。通常，一行 C 源代碼會產生多行彙編代碼。所以，逐行讀取彙編代碼並不是最佳的選擇。</p><p>這就是反編譯器的作用。它們試圖根據彙編指令重建可能的源代碼。這與用於創建二進制的源代碼絕不完全相同，它是基於彙編的源代碼的近似表示。另外，要考慮到編譯器進行的優化，它會生成不同的彙編代碼以加快速度，減小二進制的大小等，會使反編譯器的工作更加困難。另外，惡意軟件作者經常故意混淆代碼，讓惡意軟件的分析人員望而卻步。</p><p>Radare2 通過插件提供反編譯器。你可以安裝任何 Radare2 支持的反編譯器。使用 <code>r2pm -l</code> 命令可以查看當前插件。使用 <code>r2pm install</code> 命令來安裝一個示例的反編譯器 <code>r2dec</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2pm  -l</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h3 id="反編譯器視圖" tabindex="-1">反編譯器視圖 <a class="header-anchor" href="#反編譯器視圖" aria-label="Permalink to “反編譯器視圖”">​</a></h3><p>要反編譯一個二進制文件，在 <code>r2</code> 中加載二進制文件並自動分析它。在本例中，使用 <code>s sym.adder</code> 命令移動到感興趣的 <code>adder</code> 函數，然後使用 <code>pdda</code> 命令並排查看彙編和反編譯後的源代碼。閲讀這個反編譯後的源代碼往往比逐行閲讀彙編更容易：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ r2 -A ./adder</span></span>
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
<span class="line"><span>[0x00400596]&gt;</span></span></code></pre></div><h3 id="配置設置" tabindex="-1">配置設置 <a class="header-anchor" href="#配置設置" aria-label="Permalink to “配置設置”">​</a></h3><p>隨着你對 Radare2 的使用越來越熟悉，你會想改變它的配置，以適應你的工作方式。你可以使用 <code>e</code> 命令查看 <code>r2</code> 的默認配置。要設置一個特定的配置，在 <code>e</code> 命令後面添加 <code>config = value</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[0x004005a5]&gt; e | wc -l</span></span>
<span class="line"><span>593</span></span>
<span class="line"><span>[0x004005a5]&gt; e | grep syntax</span></span>
<span class="line"><span>asm.syntax = intel</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span>
<span class="line"><span>[0x004005a5]&gt; e asm.syntax = att</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span>
<span class="line"><span>[0x004005a5]&gt; e | grep syntax</span></span>
<span class="line"><span>asm.syntax = att</span></span>
<span class="line"><span>[0x004005a5]&gt;</span></span></code></pre></div><p>要使配置更改永久化，請將它們放在 <code>r2</code> 啓動時讀取的名為 <code>.radare2rc</code> 的啓動文件中。這個文件通常在你的主目錄下，如果沒有，你可以創建一個。一些示例配置選項包括：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat ~/.radare2rc</span></span>
<span class="line"><span>e asm.syntax = att</span></span>
<span class="line"><span>e scr.utf8 = true</span></span>
<span class="line"><span>eco solarized</span></span>
<span class="line"><span>e cmd.stack = true</span></span>
<span class="line"><span>e stack.size = 256</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="探索更多" tabindex="-1">探索更多 <a class="header-anchor" href="#探索更多" aria-label="Permalink to “探索更多”">​</a></h3><p>你已經看到了足夠多的 Radare2 功能，對這個工具有了一定的瞭解。因為 Radare2 遵循 Unix 哲學，即使你可以從它的主控台做各種事情，它也會在下面使用一套獨立的二進制來完成它的任務。</p><p>探索下面列出的獨立二進制文件，看看它們是如何工作的。例如，用 <code>iI</code> 命令在控制台看到的二進制信息也可以用 <code>rabin2 &lt;binary&gt;</code> 命令找到：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd bin/</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>prefix  r2agent    r2pm  rabin2   radiff2  ragg2    rarun2   rasm2</span></span>
<span class="line"><span>r2      r2-indent  r2r   radare2  rafind2  rahash2  rasign2  rax2</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>你覺得 Radare2 怎麼樣？請在評論中分享你的反饋。</p><hr>`,23)),n("p",null,[s[23]||(s[23]=a("via: ",-1)),e(p,{href:"https://opensource.com/article/21/1/linux-radare2"},{default:l(()=>[...s[22]||(s[22]=[a("https://opensource.com/article/21/1/linux-radare2",-1)])]),_:1})]),n("p",null,[s[28]||(s[28]=a("作者：",-1)),e(p,{href:"https://opensource.com/users/gkamathe"},{default:l(()=>[...s[24]||(s[24]=[a("Gaurav Kamathe",-1)])]),_:1}),s[29]||(s[29]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[25]||(s[25]=[a("lujun9972",-1)])]),_:1}),s[30]||(s[30]=a(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[26]||(s[26]=[a("wxy",-1)])]),_:1}),s[31]||(s[31]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[27]||(s[27]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[34]||(s[34]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[32]||(s[32]=[a("LCTT",-1)])]),_:1}),s[35]||(s[35]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[33]||(s[33]=[a("Linux中國",-1)])]),_:1}),s[36]||(s[36]=a(" 榮譽推出",-1))])])}const C=t(o,[["render",g]]);export{y as __pageData,C as default};
