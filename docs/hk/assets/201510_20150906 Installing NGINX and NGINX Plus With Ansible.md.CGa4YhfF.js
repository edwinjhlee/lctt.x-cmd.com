import{_ as r,a0 as p,w as u,s as N,I as s,x as l,a1 as e,A as i,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"使用 ansible 安裝 NGINX 和 NGINX Plus | LCTT x X-CMD","titleTemplate":false,"description":"使用 ansible 安裝 NGINX 和 NGINX Plus | LCTT (201510) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 ansible 安裝 NGINX 和 NGINX Plus | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 ansible 安裝 NGINX 和 NGINX Plus | LCTT (201510) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201510/20150906 Installing NGINX and NGINX Plus With Ansible","title":"使用 ansible 安裝 NGINX 和 NGINX Plus","tag":"201510","desc":""},"relativePath":"201510/20150906 Installing NGINX and NGINX Plus With Ansible.md","filePath":"[post].md"}'),d={name:"201510/20150906 Installing NGINX and NGINX Plus With Ansible.md"};function g(a,n,b,m,I,x){const t=p("Link");return u(),N("div",null,[n[146]||(n[146]=s("h1",{id:"使用-ansible-安裝-nginx-和-nginx-plus",tabindex:"-1"},[l("使用 ansible 安裝 NGINX 和 NGINX Plus "),s("a",{class:"header-anchor",href:"#使用-ansible-安裝-nginx-和-nginx-plus","aria-label":"Permalink to “使用 ansible 安裝 NGINX 和 NGINX Plus”"},"​")],-1)),s("p",null,[n[1]||(n[1]=l("在生產環境中，我會更喜歡做與自動化相關的所有事情。如果計算機能完成你的任務，何必需要你親自動手呢？但是，在不斷變化並存在多種技術的環境中，創建和實施自動化是一項艱鉅的任務。這就是為什麼我喜歡 ",-1)),e(t,{href:"http://www.ansible.com/"},{default:i(()=>[...n[0]||(n[0]=[l("Ansible",-1)])]),_:1}),n[2]||(n[2]=l(" 的原因。Ansible 是一個用於 IT 配置管理，部署和業務流程的開源工具，使用起來非常方便。",-1))]),s("p",null,[n[5]||(n[5]=l("我最喜歡 Ansible 的一個特點是，它是完全無客户端的。要管理一個系統，通過 SSH 建立連接，它使用",-1)),e(t,{href:"http://www.paramiko.org/"},{default:i(()=>[...n[3]||(n[3]=[l("Paramiko",-1)])]),_:1}),n[6]||(n[6]=l("（一個 Python 庫）或本地的 ",-1)),e(t,{href:"http://www.openssh.com/"},{default:i(()=>[...n[4]||(n[4]=[l("OpenSSH",-1)])]),_:1}),n[7]||(n[7]=l("。Ansible 另一個吸引人的地方是它有許多可擴展的模組。這些模組可被系統管理員用於執行一些的常見任務。特別是，它們使用 Ansible 這個強有力的工具可以跨多個服務器、環境或操作系統安裝和配置任何程序，只需要一個控制節點。",-1))]),s("p",null,[n[11]||(n[11]=l("在本教程中，我將帶你使用 Ansible 完成安裝和部署開源 ",-1)),e(t,{href:"http://nginx.org/en/"},{default:i(()=>[...n[8]||(n[8]=[l("NGINX",-1)])]),_:1}),n[12]||(n[12]=l(" 和我們的商業產品 ",-1)),e(t,{href:"https://www.nginx.com/products/"},{default:i(()=>[...n[9]||(n[9]=[l("NGINX Plus",-1)])]),_:1}),n[13]||(n[13]=l("。我將在 ",-1)),e(t,{href:"http://www.centos.org/"},{default:i(()=>[...n[10]||(n[10]=[l("CentOS",-1)])]),_:1}),n[14]||(n[14]=l(" 服務器上演示，但我也在下面的“在 Ubuntu 上創建 Ansible Playbook 來安裝 NGINX 和 NGINX Plus”小節中包含了在 Ubuntu 服務器上部署的細節。",-1))]),n[147]||(n[147]=s("p",null,"在本教程中我將使用 Ansible 1.9.2 版本，並在 CentOS 7.1 服務器上部署運行。",-1)),n[148]||(n[148]=s("pre",null,[s("code",null,`$ ansible --version
ansible 1.9.2

$ cat /etc/redhat-release
CentOS Linux release 7.1.1503 (Core)
`)],-1)),s("p",null,[n[16]||(n[16]=l("如果你還沒有 Ansible，可以在 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/intro_installation.html#installing-the-control-machine"},{default:i(()=>[...n[15]||(n[15]=[l("Ansible 網站",-1)])]),_:1}),n[17]||(n[17]=l(" 查看説明並安裝它。",-1))]),n[149]||(n[149]=o(`<p>如果你使用的是 CentOS，安裝 Ansible 十分簡單，只要輸入以下命令。如果你想使用源碼編譯安裝或使用其他發行版，請參閲上面 Ansible 鏈接中的説明。</p><pre><code>$ sudo yum install -y epel-release &amp;&amp; sudo yum install -y ansible
</code></pre><p>根據環境的不同，在本教程中的命令有的可能需要 sudo 權限。文件路徑，用户名和目標服務器取決於你的環境的情況。</p><h3 id="創建一個-ansible-playbook-來安裝-nginx-centos" tabindex="-1">創建一個 Ansible Playbook 來安裝 NGINX (CentOS) <a class="header-anchor" href="#創建一個-ansible-playbook-來安裝-nginx-centos" aria-label="Permalink to “創建一個 Ansible Playbook 來安裝 NGINX (CentOS)”">​</a></h3><p>首先，我們要為 NGINX 的部署創建一個工作目錄，包括子目錄和部署配置文件。我通常建議在你的主目錄中創建該目錄，在文章的所有例子中都會有説明。</p><pre><code>$ cd $HOME
$ mkdir -p ansible-nginx/tasks/
$ touch ansible-nginx/deploy.yml
$ touch ansible-nginx/tasks/install_nginx.yml
</code></pre><p>目錄結構看起來是這樣的。你可以使用 tree 命令來查看。</p><pre><code>$ tree $HOME/ansible-nginx/
/home/kjones/ansible-nginx/
├── deploy.yml
└── tasks
    └── install_nginx.yml

1 directory, 2 files
</code></pre><p>如果你沒有安裝 tree 命令，使用以下命令去安裝。</p><pre><code>$ sudo yum install -y tree
</code></pre><h4 id="創建主部署文件" tabindex="-1">創建主部署文件 <a class="header-anchor" href="#創建主部署文件" aria-label="Permalink to “創建主部署文件”">​</a></h4><p>接下來，我們在文本編輯器中打開 <strong>deploy.yml</strong>。我喜歡在命令列上使用 vim 來編輯配置文件，在整個教程中也都將使用它。</p><pre><code>$ vim $HOME/ansible-nginx/deploy.yml
</code></pre><p><strong>deploy.yml</strong> 文件是 Ansible 部署的主要文件，在“使用 Ansible 部署 NGINX”小節中，我們運行 ansible‑playbook 命令時會使用此文件。在這個文件中，我們指定 Ansible 運行時使用的庫以及其它配置文件。</p>`,14)),s("p",null,[n[19]||(n[19]=l("在這個例子中，我使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/playbooks_roles.html#task-include-files-and-encouraging-reuse"},{default:i(()=>[...n[18]||(n[18]=[l("include",-1)])]),_:1}),n[20]||(n[20]=l(" 模組來指定配置文件一步一步來安裝NGINX。雖然可以創建一個非常大的 playbook 文件，我建議你將其分割為小文件，讓它們更有條理。include 的示例中可以複製靜態內容，複製配置文件，為更高級的部署使用邏輯配置設定變量。",-1))]),n[150]||(n[150]=o(`<p>在文件中輸入以下行。我在頂部的註釋包含了文件名用於參考。</p><pre><code># ./ansible-nginx/deploy.yml

- hosts: nginx
  tasks:
    - include: &#39;tasks/install_nginx.yml&#39;
</code></pre><p>hosts 語句説明 Ansible 部署 <strong>nginx</strong> 組的所有服務器，服務器在 <strong>/etc/ansible/hosts</strong> 中指定。我們會在下面的“創建 NGINX 服務器列表”小節編輯此文件。</p><p>include 語句説明 Ansible 在部署過程中從 <strong>tasks</strong> 目錄下讀取並執行 <strong>install_nginx.yml</strong> 文件中的內容。該文件包括以下幾步：下載，安裝，並啓動 NGINX。我們將在下一節創建此文件。</p><h4 id="為-nginx-創建部署文件" tabindex="-1">為 NGINX 創建部署文件 <a class="header-anchor" href="#為-nginx-創建部署文件" aria-label="Permalink to “為 NGINX 創建部署文件”">​</a></h4><p>現在，先保存 <strong>deploy.yml</strong> 文件，並在編輯器中打開 <strong>install_nginx.yml</strong> 。</p><pre><code>$ vim $HOME/ansible-nginx/tasks/install_nginx.yml
</code></pre>`,7)),s("p",null,[n[24]||(n[24]=l("該文件包含有指令（使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/YAMLSyntax.html"},{default:i(()=>[...n[21]||(n[21]=[l("YAML",-1)])]),_:1}),n[25]||(n[25]=l(" 格式寫的）， Ansible 會按照指令安裝和配置我們的 NGINX 部署過程。每個節（過程中的步驟）起始於一個描述此步驟的 ",-1)),n[26]||(n[26]=s("code",null,"name",-1)),n[27]||(n[27]=l(" 語句（前面有連字符）。 ",-1)),n[28]||(n[28]=s("code",null,"name",-1)),n[29]||(n[29]=l(" 後的字符串是 Ansible 部署過程中輸出到標準輸出的，可以根據你的意願來修改。YAML 文件中的節的下一行是在部署過程中將使用的模組。在下面的配置中，使用了 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/yum_module.html"},{default:i(()=>[...n[22]||(n[22]=[s("code",null,"yum",-1)])]),_:1}),n[30]||(n[30]=l(" 和 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/service_module.html"},{default:i(()=>[...n[23]||(n[23]=[s("code",null,"service",-1)])]),_:1}),n[31]||(n[31]=l(" 模組。",-1)),n[32]||(n[32]=s("code",null,"yum",-1)),n[33]||(n[33]=l(" 模組用於在 CentOS 上安裝軟件包。",-1)),n[34]||(n[34]=s("code",null,"service",-1)),n[35]||(n[35]=l(" 模組用於管理 UNIX 的服務。在這個節的最後一行或幾行指定了幾個模組的參數（在本例中，這些行以 ",-1)),n[36]||(n[36]=s("code",null,"name",-1)),n[37]||(n[37]=l(" 和 ",-1)),n[38]||(n[38]=s("code",null,"state",-1)),n[39]||(n[39]=l(" 開始）。",-1))]),s("p",null,[n[41]||(n[41]=l("在文件中輸入以下行。就像 ",-1)),n[42]||(n[42]=s("strong",null,"deploy.yml",-1)),n[43]||(n[43]=l("，在我們文件的第一行是用於參考的文件名的註釋。第一個節告訴 Ansible 在CentOS 7 上從 NGINX 倉庫安裝該 ",-1)),n[44]||(n[44]=s("strong",null,".rpm",-1)),n[45]||(n[45]=l(" 文件。這讓軟件包管理器直接從 NGINX 倉庫安裝最新最穩定的版本。根據你的 CentOS 版本修改路徑。所有可用的包的列表可以在 ",-1)),e(t,{href:"http://nginx.org/en/linux_packages.html"},{default:i(()=>[...n[40]||(n[40]=[l("開源 NGINX 網站",-1)])]),_:1}),n[46]||(n[46]=l(" 上找到。接下來的兩節告訴 Ansible 使用 ",-1)),n[47]||(n[47]=s("code",null,"yum",-1)),n[48]||(n[48]=l(" 模組安裝最新的 NGINX 版本，然後使用 ",-1)),n[49]||(n[49]=s("code",null,"service",-1)),n[50]||(n[50]=l(" 模組啓動 NGINX。",-1))]),n[151]||(n[151]=o(`<p><strong>注意:</strong> 在第一個節中，CentOS 包中的路徑名可能由於寬度顯示為連着的兩行。請在一行上輸入其完整路徑。</p><pre><code># ./ansible-nginx/tasks/install_nginx.yml
 
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
</code></pre><h4 id="創建-nginx-服務器列表" tabindex="-1">創建 NGINX 服務器列表 <a class="header-anchor" href="#創建-nginx-服務器列表" aria-label="Permalink to “創建 NGINX 服務器列表”">​</a></h4><p>現在，我們設置好了 Ansible 部署的所有配置文件，我們需要告訴 Ansible 部署哪個服務器。我們需要在 Ansible 中指定 <strong>hosts</strong> 文件。先備份現有的文件，並新建一個新文件來部署。</p><pre><code>$ sudo mv /etc/ansible/hosts /etc/ansible/hosts.backup
$ sudo vim /etc/ansible/hosts
</code></pre><p>在文件中輸入（或編輯）以下行來創建一個名為 <strong>nginx</strong> 的組並列出安裝 NGINX 的服務器。你可以通過主機名、IP 地址、或者在一個範圍，例如 <strong>server[1-3].domain.com</strong> 來指定服務器。在這裏，我通過 IP 地址指定一台服務器。</p><pre><code># /etc/ansible/hosts

[nginx]
172.16.239.140
</code></pre><h4 id="設置安全性" tabindex="-1">設置安全性 <a class="header-anchor" href="#設置安全性" aria-label="Permalink to “設置安全性”">​</a></h4><p>接近完成了，但在部署之前，我們需要確保 Ansible 已被授權通過 SSH 訪問我們的目標服務器。</p>`,9)),s("p",null,[n[52]||(n[52]=l("首選並且最安全的方法是添加 Ansible 所要部署服務器的 RSA SSH 密鑰到目標服務器的 ",-1)),n[53]||(n[53]=s("strong",null,"authorized_keys",-1)),n[54]||(n[54]=l(" 文件中，這給予 Ansible 在目標服務器上的不受限制 SSH 權限。要了解更多關於此配置，請參閲 wiki.centos.org 上 ",-1)),e(t,{href:"http://wiki.centos.org/HowTos/Network/SecuringSSH"},{default:i(()=>[...n[51]||(n[51]=[l("安全加固 OpenSSH",-1)])]),_:1}),n[55]||(n[55]=l("。這樣，你就可以自動部署而無需用户交互。",-1))]),n[152]||(n[152]=o(`<p>另外，你也可以在部署過程中要求輸入密碼。我強烈建議你只在測試過程中使用這種方法，因為它是不安全的，沒有辦法跟蹤目標主機的身份（fingerprint）變化。如果你想這樣做，將每個目標主機 <strong>/etc/ssh/ssh_config</strong> 文件中 StrictHostKeyChecking 的默認值 yes 改為 no。然後在 ansible-playbook 命令中添加 --ask-pass 參數來讓 Ansible 提示輸入 SSH 密碼。</p><p>在這裏，我將舉例説明如何編輯 <strong>ssh_config</strong> 文件來禁用在目標服務器上嚴格的主機密鑰檢查。我們手動連接 SSH 到我們將部署 NGINX 的服務器，並將 StrictHostKeyChecking 的值更改為 no。</p><pre><code>$ ssh kjones@172.16.239.140
kjones@172.16.239.140&#39;s password:***********
 
[kjones@nginx ]$ sudo vim /etc/ssh/ssh_config
</code></pre><p>當你更改後，保存 <strong>ssh_config</strong>，並通過 SSH 連接到你的 Ansible 服務器。保存後的設置應該如下所示。</p><pre><code># /etc/ssh/ssh_config

StrictHostKeyChecking no
</code></pre><h4 id="運行-ansible-部署-nginx" tabindex="-1">運行 Ansible 部署 NGINX <a class="header-anchor" href="#運行-ansible-部署-nginx" aria-label="Permalink to “運行 Ansible 部署 NGINX”">​</a></h4><p>如果你一直照本教程的步驟來做，你可以運行下面的命令來使用 Ansible 部署 NGINX。（再次提示，如果你設置了 RSA SSH 密鑰認證，那麼 --ask-pass 參數是不需要的。）在 Ansible 服務器運行命令，並使用我們上面創建的配置文件。</p><pre><code>$ sudo ansible-playbook --ask-pass $HOME/ansible-nginx/deploy.yml
</code></pre><p>Ansible 提示輸入 SSH 密碼，輸出如下。recap 中顯示 failed=0 這條信息，意味着部署成功了。</p><pre><code>$ sudo ansible-playbook --ask-pass $HOME/ansible-nginx/deploy.yml
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
</code></pre><p>如果你沒有得到一個成功的 play recap，你可以嘗試用 -vvvv 參數（帶連接調試的詳細信息）再次運行 ansible-playbook 命令來解決部署過程的問題。</p>`,11)),s("p",null,[n[57]||(n[57]=l("當部署成功（假如我們是第一次部署）後，你可以在遠程服務器上運行基本的 ",-1)),e(t,{href:"http://curl.haxx.se/"},{default:i(()=>[...n[56]||(n[56]=[l("cURL",-1)])]),_:1}),n[58]||(n[58]=l(" 命令驗證 NGINX 。在這裏，它會返回 200 OK。Yes！我們使用 Ansible 成功安裝了 NGINX。",-1))]),n[153]||(n[153]=s("pre",null,[s("code",null,`$ curl -Is 172.16.239.140 | grep HTTP
HTTP/1.1 200 OK
`)],-1)),n[154]||(n[154]=s("h3",{id:"創建-ansible-playbook-來安裝-nginx-plus-centos",tabindex:"-1"},[l("創建 Ansible Playbook 來安裝 NGINX Plus (CentOS) "),s("a",{class:"header-anchor",href:"#創建-ansible-playbook-來安裝-nginx-plus-centos","aria-label":"Permalink to “創建 Ansible Playbook 來安裝 NGINX Plus (CentOS)”"},"​")],-1)),n[155]||(n[155]=s("p",null,"現在，我已經展示瞭如何安裝 NGINX 的開源版本，我將帶你完成安裝 NGINX Plus。這需要更改一些額外的部署配置，並展示了一些 Ansible 的其他功能。",-1)),n[156]||(n[156]=s("h4",{id:"複製-nginx-plus-上的證書和密鑰到-ansible-服務器",tabindex:"-1"},[l("複製 NGINX Plus 上的證書和密鑰到 Ansible 服務器 "),s("a",{class:"header-anchor",href:"#複製-nginx-plus-上的證書和密鑰到-ansible-服務器","aria-label":"Permalink to “複製 NGINX Plus 上的證書和密鑰到 Ansible 服務器”"},"​")],-1)),s("p",null,[n[60]||(n[60]=l("使用 Ansible 安裝和配置 NGINX Plus 時，首先我們需要將 ",-1)),e(t,{href:"https://cs.nginx.com/"},{default:i(()=>[...n[59]||(n[59]=[l("NGINX Plus Customer Portal",-1)])]),_:1}),n[61]||(n[61]=l(" NGINX Plus 訂閲的密鑰和證書複製到 Ansible 部署服務器上的標準位置。",-1))]),s("p",null,[n[63]||(n[63]=l("購買了 NGINX Plus 或正在試用的客户也可以訪問 NGINX Plus Customer Portal。如果你有興趣測試 NGINX Plus，你可以申請免費試用30天，",-1)),e(t,{href:"https://www.nginx.com/#free-trial"},{default:i(()=>[...n[62]||(n[62]=[l("點擊這裏",-1)])]),_:1}),n[64]||(n[64]=l("。在你註冊後不久你將收到一個試用證書和密鑰的鏈接。",-1))]),s("p",null,[n[67]||(n[67]=l("在 Mac 或 Linux 主機上，我在這裏使用 ",-1)),e(t,{href:"http://linux.die.net/man/1/scp"},{default:i(()=>[...n[65]||(n[65]=[l("scp",-1)])]),_:1}),n[68]||(n[68]=l(" 工具演示。在 Microsoft Windows 主機，可以使用 ",-1)),e(t,{href:"https://winscp.net/eng/download.php"},{default:i(()=>[...n[66]||(n[66]=[l("WinSCP",-1)])]),_:1}),n[69]||(n[69]=l("。在本教程中，先下載文件到我的 Mac 筆記本電腦上，然後使用 scp 將其複製到 Ansible 服務器。密鑰和證書的位置都在我的家目錄下。",-1))]),n[157]||(n[157]=o(`<pre><code>$ cd /path/to/nginx-repo-files/
$ scp nginx-repo.* user@destination-server:.
</code></pre><p>接下來，我們通過 SSH 連接到 Ansible 服務器，確保 NGINX Plus 的 SSL 目錄存在，移動文件到這兒。</p><pre><code>$ ssh user@destination-server
$ sudo mkdir -p /etc/ssl/nginx/
$ sudo mv nginx-repo.* /etc/ssl/nginx/
</code></pre><p>驗證你的 <strong>/etc/ssl/nginx</strong> 目錄包含了證書(<strong>.crt</strong>)和密鑰(<strong>.key</strong>)文件。你可以使用 tree 命令檢查。</p><pre><code>$ tree /etc/ssl/nginx
/etc/ssl/nginx
├── nginx-repo.crt
└── nginx-repo.key
 
0 directories, 2 files
</code></pre><p>如果你沒有安裝 tree，可以使用下面的命令去安裝。</p><pre><code>$ sudo yum install -y tree
</code></pre><h4 id="創建-ansible-目錄結構" tabindex="-1">創建 Ansible 目錄結構 <a class="header-anchor" href="#創建-ansible-目錄結構" aria-label="Permalink to “創建 Ansible 目錄結構”">​</a></h4><p>以下執行的步驟和我們的“創建 Ansible Playbook 來安裝 NGINX（CentOS)”小節中部署開源 NGINX 的非常相似。首先，我們建一個工作目錄用於部署 NGINX Plus 使用。我喜歡將它創建為我主目錄的子目錄。</p><pre><code>$ cd $HOME
$ mkdir -p ansible-nginx-plus/tasks/
$ touch ansible-nginx-plus/deploy.yml
$ touch ansible-nginx-plus/tasks/install_nginx_plus.yml
</code></pre><p>目錄結構看起來像這樣。</p><pre><code>$ tree $HOME/ansible-nginx-plus/
/home/kjones/ansible-nginx-plus/
├── deploy.yml
└── tasks
└── install_nginx_plus.yml
 
1 directory, 2 files
</code></pre><h4 id="創建主部署文件-1" tabindex="-1">創建主部署文件 <a class="header-anchor" href="#創建主部署文件-1" aria-label="Permalink to “創建主部署文件”">​</a></h4><p>接下來，像開源的 NGINX 一樣，我們使用 vim 創建 <strong>deploy.yml</strong> 文件。</p><pre><code>$ vim ansible-nginx-plus/deploy.yml
</code></pre><p>和開源 NGINX 的部署唯一的區別是，我們將包含文件的名稱修改為 <strong>install_nginx_plus.yml</strong>。該文件告訴 Ansible 在 <strong>nginx</strong> 組中的所有服務器（<strong>/etc/ansible/hosts</strong> 中定義的）上部署 NGINX Plus ，然後在部署過程中從 <strong>tasks</strong> 目錄讀取並執行 <strong>install_nginx_plus.yml</strong> 的內容。</p><pre><code># ./ansible-nginx-plus/deploy.yml
 
- hosts: nginx
  tasks:
    - include: &#39;tasks/install_nginx_plus.yml&#39;
</code></pre><p>如果你之前沒有安裝過的話，你需要創建 hosts 文件，詳細説明在上面的“創建 NGINX 服務器的列表”小節。</p><h4 id="為-nginx-plus-創建部署文件" tabindex="-1">為 NGINX Plus 創建部署文件 <a class="header-anchor" href="#為-nginx-plus-創建部署文件" aria-label="Permalink to “為 NGINX Plus 創建部署文件”">​</a></h4><p>在文本編輯器中打開 <strong>install_nginx_plus.yml</strong>。該文件包含了使用 Ansible 來安裝和配置 NGINX Plus 部署過程中的指令。這些命令和模組僅針對 CentOS，有些是 NGINX Plus 獨有的。</p><pre><code>$ vim ansible-nginx-plus/tasks/install_nginx_plus.yml
</code></pre>`,21)),s("p",null,[n[71]||(n[71]=l("第一節使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/file_module.html"},{default:i(()=>[...n[70]||(n[70]=[s("code",null,"file",-1)])]),_:1}),n[72]||(n[72]=l(" 模組，告訴 Ansible 使用指定的",-1)),n[73]||(n[73]=s("code",null,"path",-1)),n[74]||(n[74]=l("和",-1)),n[75]||(n[75]=s("code",null,"state",-1)),n[76]||(n[76]=l("參數為 NGINX Plus 創建特定的 SSL 目錄，設置屬主為 root，將權限 ",-1)),n[77]||(n[77]=s("code",null,"mode",-1)),n[78]||(n[78]=l(" 更改為0700。",-1))]),n[158]||(n[158]=s("pre",null,[s("code",null,`# ./ansible-nginx-plus/tasks/install_nginx_plus.yml
 
- name: NGINX Plus | 創建 NGINX Plus ssl 證書目錄
  file: path=/etc/ssl/nginx state=directory group=root mode=0700
`)],-1)),s("p",null,[n[80]||(n[80]=l("接下來的兩節使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/copy_module.html"},{default:i(()=>[...n[79]||(n[79]=[l("copy",-1)])]),_:1}),n[81]||(n[81]=l(" 模組從 Ansible 部署服務器上將 NGINX Plus 的證書和密鑰複製到 NGINX Plus 服務器上，再修改屬主為 root，權限 ",-1)),n[82]||(n[82]=s("code",null,"mode",-1)),n[83]||(n[83]=l(" 為0700。",-1))]),n[159]||(n[159]=s("pre",null,[s("code",null,`- name: NGINX Plus | 複製 NGINX Plus repo 證書 
  copy: src=/etc/ssl/nginx/nginx-repo.crt dest=/etc/ssl/nginx/nginx-repo.crt owner=root group=root mode=0700
 
- name: NGINX Plus | 複製 NGINX Plus 密鑰
  copy: src=/etc/ssl/nginx/nginx-repo.key dest=/etc/ssl/nginx/nginx-repo.key owner=root group=root mode=0700
`)],-1)),s("p",null,[n[85]||(n[85]=l("接下來，我們告訴 Ansible 使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/get_url_module.html"},{default:i(()=>[...n[84]||(n[84]=[s("code",null,"get_url",-1)])]),_:1}),n[86]||(n[86]=l(" 模組在 url 參數指定的遠程位置從 NGINX Plus 倉庫下載 CA 證書，通過 ",-1)),n[87]||(n[87]=s("code",null,"dest",-1)),n[88]||(n[88]=l(" 參數把它放在指定的目錄 ",-1)),n[89]||(n[89]=s("code",null,"dest",-1)),n[90]||(n[90]=l(" ，並設置權限 ",-1)),n[91]||(n[91]=s("code",null,"mode",-1)),n[92]||(n[92]=l(" 為 0700。",-1))]),n[160]||(n[160]=o(`<pre><code>- name: NGINX Plus | 下載 NGINX Plus CA 證書
  get_url: url=https://cs.nginx.com/static/files/CA.crt dest=/etc/ssl/nginx/CA.crt mode=0700
</code></pre><p>同樣，我們告訴 Ansible 使用 <code>get_url</code> 模組下載 NGINX Plus repo 文件，並將其複製到 NGINX Plus 服務器上的 <strong>/etc/yum.repos.d</strong> 目錄下。</p><pre><code>- name: NGINX Plus | 下載 yum NGINX Plus 倉庫
  get_url: url=https://cs.nginx.com/static/files/nginx-plus-7.repo dest=/etc/yum.repos.d/nginx-plus-7.repo mode=0700
</code></pre><p>最後兩節的 <code>name</code> 告訴 Ansible 使用 <code>yum</code> 和 <code>service</code> 模組下載並啓動 NGINX Plus。</p><pre><code>- name: NGINX Plus | 安裝 NGINX Plus
  yum:
    name: nginx-plus
    state: latest
 
- name: NGINX Plus | 啓動 NGINX Plus
  service:
    name: nginx
    state: started
</code></pre><h4 id="運行-ansible-來部署-nginx-plus" tabindex="-1">運行 Ansible 來部署 NGINX Plus <a class="header-anchor" href="#運行-ansible-來部署-nginx-plus" aria-label="Permalink to “運行 Ansible 來部署 NGINX Plus”">​</a></h4><p>在保存 <strong>install_nginx_plus.yml</strong> 文件後，運行 ansible-playbook 命令來部署 NGINX Plus。同樣在這裏，我們使用 --ask-pass 參數使用 Ansible 提示輸入 SSH 密碼並把它傳遞給每個 NGINX Plus 服務器，並指定主配置文件路徑 <strong>deploy.yml</strong> 文件。</p><pre><code>$ sudo ansible-playbook --ask-pass $HOME/ansible-nginx-plus/deploy.yml
 
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
</code></pre><p>playbook 的 recap 成功完成。現在，使用 curl 命令來驗證 NGINX Plus 是否在運行。太好了，我們得到的是 200 OK！成功了！我們使用 Ansible 成功地安裝了 NGINX Plus。</p><pre><code>$ curl -Is http://172.16.239.140 | grep HTTP
HTTP/1.1 200 OK
</code></pre><h3 id="在-ubuntu-上創建-ansible-playbook-來安裝-nginx-和-nginx-plus" tabindex="-1">在 Ubuntu 上創建 Ansible Playbook 來安裝 NGINX 和 NGINX Plus <a class="header-anchor" href="#在-ubuntu-上創建-ansible-playbook-來安裝-nginx-和-nginx-plus" aria-label="Permalink to “在 Ubuntu 上創建 Ansible Playbook 來安裝 NGINX 和 NGINX Plus”">​</a></h3>`,11)),s("p",null,[n[94]||(n[94]=l("在 ",-1)),e(t,{href:"http://www.ubuntu.com/"},{default:i(()=>[...n[93]||(n[93]=[l("Ubuntu 服務器",-1)])]),_:1}),n[95]||(n[95]=l(" 上部署 NGINX 和 NGINX Plus 的過程與 CentOS 很相似，我將一步一步的指導來完成整個部署文件，並指出和 CentOS 的細微差異。",-1))]),n[161]||(n[161]=s("p",null,[l("首先和 CentOS 一樣，創建 Ansible 目錄結構和 Ansible 主部署文件。也按“創建 NGINX 服務器的列表”小節的描述創建 "),s("strong",null,"/etc/ansible/hosts"),l(" 文件。對於 NGINX Plus，你也需要安裝“複製 NGINX Plus 證書和密鑰到 Ansible 服務器”小節的描述複製證書和密鑰。")],-1)),s("p",null,[n[99]||(n[99]=l("下面是開源 NGINX 的 ",-1)),n[100]||(n[100]=s("strong",null,"install_nginx.yml",-1)),n[101]||(n[101]=l(" 部署文件。在第一節，我們使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/apt_key_module.html"},{default:i(()=>[...n[96]||(n[96]=[s("code",null,"apt_key",-1)])]),_:1}),n[102]||(n[102]=l(" 模組導入 NGINX 的簽名密鑰。接下來的兩節使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/lineinfile_module.html"},{default:i(()=>[...n[97]||(n[97]=[s("code",null,"lineinfile",-1)])]),_:1}),n[103]||(n[103]=l(" 模組來添加 Ubuntu 14.04 的軟件包 URL 到 ",-1)),n[104]||(n[104]=s("strong",null,"sources.list",-1)),n[105]||(n[105]=l(" 文件中。最後，我們使用 ",-1)),e(t,{href:"http://docs.ansible.com/ansible/apt_module.html"},{default:i(()=>[...n[98]||(n[98]=[s("code",null,"apt",-1)])]),_:1}),n[106]||(n[106]=l(" 模組來更新緩存並安裝 NGINX（",-1)),n[107]||(n[107]=s("code",null,"apt",-1)),n[108]||(n[108]=l(" 取代了我們在 CentOS 中部署時的 ",-1)),n[109]||(n[109]=s("code",null,"yum",-1)),n[110]||(n[110]=l(" 模組）。",-1))]),n[162]||(n[162]=s("pre",null,[s("code",null,`# ./ansible-nginx/tasks/install_nginx.yml
 
- name: NGINX | 添加 NGINX 簽名密鑰
  apt_key: url=http://nginx.org/keys/nginx_signing.key state=present
 
- name: NGINX | 為 NGINX 添加 sources.list deb url  
  lineinfile: dest=/etc/apt/sources.list line="deb http://nginx.org/packages/mainline/ubuntu/ trusty nginx"
 
- name: NGINX Plus | 為 NGINX 添加 sources.list deb-src url  
  lineinfile: dest=/etc/apt/sources.list line="deb-src http://nginx.org/packages/mainline/ubuntu/ trusty nginx"
 
- name: NGINX | 更新 apt 緩存
  apt:
    update_cache: yes
 
- name: NGINX | 安裝 NGINX
  apt:
    pkg: nginx
    state: latest
 
- name: NGINX | 啓動 NGINX
  service:
    name: nginx
    state: started
`)],-1)),s("p",null,[n[112]||(n[112]=l("下面是 NGINX Plus 的部署文件 ",-1)),n[113]||(n[113]=s("strong",null,"install_nginx.yml",-1)),n[114]||(n[114]=l("。前四節設置了 NGINX Plus 密鑰和證書。然後，我們像開源的 NGINX 一樣用 ",-1)),n[115]||(n[115]=s("code",null,"apt_key",-1)),n[116]||(n[116]=l(" 模組導入簽名密鑰，",-1)),n[117]||(n[117]=s("code",null,"get_url",-1)),n[118]||(n[118]=l(" 模組為 NGINX Plus 下載 ",-1)),n[119]||(n[119]=s("code",null,"apt",-1)),n[120]||(n[120]=l(" 配置文件。",-1)),e(t,{href:"http://docs.ansible.com/ansible/shell_module.html"},{default:i(()=>[...n[111]||(n[111]=[s("code",null,"shell",-1)])]),_:1}),n[121]||(n[121]=l(" 模組使用 ",-1)),n[122]||(n[122]=s("code",null,"printf",-1)),n[123]||(n[123]=l(" 命令寫下輸出到 ",-1)),n[124]||(n[124]=s("strong",null,"sources.list.d",-1)),n[125]||(n[125]=l(" 目錄中的 ",-1)),n[126]||(n[126]=s("strong",null,"nginx-plus.list",-1)),n[127]||(n[127]=l(" 文件。最終的 ",-1)),n[128]||(n[128]=s("code",null,"name",-1)),n[129]||(n[129]=l(" 模組和開源 NGINX 一樣。",-1))]),n[163]||(n[163]=s("pre",null,[s("code",null,`# ./ansible-nginx-plus/tasks/install_nginx_plus.yml
 
- name: NGINX Plus | 創建 NGINX Plus ssl 證書 repo 目錄
  file: path=/etc/ssl/nginx state=directory group=root mode=0700
 
- name: NGINX Plus | 複製 NGINX Plus 倉庫證書
  copy: src=/etc/ssl/nginx/nginx-repo.crt dest=/etc/ssl/nginx/nginx-repo.crt owner=root group=root mode=0700
 
- name: NGINX Plus | 複製 NGINX Plus 倉庫密鑰
  copy: src=/etc/ssl/nginx/nginx-repo.key dest=/etc/ssl/nginx/nginx-repo.key owner=root group=root mode=0700
 
- name: NGINX Plus | 安裝 NGINX Plus CA 證書
  get_url: url=https://cs.nginx.com/static/files/CA.crt dest=/etc/ssl/nginx/CA.crt mode=0700
 
- name: NGINX Plus | 添加 NGINX Plus 簽名密鑰
  apt_key: url=http://nginx.org/keys/nginx_signing.key state=present
 
- name: NGINX Plus | 安裝 Apt-Get NGINX Plus 倉庫
  get_url: url=https://cs.nginx.com/static/files/90nginx dest=/etc/apt/apt.conf.d/90nginx mode=0700
 
- name: NGINX Plus | 為 NGINX Plus 添加 sources.list url  
  shell: printf "deb https://plus-pkgs.nginx.com/ubuntu \`lsb_release -cs\` nginx-plus\\n" >/etc/apt/sources.list.d/nginx-plus.list
 
- name: NGINX Plus | 運行 apt-get update
  apt:
    update_cache: yes
 
- name: NGINX Plus | 安裝 NGINX Plus 通過 apt-get
  apt:
    pkg: nginx-plus
    state: latest
 
- name: NGINX Plus | 啓動 NGINX Plus
  service:
    name: nginx
    state: started
`)],-1)),n[164]||(n[164]=s("p",null,"現在我們已經準備好運行 ansible-playbook 命令：",-1)),n[165]||(n[165]=s("pre",null,[s("code",null,`$ sudo ansible-playbook --ask-pass $HOME/ansible-nginx-plus/deploy.yml
`)],-1)),n[166]||(n[166]=s("p",null,"你應該得到一個成功的 play recap。如果你沒有成功，你可以使用冗餘參數，以幫助你解決出現的問題。",-1)),n[167]||(n[167]=s("h3",{id:"小結",tabindex:"-1"},[l("小結 "),s("a",{class:"header-anchor",href:"#小結","aria-label":"Permalink to “小結”"},"​")],-1)),s("p",null,[n[131]||(n[131]=l("我在這個教程中演示是什麼是 Ansible，可以做些什麼來幫助你自動部署 NGINX 或 NGINX Plus，這僅僅是個開始。還有許多有用的模組，包括從用户賬號管理到自定義配置模板等。如果你有興趣瞭解關於這些的更多信息，請訪問 ",-1)),e(t,{href:"http://docs.ansible.com/"},{default:i(()=>[...n[130]||(n[130]=[l("Ansible 官方文檔",-1)])]),_:1}),n[132]||(n[132]=l("。",-1))]),n[168]||(n[168]=s("hr",null,null,-1)),s("p",null,[n[134]||(n[134]=l("via: ",-1)),e(t,{href:"https://www.nginx.com/blog/installing-nginx-nginx-plus-ansible/"},{default:i(()=>[...n[133]||(n[133]=[l("https://www.nginx.com/blog/installing-nginx-nginx-plus-ansible/",-1)])]),_:1})]),s("p",null,[n[138]||(n[138]=l("作者：",-1)),e(t,{href:"https://www.nginx.com/blog/author/kjones/"},{default:i(()=>[...n[135]||(n[135]=[l("Kevin Jones",-1)])]),_:1}),n[139]||(n[139]=l(" 譯者：",-1)),e(t,{href:"https://github.com/strugglingyouth"},{default:i(()=>[...n[136]||(n[136]=[l("strugglingyouth",-1)])]),_:1}),n[140]||(n[140]=l(" 校對：",-1)),e(t,{href:"https://github.com/wxy"},{default:i(()=>[...n[137]||(n[137]=[l("wxy",-1)])]),_:1})]),s("p",null,[n[143]||(n[143]=l("本文由 ",-1)),e(t,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[141]||(n[141]=[l("LCTT",-1)])]),_:1}),n[144]||(n[144]=l(" 原創編譯，",-1)),e(t,{href:"https://linux.cn/"},{default:i(()=>[...n[142]||(n[142]=[l("Linux中國",-1)])]),_:1}),n[145]||(n[145]=l(" 榮譽推出",-1))])])}const y=r(d,[["render",g]]);export{P as __pageData,y as default};
