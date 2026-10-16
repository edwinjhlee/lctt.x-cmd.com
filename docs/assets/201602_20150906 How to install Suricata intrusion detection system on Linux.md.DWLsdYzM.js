import{_ as e,a0 as l,w as s,s as d,I as i,x as o,a1 as n,A as r,ao as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"如何在 Linux 系统上安装 Suricata 入侵检测系统 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 系统上安装 Suricata 入侵检测系统 | LCTT (201602) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 系统上安装 Suricata 入侵检测系统 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 系统上安装 Suricata 入侵检测系统 | LCTT (201602) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201602/20150906 How to install Suricata intrusion detection system on Linux","title":"如何在 Linux 系统上安装 Suricata 入侵检测系统","tag":"201602","desc":""},"relativePath":"201602/20150906 How to install Suricata intrusion detection system on Linux.md","filePath":"[post].md"}'),p={name:"201602/20150906 How to install Suricata intrusion detection system on Linux.md"};function q(m,t,f,S,T,g){const u=l("Link");return s(),d("div",null,[t[46]||(t[46]=i("h1",{id:"如何在-linux-系统上安装-suricata-入侵检测系统",tabindex:"-1"},[o("如何在 Linux 系统上安装 Suricata 入侵检测系统 "),i("a",{class:"header-anchor",href:"#如何在-linux-系统上安装-suricata-入侵检测系统","aria-label":"Permalink to “如何在 Linux 系统上安装 Suricata 入侵检测系统”"},"​")],-1)),i("p",null,[t[2]||(t[2]=o("随着安全威胁的不断发生，入侵检测系统（IDS）在如今的数据中心环境中显得尤为必要。然而，随着越来越多的服务器将他们的网卡升级到10GB/40GB以太网，对如此线路上的硬件进行计算密集型的入侵检测越来越困难。其中一种提升入侵检测系统性能的途径是",-1)),t[3]||(t[3]=i("strong",null,"多线程入侵检测系统",-1)),t[4]||(t[4]=o("，它将 CPU 密集型的深度包检测工作并行的分配给多个并发任务来完成。这样的并行检测可以充分利用多核硬件的优势来轻松提升入侵检测系统的吞吐量。在这方面有两个知名的开源项目，分别是 ",-1)),n(u,{href:"http://suricata-ids.org/"},{default:r(()=>[...t[0]||(t[0]=[o("Suricata",-1)])]),_:1}),t[5]||(t[5]=o(" 和 ",-1)),n(u,{href:"https://www.bro.org/"},{default:r(()=>[...t[1]||(t[1]=[o("Bro",-1)])]),_:1}),t[6]||(t[6]=o("。",-1))]),t[47]||(t[47]=a(`<p>这个教程里，我会向大家演示<strong>如何在 Linux 服务器上安装和配置 Suricata 入侵检测系统</strong></p><h3 id="在-linux-上安装-suricata-ids" tabindex="-1">在 Linux 上安装 Suricata IDS <a class="header-anchor" href="#在-linux-上安装-suricata-ids" aria-label="Permalink to “在 Linux 上安装 Suricata IDS”">​</a></h3><p>让我们从源文件来构建 Suricata，但在此之前，需要按如下所示先安装几个依赖包。</p><h4 id="在-debian-ubuntu-或者-linux-mint-操作系统上安装依赖包" tabindex="-1">在 Debian, Ubuntu 或者 Linux Mint 操作系统上安装依赖包 <a class="header-anchor" href="#在-debian-ubuntu-或者-linux-mint-操作系统上安装依赖包" aria-label="Permalink to “在 Debian, Ubuntu 或者 Linux Mint 操作系统上安装依赖包”">​</a></h4><pre><code>$ sudo apt-get install wget build-essential libpcre3-dev libpcre3-dbg automake autoconf libtool libpcap-dev libnet1-dev libyaml-dev zlib1g-dev libcap-ng-dev libjansson-dev
</code></pre><h4 id="在-centos-fedora-或者-rhel-操作系统上安装依赖包" tabindex="-1">在 CentOS, Fedora 或者 RHEL 操作系统上安装依赖包 <a class="header-anchor" href="#在-centos-fedora-或者-rhel-操作系统上安装依赖包" aria-label="Permalink to “在 CentOS, Fedora 或者 RHEL 操作系统上安装依赖包”">​</a></h4><pre><code>$ sudo yum install wget libpcap-devel libnet-devel pcre-devel gcc-c++ automake autoconf libtool make libyaml-devel zlib-devel file-devel jansson-devel nss-devel
</code></pre><p>一旦将所有依赖包安装完毕，我们就可以继续安装 Suricata 了。</p>`,8)),i("p",null,[t[8]||(t[8]=o("首先从 ",-1)),n(u,{href:"http://suricata-ids.org/download/"},{default:r(()=>[...t[7]||(t[7]=[o("http://suricata-ids.org/download/",-1)])]),_:1}),t[9]||(t[9]=o(" 下载 Suricata 源代码，然后构建它。撰写这篇文章的时候，其最新版本号为 2.0.8 。",-1))]),t[48]||(t[48]=a(`<pre><code>$ wget http://www.openinfosecfoundation.org/download/suricata-2.0.8.tar.gz
$ tar -xvf suricata-2.0.8.tar.gz
$ cd suricata-2.0.8
$ ./configure --sysconfdir=/etc --localstatedir=/var
</code></pre><p>以下是配置信息的样例。</p><pre><code>Suricata Configuration:
  AF_PACKET support:                       yes
  PF_RING support:                         no
  NFQueue support:                         no
  NFLOG support:                           no
  IPFW support:                            no
  DAG enabled:                             no
  Napatech enabled:                        no
  Unix socket enabled:                     yes
  Detection enabled:                       yes

  libnss support:                          yes
  libnspr support:                         yes
  libjansson support:                      yes
  Prelude support:                         no
  PCRE jit:                                yes
  LUA support:                             no
  libluajit:                               no
  libgeoip:                                no
  Non-bundled htp:                         no
  Old barnyard2 support:                   no
  CUDA enabled:                            no
</code></pre><p>现在可以编译、安装了。</p><pre><code>$ make
$ sudo make install
</code></pre><p>Suricata 源代码带有默认的配置文件。按照如下方法安装这些默认配置文件即可。</p><pre><code>$ sudo make install-conf
</code></pre><p>正如你所料，如果没有IDS规则集的话，Suricata 什么用也没有。幸好 Makefile 为我们提供了 IDS 规则集的安装选项。安装方法如下。</p><pre><code>$ sudo make install-rules
</code></pre>`,9)),i("p",null,[t[11]||(t[11]=o("以上的规则安装命令会从 ",-1)),n(u,{href:"http://rules.emergingthreats.net/"},{default:r(()=>[...t[10]||(t[10]=[o("EmergingThreats.net",-1)])]),_:1}),t[12]||(t[12]=o(" 上下载可用的社区规则集快照，并且将其存储在 /etc/suricata/rules 目录下。",-1))]),t[49]||(t[49]=a(`<p><img src="https://farm1.staticflickr.com/691/20482669553_8b67632277_c.jpg" alt=""></p><h3 id="首次配置-suricata-ids" tabindex="-1">首次配置 Suricata IDS <a class="header-anchor" href="#首次配置-suricata-ids" aria-label="Permalink to “首次配置 Suricata IDS”">​</a></h3><p>现在到了配置 Suricata 的时候了。配置文件的位置是 <strong>/etc/suricata/suricata.yaml</strong>。参照以下命令，用文本编辑器打开这个文件。</p><pre><code>$ sudo vi /etc/suricata/suricata.yaml
</code></pre><p>文件中有一些运行所需的基本配置。</p><p>为<code>default-log-dir</code>关键字指定 Suricata 日志文件所在的位置。</p><pre><code>default-log-dir: /var/log/suricata/
</code></pre><p>在<code>vars</code>部分下方，你会发现几项对 Suricata 来说很重要变量。<code>HOME_NET</code>变量需要指定 Suricata 检查的网络。被分配给 <code>EXTERNAL_NET</code> 变量的 <code>!$HOME_NET</code> 代表除本地网络之外的其他网络。<code>XXX_PORTS</code>变量用来辨别不同服务所用到的端口号。需要注意的是无论使用什么端口，Suricata 都可以自动检测 HTTP 流量。所以是不是正确指定端口就显得没那么重要了。</p><pre><code>vars:
    HOME_NET: &quot;[192.168.122.0/24]&quot;
    EXTERNAL_NET: &quot;!$HOME_NET&quot;
    HTTP_PORTS: &quot;80&quot;
    SHELLCODE_PORTS: &quot;!80&quot;
    SSH_PORTS: 22
</code></pre><p><code>host-os-policy</code> 部分用于防御利用操作系统网络栈的自身行为来逃避检测的一些知名攻击手段（例如：TCP reassembly）。作为对策，通过针对目标操作系统而对检测引擎算法进行微调，现代 IDC 提供了“基于目标”的检测手段。因此，如果你知道某台主机运行了什么操作系统的话，将这个信息提供给 Suricata 就可以大幅提高检测的成功率。这就是 <code>host-os-policy</code> 存在的意义。本例中，默认的 IDC 策略是 Linux 系统。如果针对某个 IP 地址没有指定操作系统信息，Suricata 会默认应用基于 Linux 系统的检测策略。如下，当捕获到对 192.168.122.0/28 和 192.168.122.155通讯时，Suricata 就会应用基于 Windows 系统的检测策略。</p><pre><code>host-os-policy:
  # These are Windows machines.
  windows: [192.168.122.0/28, 192.168.122.155]
  bsd: []
  bsd-right: []
  old-linux: []
  # Make the default policy Linux.
  linux: [0.0.0.0/0]
  old-solaris: []
  solaris: [&quot;::1&quot;]
  hpux10: []
  hpux11: []
  irix: []
  macos: []
  vista: []
  windows2k3: []
</code></pre>`,11)),i("p",null,[t[14]||(t[14]=o("在 ",-1)),t[15]||(t[15]=i("code",null,"threading",-1)),t[16]||(t[16]=o(" 部分下，你可以为不同的 Suricata 线程指定 CPU 关联。默认状态下，",-1)),n(u,{href:"http://xmodulo.com/run-program-process-specific-cpu-cores-linux.html"},{default:r(()=>[...t[13]||(t[13]=[o("CPU 关联",-1)])]),_:1}),t[17]||(t[17]=o(" 是被禁止使用的 (",-1)),t[18]||(t[18]=i("code",null,"set-cpu-affinity: no",-1)),t[19]||(t[19]=o(")，这意味着 Suricata 会分配其线程到所有可用的 CPU 核心上。Suricata 会默认为每一个 CPU 核心创建一个检测线程。你可以通过指定 ",-1)),t[20]||(t[20]=i("code",null,"detect-thread-ratio: N",-1)),t[21]||(t[21]=o(" 来调整此行为。此处会创建 N*M 个检测线程，M 代表 CPU 核心总数。",-1))]),t[50]||(t[50]=a(`<pre><code>threading:
  set-cpu-affinity: no
  detect-thread-ratio: 1.5
</code></pre><p>通过以上对线程的设置，Suricata 会创建 1.5*M 个检测线程，M 是系统的 CPU 核心总数。</p><p>如果你想对 Suricata 配置有更多的了解，可以去翻阅默认配置文件。里边配有有大量的注释以供你清晰理解。</p><h3 id="使用-suricata-进行入侵监控" tabindex="-1">使用 Suricata 进行入侵监控 <a class="header-anchor" href="#使用-suricata-进行入侵监控" aria-label="Permalink to “使用 Suricata 进行入侵监控”">​</a></h3><p>现在是时候让 Suricata 跑起来了，但在这之前还有一个步骤需要去完成。</p><p>当你使用 pcap 捕获模式的时候，强烈建议关闭 Suricata 监听网卡上的任何的包卸载（例如 LRO/GRO）功能。这些功能会干扰包的实时捕获行为。</p><p>按照以下方法关闭 eth0 接口的 LRO/GRO 功能。</p><pre><code>$ sudo ethtool -K eth0 gro off lro off
</code></pre><p>这里要注意，在使用某些网卡的情况下，你会看到如下警告信息。忽略它们就行了，这些信息只不过告诉你你的网卡不支持 LRO 功能而已。</p><pre><code>Cannot change large-receive-offload
</code></pre>`,10)),i("p",null,[t[23]||(t[23]=o("Suricata 支持许多运行模式。运行模式决定着 IDC 会使用何种线程。以下命令可以查看所有 ",-1)),n(u,{href:"https://redmine.openinfosecfoundation.org/projects/suricata/wiki/Runmodes"},{default:r(()=>[...t[22]||(t[22]=[o("可用的运行模式",-1)])]),_:1}),t[24]||(t[24]=o("。",-1))]),t[51]||(t[51]=i("pre",null,[i("code",null,`$ sudo /usr/local/bin/suricata --list-runmodes
`)],-1)),t[52]||(t[52]=i("p",null,[i("img",{src:"https://farm6.staticflickr.com/5730/20481140934_25080d04d7_c.jpg",alt:""})],-1)),t[53]||(t[53]=i("p",null,'Suricata 使用的默认运行模式是 autofp（"auto flow pinned load balancing"==“自动流绑定负载均衡” 的缩写）。这个模式下，来自某一个流的包会被分配到一个单独的检测线程中。这些流会根据未被处理的包的最低数量来分配相应的线程。',-1)),t[54]||(t[54]=i("p",null,"最后，让我们将 Suricata 运行起来，看看它表现如何。",-1)),t[55]||(t[55]=i("pre",null,[i("code",null,`$ sudo /usr/local/bin/suricata -c /etc/suricata/suricata.yaml -i eth0 --init-errors-fatal
`)],-1)),t[56]||(t[56]=i("p",null,[i("img",{src:"https://farm1.staticflickr.com/701/21077552366_c577746e36_c.jpg",alt:""})],-1)),t[57]||(t[57]=i("p",null,"本例中，我们在一个8核心系统中监控 eth0 网络接口。如上所示，Suricata 创建了13个包处理线程和3个管理线程。包处理线程中包括一个 PCAP 包捕获线程，12个检测线程(由8*1.5得出)。这表示 IDS 内的1个包捕获线程均衡负载到12个检测线程中。管理线程包括1个流管理和2个计数/统计相关线程。",-1)),i("p",null,[t[26]||(t[26]=o("以下是一个关于Suricata处理的线程截图(由 ",-1)),n(u,{href:"http://ask.xmodulo.com/view-threads-process-linux.html"},{default:r(()=>[...t[25]||(t[25]=[o("htop",-1)])]),_:1}),t[27]||(t[27]=o(" 绘制)。",-1))]),t[58]||(t[58]=a(`<p><img src="https://farm6.staticflickr.com/5775/20482669593_174f8f41cb_c.jpg" alt=""></p><p>Suricata 检测日志存储在 /var/log/suricata 目录下。</p><pre><code>$ tail -f /var/log/suricata/fast.log
</code></pre><hr><pre><code>04/01/2015-15:47:12.559075  [**] [1:2200074:1] SURICATA TCPv4 invalid checksum [**] [Classification: (null)] [Priority: 3] {TCP} 172.16.253.158:22 -&gt; 172.16.253.1:46997
04/01/2015-15:49:06.565901  [**] [1:2200074:1] SURICATA TCPv4 invalid checksum [**] [Classification: (null)] [Priority: 3] {TCP} 172.16.253.158:22 -&gt; 172.16.253.1:46317
04/01/2015-15:49:06.566759  [**] [1:2200074:1] SURICATA TCPv4 invalid checksum [**] [Classification: (null)] [Priority: 3] {TCP} 172.16.253.158:22 -&gt; 172.16.253.1:46317
</code></pre><p>日志也可以提供 Json 格式以便导入：</p><pre><code>$ tail -f /var/log/suricata/eve.json
</code></pre><hr><pre><code>{&quot;timestamp&quot;:&quot;2015-04-01T15:49:06.565901&quot;,&quot;event_type&quot;:&quot;alert&quot;,&quot;src_ip&quot;:&quot;172.16.253.158&quot;,&quot;src_port&quot;:22,&quot;dest_ip&quot;:&quot;172.16.253.1&quot;,&quot;dest_port&quot;:46317,&quot;proto&quot;:&quot;TCP&quot;,&quot;alert&quot;:{&quot;action&quot;:&quot;allowed&quot;,&quot;gid&quot;:1,&quot;signature_id&quot;:2200074,&quot;rev&quot;:1,&quot;signature&quot;:&quot;SURICATA TCPv4 invalid checksum&quot;,&quot;category&quot;:&quot;&quot;,&quot;severity&quot;:3}}
{&quot;timestamp&quot;:&quot;2015-04-01T15:49:06.566759&quot;,&quot;event_type&quot;:&quot;alert&quot;,&quot;src_ip&quot;:&quot;172.16.253.158&quot;,&quot;src_port&quot;:22,&quot;dest_ip&quot;:&quot;172.16.253.1&quot;,&quot;dest_port&quot;:46317,&quot;proto&quot;:&quot;TCP&quot;,&quot;alert&quot;:{&quot;action&quot;:&quot;allowed&quot;,&quot;gid&quot;:1,&quot;signature_id&quot;:2200074,&quot;rev&quot;:1,&quot;signature&quot;:&quot;SURICATA TCPv4 invalid checksum&quot;,&quot;category&quot;:&quot;&quot;,&quot;severity&quot;:3}}
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3>`,10)),i("p",null,[t[30]||(t[30]=o("这篇教程中，我为大家演示了如何在一台多核 Linux 服务器上安装 Suricata 入侵检测系统。不同于单线程的 ",-1)),n(u,{href:"http://xmodulo.com/how-to-compile-and-install-snort-from-source-code-on-ubuntu.html"},{default:r(()=>[...t[28]||(t[28]=[o("Snort IDS",-1)])]),_:1}),t[31]||(t[31]=o(" ，Suricata 可以很容易的从多核硬件的多进程特性所带来的好处中获益。定制 Suricata 来最大化其效能和检测范围是一个很好的主意。Suricata 的粉丝们维护着一个 ",-1)),n(u,{href:"https://redmine.openinfosecfoundation.org/projects/suricata/wiki"},{default:r(()=>[...t[29]||(t[29]=[o("在线 Wiki",-1)])]),_:1}),t[32]||(t[32]=o("，如果你打算将 Suricata 部署到你的环境中，我强烈建议你去那儿取取经。",-1))]),t[59]||(t[59]=i("p",null,"如果你现在已经开始使用 Suricata 了的话，把你的经验也分享出来吧。",-1)),t[60]||(t[60]=i("hr",null,null,-1)),i("p",null,[t[34]||(t[34]=o("via: ",-1)),n(u,{href:"http://xmodulo.com/install-suricata-intrusion-detection-system-linux.html"},{default:r(()=>[...t[33]||(t[33]=[o("http://xmodulo.com/install-suricata-intrusion-detection-system-linux.html",-1)])]),_:1})]),i("p",null,[t[38]||(t[38]=o("作者：",-1)),n(u,{href:"http://xmodulo.com/author/nanni"},{default:r(()=>[...t[35]||(t[35]=[o("Dan Nanni",-1)])]),_:1}),t[39]||(t[39]=o(" 译者：",-1)),n(u,{href:"https://github.com/mr-ping"},{default:r(()=>[...t[36]||(t[36]=[o("mr-ping",-1)])]),_:1}),t[40]||(t[40]=o(" 校对：",-1)),n(u,{href:"https://github.com/wxy"},{default:r(()=>[...t[37]||(t[37]=[o("wxy",-1)])]),_:1})]),i("p",null,[t[43]||(t[43]=o("本文由 ",-1)),n(u,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[41]||(t[41]=[o("LCTT",-1)])]),_:1}),t[44]||(t[44]=o(" 原创编译，",-1)),n(u,{href:"https://linux.cn/"},{default:r(()=>[...t[42]||(t[42]=[o("Linux中国",-1)])]),_:1}),t[45]||(t[45]=o(" 荣誉推出",-1))])])}const P=e(p,[["render",q]]);export{C as __pageData,P as default};
