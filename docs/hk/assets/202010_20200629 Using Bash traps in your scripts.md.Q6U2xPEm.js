import{_ as e,a0 as i,w as o,s as r,I as a,x as n,a1 as t,A as l,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse('{"title":"在腳本中使用 Bash 信號捕獲 | LCTT x X-CMD","titleTemplate":false,"description":"在腳本中使用 Bash 信號捕獲 | LCTT (202010) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在腳本中使用 Bash 信號捕獲 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在腳本中使用 Bash 信號捕獲 | LCTT (202010) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202010/20200629 Using Bash traps in your scripts","title":"在腳本中使用 Bash 信號捕獲","tag":"202010","desc":""},"relativePath":"202010/20200629 Using Bash traps in your scripts.md","filePath":"[post].md"}'),u={name:"202010/20200629 Using Bash traps in your scripts.md"};function I(T,s,S,c,G,h){const p=i("Link");return o(),r("div",null,[s[25]||(s[25]=a("h1",{id:"在腳本中使用-bash-信號捕獲",tabindex:"-1"},[n("在腳本中使用 Bash 信號捕獲 "),a("a",{class:"header-anchor",href:"#在腳本中使用-bash-信號捕獲","aria-label":"Permalink to “在腳本中使用 Bash 信號捕獲”"},"​")],-1)),s[26]||(s[26]=a("blockquote",null,[a("p",null,[n("無論你的腳本是否成功運行，"),a("ruby",null,[n("信號捕獲"),a("rt",null,"trap")]),n("都能讓它平穩結束。")])],-1)),s[27]||(s[27]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202010/13/182135f2nktcrnryncisg8.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("Shell 腳本的啓動並不難被檢測到，但 Shell 腳本的終止檢測卻並不容易，因為我們無法確定腳本會按照預期地正常結束，還是由於意外的錯誤導致失敗。當腳本執行失敗時，將正在處理的內容記錄下來是非常有用的做法，但有時候這樣做起來並不方便。而 ",-1)),t(p,{href:"https://opensource.com/resources/what-bash"},{default:l(()=>[...s[0]||(s[0]=[n("Bash",-1)])]),_:1}),s[2]||(s[2]=n(" 中 ",-1)),s[3]||(s[3]=a("code",null,"trap",-1)),s[4]||(s[4]=n(" 命令的存在正是為了解決這個問題，它可以捕獲到腳本的終止信號，並以某種預設的方式作出應對。",-1))]),s[28]||(s[28]=d(`<h3 id="響應失敗" tabindex="-1">響應失敗 <a class="header-anchor" href="#響應失敗" aria-label="Permalink to “響應失敗”">​</a></h3><p>如果出現了一個錯誤，可能導致發生一連串錯誤。下面示例腳本中，首先在 <code>/tmp</code> 中創建一個臨時目錄，這樣可以在臨時目錄中執行解包、文件處理等操作，然後再以另一種壓縮格式進行打包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
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
<span class="line"><span>/usr/bin/rm -r /tmp/tmpdir</span></span></code></pre></div><p>一般情況下，這個腳本都可以按照預期執行。但如果歸檔文件中的文件是 PNG 文件而不是期望的 JPEG 文件，腳本就會在中途失敗，這時候另一個問題就出現了：最後一步刪除臨時目錄的操作沒有被正常執行。如果你手動把臨時目錄刪掉，倒是不會造成什麼影響，但是如果沒有手動把臨時目錄刪掉，在下一次執行這個腳本的時候，它必須處理一個現有的臨時目錄，裏面充滿了不可預知的剩餘文件。</p><p>其中一個解決方案是在腳本開頭增加一個預防性刪除邏輯用來處理這種情況。但這種做法顯得有些暴力，而我們更應該從結構上解決這個問題。使用 <code>trap</code> 是一個優雅的方法。</p><h3 id="使用-trap-捕獲信號" tabindex="-1">使用 trap 捕獲信號 <a class="header-anchor" href="#使用-trap-捕獲信號" aria-label="Permalink to “使用 trap 捕獲信號”">​</a></h3><p>我們可以通過 <code>trap</code> 捕捉程序運行時的信號。如果你使用過 <code>kill</code> 或者 <code>killall</code> 命令，那你就已經使用過名為 <code>SIGTERM</code> 的信號了。除此以外，還可以執行 <code>trap -l</code> 或 <code>trap --list</code> 命令列出其它更多的信號：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ trap --list</span></span>
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
<span class="line"><span>63) SIGRTMAX-1  64) SIGRTMAX</span></span></code></pre></div><p>可以被 <code>trap</code> 識別的信號除了以上這些，還包括：</p><ul><li><code>EXIT</code>：進程退出時發出的信號</li><li><code>ERR</code>：進程以非 0 狀態碼退出時發出的信號</li><li><code>DEBUG</code>：表示調試模式的布爾值</li></ul><p>如果要在 Bash 中實現信號捕獲，只需要在 <code>trap</code> 後加上需要執行的命令，再加上需要捕獲的信號列表就可以了。</p><p>例如，下面的這行語句可以捕獲到在進程運行時用户按下 <code>Ctrl + C</code> 組合鍵發出的 <code>SIGINT</code> 信號：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>trap &quot;{ echo &#39;Terminated with Ctrl+C&#39;; }&quot; SIGINT</span></span></code></pre></div><p>因此，上文中腳本的缺陷可以通過使用 <code>trap</code> 捕獲 <code>SIGINT</code>、<code>SIGTERM</code>、進程錯誤退出、進程正常退出等信號，並正確處理臨時目錄的方式來修復：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
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
<span class="line"><span>      --stdout &gt; &quot;\${1%.*}&quot;.tbz</span></span></code></pre></div>`,15)),a("p",null,[s[6]||(s[6]=n("對於更復雜的功能，還可以用 ",-1)),t(p,{href:"https://opensource.com/article/20/6/how-write-functions-bash"},{default:l(()=>[...s[5]||(s[5]=[n("Bash 函數",-1)])]),_:1}),s[7]||(s[7]=n("來簡化 ",-1)),s[8]||(s[8]=a("code",null,"trap",-1)),s[9]||(s[9]=n(" 語句。",-1))]),s[29]||(s[29]=a("h3",{id:"bash-中的信號捕獲",tabindex:"-1"},[n("Bash 中的信號捕獲 "),a("a",{class:"header-anchor",href:"#bash-中的信號捕獲","aria-label":"Permalink to “Bash 中的信號捕獲”"},"​")],-1)),s[30]||(s[30]=a("p",null,"信號捕獲可以讓腳本在無論是否成功執行所有任務的情況下都能夠正確完成清理工作，能讓你的腳本更加可靠，這是一個很好的習慣。儘管嘗試把信號捕獲加入到你的腳本里看看能夠起到什麼作用吧。",-1)),s[31]||(s[31]=a("hr",null,null,-1)),a("p",null,[s[11]||(s[11]=n("via: ",-1)),t(p,{href:"https://opensource.com/article/20/6/bash-trap"},{default:l(()=>[...s[10]||(s[10]=[n("https://opensource.com/article/20/6/bash-trap",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("作者：",-1)),t(p,{href:"https://opensource.com/users/seth"},{default:l(()=>[...s[12]||(s[12]=[n("Seth Kenlon",-1)])]),_:1}),s[17]||(s[17]=n(" 選題：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[13]||(s[13]=[n("lujun9972",-1)])]),_:1}),s[18]||(s[18]=n(" 譯者：",-1)),t(p,{href:"https://github.com/HankChow"},{default:l(()=>[...s[14]||(s[14]=[n("HankChow",-1)])]),_:1}),s[19]||(s[19]=n(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[15]||(s[15]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[20]||(s[20]=[n("LCTT",-1)])]),_:1}),s[23]||(s[23]=n(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:l(()=>[...s[21]||(s[21]=[n("Linux中國",-1)])]),_:1}),s[24]||(s[24]=n(" 榮譽推出",-1))])])}const f=e(u,[["render",I]]);export{g as __pageData,f as default};
