import{_ as p,a0 as d,w as s,s as a,I as e,x as t,a1 as i,A as r,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"給新手的 10 個有用 Linux 命令列技巧 | LCTT x X-CMD","titleTemplate":false,"description":"給新手的 10 個有用 Linux 命令列技巧 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"給新手的 10 個有用 Linux 命令列技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"給新手的 10 個有用 Linux 命令列技巧 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150911 10 Useful Linux Command Line Tricks for Newbies--Part 2","title":"給新手的 10 個有用 Linux 命令列技巧","tag":"201509","desc":""},"relativePath":"201509/20150911 10 Useful Linux Command Line Tricks for Newbies--Part 2.md","filePath":"[post].md"}'),m={name:"201509/20150911 10 Useful Linux Command Line Tricks for Newbies--Part 2.md"};function u(f,n,h,x,w,g){const o=d("Link");return s(),a("div",null,[n[26]||(n[26]=e("h1",{id:"給新手的-10-個有用-linux-命令列技巧",tabindex:"-1"},[t("給新手的 10 個有用 Linux 命令列技巧 "),e("a",{class:"header-anchor",href:"#給新手的-10-個有用-linux-命令列技巧","aria-label":"Permalink to “給新手的 10 個有用 Linux 命令列技巧”"},"​")],-1)),n[27]||(n[27]=e("p",null,"我記得我第一次使用 Linux 的時候，我還習慣於 Windows 的圖形界面，我真的很討厭 Linux 終端。那時候我覺得命令難以記憶，不能正確使用它們。隨着時間推移，我意識到了 Linux 終端的優美、靈活和可用性，説實話，我沒有一天不使用它。今天，我很高興和剛開始接觸 Linux 的人一起來分享一些有用的技巧和提示，希望能幫助他們更好的向 Linux 過渡，並幫助他們學到一些新的東西（希望如此）。",-1)),n[28]||(n[28]=e("p",null,[e("img",{src:"http://www.tecmint.com/wp-content/uploads/2015/09/10-Linux-Commandline-Tricks.jpg",alt:"給新手的 10 個命令列技巧"})],-1)),n[29]||(n[29]=e("p",null,[e("em",null,"10 個 Linux 命令列技巧")],-1)),e("ul",null,[e("li",null,[i(o,{href:"https://linux.cn/article-5485-1.html"},{default:r(()=>[...n[0]||(n[0]=[t("5 個有趣的 Linux 命令列技巧",-1)])]),_:1})]),e("li",null,[i(o,{href:"http://www.tecmint.com/manage-file-types-and-set-system-time-in-linux/"},{default:r(()=>[...n[1]||(n[1]=[t("管理 Linux 文件類型的 5 個有用命令",-1)])]),_:1})])]),n[30]||(n[30]=l(`<p>這篇文章希望向你展示一些不需要很高的技術就可以像一個高手一樣使用 Linux 終端的有用技巧。你只需要一個 Linux 終端和一些自由時間來體會這些命令。</p><h3 id="_1-找到正確的命令" tabindex="-1">1. 找到正確的命令 <a class="header-anchor" href="#_1-找到正確的命令" aria-label="Permalink to “1. 找到正確的命令”">​</a></h3><p>執行正確的命令對你的系統來説非常重要。然而在 Linux 中有如此多的、難以記憶的各種的命令列。那麼怎樣才能找到你需要的正確命令呢？答案是 apropos。你只需要運行：</p><pre><code># apropos &lt;description&gt;
</code></pre><p>其中你要用真正描述你要查找的命令的語句代替 “description”。這裏有一個例子：</p><pre><code># apropos &quot;list directory&quot;

dir (1) - list directory contents
ls (1) - list directory contents
ntfsls (8) - list directory contents on an NTFS filesystem
vdir (1) - list directory contents
</code></pre><p>左邊你看到的是命令，右邊是它們的描述。</p><h3 id="_2-執行之前的命令" tabindex="-1">2. 執行之前的命令 <a class="header-anchor" href="#_2-執行之前的命令" aria-label="Permalink to “2. 執行之前的命令”">​</a></h3><p>很多時候你需要一遍又一遍執行相同的命令。儘管你可以重複按你鍵盤上的向上光標鍵，但你也可以用 history 命令替代。這個命令會列出自從你上次啓動終端以來所有輸入過的命令：</p><pre><code># history

    1  fdisk -l
    2  apt-get install gnome-paint
    3  hostname tecmint.com
    4  hostnamectl tecmint.com
    5  man hostnamectl 
    6  hostnamectl --set-hostname tecmint.com
    7  hostnamectl -set-hostname tecmint.com
    8  hostnamectl set-hostname tecmint.com
    9  mount -t &quot;ntfs&quot; -o
   10  fdisk -l
   11  mount -t ntfs-3g /dev/sda5 /mnt
   12  mount -t rw ntfs-3g /dev/sda5 /mnt
   13  mount -t -rw ntfs-3g /dev/sda5 /mnt
   14  mount -t ntfs-3g /dev/sda5 /mnt
   15  mount man
   16  man mount
   17  mount -t -o ntfs-3g /dev/sda5 /mnt
   18  mount -o ntfs-3g /dev/sda5 /mnt
   19  mount -ro ntfs-3g /dev/sda5 /mnt
   20  cd /mnt
   ...
</code></pre><p>正如你上面看到的，你會得到一個你運行過的命令的列表。每一行中有一個數字表示你在第幾行輸入了命令。你可以通過以下方法重新調用該命令：</p><pre><code>!#
</code></pre><p>其中要用命令的實際編號代替 #。為了更好的理解，請看下面的例子：</p><pre><code>!501
</code></pre><p>等價於：</p><pre><code># history
</code></pre><h3 id="_3-使用-midnight-命令" tabindex="-1">3. 使用 midnight 命令 <a class="header-anchor" href="#_3-使用-midnight-命令" aria-label="Permalink to “3. 使用 midnight 命令”">​</a></h3><p>如果你不習慣使用類似 cd、cp、mv、rm 等命令，你可以使用 midnight 命令。它是一個簡單的可視化 shell，你可以在上面使用鼠標：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/09/mc-command.jpg" alt="Midnight 命令"></p><p><em>Midnight 命令</em></p><p>藉助 F1 到 F12 鍵，你可以輕易地執行不同任務。只需要在底部選擇對應的命令。要選擇文件或者目錄，按下 “Insert” 鍵。</p><p>簡而言之 midnight 就是所謂的 “mc”。要安裝 mc，只需要運行：</p><pre><code>$ sudo apt-get install mc        [On Debian based systems]
</code></pre><hr><pre><code># yum install mc                 [On Fedora based systems]
</code></pre><p>下面是一個使用 midnight 命令器的簡單例子。通過輸入以下命令打開 mc：</p><pre><code># mc
</code></pre><p>現在使用 TAB 鍵選擇不同的窗口 - 左和右。我有一個想要移動到 “Software” 目錄的 LibreOffice 文件：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/09/Midnight-Commander-Move-Files.jpg" alt="Midnight 命令移動文件"></p><p><em>Midnight 命令移動文件</em></p><p>按 F6 按鈕移動文件到新的目錄。MC 會請求你確認：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/09/Move-Files-to-new-Directory.png" alt="移動文件到新目錄"></p><p><em>移動文件到新目錄</em></p><p>確認了之後，文件就會被移動到新的目標目錄。</p>`,34)),e("ul",null,[e("li",null,[n[3]||(n[3]=t("擴展閲讀：",-1)),i(o,{href:"http://www.tecmint.com/midnight-commander-a-console-based-file-manager-for-linux/"},{default:r(()=>[...n[2]||(n[2]=[t("如何在 Linux 中使用 Midnight 命令文件管理器",-1)])]),_:1})])]),n[31]||(n[31]=l(`<h3 id="_4-在指定時間關閉計算機" tabindex="-1">4. 在指定時間關閉計算機 <a class="header-anchor" href="#_4-在指定時間關閉計算機" aria-label="Permalink to “4. 在指定時間關閉計算機”">​</a></h3><p>有時候你需要在下班幾個小時後再關閉計算機。你可以通過使用下面的命令在指定時間關閉你的計算機：</p><pre><code>$ sudo shutdown 21:00
</code></pre><p>這會告訴你在你指定的時間關閉計算機。你也可以告訴系統在指定分鐘後關閉：</p><pre><code>$ sudo shutdown +15
</code></pre><p>這表示計算機會在 15 分鐘後關閉。</p><h3 id="_5-顯示已知用户的信息" tabindex="-1">5. 顯示已知用户的信息 <a class="header-anchor" href="#_5-顯示已知用户的信息" aria-label="Permalink to “5. 顯示已知用户的信息”">​</a></h3><p>你可以使用一個簡單的命令列出你 Linux 系統的用户以及一些關於它們的基本信息。</p><pre><code># lslogins
</code></pre><p>這會輸出下面的結果：</p><pre><code>UID USER PWD-LOCK PWD-DENY LAST-LOGIN GECOS
0 root 0 0 Apr29/11:35 root
1 bin 0 1 bin
2 daemon 0 1 daemon
3 adm 0 1 adm
4 lp 0 1 lp
5 sync 0 1 sync
6 shutdown 0 1 Jul19/10:04 shutdown
7 halt 0 1 halt
8 mail 0 1 mail
10 uucp 0 1 uucp
11 operator 0 1 operator
12 games 0 1 games
13 gopher 0 1 gopher
14 ftp 0 1 FTP User
23 squid 0 1
25 named 0 1 Named
27 mysql 0 1 MySQL Server
47 mailnull 0 1
48 apache 0 1 Apache
...
</code></pre><h3 id="_6-查找文件" tabindex="-1">6. 查找文件 <a class="header-anchor" href="#_6-查找文件" aria-label="Permalink to “6. 查找文件”">​</a></h3><p>查找文件有時候並不像你想像的那麼簡單。一個搜索文件的好例子是：</p><pre><code># find /home/user -type f
</code></pre><p>這個命令會搜索 /home/user 目錄下的所有文件。find 命令真的很強大，你可以傳遞更多選項給它使得你的搜索更加詳細。如果你想搜索超過特定大小的文件，可以使用：</p><pre><code># find . -type f -size 10M
</code></pre><p>上面的命令會搜索當前目錄中所有大於 10M 的文件。確保不要在你 Linux 系統的根目錄運行該命令，因為這可能導致你的機器 I/O 瓶頸。</p><p>我最經常和 find 命令一起使用的選項之一是 “exec”，這允許你對 find 命令的結果運行一些操作。</p><p>例如，假如我們想查找一個目錄中的所有文件並更改權限。可以通過以下簡單命令完成：</p><pre><code># find /home/user/files/ -type f -exec chmod 644 {} \\;
</code></pre>`,20)),e("p",null,[n[5]||(n[5]=t("上面的命令會遞歸搜索指定目錄內的所有文件，並對找到的文件執行 chmod 命令。推薦你閲讀 ",-1)),i(o,{href:"http://www.tecmint.com/35-practical-examples-of-linux-find-command/"},{default:r(()=>[...n[4]||(n[4]=[t("35 個 Linux ‘find’ 命令的使用方法",-1)])]),_:1}),n[6]||(n[6]=t("，我肯定你會發現這個命令更多的使用方法。",-1))]),n[32]||(n[32]=l(`<h3 id="_7-用一個命令創建目錄樹" tabindex="-1">7. 用一個命令創建目錄樹 <a class="header-anchor" href="#_7-用一個命令創建目錄樹" aria-label="Permalink to “7. 用一個命令創建目錄樹”">​</a></h3><p>你很可能知道可以使用 mkdir 命令創建新的目錄。因此如果你想創建一個新的目錄，你可能會運行：</p><pre><code># mkdir new_folder
</code></pre><p>但如果你想在該目錄下創建 5 個子目錄呢？運行 5 次 mkdir 命令並非是一個好的選擇。相反你可以類似下面這樣使用 -p 選項：</p><pre><code># mkdir -p new_folder/{folder_1,folder_2,folder_3,folder_4,folder_5}
</code></pre><p>最後你會在 new_folder 中有 5 個目錄：</p><pre><code># ls new_folder/

folder_1 folder_2 folder_3 folder_4 folder_5
</code></pre><h3 id="_8-複製文件到多個目錄" tabindex="-1">8. 複製文件到多個目錄 <a class="header-anchor" href="#_8-複製文件到多個目錄" aria-label="Permalink to “8. 複製文件到多個目錄”">​</a></h3><p>通常使用 cp 命令進行文件複製。複製文件通常看起來類似：</p><pre><code># cp /path-to-file/my_file.txt /path-to-new-directory/
</code></pre><p>現在假設你需要複製該文件到多個目錄：</p><pre><code># cp /home/user/my_file.txt /home/user/1
# cp /home/user/my_file.txt /home/user/2
# cp /home/user/my_file.txt /home/user/3
</code></pre><p>這有點荒唐。相反，你可以用簡單的一行命令解決問題：</p><pre><code># echo /home/user/1/ /home/user/2/ /home/user/3/ | xargs -n 1  cp /home/user/my_file.txt
</code></pre><h3 id="_9-刪除大文件" tabindex="-1">9. 刪除大文件 <a class="header-anchor" href="#_9-刪除大文件" aria-label="Permalink to “9. 刪除大文件”">​</a></h3><p>有時候文件可能會變得很大。我看過由於缺乏管理技能一個日誌文件就超過 250G 的例子。用 rm 命令可能不足以刪除該文件，因為有大量的數據需要移除。應該避免這個很“笨重”的操作。相反，你可以使用一個簡單的方法解決這個問題：</p><pre><code># &gt; /path-to-file/huge_file.log
</code></pre><p>當然你需要根據你實際情況替換路徑和文件名。上面的命令寫一個空輸出到該文件。用更簡單的話説它會清空文件而不會導致你的系統產生大的 I/O 消耗。</p><h3 id="_10-在多個-linux-服務器上運行相同命令" tabindex="-1">10. 在多個 Linux 服務器上運行相同命令 <a class="header-anchor" href="#_10-在多個-linux-服務器上運行相同命令" aria-label="Permalink to “10. 在多個 Linux 服務器上運行相同命令”">​</a></h3>`,19)),e("p",null,[n[8]||(n[8]=t("最近我們的一個讀者在 ",-1)),i(o,{href:"http://www.linuxsay.com/"},{default:r(()=>[...n[7]||(n[7]=[t("LinuxSay 論壇",-1)])]),_:1}),n[9]||(n[9]=t("提問説如何通過 ssh 在多個 Linux 服務器上執行一個命令。他機器的 IP 地址是：",-1))]),n[33]||(n[33]=e("pre",null,[e("code",null,`10.0.0.1
10.0.0.2
10.0.0.3
10.0.0.4
10.0.0.5
`)],-1)),n[34]||(n[34]=e("p",null,"這裏有一個簡單的解決方法。將服務器的 IP 地址寫到文件 list.txt 中，像上面那樣一行一個。然後運行：",-1)),n[35]||(n[35]=e("pre",null,[e("code",null,`# for in $i(cat list.txt); do ssh user@$i 'bash command'; done
`)],-1)),e("p",null,[n[11]||(n[11]=t("上面的命令中你需要用實際登錄的用户替換 “user”，用你希望執行的實際命令替換 “bash command”。這個方法非常適用於通過",-1)),i(o,{href:"https://linux.cn/article-5202-1.html"},{default:r(()=>[...n[10]||(n[10]=[t("使用 SSH 密鑰進行無密碼驗證",-1)])]),_:1}),n[12]||(n[12]=t("，因為這樣你不需要每次都為用户輸入密碼。",-1))]),n[36]||(n[36]=e("p",null,"注意取決於你 Linux 系統的設置，你可能還需要傳遞一些額外的參數給 SSH 命令。",-1)),n[37]||(n[37]=e("h3",{id:"總結",tabindex:"-1"},[t("總結 "),e("a",{class:"header-anchor",href:"#總結","aria-label":"Permalink to “總結”"},"​")],-1)),n[38]||(n[38]=e("p",null,"上面的例子都很簡單，我希望它們能幫助你發現 Linux 的優美之處，你如何能簡單實現在其它操作系統上需要更多時間的不同操作。",-1)),n[39]||(n[39]=e("hr",null,null,-1)),e("p",null,[n[14]||(n[14]=t("via: ",-1)),i(o,{href:"http://www.tecmint.com/10-useful-linux-command-line-tricks-for-newbies/"},{default:r(()=>[...n[13]||(n[13]=[t("http://www.tecmint.com/10-useful-linux-command-line-tricks-for-newbies/",-1)])]),_:1})]),e("p",null,[n[18]||(n[18]=t("作者：",-1)),i(o,{href:"http://www.tecmint.com/author/marintodorov89/"},{default:r(()=>[...n[15]||(n[15]=[t("Marin Todorov",-1)])]),_:1}),n[19]||(n[19]=t(" 譯者：",-1)),i(o,{href:"http://mutouxiaogui.cn/blog/"},{default:r(()=>[...n[16]||(n[16]=[t("ictlyh",-1)])]),_:1}),n[20]||(n[20]=t(" 校對：",-1)),i(o,{href:"https://github.com/wxy"},{default:r(()=>[...n[17]||(n[17]=[t("wxy",-1)])]),_:1})]),e("p",null,[n[23]||(n[23]=t("本文由 ",-1)),i(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[21]||(n[21]=[t("LCTT",-1)])]),_:1}),n[24]||(n[24]=t(" 原創編譯，",-1)),i(o,{href:"https://linux.cn/"},{default:r(()=>[...n[22]||(n[22]=[t("Linux中國",-1)])]),_:1}),n[25]||(n[25]=t(" 榮譽推出",-1))])])}const b=p(m,[["render",u]]);export{T as __pageData,b as default};
