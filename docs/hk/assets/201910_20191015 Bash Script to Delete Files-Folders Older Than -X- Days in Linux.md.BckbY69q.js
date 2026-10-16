import{_ as i,a0 as o,w as r,s as d,I as n,x as a,a1 as e,A as t,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"在 Linux 中使用 Bash 腳本刪除早於 “X” 天的文件/文件夾 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中使用 Bash 腳本刪除早於 “X” 天的文件/文件夾 | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中使用 Bash 腳本刪除早於 “X” 天的文件/文件夾 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中使用 Bash 腳本刪除早於 “X” 天的文件/文件夾 | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20191015 Bash Script to Delete Files-Folders Older Than -X- Days in Linux","title":"在 Linux 中使用 Bash 腳本刪除早於 “X” 天的文件/文件夾","tag":"201910","desc":""},"relativePath":"201910/20191015 Bash Script to Delete Files-Folders Older Than -X- Days in Linux.md","filePath":"[post].md"}'),c={name:"201910/20191015 Bash Script to Delete Files-Folders Older Than -X- Days in Linux.md"};function g(u,s,h,k,w,f){const p=o("Link");return r(),d("div",null,[s[32]||(s[32]=n("h1",{id:"在-linux-中使用-bash-腳本刪除早於-x-天的文件-文件夾",tabindex:"-1"},[a("在 Linux 中使用 Bash 腳本刪除早於 “X” 天的文件/文件夾 "),n("a",{class:"header-anchor",href:"#在-linux-中使用-bash-腳本刪除早於-x-天的文件-文件夾","aria-label":"Permalink to “在 Linux 中使用 Bash 腳本刪除早於 “X” 天的文件/文件夾”"},"​")],-1)),n("p",null,[e(p,{href:"https://www.2daygeek.com/linux-check-disk-usage-files-and-directories-folders-size-du-command/"},{default:t(()=>[...s[0]||(s[0]=[a("磁盤使用率",-1)])]),_:1}),s[2]||(s[2]=a(" 監控工具能夠在達到給定閾值時提醒我們。但它們無法自行解決 ",-1)),e(p,{href:"https://www.2daygeek.com/linux-check-disk-space-usage-df-command/"},{default:t(()=>[...s[1]||(s[1]=[a("磁盤使用率",-1)])]),_:1}),s[3]||(s[3]=a(" 問題。需要手動干預才能解決該問題。",-1))]),s[33]||(s[33]=n("p",null,"如果你想完全自動化此類操作，你會做什麼。是的，可以使用 bash 腳本來完成。",-1)),n("p",null,[s[5]||(s[5]=a("該腳本可防止來自 ",-1)),e(p,{href:"https://www.2daygeek.com/category/monitoring-tools/"},{default:t(()=>[...s[4]||(s[4]=[a("監控工具",-1)])]),_:1}),s[6]||(s[6]=a(" 的警報，因為我們會在填滿磁盤空間之前刪除舊的日誌文件。",-1))]),s[34]||(s[34]=n("p",null,"我們過去做了很多 shell 腳本。如果要查看，請進入下面的鏈接。",-1)),n("ul",null,[n("li",null,[e(p,{href:"https://www.2daygeek.com/category/shell-script/"},{default:t(()=>[...s[7]||(s[7]=[a("如何使用 shell 腳本自動化日常活動？",-1)])]),_:1})])]),s[35]||(s[35]=l(`<p>我在本文中添加了兩個 bash 腳本，它們有助於清除舊日誌。</p><h3 id="_1-在-linux-中刪除早於-x-天的文件夾的-bash-腳本" tabindex="-1">1）在 Linux 中刪除早於 “X” 天的文件夾的 Bash 腳本 <a class="header-anchor" href="#_1-在-linux-中刪除早於-x-天的文件夾的-bash-腳本" aria-label="Permalink to “1）在 Linux 中刪除早於 “X” 天的文件夾的 Bash 腳本”">​</a></h3><p>我們有一個名為 <code>/var/log/app/</code> 的文件夾，其中包含 15 天的日誌，我們將刪除早於 10 天的文件夾。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -lh /var/log/app/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct  1 23:52 app_log.01</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct  2 23:52 app_log.02</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct  3 23:52 app_log.03</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct  4 23:52 app_log.04</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct  5 23:52 app_log.05</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct  6 23:54 app_log.06</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct  7 23:53 app_log.07</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct  8 23:51 app_log.08</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct  9 23:52 app_log.09</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct 10 23:52 app_log.10</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct 11 23:52 app_log.11</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct 12 23:52 app_log.12</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct 13 23:52 app_log.13</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct 14 23:52 app_log.14</span></span>
<span class="line"><span>drwxrw-rw- 3 root root  24K Oct 15 23:52 app_log.15</span></span></code></pre></div><p>該腳本將刪除早於 10 天的文件夾，並通過郵件發送文件夾列表。</p><p>你可以根據需要修改 <code>-mtime X</code> 的值。另外，請替換你的電子郵箱，而不是用我們的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># /opt/script/delete-old-folders.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>prev_count=0</span></span>
<span class="line"><span>fpath=/var/log/app/app_log.*</span></span>
<span class="line"><span>find $fpath -type d -mtime +10  -exec ls -ltrh {} \\; &gt; /tmp/folder.out</span></span>
<span class="line"><span>find $fpath -type d -mtime +10  -exec rm -rf {} \\;</span></span>
<span class="line"><span>count=$(cat /tmp/folder.out | wc -l)</span></span>
<span class="line"><span>if [ &quot;$prev_count&quot; -lt &quot;$count&quot; ] ; then</span></span>
<span class="line"><span>MESSAGE=&quot;/tmp/file1.out&quot;</span></span>
<span class="line"><span>TO=&quot;[email protected]&quot;</span></span>
<span class="line"><span>echo &quot;Application log folders are deleted older than 15 days&quot; &gt;&gt; $MESSAGE</span></span>
<span class="line"><span>echo &quot;+----------------------------------------------------+&quot; &gt;&gt; $MESSAGE</span></span>
<span class="line"><span>echo &quot;&quot; &gt;&gt; $MESSAGE</span></span>
<span class="line"><span>cat /tmp/folder.out | awk &#39;{print $6,$7,$9}&#39; &gt;&gt; $MESSAGE</span></span>
<span class="line"><span>echo &quot;&quot; &gt;&gt; $MESSAGE</span></span>
<span class="line"><span>SUBJECT=&quot;WARNING: Apache log files are deleted older than 15 days $(date)&quot;</span></span>
<span class="line"><span>mail -s &quot;$SUBJECT&quot; &quot;$TO&quot; &lt; $MESSAGE</span></span>
<span class="line"><span>rm $MESSAGE /tmp/folder.out</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>給 <code>delete-old-folders.sh</code> 設置可執行權限。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># chmod +x /opt/script/delete-old-folders.sh</span></span></code></pre></div>`,9)),n("p",null,[s[9]||(s[9]=a("最後添加一個 ",-1)),e(p,{href:"https://www.2daygeek.com/crontab-cronjob-to-schedule-jobs-in-linux/"},{default:t(()=>[...s[8]||(s[8]=[a("cronjob",-1)])]),_:1}),s[10]||(s[10]=a(" 自動化此任務。它於每天早上 7 點運行。",-1))]),s[36]||(s[36]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># crontab -e</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0 7 * * * /bin/bash /opt/script/delete-old-folders.sh</span></span></code></pre></div><p>你將看到類似下面的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Application log folders are deleted  older than 20 days</span></span>
<span class="line"><span>+--------------------------------------------------------+</span></span>
<span class="line"><span>Oct 11 /var/log/app/app_log.11</span></span>
<span class="line"><span>Oct 12 /var/log/app/app_log.12</span></span>
<span class="line"><span>Oct 13 /var/log/app/app_log.13</span></span>
<span class="line"><span>Oct 14 /var/log/app/app_log.14</span></span>
<span class="line"><span>Oct 15 /var/log/app/app_log.15</span></span></code></pre></div><h3 id="_2-在-linux-中刪除早於-x-天的文件的-bash-腳本" tabindex="-1">2）在 Linux 中刪除早於 “X” 天的文件的 Bash 腳本 <a class="header-anchor" href="#_2-在-linux-中刪除早於-x-天的文件的-bash-腳本" aria-label="Permalink to “2）在 Linux 中刪除早於 “X” 天的文件的 Bash 腳本”">​</a></h3><p>我們有一個名為 <code>/var/log/apache/</code> 的文件夾，其中包含15天的日誌，我們將刪除 10 天前的文件。</p><p>以下文章與該主題相關，因此你可能有興趣閲讀。</p>`,6)),n("ul",null,[n("li",null,[e(p,{href:"https://www.2daygeek.com/how-to-find-and-delete-files-older-than-x-days-and-x-hours-in-linux/"},{default:t(()=>[...s[11]||(s[11]=[a("如何在 Linux 中查找和刪除早於 “X” 天和 “X” 小時的文件？",-1)])]),_:1})]),n("li",null,[e(p,{href:"https://www.2daygeek.com/check-find-recently-modified-files-folders-linux/"},{default:t(()=>[...s[12]||(s[12]=[a("如何在 Linux 中查找最近修改的文件/文件夾",-1)])]),_:1})]),n("li",null,[e(p,{href:"https://www.2daygeek.com/automatically-delete-clean-up-tmp-directory-folder-contents-in-linux/"},{default:t(()=>[...s[13]||(s[13]=[a("如何在 Linux 中自動刪除或清理 /tmp 文件夾內容？",-1)])]),_:1})])]),s[37]||(s[37]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ls -lh /var/log/apache/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct  1 23:52 2daygeek_access.01</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct  2 23:52 2daygeek_access.02</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct  3 23:52 2daygeek_access.03</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct  4 23:52 2daygeek_access.04</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct  5 23:52 2daygeek_access.05</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct  6 23:54 2daygeek_access.06</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct  7 23:53 2daygeek_access.07</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct  8 23:51 2daygeek_access.08</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct  9 23:52 2daygeek_access.09</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct 10 23:52 2daygeek_access.10</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct 11 23:52 2daygeek_access.11</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct 12 23:52 2daygeek_access.12</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct 13 23:52 2daygeek_access.13</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct 14 23:52 2daygeek_access.14</span></span>
<span class="line"><span>-rw-rw-rw- 3 root root  24K Oct 15 23:52 2daygeek_access.15</span></span></code></pre></div><p>該腳本將刪除 10 天前的文件並通過郵件發送文件夾列表。</p><p>你可以根據需要修改 <code>-mtime X</code> 的值。另外，請替換你的電子郵箱，而不是用我們的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># /opt/script/delete-old-files.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>prev_count=0</span></span>
<span class="line"><span>fpath=/var/log/apache/2daygeek_access.*</span></span>
<span class="line"><span>find $fpath -type f -mtime +15  -exec ls -ltrd {} \\; &gt; /tmp/file.out</span></span>
<span class="line"><span>find $fpath -type f -mtime +15  -exec rm -rf {} \\;</span></span>
<span class="line"><span>count=$(cat /tmp/file.out | wc -l)</span></span>
<span class="line"><span>if [ &quot;$prev_count&quot; -lt &quot;$count&quot; ] ; then</span></span>
<span class="line"><span>MESSAGE=&quot;/tmp/file1.out&quot;</span></span>
<span class="line"><span>TO=&quot;[email protected]&quot;</span></span>
<span class="line"><span>echo &quot;Apache Access log files are deleted older than 20 days&quot;  &gt;&gt; $MESSAGE</span></span>
<span class="line"><span>echo &quot;+--------------------------------------------- +&quot; &gt;&gt; $MESSAGE</span></span>
<span class="line"><span>echo &quot;&quot; &gt;&gt; $MESSAGE</span></span>
<span class="line"><span>cat /tmp/file.out | awk &#39;{print $6,$7,$9}&#39; &gt;&gt; $MESSAGE</span></span>
<span class="line"><span>echo &quot;&quot; &gt;&gt; $MESSAGE</span></span>
<span class="line"><span>SUBJECT=&quot;WARNING: Apache log folders are deleted older than 15 days $(date)&quot;</span></span>
<span class="line"><span>mail -s &quot;$SUBJECT&quot; &quot;$TO&quot; &lt; $MESSAGE</span></span>
<span class="line"><span>rm $MESSAGE /tmp/file.out</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>給 <code>delete-old-files.sh</code> 設置可執行權限。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># chmod +x /opt/script/delete-old-files.sh</span></span></code></pre></div>`,6)),n("p",null,[s[15]||(s[15]=a("最後添加一個 ",-1)),e(p,{href:"https://www.2daygeek.com/crontab-cronjob-to-schedule-jobs-in-linux/"},{default:t(()=>[...s[14]||(s[14]=[a("cronjob",-1)])]),_:1}),s[16]||(s[16]=a(" 自動化此任務。它於每天早上 7 點運行。",-1))]),s[38]||(s[38]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># crontab -e</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0 7 * * * /bin/bash /opt/script/delete-old-folders.sh</span></span></code></pre></div><p>你將看到類似下面的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Apache Access log files are deleted older than 20 days</span></span>
<span class="line"><span>+--------------------------------------------------------+</span></span>
<span class="line"><span>Oct 11 /var/log/apache/2daygeek_access.11</span></span>
<span class="line"><span>Oct 12 /var/log/apache/2daygeek_access.12</span></span>
<span class="line"><span>Oct 13 /var/log/apache/2daygeek_access.13</span></span>
<span class="line"><span>Oct 14 /var/log/apache/2daygeek_access.14</span></span>
<span class="line"><span>Oct 15 /var/log/apache/2daygeek_access.15</span></span></code></pre></div><hr>`,4)),n("p",null,[s[18]||(s[18]=a("via: ",-1)),e(p,{href:"https://www.2daygeek.com/bash-script-to-delete-files-folders-older-than-x-days-in-linux/"},{default:t(()=>[...s[17]||(s[17]=[a("https://www.2daygeek.com/bash-script-to-delete-files-folders-older-than-x-days-in-linux/",-1)])]),_:1})]),n("p",null,[s[23]||(s[23]=a("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/magesh/"},{default:t(()=>[...s[19]||(s[19]=[a("Magesh Maruthamuthu",-1)])]),_:1}),s[24]||(s[24]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[20]||(s[20]=[a("lujun9972",-1)])]),_:1}),s[25]||(s[25]=a(" 譯者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:t(()=>[...s[21]||(s[21]=[a("geekpi",-1)])]),_:1}),s[26]||(s[26]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[22]||(s[22]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[29]||(s[29]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[27]||(s[27]=[a("LCTT",-1)])]),_:1}),s[30]||(s[30]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:t(()=>[...s[28]||(s[28]=[a("Linux中國",-1)])]),_:1}),s[31]||(s[31]=a(" 榮譽推出",-1))])])}const y=i(c,[["render",g]]);export{x as __pageData,y as default};
