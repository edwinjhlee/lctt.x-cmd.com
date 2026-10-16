import{_ as t,a0 as o,w as r,s as m,I as a,x as n,a1 as l,A as i,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"將 Vim 配置成一個寫作工具 | LCTT x X-CMD","titleTemplate":false,"description":"將 Vim 配置成一個寫作工具 | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"將 Vim 配置成一個寫作工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"將 Vim 配置成一個寫作工具 | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20210529 Configuring Vim as a Writing Tool","title":"將 Vim 配置成一個寫作工具","tag":"202107","desc":""},"relativePath":"202107/20210529 Configuring Vim as a Writing Tool.md","filePath":"[post].md"}'),u={name:"202107/20210529 Configuring Vim as a Writing Tool.md"};function d(g,s,v,f,V,b){const p=o("Link");return r(),m("div",null,[s[43]||(s[43]=a("h1",{id:"將-vim-配置成一個寫作工具",tabindex:"-1"},[n("將 Vim 配置成一個寫作工具 "),a("a",{class:"header-anchor",href:"#將-vim-配置成一個寫作工具","aria-label":"Permalink to “將 Vim 配置成一個寫作工具”"},"​")],-1)),s[44]||(s[44]=a("blockquote",null,[a("p",null,"我使用 Vim 來寫小説。我是這樣配置它的。")],-1)),s[45]||(s[45]=a("p",null,[a("img",{src:"https://i1.wp.com/news.itsfoss.com/wp-content/uploads/2021/05/Setting-Up-Vim-for-Writing.jpg?w=1200&ssl=1",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("在我的第一個專欄中，我談到了我為什麼把 ",-1)),l(p,{href:"https://news.itsfoss.com/how-i-started-loving-vim/"},{default:i(()=>[...s[0]||(s[0]=[n("我的寫作工作遷移到了 Vim 上",-1)])]),_:1}),s[3]||(s[3]=n(" —— 遠離了現代寫作者們的標準工具，如文字處理器（MS Word 及它的開源替代方案）、文本編輯器（記事本，因為直到去年我一直是 Windows 用户）和雲存儲技術。如果你是一個寫作者，在繼續下面的內容前，我建議你先閲讀一下 ",-1)),l(p,{href:"https://news.itsfoss.com/how-i-started-loving-vim/"},{default:i(()=>[...s[1]||(s[1]=[n("那篇文章的第一部分",-1)])]),_:1}),s[4]||(s[4]=n(" 。",-1))]),s[46]||(s[46]=a("p",null,"基本上可以説，你使用的設備越多，你需要的寫作工具就越多，最終你的工作流程就越複雜。這一點對我來説是很貼切的，因為我有四台設備，包括一部安卓手機，一台日常用的運行 Linux 的主力筆記本電腦，還有兩台舊的筆記本電腦，其中一台是 Mac，我去户外拍攝時會帶着它。",-1)),s[47]||(s[47]=a("p",null,"Vim 對於我和我的工作方式來説是一個完美的解決方案；雖然我不會説我的新的工作流程是現代寫作者工作的最佳方式，但我可以説的是，對於寫作者來説，擁有一個能在我們所有設備上工作的工具非常重要的，並且這個工具要足夠強大以滿足我們寫作者每天從事的不同類型的寫作需求。",-1)),a("p",null,[s[6]||(s[6]=n("從這個角度來看，Vim 的主要優勢是它是跨平台的 —— 無論在什麼設備上，Vim 都能工作。在蘋果生態系統中使用 Vim 的情況我就不細説了，但粗略地看一下 ",-1)),l(p,{href:"https://apps.apple.com/us/app/ivim/id1266544660"},{default:i(()=>[...s[5]||(s[5]=[n("這個應用程序",-1)])]),_:1}),s[7]||(s[7]=n(" 的評論，我就會知道，總會有人在各種地方使用 Vim，不管他們使用的是什麼設備。",-1))]),s[48]||(s[48]=a("p",null,"現在我們假設你是一個想開始使用 Vim 的寫作者。當你安裝了它，你該從哪裏開始呢？",-1)),s[49]||(s[49]=a("p",null,[n("我在這一部分給你的並不算是教程，而是一系列的建議，包含對一個用於詩歌寫作的 "),a("code",null,".vimrc"),n(" 配置文件的解讀。只要有可能，我就會鏈接到我學習相應內容時用到的 YouTube 上的教程。")],-1)),a("p",null,[s[9]||(s[9]=n("對於 Linux 用户來説，系統已經預裝了 Vim —— 通過你喜歡的終端模擬器就可以啓動它。對於 Windows 和 Mac 用户，你可以從 ",-1)),l(p,{href:"https://www.vim.org/"},{default:i(()=>[...s[8]||(s[8]=[n("Vim 官方網站",-1)])]),_:1}),s[10]||(s[10]=n(" 下載它。",-1))]),s[50]||(s[50]=e('<h3 id="建議" tabindex="-1">建議 <a class="header-anchor" href="#建議" aria-label="Permalink to “建議”">​</a></h3><p><strong>安裝/啓用 Vim 後</strong></p><ul><li>通過終端打開 Vim Tutor。（Mac 用户可以用這種方式啓動，而 Windows 用户也可以用這種方法啓動。[LCTT 譯註：原文這裏本應該有鏈接，可能作者忘記添加了。無論如何，在終端中， Linux 中的命令是 <code>vimtutor</code>，Windows 在安裝目錄下找到 <code>vimtutor.bat</code> 命令並運行；Mac？應該與 Linux 一樣？我沒 Mac 呀！]）在這個階段，你不會使用 Vim 進行任何寫作 —— 相反，你要每天花 15 分鐘做 Vim 教程。不要多花一分鐘或少花一分鐘；看看在規定的 15 分鐘內，你能在教程中取得多大的進展。你會發現，每天你都會在教程中取得更大的進步。在一個月內，你應該能夠利用這些 15 分鐘完成整個教程。</li><li>成為一個更好的打字員對 Vim 的使用來説有極大的好處。這不是必須的，但我正在重新學習打字，它的副作用是使 Vim 變得更加有用了。我每次都以花 15 分鐘練習打字開始，作為進入 Vim 教程前的熱身。</li></ul><p>在每一天的開始，我分配了 30 分鐘的時間做這兩項練習進行熱身，而每天晚上睡覺前再分配 30 分鐘進行練習以讓我安定下來。這樣的做法幫我快速從舊的工具包過渡到了 Vim，但你的安排可能有所不同。</p><p>我再次強調，<strong>除了 Vim Tutor 之外</strong>，上述步驟都是可選的；這完全取決於你個人的動機水平。</p><p>現在我們來到了這篇文章的重點：如何配置 Vim ，使它對寫作者友好？</p><h3 id="如何配置用於寫作的-vimrc" tabindex="-1">如何配置用於寫作的 .vimrc <a class="header-anchor" href="#如何配置用於寫作的-vimrc" aria-label="Permalink to “如何配置用於寫作的 .vimrc”">​</a></h3><p>在開始之前，我想在這裏提醒各位讀者，我不是一個技術人員 —— 我是一個小説家 —— 你在下面看到的任何錯誤都是我自己的；我希望有經驗的 Vim 用户能提供反饋，告訴我如何進一步完善我的配置文件。</p>',8)),a("p",null,[s[12]||(s[12]=n("下面是我的 ",-1)),s[13]||(s[13]=a("code",null,".vimrc",-1)),s[14]||(s[14]=n(" 文件。你可以從我的 ",-1)),l(p,{href:"https://github.com/MiragianCycle/dotfiles"},{default:i(()=>[...s[11]||(s[11]=[n("GitHub",-1)])]),_:1}),s[15]||(s[15]=n(" 上下載，並進一步完善它：",-1))]),s[51]||(s[51]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>syntax on</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set noerrorbells &quot; 取消 Vim 的錯誤警告鈴聲，關閉它以免打擾到我們</span></span>
<span class="line"><span>set textwidth=100 &quot; 確保每一行不超過 100 字符</span></span>
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
<span class="line"><span>&quot; 下面的設置確保按寫作者而不是程序員喜歡的方式折行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set wrap</span></span>
<span class="line"><span>nnoremap &lt;F5&gt; :set linebreak&lt;CR&gt;</span></span>
<span class="line"><span>nnoremap &lt;C-F5&gt; :set nolinebreak&lt;CR&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>call plug#begin(&#39;~/.vim/plugged&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   這是顏色風格插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;colepeters/spacemacs-theme.vim&#39;</span></span>
<span class="line"><span>Plug &#39;sainnhe/gruvbox-material&#39;</span></span>
<span class="line"><span>Plug &#39;phanviet/vim-monokai-pro&#39;</span></span>
<span class="line"><span>Plug &#39;flazz/vim-colorschemes&#39;</span></span>
<span class="line"><span>Plug &#39;chriskempson/base16-vim&#39;</span></span>
<span class="line"><span>Plug &#39;gruvbox-community/gruvbox&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   這是為了更容易的詩歌寫作選擇的一些插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;dpelle/vim-LanguageTool&#39;</span></span>
<span class="line"><span>Plug &#39;ron89/thesaurus_query.vim&#39;</span></span>
<span class="line"><span>Plug &#39;junegunn/goyo.vim&#39;</span></span>
<span class="line"><span>Plug &#39;junegunn/limelight.vim&#39;</span></span>
<span class="line"><span>Plug &#39;reedes/vim-pencil&#39;</span></span>
<span class="line"><span>Plug &#39;reedes/vim-wordy&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   這一部分是為了更容易地與機器集成，用了 vim-airline 這類插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;vim-airline/vim-airline&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   這一部分外理工作區和會話管理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;thaerkh/vim-workspace&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   與上面插件相關, 下面的代碼將你的所有的會話文件保存到一個你工作區之外的目錄</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let g:workspace_session_directory = $HOME . &#39;/.vim/sessions/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   與上面插件相關，這是一個 Vim 活動的跟蹤器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;wakatime/vim-wakatime&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;   一個干擾因素：我在這裏使用了一些 Emacs 的功能，特別是 org-mode </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;jceb/vim-orgmode&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;  這是文件格式相關插件</span></span>
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
<span class="line"><span>endif</span></span></code></pre></div>`,1)),a("p",null,[s[17]||(s[17]=n("學習如何安裝 Vim 插件時，這個",-1)),l(p,{href:"https://www.youtube.com/watch?v=n9k9scbTuvQ"},{default:i(()=>[...s[16]||(s[16]=[n("教程",-1)])]),_:1}),s[18]||(s[18]=n("幫助了我。我使用 Vim Plugged 插件管理器是因為在我看來它是最簡單、最優雅的。",-1))]),s[52]||(s[52]=e('<p><img src="https://i1.wp.com/i.ytimg.com/vi/n9k9scbTuvQ/hqdefault.jpg?w=780&amp;ssl=1" alt=""></p><h4 id="對於寫作者的-vimrc-選項的整理" tabindex="-1">對於寫作者的 .vimrc 選項的整理 <a class="header-anchor" href="#對於寫作者的-vimrc-選項的整理" aria-label="Permalink to “對於寫作者的 .vimrc 選項的整理”">​</a></h4><ul><li><code>syntax on</code>：這可以確保 Vim 知道我在使用什麼語法。做筆記、寫這種文章時我主要使用 Markdown；而在寫小説的時候，純文本是我的首選格式。</li><li><code>set noerrorbells</code>：為了你的精神狀態，我強烈建議打開這個選項。</li><li><code>set textwidth=100</code>：為了便於閲讀，沒有人願意橫向滾動一個文本文件。</li><li><code>set spell</code>：如果有拼寫錯誤的話提醒你。</li><li><code>set wrap</code>：確保文本以寫作者而不是程序員的方式進行折行。</li></ul><p>你會注意到，我沒有花更多時間討論其他一些基本配置選項，因為我並不覺得那些對寫作者來説有多重要。因為我做一些業餘的編碼工作，所以我的 <code>.vimrc</code> 配置反映了這一點。如果你只想在 Vim 上寫作，那麼上述配置就應該能讓你順利開始。</p><p>從這點上來説，你的 <code>.vimrc</code> 是一個活的文檔，它能生動地反映你想用 Vim 做什麼，以及你希望 Vim 如何為你做這些事情。</p><h4 id="關於插件的説明" tabindex="-1">關於插件的説明 <a class="header-anchor" href="#關於插件的説明" aria-label="Permalink to “關於插件的説明”">​</a></h4><p>第 43-98 行之間是我對插件的配置。如果你已經學習了關於如何安裝 Vim 插件的教程，我強烈推薦你從以下專為寫作開發的 Vim 插件開始：</p><ul><li><code>vim-LanguageTool</code></li><li><code>thesaurus_query.vim</code></li><li><code>vim-pencil</code></li><li><code>vim-wordy</code></li><li><code>vim-goyo</code></li><li><code>vim-markdown</code></li></ul><h4 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h4>',9)),a("p",null,[s[20]||(s[20]=n("在這篇文章中，我們簡單地",-1)),l(p,{href:"https://youtu.be/Pq3JMp3stxQ"},{default:i(()=>[...s[19]||(s[19]=[n("介紹",-1)])]),_:1}),s[21]||(s[21]=n("了寫作者可以怎樣開始使用 Vim，以及一個在寫作工作中需要的 ",-1)),s[22]||(s[22]=a("code",null,".vimrc",-1)),s[23]||(s[23]=n(" 入門配置。除了我的 ",-1)),s[24]||(s[24]=a("code",null,".vimrc",-1)),s[25]||(s[25]=n(" 之外，我還將在這裏鏈接到我在 GitHub 上發現的其他寫作者的 ",-1)),s[26]||(s[26]=a("code",null,".vimrc",-1)),s[27]||(s[27]=n("，它們是我自己配置時的靈感來源。",-1))]),s[53]||(s[53]=a("p",null,[a("img",{src:"https://i2.wp.com/i.ytimg.com/vi/Pq3JMp3stxQ/hqdefault.jpg?w=780&ssl=1",alt:""})],-1)),s[54]||(s[54]=a("p",null,[n("請勞記，這只是一個寫作者的 "),a("code",null,".vimrc"),n(" 的入門配置。你會發現，隨着你的需求的發展，Vim 也可以隨之發展。因此，投入一些時間學習配置你的 "),a("code",null,".vimrc"),n(" 是值得的。")],-1)),s[55]||(s[55]=a("p",null,"在下一篇文章中，我將會檢視我在寫作時的工作流程的具體細節，這個工作流程中我使用了 Vim 和 Git 及 GitHub。",-1)),s[56]||(s[56]=a("hr",null,null,-1)),a("p",null,[s[29]||(s[29]=n("via: ",-1)),l(p,{href:"https://news.itsfoss.com/configuring-vim-writing/"},{default:i(()=>[...s[28]||(s[28]=[n("https://news.itsfoss.com/configuring-vim-writing/",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("作者：",-1)),l(p,{href:"https://news.itsfoss.com/author/theena/"},{default:i(()=>[...s[30]||(s[30]=[n("Theena",-1)])]),_:1}),s[35]||(s[35]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[31]||(s[31]=[n("lujun9972",-1)])]),_:1}),s[36]||(s[36]=n(" 譯者：",-1)),l(p,{href:"https://github.com/piaoshi"},{default:i(()=>[...s[32]||(s[32]=[n("piaoshi",-1)])]),_:1}),s[37]||(s[37]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[33]||(s[33]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[40]||(s[40]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[38]||(s[38]=[n("LCTT",-1)])]),_:1}),s[41]||(s[41]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:i(()=>[...s[39]||(s[39]=[n("Linux中國",-1)])]),_:1}),s[42]||(s[42]=n(" 榮譽推出",-1))])])}const x=t(u,[["render",d]]);export{k as __pageData,x as default};
