import{_ as t,a0 as o,w as c,s as r,I as n,x as a,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"Ansible 剧本快速入门指南 | LCTT x X-CMD","titleTemplate":false,"description":"Ansible 剧本快速入门指南 | LCTT (202103) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Ansible 剧本快速入门指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Ansible 剧本快速入门指南 | LCTT (202103) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202103/20200129 Ansible Playbooks Quick Start Guide with Examples","title":"Ansible 剧本快速入门指南","tag":"202103","desc":""},"relativePath":"202103/20200129 Ansible Playbooks Quick Start Guide with Examples.md","filePath":"[post].md"}'),u={name:"202103/20200129 Ansible Playbooks Quick Start Guide with Examples.md"};function d(h,s,b,g,k,m){const p=o("Link");return c(),r("div",null,[s[22]||(s[22]=n("h1",{id:"ansible-剧本快速入门指南",tabindex:"-1"},[a("Ansible 剧本快速入门指南 "),n("a",{class:"header-anchor",href:"#ansible-剧本快速入门指南","aria-label":"Permalink to “Ansible 剧本快速入门指南”"},"​")],-1)),s[23]||(s[23]=n("p",null,"我们已经写了两篇关于 Ansible 的文章，这是第三篇。",-1)),s[24]||(s[24]=n("p",null,"如果你是 Ansible 新手，我建议你阅读下面这两篇文章，它会教你一些 Ansible 的基础以及它是什么。",-1)),n("ul",null,[n("li",null,[s[1]||(s[1]=a("第一篇: ",-1)),e(p,{href:"https://linux.cn/article-13142-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("Ansible 自动化工具安装、配置和快速入门指南",-1)])]),_:1})]),n("li",null,[s[3]||(s[3]=a("第二篇: ",-1)),e(p,{href:"https://linux.cn/article-13163-1.html"},{default:l(()=>[...s[2]||(s[2]=[a("Ansible 点对点命令快速入门指南示例",-1)])]),_:1})])]),s[25]||(s[25]=i(`<p>如果你已经阅读过了，那么在阅读本文时你才不会感到突兀。</p><h3 id="什么是-ansible-剧本" tabindex="-1">什么是 Ansible 剧本? <a class="header-anchor" href="#什么是-ansible-剧本" aria-label="Permalink to “什么是 Ansible 剧本?”">​</a></h3><p><ruby>剧本<rt>playbook</rt></ruby>比点对点命令模式更强大，而且完全不同。</p><p>它使用了 <code>/usr/bin/ansible-playbook</code> 二进制文件，并且提供丰富的特性使得复杂的任务变得更容易。</p><p>如果你想经常运行一个任务，剧本是非常有用的。此外，如果你想在服务器组上执行多个任务，它也是非常有用的。</p><p>剧本是由 YAML 语言编写。YAML 代表一种标记语言，它比其它常见的数据格式（如 XML 或 JSON）更容易读写。</p><p>下面这张 Ansible 剧本流程图将告诉你它的详细结构。</p><p><img src="https://www.2daygeek.com/wp-content/uploads/2020/01/ansible-playbook-structure-flow-chart-explained.png" alt=""></p><h3 id="理解-ansible-剧本的术语" tabindex="-1">理解 Ansible 剧本的术语 <a class="header-anchor" href="#理解-ansible-剧本的术语" aria-label="Permalink to “理解 Ansible 剧本的术语”">​</a></h3><ul><li><ruby>控制节点<rt>Control node</rt></ruby>：Ansible 安装的机器，它负责管理客户端节点。</li><li><ruby>受控节点<rt>Managed node</rt></ruby>：控制节点管理的主机列表。</li><li><ruby>剧本<rt>playbook</rt></ruby>：一个剧本文件包含一组自动化任务。</li><li><ruby>主机清单<rt>Inventory</rt></ruby>：这个文件包含有关管理的服务器的信息。</li><li><ruby>任务<rt>Task</rt></ruby>：每个剧本都有大量的任务。任务在指定机器上依次执行（一个主机或多个主机）。</li><li><ruby>模块<rt>Module</rt></ruby>： 模块是一个代码单元，用于从客户端节点收集信息。</li><li><ruby>角色<rt>Role</rt></ruby>：角色是根据已知文件结构自动加载一些变量文件、任务和处理程序的方法。</li><li><ruby>动作<rt>Play</rt></ruby>：每个剧本含有大量的动作，一个动作从头到尾执行一个特定的自动化。</li><li><ruby>处理程序<rt>Handler</rt></ruby>： 它可以帮助你减少在剧本中的重启任务。处理程序任务列表实际上与常规任务没有什么不同，更改由通知程序通知。如果处理程序没有收到任何通知，它将不起作用。</li></ul><h3 id="基本的剧本是怎样的" tabindex="-1">基本的剧本是怎样的？ <a class="header-anchor" href="#基本的剧本是怎样的" aria-label="Permalink to “基本的剧本是怎样的？”">​</a></h3><p>下面是一个剧本的模板：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---                                [YAML 文件应该以三个破折号开头]</span></span>
<span class="line"><span>- name:                            [脚本描述]</span></span>
<span class="line"><span>  hosts: group                     [添加主机或主机组]</span></span>
<span class="line"><span>  become: true                     [如果你想以 root 身份运行任务，则标记它]</span></span>
<span class="line"><span>  tasks:                           [你想在任务下执行什么动作]</span></span>
<span class="line"><span>    - name:                        [输入模块选项]</span></span>
<span class="line"><span>      module:                      [输入要执行的模块]</span></span>
<span class="line"><span>        module_options-1: value    [输入模块选项]</span></span>
<span class="line"><span>        module_options-2: value</span></span>
<span class="line"><span>        .</span></span>
<span class="line"><span>        module_options-N: value</span></span></code></pre></div><h3 id="如何理解-ansible-的输出" tabindex="-1">如何理解 Ansible 的输出 <a class="header-anchor" href="#如何理解-ansible-的输出" aria-label="Permalink to “如何理解 Ansible 的输出”">​</a></h3><p>Ansible 剧本的输出有四种颜色，下面是具体含义：</p><ul><li><strong>绿色</strong>：<code>ok</code> 代表成功，关联的任务数据已经存在，并且已经根据需要进行了配置。</li><li><strong>黄色</strong>：<code>changed</code> 指定的数据已经根据任务的需要更新或修改。</li><li><strong>红色</strong>：<code>FAILED</code> 如果在执行任务时出现任何问题，它将返回一个失败消息，它可能是任何东西，你需要相应地修复它。</li><li><strong>白色</strong>：表示有多个参数。</li></ul><p>为此，创建一个剧本目录，将它们都放在同一个地方。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkdir /etc/ansible/playbooks</span></span></code></pre></div><h3 id="剧本-1-在-rhel-系统上安装-apache-web-服务器" tabindex="-1">剧本-1：在 RHEL 系统上安装 Apache Web 服务器 <a class="header-anchor" href="#剧本-1-在-rhel-系统上安装-apache-web-服务器" aria-label="Permalink to “剧本-1：在 RHEL 系统上安装 Apache Web 服务器”">​</a></h3><p>这个示例剧本允许你在指定的目标机器上安装 Apache Web 服务器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/ansible/playbooks/apache.yml</span></span>
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
<span class="line"><span>        state: started</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook apache1.yml</span></span></code></pre></div><p><img src="https://www.2daygeek.com/wp-content/uploads/2020/01/ansible-playbook-structure-flow-chart-explained.png" alt=""></p><h3 id="如何理解-ansible-中剧本的执行" tabindex="-1">如何理解 Ansible 中剧本的执行 <a class="header-anchor" href="#如何理解-ansible-中剧本的执行" aria-label="Permalink to “如何理解 Ansible 中剧本的执行”">​</a></h3><p>使用以下命令来查看语法错误。如果没有发现错误，它只显示剧本文件名。如果它检测到任何错误，你将得到一个如下所示的错误，但内容可能根据你的输入文件而有所不同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook apache1.yml --syntax-check</span></span>
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
<span class="line"><span># ^--- all spaces here.</span></span></code></pre></div>`,26)),n("p",null,[s[5]||(s[5]=a("或者，你可以使用这个 URL ",-1)),e(p,{href:"http://www.yamllint.com/"},{default:l(()=>[...s[4]||(s[4]=[a("YAML Lint",-1)])]),_:1}),s[6]||(s[6]=a(" 在线检查 Ansible 剧本内容。",-1))]),s[26]||(s[26]=i(`<p>执行以下命令进行“演练”。当你运行带有 <code>--check</code> 选项的剧本时，它不会对远程机器进行任何修改。相反，它会告诉你它将要做什么改变但不是真的执行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook apache.yml --check</span></span>
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
<span class="line"><span>node2.2g.lab               : ok=3    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><p>如果你想要知道 ansible 剧本实现的详细信息，使用 <code>-vv</code> 选项，它会展示如何收集这些信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook apache.yml --check -vv</span></span>
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
<span class="line"><span>node2.2g.lab               : ok=3    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><h3 id="剧本-2-在-ubuntu-系统上安装-apache-web-服务器" tabindex="-1">剧本-2：在 Ubuntu 系统上安装 Apache Web 服务器 <a class="header-anchor" href="#剧本-2-在-ubuntu-系统上安装-apache-web-服务器" aria-label="Permalink to “剧本-2：在 Ubuntu 系统上安装 Apache Web 服务器”">​</a></h3><p>这个示例剧本允许你在指定的目标节点上安装 Apache Web 服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/ansible/playbooks/apache-ubuntu.yml</span></span>
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
<span class="line"><span>        enabled: yes</span></span></code></pre></div><h3 id="剧本-3-在-red-hat-系统上安装软件包列表" tabindex="-1">剧本-3：在 Red Hat 系统上安装软件包列表 <a class="header-anchor" href="#剧本-3-在-red-hat-系统上安装软件包列表" aria-label="Permalink to “剧本-3：在 Red Hat 系统上安装软件包列表”">​</a></h3><p>这个示例剧本允许你在指定的目标节点上安装软件包。</p><p><strong>方法-1：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/ansible/playbooks/packages-redhat.yml</span></span>
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
<span class="line"><span>        - htop</span></span></code></pre></div><p><strong>方法-3：使用数组变量</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/ansible/playbooks/packages-redhat-2.yml</span></span>
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
<span class="line"><span>       with_items: &quot;{{ packages }}&quot;</span></span></code></pre></div><h3 id="剧本-4-在-linux-系统上安装更新" tabindex="-1">剧本-4：在 Linux 系统上安装更新 <a class="header-anchor" href="#剧本-4-在-linux-系统上安装更新" aria-label="Permalink to “剧本-4：在 Linux 系统上安装更新”">​</a></h3><p>这个示例剧本允许你在基于 Red Hat 或 Debian 的 Linux 系统上安装更新。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/ansible/playbooks/security-update.yml</span></span>
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
<span class="line"><span>      when: ansible_facts[&#39;distribution&#39;] == &quot;Ubuntu&quot;</span></span></code></pre></div><hr>`,19)),n("p",null,[s[8]||(s[8]=a("via: ",-1)),e(p,{href:"https://www.2daygeek.com/ansible-playbooks-quick-start-guide-with-examples/"},{default:l(()=>[...s[7]||(s[7]=[a("https://www.2daygeek.com/ansible-playbooks-quick-start-guide-with-examples/",-1)])]),_:1})]),n("p",null,[s[13]||(s[13]=a("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/magesh/"},{default:l(()=>[...s[9]||(s[9]=[a("Magesh Maruthamuthu",-1)])]),_:1}),s[14]||(s[14]=a(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[10]||(s[10]=[a("lujun9972",-1)])]),_:1}),s[15]||(s[15]=a(" 译者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:l(()=>[...s[11]||(s[11]=[a("MjSeven",-1)])]),_:1}),s[16]||(s[16]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[12]||(s[12]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[19]||(s[19]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[17]||(s[17]=[a("LCTT",-1)])]),_:1}),s[20]||(s[20]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[18]||(s[18]=[a("Linux中国",-1)])]),_:1}),s[21]||(s[21]=a(" 荣誉推出",-1))])])}const A=t(u,[["render",d]]);export{q as __pageData,A as default};
