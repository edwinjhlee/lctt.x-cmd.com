import{_ as i,a0 as a,w as r,s as d,ao as u,I as p,x as e,a1 as o,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const c=JSON.parse('{"title":"Linux有問必答：如何在Linux中直接掛載LVM分區 | LCTT x X-CMD","titleTemplate":false,"description":"Linux有問必答：如何在Linux中直接掛載LVM分區 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux有問必答：如何在Linux中直接掛載LVM分區 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux有問必答：如何在Linux中直接掛載LVM分區 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150527 Linux FAQs with Answers--How to mount an LVM partition on Linux","title":"Linux有問必答：如何在Linux中直接掛載LVM分區","tag":"201506","desc":""},"relativePath":"201506/20150527 Linux FAQs with Answers--How to mount an LVM partition on Linux.md","filePath":"[post].md"}'),m={name:"201506/20150527 Linux FAQs with Answers--How to mount an LVM partition on Linux.md"};function l(L,t,f,x,v,V){const n=a("Link");return r(),d("div",null,[t[13]||(t[13]=u(`<h1 id="linux有問必答-如何在linux中直接掛載lvm分區" tabindex="-1">Linux有問必答：如何在Linux中直接掛載LVM分區 <a class="header-anchor" href="#linux有問必答-如何在linux中直接掛載lvm分區" aria-label="Permalink to “Linux有問必答：如何在Linux中直接掛載LVM分區”">​</a></h1><blockquote><p><strong>提問</strong>: 我有一個USB盤包含了LVM分區。 我想要在Linux中訪問這些LVM分區。我該如何在Linux中掛載LVM分區？</p></blockquote><p>LVM是邏輯卷管理工具，它允許你使用邏輯卷和卷組的概念來管理磁盤空間。使用LVM相比傳統分區最大的好處是彈性地為用户和程序分配空間而不用考慮每個物理磁盤的大小。</p><p>在LVM中，那些創建了邏輯分區的物理存儲是傳統的分區（比如：/dev/sda2，/dev/sdb1）。這些分區必須被初始化為“物理卷 PV”並加上卷標（如，“Linux LVM”）來使它們可以在LVM中使用。一旦分區被標記被LVM分區，你不能直接用mount命令掛載。</p><p>如果你嘗試掛載一個LVM分區（比如/dev/sdb2）, 你會得到下面的錯誤。</p><pre><code>$ mount /dev/sdb2 /mnt
</code></pre><hr><pre><code>mount: unknown filesystem type &#39;LVM2_member&#39;
</code></pre><p><img src="https://farm8.staticflickr.com/7696/17749902190_0a6d36821f_b.jpg" alt=""></p><p>要正確地掛載LVM分區，你必須掛載分區中創建的“邏輯卷”。下面就是如何做的。</p><p>首先，用下面的命令檢查可用的卷組：</p><pre><code>$ sudo pvs 
</code></pre><hr><pre><code>PV         VG                           Fmt  Attr PSize   PFree
/dev/sdb2  vg_ezsetupsystem40a8f02fadd0 lvm2 a--  237.60g    0 
</code></pre><p><img src="https://farm8.staticflickr.com/7657/17938136831_d9320b7bfc_b.jpg" alt=""></p><p>物理卷的名字和卷組的名字分別在PV和VG列的下面。本例中，只有一個創建在dev/sdb2下的組“vg_ezsetupsystem40a8f02fadd0”。</p><p>接下來檢查卷組中存在的邏輯卷，使用lvdisplay命令：</p><pre><code>$ sudo lvdisplay &lt;volume-group-name&gt;
</code></pre><p>使用lvdisplay顯示了可用卷的信息（如：設備名、卷名、卷大小等等）。</p><pre><code>$ sudo lvdisplay /dev/vg_ezsetupsystem40a8f02fadd0 
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
</code></pre><p><img src="https://farm8.staticflickr.com/7707/17938137591_cdb4cbfb43_b.jpg" alt=""></p><p><em>上圖可以看到兩個邏輯卷的名字：lv_root和lv_home</em></p><p>如果你想要掛載一個特定的邏輯卷，使用如下的“LV Path”的設備名（如：/dev/vg_ezsetupsystem40a8f02fadd0/lv_home）。</p><pre><code>$ sudo mount /dev/vg_ezsetupsystem40a8f02fadd0/lv_home /mnt 
</code></pre><p>你可以用mount命令不帶任何參數檢查掛載狀態，這會顯示所有已掛載的文件系統。</p><pre><code>$ mount 
</code></pre><p><img src="https://farm6.staticflickr.com/5449/17749903670_2ee617445d_c.jpg" alt=""></p><p>如果你想在每次啓動時自動掛載邏輯卷，在/etc/fstab中添加下面的行，你可以指定卷的文件系統類型（如 ext4），它可以從mount命令的輸出中找。</p><pre><code>/dev/vg_ezsetupsystem40a8f02fadd0/lv_home /mnt ext4 defaults 0 0
</code></pre><p>現在邏輯卷會在每次啓動時掛載到/mnt。</p><hr>`,33)),p("p",null,[t[1]||(t[1]=e("via: ",-1)),o(n,{href:"http://ask.xmodulo.com/mount-lvm-partition-linux.html"},{default:s(()=>[...t[0]||(t[0]=[e("http://ask.xmodulo.com/mount-lvm-partition-linux.html",-1)])]),_:1})]),p("p",null,[t[5]||(t[5]=e("作者：",-1)),o(n,{href:"http://ask.xmodulo.com/author/nanni"},{default:s(()=>[...t[2]||(t[2]=[e("Dan Nanni",-1)])]),_:1}),t[6]||(t[6]=e(" 譯者：",-1)),o(n,{href:"https://github.com/geekpi"},{default:s(()=>[...t[3]||(t[3]=[e("geekpi",-1)])]),_:1}),t[7]||(t[7]=e(" 校對：",-1)),o(n,{href:"https://github.com/wxy"},{default:s(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),p("p",null,[t[10]||(t[10]=e("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原創翻譯，",-1)),o(n,{href:"https://linux.cn/"},{default:s(()=>[...t[9]||(t[9]=[e("Linux中國",-1)])]),_:1}),t[12]||(t[12]=e(" 榮譽推出",-1))])])}const M=i(m,[["render",l]]);export{c as __pageData,M as default};
