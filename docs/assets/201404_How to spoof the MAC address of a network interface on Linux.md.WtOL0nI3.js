import{_ as i,a0 as d,w as p,s,I as a,x as n,a1 as r,A as o,ao as u}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"Linux 上的 MAC 地址欺骗 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 上的 MAC 地址欺骗 | LCTT (201404) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 上的 MAC 地址欺骗 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 上的 MAC 地址欺骗 | LCTT (201404) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201404/How to spoof the MAC address of a network interface on Linux","title":"Linux 上的 MAC 地址欺骗","tag":"201404","desc":""},"relativePath":"201404/How to spoof the MAC address of a network interface on Linux.md","filePath":"[post].md"}'),l={name:"201404/How to spoof the MAC address of a network interface on Linux.md"};function c(m,e,C,h,f,M){const t=d("Link");return p(),s("div",null,[e[16]||(e[16]=a("h1",{id:"linux-上的-mac-地址欺骗",tabindex:"-1"},[n("Linux 上的 MAC 地址欺骗 "),a("a",{class:"header-anchor",href:"#linux-上的-mac-地址欺骗","aria-label":"Permalink to “Linux 上的 MAC 地址欺骗”"},"​")],-1)),e[17]||(e[17]=a("p",null,"网卡生产商在每一张网卡（NIC）在出厂时都会在上面刻上一个48位的全球唯一标识符（GUID，例如08:4f:b5:05:56:a0），这串 GUID 就是网卡的 MAC 地址，用于确定一张网卡的身份。MAC 地址的高24位叫 OUI(Organizationally Unique Identifier 组织唯一标示符)，是为网卡设置 MAC 地址的组织的标识符，这样一来，不同组织设置的 MAC 地址就不会冲突了。（译注：实际生产中，并不是每个网络设备都有不同的MAC地址，有时候地址空间不足，生产商会给发往不同地区国家的产品中用相同的地址空间。）",-1)),e[18]||(e[18]=a("p",null,[n("虽然 MAC 地址由厂商指定，但用户可以改变它，这就是传说中的“MAC 地址欺骗”。本文将向大家展示"),a("strong",null,"如何在 Linux 上玩 MAC 地址欺骗"),n("。")],-1)),e[19]||(e[19]=a("h3",{id:"为什么要玩-mac-地址欺骗",tabindex:"-1"},[n("为什么要玩 MAC 地址欺骗？ "),a("a",{class:"header-anchor",href:"#为什么要玩-mac-地址欺骗","aria-label":"Permalink to “为什么要玩 MAC 地址欺骗？”"},"​")],-1)),e[20]||(e[20]=a("p",null,"想要理由？这里就给几个比较有技术含量的理由。 一些网络供应商会通过绑定你家路由器上的 MAC 地址来验证你的身份，这个时候如果你的路由器坏了，你怎么办？你可以暂时把你的电脑的 MAC 地址改成你家路由器的 MAC 地址，让你的 ISP 重新将你连入外网。（译注：有这种事情么？）",-1)),e[21]||(e[21]=a("p",null,"很多 DHCP 服务器会依赖 MAC 地址来分配 IP 地址。如果你想换一个分配给你的 IP 地址，你可以改改你的 MAC 地址。这样一来，你不必等着 DHCP 服务器给你重新分一个 IP 地址，而是马上就能得到一个新的。",-1)),a("p",null,[e[2]||(e[2]=n("除了技术原因外，这里也有一些比较正当的理由来说明你为什么需要改变你的 MAC 地址：为了隐私、为了安全，你要把你真正的 MAC 地址隐藏起来。不像处在 ISO 模型第三层的 IP 地址会经常变来变去，你的 MAC 地址可不会改变。在你说我多疑之前，请确定你知道",-1)),r(t,{href:"http://www.identityblog.com/?p=1131"},{default:o(()=>[...e[0]||(e[0]=[n("你的隐私",-1)])]),_:1}),e[3]||(e[3]=n("到底是什么东西。有一个入侵手段叫 ",-1)),r(t,{href:"http://en.wikipedia.org/wiki/Piggybacking_(Internet_access)"},{default:o(()=>[...e[1]||(e[1]=[n("piggybacking",-1)])]),_:1}),e[4]||(e[4]=n("，黑客会在公共 WiFi 网络下伪装成你的 MAC 地址，并且在你不在场的时候伪装成你的身份进行黑客活动。",-1))]),e[22]||(e[22]=u(`<h3 id="怎么临时性地改变-mac-地址" tabindex="-1">怎么临时性地改变 MAC 地址？ <a class="header-anchor" href="#怎么临时性地改变-mac-地址" aria-label="Permalink to “怎么临时性地改变 MAC 地址？”">​</a></h3><p>你可以在 Linux 运行的时候改变 MAC 地址。需要注意的是当 MAC 地址转换的那一会时间，你的网络会掉线。当电脑重启时 MAC 地址又会变回原来的。下面介绍几种方法来改变你的 MAC 地址。</p><h4 id="方法一-iproute2" tabindex="-1">方法一：iproute2 <a class="header-anchor" href="#方法一-iproute2" aria-label="Permalink to “方法一：iproute2”">​</a></h4><pre><code>$ sudo ip link set dev eth0 down
$ sudo ip link set dev eth0 address 00:00:00:00:00:01
$ sudo ip link set dev eth0 up 
</code></pre><h4 id="方法二-macchanger" tabindex="-1">方法二：macchanger <a class="header-anchor" href="#方法二-macchanger" aria-label="Permalink to “方法二：macchanger”">​</a></h4><p>macchanger 这个命令可以让你把 MAC 地址改成不同生产厂商的序列号。</p><p>在 Debian，Ubuntu 或 Linux Mint 下安装 macchanger：</p><pre><code>$ sudo apt-get install macchanger 
</code></pre><p>在 Fedora 下安装 macchanger：</p><pre><code>$ sudo yum install macchanger 
</code></pre><p>在 CentOS 或 RHEL 下安装 macchanger：</p><pre><code>$ wget http://ftp.club.cc.cmu.edu/pub/gnu/macchanger/macchanger-1.6.0.tar.gz
$ tar xvfvz macchanger-1.6.0.tar.gz
$ cd macchanger-1.6.0 
$ ./configure
$ make
$ sudo make install 
</code></pre><p>下面给出一些 macchanger 的高级使用例子。使用 macchanger 你不必再手动禁用、启用你的网卡。</p><p>仅仅改变 MAC 地址：</p><pre><code>$ sudo macchanger --mac=00:00:00:00:00:01 eth0 
</code></pre><p>在保证 OUI 一致的情况下为 MAC 设置一个随机地址：</p><pre><code>$ sudo macchanger -e eth0 
</code></pre><p>为 MAC 设置一个完全随机的地址：</p><pre><code>$ sudo macchanger -r eth0 
</code></pre><p>获取所有网卡的 MAC 地址，然后只列出指定的厂商（比如 Juniper）:</p><pre><code>$ macchanger -l | grep -i juniper 
</code></pre><p><img src="https://c2.staticflickr.com/8/7409/12602895995_eeea1f7516.jpg" alt=""></p><p>显示一块网卡原来的 MAC 地址和伪装的 MAC 地址：</p><pre><code>$ macchanger -s eth0 
</code></pre><blockquote><pre><code>Current MAC:   56:95:ac:ee:6e:77 (unknown)
Permanent MAC: 00:0c:29:97:68:02 (Vmware, Inc.)
</code></pre></blockquote><h3 id="如何永久性地改变-mac-地址" tabindex="-1">如何永久性地改变 MAC 地址？ <a class="header-anchor" href="#如何永久性地改变-mac-地址" aria-label="Permalink to “如何永久性地改变 MAC 地址？”">​</a></h3><p>如果你想在系统重启后还保持伪装 MAC 地址，你需要编辑配置文件。比如你想改变 eth0 的 MAC 地址，按以下方法搞起：</p><h4 id="在-fedora-centos-或-rhel-下" tabindex="-1">在 Fedora，CentOS 或 RHEL 下： <a class="header-anchor" href="#在-fedora-centos-或-rhel-下" aria-label="Permalink to “在 Fedora，CentOS 或 RHEL 下：”">​</a></h4><pre><code>$ sudo vi /etc/sysconfig/network-scripts/ifcfg-eth0 
</code></pre><blockquote><pre><code>DEVICE=eth0
MACADDR=00:00:00:00:00:01
</code></pre></blockquote><p>或者你可以建一个开机启动的脚本放在 /etc/NetworkManager/dispatcher.d 目录下，前提是你使用 Network Manager 管理你的网络。这里假设你已经装了 macchanger，脚本内容如下：</p><pre><code>$ sudo vi /etc/NetworkManager/dispatcher.d/000-changemac 
</code></pre><blockquote><pre><code>#!/bin/bash

case &quot;$2&quot; in
    up)
        macchanger --mac=00:00:00:00:00:01 &quot;$1&quot;
        ;;
esac
</code></pre></blockquote><pre><code>$ sudo chmod 755 /etc/NetworkManager/dispatcher.d/000-changemac 
</code></pre><h4 id="在-debian-ubuntu-或-linux-mint-下" tabindex="-1">在 Debian，Ubuntu 或 Linux Mint 下： <a class="header-anchor" href="#在-debian-ubuntu-或-linux-mint-下" aria-label="Permalink to “在 Debian，Ubuntu 或 Linux Mint 下：”">​</a></h4><p>新建一个开机启动脚本，放在 /etc/network/if-up.d/ 目录下：</p><pre><code>$ sudo vi /etc/network/if-up.d/changemac 
</code></pre><blockquote><pre><code>#!/bin/sh

if [ &quot;$IFACE&quot; = eth0 ]; then
  ip link set dev &quot;$IFACE&quot; address 00:00:00:00:00:01
fi
</code></pre></blockquote><pre><code>$ sudo chmod 755 /etc/network/if-up.d/changemac 
</code></pre><hr>`,40)),a("p",null,[e[6]||(e[6]=n("via: ",-1)),r(t,{href:"http://xmodulo.com/2014/02/spoof-mac-address-network-interface-linux.html"},{default:o(()=>[...e[5]||(e[5]=[n("http://xmodulo.com/2014/02/spoof-mac-address-network-interface-linux.html",-1)])]),_:1})]),a("p",null,[e[9]||(e[9]=n("译者：",-1)),r(t,{href:"https://github.com/bazz2"},{default:o(()=>[...e[7]||(e[7]=[n("bazz2",-1)])]),_:1}),e[10]||(e[10]=n(" 校对：",-1)),r(t,{href:"https://github.com/wxy"},{default:o(()=>[...e[8]||(e[8]=[n("wxy",-1)])]),_:1})]),a("p",null,[e[13]||(e[13]=n("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[11]||(e[11]=[n("LCTT",-1)])]),_:1}),e[14]||(e[14]=n(" 原创翻译，",-1)),r(t,{href:"http://linux.cn/"},{default:o(()=>[...e[12]||(e[12]=[n("Linux中国",-1)])]),_:1}),e[15]||(e[15]=n(" 荣誉推出",-1))])])}const k=i(l,[["render",c]]);export{b as __pageData,k as default};
