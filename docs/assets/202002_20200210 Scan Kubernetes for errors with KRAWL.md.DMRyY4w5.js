import{_ as i,a0 as t,w as r,s as o,I as a,x as n,a1 as e,A as l,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const A=JSON.parse('{"title":"使用 KRAWL 扫描 Kubernetes 错误 | LCTT x X-CMD","titleTemplate":false,"description":"使用 KRAWL 扫描 Kubernetes 错误 | LCTT (202002) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 KRAWL 扫描 Kubernetes 错误 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 KRAWL 扫描 Kubernetes 错误 | LCTT (202002) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202002/20200210 Scan Kubernetes for errors with KRAWL","title":"使用 KRAWL 扫描 Kubernetes 错误","tag":"202002","desc":""},"relativePath":"202002/20200210 Scan Kubernetes for errors with KRAWL.md","filePath":"[post].md"}'),u={name:"202002/20200210 Scan Kubernetes for errors with KRAWL.md"};function d(f,s,m,h,g,b){const p=t("Link");return r(),o("div",null,[s[21]||(s[21]=a("h1",{id:"使用-krawl-扫描-kubernetes-错误",tabindex:"-1"},[n("使用 KRAWL 扫描 Kubernetes 错误 "),a("a",{class:"header-anchor",href:"#使用-krawl-扫描-kubernetes-错误","aria-label":"Permalink to “使用 KRAWL 扫描 Kubernetes 错误”"},"​")],-1)),s[22]||(s[22]=a("blockquote",null,[a("p",null,"用 KRAWL 脚本来识别 Kubernetes Pod 和容器中的错误。")],-1)),s[23]||(s[23]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/ship_captain_devops_kubernetes_steer.png?itok=LAHfIpek",alt:"Ship captain sailing the Kubernetes seas",title:"Ship captain sailing the Kubernetes seas"})],-1)),s[24]||(s[24]=a("p",null,"当你使用 Kubernetes 运行容器时，你通常会发现它们堆积在一起。这是设计使然。它是容器的优点之一：每当需要新的容器时，它们启动成本都很低。你可以使用前端工具（如 OpenShift 或 OKD）来管理 Pod 和容器。这些工具使可视化设置变得容易，并且它具有一组丰富的用于快速交互的命令。",-1)),a("p",null,[s[1]||(s[1]=n("如果管理容器的平台不符合你的要求，你也可以仅使用 Kubernetes 工具链获取这些信息，但这需要大量命令才能全面了解复杂环境。出于这个原因，我编写了 ",-1)),e(p,{href:"https://github.com/abhiTamrakar/kube-plugins/tree/master/krawl"},{default:l(()=>[...s[0]||(s[0]=[n("KRAWL",-1)])]),_:1}),s[2]||(s[2]=n("，这是一个简单的脚本，可用于扫描 Kubernetes 集群命名空间下的 Pod 和容器，并在发现任何事件时，显示事件的输出。它也可用作为 Kubernetes 插件使用。这是获取大量有用信息的快速简便方法。",-1))]),s[25]||(s[25]=c(`<h3 id="先决条件" tabindex="-1">先决条件 <a class="header-anchor" href="#先决条件" aria-label="Permalink to “先决条件”">​</a></h3><ul><li>必须安装 <code>kubectl</code>。</li><li>集群的 kubeconfig 配置必须在它的默认位置（<code>$HOME/.kube/config</code>）或已被导出到环境变量（<code>KUBECONFIG=/path/to/kubeconfig</code>）。</li></ul><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to “使用”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./krawl</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/uploads/krawl_0.png" alt="KRAWL script" title="KRAWL script"></p><h3 id="脚本" tabindex="-1">脚本 <a class="header-anchor" href="#脚本" aria-label="Permalink to “脚本”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># AUTHOR: Abhishek Tamrakar</span></span>
<span class="line"><span># EMAIL: abhishek.tamrakar08@gmail.com</span></span>
<span class="line"><span># LICENSE: Copyright (C) 2018 Abhishek Tamrakar</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></span>
<span class="line"><span>#  you may not use this file except in compliance with the License.</span></span>
<span class="line"><span>#  You may obtain a copy of the License at</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#       http://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#   Unless required by applicable law or agreed to in writing, software</span></span>
<span class="line"><span>#   distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></span>
<span class="line"><span>#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></span>
<span class="line"><span>#   See the License for the specific language governing permissions and</span></span>
<span class="line"><span>#   limitations under the License.</span></span>
<span class="line"><span>##</span></span>
<span class="line"><span>#define the variables</span></span>
<span class="line"><span>KUBE_LOC=~/.kube/config</span></span>
<span class="line"><span>#define variables</span></span>
<span class="line"><span>KUBECTL=$(which kubectl)</span></span>
<span class="line"><span>GET=$(which egrep)</span></span>
<span class="line"><span>AWK=$(which awk)</span></span>
<span class="line"><span>red=$(tput setaf 1)</span></span>
<span class="line"><span>normal=$(tput sgr0)</span></span>
<span class="line"><span># define functions</span></span>
<span class="line"><span></span></span>
<span class="line"><span># wrapper for printing info messages</span></span>
<span class="line"><span>info()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  printf &#39;\\n\\e[34m%s\\e[m: %s\\n&#39; &quot;INFO&quot; &quot;$@&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cleanup when all done</span></span>
<span class="line"><span>cleanup()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  rm -f results.csv</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># just check if the command we are about to call is available</span></span>
<span class="line"><span>checkcmd()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  #check if command exists</span></span>
<span class="line"><span>  local cmd=$1</span></span>
<span class="line"><span>  if [ -z &quot;\${!cmd}&quot; ]</span></span>
<span class="line"><span>  then</span></span>
<span class="line"><span>    printf &#39;\\n\\e[31m%s\\e[m: %s\\n&#39; &quot;ERROR&quot;  &quot;check if $1 is installed !!!&quot;</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>get_namespaces()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  #get namespaces</span></span>
<span class="line"><span>  namespaces=( \\</span></span>
<span class="line"><span>          $($KUBECTL get namespaces --ignore-not-found=true | \\</span></span>
<span class="line"><span>          $AWK &#39;/Active/ {print $1}&#39; \\</span></span>
<span class="line"><span>          ORS=&quot; &quot;) \\</span></span>
<span class="line"><span>          )</span></span>
<span class="line"><span>#exit if namespaces are not found</span></span>
<span class="line"><span>if [ \${#namespaces[@]} -eq 0 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>  printf &#39;\\n\\e[31m%s\\e[m: %s\\n&#39; &quot;ERROR&quot;  &quot;No namespaces found!!&quot;</span></span>
<span class="line"><span>  exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#get events for pods in errored state</span></span>
<span class="line"><span>get_pod_events()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  printf &#39;\\n&#39;</span></span>
<span class="line"><span>  if [ \${#ERRORED[@]} -ne 0 ]</span></span>
<span class="line"><span>  then</span></span>
<span class="line"><span>      info &quot;\${#ERRORED[@]} errored pods found.&quot;</span></span>
<span class="line"><span>      for CULPRIT in \${ERRORED[@]}</span></span>
<span class="line"><span>      do</span></span>
<span class="line"><span>        info &quot;POD: $CULPRIT&quot;</span></span>
<span class="line"><span>        info</span></span>
<span class="line"><span>        $KUBECTL get events \\</span></span>
<span class="line"><span>        --field-selector=involvedObject.name=$CULPRIT \\</span></span>
<span class="line"><span>        -ocustom-columns=LASTSEEN:.lastTimestamp,REASON:.reason,MESSAGE:.message \\</span></span>
<span class="line"><span>        --all-namespaces \\</span></span>
<span class="line"><span>        --ignore-not-found=true</span></span>
<span class="line"><span>      done</span></span>
<span class="line"><span>  else</span></span>
<span class="line"><span>      info &quot;0 pods with errored events found.&quot;</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define the logic</span></span>
<span class="line"><span>get_pod_errors()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  printf &quot;%s %s %s\\n&quot; &quot;NAMESPACE,POD_NAME,CONTAINER_NAME,ERRORS&quot; &gt; results.csv</span></span>
<span class="line"><span>  printf &quot;%s %s %s\\n&quot; &quot;---------,--------,--------------,------&quot; &gt;&gt; results.csv</span></span>
<span class="line"><span>  for NAMESPACE in \${namespaces[@]}</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>    while IFS=&#39; &#39; read -r POD CONTAINERS</span></span>
<span class="line"><span>    do</span></span>
<span class="line"><span>      for CONTAINER in \${CONTAINERS//,/ }</span></span>
<span class="line"><span>      do</span></span>
<span class="line"><span>        COUNT=$($KUBECTL logs --since=1h --tail=20 $POD -c $CONTAINER -n $NAMESPACE 2&gt;/dev/null| \\</span></span>
<span class="line"><span>        $GET -c &#39;^error|Error|ERROR|Warn|WARN&#39;)</span></span>
<span class="line"><span>        if [ $COUNT -gt 0 ]</span></span>
<span class="line"><span>        then</span></span>
<span class="line"><span>            STATE=(&quot;\${STATE[@]}&quot; &quot;$NAMESPACE,$POD,$CONTAINER,$COUNT&quot;)</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>        #catch pods in errored state</span></span>
<span class="line"><span>            ERRORED=($($KUBECTL get pods -n $NAMESPACE --no-headers=true | \\</span></span>
<span class="line"><span>                awk &#39;!/Running/ {print $1}&#39; ORS=&quot; &quot;) \\</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>      done</span></span>
<span class="line"><span>    done&lt; &lt;($KUBECTL get pods -n $NAMESPACE --ignore-not-found=true -o=custom-columns=NAME:.metadata.name,CONTAINERS:.spec.containers[*].name --no-headers=true)</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span>  printf &quot;%s\\n&quot; \${STATE[@]:-None} &gt;&gt; results.csv</span></span>
<span class="line"><span>  STATE=()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>#define usage for seprate run</span></span>
<span class="line"><span>usage()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>cat &lt;&lt; EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  USAGE: &quot;\${0##*/} &lt;/path/to/kube-config&gt;(optional)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  This program is a free software under the terms of Apache 2.0 License.</span></span>
<span class="line"><span>  COPYRIGHT (C) 2018 Abhishek Tamrakar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>exit 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#check if basic commands are found</span></span>
<span class="line"><span>trap cleanup EXIT</span></span>
<span class="line"><span>checkcmd KUBECTL</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#set the ground</span></span>
<span class="line"><span>if [ $# -lt 1 ]; then</span></span>
<span class="line"><span>  if [ ! -e \${KUBE_LOC} -a ! -s \${KUBE_LOC} ]</span></span>
<span class="line"><span>  then</span></span>
<span class="line"><span>    info &quot;A readable kube config location is required!!&quot;</span></span>
<span class="line"><span>    usage</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span>elif [ $# -eq 1 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>  export KUBECONFIG=$1</span></span>
<span class="line"><span>elif [ $# -gt 1 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>  usage</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>#play</span></span>
<span class="line"><span>get_namespaces</span></span>
<span class="line"><span>get_pod_errors</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &#39;\\n%40s\\n&#39; &#39;KRAWL&#39;</span></span>
<span class="line"><span>printf &#39;%s\\n&#39; &#39;---------------------------------------------------------------------------------&#39;</span></span>
<span class="line"><span>printf &#39;%s\\n&#39; &#39;  Krawl is a command line utility to scan pods and prints name of errored pods   &#39;</span></span>
<span class="line"><span>printf &#39;%s\\n\\n&#39; &#39; +and containers within. To use it as kubernetes plugin, please check their page &#39;</span></span>
<span class="line"><span>printf &#39;%s\\n&#39; &#39;=================================================================================&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat results.csv | sed &#39;s/,/,|/g&#39;| column -s &#39;,&#39; -t</span></span>
<span class="line"><span>get_pod_events</span></span></code></pre></div>`,7)),a("p",null,[s[4]||(s[4]=n("此文最初发布在 ",-1)),e(p,{href:"https://github.com/abhiTamrakar/kube-plugins/tree/master/krawl"},{default:l(()=>[...s[3]||(s[3]=[n("KRAWL 的 GitHub 仓库",-1)])]),_:1}),s[5]||(s[5]=n("下的 README 中，并被或许重用。",-1))]),s[26]||(s[26]=a("hr",null,null,-1)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/2/kubernetes-scanner"},{default:l(()=>[...s[6]||(s[6]=[n("https://opensource.com/article/20/2/kubernetes-scanner",-1)])]),_:1})]),a("p",null,[s[12]||(s[12]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/tamrakar"},{default:l(()=>[...s[8]||(s[8]=[n("Abhishek Tamrakar",-1)])]),_:1}),s[13]||(s[13]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[9]||(s[9]=[n("lujun9972",-1)])]),_:1}),s[14]||(s[14]=n(" 译者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:l(()=>[...s[10]||(s[10]=[n("geekpi",-1)])]),_:1}),s[15]||(s[15]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[11]||(s[11]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[16]||(s[16]=[n("LCTT",-1)])]),_:1}),s[19]||(s[19]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[17]||(s[17]=[n("Linux中国",-1)])]),_:1}),s[20]||(s[20]=n(" 荣誉推出",-1))])])}const T=i(u,[["render",d]]);export{A as __pageData,T as default};
