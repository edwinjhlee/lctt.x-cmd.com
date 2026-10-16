import{_ as l,a0 as a,w as p,s as d,I as o,x as n,a1 as r,A as s,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"十個鮮為人知的 Linux 命令 - Part 2 | LCTT x X-CMD","titleTemplate":false,"description":"十個鮮為人知的 Linux 命令 - Part 2 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"十個鮮為人知的 Linux 命令 - Part 2 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"十個鮮為人知的 Linux 命令 - Part 2 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/10 Lesser Known Linux Commands – Part 2","title":"十個鮮為人知的 Linux 命令 - Part 2","tag":"201311","desc":""},"relativePath":"201311/10 Lesser Known Linux Commands – Part 2.md","filePath":"[post].md"}'),u={name:"201311/10 Lesser Known Linux Commands – Part 2.md"};function m(g,t,f,c,h,v){const e=a("Link");return p(),d("div",null,[t[27]||(t[27]=o("h1",{id:"十個鮮為人知的-linux-命令-part-2",tabindex:"-1"},[n("十個鮮為人知的 Linux 命令 - Part 2 "),o("a",{class:"header-anchor",href:"#十個鮮為人知的-linux-命令-part-2","aria-label":"Permalink to “十個鮮為人知的 Linux 命令 - Part 2”"},"​")],-1)),o("p",null,[t[1]||(t[1]=n("繼續上篇文章",-1)),r(e,{href:"http://linux.cn/article-2258-1.html"},{default:s(()=>[...t[0]||(t[0]=[n("11個鮮為人知的實用Linux命令",-1)])]),_:1}),t[2]||(t[2]=n("在本文中，我們將關注其他幾個不為人知的Linux命令，有些在管理桌面和服務器方面被證明是非常有用的。",-1))]),t[28]||(t[28]=o("p",null,[o("img",{src:"http://www.tecmint.com/wp-content/uploads/2013/10/10-Lesser-Known-Commands.png",alt:""})],-1)),t[29]||(t[29]=o("p",null,"###12. <空格> 命令###",-1)),t[30]||(t[30]=o("p",null,[n("你在終端上鍵入的每個命令都會記錄到"),o("strong",null,"history"),n("，也能用"),o("strong",null,"history"),n("命令重新調用。")],-1)),o("p",null,[t[4]||(t[4]=n("如何騙過",-1)),r(e,{href:"http://www.searchsv.com.cn/showcontent_77595.htm"},{default:s(()=>[...t[3]||(t[3]=[n("history 命令",-1)])]),_:1}),t[5]||(t[5]=n("呢？呵呵，你可以輕而易舉地做到。在終端，只需要在鍵入命令之前輸入一個或多個空格，這樣你的命令就不會被記錄了。",-1))]),t[31]||(t[31]=i(`<p>讓我們體驗一下吧，先在終端嘗試五個常見的 Linux 命令並在命令之前留個空(例如** ls, pwd, uname, echo “hi”** 和 <strong>who</strong>)，然後檢查這些命令是不是記錄在歷史中。</p><pre><code>avi@localhost:~$  ls
avi@localhost:~$  pwd
avi@localhost:~$  uname
avi@localhost:~$  echo “hi”
avi@localhost:~$  who
</code></pre><p>現在運行 <code>history</code> 命令來查看上面已執行的命令是否已經被記錄了.</p><pre><code>avi@localhost:~$ history
   40  cd /dev/ 
   41  ls 
   42  dd if=/dev/cdrom1 of=/home/avi/Desktop/squeeze.iso 
   43  ping www.google.com 
   44  su
</code></pre><p>你看到沒有最後執行的命令沒有被記錄。我們也可以用另一個命令<code>cat | bash</code>欺騙history，結果跟上面一樣。</p><h3 id="_13-stat-命令" tabindex="-1">13. stat 命令 <a class="header-anchor" href="#_13-stat-命令" aria-label="Permalink to “13. stat 命令”">​</a></h3><p>Linux中的<strong>stat</strong>命令用來顯示文件或文件系統的狀態信息。當用文件名作為參數時，<strong>stat</strong>將會展示文件的全部信息。狀態信息包括文件 <strong>大小、塊、權限、訪問時間、修改時間、狀態改變時間</strong>等。</p><pre><code>avi@localhost:~$ stat 34.odt 
  File: \`34.odt&#39;
  Size: 28822 	Blocks: 64 IO Block: 4096   regular file 
Device: 801h/2049d	Inode: 5030293 Links: 1 
Access: (0644/-rw-r--r--)  Uid: ( 1000/ avi)   Gid: ( 1000/ avi) 
Access: 2013-10-14 00:17:40.000000000 +0530 
Modify: 2013-10-01 15:20:17.000000000 +0530 
Change: 2013-10-01 15:20:17.000000000 +0530
</code></pre><h3 id="_14-alt-和-esc" tabindex="-1">14. &lt;alt&gt; + . 和 &lt;esc&gt; + . <a class="header-anchor" href="#_14-alt-和-esc" aria-label="Permalink to “14. &lt;alt&gt; + . 和 &lt;esc&gt; + .”">​</a></h3><p>上面的組合鍵事實上不是一個命令，而是傳遞最後一個命令參數到提示符後的快捷鍵，以輸入命令的倒序方式傳遞命令。按住 Alt或Esc再按一下 “.”。</p><h3 id="_15-pv-命令" tabindex="-1">15. pv 命令 <a class="header-anchor" href="#_15-pv-命令" aria-label="Permalink to “15. pv 命令”">​</a></h3><p>在<strong>電影</strong>裏尤其是<strong>好萊塢電影</strong>你可能已經看見過模擬文本了，像是在實時輸入文字，你可以用<strong>pv</strong>命令仿照任何類型模擬風的文本輸出，包括流水線輸出。<strong>pv</strong>可能沒有在你的系統上安裝，你需要用<strong>apt</strong>或<strong>yum</strong>獲取安裝包，然後安裝<strong>pv</strong>到你的機器。</p><pre><code>root@localhost:# echo &quot;Tecmint [dot] com is the world&#39;s best website for qualitative Linux article&quot; | pv -qL 20
</code></pre><p><strong>輸出樣式</strong></p><pre><code>Tecmint [dot] com is the world&#39;&#39;s best website for qualitative Linux article
</code></pre><h3 id="_16-mount-colum-t" tabindex="-1">16. mount | colum -t <a class="header-anchor" href="#_16-mount-colum-t" aria-label="Permalink to “16. mount | colum -t”">​</a></h3><p>上面的命令用一個很不錯的格式與規範列出了所有掛載文件系統。</p><pre><code>avi@localhost:~$ mount | column -t
</code></pre><p><strong>輸出樣式</strong></p><pre><code>/dev/sda1on  / type  ext3 (rw,errors=remount-ro) 
tmpfson  /lib/init/rw  type  tmpfs(rw,nosuid,mode=0755) 
proc on  /proc type  proc (rw,noexec,nosuid,nodev) 
sysfson  /sys  type  sysfs(rw,noexec,nosuid,nodev) 
udev on  /dev  type  tmpfs(rw,mode=0755) 
tmpfson  /dev/shm  type  tmpfs(rw,nosuid,nodev) 
devpts   on  /dev/pts  type  devpts   (rw,noexec,nosuid,gid=5,mode=620) 
fusectl  on  /sys/fs/fuse/connections  type  fusectl  (rw) 
binfmt_misc  on  /proc/sys/fs/binfmt_misc  type  binfmt_misc  (rw,noexec,nosuid,nodev) 
nfsd on  /proc/fs/nfsd type  nfsd (rw)
</code></pre><h3 id="_17-ctr-l-命令" tabindex="-1">17. Ctr+l 命令 <a class="header-anchor" href="#_17-ctr-l-命令" aria-label="Permalink to “17. Ctr+l 命令”">​</a></h3><p>在進行下一步之前，我先問一下，你是如何清理你的終端？呵呵，你會在提示符後鍵入 “<strong>clear</strong>”。好的。用上面的命令執行清理終端都將成為過去。你只需要按下<strong>Ctr+l</strong>，看看它如何立即清理你的終端。</p><h3 id="_18-curl-命令" tabindex="-1">18. curl 命令 <a class="header-anchor" href="#_18-curl-命令" aria-label="Permalink to “18. curl 命令”">​</a></h3><p>在<strong>命令列</strong>下如何檢查你的<strong>未讀郵件</strong>？這個命令對於工作在沒有圖形界面的服務器的人佷有用。它會在運行期間再次要求輸入密碼，你不需要在上面一行硬編碼你的密碼，否則會有其它安全風險。</p><pre><code>avi@localhost:~$ curl -u avishek1210@gmail.com --silent &quot;https://mail.google.com/mail/feed/atom&quot; | perl -ne &#39;print \\t if //; print &quot;$2\\n&quot; if /&lt;(title|name)&gt;(.*)&lt;\\/\\1&gt;/;&#39;
</code></pre><p><strong>輸出樣式</strong></p><pre><code>Enter host password for user &#39;avishek1210@gmail.com&#39;: 
Gmail - Inbox for avishek1210@gmail.com 
People offering cars in Delhi - Oct 26 
	Quikr Alerts 
another dependency question 
	Chris Bannister 
	Ralf Mardorf 
	Reco 
	Brian 
	François Patte 
	Curt 
	Siard 
	berenger.morel 
Hi Avishek - Download your Free MBA Brochure Now... 
	Diya 
★Top Best Sellers Of The Week, Take Your Pick★ 
	Timesdeal 
aptitude misconfigure? 
	Glenn English 
Choosing Debian version or derivative to run Wine when resource poor 
	Chris Bannister 
	Zenaan Harkness 
	Curt 
	Tom H 
	Richard Owlett 
	Ralf Mardorf 
	Rob Owens
</code></pre><h3 id="_19-screen-命令" tabindex="-1">19.screen 命令 <a class="header-anchor" href="#_19-screen-命令" aria-label="Permalink to “19.screen 命令”">​</a></h3><p><strong>screen</strong>命令能斷開一個會話下的一個長時間運行的進程並能再次連接，如有需要，也提供了靈活的命令選項</p><p>要運行一個長時間的進程，我們通常執行</p><pre><code>avi@localhost:~$ ./long-unix-script.sh
</code></pre><p>缺乏靈活性，需要用户持續當前的會話，但是如果我們執行上面的命令是：</p><pre><code>avi@localhost:~$ screen ./long-unix-script.sh
</code></pre><p>它能在不同會話間斷開或重連。當一個命令正在執行時按“<strong>Ctrl + A</strong>”然後再按“<strong>d</strong>”來<strong>斷開</strong>。</p><p>重新連接運行：</p><pre><code>avi@localhost:~$ screen -r 4980.pts-0.localhost
</code></pre>`,36)),o("p",null,[t[7]||(t[7]=o("strong",null,"註解",-1)),t[8]||(t[8]=n("：在這裏，這個命令的稍後的部分是",-1)),t[9]||(t[9]=o("strong",null,"screen id",-1)),t[10]||(t[10]=n("，你能用‘",-1)),t[11]||(t[11]=o("strong",null,"screen -ls",-1)),t[12]||(t[12]=n("’命令查看。欲瞭解更多關於",-1)),t[13]||(t[13]=o("strong",null,"screen命令",-1)),t[14]||(t[14]=n("和它們的用法，請閲讀我們的一些幫助文章：",-1)),r(e,{href:"http://www.tecmint.com/screen-command-examples-to-manage-linux-terminals/"},{default:s(()=>[...t[6]||(t[6]=[n("10 個screen命令的示例",-1)])]),_:1}),t[15]||(t[15]=n("。",-1))]),t[32]||(t[32]=i(`<h3 id="_20-file" tabindex="-1">20. file <a class="header-anchor" href="#_20-file" aria-label="Permalink to “20. file”">​</a></h3><p>No!寫上面的命令不是筆誤. ‘<strong>file</strong>’是一個能提供關於文件類型信息的命令。</p><pre><code>avi@localhost:~$ file 34.odt
34.odt: OpenDocument Text
</code></pre><h3 id="_21-id" tabindex="-1">21. id <a class="header-anchor" href="#_21-id" aria-label="Permalink to “21. id”">​</a></h3><p>上面的命令會打印真正的和有效的<strong>用户</strong>和<strong>組</strong>的id。</p><pre><code>avi@localhost:~$ id
</code></pre><p><strong>輸出樣式</strong></p><pre><code>uid=1000(avi) gid=1000(avi) 
groups=1000(avi),24(cdrom),25(floppy),29(audio),30(dip),44(video),46(plugdev),109(netdev),111(bluetooth),117(scanner)
</code></pre><p>到此為止，鑑於這個系列的最新的這篇文章的成功，我將會盡快推出另外幾部分文章繼續<strong>鮮為人知的Linux命令</strong>。到時候，敬請關注Tecmint.不要忘記給我們提供你的<strong>反饋</strong>和<strong>評論</strong>。</p><hr>`,10)),o("p",null,[t[17]||(t[17]=n("via: ",-1)),r(e,{href:"http://www.tecmint.com/10-lesser-known-linux-commands-part-2/"},{default:s(()=>[...t[16]||(t[16]=[n("http://www.tecmint.com/10-lesser-known-linux-commands-part-2/",-1)])]),_:1})]),o("p",null,[t[20]||(t[20]=n("譯者：",-1)),r(e,{href:"https://github.com/Luoxcat"},{default:s(()=>[...t[18]||(t[18]=[n("Luoxcat",-1)])]),_:1}),t[21]||(t[21]=n(" 校對：",-1)),r(e,{href:"https://github.com/wxy"},{default:s(()=>[...t[19]||(t[19]=[n("wxy",-1)])]),_:1})]),o("p",null,[t[24]||(t[24]=n("本文由 ",-1)),r(e,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[22]||(t[22]=[n("LCTT",-1)])]),_:1}),t[25]||(t[25]=n(" 原創翻譯，",-1)),r(e,{href:"http://linux.cn/"},{default:s(()=>[...t[23]||(t[23]=[n("Linux中國",-1)])]),_:1}),t[26]||(t[26]=n(" 榮譽推出",-1))])])}const b=l(u,[["render",m]]);export{T as __pageData,b as default};
