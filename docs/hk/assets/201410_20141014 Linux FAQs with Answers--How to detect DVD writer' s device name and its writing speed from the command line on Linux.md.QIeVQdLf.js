import{_ as d,a0 as o,w as s,s as p,ao as D,I as a,x as t,a1 as i,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse(`{"title":"Linux有問必答：如何使用Linux命令列檢測DVD刻錄機的名字和讀寫速度 | LCTT x X-CMD","titleTemplate":false,"description":"Linux有問必答：如何使用Linux命令列檢測DVD刻錄機的名字和讀寫速度 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux有問必答：如何使用Linux命令列檢測DVD刻錄機的名字和讀寫速度 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux有問必答：如何使用Linux命令列檢測DVD刻錄機的名字和讀寫速度 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20141014 Linux FAQs with Answers--How to detect DVD writer' s device name and its writing speed from the command line on Linux","title":"Linux有問必答：如何使用Linux命令列檢測DVD刻錄機的名字和讀寫速度","tag":"201410","desc":""},"relativePath":"201410/20141014 Linux FAQs with Answers--How to detect DVD writer' s device name and its writing speed from the command line on Linux.md","filePath":"[post].md"}`),l={name:"201410/20141014 Linux FAQs with Answers--How to detect DVD writer' s device name and its writing speed from the command line on Linux.md"};function m(c,e,u,x,f,V){const n=o("Link");return s(),p("div",null,[e[11]||(e[11]=D(`<h1 id="linux有問必答-如何使用linux命令列檢測dvd刻錄機的名字和讀寫速度" tabindex="-1">Linux有問必答：如何使用Linux命令列檢測DVD刻錄機的名字和讀寫速度 <a class="header-anchor" href="#linux有問必答-如何使用linux命令列檢測dvd刻錄機的名字和讀寫速度" aria-label="Permalink to “Linux有問必答：如何使用Linux命令列檢測DVD刻錄機的名字和讀寫速度”">​</a></h1><blockquote><p><strong>提問</strong>：我想要知道我的DVD刻錄機的名字和在燒錄時的速度。該使用什麼Linux命令列工具來連測DVD刻錄機的設備名和速度？</p></blockquote><p>如今大多數消費PC和筆記本電腦都配備了DVD刻錄機。在Linux中，光盤驅動器，如CD/DVD驅動器的名字是在引導時內核基於udev規則來命名的。有幾種方法來檢測刻錄機的設備名稱和它的寫入速度。</p><h3 id="方法一" tabindex="-1">方法一 <a class="header-anchor" href="#方法一" aria-label="Permalink to “方法一”">​</a></h3><p>找出與DVD刻錄機相關的設備名稱最簡單的方法是使用dmesg命令列工具，它打印出內核的消息緩衝區。在dmesg的輸出中，尋找一個安裝好的DVD刻錄機：</p><pre><code>$ dmesg | egrep -i --color &#39;dvd|cd/rw|writer&#39; 
</code></pre><p><img src="https://farm6.staticflickr.com/5603/15505432622_0bfec51a8f_z.jpg" alt=""></p><p>上述命令的輸出會告訴你你的Linux系統上是否檢測到了DVD刻錄機以及它被分配的名字。本例中，DVD刻錄機的設備名稱為“/dev/sr0”。雖然此方法不會告訴你的寫入速度</p><h3 id="方法二" tabindex="-1">方法二 <a class="header-anchor" href="#方法二" aria-label="Permalink to “方法二”">​</a></h3><p>第二個獲得你DVD刻錄機的信息是使用lsscsi命令，它只是列出了所有可用的SCSI設備。</p><p>在基於Debian Linux上安裝 <strong>lsscsi</strong>:</p><pre><code>$ sudo apt-get install lsscsi
</code></pre><p>在基於Red Hat Linux上安裝:</p><pre><code>$ sudo yum install lsscsi
</code></pre><p>如果成功檢測到，lsscsi命令的輸出會告訴你DVD刻錄機的名稱：</p><pre><code>$ lsscsi 
</code></pre><p><img src="https://farm4.staticflickr.com/3937/15319078780_e650d751d6.jpg" alt=""></p><p>這也不會告訴你刻錄機更多的細節，比如寫入速度。</p><h3 id="方法三" tabindex="-1">方法三 <a class="header-anchor" href="#方法三" aria-label="Permalink to “方法三”">​</a></h3><p>第三種獲取有關你DVD刻錄機的信息是參考/proc/sys/dev/cdrom/info。</p><pre><code>$ cat /proc/sys/dev/cdrom/info 
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
</code></pre><p>本例中，輸出會告訴你DVD刻錄機（/dev/sr0）與x24的CD刻錄速度（即24x153.6 Kbps）兼容，且相當於x3的DVD寫入速度（即3x1385 KBps的）兼容。這裏的寫入速度是最大可能的速度，而實際的寫入速度當然取決於使用的介質（例如：DVD-RW、DVD + RW、DVD-RAM等）。</p><h3 id="方法四" tabindex="-1">方法四 <a class="header-anchor" href="#方法四" aria-label="Permalink to “方法四”">​</a></h3><p>另一種方法是使用一種稱為wodim命令列程序。在大多數的Linux發行版，這個工具以及它的軟鏈接cdrecord都是默認安裝的。</p><pre><code># wodim -prcap
(or cdrecord -prcap) 
</code></pre><p><img src="https://farm6.staticflickr.com/5614/15505433532_4d7e47fc51_o.png" alt=""></p><p>如果不帶任何參數調用時，wodim命令會自動檢測到DVD刻錄機，並顯示出詳細的功能以及它的最大讀取/寫入速度。例如，你可以找出刻錄機支持哪些媒體（如CD-R、CD-RW、DVD-RW、DVD-ROM、DVD-R、DVD-RAM、音頻CD），以及有哪些如何讀/寫速度。上面的例子中輸出顯示，DVD刻錄機對於CD擁有X24最大寫入速度，對於DVD有X3的最大寫入速度。</p><p>需要注意的是wodim命令報告的寫入速度會隨您插入到DVD刻錄機的CD/DVD介質的改變而改變，這反映了媒體規範。</p><h3 id="方法五" tabindex="-1">方法五 <a class="header-anchor" href="#方法五" aria-label="Permalink to “方法五”">​</a></h3><p>還有一個方法來檢查DVD刻錄機的寫入速度的是一個名為dvd+rw-mediainfo的工具，這是dvd+rw工具包（DVD+-RW/R媒體工具鏈）的一部分。</p><p>在基於Debian 發行版上安裝 <strong>dvd+rw-tools</strong></p><pre><code>$ sudo apt-get install dvd+rw-tools
</code></pre><p>在基於Red Hat 發行版上安裝 dvd+rw-tools:</p><pre><code>$ sudo yum install dvd+rw-tools 
</code></pre><p>不像其他工具， dvd+rw-mediainfo命令不會產生任何輸出，除非你插入DVD光盤到刻錄機中。所以，當你插入DVD光盤後，運行以下的命令。用你自己的設備名稱替換“/dev/sr0”。</p><pre><code>$ sudo dvd+rw-mediainfo /dev/sr0 
</code></pre><p><img src="https://farm6.staticflickr.com/5597/15324137650_91dbf458ef_z.jpg" alt=""></p><p><strong>dvd+rw-mediainfo</strong>工具會探測插入的媒體（本例中是“DVD-R”），以找出對媒體的實際寫入速度。</p><hr>`,41)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),i(n,{href:"http://ask.xmodulo.com/detect-dvd-writer-device-name-writing-speed-command-line-linux.html"},{default:r(()=>[...e[0]||(e[0]=[t("http://ask.xmodulo.com/detect-dvd-writer-device-name-writing-speed-command-line-linux.html",-1)])]),_:1})]),a("p",null,[e[4]||(e[4]=t("譯者：",-1)),i(n,{href:"https://github.com/geekpi"},{default:r(()=>[...e[2]||(e[2]=[t("geekpi",-1)])]),_:1}),e[5]||(e[5]=t(" 校對：",-1)),i(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[8]||(e[8]=t("本文由 ",-1)),i(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原創翻譯，",-1)),i(n,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[t("Linux中國",-1)])]),_:1}),e[10]||(e[10]=t(" 榮譽推出",-1))])])}const g=d(l,[["render",m]]);export{h as __pageData,g as default};
