import{_ as i,a0 as o,w as r,s as u,I as a,x as n,a1 as e,A as t,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const h=JSON.parse('{"title":"破除对 AWS Fargate 的幻觉 | LCTT x X-CMD","titleTemplate":false,"description":"破除对 AWS Fargate 的幻觉 | LCTT (201904) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"破除对 AWS Fargate 的幻觉 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"破除对 AWS Fargate 的幻觉 | LCTT (201904) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201904/20190413 The Fargate Illusion","title":"破除对 AWS Fargate 的幻觉","tag":"201904","desc":""},"relativePath":"201904/20190413 The Fargate Illusion.md","filePath":"[post].md"}'),d={name:"201904/20190413 The Fargate Illusion.md"};function c(m,s,q,g,_,b){const p=o("Link");return r(),u("div",null,[s[62]||(s[62]=a("h1",{id:"破除对-aws-fargate-的幻觉",tabindex:"-1"},[n("破除对 AWS Fargate 的幻觉 "),a("a",{class:"header-anchor",href:"#破除对-aws-fargate-的幻觉","aria-label":"Permalink to “破除对 AWS Fargate 的幻觉”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("我在 $work 建立了一个基于 Kubernetes 的平台已经快一年了，而且有点像 Kubernetes 的布道者了。真的，我认为这项技术太棒了。然而我并没有对它的运营和维护的困难程度抱过什么幻想。今年早些时候我读了",-1)),e(p,{href:"https://matthias-endler.de/2019/maybe-you-dont-need-kubernetes/"},{default:t(()=>[...s[0]||(s[0]=[n("这样",-1)])]),_:1}),s[2]||(s[2]=n("的一篇文章，并对其中某些观点深以为然。如果我在一家规模较小的、有 10 到 15 个工程师的公司，假如有人建议管理和维护一批 Kubernetes 集群，那我会感到害怕的，因为它的运维开销太高了！",-1))]),s[63]||(s[63]=a("p",null,[n("尽管我现在对 Kubernetes 的一切都很感兴趣，但我仍然对“"),a("ruby",null,[n("无服务器"),a("rt",null,"Serverless")]),n("”计算会消灭运维工程师的说法抱有好奇。这种好奇心主要来源于我希望在未来仍然能有一份有报酬的工作 —— 如果我们前景光明的未来不需要运维工程师，那我得明白到底是怎么回事。我已经在 Lamdba 和Google Cloud Functions 上做了一些实验，结果让我印象十分深刻，但我仍然坚信无服务器解决方案只是解决了一部分问题。")],-1)),a("p",null,[s[4]||(s[4]=n("我关注 ",-1)),e(p,{href:"https://aws.amazon.com/fargate/"},{default:t(()=>[...s[3]||(s[3]=[n("AWS Fargate",-1)])]),_:1}),s[5]||(s[5]=n(" 已经有一段时间了，这就是 $work 的开发人员所推崇为“无服务器计算”的东西 —— 主要是因为 Fargate，用它你就可以无需管理底层节点而运行你的 Docker 容器。我想看看它到底意味着什么，所以我开始尝试从头开始在 Fargate 上运行一个应用，看看是否可以成功。这里我对成功的定义是一个与“生产级”应用程序相近的东西，我想应该包含以下内容：",-1))]),s[64]||(s[64]=l('<ul><li>一个在 Fargate 上运行的容器</li><li>配置信息以环境变量的形式下推</li><li>“秘密信息” 不能是明文的</li><li>位于负载均衡器之后</li><li>有效的 SSL 证书的 TLS 通道</li></ul><p>我以“基础设施即代码”的角度来开始整个任务，不遵循默认的 AWS 控制台向导，而是使用 terraform 来定义基础架构。这很可能让整个事情变得复杂，但我想确保任何部署都是可重现的，任何想要遵循此步骤的人都可发现我的结论。</p><p>上述所有标准通常都可以通过基于 Kubernetes 的平台使用一些外部的附加组件和插件来实现，所以我确实是以一种比较的心态来处理整个任务的，因为我要将它与我的常用工作流程进行比较。我的主要目标是看看Fargate 有多容易，特别是与 Kubernetes 相比时。结果让我感到非常惊讶。</p><h3 id="aws-是有开销的" tabindex="-1">AWS 是有开销的 <a class="header-anchor" href="#aws-是有开销的" aria-label="Permalink to “AWS 是有开销的”">​</a></h3><p>我有一个干净的 AWS 账户，并决定从零到部署一个 webapp。与 AWS 中的其它基础设施一样，我必须首先使基本的基础设施正常工作起来，因此我需要先定义一个 VPC。</p><p>遵循最佳实践，因此我将这个 VPC 划分为跨可用区（AZ）的子网，一个公共子网和私有子网。这时我想到，只要这种设置基础设施的需求存在，我就能找到一份这种工作。AWS 是&quot;免&quot;运维的这一概念一直让我感到愤怒。开发者社区中的许多人理所当然地认为在设置和定义一个设计良好的 AWS 账户和基础设施是不需要付出多少工作和努力的。而这种想当然甚至发生在开始谈论多帐户架构<em>之前</em>就有了——现在我仍然使用单一帐户，我已经必须定义好基础设施和传统的网络设备。</p><p>这里也值得记住，我已经做了很多次，所以我<em>很清楚</em>该做什么。我可以在我的帐户中使用默认的 VPC 以及预先提供的子网，我觉得很多刚开始的人也可以使用它。这大概花了我半个小时才运行起来，但我不禁想到，即使我想运行 lambda 函数，我仍然需要某种连接和网络。定义 NAT 网关和在 VPC 中路由根本不会让你觉得很“Serverless”，但要往下进行这就是必须要做的。</p><h3 id="运行简单的容器" tabindex="-1">运行简单的容器 <a class="header-anchor" href="#运行简单的容器" aria-label="Permalink to “运行简单的容器”">​</a></h3>',8)),a("p",null,[s[7]||(s[7]=n("在我启动运行了基本的基础设施之后，现在我想让我的 Docker 容器运行起来。我开始翻阅 Fargate 文档并浏览 ",-1)),e(p,{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_GetStarted.html"},{default:t(()=>[...s[6]||(s[6]=[n("入门",-1)])]),_:1}),s[8]||(s[8]=n(" 文档，这些就马上就展现在了我面前：",-1))]),s[65]||(s[65]=a("p",null,[a("img",{src:"https://i.imgur.com/YfMyXBdl.png",alt:""})],-1)),s[66]||(s[66]=a("p",null,[n("等等，只是让我的容器运行就至少要有"),a("strong",null,"三个"),n("步骤？这完全不像我所想的，不过还是让我们开始吧。")],-1)),s[67]||(s[67]=a("h4",{id:"任务定义",tabindex:"-1"},[n("任务定义 "),a("a",{class:"header-anchor",href:"#任务定义","aria-label":"Permalink to “任务定义”"},"​")],-1)),a("p",null,[s[11]||(s[11]=n("“",-1)),s[12]||(s[12]=a("ruby",null,[n("任务定义"),a("rt",null,"Task Definition")],-1)),s[13]||(s[13]=n("”用来定义要运行的实际容器。我在这里遇到的问题是，任务定义这件事非常复杂。这里有很多选项都很简单，比如指定 Docker 镜像和内存限制，但我还必须定义一个网络模型以及我并不熟悉的其它各种选项。真需要这样吗？如果我完全没有 AWS 方面的知识就进入到这个过程里，那么在这个阶段我会感觉非常的不知所措。可以在 AWS 页面上找到这些 ",-1)),e(p,{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html"},{default:t(()=>[...s[9]||(s[9]=[n("参数",-1)])]),_:1}),s[14]||(s[14]=n(" 的完整列表，这个列表很长。我知道我的容器需要一些环境变量，它需要暴露一个端口。所以我首先在一个神奇的 ",-1)),e(p,{href:"https://github.com/cloudposse/terraform-aws-ecs-container-definition"},{default:t(()=>[...s[10]||(s[10]=[n("terraform 模块",-1)])]),_:1}),s[15]||(s[15]=n(" 的帮助下定义了这一点，这真的让这件事更容易了。如果没有这个模块，我就得手写 JSON 来定义我的容器定义。",-1))]),s[68]||(s[68]=l(`<p>首先我定义了一些环境变量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>container_environment_variables = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name  = &quot;USER&quot;</span></span>
<span class="line"><span>      value = &quot;\${var.user}&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name  = &quot;PASSWORD&quot;</span></span>
<span class="line"><span>      value = &quot;\${var.password}&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>然后我使用上面提及的模块组成了任务定义：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>module &quot;container_definition_app&quot; {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,4)),a("p",null,[s[17]||(s[17]=n("在这一点上我非常困惑，我需要在这里定义很多配置才能运行，而这时什么都没有开始呢，但这是必要的 —— 运行 Docker 容器肯定需要了解一些容器配置的知识。我 ",-1)),e(p,{href:"https://leebriggs.co.uk/blog/2018/05/08/kubernetes-config-mgmt.html"},{default:t(()=>[...s[16]||(s[16]=[n("之前写过",-1)])]),_:1}),s[18]||(s[18]=n(" 关于 Kubernetes 和配置管理的问题的文章，在这里似乎遇到了同样的问题。",-1))]),s[69]||(s[69]=l(`<p>接下来，我在上面的模块中定义了任务定义（幸好从我这里抽象出了所需的 JSON —— 如果我不得不手写JSON，我可能已经放弃了）。</p><p>当我定义模块参数时，我突然意识到我漏掉了一些东西。我需要一个 IAM 角色！好吧，让我来定义：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>resource &quot;aws_iam_role&quot; &quot;ecs_task_execution&quot; {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这样做是有意义的，我需要在 Kubernetes 中定义一个 RBAC 策略，所以在这里我还未完全错失或获得任何东西。这时我开始觉得从 Kubernetes 的角度来看，这种感觉非常熟悉。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>resource &quot;aws_ecs_task_definition&quot; &quot;app&quot; {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>现在，为了运行起来我已经写了很多行代码，我阅读了很多 ECS 文档，我所做的就是定义一个任务定义。我还没有让这个东西运行起来。在这一点上，我真的很困惑这个基于 Kubernetes 的平台到底增值了什么，但我继续前行。</p><h4 id="服务" tabindex="-1">服务 <a class="header-anchor" href="#服务" aria-label="Permalink to “服务”">​</a></h4><p>服务，一定程度上是将容器如何暴露给外部，另外是如何定义它拥有的副本数量。我的第一个想法是“啊！这就像一个 Kubernetes 服务！”我开始着手映射端口等。这是我第一次在 terraform 上跑：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>resource &quot;aws_ecs_service&quot; &quot;app&quot; {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>当我必须定义允许访问所需端口的安全组时，我再次感到沮丧，当我这样做了并将其插入到网络配置中后，我就像被扇了一巴掌。</p><p>我还需要定义自己的负载均衡器？</p><p>什么？</p><p>当然不是吗？</p><h5 id="负载均衡器从未远离" tabindex="-1">负载均衡器从未远离 <a class="header-anchor" href="#负载均衡器从未远离" aria-label="Permalink to “负载均衡器从未远离”">​</a></h5>`,14)),a("p",null,[s[21]||(s[21]=n("老实说，我很满意，我甚至不确定为什么。我已经习惯了 Kubernetes 的服务和 Ingress 对象，我一心认为用 Kubernetes 将我的应用程序放到网上是多么容易。当然，我们在 $work 花了几个月的时间建立一个平台，以便更轻松。我是 ",-1)),e(p,{href:"https://github.com/kubernetes-incubator/external-dns"},{default:t(()=>[...s[19]||(s[19]=[n("external-dns",-1)])]),_:1}),s[22]||(s[22]=n(" 和 ",-1)),e(p,{href:"https://github.com/jetstack/cert-manager"},{default:t(()=>[...s[20]||(s[20]=[n("cert-manager",-1)])]),_:1}),s[23]||(s[23]=n(" 的重度用户，它们可以自动填充 Ingress 对象上的 DNS 条目并自动化 TLS 证书，我非常了解进行这些设置所需的工作，但老实说，我认为在 Fargate 上做这件事会更容易。我认识到 Fargate 并没有声称自己是“如何运行应用程序”这件事的全部和最终目的，它只是抽象出节点管理，但我一直被告知这比 Kubernetes ",-1)),s[24]||(s[24]=a("em",null,"更加容易",-1)),s[25]||(s[25]=n("。我真的很惊讶。定义负载均衡器（即使你不想使用 Ingress 和 Ingress Controller）也是向 Kubernetes 部署服务的重要组成部分，我不得不在这里再次做同样的事情。这一切都让人觉得如此熟悉。",-1))]),s[70]||(s[70]=l(`<p>我现在意识到我需要：</p><ul><li>一个负载均衡器</li><li>一个 TLS 证书</li><li>一个 DNS 名字</li></ul><p>所以我着手做了这些。我使用了一些流行的 terraform 模块，并做了这个：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Define a wildcard cert for my app</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我必须承认，我在这里搞砸了好几次。我不得不在 AWS 控制台中四处翻弄，以弄清楚我做错了什么。这当然不是一个“轻松”的过程，而且我之前已经做过很多次了。老实说，在这一点上，Kubernetes 看起来对我很有启发性，但我意识到这是因为我对它非常熟悉。幸运的是我能够使用托管的 Kubernetes 平台（预装了 external-dns 和 cert-manager），我真的很想知道我漏掉了 Fargate 什么增值的地方。它真的感觉不那么简单。</p><p>经过一番折腾，我现在有一个可以工作的 ECS 服务。包括服务在内的最终定义如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>data &quot;aws_ecs_task_definition&quot; &quot;app&quot; {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我觉得我已经接近完成了，但后来我记起了我只完成了最初的“入门”文档中所需的 3 个步骤中的 2 个，我仍然需要定义 ECS 群集。</p><h4 id="集群" tabindex="-1">集群 <a class="header-anchor" href="#集群" aria-label="Permalink to “集群”">​</a></h4>`,9)),a("p",null,[s[27]||(s[27]=n("感谢 ",-1)),e(p,{href:"https://github.com/terraform-aws-modules/terraform-aws-ecs"},{default:t(()=>[...s[26]||(s[26]=[n("定义模块",-1)])]),_:1}),s[28]||(s[28]=n("，定义要所有这些运行的集群实际上非常简单。",-1))]),s[71]||(s[71]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>module &quot;ecs&quot; {</span></span>
<span class="line"><span>  source  = &quot;terraform-aws-modules/ecs/aws&quot;</span></span>
<span class="line"><span>  version = &quot;v1.1.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  name = &quot;\${var.name}&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里让我感到惊讶的是为什么我必须定义一个集群。作为一个相当熟悉 ECS 的人，你会觉得你需要一个集群，但我试图从一个必须经历这个过程的新人的角度来考虑这一点 —— 对我来说，Fargate 标榜自己“ Serverless”而你仍需要定义集群，这似乎很令人惊讶。当然这是一个小细节，但它确实盘旋在我的脑海里。</p><h3 id="告诉我你的-secret" tabindex="-1">告诉我你的 Secret <a class="header-anchor" href="#告诉我你的-secret" aria-label="Permalink to “告诉我你的 Secret”">​</a></h3><p>在这个阶段，我很高兴我成功地运行了一些东西。然而，我的原始的成功标准缺少一些东西。如果我们回到任务定义那里，你会记得我的应用程序有一个存放密码的环境变量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>container_environment_variables = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name  = &quot;USER&quot;</span></span>
<span class="line"><span>      value = &quot;\${var.user}&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name  = &quot;PASSWORD&quot;</span></span>
<span class="line"><span>      value = &quot;\${var.password}&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div>`,5)),a("p",null,[s[30]||(s[30]=n("如果我在 AWS 控制台中查看我的任务定义，我的密码就在那里，明晃晃的明文。我希望不要这样，所以我开始尝试将其转化为其他东西，类似于 ",-1)),e(p,{href:"https://kubernetes.io/docs/concepts/configuration/secret/"},{default:t(()=>[...s[29]||(s[29]=[n("Kubernetes 的Secrets管理",-1)])]),_:1}),s[31]||(s[31]=n("。",-1))]),s[72]||(s[72]=a("h4",{id:"aws-ssm",tabindex:"-1"},[n("AWS SSM "),a("a",{class:"header-anchor",href:"#aws-ssm","aria-label":"Permalink to “AWS SSM”"},"​")],-1)),a("p",null,[s[33]||(s[33]=n("Fargate / ECS 执行",-1)),s[34]||(s[34]=a("ruby",null,[n("secret 管理"),a("rt",null,"secret management")],-1)),s[35]||(s[35]=n("部分的方式是使用 ",-1)),e(p,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html"},{default:t(()=>[...s[32]||(s[32]=[n("AWS SSM",-1)])]),_:1}),s[36]||(s[36]=n("（此服务的全名是 AWS 系统管理器参数存储库 Systems Manager Parameter Store，但我不想使用这个名称，因为坦率地说这个名字太愚蠢了）。",-1))]),a("p",null,[s[38]||(s[38]=n("AWS 文档很好的",-1)),e(p,{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html"},{default:t(()=>[...s[37]||(s[37]=[n("涵盖了这个内容",-1)])]),_:1}),s[39]||(s[39]=n("，因此我开始将其转换为 terraform。",-1))]),s[73]||(s[73]=l(`<h5 id="指定秘密信息" tabindex="-1">指定秘密信息 <a class="header-anchor" href="#指定秘密信息" aria-label="Permalink to “指定秘密信息”">​</a></h5><p>首先，你必须定义一个参数并为其命名。在 terraform 中，它看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>resource &quot;aws_ssm_parameter&quot; &quot;app_password&quot; {</span></span>
<span class="line"><span>  name  = &quot;\${var.app_password_param_name}&quot; # The name of the value in AWS SSM</span></span>
<span class="line"><span>  type  = &quot;SecureString&quot;</span></span>
<span class="line"><span>  value = &quot;\${var.app_password}&quot; # The actual value of the password, like correct-horse-battery-stable</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>显然，这里的关键部分是 “SecureString” 类型。这会使用默认的 AWS KMS 密钥来加密数据，这对我来说并不是很直观。这比 Kubernetes 的 Secret 管理具有巨大优势，默认情况下，这些 Secret 在 etcd 中是不加密的。</p><p>然后我为 ECS 指定了另一个本地值映射，并将其作为 Secret 参数传递：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>container_secrets = [</span></span>
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
<span class="line"><span>  secrets     = &quot;\${local.container_secrets}&quot;</span></span></code></pre></div><h5 id="出了个问题" tabindex="-1">出了个问题 <a class="header-anchor" href="#出了个问题" aria-label="Permalink to “出了个问题”">​</a></h5><p>此刻，我重新部署了我的任务定义，并且非常困惑。为什么任务没有正确拉起？当新的任务定义（版本 8）可用时，我一直在控制台中看到正在运行的应用程序仍在使用先前的任务定义（版本 7）。解决这件事花费的时间比我预期的要长，但是在控制台的事件屏幕上，我注意到了 IAM 错误。我错过了一个步骤，容器无法从 AWS SSM 中读取 Secret 信息，因为它没有正确的 IAM 权限。这是我第一次真正对整个这件事情感到沮丧。从用户体验的角度来看，这里的反馈非常<em>糟糕</em>。如果我没有发觉的话，我会认为一切都很好，因为仍然有一个任务正在运行，我的应用程序仍然可以通过正确的 URL 访问 —— 只不过是旧的配置而已。</p><p>在 Kubernetes 里，我会清楚地看到 pod 定义中的错误。Fargate 可以确保我的应用不会停止，这绝对是太棒了，但作为一名运维，我需要一些关于发生了什么的实际反馈。这真的不够好。我真的希望 Fargate 团队的人能够读到这篇文章，改善这种体验。</p><h3 id="就这样了" tabindex="-1">就这样了 <a class="header-anchor" href="#就这样了" aria-label="Permalink to “就这样了”">​</a></h3><p>到这里就结束了，我的应用程序正在运行，也符合我的所有标准。我确实意识到我做了一些改进，其中包括：</p><ul><li>定义一个 cloudwatch 日志组，这样我就可以正确地写日志了</li><li>添加了一个 route53 托管区域，使整个事情从 DNS 角度更容易自动化</li><li>修复并重新调整了 IAM 权限，这里太宽泛了</li></ul>`,12)),a("p",null,[s[41]||(s[41]=n("但老实说，现在我想反思一下这段经历。我写了一个关于我的经历的 ",-1)),e(p,{href:"https://twitter.com/briggsl/status/1116870900719030272"},{default:t(()=>[...s[40]||(s[40]=[n("推特会话",-1)])]),_:1}),s[42]||(s[42]=n("，然后花了其余时间思考我在这里的真实感受。",-1))]),s[74]||(s[74]=a("h3",{id:"代价",tabindex:"-1"},[n("代价 "),a("a",{class:"header-anchor",href:"#代价","aria-label":"Permalink to “代价”"},"​")],-1)),s[75]||(s[75]=a("p",null,[n("经过一夜的反思，我意识到无论你是使用 Fargate 还是 Kubernetes，这个过程都大致相同。最让我感到惊讶的是，尽管我经常听说 Fargate “更容易”，但我真的没有看到任何超过 Kubernetes 平台的好处。现在，如果你正在构建 Kubernetes 集群，我绝对可以看到这里的价值 —— 管理节点和控制面板只是不必要的开销，问题是 —— 基于 Kubernetes 的平台的大多数消费者都"),a("em",null,"没有"),n("这样做。如果你很幸运能够使用 GKE，你几乎不需要考虑集群的管理，你可以使用单个 "),a("code",null,"gcloud"),n(" 命令来运行集群。我经常使用 Digital Ocean 的 Kubernetes 托管服务，我可以肯定地说它就像操作 Fargate 集群一样简单，实际上在某种程度上它更容易。")],-1)),a("p",null,[s[44]||(s[44]=n("必须定义一些基础设施来运行你的容器就是此时的代价。谷歌本周可能刚刚使用他们的 ",-1)),e(p,{href:"https://cloud.google.com/run/"},{default:t(()=>[...s[43]||(s[43]=[n("Google Cloud Run",-1)])]),_:1}),s[45]||(s[45]=n(" 产品改变了游戏规则，但他们在这一领域的领先优势远远领先于其他所有人。",-1))]),s[76]||(s[76]=l('<p>从这整个经历中，我可以肯定的说：<em>大规模运行容器仍然很难。</em>它需要思考，需要领域知识，需要运维和开发人员之间的协作。它还需要一个基础来构建 —— 任何基于 AWS 的操作都需要事先定义和运行一些基础架构。我对一些公司似乎渴望的 “NoOps” 概念非常感兴趣。我想如果你正在运行一个无状态应用程序，你可以把它全部放在一个 lambda 函数和一个 API 网关中，这可能不错，但我们是否真的适合在任何一种企业环境中这样做？我真的不这么认为。</p><h4 id="公平比较" tabindex="-1">公平比较 <a class="header-anchor" href="#公平比较" aria-label="Permalink to “公平比较”">​</a></h4><p>令我印象深刻的另一个现实是，技术 A 和技术 B 之间的比较通常不太公平，我经常在 AWS 上看到这一点。这种实际情况往往与 Jeff Barr 博客文章截然不同。如果你是一家足够小的公司，你可以使用 AWS 控制台在 AWS 中部署你的应用程序并接受所有默认值，这绝对更容易。但是，我不想使用默认值，因为默认值几乎是不适用于生产环境的。一旦你开始剥离掉云服务商服务的层面，你就会开始意识到最终你仍然是在运行软件 —— 它仍然需要设计良好、部署良好、运行良好。我相信 AWS 和 Kubernetes 以及所有其他云服务商的增值服务使得它更容易运行、设计和操作，但它绝对不是免费的。</p><h4 id="kubernetes-的争议" tabindex="-1">Kubernetes 的争议 <a class="header-anchor" href="#kubernetes-的争议" aria-label="Permalink to “Kubernetes 的争议”">​</a></h4><p>最后就是：如果你将 Kubernetes 纯粹视为一个容器编排工具，你可能会喜欢 Fargate。然而，随着我对 Kubernetes 越来越熟悉，我开始意识到它作为一种技术的重要性 —— 不仅因为它是一个伟大的容器编排工具，而且因为它的设计模式 —— 它是声明性的、API 驱动的平台。 在<em>整个</em> Fargate 过程期间发生的一个简单的事情是，如果我删除这里某个东西，Fargate 不一定会为我重新创建它。自动缩放很不错，不需要管理服务器和操作系统的补丁及更新也很棒，但我觉得因为无法使用 Kubernetes 自我修复和 API 驱动模型而失去了很多。当然，Kubernetes 有一个学习曲线，但从这里的体验来看，Fargate 也是如此。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>尽管我在这个过程中遭遇了困惑，但我确实很喜欢这种体验。我仍然相信 Fargate 是一项出色的技术，AWS 团队对 ECS/Fargate 所做的工作确实非常出色。然而，我的观点是，这绝对不比 Kubernetes “更容易”，只是……难点不同。</p><p>在生产环境中运行容器时出现的问题大致相同。如果你从这篇文章中有所收获，它应该是这样的：<em>不管你选择的哪种方式都有运维开销</em>。不要相信你选择一些东西你的世界就变得更轻松。我个人的意见是：如果你有一个运维团队，而你的公司要为多个应用程序团队部署容器 —— 选择一种技术并围绕它构建流程和工具以使其更容易。</p><p>人们说的一点肯定没错，用点技巧可以更容易地使用某种技术。在这个阶段，谈到 Fargate，下面的漫画这总结了我的感受：</p><p><img src="https://i.imgur.com/Bx7Q50Jl.jpg" alt=""></p><hr>',11)),a("p",null,[s[47]||(s[47]=n("via: ",-1)),e(p,{href:"https://leebriggs.co.uk/blog/2019/04/13/the-fargate-illusion.html"},{default:t(()=>[...s[46]||(s[46]=[n("https://leebriggs.co.uk/blog/2019/04/13/the-fargate-illusion.html",-1)])]),_:1})]),a("p",null,[s[52]||(s[52]=n("作者：",-1)),e(p,{href:"https://leebriggs.co.uk/"},{default:t(()=>[...s[48]||(s[48]=[n("Lee Briggs",-1)])]),_:1}),s[53]||(s[53]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[49]||(s[49]=[n("lujun9972",-1)])]),_:1}),s[54]||(s[54]=n(" 译者：",-1)),e(p,{href:"https://github.com/Bestony"},{default:t(()=>[...s[50]||(s[50]=[n("Bestony",-1)])]),_:1}),s[55]||(s[55]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[51]||(s[51]=[n("wxy",-1)])]),_:1}),s[56]||(s[56]=n(", 临石（阿里云智能技术专家）",-1))]),a("p",null,[s[59]||(s[59]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[57]||(s[57]=[n("LCTT",-1)])]),_:1}),s[60]||(s[60]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:t(()=>[...s[58]||(s[58]=[n("Linux中国",-1)])]),_:1}),s[61]||(s[61]=n(" 荣誉推出",-1))])])}const v=i(d,[["render",c]]);export{h as __pageData,v as default};
