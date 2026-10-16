import{_ as i,a0 as t,w as o,s as c,ao as r,I as l,x as n,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"获取有关 Linux shell 内置命令的帮助 | LCTT x X-CMD","titleTemplate":false,"description":"获取有关 Linux shell 内置命令的帮助 | LCTT (201907) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"获取有关 Linux shell 内置命令的帮助 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"获取有关 Linux shell 内置命令的帮助 | LCTT (201907) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201907/20190723 Getting help for Linux shell built-ins","title":"获取有关 Linux shell 内置命令的帮助","tag":"201907","desc":""},"relativePath":"201907/20190723 Getting help for Linux shell built-ins.md","filePath":"[post].md"}'),d={name:"201907/20190723 Getting help for Linux shell built-ins.md"};function h(u,s,g,m,b,f){const a=t("Link");return o(),c("div",null,[s[15]||(s[15]=r(`<h1 id="获取有关-linux-shell-内置命令的帮助" tabindex="-1">获取有关 Linux shell 内置命令的帮助 <a class="header-anchor" href="#获取有关-linux-shell-内置命令的帮助" aria-label="Permalink to “获取有关 Linux shell 内置命令的帮助”">​</a></h1><blockquote><p>Linux 内置命令属于用户 shell 的一部分，本文将告诉你如何识别它们并获取使用它们的帮助。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/201907/28/204915bj1wmhxeargx14lt.jpg" alt=""></p><p>Linux 内置命令是内置于 shell 中的命令，很像内置于墙中的书架。与标准 Linux 命令存储在 <code>/usr/bin</code> 中的方式不同，你不会找到它们的独立文件，你可能使用过相当多的内置命令，但你不会感觉到它们与 <code>ls</code> 和 <code>pwd</code> 等命令有何不同。</p><p>内置命令与其他 Linux 命令一样使用，它们可能要比不属于 shell 的类似命令运行得快一些。Bash 内置命令包括 <code>alias</code>、<code>export</code> 和 <code>bg</code> 等。</p><p>正如你担心的那样，因为内置命令是特定于 shell 的，所以它们不会提供手册页。使用 <code>man</code> 来查看 <code>bg</code>，你会看到这样的东西：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ man bg</span></span>
<span class="line"><span>No manual entry for bg</span></span></code></pre></div><p>判断内置命令的另一个提示是当你使用 <code>which</code> 命令来识别命令的来源时，Bash 不会响应，表示没有与内置命令关联的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ which bg</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>另一方面，如果你的 shell 是 <code>/bin/zsh</code>，你可能会得到一个更有启发性的响应：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% which bg</span></span>
<span class="line"><span>bg: shell built-in command</span></span></code></pre></div><p>bash 提供了额外的帮助信息，但它是通过使用 <code>help</code> 命令实现的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ help bg</span></span>
<span class="line"><span>bg: bg [job_spec ...]</span></span>
<span class="line"><span>    Move jobs to the background.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Place the jobs identified by each JOB_SPEC in the background, as if they</span></span>
<span class="line"><span>    had been started with \`&amp;&#39;.  If JOB_SPEC is not present, the shell&#39;s notion</span></span>
<span class="line"><span>    of the current job is used.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Exit Status:</span></span>
<span class="line"><span>    Returns success unless job control is not enabled or an error occurs.</span></span></code></pre></div><p>如果你想要查看 bash 提供的所有内置命令的列表，使用 <code>compgen -b</code> 命令。通过管道将命令输出到列中，以获得较好格式的清单。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ compgen -b | column</span></span>
<span class="line"><span>.              compgen        exit           let            return         typeset</span></span>
<span class="line"><span>:              complete       export         local          set            ulimit</span></span>
<span class="line"><span>[              compopt        false          logout         shift          umask</span></span>
<span class="line"><span>alias          continue       fc             mapfile        shopt          unalias</span></span>
<span class="line"><span>bg             declare        fg             popd           source         unset</span></span>
<span class="line"><span>bind           dirs           getopts        printf         suspend        wait</span></span>
<span class="line"><span>break          disown         hash           pushd          test</span></span>
<span class="line"><span>builtin        echo           help           pwd            times</span></span>
<span class="line"><span>caller         enable         history        read           trap</span></span>
<span class="line"><span>cd             eval           jobs           readarray      true</span></span>
<span class="line"><span>command        exec           kill           readonly       type</span></span></code></pre></div><p>如果你使用 <code>help</code> 命令，你将看到一个内置命令列表以及简短描述。但是，这个列表被截断了（以 <code>help</code> 命令结尾）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ help</span></span>
<span class="line"><span>GNU bash, version 5.0.3(1)-release (x86_64-pc-linux-gnu)</span></span>
<span class="line"><span>These shell commands are defined internally.  Type \`help&#39; to see this list.</span></span>
<span class="line"><span>Type \`help name&#39; to find out more about the function \`name&#39;.</span></span>
<span class="line"><span>Use \`info bash&#39; to find out more about the shell in general.</span></span>
<span class="line"><span>Use \`man -k&#39; or \`info&#39; to find out more about commands not in this list.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A star (*) next to a name means that the command is disabled.</span></span>
<span class="line"><span></span></span>
<span class="line"><span> job_spec [&amp;]                             history [-c] [-d offset] [n] or histo&gt;</span></span>
<span class="line"><span> (( expression ))                         if COMMANDS; then COMMANDS; [ elif CO&gt;</span></span>
<span class="line"><span> . filename [arguments]                   jobs [-lnprs] [jobspec ...] or jobs -&gt;</span></span>
<span class="line"><span> :                                        kill [-s sigspec | -n signum | -sigsp&gt;</span></span>
<span class="line"><span> [ arg... ]                               let arg [arg ...]</span></span>
<span class="line"><span> [[ expression ]]                         local [option] name[=value] ...</span></span>
<span class="line"><span> alias [-p] [name[=value] ... ]           logout [n]</span></span>
<span class="line"><span> bg [job_spec ...]                        mapfile [-d delim] [-n count] [-O ori&gt;</span></span>
<span class="line"><span> bind [-lpsvPSVX] [-m keymap] [-f filen&gt;  popd [-n] [+N | -N]</span></span>
<span class="line"><span> break [n]                                printf [-v var] format [arguments]</span></span>
<span class="line"><span> builtin [shell-builtin [arg ...]]        pushd [-n] [+N | -N | dir]</span></span>
<span class="line"><span> caller [expr]                            pwd [-LP]</span></span>
<span class="line"><span> case WORD in [PATTERN [| PATTERN]...) &gt;  read [-ers] [-a array] [-d delim] [-i&gt;</span></span>
<span class="line"><span> cd [-L|[-P [-e]] [-@]] [dir]             readarray [-d delim] [-n count] [-O o&gt;</span></span>
<span class="line"><span> command [-pVv] command [arg ...]         readonly [-aAf] [name[=value] ...] or&gt;</span></span>
<span class="line"><span> compgen [-abcdefgjksuv] [-o option] [-&gt;  return [n]</span></span>
<span class="line"><span> complete [-abcdefgjksuv] [-pr] [-DEI] &gt;  select NAME [in WORDS ... ;] do COMMA&gt;</span></span>
<span class="line"><span> compopt [-o|+o option] [-DEI] [name ..&gt;  set [-abefhkmnptuvxBCHP] [-o option-n&gt;</span></span>
<span class="line"><span> continue [n]                             shift [n]</span></span>
<span class="line"><span> coproc [NAME] command [redirections]     shopt [-pqsu] [-o] [optname ...]</span></span>
<span class="line"><span> declare [-aAfFgilnrtux] [-p] [name[=va&gt;  source filename [arguments]</span></span>
<span class="line"><span> dirs [-clpv] [+N] [-N]                   suspend [-f]</span></span>
<span class="line"><span> disown [-h] [-ar] [jobspec ... | pid . &amp;lt;p&amp;gt&#39;&amp;gt;  test [expr]</span></span>
<span class="line"><span> echo [-neE] [arg ...]                    time [-p] pipeline</span></span>
<span class="line"><span> enable [-a] [-dnps] [-f filename] [nam&gt;  times</span></span>
<span class="line"><span> eval [arg ...]                           trap [-lp] [[arg] signal_spec ...]</span></span>
<span class="line"><span> exec [-cl] [-a name] [command [argumen&gt;  true</span></span>
<span class="line"><span> exit [n]                                 type [-afptP] name [name ...]</span></span>
<span class="line"><span> export [-fn] [name[=value] ...] or exp&gt;  typeset [-aAfFgilnrtux] [-p] name[=va&gt;</span></span>
<span class="line"><span> false                                    ulimit [-SHabcdefiklmnpqrstuvxPT] [li&gt;</span></span>
<span class="line"><span> fc [-e ename] [-lnr] [first] [last] or&gt;  umask [-p] [-S] [mode]</span></span>
<span class="line"><span> fg [job_spec]                            unalias [-a] name [name ...]</span></span>
<span class="line"><span> for NAME [in WORDS ... ] ; do COMMANDS&gt;  unset [-f] [-v] [-n] [name ...]</span></span>
<span class="line"><span> for (( exp1; exp2; exp3 )); do COMMAND&gt;  until COMMANDS; do COMMANDS; done</span></span>
<span class="line"><span> function name { COMMANDS ; } or name (&gt;  variables - Names and meanings of som&gt;</span></span>
<span class="line"><span> getopts optstring name [arg]             wait [-fn] [id ...]</span></span>
<span class="line"><span> hash [-lr] [-p pathname] [-dt] [name .&gt;  while COMMANDS; do COMMANDS; done</span></span>
<span class="line"><span> help [-dms] [pattern ...]                { COMMANDS ; }</span></span></code></pre></div><p>从上面的清单中可以看出，<code>help</code> 命令本身就是内置的。</p><p>你可以通过向 <code>help</code> 命令提供你感兴趣的内置命令名称来获取关于它们的更多信息，例如 <code>help dirs</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ help dirs</span></span>
<span class="line"><span>dirs: dirs [-clpv] [+N] [-N]</span></span>
<span class="line"><span>    Display directory stack.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Display the list of currently remembered directories.  Directories</span></span>
<span class="line"><span>    find their way onto the list with the \`pushd&#39; command; you can get</span></span>
<span class="line"><span>    back up through the list with the \`popd&#39; command.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Options:</span></span>
<span class="line"><span>      -c        clear the directory stack by deleting all of the elements</span></span>
<span class="line"><span>      -l        do not print tilde-prefixed versions of directories relative</span></span>
<span class="line"><span>                to your home directory</span></span>
<span class="line"><span>      -p        print the directory stack with one entry per line</span></span>
<span class="line"><span>      -v        print the directory stack with one entry per line prefixed</span></span>
<span class="line"><span>                with its position in the stack</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Arguments:</span></span>
<span class="line"><span>      +N        Displays the Nth entry counting from the left of the list</span></span>
<span class="line"><span>                shown by dirs when invoked without options, starting with</span></span>
<span class="line"><span>                zero.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      -N        Displays the Nth entry counting from the right of the list</span></span>
<span class="line"><span>                shown by dirs when invoked without options, starting with</span></span>
<span class="line"><span>                zero.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Exit Status:</span></span>
<span class="line"><span>    Returns success unless an invalid option is supplied or an error occurs.</span></span></code></pre></div><p>内置命令提供了每个 shell 的大部分功能。你使用的任何 shell 都有一些内置命令，但是如何获取这些内置命令的信息可能因 shell 而异。例如，对于 <code>zsh</code>，你可以使用 <code>man zshbuiltins</code> 命令获得其内置命令的描述。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ man zshbuiltins</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ZSHBUILTINS(1)               General Commands Manual              ZSHBUILTINS(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NAME</span></span>
<span class="line"><span>       zshbuiltins - zsh built-in commands</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SHELL BUILTIN COMMANDS</span></span>
<span class="line"><span>       Some  shell  builtin commands take options as described in individual en‐</span></span>
<span class="line"><span>       tries; these are often referred to in the list below as \`flags&#39; to  avoid</span></span>
<span class="line"><span>       confusion with shell options, which may also have an effect on the behav‐</span></span>
<span class="line"><span>       iour of builtin commands.  In this introductory section, \`option&#39;  always</span></span>
<span class="line"><span>       has the meaning of an option to a command that should be familiar to most</span></span>
<span class="line"><span>       command line users.</span></span>
<span class="line"><span>…</span></span></code></pre></div><p>在这个冗长的手册页中，你将找到一个内置命令列表，其中包含有用的描述，如下摘录中所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bg [ job ... ]</span></span>
<span class="line"><span>job ... &amp;</span></span>
<span class="line"><span>       Put  each  specified  job in the background, or the current job if</span></span>
<span class="line"><span>       none is specified.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bindkey</span></span>
<span class="line"><span>       See the section \`Zle Builtins&#39; in zshzle(1).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>break [ n ]</span></span>
<span class="line"><span>       Exit from an enclosing for, while, until, select or  repeat  loop.</span></span>
<span class="line"><span>       If  an  arithmetic  expression n is specified, then break n levels</span></span>
<span class="line"><span>       instead of just one.</span></span></code></pre></div><h3 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to “最后”">​</a></h3><p>Linux 内置命令对于每个 shell 都很重要，它的操作类似特定于 shell 的命令一样。如果你经常使用不同的 shell，并注意到你经常使用的某些命令似乎不存在或者不能按预期工作，那么它可能是你使用的其他 shell 之一中的内置命令。</p><hr>`,27)),l("p",null,[s[1]||(s[1]=n("via: ",-1)),e(a,{href:"https://www.networkworld.com/article/3410350/getting-help-for-linux-shell-built-ins.html"},{default:p(()=>[...s[0]||(s[0]=[n("https://www.networkworld.com/article/3410350/getting-help-for-linux-shell-built-ins.html",-1)])]),_:1})]),l("p",null,[s[6]||(s[6]=n("作者：",-1)),e(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:p(()=>[...s[2]||(s[2]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),e(a,{href:"https://github.com/MjSeven"},{default:p(()=>[...s[4]||(s[4]=[n("MjSeven",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[12]||(s[12]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const v=i(d,[["render",h]]);export{y as __pageData,v as default};
