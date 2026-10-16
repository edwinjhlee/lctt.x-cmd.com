import{_ as o,a0 as t,w as r,s as c,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"xsos：一個在 Linux 上閲讀 SOSReport 的工具 | LCTT x X-CMD","titleTemplate":false,"description":"xsos：一個在 Linux 上閲讀 SOSReport 的工具 | LCTT (201905) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"xsos：一個在 Linux 上閲讀 SOSReport 的工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"xsos：一個在 Linux 上閲讀 SOSReport 的工具 | LCTT (201905) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201905/20190520 xsos - A Tool To Read SOSReport In Linux","title":"xsos：一個在 Linux 上閲讀 SOSReport 的工具","tag":"201905","desc":""},"relativePath":"201905/20190520 xsos - A Tool To Read SOSReport In Linux.md","filePath":"[post].md"}'),d={name:"201905/20190520 xsos - A Tool To Read SOSReport In Linux.md"};function u(h,s,g,k,b,m){const p=t("Link");return r(),c("div",null,[s[24]||(s[24]=a("h1",{id:"xsos-一個在-linux-上閲讀-sosreport-的工具",tabindex:"-1"},[n("xsos：一個在 Linux 上閲讀 SOSReport 的工具 "),a("a",{class:"header-anchor",href:"#xsos-一個在-linux-上閲讀-sosreport-的工具","aria-label":"Permalink to “xsos：一個在 Linux 上閲讀 SOSReport 的工具”"},"​")],-1)),s[25]||(s[25]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201905/23/133305accwpsvhk1epsisc.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("我們都已經知道 ",-1)),e(p,{href:"https://www.2daygeek.com/how-to-create-collect-sosreport-in-linux/"},{default:l(()=>[...s[0]||(s[0]=[n("SOSReport",-1)])]),_:1}),s[2]||(s[2]=n("。它用來收集可用於診斷的系統信息。Redhat 的支持服務建議我們在提交案例時提供 SOSReport 來分析當前的系統狀態。",-1))]),s[26]||(s[26]=i('<p>它會收集全部類型的報告，以幫助用户找出問題的根本原因。我們可以輕鬆地提取和閲讀 SOSReport，但它很難閲讀。因為它的每個部分都是一個單獨的文件。</p><p>那麼，在 Linux 中使用語法高亮顯示閲讀所有這些內容的最佳方法是什麼。是的，這可以通過 <code>xsos</code> 工具做到。</p><h3 id="sosreport" tabindex="-1">sosreport <a class="header-anchor" href="#sosreport" aria-label="Permalink to “sosreport”">​</a></h3><p><code>sosreport</code> 命令是一個從運行中的系統（尤其是 RHEL 和 OEL 系統）收集大量配置細節、系統信息和診斷信息的工具。它可以幫助技術支持工程師在很多方面分析系統。</p><p>此報告包含有關係統的大量信息，例如引導信息、文件系統、內存、主機名、已安裝的 RPM、系統 IP、網絡詳細信息、操作系統版本、已安裝的內核、已加載的內核模組、打開的文件列表、PCI 設備列表、掛載點及其細節、運行中的進程信息、進程樹輸出、系統路由、位於 <code>/etc</code> 文件夾中的所有配置文件，以及位於 <code>/var</code> 文件夾中的所有日誌文件。</p><p>這將需要一段時間來生成報告，這取決於你的系統安裝和配置。</p><p>完成後，<code>sosreport</code> 將在 <code>/tmp</code> 目錄下生成一個壓縮的歸檔文件。</p><h3 id="xsos" tabindex="-1">xsos <a class="header-anchor" href="#xsos" aria-label="Permalink to “xsos”">​</a></h3>',8)),a("p",null,[e(p,{href:"https://github.com/ryran/xsos"},{default:l(()=>[...s[3]||(s[3]=[n("xsos",-1)])]),_:1}),s[4]||(s[4]=n(" 是一個幫助用户輕鬆讀取 Linux 系統上的 ",-1)),s[5]||(s[5]=a("code",null,"sosreport",-1)),s[6]||(s[6]=n(" 的工具。另一方面，我們可以説它是 ",-1)),s[7]||(s[7]=a("code",null,"sosreport",-1)),s[8]||(s[8]=n(" 考官。",-1))]),s[27]||(s[27]=i(`<p>它可以立即從 <code>sosreport</code> 或正在運行的系統中彙總系統信息。</p><p><code>xsos</code> 將嘗試簡化、解析、計算並格式化來自數十個文件（和命令）的數據，以便為你提供有關係統的詳細概述。</p><p>你可以通過運行以下命令立即彙總系統信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># curl -Lo ./xsos bit.ly/xsos-direct; chmod +x ./xsos; ./xsos -ya</span></span></code></pre></div><p><img src="https://www.2daygeek.com/wp-content/uploads/2019/05/xsos-a-tool-to-read-sosreport-in-linux-1.jpg" alt=""></p><h3 id="如何在-linux-上安裝-xsos" tabindex="-1">如何在 Linux 上安裝 xsos <a class="header-anchor" href="#如何在-linux-上安裝-xsos" aria-label="Permalink to “如何在 Linux 上安裝 xsos”">​</a></h3><p>我們可以使用以下兩種方法輕鬆安裝 <code>xsos</code>。</p><p>如果你正在尋找最新的前沿版本。使用以下步驟：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># curl -Lo /usr/local/bin/xsos bit.ly/xsos-direct</span></span>
<span class="line"><span># chmod +x /usr/local/bin/xsos</span></span></code></pre></div><p>下面是安裝 <code>xsos</code> 的推薦方法。它將從 rpm 文件安裝 <code>xsos</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum install http://people.redhat.com/rsawhill/rpms/latest-rsawaroha-release.rpm</span></span>
<span class="line"><span># yum install xsos</span></span></code></pre></div><h3 id="如何在-linux-上使用-xsos" tabindex="-1">如何在 Linux 上使用 xsos <a class="header-anchor" href="#如何在-linux-上使用-xsos" aria-label="Permalink to “如何在 Linux 上使用 xsos”">​</a></h3><p>一旦通過上述方法之一安裝了 xsos。只需運行 <code>xsos</code> 命令，不帶任何選項，它們會顯示有關係統的基本信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># xsos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OS</span></span>
<span class="line"><span>  Hostname: CentOS7.2daygeek.com</span></span>
<span class="line"><span>  Distro:   [redhat-release] CentOS Linux release 7.6.1810 (Core)</span></span>
<span class="line"><span>            [centos-release] CentOS Linux release 7.6.1810 (Core)</span></span>
<span class="line"><span>            [os-release] CentOS Linux 7 (Core) 7 (Core)</span></span>
<span class="line"><span>  RHN:      (missing)</span></span>
<span class="line"><span>  RHSM:     (missing)</span></span>
<span class="line"><span>  YUM:      2 enabled plugins: fastestmirror, langpacks</span></span>
<span class="line"><span>  Runlevel: N 5  (default graphical)</span></span>
<span class="line"><span>  SELinux:  enforcing  (default enforcing)</span></span>
<span class="line"><span>  Arch:     mach=x86_64  cpu=x86_64  platform=x86_64</span></span>
<span class="line"><span>  Kernel:</span></span>
<span class="line"><span>    Booted kernel:  3.10.0-957.el7.x86_64</span></span>
<span class="line"><span>    GRUB default:   3.10.0-957.el7.x86_64</span></span>
<span class="line"><span>    Build version:</span></span>
<span class="line"><span>      Linux version 3.10.0-957.el7.x86_64 ([email protected]) (gcc version 4.8.5 20150623 (Red</span></span>
<span class="line"><span>      Hat 4.8.5-36) (GCC) ) #1 SMP Thu Nov 8 23:39:32 UTC 2018</span></span>
<span class="line"><span>    Booted kernel cmdline:</span></span>
<span class="line"><span>      root=/dev/mapper/centos-root ro crashkernel=auto rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet</span></span>
<span class="line"><span>      LANG=en_US.UTF-8</span></span>
<span class="line"><span>    GRUB default kernel cmdline:</span></span>
<span class="line"><span>      root=/dev/mapper/centos-root ro crashkernel=auto rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet</span></span>
<span class="line"><span>      LANG=en_US.UTF-8</span></span>
<span class="line"><span>    Taint-check: 0  (kernel untainted)</span></span>
<span class="line"><span>    - - - - - - - - - - - - - - - - - - -</span></span>
<span class="line"><span>  Sys time:  Sun May 12 10:05:21 CDT 2019</span></span>
<span class="line"><span>  Boot time: Sun May 12 09:50:20 CDT 2019  (epoch: 1557672620)</span></span>
<span class="line"><span>  Time Zone: America/Chicago</span></span>
<span class="line"><span>  Uptime:    15 min,  1 user</span></span>
<span class="line"><span>  LoadAvg:   [1 CPU] 0.00 (0%), 0.04 (4%), 0.09 (9%)</span></span>
<span class="line"><span>  /proc/stat:</span></span>
<span class="line"><span>    procs_running: 2   procs_blocked: 0    processes [Since boot]: 6423</span></span>
<span class="line"><span>    cpu [Utilization since boot]:</span></span>
<span class="line"><span>      us 1%, ni 0%, sys 1%, idle 99%, iowait 0%, irq 0%, sftirq 0%, steal 0%</span></span></code></pre></div><h3 id="如何使用-xsos-命令在-linux-中查看生成的-sosreport-輸出" tabindex="-1">如何使用 xsos 命令在 Linux 中查看生成的 SOSReport 輸出？ <a class="header-anchor" href="#如何使用-xsos-命令在-linux-中查看生成的-sosreport-輸出" aria-label="Permalink to “如何使用 xsos 命令在 Linux 中查看生成的 SOSReport 輸出？”">​</a></h3><p>我們需要份 SOSReport 以使用 <code>xsos</code> 命令進一步閲讀。</p><p>是的，我已經生成了一個 SOSReport，文件如下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ls -lls -lh /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa.tar.xz</span></span>
<span class="line"><span>9.8M -rw-------. 1 root root 9.8M May 12 10:13 /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa.tar.xz</span></span></code></pre></div><p>運行如下命令解開它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># tar xf sosreport-CentOS7-01-1005-2019-05-12-pomeqsa.tar.xz</span></span></code></pre></div><p>要查看全部信息，帶上 <code>-a</code> 或 <code>--all</code> 開關運行 <code>xsos</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># xsos --all /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa</span></span></code></pre></div><p>要查看 BIOS 信息，帶上 <code>-b</code> 或 <code>--bios</code> 開關運行 <code>xsos</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># xsos --bios /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa</span></span>
<span class="line"><span>DMIDECODE</span></span>
<span class="line"><span>  BIOS:</span></span>
<span class="line"><span>    Vend: innotek GmbH</span></span>
<span class="line"><span>    Vers: VirtualBox</span></span>
<span class="line"><span>    Date: 12/01/2006</span></span>
<span class="line"><span>    BIOS Rev:</span></span>
<span class="line"><span>    FW Rev:</span></span>
<span class="line"><span>  System:</span></span>
<span class="line"><span>    Mfr:  innotek GmbH</span></span>
<span class="line"><span>    Prod: VirtualBox</span></span>
<span class="line"><span>    Vers: 1.2</span></span>
<span class="line"><span>    Ser:  0</span></span>
<span class="line"><span>    UUID: 002f47b8-2af2-48f5-be1d-67b67e03514c</span></span>
<span class="line"><span>  CPU:</span></span>
<span class="line"><span>    0 of 0 CPU sockets populated, 0 cores/0 threads per CPU</span></span>
<span class="line"><span>    0 total cores, 0 total threads</span></span>
<span class="line"><span>    Mfr:</span></span>
<span class="line"><span>    Fam:</span></span>
<span class="line"><span>    Freq:</span></span>
<span class="line"><span>    Vers:</span></span>
<span class="line"><span>  Memory:</span></span>
<span class="line"><span>    Total: 0 MiB (0 GiB)</span></span>
<span class="line"><span>    DIMMs: 0 of 0 populated</span></span>
<span class="line"><span>    MaxCapacity: 0 MiB (0 GiB / 0.00 TiB)</span></span></code></pre></div><p>要查看系統基本信息，如主機名、發行版、SELinux、內核信息、正常運行時間等，請使用 <code>-o</code> 或 <code>--os</code> 開關運行 <code>xsos</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># xsos --os /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa</span></span>
<span class="line"><span>OS</span></span>
<span class="line"><span>  Hostname: CentOS7.2daygeek.com</span></span>
<span class="line"><span>  Distro:   [redhat-release] CentOS Linux release 7.6.1810 (Core)</span></span>
<span class="line"><span>            [centos-release] CentOS Linux release 7.6.1810 (Core)</span></span>
<span class="line"><span>            [os-release] CentOS Linux 7 (Core) 7 (Core)</span></span>
<span class="line"><span>  RHN:      (missing)</span></span>
<span class="line"><span>  RHSM:     (missing)</span></span>
<span class="line"><span>  YUM:      2 enabled plugins: fastestmirror, langpacks</span></span>
<span class="line"><span>  SELinux:  enforcing  (default enforcing)</span></span>
<span class="line"><span>  Arch:     mach=x86_64  cpu=x86_64  platform=x86_64</span></span>
<span class="line"><span>  Kernel:</span></span>
<span class="line"><span>    Booted kernel:  3.10.0-957.el7.x86_64</span></span>
<span class="line"><span>    GRUB default:   3.10.0-957.el7.x86_64</span></span>
<span class="line"><span>    Build version:</span></span>
<span class="line"><span>      Linux version 3.10.0-957.el7.x86_64 ([email protected]) (gcc version 4.8.5 20150623 (Red</span></span>
<span class="line"><span>      Hat 4.8.5-36) (GCC) ) #1 SMP Thu Nov 8 23:39:32 UTC 2018</span></span>
<span class="line"><span>    Booted kernel cmdline:</span></span>
<span class="line"><span>      root=/dev/mapper/centos-root ro crashkernel=auto rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet</span></span>
<span class="line"><span>      LANG=en_US.UTF-8</span></span>
<span class="line"><span>    GRUB default kernel cmdline:</span></span>
<span class="line"><span>      root=/dev/mapper/centos-root ro crashkernel=auto rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet</span></span>
<span class="line"><span>      LANG=en_US.UTF-8</span></span>
<span class="line"><span>    Taint-check: 536870912  (see https://access.redhat.com/solutions/40594)</span></span>
<span class="line"><span>      29  TECH_PREVIEW: Technology Preview code is loaded</span></span>
<span class="line"><span>    - - - - - - - - - - - - - - - - - - -</span></span>
<span class="line"><span>  Sys time:  Sun May 12 10:12:22 CDT 2019</span></span>
<span class="line"><span>  Boot time: Sun May 12 09:50:20 CDT 2019  (epoch: 1557672620)</span></span>
<span class="line"><span>  Time Zone: America/Chicago</span></span>
<span class="line"><span>  Uptime:    22 min,  1 user</span></span>
<span class="line"><span>  LoadAvg:   [1 CPU] 1.19 (119%), 0.27 (27%), 0.14 (14%)</span></span>
<span class="line"><span>  /proc/stat:</span></span>
<span class="line"><span>    procs_running: 8   procs_blocked: 2    processes [Since boot]: 9005</span></span>
<span class="line"><span>    cpu [Utilization since boot]:</span></span>
<span class="line"><span>      us 1%, ni 0%, sys 1%, idle 99%, iowait 0%, irq 0%, sftirq 0%, steal 0%</span></span></code></pre></div><p>要查看 kdump 配置，請使用 <code>-k</code> 或 <code>--kdump</code> 開關運行 <code>xsos</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># xsos --kdump /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa</span></span>
<span class="line"><span>KDUMP CONFIG</span></span>
<span class="line"><span>  kexec-tools rpm version:</span></span>
<span class="line"><span>    kexec-tools-2.0.15-21.el7.x86_64</span></span>
<span class="line"><span>  Service enablement:</span></span>
<span class="line"><span>    UNIT           STATE</span></span>
<span class="line"><span>    kdump.service  enabled</span></span>
<span class="line"><span>  kdump initrd/initramfs:</span></span>
<span class="line"><span>    13585734 Feb 19 05:51 initramfs-3.10.0-957.el7.x86_64kdump.img</span></span>
<span class="line"><span>  Memory reservation config:</span></span>
<span class="line"><span>    /proc/cmdline { crashkernel=auto }</span></span>
<span class="line"><span>    GRUB default  { crashkernel=auto }</span></span>
<span class="line"><span>  Actual memory reservation per /proc/iomem:</span></span>
<span class="line"><span>      2a000000-340fffff : Crash kernel</span></span>
<span class="line"><span>  kdump.conf:</span></span>
<span class="line"><span>    path /var/crash</span></span>
<span class="line"><span>    core_collector makedumpfile -l --message-level 1 -d 31</span></span>
<span class="line"><span>  kdump.conf &quot;path&quot; available space:</span></span>
<span class="line"><span>    System MemTotal (uncompressed core size) { 1.80 GiB }</span></span>
<span class="line"><span>    Available free space on target path&#39;s fs { 22.68 GiB }  (fs=/)</span></span>
<span class="line"><span>  Panic sysctls:</span></span>
<span class="line"><span>    kernel.sysrq [bitmask] =  &quot;16&quot;  (see proc man page)</span></span>
<span class="line"><span>    kernel.panic [secs] =  0  (no autoreboot on panic)</span></span>
<span class="line"><span>    kernel.hung_task_panic =  0</span></span>
<span class="line"><span>    kernel.panic_on_oops =  1</span></span>
<span class="line"><span>    kernel.panic_on_io_nmi =  0</span></span>
<span class="line"><span>    kernel.panic_on_unrecovered_nmi =  0</span></span>
<span class="line"><span>    kernel.panic_on_stackoverflow =  0</span></span>
<span class="line"><span>    kernel.softlockup_panic =  0</span></span>
<span class="line"><span>    kernel.unknown_nmi_panic =  0</span></span>
<span class="line"><span>    kernel.nmi_watchdog =  1</span></span>
<span class="line"><span>    vm.panic_on_oom [0-2] =  0  (no panic)</span></span></code></pre></div><p>要查看有關 CPU 的信息，請使用 <code>-c</code> 或 <code>--cpu</code> 開關運行 <code>xsos</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># xsos --cpu /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa</span></span>
<span class="line"><span>CPU</span></span>
<span class="line"><span>  1 logical processors</span></span>
<span class="line"><span>  1 Intel Core i7-6700HQ CPU @ 2.60GHz (flags: aes,constant_tsc,ht,lm,nx,pae,rdrand)</span></span></code></pre></div><p>要查看內存利用情況，請使用 <code>-m</code> 或 <code>--mem</code> 開關運行 <code>xsos</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># xsos --mem /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa</span></span>
<span class="line"><span>MEMORY</span></span>
<span class="line"><span>  Stats graphed as percent of MemTotal:</span></span>
<span class="line"><span>    MemUsed    ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊.....................  58.8%</span></span>
<span class="line"><span>    Buffers    ..................................................   0.6%</span></span>
<span class="line"><span>    Cached     ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊...................................  29.9%</span></span>
<span class="line"><span>    HugePages  ..................................................   0.0%</span></span>
<span class="line"><span>    Dirty      ..................................................   0.7%</span></span>
<span class="line"><span>  RAM:</span></span>
<span class="line"><span>    1.8 GiB total ram</span></span>
<span class="line"><span>    1.1 GiB (59%) used</span></span>
<span class="line"><span>    0.5 GiB (28%) used excluding Buffers/Cached</span></span>
<span class="line"><span>    0.01 GiB (1%) dirty</span></span>
<span class="line"><span>  HugePages:</span></span>
<span class="line"><span>    No ram pre-allocated to HugePages</span></span>
<span class="line"><span>  LowMem/Slab/PageTables/Shmem:</span></span>
<span class="line"><span>    0.09 GiB (5%) of total ram used for Slab</span></span>
<span class="line"><span>    0.02 GiB (1%) of total ram used for PageTables</span></span>
<span class="line"><span>    0.01 GiB (1%) of total ram used for Shmem</span></span>
<span class="line"><span>  Swap:</span></span>
<span class="line"><span>    0 GiB (0%) used of 2 GiB total</span></span></code></pre></div><p>要查看添加的磁盤信息，請使用 <code>-d</code> 和 <code>-disks</code> 開關運行 <code>xsos</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># xsos --disks /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa</span></span>
<span class="line"><span>STORAGE</span></span>
<span class="line"><span>  Whole Disks from /proc/partitions:</span></span>
<span class="line"><span>    2 disks, totaling 40 GiB (0.04 TiB)</span></span>
<span class="line"><span>    - - - - - - - - - - - - - - - - - - - - -</span></span>
<span class="line"><span>    Disk    Size in GiB</span></span>
<span class="line"><span>    ----    -----------</span></span>
<span class="line"><span>    sda     30</span></span>
<span class="line"><span>    sdb     10</span></span></code></pre></div><p>要查看網絡接口配置，請使用 <code>-e</code> 或 <code>--ethtool</code> 開關運行 <code>xsos</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># xsos --ethtool /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa</span></span>
<span class="line"><span>ETHTOOL</span></span>
<span class="line"><span>  Interface Status:</span></span>
<span class="line"><span>    enp0s10     0000:00:0a.0  link=up 1000Mb/s full (autoneg=Y)  rx ring 256/4096  drv e1000 v7.3.21-k8-NAPI / fw UNKNOWN</span></span>
<span class="line"><span>    enp0s9      0000:00:09.0  link=up 1000Mb/s full (autoneg=Y)  rx ring 256/4096  drv e1000 v7.3.21-k8-NAPI / fw UNKNOWN</span></span>
<span class="line"><span>    virbr0      N/A           link=DOWN                          rx ring UNKNOWN   drv bridge v2.3 / fw N/A</span></span>
<span class="line"><span>    virbr0-nic  tap           link=DOWN                          rx ring UNKNOWN   drv tun v1.6 / fw UNKNOWN</span></span></code></pre></div><p>要查看有關 IP 地址的信息，請使用 <code>-i</code> 或 <code>--ip</code> 開關運行 <code>xsos</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># xsos --ip /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa</span></span>
<span class="line"><span>IP4</span></span>
<span class="line"><span>  Interface   Master IF  MAC Address        MTU     State  IPv4 Address</span></span>
<span class="line"><span>  =========   =========  =================  ======  =====  ==================</span></span>
<span class="line"><span>  lo          -          -                  65536   up     127.0.0.1/8</span></span>
<span class="line"><span>  enp0s9      -          08:00:27:0b:bc:e9  1500    up     192.168.1.8/24</span></span>
<span class="line"><span>  enp0s10     -          08:00:27:b2:08:91  1500    up     192.168.1.9/24</span></span>
<span class="line"><span>  virbr0      -          52:54:00:ae:01:94  1500    up     192.168.122.1/24</span></span>
<span class="line"><span>  virbr0-nic  virbr0     52:54:00:ae:01:94  1500    DOWN   -</span></span>
<span class="line"><span></span></span>
<span class="line"><span>IP6</span></span>
<span class="line"><span>  Interface   Master IF  MAC Address        MTU     State  IPv6 Address                                 Scope</span></span>
<span class="line"><span>  =========   =========  =================  ======  =====  ===========================================  =====</span></span>
<span class="line"><span>  lo          -          -                  65536   up     ::1/128                                      host</span></span>
<span class="line"><span>  enp0s9      -          08:00:27:0b:bc:e9  1500    up     fe80::945b:8333:f4bc:9723/64                 link</span></span>
<span class="line"><span>  enp0s10     -          08:00:27:b2:08:91  1500    up     fe80::7ed4:1fab:23c3:3790/64                 link</span></span>
<span class="line"><span>  virbr0      -          52:54:00:ae:01:94  1500    up     -                                            -</span></span>
<span class="line"><span>  virbr0-nic  virbr0     52:54:00:ae:01:94  1500    DOWN   -                                            -</span></span></code></pre></div><p>要通過 <code>ps</code> 查看正在運行的進程，請使用 <code>-p</code> 或 <code>--ps</code> 開關運行 <code>xsos</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># xsos --ps /var/tmp/sosreport-CentOS7-01-1005-2019-05-12-pomeqsa</span></span>
<span class="line"><span>PS CHECK</span></span>
<span class="line"><span>  Total number of threads/processes:</span></span>
<span class="line"><span>    501 / 171</span></span>
<span class="line"><span>  Top users of CPU &amp; MEM:</span></span>
<span class="line"><span>    USER     %CPU   %MEM   RSS</span></span>
<span class="line"><span>    root     20.6%  14.1%  0.30 GiB</span></span>
<span class="line"><span>    gdm      0.3%   16.8%  0.33 GiB</span></span>
<span class="line"><span>    postfix  0.0%   0.6%   0.01 GiB</span></span>
<span class="line"><span>    polkitd  0.0%   0.6%   0.01 GiB</span></span>
<span class="line"><span>    daygeek  0.0%   0.2%   0.00 GiB</span></span>
<span class="line"><span>    colord   0.0%   0.4%   0.01 GiB</span></span>
<span class="line"><span>  Uninteruptible sleep threads/processes (0/0):</span></span>
<span class="line"><span>    [None]</span></span>
<span class="line"><span>  Defunct zombie threads/processes (0/0):</span></span>
<span class="line"><span>    [None]</span></span>
<span class="line"><span>  Top CPU-using processes:</span></span>
<span class="line"><span>    USER      PID   %CPU  %MEM  VSZ-MiB  RSS-MiB  TTY    STAT  START  TIME  COMMAND</span></span>
<span class="line"><span>    root      6542  15.6  4.2   875      78       pts/0  Sl+   10:11  0:07  /usr/bin/python /sbin/sosreport</span></span>
<span class="line"><span>    root      7582  3.0   0.1   10       2        pts/0  S     10:12  0:00  /bin/bash /usr/sbin/dracut --print-cmdline</span></span>
<span class="line"><span>    root      7969  0.7   0.1   95       4        ?      Ss    10:12  0:00  /usr/sbin/certmonger -S -p</span></span>
<span class="line"><span>    root      7889  0.4   0.2   24       4        ?      Ss    10:12  0:00  /usr/lib/systemd/systemd-hostnamed</span></span>
<span class="line"><span>    gdm       3866  0.3   7.1   2856     131      ?      Sl    09:50  0:04  /usr/bin/gnome-shell</span></span>
<span class="line"><span>    root      8553  0.2   0.1   47       3        ?      S     10:12  0:00  /usr/lib/systemd/systemd-udevd</span></span>
<span class="line"><span>    root      6971  0.2   0.4   342      9        ?      Sl    10:12  0:00  /usr/sbin/abrt-dbus -t133</span></span>
<span class="line"><span>    root      3200  0.2   0.9   982      18       ?      Ssl   09:50  0:02  /usr/sbin/libvirtd</span></span>
<span class="line"><span>    root      2855  0.1   0.1   88       3        ?      Ss    09:50  0:01  /sbin/rngd -f</span></span>
<span class="line"><span>    rtkit     2826  0.0   0.0   194      2        ?      SNsl  09:50  0:00  /usr/libexec/rtkit-daemon</span></span>
<span class="line"><span>  Top MEM-using processes:</span></span>
<span class="line"><span>    USER      PID   %CPU  %MEM  VSZ-MiB  RSS-MiB  TTY    STAT  START  TIME  COMMAND</span></span>
<span class="line"><span>    gdm       3866  0.3   7.1   2856     131      ?      Sl    09:50  0:04  /usr/bin/gnome-shell</span></span>
<span class="line"><span>    root      6542  15.6  4.2   875      78       pts/0  Sl+   10:11  0:07  /usr/bin/python /sbin/sosreport</span></span>
<span class="line"><span>    root      3264  0.0   1.2   271      23       tty1   Ssl+  09:50  0:00  /usr/bin/X :0 -background</span></span>
<span class="line"><span>    root      3200  0.2   0.9   982      18       ?      Ssl   09:50  0:02  /usr/sbin/libvirtd</span></span>
<span class="line"><span>    root      3189  0.0   0.9   560      17       ?      Ssl   09:50  0:00  /usr/bin/python2 -Es /usr/sbin/tuned</span></span>
<span class="line"><span>    gdm       4072  0.0   0.9   988      17       ?      Sl    09:50  0:00  /usr/libexec/gsd-media-keys</span></span>
<span class="line"><span>    gdm       4076  0.0   0.8   625      16       ?      Sl    09:50  0:00  /usr/libexec/gsd-power</span></span>
<span class="line"><span>    gdm       4056  0.0   0.8   697      16       ?      Sl    09:50  0:00  /usr/libexec/gsd-color</span></span>
<span class="line"><span>    root      2853  0.0   0.7   622      14       ?      Ssl   09:50  0:00  /usr/sbin/NetworkManager --no-daemon</span></span>
<span class="line"><span>    gdm       4110  0.0   0.7   544      14       ?      Sl    09:50  0:00  /usr/libexec/gsd-wacom</span></span>
<span class="line"><span>  Top thread-spawning processes:</span></span>
<span class="line"><span>    #   USER      PID   %CPU  %MEM  VSZ-MiB  RSS-MiB  TTY    STAT  START  TIME  COMMAND</span></span>
<span class="line"><span>    17  root      3200  0.2   0.9   982      18       ?      -     09:50  0:02  /usr/sbin/libvirtd</span></span>
<span class="line"><span>    12  root      6542  16.1  4.5   876      83       pts/0  -     10:11  0:07  /usr/bin/python /sbin/sosreport</span></span>
<span class="line"><span>    10  gdm       3866  0.3   7.1   2856     131      ?      -     09:50  0:04  /usr/bin/gnome-shell</span></span>
<span class="line"><span>    7   polkitd   2864  0.0   0.6   602      13       ?      -     09:50  0:01  /usr/lib/polkit-1/polkitd --no-debug</span></span>
<span class="line"><span>    6   root      2865  0.0   0.0   203      1        ?      -     09:50  0:00  /usr/sbin/gssproxy -D</span></span>
<span class="line"><span>    5   root      3189  0.0   0.9   560      17       ?      -     09:50  0:00  /usr/bin/python2 -Es /usr/sbin/tuned</span></span>
<span class="line"><span>    5   root      2823  0.0   0.3   443      6        ?      -     09:50  0:00  /usr/libexec/udisks2/udisksd</span></span>
<span class="line"><span>    5   gdm       4102  0.0   0.2   461      5        ?      -     09:50  0:00  /usr/libexec/gsd-smartcard</span></span>
<span class="line"><span>    4   root      3215  0.0   0.2   470      4        ?      -     09:50  0:00  /usr/sbin/gdm</span></span>
<span class="line"><span>    4   gdm       4106  0.0   0.2   444      5        ?      -     09:50  0:00  /usr/libexec/gsd-sound</span></span></code></pre></div><hr>`,41)),a("p",null,[s[10]||(s[10]=n("via: ",-1)),e(p,{href:"https://www.2daygeek.com/xsos-a-tool-to-read-sosreport-in-linux/"},{default:l(()=>[...s[9]||(s[9]=[n("https://www.2daygeek.com/xsos-a-tool-to-read-sosreport-in-linux/",-1)])]),_:1})]),a("p",null,[s[15]||(s[15]=n("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/magesh/"},{default:l(()=>[...s[11]||(s[11]=[n("Magesh Maruthamuthu",-1)])]),_:1}),s[16]||(s[16]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[12]||(s[12]=[n("lujun9972",-1)])]),_:1}),s[17]||(s[17]=n(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1}),s[18]||(s[18]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[14]||(s[14]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[19]||(s[19]=[n("LCTT",-1)])]),_:1}),s[22]||(s[22]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[20]||(s[20]=[n("Linux中國",-1)])]),_:1}),s[23]||(s[23]=n(" 榮譽推出",-1))])])}const C=o(d,[["render",u]]);export{S as __pageData,C as default};
