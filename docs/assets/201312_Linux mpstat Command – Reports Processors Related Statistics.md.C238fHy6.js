import{_ as o,a0 as i,w as p,s as l,ao as m,I as r,x as s,a1 as n,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"Linux mpstat 命令- 报告处理器的相关统计信息 | LCTT x X-CMD","titleTemplate":false,"description":"Linux mpstat 命令- 报告处理器的相关统计信息 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux mpstat 命令- 报告处理器的相关统计信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux mpstat 命令- 报告处理器的相关统计信息 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Linux mpstat Command – Reports Processors Related Statistics","title":"Linux mpstat 命令- 报告处理器的相关统计信息","tag":"201312","desc":""},"relativePath":"201312/Linux mpstat Command – Reports Processors Related Statistics.md","filePath":"[post].md"}'),d={name:"201312/Linux mpstat Command – Reports Processors Related Statistics.md"};function u(P,t,g,C,c,x){const a=i("Link");return p(),l("div",null,[t[11]||(t[11]=m(`<h1 id="linux-mpstat-命令-报告处理器的相关统计信息" tabindex="-1">Linux mpstat 命令- 报告处理器的相关统计信息 <a class="header-anchor" href="#linux-mpstat-命令-报告处理器的相关统计信息" aria-label="Permalink to “Linux mpstat 命令- 报告处理器的相关统计信息”">​</a></h1><p>现在的计算机一般都使用着多处理器或四核单处理器。在服务器端，更多的处理器或核心意味着更强的能力，但另一方面，应用程序也需要更高的能耗。你还可能遇到过这样的场景：当你的cpu利用率很高时你却感觉自己根本没有运行任何程序。以上种种情况，在Linux系统上，你可以使用 <strong>mpstate</strong> 来监控这样的活动。 <img src="http://linoxide.com/wp-content/uploads/2013/12/linux-mpstat-command.jpg" alt="linux mpstat command"></p><h3 id="什么是mpstat" tabindex="-1">什么是mpstat <a class="header-anchor" href="#什么是mpstat" aria-label="Permalink to “什么是mpstat”">​</a></h3><p><strong>mpstat</strong> 用于监控你的系统上cpu的利用率。如果你的系统有多个处理器，它会发挥更大的作用。 第一个处理器会被标记为CPU 0。第二个会被标记为CPU 2，以此类推。在操作手册中，如下描述mpstat：</p><blockquote><p>mpstat命令把每个可用的处理器的状态写到标准输出，默认第一个处理器为processor 0。所有处理器的全局平均状态也会以报告形式给出。mpstat命令可以用于SMP和UP的机器上，但是在UP机器上，只有全局平均状态会被打印出来。如果没有选择具体行为，默认将报告CPU的利用率</p></blockquote><h3 id="如何运行mpstat" tabindex="-1">如何运行mpstat <a class="header-anchor" href="#如何运行mpstat" aria-label="Permalink to “如何运行mpstat”">​</a></h3><p>只需在你的终端输入 <strong>mpstat</strong> 就可以运行mpstat.</p><pre><code>$ mpstat

Linux 3.2.0-57-generic (USERNB01) 12/12/2013 _x86_64_ (2 CPU)

03:29:29 PM CPU %usr %nice %sys %iowait %irq %soft %steal %guest %idle
03:29:29 PM all 6.30 0.06 1.94 3.75 0.00 0.06 0.00 0.00 87.88
</code></pre><p>如果你发现譬如 <strong>命令找不到</strong>或者类似的错误，说明你可能没有安装mpstat。</p><p>如果你使用的是 <strong>CentOS, RedHat or Fedora</strong>，运行下列命令来安装mpstat</p><pre><code># yum install sysstat
</code></pre><p>如果你使用的是 <strong>Debian, Ubuntu or 它的衍生版</strong>， 运行下列命令来安装mpstat</p><pre><code># apt-get install sysstat
</code></pre><p>下面是如何理解上面显示出来的信息。</p><ul><li><strong>03:29:29 PM</strong> : 指mpstat运行的时间</li><li><strong>all</strong> : 指所有CPU</li><li><strong>%usr</strong> : 显示在用户级别（例如应用程序）执行时CPU利用率的百分比</li><li><strong>%nice</strong> :显示在拥有nice优先级的用户级别执行时CPU利用率的百分比</li><li><strong>%sys</strong> : 现实在系统级别（例如内核）执行时CPU利用率的百分比</li><li><strong>%iowait</strong> : 显示在系统有未完成的磁盘I/O请求期间CPU空闲时间的百分比</li><li><strong>%irq</strong> : 显示CPU服务硬件中断所花费时间的百分比</li><li><strong>%soft</strong> : 显示CPU服务软件中断所花费时间的百分比</li><li><strong>%steal</strong> : 显示虚拟机管理器在服务另一个虚拟处理器时虚拟CPU处在非自愿等待下花费时间的百分比</li><li><strong>%guest</strong> : 显示运行虚拟处理器时CPU花费时间的百分比</li><li><strong>%idle</strong> : 显示CPU空闲和系统没有未完成的磁盘I/O请求情况下的时间百分比</li></ul><h3 id="打印每个处理器的cpu利用率" tabindex="-1">打印每个处理器的CPU利用率 <a class="header-anchor" href="#打印每个处理器的cpu利用率" aria-label="Permalink to “打印每个处理器的CPU利用率”">​</a></h3><p>正如上面的命令结果所示，我们的系统有两个CPU。如果你愿意，你可以使用参数 -P 然后紧跟CPU编号得到指定CPU的利用率。</p><pre><code>$ mpstat -P 0

Linux 3.2.0-57-generic (USERNB01) 12/12/2013 _x86_64_ (2 CPU)

03:54:00 PM CPU %usr %nice %sys %iowait %irq %soft %steal %guest %idle
03:54:00 PM 0 3.82 0.01 1.16 3.88 0.00 0.06 0.00 0.00 91.06

$ mpstat -P 1
Linux 3.2.0-57-generic (USERNB01) 12/12/2013 _x86_64_ (2 CPU)

03:53:58 PM CPU %usr %nice %sys %iowait %irq %soft %steal %guest %idle
03:53:58 PM 1 16.52 0.20 4.48 0.46 0.00 0.04 0.00 0.00 78.30
</code></pre><h3 id="打印所有cpu的利用率" tabindex="-1">打印所有CPU的利用率 <a class="header-anchor" href="#打印所有cpu的利用率" aria-label="Permalink to “打印所有CPU的利用率”">​</a></h3><p>你也可以在一页里打印每个处理器的CPU利用率，只需使用 <strong>-P ALL</strong> 参数来指定。</p><pre><code>$ mpstat -P ALL

Linux 3.2.0-57-generic (USERNB01) 12/12/2013 _x86_64_ (2 CPU)

04:07:36 PM CPU %usr %nice %sys %iowait %irq %soft %steal %guest %idle
04:07:36 PM all 6.02 0.04 1.72 2.99 0.00 0.05 0.00 0.00 89.17
04:07:36 PM 0 3.84 0.01 1.15 3.72 0.00 0.06 0.00 0.00 91.21
04:07:36 PM 1 13.55 0.15 3.66 0.46 0.00 0.03 0.00 0.00 82.15
</code></pre><h3 id="使用时间间隔打印cpu利用率" tabindex="-1">使用时间间隔打印CPU利用率 <a class="header-anchor" href="#使用时间间隔打印cpu利用率" aria-label="Permalink to “使用时间间隔打印CPU利用率”">​</a></h3><p>如果你想观察CPU的利用率变化，你可以使用时间间隔，下面是一个例子。</p><pre><code>$ mpstat 3 4

Linux 3.2.0-57-generic (USERNB01) 12/12/2013 _x86_64_ (2 CPU)

04:27:11 PM CPU %usr %nice %sys %iowait %irq %soft %steal %guest %idle
04:27:14 PM all 0.67 0.00 0.34 0.00 0.00 0.00 0.00 0.00 98.99
04:27:17 PM all 1.17 0.00 0.33 1.33 0.00 0.00 0.00 0.00 97.17
04:27:20 PM all 0.84 0.00 0.17 0.00 0.00 0.00 0.00 0.00 98.99
04:27:23 PM all 1.00 0.00 0.17 1.51 0.00 0.00 0.00 0.00 97.32
Average: all 0.92 0.00 0.25 0.71 0.00 0.00 0.00 0.00 98.12
</code></pre><p>上面的命令会<strong>每隔3秒</strong>显示CPU利用的<strong>4个报告</strong>。</p><h3 id="打印mpstat的版本" tabindex="-1">打印mpstat的版本 <a class="header-anchor" href="#打印mpstat的版本" aria-label="Permalink to “打印mpstat的版本”">​</a></h3><p>最后，为了打印mpstat的版本，使用参数 -V</p><pre><code>$ mpstat -V

sysstat version 10.0.3
(C) Sebastien Godard (sysstat orange.
</code></pre><p>这就是在linux系统上快速使用mpstat的方法。想要了解更多细节，可以输入 <strong>man mpstat</strong>来查看mpstat的手册。</p><hr>`,30)),r("p",null,[t[1]||(t[1]=s("via: ",-1)),n(a,{href:"http://linoxide.com/linux-command/linux-mpstat-command/"},{default:e(()=>[...t[0]||(t[0]=[s("http://linoxide.com/linux-command/linux-mpstat-command/",-1)])]),_:1})]),r("p",null,[t[4]||(t[4]=s("译者：",-1)),n(a,{href:"https://github.com/KayGuoWhu"},{default:e(()=>[...t[2]||(t[2]=[s("KayGuoWhu",-1)])]),_:1}),t[5]||(t[5]=s(" 校对：",-1)),n(a,{href:"https://github.com/tinyeyeser"},{default:e(()=>[...t[3]||(t[3]=[s("Mr小眼儿",-1)])]),_:1})]),r("p",null,[t[8]||(t[8]=s("本文由 ",-1)),n(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...t[6]||(t[6]=[s("LCTT",-1)])]),_:1}),t[9]||(t[9]=s(" 原创翻译，",-1)),n(a,{href:"http://linux.cn/"},{default:e(()=>[...t[7]||(t[7]=[s("Linux中国",-1)])]),_:1}),t[10]||(t[10]=s(" 荣誉推出",-1))])])}const L=o(d,[["render",u]]);export{f as __pageData,L as default};
