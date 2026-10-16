import{_ as n,a0 as d,w as h,s,ao as c,I as r,x as p,a1 as t,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何在 CentOS 7.0 上配置 Ceph 存储 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7.0 上配置 Ceph 存储 | LCTT (201511) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7.0 上配置 Ceph 存储 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7.0 上配置 Ceph 存储 | LCTT (201511) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201511/20151012 How to Setup Red Hat Ceph Storage on CentOS 7.0","title":"如何在 CentOS 7.0 上配置 Ceph 存储","tag":"201511","desc":""},"relativePath":"201511/20151012 How to Setup Red Hat Ceph Storage on CentOS 7.0.md","filePath":"[post].md"}'),l={name:"201511/20151012 How to Setup Red Hat Ceph Storage on CentOS 7.0.md"};function i(m,e,C,g,u,S){const o=d("Link");return h(),s("div",null,[e[13]||(e[13]=c(`<h1 id="如何在-centos-7-0-上配置-ceph-存储" tabindex="-1">如何在 CentOS 7.0 上配置 Ceph 存储 <a class="header-anchor" href="#如何在-centos-7-0-上配置-ceph-存储" aria-label="Permalink to “如何在 CentOS 7.0 上配置 Ceph 存储”">​</a></h1><p>Ceph 是一个将数据存储在单一分布式计算机集群上的开源软件平台。当你计划构建一个云时，你首先需要决定如何实现你的存储。开源的 Ceph 是红帽原生技术之一，它基于称为 RADOS 的对象存储系统，用一组网关 API 表示块、文件、和对象模式中的数据。由于它自身开源的特性，这种便携存储平台能在公有云和私有云上安装和使用。Ceph 集群的拓扑结构是按照备份和信息分布设计的，这种内在设计能提供数据完整性。它的设计目标就是容错、通过正确配置能运行于商业硬件和一些更高级的系统。</p><p>Ceph 能在任何 Linux 发行版上安装，但为了能正确运行，它需要最近的内核以及其它最新的库。在这篇指南中，我们会使用最小化安装的 CentOS-7.0。</p><h3 id="系统资源" tabindex="-1">系统资源 <a class="header-anchor" href="#系统资源" aria-label="Permalink to “系统资源”">​</a></h3><pre><code>**CEPH-STORAGE**
OS: CentOS Linux 7 (Core)
RAM:1 GB
CPU:1 CPU
DISK: 20
Network: 45.79.136.163
FQDN: ceph-storage.linoxide.com

**CEPH-NODE**
OS: CentOS Linux 7 (Core)
RAM:1 GB
CPU:1 CPU
DISK: 20
Network: 45.79.171.138
FQDN: ceph-node.linoxide.com
</code></pre><h3 id="安装前的配置" tabindex="-1">安装前的配置 <a class="header-anchor" href="#安装前的配置" aria-label="Permalink to “安装前的配置”">​</a></h3><p>在安装 Ceph 存储之前，我们要在每个节点上完成一些步骤。第一件事情就是确保每个节点的网络已经配置好并且能相互访问。</p><p><strong>配置 Hosts</strong></p><p>要在每个节点上配置 hosts 条目，要像下面这样打开默认的 hosts 配置文件（LCTT 译注：或者做相应的 DNS 解析）。</p><pre><code># vi /etc/hosts
</code></pre><hr><pre><code>45.79.136.163 ceph-storage ceph-storage.linoxide.com
45.79.171.138 ceph-node ceph-node.linoxide.com
</code></pre><p><strong>安装 VMware 工具</strong></p><p>工作环境是 VMWare 虚拟环境时，推荐你安装它的 open VM 工具。你可以使用下面的命令安装。</p><pre><code>#yum install -y open-vm-tools
</code></pre><p><strong>配置防火墙</strong></p><p>如果你正在使用启用了防火墙的限制性环境，确保在你的 Ceph 存储管理节点和客户端节点中开放了以下的端口。</p><pre><code>你必须在你的 Admin Calamari 节点开放 80、2003、以及4505-4506 端口，并且允许通过 80 号端口到 CEPH 或 Calamari 管理节点，以便你网络中的客户端能访问 Calamari web 用户界面。
</code></pre><p>你可以使用下面的命令在 CentOS 7 中启动并启用防火墙。</p><pre><code>#systemctl start firewalld
#systemctl enable firewalld
</code></pre><p>运行以下命令使 Admin Calamari 节点开放上面提到的端口。</p><pre><code>#firewall-cmd --zone=public --add-port=80/tcp --permanent
#firewall-cmd --zone=public --add-port=2003/tcp --permanent
#firewall-cmd --zone=public --add-port=4505-4506/tcp --permanent
#firewall-cmd --reload
</code></pre><p>在 Ceph Monitor 节点，你要在防火墙中允许通过以下端口。</p><pre><code>#firewall-cmd --zone=public --add-port=6789/tcp --permanent
</code></pre><p>然后允许以下默认端口列表，以便能和客户端以及监控节点交互，并发送数据到其它 OSD。</p><pre><code>#firewall-cmd --zone=public --add-port=6800-7300/tcp --permanent
</code></pre><p>如果你工作在非生产环境，建议你停用防火墙以及 SELinux 设置，在我们的测试环境中我们会停用防火墙以及 SELinux。</p><pre><code>#systemctl stop firewalld
#systemctl disable firewalld
</code></pre><p><strong>系统升级</strong></p><p>现在升级你的系统并重启使所需更改生效。</p><pre><code>#yum update
#shutdown -r 0
</code></pre><h3 id="设置-ceph-用户" tabindex="-1">设置 Ceph 用户 <a class="header-anchor" href="#设置-ceph-用户" aria-label="Permalink to “设置 Ceph 用户”">​</a></h3><p>现在我们会新建一个单独的 sudo 用户用于在每个节点安装 ceph-deploy工具，并允许该用户无密码访问每个节点，因为它需要在 Ceph 节点上安装软件和配置文件而不会有输入密码提示。</p><p>运行下面的命令在 ceph-storage 主机上新建有独立 home 目录的新用户。</p><pre><code>[root@ceph-storage ~]# useradd -d /home/ceph -m ceph
[root@ceph-storage ~]# passwd ceph
</code></pre><p>节点中新建的每个用户都要有 sudo 权限，你可以使用下面展示的命令赋予 sudo 权限。</p><pre><code>[root@ceph-storage ~]# echo &quot;ceph ALL = (root) NOPASSWD:ALL&quot; | sudo tee /etc/sudoers.d/ceph
ceph ALL = (root) NOPASSWD:ALL

[root@ceph-storage ~]# sudo chmod 0440 /etc/sudoers.d/ceph
</code></pre><h3 id="设置-ssh-密钥" tabindex="-1">设置 SSH 密钥 <a class="header-anchor" href="#设置-ssh-密钥" aria-label="Permalink to “设置 SSH 密钥”">​</a></h3><p>现在我们会在 Ceph 管理节点生成 SSH 密钥并把密钥复制到每个 Ceph 集群节点。</p><p>在 ceph-node 运行下面的命令复制它的 ssh 密钥到 ceph-storage。</p><pre><code>[root@ceph-node ~]# ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
Created directory &#39;/root/.ssh&#39;.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
5b:*:*:*:*:*:*:*:*:*:c9 root@ceph-node
The key&#39;s randomart image is:
+--[ RSA 2048]----+
</code></pre><hr><pre><code>[root@ceph-node ~]# ssh-copy-id ceph@ceph-storage
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/k3.png" alt="SSH key"></p><h3 id="配置-pid-数目" tabindex="-1">配置 PID 数目 <a class="header-anchor" href="#配置-pid-数目" aria-label="Permalink to “配置 PID 数目”">​</a></h3><p>要配置 PID 数目的值，我们会使用下面的命令检查默认的内核值。默认情况下，是一个小的最大线程数 32768。</p><p>如下图所示通过编辑系统配置文件配置该值为一个更大的数。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/3-PID-value.png" alt="更改 PID 值"></p><h3 id="配置管理节点服务器" tabindex="-1">配置管理节点服务器 <a class="header-anchor" href="#配置管理节点服务器" aria-label="Permalink to “配置管理节点服务器”">​</a></h3><p>配置并验证了所有网络后，我们现在使用 ceph 用户安装 ceph-deploy。通过打开文件检查 hosts 条目。</p><pre><code>#vim /etc/hosts
ceph-storage 45.79.136.163
ceph-node 45.79.171.138
</code></pre><p>运行下面的命令添加它的库。</p><pre><code>#rpm -Uhv http://ceph.com/rpm-giant/el7/noarch/ceph-release-1-0.el7.noarch.rpm
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/k1.png" alt="添加 Ceph 仓仓库"></p><p>或者创建一个新文件并更新 Ceph 库参数，别忘了替换你当前的 Release 和版本号。</p><pre><code>[root@ceph-storage ~]# vi /etc/yum.repos.d/ceph.repo
</code></pre><hr><pre><code>[ceph-noarch]
name=Ceph noarch packages
baseurl=http://ceph.com/rpm-{ceph-release}/{distro}/noarch
enabled=1
gpgcheck=1
type=rpm-md
gpgkey=https://ceph.com/git/?p=ceph.git;a=blob_plain;f=keys/release.asc
</code></pre><p>之后更新你的系统并安装 ceph-deploy 软件包。</p><h3 id="安装-ceph-deploy-软件包" tabindex="-1">安装 ceph-deploy 软件包 <a class="header-anchor" href="#安装-ceph-deploy-软件包" aria-label="Permalink to “安装 ceph-deploy 软件包”">​</a></h3><p>我们运行下面的命令以及 ceph-deploy 安装命令来更新系统以及最新的 ceph 库和其它软件包。</p><pre><code>#yum update -y &amp;&amp; yum install ceph-deploy -y
</code></pre><h3 id="配置集群" tabindex="-1">配置集群 <a class="header-anchor" href="#配置集群" aria-label="Permalink to “配置集群”">​</a></h3><p>使用下面的命令在 ceph 管理节点新建一个目录并进入新目录，用于收集所有输出文件和日志。</p><pre><code>#mkdir ~/ceph-cluster
#cd ~/ceph-cluster
</code></pre><hr><pre><code>#ceph-deploy new storage
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/k4.png" alt="设置 ceph 集群"></p><p>如果成功执行了上面的命令，你会看到它新建了配置文件。</p><p>现在配置 Ceph 默认的配置文件，用任意编辑器打开它并在会影响你公共网络的 global 参数下面添加以下两行。</p><pre><code>#vim ceph.conf
osd pool default size = 1
public network = 45.79.0.0/16
</code></pre><h3 id="安装-ceph" tabindex="-1">安装 Ceph <a class="header-anchor" href="#安装-ceph" aria-label="Permalink to “安装 Ceph”">​</a></h3><p>现在我们准备在和 Ceph 集群相关的每个节点上安装 Ceph。我们使用下面的命令在 ceph-storage 和 ceph-node 上安装 Ceph。</p><pre><code>#ceph-deploy install ceph-node ceph-storage
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/k5.png" alt="安装 ceph"></p><p>处理所有所需仓库和安装所需软件包会需要一些时间。</p><p>当两个节点上的 ceph 安装过程都完成后，我们下一步会通过在相同节点上运行以下命令创建监视器并收集密钥。</p><pre><code>#ceph-deploy mon create-initial
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/k6.png" alt="Ceph 初始化监视器"></p><h3 id="设置-osds-和-osd-守护进程" tabindex="-1">设置 OSDs 和 OSD 守护进程 <a class="header-anchor" href="#设置-osds-和-osd-守护进程" aria-label="Permalink to “设置 OSDs 和 OSD 守护进程”">​</a></h3><p>现在我们会设置磁盘存储，首先运行下面的命令列出你所有可用的磁盘。</p><pre><code>#ceph-deploy disk list ceph-storage
</code></pre><p>结果中会列出你存储节点中使用的磁盘，你会用它们来创建 OSD。让我们运行以下包括你磁盘名称的命令。</p><pre><code>#ceph-deploy disk zap storage:sda
#ceph-deploy disk zap storage:sdb
</code></pre><p>为了最后完成 OSD 配置，运行下面的命令配置日志磁盘以及数据磁盘。</p><pre><code>#ceph-deploy osd prepare storage:sdb:/dev/sda
#ceph-deploy osd activate storage:/dev/sdb1:/dev/sda1
</code></pre><p>你需要在所有节点上运行相同的命令，它会清除你磁盘上的所有东西。之后为了集群能运转起来，我们需要使用以下命令从 ceph 管理节点复制不同的密钥和配置文件到所有相关节点。</p><pre><code>#ceph-deploy admin ceph-node ceph-storage
</code></pre><h3 id="测试-ceph" tabindex="-1">测试 Ceph <a class="header-anchor" href="#测试-ceph" aria-label="Permalink to “测试 Ceph”">​</a></h3><p>我们快完成了 Ceph 集群设置，让我们在 ceph 管理节点上运行下面的命令检查正在运行的 ceph 状态。</p><pre><code>#ceph status
#ceph health
HEALTH_OK
</code></pre><p>如果你在 ceph status 中没有看到任何错误信息，就意味着你成功地在 CentOS 7 上安装了 ceph 存储集群。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>在这篇详细的文章中我们学习了如何使用两台安装了 CentOS 7 的虚拟机设置 Ceph 存储集群，这能用于备份或者作为用于处理其它虚拟机的本地存储。我们希望这篇文章能对你有所帮助。当你试着安装的时候记得分享你的经验。</p><hr>`,95)),r("p",null,[e[1]||(e[1]=p("via: ",-1)),t(o,{href:"http://linoxide.com/storage/setup-red-hat-ceph-storage-centos-7-0/"},{default:a(()=>[...e[0]||(e[0]=[p("http://linoxide.com/storage/setup-red-hat-ceph-storage-centos-7-0/",-1)])]),_:1})]),r("p",null,[e[5]||(e[5]=p("作者：",-1)),t(o,{href:"http://linoxide.com/author/kashifs/"},{default:a(()=>[...e[2]||(e[2]=[p("Kashif Siddique",-1)])]),_:1}),e[6]||(e[6]=p(" 译者：",-1)),t(o,{href:"http://mutouxiaogui.cn/blog/"},{default:a(()=>[...e[3]||(e[3]=[p("ictlyh",-1)])]),_:1}),e[7]||(e[7]=p(" 校对：",-1)),t(o,{href:"https://github.com/wxy"},{default:a(()=>[...e[4]||(e[4]=[p("wxy",-1)])]),_:1})]),r("p",null,[e[10]||(e[10]=p("本文由 ",-1)),t(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[p("LCTT",-1)])]),_:1}),e[11]||(e[11]=p(" 原创编译，",-1)),t(o,{href:"https://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[p("Linux中国",-1)])]),_:1}),e[12]||(e[12]=p(" 荣誉推出",-1))])])}const x=n(l,[["render",i]]);export{y as __pageData,x as default};
