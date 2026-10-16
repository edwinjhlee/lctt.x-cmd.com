import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"20 分钟建立一个 Ansible 实验室 | LCTT x X-CMD","titleTemplate":false,"description":"20 分钟建立一个 Ansible 实验室 | LCTT (202012) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"20 分钟建立一个 Ansible 实验室 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"20 分钟建立一个 Ansible 实验室 | LCTT (202012) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202012/20201214 Set up an Ansible lab in 20 minutes","title":"20 分钟建立一个 Ansible 实验室","tag":"202012","desc":""},"relativePath":"202012/20201214 Set up an Ansible lab in 20 minutes.md","filePath":"[post].md"}'),u={name:"202012/20201214 Set up an Ansible lab in 20 minutes.md"};function g(b,s,h,m,c,k){const p=o("Link");return r(),d("div",null,[s[46]||(s[46]=a("h1",{id:"_20-分钟建立一个-ansible-实验室",tabindex:"-1"},[n("20 分钟建立一个 Ansible 实验室 "),a("a",{class:"header-anchor",href:"#_20-分钟建立一个-ansible-实验室","aria-label":"Permalink to “20 分钟建立一个 Ansible 实验室”"},"​")],-1)),s[47]||(s[47]=a("blockquote",null,[a("p",null,"建立一个支持学习和实验新软件的环境。")],-1)),s[48]||(s[48]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202012/31/112636h6ck5qd60d44t0mm.jpg",alt:""})],-1)),s[49]||(s[49]=a("p",null,"能够构建和拆解公有云环境是非常有用的，但我们大多数人都不能轻松访问公有云。退而求其次的最好办法就是在本地机器上建立一个实验室，但即使在本地机器上运行也会带来性能、灵活性和其他挑战。大多数时候，本地机器上额外的工作负载会干扰我们日常的工作，它们当然也会影响你提供一个现成的环境来玩耍和实验新软件。",-1)),a("p",null,[s[1]||(s[1]=n("几年前，当我和我的团队开始学习 ",-1)),e(p,{href:"https://opensource.com/resources/what-ansible"},{default:i(()=>[...s[0]||(s[0]=[n("Ansible",-1)])]),_:1}),s[2]||(s[2]=n(" 时，我们就遇到了这个挑战。我们找不到一个可以单独使用的环境，我们对这种情况的失望导致我们中的一些人停止了实验。我们知道需要找到一个解决方案。",-1))]),s[50]||(s[50]=a("p",null,"我们花了很多时间研究各种方案，得出了一套工具，使我们的好奇心能够在我们完全控制的环境中学习。我们可以在本地机器上轮换和拆解实验室环境，而不需要访问内部实验室或公共云。",-1)),s[51]||(s[51]=a("p",null,"本文将解释如何在 20 分钟内以完全自动化的方式在本地机器上部署自己的实验室环境。",-1)),a("p",null,[s[4]||(s[4]=n("你可以在我的 ",-1)),e(p,{href:"https://github.com/mikecali/ansible-labs-101"},{default:i(()=>[...s[3]||(s[3]=[n("GitHub 仓库",-1)])]),_:1}),s[5]||(s[5]=n("中找到这个练习的所有代码。",-1))]),s[52]||(s[52]=a("h3",{id:"工具和软件",tabindex:"-1"},[n("工具和软件 "),a("a",{class:"header-anchor",href:"#工具和软件","aria-label":"Permalink to “工具和软件”"},"​")],-1)),s[53]||(s[53]=a("p",null,"本方案使用以下工具和软件：",-1)),a("ul",null,[a("li",null,[e(p,{href:"https://www.ansible.com/"},{default:i(()=>[...s[6]||(s[6]=[n("Ansible",-1)])]),_:1}),s[7]||(s[7]=n(" 是我们选择的自动化工具，因为它易于使用，而且足够灵活，可以满足实验室的要求。",-1))]),a("li",null,[e(p,{href:"https://www.vagrantup.com/"},{default:i(()=>[...s[8]||(s[8]=[n("Vagrant",-1)])]),_:1}),s[9]||(s[9]=n(" 易于使用，用于构建和维护虚拟机。",-1))]),a("li",null,[e(p,{href:"https://www.virtualbox.org/"},{default:i(()=>[...s[10]||(s[10]=[n("VirtualBox",-1)])]),_:1}),s[11]||(s[11]=n(" 是一个托管管理程序，可以在 Windows 和 Linux 环境中使用。",-1))]),a("li",null,[e(p,{href:"https://getfedora.org/"},{default:i(()=>[...s[12]||(s[12]=[n("Fedora v30+",-1)])]),_:1}),s[13]||(s[13]=n(" 是我本地机器上的操作系统。",-1))])]),s[54]||(s[54]=a("p",null,"你必须进行以下设置才能建立环境：",-1)),a("ul",null,[s[17]||(s[17]=a("li",null,"一个互联网连接",-1)),a("li",null,[s[15]||(s[15]=n("在 BIOS 中启用虚拟化技术支持（以下是在我的联想笔记本上的",-1)),e(p,{href:"https://support.lenovo.com/pt/en/solutions/ht500006"},{default:i(()=>[...s[14]||(s[14]=[n("过程",-1)])]),_:1}),s[16]||(s[16]=n("）",-1))]),s[18]||(s[18]=a("li",null,"Vagrant v2.2.9",-1)),s[19]||(s[19]=a("li",null,"最新版本的 Ansible",-1)),s[20]||(s[20]=a("li",null,"最新版本的 VirtualBox",-1)),s[21]||(s[21]=a("li",null,"Fedora v30+ 宿主机操作系统",-1))]),s[55]||(s[55]=a("h3",{id:"这个实验室环境有什么",tabindex:"-1"},[n("这个实验室环境有什么？ "),a("a",{class:"header-anchor",href:"#这个实验室环境有什么","aria-label":"Permalink to “这个实验室环境有什么？”"},"​")],-1)),a("p",null,[s[23]||(s[23]=n("这个项目旨在部署一个带有 Ansible 引擎和多个 Linux 节点的 Ansible 主机，以及一些预加载和预配置的应用程序（httpd 和 MySQL）。它还启用了 ",-1)),e(p,{href:"https://opensource.com/article/20/11/cockpit-server-management"},{default:i(()=>[...s[22]||(s[22]=[n("Cockpit",-1)])]),_:1}),s[24]||(s[24]=n("，这样你就可以在测试过程中监控虚拟机（VM）的状态。使用预部署的应用程序的原因是为了提高效率（所以你不必花时间安装这些组件）。这样你就可以专注于创建角色和剧本，并针对上述工具部署的环境进行测试。",-1))]),s[56]||(s[56]=a("p",null,"我们确定，对于我们的用例来说，最好的方案是多机 Vagrant 环境。Vagrant 文件创建了三个 CentOS 虚拟机，以模拟两个目标主机和一个 Ansible 控制机。",-1)),s[57]||(s[57]=a("ul",null,[a("li",null,"Host1: 没有图形用户界面（GUI），安装 httpd 和 MySQL"),a("li",null,"Host2: 没有 GUI，安装了 httpd 和 MySQL"),a("li",null,"Ansible-host：没有 GUI，安装了 Ansible 引擎")],-1)),s[58]||(s[58]=a("h3",{id:"启用多个管理程序",tabindex:"-1"},[n("启用多个管理程序 "),a("a",{class:"header-anchor",href:"#启用多个管理程序","aria-label":"Permalink to “启用多个管理程序”"},"​")],-1)),a("p",null,[s[26]||(s[26]=n("如果使用了多个管理程序，一些管理程序可能不允许你拉起虚拟机。要解决这个问题，请遵循以下步骤（基于 Vagrant 的",-1)),e(p,{href:"https://www.vagrantup.com/docs/installation"},{default:i(()=>[...s[25]||(s[25]=[n("安装",-1)])]),_:1}),s[27]||(s[27]=n("说明）。",-1))]),s[59]||(s[59]=l(`<p>首先，找出管理程序的名称：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ lsmod | grep kvm</span></span>
<span class="line"><span>kvm_intel             204800  6</span></span>
<span class="line"><span>kvm                   593920  1 kvm_intel</span></span>
<span class="line"><span>irqbypass              16384  1 kvm</span></span></code></pre></div><p>我感兴趣的是 <code>kvm_intel</code>，但你可能需要另一个（比如 <code>kvm_amd</code>）。</p><p>以 root 身份运行以下内容，将该管理程序列入黑名单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &#39;blacklist kvm-intel&#39; &gt;&gt; /etc/modprobe.d/blacklist.conf</span></span></code></pre></div><p>重新启动你的机器并尝试再次运行 Vagrant。</p><h3 id="vagrant-文件" tabindex="-1">Vagrant 文件 <a class="header-anchor" href="#vagrant-文件" aria-label="Permalink to “Vagrant 文件”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat Vagrantfile</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># -*- mode: ruby -*-</span></span>
<span class="line"><span># vi: set ft=ruby :</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vagrant.configure(&quot;2&quot;) do |config|</span></span>
<span class="line"><span># Define VMs with static private IP addresses, vcpu, memory and vagrant-box.</span></span>
<span class="line"><span>  boxes = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      :name =&gt; &quot;web1.demo.com&quot;, ⇒ Host1 this is one of the target nodes</span></span>
<span class="line"><span>      :box =&gt; &quot;centos/8&quot;,             ⇒ OS version</span></span>
<span class="line"><span>      :ram =&gt; 1024,                   ⇒ Allocated memory</span></span>
<span class="line"><span>      :vcpu =&gt; 1,               ⇒  Allocated CPU</span></span>
<span class="line"><span>      :ip =&gt; &quot;192.168.29.2&quot;     ⇒ Allocated IP address of the node</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      :name =&gt; &quot;web2.demo.com&quot;, ⇒ Host2 this is one of the target nodes</span></span>
<span class="line"><span>      :box =&gt; &quot;centos/8&quot;,</span></span>
<span class="line"><span>      :ram =&gt; 1024,</span></span>
<span class="line"><span>      :vcpu =&gt; 1,</span></span>
<span class="line"><span>      :ip =&gt; &quot;192.168.29.3&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      :name =&gt; &quot;ansible-host&quot;, ⇒ Ansible Host with Ansible Engine</span></span>
<span class="line"><span>      :box =&gt; &quot;centos/8&quot;,</span></span>
<span class="line"><span>      :ram =&gt; 8048,</span></span>
<span class="line"><span>      :vcpu =&gt; 1,</span></span>
<span class="line"><span>      :ip =&gt; &quot;192.168.29.4&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # Provision each of the VMs.</span></span>
<span class="line"><span>  boxes.each do |opts|</span></span>
<span class="line"><span>    config.vm.define opts[:name] do |config|</span></span>
<span class="line"><span>#   Only Enable this if you are connecting to Proxy server</span></span>
<span class="line"><span>#      config.proxy.http    = &quot;http://usernam:password@x.y:80&quot;⇒ Needed if you have a proxy</span></span>
<span class="line"><span>#      config.proxy.https   = &quot;http://usernam:password@x.y:80&quot;</span></span>
<span class="line"><span>#      config.proxy.no_proxy = &quot;localhost,127.0.0.1&quot;</span></span>
<span class="line"><span>      config.vm.synced_folder &quot;.&quot;, &quot;/vagrant&quot;, id: &quot;vagrant-root&quot;, disabled: true</span></span>
<span class="line"><span>      config.ssh.insert_key = false</span></span>
<span class="line"><span>      config.vm.box = opts[:box]</span></span>
<span class="line"><span>      config.vm.hostname = opts[:name]</span></span>
<span class="line"><span>      config.vm.provider :virtualbox do |v| ⇒  Defines the vagrant provider</span></span>
<span class="line"><span>        v.memory = opts[:ram]</span></span>
<span class="line"><span>        v.cpus = opts[:vcpu]</span></span>
<span class="line"><span>      end</span></span>
<span class="line"><span>      config.vm.network :private_network, ip: opts[:ip]</span></span>
<span class="line"><span>      config.vm.provision :file do |file|</span></span>
<span class="line"><span>         file.source     = &#39;./keys/vagrant&#39; ⇒ vagrant keys to allow access to the nodes</span></span>
<span class="line"><span>         file.destination    = &#39;/tmp/vagrant&#39; ⇒ the location to copy the vagrant key</span></span>
<span class="line"><span>      end</span></span>
<span class="line"><span>      config.vm.provision :shell, path: &quot;bootstrap-node.sh&quot; ⇒ script that copy hosts entry</span></span>
<span class="line"><span>      config.vm.provision :ansible do |ansible| ⇒ declaration to run ansible playbook</span></span>
<span class="line"><span>        ansible.verbose = &quot;v&quot;</span></span>
<span class="line"><span>        ansible.playbook = &quot;playbook.yml&quot; ⇒ the playbook used to configure the hosts</span></span>
<span class="line"><span>      end</span></span>
<span class="line"><span>        end</span></span>
<span class="line"><span>  end</span></span>
<span class="line"><span>end</span></span></code></pre></div><p>这些是你需要注意的重要文件。</p><ul><li><code>inventory-test.yaml</code>：连接到节点的清单文件</li><li><code>playbook.yaml</code>：Vagrant 供应者调用的用于配置节点的剧本文件</li><li>\`Vagrantfile&#39;：Vagrant 用来部署环境的文件</li><li>Vagrant 密钥文件：连接实验室环境中各节点的 Vagrant 密钥</li></ul><p>你可以根据你的需要调整这些文件。Ansible 的灵活性使你有能力根据你的需要声明性地改变你的环境。</p><h3 id="部署你的实验室环境" tabindex="-1">部署你的实验室环境 <a class="header-anchor" href="#部署你的实验室环境" aria-label="Permalink to “部署你的实验室环境”">​</a></h3>`,13)),a("p",null,[s[29]||(s[29]=n("首先，克隆这个 ",-1)),e(p,{href:"https://github.com/mikecali/ansible-labs-101.git"},{default:i(()=>[...s[28]||(s[28]=[n("GitHub 仓库",-1)])]),_:1}),s[30]||(s[30]=n(" 中的代码：",-1))]),s[60]||(s[60]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git clone https://github.com/mikecali/ansible-labs-101.git</span></span>
<span class="line"><span>Cloning into &#39;ansible-labs-101&#39;...</span></span>
<span class="line"><span>remote: Enumerating objects: 15, done.</span></span>
<span class="line"><span>remote: Counting objects: 100% (15/15), done.</span></span>
<span class="line"><span>remote: Compressing objects: 100% (13/13), done.</span></span>
<span class="line"><span>remote: Total 15 (delta 2), reused 10 (delta 0), pack-reused 0</span></span>
<span class="line"><span>Unpacking objects: 100% (15/15), 6.82 KiB | 634.00 KiB/s, done.</span></span></code></pre></div><p>接下来，将你的目录改为 <code>vagrant-session-2</code>，并查看其内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>Bootstrap-node.sh   inventory   keys   playbook.yml   README.md Vagrantfile</span></span></code></pre></div><p>现在你已经拥有了实验室环境所需的所有工件和配置文件。要部署环境，请运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vagrant up</span></span></code></pre></div><p>只要有一个像样的网络连接，只需要 20 分钟左右就可以得到一个运行环境：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vagrant up</span></span>
<span class="line"><span>Bringing machine &#39;web1.demo.com&#39; up with &#39;virtualbox&#39; provider...</span></span>
<span class="line"><span>Bringing machine &#39;web2.demo.com&#39; up with &#39;virtualbox&#39; provider...</span></span>
<span class="line"><span>Bringing machine &#39;ansible-host&#39; up with &#39;virtualbox&#39; provider...</span></span>
<span class="line"><span>==&gt; web1.demo.com: Importing base box &#39;centos/8&#39;...</span></span>
<span class="line"><span>==&gt; web1.demo.com: Matching MAC address for NAT networking...</span></span>
<span class="line"><span>==&gt; web1.demo.com: Checking if box &#39;centos/8&#39; version &#39;1905.1&#39; is up to date...</span></span>
<span class="line"><span>==&gt; web1.demo.com: Setting the name of the VM: ansible-labs_web1democom_1606434176593_70913</span></span>
<span class="line"><span>==&gt; web1.demo.com: Clearing any previously set network interfaces...</span></span>
<span class="line"><span>==&gt; web1.demo.com: Preparing network interfaces based on configuration...</span></span>
<span class="line"><span>    web1.demo.com: Adapter 1: nat</span></span>
<span class="line"><span>    web1.demo.com: Adapter 2: hostonly</span></span>
<span class="line"><span>==&gt; web1.demo.com: Forwarding ports...</span></span>
<span class="line"><span>    web1.demo.com: 22 (guest) =&gt; 2222 (host) (adapter 1)</span></span>
<span class="line"><span>==&gt; web1.demo.com: Running &#39;pre-boot&#39; VM customizations...</span></span>
<span class="line"><span>==&gt; web1.demo.com: Booting VM...</span></span>
<span class="line"><span>==&gt; web1.demo.com: Waiting for machine to boot. This may take a few minutes...</span></span>
<span class="line"><span>    web1.demo.com: SSH address: 127.0.0.1:2222</span></span>
<span class="line"><span>    web1.demo.com: SSH username: vagrant</span></span>
<span class="line"><span>    web1.demo.com: SSH auth method: private key</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>一旦该剧本执行完成，你会看到这样的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>PLAY RECAP *********************************</span></span>
<span class="line"><span>Ansible-host     : ok=20 changed=11 unreachable=0 failed=0 skipped=0 rescued=0 ignored=3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Real 18m14.288s</span></span>
<span class="line"><span>User 2m26.978s</span></span>
<span class="line"><span>Sys 0m26.849s</span></span></code></pre></div><p>确认所有虚拟机都在运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vagrant status</span></span>
<span class="line"><span>Current machine states:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Web1.demo.com    running (virtualbox)</span></span>
<span class="line"><span>Web2.demo.com    running (virtualbox)</span></span>
<span class="line"><span>ansible-host     running (virtualbox)</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>你可以通过登录其中一个虚拟机进一步调查。访问 <code>ansible-host</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt; vagrant ssh ansible-host</span></span>
<span class="line"><span>Activate the web console with: systemctl enable --now cockpit.socket</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Last login: Thu Nov 26 12:21:23 2020 from 10.0.2.2</span></span>
<span class="line"><span>[vagrant@ansible-host ~] uptime</span></span>
<span class="line"><span>16:46:42 up 1:24, 1 user, load average: 0.00, 0.01, 0.04</span></span></code></pre></div><p>最后，你可以使用 Ansible 模块来 ping 你创建的其他节点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[vagrant@ansible-host]$ ansible -i inventory-test.yaml \\</span></span>
<span class="line"><span>webservers -m ping -u vagrant</span></span>
<span class="line"><span>192.168.29.2 | SUCCESS =&amp;gt; {</span></span>
<span class="line"><span>  &quot;Ansible-facts&quot;: {</span></span>
<span class="line"><span>      &quot;Discovered_interpreter_python&quot;: &quot;/usr/libexec/platform-python&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;Changed&quot;: false;</span></span>
<span class="line"><span>    &quot;Ping&quot;: &quot;pong&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><h3 id="清理" tabindex="-1">清理 <a class="header-anchor" href="#清理" aria-label="Permalink to “清理”">​</a></h3><p>运行如下命令来清理环境：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vagrant destroy [vagrant machine name]</span></span></code></pre></div><p>你的输出会像这样：</p><p><img src="https://opensource.com/sites/default/files/uploads/cleanup.png" alt="Output from cleaning up environment" title="Output from cleaning up environment"></p><h3 id="有创意的学习" tabindex="-1">有创意的学习 <a class="header-anchor" href="#有创意的学习" aria-label="Permalink to “有创意的学习”">​</a></h3><p>在自己的实验室里利用自己的时间学习 Ansible 这样的软件是一个好习惯，但由于受到无法控制的限制，可能会很困难。</p><p>有时候，你需要发挥创意，找到另一种方法。在开源社区中，你可以选择很多方案；我们选择这些工具的主要原因之一是，它们是许多人常用和熟悉的。</p><p>另外，请注意，这些剧本并没有按照我的要求进行优化。请随时改进它们，并在评论中分享你的工作。</p><hr>`,25)),a("p",null,[s[32]||(s[32]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/12/ansible-lab"},{default:i(()=>[...s[31]||(s[31]=[n("https://opensource.com/article/20/12/ansible-lab",-1)])]),_:1})]),a("p",null,[s[37]||(s[37]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/mcalizo"},{default:i(()=>[...s[33]||(s[33]=[n("Mike Calizo",-1)])]),_:1}),s[38]||(s[38]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[34]||(s[34]=[n("lujun9972",-1)])]),_:1}),s[39]||(s[39]=n(" 译者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[35]||(s[35]=[n("wxy",-1)])]),_:1}),s[40]||(s[40]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[36]||(s[36]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[43]||(s[43]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[41]||(s[41]=[n("LCTT",-1)])]),_:1}),s[44]||(s[44]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[42]||(s[42]=[n("Linux中国",-1)])]),_:1}),s[45]||(s[45]=n(" 荣誉推出",-1))])])}const x=t(u,[["render",g]]);export{y as __pageData,x as default};
