import{_ as l,a0 as t,w as o,s as r,ao as d,I as p,x as n,a1 as e,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"如何在 Linux 的 bash 中永远循环 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 的 bash 中永远循环 | LCTT (202007) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 的 bash 中永远循环 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 的 bash 中永远循环 | LCTT (202007) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202007/20200616 How to loop forever in bash on Linux","title":"如何在 Linux 的 bash 中永远循环","tag":"202007","desc":""},"relativePath":"202007/20200616 How to loop forever in bash on Linux.md","filePath":"[post].md"}'),h={name:"202007/20200616 How to loop forever in bash on Linux.md"};function c(g,s,u,b,k,f){const a=t("Link");return o(),r("div",null,[s[15]||(s[15]=d(`<h1 id="如何在-linux-的-bash-中永远循环" tabindex="-1">如何在 Linux 的 bash 中永远循环 <a class="header-anchor" href="#如何在-linux-的-bash-中永远循环" aria-label="Permalink to “如何在 Linux 的 bash 中永远循环”">​</a></h1><p><img src="https://images.idgesg.net/images/article/2020/06/nw_circular-staircase_loop_infinity_nautilus_by-tine-ivanic-via-unsplash-100848725-large.jpg" alt="tine ivanic"></p><p>在 Linux 中有很多永远循环（或直到你决定停止）的方法，你可以在命令行或脚本中执行此操作。</p><p><code>for</code> 和 <code>while</code> 命令使这件事非常容易。关于相应的语法和策略，只有几件事要牢记。</p><h3 id="使用-while" tabindex="-1">使用 while <a class="header-anchor" href="#使用-while" aria-label="Permalink to “使用 while”">​</a></h3><p>最简单的永远循环之一是使用 <code>while</code> 命令，后面跟上条件 <code>true</code>。 你不必使用诸如 <code>while [ 1 -eq 1 ]</code> 之类的逻辑或类似的测试。 <code>while true</code> 测试表示循环将一直运行，直到你使用 <code>CTRL-C</code> 停止循环、关闭终端窗口或注销为止。这是一个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ while true</span></span>
<span class="line"><span>&gt; do</span></span>
<span class="line"><span>&gt;   echo Keep running</span></span>
<span class="line"><span>&gt;   sleep 3</span></span>
<span class="line"><span>&gt; done</span></span>
<span class="line"><span>Keep running</span></span>
<span class="line"><span>Keep running</span></span>
<span class="line"><span>Keep running</span></span>
<span class="line"><span>^C</span></span></code></pre></div><p>你也可以使用 <code>while :</code> 做同样的事情。这里的关键是 <code>:</code> 总是返回成功，因此就像 <code>while true</code> 一样，此测试永远不会失败，并且循环会继续运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ while :</span></span>
<span class="line"><span>&gt; do</span></span>
<span class="line"><span>&gt;   echo Keep running</span></span>
<span class="line"><span>&gt;   sleep 3</span></span>
<span class="line"><span>&gt; done</span></span>
<span class="line"><span>Keep running</span></span>
<span class="line"><span>Keep running</span></span>
<span class="line"><span>^C</span></span></code></pre></div><p>如果你在脚本中插入了无限循环，并想提醒使用它的人如何退出脚本，那么可以使用 <code>echo</code> 命令添加提示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while :</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>        echo Keep running</span></span>
<span class="line"><span>        echo &quot;Press CTRL+C to exit&quot;</span></span>
<span class="line"><span>        sleep 1</span></span>
<span class="line"><span>done</span></span></code></pre></div><h3 id="使用-for" tabindex="-1">使用 for <a class="header-anchor" href="#使用-for" aria-label="Permalink to “使用 for”">​</a></h3><p><code>for</code> 命令还提供了一种永远循环的简便方法。虽然不如 <code>while true</code> 明显，但语法相当简单。你只需要在有界循环中替换参数即可，它通常类似于 “c 从等于 1 开始递增，直到 5”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ for (( c=1; c&lt;=5; c++ ))</span></span></code></pre></div><p>不指定任何参数的情况下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ for (( ; ; ))</span></span></code></pre></div><p>没有起始值、增量或退出测试，此循环将永远运行或被强制停止：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ for (( ; ; ))</span></span>
<span class="line"><span>&gt; do</span></span>
<span class="line"><span>&gt;    echo Keep running</span></span>
<span class="line"><span>&gt;   echo “Press CTRL+C to exit”</span></span>
<span class="line"><span>&gt;    sleep 2</span></span>
<span class="line"><span>&gt; done</span></span>
<span class="line"><span>Keep your spirits up</span></span>
<span class="line"><span>Keep your spirits up</span></span>
<span class="line"><span>Keep your spirits up</span></span></code></pre></div><h3 id="为什么要永远循环" tabindex="-1">为什么要永远循环？ <a class="header-anchor" href="#为什么要永远循环" aria-label="Permalink to “为什么要永远循环？”">​</a></h3><p>在现实中，你不会想永远循环下去，但一直运行直到想要回家、工作完成或者遇到问题才退出并不罕见。任何构造为无限循环的循环都可以设置为根据各种情况退出。</p><p>该脚本将一直处理数据直到下午 5 点，或者说检查发现第一次超过 5 点的时间：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while true</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  if [ \`date +%H\` -ge 17 ]; then</span></span>
<span class="line"><span>    exit        # exit script</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span>  echo keep running</span></span>
<span class="line"><span>  ~/bin/process_data     # do some work</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果要退出循环而不是退出脚本，请使用 <code>break</code> 命令而不是 <code>exit</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while true</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  if [ \`date +%H\` -ge 17 ]; then</span></span>
<span class="line"><span>    break       # exit loop</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span>  echo keep running</span></span>
<span class="line"><span>  ~/bin/process_data</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>… run other commands here …</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>永远循环很容易。指定要停止循环的条件却需要花费一些额外的精力。</p><hr>`,27)),p("p",null,[s[1]||(s[1]=n("via: ",-1)),e(a,{href:"https://www.networkworld.com/article/3562576/how-to-loop-forever-in-bash-on-linux.html"},{default:i(()=>[...s[0]||(s[0]=[n("https://www.networkworld.com/article/3562576/how-to-loop-forever-in-bash-on-linux.html",-1)])]),_:1})]),p("p",null,[s[6]||(s[6]=n("作者：",-1)),e(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:i(()=>[...s[2]||(s[2]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),e(a,{href:"https://github.com/geekpi"},{default:i(()=>[...s[4]||(s[4]=[n("geekpi",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[12]||(s[12]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:i(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const C=l(h,[["render",c]]);export{w as __pageData,C as default};
