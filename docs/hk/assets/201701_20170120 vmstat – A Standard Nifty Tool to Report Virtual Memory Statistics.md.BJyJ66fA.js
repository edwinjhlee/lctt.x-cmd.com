import{_ as t,a0 as o,w as d,s as c,ao as l,I as n,x as a,a1 as e,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"vmstat：一個標準的報告虛擬內存統計工具 | LCTT x X-CMD","titleTemplate":false,"description":"vmstat：一個標準的報告虛擬內存統計工具 | LCTT (201701) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"vmstat：一個標準的報告虛擬內存統計工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"vmstat：一個標準的報告虛擬內存統計工具 | LCTT (201701) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201701/20170120 vmstat – A Standard Nifty Tool to Report Virtual Memory Statistics","title":"vmstat：一個標準的報告虛擬內存統計工具","tag":"201701","desc":""},"relativePath":"201701/20170120 vmstat – A Standard Nifty Tool to Report Virtual Memory Statistics.md","filePath":"[post].md"}'),r={name:"201701/20170120 vmstat – A Standard Nifty Tool to Report Virtual Memory Statistics.md"};function m(h,s,u,b,g,k){const p=o("Link");return d(),c("div",null,[s[35]||(s[35]=l(`<h1 id="vmstat-一個標準的報告虛擬內存統計工具" tabindex="-1">vmstat：一個標準的報告虛擬內存統計工具 <a class="header-anchor" href="#vmstat-一個標準的報告虛擬內存統計工具" aria-label="Permalink to “vmstat：一個標準的報告虛擬內存統計工具”">​</a></h1><h3 id="什麼是-ram" tabindex="-1">什麼是 RAM？ <a class="header-anchor" href="#什麼是-ram" aria-label="Permalink to “什麼是 RAM？”">​</a></h3><p>在智能手機世界，我們每一個人都知道 RAM。因此，我不想深入介紹，這樣我就簡要概括下。RAM 代表“隨機訪問內存”（Random Access Memory），是一種計算機數據存儲，它會存儲經常使用的程序來提升系統性能。</p><h3 id="什麼是虛擬內存" tabindex="-1">什麼是虛擬內存？ <a class="header-anchor" href="#什麼是虛擬內存" aria-label="Permalink to “什麼是虛擬內存？”">​</a></h3><p>虛擬內存是一種內存管理方式，計算機通過臨時將最近未使用的程序數據從 RAM 轉移到硬盤，以平衡或管理內存的短缺。</p><h3 id="什麼是-vmstat" tabindex="-1">什麼是 vmstat？ <a class="header-anchor" href="#什麼是-vmstat" aria-label="Permalink to “什麼是 vmstat？”">​</a></h3><p>vmstat 是一個標準的工具，它會報告 Linux 系統的虛擬內存統計。vmstat 會報告有關進程、內存、分頁、塊 IO、陷阱（中斷）和 cpu 活動的信息。它可以幫助 Linux 管理員在解決問題時識別系統瓶頸。</p><h3 id="在-linux-中安裝-sysstat" tabindex="-1">在 Linux 中安裝 Sysstat <a class="header-anchor" href="#在-linux-中安裝-sysstat" aria-label="Permalink to “在 Linux 中安裝 Sysstat”">​</a></h3><p>Linux 中沒有獨立的 <code>vmstat</code> 包。它與 <code>sysstat</code> 綁定在一起，並在大多數發行版的默認倉庫上都有。如果還沒有安裝，只要基於你的發行版輸入下面的命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[在 CentOS/RHEL 中安裝 vmstat]</span></span>
<span class="line"><span>$ sudo yum install sysstat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[在 Fedora 中安裝 vmstat]</span></span>
<span class="line"><span>$ sudo dnf install sysstat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[在 Debian/Ubuntu 中安裝 vmstat]</span></span>
<span class="line"><span>$ sudo apt-get install sysstat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[在 Arch Linux 中安裝 vmstat]</span></span>
<span class="line"><span>$ sudo pacman -S sysstat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[在 Mageia 中安裝 vmstat]</span></span>
<span class="line"><span>$ sudo urpmi sysstat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[在 openSUSE 中安裝 vmstat]</span></span>
<span class="line"><span>$ sudo zypper install sysstat</span></span></code></pre></div><h3 id="不帶參數運行-vmstat" tabindex="-1">不帶參數運行 vmstat <a class="header-anchor" href="#不帶參數運行-vmstat" aria-label="Permalink to “不帶參數運行 vmstat”">​</a></h3><p>假設你已經成功安裝 vmstat，在終端中不帶參數運行 <code>vmstat</code>，它會向你展示 vmstat 的默認結果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat</span></span>
<span class="line"><span>procs -----------memory---------- ---swap-- -----io---- -system-- ----cpu----</span></span>
<span class="line"><span> r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa</span></span>
<span class="line"><span> 2  0  79496 1614120 139240 787928   0    0    23    10    0    0 11  1 88  0</span></span></code></pre></div><p>當你看到上面的輸出，你可能已經大致瞭解了它是什麼以及它的目的。不要擔心，我們將深入解釋每個參數，以便你可以瞭解 vmstat 的用途和目的。</p>`,14)),n("p",null,[s[1]||(s[1]=n("code",null,"procs",-1)),s[2]||(s[2]=a("：procs 中有 ",-1)),s[3]||(s[3]=n("code",null,"r",-1)),s[4]||(s[4]=a(" 和 ",-1)),s[5]||(s[5]=n("code",null,"b",-1)),s[6]||(s[6]=a(" 列，它報告進程統計信息。在上面的輸出中，在運行隊列（",-1)),s[7]||(s[7]=n("code",null,"r",-1)),s[8]||(s[8]=a("）中有兩個進程在等待 CPU 並有零個休眠進程（",-1)),s[9]||(s[9]=n("code",null,"b",-1)),s[10]||(s[10]=a("）。通常，它不應該超過處理器（或核心）的數量，如果你發現異常，最好使用 ",-1)),e(p,{href:"http://www.2daygeek.com/top-command-examples-to-monitor-server-"},{default:i(()=>[...s[0]||(s[0]=[a("top 命令",-1)])]),_:1}),s[11]||(s[11]=a("進一步地排除故障。",-1))]),s[36]||(s[36]=l("<ul><li><code>r</code>：等待運行的進程數。</li><li><code>b</code>：休眠狀態下的進程數。</li></ul><p><code>memory</code>： memory 下有報告內存統計的 <code>swpd</code>、<code>free</code>、<code>buff</code> 和 <code>cache</code> 列。你可以用 <code>free -m</code> 命令看到同樣的信息。在上面的內存統計中，統計數據以千字節表示，這有點難以理解，最好添加 <code>M</code> 參數來看到以兆字節為單位的統計數據。</p><ul><li><code>swpd</code>：使用的虛擬內存量。</li><li><code>free</code>：空閒內存量。</li><li><code>buff</code>：用作緩衝區的內存量。</li><li><code>cache</code>：用作高速緩存的內存量。</li><li><code>inact</code>：非活動內存的數量。</li><li><code>active</code>：活動內存量。</li></ul><p><code>swap</code>：swap 有 <code>si</code> 和 <code>so</code> 列，用於報告交換內存統計信息。你可以用 <code>free -m</code> 命令看到相同的信息。</p><ul><li><code>si</code>：從磁盤交換的內存量（換入，從 swap 移到實際內存的內存）。</li><li><code>so</code>：交換到磁盤的內存量（換出，從實際內存移動到 swap 的內存）。</li></ul>",5)),n("p",null,[s[14]||(s[14]=n("code",null,"I/O",-1)),s[15]||(s[15]=a("：I/O 有 ",-1)),s[16]||(s[16]=n("code",null,"bi",-1)),s[17]||(s[17]=a(" 和 ",-1)),s[18]||(s[18]=n("code",null,"bo",-1)),s[19]||(s[19]=a(" 列，它以“塊讀取”和“塊寫入”的單位來報告每秒磁盤讀取和寫入的塊的統計信息。如果你發現有巨大的 I/O 讀寫，最好使用 ",-1)),e(p,{href:"http://www.2daygeek.com/monitor-disk-io-activity-using-iotop-"},{default:i(()=>[...s[12]||(s[12]=[a("iotop",-1)])]),_:1}),s[20]||(s[20]=a(" 和 ",-1)),e(p,{href:"http://www.2daygeek.com/monitor-disk-io-activity-using-iotop-"},{default:i(()=>[...s[13]||(s[13]=[a("iostat",-1)])]),_:1}),s[21]||(s[21]=a(" 命令來查看。",-1))]),s[37]||(s[37]=l(`<ul><li><code>bi</code>：從塊設備接收的塊數。</li><li><code>bo</code>：發送到塊設備的塊數。</li></ul><p><code>system</code>：system 有 <code>in</code> 和 <code>cs</code> 列，它報告每秒的系統操作。</p><ul><li><code>in</code>：每秒的系統中斷數，包括時鐘中斷。</li><li><code>cs</code>：發送到塊設備的塊數。</li></ul><p><code>CPU</code>：CPU 有 <code>cs</code>、<code>us</code>、<code>sy</code>、<code>id</code> 和 <code>wa</code> 列，報告（所用的） CPU 資源佔總 CPU 時間的百分比。如果你發現異常，最好使用 <code>top</code> 和 <code>free</code> 命令。</p><ul><li><code>cs</code>：每秒的系統中斷數，包括時鐘。</li><li><code>us</code>：發送到塊設備的塊數。</li><li><code>sy</code>：用作高速緩存的內存量。</li><li><code>id</code>：非活動內存量。</li><li><code>wa</code>：活動內存量。</li></ul><h3 id="以-mb-方式輸出" tabindex="-1">以 MB 方式輸出 <a class="header-anchor" href="#以-mb-方式輸出" aria-label="Permalink to “以 MB 方式輸出”">​</a></h3><p>默認情況下，vmstat 以千字節為單位顯示內存統計，這是非常難以理解的，最好添加 <code>-S m</code> 參數以獲取以兆字節為單位的統計。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat -S m</span></span>
<span class="line"><span>procs -----------memory---------- ---swap-- -----io---- -system-- ----cpu----</span></span>
<span class="line"><span> r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa</span></span>
<span class="line"><span> 1  0    103    371    406   2116    0    0    40    15    0    0 11  1 87  0</span></span></code></pre></div><h3 id="以延遲方式運行-vmstat-獲取更好的統計信息" tabindex="-1">以延遲方式運行 vmstat 獲取更好的統計信息 <a class="header-anchor" href="#以延遲方式運行-vmstat-獲取更好的統計信息" aria-label="Permalink to “以延遲方式運行 vmstat 獲取更好的統計信息”">​</a></h3><p>默認情況下，vmstat 的單次統計信息不足以進一步進行故障排除，因此，添加更新延遲（延遲是更新之間的延遲，以秒為單位）以定期捕獲活動。如果你想以 2 秒延遲運行 vmstat ，只需使用下面的命令（如果你想要更長的延遲，你可以根據你的願望改變）。</p><p>以下命令將每 2 秒運行一次，直到退出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat 2</span></span>
<span class="line"><span>procs -----------memory---------- ---swap-- -----io---- -system-- ----cpu----</span></span>
<span class="line"><span> r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa</span></span>
<span class="line"><span> 1  0 105500 325776 416016 2166912   0    0    40    15    0    0 11  1 87  0</span></span>
<span class="line"><span> 0  0 105500 325644 416016 2166920   0    0     0    13 1083 1174 11  1 87  0</span></span>
<span class="line"><span> 0  0 105500 308648 416024 2166928   0    0     1    16 1559 1453 16  2 82  0</span></span>
<span class="line"><span> 0  0 105500 285948 416032 2166932   0    0     0    12  934 1003  9  1 90  0</span></span>
<span class="line"><span> 0  0 105500 326620 416040 2166940   0    0     1    27  922 1068  9  1 90  0</span></span>
<span class="line"><span> 0  0 105500 366704 416048 2166944   0    0     0    17  835  955  9  1 90  0</span></span>
<span class="line"><span> 0  0 105500 366456 416056 2166948   0    0     1    22  859  918  9  1 90  0</span></span>
<span class="line"><span> 0  0 105500 366456 416056 2166948   0    0     0    15 1539 1504 17  2 81  0</span></span>
<span class="line"><span> 0  0 105500 365224 416060 2166996   0    0     1    19  984 1097 11  1 88  0</span></span></code></pre></div><h3 id="帶延遲和計數運行-vmstat" tabindex="-1">帶延遲和計數運行 vmstat <a class="header-anchor" href="#帶延遲和計數運行-vmstat" aria-label="Permalink to “帶延遲和計數運行 vmstat”">​</a></h3><p>或者，你可以帶延遲和特定計數運行 vmstat，一旦達到給定的計數，然後自動退出。</p><p>以下命令將每 2 秒運行一次，10 次後自動退出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat 2 10</span></span>
<span class="line"><span>procs -----------memory---------- ---swap-- -----io---- -system-- ----cpu----</span></span>
<span class="line"><span> r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa</span></span>
<span class="line"><span> 1  0  79496 1581916 157380 810412   0    0    23    10    0    1 11  1 88  0</span></span>
<span class="line"><span> 2  0  79496 1559464 157380 810416   0    0     1     1 1821 1749 21  2 77  0</span></span>
<span class="line"><span> 0  0  79496 1583768 157384 810416   0    0     1    46  681  799  9  1 90  0</span></span>
<span class="line"><span> 2  0  79496 1556364 157384 810428   0    0     1     1 1392 1545 15  2 83  0</span></span>
<span class="line"><span> 0  0  79496 1583272 157384 810428   0    0     1     0 1307 1448 14  2 84  0</span></span>
<span class="line"><span> 2  0  79496 1582032 157384 810428   0    0     1    41  424  605  4  1 96  0</span></span>
<span class="line"><span> 1  0  79496 1575848 157384 810428   0    0     1     0 1912 2407 26  2 71  0</span></span>
<span class="line"><span> 0  0  79496 1582884 157384 810436   0    0     1    69  678  825  9  1 90  0</span></span>
<span class="line"><span> 2  0  79496 1569368 157392 810432   0    0    11    26  920  969  9  1 90  0</span></span>
<span class="line"><span> 1  0  79496 1583612 157400 810444   0    0     7    39 2001 2530 20  2 77  0</span></span></code></pre></div><h3 id="顯示活動和非活動內存" tabindex="-1">顯示活動和非活動內存 <a class="header-anchor" href="#顯示活動和非活動內存" aria-label="Permalink to “顯示活動和非活動內存”">​</a></h3><p>默認情況下，vmstat 會顯示除活動和非活動內存之外的內存統計信息。如果要查看活動和非活動內存統計信息，請在 vmstat 後添加 <code>-a</code> 參數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat -a</span></span>
<span class="line"><span>procs -----------memory---------- ---swap-- -----io---- -system-- ----cpu----</span></span>
<span class="line"><span> r  b   swpd   free  inact active   si   so    bi    bo   in   cs us sy id wa</span></span>
<span class="line"><span> 1  0 105500 2387592 415148 584112   0    0    40    15    0    1 11  1 87  0</span></span></code></pre></div><h3 id="打印磁盤統計" tabindex="-1">打印磁盤統計 <a class="header-anchor" href="#打印磁盤統計" aria-label="Permalink to “打印磁盤統計”">​</a></h3><p>在 vmstat 後面添加 <code>-d</code> 參數會以每個磁盤一行的方式顯示統計（包含讀、寫和 IO）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat -d</span></span>
<span class="line"><span>disk- ------------reads------------ ------------writes----------- -----IO------</span></span>
<span class="line"><span>       total merged sectors      ms  total merged sectors      ms    cur    sec</span></span>
<span class="line"><span>ram0       0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram1       0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram2       0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram3       0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram4       0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram5       0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram6       0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram7       0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram8       0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram9       0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram10      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram11      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram12      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram13      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram14      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>ram15      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>loop0      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>loop1      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>loop2      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>loop3      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>loop4      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>loop5      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>loop6      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>loop7      0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>fd0        0      0       0       0      0      0       0       0      0      0</span></span>
<span class="line"><span>sda   16604050 904497 2594882190 57455732 30037054 28093770 2160032056 118189160      0  40915</span></span>
<span class="line"><span>sdb   257357577 479985 3124712204 577235320 8502519 1283237 36645890 11250948      0 182336</span></span></code></pre></div><h3 id="總結磁盤統計" tabindex="-1">總結磁盤統計 <a class="header-anchor" href="#總結磁盤統計" aria-label="Permalink to “總結磁盤統計”">​</a></h3><p>在 vmstat 後面添加 <code>-D</code> 會顯示全局統計（包括全部的磁盤、分區、全部讀、合併的讀、讀取的扇區、寫、合併的寫、寫入的扇區和 IO）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat -D</span></span>
<span class="line"><span>           27 disks</span></span>
<span class="line"><span>            3 partitions</span></span>
<span class="line"><span>    275754028 total reads</span></span>
<span class="line"><span>      1388030 merged reads</span></span>
<span class="line"><span>   5751195976 read sectors</span></span>
<span class="line"><span>    638710116 milli reading</span></span>
<span class="line"><span>     38795040 writes</span></span>
<span class="line"><span>     29520659 merged writes</span></span>
<span class="line"><span>   2209820333 written sectors</span></span>
<span class="line"><span>    130210652 milli writing</span></span>
<span class="line"><span>            0 inprogress IO</span></span>
<span class="line"><span>       224704 milli spent IO</span></span></code></pre></div><h3 id="打印指定分區統計" tabindex="-1">打印指定分區統計 <a class="header-anchor" href="#打印指定分區統計" aria-label="Permalink to “打印指定分區統計”">​</a></h3><p>vmstat 添加 <code>-p</code> 參數後面跟上設備名會顯示指定分區統計（包括讀、讀取的扇區、寫以及請求的寫）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat -p /dev/sdb1</span></span>
<span class="line"><span>sdb1          reads   read sectors  writes    requested writes</span></span>
<span class="line"><span>                3115      27890     839453  206728016</span></span></code></pre></div><h3 id="vmstat-統計信息帶上時間戳" tabindex="-1">vmstat 統計信息帶上時間戳 <a class="header-anchor" href="#vmstat-統計信息帶上時間戳" aria-label="Permalink to “vmstat 統計信息帶上時間戳”">​</a></h3><p>當你想在特定時間區間內找到內存尖峯時，用 vmstat 命令添加 <code>-t</code> 參數，後跟延遲和計數。</p><p>注意：此組合不適用於基於 Debian 的系統。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat -t 1 5</span></span>
<span class="line"><span>procs -----------memory---------- ---swap-- -----io---- --system-- -----cpu------ ---timestamp---</span></span>
<span class="line"><span> r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st</span></span>
<span class="line"><span> 0  0      0 6981416 181324 24588604    0    0     0     1    0    0  0  0 100  0  0    2017-01-11 15:42:15 MST</span></span>
<span class="line"><span> 2  0      0 6981276 181324 24588604    0    0     0     0   91   40  0  0 100  0  0    2017-01-11 15:42:16 MST</span></span>
<span class="line"><span> 0  0      0 6982016 181324 24588604    0    0     0     0   75  116  0  0 100  0  0    2017-01-11 15:42:17 MST</span></span>
<span class="line"><span> 0  0      0 6982016 181324 24588604    0    0     0     0   43   39  0  0 100  0  0    2017-01-11 15:42:18 MST</span></span>
<span class="line"><span> 0  0      0 6982280 181324 24588604    0    0     0     0  113  185  0  0 100  0  0    2017-01-11 15:42:19 MST</span></span></code></pre></div><h3 id="打印更多統計" tabindex="-1">打印更多統計 <a class="header-anchor" href="#打印更多統計" aria-label="Permalink to “打印更多統計”">​</a></h3><p>vmstat 後面跟上 <code>-s</code> 參數會顯示不同統計的總結。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat -s</span></span>
<span class="line"><span>     32849392  total memory</span></span>
<span class="line"><span>     25864128  used memory</span></span>
<span class="line"><span>     16468180  active memory</span></span>
<span class="line"><span>      8320888  inactive memory</span></span>
<span class="line"><span>      6985264  free memory</span></span>
<span class="line"><span>       181324  buffer memory</span></span>
<span class="line"><span>     24588612  swap cache</span></span>
<span class="line"><span>     20970492  total swap</span></span>
<span class="line"><span>            0  used swap</span></span>
<span class="line"><span>     20970492  free swap</span></span>
<span class="line"><span>       891075 non-nice user cpu ticks</span></span>
<span class="line"><span>         6532 nice user cpu ticks</span></span>
<span class="line"><span>      1507099 system cpu ticks</span></span>
<span class="line"><span>  18925265601 idle cpu ticks</span></span>
<span class="line"><span>       113043 IO-wait cpu ticks</span></span>
<span class="line"><span>          108 IRQ cpu ticks</span></span>
<span class="line"><span>         4185 softirq cpu ticks</span></span>
<span class="line"><span>            0 stolen cpu ticks</span></span>
<span class="line"><span>      4071862 pages paged in</span></span>
<span class="line"><span>    216759718 pages paged out</span></span>
<span class="line"><span>            0 pages swapped in</span></span>
<span class="line"><span>            0 pages swapped out</span></span>
<span class="line"><span>    369611221 interrupts</span></span>
<span class="line"><span>    477861261 CPU context switches</span></span>
<span class="line"><span>   1478258826 boot time</span></span>
<span class="line"><span>      2196121 forks</span></span></code></pre></div><h3 id="打印-slab-統計" tabindex="-1">打印 slab 統計 <a class="header-anchor" href="#打印-slab-統計" aria-label="Permalink to “打印 slab 統計”">​</a></h3><p>vmstat 後面跟上 <code>-m</code> 參數會顯示 slab 信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat -m</span></span>
<span class="line"><span>Cache                       Num  Total   Size  Pages</span></span>
<span class="line"><span>nf_conntrack_expect           0      0    240     16</span></span>
<span class="line"><span>nf_conntrack_ffffffff81b2a920     18     60    312     12</span></span>
<span class="line"><span>fib6_nodes                   24     59     64     59</span></span>
<span class="line"><span>ip6_dst_cache                16     30    384     10</span></span>
<span class="line"><span>ndisc_cache                   7     30    256     15</span></span>
<span class="line"><span>ip6_mrt_cache                 0      0    128     30</span></span>
<span class="line"><span>RAWv6                        35     35   1088      7</span></span>
<span class="line"><span>UDPLITEv6                     0      0   1024      4</span></span>
<span class="line"><span>UDPv6                         4     12   1024      4</span></span>
<span class="line"><span>tw_sock_TCPv6                 0      0    320     12</span></span>
<span class="line"><span>request_sock_TCPv6            0      0    192     20</span></span>
<span class="line"><span>TCPv6                         4      6   1920      2</span></span>
<span class="line"><span>fat_inode_cache               5      6    672      6</span></span>
<span class="line"><span>fat_cache                     0      0     32    112</span></span>
<span class="line"><span>ioat2                      4096   4140    128     30</span></span>
<span class="line"><span>ext4_inode_cache          34322  34364   1000      4</span></span>
<span class="line"><span>ext4_xattr                    0      0     88     44</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span></code></pre></div><h3 id="閲讀更多關於-vmstat" tabindex="-1">閲讀更多關於 vmstat <a class="header-anchor" href="#閲讀更多關於-vmstat" aria-label="Permalink to “閲讀更多關於 vmstat”">​</a></h3><p>如果你想了解關於 vmstat 的更多選項，請閲讀手冊。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat --help</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span># man vmstat</span></span></code></pre></div><hr><p>作者簡介：</p><p><img src="http://1.gravatar.com/avatar/d487bef1de15143a7b80a40396e96118?s=256&amp;d=mm&amp;r=g" alt=""></p><p>熱愛玩所有的 Linux 發行版</p><hr>`,46)),n("p",null,[s[23]||(s[23]=a("via: ",-1)),e(p,{href:"http://www.2daygeek.com/linux-vmstat-command-examples-tool-report-virtual-memory-statistics/"},{default:i(()=>[...s[22]||(s[22]=[a("http://www.2daygeek.com/linux-vmstat-command-examples-tool-report-virtual-memory-statistics/",-1)])]),_:1})]),n("p",null,[s[27]||(s[27]=a("作者：",-1)),e(p,{href:"http://www.2daygeek.com/author/magesh/"},{default:i(()=>[...s[24]||(s[24]=[a("Magesh Maruthamuthu",-1)])]),_:1}),s[28]||(s[28]=a(" 譯者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:i(()=>[...s[25]||(s[25]=[a("geekpi",-1)])]),_:1}),s[29]||(s[29]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[26]||(s[26]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[32]||(s[32]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[30]||(s[30]=[a("LCTT",-1)])]),_:1}),s[33]||(s[33]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[31]||(s[31]=[a("Linux中國",-1)])]),_:1}),s[34]||(s[34]=a(" 榮譽推出",-1))])])}const w=t(r,[["render",m]]);export{y as __pageData,w as default};
