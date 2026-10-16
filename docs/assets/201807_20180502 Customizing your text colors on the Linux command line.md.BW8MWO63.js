import{_ as e,a0 as t,w as o,s as r,ao as d,I as l,x as n,a1 as p,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"在 Linux 命令行中自定义文本颜色 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 命令行中自定义文本颜色 | LCTT (201807) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 命令行中自定义文本颜色 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 命令行中自定义文本颜色 | LCTT (201807) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201807/20180502 Customizing your text colors on the Linux command line","title":"在 Linux 命令行中自定义文本颜色","tag":"201807","desc":""},"relativePath":"201807/20180502 Customizing your text colors on the Linux command line.md","filePath":"[post].md"}'),c={name:"201807/20180502 Customizing your text colors on the Linux command line.md"};function g(u,s,h,m,b,k){const a=t("Link");return o(),r("div",null,[s[18]||(s[18]=d(`<h1 id="在-linux-命令行中自定义文本颜色" tabindex="-1">在 Linux 命令行中自定义文本颜色 <a class="header-anchor" href="#在-linux-命令行中自定义文本颜色" aria-label="Permalink to “在 Linux 命令行中自定义文本颜色”">​</a></h1><blockquote><p>在 Linux 命令行当中使用不同颜色以期提供一种根据文件类型来识别文件的简单方式。你可以修改这些颜色，但是在做之前应该对你做的事情有充分的理由。</p></blockquote><p><img src="https://images.idgesg.net/images/article/2018/05/numbers-100756457-large.jpg" alt=""></p><p>如果你在 Linux 命令行上花费了大量的时间（如果没有，那么你可能不会读这篇文章），你无疑注意到了 <code>ls</code> 以多种不同的颜色显示文件。你可能也注意到了一些区别 —— 目录是一种颜色，可执行文件是另一种颜色等等。</p><p>这一切是如何发生的呢？以及，你可以选择哪些选项来改变颜色分配可能就不是很多人都知道的。</p><p>一种方法是运行 <code>dircolors</code> 命令得到一大堆展示了如何指定这些颜色的数据。它会显示以下这些东西：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dircolors</span></span>
<span class="line"><span>LS_COLORS=&#39;rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do</span></span>
<span class="line"><span>=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg</span></span>
<span class="line"><span>=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01</span></span>
<span class="line"><span>;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01</span></span>
<span class="line"><span>;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=0</span></span>
<span class="line"><span>1;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31</span></span>
<span class="line"><span>:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.</span></span>
<span class="line"><span>xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.t</span></span>
<span class="line"><span>bz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.j</span></span>
<span class="line"><span>ar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.a</span></span>
<span class="line"><span>lz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.r</span></span>
<span class="line"><span>z=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.</span></span>
<span class="line"><span>mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:</span></span>
<span class="line"><span>*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:</span></span>
<span class="line"><span>*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;3</span></span>
<span class="line"><span>5:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;</span></span>
<span class="line"><span>35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01</span></span>
<span class="line"><span>;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01</span></span>
<span class="line"><span>;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01</span></span>
<span class="line"><span>;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;3</span></span>
<span class="line"><span>5:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;3</span></span>
<span class="line"><span>5:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;3</span></span>
<span class="line"><span>6:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;</span></span>
<span class="line"><span>36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;</span></span>
<span class="line"><span>36:*.spx=00;36:*.xspf=00;36:&#39;;</span></span>
<span class="line"><span>export LS_COLORS</span></span></code></pre></div><p>如果你擅长解析文件，那么你可能会注意到这个列表有一种<ruby>模式<rt>patten</rt></ruby>。用冒号分隔开，你会看到这样的东西：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dircolors | tr &quot;:&quot; &quot;\\n&quot; | head -10</span></span>
<span class="line"><span>LS_COLORS=&#39;rs=0</span></span>
<span class="line"><span>di=01;34</span></span>
<span class="line"><span>ln=01;36</span></span>
<span class="line"><span>mh=00</span></span>
<span class="line"><span>pi=40;33</span></span>
<span class="line"><span>so=01;35</span></span>
<span class="line"><span>do=01;35</span></span>
<span class="line"><span>bd=40;33;01</span></span>
<span class="line"><span>cd=40;33;01</span></span>
<span class="line"><span>or=40;31;01</span></span></code></pre></div><p>OK，这里有一个模式 —— 一系列定义，有一到三个数字组件。我们来看看其中的一个定义。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pi=40;33</span></span></code></pre></div><p>有些人可能会问的第一个问题是“pi 是什么？”在这里，我们研究的是颜色和文件类型，所以这显然不是以 3.14 开头的那个有趣的数字。当然不是，这个 “pi” 代表 “pipe（管道）” —— Linux 系统上的一种特殊类型的文件，它可以将数据从一个程序传递给另一个程序。所以，让我们建立一个管道。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mknod /tmp/mypipe p</span></span>
<span class="line"><span>$ ls -l /tmp/mypipe</span></span>
<span class="line"><span>prw-rw-r-- 1 shs shs 0 May 1 14:00 /tmp/mypipe</span></span></code></pre></div><p>当我们在终端窗口中查看我们的管道和其他几个文件时，颜色差异非常明显。</p><p><img src="https://images.idgesg.net/images/article/2018/05/font-colors-100756483-large.jpg" alt="font colors"></p><p>在 <code>pi</code> 的定义中（如上所示），“40” 使文件在终端（或 PuTTY）窗口中使用黑色背景显示，31 使字体颜色变红。管道是特殊的文件，这种特殊的处理使它们在目录列表中突出显示。</p><p><code>bd</code> 和 <code>cd</code> 定义是相同的 —— <code>40;33;01</code>，它有一个额外的设置。这个设置会导致 <ruby>块设备<rt>block device</rt></ruby>（bd）和 <ruby>字符设备<rt>character device</rt></ruby>（cd）以黑色背景，橙色字体和另一种效果显示 —— 字符将以粗体显示。</p><p>以下列表显示由<ruby>文件类型<rt>file type</rt></ruby>所指定的颜色和字体分配：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>setting         file type</span></span>
<span class="line"><span>=======         =========</span></span>
<span class="line"><span>rs=0            reset to no color</span></span>
<span class="line"><span>di=01;34        directory</span></span>
<span class="line"><span>ln=01;36        link</span></span>
<span class="line"><span>mh=00           multi-hard link</span></span>
<span class="line"><span>pi=40;33        pipe</span></span>
<span class="line"><span>so=01;35        socket</span></span>
<span class="line"><span>do=01;35        door</span></span>
<span class="line"><span>bd=40;33;01     block device</span></span>
<span class="line"><span>cd=40;33;01     character device</span></span>
<span class="line"><span>or=40;31;01     orphan</span></span>
<span class="line"><span>mi=00           missing?</span></span>
<span class="line"><span>su=37;41        setuid</span></span>
<span class="line"><span>sg=30;43        setgid</span></span>
<span class="line"><span>ca=30;41        file with capability</span></span>
<span class="line"><span>tw=30;42        directory with sticky bit and world writable</span></span>
<span class="line"><span>ow=34;42        directory that is world writable</span></span>
<span class="line"><span>st=37;44        directory with sticky bit</span></span>
<span class="line"><span>ex=01;93        executable</span></span></code></pre></div><p>你可能已经注意到，在 <code>dircolors</code> 命令输出中，我们的大多数定义都以星号开头（例如，<code>*.wav=00;36</code>）。这些按<ruby>文件扩展名<rt>file extension</rt></ruby>而不是文件类型定义显示属性。这有一个示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dircolors | tr &quot;:&quot; &quot;\\n&quot; | tail -10</span></span>
<span class="line"><span>*.mpc=00;36</span></span>
<span class="line"><span>*.ogg=00;36</span></span>
<span class="line"><span>*.ra=00;36</span></span>
<span class="line"><span>*.wav=00;36</span></span>
<span class="line"><span>*.oga=00;36</span></span>
<span class="line"><span>*.opus=00;36</span></span>
<span class="line"><span>*.spx=00;36</span></span>
<span class="line"><span>*.xspf=00;36</span></span>
<span class="line"><span>&#39;;</span></span>
<span class="line"><span>export LS_COLORS</span></span></code></pre></div><p>这些设置（上面列表中所有的 <code>00;36</code>）将使这些文件名以青色显示。可用的颜色如下所示。</p><p><img src="https://images.techhive.com/images/article/2016/11/all-colors-100691990-large.jpg" alt="all colors"></p><h3 id="如何改变设置" tabindex="-1">如何改变设置 <a class="header-anchor" href="#如何改变设置" aria-label="Permalink to “如何改变设置”">​</a></h3><p>你要使用 <code>ls</code> 的别名来打开颜色显示功能。这通常是 Linux 系统上的默认设置，看起来是这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alias ls=&#39;ls --color=auto&#39;</span></span></code></pre></div><p>如果要关闭字体颜色，可以运行 <code>unalias ls</code> 命令，然后文件列表将仅以默认字体颜色显示。</p><p>你可以通过修改 <code>$LS_COLORS</code> 设置和导出修改后的设置来更改文本颜色。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ export LS_COLORS=&#39;rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;...</span></span></code></pre></div><p>注意：上面的命令由于太长被截断了。</p><p>如果希望文本颜色的修改是永久性的，则需要将修改后的 <code>$LS_COLORS</code> 定义添加到一个启动文件中，例如 <code>.bashrc</code>。</p><h3 id="更多关于命令行文本" tabindex="-1">更多关于命令行文本 <a class="header-anchor" href="#更多关于命令行文本" aria-label="Permalink to “更多关于命令行文本”">​</a></h3>`,32)),l("p",null,[s[1]||(s[1]=n("你可以在 NetworkWorld 的 ",-1)),p(a,{href:"https://www.networkworld.com/article/3138909/linux/coloring-your-world-with-ls-colors.html"},{default:i(()=>[...s[0]||(s[0]=[n("2016 年 11 月",-1)])]),_:1}),s[2]||(s[2]=n("的帖子中找到有关文本颜色的其他信息。",-1))]),s[19]||(s[19]=l("hr",null,null,-1)),l("p",null,[s[4]||(s[4]=n("via: ",-1)),p(a,{href:"https://www.networkworld.com/article/3269587/linux/customizing-your-text-colors-on-the-linux-command-line.html"},{default:i(()=>[...s[3]||(s[3]=[n("https://www.networkworld.com/article/3269587/linux/customizing-your-text-colors-on-the-linux-command-line.html",-1)])]),_:1})]),l("p",null,[s[9]||(s[9]=n("作者：",-1)),p(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:i(()=>[...s[5]||(s[5]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[10]||(s[10]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[6]||(s[6]=[n("lujun9972",-1)])]),_:1}),s[11]||(s[11]=n(" 译者：",-1)),p(a,{href:"https://github.com/MjSeven"},{default:i(()=>[...s[7]||(s[7]=[n("MjSeven",-1)])]),_:1}),s[12]||(s[12]=n(" 校对：",-1)),p(a,{href:"https://github.com/pityonline"},{default:i(()=>[...s[8]||(s[8]=[n("pityonline",-1)])]),_:1})]),l("p",null,[s[15]||(s[15]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:i(()=>[...s[14]||(s[14]=[n("Linux中国",-1)])]),_:1}),s[17]||(s[17]=n(" 荣誉推出",-1))])])}const v=e(c,[["render",g]]);export{y as __pageData,v as default};
