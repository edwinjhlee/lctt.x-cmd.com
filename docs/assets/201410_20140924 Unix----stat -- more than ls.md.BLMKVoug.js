import{_ as a,a0 as i,w as l,s as p,ao as d,I as o,x as e,a1 as s,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const g=JSON.parse('{"title":"stat -- 获取比 ls 更多的信息 | LCTT x X-CMD","titleTemplate":false,"description":"stat -- 获取比 ls 更多的信息 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"stat -- 获取比 ls 更多的信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"stat -- 获取比 ls 更多的信息 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140924 Unix----stat -- more than ls","title":"stat -- 获取比 ls 更多的信息","tag":"201410","desc":""},"relativePath":"201410/20140924 Unix----stat -- more than ls.md","filePath":"[post].md"}'),c={name:"201410/20140924 Unix----stat -- more than ls.md"};function h(m,t,u,f,w,x){const n=i("Link");return l(),p("div",null,[t[13]||(t[13]=d(`<h1 id="stat-获取比-ls-更多的信息" tabindex="-1">stat -- 获取比 ls 更多的信息 <a class="header-anchor" href="#stat-获取比-ls-更多的信息" aria-label="Permalink to “stat -- 获取比 ls 更多的信息”">​</a></h1><blockquote><p>厌倦了 ls 命令，并且想查看更多有关你的文件的有趣的信息？ 试一试 stat！</p></blockquote><p><img src="http://www.itworld.com/sites/default/files/imagecache/large_thumb_150x113/stats.jpg" alt=""></p><p>ls 命令可能是每一个 Unix 使用者第一个学习的命令之一， 但它仅仅显示了 stat 命令能给出的信息的一小部分。</p><p>stat 命令从文件的索引节点获取信息。 正如你可能已经了解的那样， 每一个系统里的文件都存有三组日期和时间， 它们包括最近修改时间（即使用 ls -l 命令时显示的日期和时间）, 最近状态改变时间（包括对文件重命名）和最近访问时间。</p><p>使用长列表模式查看文件信息， 你会看到类似下面的内容：</p><pre><code>$ ls -l trythis
-rwx------ 1 shs unixdweebs 109 Nov 11  2013 trythis
</code></pre><p>使用 stat 命令， 你会看到下面这些：</p><pre><code>$ stat trythis
  File: \`trythis&#39;
  Size: 109      Blocks: 8   IO Block: 262144 regular file
Device: 18h/24d Inode: 12731691    Links: 1
Access: (0700/-rwx------)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-09-09 19:27:58.000000000 -0400
Modify: 2013-11-11 08:40:10.000000000 -0500
Change: 2013-11-11 08:40:10.000000000 -0500
</code></pre><p>在上面的情形中， 文件的状态改变和文件修改的日期/时间是相同的， 而访问时间则是相当近的时间。 我们还可以看到文件使用了 8 个块， 以及两种格式显示的文件权限 -- 八进制（0700）格式和 rwx 格式。 在第三行显示的索引节点是 12731681. 文件没有其它的硬链接（Links: 1）。 而且， 这个文件是一个常规文件。</p><p>把文件重命名， 你会看到状态改变时间发生变化。</p><p>这里的 ctime 信息， 最早设计用来存储文件的创建（create）日期和时间， 但后来不知道什么时候变为用来存储状态修改（change）时间。</p><pre><code>$ mv trythis trythat
$ stat trythat
  File: \`trythat&#39;
  Size: 109      Blocks: 8   IO Block: 262144 regular file
Device: 18h/24d Inode: 12731691    Links: 1
Access: (0700/-rwx------)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-09-09 19:27:58.000000000 -0400
Modify: 2013-11-11 08:40:10.000000000 -0500
Change: 2014-09-21 12:46:22.000000000 -0400
</code></pre><p>改变文件的权限也会改变 ctime 域。</p><p>你也可以配合通配符来使用 stat 命令以列出一组文件的状态：</p><pre><code>$ stat myfile*
  File: \`myfile&#39;
  Size: 20              Blocks: 8          IO Block: 262144 regular file
Device: 18h/24d Inode: 12731803    Links: 1
Access: (0640/-rw-r-----)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-08-23 03:00:36.000000000 -0400
Modify: 2014-08-22 12:02:12.000000000 -0400
Change: 2014-08-22 12:02:12.000000000 -0400
  File: \`myfile2&#39;
  Size: 20              Blocks: 8          IO Block: 262144 regular file
Device: 18h/24d Inode: 12731806    Links: 1
Access: (0640/-rw-r-----)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-08-23 03:00:36.000000000 -0400
Modify: 2014-08-22 12:03:30.000000000 -0400
Change: 2014-08-22 12:03:30.000000000 -0400
  File: \`myfile3&#39;
  Size: 40              Blocks: 8          IO Block: 262144 regular file
Device: 18h/24d Inode: 12730533    Links: 1
Access: (0640/-rw-r-----)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-08-23 03:00:36.000000000 -0400
Modify: 2014-08-22 12:03:59.000000000 -0400
Change: 2014-08-22 12:03:59.000000000 -0400
</code></pre><p>如果我们喜欢的话， 我们也可以通过其他命令来获取这些信息。</p><p>向 ls -l 命令添加 &quot;u&quot; 选项， 你会看到下面的结果。 注意这个选项会显示最后访问时间， 而添加 &quot;c&quot; 选项则会显示状态改变时间（在本例中， 是我们重命名文件的时间）。</p><pre><code>$ ls -lu trythat
-rwx------ 1 shs unixdweebs 109 Sep  9 19:27 trythat
$ ls -lc trythat
-rwx------ 1 shs unixdweebs 109 Sep 21 12:46 trythat
</code></pre><p>stat 命令也可应用与文件夹。</p><p>在这个例子中， 我们可以看到有许多的链接。</p><pre><code>$ stat bin
  File: \`bin&#39;
  Size: 12288    Blocks: 24  IO Block: 262144 directory
Device: 18h/24d Inode: 15089714    Links: 9
Access: (0700/drwx------)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-09-21 03:00:45.000000000 -0400
Modify: 2014-09-15 17:54:41.000000000 -0400
Change: 2014-09-15 17:54:41.000000000 -0400
</code></pre><p>在这里， 我们还可以查看一个文件系统。</p><pre><code>$ stat -f /dev/cciss/c0d0p2
  File: &quot;/dev/cciss/c0d0p2&quot;
    ID: 0 Namelen: 255     Type: tmpfs
Block size: 4096Fundamental block size: 4096
Blocks: Total: 259366     Free: 259337     Available: 259337
Inodes: Total: 223834     Free: 223531
</code></pre><p>注意 Namelen （文件名长度）域， 如果文件名长于 255 个字符的话， 你会很幸运地在文件名处看到心形符号！</p><p>stat 命令还可以一次显示所有我们想要的信息。 下面的例子中， 我们只想查看文件类型， 然后是硬连接数。</p><pre><code>$ stat --format=%F trythat
regular file
$ stat --format=%h trythat
1
</code></pre><p>在下面的例子中， 我们查看了文件权限 -- 分别以两种可用的格式 -- 然后是文件的 SELinux 安全环境。最后，我们我们可以以从 Epoch 开始的秒数格式来查看文件访问时间。</p><pre><code>$ stat --format=%a trythat
700
$ stat --format=%A trythat
-rwx------
$ stat --format=%C trythat
(null)
$ stat --format=%X bin
1411282845
</code></pre><p>下面全部是可用的选项：</p><pre><code>%a     八进制表示的访问权限
%A     可读格式表示的访问权限
%b     分配的块数（参见 %B）
%B     %b 参数显示的每个块的字节数
%d     十进制表示的设备号
%D     十六进制表示的设备号
%f     十六进制表示的 Raw 模式
%F     文件类型
%g     属主的组 ID
%G     属主的组名
%h     硬连接数
%i     Inode 号
%n     文件名
%N     如果是符号链接，显示器所链接的文件名
%o     I/O 块大小
%s     全部占用的字节大小
%t     十六进制的主设备号
%T     十六进制的副设备号
%u     属主的用户 ID
%U     属主的用户名
%x     最后访问时间
%X     最后访问时间，自 Epoch 开始的秒数
%y     最后修改时间
%Y     最后修改时间，自 Epoch 开始的秒数
%z     最后改变时间
%Z     最后改变时间，自 Epoch 开始的秒数
</code></pre><p>针对文件系统还有如下格式选项：</p><pre><code>%a     普通用户可用的块数
%b     文件系统的全部数据块数
%c     文件系统的全部文件节点数
%d     文件系统的可用文件节点数
%f     文件系统的可用节点数
%C     SELinux 的安全上下文
%i     十六进制表示的文件系统 ID
%l     文件名的最大长度
%n     文件系统的文件名
%s     块大小（用于更快的传输）
%S     基本块大小（用于块计数）
%t     十六进制表示的文件系统类型
%T     可读格式表示的文件系统类型
</code></pre><p>这些信息都可以得到，stat 命令也许可以帮你以稍微不同的角度来了解你的文件。</p><hr>`,35)),o("p",null,[t[1]||(t[1]=e("via: ",-1)),s(n,{href:"http://www.itworld.com/operating-systems/437351/unix-stat-more-ls"},{default:r(()=>[...t[0]||(t[0]=[e("http://www.itworld.com/operating-systems/437351/unix-stat-more-ls",-1)])]),_:1})]),o("p",null,[t[5]||(t[5]=e("作者：",-1)),s(n,{href:"http://www.itworld.com/sandra-henry-stocker"},{default:r(()=>[...t[2]||(t[2]=[e("Sandra Henry-Stocker",-1)])]),_:1}),t[6]||(t[6]=e(" 译者：",-1)),s(n,{href:"https://github.com/wangjiezhe"},{default:r(()=>[...t[3]||(t[3]=[e("wangjiezhe",-1)])]),_:1}),t[7]||(t[7]=e(" 校对：",-1)),s(n,{href:"https://github.com/wxy"},{default:r(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),o("p",null,[t[10]||(t[10]=e("本文由 ",-1)),s(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原创翻译，",-1)),s(n,{href:"http://linux.cn/"},{default:r(()=>[...t[9]||(t[9]=[e("Linux中国",-1)])]),_:1}),t[12]||(t[12]=e(" 荣誉推出",-1))])])}const T=a(c,[["render",h]]);export{g as __pageData,T as default};
