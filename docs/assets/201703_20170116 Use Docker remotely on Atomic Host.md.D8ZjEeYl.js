import{_ as i,a0 as l,w as o,s as r,I as a,x as n,a1 as p,A as t,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"在 Atomic 主机上远程使用 Docker | LCTT x X-CMD","titleTemplate":false,"description":"在 Atomic 主机上远程使用 Docker | LCTT (201703) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Atomic 主机上远程使用 Docker | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Atomic 主机上远程使用 Docker | LCTT (201703) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201703/20170116 Use Docker remotely on Atomic Host","title":"在 Atomic 主机上远程使用 Docker","tag":"201703","desc":""},"relativePath":"201703/20170116 Use Docker remotely on Atomic Host.md","filePath":"[post].md"}'),c={name:"201703/20170116 Use Docker remotely on Atomic Host.md"};function k(m,s,g,h,u,f){const e=l("Link");return o(),r("div",null,[s[37]||(s[37]=a("h1",{id:"在-atomic-主机上远程使用-docker",tabindex:"-1"},[n("在 Atomic 主机上远程使用 Docker "),a("a",{class:"header-anchor",href:"#在-atomic-主机上远程使用-docker","aria-label":"Permalink to “在 Atomic 主机上远程使用 Docker”"},"​")],-1)),s[38]||(s[38]=a("p",null,[a("img",{src:"https://cdn.fedoramagazine.org/wp-content/uploads/2017/01/remote-atomic-docker-945x400.jpg",alt:"remote-atomic-docker"})],-1)),a("p",null,[s[4]||(s[4]=n("来自 ",-1)),p(e,{href:"http://www.projectatomic.io/"},{default:t(()=>[...s[0]||(s[0]=[n("Atomic 项目",-1)])]),_:1}),s[5]||(s[5]=n(" 的 Atomic 主机是一个轻量级的容器基于的操作系统，它可以运行 Linux 容器。它已被优化为用作云环境的容器运行时系统。例如，它可以托管 Docker 守护进程和容器。有时，你可能需要在该主机上运行 docker 命令，并从其他地方管理服务器。本文介绍如何远程访问 Fedora Atomic 主机（",-1)),p(e,{href:"https://getfedora.org/atomic/"},{default:t(()=>[...s[1]||(s[1]=[n("你可以在这里下载到它",-1)])]),_:1}),s[6]||(s[6]=n("）上的 ",-1)),p(e,{href:"https://www.docker.com/"},{default:t(()=>[...s[2]||(s[2]=[n("Docker",-1)])]),_:1}),s[7]||(s[7]=n(" 守护进程。整个过程由 ",-1)),p(e,{href:"https://www.ansible.com/"},{default:t(()=>[...s[3]||(s[3]=[n("Ansible",-1)])]),_:1}),s[8]||(s[8]=n(" 自动完成 - 在涉及到自动化的一切上，这真是一个伟大的工具！",-1))]),s[39]||(s[39]=a("h3",{id:"安全备忘录",tabindex:"-1"},[n("安全备忘录 "),a("a",{class:"header-anchor",href:"#安全备忘录","aria-label":"Permalink to “安全备忘录”"},"​")],-1)),a("p",null,[s[11]||(s[11]=n("由于我们通过网络连接，所以我们使用 ",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security"},{default:t(()=>[...s[9]||(s[9]=[n("TLS",-1)])]),_:1}),s[12]||(s[12]=n(" 保护 Docker 守护进程。此过程需要客户端证书和服务器证书。OpenSSL 包用于创建用于建立 TLS 连接的证书密钥。这里，Atomic 主机运行守护程序，我们的本地的 ",-1)),p(e,{href:"https://getfedora.org/en/workstation/"},{default:t(()=>[...s[10]||(s[10]=[n("Fedora Workstation",-1)])]),_:1}),s[13]||(s[13]=n(" 充当客户端。",-1))]),s[40]||(s[40]=a("p",null,[n("在你按照这些步骤进行之前，请注意，_任何_在客户端上可以访问 TLS 证书的进程在服务器上具有"),a("strong",null,"完全的 root 访问权限"),n("。 因此，客户端可以在服务器上做任何它想做的事情。我们需要仅向可信任的特定客户端主机授予证书访问权限。你应该将客户端证书仅复制到完全由你控制的客户端主机。但即使在这种情况下，客户端机器的安全也至关重要。")],-1)),s[41]||(s[41]=a("p",null,"不过，此方法只是远程访问守护程序的一种方法。编排工具通常提供更安全的控制。下面的简单方法适用于个人实验，可能不适合开放式网络。",-1)),s[42]||(s[42]=a("h3",{id:"获取-ansible-role",tabindex:"-1"},[n("获取 Ansible role "),a("a",{class:"header-anchor",href:"#获取-ansible-role","aria-label":"Permalink to “获取 Ansible role”"},"​")],-1)),a("p",null,[p(e,{href:"https://twitter.com/CHouseknecht"},{default:t(()=>[...s[14]||(s[14]=[n("Chris Houseknecht",-1)])]),_:1}),s[16]||(s[16]=n(" 写了一个 Ansible role，它会创造所需的所有证书。这样，你不需要手动运行 ",-1)),s[17]||(s[17]=a("code",null,"openssl",-1)),s[18]||(s[18]=n(" 命令了。 这些在 ",-1)),p(e,{href:"https://github.com/ansible/role-secure-docker-daemon"},{default:t(()=>[...s[15]||(s[15]=[n("Ansible role 仓库",-1)])]),_:1}),s[19]||(s[19]=n("中提供。将它克隆到你当前的工作主机。",-1))]),s[43]||(s[43]=d(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir docker-remote-access</span></span>
<span class="line"><span>$ cd docker-remote-access</span></span>
<span class="line"><span>$ git clone https://github.com/ansible/role-secure-docker-daemon.git</span></span></code></pre></div><h3 id="创建配置文件" tabindex="-1">创建配置文件 <a class="header-anchor" href="#创建配置文件" aria-label="Permalink to “创建配置文件”">​</a></h3><p>接下来，你必须创建 Ansible 配置文件、清单（inventory）和剧本（playbook）文件以设置客户端和守护进程。以下说明在 Atomic 主机上创建客户端和服务器证书。然后，获取客户端证书到本地。最后，它们会配置守护进程以及客户端，使它们能彼此交互。</p><p>这里是你需要的目录结构。如下所示，创建下面的每个文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tree docker-remote-access/</span></span>
<span class="line"><span>docker-remote-access/</span></span>
<span class="line"><span>├── ansible.cfg</span></span>
<span class="line"><span>├── inventory</span></span>
<span class="line"><span>├── remote-access.yml</span></span>
<span class="line"><span>└── role-secure-docker-daemon</span></span></code></pre></div><p><code>ansible.cfg</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vim ansible.cfg</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[defaults]</span></span>
<span class="line"><span>inventory=inventory</span></span></code></pre></div><p>清单文件（<code>inventory</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vim inventory</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[daemonhost]</span></span>
<span class="line"><span>&#39;IP_OF_ATOMIC_HOST&#39; ansible_ssh_private_key_file=&#39;PRIVATE_KEY_FILE&#39;</span></span></code></pre></div><p>将清单文件（<code>inventory</code>） 中的 <code>IP_OF_ATOMIC_HOST</code> 替换为 Atomic 主机的 IP。将 <code>PRIVATE_KEY_FILE</code> 替换为本地系统上的 SSH 私钥文件的位置。</p><p>剧本文件（<code>remote-access.yml</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vim remote-access.yml</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>- name: Docker Client Set up</span></span>
<span class="line"><span>  hosts: daemonhost</span></span>
<span class="line"><span>  gather_facts: no</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: Make ~/.docker directory for docker certs</span></span>
<span class="line"><span>      local_action: file path=&#39;~/.docker&#39; state=&#39;directory&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - name: Add Environment variables to ~/.bashrc</span></span>
<span class="line"><span>      local_action: lineinfile dest=&#39;~/.bashrc&#39; line=&#39;export DOCKER_TLS_VERIFY=1\\nexport DOCKER_CERT_PATH=~/.docker/\\nexport DOCKER_HOST=tcp://{{ inventory_hostname }}:2376\\n&#39; state=&#39;present&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - name: Source ~/.bashrc file</span></span>
<span class="line"><span>      local_action: shell source ~/.bashrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- name: Docker Daemon Set up</span></span>
<span class="line"><span>  hosts: daemonhost</span></span>
<span class="line"><span>  gather_facts: no</span></span>
<span class="line"><span>  remote_user: fedora</span></span>
<span class="line"><span>  become: yes</span></span>
<span class="line"><span>  become_method: sudo</span></span>
<span class="line"><span>  become_user: root</span></span>
<span class="line"><span>  roles:</span></span>
<span class="line"><span>    - role: role-secure-docker-daemon</span></span>
<span class="line"><span>      dds_host: &quot;{{ inventory_hostname }}&quot;</span></span>
<span class="line"><span>      dds_server_cert_path: /etc/docker</span></span>
<span class="line"><span>      dds_restart_docker: no</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: fetch ca.pem from daemon host</span></span>
<span class="line"><span>      fetch:</span></span>
<span class="line"><span>        src: /root/.docker/ca.pem</span></span>
<span class="line"><span>        dest: ~/.docker/</span></span>
<span class="line"><span>        fail_on_missing: yes</span></span>
<span class="line"><span>        flat: yes</span></span>
<span class="line"><span>    - name: fetch cert.pem from daemon host</span></span>
<span class="line"><span>      fetch:</span></span>
<span class="line"><span>        src: /root/.docker/cert.pem</span></span>
<span class="line"><span>        dest: ~/.docker/</span></span>
<span class="line"><span>        fail_on_missing: yes</span></span>
<span class="line"><span>        flat: yes</span></span>
<span class="line"><span>    - name: fetch key.pem from daemon host</span></span>
<span class="line"><span>      fetch:</span></span>
<span class="line"><span>        src: /root/.docker/key.pem</span></span>
<span class="line"><span>        dest: ~/.docker/</span></span>
<span class="line"><span>        fail_on_missing: yes</span></span>
<span class="line"><span>        flat: yes</span></span>
<span class="line"><span>    - name: Remove Environment variable OPTIONS from /etc/sysconfig/docker</span></span>
<span class="line"><span>      lineinfile:</span></span>
<span class="line"><span>        dest: /etc/sysconfig/docker</span></span>
<span class="line"><span>        regexp: &#39;^OPTIONS&#39;</span></span>
<span class="line"><span>        state: absent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - name: Modify Environment variable OPTIONS in /etc/sysconfig/docker</span></span>
<span class="line"><span>      lineinfile:</span></span>
<span class="line"><span>        dest: /etc/sysconfig/docker</span></span>
<span class="line"><span>        line: &quot;OPTIONS=&#39;--selinux-enabled --log-driver=journald --tlsverify --tlscacert=/etc/docker/ca.pem --tlscert=/etc/docker/server-cert.pem --tlskey=/etc/docker/server-key.pem -H=0.0.0.0:2376 -H=unix:///var/run/docker.sock&#39;&quot;</span></span>
<span class="line"><span>        state: present</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - name: Remove client certs from daemon host</span></span>
<span class="line"><span>      file:</span></span>
<span class="line"><span>        path: /root/.docker</span></span>
<span class="line"><span>        state: absent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - name: Reload Docker daemon</span></span>
<span class="line"><span>      command: systemctl daemon-reload</span></span>
<span class="line"><span>    - name: Restart Docker daemon</span></span>
<span class="line"><span>      command: systemctl restart docker.service</span></span></code></pre></div><h3 id="访问-atomic-主机" tabindex="-1">访问 Atomic 主机 <a class="header-anchor" href="#访问-atomic-主机" aria-label="Permalink to “访问 Atomic 主机”">​</a></h3><p>现在运行 Ansible 剧本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook remote-access.yml</span></span></code></pre></div><p>确保 tcp 端口 2376 在你的 Atomic 主机上打开了。如果你在使用 Openstack，请在安全规则中添加 TCP 端口 2376。 如果你使用 AWS，请将其添加到你的安全组。</p><p>现在，在你的工作站上作为普通用户运行的 <code>docker</code> 命令与 Atomic 主机的守护进程通信，并在那里执行命令。你不需要手动 <code>ssh</code> 或在 Atomic 主机上发出命令。这可以让你远程、轻松、安全地启动容器化应用程序。</p>`,20)),a("p",null,[s[21]||(s[21]=n("如果你想克隆 Ansible 剧本和配置文件，这里是 ",-1)),p(e,{href:"https://github.com/trishnaguha/fedora-cloud-ansible/tree/master/docker-remote-access"},{default:t(()=>[...s[20]||(s[20]=[n("git 仓库",-1)])]),_:1}),s[22]||(s[22]=n("。",-1))]),a("p",null,[p(e,{href:"https://cdn.fedoramagazine.org/wp-content/uploads/2017/01/docker-daemon.jpg"},{default:t(()=>[...s[23]||(s[23]=[a("img",{src:"https://cdn.fedoramagazine.org/wp-content/uploads/2017/01/docker-daemon.jpg",alt:"docker-daemon"},null,-1)])]),_:1})]),s[44]||(s[44]=a("hr",null,null,-1)),a("p",null,[s[25]||(s[25]=n("via: ",-1)),p(e,{href:"https://fedoramagazine.org/use-docker-remotely-atomic-host/"},{default:t(()=>[...s[24]||(s[24]=[n("https://fedoramagazine.org/use-docker-remotely-atomic-host/",-1)])]),_:1})]),a("p",null,[s[29]||(s[29]=n("作者：",-1)),p(e,{href:"http://trishnag.id.fedoraproject.org/"},{default:t(()=>[...s[26]||(s[26]=[n("Trishna Guha",-1)])]),_:1}),s[30]||(s[30]=n(" 译者：",-1)),p(e,{href:"https://github.com/geekpi"},{default:t(()=>[...s[27]||(s[27]=[n("geekpi",-1)])]),_:1}),s[31]||(s[31]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:t(()=>[...s[28]||(s[28]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[32]||(s[32]=[n("LCTT",-1)])]),_:1}),s[35]||(s[35]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:t(()=>[...s[33]||(s[33]=[n("Linux中国",-1)])]),_:1}),s[36]||(s[36]=n(" 荣誉推出",-1))])])}const C=i(c,[["render",k]]);export{v as __pageData,C as default};
