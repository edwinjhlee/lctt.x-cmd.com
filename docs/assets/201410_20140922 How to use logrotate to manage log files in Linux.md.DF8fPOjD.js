import{_ as n,a0 as g,w as i,s,ao as d,I as a,x as t,a1 as l,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const L=JSON.parse('{"title":"Linux日志文件总管——logrotate | LCTT x X-CMD","titleTemplate":false,"description":"Linux日志文件总管——logrotate | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux日志文件总管——logrotate | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux日志文件总管——logrotate | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140922 How to use logrotate to manage log files in Linux","title":"Linux日志文件总管——logrotate","tag":"201410","desc":""},"relativePath":"201410/20140922 How to use logrotate to manage log files in Linux.md","filePath":"[post].md"}'),p={name:"201410/20140922 How to use logrotate to manage log files in Linux.md"};function c(f,o,m,u,h,x){const e=g("Link");return i(),s("div",null,[o[13]||(o[13]=d(`<h1 id="linux日志文件总管——logrotate" tabindex="-1">Linux日志文件总管——logrotate <a class="header-anchor" href="#linux日志文件总管——logrotate" aria-label="Permalink to “Linux日志文件总管——logrotate”">​</a></h1><p>日志文件包含了关于系统中发生的事件的有用信息，在排障过程中或者系统性能分析时经常被用到。对于忙碌的服务器，日志文件大小会增长极快，服务器会很快消耗磁盘空间，这成了个问题。除此之外，处理一个单个的庞大日志文件也常常是件十分棘手的事。</p><p>logrotate是个十分有用的工具，它可以自动对日志进行截断（或轮循）、压缩以及删除旧的日志文件。例如，你可以设置logrotate，让/var/log/foo日志文件每30天轮循，并删除超过6个月的日志。配置完后，logrotate的运作完全自动化，不必进行任何进一步的人为干预。另外，旧日志也可以通过电子邮件发送，不过该选项超出了本教程的讨论范围。</p><p>主流Linux发行版上都默认安装有logrotate包，如果出于某种原因，logrotate没有出现在里头，你可以使用apt-get或yum命令来安装。</p><p>在Debian或Ubuntu上：</p><pre><code># apt-get install logrotate cron 
</code></pre><p>在Fedora，CentOS或RHEL上：</p><pre><code># yum install logrotate crontabs 
</code></pre><p>logrotate的配置文件是/etc/logrotate.conf，通常不需要对它进行修改。日志文件的轮循设置在独立的配置文件中，它（们）放在/etc/logrotate.d/目录下。</p><h3 id="样例一" tabindex="-1">样例一 <a class="header-anchor" href="#样例一" aria-label="Permalink to “样例一”">​</a></h3><p>在第一个样例中，我们将创建一个10MB的日志文件/var/log/log-file。我们将展示怎样使用logrotate来管理该日志文件。</p><p>我们从创建一个日志文件开始吧，然后在其中填入一个10MB的随机比特流数据。</p><pre><code># touch /var/log/log-file
# head -c 10M &lt; /dev/urandom &gt; /var/log/log-file 
</code></pre><p>由于现在日志文件已经准备好，我们将配置logrotate来轮循该日志文件。让我们为该文件创建一个配置文件。</p><pre><code># vim /etc/logrotate.d/log-file 
</code></pre><hr><pre><code>/var/log/log-file {
    monthly
    rotate 5
    compress
    delaycompress
    missingok
    notifempty
    create 644 root root
    postrotate
        /usr/bin/killall -HUP rsyslogd
    endscript
}
</code></pre><p>这里：</p><ul><li><strong>monthly</strong>: 日志文件将按月轮循。其它可用值为‘daily’，‘weekly’或者‘yearly’。</li><li><strong>rotate 5</strong>: 一次将存储5个归档日志。对于第六个归档，时间最久的归档将被删除。</li><li><strong>compress</strong>: 在轮循任务完成后，已轮循的归档将使用gzip进行压缩。</li><li><strong>delaycompress</strong>: 总是与compress选项一起用，delaycompress选项指示logrotate不要将最近的归档压缩，压缩将在下一次轮循周期进行。这在你或任何软件仍然需要读取最新归档时很有用。</li><li><strong>missingok</strong>: 在日志轮循期间，任何错误将被忽略，例如“文件无法找到”之类的错误。</li><li><strong>notifempty</strong>: 如果日志文件为空，轮循不会进行。</li><li><strong>create 644 root root</strong>: 以指定的权限创建全新的日志文件，同时logrotate也会重命名原始日志文件。</li><li><strong>postrotate/endscript</strong>: 在所有其它指令完成后，postrotate和endscript里面指定的命令将被执行。在这种情况下，rsyslogd 进程将立即再次读取其配置并继续运行。</li></ul><p>上面的模板是通用的，而配置参数则根据你的需求进行调整，不是所有的参数都是必要的。</p><h3 id="样例二" tabindex="-1">样例二 <a class="header-anchor" href="#样例二" aria-label="Permalink to “样例二”">​</a></h3><p>在本例中，我们只想要轮循一个日志文件，然而日志文件大小可以增长到50MB。</p><pre><code># vim /etc/logrotate.d/log-file 
</code></pre><hr><pre><code>/var/log/log-file {
    size=50M
    rotate 5
    create 644 root root
    postrotate
        /usr/bin/killall -HUP rsyslogd
    endscript
}
</code></pre><h3 id="样例三" tabindex="-1">样例三 <a class="header-anchor" href="#样例三" aria-label="Permalink to “样例三”">​</a></h3><p>我们想要让旧日志文件以创建日期命名，这可以通过添加dateext常熟实现。</p><pre><code># vim /etc/logrotate.d/log-file 
</code></pre><hr><pre><code>/var/log/log-file {
    monthly
    rotate 5
    dateext
    create 644 root root
    postrotate
        /usr/bin/killall -HUP rsyslogd
    endscript
}
</code></pre><p>这将让归档文件在它们的文件名中包含日期信息。</p><h3 id="排障" tabindex="-1">排障 <a class="header-anchor" href="#排障" aria-label="Permalink to “排障”">​</a></h3><p>这里提供了一些logrotate设置的排障提示。</p><h4 id="_1-手动运行logrotate" tabindex="-1">1. 手动运行logrotate <a class="header-anchor" href="#_1-手动运行logrotate" aria-label="Permalink to “1. 手动运行logrotate”">​</a></h4><p><strong>logrotate</strong>可以在任何时候从命令行手动调用。</p><p>要调用为/etc/lograte.d/下配置的所有日志调用<strong>logrotate</strong>：</p><pre><code># logrotate /etc/logrotate.conf 
</code></pre><p>要为某个特定的配置调用logrotate：</p><pre><code># logrotate /etc/logrotate.d/log-file 
</code></pre><h4 id="_2-演练" tabindex="-1">2. 演练 <a class="header-anchor" href="#_2-演练" aria-label="Permalink to “2. 演练”">​</a></h4><p>排障过程中的最佳选择是使用‘-d’选项以预演方式运行logrotate。要进行验证，不用实际轮循任何日志文件，可以模拟演练日志轮循并显示其输出。</p><pre><code># logrotate -d /etc/logrotate.d/log-file 
</code></pre><p><img src="https://farm6.staticflickr.com/5561/15096836737_33d3cd1ccb_z.jpg" alt=""></p><p>正如我们从上面的输出结果可以看到的，logrotate判断该轮循是不必要的。如果文件的时间小于一天，这就会发生了。</p><h4 id="_3-强制轮循" tabindex="-1">3. 强制轮循 <a class="header-anchor" href="#_3-强制轮循" aria-label="Permalink to “3. 强制轮循”">​</a></h4><p>即使轮循条件没有满足，我们也可以通过使用‘-f’选项来强制logrotate轮循日志文件，‘-v’参数提供了详细的输出。</p><pre><code># logrotate -vf /etc/logrotate.d/log-file 
</code></pre><hr><pre><code>reading config file /etc/logrotate.d/log-file
reading config info for /var/log/log-file

Handling 1 logs

rotating pattern: /var/log/log-file  forced from command line (5 rotations)
empty log files are rotated, old logs are removed
considering log /var/log/log-file
  log needs rotating
rotating log /var/log/log-file, log-&gt;rotateCount is 5
dateext suffix &#39;-20140916&#39;
glob pattern &#39;-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]&#39;
renaming /var/log/log-file.5.gz to /var/log/log-file.6.gz (rotatecount 5, logstart 1, i 5),
old log /var/log/log-file.5.gz does not exist
renaming /var/log/log-file.4.gz to /var/log/log-file.5.gz (rotatecount 5, logstart 1, i 4),
old log /var/log/log-file.4.gz does not exist
. . .
renaming /var/log/log-file.0.gz to /var/log/log-file.1.gz (rotatecount 5, logstart 1, i 0),
old log /var/log/log-file.0.gz does not exist
log /var/log/log-file.6.gz doesn&#39;t exist -- won&#39;t try to dispose of it
renaming /var/log/log-file to /var/log/log-file.1
creating new /var/log/log-file mode = 0644 uid = 0 gid = 0
running postrotate script
compressing log with: /bin/gzip
</code></pre><h4 id="_4-logrotate的记录日志" tabindex="-1">4. Logrotate的记录日志 <a class="header-anchor" href="#_4-logrotate的记录日志" aria-label="Permalink to “4. Logrotate的记录日志”">​</a></h4><p>logrotate自身的日志通常存放于/var/lib/logrotate/status目录。如果处于排障目的，我们想要logrotate记录到任何指定的文件，我们可以指定像下面这样从命令行指定。</p><pre><code># logrotate -vf –s /var/log/logrotate-status /etc/logrotate.d/log-file
</code></pre><h4 id="_5-logrotate定时任务" tabindex="-1">5. Logrotate定时任务 <a class="header-anchor" href="#_5-logrotate定时任务" aria-label="Permalink to “5. Logrotate定时任务”">​</a></h4><p>logrotate需要的<strong>cron</strong>任务应该在安装时就自动创建了，我把cron文件的内容贴出来，以供大家参考。</p><pre><code># cat /etc/cron.daily/logrotate 
</code></pre><hr><pre><code>#!/bin/sh
 
# Clean non existent log file entries from status file
cd /var/lib/logrotate
test -e status || touch status
head -1 status &gt; status.clean
sed &#39;s/&quot;//g&#39; status | while read logfile date
do
    [ -e &quot;$logfile&quot; ] &amp;&amp; echo &quot;\\&quot;$logfile\\&quot; $date&quot;
done &gt;&gt; status.clean
mv status.clean status
 
test -x /usr/sbin/logrotate || exit 0
/usr/sbin/logrotate /etc/logrotate.conf
</code></pre><p>小结一下，logrotate工具对于防止因庞大的日志文件而耗尽存储空间是十分有用的。配置完毕后，进程是全自动的，可以长时间在不需要人为干预下运行。本教程重点关注几个使用logrotate的几个基本样例，你也可以定制它以满足你的需求。</p><p>希望本文对你有所帮助。</p><hr>`,60)),a("p",null,[o[1]||(o[1]=t("via: ",-1)),l(e,{href:"http://xmodulo.com/2014/09/logrotate-manage-log-files-linux.html"},{default:r(()=>[...o[0]||(o[0]=[t("http://xmodulo.com/2014/09/logrotate-manage-log-files-linux.html",-1)])]),_:1})]),a("p",null,[o[5]||(o[5]=t("作者：",-1)),l(e,{href:"http://xmodulo.com/author/sarmed"},{default:r(()=>[...o[2]||(o[2]=[t("Sarmed Rahman",-1)])]),_:1}),o[6]||(o[6]=t(" 译者：",-1)),l(e,{href:"https://github.com/GOLinux"},{default:r(()=>[...o[3]||(o[3]=[t("GOLinux",-1)])]),_:1}),o[7]||(o[7]=t(" 校对：",-1)),l(e,{href:"https://github.com/wxy"},{default:r(()=>[...o[4]||(o[4]=[t("wxy",-1)])]),_:1})]),a("p",null,[o[10]||(o[10]=t("本文由 ",-1)),l(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...o[8]||(o[8]=[t("LCTT",-1)])]),_:1}),o[11]||(o[11]=t(" 原创翻译，",-1)),l(e,{href:"http://linux.cn/"},{default:r(()=>[...o[9]||(o[9]=[t("Linux中国",-1)])]),_:1}),o[12]||(o[12]=t(" 荣誉推出",-1))])])}const _=n(p,[["render",c]]);export{L as __pageData,_ as default};
