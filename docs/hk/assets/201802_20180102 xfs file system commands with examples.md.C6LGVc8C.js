import{_ as l,a0 as t,w as o,s as c,I as a,x as n,a1 as p,A as i,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"通過案例學習 xfs 文件系統相關命令 | LCTT x X-CMD","titleTemplate":false,"description":"通過案例學習 xfs 文件系統相關命令 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通過案例學習 xfs 文件系統相關命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通過案例學習 xfs 文件系統相關命令 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20180102 xfs file system commands with examples","title":"通過案例學習 xfs 文件系統相關命令","tag":"201802","desc":""},"relativePath":"201802/20180102 xfs file system commands with examples.md","filePath":"[post].md"}'),r={name:"201802/20180102 xfs file system commands with examples.md"};function f(k,s,g,h,b,m){const e=t("Link");return o(),c("div",null,[s[16]||(s[16]=a("h1",{id:"通過案例學習-xfs-文件系統相關命令",tabindex:"-1"},[n("通過案例學習 xfs 文件系統相關命令 "),a("a",{class:"header-anchor",href:"#通過案例學習-xfs-文件系統相關命令","aria-label":"Permalink to “通過案例學習 xfs 文件系統相關命令”"},"​")],-1)),s[17]||(s[17]=a("p",null,[a("img",{src:"https://a3.kerneltalks.com/wp-content/uploads/2018/01/xfs-commands.png",alt:"Learn xfs commands with examples"})],-1)),a("p",null,[s[1]||(s[1]=n("在我們另一篇文章中，我帶您領略了一下",-1)),p(e,{href:"https://kerneltalks.com/disk-management/xfs-filesystem-in-linux/"},{default:i(()=>[...s[0]||(s[0]=[n("什麼是 xfs，xfs 的相關特性等內容",-1)])]),_:1}),s[2]||(s[2]=n("。本文我們來看一些常用的 xfs 管理命令。我們將會通過幾個例子來講解如何創建 xfs 文件系統，如何對 xfs 文件系統進行擴容，如何檢測並修復 xfs 文件系統。",-1))]),s[18]||(s[18]=d(`<h3 id="創建-xfs-文件系統" tabindex="-1">創建 XFS 文件系統 <a class="header-anchor" href="#創建-xfs-文件系統" aria-label="Permalink to “創建 XFS 文件系統”">​</a></h3><p><code>mkfs.xfs</code> 命令用來創建 xfs 文件系統。無需任何特別的參數，其輸出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # mkfs.xfs /dev/xvdf</span></span>
<span class="line"><span>meta-data=/dev/xvdf              isize=512    agcount=4, agsize=1310720 blks</span></span>
<span class="line"><span>         =                       sectsz=512   attr=2, projid32bit=1</span></span>
<span class="line"><span>         =                       crc=1        finobt=0, sparse=0</span></span>
<span class="line"><span>data     =                       bsize=4096   blocks=5242880, imaxpct=25</span></span>
<span class="line"><span>         =                       sunit=0      swidth=0 blks</span></span>
<span class="line"><span>naming   =version 2              bsize=4096   ascii-ci=0 ftype=1</span></span>
<span class="line"><span>log      =internal log           bsize=4096   blocks=2560, version=2</span></span>
<span class="line"><span>         =                       sectsz=512   sunit=0 blks, lazy-count=1</span></span>
<span class="line"><span>realtime =none                   extsz=4096   blocks=0, rtextents=0</span></span></code></pre></div><blockquote><p>注意：一旦 XFS 文件系統創建完畢就不能在縮容而只能進行擴容了。</p></blockquote><h3 id="調整-xfs-文件系統容量" tabindex="-1">調整 XFS 文件系統容量 <a class="header-anchor" href="#調整-xfs-文件系統容量" aria-label="Permalink to “調整 XFS 文件系統容量”">​</a></h3><p>你只能對 XFS 進行擴容而不能縮容。我們使用 <code>xfs_growfs</code> 來進行擴容。你需要使用 <code>-D</code> 參數指定掛載點的新容量。<code>-D</code> 接受一個數字的參數，指定文件系統塊的數量。若你沒有提供 <code>-D</code> 參數，則 <code>xfs_growfs</code> 會將文件系統擴到最大。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # xfs_growfs /dev/xvdf -D 256</span></span>
<span class="line"><span>meta-data=/dev/xvdf              isize=512    agcount=4, agsize=720896 blks</span></span>
<span class="line"><span>         =                       sectsz=512   attr=2, projid32bit=1</span></span>
<span class="line"><span>         =                       crc=1        finobt=0 spinodes=0</span></span>
<span class="line"><span>data     =                       bsize=4096   blocks=2883584, imaxpct=25</span></span>
<span class="line"><span>         =                       sunit=0      swidth=0 blks</span></span>
<span class="line"><span>naming   =version 2              bsize=4096   ascii-ci=0 ftype=1</span></span>
<span class="line"><span>log      =internal               bsize=4096   blocks=2560, version=2</span></span>
<span class="line"><span>         =                       sectsz=512   sunit=0 blks, lazy-count=1</span></span>
<span class="line"><span>realtime =none                   extsz=4096   blocks=0, rtextents=0</span></span>
<span class="line"><span>data size 256 too small, old size is 2883584</span></span></code></pre></div><p>觀察上面的輸出中的最後一行。由於我分配的容量要小於現在的容量。它告訴你不能縮減 XFS 文件系統。你只能對它進行擴展。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks #  xfs_growfs /dev/xvdf -D 2883840</span></span>
<span class="line"><span>meta-data=/dev/xvdf              isize=512    agcount=4, agsize=720896 blks</span></span>
<span class="line"><span>         =                       sectsz=512   attr=2, projid32bit=1</span></span>
<span class="line"><span>         =                       crc=1        finobt=0 spinodes=0</span></span>
<span class="line"><span>data     =                       bsize=4096   blocks=2883584, imaxpct=25</span></span>
<span class="line"><span>         =                       sunit=0      swidth=0 blks</span></span>
<span class="line"><span>naming   =version 2              bsize=4096   ascii-ci=0 ftype=1</span></span>
<span class="line"><span>log      =internal               bsize=4096   blocks=2560, version=2</span></span>
<span class="line"><span>         =                       sectsz=512   sunit=0 blks, lazy-count=1</span></span>
<span class="line"><span>realtime =none                   extsz=4096   blocks=0, rtextents=0</span></span>
<span class="line"><span>data blocks changed from 2883584 to 2883840</span></span></code></pre></div><p>現在我多分配了 1GB 的空間，而且也成功地擴增了容量。</p><p><strong>1GB 塊的計算方式：</strong></p><p>當前文件系統 bsize 為 4096，意思是塊的大小為 4MB。我們需要 1GB，也就是 256 個塊。因此在當前塊數，2883584 上加上 256 得到 2883840。因此我為 <code>-D</code> 傳遞參數 2883840。</p><h3 id="修復-xfs-文件系統" tabindex="-1">修復 XFS 文件系統 <a class="header-anchor" href="#修復-xfs-文件系統" aria-label="Permalink to “修復 XFS 文件系統”">​</a></h3><p>可以使用 <code>xfs_repair</code> 命令進行文件系統一致性檢查和修復。使用 <code>-n</code> 參數則並不對文件系統做出什麼實質性的修改。它只會搜索並報告要做哪些修改。若不帶 <code>-n</code> 參數，則會修改文件系統以保證文件系統的純淨。</p><p>請注意，在檢查之前，你需要先卸載 XFS 文件系統。否則會報錯。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # xfs_repair -n /dev/xvdf</span></span>
<span class="line"><span>xfs_repair: /dev/xvdf contains a mounted filesystem</span></span>
<span class="line"><span>xfs_repair: /dev/xvdf contains a mounted and writable filesystem</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>fatal error -- couldn&#39;t initialize XFS library</span></span></code></pre></div><p>卸載後運行檢查命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # xfs_repair -n /dev/xvdf</span></span>
<span class="line"><span>Phase 1 - find and verify superblock...</span></span>
<span class="line"><span>Phase 2 - using internal log</span></span>
<span class="line"><span>        - zero log...</span></span>
<span class="line"><span>        - scan filesystem freespace and inode maps...</span></span>
<span class="line"><span>        - found root inode chunk</span></span>
<span class="line"><span>Phase 3 - for each AG...</span></span>
<span class="line"><span>        - scan (but don&#39;t clear) agi unlinked lists...</span></span>
<span class="line"><span>        - process known inodes and perform inode discovery...</span></span>
<span class="line"><span>        - agno = 0</span></span>
<span class="line"><span>        - agno = 1</span></span>
<span class="line"><span>        - agno = 2</span></span>
<span class="line"><span>        - agno = 3</span></span>
<span class="line"><span>        - agno = 4</span></span>
<span class="line"><span>        - process newly discovered inodes...</span></span>
<span class="line"><span>Phase 4 - check for duplicate blocks...</span></span>
<span class="line"><span>        - setting up duplicate extent list...</span></span>
<span class="line"><span>        - check for inodes claiming duplicate blocks...</span></span>
<span class="line"><span>        - agno = 0</span></span>
<span class="line"><span>        - agno = 1</span></span>
<span class="line"><span>        - agno = 2</span></span>
<span class="line"><span>        - agno = 3</span></span>
<span class="line"><span>        - agno = 4</span></span>
<span class="line"><span>No modify flag set, skipping phase 5</span></span>
<span class="line"><span>Phase 6 - check inode connectivity...</span></span>
<span class="line"><span>        - traversing filesystem ...</span></span>
<span class="line"><span>        - traversal finished ...</span></span>
<span class="line"><span>        - moving disconnected inodes to lost+found ...</span></span>
<span class="line"><span>Phase 7 - verify link counts...</span></span>
<span class="line"><span>No modify flag set, skipping filesystem flush and exiting.</span></span></code></pre></div><p>你可以看到，命令在每個階段都顯示出了為了文件系統變得健康可能做出的修改。若你希望命令在掃描時實際應用這些修改，則不帶任何參數運行命令即可。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root @ kerneltalks # xfs_repair /dev/xvdf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Phase 1 - find and verify superblock . . .</span></span>
<span class="line"><span>Phase 2 - using internal log</span></span>
<span class="line"><span>        - zero log . . .</span></span>
<span class="line"><span>        - scan filesystem freespace and inode maps . . .</span></span>
<span class="line"><span>        - found root inode chunk</span></span>
<span class="line"><span>Phase 3 - for each AG . . . </span></span>
<span class="line"><span>        - scan and clear agi unlinked lists . . .</span></span>
<span class="line"><span>        - process known inodes and perform inode discovery . . .</span></span>
<span class="line"><span>        - agno = 0 </span></span>
<span class="line"><span>        - agno = 1</span></span>
<span class="line"><span>        - agno = 2</span></span>
<span class="line"><span>        - agno = 3</span></span>
<span class="line"><span>        - agno = 4</span></span>
<span class="line"><span>        - process newly discovered inodes . . . </span></span>
<span class="line"><span>Phase 4 - check for duplicate blocks . . .</span></span>
<span class="line"><span>        - setting up duplicate extent list . . .</span></span>
<span class="line"><span>        - check for inodes claiming duplicate blocks . . .</span></span>
<span class="line"><span>        - agno = 0</span></span>
<span class="line"><span>        - agno = 1</span></span>
<span class="line"><span>        - agno = 2</span></span>
<span class="line"><span>        - agno = 3</span></span>
<span class="line"><span>        - agno = 4 </span></span>
<span class="line"><span>Phase 5 - rebuild AG headers and trees . . .</span></span>
<span class="line"><span>        - reset superblock . . .</span></span>
<span class="line"><span>Phase 6 - check inode connectivity . . .</span></span>
<span class="line"><span>        - resetting contents of realtime bitmap and summary inodes</span></span>
<span class="line"><span>        - traversing filesystem . . .</span></span>
<span class="line"><span>        - traversal finished . . .</span></span>
<span class="line"><span>        - moving disconnected inodes to lost + found . . .</span></span>
<span class="line"><span>Phase 7 - verify and correct link counts . . . </span></span>
<span class="line"><span>done</span></span></code></pre></div><p>你會發現 <code>xfs_repair</code> 命令對文件系統做出了修改讓其變得健康。</p><h3 id="查看-xfs-版本以及它的詳細信息" tabindex="-1">查看 XFS 版本以及它的詳細信息 <a class="header-anchor" href="#查看-xfs-版本以及它的詳細信息" aria-label="Permalink to “查看 XFS 版本以及它的詳細信息”">​</a></h3><p>查看 xfs 文件系統版本很簡單。使用 <code>-V</code> 參數運行 <code>xfs_info</code> 再加上掛載點就行了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # xfs_info -V /shrikant</span></span>
<span class="line"><span>xfs_info version 4.5.0</span></span></code></pre></div><p>若要查看 XFS 文件系統的詳細信息，比如想計算擴容 XFS 文件系統時要新增多少個塊，需要了解塊大小，塊的個數等信息，則不帶任何選項運行 <code>xfs_info</code> 加上掛載點。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # xfs_info /shrikant</span></span>
<span class="line"><span>meta-data=/dev/xvdf              isize=512    agcount=5, agsize=720896 blks</span></span>
<span class="line"><span>         =                       sectsz=512   attr=2, projid32bit=1</span></span>
<span class="line"><span>         =                       crc=1        finobt=0 spinodes=0</span></span>
<span class="line"><span>data     =                       bsize=4096   blocks=2883840, imaxpct=25</span></span>
<span class="line"><span>         =                       sunit=0      swidth=0 blks</span></span>
<span class="line"><span>naming   =version 2              bsize=4096   ascii-ci=0 ftype=1</span></span>
<span class="line"><span>log      =internal               bsize=4096   blocks=2560, version=2</span></span>
<span class="line"><span>         =                       sectsz=512   sunit=0 blks, lazy-count=1</span></span>
<span class="line"><span>realtime =none                   extsz=4096   blocks=0, rtextents=0</span></span></code></pre></div><p>則會顯示 XFS 文件系統的所有詳細信息，就跟創建 XFS 文件系統時顯示的信息一樣。</p><p>此外還有一些 XFS 文件系統管理命令可以修改並管理 XFS 的元數據。我們將在另一篇文章中來講解。</p><hr>`,29)),a("p",null,[s[4]||(s[4]=n("via: ",-1)),p(e,{href:"https://kerneltalks.com/commands/xfs-file-system-commands-with-examples/"},{default:i(()=>[...s[3]||(s[3]=[n("https://kerneltalks.com/commands/xfs-file-system-commands-with-examples/",-1)])]),_:1})]),a("p",null,[s[8]||(s[8]=n("作者：",-1)),p(e,{href:"https://kerneltalks.com"},{default:i(()=>[...s[5]||(s[5]=[n("kerneltalks",-1)])]),_:1}),s[9]||(s[9]=n(" 譯者：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[6]||(s[6]=[n("lujun9972",-1)])]),_:1}),s[10]||(s[10]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[7]||(s[7]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[13]||(s[13]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[11]||(s[11]=[n("LCTT",-1)])]),_:1}),s[14]||(s[14]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[12]||(s[12]=[n("Linux中國",-1)])]),_:1}),s[15]||(s[15]=n(" 榮譽推出",-1))])])}const y=l(r,[["render",f]]);export{v as __pageData,y as default};
