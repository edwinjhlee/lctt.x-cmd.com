import{_ as p,a0 as u,w as m,s as a,I as i,x as n,a1 as l,A as r,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"如何管理 Vim 插件 | LCTT x X-CMD","titleTemplate":false,"description":"如何管理 Vim 插件 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何管理 Vim 插件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何管理 Vim 插件 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150713 How to manage Vim plugins","title":"如何管理 Vim 插件","tag":"201507","desc":""},"relativePath":"201507/20150713 How to manage Vim plugins.md","filePath":"[post].md"}'),d={name:"201507/20150713 How to manage Vim plugins.md"};function s(g,t,v,f,V,h){const e=u("Link");return m(),a("div",null,[t[26]||(t[26]=i("h1",{id:"如何管理-vim-插件",tabindex:"-1"},[n("如何管理 Vim 插件 "),i("a",{class:"header-anchor",href:"#如何管理-vim-插件","aria-label":"Permalink to “如何管理 Vim 插件”"},"​")],-1)),t[27]||(t[27]=i("p",null,"Vim是Linux上一個輕量級的通用文本編輯器。雖然它開始時的學習曲線對於一般的Linux用户來説可能很困難，但比起它的好處，這些付出完全是值得的。vim 可以通過完全可定製的插件來增加越來越多的功能。但是，由於它的功能配置比較難，你需要花一些時間去了解它的插件系統，然後才能夠有效地去個性化定置Vim。幸運的是，我們已經有一些工具能夠使我們在使用Vim插件時更加輕鬆。而我日常所使用的就是Vundle。",-1)),t[28]||(t[28]=i("h3",{id:"什麼是vundle",tabindex:"-1"},[n("什麼是Vundle "),i("a",{class:"header-anchor",href:"#什麼是vundle","aria-label":"Permalink to “什麼是Vundle”"},"​")],-1)),i("p",null,[l(e,{href:"https://github.com/VundleVim/Vundle.vim"},{default:r(()=>[...t[0]||(t[0]=[n("Vundle",-1)])]),_:1}),t[1]||(t[1]=n("意即Vim Bundle，是一個vim插件管理器。Vundle能讓你很簡單地實現插件的安裝、升級、搜索或者清除。它還能管理你的運行環境並且在標籤方面提供幫助。在本教程中我們將展示如何安裝和使用Vundle。",-1))]),t[29]||(t[29]=i("h3",{id:"安裝vundle",tabindex:"-1"},[n("安裝Vundle "),i("a",{class:"header-anchor",href:"#安裝vundle","aria-label":"Permalink to “安裝Vundle”"},"​")],-1)),i("p",null,[t[3]||(t[3]=n("首先，如果你的Linux系統上沒有Git的話，先",-1)),l(e,{href:"http://ask.xmodulo.com/install-git-linux.html"},{default:r(()=>[...t[2]||(t[2]=[n("安裝Git",-1)])]),_:1}),t[4]||(t[4]=n("。",-1))]),t[30]||(t[30]=o(`<p>接着，創建一個目錄，Vim的插件將會被下載並且安裝在這個目錄上。默認情況下，這個目錄為~/.vim/bundle。</p><pre><code>$ mkdir -p ~/.vim/bundle 
</code></pre><p>現在，使用如下指令安裝Vundle。注意Vundle本身也是一個vim插件。因此我們同樣把vundle安裝到之前創建的目錄~/.vim/bundle下。</p><pre><code>$ git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim 
</code></pre><h3 id="配置vundle" tabindex="-1">配置Vundle　### <a class="header-anchor" href="#配置vundle" aria-label="Permalink to “配置Vundle　###”">​</a></h3><p>現在配置你的.vimrc文件如下：</p><pre><code>set nocompatible              &quot; 必需。 
filetype off                  &quot; 必須。
     
&quot; 在這裏設置你的運行時環境的路徑。
set rtp+=~/.vim/bundle/Vundle.vim
     
&quot; 初始化vundle
call vundle#begin()
     
&quot; 這一行應該永遠放在開頭。
Plugin &#39;gmarik/Vundle.vim&#39;
     
&quot; 這個示範來自https://github.com/gmarik/Vundle.vim README
Plugin &#39;tpope/vim-fugitive&#39;
     
&quot; 取自http://vim-scripts.org/vim/scripts.html的插件
Plugin &#39;L9&#39;
    
&quot;　該Git插件沒有放在GitHub上。
Plugin &#39;git://git.wincent.com/command-t.git&#39;
     
&quot;本地計算機上的Git倉庫路徑　（例如，當你在開發你自己的插件時）
Plugin &#39;file:///home/gmarik/path/to/plugin&#39;
     
&quot; vim腳本sparkup存放在這個名叫vim的倉庫下的一個子目錄中。
&quot; 將這個路徑正確地設置為runtimepath。
Plugin &#39;rstacruz/sparkup&#39;, {&#39;rtp&#39;: &#39;vim/&#39;}
     
&quot;　避免與L9發生名字上的衝突
Plugin &#39;user/L9&#39;, {&#39;name&#39;: &#39;newL9&#39;}
     
&quot;所有的插件都應該在這一行之前。
call vundle#end()            &quot; 必需。
</code></pre><p>容我簡單解釋一下上面的設置：默認情況下，Vundle將從github.com或者vim-scripts.org下載和安裝vim插件。你也可以改變這個默認行為。</p><p>要從github安裝插件:</p><pre><code>Plugin &#39;user/plugin&#39;
</code></pre>`,10)),i("p",null,[t[6]||(t[6]=n("要從 ",-1)),l(e,{href:"http://vim-scripts.org/vim/scripts.html"},{default:r(()=>[...t[5]||(t[5]=[n("http://vim-scripts.org/vim/scripts.html",-1)])]),_:1}),t[7]||(t[7]=n(" 處安裝:",-1))]),t[31]||(t[31]=o(`<pre><code>Plugin &#39;plugin_name&#39;
</code></pre><p>要從另外一個git倉庫中安裝:</p><pre><code>Plugin &#39;git://git.another_repo.com/plugin&#39;
</code></pre><p>從本地文件中安裝：</p><pre><code>Plugin &#39;file:///home/user/path/to/plugin&#39;
</code></pre><p>你同樣可以定製其它東西，例如你的插件的運行時路徑，當你自己在編寫一個插件時，或者你只是想從其它目錄——而不是~/.vim——中加載插件時，這樣做就非常有用。</p><pre><code>Plugin &#39;rstacruz/sparkup&#39;, {&#39;rtp&#39;: &#39;another_vim_path/&#39;}
</code></pre><p>如果你有同名的插件，你可以重命名你的插件，這樣它們就不會發生衝突了。</p><pre><code>Plugin &#39;user/plugin&#39;, {&#39;name&#39;: &#39;newPlugin&#39;}
</code></pre><h3 id="使用vum命令" tabindex="-1">使用Vum命令 <a class="header-anchor" href="#使用vum命令" aria-label="Permalink to “使用Vum命令”">​</a></h3><p>一旦你用vundle設置好你的插件，你就可以通過幾個vundle命令來安裝、升級、搜索插件，或者清除沒有用的插件。</p><h4 id="安裝一個新的插件" tabindex="-1">安裝一個新的插件 <a class="header-anchor" href="#安裝一個新的插件" aria-label="Permalink to “安裝一個新的插件”">​</a></h4><p><code>PluginInstall</code>命令將會安裝所有列在你的.vimrc文件中的插件。你也可以通過傳遞一個插件名給它，來安裝某個的特定插件。</p><pre><code>:PluginInstall
:PluginInstall &lt;插件名&gt;
</code></pre><p><img src="https://farm1.staticflickr.com/559/18998707843_438cd55463_c.jpg" alt=""></p><h4 id="清除沒有用的插件" tabindex="-1">清除沒有用的插件 <a class="header-anchor" href="#清除沒有用的插件" aria-label="Permalink to “清除沒有用的插件”">​</a></h4><p>如果你有任何沒有用到的插件，你可以通過<code>PluginClean</code>命令來刪除它。</p><pre><code>:PluginClean
</code></pre><p><img src="https://farm4.staticflickr.com/3814/19433047689_17d9822af6_c.jpg" alt=""></p><h4 id="查找一個插件" tabindex="-1">查找一個插件 <a class="header-anchor" href="#查找一個插件" aria-label="Permalink to “查找一個插件”">​</a></h4><p>如果你想從提供的插件清單中安裝一個插件，搜索功能會很有用。</p><pre><code>:PluginSearch &lt;文本&gt;
</code></pre><p><img src="https://farm1.staticflickr.com/541/19593459846_75b003443d_c.jpg" alt=""></p><p>在搜索的時候，你可以在交互式分割窗口中安裝、清除、重新搜索或者重新加載插件清單。安裝後的插件不會自動加載生效，要使其加載生效，可以將它們添加進你的.vimrc文件中。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>Vim是一個妙不可言的工具。它不單單是一個能夠使你的工作更加順暢高效的默認文本編輯器，同時它還能夠搖身一變，成為現存的幾乎任何一門編程語言的IDE。</p>`,26)),i("p",null,[t[10]||(t[10]=n("注意，有一些網站能幫你找到適合的vim插件。猛擊 ",-1)),l(e,{href:"http://www.vim-scripts.org/"},{default:r(()=>[...t[8]||(t[8]=[n("http://www.vim-scripts.org",-1)])]),_:1}),t[11]||(t[11]=n(", Github或者 ",-1)),l(e,{href:"http://www.vimawesome.com/"},{default:r(()=>[...t[9]||(t[9]=[n("http://www.vimawesome.com",-1)])]),_:1}),t[12]||(t[12]=n(" 獲取新的腳本或插件。同時記得使用為你的插件提供的幫助。",-1))]),t[32]||(t[32]=i("p",null,"和你最愛的編輯器一起嗨起來吧!",-1)),t[33]||(t[33]=i("hr",null,null,-1)),i("p",null,[t[14]||(t[14]=n("via: ",-1)),l(e,{href:"http://xmodulo.com/manage-vim-plugins.html"},{default:r(()=>[...t[13]||(t[13]=[n("http://xmodulo.com/manage-vim-plugins.html",-1)])]),_:1})]),i("p",null,[t[18]||(t[18]=n("作者：",-1)),l(e,{href:"http://xmodulo.com/author/valerio"},{default:r(()=>[...t[15]||(t[15]=[n("Christopher Valerio",-1)])]),_:1}),t[19]||(t[19]=n(" 譯者：",-1)),l(e,{href:"https://github.com/XLCYun"},{default:r(()=>[...t[16]||(t[16]=[n("XLCYun(袖裏藏雲)",-1)])]),_:1}),t[20]||(t[20]=n(" 校對：",-1)),l(e,{href:"https://github.com/wxy"},{default:r(()=>[...t[17]||(t[17]=[n("wxy",-1)])]),_:1})]),i("p",null,[t[23]||(t[23]=n("本文由 ",-1)),l(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[21]||(t[21]=[n("LCTT",-1)])]),_:1}),t[24]||(t[24]=n(" 原創翻譯，",-1)),l(e,{href:"https://linux.cn/"},{default:r(()=>[...t[22]||(t[22]=[n("Linux中國",-1)])]),_:1}),t[25]||(t[25]=n(" 榮譽推出",-1))])])}const T=p(d,[["render",s]]);export{x as __pageData,T as default};
