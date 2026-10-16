import{_ as n,a0 as s,w as p,s as g,ao as m,I as t,x as r,a1 as l,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"性能优化：使用ramlog将日志文件转移到内存中 | LCTT x X-CMD","titleTemplate":false,"description":"性能优化：使用ramlog将日志文件转移到内存中 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"性能优化：使用ramlog将日志文件转移到内存中 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"性能优化：使用ramlog将日志文件转移到内存中 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150126 Improve system performance by moving your log files to RAM Using Ramlog","title":"性能优化：使用ramlog将日志文件转移到内存中","tag":"201503","desc":""},"relativePath":"201503/20150126 Improve system performance by moving your log files to RAM Using Ramlog.md","filePath":"[post].md"}'),d={name:"201503/20150126 Improve system performance by moving your log files to RAM Using Ramlog.md"};function i(u,o,f,b,_,k){const a=s("Link");return p(),g("div",null,[o[16]||(o[16]=m('<h1 id="性能优化-使用ramlog将日志文件转移到内存中" tabindex="-1">性能优化：使用ramlog将日志文件转移到内存中 <a class="header-anchor" href="#性能优化-使用ramlog将日志文件转移到内存中" aria-label="Permalink to “性能优化：使用ramlog将日志文件转移到内存中”">​</a></h1><p>Ramlog 以系统守护进程的形式运行。在系统启动时它创建虚拟磁盘（ramdisk），将 /var/log 下的文件复制到虚拟磁盘中，同时把虚拟磁盘挂载为/var/log。然后所有的日志就会更新到虚拟磁盘上。而当 ramlog 重启或停止时，需要记录到硬盘上的日志就会保留在目录/var/log.hdd中。而关机的时候，（ramdisk上的）日志文件会重新保存到硬盘上，以确保日志一致性。Ramlog 2.x默认使用tmpfs文件系统，同时也可以支持ramfs和内核ramdisk。使用rsync（译注：Linux数据镜像备份工具）这个工具来同步日志。</p><p>注意：如果突然断电或者内核崩溃（kernel panic）时，没有保存进硬盘的日志将会丢失。</p><p>如果你拥有够多的可用内存，而又想把日志放进虚拟磁盘，就安装ramlog吧。它是笔记本用户、带有UPS的系统或是直接在flash中运行的系统的优良选择，可以节省日志的写入时间。</p><p>Ramlog的运行机制以及步骤如下：</p><ol><li><p>Ramlog 由第一个守护进程（这取决于你所安装过的其它守护进程）启动。</p></li><li><p>然后创建目录/var/log.hdd并将其硬链至/var/log。</p></li><li><p>如果使用的是tmpfs（默认）或者ramfs 文件系统，将其挂载到/var/log上。</p></li><li><p>而如果使用的是内核ramdisk，ramdisk会在/dev/ram9中创建，并将其挂载至/var/log。默认情况下ramlog会占用所有ramdisk的内存，其大小由内核参数&quot;ramdisk_size&quot;指定。</p></li><li><p>接着其它的守护进程被启动，并在ramdisk中更新日志。Logrotate（译注：Linux日志轮替工具）和 ramdisk 配合的也很好。</p></li><li><p>重启（默认一天一次）ramlog时，目录/var/log.hdd将借助rsync与/var/log保持同步。日志自动保存的频率可以通过cron（译注：Linux例行性工作调度）来控制。默认情况下，ramlog 的调度任务放置在目录/etc/cron.daily下。</p></li><li><p>系统关机时，ramlog在最后一个守护进程关闭之前关闭。</p></li><li><p>在ramlog关闭期间，/var/log.hdd中的文件将被同步至/var/log，接着/var/log和/var/log.hdd都被卸载，然后删除空目录/var/log.hdd。</p></li></ol><p><strong>注意:- 此文仅面向高级用户</strong></p><h3 id="在ubuntu中安装ramlog" tabindex="-1">在Ubuntu中安装Ramlog <a class="header-anchor" href="#在ubuntu中安装ramlog" aria-label="Permalink to “在Ubuntu中安装Ramlog”">​</a></h3>',8)),t("p",null,[o[1]||(o[1]=r("首先需要用以下命令，从",-1)),l(a,{href:"http://www.tremende.com/ramlog/download/ramlog_2.0.0_all.deb"},{default:e(()=>[...o[0]||(o[0]=[r("这里",-1)])]),_:1}),o[2]||(o[2]=r("下载.deb安装包：",-1))]),o[17]||(o[17]=m(`<pre><code>wget http://www.tremende.com/ramlog/download/ramlog_2.0.0_all.deb
</code></pre><p>下载ramlog_2.0.0_all.deb安装包完毕，使用以下命令进行安装：</p><pre><code>sudo dpkg -i ramlog_2.0.0_all.deb
</code></pre><p>这一步会完成整个安装，现在你需要运行以下命令：</p><pre><code>sudo update-rc.d ramlog start 2 2 3 4 5 . stop 99 0 1 6 .
</code></pre><p>现在，在更新sysklogd的初始化顺序，使之能在ramlog停止运行前正确关闭：</p><pre><code>sudo update-rc.d -f sysklogd remove

sudo update-rc.d sysklogd start 10 2 3 4 5 . stop 90 0 1 6 .
</code></pre><p>然后重启系统：</p><pre><code>sudo reboot
</code></pre><p>系统重启完毕，运行&#39;ramlog getlogsize&#39;来获取你当前的/var/log的空间大小。在此基础之上多分配40%的空间，确保ramdisk有足够的空间（这整个都将作为ramdisk的空间大小）。</p><p>编辑引导配置文件，如/etc/grub.conf,、/boot/grub/menu.lst 或/etc/lilo.conf（译注：具体哪个配置文件视不同引导加载程序而定），给你的当前内核的新增选项 &#39;ramdisk_size=xxx&#39; ，其中xxx是ramdisk的空间大小。</p><h3 id="配置ramlog" tabindex="-1">配置Ramlog <a class="header-anchor" href="#配置ramlog" aria-label="Permalink to “配置Ramlog”">​</a></h3><p>基于deb的系统中，Ramlog的配置文件位于/etc/default/ramlog，你可以在该配置文件中设置以下变量：</p><pre><code>RAMDISKTYPE=0
# 取值:
# 0 -- tmpfs （可被交换到交换分区） -- 默认
# 1 -- ramfs （旧内核不能设置最大空间大小， 
# 不能被交换到交换分区，和 SELinux 不兼容）
# 2 -- 老式的内核 ramdisk
TMPFS_RAMFS_SIZE=
# 可以用于 tmpfs 或 ramfs 的最大内存大小
# 这个值可以是百分比或数值（单位是 Mb），例如：
# TMPFS_RAMFS_SIZE=40%
# TMPFS_RAMFS_SIZE=100m
# 该值为空表示 tmpfs/ramfs 的大小是全部内存的 50%
# 更多选项可以参考 ‘man mount&#39; 中的‘Mount options for tmpfs&#39; 一节
# （补充，在较新的内核中，ramfs  支持大小限制，
# 虽然 man 中说没有这个挂载选项）
# 该选项仅用于 RAMDISKTYPE=0 或 1 时
KERNEL_RAMDISK_SIZE=MAX
#以 kb 为单位指定的内核 ramdisk 大小，或者使用 MAX 来使用整个 ramdisk。
#该选项仅用于 RAMDISKTYPE=2 时
LOGGING=1
# 0=关闭, 1=打开 。记录自身的日志到 /var/log/ramdisk
LOGNAME=ramlog
# 自身的日志文件名 （用于 LOGGING=1时）
VERBOSE=1
# 0=关闭, 1=打开 （设置为 1时，启动或停止失败时会调用 teststartstop 将细节
# 写到日志中） 
</code></pre><h3 id="在ubuntu中卸载ramlog" tabindex="-1">在Ubuntu中卸载ramlog <a class="header-anchor" href="#在ubuntu中卸载ramlog" aria-label="Permalink to “在Ubuntu中卸载ramlog”">​</a></h3><p>打开终端运行以下命令：</p><pre><code>sudo dpkg -P ramlog
</code></pre><p>注意：如果ramlog卸载之前仍在运行，需要重启系统完成整个卸载工作。</p><hr>`,19)),t("p",null,[o[4]||(o[4]=r("via: ",-1)),l(a,{href:"http://www.ubuntugeek.com/improve-system-performance-by-moving-your-log-files-to-ram-using-ramlog.html"},{default:e(()=>[...o[3]||(o[3]=[r("http://www.ubuntugeek.com/improve-system-performance-by-moving-your-log-files-to-ram-using-ramlog.html",-1)])]),_:1})]),t("p",null,[o[8]||(o[8]=r("作者：",-1)),l(a,{href:"http://www.ubuntugeek.com/author/ubuntufix"},{default:e(()=>[...o[5]||(o[5]=[r("ruchi",-1)])]),_:1}),o[9]||(o[9]=r(" 译者：",-1)),l(a,{href:"https://github.com/soooogreen"},{default:e(()=>[...o[6]||(o[6]=[r("soooogreen",-1)])]),_:1}),o[10]||(o[10]=r(" 校对：",-1)),l(a,{href:"https://github.com/wxy"},{default:e(()=>[...o[7]||(o[7]=[r("wxy",-1)])]),_:1})]),t("p",null,[o[13]||(o[13]=r("本文由 ",-1)),l(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...o[11]||(o[11]=[r("LCTT",-1)])]),_:1}),o[14]||(o[14]=r(" 原创翻译，",-1)),l(a,{href:"http://linux.cn/"},{default:e(()=>[...o[12]||(o[12]=[r("Linux中国",-1)])]),_:1}),o[15]||(o[15]=r(" 荣誉推出",-1))])])}const R=n(d,[["render",i]]);export{x as __pageData,R as default};
