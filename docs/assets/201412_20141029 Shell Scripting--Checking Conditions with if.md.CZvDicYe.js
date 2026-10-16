import{_ as o,a0 as r,w as m,s,I as t,x as n,a1 as a,A as l,ao as f}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"Shell 脚本 - 使用 if 语句进行条件检测 | LCTT x X-CMD","titleTemplate":false,"description":"Shell 脚本 - 使用 if 语句进行条件检测 | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shell 脚本 - 使用 if 语句进行条件检测 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shell 脚本 - 使用 if 语句进行条件检测 | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141029 Shell Scripting--Checking Conditions with if","title":"Shell 脚本 - 使用 if 语句进行条件检测","tag":"201412","desc":""},"relativePath":"201412/20141029 Shell Scripting--Checking Conditions with if.md","filePath":"[post].md"}'),d={name:"201412/20141029 Shell Scripting--Checking Conditions with if.md"};function h(p,e,u,c,b,x){const i=r("Link");return m(),s("div",null,[e[15]||(e[15]=t("h1",{id:"shell-脚本-使用-if-语句进行条件检测",tabindex:"-1"},[n("Shell 脚本 - 使用 if 语句进行条件检测 "),t("a",{class:"header-anchor",href:"#shell-脚本-使用-if-语句进行条件检测","aria-label":"Permalink to “Shell 脚本 - 使用 if 语句进行条件检测”"},"​")],-1)),t("p",null,[a(i,{href:"http://en.wikipedia.org/wiki/Bourne_shell"},{default:l(()=>[...e[0]||(e[0]=[n("Bourne Shell",-1)])]),_:1}),e[1]||(e[1]=n(" 的 if 语句和大部分编程语言一样 - 检测条件是否真实，如果条件为真，shell 会执行这个 if 语句指定的代码块，如果条件为假，shell 就会跳过 if 代码块，继续执行之后的代码。",-1))]),e[16]||(e[16]=f(`<h3 id="if-语句的语法" tabindex="-1">if 语句的语法： <a class="header-anchor" href="#if-语句的语法" aria-label="Permalink to “if 语句的语法：”">​</a></h3><pre><code>if [ 判断条件 ]
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
</code></pre><h4 id="if-else-语句" tabindex="-1">if-else 语句: <a class="header-anchor" href="#if-else-语句" aria-label="Permalink to “if-else 语句:”">​</a></h4><p>除了标准的 if 语句之外，我们还可以加入 else 代码块来扩展 if 语句。这么做的主要目的是：如果 if 条件为真，执行 if 语句里的代码块，如果 if 条件为假，执行 else 语句里的代码块。</p><h4 id="语法" tabindex="-1">语法: <a class="header-anchor" href="#语法" aria-label="Permalink to “语法:”">​</a></h4><pre><code>if [ 判断条件 ]
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
</code></pre><h3 id="if-elif-else-fi-语句-简写的-else-if" tabindex="-1">If..elif..else..fi 语句 (简写的 else if) <a class="header-anchor" href="#if-elif-else-fi-语句-简写的-else-if" aria-label="Permalink to “If..elif..else..fi 语句 (简写的 else if)”">​</a></h3><p>Bourne Shell 的 if 语句语法中，else 语句里的代码块会在 if 条件为假时执行。我们还可以将 if 语句嵌套到一起，来实现多重条件的检测。我们可以使用 elif 语句（else if 的缩写）来构建多重条件的检测。</p><h4 id="语法-1" tabindex="-1">语法 : <a class="header-anchor" href="#语法-1" aria-label="Permalink to “语法 :”">​</a></h4><pre><code>if [ 判断条件1 ]
then
       command1
       command2
       ……..
       last_command
elif [ 判断条件2 ]
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
</code></pre><h3 id="多重-if-语句" tabindex="-1">多重 if 语句 : <a class="header-anchor" href="#多重-if-语句" aria-label="Permalink to “多重 if 语句 :”">​</a></h3><p>If 和 else 语句可以在一个 bash 脚本里相互嵌套。关键词 “fi” 表示里层 if 语句的结束，所有 if 语句必须使用 关键词 “fi” 来结束。</p><p>基本 if 语句的<strong>嵌套语法</strong>：</p><pre><code>if [ 判断条件1 ]
then
        command1
        command2
        ……..
        last_command
else
if [ 判断条件2 ]
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
</code></pre><hr>`,23)),t("p",null,[e[3]||(e[3]=n("via: ",-1)),a(i,{href:"http://www.linuxtechi.com/shell-scripting-checking-conditions-with-if/"},{default:l(()=>[...e[2]||(e[2]=[n("http://www.linuxtechi.com/shell-scripting-checking-conditions-with-if/",-1)])]),_:1})]),t("p",null,[e[7]||(e[7]=n("作者：",-1)),a(i,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:l(()=>[...e[4]||(e[4]=[n("Pradeep Kumar",-1)])]),_:1}),e[8]||(e[8]=n(" 译者：",-1)),a(i,{href:"https://github.com/ThomazL"},{default:l(()=>[...e[5]||(e[5]=[n("ThomazL",-1)])]),_:1}),e[9]||(e[9]=n(" 校对：",-1)),a(i,{href:"https://github.com/wxy"},{default:l(()=>[...e[6]||(e[6]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[12]||(e[12]=n("本文由 ",-1)),a(i,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...e[10]||(e[10]=[n("LCTT",-1)])]),_:1}),e[13]||(e[13]=n(" 原创翻译，",-1)),a(i,{href:"http://linux.cn/"},{default:l(()=>[...e[11]||(e[11]=[n("Linux中国",-1)])]),_:1}),e[14]||(e[14]=n(" 荣誉推出",-1))])])}const k=o(d,[["render",h]]);export{C as __pageData,k as default};
