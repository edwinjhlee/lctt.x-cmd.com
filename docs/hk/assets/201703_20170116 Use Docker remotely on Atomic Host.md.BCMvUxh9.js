import{_ as i,a0 as l,w as o,s as r,I as a,x as n,a1 as p,A as t,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"在 Atomic 主機上遠程使用 Docker | LCTT x X-CMD","titleTemplate":false,"description":"在 Atomic 主機上遠程使用 Docker | LCTT (201703) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Atomic 主機上遠程使用 Docker | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Atomic 主機上遠程使用 Docker | LCTT (201703) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201703/20170116 Use Docker remotely on Atomic Host","title":"在 Atomic 主機上遠程使用 Docker","tag":"201703","desc":""},"relativePath":"201703/20170116 Use Docker remotely on Atomic Host.md","filePath":"[post].md"}'),c={name:"201703/20170116 Use Docker remotely on Atomic Host.md"};function k(m,s,g,h,u,f){const e=l("Link");return o(),r("div",null,[s[37]||(s[37]=a("h1",{id:"在-atomic-主機上遠程使用-docker",tabindex:"-1"},[n("在 Atomic 主機上遠程使用 Docker "),a("a",{class:"header-anchor",href:"#在-atomic-主機上遠程使用-docker","aria-label":"Permalink to “在 Atomic 主機上遠程使用 Docker”"},"​")],-1)),s[38]||(s[38]=a("p",null,[a("img",{src:"https://cdn.fedoramagazine.org/wp-content/uploads/2017/01/remote-atomic-docker-945x400.jpg",alt:"remote-atomic-docker"})],-1)),a("p",null,[s[4]||(s[4]=n("來自 ",-1)),p(e,{href:"http://www.projectatomic.io/"},{default:t(()=>[...s[0]||(s[0]=[n("Atomic 項目",-1)])]),_:1}),s[5]||(s[5]=n(" 的 Atomic 主機是一個輕量級的容器基於的操作系統，它可以運行 Linux 容器。它已被優化為用作雲環境的容器運行時系統。例如，它可以託管 Docker 守護進程和容器。有時，你可能需要在該主機上運行 docker 命令，並從其他地方管理服務器。本文介紹如何遠程訪問 Fedora Atomic 主機（",-1)),p(e,{href:"https://getfedora.org/atomic/"},{default:t(()=>[...s[1]||(s[1]=[n("你可以在這裏下載到它",-1)])]),_:1}),s[6]||(s[6]=n("）上的 ",-1)),p(e,{href:"https://www.docker.com/"},{default:t(()=>[...s[2]||(s[2]=[n("Docker",-1)])]),_:1}),s[7]||(s[7]=n(" 守護進程。整個過程由 ",-1)),p(e,{href:"https://www.ansible.com/"},{default:t(()=>[...s[3]||(s[3]=[n("Ansible",-1)])]),_:1}),s[8]||(s[8]=n(" 自動完成 - 在涉及到自動化的一切上，這真是一個偉大的工具！",-1))]),s[39]||(s[39]=a("h3",{id:"安全備忘錄",tabindex:"-1"},[n("安全備忘錄 "),a("a",{class:"header-anchor",href:"#安全備忘錄","aria-label":"Permalink to “安全備忘錄”"},"​")],-1)),a("p",null,[s[11]||(s[11]=n("由於我們通過網絡連接，所以我們使用 ",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security"},{default:t(()=>[...s[9]||(s[9]=[n("TLS",-1)])]),_:1}),s[12]||(s[12]=n(" 保護 Docker 守護進程。此過程需要客户端證書和服務器證書。OpenSSL 包用於創建用於建立 TLS 連接的證書密鑰。這裏，Atomic 主機運行守護程序，我們的本地的 ",-1)),p(e,{href:"https://getfedora.org/en/workstation/"},{default:t(()=>[...s[10]||(s[10]=[n("Fedora Workstation",-1)])]),_:1}),s[13]||(s[13]=n(" 充當客户端。",-1))]),s[40]||(s[40]=a("p",null,[n("在你按照這些步驟進行之前，請注意，_任何_在客户端上可以訪問 TLS 證書的進程在服務器上具有"),a("strong",null,"完全的 root 訪問權限"),n("。 因此，客户端可以在服務器上做任何它想做的事情。我們需要僅向可信任的特定客户端主機授予證書訪問權限。你應該將客户端證書僅複製到完全由你控制的客户端主機。但即使在這種情況下，客户端機器的安全也至關重要。")],-1)),s[41]||(s[41]=a("p",null,"不過，此方法只是遠程訪問守護程序的一種方法。編排工具通常提供更安全的控制。下面的簡單方法適用於個人實驗，可能不適合開放式網絡。",-1)),s[42]||(s[42]=a("h3",{id:"獲取-ansible-role",tabindex:"-1"},[n("獲取 Ansible role "),a("a",{class:"header-anchor",href:"#獲取-ansible-role","aria-label":"Permalink to “獲取 Ansible role”"},"​")],-1)),a("p",null,[p(e,{href:"https://twitter.com/CHouseknecht"},{default:t(()=>[...s[14]||(s[14]=[n("Chris Houseknecht",-1)])]),_:1}),s[16]||(s[16]=n(" 寫了一個 Ansible role，它會創造所需的所有證書。這樣，你不需要手動運行 ",-1)),s[17]||(s[17]=a("code",null,"openssl",-1)),s[18]||(s[18]=n(" 命令了。 這些在 ",-1)),p(e,{href:"https://github.com/ansible/role-secure-docker-daemon"},{default:t(()=>[...s[15]||(s[15]=[n("Ansible role 倉庫",-1)])]),_:1}),s[19]||(s[19]=n("中提供。將它克隆到你當前的工作主機。",-1))]),s[43]||(s[43]=d(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir docker-remote-access</span></span>
<span class="line"><span>$ cd docker-remote-access</span></span>
<span class="line"><span>$ git clone https://github.com/ansible/role-secure-docker-daemon.git</span></span></code></pre></div><h3 id="創建配置文件" tabindex="-1">創建配置文件 <a class="header-anchor" href="#創建配置文件" aria-label="Permalink to “創建配置文件”">​</a></h3><p>接下來，你必須創建 Ansible 配置文件、清單（inventory）和劇本（playbook）文件以設置客户端和守護進程。以下説明在 Atomic 主機上創建客户端和服務器證書。然後，獲取客户端證書到本地。最後，它們會配置守護進程以及客户端，使它們能彼此交互。</p><p>這裏是你需要的目錄結構。如下所示，創建下面的每個文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tree docker-remote-access/</span></span>
<span class="line"><span>docker-remote-access/</span></span>
<span class="line"><span>├── ansible.cfg</span></span>
<span class="line"><span>├── inventory</span></span>
<span class="line"><span>├── remote-access.yml</span></span>
<span class="line"><span>└── role-secure-docker-daemon</span></span></code></pre></div><p><code>ansible.cfg</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vim ansible.cfg</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[defaults]</span></span>
<span class="line"><span>inventory=inventory</span></span></code></pre></div><p>清單文件（<code>inventory</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vim inventory</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[daemonhost]</span></span>
<span class="line"><span>&#39;IP_OF_ATOMIC_HOST&#39; ansible_ssh_private_key_file=&#39;PRIVATE_KEY_FILE&#39;</span></span></code></pre></div><p>將清單文件（<code>inventory</code>） 中的 <code>IP_OF_ATOMIC_HOST</code> 替換為 Atomic 主機的 IP。將 <code>PRIVATE_KEY_FILE</code> 替換為本地系統上的 SSH 私鑰文件的位置。</p><p>劇本文件（<code>remote-access.yml</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vim remote-access.yml</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>- name: Docker Client Set up</span></span>
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
<span class="line"><span>      command: systemctl restart docker.service</span></span></code></pre></div><h3 id="訪問-atomic-主機" tabindex="-1">訪問 Atomic 主機 <a class="header-anchor" href="#訪問-atomic-主機" aria-label="Permalink to “訪問 Atomic 主機”">​</a></h3><p>現在運行 Ansible 劇本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook remote-access.yml</span></span></code></pre></div><p>確保 tcp 端口 2376 在你的 Atomic 主機上打開了。如果你在使用 Openstack，請在安全規則中添加 TCP 端口 2376。 如果你使用 AWS，請將其添加到你的安全組。</p><p>現在，在你的工作站上作為普通用户運行的 <code>docker</code> 命令與 Atomic 主機的守護進程通信，並在那裏執行命令。你不需要手動 <code>ssh</code> 或在 Atomic 主機上發出命令。這可以讓你遠程、輕鬆、安全地啓動容器化應用程序。</p>`,20)),a("p",null,[s[21]||(s[21]=n("如果你想克隆 Ansible 劇本和配置文件，這裏是 ",-1)),p(e,{href:"https://github.com/trishnaguha/fedora-cloud-ansible/tree/master/docker-remote-access"},{default:t(()=>[...s[20]||(s[20]=[n("git 倉庫",-1)])]),_:1}),s[22]||(s[22]=n("。",-1))]),a("p",null,[p(e,{href:"https://cdn.fedoramagazine.org/wp-content/uploads/2017/01/docker-daemon.jpg"},{default:t(()=>[...s[23]||(s[23]=[a("img",{src:"https://cdn.fedoramagazine.org/wp-content/uploads/2017/01/docker-daemon.jpg",alt:"docker-daemon"},null,-1)])]),_:1})]),s[44]||(s[44]=a("hr",null,null,-1)),a("p",null,[s[25]||(s[25]=n("via: ",-1)),p(e,{href:"https://fedoramagazine.org/use-docker-remotely-atomic-host/"},{default:t(()=>[...s[24]||(s[24]=[n("https://fedoramagazine.org/use-docker-remotely-atomic-host/",-1)])]),_:1})]),a("p",null,[s[29]||(s[29]=n("作者：",-1)),p(e,{href:"http://trishnag.id.fedoraproject.org/"},{default:t(()=>[...s[26]||(s[26]=[n("Trishna Guha",-1)])]),_:1}),s[30]||(s[30]=n(" 譯者：",-1)),p(e,{href:"https://github.com/geekpi"},{default:t(()=>[...s[27]||(s[27]=[n("geekpi",-1)])]),_:1}),s[31]||(s[31]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:t(()=>[...s[28]||(s[28]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[32]||(s[32]=[n("LCTT",-1)])]),_:1}),s[35]||(s[35]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:t(()=>[...s[33]||(s[33]=[n("Linux中國",-1)])]),_:1}),s[36]||(s[36]=n(" 榮譽推出",-1))])])}const C=i(c,[["render",k]]);export{v as __pageData,C as default};
