import{_ as t,a0 as o,w as d,s as r,ao as l,I as n,x as a,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"awk 系列：在 awk 中如何使用流程控制語句 | LCTT x X-CMD","titleTemplate":false,"description":"awk 系列：在 awk 中如何使用流程控制語句 | LCTT (awk) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"awk 系列：在 awk 中如何使用流程控制語句 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"awk 系列：在 awk 中如何使用流程控制語句 | LCTT (awk) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"awk/Part 12 -  How to Use Flow Control Statements in Awk - Part 12","title":"awk 系列：在 awk 中如何使用流程控制語句","tag":"awk","desc":""},"relativePath":"awk/Part 12 -  How to Use Flow Control Statements in Awk - Part 12.md","filePath":"[post].md"}'),h={name:"awk/Part 12 -  How to Use Flow Control Statements in Awk - Part 12.md"};function c(k,s,g,b,u,f){const i=o("Link");return d(),r("div",null,[s[26]||(s[26]=l('<h1 id="awk-系列-在-awk-中如何使用流程控制語句" tabindex="-1">awk 系列：在 awk 中如何使用流程控制語句 <a class="header-anchor" href="#awk-系列-在-awk-中如何使用流程控制語句" aria-label="Permalink to “awk 系列：在 awk 中如何使用流程控制語句”">​</a></h1><p>當你回顧所有到目前為止我們已經覆蓋的 awk 實例，從 awk 系列的開始，你會注意到各種實例的所有指令是順序執行的，即一個接一個地執行。但在某些情況下，我們可能希望基於一些條件進行文本過濾操作，即流程控制語句允許的那些語句。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/08/Use-Flow-Control-Statements-in-Awk.png" alt=""></p><p>在 awk 編程中有各種各樣的流程控制語句，其中包括：</p><ul><li>if-else 語句</li><li>for 語句</li><li>while 語句</li><li>do-while 語句</li><li>break 語句</li><li>continue 語句</li><li>next 語句</li><li>nextfile 語句</li><li>exit 語句</li></ul>',5)),n("p",null,[s[1]||(s[1]=a("然而，對於本系列的這一部分，我們將闡述：",-1)),s[2]||(s[2]=n("code",null,"if-else",-1)),s[3]||(s[3]=a("、",-1)),s[4]||(s[4]=n("code",null,"for",-1)),s[5]||(s[5]=a("、",-1)),s[6]||(s[6]=n("code",null,"while",-1)),s[7]||(s[7]=a(" 和 ",-1)),s[8]||(s[8]=n("code",null,"do while",-1)),s[9]||(s[9]=a(" 語句。請記住，我們已經在這個 ",-1)),e(i,{href:"https://linux.cn/article-7609-1.html"},{default:p(()=>[...s[0]||(s[0]=[a("awk 系列的第 6 部分",-1)])]),_:1}),s[10]||(s[10]=a("介紹過如何使用 awk 的 ",-1)),s[11]||(s[11]=n("code",null,"next",-1)),s[12]||(s[12]=a(" 語句。",-1))]),s[27]||(s[27]=l(`<h3 id="_1-if-else-語句" tabindex="-1">1. if-else 語句 <a class="header-anchor" href="#_1-if-else-語句" aria-label="Permalink to “1. if-else 語句”">​</a></h3><p>如你想的那樣。if 語句的語法類似於 shell 中的 if 語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if  (條件 1) {</span></span>
<span class="line"><span>     動作 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else {</span></span>
<span class="line"><span>      動作 2</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上述語法中，<code>條件 1</code> 和<code>條件 2</code> 是 awk 表達式，而<code>動作 1</code> 和<code>動作 2</code> 是當各自的條件得到滿足時所執行的 awk 命令。</p><p>當<code>條件 1</code> 滿足時，意味着它為真，那麼<code>動作 1</code> 被執行並退出 <code>if 語句</code>，否則<code>動作 2</code> 被執行。</p><p>if 語句還能擴展為如下的 <code>if-else_if-else</code> 語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if (條件 1){</span></span>
<span class="line"><span>     動作 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else if (條件 2){</span></span>
<span class="line"><span>      動作 2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else{</span></span>
<span class="line"><span>     動作 3</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>對於上面的形式，如果<code>條件 1</code> 為真，那麼<code>動作 1</code> 被執行並退出 <code>if 語句</code>，否則<code>條件 2</code> 被求值且如果值為真，那麼<code>動作 2</code> 被執行並退出 <code>if 語句</code>。然而，當<code>條件 2</code> 為假時，那麼<code>動作 3</code> 被執行並退出 <code>if 語句</code>。</p><p>這是在使用 if 語句的一個實例，我們有一個用户和他們年齡的列表，存儲在文件 users.txt 中。</p><p>我們要打印一個清單，顯示用户的名稱和用户的年齡是否小於或超過 25 歲。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>aaronkilik@tecMint ~ $ cat users.txt</span></span>
<span class="line"><span>Sarah L			35    	F</span></span>
<span class="line"><span>Aaron Kili		40    	M</span></span>
<span class="line"><span>John  Doo		20    	M</span></span>
<span class="line"><span>Kili  Seth		49    	M</span></span></code></pre></div><p>我們可以寫一個簡短的 shell 腳本來執行上文中我們的工作，這是腳本的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>awk &#39; {</span></span>
<span class="line"><span>        if ( $3 &lt;= 25 ){</span></span>
<span class="line"><span>           print &quot;User&quot;,$1,$2,&quot;is less than 25 years old.&quot; ;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>           print &quot;User&quot;,$1,$2,&quot;is more than 25 years old&quot; ;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}&#39;    ~/users.txt</span></span></code></pre></div><p>然後保存文件並退出，按如下方式使腳本可執行並運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
<span class="line"><span>$ ./test.sh</span></span></code></pre></div><p>輸出樣例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>User Sarah L is more than 25 years old</span></span>
<span class="line"><span>User Aaron Kili is more than 25 years old</span></span>
<span class="line"><span>User John Doo is less than 25 years old.</span></span>
<span class="line"><span>User Kili Seth is more than 25 years old</span></span></code></pre></div><h3 id="_2-for-語句" tabindex="-1">2. for 語句 <a class="header-anchor" href="#_2-for-語句" aria-label="Permalink to “2. for 語句”">​</a></h3><p>如果你想在一個循環中執行一些 awk 命令，那麼 <code>for 語句</code>為你提供一個做這個的合適方式，格式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for ( 計數器的初始化 ; 測試條件 ; 計數器增加 ){</span></span>
<span class="line"><span>      動作</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏，該方法是通過一個計數器來控制循環執行來定義的，首先你需要初始化這個計數器，然後針對測試條件運行它，如果它為真，執行這些動作並最終增加這個計數器。當計數器不滿足條件時，循環終止。</p><p>在我們想要打印數字 0 到 10 時，以下 awk 命令顯示 for 語句是如何工作的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ awk &#39;BEGIN{ for(counter=0;counter&lt;=10;counter++){ print counter} }&#39;</span></span></code></pre></div><p>輸出樣例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><h3 id="_3-while-語句" tabindex="-1">3. while 語句 <a class="header-anchor" href="#_3-while-語句" aria-label="Permalink to “3. while 語句”">​</a></h3><p>while 語句的傳統語法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while ( 條件 ) {</span></span>
<span class="line"><span>          動作</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個<code>條件</code>是一個 awk 表達式而<code>動作</code>是當條件為真時被執行的 awk 命令。</p><p>下面是一個説明使用 <code>while</code> 語句來打印數字 0 到 10 的腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>awk &#39; BEGIN{ counter=0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while(counter&lt;=10){</span></span>
<span class="line"><span>              print counter;</span></span>
<span class="line"><span>              counter+=1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}&#39;</span></span></code></pre></div><p>保存文件並使腳本可執行，然後運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
<span class="line"><span>$ ./test.sh</span></span></code></pre></div><p>輸出樣例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><h3 id="_4-do-while-語句" tabindex="-1">4. do while 語句 <a class="header-anchor" href="#_4-do-while-語句" aria-label="Permalink to “4. do while 語句”">​</a></h3><p>它是上文中 <code>while</code> 語句的一個變型，具有以下語法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>do {</span></span>
<span class="line"><span>     動作</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> while (條件)</span></span></code></pre></div><p>這輕微的區別在於，在 <code>do while</code> 語句下，awk 的命令在求值條件之前執行。使用上文 <code>while</code> 語句的例子，我們可以通過按如下所述修改 test.sh 腳本中的 awk 命令來説明 <code>do while</code> 語句的用法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>awk &#39; BEGIN{ counter=0;</span></span>
<span class="line"><span>        do{</span></span>
<span class="line"><span>            print counter;</span></span>
<span class="line"><span>            counter+=1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        while (counter&lt;=10)</span></span>
<span class="line"><span>}&#39;</span></span></code></pre></div><p>修改腳本之後，保存文件並退出。按如下方式使腳本可執行並執行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
<span class="line"><span>$ ./test.sh</span></span></code></pre></div><p>輸出樣例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>這不是關於 awk 的流程控制語句的一個全面的指南，正如我早先提到的，在 awk 裏還有其他幾個流程控制語句。</p><p>儘管如此，awk 系列的這一部分使應該你明白了一個明確的基於某些條件控制的 awk 命令是如何執行的基本概念。</p><p>你還可以瞭解其餘更多的流程控制語句以獲得更多關於該主題的理解。最後，在 awk 的系列下一節，我們將進入編寫 awk 腳本。</p><hr>`,49)),n("p",null,[s[17]||(s[17]=a("via: ",-1)),e(i,{href:"http://www.tecmint.com/use-flow-control-statements-with-awk-command/"},{default:p(()=>[...s[13]||(s[13]=[a("http://www.tecmint.com/use-flow-control-statements-with-awk-command/",-1)])]),_:1}),s[18]||(s[18]=a(" 作者：",-1)),e(i,{href:"http://www.tecmint.com/author/aaronkili/"},{default:p(()=>[...s[14]||(s[14]=[a("Aaron Kili",-1)])]),_:1}),s[19]||(s[19]=a(" 譯者：",-1)),e(i,{href:"https://github.com/robot527"},{default:p(()=>[...s[15]||(s[15]=[a("robot527",-1)])]),_:1}),s[20]||(s[20]=a(" 校對：",-1)),e(i,{href:"https://github.com/wxy"},{default:p(()=>[...s[16]||(s[16]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[23]||(s[23]=a("本文由 ",-1)),e(i,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[21]||(s[21]=[a("LCTT",-1)])]),_:1}),s[24]||(s[24]=a(" 原創編譯，",-1)),e(i,{href:"https://linux.cn/"},{default:p(()=>[...s[22]||(s[22]=[a("Linux 中國",-1)])]),_:1}),s[25]||(s[25]=a(" 榮譽推出",-1))])])}const C=t(h,[["render",c]]);export{y as __pageData,C as default};
