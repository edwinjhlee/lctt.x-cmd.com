import{_ as a,a0 as i,w as p,s as l,ao as d,I as s,x as t,a1 as e,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"Shell腳本：使用rsync備份文件/目錄 | LCTT x X-CMD","titleTemplate":false,"description":"Shell腳本：使用rsync備份文件/目錄 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shell腳本：使用rsync備份文件/目錄 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shell腳本：使用rsync備份文件/目錄 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150520 Shell Script to Backup Files or Directories Using rsync","title":"Shell腳本：使用rsync備份文件/目錄","tag":"201506","desc":""},"relativePath":"201506/20150520 Shell Script to Backup Files or Directories Using rsync.md","filePath":"[post].md"}'),c={name:"201506/20150520 Shell Script to Backup Files or Directories Using rsync.md"};function u(h,n,x,m,y,f){const o=i("Link");return p(),l("div",null,[n[13]||(n[13]=d(`<h1 id="shell腳本-使用rsync備份文件-目錄" tabindex="-1">Shell腳本：使用rsync備份文件/目錄 <a class="header-anchor" href="#shell腳本-使用rsync備份文件-目錄" aria-label="Permalink to “Shell腳本：使用rsync備份文件/目錄”">​</a></h1><p>本文我們介紹一個shell腳本，用來使用rsync命令將你本地Linux機器上的文件/目錄備份到遠程Linux服務器上。使用該腳本會以交互的方式實施備份，你需要提供遠程備份服務器的主機名/ip地址和文件夾位置。我們使用一個單獨的列表文件，在這個文件中你需要列出要備份的文件/目錄。我們添加了兩個腳本，<strong>第一個腳本</strong>在每次拷貝完一個文件後詢問密碼（如果你啓用了ssh密鑰驗證，那麼就不會詢問密碼），而第二個腳本中，則只會提示一次輸入密碼。</p><p>我們打算備份bckup.txt，dataconfig.txt，docs和orcledb。</p><pre><code>[root@Fedora21 tmp]# ls -l
total 12
-rw-r--r--. 1 root root 0 May 15 10:43 bckrsync.sh
-rw-r--r--. 1 root root 0 May 15 10:44 bckup.txt
-rw-r--r--. 1 root root 0 May 15 10:46 dataconfig.txt
drwxr-xr-x. 2 root root 4096 May 15 10:45 docs
drwxr-xr-x. 2 root root 4096 May 15 10:44 oracledb
</code></pre><p>bckup.txt文件包含了需要備份的文件/目錄的詳情</p><pre><code>[root@Fedora21 tmp]# cat /tmp/bckup.txt
/tmp/oracledb
/tmp/dataconfig.txt
/tmp/docs
[root@Fedora21 tmp]#
</code></pre><h3 id="腳本-1" tabindex="-1">腳本 1： <a class="header-anchor" href="#腳本-1" aria-label="Permalink to “腳本 1：”">​</a></h3><pre><code>#!/bin/bash

# 將備份列表文件的路徑保存到變量中
backupf=&#39;/tmp/bckup.txt&#39;

# 輸入一個提示信息
echo &quot;Shell Script Backup Your Files / Directories Using rsync&quot;

# 檢查是否輸入了目標服務器，如果為空就再次提示用户輸入
while [ x$desthost = &quot;x&quot; ]; do

# 提示用户輸入目標服務器地址並保存到變量
read -p &quot;Destination backup Server : &quot; desthost

# 結束循環
done

# 檢查是否輸入了目標文件夾，如果為空就再次提示用户輸入
while [ x$destpath = &quot;x&quot; ]; do

# 提示用户輸入目標文件夾並保存到變量
read -p &quot;Destination Folder : &quot; destpath

# 結束循環
done

# 逐行讀取備份列表文件
for line in \`cat $backupf\`

# 對每一行都進行處理
do

# 顯示要被複制的文件/文件夾名稱
echo &quot;Copying $line ... &quot;
# 通過 rsync 複製文件/文件夾到目標位置

rsync -ar &quot;$line&quot; &quot;$desthost&quot;:&quot;$destpath&quot;

# 顯示完成
echo &quot;DONE&quot;

# 結束
done
</code></pre><h4 id="運行帶有輸出結果的腳本" tabindex="-1">運行帶有輸出結果的腳本 <a class="header-anchor" href="#運行帶有輸出結果的腳本" aria-label="Permalink to “運行帶有輸出結果的腳本”">​</a></h4><pre><code>[root@Fedora21 tmp]# ./bckrsync.sh
Shell Script Backup Your Files / Directories Using rsync
Destination backup Server : 104.*.*.41
Destination Folder : /tmp
Copying /tmp/oracledb ...
The authenticity of host &#39;104.*.*.41 (104.*.*.41)&#39; can&#39;t be established.
ECDSA key fingerprint is 96:11:61:17:7f:fa:......
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added &#39;104.*.*.41&#39; (ECDSA) to the list of known hosts.
root@104.*.*.41&#39;s password:
DONE
Copying /tmp/dataconfig.txt ...
root@104.*.*.41&#39;s password:
DONE
Copying /tmp/docs ...
root@104.*.*.41&#39;s password:
DONE
[root@Fedora21 tmp]#
</code></pre><h3 id="腳本-2" tabindex="-1">腳本 2： <a class="header-anchor" href="#腳本-2" aria-label="Permalink to “腳本 2：”">​</a></h3><pre><code>#!/bin/bash

# 將備份列表文件的路徑保存到變量中
backupf=&#39;/tmp/bckup.txt&#39;

# 輸入一個提示信息
echo &quot;Shell Script Backup Your Files / Directories Using rsync&quot;

# 檢查是否輸入了目標服務器，如果為空就再次提示用户輸入
while [ x$desthost = &quot;x&quot; ]; do

# 提示用户輸入目標服務器地址並保存到變量
read -p &quot;Destination backup Server : &quot; desthost

# 結束循環
done

# 檢查是否輸入了目標文件夾，如果為空就再次提示用户輸入
while [ x$destpath = &quot;x&quot; ]; do

# 提示用户輸入目標文件夾並保存到變量
read -p &quot;Destination Folder : &quot; destpath

# 結束循環
done

# 檢查是否輸入了目標服務器密碼，如果為空就再次提示用户輸入
while [ x$password = &quot;x&quot; ]; do
# 提示用户輸入密碼並保存到變量
# 使用 -s 選項不回顯輸入的密碼
read -sp &quot;Password : &quot; password
# 結束循環
done

# 逐行讀取備份列表文件
for line in \`cat $backupf\`

# 對每一行都進行處理
do

# 顯示要被複制的文件/文件夾名稱
echo &quot;Copying $line ... &quot;
# 使用 expect 來在腳本中輸入密碼
/usr/bin/expect &lt;&lt; EOD
# 推薦設置超時為 -1 
set timeout -1
# 通過 rsync 複製文件/文件夾到目標位置，使用 expect 的組成部分 spawn 命令

spawn rsync -ar \${line} \${desthost}:\${destpath}
# 上一行命令會等待 “password” 提示
expect &quot;*?assword:*&quot;
# 在腳本中提供密碼
send &quot;\${password}\\r&quot;
# 等待文件結束符（遠程服務器處理完了所有事情）
expect eof
# 結束 expect 腳本
EOD
# 顯示結束
echo &quot;DONE&quot;

# 完成
done
</code></pre><h4 id="運行第二個帶有輸出結果的腳本的屏幕截圖" tabindex="-1">運行第二個帶有輸出結果的腳本的屏幕截圖 <a class="header-anchor" href="#運行第二個帶有輸出結果的腳本的屏幕截圖" aria-label="Permalink to “運行第二個帶有輸出結果的腳本的屏幕截圖”">​</a></h4><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/bckuprsync-script.png" alt="rsync script"></p><p>希望這些腳本對你備份會有幫助！！</p><hr>`,16)),s("p",null,[n[1]||(n[1]=t("via: ",-1)),e(o,{href:"http://linoxide.com/linux-shell-script/shell-script-backup-files-directories-rsync/"},{default:r(()=>[...n[0]||(n[0]=[t("http://linoxide.com/linux-shell-script/shell-script-backup-files-directories-rsync/",-1)])]),_:1})]),s("p",null,[n[5]||(n[5]=t("作者：",-1)),e(o,{href:"http://linoxide.com/author/yevhend/"},{default:r(()=>[...n[2]||(n[2]=[t("Yevhen Duma",-1)])]),_:1}),n[6]||(n[6]=t(" 譯者：",-1)),e(o,{href:"https://github.com/GOLinux"},{default:r(()=>[...n[3]||(n[3]=[t("GOLinux",-1)])]),_:1}),n[7]||(n[7]=t(" 校對：",-1)),e(o,{href:"https://github.com/wxy"},{default:r(()=>[...n[4]||(n[4]=[t("wxy",-1)])]),_:1})]),s("p",null,[n[10]||(n[10]=t("本文由 ",-1)),e(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[8]||(n[8]=[t("LCTT",-1)])]),_:1}),n[11]||(n[11]=t(" 原創翻譯，",-1)),e(o,{href:"https://linux.cn/"},{default:r(()=>[...n[9]||(n[9]=[t("Linux中國",-1)])]),_:1}),n[12]||(n[12]=t(" 榮譽推出",-1))])])}const g=a(c,[["render",u]]);export{k as __pageData,g as default};
