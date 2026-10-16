import{_ as t,a0 as o,w as d,s as c,ao as i,I as l,x as a,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"在 Linux 上分析二進制文件的 10 種方法 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 上分析二進制文件的 10 種方法 | LCTT (202005) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 上分析二進制文件的 10 種方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 上分析二進制文件的 10 種方法 | LCTT (202005) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202005/20200430 10 ways to analyze binary files on Linux","title":"在 Linux 上分析二進制文件的 10 種方法","tag":"202005","desc":""},"relativePath":"202005/20200430 10 ways to analyze binary files on Linux.md","filePath":"[post].md"}'),r={name:"202005/20200430 10 ways to analyze binary files on Linux.md"};function b(h,s,u,g,f,x){const n=o("Link");return d(),c("div",null,[s[23]||(s[23]=i(`<h1 id="在-linux-上分析二進制文件的-10-種方法" tabindex="-1">在 Linux 上分析二進制文件的 10 種方法 <a class="header-anchor" href="#在-linux-上分析二進制文件的-10-種方法" aria-label="Permalink to “在 Linux 上分析二進制文件的 10 種方法”">​</a></h1><blockquote><p>這些簡單的命令和工具可以幫助你輕鬆完成分析二進制文件的任務。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202005/05/232115nn0oduodo4oztv0a.jpg" alt=""></p><p>“這個世界上有 10 種人：懂二進制的人和不懂二進制的人。”</p><p>我們每天都在與二進制文件打交道，但我們對二進制文件卻知之甚少。我所説的二進制，是指你每天運行的可執行文件，從命令列工具到成熟的應用程序都是。</p><p>Linux 提供了一套豐富的工具，讓分析二進制文件變得輕而易舉。無論你的工作角色是什麼，如果你在 Linux 上工作，瞭解這些工具的基本知識將幫助你更好地理解你的系統。</p><p>在這篇文章中，我們將介紹其中一些最流行的 Linux 工具和命令，其中大部分都是 Linux 發行版的一部分。如果沒有找到，你可以隨時使用你的軟件包管理器來安裝和探索它們。請記住：學習在正確的場合使用正確的工具需要大量的耐心和練習。</p><h3 id="file" tabindex="-1">file <a class="header-anchor" href="#file" aria-label="Permalink to “file”">​</a></h3><p>它的作用：幫助確定文件類型。</p><p>這將是你進行二進制分析的起點。我們每天都在與文件打交道，並非所有的文件都是可執行類型，除此之外還有各種各樣的文件類型。在你開始之前，你需要了解要分析的文件類型。是二進制文件、庫文件、ASCII 文本文件、視頻文件、圖片文件、PDF、數據文件等文件嗎？</p><p><code>file</code> 命令將幫助你確定你所處理的文件類型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ file /bin/ls</span></span>
<span class="line"><span>/bin/ls: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=94943a89d17e9d373b2794dcb1f7e38c95b66c86, stripped</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file /etc/passwd</span></span>
<span class="line"><span>/etc/passwd: ASCII text</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="ldd" tabindex="-1">ldd <a class="header-anchor" href="#ldd" aria-label="Permalink to “ldd”">​</a></h3><p>它的作用：打印共享對象依賴關係。</p><p>如果你已經在一個可執行的二進制文件上使用了上面的 <code>file</code> 命令，你肯定會看到輸出中的“<ruby>動態鏈接<rt>dynamically linked</rt></ruby>”信息。它是什麼意思呢？</p><p>在開發軟件的時候，我們儘量不要重造輪子。有一組常見的任務是大多數軟件程序需要的，比如打印輸出或從標準輸入/打開的文件中讀取等。所有這些常見的任務都被抽象成一組通用的函數，然後每個人都可以使用，而不是寫出自己的變體。這些常用的函數被放在一個叫 <code>libc</code> 或 <code>glibc</code> 的庫中。</p><p>如何找到可執行程序所依賴的庫？這就是 <code>ldd</code> 命令的作用了。對動態鏈接的二進制文件運行該命令會顯示出所有依賴庫和它們的路徑。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ldd /bin/ls</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h3 id="ltrace" tabindex="-1">ltrace <a class="header-anchor" href="#ltrace" aria-label="Permalink to “ltrace”">​</a></h3><p>它的作用：庫調用跟蹤器。</p><p>我們現在知道如何使用 <code>ldd</code> 命令找到一個可執行程序所依賴的庫。然而，一個庫可以包含數百個函數。在這幾百個函數中，哪些是我們的二進制程序正在使用的實際函數？</p><p><code>ltrace</code> 命令可以顯示運行時從庫中調用的所有函數。在下面的例子中，你可以看到被調用的函數名稱，以及傳遞給該函數的參數。你也可以在輸出的最右邊看到這些函數返回的內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ltrace ls</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h3 id="hexdump" tabindex="-1">hexdump <a class="header-anchor" href="#hexdump" aria-label="Permalink to “hexdump”">​</a></h3><p>它的作用：以 ASCII、十進制、十六進制或八進制顯示文件內容。</p><p>通常情況下，當你用一個應用程序打開一個文件，而它不知道如何處理該文件時，就會出現這種情況。嘗試用 <code>vim</code> 打開一個可執行文件或視頻文件，你屏幕上會看到的只是拋出的亂碼。</p><p>在 <code>hexdump</code> 中打開未知文件，可以幫助你看到文件的具體內容。你也可以選擇使用一些命令列選項來查看用 ASCII 表示的文件數據。這可能會幫助你瞭解到它是什麼類型的文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ hexdump -C /bin/ls | head</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h3 id="strings" tabindex="-1">strings <a class="header-anchor" href="#strings" aria-label="Permalink to “strings”">​</a></h3><p>它的作用：打印文件中的可打印字符的字符串。</p><p>如果你只是在二進制中尋找可打印的字符，那麼 <code>hexdump</code> 對於你的使用場景來説似乎有點矯枉過正，你可以使用 <code>strings</code> 命令。</p><p>在開發軟件的時候，各種文本/ASCII 信息會被添加到其中，比如打印信息、調試信息、幫助信息、錯誤等。只要這些信息都存在於二進制文件中，就可以用 <code>strings</code> 命令將其轉儲到屏幕上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ strings /bin/ls</span></span></code></pre></div><h3 id="readelf" tabindex="-1">readelf <a class="header-anchor" href="#readelf" aria-label="Permalink to “readelf”">​</a></h3><p>它的作用：顯示有關 ELF 文件的信息。</p><p>ELF（<ruby>可執行和可鏈接文件格式<rt>Executable and Linkable File Format</rt></ruby>）是可執行文件或二進制文件的主流格式，不僅是 Linux 系統，也是各種 UNIX 系統的主流文件格式。如果你已經使用了像 <code>file</code> 命令這樣的工具，它告訴你文件是 ELF 格式，那麼下一步就是使用 <code>readelf</code> 命令和它的各種選項來進一步分析文件。</p>`,36)),l("p",null,[s[1]||(s[1]=a("在使用 ",-1)),s[2]||(s[2]=l("code",null,"readelf",-1)),s[3]||(s[3]=a(" 命令時，有一份實際的 ELF 規範的參考是非常有用的。你可以在",-1)),p(n,{href:"http://www.skyfree.org/linux/references/ELF_Format.pdf"},{default:e(()=>[...s[0]||(s[0]=[a("這裏",-1)])]),_:1}),s[4]||(s[4]=a("找到該規範。",-1))]),s[24]||(s[24]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ readelf -h /bin/ls</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h3 id="objdump" tabindex="-1">objdump <a class="header-anchor" href="#objdump" aria-label="Permalink to “objdump”">​</a></h3><p>它的作用：從對象文件中顯示信息。</p><p>二進制文件是通過你編寫的源碼創建的，這些源碼會通過一個叫做編譯器的工具進行編譯。這個編譯器會生成相對於源代碼的機器語言指令，然後由 CPU 執行特定的任務。這些機器語言代碼可以通過被稱為彙編語言的助記詞來解讀。彙編語言是一組指令，它可以幫助你理解由程序所進行並最終在 CPU 上執行的操作。</p><p><code>objdump</code> 實用程序讀取二進制或可執行文件，並將彙編語言指令轉儲到屏幕上。彙編語言知識對於理解 <code>objdump</code> 命令的輸出至關重要。</p><p>請記住：彙編語言是特定於體系結構的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ objdump -d /bin/ls | head</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/bin/ls:     file format elf64-x86-64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Disassembly of section .init:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0000000000402150 &lt;_init@@Base&gt;:</span></span>
<span class="line"><span>  402150:       48 83 ec 08             sub    $0x8,%rsp</span></span>
<span class="line"><span>  402154:       48 8b 05 6d 8e 21 00    mov    0x218e6d(%rip),%rax        # 61afc8 &lt;__gmon_start__&gt;</span></span>
<span class="line"><span>  40215b:       48 85 c0                test   %rax,%rax</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="strace" tabindex="-1">strace <a class="header-anchor" href="#strace" aria-label="Permalink to “strace”">​</a></h3><p>它的作用：跟蹤系統調用和信號。</p><p>如果你用過前面提到的 <code>ltrace</code>，那就把 <code>strace</code> 想成是類似的。唯一的區別是，<code>strace</code> 工具不是追蹤調用的庫，而是追蹤系統調用。系統調用是你與內核對接來完成工作的。</p><p>舉個例子，如果你想把一些東西打印到屏幕上，你會使用標準庫 <code>libc</code> 中的 <code>printf</code> 或 <code>puts</code> 函數；但是，在底層，最終會有一個名為 <code>write</code> 的系統調用來實際把東西打印到屏幕上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ strace -f /bin/ls</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h3 id="nm" tabindex="-1">nm <a class="header-anchor" href="#nm" aria-label="Permalink to “nm”">​</a></h3><p>它的作用：列出對象文件中的符號。</p><p>如果你所使用的二進制文件沒有被剝離，<code>nm</code> 命令將為你提供在編譯過程中嵌入到二進制文件中的有價值的信息。<code>nm</code> 可以幫助你從二進制文件中識別變量和函數。你可以想像一下，如果你無法訪問二進制文件的源代碼時，這將是多麼有用。</p><p>為了展示 <code>nm</code>，我們快速編寫了一個小程序，用 <code>-g</code> 選項編譯，我們會看到這個二進制文件沒有被剝離。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat hello.c</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h3 id="gdb" tabindex="-1">gdb <a class="header-anchor" href="#gdb" aria-label="Permalink to “gdb”">​</a></h3><p>它的作用：GNU 調試器。</p><p>好吧，不是所有的二進制文件中的東西都可以進行靜態分析。我們確實執行了一些運行二進制文件（進行分析）的命令，比如 <code>ltrace</code> 和 <code>strace</code>；然而，軟件由各種條件組成，這些條件可能會導致執行不同的替代路徑。</p><p>分析這些路徑的唯一方法是在運行時環境，在任何給定的位置停止或暫停程序，並能夠分析信息，然後再往下執行。</p><p>這就是調試器的作用，在 Linux 上，<code>gdb</code> 就是調試器的事實標準。它可以幫助你加載程序，在特定的地方設置斷點，分析內存和 CPU 的寄存器，以及更多的功能。它是對上面提到的其他工具的補充，可以讓你做更多的運行時分析。</p><p>有一點需要注意的是，一旦你使用 <code>gdb</code> 加載一個程序，你會看到它自己的 <code>(gdb)</code> 提示符。所有進一步的命令都將在這個 <code>gdb</code> 命令提示符中運行，直到你退出。</p><p>我們將使用我們之前編譯的 <code>hello</code> 程序，使用 <code>gdb</code> 來看看它的工作原理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gdb -q ./hello</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h3 id="結語" tabindex="-1">結語 <a class="header-anchor" href="#結語" aria-label="Permalink to “結語”">​</a></h3>`,26)),l("p",null,[s[6]||(s[6]=a("一旦你習慣了使用這些原生的 Linux 二進制分析工具，並理解了它們提供的輸出，你就可以轉向更高級和專業的開源二進制分析工具，比如 ",-1)),p(n,{href:"https://github.com/radareorg/radare2"},{default:e(()=>[...s[5]||(s[5]=[a("radare2",-1)])]),_:1}),s[7]||(s[7]=a("。",-1))]),s[25]||(s[25]=l("hr",null,null,-1)),l("p",null,[s[9]||(s[9]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/20/4/linux-binary-analysis"},{default:e(()=>[...s[8]||(s[8]=[a("https://opensource.com/article/20/4/linux-binary-analysis",-1)])]),_:1})]),l("p",null,[s[14]||(s[14]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/gkamathe"},{default:e(()=>[...s[10]||(s[10]=[a("Gaurav Kamathe",-1)])]),_:1}),s[15]||(s[15]=a(" 選題：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[11]||(s[11]=[a("lujun9972",-1)])]),_:1}),s[16]||(s[16]=a(" 譯者：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[12]||(s[12]=[a("wxy",-1)])]),_:1}),s[17]||(s[17]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[13]||(s[13]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[20]||(s[20]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[18]||(s[18]=[a("LCTT",-1)])]),_:1}),s[21]||(s[21]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[19]||(s[19]=[a("Linux中國",-1)])]),_:1}),s[22]||(s[22]=a(" 榮譽推出",-1))])])}const _=t(r,[["render",b]]);export{y as __pageData,_ as default};
