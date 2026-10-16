import{_ as o,a0 as r,w as m,s,I as t,x as n,a1 as a,A as l,ao as f}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"Shell 腳本 - 使用 if 語句進行條件檢測 | LCTT x X-CMD","titleTemplate":false,"description":"Shell 腳本 - 使用 if 語句進行條件檢測 | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shell 腳本 - 使用 if 語句進行條件檢測 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shell 腳本 - 使用 if 語句進行條件檢測 | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141029 Shell Scripting--Checking Conditions with if","title":"Shell 腳本 - 使用 if 語句進行條件檢測","tag":"201412","desc":""},"relativePath":"201412/20141029 Shell Scripting--Checking Conditions with if.md","filePath":"[post].md"}'),d={name:"201412/20141029 Shell Scripting--Checking Conditions with if.md"};function h(p,e,u,c,b,x){const i=r("Link");return m(),s("div",null,[e[15]||(e[15]=t("h1",{id:"shell-腳本-使用-if-語句進行條件檢測",tabindex:"-1"},[n("Shell 腳本 - 使用 if 語句進行條件檢測 "),t("a",{class:"header-anchor",href:"#shell-腳本-使用-if-語句進行條件檢測","aria-label":"Permalink to “Shell 腳本 - 使用 if 語句進行條件檢測”"},"​")],-1)),t("p",null,[a(i,{href:"http://en.wikipedia.org/wiki/Bourne_shell"},{default:l(()=>[...e[0]||(e[0]=[n("Bourne Shell",-1)])]),_:1}),e[1]||(e[1]=n(" 的 if 語句和大部分編程語言一樣 - 檢測條件是否真實，如果條件為真，shell 會執行這個 if 語句指定的代碼塊，如果條件為假，shell 就會跳過 if 代碼塊，繼續執行之後的代碼。",-1))]),e[16]||(e[16]=f(`<h3 id="if-語句的語法" tabindex="-1">if 語句的語法： <a class="header-anchor" href="#if-語句的語法" aria-label="Permalink to “if 語句的語法：”">​</a></h3><pre><code>if [ 判斷條件 ]
then
        command1
        command2
        ……..
        last_command
fi
</code></pre><h4 id="example" tabindex="-1">Example: <a class="header-anchor" href="#example" aria-label="Permalink to “Example:”">​</a></h4><pre><code>#!/bin/bash
number=150
if [ $number -eq 150 ]
then
    echo &quot;Number is 150&quot;
fi
</code></pre><h4 id="if-else-語句" tabindex="-1">if-else 語句: <a class="header-anchor" href="#if-else-語句" aria-label="Permalink to “if-else 語句:”">​</a></h4><p>除了標準的 if 語句之外，我們還可以加入 else 代碼塊來擴展 if 語句。這麼做的主要目的是：如果 if 條件為真，執行 if 語句裏的代碼塊，如果 if 條件為假，執行 else 語句裏的代碼塊。</p><h4 id="語法" tabindex="-1">語法: <a class="header-anchor" href="#語法" aria-label="Permalink to “語法:”">​</a></h4><pre><code>if [ 判斷條件 ]
then
       command1
       command2
       ……..
       last_command
else
       command1
       command2
       ……..
       last_command
fi
</code></pre><h4 id="example-1" tabindex="-1">Example: <a class="header-anchor" href="#example-1" aria-label="Permalink to “Example:”">​</a></h4><pre><code>#!/bin/bash
number=150
if [ $number -gt 250 ]
then
    echo &quot;Number is greater&quot;
else
    echo &quot;Number is smaller&quot;
fi
</code></pre><h3 id="if-elif-else-fi-語句-簡寫的-else-if" tabindex="-1">If..elif..else..fi 語句 (簡寫的 else if) <a class="header-anchor" href="#if-elif-else-fi-語句-簡寫的-else-if" aria-label="Permalink to “If..elif..else..fi 語句 (簡寫的 else if)”">​</a></h3><p>Bourne Shell 的 if 語句語法中，else 語句裏的代碼塊會在 if 條件為假時執行。我們還可以將 if 語句嵌套到一起，來實現多重條件的檢測。我們可以使用 elif 語句（else if 的縮寫）來構建多重條件的檢測。</p><h4 id="語法-1" tabindex="-1">語法 : <a class="header-anchor" href="#語法-1" aria-label="Permalink to “語法 :”">​</a></h4><pre><code>if [ 判斷條件1 ]
then
       command1
       command2
       ……..
       last_command
elif [ 判斷條件2 ]
then
        command1
        command2
        ……..
        last_command
else
command1
command2
……..
last_command
fi
</code></pre><h4 id="example-2" tabindex="-1">Example : <a class="header-anchor" href="#example-2" aria-label="Permalink to “Example :”">​</a></h4><pre><code>#!/bin/bash
number=150
if [ $number -gt 300 ]
then
    echo &quot;Number is greater&quot;
elif [ $number -lt 300 ]
then
    echo &quot;Number is Smaller&quot;
else
    echo &quot;Number is equal to actual value&quot;
fi
</code></pre><h3 id="多重-if-語句" tabindex="-1">多重 if 語句 : <a class="header-anchor" href="#多重-if-語句" aria-label="Permalink to “多重 if 語句 :”">​</a></h3><p>If 和 else 語句可以在一個 bash 腳本里相互嵌套。關鍵詞 “fi” 表示裏層 if 語句的結束，所有 if 語句必須使用 關鍵詞 “fi” 來結束。</p><p>基本 if 語句的<strong>嵌套語法</strong>：</p><pre><code>if [ 判斷條件1 ]
then
        command1
        command2
        ……..
        last_command
else
if [ 判斷條件2 ]
then
        command1
        command2
        ……..
        last_command
else
        command1
        command2
         ……..
         last_command
      fi
fi
</code></pre><h4 id="example-3" tabindex="-1">Example: <a class="header-anchor" href="#example-3" aria-label="Permalink to “Example:”">​</a></h4><pre><code>#!/bin/bash
number=150
if [ $number -eq 150 ]
then
   echo &quot;Number is 150&quot;
else
if [ $number -gt 150 ]
then
    echo &quot;Number is greater&quot;
else
    echo &quot;&#39;Number is smaller&quot;
   fi
fi
</code></pre><hr>`,23)),t("p",null,[e[3]||(e[3]=n("via: ",-1)),a(i,{href:"http://www.linuxtechi.com/shell-scripting-checking-conditions-with-if/"},{default:l(()=>[...e[2]||(e[2]=[n("http://www.linuxtechi.com/shell-scripting-checking-conditions-with-if/",-1)])]),_:1})]),t("p",null,[e[7]||(e[7]=n("作者：",-1)),a(i,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:l(()=>[...e[4]||(e[4]=[n("Pradeep Kumar",-1)])]),_:1}),e[8]||(e[8]=n(" 譯者：",-1)),a(i,{href:"https://github.com/ThomazL"},{default:l(()=>[...e[5]||(e[5]=[n("ThomazL",-1)])]),_:1}),e[9]||(e[9]=n(" 校對：",-1)),a(i,{href:"https://github.com/wxy"},{default:l(()=>[...e[6]||(e[6]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[12]||(e[12]=n("本文由 ",-1)),a(i,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...e[10]||(e[10]=[n("LCTT",-1)])]),_:1}),e[13]||(e[13]=n(" 原創翻譯，",-1)),a(i,{href:"http://linux.cn/"},{default:l(()=>[...e[11]||(e[11]=[n("Linux中國",-1)])]),_:1}),e[14]||(e[14]=n(" 榮譽推出",-1))])])}const k=o(d,[["render",h]]);export{C as __pageData,k as default};
