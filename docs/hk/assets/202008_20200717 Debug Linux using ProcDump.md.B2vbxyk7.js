import{_ as o,a0 as r,w as t,s as c,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"使用微軟的 ProcDump 調試 Linux 進程 | LCTT x X-CMD","titleTemplate":false,"description":"使用微軟的 ProcDump 調試 Linux 進程 | LCTT (202008) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用微軟的 ProcDump 調試 Linux 進程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用微軟的 ProcDump 調試 Linux 進程 | LCTT (202008) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202008/20200717 Debug Linux using ProcDump","title":"使用微軟的 ProcDump 調試 Linux 進程","tag":"202008","desc":""},"relativePath":"202008/20200717 Debug Linux using ProcDump.md","filePath":"[post].md"}'),d={name:"202008/20200717 Debug Linux using ProcDump.md"};function g(u,s,h,m,b,k){const p=r("Link");return t(),c("div",null,[s[39]||(s[39]=a("h1",{id:"使用微軟的-procdump-調試-linux-進程",tabindex:"-1"},[n("使用微軟的 ProcDump 調試 Linux 進程 "),a("a",{class:"header-anchor",href:"#使用微軟的-procdump-調試-linux-進程","aria-label":"Permalink to “使用微軟的 ProcDump 調試 Linux 進程”"},"​")],-1)),s[40]||(s[40]=a("blockquote",null,[a("p",null,"用這個微軟的開源工具，獲取進程信息。")],-1)),s[41]||(s[41]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202008/20/095646k5wz7cd11vyc7lhr.jpg",alt:""})],-1)),a("p",null,[s[3]||(s[3]=n("微軟越來越心儀 Linux 和開源，這並不是什麼秘密。在過去幾年中，該公司穩步地增加了對開源的貢獻，包括將其部分軟件和工具移植到 Linux。2018 年底，微軟",-1)),e(p,{href:"https://www.zdnet.com/article/microsoft-working-on-porting-sysinternals-to-linux/"},{default:i(()=>[...s[0]||(s[0]=[n("宣佈",-1)])]),_:1}),s[4]||(s[4]=n("將其 ",-1)),e(p,{href:"https://docs.microsoft.com/en-us/sysinternals/"},{default:i(()=>[...s[1]||(s[1]=[n("Sysinternals",-1)])]),_:1}),s[5]||(s[5]=n(" 的部分工具以開源的方式移植到 Linux，",-1)),e(p,{href:"https://github.com/Microsoft/ProcDump-for-Linux"},{default:i(()=>[...s[2]||(s[2]=[n("Linux 版的 ProcDump",-1)])]),_:1}),s[6]||(s[6]=n("是其中的第一個。",-1))]),s[42]||(s[42]=a("p",null,"如果你在 Windows 上從事過調試或故障排除工作，你可能聽説過 Sysinternals，它是一個“瑞士軍刀”工具集，可以幫助系統管理員、開發人員和 IT 安全專家監控和排除 Windows 環境的故障。",-1)),a("p",null,[s[8]||(s[8]=n("Sysinternals 最受歡迎的工具之一是 ",-1)),e(p,{href:"https://docs.microsoft.com/en-us/sysinternals/downloads/procdump"},{default:i(()=>[...s[7]||(s[7]=[n("ProcDump",-1)])]),_:1}),s[9]||(s[9]=n("。顧名思義，它用於將正在運行的進程的內存轉儲到磁盤上的一個核心文件中。然後可以用調試器對這個核心文件進行分析，瞭解轉儲時進程的狀態。因為之前用過 Sysinternals，所以我很想試試 ProcDump 的 Linux 移植版。",-1))]),s[43]||(s[43]=l(`<h3 id="開始使用-linux-上的-procdump" tabindex="-1">開始使用 Linux 上的 ProcDump <a class="header-anchor" href="#開始使用-linux-上的-procdump" aria-label="Permalink to “開始使用 Linux 上的 ProcDump”">​</a></h3><p>要試用 Linux 上的 ProcDump，你需要下載該工具並編譯它。（我使用的是 Red Hat Enterprise Linux，儘管這些步驟在其他 Linux 發行版上應該是一樣的）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /etc/redhat-release</span></span>
<span class="line"><span>Red Hat Enterprise Linux release 8.2 (Ootpa)</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ uname -r</span></span>
<span class="line"><span>4.18.0-193.el8.x86_64</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>首先，克隆 Linux 版 ProcDump 的版本庫。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git clone https://github.com/microsoft/ProcDump-for-Linux.git</span></span>
<span class="line"><span>Cloning into &#39;ProcDump-for-Linux&#39;...</span></span>
<span class="line"><span>remote: Enumerating objects: 40, done.</span></span>
<span class="line"><span>remote: Counting objects: 100% (40/40), done.</span></span>
<span class="line"><span>remote: Compressing objects: 100% (33/33), done.</span></span>
<span class="line"><span>remote: Total 414 (delta 14), reused 14 (delta 6), pack-reused 374</span></span>
<span class="line"><span>Receiving objects: 100% (414/414), 335.28 KiB | 265.00 KiB/s, done.</span></span>
<span class="line"><span>Resolving deltas: 100% (232/232), done.</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ cd ProcDump-for-Linux/</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>azure-pipelines.yml  CONTRIBUTING.md  docs     INSTALL.md  Makefile    procdump.gif  src</span></span>
<span class="line"><span>CODE_OF_CONDUCT.md   dist             include  LICENSE     procdump.1  README.md     tests</span></span>
<span class="line"><span>$</span></span></code></pre></div>`,5)),a("p",null,[s[11]||(s[11]=n("接下來，使用 ",-1)),s[12]||(s[12]=a("code",null,"make",-1)),s[13]||(s[13]=n(" 構建程序。它能準確地輸出編譯源文件所需的 ",-1)),e(p,{href:"https://gcc.gnu.org/"},{default:i(()=>[...s[10]||(s[10]=[n("GCC",-1)])]),_:1}),s[14]||(s[14]=n(" 命令列參數。",-1))]),s[44]||(s[44]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>rm -rf obj</span></span>
<span class="line"><span>rm -rf bin</span></span>
<span class="line"><span>rm -rf /root/ProcDump-for-Linux/pkgbuild</span></span>
<span class="line"><span>gcc -c -g -o obj/Logging.o src/Logging.c -Wall -I ./include -pthread -std=gnu99</span></span>
<span class="line"><span>gcc -c -g -o obj/Events.o src/Events.c -Wall -I ./include -pthread -std=gnu99</span></span>
<span class="line"><span>gcc -c -g -o obj/ProcDumpConfiguration.o src/ProcDumpConfiguration.c -Wall -I ./include -pthread -std=gnu99</span></span>
<span class="line"><span>gcc -c -g -o obj/Handle.o src/Handle.c -Wall -I ./include -pthread -std=gnu99</span></span>
<span class="line"><span>gcc -c -g -o obj/Process.o src/Process.c -Wall -I ./include -pthread -std=gnu99</span></span>
<span class="line"><span>gcc -c -g -o obj/Procdump.o src/Procdump.c -Wall -I ./include -pthread -std=gnu99</span></span>
<span class="line"><span>gcc -c -g -o obj/TriggerThreadProcs.o src/TriggerThreadProcs.c -Wall -I ./include -pthread -std=gnu99</span></span>
<span class="line"><span>gcc -c -g -o obj/CoreDumpWriter.o src/CoreDumpWriter.c -Wall -I ./include -pthread -std=gnu99</span></span>
<span class="line"><span>gcc -o bin/procdump obj/Logging.o obj/Events.o obj/ProcDumpConfiguration.o obj/Handle.o obj/Process.o obj/Procdump.o obj/TriggerThreadProcs.o obj/CoreDumpWriter.o -Wall -I ./include -pthread -std=gnu99</span></span>
<span class="line"><span>gcc -c -g -o obj/ProcDumpTestApplication.o tests/integration/ProcDumpTestApplication.c -Wall -I ./include -pthread -std=gnu99</span></span>
<span class="line"><span>gcc -o bin/ProcDumpTestApplication obj/ProcDumpTestApplication.o -Wall -I ./include -pthread -std=gnu99</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>編譯過程中會創建兩個新的目錄。第一個是 <code>obj/</code> 目錄，存放編譯期間創建的對象文件。第二個（也是更重要的）目錄是 <code>bin/</code>，它是存儲編譯出的 <code>procdump</code> 程序的地方。它還會編譯另一個名為 <code>ProcDumpTestApplication</code> 的測試二進制文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls obj/</span></span>
<span class="line"><span>CoreDumpWriter.o  Handle.o   ProcDumpConfiguration.o  ProcDumpTestApplication.o  TriggerThreadProcs.o</span></span>
<span class="line"><span>Events.o          Logging.o  Procdump.o               Process.o</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls bin/</span></span>
<span class="line"><span>procdump  ProcDumpTestApplication</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file bin/procdump</span></span>
<span class="line"><span>bin/procdump: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=6e8827db64835ea0d1f0941ac3ecff9ee8c06e6b, with debug_info, not stripped</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file bin/ProcDumpTestApplication</span></span>
<span class="line"><span>bin/ProcDumpTestApplication: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=c8fd86f53c07df142e52518815b2573d1c690e4e, with debug_info, not stripped</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>在此情況下，每次運行 <code>procdump</code> 實用程序時，你都必須移動到 <code>bin/</code> 文件夾中。要使它在系統中的任何地方都可以使用，運行 <code>make install</code>。這將這個二進制文件複製到通常的 <code>bin/</code> 目錄中，它是你的 shell <code>$PATH</code> 的一部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ which procdump</span></span>
<span class="line"><span>/usr/bin/which: no procdump in (/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin)</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ make install</span></span>
<span class="line"><span>mkdir -p //usr/bin</span></span>
<span class="line"><span>cp bin/procdump //usr/bin</span></span>
<span class="line"><span>mkdir -p //usr/share/man/man1</span></span>
<span class="line"><span>cp procdump.1 //usr/share/man/man1</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ which procdump</span></span>
<span class="line"><span>/usr/bin/procdump</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>安裝時，ProcDump 提供了一個手冊頁，你可以用 <code>man procdump</code> 訪問：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ man procdump</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="運行-procdump" tabindex="-1">運行 ProcDump <a class="header-anchor" href="#運行-procdump" aria-label="Permalink to “運行 ProcDump”">​</a></h3><p>要轉儲一個進程的內存，你需要向 ProcDump 提供它的進程 ID（PID）。你可以使用機器上任何正在運行的程序或守護進程。在這個例子中，我將使用一個永遠循環的小 C 程序。編譯程序並運行它（要退出程序，按 <code>Ctrl+C</code>，如果程序在後台運行，則使用 <code>kill</code> 命令並輸入 PID）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat progxyz.c</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>        for (;;)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>                printf(&quot;.&quot;);</span></span>
<span class="line"><span>                sleep(1);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ gcc progxyz.c -o progxyz</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ./progxyz &amp;</span></span>
<span class="line"><span>[1] 350498</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>運行該程序，你可以使用 <code>pgrep</code> 或 <code>ps</code> 找到它的 PID。記下 PID：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pgrep progxyz</span></span>
<span class="line"><span>350498</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ps -ef | grep progxyz</span></span>
<span class="line"><span>root      350498  345445  0 03:29 pts/1    00:00:00 ./progxyz</span></span>
<span class="line"><span>root      350508  347350  0 03:29 pts/0    00:00:00 grep --color=auto progxyz</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>當測試進程正在運行時，調用 <code>procdump</code> 並提供 PID。下面的輸出表明瞭該進程的名稱和 PID，並報告它生成了一個核心轉儲文件，並顯示其文件名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ procdump -p 350498</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ProcDump v1.1.1 - Sysinternals process dump utility</span></span>
<span class="line"><span>Copyright (C) 2020 Microsoft Corporation. All rights reserved. Licensed under the MIT license.</span></span>
<span class="line"><span>Mark Russinovich, Mario Hewardt, John Salem, Javid Habibi</span></span>
<span class="line"><span>Monitors a process and writes a dump file when the process exceeds the</span></span>
<span class="line"><span>specified criteria.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Process:                progxyz (350498)</span></span>
<span class="line"><span>CPU Threshold:          n/a</span></span>
<span class="line"><span>Commit Threshold:       n/a</span></span>
<span class="line"><span>Polling interval (ms):  1000</span></span>
<span class="line"><span>Threshold (s):  10</span></span>
<span class="line"><span>Number of Dumps:        1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Press Ctrl-C to end monitoring without terminating the process.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[03:30:00 - INFO]: Timed:</span></span>
<span class="line"><span>[03:30:01 - INFO]: Core dump 0 generated: progxyz_time_2020-06-24_03:30:00.350498</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>列出當前目錄的內容，你應該可以看到新的核心文件。文件名與 <code>procdump</code> 命令顯示的文件名一致，日期、時間、PID 都會附加在文件名上：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l progxyz_time_2020-06-24_03\\:30\\:00.350498</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 356848 Jun 24 03:30 progxyz_time_2020-06-24_03:30:00.350498</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file progxyz_time_2020-06-24_03\\:30\\:00.350498</span></span>
<span class="line"><span>progxyz_time_2020-06-24_03:30:00.350498: ELF 64-bit LSB core file, x86-64, version 1 (SYSV), SVR4-style, from &#39;./progxyz&#39;, real uid: 0, effective uid: 0, real gid: 0, effective gid: 0, execfn: &#39;./progxyz&#39;, platform: &#39;x86_64&#39;</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="用-gnu-項目調試器分析核心文件。" tabindex="-1">用 GNU 項目調試器分析核心文件。 <a class="header-anchor" href="#用-gnu-項目調試器分析核心文件。" aria-label="Permalink to “用 GNU 項目調試器分析核心文件。”">​</a></h3>`,17)),a("p",null,[s[16]||(s[16]=n("要查看是否可以讀取該轉儲文件，調用 ",-1)),e(p,{href:"https://www.gnu.org/software/gdb/"},{default:i(()=>[...s[15]||(s[15]=[n("GNU 項目調試器",-1)])]),_:1}),s[17]||(s[17]=n("（",-1)),s[18]||(s[18]=a("code",null,"gdb",-1)),s[19]||(s[19]=n("）。記得提供測試二進制文件的路徑，這樣你就可以看到堆棧上所有的函數名。在這裏，",-1)),s[20]||(s[20]=a("code",null,"bt",-1)),s[21]||(s[21]=n("（回溯）表明，當轉儲被採集時，",-1)),s[22]||(s[22]=a("code",null,"sleep()",-1)),s[23]||(s[23]=n(" 函數正在執行：",-1))]),s[45]||(s[45]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gdb -q ./progxyz ./progxyz_time_2020-06-24_03\\:30\\:00.350498</span></span>
<span class="line"><span>Reading symbols from ./progxyz...(no debugging symbols found)...done.</span></span>
<span class="line"><span>[New LWP 350498]</span></span>
<span class="line"><span>Core was generated by \`./progxyz&#39;.</span></span>
<span class="line"><span>#0  0x00007fb6947e9208 in nanosleep () from /lib64/libc.so.6</span></span>
<span class="line"><span>Missing separate debuginfos, use: yum debuginfo-install glibc-2.28-101.el8.x86_64</span></span>
<span class="line"><span>(gdb) bt</span></span>
<span class="line"><span>#0  0x00007fb6947e9208 in nanosleep () from /lib64/libc.so.6</span></span>
<span class="line"><span>#1  0x00007fb6947e913e in sleep () from /lib64/libc.so.6</span></span>
<span class="line"><span>#2  0x00000000004005f3 in main ()</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><h3 id="gcore-怎麼樣" tabindex="-1">gcore 怎麼樣？ <a class="header-anchor" href="#gcore-怎麼樣" aria-label="Permalink to “gcore 怎麼樣？”">​</a></h3><p>Linux 用户會很快指出，Linux 已經有一個叫 <code>gcore</code> 的命令，大多數 Linux 發行版都有這個命令，它的作用和 ProcDump 完全一樣。你説的對。如果你從來沒有使用過它，可以嘗試用 <code>gcore</code> 來轉儲一個進程的核心。再次運行測試程序，然後運行 <code>gcore</code>，並提供 PID 作為參數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./progxyz &amp;</span></span>
<span class="line"><span>[1] 350664</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ pgrep progxyz</span></span>
<span class="line"><span>350664</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ gcore 350664</span></span>
<span class="line"><span>0x00007fefd3be2208 in nanosleep () from /lib64/libc.so.6</span></span>
<span class="line"><span>Saved corefile core.350664</span></span>
<span class="line"><span>[Inferior 1 (process 350664) detached]</span></span>
<span class="line"><span>$</span></span></code></pre></div><p><code>gcore</code> 打印一條消息，説它已將核心文件保存到一個特定的文件中。檢查當前目錄，找到這個核心文件，然後再次使用 <code>gdb</code> 加載它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l  core.350664</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 356848 Jun 24 03:34 core.350664</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file core.350664</span></span>
<span class="line"><span>core.350664: ELF 64-bit LSB core file, x86-64, version 1 (SYSV), SVR4-style, from &#39;./progxyz&#39;, real uid: 0, effective uid: 0, real gid: 0, effective gid: 0, execfn: &#39;./progxyz&#39;, platform: &#39;x86_64&#39;</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ gdb -q ./progxyz ./core.350664</span></span>
<span class="line"><span>Reading symbols from ./progxyz...(no debugging symbols found)...done.</span></span>
<span class="line"><span>[New LWP 350664]</span></span>
<span class="line"><span>Core was generated by \`./progxyz&#39;.</span></span>
<span class="line"><span>#0  0x00007fefd3be2208 in nanosleep () from /lib64/libc.so.6</span></span>
<span class="line"><span>Missing separate debuginfos, use: yum debuginfo-install glibc-2.28-101.el8.x86_64</span></span>
<span class="line"><span>(gdb) bt</span></span>
<span class="line"><span>#0  0x00007fefd3be2208 in nanosleep () from /lib64/libc.so.6</span></span>
<span class="line"><span>#1  0x00007fefd3be213e in sleep () from /lib64/libc.so.6</span></span>
<span class="line"><span>#2  0x00000000004005f3 in main ()</span></span>
<span class="line"><span>(gdb) q</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>為了使 <code>gcore</code> 可以工作，你需要確保以下設置到位。首先，確保為核心文件設置了 <code>ulimit</code>，如果設置為 <code>0</code>，核心文件將不會被生成。第二，確保 <code>/proc/sys/kernel/core_pattern</code> 有正確的設置來指定核心模式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ulimit -c</span></span>
<span class="line"><span>unlimited</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="你應該使用-procdump-還是-gcore" tabindex="-1">你應該使用 ProcDump 還是 gcore？ <a class="header-anchor" href="#你應該使用-procdump-還是-gcore" aria-label="Permalink to “你應該使用 ProcDump 還是 gcore？”">​</a></h3><p>有幾種情況下，你可能更喜歡使用 ProcDump 而不是 gcore，ProcDump 有一些內置的功能，在一些情況下可能很有用。</p><h4 id="等待測試二進制文件的執行" tabindex="-1">等待測試二進制文件的執行 <a class="header-anchor" href="#等待測試二進制文件的執行" aria-label="Permalink to “等待測試二進制文件的執行”">​</a></h4><p>無論是使用 ProcDump 還是 gcore，測試進程必須被執行並處於運行狀態，這樣才能提供一個 PID 來生成核心文件。但 ProcDump 有一個功能，就是等待特定的二進制文件運行，一旦發現運行的測試二進制文件與給定的名稱相匹配，它就會為該測試二進制文件生成一個核心文件。它可以使用 <code>-w</code> 參數和程序名稱而不是 PID 來啓用。這個功能在測試程序快速退出的情況下很有用。</p><p>下面是它的工作原理。在這個例子中，沒有名為 <code>progxyz</code> 的進程在運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pgrep progxyz</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>用 <code>-w</code> 參數調用 <code>procdump</code>，讓它保持等待。在另一個終端，調用測試二進制 <code>progxyz</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ procdump -w progxyz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ProcDump v1.1.1 - Sysinternals process dump utility</span></span>
<span class="line"><span>Copyright (C) 2020 Microsoft Corporation. All rights reserved. Licensed under the MIT license.</span></span>
<span class="line"><span>Mark Russinovich, Mario Hewardt, John Salem, Javid Habibi</span></span>
<span class="line"><span>Monitors a process and writes a dump file when the process exceeds the</span></span>
<span class="line"><span>specified criteria.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Process:                progxyz (pending)</span></span>
<span class="line"><span>CPU Threshold:          n/a</span></span>
<span class="line"><span>Commit Threshold:       n/a</span></span>
<span class="line"><span>Polling interval (ms):  1000</span></span>
<span class="line"><span>Threshold (s):  10</span></span>
<span class="line"><span>Number of Dumps:        1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Press Ctrl-C to end monitoring without terminating the process.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[03:39:23 - INFO]: Waiting for process &#39;progxyz&#39; to launch...</span></span></code></pre></div><p>然後，從另一個終端調用測試二進制 <code>progxyz</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./progxyz &amp;</span></span>
<span class="line"><span>[1] 350951</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>ProcDump 立即檢測到該二進制正在運行，並轉儲這個二進制的核心文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[03:39:23 - INFO]: Waiting for process &#39;progxyz&#39; to launch...</span></span>
<span class="line"><span>[03:43:22 - INFO]: Found process with PID 350951</span></span>
<span class="line"><span>[03:43:22 - INFO]: Timed:</span></span>
<span class="line"><span>[03:43:23 - INFO]: Core dump 0 generated: progxyz_time_2020-06-24_03:43:22.350951</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ls -l progxyz_time_2020-06-24_03\\:43\\:22.350951</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 356848 Jun 24 03:43 progxyz_time_2020-06-24_03:43:22.350951</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file progxyz_time_2020-06-24_03\\:43\\:22.350951</span></span>
<span class="line"><span>progxyz_time_2020-06-24_03:43:22.350951: ELF 64-bit LSB core file, x86-64, version 1 (SYSV), SVR4-style, from &#39;./progxyz&#39;, real uid: 0, effective uid: 0, real gid: 0, effective gid: 0, execfn: &#39;./progxyz&#39;, platform: &#39;x86_64&#39;</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="多個核心轉儲" tabindex="-1">多個核心轉儲 <a class="header-anchor" href="#多個核心轉儲" aria-label="Permalink to “多個核心轉儲”">​</a></h4><p>另一個重要的 ProcDump 功能是，你可以通過使用命令列參數 <code>-n &lt;count&gt;</code> 指定要生成多少個核心文件。核心轉儲之間的默認時間間隔是 <code>10</code> 秒，但你可以使用 <code>-s &lt;sec&gt;</code> 參數修改。這個例子使用 ProcDump 對測試二進制文件進行了三次核心轉儲：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./progxyz &amp;</span></span>
<span class="line"><span>[1] 351014</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ procdump -n 3 -p 351014</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ProcDump v1.1.1 - Sysinternals process dump utility</span></span>
<span class="line"><span>Copyright (C) 2020 Microsoft Corporation. All rights reserved. Licensed under the MIT license.</span></span>
<span class="line"><span>Mark Russinovich, Mario Hewardt, John Salem, Javid Habibi</span></span>
<span class="line"><span>Monitors a process and writes a dump file when the process exceeds the</span></span>
<span class="line"><span>specified criteria.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Process:                progxyz (351014)</span></span>
<span class="line"><span>CPU Threshold:          n/a</span></span>
<span class="line"><span>Commit Threshold:       n/a</span></span>
<span class="line"><span>Polling interval (ms):  1000</span></span>
<span class="line"><span>Threshold (s):  10</span></span>
<span class="line"><span>Number of Dumps:        3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Press Ctrl-C to end monitoring without terminating the process.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[03:45:20 - INFO]: Timed:</span></span>
<span class="line"><span>[03:45:21 - INFO]: Core dump 0 generated: progxyz_time_2020-06-24_03:45:20.351014</span></span>
<span class="line"><span>[03:45:31 - INFO]: Timed:</span></span>
<span class="line"><span>[03:45:32 - INFO]: Core dump 1 generated: progxyz_time_2020-06-24_03:45:31.351014</span></span>
<span class="line"><span>[03:45:42 - INFO]: Timed:</span></span>
<span class="line"><span>[03:45:44 - INFO]: Core dump 2 generated: progxyz_time_2020-06-24_03:45:42.351014</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l progxyz_time_2020-06-24_03\\:45\\:*</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 356848 Jun 24 03:45 progxyz_time_2020-06-24_03:45:20.351014</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 356848 Jun 24 03:45 progxyz_time_2020-06-24_03:45:31.351014</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 356848 Jun 24 03:45 progxyz_time_2020-06-24_03:45:42.351014</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="基於-cpu-和內存使用情況的核心轉儲" tabindex="-1">基於 CPU 和內存使用情況的核心轉儲 <a class="header-anchor" href="#基於-cpu-和內存使用情況的核心轉儲" aria-label="Permalink to “基於 CPU 和內存使用情況的核心轉儲”">​</a></h4><p>ProcDump 還可以讓你在測試二進制或進程達到一定的 CPU 或內存閾值時觸發核心轉儲。ProcDump 的手冊頁顯示了調用 ProcDump 時使用的命令列參數：</p><ul><li><code>-C</code>：當 CPU 超過或等於指定值時，觸發核心轉儲生成（0 到 100 * nCPU）。</li><li><code>-c</code>：當 CPU 小於指定值時，觸發核心轉儲生成（0 到 100 * nCPU）。</li><li><code>-M</code>：當內存提交超過或等於指定值（MB）時，觸發核心轉儲生成。</li><li><code>-m</code>：當內存提交小於指定值（MB）時，觸發核心轉儲生成。</li><li><code>-T</code>：當線程數超過或等於指定值時觸發。</li><li><code>-F</code>：當文件描述符數量超過或等於指定值時觸發。</li><li><code>-I</code>：輪詢頻率，單位為毫秒（默認為 1000）。</li></ul><p>例如，當給定 PID 的 CPU 使用率超過 70% 時，可以要求 ProcDump 轉儲核心：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>procdump -C 70 -n 3 -p 351014</span></span></code></pre></div><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>ProcDump 是一長串被移植到 Linux 的 Windows 程序中的一個有趣的補充。它不僅為 Linux 用户提供了額外的工具選擇，而且可以讓 Windows 用户在 Linux 上工作時更有熟悉的感覺。</p><hr>`,31)),a("p",null,[s[25]||(s[25]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/7/procdump-linux"},{default:i(()=>[...s[24]||(s[24]=[n("https://opensource.com/article/20/7/procdump-linux",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/gkamathe"},{default:i(()=>[...s[26]||(s[26]=[n("Gaurav Kamathe",-1)])]),_:1}),s[31]||(s[31]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[27]||(s[27]=[n("lujun9972",-1)])]),_:1}),s[32]||(s[32]=n(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[28]||(s[28]=[n("wxy",-1)])]),_:1}),s[33]||(s[33]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[29]||(s[29]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[34]||(s[34]=[n("LCTT",-1)])]),_:1}),s[37]||(s[37]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[35]||(s[35]=[n("Linux中國",-1)])]),_:1}),s[38]||(s[38]=n(" 榮譽推出",-1))])])}const P=o(d,[["render",g]]);export{y as __pageData,P as default};
