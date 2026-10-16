import{_ as r,a0 as s,w as c,s as i,I as l,x as t,a1 as o,A as a,ao as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse('{"title":"Linux系統監控神器--Collectl | LCTT x X-CMD","titleTemplate":false,"description":"Linux系統監控神器--Collectl | LCTT (201404) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux系統監控神器--Collectl | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux系統監控神器--Collectl | LCTT (201404) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201404/Collectl is a powerful tool to monitor system resources on Linux","title":"Linux系統監控神器--Collectl","tag":"201404","desc":""},"relativePath":"201404/Collectl is a powerful tool to monitor system resources on Linux.md","filePath":"[post].md"}'),d={name:"201404/Collectl is a powerful tool to monitor system resources on Linux.md"};function m(u,e,b,f,h,M){const n=s("Link");return c(),i("div",null,[e[24]||(e[24]=l("h1",{id:"linux系統監控神器-collectl",tabindex:"-1"},[t("Linux系統監控神器--Collectl "),l("a",{class:"header-anchor",href:"#linux系統監控神器-collectl","aria-label":"Permalink to “Linux系統監控神器--Collectl”"},"​")],-1)),e[25]||(e[25]=l("h3",{id:"系統資源監控",tabindex:"-1"},[t("系統資源監控 "),l("a",{class:"header-anchor",href:"#系統資源監控","aria-label":"Permalink to “系統資源監控”"},"​")],-1)),e[26]||(e[26]=l("p",null,"為使系統良好運轉,Linux系統管理員經常需要監測cpu,內存,磁盤,網絡等系統信息。Linux上已有iotop,top,free,htop,sar等豐富的常規工具來實現監測功能。今天讓我們走進Collectl來了解這個集測試/監控/分析系統性能為一體的Linux工具。",-1)),e[27]||(e[27]=l("p",null,"Collectl作為一個輕量級的監控工具,在同類工具中是功能最全的。用户可監測不同的複雜系統矩陣值,並可保留數據以做之後的分析。不同於其他只用來監測特定系統參數的工具,Collectl可以同時監測不同的變量,並以合適的方式記錄它們。",-1)),l("p",null,[e[1]||(e[1]=t("摘自",-1)),o(n,{href:"http://collectl.sourceforge.net/"},{default:a(()=>[...e[0]||(e[0]=[t("Collectl官網",-1)])]),_:1}),e[2]||(e[2]=t(" ...",-1))]),e[28]||(e[28]=p(`<blockquote><p>不同於或聚焦於一小組統計數據、採用唯一輸出方式,或採用迭代、作為守護進程運行的大部分監測工具,collectl可以同時全部實現。用户可選擇各種子系統中的任一系統來監測包括內存,CPU,磁盤,索引節點,無線帶寬,lustre,內存,網絡,網絡文件系統,進程,二次型,slabs,套接口及TCP等信息。</p></blockquote><p>深入學習前讓我們先看以下命令。</p><pre><code>$ collectl
waiting for 1 second sample...
#&lt;--------CPU--------&gt;&lt;----------Disks-----------&gt;&lt;----------Network----------&gt;
#cpu sys inter  ctxsw KBRead  Reads KBWrit Writes   KBIn  PktIn  KBOut  PktOut 
   0   0   864   1772      0      0      0      0      0      1      0       0 
   5   2  1338   2734      0      0      8      2      0      0      0       1 
   1   0  1222   2647      0      0     92      3      0      2      0       1 
   1   0   763   1722      0      0     80      3      0      1      0       2
</code></pre><p>CPU使用率,磁盤輸入輸出和網絡活動以每秒為單位來加載。對可以理解這些數據的人來説這些信息很容易讀懂。這項列表在給定的時間間隔裏會持續增加，並可直接形成一項文件跟蹤日誌。collectl工具提供了各種命令來對這些數據進行記錄,查找及做其他處理。</p><h3 id="安裝collectl工具" tabindex="-1">安裝collectl工具 <a class="header-anchor" href="#安裝collectl工具" aria-label="Permalink to “安裝collectl工具”">​</a></h3><p>對Ubuntu/Debian用户來説Collectl是默認資源,所以使用apt命令便可獲取。</p><pre><code>$ sudo apt-get install collectl
</code></pre><p>Fedora/CentOS用户使用yum命令便可獲取。</p><pre><code>$ yum install collectl
</code></pre><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to “使用”">​</a></h3><h4 id="必要的瞭解-collectl子系統" tabindex="-1">必要的瞭解 - Collectl子系統 <a class="header-anchor" href="#必要的瞭解-collectl子系統" aria-label="Permalink to “必要的瞭解 - Collectl子系統”">​</a></h4><p>子系統是可檢測到的不同系統資源類型。像CPU,內存,帶寬等等都可構成一個子系統。只運行collectl命令將以批處理模式輸出CPU,磁盤和網絡子系統信息,我們在上文已看到相關內容。</p><p>從操作説明可以看到,Collectl可以識別以下子系統。</p><pre><code>總計子系統

b - buddy info (內存片段)
c - CPU
d - Disk
f - NFS V3 Data
i - Inode and File System
j - Interrupts
l - Lustre
m - Memory
n - Networks
s - Sockets
t - TCP
x - Interconnect
y - Slabs (system object caches)

細節子系統

這是一系列的詳細信息,大部分情況下都會由相應的總計數據衍生出來。目前“環境變量”和“進程”2類沒有相應的總計數據。如果有3個磁盤,選擇-sd,將只會看到3個磁盤組合出的單一信息。如果選擇-sD,將會分別顯示各磁盤信息。

C - CPU
D - Disk
E - Environmental data (fan, power, temp),  via ipmitool
F - NFS Data
J - Interrupts
L - Lustre OST detail OR client Filesystem detail
M - Memory node data, which is also known as numa data
N - Networks
T - 65 TCP counters only available in plot format
X - Interconnect
Y - Slabs (system object caches)
Z - Processes
</code></pre><p>使用“-s”來監測特定的子系統並向其添加子系統的識別項。現在讓我們舉幾個例子。</p><h4 id="_1-監測cpu使用率" tabindex="-1">1. 監測cpu使用率 <a class="header-anchor" href="#_1-監測cpu使用率" aria-label="Permalink to “1. 監測cpu使用率”">​</a></h4><p>用“-sc”實現CPU總使用率的監測</p><pre><code>$ collectl -sc
waiting for 1 second sample...
#&lt;--------CPU--------&gt;
#cpu sys inter  ctxsw 
   3   0  1800   3729 
   3   0  1767   3599
</code></pre><p>使用“-C”觀察各個單獨的CPU使用情況。結果將會輸出多行,分別對應一個CPU。</p><pre><code>   $ collectl -sC
waiting for 1 second sample...

# SINGLE CPU STATISTICS

#   Cpu  User Nice  Sys Wait IRQ  Soft Steal Idle
      0     3    0    0    0    0    0     0   96
      1     3    0    0    0    0    0     0   96
      2     2    0    0    0    0    0     0   97
      3     1    0    0    0    0    0     0   98
      0     2    0    0    0    0    0     0   97
      1     2    0    2    0    0    0     0   95
      2     1    0    0    0    0    0     0   98
      3     4    0    1    0    0    0     0   95
</code></pre><p>如果需要,可以同時使用C和c來獲取單項CPU監測數據和彙總數據。</p><h4 id="_2-內存監測" tabindex="-1">2. 內存監測 <a class="header-anchor" href="#_2-內存監測" aria-label="Permalink to “2. 內存監測”">​</a></h4><p>使用m子系統查看內存。</p><pre><code>$ collectl -sm
waiting for 1 second sample...
#&lt;-----------Memory-----------&gt;
#Free Buff Cach Inac Slab  Map 
   2G 220M   1G   1G 210M   3G 
   2G 220M   1G   1G 210M   3G 
   2G 220M   1G   1G 210M   3G
</code></pre><p>不難解釋。 M用來查看更多內存的詳細信息。</p><pre><code>$ collectl -sM
waiting for 1 second sample...

# MEMORY STATISTICS 

# Node    Total     Used     Free     Slab   Mapped     Anon   Locked    Inact Hit%
     0    7975M    5939M    2036M  215720K  372184K        0    6652K    1434M    0
     0    7975M    5939M    2036M  215720K  372072K        0    6652K    1433M    0
</code></pre><p>這類似於免費報告嗎？</p><h4 id="_3-查看磁盤使用情況" tabindex="-1">3. 查看磁盤使用情況 <a class="header-anchor" href="#_3-查看磁盤使用情況" aria-label="Permalink to “3. 查看磁盤使用情況”">​</a></h4><p>d和D可以查看磁盤使用的概況和詳細情況。</p><pre><code>$ collectl -sd
waiting for 1 second sample...
#&lt;----------Disks-----------&gt;
#KBRead  Reads KBWrit Writes 
      4      1    136     24 
      0      0     80     13

$ collectl -sD
waiting for 1 second sample...

# DISK STATISTICS (/sec)
#          &lt;---------reads---------&gt;&lt;---------writes---------&gt;&lt;--------averages--------&gt; Pct
#Name       KBytes Merged  IOs Size  KBytes Merged  IOs Size  RWSize  QLen  Wait SvcTim Util
sda              0      0    0    0       0      0    0    0       0     0     0      0    0
sda              0      0    0    0       0      0    0    0       0     0     0      0    0
sda              1      0    2    1      17      1    5    3       2     2     6      2    1
sda              0      0    0    0      92     11    5   18      18     1    12     12    5
</code></pre><p>“--verbose”命令可以用來查看附加信息。和D命令不同,它將概況擴展,包含了更多信息。</p><pre><code>$ collectl -sd --verbose
</code></pre><h4 id="_4-同時報告多系統情況" tabindex="-1">4. 同時報告多系統情況 <a class="header-anchor" href="#_4-同時報告多系統情況" aria-label="Permalink to “4. 同時報告多系統情況”">​</a></h4><p>如果想要同時得到CPU,內存和磁盤報告,那麼同時使用子命令組合來實現。</p><pre><code>$ collectl -scmd
waiting for 1 second sample...
#&lt;--------CPU--------&gt;&lt;-----------Memory-----------&gt;&lt;----------Disks-----------&gt;
#cpu sys inter  ctxsw Free Buff Cach Inac Slab  Map KBRead  Reads KBWrit Writes 
   4   0  2187   4334   1G 221M   1G   1G 210M   3G      0      0      0      0 
   3   0  1896   4065   1G 221M   1G   1G 210M   3G      0      0     20      5
</code></pre><h4 id="_5-顯示統計時間" tabindex="-1">5. 顯示統計時間 <a class="header-anchor" href="#_5-顯示統計時間" aria-label="Permalink to “5. 顯示統計時間”">​</a></h4><p>若要將每行的監測信息和時間一同顯示,使用T選項。通過在“-o”參數來指定。</p><pre><code>$ collectl -scmd -oT
waiting for 1 second sample...
#         &lt;--------CPU--------&gt;&lt;-----------Memory-----------&gt;&lt;----------Disks-----------&gt;
#Time     cpu sys inter  ctxsw Free Buff Cach Inac Slab  Map KBRead  Reads KBWrit Writes 
12:03:05    3   0  1961   4013   1G 225M   1G   1G 212M   3G      0      0      0      0 
12:03:06    3   0  1884   3810   1G 225M   1G   1G 212M   3G      0      0      0      0 
12:03:07    3   0  2011   4060   1G 225M   1G   1G 212M   3G      0      0      0      0
</code></pre><p>使用“-oTm”可將時間換成毫秒顯示。</p><h4 id="_6-改變樣本計數" tabindex="-1">6. 改變樣本計數 <a class="header-anchor" href="#_6-改變樣本計數" aria-label="Permalink to “6. 改變樣本計數”">​</a></h4><p>collectl報告的每行都是一份快照或樣本,它通常設定定期間隔如1秒來取樣。i可用來設置時間間隔,c用來設置樣本計數。</p><pre><code>$ collectl -c1 -sm
waiting for 1 second sample...
#&lt;-----------Memory-----------&gt;
#Free Buff Cach Inac Slab  Map 
   1G 261M   1G   1G 228M   3G
</code></pre><p>使用i命令可改變更新時間間隔。</p><pre><code>$ collectl -sm -i2
waiting for 2 second sample...
#&lt;-----------Memory-----------&gt;
#Free Buff Cach Inac Slab  Map 
   1G 261M   1G   1G 229M   3G
</code></pre><p>上面的命令設定每2秒收集一次內存信息。</p><h4 id="_7-像iotop一樣使用collectl" tabindex="-1">7. 像iotop一樣使用collectl <a class="header-anchor" href="#_7-像iotop一樣使用collectl" aria-label="Permalink to “7. 像iotop一樣使用collectl”">​</a></h4><p>top命令將collectl像iostat/top工具一樣進行智能統計。列表會持續更新,且可以使用不同字段實現排序。</p><pre><code>$ collectl --top iokb
</code></pre><p>輸出如下</p><pre><code># TOP PROCESSES sorted by iokb (counters are /sec) 09:44:57
# PID  User     PR  PPID THRD S   VSZ   RSS CP  SysT  UsrT Pct  AccuTime  RKB  WKB MajF MinF Command
 3104  enlighte 20  2683    3 S  938M   33M  0  0.00  0.00   0  00:09.16    0    4    0    0 /usr/bin/ktorrent 
    1  root     20     0    0 S   26M    3M  2  0.00  0.00   0  00:01.30    0    0    0    0 /sbin/init 
    2  root     20     0    0 S     0     0  3  0.00  0.00   0  00:00.00    0    0    0    0 kthreadd 
    3  root     20     2    0 S     0     0  0  0.00  0.00   0  00:00.02    0    0    0    0 ksoftirqd/0 
    4  root     20     2    0 S     0     0  0  0.00  0.00   0  00:00.00    0    0    0    0 kworker/0:0 
    5  root      0     2    0 S     0     0  0  0.00  0.00   0  00:00.00    0    0    0    0 kworker/0:0H 
    7  root     RT     2    0 S     0     0  0  0.00  0.00   0  00:00.08    0    0    0    0 migration/0 
    8  root     20     2    0 S     0     0  2  0.00  0.00   0  00:00.00    0    0    0    0 rcu_bh 
    9  root     20     2    0 S     0     0  0  0.00  0.00   0  00:00.00    0    0    0    0 rcuob/0
</code></pre><p>上面的輸出很像top命令,並且它以磁盤數量降序排列進程。</p><p>若只想顯示上面的5項進程,可用以下命令實現</p><pre><code>$ collectl --top iokb,5
</code></pre><p>若想學習上面的列表裏哪些字段可以排序,使用如下命令</p><pre><code>$ collectl --showtopopts

下面是應用於進程或數據的最高排序類型列表。某些情況下你可能會使用某一字段進行排序,但它並非顯示的一部分。

TOP PROCESS SORT FIELDS
進程排序字段

Memory
  vsz    virtual memory
  rss    resident (physical) memory

Time
  syst   system time
  usrt   user time
  time   total time
  accum  accumulated time

I/O
  rkb    KB read
  wkb    KB written
  iokb   total I/O KB

  rkbc   KB read from pagecache
  wkbc   KB written to pagecache
  iokbc  total pagecacge I/O
  ioall  total I/O KB (iokb+iokbc)

  rsys   read system calls
  wsys   write system calls
  iosys  total system calls

  iocncl Cancelled write bytes

Page Faults
  majf   major page faults
  minf   minor page faults
  flt    total page faults

Context Switches
  vctx   volunary context switches
  nctx   non-voluntary context switches

Miscellaneous (best when used with --procfilt)
  cpu    cpu number
  pid    process pid
  thread total process threads (not counting main)

TOP SLAB SORT FIELDS

  numobj    total number of slab objects
  actobj    active slab objects
  objsize   sizes of slab objects
  numslab   number of slabs
  objslab   number of objects in a slab
  totsize   total memory sizes taken by slabs
  totchg    change in memory sizes
  totpct    percent change in memory sizes
  name      slab names
</code></pre><h4 id="_8-像top一樣使用collectl" tabindex="-1">8. 像top一樣使用collectl <a class="header-anchor" href="#_8-像top一樣使用collectl" aria-label="Permalink to “8. 像top一樣使用collectl”">​</a></h4><p>為使collectl像top,我們只需以CPU使用率排序輸出進程。</p><pre><code>$ collectl --top
</code></pre><p>輸出如下</p><pre><code># TOP PROCESSES sorted by time (counters are /sec) 14:08:46
# PID  User     PR  PPID THRD S   VSZ   RSS CP  SysT  UsrT Pct  AccuTime  RKB  WKB MajF MinF Command
 9471  enlighte 20  9102    0 R   63M   22M  3  0.03  0.10  13  00:00.81    0    0    0    3 /usr/bin/perl 
 3076  enlighte 20  2683    2 S  521M   40M  2  0.00  0.03   3  00:55.14    0    0    0    2 /usr/bin/yakuake 
 3877  enlighte 20  3356   41 S    1G  218M  1  0.00  0.03   3  10:10.50    0    0    0    0 /opt/google/chrome/chrome 
 4625  enlighte 20  2895   36 S    1G  241M  2  0.00  0.02   2  08:24.39    0    0    0   12 /usr/lib/firefox/firefox 
 5638  enlighte 20  3356    3 S    1G  265M  1  0.00  0.02   2  09:55.04    0    0    0    2 /opt/google/chrome/chrome 
 1186  root     20  1152    4 S  502M   76M  0  0.00  0.01   1  03:02.96    0    0    0    0 /usr/bin/X 
 1334  www-data 20  1329    0 S   87M    1M  2  0.00  0.01   1  00:00.85    0    0    0    0 nginx:
</code></pre><p>上面的命令也可用於顯示子系統信息。</p><pre><code>$ collectl --top -scm
</code></pre><h4 id="_9-像ps一樣列出進程" tabindex="-1">9. 像ps一樣列出進程 <a class="header-anchor" href="#_9-像ps一樣列出進程" aria-label="Permalink to “9. 像ps一樣列出進程”">​</a></h4><p>為像ps命令一樣列出所有進程且沒有後續更新,用“c”命令讓其計數至1. $ collectl -c1 -sZ -i:1</p><p>上面的命令將會列出類似“ps -e”命令的所有進程。“procfilt”用於從所有進程中過濾出特定的進程信息。“procopts”用於指定另一組微調進程列表顯示的命令。</p><h4 id="_10-像vmstat一樣使用collectl" tabindex="-1">10. 像vmstat一樣使用collectl <a class="header-anchor" href="#_10-像vmstat一樣使用collectl" aria-label="Permalink to “10. 像vmstat一樣使用collectl”">​</a></h4><p>Collectl有內置命令來完成像vmstat一樣的功能。</p><pre><code>$ collectl --vmstat
waiting for 1 second sample...
#procs ---------------memory (KB)--------------- --swaps-- -----io---- --system-- ----cpu-----
# r  b   swpd   free   buff  cache  inact active   si   so    bi    bo   in    cs us sy  id wa
  1  0      0  1733M   242M  1922M  1137M   710M    0    0     0   108 1982  3918  2  0  95  1
  1  0      0  1733M   242M  1922M  1137M   710M    0    0     0     0 1906  3886  1  0  98  0
  1  0      0  1733M   242M  1922M  1137M   710M    0    0     0     0 1739  3480  3  0  96  0
</code></pre><h4 id="_11-子系統的詳細信息" tabindex="-1">11. 子系統的詳細信息 <a class="header-anchor" href="#_11-子系統的詳細信息" aria-label="Permalink to “11. 子系統的詳細信息”">​</a></h4><p>下面的命令以一秒為間隔，統計5次CPU信息並和時間一起顯示出詳細信息（冗長）。</p><pre><code>$ collectl -sc -c5 -i1 --verbose -oT
waiting for 1 second sample...

# CPU SUMMARY (INTR, CTXSW &amp; PROC /sec)
#Time      User  Nice   Sys  Wait   IRQ  Soft Steal  Idle  CPUs  Intr  Ctxsw  Proc  RunQ   Run   Avg1  Avg5 Avg15 RunT BlkT
14:22:10     11     0     0     0     0     0     0    87     4  1312   2691     0   866     1   0.78  0.86  0.78    1    0
14:22:11     15     0     0     0     0     0     0    84     4  1283   2496     0   866     1   0.78  0.86  0.78    1    0
14:22:12     17     0     0     0     0     0     0    82     4  1342   2658     0   866     0   0.78  0.86  0.78    0    0
14:22:13     15     0     0     0     0     0     0    84     4  1241   2429     0   866     1   0.78  0.86  0.78    1    0
14:22:14     11     0     0     0     0     0     0    88     4  1270   2488     0   866     0   0.80  0.87  0.78    0    0
</code></pre><p>改變&quot;-s&quot;變量查看不同的子系統。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>本文的介紹不過是對collectl這個強大工具的一些淺見。本文本希望展示它有多靈活,其實通過以上的討論讓我們瞭解了包括記錄及回尋捕獲的數據,以多種文件格式導出數據並將數據轉換為可被廣泛的工具分析的格式等等功能的實現。</p><p>collectl提供的另一大功能便是像服務一樣運行,對遠程Linux機器或完整的服務器集羣提供遠程監控,其表現堪稱完美。</p>`,75)),l("p",null,[e[4]||(e[4]=t("Collectl同另一批可用於處理分析收集數據的名為",-1)),o(n,{href:"http://collectl-utils.sourceforge.net/"},{default:a(()=>[...e[3]||(e[3]=[t("Collectl實用工具",-1)])]),_:1}),e[5]||(e[5]=t(" (colmux, colgui, colplot)的功能相契合。如果有機會,我們在之後的文章中會介紹它們。",-1))]),l("p",null,[e[9]||(e[9]=t("為更詳細的瞭解Collectl工具,請登錄它的主頁來學習更多的功能。筆者建議查看",-1)),o(n,{href:"http://collectl.sourceforge.net/FAQ-collectl.html"},{default:a(()=>[...e[6]||(e[6]=[t("FAQs",-1)])]),_:1}),e[10]||(e[10]=t("來快速瞭解collectl,讀取",-1)),o(n,{href:"http://collectl.sourceforge.net/Documentation.html"},{default:a(()=>[...e[7]||(e[7]=[t("collectl文檔",-1)])]),_:1}),e[11]||(e[11]=t("獲取深層次的例子。",-1)),o(n,{href:"http://collectl.sourceforge.net/Matrix.html"},{default:a(()=>[...e[8]||(e[8]=[t("等價命令表",-1)])]),_:1}),e[12]||(e[12]=t("也可定位至更多的像sar,iostat,netstat,top等和collectl功能部分等價的常用工具。",-1))]),e[29]||(e[29]=l("hr",null,null,-1)),l("p",null,[e[14]||(e[14]=t("via: ",-1)),o(n,{href:"http://www.binarytides.com/collectl-monitor-system-resources-linux/"},{default:a(()=>[...e[13]||(e[13]=[t("http://www.binarytides.com/collectl-monitor-system-resources-linux/",-1)])]),_:1})]),l("p",null,[e[17]||(e[17]=t("譯者：",-1)),o(n,{href:"https://github.com/icybreaker"},{default:a(()=>[...e[15]||(e[15]=[t("icybreaker",-1)])]),_:1}),e[18]||(e[18]=t(" 校對：",-1)),o(n,{href:"https://github.com/wxy"},{default:a(()=>[...e[16]||(e[16]=[t("wxy",-1)])]),_:1})]),l("p",null,[e[21]||(e[21]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[19]||(e[19]=[t("LCTT",-1)])]),_:1}),e[22]||(e[22]=t(" 原創翻譯，",-1)),o(n,{href:"http://linux.cn/"},{default:a(()=>[...e[20]||(e[20]=[t("Linux中國",-1)])]),_:1}),e[23]||(e[23]=t(" 榮譽推出",-1))])])}const P=r(d,[["render",m]]);export{g as __pageData,P as default};
