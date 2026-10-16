import{_ as t,a0 as o,w as r,s as m,I as a,x as n,a1 as l,A as i,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"将 Vim 配置成一个写作工具 | LCTT x X-CMD","titleTemplate":false,"description":"将 Vim 配置成一个写作工具 | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"将 Vim 配置成一个写作工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"将 Vim 配置成一个写作工具 | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20210529 Configuring Vim as a Writing Tool","title":"将 Vim 配置成一个写作工具","tag":"202107","desc":""},"relativePath":"202107/20210529 Configuring Vim as a Writing Tool.md","filePath":"[post].md"}'),u={name:"202107/20210529 Configuring Vim as a Writing Tool.md"};function d(g,s,v,f,V,b){const p=o("Link");return r(),m("div",null,[s[43]||(s[43]=a("h1",{id:"将-vim-配置成一个写作工具",tabindex:"-1"},[n("将 Vim 配置成一个写作工具 "),a("a",{class:"header-anchor",href:"#将-vim-配置成一个写作工具","aria-label":"Permalink to “将 Vim 配置成一个写作工具”"},"​")],-1)),s[44]||(s[44]=a("blockquote",null,[a("p",null,"我使用 Vim 来写小说。我是这样配置它的。")],-1)),s[45]||(s[45]=a("p",null,[a("img",{src:"https://i1.wp.com/news.itsfoss.com/wp-content/uploads/2021/05/Setting-Up-Vim-for-Writing.jpg?w=1200&ssl=1",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("在我的第一个专栏中，我谈到了我为什么把 ",-1)),l(p,{href:"https://news.itsfoss.com/how-i-started-loving-vim/"},{default:i(()=>[...s[0]||(s[0]=[n("我的写作工作迁移到了 Vim 上",-1)])]),_:1}),s[3]||(s[3]=n(" —— 远离了现代写作者们的标准工具，如文字处理器（MS Word 及它的开源替代方案）、文本编辑器（记事本，因为直到去年我一直是 Windows 用户）和云存储技术。如果你是一个写作者，在继续下面的内容前，我建议你先阅读一下 ",-1)),l(p,{href:"https://news.itsfoss.com/how-i-started-loving-vim/"},{default:i(()=>[...s[1]||(s[1]=[n("那篇文章的第一部分",-1)])]),_:1}),s[4]||(s[4]=n(" 。",-1))]),s[46]||(s[46]=a("p",null,"基本上可以说，你使用的设备越多，你需要的写作工具就越多，最终你的工作流程就越复杂。这一点对我来说是很贴切的，因为我有四台设备，包括一部安卓手机，一台日常用的运行 Linux 的主力笔记本电脑，还有两台旧的笔记本电脑，其中一台是 Mac，我去户外拍摄时会带着它。",-1)),s[47]||(s[47]=a("p",null,"Vim 对于我和我的工作方式来说是一个完美的解决方案；虽然我不会说我的新的工作流程是现代写作者工作的最佳方式，但我可以说的是，对于写作者来说，拥有一个能在我们所有设备上工作的工具非常重要的，并且这个工具要足够强大以满足我们写作者每天从事的不同类型的写作需求。",-1)),a("p",null,[s[6]||(s[6]=n("从这个角度来看，Vim 的主要优势是它是跨平台的 —— 无论在什么设备上，Vim 都能工作。在苹果生态系统中使用 Vim 的情况我就不细说了，但粗略地看一下 ",-1)),l(p,{href:"https://apps.apple.com/us/app/ivim/id1266544660"},{default:i(()=>[...s[5]||(s[5]=[n("这个应用程序",-1)])]),_:1}),s[7]||(s[7]=n(" 的评论，我就会知道，总会有人在各种地方使用 Vim，不管他们使用的是什么设备。",-1))]),s[48]||(s[48]=a("p",null,"现在我们假设你是一个想开始使用 Vim 的写作者。当你安装了它，你该从哪里开始呢？",-1)),s[49]||(s[49]=a("p",null,[n("我在这一部分给你的并不算是教程，而是一系列的建议，包含对一个用于诗歌写作的 "),a("code",null,".vimrc"),n(" 配置文件的解读。只要有可能，我就会链接到我学习相应内容时用到的 YouTube 上的教程。")],-1)),a("p",null,[s[9]||(s[9]=n("对于 Linux 用户来说，系统已经预装了 Vim —— 通过你喜欢的终端模拟器就可以启动它。对于 Windows 和 Mac 用户，你可以从 ",-1)),l(p,{href:"https://www.vim.org/"},{default:i(()=>[...s[8]||(s[8]=[n("Vim 官方网站",-1)])]),_:1}),s[10]||(s[10]=n(" 下载它。",-1))]),s[50]||(s[50]=e('<h3 id="建议" tabindex="-1">建议 <a class="header-anchor" href="#建议" aria-label="Permalink to “建议”">​</a></h3><p><strong>安装/启用 Vim 后</strong></p><ul><li>通过终端打开 Vim Tutor。（Mac 用户可以用这种方式启动，而 Windows 用户也可以用这种方法启动。[LCTT 译注：原文这里本应该有链接，可能作者忘记添加了。无论如何，在终端中， Linux 中的命令是 <code>vimtutor</code>，Windows 在安装目录下找到 <code>vimtutor.bat</code> 命令并运行；Mac？应该与 Linux 一样？我没 Mac 呀！]）在这个阶段，你不会使用 Vim 进行任何写作 —— 相反，你要每天花 15 分钟做 Vim 教程。不要多花一分钟或少花一分钟；看看在规定的 15 分钟内，你能在教程中取得多大的进展。你会发现，每天你都会在教程中取得更大的进步。在一个月内，你应该能够利用这些 15 分钟完成整个教程。</li><li>成为一个更好的打字员对 Vim 的使用来说有极大的好处。这不是必须的，但我正在重新学习打字，它的副作用是使 Vim 变得更加有用了。我每次都以花 15 分钟练习打字开始，作为进入 Vim 教程前的热身。</li></ul><p>在每一天的开始，我分配了 30 分钟的时间做这两项练习进行热身，而每天晚上睡觉前再分配 30 分钟进行练习以让我安定下来。这样的做法帮我快速从旧的工具包过渡到了 Vim，但你的安排可能有所不同。</p><p>我再次强调，<strong>除了 Vim Tutor 之外</strong>，上述步骤都是可选的；这完全取决于你个人的动机水平。</p><p>现在我们来到了这篇文章的重点：如何配置 Vim ，使它对写作者友好？</p><h3 id="如何配置用于写作的-vimrc" tabindex="-1">如何配置用于写作的 .vimrc <a class="header-anchor" href="#如何配置用于写作的-vimrc" aria-label="Permalink to “如何配置用于写作的 .vimrc”">​</a></h3><p>在开始之前，我想在这里提醒各位读者，我不是一个技术人员 —— 我是一个小说家 —— 你在下面看到的任何错误都是我自己的；我希望有经验的 Vim 用户能提供反馈，告诉我如何进一步完善我的配置文件。</p>',8)),a("p",null,[s[12]||(s[12]=n("下面是我的 ",-1)),s[13]||(s[13]=a("code",null,".vimrc",-1)),s[14]||(s[14]=n(" 文件。你可以从我的 ",-1)),l(p,{href:"https://github.com/MiragianCycle/dotfiles"},{default:i(()=>[...s[11]||(s[11]=[n("GitHub",-1)])]),_:1}),s[15]||(s[15]=n(" 上下载，并进一步完善它：",-1))]),s[51]||(s[51]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>syntax on</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set noerrorbells &quot; 取消 Vim 的错误警告铃声，关闭它以免打扰到我们</span></span>
<span class="line"><span>set textwidth=100 &quot; 确保每一行不超过 100 字符</span></span>
<span class="line"><span>set tabstop=4 softtabstop=4</span></span>
<span class="line"><span>set shiftwidth=4</span></span>
<span class="line"><span>set expandtab</span></span>
<span class="line"><span>set smartindent</span></span>
<span class="line"><span>set linebreak</span></span>
<span class="line"><span>set number</span></span>
<span class="line"><span>set showmatch</span></span>
<span class="line"><span>set showbreak=+++</span></span>
<span class="line"><span>set smartcase</span></span>
<span class="line"><span>set noswapfile</span></span>
<span class="line"><span>set undodir=~/.vim/undodir</span></span>
<span class="line"><span>set undofile</span></span>
<span class="line"><span>set incsearch</span></span>
<span class="line"><span>set spell</span></span>
<span class="line"><span>set showmatch</span></span>
<span class="line"><span>set confirm</span></span>
<span class="line"><span>set ruler</span></span>
<span class="line"><span>set autochdir</span></span>
<span class="line"><span>set autowriteall</span></span>
<span class="line"><span>set undolevels=1000</span></span>
<span class="line"><span>set backspace=indent,eol,start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot; 下面的设置确保按写作者而不是程序员喜欢的方式折行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set wrap</span></span>
<span class="line"><span>nnoremap &lt;F5&gt; :set linebreak&lt;CR&gt;</span></span>
<span class="line"><span>nnoremap &lt;C-F5&gt; :set nolinebreak&lt;CR&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>call plug#begin(&#39;~/.vim/plugged&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   这是颜色风格插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;colepeters/spacemacs-theme.vim&#39;</span></span>
<span class="line"><span>Plug &#39;sainnhe/gruvbox-material&#39;</span></span>
<span class="line"><span>Plug &#39;phanviet/vim-monokai-pro&#39;</span></span>
<span class="line"><span>Plug &#39;flazz/vim-colorschemes&#39;</span></span>
<span class="line"><span>Plug &#39;chriskempson/base16-vim&#39;</span></span>
<span class="line"><span>Plug &#39;gruvbox-community/gruvbox&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   这是为了更容易的诗歌写作选择的一些插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;dpelle/vim-LanguageTool&#39;</span></span>
<span class="line"><span>Plug &#39;ron89/thesaurus_query.vim&#39;</span></span>
<span class="line"><span>Plug &#39;junegunn/goyo.vim&#39;</span></span>
<span class="line"><span>Plug &#39;junegunn/limelight.vim&#39;</span></span>
<span class="line"><span>Plug &#39;reedes/vim-pencil&#39;</span></span>
<span class="line"><span>Plug &#39;reedes/vim-wordy&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   这一部分是为了更容易地与机器集成，用了 vim-airline 这类插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;vim-airline/vim-airline&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   这一部分外理工作区和会话管理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;thaerkh/vim-workspace&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   与上面插件相关, 下面的代码将你的所有的会话文件保存到一个你工作区之外的目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let g:workspace_session_directory = $HOME . &#39;/.vim/sessions/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   与上面插件相关，这是一个 Vim 活动的跟踪器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;wakatime/vim-wakatime&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   一个干扰因素：我在这里使用了一些 Emacs 的功能，特别是 org-mode </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;jceb/vim-orgmode&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;  这是文件格式相关插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;plasticboy/vim-markdown&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>call plug#end()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>colorscheme pacific</span></span>
<span class="line"><span>set background=dark</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if executable(&#39;rg&#39;)</span></span>
<span class="line"><span>    let g:rg_derive_root=&#39;true&#39;</span></span>
<span class="line"><span>endif</span></span></code></pre></div>`,1)),a("p",null,[s[17]||(s[17]=n("学习如何安装 Vim 插件时，这个",-1)),l(p,{href:"https://www.youtube.com/watch?v=n9k9scbTuvQ"},{default:i(()=>[...s[16]||(s[16]=[n("教程",-1)])]),_:1}),s[18]||(s[18]=n("帮助了我。我使用 Vim Plugged 插件管理器是因为在我看来它是最简单、最优雅的。",-1))]),s[52]||(s[52]=e('<p><img src="https://i1.wp.com/i.ytimg.com/vi/n9k9scbTuvQ/hqdefault.jpg?w=780&amp;ssl=1" alt=""></p><h4 id="对于写作者的-vimrc-选项的整理" tabindex="-1">对于写作者的 .vimrc 选项的整理 <a class="header-anchor" href="#对于写作者的-vimrc-选项的整理" aria-label="Permalink to “对于写作者的 .vimrc 选项的整理”">​</a></h4><ul><li><code>syntax on</code>：这可以确保 Vim 知道我在使用什么语法。做笔记、写这种文章时我主要使用 Markdown；而在写小说的时候，纯文本是我的首选格式。</li><li><code>set noerrorbells</code>：为了你的精神状态，我强烈建议打开这个选项。</li><li><code>set textwidth=100</code>：为了便于阅读，没有人愿意横向滚动一个文本文件。</li><li><code>set spell</code>：如果有拼写错误的话提醒你。</li><li><code>set wrap</code>：确保文本以写作者而不是程序员的方式进行折行。</li></ul><p>你会注意到，我没有花更多时间讨论其他一些基本配置选项，因为我并不觉得那些对写作者来说有多重要。因为我做一些业余的编码工作，所以我的 <code>.vimrc</code> 配置反映了这一点。如果你只想在 Vim 上写作，那么上述配置就应该能让你顺利开始。</p><p>从这点上来说，你的 <code>.vimrc</code> 是一个活的文档，它能生动地反映你想用 Vim 做什么，以及你希望 Vim 如何为你做这些事情。</p><h4 id="关于插件的说明" tabindex="-1">关于插件的说明 <a class="header-anchor" href="#关于插件的说明" aria-label="Permalink to “关于插件的说明”">​</a></h4><p>第 43-98 行之间是我对插件的配置。如果你已经学习了关于如何安装 Vim 插件的教程，我强烈推荐你从以下专为写作开发的 Vim 插件开始：</p><ul><li><code>vim-LanguageTool</code></li><li><code>thesaurus_query.vim</code></li><li><code>vim-pencil</code></li><li><code>vim-wordy</code></li><li><code>vim-goyo</code></li><li><code>vim-markdown</code></li></ul><h4 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h4>',9)),a("p",null,[s[20]||(s[20]=n("在这篇文章中，我们简单地",-1)),l(p,{href:"https://youtu.be/Pq3JMp3stxQ"},{default:i(()=>[...s[19]||(s[19]=[n("介绍",-1)])]),_:1}),s[21]||(s[21]=n("了写作者可以怎样开始使用 Vim，以及一个在写作工作中需要的 ",-1)),s[22]||(s[22]=a("code",null,".vimrc",-1)),s[23]||(s[23]=n(" 入门配置。除了我的 ",-1)),s[24]||(s[24]=a("code",null,".vimrc",-1)),s[25]||(s[25]=n(" 之外，我还将在这里链接到我在 GitHub 上发现的其他写作者的 ",-1)),s[26]||(s[26]=a("code",null,".vimrc",-1)),s[27]||(s[27]=n("，它们是我自己配置时的灵感来源。",-1))]),s[53]||(s[53]=a("p",null,[a("img",{src:"https://i2.wp.com/i.ytimg.com/vi/Pq3JMp3stxQ/hqdefault.jpg?w=780&ssl=1",alt:""})],-1)),s[54]||(s[54]=a("p",null,[n("请劳记，这只是一个写作者的 "),a("code",null,".vimrc"),n(" 的入门配置。你会发现，随着你的需求的发展，Vim 也可以随之发展。因此，投入一些时间学习配置你的 "),a("code",null,".vimrc"),n(" 是值得的。")],-1)),s[55]||(s[55]=a("p",null,"在下一篇文章中，我将会检视我在写作时的工作流程的具体细节，这个工作流程中我使用了 Vim 和 Git 及 GitHub。",-1)),s[56]||(s[56]=a("hr",null,null,-1)),a("p",null,[s[29]||(s[29]=n("via: ",-1)),l(p,{href:"https://news.itsfoss.com/configuring-vim-writing/"},{default:i(()=>[...s[28]||(s[28]=[n("https://news.itsfoss.com/configuring-vim-writing/",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("作者：",-1)),l(p,{href:"https://news.itsfoss.com/author/theena/"},{default:i(()=>[...s[30]||(s[30]=[n("Theena",-1)])]),_:1}),s[35]||(s[35]=n(" 选题：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[31]||(s[31]=[n("lujun9972",-1)])]),_:1}),s[36]||(s[36]=n(" 译者：",-1)),l(p,{href:"https://github.com/piaoshi"},{default:i(()=>[...s[32]||(s[32]=[n("piaoshi",-1)])]),_:1}),s[37]||(s[37]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[33]||(s[33]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[40]||(s[40]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[38]||(s[38]=[n("LCTT",-1)])]),_:1}),s[41]||(s[41]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:i(()=>[...s[39]||(s[39]=[n("Linux中国",-1)])]),_:1}),s[42]||(s[42]=n(" 荣誉推出",-1))])])}const x=t(u,[["render",d]]);export{k as __pageData,x as default};
