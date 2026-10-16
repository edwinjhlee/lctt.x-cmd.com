import{_ as t,a0 as o,w as c,s as r,I as n,x as a,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"Ansible 劇本快速入門指南 | LCTT x X-CMD","titleTemplate":false,"description":"Ansible 劇本快速入門指南 | LCTT (202103) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Ansible 劇本快速入門指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Ansible 劇本快速入門指南 | LCTT (202103) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202103/20200129 Ansible Playbooks Quick Start Guide with Examples","title":"Ansible 劇本快速入門指南","tag":"202103","desc":""},"relativePath":"202103/20200129 Ansible Playbooks Quick Start Guide with Examples.md","filePath":"[post].md"}'),u={name:"202103/20200129 Ansible Playbooks Quick Start Guide with Examples.md"};function d(h,s,b,g,k,m){const p=o("Link");return c(),r("div",null,[s[22]||(s[22]=n("h1",{id:"ansible-劇本快速入門指南",tabindex:"-1"},[a("Ansible 劇本快速入門指南 "),n("a",{class:"header-anchor",href:"#ansible-劇本快速入門指南","aria-label":"Permalink to “Ansible 劇本快速入門指南”"},"​")],-1)),s[23]||(s[23]=n("p",null,"我們已經寫了兩篇關於 Ansible 的文章，這是第三篇。",-1)),s[24]||(s[24]=n("p",null,"如果你是 Ansible 新手，我建議你閲讀下面這兩篇文章，它會教你一些 Ansible 的基礎以及它是什麼。",-1)),n("ul",null,[n("li",null,[s[1]||(s[1]=a("第一篇: ",-1)),e(p,{href:"https://linux.cn/article-13142-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("Ansible 自動化工具安裝、配置和快速入門指南",-1)])]),_:1})]),n("li",null,[s[3]||(s[3]=a("第二篇: ",-1)),e(p,{href:"https://linux.cn/article-13163-1.html"},{default:l(()=>[...s[2]||(s[2]=[a("Ansible 點對點命令快速入門指南示例",-1)])]),_:1})])]),s[25]||(s[25]=i(`<p>如果你已經閲讀過了，那麼在閲讀本文時你才不會感到突兀。</p><h3 id="什麼是-ansible-劇本" tabindex="-1">什麼是 Ansible 劇本? <a class="header-anchor" href="#什麼是-ansible-劇本" aria-label="Permalink to “什麼是 Ansible 劇本?”">​</a></h3><p><ruby>劇本<rt>playbook</rt></ruby>比點對點命令模式更強大，而且完全不同。</p><p>它使用了 <code>/usr/bin/ansible-playbook</code> 二進制文件，並且提供豐富的特性使得複雜的任務變得更容易。</p><p>如果你想經常運行一個任務，劇本是非常有用的。此外，如果你想在服務器組上執行多個任務，它也是非常有用的。</p><p>劇本是由 YAML 語言編寫。YAML 代表一種標記語言，它比其它常見的數據格式（如 XML 或 JSON）更容易讀寫。</p><p>下面這張 Ansible 劇本流程圖將告訴你它的詳細結構。</p><p><img src="https://www.2daygeek.com/wp-content/uploads/2020/01/ansible-playbook-structure-flow-chart-explained.png" alt=""></p><h3 id="理解-ansible-劇本的術語" tabindex="-1">理解 Ansible 劇本的術語 <a class="header-anchor" href="#理解-ansible-劇本的術語" aria-label="Permalink to “理解 Ansible 劇本的術語”">​</a></h3><ul><li><ruby>控制節點<rt>Control node</rt></ruby>：Ansible 安裝的機器，它負責管理客户端節點。</li><li><ruby>受控節點<rt>Managed node</rt></ruby>：控制節點管理的主機列表。</li><li><ruby>劇本<rt>playbook</rt></ruby>：一個劇本文件包含一組自動化任務。</li><li><ruby>主機清單<rt>Inventory</rt></ruby>：這個文件包含有關管理的服務器的信息。</li><li><ruby>任務<rt>Task</rt></ruby>：每個劇本都有大量的任務。任務在指定機器上依次執行（一個主機或多個主機）。</li><li><ruby>模組<rt>Module</rt></ruby>： 模組是一個代碼單元，用於從客户端節點收集信息。</li><li><ruby>角色<rt>Role</rt></ruby>：角色是根據已知文件結構自動加載一些變量文件、任務和處理程序的方法。</li><li><ruby>動作<rt>Play</rt></ruby>：每個劇本含有大量的動作，一個動作從頭到尾執行一個特定的自動化。</li><li><ruby>處理程序<rt>Handler</rt></ruby>： 它可以幫助你減少在劇本中的重啓任務。處理程序任務列表實際上與常規任務沒有什麼不同，更改由通知程序通知。如果處理程序沒有收到任何通知，它將不起作用。</li></ul><h3 id="基本的劇本是怎樣的" tabindex="-1">基本的劇本是怎樣的？ <a class="header-anchor" href="#基本的劇本是怎樣的" aria-label="Permalink to “基本的劇本是怎樣的？”">​</a></h3><p>下面是一個劇本的模板：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---                                [YAML 文件應該以三個破折號開頭]</span></span>
<span class="line"><span>- name:                            [腳本描述]</span></span>
<span class="line"><span>  hosts: group                     [添加主機或主機組]</span></span>
<span class="line"><span>  become: true                     [如果你想以 root 身份運行任務，則標記它]</span></span>
<span class="line"><span>  tasks:                           [你想在任務下執行什麼動作]</span></span>
<span class="line"><span>    - name:                        [輸入模組選項]</span></span>
<span class="line"><span>      module:                      [輸入要執行的模組]</span></span>
<span class="line"><span>        module_options-1: value    [輸入模組選項]</span></span>
<span class="line"><span>        module_options-2: value</span></span>
<span class="line"><span>        .</span></span>
<span class="line"><span>        module_options-N: value</span></span></code></pre></div><h3 id="如何理解-ansible-的輸出" tabindex="-1">如何理解 Ansible 的輸出 <a class="header-anchor" href="#如何理解-ansible-的輸出" aria-label="Permalink to “如何理解 Ansible 的輸出”">​</a></h3><p>Ansible 劇本的輸出有四種顏色，下面是具體含義：</p><ul><li><strong>綠色</strong>：<code>ok</code> 代表成功，關聯的任務數據已經存在，並且已經根據需要進行了配置。</li><li><strong>黃色</strong>：<code>changed</code> 指定的數據已經根據任務的需要更新或修改。</li><li><strong>紅色</strong>：<code>FAILED</code> 如果在執行任務時出現任何問題，它將返回一個失敗消息，它可能是任何東西，你需要相應地修復它。</li><li><strong>白色</strong>：表示有多個參數。</li></ul><p>為此，創建一個劇本目錄，將它們都放在同一個地方。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkdir /etc/ansible/playbooks</span></span></code></pre></div><h3 id="劇本-1-在-rhel-系統上安裝-apache-web-服務器" tabindex="-1">劇本-1：在 RHEL 系統上安裝 Apache Web 服務器 <a class="header-anchor" href="#劇本-1-在-rhel-系統上安裝-apache-web-服務器" aria-label="Permalink to “劇本-1：在 RHEL 系統上安裝 Apache Web 服務器”">​</a></h3><p>這個示例劇本允許你在指定的目標機器上安裝 Apache Web 服務器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/ansible/playbooks/apache.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>- hosts: web</span></span>
<span class="line"><span>  become: yes</span></span>
<span class="line"><span>  name: &quot;Install and Configure Apache Web server&quot;</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: &quot;Install Apache Web Server&quot;</span></span>
<span class="line"><span>      yum:</span></span>
<span class="line"><span>        name: httpd</span></span>
<span class="line"><span>        state: latest</span></span>
<span class="line"><span>    - name: &quot;Ensure Apache Web Server is Running&quot;</span></span>
<span class="line"><span>      service:</span></span>
<span class="line"><span>        name: httpd</span></span>
<span class="line"><span>        state: started</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook apache1.yml</span></span></code></pre></div><p><img src="https://www.2daygeek.com/wp-content/uploads/2020/01/ansible-playbook-structure-flow-chart-explained.png" alt=""></p><h3 id="如何理解-ansible-中劇本的執行" tabindex="-1">如何理解 Ansible 中劇本的執行 <a class="header-anchor" href="#如何理解-ansible-中劇本的執行" aria-label="Permalink to “如何理解 Ansible 中劇本的執行”">​</a></h3><p>使用以下命令來查看語法錯誤。如果沒有發現錯誤，它只顯示劇本文件名。如果它檢測到任何錯誤，你將得到一個如下所示的錯誤，但內容可能根據你的輸入文件而有所不同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook apache1.yml --syntax-check</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ERROR! Syntax Error while loading YAML.</span></span>
<span class="line"><span>  found a tab character that violate indentation</span></span>
<span class="line"><span>The error appears to be in &#39;/etc/ansible/playbooks/apache1.yml&#39;: line 10, column 1, but may</span></span>
<span class="line"><span>be elsewhere in the file depending on the exact syntax problem.</span></span>
<span class="line"><span>The offending line appears to be:</span></span>
<span class="line"><span>        state: latest</span></span>
<span class="line"><span>^ here</span></span>
<span class="line"><span>There appears to be a tab character at the start of the line.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>YAML does not use tabs for formatting. Tabs should be replaced with spaces.</span></span>
<span class="line"><span>For example:</span></span>
<span class="line"><span>    - name: update tooling</span></span>
<span class="line"><span>      vars:</span></span>
<span class="line"><span>        version: 1.2.3</span></span>
<span class="line"><span># ^--- there is a tab there.</span></span>
<span class="line"><span>Should be written as:</span></span>
<span class="line"><span>    - name: update tooling</span></span>
<span class="line"><span>      vars:</span></span>
<span class="line"><span>        version: 1.2.3</span></span>
<span class="line"><span># ^--- all spaces here.</span></span></code></pre></div>`,26)),n("p",null,[s[5]||(s[5]=a("或者，你可以使用這個 URL ",-1)),e(p,{href:"http://www.yamllint.com/"},{default:l(()=>[...s[4]||(s[4]=[a("YAML Lint",-1)])]),_:1}),s[6]||(s[6]=a(" 在線檢查 Ansible 劇本內容。",-1))]),s[26]||(s[26]=i(`<p>執行以下命令進行“演練”。當你運行帶有 <code>--check</code> 選項的劇本時，它不會對遠程機器進行任何修改。相反，它會告訴你它將要做什麼改變但不是真的執行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook apache.yml --check</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY [Install and Configure Apache Webserver] ********************************************************************</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [Gathering Facts] *******************************************************************************************</span></span>
<span class="line"><span>ok: [node2.2g.lab]</span></span>
<span class="line"><span>ok: [node1.2g.lab]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [Install Apache Web Server] *********************************************************************************</span></span>
<span class="line"><span>changed: [node2.2g.lab]</span></span>
<span class="line"><span>changed: [node1.2g.lab]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [Ensure Apache Web Server is Running] ***********************************************************************</span></span>
<span class="line"><span>changed: [node1.2g.lab]</span></span>
<span class="line"><span>changed: [node2.2g.lab]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY RECAP *******************************************************************************************************</span></span>
<span class="line"><span>node1.2g.lab               : ok=3    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span>
<span class="line"><span>node2.2g.lab               : ok=3    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><p>如果你想要知道 ansible 劇本實現的詳細信息，使用 <code>-vv</code> 選項，它會展示如何收集這些信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook apache.yml --check -vv</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ansible-playbook 2.9.2</span></span>
<span class="line"><span>  config file = /etc/ansible/ansible.cfg</span></span>
<span class="line"><span>  configured module search path = [&#39;/home/daygeek/.ansible/plugins/modules&#39;, &#39;/usr/share/ansible/plugins/modules&#39;]</span></span>
<span class="line"><span>  ansible python module location = /usr/lib/python3.8/site-packages/ansible</span></span>
<span class="line"><span>  executable location = /usr/bin/ansible-playbook</span></span>
<span class="line"><span>  python version = 3.8.1 (default, Jan  8 2020, 23:09:20) [GCC 9.2.0]</span></span>
<span class="line"><span>Using /etc/ansible/ansible.cfg as config file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAYBOOK: apache.yml *****************************************************************************************************</span></span>
<span class="line"><span>1 plays in apache.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY [Install and Configure Apache Webserver] ****************************************************************************</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [Gathering Facts] ***************************************************************************************************</span></span>
<span class="line"><span>task path: /etc/ansible/playbooks/apache.yml:2</span></span>
<span class="line"><span>ok: [node2.2g.lab]</span></span>
<span class="line"><span>ok: [node1.2g.lab]</span></span>
<span class="line"><span>META: ran handlers</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [Install Apache Web Server] *****************************************************************************************</span></span>
<span class="line"><span>task path: /etc/ansible/playbooks/apache.yml:6</span></span>
<span class="line"><span>changed: [node2.2g.lab] =&gt; {&quot;changed&quot;: true, &quot;msg&quot;: &quot;Check mode: No changes made, but would have if not in check mod</span></span>
<span class="line"><span>e&quot;, &quot;rc&quot;: 0, &quot;results&quot;: [&quot;Installed: httpd&quot;]}</span></span>
<span class="line"><span>changed: [node1.2g.lab] =&gt; {&quot;changed&quot;: true, &quot;changes&quot;: {&quot;installed&quot;: [&quot;httpd&quot;], &quot;updated&quot;: []}, &quot;msg&quot;: &quot;&quot;, &quot;obsolet</span></span>
<span class="line"><span>es&quot;: {&quot;urw-fonts&quot;: {&quot;dist&quot;: &quot;noarch&quot;, &quot;repo&quot;: &quot;@anaconda&quot;, &quot;version&quot;: &quot;2.4-16.el7&quot;}}, &quot;rc&quot;: 0, &quot;results&quot;: []}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [Ensure Apache Web Server is Running] *******************************************************************************</span></span>
<span class="line"><span>task path: /etc/ansible/playbooks/apache.yml:10</span></span>
<span class="line"><span>changed: [node1.2g.lab] =&gt; {&quot;changed&quot;: true, &quot;msg&quot;: &quot;Service httpd not found on host, assuming it will exist on full run&quot;}</span></span>
<span class="line"><span>changed: [node2.2g.lab] =&gt; {&quot;changed&quot;: true, &quot;msg&quot;: &quot;Service httpd not found on host, assuming it will exist on full run&quot;}</span></span>
<span class="line"><span>META: ran handlers</span></span>
<span class="line"><span>META: ran handlers</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY RECAP ***************************************************************************************************************</span></span>
<span class="line"><span>node1.2g.lab               : ok=3    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span>
<span class="line"><span>node2.2g.lab               : ok=3    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><h3 id="劇本-2-在-ubuntu-系統上安裝-apache-web-服務器" tabindex="-1">劇本-2：在 Ubuntu 系統上安裝 Apache Web 服務器 <a class="header-anchor" href="#劇本-2-在-ubuntu-系統上安裝-apache-web-服務器" aria-label="Permalink to “劇本-2：在 Ubuntu 系統上安裝 Apache Web 服務器”">​</a></h3><p>這個示例劇本允許你在指定的目標節點上安裝 Apache Web 服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/ansible/playbooks/apache-ubuntu.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>- hosts: web</span></span>
<span class="line"><span>  become: yes</span></span>
<span class="line"><span>  name: &quot;Install and Configure Apache Web Server&quot;</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: &quot;Install Apache Web Server&quot;</span></span>
<span class="line"><span>      yum:</span></span>
<span class="line"><span>        name: apache2</span></span>
<span class="line"><span>        state: latest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - name: &quot;Start the Apache Web Server&quot;</span></span>
<span class="line"><span>      service:</span></span>
<span class="line"><span>        name: apaceh2</span></span>
<span class="line"><span>        state: started</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - name: &quot;Enable mod_rewrite module&quot;</span></span>
<span class="line"><span>      apache2_module:</span></span>
<span class="line"><span>        name: rewrite</span></span>
<span class="line"><span>        state: present</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      notify:</span></span>
<span class="line"><span>      - start apache</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  handlers:</span></span>
<span class="line"><span>    - name: &quot;Ensure Apache Web Server is Running&quot;</span></span>
<span class="line"><span>      service:</span></span>
<span class="line"><span>        name: apache2</span></span>
<span class="line"><span>        state: restarted</span></span>
<span class="line"><span>        enabled: yes</span></span></code></pre></div><h3 id="劇本-3-在-red-hat-系統上安裝軟件包列表" tabindex="-1">劇本-3：在 Red Hat 系統上安裝軟件包列表 <a class="header-anchor" href="#劇本-3-在-red-hat-系統上安裝軟件包列表" aria-label="Permalink to “劇本-3：在 Red Hat 系統上安裝軟件包列表”">​</a></h3><p>這個示例劇本允許你在指定的目標節點上安裝軟件包。</p><p><strong>方法-1：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/ansible/playbooks/packages-redhat.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>- hosts: web</span></span>
<span class="line"><span>  become: yes</span></span>
<span class="line"><span>  name: &quot;Install a List of Packages on Red Hat Based System&quot;</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: &quot;Installing a list of packages&quot;</span></span>
<span class="line"><span>      yum:</span></span>
<span class="line"><span>        name:</span></span>
<span class="line"><span>          - curl</span></span>
<span class="line"><span>          - httpd</span></span>
<span class="line"><span>          - nano</span></span>
<span class="line"><span>          - htop</span></span></code></pre></div><p><strong>方法-2：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/ansible/playbooks/packages-redhat-1.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>- hosts: web</span></span>
<span class="line"><span>  become: yes</span></span>
<span class="line"><span>  name: &quot;Install a List of Packages on Red Hat Based System&quot;</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: &quot;Installing a list of packages&quot;</span></span>
<span class="line"><span>      yum: name={{ item }} state=latest</span></span>
<span class="line"><span>      with_items:</span></span>
<span class="line"><span>        - curl</span></span>
<span class="line"><span>        - httpd</span></span>
<span class="line"><span>        - nano</span></span>
<span class="line"><span>        - htop</span></span></code></pre></div><p><strong>方法-3：使用數組變量</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/ansible/playbooks/packages-redhat-2.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>- hosts: web</span></span>
<span class="line"><span>  become: yes</span></span>
<span class="line"><span>  name: &quot;Install a List of Packages on Red Hat Based System&quot;</span></span>
<span class="line"><span>  vars:</span></span>
<span class="line"><span>     packages: [ &#39;curl&#39;, &#39;git&#39;, &#39;htop&#39; ]</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>     - name: Install a list of packages</span></span>
<span class="line"><span>       yum: name={{ item }} state=latest</span></span>
<span class="line"><span>       with_items: &quot;{{ packages }}&quot;</span></span></code></pre></div><h3 id="劇本-4-在-linux-系統上安裝更新" tabindex="-1">劇本-4：在 Linux 系統上安裝更新 <a class="header-anchor" href="#劇本-4-在-linux-系統上安裝更新" aria-label="Permalink to “劇本-4：在 Linux 系統上安裝更新”">​</a></h3><p>這個示例劇本允許你在基於 Red Hat 或 Debian 的 Linux 系統上安裝更新。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/ansible/playbooks/security-update.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>- hosts: web</span></span>
<span class="line"><span>  become: yes</span></span>
<span class="line"><span>  name: &quot;Install Security Update&quot;</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>    - name: &quot;Installing Security Update on Red Hat Based System&quot;</span></span>
<span class="line"><span>      yum: name=* update_cache=yes security=yes state=latest</span></span>
<span class="line"><span>      when: ansible_facts[&#39;distribution&#39;] == &quot;CentOS&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - name: &quot;Installing Security Update on Ubuntu Based System&quot;</span></span>
<span class="line"><span>      apt: upgrade=dist update_cache=yes</span></span>
<span class="line"><span>      when: ansible_facts[&#39;distribution&#39;] == &quot;Ubuntu&quot;</span></span></code></pre></div><hr>`,19)),n("p",null,[s[8]||(s[8]=a("via: ",-1)),e(p,{href:"https://www.2daygeek.com/ansible-playbooks-quick-start-guide-with-examples/"},{default:l(()=>[...s[7]||(s[7]=[a("https://www.2daygeek.com/ansible-playbooks-quick-start-guide-with-examples/",-1)])]),_:1})]),n("p",null,[s[13]||(s[13]=a("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/magesh/"},{default:l(()=>[...s[9]||(s[9]=[a("Magesh Maruthamuthu",-1)])]),_:1}),s[14]||(s[14]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[10]||(s[10]=[a("lujun9972",-1)])]),_:1}),s[15]||(s[15]=a(" 譯者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:l(()=>[...s[11]||(s[11]=[a("MjSeven",-1)])]),_:1}),s[16]||(s[16]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[12]||(s[12]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[19]||(s[19]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[17]||(s[17]=[a("LCTT",-1)])]),_:1}),s[20]||(s[20]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[18]||(s[18]=[a("Linux中國",-1)])]),_:1}),s[21]||(s[21]=a(" 榮譽推出",-1))])])}const A=t(u,[["render",d]]);export{q as __pageData,A as default};
