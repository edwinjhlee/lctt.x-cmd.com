import{_ as s,a0 as f,w as d,s as i,ao as l,I as o,x as r,a1 as a,A as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"检测 Linux 内存使用情况的 free 命令的10个例子 | LCTT x X-CMD","titleTemplate":false,"description":"检测 Linux 内存使用情况的 free 命令的10个例子 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"检测 Linux 内存使用情况的 free 命令的10个例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"检测 Linux 内存使用情况的 free 命令的10个例子 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141205 10 free Commands to Check Memory Usage in Linux","title":"检测 Linux 内存使用情况的 free 命令的10个例子","tag":"201501","desc":""},"relativePath":"201501/20141205 10 free Commands to Check Memory Usage in Linux.md","filePath":"[post].md"}'),p={name:"201501/20141205 10 free Commands to Check Memory Usage in Linux.md"};function h(m,e,u,c,g,x){const n=f("Link");return d(),i("div",null,[e[13]||(e[13]=l(`<h1 id="检测-linux-内存使用情况的-free-命令的10个例子" tabindex="-1">检测 Linux 内存使用情况的 free 命令的10个例子 <a class="header-anchor" href="#检测-linux-内存使用情况的-free-命令的10个例子" aria-label="Permalink to “检测 Linux 内存使用情况的 free 命令的10个例子”">​</a></h1><p><strong>Linux</strong>是最有名的开源操作系统之一，它拥有着极其巨大的命令集。确定<strong>物理内存</strong>和<strong>交换内存</strong>所有可用空间的最重要、也是唯一的方法是使用“<strong>free</strong>”命令。</p><p>Linux “<strong>free</strong>”命令可以给出类<strong>Linux/Unix</strong>操作系统中<strong>物理内存</strong>和<strong>交换内存</strong>的总使用量、可用量及内核使用的<strong>缓冲区</strong>情况。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2012/09/Linux-Free-commands.png" alt="10 Linux Free Command Examples"></p><p>这篇文章提供一些各种参数选项的“<strong>free</strong>”命令，这些命令对于你更好地利用你的内存会有帮助。</p><h3 id="_1-显示你的系统内存" tabindex="-1">1. 显示你的系统内存 <a class="header-anchor" href="#_1-显示你的系统内存" aria-label="Permalink to “1. 显示你的系统内存”">​</a></h3><p>free命令用于检测<strong>物理内存</strong>和<strong>交换内存</strong>已使用量和可用量（默认单位为<strong>KB</strong>）。下面演示命令的使用情况。</p><pre><code># free

             total       used       free     shared    buffers     cached
Mem:       1021628     912548     109080          0     120368     655548
-/+ buffers/cache:     136632     884996
Swap:      4194296          0    4194296
</code></pre><h3 id="_2-以字节为单位显示内存" tabindex="-1">2. 以字节为单位显示内存 <a class="header-anchor" href="#_2-以字节为单位显示内存" aria-label="Permalink to “2. 以字节为单位显示内存”">​</a></h3><p>加上<strong>-b</strong>参数的free命令，以<strong>字节</strong>为单位显示内存的大小。</p><pre><code># free -b

             total       used       free     shared    buffers     cached
Mem:    1046147072  934420480  111726592          0  123256832  671281152
-/+ buffers/cache:  139882496  906264576
Swap:   4294959104          0 4294959104
</code></pre><h3 id="_3-以千字节为单位显示内存" tabindex="-1">3. 以千字节为单位显示内存 <a class="header-anchor" href="#_3-以千字节为单位显示内存" aria-label="Permalink to “3. 以千字节为单位显示内存”">​</a></h3><p>加上<strong>-k</strong>参数的free命令（默认单位，所以可以不用使用它），以(KB)<strong>千字节</strong>为单位显示内存大小。</p><pre><code># free -k

             total       used       free     shared    buffers     cached
Mem:       1021628     912520     109108          0     120368     655548
-/+ buffers/cache:     136604     885024
Swap:      4194296          0    4194296
</code></pre><h3 id="_4-以兆字节为单位显示内存" tabindex="-1">4. 以兆字节为单位显示内存 <a class="header-anchor" href="#_4-以兆字节为单位显示内存" aria-label="Permalink to “4. 以兆字节为单位显示内存”">​</a></h3><p>想以<strong>(兆字节)</strong>显示内存大小，使用<strong>-m</strong>参数。</p><pre><code># free -m

             total       used       free     shared    buffers     cached
Mem:           997        891        106          0        117        640
-/+ buffers/cache:        133        864
Swap:         4095          0       4095
</code></pre><h3 id="_5-以千兆字节为单位显示内存" tabindex="-1">5. 以千兆字节为单位显示内存 <a class="header-anchor" href="#_5-以千兆字节为单位显示内存" aria-label="Permalink to “5. 以千兆字节为单位显示内存”">​</a></h3><p>使用<strong>-g</strong>为参数，将会以<strong>GB(千兆字节)</strong>为单位显示内存大小。</p><pre><code># free -g
             total       used       free     shared    buffers     cached
Mem:             0          0          0          0          0          0
-/+ buffers/cache:          0          0
Swap:            3          0          3
</code></pre><h3 id="_6-显示总计行" tabindex="-1">6. 显示总计行 <a class="header-anchor" href="#_6-显示总计行" aria-label="Permalink to “6. 显示总计行”">​</a></h3><p>加上-t选项，将会在屏幕最后列出总计一行。</p><pre><code># free -t

             total       used       free     shared    buffers     cached
Mem:       1021628     912520     109108          0     120368     655548
-/+ buffers/cache:     136604     885024
Swap:      4194296          0    4194296
Total: 5215924 912520 4303404
</code></pre><h3 id="_7-关闭显示缓冲区调整一行" tabindex="-1">7. 关闭显示缓冲区调整一行 <a class="header-anchor" href="#_7-关闭显示缓冲区调整一行" aria-label="Permalink to “7.  关闭显示缓冲区调整一行”">​</a></h3><p>默认情况下，free命令是显示“<strong>缓冲区调整</strong>”一行的，为了关闭显示，可以加上-o参数。</p><pre><code># free -o                                                              

             total       used       free     shared    buffers     cached                                                                          
Mem:       1021628     912520     109108          0     120368     655548                                                                         
Swap:      4194296          0    4194296                               
</code></pre><h3 id="_8-定期时间间隔更新内存状态" tabindex="-1">8. 定期时间间隔更新内存状态 <a class="header-anchor" href="#_8-定期时间间隔更新内存状态" aria-label="Permalink to “8. 定期时间间隔更新内存状态”">​</a></h3><p>-s选项加上一个整数，用来在定期时间间隔内更新free命令。举个例子，下面的命令将会在每5秒更新一个free命令。</p><pre><code># free -s 5

             total       used       free     shared    buffers     cached
Mem:       1021628     912368     109260          0     120368     655548
-/+ buffers/cache:     136452     885176
Swap:      4194296          0    4194296
</code></pre><h3 id="_9-显示底和高内存统计信息" tabindex="-1">9. 显示底和高内存统计信息 <a class="header-anchor" href="#_9-显示底和高内存统计信息" aria-label="Permalink to “9. 显示底和高内存统计信息”">​</a></h3><p>-l选项显示了具体的高和低内存的使用统计情况。</p><pre><code># free -l

             total       used       free     shared    buffers     cached
Mem:       1021628     912368     109260          0     120368     655548
Low:        890036     789064     100972
High:       131592     123304       8288
-/+ buffers/cache:     136452     885176
Swap:      4194296          0    4194296
</code></pre><h3 id="_10-检查free命令版本" tabindex="-1">10. 检查free命令版本 <a class="header-anchor" href="#_10-检查free命令版本" aria-label="Permalink to “10. 检查free命令版本”">​</a></h3><p>-V选项，显示free命令版本信息。</p><pre><code># free -V

procps version 3.2.8
</code></pre><hr>`,36)),o("p",null,[e[1]||(e[1]=r("via: ",-1)),a(n,{href:"http://www.tecmint.com/check-memory-usage-in-linux/"},{default:t(()=>[...e[0]||(e[0]=[r("http://www.tecmint.com/check-memory-usage-in-linux/",-1)])]),_:1})]),o("p",null,[e[5]||(e[5]=r("作者：",-1)),a(n,{href:"http://www.tecmint.com/author/admin/"},{default:t(()=>[...e[2]||(e[2]=[r("Ravi Saive",-1)])]),_:1}),e[6]||(e[6]=r(" 译者：",-1)),a(n,{href:"https://github.com/su-kaiyao"},{default:t(()=>[...e[3]||(e[3]=[r("su-kaiyao",-1)])]),_:1}),e[7]||(e[7]=r(" 校对：",-1)),a(n,{href:"https://github.com/wxy"},{default:t(()=>[...e[4]||(e[4]=[r("wxy",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=r("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[8]||(e[8]=[r("LCTT",-1)])]),_:1}),e[11]||(e[11]=r(" 原创翻译，",-1)),a(n,{href:"http://linux.cn/"},{default:t(()=>[...e[9]||(e[9]=[r("Linux中> 国",-1)])]),_:1}),e[12]||(e[12]=r(" 荣誉推出",-1))])])}const L=s(p,[["render",h]]);export{w as __pageData,L as default};
