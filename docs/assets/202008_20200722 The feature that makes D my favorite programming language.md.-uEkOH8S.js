import{_ as e,a0 as t,w as r,s as o,I as a,x as n,a1 as i,A as l,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"我最喜欢的 D 语言功能 | LCTT x X-CMD","titleTemplate":false,"description":"我最喜欢的 D 语言功能 | LCTT (202008) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"我最喜欢的 D 语言功能 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"我最喜欢的 D 语言功能 | LCTT (202008) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202008/20200722 The feature that makes D my favorite programming language","title":"我最喜欢的 D 语言功能","tag":"202008","desc":""},"relativePath":"202008/20200722 The feature that makes D my favorite programming language.md","filePath":"[post].md"}'),u={name:"202008/20200722 The feature that makes D my favorite programming language.md"};function g(m,s,f,k,b,h){const p=t("Link");return r(),o("div",null,[s[34]||(s[34]=a("h1",{id:"我最喜欢的-d-语言功能",tabindex:"-1"},[n("我最喜欢的 D 语言功能 "),a("a",{class:"header-anchor",href:"#我最喜欢的-d-语言功能","aria-label":"Permalink to “我最喜欢的 D 语言功能”"},"​")],-1)),s[35]||(s[35]=a("blockquote",null,[a("p",null,"UFCS 能让你能够编写自然的可重用代码而不会牺牲便利性。")],-1)),s[36]||(s[36]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202008/05/215524d9j62oui7mgm7ms9.jpg",alt:""})],-1)),a("p",null,[s[4]||(s[4]=n("早在 2017 年，我就写过为什么 ",-1)),i(p,{href:"https://opensource.com/article/17/5/d-open-source-software-development"},{default:l(()=>[...s[0]||(s[0]=[n("D 语言是开发的绝佳选择",-1)])]),_:1}),s[5]||(s[5]=n("的文章。但是 D 语言中有一个出色的功能我没有充分的展开介绍：",-1)),a("ruby",null,[i(p,{href:"http://ddili.org/ders/d.en/ufcs.html"},{default:l(()=>[...s[1]||(s[1]=[n("通用函数调用语法",-1)])]),_:1}),s[2]||(s[2]=a("rt",null,"Universal Function Call Syntax",-1))]),s[6]||(s[6]=n("（UFCS）。UFCS 是 D 语言中的一种",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Syntactic_sugar"},{default:l(()=>[...s[3]||(s[3]=[n("语法糖",-1)])]),_:1}),s[7]||(s[7]=n("，它可以在类型（字符串、数字、布尔值等）上链接任何常规函数，就像该类型的成员函数一样。",-1))]),a("p",null,[s[10]||(s[10]=n("如果你尚未安装 D 语言，请",-1)),i(p,{href:"https://tour.dlang.org/tour/en/welcome/install-d-locally"},{default:l(()=>[...s[8]||(s[8]=[n("安装 D 语言编译器",-1)])]),_:1}),s[11]||(s[11]=n("，以便你可以自己",-1)),i(p,{href:"https://tour.dlang.org/tour/en/welcome/run-d-program-locally"},{default:l(()=>[...s[9]||(s[9]=[n("运行 D 代码",-1)])]),_:1}),s[12]||(s[12]=n("。",-1))]),s[37]||(s[37]=d(`<p>看一下以下示例代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// file: ufcs_demo.d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module ufcs_demo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import std.stdio : writeln;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int[] evenNumbers(int[] numbers)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    import std.array : array;</span></span>
<span class="line"><span>    import std.algorithm : filter;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return numbers.filter!(n =&gt; n % 2 == 0).array;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    writeln(evenNumbers([1, 2, 3, 4]));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用你喜欢的 D 语言编译器进行编译，查看这个简单示例应用做了什么：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dmd ufcs_demo.d</span></span>
<span class="line"><span>$ ./ufcs_demo</span></span>
<span class="line"><span>[2, 4]</span></span></code></pre></div><p>但是，使用作为 D 语言的内置功能的 UFCS ，你还可以自然方式编写代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>writeln([1, 2, 3, 4].evenNumbers());</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>或完全删除现在多余的括号，使 <code>evenNumbers</code> 看起来像是一个属性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>writeln([1, 2, 3, 4].evenNumbers); // prints 2, 4</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>因此，完整的代码现在变为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// file: ufcs_demo.d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module ufcs_demo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import std.stdio : writeln;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int[] evenNumbers(int[] numbers)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    import std.array : array;</span></span>
<span class="line"><span>    import std.algorithm : filter;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return numbers.filter!(n =&gt; n % 2 == 0).array;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    writeln([1, 2, 3, 4].evenNumbers);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用你最喜欢的 D 语言编译器进行编译，然后尝试一下。 如预期的那样，它产生相同的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dmd ufcs_demo.d</span></span>
<span class="line"><span>$ ./ufcs_demo</span></span>
<span class="line"><span>[2, 4]</span></span></code></pre></div><p>在编译过程中，编译器<em>自动地</em>将数组作为函数的第一个参数。这是一个常规模式，使得使用 D 语言成为一种乐趣，因此，它与你自然而然考虑代码的感觉非常相似。结果就是函数式编程。</p><p>你可能会猜出这打印的是什么：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//file: cool.d</span></span>
<span class="line"><span>import std.stdio : writeln;</span></span>
<span class="line"><span>import std.uni : asLowerCase, asCapitalized;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    string mySentence = &quot;D IS COOL&quot;;</span></span>
<span class="line"><span>    writeln(mySentence.asLowerCase.asCapitalized);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>确认一下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dmd cool.d</span></span>
<span class="line"><span>$ ./cool</span></span>
<span class="line"><span>D is cool</span></span></code></pre></div>`,17)),a("p",null,[s[14]||(s[14]=n("结合",-1)),i(p,{href:"https://dlang.org/comparison.html"},{default:l(()=>[...s[13]||(s[13]=[n("其他 D 语言的功能",-1)])]),_:1}),s[15]||(s[15]=n("，UFCS 使你能够编写可重用的代码，并在不牺牲便利性的情况下自然地进行编写。",-1))]),s[38]||(s[38]=a("h3",{id:"是时候尝试-d-语言了",tabindex:"-1"},[n("是时候尝试 D 语言了 "),a("a",{class:"header-anchor",href:"#是时候尝试-d-语言了","aria-label":"Permalink to “是时候尝试 D 语言了”"},"​")],-1)),a("p",null,[s[17]||(s[17]=n("就像我之前写的那样，D 语言是一种很棒的开发语言。从 ",-1)),i(p,{href:"https://dlang.org/download.html"},{default:l(()=>[...s[16]||(s[16]=[n("D 语言的下载页面",-1)])]),_:1}),s[18]||(s[18]=n("可以很容易地进行安装，因此请下载编译器，查看示例，并亲自体验 D 语言。",-1))]),s[39]||(s[39]=a("hr",null,null,-1)),a("p",null,[s[20]||(s[20]=n("via: ",-1)),i(p,{href:"https://opensource.com/article/20/7/d-programming"},{default:l(()=>[...s[19]||(s[19]=[n("https://opensource.com/article/20/7/d-programming",-1)])]),_:1})]),a("p",null,[s[25]||(s[25]=n("作者：",-1)),i(p,{href:"https://opensource.com/users/aberba"},{default:l(()=>[...s[21]||(s[21]=[n("Lawrence Aberba",-1)])]),_:1}),s[26]||(s[26]=n(" 选题：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[22]||(s[22]=[n("lujun9972",-1)])]),_:1}),s[27]||(s[27]=n(" 译者：",-1)),i(p,{href:"https://github.com/geekpi"},{default:l(()=>[...s[23]||(s[23]=[n("geekpi",-1)])]),_:1}),s[28]||(s[28]=n(" 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[24]||(s[24]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[31]||(s[31]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[29]||(s[29]=[n("LCTT",-1)])]),_:1}),s[32]||(s[32]=n(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:l(()=>[...s[30]||(s[30]=[n("Linux中国",-1)])]),_:1}),s[33]||(s[33]=n(" 荣誉推出",-1))])])}const D=e(u,[["render",g]]);export{v as __pageData,D as default};
