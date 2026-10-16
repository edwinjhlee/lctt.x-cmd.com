import{_ as i,a0 as l,w as o,s as c,ao as r,I as p,x as n,a1 as e,A as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"如何不用重啓在CentOS 7/ RHEL 7虛擬機中添加一塊新硬盤 | LCTT x X-CMD","titleTemplate":false,"description":"如何不用重啓在CentOS 7/ RHEL 7虛擬機中添加一塊新硬盤 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何不用重啓在CentOS 7/ RHEL 7虛擬機中添加一塊新硬盤 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何不用重啓在CentOS 7/ RHEL 7虛擬機中添加一塊新硬盤 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150126 How to Add a New Hard Disk Without Rebooting on CentOS 7 or RHEL 7","title":"如何不用重啓在CentOS 7/ RHEL 7虛擬機中添加一塊新硬盤","tag":"201503","desc":""},"relativePath":"201503/20150126 How to Add a New Hard Disk Without Rebooting on CentOS 7 or RHEL 7.md","filePath":"[post].md"}'),d={name:"201503/20150126 How to Add a New Hard Disk Without Rebooting on CentOS 7 or RHEL 7.md"};function b(y,s,h,m,u,g){const a=l("Link");return o(),c("div",null,[s[13]||(s[13]=r(`<h1 id="如何不用重啓在centos-7-rhel-7虛擬機中添加一塊新硬盤" tabindex="-1">如何不用重啓在CentOS 7/ RHEL 7虛擬機中添加一塊新硬盤 <a class="header-anchor" href="#如何不用重啓在centos-7-rhel-7虛擬機中添加一塊新硬盤" aria-label="Permalink to “如何不用重啓在CentOS 7/ RHEL 7虛擬機中添加一塊新硬盤”">​</a></h1><p>通常在你在虛擬機中添加一塊新硬盤時，你可能會看到新硬盤沒有自動加載。這是因為連接到硬盤的SCSI總線需要重新掃描來使得新硬盤可見。這裏有一個簡單的命令來重新掃描SCSI總線和SCSI設備。下面這幾步在CentOS 7 和RHEL 7 中測試過。</p><ol><li><p>在ESXi或者vCenter中添加一塊新的20G硬盤：</p><p><img src="http://www.ehowstuff.com/wp-content/uploads/2015/01/Create-new-LVM-CentOS7-1.png" alt=""></p></li><li><p>顯示當前磁盤分區：</p><pre><code> [root@centos7 ~]# fdisk -l
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
<span class="line"><span>    I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span></code></pre></div><ol start="3"><li><p>確定主機總線號</p><pre><code> [root@centos7 ~]# ls /sys/class/scsi_host/
 host0  host1  host2
</code></pre></li><li><p>重新掃描SCSI總線來添加設備</p><pre><code> [root@centos7 ~]# echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host0/scan
 [root@centos7 ~]# echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host1/scan
 [root@centos7 ~]# echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host2/scan
</code></pre></li><li><p>驗證磁盤和分區並確保20GB硬盤已經添加了。在本例中，出現了下面這行 “<code>Disk /dev/sdb: 21.5 GB, 21474836480 bytes, 41943040 sectors</code>” 並且可以確認沒有重啓服務器就添加了新盤：</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    [root@centos7 ~]# fdisk -l</span></span>
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
<span class="line"><span>    I/O size (minimum/optimal): 512 bytes / 512 bytes</span></span></code></pre></div><hr>`,7)),p("p",null,[s[1]||(s[1]=n("via: ",-1)),e(a,{href:"http://www.ehowstuff.com/how-to-add-a-new-hard-disk-without-rebooting-on-centos-7-rhel-7/"},{default:t(()=>[...s[0]||(s[0]=[n("http://www.ehowstuff.com/how-to-add-a-new-hard-disk-without-rebooting-on-centos-7-rhel-7/",-1)])]),_:1})]),p("p",null,[s[5]||(s[5]=n("作者：",-1)),e(a,{href:"http://www.ehowstuff.com/author/mhstar/"},{default:t(()=>[...s[2]||(s[2]=[n("skytech",-1)])]),_:1}),s[6]||(s[6]=n(" 譯者：",-1)),e(a,{href:"https://github.com/geekpi"},{default:t(()=>[...s[3]||(s[3]=[n("geekpi",-1)])]),_:1}),s[7]||(s[7]=n(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:t(()=>[...s[4]||(s[4]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[10]||(s[10]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[8]||(s[8]=[n("LCTT",-1)])]),_:1}),s[11]||(s[11]=n(" 原創翻譯，",-1)),e(a,{href:"http://linux.cn/"},{default:t(()=>[...s[9]||(s[9]=[n("Linux中國",-1)])]),_:1}),s[12]||(s[12]=n(" 榮譽推出",-1))])])}const w=i(d,[["render",b]]);export{C as __pageData,w as default};
