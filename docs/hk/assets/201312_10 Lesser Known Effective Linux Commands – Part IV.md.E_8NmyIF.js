import{_ as l,a0 as i,w as d,s as p,I as o,x as n,a1 as r,A as s,ao as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"十個鮮為人知的 Linux 命令 - Part 4 | LCTT x X-CMD","titleTemplate":false,"description":"十個鮮為人知的 Linux 命令 - Part 4 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"十個鮮為人知的 Linux 命令 - Part 4 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"十個鮮為人知的 Linux 命令 - Part 4 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/10 Lesser Known Effective Linux Commands – Part IV","title":"十個鮮為人知的 Linux 命令 - Part 4","tag":"201312","desc":""},"relativePath":"201312/10 Lesser Known Effective Linux Commands – Part IV.md","filePath":"[post].md"}'),m={name:"201312/10 Lesser Known Effective Linux Commands – Part IV.md"};function u(g,t,_,f,w,x){const e=i("Link");return d(),p("div",null,[t[39]||(t[39]=o("h1",{id:"十個鮮為人知的-linux-命令-part-4",tabindex:"-1"},[n("十個鮮為人知的 Linux 命令 - Part 4 "),o("a",{class:"header-anchor",href:"#十個鮮為人知的-linux-命令-part-4","aria-label":"Permalink to “十個鮮為人知的 Linux 命令 - Part 4”"},"​")],-1)),t[40]||(t[40]=o("p",null,[n('繼續我們的"鮮為人知"系列，本系列的第四篇會讓你瞭解一些'),o("strong",null,"有趣"),n(" 又 "),o("strong",null,"動態"),n("的命令。這裏我們進入實際的教程，沒有很多理論。")],-1)),t[41]||(t[41]=o("p",null,[o("img",{src:"http://www.tecmint.com/wp-content/uploads/2013/11/10-Lesser-Known-Effective-Commands-.png",alt:""})],-1)),o("ul",null,[o("li",null,[r(e,{href:"http://linux.cn/article-2258-1.html"},{default:s(()=>[...t[0]||(t[0]=[n("十一個鮮為人知的 Linux 命令 - Part 1",-1)])]),_:1})]),o("li",null,[r(e,{href:"http://linux.cn/article-2265-1.html"},{default:s(()=>[...t[1]||(t[1]=[n("十個鮮為人知的 Linux 命令 - Part 2",-1)])]),_:1})]),o("li",null,[r(e,{href:"http://linux.cn/article-2284-1.html"},{default:s(()=>[...t[2]||(t[2]=[n("十個鮮為人知的 Linux 命令 - Part 3",-1)])]),_:1})])]),t[42]||(t[42]=a(`<p>本系列的第四篇包含了另外的鮮為人知的Linux命令，這些值得去了解。也許你已經知道了這些命令，毫無疑問你是一個勇於探索的資深Linux用户。</p><h3 id="_32-strace-command" tabindex="-1">32. strace Command <a class="header-anchor" href="#_32-strace-command" aria-label="Permalink to “32. strace Command”">​</a></h3><p><strong>strace</strong>是一個調試工具並被主要用於Linux的故障排除。它可能在你的系統內沒有默認安裝，你可能需要<strong>apt</strong> 或者 <strong>yum</strong> 安裝所需要的包。</p><p>使用strace命令追蹤一個命令的執行。</p><pre><code>root@tecmint [~]# strace pwd
</code></pre><h4 id="示例輸出" tabindex="-1">示例輸出 <a class="header-anchor" href="#示例輸出" aria-label="Permalink to “示例輸出”">​</a></h4><pre><code>execve(&quot;/bin/pwd&quot;, [&quot;pwd&quot;], [/* 29 vars */]) = 0
brk(0)                                  = 0x728000
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f29b0df2000
access(&quot;/etc/ld.so.preload&quot;, R_OK)      = -1 ENOENT (No such file or directory)
open(&quot;/etc/ld.so.cache&quot;, O_RDONLY)      = 3
fstat(3, {st_mode=S_IFREG|0644, st_size=38427, ...}) = 0
mmap(NULL, 38427, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f29b0de8000
close(3)                                = 0
open(&quot;/lib64/libc.so.6&quot;, O_RDONLY)      = 3
read(3, &quot;\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0&gt;\\0\\1\\0\\0\\0\\360\\355\\1I;\\0\\0\\0&quot;..., 832) = 832
fstat(3, {st_mode=S_IFREG|0755, st_size=1922152, ...}) = 0
mmap(0x3b49000000, 3745960, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x3b49000000
mprotect(0x3b4918a000, 2093056, PROT_NONE) = 0
mmap(0x3b49389000, 20480, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x189000) = 0x3b49389000
mmap(0x3b4938e000, 18600, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x3b4938e000
close(3)                                = 0
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f29b0de7000
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f29b0de6000
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f29b0de5000
....
</code></pre><p><strong>strace</strong>命令有大量的參數和選項，請參考man頁來獲取詳細信息。</p><h3 id="_33-disown-a-exit-命令" tabindex="-1">33. disown -a &amp;&amp; exit 命令 <a class="header-anchor" href="#_33-disown-a-exit-命令" aria-label="Permalink to “33. disown -a &amp;&amp; exit 命令”">​</a></h3>`,9)),o("p",null,[t[4]||(t[4]=n("大多數系統管理員使用",-1)),r(e,{href:"http://www.tecmint.com/screen-command-examples-to-manage-linux-terminals/"},{default:s(()=>[...t[3]||(t[3]=[n("screen 命令",-1)])]),_:1}),t[5]||(t[5]=n("來控制運行在終端後台的作業。讓我們假設一下如果你有一個長期運行的作業並想要將它從終端中",-1)),t[6]||(t[6]=o("strong",null,"脱離",-1)),t[7]||(t[7]=n("，你可以用screen命令來這麼做。但是如果你不知道如何使用screen，那麼disown可以用來救急。",-1))]),t[43]||(t[43]=o("p",null,"disown命令可以在後台持續運行任務，即使你關閉了終端會話。disown命令的語法是:",-1)),t[44]||(t[44]=o("pre",null,[o("code",null,`root@tecmint [~]# Command; disown -a && exit
`)],-1)),o("p",null,[t[9]||(t[9]=n("為了在終端中再次脱離一個已經長期運行的任務（譯註：可能已經bg運行了，但是並沒有脱離終端），使用",-1)),t[10]||(t[10]=o("strong",null,"jobs",-1)),t[11]||(t[11]=n("命令來找出任務號，接着使用disown ",-1)),t[12]||(t[12]=o("strong",null,"%n",-1)),t[13]||(t[13]=n("，這裏的",-1)),t[14]||(t[14]=o("strong",null,"%n",-1)),t[15]||(t[15]=n("是作業號。為了驗證作業確實在運行，使用",-1)),t[16]||(t[16]=o("strong",null,"ps",-1)),t[17]||(t[17]=n(" 或者 ",-1)),r(e,{href:"http://www.tecmint.com/12-top-command-examples-in-linux/"},{default:s(()=>[...t[8]||(t[8]=[n("top 命令",-1)])]),_:1}),t[18]||(t[18]=n("。",-1)),t[19]||(t[19]=o("strong",null,"nohup",-1)),t[20]||(t[20]=n("命令也是一個disown命令的替代品。",-1))]),t[45]||(t[45]=a(`<h3 id="_34-getconf-long-bit-命令" tabindex="-1">34. getconf LONG_BIT 命令 <a class="header-anchor" href="#_34-getconf-long-bit-命令" aria-label="Permalink to “34. getconf LONG_BIT 命令”">​</a></h3><p>上面的命令能顯示你的機器架構是<strong>32</strong> bit 或者 <strong>64</strong> 位?</p><pre><code>root@tecmint [~]# getconf LONG_BIT

32
</code></pre><h3 id="_35-終端上顯示日期" tabindex="-1">35. 終端上顯示日期 <a class="header-anchor" href="#_35-終端上顯示日期" aria-label="Permalink to “35. 終端上顯示日期”">​</a></h3><p>下面的命令是幾個命令的集合，確切地説是一個腳本。對於在shell或者終端下工作的人來説，沒有GUI界面看到當前系統日期是一個乏味的工作。你可以用‘<strong>date</strong>‘命令查看今天的日期。</p><p>只要在提示符後輸入如下的命令你就會在終端的右上角看到<strong>日期</strong>和<strong>時間</strong>。</p><pre><code>root@tecmint [~]# while sleep 1;do tput sc;tput cup 0 $(($(tput cols)-29));date;tput rc;done &amp;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/11/Date.jpg" alt="在終端下顯示日期"></p><h3 id="_36-convert-命令" tabindex="-1">36. convert 命令 <a class="header-anchor" href="#_36-convert-命令" aria-label="Permalink to “36. convert 命令”">​</a></h3><p>在寫教程的時候，我經常需要生成輸出，很多時候是圖片格式的輸出。上面的命令集合並不適合我。假設我需要tree命令的圖片格式的輸出(對 <strong>/etc/x11</strong> 目錄 )。</p><pre><code>root@tecmint:/etc/X11# tree | convert label:@- /home/avi/tree.png
</code></pre><p>上面命令的輸出可以在一個特定的位置(這裏是我的主目錄)下看到，文件名是<strong>tree.png</strong>。</p><h3 id="_37-watch-t-n1-date-t-figlet" tabindex="-1">37. watch -t -n1 “date +%T|figlet” <a class="header-anchor" href="#_37-watch-t-n1-date-t-figlet" aria-label="Permalink to “37. watch -t -n1 “date +%T|figlet””">​</a></h3>`,13)),o("p",null,[t[22]||(t[22]=n("記住“",-1)),t[23]||(t[23]=o("strong",null,"figlet",-1)),t[24]||(t[24]=n("”命令在我們早期的文章“",-1)),r(e,{href:"http://www.tecmint.com/20-funny-commands-of-linux-or-linux-is-fun-in-terminal/"},{default:s(()=>[...t[21]||(t[21]=[n("20 Funny Commands of Linux",-1)])]),_:1}),t[25]||(t[25]=n("”中的描述。這個命令非常酷，這次我們會通過管道輸出到‘",-1)),t[26]||(t[26]=o("strong",null,"figlet",-1)),t[27]||(t[27]=n("‘而在終端上顯示一個動畫電子鐘。",-1))]),t[46]||(t[46]=a(`<p>你自己檢查一下，記住你必須已經在系統上安裝了<strong>figlet</strong>，用<strong>apt</strong> 或者 <strong>yum</strong>安裝所需要的包。</p><pre><code>root@tecmint [~]# watch -t -n1 &quot;date +%T|figlet&quot;
</code></pre><h4 id="示例輸出-1" tabindex="-1">示例輸出 <a class="header-anchor" href="#示例輸出-1" aria-label="Permalink to “示例輸出”">​</a></h4><pre><code> _  ___    ____   ___    _____ _  _                                                                                             Fri Nov 29 10:29:34 GMT 
/ |/ _ \\ _|___ \\ / _ \\ _|___ /| || |
| | | | (_) __) | (_) (_) |_ \\| || |_
| | |_| |_ / __/ \\__, |_ ___) |__   _|
|_|\\___/(_)_____|  /_/(_)____/   |_|
</code></pre><h3 id="_38-host-和-dig-命令" tabindex="-1">38. host 和 dig 命令 <a class="header-anchor" href="#_38-host-和-dig-命令" aria-label="Permalink to “38. host 和 dig 命令”">​</a></h3><p>雖然“<strong>host</strong>” 和 “<strong>dig</strong>”命令不那麼鮮為人知，仍然很少使用。host命令是一個<strong>DNS</strong>查詢工具。</p><pre><code>root@tecmint [~]# host www.google.com

www.google.com has address 173.194.66.147
www.google.com has address 173.194.66.105
www.google.com has address 173.194.66.99
www.google.com has address 173.194.66.104
www.google.com has address 173.194.66.106
www.google.com has address 173.194.66.103
www.google.com has IPv6 address 2a00:1450:400c:c03::68
</code></pre><p>（譯註：事實上，我覺得dig命令是最強大的，自從有了dig，我就再也不用 nslookup 了。）</p><pre><code>root@tecmint [~]# dig www.google.com

; &lt;&lt;&gt;&gt; DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6_4.6 &lt;&lt;&gt;&gt; www.google.com
;; global options: +cmd
;; Got answer:
;; -&gt;&gt;HEADER&lt;
</code></pre><h3 id="_39-dstat-命令" tabindex="-1">39. dstat 命令 <a class="header-anchor" href="#_39-dstat-命令" aria-label="Permalink to “39. dstat 命令”">​</a></h3><p><strong>dstat</strong>是一個多用途的工具，它會依據系統資源生成統計。默認情況下你的系統可能沒有安裝‘<strong>dstat</strong>‘。在使用這個彩色的描述系統信息的生成器前使用<strong>apt</strong> 或者 <strong>yum</strong>來安裝。</p><pre><code>root@tecmint [~]# dstat
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/11/dstat.jpeg" alt="dstat 命令"></p><h3 id="_40-bind-p-命令" tabindex="-1">40. bind -p 命令 <a class="header-anchor" href="#_40-bind-p-命令" aria-label="Permalink to “40. bind -p 命令”">​</a></h3><p>‘<strong>bind -p</strong>‘會顯示所有的<strong>BASH</strong> shell可用的快捷方式。</p><pre><code>root@tecmint [~]# bind -p

&quot;\\C-g&quot;: abort 
&quot;\\C-x\\C-g&quot;: abort 
&quot;\\e\\C-g&quot;: abort 
&quot;\\C-j&quot;: accept-line
&quot;\\C-m&quot;: accept-line 
# alias-expand-line (not bound) 
# arrow-key-prefix (not bound) 
# backward-byte (not bound) 
&quot;\\C-b&quot;: backward-char 
&quot;\\eOD&quot;: backward-char 
&quot;\\e[D&quot;: backward-char 
&quot;\\e!&quot;: complete-command 
&quot;\\e/&quot;: complete-filename 
&quot;\\e@&quot;: complete-hostname 
&quot;\\e{&quot;: complete-into-braces 
&quot;\\e~&quot;: complete-username 
&quot;\\e$&quot;: complete-variable 
# copy-backward-word (not bound)
# copy-forward-word (not bound) 
# copy-region-as-kill (not bound)
....
....
</code></pre><h3 id="_41-touch-forcefsck" tabindex="-1">41. touch /forcefsck <a class="header-anchor" href="#_41-touch-forcefsck" aria-label="Permalink to “41. touch /forcefsck”">​</a></h3><p>下面的命令會在root目錄下創建一個空的文件夾&#39;<strong>forcefsck</strong>&#39;。這會強制Linux系統在下次啓動時檢查文件系統。</p><pre><code>root@tecmint [~]# touch /forcefsck
</code></pre><p>今天這些就是全部。因為你們愛‘<strong>鮮為人知的命令</strong>‘ ，因此我們將繼續這個系列，本系列的下一篇文章將很快發佈。</p><p>不要走開繼續關注<strong>Tecmint</strong>。不要忘記在評論欄裏留下你們有價值的反饋。幫我們一個忙，喜愛、分享我們的文章，並幫我們傳播。</p><hr>`,22)),o("p",null,[t[29]||(t[29]=n("via: ",-1)),r(e,{href:"http://www.tecmint.com/10-lesser-known-effective-linux-commands-part-iv/"},{default:s(()=>[...t[28]||(t[28]=[n("http://www.tecmint.com/10-lesser-known-effective-linux-commands-part-iv/",-1)])]),_:1})]),o("p",null,[t[32]||(t[32]=n("譯者：",-1)),r(e,{href:"https://github.com/geekpi"},{default:s(()=>[...t[30]||(t[30]=[n("geekpi",-1)])]),_:1}),t[33]||(t[33]=n(" 校對：",-1)),r(e,{href:"https://github.com/wxy"},{default:s(()=>[...t[31]||(t[31]=[n("wxy",-1)])]),_:1})]),o("p",null,[t[36]||(t[36]=n("本文由 ",-1)),r(e,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[34]||(t[34]=[n("LCTT",-1)])]),_:1}),t[37]||(t[37]=n(" 原創翻譯，",-1)),r(e,{href:"http://linux.cn/"},{default:s(()=>[...t[35]||(t[35]=[n("Linux中國",-1)])]),_:1}),t[38]||(t[38]=n(" 榮譽推出",-1))])])}const A=l(m,[["render",u]]);export{T as __pageData,A as default};
