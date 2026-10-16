import{_ as e,a0 as o,w as r,s as d,I as a,x as n,a1 as i,A as t,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"“Exit Trap” 让你的 Bash 脚本更稳固可靠 | LCTT x X-CMD","titleTemplate":false,"description":"“Exit Trap” 让你的 Bash 脚本更稳固可靠 | LCTT (201805) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"“Exit Trap” 让你的 Bash 脚本更稳固可靠 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"“Exit Trap” 让你的 Bash 脚本更稳固可靠 | LCTT (201805) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201805/20180101 How Exit Traps Can Make Your Bash Scripts Way More Robust And Reliable","title":"“Exit Trap” 让你的 Bash 脚本更稳固可靠","tag":"201805","desc":""},"relativePath":"201805/20180101 How Exit Traps Can Make Your Bash Scripts Way More Robust And Reliable.md","filePath":"[post].md"}'),u={name:"201805/20180101 How Exit Traps Can Make Your Bash Scripts Way More Robust And Reliable.md"};function h(b,s,c,f,g,k){const p=o("Link");return r(),d("div",null,[s[33]||(s[33]=a("h1",{id:"exit-trap-让你的-bash-脚本更稳固可靠",tabindex:"-1"},[n("“Exit Trap” 让你的 Bash 脚本更稳固可靠 "),a("a",{class:"header-anchor",href:"#exit-trap-让你的-bash-脚本更稳固可靠","aria-label":"Permalink to ““Exit Trap” 让你的 Bash 脚本更稳固可靠”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("有个简单实用的技巧可以让你的 bash 脚本更稳健 -- 确保总是执行必要的收尾工作，哪怕是在发生异常的时候。要做到这一点，秘诀就是 bash 提供的一个叫做 EXIT 的伪信号，你可以 ",-1)),i(p,{href:"http://www.gnu.org/software/bash/manual/bashref.html#index-trap"},{default:t(()=>[...s[0]||(s[0]=[n("trap",-1)])]),_:1}),s[2]||(s[2]=n(" 它，当脚本因为任何原因退出时，相应的命令或函数就会执行。我们来看看它是如何工作的。",-1))]),s[34]||(s[34]=l(`<p>基本的代码结构看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>function finish {</span></span>
<span class="line"><span>  # 你的收尾代码</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>trap finish EXIT</span></span></code></pre></div><p>你可以把任何你觉得务必要运行的代码放在这个 <code>finish</code> 函数里。一个很好的例子是：创建一个临时目录，事后再删除它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>scratch=$(mktemp -d -t tmp.XXXXXXXXXX)</span></span>
<span class="line"><span>function finish {</span></span>
<span class="line"><span>  rm -rf &quot;$scratch&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>trap finish EXIT</span></span></code></pre></div>`,4)),a("p",null,[s[4]||(s[4]=n("这样，在你的核心代码中，你就可以在这个 ",-1)),s[5]||(s[5]=a("code",null,"$scratch",-1)),s[6]||(s[6]=n(" 目录里下载、生成、操作中间或临时数据了。^",-1)),i(p,{href:"http://redsymbol.net/articles/bash-exit-traps/#footnote-1"},{default:t(()=>[...s[3]||(s[3]=[n("注1",-1)])]),_:1})]),s[35]||(s[35]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 下载所有版本的 linux 内核…… 为了科学研究！</span></span>
<span class="line"><span>for major in {1..4}; do</span></span>
<span class="line"><span>  for minor in {0..99}; do</span></span>
<span class="line"><span>    for patchlevel in {0..99}; do</span></span>
<span class="line"><span>      tarball=&quot;linux-\${major}-\${minor}-\${patchlevel}.tar.bz2&quot;</span></span>
<span class="line"><span>      curl -q &quot;http://kernel.org/path/to/$tarball&quot; -o &quot;$scratch/$tarball&quot; || true</span></span>
<span class="line"><span>      if [ -f &quot;$scratch/$tarball&quot; ]; then</span></span>
<span class="line"><span>        tar jxf &quot;$scratch/$tarball&quot;</span></span>
<span class="line"><span>      fi</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span># 整合成单个文件</span></span>
<span class="line"><span># 复制到目标位置</span></span>
<span class="line"><span>cp &quot;$scratch/frankenstein-linux.tar.bz2&quot; &quot;$1&quot;</span></span>
<span class="line"><span># 脚本结束， scratch 目录自动被删除</span></span></code></pre></div><p>比较一下如果不用 <code>trap</code> ，你是怎么删除 <code>scratch</code> 目录的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># 别这样做！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scratch=$(mktemp -d -t tmp.XXXXXXXXXX)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在这里插入你的几十上百行代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 都搞定了，退出之前把目录删除</span></span>
<span class="line"><span>rm -rf &quot;$scratch&quot;</span></span></code></pre></div><p>这有什么问题么？很多：</p><ul><li><p>如果运行出错导致脚本提前退出， <code>scratch</code> 目录及里面的内容不会被删除。这会导致资料泄漏，可能引发安全问题。</p></li><li><p>如果这个脚本的设计初衷就是在脚本末尾以前退出，那么你必须手动复制粘贴 <code>rm</code> 命令到每一个出口。</p></li><li><p>这也给维护带来了麻烦。如果今后在脚本某处添加了一个 <code>exit</code> ，你很可能就忘了加上删除操作 -- 从而制造潜在的安全漏洞。</p></li></ul><h3 id="无论如何-服务要在线" tabindex="-1">无论如何，服务要在线 <a class="header-anchor" href="#无论如何-服务要在线" aria-label="Permalink to “无论如何，服务要在线”">​</a></h3><p>另外一个场景： 想象一下你正在运行一些自动化系统运维任务，要临时关闭一项服务，最后这项服务需要重启，而且要万无一失，即使脚本运行出错。那么你可以这样做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function finish {</span></span>
<span class="line"><span>    # 重启服务</span></span>
<span class="line"><span>    sudo /etc/init.d/something start</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>trap finish EXIT</span></span>
<span class="line"><span>sudo /etc/init.d/something stop</span></span>
<span class="line"><span># 主要任务代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 脚本结束，执行 finish 函数重启服务</span></span></code></pre></div><p>一个具体的实例：比如 Ubuntu 服务器上运行着 MongoDB ，你要为 crond 写一个脚本来临时关闭服务并做一些日常维护工作。你应该这样写：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function finish {</span></span>
<span class="line"><span>    # 重启服务</span></span>
<span class="line"><span>    sudo service mongdb start</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>trap finish EXIT</span></span>
<span class="line"><span># 关闭 mongod 服务</span></span>
<span class="line"><span>sudo service mongdb stop</span></span>
<span class="line"><span># （如果 mongod 配置了 fork ，比如 replica set ，你可能需要执行 “sudo killall --wait /usr/bin/mongod”）</span></span></code></pre></div><h3 id="控制开销" tabindex="-1">控制开销 <a class="header-anchor" href="#控制开销" aria-label="Permalink to “控制开销”">​</a></h3><p>有一种情况特别能体现 EXIT <code>trap</code> 的价值：如果你的脚本运行过程中需要初始化一下成本高昂的资源，结束时要确保把它们释放掉。比如你在 AWS (Amazon Web Services) 上工作，要在脚本中创建一个镜像。</p>`,12)),a("p",null,[s[8]||(s[8]=n("（名词解释: 在亚马逊云上的运行的服务器叫“",-1)),i(p,{href:"http://aws.amazon.com/ec2/"},{default:t(()=>[...s[7]||(s[7]=[n("实例",-1)])]),_:1}),s[9]||(s[9]=n("”。实例从",-1)),s[10]||(s[10]=a("ruby",null,[n("亚马逊机器镜像"),a("rt",null,"Amazon Machine Image")],-1)),s[11]||(s[11]=n("创建而来，通常被称为 “AMI” 或 “镜像” 。AMI 相当于某个特殊时间点的服务器快照。）",-1))]),s[36]||(s[36]=l(`<p>我们可以这样创建一个自定义的 AMI ：</p><ol><li>基于一个基准 AMI 运行一个实例（例如，启动一个服务器）。</li><li>在实例中手动或运行脚本来做一些修改。</li><li>用修改后的实例创建一个镜像。</li><li>如果不再需要这个实例，可以将其删除。</li></ol><p>最后一步<strong>相当重要</strong>。如果你的脚本没有把实例删除掉，它会一直运行并计费。（到月底你的账单让你大跌眼镜时，恐怕哭都来不及了！）</p><p>如果把 AMI 的创建封装在脚本里，我们就可以利用 <code>trap</code> EXIT 来删除实例了。我们还可以用上 EC2 的命令行工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># 定义基准 AMI 的 ID</span></span>
<span class="line"><span>ami=$1</span></span>
<span class="line"><span># 保存临时实例的 ID</span></span>
<span class="line"><span>instance=&#39;&#39;</span></span>
<span class="line"><span># 作为 IT 人，让我们看看 scratch 目录的另类用法</span></span>
<span class="line"><span>scratch=$(mktemp -d -t tmp.XXXXXXXXXX)</span></span>
<span class="line"><span>function finish {</span></span>
<span class="line"><span>    if [ -n &quot;$instance&quot; ]; then</span></span>
<span class="line"><span>        ec2-terminate-instances &quot;$instance&quot;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    rm -rf &quot;$scratch&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>trap finish EXIT</span></span>
<span class="line"><span># 创建实例，将输出(包含实例 ID )保存到 scratch 目录下的文件里</span></span>
<span class="line"><span>ec2-run-instances &quot;$ami&quot; &gt; &quot;$scratch/run-instance&quot;</span></span>
<span class="line"><span># 提取实例 ID</span></span>
<span class="line"><span>instance=$(grep &#39;^INSTANCE&#39; &quot;$scratch/run-instance&quot; | cut -f 2)</span></span></code></pre></div>`,5)),a("p",null,[s[13]||(s[13]=n("脚本执行到这里，实例（EC2 服务器）已经开始运行 ^",-1)),i(p,{href:"http://redsymbol.net/articles/bash-exit-traps/#footnote-2"},{default:t(()=>[...s[12]||(s[12]=[n("注2",-1)])]),_:1}),s[14]||(s[14]=n("。接下来你可以做任何事情：在实例中安装软件，修改配置文件等，然后为最终版本创建一个镜像。实例会在脚本结束时被删除 -- 即使脚本因错误而提前退出。（请确保实例创建成功后再运行业务代码。）",-1))]),s[37]||(s[37]=l('<h3 id="更多应用" tabindex="-1">更多应用 <a class="header-anchor" href="#更多应用" aria-label="Permalink to “更多应用”">​</a></h3><p>这篇文章只讲了些皮毛。我已经使用这个 bash 技巧很多年了，现在还能不时发现一些有趣的用法。你也可以把这个方法应用到你自己的场景中，从而提升你的 bash 脚本的可靠性。</p><h3 id="尾注" tabindex="-1">尾注 <a class="header-anchor" href="#尾注" aria-label="Permalink to “尾注”">​</a></h3><ul><li>注1. <code>mktemp</code> 的选项 <code>-t</code> 在 Linux 上是可选的，在 OS X 上是必需的。带上此选项可以让你的脚本有更好的可移植性。</li><li>注2. 如果只是为了获取实例 ID ，我们不用创建文件，直接写成 <code>instance=$(ec2-run-instances &quot;$ami&quot; | grep &#39;^INSTANCE&#39; | cut -f 2)</code> 就可以。但把输出写入文件可以记录更多有用信息，便于调试 ，代码可读性也更强。</li></ul>',4)),a("p",null,[s[17]||(s[17]=n("作者简介：美国加利福尼亚旧金山的作家，软件工程师，企业家。",-1)),i(p,{href:"https://www.amazon.com/d/0692878971"},{default:t(()=>[...s[15]||(s[15]=[n("Powerful Python",-1)])]),_:1}),s[18]||(s[18]=n(" 的作者，他的 ",-1)),i(p,{href:"https://powerfulpython.com/blog/"},{default:t(()=>[...s[16]||(s[16]=[n("blog",-1)])]),_:1}),s[19]||(s[19]=n("。",-1))]),s[38]||(s[38]=a("hr",null,null,-1)),a("p",null,[s[21]||(s[21]=n("via: ",-1)),i(p,{href:"http://redsymbol.net/articles/bash-exit-traps/"},{default:t(()=>[...s[20]||(s[20]=[n("http://redsymbol.net/articles/bash-exit-traps/",-1)])]),_:1})]),a("p",null,[s[25]||(s[25]=n("作者：",-1)),i(p,{href:"http://redsymbol.net/"},{default:t(()=>[...s[22]||(s[22]=[n("aaron maxwell",-1)])]),_:1}),s[26]||(s[26]=n(" 译者：",-1)),i(p,{href:"https://github.com/Dotcra"},{default:t(()=>[...s[23]||(s[23]=[n("Dotcra",-1)])]),_:1}),s[27]||(s[27]=n(" 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[24]||(s[24]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[28]||(s[28]=[n("LCTT",-1)])]),_:1}),s[31]||(s[31]=n(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:t(()=>[...s[29]||(s[29]=[n("Linux中国",-1)])]),_:1}),s[32]||(s[32]=n(" 荣誉推出",-1))])])}const C=e(u,[["render",h]]);export{x as __pageData,C as default};
