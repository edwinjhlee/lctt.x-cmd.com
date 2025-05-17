import{_ as u,W as i,s as o,u as r,I as a,ah as t,w as n,Z as p,A as l}from"./chunks/framework.DRqsSc0o.js";import"./chunks/theme.DlTh90wK.js";const C=JSON.parse('{"title":"利用 Tmux 和 kubectl 解决 Kubernetes 故障 | LCTT x X-CMD","titleTemplate":false,"description":"利用 Tmux 和 kubectl 解决 Kubernetes 故障 | LCTT (202002) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"利用 Tmux 和 kubectl 解决 Kubernetes 故障 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"利用 Tmux 和 kubectl 解决 Kubernetes 故障 | LCTT (202002) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202002/20200203 Troubleshoot Kubernetes with the power of tmux and kubectl","title":"利用 Tmux 和 kubectl 解决 Kubernetes 故障","tag":"202002"},"relativePath":"202002/20200203 Troubleshoot Kubernetes with the power of tmux and kubectl.md","filePath":"[post].md"}'),b={name:"202002/20200203 Troubleshoot Kubernetes with the power of tmux and kubectl.md"};function d(m,s,k,x,g,T){const e=i("Link");return r(),o("div",null,[s[35]||(s[35]=a("h1",{id:"利用-tmux-和-kubectl-解决-kubernetes-故障",tabindex:"-1"},[n("利用 Tmux 和 kubectl 解决 Kubernetes 故障 "),a("a",{class:"header-anchor",href:"#利用-tmux-和-kubectl-解决-kubernetes-故障","aria-label":"Permalink to 利用 Tmux 和 kubectl 解决 Kubernetes 故障"},"​")],-1)),s[36]||(s[36]=a("blockquote",null,[a("p",null,"一个使用 tmux 的 kubectl 插件可以使 Kubernetes 疑难问题变得更简单。")],-1)),s[37]||(s[37]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202002/25/125435a4v3vpss3s4w3sks.jpg",alt:""})],-1)),a("p",null,[p(e,{href:"https://opensource.com/resources/what-is-kubernetes"},{default:l(()=>s[0]||(s[0]=[n("Kubernetes")])),_:1}),s[2]||(s[2]=n(" 是一个活跃的开源容器管理平台，它提供了可扩展性、高可用性、健壮性和富有弹性的应用程序管理。它的众多特性之一是支持通过其主要的二进制客户端 ")),p(e,{href:"https://kubernetes.io/docs/reference/kubectl/overview/"},{default:l(()=>s[1]||(s[1]=[n("kubectl")])),_:1}),s[3]||(s[3]=n(" 运行定制脚本或可执行程序，kubectl 很强大的，允许用户在 Kubernetes 集群上用它直接做很多事情。"))]),s[38]||(s[38]=t('<h3 id="使用别名进行-kubernetes-的故障排查" tabindex="-1">使用别名进行 Kubernetes 的故障排查 <a class="header-anchor" href="#使用别名进行-kubernetes-的故障排查" aria-label="Permalink to 使用别名进行 Kubernetes 的故障排查">​</a></h3><p>使用 Kubernetes 进行容器编排的人都知道由于设计上原因带来了其功能的复杂性。举例说，迫切需要以更快的速度并且几乎不需要手动干预的方式来简化 Kubernetes 中的故障排除（除过特殊情况）。</p><p>在故障排查功能方面，有很多场景需要考虑。在一种场景下，你知道你需要运行什么，但是这个命令的语法（即使作为一个单独的命令运行）过于复杂，或需要一、两次交互才能起作用。</p><p>例如，如果你需要经常进入一个系统命名空间中运行的容器，你可能发现自己在重复地键入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>kubectl --namespace=kube-system exec -i -t &lt;your-pod-name&gt;</span></span></code></pre></div><p>为了简化故障排查，你可以用这些指令的命令行别名。比如，你可以增加下面命令到你的隐藏配置文件（<code>.bashrc</code> 或 <code>.zshrc</code>）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>alias ksysex=&#39;kubectl --namespace=kube-system exec -i -t&#39;</span></span></code></pre></div>',7)),a("p",null,[s[5]||(s[5]=n("这是来自于 ")),p(e,{href:"https://github.com/ahmetb/kubectl-aliases/blob/master/.kubectl_aliases"},{default:l(()=>s[4]||(s[4]=[n("Kubernetes 常见别名")])),_:1}),s[6]||(s[6]=n("存储库的一个例子，它展示了一种简化 ")),s[7]||(s[7]=a("code",null,"kubectl",-1)),s[8]||(s[8]=n(" 中的功能的方法。像这种场景下的简单情形，使用别名很有用。"))]),s[39]||(s[39]=a("h3",{id:"切换到-kubectl-插件",tabindex:"-1"},[n("切换到 kubectl 插件 "),a("a",{class:"header-anchor",href:"#切换到-kubectl-插件","aria-label":"Permalink to 切换到 kubectl 插件"},"​")],-1)),s[40]||(s[40]=a("p",null,"更复杂的故障排查场景是需要一个一个的执行很多命令，调查环境，最后得出结论。仅仅用别名方法是不能解决这种情况的；你需要知道你所部署的 Kubernetes 之间逻辑和相关性，你真正需要的是自动化，以在更短的时间内输出你想要的。",-1)),s[41]||(s[41]=a("p",null,"考虑到你的集群有 10 ~ 20 或 50 ~ 100 个命名空间来提供不同的微服务。一般在进行故障排查时，什么对你有帮助？",-1)),s[42]||(s[42]=a("ul",null,[a("li",null,"你需要能够快速分辨出抛出错误的是哪个 命名空间的哪个 Pod 的东西。"),a("li",null,"你需要一些可监视一个命名空间的所有 Pod 日志的东西。"),a("li",null,"你可能也需要监视特定命名空间的出现错误的某个 Pod 的日志。")],-1)),s[43]||(s[43]=a("p",null,"涵盖这些要点的解决方案对于定位生产环境的问题有很大的帮助，以及在开发和测试环节中也很有用。",-1)),a("p",null,[s[10]||(s[10]=n("你可以用 ")),p(e,{href:"https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/"},{default:l(()=>s[9]||(s[9]=[n("kubectl 插件")])),_:1}),s[11]||(s[11]=n("创建比简单的别名更强大的功能。插件类似于其它用任何语言编写的独立脚本，但被设计为可以扩充 Kubernetes 管理员的主要命令。"))]),s[44]||(s[44]=t(`<p>创建一个插件，你必须用 <code>kubectl-&lt;your-plugin-name&gt;</code> 的正确的语法来拷贝这个脚本到 <code>$PATH</code> 中的导出目录之一，并需要为其赋予可执行权限（<code>chmod +x</code>）。</p><p>创建插件之后将其移动到路径中，你可以立即运行它。例如，我的路径下有一个 <code>kubectl-krawl</code> 和 <code>kubectl-kmux</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ kubectl plugin list</span></span>
<span class="line"><span>The following compatible plugins are available:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/usr/local/bin/kubectl-krawl</span></span>
<span class="line"><span>/usr/local/bin/kubectl-kmux</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ kubectl kmux</span></span></code></pre></div><p>现在让我们见识下带有 tmux 的 Kubernetes 的有多强大。</p><h3 id="驾驭强大的-tmux" tabindex="-1">驾驭强大的 tmux <a class="header-anchor" href="#驾驭强大的-tmux" aria-label="Permalink to 驾驭强大的 tmux">​</a></h3>`,5)),a("p",null,[p(e,{href:"https://opensource.com/article/19/6/tmux-terminal-joy"},{default:l(()=>s[12]||(s[12]=[n("Tmux")])),_:1}),s[13]||(s[13]=n(" 是一个非常强大的工具，许多管理员和运维团队都依赖它来解决与易操作性相关的问题：通过将窗口分成多个窗格以便在多台计算机上运行并行的调试来监视日志。它的主要的优点是可在命令行或自动化脚本中使用。"))]),a("p",null,[s[15]||(s[15]=n("我创建")),p(e,{href:"https://github.com/abhiTamrakar/kube-plugins"},{default:l(()=>s[14]||(s[14]=[n("一个 kubectl 插件")])),_:1}),s[16]||(s[16]=n("，使用 tmux 使故障排查更加简单。我将通过注释来解析插件背后的逻辑（插件的完整代码留待给你实现）："))]),s[45]||(s[45]=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># NAMESPACE 是要监控的名字空间</span></span>
<span class="line"><span># POD 是 Pod 名称</span></span>
<span class="line"><span># Containers 是容器名称</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 初始化一个计数器 n 以计算循环计数的数量，</span></span>
<span class="line"><span># 之后 tmux 使用它来拆分窗格。</span></span>
<span class="line"><span>n=0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在 Pod 和容器列表上开始循环</span></span>
<span class="line"><span>while IFS=&#39; &#39; read -r POD CONTAINERS</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    # tmux 为每个 Pod 创建一个新窗口</span></span>
<span class="line"><span>    tmux neww $COMMAND -n $POD 2&gt;/dev/null</span></span>
<span class="line"><span>    # 对运行中的 Pod 中 的所有容器启动循环</span></span>
<span class="line"><span>    for CONTAINER in \${CONTAINERS//,/ }</span></span>
<span class="line"><span>    do</span></span>
<span class="line"><span>        if [ x$POD = x -o x$CONTAINER = x ]; then</span></span>
<span class="line"><span>            # 如果任何值为 null，则退出。</span></span>
<span class="line"><span>                     warn &quot;Looks like there is a problem getting pods data.&quot;</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>        # 设置要执行的命令</span></span>
<span class="line"><span>        COMMAND=”kubectl logs -f $POD -c $CONTAINER -n $NAMESPACE”</span></span>
<span class="line"><span>        # 检查 tmux 会话</span></span>
<span class="line"><span>        if tmux has-session -t &lt;会话名&gt; 2&gt;/dev/null;</span></span>
<span class="line"><span>        then</span></span>
<span class="line"><span>            &lt;设置会话退出&gt;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            &lt;创建会话&gt;</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>        # 在当前窗口为每个容器切分窗格</span></span>
<span class="line"><span>        tmux selectp -t $n \\; \\</span></span>
<span class="line"><span>        splitw $COMMAND \\; \\</span></span>
<span class="line"><span>        select-layout tiled \\;</span></span>
<span class="line"><span>        # 终止容器循环</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 用 Pod 名称重命名窗口以识别</span></span>
<span class="line"><span>    tmux renamew $POD 2&gt;/dev/null</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 增加计数器</span></span>
<span class="line"><span>    ((n+=1))</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 终止 Pod 循环</span></span>
<span class="line"><span>done&lt;&lt;(&lt;从 kubernetes  集群获取 Pod 和容器的列表&gt;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 最后选择窗口并附加会话</span></span>
<span class="line"><span>tmux selectw -t &lt;会话名&gt;:1 \\; \\</span></span>
<span class="line"><span>attach-session -t &lt;会话名&gt;\\;</span></span></code></pre></div><p>运行插件脚本后，将产生类似于下图的输出。每个 Pod 有一个自己的窗口，每个容器（如果有多个）被分割到其窗口中 Pod 窗格中，并在日志到达时输出。Tmux 之美如下可见；通过正确的配置，你甚至会看到哪个窗口正处于激活运行状态（可看到标签是白色的）。</p><p><img src="https://raw.githubusercontent.com/abhiTamrakar/kube-plugins/master/kmux/kmux.png" alt="kmux 插件的输出"></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to 总结">​</a></h3><p>别名是在 Kubernetes 环境下常见的也有用的简易故障排查方法。当环境变得复杂，用高级脚本生成的kubectl 插件是一个更强大的方法。至于用哪个编程语言来编写 kubectl 插件是没有限制。唯一的要求是该名字在路径中是可执行的，并且不能与已知的 kubectl 命令重复。</p>`,5)),a("p",null,[s[18]||(s[18]=n("要阅读完整的插件源码，或试试我创建的插件，请查看我的 ")),p(e,{href:"https://github.com/abhiTamrakar/kube-plugins"},{default:l(()=>s[17]||(s[17]=[n("kube-plugins-github")])),_:1}),s[19]||(s[19]=n(" 存储库。欢迎提交提案和补丁。"))]),s[46]||(s[46]=a("hr",null,null,-1)),a("p",null,[s[21]||(s[21]=n("via: ")),p(e,{href:"https://opensource.com/article/20/2/kubernetes-tmux-kubectl"},{default:l(()=>s[20]||(s[20]=[n("https://opensource.com/article/20/2/kubernetes-tmux-kubectl")])),_:1})]),a("p",null,[s[26]||(s[26]=n("作者：")),p(e,{href:"https://opensource.com/users/tamrakar"},{default:l(()=>s[22]||(s[22]=[n("Abhishek Tamrakar")])),_:1}),s[27]||(s[27]=n(" 选题：")),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>s[23]||(s[23]=[n("lujun9972")])),_:1}),s[28]||(s[28]=n(" 译者：")),p(e,{href:"https://github.com/guevaraya"},{default:l(()=>s[24]||(s[24]=[n("guevaraya")])),_:1}),s[29]||(s[29]=n(" 校对：")),p(e,{href:"https://github.com/wxy"},{default:l(()=>s[25]||(s[25]=[n("wxy")])),_:1})]),a("p",null,[s[32]||(s[32]=n("本文由 ")),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>s[30]||(s[30]=[n("LCTT")])),_:1}),s[33]||(s[33]=n(" 原创编译，")),p(e,{href:"https://linux.cn/"},{default:l(()=>s[31]||(s[31]=[n("Linux中国")])),_:1}),s[34]||(s[34]=n(" 荣誉推出"))])])}const h=u(b,[["render",d]]);export{C as __pageData,h as default};
