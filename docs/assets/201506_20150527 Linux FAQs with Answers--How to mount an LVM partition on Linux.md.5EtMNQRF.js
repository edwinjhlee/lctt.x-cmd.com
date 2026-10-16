import{_ as i,a0 as a,w as r,s as d,ao as u,I as p,x as e,a1 as o,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const c=JSON.parse('{"title":"Linux有问必答：如何在Linux中直接挂载LVM分区 | LCTT x X-CMD","titleTemplate":false,"description":"Linux有问必答：如何在Linux中直接挂载LVM分区 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux有问必答：如何在Linux中直接挂载LVM分区 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux有问必答：如何在Linux中直接挂载LVM分区 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150527 Linux FAQs with Answers--How to mount an LVM partition on Linux","title":"Linux有问必答：如何在Linux中直接挂载LVM分区","tag":"201506","desc":""},"relativePath":"201506/20150527 Linux FAQs with Answers--How to mount an LVM partition on Linux.md","filePath":"[post].md"}'),m={name:"201506/20150527 Linux FAQs with Answers--How to mount an LVM partition on Linux.md"};function l(L,t,f,x,v,V){const n=a("Link");return r(),d("div",null,[t[13]||(t[13]=u(`<h1 id="linux有问必答-如何在linux中直接挂载lvm分区" tabindex="-1">Linux有问必答：如何在Linux中直接挂载LVM分区 <a class="header-anchor" href="#linux有问必答-如何在linux中直接挂载lvm分区" aria-label="Permalink to “Linux有问必答：如何在Linux中直接挂载LVM分区”">​</a></h1><blockquote><p><strong>提问</strong>: 我有一个USB盘包含了LVM分区。 我想要在Linux中访问这些LVM分区。我该如何在Linux中挂载LVM分区？</p></blockquote><p>LVM是逻辑卷管理工具，它允许你使用逻辑卷和卷组的概念来管理磁盘空间。使用LVM相比传统分区最大的好处是弹性地为用户和程序分配空间而不用考虑每个物理磁盘的大小。</p><p>在LVM中，那些创建了逻辑分区的物理存储是传统的分区（比如：/dev/sda2，/dev/sdb1）。这些分区必须被初始化为“物理卷 PV”并加上卷标（如，“Linux LVM”）来使它们可以在LVM中使用。一旦分区被标记被LVM分区，你不能直接用mount命令挂载。</p><p>如果你尝试挂载一个LVM分区（比如/dev/sdb2）, 你会得到下面的错误。</p><pre><code>$ mount /dev/sdb2 /mnt
</code></pre><hr><pre><code>mount: unknown filesystem type &#39;LVM2_member&#39;
</code></pre><p><img src="https://farm8.staticflickr.com/7696/17749902190_0a6d36821f_b.jpg" alt=""></p><p>要正确地挂载LVM分区，你必须挂载分区中创建的“逻辑卷”。下面就是如何做的。</p><p>首先，用下面的命令检查可用的卷组：</p><pre><code>$ sudo pvs 
</code></pre><hr><pre><code>PV         VG                           Fmt  Attr PSize   PFree
/dev/sdb2  vg_ezsetupsystem40a8f02fadd0 lvm2 a--  237.60g    0 
</code></pre><p><img src="https://farm8.staticflickr.com/7657/17938136831_d9320b7bfc_b.jpg" alt=""></p><p>物理卷的名字和卷组的名字分别在PV和VG列的下面。本例中，只有一个创建在dev/sdb2下的组“vg_ezsetupsystem40a8f02fadd0”。</p><p>接下来检查卷组中存在的逻辑卷，使用lvdisplay命令：</p><pre><code>$ sudo lvdisplay &lt;volume-group-name&gt;
</code></pre><p>使用lvdisplay显示了可用卷的信息（如：设备名、卷名、卷大小等等）。</p><pre><code>$ sudo lvdisplay /dev/vg_ezsetupsystem40a8f02fadd0 
</code></pre><hr><pre><code>  --- Logical volume ---
  LV Path                /dev/vg_ezsetupsystem40a8f02fadd0/lv_root
  LV Name                lv_root
  VG Name                vg_ezsetupsystem40a8f02fadd0
  LV UUID                imygta-P2rv-2SMU-5ugQ-g99D-A0Cb-m31eet
  LV Write Access        read/write
  LV Creation host, time livecd.centos, 2015-03-16 18:38:18 -0400
  LV Status              available
  # open                 0
  LV Size                50.00 GiB
  Current LE             12800
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           252:0
</code></pre><p><img src="https://farm8.staticflickr.com/7707/17938137591_cdb4cbfb43_b.jpg" alt=""></p><p><em>上图可以看到两个逻辑卷的名字：lv_root和lv_home</em></p><p>如果你想要挂载一个特定的逻辑卷，使用如下的“LV Path”的设备名（如：/dev/vg_ezsetupsystem40a8f02fadd0/lv_home）。</p><pre><code>$ sudo mount /dev/vg_ezsetupsystem40a8f02fadd0/lv_home /mnt 
</code></pre><p>你可以用mount命令不带任何参数检查挂载状态，这会显示所有已挂载的文件系统。</p><pre><code>$ mount 
</code></pre><p><img src="https://farm6.staticflickr.com/5449/17749903670_2ee617445d_c.jpg" alt=""></p><p>如果你想在每次启动时自动挂载逻辑卷，在/etc/fstab中添加下面的行，你可以指定卷的文件系统类型（如 ext4），它可以从mount命令的输出中找。</p><pre><code>/dev/vg_ezsetupsystem40a8f02fadd0/lv_home /mnt ext4 defaults 0 0
</code></pre><p>现在逻辑卷会在每次启动时挂载到/mnt。</p><hr>`,33)),p("p",null,[t[1]||(t[1]=e("via: ",-1)),o(n,{href:"http://ask.xmodulo.com/mount-lvm-partition-linux.html"},{default:s(()=>[...t[0]||(t[0]=[e("http://ask.xmodulo.com/mount-lvm-partition-linux.html",-1)])]),_:1})]),p("p",null,[t[5]||(t[5]=e("作者：",-1)),o(n,{href:"http://ask.xmodulo.com/author/nanni"},{default:s(()=>[...t[2]||(t[2]=[e("Dan Nanni",-1)])]),_:1}),t[6]||(t[6]=e(" 译者：",-1)),o(n,{href:"https://github.com/geekpi"},{default:s(()=>[...t[3]||(t[3]=[e("geekpi",-1)])]),_:1}),t[7]||(t[7]=e(" 校对：",-1)),o(n,{href:"https://github.com/wxy"},{default:s(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),p("p",null,[t[10]||(t[10]=e("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原创翻译，",-1)),o(n,{href:"https://linux.cn/"},{default:s(()=>[...t[9]||(t[9]=[e("Linux中国",-1)])]),_:1}),t[12]||(t[12]=e(" 荣誉推出",-1))])])}const M=i(m,[["render",l]]);export{c as __pageData,M as default};
