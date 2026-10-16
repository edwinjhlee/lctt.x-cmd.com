import{_ as i,a0 as d,w as p,s,I as a,x as n,a1 as r,A as o,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"Linux 上的 MAC 地址欺騙 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 上的 MAC 地址欺騙 | LCTT (201404) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 上的 MAC 地址欺騙 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 上的 MAC 地址欺騙 | LCTT (201404) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201404/How to spoof the MAC address of a network interface on Linux","title":"Linux 上的 MAC 地址欺騙","tag":"201404","desc":""},"relativePath":"201404/How to spoof the MAC address of a network interface on Linux.md","filePath":"[post].md"}'),l={name:"201404/How to spoof the MAC address of a network interface on Linux.md"};function c(m,e,C,h,f,M){const t=d("Link");return p(),s("div",null,[e[16]||(e[16]=a("h1",{id:"linux-上的-mac-地址欺騙",tabindex:"-1"},[n("Linux 上的 MAC 地址欺騙 "),a("a",{class:"header-anchor",href:"#linux-上的-mac-地址欺騙","aria-label":"Permalink to “Linux 上的 MAC 地址欺騙”"},"​")],-1)),e[17]||(e[17]=a("p",null,"網卡生產商在每一張網卡（NIC）在出廠時都會在上面刻上一個48位的全球唯一標識符（GUID，例如08:4f:b5:05:56:a0），這串 GUID 就是網卡的 MAC 地址，用於確定一張網卡的身份。MAC 地址的高24位叫 OUI(Organizationally Unique Identifier 組織唯一標示符)，是為網卡設置 MAC 地址的組織的標識符，這樣一來，不同組織設置的 MAC 地址就不會衝突了。（譯註：實際生產中，並不是每個網絡設備都有不同的MAC地址，有時候地址空間不足，生產商會給發往不同地區國家的產品中用相同的地址空間。）",-1)),e[18]||(e[18]=a("p",null,[n("雖然 MAC 地址由廠商指定，但用户可以改變它，這就是傳説中的“MAC 地址欺騙”。本文將向大家展示"),a("strong",null,"如何在 Linux 上玩 MAC 地址欺騙"),n("。")],-1)),e[19]||(e[19]=a("h3",{id:"為什麼要玩-mac-地址欺騙",tabindex:"-1"},[n("為什麼要玩 MAC 地址欺騙？ "),a("a",{class:"header-anchor",href:"#為什麼要玩-mac-地址欺騙","aria-label":"Permalink to “為什麼要玩 MAC 地址欺騙？”"},"​")],-1)),e[20]||(e[20]=a("p",null,"想要理由？這裏就給幾個比較有技術含量的理由。 一些網絡供應商會通過綁定你家路由器上的 MAC 地址來驗證你的身份，這個時候如果你的路由器壞了，你怎麼辦？你可以暫時把你的電腦的 MAC 地址改成你家路由器的 MAC 地址，讓你的 ISP 重新將你連入外網。（譯註：有這種事情麼？）",-1)),e[21]||(e[21]=a("p",null,"很多 DHCP 服務器會依賴 MAC 地址來分配 IP 地址。如果你想換一個分配給你的 IP 地址，你可以改改你的 MAC 地址。這樣一來，你不必等着 DHCP 服務器給你重新分一個 IP 地址，而是馬上就能得到一個新的。",-1)),a("p",null,[e[2]||(e[2]=n("除了技術原因外，這裏也有一些比較正當的理由來説明你為什麼需要改變你的 MAC 地址：為了隱私、為了安全，你要把你真正的 MAC 地址隱藏起來。不像處在 ISO 模型第三層的 IP 地址會經常變來變去，你的 MAC 地址可不會改變。在你説我多疑之前，請確定你知道",-1)),r(t,{href:"http://www.identityblog.com/?p=1131"},{default:o(()=>[...e[0]||(e[0]=[n("你的隱私",-1)])]),_:1}),e[3]||(e[3]=n("到底是什麼東西。有一個入侵手段叫 ",-1)),r(t,{href:"http://en.wikipedia.org/wiki/Piggybacking_(Internet_access)"},{default:o(()=>[...e[1]||(e[1]=[n("piggybacking",-1)])]),_:1}),e[4]||(e[4]=n("，黑客會在公共 WiFi 網絡下偽裝成你的 MAC 地址，並且在你不在場的時候偽裝成你的身份進行黑客活動。",-1))]),e[22]||(e[22]=u(`<h3 id="怎麼臨時性地改變-mac-地址" tabindex="-1">怎麼臨時性地改變 MAC 地址？ <a class="header-anchor" href="#怎麼臨時性地改變-mac-地址" aria-label="Permalink to “怎麼臨時性地改變 MAC 地址？”">​</a></h3><p>你可以在 Linux 運行的時候改變 MAC 地址。需要注意的是當 MAC 地址轉換的那一會時間，你的網絡會掉線。當電腦重啓時 MAC 地址又會變回原來的。下面介紹幾種方法來改變你的 MAC 地址。</p><h4 id="方法一-iproute2" tabindex="-1">方法一：iproute2 <a class="header-anchor" href="#方法一-iproute2" aria-label="Permalink to “方法一：iproute2”">​</a></h4><pre><code>$ sudo ip link set dev eth0 down
$ sudo ip link set dev eth0 address 00:00:00:00:00:01
$ sudo ip link set dev eth0 up 
</code></pre><h4 id="方法二-macchanger" tabindex="-1">方法二：macchanger <a class="header-anchor" href="#方法二-macchanger" aria-label="Permalink to “方法二：macchanger”">​</a></h4><p>macchanger 這個命令可以讓你把 MAC 地址改成不同生產廠商的序列號。</p><p>在 Debian，Ubuntu 或 Linux Mint 下安裝 macchanger：</p><pre><code>$ sudo apt-get install macchanger 
</code></pre><p>在 Fedora 下安裝 macchanger：</p><pre><code>$ sudo yum install macchanger 
</code></pre><p>在 CentOS 或 RHEL 下安裝 macchanger：</p><pre><code>$ wget http://ftp.club.cc.cmu.edu/pub/gnu/macchanger/macchanger-1.6.0.tar.gz
$ tar xvfvz macchanger-1.6.0.tar.gz
$ cd macchanger-1.6.0 
$ ./configure
$ make
$ sudo make install 
</code></pre><p>下面給出一些 macchanger 的高級使用例子。使用 macchanger 你不必再手動禁用、啓用你的網卡。</p><p>僅僅改變 MAC 地址：</p><pre><code>$ sudo macchanger --mac=00:00:00:00:00:01 eth0 
</code></pre><p>在保證 OUI 一致的情況下為 MAC 設置一個隨機地址：</p><pre><code>$ sudo macchanger -e eth0 
</code></pre><p>為 MAC 設置一個完全隨機的地址：</p><pre><code>$ sudo macchanger -r eth0 
</code></pre><p>獲取所有網卡的 MAC 地址，然後只列出指定的廠商（比如 Juniper）:</p><pre><code>$ macchanger -l | grep -i juniper 
</code></pre><p><img src="https://c2.staticflickr.com/8/7409/12602895995_eeea1f7516.jpg" alt=""></p><p>顯示一塊網卡原來的 MAC 地址和偽裝的 MAC 地址：</p><pre><code>$ macchanger -s eth0 
</code></pre><blockquote><pre><code>Current MAC:   56:95:ac:ee:6e:77 (unknown)
Permanent MAC: 00:0c:29:97:68:02 (Vmware, Inc.)
</code></pre></blockquote><h3 id="如何永久性地改變-mac-地址" tabindex="-1">如何永久性地改變 MAC 地址？ <a class="header-anchor" href="#如何永久性地改變-mac-地址" aria-label="Permalink to “如何永久性地改變 MAC 地址？”">​</a></h3><p>如果你想在系統重啓後還保持偽裝 MAC 地址，你需要編輯配置文件。比如你想改變 eth0 的 MAC 地址，按以下方法搞起：</p><h4 id="在-fedora-centos-或-rhel-下" tabindex="-1">在 Fedora，CentOS 或 RHEL 下： <a class="header-anchor" href="#在-fedora-centos-或-rhel-下" aria-label="Permalink to “在 Fedora，CentOS 或 RHEL 下：”">​</a></h4><pre><code>$ sudo vi /etc/sysconfig/network-scripts/ifcfg-eth0 
</code></pre><blockquote><pre><code>DEVICE=eth0
MACADDR=00:00:00:00:00:01
</code></pre></blockquote><p>或者你可以建一個開機啓動的腳本放在 /etc/NetworkManager/dispatcher.d 目錄下，前提是你使用 Network Manager 管理你的網絡。這裏假設你已經裝了 macchanger，腳本內容如下：</p><pre><code>$ sudo vi /etc/NetworkManager/dispatcher.d/000-changemac 
</code></pre><blockquote><pre><code>#!/bin/bash

case &quot;$2&quot; in
    up)
        macchanger --mac=00:00:00:00:00:01 &quot;$1&quot;
        ;;
esac
</code></pre></blockquote><pre><code>$ sudo chmod 755 /etc/NetworkManager/dispatcher.d/000-changemac 
</code></pre><h4 id="在-debian-ubuntu-或-linux-mint-下" tabindex="-1">在 Debian，Ubuntu 或 Linux Mint 下： <a class="header-anchor" href="#在-debian-ubuntu-或-linux-mint-下" aria-label="Permalink to “在 Debian，Ubuntu 或 Linux Mint 下：”">​</a></h4><p>新建一個開機啓動腳本，放在 /etc/network/if-up.d/ 目錄下：</p><pre><code>$ sudo vi /etc/network/if-up.d/changemac 
</code></pre><blockquote><pre><code>#!/bin/sh

if [ &quot;$IFACE&quot; = eth0 ]; then
  ip link set dev &quot;$IFACE&quot; address 00:00:00:00:00:01
fi
</code></pre></blockquote><pre><code>$ sudo chmod 755 /etc/network/if-up.d/changemac 
</code></pre><hr>`,40)),a("p",null,[e[6]||(e[6]=n("via: ",-1)),r(t,{href:"http://xmodulo.com/2014/02/spoof-mac-address-network-interface-linux.html"},{default:o(()=>[...e[5]||(e[5]=[n("http://xmodulo.com/2014/02/spoof-mac-address-network-interface-linux.html",-1)])]),_:1})]),a("p",null,[e[9]||(e[9]=n("譯者：",-1)),r(t,{href:"https://github.com/bazz2"},{default:o(()=>[...e[7]||(e[7]=[n("bazz2",-1)])]),_:1}),e[10]||(e[10]=n(" 校對：",-1)),r(t,{href:"https://github.com/wxy"},{default:o(()=>[...e[8]||(e[8]=[n("wxy",-1)])]),_:1})]),a("p",null,[e[13]||(e[13]=n("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[11]||(e[11]=[n("LCTT",-1)])]),_:1}),e[14]||(e[14]=n(" 原創翻譯，",-1)),r(t,{href:"http://linux.cn/"},{default:o(()=>[...e[12]||(e[12]=[n("Linux中國",-1)])]),_:1}),e[15]||(e[15]=n(" 榮譽推出",-1))])])}const k=i(l,[["render",c]]);export{b as __pageData,k as default};
