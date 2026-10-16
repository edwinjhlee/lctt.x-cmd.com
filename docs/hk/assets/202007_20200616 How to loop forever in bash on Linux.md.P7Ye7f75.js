import{_ as l,a0 as t,w as o,s as r,ao as d,I as p,x as n,a1 as e,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"如何在 Linux 的 bash 中永遠循環 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 的 bash 中永遠循環 | LCTT (202007) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 的 bash 中永遠循環 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 的 bash 中永遠循環 | LCTT (202007) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202007/20200616 How to loop forever in bash on Linux","title":"如何在 Linux 的 bash 中永遠循環","tag":"202007","desc":""},"relativePath":"202007/20200616 How to loop forever in bash on Linux.md","filePath":"[post].md"}'),h={name:"202007/20200616 How to loop forever in bash on Linux.md"};function c(g,s,u,b,k,f){const a=t("Link");return o(),r("div",null,[s[15]||(s[15]=d(`<h1 id="如何在-linux-的-bash-中永遠循環" tabindex="-1">如何在 Linux 的 bash 中永遠循環 <a class="header-anchor" href="#如何在-linux-的-bash-中永遠循環" aria-label="Permalink to “如何在 Linux 的 bash 中永遠循環”">​</a></h1><p><img src="https://images.idgesg.net/images/article/2020/06/nw_circular-staircase_loop_infinity_nautilus_by-tine-ivanic-via-unsplash-100848725-large.jpg" alt="tine ivanic"></p><p>在 Linux 中有很多永遠循環（或直到你決定停止）的方法，你可以在命令列或腳本中執行此操作。</p><p><code>for</code> 和 <code>while</code> 命令使這件事非常容易。關於相應的語法和策略，只有幾件事要牢記。</p><h3 id="使用-while" tabindex="-1">使用 while <a class="header-anchor" href="#使用-while" aria-label="Permalink to “使用 while”">​</a></h3><p>最簡單的永遠循環之一是使用 <code>while</code> 命令，後面跟上條件 <code>true</code>。 你不必使用諸如 <code>while [ 1 -eq 1 ]</code> 之類的邏輯或類似的測試。 <code>while true</code> 測試表示循環將一直運行，直到你使用 <code>CTRL-C</code> 停止循環、關閉終端窗口或註銷為止。這是一個例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ while true</span></span>
<span class="line"><span>&gt; do</span></span>
<span class="line"><span>&gt;   echo Keep running</span></span>
<span class="line"><span>&gt;   sleep 3</span></span>
<span class="line"><span>&gt; done</span></span>
<span class="line"><span>Keep running</span></span>
<span class="line"><span>Keep running</span></span>
<span class="line"><span>Keep running</span></span>
<span class="line"><span>^C</span></span></code></pre></div><p>你也可以使用 <code>while :</code> 做同樣的事情。這裏的關鍵是 <code>:</code> 總是返回成功，因此就像 <code>while true</code> 一樣，此測試永遠不會失敗，並且循環會繼續運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ while :</span></span>
<span class="line"><span>&gt; do</span></span>
<span class="line"><span>&gt;   echo Keep running</span></span>
<span class="line"><span>&gt;   sleep 3</span></span>
<span class="line"><span>&gt; done</span></span>
<span class="line"><span>Keep running</span></span>
<span class="line"><span>Keep running</span></span>
<span class="line"><span>^C</span></span></code></pre></div><p>如果你在腳本中插入了無限循環，並想提醒使用它的人如何退出腳本，那麼可以使用 <code>echo</code> 命令添加提示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while :</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>        echo Keep running</span></span>
<span class="line"><span>        echo &quot;Press CTRL+C to exit&quot;</span></span>
<span class="line"><span>        sleep 1</span></span>
<span class="line"><span>done</span></span></code></pre></div><h3 id="使用-for" tabindex="-1">使用 for <a class="header-anchor" href="#使用-for" aria-label="Permalink to “使用 for”">​</a></h3><p><code>for</code> 命令還提供了一種永遠循環的簡便方法。雖然不如 <code>while true</code> 明顯，但語法相當簡單。你只需要在有界循環中替換參數即可，它通常類似於 “c 從等於 1 開始遞增，直到 5”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ for (( c=1; c&lt;=5; c++ ))</span></span></code></pre></div><p>不指定任何參數的情況下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ for (( ; ; ))</span></span></code></pre></div><p>沒有起始值、增量或退出測試，此循環將永遠運行或被強制停止：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ for (( ; ; ))</span></span>
<span class="line"><span>&gt; do</span></span>
<span class="line"><span>&gt;    echo Keep running</span></span>
<span class="line"><span>&gt;   echo “Press CTRL+C to exit”</span></span>
<span class="line"><span>&gt;    sleep 2</span></span>
<span class="line"><span>&gt; done</span></span>
<span class="line"><span>Keep your spirits up</span></span>
<span class="line"><span>Keep your spirits up</span></span>
<span class="line"><span>Keep your spirits up</span></span></code></pre></div><h3 id="為什麼要永遠循環" tabindex="-1">為什麼要永遠循環？ <a class="header-anchor" href="#為什麼要永遠循環" aria-label="Permalink to “為什麼要永遠循環？”">​</a></h3><p>在現實中，你不會想永遠循環下去，但一直運行直到想要回家、工作完成或者遇到問題才退出並不罕見。任何構造為無限循環的循環都可以設置為根據各種情況退出。</p><p>該腳本將一直處理數據直到下午 5 點，或者説檢查發現第一次超過 5 點的時間：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while true</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  if [ \`date +%H\` -ge 17 ]; then</span></span>
<span class="line"><span>    exit        # exit script</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span>  echo keep running</span></span>
<span class="line"><span>  ~/bin/process_data     # do some work</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果要退出循環而不是退出腳本，請使用 <code>break</code> 命令而不是 <code>exit</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while true</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  if [ \`date +%H\` -ge 17 ]; then</span></span>
<span class="line"><span>    break       # exit loop</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span>  echo keep running</span></span>
<span class="line"><span>  ~/bin/process_data</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>… run other commands here …</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>永遠循環很容易。指定要停止循環的條件卻需要花費一些額外的精力。</p><hr>`,27)),p("p",null,[s[1]||(s[1]=n("via: ",-1)),e(a,{href:"https://www.networkworld.com/article/3562576/how-to-loop-forever-in-bash-on-linux.html"},{default:i(()=>[...s[0]||(s[0]=[n("https://www.networkworld.com/article/3562576/how-to-loop-forever-in-bash-on-linux.html",-1)])]),_:1})]),p("p",null,[s[6]||(s[6]=n("作者：",-1)),e(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:i(()=>[...s[2]||(s[2]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[7]||(s[7]=n(" 選題：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 譯者：",-1)),e(a,{href:"https://github.com/geekpi"},{default:i(()=>[...s[4]||(s[4]=[n("geekpi",-1)])]),_:1}),s[9]||(s[9]=n(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[12]||(s[12]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:i(()=>[...s[11]||(s[11]=[n("Linux中國",-1)])]),_:1}),s[14]||(s[14]=n(" 榮譽推出",-1))])])}const C=l(h,[["render",c]]);export{w as __pageData,C as default};
