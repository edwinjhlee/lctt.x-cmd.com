import{_ as l,a0 as s,w as d,s as p,ao as a,I as i,x as t,a1 as o,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"Linux 下使用Trickle限制下载/上传带宽 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 下使用Trickle限制下载/上传带宽 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 下使用Trickle限制下载/上传带宽 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 下使用Trickle限制下载/上传带宽 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Manage and Limit Download-Upload Bandwidth with Trickle in Linux","title":"Linux 下使用Trickle限制下载/上传带宽","tag":"201312","desc":""},"relativePath":"201312/Manage and Limit Download-Upload Bandwidth with Trickle in Linux.md","filePath":"[post].md"}'),c={name:"201312/Manage and Limit Download-Upload Bandwidth with Trickle in Linux.md"};function g(u,e,k,h,m,f){const n=s("Link");return d(),p("div",null,[e[14]||(e[14]=a(`<h1 id="linux-下使用trickle限制下载-上传带宽" tabindex="-1">Linux 下使用Trickle限制下载/上传带宽 <a class="header-anchor" href="#linux-下使用trickle限制下载-上传带宽" aria-label="Permalink to “Linux 下使用Trickle限制下载/上传带宽”">​</a></h1><p>你有没有遇到过一个程序占用了你所有的网络带宽的情况？如果你遇到过，那么你就需要限制带宽的应用。不管你是一个系统管理员还是一名普通Linux用户，您都应该学习如何控制应用的上传和下载速度来确保你的网络带宽不会被一个程序耗光。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2013/11/Bandwidth-limit-trickle.png" alt=""></p><h3 id="trickle-是什么" tabindex="-1">Trickle 是什么? <a class="header-anchor" href="#trickle-是什么" aria-label="Permalink to “Trickle 是什么?”">​</a></h3><p><strong>Trickle</strong>是一款带宽控制供给，用来限制如<strong>Firefox, FTP , SSH</strong>以及其他使用网络带宽的程序的带宽。你希望你的<strong>Youtube</strong>音乐体验影响到你的ftp下载么？如果不想，请继续阅读这篇文章，学习如何在你的机器上安装和使用trickle。</p><h3 id="怎样在linux上安装trickle" tabindex="-1">怎样在Linux上安装Trickle <a class="header-anchor" href="#怎样在linux上安装trickle" aria-label="Permalink to “怎样在Linux上安装Trickle”">​</a></h3><p>trickle工具有一些依赖包，安装和使用trickle之前必须安装“<strong>libevent 库</strong>”，不过这个库在大多数现在的Linux机器上已经默认安装。</p><h4 id="在-debian-ubuntu-linux-mint-上" tabindex="-1">在 Debian/Ubuntu/Linux Mint 上#### <a class="header-anchor" href="#在-debian-ubuntu-linux-mint-上" aria-label="Permalink to “在 Debian/Ubuntu/Linux Mint 上####”">​</a></h4><p>在<strong>Debian/Ubuntu/Mint</strong> 机器上运行 <strong>apt-get install trickle</strong>进行安装。请确保源列表已经更新，接着安装你想要的应用。</p><pre><code>$ sudo apt-get update
$ sudo apt-get install trickle
</code></pre><h4 id="在-rhel-centos-fedora-上" tabindex="-1">在 RHEL/CentOS/Fedora 上#### <a class="header-anchor" href="#在-rhel-centos-fedora-上" aria-label="Permalink to “在 RHEL/CentOS/Fedora 上####”">​</a></h4><p>首先你需要更新系统,然后使用下面的命令安装trickle。</p><pre><code># yum update
# yum install trickle
</code></pre><h3 id="trickle如何工作" tabindex="-1">Trickle如何工作? <a class="header-anchor" href="#trickle如何工作" aria-label="Permalink to “Trickle如何工作?”">​</a></h3><p>Trickle通过控制socket数据读写量来控制和限制应用的<strong>上传/下载</strong>速度。它使用另一个版本的<strong>BSD</strong>套接字API，但是区别是trickle还管理socket调用。</p><p>要注意的是trickle使用动态链接和加载，所以它只对于使用&quot;Glibc库&quot;的程序有用。由于trickle可以设置数据在socket上的传输延迟，所以它可以用来限制一个应用的网络带宽。</p><h3 id="trickle不能做什么" tabindex="-1">Trickle不能做什么？ <a class="header-anchor" href="#trickle不能做什么" aria-label="Permalink to “Trickle不能做什么？”">​</a></h3><p>Trickle不能用于限制使用<strong>UDP</strong>协议的应用的带宽，它只可用于<strong>TCP</strong>连接，但是你要知道它也并不是对所有的<strong>TCP</strong>连接有效。如果你一直仔细地看这篇文章，你可以猜到原因是什么。你还记得trickle只对使用<strong>Glibc库</strong>应用有效吧？</p><p>还要说一下,trickle无法工作在使用静态链接的可执行程序上。</p><h3 id="确定trickle是否可运行在某个特定应用上" tabindex="-1">确定Trickle是否可运行在某个特定应用上 <a class="header-anchor" href="#确定trickle是否可运行在某个特定应用上" aria-label="Permalink to “确定Trickle是否可运行在某个特定应用上”">​</a></h3><p>既然trickle无法限制每个应用的<strong>上传/下载</strong>速度，就应该有个方法找出trickle可以工作的应用。</p><p><strong>ldd</strong>工具可以帮我们找出某个特定的程序是否使用了<strong>libc.so</strong>库。如果程序使用了这个库，就可以使用trickle来限制它的网络带宽使用。</p><p><strong>ldd</strong>命令用于打印每个程序需要的共享库。如果你是一个好奇的<strong>Linux Geek</strong>，那么你可以使用man命令来找出关于ldd工具的更多信息。</p><pre><code># man ldd
</code></pre><p><strong>Filezilla</strong>是一款使用ftp协议传输文件的程序，trickle可以用来限制它的下载或者上传速度么？在你考虑的时候，我使用以下的命令来找出trickle是否可用于filezilla。</p><pre><code># ldd filezilla | grep libc.so
</code></pre><p>就我而言，它输出了如下:</p><pre><code>oltjano@oltjano-X55CR:/usr/bin$ ldd filezilla | grep libc.so
	libc.so.6 =&gt; /lib/i386-linux-gnu/libc.so.6 (0xb6bc4000)
</code></pre><p>既然filezilla使用了“<strong>libc.so</strong>”库，那么trickle可以用来限制它的网络带宽。这个方法可以用在任何你感兴趣的程序上。</p><h3 id="学习如何使用trickle" tabindex="-1">学习如何使用Trickle <a class="header-anchor" href="#学习如何使用trickle" aria-label="Permalink to “学习如何使用Trickle”">​</a></h3><p>使用下面的命令输出trickle工具的<strong>版本</strong>。</p><pre><code>root@oltjano-X55CR:~# trickle -V
trickle: version 1.07
</code></pre>`,32)),i("p",null,[e[1]||(e[1]=t("Linux有很多命令行工具使测试(实验)变得有趣和美丽。下面的命令使用",-1)),o(n,{href:"http://www.tecmint.com/10-wget-command-examples-in-linux/"},{default:r(()=>[...e[0]||(e[0]=[t("wget 工具",-1)])]),_:1}),e[2]||(e[2]=t("来下载最新的Pear OS镜像.",-1))]),e[15]||(e[15]=a(`<pre><code>root@oltjano-X55CR:~# wget http://sourceforge.net/projects/pearoslinux/files/Pear%20OS%208/pearos8-i386.iso/download

--2013-11-20 11:56:32--  http://sourceforge.net/projects/pearoslinux/files/Pear%20OS%208/pearos8-i386.iso/download
Resolving sourceforge.net (sourceforge.net)... 216.34.181.60
Connecting to sourceforge.net (sourceforge.net)|216.34.181.60|:80... connected.
HTTP request sent, awaiting response... 302 Found
Location: http://downloads.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso?r=&amp;ts=1384928843&amp;use_mirror=kaz [following]
--2013-11-20 11:56:33--  http://downloads.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso?r=&amp;ts=1384928843&amp;use_mirror=kaz
Resolving downloads.sourceforge.net (downloads.sourceforge.net)... 216.34.181.59
Connecting to downloads.sourceforge.net (downloads.sourceforge.net)|216.34.181.59|:80... connected.
HTTP request sent, awaiting response... 302 Found
Location: http://kaz.dl.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso [following]
--2013-11-20 11:56:33--  http://kaz.dl.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso
Resolving kaz.dl.sourceforge.net (kaz.dl.sourceforge.net)... 88.204.157.163
Connecting to kaz.dl.sourceforge.net (kaz.dl.sourceforge.net)|88.204.157.163|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1093664768 (1.0G) [application/octet-stream]
Saving to: ‘download’

0% [                                                                                                    ] 30,78,278    381KB/s  eta 1h 50m
</code></pre><p>从输出可以看到，下载速度大约是<strong>381 KB/s</strong>。我想限制下载速度到<strong>13 K/s</strong>，这样我就可以用我的带宽做其他的事情了。下面的命令用来限制wget速度到<strong>13 K/s</strong>。</p><pre><code>ravisaive@ravisaive-OptiPlex-380:~$ trickle -d 13 wget http://sourceforge.net/projects/pearoslinux/files/Pear%20OS%208/pearos8-i386.iso/download

--2013-11-20 12:01:19--  http://sourceforge.net/projects/pearoslinux/files/Pear%20OS%208/pearos8-i386.iso/download
Resolving sourceforge.net (sourceforge.net)... 216.34.181.60
Connecting to sourceforge.net (sourceforge.net)|216.34.181.60|:80... connected.
HTTP request sent, awaiting response... 302 Found
Location: http://downloads.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso?r=&amp;ts=1384929129&amp;use_mirror=kaz [following]
--2013-11-20 12:01:19--  http://downloads.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso?r=&amp;ts=1384929129&amp;use_mirror=kaz
Resolving downloads.sourceforge.net (downloads.sourceforge.net)... 216.34.181.59
Connecting to downloads.sourceforge.net (downloads.sourceforge.net)|216.34.181.59|:80... connected.
HTTP request sent, awaiting response... 302 Found
Location: http://kaz.dl.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso [following]
--2013-11-20 12:01:20--  http://kaz.dl.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso
Resolving kaz.dl.sourceforge.net (kaz.dl.sourceforge.net)... 88.204.157.163
Connecting to kaz.dl.sourceforge.net (kaz.dl.sourceforge.net)|88.204.157.163|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1093664768 (1.0G) [application/octet-stream]
Saving to: ‘download.1’

0% [                                                                                                   ] 2,01,550    13.1KB/s  eta 21h 5m
</code></pre><p>从输出可以看到，下载速度被限制到了<strong>13K/s</strong>。下载将会持续<strong>21小时5分钟</strong>。上面的“<strong>-d</strong>”选项表示下载，还可以结合使用 “<strong>-d</strong>”选项和上传选项(<strong>-u</strong>)，如下例所示。</p><pre><code># trickle -u 100 -d 50 ftp
</code></pre><p>上面的命令限制<strong>ftp 客户端</strong>的上传速度为<strong>100K/s</strong>，下载速度为<strong>50K/s</strong>。还可以使用下面的命令,限制在一个shell里运行的所有命令的带宽。</p><pre><code>trickle -d 130 -u 13 bash
</code></pre><p>每个命令行工具都对用户提供了帮助，使用&quot;trickle -h&quot;命令来找出更多trickle工具的用法。</p><pre><code>root@oltjano-X55CR:/usr/bin# trickle -h

Usage: trickle [-hvVs] [-d &lt;rate&gt;] [-u &lt;rate&gt;] [-w &lt;length&gt;] [-t &lt;seconds&gt;]
               [-l &lt;length&gt;] [-n &lt;path&gt;] command ...
	-h Help (this)
	-v Increase verbosity level
	-V Print trickle version
	-s Run trickle in standalone mode independent of trickled
	-d &lt;rate&gt;    Set maximum cumulative download rate to &lt;rate&gt; KB/s
	-u &lt;rate&gt;    Set maximum cumulative upload rate to &lt;rate&gt; KB/s
	-w &lt;length&gt;  Set window length to &lt;length&gt; KB 
	-t &lt;seconds&gt; Set default smoothing time to &lt;seconds&gt; s
	-l &lt;length&gt;  Set default smoothing length to &lt;length&gt; KB
	-n &lt;path&gt;    Use trickled socket name &lt;path&gt;
	-L &lt;ms&gt;      Set latency to &lt;ms&gt; milliseconds
	-P &lt;path&gt;    Preload the specified .so instead of the default one
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>本篇文章介绍如何在Linux机器上安装trickle工具，并用它如何做一些简单的事情。无论你为大公司工作还是自己使用，trickle都是高级Linux用户的必备工具。</p><hr>`,12)),i("p",null,[e[4]||(e[4]=t("via: ",-1)),o(n,{href:"http://www.tecmint.com/manage-and-limit-downloadupload-bandwidth-with-trickle-in-linux/"},{default:r(()=>[...e[3]||(e[3]=[t("http://www.tecmint.com/manage-and-limit-downloadupload-bandwidth-with-trickle-in-linux/",-1)])]),_:1})]),i("p",null,[e[7]||(e[7]=t("译者：",-1)),o(n,{href:"https://github.com/geekpi"},{default:r(()=>[...e[5]||(e[5]=[t("geekpi",-1)])]),_:1}),e[8]||(e[8]=t(" 校对：",-1)),o(n,{href:"https://github.com/jasminepeng"},{default:r(()=>[...e[6]||(e[6]=[t("jasminepeng",-1)])]),_:1})]),i("p",null,[e[11]||(e[11]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[9]||(e[9]=[t("LCTT",-1)])]),_:1}),e[12]||(e[12]=t(" 原创翻译，",-1)),o(n,{href:"http://linux.cn/"},{default:r(()=>[...e[10]||(e[10]=[t("Linux中国",-1)])]),_:1}),e[13]||(e[13]=t(" 荣誉推出",-1))])])}const b=l(c,[["render",g]]);export{T as __pageData,b as default};
