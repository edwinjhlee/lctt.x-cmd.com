import{_ as p,a0 as t,w as o,s as r,ao as h,I as l,a1 as e,A as i,x as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何列出所有的 Bash Shell 内置命令 | LCTT x X-CMD","titleTemplate":false,"description":"如何列出所有的 Bash Shell 内置命令 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何列出所有的 Bash Shell 内置命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何列出所有的 Bash Shell 内置命令 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20130319 Linux - Unix Bash Shell List All Builtin Commands","title":"如何列出所有的 Bash Shell 内置命令","tag":"201802","desc":""},"relativePath":"201802/20130319 Linux - Unix Bash Shell List All Builtin Commands.md","filePath":"[post].md"}'),d={name:"201802/20130319 Linux - Unix Bash Shell List All Builtin Commands.md"};function c(g,s,u,m,b,f){const n=t("Link");return o(),r("div",null,[s[21]||(s[21]=h(`<h1 id="如何列出所有的-bash-shell-内置命令" tabindex="-1">如何列出所有的 Bash Shell 内置命令 <a class="header-anchor" href="#如何列出所有的-bash-shell-内置命令" aria-label="Permalink to “如何列出所有的 Bash Shell 内置命令”">​</a></h1><p>内置命令包含在 bash shell 本身里面。我该如何在 Linux / Apple OS X / *BSD / Unix 类操作系统列出所有的内置 bash 命令，而不用去读大篇的 bash 操作说明页？</p><p>shell 内置命令就是一个命令或一个函数，从 shell 中调用，它直接在 shell 中执行。 bash shell 直接执行该命令而无需调用其他程序。你可以使用 <code>help</code> 命令查看 Bash 内置命令的信息。以下是几种不同类型的内置命令。</p><h3 id="内置命令的类型" tabindex="-1">内置命令的类型 <a class="header-anchor" href="#内置命令的类型" aria-label="Permalink to “内置命令的类型”">​</a></h3><ol><li>Bourne Shell 内置命令：内置命令继承自 Bourne Shell。</li><li>Bash 内置命令：特定于 Bash 的内置命令表。</li><li>修改 Shell 行为：修改 shell 属性和可选行为的内置命令。</li><li>特别的内置命令：由 POSIX 特别分类的内置命令。</li></ol><h3 id="如何查看所有-bash-内置命令" tabindex="-1">如何查看所有 bash 内置命令 <a class="header-anchor" href="#如何查看所有-bash-内置命令" aria-label="Permalink to “如何查看所有 bash 内置命令”">​</a></h3><p>有以下的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ help</span></span>
<span class="line"><span>$ help | less</span></span>
<span class="line"><span>$ help | grep read</span></span></code></pre></div><p>样例输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>GNU bash, version 4.1.5(1)-release (x86_64-pc-linux-gnu)</span></span>
<span class="line"><span>These shell commands are defined internally.  Type \`help&#39; to see this list.</span></span>
<span class="line"><span>Type \`help name&#39; to find out more about the function \`name&#39;.</span></span>
<span class="line"><span>Use \`info bash&#39; to find out more about the shell in general.</span></span>
<span class="line"><span>Use \`man -k&#39; or \`info&#39; to find out more about commands not in this list.</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>A star (*) next to a name means that the command is disabled.</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> job_spec [&amp;]                            history [-c] [-d offset] [n] or hist&gt;</span></span>
<span class="line"><span> (( expression ))                        if COMMANDS; then COMMANDS; [ elif C&gt;</span></span>
<span class="line"><span> . filename [arguments]                  jobs [-lnprs] [jobspec ...] or jobs &gt;</span></span>
<span class="line"><span> :                                       kill [-s sigspec | -n signum | -sigs&gt;</span></span>
<span class="line"><span> [ arg... ]                              let arg [arg ...]</span></span>
<span class="line"><span> [[ expression ]]                        local [option] name[=value] ...</span></span>
<span class="line"><span> alias [-p] [name[=value] ... ]          logout [n]</span></span>
<span class="line"><span> bg [job_spec ...]                       mapfile [-n count] [-O origin] [-s c&gt;</span></span>
<span class="line"><span> bind [-lpvsPVS] [-m keymap] [-f filen&gt;  popd [-n] [+N | -N]</span></span>
<span class="line"><span> break [n]                               printf [-v var] format [arguments]</span></span>
<span class="line"><span> builtin [shell-builtin [arg ...]]       pushd [-n] [+N | -N | dir]</span></span>
<span class="line"><span> caller [expr]                           pwd [-LP]</span></span>
<span class="line"><span> case WORD in [PATTERN [| PATTERN]...)&gt;  read [-ers] [-a array] [-d delim] [-&gt;</span></span>
<span class="line"><span> cd [-L|-P] [dir]                        readarray [-n count] [-O origin] [-s&gt;</span></span>
<span class="line"><span> command [-pVv] command [arg ...]        readonly [-af] [name[=value] ...] or&gt;</span></span>
<span class="line"><span> compgen [-abcdefgjksuv] [-o option]  &gt;  return [n]</span></span>
<span class="line"><span> complete [-abcdefgjksuv] [-pr] [-DE] &gt;  select NAME [in WORDS ... ;] do COMM&gt;</span></span>
<span class="line"><span> compopt [-o|+o option] [-DE] [name ..&gt;  set [--abefhkmnptuvxBCHP] [-o option&gt;</span></span>
<span class="line"><span> continue [n]                            shift [n]</span></span>
<span class="line"><span> coproc [NAME] command [redirections]    shopt [-pqsu] [-o] [optname ...]</span></span>
<span class="line"><span> declare [-aAfFilrtux] [-p] [name[=val&gt;  source filename [arguments]</span></span>
<span class="line"><span> dirs [-clpv] [+N] [-N]                  suspend [-f]</span></span>
<span class="line"><span> disown [-h] [-ar] [jobspec ...]         test [expr]</span></span>
<span class="line"><span> echo [-neE] [arg ...]                   time [-p] pipeline</span></span>
<span class="line"><span> enable [-a] [-dnps] [-f filename] [na&gt;  times</span></span>
<span class="line"><span> eval [arg ...]                          trap [-lp] [[arg] signal_spec ...]</span></span>
<span class="line"><span> exec [-cl] [-a name] [command [argume&gt;  true</span></span>
<span class="line"><span> exit [n]                                type [-afptP] name [name ...]</span></span>
<span class="line"><span> export [-fn] [name[=value] ...] or ex&gt;  typeset [-aAfFilrtux] [-p] name[=val&gt;</span></span>
<span class="line"><span> false                                   ulimit [-SHacdefilmnpqrstuvx] [limit&gt;</span></span>
<span class="line"><span> fc [-e ename] [-lnr] [first] [last] o&gt;  umask [-p] [-S] [mode]</span></span>
<span class="line"><span> fg [job_spec]                           unalias [-a] name [name ...]</span></span>
<span class="line"><span> for NAME [in WORDS ... ] ; do COMMAND&gt;  unset [-f] [-v] [name ...]</span></span>
<span class="line"><span> for (( exp1; exp2; exp3 )); do COMMAN&gt;  until COMMANDS; do COMMANDS; done</span></span>
<span class="line"><span> function name { COMMANDS ; } or name &gt;  variables - Names and meanings of so&gt;</span></span>
<span class="line"><span> getopts optstring name [arg]            wait [id]</span></span>
<span class="line"><span> hash [-lr] [-p pathname] [-dt] [name &gt;  while COMMANDS; do COMMANDS; done</span></span>
<span class="line"><span> help [-dms] [pattern ...]               { COMMANDS ; }</span></span></code></pre></div><p>另外一种选择是使用下列命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>compgen -b</span></span>
<span class="line"><span>compgen -b | more</span></span></code></pre></div><h3 id="查看-bash-的内置命令信息" tabindex="-1">查看 Bash 的内置命令信息 <a class="header-anchor" href="#查看-bash-的内置命令信息" aria-label="Permalink to “查看 Bash 的内置命令信息”">​</a></h3><p>运行以下得到详细信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>help command</span></span>
<span class="line"><span>help read</span></span></code></pre></div><p>要仅得到所有带简短描述的内置命令的列表，执行如下:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ help -d</span></span></code></pre></div><h3 id="查找内置命令的语法和其他选项" tabindex="-1">查找内置命令的语法和其他选项 <a class="header-anchor" href="#查找内置命令的语法和其他选项" aria-label="Permalink to “查找内置命令的语法和其他选项”">​</a></h3><p>使用下列语法去找出更多的相关内置命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>help name </span></span>
<span class="line"><span>help cd </span></span>
<span class="line"><span>help fg </span></span>
<span class="line"><span>help for </span></span>
<span class="line"><span>help read </span></span>
<span class="line"><span>help :</span></span></code></pre></div><p>样例输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>:: :</span></span>
<span class="line"><span> Null command.</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> No effect; the command does nothing.</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> Exit Status:</span></span>
<span class="line"><span> Always succeeds</span></span></code></pre></div><h3 id="找出一个命令是内部的-内置-还是外部的" tabindex="-1">找出一个命令是内部的（内置）还是外部的 <a class="header-anchor" href="#找出一个命令是内部的-内置-还是外部的" aria-label="Permalink to “找出一个命令是内部的（内置）还是外部的”">​</a></h3><p>使用 <code>type</code> 命令或 <code>command</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type -a command-name-here </span></span>
<span class="line"><span>type -a cd </span></span>
<span class="line"><span>type -a uname </span></span>
<span class="line"><span>type -a : </span></span>
<span class="line"><span>type -a ls</span></span></code></pre></div><p>或者：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type -a cd uname : ls uname</span></span></code></pre></div><p>样例输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cd is a shell builtin</span></span>
<span class="line"><span>uname is /bin/uname</span></span>
<span class="line"><span>: is a shell builtin</span></span>
<span class="line"><span>ls is aliased to \`ls --color=auto&#39;</span></span>
<span class="line"><span>ls is /bin/ls</span></span>
<span class="line"><span>l is a function</span></span>
<span class="line"><span>l ()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> ls --color=auto</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>或者：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>command -V ls </span></span>
<span class="line"><span>command -V cd </span></span>
<span class="line"><span>command -V foo</span></span></code></pre></div>`,31)),l("p",null,[e(n,{href:"https://www.cyberciti.biz/media/new/faq/2013/03/View-list-bash-built-ins-command-info-on-Linux-or-Unix.jpg"},{default:i(()=>[...s[0]||(s[0]=[l("img",{src:"https://www.cyberciti.biz/media/new/faq/2013/03/View-list-bash-built-ins-command-info-on-Linux-or-Unix.jpg",alt:"View list bash built-ins command info on Linux or Unix"},null,-1)])]),_:1})]),s[22]||(s[22]=l("h3",{id:"关于作者",tabindex:"-1"},[a("关于作者 "),l("a",{class:"header-anchor",href:"#关于作者","aria-label":"Permalink to “关于作者”"},"​")],-1)),l("p",null,[s[4]||(s[4]=a("作者是 nixCraft 网站的发起人和经验丰富的系统管理员，以及 Linux 操作系统/Unix shell 脚本编程培训师。他与全球客户以及包括 IT、教育、国防和空间研究以及非营利部门在内的各个行业合作。可以在 ",-1)),e(n,{href:"https://twitter.com/nixcraft"},{default:i(()=>[...s[1]||(s[1]=[a("Twitter",-1)])]),_:1}),s[5]||(s[5]=a("、",-1)),e(n,{href:"https://facebook.com/nixcraft"},{default:i(()=>[...s[2]||(s[2]=[a("Facebook",-1)])]),_:1}),s[6]||(s[6]=a("、 ",-1)),e(n,{href:"https://plus.google.com/+CybercitiBiz"},{default:i(()=>[...s[3]||(s[3]=[a("Google+",-1)])]),_:1}),s[7]||(s[7]=a(" 上关注他。",-1))]),s[23]||(s[23]=l("hr",null,null,-1)),l("p",null,[s[9]||(s[9]=a("via: ",-1)),e(n,{href:"https://www.cyberciti.biz/faq/linux-unix-bash-shell-list-all-builtin-commands/"},{default:i(()=>[...s[8]||(s[8]=[a("https://www.cyberciti.biz/faq/linux-unix-bash-shell-list-all-builtin-commands/",-1)])]),_:1})]),l("p",null,[s[13]||(s[13]=a("作者：",-1)),e(n,{href:"https://www.cyberciti.biz"},{default:i(()=>[...s[10]||(s[10]=[a("Vivek Gite",-1)])]),_:1}),s[14]||(s[14]=a(" 译者：",-1)),e(n,{href:"https://github.com/KarenMrzhang"},{default:i(()=>[...s[11]||(s[11]=[a("KarenMrzhang",-1)])]),_:1}),s[15]||(s[15]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[12]||(s[12]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[18]||(s[18]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[16]||(s[16]=[a("LCTT",-1)])]),_:1}),s[19]||(s[19]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:i(()=>[...s[17]||(s[17]=[a("Linux中国",-1)])]),_:1}),s[20]||(s[20]=a(" 荣誉推出",-1))])])}const C=p(d,[["render",c]]);export{y as __pageData,C as default};
