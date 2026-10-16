import{_ as i,a0 as r,w as o,s as u,ao as l,I as a,a1 as p,A as t,x as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"用 Tekton 在 Kubernetes 中編寫你的第一條 CI/CD 流水線 | LCTT x X-CMD","titleTemplate":false,"description":"用 Tekton 在 Kubernetes 中編寫你的第一條 CI/CD 流水線 | LCTT (202304) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Tekton 在 Kubernetes 中編寫你的第一條 CI/CD 流水線 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Tekton 在 Kubernetes 中編寫你的第一條 CI/CD 流水線 | LCTT (202304) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202304/20211108 Write your first CI-CD pipeline in Kubernetes with Tekton","title":"用 Tekton 在 Kubernetes 中編寫你的第一條 CI/CD 流水線","tag":"202304","desc":""},"relativePath":"202304/20211108 Write your first CI-CD pipeline in Kubernetes with Tekton.md","filePath":"[post].md"}'),d={name:"202304/20211108 Write your first CI-CD pipeline in Kubernetes with Tekton.md"};function k(b,n,m,T,C,g){const e=r("Link");return o(),u("div",null,[n[46]||(n[46]=l('<h1 id="用-tekton-在-kubernetes-中編寫你的第一條-ci-cd-流水線" tabindex="-1">用 Tekton 在 Kubernetes 中編寫你的第一條 CI/CD 流水線 <a class="header-anchor" href="#用-tekton-在-kubernetes-中編寫你的第一條-ci-cd-流水線" aria-label="Permalink to “用 Tekton 在 Kubernetes 中編寫你的第一條 CI/CD 流水線”">​</a></h1><blockquote><p>Tekton 是一個用於創建持續集成和持續交付（CI/CD）系統的 Kubernetes 原生開源框架。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202304/01/180822blxgx0c1k43n4kl4.jpg" alt=""></p><p>Tekton 是一個用於創建持續集成和持續交付（CI/CD）系統的 Kubernetes 原生開源框架。通過對底層實施細節的抽象，它還可以幫助你在多個雲供應商或企業內部系統中進行端到端（構建、測試、部署）應用開發。</p><h3 id="tekton-介紹" tabindex="-1">Tekton 介紹 <a class="header-anchor" href="#tekton-介紹" aria-label="Permalink to “Tekton 介紹”">​</a></h3>',5)),a("p",null,[p(e,{href:"https://github.com/tektoncd/pipeline"},{default:t(()=>[...n[0]||(n[0]=[s("Tekton",-1)])]),_:1}),n[4]||(n[4]=s(" 最初被稱為 ",-1)),p(e,{href:"https://github.com/knative/build"},{default:t(()=>[...n[1]||(n[1]=[s("Knative Build",-1)])]),_:1}),n[5]||(n[5]=s("，後來被重組為獨立的開源項目，有自己的 ",-1)),p(e,{href:"https://cd.foundation/"},{default:t(()=>[...n[2]||(n[2]=[s("治理組織",-1)])]),_:1}),n[6]||(n[6]=s("，現在是屬於 ",-1)),p(e,{href:"https://www.linuxfoundation.org/projects/"},{default:t(()=>[...n[3]||(n[3]=[s("Linux 基金會",-1)])]),_:1}),n[7]||(n[7]=s(" 的項目。Tekton 提供了一個集羣內的容器鏡像構建和部署工作流程，換句話説，它是一個 ",-1)),n[8]||(n[8]=a("ruby",null,[s("持續集成"),a("rt",null,"continuous integration")],-1)),n[9]||(n[9]=s("（CI）和 ",-1)),n[10]||(n[10]=a("ruby",null,[s("持續交付"),a("rt",null,"continuous delivery")],-1)),n[11]||(n[11]=s("（CD）服務。它由 Tekton 流水線和幾個支持組件如 Tekton CLI、Triggers 和 Catalog 等組成。",-1))]),n[47]||(n[47]=a("p",null,"Tekton 是一個 Kubernetes 原生應用。它在 Kubernetes 集羣中作為擴展被安裝和運行，由一套Kubernetes 定製化資源組成，定義了你為流水線創建和複用的構建塊。由於 Tekton 是一種 Kubernetes 原生技術，所以它非常容易擴展。當你需要增加你的工作負載時，你只需向你的集羣添加節點就可以了。由於其可擴展的設計和社區貢獻的組件庫，它也很容易定製。",-1)),n[48]||(n[48]=a("p",null,"對於需要 CI/CD 系統來開展工作的開發人員，和為其組織內的開發人員建立 CI/CD 系統的平台工程師，Tekton 是理想選擇。",-1)),n[49]||(n[49]=a("h3",{id:"tekton-組件",tabindex:"-1"},[s("Tekton 組件 "),a("a",{class:"header-anchor",href:"#tekton-組件","aria-label":"Permalink to “Tekton 組件”"},"​")],-1)),n[50]||(n[50]=a("p",null,"構建 CI/CD 流水線的過程非常複雜，因此 Tekton 為每一步都提供工具。以下是 Tekton 提供的主要組件：",-1)),a("ul",null,[a("li",null,[n[13]||(n[13]=a("ruby",null,[s("流水線"),a("rt",null,"Pipeline")],-1)),n[14]||(n[14]=s("： 定義了一組 Kubernetes ",-1)),p(e,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},{default:t(()=>[...n[12]||(n[12]=[s("自定義資源",-1)])]),_:1}),n[15]||(n[15]=s("，作為你用來組裝 CI/CD 流水線的構建塊。",-1))]),n[20]||(n[20]=l("<li><ruby>觸發器<rt>Triggers</rt></ruby>：一種 Kubernetes 自定義資源，允許你根據從事件有效載荷中提取的信息來創建流水線。例如，你可以在每次創建 Git 倉庫的合併請求時，觸發流水線的實例化和執行。</li><li><ruby>命令列<rt>CLI</rt></ruby>：提供一個名為 <code>tkn</code> 的命令列界面，你可以使用它從終端與 Tekton 進行交互。</li><li><ruby>儀表盤<rt>Dashboard</rt></ruby>：是 Tekton 流水線的一個基於網頁的圖形界面，顯示流水線的執行信息。</li><li><ruby>目錄<rt>Catalog</rt></ruby>：是一個高質量的、由社區貢獻的 Tekton 構建塊（任務、流水線等），可在你自己的流水線中使用。</li><li><ruby>中心<rt>Hub</rt></ruby>：是一個基於網頁的圖形界面，用於訪問 Tekton 目錄。</li>",5)),a("li",null,[n[17]||(n[17]=a("ruby",null,[s("操作員"),a("rt",null,"Operator")],-1)),n[18]||(n[18]=s("：是一種 Kubernetes ",-1)),p(e,{href:"https://operatorhub.io/what-is-an-operator"},{default:t(()=>[...n[16]||(n[16]=[s("操作員模式",-1)])]),_:1}),n[19]||(n[19]=s("，你可以在 Kubernetes 集羣中安裝、更新、升級和刪除 Tekton 項目。",-1))]),n[21]||(n[21]=a("li",null,[a("ruby",null,[s("鏈"),a("rt",null,"Chains")]),s("：是一個 Kubernetes "),a("ruby",null,[s("自定義資源定義"),a("rt",null,"Custom Resource Definition")]),s("（CRD）控制器，使你可以在 Tekton 中處理供應鏈安全的問題。正在開發中。")],-1)),n[22]||(n[22]=a("li",null,[a("ruby",null,[s("結果"),a("rt",null,"Results")]),s("：旨在幫助用户對 CI/CD 工作負載歷史進行邏輯分組，並將長期結果的存儲從流水線控制器中分離出來。")],-1))]),n[51]||(n[51]=a("h3",{id:"tekton-術語",tabindex:"-1"},[s("Tekton 術語 "),a("a",{class:"header-anchor",href:"#tekton-術語","aria-label":"Permalink to “Tekton 術語”"},"​")],-1)),n[52]||(n[52]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/uploads/tekto-terminology.png",alt:"Tekton terminology",title:"Tekton terminology"})],-1)),a("ul",null,[n[29]||(n[29]=a("li",null,[a("ruby",null,[s("步驟"),a("rt",null,"Step")]),s("：是 CI/CD 工作流程中最基本的實體，例如為 Python 網絡應用程序運行一些單元測試或編譯一個 Java 程序。Tekton 使用容器鏡像執行每個步驟。")],-1)),a("li",null,[n[24]||(n[24]=a("ruby",null,[s("任務"),a("rt",null,"Task")],-1)),n[25]||(n[25]=s("：😗* 是按特定順序排列的步驟的集合。Tekton 以 ",-1)),p(e,{href:"https://kubebyexample.com/en/concept/pods"},{default:t(()=>[...n[23]||(n[23]=[s("Kubernetes 容器莢",-1)])]),_:1}),n[26]||(n[26]=s(" 的形式運行任務，其中每個步驟都成為 ",-1)),n[27]||(n[27]=a("ruby",null,[s("容器莢"),a("rt",null,"pod")],-1)),n[28]||(n[28]=s(" 中的一個運行容器。",-1))]),n[30]||(n[30]=a("li",null,[a("ruby",null,[s("流水線"),a("rt",null,"Pipelines")]),s("：是按特定順序排列的任務的集合。Tekton 把所有任務連接成一個 "),a("ruby",null,[s("有向無環圖"),a("rt",null,"directed acyclic graph")]),s("（DAG），並按順序執行圖。換句話説，它創建了一些 Kubernetes 容器莢，並確保每個容器莢按預期成功運行。")],-1))]),n[53]||(n[53]=l(`<p><img src="https://opensource.com/sites/default/files/uploads/tekton-pipelines.png" alt="Tekton pipelines" title="Tekton pipelines"></p><ul><li><ruby>流水線運行<rt>PipelineRun</rt></ruby>：顧名思義，是一條流水線的具體執行。</li><li><ruby>任務運行<rt>TaskRun</rt></ruby>：是一個任務的具體執行。你可以選擇在流水線外運行一次任務運行，可以通過它查看任務中每個步驟執行的具體情況。</li></ul><h3 id="創建你的-ci-cd-流水線" tabindex="-1">創建你的 CI/CD 流水線 <a class="header-anchor" href="#創建你的-ci-cd-流水線" aria-label="Permalink to “創建你的 CI/CD 流水線”">​</a></h3><p>開始使用 Tekton 的最簡單方法是自己編寫一個簡單的流水線。如果你每天都在使用 Kubernetes，那你可能對 YAML 很熟悉，這正是 Tekton 流水線的定義方式。下面是一個克隆代碼庫的簡單流水線的例子。</p><p>首先，創建一個 <code>task.yaml</code> 文件，用你喜歡的文本編輯器打開它。這個文件定義了你要執行的 <ruby>步驟<rt>Step</rt></ruby>。在這個例子中，就是克隆一個倉庫，所以我把這個步驟命名為 “clone”。該文件設置了一些環境變量，然後使用一個簡單的 shell 腳本來執行克隆。</p><p>接下來是 <ruby>任務<rt>Task</rt></ruby>。你可以把步驟看作是一個被任務調用的函數，而任務則設置步驟所需的參數和工作空間。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>apiVersion: tekton.dev/v1beta1</span></span>
<span class="line"><span>kind: Task</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span> name: git-clone</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span> workspaces:</span></span>
<span class="line"><span>   - name: output</span></span>
<span class="line"><span>     description: The git repo will be cloned onto the volume backing this Workspace.</span></span>
<span class="line"><span> params:</span></span>
<span class="line"><span>   - name: url</span></span>
<span class="line"><span>     description: Repository URL to clone from.</span></span>
<span class="line"><span>     type: string</span></span>
<span class="line"><span>   - name: revision</span></span>
<span class="line"><span>     description: Revision to checkout. (branch, tag, sha, ref, etc...)</span></span>
<span class="line"><span>     type: string</span></span>
<span class="line"><span>     default: &quot;&quot;</span></span>
<span class="line"><span> steps:</span></span>
<span class="line"><span>   - name: clone</span></span>
<span class="line"><span>     image: &quot;gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/git-init:v0.21.0&quot;</span></span>
<span class="line"><span>     env:</span></span>
<span class="line"><span>       - name: PARAM_URL</span></span>
<span class="line"><span>         value: $(params.url)</span></span>
<span class="line"><span>       - name: PARAM_REVISION</span></span>
<span class="line"><span>         value: $(params.revision)</span></span>
<span class="line"><span>       - name: WORKSPACE_OUTPUT_PATH</span></span>
<span class="line"><span>         value: $(workspaces.output.path)</span></span>
<span class="line"><span>     script: |</span></span>
<span class="line"><span>      #!/usr/bin/env sh</span></span>
<span class="line"><span>       set -eu</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       CHECKOUT_DIR=&quot;\${WORKSPACE_OUTPUT_PATH}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       /ko-app/git-init \\</span></span>
<span class="line"><span>         -url=&quot;\${PARAM_URL}&quot; \\</span></span>
<span class="line"><span>         -revision=&quot;\${PARAM_REVISION}&quot; \\</span></span>
<span class="line"><span>         -path=&quot;\${CHECKOUT_DIR}&quot;</span></span>
<span class="line"><span>       cd &quot;\${CHECKOUT_DIR}&quot;</span></span>
<span class="line"><span>       EXIT_CODE=&quot;$?&quot;</span></span>
<span class="line"><span>       if [ &quot;\${EXIT_CODE}&quot; != 0 ] ; then</span></span>
<span class="line"><span>         exit &quot;\${EXIT_CODE}&quot;</span></span>
<span class="line"><span>       fi</span></span>
<span class="line"><span>       # Verify clone is success by reading readme file.</span></span>
<span class="line"><span>       cat \${CHECKOUT_DIR}/README.md</span></span></code></pre></div><p>創建第二個文件 <code>pipeline.yaml</code>，並用你喜歡的文本編輯器打開它。這個文件通過設置諸如可以運行和處理任務的工作區等重要參數來定義流水線。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>apiVersion: tekton.dev/v1beta1</span></span>
<span class="line"><span>kind: Pipeline</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span> name: cat-branch-readme</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span> params:</span></span>
<span class="line"><span>   - name: repo-url</span></span>
<span class="line"><span>     type: string</span></span>
<span class="line"><span>     description: The git repository URL to clone from.</span></span>
<span class="line"><span>   - name: branch-name</span></span>
<span class="line"><span>     type: string</span></span>
<span class="line"><span>     description: The git branch to clone.</span></span>
<span class="line"><span> workspaces:</span></span>
<span class="line"><span>   - name: shared-data</span></span>
<span class="line"><span>     description: |</span></span>
<span class="line"><span>      This workspace will receive the cloned git repo and be passed</span></span>
<span class="line"><span>       to the next Task for the repo&#39;s README.md file to be read.</span></span>
<span class="line"><span> tasks:</span></span>
<span class="line"><span>   - name: fetch-repo</span></span>
<span class="line"><span>     taskRef:</span></span>
<span class="line"><span>       name: git-clone</span></span>
<span class="line"><span>     workspaces:</span></span>
<span class="line"><span>       - name: output</span></span>
<span class="line"><span>         workspace: shared-data</span></span>
<span class="line"><span>     params:</span></span>
<span class="line"><span>       - name: url</span></span>
<span class="line"><span>         value: $(params.repo-url)</span></span>
<span class="line"><span>       - name: revision</span></span>
<span class="line"><span>         value: $(params.branch-name)</span></span></code></pre></div><p>最後，創建一個 <code>pipelinerun.yaml</code> 文件，用喜歡的文本編輯器打開它。這個文件真正的運行流水線。它調用流水線中定義的參數（繼而調用任務文件中定義的任務）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>apiVersion: tekton.dev/v1beta1</span></span>
<span class="line"><span>kind: PipelineRun</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span> name: git-clone-checking-out-a-branch</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span> pipelineRef:</span></span>
<span class="line"><span>   name: cat-branch-readme</span></span>
<span class="line"><span> workspaces:</span></span>
<span class="line"><span>   - name: shared-data</span></span>
<span class="line"><span>     volumeClaimTemplate:</span></span>
<span class="line"><span>       spec:</span></span>
<span class="line"><span>         accessModes:</span></span>
<span class="line"><span>          - ReadWriteOnce</span></span>
<span class="line"><span>         resources:</span></span>
<span class="line"><span>           requests:</span></span>
<span class="line"><span>             storage: 1Gi</span></span>
<span class="line"><span> params:</span></span>
<span class="line"><span>   - name: repo-url</span></span>
<span class="line"><span>     value: &lt;https://github.com/tektoncd/pipeline.git&gt;</span></span>
<span class="line"><span>   - name: branch-name</span></span>
<span class="line"><span>     value: release-v0.12.x</span></span></code></pre></div><p>把不同工作分在不同的文件中的好處是，<code>git-clone</code> 任務可以在多條流水線中複用。</p><p>例如，假設你想為一個流水線項目做端到端的測試。你可以使用 <code>git-clone</code> 任務 <strong>來讓每一次測試都基於最新的代碼</strong>。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>只要你熟悉 Kubernetes，那 Tekton 對你來説就像其他 Kubernetes 原生應用一樣簡單。它有很多工具可以幫助你創建流水線並與之交互。如果你喜歡自動化，不妨試試 Tekton!</p><hr>`,16)),a("p",null,[n[32]||(n[32]=s("via: ",-1)),p(e,{href:"https://opensource.com/article/21/11/cicd-pipeline-kubernetes-tekton"},{default:t(()=>[...n[31]||(n[31]=[s("https://opensource.com/article/21/11/cicd-pipeline-kubernetes-tekton",-1)])]),_:1})]),a("p",null,[n[37]||(n[37]=s("作者：",-1)),p(e,{href:"https://opensource.com/users/savita-ashture"},{default:t(()=>[...n[33]||(n[33]=[s("Savita Ashture",-1)])]),_:1}),n[38]||(n[38]=s(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:t(()=>[...n[34]||(n[34]=[s("lujun9972",-1)])]),_:1}),n[39]||(n[39]=s(" 譯者：",-1)),p(e,{href:"https://github.com/lxbwolf"},{default:t(()=>[...n[35]||(n[35]=[s("lxbwolf",-1)])]),_:1}),n[40]||(n[40]=s(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:t(()=>[...n[36]||(n[36]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[43]||(n[43]=s("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...n[41]||(n[41]=[s("LCTT",-1)])]),_:1}),n[44]||(n[44]=s(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:t(()=>[...n[42]||(n[42]=[s("Linux中國",-1)])]),_:1}),n[45]||(n[45]=s(" 榮譽推出",-1))])])}const h=i(d,[["render",k]]);export{y as __pageData,h as default};
