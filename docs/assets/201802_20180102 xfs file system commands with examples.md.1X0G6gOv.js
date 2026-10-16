import{_ as l,a0 as t,w as o,s as c,I as a,x as n,a1 as p,A as i,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"通过案例学习 xfs 文件系统相关命令 | LCTT x X-CMD","titleTemplate":false,"description":"通过案例学习 xfs 文件系统相关命令 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通过案例学习 xfs 文件系统相关命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通过案例学习 xfs 文件系统相关命令 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20180102 xfs file system commands with examples","title":"通过案例学习 xfs 文件系统相关命令","tag":"201802","desc":""},"relativePath":"201802/20180102 xfs file system commands with examples.md","filePath":"[post].md"}'),r={name:"201802/20180102 xfs file system commands with examples.md"};function f(k,s,g,h,b,m){const e=t("Link");return o(),c("div",null,[s[16]||(s[16]=a("h1",{id:"通过案例学习-xfs-文件系统相关命令",tabindex:"-1"},[n("通过案例学习 xfs 文件系统相关命令 "),a("a",{class:"header-anchor",href:"#通过案例学习-xfs-文件系统相关命令","aria-label":"Permalink to “通过案例学习 xfs 文件系统相关命令”"},"​")],-1)),s[17]||(s[17]=a("p",null,[a("img",{src:"https://a3.kerneltalks.com/wp-content/uploads/2018/01/xfs-commands.png",alt:"Learn xfs commands with examples"})],-1)),a("p",null,[s[1]||(s[1]=n("在我们另一篇文章中，我带您领略了一下",-1)),p(e,{href:"https://kerneltalks.com/disk-management/xfs-filesystem-in-linux/"},{default:i(()=>[...s[0]||(s[0]=[n("什么是 xfs，xfs 的相关特性等内容",-1)])]),_:1}),s[2]||(s[2]=n("。本文我们来看一些常用的 xfs 管理命令。我们将会通过几个例子来讲解如何创建 xfs 文件系统，如何对 xfs 文件系统进行扩容，如何检测并修复 xfs 文件系统。",-1))]),s[18]||(s[18]=d(`<h3 id="创建-xfs-文件系统" tabindex="-1">创建 XFS 文件系统 <a class="header-anchor" href="#创建-xfs-文件系统" aria-label="Permalink to “创建 XFS 文件系统”">​</a></h3><p><code>mkfs.xfs</code> 命令用来创建 xfs 文件系统。无需任何特别的参数，其输出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # mkfs.xfs /dev/xvdf</span></span>
<span class="line"><span>meta-data=/dev/xvdf              isize=512    agcount=4, agsize=1310720 blks</span></span>
<span class="line"><span>         =                       sectsz=512   attr=2, projid32bit=1</span></span>
<span class="line"><span>         =                       crc=1        finobt=0, sparse=0</span></span>
<span class="line"><span>data     =                       bsize=4096   blocks=5242880, imaxpct=25</span></span>
<span class="line"><span>         =                       sunit=0      swidth=0 blks</span></span>
<span class="line"><span>naming   =version 2              bsize=4096   ascii-ci=0 ftype=1</span></span>
<span class="line"><span>log      =internal log           bsize=4096   blocks=2560, version=2</span></span>
<span class="line"><span>         =                       sectsz=512   sunit=0 blks, lazy-count=1</span></span>
<span class="line"><span>realtime =none                   extsz=4096   blocks=0, rtextents=0</span></span></code></pre></div><blockquote><p>注意：一旦 XFS 文件系统创建完毕就不能在缩容而只能进行扩容了。</p></blockquote><h3 id="调整-xfs-文件系统容量" tabindex="-1">调整 XFS 文件系统容量 <a class="header-anchor" href="#调整-xfs-文件系统容量" aria-label="Permalink to “调整 XFS 文件系统容量”">​</a></h3><p>你只能对 XFS 进行扩容而不能缩容。我们使用 <code>xfs_growfs</code> 来进行扩容。你需要使用 <code>-D</code> 参数指定挂载点的新容量。<code>-D</code> 接受一个数字的参数，指定文件系统块的数量。若你没有提供 <code>-D</code> 参数，则 <code>xfs_growfs</code> 会将文件系统扩到最大。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # xfs_growfs /dev/xvdf -D 256</span></span>
<span class="line"><span>meta-data=/dev/xvdf              isize=512    agcount=4, agsize=720896 blks</span></span>
<span class="line"><span>         =                       sectsz=512   attr=2, projid32bit=1</span></span>
<span class="line"><span>         =                       crc=1        finobt=0 spinodes=0</span></span>
<span class="line"><span>data     =                       bsize=4096   blocks=2883584, imaxpct=25</span></span>
<span class="line"><span>         =                       sunit=0      swidth=0 blks</span></span>
<span class="line"><span>naming   =version 2              bsize=4096   ascii-ci=0 ftype=1</span></span>
<span class="line"><span>log      =internal               bsize=4096   blocks=2560, version=2</span></span>
<span class="line"><span>         =                       sectsz=512   sunit=0 blks, lazy-count=1</span></span>
<span class="line"><span>realtime =none                   extsz=4096   blocks=0, rtextents=0</span></span>
<span class="line"><span>data size 256 too small, old size is 2883584</span></span></code></pre></div><p>观察上面的输出中的最后一行。由于我分配的容量要小于现在的容量。它告诉你不能缩减 XFS 文件系统。你只能对它进行扩展。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks #  xfs_growfs /dev/xvdf -D 2883840</span></span>
<span class="line"><span>meta-data=/dev/xvdf              isize=512    agcount=4, agsize=720896 blks</span></span>
<span class="line"><span>         =                       sectsz=512   attr=2, projid32bit=1</span></span>
<span class="line"><span>         =                       crc=1        finobt=0 spinodes=0</span></span>
<span class="line"><span>data     =                       bsize=4096   blocks=2883584, imaxpct=25</span></span>
<span class="line"><span>         =                       sunit=0      swidth=0 blks</span></span>
<span class="line"><span>naming   =version 2              bsize=4096   ascii-ci=0 ftype=1</span></span>
<span class="line"><span>log      =internal               bsize=4096   blocks=2560, version=2</span></span>
<span class="line"><span>         =                       sectsz=512   sunit=0 blks, lazy-count=1</span></span>
<span class="line"><span>realtime =none                   extsz=4096   blocks=0, rtextents=0</span></span>
<span class="line"><span>data blocks changed from 2883584 to 2883840</span></span></code></pre></div><p>现在我多分配了 1GB 的空间，而且也成功地扩增了容量。</p><p><strong>1GB 块的计算方式：</strong></p><p>当前文件系统 bsize 为 4096，意思是块的大小为 4MB。我们需要 1GB，也就是 256 个块。因此在当前块数，2883584 上加上 256 得到 2883840。因此我为 <code>-D</code> 传递参数 2883840。</p><h3 id="修复-xfs-文件系统" tabindex="-1">修复 XFS 文件系统 <a class="header-anchor" href="#修复-xfs-文件系统" aria-label="Permalink to “修复 XFS 文件系统”">​</a></h3><p>可以使用 <code>xfs_repair</code> 命令进行文件系统一致性检查和修复。使用 <code>-n</code> 参数则并不对文件系统做出什么实质性的修改。它只会搜索并报告要做哪些修改。若不带 <code>-n</code> 参数，则会修改文件系统以保证文件系统的纯净。</p><p>请注意，在检查之前，你需要先卸载 XFS 文件系统。否则会报错。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # xfs_repair -n /dev/xvdf</span></span>
<span class="line"><span>xfs_repair: /dev/xvdf contains a mounted filesystem</span></span>
<span class="line"><span>xfs_repair: /dev/xvdf contains a mounted and writable filesystem</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>fatal error -- couldn&#39;t initialize XFS library</span></span></code></pre></div><p>卸载后运行检查命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # xfs_repair -n /dev/xvdf</span></span>
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
<span class="line"><span>No modify flag set, skipping filesystem flush and exiting.</span></span></code></pre></div><p>你可以看到，命令在每个阶段都显示出了为了文件系统变得健康可能做出的修改。若你希望命令在扫描时实际应用这些修改，则不带任何参数运行命令即可。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root @ kerneltalks # xfs_repair /dev/xvdf</span></span>
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
<span class="line"><span>done</span></span></code></pre></div><p>你会发现 <code>xfs_repair</code> 命令对文件系统做出了修改让其变得健康。</p><h3 id="查看-xfs-版本以及它的详细信息" tabindex="-1">查看 XFS 版本以及它的详细信息 <a class="header-anchor" href="#查看-xfs-版本以及它的详细信息" aria-label="Permalink to “查看 XFS 版本以及它的详细信息”">​</a></h3><p>查看 xfs 文件系统版本很简单。使用 <code>-V</code> 参数运行 <code>xfs_info</code> 再加上挂载点就行了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # xfs_info -V /shrikant</span></span>
<span class="line"><span>xfs_info version 4.5.0</span></span></code></pre></div><p>若要查看 XFS 文件系统的详细信息，比如想计算扩容 XFS 文件系统时要新增多少个块，需要了解块大小，块的个数等信息，则不带任何选项运行 <code>xfs_info</code> 加上挂载点。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # xfs_info /shrikant</span></span>
<span class="line"><span>meta-data=/dev/xvdf              isize=512    agcount=5, agsize=720896 blks</span></span>
<span class="line"><span>         =                       sectsz=512   attr=2, projid32bit=1</span></span>
<span class="line"><span>         =                       crc=1        finobt=0 spinodes=0</span></span>
<span class="line"><span>data     =                       bsize=4096   blocks=2883840, imaxpct=25</span></span>
<span class="line"><span>         =                       sunit=0      swidth=0 blks</span></span>
<span class="line"><span>naming   =version 2              bsize=4096   ascii-ci=0 ftype=1</span></span>
<span class="line"><span>log      =internal               bsize=4096   blocks=2560, version=2</span></span>
<span class="line"><span>         =                       sectsz=512   sunit=0 blks, lazy-count=1</span></span>
<span class="line"><span>realtime =none                   extsz=4096   blocks=0, rtextents=0</span></span></code></pre></div><p>则会显示 XFS 文件系统的所有详细信息，就跟创建 XFS 文件系统时显示的信息一样。</p><p>此外还有一些 XFS 文件系统管理命令可以修改并管理 XFS 的元数据。我们将在另一篇文章中来讲解。</p><hr>`,29)),a("p",null,[s[4]||(s[4]=n("via: ",-1)),p(e,{href:"https://kerneltalks.com/commands/xfs-file-system-commands-with-examples/"},{default:i(()=>[...s[3]||(s[3]=[n("https://kerneltalks.com/commands/xfs-file-system-commands-with-examples/",-1)])]),_:1})]),a("p",null,[s[8]||(s[8]=n("作者：",-1)),p(e,{href:"https://kerneltalks.com"},{default:i(()=>[...s[5]||(s[5]=[n("kerneltalks",-1)])]),_:1}),s[9]||(s[9]=n(" 译者：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[6]||(s[6]=[n("lujun9972",-1)])]),_:1}),s[10]||(s[10]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[7]||(s[7]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[13]||(s[13]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[11]||(s[11]=[n("LCTT",-1)])]),_:1}),s[14]||(s[14]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[12]||(s[12]=[n("Linux中国",-1)])]),_:1}),s[15]||(s[15]=n(" 荣誉推出",-1))])])}const y=l(r,[["render",f]]);export{v as __pageData,y as default};
