import{_ as t,a0 as o,w as d,s as r,I as a,x as n,a1 as p,A as e,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"awk 系列：如何在 awk 中使用流控制語句 | LCTT x X-CMD","titleTemplate":false,"description":"awk 系列：如何在 awk 中使用流控制語句 | LCTT (awk) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"awk 系列：如何在 awk 中使用流控制語句 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"awk 系列：如何在 awk 中使用流控制語句 | LCTT (awk) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"awk/part 12 - How to Use Flow Control Statements in Awk","title":"awk 系列：如何在 awk 中使用流控制語句","tag":"awk","desc":""},"relativePath":"awk/part 12 - How to Use Flow Control Statements in Awk.md","filePath":"[post].md"}'),h={name:"awk/part 12 - How to Use Flow Control Statements in Awk.md"};function c(k,s,g,u,b,f){const i=o("Link");return d(),r("div",null,[s[29]||(s[29]=a("h1",{id:"awk-系列-如何在-awk-中使用流控制語句",tabindex:"-1"},[n("awk 系列：如何在 awk 中使用流控制語句 "),a("a",{class:"header-anchor",href:"#awk-系列-如何在-awk-中使用流控制語句","aria-label":"Permalink to “awk 系列：如何在 awk 中使用流控制語句”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("回顧從 Awk 系列，從最開始到現在我們所講的所有關於 Awk 的例子，你會發現不同例子中的所有命令都是順序執行的，也就是一個接一個的執行。但是在某些場景下，我們可能希望根據一些條件來執行一些",-1)),p(i,{href:"http://www.tecmint.com/use-linux-awk-command-to-filter-text-string-in-files/"},{default:e(()=>[...s[0]||(s[0]=[n("文本過濾操作",-1)])]),_:1}),s[2]||(s[2]=n("，這個時候流控制語句就派上用場了。",-1))]),s[30]||(s[30]=l('<p><img src="http://www.tecmint.com/wp-content/uploads/2016/08/Use-Flow-Control-Statements-in-Awk.png" alt=""></p><p>Awk 包含很多的流控制語句，包括：</p><ul><li>if-else 語句</li><li>for 語句</li><li>while 語句</li><li>do-while 語句</li><li>break 語句</li><li>continue 語句</li><li>next 語句</li><li>nextfile 語句</li><li>exit 語句</li></ul>',3)),a("p",null,[s[4]||(s[4]=n("但是在這個系列中，我們將詳細解釋：",-1)),s[5]||(s[5]=a("code",null,"if-else",-1)),s[6]||(s[6]=n("，",-1)),s[7]||(s[7]=a("code",null,"for",-1)),s[8]||(s[8]=n("，",-1)),s[9]||(s[9]=a("code",null,"while",-1)),s[10]||(s[10]=n("，",-1)),s[11]||(s[11]=a("code",null,"do-while",-1)),s[12]||(s[12]=n(" 語句。關於如何使用 ",-1)),s[13]||(s[13]=a("code",null,"next",-1)),s[14]||(s[14]=n(" 語句，如果你們記得的話，我們已經在 ",-1)),p(i,{href:"http://www.tecmint.com/use-next-command-with-awk-in-linux/"},{default:e(()=>[...s[3]||(s[3]=[n("Awk 系列的第6部分",-1)])]),_:1}),s[15]||(s[15]=n("介紹過了。",-1))]),s[31]||(s[31]=l(`<h3 id="_1-if-else-語句" tabindex="-1">1. if-else 語句 <a class="header-anchor" href="#_1-if-else-語句" aria-label="Permalink to “1. if-else 語句”">​</a></h3><p>if 語句的語法和 shell 裏面的 if 語句類似：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if  (condition1) {</span></span>
<span class="line"><span>actions1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else {</span></span>
<span class="line"><span>actions2</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的語法中，condition1 和 condition2 是 Awk 的表達式，actions1 和 actions2 是當相應的條件滿足時執行的 Awk 命令。</p><p>當 condition1 滿足時，意味着它的值是 true，此時會執行 actions1，if 語句退出，否則（譯註：condition1 為 false）執行 actions2。</p><p>if 語句可以擴展成如下的 <code>if-else_if-else</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if (condition1){</span></span>
<span class="line"><span>actions1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else if (conditions2){</span></span>
<span class="line"><span>actions2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else{</span></span>
<span class="line"><span>actions3</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面例子中，如果 condition1 為 true，執行 actions1，if 語句退出；否則對 condition2 求值，如果值為 true，那麼執行 actions2，if 語句退出。然而如果 condition2 是 false，那麼會執行 actions3 退出 if語句。</p><p>下面是一個使用 if 語句的例子，我們有一個存儲用户和他們年齡列表的文件 users.txt。</p><p>我們想要打印用户的名字以及他們的年齡是大於 25 還是小於 25。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>aaronkilik@tecMint ~ $ cat users.txt</span></span>
<span class="line"><span>Sarah L			35    	F</span></span>
<span class="line"><span>Aaron Kili		40    	M</span></span>
<span class="line"><span>John  Doo		20    	M</span></span>
<span class="line"><span>Kili  Seth		49    	M</span></span></code></pre></div><p>我們可以寫一個簡短的 shell 腳本來執行我們上面的任務，下面是腳本的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>awk &#39; { </span></span>
<span class="line"><span>if ( $3 &lt;= 25 ){</span></span>
<span class="line"><span>print &quot;User&quot;,$1,$2,&quot;is less than 25 years old.&quot; ;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else {</span></span>
<span class="line"><span>print &quot;User&quot;,$1,$2,&quot;is more than 25 years old&quot; ; </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}&#39;    ~/users.txt</span></span></code></pre></div><p>保存文件後退出，執行下面命令讓腳本可執行，然後執行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
<span class="line"><span>$ ./test.sh</span></span></code></pre></div><p>輸出樣例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>User Sarah L is more than 25 years old</span></span>
<span class="line"><span>User Aaron Kili is more than 25 years old</span></span>
<span class="line"><span>User John Doo is less than 25 years old.</span></span>
<span class="line"><span>User Kili Seth is more than 25 years old</span></span></code></pre></div><h3 id="_2-for-語句" tabindex="-1">2. for 語句 <a class="header-anchor" href="#_2-for-語句" aria-label="Permalink to “2. for 語句”">​</a></h3><p>如果你想循環執行一些 Awk 命令，那麼 <code>for</code> 語句十分合適，它的語法如下：</p><p>這裏只是簡單的定義一個計數器來控制循環的執行。首先你要初始化那個計數器 （counter），然後根據某個條件判斷是否執行，如果該條件為 true 則執行，最後增加計數器。當計數器不滿足條件時則終止循環。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for ( counter-initialization; test-condition; counter-increment ){</span></span>
<span class="line"><span>actions</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下面的 Awk 命令利用打印數字 0-10 來説明 <code>for</code> 語句是怎麼工作的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ awk &#39;BEGIN{ for(counter=0;counter&lt;=10;counter++){ print counter} }&#39;</span></span></code></pre></div><p>輸出樣例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><h3 id="_3-while-語句" tabindex="-1">3. while 語句 <a class="header-anchor" href="#_3-while-語句" aria-label="Permalink to “3. while 語句”">​</a></h3><p>傳統的 <code>while</code> 語句語法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while ( condition ) {</span></span>
<span class="line"><span>actions</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的 condition 是 Awk 表達式，actions 是當 condition 為 true 時執行的 Awk 命令。</p><p>下面是仍然用打印數字 0-10 來解釋 while 語句的用法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>awk &#39; BEGIN{ counter=0 ;</span></span>
<span class="line"><span>while(counter&lt;=10){</span></span>
<span class="line"><span>print counter;</span></span>
<span class="line"><span>counter+=1 ;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>保存文件，讓文件可執行，然後執行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
<span class="line"><span>$ ./test.sh</span></span></code></pre></div><p>輸出樣例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><h3 id="_4-do-while-語句" tabindex="-1">4. do-while 語句 <a class="header-anchor" href="#_4-do-while-語句" aria-label="Permalink to “4. do-while 語句”">​</a></h3><p>這個是上面的 <code>while</code> 語句語法的一個變化，其語法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>do {</span></span>
<span class="line"><span>actions</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>while (condition)</span></span></code></pre></div><p>二者的區別是，在 <code>do-while</code> 中，Awk 的命令在條件求值前先執行。我們使用 <code>while</code> 語句中同樣的例子來解釋 <code>do-while</code> 的使用，將 test.sh 腳本中的 Awk 命令做如下更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>awk &#39; BEGIN{ counter=0 ;  </span></span>
<span class="line"><span>do{</span></span>
<span class="line"><span>print counter;  </span></span>
<span class="line"><span>counter+=1 ;    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>while (counter&lt;=10)   </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>&#39;</span></span></code></pre></div><p>修改腳本後，保存退出。讓腳本可執行，然後按如下方式執行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
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
<span class="line"><span>10</span></span></code></pre></div><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>前面指出，這並不是一個 Awk 流控制的完整介紹。在 Awk 中還有其它幾個流控制語句。</p><p>不管怎樣，Awk 系列的此部分給你一個如何基於某些條件來控制 Awk 命令執行的基本概念。</p><p>你可以接着通過仔細看看其餘的流控制語句來獲得關於這個主題的更多知識。最後，Awk 系列的下一部分，我們將會介紹如何寫 Awk 腳本。</p><hr>`,49)),a("p",null,[s[17]||(s[17]=n("via: ",-1)),p(i,{href:"http://www.tecmint.com/use-flow-control-statements-with-awk-command/"},{default:e(()=>[...s[16]||(s[16]=[n("http://www.tecmint.com/use-flow-control-statements-with-awk-command/",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),p(i,{href:"http://www.tecmint.com/author/aaronkili/"},{default:e(()=>[...s[18]||(s[18]=[n("Aaron Kili",-1)])]),_:1}),s[22]||(s[22]=n(" 譯者：",-1)),p(i,{href:"https://github.com/chunyang-wen"},{default:e(()=>[...s[19]||(s[19]=[n("chunyang-wen",-1)])]),_:1}),s[23]||(s[23]=n(" 校對：",-1)),p(i,{href:"https://github.com/wxy"},{default:e(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[26]||(s[26]=n("本文由 ",-1)),p(i,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[24]||(s[24]=[n("LCTT",-1)])]),_:1}),s[27]||(s[27]=n(" 原創編譯，",-1)),p(i,{href:"https://linux.cn/"},{default:e(()=>[...s[25]||(s[25]=[n("Linux中國",-1)])]),_:1}),s[28]||(s[28]=n(" 榮譽推出",-1))])])}const C=t(h,[["render",c]]);export{y as __pageData,C as default};
