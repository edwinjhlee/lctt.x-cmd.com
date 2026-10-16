import{_ as i,a0 as o,w as r,s as d,I as a,x as n,a1 as l,A as p,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"如何使用 Ansible 打補丁以及安裝應用 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Ansible 打補丁以及安裝應用 | LCTT (201805) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Ansible 打補丁以及安裝應用 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Ansible 打補丁以及安裝應用 | LCTT (201805) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201805/20180321 How to use Ansible to patch systems and install applications","title":"如何使用 Ansible 打補丁以及安裝應用","tag":"201805","desc":""},"relativePath":"201805/20180321 How to use Ansible to patch systems and install applications.md","filePath":"[post].md"}'),u={name:"201805/20180321 How to use Ansible to patch systems and install applications.md"};function m(b,s,g,c,f,k){const e=o("Link");return r(),d("div",null,[s[36]||(s[36]=a("h1",{id:"如何使用-ansible-打補丁以及安裝應用",tabindex:"-1"},[n("如何使用 Ansible 打補丁以及安裝應用 "),a("a",{class:"header-anchor",href:"#如何使用-ansible-打補丁以及安裝應用","aria-label":"Permalink to “如何使用 Ansible 打補丁以及安裝應用”"},"​")],-1)),s[37]||(s[37]=a("blockquote",null,[a("p",null,"使用 Ansible IT 自動化引擎節省更新的時間。")],-1)),s[38]||(s[38]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/tools_osyearbook2016_sysadmin_cc.png?itok=Y1AHCKI4",alt:""})],-1)),s[39]||(s[39]=a("p",null,"你有沒有想過，如何打補丁、重啓系統，然後繼續工作？",-1)),a("p",null,[s[1]||(s[1]=n("如果你的回答是肯定的，那就需要了解一下 ",-1)),l(e,{href:"https://www.ansible.com/overview/how-ansible-works"},{default:p(()=>[...s[0]||(s[0]=[n("Ansible",-1)])]),_:1}),s[2]||(s[2]=n(" 了。它是一個配置管理工具，對於一些複雜的有時候需要幾個小時才能完成的系統管理任務，又或者對安全性有比較高要求的時候，使用 Ansible 能夠大大簡化工作流程。",-1))]),s[40]||(s[40]=a("p",null,[n("以我作為系統管理員的經驗，打補丁是一項最有難度的工作。每次遇到"),a("ruby",null,[n("公共漏洞批露"),a("rt",null,"Common Vulnearbilities and Exposure")]),n("（CVE）通知或者"),a("ruby",null,[n("信息保障漏洞預警"),a("rt",null,"Information Assurance Vulnerability Alert")]),n("（IAVA）時都必須要高度關注安全漏洞，否則安全部門將會嚴肅追究自己的責任。")],-1)),a("p",null,[s[5]||(s[5]=n("使用 Ansible 可以通過運行",-1)),l(e,{href:"https://docs.ansible.com/ansible/latest/list_of_packaging_modules.html"},{default:p(()=>[...s[3]||(s[3]=[n("封裝模組",-1)])]),_:1}),s[6]||(s[6]=n("以縮短打補丁的時間，下面以 ",-1)),l(e,{href:"https://docs.ansible.com/ansible/latest/yum_module.html"},{default:p(()=>[...s[4]||(s[4]=[n("yum 模組",-1)])]),_:1}),s[7]||(s[7]=n("更新系統為例，使用 Ansible 可以執行安裝、更新、刪除、從其它地方安裝（例如持續集成/持續開發中的 ",-1)),s[8]||(s[8]=a("code",null,"rpmbuild",-1)),s[9]||(s[9]=n("）。以下是系統更新的任務：",-1))]),s[41]||(s[41]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  - name: update the system</span></span>
<span class="line"><span>    yum:</span></span>
<span class="line"><span>      name: &quot;*&quot;</span></span>
<span class="line"><span>      state: latest</span></span></code></pre></div><p>在第一行，我們給這個任務命名，這樣可以清楚 Ansible 的工作內容。第二行表示使用 <code>yum</code> 模組在CentOS虛擬機中執行更新操作。第三行 <code>name: &quot;*&quot;</code> 表示更新所有程序。最後一行 <code>state: latest</code> 表示更新到最新的 RPM。</p><p>系統更新結束之後，需要重新啓動並重新連接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  - name: restart system to reboot to newest kernel</span></span>
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
<span class="line"><span>      state: latest</span></span></code></pre></div><p><code>shell</code> 模組中的命令讓系統在 5 秒休眠之後重新啓動，我們使用 <code>sleep</code> 來保持連接不斷開，使用 <code>async</code> 設定最大等待時長以避免發生超時，<code>poll</code> 設置為 0 表示直接執行不需要等待執行結果。暫停 10 秒鐘以等待虛擬機恢復，使用 <code>wait_for_connection</code> 在虛擬機恢復連接後儘快連接。隨後由 <code>install epel-release</code> 任務檢查 RPM 的安裝情況。你可以對這個劇本執行多次來驗證它的冪等性，唯一會顯示造成影響的是重啓操作，因為我們使用了 <code>shell</code> 模組。如果不想造成實際的影響，可以在使用 <code>shell</code> 模組的時候 <code>changed_when: False</code>。</p>`,5)),a("p",null,[s[11]||(s[11]=n("現在我們已經知道如何對系統進行更新、重啓虛擬機、重新連接、安裝 RPM 包。下面我們通過 ",-1)),l(e,{href:"https://github.com/ansible/lightbulb/tree/master/examples/nginx-role"},{default:p(()=>[...s[10]||(s[10]=[n("Ansible Lightbulb",-1)])]),_:1}),s[12]||(s[12]=n(" 來安裝 NGINX:",-1))]),s[42]||(s[42]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  - name: Ensure nginx packages are present</span></span>
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
<span class="line"><span>    delay: 1</span></span></code></pre></div><p>以及用來重啓 nginx 服務的操作文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 安裝 nginx 的操作文件</span></span>
<span class="line"><span>  - name: restart-nginx-service</span></span>
<span class="line"><span>    service:</span></span>
<span class="line"><span>      name: nginx</span></span>
<span class="line"><span>      state: restarted</span></span></code></pre></div><p>在這個角色裏，我們使用 RPM 安裝了 <code>nginx</code>、<code>python-pip</code>、<code>python-devel</code>、<code>devel</code>，用 PIP 安裝了 <code>uwsgi</code>，接下來使用 <code>template</code> 模組複製 <code>nginx.conf</code> 和 <code>index.html</code> 以顯示頁面，並確保服務在系統啓動時啓動。然後就可以使用 <code>uri</code> 模組檢查到頁面的連接了。</p><p>這個是一個系統更新、系統重啓、安裝 RPM 包的劇本示例，後續可以繼續安裝 nginx，當然這裏可以替換成任何你想要的角色和應用程序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  - hosts: all</span></span>
<span class="line"><span>    roles:</span></span>
<span class="line"><span>      - centos-update</span></span>
<span class="line"><span>      - nginx-simple</span></span></code></pre></div><p>觀看演示視頻瞭解瞭解這個過程。</p>`,7)),a("p",null,[l(e,{href:"https://asciinema.org/a/166437/embed?"},{default:p(()=>[...s[13]||(s[13]=[n("demo",-1)])]),_:1})]),a("p",null,[s[15]||(s[15]=n("這只是關於如何更新系統、重啓以及後續工作的示例。簡單起見，我只添加了不帶",-1)),l(e,{href:"https://docs.ansible.com/ansible/latest/playbooks_variables.html"},{default:p(()=>[...s[14]||(s[14]=[n("變量",-1)])]),_:1}),s[16]||(s[16]=n("的包，當你在操作大量主機的時候，你就需要修改其中的一些設置了：",-1))]),a("ul",null,[a("li",null,[l(e,{href:"https://docs.ansible.com/ansible/latest/playbooks_async.html"},{default:p(()=>[...s[17]||(s[17]=[n("async & poll",-1)])]),_:1})]),a("li",null,[l(e,{href:"https://docs.ansible.com/ansible/latest/playbooks_delegation.html#rolling-update-batch-size"},{default:p(()=>[...s[18]||(s[18]=[n("serial",-1)])]),_:1})]),a("li",null,[l(e,{href:"https://docs.ansible.com/ansible/latest/intro_configuration.html#forks"},{default:p(()=>[...s[19]||(s[19]=[n("forks",-1)])]),_:1})])]),s[43]||(s[43]=a("p",null,"這是由於在生產環境中如果你想逐一更新每一台主機的系統，你需要花相當一段時間去等待主機重啓才能夠繼續下去。",-1)),a("p",null,[s[21]||(s[21]=n("有關 Ansible 進行自動化工作的更多用法，請查閲",-1)),l(e,{href:"https://opensource.com/tags/ansible"},{default:p(()=>[...s[20]||(s[20]=[n("其它文章",-1)])]),_:1}),s[22]||(s[22]=n("。",-1))]),s[44]||(s[44]=a("hr",null,null,-1)),a("p",null,[s[24]||(s[24]=n("via: ",-1)),l(e,{href:"https://opensource.com/article/18/3/ansible-patch-systems"},{default:p(()=>[...s[23]||(s[23]=[n("https://opensource.com/article/18/3/ansible-patch-systems",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("作者：",-1)),l(e,{href:"https://opensource.com/users/jlozadad"},{default:p(()=>[...s[25]||(s[25]=[n("Jonathan Lozada De La Matta",-1)])]),_:1}),s[29]||(s[29]=n(" 譯者：",-1)),l(e,{href:"https://github.com/HankChow"},{default:p(()=>[...s[26]||(s[26]=[n("HankChow",-1)])]),_:1}),s[30]||(s[30]=n(" 校對：",-1)),l(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[27]||(s[27]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[33]||(s[33]=n("本文由 ",-1)),l(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[31]||(s[31]=[n("LCTT",-1)])]),_:1}),s[34]||(s[34]=n(" 原創編譯，",-1)),l(e,{href:"https://linux.cn/"},{default:p(()=>[...s[32]||(s[32]=[n("Linux中國",-1)])]),_:1}),s[35]||(s[35]=n(" 榮譽推出",-1))])])}const C=i(u,[["render",m]]);export{x as __pageData,C as default};
