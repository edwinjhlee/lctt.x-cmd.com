import{_ as p,a0 as s,w as r,s as o,ao as d,I as n,x as e,a1 as t,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"五個你可能不瞭解的killall選項 | LCTT x X-CMD","titleTemplate":false,"description":"五個你可能不瞭解的killall選項 | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"五個你可能不瞭解的killall選項 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"五個你可能不瞭解的killall選項 | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/What Options you use for Linux killall Command -- I have 5 Options","title":"五個你可能不瞭解的killall選項","tag":"201405","desc":""},"relativePath":"201405/What Options you use for Linux killall Command -- I have 5 Options.md","filePath":"[post].md"}'),m={name:"201405/What Options you use for Linux killall Command -- I have 5 Options.md"};function h(k,l,u,T,c,f){const a=s("Link");return r(),o("div",null,[l[11]||(l[11]=d(`<h1 id="五個你可能不瞭解的killall選項" tabindex="-1">五個你可能不瞭解的killall選項 <a class="header-anchor" href="#五個你可能不瞭解的killall選項" aria-label="Permalink to “五個你可能不瞭解的killall選項”">​</a></h1><p>Linux的命令列提供很多命令來殺死進程。比如，你可以向“kill”命傳遞一個PID來殺死進程；“pkill”命令使用一個正則表達式作為輸入，所以和該模式匹配的進程都被殺死。</p><p>但是還有一個命令叫“killall”，默認情況下，它精確地匹配參數名，然後殺死匹配進程。在這篇文章中，我們將討論有關這個命令的實際應用。</p><p><img src="http://linoxide.com/wp-content/uploads/2014/02/killall-command.jpg" alt=""></p><h3 id="linux-的-killall-命令" tabindex="-1">Linux 的 killall 命令 <a class="header-anchor" href="#linux-的-killall-命令" aria-label="Permalink to “Linux 的 killall 命令”">​</a></h3><p>killall命令可以用來給一個特定的進程發送一個信號。這個信號默認情況下是SIGTERM，但也可以由killall命令使用參數來指定其它信號。</p><p>現在讓我們通過一些實際的例子來看看這個命令的實際用法。</p><h4 id="_1-基本示例" tabindex="-1">1. 基本示例 <a class="header-anchor" href="#_1-基本示例" aria-label="Permalink to “1. 基本示例”">​</a></h4><p>在這個例子中，我們將使用killall來殺死特定進程。假如，有兩個開頭字符相同的進程：</p><pre><code>$ ps -aef | grep “test”
himanshu 3969 2811 0 14:14 pts/0 00:00:00 ./test
himanshu 3970 2811 0 14:14 pts/0 00:00:00 ./test_again
</code></pre><p>如何殺死“test_again”進程呢？</p><pre><code>$ killall test_again
[2]+ Terminated ./test_again
</code></pre><p>如你所見，killall命令終止了“test_again”進程。你可以通過ps命令來確認這個事實：</p><pre><code>$ ps -aef | grep “test”
himanshu 3969 2811 0 14:14 pts/0 00:00:00 ./test
</code></pre><p>你可以觀察到“test_again”沒有被顯示出來，因為它已經被殺死了。</p><h4 id="_2-使用-i-選項忽略大小寫" tabindex="-1">2. 使用 -I 選項忽略大小寫 <a class="header-anchor" href="#_2-使用-i-選項忽略大小寫" aria-label="Permalink to “2. 使用 -I 選項忽略大小寫”">​</a></h4><p>默認情況下，killall命令是大小寫敏感的。例如：</p><pre><code>$ ps -aef | grep “test”
himanshu 4177 3161 0 14:54 pts/3 00:00:00 ./test
himanshu 4178 3161 0 14:54 pts/3 00:00:00 ./test_again
himanshu 4180 3161 0 14:54 pts/3 00:00:00 grep --color=auto test

$ killall TEST
TEST: no process found
</code></pre><p>你可以看到，killall命令找不到叫做“TEST”的進程，但是“test”進程是確確實實的在運行的。</p><p>來讓killall命令忽略大小寫，可以使用-I選項（大寫i）。例如：</p><pre><code>$ killall -I TEST
[1]- Terminated ./test
</code></pre><p>你可以觀察到，現在你成功的終止了“test”進程。</p><h4 id="_3-使用-i-選項交互式的終止進程" tabindex="-1">3. 使用 -i 選項交互式的終止進程 <a class="header-anchor" href="#_3-使用-i-選項交互式的終止進程" aria-label="Permalink to “3. 使用 -i 選項交互式的終止進程”">​</a></h4><p>killall命令可以用來終止多個進程。</p><pre><code>$ killall test test_again
[2]- Terminated ./test_again
[3]+ Terminated ./test
</code></pre><p>但是，如果你想要killall交互式地來終止進程，你可以使用-i選項。</p><p>這裏是例子：</p><pre><code>$ killall -i test test_again
Kill test(4201) ? (y/N) y
Kill test_again(4202) ? (y/N) y
[1]- Terminated ./test
[2]+ Terminated ./test_again
</code></pre><p>你可以看到，用這種方式，在同時終止多個進程時，用户可以控制是否終止某一個進程。</p><h4 id="_4-使用-q-選項關閉命令執行回顯" tabindex="-1">4. 使用 -q 選項關閉命令執行回顯 <a class="header-anchor" href="#_4-使用-q-選項關閉命令執行回顯" aria-label="Permalink to “4. 使用 -q 選項關閉命令執行回顯”">​</a></h4><p>有些時候，當killall找不到指定的進程時，它就會像下面這樣輸出錯誤信息。</p><pre><code>$ killall TEST
TEST: no process found
</code></pre><p>但是，當你想要killall執行地安安靜靜的話，你就可以使用-q選項：</p><pre><code>$ killall -q TEST
$
</code></pre><p>如你所見，-q選項被使用之後，killall命令的輸出信息就被抑制了。</p><h4 id="_5-使用-l選項列出所有支持的信號-signal" tabindex="-1">5. 使用-l選項列出所有支持的信號（signal) <a class="header-anchor" href="#_5-使用-l選項列出所有支持的信號-signal" aria-label="Permalink to “5. 使用-l選項列出所有支持的信號（signal)”">​</a></h4><p>如之前描述的一樣，killall向進程發送信號。</p><p>你可以使用-s選項（後面跟一個信號名）來向一個進程發送特殊信號。</p><p>想要知道所有可以發送的信號，可以使用-l選項（小寫L）來獲取：</p><pre><code>$ killall -l
HUP INT QUIT ILL TRAP ABRT IOT BUS FPE KILL USR1 SEGV USR2 PIPE ALRM TERM
STKFLT CHLD CONT STOP TSTP TTIN TTOU URG XCPU XFSZ VTALRM PROF WINCH IO PWR SYS
UNUSED
</code></pre><p>killall支持上面的所有信號。</p><p>看着這些信號的名字，可能你心裏就會嘀咕：這些信號都是幹什麼的？</p><p>譯者注：使用下面的命令來獲取所有信號的説明：</p><p>$ man 7 signal</p><h3 id="我需要和大家討論一件事情" tabindex="-1">我需要和大家討論一件事情 <a class="header-anchor" href="#我需要和大家討論一件事情" aria-label="Permalink to “我需要和大家討論一件事情”">​</a></h3><p>killall命令的man説：假如進程的名字的長度小於等於15，默認情況下就會以完整名稱匹配。</p><p>比如，假設有兩個名字很長的進程：</p><pre><code>$ ps -aef | grep “test”
himanshu 4021 3161 0 14:27 pts/3 00:00:00 ./test_abcdefghij
himanshu 4035 3161 0 14:27 pts/3 00:00:00 ./test_abcdefgh
</code></pre><p>第一個進程的名字有15個字符。現在，讓我們試着使用killall殺死這個進程：</p><pre><code>$ killall test_abcdefghij
[1]- Terminated ./test_abcdefghij
</code></pre><p>如你所見，killall命令成功殺死了這個進程。</p><p>假如，兩個進程的名字都超過15個字符，根據man，killall將把兩個進程全部殺死。比如：</p><pre><code>$ ps -aef | grep “test”
himanshu 4114 3161 0 14:40 pts/3 00:00:00 ./test_abcdefghijklmnopqrstuvwx
himanshu 4141 3161 0 14:46 pts/3 00:00:00 ./test_abcdefghijklmnopqrstuvwxyz
himanshu 4143 3161 0 14:46 pts/3 00:00:00 grep --color=auto test
</code></pre><p>你可以觀察到，兩個進程的名字都超過15個字符。現在，當我使用killall試着殺死第二個進程時：</p><pre><code>$ killall test_abcdefghijklmnopqrstuvwxyz
[6]+ Terminated ./test_abcdefghijklmnopqrstuvwxyz
</code></pre><p>它只殺死了指定的進程，另一個則沒有被殺死。</p><pre><code>$ ps -aef | grep “test”
himanshu 4114 3161 0 14:40 pts/3 00:00:00 ./test_abcdefghijklmnopqrstuvwx
himanshu 4146 3161 0 14:47 pts/3 00:00:00 grep --color=auto test
</code></pre><p>我不太確定，是我進行的嘗試中有不對的地方，還是這是killall的一個bug。假如你在評論中寫上你的觀點，我會非常感激。</p><p>順便説一下，這是我機器上killall命令的版本信息：</p><pre><code>$ killall --version
killall (PSmisc) 22.20
Copyright (C) 1993-2012 Werner Almesberger and Craig Small

PSmisc comes with ABSOLUTELY NO WARRANTY.
This is free software, and you are welcome to redistribute it under
the terms of the GNU General Public License.
For more information about these matters, see the files named COPYING.
</code></pre><hr>`,61)),n("p",null,[l[1]||(l[1]=e("via: ",-1)),t(a,{href:"http://linoxide.com/linux-command/linux-killall-my-options/"},{default:i(()=>[...l[0]||(l[0]=[e("http://linoxide.com/linux-command/linux-killall-my-options/",-1)])]),_:1})]),n("p",null,[l[4]||(l[4]=e("譯者：",-1)),t(a,{href:"https://github.com/intermerlin"},{default:i(()=>[...l[2]||(l[2]=[e("intermerlin",-1)])]),_:1}),l[5]||(l[5]=e(" 校對：",-1)),t(a,{href:"https://github.com/wxy"},{default:i(()=>[...l[3]||(l[3]=[e("wxy",-1)])]),_:1})]),n("p",null,[l[8]||(l[8]=e("本文由 ",-1)),t(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...l[6]||(l[6]=[e("LCTT",-1)])]),_:1}),l[9]||(l[9]=e(" 原創翻譯，",-1)),t(a,{href:"http://linux.cn/"},{default:i(()=>[...l[7]||(l[7]=[e("Linux中國",-1)])]),_:1}),l[10]||(l[10]=e(" 榮譽推出",-1))])])}const b=p(m,[["render",h]]);export{x as __pageData,b as default};
