import{_ as i,a0 as l,w as o,s as c,ao as r,I as p,x as n,a1 as e,A as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘 | LCTT x X-CMD","titleTemplate":false,"description":"如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150126 How to Add a New Hard Disk Without Rebooting on CentOS 7 or RHEL 7","title":"如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘","tag":"201503","desc":""},"relativePath":"201503/20150126 How to Add a New Hard Disk Without Rebooting on CentOS 7 or RHEL 7.md","filePath":"[post].md"}'),d={name:"201503/20150126 How to Add a New Hard Disk Without Rebooting on CentOS 7 or RHEL 7.md"};function b(y,s,h,m,u,g){const a=l("Link");return o(),c("div",null,[s[13]||(s[13]=r(`<h1 id="如何不用重启在centos-7-rhel-7虚拟机中添加一块新硬盘" tabindex="-1">如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘 <a class="header-anchor" href="#如何不用重启在centos-7-rhel-7虚拟机中添加一块新硬盘" aria-label="Permalink to “如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘”">​</a></h1><p>通常在你在虚拟机中添加一块新硬盘时，你可能会看到新硬盘没有自动加载。这是因为连接到硬盘的SCSI总线需要重新扫描来使得新硬盘可见。这里有一个简单的命令来重新扫描SCSI总线和SCSI设备。下面这几步在CentOS 7 和RHEL 7 中测试过。</p><ol><li><p>在ESXi或者vCenter中添加一块新的20G硬盘：</p><p><img src="http://www.ehowstuff.com/wp-content/uploads/2015/01/Create-new-LVM-CentOS7-1.png" alt=""></p></li><li><p>显示当前磁盘分区：</p><pre><code> [root@centos7 ~]# fdisk -l
</code></pre></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    Disk /dev/sda: 32.2 GB, 32212254720 bytes, 62914560 sectors</span></span>
<span class="line"><span>    Units = sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>    Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    Disk label type: dos</span></span>
<span class="line"><span>    Disk identifier: 0x0006b96a</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>       Device Boot      Start         End      Blocks   Id  System</span></span>
<span class="line"><span>    /dev/sda1   *        2048     1026047      512000   83  Linux</span></span>
<span class="line"><span>    /dev/sda2         1026048    62914559    30944256   8e  Linux LVM</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Disk /dev/mapper/centos-swap: 2147 MB, 2147483648 bytes, 4194304 sectors</span></span>
<span class="line"><span>    Units = sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>    Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Disk /dev/mapper/centos-root: 29.5 GB, 29536288768 bytes, 57688064 sectors</span></span>
<span class="line"><span>    Units = sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>    Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span></code></pre></div><ol start="3"><li><p>确定主机总线号</p><pre><code> [root@centos7 ~]# ls /sys/class/scsi_host/
 host0  host1  host2
</code></pre></li><li><p>重新扫描SCSI总线来添加设备</p><pre><code> [root@centos7 ~]# echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host0/scan
 [root@centos7 ~]# echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host1/scan
 [root@centos7 ~]# echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host2/scan
</code></pre></li><li><p>验证磁盘和分区并确保20GB硬盘已经添加了。在本例中，出现了下面这行 “<code>Disk /dev/sdb: 21.5 GB, 21474836480 bytes, 41943040 sectors</code>” 并且可以确认没有重启服务器就添加了新盘：</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    [root@centos7 ~]# fdisk -l</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Disk /dev/sda: 32.2 GB, 32212254720 bytes, 62914560 sectors</span></span>
<span class="line"><span>    Units = sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>    Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    Disk label type: dos</span></span>
<span class="line"><span>    Disk identifier: 0x0006b96a</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>       Device Boot      Start         End      Blocks   Id  System</span></span>
<span class="line"><span>    /dev/sda1   *        2048     1026047      512000   83  Linux</span></span>
<span class="line"><span>    /dev/sda2         1026048    62914559    30944256   8e  Linux LVM</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Disk /dev/mapper/centos-swap: 2147 MB, 2147483648 bytes, 4194304 sectors</span></span>
<span class="line"><span>    Units = sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>    Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Disk /dev/mapper/centos-root: 29.5 GB, 29536288768 bytes, 57688064 sectors</span></span>
<span class="line"><span>    Units = sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>    Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Disk /dev/sdb: 21.5 GB, 21474836480 bytes, 41943040 sectors</span></span>
<span class="line"><span>    Units = sectors of 1 * 512 = 512 bytes</span></span>
<span class="line"><span>    Sector size (logical/physical): 512 bytes / 512 bytes</span></span>
<span class="line"><span>    I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span></code></pre></div><hr>`,7)),p("p",null,[s[1]||(s[1]=n("via: ",-1)),e(a,{href:"http://www.ehowstuff.com/how-to-add-a-new-hard-disk-without-rebooting-on-centos-7-rhel-7/"},{default:t(()=>[...s[0]||(s[0]=[n("http://www.ehowstuff.com/how-to-add-a-new-hard-disk-without-rebooting-on-centos-7-rhel-7/",-1)])]),_:1})]),p("p",null,[s[5]||(s[5]=n("作者：",-1)),e(a,{href:"http://www.ehowstuff.com/author/mhstar/"},{default:t(()=>[...s[2]||(s[2]=[n("skytech",-1)])]),_:1}),s[6]||(s[6]=n(" 译者：",-1)),e(a,{href:"https://github.com/geekpi"},{default:t(()=>[...s[3]||(s[3]=[n("geekpi",-1)])]),_:1}),s[7]||(s[7]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:t(()=>[...s[4]||(s[4]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[10]||(s[10]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[8]||(s[8]=[n("LCTT",-1)])]),_:1}),s[11]||(s[11]=n(" 原创翻译，",-1)),e(a,{href:"http://linux.cn/"},{default:t(()=>[...s[9]||(s[9]=[n("Linux中国",-1)])]),_:1}),s[12]||(s[12]=n(" 荣誉推出",-1))])])}const w=i(d,[["render",b]]);export{C as __pageData,w as default};
