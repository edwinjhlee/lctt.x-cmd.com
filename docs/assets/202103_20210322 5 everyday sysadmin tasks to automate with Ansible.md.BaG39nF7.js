import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as l,A as e,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const A=JSON.parse('{"title":"用 Ansible 自动化系统管理员的 5 个日常任务 | LCTT x X-CMD","titleTemplate":false,"description":"用 Ansible 自动化系统管理员的 5 个日常任务 | LCTT (202103) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Ansible 自动化系统管理员的 5 个日常任务 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Ansible 自动化系统管理员的 5 个日常任务 | LCTT (202103) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202103/20210322 5 everyday sysadmin tasks to automate with Ansible","title":"用 Ansible 自动化系统管理员的 5 个日常任务","tag":"202103","desc":""},"relativePath":"202103/20210322 5 everyday sysadmin tasks to automate with Ansible.md","filePath":"[post].md"}'),k={name:"202103/20210322 5 everyday sysadmin tasks to automate with Ansible.md"};function g(u,s,b,m,h,c){const p=o("Link");return r(),d("div",null,[s[52]||(s[52]=a("h1",{id:"用-ansible-自动化系统管理员的-5-个日常任务",tabindex:"-1"},[n("用 Ansible 自动化系统管理员的 5 个日常任务 "),a("a",{class:"header-anchor",href:"#用-ansible-自动化系统管理员的-5-个日常任务","aria-label":"Permalink to “用 Ansible 自动化系统管理员的 5 个日常任务”"},"​")],-1)),s[53]||(s[53]=a("blockquote",null,[a("p",null,"通过使用 Ansible 自动执行可重复的日常任务，提高工作效率并避免错误。")],-1)),s[54]||(s[54]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202103/31/233904oo7q68eo2njfmf8o.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("如果你讨厌执行重复性的任务，那么我有一个提议给你，去学习 ",-1)),l(p,{href:"https://www.ansible.com/"},{default:e(()=>[...s[0]||(s[0]=[n("Ansible",-1)])]),_:1}),s[2]||(s[2]=n("!",-1))]),s[55]||(s[55]=a("p",null,"Ansible 是一个工具，它可以帮助你更轻松、更快速地完成日常任务，这样你就可以更有效地利用时间，比如学习重要的新技术。对于系统管理员来说，它是一个很好的工具，因为它可以帮助你实现标准化，并在日常活动中进行协作，包括：",-1)),s[56]||(s[56]=a("ol",null,[a("li",null,"安装、配置和调配服务器和应用程序；"),a("li",null,"定期更新和升级系统；"),a("li",null,"监测、减轻和排除问题。")],-1)),s[57]||(s[57]=a("p",null,"通常，许多这些基本的日常任务都需要手动步骤，而根据个人的技能的不同，可能会造成不一致并导致配置发生漂移。这在小规模的实施中可能是可以接受的，因为你管理一台服务器，并且知道自己在做什么。但当你管理数百或数千台服务器时会发生什么？",-1)),s[58]||(s[58]=a("p",null,"如果不小心，这些手动的、可重复的任务可能会因为人为的错误而造成延误和问题，而这些错误可能会影响你及你的组织的声誉。",-1)),a("p",null,[s[4]||(s[4]=n("这就是自动化的价值所在。而 ",-1)),l(p,{href:"https://opensource.com/tags/ansible"},{default:e(()=>[...s[3]||(s[3]=[n("Ansible",-1)])]),_:1}),s[5]||(s[5]=n(" 是自动化这些可重复的日常任务的完美工具。",-1))]),s[59]||(s[59]=a("p",null,"自动化的一些原因是：",-1)),s[60]||(s[60]=a("ol",null,[a("li",null,"你想要一个一致和稳定的环境。"),a("li",null,"你想要促进标准化。"),a("li",null,"你希望减少停机时间，减少严重事故案例，以便可以享受生活。"),a("li",null,"你想喝杯啤酒，而不是排除故障问题!")],-1)),a("p",null,[s[7]||(s[7]=n("本文提供了一些系统管理员可以使用 Ansible 自动化的日常任务的例子。我把本文中的剧本和角色放到了 GitHub 上的 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks"},{default:e(()=>[...s[6]||(s[6]=[n("系统管理员任务仓库",-1)])]),_:1}),s[8]||(s[8]=n(" 中，以方便你使用它们。",-1))]),s[61]||(s[61]=i(`<p>这些剧本的结构是这样的（我的注释前面有 <code>==&gt;</code>）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# tree -L 2</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>├── ansible.cfg ==&gt; 负责控制 Ansible 行为的配置文件</span></span>
<span class="line"><span>├── ansible.log</span></span>
<span class="line"><span>├── inventory</span></span>
<span class="line"><span>│   ├── group_vars</span></span>
<span class="line"><span>│   ├── hosts  ==&gt; 包含我的目标服务器列表的清单文件</span></span>
<span class="line"><span>│   └── host_vars</span></span>
<span class="line"><span>├── LICENSE</span></span>
<span class="line"><span>├── playbooks  ==&gt; 包含我们将在本文中使用的剧本的目录</span></span>
<span class="line"><span>│   ├── c_logs.yml</span></span>
<span class="line"><span>│   ├── c_stats.yml</span></span>
<span class="line"><span>│   ├── c_uptime.yml</span></span>
<span class="line"><span>│   ├── inventory</span></span>
<span class="line"><span>│   ├── r_cron.yml</span></span>
<span class="line"><span>│   ├── r_install.yml</span></span>
<span class="line"><span>│   └── r_script.yml</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── roles    ==&gt; 包含我们将在本文中使用的角色的目录</span></span>
<span class="line"><span>│   ├── check_logs</span></span>
<span class="line"><span>│   ├── check_stats</span></span>
<span class="line"><span>│   ├── check_uptime</span></span>
<span class="line"><span>│   ├── install_cron</span></span>
<span class="line"><span>│   ├── install_tool</span></span>
<span class="line"><span>│   └── run_scr</span></span>
<span class="line"><span>└── templates ==&gt; 包含 jinja 模板的目录</span></span>
<span class="line"><span>    ├── cron_output.txt.j2</span></span>
<span class="line"><span>    ├── sar.txt.j2</span></span>
<span class="line"><span>    └── scr_output.txt.j2</span></span></code></pre></div><p>清单类似这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# cat inventory/hosts</span></span>
<span class="line"><span>[rhel8]</span></span>
<span class="line"><span>master ansible_ssh_host=192.168.1.12</span></span>
<span class="line"><span>workernode1 ansible_ssh_host=192.168.1.15</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[rhel8:vars]</span></span>
<span class="line"><span>ansible_user=ansible ==&gt; 请用你的 ansible 用户名更新它</span></span></code></pre></div><p>这里有五个你可以用 Ansible 自动完成的日常系统管理任务。</p><h3 id="_1、检查服务器的正常运行时间" tabindex="-1">1、检查服务器的正常运行时间 <a class="header-anchor" href="#_1、检查服务器的正常运行时间" aria-label="Permalink to “1、检查服务器的正常运行时间”">​</a></h3><p>你需要确保你的服务器一直处于正常运行状态。机构会拥有企业监控工具来监控服务器和应用程序的正常运行时间，但自动监控工具时常会出现故障，你需要登录进去验证一台服务器的状态。手动验证每台服务器的正常运行时间需要花费大量的时间。你的服务器越多，你需要花费的时间就越长。但如果有了自动化，这种验证可以在几分钟内完成。</p>`,7)),a("p",null,[s[10]||(s[10]=n("使用 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks/tree/main/roles/check_uptime"},{default:e(()=>[...s[9]||(s[9]=[n("check_uptime",-1)])]),_:1}),s[11]||(s[11]=n(" 角色和 ",-1)),s[12]||(s[12]=a("code",null,"c_uptime.yml",-1)),s[13]||(s[13]=n(" 剧本：",-1))]),s[62]||(s[62]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# ansible-playbook -i inventory/hosts  playbooks/c_uptime.yml -k</span></span>
<span class="line"><span>SSH password:</span></span>
<span class="line"><span>PLAY [Check Uptime for Servers] ****************************************************************************************************************************************</span></span>
<span class="line"><span>TASK [check_uptime : Capture timestamp] *************************************************************************************************</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>截断...</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>PLAY RECAP *************************************************************************************************************************************************************</span></span>
<span class="line"><span>master                     : ok=6    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  </span></span>
<span class="line"><span>workernode1                : ok=6    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  </span></span>
<span class="line"><span>[root@homebase 6_sysadmin_tasks]#</span></span></code></pre></div><p>剧本的输出是这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# cat /var/tmp/uptime-master-20210221004417.txt</span></span>
<span class="line"><span>-----------------------------------------------------</span></span>
<span class="line"><span> Uptime for  master</span></span>
<span class="line"><span>-----------------------------------------------------</span></span>
<span class="line"><span> 00:44:17 up 44 min,  2 users,  load average: 0.01, 0.09, 0.09</span></span>
<span class="line"><span>-----------------------------------------------------</span></span>
<span class="line"><span>[root@homebase 6_sysadmin_tasks]# cat /var/tmp/uptime-workernode1-20210221184525.txt</span></span>
<span class="line"><span>-----------------------------------------------------</span></span>
<span class="line"><span> Uptime for  workernode1</span></span>
<span class="line"><span>-----------------------------------------------------</span></span>
<span class="line"><span> 18:45:26 up 44 min,  2 users,  load average: 0.01, 0.01, 0.00</span></span>
<span class="line"><span>-----------------------------------------------------</span></span></code></pre></div>`,3)),a("p",null,[s[15]||(s[15]=n("使用 Ansible，你可以用较少的努力以人类可读的格式获得多个服务器的状态，",-1)),l(p,{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_templating.html"},{default:e(()=>[...s[14]||(s[14]=[n("Jinja 模板",-1)])]),_:1}),s[16]||(s[16]=n(" 允许你根据自己的需要调整输出。通过更多的自动化，你可以按计划运行，并通过电子邮件发送输出，以达到报告的目的。",-1))]),s[63]||(s[63]=a("h3",{id:"_2、配置额外的-cron-作业",tabindex:"-1"},[n("2、配置额外的 cron 作业 "),a("a",{class:"header-anchor",href:"#_2、配置额外的-cron-作业","aria-label":"Permalink to “2、配置额外的 cron 作业”"},"​")],-1)),s[64]||(s[64]=a("p",null,"你需要根据基础设施和应用需求定期更新服务器的计划作业。这似乎是一项微不足道的工作，但必须正确且持续地完成。想象一下，如果你对数百台生产服务器进行手动操作，这需要花费多少时间。如果做错了，就会影响生产应用程序，如果计划的作业重叠，就会导致应用程序停机或影响服务器性能。",-1)),a("p",null,[s[18]||(s[18]=n("使用 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks/tree/main/roles/install_cron"},{default:e(()=>[...s[17]||(s[17]=[n("install_cron",-1)])]),_:1}),s[19]||(s[19]=n(" 角色和 ",-1)),s[20]||(s[20]=a("code",null,"r_cron.yml",-1)),s[21]||(s[21]=n(" 剧本：",-1))]),s[65]||(s[65]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# ansible-playbook -i inventory/hosts playbooks/r_cron.yml -k</span></span>
<span class="line"><span>SSH password:</span></span>
<span class="line"><span>PLAY [Install additional cron jobs for root] ***************************************************************************************************************************</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>截断...</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>PLAY RECAP *************************************************************************************************************************************************************</span></span>
<span class="line"><span>master                     : ok=10   changed=7    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  </span></span>
<span class="line"><span>workernode1                : ok=10   changed=7    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><p>验证剧本的结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# ansible -i inventory/hosts all -m shell -a &quot;crontab -l&quot; -k</span></span>
<span class="line"><span>SSH password:</span></span>
<span class="line"><span>master | CHANGED | rc=0 &gt;&gt;</span></span>
<span class="line"><span>1 2 3 4 5 /usr/bin/ls /tmp</span></span>
<span class="line"><span>#Ansible: Iotop Monitoring</span></span>
<span class="line"><span>0 5,2 * * * /usr/sbin/iotop -b -n 1 &gt;&gt; /var/tmp/iotop.log 2&gt;&gt; /var/tmp/iotop.err</span></span>
<span class="line"><span>workernode1 | CHANGED | rc=0 &gt;&gt;</span></span>
<span class="line"><span>1 2 3 4 5 /usr/bin/ls /tmp</span></span>
<span class="line"><span>#Ansible: Iotop Monitoring</span></span>
<span class="line"><span>0 5,2 * * * /usr/sbin/iotop -b -n 1 &gt;&gt; /var/tmp/iotop.log 2&gt;&gt; /var/tmp/iotop.err</span></span></code></pre></div><p>使用 Ansible，你可以以快速和一致的方式更新所有服务器上的 crontab 条目。你还可以使用一个简单的点对点 Ansible 命令来报告更新后的 crontab 的状态，以验证最近应用的变化。</p><h3 id="_3、收集服务器统计和-sars" tabindex="-1">3、收集服务器统计和 sars <a class="header-anchor" href="#_3、收集服务器统计和-sars" aria-label="Permalink to “3、收集服务器统计和 sars”">​</a></h3><p>在常规的故障排除过程中，为了诊断服务器性能或应用程序问题，你需要收集<ruby>系统活动报告<rt>system activity reports</rt></ruby>（sars）和服务器统计。在大多数情况下，服务器日志包含非常重要的信息，开发人员或运维团队需要这些信息来帮助解决影响整个环境的具体问题。</p><p>安全团队在进行调查时非常特别，大多数时候，他们希望查看多个服务器的日志。你需要找到一种简单的方法来收集这些文档。如果你能把收集任务委托给他们就更好了。</p>`,7)),a("p",null,[s[23]||(s[23]=n("通过 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks/tree/main/roles/check_stats"},{default:e(()=>[...s[22]||(s[22]=[n("check_stats",-1)])]),_:1}),s[24]||(s[24]=n(" 角色和 ",-1)),s[25]||(s[25]=a("code",null,"c_stats.yml",-1)),s[26]||(s[26]=n(" 剧本来完成这个任务：",-1))]),s[66]||(s[66]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook -i inventory/hosts  playbooks/c_stats.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY [Check Stats/sar for Servers] ***********************************************************************************************************************************</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [check_stats : Get current date time] ***************************************************************************************************************************</span></span>
<span class="line"><span>changed: [master]</span></span>
<span class="line"><span>changed: [workernode1]</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>截断...</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>PLAY RECAP ***********************************************************************************************************************************************************</span></span>
<span class="line"><span>master                     : ok=5    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  </span></span>
<span class="line"><span>workernode1                : ok=5    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><p>输出看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /tmp/sar-workernode1-20210221214056.txt</span></span>
<span class="line"><span>-----------------------------------------------------</span></span>
<span class="line"><span> sar output for workernode1</span></span>
<span class="line"><span>-----------------------------------------------------</span></span>
<span class="line"><span>Linux 4.18.0-193.el8.x86_64 (node1)     21/02/21        _x86_64_        (2 CPU)</span></span>
<span class="line"><span>21:39:30     LINUX RESTART      (2 CPU)</span></span>
<span class="line"><span>-----------------------------------------------------</span></span></code></pre></div><h3 id="_4、收集服务器日志" tabindex="-1">4、收集服务器日志 <a class="header-anchor" href="#_4、收集服务器日志" aria-label="Permalink to “4、收集服务器日志”">​</a></h3><p>除了收集服务器统计和 sars 信息，你还需要不时地收集日志，尤其是当你需要帮助调查问题时。</p>`,5)),a("p",null,[s[28]||(s[28]=n("通过 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks/tree/main/roles/check_logs"},{default:e(()=>[...s[27]||(s[27]=[n("check_logs",-1)])]),_:1}),s[29]||(s[29]=n(" 角色和 ",-1)),s[30]||(s[30]=a("code",null,"r_cron.yml",-1)),s[31]||(s[31]=n(" 剧本来实现：",-1))]),s[67]||(s[67]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook -i inventory/hosts  playbooks/c_logs.yml -k</span></span>
<span class="line"><span>SSH password:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY [Check Logs for Servers] ****************************************************************************************************************************************</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>截断...</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>TASK [check_logs : Capture Timestamp] ********************************************************************************************************************************</span></span>
<span class="line"><span>changed: [master]</span></span>
<span class="line"><span>changed: [workernode1]</span></span>
<span class="line"><span>PLAY RECAP ***********************************************************************************************************************************************************</span></span>
<span class="line"><span>master                     : ok=6    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  </span></span>
<span class="line"><span>workernode1                : ok=6    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><p>为了确认输出，打开转储位置生成的文件。日志应该是这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /tmp/logs-workernode1-20210221214758.txt | more</span></span>
<span class="line"><span>-----------------------------------------------------</span></span>
<span class="line"><span> Logs gathered: /var/log/messages for workernode1</span></span>
<span class="line"><span>-----------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Feb 21 18:00:27 node1 kernel: Command line: BOOT_IMAGE=(hd0,gpt2)/vmlinuz-4.18.0-193.el8.x86_64 root=/dev/mapper/rhel-root ro crashkernel=auto resume=/dev/mapper/rhel</span></span>
<span class="line"><span>-swap rd.lvm.lv=rhel/root rd.lvm.lv=rhel/swap rhgb quiet</span></span>
<span class="line"><span>Feb 21 18:00:27 node1 kernel: Disabled fast string operations</span></span>
<span class="line"><span>Feb 21 18:00:27 node1 kernel: x86/fpu: Supporting XSAVE feature 0x001: &#39;x87 floating point registers&#39;</span></span>
<span class="line"><span>Feb 21 18:00:27 node1 kernel: x86/fpu: Supporting XSAVE feature 0x002: &#39;SSE registers&#39;</span></span>
<span class="line"><span>Feb 21 18:00:27 node1 kernel: x86/fpu: Supporting XSAVE feature 0x004: &#39;AVX registers&#39;</span></span>
<span class="line"><span>Feb 21 18:00:27 node1 kernel: x86/fpu: xstate_offset[2]:  576, xstate_sizes[2]:  256</span></span>
<span class="line"><span>Feb 21 18:00:27 node1 kernel: x86/fpu: Enabled xstate features 0x7, context size is 832 bytes, using &#39;compacted&#39; format.</span></span></code></pre></div><h3 id="_5、安装或删除软件包和软件" tabindex="-1">5、安装或删除软件包和软件 <a class="header-anchor" href="#_5、安装或删除软件包和软件" aria-label="Permalink to “5、安装或删除软件包和软件”">​</a></h3><p>你需要能够持续快速地在系统上安装和更新软件和软件包。缩短安装或更新软件包和软件所需的时间，可以避免服务器和应用程序不必要的停机时间。</p>`,5)),a("p",null,[s[33]||(s[33]=n("通过 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks/tree/main/roles/install_tool"},{default:e(()=>[...s[32]||(s[32]=[n("install_tool",-1)])]),_:1}),s[34]||(s[34]=n(" 角色和 ",-1)),s[35]||(s[35]=a("code",null,"r_install.yml",-1)),s[36]||(s[36]=n(" 剧本来实现这一点：",-1))]),s[68]||(s[68]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook -i inventory/hosts playbooks/r_install.yml -k</span></span>
<span class="line"><span>SSH password:</span></span>
<span class="line"><span>PLAY [Install additional tools/packages] ***********************************************************************************</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [install_tool : Install specified tools in the role vars] *************************************************************</span></span>
<span class="line"><span>ok: [master] =&gt; (item=iotop)</span></span>
<span class="line"><span>ok: [workernode1] =&gt; (item=iotop)</span></span>
<span class="line"><span>ok: [workernode1] =&gt; (item=traceroute)</span></span>
<span class="line"><span>ok: [master] =&gt; (item=traceroute)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY RECAP *****************************************************************************************************************</span></span>
<span class="line"><span>master                     : ok=1    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  </span></span>
<span class="line"><span>workernode1                : ok=1    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><p>这个例子安装了在 vars 文件中定义的两个特定包和版本。使用 Ansible 自动化，你可以比手动安装更快地安装多个软件包或软件。你也可以使用 vars 文件来定义你要安装的软件包的版本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat roles/install_tool/vars/main.yml</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span># vars file for install_tool</span></span>
<span class="line"><span>ins_action: absent</span></span>
<span class="line"><span>package_list:</span></span>
<span class="line"><span>  - iotop-0.6-16.el8.noarch</span></span>
<span class="line"><span>  - traceroute</span></span></code></pre></div><h3 id="拥抱自动化" tabindex="-1">拥抱自动化 <a class="header-anchor" href="#拥抱自动化" aria-label="Permalink to “拥抱自动化”">​</a></h3><p>要成为一名有效率的系统管理员，你需要接受自动化来鼓励团队内部的标准化和协作。Ansible 使你能够在更少的时间内做更多的事情，这样你就可以将时间花在更令人兴奋的项目上，而不是做重复的任务，如管理你的事件和问题管理流程。</p><p>有了更多的空闲时间，你可以学习更多的知识，让自己可以迎接下一个职业机会的到来。</p><hr>`,7)),a("p",null,[s[38]||(s[38]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/21/3/ansible-sysadmin"},{default:e(()=>[...s[37]||(s[37]=[n("https://opensource.com/article/21/3/ansible-sysadmin",-1)])]),_:1})]),a("p",null,[s[43]||(s[43]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/mcalizo"},{default:e(()=>[...s[39]||(s[39]=[n("Mike Calizo",-1)])]),_:1}),s[44]||(s[44]=n(" 选题：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[40]||(s[40]=[n("lujun9972",-1)])]),_:1}),s[45]||(s[45]=n(" 译者：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[41]||(s[41]=[n("wxy",-1)])]),_:1}),s[46]||(s[46]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[42]||(s[42]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[49]||(s[49]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[47]||(s[47]=[n("LCTT",-1)])]),_:1}),s[50]||(s[50]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[48]||(s[48]=[n("Linux中国",-1)])]),_:1}),s[51]||(s[51]=n(" 荣誉推出",-1))])])}const v=t(k,[["render",g]]);export{A as __pageData,v as default};
