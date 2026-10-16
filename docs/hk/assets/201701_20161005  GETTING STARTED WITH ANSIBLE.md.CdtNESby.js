import{_ as t,a0 as o,w as r,s as d,ao as i,I as a,a1 as l,A as e,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"Ansible 起步指南 | LCTT x X-CMD","titleTemplate":false,"description":"Ansible 起步指南 | LCTT (201701) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Ansible 起步指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Ansible 起步指南 | LCTT (201701) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201701/20161005  GETTING STARTED WITH ANSIBLE","title":"Ansible 起步指南","tag":"201701","desc":""},"relativePath":"201701/20161005  GETTING STARTED WITH ANSIBLE.md","filePath":"[post].md"}'),c={name:"201701/20161005  GETTING STARTED WITH ANSIBLE.md"};function b(h,s,u,g,k,m){const p=o("Link");return r(),d("div",null,[s[81]||(s[81]=i('<h1 id="ansible-起步指南" tabindex="-1">Ansible 起步指南 <a class="header-anchor" href="#ansible-起步指南" aria-label="Permalink to “Ansible 起步指南”">​</a></h1><p>這是一篇關於 Ansible 的速成課程，你可以用作小項目的模板，或者幫你深入瞭解這個神奇的工具。閲讀了本指南之後，你將對自動化服務器配置、部署等有足夠的瞭解。</p><h3 id="ansible-是什麼-為什麼你該瞭解" tabindex="-1">Ansible 是什麼，為什麼你該瞭解？ <a class="header-anchor" href="#ansible-是什麼-為什麼你該瞭解" aria-label="Permalink to “Ansible 是什麼，為什麼你該瞭解？”">​</a></h3><p>Ansible 簡單的説是一個配置管理系統（configuration management system）。你只需要可以使用 ssh 訪問你的服務器或設備就行。它也不同於其他工具，因為它使用推送的方式，而不是像 puppet 或 chef 那樣使用拉取的方式。你可以將代碼部署到任意數量的服務器上，配置網絡設備或在基礎架構中自動執行任何操作。</p><h3 id="前置要求" tabindex="-1">前置要求 <a class="header-anchor" href="#前置要求" aria-label="Permalink to “前置要求”">​</a></h3><p>假設你使用 Mac 或 Linux 作為你的工作站，Ubuntu Trusty 作為你的服務器，並有一些安裝軟件包的經驗。此外，你的計算機上將需要以下軟件。所以，如果你還沒有它們，請先安裝：</p>',6)),a("ul",null,[a("li",null,[l(p,{href:"https://www.virtualbox.org/"},{default:e(()=>[...s[0]||(s[0]=[n("Virtualbox",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://www.vagrantup.com/downloads.html"},{default:e(()=>[...s[1]||(s[1]=[n("Vagrant",-1)])]),_:1})]),a("li",null,[s[3]||(s[3]=n("Mac 用户：",-1)),l(p,{href:"http://brew.sh/"},{default:e(()=>[...s[2]||(s[2]=[n("Homebrew",-1)])]),_:1})])]),s[82]||(s[82]=i(`<h3 id="情景" tabindex="-1">情景 <a class="header-anchor" href="#情景" aria-label="Permalink to “情景”">​</a></h3><p>我們將模擬 2 個連接到 MySQL 資料庫的 Web 應用程序服務器。Web 應用程序使用 Rails 5 和 Puma。</p><h3 id="準備" tabindex="-1">準備 <a class="header-anchor" href="#準備" aria-label="Permalink to “準備”">​</a></h3><h4 id="vagrantfile" tabindex="-1">Vagrantfile <a class="header-anchor" href="#vagrantfile" aria-label="Permalink to “Vagrantfile”">​</a></h4><p>為這個項目創建一個文件夾，並將下面的內容保存到名為 <code>Vagrantfile</code> 的文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>VMs = [</span></span>
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
<span class="line"><span>end</span></span></code></pre></div><h4 id="配置你的虛擬網絡" tabindex="-1">配置你的虛擬網絡 <a class="header-anchor" href="#配置你的虛擬網絡" aria-label="Permalink to “配置你的虛擬網絡”">​</a></h4><p>我們希望我們的虛擬機能互相交互，但不要讓流量流出到真實的網絡，所以我們將在 Virtualbox 中創建一個僅主機（HOST-Only）的網絡適配器。</p><ol><li>打開 Virtualbox</li><li>轉到 Preferences</li><li>轉到 Network</li><li>單擊 Host-Only</li><li>單擊添加網絡</li><li>單擊 Adapter</li><li>將 IPv4 設置為 <code>10.1.1.1</code>，IPv4 網絡掩碼：<code>255.255.255.0</code></li><li>單擊 “OK”</li></ol><h4 id="測試虛擬機及虛擬網絡" tabindex="-1">測試虛擬機及虛擬網絡 <a class="header-anchor" href="#測試虛擬機及虛擬網絡" aria-label="Permalink to “測試虛擬機及虛擬網絡”">​</a></h4><p>在終端中，在存放 <code>Vagrantfile</code> 的項目目錄中，輸入下面的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant up</span></span></code></pre></div><p>它會創建你的虛擬機，因此會花費一會時間。輸入下面的命令並驗證輸出內容以檢查是否已經工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vagrant status</span></span>
<span class="line"><span>Current machine states:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>web1                      running (virtualbox)</span></span>
<span class="line"><span>web2                      running (virtualbox)</span></span>
<span class="line"><span>master                    running (virtualbox)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This environment represents multiple VMs. The VMs are all listed</span></span>
<span class="line"><span>above with their current state. For more information about a specific</span></span>
<span class="line"><span>VM, run \`vagrant status NAME\`.</span></span></code></pre></div><p>現在使用 <code>vagrant</code> 的用户名和密碼 ，按 <code>Vagrantfile</code> 中的 IP 登錄其中一台虛擬機，這將驗證虛擬機並將它們的密鑰添加到你的已知主機（<code>known_hosts</code>）文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ssh vagrant@10.1.1.11 # password is \`vagrant\`</span></span>
<span class="line"><span>ssh vagrant@10.1.1.12</span></span>
<span class="line"><span>ssh vagrant@10.1.1.21</span></span></code></pre></div><p>恭喜你！現在你已經有可以實驗的服務器了。下面的剩下的部分！</p><h3 id="安裝-ansible" tabindex="-1">安裝 Ansible <a class="header-anchor" href="#安裝-ansible" aria-label="Permalink to “安裝 Ansible”">​</a></h3><p>對於 Mac 用户:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ brew install ansible</span></span></code></pre></div><p>對於 Ubuntu 用户:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt install ansible</span></span></code></pre></div><p>確保你使用了ansible 最近的版本 2.1 或者更高的版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible --version</span></span>
<span class="line"><span>ansible 2.1.1.0</span></span></code></pre></div><h3 id="清單" tabindex="-1">清單 <a class="header-anchor" href="#清單" aria-label="Permalink to “清單”">​</a></h3><p>Ansible 使用清單文件來了解要使用的服務器，以及如何將它們分組以並行執行任務。讓我們為這個項目創建我們的清單文件 <code>inventory</code>，並將它放在與 <code>Vagrantfile</code> 相同的文件夾中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[all:children]</span></span>
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
<span class="line"><span>dbserver ansible_host=10.1.1.21</span></span></code></pre></div><ul><li><code>[all：children]</code> 定義一個組的組（<code>all</code>）</li><li><code>[all：vars]</code> 定義屬於組 <code>all</code> 的變量</li><li><code>[webs]</code> 定義一個組，就像 <code>[db]</code> 一樣</li><li>文件的其餘部分只是主機的聲明，帶有它們的名稱和 IP</li><li>空行表示聲明結束</li></ul><p>現在我們有了一個清單，我們可以從命令列開始使用 ansible，指定一個主機或一個組來執行命令。以下是檢查與服務器的連接的命令示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible -i inventory all -m ping</span></span></code></pre></div><ul><li><code>-i</code> 指定清單文件</li><li><code>all</code> 指定要操作的服務器或服務器組</li><li><code>-m</code> 指定一個 ansible 模組，在這種情況下為 <code>ping</code></li></ul><p>下面是命令輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dbserver | SUCCESS =&gt; {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>服務器以不同的順序響應，這隻取決於誰先響應，但是這個沒有關係，因為 ansible 獨立保持每台服務器的狀態。</p><p>你也可以使用另外一個選項來運行任何命令：</p><ul><li><code>-a &lt;command&gt;</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible -i inventory all -a uptime</span></span>
<span class="line"><span>web1 | SUCCESS | rc=0 &gt;&gt;</span></span>
<span class="line"><span> 21:43:27 up 25 min,  1 user,  load average: 0.00, 0.01, 0.05</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dbserver | SUCCESS | rc=0 &gt;&gt;</span></span>
<span class="line"><span> 21:43:27 up 24 min,  1 user,  load average: 0.00, 0.01, 0.05</span></span>
<span class="line"><span></span></span>
<span class="line"><span>web2 | SUCCESS | rc=0 &gt;&gt;</span></span>
<span class="line"><span> 21:43:27 up 25 min,  1 user,  load average: 0.00, 0.01, 0.05</span></span></code></pre></div><p>這是隻有一台服務器的另外一個例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible -i inventory dbserver -a &quot;df -h /&quot;</span></span>
<span class="line"><span>dbserver | SUCCESS | rc=0 &gt;&gt;</span></span>
<span class="line"><span>Filesystem      Size  Used Avail Use% Mounted on</span></span>
<span class="line"><span>/dev/sda1        40G  1.4G   37G   4% /</span></span></code></pre></div><h3 id="劇本" tabindex="-1">劇本 <a class="header-anchor" href="#劇本" aria-label="Permalink to “劇本”">​</a></h3>`,40)),a("p",null,[s[5]||(s[5]=n("劇本（playbook）只是個 YAML 文件，它將清單文件中的服務器組與命令關聯。在 ansible 中的對於關鍵字是 ",-1)),s[6]||(s[6]=a("code",null,"tasks",-1)),s[7]||(s[7]=n("，它可以是一個預期的狀態、shell 命令或許多其它的選項。有關 ansible 可做的所有事情列表，可以查看",-1)),l(p,{href:"http://docs.ansible.com/ansible/list_of_all_modules.html"},{default:e(()=>[...s[4]||(s[4]=[n("所有模組的列表",-1)])]),_:1}),s[8]||(s[8]=n("。",-1))]),s[83]||(s[83]=i(`<p>下面是一個運行 shell 命令的劇本示例，將其保存為 <code>playbook1.yml</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: all</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - shell: uptime</span></span></code></pre></div>`,2)),a("ul",null,[s[13]||(s[13]=a("li",null,[a("code",null,"---"),n(" 是 YAML 文件的開始")],-1)),s[14]||(s[14]=a("li",null,[a("code",null," - hosts"),n("：指定要使用的組")],-1)),s[15]||(s[15]=a("li",null,[a("code",null,"tasks"),n("：標記任務列表的開始")],-1)),a("li",null,[s[10]||(s[10]=a("code",null," - shell",-1)),s[11]||(s[11]=n("：指定第一個任務使用 ",-1)),l(p,{href:"http://docs.ansible.com/ansible/shell_module.html"},{default:e(()=>[...s[9]||(s[9]=[n("shell",-1)])]),_:1}),s[12]||(s[12]=n(" 模組",-1))]),s[16]||(s[16]=a("li",null,[a("strong",null,"記住：YAML 需要縮進結構，確保你始終遵循劇本中的正確結構")],-1))]),s[84]||(s[84]=i(`<p>用下面的命令運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook -i inventory playbook1.yml</span></span>
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
<span class="line"><span>web2                       : ok=2    changed=1    unreachable=0    failed=0</span></span></code></pre></div><p>正如你所見，ansible 運行了 2 個任務，而不是隻有劇本中的一個。<code>TASK [setup]</code> 是一個隱式任務，它會首先運行以捕獲服務器的信息，如主機名、IP、發行版和更多詳細信息，然後可以使用這些信息運行條件任務。</p><p>還有最後的 <code>PLAY RECAP</code>，其中 ansible 顯示了運行了多少個任務以及每個對應的狀態。在我們的例子中，因為我們運行了一個 shell 命令，ansible 不知道結果的狀態，它被認為是 <code>changed</code>。</p><h4 id="安裝軟件" tabindex="-1">安裝軟件 <a class="header-anchor" href="#安裝軟件" aria-label="Permalink to “安裝軟件”">​</a></h4>`,5)),a("p",null,[s[18]||(s[18]=n("我們將使用 ",-1)),l(p,{href:"http://docs.ansible.com/ansible/apt_module.html"},{default:e(()=>[...s[17]||(s[17]=[n("apt",-1)])]),_:1}),s[19]||(s[19]=n(" 在我們的服務器上安裝軟件，因為我們需要 root 權限，所以我們必須使用 ",-1)),s[20]||(s[20]=a("code",null,"become",-1)),s[21]||(s[21]=n(" 語句，將這個內容保存在 ",-1)),s[22]||(s[22]=a("code",null,"playbook2.yml",-1)),s[23]||(s[23]=n(" 中並運行它（",-1)),s[24]||(s[24]=a("code",null,"ansible-playbook playbook2.yml",-1)),s[25]||(s[25]=n("）：",-1))]),s[85]||(s[85]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: webs</span></span>
<span class="line"><span>  become_user: root</span></span>
<span class="line"><span>  become: true</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - apt: name=git state=present</span></span></code></pre></div><p>有一些語句可以應用於 ansible 中所有模組；一個是 <code>name</code> 語句，可以讓我們輸出關於正在執行的任務的更具描述性的文本。要使用它，保持任務內容一樣，但是添加 <code>name ：描述性文本</code> 作為第一行，所以我們以前的文本將改成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: webs</span></span>
<span class="line"><span>  become_user: root</span></span>
<span class="line"><span>  become: true</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: This task will make sure git is present on the system</span></span>
<span class="line"><span>      apt: name=git state=present</span></span></code></pre></div><h4 id="使用-with-items" tabindex="-1">使用 <code>with_items</code> <a class="header-anchor" href="#使用-with-items" aria-label="Permalink to “使用 with_items”">​</a></h4><p>當你要處理一個列表時，比如要安裝的項目和軟件包、要創建的文件，可以用 ansible 提供的 <code>with_items</code>。下面是我們如何在 <code>playbook3.yml</code> 中使用它，同時添加一些我們已經知道的其他語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
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
<span class="line"><span>        - python-software-properties</span></span></code></pre></div><h4 id="使用-template-和-vars" tabindex="-1">使用 <code>template</code> 和 <code>vars</code> <a class="header-anchor" href="#使用-template-和-vars" aria-label="Permalink to “使用 template 和 vars”">​</a></h4>`,7)),a("p",null,[s[27]||(s[27]=a("code",null,"vars",-1)),s[28]||(s[28]=n(" 是一個定義變量語句，可以在 ",-1)),s[29]||(s[29]=a("code",null,"task",-1)),s[30]||(s[30]=n(" 語句或 ",-1)),s[31]||(s[31]=a("code",null,"template",-1)),s[32]||(s[32]=n(" 文件中使用。 ",-1)),l(p,{href:"http://jinja.pocoo.org/docs/dev/"},{default:e(()=>[...s[26]||(s[26]=[n("Jinja2",-1)])]),_:1}),s[33]||(s[33]=n(" 是 Ansible 中使用的模板引擎，但是關於它你不需要學習很多。在你的劇本中定義變量，如下所示：",-1))]),s[86]||(s[86]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: all</span></span>
<span class="line"><span>  vars:</span></span>
<span class="line"><span>    - secret_key: VqnzCLdCV9a3jK</span></span>
<span class="line"><span>    - path_to_vault: /opt/very/deep/path</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: Setting a configuration file using template</span></span>
<span class="line"><span>      template: src=myconfig.j2 dest={{path_to_vault}}/app.conf</span></span></code></pre></div><p>正如你看到的，我可以使用 <code>{{path_to_vault}}</code> 作為劇本的一部分，但也因為我使用了 <code>template</code>語句，我可以使用 <code>myconfig.j2</code> 中的任何變量，該文件必須存在一個名為 <code>templates</code> 的子文件夾中。你項目樹應該如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>├── Vagrantfile</span></span>
<span class="line"><span>├── inventory</span></span>
<span class="line"><span>├── playbook1.yml</span></span>
<span class="line"><span>├── playbook2.yml</span></span>
<span class="line"><span>└── templates</span></span>
<span class="line"><span>    └── myconfig.j2</span></span></code></pre></div><p>當 ansible 找到一個 <code>template</code> 語句後它會在 <code>templates</code> 文件夾內查找，並將把被 <code>{{</code> 和 <code>}}</code> 括起來的變量展開來。</p><p>示例模板：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>this is just an example vault_dir: {{path_to_vault}} secret_password: {{secret_key}}</span></span></code></pre></div><p>即使你不擴展變量你也可以使用 <code>template</code>。考慮到將來會添加所以我先做了。比如創建一個 <code>hosts.j2</code> 模板並加入主機名和 IP。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>10.1.1.11 web1</span></span>
<span class="line"><span>10.1.1.12 web2</span></span>
<span class="line"><span>10.1.1.21 dbserver</span></span></code></pre></div><p>這裏要用像這樣的語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  -  name: Installing the hosts file in all servers</span></span>
<span class="line"><span>     template: src=hosts.j2 dest=/etc/hosts mode=644</span></span></code></pre></div><h4 id="shell-命令" tabindex="-1">shell 命令 <a class="header-anchor" href="#shell-命令" aria-label="Permalink to “shell 命令”">​</a></h4><p>你應該儘量使用模組，因為 Ansible 可以跟蹤任務的狀態，並避免不必要的重複，但有時 shell 命令是不可避免的。 對於這些情況，Ansible 提供兩個選項：</p>`,12)),a("ul",null,[a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/command_module.html"},{default:e(()=>[...s[34]||(s[34]=[n("command",-1)])]),_:1}),s[35]||(s[35]=n("：直接運行一個命令，沒有環境變量或重定向（",-1)),s[36]||(s[36]=a("code",null,"|",-1)),s[37]||(s[37]=n("，",-1)),s[38]||(s[38]=a("code",null,"<",-1)),s[39]||(s[39]=n("，",-1)),s[40]||(s[40]=a("code",null,">",-1)),s[41]||(s[41]=n(" 等）",-1))]),a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/shell_module.html"},{default:e(()=>[...s[42]||(s[42]=[n("shell",-1)])]),_:1}),s[43]||(s[43]=n("：運行 ",-1)),s[44]||(s[44]=a("code",null,"/bin/sh",-1)),s[45]||(s[45]=n(" 並展開變量和支持重定向",-1))])]),s[87]||(s[87]=a("h4",{id:"其他有用的模組",tabindex:"-1"},[n("其他有用的模組 "),a("a",{class:"header-anchor",href:"#其他有用的模組","aria-label":"Permalink to “其他有用的模組”"},"​")],-1)),a("ul",null,[a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/apt_repository_module.html"},{default:e(()=>[...s[46]||(s[46]=[n("apt_repository",-1)])]),_:1}),s[47]||(s[47]=n(" - 在 Debian 系的發行版中添加/刪除包倉庫",-1))]),a("li",null,[l(p,{href:"https://docs.ansible.com/ansible/yum_repository_module.html"},{default:e(()=>[...s[48]||(s[48]=[n("yum_repository",-1)])]),_:1}),s[49]||(s[49]=n(" - 在 RedHat 系的發行版中添加/刪除包倉庫",-1))]),a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/service_module.html"},{default:e(()=>[...s[50]||(s[50]=[n("service",-1)])]),_:1}),s[51]||(s[51]=n(" - 啓動/停止/重新啓動/啓用/禁用服務",-1))]),a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/git_module.html"},{default:e(()=>[...s[52]||(s[52]=[n("git",-1)])]),_:1}),s[53]||(s[53]=n(" - 從 git 服務器部署代碼",-1))]),a("li",null,[l(p,{href:"http://docs.ansible.com/ansible/unarchive_module.html"},{default:e(()=>[...s[54]||(s[54]=[n("unarchive",-1)])]),_:1}),s[55]||(s[55]=n(" - 從 Web 或本地源解開軟件包",-1))])]),s[88]||(s[88]=a("h4",{id:"只在一台服務器中運行任務",tabindex:"-1"},[n("只在一台服務器中運行任務 "),a("a",{class:"header-anchor",href:"#只在一台服務器中運行任務","aria-label":"Permalink to “只在一台服務器中運行任務”"},"​")],-1)),a("p",null,[s[57]||(s[57]=n("Rails 使用 ",-1)),l(p,{href:"http://edgeguides.rubyonrails.org/active_record_migrations.html"},{default:e(()=>[...s[56]||(s[56]=[n("migrations",-1)])]),_:1}),s[58]||(s[58]=n(" 來逐步更改資料庫，但由於你有多個應用程序服務器，因此這些遷移任務不能被分配為組任務，而我們只需要一個服務器來運行遷移。在這種情況下，當使用 ",-1)),s[59]||(s[59]=a("code",null,"run_once",-1)),s[60]||(s[60]=n(" 時，",-1)),s[61]||(s[61]=a("code",null,"run_once",-1)),s[62]||(s[62]=n(" 將分派任務到一個服務器，並直到這個任務完成繼續下一個任務。你只需要在你的任務中設置 ",-1)),s[63]||(s[63]=a("code",null,"run_once：true",-1)),s[64]||(s[64]=n("。",-1))]),s[89]||(s[89]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    - name: &#39;Run db:migrate&#39;</span></span>
<span class="line"><span>      shell: cd {{appdir}};rails db:migrate</span></span>
<span class="line"><span>      run_once: true</span></span></code></pre></div><h4 id="會失敗的任務" tabindex="-1">會失敗的任務 <a class="header-anchor" href="#會失敗的任務" aria-label="Permalink to “會失敗的任務”">​</a></h4><p>通過指定 <code>ignore_errors：true</code>，你可以運行可能會失敗的任務，但不會影響劇本中剩餘的任務完成。這是非常有用的，例如，當刪除最初並不存在的日誌文件時。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    - name: &#39;Delete logs&#39;</span></span>
<span class="line"><span>      shell: rm -f /var/log/nginx/errors.log</span></span>
<span class="line"><span>      ignore_errors: true</span></span></code></pre></div><h3 id="放到一起" tabindex="-1">放到一起 <a class="header-anchor" href="#放到一起" aria-label="Permalink to “放到一起”">​</a></h3><p>現在用我們先前學到的，這裏是每個文件的最終版：</p><p><code>Vagrantfile</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>VMs = [</span></span>
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
<span class="line"><span>      shell: cd {{appdir}};rails server -b 0.0.0.0 -p 80 --pid /run/puma.pid -d</span></span></code></pre></div><h3 id="放在你的環境中" tabindex="-1">放在你的環境中 <a class="header-anchor" href="#放在你的環境中" aria-label="Permalink to “放在你的環境中”">​</a></h3><p>將這些文件放在相同的目錄，運行下面的命令打開你的開發環境：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant up</span></span>
<span class="line"><span>ansible-playbook -i inventory final-playbook.yml</span></span></code></pre></div><h3 id="部署新的代碼" tabindex="-1">部署新的代碼 <a class="header-anchor" href="#部署新的代碼" aria-label="Permalink to “部署新的代碼”">​</a></h3><p>確保修改了代碼並推送到了倉庫中。接下來，確保你 git 語句中使用了正確的分支：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    - name: &#39;Clone app repo&#39;</span></span>
<span class="line"><span>      git:</span></span>
<span class="line"><span>           repo=https://github.com/c0d5x/rails_dummyapp.git</span></span>
<span class="line"><span>           dest={{appdir}}</span></span>
<span class="line"><span>           version=staging</span></span>
<span class="line"><span>           force=yes</span></span></code></pre></div><p>作為一個例子，你可以修改 <code>version</code> 字段為 <code>master</code>，再次運行劇本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ansible-playbook -i inventory final-playbook.yml</span></span></code></pre></div><p>檢查所有的 web 服務器上的頁面是否已更改：<code>http://10.1.1.11</code> 或 <code>http://10.1.1.12</code>。將其更改為 <code>version = staging</code> 並重新運行劇本並再次檢查頁面。</p><p>你還可以創建只包含與部署相關的任務的替代劇本，以便其運行更快。</p><h3 id="接下來是什麼" tabindex="-1">接下來是什麼 ？！ <a class="header-anchor" href="#接下來是什麼" aria-label="Permalink to “接下來是什麼 ？！”">​</a></h3>`,27)),a("p",null,[s[66]||(s[66]=n("這只是可以做的很小一部分。我們沒有接觸角色（role）、過濾器（filter）、調試等許多其他很棒的功能，但我希望它給了你一個良好的開始！所以，請繼續學習並使用它。如果你有任何問題，你可以在 ",-1)),l(p,{href:"https://twitter.com/c0d5x"},{default:e(()=>[...s[65]||(s[65]=[n("twitter",-1)])]),_:1}),s[67]||(s[67]=n(" 或評論欄聯繫我，讓我知道你還想知道哪些關於 ansible 的東西！",-1))]),s[90]||(s[90]=a("hr",null,null,-1)),a("p",null,[s[69]||(s[69]=n("via: ",-1)),l(p,{href:"https://gorillalogic.com/blog/getting-started-with-ansible/?utm_source=webopsweekly&utm_medium=email"},{default:e(()=>[...s[68]||(s[68]=[n("https://gorillalogic.com/blog/getting-started-with-ansible/?utm_source=webopsweekly&utm_medium=email",-1)])]),_:1})]),a("p",null,[s[73]||(s[73]=n("作者：",-1)),l(p,{href:"https://gorillalogic.com/author/josehidalgo/"},{default:e(()=>[...s[70]||(s[70]=[n("JOSE HIDALGO",-1)])]),_:1}),s[74]||(s[74]=n(" 譯者：",-1)),l(p,{href:"https://github.com/geekpi"},{default:e(()=>[...s[71]||(s[71]=[n("geekpi",-1)])]),_:1}),s[75]||(s[75]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[72]||(s[72]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[78]||(s[78]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[76]||(s[76]=[n("LCTT",-1)])]),_:1}),s[79]||(s[79]=n(" 組織編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[77]||(s[77]=[n("Linux中國",-1)])]),_:1}),s[80]||(s[80]=n(" 榮譽推出",-1))])])}const C=t(c,[["render",b]]);export{v as __pageData,C as default};
