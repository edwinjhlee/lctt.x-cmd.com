import{_ as n,a0 as d,w as i,s as l,ao as s,I as r,x as o,a1 as a,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"jobs 命令示例 | LCTT x X-CMD","titleTemplate":false,"description":"jobs 命令示例 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"jobs 命令示例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"jobs 命令示例 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151204 Linux or Unix--jobs Command Examples","title":"jobs 命令示例","tag":"201601","desc":""},"relativePath":"201601/20151204 Linux or Unix--jobs Command Examples.md","filePath":"[post].md"}'),b={name:"201601/20151204 Linux or Unix--jobs Command Examples.md"};function c(h,e,m,u,j,x){const t=d("Link");return i(),l("div",null,[e[14]||(e[14]=s(`<h1 id="jobs-命令示例" tabindex="-1">jobs 命令示例 <a class="header-anchor" href="#jobs-命令示例" aria-label="Permalink to “jobs 命令示例”">​</a></h1><p>我是個新的 Linux/Unix 用户。我該如何在 Linux 或類 Unix 系統中使用 BASH/KSH/TCSH 或者基於 POSIX 的 shell 來查看當前正在進行的作業（job）？在 Unix/Linux 上怎樣顯示當前作業的狀態？(LCTT 譯註：job，也常稱為“任務”)</p><p>作業控制是一種能力，可以停止/暫停進程（命令）的執行並按你的要求繼續/恢復它們的執行。這是通過你的操作系統和諸如 bash/ksh 或 POSIX shell 等 shell 來執行的。</p><p>shell 會將當前所執行的作業保存在一個表中，可以用 jobs 命令來顯示。</p><h3 id="用途" tabindex="-1">用途 <a class="header-anchor" href="#用途" aria-label="Permalink to “用途”">​</a></h3><blockquote><p>在當前 shell 會話中顯示作業的狀態。</p></blockquote><h3 id="語法" tabindex="-1">語法 <a class="header-anchor" href="#語法" aria-label="Permalink to “語法”">​</a></h3><p>其基本語法如下:</p><pre><code>jobs
</code></pre><p>或</p><pre><code>jobs jobID
</code></pre><p>或者</p><pre><code>jobs [options] jobID
</code></pre><h3 id="啓動一些作業來進行示範" tabindex="-1">啓動一些作業來進行示範 <a class="header-anchor" href="#啓動一些作業來進行示範" aria-label="Permalink to “啓動一些作業來進行示範”">​</a></h3><p>在開始使用 jobs 命令前，你需要在系統上先啓動多個作業。執行以下命令來啓動作業：</p><pre><code>### 啓動 xeyes, calculator, 和 gedit 文本編輯器 ###
xeyes &amp;
gnome-calculator &amp;
gedit fetch-stock-prices.py &amp;
</code></pre><p>最後，在前台運行 ping 命令：</p><pre><code>ping www.cyberciti.biz
</code></pre><p>按 <strong>Ctrl-Z</strong> 鍵來掛起（suspend） ping 命令的作業。</p><h3 id="jobs-命令示例-1" tabindex="-1">jobs 命令示例 <a class="header-anchor" href="#jobs-命令示例-1" aria-label="Permalink to “jobs 命令示例”">​</a></h3><p>要在當前 shell 顯示作業的狀態，請輸入：</p><pre><code>$ jobs
</code></pre><p>輸出示例:</p><pre><code>[1]   7895 Running                 gpass &amp;
[2]   7906 Running                 gnome-calculator &amp;
[3]-  7910 Running                 gedit fetch-stock-prices.py &amp;
[4]+  7946 Stopped                 ping cyberciti.biz
</code></pre><p>要顯示名字以“p”開頭的進程 ID 或作業名稱，輸入：</p><pre><code>$ jobs -p %p
</code></pre><p>或者</p><pre><code>$ jobs %p
</code></pre><p>輸出示例:</p><pre><code>[4]-  Stopped                 ping cyberciti.biz
</code></pre><p>字符 ％ 是一個指定任務的方法。在這個例子中，你可以使用作業名稱開頭字符串來來暫停它，如 ％ping。</p><h3 id="如何顯示進程-id-不包含其他正常的信息" tabindex="-1">如何顯示進程 ID 不包含其他正常的信息？ <a class="header-anchor" href="#如何顯示進程-id-不包含其他正常的信息" aria-label="Permalink to “如何顯示進程 ID 不包含其他正常的信息？”">​</a></h3><p>通過 jobs 命令的 -l（小寫的 L）選項列出每個作業的詳細信息，運行：</p><pre><code>$ jobs -l
</code></pre><p>示例輸出:</p><p><img src="http://s0.cyberciti.org/uploads/faq/2013/02/jobs-command-output.jpg" alt="Fig.01: Displaying the status of jobs in the shell"></p><p><em>Fig.01: 在 shell 中顯示 jobs 的狀態</em></p><h3 id="如何只列出最近一次狀態改變的進程" tabindex="-1">如何只列出最近一次狀態改變的進程？ <a class="header-anchor" href="#如何只列出最近一次狀態改變的進程" aria-label="Permalink to “如何只列出最近一次狀態改變的進程？”">​</a></h3><p>首先，啓動一個新的工作如下所示：</p><pre><code>$ sleep 100 &amp;
</code></pre><p>現在，只顯示自從上次提示過停止或退出之後的作業，輸入：</p><pre><code>$ jobs -n
</code></pre><p>示例輸出:</p><pre><code>[5]-  Running                 sleep 100 &amp;
</code></pre><h3 id="僅顯示進程-id-pid" tabindex="-1">僅顯示進程 ID（PID） <a class="header-anchor" href="#僅顯示進程-id-pid" aria-label="Permalink to “僅顯示進程 ID（PID）”">​</a></h3><p>通過 jobs 命令的 -p 選項僅顯示 PID：</p><pre><code>$ jobs -p
</code></pre><p>示例輸出:</p><pre><code>7895
7906
7910
7946
7949
</code></pre><h3 id="怎樣只顯示正在運行的作業呢" tabindex="-1">怎樣只顯示正在運行的作業呢？ <a class="header-anchor" href="#怎樣只顯示正在運行的作業呢" aria-label="Permalink to “怎樣只顯示正在運行的作業呢？”">​</a></h3><p>通過 jobs 命令的 -r 選項只顯示正在運行的作業，輸入：</p><pre><code>$ jobs -r
</code></pre><p>示例輸出:</p><pre><code>[1]   Running                 gpass &amp;
[2]   Running                 gnome-calculator &amp;
[3]-  Running                 gedit fetch-stock-prices.py &amp;
</code></pre><h3 id="怎樣只顯示已經停止工作的作業" tabindex="-1">怎樣只顯示已經停止工作的作業？ <a class="header-anchor" href="#怎樣只顯示已經停止工作的作業" aria-label="Permalink to “怎樣只顯示已經停止工作的作業？”">​</a></h3><p>通過 jobs 命令的 -s 選項只顯示停止工作的作業，輸入：</p><pre><code>$ jobs -s
</code></pre><p>示例輸出:</p><pre><code>[4]+  Stopped                 ping cyberciti.biz
</code></pre><p>要繼續執行 ping cyberciti.biz 作業，輸入以下 bg 命令：</p><pre><code>$ bg %4
</code></pre><h3 id="jobs-命令選項" tabindex="-1">jobs 命令選項 <a class="header-anchor" href="#jobs-命令選項" aria-label="Permalink to “jobs 命令選項”">​</a></h3>`,62)),r("p",null,[e[1]||(e[1]=o("摘自 ",-1)),a(t,{href:"http://www.manpager.com/linux/man1/bash.1.html"},{default:p(()=>[...e[0]||(e[0]=[o("bash(1)",-1)])]),_:1}),e[2]||(e[2]=o(" 命令 man 手冊頁:",-1))]),e[15]||(e[15]=s(`<div class="table-wrap"><table><thead><tr><th>選項</th><th>描述</th></tr></thead><tbody><tr><td><code>-l</code></td><td>列出進程 ID 及其它信息。</td></tr><tr><td><code>-p</code></td><td>僅列出進程 ID。</td></tr><tr><td><code>-n</code></td><td>僅列出自從上次輸出了狀態變化提示（比如顯示有進程退出）後的發生了狀態變化的進程。</td></tr><tr><td><code>-r</code></td><td>僅顯示運行中的作業。</td></tr><tr><td><code>-s</code></td><td>僅顯示停止的作業。</td></tr><tr><td><code>-x</code></td><td>運行命令及其參數，並用新的命令的進程 ID 替代所匹配的原有作業的進程組 ID。</td></tr></tbody></table></div><h3 id="關於-usr-bin-jobs-和-shell-內建的説明" tabindex="-1">關於 /usr/bin/jobs 和 shell 內建的説明 <a class="header-anchor" href="#關於-usr-bin-jobs-和-shell-內建的説明" aria-label="Permalink to “關於 /usr/bin/jobs 和 shell 內建的説明”">​</a></h3><p>輸入以下 type 命令找出是否 jobs 命令是 shell 的內建命令或是外部命令還是都是：</p><pre><code>$ type -a jobs
</code></pre><p>輸出示例:</p><pre><code>jobs is a shell builtin
jobs is /usr/bin/jobs
</code></pre><p>在幾乎所有情況下，你都需要使用 BASH/KSH/POSIX shell 內建的jobs 命令。/usr/bin/jobs 命令不能被用在當前 shell 中。/usr/bin/jobs 命令工作在不同的環境中，並不共享其父 bash/ksh 的 shell 作業。</p><hr>`,8)),r("p",null,[e[4]||(e[4]=o("via: ",-1)),a(t,{href:"http://www.cyberciti.biz/faq/unix-linux-jobs-command-examples-usage-syntax/"},{default:p(()=>[...e[3]||(e[3]=[o("http://www.cyberciti.biz/faq/unix-linux-jobs-command-examples-usage-syntax/",-1)])]),_:1})]),r("p",null,[e[7]||(e[7]=o("作者：Vivek Gite 譯者：",-1)),a(t,{href:"https://github.com/strugglingyouth"},{default:p(()=>[...e[5]||(e[5]=[o("strugglingyouth",-1)])]),_:1}),e[8]||(e[8]=o(" 校對：",-1)),a(t,{href:"https://github.com/wxy"},{default:p(()=>[...e[6]||(e[6]=[o("wxy",-1)])]),_:1})]),r("p",null,[e[11]||(e[11]=o("本文由 ",-1)),a(t,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[9]||(e[9]=[o("LCTT",-1)])]),_:1}),e[12]||(e[12]=o(" 原創編譯，",-1)),a(t,{href:"https://linux.cn/"},{default:p(()=>[...e[10]||(e[10]=[o("Linux中國",-1)])]),_:1}),e[13]||(e[13]=o(" 榮譽推出",-1))])])}const C=n(b,[["render",c]]);export{T as __pageData,C as default};
