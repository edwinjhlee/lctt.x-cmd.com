import{_ as t,a0 as o,w as c,s as r,I as a,x as n,a1 as i,A as l,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"使用開源工具進行 Linux 內存取證 | LCTT x X-CMD","titleTemplate":false,"description":"使用開源工具進行 Linux 內存取證 | LCTT (202105) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用開源工具進行 Linux 內存取證 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用開源工具進行 Linux 內存取證 | LCTT (202105) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202105/20210427 Perform Linux memory forensics with this open source tool","title":"使用開源工具進行 Linux 內存取證","tag":"202105","desc":""},"relativePath":"202105/20210427 Perform Linux memory forensics with this open source tool.md","filePath":"[post].md"}'),d={name:"202105/20210427 Perform Linux memory forensics with this open source tool.md"};function h(u,s,f,g,m,k){const p=o("Link");return c(),r("div",null,[s[23]||(s[23]=a("h1",{id:"使用開源工具進行-linux-內存取證",tabindex:"-1"},[n("使用開源工具進行 Linux 內存取證 "),a("a",{class:"header-anchor",href:"#使用開源工具進行-linux-內存取證","aria-label":"Permalink to “使用開源工具進行 Linux 內存取證”"},"​")],-1)),s[24]||(s[24]=a("blockquote",null,[a("p",null,"利用 Volatility 找出應用程序、網絡連接、內核模組、文件等方面的情況。")],-1)),s[25]||(s[25]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202105/26/111959fzkhzf7q3qwmhh7z.jpg",alt:""})],-1)),s[26]||(s[26]=a("p",null,"計算機的操作系統和應用使用主內存（RAM）來執行不同的任務。這種易失性內存包含大量關於運行應用、網絡連接、內核模組、打開的文件以及幾乎所有其他的內容信息，但這些信息每次計算機重啓的時候都會被清除。",-1)),a("p",null,[s[1]||(s[1]=a("ruby",null,[n("內存取證"),a("rt",null,"Memory forensics")],-1)),s[2]||(s[2]=n("是一種從內存中找到和抽取這些有價值的信息的方式。",-1)),i(p,{href:"https://github.com/volatilityfoundation/volatility"},{default:l(()=>[...s[0]||(s[0]=[n("Volatility",-1)])]),_:1}),s[3]||(s[3]=n(" 是一種使用插件來處理這類信息的開源工具。但是，存在一個問題：在你處理這些信息前，必須將物理內存轉儲到一個文件中，而 Volatility 沒有這種能力。",-1))]),s[27]||(s[27]=e(`<p>因此，這篇文章分為兩部分：</p><ul><li>第一部分是處理獲取物理內存並將其轉儲到一個文件中。</li><li>第二部分使用 Volatility 從這個內存轉儲中讀取並處理這些信息。</li></ul><p>我在本教程中使用了以下測試系統，不過它可以在任何 Linux 發行版上工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /etc/redhat-release</span></span>
<span class="line"><span>Red Hat Enterprise Linux release 8.3 (Ootpa)</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ uname -r</span></span>
<span class="line"><span>4.18.0-240.el8.x86_64</span></span>
<span class="line"><span>$</span></span></code></pre></div><blockquote><p><strong>注意事項：</strong> 部分 1 涉及到編譯和加載一個內核模組。不要擔心：它並不像聽起來那麼困難。</p><p>一些指南：</p><ul><li>按照以下的步驟。</li><li>不要在生產系統或你的主要計算機上嘗試任何這些步驟。</li><li>始終使用測試的虛擬機（VM）來嘗試，直到你熟悉使用這些工具並理解它們的工作原理為止。</li></ul></blockquote><h3 id="安裝需要的包" tabindex="-1">安裝需要的包 <a class="header-anchor" href="#安裝需要的包" aria-label="Permalink to “安裝需要的包”">​</a></h3><p>在開始之前安裝必要的工具。如果你經常使用基於 Debian 的發行版，可以使用 <code>apt-get</code> 命令。這些包大多數提供了需要的內核信息和工具來編譯代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ yum install kernel-headers kernel-devel gcc elfutils-libelf-devel make git libdwarf-tools python2-devel.x86_64-y</span></span></code></pre></div><h3 id="部分-1-使用-lime-獲取內存並將其轉儲到一個文件中" tabindex="-1">部分 1：使用 LiME 獲取內存並將其轉儲到一個文件中 <a class="header-anchor" href="#部分-1-使用-lime-獲取內存並將其轉儲到一個文件中" aria-label="Permalink to “部分 1：使用 LiME 獲取內存並將其轉儲到一個文件中”">​</a></h3><p>在開始分析內存之前，你需要一個內存轉儲供你使用。在實際的取證活動中，這可能來自一個被破壞或者被入侵的系統。這些信息通常會被收集和存儲來分析入侵是如何發生的及其影響。由於你可能沒有可用的內存轉儲，你可以獲取你的測試 VM 的內存轉儲，並使用它來執行內存取證。</p>`,10)),a("p",null,[s[5]||(s[5]=a("ruby",null,[n("Linux 內存提取器"),a("rt",null,"Linux Memory Extractor")],-1)),s[6]||(s[6]=n("（",-1)),i(p,{href:"https://github.com/504ensicsLabs/LiME"},{default:l(()=>[...s[4]||(s[4]=[n("LiME",-1)])]),_:1}),s[7]||(s[7]=n("）是一個在 Linux 系統上獲取內存很常用的工具。使用以下命令獲得 LiME：",-1))]),s[28]||(s[28]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git clone https://github.com/504ensicsLabs/LiME.git</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ cd LiME/src/</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>deflate.c  disk.c  hash.c  lime.h  main.c  Makefile  Makefile.sample  tcp.c</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="構建-lime-內核模組" tabindex="-1">構建 LiME 內核模組 <a class="header-anchor" href="#構建-lime-內核模組" aria-label="Permalink to “構建 LiME 內核模組”">​</a></h4><p>在 <code>src</code> 文件夾下運行 <code>make</code> 命令。這會創建一個以 .ko 為擴展名的內核模組。理想情況下，在 <code>make</code> 結束時，<code>lime.ko</code> 文件會使用格式 <code>lime-&lt;your-kernel-version&gt;.ko</code> 被重命名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>make -C /lib/modules/4.18.0-240.el8.x86_64/build M=&quot;/root/LiME/src&quot; modules</span></span>
<span class="line"><span>make[1]: Entering directory &#39;/usr/src/kernels/4.18.0-240.el8.x86_64&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; 刪節 &gt;&gt;</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h4 id="加載lime-內核模組" tabindex="-1">加載LiME 內核模組 <a class="header-anchor" href="#加載lime-內核模組" aria-label="Permalink to “加載LiME 內核模組”">​</a></h4><p>現在是時候加載內核模組來獲取系統內存了。<code>insmod</code> 命令會幫助加載內核模組；模組一旦被加載，會在你的系統上讀取主內存（RAM）並且將內存的內容轉儲到命令列所提供的 <code>path</code> 目錄下的文件中。另一個重要的參數是 <code>format</code>；保持 <code>lime</code> 的格式，如下所示。在插入內核模組之後，使用 <code>lsmod</code> 命令驗證它是否真的被加載。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ lsmod  | grep lime</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ insmod ./lime-4.18.0-240.el8.x86_64.ko &quot;path=../RHEL8.3_64bit.mem format=lime&quot;</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ lsmod  | grep lime</span></span>
<span class="line"><span>lime                   16384  0</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>你應該看到給 <code>path</code> 命令的文件已經創建好了，而且文件大小與你係統的物理內存（RAM）大小相同（並不奇怪）。一旦你有了內存轉儲，你就可以使用 <code>rmmod</code> 命令刪除該內核模組：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h4 id="內存轉儲中是什麼" tabindex="-1">內存轉儲中是什麼？ <a class="header-anchor" href="#內存轉儲中是什麼" aria-label="Permalink to “內存轉儲中是什麼？”">​</a></h4><p>這個內存轉儲文件只是原始數據，就像使用 <code>file</code> 命令可以看到的一樣。你不可能通過手動去理解它；是的，在這裏邊有一些 ASCII 字符，但是你無法用編輯器打開這個文件並把它讀出來。<code>hexdump</code> 的輸出顯示，最初的幾個字節是 <code>EmiL</code>；這是因為你的請求格式在上面的命令列中是 <code>lime</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ file ~/LiME/RHEL8.3_64bit.mem</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><h3 id="部分-2-獲得-volatility-並使用它來分析你的內存轉儲" tabindex="-1">部分 2：獲得 Volatility 並使用它來分析你的內存轉儲 <a class="header-anchor" href="#部分-2-獲得-volatility-並使用它來分析你的內存轉儲" aria-label="Permalink to “部分 2：獲得 Volatility 並使用它來分析你的內存轉儲”">​</a></h3><p>現在你有了要分析的示例內存轉儲，使用下面的命令獲取 Volatility 軟件。Volatility 已經用 Python 3 重寫了，但是本教程使用的是用 Python 2 寫的原始的 Volatility 包。如果你想用 Volatility 3 進行實驗，可以從合適的 Git 倉庫下載它，並在以下命令中使用 Python 3 而不是 Python 2：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git clone https://github.com/volatilityfoundation/volatility.git</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ cd volatility/</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>AUTHORS.txt    contrib      LEGAL.txt    Makefile     PKG-INFO     pyinstaller.spec  resources  tools       vol.py</span></span>
<span class="line"><span>CHANGELOG.txt  CREDITS.txt  LICENSE.txt  MANIFEST.in  pyinstaller  README.txt        setup.py   volatility</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>Volatility 使用兩個 Python 庫來實現某些功能，所以使用以下命令來安裝它們。否則，在你運行 Volatility 工具時，你可能看到一些導入錯誤；你可以忽略它們，除非你正在運行的插件需要這些庫；這種情況下，工具將會報錯：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pip2 install pycrypto</span></span>
<span class="line"><span>$ pip2 install distorm3</span></span></code></pre></div><h4 id="列出-volatility-的-linux-配置文件" tabindex="-1">列出 Volatility 的 Linux 配置文件 <a class="header-anchor" href="#列出-volatility-的-linux-配置文件" aria-label="Permalink to “列出 Volatility 的 Linux 配置文件”">​</a></h4><p>你將要運行的第一個 Volatility 命令列出了可用的 Linux 配置文件，運行 Volatility 命令的主要入口點是 <code>vol.py</code> 腳本。使用 Python 2 解釋器調用它並提供 <code>--info</code> 選項。為了縮小輸出，查找以 Linux 開頭的字符串。正如你所看到的，並沒有很多 Linux 配置文件被列出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py --info  | grep ^Linux</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>LinuxAMD64PagedMemory          - Linux-specific AMD 64-bit address space.</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="構建你自己的-linux-配置文件" tabindex="-1">構建你自己的 Linux 配置文件 <a class="header-anchor" href="#構建你自己的-linux-配置文件" aria-label="Permalink to “構建你自己的 Linux 配置文件”">​</a></h4><p>Linux 發行版是多種多樣的，並且是為不同架構而構建的。這就是為什麼配置文件是必要的 —— Volatility 在提取信息前必須知道內存轉儲是從哪個系統和架構獲得的。有一些 Volatility 命令可以找到這些信息；但是這個方法很費時。為了加快速度，可以使用以下命令構建一個自定義的 Linux 配置文件：</p><p>移動到 Volatility 倉庫的 <code>tools/linux</code>目錄下，運行 <code>make</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd tools/linux/</span></span>
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
<span class="line"><span>&lt;&lt; 刪節 &gt;&gt;</span></span>
<span class="line"><span>make[1]: Leaving directory &#39;/usr/src/kernels/4.18.0-240.el8.x86_64&#39;</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>你應該看到一個新的 <code>module.dwarf</code> 文件。你也需要 <code>/boot</code> 目錄下的 <code>System.map</code> 文件，因為它包含了所有與當前運行的內核相關的符號：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>kcore  Makefile  Makefile.enterprise  module.c  module.dwarf</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l module.dwarf</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 3987904 Apr 17 15:17 module.dwarf</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l /boot/System.map-4.18.0-240.el8.x86_64</span></span>
<span class="line"><span>-rw-------. 1 root root 4032815 Sep 23  2020 /boot/System.map-4.18.0-240.el8.x86_64</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>要創建一個自定義配置文件，移動回到 Volatility 目錄並且運行下面的命令。第一個參數提供了一個自定義 .zip 文件，文件名是你自己命名的。我經常使用操作系統和內核版本來命名。下一個參數是前邊創建的 <code>module.dwarf</code> 文件，最後一個參數是 <code>/boot</code> 目錄下的 <code>System.map</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$</span></span>
<span class="line"><span>$ cd volatility/</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ zip volatility/plugins/overlays/linux/Redhat8.3_4.18.0-240.zip tools/linux/module.dwarf /boot/System.map-4.18.0-240.el8.x86_64</span></span>
<span class="line"><span>  adding: tools/linux/module.dwarf (deflated 91%)</span></span>
<span class="line"><span>  adding: boot/System.map-4.18.0-240.el8.x86_64 (deflated 79%)</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>現在自定義配置文件就準備好了，所以在前邊給出的位置檢查一下 .zip 文件是否被創建好。如果你想知道 Volatility 是否檢測到這個自定義配置文件，再一次運行 <code>--info</code> 命令。現在，你應該可以在下邊的列出的內容中看到新的配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l volatility/plugins/overlays/linux/Redhat8.3_4.18.0-240.zip</span></span>
<span class="line"><span>-rw-r--r--. 1 root root 1190360 Apr 17 15:20 volatility/plugins/overlays/linux/Redhat8.3_4.18.0-240.zip</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ python2 vol.py --info  | grep Redhat</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>LinuxRedhat8_3_4_18_0-240x64 - A Profile for Linux Redhat8.3_4.18.0-240 x64</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="開始使用-volatility" tabindex="-1">開始使用 Volatility <a class="header-anchor" href="#開始使用-volatility" aria-label="Permalink to “開始使用 Volatility”">​</a></h4><p>現在你已經準備好去做一些真正的內存取證了。記住，Volatility 是由自定義的插件組成的，你可以針對內存轉儲來獲得信息。命令的通用格式是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>python2 vol.py -f &lt;memory-dump-file-taken-by-Lime&gt; &lt;plugin-name&gt; --profile=&lt;name-of-our-custom-profile&gt;</span></span></code></pre></div><p>有了這些信息，運行 <code>linux_banner</code> 插件來看看你是否可從內存轉儲中識別正確的發行版信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_banner --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>Linux version 4.18.0-240.el8.x86_64 ([mockbuild@vm09.test.com][4]) (gcc version 8.3.1 20191121 (Red Hat 8.3.1-5) (GCC)) #1 SMP Wed Sep 23 05:13:10 EDT 2020</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="找到-linux-插件" tabindex="-1">找到 Linux 插件 <a class="header-anchor" href="#找到-linux-插件" aria-label="Permalink to “找到 Linux 插件”">​</a></h4><p>到現在都很順利，所以現在你可能對如何找到所有 Linux 插件的名字比較好奇。有一個簡單的技巧：運行 <code>--info</code> 命令並抓取 <code>linux_</code> 字符串。有各種各樣的插件可用於不同的用途。這裏列出一部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py --info  | grep linux_</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>linux_apihooks             - Checks for userland apihooks</span></span>
<span class="line"><span>linux_arp                  - Print the ARP table</span></span>
<span class="line"><span>linux_aslr_shift           - Automatically detect the Linux ASLR shift</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; 刪節 &gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>linux_banner               - Prints the Linux banner information</span></span>
<span class="line"><span>linux_vma_cache            - Gather VMAs from the vm_area_struct cache</span></span>
<span class="line"><span>linux_volshell             - Shell in the memory image</span></span>
<span class="line"><span>linux_yarascan             - A shell in the Linux memory image</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>使用 <code>linux_psaux</code> 插件檢查內存轉儲時系統上正在運行哪些進程。注意列表中的最後一個命令：它是你在轉儲之前運行的 <code>insmod</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_psaux --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
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
<span class="line"><span>&lt;&lt; 刪節 &gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>11064  89     89     qmgr -l -t unix -u                                              </span></span>
<span class="line"><span>227148 0      0      [kworker/0:0]                                                  </span></span>
<span class="line"><span>227298 0      0      -bash                                                          </span></span>
<span class="line"><span>227374 0      0      [kworker/u2:1]                                                  </span></span>
<span class="line"><span>227375 0      0      [kworker/0:2]                                                  </span></span>
<span class="line"><span>227884 0      0      [kworker/0:3]                                                  </span></span>
<span class="line"><span>228573 0      0      insmod ./lime-4.18.0-240.el8.x86_64.ko path=../RHEL8.3_64bit.mem format=lime</span></span>
<span class="line"><span>228576 0      0                                                                      </span></span>
<span class="line"><span>$</span></span></code></pre></div><p>想要知道系統的網絡狀態嗎？運行 <code>linux_netstat</code> 插件來找到在內存轉儲期間網絡連接的狀態：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_netstat --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>UNIX 18113              systemd/1     /run/systemd/private</span></span>
<span class="line"><span>UNIX 11411              systemd/1     /run/systemd/notify</span></span>
<span class="line"><span>UNIX 11413              systemd/1     /run/systemd/cgroups-agent</span></span>
<span class="line"><span>UNIX 11415              systemd/1    </span></span>
<span class="line"><span>UNIX 11416              systemd/1    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; 刪節 &gt;&gt;</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>接下來，使用 <code>linux_mount</code> 插件來看在內存轉儲期間哪些文件系統被掛載：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_mount --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>tmpfs                     /sys/fs/cgroup                      tmpfs        ro,nosuid,nodev,noexec                  </span></span>
<span class="line"><span>cgroup                    /sys/fs/cgroup/pids                 cgroup       rw,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>systemd-1                 /proc/sys/fs/binfmt_misc            autofs       rw,relatime                            </span></span>
<span class="line"><span>sunrpc                    /var/lib/nfs/rpc_pipefs             rpc_pipefs   rw,relatime                            </span></span>
<span class="line"><span>/dev/mapper/rhel_kvm--03--guest11-root /                                   xfs          rw,relatime                </span></span>
<span class="line"><span>tmpfs                     /dev/shm                            tmpfs        rw,nosuid,nodev                        </span></span>
<span class="line"><span>selinuxfs                 /sys/fs/selinux                     selinuxfs    rw,relatime</span></span>
<span class="line"><span>                                                      </span></span>
<span class="line"><span>&lt;&lt; 刪節 &gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cgroup                    /sys/fs/cgroup/net_cls,net_prio     cgroup       rw,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>cgroup                    /sys/fs/cgroup/cpu,cpuacct          cgroup       rw,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>bpf                       /sys/fs/bpf                         bpf          rw,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>cgroup                    /sys/fs/cgroup/memory               cgroup       ro,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>cgroup                    /sys/fs/cgroup/cpuset               cgroup       rw,relatime,nosuid,nodev,noexec        </span></span>
<span class="line"><span>mqueue                    /dev/mqueue                         mqueue       rw,relatime                            </span></span>
<span class="line"><span>$</span></span></code></pre></div><p>好奇哪些內核模組被加載了嗎？Volatility 也為這個提供了一個插件 <code>linux_lsmod</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_lsmod --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>ffffffffc0535040 lime 20480</span></span>
<span class="line"><span>ffffffffc0530540 binfmt_misc 20480</span></span>
<span class="line"><span>ffffffffc05e8040 sunrpc 479232</span></span>
<span class="line"><span>&lt;&lt; 刪節 &gt;&gt;</span></span>
<span class="line"><span>ffffffffc04f9540 nfit 65536</span></span>
<span class="line"><span>ffffffffc0266280 dm_mirror 28672</span></span>
<span class="line"><span>ffffffffc025e040 dm_region_hash 20480</span></span>
<span class="line"><span>ffffffffc0258180 dm_log 20480</span></span>
<span class="line"><span>ffffffffc024bbc0 dm_mod 151552</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>想知道哪些文件被哪些進程打開了嗎？使用 <code>linux_bash</code> 插件可以列出這些信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_bash --profile=LinuxRedhat8_3_4_18_0-240x64 -v</span></span>
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
<span class="line"><span>&lt;&lt; 刪節 &gt;&gt;</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   gcc prt.c</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   ls</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   ./a.out</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   vim prt.c</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   gcc prt.c</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   ./a.out</span></span>
<span class="line"><span>  227298 bash                 2021-04-17 18:40:30 UTC+0000   ls</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>想知道哪些文件被哪些進程打開了嗎？使用 <code>linux_lsof</code> 插件可以列出這些信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_lsof --profile=LinuxRedhat8_3_4_18_0-240x64</span></span>
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
<span class="line"><span>&lt;&lt; 刪節 &gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0xffff9c8365761f40 insmod                           228573        0 /dev/pts/0</span></span>
<span class="line"><span>0xffff9c8365761f40 insmod                           228573        1 /dev/pts/0</span></span>
<span class="line"><span>0xffff9c8365761f40 insmod                           228573        2 /dev/pts/0</span></span>
<span class="line"><span>0xffff9c8365761f40 insmod                           228573        3 /root/LiME/src/lime-4.18.0-240.el8.x86_64.ko</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="訪問-linux-插件腳本位置" tabindex="-1">訪問 Linux 插件腳本位置 <a class="header-anchor" href="#訪問-linux-插件腳本位置" aria-label="Permalink to “訪問 Linux 插件腳本位置”">​</a></h4><p>通過讀取內存轉儲和處理這些信息，你可以獲得更多的信息。如果你會 Python，並且好奇這些信息是如何被處理的，可以到存儲所有插件的目錄，選擇一個你感興趣的，並看看 Volatility 是如何獲得這些信息的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls volatility/plugins/linux/</span></span>
<span class="line"><span>apihooks.py              common.py            kernel_opened_files.py   malfind.py          psaux.py</span></span>
<span class="line"><span>apihooks.pyc             common.pyc           kernel_opened_files.pyc  malfind.pyc         psaux.pyc</span></span>
<span class="line"><span>arp.py                   cpuinfo.py           keyboard_notifiers.py    mount_cache.py      psenv.py</span></span>
<span class="line"><span>arp.pyc                  cpuinfo.pyc          keyboard_notifiers.pyc   mount_cache.pyc     psenv.pyc</span></span>
<span class="line"><span>aslr_shift.py            dentry_cache.py      ld_env.py                mount.py            pslist_cache.py</span></span>
<span class="line"><span>aslr_shift.pyc           dentry_cache.pyc     ld_env.pyc               mount.pyc           pslist_cache.pyc</span></span>
<span class="line"><span>&lt;&lt; 刪節 &gt;&gt;</span></span>
<span class="line"><span>check_syscall_arm.py     __init__.py          lsmod.py                 proc_maps.py        tty_check.py</span></span>
<span class="line"><span>check_syscall_arm.pyc    __init__.pyc         lsmod.pyc                proc_maps.pyc       tty_check.pyc</span></span>
<span class="line"><span>check_syscall.py         iomem.py             lsof.py                  proc_maps_rb.py     vma_cache.py</span></span>
<span class="line"><span>check_syscall.pyc        iomem.pyc            lsof.pyc                 proc_maps_rb.pyc    vma_cache.pyc</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>我喜歡 Volatility 的理由是他提供了許多安全插件。這些信息很難手動獲取：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>linux_hidden_modules       - Carves memory to find hidden kernel modules</span></span>
<span class="line"><span>linux_malfind              - Looks for suspicious process mappings</span></span>
<span class="line"><span>linux_truecrypt_passphrase - Recovers cached Truecrypt passphrases</span></span></code></pre></div><p>Volatility 也允許你在內存轉儲中打開一個 shell，所以你可以運行 shell 命令來代替上面所有命令，並獲得相同的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python2 vol.py -f ~/LiME/RHEL8.3_64bit.mem linux_volshell --profile=LinuxRedhat8_3_4_18_0-240x64 -v</span></span>
<span class="line"><span>Volatility Foundation Volatility Framework 2.6.1</span></span>
<span class="line"><span>Current context: process systemd, pid=1 DTB=0x1042dc000</span></span>
<span class="line"><span>Welcome to volshell! Current memory image is:</span></span>
<span class="line"><span>file:///root/LiME/RHEL8.3_64bit.mem</span></span>
<span class="line"><span>To get help, type &#39;hh()&#39;</span></span>
<span class="line"><span>&gt;&gt;&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; sc()</span></span>
<span class="line"><span>Current context: process systemd, pid=1 DTB=0x1042dc000</span></span>
<span class="line"><span>&gt;&gt;&gt;</span></span></code></pre></div><h3 id="接下來的步驟" tabindex="-1">接下來的步驟 <a class="header-anchor" href="#接下來的步驟" aria-label="Permalink to “接下來的步驟”">​</a></h3><p>內存轉儲是瞭解 Linux 內部情況的好方法。試一試 Volatility 的所有插件，並詳細研究它們的輸出。然後思考這些信息如何能夠幫助你識別入侵或安全問題。深入瞭解這些插件的工作原理，甚至嘗試改進它們。如果你沒有找到你想做的事情的插件，那就寫一個並提交給 Volatility，這樣其他人也可以使用它。</p><hr>`,60)),a("p",null,[s[9]||(s[9]=n("via: ",-1)),i(p,{href:"https://opensource.com/article/21/4/linux-memory-forensics"},{default:l(()=>[...s[8]||(s[8]=[n("https://opensource.com/article/21/4/linux-memory-forensics",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),i(p,{href:"https://opensource.com/users/gkamathe"},{default:l(()=>[...s[10]||(s[10]=[n("Gaurav Kamathe",-1)])]),_:1}),s[15]||(s[15]=n(" 選題：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[11]||(s[11]=[n("lujun9972",-1)])]),_:1}),s[16]||(s[16]=n(" 譯者：",-1)),i(p,{href:"https://github.com/ShuyRoy"},{default:l(()=>[...s[12]||(s[12]=[n("RiaXu",-1)])]),_:1}),s[17]||(s[17]=n(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:l(()=>[...s[19]||(s[19]=[n("Linux中國",-1)])]),_:1}),s[22]||(s[22]=n(" 榮譽推出",-1))])])}const _=t(d,[["render",h]]);export{x as __pageData,_ as default};
