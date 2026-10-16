import{_ as r,a0 as s,w as i,s as p,ao as d,I as l,x as n,a1 as e,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const M=JSON.parse('{"title":"Linux內置的審計跟蹤工具 -  last命令 | LCTT x X-CMD","titleTemplate":false,"description":"Linux內置的審計跟蹤工具 -  last命令 | LCTT (201402) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux內置的審計跟蹤工具 -  last命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux內置的審計跟蹤工具 -  last命令 | LCTT (201402) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201402/Built in Audit Trail Tool – Last Command in Linux","title":"Linux內置的審計跟蹤工具 -  last命令","tag":"201402","desc":""},"relativePath":"201402/Built in Audit Trail Tool – Last Command in Linux.md","filePath":"[post].md"}'),g={name:"201402/Built in Audit Trail Tool – Last Command in Linux.md"};function m(c,t,h,u,b,x){const o=s("Link");return i(),p("div",null,[t[11]||(t[11]=d(`<h1 id="linux內置的審計跟蹤工具-last命令" tabindex="-1">Linux內置的審計跟蹤工具 - last命令 <a class="header-anchor" href="#linux內置的審計跟蹤工具-last命令" aria-label="Permalink to “Linux內置的審計跟蹤工具 -  last命令”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/12/linux-last-command.jpg" alt=""></p><p>如果你是一個服務器管理員，你或許知道你要保護你的服務器的話，不僅是從外部，還要從內部保護。linux有一個內置工具來看到最後登陸服務器的用户，可以幫助你保護服務器。</p><p>這個命令是<strong>last</strong>。它<strong>對於追蹤非常有用</strong>。讓我們來看一下last可以為你做些什麼。</p><h3 id="last命令的功能是什麼" tabindex="-1">last命令的功能是什麼 <a class="header-anchor" href="#last命令的功能是什麼" aria-label="Permalink to “last命令的功能是什麼”">​</a></h3><p><strong>last</strong>顯示的是自<strong>/var/log/wtmp</strong>文件創建起所有登錄(和登出)的用户。這個文件是二進制文件，它不能被文本編輯器瀏覽，比如vi、Joe或者其他軟件。這是非常有用的，因為用户(或者root)不能像他們希望的那樣修改這個文件。</p><p>last會給出所有已登錄用户的用户名、tty、IP地址(如果用户是遠程連接的話)、日期-時間和用户已經登錄的時間。</p><h3 id="如何運行last" tabindex="-1">如何運行last <a class="header-anchor" href="#如何運行last" aria-label="Permalink to “如何運行last”">​</a></h3><p>你只要在控制台中輸入<strong>last</strong>即可。這是個例子：</p><pre><code>$ last

leni pts/0 10.0.76.162 Mon Dec 2 12:32 - 13:25 (00:53)
pungki tty1 Mon Dec 2 09:31 still logged in
reboot system boot 2.6.32-358.23.2 Mon Dec 2 09:20 - 13:25 (04:05) 
</code></pre><p>這裏是如何閲讀last信息：</p><ul><li><p>第一列告訴誰是用户</p></li><li><p>第二列給出了用户如何連接的信息</p><ul><li><p>pts/0 (偽終端) 意味着從諸如SSH或telnet的遠程連接的用户</p></li><li><p>tty (teletypewriter) 意味着直接連接到計算機或者本地連接的用户</p></li><li><p>除了重啓活動,所有狀態會在啓動時顯示</p></li></ul></li><li><p>第三列<strong>顯示用户來自哪裏</strong>。如果用户來自於遠程計算機，你會看到一個主機名或者IP地址。如果你看見:0.0 或者什麼都沒有，這意味着用户通過本地終端連接。除了重啓活動，內核版本會顯示在狀態中。</p></li><li><p>剩下的列顯示<strong>日誌活動發生在何時</strong>。括號中的數字告訴我們連接持續了多少小時和分鐘。</p></li></ul><h3 id="日常操作中last的一些示例" tabindex="-1">日常操作中last的一些示例 <a class="header-anchor" href="#日常操作中last的一些示例" aria-label="Permalink to “日常操作中last的一些示例”">​</a></h3><h4 id="限制顯示行的數目" tabindex="-1">限制顯示行的數目 <a class="header-anchor" href="#限制顯示行的數目" aria-label="Permalink to “限制顯示行的數目”">​</a></h4><p>當你有很多行要顯示時,你可以限制你想看到的行的數目.使用 <strong>-n 參數</strong>來這麼做。</p><pre><code>$ last -n 3

leni pts/0 10.0.76.162 Mon Dec 2 12:32 - 13:25 (00:53)
pungki tty1 Mon Dec 2 09:31 still logged in
reboot system boot 2.6.32-358.23.2 Mon Dec 2 09:20 - 13:25 (04:05)
</code></pre><p><strong>-n</strong> 參數會使last顯示從當前時間到以後的3條記錄。</p><h4 id="不顯示主機名" tabindex="-1">不顯示主機名 <a class="header-anchor" href="#不顯示主機名" aria-label="Permalink to “不顯示主機名”">​</a></h4><p>使用 <strong>-R</strong> 參數來這麼做。這裏是例子 :</p><pre><code>$ last -R

leni pts/0 Mon Dec 2 12:32 - 13:25 (00:53)
pungki tty1 Mon Dec 2 09:31 still logged in
reboot system boot Mon Dec 2 09:20 - 13:25 (04:05)
</code></pre><p>如你所見,現在在也沒有關於主機或者IP地址的信息了。</p><h4 id="最後一列顯示主機名" tabindex="-1">最後一列顯示主機名 <a class="header-anchor" href="#最後一列顯示主機名" aria-label="Permalink to “最後一列顯示主機名”">​</a></h4><p>要這麼做,我們使用 <strong>-a</strong>參數</p><pre><code>$ last -a

leni pts/0 Mon Dec 2 12:32 - 13:25 (00:53) 10.0.76.162
pungki tty1 Mon Dec 2 09:31 still logged in :0.0
reboot system boot Mon Dec 2 09:20 - 13:25 (04:05) 2.6.32-358.23.2.el6.i686
</code></pre><p>現在主機信息諸如10.0.76.162 會放在最後一列。</p><h4 id="顯示完整登入登出時間日期" tabindex="-1">顯示完整登入登出時間日期 <a class="header-anchor" href="#顯示完整登入登出時間日期" aria-label="Permalink to “顯示完整登入登出時間日期”">​</a></h4><p>對於此,你可以使用 <strong>-F</strong> 參數。這個是個示例:</p><pre><code>$ last -F

leni pts/0 10.0.76.162 Mon Dec 2 12:32:24 2013 – Mon Dec 2013 13:25:24 2013 (00:53)
</code></pre><h4 id="打印特定的用户名" tabindex="-1">打印特定的用户名 <a class="header-anchor" href="#打印特定的用户名" aria-label="Permalink to “打印特定的用户名”">​</a></h4><p>如果你想要追蹤特定的用户,你可以特別打印它。在last命令後面輸入用户名。</p><pre><code>$ last leni

leni tty1 Mon Dec 2 18-42 still logged in
leni pts/0 Mon Dec 2 12:32 - 13:25 (00:53) 10.0.76.162
</code></pre><p>或者你想要知道<strong>reboot</strong>何時完成，你也可以這樣顯示它：</p><pre><code>$ last reboot

reboot system boot Mon Dec 2 09:20 - 16:55 (07:34)
reboot system boot Sun Dec 1 04:26 - 04:27 (00:01)
reboot system boot Wed Nov 27 20:27 - 01:24 (04:57)
reboot system boot Tue Nov 26 21:06 - 06:13 (09:06)
</code></pre><h4 id="打印特定-pts" tabindex="-1">打印特定 / pts <a class="header-anchor" href="#打印特定-pts" aria-label="Permalink to “打印特定 / pts”">​</a></h4><p>last同樣可以打印特定tty/pts的信息. 只要在last命令後面輸入tty名字或者pty名字。</p><p>這裏有一些例子:</p><pre><code>$ last tty1

pungki tty1 Mon Dec 2 09:31 still logged in
pungki tty1 Mon Dec 2 04:26 – down (00:00)
pungki tty1 Mon Dec 2 04:07 – down (00:00)
pungki tty1 Sun Dec 1 18:55 – 04:07 (09:12)

$ last pts/0

leni pts/0 10.0.76.162 Mon Dec 2 12:32 - 13:25 (00:53)
pungki pts/0 :0.0 Wed Nov 27 20:28 – down (04:56)
</code></pre><p>當你看到 <strong>down 的值</strong> - 比如上面的第二行,它意味着用户從某個時間登錄直到系統重啓或關機。</p><h4 id="使用另一個文件而不是-var-log-wtmp" tabindex="-1">使用另一個文件而不是 /var/log/wtmp <a class="header-anchor" href="#使用另一個文件而不是-var-log-wtmp" aria-label="Permalink to “使用另一個文件而不是 /var/log/wtmp”">​</a></h4><p>默認上，last命令會從<strong>/var/log/wtmp</strong>中解析信息。如果你想要<strong>last命令</strong>從另外一個文件解析，你可以使用<strong>-f</strong> 參數。比如，當日志切割後，讓我們假設切割後，之前的文件名變為<strong>/var/log/wtmp.1</strong>。那麼last命令會像這樣。</p><pre><code>$ last -f /var/log/wtmp.1
</code></pre><h4 id="顯示運行級別改變" tabindex="-1">顯示運行級別改變 <a class="header-anchor" href="#顯示運行級別改變" aria-label="Permalink to “顯示運行級別改變”">​</a></h4><p>這裏有個<strong>-x</strong>參數來顯示運行級別。這裏示例輸出:</p><pre><code>pungki tty1 Mon Dec 2 19:21 still logged in
runlevel (to lvl 3) 2.6.32-358.23.2 Mon Dec 2 19:20 – 19:29 (00:08)
reboot system boot 2.6.32-358.23.2 Mon Dec 2 19:20 – 19:29 (00:08)
shutdown system down 2.6.32-358.23.2 Mon Dec 2 18:56 – 19:20 (00:23)
runlevel (to lvl 0) 2.6.32-358.23.2 Mon Dec 2 18:56 – 18:56 (00:00)
leni tty1 Mon Dec 2 18:42 – down (00:00) 
</code></pre><p>你可以看到這裏有兩個運行級別。運行級別<strong>to lvl 3</strong>的條目意味着系統運行在完整的控制台模式，而沒在X window或者GUI中。同時,當系統<strong>關機</strong>時，實際上是切換為<strong>運行級別0</strong>，這就是為什麼last會顯示<strong>to lvl 0</strong>。</p><h4 id="查看失敗登錄" tabindex="-1">查看失敗登錄 <a class="header-anchor" href="#查看失敗登錄" aria-label="Permalink to “查看失敗登錄”">​</a></h4><p><strong>last</strong>命令用了記錄成功登錄，而 <strong>lastb</strong> 命令<strong>記錄失敗的登錄嘗試</strong>。你<strong>必須擁有root</strong>權限才能運行lastb命令。這裏有一個lastb命令的示例輸出。lastb會解析/var/log/btmp的信息。</p><pre><code># lastb

leni tty1 Mon Dec 2 22:12 – 22:12 (00:00)
rahma tty1 Mon Dec 2 22:11 – 22:11 (00:00) 
</code></pre><h4 id="切割日誌" tabindex="-1">切割日誌 <a class="header-anchor" href="#切割日誌" aria-label="Permalink to “切割日誌”">​</a></h4><p>因為*/var/log/wtmp<strong>記錄每次的登錄活動，文件的大小可能會快速地增長。默認上，Linux會每月</strong>切割 /var/log/wtmp/<strong>。切割的策略放在/etc/logrotate.conf 文件中。這裏是我</strong>/etc/logrotate.conf**文件的內容。</p><pre><code>/var/log/wtmp {
　　monthly
　　create 0664 root umtp
　　minsize 1M
　　rotate 1
}
</code></pre><p>對於 <strong>/var/log/btmp</strong>, 這裏是默認的倒換活動配置</p><pre><code>/var/log/btmp {
　　missingok
　　monthly
　　create 0600 root umtp
　　minsize 1M
　　rotate 1
}
</code></pre><p>你可以根據需要自己修改。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>你可以結合這些參數來自定義last和lastb的輸出。所有可以<strong>運行於last命令</strong>的參數都<strong>可運行在</strong>lastb命令上。更多細節,請通過在控制台輸入<strong>man last</strong>來訪問。</p><hr>`,57)),l("p",null,[t[1]||(t[1]=n("via: ",-1)),e(o,{href:"http://linoxide.com/linux-command/linux-last-command/"},{default:a(()=>[...t[0]||(t[0]=[n("http://linoxide.com/linux-command/linux-last-command/",-1)])]),_:1})]),l("p",null,[t[4]||(t[4]=n("譯者：",-1)),e(o,{href:"https://github.com/geekpi"},{default:a(()=>[...t[2]||(t[2]=[n("geekpi",-1)])]),_:1}),t[5]||(t[5]=n(" 校對：",-1)),e(o,{href:"https://github.com/wxy"},{default:a(()=>[...t[3]||(t[3]=[n("wxy",-1)])]),_:1})]),l("p",null,[t[8]||(t[8]=n("本文由 ",-1)),e(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[6]||(t[6]=[n("LCTT",-1)])]),_:1}),t[9]||(t[9]=n(" 原創翻譯，",-1)),e(o,{href:"http://linux.cn/"},{default:a(()=>[...t[7]||(t[7]=[n("Linux中國",-1)])]),_:1}),t[10]||(t[10]=n(" 榮譽推出",-1))])])}const y=r(g,[["render",m]]);export{M as __pageData,y as default};
