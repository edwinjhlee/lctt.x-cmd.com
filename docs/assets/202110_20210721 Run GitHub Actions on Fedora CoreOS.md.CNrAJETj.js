import{_ as l,a0 as o,w as r,s as u,I as a,x as s,a1 as p,A as i,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"在 Fedora CoreOS 上运行 GitHub Actions | LCTT x X-CMD","titleTemplate":false,"description":"在 Fedora CoreOS 上运行 GitHub Actions | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Fedora CoreOS 上运行 GitHub Actions | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Fedora CoreOS 上运行 GitHub Actions | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20210721 Run GitHub Actions on Fedora CoreOS","title":"在 Fedora CoreOS 上运行 GitHub Actions","tag":"202110","desc":""},"relativePath":"202110/20210721 Run GitHub Actions on Fedora CoreOS.md","filePath":"[post].md"}'),d={name:"202110/20210721 Run GitHub Actions on Fedora CoreOS.md"};function c(g,n,b,h,f,m){const e=o("Link");return r(),u("div",null,[n[46]||(n[46]=a("h1",{id:"在-fedora-coreos-上运行-github-actions",tabindex:"-1"},[s("在 Fedora CoreOS 上运行 GitHub Actions "),a("a",{class:"header-anchor",href:"#在-fedora-coreos-上运行-github-actions","aria-label":"Permalink to “在 Fedora CoreOS 上运行 GitHub Actions”"},"​")],-1)),n[47]||(n[47]=a("p",null,[a("img",{src:"https://fedoramagazine.org/wp-content/uploads/2021/07/modern-times-816x345.jpg",alt:""})],-1)),a("p",null,[p(e,{href:"https://docs.github.com/en/actions"},{default:i(()=>[...n[0]||(n[0]=[s("GitHub Actions",-1)])]),_:1}),n[2]||(n[2]=s(" 是一项为快速建立持续集成和交付（CI/CD）工作流程而提供的服务。这些工作流程在被称为“",-1)),n[3]||(n[3]=a("ruby",null,[s("运行器"),a("rt",null,"runner")],-1)),n[4]||(n[4]=s("”的主机上运行。GitHub 提供的 ",-1)),p(e,{href:"https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners"},{default:i(()=>[...n[1]||(n[1]=[s("托管运行器",-1)])]),_:1}),n[5]||(n[5]=s(" 的操作系统的选择是有限的（Windows Server、Ubuntu、MacOS）。",-1))]),a("p",null,[n[7]||(n[7]=s("另一个选择是使用 ",-1)),p(e,{href:"https://docs.github.com/en/actions/hosting-your-own-runners"},{default:i(()=>[...n[6]||(n[6]=[s("自托管",-1)])]),_:1}),n[8]||(n[8]=s(" 的运行器，这让仓库管理员对运行器有更多控制。自托管的运行程序是专门为某个存储库或组织服务的。下面的文章介绍了使用 Fedora CoreOS 配置自托管运行程序的步骤。",-1))]),n[48]||(n[48]=a("h3",{id:"入门",tabindex:"-1"},[s("入门 "),a("a",{class:"header-anchor",href:"#入门","aria-label":"Permalink to “入门”"},"​")],-1)),n[49]||(n[49]=a("p",null,"Fedora CoreOS 是一个精简的操作系统，旨在便于大规模的部署和维护。该操作系统会自动更新，并默认提供运行容器所需的工具。由于这些原因，Fedora CoreOS 是运行 CI/CD 工作流程的一个极佳选择。",-1)),a("p",null,[n[11]||(n[11]=s("配置和配备 Fedora CoreOS 机器的第一步是生成一个 ",-1)),p(e,{href:"https://github.com/coreos/ignition"},{default:i(()=>[...n[9]||(n[9]=[s("Ignition",-1)])]),_:1}),n[12]||(n[12]=s(" 文件。",-1)),p(e,{href:"https://github.com/coreos/butane"},{default:i(()=>[...n[10]||(n[10]=[s("Butane",-1)])]),_:1}),n[13]||(n[13]=s(" 允许你使用更友好的格式（YAML）生成 Ignition 文件。",-1))]),n[50]||(n[50]=a("h4",{id:"配置一个-fedora-coreos-运行器",tabindex:"-1"},[s("配置一个 Fedora CoreOS 运行器 "),a("a",{class:"header-anchor",href:"#配置一个-fedora-coreos-运行器","aria-label":"Permalink to “配置一个 Fedora CoreOS 运行器”"},"​")],-1)),a("p",null,[n[15]||(n[15]=s("要在 Fedora CoreOS 上执行 GitHub Actions，托管主机需要用于注册和运行该运行器的二进制文件和脚本。从 ",-1)),p(e,{href:"https://github.com/actions/runner"},{default:i(()=>[...n[14]||(n[14]=[s("Actions 运行器项目",-1)])]),_:1}),n[16]||(n[16]=s(" 下载二进制文件和脚本，并部署在 ",-1)),n[17]||(n[17]=a("code",null,"/usr/local/sbin/actions-runner",-1)),n[18]||(n[18]=s(" 下。",-1))]),n[51]||(n[51]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>version: &quot;1.3.0&quot;</span></span>
<span class="line"><span>variant: fcos</span></span>
<span class="line"><span>storage:</span></span>
<span class="line"><span>  directories:</span></span>
<span class="line"><span>    - path: /usr/local/sbin/actions-runner</span></span>
<span class="line"><span>      mode: 0755</span></span>
<span class="line"><span>      user:</span></span>
<span class="line"><span>        name: core</span></span>
<span class="line"><span>      group:</span></span>
<span class="line"><span>        name: core</span></span>
<span class="line"><span>  files:</span></span>
<span class="line"><span>    - path: /usr/local/sbin/actions-runner/actions-runner-linux.tar.gz</span></span>
<span class="line"><span>      overwrite: true</span></span>
<span class="line"><span>      contents:</span></span>
<span class="line"><span>        source: https://github.com/actions/runner/releases/download/v2.278.0/actions-runner-linux-x64-2.278.0.tar.gz</span></span>
<span class="line"><span>      mode: 0755</span></span>
<span class="line"><span>      user:</span></span>
<span class="line"><span>        name: core</span></span>
<span class="line"><span>      group:</span></span>
<span class="line"><span>        name: core</span></span></code></pre></div><h4 id="注册和删除令牌" tabindex="-1">注册和删除令牌 <a class="header-anchor" href="#注册和删除令牌" aria-label="Permalink to “注册和删除令牌”">​</a></h4><p>为一个项目配置运行器需要一个“<ruby>令牌<rt>token</rt></ruby>”。这可以防止在没有正确权限的情况下从项目中注册或删除自托管的运行器。GitHub 提供的令牌有一个小时的过期时间。如果运行器在这个时间之后重新启动，它将需要一个新的注册令牌。</p><p>该令牌可能出问题，特别是在 Fedora CoreOS 自动更新时。更新过程希望托管主机在收到新数据后至少每隔几周重启一次。</p><p>幸运的是，可以使用 GitHub REST API 来获取这些令牌，并在托管主机每次重启时自动配置运行器。下面的 <code>manage-runner.sh</code> 脚本使用 API 来获取令牌，删除任何已经配置好的运行器，并用新的令牌注册运行器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># Handles the Github Action runner configuration.</span></span>
<span class="line"><span># Remove and Registration token expires after 1 hour, if we want our runner</span></span>
<span class="line"><span># to work after a reboot (auto update) we need to refresh the tokens.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># First remove the runner with a fresh remove token</span></span>
<span class="line"><span>REMOVE_TOKEN=$(curl -u \${GITHUB_USER}:\${GITHUB_TOKEN} -X POST -H &quot;Accept: application/vnd.github.v3+json&quot; https://api.github.com/repos/\${GITHUB_USER}/\${GITHUB_REPO}/actions/runners/remove-token | jq -r &#39;.token&#39;)</span></span>
<span class="line"><span>/usr/local/sbin/actions-runner/config.sh remove --token \${REMOVE_TOKEN}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Then register the runner with a fresh registration token</span></span>
<span class="line"><span>REGISTRATION_TOKEN=$(curl -u \${GITHUB_USER}:\${GITHUB_TOKEN} -X POST -H &quot;Accept: application/vnd.github.v3+json&quot; https://api.github.com/repos/\${GITHUB_USER}/\${GITHUB_REPO}/actions/runners/registration-token | jq -r &#39;.token&#39;)</span></span>
<span class="line"><span>/usr/local/sbin/actions-runner/config.sh --url https://github.com/cverna/fcos-actions-runner --token \${REGISTRATION_TOKEN} --labels fcos --unattended</span></span></code></pre></div>`,6)),a("p",null,[n[21]||(n[21]=s("上面的脚本使用了一些环境变量，包含 GitHub 用户名和用于验证 REST API 请求的 ",-1)),a("ruby",null,[p(e,{href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"},{default:i(()=>[...n[19]||(n[19]=[s("个人访问令牌",-1)])]),_:1}),n[20]||(n[20]=a("rt",null,"Personal Access Token",-1))]),n[22]||(n[22]=s("。个人访问令牌需要存储库权限，以便成功检索运行器的注册和移除令牌。该令牌是安全敏感信息，所以最好将其存储在一个具有更严格权限的不同文件中。在这个例子中，这个文件是 ",-1)),n[23]||(n[23]=a("code",null,"actions-runner",-1)),n[24]||(n[24]=s("。",-1))]),n[52]||(n[52]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>GITHUB_USER=&lt;user&gt;</span></span>
<span class="line"><span>GITHUB_REPO=&lt;repo&gt;</span></span>
<span class="line"><span>GITHUB_TOKEN=&lt;personal_access_token&gt;</span></span></code></pre></div><p>以下是创建这两个文件 <code>manage-runner.sh</code> 和 <code>actions-runner</code> 的 Butane 片段。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>- path: /usr/local/sbin/actions-runner/manage-runner.sh</span></span>
<span class="line"><span>      contents:</span></span>
<span class="line"><span>        local: manage-runner.sh</span></span>
<span class="line"><span>      mode: 0755</span></span>
<span class="line"><span>      user:</span></span>
<span class="line"><span>        name: core</span></span>
<span class="line"><span>      group:</span></span>
<span class="line"><span>        name: core</span></span>
<span class="line"><span>    - path: /etc/actions-runner</span></span>
<span class="line"><span>      contents:</span></span>
<span class="line"><span>        local: actions-runner</span></span>
<span class="line"><span>      mode: 0700</span></span>
<span class="line"><span>      user:</span></span>
<span class="line"><span>        name: core</span></span>
<span class="line"><span>      group:</span></span>
<span class="line"><span>        name: core</span></span></code></pre></div><h3 id="在-fedora-coreos-上运行-actions" tabindex="-1">在 Fedora CoreOS 上运行 Actions <a class="header-anchor" href="#在-fedora-coreos-上运行-actions" aria-label="Permalink to “在 Fedora CoreOS 上运行 Actions”">​</a></h3><p>最后，创建用于配置和启动运行器的 systemd 服务。在 Butane 配置文件中定义这些服务。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemd:</span></span>
<span class="line"><span>  units:</span></span>
<span class="line"><span>    - name: github-runner-configure.service</span></span>
<span class="line"><span>      enabled: true</span></span>
<span class="line"><span>      contents: |</span></span>
<span class="line"><span>        [Unit]</span></span>
<span class="line"><span>        Description=Configure the github action runner for a repository</span></span>
<span class="line"><span>        After=network-online.target boot-complete.target</span></span>
<span class="line"><span>        Requires=boot-complete.target</span></span>
<span class="line"><span>        [Service]</span></span>
<span class="line"><span>        EnvironmentFile=/etc/actions-runner</span></span>
<span class="line"><span>        Type=oneshot</span></span>
<span class="line"><span>        RemainAfterExit=yes</span></span>
<span class="line"><span>        User=core</span></span>
<span class="line"><span>        WorkingDirectory=/usr/local/sbin/actions-runner</span></span>
<span class="line"><span>        ExecStartPre=tar xvf actions-runner-linux.tar.gz --no-same-owner</span></span>
<span class="line"><span>        ExecStart=/usr/local/sbin/actions-runner/manage-runner.sh</span></span>
<span class="line"><span>        [Install]</span></span>
<span class="line"><span>        WantedBy=multi-user.target</span></span>
<span class="line"><span>    - name: github-runner.service</span></span>
<span class="line"><span>      enabled: true</span></span>
<span class="line"><span>      contents: |</span></span>
<span class="line"><span>        [Unit]</span></span>
<span class="line"><span>        Description=Run the github action runner</span></span>
<span class="line"><span>        After=github-runner-configure.service</span></span>
<span class="line"><span>        [Service]</span></span>
<span class="line"><span>        WorkingDirectory=/usr/local/sbin/actions-runner</span></span>
<span class="line"><span>        User=core</span></span>
<span class="line"><span>        ExecStart=/usr/local/sbin/actions-runner/run.sh</span></span>
<span class="line"><span>        [Install]</span></span>
<span class="line"><span>        WantedBy=multi-user.target</span></span></code></pre></div><p>这将创建两个服务：<code>github-runner-configure.service</code>（在主机启动完成后运行一次）和 <code>github-runner.service</code>（运行 Actions 运行器二进制文件并等待新的 CI/CD 作业）。</p><p>现在 Butane 配置已经完成，从中生成一个 Ignition 文件并配备一个 Fedora CoreOS Actions 运行器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ podman run -i --rm -v $PWD:/code:z --workdir /code quay.io/coreos/butane:release --pretty --strict --files-dir /code config.yaml -o config.ignition</span></span></code></pre></div>`,9)),a("p",null,[n[26]||(n[26]=s("一旦 Ignition 文件生成，它就可以用来在 ",-1)),p(e,{href:"https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/"},{default:i(()=>[...n[25]||(n[25]=[s("支持",-1)])]),_:1}),n[27]||(n[27]=s(" Fedora CoreOS 的平台上配备一个运行器。",-1))]),n[53]||(n[53]=t(`<h3 id="配置一个-action-来使用一个自托管的运行器" tabindex="-1">配置一个 Action 来使用一个自托管的运行器 <a class="header-anchor" href="#配置一个-action-来使用一个自托管的运行器" aria-label="Permalink to “配置一个 Action 来使用一个自托管的运行器”">​</a></h3><p>下面的测试 Action 工作流程将测试 FCOS 的自托管的运行器。在你的 git 存储库中创建以下文件 <code>.github/workflows/main.yml</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># This is a basic workflow to help you get started with Actions</span></span>
<span class="line"><span></span></span>
<span class="line"><span>name: CI</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Controls when the action will run.</span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  # Triggers the workflow on push or pull request events but only for the main branch</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches: [ main ]</span></span>
<span class="line"><span>  pull_request:</span></span>
<span class="line"><span>    branches: [ main ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span>  workflow_dispatch:</span></span>
<span class="line"><span></span></span>
<span class="line"><span># A workflow run is made up of one or more jobs that can run sequentially or in parallel</span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  # This workflow contains a single job called &quot;build&quot;</span></span>
<span class="line"><span>  build:</span></span>
<span class="line"><span>    # The type of runner that the job will run on</span></span>
<span class="line"><span>    runs-on: fcos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Steps represent a sequence of tasks that will be executed as part of the job</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      # Runs a single command using the runners shell</span></span>
<span class="line"><span>      - name: Run a one-line script</span></span>
<span class="line"><span>        run: podman run --rm fedora-minimal:34 echo Hello World !</span></span></code></pre></div><p>请注意，<code>runs-on</code> 的配置被设置为使用标签为 <code>fcos</code> 的运行器。</p>`,4)),a("p",null,[n[29]||(n[29]=s("本文介绍的代码可以在 ",-1)),p(e,{href:"https://github.com/cverna/fcos-actions-runner"},{default:i(()=>[...n[28]||(n[28]=[s("这里",-1)])]),_:1}),n[30]||(n[30]=s(" 中找到。",-1))]),n[54]||(n[54]=a("hr",null,null,-1)),a("p",null,[n[32]||(n[32]=s("via: ",-1)),p(e,{href:"https://fedoramagazine.org/run-github-actions-on-fedora-coreos/"},{default:i(()=>[...n[31]||(n[31]=[s("https://fedoramagazine.org/run-github-actions-on-fedora-coreos/",-1)])]),_:1})]),a("p",null,[n[37]||(n[37]=s("作者：",-1)),p(e,{href:"https://fedoramagazine.org/author/cverna/"},{default:i(()=>[...n[33]||(n[33]=[s("Clément Verna",-1)])]),_:1}),n[38]||(n[38]=s(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...n[34]||(n[34]=[s("lujun9972",-1)])]),_:1}),n[39]||(n[39]=s(" 译者：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...n[35]||(n[35]=[s("wxy",-1)])]),_:1}),n[40]||(n[40]=s(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...n[36]||(n[36]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[43]||(n[43]=s("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[41]||(n[41]=[s("LCTT",-1)])]),_:1}),n[44]||(n[44]=s(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...n[42]||(n[42]=[s("Linux中国",-1)])]),_:1}),n[45]||(n[45]=s(" 荣誉推出",-1))])])}const S=l(d,[["render",c]]);export{T as __pageData,S as default};
