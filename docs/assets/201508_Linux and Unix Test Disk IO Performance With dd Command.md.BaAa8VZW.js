import{_ as p,a0 as s,w as a,s as r,ao as l,I as n,x as d,a1 as o,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"使用 dd 命令进行硬盘 I/O 性能检测 | LCTT x X-CMD","titleTemplate":false,"description":"使用 dd 命令进行硬盘 I/O 性能检测 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 dd 命令进行硬盘 I/O 性能检测 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 dd 命令进行硬盘 I/O 性能检测 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/Linux and Unix Test Disk IO Performance With dd Command","title":"使用 dd 命令进行硬盘 I/O 性能检测","tag":"201508","desc":""},"relativePath":"201508/Linux and Unix Test Disk IO Performance With dd Command.md","filePath":"[post].md"}'),c={name:"201508/Linux and Unix Test Disk IO Performance With dd Command.md"};function m(u,e,f,g,h,b){const t=s("Link");return a(),r("div",null,[e[11]||(e[11]=l(`<h1 id="使用-dd-命令进行硬盘-i-o-性能检测" tabindex="-1">使用 dd 命令进行硬盘 I/O 性能检测 <a class="header-anchor" href="#使用-dd-命令进行硬盘-i-o-性能检测" aria-label="Permalink to “使用 dd 命令进行硬盘 I/O 性能检测”">​</a></h1><p>如何使用dd命令测试我的硬盘性能？如何在linux操作系统下检测硬盘的读写速度？</p><p>你可以使用以下命令在一个Linux或类Unix操作系统上进行简单的I/O性能测试。</p><ul><li><strong>dd命令</strong> ：它被用来在Linux和类Unix系统下对硬盘设备进行写性能的检测。</li><li><strong>hparm命令</strong>：它用来在基于 Linux 的系统上获取或设置硬盘参数，包括测试读性能以及缓存性能等。</li></ul><p>在这篇指南中，你将会学到如何使用dd命令来测试硬盘性能。</p><h3 id="使用dd命令来监控硬盘的读写性能" tabindex="-1">使用dd命令来监控硬盘的读写性能：### <a class="header-anchor" href="#使用dd命令来监控硬盘的读写性能" aria-label="Permalink to “使用dd命令来监控硬盘的读写性能：###”">​</a></h3><ul><li>打开shell终端。</li><li>或者通过ssh登录到远程服务器。</li><li>使用dd命令来测量服务器的吞吐率（写速度) <code>dd if=/dev/zero of=/tmp/test1.img bs=1G count=1 oflag=dsync</code></li><li>使用dd命令测量服务器延迟 <code>dd if=/dev/zero of=/tmp/test2.img bs=512 count=1000 oflag=dsync</code></li></ul><p>####理解dd命令的选项###</p><p>在这个例子当中，我将使用搭载Ubuntu Linux 14.04 LTS系统的RAID-10（配有SAS SSD的Adaptec 5405Z）服务器阵列来运行。基本语法为：</p><pre><code>dd if=/dev/input.file  of=/path/to/output.file  bs=block-size  count=number-of-blocks  oflag=dsync
## GNU dd语法 ##
dd if=/dev/zero of=/tmp/test1.img bs=1G count=1 oflag=dsync
##另外一种GNU dd的语法 ##
dd if=/dev/zero of=/tmp/testALT.img bs=1G count=1 conv=fdatasync
</code></pre><p>输出样例：</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/dd-server-test-io-speed-output.jpg" alt="Fig.01: Ubuntu Linux Server with RAID10 and testing server throughput with dd"></p><p><em>图01: 使用dd命令获取的服务器吞吐率</em></p><p>请各位注意在这个实验中，我们写入一个G的数据，可以发现，服务器的吞吐率是135 MB/s，这其中</p><ul><li><code>if=/dev/zero</code> (if=/dev/input.file) ：用来设置dd命令读取的输入文件名。</li><li><code>of=/tmp/test1.img</code> (of=/path/to/output.file)：dd命令将input.file写入的输出文件的名字。</li><li><code>bs=1G</code> (bs=block-size) ：设置dd命令读取的块的大小。例子中为1个G。</li><li><code>count=1</code> (count=number-of-blocks)：dd命令读取的块的个数。</li><li><code>oflag=dsync</code> (oflag=dsync) ：使用同步I/O。不要省略这个选项。这个选项能够帮助你去除caching的影响，以便呈现给你精准的结果。</li><li><code>conv=fdatasyn</code>: 这个选项和<code>oflag=dsync</code>含义一样。</li></ul><p>在下面这个例子中，一共写了1000次，每次写入512字节来获得RAID10服务器的延迟时间：</p><pre><code>dd if=/dev/zero of=/tmp/test2.img bs=512 count=1000 oflag=dsync
</code></pre><p>输出样例：</p><pre><code>1000+0 records in
1000+0 records out
512000 bytes (512 kB) copied, 0.60362 s, 848 kB/s
</code></pre><p>请注意服务器的吞吐率以及延迟时间也取决于服务器/应用的负载。所以我推荐你在一个刚刚重启过并且处于峰值时间的服务器上来运行测试，以便得到更加准确的度量。现在你可以在你的所有设备上互相比较这些测试结果了。</p><p>###为什么服务器的吞吐率和延迟时间都这么差？###</p><p>低的数值并不意味着你在使用差劲的硬件。可能是硬件 RAID10的控制器缓存导致的。</p><p>使用hdparm命令来查看硬盘缓存的读速度。</p><p>我建议你运行下面的命令2-3次来对设备读性能进行检测，以作为参照和相互比较：</p><pre><code>### 有缓存的硬盘读性能测试——/dev/sda ###
hdparm -t /dev/sda1
## 或者 ##
hdparm -t /dev/sda
</code></pre><p>然后运行下面这个命令2-3次来对缓存的读性能进行对照性检测：</p><pre><code>## Cache读基准——/dev/sda ###
hdparm -T /dev/sda1
## 或者 ##
hdparm -T /dev/sda
</code></pre><p>或者干脆把两个测试结合起来：</p><pre><code>hdparm -Tt /dev/sda
</code></pre><p>输出样例：</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/hdparam-output.jpg" alt="Fig.02: Linux hdparm command to test reading and caching disk performance"></p><p><em>图02: 检测硬盘读入以及缓存性能的Linux hdparm命令</em></p><p>请再次注意，由于文件文件操作的缓存属性，你将总是会看到很高的读速度。</p><p>###使用dd命令来测试读取速度###</p><p>为了获得精确的读测试数据，首先在测试前运行下列命令，来将缓存设置为无效：</p><pre><code>flush
echo 3 | sudo tee /proc/sys/vm/drop_caches
time time dd if=/path/to/bigfile of=/dev/null bs=8k
</code></pre><p>####笔记本上的示例####</p><p>运行下列命令：</p><pre><code>### 带有Cache的Debian系统笔记本吞吐率###
dd if=/dev/zero of=/tmp/laptop.bin bs=1G count=1 oflag=direct
 
###使cache失效###
hdparm -W0 /dev/sda
 
###没有Cache的Debian系统笔记本吞吐率###
dd if=/dev/zero of=/tmp/laptop.bin bs=1G count=1 oflag=direct
</code></pre><p>####苹果OS X Unix(Macbook pro)的例子####</p><p>GNU dd has many more options but OS X/BSD and Unix-like dd command need to run as follows to test real disk I/O and not memory add sync option as follows:</p><p>GNU dd命令有其他许多选项，但是在 OS X/BSD 以及类Unix中， dd命令需要像下面那样执行来检测去除掉内存地址同步的硬盘真实I/O性能：</p><pre><code>## 运行这个命令2-3次来获得更好地结果 ###
time sh -c &quot;dd if=/dev/zero of=/tmp/testfile bs=100k count=1k &amp;&amp; sync&quot;
</code></pre><p>输出样例：</p><pre><code>1024+0 records in
1024+0 records out
104857600 bytes transferred in 0.165040 secs (635346520 bytes/sec)
 
real	0m0.241s
user	0m0.004s
sys	0m0.113s
</code></pre><p>本人Macbook Pro的写速度是635346520字节（635.347MB/s)。</p><p>###不喜欢用命令行?^_^###</p><p>你可以在Linux或基于Unix的系统上使用disk utility(gnome-disk-utility)这款工具来得到同样的信息。下面的那个图就是在我的Fedora Linux v22 VM上截取的。</p><p>####图形化方法####</p><p>点击“Activites”或者“Super”按键来在桌面和Activites视图间切换。输入“Disks”</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/disk-1.jpg" alt="Fig.03: Start the Gnome disk utility"></p><p><em>图03: 打开Gnome硬盘工具</em></p><p>在左边的面板上选择你的硬盘，点击configure按钮，然后点击“Benchmark partition”：</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/disks-2.jpg" alt="Fig.04: Benchmark disk/partition"></p><p><em>图04: 评测硬盘/分区</em></p><p>最后，点击“Start Benchmark...”按钮（你可能需要输入管理员用户名和密码）：</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/disks-3.jpg" alt="Fig.05: Final benchmark result"></p><p><em>图05: 最终的评测结果</em></p><p>如果你要问，我推荐使用哪种命令和方法？</p><ul><li>我推荐在所有的类Unix系统上使用dd命令（<code>time sh -c &quot;dd if=/dev/zero of=/tmp/testfile bs=100k count=1k &amp;&amp; sync</code>）</li><li>如果你在使用GNU/Linux，使用dd命令 (<code>dd if=/dev/zero of=/tmp/testALT.img bs=1G count=1 conv=fdatasync</code>)</li><li>确保你每次使用时，都调整了count以及bs参数以获得更好的结果。</li><li>GUI方法只适合桌面系统为Gnome2或Gnome3的Linux/Unix笔记本用户。</li></ul><hr>`,61)),n("p",null,[e[1]||(e[1]=d("via: ",-1)),o(t,{href:"http://www.cyberciti.biz/faq/howto-linux-unix-test-disk-performance-with-dd-command/"},{default:i(()=>[...e[0]||(e[0]=[d("http://www.cyberciti.biz/faq/howto-linux-unix-test-disk-performance-with-dd-command/",-1)])]),_:1})]),n("p",null,[e[4]||(e[4]=d("作者：Vivek Gite 译者：",-1)),o(t,{href:"https://github.com/DongShuaike"},{default:i(()=>[...e[2]||(e[2]=[d("DongShuaike",-1)])]),_:1}),e[5]||(e[5]=d(" 校对：",-1)),o(t,{href:"https://github.com/wxy"},{default:i(()=>[...e[3]||(e[3]=[d("wxy",-1)])]),_:1})]),n("p",null,[e[8]||(e[8]=d("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[6]||(e[6]=[d("LCTT",-1)])]),_:1}),e[9]||(e[9]=d(" 原创翻译，",-1)),o(t,{href:"https://linux.cn/"},{default:i(()=>[...e[7]||(e[7]=[d("Linux中国",-1)])]),_:1}),e[10]||(e[10]=d(" 荣誉推出",-1))])])}const y=p(c,[["render",m]]);export{v as __pageData,y as default};
