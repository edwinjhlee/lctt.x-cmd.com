import{_ as l,a0 as t,w as o,s as d,I as a,x as n,a1 as i,A as p,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"如何在 Linux 上識別同樣內容的文件 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 上識別同樣內容的文件 | LCTT (201906) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 上識別同樣內容的文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 上識別同樣內容的文件 | LCTT (201906) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201906/20190423 How to identify same-content files on Linux","title":"如何在 Linux 上識別同樣內容的文件","tag":"201906","desc":""},"relativePath":"201906/20190423 How to identify same-content files on Linux.md","filePath":"[post].md"}'),c={name:"201906/20190423 How to identify same-content files on Linux.md"};function h(f,s,u,m,g,k){const e=t("Link");return o(),d("div",null,[s[20]||(s[20]=a("h1",{id:"如何在-linux-上識別同樣內容的文件",tabindex:"-1"},[n("如何在 Linux 上識別同樣內容的文件 "),a("a",{class:"header-anchor",href:"#如何在-linux-上識別同樣內容的文件","aria-label":"Permalink to “如何在 Linux 上識別同樣內容的文件”"},"​")],-1)),s[21]||(s[21]=a("blockquote",null,[a("p",null,"有時文件副本相當於對硬盤空間的巨大浪費，並會在你想要更新文件時造成困擾。以下是用來識別這些文件的六個命令。")],-1)),s[22]||(s[22]=a("p",null,[a("img",{src:"https://images.idgesg.net/images/article/2019/04/chairs-100794266-large.jpg",alt:"Vinoth Chandar CC BY 2.0"})],-1)),a("p",null,[s[1]||(s[1]=n("在最近的帖子中，我們看了",-1)),i(e,{href:"https://www.networkworld.com/article/3387961/how-to-identify-duplicate-files-on-linux.html"},{default:p(()=>[...s[0]||(s[0]=[n("如何識別並定位硬鏈接的文件",-1)])]),_:1}),s[2]||(s[2]=n("（即，指向同一硬盤內容並共享 inode）。在本文中，我們將查看能找到具有相同",-1)),s[3]||(s[3]=a("em",null,"內容",-1)),s[4]||(s[4]=n("，卻不相鏈接的文件的命令。",-1))]),s[23]||(s[23]=r(`<p>硬鏈接很有用是因為它們能夠使文件存放在文件系統內的多個地方卻不會佔用額外的硬盤空間。另一方面，有時文件副本相當於對硬盤空間的巨大浪費，在你想要更新文件時也會有造成困擾之虞。在本文中，我們將看一下多種識別這些文件的方式。</p><h3 id="用-diff-命令比較文件" tabindex="-1">用 diff 命令比較文件 <a class="header-anchor" href="#用-diff-命令比較文件" aria-label="Permalink to “用 diff 命令比較文件”">​</a></h3><p>可能比較兩個文件最簡單的方法是使用 <code>diff</code> 命令。輸出會顯示你文件的不同之處。<code>&lt;</code> 和 <code>&gt;</code> 符號代表在當參數傳過來的第一個（<code>&lt;</code>）或第二個（<code>&gt;</code>）文件中是否有額外的文字行。在這個例子中，在 <code>backup.html</code> 中有額外的文字行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ diff index.html backup.html</span></span>
<span class="line"><span>2438a2439,2441</span></span>
<span class="line"><span>&gt; &lt;pre&gt;</span></span>
<span class="line"><span>&gt; That&#39;s all there is to report.</span></span>
<span class="line"><span>&gt; &lt;/pre&gt;</span></span></code></pre></div><p>如果 <code>diff</code> 沒有輸出那代表兩個文件相同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ diff home.html index.html</span></span>
<span class="line"><span>$</span></span></code></pre></div><p><code>diff</code> 的唯一缺點是它一次只能比較兩個文件並且你必須指定用來比較的文件，這篇帖子中的一些命令可以為你找到多個重複文件。</p><h3 id="使用校驗和" tabindex="-1">使用校驗和 <a class="header-anchor" href="#使用校驗和" aria-label="Permalink to “使用校驗和”">​</a></h3><p><code>cksum</code>（checksum） 命令計算文件的校驗和。校驗和是一種將文字內容轉化成一個長數字（例如2819078353 228029）的數學簡化。雖然校驗和並不是完全獨有的，但是文件內容不同校驗和卻相同的概率微乎其微。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cksum *.html</span></span>
<span class="line"><span>2819078353 228029 backup.html</span></span>
<span class="line"><span>4073570409 227985 home.html</span></span>
<span class="line"><span>4073570409 227985 index.html</span></span></code></pre></div><p>在上述示例中，你可以看到產生同樣校驗和的第二個和第三個文件是如何可以被默認為相同的。</p><h3 id="使用-find-命令" tabindex="-1">使用 find 命令 <a class="header-anchor" href="#使用-find-命令" aria-label="Permalink to “使用 find 命令”">​</a></h3><p>雖然 <code>find</code> 命令並沒有尋找重複文件的選項，它依然可以被用來通過名字或類型尋找文件並運行 <code>cksum</code> 命令。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ find . -name &quot;*.html&quot; -exec cksum {} \\;</span></span>
<span class="line"><span>4073570409 227985 ./home.html</span></span>
<span class="line"><span>2819078353 228029 ./backup.html</span></span>
<span class="line"><span>4073570409 227985 ./index.html</span></span></code></pre></div><h3 id="使用-fslint-命令" tabindex="-1">使用 fslint 命令 <a class="header-anchor" href="#使用-fslint-命令" aria-label="Permalink to “使用 fslint 命令”">​</a></h3><p><code>fslint</code> 命令可以被特地用來尋找重複文件。注意我們給了它一個起始位置。如果它需要遍歷相當多的文件，這就需要花點時間來完成。注意它是如何列出重複文件並尋找其它問題的，比如空目錄和壞 ID。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ fslint .</span></span>
<span class="line"><span>-----------------------------------file name lint</span></span>
<span class="line"><span>-------------------------------Invalid utf8 names</span></span>
<span class="line"><span>-----------------------------------file case lint</span></span>
<span class="line"><span>----------------------------------DUPlicate files   &lt;==</span></span>
<span class="line"><span>home.html</span></span>
<span class="line"><span>index.html</span></span>
<span class="line"><span>-----------------------------------Dangling links</span></span>
<span class="line"><span>--------------------redundant characters in links</span></span>
<span class="line"><span>------------------------------------suspect links</span></span>
<span class="line"><span>--------------------------------Empty Directories</span></span>
<span class="line"><span>./.gnupg</span></span>
<span class="line"><span>----------------------------------Temporary Files</span></span>
<span class="line"><span>----------------------duplicate/conflicting Names</span></span>
<span class="line"><span>------------------------------------------Bad ids</span></span>
<span class="line"><span>-------------------------Non Stripped executables</span></span></code></pre></div><p>你可能需要在你的系統上安裝 <code>fslint</code>。你可能也需要將它加入你的命令搜索路徑：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ export PATH=$PATH:/usr/share/fslint/fslint</span></span></code></pre></div><h3 id="使用-rdfind-命令" tabindex="-1">使用 rdfind 命令 <a class="header-anchor" href="#使用-rdfind-命令" aria-label="Permalink to “使用 rdfind 命令”">​</a></h3><p><code>rdfind</code> 命令也會尋找重複（相同內容的）文件。它的名字意即“重複數據搜尋”，並且它能夠基於文件日期判斷哪個文件是原件——這在你選擇刪除副本時很有用因為它會移除較新的文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rdfind ~</span></span>
<span class="line"><span>Now scanning &quot;/home/shark&quot;, found 12 files.</span></span>
<span class="line"><span>Now have 12 files in total.</span></span>
<span class="line"><span>Removed 1 files due to nonunique device and inode.</span></span>
<span class="line"><span>Total size is 699498 bytes or 683 KiB</span></span>
<span class="line"><span>Removed 9 files due to unique sizes from list.2 files left.</span></span>
<span class="line"><span>Now eliminating candidates based on first bytes:removed 0 files from list.2 files left.</span></span>
<span class="line"><span>Now eliminating candidates based on last bytes:removed 0 files from list.2 files left.</span></span>
<span class="line"><span>Now eliminating candidates based on sha1 checksum:removed 0 files from list.2 files left.</span></span>
<span class="line"><span>It seems like you have 2 files that are not unique</span></span>
<span class="line"><span>Totally, 223 KiB can be reduced.</span></span>
<span class="line"><span>Now making results file results.txt</span></span></code></pre></div><p>你可以在 <code>dryrun</code> 模式中運行這個命令 （換句話説，僅僅彙報可能會另外被做出的改動）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rdfind -dryrun true ~</span></span>
<span class="line"><span>(DRYRUN MODE) Now scanning &quot;/home/shark&quot;, found 12 files.</span></span>
<span class="line"><span>(DRYRUN MODE) Now have 12 files in total.</span></span>
<span class="line"><span>(DRYRUN MODE) Removed 1 files due to nonunique device and inode.</span></span>
<span class="line"><span>(DRYRUN MODE) Total size is 699352 bytes or 683 KiB</span></span>
<span class="line"><span>Removed 9 files due to unique sizes from list.2 files left.</span></span>
<span class="line"><span>(DRYRUN MODE) Now eliminating candidates based on first bytes:removed 0 files from list.2 files left.</span></span>
<span class="line"><span>(DRYRUN MODE) Now eliminating candidates based on last bytes:removed 0 files from list.2 files left.</span></span>
<span class="line"><span>(DRYRUN MODE) Now eliminating candidates based on sha1 checksum:removed 0 files from list.2 files left.</span></span>
<span class="line"><span>(DRYRUN MODE) It seems like you have 2 files that are not unique</span></span>
<span class="line"><span>(DRYRUN MODE) Totally, 223 KiB can be reduced.</span></span>
<span class="line"><span>(DRYRUN MODE) Now making results file results.txt</span></span></code></pre></div><p><code>rdfind</code> 命令同樣提供了類似忽略空文檔（<code>-ignoreempty</code>）和跟蹤符號鏈接（<code>-followsymlinks</code>）的功能。查看 man 頁面獲取解釋。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-ignoreempty       ignore empty files</span></span>
<span class="line"><span>-minsize        ignore files smaller than speficied size</span></span>
<span class="line"><span>-followsymlinks     follow symbolic links</span></span>
<span class="line"><span>-removeidentinode   remove files referring to identical inode</span></span>
<span class="line"><span>-checksum       identify checksum type to be used</span></span>
<span class="line"><span>-deterministic      determiness how to sort files</span></span>
<span class="line"><span>-makesymlinks       turn duplicate files into symbolic links</span></span>
<span class="line"><span>-makehardlinks      replace duplicate files with hard links</span></span>
<span class="line"><span>-makeresultsfile    create a results file in the current directory</span></span>
<span class="line"><span>-outputname     provide name for results file</span></span>
<span class="line"><span>-deleteduplicates   delete/unlink duplicate files</span></span>
<span class="line"><span>-sleep          set sleep time between reading files (milliseconds)</span></span>
<span class="line"><span>-n, -dryrun     display what would have been done, but don&#39;t do it</span></span></code></pre></div><p>注意 <code>rdfind</code> 命令提供了 <code>-deleteduplicates true</code> 的設置選項以刪除副本。希望這個命令語法上的小問題不會惹惱你。😉</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rdfind -deleteduplicates true .</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>Deleted 1 files.    &lt;==</span></span></code></pre></div><p>你將可能需要在你的系統上安裝 <code>rdfind</code> 命令。試驗它以熟悉如何使用它可能是一個好主意。</p><h3 id="使用-fdupes-命令" tabindex="-1">使用 fdupes 命令 <a class="header-anchor" href="#使用-fdupes-命令" aria-label="Permalink to “使用 fdupes 命令”">​</a></h3><p><code>fdupes</code> 命令同樣使得識別重複文件變得簡單。它同時提供了大量有用的選項——例如用來迭代的 <code>-r</code>。在這個例子中，它像這樣將重複文件分組到一起：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ fdupes ~</span></span>
<span class="line"><span>/home/shs/UPGRADE</span></span>
<span class="line"><span>/home/shs/mytwin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/shs/lp.txt</span></span>
<span class="line"><span>/home/shs/lp.man</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/shs/penguin.png</span></span>
<span class="line"><span>/home/shs/penguin0.png</span></span>
<span class="line"><span>/home/shs/hideme.png</span></span></code></pre></div><p>這是使用迭代的一個例子，注意許多重複文件是重要的（用户的 <code>.bashrc</code> 和 <code>.profile</code> 文件）並且不應被刪除。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># fdupes -r /home</span></span>
<span class="line"><span>/home/shark/home.html</span></span>
<span class="line"><span>/home/shark/index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/dory/.bashrc</span></span>
<span class="line"><span>/home/eel/.bashrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/nemo/.profile</span></span>
<span class="line"><span>/home/dory/.profile</span></span>
<span class="line"><span>/home/shark/.profile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/nemo/tryme</span></span>
<span class="line"><span>/home/shs/tryme</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/shs/arrow.png</span></span>
<span class="line"><span>/home/shs/PNGs/arrow.png</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/shs/11/files_11.zip</span></span>
<span class="line"><span>/home/shs/ERIC/file_11.zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/shs/penguin0.jpg</span></span>
<span class="line"><span>/home/shs/PNGs/penguin.jpg</span></span>
<span class="line"><span>/home/shs/PNGs/penguin0.jpg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/shs/Sandra_rotated.png</span></span>
<span class="line"><span>/home/shs/PNGs/Sandra_rotated.png</span></span></code></pre></div><p><code>fdupe</code> 命令的許多選項列如下。使用 <code>fdupes -h</code> 命令或者閲讀 man 頁面獲取詳情。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-r --recurse     recurse</span></span>
<span class="line"><span>-R --recurse:    recurse through specified directories</span></span>
<span class="line"><span>-s --symlinks    follow symlinked directories</span></span>
<span class="line"><span>-H --hardlinks   treat hard links as duplicates</span></span>
<span class="line"><span>-n --noempty     ignore empty files</span></span>
<span class="line"><span>-f --omitfirst   omit the first file in each set of matches</span></span>
<span class="line"><span>-A --nohidden    ignore hidden files</span></span>
<span class="line"><span>-1 --sameline    list matches on a single line</span></span>
<span class="line"><span>-S --size        show size of duplicate files</span></span>
<span class="line"><span>-m --summarize   summarize duplicate files information</span></span>
<span class="line"><span>-q --quiet       hide progress indicator</span></span>
<span class="line"><span>-d --delete      prompt user for files to preserve</span></span>
<span class="line"><span>-N --noprompt    when used with --delete, preserve the first file in set</span></span>
<span class="line"><span>-I --immediate   delete duplicates as they are encountered</span></span>
<span class="line"><span>-p --permissions don&#39;t soncider files with different owner/group or</span></span>
<span class="line"><span>                 permission bits as duplicates</span></span>
<span class="line"><span>-o --order=WORD  order files according to specification</span></span>
<span class="line"><span>-i --reverse     reverse order while sorting</span></span>
<span class="line"><span>-v --version     display fdupes version</span></span>
<span class="line"><span>-h --help        displays help</span></span></code></pre></div><p><code>fdupes</code> 命令是另一個你可能需要安裝並使用一段時間才能熟悉其眾多選項的命令。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>Linux 系統提供能夠定位並（潛在地）能移除重複文件的一系列的好工具，以及能讓你指定搜索區域及當對你所發現的重複文件時的處理方式的選項。</p><hr>`,40)),a("p",null,[s[6]||(s[6]=n("via: ",-1)),i(e,{href:"https://www.networkworld.com/article/3390204/how-to-identify-same-content-files-on-linux.html#tk.rss_all"},{default:p(()=>[...s[5]||(s[5]=[n("https://www.networkworld.com/article/3390204/how-to-identify-same-content-files-on-linux.html#tk.rss_all",-1)])]),_:1})]),a("p",null,[s[11]||(s[11]=n("作者：",-1)),i(e,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:p(()=>[...s[7]||(s[7]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[12]||(s[12]=n(" 選題：",-1)),i(e,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[8]||(s[8]=[n("lujun9972",-1)])]),_:1}),s[13]||(s[13]=n(" 譯者：",-1)),i(e,{href:"https://github.com/tomjlw"},{default:p(()=>[...s[9]||(s[9]=[n("tomjlw",-1)])]),_:1}),s[14]||(s[14]=n(" 校對：",-1)),i(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[10]||(s[10]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[17]||(s[17]=n("本文由 ",-1)),i(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[15]||(s[15]=[n("LCTT",-1)])]),_:1}),s[18]||(s[18]=n(" 原創編譯，",-1)),i(e,{href:"https://linux.cn/"},{default:p(()=>[...s[16]||(s[16]=[n("Linux中國",-1)])]),_:1}),s[19]||(s[19]=n(" 榮譽推出",-1))])])}const x=l(c,[["render",h]]);export{w as __pageData,x as default};
