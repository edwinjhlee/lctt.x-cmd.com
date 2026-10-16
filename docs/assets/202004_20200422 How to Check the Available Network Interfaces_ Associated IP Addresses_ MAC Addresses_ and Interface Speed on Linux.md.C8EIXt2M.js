import{_ as l,a0 as o,w as d,s as r,ao as t,I as i,a1 as e,A as p,x as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"如何在 Linux 上检查网卡信息 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 上检查网卡信息 | LCTT (202004) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 上检查网卡信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 上检查网卡信息 | LCTT (202004) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202004/20200422 How to Check the Available Network Interfaces, Associated IP Addresses, MAC Addresses, and Interface Speed on Linux","title":"如何在 Linux 上检查网卡信息","tag":"202004","desc":""},"relativePath":"202004/20200422 How to Check the Available Network Interfaces, Associated IP Addresses, MAC Addresses, and Interface Speed on Linux.md","filePath":"[post].md"}'),h={name:"202004/20200422 How to Check the Available Network Interfaces, Associated IP Addresses, MAC Addresses, and Interface Speed on Linux.md"};function c(u,s,k,g,b,f){const n=o("Link");return d(),r("div",null,[s[19]||(s[19]=t('<h1 id="如何在-linux-上检查网卡信息" tabindex="-1">如何在 Linux 上检查网卡信息 <a class="header-anchor" href="#如何在-linux-上检查网卡信息" aria-label="Permalink to “如何在 Linux 上检查网卡信息”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202004/29/214835m1ms3n00s6qbcycz.jpg" alt=""></p><p>默认情况下，在设置服务器时你会配置主网络接口。这是每个人所做的构建工作的一部分。有时出于各种原因，你可能需要配置额外的网络接口。</p><p>这可以是通过网络<ruby>绑定<rt>bonding</rt></ruby>/<ruby>协作<rt>teaming</rt></ruby>来提供高可用性，也可以是用于应用需求或备份的单独接口。</p><p>为此，你需要知道计算机有多少接口以及它们的速度来配置它们。</p><p>有许多命令可检查可用的网络接口，但是我们仅使用 <code>ip</code> 命令。以后，我们会另外写一篇文章来全部介绍这些工具。</p><p>在本教程中，我们将向你显示可用网络网卡（NIC）信息，例如接口名称、关联的 IP 地址、MAC 地址和接口速度。</p><h3 id="什么是-ip-命令" tabindex="-1">什么是 ip 命令 <a class="header-anchor" href="#什么是-ip-命令" aria-label="Permalink to “什么是 ip 命令”">​</a></h3>',8)),i("p",null,[e(n,{href:"https://www.2daygeek.com/ip-command-configure-network-interface-usage-linux/"},{default:p(()=>[...s[0]||(s[0]=[a("ip 命令",-1)])]),_:1}),s[1]||(s[1]=a(" 类似于 ",-1)),s[2]||(s[2]=i("code",null,"ifconfig",-1)),s[3]||(s[3]=a(", 用于分配静态 IP 地址、路由和默认网关等。",-1))]),s[20]||(s[20]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ip a</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1: lo: mtu 65536 qdisc noqueue state UNKNOWN</span></span>
<span class="line"><span>    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span></span>
<span class="line"><span>    inet 127.0.0.1/8 scope host lo</span></span>
<span class="line"><span>    inet6 ::1/128 scope host</span></span>
<span class="line"><span>       valid_lft forever preferred_lft forever</span></span>
<span class="line"><span>2: eth0: mtu 1500 qdisc pfifo_fast state UP qlen 1000</span></span>
<span class="line"><span>    link/ether fa:16:3e:a0:7d:5a brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span>    inet 192.168.1.101/24 brd 192.168.1.101 scope global eth0</span></span>
<span class="line"><span>    inet6 fe80::f816:3eff:fea0:7d5a/64 scope link</span></span>
<span class="line"><span>       valid_lft forever preferred_lft forever</span></span></code></pre></div><h3 id="什么是-ethtool-命令" tabindex="-1">什么是 ethtool 命令 <a class="header-anchor" href="#什么是-ethtool-命令" aria-label="Permalink to “什么是 ethtool 命令”">​</a></h3><p><code>ethtool</code> 用于查询或控制网络驱动或硬件设置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ethtool eth0</span></span></code></pre></div><h3 id="_1-如何在-linux-上使用-ip-命令检查可用的网络接口" tabindex="-1">1）如何在 Linux 上使用 ip 命令检查可用的网络接口 <a class="header-anchor" href="#_1-如何在-linux-上使用-ip-命令检查可用的网络接口" aria-label="Permalink to “1）如何在 Linux 上使用 ip 命令检查可用的网络接口”">​</a></h3><p>在不带任何参数的情况下运行 <code>ip</code> 命令时，它会提供大量信息，但是，如果仅需要可用的网络接口，请使用以下定制的 <code>ip</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ip a |awk &#39;/state UP/{print $2}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eth0:</span></span>
<span class="line"><span>eth1:</span></span></code></pre></div><h3 id="_2-如何在-linux-上使用-ip-命令检查网络接口的-ip-地址" tabindex="-1">2）如何在 Linux 上使用 ip 命令检查网络接口的 IP 地址 <a class="header-anchor" href="#_2-如何在-linux-上使用-ip-命令检查网络接口的-ip-地址" aria-label="Permalink to “2）如何在 Linux 上使用 ip 命令检查网络接口的 IP 地址”">​</a></h3><p>如果只想查看 IP 地址分配给了哪个接口，请使用以下定制的 <code>ip</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ip -o a show | cut -d &#39; &#39; -f 2,7</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>ip a |grep -i inet | awk &#39;{print $7, $2}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lo 127.0.0.1/8</span></span>
<span class="line"><span>192.168.1.101/24</span></span>
<span class="line"><span>192.168.1.102/24</span></span></code></pre></div><h3 id="_3-如何在-linux-上使用-ip-命令检查网卡的-mac-地址" tabindex="-1">3）如何在 Linux 上使用 ip 命令检查网卡的 MAC 地址 <a class="header-anchor" href="#_3-如何在-linux-上使用-ip-命令检查网卡的-mac-地址" aria-label="Permalink to “3）如何在 Linux 上使用 ip 命令检查网卡的 MAC 地址”">​</a></h3><p>如果只想查看网络接口名称和相应的 MAC 地址，请使用以下格式。</p><p>检查特定的网络接口的 MAC 地址：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ip link show dev eth0 |awk &#39;/link/{print $2}&#39;</span></span>
<span class="line"><span>00:00:00:55:43:5c</span></span></code></pre></div><p>检查所有网络接口的 MAC 地址，创建该脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi /opt/scripts/mac-addresses.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>ip a |awk &#39;/state UP/{print $2}&#39; | sed &#39;s/://&#39; | while read output;</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  echo $output:</span></span>
<span class="line"><span>  ethtool -P $output</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>运行该脚本获取多个网络接口的 MAC 地址：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh /opt/scripts/mac-addresses.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eth0:</span></span>
<span class="line"><span>Permanent address: 00:00:00:55:43:5c</span></span>
<span class="line"><span>eth1:</span></span>
<span class="line"><span>Permanent address: 00:00:00:55:43:5d</span></span></code></pre></div><h3 id="_4-如何在-linux-上使用-ethtool-命令检查网络接口速度" tabindex="-1">4）如何在 Linux 上使用 ethtool 命令检查网络接口速度 <a class="header-anchor" href="#_4-如何在-linux-上使用-ethtool-命令检查网络接口速度" aria-label="Permalink to “4）如何在 Linux 上使用 ethtool 命令检查网络接口速度”">​</a></h3><p>如果要在 Linux 上检查网络接口速度，请使用 <code>ethtool</code> 命令。</p><p>检查特定网络接口的速度：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ethtool eth0 |grep &quot;Speed:&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Speed: 10000Mb/s</span></span></code></pre></div><p>检查所有网络接口速度，创建该脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi /opt/scripts/port-speed.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>ip a |awk &#39;/state UP/{print $2}&#39; | sed &#39;s/://&#39; | while read output;</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  echo $output:</span></span>
<span class="line"><span>  ethtool $output |grep &quot;Speed:&quot;</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>运行该脚本获取多个网络接口速度：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh /opt/scripts/port-speed.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eth0:</span></span>
<span class="line"><span>Speed: 10000Mb/s</span></span>
<span class="line"><span>eth1:</span></span>
<span class="line"><span>Speed: 10000Mb/s</span></span></code></pre></div><h3 id="_5-验证网卡信息的-shell-脚本" tabindex="-1">5）验证网卡信息的 Shell 脚本 <a class="header-anchor" href="#_5-验证网卡信息的-shell-脚本" aria-label="Permalink to “5）验证网卡信息的 Shell 脚本”">​</a></h3><p>通过此 shell 脚本你可以收集上述所有信息，例如网络接口名称、网络接口的 IP 地址，网络接口的 MAC 地址以及网络接口的速度。创建该脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi /opt/scripts/nic-info.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>hostname</span></span>
<span class="line"><span>echo &quot;-------------&quot;</span></span>
<span class="line"><span>for iname in $(ip a |awk &#39;/state UP/{print $2}&#39;)</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  echo &quot;$iname&quot;</span></span>
<span class="line"><span>  ip a | grep -A2 $iname | awk &#39;/inet/{print $2}&#39;</span></span>
<span class="line"><span>  ip a | grep -A2 $iname | awk &#39;/link/{print $2}&#39;</span></span>
<span class="line"><span>  ethtool $iname |grep &quot;Speed:&quot;</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>运行该脚本检查网卡信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh /opt/scripts/nic-info.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vps.2daygeek.com</span></span>
<span class="line"><span>----------------</span></span>
<span class="line"><span>eth0:</span></span>
<span class="line"><span>192.168.1.101/24</span></span>
<span class="line"><span>00:00:00:55:43:5c</span></span>
<span class="line"><span>Speed: 10000Mb/s</span></span>
<span class="line"><span>eth1:</span></span>
<span class="line"><span>192.168.1.102/24</span></span>
<span class="line"><span>00:00:00:55:43:5d</span></span>
<span class="line"><span>Speed: 10000Mb/s</span></span></code></pre></div><hr>`,32)),i("p",null,[s[5]||(s[5]=a("via: ",-1)),e(n,{href:"https://www.2daygeek.com/linux-unix-check-network-interfaces-names-nic-speed-ip-mac-address/"},{default:p(()=>[...s[4]||(s[4]=[a("https://www.2daygeek.com/linux-unix-check-network-interfaces-names-nic-speed-ip-mac-address/",-1)])]),_:1})]),i("p",null,[s[10]||(s[10]=a("作者：",-1)),e(n,{href:"https://www.2daygeek.com/author/magesh/"},{default:p(()=>[...s[6]||(s[6]=[a("Magesh Maruthamuthu",-1)])]),_:1}),s[11]||(s[11]=a(" 选题：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[7]||(s[7]=[a("lujun9972",-1)])]),_:1}),s[12]||(s[12]=a(" 译者：",-1)),e(n,{href:"https://github.com/geekpi"},{default:p(()=>[...s[8]||(s[8]=[a("geekpi",-1)])]),_:1}),s[13]||(s[13]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[9]||(s[9]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[16]||(s[16]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[14]||(s[14]=[a("LCTT",-1)])]),_:1}),s[17]||(s[17]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[15]||(s[15]=[a("Linux中国",-1)])]),_:1}),s[18]||(s[18]=a(" 荣誉推出",-1))])])}const y=l(h,[["render",c]]);export{C as __pageData,y as default};
