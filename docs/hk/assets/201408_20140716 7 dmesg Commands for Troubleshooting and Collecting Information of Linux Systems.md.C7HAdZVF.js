import{_ as a,a0 as m,w as i,s as l,ao as d,I as t,x as n,a1 as s,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"Linux系統中‘dmesg’命令處理故障和收集系統信息的7種用法 | LCTT x X-CMD","titleTemplate":false,"description":"Linux系統中‘dmesg’命令處理故障和收集系統信息的7種用法 | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux系統中‘dmesg’命令處理故障和收集系統信息的7種用法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux系統中‘dmesg’命令處理故障和收集系統信息的7種用法 | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140716 7 dmesg Commands for Troubleshooting and Collecting Information of Linux Systems","title":"Linux系統中‘dmesg’命令處理故障和收集系統信息的7種用法","tag":"201408","desc":""},"relativePath":"201408/20140716 7 dmesg Commands for Troubleshooting and Collecting Information of Linux Systems.md","filePath":"[post].md"}'),f={name:"201408/20140716 7 dmesg Commands for Troubleshooting and Collecting Information of Linux Systems.md"};function p(g,e,u,x,c,b){const r=m("Link");return i(),l("div",null,[e[27]||(e[27]=d(`<h1 id="linux系統中-dmesg-命令處理故障和收集系統信息的7種用法" tabindex="-1">Linux系統中‘dmesg’命令處理故障和收集系統信息的7種用法 <a class="header-anchor" href="#linux系統中-dmesg-命令處理故障和收集系統信息的7種用法" aria-label="Permalink to “Linux系統中‘dmesg’命令處理故障和收集系統信息的7種用法”">​</a></h1><p>‘dmesg’命令顯示linux內核的環形緩衝區信息，我們可以從中獲得諸如系統架構、cpu、掛載的硬件，RAM等多個運行級別的大量的系統信息。當計算機啓動時，系統內核（操作系統的核心部分）將會被加載到內存中。在加載的過程中會顯示很多的信息，在這些信息中我們可以看到內核檢測硬件設備。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/dmesg-Command-Examples.png" alt="dmesg Command Examples"></p><p>dmesg 命令的使用範例</p><p>‘dmesg’命令設備故障的診斷是非常重要的。在‘dmesg’命令的幫助下進行硬件的連接或斷開連接操作時，我們可以看到硬件的檢測或者斷開連接的信息。‘dmesg’命令在多數基於<strong>Linux</strong>和<strong>Unix</strong>的操作系統中都可以使用。</p><p>下面我們展示一些最負盛名的‘dmesg’命令工具以及其實際使用舉例。‘dmesg’命令的使用語法如下。</p><pre><code># dmesg [options...]
</code></pre><h3 id="_1-列出加載到內核中的所有驅動" tabindex="-1">1. 列出加載到內核中的所有驅動 <a class="header-anchor" href="#_1-列出加載到內核中的所有驅動" aria-label="Permalink to “1. 列出加載到內核中的所有驅動”">​</a></h3><p>我們可以使用如‘<strong>more</strong>’。 ‘<strong>tail</strong>’, ‘<strong>less</strong> ’或者‘<strong>grep</strong>’文字處理工具來處理‘dmesg’命令的輸出。由於dmesg日誌的輸出不適合在一頁中完全顯示，因此我們使用管道（pipe）將其輸出送到more或者less命令單頁顯示。</p><pre><code>[root@tecmint.com ~]# dmesg | more
[root@tecmint.com ~]# dmesg | less
</code></pre><h3 id="輸出" tabindex="-1">輸出 <a class="header-anchor" href="#輸出" aria-label="Permalink to “輸出”">​</a></h3><pre><code>[    0.000000] Initializing cgroup subsys cpuset
[    0.000000] Initializing cgroup subsys cpu
[    0.000000] Initializing cgroup subsys cpuacct
[    0.000000] Linux version 3.11.0-13-generic (buildd@aatxe) (gcc version 4.8.1 (Ubuntu/Linaro 4.8.1-10ubuntu8) ) #20-Ubuntu SMP Wed Oct 23 17:26:33 UTC 2013 
(Ubuntu 3.11.0-13.20-generic 3.11.6)
[    0.000000] KERNEL supported cpus:
[    0.000000]   Intel GenuineIntel
[    0.000000]   AMD AuthenticAMD
[    0.000000]   NSC Geode by NSC
[    0.000000]   Cyrix CyrixInstead
[    0.000000]   Centaur CentaurHauls
[    0.000000]   Transmeta GenuineTMx86
[    0.000000]   Transmeta TransmetaCPU
[    0.000000]   UMC UMC UMC UMC
[    0.000000] e820: BIOS-provided physical RAM map:
[    0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable
[    0.000000] BIOS-e820: [mem 0x00000000000f0000-0x00000000000fffff] reserved
[    0.000000] BIOS-e820: [mem 0x0000000000100000-0x000000007dc08bff] usable
[    0.000000] BIOS-e820: [mem 0x000000007dc08c00-0x000000007dc5cbff] ACPI NVS
[    0.000000] BIOS-e820: [mem 0x000000007dc5cc00-0x000000007dc5ebff] ACPI data
[    0.000000] BIOS-e820: [mem 0x000000007dc5ec00-0x000000007fffffff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000e0000000-0x00000000efffffff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000fec00000-0x00000000fed003ff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000fed20000-0x00000000fed9ffff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000fee00000-0x00000000feefffff] reserved
[    0.000000] BIOS-e820: [mem 0x00000000ffb00000-0x00000000ffffffff] reserved
[    0.000000] NX (Execute Disable) protection: active
.....
</code></pre><p>###2. 列出所有被檢測到的硬件 ###</p><p>要顯示所有被內核檢測到的硬盤設備，你可以使用‘<strong>grep</strong>’命令搜索‘<strong>sda</strong>’關鍵詞，如下：</p><pre><code>[root@tecmint.com ~]# dmesg | grep sda

[    1.280971] sd 2:0:0:0: [sda] 488281250 512-byte logical blocks: (250 GB/232 GiB)
[    1.281014] sd 2:0:0:0: [sda] Write Protect is off
[    1.281016] sd 2:0:0:0: [sda] Mode Sense: 00 3a 00 00
[    1.281039] sd 2:0:0:0: [sda] Write cache: enabled, read cache: enabled, doesn&#39;t support DPO or FUA
[    1.359585]  sda: sda1 sda2 &lt; sda5 sda6 sda7 sda8 &gt;
[    1.360052] sd 2:0:0:0: [sda] Attached SCSI disk
[    2.347887] EXT4-fs (sda1): mounted filesystem with ordered data mode. Opts: (null)
[   22.928440] Adding 3905532k swap on /dev/sda6.  Priority:-1 extents:1 across:3905532k FS
[   23.950543] EXT4-fs (sda1): re-mounted. Opts: errors=remount-ro
[   24.134016] EXT4-fs (sda5): mounted filesystem with ordered data mode. Opts: (null)
[   24.330762] EXT4-fs (sda7): mounted filesystem with ordered data mode. Opts: (null)
[   24.561015] EXT4-fs (sda8): mounted filesystem with ordered data mode. Opts: (null)
</code></pre><p><strong>註解</strong> ‘sda’表示第一塊 SATA硬盤，‘sdb’表示第二塊SATA硬盤。若想查看IDE硬盤搜索‘hda’或‘hdb’關鍵詞。</p><h3 id="_3-只輸出dmesg命令的前20行日誌" tabindex="-1">3. 只輸出dmesg命令的前20行日誌 <a class="header-anchor" href="#_3-只輸出dmesg命令的前20行日誌" aria-label="Permalink to “3. 只輸出dmesg命令的前20行日誌”">​</a></h3><p>在‘dmesg’命令後跟隨‘head’命令來顯示開始幾行，‘dmesg | head -20′命令將顯示開始的前20行。</p><pre><code>[root@tecmint.com ~]# dmesg | head  -20

[    0.000000] Initializing cgroup subsys cpuset
[    0.000000] Initializing cgroup subsys cpu
[    0.000000] Initializing cgroup subsys cpuacct
[    0.000000] Linux version 3.11.0-13-generic (buildd@aatxe) (gcc version 4.8.1 (Ubuntu/Linaro 4.8.1-10ubuntu8) ) #20-Ubuntu SMP Wed Oct 23 17:26:33 UTC 2013 (Ubuntu 3.11.0-13.20-generic 3.11.6)
[    0.000000] KERNEL supported cpus:
[    0.000000]   Intel GenuineIntel
[    0.000000]   AMD AuthenticAMD
[    0.000000]   NSC Geode by NSC
[    0.000000]   Cyrix CyrixInstead
[    0.000000]   Centaur CentaurHauls
[    0.000000]   Transmeta GenuineTMx86
[    0.000000]   Transmeta TransmetaCPU
[    0.000000]   UMC UMC UMC UMC
[    0.000000] e820: BIOS-provided physical RAM map:
[    0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable
[    0.000000] BIOS-e820: [mem 0x00000000000f0000-0x00000000000fffff] reserved
[    0.000000] BIOS-e820: [mem 0x0000000000100000-0x000000007dc08bff] usable
[    0.000000] BIOS-e820: [mem 0x000000007dc08c00-0x000000007dc5cbff] ACPI NVS
[    0.000000] BIOS-e820: [mem 0x000000007dc5cc00-0x000000007dc5ebff] ACPI data
[    0.000000] BIOS-e820: [mem 0x000000007dc5ec00-0x000000007fffffff] reserved
</code></pre><p>###4. 只輸出dmesg命令最後20行日誌 ###</p><p>在‘dmesg’命令後跟隨‘tail’命令（‘ dmesg | tail -20’）來輸出‘dmesg’命令的最後20行日誌，當你插入可移動設備時它是非常有用的。</p><pre><code>[root@tecmint.com ~]# dmesg | tail -20

parport0: PC-style at 0x378, irq 7 [PCSPP,TRISTATE]
ppdev: user-space parallel port driver
EXT4-fs (sda1): mounted filesystem with ordered data mode
Adding 2097144k swap on /dev/sda2.  Priority:-1 extents:1 across:2097144k
readahead-disable-service: delaying service auditd
ip_tables: (C) 2000-2006 Netfilter Core Team
nf_conntrack version 0.5.0 (16384 buckets, 65536 max)
NET: Registered protocol family 10
lo: Disabled Privacy Extensions
e1000: eth0 NIC Link is Up 1000 Mbps Full Duplex, Flow Control: None
Slow work thread pool: Starting up
Slow work thread pool: Ready
FS-Cache: Loaded
CacheFiles: Loaded
CacheFiles: Security denies permission to nominate security context: error -95
eth0: no IPv6 routers present
type=1305 audit(1398268784.593:18630): audit_enabled=0 old=1 auid=4294967295 ses=4294967295 res=1
readahead-collector: starting delayed service auditd
readahead-collector: sorting
readahead-collector: finished
</code></pre><h3 id="_5-搜索包含特定字符串的被檢測到的硬件" tabindex="-1">5. 搜索包含特定字符串的被檢測到的硬件 <a class="header-anchor" href="#_5-搜索包含特定字符串的被檢測到的硬件" aria-label="Permalink to “5. 搜索包含特定字符串的被檢測到的硬件”">​</a></h3>`,23)),t("p",null,[e[1]||(e[1]=n("由於‘dmesg’命令的輸出實在太長了，在其中搜索某個特定的字符串是非常困難的。因此，有必要過濾出一些包含‘",-1)),e[2]||(e[2]=t("strong",null,"usb",-1)),e[3]||(e[3]=n("’ ‘",-1)),e[4]||(e[4]=t("strong",null,"dma",-1)),e[5]||(e[5]=n("’ ‘",-1)),e[6]||(e[6]=t("strong",null,"tty",-1)),e[7]||(e[7]=n("’ ‘",-1)),e[8]||(e[8]=t("strong",null,"memory",-1)),e[9]||(e[9]=n("’等字符串的日誌行。",-1)),s(r,{href:"http://www.tecmint.com/12-practical-examples-of-linux-grep-command/"},{default:o(()=>[...e[0]||(e[0]=[n("grep 命令",-1)])]),_:1}),e[10]||(e[10]=n(" 的‘",-1)),e[11]||(e[11]=t("strong",null,"-i",-1)),e[12]||(e[12]=n("’選項表示忽略大小寫。",-1))]),e[28]||(e[28]=d(`<pre><code>[root@tecmint.com log]# dmesg | grep -i usb
[root@tecmint.com log]# dmesg | grep -i dma
[root@tecmint.com log]# dmesg | grep -i tty
[root@tecmint.com log]# dmesg | grep -i memory
</code></pre><p>###輸出###</p><pre><code>[    0.000000] Scanning 1 areas for low memory corruption
[    0.000000] initial memory mapped: [mem 0x00000000-0x01ffffff]
[    0.000000] Base memory trampoline at [c009b000] 9b000 size 16384
[    0.000000] init_memory_mapping: [mem 0x00000000-0x000fffff]
[    0.000000] init_memory_mapping: [mem 0x37800000-0x379fffff]
[    0.000000] init_memory_mapping: [mem 0x34000000-0x377fffff]
[    0.000000] init_memory_mapping: [mem 0x00100000-0x33ffffff]
[    0.000000] init_memory_mapping: [mem 0x37a00000-0x37bfdfff]
[    0.000000] Early memory node ranges
[    0.000000] PM: Registered nosave memory: [mem 0x0009f000-0x000effff]
[    0.000000] PM: Registered nosave memory: [mem 0x000f0000-0x000fffff]
[    0.000000] please try &#39;cgroup_disable=memory&#39; option if you don&#39;t want memory cgroups
[    0.000000] Memory: 2003288K/2059928K available (6352K kernel code, 607K rwdata, 2640K rodata, 880K init, 908K bss, 56640K reserved, 1146920K highmem)
[    0.000000] virtual kernel memory layout:
[    0.004291] Initializing cgroup subsys memory
[    0.004609] Freeing SMP alternatives memory: 28K (c1a3e000 - c1a45000)
[    0.899622] Freeing initrd memory: 23616K (f51d0000 - f68e0000)
[    0.899813] Scanning for low memory corruption every 60 seconds
[    0.946323] agpgart-intel 0000:00:00.0: detected 32768K stolen memory
[    1.360318] Freeing unused kernel memory: 880K (c1962000 - c1a3e000)
[    1.429066] [drm] Memory usable by graphics device = 2048M
</code></pre><h3 id="_6-清空dmesg緩衝區日誌" tabindex="-1">6. 清空dmesg緩衝區日誌 <a class="header-anchor" href="#_6-清空dmesg緩衝區日誌" aria-label="Permalink to “6. 清空dmesg緩衝區日誌”">​</a></h3><p>我們可以使用如下命令來清空dmesg的日誌。該命令會清空dmesg環形緩衝區中的日誌。但是你依然可以查看存儲在‘<strong>/var/log/dmesg</strong>’文件中的日誌。你連接任何的設備都會產生dmesg日誌輸出。</p><pre><code>[root@tecmint.com log]# dmesg -c
</code></pre><h3 id="_7-實時監控dmesg日誌輸出" tabindex="-1">7. 實時監控dmesg日誌輸出 <a class="header-anchor" href="#_7-實時監控dmesg日誌輸出" aria-label="Permalink to “7. 實時監控dmesg日誌輸出”">​</a></h3><p>在某些發行版中可以使用命令‘tail -f /var/log/dmesg’來實時監控dmesg的日誌輸出。</p><pre><code>[root@tecmint.com log]# watch &quot;dmesg | tail -20&quot;
</code></pre><p><strong>結論</strong>：dmesg命令在系統dmesg記錄實時更改或產生的情況下是非常有用的。你可以使用man dmesg來獲取更多關於dmesg的信息。</p><hr><p><img src="http://1.gravatar.com/avatar/36c7c25164c3455f2f711b01e395de0d?s=80&amp;d=blank&amp;r=G" alt=""></p><p>Narad Shrestha</p>`,13)),t("ul",null,[t("li",null,[s(r,{href:"http://twitter.com/@nrdshrestha"},{default:o(()=>[...e[13]||(e[13]=[n("Twitter profile",-1)])]),_:1})]),t("li",null,[s(r,{href:"http://facebook.com/narad.shrestha.9"},{default:o(()=>[...e[14]||(e[14]=[n("Facebook profile",-1)])]),_:1})]),t("li",null,[s(r,{href:"http://plus.google.com/104542109955805873615?rel=author"},{default:o(()=>[...e[15]||(e[15]=[n("Google+ profile",-1)])]),_:1})])]),e[29]||(e[29]=t("p",null,"他在IT領域擁有超過10年的豐富經驗，其中包括各種Linux發行版，開源軟件和網絡工作。 Narad始終堅持與他人分享IT知識和自如地運用新技術。",-1)),e[30]||(e[30]=t("hr",null,null,-1)),t("p",null,[e[17]||(e[17]=n("via: ",-1)),s(r,{href:"http://www.tecmint.com/dmesg-commands/"},{default:o(()=>[...e[16]||(e[16]=[n("http://www.tecmint.com/dmesg-commands/",-1)])]),_:1})]),t("p",null,[e[20]||(e[20]=n("譯者：",-1)),s(r,{href:"https://github.com/cvsher"},{default:o(()=>[...e[18]||(e[18]=[n("cvsher",-1)])]),_:1}),e[21]||(e[21]=n(" 校對：",-1)),s(r,{href:"https://github.com/carolinewuyan"},{default:o(()=>[...e[19]||(e[19]=[n("Caroline",-1)])]),_:1})]),t("p",null,[e[24]||(e[24]=n("本文由 ",-1)),s(r,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[22]||(e[22]=[n("LCTT",-1)])]),_:1}),e[25]||(e[25]=n(" 原創翻譯，",-1)),s(r,{href:"http://linux.cn/"},{default:o(()=>[...e[23]||(e[23]=[n("Linux中國",-1)])]),_:1}),e[26]||(e[26]=n(" 榮譽推出",-1))])])}const S=a(f,[["render",p]]);export{T as __pageData,S as default};
