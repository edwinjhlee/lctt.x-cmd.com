import{_ as i,a0 as o,w as r,s as d,I as a,x as n,a1 as l,A as p,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"如何使用 Ansible 打补丁以及安装应用 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Ansible 打补丁以及安装应用 | LCTT (201805) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Ansible 打补丁以及安装应用 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Ansible 打补丁以及安装应用 | LCTT (201805) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201805/20180321 How to use Ansible to patch systems and install applications","title":"如何使用 Ansible 打补丁以及安装应用","tag":"201805","desc":""},"relativePath":"201805/20180321 How to use Ansible to patch systems and install applications.md","filePath":"[post].md"}'),u={name:"201805/20180321 How to use Ansible to patch systems and install applications.md"};function m(b,s,g,c,f,k){const e=o("Link");return r(),d("div",null,[s[36]||(s[36]=a("h1",{id:"如何使用-ansible-打补丁以及安装应用",tabindex:"-1"},[n("如何使用 Ansible 打补丁以及安装应用 "),a("a",{class:"header-anchor",href:"#如何使用-ansible-打补丁以及安装应用","aria-label":"Permalink to “如何使用 Ansible 打补丁以及安装应用”"},"​")],-1)),s[37]||(s[37]=a("blockquote",null,[a("p",null,"使用 Ansible IT 自动化引擎节省更新的时间。")],-1)),s[38]||(s[38]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/tools_osyearbook2016_sysadmin_cc.png?itok=Y1AHCKI4",alt:""})],-1)),s[39]||(s[39]=a("p",null,"你有没有想过，如何打补丁、重启系统，然后继续工作？",-1)),a("p",null,[s[1]||(s[1]=n("如果你的回答是肯定的，那就需要了解一下 ",-1)),l(e,{href:"https://www.ansible.com/overview/how-ansible-works"},{default:p(()=>[...s[0]||(s[0]=[n("Ansible",-1)])]),_:1}),s[2]||(s[2]=n(" 了。它是一个配置管理工具，对于一些复杂的有时候需要几个小时才能完成的系统管理任务，又或者对安全性有比较高要求的时候，使用 Ansible 能够大大简化工作流程。",-1))]),s[40]||(s[40]=a("p",null,[n("以我作为系统管理员的经验，打补丁是一项最有难度的工作。每次遇到"),a("ruby",null,[n("公共漏洞批露"),a("rt",null,"Common Vulnearbilities and Exposure")]),n("（CVE）通知或者"),a("ruby",null,[n("信息保障漏洞预警"),a("rt",null,"Information Assurance Vulnerability Alert")]),n("（IAVA）时都必须要高度关注安全漏洞，否则安全部门将会严肃追究自己的责任。")],-1)),a("p",null,[s[5]||(s[5]=n("使用 Ansible 可以通过运行",-1)),l(e,{href:"https://docs.ansible.com/ansible/latest/list_of_packaging_modules.html"},{default:p(()=>[...s[3]||(s[3]=[n("封装模块",-1)])]),_:1}),s[6]||(s[6]=n("以缩短打补丁的时间，下面以 ",-1)),l(e,{href:"https://docs.ansible.com/ansible/latest/yum_module.html"},{default:p(()=>[...s[4]||(s[4]=[n("yum 模块",-1)])]),_:1}),s[7]||(s[7]=n("更新系统为例，使用 Ansible 可以执行安装、更新、删除、从其它地方安装（例如持续集成/持续开发中的 ",-1)),s[8]||(s[8]=a("code",null,"rpmbuild",-1)),s[9]||(s[9]=n("）。以下是系统更新的任务：",-1))]),s[41]||(s[41]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  - name: update the system</span></span>
<span class="line"><span>    yum:</span></span>
<span class="line"><span>      name: &quot;*&quot;</span></span>
<span class="line"><span>      state: latest</span></span></code></pre></div><p>在第一行，我们给这个任务命名，这样可以清楚 Ansible 的工作内容。第二行表示使用 <code>yum</code> 模块在CentOS虚拟机中执行更新操作。第三行 <code>name: &quot;*&quot;</code> 表示更新所有程序。最后一行 <code>state: latest</code> 表示更新到最新的 RPM。</p><p>系统更新结束之后，需要重新启动并重新连接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  - name: restart system to reboot to newest kernel</span></span>
<span class="line"><span>    shell: &quot;sleep 5 &amp;&amp; reboot&quot;</span></span>
<span class="line"><span>    async: 1</span></span>
<span class="line"><span>    poll: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - name: wait for 10 seconds</span></span>
<span class="line"><span>    pause:</span></span>
<span class="line"><span>      seconds: 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - name: wait for the system to reboot</span></span>
<span class="line"><span>    wait_for_connection:</span></span>
<span class="line"><span>      connect_timeout: 20</span></span>
<span class="line"><span>      sleep: 5</span></span>
<span class="line"><span>      delay: 5</span></span>
<span class="line"><span>      timeout: 60</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - name: install epel-release</span></span>
<span class="line"><span>    yum:</span></span>
<span class="line"><span>      name: epel-release</span></span>
<span class="line"><span>      state: latest</span></span></code></pre></div><p><code>shell</code> 模块中的命令让系统在 5 秒休眠之后重新启动，我们使用 <code>sleep</code> 来保持连接不断开，使用 <code>async</code> 设定最大等待时长以避免发生超时，<code>poll</code> 设置为 0 表示直接执行不需要等待执行结果。暂停 10 秒钟以等待虚拟机恢复，使用 <code>wait_for_connection</code> 在虚拟机恢复连接后尽快连接。随后由 <code>install epel-release</code> 任务检查 RPM 的安装情况。你可以对这个剧本执行多次来验证它的幂等性，唯一会显示造成影响的是重启操作，因为我们使用了 <code>shell</code> 模块。如果不想造成实际的影响，可以在使用 <code>shell</code> 模块的时候 <code>changed_when: False</code>。</p>`,5)),a("p",null,[s[11]||(s[11]=n("现在我们已经知道如何对系统进行更新、重启虚拟机、重新连接、安装 RPM 包。下面我们通过 ",-1)),l(e,{href:"https://github.com/ansible/lightbulb/tree/master/examples/nginx-role"},{default:p(()=>[...s[10]||(s[10]=[n("Ansible Lightbulb",-1)])]),_:1}),s[12]||(s[12]=n(" 来安装 NGINX:",-1))]),s[42]||(s[42]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  - name: Ensure nginx packages are present</span></span>
<span class="line"><span>    yum:</span></span>
<span class="line"><span>      name: nginx, python-pip, python-devel, devel</span></span>
<span class="line"><span>      state: present</span></span>
<span class="line"><span>    notify: restart-nginx-service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - name: Ensure uwsgi package is present</span></span>
<span class="line"><span>    pip:</span></span>
<span class="line"><span>      name: uwsgi</span></span>
<span class="line"><span>      state: present</span></span>
<span class="line"><span>    notify: restart-nginx-service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - name: Ensure latest default.conf is present</span></span>
<span class="line"><span>    template:</span></span>
<span class="line"><span>      src: templates/nginx.conf.j2</span></span>
<span class="line"><span>      dest: /etc/nginx/nginx.conf</span></span>
<span class="line"><span>      backup: yes</span></span>
<span class="line"><span>    notify: restart-nginx-service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - name: Ensure latest index.html is present</span></span>
<span class="line"><span>    template:</span></span>
<span class="line"><span>      src: templates/index.html.j2</span></span>
<span class="line"><span>      dest: /usr/share/nginx/html/index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - name: Ensure nginx service is started and enabled</span></span>
<span class="line"><span>    service:</span></span>
<span class="line"><span>      name: nginx</span></span>
<span class="line"><span>      state: started</span></span>
<span class="line"><span>      enabled: yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - name: Ensure proper response from localhost can be received</span></span>
<span class="line"><span>    uri:</span></span>
<span class="line"><span>      url: &quot;http://localhost:80/&quot;</span></span>
<span class="line"><span>      return_content: yes</span></span>
<span class="line"><span>    register: response</span></span>
<span class="line"><span>    until: &#39;nginx_test_message in response.content&#39;</span></span>
<span class="line"><span>    retries: 10</span></span>
<span class="line"><span>    delay: 1</span></span></code></pre></div><p>以及用来重启 nginx 服务的操作文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 安装 nginx 的操作文件</span></span>
<span class="line"><span>  - name: restart-nginx-service</span></span>
<span class="line"><span>    service:</span></span>
<span class="line"><span>      name: nginx</span></span>
<span class="line"><span>      state: restarted</span></span></code></pre></div><p>在这个角色里，我们使用 RPM 安装了 <code>nginx</code>、<code>python-pip</code>、<code>python-devel</code>、<code>devel</code>，用 PIP 安装了 <code>uwsgi</code>，接下来使用 <code>template</code> 模块复制 <code>nginx.conf</code> 和 <code>index.html</code> 以显示页面，并确保服务在系统启动时启动。然后就可以使用 <code>uri</code> 模块检查到页面的连接了。</p><p>这个是一个系统更新、系统重启、安装 RPM 包的剧本示例，后续可以继续安装 nginx，当然这里可以替换成任何你想要的角色和应用程序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  - hosts: all</span></span>
<span class="line"><span>    roles:</span></span>
<span class="line"><span>      - centos-update</span></span>
<span class="line"><span>      - nginx-simple</span></span></code></pre></div><p>观看演示视频了解了解这个过程。</p>`,7)),a("p",null,[l(e,{href:"https://asciinema.org/a/166437/embed?"},{default:p(()=>[...s[13]||(s[13]=[n("demo",-1)])]),_:1})]),a("p",null,[s[15]||(s[15]=n("这只是关于如何更新系统、重启以及后续工作的示例。简单起见，我只添加了不带",-1)),l(e,{href:"https://docs.ansible.com/ansible/latest/playbooks_variables.html"},{default:p(()=>[...s[14]||(s[14]=[n("变量",-1)])]),_:1}),s[16]||(s[16]=n("的包，当你在操作大量主机的时候，你就需要修改其中的一些设置了：",-1))]),a("ul",null,[a("li",null,[l(e,{href:"https://docs.ansible.com/ansible/latest/playbooks_async.html"},{default:p(()=>[...s[17]||(s[17]=[n("async & poll",-1)])]),_:1})]),a("li",null,[l(e,{href:"https://docs.ansible.com/ansible/latest/playbooks_delegation.html#rolling-update-batch-size"},{default:p(()=>[...s[18]||(s[18]=[n("serial",-1)])]),_:1})]),a("li",null,[l(e,{href:"https://docs.ansible.com/ansible/latest/intro_configuration.html#forks"},{default:p(()=>[...s[19]||(s[19]=[n("forks",-1)])]),_:1})])]),s[43]||(s[43]=a("p",null,"这是由于在生产环境中如果你想逐一更新每一台主机的系统，你需要花相当一段时间去等待主机重启才能够继续下去。",-1)),a("p",null,[s[21]||(s[21]=n("有关 Ansible 进行自动化工作的更多用法，请查阅",-1)),l(e,{href:"https://opensource.com/tags/ansible"},{default:p(()=>[...s[20]||(s[20]=[n("其它文章",-1)])]),_:1}),s[22]||(s[22]=n("。",-1))]),s[44]||(s[44]=a("hr",null,null,-1)),a("p",null,[s[24]||(s[24]=n("via: ",-1)),l(e,{href:"https://opensource.com/article/18/3/ansible-patch-systems"},{default:p(()=>[...s[23]||(s[23]=[n("https://opensource.com/article/18/3/ansible-patch-systems",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("作者：",-1)),l(e,{href:"https://opensource.com/users/jlozadad"},{default:p(()=>[...s[25]||(s[25]=[n("Jonathan Lozada De La Matta",-1)])]),_:1}),s[29]||(s[29]=n(" 译者：",-1)),l(e,{href:"https://github.com/HankChow"},{default:p(()=>[...s[26]||(s[26]=[n("HankChow",-1)])]),_:1}),s[30]||(s[30]=n(" 校对：",-1)),l(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[27]||(s[27]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[33]||(s[33]=n("本文由 ",-1)),l(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[31]||(s[31]=[n("LCTT",-1)])]),_:1}),s[34]||(s[34]=n(" 原创编译，",-1)),l(e,{href:"https://linux.cn/"},{default:p(()=>[...s[32]||(s[32]=[n("Linux中国",-1)])]),_:1}),s[35]||(s[35]=n(" 荣誉推出",-1))])])}const C=i(u,[["render",m]]);export{x as __pageData,C as default};
