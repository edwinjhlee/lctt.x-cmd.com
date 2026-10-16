import{_ as l,a0 as t,w as o,s as r,ao as f,I as i,x as s,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"Linux 上無痛文件提取 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 上無痛文件提取 | LCTT (202007) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 上無痛文件提取 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 上無痛文件提取 | LCTT (202007) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202007/20200630 Painless file extraction on Linux","title":"Linux 上無痛文件提取","tag":"202007","desc":""},"relativePath":"202007/20200630 Painless file extraction on Linux.md","filePath":"[post].md"}'),c={name:"202007/20200630 Painless file extraction on Linux.md"};function u(m,n,d,h,g,x){const a=t("Link");return o(),r("div",null,[n[15]||(n[15]=f(`<h1 id="linux-上無痛文件提取" tabindex="-1">Linux 上無痛文件提取 <a class="header-anchor" href="#linux-上無痛文件提取" aria-label="Permalink to “Linux 上無痛文件提取”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202007/12/233401zickd110d2dl6u6f.jpg" alt=""></p><p>從 Linux 系統的存檔中提取文件沒有拔牙那麼痛苦，但有時看起來更復雜。在這篇文章中，我們將看看如何輕鬆地從 Linux 系統中可能遇到的幾乎所有類型的存檔中提取文件。</p><p>它們有很多格式，從 .gz 到 .tbz2，這些文件的命名方式都各有一些不同。當然，你可以記住所有從存檔中提取文件的各種命令以及它們的選項，但是你也可以將所有經驗保存到腳本中，而不再擔心細節。</p><p>在本文中，我們將一系列提取命令組合成一個腳本，它會調用適當的命令根據文檔名提取文件的內容。該腳本首先以一些命令來驗證是否已經提供了一個文件名作為參數，或要求運行腳本的人提供文件名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>fi</span></span></code></pre></div><p>瞭解了麼？如果未提供任何參數，腳本將提示輸入文件名，如果存在則使用它。然後，它驗證文件是否實際存在。如果不是，那麼腳本退出。</p><p>下一步是使用 bash 的 <code>case</code> 語句根據存檔文件的名稱調用適當的提取命令。對於其中某些文件類型（例如 .bz2），也可以使用除 <code>tar</code> 之外的其它命令，但是對於每種文件命名約定，我們僅包含一個提取命令。因此，這是帶有各種存檔文件名的 <code>case</code> 語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> case $filename in</span></span>
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
<span class="line"><span>esac</span></span></code></pre></div><p>如果提供給腳本的文件擴展名與腳本已知的擴展名都不匹配，那麼會發出 “No extract option for $filename” 的消息。如果缺少你使用的任何存檔類型，只需將它們與所需的提取命令一起添加即可。</p><p>將 bash 頭添加到腳本頂部，使其可執行，然後就可以開始了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>    *)</span></span></code></pre></div><p>如果你希望腳本在提取文件時顯示內容，請將詳細選項（<code>-v</code>）添加到每個命令參數字符串中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>esac</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>雖然可以為每個可能用到的提取命令創建別名，但是讓腳本為遇到的每種文件類型提供命令要比自己停下來編寫每個命令和選項容易。</p><hr>`,17)),i("p",null,[n[1]||(n[1]=s("via: ",-1)),p(a,{href:"https://www.networkworld.com/article/3564265/painless-file-extraction-on-linux.html"},{default:e(()=>[...n[0]||(n[0]=[s("https://www.networkworld.com/article/3564265/painless-file-extraction-on-linux.html",-1)])]),_:1})]),i("p",null,[n[6]||(n[6]=s("作者：",-1)),p(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...n[2]||(n[2]=[s("Sandra Henry-Stocker",-1)])]),_:1}),n[7]||(n[7]=s(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...n[3]||(n[3]=[s("lujun9972",-1)])]),_:1}),n[8]||(n[8]=s(" 譯者：",-1)),p(a,{href:"https://github.com/geekpi"},{default:e(()=>[...n[4]||(n[4]=[s("geekpi",-1)])]),_:1}),n[9]||(n[9]=s(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...n[5]||(n[5]=[s("wxy",-1)])]),_:1})]),i("p",null,[n[12]||(n[12]=s("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[10]||(n[10]=[s("LCTT",-1)])]),_:1}),n[13]||(n[13]=s(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...n[11]||(n[11]=[s("Linux中國",-1)])]),_:1}),n[14]||(n[14]=s(" 榮譽推出",-1))])])}const z=l(c,[["render",u]]);export{k as __pageData,z as default};
