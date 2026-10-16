import{_ as n,a0 as c,w as s,s as a,ao as i,I as d,x as p,a1 as o,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"Linux shell中的那些小把戏 | LCTT x X-CMD","titleTemplate":false,"description":"Linux shell中的那些小把戏 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux shell中的那些小把戏 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux shell中的那些小把戏 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Linux shell tips and tricks","title":"Linux shell中的那些小把戏","tag":"201312","desc":""},"relativePath":"201312/Linux shell tips and tricks.md","filePath":"[post].md"}'),l={name:"201312/Linux shell tips and tricks.md"};function u(m,e,h,g,x,f){const t=c("Link");return s(),a("div",null,[e[11]||(e[11]=i(`<h1 id="linux-shell中的那些小把戏" tabindex="-1">Linux shell中的那些小把戏 <a class="header-anchor" href="#linux-shell中的那些小把戏" aria-label="Permalink to “Linux shell中的那些小把戏”">​</a></h1><p>我日常使用Linux shell(Bash)，但是我经常忘记一些有用的命令或者shell技巧。是的，我能记住一些命令，但是肯定不会只在特定的任务上使用一次，所以我就开始在我的Dropbox账号里用文本文件写下这些Linux shell的小技巧，现在我决定共享它给你。这个表我以后还会更新。记住，这里的一些贴士需要在你的Linux发行版上安装额外的软件。</p><p>在bash中检查远程端口是否打开:</p><pre><code>echo &gt;/dev/tcp/8.8.8.8/53 &amp;&amp; echo &quot;open&quot;
</code></pre><p>将进程挂起:</p><pre><code>Ctrl + z 
</code></pre><p>将进程移到前台:</p><pre><code>fg
</code></pre><p>（译注，挂起的进程是不执行的，如果希望在后台执行，可以使用bg命令，并且指定通过jobs命令获得的任务号。）</p><p>生成随机16进制数字,n是字符的数量:</p><pre><code>openssl rand -hex n
</code></pre><p>在当前shell中执行一个文件中的命令（译注：这个文件不是一个bash脚本，比如.bashrc、bash_profile等）:</p><pre><code>source /home/user/file.name
</code></pre><p>提取字符串的前5个字符:</p><pre><code>\${variable:0:5}
</code></pre><p>打开SSH调试模式（译注：当你遇到SSH连接问题时很有用）:</p><pre><code>ssh -vvv user@ip_address
</code></pre><p>使用pem key的进行SSH连接：</p><pre><code>ssh user@ip_address -i key.pem
</code></pre><p>用wget获取完整目录列表到本地目录:</p><pre><code>wget -r --no-parent --reject &quot;index.html*&quot; http://hostname/ -P /home/user/dirs
</code></pre><p>同时创建多个目录:</p><pre><code>mkdir -p /home/user/{test,test1,test2}
</code></pre><p>以树状列出进程及子进程:</p><pre><code>ps axwef
</code></pre><p>创建war文件:</p><pre><code>jar -cvf name.war file
</code></pre><p>测试磁盘写速度:</p><pre><code>dd if=/dev/zero of=/tmp/output.img bs=8k count=256k conv=fdatasync; rm -rf /tmp/output.img
</code></pre><p>测试磁盘读速度:</p><pre><code>hdparm -Tt /dev/sda
</code></pre><p>获取文本的md5值:</p><pre><code>echo -n &quot;text&quot; | md5sum
</code></pre><p>检测xml语法:</p><pre><code>xmllint --noout file.xml
</code></pre><p>将tar.gz文件解压到指定目录:</p><pre><code>tar zxvf package.tar.gz -C new_dir
</code></pre><p>用curl获取HTTP头:</p><pre><code>curl -I http://www.example.com
</code></pre><p>修改一些文件或目录的时间戳 (格式为：YYMMDDhhmm):</p><pre><code>touch -t 0712250000 file
</code></pre><p>使用wget从ftp下载:</p><pre><code>wget -m ftp://username:password@hostname
</code></pre><p>生成随机密码 (本例中16位字符长):</p><pre><code>LANG=c &lt; /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c\${1:-16};echo;
</code></pre><p>快速创建一个文件的备份（扩展名是.bkp）:</p><pre><code>cp some_file_name{,.bkp}
</code></pre><p>访问Windows共享:</p><pre><code>smbclient -U &quot;DOMAIN\\user&quot; //dc.domain.com/share/test/dir
</code></pre><p>运行history中的命令 (这里在history中的第100个):</p><pre><code>!100
</code></pre><p>unzip到目录中:</p><pre><code>unzip package_name.zip -d dir_name
</code></pre><p>输入多行文字 (按 CTRL + d 退出):</p><pre><code>cat &gt; test.txt
</code></pre><p>创建空白的文件或者清空已存在的文件:</p><pre><code>&gt; test.txt
</code></pre><p>从Ubuntu NTP服务器上更新日期:</p><pre><code>ntpdate ntp.ubuntu.com
</code></pre><p>netstat 显示所有IPv4的TCP监听的端口:</p><pre><code>netstat -lnt4 | awk &#39;{print $4}&#39; | cut -f2 -d: | grep -o &#39;[0-9]*&#39;
</code></pre><p>将qcow2的镜像转化成raw格式:</p><pre><code>qemu-img convert -f qcow2 -O raw precise-server-cloudimg-amd64-disk1.img \\
                                 precise-server-cloudimg-amd64-disk1.raw
</code></pre><p>重复运行命令并显示它的输出 (默认2秒重复一次):</p><pre><code>watch ps -ef
</code></pre><p>显示所有用户:</p><pre><code>getent passwd
</code></pre><p>以读写模式挂载根文件系统:</p><pre><code>mount -o remount,rw /
</code></pre><p>挂载目录 (适合于符号链接不能工作的情况下):</p><pre><code>mount --bind /source /destination
</code></pre><p>发送DNS动态更新给DNS:</p><pre><code>nsupdate &lt;&lt;EOF
update add $HOST 86400 A $IP
send
EOF
</code></pre><p>递归grep所有目录</p><pre><code>grep -r &quot;some_text&quot; /path/to/dir
</code></pre><p>列出10个最大的系统中已打开的文件:</p><pre><code>lsof / | awk &#39;{ if($7 &gt; 1048576) print $7/1048576 &quot;MB &quot;$9 }&#39; | sort -n -u | tail
</code></pre><p>以MB显示空余内存:</p><pre><code>free -m | grep cache | awk &#39;/[0-9]/{ print $4&quot; MB&quot; }&#39;
</code></pre><p>打开vim并跳转到文件最后:</p><pre><code>vim + some_file_name
</code></pre><p>git clone特定branch (本例是master分支):</p><pre><code>git clone git@github.com:name/app.git -b master
</code></pre><p>git切换到另外一个branch (本例是develop分支):</p><pre><code>git checkout develop
</code></pre><p>git删除一个branch(本例是myfeature):</p><pre><code>git branch -d myfeature
</code></pre><p>Git删除一个远程branch:</p><pre><code>git push origin :branchName
</code></pre><p>Git push 新的branch到远程:</p><pre><code>git push -u origin mynewfeature
</code></pre><p>打印history中最后的cat命令</p><pre><code>!cat:p
</code></pre><p>运行history中的最后的cat命令:</p><pre><code>!cat
</code></pre><p>找出在/home/user中的所有空子目录:</p><pre><code>find /home/user -maxdepth 1 -type d -empty
</code></pre><p>得到test.txt中50到60行的文本:</p><pre><code>&lt; test.txt sed -n &#39;50,60p&#39;
</code></pre><p>以sudo权限重新运行上一个执行的命令 (如果是: mkdir /root/test, 下面会运行: sudo mkdir /root/test)（译注：当你执行一个命令忘记sudo时，可以这样重新执行，而不必再把完整命令敲一遍）:</p><pre><code>sudo !!
</code></pre><p>创建临时RAM文件系统 - ramdisk (请先创建 /tmpram 目录):</p><pre><code>mount -t tmpfs tmpfs /tmpram -o size=512m
</code></pre><p>Grep完整的单词（译注：而不是其它单词的一部分）:</p><pre><code>grep -w &quot;name&quot; test.txt
</code></pre><p>提升权限后在一个文件后追加文本:</p><pre><code>echo &quot;some text&quot; | sudo tee -a /path/file
</code></pre><p>列出所有支持的kill信号:</p><pre><code>kill -l
</code></pre><p>生成随机密码 (本例中16个字符长):</p><pre><code>openssl rand -base64 16
</code></pre><p>在bash历史中不记录最后的会话:</p><pre><code>kill -9 $$
</code></pre><p>扫描网络来找出开放的端口:</p><pre><code>nmap -p 8081 172.20.0.0/16
</code></pre><p>设置git email:</p><pre><code>git config --global user.email &quot;me@example.com&quot;
</code></pre><p>如果你有未提交的commit，与master同步:</p><pre><code>git pull --rebase origin master
</code></pre><p>将文件名中含有txt的所有文件移动到/home/user:</p><pre><code>find -iname &quot;*txt*&quot; -exec mv -v {} /home/user \\;
</code></pre><p>按行将两个文件中的对应行合并显示:</p><pre><code>paste test.txt test1.txt
</code></pre><p>shell中的进度条:</p><pre><code>pv data.log
</code></pre><p>用netcat发送数据给服务器:</p><pre><code>echo &quot;hosts.sampleHost 10 \`date +%s\`&quot; | nc 192.168.200.2 3000
</code></pre><p>转换tab为空格:</p><pre><code>expand test.txt &gt; test1.txt
</code></pre><p>跳过bash历史:</p><pre><code>&lt;&lt;空格&gt;&gt;cmd
</code></pre><p>回到之前的工作目录:</p><pre><code>cd -
</code></pre><p>切割大的tar.gz文件为几个文件 (每个100MB)，并还原:</p><pre><code>split –b 100m /path/to/large/archive /path/to/output/files
cat files* &gt; archive
</code></pre><p>用curl获取HTTP状态值:</p><pre><code>curl -sL -w &quot;%{http_code}\\\\n&quot; www.example.com -o /dev/null
</code></pre><p>当 Ctrl + c 没用时:</p><pre><code>Ctrl + \\
</code></pre><p>获取文件所有者:</p><pre><code>stat -c %U file.txt
</code></pre><p>列出块设备:</p><pre><code>lsblk -f
</code></pre><p>找出文件中带有末尾空格的文件:</p><pre><code>find . -type f -exec egrep -l &quot; +$&quot; &quot;{}&quot; \\;
</code></pre><p>找出用tab缩进的文件:</p><pre><code>find . -type f -exec egrep -l $&#39;\\t&#39; &quot;{}&quot; \\;
</code></pre><p>用&quot;=&quot;打印水平行</p><pre><code>printf &#39;%100s\\n&#39; | tr &#39; &#39; =
</code></pre><p><strong>更新: 2013年11月25日</strong></p><hr>`,151)),d("p",null,[e[1]||(e[1]=p("via: ",-1)),o(t,{href:"http://www.techbar.me/linux-shell-tips/"},{default:r(()=>[...e[0]||(e[0]=[p("http://www.techbar.me/linux-shell-tips/",-1)])]),_:1})]),d("p",null,[e[4]||(e[4]=p("译者：",-1)),o(t,{href:"https://github.com/geekpi"},{default:r(()=>[...e[2]||(e[2]=[p("geekpi",-1)])]),_:1}),e[5]||(e[5]=p(" 校对：",-1)),o(t,{href:"https://github.com/wxy"},{default:r(()=>[...e[3]||(e[3]=[p("wxy",-1)])]),_:1})]),d("p",null,[e[8]||(e[8]=p("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[p("LCTT",-1)])]),_:1}),e[9]||(e[9]=p(" 原创翻译，",-1)),o(t,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[p("Linux中国",-1)])]),_:1}),e[10]||(e[10]=p(" 荣誉推出",-1))])])}const k=n(l,[["render",u]]);export{q as __pageData,k as default};
