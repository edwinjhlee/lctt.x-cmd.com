import{_ as l,a0 as o,w as r,s as d,ao as t,I as a,a1 as i,A as e,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"5 个好用的开发者 Vim 插件 | LCTT x X-CMD","titleTemplate":false,"description":"5 个好用的开发者 Vim 插件 | LCTT (201902) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"5 个好用的开发者 Vim 插件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"5 个好用的开发者 Vim 插件 | LCTT (201902) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201902/20190110 5 useful Vim plugins for developers","title":"5 个好用的开发者 Vim 插件","tag":"201902","desc":""},"relativePath":"201902/20190110 5 useful Vim plugins for developers.md","filePath":"[post].md"}'),u={name:"201902/20190110 5 useful Vim plugins for developers.md"};function c(g,s,m,h,k,b){const p=o("Link");return r(),d("div",null,[s[40]||(s[40]=t('<h1 id="_5-个好用的开发者-vim-插件" tabindex="-1">5 个好用的开发者 Vim 插件 <a class="header-anchor" href="#_5-个好用的开发者-vim-插件" aria-label="Permalink to “5 个好用的开发者 Vim 插件”">​</a></h1><blockquote><p>通过这 5 个插件扩展 Vim 功能来提升你的编码效率。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/web_browser_desktop_devlopment_design_system_computer.jpg?itok=pfqRrJgh" alt=""></p><p>我用 Vim 已经超过 20 年了，两年前我决定把它作为我的首要文本编辑器。我用 Vim 来编写代码、配置文件、博客文章及其它任意可以用纯文本表达的东西。Vim 有很多超级棒的功能，一旦你适合了它，你的工作会变得非常高效。</p><p>在日常编辑工作中，我更倾向于使用 Vim 稳定的原生功能，但开源社区对 Vim 开发了大量的插件，可以扩展 Vim 的功能、改进你的工作流程和提升工作效率。</p><p>以下列举 5 个非常好用的可以用于编写任意编程语言的插件。</p><h3 id="_1、auto-pairs" tabindex="-1">1、Auto Pairs <a class="header-anchor" href="#_1、auto-pairs" aria-label="Permalink to “1、Auto Pairs”">​</a></h3>',7)),a("p",null,[i(p,{href:"https://www.vim.org/scripts/script.php?script_id=3599"},{default:e(()=>[...s[0]||(s[0]=[n("Auto Pairs",-1)])]),_:1}),s[1]||(s[1]=n(" 插件可以帮助你插入和删除成对的文字，如花括号、圆括号或引号。这在编写代码时非常有用，因为很多编程语言都有成对标记的语法，就像圆括号用于函数调用，或引号用于字符串定义。",-1))]),s[41]||(s[41]=t(`<p>Auto Pairs 最基本的功能是在你输入一个左括号时会自动补全对应的另一半括号。比如，你输入了一个 <code>[</code>，它会自动帮你补充另一半 <code>]</code>。相反，如果你用退格键删除开头的一半括号，Auto Pairs 会删除另一半。</p><p>如果你设置了自动缩进，当你按下回车键时 Auto Pairs 会在恰当的缩进位置补全另一半括号，这比你找到放置另一半的位置并选择一个正确的括号要省劲多了。</p><p>例如下面这段代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    x := true</span></span>
<span class="line"><span>    items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if x { </span></span>
<span class="line"><span>        for _, i := range items</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>items</code> 后面输入一个左花括号按下回车会产生下面的结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    x := true</span></span>
<span class="line"><span>    items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if x {</span></span>
<span class="line"><span>        for _, i := range items  {</span></span>
<span class="line"><span>            | (cursor here)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6)),a("p",null,[s[3]||(s[3]=n("Auto Pairs 提供了大量其它选项（你可以在 ",-1)),i(p,{href:"https://github.com/jiangmiao/auto-pairs"},{default:e(()=>[...s[2]||(s[2]=[n("GitHub",-1)])]),_:1}),s[4]||(s[4]=n(" 上找到），但最基本的功能已经很让人省时间了。",-1))]),s[42]||(s[42]=a("h3",{id:"_2、nerd-commenter",tabindex:"-1"},[n("2、NERD Commenter "),a("a",{class:"header-anchor",href:"#_2、nerd-commenter","aria-label":"Permalink to “2、NERD Commenter”"},"​")],-1)),a("p",null,[i(p,{href:"https://github.com/scrooloose/nerdcommenter"},{default:e(()=>[...s[5]||(s[5]=[n("NERD Commenter",-1)])]),_:1}),s[6]||(s[6]=n(" 插件给 Vim 增加了代码注释的功能，类似在 ",-1)),s[7]||(s[7]=a("ruby",null,[n("IDE"),a("rt",null,"integrated development environment")],-1)),s[8]||(s[8]=n(" 中注释功能。有了这个插件，你可以一键注释单行或多行代码。",-1))]),a("p",null,[s[10]||(s[10]=n("NERD Commenter 可以与标准的 Vim ",-1)),i(p,{href:"http://vim.wikia.com/wiki/Filetype.vim"},{default:e(()=>[...s[9]||(s[9]=[n("filetype",-1)])]),_:1}),s[11]||(s[11]=n(" 插件配合，所以它能理解一些编程语言并使用合适的方式来注释代码。",-1))]),s[43]||(s[43]=t(`<p>最易上手的方法是按 <code>Leader+Space</code> 组合键来切换注释当前行。Vim 默认的 Leader 键是 <code>\\</code>。</p><p>在<ruby>可视化模式<rt>Visual mode</rt></ruby>中，你可以选择多行一并注释。NERD Commenter 也可以按计数注释，所以你可以加个数量 n 来注释 n 行。</p><p>还有个有用的特性 “Sexy Comment” 可以用 <code>Leader+cs</code> 来触发，它的块注释风格更漂亮一些。例如下面这段代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    x := true</span></span>
<span class="line"><span>    items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if x {</span></span>
<span class="line"><span>        for _, i := range items {</span></span>
<span class="line"><span>            fmt.Println(i)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>选择 <code>main</code> 函数中的所有行然后按下 <code>Leader+cs</code> 会出来以下注释效果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> *    x := true</span></span>
<span class="line"><span> *    items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> *    if x {</span></span>
<span class="line"><span> *        for _, i := range items {</span></span>
<span class="line"><span> *            fmt.Println(i)</span></span>
<span class="line"><span> *        }</span></span>
<span class="line"><span> *    }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>因为这些行都是在一个块中注释的，你可以用 <code>Leader+Space</code> 组合键一次去掉这里所有的注释。</p><p>NERD Commenter 是任何使用 Vim 写代码的开发者都必装的插件。</p><h3 id="_3、vim-surround" tabindex="-1">3、VIM Surround <a class="header-anchor" href="#_3、vim-surround" aria-label="Permalink to “3、VIM Surround”">​</a></h3>`,9)),a("p",null,[i(p,{href:"https://www.vim.org/scripts/script.php?script_id=1697"},{default:e(()=>[...s[12]||(s[12]=[n("Vim Surround",-1)])]),_:1}),s[13]||(s[13]=n(" 插件可以帮你“环绕”现有文本插入成对的符号（如括号或双引号）或标签（如 HTML 或 XML 标签）。它和 Auto Pairs 有点儿类似，但是用于处理已有文本，在编辑文本时更有用。",-1))]),s[44]||(s[44]=t(`<p>比如你有以下一个句子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&quot;Vim plugins are awesome !&quot;</span></span></code></pre></div><p>当你的光标处于引起来的句中任何位置时，你可以用 <code>ds&quot;</code> 组合键删除句子两端的双引号。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Vim plugins are awesome !</span></span></code></pre></div><p>你也可以用 <code>cs&quot;&#39;</code> 把双端的双引号换成单引号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&#39;Vim plugins are awesome !&#39;</span></span></code></pre></div><p>或者再用 <code>cs&#39;[</code> 替换成中括号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ Vim plugins are awesome ! ]</span></span></code></pre></div><p>它对编辑 HTML 或 XML 文本中的<ruby>标签<rt>tag</rt></ruby>尤其在行。假如你有以下一行 HTML 代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p&gt;Vim plugins are awesome !&lt;/p&gt;</span></span></code></pre></div><p>当光标在 “awesome” 这个单词的任何位置时，你可以按 <code>ysiw&lt;em&gt;</code> 直接给它加上着重标签（<code>&lt;em&gt;</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p&gt;Vim plugins are &lt;em&gt;awesome&lt;/em&gt; !&lt;/p&gt;</span></span></code></pre></div><p>注意它聪明地加上了 <code>&lt;/em&gt;</code> 闭合标签。</p><p>Vim Surround 也可以用 <code>ySS</code> 缩进文本并加上标签。比如你有以下文本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p&gt;Vim plugins are &lt;em&gt;awesome&lt;/em&gt; !&lt;/p&gt;</span></span></code></pre></div><p>你可以用 <code>ySS&lt;div class=&quot;normal&quot;&gt;</code> 加上 <code>div</code> 标签，注意生成的段落是自动缩进的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div class=&quot;normal&quot;&gt;</span></span>
<span class="line"><span>        &lt;p&gt;Vim plugins are &lt;em&gt;awesome&lt;/em&gt; !&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div>`,17)),a("p",null,[s[15]||(s[15]=n("Vim Surround 有很多其它选项，你可以参照 ",-1)),i(p,{href:"https://github.com/tpope/vim-surround"},{default:e(()=>[...s[14]||(s[14]=[n("GitHub",-1)])]),_:1}),s[16]||(s[16]=n(" 上的说明尝试它们。",-1))]),s[45]||(s[45]=a("h3",{id:"_4、vim-gitgutter",tabindex:"-1"},[n("4、Vim Gitgutter "),a("a",{class:"header-anchor",href:"#_4、vim-gitgutter","aria-label":"Permalink to “4、Vim Gitgutter”"},"​")],-1)),a("p",null,[i(p,{href:"https://github.com/airblade/vim-gitgutter"},{default:e(()=>[...s[17]||(s[17]=[n("Vim Gitgutter",-1)])]),_:1}),s[18]||(s[18]=n(" 插件对使用 Git 作为版本控制工具的人来说非常有用。它会在 Vim 的行号列旁显示 ",-1)),s[19]||(s[19]=a("code",null,"git diff",-1)),s[20]||(s[20]=n(" 的差异标记。假设你有如下已提交过的代码：",-1))]),s[46]||(s[46]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  1 package main</span></span>
<span class="line"><span>  2</span></span>
<span class="line"><span>  3 import &quot;fmt&quot;</span></span>
<span class="line"><span>  4</span></span>
<span class="line"><span>  5 func main() {</span></span>
<span class="line"><span>  6     x := true</span></span>
<span class="line"><span>  7     items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span>  8</span></span>
<span class="line"><span>  9     if x {</span></span>
<span class="line"><span> 10         for _, i := range items {</span></span>
<span class="line"><span> 11             fmt.Println(i)</span></span>
<span class="line"><span> 12         }</span></span>
<span class="line"><span> 13     }</span></span>
<span class="line"><span> 14 }</span></span></code></pre></div><p>当你做出一些修改后，Vim Gitgutter 会显示如下标记：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    1 package main</span></span>
<span class="line"><span>    2</span></span>
<span class="line"><span>    3 import &quot;fmt&quot;</span></span>
<span class="line"><span>    4</span></span>
<span class="line"><span>_   5 func main() {</span></span>
<span class="line"><span>    6     items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span>    7</span></span>
<span class="line"><span>~   8     if len(items) &gt; 0 {</span></span>
<span class="line"><span>    9         for _, i := range items {</span></span>
<span class="line"><span>   10             fmt.Println(i)</span></span>
<span class="line"><span>+  11             fmt.Println(&quot;------&quot;)</span></span>
<span class="line"><span>   12         }</span></span>
<span class="line"><span>   13     }</span></span>
<span class="line"><span>   14 }</span></span></code></pre></div><p><code>_</code> 标记表示在第 5 行和第 6 行之间删除了一行。<code>~</code> 表示第 8 行有修改，<code>+</code> 表示新增了第 11 行。</p><p>另外，Vim Gitgutter 允许你用 <code>[c</code> 和 <code>]c</code> 在多个有修改的块之间跳转，甚至可以用 <code>Leader+hs</code> 来暂存某个变更集。</p><p>这个插件提供了对变更的即时视觉反馈，如果你用 Git 的话，有了它简直是如虎添翼。</p><h3 id="_5、vim-fugitive" tabindex="-1">5、VIM Fugitive <a class="header-anchor" href="#_5、vim-fugitive" aria-label="Permalink to “5、VIM Fugitive”">​</a></h3>`,7)),a("p",null,[i(p,{href:"https://www.vim.org/scripts/script.php?script_id=2975"},{default:e(()=>[...s[21]||(s[21]=[n("Vim Fugitive",-1)])]),_:1}),s[23]||(s[23]=n(" 是另一个将 Git 工作流集成到 Vim 中的超棒插件。它对 Git 做了一些封装，可以让你在 Vim 里直接执行 Git 命令并将结果集成在 Vim 界面里。这个插件有超多的特性，更多信息请访问它的 ",-1)),i(p,{href:"https://github.com/tpope/vim-fugitive"},{default:e(()=>[...s[22]||(s[22]=[n("GitHub",-1)])]),_:1}),s[24]||(s[24]=n(" 项目页面。",-1))]),s[47]||(s[47]=t(`<p>这里有一个使用 Vim Fugitive 的基础 Git 工作流示例。设想我们已经对下面的 Go 代码做出修改，你可以用 <code>:Gblame</code> 调用 <code>git blame</code> 来查看每行最后的提交信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    1 package main</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    2</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    3 import &quot;fmt&quot;</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    4</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│_   5 func main() {</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    6     items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    7</span></span>
<span class="line"><span>00000000 (Not Committed Yet 2018-12-05 18:55:00 -0500)│~   8     if len(items) &gt; 0 {</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    9         for _, i := range items {</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│   10             fmt.Println(i)</span></span>
<span class="line"><span>00000000 (Not Committed Yet 2018-12-05 18:55:00 -0500)│+  11             fmt.Println(&quot;------&quot;)</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│   12         }</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│   13     }</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│   14 }</span></span></code></pre></div><p>可以看到第 8 行和第 11 行显示还未提交。用 <code>:Gstatus</code> 命令检查仓库当前的状态：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  1 # On branch master</span></span>
<span class="line"><span>  2 # Your branch is up to date with &#39;origin/master&#39;.</span></span>
<span class="line"><span>  3 #</span></span>
<span class="line"><span>  4 # Changes not staged for commit:</span></span>
<span class="line"><span>  5 #   (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)</span></span>
<span class="line"><span>  6 #   (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)</span></span>
<span class="line"><span>  7 #</span></span>
<span class="line"><span>  8 #       modified:   vim-5plugins/examples/test1.go</span></span>
<span class="line"><span>  9 #</span></span>
<span class="line"><span> 10 no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span>    1 package main</span></span>
<span class="line"><span>    2</span></span>
<span class="line"><span>    3 import &quot;fmt&quot;</span></span>
<span class="line"><span>    4</span></span>
<span class="line"><span>_   5 func main() {</span></span>
<span class="line"><span>    6     items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span>    7</span></span>
<span class="line"><span>~   8     if len(items) &gt; 0 {</span></span>
<span class="line"><span>    9         for _, i := range items {</span></span>
<span class="line"><span>   10             fmt.Println(i)</span></span>
<span class="line"><span>+  11             fmt.Println(&quot;------&quot;)</span></span>
<span class="line"><span>   12         }</span></span>
<span class="line"><span>   13     }</span></span>
<span class="line"><span>   14 }</span></span></code></pre></div><p>Vim Fugitive 在分割的窗口里显示 <code>git status</code> 的输出结果。你可以在该行按下 <code>-</code> 键用该文件的名字暂存这个文件的提交，再按一次 <code>-</code> 可以取消暂存。这个信息会随着你的操作自动更新：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  1 # On branch master</span></span>
<span class="line"><span>  2 # Your branch is up to date with &#39;origin/master&#39;.</span></span>
<span class="line"><span>  3 #</span></span>
<span class="line"><span>  4 # Changes to be committed:</span></span>
<span class="line"><span>  5 #   (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)</span></span>
<span class="line"><span>  6 #</span></span>
<span class="line"><span>  7 #       modified:   vim-5plugins/examples/test1.go</span></span>
<span class="line"><span>  8 #</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span>    1 package main</span></span>
<span class="line"><span>    2</span></span>
<span class="line"><span>    3 import &quot;fmt&quot;</span></span>
<span class="line"><span>    4</span></span>
<span class="line"><span>_   5 func main() {</span></span>
<span class="line"><span>    6     items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span>    7</span></span>
<span class="line"><span>~   8     if len(items) &gt; 0 {</span></span>
<span class="line"><span>    9         for _, i := range items {</span></span>
<span class="line"><span>   10             fmt.Println(i)</span></span>
<span class="line"><span>+  11             fmt.Println(&quot;------&quot;)</span></span>
<span class="line"><span>   12         }</span></span>
<span class="line"><span>   13     }</span></span>
<span class="line"><span>   14 }</span></span></code></pre></div><p>现在你可以用 <code>:Gcommit</code> 来提交修改了。Vim Fugitive 会打开另一个分割窗口让你输入提交信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  1 vim-5plugins: Updated test1.go example file</span></span>
<span class="line"><span>  2 # Please enter the commit message for your changes. Lines starting</span></span>
<span class="line"><span>  3 # with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span></span>
<span class="line"><span>  4 #</span></span>
<span class="line"><span>  5 # On branch master</span></span>
<span class="line"><span>  6 # Your branch is up to date with &#39;origin/master&#39;.</span></span>
<span class="line"><span>  7 #</span></span>
<span class="line"><span>  8 # Changes to be committed:</span></span>
<span class="line"><span>  9 #       modified:   vim-5plugins/examples/test1.go</span></span>
<span class="line"><span> 10 #</span></span></code></pre></div><p>按 <code>:wq</code> 保存文件完成提交：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[master c3bf80f] vim-5plugins: Updated test1.go example file</span></span>
<span class="line"><span> 1 file changed, 2 insertions(+), 2 deletions(-)</span></span>
<span class="line"><span>Press ENTER or type command to continue</span></span></code></pre></div><p>然后你可以再用 <code>:Gstatus</code> 检查结果并用 <code>:Gpush</code> 把新的提交推送到远程。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  1 # On branch master</span></span>
<span class="line"><span>  2 # Your branch is ahead of &#39;origin/master&#39; by 1 commit.</span></span>
<span class="line"><span>  3 #   (use &quot;git push&quot; to publish your local commits)</span></span>
<span class="line"><span>  4 #</span></span>
<span class="line"><span>  5 nothing to commit, working tree clean</span></span></code></pre></div><p>Vim Fugitive 的 GitHub 项目主页有很多屏幕录像展示了它的更多功能和工作流，如果你喜欢它并想多学一些，快去看看吧。</p><h3 id="接下来" tabindex="-1">接下来？ <a class="header-anchor" href="#接下来" aria-label="Permalink to “接下来？”">​</a></h3><p>这些 Vim 插件都是程序开发者的神器！还有另外两类开发者常用的插件：自动完成插件和语法检查插件。它些大都是和具体的编程语言相关的，以后我会在一些文章中介绍它们。</p><p>你在写代码时是否用到一些其它 Vim 插件？请在评论区留言分享。</p><hr>`,17)),a("p",null,[s[26]||(s[26]=n("via: ",-1)),i(p,{href:"https://opensource.com/article/19/1/vim-plugins-developers"},{default:e(()=>[...s[25]||(s[25]=[n("https://opensource.com/article/19/1/vim-plugins-developers",-1)])]),_:1})]),a("p",null,[s[31]||(s[31]=n("作者：",-1)),i(p,{href:"https://opensource.com/users/rgerardi"},{default:e(()=>[...s[27]||(s[27]=[n("Ricardo Gerardi",-1)])]),_:1}),s[32]||(s[32]=n(" 选题：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[28]||(s[28]=[n("lujun9972",-1)])]),_:1}),s[33]||(s[33]=n(" 译者：",-1)),i(p,{href:"https://github.com/pityonline"},{default:e(()=>[...s[29]||(s[29]=[n("pityonline",-1)])]),_:1}),s[34]||(s[34]=n(" 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[30]||(s[30]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[37]||(s[37]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[35]||(s[35]=[n("LCTT",-1)])]),_:1}),s[38]||(s[38]=n(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[36]||(s[36]=[n("Linux中国",-1)])]),_:1}),s[39]||(s[39]=n(" 荣誉推出",-1))])])}const y=l(u,[["render",c]]);export{v as __pageData,y as default};
