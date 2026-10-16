import{_ as l,a0 as o,w as d,s as r,ao as t,I as i,a1 as e,A as p,x as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"如何在 Linux 上檢查網卡信息 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 上檢查網卡信息 | LCTT (202004) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 上檢查網卡信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 上檢查網卡信息 | LCTT (202004) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202004/20200422 How to Check the Available Network Interfaces, Associated IP Addresses, MAC Addresses, and Interface Speed on Linux","title":"如何在 Linux 上檢查網卡信息","tag":"202004","desc":""},"relativePath":"202004/20200422 How to Check the Available Network Interfaces, Associated IP Addresses, MAC Addresses, and Interface Speed on Linux.md","filePath":"[post].md"}'),h={name:"202004/20200422 How to Check the Available Network Interfaces, Associated IP Addresses, MAC Addresses, and Interface Speed on Linux.md"};function c(u,s,k,g,b,f){const n=o("Link");return d(),r("div",null,[s[19]||(s[19]=t('<h1 id="如何在-linux-上檢查網卡信息" tabindex="-1">如何在 Linux 上檢查網卡信息 <a class="header-anchor" href="#如何在-linux-上檢查網卡信息" aria-label="Permalink to “如何在 Linux 上檢查網卡信息”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202004/29/214835m1ms3n00s6qbcycz.jpg" alt=""></p><p>默認情況下，在設置服務器時你會配置主網絡接口。這是每個人所做的構建工作的一部分。有時出於各種原因，你可能需要配置額外的網絡接口。</p><p>這可以是通過網絡<ruby>綁定<rt>bonding</rt></ruby>/<ruby>協作<rt>teaming</rt></ruby>來提供高可用性，也可以是用於應用需求或備份的單獨接口。</p><p>為此，你需要知道計算機有多少接口以及它們的速度來配置它們。</p><p>有許多命令可檢查可用的網絡接口，但是我們僅使用 <code>ip</code> 命令。以後，我們會另外寫一篇文章來全部介紹這些工具。</p><p>在本教程中，我們將向你顯示可用網絡網卡（NIC）信息，例如接口名稱、關聯的 IP 地址、MAC 地址和接口速度。</p><h3 id="什麼是-ip-命令" tabindex="-1">什麼是 ip 命令 <a class="header-anchor" href="#什麼是-ip-命令" aria-label="Permalink to “什麼是 ip 命令”">​</a></h3>',8)),i("p",null,[e(n,{href:"https://www.2daygeek.com/ip-command-configure-network-interface-usage-linux/"},{default:p(()=>[...s[0]||(s[0]=[a("ip 命令",-1)])]),_:1}),s[1]||(s[1]=a(" 類似於 ",-1)),s[2]||(s[2]=i("code",null,"ifconfig",-1)),s[3]||(s[3]=a(", 用於分配靜態 IP 地址、路由和默認網關等。",-1))]),s[20]||(s[20]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ip a</span></span>
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
<span class="line"><span>       valid_lft forever preferred_lft forever</span></span></code></pre></div><h3 id="什麼是-ethtool-命令" tabindex="-1">什麼是 ethtool 命令 <a class="header-anchor" href="#什麼是-ethtool-命令" aria-label="Permalink to “什麼是 ethtool 命令”">​</a></h3><p><code>ethtool</code> 用於查詢或控制網絡驅動或硬件設置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ethtool eth0</span></span></code></pre></div><h3 id="_1-如何在-linux-上使用-ip-命令檢查可用的網絡接口" tabindex="-1">1）如何在 Linux 上使用 ip 命令檢查可用的網絡接口 <a class="header-anchor" href="#_1-如何在-linux-上使用-ip-命令檢查可用的網絡接口" aria-label="Permalink to “1）如何在 Linux 上使用 ip 命令檢查可用的網絡接口”">​</a></h3><p>在不帶任何參數的情況下運行 <code>ip</code> 命令時，它會提供大量信息，但是，如果僅需要可用的網絡接口，請使用以下定製的 <code>ip</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ip a |awk &#39;/state UP/{print $2}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eth0:</span></span>
<span class="line"><span>eth1:</span></span></code></pre></div><h3 id="_2-如何在-linux-上使用-ip-命令檢查網絡接口的-ip-地址" tabindex="-1">2）如何在 Linux 上使用 ip 命令檢查網絡接口的 IP 地址 <a class="header-anchor" href="#_2-如何在-linux-上使用-ip-命令檢查網絡接口的-ip-地址" aria-label="Permalink to “2）如何在 Linux 上使用 ip 命令檢查網絡接口的 IP 地址”">​</a></h3><p>如果只想查看 IP 地址分配給了哪個接口，請使用以下定製的 <code>ip</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ip -o a show | cut -d &#39; &#39; -f 2,7</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>ip a |grep -i inet | awk &#39;{print $7, $2}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lo 127.0.0.1/8</span></span>
<span class="line"><span>192.168.1.101/24</span></span>
<span class="line"><span>192.168.1.102/24</span></span></code></pre></div><h3 id="_3-如何在-linux-上使用-ip-命令檢查網卡的-mac-地址" tabindex="-1">3）如何在 Linux 上使用 ip 命令檢查網卡的 MAC 地址 <a class="header-anchor" href="#_3-如何在-linux-上使用-ip-命令檢查網卡的-mac-地址" aria-label="Permalink to “3）如何在 Linux 上使用 ip 命令檢查網卡的 MAC 地址”">​</a></h3><p>如果只想查看網絡接口名稱和相應的 MAC 地址，請使用以下格式。</p><p>檢查特定的網絡接口的 MAC 地址：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ip link show dev eth0 |awk &#39;/link/{print $2}&#39;</span></span>
<span class="line"><span>00:00:00:55:43:5c</span></span></code></pre></div><p>檢查所有網絡接口的 MAC 地址，創建該腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi /opt/scripts/mac-addresses.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>ip a |awk &#39;/state UP/{print $2}&#39; | sed &#39;s/://&#39; | while read output;</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  echo $output:</span></span>
<span class="line"><span>  ethtool -P $output</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>運行該腳本獲取多個網絡接口的 MAC 地址：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh /opt/scripts/mac-addresses.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eth0:</span></span>
<span class="line"><span>Permanent address: 00:00:00:55:43:5c</span></span>
<span class="line"><span>eth1:</span></span>
<span class="line"><span>Permanent address: 00:00:00:55:43:5d</span></span></code></pre></div><h3 id="_4-如何在-linux-上使用-ethtool-命令檢查網絡接口速度" tabindex="-1">4）如何在 Linux 上使用 ethtool 命令檢查網絡接口速度 <a class="header-anchor" href="#_4-如何在-linux-上使用-ethtool-命令檢查網絡接口速度" aria-label="Permalink to “4）如何在 Linux 上使用 ethtool 命令檢查網絡接口速度”">​</a></h3><p>如果要在 Linux 上檢查網絡接口速度，請使用 <code>ethtool</code> 命令。</p><p>檢查特定網絡接口的速度：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ethtool eth0 |grep &quot;Speed:&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Speed: 10000Mb/s</span></span></code></pre></div><p>檢查所有網絡接口速度，創建該腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi /opt/scripts/port-speed.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>ip a |awk &#39;/state UP/{print $2}&#39; | sed &#39;s/://&#39; | while read output;</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  echo $output:</span></span>
<span class="line"><span>  ethtool $output |grep &quot;Speed:&quot;</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>運行該腳本獲取多個網絡接口速度：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh /opt/scripts/port-speed.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eth0:</span></span>
<span class="line"><span>Speed: 10000Mb/s</span></span>
<span class="line"><span>eth1:</span></span>
<span class="line"><span>Speed: 10000Mb/s</span></span></code></pre></div><h3 id="_5-驗證網卡信息的-shell-腳本" tabindex="-1">5）驗證網卡信息的 Shell 腳本 <a class="header-anchor" href="#_5-驗證網卡信息的-shell-腳本" aria-label="Permalink to “5）驗證網卡信息的 Shell 腳本”">​</a></h3><p>通過此 shell 腳本你可以收集上述所有信息，例如網絡接口名稱、網絡接口的 IP 地址，網絡接口的 MAC 地址以及網絡接口的速度。創建該腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi /opt/scripts/nic-info.sh</span></span>
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
<span class="line"><span>done</span></span></code></pre></div><p>運行該腳本檢查網卡信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh /opt/scripts/nic-info.sh</span></span>
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
<span class="line"><span>Speed: 10000Mb/s</span></span></code></pre></div><hr>`,32)),i("p",null,[s[5]||(s[5]=a("via: ",-1)),e(n,{href:"https://www.2daygeek.com/linux-unix-check-network-interfaces-names-nic-speed-ip-mac-address/"},{default:p(()=>[...s[4]||(s[4]=[a("https://www.2daygeek.com/linux-unix-check-network-interfaces-names-nic-speed-ip-mac-address/",-1)])]),_:1})]),i("p",null,[s[10]||(s[10]=a("作者：",-1)),e(n,{href:"https://www.2daygeek.com/author/magesh/"},{default:p(()=>[...s[6]||(s[6]=[a("Magesh Maruthamuthu",-1)])]),_:1}),s[11]||(s[11]=a(" 選題：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[7]||(s[7]=[a("lujun9972",-1)])]),_:1}),s[12]||(s[12]=a(" 譯者：",-1)),e(n,{href:"https://github.com/geekpi"},{default:p(()=>[...s[8]||(s[8]=[a("geekpi",-1)])]),_:1}),s[13]||(s[13]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[9]||(s[9]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[16]||(s[16]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[14]||(s[14]=[a("LCTT",-1)])]),_:1}),s[17]||(s[17]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[15]||(s[15]=[a("Linux中國",-1)])]),_:1}),s[18]||(s[18]=a(" 榮譽推出",-1))])])}const y=l(h,[["render",c]]);export{C as __pageData,y as default};
