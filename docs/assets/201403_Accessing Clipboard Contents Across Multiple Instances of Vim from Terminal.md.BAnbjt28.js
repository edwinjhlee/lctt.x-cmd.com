import{_ as a,a0 as l,w as m,s as p,ao as s,I as o,x as t,a1 as n,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"跨越终端中多个vim实例访问剪切板内容 | LCTT x X-CMD","titleTemplate":false,"description":"跨越终端中多个vim实例访问剪切板内容 | LCTT (201403) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"跨越终端中多个vim实例访问剪切板内容 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"跨越终端中多个vim实例访问剪切板内容 | LCTT (201403) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201403/Accessing Clipboard Contents Across Multiple Instances of Vim from Terminal","title":"跨越终端中多个vim实例访问剪切板内容","tag":"201403","desc":""},"relativePath":"201403/Accessing Clipboard Contents Across Multiple Instances of Vim from Terminal.md","filePath":"[post].md"}'),c={name:"201403/Accessing Clipboard Contents Across Multiple Instances of Vim from Terminal.md"};function d(g,e,u,v,f,_){const i=l("Link");return m(),p("div",null,[e[16]||(e[16]=s(`<h1 id="跨越终端中多个vim实例访问剪切板内容" tabindex="-1">跨越终端中多个vim实例访问剪切板内容 <a class="header-anchor" href="#跨越终端中多个vim实例访问剪切板内容" aria-label="Permalink to “跨越终端中多个vim实例访问剪切板内容”">​</a></h1><p><strong>Vim (Vi IMproved)</strong>是一款在程序员之间非常受欢迎的文本编辑器。它在执行不同的快捷命令操作上有它自己的特长。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/02/vim-clipboard-content.jpeg" alt="从Vim访问剪切板"></p><p>比如，要拷贝高亮的文本，我们使用‘<strong>y</strong>’命令，并用‘x’来剪切。但是，<strong>vim</strong>(不是<strong>gVim</strong>)剪切板的内容默认情况下是不能被其他的vim实例访问的。</p><p>Vim版本信息中使用‘<strong>+</strong>’表示启用了系统剪切板。你可以运行‘<strong>vim ­­–version</strong>’，如果你看不到像“<strong>+xterm_clipboard</strong>”而是显示“­<strong>xterm_clipboard</strong>“，那么会使用内部剪切板，其将不能被其它的<strong>vim</strong>实例访问。</p><h3 id="安装gvim和parcellite" tabindex="-1">安装gvim和parcellite <a class="header-anchor" href="#安装gvim和parcellite" aria-label="Permalink to “安装gvim和parcellite”">​</a></h3><p>为了访问vim剪切板的内容，你需要安装<strong>gvim</strong>包。<strong>gVim</strong>是vim编辑器的GUI模式，它的剪切板选项默认启用。</p><pre><code># yum install -y gvim
</code></pre>`,8)),o("p",null,[e[1]||(e[1]=t("然后，使用",-1)),n(i,{href:"http://www.tecmint.com/install-and-enable-rpmforge-repository-in-rhel-centos-6-5-4/"},{default:r(()=>[...e[0]||(e[0]=[t("RPMForge 仓库",-1)])]),_:1}),e[2]||(e[2]=t("安装",-1)),e[3]||(e[3]=o("strong",null,"parcellite",-1)),e[4]||(e[4]=t(" 包。Parcellite是一款轻量级，小巧而免费的Linux剪切板管理工具。",-1))]),e[17]||(e[17]=s(`<pre><code># yum install -y parcellite
</code></pre><p>一旦安装后，运行下面的命令。这里的参数‘<strong>&amp;</strong>’是使parcellite以后台进程运行。</p><pre><code># parcellite &amp;
</code></pre><p>检查选项已经在gvim中启用。</p><pre><code># gvim --version
</code></pre><p>确保“<strong>+xterm_clipboard</strong>”选项显示在下面的输出中。</p><pre><code>VIM - Vi IMproved 7.2 (2008 Aug 9, compiled Apr  5 2012 10:12:08)
Included patches: 1-411
Modified by &lt;bugzilla@redhat.com&gt;
Compiled by &lt;bugzilla@redhat.com&gt;
Huge version with GTK2 GUI.  Features included (+) or not (-):
+arabic +autocmd +balloon_eval +browse ++builtin_terms +byte_offset +cindent 
+clientserver +clipboard +cmdline_compl +cmdline_hist +cmdline_info +comments 
+cryptv +cscope +cursorshape +dialog_con_gui +diff +digraphs +dnd -ebcdic 
+emacs_tags +eval +ex_extra +extra_search +farsi +file_in_path +find_in_path 
+float +folding -footer +fork() +gettext -hangul_input +iconv +insert_expand 
+jumplist +keymap +langmap +libcall +linebreak +lispindent +listcmds +localmap 
+menu +mksession +modify_fname +mouse +mouseshape +mouse_dec +mouse_gpm 
-mouse_jsbterm +mouse_netterm -mouse_sysmouse +mouse_xterm +multi_byte 
+multi_lang -mzscheme +netbeans_intg -osfiletype +path_extra +perl +postscript 
+printer +profile +python +quickfix +reltime +rightleft -ruby +scrollbind 
+signs +smartindent -sniff +startuptime +statusline -sun_workshop +syntax 
+tag_binary +tag_old_static -tag_any_white -tcl +terminfo +termresponse 
+textobjects +title +toolbar +user_commands +vertsplit +virtualedit +visual 
+visualextra +viminfo +vreplace +wildignore +wildmenu +windows +writebackup 
+X11 -xfontset +xim +xsmp_interact +xterm_clipboard -xterm_save
</code></pre><p>打开用户的.bashrc文件。</p><pre><code># vim ~/.bashrc
</code></pre><p>加入别名并保存文件(按下‘<strong>i</strong>’来插入行并按下<strong>ESC</strong>,接着运行<strong>:wq</strong>来保存并退出)。</p><pre><code># .bashrc

# User specific aliases and functions

alias rm=&#39;rm -i&#39;
alias cp=&#39;cp -i&#39;
alias mv=&#39;mv -i&#39;
alias vim=&#39;gvim -v&#39;
# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi
</code></pre><p>这个alias是内置的用于将一些命令绕到其他命令上。这样每次当vim命令运行时，相应的别名会启动默认带剪切板的gVim。</p><p>现在，用类似的方式编辑你的‘<strong>.vimrc</strong>’文件(以防你没有 <strong>.vimrc</strong>文件，生成这样一个文件然后再回来)。</p><pre><code># vim ~/.vimrc
</code></pre><p>追加下面这行并保存文件。</p><pre><code>autocmd VimLeave * call system(&quot;echo -n $&#39;&quot; . escape(getreg(), &quot;&#39;&quot;) . &quot;&#39; | xsel -ib&quot;)
</code></pre><p>现在在vim中打开任何文件并高亮部分文本(使用&#39;v&#39;命令)并按下&#39;y&#39;。尝试在vim外面的任何地方粘帖(关不关vim都行)，你就发现vim里面复制的内容被粘帖出来了。</p><h3 id="附-生成-vimrc-文件" tabindex="-1">附：生成 .vimrc 文件 <a class="header-anchor" href="#附-生成-vimrc-文件" aria-label="Permalink to “附：生成 .vimrc 文件”">​</a></h3><p>运行下面的命令来生成<strong>.vimrc</strong>文件（如果你已做了就跳过这部分）。</p><pre><code># cd   [返回到你的主目录]       
# vim .vimrc
</code></pre><p>在vim中在按下ESC键后运行下面的命令（在vim中，每个命令是在按下ESC键后也就是带你进入命令模式后运行的）。</p><pre><code>:r $VIMRUNTIME/vimrc_example.vim 
:w
</code></pre><hr>`,23)),o("p",null,[e[6]||(e[6]=t("via: ",-1)),n(i,{href:"http://www.tecmint.com/accessing-clipboard-contents-across-multiple-instances-of-vim-from-terminal/"},{default:r(()=>[...e[5]||(e[5]=[t("http://www.tecmint.com/accessing-clipboard-contents-across-multiple-instances-of-vim-from-terminal/",-1)])]),_:1})]),o("p",null,[e[9]||(e[9]=t("译者：",-1)),n(i,{href:"https://github.com/geekpi"},{default:r(()=>[...e[7]||(e[7]=[t("geekpi",-1)])]),_:1}),e[10]||(e[10]=t(" 校对：",-1)),n(i,{href:"https://github.com/wxy"},{default:r(()=>[...e[8]||(e[8]=[t("wxy",-1)])]),_:1})]),o("p",null,[e[13]||(e[13]=t("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[11]||(e[11]=[t("LCTT",-1)])]),_:1}),e[14]||(e[14]=t(" 原创翻译，",-1)),n(i,{href:"http://linux.cn/"},{default:r(()=>[...e[12]||(e[12]=[t("Linux中国",-1)])]),_:1}),e[15]||(e[15]=t(" 荣誉推出",-1))])])}const C=a(c,[["render",d]]);export{T as __pageData,C as default};
