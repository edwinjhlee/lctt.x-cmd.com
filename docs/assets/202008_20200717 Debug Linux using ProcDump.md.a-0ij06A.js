import{_ as o,a0 as r,w as t,s as c,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"使用微软的 ProcDump 调试 Linux 进程 | LCTT x X-CMD","titleTemplate":false,"description":"使用微软的 ProcDump 调试 Linux 进程 | LCTT (202008) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用微软的 ProcDump 调试 Linux 进程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用微软的 ProcDump 调试 Linux 进程 | LCTT (202008) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202008/20200717 Debug Linux using ProcDump","title":"使用微软的 ProcDump 调试 Linux 进程","tag":"202008","desc":""},"relativePath":"202008/20200717 Debug Linux using ProcDump.md","filePath":"[post].md"}'),d={name:"202008/20200717 Debug Linux using ProcDump.md"};function g(u,s,h,m,b,k){const p=r("Link");return t(),c("div",null,[s[39]||(s[39]=a("h1",{id:"使用微软的-procdump-调试-linux-进程",tabindex:"-1"},[n("使用微软的 ProcDump 调试 Linux 进程 "),a("a",{class:"header-anchor",href:"#使用微软的-procdump-调试-linux-进程","aria-label":"Permalink to “使用微软的 ProcDump 调试 Linux 进程”"},"​")],-1)),s[40]||(s[40]=a("blockquote",null,[a("p",null,"用这个微软的开源工具，获取进程信息。")],-1)),s[41]||(s[41]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202008/20/095646k5wz7cd11vyc7lhr.jpg",alt:""})],-1)),a("p",null,[s[3]||(s[3]=n("微软越来越心仪 Linux 和开源，这并不是什么秘密。在过去几年中，该公司稳步地增加了对开源的贡献，包括将其部分软件和工具移植到 Linux。2018 年底，微软",-1)),e(p,{href:"https://www.zdnet.com/article/microsoft-working-on-porting-sysinternals-to-linux/"},{default:i(()=>[...s[0]||(s[0]=[n("宣布",-1)])]),_:1}),s[4]||(s[4]=n("将其 ",-1)),e(p,{href:"https://docs.microsoft.com/en-us/sysinternals/"},{default:i(()=>[...s[1]||(s[1]=[n("Sysinternals",-1)])]),_:1}),s[5]||(s[5]=n(" 的部分工具以开源的方式移植到 Linux，",-1)),e(p,{href:"https://github.com/Microsoft/ProcDump-for-Linux"},{default:i(()=>[...s[2]||(s[2]=[n("Linux 版的 ProcDump",-1)])]),_:1}),s[6]||(s[6]=n("是其中的第一个。",-1))]),s[42]||(s[42]=a("p",null,"如果你在 Windows 上从事过调试或故障排除工作，你可能听说过 Sysinternals，它是一个“瑞士军刀”工具集，可以帮助系统管理员、开发人员和 IT 安全专家监控和排除 Windows 环境的故障。",-1)),a("p",null,[s[8]||(s[8]=n("Sysinternals 最受欢迎的工具之一是 ",-1)),e(p,{href:"https://docs.microsoft.com/en-us/sysinternals/downloads/procdump"},{default:i(()=>[...s[7]||(s[7]=[n("ProcDump",-1)])]),_:1}),s[9]||(s[9]=n("。顾名思义，它用于将正在运行的进程的内存转储到磁盘上的一个核心文件中。然后可以用调试器对这个核心文件进行分析，了解转储时进程的状态。因为之前用过 Sysinternals，所以我很想试试 ProcDump 的 Linux 移植版。",-1))]),s[43]||(s[43]=l(`<h3 id="开始使用-linux-上的-procdump" tabindex="-1">开始使用 Linux 上的 ProcDump <a class="header-anchor" href="#开始使用-linux-上的-procdump" aria-label="Permalink to “开始使用 Linux 上的 ProcDump”">​</a></h3><p>要试用 Linux 上的 ProcDump，你需要下载该工具并编译它。（我使用的是 Red Hat Enterprise Linux，尽管这些步骤在其他 Linux 发行版上应该是一样的）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /etc/redhat-release</span></span>
<span class="line"><span>Red Hat Enterprise Linux release 8.2 (Ootpa)</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ uname -r</span></span>
<span class="line"><span>4.18.0-193.el8.x86_64</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>首先，克隆 Linux 版 ProcDump 的版本库。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git clone https://github.com/microsoft/ProcDump-for-Linux.git</span></span>
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
<span class="line"><span>$</span></span></code></pre></div>`,5)),a("p",null,[s[11]||(s[11]=n("接下来，使用 ",-1)),s[12]||(s[12]=a("code",null,"make",-1)),s[13]||(s[13]=n(" 构建程序。它能准确地输出编译源文件所需的 ",-1)),e(p,{href:"https://gcc.gnu.org/"},{default:i(()=>[...s[10]||(s[10]=[n("GCC",-1)])]),_:1}),s[14]||(s[14]=n(" 命令行参数。",-1))]),s[44]||(s[44]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><p>编译过程中会创建两个新的目录。第一个是 <code>obj/</code> 目录，存放编译期间创建的对象文件。第二个（也是更重要的）目录是 <code>bin/</code>，它是存储编译出的 <code>procdump</code> 程序的地方。它还会编译另一个名为 <code>ProcDumpTestApplication</code> 的测试二进制文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls obj/</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><p>在此情况下，每次运行 <code>procdump</code> 实用程序时，你都必须移动到 <code>bin/</code> 文件夹中。要使它在系统中的任何地方都可以使用，运行 <code>make install</code>。这将这个二进制文件复制到通常的 <code>bin/</code> 目录中，它是你的 shell <code>$PATH</code> 的一部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ which procdump</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><p>安装时，ProcDump 提供了一个手册页，你可以用 <code>man procdump</code> 访问：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ man procdump</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="运行-procdump" tabindex="-1">运行 ProcDump <a class="header-anchor" href="#运行-procdump" aria-label="Permalink to “运行 ProcDump”">​</a></h3><p>要转储一个进程的内存，你需要向 ProcDump 提供它的进程 ID（PID）。你可以使用机器上任何正在运行的程序或守护进程。在这个例子中，我将使用一个永远循环的小 C 程序。编译程序并运行它（要退出程序，按 <code>Ctrl+C</code>，如果程序在后台运行，则使用 <code>kill</code> 命令并输入 PID）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat progxyz.c</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><p>运行该程序，你可以使用 <code>pgrep</code> 或 <code>ps</code> 找到它的 PID。记下 PID：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pgrep progxyz</span></span>
<span class="line"><span>350498</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ps -ef | grep progxyz</span></span>
<span class="line"><span>root      350498  345445  0 03:29 pts/1    00:00:00 ./progxyz</span></span>
<span class="line"><span>root      350508  347350  0 03:29 pts/0    00:00:00 grep --color=auto progxyz</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>当测试进程正在运行时，调用 <code>procdump</code> 并提供 PID。下面的输出表明了该进程的名称和 PID，并报告它生成了一个核心转储文件，并显示其文件名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ procdump -p 350498</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><p>列出当前目录的内容，你应该可以看到新的核心文件。文件名与 <code>procdump</code> 命令显示的文件名一致，日期、时间、PID 都会附加在文件名上：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l progxyz_time_2020-06-24_03\\:30\\:00.350498</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 356848 Jun 24 03:30 progxyz_time_2020-06-24_03:30:00.350498</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file progxyz_time_2020-06-24_03\\:30\\:00.350498</span></span>
<span class="line"><span>progxyz_time_2020-06-24_03:30:00.350498: ELF 64-bit LSB core file, x86-64, version 1 (SYSV), SVR4-style, from &#39;./progxyz&#39;, real uid: 0, effective uid: 0, real gid: 0, effective gid: 0, execfn: &#39;./progxyz&#39;, platform: &#39;x86_64&#39;</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="用-gnu-项目调试器分析核心文件。" tabindex="-1">用 GNU 项目调试器分析核心文件。 <a class="header-anchor" href="#用-gnu-项目调试器分析核心文件。" aria-label="Permalink to “用 GNU 项目调试器分析核心文件。”">​</a></h3>`,17)),a("p",null,[s[16]||(s[16]=n("要查看是否可以读取该转储文件，调用 ",-1)),e(p,{href:"https://www.gnu.org/software/gdb/"},{default:i(()=>[...s[15]||(s[15]=[n("GNU 项目调试器",-1)])]),_:1}),s[17]||(s[17]=n("（",-1)),s[18]||(s[18]=a("code",null,"gdb",-1)),s[19]||(s[19]=n("）。记得提供测试二进制文件的路径，这样你就可以看到堆栈上所有的函数名。在这里，",-1)),s[20]||(s[20]=a("code",null,"bt",-1)),s[21]||(s[21]=n("（回溯）表明，当转储被采集时，",-1)),s[22]||(s[22]=a("code",null,"sleep()",-1)),s[23]||(s[23]=n(" 函数正在执行：",-1))]),s[45]||(s[45]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gdb -q ./progxyz ./progxyz_time_2020-06-24_03\\:30\\:00.350498</span></span>
<span class="line"><span>Reading symbols from ./progxyz...(no debugging symbols found)...done.</span></span>
<span class="line"><span>[New LWP 350498]</span></span>
<span class="line"><span>Core was generated by \`./progxyz&#39;.</span></span>
<span class="line"><span>#0  0x00007fb6947e9208 in nanosleep () from /lib64/libc.so.6</span></span>
<span class="line"><span>Missing separate debuginfos, use: yum debuginfo-install glibc-2.28-101.el8.x86_64</span></span>
<span class="line"><span>(gdb) bt</span></span>
<span class="line"><span>#0  0x00007fb6947e9208 in nanosleep () from /lib64/libc.so.6</span></span>
<span class="line"><span>#1  0x00007fb6947e913e in sleep () from /lib64/libc.so.6</span></span>
<span class="line"><span>#2  0x00000000004005f3 in main ()</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><h3 id="gcore-怎么样" tabindex="-1">gcore 怎么样？ <a class="header-anchor" href="#gcore-怎么样" aria-label="Permalink to “gcore 怎么样？”">​</a></h3><p>Linux 用户会很快指出，Linux 已经有一个叫 <code>gcore</code> 的命令，大多数 Linux 发行版都有这个命令，它的作用和 ProcDump 完全一样。你说的对。如果你从来没有使用过它，可以尝试用 <code>gcore</code> 来转储一个进程的核心。再次运行测试程序，然后运行 <code>gcore</code>，并提供 PID 作为参数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./progxyz &amp;</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><p><code>gcore</code> 打印一条消息，说它已将核心文件保存到一个特定的文件中。检查当前目录，找到这个核心文件，然后再次使用 <code>gdb</code> 加载它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><p>为了使 <code>gcore</code> 可以工作，你需要确保以下设置到位。首先，确保为核心文件设置了 <code>ulimit</code>，如果设置为 <code>0</code>，核心文件将不会被生成。第二，确保 <code>/proc/sys/kernel/core_pattern</code> 有正确的设置来指定核心模式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ulimit -c</span></span>
<span class="line"><span>unlimited</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="你应该使用-procdump-还是-gcore" tabindex="-1">你应该使用 ProcDump 还是 gcore？ <a class="header-anchor" href="#你应该使用-procdump-还是-gcore" aria-label="Permalink to “你应该使用 ProcDump 还是 gcore？”">​</a></h3><p>有几种情况下，你可能更喜欢使用 ProcDump 而不是 gcore，ProcDump 有一些内置的功能，在一些情况下可能很有用。</p><h4 id="等待测试二进制文件的执行" tabindex="-1">等待测试二进制文件的执行 <a class="header-anchor" href="#等待测试二进制文件的执行" aria-label="Permalink to “等待测试二进制文件的执行”">​</a></h4><p>无论是使用 ProcDump 还是 gcore，测试进程必须被执行并处于运行状态，这样才能提供一个 PID 来生成核心文件。但 ProcDump 有一个功能，就是等待特定的二进制文件运行，一旦发现运行的测试二进制文件与给定的名称相匹配，它就会为该测试二进制文件生成一个核心文件。它可以使用 <code>-w</code> 参数和程序名称而不是 PID 来启用。这个功能在测试程序快速退出的情况下很有用。</p><p>下面是它的工作原理。在这个例子中，没有名为 <code>progxyz</code> 的进程在运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pgrep progxyz</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>用 <code>-w</code> 参数调用 <code>procdump</code>，让它保持等待。在另一个终端，调用测试二进制 <code>progxyz</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ procdump -w progxyz</span></span>
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
<span class="line"><span>[03:39:23 - INFO]: Waiting for process &#39;progxyz&#39; to launch...</span></span></code></pre></div><p>然后，从另一个终端调用测试二进制 <code>progxyz</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./progxyz &amp;</span></span>
<span class="line"><span>[1] 350951</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>ProcDump 立即检测到该二进制正在运行，并转储这个二进制的核心文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[03:39:23 - INFO]: Waiting for process &#39;progxyz&#39; to launch...</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h4 id="多个核心转储" tabindex="-1">多个核心转储 <a class="header-anchor" href="#多个核心转储" aria-label="Permalink to “多个核心转储”">​</a></h4><p>另一个重要的 ProcDump 功能是，你可以通过使用命令行参数 <code>-n &lt;count&gt;</code> 指定要生成多少个核心文件。核心转储之间的默认时间间隔是 <code>10</code> 秒，但你可以使用 <code>-s &lt;sec&gt;</code> 参数修改。这个例子使用 ProcDump 对测试二进制文件进行了三次核心转储：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./progxyz &amp;</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h4 id="基于-cpu-和内存使用情况的核心转储" tabindex="-1">基于 CPU 和内存使用情况的核心转储 <a class="header-anchor" href="#基于-cpu-和内存使用情况的核心转储" aria-label="Permalink to “基于 CPU 和内存使用情况的核心转储”">​</a></h4><p>ProcDump 还可以让你在测试二进制或进程达到一定的 CPU 或内存阈值时触发核心转储。ProcDump 的手册页显示了调用 ProcDump 时使用的命令行参数：</p><ul><li><code>-C</code>：当 CPU 超过或等于指定值时，触发核心转储生成（0 到 100 * nCPU）。</li><li><code>-c</code>：当 CPU 小于指定值时，触发核心转储生成（0 到 100 * nCPU）。</li><li><code>-M</code>：当内存提交超过或等于指定值（MB）时，触发核心转储生成。</li><li><code>-m</code>：当内存提交小于指定值（MB）时，触发核心转储生成。</li><li><code>-T</code>：当线程数超过或等于指定值时触发。</li><li><code>-F</code>：当文件描述符数量超过或等于指定值时触发。</li><li><code>-I</code>：轮询频率，单位为毫秒（默认为 1000）。</li></ul><p>例如，当给定 PID 的 CPU 使用率超过 70% 时，可以要求 ProcDump 转储核心：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>procdump -C 70 -n 3 -p 351014</span></span></code></pre></div><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>ProcDump 是一长串被移植到 Linux 的 Windows 程序中的一个有趣的补充。它不仅为 Linux 用户提供了额外的工具选择，而且可以让 Windows 用户在 Linux 上工作时更有熟悉的感觉。</p><hr>`,31)),a("p",null,[s[25]||(s[25]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/7/procdump-linux"},{default:i(()=>[...s[24]||(s[24]=[n("https://opensource.com/article/20/7/procdump-linux",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/gkamathe"},{default:i(()=>[...s[26]||(s[26]=[n("Gaurav Kamathe",-1)])]),_:1}),s[31]||(s[31]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[27]||(s[27]=[n("lujun9972",-1)])]),_:1}),s[32]||(s[32]=n(" 译者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[28]||(s[28]=[n("wxy",-1)])]),_:1}),s[33]||(s[33]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[29]||(s[29]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[34]||(s[34]=[n("LCTT",-1)])]),_:1}),s[37]||(s[37]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[35]||(s[35]=[n("Linux中国",-1)])]),_:1}),s[38]||(s[38]=n(" 荣誉推出",-1))])])}const P=o(d,[["render",g]]);export{y as __pageData,P as default};
