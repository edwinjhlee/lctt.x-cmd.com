import{_ as a,a0 as m,w as p,s as g,ao as i,I as o,a1 as r,A as e,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"使用vmstat和iostat命令進行Linux性能監控 | LCTT x X-CMD","titleTemplate":false,"description":"使用vmstat和iostat命令進行Linux性能監控 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用vmstat和iostat命令進行Linux性能監控 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用vmstat和iostat命令進行Linux性能監控 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/Linux Performance Monitoring with Vmstat and Iostat Commands","title":"使用vmstat和iostat命令進行Linux性能監控","tag":"201410","desc":""},"relativePath":"201410/Linux Performance Monitoring with Vmstat and Iostat Commands.md","filePath":"[post].md"}'),d={name:"201410/Linux Performance Monitoring with Vmstat and Iostat Commands.md"};function l(u,t,v,w,c,_){const s=m("Link");return p(),g("div",null,[t[25]||(t[25]=i('<h1 id="使用vmstat和iostat命令進行linux性能監控" tabindex="-1">使用vmstat和iostat命令進行Linux性能監控 <a class="header-anchor" href="#使用vmstat和iostat命令進行linux性能監控" aria-label="Permalink to “使用vmstat和iostat命令進行Linux性能監控”">​</a></h1><p>這是我們正在進行的<strong>Linux</strong>命令和性能監控系列的一部分。<strong>vmstat</strong>和<strong>iostat</strong>兩個命令都適用於所有主要的類<strong>unix</strong>系統（<strong>Linux/unix/FreeBSD/Solaris</strong>）。</p>',2)),o("p",null,[t[1]||(t[1]=i("如果<strong>vmstat</strong>和<strong>iostat</strong>命令在你的系統中不可用，請安裝<strong>sysstat</strong>軟件包。<strong>vmstat</strong>，<strong>sar</strong>和<strong>iostat</strong>命令都包含在<strong>sysstat</strong>（系統監控工具）軟件包中。iostat命令生成<strong>CPU</strong>和所有設備的統計信息。你可以從",17)),r(s,{href:"http://sebastien.godard.pagesperso-orange.fr/download.html"},{default:e(()=>[...t[0]||(t[0]=[n("這個連接",-1)])]),_:1}),t[2]||(t[2]=n("中下載源代碼包編譯安裝sysstat，但是我們建議通過",-1)),t[3]||(t[3]=o("strong",null,"YUM",-1)),t[4]||(t[4]=n("命令進行安裝。",-1))]),t[26]||(t[26]=i(`<p><img src="http://www.tecmint.com/wp-content/uploads/2012/09/Linux-VmStat-Iostat-Commands.png" alt="使用Vmstat和Iostat命令進行Linux性能監控"></p><p><em>使用Vmstat和Iostat命令進行Linux性能監控</em></p><p>###在Linux系統中安裝sysstat###</p><pre><code>#yum -y install sysstat
</code></pre><ul><li><strong>vmstat</strong> - 內存，進程和分頁等的簡要信息。</li><li><strong>iostat</strong> - CPU統計信息，設備和分區的輸入/輸出統計信息。</li></ul><h3 id="linux下vmstat命令的6個範例" tabindex="-1">Linux下vmstat命令的6個範例### <a class="header-anchor" href="#linux下vmstat命令的6個範例" aria-label="Permalink to “Linux下vmstat命令的6個範例###”">​</a></h3><p>####1. 列出活動和非活動的內存####</p><p>如下範例中輸出6列。<strong>vmstat</strong>的man頁面中解析的每一列的意義。最重要的是內存中的<strong>free</strong>屬性和交換分區中的<strong>si</strong>和<strong>so</strong>屬性。</p><pre><code>[root@tecmint ~]# vmstat -a

procs -----------memory---------- ---swap-- -----io---- --system-- -----cpu-----
 r  b   swpd   free  inact active   si   so    bi    bo   in   cs us sy id wa st
 1  0      0 810420  97380  70628    0    0   115     4   89   79  1  6 90  3  0
</code></pre><ul><li><strong>Free</strong> – 空閒的內存空間</li><li><strong>si</strong> – 每秒從磁盤中交換進內存的數據量（以KB為單位）。</li><li><strong>so</strong> – 每秒從內存中交換出磁盤的數據量（以KB為單位）。</li></ul><p><strong>注意</strong>：如果你不帶參數的執行<strong>vmstat</strong>命令，它會輸出自系統啓動以來的總結報告。</p><p>####2. 每X秒執行vmstat，共執行N次####</p><p>下面命令將會每2秒中執行一次<strong>vmstat</strong>，執行6次後自動停止執行。</p><pre><code>[root@tecmint ~]# vmstat 2 6

procs -----------memory---------- ---swap-- -----io---- --system-- -----cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 0  0      0 810420  22064 101368    0    0    56     3   50   57  0  3 95  2  0
 0  0      0 810412  22064 101368    0    0     0     0   16   35  0  0 100  0  0
 0  0      0 810412  22064 101368    0    0     0     0   14   35  0  0 100  0  0
 0  0      0 810412  22064 101368    0    0     0     0   17   38  0  0 100  0  0
 0  0      0 810412  22064 101368    0    0     0     0   17   35  0  0 100  0  0
 0  0      0 810412  22064 101368    0    0     0     0   18   36  0  1 100  0  0
</code></pre><p>####3. 帶時間戳的vmstat命令####</p><p>帶<strong>-t</strong>參數執行<strong>vmstat</strong>命令，該命令將會在每一行輸出後都帶一個時間戳，如下所示。</p><pre><code>[tecmint@tecmint ~]$ vmstat -t 1 5

procs -----------memory---------- ---swap-- -----io---- --system-- -----cpu------ ---timestamp---
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 0  0      0 632028  24992 192244    0    0    70     5   55   78  1  3 95  1  0        2012-09-02 14:57:18 IST
 1  0      0 632028  24992 192244    0    0     0     0  171  514  1  5 94  0  0        2012-09-02 14:57:19 IST
 1  0      0 631904  24992 192244    0    0     0     0  195  600  0  5 95  0  0        2012-09-02 14:57:20 IST
 0  0      0 631780  24992 192244    0    0     0     0  156  524  0  5 95  0  0        2012-09-02 14:57:21 IST
 1  0      0 631656  24992 192244    0    0     0     0  189  592  0  5 95  0  0        2012-09-02 14:57:22 IST
</code></pre><p>####4. 統計各種計數器####</p><p><strong>vmstat</strong>命令的<strong>-s</strong>參數，將輸出各種事件計數器和內存的統計信息。</p><pre><code>[tecmint@tecmint ~]$ vmstat -s

      1030800  total memory
       524656  used memory
       277784  active memory
       185920  inactive memory
       506144  free memory
        26864  buffer memory
       310104  swap cache
      2064376  total swap
            0  used swap
      2064376  free swap
         4539 non-nice user cpu ticks
            0 nice user cpu ticks
        11569 system cpu ticks
       329608 idle cpu ticks
         5012 IO-wait cpu ticks
           79 IRQ cpu ticks
           74 softirq cpu ticks
            0 stolen cpu ticks
       336038 pages paged in
        67945 pages paged out
            0 pages swapped in
            0 pages swapped out
       258526 interrupts
       392439 CPU context switches
   1346574857 boot time
     2309 forks
</code></pre><p>####5. 磁盤統計信息####</p><p><strong>vmstat</strong>的<strong>-d</strong>參數將會輸出所有磁盤的統計信息。</p><pre><code>[tecmint@tecmint ~]$ vmstat -d

disk- ------------reads------------ ------------writes----------- -----IO------
       total merged sectors      ms  total merged sectors      ms    cur    sec
ram0       0      0       0       0      0      0       0       0      0      0
ram1       0      0       0       0      0      0       0       0      0      0
ram2       0      0       0       0      0      0       0       0      0      0
ram3       0      0       0       0      0      0       0       0      0      0
ram4       0      0       0       0      0      0       0       0      0      0
ram5       0      0       0       0      0      0       0       0      0      0
ram6       0      0       0       0      0      0       0       0      0      0
ram7       0      0       0       0      0      0       0       0      0      0
ram8       0      0       0       0      0      0       0       0      0      0
ram9       0      0       0       0      0      0       0       0      0      0
ram10      0      0       0       0      0      0       0       0      0      0
ram11      0      0       0       0      0      0       0       0      0      0
ram12      0      0       0       0      0      0       0       0      0      0
ram13      0      0       0       0      0      0       0       0      0      0
ram14      0      0       0       0      0      0       0       0      0      0
ram15      0      0       0       0      0      0       0       0      0      0
loop0      0      0       0       0      0      0       0       0      0      0
loop1      0      0       0       0      0      0       0       0      0      0
loop2      0      0       0       0      0      0       0       0      0      0
loop3      0      0       0       0      0      0       0       0      0      0
loop4      0      0       0       0      0      0       0       0      0      0
loop5      0      0       0       0      0      0       0       0      0      0
loop6      0      0       0       0      0      0       0       0      0      0
loop7      0      0       0       0      0      0       0       0      0      0
sr0        0      0       0       0      0      0       0       0      0      0
sda     7712   5145  668732  409619   3282  28884  257402  644566      0    126
dm-0   11578      0  659242 1113017  32163      0  257384 8460026      0    126
dm-1     324      0    2592    3845      0      0       0       0      0      2
</code></pre><p>####6. 以MB為單位輸出統計信息####</p><p><strong>vmstat</strong>的<strong>-S</strong>和<strong>-M</strong>參數（大寫和MB）將會以MB為單位輸出。<strong>vmstat</strong>默認以KB為單位輸出統計信息。</p><pre><code>[root@tecmint ~]# vmstat -S M 1 5

procs -----------memory---------- ---swap-- -----io---- --system-- -----cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 0  0      0    346     53    476    0    0    95     8   42   55  0  2 96  2  0
 0  0      0    346     53    476    0    0     0     0   12   15  0  0 100  0  0
 0  0      0    346     53    476    0    0     0     0   32   62  0  0 100  0  0
 0  0      0    346     53    476    0    0     0     0   15   13  0  0 100  0  0
 0  0      0    346     53    476    0    0     0     0   34   61  0  1 99  0  0
</code></pre><p>###linux下的Iostat命令的6個範例###</p><p>####1. 輸出CPU和輸入/輸出（I/O）的統計信息####</p><p>不帶參數的<strong>iostat</strong>命令將會輸出<strong>CPU</strong>和每個分區的<strong>輸出/輸出</strong>的統計信息，如下所示。</p><pre><code>[root@tecmint ~]# iostat

Linux 2.6.32-279.el6.i686 (tecmint.com)         09/03/2012      _i686_  (1 CPU)

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.12    0.01    1.54    2.08    0.00   96.24

Device:            tps   Blk_read/s   Blk_wrtn/s   Blk_read   Blk_wrtn
sda               3.59       161.02        13.48    1086002      90882
dm-0              5.76       159.71        13.47    1077154      90864
dm-1              0.05         0.38         0.00       2576          0
</code></pre><p>####2. 只輸出CPU的統計信息####</p><p><strong>iostat</strong>命令的<strong>-c</strong>參數僅輸出<strong>CPU</strong>的統計信息，如下所示。</p><pre><code>[root@tecmint ~]# iostat -c

Linux 2.6.32-279.el6.i686 (tecmint.com)         09/03/2012      _i686_  (1 CPU)

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.12    0.01    1.47    1.98    0.00   96.42
</code></pre><p>####3. 只輸出磁盤的輸入/輸出統計信息####</p><p><strong>iostat</strong>命令的<strong>-d</strong>參數僅輸出磁盤的所有分區的<strong>輸入/輸出</strong>的統計信息，如下所示。</p><pre><code>[root@tecmint ~]# iostat -d

Linux 2.6.32-279.el6.i686 (tecmint.com)         09/03/2012      _i686_  (1 CPU)

Device:            tps   Blk_read/s   Blk_wrtn/s   Blk_read   Blk_wrtn
sda               3.35       149.81        12.66    1086002      91746
dm-0              5.37       148.59        12.65    1077154      91728
dm-1              0.04         0.36         0.00       2576          0
</code></pre><p>####4. 只輸出某個磁盤的輸入/輸出統計信息####</p><p>在默認情況下iostat命令會輸出所有分區的統計信息，但是若在iostat命令後加上<strong>-p</strong>參數和磁盤設備名，該命令將會僅輸出列出的磁盤的輸入/輸出統計信息，如下所示。</p><pre><code>[root@tecmint ~]# iostat -p sda

Linux 2.6.32-279.el6.i686 (tecmint.com)         09/03/2012      _i686_  (1 CPU)

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.11    0.01    1.44    1.92    0.00   96.52

Device:            tps   Blk_read/s   Blk_wrtn/s   Blk_read   Blk_wrtn
sda               3.32       148.52        12.55    1086002      91770
sda1              0.07         0.56         0.00       4120         18
sda2              3.22       147.79        12.55    1080650      91752
</code></pre><p>####5. 輸出邏輯卷管理（LVM）的統計信息####</p>`,40)),o("p",null,[t[6]||(t[6]=n("iostat命令的",-1)),t[7]||(t[7]=o("strong",null,"-N",-1)),t[8]||(t[8]=n("(大寫)參數將會輸出",-1)),t[9]||(t[9]=o("strong",null,"LVM",-1)),t[10]||(t[10]=n("（LCTT譯註：",-1)),r(s,{href:"http://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)"},{default:e(()=>[...t[5]||(t[5]=[n("LVM",-1)])]),_:1}),t[11]||(t[11]=n("是linux環境下對磁盤分區進行管理的一種機制，是磁盤分區和文件系統間的一個邏輯層）的統計信息，如下所示。",-1))]),t[27]||(t[27]=i(`<pre><code>[root@tecmint ~]# iostat -N

Linux 2.6.32-279.el6.i686 (tecmint.com)         09/03/2012      _i686_  (1 CPU)

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.11    0.01    1.39    1.85    0.00   96.64

Device:            tps   Blk_read/s   Blk_wrtn/s   Blk_read   Blk_wrtn
sda               3.20       142.84        12.16    1086002      92466
vg_tecmint-lv_root     5.13       141.68        12.16    1077154      92448
vg_tecmint-lv_swap     0.04         0.34         0.00       2576          0
</code></pre><p>####6. iostat版本信息####</p><p>iostat的<strong>-V</strong>(大寫)參數將會輸出<strong>iostat</strong>的版本信息，如下所示。</p><pre><code>[root@tecmint ~]# iostat -V

sysstat version 9.0.4
(C) Sebastien Godard (sysstat  orange.fr)
</code></pre><p><strong>注意</strong>：<strong>vmstat</strong>和<strong>iostat</strong>的輸出中包含多列的數據和標誌，限於篇幅無法在本文中進行詳細的解析。如果你想知道更多的信息，請查看<strong>vmstat</strong>和<strong>iostat</strong>的man幫助手冊。如果你覺得本文對你有價值，請在下面的評論框中與你的朋友分享。</p><hr>`,6)),o("p",null,[t[13]||(t[13]=n("via: ",-1)),r(s,{href:"http://www.tecmint.com/linux-performance-monitoring-with-vmstat-and-iostat-commands/"},{default:e(()=>[...t[12]||(t[12]=[n("http://www.tecmint.com/linux-performance-monitoring-with-vmstat-and-iostat-commands/",-1)])]),_:1})]),o("p",null,[t[17]||(t[17]=n("作者：",-1)),r(s,{href:"http://www.tecmint.com/author/admin/"},{default:e(()=>[...t[14]||(t[14]=[n("Ravi Saive",-1)])]),_:1}),t[18]||(t[18]=n(" 譯者：",-1)),r(s,{href:"https://github.com/cvsher"},{default:e(()=>[...t[15]||(t[15]=[n("cvsher",-1)])]),_:1}),t[19]||(t[19]=n(" 校對：",-1)),r(s,{href:"https://github.com/wxy"},{default:e(()=>[...t[16]||(t[16]=[n("wxy",-1)])]),_:1})]),o("p",null,[t[22]||(t[22]=n("本文由 ",-1)),r(s,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...t[20]||(t[20]=[n("LCTT",-1)])]),_:1}),t[23]||(t[23]=n(" 原創翻譯，",-1)),r(s,{href:"http://linux.cn/"},{default:e(()=>[...t[21]||(t[21]=[n("Linux中國",-1)])]),_:1}),t[24]||(t[24]=n(" 榮譽推出",-1))])])}const C=a(d,[["render",l]]);export{T as __pageData,C as default};
