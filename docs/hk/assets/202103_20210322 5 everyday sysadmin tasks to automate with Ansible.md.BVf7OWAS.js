import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as l,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const A=JSON.parse('{"title":"用 Ansible 自動化系統管理員的 5 個日常任務 | LCTT x X-CMD","titleTemplate":false,"description":"用 Ansible 自動化系統管理員的 5 個日常任務 | LCTT (202103) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Ansible 自動化系統管理員的 5 個日常任務 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Ansible 自動化系統管理員的 5 個日常任務 | LCTT (202103) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202103/20210322 5 everyday sysadmin tasks to automate with Ansible","title":"用 Ansible 自動化系統管理員的 5 個日常任務","tag":"202103","desc":""},"relativePath":"202103/20210322 5 everyday sysadmin tasks to automate with Ansible.md","filePath":"[post].md"}'),k={name:"202103/20210322 5 everyday sysadmin tasks to automate with Ansible.md"};function g(u,s,b,m,h,c){const p=o("Link");return r(),d("div",null,[s[52]||(s[52]=a("h1",{id:"用-ansible-自動化系統管理員的-5-個日常任務",tabindex:"-1"},[n("用 Ansible 自動化系統管理員的 5 個日常任務 "),a("a",{class:"header-anchor",href:"#用-ansible-自動化系統管理員的-5-個日常任務","aria-label":"Permalink to “用 Ansible 自動化系統管理員的 5 個日常任務”"},"​")],-1)),s[53]||(s[53]=a("blockquote",null,[a("p",null,"通過使用 Ansible 自動執行可重複的日常任務，提高工作效率並避免錯誤。")],-1)),s[54]||(s[54]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202103/31/233904oo7q68eo2njfmf8o.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("如果你討厭執行重複性的任務，那麼我有一個提議給你，去學習 ",-1)),l(p,{href:"https://www.ansible.com/"},{default:e(()=>[...s[0]||(s[0]=[n("Ansible",-1)])]),_:1}),s[2]||(s[2]=n("!",-1))]),s[55]||(s[55]=a("p",null,"Ansible 是一個工具，它可以幫助你更輕鬆、更快速地完成日常任務，這樣你就可以更有效地利用時間，比如學習重要的新技術。對於系統管理員來説，它是一個很好的工具，因為它可以幫助你實現標準化，並在日常活動中進行協作，包括：",-1)),s[56]||(s[56]=a("ol",null,[a("li",null,"安裝、配置和調配服務器和應用程序；"),a("li",null,"定期更新和升級系統；"),a("li",null,"監測、減輕和排除問題。")],-1)),s[57]||(s[57]=a("p",null,"通常，許多這些基本的日常任務都需要手動步驟，而根據個人的技能的不同，可能會造成不一致並導致配置發生漂移。這在小規模的實施中可能是可以接受的，因為你管理一台服務器，並且知道自己在做什麼。但當你管理數百或數千台服務器時會發生什麼？",-1)),s[58]||(s[58]=a("p",null,"如果不小心，這些手動的、可重複的任務可能會因為人為的錯誤而造成延誤和問題，而這些錯誤可能會影響你及你的組織的聲譽。",-1)),a("p",null,[s[4]||(s[4]=n("這就是自動化的價值所在。而 ",-1)),l(p,{href:"https://opensource.com/tags/ansible"},{default:e(()=>[...s[3]||(s[3]=[n("Ansible",-1)])]),_:1}),s[5]||(s[5]=n(" 是自動化這些可重複的日常任務的完美工具。",-1))]),s[59]||(s[59]=a("p",null,"自動化的一些原因是：",-1)),s[60]||(s[60]=a("ol",null,[a("li",null,"你想要一個一致和穩定的環境。"),a("li",null,"你想要促進標準化。"),a("li",null,"你希望減少停機時間，減少嚴重事故案例，以便可以享受生活。"),a("li",null,"你想喝杯啤酒，而不是排除故障問題!")],-1)),a("p",null,[s[7]||(s[7]=n("本文提供了一些系統管理員可以使用 Ansible 自動化的日常任務的例子。我把本文中的劇本和角色放到了 GitHub 上的 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks"},{default:e(()=>[...s[6]||(s[6]=[n("系統管理員任務倉庫",-1)])]),_:1}),s[8]||(s[8]=n(" 中，以方便你使用它們。",-1))]),s[61]||(s[61]=i(`<p>這些劇本的結構是這樣的（我的註釋前面有 <code>==&gt;</code>）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# tree -L 2</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>├── ansible.cfg ==&gt; 負責控制 Ansible 行為的配置文件</span></span>
<span class="line"><span>├── ansible.log</span></span>
<span class="line"><span>├── inventory</span></span>
<span class="line"><span>│   ├── group_vars</span></span>
<span class="line"><span>│   ├── hosts  ==&gt; 包含我的目標服務器列表的清單文件</span></span>
<span class="line"><span>│   └── host_vars</span></span>
<span class="line"><span>├── LICENSE</span></span>
<span class="line"><span>├── playbooks  ==&gt; 包含我們將在本文中使用的劇本的目錄</span></span>
<span class="line"><span>│   ├── c_logs.yml</span></span>
<span class="line"><span>│   ├── c_stats.yml</span></span>
<span class="line"><span>│   ├── c_uptime.yml</span></span>
<span class="line"><span>│   ├── inventory</span></span>
<span class="line"><span>│   ├── r_cron.yml</span></span>
<span class="line"><span>│   ├── r_install.yml</span></span>
<span class="line"><span>│   └── r_script.yml</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── roles    ==&gt; 包含我們將在本文中使用的角色的目錄</span></span>
<span class="line"><span>│   ├── check_logs</span></span>
<span class="line"><span>│   ├── check_stats</span></span>
<span class="line"><span>│   ├── check_uptime</span></span>
<span class="line"><span>│   ├── install_cron</span></span>
<span class="line"><span>│   ├── install_tool</span></span>
<span class="line"><span>│   └── run_scr</span></span>
<span class="line"><span>└── templates ==&gt; 包含 jinja 模板的目錄</span></span>
<span class="line"><span>    ├── cron_output.txt.j2</span></span>
<span class="line"><span>    ├── sar.txt.j2</span></span>
<span class="line"><span>    └── scr_output.txt.j2</span></span></code></pre></div><p>清單類似這樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# cat inventory/hosts</span></span>
<span class="line"><span>[rhel8]</span></span>
<span class="line"><span>master ansible_ssh_host=192.168.1.12</span></span>
<span class="line"><span>workernode1 ansible_ssh_host=192.168.1.15</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[rhel8:vars]</span></span>
<span class="line"><span>ansible_user=ansible ==&gt; 請用你的 ansible 用户名更新它</span></span></code></pre></div><p>這裏有五個你可以用 Ansible 自動完成的日常系統管理任務。</p><h3 id="_1、檢查服務器的正常運行時間" tabindex="-1">1、檢查服務器的正常運行時間 <a class="header-anchor" href="#_1、檢查服務器的正常運行時間" aria-label="Permalink to “1、檢查服務器的正常運行時間”">​</a></h3><p>你需要確保你的服務器一直處於正常運行狀態。機構會擁有企業監控工具來監控服務器和應用程序的正常運行時間，但自動監控工具時常會出現故障，你需要登錄進去驗證一台服務器的狀態。手動驗證每台服務器的正常運行時間需要花費大量的時間。你的服務器越多，你需要花費的時間就越長。但如果有了自動化，這種驗證可以在幾分鐘內完成。</p>`,7)),a("p",null,[s[10]||(s[10]=n("使用 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks/tree/main/roles/check_uptime"},{default:e(()=>[...s[9]||(s[9]=[n("check_uptime",-1)])]),_:1}),s[11]||(s[11]=n(" 角色和 ",-1)),s[12]||(s[12]=a("code",null,"c_uptime.yml",-1)),s[13]||(s[13]=n(" 劇本：",-1))]),s[62]||(s[62]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# ansible-playbook -i inventory/hosts  playbooks/c_uptime.yml -k</span></span>
<span class="line"><span>SSH password:</span></span>
<span class="line"><span>PLAY [Check Uptime for Servers] ****************************************************************************************************************************************</span></span>
<span class="line"><span>TASK [check_uptime : Capture timestamp] *************************************************************************************************</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>截斷...</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>PLAY RECAP *************************************************************************************************************************************************************</span></span>
<span class="line"><span>master                     : ok=6    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  </span></span>
<span class="line"><span>workernode1                : ok=6    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  </span></span>
<span class="line"><span>[root@homebase 6_sysadmin_tasks]#</span></span></code></pre></div><p>劇本的輸出是這樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# cat /var/tmp/uptime-master-20210221004417.txt</span></span>
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
<span class="line"><span>-----------------------------------------------------</span></span></code></pre></div>`,3)),a("p",null,[s[15]||(s[15]=n("使用 Ansible，你可以用較少的努力以人類可讀的格式獲得多個服務器的狀態，",-1)),l(p,{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_templating.html"},{default:e(()=>[...s[14]||(s[14]=[n("Jinja 模板",-1)])]),_:1}),s[16]||(s[16]=n(" 允許你根據自己的需要調整輸出。通過更多的自動化，你可以按計劃運行，並通過電子郵件發送輸出，以達到報告的目的。",-1))]),s[63]||(s[63]=a("h3",{id:"_2、配置額外的-cron-作業",tabindex:"-1"},[n("2、配置額外的 cron 作業 "),a("a",{class:"header-anchor",href:"#_2、配置額外的-cron-作業","aria-label":"Permalink to “2、配置額外的 cron 作業”"},"​")],-1)),s[64]||(s[64]=a("p",null,"你需要根據基礎設施和應用需求定期更新服務器的計劃作業。這似乎是一項微不足道的工作，但必須正確且持續地完成。想像一下，如果你對數百台生產服務器進行手動操作，這需要花費多少時間。如果做錯了，就會影響生產應用程序，如果計劃的作業重疊，就會導致應用程序停機或影響服務器性能。",-1)),a("p",null,[s[18]||(s[18]=n("使用 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks/tree/main/roles/install_cron"},{default:e(()=>[...s[17]||(s[17]=[n("install_cron",-1)])]),_:1}),s[19]||(s[19]=n(" 角色和 ",-1)),s[20]||(s[20]=a("code",null,"r_cron.yml",-1)),s[21]||(s[21]=n(" 劇本：",-1))]),s[65]||(s[65]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# ansible-playbook -i inventory/hosts playbooks/r_cron.yml -k</span></span>
<span class="line"><span>SSH password:</span></span>
<span class="line"><span>PLAY [Install additional cron jobs for root] ***************************************************************************************************************************</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>截斷...</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>PLAY RECAP *************************************************************************************************************************************************************</span></span>
<span class="line"><span>master                     : ok=10   changed=7    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  </span></span>
<span class="line"><span>workernode1                : ok=10   changed=7    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><p>驗證劇本的結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@homebase 6_sysadmin_tasks]# ansible -i inventory/hosts all -m shell -a &quot;crontab -l&quot; -k</span></span>
<span class="line"><span>SSH password:</span></span>
<span class="line"><span>master | CHANGED | rc=0 &gt;&gt;</span></span>
<span class="line"><span>1 2 3 4 5 /usr/bin/ls /tmp</span></span>
<span class="line"><span>#Ansible: Iotop Monitoring</span></span>
<span class="line"><span>0 5,2 * * * /usr/sbin/iotop -b -n 1 &gt;&gt; /var/tmp/iotop.log 2&gt;&gt; /var/tmp/iotop.err</span></span>
<span class="line"><span>workernode1 | CHANGED | rc=0 &gt;&gt;</span></span>
<span class="line"><span>1 2 3 4 5 /usr/bin/ls /tmp</span></span>
<span class="line"><span>#Ansible: Iotop Monitoring</span></span>
<span class="line"><span>0 5,2 * * * /usr/sbin/iotop -b -n 1 &gt;&gt; /var/tmp/iotop.log 2&gt;&gt; /var/tmp/iotop.err</span></span></code></pre></div><p>使用 Ansible，你可以以快速和一致的方式更新所有服務器上的 crontab 條目。你還可以使用一個簡單的點對點 Ansible 命令來報告更新後的 crontab 的狀態，以驗證最近應用的變化。</p><h3 id="_3、收集服務器統計和-sars" tabindex="-1">3、收集服務器統計和 sars <a class="header-anchor" href="#_3、收集服務器統計和-sars" aria-label="Permalink to “3、收集服務器統計和 sars”">​</a></h3><p>在常規的故障排除過程中，為了診斷服務器性能或應用程序問題，你需要收集<ruby>系統活動報告<rt>system activity reports</rt></ruby>（sars）和服務器統計。在大多數情況下，服務器日誌包含非常重要的信息，開發人員或運維團隊需要這些信息來幫助解決影響整個環境的具體問題。</p><p>安全團隊在進行調查時非常特別，大多數時候，他們希望查看多個服務器的日誌。你需要找到一種簡單的方法來收集這些文檔。如果你能把收集任務委託給他們就更好了。</p>`,7)),a("p",null,[s[23]||(s[23]=n("通過 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks/tree/main/roles/check_stats"},{default:e(()=>[...s[22]||(s[22]=[n("check_stats",-1)])]),_:1}),s[24]||(s[24]=n(" 角色和 ",-1)),s[25]||(s[25]=a("code",null,"c_stats.yml",-1)),s[26]||(s[26]=n(" 劇本來完成這個任務：",-1))]),s[66]||(s[66]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook -i inventory/hosts  playbooks/c_stats.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY [Check Stats/sar for Servers] ***********************************************************************************************************************************</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [check_stats : Get current date time] ***************************************************************************************************************************</span></span>
<span class="line"><span>changed: [master]</span></span>
<span class="line"><span>changed: [workernode1]</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>截斷...</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>PLAY RECAP ***********************************************************************************************************************************************************</span></span>
<span class="line"><span>master                     : ok=5    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  </span></span>
<span class="line"><span>workernode1                : ok=5    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><p>輸出看起來像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /tmp/sar-workernode1-20210221214056.txt</span></span>
<span class="line"><span>-----------------------------------------------------</span></span>
<span class="line"><span> sar output for workernode1</span></span>
<span class="line"><span>-----------------------------------------------------</span></span>
<span class="line"><span>Linux 4.18.0-193.el8.x86_64 (node1)     21/02/21        _x86_64_        (2 CPU)</span></span>
<span class="line"><span>21:39:30     LINUX RESTART      (2 CPU)</span></span>
<span class="line"><span>-----------------------------------------------------</span></span></code></pre></div><h3 id="_4、收集服務器日誌" tabindex="-1">4、收集服務器日誌 <a class="header-anchor" href="#_4、收集服務器日誌" aria-label="Permalink to “4、收集服務器日誌”">​</a></h3><p>除了收集服務器統計和 sars 信息，你還需要不時地收集日誌，尤其是當你需要幫助調查問題時。</p>`,5)),a("p",null,[s[28]||(s[28]=n("通過 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks/tree/main/roles/check_logs"},{default:e(()=>[...s[27]||(s[27]=[n("check_logs",-1)])]),_:1}),s[29]||(s[29]=n(" 角色和 ",-1)),s[30]||(s[30]=a("code",null,"r_cron.yml",-1)),s[31]||(s[31]=n(" 劇本來實現：",-1))]),s[67]||(s[67]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook -i inventory/hosts  playbooks/c_logs.yml -k</span></span>
<span class="line"><span>SSH password:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY [Check Logs for Servers] ****************************************************************************************************************************************</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>截斷...</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>TASK [check_logs : Capture Timestamp] ********************************************************************************************************************************</span></span>
<span class="line"><span>changed: [master]</span></span>
<span class="line"><span>changed: [workernode1]</span></span>
<span class="line"><span>PLAY RECAP ***********************************************************************************************************************************************************</span></span>
<span class="line"><span>master                     : ok=6    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  </span></span>
<span class="line"><span>workernode1                : ok=6    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><p>為了確認輸出，打開轉儲位置生成的文件。日誌應該是這樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /tmp/logs-workernode1-20210221214758.txt | more</span></span>
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
<span class="line"><span>Feb 21 18:00:27 node1 kernel: x86/fpu: Enabled xstate features 0x7, context size is 832 bytes, using &#39;compacted&#39; format.</span></span></code></pre></div><h3 id="_5、安裝或刪除軟件包和軟件" tabindex="-1">5、安裝或刪除軟件包和軟件 <a class="header-anchor" href="#_5、安裝或刪除軟件包和軟件" aria-label="Permalink to “5、安裝或刪除軟件包和軟件”">​</a></h3><p>你需要能夠持續快速地在系統上安裝和更新軟件和軟件包。縮短安裝或更新軟件包和軟件所需的時間，可以避免服務器和應用程序不必要的停機時間。</p>`,5)),a("p",null,[s[33]||(s[33]=n("通過 ",-1)),l(p,{href:"https://github.com/mikecali/6_sysadmin_tasks/tree/main/roles/install_tool"},{default:e(()=>[...s[32]||(s[32]=[n("install_tool",-1)])]),_:1}),s[34]||(s[34]=n(" 角色和 ",-1)),s[35]||(s[35]=a("code",null,"r_install.yml",-1)),s[36]||(s[36]=n(" 劇本來實現這一點：",-1))]),s[68]||(s[68]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-playbook -i inventory/hosts playbooks/r_install.yml -k</span></span>
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
<span class="line"><span>workernode1                : ok=1    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0</span></span></code></pre></div><p>這個例子安裝了在 vars 文件中定義的兩個特定包和版本。使用 Ansible 自動化，你可以比手動安裝更快地安裝多個軟件包或軟件。你也可以使用 vars 文件來定義你要安裝的軟件包的版本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat roles/install_tool/vars/main.yml</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span># vars file for install_tool</span></span>
<span class="line"><span>ins_action: absent</span></span>
<span class="line"><span>package_list:</span></span>
<span class="line"><span>  - iotop-0.6-16.el8.noarch</span></span>
<span class="line"><span>  - traceroute</span></span></code></pre></div><h3 id="擁抱自動化" tabindex="-1">擁抱自動化 <a class="header-anchor" href="#擁抱自動化" aria-label="Permalink to “擁抱自動化”">​</a></h3><p>要成為一名有效率的系統管理員，你需要接受自動化來鼓勵團隊內部的標準化和協作。Ansible 使你能夠在更少的時間內做更多的事情，這樣你就可以將時間花在更令人興奮的項目上，而不是做重複的任務，如管理你的事件和問題管理流程。</p><p>有了更多的空閒時間，你可以學習更多的知識，讓自己可以迎接下一個職業機會的到來。</p><hr>`,7)),a("p",null,[s[38]||(s[38]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/21/3/ansible-sysadmin"},{default:e(()=>[...s[37]||(s[37]=[n("https://opensource.com/article/21/3/ansible-sysadmin",-1)])]),_:1})]),a("p",null,[s[43]||(s[43]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/mcalizo"},{default:e(()=>[...s[39]||(s[39]=[n("Mike Calizo",-1)])]),_:1}),s[44]||(s[44]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[40]||(s[40]=[n("lujun9972",-1)])]),_:1}),s[45]||(s[45]=n(" 譯者：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[41]||(s[41]=[n("wxy",-1)])]),_:1}),s[46]||(s[46]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[42]||(s[42]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[49]||(s[49]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[47]||(s[47]=[n("LCTT",-1)])]),_:1}),s[50]||(s[50]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[48]||(s[48]=[n("Linux中國",-1)])]),_:1}),s[51]||(s[51]=n(" 榮譽推出",-1))])])}const v=t(k,[["render",g]]);export{A as __pageData,v as default};
