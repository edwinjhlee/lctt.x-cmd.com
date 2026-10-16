import{_ as p,a0 as o,w as a,s as d,ao as s,I as n,x as t,a1 as l,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const L=JSON.parse('{"title":"LFCS 系列第十講：學習簡單的 Shell 腳本編程和文件系統故障排除 | LCTT x X-CMD","titleTemplate":false,"description":"LFCS 系列第十講：學習簡單的 Shell 腳本編程和文件系統故障排除 | LCTT (LFCS) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"LFCS 系列第十講：學習簡單的 Shell 腳本編程和文件系統故障排除 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"LFCS 系列第十講：學習簡單的 Shell 腳本編程和文件系統故障排除 | LCTT (LFCS) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"LFCS/Part 10 - LFCS--Understanding and Learning Basic Shell Scripting and Linux Filesystem Troubleshooting","title":"LFCS 系列第十講：學習簡單的 Shell 腳本編程和文件系統故障排除","tag":"LFCS","desc":""},"relativePath":"LFCS/Part 10 - LFCS--Understanding and Learning Basic Shell Scripting and Linux Filesystem Troubleshooting.md","filePath":"[post].md"}'),m={name:"LFCS/Part 10 - LFCS--Understanding and Learning Basic Shell Scripting and Linux Filesystem Troubleshooting.md"};function h(u,e,c,g,f,S){const i=o("Link");return a(),d("div",null,[e[26]||(e[26]=s('<h1 id="lfcs-系列第十講-學習簡單的-shell-腳本編程和文件系統故障排除" tabindex="-1">LFCS 系列第十講：學習簡單的 Shell 腳本編程和文件系統故障排除 <a class="header-anchor" href="#lfcs-系列第十講-學習簡單的-shell-腳本編程和文件系統故障排除" aria-label="Permalink to “LFCS 系列第十講：學習簡單的 Shell 腳本編程和文件系統故障排除”">​</a></h1><p>Linux 基金會發起了 LFCS 認證 (Linux Foundation Certified Sysadmin，Linux 基金會認證系統管理員)，這是一個全新的認證體系，旨在讓世界各地的人能夠參與到中等水平的 Linux 系統的基本管理操作的認證考試中去，這項認證包括：維護正在運行的系統和服務的能力、全面監控和分析的能力以及何時向上遊團隊請求支持的決策能力。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/lfcs-Part-10.png" alt="Basic Shell Scripting and Filesystem Troubleshooting"></p><p><em>LFCS 系列第十講</em></p><p>請看以下視頻，這裏邊介紹了 Linux 基金會認證程序。</p><video src="https://dn-linuxcn.qbox.me/static%2Fvideo%2FIntroducing%20The%20Linux%20Foundation%20Certification%20Program-Y29qZ71Kicg.mp4" controls="controls" width="100%"></video><p>本講是系列教程中的第十講，主要集中講解簡單的 Shell 腳本編程和文件系統故障排除。這兩塊內容都是 LFCS 認證中的必備考點。</p><h3 id="理解終端-terminals-和-shell" tabindex="-1">理解終端 (Terminals) 和 Shell <a class="header-anchor" href="#理解終端-terminals-和-shell" aria-label="Permalink to “理解終端 (Terminals) 和 Shell”">​</a></h3><p>首先要聲明一些概念。</p><ul><li>Shell 是一個程序，它將命令傳遞給操作系統來執行。</li><li>Terminal 也是一個程序，允許最終用户使用它與 Shell 來交互。比如，下邊的圖片是 GNOME Terminal。</li></ul><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Gnome-Terminal.png" alt="Gnome Terminal"></p><p><em>Gnome Terminal</em></p><p>啓動 Shell 之後，會呈現一個命令提示符 (也稱為命令列) 提示我們 Shell 已經做好了準備，接受標準輸入設備輸入的命令，這個標準輸入設備通常是鍵盤。</p>',13)),n("p",null,[e[1]||(e[1]=t("你可以參考該系列文章的 ",-1)),l(i,{href:"https://linux.cn/article-7161-1.html"},{default:r(()=>[...e[0]||(e[0]=[t("第一講 如何在 Linux 上使用 GNU sed 等命令來創建、編輯和操作文件",-1)])]),_:1}),e[2]||(e[2]=t(" 來温習一些常用的命令。",-1))]),e[27]||(e[27]=s('<p>Linux 為提供了許多可以選用的 Shell，下面列出一些常用的：</p><p><strong>bash Shell</strong></p><p>Bash 代表 Bourne Again Shell，它是 GNU 項目默認的 Shell。它借鑑了 Korn shell (ksh) 和 C shell (csh) 中有用的特性，並同時對性能進行了提升。它同時也是 LFCS 認證中所涵蓋的各發行版中默認 Shell，也是本系列教程將使用的 Shell。</p><p><strong>sh Shell</strong></p><p>Bourne SHell 是一個比較古老的 shell，多年來一直都是很多類 Unix 系統的默認 shell。</p><p><strong>ksh Shell</strong></p><p>Korn SHell (ksh shell) 也是一個 Unix shell，是貝爾實驗室 (Bell Labs) 的 David Korn 在 19 世紀 80 年代初的時候開發的。它兼容 Bourne shell ，並同時包含了 C shell 中的多數特性。</p><p>一個 shell 腳本僅僅只是一個可執行的文本文件，裏邊包含一條條可執行命令。</p><h3 id="簡單的-shell-腳本編程" tabindex="-1">簡單的 Shell 腳本編程 <a class="header-anchor" href="#簡單的-shell-腳本編程" aria-label="Permalink to “簡單的 Shell 腳本編程”">​</a></h3>',9)),n("p",null,[e[4]||(e[4]=t("如前所述，一個 shell 腳本就是一個純文本文件，因此，可以使用自己喜歡的文本編輯器來創建和編輯。你可以考慮使用 vi/vim (參考本系列 ",-1)),l(i,{href:"https://linux.cn/article-7165-1.html"},{default:r(()=>[...e[3]||(e[3]=[t("第二講 如何安裝和使用純文本編輯器 vi/vim",-1)])]),_:1}),e[5]||(e[5]=t(")，它的語法高亮讓我的編輯工作非常方便。",-1))]),e[28]||(e[28]=n("p",null,"輸入如下命令來創建一個名為 myscript.sh 的腳本文件：",-1)),e[29]||(e[29]=n("pre",null,[n("code",null,`# vim myscript.sh
`)],-1)),n("p",null,[e[7]||(e[7]=t("shell 腳本的第一行 (著名的 ",-1)),l(i,{href:"https://linux.cn/article-3664-1.html"},{default:r(()=>[...e[6]||(e[6]=[t("釋伴（shebang）行",-1)])]),_:1}),e[8]||(e[8]=t(") 必須如下：",-1))]),e[30]||(e[30]=s(`<pre><code>#!/bin/bash
</code></pre><p>這條語句“告訴”操作系統需要用哪個解釋器來運行這個腳本文件之後命令。</p><p>現在可以添加需要執行的命令了。通過註釋，我們可以聲明每一條命令或者整個腳本的具體含義。注意，shell 會忽略掉以井號 (#) 開始的註釋語句。</p><pre><code>#!/bin/bash
echo 這是關於 LFCS 認證系列的第十部分
echo 今天是 $(date +%Y-%m-%d)
</code></pre><p>編寫並保存腳本之後，通過以下命令來使腳本文件成為可執行文件：</p><pre><code># chmod 755 myscript.sh
</code></pre><p>在執行腳本之前，我們需要説一下環境變量 ($PATH)，運行：</p><pre><code>echo $PATH
</code></pre><p>我們就會看到環境變量 ($PATH) 的具體內容：這是當輸入命令時系統所搜索可執行程序的目錄，每一項之間使用冒號 (😃 隔開。稱它為環境變量，是因為它本是就是 shell 環境的一部分 —— 這是當 shell 每次啓動時 shell 及其子進程可以獲取的一系列信息。</p><p>當我們輸入一個命令並按下回車時，shell 會搜索 $PATH 變量中列出的目錄並執行第一個知道的實例。請看如下例子：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Environment-Variable.png" alt="Linux Environment Variables"></p><p><em>環境變量</em></p><p>假如存在兩個同名的可執行程序，一個在 /usr/local/bin，另一個在 /usr/bin，則會執行環境變量中最先列出的那個，並忽略另外一個。</p><p>如果我們自己編寫的腳本沒有放在 $PATH 變量列出目錄中的任何一個，則需要輸入 ./filename 來執行它。而如果存儲在 $PATH 變量中的任意一個目錄，我們就可以像運行其他命令一樣來運行之前編寫的腳本了。</p><pre><code># pwd
# ./myscript.sh
# cp myscript.sh ../bin
# cd ../bin
# pwd
# myscript.sh
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Execute-Script.png" alt="Execute Script in Linux"></p><p><em>執行腳本</em></p><h4 id="if-條件語句" tabindex="-1">if 條件語句 <a class="header-anchor" href="#if-條件語句" aria-label="Permalink to “if 條件語句”">​</a></h4><p>無論何時，當你需要在腳本中根據某個命令的運行結果來採取相應動作時，你應該使用 if 結構來定義條件。基本語法如下：</p><pre><code>if CONDITION; then
	COMMANDS;
else
	OTHER-COMMANDS
fi
</code></pre><p>其中，CONDITION 可以是如下情形的任意一項 (僅列出常用的)，並且達到以下條件時返回 true：</p><ul><li>[ -a file ] → 指定文件存在。</li><li>[ -d file ] → 指定文件存在，並且是一個目錄。</li><li>[ -f file ] → 指定文件存在，並且是一個普通文件。</li><li>[ -u file ] → 指定文件存在，並設置了 SUID 權限位。</li><li>[ -g file ] → 指定文件存在，並設置了 SGID 權限位。</li><li>[ -k file ] → 指定文件存在，並設置了“黏連 (Sticky)”位。</li><li>[ -r file ] → 指定文件存在，並且文件可讀。</li><li>[ -s file ] → 指定文件存在，並且文件不為空。</li><li>[ -w file ] → 指定文件存在，並且文件可寫入。</li><li>[ -x file ] → 指定文件存在，並且可執行。</li><li>[ string1 = string2 ] → 字符串相同。</li><li>[ string1 != string2 ] → 字符串不相同。</li></ul><p>[ int1 op int2 ] 為前述列表中的一部分 (例如： -eq –&gt; int1 與 int2 相同時返回 true) ，其中比較項也可以是一個列表子項， 其中 op 為以下比較操作符。</p><ul><li>-eq –&gt; int1 等於 int2 時返回 true。</li><li>-ne –&gt; int1 不等於 int2 時返回 true。</li><li>-lt –&gt; int1 小於 int2 時返回 true。</li><li>-le –&gt; int1 小於或等於 int2 時返回 true。</li><li>-gt –&gt; int1 大於 int2 時返回 true。</li><li>-ge –&gt; int1 大於或等於 int2 時返回 true。</li></ul><h4 id="for-循環語句" tabindex="-1">for 循環語句 <a class="header-anchor" href="#for-循環語句" aria-label="Permalink to “for 循環語句”">​</a></h4><p>循環語句可以在某個條件下重複執行某個命令。基本語法如下：</p><pre><code>for item in SEQUENCE; do
		COMMANDS;
done
</code></pre><p>其中，item 為每次執行 COMMANDS 時，在 SEQUENCE 中匹配到的值。</p><h4 id="while-循環語句" tabindex="-1">While 循環語句 <a class="header-anchor" href="#while-循環語句" aria-label="Permalink to “While 循環語句”">​</a></h4><p>該循環結構會一直執行重複的命令，直到控制命令（EVALUATION_COMMAND）執行的退出狀態值等於 0 時 (即執行成功) 停止。基本語法如下：</p><pre><code>while EVALUATION_COMMAND; do
		EXECUTE_COMMANDS;
done
</code></pre><p>其中，EVALUATION_COMMAND 可以是任何能夠返回成功 (0) 或失敗 (0 以外的值) 的退出狀態值的命令，EXECUTE_COMMANDS 則可以是任何的程序、腳本或者 shell 結構體，包括其他的嵌套循環。</p><h4 id="綜合使用" tabindex="-1">綜合使用 <a class="header-anchor" href="#綜合使用" aria-label="Permalink to “綜合使用”">​</a></h4><p>我們會通過以下例子來演示 if 條件語句和 for 循環語句。</p><p><strong>在基於 systemd 的發行版中探測某個服務是否在運行</strong></p><p>先建立一個文件，列出我們想要想要查看的服務名。</p><pre><code># cat myservices.txt

sshd
mariadb
httpd
crond
firewalld
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Monitor-Services.png" alt="Script to Monitor Linux Services"></p><p><em>使用腳本監控 Linux 服務</em></p><p>我們編寫的腳本看起來應該是這樣的：</p><pre><code>#!/bin/bash

# This script iterates over a list of services and
# is used to determine whether they are running or not.

for service in $(cat myservices.txt); do
    	systemctl status $service | grep --quiet &quot;running&quot;
    	if [ $? -eq 0 ]; then
            	echo $service &quot;is [ACTIVE]&quot;
    	else
            	echo $service &quot;is [INACTIVE or NOT INSTALLED]&quot;
    	fi
done
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Monitor-Script.png" alt="Linux Service Monitoring Script"></p><p><em>Linux 服務監控腳本</em></p><p><strong>我們來解釋一下這個腳本的工作流程</strong></p><p>1). for 循環每次讀取 myservices.txt 文件中的一項記錄，每一項紀錄表示一個服務的通用變量名。各項記錄組成如下：</p><pre><code># cat myservices.txt
</code></pre><p>2). 以上命令由圓括號括着，並在前面添加美元符，表示它需要從 myservices.txt 的記錄列表中取值並作為變量傳遞給 for 循環。</p><p>3). 對於記錄列表中的每一項紀錄 (即每一項紀錄的服務變量)，都會執行以下動作：</p><pre><code># systemctl status $service | grep --quiet &quot;running&quot;
</code></pre><p>此時，需要在每個通用變量名 (即每一項紀錄的服務變量) 的前面添加美元符，以表明它是作為變量來傳遞的。其輸出則通過管道符傳給 grep。</p><p>其中，-quiet 選項用於阻止 grep 命令將發現的 “running” 的行回顯到屏幕。當 grep 捕獲到 “running” 時，則會返回一個退出狀態碼 “0” (在 if 結構體表示為 $?)，由此確認某個服務正在運行中。</p><p>如果退出狀態碼是非零值 (即 systemctl status $service 命令中的回顯中沒有出現 “running”)，則表明某個服務為運行。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Services-Monitoring-Script.png" alt="Services Monitoring Script"></p><p><em>服務監控腳本</em></p><p>我們可以增加一步，在開始循環之前，先確認 myservices.txt 是否存在。</p><pre><code>#!/bin/bash

# This script iterates over a list of services and
# is used to determine whether they are running or not.

if [ -f myservices.txt ]; then
    	for service in $(cat myservices.txt); do
            	systemctl status $service | grep --quiet &quot;running&quot;
            	if [ $? -eq 0 ]; then
                    	echo $service &quot;is [ACTIVE]&quot;
            	else
                    	echo $service &quot;is [INACTIVE or NOT INSTALLED]&quot;
            	fi
    	done
else
    	echo &quot;myservices.txt is missing&quot;
fi
</code></pre><p><strong>Ping 一系列網絡或者 Internet 主機名以獲取應答數據</strong></p><p>你可能想把自己維護的主機寫入一個文本文件，並使用腳本探測它們是否能夠 ping 得通 (腳本中的 myhosts 可以隨意替換為你想要的名稱)。</p><p>shell 的內置 read 命令將告訴 while 循環一行行的讀取 myhosts，並將讀取的每行內容傳給 host 變量，隨後 host 變量傳遞給 ping 命令。</p><pre><code>#!/bin/bash

# This script is used to demonstrate the use of a while loop

while read host; do
    	ping -c 2 $host
done &lt; myhosts
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Script-to-Ping-Servers.png" alt="Script to Ping Servers"></p><p><em>使用腳本 Ping 服務器</em></p><p>擴展閲讀:</p>`,63)),n("ul",null,[n("li",null,[l(i,{href:"http://www.tecmint.com/learning-shell-scripting-language-a-guide-from-newbies-to-system-administrator/"},{default:r(()=>[...e[9]||(e[9]=[t("Learn Shell Scripting: A Guide from Newbies to System Administrator",-1)])]),_:1})]),n("li",null,[l(i,{href:"http://www.tecmint.com/basic-shell-programming-part-ii/"},{default:r(()=>[...e[10]||(e[10]=[t("5 Shell Scripts to Learn Shell Programming",-1)])]),_:1})])]),e[31]||(e[31]=s(`<h3 id="文件系統排錯" tabindex="-1">文件系統排錯 <a class="header-anchor" href="#文件系統排錯" aria-label="Permalink to “文件系統排錯”">​</a></h3><p>儘管 Linux 是一個很穩定的操作系統，但仍然會因為某些原因出現崩潰時 (比如因為斷電等)，正好你有一個 (或者更多個) 文件系統未能正確卸載，Linux 重啓的時候就會自動檢測其中可能發生的錯誤。</p><p>此外，每次系統正常啓動的時候，都會在文件系統掛載之前校驗它們的完整度。而這些全部都依賴於 fsck 工具 (“file system check，文件系統校驗”)。</p><p>如果對 fsck 進行設定，它除了校驗文件系統的完整性之外，還可以嘗試修復錯誤。fsck 能否成功修復錯誤，取決於文件系統的損傷程度；如果可以修復，被損壞部分的文件會恢復到位於每個文件系統根目錄的 lost+found。</p><p>最後但同樣重要的是，我們必須注意，如果拔掉系統正在寫入數據的 USB 設備同樣會發生錯誤，甚至可能發生硬件損壞。</p><p>fsck 的基本用如下：</p><pre><code># fsck [options] filesystem
</code></pre><p><strong>檢查文件系統錯誤並嘗試自動修復</strong></p><p>想要使用 fsck 檢查文件系統，我們需要首先卸載文件系統。</p><pre><code># mount | grep sdg1
# umount /mnt
# fsck -y /dev/sdg1
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Check-Filesystem-Errors.png" alt="Scan Linux Filesystem for Errors"></p><p><em>檢查文件系統錯誤</em></p><p>除了 -y 選項，我們也可以使用 -a 選項來自動修復文件系統錯誤，而不必做出交互式應答，並在文件系統看起來 “乾淨” 卸載的情況下強制校驗。</p><pre><code># fsck -af /dev/sdg1
</code></pre><p>如果只是要找出什麼地方發生了錯誤 (不用在檢測到錯誤的時候修復)，我們可以使用 -n 選項，這樣只會將文件系統錯誤輸出到標準輸出設備上。</p><pre><code># fsck -n /dev/sdg1
</code></pre><p>根據 fsck 輸出的錯誤信息，我們可以知道是否可以自己修復或者需要將問題提交給工程師團隊來做詳細的硬件校驗。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>至此，系列教程的第十講就全部結束了，全系列教程涵蓋了通過 LFCS 測試所需的基礎內容。</p><p>但顯而易見的，本系列的十講並不足以在單個主題方面做到全面描述，我們希望這一系列教程可以成為你學習的基礎素材，並一直保持學習的熱情（LCTT 譯註：還有後繼補充的幾篇）。</p>`,20)),n("p",null,[e[12]||(e[12]=t("我們歡迎你提出任何問題或者建議，所以你可以毫不猶豫的通過以下鏈接聯繫到我們： 成為一個 ",-1)),l(i,{href:"http://www.shareasale.com/r.cfm?b=768106&u=1260899&m=59485&urllink=&afftrack="},{default:r(()=>[...e[11]||(e[11]=[t("Linux 認證系統工程師",-1)])]),_:1})]),e[32]||(e[32]=n("hr",null,null,-1)),n("p",null,[e[14]||(e[14]=t("via: ",-1)),l(i,{href:"http://www.tecmint.com/linux-basic-shell-scripting-and-linux-filesystem-troubleshooting/"},{default:r(()=>[...e[13]||(e[13]=[t("http://www.tecmint.com/linux-basic-shell-scripting-and-linux-filesystem-troubleshooting/",-1)])]),_:1})]),n("p",null,[e[18]||(e[18]=t("作者：",-1)),l(i,{href:"http://www.tecmint.com/author/gacanepa/"},{default:r(()=>[...e[15]||(e[15]=[t("Gabriel Cánepa",-1)])]),_:1}),e[19]||(e[19]=t(" 譯者：",-1)),l(i,{href:"https://github.com/GHLandy"},{default:r(()=>[...e[16]||(e[16]=[t("GHLandy",-1)])]),_:1}),e[20]||(e[20]=t(" 校對：",-1)),l(i,{href:"https://github.com/wxy"},{default:r(()=>[...e[17]||(e[17]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[23]||(e[23]=t("本文由 ",-1)),l(i,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[21]||(e[21]=[t("LCTT",-1)])]),_:1}),e[24]||(e[24]=t(" 原創翻譯，",-1)),l(i,{href:"https://linux.cn/"},{default:r(()=>[...e[22]||(e[22]=[t("Linux中國",-1)])]),_:1}),e[25]||(e[25]=t(" 榮譽推出",-1))])])}const C=p(m,[["render",h]]);export{L as __pageData,C as default};
