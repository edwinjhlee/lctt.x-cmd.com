import{_ as n,a0 as c,w as s,s as a,ao as i,I as d,x as p,a1 as o,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"Linux shell中的那些小把戲 | LCTT x X-CMD","titleTemplate":false,"description":"Linux shell中的那些小把戲 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux shell中的那些小把戲 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux shell中的那些小把戲 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Linux shell tips and tricks","title":"Linux shell中的那些小把戲","tag":"201312","desc":""},"relativePath":"201312/Linux shell tips and tricks.md","filePath":"[post].md"}'),l={name:"201312/Linux shell tips and tricks.md"};function u(m,e,h,g,x,f){const t=c("Link");return s(),a("div",null,[e[11]||(e[11]=i(`<h1 id="linux-shell中的那些小把戲" tabindex="-1">Linux shell中的那些小把戲 <a class="header-anchor" href="#linux-shell中的那些小把戲" aria-label="Permalink to “Linux shell中的那些小把戲”">​</a></h1><p>我日常使用Linux shell(Bash)，但是我經常忘記一些有用的命令或者shell技巧。是的，我能記住一些命令，但是肯定不會只在特定的任務上使用一次，所以我就開始在我的Dropbox賬號裏用文本文件寫下這些Linux shell的小技巧，現在我決定共享它給你。這個表我以後還會更新。記住，這裏的一些貼士需要在你的Linux發行版上安裝額外的軟件。</p><p>在bash中檢查遠程端口是否打開:</p><pre><code>echo &gt;/dev/tcp/8.8.8.8/53 &amp;&amp; echo &quot;open&quot;
</code></pre><p>將進程掛起:</p><pre><code>Ctrl + z 
</code></pre><p>將進程移到前台:</p><pre><code>fg
</code></pre><p>（譯註，掛起的進程是不執行的，如果希望在後台執行，可以使用bg命令，並且指定通過jobs命令獲得的任務號。）</p><p>生成隨機16進制數字,n是字符的數量:</p><pre><code>openssl rand -hex n
</code></pre><p>在當前shell中執行一個文件中的命令（譯註：這個文件不是一個bash腳本，比如.bashrc、bash_profile等）:</p><pre><code>source /home/user/file.name
</code></pre><p>提取字符串的前5個字符:</p><pre><code>\${variable:0:5}
</code></pre><p>打開SSH調試模式（譯註：當你遇到SSH連接問題時很有用）:</p><pre><code>ssh -vvv user@ip_address
</code></pre><p>使用pem key的進行SSH連接：</p><pre><code>ssh user@ip_address -i key.pem
</code></pre><p>用wget獲取完整目錄列表到本地目錄:</p><pre><code>wget -r --no-parent --reject &quot;index.html*&quot; http://hostname/ -P /home/user/dirs
</code></pre><p>同時創建多個目錄:</p><pre><code>mkdir -p /home/user/{test,test1,test2}
</code></pre><p>以樹狀列出進程及子進程:</p><pre><code>ps axwef
</code></pre><p>創建war文件:</p><pre><code>jar -cvf name.war file
</code></pre><p>測試磁盤寫速度:</p><pre><code>dd if=/dev/zero of=/tmp/output.img bs=8k count=256k conv=fdatasync; rm -rf /tmp/output.img
</code></pre><p>測試磁盤讀速度:</p><pre><code>hdparm -Tt /dev/sda
</code></pre><p>獲取文本的md5值:</p><pre><code>echo -n &quot;text&quot; | md5sum
</code></pre><p>檢測xml語法:</p><pre><code>xmllint --noout file.xml
</code></pre><p>將tar.gz文件解壓到指定目錄:</p><pre><code>tar zxvf package.tar.gz -C new_dir
</code></pre><p>用curl獲取HTTP頭:</p><pre><code>curl -I http://www.example.com
</code></pre><p>修改一些文件或目錄的時間戳 (格式為：YYMMDDhhmm):</p><pre><code>touch -t 0712250000 file
</code></pre><p>使用wget從ftp下載:</p><pre><code>wget -m ftp://username:password@hostname
</code></pre><p>生成隨機密碼 (本例中16位字符長):</p><pre><code>LANG=c &lt; /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c\${1:-16};echo;
</code></pre><p>快速創建一個文件的備份（擴展名是.bkp）:</p><pre><code>cp some_file_name{,.bkp}
</code></pre><p>訪問Windows共享:</p><pre><code>smbclient -U &quot;DOMAIN\\user&quot; //dc.domain.com/share/test/dir
</code></pre><p>運行history中的命令 (這裏在history中的第100個):</p><pre><code>!100
</code></pre><p>unzip到目錄中:</p><pre><code>unzip package_name.zip -d dir_name
</code></pre><p>輸入多行文字 (按 CTRL + d 退出):</p><pre><code>cat &gt; test.txt
</code></pre><p>創建空白的文件或者清空已存在的文件:</p><pre><code>&gt; test.txt
</code></pre><p>從Ubuntu NTP服務器上更新日期:</p><pre><code>ntpdate ntp.ubuntu.com
</code></pre><p>netstat 顯示所有IPv4的TCP監聽的端口:</p><pre><code>netstat -lnt4 | awk &#39;{print $4}&#39; | cut -f2 -d: | grep -o &#39;[0-9]*&#39;
</code></pre><p>將qcow2的鏡像轉化成raw格式:</p><pre><code>qemu-img convert -f qcow2 -O raw precise-server-cloudimg-amd64-disk1.img \\
                                 precise-server-cloudimg-amd64-disk1.raw
</code></pre><p>重複運行命令並顯示它的輸出 (默認2秒重複一次):</p><pre><code>watch ps -ef
</code></pre><p>顯示所有用户:</p><pre><code>getent passwd
</code></pre><p>以讀寫模式掛載根文件系統:</p><pre><code>mount -o remount,rw /
</code></pre><p>掛載目錄 (適合於符號鏈接不能工作的情況下):</p><pre><code>mount --bind /source /destination
</code></pre><p>發送DNS動態更新給DNS:</p><pre><code>nsupdate &lt;&lt;EOF
update add $HOST 86400 A $IP
send
EOF
</code></pre><p>遞歸grep所有目錄</p><pre><code>grep -r &quot;some_text&quot; /path/to/dir
</code></pre><p>列出10個最大的系統中已打開的文件:</p><pre><code>lsof / | awk &#39;{ if($7 &gt; 1048576) print $7/1048576 &quot;MB &quot;$9 }&#39; | sort -n -u | tail
</code></pre><p>以MB顯示空餘內存:</p><pre><code>free -m | grep cache | awk &#39;/[0-9]/{ print $4&quot; MB&quot; }&#39;
</code></pre><p>打開vim並跳轉到文件最後:</p><pre><code>vim + some_file_name
</code></pre><p>git clone特定branch (本例是master分支):</p><pre><code>git clone git@github.com:name/app.git -b master
</code></pre><p>git切換到另外一個branch (本例是develop分支):</p><pre><code>git checkout develop
</code></pre><p>git刪除一個branch(本例是myfeature):</p><pre><code>git branch -d myfeature
</code></pre><p>Git刪除一個遠程branch:</p><pre><code>git push origin :branchName
</code></pre><p>Git push 新的branch到遠程:</p><pre><code>git push -u origin mynewfeature
</code></pre><p>打印history中最後的cat命令</p><pre><code>!cat:p
</code></pre><p>運行history中的最後的cat命令:</p><pre><code>!cat
</code></pre><p>找出在/home/user中的所有空子目錄:</p><pre><code>find /home/user -maxdepth 1 -type d -empty
</code></pre><p>得到test.txt中50到60行的文本:</p><pre><code>&lt; test.txt sed -n &#39;50,60p&#39;
</code></pre><p>以sudo權限重新運行上一個執行的命令 (如果是: mkdir /root/test, 下面會運行: sudo mkdir /root/test)（譯註：當你執行一個命令忘記sudo時，可以這樣重新執行，而不必再把完整命令敲一遍）:</p><pre><code>sudo !!
</code></pre><p>創建臨時RAM文件系統 - ramdisk (請先創建 /tmpram 目錄):</p><pre><code>mount -t tmpfs tmpfs /tmpram -o size=512m
</code></pre><p>Grep完整的單詞（譯註：而不是其它單詞的一部分）:</p><pre><code>grep -w &quot;name&quot; test.txt
</code></pre><p>提升權限後在一個文件後追加文本:</p><pre><code>echo &quot;some text&quot; | sudo tee -a /path/file
</code></pre><p>列出所有支持的kill信號:</p><pre><code>kill -l
</code></pre><p>生成隨機密碼 (本例中16個字符長):</p><pre><code>openssl rand -base64 16
</code></pre><p>在bash歷史中不記錄最後的會話:</p><pre><code>kill -9 $$
</code></pre><p>掃描網絡來找出開放的端口:</p><pre><code>nmap -p 8081 172.20.0.0/16
</code></pre><p>設置git email:</p><pre><code>git config --global user.email &quot;me@example.com&quot;
</code></pre><p>如果你有未提交的commit，與master同步:</p><pre><code>git pull --rebase origin master
</code></pre><p>將文件名中含有txt的所有文件移動到/home/user:</p><pre><code>find -iname &quot;*txt*&quot; -exec mv -v {} /home/user \\;
</code></pre><p>按行將兩個文件中的對應行合併顯示:</p><pre><code>paste test.txt test1.txt
</code></pre><p>shell中的進度條:</p><pre><code>pv data.log
</code></pre><p>用netcat發送數據給服務器:</p><pre><code>echo &quot;hosts.sampleHost 10 \`date +%s\`&quot; | nc 192.168.200.2 3000
</code></pre><p>轉換tab為空格:</p><pre><code>expand test.txt &gt; test1.txt
</code></pre><p>跳過bash歷史:</p><pre><code>&lt;&lt;空格&gt;&gt;cmd
</code></pre><p>回到之前的工作目錄:</p><pre><code>cd -
</code></pre><p>切割大的tar.gz文件為幾個文件 (每個100MB)，並還原:</p><pre><code>split –b 100m /path/to/large/archive /path/to/output/files
cat files* &gt; archive
</code></pre><p>用curl獲取HTTP狀態值:</p><pre><code>curl -sL -w &quot;%{http_code}\\\\n&quot; www.example.com -o /dev/null
</code></pre><p>當 Ctrl + c 沒用時:</p><pre><code>Ctrl + \\
</code></pre><p>獲取文件所有者:</p><pre><code>stat -c %U file.txt
</code></pre><p>列出塊設備:</p><pre><code>lsblk -f
</code></pre><p>找出文件中帶有末尾空格的文件:</p><pre><code>find . -type f -exec egrep -l &quot; +$&quot; &quot;{}&quot; \\;
</code></pre><p>找出用tab縮進的文件:</p><pre><code>find . -type f -exec egrep -l $&#39;\\t&#39; &quot;{}&quot; \\;
</code></pre><p>用&quot;=&quot;打印水平行</p><pre><code>printf &#39;%100s\\n&#39; | tr &#39; &#39; =
</code></pre><p><strong>更新: 2013年11月25日</strong></p><hr>`,151)),d("p",null,[e[1]||(e[1]=p("via: ",-1)),o(t,{href:"http://www.techbar.me/linux-shell-tips/"},{default:r(()=>[...e[0]||(e[0]=[p("http://www.techbar.me/linux-shell-tips/",-1)])]),_:1})]),d("p",null,[e[4]||(e[4]=p("譯者：",-1)),o(t,{href:"https://github.com/geekpi"},{default:r(()=>[...e[2]||(e[2]=[p("geekpi",-1)])]),_:1}),e[5]||(e[5]=p(" 校對：",-1)),o(t,{href:"https://github.com/wxy"},{default:r(()=>[...e[3]||(e[3]=[p("wxy",-1)])]),_:1})]),d("p",null,[e[8]||(e[8]=p("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[p("LCTT",-1)])]),_:1}),e[9]||(e[9]=p(" 原創翻譯，",-1)),o(t,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[p("Linux中國",-1)])]),_:1}),e[10]||(e[10]=p(" 榮譽推出",-1))])])}const k=n(l,[["render",u]]);export{q as __pageData,k as default};
