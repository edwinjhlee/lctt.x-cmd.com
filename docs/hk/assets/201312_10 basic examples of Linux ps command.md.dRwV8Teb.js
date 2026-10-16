import{_ as n,a0 as s,w as c,s as d,ao as i,I as t,x as a,a1 as p,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse('{"title":"ps命令的10個例子 | LCTT x X-CMD","titleTemplate":false,"description":"ps命令的10個例子 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"ps命令的10個例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"ps命令的10個例子 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/10 basic examples of Linux ps command","title":"ps命令的10個例子","tag":"201312","desc":""},"relativePath":"201312/10 basic examples of Linux ps command.md","filePath":"[post].md"}'),h={name:"201312/10 basic examples of Linux ps command.md"};function l(u,e,m,w,b,f){const o=s("Link");return c(),d("div",null,[e[11]||(e[11]=i(`<h1 id="ps命令的10個例子" tabindex="-1">ps命令的10個例子 <a class="header-anchor" href="#ps命令的10個例子" aria-label="Permalink to “ps命令的10個例子”">​</a></h1><h3 id="linux-ps-命令" tabindex="-1">Linux ps 命令 <a class="header-anchor" href="#linux-ps-命令" aria-label="Permalink to “Linux ps 命令”">​</a></h3><p>linux的ps命令是一個查看系統運行的進程的一個最基礎的工具。它提供了一個當前進程的快照，還帶有一些具體的信息，比如用户id，cpu使用率，內存使用，命令名等，它不會像top或者htop一樣實時顯示數據。雖然它在功能和輸出上更加簡單，但它仍然是每個linux新手需要了解和學好的必要進程管理/檢測工具。</p><p>在本篇中，我們會學習ps命令基本的用法：查找、過濾，以不同的方式排序。</p><h3 id="語法説明" tabindex="-1">語法説明 <a class="header-anchor" href="#語法説明" aria-label="Permalink to “語法説明”">​</a></h3><p>ps命令有兩種不同風格的語法規則：BSD風格和UNIX風格。Linux新手經常感到困惑並會誤解這兩種風格，所以在繼續下一步之前，我們來弄清楚一些基本的信息。</p><blockquote><p>注意: &quot;ps aux&quot;不等同於&quot;ps -aux&quot;。比如&quot;-u&quot;用於顯示用户的進程，但是&quot;u&quot;意味着顯示具體信息。</p></blockquote><p>BSD 形式 - BSD形式的語法的選項前沒有破折號，如：</p><pre><code>ps aux
</code></pre><p>UNIX/LINUX 形式 - linux形式的語法的選項前有破折號，如：</p><pre><code>ps -ef
</code></pre><blockquote><p>在linux系統上混合這兩種語法是可以的。比如 &quot;ps ax -f&quot;。但是本章中我們主要討論UNIX形式語法。</p></blockquote><h3 id="如何使用ps命令" tabindex="-1">如何使用ps命令 <a class="header-anchor" href="#如何使用ps命令" aria-label="Permalink to “如何使用ps命令”">​</a></h3><h4 id="_1-顯示所有進程" tabindex="-1">1. 顯示所有進程 <a class="header-anchor" href="#_1-顯示所有進程" aria-label="Permalink to “1. 顯示所有進程”">​</a></h4><p>下面的命令可以顯示所有進程的列表。</p><pre><code>$ ps ax
$ ps -ef
</code></pre><p>通過管道輸出到&quot;less&quot;可以分頁。</p><p>使用&quot;u&quot;或者&quot;-f&quot;選項可以顯示進程的具體信息。</p><pre><code>$ ps aux
$ ps -ef -f
</code></pre><blockquote><p>為什麼USER列顯示的不是我的用户名，但是其他的像root，www-data等卻顯示？ 對於所有的用户(包括你們的)，如果長度大於8個字符，那麼ps只會顯示你的UID而不是用户名。</p></blockquote><h4 id="_2-顯示用户進程" tabindex="-1">2. 顯示用户進程 <a class="header-anchor" href="#_2-顯示用户進程" aria-label="Permalink to “2. 顯示用户進程”">​</a></h4><p>使用&quot;-u&quot;選項後跟用户名來過濾所屬用户的進程。多個用户名可以用逗號分隔。</p><pre><code>$ ps -f -u www-data
UID        PID  PPID  C STIME TTY          TIME CMD
www-data  1329  1328  0 09:32 ?        00:00:00 nginx: worker process
www-data  1330  1328  0 09:32 ?        00:00:00 nginx: worker process
www-data  1332  1328  0 09:32 ?        00:00:00 nginx: worker process
www-data  1377  1372  0 09:32 ?        00:00:00 php-fpm: pool a.localhost                                               
www-data  1378  1372  0 09:32 ?        00:00:00 php-fpm: pool a.localhost                                               
www-data  4524  2359  0 10:03 ?        00:00:00 /usr/sbin/apache2 -k start
www-data  4527  2359  0 10:03 ?        00:00:00 /usr/sbin/apache2 -k start
www-data  4528  2359  0 10:03 ?        00:00:00 /usr/sbin/apache2 -k start
</code></pre><h4 id="_3-通過名字或者進程id顯示進程" tabindex="-1">3. 通過名字或者進程id顯示進程 <a class="header-anchor" href="#_3-通過名字或者進程id顯示進程" aria-label="Permalink to “3. 通過名字或者進程id顯示進程”">​</a></h4><p>通過&quot;-C&quot;選項後面加上名字或者命令來搜索進程。</p><pre><code>$ ps -C apache2
  PID TTY          TIME CMD
 2359 ?        00:00:00 apache2
 4524 ?        00:00:00 apache2
 4525 ?        00:00:00 apache2
...
</code></pre><p>要通過進程id顯示進程，就使用&quot;-p&quot;選項，並且還可以通過逗號分隔來指定多個進程id。</p><pre><code>$ ps -f -p 3150,7298,6544
</code></pre><p>&quot;-C&quot;必須提供精確的進程名，並且它並不能通過部分名字或者通配符查找。為了更靈活地搜索進程列表，通常使用grep命令。</p><pre><code>$ ps -ef | grep apache
</code></pre><h4 id="_4-通過cpu或者內存使用排序進程" tabindex="-1">4. 通過cpu或者內存使用排序進程 <a class="header-anchor" href="#_4-通過cpu或者內存使用排序進程" aria-label="Permalink to “4. 通過cpu或者內存使用排序進程”">​</a></h4><p>系統管理員通常想要找出那些消耗最多內存或者CPU的進程。排序選項會基於特定的字段或者參數來排序進程列表。</p><p>可以用&#39;--sort&#39;指定多個字段，並用逗號分割。除此之外，字段前面還可以跟上&#39;-&#39;或者&#39;+&#39;的前綴來相應地表示遞減和遞增排序。這裏有很多的用於排序的選項，通過man頁來獲取完整的列表。</p><pre><code>$ ps aux --sort=-pcpu,+pmem
</code></pre><p>顯示前5名最耗cpu的進程。</p><pre><code>$ ps aux --sort=-pcpu | head -5
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  2.6  0.7  51396  7644 ?        Ss   02:02   0:03 /usr/lib/systemd/systemd --switched-root --system --deserialize 23
root      1249  2.6  3.0 355800 30896 tty1     Rsl+ 02:02   0:02 /usr/bin/X -background none :0 vt01 -nolisten tcp
root       508  2.4  1.6 248488 16776 ?        Ss   02:02   0:03 /usr/bin/python /usr/sbin/firewalld --nofork
silver    1525  2.1  2.3 448568 24392 ?        S    02:03   0:01 /usr/bin/python /usr/share/system-config-printer/applet.py
</code></pre><h4 id="_5-以樹的形式顯示進程層級" tabindex="-1">5. 以樹的形式顯示進程層級 <a class="header-anchor" href="#_5-以樹的形式顯示進程層級" aria-label="Permalink to “5. 以樹的形式顯示進程層級”">​</a></h4><p>許多進程實際上是從同一個父進程fork出來的，瞭解父子關係通常是很有用的。&quot;--forest&quot; 選項會構造一個ascii藝術形式的進程層級視圖。</p><p>下面的命令會用apache2的進程名來搜索並構造一個樹來顯示具體信息。</p><pre><code>$ ps -f --forest -C apache2
UID        PID  PPID  C STIME TTY          TIME CMD
root      2359     1  0 09:32 ?        00:00:00 /usr/sbin/apache2 -k start
www-data  4524  2359  0 10:03 ?        00:00:00  \\_ /usr/sbin/apache2 -k start
www-data  4525  2359  0 10:03 ?        00:00:00  \\_ /usr/sbin/apache2 -k start
www-data  4526  2359  0 10:03 ?        00:00:00  \\_ /usr/sbin/apache2 -k start
www-data  4527  2359  0 10:03 ?        00:00:00  \\_ /usr/sbin/apache2 -k start
www-data  4528  2359  0 10:03 ?        00:00:00  \\_ /usr/sbin/apache2 -k start
</code></pre><blockquote><p>不要在排序中使用樹狀顯示，因為兩者都會以不同方式影響顯示的順序。</p></blockquote><h4 id="_6-顯示父進程的子進程" tabindex="-1">6. 顯示父進程的子進程 <a class="header-anchor" href="#_6-顯示父進程的子進程" aria-label="Permalink to “6. 顯示父進程的子進程”">​</a></h4><p>下面一個是找出所有從apache進程fork出來的進程的例子。</p><pre><code>$ ps -o pid,uname,comm -C apache2
  PID USER     COMMAND
 2359 root     apache2
 4524 www-data apache2
 4525 www-data apache2
 4526 www-data apache2
 4527 www-data apache2
 4528 www-data apache2
</code></pre><p>第一個屬於root的進程是apache2的主進程，其他的apache進程都是從主進程fork出來的。下面的命令使用apache2主進程的pid列出了所有的apache2的子進程。</p><pre><code>$ ps --ppid 2359
  PID TTY          TIME CMD
 4524 ?        00:00:00 apache2
 4525 ?        00:00:00 apache2
 4526 ?        00:00:00 apache2
 4527 ?        00:00:00 apache2
 4528 ?        00:00:00 apache2
</code></pre><h4 id="_7-顯示進程的線程" tabindex="-1">7. 顯示進程的線程 <a class="header-anchor" href="#_7-顯示進程的線程" aria-label="Permalink to “7. 顯示進程的線程”">​</a></h4><p>&quot;-L&quot;選項會隨着進程一起顯示線程。它可用於顯示所有指定進程或者所有進程的線程。</p><p>下面的命令會顯示進程id為3150的進程的所有線程。</p><pre><code>$ ps -p 3150 -L
</code></pre><h4 id="_8-改變顯示的列" tabindex="-1">8. 改變顯示的列 <a class="header-anchor" href="#_8-改變顯示的列" aria-label="Permalink to “8. 改變顯示的列”">​</a></h4><p>ps命令可以被配置用來只顯示被選中的列。很多列可以被用來顯示，完整的列表可以查看man頁。</p><p>下面的命令會只顯示pid、用户名、cpu、內存、命令列。</p><pre><code>$ ps -e -o pid,uname,pcpu,pmem,comm
</code></pre><p>同樣可以重命名列的名字。</p><pre><code>$ ps -e -o pid,uname=USERNAME,pcpu=CPU_USAGE,pmem,comm
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
</code></pre><p>非常靈活。</p><h4 id="_9-顯示進程運行的時間" tabindex="-1">9. 顯示進程運行的時間 <a class="header-anchor" href="#_9-顯示進程運行的時間" aria-label="Permalink to “9. 顯示進程運行的時間”">​</a></h4><p>運行的時間指的是，進程已經運行的時間。運行時間的列並沒有默認顯示，需要使用-o選項帶入。</p><pre><code>$ ps -e -o pid,comm,etime
</code></pre><h4 id="_10-將ps轉換為實時進程查看器" tabindex="-1">10. 將ps轉換為實時進程查看器 <a class="header-anchor" href="#_10-將ps轉換為實時進程查看器" aria-label="Permalink to “10. 將ps轉換為實時進程查看器”">​</a></h4><p>通常上，watch命令可將ps命令變成實時進程查看器。像這個簡單的命令</p><pre><code>$ watch -n 1 &#39;ps -e -o pid,uname,cmd,pmem,pcpu --sort=-pmem,-pcpu | head -15&#39;
</code></pre><p>我桌面上的輸出如下。</p><pre><code>Every 1.0s: ps -e -o pid,uname,cmd,pmem,pcpu --...  Sun Dec  1 18:16:08 2013

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
</code></pre><p>輸出會每秒刷新狀態，但是這其實很top不同。你會發現top/htop命令的輸出相比上面的ps命令刷新得更頻繁。</p><p>這是因為top輸出是結合了cup使用值和內存使用值後的排序值。但是上面的ps命令是一個更簡單的行為的排序，每次獲取一列(像學校的數學)，因此它不會像top那樣快速更新。</p><hr>`,68)),t("p",null,[e[1]||(e[1]=a("via: ",-1)),p(o,{href:"http://www.binarytides.com/linux-ps-command/"},{default:r(()=>[...e[0]||(e[0]=[a("http://www.binarytides.com/linux-ps-command/",-1)])]),_:1})]),t("p",null,[e[4]||(e[4]=a("譯者：",-1)),p(o,{href:"https://github.com/geekpi"},{default:r(()=>[...e[2]||(e[2]=[a("geekpi",-1)])]),_:1}),e[5]||(e[5]=a(" 校對：",-1)),p(o,{href:"https://github.com/carolinewuyan"},{default:r(()=>[...e[3]||(e[3]=[a("Caroline",-1)])]),_:1})]),t("p",null,[e[8]||(e[8]=a("本文由 ",-1)),p(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[a("LCTT",-1)])]),_:1}),e[9]||(e[9]=a(" 原創翻譯，",-1)),p(o,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[a("Linux中國",-1)])]),_:1}),e[10]||(e[10]=a(" 榮譽推出",-1))])])}const T=n(h,[["render",l]]);export{g as __pageData,T as default};
