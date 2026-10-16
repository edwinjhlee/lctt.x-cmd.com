import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"20 分鐘建立一個 Ansible 實驗室 | LCTT x X-CMD","titleTemplate":false,"description":"20 分鐘建立一個 Ansible 實驗室 | LCTT (202012) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"20 分鐘建立一個 Ansible 實驗室 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"20 分鐘建立一個 Ansible 實驗室 | LCTT (202012) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202012/20201214 Set up an Ansible lab in 20 minutes","title":"20 分鐘建立一個 Ansible 實驗室","tag":"202012","desc":""},"relativePath":"202012/20201214 Set up an Ansible lab in 20 minutes.md","filePath":"[post].md"}'),u={name:"202012/20201214 Set up an Ansible lab in 20 minutes.md"};function g(b,s,h,m,c,k){const p=o("Link");return r(),d("div",null,[s[46]||(s[46]=a("h1",{id:"_20-分鐘建立一個-ansible-實驗室",tabindex:"-1"},[n("20 分鐘建立一個 Ansible 實驗室 "),a("a",{class:"header-anchor",href:"#_20-分鐘建立一個-ansible-實驗室","aria-label":"Permalink to “20 分鐘建立一個 Ansible 實驗室”"},"​")],-1)),s[47]||(s[47]=a("blockquote",null,[a("p",null,"建立一個支持學習和實驗新軟件的環境。")],-1)),s[48]||(s[48]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202012/31/112636h6ck5qd60d44t0mm.jpg",alt:""})],-1)),s[49]||(s[49]=a("p",null,"能夠構建和拆解公有云環境是非常有用的，但我們大多數人都不能輕鬆訪問公有云。退而求其次的最好辦法就是在本地機器上建立一個實驗室，但即使在本地機器上運行也會帶來性能、靈活性和其他挑戰。大多數時候，本地機器上額外的工作負載會干擾我們日常的工作，它們當然也會影響你提供一個現成的環境來玩耍和實驗新軟件。",-1)),a("p",null,[s[1]||(s[1]=n("幾年前，當我和我的團隊開始學習 ",-1)),e(p,{href:"https://opensource.com/resources/what-ansible"},{default:i(()=>[...s[0]||(s[0]=[n("Ansible",-1)])]),_:1}),s[2]||(s[2]=n(" 時，我們就遇到了這個挑戰。我們找不到一個可以單獨使用的環境，我們對這種情況的失望導致我們中的一些人停止了實驗。我們知道需要找到一個解決方案。",-1))]),s[50]||(s[50]=a("p",null,"我們花了很多時間研究各種方案，得出了一套工具，使我們的好奇心能夠在我們完全控制的環境中學習。我們可以在本地機器上輪換和拆解實驗室環境，而不需要訪問內部實驗室或公共雲。",-1)),s[51]||(s[51]=a("p",null,"本文將解釋如何在 20 分鐘內以完全自動化的方式在本地機器上部署自己的實驗室環境。",-1)),a("p",null,[s[4]||(s[4]=n("你可以在我的 ",-1)),e(p,{href:"https://github.com/mikecali/ansible-labs-101"},{default:i(()=>[...s[3]||(s[3]=[n("GitHub 倉庫",-1)])]),_:1}),s[5]||(s[5]=n("中找到這個練習的所有代碼。",-1))]),s[52]||(s[52]=a("h3",{id:"工具和軟件",tabindex:"-1"},[n("工具和軟件 "),a("a",{class:"header-anchor",href:"#工具和軟件","aria-label":"Permalink to “工具和軟件”"},"​")],-1)),s[53]||(s[53]=a("p",null,"本方案使用以下工具和軟件：",-1)),a("ul",null,[a("li",null,[e(p,{href:"https://www.ansible.com/"},{default:i(()=>[...s[6]||(s[6]=[n("Ansible",-1)])]),_:1}),s[7]||(s[7]=n(" 是我們選擇的自動化工具，因為它易於使用，而且足夠靈活，可以滿足實驗室的要求。",-1))]),a("li",null,[e(p,{href:"https://www.vagrantup.com/"},{default:i(()=>[...s[8]||(s[8]=[n("Vagrant",-1)])]),_:1}),s[9]||(s[9]=n(" 易於使用，用於構建和維護虛擬機。",-1))]),a("li",null,[e(p,{href:"https://www.virtualbox.org/"},{default:i(()=>[...s[10]||(s[10]=[n("VirtualBox",-1)])]),_:1}),s[11]||(s[11]=n(" 是一個託管管理程序，可以在 Windows 和 Linux 環境中使用。",-1))]),a("li",null,[e(p,{href:"https://getfedora.org/"},{default:i(()=>[...s[12]||(s[12]=[n("Fedora v30+",-1)])]),_:1}),s[13]||(s[13]=n(" 是我本地機器上的操作系統。",-1))])]),s[54]||(s[54]=a("p",null,"你必須進行以下設置才能建立環境：",-1)),a("ul",null,[s[17]||(s[17]=a("li",null,"一個互聯網連接",-1)),a("li",null,[s[15]||(s[15]=n("在 BIOS 中啓用虛擬化技術支持（以下是在我的聯想筆記本上的",-1)),e(p,{href:"https://support.lenovo.com/pt/en/solutions/ht500006"},{default:i(()=>[...s[14]||(s[14]=[n("過程",-1)])]),_:1}),s[16]||(s[16]=n("）",-1))]),s[18]||(s[18]=a("li",null,"Vagrant v2.2.9",-1)),s[19]||(s[19]=a("li",null,"最新版本的 Ansible",-1)),s[20]||(s[20]=a("li",null,"最新版本的 VirtualBox",-1)),s[21]||(s[21]=a("li",null,"Fedora v30+ 宿主機操作系統",-1))]),s[55]||(s[55]=a("h3",{id:"這個實驗室環境有什麼",tabindex:"-1"},[n("這個實驗室環境有什麼？ "),a("a",{class:"header-anchor",href:"#這個實驗室環境有什麼","aria-label":"Permalink to “這個實驗室環境有什麼？”"},"​")],-1)),a("p",null,[s[23]||(s[23]=n("這個項目旨在部署一個帶有 Ansible 引擎和多個 Linux 節點的 Ansible 主機，以及一些預加載和預配置的應用程序（httpd 和 MySQL）。它還啓用了 ",-1)),e(p,{href:"https://opensource.com/article/20/11/cockpit-server-management"},{default:i(()=>[...s[22]||(s[22]=[n("Cockpit",-1)])]),_:1}),s[24]||(s[24]=n("，這樣你就可以在測試過程中監控虛擬機（VM）的狀態。使用預部署的應用程序的原因是為了提高效率（所以你不必花時間安裝這些組件）。這樣你就可以專注於創建角色和劇本，並針對上述工具部署的環境進行測試。",-1))]),s[56]||(s[56]=a("p",null,"我們確定，對於我們的用例來説，最好的方案是多機 Vagrant 環境。Vagrant 文件創建了三個 CentOS 虛擬機，以模擬兩個目標主機和一個 Ansible 控制機。",-1)),s[57]||(s[57]=a("ul",null,[a("li",null,"Host1: 沒有圖形用户界面（GUI），安裝 httpd 和 MySQL"),a("li",null,"Host2: 沒有 GUI，安裝了 httpd 和 MySQL"),a("li",null,"Ansible-host：沒有 GUI，安裝了 Ansible 引擎")],-1)),s[58]||(s[58]=a("h3",{id:"啓用多個管理程序",tabindex:"-1"},[n("啓用多個管理程序 "),a("a",{class:"header-anchor",href:"#啓用多個管理程序","aria-label":"Permalink to “啓用多個管理程序”"},"​")],-1)),a("p",null,[s[26]||(s[26]=n("如果使用了多個管理程序，一些管理程序可能不允許你拉起虛擬機。要解決這個問題，請遵循以下步驟（基於 Vagrant 的",-1)),e(p,{href:"https://www.vagrantup.com/docs/installation"},{default:i(()=>[...s[25]||(s[25]=[n("安裝",-1)])]),_:1}),s[27]||(s[27]=n("説明）。",-1))]),s[59]||(s[59]=l(`<p>首先，找出管理程序的名稱：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ lsmod | grep kvm</span></span>
<span class="line"><span>kvm_intel             204800  6</span></span>
<span class="line"><span>kvm                   593920  1 kvm_intel</span></span>
<span class="line"><span>irqbypass              16384  1 kvm</span></span></code></pre></div><p>我感興趣的是 <code>kvm_intel</code>，但你可能需要另一個（比如 <code>kvm_amd</code>）。</p><p>以 root 身份運行以下內容，將該管理程序列入黑名單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &#39;blacklist kvm-intel&#39; &gt;&gt; /etc/modprobe.d/blacklist.conf</span></span></code></pre></div><p>重新啓動你的機器並嘗試再次運行 Vagrant。</p><h3 id="vagrant-文件" tabindex="-1">Vagrant 文件 <a class="header-anchor" href="#vagrant-文件" aria-label="Permalink to “Vagrant 文件”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat Vagrantfile</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># -*- mode: ruby -*-</span></span>
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
<span class="line"><span>end</span></span></code></pre></div><p>這些是你需要注意的重要文件。</p><ul><li><code>inventory-test.yaml</code>：連接到節點的清單文件</li><li><code>playbook.yaml</code>：Vagrant 供應者調用的用於配置節點的劇本文件</li><li>\`Vagrantfile&#39;：Vagrant 用來部署環境的文件</li><li>Vagrant 密鑰文件：連接實驗室環境中各節點的 Vagrant 密鑰</li></ul><p>你可以根據你的需要調整這些文件。Ansible 的靈活性使你有能力根據你的需要聲明性地改變你的環境。</p><h3 id="部署你的實驗室環境" tabindex="-1">部署你的實驗室環境 <a class="header-anchor" href="#部署你的實驗室環境" aria-label="Permalink to “部署你的實驗室環境”">​</a></h3>`,13)),a("p",null,[s[29]||(s[29]=n("首先，克隆這個 ",-1)),e(p,{href:"https://github.com/mikecali/ansible-labs-101.git"},{default:i(()=>[...s[28]||(s[28]=[n("GitHub 倉庫",-1)])]),_:1}),s[30]||(s[30]=n(" 中的代碼：",-1))]),s[60]||(s[60]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git clone https://github.com/mikecali/ansible-labs-101.git</span></span>
<span class="line"><span>Cloning into &#39;ansible-labs-101&#39;...</span></span>
<span class="line"><span>remote: Enumerating objects: 15, done.</span></span>
<span class="line"><span>remote: Counting objects: 100% (15/15), done.</span></span>
<span class="line"><span>remote: Compressing objects: 100% (13/13), done.</span></span>
<span class="line"><span>remote: Total 15 (delta 2), reused 10 (delta 0), pack-reused 0</span></span>
<span class="line"><span>Unpacking objects: 100% (15/15), 6.82 KiB | 634.00 KiB/s, done.</span></span></code></pre></div><p>接下來，將你的目錄改為 <code>vagrant-session-2</code>，並查看其內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>Bootstrap-node.sh   inventory   keys   playbook.yml   README.md Vagrantfile</span></span></code></pre></div><p>現在你已經擁有了實驗室環境所需的所有工件和配置文件。要部署環境，請運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vagrant up</span></span></code></pre></div><p>只要有一個像樣的網絡連接，只需要 20 分鐘左右就可以得到一個運行環境：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vagrant up</span></span>
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
<span class="line"><span>[...]</span></span></code></pre></div><p>一旦該劇本執行完成，你會看到這樣的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>PLAY RECAP *********************************</span></span>
<span class="line"><span>Ansible-host     : ok=20 changed=11 unreachable=0 failed=0 skipped=0 rescued=0 ignored=3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Real 18m14.288s</span></span>
<span class="line"><span>User 2m26.978s</span></span>
<span class="line"><span>Sys 0m26.849s</span></span></code></pre></div><p>確認所有虛擬機都在運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vagrant status</span></span>
<span class="line"><span>Current machine states:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Web1.demo.com    running (virtualbox)</span></span>
<span class="line"><span>Web2.demo.com    running (virtualbox)</span></span>
<span class="line"><span>ansible-host     running (virtualbox)</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>你可以通過登錄其中一個虛擬機進一步調查。訪問 <code>ansible-host</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt; vagrant ssh ansible-host</span></span>
<span class="line"><span>Activate the web console with: systemctl enable --now cockpit.socket</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Last login: Thu Nov 26 12:21:23 2020 from 10.0.2.2</span></span>
<span class="line"><span>[vagrant@ansible-host ~] uptime</span></span>
<span class="line"><span>16:46:42 up 1:24, 1 user, load average: 0.00, 0.01, 0.04</span></span></code></pre></div><p>最後，你可以使用 Ansible 模組來 ping 你創建的其他節點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[vagrant@ansible-host]$ ansible -i inventory-test.yaml \\</span></span>
<span class="line"><span>webservers -m ping -u vagrant</span></span>
<span class="line"><span>192.168.29.2 | SUCCESS =&amp;gt; {</span></span>
<span class="line"><span>  &quot;Ansible-facts&quot;: {</span></span>
<span class="line"><span>      &quot;Discovered_interpreter_python&quot;: &quot;/usr/libexec/platform-python&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;Changed&quot;: false;</span></span>
<span class="line"><span>    &quot;Ping&quot;: &quot;pong&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><h3 id="清理" tabindex="-1">清理 <a class="header-anchor" href="#清理" aria-label="Permalink to “清理”">​</a></h3><p>運行如下命令來清理環境：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vagrant destroy [vagrant machine name]</span></span></code></pre></div><p>你的輸出會像這樣：</p><p><img src="https://opensource.com/sites/default/files/uploads/cleanup.png" alt="Output from cleaning up environment" title="Output from cleaning up environment"></p><h3 id="有創意的學習" tabindex="-1">有創意的學習 <a class="header-anchor" href="#有創意的學習" aria-label="Permalink to “有創意的學習”">​</a></h3><p>在自己的實驗室裏利用自己的時間學習 Ansible 這樣的軟件是一個好習慣，但由於受到無法控制的限制，可能會很困難。</p><p>有時候，你需要發揮創意，找到另一種方法。在開源社區中，你可以選擇很多方案；我們選擇這些工具的主要原因之一是，它們是許多人常用和熟悉的。</p><p>另外，請注意，這些劇本並沒有按照我的要求進行優化。請隨時改進它們，並在評論中分享你的工作。</p><hr>`,25)),a("p",null,[s[32]||(s[32]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/12/ansible-lab"},{default:i(()=>[...s[31]||(s[31]=[n("https://opensource.com/article/20/12/ansible-lab",-1)])]),_:1})]),a("p",null,[s[37]||(s[37]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/mcalizo"},{default:i(()=>[...s[33]||(s[33]=[n("Mike Calizo",-1)])]),_:1}),s[38]||(s[38]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[34]||(s[34]=[n("lujun9972",-1)])]),_:1}),s[39]||(s[39]=n(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[35]||(s[35]=[n("wxy",-1)])]),_:1}),s[40]||(s[40]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[36]||(s[36]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[43]||(s[43]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[41]||(s[41]=[n("LCTT",-1)])]),_:1}),s[44]||(s[44]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[42]||(s[42]=[n("Linux中國",-1)])]),_:1}),s[45]||(s[45]=n(" 榮譽推出",-1))])])}const x=t(u,[["render",g]]);export{y as __pageData,x as default};
