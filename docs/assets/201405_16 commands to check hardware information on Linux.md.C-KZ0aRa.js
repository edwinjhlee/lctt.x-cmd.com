import{_ as s,a0 as d,w as l,s as p,ao as i,I as o,a1 as t,A as a,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"Linux硬件信息命令大全 | LCTT x X-CMD","titleTemplate":false,"description":"Linux硬件信息命令大全 | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux硬件信息命令大全 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux硬件信息命令大全 | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/16 commands to check hardware information on Linux","title":"Linux硬件信息命令大全","tag":"201405","desc":""},"relativePath":"201405/16 commands to check hardware information on Linux.md","filePath":"[post].md"}'),c={name:"201405/16 commands to check hardware information on Linux.md"};function u(m,e,C,f,I,h){const r=d("Link");return l(),p("div",null,[e[13]||(e[13]=i(`<h1 id="linux硬件信息命令大全" tabindex="-1">Linux硬件信息命令大全 <a class="header-anchor" href="#linux硬件信息命令大全" aria-label="Permalink to “Linux硬件信息命令大全”">​</a></h1><h3 id="硬件信息" tabindex="-1">硬件信息 <a class="header-anchor" href="#硬件信息" aria-label="Permalink to “硬件信息”">​</a></h3><p>在linux系统中，有很多命令可以用于查询主机的硬件信息，有些命令仅仅针对于特定的硬件部件，比如cpu，内存等，而有些命令可以查询很多的硬件信息。</p><p>这篇帖子简单地带大家了解一下最常用的查询各种硬件信息的命令，其中包括lscpu,hwinfo,lshw,dmidecode,lspci等等。</p><h3 id="_1-lscpu" tabindex="-1">1. lscpu <a class="header-anchor" href="#_1-lscpu" aria-label="Permalink to “1. lscpu”">​</a></h3><p>lscpu命令可以用来查询处理器cpu的详细信息，只需要简单地输入lscpu即可，如下所示，它本身也没有提供更多选项和功能可供选择。</p><pre><code>$ lscpu
Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                4
On-line CPU(s) list:   0-3
Thread(s) per core:    1
Core(s) per socket:    4
Socket(s):             1
NUMA node(s):          1
Vendor ID:             GenuineIntel
CPU family:            6
Model:                 23
Stepping:              10
CPU MHz:               1998.000
BogoMIPS:              5302.48
Virtualization:        VT-x
L1d cache:             32K
L1i cache:             32K
L2 cache:              2048K
NUMA node0 CPU(s):     0-3
</code></pre><h3 id="_2-lshw-显示硬件信息列表" tabindex="-1">2. lshw - 显示硬件信息列表 <a class="header-anchor" href="#_2-lshw-显示硬件信息列表" aria-label="Permalink to “2. lshw - 显示硬件信息列表”">​</a></h3><p>这个命令用途广泛，它可以根据你的需求以详细或概要的形式列出许多个不同硬件的参数信息，其中包括cpu，内存，磁盘，usb控制器，网卡等等，lshw实质上是从/proc文件目录下的不同文件中提取对应的硬件信息。</p><pre><code>$ sudo lshw -short

H/W path        Device      Class       Description
===================================================
                        system      ()
/0                          bus         DG35EC
/0/0                        processor   Intel(R) Core(TM)2 Quad CPU    Q8400  @ 2.66GHz
/0/0/1                      memory      2MiB L2 cache
/0/0/3                      memory      32KiB L1 cache
/0/2                        memory      32KiB L1 cache
/0/4                        memory      64KiB BIOS
/0/14                       memory      8GiB System Memory
/0/14/0                     memory      2GiB DIMM DDR2 Synchronous 667 MHz (1.5 ns)
/0/14/1                     memory      2GiB DIMM DDR2 Synchronous 667 MHz (1.5 ns)
/0/14/2                     memory      2GiB DIMM DDR2 Synchronous 667 MHz (1.5 ns)
/0/14/3                     memory      2GiB DIMM DDR2 Synchronous 667 MHz (1.5 ns)
/0/100                      bridge      82G35 Express DRAM Controller
/0/100/2                    display     82G35 Express Integrated Graphics Controller
/0/100/2.1                  display     82G35 Express Integrated Graphics Controller
/0/100/19       eth0        network     82566DC Gigabit Network Connection
/0/100/1a                   bus         82801H (ICH8 Family) USB UHCI Controller #4
/0/100/1a.1                 bus         82801H (ICH8 Family) USB UHCI Controller #5
/0/100/1a.7                 bus         82801H (ICH8 Family) USB2 EHCI Controller #2
/0/100/1b                   multimedia  82801H (ICH8 Family) HD Audio Controller
/0/100/1c                   bridge      82801H (ICH8 Family) PCI Express Port 1
/0/100/1c.1                 bridge      82801H (ICH8 Family) PCI Express Port 2
/0/100/1c.2                 bridge      82801H (ICH8 Family) PCI Express Port 3
/0/100/1c.2/0               storage     JMB368 IDE controller
/0/100/1d                   bus         82801H (ICH8 Family) USB UHCI Controller #1
/0/100/1d.1                 bus         82801H (ICH8 Family) USB UHCI Controller #2
/0/100/1d.2                 bus         82801H (ICH8 Family) USB UHCI Controller #3
/0/100/1d.7                 bus         82801H (ICH8 Family) USB2 EHCI Controller #1
/0/100/1e                   bridge      82801 PCI Bridge
/0/100/1e/5                 bus         FW322/323 [TrueFire] 1394a Controller
/0/100/1f                   bridge      82801HB/HR (ICH8/R) LPC Interface Controller
/0/100/1f.2                 storage     82801H (ICH8 Family) 4 port SATA Controller [IDE mode]
/0/100/1f.3                 bus         82801H (ICH8 Family) SMBus Controller
/0/100/1f.5                 storage     82801HR/HO/HH (ICH8R/DO/DH) 2 port SATA Controller [IDE m
/0/1            scsi3       storage     
/0/1/0.0.0      /dev/sda    disk        500GB ST3500418AS
/0/1/0.0.0/1    /dev/sda1   volume      70GiB Windows NTFS volume
/0/1/0.0.0/2    /dev/sda2   volume      395GiB Extended partition
/0/1/0.0.0/2/5  /dev/sda5   volume      97GiB HPFS/NTFS partition
/0/1/0.0.0/2/6  /dev/sda6   volume      97GiB Linux filesystem partition
/0/1/0.0.0/2/7  /dev/sda7   volume      1952MiB Linux swap / Solaris partition
/0/1/0.0.0/2/8  /dev/sda8   volume      198GiB Linux filesystem partition
/0/3            scsi4       storage     
/0/3/0.0.0      /dev/cdrom  disk        DVD RW DRU-190A
</code></pre><p>点击下面的帖子，可以对lshw有更多的了解。</p>`,11)),o("p",null,[t(r,{href:"http://www.binarytides.com/linux-lshw-command/"},{default:a(()=>[...e[0]||(e[0]=[n("在Linux上使用lshw命令获取硬件信息",-1)])]),_:1})]),e[14]||(e[14]=o("h3",{id:"_3-hwinfo-hardware-information",tabindex:"-1"},[n("3. hwinfo - Hardware Information "),o("a",{class:"header-anchor",href:"#_3-hwinfo-hardware-information","aria-label":"Permalink to “3. hwinfo - Hardware Information”"},"​")],-1)),e[15]||(e[15]=o("p",null,"hwinfo同样是一个使用非常广泛的硬件信息查询命令，类似于lshw，它同样可以详细或概要地报告多个部件的硬件信息，但不同的是，它有时可以给出比lshw更多的信息。",-1)),e[16]||(e[16]=o("pre",null,[o("code",null,`$ hwinfo --short
cpu:                                                            
                       Intel(R) Core(TM)2 Quad CPU    Q8400  @ 2.66GHz, 2000 MHz
                       Intel(R) Core(TM)2 Quad CPU    Q8400  @ 2.66GHz, 2000 MHz
                       Intel(R) Core(TM)2 Quad CPU    Q8400  @ 2.66GHz, 2666 MHz
                       Intel(R) Core(TM)2 Quad CPU    Q8400  @ 2.66GHz, 2666 MHz
keyboard:
  /dev/input/event2    AT Translated Set 2 keyboard
mouse:
  /dev/input/mice      Microsoft Basic Optical Mouse v2.0
graphics card:
                       Intel 965G-1
                       Intel 82G35 Express Integrated Graphics Controller
sound:
                       Intel 82801H (ICH8 Family) HD Audio Controller
storage:
                       Intel 82801H (ICH8 Family) 4 port SATA IDE Controller
                       Intel 82801H (ICH8 Family) 2 port SATA IDE Controller
                       JMicron JMB368 IDE controller
network:
  eth0                 Intel 82566DC Gigabit Network Connection
network interface:
  eth0                 Ethernet network interface
  lo                   Loopback network interface
disk:
  /dev/sda             ST3500418AS
partition:
  /dev/sda1            Partition
  /dev/sda2            Partition
  /dev/sda5            Partition
  /dev/sda6            Partition
  /dev/sda7            Partition
  /dev/sda8            Partition
cdrom:
  /dev/sr0             SONY DVD RW DRU-190A
usb controller:
                       Intel 82801H (ICH8 Family) USB UHCI Controller #4
                       Intel 82801H (ICH8 Family) USB UHCI Controller #5
                       Intel 82801H (ICH8 Family) USB2 EHCI Controller #2
                       Intel 82801H (ICH8 Family) USB UHCI Controller #1
                       Intel 82801H (ICH8 Family) USB UHCI Controller #2
                       Intel 82801H (ICH8 Family) USB UHCI Controller #3
                       Intel 82801H (ICH8 Family) USB2 EHCI Controller #1
bios:
                       BIOS

... TRUNCATED ...
`)],-1)),e[17]||(e[17]=o("p",null,"点击下面的链接可以查看更多关于hwinfo的信息。",-1)),o("p",null,[t(r,{href:"http://www.binarytides.com/linux-hwinfo-command/"},{default:a(()=>[...e[1]||(e[1]=[n("在Linux上使用hwinfo命令获取硬件信息",-1)])]),_:1})]),e[18]||(e[18]=i(`<h3 id="_4-lspci-显示pci总线相关信息" tabindex="-1">4. lspci - 显示pci总线相关信息 <a class="header-anchor" href="#_4-lspci-显示pci总线相关信息" aria-label="Permalink to “4. lspci - 显示pci总线相关信息”">​</a></h3><p>lscpi命令可以列出pci总线上信息，以及所有连接到pci总线上的设备信息，比如VGA适配器，显卡，网卡，usb端口，sata控制器等等。</p><pre><code>$ lspci
00:00.0 Host bridge: Intel Corporation 82G35 Express DRAM Controller (rev 03)
00:02.0 VGA compatible controller: Intel Corporation 82G35 Express Integrated Graphics Controller (rev 03)
00:02.1 Display controller: Intel Corporation 82G35 Express Integrated Graphics Controller (rev 03)
00:19.0 Ethernet controller: Intel Corporation 82566DC Gigabit Network Connection (rev 02)
00:1a.0 USB controller: Intel Corporation 82801H (ICH8 Family) USB UHCI Controller #4 (rev 02)
00:1a.1 USB controller: Intel Corporation 82801H (ICH8 Family) USB UHCI Controller #5 (rev 02)
00:1a.7 USB controller: Intel Corporation 82801H (ICH8 Family) USB2 EHCI Controller #2 (rev 02)
00:1b.0 Audio device: Intel Corporation 82801H (ICH8 Family) HD Audio Controller (rev 02)
00:1c.0 PCI bridge: Intel Corporation 82801H (ICH8 Family) PCI Express Port 1 (rev 02)
00:1c.1 PCI bridge: Intel Corporation 82801H (ICH8 Family) PCI Express Port 2 (rev 02)
00:1c.2 PCI bridge: Intel Corporation 82801H (ICH8 Family) PCI Express Port 3 (rev 02)
00:1d.0 USB controller: Intel Corporation 82801H (ICH8 Family) USB UHCI Controller #1 (rev 02)
00:1d.1 USB controller: Intel Corporation 82801H (ICH8 Family) USB UHCI Controller #2 (rev 02)
00:1d.2 USB controller: Intel Corporation 82801H (ICH8 Family) USB UHCI Controller #3 (rev 02)
00:1d.7 USB controller: Intel Corporation 82801H (ICH8 Family) USB2 EHCI Controller #1 (rev 02)
00:1e.0 PCI bridge: Intel Corporation 82801 PCI Bridge (rev f2)
00:1f.0 ISA bridge: Intel Corporation 82801HB/HR (ICH8/R) LPC Interface Controller (rev 02)
00:1f.2 IDE interface: Intel Corporation 82801H (ICH8 Family) 4 port SATA Controller [IDE mode] (rev 02)
00:1f.3 SMBus: Intel Corporation 82801H (ICH8 Family) SMBus Controller (rev 02)
00:1f.5 IDE interface: Intel Corporation 82801HR/HO/HH (ICH8R/DO/DH) 2 port SATA Controller [IDE mode] (rev 02)
03:00.0 IDE interface: JMicron Technology Corp. JMB368 IDE controller
04:05.0 FireWire (IEEE 1394): LSI Corporation FW322/323 [TrueFire] 1394a Controller (rev 70)
</code></pre><p>可以使用grep命令筛选出特定的设备信息。</p><pre><code>$ lspci -v | grep &quot;VGA&quot; -A 12
</code></pre><h3 id="_5-lsscsi-列出scsi设备信息" tabindex="-1">5. lsscsi - 列出scsi设备信息 <a class="header-anchor" href="#_5-lsscsi-列出scsi设备信息" aria-label="Permalink to “5. lsscsi - 列出scsi设备信息”">​</a></h3><p>列出scsi/sata设备信息，比如硬盘驱动器，光盘驱动器。</p><pre><code>$ lsscsi
[3:0:0:0]    disk    ATA      ST3500418AS      CC38  /dev/sda 
[4:0:0:0]    cd/dvd  SONY     DVD RW DRU-190A  1.63  /dev/sr0
</code></pre><h3 id="_6-lsusb-列出usb总线信息-及设备信息" tabindex="-1">6. lsusb - 列出usb总线信息，及设备信息 <a class="header-anchor" href="#_6-lsusb-列出usb总线信息-及设备信息" aria-label="Permalink to “6. lsusb - 列出usb总线信息，及设备信息”">​</a></h3><p>该命令可以显示USB控制器及连接到控制的设备信息。默认情况下，只显示概要信息，可以通过-v选项指示其显示更多的硬件信息。</p><pre><code>$ lsusb
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 007 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 006 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 005 Device 002: ID 045e:00cb Microsoft Corp. Basic Optical Mouse v2.0
Bus 005 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
</code></pre><p>上面信息显示，在该系统中，有一个usb端口正被鼠标占用。</p><h3 id="_7-inxi" tabindex="-1">7. Inxi <a class="header-anchor" href="#_7-inxi" aria-label="Permalink to “7. Inxi”">​</a></h3><p>inxi命令是一个大的bash脚本文件，其通过从不同的信息来源和命令中获取硬件信息，最后能给出一个颜色高亮的，适合于非专业人员阅读的硬件信息报告。</p><pre><code>$ inxi -Fx
</code></pre><p><img src="http://www.binarytides.com/blog/wp-content/uploads/2014/04/inxi-linux.png" alt=""></p><h3 id="_8-lsblk-列出块设备信息" tabindex="-1">8. lsblk - 列出块设备信息 <a class="header-anchor" href="#_8-lsblk-列出块设备信息" aria-label="Permalink to “8. lsblk - 列出块设备信息”">​</a></h3><p>列出所有块设备信息，其中包括硬盘分区信息，以及其他存储设备，如光盘，闪存等。</p><pre><code>$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0 465.8G  0 disk 
├─sda1   8:1    0    70G  0 part 
├─sda2   8:2    0     1K  0 part 
├─sda5   8:5    0  97.7G  0 part /media/4668484A68483B47
├─sda6   8:6    0  97.7G  0 part /
├─sda7   8:7    0   1.9G  0 part [SWAP]
└─sda8   8:8    0 198.5G  0 part /media/13f35f59-f023-4d98-b06f-9dfaebefd6c1
sr0     11:0    1  1024M  0 rom
</code></pre><h3 id="_9-df-显示文件系统的磁盘空间信息" tabindex="-1">9. df - 显示文件系统的磁盘空间信息 <a class="header-anchor" href="#_9-df-显示文件系统的磁盘空间信息" aria-label="Permalink to “9. df - 显示文件系统的磁盘空间信息”">​</a></h3><p>报告各种挂载的文件系统信息，其中包括挂载点，已用的，可用的磁盘空间。</p><pre><code>$ df -H
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda6       104G   26G   73G  26% /
none            4.1k     0  4.1k   0% /sys/fs/cgroup
udev            4.2G  4.1k  4.2G   1% /dev
tmpfs           837M  1.6M  835M   1% /run
none            5.3M     0  5.3M   0% /run/lock
none            4.2G   13M  4.2G   1% /run/shm
none            105M   21k  105M   1% /run/user
/dev/sda8       210G  149G   51G  75% /media/13f35f59-f023-4d98-b06f-9dfaebefd6c1
/dev/sda5       105G   31G   75G  30% /media/4668484A68483B47
</code></pre><h3 id="_10-pydf-python版本的df" tabindex="-1">10. pydf - python版本的df <a class="header-anchor" href="#_10-pydf-python版本的df" aria-label="Permalink to “10. pydf - python版本的df”">​</a></h3><p>一个增强型的python版的df命令，可以以不同的颜色显示所查询的信息，看起来比df更好看。</p><pre><code>$ pydf
Filesystem Size Used Avail Use%          Mounted on                                 
/dev/sda6   96G  23G   68G 24.4 [#.....] /                                          
/dev/sda8  195G 138G   47G 70.6 [####..] /media/13f35f59-f023-4d98-b06f-9dfaebefd6c1
/dev/sda5   98G  28G   69G 29.2 [##....] /media/4668484A68483B47
</code></pre><h3 id="_11-fdisk" tabindex="-1">11. fdisk <a class="header-anchor" href="#_11-fdisk" aria-label="Permalink to “11. fdisk”">​</a></h3><p>fdisk命令可以用来修改硬盘分区表信息，也可以用来显示硬盘分区表信息</p><pre><code>$ sudo fdisk -l

Disk /dev/sda: 500.1 GB, 500107862016 bytes
255 heads, 63 sectors/track, 60801 cylinders, total 976773168 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x30093008

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *          63   146801969    73400953+   7  HPFS/NTFS/exFAT
/dev/sda2       146802031   976771071   414984520+   f  W95 Ext&#39;d (LBA)
/dev/sda5       146802033   351614654   102406311    7  HPFS/NTFS/exFAT
/dev/sda6       351614718   556427339   102406311   83  Linux
/dev/sda7       556429312   560427007     1998848   82  Linux swap / Solaris
/dev/sda8       560429056   976771071   208171008   83  Linux
</code></pre><h3 id="_12-mount" tabindex="-1">12. mount <a class="header-anchor" href="#_12-mount" aria-label="Permalink to “12. mount”">​</a></h3><p>mount命令可以用来挂载设备，当然也可以用来查看系统中设备的挂载情况。</p><pre><code>$ mount | column -t
/dev/sda6    on  /                                            type  ext4             (rw,errors=remount-ro)
proc         on  /proc                                        type  proc             (rw,noexec,nosuid,nodev)
sysfs        on  /sys                                         type  sysfs            (rw,noexec,nosuid,nodev)
none         on  /sys/fs/cgroup                               type  tmpfs            (rw)
none         on  /sys/fs/fuse/connections                     type  fusectl          (rw)
none         on  /sys/kernel/debug                            type  debugfs          (rw)
none         on  /sys/kernel/security                         type  securityfs       (rw)
udev         on  /dev                                         type  devtmpfs         (rw,mode=0755)
devpts       on  /dev/pts                                     type  devpts           (rw,noexec,nosuid,gid=5,mode=0620)
tmpfs        on  /run                                         type  tmpfs            (rw,noexec,nosuid,size=10%,mode=0755)
none         on  /run/lock                                    type  tmpfs            (rw,noexec,nosuid,nodev,size=5242880)
none         on  /run/shm                                     type  tmpfs            (rw,nosuid,nodev)
none         on  /run/user                                    type  tmpfs            (rw,noexec,nosuid,nodev,size=104857600,mode=0755)
none         on  /sys/fs/pstore                               type  pstore           (rw)
/dev/sda8    on  /media/13f35f59-f023-4d98-b06f-9dfaebefd6c1  type  ext4             (rw,nosuid,nodev,errors=remount-ro)
/dev/sda5    on  /media/4668484A68483B47                      type  fuseblk          (rw,nosuid,nodev,allow_other,blksize=4096)
binfmt_misc  on  /proc/sys/fs/binfmt_misc                     type  binfmt_misc      (rw,noexec,nosuid,nodev)
systemd      on  /sys/fs/cgroup/systemd                       type  cgroup           (rw,noexec,nosuid,nodev,none,name=systemd)
gvfsd-fuse   on  /run/user/1000/gvfs                          type  fuse.gvfsd-fuse  (rw,nosuid,nodev,user=enlightened)
</code></pre><p>同样，可以使用grep命令来筛选出想看的文件系统信息。</p><pre><code>$ mount | column -t | grep ext
</code></pre><h3 id="_13-free-查看ram信息" tabindex="-1">13. free - 查看RAM信息 <a class="header-anchor" href="#_13-free-查看ram信息" aria-label="Permalink to “13. free - 查看RAM信息”">​</a></h3><p>查看系统中RAM的使用情况，包括已使用空间，未使用空间，以及总空间。</p><pre><code>$ free -m
             total       used       free     shared    buffers     cached
Mem:          7975       5865       2110          0         24        622
-/+ buffers/cache:       5218       2757
Swap:         1951        921       1030
</code></pre><h3 id="_14-dmidecode" tabindex="-1">14. dmidecode <a class="header-anchor" href="#_14-dmidecode" aria-label="Permalink to “14. dmidecode”">​</a></h3><p>dmidecode命令不同于其他的命令，它是通过读取SMBOIS数据结构（也称为DMI表）中数据来提取硬件信息。</p><pre><code># 显示处理器信息
$ sudo dmidecode -t processor

# 显示内存信息
$ sudo dmidecode -t memory

# 显示bios信息
$ sudo dmidecode -t bios
</code></pre><p>查看man手册获取更多信息。</p><h3 id="_15-proc-文件系统" tabindex="-1">15. /proc 文件系统 <a class="header-anchor" href="#_15-proc-文件系统" aria-label="Permalink to “15. /proc 文件系统”">​</a></h3><p>在/proc目录下的许多虚拟文件包含了很多有关硬件参数及配置的信息。</p><p>CPU、内存信息</p><pre><code># cpu信息
$ cat /proc/cpuinfo

# 内存信息
$ cat /proc/meminfo
</code></pre><p>Linux内核信息</p><pre><code>$ cat /proc/version
Linux version 3.11.0-12-generic (buildd@allspice) (gcc version 4.8.1 (Ubuntu/Linaro 4.8.1-10ubuntu7) ) #19-Ubuntu SMP Wed Oct 9 16:20:46 UTC 2013
</code></pre><p>SCSI/Sata设备信息</p><pre><code>$ cat /proc/scsi/scsi 
Attached devices:
Host: scsi3 Channel: 00 Id: 00 Lun: 00
  Vendor: ATA      Model: ST3500418AS      Rev: CC38
  Type:   Direct-Access                    ANSI  SCSI revision: 05
Host: scsi4 Channel: 00 Id: 00 Lun: 00
  Vendor: SONY     Model: DVD RW DRU-190A  Rev: 1.63
  Type:   CD-ROM                           ANSI  SCSI revision: 05
</code></pre><p>分区信息</p><pre><code>$ cat /proc/partitions 
major minor  #blocks  name

   8        0  488386584 sda
   8        1   73400953 sda1
   8        2          1 sda2
   8        5  102406311 sda5
   8        6  102406311 sda6
   8        7    1998848 sda7
   8        8  208171008 sda8
  11        0    1048575 sr0
</code></pre><h3 id="_16-hdparm" tabindex="-1">16. hdparm <a class="header-anchor" href="#_16-hdparm" aria-label="Permalink to “16. hdparm”">​</a></h3><p>hdparm命令可以获取sata设备如硬盘等设备信息。</p><pre><code>$ sudo hdparm -i /dev/sda

/dev/sda:

 Model=ST3500418AS, FwRev=CC38, SerialNo=9VMJXV1N
 Config={ HardSect NotMFM HdSw&gt;15uSec Fixed DTR&gt;10Mbs RotSpdTol&gt;.5% }
 RawCHS=16383/16/63, TrkSize=0, SectSize=0, ECCbytes=4
 BuffType=unknown, BuffSize=16384kB, MaxMultSect=16, MultSect=16
 CurCHS=16383/16/63, CurSects=16514064, LBA=yes, LBAsects=976773168
 IORDY=on/off, tPIO={min:120,w/IORDY:120}, tDMA={min:120,rec:120}
 PIO modes:  pio0 pio1 pio2 pio3 pio4 
 DMA modes:  mdma0 mdma1 mdma2 
 UDMA modes: udma0 udma1 udma2 udma3 udma4 udma5 *udma6 
 AdvancedPM=no WriteCache=enabled
 Drive conforms to: unknown:  ATA/ATAPI-4,5,6,7

 * signifies the current active mode
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>每一个命令在获取信息的方式会稍微有些不同，在查询某一设备时，你也有可能要结合多个命令才能获取你想要的硬件信息。不过，这些命令都可以在大多数的linux发行版中找到，可以很容易地从默认的仓库中获取安装。</p><p>在桌面版系统中，还有一个便于使用的图形界面的工具，比如Hardinfo、I-nex就是其中非常流行的工具，他们可以提供多个硬件部件的详细信息。</p><hr>`,57)),o("p",null,[e[3]||(e[3]=n("via: ",-1)),t(r,{href:"http://www.binarytides.com/linux-commands-hardware-info/"},{default:a(()=>[...e[2]||(e[2]=[n("http://www.binarytides.com/linux-commands-hardware-info/",-1)])]),_:1})]),o("p",null,[e[6]||(e[6]=n("译者：",-1)),t(r,{href:"https://github.com/stallonederek"},{default:a(()=>[...e[4]||(e[4]=[n("stallonederek",-1)])]),_:1}),e[7]||(e[7]=n(" 校对：",-1)),t(r,{href:"https://github.com/%E6%A0%A1wxy"},{default:a(()=>[...e[5]||(e[5]=[n("wxy",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=n("本文由 ",-1)),t(r,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原创翻译，",-1)),t(r,{href:"http://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[n("Linux中国",-1)])]),_:1}),e[12]||(e[12]=n(" 荣誉推出",-1))])])}const v=s(c,[["render",u]]);export{y as __pageData,v as default};
