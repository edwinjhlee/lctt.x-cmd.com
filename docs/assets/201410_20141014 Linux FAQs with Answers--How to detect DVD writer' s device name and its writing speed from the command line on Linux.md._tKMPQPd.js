import{_ as d,a0 as o,w as s,s as p,ao as D,I as a,x as t,a1 as i,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const h=JSON.parse(`{"title":"Linux有问必答：如何使用Linux命令行检测DVD刻录机的名字和读写速度 | LCTT x X-CMD","titleTemplate":false,"description":"Linux有问必答：如何使用Linux命令行检测DVD刻录机的名字和读写速度 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux有问必答：如何使用Linux命令行检测DVD刻录机的名字和读写速度 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux有问必答：如何使用Linux命令行检测DVD刻录机的名字和读写速度 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20141014 Linux FAQs with Answers--How to detect DVD writer' s device name and its writing speed from the command line on Linux","title":"Linux有问必答：如何使用Linux命令行检测DVD刻录机的名字和读写速度","tag":"201410","desc":""},"relativePath":"201410/20141014 Linux FAQs with Answers--How to detect DVD writer' s device name and its writing speed from the command line on Linux.md","filePath":"[post].md"}`),l={name:"201410/20141014 Linux FAQs with Answers--How to detect DVD writer' s device name and its writing speed from the command line on Linux.md"};function m(c,e,u,x,f,V){const n=o("Link");return s(),p("div",null,[e[11]||(e[11]=D(`<h1 id="linux有问必答-如何使用linux命令行检测dvd刻录机的名字和读写速度" tabindex="-1">Linux有问必答：如何使用Linux命令行检测DVD刻录机的名字和读写速度 <a class="header-anchor" href="#linux有问必答-如何使用linux命令行检测dvd刻录机的名字和读写速度" aria-label="Permalink to “Linux有问必答：如何使用Linux命令行检测DVD刻录机的名字和读写速度”">​</a></h1><blockquote><p><strong>提问</strong>：我想要知道我的DVD刻录机的名字和在烧录时的速度。该使用什么Linux命令行工具来连测DVD刻录机的设备名和速度？</p></blockquote><p>如今大多数消费PC和笔记本电脑都配备了DVD刻录机。在Linux中，光盘驱动器，如CD/DVD驱动器的名字是在引导时内核基于udev规则来命名的。有几种方法来检测刻录机的设备名称和它的写入速度。</p><h3 id="方法一" tabindex="-1">方法一 <a class="header-anchor" href="#方法一" aria-label="Permalink to “方法一”">​</a></h3><p>找出与DVD刻录机相关的设备名称最简单的方法是使用dmesg命令行工具，它打印出内核的消息缓冲区。在dmesg的输出中，寻找一个安装好的DVD刻录机：</p><pre><code>$ dmesg | egrep -i --color &#39;dvd|cd/rw|writer&#39; 
</code></pre><p><img src="https://farm6.staticflickr.com/5603/15505432622_0bfec51a8f_z.jpg" alt=""></p><p>上述命令的输出会告诉你你的Linux系统上是否检测到了DVD刻录机以及它被分配的名字。本例中，DVD刻录机的设备名称为“/dev/sr0”。虽然此方法不会告诉你的写入速度</p><h3 id="方法二" tabindex="-1">方法二 <a class="header-anchor" href="#方法二" aria-label="Permalink to “方法二”">​</a></h3><p>第二个获得你DVD刻录机的信息是使用lsscsi命令，它只是列出了所有可用的SCSI设备。</p><p>在基于Debian Linux上安装 <strong>lsscsi</strong>:</p><pre><code>$ sudo apt-get install lsscsi
</code></pre><p>在基于Red Hat Linux上安装:</p><pre><code>$ sudo yum install lsscsi
</code></pre><p>如果成功检测到，lsscsi命令的输出会告诉你DVD刻录机的名称：</p><pre><code>$ lsscsi 
</code></pre><p><img src="https://farm4.staticflickr.com/3937/15319078780_e650d751d6.jpg" alt=""></p><p>这也不会告诉你刻录机更多的细节，比如写入速度。</p><h3 id="方法三" tabindex="-1">方法三 <a class="header-anchor" href="#方法三" aria-label="Permalink to “方法三”">​</a></h3><p>第三种获取有关你DVD刻录机的信息是参考/proc/sys/dev/cdrom/info。</p><pre><code>$ cat /proc/sys/dev/cdrom/info 
</code></pre><hr><pre><code>CD-ROM information, Id: cdrom.c 3.20 2003/12/17

drive name:		sr0
drive speed:		24
drive # of slots:	1
Can close tray:		1
Can open tray:		1
Can lock tray:		1
Can change speed:	1
Can select disk:	0
Can read multisession:	1
Can read MCN:		1
Reports media changed:	1
Can play audio:		1
Can write CD-R:		1
Can write CD-RW:	1
Can read DVD:		1
Can write DVD-R:	1
Can write DVD-RAM:	1
Can read MRW:		1
Can write MRW:		1
Can write RAM:		1
</code></pre><p>本例中，输出会告诉你DVD刻录机（/dev/sr0）与x24的CD刻录速度（即24x153.6 Kbps）兼容，且相当于x3的DVD写入速度（即3x1385 KBps的）兼容。这里的写入速度是最大可能的速度，而实际的写入速度当然取决于使用的介质（例如：DVD-RW、DVD + RW、DVD-RAM等）。</p><h3 id="方法四" tabindex="-1">方法四 <a class="header-anchor" href="#方法四" aria-label="Permalink to “方法四”">​</a></h3><p>另一种方法是使用一种称为wodim命令行程序。在大多数的Linux发行版，这个工具以及它的软链接cdrecord都是默认安装的。</p><pre><code># wodim -prcap
(or cdrecord -prcap) 
</code></pre><p><img src="https://farm6.staticflickr.com/5614/15505433532_4d7e47fc51_o.png" alt=""></p><p>如果不带任何参数调用时，wodim命令会自动检测到DVD刻录机，并显示出详细的功能以及它的最大读取/写入速度。例如，你可以找出刻录机支持哪些媒体（如CD-R、CD-RW、DVD-RW、DVD-ROM、DVD-R、DVD-RAM、音频CD），以及有哪些如何读/写速度。上面的例子中输出显示，DVD刻录机对于CD拥有X24最大写入速度，对于DVD有X3的最大写入速度。</p><p>需要注意的是wodim命令报告的写入速度会随您插入到DVD刻录机的CD/DVD介质的改变而改变，这反映了媒体规范。</p><h3 id="方法五" tabindex="-1">方法五 <a class="header-anchor" href="#方法五" aria-label="Permalink to “方法五”">​</a></h3><p>还有一个方法来检查DVD刻录机的写入速度的是一个名为dvd+rw-mediainfo的工具，这是dvd+rw工具包（DVD+-RW/R媒体工具链）的一部分。</p><p>在基于Debian 发行版上安装 <strong>dvd+rw-tools</strong></p><pre><code>$ sudo apt-get install dvd+rw-tools
</code></pre><p>在基于Red Hat 发行版上安装 dvd+rw-tools:</p><pre><code>$ sudo yum install dvd+rw-tools 
</code></pre><p>不像其他工具， dvd+rw-mediainfo命令不会产生任何输出，除非你插入DVD光盘到刻录机中。所以，当你插入DVD光盘后，运行以下的命令。用你自己的设备名称替换“/dev/sr0”。</p><pre><code>$ sudo dvd+rw-mediainfo /dev/sr0 
</code></pre><p><img src="https://farm6.staticflickr.com/5597/15324137650_91dbf458ef_z.jpg" alt=""></p><p><strong>dvd+rw-mediainfo</strong>工具会探测插入的媒体（本例中是“DVD-R”），以找出对媒体的实际写入速度。</p><hr>`,41)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),i(n,{href:"http://ask.xmodulo.com/detect-dvd-writer-device-name-writing-speed-command-line-linux.html"},{default:r(()=>[...e[0]||(e[0]=[t("http://ask.xmodulo.com/detect-dvd-writer-device-name-writing-speed-command-line-linux.html",-1)])]),_:1})]),a("p",null,[e[4]||(e[4]=t("译者：",-1)),i(n,{href:"https://github.com/geekpi"},{default:r(()=>[...e[2]||(e[2]=[t("geekpi",-1)])]),_:1}),e[5]||(e[5]=t(" 校对：",-1)),i(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[8]||(e[8]=t("本文由 ",-1)),i(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原创翻译，",-1)),i(n,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[t("Linux中国",-1)])]),_:1}),e[10]||(e[10]=t(" 荣誉推出",-1))])])}const g=d(l,[["render",m]]);export{h as __pageData,g as default};
