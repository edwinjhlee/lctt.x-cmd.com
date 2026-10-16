import{_ as t,a0 as o,w as c,s as d,ao as p,I as l,x as e,a1 as a,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"Bash Shell 腳本新手指南（三） | LCTT x X-CMD","titleTemplate":false,"description":"Bash Shell 腳本新手指南（三） | LCTT (202202) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Bash Shell 腳本新手指南（三） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Bash Shell 腳本新手指南（三） | LCTT (202202) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202202/20211206 Bash Shell Scripting for beginners (Part 3)","title":"Bash Shell 腳本新手指南（三）","tag":"202202","desc":""},"relativePath":"202202/20211206 Bash Shell Scripting for beginners (Part 3).md","filePath":"[post].md"}'),h={name:"202202/20211206 Bash Shell Scripting for beginners (Part 3).md"};function r(u,s,g,b,f,m){const n=o("Link");return c(),d("div",null,[s[18]||(s[18]=p(`<h1 id="bash-shell-腳本新手指南-三" tabindex="-1">Bash Shell 腳本新手指南（三） <a class="header-anchor" href="#bash-shell-腳本新手指南-三" aria-label="Permalink to “Bash Shell 腳本新手指南（三）”">​</a></h1><p><img src="https://fedoramagazine.org/wp-content/uploads/2021/11/bash_shell_scripting_pt3-816x345.jpg" alt=""></p><p>歡迎來到面向初學者的 Bash Shell 腳本知識第三部分。這最後一篇文章將再來學習一些知識點，這些將使你為持續的個人發展做好準備。它將涉及到函數、用 <code>if</code>/<code>elif</code> 語句進行比較，並以研究 <code>while</code> 循環作為結尾。</p><h3 id="函數" tabindex="-1">函數 <a class="header-anchor" href="#函數" aria-label="Permalink to “函數”">​</a></h3><p>讓我們從一個看似困難但其實很簡單的基本概念開始，即函數。把它看作是一種簡單的方法，可以把腳本中被反覆使用的部分放到一個可重複使用的組中。你在本系列第一篇或第二篇文章中所做的任何事情都可以放在一個函數中。因此，讓我們把一個函數放到我們的 <code>learnToScript.sh</code> 文件中。讓我指出幾個關鍵點。你將需要為你的函數起一個名字、一對小括號，以及用大括號包圍放在你的函數中的命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#A function to return an echo statement.</span></span>
<span class="line"><span>helloFunc() {</span></span>
<span class="line"><span>        echo &quot;Hello from a function.&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#invoke the first function helloFunc()</span></span>
<span class="line"><span>helloFunc</span></span></code></pre></div><p>你會看到如下輸出結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[zexcon@fedora ~]$ ./learnToScript.sh</span></span>
<span class="line"><span>Hello from a function.</span></span>
<span class="line"><span>[zexcon@fedora ~]$</span></span></code></pre></div><p>函數是重複使用一組命令的好方法，但如果你能使它們在每次使用時對不同的數據進行操作，它們會更加有用。這就要求你在每次調用函數時提供數據，這稱為參數。</p><p>要提供參數，你只需在調用函數時把它們加在函數名稱後面。為了使用你提供的數據，你在函數命令中使用位置來引用它們。它們將被命名為 <code>$1</code>、<code>$2</code>、<code>$3</code>，以此類推，這取決於你的函數將需要多少個參數。</p><p>讓我們修改上一個例子來幫助更好地理解這個問題。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#A function to return an echo statement.</span></span>
<span class="line"><span>helloFunc() {</span></span>
<span class="line"><span>        echo &quot;Hello from a function.&quot;</span></span>
<span class="line"><span>        echo $1</span></span>
<span class="line"><span>        echo $2</span></span>
<span class="line"><span>        echo &quot;You gave me $# arguments&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#invoke the function helloFunc()</span></span>
<span class="line"><span>helloFunc &quot;How is the weather?&quot; Fine</span></span></code></pre></div><p>輸出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hello from a function.</span></span>
<span class="line"><span>How is the weather?</span></span>
<span class="line"><span>Fine</span></span>
<span class="line"><span>You gave me 2 arguments</span></span></code></pre></div><p>輸出中發生的事情是 <code>helloFunc()</code> 在每一行都做了一個回顯。首先它回顯了一個 <code>Hello from a function</code>，然後它繼續回顯變量 <code>$1</code> 的值，結果是你傳遞給 <code>helloFunc</code> 的 <code>&quot;How is the weather?&quot;</code>。然後它將繼續處理變量 <code>$2</code>，並回顯其值，這是你傳遞的第二個項目：<code>Fine</code>。該函數將以回顯 <code>You gave me $# arguments</code> 結束。注意，第一個參數是一個用雙引號括起來的單個字符串 <code>&quot;How is the weather?&quot;</code>。第二個參數 <code>Fine</code> 沒有空格，所以不需要引號。</p><p>除了使用 <code>$1</code>、<code>$2</code> 等之外，你還可以通過使用變量 <code>$#</code> 來確定傳遞給函數的參數數量。這意味着你可以創建一個接受可變參數數量的函數。</p>`,16)),l("p",null,[s[1]||(s[1]=e("關於 bash 函數的更多細節，網上有很多好的參考資料。",-1)),a(n,{href:"https://opensource.com/article/20/6/bash-functions"},{default:i(()=>[...s[0]||(s[0]=[e("這裏有一個可以讓你入門的資料",-1)])]),_:1}),s[2]||(s[2]=e("。",-1))]),s[19]||(s[19]=p(`<p>我希望你能瞭解到函數如何在你的 bash 腳本中提供巨大的靈活性。</p><h3 id="數值比較" tabindex="-1">數值比較 [] <a class="header-anchor" href="#數值比較" aria-label="Permalink to “數值比較 []”">​</a></h3><p>如果你想進行數字比較，你需要在方括號 <code>[]</code> 中使用以下運算符之一：</p><ul><li><code>-eq</code> （等於）</li><li><code>-ge</code> （等於或大於）</li><li><code>-gt</code> （大於）</li><li><code>-le</code> （小於或等於）</li><li><code>-lt</code> （小於）</li><li><code>-ne</code> （不相等）</li></ul><p>因此，舉例來説，如果你想看 12 是否等於或小於 25，可以像 <code>[ 12 -le 25 ]</code> 這樣。當然，12 和 25 可以是變量。例如，<code>[ $twelve -le $twentyfive ]</code>。（LCTT 譯註：注意保留方括號和判斷語句間的空格）</p><h3 id="if-和-elif-語句" tabindex="-1">if 和 elif 語句 <a class="header-anchor" href="#if-和-elif-語句" aria-label="Permalink to “if 和 elif 語句”">​</a></h3><p>那麼讓我們用數字比較來介紹 <code>if</code> 語句。Bash 中的 <code>if</code> 語句將以 <code>if</code> 開始, 以 <code>fi</code> 結束。<code>if</code> 語句 以 <code>if</code> 開始，然後是你想做的檢查。在本例中，檢查的內容是變量 <code>numberOne</code> 是否等於 <code>1</code>。如果 <code>numberOne</code> 等於 <code>1</code>，將執行 <code>then</code> 語句，否則將執行 <code>else</code> 語句。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>numberTwelve=12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $numberTwelve -eq 12 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>        echo &quot;numberTwelve is equal to 12&quot;</span></span>
<span class="line"><span>elif [ $numberTwelve -gt 12 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>        echo &quot;numberTwelve variable is greater than 12&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>        echo &quot;neither of the statemens matched&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>輸出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[zexcon@fedora ~]$ ./learnToScript.sh</span></span>
<span class="line"><span>numberTwelve variable is equal to 12</span></span></code></pre></div><p>你所看到的是 <code>if</code> 語句的第一行，它在檢查變量的值是否真的等於 <code>12</code>。如果是的話，語句就會停止，併發出 <code>numberTwelve is equal to 12</code> 的回顯，然後在 <code>fi</code> 之後繼續執行你的腳本。如果變量大於 <code>12</code> 的話，就會執行 <code>elif</code> 語句，並在 <code>fi</code> 之後繼續執行。當你使用 <code>if</code> 或 <code>if</code>/<code>elif</code> 語句時，它是自上而下工作的。當第一條語句是匹配的時候，它會停止並執行該命令，並在 <code>fi</code> 之後繼續執行。</p><h3 id="字符串比較" tabindex="-1">字符串比較 [[]] <a class="header-anchor" href="#字符串比較" aria-label="Permalink to “字符串比較 [[]]”">​</a></h3><p>這就是數字比較。那麼字符串的比較呢？使用雙方括號 <code>[[]]</code> 和以下運算符等於或不等於。（LCTT 譯註：注意保留方括號和判斷語句間的空格）</p><ul><li><code>=</code> （相等）</li><li><code>!=</code> （不相等）</li></ul><p>請記住，字符串還有一些其他的比較方法，我們這裏不會討論，但可以深入瞭解一下它們以及它們是如何工作的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#variable with a string</span></span>
<span class="line"><span>stringItem=&quot;Hello&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#This will match since it is looking for an exact match with $stringItem</span></span>
<span class="line"><span>if [[ $stringItem = &quot;Hello&quot; ]]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>        echo &quot;The string is an exact match.&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>        echo &quot;The strings do not match exactly.&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#This will utilize the then statement since it is not looking for a case sensitive match</span></span>
<span class="line"><span>if [[ $stringItem = &quot;hello&quot; ]]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>        echo &quot;The string does match but is not case sensitive.&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>        echo &quot;The string does not match because of the capitalized H.&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>你將得到以下三行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[zexcon@fedora ~]$ ./learnToScript.sh</span></span>
<span class="line"><span>The string is an exact match.</span></span>
<span class="line"><span>The string does not match because of the capitalized H.</span></span>
<span class="line"><span>[zexcon@fedora ~]$</span></span></code></pre></div><h3 id="while-循環" tabindex="-1">while 循環 <a class="header-anchor" href="#while-循環" aria-label="Permalink to “while 循環”">​</a></h3><p>在結束這個系列之前，讓我們看一下循環。一個關於 <code>while</code> 循環的例子是：“當 1個數值 小於 10 時，在數值上加 1”，你繼續這樣做直到該判斷語句不再為真。下面你將看到變量 <code>number</code> 設置為 <code>1</code>。在下一行，我們有一個 <code>while</code> 語句，它檢查 <code>number</code> 是否小於或等於 <code>10</code>。在 <code>do</code> 和 <code>done</code> 之間包含的命令被執行，因為 <code>while</code> 的比較結果為真。所以我們回顯一些文本，並在 <code>number</code> 的值上加 <code>1</code>。我們繼續執行，直到 <code>while</code> 語句不再為真，它脱離了循環，並回顯 <code>We have completed the while loop since $number is greater than 10.</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>number=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ $number -le 10 ]</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>        echo &quot;We checked the current number is $number so we will increment once&quot;</span></span>
<span class="line"><span>        ((number=number+1))</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>        echo &quot;We have completed the while loop since $number is greater than 10.&quot;</span></span></code></pre></div><p><code>while</code> 循環的結果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[zexcon@fedora ~]$ ./learnToScript.sh</span></span>
<span class="line"><span>We checked the current number is 1 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 2 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 3 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 4 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 5 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 6 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 7 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 8 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 9 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 10 so we will increment once</span></span>
<span class="line"><span>We have completed the while loop since 11 is greater than 10.</span></span>
<span class="line"><span>[zexcon@fedora ~]$</span></span></code></pre></div><p>正如你所看到的，實現這一目的所需的腳本量要比用 <code>if</code> 語句不斷檢查每個數字少得多。這就是循環的偉大之處，而 <code>while</code> 循環只是眾多方式之一，它以不同的方式來滿足你的個人需要。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>下一步是什麼？正如文章所指出的，這是，面向 Bash Shell 腳本初學者的。希望我激發了你對腳本的興趣或終生的熱愛。我建議你去看看其他人的腳本，瞭解你不知道或不理解的地方。請記住，由於本系列每篇文章都介紹了數學運算、比較字符串、輸出和歸納數據的多種方法，它們也可以用函數、循環或許多其他方法來完成。如果你練習所討論的基礎知識，你將會很開心地把它們與你還要學習的所有其他知識結合起來。試試吧，讓我們在 Fedora Linux 世界裏見。</p><hr>`,27)),l("p",null,[s[4]||(s[4]=e("via: ",-1)),a(n,{href:"https://fedoramagazine.org/bash-shell-scripting-for-beginners-part-3"},{default:i(()=>[...s[3]||(s[3]=[e("https://fedoramagazine.org/bash-shell-scripting-for-beginners-part-3",-1)])]),_:1})]),l("p",null,[s[9]||(s[9]=e("作者：",-1)),a(n,{href:"https://fedoramagazine.org/author/zexcon/"},{default:i(()=>[...s[5]||(s[5]=[e("Matthew Darnell",-1)])]),_:1}),s[10]||(s[10]=e(" 選題：",-1)),a(n,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[6]||(s[6]=[e("lujun9972",-1)])]),_:1}),s[11]||(s[11]=e(" 譯者：",-1)),a(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[7]||(s[7]=[e("wxy",-1)])]),_:1}),s[12]||(s[12]=e(" 校對：",-1)),a(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[8]||(s[8]=[e("wxy",-1)])]),_:1})]),l("p",null,[s[15]||(s[15]=e("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[13]||(s[13]=[e("LCTT",-1)])]),_:1}),s[16]||(s[16]=e(" 原創編譯，",-1)),a(n,{href:"https://linux.cn/"},{default:i(()=>[...s[14]||(s[14]=[e("Linux中國",-1)])]),_:1}),s[17]||(s[17]=e(" 榮譽推出",-1))])])}const v=t(h,[["render",r]]);export{T as __pageData,v as default};
