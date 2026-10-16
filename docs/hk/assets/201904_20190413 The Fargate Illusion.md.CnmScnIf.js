import{_ as i,a0 as o,w as r,s as u,I as a,x as n,a1 as e,A as t,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"破除對 AWS Fargate 的幻覺 | LCTT x X-CMD","titleTemplate":false,"description":"破除對 AWS Fargate 的幻覺 | LCTT (201904) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"破除對 AWS Fargate 的幻覺 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"破除對 AWS Fargate 的幻覺 | LCTT (201904) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201904/20190413 The Fargate Illusion","title":"破除對 AWS Fargate 的幻覺","tag":"201904","desc":""},"relativePath":"201904/20190413 The Fargate Illusion.md","filePath":"[post].md"}'),d={name:"201904/20190413 The Fargate Illusion.md"};function c(m,s,q,g,_,b){const p=o("Link");return r(),u("div",null,[s[62]||(s[62]=a("h1",{id:"破除對-aws-fargate-的幻覺",tabindex:"-1"},[n("破除對 AWS Fargate 的幻覺 "),a("a",{class:"header-anchor",href:"#破除對-aws-fargate-的幻覺","aria-label":"Permalink to “破除對 AWS Fargate 的幻覺”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("我在 $work 建立了一個基於 Kubernetes 的平台已經快一年了，而且有點像 Kubernetes 的佈道者了。真的，我認為這項技術太棒了。然而我並沒有對它的運營和維護的困難程度抱過什麼幻想。今年早些時候我讀了",-1)),e(p,{href:"https://matthias-endler.de/2019/maybe-you-dont-need-kubernetes/"},{default:t(()=>[...s[0]||(s[0]=[n("這樣",-1)])]),_:1}),s[2]||(s[2]=n("的一篇文章，並對其中某些觀點深以為然。如果我在一家規模較小的、有 10 到 15 個工程師的公司，假如有人建議管理和維護一批 Kubernetes 集羣，那我會感到害怕的，因為它的運維開銷太高了！",-1))]),s[63]||(s[63]=a("p",null,[n("儘管我現在對 Kubernetes 的一切都很感興趣，但我仍然對“"),a("ruby",null,[n("無服務器"),a("rt",null,"Serverless")]),n("”計算會消滅運維工程師的説法抱有好奇。這種好奇心主要來源於我希望在未來仍然能有一份有報酬的工作 —— 如果我們前景光明的未來不需要運維工程師，那我得明白到底是怎麼回事。我已經在 Lamdba 和Google Cloud Functions 上做了一些實驗，結果讓我印象十分深刻，但我仍然堅信無服務器解決方案只是解決了一部分問題。")],-1)),a("p",null,[s[4]||(s[4]=n("我關注 ",-1)),e(p,{href:"https://aws.amazon.com/fargate/"},{default:t(()=>[...s[3]||(s[3]=[n("AWS Fargate",-1)])]),_:1}),s[5]||(s[5]=n(" 已經有一段時間了，這就是 $work 的開發人員所推崇為“無服務器計算”的東西 —— 主要是因為 Fargate，用它你就可以無需管理底層節點而運行你的 Docker 容器。我想看看它到底意味着什麼，所以我開始嘗試從頭開始在 Fargate 上運行一個應用，看看是否可以成功。這裏我對成功的定義是一個與“生產級”應用程序相近的東西，我想應該包含以下內容：",-1))]),s[64]||(s[64]=l('<ul><li>一個在 Fargate 上運行的容器</li><li>配置信息以環境變量的形式下推</li><li>“秘密信息” 不能是明文的</li><li>位於負載均衡器之後</li><li>有效的 SSL 證書的 TLS 通道</li></ul><p>我以“基礎設施即代碼”的角度來開始整個任務，不遵循默認的 AWS 控制台嚮導，而是使用 terraform 來定義基礎架構。這很可能讓整個事情變得複雜，但我想確保任何部署都是可重現的，任何想要遵循此步驟的人都可發現我的結論。</p><p>上述所有標準通常都可以通過基於 Kubernetes 的平台使用一些外部的附加組件和插件來實現，所以我確實是以一種比較的心態來處理整個任務的，因為我要將它與我的常用工作流程進行比較。我的主要目標是看看Fargate 有多容易，特別是與 Kubernetes 相比時。結果讓我感到非常驚訝。</p><h3 id="aws-是有開銷的" tabindex="-1">AWS 是有開銷的 <a class="header-anchor" href="#aws-是有開銷的" aria-label="Permalink to “AWS 是有開銷的”">​</a></h3><p>我有一個乾淨的 AWS 賬户，並決定從零到部署一個 webapp。與 AWS 中的其它基礎設施一樣，我必須首先使基本的基礎設施正常工作起來，因此我需要先定義一個 VPC。</p><p>遵循最佳實踐，因此我將這個 VPC 劃分為跨可用區（AZ）的子網，一個公共子網和私有子網。這時我想到，只要這種設置基礎設施的需求存在，我就能找到一份這種工作。AWS 是&quot;免&quot;運維的這一概念一直讓我感到憤怒。開發者社區中的許多人理所當然地認為在設置和定義一個設計良好的 AWS 賬户和基礎設施是不需要付出多少工作和努力的。而這種想當然甚至發生在開始談論多帳户架構<em>之前</em>就有了——現在我仍然使用單一帳户，我已經必須定義好基礎設施和傳統的網絡設備。</p><p>這裏也值得記住，我已經做了很多次，所以我<em>很清楚</em>該做什麼。我可以在我的帳户中使用默認的 VPC 以及預先提供的子網，我覺得很多剛開始的人也可以使用它。這大概花了我半個小時才運行起來，但我不禁想到，即使我想運行 lambda 函數，我仍然需要某種連接和網絡。定義 NAT 網關和在 VPC 中路由根本不會讓你覺得很“Serverless”，但要往下進行這就是必須要做的。</p><h3 id="運行簡單的容器" tabindex="-1">運行簡單的容器 <a class="header-anchor" href="#運行簡單的容器" aria-label="Permalink to “運行簡單的容器”">​</a></h3>',8)),a("p",null,[s[7]||(s[7]=n("在我啓動運行了基本的基礎設施之後，現在我想讓我的 Docker 容器運行起來。我開始翻閲 Fargate 文檔並瀏覽 ",-1)),e(p,{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_GetStarted.html"},{default:t(()=>[...s[6]||(s[6]=[n("入門",-1)])]),_:1}),s[8]||(s[8]=n(" 文檔，這些就馬上就展現在了我面前：",-1))]),s[65]||(s[65]=a("p",null,[a("img",{src:"https://i.imgur.com/YfMyXBdl.png",alt:""})],-1)),s[66]||(s[66]=a("p",null,[n("等等，只是讓我的容器運行就至少要有"),a("strong",null,"三個"),n("步驟？這完全不像我所想的，不過還是讓我們開始吧。")],-1)),s[67]||(s[67]=a("h4",{id:"任務定義",tabindex:"-1"},[n("任務定義 "),a("a",{class:"header-anchor",href:"#任務定義","aria-label":"Permalink to “任務定義”"},"​")],-1)),a("p",null,[s[11]||(s[11]=n("“",-1)),s[12]||(s[12]=a("ruby",null,[n("任務定義"),a("rt",null,"Task Definition")],-1)),s[13]||(s[13]=n("”用來定義要運行的實際容器。我在這裏遇到的問題是，任務定義這件事非常複雜。這裏有很多選項都很簡單，比如指定 Docker 鏡像和內存限制，但我還必須定義一個網絡模型以及我並不熟悉的其它各種選項。真需要這樣嗎？如果我完全沒有 AWS 方面的知識就進入到這個過程裏，那麼在這個階段我會感覺非常的不知所措。可以在 AWS 頁面上找到這些 ",-1)),e(p,{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html"},{default:t(()=>[...s[9]||(s[9]=[n("參數",-1)])]),_:1}),s[14]||(s[14]=n(" 的完整列表，這個列表很長。我知道我的容器需要一些環境變量，它需要暴露一個端口。所以我首先在一個神奇的 ",-1)),e(p,{href:"https://github.com/cloudposse/terraform-aws-ecs-container-definition"},{default:t(()=>[...s[10]||(s[10]=[n("terraform 模組",-1)])]),_:1}),s[15]||(s[15]=n(" 的幫助下定義了這一點，這真的讓這件事更容易了。如果沒有這個模組，我就得手寫 JSON 來定義我的容器定義。",-1))]),s[68]||(s[68]=l(`<p>首先我定義了一些環境變量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>container_environment_variables = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name  = &quot;USER&quot;</span></span>
<span class="line"><span>      value = &quot;\${var.user}&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name  = &quot;PASSWORD&quot;</span></span>
<span class="line"><span>      value = &quot;\${var.password}&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>然後我使用上面提及的模組組成了任務定義：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>module &quot;container_definition_app&quot; {</span></span>
<span class="line"><span>  source  = &quot;cloudposse/ecs-container-definition/aws&quot;</span></span>
<span class="line"><span>  version = &quot;v0.7.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  container_name  = &quot;\${var.name}&quot;</span></span>
<span class="line"><span>  container_image = &quot;\${var.image}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  container_cpu                = &quot;\${var.ecs_task_cpu}&quot;</span></span>
<span class="line"><span>  container_memory             = &quot;\${var.ecs_task_memory}&quot;</span></span>
<span class="line"><span>  container_memory_reservation = &quot;\${var.container_memory_reservation}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  port_mappings = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      containerPort = &quot;\${var.app_port}&quot;</span></span>
<span class="line"><span>      hostPort      = &quot;\${var.app_port}&quot;</span></span>
<span class="line"><span>      protocol      = &quot;tcp&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  environment = &quot;\${local.container_environment_variables}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4)),a("p",null,[s[17]||(s[17]=n("在這一點上我非常困惑，我需要在這裏定義很多配置才能運行，而這時什麼都沒有開始呢，但這是必要的 —— 運行 Docker 容器肯定需要了解一些容器配置的知識。我 ",-1)),e(p,{href:"https://leebriggs.co.uk/blog/2018/05/08/kubernetes-config-mgmt.html"},{default:t(()=>[...s[16]||(s[16]=[n("之前寫過",-1)])]),_:1}),s[18]||(s[18]=n(" 關於 Kubernetes 和配置管理的問題的文章，在這裏似乎遇到了同樣的問題。",-1))]),s[69]||(s[69]=l(`<p>接下來，我在上面的模組中定義了任務定義（幸好從我這裏抽象出了所需的 JSON —— 如果我不得不手寫JSON，我可能已經放棄了）。</p><p>當我定義模組參數時，我突然意識到我漏掉了一些東西。我需要一個 IAM 角色！好吧，讓我來定義：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>resource &quot;aws_iam_role&quot; &quot;ecs_task_execution&quot; {</span></span>
<span class="line"><span>  name = &quot;\${var.name}-ecs_task_execution&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  assume_role_policy = &lt;&lt;EOF</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;Version&quot;: &quot;2008-10-17&quot;,</span></span>
<span class="line"><span>  &quot;Statement&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;Action&quot;: &quot;sts:AssumeRole&quot;,</span></span>
<span class="line"><span>      &quot;Principal&quot;: {</span></span>
<span class="line"><span>        &quot;Service&quot;: &quot;ecs-tasks.amazonaws.com&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;Effect&quot;: &quot;Allow&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;aws_iam_role_policy_attachment&quot; &quot;ecs_task_execution&quot; {</span></span>
<span class="line"><span>  count = &quot;\${length(var.policies_arn)}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  role       = &quot;\${aws_iam_role.ecs_task_execution.id}&quot;</span></span>
<span class="line"><span>  policy_arn = &quot;\${element(var.policies_arn, count.index)}&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這樣做是有意義的，我需要在 Kubernetes 中定義一個 RBAC 策略，所以在這裏我還未完全錯失或獲得任何東西。這時我開始覺得從 Kubernetes 的角度來看，這種感覺非常熟悉。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>resource &quot;aws_ecs_task_definition&quot; &quot;app&quot; {</span></span>
<span class="line"><span>  family                   = &quot;\${var.name}&quot;</span></span>
<span class="line"><span>  network_mode             = &quot;awsvpc&quot;</span></span>
<span class="line"><span>  requires_compatibilities = [&quot;FARGATE&quot;]</span></span>
<span class="line"><span>  cpu                      = &quot;\${var.ecs_task_cpu}&quot;</span></span>
<span class="line"><span>  memory                   = &quot;\${var.ecs_task_memory}&quot;</span></span>
<span class="line"><span>  execution_role_arn       = &quot;\${aws_iam_role.ecs_task_execution.arn}&quot;</span></span>
<span class="line"><span>  task_role_arn            = &quot;\${aws_iam_role.ecs_task_execution.arn}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  container_definitions    = &quot;\${module.container_definition_app.json}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>現在，為了運行起來我已經寫了很多行代碼，我閲讀了很多 ECS 文檔，我所做的就是定義一個任務定義。我還沒有讓這個東西運行起來。在這一點上，我真的很困惑這個基於 Kubernetes 的平台到底增值了什麼，但我繼續前行。</p><h4 id="服務" tabindex="-1">服務 <a class="header-anchor" href="#服務" aria-label="Permalink to “服務”">​</a></h4><p>服務，一定程度上是將容器如何暴露給外部，另外是如何定義它擁有的副本數量。我的第一個想法是“啊！這就像一個 Kubernetes 服務！”我開始着手映射端口等。這是我第一次在 terraform 上跑：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>resource &quot;aws_ecs_service&quot; &quot;app&quot; {</span></span>
<span class="line"><span>  name                               = &quot;\${var.name}&quot;</span></span>
<span class="line"><span>  cluster                            = &quot;\${module.ecs.this_ecs_cluster_id}&quot;</span></span>
<span class="line"><span>  task_definition                    = &quot;\${data.aws_ecs_task_definition.app.family}:\${max(aws_ecs_task_definition.app.revision, data.aws_ecs_task_definition.app.revision)}&quot;</span></span>
<span class="line"><span>  desired_count                      = &quot;\${var.ecs_service_desired_count}&quot;</span></span>
<span class="line"><span>  launch_type                        = &quot;FARGATE&quot;</span></span>
<span class="line"><span>  deployment_maximum_percent         = &quot;\${var.ecs_service_deployment_maximum_percent}&quot;</span></span>
<span class="line"><span>  deployment_minimum_healthy_percent = &quot;\${var.ecs_service_deployment_minimum_healthy_percent}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  network_configuration {</span></span>
<span class="line"><span>    subnets          = [&quot;\${values(local.private_subnets)}&quot;]</span></span>
<span class="line"><span>    security_groups  = [&quot;\${module.app.this_security_group_id}&quot;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>當我必須定義允許訪問所需端口的安全組時，我再次感到沮喪，當我這樣做了並將其插入到網絡配置中後，我就像被扇了一巴掌。</p><p>我還需要定義自己的負載均衡器？</p><p>什麼？</p><p>當然不是嗎？</p><h5 id="負載均衡器從未遠離" tabindex="-1">負載均衡器從未遠離 <a class="header-anchor" href="#負載均衡器從未遠離" aria-label="Permalink to “負載均衡器從未遠離”">​</a></h5>`,14)),a("p",null,[s[21]||(s[21]=n("老實説，我很滿意，我甚至不確定為什麼。我已經習慣了 Kubernetes 的服務和 Ingress 對象，我一心認為用 Kubernetes 將我的應用程序放到網上是多麼容易。當然，我們在 $work 花了幾個月的時間建立一個平台，以便更輕鬆。我是 ",-1)),e(p,{href:"https://github.com/kubernetes-incubator/external-dns"},{default:t(()=>[...s[19]||(s[19]=[n("external-dns",-1)])]),_:1}),s[22]||(s[22]=n(" 和 ",-1)),e(p,{href:"https://github.com/jetstack/cert-manager"},{default:t(()=>[...s[20]||(s[20]=[n("cert-manager",-1)])]),_:1}),s[23]||(s[23]=n(" 的重度用户，它們可以自動填充 Ingress 對象上的 DNS 條目並自動化 TLS 證書，我非常瞭解進行這些設置所需的工作，但老實説，我認為在 Fargate 上做這件事會更容易。我認識到 Fargate 並沒有聲稱自己是“如何運行應用程序”這件事的全部和最終目的，它只是抽象出節點管理，但我一直被告知這比 Kubernetes ",-1)),s[24]||(s[24]=a("em",null,"更加容易",-1)),s[25]||(s[25]=n("。我真的很驚訝。定義負載均衡器（即使你不想使用 Ingress 和 Ingress Controller）也是向 Kubernetes 部署服務的重要組成部分，我不得不在這裏再次做同樣的事情。這一切都讓人覺得如此熟悉。",-1))]),s[70]||(s[70]=l(`<p>我現在意識到我需要：</p><ul><li>一個負載均衡器</li><li>一個 TLS 證書</li><li>一個 DNS 名字</li></ul><p>所以我着手做了這些。我使用了一些流行的 terraform 模組，並做了這個：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Define a wildcard cert for my app</span></span>
<span class="line"><span>module &quot;acm&quot; {</span></span>
<span class="line"><span>  source  = &quot;terraform-aws-modules/acm/aws&quot;</span></span>
<span class="line"><span>  version = &quot;v1.1.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  create_certificate = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  domain_name = &quot;\${var.route53_zone_name}&quot;</span></span>
<span class="line"><span>  zone_id     = &quot;\${data.aws_route53_zone.this.id}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  subject_alternative_names = [</span></span>
<span class="line"><span>    &quot;*.\${var.route53_zone_name}&quot;,</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  tags = &quot;\${local.tags}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># Define my loadbalancer</span></span>
<span class="line"><span>resource &quot;aws_lb&quot; &quot;main&quot; {</span></span>
<span class="line"><span>  name            = &quot;\${var.name}&quot;</span></span>
<span class="line"><span>  subnets         = [ &quot;\${values(local.public_subnets)}&quot; ]</span></span>
<span class="line"><span>  security_groups = [&quot;\${module.alb_https_sg.this_security_group_id}&quot;, &quot;\${module.alb_http_sg.this_security_group_id}&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;aws_lb_target_group&quot; &quot;main&quot; {</span></span>
<span class="line"><span>  name        = &quot;\${var.name}&quot;</span></span>
<span class="line"><span>  port        = &quot;\${var.app_port}&quot;</span></span>
<span class="line"><span>  protocol    = &quot;HTTP&quot;</span></span>
<span class="line"><span>  vpc_id      = &quot;\${local.vpc_id}&quot;</span></span>
<span class="line"><span>  target_type = &quot;ip&quot;</span></span>
<span class="line"><span>  depends_on  = [ &quot;aws_lb.main&quot; ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Redirect all traffic from the ALB to the target group</span></span>
<span class="line"><span>resource &quot;aws_lb_listener&quot; &quot;main&quot; {</span></span>
<span class="line"><span>  load_balancer_arn = &quot;\${aws_lb.main.id}&quot;</span></span>
<span class="line"><span>  port              = &quot;80&quot;</span></span>
<span class="line"><span>  protocol          = &quot;HTTP&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  default_action {</span></span>
<span class="line"><span>    target_group_arn = &quot;\${aws_lb_target_group.main.id}&quot;</span></span>
<span class="line"><span>    type             = &quot;forward&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;aws_lb_listener&quot; &quot;main-tls&quot; {</span></span>
<span class="line"><span>  load_balancer_arn = &quot;\${aws_lb.main.id}&quot;</span></span>
<span class="line"><span>  port              = &quot;443&quot;</span></span>
<span class="line"><span>  protocol          = &quot;HTTPS&quot;</span></span>
<span class="line"><span>  certificate_arn   = &quot;\${module.acm.this_acm_certificate_arn}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  default_action {</span></span>
<span class="line"><span>    target_group_arn = &quot;\${aws_lb_target_group.main.id}&quot;</span></span>
<span class="line"><span>    type             = &quot;forward&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我必須承認，我在這裏搞砸了好幾次。我不得不在 AWS 控制台中四處翻弄，以弄清楚我做錯了什麼。這當然不是一個“輕鬆”的過程，而且我之前已經做過很多次了。老實説，在這一點上，Kubernetes 看起來對我很有啓發性，但我意識到這是因為我對它非常熟悉。幸運的是我能夠使用託管的 Kubernetes 平台（預裝了 external-dns 和 cert-manager），我真的很想知道我漏掉了 Fargate 什麼增值的地方。它真的感覺不那麼簡單。</p><p>經過一番折騰，我現在有一個可以工作的 ECS 服務。包括服務在內的最終定義如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>data &quot;aws_ecs_task_definition&quot; &quot;app&quot; {</span></span>
<span class="line"><span>  task_definition = &quot;\${var.name}&quot;</span></span>
<span class="line"><span>  depends_on      = [&quot;aws_ecs_task_definition.app&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;aws_ecs_service&quot; &quot;app&quot; {</span></span>
<span class="line"><span>  name                               = &quot;\${var.name}&quot;</span></span>
<span class="line"><span>  cluster                            = &quot;\${module.ecs.this_ecs_cluster_id}&quot;</span></span>
<span class="line"><span>  task_definition                    = &quot;\${data.aws_ecs_task_definition.app.family}:\${max(aws_ecs_task_definition.app.revision, data.aws_ecs_task_definition.app.revision)}&quot;</span></span>
<span class="line"><span>  desired_count                      = &quot;\${var.ecs_service_desired_count}&quot;</span></span>
<span class="line"><span>  launch_type                        = &quot;FARGATE&quot;</span></span>
<span class="line"><span>  deployment_maximum_percent         = &quot;\${var.ecs_service_deployment_maximum_percent}&quot;</span></span>
<span class="line"><span>  deployment_minimum_healthy_percent = &quot;\${var.ecs_service_deployment_minimum_healthy_percent}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  network_configuration {</span></span>
<span class="line"><span>    subnets          = [&quot;\${values(local.private_subnets)}&quot;]</span></span>
<span class="line"><span>    security_groups  = [&quot;\${module.app_sg.this_security_group_id}&quot;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  load_balancer {</span></span>
<span class="line"><span>    target_group_arn = &quot;\${aws_lb_target_group.main.id}&quot;</span></span>
<span class="line"><span>    container_name   = &quot;app&quot;</span></span>
<span class="line"><span>    container_port   = &quot;\${var.app_port}&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  depends_on = [</span></span>
<span class="line"><span>    &quot;aws_lb_listener.main&quot;,</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我覺得我已經接近完成了，但後來我記起了我只完成了最初的“入門”文檔中所需的 3 個步驟中的 2 個，我仍然需要定義 ECS 羣集。</p><h4 id="集羣" tabindex="-1">集羣 <a class="header-anchor" href="#集羣" aria-label="Permalink to “集羣”">​</a></h4>`,9)),a("p",null,[s[27]||(s[27]=n("感謝 ",-1)),e(p,{href:"https://github.com/terraform-aws-modules/terraform-aws-ecs"},{default:t(()=>[...s[26]||(s[26]=[n("定義模組",-1)])]),_:1}),s[28]||(s[28]=n("，定義要所有這些運行的集羣實際上非常簡單。",-1))]),s[71]||(s[71]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>module &quot;ecs&quot; {</span></span>
<span class="line"><span>  source  = &quot;terraform-aws-modules/ecs/aws&quot;</span></span>
<span class="line"><span>  version = &quot;v1.1.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  name = &quot;\${var.name}&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏讓我感到驚訝的是為什麼我必須定義一個集羣。作為一個相當熟悉 ECS 的人，你會覺得你需要一個集羣，但我試圖從一個必須經歷這個過程的新人的角度來考慮這一點 —— 對我來説，Fargate 標榜自己“ Serverless”而你仍需要定義集羣，這似乎很令人驚訝。當然這是一個小細節，但它確實盤旋在我的腦海裏。</p><h3 id="告訴我你的-secret" tabindex="-1">告訴我你的 Secret <a class="header-anchor" href="#告訴我你的-secret" aria-label="Permalink to “告訴我你的 Secret”">​</a></h3><p>在這個階段，我很高興我成功地運行了一些東西。然而，我的原始的成功標準缺少一些東西。如果我們回到任務定義那裏，你會記得我的應用程序有一個存放密碼的環境變量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>container_environment_variables = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name  = &quot;USER&quot;</span></span>
<span class="line"><span>      value = &quot;\${var.user}&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name  = &quot;PASSWORD&quot;</span></span>
<span class="line"><span>      value = &quot;\${var.password}&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div>`,5)),a("p",null,[s[30]||(s[30]=n("如果我在 AWS 控制台中查看我的任務定義，我的密碼就在那裏，明晃晃的明文。我希望不要這樣，所以我開始嘗試將其轉化為其他東西，類似於 ",-1)),e(p,{href:"https://kubernetes.io/docs/concepts/configuration/secret/"},{default:t(()=>[...s[29]||(s[29]=[n("Kubernetes 的Secrets管理",-1)])]),_:1}),s[31]||(s[31]=n("。",-1))]),s[72]||(s[72]=a("h4",{id:"aws-ssm",tabindex:"-1"},[n("AWS SSM "),a("a",{class:"header-anchor",href:"#aws-ssm","aria-label":"Permalink to “AWS SSM”"},"​")],-1)),a("p",null,[s[33]||(s[33]=n("Fargate / ECS 執行",-1)),s[34]||(s[34]=a("ruby",null,[n("secret 管理"),a("rt",null,"secret management")],-1)),s[35]||(s[35]=n("部分的方式是使用 ",-1)),e(p,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html"},{default:t(()=>[...s[32]||(s[32]=[n("AWS SSM",-1)])]),_:1}),s[36]||(s[36]=n("（此服務的全名是 AWS 系統管理器參數存儲庫 Systems Manager Parameter Store，但我不想使用這個名稱，因為坦率地説這個名字太愚蠢了）。",-1))]),a("p",null,[s[38]||(s[38]=n("AWS 文檔很好的",-1)),e(p,{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html"},{default:t(()=>[...s[37]||(s[37]=[n("涵蓋了這個內容",-1)])]),_:1}),s[39]||(s[39]=n("，因此我開始將其轉換為 terraform。",-1))]),s[73]||(s[73]=l(`<h5 id="指定秘密信息" tabindex="-1">指定秘密信息 <a class="header-anchor" href="#指定秘密信息" aria-label="Permalink to “指定秘密信息”">​</a></h5><p>首先，你必須定義一個參數併為其命名。在 terraform 中，它看起來像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>resource &quot;aws_ssm_parameter&quot; &quot;app_password&quot; {</span></span>
<span class="line"><span>  name  = &quot;\${var.app_password_param_name}&quot; # The name of the value in AWS SSM</span></span>
<span class="line"><span>  type  = &quot;SecureString&quot;</span></span>
<span class="line"><span>  value = &quot;\${var.app_password}&quot; # The actual value of the password, like correct-horse-battery-stable</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>顯然，這裏的關鍵部分是 “SecureString” 類型。這會使用默認的 AWS KMS 密鑰來加密數據，這對我來説並不是很直觀。這比 Kubernetes 的 Secret 管理具有巨大優勢，默認情況下，這些 Secret 在 etcd 中是不加密的。</p><p>然後我為 ECS 指定了另一個本地值映射，並將其作為 Secret 參數傳遞：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>container_secrets = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name      = &quot;PASSWORD&quot;</span></span>
<span class="line"><span>      valueFrom = &quot;\${var.app_password_param_name}&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module &quot;container_definition_app&quot; {</span></span>
<span class="line"><span>  source  = &quot;cloudposse/ecs-container-definition/aws&quot;</span></span>
<span class="line"><span>  version = &quot;v0.7.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  container_name  = &quot;\${var.name}&quot;</span></span>
<span class="line"><span>  container_image = &quot;\${var.image}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  container_cpu                = &quot;\${var.ecs_task_cpu}&quot;</span></span>
<span class="line"><span>  container_memory             = &quot;\${var.ecs_task_memory}&quot;</span></span>
<span class="line"><span>  container_memory_reservation = &quot;\${var.container_memory_reservation}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  port_mappings = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      containerPort = &quot;\${var.app_port}&quot;</span></span>
<span class="line"><span>      hostPort      = &quot;\${var.app_port}&quot;</span></span>
<span class="line"><span>      protocol      = &quot;tcp&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  environment = &quot;\${local.container_environment_variables}&quot;</span></span>
<span class="line"><span>  secrets     = &quot;\${local.container_secrets}&quot;</span></span></code></pre></div><h5 id="出了個問題" tabindex="-1">出了個問題 <a class="header-anchor" href="#出了個問題" aria-label="Permalink to “出了個問題”">​</a></h5><p>此刻，我重新部署了我的任務定義，並且非常困惑。為什麼任務沒有正確拉起？當新的任務定義（版本 8）可用時，我一直在控制台中看到正在運行的應用程序仍在使用先前的任務定義（版本 7）。解決這件事花費的時間比我預期的要長，但是在控制台的事件屏幕上，我注意到了 IAM 錯誤。我錯過了一個步驟，容器無法從 AWS SSM 中讀取 Secret 信息，因為它沒有正確的 IAM 權限。這是我第一次真正對整個這件事情感到沮喪。從用户體驗的角度來看，這裏的反饋非常<em>糟糕</em>。如果我沒有發覺的話，我會認為一切都很好，因為仍然有一個任務正在運行，我的應用程序仍然可以通過正確的 URL 訪問 —— 只不過是舊的配置而已。</p><p>在 Kubernetes 裏，我會清楚地看到 pod 定義中的錯誤。Fargate 可以確保我的應用不會停止，這絕對是太棒了，但作為一名運維，我需要一些關於發生了什麼的實際反饋。這真的不夠好。我真的希望 Fargate 團隊的人能夠讀到這篇文章，改善這種體驗。</p><h3 id="就這樣了" tabindex="-1">就這樣了 <a class="header-anchor" href="#就這樣了" aria-label="Permalink to “就這樣了”">​</a></h3><p>到這裏就結束了，我的應用程序正在運行，也符合我的所有標準。我確實意識到我做了一些改進，其中包括：</p><ul><li>定義一個 cloudwatch 日誌組，這樣我就可以正確地寫日誌了</li><li>添加了一個 route53 託管區域，使整個事情從 DNS 角度更容易自動化</li><li>修復並重新調整了 IAM 權限，這裏太寬泛了</li></ul>`,12)),a("p",null,[s[41]||(s[41]=n("但老實説，現在我想反思一下這段經歷。我寫了一個關於我的經歷的 ",-1)),e(p,{href:"https://twitter.com/briggsl/status/1116870900719030272"},{default:t(()=>[...s[40]||(s[40]=[n("推特會話",-1)])]),_:1}),s[42]||(s[42]=n("，然後花了其餘時間思考我在這裏的真實感受。",-1))]),s[74]||(s[74]=a("h3",{id:"代價",tabindex:"-1"},[n("代價 "),a("a",{class:"header-anchor",href:"#代價","aria-label":"Permalink to “代價”"},"​")],-1)),s[75]||(s[75]=a("p",null,[n("經過一夜的反思，我意識到無論你是使用 Fargate 還是 Kubernetes，這個過程都大致相同。最讓我感到驚訝的是，儘管我經常聽説 Fargate “更容易”，但我真的沒有看到任何超過 Kubernetes 平台的好處。現在，如果你正在構建 Kubernetes 集羣，我絕對可以看到這裏的價值 —— 管理節點和控制面板只是不必要的開銷，問題是 —— 基於 Kubernetes 的平台的大多數消費者都"),a("em",null,"沒有"),n("這樣做。如果你很幸運能夠使用 GKE，你幾乎不需要考慮集羣的管理，你可以使用單個 "),a("code",null,"gcloud"),n(" 命令來運行集羣。我經常使用 Digital Ocean 的 Kubernetes 託管服務，我可以肯定地説它就像操作 Fargate 集羣一樣簡單，實際上在某種程度上它更容易。")],-1)),a("p",null,[s[44]||(s[44]=n("必須定義一些基礎設施來運行你的容器就是此時的代價。谷歌本週可能剛剛使用他們的 ",-1)),e(p,{href:"https://cloud.google.com/run/"},{default:t(()=>[...s[43]||(s[43]=[n("Google Cloud Run",-1)])]),_:1}),s[45]||(s[45]=n(" 產品改變了遊戲規則，但他們在這一領域的領先優勢遠遠領先於其他所有人。",-1))]),s[76]||(s[76]=l('<p>從這整個經歷中，我可以肯定的説：<em>大規模運行容器仍然很難。</em>它需要思考，需要領域知識，需要運維和開發人員之間的協作。它還需要一個基礎來構建 —— 任何基於 AWS 的操作都需要事先定義和運行一些基礎架構。我對一些公司似乎渴望的 “NoOps” 概念非常感興趣。我想如果你正在運行一個無狀態應用程序，你可以把它全部放在一個 lambda 函數和一個 API 網關中，這可能不錯，但我們是否真的適合在任何一種企業環境中這樣做？我真的不這麼認為。</p><h4 id="公平比較" tabindex="-1">公平比較 <a class="header-anchor" href="#公平比較" aria-label="Permalink to “公平比較”">​</a></h4><p>令我印象深刻的另一個現實是，技術 A 和技術 B 之間的比較通常不太公平，我經常在 AWS 上看到這一點。這種實際情況往往與 Jeff Barr Blog文章截然不同。如果你是一家足夠小的公司，你可以使用 AWS 控制台在 AWS 中部署你的應用程序並接受所有默認值，這絕對更容易。但是，我不想使用默認值，因為默認值幾乎是不適用於生產環境的。一旦你開始剝離掉雲服務商服務的層面，你就會開始意識到最終你仍然是在運行軟件 —— 它仍然需要設計良好、部署良好、運行良好。我相信 AWS 和 Kubernetes 以及所有其他雲服務商的增值服務使得它更容易運行、設計和操作，但它絕對不是免費的。</p><h4 id="kubernetes-的爭議" tabindex="-1">Kubernetes 的爭議 <a class="header-anchor" href="#kubernetes-的爭議" aria-label="Permalink to “Kubernetes 的爭議”">​</a></h4><p>最後就是：如果你將 Kubernetes 純粹視為一個容器編排工具，你可能會喜歡 Fargate。然而，隨着我對 Kubernetes 越來越熟悉，我開始意識到它作為一種技術的重要性 —— 不僅因為它是一個偉大的容器編排工具，而且因為它的設計模式 —— 它是聲明性的、API 驅動的平台。 在<em>整個</em> Fargate 過程期間發生的一個簡單的事情是，如果我刪除這裏某個東西，Fargate 不一定會為我重新創建它。自動縮放很不錯，不需要管理服務器和操作系統的補丁及更新也很棒，但我覺得因為無法使用 Kubernetes 自我修復和 API 驅動模型而失去了很多。當然，Kubernetes 有一個學習曲線，但從這裏的體驗來看，Fargate 也是如此。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>儘管我在這個過程中遭遇了困惑，但我確實很喜歡這種體驗。我仍然相信 Fargate 是一項出色的技術，AWS 團隊對 ECS/Fargate 所做的工作確實非常出色。然而，我的觀點是，這絕對不比 Kubernetes “更容易”，只是……難點不同。</p><p>在生產環境中運行容器時出現的問題大致相同。如果你從這篇文章中有所收穫，它應該是這樣的：<em>不管你選擇的哪種方式都有運維開銷</em>。不要相信你選擇一些東西你的世界就變得更輕鬆。我個人的意見是：如果你有一個運維團隊，而你的公司要為多個應用程序團隊部署容器 —— 選擇一種技術並圍繞它構建流程和工具以使其更容易。</p><p>人們説的一點肯定沒錯，用點技巧可以更容易地使用某種技術。在這個階段，談到 Fargate，下面的漫畫這總結了我的感受：</p><p><img src="https://i.imgur.com/Bx7Q50Jl.jpg" alt=""></p><hr>',11)),a("p",null,[s[47]||(s[47]=n("via: ",-1)),e(p,{href:"https://leebriggs.co.uk/blog/2019/04/13/the-fargate-illusion.html"},{default:t(()=>[...s[46]||(s[46]=[n("https://leebriggs.co.uk/blog/2019/04/13/the-fargate-illusion.html",-1)])]),_:1})]),a("p",null,[s[52]||(s[52]=n("作者：",-1)),e(p,{href:"https://leebriggs.co.uk/"},{default:t(()=>[...s[48]||(s[48]=[n("Lee Briggs",-1)])]),_:1}),s[53]||(s[53]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[49]||(s[49]=[n("lujun9972",-1)])]),_:1}),s[54]||(s[54]=n(" 譯者：",-1)),e(p,{href:"https://github.com/Bestony"},{default:t(()=>[...s[50]||(s[50]=[n("Bestony",-1)])]),_:1}),s[55]||(s[55]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[51]||(s[51]=[n("wxy",-1)])]),_:1}),s[56]||(s[56]=n(", 臨石（阿里雲智能技術專家）",-1))]),a("p",null,[s[59]||(s[59]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[57]||(s[57]=[n("LCTT",-1)])]),_:1}),s[60]||(s[60]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:t(()=>[...s[58]||(s[58]=[n("Linux中國",-1)])]),_:1}),s[61]||(s[61]=n(" 榮譽推出",-1))])])}const v=i(d,[["render",c]]);export{h as __pageData,v as default};
