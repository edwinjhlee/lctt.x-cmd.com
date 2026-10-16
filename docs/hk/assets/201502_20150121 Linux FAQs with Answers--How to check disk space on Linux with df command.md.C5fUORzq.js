import{_ as r,a0 as a,w as p,s as u,I as o,x as n,a1 as s,A as d,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const M=JSON.parse('{"title":"在 Linux 下你所不知道的 df 命令的那些功能 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 下你所不知道的 df 命令的那些功能 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 下你所不知道的 df 命令的那些功能 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 下你所不知道的 df 命令的那些功能 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20150121 Linux FAQs with Answers--How to check disk space on Linux with df command","title":"在 Linux 下你所不知道的 df 命令的那些功能","tag":"201502","desc":""},"relativePath":"201502/20150121 Linux FAQs with Answers--How to check disk space on Linux with df command.md","filePath":"[post].md"}'),l={name:"201502/20150121 Linux FAQs with Answers--How to check disk space on Linux with df command.md"};function f(m,e,c,h,x,b){const t=a("Link");return p(),u("div",null,[e[14]||(e[14]=o("h1",{id:"在-linux-下你所不知道的-df-命令的那些功能",tabindex:"-1"},[n("在 Linux 下你所不知道的 df 命令的那些功能 "),o("a",{class:"header-anchor",href:"#在-linux-下你所不知道的-df-命令的那些功能","aria-label":"Permalink to “在 Linux 下你所不知道的 df 命令的那些功能”"},"​")],-1)),e[15]||(e[15]=o("blockquote",null,[o("p",null,[o("strong",null,"問題"),n(": 我知道在Linux上我可以用df命令來查看磁盤使用空間。你能告訴我df命令的實際例子使我可以最大限度得利用它嗎？")])],-1)),o("p",null,[e[1]||(e[1]=n("對於磁盤存儲方面，有很多命令列或基於GUI的工具，它可以告訴你關於當前磁盤空間的使用情況。這些工具用各種人們可讀的格式展示磁盤利用率的詳細信息，比如易於理解的總結，詳細的統計信息或直觀的",-1)),s(t,{href:"http://xmodulo.com/visualize-disk-usage-linux.html"},{default:d(()=>[...e[0]||(e[0]=[n("可視化報告",-1)])]),_:1}),e[2]||(e[2]=n("。如果你只想知道不同文件系統有多少空閒的磁盤空間，那麼df命令可能是你所需要的。",-1))]),e[16]||(e[16]=i(`<p><img src="https://farm9.staticflickr.com/8632/15505309473_51bffec3f1_b.jpg" alt=""></p><p>df命令可以展示任何“mounted”文件系統的磁盤利用率。該命令可以用不同的方式調用。這裏有一些<strong>有用的</strong> df <strong>命令例子</strong>.</p><h3 id="用人們可讀的方式展示" tabindex="-1">用人們可讀的方式展示 <a class="header-anchor" href="#用人們可讀的方式展示" aria-label="Permalink to “用人們可讀的方式展示”">​</a></h3><p>默認情況下，df命令用1K為塊來展示磁盤空間，這看起來不是很直觀。“-h”參數使df用更可讀的方式打印磁盤空間（例如 100K，200M，3G）。</p><pre><code>$ df -h
</code></pre><hr><pre><code>Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/ubuntu-root  909G  565G  299G  66% /
none                     4.0K     0  4.0K   0% /sys/fs/cgroup
udev                     3.9G  4.0K  3.9G   1% /dev
tmpfs                    785M  1.2M  784M   1% /run
none                     5.0M     0  5.0M   0% /run/lock
none                     3.9G   63M  3.8G   2% /run/shm
none                     100M   48K  100M   1% /run/user
/dev/sda1                228M   98M  118M  46% /boot
</code></pre><h3 id="展示inode使用情況" tabindex="-1">展示Inode使用情況 <a class="header-anchor" href="#展示inode使用情況" aria-label="Permalink to “展示Inode使用情況”">​</a></h3><p>當你監視磁盤使用情況時，你必須注意的不僅僅是磁盤空間還有“inode”的使用情況。在Linux中，inode是用來存儲特定文件的元數據的一種數據結構，在創建一個文件系統時，inode的預先定義數量將被分配。這意味着，<strong>一個文件系統可能耗盡空間不只是因為大文件用完了所有可用空間，也可能是因為很多小文件用完了所有可能的inode</strong>。用“-i”選項展示inode使用情況。</p><pre><code>$ df -i
</code></pre><hr><pre><code>Filesystem                Inodes   IUsed    IFree IUse% Mounted on
/dev/mapper/ubuntu-root 60514304 1217535 59296769    3% /
none                     1004417      13  1004404    1% /sys/fs/cgroup
udev                     1000623     552  1000071    1% /dev
tmpfs                    1004417     608  1003809    1% /run
none                     1004417      11  1004406    1% /run/lock
none                     1004417     288  1004129    1% /run/shm
none                     1004417      28  1004389    1% /run/user
/dev/sda1                 124496     346   124150    1% /boot
</code></pre><h3 id="展示磁盤總利用率" tabindex="-1">展示磁盤總利用率 <a class="header-anchor" href="#展示磁盤總利用率" aria-label="Permalink to “展示磁盤總利用率”">​</a></h3><p>默認情況下， df命令顯示磁盤的單個文件系統的利用率。如果你想知道的所有文件系統的總磁盤使用量，增加“ --total ”選項（見最下面的彙總行）。</p><pre><code>$ df -h --total
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
</code></pre><h3 id="展示文件系統類型" tabindex="-1">展示文件系統類型 <a class="header-anchor" href="#展示文件系統類型" aria-label="Permalink to “展示文件系統類型”">​</a></h3><p>默認情況下，df命令不顯示文件系統類型信息。用“-T”選項來添加文件系統信息到輸出中。</p><pre><code>$ df -T
</code></pre><hr><pre><code>Filesystem              Type     1K-blocks      Used Available Use% Mounted on
/dev/mapper/ubuntu-root ext4     952893348 591583292 312882844  66% /
none                    tmpfs            4         0         4   0% /sys/fs/cgroup
udev                    devtmpfs   4002492         4   4002488   1% /dev
tmpfs                   tmpfs       803536      1196    802340   1% /run
none                    tmpfs         5120         0      5120   0% /run/lock
none                    tmpfs      4017668     60176   3957492   2% /run/shm
none                    tmpfs       102400        48    102352   1% /run/user
/dev/sda1               ext2        233191    100025    120725  46% /boot
</code></pre><h3 id="包含或排除特定的文件系統類型" tabindex="-1">包含或排除特定的文件系統類型 <a class="header-anchor" href="#包含或排除特定的文件系統類型" aria-label="Permalink to “包含或排除特定的文件系統類型”">​</a></h3><p>如果你想知道特定文件系統類型的剩餘空間，用 <code>-t &lt;type&gt;</code> 選項。你可以多次使用這個選項來包含更多的文件系統類型。</p><pre><code>$ df -t ext2 -t ext4
</code></pre><hr><pre><code>Filesystem              1K-blocks      Used Available Use% Mounted on
/dev/mapper/ubuntu-root 952893348 591583380 312882756  66% /
/dev/sda1                  233191    100025    120725  46% /boot
</code></pre><p>排除特定的文件系統類型，用 <code>-x &lt;type&gt;</code> 選項。同樣，你可以用這個選項多次來排除多種文件系統類型。</p><pre><code>$ df -x tmpfs
</code></pre><h3 id="顯示一個具體的掛載點磁盤使用情況" tabindex="-1">顯示一個具體的掛載點磁盤使用情況 <a class="header-anchor" href="#顯示一個具體的掛載點磁盤使用情況" aria-label="Permalink to “顯示一個具體的掛載點磁盤使用情況”">​</a></h3><p>如果你用df指定一個掛載點，它將報告掛載在那個地方的文件系統的磁盤使用情況。如果你指定一個普通文件（或一個目錄）而不是一個掛載點，df將顯示包含這個文件（或目錄）的文件系統的磁盤利用率。</p><pre><code>$ df /
</code></pre><hr><pre><code>Filesystem              1K-blocks      Used Available Use% Mounted on
/dev/mapper/ubuntu-root 952893348 591583528 312882608  66% /
</code></pre><hr><pre><code>$ df /home/dev
</code></pre><hr><pre><code>Filesystem              1K-blocks      Used Available Use% Mounted on
/dev/mapper/ubuntu-root 952893348 591583528 312882608  66% /
</code></pre><h3 id="顯示虛擬文件系統的信息" tabindex="-1">顯示虛擬文件系統的信息 <a class="header-anchor" href="#顯示虛擬文件系統的信息" aria-label="Permalink to “顯示虛擬文件系統的信息”">​</a></h3><p>如果你想顯示所有已經存在的文件系統（包括虛擬文件系統）的磁盤空間信息，用“-a”選項。這裏，虛擬文件系統是指沒有相對應的物理設備的假文件系統，例如，tmpfs，cgroup虛擬文件系統或FUSE文件安系統。這些虛擬文件系統大小為0，不用“-a”選項將不會被報告出來。</p><pre><code>$ df -a
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
</code></pre><hr>`,44)),o("p",null,[e[4]||(e[4]=n("via: ",-1)),s(t,{href:"http://ask.xmodulo.com/check-disk-space-linux-df-command.html"},{default:d(()=>[...e[3]||(e[3]=[n("http://ask.xmodulo.com/check-disk-space-linux-df-command.html",-1)])]),_:1})]),o("p",null,[e[7]||(e[7]=n("譯者：",-1)),s(t,{href:"https://github.com/mtunique"},{default:d(()=>[...e[5]||(e[5]=[n("mtunique",-1)])]),_:1}),e[8]||(e[8]=n(" 校對：",-1)),s(t,{href:"https://github.com/wxy"},{default:d(()=>[...e[6]||(e[6]=[n("wxy",-1)])]),_:1})]),o("p",null,[e[11]||(e[11]=n("本文由 ",-1)),s(t,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[9]||(e[9]=[n("LCTT",-1)])]),_:1}),e[12]||(e[12]=n(" 原創翻譯，",-1)),s(t,{href:"http://linux.cn/"},{default:d(()=>[...e[10]||(e[10]=[n("Linux中國",-1)])]),_:1}),e[13]||(e[13]=n(" 榮譽推出",-1))])])}const g=r(l,[["render",f]]);export{M as __pageData,g as default};
