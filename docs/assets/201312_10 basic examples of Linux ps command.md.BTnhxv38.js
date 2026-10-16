import{_ as n,a0 as s,w as c,s as d,ao as i,I as t,x as a,a1 as p,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const g=JSON.parse('{"title":"ps命令的10个例子 | LCTT x X-CMD","titleTemplate":false,"description":"ps命令的10个例子 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"ps命令的10个例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"ps命令的10个例子 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/10 basic examples of Linux ps command","title":"ps命令的10个例子","tag":"201312","desc":""},"relativePath":"201312/10 basic examples of Linux ps command.md","filePath":"[post].md"}'),h={name:"201312/10 basic examples of Linux ps command.md"};function l(u,e,m,w,b,f){const o=s("Link");return c(),d("div",null,[e[11]||(e[11]=i(`<h1 id="ps命令的10个例子" tabindex="-1">ps命令的10个例子 <a class="header-anchor" href="#ps命令的10个例子" aria-label="Permalink to “ps命令的10个例子”">​</a></h1><h3 id="linux-ps-命令" tabindex="-1">Linux ps 命令 <a class="header-anchor" href="#linux-ps-命令" aria-label="Permalink to “Linux ps 命令”">​</a></h3><p>linux的ps命令是一个查看系统运行的进程的一个最基础的工具。它提供了一个当前进程的快照，还带有一些具体的信息，比如用户id，cpu使用率，内存使用，命令名等，它不会像top或者htop一样实时显示数据。虽然它在功能和输出上更加简单，但它仍然是每个linux新手需要了解和学好的必要进程管理/检测工具。</p><p>在本篇中，我们会学习ps命令基本的用法：查找、过滤，以不同的方式排序。</p><h3 id="语法说明" tabindex="-1">语法说明 <a class="header-anchor" href="#语法说明" aria-label="Permalink to “语法说明”">​</a></h3><p>ps命令有两种不同风格的语法规则：BSD风格和UNIX风格。Linux新手经常感到困惑并会误解这两种风格，所以在继续下一步之前，我们来弄清楚一些基本的信息。</p><blockquote><p>注意: &quot;ps aux&quot;不等同于&quot;ps -aux&quot;。比如&quot;-u&quot;用于显示用户的进程，但是&quot;u&quot;意味着显示具体信息。</p></blockquote><p>BSD 形式 - BSD形式的语法的选项前没有破折号，如：</p><pre><code>ps aux
</code></pre><p>UNIX/LINUX 形式 - linux形式的语法的选项前有破折号，如：</p><pre><code>ps -ef
</code></pre><blockquote><p>在linux系统上混合这两种语法是可以的。比如 &quot;ps ax -f&quot;。但是本章中我们主要讨论UNIX形式语法。</p></blockquote><h3 id="如何使用ps命令" tabindex="-1">如何使用ps命令 <a class="header-anchor" href="#如何使用ps命令" aria-label="Permalink to “如何使用ps命令”">​</a></h3><h4 id="_1-显示所有进程" tabindex="-1">1. 显示所有进程 <a class="header-anchor" href="#_1-显示所有进程" aria-label="Permalink to “1. 显示所有进程”">​</a></h4><p>下面的命令可以显示所有进程的列表。</p><pre><code>$ ps ax
$ ps -ef
</code></pre><p>通过管道输出到&quot;less&quot;可以分页。</p><p>使用&quot;u&quot;或者&quot;-f&quot;选项可以显示进程的具体信息。</p><pre><code>$ ps aux
$ ps -ef -f
</code></pre><blockquote><p>为什么USER列显示的不是我的用户名，但是其他的像root，www-data等却显示？ 对于所有的用户(包括你们的)，如果长度大于8个字符，那么ps只会显示你的UID而不是用户名。</p></blockquote><h4 id="_2-显示用户进程" tabindex="-1">2. 显示用户进程 <a class="header-anchor" href="#_2-显示用户进程" aria-label="Permalink to “2. 显示用户进程”">​</a></h4><p>使用&quot;-u&quot;选项后跟用户名来过滤所属用户的进程。多个用户名可以用逗号分隔。</p><pre><code>$ ps -f -u www-data
UID        PID  PPID  C STIME TTY          TIME CMD
www-data  1329  1328  0 09:32 ?        00:00:00 nginx: worker process
www-data  1330  1328  0 09:32 ?        00:00:00 nginx: worker process
www-data  1332  1328  0 09:32 ?        00:00:00 nginx: worker process
www-data  1377  1372  0 09:32 ?        00:00:00 php-fpm: pool a.localhost                                               
www-data  1378  1372  0 09:32 ?        00:00:00 php-fpm: pool a.localhost                                               
www-data  4524  2359  0 10:03 ?        00:00:00 /usr/sbin/apache2 -k start
www-data  4527  2359  0 10:03 ?        00:00:00 /usr/sbin/apache2 -k start
www-data  4528  2359  0 10:03 ?        00:00:00 /usr/sbin/apache2 -k start
</code></pre><h4 id="_3-通过名字或者进程id显示进程" tabindex="-1">3. 通过名字或者进程id显示进程 <a class="header-anchor" href="#_3-通过名字或者进程id显示进程" aria-label="Permalink to “3. 通过名字或者进程id显示进程”">​</a></h4><p>通过&quot;-C&quot;选项后面加上名字或者命令来搜索进程。</p><pre><code>$ ps -C apache2
  PID TTY          TIME CMD
 2359 ?        00:00:00 apache2
 4524 ?        00:00:00 apache2
 4525 ?        00:00:00 apache2
...
</code></pre><p>要通过进程id显示进程，就使用&quot;-p&quot;选项，并且还可以通过逗号分隔来指定多个进程id。</p><pre><code>$ ps -f -p 3150,7298,6544
</code></pre><p>&quot;-C&quot;必须提供精确的进程名，并且它并不能通过部分名字或者通配符查找。为了更灵活地搜索进程列表，通常使用grep命令。</p><pre><code>$ ps -ef | grep apache
</code></pre><h4 id="_4-通过cpu或者内存使用排序进程" tabindex="-1">4. 通过cpu或者内存使用排序进程 <a class="header-anchor" href="#_4-通过cpu或者内存使用排序进程" aria-label="Permalink to “4. 通过cpu或者内存使用排序进程”">​</a></h4><p>系统管理员通常想要找出那些消耗最多内存或者CPU的进程。排序选项会基于特定的字段或者参数来排序进程列表。</p><p>可以用&#39;--sort&#39;指定多个字段，并用逗号分割。除此之外，字段前面还可以跟上&#39;-&#39;或者&#39;+&#39;的前缀来相应地表示递减和递增排序。这里有很多的用于排序的选项，通过man页来获取完整的列表。</p><pre><code>$ ps aux --sort=-pcpu,+pmem
</code></pre><p>显示前5名最耗cpu的进程。</p><pre><code>$ ps aux --sort=-pcpu | head -5
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  2.6  0.7  51396  7644 ?        Ss   02:02   0:03 /usr/lib/systemd/systemd --switched-root --system --deserialize 23
root      1249  2.6  3.0 355800 30896 tty1     Rsl+ 02:02   0:02 /usr/bin/X -background none :0 vt01 -nolisten tcp
root       508  2.4  1.6 248488 16776 ?        Ss   02:02   0:03 /usr/bin/python /usr/sbin/firewalld --nofork
silver    1525  2.1  2.3 448568 24392 ?        S    02:03   0:01 /usr/bin/python /usr/share/system-config-printer/applet.py
</code></pre><h4 id="_5-以树的形式显示进程层级" tabindex="-1">5. 以树的形式显示进程层级 <a class="header-anchor" href="#_5-以树的形式显示进程层级" aria-label="Permalink to “5. 以树的形式显示进程层级”">​</a></h4><p>许多进程实际上是从同一个父进程fork出来的，了解父子关系通常是很有用的。&quot;--forest&quot; 选项会构造一个ascii艺术形式的进程层级视图。</p><p>下面的命令会用apache2的进程名来搜索并构造一个树来显示具体信息。</p><pre><code>$ ps -f --forest -C apache2
UID        PID  PPID  C STIME TTY          TIME CMD
root      2359     1  0 09:32 ?        00:00:00 /usr/sbin/apache2 -k start
www-data  4524  2359  0 10:03 ?        00:00:00  \\_ /usr/sbin/apache2 -k start
www-data  4525  2359  0 10:03 ?        00:00:00  \\_ /usr/sbin/apache2 -k start
www-data  4526  2359  0 10:03 ?        00:00:00  \\_ /usr/sbin/apache2 -k start
www-data  4527  2359  0 10:03 ?        00:00:00  \\_ /usr/sbin/apache2 -k start
www-data  4528  2359  0 10:03 ?        00:00:00  \\_ /usr/sbin/apache2 -k start
</code></pre><blockquote><p>不要在排序中使用树状显示，因为两者都会以不同方式影响显示的顺序。</p></blockquote><h4 id="_6-显示父进程的子进程" tabindex="-1">6. 显示父进程的子进程 <a class="header-anchor" href="#_6-显示父进程的子进程" aria-label="Permalink to “6. 显示父进程的子进程”">​</a></h4><p>下面一个是找出所有从apache进程fork出来的进程的例子。</p><pre><code>$ ps -o pid,uname,comm -C apache2
  PID USER     COMMAND
 2359 root     apache2
 4524 www-data apache2
 4525 www-data apache2
 4526 www-data apache2
 4527 www-data apache2
 4528 www-data apache2
</code></pre><p>第一个属于root的进程是apache2的主进程，其他的apache进程都是从主进程fork出来的。下面的命令使用apache2主进程的pid列出了所有的apache2的子进程。</p><pre><code>$ ps --ppid 2359
  PID TTY          TIME CMD
 4524 ?        00:00:00 apache2
 4525 ?        00:00:00 apache2
 4526 ?        00:00:00 apache2
 4527 ?        00:00:00 apache2
 4528 ?        00:00:00 apache2
</code></pre><h4 id="_7-显示进程的线程" tabindex="-1">7. 显示进程的线程 <a class="header-anchor" href="#_7-显示进程的线程" aria-label="Permalink to “7. 显示进程的线程”">​</a></h4><p>&quot;-L&quot;选项会随着进程一起显示线程。它可用于显示所有指定进程或者所有进程的线程。</p><p>下面的命令会显示进程id为3150的进程的所有线程。</p><pre><code>$ ps -p 3150 -L
</code></pre><h4 id="_8-改变显示的列" tabindex="-1">8. 改变显示的列 <a class="header-anchor" href="#_8-改变显示的列" aria-label="Permalink to “8. 改变显示的列”">​</a></h4><p>ps命令可以被配置用来只显示被选中的列。很多列可以被用来显示，完整的列表可以查看man页。</p><p>下面的命令会只显示pid、用户名、cpu、内存、命令列。</p><pre><code>$ ps -e -o pid,uname,pcpu,pmem,comm
</code></pre><p>同样可以重命名列的名字。</p><pre><code>$ ps -e -o pid,uname=USERNAME,pcpu=CPU_USAGE,pmem,comm
  PID USERNAME CPU_USAGE %MEM COMMAND
    1 root           0.0  0.0 init
    2 root           0.0  0.0 kthreadd
    3 root           0.0  0.0 ksoftirqd/0
    4 root           0.0  0.0 kworker/0:0
    5 root           0.0  0.0 kworker/0:0H
    7 root           0.0  0.0 migration/0
    8 root           0.0  0.0 rcu_bh
    9 root           0.0  0.0 rcuob/0
   10 root           0.0  0.0 rcuob/1
</code></pre><p>非常灵活。</p><h4 id="_9-显示进程运行的时间" tabindex="-1">9. 显示进程运行的时间 <a class="header-anchor" href="#_9-显示进程运行的时间" aria-label="Permalink to “9. 显示进程运行的时间”">​</a></h4><p>运行的时间指的是，进程已经运行的时间。运行时间的列并没有默认显示，需要使用-o选项带入。</p><pre><code>$ ps -e -o pid,comm,etime
</code></pre><h4 id="_10-将ps转换为实时进程查看器" tabindex="-1">10. 将ps转换为实时进程查看器 <a class="header-anchor" href="#_10-将ps转换为实时进程查看器" aria-label="Permalink to “10. 将ps转换为实时进程查看器”">​</a></h4><p>通常上，watch命令可将ps命令变成实时进程查看器。像这个简单的命令</p><pre><code>$ watch -n 1 &#39;ps -e -o pid,uname,cmd,pmem,pcpu --sort=-pmem,-pcpu | head -15&#39;
</code></pre><p>我桌面上的输出如下。</p><pre><code>Every 1.0s: ps -e -o pid,uname,cmd,pmem,pcpu --...  Sun Dec  1 18:16:08 2013

  PID USER     CMD                         %MEM %CPU
 3800 1000     /opt/google/chrome/chrome -  4.6  1.4
 7492 1000     /opt/google/chrome/chrome -  2.7  1.4
 3150 1000     /opt/google/chrome/chrome    2.7  2.5
 3824 1000     /opt/google/chrome/chrome -  2.6  0.6
 3936 1000     /opt/google/chrome/chrome -  2.4  1.6
 2936 1000     /usr/bin/plasma-desktop      2.3  0.2
 9666 1000     /opt/google/chrome/chrome -  2.1  0.8
 3842 1000     /opt/google/chrome/chrome -  2.1  0.8
 4739 1000     /opt/google/chrome/chrome -  1.8  1.0
 3930 1000     /opt/google/chrome/chrome -  1.7  1.0
 3911 1000     /opt/google/chrome/chrome -  1.6  0.6
 3645 1000     /opt/google/chrome/chrome -  1.5  0.4
 3677 1000     /opt/google/chrome/chrome -  1.5  0.4
 3639 1000     /opt/google/chrome/chrome -  1.4  0.4
</code></pre><p>输出会每秒刷新状态，但是这其实很top不同。你会发现top/htop命令的输出相比上面的ps命令刷新得更频繁。</p><p>这是因为top输出是结合了cup使用值和内存使用值后的排序值。但是上面的ps命令是一个更简单的行为的排序，每次获取一列(像学校的数学)，因此它不会像top那样快速更新。</p><hr>`,68)),t("p",null,[e[1]||(e[1]=a("via: ",-1)),p(o,{href:"http://www.binarytides.com/linux-ps-command/"},{default:r(()=>[...e[0]||(e[0]=[a("http://www.binarytides.com/linux-ps-command/",-1)])]),_:1})]),t("p",null,[e[4]||(e[4]=a("译者：",-1)),p(o,{href:"https://github.com/geekpi"},{default:r(()=>[...e[2]||(e[2]=[a("geekpi",-1)])]),_:1}),e[5]||(e[5]=a(" 校对：",-1)),p(o,{href:"https://github.com/carolinewuyan"},{default:r(()=>[...e[3]||(e[3]=[a("Caroline",-1)])]),_:1})]),t("p",null,[e[8]||(e[8]=a("本文由 ",-1)),p(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[a("LCTT",-1)])]),_:1}),e[9]||(e[9]=a(" 原创翻译，",-1)),p(o,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[a("Linux中国",-1)])]),_:1}),e[10]||(e[10]=a(" 荣誉推出",-1))])])}const T=n(h,[["render",l]]);export{g as __pageData,T as default};
