import{_ as e,a0 as r,w as o,s as d,I as a,x as n,a1 as l,A as i,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"我為什麼要用 D 語言寫腳本？ | LCTT x X-CMD","titleTemplate":false,"description":"我為什麼要用 D 語言寫腳本？ | LCTT (202102) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"我為什麼要用 D 語言寫腳本？ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"我為什麼要用 D 語言寫腳本？ | LCTT (202102) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202102/20210127 Why I use the D programming language for scripting","title":"我為什麼要用 D 語言寫腳本？","tag":"202102","desc":""},"relativePath":"202102/20210127 Why I use the D programming language for scripting.md","filePath":"[post].md"}'),u={name:"202102/20210127 Why I use the D programming language for scripting.md"};function g(b,s,m,f,k,D){const p=r("Link");return o(),d("div",null,[s[55]||(s[55]=a("h1",{id:"我為什麼要用-d-語言寫腳本",tabindex:"-1"},[n("我為什麼要用 D 語言寫腳本？ "),a("a",{class:"header-anchor",href:"#我為什麼要用-d-語言寫腳本","aria-label":"Permalink to “我為什麼要用 D 語言寫腳本？”"},"​")],-1)),s[56]||(s[56]=a("blockquote",null,[a("p",null,"D 語言以系統編程語言而聞名，但它也是編寫腳本的一個很好的選擇。")],-1)),s[57]||(s[57]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202102/09/134351j4m3hrhll0h38plp.jpg",alt:""})],-1)),s[58]||(s[58]=a("p",null,"D 語言由於其靜態類型和元編程能力，經常被宣傳為系統編程語言。然而，它也是一種非常高效的腳本語言。",-1)),a("p",null,[s[1]||(s[1]=n("由於 Python 在自動化任務和快速實現原型想法方面的靈活性，它通常被選為腳本語言。這使得 Python 對系統管理員、",-1)),l(p,{href:"https://opensource.com/article/20/3/automating-community-management-python"},{default:i(()=>[...s[0]||(s[0]=[n("管理者",-1)])]),_:1}),s[2]||(s[2]=n("和一般的開發人員非常有吸引力，因為它可以自動完成他們可能需要手動完成的重複性任務。",-1))]),s[59]||(s[59]=a("p",null,"我們自然也可以期待任何其他的腳本編寫語言具有 Python 的這些特性和能力。以下是我認為 D 是一個不錯的選擇的兩個原因。",-1)),s[60]||(s[60]=a("h3",{id:"_1、d-很容易讀和寫",tabindex:"-1"},[n("1、D 很容易讀和寫 "),a("a",{class:"header-anchor",href:"#_1、d-很容易讀和寫","aria-label":"Permalink to “1、D 很容易讀和寫”"},"​")],-1)),s[61]||(s[61]=a("p",null,"作為一種類似於 C 的語言，D 應該是大多數程序員所熟悉的。任何使用 JavaScript、Java、PHP 或 Python 的人對 D 語言都很容易上手。",-1)),a("p",null,[s[6]||(s[6]=n("如果你還沒有安裝 D，請",-1)),l(p,{href:"https://tour.dlang.org/tour/en/welcome/install-d-locally"},{default:i(()=>[...s[3]||(s[3]=[n("安裝 D 編譯器",-1)])]),_:1}),s[7]||(s[7]=n("，這樣你就可以",-1)),l(p,{href:"https://tour.dlang.org/tour/en/welcome/run-d-program-locally"},{default:i(()=>[...s[4]||(s[4]=[n("運行本文中的 D 代碼",-1)])]),_:1}),s[8]||(s[8]=n("。你也可以使用",-1)),l(p,{href:"https://run.dlang.io/"},{default:i(()=>[...s[5]||(s[5]=[n("在線 D 編輯器",-1)])]),_:1}),s[9]||(s[9]=n("。",-1))]),s[62]||(s[62]=t(`<p>下面是一個 D 代碼的例子，它從一個名為 <code>words.txt</code> 的文件中讀取單詞，並在命令列中打印出來：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>open</span></span>
<span class="line"><span>source</span></span>
<span class="line"><span>is</span></span>
<span class="line"><span>cool</span></span></code></pre></div><p>用 D 語言寫腳本:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env rdmd</span></span>
<span class="line"><span>// file print_words.d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// import the D standard library</span></span>
<span class="line"><span>import std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main(){</span></span>
<span class="line"><span>    // open the file</span></span>
<span class="line"><span>     File(&quot;./words.txt&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         //iterate by line</span></span>
<span class="line"><span>        .byLine</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // print each number</span></span>
<span class="line"><span>        .each!writeln;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4)),a("p",null,[s[12]||(s[12]=n("這段代碼以 ",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Shebang_(Unix)"},{default:i(()=>[...s[10]||(s[10]=[n("釋伴",-1)])]),_:1}),s[13]||(s[13]=n(" 開頭，它將使用 ",-1)),l(p,{href:"https://dlang.org/rdmd.html"},{default:i(()=>[...s[11]||(s[11]=[n("rdmd",-1)])]),_:1}),s[14]||(s[14]=n(" 來運行這段代碼，",-1)),s[15]||(s[15]=a("code",null,"rdmd",-1)),s[16]||(s[16]=n(" 是 D 編譯器自帶的編譯和運行代碼的工具。假設你運行的是 Unix 或 Linux，在運行這個腳本之前，你必須使用",-1)),s[17]||(s[17]=a("code",null," chmod",-1)),s[18]||(s[18]=n(" 命令使其可執行：",-1))]),s[63]||(s[63]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chmod u+x print_words.d</span></span></code></pre></div><p>現在腳本是可執行的，你可以運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>./print_words.d</span></span></code></pre></div><p>這將在你的命令列中打印以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>open</span></span>
<span class="line"><span>source</span></span>
<span class="line"><span>is</span></span>
<span class="line"><span>cool</span></span></code></pre></div>`,5)),a("p",null,[s[20]||(s[20]=n("恭喜你，你寫了第一個 D 語言腳本。你可以看到 D 是如何讓你按順序鏈式調用函數，這讓閲讀代碼的感覺很自然，類似於你在頭腦中思考問題的方式。這個",-1)),l(p,{href:"https://opensource.com/article/20/7/d-programming"},{default:i(()=>[...s[19]||(s[19]=[n("功能讓 D 成為我最喜歡的編程語言",-1)])]),_:1}),s[21]||(s[21]=n("。",-1))]),s[64]||(s[64]=t(`<p>試着再寫一個腳本：一個非營利組織的管理員有一個捐款的文本文件，每筆金額都是單獨的一行。管理員想把前 10 筆捐款相加，然後打印出金額：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env rdmd</span></span>
<span class="line"><span>// file sum_donations.d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    double total = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // open the file</span></span>
<span class="line"><span>    File(&quot;monies.txt&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         // iterate by line</span></span>
<span class="line"><span>        .byLine</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         // pick first 10 lines</span></span>
<span class="line"><span>        .take(10)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // remove new line characters (\\n)</span></span>
<span class="line"><span>        .map!(strip)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         // convert each to double</span></span>
<span class="line"><span>        .map!(to!double)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // add element to total</span></span>
<span class="line"><span>        .tee!((x) { total += x; })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // print each number</span></span>
<span class="line"><span>        .each!writeln;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // print total</span></span>
<span class="line"><span>    writeln(&quot;total: &quot;, total);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,2)),a("p",null,[s[23]||(s[23]=n("與 ",-1)),s[24]||(s[24]=a("code",null,"each",-1)),s[25]||(s[25]=n(" 一起使用的 ",-1)),s[26]||(s[26]=a("code",null,"!",-1)),s[27]||(s[27]=n(" 操作符是",-1)),l(p,{href:"http://ddili.org/ders/d.en/templates.html"},{default:i(()=>[...s[22]||(s[22]=[n("模板參數",-1)])]),_:1}),s[28]||(s[28]=n("的語法。",-1))]),s[65]||(s[65]=a("h3",{id:"_2、d-是快速原型設計的好幫手",tabindex:"-1"},[n("2、D 是快速原型設計的好幫手 "),a("a",{class:"header-anchor",href:"#_2、d-是快速原型設計的好幫手","aria-label":"Permalink to “2、D 是快速原型設計的好幫手”"},"​")],-1)),a("p",null,[s[30]||(s[30]=n("D 是靈活的，它可以快速地將代碼敲打在一起，並使其發揮作用。它的標準庫中包含了豐富的實用函數，用於執行常見的任務，如操作數據（JSON、CSV、文本等）。它還帶有一套豐富的通用算法，用於迭代、搜索、比較和 mutate 數據。這些巧妙的算法通過定義通用的 ",-1)),l(p,{href:"http://ddili.org/ders/d.en/ranges.html"},{default:i(()=>[...s[29]||(s[29]=[n("基於範圍的接口",-1)])]),_:1}),s[31]||(s[31]=n(" 而按照序列進行處理。",-1))]),a("p",null,[s[33]||(s[33]=n("上面的腳本顯示了 D 中的鏈式調用函數如何提供順序處理和操作數據的要領。D 的另一個吸引人的地方是它不斷增長的用於執行普通任務的第三方包的生態系統。一個例子是，使用 ",-1)),l(p,{href:"https://vibed.org"},{default:i(()=>[...s[32]||(s[32]=[n("Vibe.d",-1)])]),_:1}),s[34]||(s[34]=n(" web 框架構建一個簡單的 web 服務器很容易。下面是一個例子：",-1))]),s[66]||(s[66]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env dub</span></span>
<span class="line"><span>/+ dub.sdl:</span></span>
<span class="line"><span>dependency &quot;vibe-d&quot; version=&quot;~&gt;0.8.0&quot;</span></span>
<span class="line"><span>+/</span></span>
<span class="line"><span>void main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    import vibe.d;</span></span>
<span class="line"><span>    listenHTTP(&quot;:8080&quot;, (req, res) {</span></span>
<span class="line"><span>        res.writeBody(&quot;Hello, World: &quot; ~ req.path);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    runApplication();</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1)),a("p",null,[s[37]||(s[37]=n("它使用官方的 D 軟件包管理器 ",-1)),l(p,{href:"https://dub.pm/getting_started"},{default:i(()=>[...s[35]||(s[35]=[n("Dub",-1)])]),_:1}),s[38]||(s[38]=n("，從 ",-1)),l(p,{href:"https://code.dlang.org"},{default:i(()=>[...s[36]||(s[36]=[n("D 軟件包倉庫",-1)])]),_:1}),s[39]||(s[39]=n("中獲取 vibe.d Web 框架。Dub 負責下載 Vibe.d 包，然後在本地主機 8080 端口上編譯並啓動一個 web 服務器。",-1))]),s[67]||(s[67]=a("h3",{id:"嘗試一下-d-語言",tabindex:"-1"},[n("嘗試一下 D 語言 "),a("a",{class:"header-anchor",href:"#嘗試一下-d-語言","aria-label":"Permalink to “嘗試一下 D 語言”"},"​")],-1)),s[68]||(s[68]=a("p",null,"這些只是你可能想用 D 來寫腳本的幾個原因。",-1)),s[69]||(s[69]=a("p",null,"D 是一種非常適合開發的語言。你可以很容易從 D 下載頁面安裝，因此下載編譯器，看看例子，並親自體驗 D 語言。",-1)),s[70]||(s[70]=a("hr",null,null,-1)),a("p",null,[s[41]||(s[41]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/21/1/d-scripting"},{default:i(()=>[...s[40]||(s[40]=[n("https://opensource.com/article/21/1/d-scripting",-1)])]),_:1})]),a("p",null,[s[46]||(s[46]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/aberba"},{default:i(()=>[...s[42]||(s[42]=[n("Lawrence Aberba",-1)])]),_:1}),s[47]||(s[47]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[43]||(s[43]=[n("lujun9972",-1)])]),_:1}),s[48]||(s[48]=n(" 譯者：",-1)),l(p,{href:"https://github.com/geekpi"},{default:i(()=>[...s[44]||(s[44]=[n("geekpi",-1)])]),_:1}),s[49]||(s[49]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[45]||(s[45]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[52]||(s[52]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[50]||(s[50]=[n("LCTT",-1)])]),_:1}),s[53]||(s[53]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:i(()=>[...s[51]||(s[51]=[n("Linux中國",-1)])]),_:1}),s[54]||(s[54]=n(" 榮譽推出",-1))])])}const C=e(u,[["render",g]]);export{y as __pageData,C as default};
