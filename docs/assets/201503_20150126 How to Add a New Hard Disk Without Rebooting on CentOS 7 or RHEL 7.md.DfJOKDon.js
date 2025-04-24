import{_ as i,W as o,s as l,u as c,ah as r,I as t,w as n,Z as e,A as p}from"./chunks/framework.B4JzB-Td.js";import"./chunks/theme.Xs8fIzCW.js";const w=JSON.parse('{"title":"如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘 | LCTT x X-CMD","titleTemplate":false,"description":"如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-blog","head":[["meta",{"name":"og:title","content":"如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150126 How to Add a New Hard Disk Without Rebooting on CentOS 7 or RHEL 7","title":"如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘","tag":"201503"},"relativePath":"201503/20150126 How to Add a New Hard Disk Without Rebooting on CentOS 7 or RHEL 7.md","filePath":"[post].md"}'),d={name:"201503/20150126 How to Add a New Hard Disk Without Rebooting on CentOS 7 or RHEL 7.md"};function b(m,s,y,u,h,f){const a=o("Link");return c(),l("div",null,[s[13]||(s[13]=r(`<h1 id="如何不用重启在centos-7-rhel-7虚拟机中添加一块新硬盘" tabindex="-1">如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘 <a class="header-anchor" href="#如何不用重启在centos-7-rhel-7虚拟机中添加一块新硬盘" aria-label="Permalink to 如何不用重启在CentOS 7/ RHEL 7虚拟机中添加一块新硬盘">​</a></h1><p>通常在你在虚拟机中添加一块新硬盘时，你可能会看到新硬盘没有自动加载。这是因为连接到硬盘的SCSI总线需要重新扫描来使得新硬盘可见。这里有一个简单的命令来重新扫描SCSI总线和SCSI设备。下面这几步在CentOS 7 和RHEL 7 中测试过。</p><ol><li><p>在ESXi或者vCenter中添加一块新的20G硬盘：</p><p><img src="http://www.ehowstuff.com/wp-content/uploads/2015/01/Create-new-LVM-CentOS7-1.png" alt=""></p></li><li><p>显示当前磁盘分区：</p><pre><code> [root@centos7 ~]# fdisk -l
</code></pre></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    Disk /dev/sda: 32.2 GB, 32212254720 bytes, 62914560 sectors</span></span>
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
</code></pre></li><li><p>验证磁盘和分区并确保20GB硬盘已经添加了。在本例中，出现了下面这行 “<code>Disk /dev/sdb: 21.5 GB, 21474836480 bytes, 41943040 sectors</code>” 并且可以确认没有重启服务器就添加了新盘：</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    [root@centos7 ~]# fdisk -l</span></span>
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
<span class="line"><span>    I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span></code></pre></div><hr>`,7)),t("p",null,[s[1]||(s[1]=n("via: ")),e(a,{href:"http://www.ehowstuff.com/how-to-add-a-new-hard-disk-without-rebooting-on-centos-7-rhel-7/"},{default:p(()=>s[0]||(s[0]=[n("http://www.ehowstuff.com/how-to-add-a-new-hard-disk-without-rebooting-on-centos-7-rhel-7/")])),_:1})]),t("p",null,[s[5]||(s[5]=n("作者：")),e(a,{href:"http://www.ehowstuff.com/author/mhstar/"},{default:p(()=>s[2]||(s[2]=[n("skytech")])),_:1}),s[6]||(s[6]=n(" 译者：")),e(a,{href:"https://github.com/geekpi"},{default:p(()=>s[3]||(s[3]=[n("geekpi")])),_:1}),s[7]||(s[7]=n(" 校对：")),e(a,{href:"https://github.com/wxy"},{default:p(()=>s[4]||(s[4]=[n("wxy")])),_:1})]),t("p",null,[s[10]||(s[10]=n("本文由 ")),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>s[8]||(s[8]=[n("LCTT")])),_:1}),s[11]||(s[11]=n(" 原创翻译，")),e(a,{href:"http://linux.cn/"},{default:p(()=>s[9]||(s[9]=[n("Linux中国")])),_:1}),s[12]||(s[12]=n(" 荣誉推出"))])])}const S=i(d,[["render",b]]);export{w as __pageData,S as default};
