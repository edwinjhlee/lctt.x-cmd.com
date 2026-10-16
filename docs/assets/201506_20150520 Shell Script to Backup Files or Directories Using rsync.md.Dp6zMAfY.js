import{_ as a,a0 as i,w as p,s as l,ao as d,I as s,x as t,a1 as e,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"Shell脚本：使用rsync备份文件/目录 | LCTT x X-CMD","titleTemplate":false,"description":"Shell脚本：使用rsync备份文件/目录 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shell脚本：使用rsync备份文件/目录 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shell脚本：使用rsync备份文件/目录 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150520 Shell Script to Backup Files or Directories Using rsync","title":"Shell脚本：使用rsync备份文件/目录","tag":"201506","desc":""},"relativePath":"201506/20150520 Shell Script to Backup Files or Directories Using rsync.md","filePath":"[post].md"}'),c={name:"201506/20150520 Shell Script to Backup Files or Directories Using rsync.md"};function u(h,n,x,m,y,f){const o=i("Link");return p(),l("div",null,[n[13]||(n[13]=d(`<h1 id="shell脚本-使用rsync备份文件-目录" tabindex="-1">Shell脚本：使用rsync备份文件/目录 <a class="header-anchor" href="#shell脚本-使用rsync备份文件-目录" aria-label="Permalink to “Shell脚本：使用rsync备份文件/目录”">​</a></h1><p>本文我们介绍一个shell脚本，用来使用rsync命令将你本地Linux机器上的文件/目录备份到远程Linux服务器上。使用该脚本会以交互的方式实施备份，你需要提供远程备份服务器的主机名/ip地址和文件夹位置。我们使用一个单独的列表文件，在这个文件中你需要列出要备份的文件/目录。我们添加了两个脚本，<strong>第一个脚本</strong>在每次拷贝完一个文件后询问密码（如果你启用了ssh密钥验证，那么就不会询问密码），而第二个脚本中，则只会提示一次输入密码。</p><p>我们打算备份bckup.txt，dataconfig.txt，docs和orcledb。</p><pre><code>[root@Fedora21 tmp]# ls -l
total 12
-rw-r--r--. 1 root root 0 May 15 10:43 bckrsync.sh
-rw-r--r--. 1 root root 0 May 15 10:44 bckup.txt
-rw-r--r--. 1 root root 0 May 15 10:46 dataconfig.txt
drwxr-xr-x. 2 root root 4096 May 15 10:45 docs
drwxr-xr-x. 2 root root 4096 May 15 10:44 oracledb
</code></pre><p>bckup.txt文件包含了需要备份的文件/目录的详情</p><pre><code>[root@Fedora21 tmp]# cat /tmp/bckup.txt
/tmp/oracledb
/tmp/dataconfig.txt
/tmp/docs
[root@Fedora21 tmp]#
</code></pre><h3 id="脚本-1" tabindex="-1">脚本 1： <a class="header-anchor" href="#脚本-1" aria-label="Permalink to “脚本 1：”">​</a></h3><pre><code>#!/bin/bash

# 将备份列表文件的路径保存到变量中
backupf=&#39;/tmp/bckup.txt&#39;

# 输入一个提示信息
echo &quot;Shell Script Backup Your Files / Directories Using rsync&quot;

# 检查是否输入了目标服务器，如果为空就再次提示用户输入
while [ x$desthost = &quot;x&quot; ]; do

# 提示用户输入目标服务器地址并保存到变量
read -p &quot;Destination backup Server : &quot; desthost

# 结束循环
done

# 检查是否输入了目标文件夹，如果为空就再次提示用户输入
while [ x$destpath = &quot;x&quot; ]; do

# 提示用户输入目标文件夹并保存到变量
read -p &quot;Destination Folder : &quot; destpath

# 结束循环
done

# 逐行读取备份列表文件
for line in \`cat $backupf\`

# 对每一行都进行处理
do

# 显示要被复制的文件/文件夹名称
echo &quot;Copying $line ... &quot;
# 通过 rsync 复制文件/文件夹到目标位置

rsync -ar &quot;$line&quot; &quot;$desthost&quot;:&quot;$destpath&quot;

# 显示完成
echo &quot;DONE&quot;

# 结束
done
</code></pre><h4 id="运行带有输出结果的脚本" tabindex="-1">运行带有输出结果的脚本 <a class="header-anchor" href="#运行带有输出结果的脚本" aria-label="Permalink to “运行带有输出结果的脚本”">​</a></h4><pre><code>[root@Fedora21 tmp]# ./bckrsync.sh
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
</code></pre><h3 id="脚本-2" tabindex="-1">脚本 2： <a class="header-anchor" href="#脚本-2" aria-label="Permalink to “脚本 2：”">​</a></h3><pre><code>#!/bin/bash

# 将备份列表文件的路径保存到变量中
backupf=&#39;/tmp/bckup.txt&#39;

# 输入一个提示信息
echo &quot;Shell Script Backup Your Files / Directories Using rsync&quot;

# 检查是否输入了目标服务器，如果为空就再次提示用户输入
while [ x$desthost = &quot;x&quot; ]; do

# 提示用户输入目标服务器地址并保存到变量
read -p &quot;Destination backup Server : &quot; desthost

# 结束循环
done

# 检查是否输入了目标文件夹，如果为空就再次提示用户输入
while [ x$destpath = &quot;x&quot; ]; do

# 提示用户输入目标文件夹并保存到变量
read -p &quot;Destination Folder : &quot; destpath

# 结束循环
done

# 检查是否输入了目标服务器密码，如果为空就再次提示用户输入
while [ x$password = &quot;x&quot; ]; do
# 提示用户输入密码并保存到变量
# 使用 -s 选项不回显输入的密码
read -sp &quot;Password : &quot; password
# 结束循环
done

# 逐行读取备份列表文件
for line in \`cat $backupf\`

# 对每一行都进行处理
do

# 显示要被复制的文件/文件夹名称
echo &quot;Copying $line ... &quot;
# 使用 expect 来在脚本中输入密码
/usr/bin/expect &lt;&lt; EOD
# 推荐设置超时为 -1 
set timeout -1
# 通过 rsync 复制文件/文件夹到目标位置，使用 expect 的组成部分 spawn 命令

spawn rsync -ar \${line} \${desthost}:\${destpath}
# 上一行命令会等待 “password” 提示
expect &quot;*?assword:*&quot;
# 在脚本中提供密码
send &quot;\${password}\\r&quot;
# 等待文件结束符（远程服务器处理完了所有事情）
expect eof
# 结束 expect 脚本
EOD
# 显示结束
echo &quot;DONE&quot;

# 完成
done
</code></pre><h4 id="运行第二个带有输出结果的脚本的屏幕截图" tabindex="-1">运行第二个带有输出结果的脚本的屏幕截图 <a class="header-anchor" href="#运行第二个带有输出结果的脚本的屏幕截图" aria-label="Permalink to “运行第二个带有输出结果的脚本的屏幕截图”">​</a></h4><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/bckuprsync-script.png" alt="rsync script"></p><p>希望这些脚本对你备份会有帮助！！</p><hr>`,16)),s("p",null,[n[1]||(n[1]=t("via: ",-1)),e(o,{href:"http://linoxide.com/linux-shell-script/shell-script-backup-files-directories-rsync/"},{default:r(()=>[...n[0]||(n[0]=[t("http://linoxide.com/linux-shell-script/shell-script-backup-files-directories-rsync/",-1)])]),_:1})]),s("p",null,[n[5]||(n[5]=t("作者：",-1)),e(o,{href:"http://linoxide.com/author/yevhend/"},{default:r(()=>[...n[2]||(n[2]=[t("Yevhen Duma",-1)])]),_:1}),n[6]||(n[6]=t(" 译者：",-1)),e(o,{href:"https://github.com/GOLinux"},{default:r(()=>[...n[3]||(n[3]=[t("GOLinux",-1)])]),_:1}),n[7]||(n[7]=t(" 校对：",-1)),e(o,{href:"https://github.com/wxy"},{default:r(()=>[...n[4]||(n[4]=[t("wxy",-1)])]),_:1})]),s("p",null,[n[10]||(n[10]=t("本文由 ",-1)),e(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[8]||(n[8]=[t("LCTT",-1)])]),_:1}),n[11]||(n[11]=t(" 原创翻译，",-1)),e(o,{href:"https://linux.cn/"},{default:r(()=>[...n[9]||(n[9]=[t("Linux中国",-1)])]),_:1}),n[12]||(n[12]=t(" 荣誉推出",-1))])])}const g=a(c,[["render",u]]);export{k as __pageData,g as default};
