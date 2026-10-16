import{_ as l,a0 as t,w as o,s as d,I as a,x as n,a1 as p,A as i,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"使用 ansible-bender 構建容器鏡像 | LCTT x X-CMD","titleTemplate":false,"description":"使用 ansible-bender 構建容器鏡像 | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 ansible-bender 構建容器鏡像 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 ansible-bender 構建容器鏡像 | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20191023 Building container images with the ansible-bender tool","title":"使用 ansible-bender 構建容器鏡像","tag":"201910","desc":""},"relativePath":"201910/20191023 Building container images with the ansible-bender tool.md","filePath":"[post].md"}'),b={name:"201910/20191023 Building container images with the ansible-bender tool.md"};function c(g,s,u,h,f,k){const e=t("Link");return o(),d("div",null,[s[23]||(s[23]=a("h1",{id:"使用-ansible-bender-構建容器鏡像",tabindex:"-1"},[n("使用 ansible-bender 構建容器鏡像 "),a("a",{class:"header-anchor",href:"#使用-ansible-bender-構建容器鏡像","aria-label":"Permalink to “使用 ansible-bender 構建容器鏡像”"},"​")],-1)),s[24]||(s[24]=a("blockquote",null,[a("p",null,"瞭解如何使用 Ansible 在容器中執行命令。")],-1)),s[25]||(s[25]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201910/30/090738vzbifzfpa6qz9bij.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("容器和 ",-1)),p(e,{href:"https://www.ansible.com/"},{default:i(()=>[...s[0]||(s[0]=[n("Ansible",-1)])]),_:1}),s[2]||(s[2]=n(" 可以很好地融合在一起：從管理和編排到供應和構建。在本文中，我們將重點介紹構建部分。",-1))]),s[26]||(s[26]=r(`<p>如果你熟悉 Ansible，就會知道你可以編寫一系列任務，<code>ansible-playbook</code> 命令將為你執行這些任務。你知道嗎，如果你編寫 Dockerfile 並運行 <code>podman build</code>，你還可以在容器環境中執行此類命令，並獲得相同​​的結果。</p><p>這是一個例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>- name: Serve our file using httpd</span></span>
<span class="line"><span>  hosts: all</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>  - name: Install httpd</span></span>
<span class="line"><span>    package:</span></span>
<span class="line"><span>      name: httpd</span></span>
<span class="line"><span>      state: installed</span></span>
<span class="line"><span>  - name: Copy our file to httpd’s webroot</span></span>
<span class="line"><span>    copy:</span></span>
<span class="line"><span>      src: our-file.txt</span></span>
<span class="line"><span>      dest: /var/www/html/</span></span></code></pre></div><p>你可以在 Web 服務器本地或容器中執行這個劇本，並且只要你記得先創建 <code>our-file.txt</code>，它就可以工作。</p><p>但是這裏缺少了一些東西。你需要啓動（並配置）httpd 以便提供文件。這是容器構建和基礎架構供應之間的區別：構建鏡像時，你只需準備內容；而運行容器是另一項任務。另一方面，你可以將元數據附加到容器鏡像，它會默認運行命令。</p><p>這有個工具可以幫助。試試看 <code>ansible-bender</code> 怎麼樣？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ansible-bender build the-playbook.yaml fedora:30 our-httpd</span></span></code></pre></div><p>該腳本使用 <code>ansible-bender</code> 對 Fedora 30 容器鏡像執行該劇本，並將生成的容器鏡像命名為 <code>our-httpd</code>。</p><p>但是，當你運行該容器時，它不會啓動 httpd，因為它不知道如何操作。你可以通過向該劇本添加一些元數據來解決此問題：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>- name: Serve our file using httpd</span></span>
<span class="line"><span>  hosts: all</span></span>
<span class="line"><span>  vars:</span></span>
<span class="line"><span>    ansible_bender:</span></span>
<span class="line"><span>      base_image: fedora:30</span></span>
<span class="line"><span>      target_image:</span></span>
<span class="line"><span>        name: our-httpd</span></span>
<span class="line"><span>        cmd: httpd -DFOREGROUND</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>  - name: Install httpd</span></span>
<span class="line"><span>    package:</span></span>
<span class="line"><span>      name: httpd</span></span>
<span class="line"><span>      state: installed</span></span>
<span class="line"><span>  - name: Listen on all network interfaces.</span></span>
<span class="line"><span>    lineinfile:    </span></span>
<span class="line"><span>      path: /etc/httpd/conf/httpd.conf  </span></span>
<span class="line"><span>      regexp: &#39;^Listen &#39;</span></span>
<span class="line"><span>      line: Listen 0.0.0.0:80  </span></span>
<span class="line"><span>  - name: Copy our file to httpd’s webroot</span></span>
<span class="line"><span>    copy:</span></span>
<span class="line"><span>      src: our-file.txt</span></span>
<span class="line"><span>      dest: /var/www/html</span></span></code></pre></div><p>現在你可以構建鏡像（從這裏開始，請以 root 用户身份運行所有命令。目前，Buildah 和 Podman 不會為無 root 容器創建專用網絡）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ansible-bender build the-playbook.yaml</span></span>
<span class="line"><span>PLAY [Serve our file using httpd] ****************************************************</span></span>
<span class="line"><span>                                                                                                                                                                             </span></span>
<span class="line"><span>TASK [Gathering Facts] ***************************************************************    </span></span>
<span class="line"><span>ok: [our-httpd-20191004-131941266141-cont]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [Install httpd] *****************************************************************</span></span>
<span class="line"><span>loaded from cache: &#39;f053578ed2d47581307e9ba3f64f4b4da945579a082c6f99bd797635e62befd0&#39;</span></span>
<span class="line"><span>skipping: [our-httpd-20191004-131941266141-cont]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [Listen on all network interfaces.] *********************************************</span></span>
<span class="line"><span>changed: [our-httpd-20191004-131941266141-cont]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TASK [Copy our file to httpd’s webroot] **********************************************</span></span>
<span class="line"><span>changed: [our-httpd-20191004-131941266141-cont]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PLAY RECAP ***************************************************************************</span></span>
<span class="line"><span>our-httpd-20191004-131941266141-cont : ok=3    changed=2    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Getting image source signatures</span></span>
<span class="line"><span>Copying blob sha256:4650c04b851c62897e9c02c6041a0e3127f8253fafa3a09642552a8e77c044c8</span></span>
<span class="line"><span>Copying blob sha256:87b740bba596291af8e9d6d91e30a01d5eba9dd815b55895b8705a2acc3a825e</span></span>
<span class="line"><span>Copying blob sha256:82c21252bd87532e93e77498e3767ac2617aa9e578e32e4de09e87156b9189a0</span></span>
<span class="line"><span>Copying config sha256:44c6dc6dda1afe28892400c825de1c987c4641fd44fa5919a44cf0a94f58949f</span></span>
<span class="line"><span>Writing manifest to image destination</span></span>
<span class="line"><span>Storing signatures</span></span>
<span class="line"><span>44c6dc6dda1afe28892400c825de1c987c4641fd44fa5919a44cf0a94f58949f</span></span>
<span class="line"><span>Image &#39;our-httpd&#39; was built successfully \\o/</span></span></code></pre></div><p>鏡像構建完畢，可以運行容器了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># podman run our-httpd</span></span>
<span class="line"><span>AH00558: httpd: Could not reliably determine the server&#39;s fully qualified domain name, using 10.88.2.106. Set the &#39;ServerName&#39; directive globally to suppress this message</span></span></code></pre></div><p>是否提供文件了？首先，找出你容器的 IP：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># podman inspect -f &#39;{{ .NetworkSettings.IPAddress }}&#39; 7418570ba5a0</span></span>
<span class="line"><span>10.88.2.106</span></span></code></pre></div><p>你現在可以檢查了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://10.88.2.106/our-file.txt</span></span>
<span class="line"><span>Ansible is ❤</span></span></code></pre></div><p>你文件內容是什麼？</p>`,19)),a("p",null,[s[4]||(s[4]=n("這只是使用 Ansible 構建容器鏡像的介紹。如果你想了解有關 ",-1)),s[5]||(s[5]=a("code",null,"ansible-bender",-1)),s[6]||(s[6]=n(" 可以做什麼的更多信息，請查看它的 ",-1)),p(e,{href:"https://github.com/ansible-community/ansible-bender"},{default:i(()=>[...s[3]||(s[3]=[n("GitHub",-1)])]),_:1}),s[7]||(s[7]=n(" 頁面。構建快樂！",-1))]),s[27]||(s[27]=a("hr",null,null,-1)),a("p",null,[s[9]||(s[9]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/19/10/building-container-images-ansible"},{default:i(()=>[...s[8]||(s[8]=[n("https://opensource.com/article/19/10/building-container-images-ansible",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/tomastomecek"},{default:i(()=>[...s[10]||(s[10]=[n("Tomas Tomecek",-1)])]),_:1}),s[15]||(s[15]=n(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[11]||(s[11]=[n("lujun9972",-1)])]),_:1}),s[16]||(s[16]=n(" 譯者：",-1)),p(e,{href:"https://github.com/geekpi"},{default:i(()=>[...s[12]||(s[12]=[n("geekpi",-1)])]),_:1}),s[17]||(s[17]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[19]||(s[19]=[n("Linux中國",-1)])]),_:1}),s[22]||(s[22]=n(" 榮譽推出",-1))])])}const T=l(b,[["render",c]]);export{C as __pageData,T as default};
