import{_ as i,a0 as l,w as p,s as u,ao as r,I as n,x as t,a1 as o,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"Ansible ：一個配置管理和IT自動化工具 | LCTT x X-CMD","titleTemplate":false,"description":"Ansible ：一個配置管理和IT自動化工具 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Ansible ：一個配置管理和IT自動化工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Ansible ：一個配置管理和IT自動化工具 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20140826 Linux Tutorial--Install Ansible Configuration Management And IT Automation Tool","title":"Ansible ：一個配置管理和IT自動化工具","tag":"201411","desc":""},"relativePath":"201411/20140826 Linux Tutorial--Install Ansible Configuration Management And IT Automation Tool.md","filePath":"[post].md"}'),d={name:"201411/20140826 Linux Tutorial--Install Ansible Configuration Management And IT Automation Tool.md"};function b(m,e,h,q,k,g){const s=l("Link");return p(),u("div",null,[e[36]||(e[36]=r(`<h1 id="ansible-一個配置管理和it自動化工具" tabindex="-1">Ansible ：一個配置管理和IT自動化工具 <a class="header-anchor" href="#ansible-一個配置管理和it自動化工具" aria-label="Permalink to “Ansible ：一個配置管理和IT自動化工具”">​</a></h1><p><img src="http://s0.cyberciti.org/uploads/cms/2014/08/ansible_core_circle.png" alt=""></p><p>今天我來談談 ansible，一個由 Python 編寫的強大的配置管理解決方案。儘管市面上已經有很多可供選擇的配置管理解決方案，但他們各有優劣，而 ansible 的特點就在於它的簡潔。讓 ansible 在主流的配置管理系統中與眾不同的一點便是，它並不需要你在想要配置的每個節點上安裝自己的組件。同時提供的一個優點在於，如果需要的話，你可以在不止一個地方控制你的整個基礎架構。最後一點是它的正確性，或許這裏有些爭議，但是我認為在大多數時候這仍然可以作為它的一個優點。説得足夠多了，讓我們來着手在 RHEL/CentOS 和基於 Debian/Ubuntu 的系統中安裝和配置 Ansible。</p><h3 id="準備工作" tabindex="-1">準備工作 <a class="header-anchor" href="#準備工作" aria-label="Permalink to “準備工作”">​</a></h3><ol><li>發行版：RHEL/CentOS/Debian/Ubuntu Linux</li><li>Jinja2：Python 的一個對設計師友好的現代模板語言</li><li>PyYAML：Python 的一個 YAML 編碼/反編碼函數庫</li><li>paramiko：純 Python 編寫的 SSHv2 協議函數庫 （譯者注：原文對函數庫名有拼寫錯誤）</li><li>httplib2：一個功能全面的 HTTP 客户端函數庫</li><li>本文中列出的絕大部分操作已經假設你將在 bash 或者其他任何現代的 shell 中以 root 用户執行。</li></ol><h3 id="ansible-如何工作" tabindex="-1">Ansible 如何工作 <a class="header-anchor" href="#ansible-如何工作" aria-label="Permalink to “Ansible 如何工作”">​</a></h3><p>Ansible 工具並不使用守護進程，它也不需要任何額外的自定義安全架構，因此它的部署可以説是十分容易。你需要的全部東西便是 SSH 客户端和服務器了。</p><pre><code> +-----------------+                    +---------------+
 |安裝了 Ansible 的|       SSH          | 文件服務器1   |
 |Linux/Unix 工作站|&lt;------------------&gt;| 資料庫服務器2 | 在本地或遠程
 +-----------------+       模組         | 代理服務器3   | 數據中心的
    192.168.1.100                       +---------------+ Unix/Linux 服務器
</code></pre><p>其中：</p><ol><li>192.168.1.100 - 在你本地的工作站或服務器上安裝 Ansible。</li><li>文件服務器1到代理服務器3 - 使用 192.168.1.100 和 Ansible 來自動管理所有的服務器。</li><li>SSH - 在 192.168.1.100 和本地/遠程的服務器之間設置 SSH 密鑰。</li></ol><h3 id="ansible-安裝教程" tabindex="-1">Ansible 安裝教程 <a class="header-anchor" href="#ansible-安裝教程" aria-label="Permalink to “Ansible 安裝教程”">​</a></h3>`,11)),n("p",null,[e[1]||(e[1]=t("ansible 的安裝輕而易舉，許多發行版的第三方軟件倉庫中都有現成的軟件包，可以直接安裝。其他簡單的安裝方法包括使用 pip 安裝它，或者從 github 裏獲取最新的版本。若想使用你的軟件包管理器安裝，在",-1)),o(s,{href:"http://www.cyberciti.biz/faq/fedora-sl-centos-redhat6-enable-epel-repo/"},{default:a(()=>[...e[0]||(e[0]=[t("基於 RHEL/CentOS Linux 的系統裏你很可能需要 EPEL 倉庫",-1)])]),_:1}),e[2]||(e[2]=t("。",-1))]),e[37]||(e[37]=n("h4",{id:"在基於-rhel-centos-linux-的系統中安裝-ansible",tabindex:"-1"},[t("在基於 RHEL/CentOS Linux 的系統中安裝 ansible "),n("a",{class:"header-anchor",href:"#在基於-rhel-centos-linux-的系統中安裝-ansible","aria-label":"Permalink to “在基於 RHEL/CentOS Linux 的系統中安裝 ansible”"},"​")],-1)),n("p",null,[e[4]||(e[4]=t("輸入如下 ",-1)),o(s,{href:"http://www.cyberciti.biz/faq/rhel-centos-fedora-linux-yum-command-howto/"},{default:a(()=>[...e[3]||(e[3]=[t("yum 命令",-1)])]),_:1}),e[5]||(e[5]=t(":",-1))]),e[38]||(e[38]=n("pre",null,[n("code",null,`$ sudo yum install ansible
`)],-1)),e[39]||(e[39]=n("h4",{id:"在基於-debian-ubuntu-linux-的系統中安裝-ansible",tabindex:"-1"},[t("在基於 Debian/Ubuntu Linux 的系統中安裝 ansible "),n("a",{class:"header-anchor",href:"#在基於-debian-ubuntu-linux-的系統中安裝-ansible","aria-label":"Permalink to “在基於 Debian/Ubuntu Linux 的系統中安裝 ansible”"},"​")],-1)),n("p",null,[e[7]||(e[7]=t("輸入如下 ",-1)),o(s,{href:"http://www.cyberciti.biz/tips/linux-debian-package-management-cheat-sheet.html"},{default:a(()=>[...e[6]||(e[6]=[t("apt-get 命令",-1)])]),_:1}),e[8]||(e[8]=t(":",-1))]),e[40]||(e[40]=n("pre",null,[n("code",null,`$ sudo apt-get install software-properties-common
$ sudo apt-add-repository ppa:ansible/ansible
$ sudo apt-get update
$ sudo apt-get install ansible
`)],-1)),e[41]||(e[41]=n("h4",{id:"使用-pip-安裝-ansible",tabindex:"-1"},[t("使用 pip 安裝 ansible "),n("a",{class:"header-anchor",href:"#使用-pip-安裝-ansible","aria-label":"Permalink to “使用 pip 安裝 ansible”"},"​")],-1)),n("p",null,[o(s,{href:"http://www.cyberciti.biz/faq/debian-ubuntu-centos-rhel-linux-install-pipclient/"},{default:a(()=>[...e[9]||(e[9]=[t("pip 命令是一個安裝和管理 Python 軟件包的工具",-1)])]),_:1}),e[10]||(e[10]=t("，比如它能管理 Python Package Index 中的那些軟件包。如下方式在 Linux 和類 Unix 系統中通用：",-1))]),e[42]||(e[42]=r(`<pre><code>$ sudo pip install ansible
</code></pre><h4 id="從源代碼安裝最新版本的-ansible" tabindex="-1">從源代碼安裝最新版本的 ansible <a class="header-anchor" href="#從源代碼安裝最新版本的-ansible" aria-label="Permalink to “從源代碼安裝最新版本的 ansible”">​</a></h4><p>你可以通過如下命令從 github 中安裝最新版本：</p><pre><code>$ cd ~
$ git clone git://github.com/ansible/ansible.git
$ cd ./ansible
$ source ./hacking/env-setup
</code></pre><p>當你從一個 git checkout 中運行 ansible 的時候，請記住你每次用它之前都需要設置你的環境，或者你可以把這個設置過程加入你的 bash rc 文件中：</p><pre><code># 加入 BASH RC
$ echo &quot;export ANSIBLE_HOSTS=~/ansible_hosts&quot; &gt;&gt; ~/.bashrc
$ echo &quot;source ~/ansible/hacking/env-setup&quot; &gt;&gt; ~/.bashrc
</code></pre><p>ansible 的 hosts 文件包括了一系列它能操作的主機。默認情況下 ansible 通過路徑 /etc/ansible/hosts 查找 hosts 文件，不過這個行為也是可以更改的，這樣當你想操作不止一個 ansible 或者針對不同的數據中心的不同客户操作的時候也是很方便的。你可以通過命令列參數 -i 指定 hosts 文件：</p><pre><code>$ ansible all -m shell -a &quot;hostname&quot; --ask-pass -i /etc/some/other/dir/ansible_hosts
</code></pre><p>不過我更傾向於使用一個環境變量，這可以在你想要通過 source 一個不同的文件來切換工作目標的時候起到作用。這裏的環境變量是 $ANSIBLE_HOSTS，可以這樣設置：</p><pre><code>$ export ANSIBLE_HOSTS=~/ansible_hosts
</code></pre><p>一旦所有需要的組件都已經安裝完畢，而且你也準備好了你的 hosts 文件，你就可以來試一試它了。為了快速測試，這裏我把 127.0.0.1 寫到了 ansible 的 hosts 文件裏：</p><pre><code>$ echo &quot;127.0.0.1&quot; &gt; ~/ansible_hosts
</code></pre><p>現在來測試一個簡單的 ping：</p><pre><code>$ ansible all -m ping
</code></pre><p>或者提示 ssh 密碼：</p><pre><code>$ ansible all -m ping --ask-pass
</code></pre>`,16)),n("p",null,[e[12]||(e[12]=t("我在剛開始的設置中遇到過幾次問題，因此這裏強烈推薦為 ansible 設置 SSH 公鑰認證。不過在剛剛的測試中我們使用了 --ask-pass，在一些機器上你會需要",-1)),o(s,{href:"http://www.cyberciti.biz/faq/noninteractive-shell-script-ssh-password-provider/"},{default:a(()=>[...e[11]||(e[11]=[t("安裝 sshpass",-1)])]),_:1}),e[13]||(e[13]=t(" 或者像這樣指定 -c paramiko：",-1))]),e[43]||(e[43]=n("pre",null,[n("code",null,`$ ansible all -m ping --ask-pass -c paramiko
`)],-1)),n("p",null,[e[15]||(e[15]=t("當然你也可以",-1)),o(s,{href:"http://www.cyberciti.biz/faq/noninteractive-shell-script-ssh-password-provider/"},{default:a(()=>[...e[14]||(e[14]=[t("安裝 sshpass",-1)])]),_:1}),e[16]||(e[16]=t("，然而 sshpass 並不總是在標準的倉庫中提供，因此 paramiko 可能更為簡單。",-1))]),e[44]||(e[44]=r(`<h3 id="設置-ssh-公鑰認證" tabindex="-1">設置 SSH 公鑰認證 <a class="header-anchor" href="#設置-ssh-公鑰認證" aria-label="Permalink to “設置 SSH 公鑰認證”">​</a></h3><p>於是我們有了一份配置，以及一些基礎的其他東西。現在讓我們來做一些實用的事情。ansible 的強大很大程度上體現在 playbooks 上，後者基本上就是一些寫好的 ansible 腳本（大部分來説），不過在製作一個 playbook 之前，我們將先從一些一句話腳本開始。現在讓我們創建和配置 SSH 公鑰認證，以便省去 -c 和 --ask-pass 選項：</p><pre><code>$ ssh-keygen -t rsa
</code></pre><p>樣例輸出：</p><pre><code>Generating public/private rsa key pair.
Enter file in which to save the key (/home/mike/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/mike/.ssh/id_rsa.
Your public key has been saved in /home/mike/.ssh/id_rsa.pub.
The key fingerprint is:
94:a0:19:02:ba:25:23:7f:ee:6c:fb:e8:38:b4:f2:42 mike@ultrabook.linuxdork.com
The key&#39;s randomart image is:
+--[ RSA 2048]----+
|... . .          |
|.  . + . .       |
|= . o   o        |
|.*     .         |
|. . .   S        |
| E.o             |
|.. ..            |
|o o+..           |
| +o+*o.          |
+-----------------+
</code></pre><p>現在顯然有很多種方式來把它放到遠程主機上應該的位置。不過既然我們正在使用 ansible，就用它來完成這個操作吧：</p><pre><code>$ ansible all -m copy -a &quot;src=/home/mike/.ssh/id_rsa.pub dest=/tmp/id_rsa.pub&quot; --ask-pass -c paramiko
</code></pre><p>樣例輸出：</p><pre><code>SSH password:
127.0.0.1 | success &gt;&gt; {
    &quot;changed&quot;: true,
    &quot;dest&quot;: &quot;/tmp/id_rsa.pub&quot;,
    &quot;gid&quot;: 100,
    &quot;group&quot;: &quot;users&quot;,
    &quot;md5sum&quot;: &quot;bafd3fce6b8a33cf1de415af432774b4&quot;,
    &quot;mode&quot;: &quot;0644&quot;,
    &quot;owner&quot;: &quot;mike&quot;,
    &quot;size&quot;: 410,
    &quot;src&quot;: &quot;/home/mike/.ansible/tmp/ansible-tmp-1407008170.46-208759459189201/source&quot;,
    &quot;state&quot;: &quot;file&quot;,
    &quot;uid&quot;: 1000
}
</code></pre><p>下一步，把公鑰文件添加到遠程服務器裏。輸入：</p><pre><code>$ ansible all -m shell -a &quot;cat /tmp/id_rsa.pub &gt;&gt; /root/.ssh/authorized_keys&quot; --ask-pass -c paramiko
</code></pre><p>樣例輸出：</p><pre><code>SSH password:
127.0.0.1 | FAILED | rc=1 &gt;&gt;
/bin/sh: /root/.ssh/authorized_keys: Permission denied
</code></pre><p>矮油，我們需要用 root 來執行這個命令，所以還是加上一個 -u 參數吧：</p><pre><code>$ ansible all -m shell -a &quot;cat /tmp/id_rsa.pub &gt;&gt; /root/.ssh/authorized_keys&quot; --ask-pass -c paramiko -u root
</code></pre><p>樣例輸出：</p><pre><code>SSH password:
127.0.0.1 | success | rc=0 &gt;&gt;
</code></pre><p>請注意，我剛才這是想要演示通過 ansible 來傳輸文件的操作。事實上 ansible 有一個更加方便的內置 SSH 密鑰管理支持：</p><pre>$ ansible all -m authorized_key -a &quot;user=mike key=&#39;{{ lookup(&#39;file&#39;, &#39;/home/mike/.ssh/id_rsa.pub&#39;) }}&#39; path=/home/mike/.ssh/authorized_keys manage_dir=no&quot; --ask-pass -c paramiko
</pre><p>樣例輸出：</p><pre><code>SSH password:
127.0.0.1 | success &gt;&gt; {
    &quot;changed&quot;: true,
    &quot;gid&quot;: 100,
    &quot;group&quot;: &quot;users&quot;,
    &quot;key&quot;: &quot;ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCq+Z8/usprXk0aCAPyP0TGylm2MKbmEsHePUOd7p5DO1QQTHak+9gwdoJJavy0yoUdi+C+autKjvuuS+vGb8+I+8mFNu5CvKiZzIpMjZvrZMhHRdNud7GuEanusTEJfi1pUd3NA2iXhl4a6S9a/4G2mKyf7QQSzI4Z5ddudUXd9yHmo9Yt48/ASOJLHIcYfSsswOm8ux1UnyeHqgpdIVONVFsKKuSNSvZBVl3bXzhkhjxz8RMiBGIubJDBuKwZqNSJkOlPWYN76btxMCDVm07O7vNChpf0cmWEfM3pXKPBq/UBxyG2MgoCGkIRGOtJ8UjC/daadBUuxg92/u01VNEB mike@ultrabook.linuxdork.com&quot;,
    &quot;key_options&quot;: null,
    &quot;keyfile&quot;: &quot;/home/mike/.ssh/authorized_keys&quot;,
    &quot;manage_dir&quot;: false,
    &quot;mode&quot;: &quot;0600&quot;,
    &quot;owner&quot;: &quot;mike&quot;,
    &quot;path&quot;: &quot;/home/mike/.ssh/authorized_keys&quot;,
    &quot;size&quot;: 410,
    &quot;state&quot;: &quot;file&quot;,
    &quot;uid&quot;: 1000,
    &quot;unique&quot;: false,
    &quot;user&quot;: &quot;mike&quot;
}
</code></pre><p>現在這些密鑰已經設置好了。我們來試着隨便跑一個命令，比如 hostname，希望我們不會被提示要輸入密碼</p><pre><code>$ ansible all -m shell -a &quot;hostname&quot; -u root
</code></pre><p>樣例輸出：</p><pre><code>127.0.0.1 | success | rc=0 &gt;&gt;
</code></pre><p>成功！！！現在我們可以用 root 來執行命令，並且不會被輸入密碼的提示干擾了。我們現在可以輕易地配置任何在 ansible hosts 文件中的主機了。讓我們把 /tmp 中的公鑰文件刪除：</p><pre><code>$ ansible all -m file -a &quot;dest=/tmp/id_rsa.pub state=absent&quot; -u root
</code></pre><p>樣例輸出：</p><pre><code>127.0.0.1 | success &gt;&gt; {
    &quot;changed&quot;: true,
    &quot;path&quot;: &quot;/tmp/id_rsa.pub&quot;,
    &quot;state&quot;: &quot;absent&quot;
}
</code></pre><p>下面我們來做一些更復雜的事情，我要確定一些軟件包已經安裝了，並且已經是最新的版本：</p><pre><code>$ ansible all -m zypper -a &quot;name=apache2 state=latest&quot; -u root
</code></pre><p>樣例輸出：</p><pre><code>127.0.0.1 | success &gt;&gt; {
    &quot;changed&quot;: false,
    &quot;name&quot;: &quot;apache2&quot;,
    &quot;state&quot;: &quot;latest&quot;
}
</code></pre><p>很好，我們剛才放在 /tmp 中的公鑰文件已經消失了，而且我們已經安裝好了最新版的 apache。下面我們來看看前面命令中的 -m zypper，一個讓 ansible 非常靈活，並且給了 playbooks 更多能力的功能。如果你不使用 openSuse 或者 Suse enterprise 你可能還不熟悉 zypper, 它基本上就是 suse 世界中相當於 yum 的存在。在上面所有的例子中，我的 hosts 文件中都只有一台機器。除了最後一個命令外，其他所有命令都應該在任何標準的 *nix 系統和標準的 ssh 配置中使用，這造成了一個問題。如果我們想要同時管理多種不同的機器呢？這便是 playbooks 和 ansible 的可配置性閃閃發光的地方了。首先我們來少許修改一下我們的 hosts 文件：</p><pre><code>$ cat ~/ansible_hosts
</code></pre><p>樣例輸出：</p><pre><code>[RHELBased]
10.50.1.33
10.50.1.47

[SUSEBased]
127.0.0.1
</code></pre><p>首先，我們創建了一些分組的服務器，並且給了他們一些有意義的標籤。然後我們來創建一個為不同類型的服務器執行不同操作的 playbook。你可能已經發現這個 yaml 的數據結構和我們之前運行的命令列語句中的相似性了。簡單來説，-m 是一個模組，而 -a 用來提供模組參數。在 YAML 表示中你可以先指定模組，然後插入一個冒號 :，最後指定參數。</p><pre><code>---
- hosts: SUSEBased
  remote_user: root
  tasks:
    - zypper: name=apache2 state=latest
- hosts: RHELBased
  remote_user: root
  tasks:
    - yum: name=httpd state=latest
</code></pre><p>現在我們有一個簡單的 playbook 了，我們可以這樣運行它：</p><pre><code>$ ansible-playbook testPlaybook.yaml -f 10
</code></pre><p>樣例輸出：</p><pre><code>PLAY [SUSEBased] **************************************************************

GATHERING FACTS ***************************************************************
ok: [127.0.0.1]

TASK: [zypper name=apache2 state=latest] **************************************
ok: [127.0.0.1]

PLAY [RHELBased] **************************************************************

GATHERING FACTS ***************************************************************
ok: [10.50.1.33]
ok: [10.50.1.47]

TASK: [yum name=httpd state=latest] *******************************************
changed: [10.50.1.33]
changed: [10.50.1.47]

PLAY RECAP ********************************************************************
10.50.1.33                 : ok=2    changed=1    unreachable=0    failed=0
10.50.1.47                 : ok=2    changed=1    unreachable=0    failed=0
127.0.0.1                  : ok=2    changed=0    unreachable=0    failed=0
</code></pre><p>注意，你會看到 ansible 聯繫到的每一台機器的輸出。-f 參數讓 ansible 在多台主機上同時運行指令。除了指定全部主機，或者一個主機分組的名字以外，你還可以把導入 ssh 公鑰的操作從命令列裏轉移到 playbook 中，這將在設置新主機的時候提供很大的方便，甚至讓新主機直接可以運行一個 playbook。為了演示，我們把我們之前的公鑰例子放進一個 playbook 裏：</p><pre>---
- hosts: SUSEBased
    remote_user: mike
    sudo: yes
    tasks:
    - authorized_key: user=root key=&quot;{{ lookup(&#39;file&#39;, &#39;/home/mike/.ssh/id_rsa.pub&#39;) }}&quot; path=/root/.ssh/authorized_keys manage_dir=no
- hosts: RHELBased
    remote_user: mdonlon
    sudo: yes
    tasks:
    - authorized_key: user=root key=&quot;{{ lookup(&#39;file&#39;, &#39;/home/mike/.ssh/id_rsa.pub&#39;) }}&quot; path=/root/.ssh/authorized_keys manage_dir=no
</pre><p>除此之外還有很多可以做的事情，比如在啓動的時候把公鑰配置好，或者引入其他的流程來讓你按需配置一些機器。不過只要 SSH 被配置成接受密碼登陸，這些幾乎可以用在所有的流程中。在你準備開始寫太多 playbook 之前，另一個值得考慮的事情是，代碼管理可以有效節省你的時間。機器需要不斷變化，然而你並不需要在每次機器發生變化時都重新寫一個 playbook，只需要更新相關的部分並提交這些修改。與此相關的另一個好處是，如同我之前所述，你可以從不同的地方管理你的整個基礎結構。你只需要將你的 playbook 倉庫 git clone 到新的機器上，就完成了管理所有東西的全部設置流程。</p><h4 id="現實中的-ansible-例子" tabindex="-1">現實中的 ansible 例子 <a class="header-anchor" href="#現實中的-ansible-例子" aria-label="Permalink to “現實中的 ansible 例子”">​</a></h4><p>我知道很多用户經常使用 pastebin 這樣的服務，以及很多公司基於顯而易見的理由配置了他們內部使用的類似東西。最近，我遇到了一個叫做 showterm 的程序，巧合之下我被一個客户要求配置它用於內部使用。這裏我不打算贅述這個應用程序的細節，不過如果你感興趣的話，你可以使用 Google 搜索 showterm。作為一個合理的現實中的例子，我將會試圖配置一個 showterm 服務器，並且配置使用它所需要的客户端應用程序。在這個過程中我們還需要一個數據庫服務器。現在我們從配置客户端開始：</p><pre><code>---
- hosts: showtermClients
  remote_user: root
  tasks:
    - yum: name=rubygems state=latest
    - yum: name=ruby-devel state=latest
    - yum: name=gcc state=latest
    - gem: name=showterm state=latest user_install=no
</code></pre><p>這部分很簡單。下面是主服務器：</p><pre>---
- hosts: showtermServers
    remote_user: root
    tasks:
    - name: ensure packages are installed
        yum: name={{item}} state=latest
        with_items:
        - postgresql
        - postgresql-server
        - postgresql-devel
        - python-psycopg2
        - git
        - ruby21
        - ruby21-passenger
    - name: showterm server from github
        git: repo=https://github.com/ConradIrwin/showterm.io dest=/root/showterm
    - name: Initdb
        command: service postgresql initdb
                creates=/var/lib/pgsql/data/postgresql.conf

    - name: Start PostgreSQL and enable at boot
        service: name=postgresql
                enabled=yes
                state=started
    - gem: name=pg state=latest user_install=no
    handlers:
    - name: restart postgresql
        service: name=postgresql state=restarted

- hosts: showtermServers
    remote_user: root
    sudo: yes
    sudo_user: postgres
    vars:
    dbname: showterm
    dbuser: showterm
    dbpassword: showtermpassword
    tasks:
    - name: create db
        postgresql_db: name={{dbname}}

    - name: create user with ALL priv
        postgresql_user: db={{dbname}} name={{dbuser}} password={{dbpassword}} priv=ALL
- hosts: showtermServers
    remote_user: root
    tasks:
    - name: database.yml
        template: src=database.yml dest=/root/showterm/config/database.yml
- hosts: showtermServers
    remote_user: root
    tasks:
    - name: run bundle install
        shell: bundle install
        args:
        chdir: /root/showterm
- hosts: showtermServers
    remote_user: root
    tasks:
    - name: run rake db tasks
        shell: &#39;bundle exec rake db:create db:migrate db:seed&#39;
        args:
        chdir: /root/showterm
- hosts: showtermServers
    remote_user: root
    tasks:
    - name: apache config
        template: src=showterm.conf dest=/etc/httpd/conf.d/showterm.conf
</pre><p>還湊合。請注意，從某種意義上來説這是一個任意選擇的程序，然而我們現在已經可以持續地在任意數量的機器上部署它了，這便是配置管理的好處。此外，在大多數情況下這裏的定義語法幾乎是不言而喻的，wiki 頁面也就不需要加入太多細節了。當然在我的觀點裏，一個有太多細節的 wiki 頁面絕不會是一件壞事。</p><h3 id="擴展配置" tabindex="-1">擴展配置 <a class="header-anchor" href="#擴展配置" aria-label="Permalink to “擴展配置”">​</a></h3><p>我們並沒有涉及到這裏所有的細節。Ansible 有許多選項可以用來配置你的系統。你可以在你的 hosts 文件中內嵌變量，而 ansible 將會把它們應用到遠程節點。如：</p><pre><code>[RHELBased]
10.50.1.33  http_port=443
10.50.1.47  http_port=80  ansible_ssh_user=mdonlon

[SUSEBased]
127.0.0.1  http_port=443
</code></pre><p>儘管這對於快速配置來説已經非常方便，你還可以將變量分成存放在 yaml 格式的多個文件中。在你的 hosts 文件路徑裏，你可以創建兩個子目錄 group_vars 和 host_vars。在這些路徑裏放置的任何文件，只要能對得上一個主機分組的名字，或者你的 hosts 文件中的一個主機名，它們都會在運行時被插入進來。所以前面的一個例子將會變成這樣：</p><pre><code>ultrabook:/etc/ansible # pwd
/etc/ansible
ultrabook:/etc/ansible # tree
.
├── group_vars
│   ├── RHELBased
│   └── SUSEBased
├── hosts
└── host_vars
├── 10.50.1.33
└── 10.50.1.47
</code></pre><hr><pre><code>2 directories, 5 files
ultrabook:/etc/ansible # cat hosts
[RHELBased]
10.50.1.33
10.50.1.47
</code></pre><hr><pre><code>[SUSEBased]
127.0.0.1
ultrabook:/etc/ansible # cat group_vars/RHELBased
ultrabook:/etc/ansible # cat group_vars/SUSEBased
---
http_port: 443
ultrabook:/etc/ansible # cat host_vars/10.50.1.33
---
http_port: 443
ultrabook:/etc/ansible # cat host_vars/10.50.1.47
---
http_port:80
ansible_ssh_user: mdonlon
</code></pre><h3 id="改善-playbooks" tabindex="-1">改善 Playbooks <a class="header-anchor" href="#改善-playbooks" aria-label="Permalink to “改善 Playbooks”">​</a></h3><p>組織 playbooks 也已經有很多種現成的方式。在前面的例子中我們用了一個單獨的文件，因此這方面被大幅地簡化了。組織這些文件的一個常用方式是創建角色。簡單來説，你將一個主文件加載為你的 playbook，而它將會從其它文件中導入所有的數據，這些其他的文件便是角色。舉例來説，如果你有了一個 wordpress 網站，你需要一個 web 前端，和一個數據庫。web 前端將包括一個 web 服務器，應用程序代碼，以及任何需要的模組。資料庫有時候運行在同一台主機上，有時候運行在遠程的主機上，這時候角色就可以派上用場了。你創建一個目錄，並對每個角色創建對應的小 playbook。在這個例子中我們需要一個 apache 角色，mysql 角色，wordpress 角色，mod_php，以及 php 角色。最大的好處是，並不是每個角色都必須被應用到同一台機器上。在這個例子中，mysql 可以被應用到一台單獨的機器。這同樣為代碼重用提供了可能，比如你的 apache 角色還可以被用在 python 和其他相似的 php 應用程序中。展示這些已經有些超出了本文的範疇，而且做一件事總是有很多不同的方式，我建議搜索一些 ansible 的 playbook 例子。有很多人在 github 上貢獻代碼，當然還有其他一些網站。</p><h3 id="模組" tabindex="-1">模組 <a class="header-anchor" href="#模組" aria-label="Permalink to “模組”">​</a></h3><p>在 ansible 中，對於所有完成的工作，幕後的工作都是由模組主導的。Ansible 有一個非常豐富的內置模組倉庫，其中包括軟件包安裝，文件傳輸，以及我們在本文中做的所有事情。但是對一部分人來説，這些並不能滿足他們的配置需求，ansible 也提供了方法讓你添加自己的模組。Ansible 的 API 有一個非常棒的事情是，它並沒有限制模組也必須用編寫它的語言 Python 來編寫，也就是説，你可以用任何語言來編寫模組。Ansible 模組通過傳遞 JSON 數據來工作，因此你只需要用想用的語言生成一段 JSON 數據。我很確定任何腳本語言都可以做到這一點，因此你現在就可以開始寫點什麼了。在 Ansible 的網站上有很多的文檔，包括模組的接口是如何工作的，以及 Github 上也有很多模組的例子。注意一些小眾的語言可能沒有很好的支持，不過那隻可能是因為沒有多少人在用這種語言貢獻代碼。試着寫點什麼，然後把你的結果發佈出來吧！</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>總的來説，雖然在配置管理方面已經有很多解決方案，我希望本文能顯示出 ansible 簡單的設置過程，在我看來這是它最重要的一個要點。請注意，因為我試圖展示做一件事的不同方式，所以並不是前文中所有的例子都是適用於你的個別環境或者對於普遍情況的最佳實踐。這裏有一些鏈接能讓你對 ansible 的瞭解進入下一個層次：</p>`,67)),n("ul",null,[n("li",null,[o(s,{href:"http://www.ansible.com/"},{default:a(()=>[...e[17]||(e[17]=[t("Ansible 項目",-1)])]),_:1}),e[18]||(e[18]=t("主頁.",-1))]),n("li",null,[o(s,{href:"http://docs.ansible.com/"},{default:a(()=>[...e[19]||(e[19]=[t("Ansible 項目文檔",-1)])]),_:1}),e[20]||(e[20]=t(".",-1))]),n("li",null,[o(s,{href:"http://rosstuck.com/multistage-environments-with-ansible/"},{default:a(()=>[...e[21]||(e[21]=[t("多級環境與 Ansible",-1)])]),_:1}),e[22]||(e[22]=t(".",-1))])]),e[45]||(e[45]=n("hr",null,null,-1)),n("p",null,[e[24]||(e[24]=t("via: ",-1)),o(s,{href:"http://www.cyberciti.biz/python-tutorials/linux-tutorial-install-ansible-configuration-management-and-it-automation-tool/"},{default:a(()=>[...e[23]||(e[23]=[t("http://www.cyberciti.biz/python-tutorials/linux-tutorial-install-ansible-configuration-management-and-it-automation-tool/",-1)])]),_:1})]),n("p",null,[e[28]||(e[28]=t("作者：",-1)),o(s,{href:"http://www.cyberciti.biz/tips/about-us"},{default:a(()=>[...e[25]||(e[25]=[t("Nix Craft",-1)])]),_:1}),e[29]||(e[29]=t(" 譯者：",-1)),o(s,{href:"https://github.com/felixonmars"},{default:a(()=>[...e[26]||(e[26]=[t("felixonmars",-1)])]),_:1}),e[30]||(e[30]=t(" 校對：",-1)),o(s,{href:"https://github.com/wxy"},{default:a(()=>[...e[27]||(e[27]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[33]||(e[33]=t("本文由 ",-1)),o(s,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[31]||(e[31]=[t("LCTT",-1)])]),_:1}),e[34]||(e[34]=t(" 原創翻譯，",-1)),o(s,{href:"http://linux.cn/"},{default:a(()=>[...e[32]||(e[32]=[t("Linux中國",-1)])]),_:1}),e[35]||(e[35]=t(" 榮譽推出",-1))])])}const S=i(d,[["render",b]]);export{f as __pageData,S as default};
