import{_ as e,a0 as l,w as r,s as o,I as a,x as s,a1 as t,A as i,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"不喜歡 IDE？試試看 grepgitvi | LCTT x X-CMD","titleTemplate":false,"description":"不喜歡 IDE？試試看 grepgitvi | LCTT (202002) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"不喜歡 IDE？試試看 grepgitvi | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"不喜歡 IDE？試試看 grepgitvi | LCTT (202002) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202002/20200219 Don-t like IDEs- Try grepgitvi","title":"不喜歡 IDE？試試看 grepgitvi","tag":"202002","desc":""},"relativePath":"202002/20200219 Don-t like IDEs- Try grepgitvi.md","filePath":"[post].md"}'),g={name:"202002/20200219 Don-t like IDEs- Try grepgitvi.md"};function d(m,n,f,D,q,$){const p=l("Link");return r(),o("div",null,[n[22]||(n[22]=a("h1",{id:"不喜歡-ide-試試看-grepgitvi",tabindex:"-1"},[s("不喜歡 IDE？試試看 grepgitvi "),a("a",{class:"header-anchor",href:"#不喜歡-ide-試試看-grepgitvi","aria-label":"Permalink to “不喜歡 IDE？試試看 grepgitvi”"},"​")],-1)),n[23]||(n[23]=a("blockquote",null,[a("p",null,"一個簡單又原始的腳本來用 Vim 打開你選擇的文件。")],-1)),n[24]||(n[24]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202002/26/113942a99a1aujmjpfnfrh.jpg",alt:""})],-1)),n[25]||(n[25]=a("p",null,[s("像大多數開發者一樣，我整天都在搜索和閲讀源碼。就我個人而言，我從來沒有習慣過集成開發環境 （IDE），多年來，我主要使用 "),a("code",null,"grep"),s(" （找到文件），並複製/粘貼文件名來打開 Vi(m)。")],-1)),n[26]||(n[26]=a("p",null,"最終，我寫了這個腳本，並根據需要緩慢地對其進行了完善。",-1)),a("p",null,[n[3]||(n[3]=s("它依賴 ",-1)),t(p,{href:"https://www.vim.org/"},{default:i(()=>[...n[0]||(n[0]=[s("Vim",-1)])]),_:1}),n[4]||(n[4]=s(" 和 ",-1)),t(p,{href:"https://linux.die.net/man/1/rlwrap"},{default:i(()=>[...n[1]||(n[1]=[s("rlwrap",-1)])]),_:1}),n[5]||(n[5]=s("，並使用 Apache 2.0 許可證開源。要使用該腳本，請",-1)),t(p,{href:"https://opensource.com/article/17/6/set-path-linux"},{default:i(()=>[...n[2]||(n[2]=[s("將它放到 PATH 中",-1)])]),_:1}),n[6]||(n[6]=s("，然後在文本目錄下運行：",-1))]),n[27]||(n[27]=u(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>grepgitvi &lt;grep options&gt; &lt;grep/vim search pattern&gt;</span></span></code></pre></div><p>它將返回搜索結果的編號列表，並提示你輸入結果編號並打開 Vim。退出 Vim 後，它將再次顯示列表，直到你輸入除結果編號以外的任何內容。你也可以使用向上和向下箭頭鍵選擇一個文件。（這對我來説）更容易找到我已經看過的結果。</p><p>與現代 IDE 甚至與 Vim 的更復雜的用法相比，它簡單而原始，但它對我有用。</p><h3 id="腳本" tabindex="-1">腳本 <a class="header-anchor" href="#腳本" aria-label="Permalink to “腳本”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span># grepgitvi - grep source files, interactively open vim on results</span></span>
<span class="line"><span># Doesn&#39;t really have to do much with git, other than ignoring .git</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Copyright Yedidyah Bar David 2019</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># SPDX-License-Identifier: Apache-2.0</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Requires vim and rlwrap</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Usage: grepgitvi &lt;grep options&gt; &lt;grep/vim pattern&gt;</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TMPD=$(mktemp -d /tmp/grepgitvi.XXXXXX)</span></span>
<span class="line"><span>UNCOLORED=\${TMPD}/uncolored</span></span>
<span class="line"><span>COLORED=\${TMPD}/colored</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RLHIST=\${TMPD}/readline-history</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ -z &quot;\${DIRS}&quot; ] &amp;&amp; DIRS=.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cleanup() {</span></span>
<span class="line"><span>        rm -rf &quot;\${TMPD}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>trap cleanup 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>find \${DIRS} -iname .git -prune -o \\! -iname &quot;*.min.css*&quot; -type f -print0 &gt; \${TMPD}/allfiles</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat \${TMPD}/allfiles | xargs -0 grep --color=always -n -H &quot;$@&quot; &gt; $COLORED</span></span>
<span class="line"><span>cat \${TMPD}/allfiles | xargs -0 grep -n -H &quot;$@&quot; &gt; $UNCOLORED</span></span>
<span class="line"><span></span></span>
<span class="line"><span>max=\`cat $UNCOLORED | wc -l\`</span></span>
<span class="line"><span>pat=&quot;\${@: -1}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>inp=&#39;&#39;</span></span>
<span class="line"><span>while true; do</span></span>
<span class="line"><span>        echo &quot;============================ grep results ===============================&quot;</span></span>
<span class="line"><span>        cat $COLORED | nl</span></span>
<span class="line"><span>        echo &quot;============================ grep results ===============================&quot;</span></span>
<span class="line"><span>        prompt=&quot;Enter a number between 1 and $max or anything else to quit: &quot;</span></span>
<span class="line"><span>        inp=$(rlwrap -H $RLHIST bash -c &quot;read -p \\&quot;$prompt\\&quot; inp; echo \\$inp&quot;)</span></span>
<span class="line"><span>        if ! echo &quot;$inp&quot; | grep -q &#39;^[0-9][0-9]*$&#39; || [ &quot;$inp&quot; -gt &quot;$max&quot; ]; then</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        filename=$(cat $UNCOLORED | awk -F: &quot;NR==$inp&quot;&#39; {print $1}&#39;)</span></span>
<span class="line"><span>        linenum=$(cat $UNCOLORED | awk -F: &quot;NR==$inp&quot;&#39; {print $2-1}&#39;)</span></span>
<span class="line"><span>        vim +:&quot;$linenum&quot; +&quot;norm zz&quot; +/&quot;\${pat}&quot; &quot;$filename&quot;</span></span>
<span class="line"><span>done</span></span></code></pre></div><hr>`,6)),a("p",null,[n[8]||(n[8]=s("via: ",-1)),t(p,{href:"https://opensource.com/article/20/2/no-ide-script"},{default:i(()=>[...n[7]||(n[7]=[s("https://opensource.com/article/20/2/no-ide-script",-1)])]),_:1})]),a("p",null,[n[13]||(n[13]=s("作者：",-1)),t(p,{href:"https://opensource.com/users/didib"},{default:i(()=>[...n[9]||(n[9]=[s("Yedidyah Bar David",-1)])]),_:1}),n[14]||(n[14]=s(" 選題：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...n[10]||(n[10]=[s("lujun9972",-1)])]),_:1}),n[15]||(n[15]=s(" 譯者：",-1)),t(p,{href:"https://github.com/geekpi"},{default:i(()=>[...n[11]||(n[11]=[s("geekpi",-1)])]),_:1}),n[16]||(n[16]=s(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:i(()=>[...n[12]||(n[12]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[19]||(n[19]=s("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[17]||(n[17]=[s("LCTT",-1)])]),_:1}),n[20]||(n[20]=s(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:i(()=>[...n[18]||(n[18]=[s("Linux中國",-1)])]),_:1}),n[21]||(n[21]=s(" 榮譽推出",-1))])])}const h=e(g,[["render",d]]);export{v as __pageData,h as default};
