import{_ as l,a0 as o,w as r,s as c,ao as t,I as i,x as a,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"Bash 腳本中如何使用 here 文檔將數據寫入文件 | LCTT x X-CMD","titleTemplate":false,"description":"Bash 腳本中如何使用 here 文檔將數據寫入文件 | LCTT (201811) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Bash 腳本中如何使用 here 文檔將數據寫入文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Bash 腳本中如何使用 here 文檔將數據寫入文件 | LCTT (201811) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201811/20171116 How to use a here documents to write data to a file in bash script","title":"Bash 腳本中如何使用 here 文檔將數據寫入文件","tag":"201811","desc":""},"relativePath":"201811/20171116 How to use a here documents to write data to a file in bash script.md","filePath":"[post].md"}'),d={name:"201811/20171116 How to use a here documents to write data to a file in bash script.md"};function h(u,s,g,b,k,f){const n=o("Link");return r(),c("div",null,[s[21]||(s[21]=t(`<h1 id="bash-腳本中如何使用-here-文檔將數據寫入文件" tabindex="-1">Bash 腳本中如何使用 here 文檔將數據寫入文件 <a class="header-anchor" href="#bash-腳本中如何使用-here-文檔將數據寫入文件" aria-label="Permalink to “Bash 腳本中如何使用 here 文檔將數據寫入文件”">​</a></h1><p><ruby>here 文檔<rt>here document</rt></ruby> （LCTT 譯註：here 文檔又稱作 heredoc ）不是什麼特殊的東西，只是一種 I/O 重定向方式，它告訴 bash shell 從當前源讀取輸入，直到讀取到只有分隔符的行。</p><p><img src="https://www.cyberciti.biz/media/new/faq/2017/11/redirect-output-of-here-document-to-a-text-file.jpg" alt="redirect output of here document to a text file"></p><p>這對於向 ftp、cat、echo、ssh 和許多其他有用的 Linux/Unix 命令提供指令很有用。 此功能適用於 bash 也適用於 Bourne、Korn、POSIX 這三種 shell。</p><h3 id="here-文檔語法" tabindex="-1">here 文檔語法 <a class="header-anchor" href="#here-文檔語法" aria-label="Permalink to “here 文檔語法”">​</a></h3><p>語法是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>command &lt;&lt;EOF</span></span>
<span class="line"><span>cmd1</span></span>
<span class="line"><span>cmd2 arg1</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>或者允許 shell 腳本中的 here 文檔使用 <code>EOF&lt;&lt;-</code> 以自然的方式縮進：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>command &lt;&lt;-EOF</span></span>
<span class="line"><span>  msg1</span></span>
<span class="line"><span>  msg2 </span></span>
<span class="line"><span>  $var on line </span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>或者</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>command &lt;&lt;&#39;EOF&#39;</span></span>
<span class="line"><span> cmd1</span></span>
<span class="line"><span> cmd2 arg1</span></span>
<span class="line"><span> $var won&#39;t expand as parameter substitution turned off</span></span>
<span class="line"><span> by single quoting</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>或者 <strong>重定向並將其覆蓋</strong> 到名為 <code>my_output_file.txt</code> 的文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>command &lt;&lt;EOF &gt; my_output_file.txt</span></span>
<span class="line"><span> mesg1</span></span>
<span class="line"><span> msg2</span></span>
<span class="line"><span> msg3</span></span>
<span class="line"><span> $var on $foo</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>或<strong>重定向並將其追加</strong>到名為 <code>my_output_file.txt</code> 的文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>command &lt;&lt;EOF &gt;&gt; my_output_file.txt</span></span>
<span class="line"><span> mesg1</span></span>
<span class="line"><span> msg2</span></span>
<span class="line"><span> msg3</span></span>
<span class="line"><span> $var on $foo</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to “示例”">​</a></h3><p>以下腳本將所需內容寫入名為 <code>/tmp/output.txt</code> 的文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>OUT=/tmp/output.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Starting my script...&quot;</span></span>
<span class="line"><span>echo &quot;Doing something...&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat &lt;&lt;EOF &gt;$OUT</span></span>
<span class="line"><span>  Status of backup as on $(date)</span></span>
<span class="line"><span>  Backing up files $HOME and /etc/</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Starting backup using rsync...&quot;</span></span></code></pre></div>`,18)),i("p",null,[s[1]||(s[1]=a("你可以使用",-1)),e(n,{href:"https://www.cyberciti.biz/faq/linux-unix-appleosx-bsd-cat-command-examples/"},{default:p(()=>[...s[0]||(s[0]=[a("cat命令",-1)])]),_:1}),s[2]||(s[2]=a("查看/tmp/output.txt文件：",-1))]),s[22]||(s[22]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /tmp/output.txt</span></span></code></pre></div><p>示例輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> Status of backup as on Thu Nov 16 17:00:21 IST 2017</span></span>
<span class="line"><span> Backing up files /home/vivek and /etc/</span></span></code></pre></div><h3 id="禁用路徑名-參數-變量擴展、命令替換、算術擴展" tabindex="-1">禁用路徑名/參數/變量擴展、命令替換、算術擴展 <a class="header-anchor" href="#禁用路徑名-參數-變量擴展、命令替換、算術擴展" aria-label="Permalink to “禁用路徑名/參數/變量擴展、命令替換、算術擴展”">​</a></h3><p>像 <code>$HOME</code> 這類變量和像 <code>$(date)</code> 這類命令在腳本中會被解釋為替換。 要禁用它，請使用帶有 <code>&#39;EOF&#39;</code> 這樣帶有單引號的形式，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>OUT=/tmp/output.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Starting my script...&quot;</span></span>
<span class="line"><span>echo &quot;Doing something...&quot;</span></span>
<span class="line"><span># No parameter and variable expansion, command substitution, arithmetic expansion, or pathname expansion is performed on word.  </span></span>
<span class="line"><span># If any part of word is quoted, the delimiter  is  the  result  of  quote removal  on word, and the lines in the here-document </span></span>
<span class="line"><span># are not expanded. So EOF is quoted as follows</span></span>
<span class="line"><span>cat &lt;&lt;&#39;EOF&#39; &gt;$OUT</span></span>
<span class="line"><span>  Status of backup as on $(date)</span></span>
<span class="line"><span>  Backing up files $HOME and /etc/</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Starting backup using rsync...&quot;</span></span></code></pre></div>`,6)),i("p",null,[s[4]||(s[4]=a("你可以使用 ",-1)),e(n,{href:"https://www.cyberciti.biz/faq/linux-unix-appleosx-bsd-cat-command-examples/"},{default:p(()=>[...s[3]||(s[3]=[a("cat 命令",-1)])]),_:1}),s[5]||(s[5]=a("查看 ",-1)),s[6]||(s[6]=i("code",null,"/tmp/output.txt",-1)),s[7]||(s[7]=a(" 文件：",-1))]),s[23]||(s[23]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /tmp/output.txt</span></span></code></pre></div><p>示例輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> Status of backup as on $(date)</span></span>
<span class="line"><span> Backing up files $HOME and /etc/</span></span></code></pre></div><h3 id="關於-tee-命令的使用" tabindex="-1">關於 tee 命令的使用 <a class="header-anchor" href="#關於-tee-命令的使用" aria-label="Permalink to “關於 tee 命令的使用”">​</a></h3><p>語法是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tee /tmp/filename &lt;&lt;EOF &gt;/dev/null</span></span>
<span class="line"><span>line 1</span></span>
<span class="line"><span>line 2</span></span>
<span class="line"><span>line 3</span></span>
<span class="line"><span>$(cmd)</span></span>
<span class="line"><span>$var on $foo</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>或者通過在單引號中引用 <code>EOF</code> 來禁用變量替換和命令替換：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tee /tmp/filename &lt;&lt;&#39;EOF&#39; &gt;/dev/null</span></span>
<span class="line"><span>line 1</span></span>
<span class="line"><span>line 2</span></span>
<span class="line"><span>line 3</span></span>
<span class="line"><span>$(cmd)</span></span>
<span class="line"><span>$var on $foo</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>這是我更新的腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>OUT=/tmp/output.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Starting my script...&quot;</span></span>
<span class="line"><span>echo &quot;Doing something...&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tee $OUT &lt;&lt;EOF &gt;/dev/null</span></span>
<span class="line"><span>  Status of backup as on $(date)</span></span>
<span class="line"><span>  Backing up files $HOME and /etc/</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Starting backup using rsync...&quot;</span></span></code></pre></div><h3 id="關於內存-here-文檔的使用" tabindex="-1">關於內存 here 文檔的使用 <a class="header-anchor" href="#關於內存-here-文檔的使用" aria-label="Permalink to “關於內存 here 文檔的使用”">​</a></h3><p>這是我更新的腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>OUT=/tmp/output.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## in memory here docs </span></span>
<span class="line"><span>## thanks https://twitter.com/freebsdfrau</span></span>
<span class="line"><span>exec 9&lt;&lt;EOF</span></span>
<span class="line"><span>  Status of backup as on $(date)</span></span>
<span class="line"><span>  Backing up files $HOME and /etc/</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## continue</span></span>
<span class="line"><span>echo &quot;Starting my script...&quot;</span></span>
<span class="line"><span>echo &quot;Doing something...&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## do it</span></span>
<span class="line"><span>cat &lt;&amp;9 &gt;$OUT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Starting backup using rsync...&quot;</span></span></code></pre></div><hr>`,14)),i("p",null,[s[9]||(s[9]=a("via: ",-1)),e(n,{href:"https://www.cyberciti.biz/faq/using-heredoc-rediection-in-bash-shell-script-to-write-to-file/"},{default:p(()=>[...s[8]||(s[8]=[a("https://www.cyberciti.biz/faq/using-heredoc-rediection-in-bash-shell-script-to-write-to-file/",-1)])]),_:1})]),i("p",null,[s[13]||(s[13]=a("作者：",-1)),e(n,{href:"https://www.cyberciti.biz"},{default:p(()=>[...s[10]||(s[10]=[a("Vivek Gite",-1)])]),_:1}),s[14]||(s[14]=a(" 譯者：",-1)),e(n,{href:"https://github.com/Flowsnow"},{default:p(()=>[...s[11]||(s[11]=[a("Flowsnow",-1)])]),_:1}),s[15]||(s[15]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[12]||(s[12]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[18]||(s[18]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[16]||(s[16]=[a("LCTT",-1)])]),_:1}),s[19]||(s[19]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[17]||(s[17]=[a("Linux中國",-1)])]),_:1}),s[20]||(s[20]=a(" 榮譽推出",-1))])])}const C=l(d,[["render",h]]);export{x as __pageData,C as default};
