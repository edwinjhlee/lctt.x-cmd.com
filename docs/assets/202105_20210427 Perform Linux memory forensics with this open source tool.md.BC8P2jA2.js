import{_ as t,a0 as o,w as c,s as r,I as a,x as n,a1 as i,A as l,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"使用开源工具进行 Linux 内存取证 | LCTT x X-CMD","titleTemplate":false,"description":"使用开源工具进行 Linux 内存取证 | LCTT (202105) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用开源工具进行 Linux 内存取证 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用开源工具进行 Linux 内存取证 | LCTT (202105) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202105/20210427 Perform Linux memory forensics with this open source tool","title":"使用开源工具进行 Linux 内存取证","tag":"202105","desc":""},"relativePath":"202105/20210427 Perform Linux memory forensics with this open source tool.md","filePath":"[post].md"}'),d={name:"202105/20210427 Perform Linux memory forensics with this open source tool.md"};function h(u,s,f,g,m,k){const p=o("Link");return c(),r("div",null,[s[23]||(s[23]=a("h1",{id:"使用开源工具进行-linux-内存取证",tabindex:"-1"},[n("使用开源工具进行 Linux 内存取证 "),a("a",{class:"header-anchor",href:"#使用开源工具进行-linux-内存取证","aria-label":"Permalink to “使用开源工具进行 Linux 内存取证”"},"​")],-1)),s[24]||(s[24]=a("blockquote",null,[a("p",null,"利用 Volatility 找出应用程序、网络连接、内核模块、文件等方面的情况。")],-1)),s[25]||(s[25]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202105/26/111959fzkhzf7q3qwmhh7z.jpg",alt:""})],-1)),s[26]||(s[26]=a("p",null,"计算机的操作系统和应用使用主内存（RAM）来执行不同的任务。这种易失性内存包含大量关于运行应用、网络连接、内核模块、打开的文件以及几乎所有其他的内容信息，但这些信息每次计算机重启的时候都会被清除。",-1)),a("p",null,[s[1]||(s[1]=a("ruby",null,[n("内存取证"),a("rt",null,"Memory forensics")],-1)),s[2]||(s[2]=n("是一种从内存中找到和抽取这些有价值的信息的方式。",-1)),i(p,{href:"https://github.com/volatilityfoundation/volatility"},{default:l(()=>[...s[0]||(s[0]=[n("Volatility",-1)])]),_:1}),s[3]||(s[3]=n(" 是一种使用插件来处理这类信息的开源工具。但是，存在一个问题：在你处理这些信息前，必须将物理内存转储到一个文件中，而 Volatility 没有这种能力。",-1))]),s[27]||(s[27]=e(`<p>因此，这篇文章分为两部分：</p><ul><li>第一部分是处理获取物理内存并将其转储到一个文件中。</li><li>第二部分使用 Volatility 从这个内存转储中读取并处理这些信息。</li></ul><p>我在本教程中使用了以下测试系统，不过它可以在任何 Linux 发行版上工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /etc/redhat-release</span></span>
<span class="line"><span>Red Hat Enterprise Linux release 8.3 (Ootpa)</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ uname -r</span></span>
<span class="line"><span>4.18.0-240.el8.x86_64</span></span>
<span class="line"><span>$</span></span></code></pre></div><blockquote><p><strong>注意事项：</strong> 部分 1 涉及到编译和加载一个内核模块。不要担心：它并不像听起来那么困难。</p><p>一些指南：</p><ul><li>按照以下的步骤。</li><li>不要在生产系统或你的主要计算机上尝试任何这些步骤。</li><li>始终使用测试的虚拟机（VM）来尝试，直到你熟悉使用这些工具并理解它们的工作原理为止。</li></ul></blockquote><h3 id="安装需要的包" tabindex="-1">安装需要的包 <a class="header-anchor" href="#安装需要的包" aria-label="Permalink to “安装需要的包”">​</a></h3><p>在开始之前安装必要的工具。如果你经常使用基于 Debian 的发行版，可以使用 <code>apt-get</code> 命令。这些包大多数提供了需要的内核信息和工具来编译代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ yum install kernel-headers kernel-devel gcc elfutils-libelf-devel make git libdwarf-tools python2-devel.x86_64-y</span></span></code></pre></div><h3 id="部分-1-使用-lime-获取内存并将其转储到一个文件中" tabindex="-1">部分 1：使用 LiME 获取内存并将其转储到一个文件中 <a class="header-anchor" href="#部分-1-使用-lime-获取内存并将其转储到一个文件中" aria-label="Permalink to “部分 1：使用 LiME 获取内存并将其转储到一个文件中”">​</a></h3><p>在开始分析内存之前，你需要一个内存转储供你使用。在实际的取证活动中，这可能来自一个被破坏或者被入侵的系统。这些信息通常会被收集和存储来分析入侵是如何发生的及其影响。由于你可能没有可用的内存转储，你可以获取你的测试 VM 的内存转储，并使用它来执行内存取证。</p>`,10)),a("p",null,[s[5]||(s[5]=a("ruby",null,[n("Linux 内存提取器"),a("rt",null,"Linux Memory Extractor")],-1)),s[6]||(s[6]=n("（",-1)),i(p,{href:"https://github.com/504ensicsLabs/LiME"},{default:l(()=>[...s[4]||(s[4]=[n("LiME",-1)])]),_:1}),s[7]||(s[7]=n("）是一个在 Linux 系统上获取内存很常用的工具。使用以下命令获得 LiME：",-1))]),s[28]||(s[28]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git clone https://github.com/504ensicsLabs/LiME.git</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ cd LiME/src/</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>deflate.c  disk.c  hash.c  lime.h  main.c  Makefile  Makefile.sample  tcp.c</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="构建-lime-内核模块" tabindex="-1">构建 LiME 内核模块 <a class="header-anchor" href="#构建-lime-内核模块" aria-label="Permalink to “构建 LiME 内核模块”">​</a></h4><p>在 <code>src</code> 文件夹下运行 <code>make</code> 命令。这会创建一个以 .ko 为扩展名的内核模块。理想情况下，在 <code>make</code> 结束时，<code>lime.ko</code> 文件会使用格式 <code>lime-&lt;your-kernel-version&gt;.ko</code> 被重命名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>make -C /lib/modules/4.18.0-240.el8.x86_64/build M=&quot;/root/LiME/src&quot; modules</span></span>
<span class="line"><span>make[1]: Entering directory &#39;/usr/src/kernels/4.18.0-240.el8.x86_64&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; 删节 &gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>make[1]: Leaving directory &#39;/usr/src/kernels/4.18.0-240.el8.x86_64&#39;</span></span>
<span class="line"><span>strip --strip-unneeded lime.ko</span></span>
<span class="line"><span>mv lime.ko lime-4.18.0-240.el8.x86_64.ko</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l lime-4.18.0-240.el8.x86_64.ko</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 25696 Apr 17 14:45 lime-4.18.0-240.el8.x86_64.ko</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file lime-4.18.0-240.el8.x86_64.ko</span></span>
<span class="line"><span>lime-4.18.0-240.el8.x86_64.ko: ELF 64-bit LSB relocatable, x86-64, version 1 (SYSV), BuildID[sha1]=1d0b5cf932389000d960a7e6b57c428b8e46c9cf, not stripped</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="加载lime-内核模块" tabindex="-1">加载LiME 内核模块 <a class="header-anchor" href="#加载lime-内核模块" aria-label="Permalink to “加载LiME 内核模块”">​</a></h4><p>现在是时候加载内核模块来获取系统内存了。<code>insmod</code> 命令会帮助加载内核模块；模块一旦被加载，会在你的系统上读取主内存（RAM）并且将内存的内容转储到命令行所提供的 <code>path</code> 目录下的文件中。另一个重要的参数是 <code>format</code>；保持 <code>lime</code> 的格式，如下所示。在插入内核模块之后，使用 <code>lsmod</code> 命令验证它是否真的被加载。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ lsmod  | grep lime</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ insmod ./lime-4.18.0-240.el8.x86_64.ko &quot;path=../RHEL8.3_64bit.mem format=lime&quot;</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ lsmod  | grep lime</span></span>
<span class="line"><span>lime                   16384  0</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>你应该看到给 <code>path</code> 命令的文件已经创建好了，而且文件大小与你系统的物理内存（RAM）大小相同（并不奇怪）。一旦你有了内存转储，你就可以使用 <code>rmmod</code> 命令删除该内核模块：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l ~/LiME/RHEL8.3_64bit.mem</span></span>
<span class="line"><span>-r--r--r--. 1 root root 4294544480 Apr 17 14:47 /root/LiME/RHEL8.3_64bit.mem</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ du -sh ~/LiME/RHEL8.3_64bit.mem</span></span>
<span class="line"><span>4.0G    /root/LiME/RHEL8.3_64bit.mem</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ free -m</span></span>
<span class="line"><span>              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span>Mem:           3736         220         366           8        3149        3259</span></span>
<span class="line"><span>Swap:          4059           8        4051</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ rmmod lime</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ lsmod  | grep lime</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="内存转储中是什么" tabindex="-1">内存转储中是什么？ <a class="header-anchor" href="#内存转储中是什么" aria-label="Permalink to “内存转储中是什么？”">​</a></h4><p>这个内存转储文件只是原始数据，就像使用 <code>file</code> 命令可以看到的一样。你不可能通过手动去理解它；是的，在这里边有一些 ASCII 字符，但是你无法用编辑器打开这个文件并把它读出来。<code>hexdump</code> 的输出显示，最初的几个字节是 <code>EmiL</code>；这是因为你的请求格式在上面的命令行中是 <code>lime</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ file ~/LiME/RHEL8.3_64bit.mem</span></span>
<span class="line"><span>/root/LiME/RHEL8.3_64bit.mem: data</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ hexdump -C ~/LiME/RHEL8.3_64bit.mem | head</span></span>
<span class="line"><span>00000000  45 4d 69 4c 01 00 00 00  00 10 00 00 00 00 00 00  |EMiL............|</span></span>
<span class="line"><span>00000010  ff fb 09 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|</span></span>
<span class="line"><span>00000020  b8 fe 4c cd 21 44 00 32  20 00 00 2a 2a 2a 2a 2a  |..L.!D.2 ..*****|</span></span>
<span class="line"><span>00000030  2a 2a 2a 2a 2a 2a 2a 2a  2a 2a 2a 2a 2a 2a 2a 2a  |****************|</span></span>
<span class="line"><span>00000040  2a 2a 2a 2a 2a 2a 2a 2a  2a 2a 2a 2a 2a 20 00 20  |************* . |</span></span>
<span class="line"><span>00000050  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|</span></span>
<span class="line"><span>*</span></span>
<span class="line"><span>00000080  00 00 00 00 00 00 00 00  00 00 00 00 70 78 65 6c  |............pxel|</span></span>
<span class="line"><span>00000090  69 6e 75 78 2e 30 00 00  00 00 00 00 00 00 00 00  |inux.0..........|</span></span>
<span class="line"><span>000000a0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="部分-2-获得-volatility-并使用它来分析你的内存转储" tabindex="-1">部分 2：获得 Volatility 并使用它来分析你的内存转储 <a class="header-anchor" href="#部分-2-获得-volatility-并使用它来分析你的内存转储" aria-label="Permalink to “部分 2：获得 Volatility 并使用它来分析你的内存转储”">​</a></h3><p>现在你有了要分析的示例内存转储，使用下面的命令获取 Volatility 软件。Volatility 已经用 Python 3 重写了，但是本教程使用的是用 Python 2 写的原始的 Volatility 包。如果你想用 Volatility 3 进行实验，可以从合适的 Git 仓库下载它，并在以下命令中使用 Python 3 而不是 Python 2：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git clone https://github.com/volatilityfoundation/volatility.git</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ cd volatility/</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>AUTHORS.txt    contrib      LEGAL.txt    Makefile     PKG-INFO     pyinstaller.spec  resources  tools       vol.py</span></span>
<span class="line"><span>CHANGELOG.txt  CREDITS.txt  LICENSE.txt  MANIFEST.in  pyinstaller  README.txt        setup.py   volatility</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>Volatility 使用两个 Python 库来实现某些功能，所以使用以下命令来安装它们。否则，在你运行 Volatility 工具时，你可能看到一些导入错误；你可以忽略它们，除非你正在运行的插件需要这些库；这种情况下，工具将会报错：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pip2 install pycrypto</span></span>
<span class="line"><span>$ pip2 install distorm3</span></span></code></pre></div><h4 id="列出-volatility-的-linux-配置文件" tabindex="-1">列出 Volatility 的 Linux 配置文件 <a class="header-anchor" href="#列出-volatility-的-linux-配置文件" aria-label="Permalink to “列出 Volatility 的 Linux 配置文件”">​</a></h4><p>你将要运行的第一个 Volatility 命令列出了可用的 Linux 配置文件，运行 Volatility 命令的主要入口点是 <code>vol.py</code> 脚本。使用 Python 2 解释器调用它并提供 <code>--info</code> 选项。为了缩小输出，查找以 Linux 开头的字符串。正如你所看到的，并没有很多 Linux 配置文件被列出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py --info  | grep ^Linux</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>LinuxAMD64PagedMemory          - Linux-specific AMD 64-bit address space.</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="构建你自己的-linux-配置文件" tabindex="-1">构建你自己的 Linux 配置文件 <a class="header-anchor" href="#构建你自己的-linux-配置文件" aria-label="Permalink to “构建你自己的 Linux 配置文件”">​</a></h4><p>Linux 发行版是多种多样的，并且是为不同架构而构建的。这就是为什么配置文件是必要的 —— Volatility 在提取信息前必须知道内存转储是从哪个系统和架构获得的。有一些 Volatility 命令可以找到这些信息；但是这个方法很费时。为了加快速度，可以使用以下命令构建一个自定义的 Linux 配置文件：</p><p>移动到 Volatility 仓库的 <code>tools/linux</code>目录下，运行 <code>make</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd tools/linux/</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ pwd</span></span>
<span class="line"><span>/root/volatility/tools/linux</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>kcore  Makefile  Makefile.enterprise  module.c</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ make</span></span>
<span class="line"><span>make -C //lib/modules/4.18.0-240.el8.x86_64/build CONFIG_DEBUG_INFO=y M=&quot;/root/volatility/tools/linux&quot; modules</span></span>
<span class="line"><span>make[1]: Entering directory &#39;/usr/src/kernels/4.18.0-240.el8.x86_64&#39;</span></span>
<span class="line"><span>&lt;&lt; 删节 &gt;&gt;</span></span>
<span class="line"><span>make[1]: Leaving directory &#39;/usr/src/kernels/4.18.0-240.el8.x86_64&#39;</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>你应该看到一个新的 <code>module.dwarf</code> 文件。你也需要 <code>/boot</code> 目录下的 <code>System.map</code> 文件，因为它包含了所有与当前运行的内核相关的符号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>kcore  Makefile  Makefile.enterprise  module.c  module.dwarf</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l module.dwarf</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 3987904 Apr 17 15:17 module.dwarf</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l /boot/System.map-4.18.0-240.el8.x86_64</span></span>
<span class="line"><span>-rw-------. 1 root root 4032815 Sep 23  2020 /boot/System.map-4.18.0-240.el8.x86_64</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>要创建一个自定义配置文件，移动回到 Volatility 目录并且运行下面的命令。第一个参数提供了一个自定义 .zip 文件，文件名是你自己命名的。我经常使用操作系统和内核版本来命名。下一个参数是前边创建的 <code>module.dwarf</code> 文件，最后一个参数是 <code>/boot</code> 目录下的 <code>System.map</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$</span></span>
<span class="line"><span>$ cd volatility/</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ zip volatility/plugins/overlays/linux/Redhat8.3_4.18.0-240.zip tools/linux/module.dwarf /boot/System.map-4.18.0-240.el8.x86_64</span></span>
<span class="line"><span>  adding: tools/linux/module.dwarf (deflated 91%)</span></span>
<span class="line"><span>  adding: boot/System.map-4.18.0-240.el8.x86_64 (deflated 79%)</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>现在自定义配置文件就准备好了，所以在前边给出的位置检查一下 .zip 文件是否被创建好。如果你想知道 Volatility 是否检测到这个自定义配置文件，再一次运行 <code>--info</code> 命令。现在，你应该可以在下边的列出的内容中看到新的配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l volatility/plugins/overlays/linux/Redhat8.3_4.18.0-240.zip</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 1190360 Apr 17 15:20 volatility/plugins/overlays/linux/Redhat8.3_4.18.0-240.zip</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ python2 vol.py --info  | grep Redhat</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>LinuxRedhat8_3_4_18_0-240x64 - A Profile for Linux Redhat8.3_4.18.0-240 x64</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="开始使用-volatility" tabindex="-1">开始使用 Volatility <a class="header-anchor" href="#开始使用-volatility" aria-label="Permalink to “开始使用 Volatility”">​</a></h4><p>现在你已经准备好去做一些真正的内存取证了。记住，Volatility 是由自定义的插件组成的，你可以针对内存转储来获得信息。命令的通用格式是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>python2 vol.py -f &lt;memory-dump-file-taken-by-Lime&gt; &lt;plugin-name&gt; --profile=&lt;name-of-our-custom-profile&gt;</span></span></code></pre></div><p>有了这些信息，运行 <code>linux_banner</code> 插件来看看你是否可从内存转储中识别正确的发行版信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_banner --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>Linux version 4.18.0-240.el8.x86_64 ([mockbuild@vm09.test.com][4]) (gcc version 8.3.1 20191121 (Red Hat 8.3.1-5) (GCC)) #1 SMP Wed Sep 23 05:13:10 EDT 2020</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="找到-linux-插件" tabindex="-1">找到 Linux 插件 <a class="header-anchor" href="#找到-linux-插件" aria-label="Permalink to “找到 Linux 插件”">​</a></h4><p>到现在都很顺利，所以现在你可能对如何找到所有 Linux 插件的名字比较好奇。有一个简单的技巧：运行 <code>--info</code> 命令并抓取 <code>linux_</code> 字符串。有各种各样的插件可用于不同的用途。这里列出一部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py --info  | grep linux_</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>linux_apihooks             - Checks for userland apihooks</span></span>
<span class="line"><span>linux_arp                  - Print the ARP table</span></span>
<span class="line"><span>linux_aslr_shift           - Automatically detect the Linux ASLR shift</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; 删节 &gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>linux_banner               - Prints the Linux banner information</span></span>
<span class="line"><span>linux_vma_cache            - Gather VMAs from the vm_area_struct cache</span></span>
<span class="line"><span>linux_volshell             - Shell in the memory image</span></span>
<span class="line"><span>linux_yarascan             - A shell in the Linux memory image</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>使用 <code>linux_psaux</code> 插件检查内存转储时系统上正在运行哪些进程。注意列表中的最后一个命令：它是你在转储之前运行的 <code>insmod</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_psaux --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>Pid    Uid    Gid    Arguments                                                      </span></span>
<span class="line"><span>1      0      0      /usr/lib/systemd/systemd --switched-root --system --deserialize 18</span></span>
<span class="line"><span>2      0      0      [kthreadd]                                                      </span></span>
<span class="line"><span>3      0      0      [rcu_gp]                                                        </span></span>
<span class="line"><span>4      0      0      [rcu_par_gp]                                                    </span></span>
<span class="line"><span>861    0      0      /usr/libexec/platform-python -Es /usr/sbin/tuned -l -P          </span></span>
<span class="line"><span>869    0      0      /usr/bin/rhsmcertd                                              </span></span>
<span class="line"><span>875    0      0      /usr/libexec/sssd/sssd_be --domain implicit_files --uid 0 --gid 0 --logger=files</span></span>
<span class="line"><span>878    0      0      /usr/libexec/sssd/sssd_nss --uid 0 --gid 0 --logger=files      </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; 删节 &gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>11064  89     89     qmgr -l -t unix -u                                              </span></span>
<span class="line"><span>227148 0      0      [kworker/0:0]                                                  </span></span>
<span class="line"><span>227298 0      0      -bash                                                          </span></span>
<span class="line"><span>227374 0      0      [kworker/u2:1]                                                  </span></span>
<span class="line"><span>227375 0      0      [kworker/0:2]                                                  </span></span>
<span class="line"><span>227884 0      0      [kworker/0:3]                                                  </span></span>
<span class="line"><span>228573 0      0      insmod ./lime-4.18.0-240.el8.x86_64.ko path=../RHEL8.3_64bit.mem format=lime</span></span>
<span class="line"><span>228576 0      0                                                                      </span></span>
<span class="line"><span>$</span></span></code></pre></div><p>想要知道系统的网络状态吗？运行 <code>linux_netstat</code> 插件来找到在内存转储期间网络连接的状态：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_netstat --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>UNIX 18113              systemd/1     /run/systemd/private</span></span>
<span class="line"><span>UNIX 11411              systemd/1     /run/systemd/notify</span></span>
<span class="line"><span>UNIX 11413              systemd/1     /run/systemd/cgroups-agent</span></span>
<span class="line"><span>UNIX 11415              systemd/1    </span></span>
<span class="line"><span>UNIX 11416              systemd/1    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; 删节 &gt;&gt;</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>接下来，使用 <code>linux_mount</code> 插件来看在内存转储期间哪些文件系统被挂载：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_mount --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>tmpfs                     /sys/fs/cgroup                      tmpfs        ro,nosuid,nodev,noexec                  </span></span>
<span class="line"><span>cgroup                    /sys/fs/cgroup/pids                 cgroup       rw,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>systemd-1                 /proc/sys/fs/binfmt_misc            autofs       rw,relatime                            </span></span>
<span class="line"><span>sunrpc                    /var/lib/nfs/rpc_pipefs             rpc_pipefs   rw,relatime                            </span></span>
<span class="line"><span>/dev/mapper/rhel_kvm--03--guest11-root /                                   xfs          rw,relatime                </span></span>
<span class="line"><span>tmpfs                     /dev/shm                            tmpfs        rw,nosuid,nodev                        </span></span>
<span class="line"><span>selinuxfs                 /sys/fs/selinux                     selinuxfs    rw,relatime</span></span>
<span class="line"><span>                                                      </span></span>
<span class="line"><span>&lt;&lt; 删节 &gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cgroup                    /sys/fs/cgroup/net_cls,net_prio     cgroup       rw,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>cgroup                    /sys/fs/cgroup/cpu,cpuacct          cgroup       rw,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>bpf                       /sys/fs/bpf                         bpf          rw,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>cgroup                    /sys/fs/cgroup/memory               cgroup       ro,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>cgroup                    /sys/fs/cgroup/cpuset               cgroup       rw,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>mqueue                    /dev/mqueue                         mqueue       rw,relatime                            </span></span>
<span class="line"><span>$</span></span></code></pre></div><p>好奇哪些内核模块被加载了吗？Volatility 也为这个提供了一个插件 <code>linux_lsmod</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_lsmod --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>ffffffffc0535040 lime 20480</span></span>
<span class="line"><span>ffffffffc0530540 binfmt_misc 20480</span></span>
<span class="line"><span>ffffffffc05e8040 sunrpc 479232</span></span>
<span class="line"><span>&lt;&lt; 删节 &gt;&gt;</span></span>
<span class="line"><span>ffffffffc04f9540 nfit 65536</span></span>
<span class="line"><span>ffffffffc0266280 dm_mirror 28672</span></span>
<span class="line"><span>ffffffffc025e040 dm_region_hash 20480</span></span>
<span class="line"><span>ffffffffc0258180 dm_log 20480</span></span>
<span class="line"><span>ffffffffc024bbc0 dm_mod 151552</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>想知道哪些文件被哪些进程打开了吗？使用 <code>linux_bash</code> 插件可以列出这些信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_bash --profile=LinuxRedhat8_3_4_18_0-240x64 -v</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>Pid      Name                 Command Time                   Command</span></span>
<span class="line"><span>-------- -------------------- ------------------------------ -------</span></span>
<span class="line"><span>  227221 bash                 2021-04-17 18:38:24 UTC+0000   lsmod</span></span>
<span class="line"><span>  227221 bash                 2021-04-17 18:38:24 UTC+0000   rm -f .log</span></span>
<span class="line"><span>  227221 bash                 2021-04-17 18:38:24 UTC+0000   ls -l /etc/zzz</span></span>
<span class="line"><span>  227221 bash                 2021-04-17 18:38:24 UTC+0000   cat ~/.vimrc</span></span>
<span class="line"><span>  227221 bash                 2021-04-17 18:38:24 UTC+0000   ls</span></span>
<span class="line"><span>  227221 bash                 2021-04-17 18:38:24 UTC+0000   cat /proc/817/cwd</span></span>
<span class="line"><span>  227221 bash                 2021-04-17 18:38:24 UTC+0000   ls -l /proc/817/cwd</span></span>
<span class="line"><span>  227221 bash                 2021-04-17 18:38:24 UTC+0000   ls /proc/817/</span></span>
<span class="line"><span>&lt;&lt; 删节 &gt;&gt;</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   gcc prt.c</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   ls</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   ./a.out</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   vim prt.c</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   gcc prt.c</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   ./a.out</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   ls</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>想知道哪些文件被哪些进程打开了吗？使用 <code>linux_lsof</code> 插件可以列出这些信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_lsof --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>Offset             Name                           Pid      FD       Path</span></span>
<span class="line"><span>------------------ ------------------------------ -------- -------- ----</span></span>
<span class="line"><span>0xffff9c83fb1e9f40 rsyslogd                          71194        0 /dev/null</span></span>
<span class="line"><span>0xffff9c83fb1e9f40 rsyslogd                          71194        1 /dev/null</span></span>
<span class="line"><span>0xffff9c83fb1e9f40 rsyslogd                          71194        2 /dev/null</span></span>
<span class="line"><span>0xffff9c83fb1e9f40 rsyslogd                          71194        3 /dev/urandom</span></span>
<span class="line"><span>0xffff9c83fb1e9f40 rsyslogd                          71194        4 socket:[83565]</span></span>
<span class="line"><span>0xffff9c83fb1e9f40 rsyslogd                          71194        5 /var/log/messages</span></span>
<span class="line"><span>0xffff9c83fb1e9f40 rsyslogd                          71194        6 anon_inode:[9063]</span></span>
<span class="line"><span>0xffff9c83fb1e9f40 rsyslogd                          71194        7 /var/log/secure</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; 删节 &gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0xffff9c8365761f40 insmod                           228573        0 /dev/pts/0</span></span>
<span class="line"><span>0xffff9c8365761f40 insmod                           228573        1 /dev/pts/0</span></span>
<span class="line"><span>0xffff9c8365761f40 insmod                           228573        2 /dev/pts/0</span></span>
<span class="line"><span>0xffff9c8365761f40 insmod                           228573        3 /root/LiME/src/lime-4.18.0-240.el8.x86_64.ko</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="访问-linux-插件脚本位置" tabindex="-1">访问 Linux 插件脚本位置 <a class="header-anchor" href="#访问-linux-插件脚本位置" aria-label="Permalink to “访问 Linux 插件脚本位置”">​</a></h4><p>通过读取内存转储和处理这些信息，你可以获得更多的信息。如果你会 Python，并且好奇这些信息是如何被处理的，可以到存储所有插件的目录，选择一个你感兴趣的，并看看 Volatility 是如何获得这些信息的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls volatility/plugins/linux/</span></span>
<span class="line"><span>apihooks.py              common.py            kernel_opened_files.py   malfind.py          psaux.py</span></span>
<span class="line"><span>apihooks.pyc             common.pyc           kernel_opened_files.pyc  malfind.pyc         psaux.pyc</span></span>
<span class="line"><span>arp.py                   cpuinfo.py           keyboard_notifiers.py    mount_cache.py      psenv.py</span></span>
<span class="line"><span>arp.pyc                  cpuinfo.pyc          keyboard_notifiers.pyc   mount_cache.pyc     psenv.pyc</span></span>
<span class="line"><span>aslr_shift.py            dentry_cache.py      ld_env.py                mount.py            pslist_cache.py</span></span>
<span class="line"><span>aslr_shift.pyc           dentry_cache.pyc     ld_env.pyc               mount.pyc           pslist_cache.pyc</span></span>
<span class="line"><span>&lt;&lt; 删节 &gt;&gt;</span></span>
<span class="line"><span>check_syscall_arm.py     __init__.py          lsmod.py                 proc_maps.py        tty_check.py</span></span>
<span class="line"><span>check_syscall_arm.pyc    __init__.pyc         lsmod.pyc                proc_maps.pyc       tty_check.pyc</span></span>
<span class="line"><span>check_syscall.py         iomem.py             lsof.py                  proc_maps_rb.py     vma_cache.py</span></span>
<span class="line"><span>check_syscall.pyc        iomem.pyc            lsof.pyc                 proc_maps_rb.pyc    vma_cache.pyc</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>我喜欢 Volatility 的理由是他提供了许多安全插件。这些信息很难手动获取：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>linux_hidden_modules       - Carves memory to find hidden kernel modules</span></span>
<span class="line"><span>linux_malfind              - Looks for suspicious process mappings</span></span>
<span class="line"><span>linux_truecrypt_passphrase - Recovers cached Truecrypt passphrases</span></span></code></pre></div><p>Volatility 也允许你在内存转储中打开一个 shell，所以你可以运行 shell 命令来代替上面所有命令，并获得相同的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_volshell --profile=LinuxRedhat8_3_4_18_0-240x64 -v</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>Current context: process systemd, pid=1 DTB=0x1042dc000</span></span>
<span class="line"><span>Welcome to volshell! Current memory image is:</span></span>
<span class="line"><span>file:///root/LiME/RHEL8.3_64bit.mem</span></span>
<span class="line"><span>To get help, type &#39;hh()&#39;</span></span>
<span class="line"><span>&gt;&gt;&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; sc()</span></span>
<span class="line"><span>Current context: process systemd, pid=1 DTB=0x1042dc000</span></span>
<span class="line"><span>&gt;&gt;&gt;</span></span></code></pre></div><h3 id="接下来的步骤" tabindex="-1">接下来的步骤 <a class="header-anchor" href="#接下来的步骤" aria-label="Permalink to “接下来的步骤”">​</a></h3><p>内存转储是了解 Linux 内部情况的好方法。试一试 Volatility 的所有插件，并详细研究它们的输出。然后思考这些信息如何能够帮助你识别入侵或安全问题。深入了解这些插件的工作原理，甚至尝试改进它们。如果你没有找到你想做的事情的插件，那就写一个并提交给 Volatility，这样其他人也可以使用它。</p><hr>`,60)),a("p",null,[s[9]||(s[9]=n("via: ",-1)),i(p,{href:"https://opensource.com/article/21/4/linux-memory-forensics"},{default:l(()=>[...s[8]||(s[8]=[n("https://opensource.com/article/21/4/linux-memory-forensics",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),i(p,{href:"https://opensource.com/users/gkamathe"},{default:l(()=>[...s[10]||(s[10]=[n("Gaurav Kamathe",-1)])]),_:1}),s[15]||(s[15]=n(" 选题：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[11]||(s[11]=[n("lujun9972",-1)])]),_:1}),s[16]||(s[16]=n(" 译者：",-1)),i(p,{href:"https://github.com/ShuyRoy"},{default:l(()=>[...s[12]||(s[12]=[n("RiaXu",-1)])]),_:1}),s[17]||(s[17]=n(" 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:l(()=>[...s[19]||(s[19]=[n("Linux中国",-1)])]),_:1}),s[22]||(s[22]=n(" 荣誉推出",-1))])])}const _=t(d,[["render",h]]);export{x as __pageData,_ as default};
