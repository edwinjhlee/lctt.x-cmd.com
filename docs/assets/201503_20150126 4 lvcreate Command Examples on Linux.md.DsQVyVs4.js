import{_ as l,a0 as s,w as i,s as p,ao as m,I as a,x as t,a1 as o,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"4 个 lvcreate 常用命令举例 | LCTT x X-CMD","titleTemplate":false,"description":"4 个 lvcreate 常用命令举例 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"4 个 lvcreate 常用命令举例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"4 个 lvcreate 常用命令举例 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150126 4 lvcreate Command Examples on Linux","title":"4 个 lvcreate 常用命令举例","tag":"201503","desc":""},"relativePath":"201503/20150126 4 lvcreate Command Examples on Linux.md","filePath":"[post].md"}'),c={name:"201503/20150126 4 lvcreate Command Examples on Linux.md"};function d(v,e,g,u,w,f){const n=s("Link");return i(),p("div",null,[e[13]||(e[13]=m(`<h1 id="_4-个-lvcreate-常用命令举例" tabindex="-1">4 个 lvcreate 常用命令举例 <a class="header-anchor" href="#_4-个-lvcreate-常用命令举例" aria-label="Permalink to “4 个 lvcreate 常用命令举例”">​</a></h1><p>逻辑卷管理（LVM）是广泛使用的技术，并拥有极其灵活磁盘管理方案。主要包含3个基础命令：</p><ol><li>创建物理卷使用<strong>pvcreate</strong></li><li>创建卷组并给卷组增加分区<strong>vgcreate</strong></li><li>创建新的逻辑卷使用<strong>lvcreate</strong></li></ol><p><img src="http://www.ehowstuff.com/wp-content/uploads/2015/01/lvm-diagram1.jpg" alt=""></p><p>下列例子主要讲述在已经存在的卷组上使用<strong>lvcreate</strong>创建逻辑卷。<strong>lvcreate</strong>命令可以在卷组的可用物理扩展池中分配逻辑扩展。通常，逻辑卷可以随意使用底层逻辑卷上的任意空间。修改逻辑卷将释放或重新分配物理卷的空间。这些例子已经在CentOS 5, CentOS 6, CentOS 7, RHEL 5, RHEl 6 和 RHEL 7 版本中测试通过。</p><h3 id="_4个lvcreate命令例子" tabindex="-1">4个lvcreate命令例子 <a class="header-anchor" href="#_4个lvcreate命令例子" aria-label="Permalink to “4个lvcreate命令例子”">​</a></h3><ol><li><p>在名为vg_newlvm的卷组中创建15G大小的逻辑卷：</p><pre><code> [root@centos7 ~]# lvcreate -L 15G vg_newlvm
</code></pre></li><li><p>在名为vg_newlvm的卷组中创建大小为2500MB的逻辑卷，并命名为centos7_newvol，这样就创建了块设备/dev/vg_newlvm/centos7_newvol：</p><pre><code> [root@centos7 ~]# lvcreate -L 2500 -n centos7_newvol vg_newlvm
</code></pre></li><li><p>可以使用<strong>lvcreate</strong>命令的参数-l来指定逻辑卷扩展的大小。也可以使用这个参数以卷组的大小百分比来扩展逻辑卷。这下列的命令创建了centos7_newvol卷组的50%大小的逻辑卷vg_newlvm:</p><pre><code> [root@centos7 ~]# lvcreate -l 50%VG -n centos7_newvol vg_newlvm
</code></pre></li><li><p>使用卷组剩下的所有空间创建逻辑卷</p><pre><code> [root@centos7 ~]# lvcreate --name centos7_newvol -l 100%FREE vg_newlvm
</code></pre></li></ol><p>更多帮助，使用<strong>lvcreate</strong>命令--help选项来查看：</p><pre><code>[root@centos7 ~]# lvcreate --help
</code></pre><hr><pre><code>  lvcreate: Create a logical volume（创建逻辑卷）

lvcreate
        [-A|--autobackup {y|n}]（自动备份）
        [-a|--activate [a|e|l]{y|n}]
        [--addtag Tag]（增加标签）
        [--alloc AllocationPolicy]（分配策略）
        [--cachemode CacheMode]（Cache模式）
        [-C|--contiguous {y|n}]
        [-d|--debug]
        [-h|-?|--help]
        [--ignoremonitoring]（忽略监控）
        [--monitor {y|n}]（监控）
        [-i|--stripes Stripes [-I|--stripesize StripeSize]]
        [-k|--setactivationskip {y|n}]
        [-K|--ignoreactivationskip]
        {-l|--extents LogicalExtentsNumber[%{VG|PVS|FREE}] |（逻辑扩展数）
         -L|--size LogicalVolumeSize[bBsSkKmMgGtTpPeE]}（逻辑卷大小）
        [-M|--persistent {y|n}] [--major major] [--minor minor]
        [-m|--mirrors Mirrors [--nosync] [{--mirrorlog {disk|core|mirrored}|--corelog}]]（镜像）
        [-n|--name LogicalVolumeName]（逻辑卷名字）
        [--noudevsync]
        [-p|--permission {r|rw}]
        [--[raid]minrecoveryrate Rate]
        [--[raid]maxrecoveryrate Rate]
        [-r|--readahead ReadAheadSectors|auto|none]（读取头扇区）
        [-R|--regionsize MirrorLogRegionSize]（镜像逻辑区域尺寸）
        [-T|--thin  [-c|--chunksize  ChunkSize]（块大小）
          [--discards {ignore|nopassdown|passdown}]
          [--poolmetadatasize MetadataSize[bBsSkKmMgG]]]
          [--poolmetadataspare {y|n}]
        [--thinpool ThinPoolLogicalVolume{Name|Path}] （精简池逻辑卷）
        [-t|--test]
        [--type VolumeType]（卷类型）
        [-v|--verbose]
        [-W|--wipesignatures {y|n}]
        [-Z|--zero {y|n}]
        [--version]
        VolumeGroupName [PhysicalVolumePath...]
</code></pre><hr>`,12)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),o(n,{href:"http://www.ehowstuff.com/4-lvcreate-command-examples-on-linux/"},{default:r(()=>[...e[0]||(e[0]=[t("http://www.ehowstuff.com/4-lvcreate-command-examples-on-linux/",-1)])]),_:1})]),a("p",null,[e[5]||(e[5]=t("作者：",-1)),o(n,{href:"http://www.ehowstuff.com/author/mhstar/"},{default:r(()=>[...e[2]||(e[2]=[t("skytech",-1)])]),_:1}),e[6]||(e[6]=t(" 译者：",-1)),o(n,{href:"https://github.com/Vic020"},{default:r(()=>[...e[3]||(e[3]=[t("Vic020",-1)])]),_:1}),e[7]||(e[7]=t(" 校对：",-1)),o(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原创翻译，",-1)),o(n,{href:"http://linux.cn/"},{default:r(()=>[...e[9]||(e[9]=[t("Linux中国",-1)])]),_:1}),e[12]||(e[12]=t(" 荣誉推出",-1))])])}const T=l(c,[["render",d]]);export{C as __pageData,T as default};
