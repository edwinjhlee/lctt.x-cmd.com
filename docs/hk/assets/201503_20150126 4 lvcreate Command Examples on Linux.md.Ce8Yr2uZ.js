import{_ as l,a0 as s,w as i,s as p,ao as m,I as a,x as t,a1 as o,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"4 個 lvcreate 常用命令舉例 | LCTT x X-CMD","titleTemplate":false,"description":"4 個 lvcreate 常用命令舉例 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"4 個 lvcreate 常用命令舉例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"4 個 lvcreate 常用命令舉例 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150126 4 lvcreate Command Examples on Linux","title":"4 個 lvcreate 常用命令舉例","tag":"201503","desc":""},"relativePath":"201503/20150126 4 lvcreate Command Examples on Linux.md","filePath":"[post].md"}'),c={name:"201503/20150126 4 lvcreate Command Examples on Linux.md"};function d(v,e,g,u,w,f){const n=s("Link");return i(),p("div",null,[e[13]||(e[13]=m(`<h1 id="_4-個-lvcreate-常用命令舉例" tabindex="-1">4 個 lvcreate 常用命令舉例 <a class="header-anchor" href="#_4-個-lvcreate-常用命令舉例" aria-label="Permalink to “4 個 lvcreate 常用命令舉例”">​</a></h1><p>邏輯卷管理（LVM）是廣泛使用的技術，並擁有極其靈活磁盤管理方案。主要包含3個基礎命令：</p><ol><li>創建物理卷使用<strong>pvcreate</strong></li><li>創建卷組並給卷組增加分區<strong>vgcreate</strong></li><li>創建新的邏輯卷使用<strong>lvcreate</strong></li></ol><p><img src="http://www.ehowstuff.com/wp-content/uploads/2015/01/lvm-diagram1.jpg" alt=""></p><p>下列例子主要講述在已經存在的卷組上使用<strong>lvcreate</strong>創建邏輯卷。<strong>lvcreate</strong>命令可以在卷組的可用物理擴展池中分配邏輯擴展。通常，邏輯卷可以隨意使用底層邏輯捲上的任意空間。修改邏輯卷將釋放或重新分配物理卷的空間。這些例子已經在CentOS 5, CentOS 6, CentOS 7, RHEL 5, RHEl 6 和 RHEL 7 版本中測試通過。</p><h3 id="_4個lvcreate命令例子" tabindex="-1">4個lvcreate命令例子 <a class="header-anchor" href="#_4個lvcreate命令例子" aria-label="Permalink to “4個lvcreate命令例子”">​</a></h3><ol><li><p>在名為vg_newlvm的卷組中創建15G大小的邏輯卷：</p><pre><code> [root@centos7 ~]# lvcreate -L 15G vg_newlvm
</code></pre></li><li><p>在名為vg_newlvm的卷組中創建大小為2500MB的邏輯卷，並命名為centos7_newvol，這樣就創建了塊設備/dev/vg_newlvm/centos7_newvol：</p><pre><code> [root@centos7 ~]# lvcreate -L 2500 -n centos7_newvol vg_newlvm
</code></pre></li><li><p>可以使用<strong>lvcreate</strong>命令的參數-l來指定邏輯卷擴展的大小。也可以使用這個參數以卷組的大小百分比來擴展邏輯卷。這下列的命令創建了centos7_newvol卷組的50%大小的邏輯卷vg_newlvm:</p><pre><code> [root@centos7 ~]# lvcreate -l 50%VG -n centos7_newvol vg_newlvm
</code></pre></li><li><p>使用卷組剩下的所有空間創建邏輯卷</p><pre><code> [root@centos7 ~]# lvcreate --name centos7_newvol -l 100%FREE vg_newlvm
</code></pre></li></ol><p>更多幫助，使用<strong>lvcreate</strong>命令--help選項來查看：</p><pre><code>[root@centos7 ~]# lvcreate --help
</code></pre><hr><pre><code>  lvcreate: Create a logical volume（創建邏輯卷）

lvcreate
        [-A|--autobackup {y|n}]（自動備份）
        [-a|--activate [a|e|l]{y|n}]
        [--addtag Tag]（增加標籤）
        [--alloc AllocationPolicy]（分配策略）
        [--cachemode CacheMode]（Cache模式）
        [-C|--contiguous {y|n}]
        [-d|--debug]
        [-h|-?|--help]
        [--ignoremonitoring]（忽略監控）
        [--monitor {y|n}]（監控）
        [-i|--stripes Stripes [-I|--stripesize StripeSize]]
        [-k|--setactivationskip {y|n}]
        [-K|--ignoreactivationskip]
        {-l|--extents LogicalExtentsNumber[%{VG|PVS|FREE}] |（邏輯擴展數）
         -L|--size LogicalVolumeSize[bBsSkKmMgGtTpPeE]}（邏輯卷大小）
        [-M|--persistent {y|n}] [--major major] [--minor minor]
        [-m|--mirrors Mirrors [--nosync] [{--mirrorlog {disk|core|mirrored}|--corelog}]]（鏡像）
        [-n|--name LogicalVolumeName]（邏輯卷名字）
        [--noudevsync]
        [-p|--permission {r|rw}]
        [--[raid]minrecoveryrate Rate]
        [--[raid]maxrecoveryrate Rate]
        [-r|--readahead ReadAheadSectors|auto|none]（讀取頭扇區）
        [-R|--regionsize MirrorLogRegionSize]（鏡像邏輯區域尺寸）
        [-T|--thin  [-c|--chunksize  ChunkSize]（塊大小）
          [--discards {ignore|nopassdown|passdown}]
          [--poolmetadatasize MetadataSize[bBsSkKmMgG]]]
          [--poolmetadataspare {y|n}]
        [--thinpool ThinPoolLogicalVolume{Name|Path}] （精簡池邏輯卷）
        [-t|--test]
        [--type VolumeType]（卷類型）
        [-v|--verbose]
        [-W|--wipesignatures {y|n}]
        [-Z|--zero {y|n}]
        [--version]
        VolumeGroupName [PhysicalVolumePath...]
</code></pre><hr>`,12)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),o(n,{href:"http://www.ehowstuff.com/4-lvcreate-command-examples-on-linux/"},{default:r(()=>[...e[0]||(e[0]=[t("http://www.ehowstuff.com/4-lvcreate-command-examples-on-linux/",-1)])]),_:1})]),a("p",null,[e[5]||(e[5]=t("作者：",-1)),o(n,{href:"http://www.ehowstuff.com/author/mhstar/"},{default:r(()=>[...e[2]||(e[2]=[t("skytech",-1)])]),_:1}),e[6]||(e[6]=t(" 譯者：",-1)),o(n,{href:"https://github.com/Vic020"},{default:r(()=>[...e[3]||(e[3]=[t("Vic020",-1)])]),_:1}),e[7]||(e[7]=t(" 校對：",-1)),o(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原創翻譯，",-1)),o(n,{href:"http://linux.cn/"},{default:r(()=>[...e[9]||(e[9]=[t("Linux中國",-1)])]),_:1}),e[12]||(e[12]=t(" 榮譽推出",-1))])])}const T=l(c,[["render",d]]);export{C as __pageData,T as default};
