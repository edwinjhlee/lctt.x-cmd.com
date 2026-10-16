import{_ as l,a0 as o,w as r,s as u,I as a,x as s,a1 as p,A as i,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"在 Fedora CoreOS 上運行 GitHub Actions | LCTT x X-CMD","titleTemplate":false,"description":"在 Fedora CoreOS 上運行 GitHub Actions | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Fedora CoreOS 上運行 GitHub Actions | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Fedora CoreOS 上運行 GitHub Actions | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20210721 Run GitHub Actions on Fedora CoreOS","title":"在 Fedora CoreOS 上運行 GitHub Actions","tag":"202110","desc":""},"relativePath":"202110/20210721 Run GitHub Actions on Fedora CoreOS.md","filePath":"[post].md"}'),d={name:"202110/20210721 Run GitHub Actions on Fedora CoreOS.md"};function c(g,n,b,h,f,m){const e=o("Link");return r(),u("div",null,[n[46]||(n[46]=a("h1",{id:"在-fedora-coreos-上運行-github-actions",tabindex:"-1"},[s("在 Fedora CoreOS 上運行 GitHub Actions "),a("a",{class:"header-anchor",href:"#在-fedora-coreos-上運行-github-actions","aria-label":"Permalink to “在 Fedora CoreOS 上運行 GitHub Actions”"},"​")],-1)),n[47]||(n[47]=a("p",null,[a("img",{src:"https://fedoramagazine.org/wp-content/uploads/2021/07/modern-times-816x345.jpg",alt:""})],-1)),a("p",null,[p(e,{href:"https://docs.github.com/en/actions"},{default:i(()=>[...n[0]||(n[0]=[s("GitHub Actions",-1)])]),_:1}),n[2]||(n[2]=s(" 是一項為快速建立持續集成和交付（CI/CD）工作流程而提供的服務。這些工作流程在被稱為“",-1)),n[3]||(n[3]=a("ruby",null,[s("運行器"),a("rt",null,"runner")],-1)),n[4]||(n[4]=s("”的主機上運行。GitHub 提供的 ",-1)),p(e,{href:"https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners"},{default:i(()=>[...n[1]||(n[1]=[s("託管運行器",-1)])]),_:1}),n[5]||(n[5]=s(" 的操作系統的選擇是有限的（Windows Server、Ubuntu、MacOS）。",-1))]),a("p",null,[n[7]||(n[7]=s("另一個選擇是使用 ",-1)),p(e,{href:"https://docs.github.com/en/actions/hosting-your-own-runners"},{default:i(()=>[...n[6]||(n[6]=[s("自託管",-1)])]),_:1}),n[8]||(n[8]=s(" 的運行器，這讓倉庫管理員對運行器有更多控制。自託管的運行程序是專門為某個存儲庫或組織服務的。下面的文章介紹了使用 Fedora CoreOS 配置自託管運行程序的步驟。",-1))]),n[48]||(n[48]=a("h3",{id:"入門",tabindex:"-1"},[s("入門 "),a("a",{class:"header-anchor",href:"#入門","aria-label":"Permalink to “入門”"},"​")],-1)),n[49]||(n[49]=a("p",null,"Fedora CoreOS 是一個精簡的操作系統，旨在便於大規模的部署和維護。該操作系統會自動更新，並默認提供運行容器所需的工具。由於這些原因，Fedora CoreOS 是運行 CI/CD 工作流程的一個極佳選擇。",-1)),a("p",null,[n[11]||(n[11]=s("配置和配備 Fedora CoreOS 機器的第一步是生成一個 ",-1)),p(e,{href:"https://github.com/coreos/ignition"},{default:i(()=>[...n[9]||(n[9]=[s("Ignition",-1)])]),_:1}),n[12]||(n[12]=s(" 文件。",-1)),p(e,{href:"https://github.com/coreos/butane"},{default:i(()=>[...n[10]||(n[10]=[s("Butane",-1)])]),_:1}),n[13]||(n[13]=s(" 允許你使用更友好的格式（YAML）生成 Ignition 文件。",-1))]),n[50]||(n[50]=a("h4",{id:"配置一個-fedora-coreos-運行器",tabindex:"-1"},[s("配置一個 Fedora CoreOS 運行器 "),a("a",{class:"header-anchor",href:"#配置一個-fedora-coreos-運行器","aria-label":"Permalink to “配置一個 Fedora CoreOS 運行器”"},"​")],-1)),a("p",null,[n[15]||(n[15]=s("要在 Fedora CoreOS 上執行 GitHub Actions，託管主機需要用於註冊和運行該運行器的二進制文件和腳本。從 ",-1)),p(e,{href:"https://github.com/actions/runner"},{default:i(()=>[...n[14]||(n[14]=[s("Actions 運行器項目",-1)])]),_:1}),n[16]||(n[16]=s(" 下載二進制文件和腳本，並部署在 ",-1)),n[17]||(n[17]=a("code",null,"/usr/local/sbin/actions-runner",-1)),n[18]||(n[18]=s(" 下。",-1))]),n[51]||(n[51]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>version: &quot;1.3.0&quot;</span></span>
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
<span class="line"><span>        name: core</span></span></code></pre></div><h4 id="註冊和刪除令牌" tabindex="-1">註冊和刪除令牌 <a class="header-anchor" href="#註冊和刪除令牌" aria-label="Permalink to “註冊和刪除令牌”">​</a></h4><p>為一個項目配置運行器需要一個“<ruby>令牌<rt>token</rt></ruby>”。這可以防止在沒有正確權限的情況下從項目中註冊或刪除自託管的運行器。GitHub 提供的令牌有一個小時的過期時間。如果運行器在這個時間之後重新啓動，它將需要一個新的註冊令牌。</p><p>該令牌可能出問題，特別是在 Fedora CoreOS 自動更新時。更新過程希望託管主機在收到新數據後至少每隔幾周重啓一次。</p><p>幸運的是，可以使用 GitHub REST API 來獲取這些令牌，並在託管主機每次重啓時自動配置運行器。下面的 <code>manage-runner.sh</code> 腳本使用 API 來獲取令牌，刪除任何已經配置好的運行器，並用新的令牌註冊運行器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>/usr/local/sbin/actions-runner/config.sh --url https://github.com/cverna/fcos-actions-runner --token \${REGISTRATION_TOKEN} --labels fcos --unattended</span></span></code></pre></div>`,6)),a("p",null,[n[21]||(n[21]=s("上面的腳本使用了一些環境變量，包含 GitHub 用户名和用於驗證 REST API 請求的 ",-1)),a("ruby",null,[p(e,{href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"},{default:i(()=>[...n[19]||(n[19]=[s("個人訪問令牌",-1)])]),_:1}),n[20]||(n[20]=a("rt",null,"Personal Access Token",-1))]),n[22]||(n[22]=s("。個人訪問令牌需要存儲庫權限，以便成功檢索運行器的註冊和移除令牌。該令牌是安全敏感信息，所以最好將其存儲在一個具有更嚴格權限的不同文件中。在這個例子中，這個文件是 ",-1)),n[23]||(n[23]=a("code",null,"actions-runner",-1)),n[24]||(n[24]=s("。",-1))]),n[52]||(n[52]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>GITHUB_USER=&lt;user&gt;</span></span>
<span class="line"><span>GITHUB_REPO=&lt;repo&gt;</span></span>
<span class="line"><span>GITHUB_TOKEN=&lt;personal_access_token&gt;</span></span></code></pre></div><p>以下是創建這兩個文件 <code>manage-runner.sh</code> 和 <code>actions-runner</code> 的 Butane 片段。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>- path: /usr/local/sbin/actions-runner/manage-runner.sh</span></span>
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
<span class="line"><span>        name: core</span></span></code></pre></div><h3 id="在-fedora-coreos-上運行-actions" tabindex="-1">在 Fedora CoreOS 上運行 Actions <a class="header-anchor" href="#在-fedora-coreos-上運行-actions" aria-label="Permalink to “在 Fedora CoreOS 上運行 Actions”">​</a></h3><p>最後，創建用於配置和啓動運行器的 systemd 服務。在 Butane 配置文件中定義這些服務。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemd:</span></span>
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
<span class="line"><span>        WantedBy=multi-user.target</span></span></code></pre></div><p>這將創建兩個服務：<code>github-runner-configure.service</code>（在主機啓動完成後運行一次）和 <code>github-runner.service</code>（運行 Actions 運行器二進制文件並等待新的 CI/CD 作業）。</p><p>現在 Butane 配置已經完成，從中生成一個 Ignition 文件並配備一個 Fedora CoreOS Actions 運行器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ podman run -i --rm -v $PWD:/code:z --workdir /code quay.io/coreos/butane:release --pretty --strict --files-dir /code config.yaml -o config.ignition</span></span></code></pre></div>`,9)),a("p",null,[n[26]||(n[26]=s("一旦 Ignition 文件生成，它就可以用來在 ",-1)),p(e,{href:"https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/"},{default:i(()=>[...n[25]||(n[25]=[s("支持",-1)])]),_:1}),n[27]||(n[27]=s(" Fedora CoreOS 的平台上配備一個運行器。",-1))]),n[53]||(n[53]=t(`<h3 id="配置一個-action-來使用一個自託管的運行器" tabindex="-1">配置一個 Action 來使用一個自託管的運行器 <a class="header-anchor" href="#配置一個-action-來使用一個自託管的運行器" aria-label="Permalink to “配置一個 Action 來使用一個自託管的運行器”">​</a></h3><p>下面的測試 Action 工作流程將測試 FCOS 的自託管的運行器。在你的 git 存儲庫中創建以下文件 <code>.github/workflows/main.yml</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># This is a basic workflow to help you get started with Actions</span></span>
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
<span class="line"><span>        run: podman run --rm fedora-minimal:34 echo Hello World !</span></span></code></pre></div><p>請注意，<code>runs-on</code> 的配置被設置為使用標籤為 <code>fcos</code> 的運行器。</p>`,4)),a("p",null,[n[29]||(n[29]=s("本文介紹的代碼可以在 ",-1)),p(e,{href:"https://github.com/cverna/fcos-actions-runner"},{default:i(()=>[...n[28]||(n[28]=[s("這裏",-1)])]),_:1}),n[30]||(n[30]=s(" 中找到。",-1))]),n[54]||(n[54]=a("hr",null,null,-1)),a("p",null,[n[32]||(n[32]=s("via: ",-1)),p(e,{href:"https://fedoramagazine.org/run-github-actions-on-fedora-coreos/"},{default:i(()=>[...n[31]||(n[31]=[s("https://fedoramagazine.org/run-github-actions-on-fedora-coreos/",-1)])]),_:1})]),a("p",null,[n[37]||(n[37]=s("作者：",-1)),p(e,{href:"https://fedoramagazine.org/author/cverna/"},{default:i(()=>[...n[33]||(n[33]=[s("Clément Verna",-1)])]),_:1}),n[38]||(n[38]=s(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...n[34]||(n[34]=[s("lujun9972",-1)])]),_:1}),n[39]||(n[39]=s(" 譯者：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...n[35]||(n[35]=[s("wxy",-1)])]),_:1}),n[40]||(n[40]=s(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...n[36]||(n[36]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[43]||(n[43]=s("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[41]||(n[41]=[s("LCTT",-1)])]),_:1}),n[44]||(n[44]=s(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...n[42]||(n[42]=[s("Linux中國",-1)])]),_:1}),n[45]||(n[45]=s(" 榮譽推出",-1))])])}const S=l(d,[["render",c]]);export{T as __pageData,S as default};
