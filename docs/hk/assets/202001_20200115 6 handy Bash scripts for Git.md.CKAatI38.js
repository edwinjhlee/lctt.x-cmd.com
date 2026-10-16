import{_ as l,a0 as o,w as c,s as r,ao as t,I as a,x as n,a1 as e,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const $=JSON.parse('{"title":"6 個方便的 Git 腳本 | LCTT x X-CMD","titleTemplate":false,"description":"6 個方便的 Git 腳本 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"6 個方便的 Git 腳本 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"6 個方便的 Git 腳本 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20200115 6 handy Bash scripts for Git","title":"6 個方便的 Git 腳本","tag":"202001","desc":""},"relativePath":"202001/20200115 6 handy Bash scripts for Git.md","filePath":"[post].md"}'),g={name:"202001/20200115 6 handy Bash scripts for Git.md"};function d(h,s,u,f,b,m){const p=o("Link");return c(),r("div",null,[s[33]||(s[33]=t(`<h1 id="_6-個方便的-git-腳本" tabindex="-1">6 個方便的 Git 腳本 <a class="header-anchor" href="#_6-個方便的-git-腳本" aria-label="Permalink to “6 個方便的 Git 腳本”">​</a></h1><blockquote><p>當使用 Git 存儲庫時，這六個 Bash 腳本將使你的生活更輕鬆。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202001/18/231713jegbk8fyek798gxb.jpg" alt=""></p><p>我編寫了許多 Bash 腳本，這些腳本使我在使用 Git 存儲庫時工作更加輕鬆。我的許多同事説沒有必要：我所做的一切都可以用 Git 命令完成。雖然這可能是正確的，但我發現腳本遠比嘗試找出適當的 Git 命令來執行我想要的操作更加方便。</p><h3 id="_1、gitlog" tabindex="-1">1、gitlog <a class="header-anchor" href="#_1、gitlog" aria-label="Permalink to “1、gitlog”">​</a></h3><p><code>gitlog</code> 打印針對 master 分支的當前補丁的簡短列表。它從最舊到最新打印它們，並顯示作者和描述，其中 <code>H</code> 代表 <code>HEAD</code>，<code>^</code> 代表 <code>HEAD^</code>，<code>2</code> 代表 <code>HEAD~2</code>，依此類推。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gitlog</span></span>
<span class="line"><span>-----------------------[ recovery25 ]-----------------------</span></span>
<span class="line"><span>(snip)</span></span>
<span class="line"><span>11 340d27a33895 Bob Peterson     gfs2: drain the ail2 list after io errors</span></span>
<span class="line"><span>10 9b3c4e6efb10 Bob Peterson     gfs2: clean up iopen glock mess in gfs2_create_inode</span></span>
<span class="line"><span> 9 d2e8c22be39b Bob Peterson     gfs2: Do proper error checking for go_sync family of glops</span></span>
<span class="line"><span> 8 9563e31f8bfd Christoph Hellwig gfs2: use page_offset in gfs2_page_mkwrite</span></span>
<span class="line"><span> 7 ebac7a38036c Christoph Hellwig gfs2: don&#39;t use buffer_heads in gfs2_allocate_page_backing</span></span>
<span class="line"><span> 6 f703a3c27874 Andreas Gruenbacher gfs2: Improve mmap write vs. punch_hole consistency</span></span>
<span class="line"><span> 5 a3e86d2ef30e Andreas Gruenbacher gfs2: Multi-block allocations in gfs2_page_mkwrite</span></span>
<span class="line"><span> 4 da3c604755b0 Andreas Gruenbacher gfs2: Fix end-of-file handling in gfs2_page_mkwrite</span></span>
<span class="line"><span> 3 4525c2f5b46f Bob Peterson     Rafael Aquini&#39;s slab instrumentation</span></span>
<span class="line"><span> 2 a06a5b7dea02 Bob Peterson     GFS2: Add go_get_holdtime to gl_ops</span></span>
<span class="line"><span> ^ 8ba93c796d5c Bob Peterson     gfs2: introduce new function remaining_hold_time and use it in dq</span></span>
<span class="line"><span> H e8b5ff851bb9 Bob Peterson     gfs2: Allow rgrps to have a minimum hold time</span></span></code></pre></div><p>如果我想查看其他分支上有哪些補丁，可以指定一個替代分支：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gitlog recovery24</span></span></code></pre></div><h3 id="_2、gitlog-id" tabindex="-1">2、gitlog.id <a class="header-anchor" href="#_2、gitlog-id" aria-label="Permalink to “2、gitlog.id”">​</a></h3><p><code>gitlog.id</code> 只是打印出補丁的 SHA1 ID：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gitlog.id</span></span>
<span class="line"><span>-----------------------[ recovery25 ]-----------------------</span></span>
<span class="line"><span>56908eeb6940 2ca4a6b628a1 fc64ad5d99fe 02031a00a251 f6f38da7dd18 d8546e8f0023 fc3cc1f98f6b 12c3e0cb3523 76cce178b134 6fc1dce3ab9c 1b681ab074ca 26fed8de719b 802ff51a5670 49f67a512d8c f04f20193bbb 5f6afe809d23 2030521dc70e dada79b3be94 9b19a1e08161 78a035041d3e f03da011cae2 0d2b2e068fcd 2449976aa133 57dfb5e12ccd 53abedfdcf72 6fbdda3474b3 49544a547188 187032f7a63c 6f75dae23d93 95fc2a261b00 ebfb14ded191 f653ee9e414a 0e2911cb8111 73968b76e2e3 8a3e4cb5e92c a5f2da803b5b 7c9ef68388ed 71ca19d0cba8 340d27a33895 9b3c4e6efb10 d2e8c22be39b 9563e31f8bfd ebac7a38036c f703a3c27874 a3e86d2ef30e da3c604755b0 4525c2f5b46f a06a5b7dea02 8ba93c796d5c e8b5ff851bb9</span></span></code></pre></div><p>同樣，它假定是當前分支，但是如果需要，我可以指定其他分支。</p><h3 id="_3、gitlog-id2" tabindex="-1">3、gitlog.id2 <a class="header-anchor" href="#_3、gitlog-id2" aria-label="Permalink to “3、gitlog.id2”">​</a></h3><p><code>gitlog.id2</code> 與 <code>gitlog.id</code> 相同，但頂部沒有顯示分支的行。這對於從一個分支挑選所有補丁到當前分支很方便：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ # 創建一個新分支</span></span>
<span class="line"><span>$ git branch --track origin/master</span></span>
<span class="line"><span>$ # 檢出剛剛創建的新分支</span></span>
<span class="line"><span>$ git checkout recovery26</span></span>
<span class="line"><span>$ # 從舊的分支挑選所有補丁到新分支</span></span>
<span class="line"><span>$ for i in \`gitlog.id2 recovery25\` ; do git cherry-pick $i ;done</span></span></code></pre></div><h3 id="_4、gitlog-grep" tabindex="-1">4、gitlog.grep <a class="header-anchor" href="#_4、gitlog-grep" aria-label="Permalink to “4、gitlog.grep”">​</a></h3><p><code>gitlog.grep</code> 會在該補丁集合中尋找一個字符串。例如，如果我發現一個錯誤並想修復引用了函數 <code>inode_go_sync</code> 的補丁，我可以簡單地執行以下操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gitlog.grep inode_go_sync</span></span>
<span class="line"><span>-----------------------[ recovery25 - 50 patches ]-----------------------</span></span>
<span class="line"><span>(snip)</span></span>
<span class="line"><span>11 340d27a33895 Bob Peterson     gfs2: drain the ail2 list after io errors</span></span>
<span class="line"><span>10 9b3c4e6efb10 Bob Peterson     gfs2: clean up iopen glock mess in gfs2_create_inode</span></span>
<span class="line"><span> 9 d2e8c22be39b Bob Peterson     gfs2: Do proper error checking for go_sync family of glops</span></span>
<span class="line"><span>152:-static void inode_go_sync(struct gfs2_glock *gl)</span></span>
<span class="line"><span>153:+static int inode_go_sync(struct gfs2_glock *gl)</span></span>
<span class="line"><span>163:@@ -296,6 +302,7 @@ static void inode_go_sync(struct gfs2_glock *gl)</span></span>
<span class="line"><span> 8 9563e31f8bfd Christoph Hellwig gfs2: use page_offset in gfs2_page_mkwrite</span></span>
<span class="line"><span> 7 ebac7a38036c Christoph Hellwig gfs2: don&#39;t use buffer_heads in gfs2_allocate_page_backing</span></span>
<span class="line"><span> 6 f703a3c27874 Andreas Gruenbacher gfs2: Improve mmap write vs. punch_hole consistency</span></span>
<span class="line"><span> 5 a3e86d2ef30e Andreas Gruenbacher gfs2: Multi-block allocations in gfs2_page_mkwrite</span></span>
<span class="line"><span> 4 da3c604755b0 Andreas Gruenbacher gfs2: Fix end-of-file handling in gfs2_page_mkwrite</span></span>
<span class="line"><span> 3 4525c2f5b46f Bob Peterson     Rafael Aquini&#39;s slab instrumentation</span></span>
<span class="line"><span> 2 a06a5b7dea02 Bob Peterson     GFS2: Add go_get_holdtime to gl_ops</span></span>
<span class="line"><span> ^ 8ba93c796d5c Bob Peterson     gfs2: introduce new function remaining_hold_time and use it in dq</span></span>
<span class="line"><span> H e8b5ff851bb9 Bob Peterson     gfs2: Allow rgrps to have a minimum hold time</span></span></code></pre></div><p>因此，現在我知道補丁 <code>HEAD~9</code> 是需要修復的補丁。我使用 <code>git rebase -i HEAD~10</code> 編輯補丁 9，<code>git commit -a --amend</code>，然後 <code>git rebase --continue</code> 以進行必要的調整。</p><h3 id="_5、gitbranchcmp3" tabindex="-1">5、gitbranchcmp3 <a class="header-anchor" href="#_5、gitbranchcmp3" aria-label="Permalink to “5、gitbranchcmp3”">​</a></h3>`,21)),a("p",null,[s[1]||(s[1]=a("code",null,"gitbranchcmp3",-1)),s[2]||(s[2]=n(" 使我可以將當前分支與另一個分支進行比較，因此我可以將較舊版本的補丁與我的較新版本進行比較，並快速查看已更改和未更改的內容。它生成一個比較腳本（使用了 KDE 工具 ",-1)),e(p,{href:"https://kde.org/applications/development/org.kde.kompare"},{default:i(()=>[...s[0]||(s[0]=[n("Kompare",-1)])]),_:1}),s[3]||(s[3]=n("，該工具也可在 GNOME3 上使用）以比較不太相同的補丁。如果除行號外沒有其他差異，則打印 ",-1)),s[4]||(s[4]=a("code",null,"[SAME]",-1)),s[5]||(s[5]=n("。如果僅存在註釋差異，則打印 ",-1)),s[6]||(s[6]=a("code",null,"[same]",-1)),s[7]||(s[7]=n("（小寫）。例如：",-1))]),s[34]||(s[34]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gitbranchcmp3 recovery24</span></span>
<span class="line"><span>Branch recovery24 has 47 patches</span></span>
<span class="line"><span>Branch recovery25 has 50 patches</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(snip)</span></span>
<span class="line"><span>38 87eb6901607a 340d27a33895 [same] gfs2: drain the ail2 list after io errors</span></span>
<span class="line"><span>39 90fefb577a26 9b3c4e6efb10 [same] gfs2: clean up iopen glock mess in gfs2_create_inode</span></span>
<span class="line"><span>40 ba3ae06b8b0e d2e8c22be39b [same] gfs2: Do proper error checking for go_sync family of glops</span></span>
<span class="line"><span>41 2ab662294329 9563e31f8bfd [SAME] gfs2: use page_offset in gfs2_page_mkwrite</span></span>
<span class="line"><span>42 0adc6d817b7a ebac7a38036c [SAME] gfs2: don&#39;t use buffer_heads in gfs2_allocate_page_backing</span></span>
<span class="line"><span>43 55ef1f8d0be8 f703a3c27874 [SAME] gfs2: Improve mmap write vs. punch_hole consistency</span></span>
<span class="line"><span>44 de57c2f72570 a3e86d2ef30e [SAME] gfs2: Multi-block allocations in gfs2_page_mkwrite</span></span>
<span class="line"><span>45 7c5305fbd68a da3c604755b0 [SAME] gfs2: Fix end-of-file handling in gfs2_page_mkwrite</span></span>
<span class="line"><span>46 162524005151 4525c2f5b46f [SAME] Rafael Aquini&#39;s slab instrumentation</span></span>
<span class="line"><span>47              a06a5b7dea02 [    ] GFS2: Add go_get_holdtime to gl_ops</span></span>
<span class="line"><span>48              8ba93c796d5c [    ] gfs2: introduce new function remaining_hold_time and use it in dq</span></span>
<span class="line"><span>49              e8b5ff851bb9 [    ] gfs2: Allow rgrps to have a minimum hold time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Missing from recovery25:</span></span>
<span class="line"><span>The missing:</span></span>
<span class="line"><span>Compare script generated at: /tmp/compare_mismatches.sh</span></span></code></pre></div><h3 id="_6、gitlog-find" tabindex="-1">6、gitlog.find <a class="header-anchor" href="#_6、gitlog-find" aria-label="Permalink to “6、gitlog.find”">​</a></h3><p>最後，我有一個 <code>gitlog.find</code> 腳本，可以幫助我識別補丁程序的上游版本在哪裏以及每個補丁的當前狀態。它通過匹配補丁説明來實現。它還會生成一個比較腳本（再次使用了 Kompare），以將當前補丁與上游對應補丁進行比較：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gitlog.find</span></span>
<span class="line"><span>-----------------------[ recovery25 - 50 patches ]-----------------------</span></span>
<span class="line"><span>(snip)</span></span>
<span class="line"><span>11 340d27a33895 Bob Peterson     gfs2: drain the ail2 list after io errors</span></span>
<span class="line"><span>lo 5bcb9be74b2a Bob Peterson     gfs2: drain the ail2 list after io errors</span></span>
<span class="line"><span>10 9b3c4e6efb10 Bob Peterson     gfs2: clean up iopen glock mess in gfs2_create_inode</span></span>
<span class="line"><span>fn 2c47c1be51fb Bob Peterson     gfs2: clean up iopen glock mess in gfs2_create_inode</span></span>
<span class="line"><span> 9 d2e8c22be39b Bob Peterson     gfs2: Do proper error checking for go_sync family of glops</span></span>
<span class="line"><span>lo feb7ea639472 Bob Peterson     gfs2: Do proper error checking for go_sync family of glops</span></span>
<span class="line"><span> 8 9563e31f8bfd Christoph Hellwig gfs2: use page_offset in gfs2_page_mkwrite</span></span>
<span class="line"><span>ms f3915f83e84c Christoph Hellwig gfs2: use page_offset in gfs2_page_mkwrite</span></span>
<span class="line"><span> 7 ebac7a38036c Christoph Hellwig gfs2: don&#39;t use buffer_heads in gfs2_allocate_page_backing</span></span>
<span class="line"><span>ms 35af80aef99b Christoph Hellwig gfs2: don&#39;t use buffer_heads in gfs2_allocate_page_backing</span></span>
<span class="line"><span> 6 f703a3c27874 Andreas Gruenbacher gfs2: Improve mmap write vs. punch_hole consistency</span></span>
<span class="line"><span>fn 39c3a948ecf6 Andreas Gruenbacher gfs2: Improve mmap write vs. punch_hole consistency</span></span>
<span class="line"><span> 5 a3e86d2ef30e Andreas Gruenbacher gfs2: Multi-block allocations in gfs2_page_mkwrite</span></span>
<span class="line"><span>fn f53056c43063 Andreas Gruenbacher gfs2: Multi-block allocations in gfs2_page_mkwrite</span></span>
<span class="line"><span> 4 da3c604755b0 Andreas Gruenbacher gfs2: Fix end-of-file handling in gfs2_page_mkwrite</span></span>
<span class="line"><span>fn 184b4e60853d Andreas Gruenbacher gfs2: Fix end-of-file handling in gfs2_page_mkwrite</span></span>
<span class="line"><span> 3 4525c2f5b46f Bob Peterson     Rafael Aquini&#39;s slab instrumentation</span></span>
<span class="line"><span>   Not found upstream</span></span>
<span class="line"><span> 2 a06a5b7dea02 Bob Peterson     GFS2: Add go_get_holdtime to gl_ops</span></span>
<span class="line"><span>   Not found upstream</span></span>
<span class="line"><span> ^ 8ba93c796d5c Bob Peterson     gfs2: introduce new function remaining_hold_time and use it in dq</span></span>
<span class="line"><span>   Not found upstream</span></span>
<span class="line"><span> H e8b5ff851bb9 Bob Peterson     gfs2: Allow rgrps to have a minimum hold time</span></span>
<span class="line"><span>   Not found upstream</span></span>
<span class="line"><span>Compare script generated: /tmp/compare_upstream.sh</span></span></code></pre></div><p>補丁顯示為兩行，第一行是你當前的修補程序，然後是相應的上游補丁，以及 2 個字符的縮寫，以指示其上游狀態：</p>`,5)),a("ul",null,[s[16]||(s[16]=a("li",null,[a("code",null,"lo"),n(" 表示補丁僅在本地（"),a("code",null,"local"),n("）上游 Git 存儲庫中（即尚未推送到上游）。")],-1)),s[17]||(s[17]=a("li",null,[a("code",null,"ms"),n(" 表示補丁位於 Linus Torvald 的主（"),a("code",null,"master"),n("）分支中。")],-1)),a("li",null,[s[10]||(s[10]=a("code",null,"fn",-1)),s[11]||(s[11]=n(" 意味着補丁被推送到我的 “for-next” 開發分支，用於下一個上游合併窗口。    我的一些腳本根據我通常使用 Git 的方式做出假設。例如，當搜索上游補丁時，它使用我眾所周知的 Git 樹的位置。因此，你需要調整或改進它們以適合你的條件。",-1)),s[12]||(s[12]=a("code",null,"gitlog.find",-1)),s[13]||(s[13]=n(" 腳本旨在僅定位 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/GFS2"},{default:i(()=>[...s[8]||(s[8]=[n("GFS2",-1)])]),_:1}),s[14]||(s[14]=n(" 和 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Distributed_lock_manager"},{default:i(()=>[...s[9]||(s[9]=[n("DLM",-1)])]),_:1}),s[15]||(s[15]=n(" 補丁，因此，除非你是 GFS2 開發人員，否則你需要針對你感興趣的組件對其進行自定義。",-1))])]),s[35]||(s[35]=t(`<h3 id="源代碼" tabindex="-1">源代碼 <a class="header-anchor" href="#源代碼" aria-label="Permalink to “源代碼”">​</a></h3><p>以下是這些腳本的源代碼。</p><h4 id="_1、gitlog-1" tabindex="-1">1、gitlog <a class="header-anchor" href="#_1、gitlog-1" aria-label="Permalink to “1、gitlog”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>branch=$1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if test &quot;x$branch&quot; = x; then</span></span>
<span class="line"><span>    branch=\`git branch -a | grep &quot;*&quot; | cut -d &#39; &#39; -f2\`</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>patches=0</span></span>
<span class="line"><span>tracking=\`git rev-parse --abbrev-ref --symbolic-full-name @{u}\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LIST=\`git log --reverse --abbrev-commit --pretty=oneline $tracking..$branch | cut -d &#39; &#39; -f1 |paste -s -d &#39; &#39;\`</span></span>
<span class="line"><span>for i in $LIST; do patches=$(echo $patches + 1 | bc);done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [[ $branch =~ .*for-next.* ]]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>    start=HEAD</span></span>
<span class="line"><span>#    start=origin/for-next</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    start=origin/master</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tracking=\`git rev-parse --abbrev-ref --symbolic-full-name @{u}\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/usr/bin/echo &quot;-----------------------[&quot; $branch &quot;]-----------------------&quot;</span></span>
<span class="line"><span>patches=$(echo $patches - 1 | bc);</span></span>
<span class="line"><span>for i in $LIST; do</span></span>
<span class="line"><span>    if [ $patches -eq 1 ]; then</span></span>
<span class="line"><span>        cnt=&quot; ^&quot;</span></span>
<span class="line"><span>    elif [ $patches -eq 0 ]; then</span></span>
<span class="line"><span>        cnt=&quot; H&quot;</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        if [ $patches -lt 10 ]; then</span></span>
<span class="line"><span>            cnt=&quot; $patches&quot;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            cnt=&quot;$patches&quot;</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    /usr/bin/git show --abbrev-commit -s --pretty=format:&quot;$cnt %h %&lt;|(32)%an %s %n&quot; $i</span></span>
<span class="line"><span>    patches=$(echo $patches - 1 | bc)</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>#git log --reverse --abbrev-commit --pretty=format:&quot;%h %&lt;|(32)%an %s&quot; $tracking..$branch</span></span>
<span class="line"><span>#git log --reverse --abbrev-commit --pretty=format:&quot;%h %&lt;|(32)%an %s&quot; ^origin/master ^linux-gfs2/for-next $branch</span></span></code></pre></div><h4 id="_2、gitlog-id-1" tabindex="-1">2、gitlog.id <a class="header-anchor" href="#_2、gitlog-id-1" aria-label="Permalink to “2、gitlog.id”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>branch=$1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if test &quot;x$branch&quot; = x; then</span></span>
<span class="line"><span>    branch=\`git branch -a | grep &quot;*&quot; | cut -d &#39; &#39; -f2\`</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tracking=\`git rev-parse --abbrev-ref --symbolic-full-name @{u}\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/usr/bin/echo &quot;-----------------------[&quot; $branch &quot;]-----------------------&quot;</span></span>
<span class="line"><span>git log --reverse --abbrev-commit --pretty=oneline $tracking..$branch | cut -d &#39; &#39; -f1 |paste -s -d &#39; &#39;</span></span></code></pre></div><h4 id="_3、gitlog-id2-1" tabindex="-1">3、gitlog.id2 <a class="header-anchor" href="#_3、gitlog-id2-1" aria-label="Permalink to “3、gitlog.id2”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>branch=$1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if test &quot;x$branch&quot; = x; then</span></span>
<span class="line"><span>    branch=\`git branch -a | grep &quot;*&quot; | cut -d &#39; &#39; -f2\`</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tracking=\`git rev-parse --abbrev-ref --symbolic-full-name @{u}\`</span></span>
<span class="line"><span>git log --reverse --abbrev-commit --pretty=oneline $tracking..$branch | cut -d &#39; &#39; -f1 |paste -s -d &#39; &#39;</span></span></code></pre></div><h4 id="_4、gitlog-grep-1" tabindex="-1">4、gitlog.grep <a class="header-anchor" href="#_4、gitlog-grep-1" aria-label="Permalink to “4、gitlog.grep”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>param1=$1</span></span>
<span class="line"><span>param2=$2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if test &quot;x$param2&quot; = x; then</span></span>
<span class="line"><span>    branch=\`git branch -a | grep &quot;*&quot; | cut -d &#39; &#39; -f2\`</span></span>
<span class="line"><span>    string=$param1</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    branch=$param1</span></span>
<span class="line"><span>    string=$param2</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>patches=0</span></span>
<span class="line"><span>tracking=\`git rev-parse --abbrev-ref --symbolic-full-name @{u}\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LIST=\`git log --reverse --abbrev-commit --pretty=oneline $tracking..$branch | cut -d &#39; &#39; -f1 |paste -s -d &#39; &#39;\`</span></span>
<span class="line"><span>for i in $LIST; do patches=$(echo $patches + 1 | bc);done</span></span>
<span class="line"><span>/usr/bin/echo &quot;-----------------------[&quot; $branch &quot;-&quot; $patches &quot;patches ]-----------------------&quot;</span></span>
<span class="line"><span>patches=$(echo $patches - 1 | bc);</span></span>
<span class="line"><span>for i in $LIST; do</span></span>
<span class="line"><span>    if [ $patches -eq 1 ]; then</span></span>
<span class="line"><span>        cnt=&quot; ^&quot;</span></span>
<span class="line"><span>    elif [ $patches -eq 0 ]; then</span></span>
<span class="line"><span>        cnt=&quot; H&quot;</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        if [ $patches -lt 10 ]; then</span></span>
<span class="line"><span>            cnt=&quot; $patches&quot;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            cnt=&quot;$patches&quot;</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    /usr/bin/git show --abbrev-commit -s --pretty=format:&quot;$cnt %h %&lt;|(32)%an %s&quot; $i</span></span>
<span class="line"><span>    /usr/bin/git show --pretty=email --patch-with-stat $i | grep -n &quot;$string&quot;</span></span>
<span class="line"><span>    patches=$(echo $patches - 1 | bc)</span></span>
<span class="line"><span>done</span></span></code></pre></div><h4 id="_5、gitbranchcmp3-1" tabindex="-1">5、gitbranchcmp3 <a class="header-anchor" href="#_5、gitbranchcmp3-1" aria-label="Permalink to “5、gitbranchcmp3”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># gitbranchcmp3 &lt;old branch&gt; [&lt;new_branch&gt;]</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>oldbranch=$1</span></span>
<span class="line"><span>newbranch=$2</span></span>
<span class="line"><span>script=/tmp/compare_mismatches.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/usr/bin/rm -f $script</span></span>
<span class="line"><span>echo &quot;#!/bin/bash&quot; &gt; $script</span></span>
<span class="line"><span>/usr/bin/chmod 755 $script</span></span>
<span class="line"><span>echo &quot;# Generated by gitbranchcmp3.sh&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;# Run this script to compare the mismatched patches&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot; &quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;function compare_them()&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;{&quot;  &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;    git show --pretty=email --patch-with-stat \\$1 &gt; /tmp/gronk1&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;    git show --pretty=email --patch-with-stat \\$2 &gt; /tmp/gronk2&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;    kompare /tmp/gronk1 /tmp/gronk2&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;}&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot; &quot; &gt;&gt; $script</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if test &quot;x$newbranch&quot; = x; then</span></span>
<span class="line"><span>    newbranch=\`git branch -a | grep &quot;*&quot; | cut -d &#39; &#39; -f2\`</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tracking=\`git rev-parse --abbrev-ref --symbolic-full-name @{u}\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare -a oldsha1s=(\`git log --reverse --abbrev-commit --pretty=oneline $tracking..$oldbranch | cut -d &#39; &#39; -f1 |paste -s -d &#39; &#39;\`)</span></span>
<span class="line"><span>declare -a newsha1s=(\`git log --reverse --abbrev-commit --pretty=oneline $tracking..$newbranch | cut -d &#39; &#39; -f1 |paste -s -d &#39; &#39;\`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#echo &quot;old: &quot; $oldsha1s</span></span>
<span class="line"><span>oldcount=\${#oldsha1s[@]}</span></span>
<span class="line"><span>echo &quot;Branch $oldbranch has $oldcount patches&quot;</span></span>
<span class="line"><span>oldcount=$(echo $oldcount - 1 | bc)</span></span>
<span class="line"><span>#for o in \`seq 0 \${#oldsha1s[@]}\`; do</span></span>
<span class="line"><span>#    echo -n \${oldsha1s[$o]} &quot; &quot;</span></span>
<span class="line"><span>#    desc=\`git show $i | head -5 | tail -1|cut -b5-\`</span></span>
<span class="line"><span>#done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#echo &quot;new: &quot; $newsha1s</span></span>
<span class="line"><span>newcount=\${#newsha1s[@]}</span></span>
<span class="line"><span>echo &quot;Branch $newbranch has $newcount patches&quot;</span></span>
<span class="line"><span>newcount=$(echo $newcount - 1 | bc)</span></span>
<span class="line"><span>#for o in \`seq 0 \${#newsha1s[@]}\`; do</span></span>
<span class="line"><span>#    echo -n \${newsha1s[$o]} &quot; &quot;</span></span>
<span class="line"><span>#    desc=\`git show $i | head -5 | tail -1|cut -b5-\`</span></span>
<span class="line"><span>#done</span></span>
<span class="line"><span>echo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for new in \`seq 0 $newcount\`; do</span></span>
<span class="line"><span>    newsha=\${newsha1s[$new]}</span></span>
<span class="line"><span>    newdesc=\`git show $newsha | head -5 | tail -1|cut -b5-\`</span></span>
<span class="line"><span>    oldsha=&quot;            &quot;</span></span>
<span class="line"><span>    same=&quot;[    ]&quot;</span></span>
<span class="line"><span>    for old in \`seq 0 $oldcount\`; do</span></span>
<span class="line"><span>        if test &quot;\${oldsha1s[$old]}&quot; = &quot;match&quot;; then</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>        olddesc=\`git show \${oldsha1s[$old]} | head -5 | tail -1|cut -b5-\`</span></span>
<span class="line"><span>        if test &quot;$olddesc&quot; = &quot;$newdesc&quot; ; then</span></span>
<span class="line"><span>            oldsha=\${oldsha1s[$old]}</span></span>
<span class="line"><span>            #echo $oldsha</span></span>
<span class="line"><span>            git show $oldsha |tail -n +2 |grep -v &quot;index.*\\.\\.&quot; |grep -v &quot;@@&quot; &gt; /tmp/gronk1</span></span>
<span class="line"><span>            git show $newsha |tail -n +2 |grep -v &quot;index.*\\.\\.&quot; |grep -v &quot;@@&quot;  &gt; /tmp/gronk2</span></span>
<span class="line"><span>            diff /tmp/gronk1 /tmp/gronk2 &amp;&gt; /dev/null</span></span>
<span class="line"><span>            if [ $? -eq 0 ] ;then</span></span>
<span class="line"><span># No differences</span></span>
<span class="line"><span>                same=&quot;[SAME]&quot;</span></span>
<span class="line"><span>                oldsha1s[$old]=&quot;match&quot;</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span>            fi</span></span>
<span class="line"><span>            git show $oldsha |sed -n &#39;/diff/,$p&#39; |grep -v &quot;index.*\\.\\.&quot; |grep -v &quot;@@&quot; &gt; /tmp/gronk1</span></span>
<span class="line"><span>            git show $newsha |sed -n &#39;/diff/,$p&#39; |grep -v &quot;index.*\\.\\.&quot; |grep -v &quot;@@&quot; &gt; /tmp/gronk2</span></span>
<span class="line"><span>            diff /tmp/gronk1 /tmp/gronk2 &amp;&gt; /dev/null</span></span>
<span class="line"><span>            if [ $? -eq 0 ] ;then</span></span>
<span class="line"><span># Differences in comments only</span></span>
<span class="line"><span>                same=&quot;[same]&quot;</span></span>
<span class="line"><span>                oldsha1s[$old]=&quot;match&quot;</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span>            fi</span></span>
<span class="line"><span>            oldsha1s[$old]=&quot;match&quot;</span></span>
<span class="line"><span>            echo &quot;compare_them $oldsha $newsha&quot; &gt;&gt; $script</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>    echo &quot;$new $oldsha $newsha $same $newdesc&quot;</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo</span></span>
<span class="line"><span>echo &quot;Missing from $newbranch:&quot;</span></span>
<span class="line"><span>the_missing=&quot;&quot;</span></span>
<span class="line"><span># Now run through the olds we haven&#39;t matched up</span></span>
<span class="line"><span>for old in \`seq 0 $oldcount\`; do</span></span>
<span class="line"><span>    if test \${oldsha1s[$old]} != &quot;match&quot;; then</span></span>
<span class="line"><span>        olddesc=\`git show \${oldsha1s[$old]} | head -5 | tail -1|cut -b5-\`</span></span>
<span class="line"><span>        echo &quot;\${oldsha1s[$old]} $olddesc&quot;</span></span>
<span class="line"><span>        the_missing=\`echo &quot;$the_missing \${oldsha1s[$old]}&quot;\`</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;The missing: &quot; $the_missing</span></span>
<span class="line"><span>echo &quot;Compare script generated at: $script&quot;</span></span>
<span class="line"><span>#git log --reverse --abbrev-commit --pretty=oneline $tracking..$branch | cut -d &#39; &#39; -f1 |paste -s -d &#39; &#39;</span></span></code></pre></div><h4 id="_6、gitlog-find-1" tabindex="-1">6、gitlog.find <a class="header-anchor" href="#_6、gitlog-find-1" aria-label="Permalink to “6、gitlog.find”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Find the upstream equivalent patch</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># gitlog.find</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>cwd=$PWD</span></span>
<span class="line"><span>param1=$1</span></span>
<span class="line"><span>ubranch=$2</span></span>
<span class="line"><span>patches=0</span></span>
<span class="line"><span>script=/tmp/compare_upstream.sh</span></span>
<span class="line"><span>echo &quot;#!/bin/bash&quot; &gt; $script</span></span>
<span class="line"><span>/usr/bin/chmod 755 $script</span></span>
<span class="line"><span>echo &quot;# Generated by gitbranchcmp3.sh&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;# Run this script to compare the mismatched patches&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot; &quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;function compare_them()&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;{&quot;  &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;    cwd=$PWD&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;    git show --pretty=email --patch-with-stat \\$2 &gt; /tmp/gronk2&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;    cd ~/linux.git/fs/gfs2&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;    git show --pretty=email --patch-with-stat \\$1 &gt; /tmp/gronk1&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;    cd $cwd&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;    kompare /tmp/gronk1 /tmp/gronk2&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot;}&quot; &gt;&gt; $script</span></span>
<span class="line"><span>echo &quot; &quot; &gt;&gt; $script</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#echo &quot;Gathering upstream patch info. Please wait.&quot;</span></span>
<span class="line"><span>branch=\`git branch -a | grep &quot;*&quot; | cut -d &#39; &#39; -f2\`</span></span>
<span class="line"><span>tracking=\`git rev-parse --abbrev-ref --symbolic-full-name @{u}\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ~/linux.git</span></span>
<span class="line"><span>if test &quot;X\${ubranch}&quot; = &quot;X&quot;; then</span></span>
<span class="line"><span>    ubranch=\`git branch -a | grep &quot;*&quot; | cut -d &#39; &#39; -f2\`</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>utracking=\`git rev-parse --abbrev-ref --symbolic-full-name @{u}\`</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># gather a list of gfs2 patches from master just in case we can&#39;t find it</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#git log --abbrev-commit --pretty=format:&quot;   %h %&lt;|(32)%an %s&quot; master |grep -i -e &quot;gfs2&quot; -e &quot;dlm&quot; &gt; /tmp/gronk</span></span>
<span class="line"><span>git log --reverse --abbrev-commit --pretty=format:&quot;ms %h %&lt;|(32)%an %s&quot; master fs/gfs2/ &gt; /tmp/gronk.gfs2</span></span>
<span class="line"><span># ms = in Linus&#39;s master</span></span>
<span class="line"><span>git log --reverse --abbrev-commit --pretty=format:&quot;ms %h %&lt;|(32)%an %s&quot; master fs/dlm/ &gt; /tmp/gronk.dlm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd $cwd</span></span>
<span class="line"><span>LIST=\`git log --reverse --abbrev-commit --pretty=oneline $tracking..$branch | cut -d &#39; &#39; -f1 |paste -s -d &#39; &#39;\`</span></span>
<span class="line"><span>for i in $LIST; do patches=$(echo $patches + 1 | bc);done</span></span>
<span class="line"><span>/usr/bin/echo &quot;-----------------------[&quot; $branch &quot;-&quot; $patches &quot;patches ]-----------------------&quot;</span></span>
<span class="line"><span>patches=$(echo $patches - 1 | bc);</span></span>
<span class="line"><span>for i in $LIST; do</span></span>
<span class="line"><span>    if [ $patches -eq 1 ]; then</span></span>
<span class="line"><span>        cnt=&quot; ^&quot;</span></span>
<span class="line"><span>    elif [ $patches -eq 0 ]; then</span></span>
<span class="line"><span>        cnt=&quot; H&quot;</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        if [ $patches -lt 10 ]; then</span></span>
<span class="line"><span>            cnt=&quot; $patches&quot;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            cnt=&quot;$patches&quot;</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    /usr/bin/git show --abbrev-commit -s --pretty=format:&quot;$cnt %h %&lt;|(32)%an %s&quot; $i</span></span>
<span class="line"><span>    desc=\`/usr/bin/git show --abbrev-commit -s --pretty=format:&quot;%s&quot; $i\`</span></span>
<span class="line"><span>    cd ~/linux.git</span></span>
<span class="line"><span>    cmp=1</span></span>
<span class="line"><span>    up_eq=\`git log --reverse --abbrev-commit --pretty=format:&quot;lo %h %&lt;|(32)%an %s&quot; $utracking..$ubranch | grep &quot;$desc&quot;\`</span></span>
<span class="line"><span># lo = in local for-next</span></span>
<span class="line"><span>    if test &quot;X$up_eq&quot; = &quot;X&quot;; then</span></span>
<span class="line"><span>        up_eq=\`git log --reverse --abbrev-commit --pretty=format:&quot;fn %h %&lt;|(32)%an %s&quot; master..$utracking | grep &quot;$desc&quot;\`</span></span>
<span class="line"><span># fn = in for-next for next merge window</span></span>
<span class="line"><span>        if test &quot;X$up_eq&quot; = &quot;X&quot;; then</span></span>
<span class="line"><span>            up_eq=\`grep &quot;$desc&quot; /tmp/gronk.gfs2\`</span></span>
<span class="line"><span>            if test &quot;X$up_eq&quot; = &quot;X&quot;; then</span></span>
<span class="line"><span>                up_eq=\`grep &quot;$desc&quot; /tmp/gronk.dlm\`</span></span>
<span class="line"><span>                if test &quot;X$up_eq&quot; = &quot;X&quot;; then</span></span>
<span class="line"><span>                    up_eq=&quot;   Not found upstream&quot;</span></span>
<span class="line"><span>                    cmp=0</span></span>
<span class="line"><span>                fi</span></span>
<span class="line"><span>            fi</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    echo &quot;$up_eq&quot;</span></span>
<span class="line"><span>    if [ $cmp -eq 1 ] ; then</span></span>
<span class="line"><span>        UP_SHA1=\`echo $up_eq|cut -d&#39; &#39; -f2\`</span></span>
<span class="line"><span>        echo &quot;compare_them $UP_SHA1 $i&quot; &gt;&gt; $script</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    cd $cwd</span></span>
<span class="line"><span>    patches=$(echo $patches - 1 | bc)</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>echo &quot;Compare script generated: $script&quot;</span></span></code></pre></div><hr>`,15)),a("p",null,[s[19]||(s[19]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/1/bash-scripts-git"},{default:i(()=>[...s[18]||(s[18]=[n("https://opensource.com/article/20/1/bash-scripts-git",-1)])]),_:1})]),a("p",null,[s[24]||(s[24]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/bobpeterson"},{default:i(()=>[...s[20]||(s[20]=[n("Bob Peterson",-1)])]),_:1}),s[25]||(s[25]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[21]||(s[21]=[n("lujun9972",-1)])]),_:1}),s[26]||(s[26]=n(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[22]||(s[22]=[n("wxy",-1)])]),_:1}),s[27]||(s[27]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[23]||(s[23]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[28]||(s[28]=[n("LCTT",-1)])]),_:1}),s[31]||(s[31]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[29]||(s[29]=[n("Linux中國",-1)])]),_:1}),s[32]||(s[32]=n(" 榮譽推出",-1))])])}const _=l(g,[["render",d]]);export{$ as __pageData,_ as default};
