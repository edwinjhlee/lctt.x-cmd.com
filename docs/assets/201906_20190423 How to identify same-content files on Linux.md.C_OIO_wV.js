import{_ as l,a0 as t,w as o,s as d,I as a,x as n,a1 as i,A as p,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"如何在 Linux 上识别同样内容的文件 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 上识别同样内容的文件 | LCTT (201906) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 上识别同样内容的文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 上识别同样内容的文件 | LCTT (201906) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201906/20190423 How to identify same-content files on Linux","title":"如何在 Linux 上识别同样内容的文件","tag":"201906","desc":""},"relativePath":"201906/20190423 How to identify same-content files on Linux.md","filePath":"[post].md"}'),c={name:"201906/20190423 How to identify same-content files on Linux.md"};function h(f,s,u,m,g,k){const e=t("Link");return o(),d("div",null,[s[20]||(s[20]=a("h1",{id:"如何在-linux-上识别同样内容的文件",tabindex:"-1"},[n("如何在 Linux 上识别同样内容的文件 "),a("a",{class:"header-anchor",href:"#如何在-linux-上识别同样内容的文件","aria-label":"Permalink to “如何在 Linux 上识别同样内容的文件”"},"​")],-1)),s[21]||(s[21]=a("blockquote",null,[a("p",null,"有时文件副本相当于对硬盘空间的巨大浪费，并会在你想要更新文件时造成困扰。以下是用来识别这些文件的六个命令。")],-1)),s[22]||(s[22]=a("p",null,[a("img",{src:"https://images.idgesg.net/images/article/2019/04/chairs-100794266-large.jpg",alt:"Vinoth Chandar CC BY 2.0"})],-1)),a("p",null,[s[1]||(s[1]=n("在最近的帖子中，我们看了",-1)),i(e,{href:"https://www.networkworld.com/article/3387961/how-to-identify-duplicate-files-on-linux.html"},{default:p(()=>[...s[0]||(s[0]=[n("如何识别并定位硬链接的文件",-1)])]),_:1}),s[2]||(s[2]=n("（即，指向同一硬盘内容并共享 inode）。在本文中，我们将查看能找到具有相同",-1)),s[3]||(s[3]=a("em",null,"内容",-1)),s[4]||(s[4]=n("，却不相链接的文件的命令。",-1))]),s[23]||(s[23]=r(`<p>硬链接很有用是因为它们能够使文件存放在文件系统内的多个地方却不会占用额外的硬盘空间。另一方面，有时文件副本相当于对硬盘空间的巨大浪费，在你想要更新文件时也会有造成困扰之虞。在本文中，我们将看一下多种识别这些文件的方式。</p><h3 id="用-diff-命令比较文件" tabindex="-1">用 diff 命令比较文件 <a class="header-anchor" href="#用-diff-命令比较文件" aria-label="Permalink to “用 diff 命令比较文件”">​</a></h3><p>可能比较两个文件最简单的方法是使用 <code>diff</code> 命令。输出会显示你文件的不同之处。<code>&lt;</code> 和 <code>&gt;</code> 符号代表在当参数传过来的第一个（<code>&lt;</code>）或第二个（<code>&gt;</code>）文件中是否有额外的文字行。在这个例子中，在 <code>backup.html</code> 中有额外的文字行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ diff index.html backup.html</span></span>
<span class="line"><span>2438a2439,2441</span></span>
<span class="line"><span>&gt; &lt;pre&gt;</span></span>
<span class="line"><span>&gt; That&#39;s all there is to report.</span></span>
<span class="line"><span>&gt; &lt;/pre&gt;</span></span></code></pre></div><p>如果 <code>diff</code> 没有输出那代表两个文件相同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ diff home.html index.html</span></span>
<span class="line"><span>$</span></span></code></pre></div><p><code>diff</code> 的唯一缺点是它一次只能比较两个文件并且你必须指定用来比较的文件，这篇帖子中的一些命令可以为你找到多个重复文件。</p><h3 id="使用校验和" tabindex="-1">使用校验和 <a class="header-anchor" href="#使用校验和" aria-label="Permalink to “使用校验和”">​</a></h3><p><code>cksum</code>（checksum） 命令计算文件的校验和。校验和是一种将文字内容转化成一个长数字（例如2819078353 228029）的数学简化。虽然校验和并不是完全独有的，但是文件内容不同校验和却相同的概率微乎其微。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cksum *.html</span></span>
<span class="line"><span>2819078353 228029 backup.html</span></span>
<span class="line"><span>4073570409 227985 home.html</span></span>
<span class="line"><span>4073570409 227985 index.html</span></span></code></pre></div><p>在上述示例中，你可以看到产生同样校验和的第二个和第三个文件是如何可以被默认为相同的。</p><h3 id="使用-find-命令" tabindex="-1">使用 find 命令 <a class="header-anchor" href="#使用-find-命令" aria-label="Permalink to “使用 find 命令”">​</a></h3><p>虽然 <code>find</code> 命令并没有寻找重复文件的选项，它依然可以被用来通过名字或类型寻找文件并运行 <code>cksum</code> 命令。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ find . -name &quot;*.html&quot; -exec cksum {} \\;</span></span>
<span class="line"><span>4073570409 227985 ./home.html</span></span>
<span class="line"><span>2819078353 228029 ./backup.html</span></span>
<span class="line"><span>4073570409 227985 ./index.html</span></span></code></pre></div><h3 id="使用-fslint-命令" tabindex="-1">使用 fslint 命令 <a class="header-anchor" href="#使用-fslint-命令" aria-label="Permalink to “使用 fslint 命令”">​</a></h3><p><code>fslint</code> 命令可以被特地用来寻找重复文件。注意我们给了它一个起始位置。如果它需要遍历相当多的文件，这就需要花点时间来完成。注意它是如何列出重复文件并寻找其它问题的，比如空目录和坏 ID。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ fslint .</span></span>
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
<span class="line"><span>-------------------------Non Stripped executables</span></span></code></pre></div><p>你可能需要在你的系统上安装 <code>fslint</code>。你可能也需要将它加入你的命令搜索路径：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ export PATH=$PATH:/usr/share/fslint/fslint</span></span></code></pre></div><h3 id="使用-rdfind-命令" tabindex="-1">使用 rdfind 命令 <a class="header-anchor" href="#使用-rdfind-命令" aria-label="Permalink to “使用 rdfind 命令”">​</a></h3><p><code>rdfind</code> 命令也会寻找重复（相同内容的）文件。它的名字意即“重复数据搜寻”，并且它能够基于文件日期判断哪个文件是原件——这在你选择删除副本时很有用因为它会移除较新的文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rdfind ~</span></span>
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
<span class="line"><span>Now making results file results.txt</span></span></code></pre></div><p>你可以在 <code>dryrun</code> 模式中运行这个命令 （换句话说，仅仅汇报可能会另外被做出的改动）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rdfind -dryrun true ~</span></span>
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
<span class="line"><span>(DRYRUN MODE) Now making results file results.txt</span></span></code></pre></div><p><code>rdfind</code> 命令同样提供了类似忽略空文档（<code>-ignoreempty</code>）和跟踪符号链接（<code>-followsymlinks</code>）的功能。查看 man 页面获取解释。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-ignoreempty       ignore empty files</span></span>
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
<span class="line"><span>-n, -dryrun     display what would have been done, but don&#39;t do it</span></span></code></pre></div><p>注意 <code>rdfind</code> 命令提供了 <code>-deleteduplicates true</code> 的设置选项以删除副本。希望这个命令语法上的小问题不会惹恼你。😉</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rdfind -deleteduplicates true .</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>Deleted 1 files.    &lt;==</span></span></code></pre></div><p>你将可能需要在你的系统上安装 <code>rdfind</code> 命令。试验它以熟悉如何使用它可能是一个好主意。</p><h3 id="使用-fdupes-命令" tabindex="-1">使用 fdupes 命令 <a class="header-anchor" href="#使用-fdupes-命令" aria-label="Permalink to “使用 fdupes 命令”">​</a></h3><p><code>fdupes</code> 命令同样使得识别重复文件变得简单。它同时提供了大量有用的选项——例如用来迭代的 <code>-r</code>。在这个例子中，它像这样将重复文件分组到一起：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ fdupes ~</span></span>
<span class="line"><span>/home/shs/UPGRADE</span></span>
<span class="line"><span>/home/shs/mytwin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/shs/lp.txt</span></span>
<span class="line"><span>/home/shs/lp.man</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/shs/penguin.png</span></span>
<span class="line"><span>/home/shs/penguin0.png</span></span>
<span class="line"><span>/home/shs/hideme.png</span></span></code></pre></div><p>这是使用迭代的一个例子，注意许多重复文件是重要的（用户的 <code>.bashrc</code> 和 <code>.profile</code> 文件）并且不应被删除。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># fdupes -r /home</span></span>
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
<span class="line"><span>/home/shs/PNGs/Sandra_rotated.png</span></span></code></pre></div><p><code>fdupe</code> 命令的许多选项列如下。使用 <code>fdupes -h</code> 命令或者阅读 man 页面获取详情。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-r --recurse     recurse</span></span>
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
<span class="line"><span>-h --help        displays help</span></span></code></pre></div><p><code>fdupes</code> 命令是另一个你可能需要安装并使用一段时间才能熟悉其众多选项的命令。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>Linux 系统提供能够定位并（潜在地）能移除重复文件的一系列的好工具，以及能让你指定搜索区域及当对你所发现的重复文件时的处理方式的选项。</p><hr>`,40)),a("p",null,[s[6]||(s[6]=n("via: ",-1)),i(e,{href:"https://www.networkworld.com/article/3390204/how-to-identify-same-content-files-on-linux.html#tk.rss_all"},{default:p(()=>[...s[5]||(s[5]=[n("https://www.networkworld.com/article/3390204/how-to-identify-same-content-files-on-linux.html#tk.rss_all",-1)])]),_:1})]),a("p",null,[s[11]||(s[11]=n("作者：",-1)),i(e,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:p(()=>[...s[7]||(s[7]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[12]||(s[12]=n(" 选题：",-1)),i(e,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[8]||(s[8]=[n("lujun9972",-1)])]),_:1}),s[13]||(s[13]=n(" 译者：",-1)),i(e,{href:"https://github.com/tomjlw"},{default:p(()=>[...s[9]||(s[9]=[n("tomjlw",-1)])]),_:1}),s[14]||(s[14]=n(" 校对：",-1)),i(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[10]||(s[10]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[17]||(s[17]=n("本文由 ",-1)),i(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[15]||(s[15]=[n("LCTT",-1)])]),_:1}),s[18]||(s[18]=n(" 原创编译，",-1)),i(e,{href:"https://linux.cn/"},{default:p(()=>[...s[16]||(s[16]=[n("Linux中国",-1)])]),_:1}),s[19]||(s[19]=n(" 荣誉推出",-1))])])}const x=l(c,[["render",h]]);export{w as __pageData,x as default};
