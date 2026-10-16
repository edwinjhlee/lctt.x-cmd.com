import{_ as r,a0 as a,w as p,s as u,I as o,x as n,a1 as s,A as d,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const M=JSON.parse('{"title":"在 Linux 下你所不知道的 df 命令的那些功能 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 下你所不知道的 df 命令的那些功能 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 下你所不知道的 df 命令的那些功能 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 下你所不知道的 df 命令的那些功能 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20150121 Linux FAQs with Answers--How to check disk space on Linux with df command","title":"在 Linux 下你所不知道的 df 命令的那些功能","tag":"201502","desc":""},"relativePath":"201502/20150121 Linux FAQs with Answers--How to check disk space on Linux with df command.md","filePath":"[post].md"}'),l={name:"201502/20150121 Linux FAQs with Answers--How to check disk space on Linux with df command.md"};function f(m,e,c,h,x,b){const t=a("Link");return p(),u("div",null,[e[14]||(e[14]=o("h1",{id:"在-linux-下你所不知道的-df-命令的那些功能",tabindex:"-1"},[n("在 Linux 下你所不知道的 df 命令的那些功能 "),o("a",{class:"header-anchor",href:"#在-linux-下你所不知道的-df-命令的那些功能","aria-label":"Permalink to “在 Linux 下你所不知道的 df 命令的那些功能”"},"​")],-1)),e[15]||(e[15]=o("blockquote",null,[o("p",null,[o("strong",null,"问题"),n(": 我知道在Linux上我可以用df命令来查看磁盘使用空间。你能告诉我df命令的实际例子使我可以最大限度得利用它吗？")])],-1)),o("p",null,[e[1]||(e[1]=n("对于磁盘存储方面，有很多命令行或基于GUI的工具，它可以告诉你关于当前磁盘空间的使用情况。这些工具用各种人们可读的格式展示磁盘利用率的详细信息，比如易于理解的总结，详细的统计信息或直观的",-1)),s(t,{href:"http://xmodulo.com/visualize-disk-usage-linux.html"},{default:d(()=>[...e[0]||(e[0]=[n("可视化报告",-1)])]),_:1}),e[2]||(e[2]=n("。如果你只想知道不同文件系统有多少空闲的磁盘空间，那么df命令可能是你所需要的。",-1))]),e[16]||(e[16]=i(`<p><img src="https://farm9.staticflickr.com/8632/15505309473_51bffec3f1_b.jpg" alt=""></p><p>df命令可以展示任何“mounted”文件系统的磁盘利用率。该命令可以用不同的方式调用。这里有一些<strong>有用的</strong> df <strong>命令例子</strong>.</p><h3 id="用人们可读的方式展示" tabindex="-1">用人们可读的方式展示 <a class="header-anchor" href="#用人们可读的方式展示" aria-label="Permalink to “用人们可读的方式展示”">​</a></h3><p>默认情况下，df命令用1K为块来展示磁盘空间，这看起来不是很直观。“-h”参数使df用更可读的方式打印磁盘空间（例如 100K，200M，3G）。</p><pre><code>$ df -h
</code></pre><hr><pre><code>Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/ubuntu-root  909G  565G  299G  66% /
none                     4.0K     0  4.0K   0% /sys/fs/cgroup
udev                     3.9G  4.0K  3.9G   1% /dev
tmpfs                    785M  1.2M  784M   1% /run
none                     5.0M     0  5.0M   0% /run/lock
none                     3.9G   63M  3.8G   2% /run/shm
none                     100M   48K  100M   1% /run/user
/dev/sda1                228M   98M  118M  46% /boot
</code></pre><h3 id="展示inode使用情况" tabindex="-1">展示Inode使用情况 <a class="header-anchor" href="#展示inode使用情况" aria-label="Permalink to “展示Inode使用情况”">​</a></h3><p>当你监视磁盘使用情况时，你必须注意的不仅仅是磁盘空间还有“inode”的使用情况。在Linux中，inode是用来存储特定文件的元数据的一种数据结构，在创建一个文件系统时，inode的预先定义数量将被分配。这意味着，<strong>一个文件系统可能耗尽空间不只是因为大文件用完了所有可用空间，也可能是因为很多小文件用完了所有可能的inode</strong>。用“-i”选项展示inode使用情况。</p><pre><code>$ df -i
</code></pre><hr><pre><code>Filesystem                Inodes   IUsed    IFree IUse% Mounted on
/dev/mapper/ubuntu-root 60514304 1217535 59296769    3% /
none                     1004417      13  1004404    1% /sys/fs/cgroup
udev                     1000623     552  1000071    1% /dev
tmpfs                    1004417     608  1003809    1% /run
none                     1004417      11  1004406    1% /run/lock
none                     1004417     288  1004129    1% /run/shm
none                     1004417      28  1004389    1% /run/user
/dev/sda1                 124496     346   124150    1% /boot
</code></pre><h3 id="展示磁盘总利用率" tabindex="-1">展示磁盘总利用率 <a class="header-anchor" href="#展示磁盘总利用率" aria-label="Permalink to “展示磁盘总利用率”">​</a></h3><p>默认情况下， df命令显示磁盘的单个文件系统的利用率。如果你想知道的所有文件系统的总磁盘使用量，增加“ --total ”选项（见最下面的汇总行）。</p><pre><code>$ df -h --total
</code></pre><hr><pre><code>Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/ubuntu-root  909G  565G  299G  66% /
none                     4.0K     0  4.0K   0% /sys/fs/cgroup
udev                     3.9G  4.0K  3.9G   1% /dev
tmpfs                    785M  1.2M  784M   1% /run
none                     5.0M     0  5.0M   0% /run/lock
none                     3.9G   62M  3.8G   2% /run/shm
none                     100M   48K  100M   1% /run/user
/dev/sda1                228M   98M  118M  46% /boot
total                    918G  565G  307G  65% -
</code></pre><h3 id="展示文件系统类型" tabindex="-1">展示文件系统类型 <a class="header-anchor" href="#展示文件系统类型" aria-label="Permalink to “展示文件系统类型”">​</a></h3><p>默认情况下，df命令不显示文件系统类型信息。用“-T”选项来添加文件系统信息到输出中。</p><pre><code>$ df -T
</code></pre><hr><pre><code>Filesystem              Type     1K-blocks      Used Available Use% Mounted on
/dev/mapper/ubuntu-root ext4     952893348 591583292 312882844  66% /
none                    tmpfs            4         0         4   0% /sys/fs/cgroup
udev                    devtmpfs   4002492         4   4002488   1% /dev
tmpfs                   tmpfs       803536      1196    802340   1% /run
none                    tmpfs         5120         0      5120   0% /run/lock
none                    tmpfs      4017668     60176   3957492   2% /run/shm
none                    tmpfs       102400        48    102352   1% /run/user
/dev/sda1               ext2        233191    100025    120725  46% /boot
</code></pre><h3 id="包含或排除特定的文件系统类型" tabindex="-1">包含或排除特定的文件系统类型 <a class="header-anchor" href="#包含或排除特定的文件系统类型" aria-label="Permalink to “包含或排除特定的文件系统类型”">​</a></h3><p>如果你想知道特定文件系统类型的剩余空间，用 <code>-t &lt;type&gt;</code> 选项。你可以多次使用这个选项来包含更多的文件系统类型。</p><pre><code>$ df -t ext2 -t ext4
</code></pre><hr><pre><code>Filesystem              1K-blocks      Used Available Use% Mounted on
/dev/mapper/ubuntu-root 952893348 591583380 312882756  66% /
/dev/sda1                  233191    100025    120725  46% /boot
</code></pre><p>排除特定的文件系统类型，用 <code>-x &lt;type&gt;</code> 选项。同样，你可以用这个选项多次来排除多种文件系统类型。</p><pre><code>$ df -x tmpfs
</code></pre><h3 id="显示一个具体的挂载点磁盘使用情况" tabindex="-1">显示一个具体的挂载点磁盘使用情况 <a class="header-anchor" href="#显示一个具体的挂载点磁盘使用情况" aria-label="Permalink to “显示一个具体的挂载点磁盘使用情况”">​</a></h3><p>如果你用df指定一个挂载点，它将报告挂载在那个地方的文件系统的磁盘使用情况。如果你指定一个普通文件（或一个目录）而不是一个挂载点，df将显示包含这个文件（或目录）的文件系统的磁盘利用率。</p><pre><code>$ df /
</code></pre><hr><pre><code>Filesystem              1K-blocks      Used Available Use% Mounted on
/dev/mapper/ubuntu-root 952893348 591583528 312882608  66% /
</code></pre><hr><pre><code>$ df /home/dev
</code></pre><hr><pre><code>Filesystem              1K-blocks      Used Available Use% Mounted on
/dev/mapper/ubuntu-root 952893348 591583528 312882608  66% /
</code></pre><h3 id="显示虚拟文件系统的信息" tabindex="-1">显示虚拟文件系统的信息 <a class="header-anchor" href="#显示虚拟文件系统的信息" aria-label="Permalink to “显示虚拟文件系统的信息”">​</a></h3><p>如果你想显示所有已经存在的文件系统（包括虚拟文件系统）的磁盘空间信息，用“-a”选项。这里，虚拟文件系统是指没有相对应的物理设备的假文件系统，例如，tmpfs，cgroup虚拟文件系统或FUSE文件安系统。这些虚拟文件系统大小为0，不用“-a”选项将不会被报告出来。</p><pre><code>$ df -a
</code></pre><hr><pre><code>Filesystem              1K-blocks      Used Available Use% Mounted on
/dev/mapper/ubuntu-root 952893348 591578716 312887420  66% /
proc                            0         0         0    - /proc
sysfs                           0         0         0    - /sys
none                            4         0         4   0% /sys/fs/cgroup
none                            0         0         0    - /sys/fs/fuse/connections
none                            0         0         0    - /sys/kernel/debug
none                            0         0         0    - /sys/kernel/security
udev                      4002492         4   4002488   1% /dev
devpts                          0         0         0    - /dev/pts
tmpfs                      803536      1196    802340   1% /run
none                         5120         0      5120   0% /run/lock
none                      4017668     58144   3959524   2% /run/shm
none                       102400        48    102352   1% /run/user
none                            0         0         0    - /sys/fs/pstore
cgroup                          0         0         0    - /sys/fs/cgroup/cpuset
cgroup                          0         0         0    - /sys/fs/cgroup/hugetlb
/dev/sda1                  233191    100025    120725  46% /boot
vmware-vmblock                  0         0         0    - /run/vmblock-fuse
</code></pre><hr>`,44)),o("p",null,[e[4]||(e[4]=n("via: ",-1)),s(t,{href:"http://ask.xmodulo.com/check-disk-space-linux-df-command.html"},{default:d(()=>[...e[3]||(e[3]=[n("http://ask.xmodulo.com/check-disk-space-linux-df-command.html",-1)])]),_:1})]),o("p",null,[e[7]||(e[7]=n("译者：",-1)),s(t,{href:"https://github.com/mtunique"},{default:d(()=>[...e[5]||(e[5]=[n("mtunique",-1)])]),_:1}),e[8]||(e[8]=n(" 校对：",-1)),s(t,{href:"https://github.com/wxy"},{default:d(()=>[...e[6]||(e[6]=[n("wxy",-1)])]),_:1})]),o("p",null,[e[11]||(e[11]=n("本文由 ",-1)),s(t,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[9]||(e[9]=[n("LCTT",-1)])]),_:1}),e[12]||(e[12]=n(" 原创翻译，",-1)),s(t,{href:"http://linux.cn/"},{default:d(()=>[...e[10]||(e[10]=[n("Linux中国",-1)])]),_:1}),e[13]||(e[13]=n(" 荣誉推出",-1))])])}const g=r(l,[["render",f]]);export{M as __pageData,g as default};
