import{_ as e,a0 as t,w as r,s as o,I as a,x as n,a1 as i,A as l,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"我最喜歡的 D 語言功能 | LCTT x X-CMD","titleTemplate":false,"description":"我最喜歡的 D 語言功能 | LCTT (202008) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"我最喜歡的 D 語言功能 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"我最喜歡的 D 語言功能 | LCTT (202008) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202008/20200722 The feature that makes D my favorite programming language","title":"我最喜歡的 D 語言功能","tag":"202008","desc":""},"relativePath":"202008/20200722 The feature that makes D my favorite programming language.md","filePath":"[post].md"}'),u={name:"202008/20200722 The feature that makes D my favorite programming language.md"};function g(m,s,f,k,b,h){const p=t("Link");return r(),o("div",null,[s[34]||(s[34]=a("h1",{id:"我最喜歡的-d-語言功能",tabindex:"-1"},[n("我最喜歡的 D 語言功能 "),a("a",{class:"header-anchor",href:"#我最喜歡的-d-語言功能","aria-label":"Permalink to “我最喜歡的 D 語言功能”"},"​")],-1)),s[35]||(s[35]=a("blockquote",null,[a("p",null,"UFCS 能讓你能夠編寫自然的可重用代碼而不會犧牲便利性。")],-1)),s[36]||(s[36]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202008/05/215524d9j62oui7mgm7ms9.jpg",alt:""})],-1)),a("p",null,[s[4]||(s[4]=n("早在 2017 年，我就寫過為什麼 ",-1)),i(p,{href:"https://opensource.com/article/17/5/d-open-source-software-development"},{default:l(()=>[...s[0]||(s[0]=[n("D 語言是開發的絕佳選擇",-1)])]),_:1}),s[5]||(s[5]=n("的文章。但是 D 語言中有一個出色的功能我沒有充分的展開介紹：",-1)),a("ruby",null,[i(p,{href:"http://ddili.org/ders/d.en/ufcs.html"},{default:l(()=>[...s[1]||(s[1]=[n("通用函數調用語法",-1)])]),_:1}),s[2]||(s[2]=a("rt",null,"Universal Function Call Syntax",-1))]),s[6]||(s[6]=n("（UFCS）。UFCS 是 D 語言中的一種",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Syntactic_sugar"},{default:l(()=>[...s[3]||(s[3]=[n("語法糖",-1)])]),_:1}),s[7]||(s[7]=n("，它可以在類型（字符串、數字、布爾值等）上鍊接任何常規函數，就像該類型的成員函數一樣。",-1))]),a("p",null,[s[10]||(s[10]=n("如果你尚未安裝 D 語言，請",-1)),i(p,{href:"https://tour.dlang.org/tour/en/welcome/install-d-locally"},{default:l(()=>[...s[8]||(s[8]=[n("安裝 D 語言編譯器",-1)])]),_:1}),s[11]||(s[11]=n("，以便你可以自己",-1)),i(p,{href:"https://tour.dlang.org/tour/en/welcome/run-d-program-locally"},{default:l(()=>[...s[9]||(s[9]=[n("運行 D 代碼",-1)])]),_:1}),s[12]||(s[12]=n("。",-1))]),s[37]||(s[37]=d(`<p>看一下以下示例代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// file: ufcs_demo.d</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>使用你喜歡的 D 語言編譯器進行編譯，查看這個簡單示例應用做了什麼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dmd ufcs_demo.d</span></span>
<span class="line"><span>$ ./ufcs_demo</span></span>
<span class="line"><span>[2, 4]</span></span></code></pre></div><p>但是，使用作為 D 語言的內置功能的 UFCS ，你還可以自然方式編寫代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>writeln([1, 2, 3, 4].evenNumbers());</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>或完全刪除現在多餘的括號，使 <code>evenNumbers</code> 看起來像是一個屬性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>writeln([1, 2, 3, 4].evenNumbers); // prints 2, 4</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>因此，完整的代碼現在變為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// file: ufcs_demo.d</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>使用你最喜歡的 D 語言編譯器進行編譯，然後嘗試一下。 如預期的那樣，它產生相同的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dmd ufcs_demo.d</span></span>
<span class="line"><span>$ ./ufcs_demo</span></span>
<span class="line"><span>[2, 4]</span></span></code></pre></div><p>在編譯過程中，編譯器<em>自動地</em>將數組作為函數的第一個參數。這是一個常規模式，使得使用 D 語言成為一種樂趣，因此，它與你自然而然考慮代碼的感覺非常相似。結果就是函數式編程。</p><p>你可能會猜出這打印的是什麼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//file: cool.d</span></span>
<span class="line"><span>import std.stdio : writeln;</span></span>
<span class="line"><span>import std.uni : asLowerCase, asCapitalized;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    string mySentence = &quot;D IS COOL&quot;;</span></span>
<span class="line"><span>    writeln(mySentence.asLowerCase.asCapitalized);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>確認一下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dmd cool.d</span></span>
<span class="line"><span>$ ./cool</span></span>
<span class="line"><span>D is cool</span></span></code></pre></div>`,17)),a("p",null,[s[14]||(s[14]=n("結合",-1)),i(p,{href:"https://dlang.org/comparison.html"},{default:l(()=>[...s[13]||(s[13]=[n("其他 D 語言的功能",-1)])]),_:1}),s[15]||(s[15]=n("，UFCS 使你能夠編寫可重用的代碼，並在不犧牲便利性的情況下自然地進行編寫。",-1))]),s[38]||(s[38]=a("h3",{id:"是時候嘗試-d-語言了",tabindex:"-1"},[n("是時候嘗試 D 語言了 "),a("a",{class:"header-anchor",href:"#是時候嘗試-d-語言了","aria-label":"Permalink to “是時候嘗試 D 語言了”"},"​")],-1)),a("p",null,[s[17]||(s[17]=n("就像我之前寫的那樣，D 語言是一種很棒的開發語言。從 ",-1)),i(p,{href:"https://dlang.org/download.html"},{default:l(()=>[...s[16]||(s[16]=[n("D 語言的下載頁面",-1)])]),_:1}),s[18]||(s[18]=n("可以很容易地進行安裝，因此請下載編譯器，查看示例，並親自體驗 D 語言。",-1))]),s[39]||(s[39]=a("hr",null,null,-1)),a("p",null,[s[20]||(s[20]=n("via: ",-1)),i(p,{href:"https://opensource.com/article/20/7/d-programming"},{default:l(()=>[...s[19]||(s[19]=[n("https://opensource.com/article/20/7/d-programming",-1)])]),_:1})]),a("p",null,[s[25]||(s[25]=n("作者：",-1)),i(p,{href:"https://opensource.com/users/aberba"},{default:l(()=>[...s[21]||(s[21]=[n("Lawrence Aberba",-1)])]),_:1}),s[26]||(s[26]=n(" 選題：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[22]||(s[22]=[n("lujun9972",-1)])]),_:1}),s[27]||(s[27]=n(" 譯者：",-1)),i(p,{href:"https://github.com/geekpi"},{default:l(()=>[...s[23]||(s[23]=[n("geekpi",-1)])]),_:1}),s[28]||(s[28]=n(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[24]||(s[24]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[31]||(s[31]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[29]||(s[29]=[n("LCTT",-1)])]),_:1}),s[32]||(s[32]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:l(()=>[...s[30]||(s[30]=[n("Linux中國",-1)])]),_:1}),s[33]||(s[33]=n(" 榮譽推出",-1))])])}const D=e(u,[["render",g]]);export{v as __pageData,D as default};
