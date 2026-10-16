import{_ as p,a0 as u,w as m,s as a,I as i,x as n,a1 as l,A as r,ao as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"如何管理 Vim 插件 | LCTT x X-CMD","titleTemplate":false,"description":"如何管理 Vim 插件 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何管理 Vim 插件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何管理 Vim 插件 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150713 How to manage Vim plugins","title":"如何管理 Vim 插件","tag":"201507","desc":""},"relativePath":"201507/20150713 How to manage Vim plugins.md","filePath":"[post].md"}'),d={name:"201507/20150713 How to manage Vim plugins.md"};function s(g,t,v,f,V,h){const e=u("Link");return m(),a("div",null,[t[26]||(t[26]=i("h1",{id:"如何管理-vim-插件",tabindex:"-1"},[n("如何管理 Vim 插件 "),i("a",{class:"header-anchor",href:"#如何管理-vim-插件","aria-label":"Permalink to “如何管理 Vim 插件”"},"​")],-1)),t[27]||(t[27]=i("p",null,"Vim是Linux上一个轻量级的通用文本编辑器。虽然它开始时的学习曲线对于一般的Linux用户来说可能很困难，但比起它的好处，这些付出完全是值得的。vim 可以通过完全可定制的插件来增加越来越多的功能。但是，由于它的功能配置比较难，你需要花一些时间去了解它的插件系统，然后才能够有效地去个性化定置Vim。幸运的是，我们已经有一些工具能够使我们在使用Vim插件时更加轻松。而我日常所使用的就是Vundle。",-1)),t[28]||(t[28]=i("h3",{id:"什么是vundle",tabindex:"-1"},[n("什么是Vundle "),i("a",{class:"header-anchor",href:"#什么是vundle","aria-label":"Permalink to “什么是Vundle”"},"​")],-1)),i("p",null,[l(e,{href:"https://github.com/VundleVim/Vundle.vim"},{default:r(()=>[...t[0]||(t[0]=[n("Vundle",-1)])]),_:1}),t[1]||(t[1]=n("意即Vim Bundle，是一个vim插件管理器。Vundle能让你很简单地实现插件的安装、升级、搜索或者清除。它还能管理你的运行环境并且在标签方面提供帮助。在本教程中我们将展示如何安装和使用Vundle。",-1))]),t[29]||(t[29]=i("h3",{id:"安装vundle",tabindex:"-1"},[n("安装Vundle "),i("a",{class:"header-anchor",href:"#安装vundle","aria-label":"Permalink to “安装Vundle”"},"​")],-1)),i("p",null,[t[3]||(t[3]=n("首先，如果你的Linux系统上没有Git的话，先",-1)),l(e,{href:"http://ask.xmodulo.com/install-git-linux.html"},{default:r(()=>[...t[2]||(t[2]=[n("安装Git",-1)])]),_:1}),t[4]||(t[4]=n("。",-1))]),t[30]||(t[30]=o(`<p>接着，创建一个目录，Vim的插件将会被下载并且安装在这个目录上。默认情况下，这个目录为~/.vim/bundle。</p><pre><code>$ mkdir -p ~/.vim/bundle 
</code></pre><p>现在，使用如下指令安装Vundle。注意Vundle本身也是一个vim插件。因此我们同样把vundle安装到之前创建的目录~/.vim/bundle下。</p><pre><code>$ git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim 
</code></pre><h3 id="配置vundle" tabindex="-1">配置Vundle　### <a class="header-anchor" href="#配置vundle" aria-label="Permalink to “配置Vundle　###”">​</a></h3><p>现在配置你的.vimrc文件如下：</p><pre><code>set nocompatible              &quot; 必需。 
filetype off                  &quot; 必须。
     
&quot; 在这里设置你的运行时环境的路径。
set rtp+=~/.vim/bundle/Vundle.vim
     
&quot; 初始化vundle
call vundle#begin()
     
&quot; 这一行应该永远放在开头。
Plugin &#39;gmarik/Vundle.vim&#39;
     
&quot; 这个示范来自https://github.com/gmarik/Vundle.vim README
Plugin &#39;tpope/vim-fugitive&#39;
     
&quot; 取自http://vim-scripts.org/vim/scripts.html的插件
Plugin &#39;L9&#39;
    
&quot;　该Git插件没有放在GitHub上。
Plugin &#39;git://git.wincent.com/command-t.git&#39;
     
&quot;本地计算机上的Git仓库路径　（例如，当你在开发你自己的插件时）
Plugin &#39;file:///home/gmarik/path/to/plugin&#39;
     
&quot; vim脚本sparkup存放在这个名叫vim的仓库下的一个子目录中。
&quot; 将这个路径正确地设置为runtimepath。
Plugin &#39;rstacruz/sparkup&#39;, {&#39;rtp&#39;: &#39;vim/&#39;}
     
&quot;　避免与L9发生名字上的冲突
Plugin &#39;user/L9&#39;, {&#39;name&#39;: &#39;newL9&#39;}
     
&quot;所有的插件都应该在这一行之前。
call vundle#end()            &quot; 必需。
</code></pre><p>容我简单解释一下上面的设置：默认情况下，Vundle将从github.com或者vim-scripts.org下载和安装vim插件。你也可以改变这个默认行为。</p><p>要从github安装插件:</p><pre><code>Plugin &#39;user/plugin&#39;
</code></pre>`,10)),i("p",null,[t[6]||(t[6]=n("要从 ",-1)),l(e,{href:"http://vim-scripts.org/vim/scripts.html"},{default:r(()=>[...t[5]||(t[5]=[n("http://vim-scripts.org/vim/scripts.html",-1)])]),_:1}),t[7]||(t[7]=n(" 处安装:",-1))]),t[31]||(t[31]=o(`<pre><code>Plugin &#39;plugin_name&#39;
</code></pre><p>要从另外一个git仓库中安装:</p><pre><code>Plugin &#39;git://git.another_repo.com/plugin&#39;
</code></pre><p>从本地文件中安装：</p><pre><code>Plugin &#39;file:///home/user/path/to/plugin&#39;
</code></pre><p>你同样可以定制其它东西，例如你的插件的运行时路径，当你自己在编写一个插件时，或者你只是想从其它目录——而不是~/.vim——中加载插件时，这样做就非常有用。</p><pre><code>Plugin &#39;rstacruz/sparkup&#39;, {&#39;rtp&#39;: &#39;another_vim_path/&#39;}
</code></pre><p>如果你有同名的插件，你可以重命名你的插件，这样它们就不会发生冲突了。</p><pre><code>Plugin &#39;user/plugin&#39;, {&#39;name&#39;: &#39;newPlugin&#39;}
</code></pre><h3 id="使用vum命令" tabindex="-1">使用Vum命令 <a class="header-anchor" href="#使用vum命令" aria-label="Permalink to “使用Vum命令”">​</a></h3><p>一旦你用vundle设置好你的插件，你就可以通过几个vundle命令来安装、升级、搜索插件，或者清除没有用的插件。</p><h4 id="安装一个新的插件" tabindex="-1">安装一个新的插件 <a class="header-anchor" href="#安装一个新的插件" aria-label="Permalink to “安装一个新的插件”">​</a></h4><p><code>PluginInstall</code>命令将会安装所有列在你的.vimrc文件中的插件。你也可以通过传递一个插件名给它，来安装某个的特定插件。</p><pre><code>:PluginInstall
:PluginInstall &lt;插件名&gt;
</code></pre><p><img src="https://farm1.staticflickr.com/559/18998707843_438cd55463_c.jpg" alt=""></p><h4 id="清除没有用的插件" tabindex="-1">清除没有用的插件 <a class="header-anchor" href="#清除没有用的插件" aria-label="Permalink to “清除没有用的插件”">​</a></h4><p>如果你有任何没有用到的插件，你可以通过<code>PluginClean</code>命令来删除它。</p><pre><code>:PluginClean
</code></pre><p><img src="https://farm4.staticflickr.com/3814/19433047689_17d9822af6_c.jpg" alt=""></p><h4 id="查找一个插件" tabindex="-1">查找一个插件 <a class="header-anchor" href="#查找一个插件" aria-label="Permalink to “查找一个插件”">​</a></h4><p>如果你想从提供的插件清单中安装一个插件，搜索功能会很有用。</p><pre><code>:PluginSearch &lt;文本&gt;
</code></pre><p><img src="https://farm1.staticflickr.com/541/19593459846_75b003443d_c.jpg" alt=""></p><p>在搜索的时候，你可以在交互式分割窗口中安装、清除、重新搜索或者重新加载插件清单。安装后的插件不会自动加载生效，要使其加载生效，可以将它们添加进你的.vimrc文件中。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>Vim是一个妙不可言的工具。它不单单是一个能够使你的工作更加顺畅高效的默认文本编辑器，同时它还能够摇身一变，成为现存的几乎任何一门编程语言的IDE。</p>`,26)),i("p",null,[t[10]||(t[10]=n("注意，有一些网站能帮你找到适合的vim插件。猛击 ",-1)),l(e,{href:"http://www.vim-scripts.org/"},{default:r(()=>[...t[8]||(t[8]=[n("http://www.vim-scripts.org",-1)])]),_:1}),t[11]||(t[11]=n(", Github或者 ",-1)),l(e,{href:"http://www.vimawesome.com/"},{default:r(()=>[...t[9]||(t[9]=[n("http://www.vimawesome.com",-1)])]),_:1}),t[12]||(t[12]=n(" 获取新的脚本或插件。同时记得使用为你的插件提供的帮助。",-1))]),t[32]||(t[32]=i("p",null,"和你最爱的编辑器一起嗨起来吧!",-1)),t[33]||(t[33]=i("hr",null,null,-1)),i("p",null,[t[14]||(t[14]=n("via: ",-1)),l(e,{href:"http://xmodulo.com/manage-vim-plugins.html"},{default:r(()=>[...t[13]||(t[13]=[n("http://xmodulo.com/manage-vim-plugins.html",-1)])]),_:1})]),i("p",null,[t[18]||(t[18]=n("作者：",-1)),l(e,{href:"http://xmodulo.com/author/valerio"},{default:r(()=>[...t[15]||(t[15]=[n("Christopher Valerio",-1)])]),_:1}),t[19]||(t[19]=n(" 译者：",-1)),l(e,{href:"https://github.com/XLCYun"},{default:r(()=>[...t[16]||(t[16]=[n("XLCYun(袖里藏云)",-1)])]),_:1}),t[20]||(t[20]=n(" 校对：",-1)),l(e,{href:"https://github.com/wxy"},{default:r(()=>[...t[17]||(t[17]=[n("wxy",-1)])]),_:1})]),i("p",null,[t[23]||(t[23]=n("本文由 ",-1)),l(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[21]||(t[21]=[n("LCTT",-1)])]),_:1}),t[24]||(t[24]=n(" 原创翻译，",-1)),l(e,{href:"https://linux.cn/"},{default:r(()=>[...t[22]||(t[22]=[n("Linux中国",-1)])]),_:1}),t[25]||(t[25]=n(" 荣誉推出",-1))])])}const T=p(d,[["render",s]]);export{x as __pageData,T as default};
