import{_ as l,a0 as o,w as r,s as c,ao as t,I as i,x as a,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"Bash 脚本中如何使用 here 文档将数据写入文件 | LCTT x X-CMD","titleTemplate":false,"description":"Bash 脚本中如何使用 here 文档将数据写入文件 | LCTT (201811) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Bash 脚本中如何使用 here 文档将数据写入文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Bash 脚本中如何使用 here 文档将数据写入文件 | LCTT (201811) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201811/20171116 How to use a here documents to write data to a file in bash script","title":"Bash 脚本中如何使用 here 文档将数据写入文件","tag":"201811","desc":""},"relativePath":"201811/20171116 How to use a here documents to write data to a file in bash script.md","filePath":"[post].md"}'),d={name:"201811/20171116 How to use a here documents to write data to a file in bash script.md"};function h(u,s,g,b,k,f){const n=o("Link");return r(),c("div",null,[s[21]||(s[21]=t(`<h1 id="bash-脚本中如何使用-here-文档将数据写入文件" tabindex="-1">Bash 脚本中如何使用 here 文档将数据写入文件 <a class="header-anchor" href="#bash-脚本中如何使用-here-文档将数据写入文件" aria-label="Permalink to “Bash 脚本中如何使用 here 文档将数据写入文件”">​</a></h1><p><ruby>here 文档<rt>here document</rt></ruby> （LCTT 译注：here 文档又称作 heredoc ）不是什么特殊的东西，只是一种 I/O 重定向方式，它告诉 bash shell 从当前源读取输入，直到读取到只有分隔符的行。</p><p><img src="https://www.cyberciti.biz/media/new/faq/2017/11/redirect-output-of-here-document-to-a-text-file.jpg" alt="redirect output of here document to a text file"></p><p>这对于向 ftp、cat、echo、ssh 和许多其他有用的 Linux/Unix 命令提供指令很有用。 此功能适用于 bash 也适用于 Bourne、Korn、POSIX 这三种 shell。</p><h3 id="here-文档语法" tabindex="-1">here 文档语法 <a class="header-anchor" href="#here-文档语法" aria-label="Permalink to “here 文档语法”">​</a></h3><p>语法是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>command &lt;&lt;EOF</span></span>
<span class="line"><span>cmd1</span></span>
<span class="line"><span>cmd2 arg1</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>或者允许 shell 脚本中的 here 文档使用 <code>EOF&lt;&lt;-</code> 以自然的方式缩进：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>command &lt;&lt;-EOF</span></span>
<span class="line"><span>  msg1</span></span>
<span class="line"><span>  msg2 </span></span>
<span class="line"><span>  $var on line </span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>或者</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>command &lt;&lt;&#39;EOF&#39;</span></span>
<span class="line"><span> cmd1</span></span>
<span class="line"><span> cmd2 arg1</span></span>
<span class="line"><span> $var won&#39;t expand as parameter substitution turned off</span></span>
<span class="line"><span> by single quoting</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>或者 <strong>重定向并将其覆盖</strong> 到名为 <code>my_output_file.txt</code> 的文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>command &lt;&lt;EOF &gt; my_output_file.txt</span></span>
<span class="line"><span> mesg1</span></span>
<span class="line"><span> msg2</span></span>
<span class="line"><span> msg3</span></span>
<span class="line"><span> $var on $foo</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>或<strong>重定向并将其追加</strong>到名为 <code>my_output_file.txt</code> 的文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>command &lt;&lt;EOF &gt;&gt; my_output_file.txt</span></span>
<span class="line"><span> mesg1</span></span>
<span class="line"><span> msg2</span></span>
<span class="line"><span> msg3</span></span>
<span class="line"><span> $var on $foo</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to “示例”">​</a></h3><p>以下脚本将所需内容写入名为 <code>/tmp/output.txt</code> 的文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>echo &quot;Starting backup using rsync...&quot;</span></span></code></pre></div>`,18)),i("p",null,[s[1]||(s[1]=a("你可以使用",-1)),e(n,{href:"https://www.cyberciti.biz/faq/linux-unix-appleosx-bsd-cat-command-examples/"},{default:p(()=>[...s[0]||(s[0]=[a("cat命令",-1)])]),_:1}),s[2]||(s[2]=a("查看/tmp/output.txt文件：",-1))]),s[22]||(s[22]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /tmp/output.txt</span></span></code></pre></div><p>示例输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> Status of backup as on Thu Nov 16 17:00:21 IST 2017</span></span>
<span class="line"><span> Backing up files /home/vivek and /etc/</span></span></code></pre></div><h3 id="禁用路径名-参数-变量扩展、命令替换、算术扩展" tabindex="-1">禁用路径名/参数/变量扩展、命令替换、算术扩展 <a class="header-anchor" href="#禁用路径名-参数-变量扩展、命令替换、算术扩展" aria-label="Permalink to “禁用路径名/参数/变量扩展、命令替换、算术扩展”">​</a></h3><p>像 <code>$HOME</code> 这类变量和像 <code>$(date)</code> 这类命令在脚本中会被解释为替换。 要禁用它，请使用带有 <code>&#39;EOF&#39;</code> 这样带有单引号的形式，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>echo &quot;Starting backup using rsync...&quot;</span></span></code></pre></div>`,6)),i("p",null,[s[4]||(s[4]=a("你可以使用 ",-1)),e(n,{href:"https://www.cyberciti.biz/faq/linux-unix-appleosx-bsd-cat-command-examples/"},{default:p(()=>[...s[3]||(s[3]=[a("cat 命令",-1)])]),_:1}),s[5]||(s[5]=a("查看 ",-1)),s[6]||(s[6]=i("code",null,"/tmp/output.txt",-1)),s[7]||(s[7]=a(" 文件：",-1))]),s[23]||(s[23]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /tmp/output.txt</span></span></code></pre></div><p>示例输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> Status of backup as on $(date)</span></span>
<span class="line"><span> Backing up files $HOME and /etc/</span></span></code></pre></div><h3 id="关于-tee-命令的使用" tabindex="-1">关于 tee 命令的使用 <a class="header-anchor" href="#关于-tee-命令的使用" aria-label="Permalink to “关于 tee 命令的使用”">​</a></h3><p>语法是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tee /tmp/filename &lt;&lt;EOF &gt;/dev/null</span></span>
<span class="line"><span>line 1</span></span>
<span class="line"><span>line 2</span></span>
<span class="line"><span>line 3</span></span>
<span class="line"><span>$(cmd)</span></span>
<span class="line"><span>$var on $foo</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>或者通过在单引号中引用 <code>EOF</code> 来禁用变量替换和命令替换：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tee /tmp/filename &lt;&lt;&#39;EOF&#39; &gt;/dev/null</span></span>
<span class="line"><span>line 1</span></span>
<span class="line"><span>line 2</span></span>
<span class="line"><span>line 3</span></span>
<span class="line"><span>$(cmd)</span></span>
<span class="line"><span>$var on $foo</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>这是我更新的脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>echo &quot;Starting backup using rsync...&quot;</span></span></code></pre></div><h3 id="关于内存-here-文档的使用" tabindex="-1">关于内存 here 文档的使用 <a class="header-anchor" href="#关于内存-here-文档的使用" aria-label="Permalink to “关于内存 here 文档的使用”">​</a></h3><p>这是我更新的脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>echo &quot;Starting backup using rsync...&quot;</span></span></code></pre></div><hr>`,14)),i("p",null,[s[9]||(s[9]=a("via: ",-1)),e(n,{href:"https://www.cyberciti.biz/faq/using-heredoc-rediection-in-bash-shell-script-to-write-to-file/"},{default:p(()=>[...s[8]||(s[8]=[a("https://www.cyberciti.biz/faq/using-heredoc-rediection-in-bash-shell-script-to-write-to-file/",-1)])]),_:1})]),i("p",null,[s[13]||(s[13]=a("作者：",-1)),e(n,{href:"https://www.cyberciti.biz"},{default:p(()=>[...s[10]||(s[10]=[a("Vivek Gite",-1)])]),_:1}),s[14]||(s[14]=a(" 译者：",-1)),e(n,{href:"https://github.com/Flowsnow"},{default:p(()=>[...s[11]||(s[11]=[a("Flowsnow",-1)])]),_:1}),s[15]||(s[15]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[12]||(s[12]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[18]||(s[18]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[16]||(s[16]=[a("LCTT",-1)])]),_:1}),s[19]||(s[19]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[17]||(s[17]=[a("Linux中国",-1)])]),_:1}),s[20]||(s[20]=a(" 荣誉推出",-1))])])}const C=l(d,[["render",h]]);export{x as __pageData,C as default};
