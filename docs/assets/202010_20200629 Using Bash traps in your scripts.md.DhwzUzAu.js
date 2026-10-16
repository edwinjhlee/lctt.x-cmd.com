import{_ as e,a0 as i,w as o,s as r,I as a,x as n,a1 as t,A as l,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const g=JSON.parse('{"title":"在脚本中使用 Bash 信号捕获 | LCTT x X-CMD","titleTemplate":false,"description":"在脚本中使用 Bash 信号捕获 | LCTT (202010) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在脚本中使用 Bash 信号捕获 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在脚本中使用 Bash 信号捕获 | LCTT (202010) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202010/20200629 Using Bash traps in your scripts","title":"在脚本中使用 Bash 信号捕获","tag":"202010","desc":""},"relativePath":"202010/20200629 Using Bash traps in your scripts.md","filePath":"[post].md"}'),u={name:"202010/20200629 Using Bash traps in your scripts.md"};function I(T,s,S,c,G,h){const p=i("Link");return o(),r("div",null,[s[25]||(s[25]=a("h1",{id:"在脚本中使用-bash-信号捕获",tabindex:"-1"},[n("在脚本中使用 Bash 信号捕获 "),a("a",{class:"header-anchor",href:"#在脚本中使用-bash-信号捕获","aria-label":"Permalink to “在脚本中使用 Bash 信号捕获”"},"​")],-1)),s[26]||(s[26]=a("blockquote",null,[a("p",null,[n("无论你的脚本是否成功运行，"),a("ruby",null,[n("信号捕获"),a("rt",null,"trap")]),n("都能让它平稳结束。")])],-1)),s[27]||(s[27]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202010/13/182135f2nktcrnryncisg8.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("Shell 脚本的启动并不难被检测到，但 Shell 脚本的终止检测却并不容易，因为我们无法确定脚本会按照预期地正常结束，还是由于意外的错误导致失败。当脚本执行失败时，将正在处理的内容记录下来是非常有用的做法，但有时候这样做起来并不方便。而 ",-1)),t(p,{href:"https://opensource.com/resources/what-bash"},{default:l(()=>[...s[0]||(s[0]=[n("Bash",-1)])]),_:1}),s[2]||(s[2]=n(" 中 ",-1)),s[3]||(s[3]=a("code",null,"trap",-1)),s[4]||(s[4]=n(" 命令的存在正是为了解决这个问题，它可以捕获到脚本的终止信号，并以某种预设的方式作出应对。",-1))]),s[28]||(s[28]=d(`<h3 id="响应失败" tabindex="-1">响应失败 <a class="header-anchor" href="#响应失败" aria-label="Permalink to “响应失败”">​</a></h3><p>如果出现了一个错误，可能导致发生一连串错误。下面示例脚本中，首先在 <code>/tmp</code> 中创建一个临时目录，这样可以在临时目录中执行解包、文件处理等操作，然后再以另一种压缩格式进行打包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span>CWD=\`pwd\`</span></span>
<span class="line"><span>TMP=\${TMP:-/tmp/tmpdir}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## create tmp dir</span></span>
<span class="line"><span>mkdir &quot;\${TMP}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## extract files to tmp</span></span>
<span class="line"><span>tar xf &quot;\${1}&quot; --directory &quot;\${TMP}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## move to tmpdir and run commands</span></span>
<span class="line"><span>pushd &quot;\${TMP}&quot;</span></span>
<span class="line"><span>for IMG in *.jpg; do</span></span>
<span class="line"><span>  mogrify -verbose -flip -flop &quot;\${IMG}&quot;</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>tar --create --file &quot;\${1%.*}&quot;.tar *.jpg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## move back to origin</span></span>
<span class="line"><span>popd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## bundle with bzip2</span></span>
<span class="line"><span>bzip2 --compress &quot;\${TMP}&quot;/&quot;\${1%.*}&quot;.tar \\</span></span>
<span class="line"><span>      --stdout &gt; &quot;\${1%.*}&quot;.tbz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## clean up</span></span>
<span class="line"><span>/usr/bin/rm -r /tmp/tmpdir</span></span></code></pre></div><p>一般情况下，这个脚本都可以按照预期执行。但如果归档文件中的文件是 PNG 文件而不是期望的 JPEG 文件，脚本就会在中途失败，这时候另一个问题就出现了：最后一步删除临时目录的操作没有被正常执行。如果你手动把临时目录删掉，倒是不会造成什么影响，但是如果没有手动把临时目录删掉，在下一次执行这个脚本的时候，它必须处理一个现有的临时目录，里面充满了不可预知的剩余文件。</p><p>其中一个解决方案是在脚本开头增加一个预防性删除逻辑用来处理这种情况。但这种做法显得有些暴力，而我们更应该从结构上解决这个问题。使用 <code>trap</code> 是一个优雅的方法。</p><h3 id="使用-trap-捕获信号" tabindex="-1">使用 trap 捕获信号 <a class="header-anchor" href="#使用-trap-捕获信号" aria-label="Permalink to “使用 trap 捕获信号”">​</a></h3><p>我们可以通过 <code>trap</code> 捕捉程序运行时的信号。如果你使用过 <code>kill</code> 或者 <code>killall</code> 命令，那你就已经使用过名为 <code>SIGTERM</code> 的信号了。除此以外，还可以执行 <code>trap -l</code> 或 <code>trap --list</code> 命令列出其它更多的信号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ trap --list</span></span>
<span class="line"><span> 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP</span></span>
<span class="line"><span> 6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1</span></span>
<span class="line"><span>11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM</span></span>
<span class="line"><span>16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP</span></span>
<span class="line"><span>21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ</span></span>
<span class="line"><span>26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR</span></span>
<span class="line"><span>31) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3</span></span>
<span class="line"><span>38) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8</span></span>
<span class="line"><span>43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13</span></span>
<span class="line"><span>48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12</span></span>
<span class="line"><span>53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7</span></span>
<span class="line"><span>58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2</span></span>
<span class="line"><span>63) SIGRTMAX-1  64) SIGRTMAX</span></span></code></pre></div><p>可以被 <code>trap</code> 识别的信号除了以上这些，还包括：</p><ul><li><code>EXIT</code>：进程退出时发出的信号</li><li><code>ERR</code>：进程以非 0 状态码退出时发出的信号</li><li><code>DEBUG</code>：表示调试模式的布尔值</li></ul><p>如果要在 Bash 中实现信号捕获，只需要在 <code>trap</code> 后加上需要执行的命令，再加上需要捕获的信号列表就可以了。</p><p>例如，下面的这行语句可以捕获到在进程运行时用户按下 <code>Ctrl + C</code> 组合键发出的 <code>SIGINT</code> 信号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>trap &quot;{ echo &#39;Terminated with Ctrl+C&#39;; }&quot; SIGINT</span></span></code></pre></div><p>因此，上文中脚本的缺陷可以通过使用 <code>trap</code> 捕获 <code>SIGINT</code>、<code>SIGTERM</code>、进程错误退出、进程正常退出等信号，并正确处理临时目录的方式来修复：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span>CWD=\`pwd\`</span></span>
<span class="line"><span>TMP=\${TMP:-/tmp/tmpdir}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>trap \\</span></span>
<span class="line"><span> &quot;{ /usr/bin/rm -r &quot;\${TMP}&quot; ; exit 255; }&quot; \\</span></span>
<span class="line"><span> SIGINT SIGTERM ERR EXIT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## create tmp dir</span></span>
<span class="line"><span>mkdir &quot;\${TMP}&quot;</span></span>
<span class="line"><span>tar xf &quot;\${1}&quot; --directory &quot;\${TMP}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## move to tmp and run commands</span></span>
<span class="line"><span>pushd &quot;\${TMP}&quot;</span></span>
<span class="line"><span>for IMG in *.jpg; do</span></span>
<span class="line"><span>  mogrify -verbose -flip -flop &quot;\${IMG}&quot;</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>tar --create --file &quot;\${1%.*}&quot;.tar *.jpg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## move back to origin</span></span>
<span class="line"><span>popd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## zip tar</span></span>
<span class="line"><span>bzip2 --compress $TMP/&quot;\${1%.*}&quot;.tar \\</span></span>
<span class="line"><span>      --stdout &gt; &quot;\${1%.*}&quot;.tbz</span></span></code></pre></div>`,15)),a("p",null,[s[6]||(s[6]=n("对于更复杂的功能，还可以用 ",-1)),t(p,{href:"https://opensource.com/article/20/6/how-write-functions-bash"},{default:l(()=>[...s[5]||(s[5]=[n("Bash 函数",-1)])]),_:1}),s[7]||(s[7]=n("来简化 ",-1)),s[8]||(s[8]=a("code",null,"trap",-1)),s[9]||(s[9]=n(" 语句。",-1))]),s[29]||(s[29]=a("h3",{id:"bash-中的信号捕获",tabindex:"-1"},[n("Bash 中的信号捕获 "),a("a",{class:"header-anchor",href:"#bash-中的信号捕获","aria-label":"Permalink to “Bash 中的信号捕获”"},"​")],-1)),s[30]||(s[30]=a("p",null,"信号捕获可以让脚本在无论是否成功执行所有任务的情况下都能够正确完成清理工作，能让你的脚本更加可靠，这是一个很好的习惯。尽管尝试把信号捕获加入到你的脚本里看看能够起到什么作用吧。",-1)),s[31]||(s[31]=a("hr",null,null,-1)),a("p",null,[s[11]||(s[11]=n("via: ",-1)),t(p,{href:"https://opensource.com/article/20/6/bash-trap"},{default:l(()=>[...s[10]||(s[10]=[n("https://opensource.com/article/20/6/bash-trap",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("作者：",-1)),t(p,{href:"https://opensource.com/users/seth"},{default:l(()=>[...s[12]||(s[12]=[n("Seth Kenlon",-1)])]),_:1}),s[17]||(s[17]=n(" 选题：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[13]||(s[13]=[n("lujun9972",-1)])]),_:1}),s[18]||(s[18]=n(" 译者：",-1)),t(p,{href:"https://github.com/HankChow"},{default:l(()=>[...s[14]||(s[14]=[n("HankChow",-1)])]),_:1}),s[19]||(s[19]=n(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[15]||(s[15]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[20]||(s[20]=[n("LCTT",-1)])]),_:1}),s[23]||(s[23]=n(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:l(()=>[...s[21]||(s[21]=[n("Linux中国",-1)])]),_:1}),s[24]||(s[24]=n(" 荣誉推出",-1))])])}const f=e(u,[["render",I]]);export{g as __pageData,f as default};
