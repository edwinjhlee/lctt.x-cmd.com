import{_ as t,W as i,s as o,u as d,I as a,ah as r,w as n,Z as e,A as l}from"./chunks/framework.B4JzB-Td.js";import"./chunks/theme.Xs8fIzCW.js";const C=JSON.parse('{"title":"使用 ansible-bender 构建容器镜像 | LCTT x X-CMD","titleTemplate":false,"description":"使用 ansible-bender 构建容器镜像 | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-blog","head":[["meta",{"name":"og:title","content":"使用 ansible-bender 构建容器镜像 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 ansible-bender 构建容器镜像 | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20191023 Building container images with the ansible-bender tool","title":"使用 ansible-bender 构建容器镜像","tag":"201910"},"relativePath":"201910/20191023 Building container images with the ansible-bender tool.md","filePath":"[post].md"}'),c={name:"201910/20191023 Building container images with the ansible-bender tool.md"};function b(u,s,g,m,h,f){const p=i("Link");return d(),o("div",null,[s[23]||(s[23]=a("h1",{id:"使用-ansible-bender-构建容器镜像",tabindex:"-1"},[n("使用 ansible-bender 构建容器镜像 "),a("a",{class:"header-anchor",href:"#使用-ansible-bender-构建容器镜像","aria-label":"Permalink to 使用 ansible-bender 构建容器镜像"},"​")],-1)),s[24]||(s[24]=a("blockquote",null,[a("p",null,"了解如何使用 Ansible 在容器中执行命令。")],-1)),s[25]||(s[25]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201910/30/090738vzbifzfpa6qz9bij.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("容器和 ")),e(p,{href:"https://www.ansible.com/"},{default:l(()=>s[0]||(s[0]=[n("Ansible")])),_:1}),s[2]||(s[2]=n(" 可以很好地融合在一起：从管理和编排到供应和构建。在本文中，我们将重点介绍构建部分。"))]),s[26]||(s[26]=r(`<p>如果你熟悉 Ansible，就会知道你可以编写一系列任务，<code>ansible-playbook</code> 命令将为你执行这些任务。你知道吗，如果你编写 Dockerfile 并运行 <code>podman build</code>，你还可以在容器环境中执行此类命令，并获得相同​​的结果。</p><p>这是一个例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- name: Serve our file using httpd</span></span>
<span class="line"><span>  hosts: all</span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span>  - name: Install httpd</span></span>
<span class="line"><span>    package:</span></span>
<span class="line"><span>      name: httpd</span></span>
<span class="line"><span>      state: installed</span></span>
<span class="line"><span>  - name: Copy our file to httpd’s webroot</span></span>
<span class="line"><span>    copy:</span></span>
<span class="line"><span>      src: our-file.txt</span></span>
<span class="line"><span>      dest: /var/www/html/</span></span></code></pre></div><p>你可以在 Web 服务器本地或容器中执行这个剧本，并且只要你记得先创建 <code>our-file.txt</code>，它就可以工作。</p><p>但是这里缺少了一些东西。你需要启动（并配置）httpd 以便提供文件。这是容器构建和基础架构供应之间的区别：构建镜像时，你只需准备内容；而运行容器是另一项任务。另一方面，你可以将元数据附加到容器镜像，它会默认运行命令。</p><p>这有个工具可以帮助。试试看 <code>ansible-bender</code> 怎么样？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ ansible-bender build the-playbook.yaml fedora:30 our-httpd</span></span></code></pre></div><p>该脚本使用 <code>ansible-bender</code> 对 Fedora 30 容器镜像执行该剧本，并将生成的容器镜像命名为 <code>our-httpd</code>。</p><p>但是，当你运行该容器时，它不会启动 httpd，因为它不知道如何操作。你可以通过向该剧本添加一些元数据来解决此问题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- name: Serve our file using httpd</span></span>
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
<span class="line"><span>      dest: /var/www/html</span></span></code></pre></div><p>现在你可以构建镜像（从这里开始，请以 root 用户身份运行所有命令。目前，Buildah 和 Podman 不会为无 root 容器创建专用网络）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># ansible-bender build the-playbook.yaml</span></span>
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
<span class="line"><span>Image &#39;our-httpd&#39; was built successfully \\o/</span></span></code></pre></div><p>镜像构建完毕，可以运行容器了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># podman run our-httpd</span></span>
<span class="line"><span>AH00558: httpd: Could not reliably determine the server&#39;s fully qualified domain name, using 10.88.2.106. Set the &#39;ServerName&#39; directive globally to suppress this message</span></span></code></pre></div><p>是否提供文件了？首先，找出你容器的 IP：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># podman inspect -f &#39;{{ .NetworkSettings.IPAddress }}&#39; 7418570ba5a0</span></span>
<span class="line"><span>10.88.2.106</span></span></code></pre></div><p>你现在可以检查了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ curl http://10.88.2.106/our-file.txt</span></span>
<span class="line"><span>Ansible is ❤</span></span></code></pre></div><p>你文件内容是什么？</p>`,19)),a("p",null,[s[4]||(s[4]=n("这只是使用 Ansible 构建容器镜像的介绍。如果你想了解有关 ")),s[5]||(s[5]=a("code",null,"ansible-bender",-1)),s[6]||(s[6]=n(" 可以做什么的更多信息，请查看它的 ")),e(p,{href:"https://github.com/ansible-community/ansible-bender"},{default:l(()=>s[3]||(s[3]=[n("GitHub")])),_:1}),s[7]||(s[7]=n(" 页面。构建快乐！"))]),s[27]||(s[27]=a("hr",null,null,-1)),a("p",null,[s[9]||(s[9]=n("via: ")),e(p,{href:"https://opensource.com/article/19/10/building-container-images-ansible"},{default:l(()=>s[8]||(s[8]=[n("https://opensource.com/article/19/10/building-container-images-ansible")])),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：")),e(p,{href:"https://opensource.com/users/tomastomecek"},{default:l(()=>s[10]||(s[10]=[n("Tomas Tomecek")])),_:1}),s[15]||(s[15]=n(" 选题：")),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>s[11]||(s[11]=[n("lujun9972")])),_:1}),s[16]||(s[16]=n(" 译者：")),e(p,{href:"https://github.com/geekpi"},{default:l(()=>s[12]||(s[12]=[n("geekpi")])),_:1}),s[17]||(s[17]=n(" 校对：")),e(p,{href:"https://github.com/wxy"},{default:l(()=>s[13]||(s[13]=[n("wxy")])),_:1})]),a("p",null,[s[20]||(s[20]=n("本文由 ")),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>s[18]||(s[18]=[n("LCTT")])),_:1}),s[21]||(s[21]=n(" 原创编译，")),e(p,{href:"https://linux.cn/"},{default:l(()=>s[19]||(s[19]=[n("Linux中国")])),_:1}),s[22]||(s[22]=n(" 荣誉推出"))])])}const y=t(c,[["render",b]]);export{C as __pageData,y as default};
