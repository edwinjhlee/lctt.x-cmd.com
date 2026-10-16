import{_ as p,a0 as l,w as i,s as d,I as r,x as o,a1 as t,A as n,ao as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const m=JSON.parse('{"title":"使用 HAProxy 配置 HTTP 负载均衡器 | LCTT x X-CMD","titleTemplate":false,"description":"使用 HAProxy 配置 HTTP 负载均衡器 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 HAProxy 配置 HTTP 负载均衡器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 HAProxy 配置 HTTP 负载均衡器 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141008 How to configure HTTP load balancer with HAProxy on Linux","title":"使用 HAProxy 配置 HTTP 负载均衡器","tag":"201501","desc":""},"relativePath":"201501/20141008 How to configure HTTP load balancer with HAProxy on Linux.md","filePath":"[post].md"}'),x={name:"201501/20141008 How to configure HTTP load balancer with HAProxy on Linux.md"};function h(u,e,y,P,b,c){const a=l("Link");return i(),d("div",null,[e[22]||(e[22]=r("h1",{id:"使用-haproxy-配置-http-负载均衡器",tabindex:"-1"},[o("使用 HAProxy 配置 HTTP 负载均衡器 "),r("a",{class:"header-anchor",href:"#使用-haproxy-配置-http-负载均衡器","aria-label":"Permalink to “使用 HAProxy 配置 HTTP 负载均衡器”"},"​")],-1)),e[23]||(e[23]=r("p",null,"随着基于 Web 的应用和服务的增多，IT 系统管理员肩上的责任也越来越重。当遇到不可预期的事件如流量达到高峰，流量增大或者内部的挑战比如硬件的损坏或紧急维修，无论如何，你的 Web 应用都必须要保持可用性。甚至现在流行的 devops 和持续交付（CD）也可能威胁到你的 Web 服务的可靠性和性能的一致性。",-1)),r("p",null,[e[1]||(e[1]=o("不可预测，不一致的性能表现是你无法接受的。但是我们怎样消除这些缺点呢？大多数情况下一个合适的负载均衡解决方案可以解决这个问题。今天我会给你们介绍如何使用 ",-1)),t(a,{href:"http://www.haproxy.org/"},{default:n(()=>[...e[0]||(e[0]=[o("HAProxy",-1)])]),_:1}),e[2]||(e[2]=o(" 配置 HTTP 负载均衡器。",-1))]),e[24]||(e[24]=r("p",null,"###什么是 HTTP 负载均衡？ ###",-1)),e[25]||(e[25]=r("p",null,"HTTP 负载均衡是一个网络解决方案，它将进入的 HTTP 或 HTTPs 请求分配至一组提供相同的 Web 应用内容的服务器用于响应。通过将请求在这样的多个服务器间进行均衡，负载均衡器可以防止服务器出现单点故障，可以提升整体的可用性和响应速度。它还可以让你能够简单的通过添加或者移除服务器来进行横向扩展或收缩，对工作负载进行调整。",-1)),e[26]||(e[26]=r("h3",{id:"什么时候-什么情况下需要使用负载均衡",tabindex:"-1"},[o("什么时候，什么情况下需要使用负载均衡？ "),r("a",{class:"header-anchor",href:"#什么时候-什么情况下需要使用负载均衡","aria-label":"Permalink to “什么时候，什么情况下需要使用负载均衡？”"},"​")],-1)),e[27]||(e[27]=r("p",null,"负载均衡可以提升服务器的使用性能和最大可用性，当你的服务器开始出现高负载时就可以使用负载均衡。或者你在为一个大型项目设计架构时，在前端使用负载均衡是一个很好的习惯。当你的环境需要扩展的时候它会很有用。",-1)),e[28]||(e[28]=r("h3",{id:"什么是-haproxy",tabindex:"-1"},[o("什么是 HAProxy？ "),r("a",{class:"header-anchor",href:"#什么是-haproxy","aria-label":"Permalink to “什么是 HAProxy？”"},"​")],-1)),r("p",null,[e[4]||(e[4]=o("HAProxy 是一个流行的开源的 GNU/Linux 平台下的 TCP/HTTP 服务器的负载均衡和代理软件。HAProxy 是单线程，事件驱动架构，可以轻松的处理 ",-1)),t(a,{href:"http://www.haproxy.org/10g.html"},{default:n(()=>[...e[3]||(e[3]=[o("10 Gbps 速率",-1)])]),_:1}),e[5]||(e[5]=o(" 的流量，在生产环境中被广泛的使用。它的功能包括自动健康状态检查，自定义负载均衡算法，HTTPS/SSL 支持，会话速率限制等等。",-1))]),e[29]||(e[29]=r("h3",{id:"这个教程要实现怎样的负载均衡",tabindex:"-1"},[o("这个教程要实现怎样的负载均衡 "),r("a",{class:"header-anchor",href:"#这个教程要实现怎样的负载均衡","aria-label":"Permalink to “这个教程要实现怎样的负载均衡”"},"​")],-1)),e[30]||(e[30]=r("p",null,"在这个教程中，我们会为 HTTP Web 服务器配置一个基于 HAProxy 的负载均衡。",-1)),e[31]||(e[31]=r("h3",{id:"准备条件",tabindex:"-1"},[o("准备条件 "),r("a",{class:"header-anchor",href:"#准备条件","aria-label":"Permalink to “准备条件”"},"​")],-1)),r("p",null,[e[7]||(e[7]=o("你至少要有一台，或者最好是两台 Web 服务器来验证你的负载均衡的功能。我们假设后端的 HTTP Web 服务器已经配置好并",-1)),t(a,{href:"http://linux.cn/article-1567-1.html"},{default:n(()=>[...e[6]||(e[6]=[o("可以运行",-1)])]),_:1}),e[8]||(e[8]=o("。",-1))]),e[32]||(e[32]=s(`<h2 id="在-linux-中安装-haproxy" tabindex="-1">在 Linux 中安装 HAProxy <a class="header-anchor" href="#在-linux-中安装-haproxy" aria-label="Permalink to “在 Linux 中安装 HAProxy”">​</a></h2><p>对于大多数的发行版，我们可以使用发行版的包管理器来安装 HAProxy。</p><h3 id="在-debian-中安装-haproxy" tabindex="-1">在 Debian 中安装 HAProxy <a class="header-anchor" href="#在-debian-中安装-haproxy" aria-label="Permalink to “在 Debian 中安装 HAProxy”">​</a></h3><p>在 Debian Wheezy 中我们需要添加源，在 /etc/apt/sources.list.d 下创建一个文件 &quot;backports.list&quot; ，写入下面的内容</p><pre><code>deb http://cdn.debian.net/debian wheezy­backports main 
</code></pre><p>刷新仓库的数据，并安装 HAProxy</p><pre><code># apt­ get update
# apt ­get install haproxy 
</code></pre><h3 id="在-ubuntu-中安装-haproxy" tabindex="-1">在 Ubuntu 中安装 HAProxy <a class="header-anchor" href="#在-ubuntu-中安装-haproxy" aria-label="Permalink to “在 Ubuntu 中安装 HAProxy”">​</a></h3><pre><code># apt ­get install haproxy 
</code></pre><h3 id="在-centos-和-rhel-中安装-haproxy" tabindex="-1">在 CentOS 和 RHEL 中安装 HAProxy <a class="header-anchor" href="#在-centos-和-rhel-中安装-haproxy" aria-label="Permalink to “在 CentOS 和 RHEL 中安装 HAProxy”">​</a></h3><pre><code># yum install haproxy 
</code></pre><h2 id="配置-haproxy" tabindex="-1">配置 HAProxy <a class="header-anchor" href="#配置-haproxy" aria-label="Permalink to “配置 HAProxy”">​</a></h2><p>本教程假设有两台运行的 HTTP Web 服务器，它们的 IP 地址是 192.168.100.2 和 192.168.100.3。我们将负载均衡配置在 192.168.100.4 的这台服务器上。</p><p>为了让 HAProxy 工作正常，你需要修改 /etc/haproxy/haproxy.cfg 中的一些选项。我们会在这一节中解释这些修改。一些配置可能因 GNU/Linux 发行版的不同而变化，这些会被标注出来。</p><h3 id="_1-配置日志功能" tabindex="-1">1. 配置日志功能 <a class="header-anchor" href="#_1-配置日志功能" aria-label="Permalink to “1. 配置日志功能”">​</a></h3><p>你要做的第一件事是为 HAProxy 配置日志功能，在排错时日志将很有用。日志配置可以在 /etc/haproxy/haproxy.cfg 的 global 段中找到他们。下面是针对不同的 Linux 发型版的 HAProxy 日志配置。</p><h4 id="centos-或-rhel" tabindex="-1">CentOS 或 RHEL:#### <a class="header-anchor" href="#centos-或-rhel" aria-label="Permalink to “CentOS 或 RHEL:####”">​</a></h4><p>在 CentOS/RHEL中启用日志，将下面的：</p><pre><code>log         127.0.0.1 local2 
</code></pre><p>替换为：</p><pre><code>log         127.0.0.1 local0 
</code></pre><p>然后配置 HAProxy 在 /var/log 中的日志分割，我们需要修改当前的 rsyslog 配置。为了简洁和明了，我们在 /etc/rsyslog.d 下创建一个叫 haproxy.conf 的文件，添加下面的内容：</p><pre><code>$ModLoad imudp 
$UDPServerRun 514  
$template Haproxy,&quot;%msg%\\n&quot; 
local0.=info ­/var/log/haproxy.log;Haproxy 
local0.notice ­/var/log/haproxy­status.log;Haproxy 
local0.* ~ 
</code></pre><p>这个配置会基于 $template 在 /var/log 中分割 HAProxy 日志。现在重启 rsyslog 应用这些更改。</p><pre><code># service rsyslog restart 
</code></pre><p>####Debian 或 Ubuntu:####</p><p>在 Debian 或 Ubuntu 中启用日志，将下面的内容</p><pre><code>log /dev/log        local0 
log /dev/log        local1 notice 
</code></pre><p>替换为：</p><pre><code>log         127.0.0.1 local0 
</code></pre><p>然后为 HAProxy 配置日志分割，编辑 /etc/rsyslog.d/ 下的 haproxy.conf （在 Debian 中可能叫 49-haproxy.conf），写入下面你的内容</p><pre><code>$ModLoad imudp 
$UDPServerRun 514  
$template Haproxy,&quot;%msg%\\n&quot; 
local0.=info ­/var/log/haproxy.log;Haproxy 
local0.notice ­/var/log/haproxy­status.log;Haproxy 
local0.* ~ 
</code></pre><p>这个配置会基于 $template 在 /var/log 中分割 HAProxy 日志。现在重启 rsyslog 应用这些更改。</p><pre><code> # service rsyslog restart 
</code></pre><h3 id="_2-设置默认选项" tabindex="-1">2. 设置默认选项 <a class="header-anchor" href="#_2-设置默认选项" aria-label="Permalink to “2. 设置默认选项”">​</a></h3><p>下一步是设置 HAProxy 的默认选项。在 /etc/haproxy/haproxy.cfg 的 default 段中，替换为下面的配置：</p><pre><code>    defaults 
    log     global 
    mode    http 
    option  httplog 
    option  dontlognull 
    retries 3 
    option redispatch 
    maxconn 20000 
    contimeout      5000 
    clitimeout      50000 
    srvtimeout      50000
</code></pre><p>上面的配置是当 HAProxy 为 HTTP 负载均衡时建议使用的，但是并不一定是你的环境的最优方案。你可以自己研究 HAProxy 的手册并配置它。</p><h3 id="_3-web-集群配置" tabindex="-1">3. Web 集群配置 <a class="header-anchor" href="#_3-web-集群配置" aria-label="Permalink to “3. Web 集群配置”">​</a></h3><p>Web 集群配置定义了一组可用的 HTTP 服务器。我们的负载均衡中的大多数设置都在这里。现在我们会创建一些基本配置，定义我们的节点。将配置文件中从 frontend 段开始的内容全部替换为下面的：</p><pre><code>listen webfarm *:80 
       mode http 
       stats enable 
       stats uri /haproxy?stats 
       stats realm Haproxy\\ Statistics 
       stats auth haproxy:stats 
       balance roundrobin 
       cookie LBN insert indirect nocache 
       option httpclose 
       option forwardfor 
       server web01 192.168.100.2:80 cookie node1 check 
       server web02 192.168.100.3:80 cookie node2 check 
</code></pre><p>&quot;listen webfarm *:80&quot; 定义了负载均衡器监听的地址和端口。为了教程的需要，我设置为 &quot;*&quot; 表示监听在所有接口上。在真实的场景汇总，这样设置可能不太合适，应该替换为可以从 internet 访问的那个网卡接口。</p><pre><code>stats enable 
stats uri /haproxy?stats 
stats realm Haproxy\\ Statistics 
stats auth haproxy:stats 
</code></pre><p>上面的设置定义了，负载均衡器的状态统计信息可以通过 http://&lt;load-balancer-IP&gt;/haproxy?stats 访问。访问需要简单的 HTTP 认证，用户名为 &quot;haproxy&quot; 密码为 &quot;stats&quot;。这些设置可以替换为你自己的认证方式。如果你不需要状态统计信息，可以完全禁用掉。</p><p>下面是一个 HAProxy 统计信息的例子</p><p><img src="https://farm4.staticflickr.com/3928/15416835905_a678c8f286_c.jpg" alt=""></p><p>&quot;balance roundrobin&quot; 这一行表明我们使用的负载均衡类型。这个教程中，我们使用简单的轮询算法，可以完全满足 HTTP 负载均衡的需要。HAProxy 还提供其他的负载均衡类型：</p><ul><li><strong>leastconn</strong>：将请求调度至连接数最少的服务器­</li><li><strong>source</strong>：对请求的客户端 IP 地址进行哈希计算，根据哈希值和服务器的权重将请求调度至后端服务器。</li><li><strong>uri</strong>：对 URI 的左半部分（问号之前的部分）进行哈希，根据哈希结果和服务器的权重对请求进行调度</li><li><strong>url_param</strong>：根据每个 HTTP GET 请求的 URL 查询参数进行调度，使用固定的请求参数将会被调度至指定的服务器上</li><li><strong>hdr(name</strong>)：根据 HTTP 首部中的 &lt;name&gt; 字段来进行调度</li></ul><p>&quot;cookie LBN insert indirect nocache&quot; 这一行表示我们的负载均衡器会存储 cookie 信息，可以将后端服务器池中的节点与某个特定会话绑定。节点的 cookie 存储为一个自定义的名字。这里，我们使用的是 &quot;LBN&quot;，你可以指定其他的名称。后端节点会保存这个 cookie 的会话。</p><pre><code>server web01 192.168.100.2:80 cookie node1 check 
server web02 192.168.100.3:80 cookie node2 check 
</code></pre><p>上面是我们的 Web 服务器节点的定义。服务器有由内部名称（如web01，web02），IP 地址和唯一的 cookie 字符串表示。cookie 字符串可以自定义，我这里使用的是简单的 node1，node2 ... node(n)</p><h2 id="启动-haproxy" tabindex="-1">启动 HAProxy <a class="header-anchor" href="#启动-haproxy" aria-label="Permalink to “启动 HAProxy”">​</a></h2><p>如果你完成了配置，现在启动 HAProxy 并验证是否运行正常。</p><h3 id="在-centos-rhel-中启动-haproxy" tabindex="-1">在 Centos/RHEL 中启动 HAProxy <a class="header-anchor" href="#在-centos-rhel-中启动-haproxy" aria-label="Permalink to “在 Centos/RHEL 中启动 HAProxy”">​</a></h3><p>让 HAProxy 开机自启，使用下面的命令</p><pre><code># chkconfig haproxy on
# service haproxy start 
</code></pre><p>当然，防火墙需要开放 80 端口，像下面这样</p><p>####CentOS/RHEL 7 的防火墙####</p><pre><code># firewall­cmd ­­permanent ­­zone=public ­­add­port=80/tcp
# firewall­cmd ­­reload 
</code></pre><p>####CentOS/RHEL 6 的防火墙####</p><p>把下面内容加至 /etc/sysconfig/iptables 中的 &quot;:OUTPUT ACCEPT&quot; 段中</p><pre><code>­A INPUT ­m state ­­state NEW ­m tcp ­p tcp ­­dport 80 ­j ACCEPT 
</code></pre><p>重启<strong>iptables</strong>：</p><pre><code># service iptables restart 
</code></pre><h3 id="在-debian-中启动-haproxy" tabindex="-1">在 Debian 中启动 HAProxy <a class="header-anchor" href="#在-debian-中启动-haproxy" aria-label="Permalink to “在 Debian 中启动 HAProxy”">​</a></h3><p>启动 HAProxy</p><pre><code># service haproxy start 
</code></pre><p>不要忘了防火墙开放 80 端口，在 /etc/iptables.up.rules 中加入：</p><pre><code>­A INPUT ­p tcp ­­dport 80 ­j ACCEPT 
</code></pre><h3 id="在-ubuntu-中启动haproxy" tabindex="-1">在 Ubuntu 中启动HAProxy <a class="header-anchor" href="#在-ubuntu-中启动haproxy" aria-label="Permalink to “在 Ubuntu 中启动HAProxy”">​</a></h3><p>让 HAProxy 开机自动启动在 /etc/default/haproxy 中配置</p><pre><code>ENABLED=1 
</code></pre><p>启动 HAProxy：</p><pre><code># service haproxy start 
</code></pre><p>防火墙开放 80 端口：</p><pre><code># ufw allow 80 
</code></pre><h2 id="测试-haproxy" tabindex="-1">测试 HAProxy <a class="header-anchor" href="#测试-haproxy" aria-label="Permalink to “测试 HAProxy”">​</a></h2><p>检查 HAProxy 是否工作正常，我们可以这样做</p><p>首先准备一个 test.php 文件，文件内容如下</p><pre><code>&lt;?php
header(&#39;Content-Type: text/plain&#39;);
echo &quot;Server IP: &quot;.$_SERVER[&#39;SERVER_ADDR&#39;];
echo &quot;\\nX-Forwarded-for: &quot;.$_SERVER[&#39;HTTP_X_FORWARDED_FOR&#39;];
?&gt;
</code></pre><p>这个 PHP 文件会告诉我们哪台服务器（如负载均衡）转发了请求，哪台后端 Web 服务器实际处理了请求。</p><p>将这个 PHP 文件放到两个后端 Web 服务器的 Web 根目录中。然后用 curl 命令通过负载均衡器（192.168.100.4）访问这个文件</p><pre><code>$ curl http://192.168.100.4/test.php 
</code></pre><p>我们多次运行这个命令此时，会发现交替的输出下面的内容（因为使用了轮询算法）：</p><pre><code>Server IP: 192.168.100.2
X-Forwarded-for: 192.168.100.4
</code></pre><hr><pre><code>Server IP: 192.168.100.3
X-Forwarded-for: 192.168.100.4
</code></pre><p>如果我们停掉一台后端 Web 服务，curl 命令仍然正常工作，请求被分发至另一台可用的 Web 服务器。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h2><p>现在你有了一个完全可用的负载均衡器，以轮询的模式对你的 Web 节点进行负载均衡。还可以去实验其他的配置选项以适应你的环境。希望这个教程可以帮助你们的 Web 项目有更好的可用性。</p><p>你可能已经发现了，这个教程只包含单台负载均衡的设置。这意味着我们仍然有单点故障的问题。在真实场景中，你应该至少部署 2 台或者 3 台负载均衡以防止意外发生，但这不是本教程的范围。</p><p>如果你有任何问题或建议，请在评论中提出，我会尽我的努力回答。</p><hr>`,93)),r("p",null,[e[10]||(e[10]=o("via: ",-1)),t(a,{href:"http://xmodulo.com/haproxy-http-load-balancer-linux.html"},{default:n(()=>[...e[9]||(e[9]=[o("http://xmodulo.com/haproxy-http-load-balancer-linux.html",-1)])]),_:1})]),r("p",null,[e[14]||(e[14]=o("作者：",-1)),t(a,{href:"http://xmodulo.com/author/jaroslav"},{default:n(()=>[...e[11]||(e[11]=[o("Jaroslav Štěpánek",-1)])]),_:1}),e[15]||(e[15]=o(" 译者：",-1)),t(a,{href:"https://github.com/liaoishere"},{default:n(()=>[...e[12]||(e[12]=[o("Liao",-1)])]),_:1}),e[16]||(e[16]=o(" 校对：",-1)),t(a,{href:"https://github.com/wxy"},{default:n(()=>[...e[13]||(e[13]=[o("wxy",-1)])]),_:1})]),r("p",null,[e[19]||(e[19]=o("本文由 ",-1)),t(a,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[17]||(e[17]=[o("LCTT",-1)])]),_:1}),e[20]||(e[20]=o(" 原创翻译，",-1)),t(a,{href:"http://linux.cn/"},{default:n(()=>[...e[18]||(e[18]=[o("Linux中国",-1)])]),_:1}),e[21]||(e[21]=o(" 荣誉推出",-1))])])}const f=p(x,[["render",h]]);export{m as __pageData,f as default};
