import{_ as s,a0 as p,w as a,s as u,I as n,x as e,a1 as l,A as i,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"RHCE 系列（四）： 使用 Shell 腳本自動化 Linux 系統維護任務 | LCTT x X-CMD","titleTemplate":false,"description":"RHCE 系列（四）： 使用 Shell 腳本自動化 Linux 系統維護任務 | LCTT (RHCE) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RHCE 系列（四）： 使用 Shell 腳本自動化 Linux 系統維護任務 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RHCE 系列（四）： 使用 Shell 腳本自動化 Linux 系統維護任務 | LCTT (RHCE) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"RHCE/Part 4 - Using Shell Scripting to Automate Linux System Maintenance Tasks","title":"RHCE 系列（四）： 使用 Shell 腳本自動化 Linux 系統維護任務","tag":"RHCE","desc":""},"relativePath":"RHCE/Part 4 - Using Shell Scripting to Automate Linux System Maintenance Tasks.md","filePath":"[post].md"}'),m={name:"RHCE/Part 4 - Using Shell Scripting to Automate Linux System Maintenance Tasks.md"};function d(h,t,g,E,f,S){const o=p("Link");return a(),u("div",null,[t[33]||(t[33]=n("h1",{id:"rhce-系列-四-使用-shell-腳本自動化-linux-系統維護任務",tabindex:"-1"},[e("RHCE 系列（四）： 使用 Shell 腳本自動化 Linux 系統維護任務 "),n("a",{class:"header-anchor",href:"#rhce-系列-四-使用-shell-腳本自動化-linux-系統維護任務","aria-label":"Permalink to “RHCE 系列（四）： 使用 Shell 腳本自動化 Linux 系統維護任務”"},"​")],-1)),t[34]||(t[34]=n("p",null,"之前我聽説高效的系統管理員的一個特點是懶惰。一開始看起來很矛盾，但作者接下來解釋了其中的原因：",-1)),t[35]||(t[35]=n("p",null,[n("img",{src:"http://www.tecmint.com/wp-content/uploads/2015/08/Automate-Linux-System-Maintenance-Tasks.png",alt:"自動化 Linux 系統維護任務"})],-1)),t[36]||(t[36]=n("p",null,[n("em",null,"RHCE 系列：第四部分 - 自動化 Linux 系統維護任務")],-1)),n("p",null,[t[1]||(t[1]=e("如果一個系統管理員花費大量的時間解決問題以及做重複的工作，你就應該懷疑他這麼做是否正確。換句話説，一個高效的系統管理員/工程師應該制定一個計劃使得其儘量花費少的時間去做重複的工作，以及通過使用本系列中第三部分 ",-1)),l(o,{href:"https://linux.cn/article-6512-1.html"},{default:i(()=>[...t[0]||(t[0]=[e("使用 Linux 工具集監視系統活動報告",-1)])]),_:1}),t[2]||(t[2]=e(" 介紹的工具來預見問題。因此，儘管看起來他/她沒有做很多的工作，但那是因為 shell 腳本幫助完成了他的/她的大部分任務，這也就是本章我們將要探討的東西。",-1))]),t[37]||(t[37]=n("h3",{id:"什麼是-shell-腳本",tabindex:"-1"},[e("什麼是 shell 腳本？ "),n("a",{class:"header-anchor",href:"#什麼是-shell-腳本","aria-label":"Permalink to “什麼是 shell 腳本？”"},"​")],-1)),t[38]||(t[38]=n("p",null,"簡單的説，shell 腳本就是一個由 shell 一步一步執行的程序，而 shell 是在 Linux 內核和最終用户之間提供接口的另一個程序。",-1)),n("p",null,[t[4]||(t[4]=e("默認情況下，RHEL 7 中用户使用的 shell 是 bash（/bin/bash）。如果你想知道詳細的信息和歷史背景，你可以查看這個",-1)),l(o,{href:"https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29"},{default:i(()=>[...t[3]||(t[3]=[e("維基頁面",-1)])]),_:1}),t[5]||(t[5]=e("。",-1))]),n("p",null,[t[8]||(t[8]=e("關於這個 shell 提供的眾多功能的介紹，可以查看 ",-1)),t[9]||(t[9]=n("strong",null,"man 手冊",-1)),t[10]||(t[10]=e("，也可以從 （",-1)),l(o,{href:"http://www.tecmint.com/wp-content/pdf/bash.pdf"},{default:i(()=>[...t[6]||(t[6]=[e("Bash 命令",-1)])]),_:1}),t[11]||(t[11]=e("）處下載 PDF 格式。除此之外，假設你已經熟悉 Linux 命令（否則我強烈建議你首先看一下 ",-1)),t[12]||(t[12]=n("strong",null,"Tecmint.com",-1)),t[13]||(t[13]=e(" 中的文章 ",-1)),l(o,{href:"http://www.tecmint.com/60-commands-of-linux-a-guide-from-newbies-to-system-administrator/"},{default:i(()=>[...t[7]||(t[7]=[e("從新手到系統管理員指南",-1)])]),_:1}),t[14]||(t[14]=e(" ）。現在讓我們開始吧。",-1))]),t[39]||(t[39]=r(`<h3 id="寫一個腳本顯示系統信息" tabindex="-1">寫一個腳本顯示系統信息 <a class="header-anchor" href="#寫一個腳本顯示系統信息" aria-label="Permalink to “寫一個腳本顯示系統信息”">​</a></h3><p>為了方便，首先讓我們新建一個目錄用於保存我們的 shell 腳本：</p><pre><code># mkdir scripts
# cd scripts
</code></pre><p>然後用喜歡的文本編輯器打開新的文本文件 <code>system_info.sh</code>。我們首先在頭部插入一些註釋以及一些命令：</p><pre><code>#!/bin/bash

# RHCE 系列第四部分示例腳本
# 該腳本會返回以下這些系統信息：
# -主機名稱:
echo -e &quot;\\e[31;43m***** HOSTNAME INFORMATION *****\\e[0m&quot;
hostnamectl
echo &quot;&quot;
# -文件系統磁盤空間使用：
echo -e &quot;\\e[31;43m***** FILE SYSTEM DISK SPACE USAGE *****\\e[0m&quot;
df -h
echo &quot;&quot;
# -系統空閒和使用中的內存：
echo -e &quot;\\e[31;43m ***** FREE AND USED MEMORY *****\\e[0m&quot;
free
echo &quot;&quot;
# -系統啓動時間：
echo -e &quot;\\e[31;43m***** SYSTEM UPTIME AND LOAD *****\\e[0m&quot;
uptime
echo &quot;&quot;
# -登錄的用户：
echo -e &quot;\\e[31;43m***** CURRENTLY LOGGED-IN USERS *****\\e[0m&quot;
who
echo &quot;&quot;
# -使用內存最多的 5 個進程
echo -e &quot;\\e[31;43m***** TOP 5 MEMORY-CONSUMING PROCESSES *****\\e[0m&quot;
ps -eo %mem,%cpu,comm --sort=-%mem | head -n 6
echo &quot;&quot;
echo -e &quot;\\e[1;32mDone.\\e[0m&quot;
</code></pre><p>然後，給腳本可執行權限：</p><pre><code># chmod +x system_info.sh
</code></pre><p>運行腳本：</p><pre><code>./system_info.sh
</code></pre><p>注意為了更好的可視化效果各部分標題都用顏色顯示：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/08/Server-Monitoring-Shell-Script.png" alt="服務器監視 Shell 腳本"></p><p><em>服務器監視 Shell 腳本</em></p><p>顏色功能是由以下命令提供的：</p><pre><code>echo -e &quot;\\e[COLOR1;COLOR2m&lt;YOUR TEXT HERE&gt;\\e[0m&quot;
</code></pre>`,14)),n("p",null,[t[16]||(t[16]=e("其中 COLOR1 和 COLOR2 是前景色和背景色（",-1)),l(o,{href:"https://wiki.archlinux.org/index.php/Color_Bash_Prompt"},{default:i(()=>[...t[15]||(t[15]=[e("Arch Linux Wiki",-1)])]),_:1}),t[17]||(t[17]=e(" 有更多的信息和選項解釋），",-1)),t[18]||(t[18]=n("code",null,"<YOUR TEXT HERE>",-1)),t[19]||(t[19]=e(" 是你想用顏色顯示的字符串。",-1))]),t[40]||(t[40]=r(`<h3 id="使任務自動化" tabindex="-1">使任務自動化 <a class="header-anchor" href="#使任務自動化" aria-label="Permalink to “使任務自動化”">​</a></h3><p>你想使其自動化的任務可能因情況而不同。因此，我們不可能在一篇文章中覆蓋所有可能的場景，但是我們會介紹使用 shell 腳本可以使其自動化的三種典型任務：</p><ol><li>更新本地文件資料庫， 2) 查找（或者刪除）有 777 權限的文件， 以及 3) 文件系統使用超過定義的閥值時發出警告。</li></ol><p>讓我們在腳本目錄中新建一個名為 <code>auto_tasks.sh</code> 的文件並添加以下內容：</p><pre><code>#!/bin/bash

# 自動化任務示例腳本：
# -更新本地文件資料庫：
echo -e &quot;\\e[4;32mUPDATING LOCAL FILE DATABASE\\e[0m&quot;
updatedb
if [ $? == 0 ]; then
        echo &quot;The local file database was updated correctly.&quot;
else
        echo &quot;The local file database was not updated correctly.&quot;
fi
echo &quot;&quot;

# -查找 和/或 刪除有 777 權限的文件。
echo -e &quot;\\e[4;32mLOOKING FOR FILES WITH 777 PERMISSIONS\\e[0m&quot;
# Enable either option (comment out the other line), but not both.
# Option 1: Delete files without prompting for confirmation. Assumes GNU version of find.
#find -type f -perm 0777 -delete
# Option 2: Ask for confirmation before deleting files. More portable across systems.
find -type f -perm 0777 -exec rm -i {} +;
echo &quot;&quot;
# -文件系統使用率超過定義的閥值時發出警告 
echo -e &quot;\\e[4;32mCHECKING FILE SYSTEM USAGE\\e[0m&quot;
THRESHOLD=30
while read line; do
        # This variable stores the file system path as a string
        FILESYSTEM=$(echo $line | awk &#39;{print $1}&#39;)
        # This variable stores the use percentage (XX%)
        PERCENTAGE=$(echo $line | awk &#39;{print $5}&#39;)
        # Use percentage without the % sign.
        USAGE=\${PERCENTAGE%?}
        if [ $USAGE -gt $THRESHOLD ]; then
                echo &quot;The remaining available space in $FILESYSTEM is critically low. Used: $PERCENTAGE&quot;
        fi
done &lt; &lt;(df -h --total | grep -vi filesystem)
</code></pre><p>請注意該腳本最後一行兩個 <code>&lt;</code> 符號之間有個空格。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/08/Shell-Script-to-Find-777-Permissions.png" alt="查找 777 權限文件的 Shell 腳本"></p><p><em>查找 777 權限文件的 Shell 腳本</em></p><h3 id="使用-cron" tabindex="-1">使用 Cron <a class="header-anchor" href="#使用-cron" aria-label="Permalink to “使用 Cron”">​</a></h3><p>想更進一步提高效率，你不會想只是坐在你的電腦前手動執行這些腳本。相反，你會使用 cron 來調度這些任務週期性地執行，並把結果通過郵件發動給預先指定的接收者，或者將它們保存到使用 web 瀏覽器可以查看的文件中。</p><p>下面的腳本（filesystem_usage.sh）會運行有名的 <strong>df -h</strong> 命令，格式化輸出到 HTML 表格並保存到 <strong>report.html</strong> 文件中：</p><pre><code>#!/bin/bash
# 演示使用 shell 腳本創建 HTML 報告的示例腳本
# Web directory
WEB_DIR=/var/www/html
# A little CSS and table layout to make the report look a little nicer
echo &quot;&lt;HTML&gt;
&lt;HEAD&gt;
&lt;style&gt;
.titulo{font-size: 1em; color: white; background:#0863CE; padding: 0.1em 0.2em;}
table
{
border-collapse:collapse;
}
table, td, th
{
border:1px solid black;
}
&lt;/style&gt;
&lt;meta http-equiv=&#39;Content-Type&#39; content=&#39;text/html; charset=UTF-8&#39; /&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;&quot; &gt; $WEB_DIR/report.html
# View hostname and insert it at the top of the html body
HOST=$(hostname)
echo &quot;Filesystem usage for host &lt;strong&gt;$HOST&lt;/strong&gt;&lt;br&gt;
Last updated: &lt;strong&gt;$(date)&lt;/strong&gt;&lt;br&gt;&lt;br&gt;
&lt;table border=&#39;1&#39;&gt;
&lt;tr&gt;&lt;th class=&#39;titulo&#39;&gt;Filesystem&lt;/td&gt;
&lt;th class=&#39;titulo&#39;&gt;Size&lt;/td&gt;
&lt;th class=&#39;titulo&#39;&gt;Use %&lt;/td&gt;
&lt;/tr&gt;&quot; &gt;&gt; $WEB_DIR/report.html
# Read the output of df -h line by line
while read line; do
echo &quot;&lt;tr&gt;&lt;td align=&#39;center&#39;&gt;&quot; &gt;&gt; $WEB_DIR/report.html
echo $line | awk &#39;{print $1}&#39; &gt;&gt; $WEB_DIR/report.html
echo &quot;&lt;/td&gt;&lt;td align=&#39;center&#39;&gt;&quot; &gt;&gt; $WEB_DIR/report.html
echo $line | awk &#39;{print $2}&#39; &gt;&gt; $WEB_DIR/report.html
echo &quot;&lt;/td&gt;&lt;td align=&#39;center&#39;&gt;&quot; &gt;&gt; $WEB_DIR/report.html
echo $line | awk &#39;{print $5}&#39; &gt;&gt; $WEB_DIR/report.html
echo &quot;&lt;/td&gt;&lt;/tr&gt;&quot; &gt;&gt; $WEB_DIR/report.html
done &lt; &lt;(df -h | grep -vi filesystem)
echo &quot;&lt;/table&gt;&lt;/BODY&gt;&lt;/HTML&gt;&quot; &gt;&gt; $WEB_DIR/report.html
</code></pre><p>在我們的 <strong>RHEL 7</strong> 服務器（<strong>192.168.0.18</strong>）中，看起來像下面這樣：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/08/Server-Monitoring-Report.png" alt="服務器監視報告"></p><p><em>服務器監視報告</em></p><p>你可以添加任何你想要的信息到那個報告中。添加下面的 crontab 條目在每天下午的 1：30 運行該腳本：</p><pre><code>30 13 * * * /root/scripts/filesystem_usage.sh
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>你很可能想起各種其他想要自動化的任務；正如你看到的，使用 shell 腳本能極大的簡化任務。如果你覺得這篇文章對你有所幫助就告訴我們吧，別猶豫在下面的表格中添加你自己的想法或評論。</p><hr>`,20)),n("p",null,[t[21]||(t[21]=e("via: ",-1)),l(o,{href:"http://www.tecmint.com/using-shell-script-to-automate-linux-system-maintenance-tasks/"},{default:i(()=>[...t[20]||(t[20]=[e("http://www.tecmint.com/using-shell-script-to-automate-linux-system-maintenance-tasks/",-1)])]),_:1})]),n("p",null,[t[25]||(t[25]=e("作者：",-1)),l(o,{href:"http://www.tecmint.com/author/gacanepa/"},{default:i(()=>[...t[22]||(t[22]=[e("Gabriel Cánepa",-1)])]),_:1}),t[26]||(t[26]=e(" 譯者：",-1)),l(o,{href:"https://github.com/ictlyh"},{default:i(()=>[...t[23]||(t[23]=[e("ictlyh",-1)])]),_:1}),t[27]||(t[27]=e(" 校對：",-1)),l(o,{href:"https://github.com/wxy"},{default:i(()=>[...t[24]||(t[24]=[e("wxy",-1)])]),_:1})]),n("p",null,[t[30]||(t[30]=e("本文由 ",-1)),l(o,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...t[28]||(t[28]=[e("LCTT",-1)])]),_:1}),t[31]||(t[31]=e(" 原創翻譯，",-1)),l(o,{href:"http://linux.cn/"},{default:i(()=>[...t[29]||(t[29]=[e("Linux中國",-1)])]),_:1}),t[32]||(t[32]=e(" 榮譽推出",-1))])])}const b=s(m,[["render",d]]);export{w as __pageData,b as default};
