import{_ as r,a0 as p,w as u,s as N,I as s,x as l,a1 as e,A as i,ao as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"使用 ansible 安装 NGINX 和 NGINX Plus | LCTT x X-CMD","titleTemplate":false,"description":"使用 ansible 安装 NGINX 和 NGINX Plus | LCTT (201510) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 ansible 安装 NGINX 和 NGINX Plus | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 ansible 安装 NGINX 和 NGINX Plus | LCTT (201510) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201510/20150906 Installing NGINX and NGINX Plus With Ansible","title":"使用 ansible 安装 NGINX 和 NGINX Plus","tag":"201510","desc":""},"relativePath":"201510/20150906 Installing NGINX and NGINX Plus With Ansible.md","filePath":"[post].md"}'),d={name:"201510/20150906 Installing NGINX and NGINX Plus With Ansible.md"};function g(a,n,b,m,I,x){const t=p("Link");return u(),N("div",null,[n[146]||(n[146]=s("h1",{id:"使用-ansible-安装-nginx-和-nginx-plus",tabindex:"-1"},[l("使用 ansible 安装 NGINX 和 NGINX Plus "),s("a",{class:"header-anchor",href:"#使用-ansible-安装-nginx-和-nginx-plus","aria-label":"Permalink to “使用 ansible 安装 NGINX 和 NGINX Plus”"},"​")],-1)),s("p",null,[n[1]||(n[1]=l("在生产环境中，我会更喜欢做与自动化相关的所有事情。如果计算机能完成你的任务，何必需要你亲自动手呢？但是，在不断变化并存在多种技术的环境中，创建和实施自动化是一项艰巨的任务。这就是为什么我喜欢 ",-1)),e(t,{href:"http://www.ansible.com/"},{default:i(()=>[...n[0]||(n[0]=[l("Ansible",-1)])]),_:1}),n[2]||(n[2]=l(" 的原因。Ansible 是一个用于 IT 配置管理，部署和业务流程的开源工具，使用起来非常方便。",-1))]),s("p",null,[n[5]||(n[5]=l("我最喜欢 Ansible 的一个特点是，它是完全无客户端的。要管理一个系统，通过 SSH 建立连接，它使用",-1)),e(t,{href:"http://www.paramiko.org/"},{default:i(()=>[...n[3]||(n[3]=[l("Paramiko",-1)])]),_:1}),n[6]||(n[6]=l("（一个 Python 库）或本地的 ",-1)),e(t,{href:"http://www.openssh.com/"},{default:i(()=>[...n[4]||(n[4]=[l("OpenSSH",-1)])]),_:1}),n[7]||(n[7]=l("。Ansible 另一个吸引人的地方是它有许多可扩展的模块。这些模块可被系统管理员用于执行一些的常见任务。特别是，它们使用 Ansible 这个强有力的工具可以跨多个服务器、环境或操作系统安装和配置任何程序，只需要一个控制节点。",-1))]),s("p",null,[n[11]||(n[11]=l("在本教程中，我将带你使用 Ansible 完成安装和部署开源 ",-1)),e(t,{href:"http://nginx.org/en/"},{default:i(()=>[...n[8]||(n[8]=[l("NGINX",-1)])]),_:1}),n[12]||(n[12]=l(" 和我们的商业产品 ",-1)),e(t,{href:"https://www.nginx.com/products/"},{default:i(()=>[...n[9]||(n[9]=[l("NGINX Plus",-1)])]),_:1}),n[13]||(n[13]=l("。我将在 ",-1)),e(t,{href:"http://www.centos.org/"},{default:i(()=>[...n[10]||(n[10]=[l("CentOS",-1)])]),_:1}),n[14]||(n[14]=l(" 服务器上演示，但我也在下面的“在 Ubuntu 上创建 Ansible Playbook 来安装 NGINX 和 NGINX Plus”小节中包含了在 Ubuntu 服务器上部署的细节。",-1))]),n[147]||(n[147]=s("p",null,"在本教程中我将使用 Ansible 1.9.2 版本，并在 CentOS 7.1 服务器上部署运行。",-1)),n[148]||(n[148]=s("pre",null,[s("code",null,`$ ansible --version
ansible 1.9.2

$ cat /etc/redhat-release
CentOS Linux release 7.1.1503 (Core)
`)],-1)),s("p",null,[n[16]||(n[16]=l("如果你还没有 Ansible，可以在 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/intro_installation.html#installing-the-control-machine"},{default:i(()=>[...n[15]||(n[15]=[l("Ansible 网站",-1)])]),_:1}),n[17]||(n[17]=l(" 查看说明并安装它。",-1))]),n[149]||(n[149]=o(`<p>如果你使用的是 CentOS，安装 Ansible 十分简单，只要输入以下命令。如果你想使用源码编译安装或使用其他发行版，请参阅上面 Ansible 链接中的说明。</p><pre><code>$ sudo yum install -y epel-release &amp;&amp; sudo yum install -y ansible
</code></pre><p>根据环境的不同，在本教程中的命令有的可能需要 sudo 权限。文件路径，用户名和目标服务器取决于你的环境的情况。</p><h3 id="创建一个-ansible-playbook-来安装-nginx-centos" tabindex="-1">创建一个 Ansible Playbook 来安装 NGINX (CentOS) <a class="header-anchor" href="#创建一个-ansible-playbook-来安装-nginx-centos" aria-label="Permalink to “创建一个 Ansible Playbook 来安装 NGINX (CentOS)”">​</a></h3><p>首先，我们要为 NGINX 的部署创建一个工作目录，包括子目录和部署配置文件。我通常建议在你的主目录中创建该目录，在文章的所有例子中都会有说明。</p><pre><code>$ cd $HOME
$ mkdir -p ansible-nginx/tasks/
$ touch ansible-nginx/deploy.yml
$ touch ansible-nginx/tasks/install_nginx.yml
</code></pre><p>目录结构看起来是这样的。你可以使用 tree 命令来查看。</p><pre><code>$ tree $HOME/ansible-nginx/
/home/kjones/ansible-nginx/
├── deploy.yml
└── tasks
    └── install_nginx.yml

1 directory, 2 files
</code></pre><p>如果你没有安装 tree 命令，使用以下命令去安装。</p><pre><code>$ sudo yum install -y tree
</code></pre><h4 id="创建主部署文件" tabindex="-1">创建主部署文件 <a class="header-anchor" href="#创建主部署文件" aria-label="Permalink to “创建主部署文件”">​</a></h4><p>接下来，我们在文本编辑器中打开 <strong>deploy.yml</strong>。我喜欢在命令行上使用 vim 来编辑配置文件，在整个教程中也都将使用它。</p><pre><code>$ vim $HOME/ansible-nginx/deploy.yml
</code></pre><p><strong>deploy.yml</strong> 文件是 Ansible 部署的主要文件，在“使用 Ansible 部署 NGINX”小节中，我们运行 ansible‑playbook 命令时会使用此文件。在这个文件中，我们指定 Ansible 运行时使用的库以及其它配置文件。</p>`,14)),s("p",null,[n[19]||(n[19]=l("在这个例子中，我使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/playbooks_roles.html#task-include-files-and-encouraging-reuse"},{default:i(()=>[...n[18]||(n[18]=[l("include",-1)])]),_:1}),n[20]||(n[20]=l(" 模块来指定配置文件一步一步来安装NGINX。虽然可以创建一个非常大的 playbook 文件，我建议你将其分割为小文件，让它们更有条理。include 的示例中可以复制静态内容，复制配置文件，为更高级的部署使用逻辑配置设定变量。",-1))]),n[150]||(n[150]=o(`<p>在文件中输入以下行。我在顶部的注释包含了文件名用于参考。</p><pre><code># ./ansible-nginx/deploy.yml

- hosts: nginx
  tasks:
    - include: &#39;tasks/install_nginx.yml&#39;
</code></pre><p>hosts 语句说明 Ansible 部署 <strong>nginx</strong> 组的所有服务器，服务器在 <strong>/etc/ansible/hosts</strong> 中指定。我们会在下面的“创建 NGINX 服务器列表”小节编辑此文件。</p><p>include 语句说明 Ansible 在部署过程中从 <strong>tasks</strong> 目录下读取并执行 <strong>install_nginx.yml</strong> 文件中的内容。该文件包括以下几步：下载，安装，并启动 NGINX。我们将在下一节创建此文件。</p><h4 id="为-nginx-创建部署文件" tabindex="-1">为 NGINX 创建部署文件 <a class="header-anchor" href="#为-nginx-创建部署文件" aria-label="Permalink to “为 NGINX 创建部署文件”">​</a></h4><p>现在，先保存 <strong>deploy.yml</strong> 文件，并在编辑器中打开 <strong>install_nginx.yml</strong> 。</p><pre><code>$ vim $HOME/ansible-nginx/tasks/install_nginx.yml
</code></pre>`,7)),s("p",null,[n[24]||(n[24]=l("该文件包含有指令（使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/YAMLSyntax.html"},{default:i(()=>[...n[21]||(n[21]=[l("YAML",-1)])]),_:1}),n[25]||(n[25]=l(" 格式写的）， Ansible 会按照指令安装和配置我们的 NGINX 部署过程。每个节（过程中的步骤）起始于一个描述此步骤的 ",-1)),n[26]||(n[26]=s("code",null,"name",-1)),n[27]||(n[27]=l(" 语句（前面有连字符）。 ",-1)),n[28]||(n[28]=s("code",null,"name",-1)),n[29]||(n[29]=l(" 后的字符串是 Ansible 部署过程中输出到标准输出的，可以根据你的意愿来修改。YAML 文件中的节的下一行是在部署过程中将使用的模块。在下面的配置中，使用了 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/yum_module.html"},{default:i(()=>[...n[22]||(n[22]=[s("code",null,"yum",-1)])]),_:1}),n[30]||(n[30]=l(" 和 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/service_module.html"},{default:i(()=>[...n[23]||(n[23]=[s("code",null,"service",-1)])]),_:1}),n[31]||(n[31]=l(" 模块。",-1)),n[32]||(n[32]=s("code",null,"yum",-1)),n[33]||(n[33]=l(" 模块用于在 CentOS 上安装软件包。",-1)),n[34]||(n[34]=s("code",null,"service",-1)),n[35]||(n[35]=l(" 模块用于管理 UNIX 的服务。在这个节的最后一行或几行指定了几个模块的参数（在本例中，这些行以 ",-1)),n[36]||(n[36]=s("code",null,"name",-1)),n[37]||(n[37]=l(" 和 ",-1)),n[38]||(n[38]=s("code",null,"state",-1)),n[39]||(n[39]=l(" 开始）。",-1))]),s("p",null,[n[41]||(n[41]=l("在文件中输入以下行。就像 ",-1)),n[42]||(n[42]=s("strong",null,"deploy.yml",-1)),n[43]||(n[43]=l("，在我们文件的第一行是用于参考的文件名的注释。第一个节告诉 Ansible 在CentOS 7 上从 NGINX 仓库安装该 ",-1)),n[44]||(n[44]=s("strong",null,".rpm",-1)),n[45]||(n[45]=l(" 文件。这让软件包管理器直接从 NGINX 仓库安装最新最稳定的版本。根据你的 CentOS 版本修改路径。所有可用的包的列表可以在 ",-1)),e(t,{href:"http://nginx.org/en/linux_packages.html"},{default:i(()=>[...n[40]||(n[40]=[l("开源 NGINX 网站",-1)])]),_:1}),n[46]||(n[46]=l(" 上找到。接下来的两节告诉 Ansible 使用 ",-1)),n[47]||(n[47]=s("code",null,"yum",-1)),n[48]||(n[48]=l(" 模块安装最新的 NGINX 版本，然后使用 ",-1)),n[49]||(n[49]=s("code",null,"service",-1)),n[50]||(n[50]=l(" 模块启动 NGINX。",-1))]),n[151]||(n[151]=o(`<p><strong>注意:</strong> 在第一个节中，CentOS 包中的路径名可能由于宽度显示为连着的两行。请在一行上输入其完整路径。</p><pre><code># ./ansible-nginx/tasks/install_nginx.yml
 
- name: NGINX | Installing NGINX repo rpm
  yum:
    name: http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
 
- name: NGINX | Installing NGINX
  yum:
    name: nginx
    state: latest
 
- name: NGINX | Starting NGINX
  service:
    name: nginx
    state: started
</code></pre><h4 id="创建-nginx-服务器列表" tabindex="-1">创建 NGINX 服务器列表 <a class="header-anchor" href="#创建-nginx-服务器列表" aria-label="Permalink to “创建 NGINX 服务器列表”">​</a></h4><p>现在，我们设置好了 Ansible 部署的所有配置文件，我们需要告诉 Ansible 部署哪个服务器。我们需要在 Ansible 中指定 <strong>hosts</strong> 文件。先备份现有的文件，并新建一个新文件来部署。</p><pre><code>$ sudo mv /etc/ansible/hosts /etc/ansible/hosts.backup
$ sudo vim /etc/ansible/hosts
</code></pre><p>在文件中输入（或编辑）以下行来创建一个名为 <strong>nginx</strong> 的组并列出安装 NGINX 的服务器。你可以通过主机名、IP 地址、或者在一个范围，例如 <strong>server[1-3].domain.com</strong> 来指定服务器。在这里，我通过 IP 地址指定一台服务器。</p><pre><code># /etc/ansible/hosts

[nginx]
172.16.239.140
</code></pre><h4 id="设置安全性" tabindex="-1">设置安全性 <a class="header-anchor" href="#设置安全性" aria-label="Permalink to “设置安全性”">​</a></h4><p>接近完成了，但在部署之前，我们需要确保 Ansible 已被授权通过 SSH 访问我们的目标服务器。</p>`,9)),s("p",null,[n[52]||(n[52]=l("首选并且最安全的方法是添加 Ansible 所要部署服务器的 RSA SSH 密钥到目标服务器的 ",-1)),n[53]||(n[53]=s("strong",null,"authorized_keys",-1)),n[54]||(n[54]=l(" 文件中，这给予 Ansible 在目标服务器上的不受限制 SSH 权限。要了解更多关于此配置，请参阅 wiki.centos.org 上 ",-1)),e(t,{href:"http://wiki.centos.org/HowTos/Network/SecuringSSH"},{default:i(()=>[...n[51]||(n[51]=[l("安全加固 OpenSSH",-1)])]),_:1}),n[55]||(n[55]=l("。这样，你就可以自动部署而无需用户交互。",-1))]),n[152]||(n[152]=o(`<p>另外，你也可以在部署过程中要求输入密码。我强烈建议你只在测试过程中使用这种方法，因为它是不安全的，没有办法跟踪目标主机的身份（fingerprint）变化。如果你想这样做，将每个目标主机 <strong>/etc/ssh/ssh_config</strong> 文件中 StrictHostKeyChecking 的默认值 yes 改为 no。然后在 ansible-playbook 命令中添加 --ask-pass 参数来让 Ansible 提示输入 SSH 密码。</p><p>在这里，我将举例说明如何编辑 <strong>ssh_config</strong> 文件来禁用在目标服务器上严格的主机密钥检查。我们手动连接 SSH 到我们将部署 NGINX 的服务器，并将 StrictHostKeyChecking 的值更改为 no。</p><pre><code>$ ssh kjones@172.16.239.140
kjones@172.16.239.140&#39;s password:***********
 
[kjones@nginx ]$ sudo vim /etc/ssh/ssh_config
</code></pre><p>当你更改后，保存 <strong>ssh_config</strong>，并通过 SSH 连接到你的 Ansible 服务器。保存后的设置应该如下所示。</p><pre><code># /etc/ssh/ssh_config

StrictHostKeyChecking no
</code></pre><h4 id="运行-ansible-部署-nginx" tabindex="-1">运行 Ansible 部署 NGINX <a class="header-anchor" href="#运行-ansible-部署-nginx" aria-label="Permalink to “运行 Ansible 部署 NGINX”">​</a></h4><p>如果你一直照本教程的步骤来做，你可以运行下面的命令来使用 Ansible 部署 NGINX。（再次提示，如果你设置了 RSA SSH 密钥认证，那么 --ask-pass 参数是不需要的。）在 Ansible 服务器运行命令，并使用我们上面创建的配置文件。</p><pre><code>$ sudo ansible-playbook --ask-pass $HOME/ansible-nginx/deploy.yml
</code></pre><p>Ansible 提示输入 SSH 密码，输出如下。recap 中显示 failed=0 这条信息，意味着部署成功了。</p><pre><code>$ sudo ansible-playbook --ask-pass $HOME/ansible-nginx/deploy.yml
SSH password:
 
PLAY [all] ********************************************************************
 
GATHERING FACTS ***************************************************************
ok: [172.16.239.140]
 
TASK: [NGINX | Installing NGINX repo rpm] *************************************
changed: [172.16.239.140]
 
TASK: [NGINX | Installing NGINX] **********************************************
changed: [172.16.239.140]
 
TASK: [NGINX | Starting NGINX] ************************************************
changed: [172.16.239.140]
 
PLAY RECAP ********************************************************************
172.16.239.140             : ok=4    changed=3    unreachable=0    failed=0
</code></pre><p>如果你没有得到一个成功的 play recap，你可以尝试用 -vvvv 参数（带连接调试的详细信息）再次运行 ansible-playbook 命令来解决部署过程的问题。</p>`,11)),s("p",null,[n[57]||(n[57]=l("当部署成功（假如我们是第一次部署）后，你可以在远程服务器上运行基本的 ",-1)),e(t,{href:"http://curl.haxx.se/"},{default:i(()=>[...n[56]||(n[56]=[l("cURL",-1)])]),_:1}),n[58]||(n[58]=l(" 命令验证 NGINX 。在这里，它会返回 200 OK。Yes！我们使用 Ansible 成功安装了 NGINX。",-1))]),n[153]||(n[153]=s("pre",null,[s("code",null,`$ curl -Is 172.16.239.140 | grep HTTP
HTTP/1.1 200 OK
`)],-1)),n[154]||(n[154]=s("h3",{id:"创建-ansible-playbook-来安装-nginx-plus-centos",tabindex:"-1"},[l("创建 Ansible Playbook 来安装 NGINX Plus (CentOS) "),s("a",{class:"header-anchor",href:"#创建-ansible-playbook-来安装-nginx-plus-centos","aria-label":"Permalink to “创建 Ansible Playbook 来安装 NGINX Plus (CentOS)”"},"​")],-1)),n[155]||(n[155]=s("p",null,"现在，我已经展示了如何安装 NGINX 的开源版本，我将带你完成安装 NGINX Plus。这需要更改一些额外的部署配置，并展示了一些 Ansible 的其他功能。",-1)),n[156]||(n[156]=s("h4",{id:"复制-nginx-plus-上的证书和密钥到-ansible-服务器",tabindex:"-1"},[l("复制 NGINX Plus 上的证书和密钥到 Ansible 服务器 "),s("a",{class:"header-anchor",href:"#复制-nginx-plus-上的证书和密钥到-ansible-服务器","aria-label":"Permalink to “复制 NGINX Plus 上的证书和密钥到 Ansible 服务器”"},"​")],-1)),s("p",null,[n[60]||(n[60]=l("使用 Ansible 安装和配置 NGINX Plus 时，首先我们需要将 ",-1)),e(t,{href:"https://cs.nginx.com/"},{default:i(()=>[...n[59]||(n[59]=[l("NGINX Plus Customer Portal",-1)])]),_:1}),n[61]||(n[61]=l(" NGINX Plus 订阅的密钥和证书复制到 Ansible 部署服务器上的标准位置。",-1))]),s("p",null,[n[63]||(n[63]=l("购买了 NGINX Plus 或正在试用的客户也可以访问 NGINX Plus Customer Portal。如果你有兴趣测试 NGINX Plus，你可以申请免费试用30天，",-1)),e(t,{href:"https://www.nginx.com/#free-trial"},{default:i(()=>[...n[62]||(n[62]=[l("点击这里",-1)])]),_:1}),n[64]||(n[64]=l("。在你注册后不久你将收到一个试用证书和密钥的链接。",-1))]),s("p",null,[n[67]||(n[67]=l("在 Mac 或 Linux 主机上，我在这里使用 ",-1)),e(t,{href:"http://linux.die.net/man/1/scp"},{default:i(()=>[...n[65]||(n[65]=[l("scp",-1)])]),_:1}),n[68]||(n[68]=l(" 工具演示。在 Microsoft Windows 主机，可以使用 ",-1)),e(t,{href:"https://winscp.net/eng/download.php"},{default:i(()=>[...n[66]||(n[66]=[l("WinSCP",-1)])]),_:1}),n[69]||(n[69]=l("。在本教程中，先下载文件到我的 Mac 笔记本电脑上，然后使用 scp 将其复制到 Ansible 服务器。密钥和证书的位置都在我的家目录下。",-1))]),n[157]||(n[157]=o(`<pre><code>$ cd /path/to/nginx-repo-files/
$ scp nginx-repo.* user@destination-server:.
</code></pre><p>接下来，我们通过 SSH 连接到 Ansible 服务器，确保 NGINX Plus 的 SSL 目录存在，移动文件到这儿。</p><pre><code>$ ssh user@destination-server
$ sudo mkdir -p /etc/ssl/nginx/
$ sudo mv nginx-repo.* /etc/ssl/nginx/
</code></pre><p>验证你的 <strong>/etc/ssl/nginx</strong> 目录包含了证书(<strong>.crt</strong>)和密钥(<strong>.key</strong>)文件。你可以使用 tree 命令检查。</p><pre><code>$ tree /etc/ssl/nginx
/etc/ssl/nginx
├── nginx-repo.crt
└── nginx-repo.key
 
0 directories, 2 files
</code></pre><p>如果你没有安装 tree，可以使用下面的命令去安装。</p><pre><code>$ sudo yum install -y tree
</code></pre><h4 id="创建-ansible-目录结构" tabindex="-1">创建 Ansible 目录结构 <a class="header-anchor" href="#创建-ansible-目录结构" aria-label="Permalink to “创建 Ansible 目录结构”">​</a></h4><p>以下执行的步骤和我们的“创建 Ansible Playbook 来安装 NGINX（CentOS)”小节中部署开源 NGINX 的非常相似。首先，我们建一个工作目录用于部署 NGINX Plus 使用。我喜欢将它创建为我主目录的子目录。</p><pre><code>$ cd $HOME
$ mkdir -p ansible-nginx-plus/tasks/
$ touch ansible-nginx-plus/deploy.yml
$ touch ansible-nginx-plus/tasks/install_nginx_plus.yml
</code></pre><p>目录结构看起来像这样。</p><pre><code>$ tree $HOME/ansible-nginx-plus/
/home/kjones/ansible-nginx-plus/
├── deploy.yml
└── tasks
└── install_nginx_plus.yml
 
1 directory, 2 files
</code></pre><h4 id="创建主部署文件-1" tabindex="-1">创建主部署文件 <a class="header-anchor" href="#创建主部署文件-1" aria-label="Permalink to “创建主部署文件”">​</a></h4><p>接下来，像开源的 NGINX 一样，我们使用 vim 创建 <strong>deploy.yml</strong> 文件。</p><pre><code>$ vim ansible-nginx-plus/deploy.yml
</code></pre><p>和开源 NGINX 的部署唯一的区别是，我们将包含文件的名称修改为 <strong>install_nginx_plus.yml</strong>。该文件告诉 Ansible 在 <strong>nginx</strong> 组中的所有服务器（<strong>/etc/ansible/hosts</strong> 中定义的）上部署 NGINX Plus ，然后在部署过程中从 <strong>tasks</strong> 目录读取并执行 <strong>install_nginx_plus.yml</strong> 的内容。</p><pre><code># ./ansible-nginx-plus/deploy.yml
 
- hosts: nginx
  tasks:
    - include: &#39;tasks/install_nginx_plus.yml&#39;
</code></pre><p>如果你之前没有安装过的话，你需要创建 hosts 文件，详细说明在上面的“创建 NGINX 服务器的列表”小节。</p><h4 id="为-nginx-plus-创建部署文件" tabindex="-1">为 NGINX Plus 创建部署文件 <a class="header-anchor" href="#为-nginx-plus-创建部署文件" aria-label="Permalink to “为 NGINX Plus 创建部署文件”">​</a></h4><p>在文本编辑器中打开 <strong>install_nginx_plus.yml</strong>。该文件包含了使用 Ansible 来安装和配置 NGINX Plus 部署过程中的指令。这些命令和模块仅针对 CentOS，有些是 NGINX Plus 独有的。</p><pre><code>$ vim ansible-nginx-plus/tasks/install_nginx_plus.yml
</code></pre>`,21)),s("p",null,[n[71]||(n[71]=l("第一节使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/file_module.html"},{default:i(()=>[...n[70]||(n[70]=[s("code",null,"file",-1)])]),_:1}),n[72]||(n[72]=l(" 模块，告诉 Ansible 使用指定的",-1)),n[73]||(n[73]=s("code",null,"path",-1)),n[74]||(n[74]=l("和",-1)),n[75]||(n[75]=s("code",null,"state",-1)),n[76]||(n[76]=l("参数为 NGINX Plus 创建特定的 SSL 目录，设置属主为 root，将权限 ",-1)),n[77]||(n[77]=s("code",null,"mode",-1)),n[78]||(n[78]=l(" 更改为0700。",-1))]),n[158]||(n[158]=s("pre",null,[s("code",null,`# ./ansible-nginx-plus/tasks/install_nginx_plus.yml
 
- name: NGINX Plus | 创建 NGINX Plus ssl 证书目录
  file: path=/etc/ssl/nginx state=directory group=root mode=0700
`)],-1)),s("p",null,[n[80]||(n[80]=l("接下来的两节使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/copy_module.html"},{default:i(()=>[...n[79]||(n[79]=[l("copy",-1)])]),_:1}),n[81]||(n[81]=l(" 模块从 Ansible 部署服务器上将 NGINX Plus 的证书和密钥复制到 NGINX Plus 服务器上，再修改属主为 root，权限 ",-1)),n[82]||(n[82]=s("code",null,"mode",-1)),n[83]||(n[83]=l(" 为0700。",-1))]),n[159]||(n[159]=s("pre",null,[s("code",null,`- name: NGINX Plus | 复制 NGINX Plus repo 证书 
  copy: src=/etc/ssl/nginx/nginx-repo.crt dest=/etc/ssl/nginx/nginx-repo.crt owner=root group=root mode=0700
 
- name: NGINX Plus | 复制 NGINX Plus 密钥
  copy: src=/etc/ssl/nginx/nginx-repo.key dest=/etc/ssl/nginx/nginx-repo.key owner=root group=root mode=0700
`)],-1)),s("p",null,[n[85]||(n[85]=l("接下来，我们告诉 Ansible 使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/get_url_module.html"},{default:i(()=>[...n[84]||(n[84]=[s("code",null,"get_url",-1)])]),_:1}),n[86]||(n[86]=l(" 模块在 url 参数指定的远程位置从 NGINX Plus 仓库下载 CA 证书，通过 ",-1)),n[87]||(n[87]=s("code",null,"dest",-1)),n[88]||(n[88]=l(" 参数把它放在指定的目录 ",-1)),n[89]||(n[89]=s("code",null,"dest",-1)),n[90]||(n[90]=l(" ，并设置权限 ",-1)),n[91]||(n[91]=s("code",null,"mode",-1)),n[92]||(n[92]=l(" 为 0700。",-1))]),n[160]||(n[160]=o(`<pre><code>- name: NGINX Plus | 下载 NGINX Plus CA 证书
  get_url: url=https://cs.nginx.com/static/files/CA.crt dest=/etc/ssl/nginx/CA.crt mode=0700
</code></pre><p>同样，我们告诉 Ansible 使用 <code>get_url</code> 模块下载 NGINX Plus repo 文件，并将其复制到 NGINX Plus 服务器上的 <strong>/etc/yum.repos.d</strong> 目录下。</p><pre><code>- name: NGINX Plus | 下载 yum NGINX Plus 仓库
  get_url: url=https://cs.nginx.com/static/files/nginx-plus-7.repo dest=/etc/yum.repos.d/nginx-plus-7.repo mode=0700
</code></pre><p>最后两节的 <code>name</code> 告诉 Ansible 使用 <code>yum</code> 和 <code>service</code> 模块下载并启动 NGINX Plus。</p><pre><code>- name: NGINX Plus | 安装 NGINX Plus
  yum:
    name: nginx-plus
    state: latest
 
- name: NGINX Plus | 启动 NGINX Plus
  service:
    name: nginx
    state: started
</code></pre><h4 id="运行-ansible-来部署-nginx-plus" tabindex="-1">运行 Ansible 来部署 NGINX Plus <a class="header-anchor" href="#运行-ansible-来部署-nginx-plus" aria-label="Permalink to “运行 Ansible 来部署 NGINX Plus”">​</a></h4><p>在保存 <strong>install_nginx_plus.yml</strong> 文件后，运行 ansible-playbook 命令来部署 NGINX Plus。同样在这里，我们使用 --ask-pass 参数使用 Ansible 提示输入 SSH 密码并把它传递给每个 NGINX Plus 服务器，并指定主配置文件路径 <strong>deploy.yml</strong> 文件。</p><pre><code>$ sudo ansible-playbook --ask-pass $HOME/ansible-nginx-plus/deploy.yml
 
PLAY [nginx] ******************************************************************
 
GATHERING FACTS ***************************************************************
ok: [172.16.239.140]
 
TASK: [NGINX Plus | Creating NGINX Plus ssl cert repo directory] **************
changed: [172.16.239.140]
 
TASK: [NGINX Plus | Copying NGINX Plus repository certificate] ****************
changed: [172.16.239.140]
 
TASK: [NGINX Plus | Copying NGINX Plus repository key] ************************
changed: [172.16.239.140]
 
TASK: [NGINX Plus | Downloading NGINX Plus CA certificate] ********************
changed: [172.16.239.140]
 
TASK: [NGINX Plus | Downloading yum NGINX Plus repository] ********************
changed: [172.16.239.140]
 
TASK: [NGINX Plus | Installing NGINX Plus] ************************************
changed: [172.16.239.140]
 
TASK: [NGINX Plus | Starting NGINX Plus] **************************************
changed: [172.16.239.140]
 
PLAY RECAP ********************************************************************
172.16.239.140             : ok=8    changed=7    unreachable=0    failed=0
</code></pre><p>playbook 的 recap 成功完成。现在，使用 curl 命令来验证 NGINX Plus 是否在运行。太好了，我们得到的是 200 OK！成功了！我们使用 Ansible 成功地安装了 NGINX Plus。</p><pre><code>$ curl -Is http://172.16.239.140 | grep HTTP
HTTP/1.1 200 OK
</code></pre><h3 id="在-ubuntu-上创建-ansible-playbook-来安装-nginx-和-nginx-plus" tabindex="-1">在 Ubuntu 上创建 Ansible Playbook 来安装 NGINX 和 NGINX Plus <a class="header-anchor" href="#在-ubuntu-上创建-ansible-playbook-来安装-nginx-和-nginx-plus" aria-label="Permalink to “在 Ubuntu 上创建 Ansible Playbook 来安装 NGINX 和 NGINX Plus”">​</a></h3>`,11)),s("p",null,[n[94]||(n[94]=l("在 ",-1)),e(t,{href:"http://www.ubuntu.com/"},{default:i(()=>[...n[93]||(n[93]=[l("Ubuntu 服务器",-1)])]),_:1}),n[95]||(n[95]=l(" 上部署 NGINX 和 NGINX Plus 的过程与 CentOS 很相似，我将一步一步的指导来完成整个部署文件，并指出和 CentOS 的细微差异。",-1))]),n[161]||(n[161]=s("p",null,[l("首先和 CentOS 一样，创建 Ansible 目录结构和 Ansible 主部署文件。也按“创建 NGINX 服务器的列表”小节的描述创建 "),s("strong",null,"/etc/ansible/hosts"),l(" 文件。对于 NGINX Plus，你也需要安装“复制 NGINX Plus 证书和密钥到 Ansible 服务器”小节的描述复制证书和密钥。")],-1)),s("p",null,[n[99]||(n[99]=l("下面是开源 NGINX 的 ",-1)),n[100]||(n[100]=s("strong",null,"install_nginx.yml",-1)),n[101]||(n[101]=l(" 部署文件。在第一节，我们使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/apt_key_module.html"},{default:i(()=>[...n[96]||(n[96]=[s("code",null,"apt_key",-1)])]),_:1}),n[102]||(n[102]=l(" 模块导入 NGINX 的签名密钥。接下来的两节使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/lineinfile_module.html"},{default:i(()=>[...n[97]||(n[97]=[s("code",null,"lineinfile",-1)])]),_:1}),n[103]||(n[103]=l(" 模块来添加 Ubuntu 14.04 的软件包 URL 到 ",-1)),n[104]||(n[104]=s("strong",null,"sources.list",-1)),n[105]||(n[105]=l(" 文件中。最后，我们使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/apt_module.html"},{default:i(()=>[...n[98]||(n[98]=[s("code",null,"apt",-1)])]),_:1}),n[106]||(n[106]=l(" 模块来更新缓存并安装 NGINX（",-1)),n[107]||(n[107]=s("code",null,"apt",-1)),n[108]||(n[108]=l(" 取代了我们在 CentOS 中部署时的 ",-1)),n[109]||(n[109]=s("code",null,"yum",-1)),n[110]||(n[110]=l(" 模块）。",-1))]),n[162]||(n[162]=s("pre",null,[s("code",null,`# ./ansible-nginx/tasks/install_nginx.yml
 
- name: NGINX | 添加 NGINX 签名密钥
  apt_key: url=http://nginx.org/keys/nginx_signing.key state=present
 
- name: NGINX | 为 NGINX 添加 sources.list deb url  
  lineinfile: dest=/etc/apt/sources.list line="deb http://nginx.org/packages/mainline/ubuntu/ trusty nginx"
 
- name: NGINX Plus | 为 NGINX 添加 sources.list deb-src url  
  lineinfile: dest=/etc/apt/sources.list line="deb-src http://nginx.org/packages/mainline/ubuntu/ trusty nginx"
 
- name: NGINX | 更新 apt 缓存
  apt:
    update_cache: yes
 
- name: NGINX | 安装 NGINX
  apt:
    pkg: nginx
    state: latest
 
- name: NGINX | 启动 NGINX
  service:
    name: nginx
    state: started
`)],-1)),s("p",null,[n[112]||(n[112]=l("下面是 NGINX Plus 的部署文件 ",-1)),n[113]||(n[113]=s("strong",null,"install_nginx.yml",-1)),n[114]||(n[114]=l("。前四节设置了 NGINX Plus 密钥和证书。然后，我们像开源的 NGINX 一样用 ",-1)),n[115]||(n[115]=s("code",null,"apt_key",-1)),n[116]||(n[116]=l(" 模块导入签名密钥，",-1)),n[117]||(n[117]=s("code",null,"get_url",-1)),n[118]||(n[118]=l(" 模块为 NGINX Plus 下载 ",-1)),n[119]||(n[119]=s("code",null,"apt",-1)),n[120]||(n[120]=l(" 配置文件。",-1)),e(t,{href:"http://docs.ansible.com/ansible/shell_module.html"},{default:i(()=>[...n[111]||(n[111]=[s("code",null,"shell",-1)])]),_:1}),n[121]||(n[121]=l(" 模块使用 ",-1)),n[122]||(n[122]=s("code",null,"printf",-1)),n[123]||(n[123]=l(" 命令写下输出到 ",-1)),n[124]||(n[124]=s("strong",null,"sources.list.d",-1)),n[125]||(n[125]=l(" 目录中的 ",-1)),n[126]||(n[126]=s("strong",null,"nginx-plus.list",-1)),n[127]||(n[127]=l(" 文件。最终的 ",-1)),n[128]||(n[128]=s("code",null,"name",-1)),n[129]||(n[129]=l(" 模块和开源 NGINX 一样。",-1))]),n[163]||(n[163]=s("pre",null,[s("code",null,`# ./ansible-nginx-plus/tasks/install_nginx_plus.yml
 
- name: NGINX Plus | 创建 NGINX Plus ssl 证书 repo 目录
  file: path=/etc/ssl/nginx state=directory group=root mode=0700
 
- name: NGINX Plus | 复制 NGINX Plus 仓库证书
  copy: src=/etc/ssl/nginx/nginx-repo.crt dest=/etc/ssl/nginx/nginx-repo.crt owner=root group=root mode=0700
 
- name: NGINX Plus | 复制 NGINX Plus 仓库密钥
  copy: src=/etc/ssl/nginx/nginx-repo.key dest=/etc/ssl/nginx/nginx-repo.key owner=root group=root mode=0700
 
- name: NGINX Plus | 安装 NGINX Plus CA 证书
  get_url: url=https://cs.nginx.com/static/files/CA.crt dest=/etc/ssl/nginx/CA.crt mode=0700
 
- name: NGINX Plus | 添加 NGINX Plus 签名密钥
  apt_key: url=http://nginx.org/keys/nginx_signing.key state=present
 
- name: NGINX Plus | 安装 Apt-Get NGINX Plus 仓库
  get_url: url=https://cs.nginx.com/static/files/90nginx dest=/etc/apt/apt.conf.d/90nginx mode=0700
 
- name: NGINX Plus | 为 NGINX Plus 添加 sources.list url  
  shell: printf "deb https://plus-pkgs.nginx.com/ubuntu \`lsb_release -cs\` nginx-plus\\n" >/etc/apt/sources.list.d/nginx-plus.list
 
- name: NGINX Plus | 运行 apt-get update
  apt:
    update_cache: yes
 
- name: NGINX Plus | 安装 NGINX Plus 通过 apt-get
  apt:
    pkg: nginx-plus
    state: latest
 
- name: NGINX Plus | 启动 NGINX Plus
  service:
    name: nginx
    state: started
`)],-1)),n[164]||(n[164]=s("p",null,"现在我们已经准备好运行 ansible-playbook 命令：",-1)),n[165]||(n[165]=s("pre",null,[s("code",null,`$ sudo ansible-playbook --ask-pass $HOME/ansible-nginx-plus/deploy.yml
`)],-1)),n[166]||(n[166]=s("p",null,"你应该得到一个成功的 play recap。如果你没有成功，你可以使用冗余参数，以帮助你解决出现的问题。",-1)),n[167]||(n[167]=s("h3",{id:"小结",tabindex:"-1"},[l("小结 "),s("a",{class:"header-anchor",href:"#小结","aria-label":"Permalink to “小结”"},"​")],-1)),s("p",null,[n[131]||(n[131]=l("我在这个教程中演示是什么是 Ansible，可以做些什么来帮助你自动部署 NGINX 或 NGINX Plus，这仅仅是个开始。还有许多有用的模块，包括从用户账号管理到自定义配置模板等。如果你有兴趣了解关于这些的更多信息，请访问 ",-1)),e(t,{href:"http://docs.ansible.com/"},{default:i(()=>[...n[130]||(n[130]=[l("Ansible 官方文档",-1)])]),_:1}),n[132]||(n[132]=l("。",-1))]),n[168]||(n[168]=s("hr",null,null,-1)),s("p",null,[n[134]||(n[134]=l("via: ",-1)),e(t,{href:"https://www.nginx.com/blog/installing-nginx-nginx-plus-ansible/"},{default:i(()=>[...n[133]||(n[133]=[l("https://www.nginx.com/blog/installing-nginx-nginx-plus-ansible/",-1)])]),_:1})]),s("p",null,[n[138]||(n[138]=l("作者：",-1)),e(t,{href:"https://www.nginx.com/blog/author/kjones/"},{default:i(()=>[...n[135]||(n[135]=[l("Kevin Jones",-1)])]),_:1}),n[139]||(n[139]=l(" 译者：",-1)),e(t,{href:"https://github.com/strugglingyouth"},{default:i(()=>[...n[136]||(n[136]=[l("strugglingyouth",-1)])]),_:1}),n[140]||(n[140]=l(" 校对：",-1)),e(t,{href:"https://github.com/wxy"},{default:i(()=>[...n[137]||(n[137]=[l("wxy",-1)])]),_:1})]),s("p",null,[n[143]||(n[143]=l("本文由 ",-1)),e(t,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[141]||(n[141]=[l("LCTT",-1)])]),_:1}),n[144]||(n[144]=l(" 原创编译，",-1)),e(t,{href:"https://linux.cn/"},{default:i(()=>[...n[142]||(n[142]=[l("Linux中国",-1)])]),_:1}),n[145]||(n[145]=l(" 荣誉推出",-1))])])}const y=r(d,[["render",g]]);export{P as __pageData,y as default};
