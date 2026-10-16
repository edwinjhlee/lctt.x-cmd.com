import{_ as t,a0 as o,w as r,s as d,ao as i,I as a,a1 as l,A as e,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"Ansible 起步指南 | LCTT x X-CMD","titleTemplate":false,"description":"Ansible 起步指南 | LCTT (201701) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Ansible 起步指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Ansible 起步指南 | LCTT (201701) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201701/20161005  GETTING STARTED WITH ANSIBLE","title":"Ansible 起步指南","tag":"201701","desc":""},"relativePath":"201701/20161005  GETTING STARTED WITH ANSIBLE.md","filePath":"[post].md"}'),c={name:"201701/20161005  GETTING STARTED WITH ANSIBLE.md"};function b(h,s,u,g,k,m){const p=o("Link");return r(),d("div",null,[s[81]||(s[81]=i('<h1 id="ansible-起步指南" tabindex="-1">Ansible 起步指南 <a class="header-anchor" href="#ansible-起步指南" aria-label="Permalink to “Ansible 起步指南”">​</a></h1><p>这是一篇关于 Ansible 的速成课程，你可以用作小项目的模板，或者帮你深入了解这个神奇的工具。阅读了本指南之后，你将对自动化服务器配置、部署等有足够的了解。</p><h3 id="ansible-是什么-为什么你该了解" tabindex="-1">Ansible 是什么，为什么你该了解？ <a class="header-anchor" href="#ansible-是什么-为什么你该了解" aria-label="Permalink to “Ansible 是什么，为什么你该了解？”">​</a></h3><p>Ansible 简单的说是一个配置管理系统（configuration management system）。你只需要可以使用 ssh 访问你的服务器或设备就行。它也不同于其他工具，因为它使用推送的方式，而不是像 puppet 或 chef 那样使用拉取的方式。你可以将代码部署到任意数量的服务器上，配置网络设备或在基础架构中自动执行任何操作。</p><h3 id="前置要求" tabindex="-1">前置要求 <a class="header-anchor" href="#前置要求" aria-label="Permalink to “前置要求”">​</a></h3><p>假设你使用 Mac 或 Linux 作为你的工作站，Ubuntu Trusty 作为你的服务器，并有一些安装软件包的经验。此外，你的计算机上将需要以下软件。所以，如果你还没有它们，请先安装：</p>',6)),a("ul",null,[a("li",null,[l(p,{href:"https://www.virtualbox.org/"},{default:e(()=>[...s[0]||(s[0]=[n("Virtualbox",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://www.vagrantup.com/downloads.html"},{default:e(()=>[...s[1]||(s[1]=[n("Vagrant",-1)])]),_:1})]),a("li",null,[s[3]||(s[3]=n("Mac 用户：",-1)),l(p,{href:"http://brew.sh/"},{default:e(()=>[...s[2]||(s[2]=[n("Homebrew",-1)])]),_:1})])]),s[82]||(s[82]=i(`<h3 id="情景" tabindex="-1">情景 <a class="header-anchor" href="#情景" aria-label="Permalink to “情景”">​</a></h3><p>我们将模拟 2 个连接到 MySQL 数据库的 Web 应用程序服务器。Web 应用程序使用 Rails 5 和 Puma。</p><h3 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to “准备”">​</a></h3><h4 id="vagrantfile" tabindex="-1">Vagrantfile <a class="header-anchor" href="#vagrantfile" aria-label="Permalink to “Vagrantfile”">​</a></h4><p>为这个项目创建一个文件夹，并将下面的内容保存到名为 <code>Vagrantfile</code> 的文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>VMs = [</span></span>
<span class="line"><span>    [ &quot;web1&quot;, &quot;10.1.1.11&quot;],</span></span>
<span class="line"><span>    [ &quot;web2&quot;, &quot;10.1.1.12&quot;],</span></span>
<span class="line"><span>    [ &quot;dbserver&quot;, &quot;10.1.1.21&quot;],</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vagrant.configure(2) do |config|</span></span>
<span class="line"><span>  VMs.each { |vm|</span></span>
<span class="line"><span>    config.vm.define vm[0] do |box|</span></span>
<span class="line"><span>      box.vm.box = &quot;ubuntu/trusty64&quot;</span></span>
<span class="line"><span>      box.vm.network &quot;private_network&quot;, ip: vm[1]</span></span>
<span class="line"><span>      box.vm.hostname = vm[0]</span></span>
<span class="line"><span>      box.vm.provider &quot;virtualbox&quot; do |vb|</span></span>
<span class="line"><span>         vb.memory = &quot;512&quot;</span></span>
<span class="line"><span>      end</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>end</span></span></code></pre></div><h4 id="配置你的虚拟网络" tabindex="-1">配置你的虚拟网络 <a class="header-anchor" href="#配置你的虚拟网络" aria-label="Permalink to “配置你的虚拟网络”">​</a></h4><p>我们希望我们的虚拟机能互相交互，但不要让流量流出到真实的网络，所以我们将在 Virtualbox 中创建一个仅主机（HOST-Only）的网络适配器。</p><ol><li>打开 Virtualbox</li><li>转到 Preferences</li><li>转到 Network</li><li>单击 Host-Only</li><li>单击添加网络</li><li>单击 Adapter</li><li>将 IPv4 设置为 <code>10.1.1.1</code>，IPv4 网络掩码：<code>255.255.255.0</code></li><li>单击 “OK”</li></ol><h4 id="测试虚拟机及虚拟网络" tabindex="-1">测试虚拟机及虚拟网络 <a class="header-anchor" href="#测试虚拟机及虚拟网络" aria-label="Permalink to “测试虚拟机及虚拟网络”">​</a></h4><p>在终端中，在存放 <code>Vagrantfile</code> 的项目目录中，输入下面的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant up</span></span></code></pre></div><p>它会创建你的虚拟机，因此会花费一会时间。输入下面的命令并验证输出内容以检查是否已经工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vagrant status</span></span>
<span class="line"><span>Current machine states:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>web1                      running (virtualbox)</span></span>
<span class="line"><span>web2                      running (virtualbox)</span></span>
<span class="line"><span>master                    running (virtualbox)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This environment represents multiple VMs. The VMs are all listed</span></span>
<span class="line"><span>above with their current state. For more information about a specific</span></span>
<span class="line"><span>VM, run \`vagrant status NAME\`.</span></span></code></pre></div><p>现在使用 <code>vagrant</code> 的用户名和密码 ，按 <code>Vagrantfile</code> 中的 IP 登录其中一台虚拟机，这将验证虚拟机并将它们的密钥添加到你的已知主机（<code>known_hosts</code>）文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ssh vagrant@10.1.1.11 # password is \`vagrant\`</span></span>
<span class="line"><span>ssh vagrant@10.1.1.12</span></span>
<span class="line"><span>ssh vagrant@10.1.1.21</span></span></code></pre></div><p>恭喜你！现在你已经有可以实验的服务器了。下面的剩下的部分！</p><h3 id="安装-ansible" tabindex="-1">安装 Ansible <a class="header-anchor" href="#安装-ansible" aria-label="Permalink to “安装 Ansible”">​</a></h3><p>对于 Mac 用户:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ brew install ansible</span></span></code></pre></div><p>对于 Ubuntu 用户:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt install ansible</span></span></code></pre></div><p>确保你使用了ansible 最近的版本 2.1 或者更高的版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible --version</span></span>
<span class="line"><span>ansible 2.1.1.0</span></span></code></pre></div><h3 id="清单" tabindex="-1">清单 <a class="header-anchor" href="#清单" aria-label="Permalink to “清单”">​</a></h3><p>Ansible 使用清单文件来了解要使用的服务器，以及如何将它们分组以并行执行任务。让我们为这个项目创建我们的清单文件 <code>inventory</code>，并将它放在与 <code>Vagrantfile</code> 相同的文件夹中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[all:children]</span></span>
<span class="line"><span>webs</span></span>
<span class="line"><span>db</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[all:vars]</span></span>
<span class="line"><span>ansible_user=vagrant</span></span>
<span class="line"><span>ansible_ssh_pass=vagrant</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[webs]</span></span>
<span class="line"><span>web1 ansible_host=10.1.1.11</span></span>
<span class="line"><span>web2 ansible_host=10.1.1.12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[db]</span></span>
<span class="line"><span>dbserver ansible_host=10.1.1.21</span></span></code></pre></div><ul><li><code>[all：children]</code> 定义一个组的组（<code>all</code>）</li><li><code>[all：vars]</code> 定义属于组 <code>all</code> 的变量</li><li><code>[webs]</code> 定义一个组，就像 <code>[db]</code> 一样</li><li>文件的其余部分只是主机的声明，带有它们的名称和 IP</li><li>空行表示声明结束</li></ul><p>现在我们有了一个清单，我们可以从命令行开始使用 ansible，指定一个主机或一个组来执行命令。以下是检查与服务器的连接的命令示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible -i inventory all -m ping</span></span></code></pre></div><ul><li><code>-i</code> 指定清单文件</li><li><code>all</code> 指定要操作的服务器或服务器组</li><li><code>-m</code> 指定一个 ansible 模块，在这种情况下为 <code>ping</code></li></ul><p>下面是命令输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dbserver | SUCCESS =&gt; {</span></span>
<span class="line"><span>    &quot;changed&quot;: false,</span></span>
<span class="line"><span>    &quot;ping&quot;: &quot;pong&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>web1 | SUCCESS =&gt; {</span></span>
<span class="line"><span>    &quot;changed&quot;: false,</span></span>
<span class="line"><span>    &quot;ping&quot;: &quot;pong&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>web2 | SUCCESS =&gt; {</span></span>
<span class="line"><span>    &quot;changed&quot;: false,</span></span>
<span class="line"><span>    &quot;ping&quot;: &quot;pong&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>服务器以不同的顺序响应，这只取决于谁先响应，但是这个没有关系，因为 ansible 独立保持每台服务器的状态。</p><p>你也可以使用另外一个选项来运行任何命令：</p><ul><li><code>-a &lt;command&gt;</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible -i inventory all -a uptime</span></span>
<span class="line"><span>web1 | SUCCESS | rc=0 &gt;&gt;</span></span>
<span class="line"><span> 21:43:27 up 25 min,  1 user,  load average: 0.00, 0.01, 0.05</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dbserver | SUCCESS | rc=0 &gt;&gt;</span></span>
<span class="line"><span> 21:43:27 up 24 min,  1 user,  load average: 0.00, 0.01, 0.05</span></span>
<span class="line"><span></span></span>
<span class="line"><span>web2 | SUCCESS | rc=0 &gt;&gt;</span></span>
<span class="line"><span> 21:43:27 up 25 min,  1 user,  load average: 0.00, 0.01, 0.05</span></span></code></pre></div><p>这是只有一台服务器的另外一个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible -i inventory dbserver -a &quot;df -h /&quot;</span></span>
<span class="line"><span>dbserver | SUCCESS | rc=0 &gt;&gt;</span></span>
<span class="line"><span>Filesystem      Size  Used Avail Use% Mounted on</span></span>
<span class="line"><span>/dev/sda1        40G  1.4G   37G   4% /</span></span></code></pre></div><h3 id="剧本" tabindex="-1">剧本 <a class="header-anchor" href="#剧本" aria-label="Permalink to “剧本”">​</a></h3>`,40)),a("p",null,[s[5]||(s[5]=n("剧本（playbook）只是个 YAML 文件，它将清单文件中的服务器组与命令关联。在 ansible 中的对于关键字是 ",-1)),s[6]||(s[6]=a("code",null,"tasks",-1)),s[7]||(s[7]=n("，它可以是一个预期的状态、shell 命令或许多其它的选项。有关 ansible 可做的所有事情列表，可以查看",-1)),l(p,{href:"http://docs.ansible.com/ansible/list_of_all_modules.html"},{default:e(()=>[...s[4]||(s[4]=[n("所有模块的列表",-1)])]),_:1}),s[8]||(s[8]=n("。",-1))]),s[83]||(s[83]=i(`<p>下面是一个运行 shell 命令的剧本示例，将其保存为 <code>playbook1.yml</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: all</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - shell: uptime</span></span></code></pre></div>`,2)),a("ul",null,[s[13]||(s[13]=a("li",null,[a("code",null,"---"),n(" 是 YAML 文件的开始")],-1)),s[14]||(s[14]=a("li",null,[a("code",null," - hosts"),n("：指定要使用的组")],-1)),s[15]||(s[15]=a("li",null,[a("code",null,"tasks"),n("：标记任务列表的开始")],-1)),a("li",null,[s[10]||(s[10]=a("code",null," - shell",-1)),s[11]||(s[11]=n("：指定第一个任务使用 ",-1)),l(p,{href:"http://docs.ansible.com/ansible/shell_module.html"},{default:e(()=>[...s[9]||(s[9]=[n("shell",-1)])]),_:1}),s[12]||(s[12]=n(" 模块",-1))]),s[16]||(s[16]=a("li",null,[a("strong",null,"记住：YAML 需要缩进结构，确保你始终遵循剧本中的正确结构")],-1))]),s[84]||(s[84]=i(`<p>用下面的命令运行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook -i inventory playbook1.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY [all] *********************************************************************</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [setup] *******************************************************************</span></span>
<span class="line"><span>ok: [web1]</span></span>
<span class="line"><span>ok: [web2]</span></span>
<span class="line"><span>ok: [dbmaster]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [command] *****************************************************************</span></span>
<span class="line"><span>changed: [web1]</span></span>
<span class="line"><span>changed: [web2]</span></span>
<span class="line"><span>changed: [dbmaster]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY RECAP *********************************************************************</span></span>
<span class="line"><span>dbmaster                   : ok=2    changed=1    unreachable=0    failed=0</span></span>
<span class="line"><span>web1                       : ok=2    changed=1    unreachable=0    failed=0</span></span>
<span class="line"><span>web2                       : ok=2    changed=1    unreachable=0    failed=0</span></span></code></pre></div><p>正如你所见，ansible 运行了 2 个任务，而不是只有剧本中的一个。<code>TASK [setup]</code> 是一个隐式任务，它会首先运行以捕获服务器的信息，如主机名、IP、发行版和更多详细信息，然后可以使用这些信息运行条件任务。</p><p>还有最后的 <code>PLAY RECAP</code>，其中 ansible 显示了运行了多少个任务以及每个对应的状态。在我们的例子中，因为我们运行了一个 shell 命令，ansible 不知道结果的状态，它被认为是 <code>changed</code>。</p><h4 id="安装软件" tabindex="-1">安装软件 <a class="header-anchor" href="#安装软件" aria-label="Permalink to “安装软件”">​</a></h4>`,5)),a("p",null,[s[18]||(s[18]=n("我们将使用 ",-1)),l(p,{href:"http://docs.ansible.com/ansible/apt_module.html"},{default:e(()=>[...s[17]||(s[17]=[n("apt",-1)])]),_:1}),s[19]||(s[19]=n(" 在我们的服务器上安装软件，因为我们需要 root 权限，所以我们必须使用 ",-1)),s[20]||(s[20]=a("code",null,"become",-1)),s[21]||(s[21]=n(" 语句，将这个内容保存在 ",-1)),s[22]||(s[22]=a("code",null,"playbook2.yml",-1)),s[23]||(s[23]=n(" 中并运行它（",-1)),s[24]||(s[24]=a("code",null,"ansible-playbook playbook2.yml",-1)),s[25]||(s[25]=n("）：",-1))]),s[85]||(s[85]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: webs</span></span>
<span class="line"><span>  become_user: root</span></span>
<span class="line"><span>  become: true</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - apt: name=git state=present</span></span></code></pre></div><p>有一些语句可以应用于 ansible 中所有模块；一个是 <code>name</code> 语句，可以让我们输出关于正在执行的任务的更具描述性的文本。要使用它，保持任务内容一样，但是添加 <code>name ：描述性文本</code> 作为第一行，所以我们以前的文本将改成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: webs</span></span>
<span class="line"><span>  become_user: root</span></span>
<span class="line"><span>  become: true</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: This task will make sure git is present on the system</span></span>
<span class="line"><span>      apt: name=git state=present</span></span></code></pre></div><h4 id="使用-with-items" tabindex="-1">使用 <code>with_items</code> <a class="header-anchor" href="#使用-with-items" aria-label="Permalink to “使用 with_items”">​</a></h4><p>当你要处理一个列表时，比如要安装的项目和软件包、要创建的文件，可以用 ansible 提供的 <code>with_items</code>。下面是我们如何在 <code>playbook3.yml</code> 中使用它，同时添加一些我们已经知道的其他语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: all</span></span>
<span class="line"><span>  become_user: root</span></span>
<span class="line"><span>  become: true</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: Installing dependencies</span></span>
<span class="line"><span>      apt: name={{item}} state=present</span></span>
<span class="line"><span>      with_items:</span></span>
<span class="line"><span>        - git</span></span>
<span class="line"><span>        - mysql-client</span></span>
<span class="line"><span>        - libmysqlclient-dev</span></span>
<span class="line"><span>        - build-essential</span></span>
<span class="line"><span>        - python-software-properties</span></span></code></pre></div><h4 id="使用-template-和-vars" tabindex="-1">使用 <code>template</code> 和 <code>vars</code> <a class="header-anchor" href="#使用-template-和-vars" aria-label="Permalink to “使用 template 和 vars”">​</a></h4>`,7)),a("p",null,[s[27]||(s[27]=a("code",null,"vars",-1)),s[28]||(s[28]=n(" 是一个定义变量语句，可以在 ",-1)),s[29]||(s[29]=a("code",null,"task",-1)),s[30]||(s[30]=n(" 语句或 ",-1)),s[31]||(s[31]=a("code",null,"template",-1)),s[32]||(s[32]=n(" 文件中使用。 ",-1)),l(p,{href:"http://jinja.pocoo.org/docs/dev/"},{default:e(()=>[...s[26]||(s[26]=[n("Jinja2",-1)])]),_:1}),s[33]||(s[33]=n(" 是 Ansible 中使用的模板引擎，但是关于它你不需要学习很多。在你的剧本中定义变量，如下所示：",-1))]),s[86]||(s[86]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: all</span></span>
<span class="line"><span>  vars:</span></span>
<span class="line"><span>    - secret_key: VqnzCLdCV9a3jK</span></span>
<span class="line"><span>    - path_to_vault: /opt/very/deep/path</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: Setting a configuration file using template</span></span>
<span class="line"><span>      template: src=myconfig.j2 dest={{path_to_vault}}/app.conf</span></span></code></pre></div><p>正如你看到的，我可以使用 <code>{{path_to_vault}}</code> 作为剧本的一部分，但也因为我使用了 <code>template</code>语句，我可以使用 <code>myconfig.j2</code> 中的任何变量，该文件必须存在一个名为 <code>templates</code> 的子文件夹中。你项目树应该如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>├── Vagrantfile</span></span>
<span class="line"><span>├── inventory</span></span>
<span class="line"><span>├── playbook1.yml</span></span>
<span class="line"><span>├── playbook2.yml</span></span>
<span class="line"><span>└── templates</span></span>
<span class="line"><span>    └── myconfig.j2</span></span></code></pre></div><p>当 ansible 找到一个 <code>template</code> 语句后它会在 <code>templates</code> 文件夹内查找，并将把被 <code>{{</code> 和 <code>}}</code> 括起来的变量展开来。</p><p>示例模板：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>this is just an example vault_dir: {{path_to_vault}} secret_password: {{secret_key}}</span></span></code></pre></div><p>即使你不扩展变量你也可以使用 <code>template</code>。考虑到将来会添加所以我先做了。比如创建一个 <code>hosts.j2</code> 模板并加入主机名和 IP。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>10.1.1.11 web1</span></span>
<span class="line"><span>10.1.1.12 web2</span></span>
<span class="line"><span>10.1.1.21 dbserver</span></span></code></pre></div><p>这里要用像这样的语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  -  name: Installing the hosts file in all servers</span></span>
<span class="line"><span>     template: src=hosts.j2 dest=/etc/hosts mode=644</span></span></code></pre></div><h4 id="shell-命令" tabindex="-1">shell 命令 <a class="header-anchor" href="#shell-命令" aria-label="Permalink to “shell 命令”">​</a></h4><p>你应该尽量使用模块，因为 Ansible 可以跟踪任务的状态，并避免不必要的重复，但有时 shell 命令是不可避免的。 对于这些情况，Ansible 提供两个选项：</p>`,12)),a("ul",null,[a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/command_module.html"},{default:e(()=>[...s[34]||(s[34]=[n("command",-1)])]),_:1}),s[35]||(s[35]=n("：直接运行一个命令，没有环境变量或重定向（",-1)),s[36]||(s[36]=a("code",null,"|",-1)),s[37]||(s[37]=n("，",-1)),s[38]||(s[38]=a("code",null,"<",-1)),s[39]||(s[39]=n("，",-1)),s[40]||(s[40]=a("code",null,">",-1)),s[41]||(s[41]=n(" 等）",-1))]),a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/shell_module.html"},{default:e(()=>[...s[42]||(s[42]=[n("shell",-1)])]),_:1}),s[43]||(s[43]=n("：运行 ",-1)),s[44]||(s[44]=a("code",null,"/bin/sh",-1)),s[45]||(s[45]=n(" 并展开变量和支持重定向",-1))])]),s[87]||(s[87]=a("h4",{id:"其他有用的模块",tabindex:"-1"},[n("其他有用的模块 "),a("a",{class:"header-anchor",href:"#其他有用的模块","aria-label":"Permalink to “其他有用的模块”"},"​")],-1)),a("ul",null,[a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/apt_repository_module.html"},{default:e(()=>[...s[46]||(s[46]=[n("apt_repository",-1)])]),_:1}),s[47]||(s[47]=n(" - 在 Debian 系的发行版中添加/删除包仓库",-1))]),a("li",null,[l(p,{href:"https://docs.ansible.com/ansible/yum_repository_module.html"},{default:e(()=>[...s[48]||(s[48]=[n("yum_repository",-1)])]),_:1}),s[49]||(s[49]=n(" - 在 RedHat 系的发行版中添加/删除包仓库",-1))]),a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/service_module.html"},{default:e(()=>[...s[50]||(s[50]=[n("service",-1)])]),_:1}),s[51]||(s[51]=n(" - 启动/停止/重新启动/启用/禁用服务",-1))]),a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/git_module.html"},{default:e(()=>[...s[52]||(s[52]=[n("git",-1)])]),_:1}),s[53]||(s[53]=n(" - 从 git 服务器部署代码",-1))]),a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/unarchive_module.html"},{default:e(()=>[...s[54]||(s[54]=[n("unarchive",-1)])]),_:1}),s[55]||(s[55]=n(" - 从 Web 或本地源解开软件包",-1))])]),s[88]||(s[88]=a("h4",{id:"只在一台服务器中运行任务",tabindex:"-1"},[n("只在一台服务器中运行任务 "),a("a",{class:"header-anchor",href:"#只在一台服务器中运行任务","aria-label":"Permalink to “只在一台服务器中运行任务”"},"​")],-1)),a("p",null,[s[57]||(s[57]=n("Rails 使用 ",-1)),l(p,{href:"http://edgeguides.rubyonrails.org/active_record_migrations.html"},{default:e(()=>[...s[56]||(s[56]=[n("migrations",-1)])]),_:1}),s[58]||(s[58]=n(" 来逐步更改数据库，但由于你有多个应用程序服务器，因此这些迁移任务不能被分配为组任务，而我们只需要一个服务器来运行迁移。在这种情况下，当使用 ",-1)),s[59]||(s[59]=a("code",null,"run_once",-1)),s[60]||(s[60]=n(" 时，",-1)),s[61]||(s[61]=a("code",null,"run_once",-1)),s[62]||(s[62]=n(" 将分派任务到一个服务器，并直到这个任务完成继续下一个任务。你只需要在你的任务中设置 ",-1)),s[63]||(s[63]=a("code",null,"run_once：true",-1)),s[64]||(s[64]=n("。",-1))]),s[89]||(s[89]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    - name: &#39;Run db:migrate&#39;</span></span>
<span class="line"><span>      shell: cd {{appdir}};rails db:migrate</span></span>
<span class="line"><span>      run_once: true</span></span></code></pre></div><h4 id="会失败的任务" tabindex="-1">会失败的任务 <a class="header-anchor" href="#会失败的任务" aria-label="Permalink to “会失败的任务”">​</a></h4><p>通过指定 <code>ignore_errors：true</code>，你可以运行可能会失败的任务，但不会影响剧本中剩余的任务完成。这是非常有用的，例如，当删除最初并不存在的日志文件时。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    - name: &#39;Delete logs&#39;</span></span>
<span class="line"><span>      shell: rm -f /var/log/nginx/errors.log</span></span>
<span class="line"><span>      ignore_errors: true</span></span></code></pre></div><h3 id="放到一起" tabindex="-1">放到一起 <a class="header-anchor" href="#放到一起" aria-label="Permalink to “放到一起”">​</a></h3><p>现在用我们先前学到的，这里是每个文件的最终版：</p><p><code>Vagrantfile</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>VMs = [</span></span>
<span class="line"><span>    [ &quot;web1&quot;, &quot;10.1.1.11&quot;],</span></span>
<span class="line"><span>    [ &quot;web2&quot;, &quot;10.1.1.12&quot;],</span></span>
<span class="line"><span>    [ &quot;dbserver&quot;, &quot;10.1.1.21&quot;],</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vagrant.configure(2) do |config|</span></span>
<span class="line"><span>  VMs.each { |vm|</span></span>
<span class="line"><span>    config.vm.define vm[0] do |box|</span></span>
<span class="line"><span>      box.vm.box = &quot;ubuntu/trusty64&quot;</span></span>
<span class="line"><span>      box.vm.network &quot;private_network&quot;, ip: vm[1]</span></span>
<span class="line"><span>      box.vm.hostname = vm[0]</span></span>
<span class="line"><span>      box.vm.provider &quot;virtualbox&quot; do |vb|</span></span>
<span class="line"><span>         vb.memory = &quot;512&quot;</span></span>
<span class="line"><span>      end</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>end</span></span></code></pre></div><p><code>inventory</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[all:children]</span></span>
<span class="line"><span>webs</span></span>
<span class="line"><span>db</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[all:vars]</span></span>
<span class="line"><span>ansible_user=vagrant</span></span>
<span class="line"><span>ansible_ssh_pass=vagrant</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[webs]</span></span>
<span class="line"><span>web1 ansible_host=10.1.1.11</span></span>
<span class="line"><span>web2 ansible_host=10.1.1.12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[db]</span></span>
<span class="line"><span>dbserver ansible_host=10.1.1.21</span></span></code></pre></div><p><code>templates/hosts.j2</code>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>10.1.1.11 web1</span></span>
<span class="line"><span>10.1.1.12 web2</span></span>
<span class="line"><span>10.1.1.21 dbserver</span></span></code></pre></div><p><code>templates/my.cnf.j2</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[client]</span></span>
<span class="line"><span>port        = 3306</span></span>
<span class="line"><span>socket      = /var/run/mysqld/mysqld.sock</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqld_safe]</span></span>
<span class="line"><span>socket      = /var/run/mysqld/mysqld.sock</span></span>
<span class="line"><span>nice        = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqld]</span></span>
<span class="line"><span>server-id   = 1</span></span>
<span class="line"><span>user        = mysql</span></span>
<span class="line"><span>pid-file    = /var/run/mysqld/mysqld.pid</span></span>
<span class="line"><span>socket      = /var/run/mysqld/mysqld.sock</span></span>
<span class="line"><span>port        = 3306</span></span>
<span class="line"><span>basedir     = /usr</span></span>
<span class="line"><span>datadir     = /var/lib/mysql</span></span>
<span class="line"><span>tmpdir      = /tmp</span></span>
<span class="line"><span>lc-messages-dir = /usr/share/mysql</span></span>
<span class="line"><span>skip-external-locking</span></span>
<span class="line"><span>bind-address        = 0.0.0.0</span></span>
<span class="line"><span>key_buffer      = 16M</span></span>
<span class="line"><span>max_allowed_packet  = 16M</span></span>
<span class="line"><span>thread_stack        = 192K</span></span>
<span class="line"><span>thread_cache_size       = 8</span></span>
<span class="line"><span>myisam-recover         = BACKUP</span></span>
<span class="line"><span>query_cache_limit   = 1M</span></span>
<span class="line"><span>query_cache_size        = 16M</span></span>
<span class="line"><span>log_error = /var/log/mysql/error.log</span></span>
<span class="line"><span>expire_logs_days    = 10</span></span>
<span class="line"><span>max_binlog_size         = 100M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysqldump]</span></span>
<span class="line"><span>quick</span></span>
<span class="line"><span>quote-names</span></span>
<span class="line"><span>max_allowed_packet  = 16M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mysql]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[isamchk]</span></span>
<span class="line"><span>key_buffer      = 16M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!includedir /etc/mysql/conf.d/</span></span></code></pre></div><p><code>final-playbook.yml</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>- hosts: all</span></span>
<span class="line"><span>  become_user: root</span></span>
<span class="line"><span>  become: true</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: &#39;Install common software on all servers&#39;</span></span>
<span class="line"><span>      apt: name={{item}} state=present</span></span>
<span class="line"><span>      with_items:</span></span>
<span class="line"><span>        - git</span></span>
<span class="line"><span>        - mysql-client</span></span>
<span class="line"><span>        - libmysqlclient-dev</span></span>
<span class="line"><span>        - build-essential</span></span>
<span class="line"><span>        - python-software-properties</span></span>
<span class="line"><span>    - name: &#39;Install hosts file&#39;</span></span>
<span class="line"><span>      template: src=hosts.j2 dest=/etc/hosts mode=644</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- hosts: db</span></span>
<span class="line"><span>  become_user: root</span></span>
<span class="line"><span>  become: true</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: &#39;Software for DB server&#39;</span></span>
<span class="line"><span>      apt: name={{item}} state=present</span></span>
<span class="line"><span>      with_items:</span></span>
<span class="line"><span>        - mysql-server</span></span>
<span class="line"><span>        - percona-xtrabackup</span></span>
<span class="line"><span>        - mytop</span></span>
<span class="line"><span>        - mysql-utilities</span></span>
<span class="line"><span>    - name: &#39;MySQL config file&#39;</span></span>
<span class="line"><span>      template: src=my.cnf.j2 dest=/etc/mysql/my.cnf</span></span>
<span class="line"><span>    - name: &#39;Restart MySQL&#39;</span></span>
<span class="line"><span>      service: name=mysql state=restarted</span></span>
<span class="line"><span>    - name: &#39;Grant access to web app servers&#39;</span></span>
<span class="line"><span>      shell: echo &#39;GRANT ALL PRIVILEGES ON *.* TO &quot;root&quot;@&quot;%&quot; WITH GRANT OPTION;FLUSH PRIVILEGES;&#39;|mysql -u root mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- hosts: webs</span></span>
<span class="line"><span>  vars:</span></span>
<span class="line"><span>    - appdir: /opt/dummyapp</span></span>
<span class="line"><span>  become_user: root</span></span>
<span class="line"><span>  become: true</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: &#39;Add ruby-ng repo&#39;</span></span>
<span class="line"><span>      apt_repository: repo=&#39;ppa:brightbox/ruby-ng&#39;</span></span>
<span class="line"><span>    - name: &#39;Install rails software&#39;</span></span>
<span class="line"><span>      apt: name={{item}} state=present</span></span>
<span class="line"><span>      with_items:</span></span>
<span class="line"><span>        - ruby-dev</span></span>
<span class="line"><span>        - ruby-all-dev</span></span>
<span class="line"><span>        - ruby2.2</span></span>
<span class="line"><span>        - ruby2.2-dev</span></span>
<span class="line"><span>        - ruby-switch</span></span>
<span class="line"><span>        - libcurl4-openssl-dev</span></span>
<span class="line"><span>        - libssl-dev</span></span>
<span class="line"><span>        - zlib1g-dev</span></span>
<span class="line"><span>        - nodejs</span></span>
<span class="line"><span>    - name: &#39;Set ruby to 2.2&#39;</span></span>
<span class="line"><span>      shell: ruby-switch --set ruby2.2</span></span>
<span class="line"><span>    - name: &#39;Install gems&#39;</span></span>
<span class="line"><span>      shell: gem install bundler rails</span></span>
<span class="line"><span>    - name: &#39;Kill puma if running&#39;</span></span>
<span class="line"><span>      shell: file /run/puma.pid &gt;/dev/null &amp;&amp; kill \`cat /run/puma.pid\` 2&gt;/dev/null</span></span>
<span class="line"><span>      ignore_errors: True</span></span>
<span class="line"><span>    - name: &#39;Clone app repo&#39;</span></span>
<span class="line"><span>      git:</span></span>
<span class="line"><span>           repo=https://github.com/c0d5x/rails_dummyapp.git</span></span>
<span class="line"><span>           dest={{appdir}}</span></span>
<span class="line"><span>           version=staging</span></span>
<span class="line"><span>           force=yes</span></span>
<span class="line"><span>    - name: &#39;Run bundler&#39;</span></span>
<span class="line"><span>      shell: cd {{appdir}};bundler</span></span>
<span class="line"><span>    - name: &#39;Run db:setup&#39;</span></span>
<span class="line"><span>      shell: cd {{appdir}};rails db:setup</span></span>
<span class="line"><span>      run_once: true</span></span>
<span class="line"><span>    - name: &#39;Run db:migrate&#39;</span></span>
<span class="line"><span>      shell: cd {{appdir}};rails db:migrate</span></span>
<span class="line"><span>      run_once: true</span></span>
<span class="line"><span>    - name: &#39;Run rails server&#39;</span></span>
<span class="line"><span>      shell: cd {{appdir}};rails server -b 0.0.0.0 -p 80 --pid /run/puma.pid -d</span></span></code></pre></div><h3 id="放在你的环境中" tabindex="-1">放在你的环境中 <a class="header-anchor" href="#放在你的环境中" aria-label="Permalink to “放在你的环境中”">​</a></h3><p>将这些文件放在相同的目录，运行下面的命令打开你的开发环境：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant up</span></span>
<span class="line"><span>ansible-playbook -i inventory final-playbook.yml</span></span></code></pre></div><h3 id="部署新的代码" tabindex="-1">部署新的代码 <a class="header-anchor" href="#部署新的代码" aria-label="Permalink to “部署新的代码”">​</a></h3><p>确保修改了代码并推送到了仓库中。接下来，确保你 git 语句中使用了正确的分支：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    - name: &#39;Clone app repo&#39;</span></span>
<span class="line"><span>      git:</span></span>
<span class="line"><span>           repo=https://github.com/c0d5x/rails_dummyapp.git</span></span>
<span class="line"><span>           dest={{appdir}}</span></span>
<span class="line"><span>           version=staging</span></span>
<span class="line"><span>           force=yes</span></span></code></pre></div><p>作为一个例子，你可以修改 <code>version</code> 字段为 <code>master</code>，再次运行剧本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ansible-playbook -i inventory final-playbook.yml</span></span></code></pre></div><p>检查所有的 web 服务器上的页面是否已更改：<code>http://10.1.1.11</code> 或 <code>http://10.1.1.12</code>。将其更改为 <code>version = staging</code> 并重新运行剧本并再次检查页面。</p><p>你还可以创建只包含与部署相关的任务的替代剧本，以便其运行更快。</p><h3 id="接下来是什么" tabindex="-1">接下来是什么 ？！ <a class="header-anchor" href="#接下来是什么" aria-label="Permalink to “接下来是什么 ？！”">​</a></h3>`,27)),a("p",null,[s[66]||(s[66]=n("这只是可以做的很小一部分。我们没有接触角色（role）、过滤器（filter）、调试等许多其他很棒的功能，但我希望它给了你一个良好的开始！所以，请继续学习并使用它。如果你有任何问题，你可以在 ",-1)),l(p,{href:"https://twitter.com/c0d5x"},{default:e(()=>[...s[65]||(s[65]=[n("twitter",-1)])]),_:1}),s[67]||(s[67]=n(" 或评论栏联系我，让我知道你还想知道哪些关于 ansible 的东西！",-1))]),s[90]||(s[90]=a("hr",null,null,-1)),a("p",null,[s[69]||(s[69]=n("via: ",-1)),l(p,{href:"https://gorillalogic.com/blog/getting-started-with-ansible/?utm_source=webopsweekly&utm_medium=email"},{default:e(()=>[...s[68]||(s[68]=[n("https://gorillalogic.com/blog/getting-started-with-ansible/?utm_source=webopsweekly&utm_medium=email",-1)])]),_:1})]),a("p",null,[s[73]||(s[73]=n("作者：",-1)),l(p,{href:"https://gorillalogic.com/author/josehidalgo/"},{default:e(()=>[...s[70]||(s[70]=[n("JOSE HIDALGO",-1)])]),_:1}),s[74]||(s[74]=n(" 译者：",-1)),l(p,{href:"https://github.com/geekpi"},{default:e(()=>[...s[71]||(s[71]=[n("geekpi",-1)])]),_:1}),s[75]||(s[75]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[72]||(s[72]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[78]||(s[78]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[76]||(s[76]=[n("LCTT",-1)])]),_:1}),s[79]||(s[79]=n(" 组织编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[77]||(s[77]=[n("Linux中国",-1)])]),_:1}),s[80]||(s[80]=n(" 荣誉推出",-1))])])}const C=t(c,[["render",b]]);export{v as __pageData,C as default};
