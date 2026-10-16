import{_ as o,a0 as s,w as p,s as l,ao as h,I as r,x as n,a1 as a,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"如何在 Linux 上運行命令前臨時清空 Bash 環境變量 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 上運行命令前臨時清空 Bash 環境變量 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 上運行命令前臨時清空 Bash 環境變量 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 上運行命令前臨時清空 Bash 環境變量 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150807 How To--Temporarily Clear Bash Environment Variables on a Linux and Unix-like System","title":"如何在 Linux 上運行命令前臨時清空 Bash 環境變量","tag":"201508","desc":""},"relativePath":"201508/20150807 How To--Temporarily Clear Bash Environment Variables on a Linux and Unix-like System.md","filePath":"[post].md"}'),d={name:"201508/20150807 How To--Temporarily Clear Bash Environment Variables on a Linux and Unix-like System.md"};function c(x,e,m,b,u,w){const t=s("Link");return p(),l("div",null,[e[11]||(e[11]=h(`<h1 id="如何在-linux-上運行命令前臨時清空-bash-環境變量" tabindex="-1">如何在 Linux 上運行命令前臨時清空 Bash 環境變量 <a class="header-anchor" href="#如何在-linux-上運行命令前臨時清空-bash-環境變量" aria-label="Permalink to “如何在 Linux 上運行命令前臨時清空 Bash 環境變量”">​</a></h1><p>我是個 bash shell 用户。我想臨時清空 bash shell 環境變量。但我不想刪除或者 unset 一個輸出的環境變量。我怎樣才能在 bash 或 ksh shell 的臨時環境中運行程序呢？</p><p>你可以在 Linux 或類 Unix 系統中使用 env 命令設置並打印環境。env 命令可以按命令列指定的變量來修改環境，之後再執行程序。</p><h3 id="如何顯示當前環境" tabindex="-1">如何顯示當前環境？ <a class="header-anchor" href="#如何顯示當前環境" aria-label="Permalink to “如何顯示當前環境？”">​</a></h3><p>打開終端應用程序並輸入下面的其中一個命令：</p><pre><code>printenv
</code></pre><p>或</p><pre><code>env
</code></pre><p>輸出樣例：</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/env-unix-linux-command-output.jpg" alt="Fig.01： Unix/Linux： 列出所有環境變量"></p><p><em>Fig.01： Unix/Linux： 列出所有環境變量</em></p><h3 id="統計環境變量數目" tabindex="-1">統計環境變量數目 <a class="header-anchor" href="#統計環境變量數目" aria-label="Permalink to “統計環境變量數目”">​</a></h3><p>輸入下面的命令：</p><pre><code>env | wc -l
printenv | wc -l    # 或者
</code></pre><p>輸出樣例：</p><pre><code>20
</code></pre><h3 id="在乾淨的-bash-ksh-zsh-環境中運行程序" tabindex="-1">在乾淨的 bash/ksh/zsh 環境中運行程序 <a class="header-anchor" href="#在乾淨的-bash-ksh-zsh-環境中運行程序" aria-label="Permalink to “在乾淨的  bash/ksh/zsh  環境中運行程序”">​</a></h3><p>語法如下所示：</p><pre><code>env -i your-program-name-here arg1 arg2 ...
</code></pre><p>例如，要在不使用 http_proxy 和/或任何其它環境變量的情況下運行 wget 程序。臨時清除所有 bash/ksh/zsh 環境變量並運行 wget 程序：</p><pre><code>env -i /usr/local/bin/wget www.cyberciti.biz
env -i wget www.cyberciti.biz     # 或者
</code></pre><p>這當你想忽視任何已經設置的環境變量來運行命令時非常有用。我每天都會多次使用這個命令，以便忽視 http_proxy 和其它我設置的環境變量。</p><h4 id="例子-使用-http-proxy" tabindex="-1">例子：使用 http_proxy <a class="header-anchor" href="#例子-使用-http-proxy" aria-label="Permalink to “例子：使用 http_proxy”">​</a></h4><pre><code>$ wget www.cyberciti.biz
--2015-08-03 23:20:23--  http://www.cyberciti.biz/
Connecting to 10.12.249.194:3128... connected.
Proxy request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: &#39;index.html&#39;
index.html                 [  &lt;=&gt;                         ]  36.17K  87.0KB/s   in 0.4s
2015-08-03 23:20:24 (87.0 KB/s) - &#39;index.html&#39; saved [37041]
</code></pre><h4 id="例子-忽視-http-proxy" tabindex="-1">例子：忽視 http_proxy <a class="header-anchor" href="#例子-忽視-http-proxy" aria-label="Permalink to “例子：忽視 http_proxy”">​</a></h4><pre><code>$ env -i /usr/local/bin/wget www.cyberciti.biz
--2015-08-03 23:25:17--  http://www.cyberciti.biz/
Resolving www.cyberciti.biz... 74.86.144.194
Connecting to www.cyberciti.biz|74.86.144.194|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: &#39;index.html.1&#39;
index.html.1               [  &lt;=&gt;                         ]  36.17K   115KB/s   in 0.3s
2015-08-03 23:25:18 (115 KB/s) - &#39;index.html.1&#39; saved [37041]
</code></pre><p>-i 選項使 env 命令完全忽視它繼承的環境。但是，它並不會阻止你的命令（例如 wget 或 curl）設置新的變量。同時，也要注意運行 bash/ksh shell 的副作用：</p><pre><code>env -i env | wc -l ## 空的 ##
# 現在運行 bash ##
env -i bash
## bash 設置了新的環境變量 ##
env | wc -l
</code></pre><h4 id="例子-設置一個環境變量" tabindex="-1">例子：設置一個環境變量 <a class="header-anchor" href="#例子-設置一個環境變量" aria-label="Permalink to “例子：設置一個環境變量”">​</a></h4><p>語法如下：</p><pre><code>env var=value /path/to/command arg1 arg2 ...
## 或 ## 
var=value  /path/to/command arg1 arg2 ...
</code></pre><p>例如設置 http_proxy:</p><pre><code>env http_proxy=&quot;http://USER:PASSWORD@server1.cyberciti.biz:3128/&quot; /usr/local/bin/wget www.cyberciti.biz
</code></pre><hr>`,34)),r("p",null,[e[1]||(e[1]=n("via: ",-1)),a(t,{href:"http://www.cyberciti.biz/faq/linux-unix-temporarily-clearing-environment-variables-command/"},{default:i(()=>[...e[0]||(e[0]=[n("http://www.cyberciti.biz/faq/linux-unix-temporarily-clearing-environment-variables-command/",-1)])]),_:1})]),r("p",null,[e[4]||(e[4]=n("作者：Vivek Gite 譯者：",-1)),a(t,{href:"https://github.com/ictlyh"},{default:i(()=>[...e[2]||(e[2]=[n("ictlyh",-1)])]),_:1}),e[5]||(e[5]=n(" 校對：",-1)),a(t,{href:"https://github.com/wxy"},{default:i(()=>[...e[3]||(e[3]=[n("wxy",-1)])]),_:1})]),r("p",null,[e[8]||(e[8]=n("本文由 ",-1)),a(t,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[6]||(e[6]=[n("LCTT",-1)])]),_:1}),e[9]||(e[9]=n(" 原創翻譯，",-1)),a(t,{href:"https://linux.cn/"},{default:i(()=>[...e[7]||(e[7]=[n("Linux中國",-1)])]),_:1}),e[10]||(e[10]=n(" 榮譽推出",-1))])])}const T=o(d,[["render",c]]);export{y as __pageData,T as default};
