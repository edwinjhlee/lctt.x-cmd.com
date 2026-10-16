import{_ as t,a0 as r,w as a,s as l,ao as i,I as p,x as o,a1 as d,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"Linux 中 df 命令的11個例子 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 中 df 命令的11個例子 | LCTT (201510) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 中 df 命令的11個例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 中 df 命令的11個例子 | LCTT (201510) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201510/20151019 11 df command examples in Linux","title":"Linux 中 df 命令的11個例子","tag":"201510","desc":""},"relativePath":"201510/20151019 11 df command examples in Linux.md","filePath":"[post].md"}'),m={name:"201510/20151019 11 df command examples in Linux.md"};function f(u,e,v,c,x,h){const n=r("Link");return a(),l("div",null,[e[13]||(e[13]=i(`<h1 id="linux-中-df-命令的11個例子" tabindex="-1">Linux 中 df 命令的11個例子 <a class="header-anchor" href="#linux-中-df-命令的11個例子" aria-label="Permalink to “Linux 中 df 命令的11個例子”">​</a></h1><p>df 即“可用磁盤”（disk free），用於顯示文件系統的磁盤使用情況。默認情況下 df 命令將以每塊 1K 的單位進行顯示所有當前已掛載的文件系統，如果你想以人類易讀的格式顯示 df 命令的輸出，像這樣“df -h”使用 -h 選項。</p><p>在這篇文章中，我們將討論 <code>df</code> 命令在 Linux 下11種不同的實例。</p><p>在 Linux 下 df 命令的基本格式為：</p><pre><code># df {options} {mount_point_of_filesystem}
</code></pre><p>在 df 命令中可用的選項有：</p><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/10/df-command-options.jpg" alt=""></p><p>df 的樣例輸出 :</p><pre><code>[root@linux-world ~]# df
Filesystem            1K-blocks   Used Available Use% Mounted on
/dev/mapper/vg00-root  17003304 804668  15311852   5% /
devtmpfs                 771876      0    771876   0% /dev
tmpfs                    777928      0    777928   0% /dev/shm
tmpfs                    777928   8532    769396   2% /run
tmpfs                    777928      0    777928   0% /sys/fs/cgroup
/dev/mapper/vg00-home  14987616  41000  14162232   1% /home
/dev/sda1                487652  62593    395363  14% /boot
/dev/mapper/vg00-var    9948012  48692   9370936   1% /var
/dev/mapper/vg00-sap   14987656  37636  14165636   1% /sap
[root@linux-world ~]#
</code></pre><h3 id="例1-使用-a-選項列出所有文件系統的磁盤使用量" tabindex="-1">例1：使用 -a 選項列出所有文件系統的磁盤使用量 <a class="header-anchor" href="#例1-使用-a-選項列出所有文件系統的磁盤使用量" aria-label="Permalink to “例1：使用 -a 選項列出所有文件系統的磁盤使用量”">​</a></h3><p>當我們在 df 命令中使用 <code>-a</code> 選項時，它會顯示所有文件系統的磁盤使用情況。</p><pre><code>[root@linux-world ~]# df -a
Filesystem            1K-blocks   Used Available Use% Mounted on
rootfs                 17003304 804668  15311852   5% /
proc                          0      0         0    - /proc
sysfs                         0      0         0    - /sys
devtmpfs                 771876      0    771876   0% /dev
securityfs                    0      0         0    - /sys/kernel/security
tmpfs                    777928      0    777928   0% /dev/shm
devpts                        0      0         0    - /dev/pts
tmpfs                    777928   8532    769396   2% /run
tmpfs                    777928      0    777928   0% /sys/fs/cgroup
cgroup                        0      0         0    - /sys/fs/cgroup/systemd
pstore                        0      0         0    - /sys/fs/pstore
cgroup                        0      0         0    - /sys/fs/cgroup/cpuset
cgroup                        0      0         0    - /sys/fs/cgroup/cpu,cpuacct
cgroup                        0      0         0    - /sys/fs/cgroup/memory
cgroup                        0      0         0    - /sys/fs/cgroup/devices
cgroup                        0      0         0    - /sys/fs/cgroup/freezer
cgroup                        0      0         0    - /sys/fs/cgroup/net_cls
cgroup                        0      0         0    - /sys/fs/cgroup/blkio
cgroup                        0      0         0    - /sys/fs/cgroup/perf_event
cgroup                        0      0         0    - /sys/fs/cgroup/hugetlb
configfs                      0      0         0    - /sys/kernel/config
/dev/mapper/vg00-root  17003304 804668  15311852   5% /
selinuxfs                     0      0         0    - /sys/fs/selinux
systemd-1                     0      0         0    - /proc/sys/fs/binfmt_misc
debugfs                       0      0         0    - /sys/kernel/debug
hugetlbfs                     0      0         0    - /dev/hugepages
mqueue                        0      0         0    - /dev/mqueue
/dev/mapper/vg00-home  14987616  41000  14162232   1% /home
/dev/sda1                487652  62593    395363  14% /boot
/dev/mapper/vg00-var    9948012  48692   9370936   1% /var
/dev/mapper/vg00-sap   14987656  37636  14165636   1% /sap
[root@linux-world ~]#
</code></pre><h3 id="例2-以人類易讀的格式顯示-df-命令的輸出" tabindex="-1">例2：以人類易讀的格式顯示 df 命令的輸出 <a class="header-anchor" href="#例2-以人類易讀的格式顯示-df-命令的輸出" aria-label="Permalink to “例2：以人類易讀的格式顯示 df 命令的輸出”">​</a></h3><p>在 df 命令中使用<code>-h</code>選項，以人類易讀的格式輸出（例如，5K，500M 及 5G）</p><pre><code>[root@linux-world ~]# df -h
Filesystem             Size  Used Avail Use% Mounted on
/dev/mapper/vg00-root   17G  786M   15G   5% /
devtmpfs               754M     0  754M   0% /dev
tmpfs                  760M     0  760M   0% /dev/shm
tmpfs                  760M  8.4M  752M   2% /run
tmpfs                  760M     0  760M   0% /sys/fs/cgroup
/dev/mapper/vg00-home   15G   41M   14G   1% /home
/dev/sda1              477M   62M  387M  14% /boot
/dev/mapper/vg00-var   9.5G   48M  9.0G   1% /var
/dev/mapper/vg00-sap    15G   37M   14G   1% /sap
[root@linux-world ~]#
</code></pre><h3 id="例3-顯示特定文件系統已使用的空間" tabindex="-1">例3：顯示特定文件系統已使用的空間 <a class="header-anchor" href="#例3-顯示特定文件系統已使用的空間" aria-label="Permalink to “例3：顯示特定文件系統已使用的空間”">​</a></h3><p>假如我們想顯示 /sap 文件系統空間的使用情況。</p><pre><code>[root@linux-world ~]# df -h /sap/
Filesystem            Size  Used Avail Use% Mounted on
/dev/mapper/vg00-sap   15G   37M   14G   1% /sap
[root@linux-world ~]#
</code></pre><h3 id="例4-輸出所有已掛載文件系統的類型" tabindex="-1">例4：輸出所有已掛載文件系統的類型 <a class="header-anchor" href="#例4-輸出所有已掛載文件系統的類型" aria-label="Permalink to “例4：輸出所有已掛載文件系統的類型”">​</a></h3><p><code>-T</code> 選項用在 df 命令中用來顯示文件系統的類型。</p><pre><code>[root@linux-world ~]# df -T
Filesystem            Type     1K-blocks   Used Available Use% Mounted on
/dev/mapper/vg00-root ext4      17003304 804668  15311852   5% /
devtmpfs              devtmpfs    771876      0    771876   0% /dev
tmpfs                 tmpfs       777928      0    777928   0% /dev/shm
tmpfs                 tmpfs       777928   8532    769396   2% /run
tmpfs                 tmpfs       777928      0    777928   0% /sys/fs/cgroup
/dev/mapper/vg00-home ext4      14987616  41000  14162232   1% /home
/dev/sda1             ext3        487652  62593    395363  14% /boot
/dev/mapper/vg00-var  ext3       9948012  48696   9370932   1% /var
/dev/mapper/vg00-sap  ext3      14987656  37636  14165636   1% /sap
[root@linux-world ~]#
</code></pre><h3 id="例5-按塊大小輸出文件系統磁盤使用情況" tabindex="-1">例5：按塊大小輸出文件系統磁盤使用情況 <a class="header-anchor" href="#例5-按塊大小輸出文件系統磁盤使用情況" aria-label="Permalink to “例5：按塊大小輸出文件系統磁盤使用情況”">​</a></h3><pre><code>[root@linux-world ~]# df -k
Filesystem            1K-blocks   Used Available Use% Mounted on
/dev/mapper/vg00-root  17003304 804668  15311852   5% /
devtmpfs                 771876      0    771876   0% /dev
tmpfs                    777928      0    777928   0% /dev/shm
tmpfs                    777928   8532    769396   2% /run
tmpfs                    777928      0    777928   0% /sys/fs/cgroup
/dev/mapper/vg00-home  14987616  41000  14162232   1% /home
/dev/sda1                487652  62593    395363  14% /boot
/dev/mapper/vg00-var    9948012  48696   9370932   1% /var
/dev/mapper/vg00-sap   14987656  37636  14165636   1% /sap
[root@linux-world ~]#
</code></pre><h3 id="例6-輸出文件系統的-inode-信息" tabindex="-1">例6：輸出文件系統的 inode 信息 <a class="header-anchor" href="#例6-輸出文件系統的-inode-信息" aria-label="Permalink to “例6：輸出文件系統的 inode 信息”">​</a></h3><p><code>-i</code> 選項用在 df 命令用於顯示文件系統的 inode 信息。</p><p>所有文件系統的 inode 信息：</p><pre><code>[root@linux-world ~]# df -i
Filesystem             Inodes IUsed   IFree IUse% Mounted on
/dev/mapper/vg00-root 1089536 22031 1067505    3% /
devtmpfs               192969   357  192612    1% /dev
tmpfs                  194482     1  194481    1% /dev/shm
tmpfs                  194482   420  194062    1% /run
tmpfs                  194482    13  194469    1% /sys/fs/cgroup
/dev/mapper/vg00-home  960992    15  960977    1% /home
/dev/sda1              128016   337  127679    1% /boot
/dev/mapper/vg00-var   640848  1235  639613    1% /var
/dev/mapper/vg00-sap   960992    11  960981    1% /sap
[root@linux-world ~]#
</code></pre><p>特定文件系統的 inode 信息：</p><pre><code>[root@linux-world ~]# df -i /sap/
Filesystem           Inodes IUsed  IFree IUse% Mounted on
/dev/mapper/vg00-sap 960992    11 960981    1% /sap
[root@linux-world ~]#
</code></pre><h3 id="例7-輸出所有文件系統使用情況彙總" tabindex="-1">例7：輸出所有文件系統使用情況彙總 <a class="header-anchor" href="#例7-輸出所有文件系統使用情況彙總" aria-label="Permalink to “例7：輸出所有文件系統使用情況彙總”">​</a></h3><p><code>-total</code> 選項在 df 命令中用於顯示所有文件系統的磁盤使用情況彙總。</p><pre><code>[root@linux-world ~]# df -h --total
Filesystem             Size  Used Avail Use% Mounted on
/dev/mapper/vg00-root   17G  786M   15G   5% /
devtmpfs               754M     0  754M   0% /dev
tmpfs                  760M     0  760M   0% /dev/shm
tmpfs                  760M  8.4M  752M   2% /run
tmpfs                  760M     0  760M   0% /sys/fs/cgroup
/dev/mapper/vg00-home   15G   41M   14G   1% /home
/dev/sda1              477M   62M  387M  14% /boot
/dev/mapper/vg00-var   9.5G   48M  9.0G   1% /var
/dev/mapper/vg00-sap    15G   37M   14G   1% /sap
total                   58G  980M   54G   2% -
[root@linux-world ~]#
</code></pre><h3 id="例8-只打印本地文件系統磁盤的使用情況" tabindex="-1">例8：只打印本地文件系統磁盤的使用情況 <a class="header-anchor" href="#例8-只打印本地文件系統磁盤的使用情況" aria-label="Permalink to “例8：只打印本地文件系統磁盤的使用情況”">​</a></h3><p>假設網絡文件系統也掛載在 Linux 上，但我們只想顯示本地文件系統的信息，這可以通過使用 df 命令的 <code>-l</code> 選項來實現。</p><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/10/nfs4-fs-mount.jpg" alt=""></p><p>只打印本地文件系統：</p><pre><code>[root@linux-world ~]# df -Thl
Filesystem            Type      Size  Used Avail Use% Mounted on
/dev/mapper/vg00-root ext4       17G  791M   15G   6% /
devtmpfs              devtmpfs  754M     0  754M   0% /dev
tmpfs                 tmpfs     760M     0  760M   0% /dev/shm
tmpfs                 tmpfs     760M  8.4M  752M   2% /run
tmpfs                 tmpfs     760M     0  760M   0% /sys/fs/cgroup
/dev/mapper/vg00-home ext4       15G   41M   14G   1% /home
/dev/sda1             ext3      477M   62M  387M  14% /boot
/dev/mapper/vg00-var  ext3      9.5G  105M  8.9G   2% /var
/dev/mapper/vg00-sap  ext3       15G   37M   14G   1% /sap
[root@linux-world ~]#
</code></pre><h3 id="例9-打印特定文件系統類型的磁盤使用情況" tabindex="-1">例9：打印特定文件系統類型的磁盤使用情況 <a class="header-anchor" href="#例9-打印特定文件系統類型的磁盤使用情況" aria-label="Permalink to “例9：打印特定文件系統類型的磁盤使用情況”">​</a></h3><p><code>-t</code> 選項在 df 命令中用來打印特定文件系統類型的信息，用 <code>-t</code> 指定文件系統的類型，如下所示：</p><p>對於 ext4 :</p><pre><code>[root@linux-world ~]# df -t ext4
Filesystem            1K-blocks   Used Available Use% Mounted on
/dev/mapper/vg00-root  17003304 809492  15307028   6% /
/dev/mapper/vg00-home  14987616  41000  14162232   1% /home
[root@linux-world ~]#
</code></pre><p>對於 nfs4 :</p><pre><code>[root@linux-world ~]# df -t nfs4
Filesystem            1K-blocks      Used Available Use% Mounted on
192.168.1.5:/opensuse 301545472 266833920  19371008  94% /data
[root@linux-world ~]#
</code></pre><h3 id="例10-使用-x-選項排除特定的文件系統類型" tabindex="-1">例10：使用 -x 選項排除特定的文件系統類型 <a class="header-anchor" href="#例10-使用-x-選項排除特定的文件系統類型" aria-label="Permalink to “例10：使用 -x 選項排除特定的文件系統類型”">​</a></h3><p><code>-x</code> 或 <code>–exclude-type</code> 在 df 命令中用來在輸出中排出某些文件系統類型。</p><p>假設我們想打印除 ext3 外所有的文件系統。</p><pre><code>[root@linux-world ~]# df -x ext3
Filesystem            1K-blocks      Used Available Use% Mounted on
/dev/mapper/vg00-root  17003304    809492  15307028   6% /
devtmpfs                 771876         0    771876   0% /dev
tmpfs                    777928         0    777928   0% /dev/shm
tmpfs                    777928      8540    769388   2% /run
tmpfs                    777928         0    777928   0% /sys/fs/cgroup
/dev/mapper/vg00-home  14987616     41000  14162232   1% /home
192.168.1.5:/opensuse 301545472 266834944  19369984  94% /data
[root@linux-world ~]#
</code></pre><h3 id="例11-在-df-命令的輸出中只打印特定的字段" tabindex="-1">例11：在 df 命令的輸出中只打印特定的字段 <a class="header-anchor" href="#例11-在-df-命令的輸出中只打印特定的字段" aria-label="Permalink to “例11：在 df 命令的輸出中只打印特定的字段”">​</a></h3><p><code>-output={field_name1,field_name2...}</code> 選項用於顯示 df 命令某些字段的輸出。</p><p>可用的字段名有: <code>source</code>, <code>fstype</code>, <code>itotal</code>, <code>iused</code>, <code>iavail</code>, <code>ipcent</code>, <code>size</code>, <code>used</code>, <code>avail</code>, <code>pcent</code> 和 <code>target</code></p><pre><code>[root@linux-world ~]# df --output=fstype,size,iused
Type     1K-blocks  IUsed
ext4      17003304  22275
devtmpfs    771876    357
tmpfs       777928      1
tmpfs       777928    423
tmpfs       777928     13
ext4      14987616     15
ext3        487652    337
ext3       9948012   1373
ext3      14987656     11
nfs4     301545472 451099
[root@linux-world ~]#
</code></pre><hr>`,52)),p("p",null,[e[1]||(e[1]=o("via: ",-1)),d(n,{href:"http://www.linuxtechi.com/11-df-command-examples-in-linux/"},{default:s(()=>[...e[0]||(e[0]=[o("http://www.linuxtechi.com/11-df-command-examples-in-linux/",-1)])]),_:1})]),p("p",null,[e[5]||(e[5]=o("作者：",-1)),d(n,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:s(()=>[...e[2]||(e[2]=[o("Pradeep Kumar",-1)])]),_:1}),e[6]||(e[6]=o(" 譯者：",-1)),d(n,{href:"https://github.com/strugglingyouth"},{default:s(()=>[...e[3]||(e[3]=[o("strugglingyouth",-1)])]),_:1}),e[7]||(e[7]=o(" 校對：",-1)),d(n,{href:"https://github.com/wxy"},{default:s(()=>[...e[4]||(e[4]=[o("wxy",-1)])]),_:1})]),p("p",null,[e[10]||(e[10]=o("本文由 ",-1)),d(n,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[8]||(e[8]=[o("LCTT",-1)])]),_:1}),e[11]||(e[11]=o(" 原創編譯，",-1)),d(n,{href:"https://linux.cn/"},{default:s(()=>[...e[9]||(e[9]=[o("Linux中國",-1)])]),_:1}),e[12]||(e[12]=o(" 榮譽推出",-1))])])}const y=t(m,[["render",f]]);export{b as __pageData,y as default};
