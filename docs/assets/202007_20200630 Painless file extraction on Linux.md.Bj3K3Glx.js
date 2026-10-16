import{_ as l,a0 as t,w as o,s as r,ao as f,I as i,x as s,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"Linux 上无痛文件提取 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 上无痛文件提取 | LCTT (202007) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 上无痛文件提取 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 上无痛文件提取 | LCTT (202007) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202007/20200630 Painless file extraction on Linux","title":"Linux 上无痛文件提取","tag":"202007","desc":""},"relativePath":"202007/20200630 Painless file extraction on Linux.md","filePath":"[post].md"}'),c={name:"202007/20200630 Painless file extraction on Linux.md"};function u(m,n,d,h,g,x){const a=t("Link");return o(),r("div",null,[n[15]||(n[15]=f(`<h1 id="linux-上无痛文件提取" tabindex="-1">Linux 上无痛文件提取 <a class="header-anchor" href="#linux-上无痛文件提取" aria-label="Permalink to “Linux 上无痛文件提取”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202007/12/233401zickd110d2dl6u6f.jpg" alt=""></p><p>从 Linux 系统的存档中提取文件没有拔牙那么痛苦，但有时看起来更复杂。在这篇文章中，我们将看看如何轻松地从 Linux 系统中可能遇到的几乎所有类型的存档中提取文件。</p><p>它们有很多格式，从 .gz 到 .tbz2，这些文件的命名方式都各有一些不同。当然，你可以记住所有从存档中提取文件的各种命令以及它们的选项，但是你也可以将所有经验保存到脚本中，而不再担心细节。</p><p>在本文中，我们将一系列提取命令组合成一个脚本，它会调用适当的命令根据文档名提取文件的内容。该脚本首先以一些命令来验证是否已经提供了一个文件名作为参数，或要求运行脚本的人提供文件名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $# -eq 0 ]; then</span></span>
<span class="line"><span>    echo -n &quot;filename&gt; &quot;</span></span>
<span class="line"><span>    read filename</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    filename=$1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ ! -f &quot;$filename&quot; ]; then</span></span>
<span class="line"><span>    echo &quot;No such file: $filename&quot;</span></span>
<span class="line"><span>    exit $?</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>了解了么？如果未提供任何参数，脚本将提示输入文件名，如果存在则使用它。然后，它验证文件是否实际存在。如果不是，那么脚本退出。</p><p>下一步是使用 bash 的 <code>case</code> 语句根据存档文件的名称调用适当的提取命令。对于其中某些文件类型（例如 .bz2），也可以使用除 <code>tar</code> 之外的其它命令，但是对于每种文件命名约定，我们仅包含一个提取命令。因此，这是带有各种存档文件名的 <code>case</code> 语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> case $filename in</span></span>
<span class="line"><span>    *.tar)      tar xf $filename;;</span></span>
<span class="line"><span>    *.tar.bz2)  tar xjf $filename;;</span></span>
<span class="line"><span>    *.tbz)      tar xjf $filename;;</span></span>
<span class="line"><span>    *.tbz2)     tar xjf $filename;;</span></span>
<span class="line"><span>    *.tgz)      tar xzf $filename;;</span></span>
<span class="line"><span>    *.tar.gz)   tar xzf $filename;;</span></span>
<span class="line"><span>    *.gz)       gunzip $filename;;</span></span>
<span class="line"><span>    *.bz2)      bunzip2 $filename;;</span></span>
<span class="line"><span>    *.zip)      unzip $filename;;</span></span>
<span class="line"><span>    *.Z)        uncompress $filename;;</span></span>
<span class="line"><span>    *)          echo &quot;No extract option for $filename&quot;</span></span>
<span class="line"><span>esac</span></span></code></pre></div><p>如果提供给脚本的文件扩展名与脚本已知的扩展名都不匹配，那么会发出 “No extract option for $filename” 的消息。如果缺少你使用的任何存档类型，只需将它们与所需的提取命令一起添加即可。</p><p>将 bash 头添加到脚本顶部，使其可执行，然后就可以开始了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $# -eq 0 ]; then</span></span>
<span class="line"><span>    echo -n &quot;filename&gt; &quot;</span></span>
<span class="line"><span>    read filename</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    filename=$1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ ! -f &quot;$filename&quot; ]; then</span></span>
<span class="line"><span>    echo &quot;No such file: $filename&quot;</span></span>
<span class="line"><span>    exit $?</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>case $filename in</span></span>
<span class="line"><span>    *.tar)      tar xf $filename;;</span></span>
<span class="line"><span>    *.tar.bz2)  tar xjf $filename;;</span></span>
<span class="line"><span>    *.tbz)      tar xjf $filename;;</span></span>
<span class="line"><span>    *.tbz2)     tar xjf $filename;;</span></span>
<span class="line"><span>    *.tgz)      tar xzf $filename;;</span></span>
<span class="line"><span>    *.tar.gz)   tar xzf $filename;;</span></span>
<span class="line"><span>    *.gz)       gunzip $filename;;</span></span>
<span class="line"><span>    *.bz2)      bunzip2 $filename;;</span></span>
<span class="line"><span>    *.zip)      unzip $filename;;</span></span>
<span class="line"><span>    *.Z)        uncompress $filename;;</span></span>
<span class="line"><span>    *.rar)      rar x $filename ;;</span></span>
<span class="line"><span>    *)</span></span></code></pre></div><p>如果你希望脚本在提取文件时显示内容，请将详细选项（<code>-v</code>）添加到每个命令参数字符串中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $# -eq 0 ]; then</span></span>
<span class="line"><span>    echo -n &quot;filename&gt; &quot;</span></span>
<span class="line"><span>    read filename</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    filename=$1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ ! -f &quot;$filename&quot; ]; then</span></span>
<span class="line"><span>    echo &quot;No such file: $filename&quot;</span></span>
<span class="line"><span>    exit $?</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>case $filename in</span></span>
<span class="line"><span>    *.tar)      tar xvf $filename;;</span></span>
<span class="line"><span>    *.tar.bz2)  tar xvjf $filename;;</span></span>
<span class="line"><span>    *.tbz)      tar xvjf $filename;;</span></span>
<span class="line"><span>    *.tbz2)     tar xvjf $filename;;</span></span>
<span class="line"><span>    *.tgz)      tar xvzf $filename;;</span></span>
<span class="line"><span>    *.tar.gz)   tar xvzf $filename;;</span></span>
<span class="line"><span>    *.gz)       gunzip -v $filename;;</span></span>
<span class="line"><span>    *.bz2)      bunzip2 -v $filename;;</span></span>
<span class="line"><span>    *.zip)      unzip -v $filename;;</span></span>
<span class="line"><span>    *.Z)        uncompress -v $filename;;</span></span>
<span class="line"><span>    *)          echo &quot;No extract option for $filename&quot;</span></span>
<span class="line"><span>esac</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>虽然可以为每个可能用到的提取命令创建别名，但是让脚本为遇到的每种文件类型提供命令要比自己停下来编写每个命令和选项容易。</p><hr>`,17)),i("p",null,[n[1]||(n[1]=s("via: ",-1)),p(a,{href:"https://www.networkworld.com/article/3564265/painless-file-extraction-on-linux.html"},{default:e(()=>[...n[0]||(n[0]=[s("https://www.networkworld.com/article/3564265/painless-file-extraction-on-linux.html",-1)])]),_:1})]),i("p",null,[n[6]||(n[6]=s("作者：",-1)),p(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...n[2]||(n[2]=[s("Sandra Henry-Stocker",-1)])]),_:1}),n[7]||(n[7]=s(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...n[3]||(n[3]=[s("lujun9972",-1)])]),_:1}),n[8]||(n[8]=s(" 译者：",-1)),p(a,{href:"https://github.com/geekpi"},{default:e(()=>[...n[4]||(n[4]=[s("geekpi",-1)])]),_:1}),n[9]||(n[9]=s(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...n[5]||(n[5]=[s("wxy",-1)])]),_:1})]),i("p",null,[n[12]||(n[12]=s("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[10]||(n[10]=[s("LCTT",-1)])]),_:1}),n[13]||(n[13]=s(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...n[11]||(n[11]=[s("Linux中国",-1)])]),_:1}),n[14]||(n[14]=s(" 荣誉推出",-1))])])}const z=l(c,[["render",u]]);export{k as __pageData,z as default};
