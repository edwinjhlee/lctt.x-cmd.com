import{_ as t,a0 as o,w as h,s as d,I as p,x as a,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const $=JSON.parse('{"title":"如何在 Bash shell 腳本中解析命令列選項 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Bash shell 腳本中解析命令列選項 | LCTT (202108) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Bash shell 腳本中解析命令列選項 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Bash shell 腳本中解析命令列選項 | LCTT (202108) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202108/20210824 How to include options in your Bash shell scripts","title":"如何在 Bash shell 腳本中解析命令列選項","tag":"202108","desc":""},"relativePath":"202108/20210824 How to include options in your Bash shell scripts.md","filePath":"[post].md"}'),r={name:"202108/20210824 How to include options in your Bash shell scripts.md"};function c(u,s,b,g,f,k){const n=o("Link");return h(),d("div",null,[s[25]||(s[25]=p("h1",{id:"如何在-bash-shell-腳本中解析命令列選項",tabindex:"-1"},[a("如何在 Bash shell 腳本中解析命令列選項 "),p("a",{class:"header-anchor",href:"#如何在-bash-shell-腳本中解析命令列選項","aria-label":"Permalink to “如何在 Bash shell 腳本中解析命令列選項”"},"​")],-1)),s[26]||(s[26]=p("blockquote",null,[p("p",null,"給你的 shell 腳本添加選項。")],-1)),s[27]||(s[27]=p("p",null,[p("img",{src:"https://img.linux.net.cn/data/attachment/album/202108/29/110849lvhr1bjg1r43sfcx.jpg",alt:""})],-1)),p("p",null,[s[3]||(s[3]=a("終端命令通常具有 ",-1)),e(n,{href:"https://opensource.com/article/21/8/linux-terminal#options"},{default:l(()=>[...s[0]||(s[0]=[a("選項或開關",-1)])]),_:1}),s[4]||(s[4]=a("，用户可以使用它們來修改命令的執行方式。關於命令列界面的 ",-1)),e(n,{href:"https://opensource.com/article/19/7/what-posix-richard-stallman-explains"},{default:l(()=>[...s[1]||(s[1]=[a("POSIX 規範",-1)])]),_:1}),s[5]||(s[5]=a(" 中就對選項做出了規範，這也是最早的 UNIX 應用程序建立的一個由來已久的慣例，因此你在創建自己的命令時，最好知道如何將選項包含進 ",-1)),e(n,{href:"https://opensource.com/downloads/bash-scripting-ebook"},{default:l(()=>[...s[2]||(s[2]=[a("Bash 腳本",-1)])]),_:1}),s[6]||(s[6]=a(" 中。",-1))]),s[28]||(s[28]=i(`<p>與大多數語言一樣，有若干種方法可以解決 Bash 中解析選項的問題。但直到今天，我最喜歡的方法仍然是我從 Patrick Volkerding 的 Slackware 構建腳本中學到的方法，當我第一次發現 Linux 並敢於冒險探索操作系統所附帶的純文本文件時，這些腳本就是我的 shell 腳本的引路人。</p><h3 id="bash-中的選項解析" tabindex="-1">Bash 中的選項解析 <a class="header-anchor" href="#bash-中的選項解析" aria-label="Permalink to “Bash 中的選項解析”">​</a></h3><p>在 Bash 中解析選項的策略是循環遍歷所有傳遞給 shell 腳本的參數，確定它們是否是一個選項，然後轉向下一個參數。重複這個過程，直到沒有選項為止。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ True ]; do</span></span>
<span class="line"><span>if [ &quot;$1&quot; = &quot;--alpha&quot; -o &quot;$1&quot; = &quot;-a&quot; ]; then</span></span>
<span class="line"><span>    ALPHA=1</span></span>
<span class="line"><span>    shift 1</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    break</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $ALPHA</span></span></code></pre></div><p>在這段代碼中，我創建了一個 <code>while</code> 循環，它會一直進行循環操作，直到處理完所有參數。<code>if</code> 語句會試着將在第一個位置（<code>$1</code>）中找到的參數與 <code>--alpha</code> 或 <code>-a</code> 匹配。（此處的待匹配項是任意選項名稱，並沒有特殊意義。在實際的腳本中，你可以使用 <code>--verbose</code> 和 <code>-v</code> 來觸發詳細輸出）。</p><p><code>shift</code> 關鍵字會使所有參數位移一位，這樣位置 2（<code>$2</code>）的參數移動到位置 1（<code>$1</code>）。處理完所有參數後會觸發 <code>else</code> 語句，進而中斷 <code>while</code> 循環。</p><p>在腳本的末尾，<code>$ALPHA</code> 的值會輸出到終端。</p><p>測試一下這個腳本:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash ./test.sh --alpha</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ bash ./test.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ bash ./test.sh -a</span></span>
<span class="line"><span>1</span></span></code></pre></div><p>可以看到，選項被正確地檢測到了。</p><h3 id="在-bash-中檢測參數" tabindex="-1">在 Bash 中檢測參數 <a class="header-anchor" href="#在-bash-中檢測參數" aria-label="Permalink to “在 Bash 中檢測參數”">​</a></h3><p>但上面的腳本還有一個問題：多餘的參數被忽略了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash ./test.sh --alpha foo</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$</span></span></code></pre></div>`,13)),p("p",null,[s[8]||(s[8]=a("要想捕獲非選項名的參數，可以將剩餘的參數轉儲到 ",-1)),e(n,{href:"https://opensource.com/article/18/5/you-dont-know-bash-intro-bash-arrays"},{default:l(()=>[...s[7]||(s[7]=[a("Bash 數組",-1)])]),_:1}),s[9]||(s[9]=a(" 中。",-1))]),s[29]||(s[29]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ True ]; do</span></span>
<span class="line"><span>if [ &quot;$1&quot; = &quot;--alpha&quot; -o &quot;$1&quot; = &quot;-a&quot; ]; then</span></span>
<span class="line"><span>    ALPHA=1</span></span>
<span class="line"><span>    shift 1</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    break</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $ALPHA</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ARG=( &quot;\${@}&quot; )</span></span>
<span class="line"><span>for i in \${ARG[@]}; do</span></span>
<span class="line"><span>    echo $i</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>測試一下新版的腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash ./test.sh --alpha foo</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>foo</span></span>
<span class="line"><span>$ bash ./test.sh foo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo</span></span>
<span class="line"><span>$ bash ./test.sh --alpha foo bar</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>foo</span></span>
<span class="line"><span>bar</span></span></code></pre></div><h3 id="帶參選項" tabindex="-1">帶參選項 <a class="header-anchor" href="#帶參選項" aria-label="Permalink to “帶參選項”">​</a></h3><p>有一些選項需要傳入參數。比如，你可能希望允許用户設置諸如顏色或圖形分辨率之類的屬性，或者將應用程序指向自定義配置文件。</p><p>要在 Bash 中實現這一點，你仍然可以像使用布爾開關一樣使用 <code>shift</code> 關鍵字，但參數需要位移兩位而不是一位。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ True ]; do</span></span>
<span class="line"><span>if [ &quot;$1&quot; = &quot;--alpha&quot; -o &quot;$1&quot; = &quot;-a&quot; ]; then</span></span>
<span class="line"><span>    ALPHA=1</span></span>
<span class="line"><span>    shift 1</span></span>
<span class="line"><span>elif [ &quot;$1&quot; = &quot;--config&quot; -o &quot;$1&quot; = &quot;-c&quot; ]; then</span></span>
<span class="line"><span>    CONFIG=$2</span></span>
<span class="line"><span>    shift 2</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    break</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $ALPHA</span></span>
<span class="line"><span>echo $CONFIG</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ARG=( &quot;\${@}&quot; )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for i in \${ARG[@]}; do</span></span>
<span class="line"><span>    echo $i</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>在這段代碼中，我添加了一個 <code>elif</code> 子句來將每個參數與 <code>--config</code> 和 <code>-c</code> 進行比較。如果匹配，名為 <code>CONFIG</code> 的變量的值就設置為下一個參數的值（這就表示 <code>--config</code> 選項需要一個參數）。所有參數都位移兩位：其中一位是跳過 <code>--config</code> 或 <code>-c</code>，另一位是跳過其參數。與上節一樣，循環重複直到沒有匹配的參數。</p><p>下面是新版腳本的測試：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash ./test.sh --config my.conf foo bar</span></span>
<span class="line"><span>my.conf</span></span>
<span class="line"><span>foo</span></span>
<span class="line"><span>bar</span></span>
<span class="line"><span>$ bash ./test.sh -a --config my.conf baz</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>my.conf</span></span>
<span class="line"><span>baz</span></span></code></pre></div><h3 id="bash-讓選項解析變得簡單" tabindex="-1">Bash 讓選項解析變得簡單 <a class="header-anchor" href="#bash-讓選項解析變得簡單" aria-label="Permalink to “Bash 讓選項解析變得簡單”">​</a></h3><p>還有一些其他方法也可以解析 Bash 中的選項。你可以替換使用 <code>case</code> 語句或 <code>getopt</code> 命令。無論使用什麼方法，給你的用户提供選項都是應用程序的重要功能，而 Bash 讓解析選項成為了一件簡單的事。</p><hr>`,13)),p("p",null,[s[11]||(s[11]=a("via: ",-1)),e(n,{href:"https://opensource.com/article/21/8/option-parsing-bash"},{default:l(()=>[...s[10]||(s[10]=[a("https://opensource.com/article/21/8/option-parsing-bash",-1)])]),_:1})]),p("p",null,[s[16]||(s[16]=a("作者：",-1)),e(n,{href:"https://opensource.com/users/seth"},{default:l(()=>[...s[12]||(s[12]=[a("Seth Kenlon",-1)])]),_:1}),s[17]||(s[17]=a(" 選題：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[13]||(s[13]=[a("lujun9972",-1)])]),_:1}),s[18]||(s[18]=a(" 譯者：",-1)),e(n,{href:"https://github.com/unigeorge"},{default:l(()=>[...s[14]||(s[14]=[a("unigeorge",-1)])]),_:1}),s[19]||(s[19]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:l(()=>[...s[15]||(s[15]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[22]||(s[22]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[20]||(s[20]=[a("LCTT",-1)])]),_:1}),s[23]||(s[23]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:l(()=>[...s[21]||(s[21]=[a("Linux中國",-1)])]),_:1}),s[24]||(s[24]=a(" 榮譽推出",-1))])])}const C=t(r,[["render",c]]);export{$ as __pageData,C as default};
