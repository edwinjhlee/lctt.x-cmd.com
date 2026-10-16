import{_ as r,a0 as i,w as l,s as p,ao as d,I as a,x as s,a1 as t,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"如何在Linux下使用rsync | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux下使用rsync | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux下使用rsync | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux下使用rsync | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141222 How to use Rsync Command In Linux With Examples","title":"如何在Linux下使用rsync","tag":"201412","desc":""},"relativePath":"201412/20141222 How to use Rsync Command In Linux With Examples.md","filePath":"[post].md"}'),h={name:"201412/20141222 How to use Rsync Command In Linux With Examples.md"};function c(b,e,u,m,y,f){const n=i("Link");return l(),p("div",null,[e[13]||(e[13]=d(`<h1 id="如何在linux下使用rsync" tabindex="-1">如何在Linux下使用rsync <a class="header-anchor" href="#如何在linux下使用rsync" aria-label="Permalink to “如何在Linux下使用rsync”">​</a></h1><p>对于各种组织和公司，数据对他们是最重要的，即使对于电子商务，数据也是同样重要的。Rsync是一款通过网络备份重要数据的工具/软件。它同样是一个在类Unix和Window系统上通过网络在系统间同步文件夹和文件的网络协议。Rsync可以复制或者显示目录并复制文件。Rsync默认监听TCP 873端口，通过远程shell如rsh和ssh复制文件。Rsync必须在远程和本地系统上都安装。</p><p>rsync的主要好处是：</p><p><strong>速度</strong>：最初会在本地和远程之间拷贝所有内容。下次，只会传输发生改变的块或者字节。</p><p><strong>安全</strong>：传输可以通过ssh协议加密数据。</p><p><strong>低带宽</strong>：rsync可以在两端压缩和解压数据块。</p><p>语法:</p><pre><code>#rsysnc [options] source path destination path
</code></pre><h3 id="示例-1-启用压缩" tabindex="-1">示例： 1 - 启用压缩 <a class="header-anchor" href="#示例-1-启用压缩" aria-label="Permalink to “示例： 1 - 启用压缩”">​</a></h3><pre><code>[root@localhost /]# rsync -zvr /home/aloft/ /backuphomedir
building file list ... done
.bash_logout
.bash_profile
.bashrc
sent 472 bytes received 86 bytes 1116.00 bytes/sec
total size is 324 speedup is 0.58
</code></pre><p>上面的rsync命令使用了-z来启用压缩，-v是可视化，-r是递归。上面在本地的/home/aloft/和/backuphomedir之间同步。</p><h3 id="示例-2-保留文件和文件夹的属性" tabindex="-1">示例： 2 - 保留文件和文件夹的属性 <a class="header-anchor" href="#示例-2-保留文件和文件夹的属性" aria-label="Permalink to “示例： 2 - 保留文件和文件夹的属性”">​</a></h3><pre><code>[root@localhost /]# rsync -azvr /home/aloft/ /backuphomedir
building file list ... done
./
.bash_logout
.bash_profile
.bashrc

sent 514 bytes received 92 bytes 1212.00 bytes/sec
total size is 324 speedup is 0.53
</code></pre><p>上面我们使用了-a选项，它保留了所有人和所属组、时间戳、软链接、权限，并以递归模式运行。</p><h3 id="示例-3-同步本地到远程主机" tabindex="-1">示例： 3 - 同步本地到远程主机 <a class="header-anchor" href="#示例-3-同步本地到远程主机" aria-label="Permalink to “示例： 3 - 同步本地到远程主机”">​</a></h3><pre><code>root@localhost /]# rsync -avz /home/aloft/ azmath@192.168.1.4:192.168.1.4:/share/rsysnctest/
Password:

building file list ... done
./
.bash_logout
.bash_profile
.bashrc
sent 514 bytes received 92 bytes 1212.00 bytes/sec
total size is 324 speedup is 0.53
</code></pre><p>上面的命令允许你在本地和远程机器之间同步。你可以看到，在同步文件到另一个系统时提示你输入密码。在做远程同步时，你需要指定远程系统的用户名和IP或者主机名。</p><h3 id="示例-4-远程同步到本地" tabindex="-1">示例： 4 - 远程同步到本地 <a class="header-anchor" href="#示例-4-远程同步到本地" aria-label="Permalink to “示例： 4 - 远程同步到本地”">​</a></h3><pre><code>[root@localhost /]# rsync -avz azmath@192.168.1.4:192.168.1.4:/share/rsysnctest/ /home/aloft/
Password:
building file list ... done
./
.bash_logout
.bash_profile
.bashrc
sent 514 bytes received 92 bytes 1212.00 bytes/sec
total size is 324 speedup is 0.53
</code></pre><p>上面的命令同步远程文件到本地。</p><h3 id="示例-5-找出文件间的不同" tabindex="-1">示例： 5 - 找出文件间的不同 <a class="header-anchor" href="#示例-5-找出文件间的不同" aria-label="Permalink to “示例： 5 - 找出文件间的不同”">​</a></h3><pre><code>[root@localhost backuphomedir]# rsync -avzi /backuphomedir /home/aloft/
building file list ... done
cd+++++++ backuphomedir/
&gt;f+++++++ backuphomedir/.bash_logout
&gt;f+++++++ backuphomedir/.bash_profile
&gt;f+++++++ backuphomedir/.bashrc
&gt;f+++++++ backuphomedir/abc
&gt;f+++++++ backuphomedir/xyz

sent 650 bytes received 136 bytes 1572.00 bytes/sec
total size is 324 speedup is 0.41
</code></pre><p>上面的命令帮助你找出源地址和目标地址之间文件或者目录的不同。</p><h3 id="示例-6-备份" tabindex="-1">示例: 6 - 备份 <a class="header-anchor" href="#示例-6-备份" aria-label="Permalink to “示例: 6 - 备份”">​</a></h3><p>rsync命令可以用来备份linux。</p><p>你可以在cron中使用rsync安排备份。</p><pre><code>0 0 * * * /usr/local/sbin/bkpscript &amp;&gt; /dev/null
</code></pre><hr><pre><code>vi /usr/local/sbin/bkpscript

rsync -avz -e ‘ssh -p2093′ /home/test/ root@192.168.1.150:/oracle/data/
</code></pre><hr>`,30)),a("p",null,[e[1]||(e[1]=s("via: ",-1)),t(n,{href:"http://linoxide.com/how-tos/rsync-copy/"},{default:o(()=>[...e[0]||(e[0]=[s("http://linoxide.com/how-tos/rsync-copy/",-1)])]),_:1})]),a("p",null,[e[5]||(e[5]=s("作者：",-1)),t(n,{href:"http://linoxide.com/author/bobbin/"},{default:o(()=>[...e[2]||(e[2]=[s("Bobbin Zachariah",-1)])]),_:1}),e[6]||(e[6]=s(" 译者：",-1)),t(n,{href:"https://github.com/geekpi"},{default:o(()=>[...e[3]||(e[3]=[s("geekpi",-1)])]),_:1}),e[7]||(e[7]=s(" 校对：",-1)),t(n,{href:"https://github.com/wxy"},{default:o(()=>[...e[4]||(e[4]=[s("wxy",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=s("本文由 ",-1)),t(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[8]||(e[8]=[s("LCTT",-1)])]),_:1}),e[11]||(e[11]=s(" 原创翻译，",-1)),t(n,{href:"http://linux.cn/"},{default:o(()=>[...e[9]||(e[9]=[s("Linux中国",-1)])]),_:1}),e[12]||(e[12]=s(" 荣誉推出",-1))])])}const T=r(h,[["render",c]]);export{k as __pageData,T as default};
