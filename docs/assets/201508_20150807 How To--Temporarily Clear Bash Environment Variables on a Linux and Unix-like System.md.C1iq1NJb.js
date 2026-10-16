import{_ as o,a0 as s,w as p,s as l,ao as h,I as r,x as n,a1 as a,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何在 Linux 上运行命令前临时清空 Bash 环境变量 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 上运行命令前临时清空 Bash 环境变量 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 上运行命令前临时清空 Bash 环境变量 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 上运行命令前临时清空 Bash 环境变量 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150807 How To--Temporarily Clear Bash Environment Variables on a Linux and Unix-like System","title":"如何在 Linux 上运行命令前临时清空 Bash 环境变量","tag":"201508","desc":""},"relativePath":"201508/20150807 How To--Temporarily Clear Bash Environment Variables on a Linux and Unix-like System.md","filePath":"[post].md"}'),d={name:"201508/20150807 How To--Temporarily Clear Bash Environment Variables on a Linux and Unix-like System.md"};function c(x,e,m,b,u,w){const t=s("Link");return p(),l("div",null,[e[11]||(e[11]=h(`<h1 id="如何在-linux-上运行命令前临时清空-bash-环境变量" tabindex="-1">如何在 Linux 上运行命令前临时清空 Bash 环境变量 <a class="header-anchor" href="#如何在-linux-上运行命令前临时清空-bash-环境变量" aria-label="Permalink to “如何在 Linux 上运行命令前临时清空 Bash 环境变量”">​</a></h1><p>我是个 bash shell 用户。我想临时清空 bash shell 环境变量。但我不想删除或者 unset 一个输出的环境变量。我怎样才能在 bash 或 ksh shell 的临时环境中运行程序呢？</p><p>你可以在 Linux 或类 Unix 系统中使用 env 命令设置并打印环境。env 命令可以按命令行指定的变量来修改环境，之后再执行程序。</p><h3 id="如何显示当前环境" tabindex="-1">如何显示当前环境？ <a class="header-anchor" href="#如何显示当前环境" aria-label="Permalink to “如何显示当前环境？”">​</a></h3><p>打开终端应用程序并输入下面的其中一个命令：</p><pre><code>printenv
</code></pre><p>或</p><pre><code>env
</code></pre><p>输出样例：</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/env-unix-linux-command-output.jpg" alt="Fig.01： Unix/Linux： 列出所有环境变量"></p><p><em>Fig.01： Unix/Linux： 列出所有环境变量</em></p><h3 id="统计环境变量数目" tabindex="-1">统计环境变量数目 <a class="header-anchor" href="#统计环境变量数目" aria-label="Permalink to “统计环境变量数目”">​</a></h3><p>输入下面的命令：</p><pre><code>env | wc -l
printenv | wc -l    # 或者
</code></pre><p>输出样例：</p><pre><code>20
</code></pre><h3 id="在干净的-bash-ksh-zsh-环境中运行程序" tabindex="-1">在干净的 bash/ksh/zsh 环境中运行程序 <a class="header-anchor" href="#在干净的-bash-ksh-zsh-环境中运行程序" aria-label="Permalink to “在干净的  bash/ksh/zsh  环境中运行程序”">​</a></h3><p>语法如下所示：</p><pre><code>env -i your-program-name-here arg1 arg2 ...
</code></pre><p>例如，要在不使用 http_proxy 和/或任何其它环境变量的情况下运行 wget 程序。临时清除所有 bash/ksh/zsh 环境变量并运行 wget 程序：</p><pre><code>env -i /usr/local/bin/wget www.cyberciti.biz
env -i wget www.cyberciti.biz     # 或者
</code></pre><p>这当你想忽视任何已经设置的环境变量来运行命令时非常有用。我每天都会多次使用这个命令，以便忽视 http_proxy 和其它我设置的环境变量。</p><h4 id="例子-使用-http-proxy" tabindex="-1">例子：使用 http_proxy <a class="header-anchor" href="#例子-使用-http-proxy" aria-label="Permalink to “例子：使用 http_proxy”">​</a></h4><pre><code>$ wget www.cyberciti.biz
--2015-08-03 23:20:23--  http://www.cyberciti.biz/
Connecting to 10.12.249.194:3128... connected.
Proxy request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: &#39;index.html&#39;
index.html                 [  &lt;=&gt;                         ]  36.17K  87.0KB/s   in 0.4s
2015-08-03 23:20:24 (87.0 KB/s) - &#39;index.html&#39; saved [37041]
</code></pre><h4 id="例子-忽视-http-proxy" tabindex="-1">例子：忽视 http_proxy <a class="header-anchor" href="#例子-忽视-http-proxy" aria-label="Permalink to “例子：忽视 http_proxy”">​</a></h4><pre><code>$ env -i /usr/local/bin/wget www.cyberciti.biz
--2015-08-03 23:25:17--  http://www.cyberciti.biz/
Resolving www.cyberciti.biz... 74.86.144.194
Connecting to www.cyberciti.biz|74.86.144.194|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: &#39;index.html.1&#39;
index.html.1               [  &lt;=&gt;                         ]  36.17K   115KB/s   in 0.3s
2015-08-03 23:25:18 (115 KB/s) - &#39;index.html.1&#39; saved [37041]
</code></pre><p>-i 选项使 env 命令完全忽视它继承的环境。但是，它并不会阻止你的命令（例如 wget 或 curl）设置新的变量。同时，也要注意运行 bash/ksh shell 的副作用：</p><pre><code>env -i env | wc -l ## 空的 ##
# 现在运行 bash ##
env -i bash
## bash 设置了新的环境变量 ##
env | wc -l
</code></pre><h4 id="例子-设置一个环境变量" tabindex="-1">例子：设置一个环境变量 <a class="header-anchor" href="#例子-设置一个环境变量" aria-label="Permalink to “例子：设置一个环境变量”">​</a></h4><p>语法如下：</p><pre><code>env var=value /path/to/command arg1 arg2 ...
## 或 ## 
var=value  /path/to/command arg1 arg2 ...
</code></pre><p>例如设置 http_proxy:</p><pre><code>env http_proxy=&quot;http://USER:PASSWORD@server1.cyberciti.biz:3128/&quot; /usr/local/bin/wget www.cyberciti.biz
</code></pre><hr>`,34)),r("p",null,[e[1]||(e[1]=n("via: ",-1)),a(t,{href:"http://www.cyberciti.biz/faq/linux-unix-temporarily-clearing-environment-variables-command/"},{default:i(()=>[...e[0]||(e[0]=[n("http://www.cyberciti.biz/faq/linux-unix-temporarily-clearing-environment-variables-command/",-1)])]),_:1})]),r("p",null,[e[4]||(e[4]=n("作者：Vivek Gite 译者：",-1)),a(t,{href:"https://github.com/ictlyh"},{default:i(()=>[...e[2]||(e[2]=[n("ictlyh",-1)])]),_:1}),e[5]||(e[5]=n(" 校对：",-1)),a(t,{href:"https://github.com/wxy"},{default:i(()=>[...e[3]||(e[3]=[n("wxy",-1)])]),_:1})]),r("p",null,[e[8]||(e[8]=n("本文由 ",-1)),a(t,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[6]||(e[6]=[n("LCTT",-1)])]),_:1}),e[9]||(e[9]=n(" 原创翻译，",-1)),a(t,{href:"https://linux.cn/"},{default:i(()=>[...e[7]||(e[7]=[n("Linux中国",-1)])]),_:1}),e[10]||(e[10]=n(" 荣誉推出",-1))])])}const T=o(d,[["render",c]]);export{y as __pageData,T as default};
