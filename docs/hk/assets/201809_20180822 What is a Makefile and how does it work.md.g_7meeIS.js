import{_ as i,a0 as t,w as o,s as c,ao as d,I as p,x as a,a1 as e,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"Makefile 及其工作原理 | LCTT x X-CMD","titleTemplate":false,"description":"Makefile 及其工作原理 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Makefile 及其工作原理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Makefile 及其工作原理 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180822 What is a Makefile and how does it work","title":"Makefile 及其工作原理","tag":"201809","desc":""},"relativePath":"201809/20180822 What is a Makefile and how does it work.md","filePath":"[post].md"}'),h={name:"201809/20180822 What is a Makefile and how does it work.md"};function r(g,s,k,u,b,f){const n=t("Link");return o(),c("div",null,[s[20]||(s[20]=d(`<h1 id="makefile-及其工作原理" tabindex="-1">Makefile 及其工作原理 <a class="header-anchor" href="#makefile-及其工作原理" aria-label="Permalink to “Makefile 及其工作原理”">​</a></h1><blockquote><p>用這個方便的工具來更有效的運行和編譯你的程序。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/osdc_liberate%20docs_1109ay.png?itok=xQOLreya" alt=""></p><p>當你需要在一些源文件改變後運行或更新一個任務時，通常會用到 <code>make</code> 工具。<code>make</code> 工具需要讀取一個 <code>Makefile</code>（或 <code>makefile</code>）文件，在該文件中定義了一系列需要執行的任務。你可以使用 <code>make</code> 來將源代碼編譯為可執行程序。大部分開源項目會使用 <code>make</code> 來實現最終的二進制文件的編譯，然後使用 <code>make install</code> 命令來執行安裝。</p><p>本文將通過一些基礎和進階的示例來展示 <code>make</code> 和 <code>Makefile</code> 的使用方法。在開始前，請確保你的系統中安裝了 <code>make</code>。</p><h3 id="基礎示例" tabindex="-1">基礎示例 <a class="header-anchor" href="#基礎示例" aria-label="Permalink to “基礎示例”">​</a></h3><p>依然從打印 “Hello World” 開始。首先創建一個名字為 <code>myproject</code> 的目錄，目錄下新建 <code>Makefile</code> 文件，文件內容為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>say_hello:</span></span>
<span class="line"><span>        echo &quot;Hello World&quot;</span></span></code></pre></div><p>在 <code>myproject</code> 目錄下執行 <code>make</code>，會有如下輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>echo &quot;Hello World&quot;</span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><p>在上面的例子中，“say_hello” 類似於其他編程語言中的函數名。這被稱之為<ruby>目標<rt>target</rt></ruby>。在該目標之後的是預置條件或依賴。為了簡單起見，我們在這個示例中沒有定義預置條件。<code>echo ‘Hello World&#39;</code> 命令被稱為<ruby>步驟<rt>recipe</rt></ruby>。這些步驟基於預置條件來實現目標。目標、預置條件和步驟共同構成一個規則。</p><p>總結一下，一個典型的規則的語法為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>目標: 預置條件</span></span>
<span class="line"><span>&lt;TAB&gt; 步驟</span></span></code></pre></div><p>作為示例，目標可以是一個基於預置條件（源代碼）的二進制文件。另一方面，預置條件也可以是依賴其他預置條件的目標。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>final_target: sub_target final_target.c</span></span>
<span class="line"><span>        Recipe_to_create_final_target</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>sub_target: sub_target.c</span></span>
<span class="line"><span>        Recipe_to_create_sub_target</span></span></code></pre></div><p>目標並不要求是一個文件，也可以只是步驟的名字，就如我們的例子中一樣。我們稱之為“偽目標”。</p><p>再回到上面的示例中，當 <code>make</code> 被執行時，整條指令 <code>echo &quot;Hello World&quot;</code> 都被顯示出來，之後才是真正的執行結果。如果不希望指令本身被打印處理，需要在 <code>echo</code> 前添加 <code>@</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>say_hello:</span></span>
<span class="line"><span>        @echo &quot;Hello World&quot;</span></span></code></pre></div><p>重新運行 <code>make</code>，將會只有如下輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><p>接下來在 <code>Makefile</code> 中添加如下偽目標：<code>generate</code> 和 <code>clean</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>say_hello:</span></span>
<span class="line"><span>        @echo &quot;Hello World&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generate:</span></span>
<span class="line"><span>        @echo &quot;Creating empty text files...&quot;</span></span>
<span class="line"><span>        touch file-{1..10}.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        @echo &quot;Cleaning up...&quot;</span></span>
<span class="line"><span>        rm *.txt</span></span></code></pre></div><p>隨後當我們運行 <code>make</code> 時，只有 <code>say_hello</code> 這個目標被執行。這是因為<code>Makefile</code> 中的第一個目標為默認目標。通常情況下會調用默認目標，這就是你在大多數項目中看到 <code>all</code> 作為第一個目標而出現。<code>all</code> 負責來調用它他的目標。我們可以通過 <code>.DEFAULT_GOAL</code> 這個特殊的偽目標來覆蓋掉默認的行為。</p><p>在 <code>Makefile</code> 文件開頭增加 <code>.DEFAULT_GOAL</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.DEFAULT_GOAL := generate</span></span></code></pre></div><p><code>make</code> 會將 <code>generate</code> 作為默認目標：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>Creating empty text files...</span></span>
<span class="line"><span>touch file-{1..10}.txt</span></span></code></pre></div><p>顧名思義，<code>.DEFAULT_GOAL</code> 偽目標僅能定義一個目標。這就是為什麼很多 <code>Makefile</code> 會包括 <code>all</code> 這個目標，這樣可以調用多個目標。</p><p>下面刪除掉 <code>.DEFAULT_GOAL</code>，增加 <code>all</code> 目標：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>all: say_hello generate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>say_hello:</span></span>
<span class="line"><span>        @echo &quot;Hello World&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generate:</span></span>
<span class="line"><span>        @echo &quot;Creating empty text files...&quot;</span></span>
<span class="line"><span>        touch file-{1..10}.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        @echo &quot;Cleaning up...&quot;</span></span>
<span class="line"><span>        rm *.txt</span></span></code></pre></div><p>運行之前，我們再增加一些特殊的偽目標。<code>.PHONY</code> 用來定義這些不是文件的目標。<code>make</code> 會默認調用這些偽目標下的步驟，而不去檢查文件名是否存在或最後修改日期。完整的 <code>Makefile</code> 如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.PHONY: all say_hello generate clean</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: say_hello generate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>say_hello:</span></span>
<span class="line"><span>        @echo &quot;Hello World&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generate:</span></span>
<span class="line"><span>        @echo &quot;Creating empty text files...&quot;</span></span>
<span class="line"><span>        touch file-{1..10}.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        @echo &quot;Cleaning up...&quot;</span></span>
<span class="line"><span>        rm *.txt</span></span></code></pre></div><p><code>make</code> 命令會調用 <code>say_hello</code> 和 <code>generate</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>Hello World</span></span>
<span class="line"><span>Creating empty text files...</span></span>
<span class="line"><span>touch file-{1..10}.txt</span></span></code></pre></div><p><code>clean</code> 不應該被放入 <code>all</code> 中，或者被放入第一個目標中。<code>clean</code> 應當在需要清理時手動調用，調用方法為 <code>make clean</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make clean</span></span>
<span class="line"><span>Cleaning up...</span></span>
<span class="line"><span>rm *.txt</span></span></code></pre></div><p>現在你應該已經對 <code>Makefile</code> 有了基礎的瞭解，接下來我們看一些進階的示例。</p><h3 id="進階示例" tabindex="-1">進階示例 <a class="header-anchor" href="#進階示例" aria-label="Permalink to “進階示例”">​</a></h3><h4 id="變量" tabindex="-1">變量 <a class="header-anchor" href="#變量" aria-label="Permalink to “變量”">​</a></h4><p>在之前的實例中，大部分目標和預置條件是已經固定了的，但在實際項目中，它們通常用變量和模式來代替。</p><p>定義變量最簡單的方式是使用 <code>=</code> 操作符。例如，將命令 <code>gcc</code> 賦值給變量 <code>CC</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CC = gcc</span></span></code></pre></div><p>這被稱為遞歸擴展變量，用於如下所示的規則中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>hello: hello.c</span></span>
<span class="line"><span>    \${CC} hello.c -o hello</span></span></code></pre></div><p>你可能已經想到了，這些步驟將會在傳遞給終端時展開為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gcc hello.c -o hello</span></span></code></pre></div><p><code>\${CC}</code> 和 <code>$(CC)</code> 都能對 <code>gcc</code> 進行引用。但如果一個變量嘗試將它本身賦值給自己，將會造成死循環。讓我們驗證一下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CC = gcc</span></span>
<span class="line"><span>CC = \${CC}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all:</span></span>
<span class="line"><span>    @echo \${CC}</span></span></code></pre></div><p>此時運行 <code>make</code> 會導致：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>Makefile:8: *** Recursive variable &#39;CC&#39; references itself (eventually).  Stop.</span></span></code></pre></div><p>為了避免這種情況發生，可以使用 <code>:=</code> 操作符（這被稱為簡單擴展變量）。以下代碼不會造成上述問題：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CC := gcc</span></span>
<span class="line"><span>CC := \${CC}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all:</span></span>
<span class="line"><span>    @echo \${CC}</span></span></code></pre></div><h4 id="模式和函數" tabindex="-1">模式和函數 <a class="header-anchor" href="#模式和函數" aria-label="Permalink to “模式和函數”">​</a></h4><p>下面的 <code>Makefile</code> 使用了變量、模式和函數來實現所有 C 代碼的編譯。我們來逐行分析下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Usage:</span></span>
<span class="line"><span># make        # compile all binary</span></span>
<span class="line"><span># make clean  # remove ALL binaries and objects</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.PHONY = all clean</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CC = gcc                        # compiler to use</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LINKERFLAG = -lm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SRCS := $(wildcard *.c)</span></span>
<span class="line"><span>BINS := $(SRCS:%.c=%)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: \${BINS}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%: %.o</span></span>
<span class="line"><span>        @echo &quot;Checking..&quot;</span></span>
<span class="line"><span>        \${CC} \${LINKERFLAG} $&lt; -o $@</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%.o: %.c</span></span>
<span class="line"><span>        @echo &quot;Creating object..&quot;</span></span>
<span class="line"><span>        \${CC} -c $&lt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        @echo &quot;Cleaning up...&quot;</span></span>
<span class="line"><span>        rm -rvf *.o \${BINS}</span></span></code></pre></div><ul><li><p>以 <code>#</code> 開頭的行是評論。</p></li><li><p><code>.PHONY = all clean</code> 行定義了 <code>all</code> 和 <code>clean</code> 兩個偽目標。</p></li><li><p>變量 <code>LINKERFLAG</code> 定義了在步驟中 <code>gcc</code> 命令需要用到的參數。</p></li><li><p><code>SRCS := $(wildcard *.c)</code>：<code>$(wildcard pattern)</code> 是與文件名相關的一個函數。在本示例中，所有 “.c”後綴的文件會被存入 <code>SRCS</code> 變量。</p></li><li><p><code>BINS := $(SRCS:%.c=%)</code>：這被稱為替代引用。本例中，如果 <code>SRCS</code> 的值為 <code>&#39;foo.c bar.c&#39;</code>，則 <code>BINS</code>的值為 <code>&#39;foo bar&#39;</code>。</p></li><li><p><code>all: \${BINS}</code> 行：偽目標 <code>all</code> 調用 <code>\${BINS}</code> 變量中的所有值作為子目標。</p></li><li><p>規則：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span></code></pre></div></li></ul><p>%: %.o   @echo &quot;Checking..&quot;   \${CC} \${LINKERFLAG} $&lt; -o $@</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>    下面通過一個示例來理解這條規則。假定 \`foo\` 是變量 \`\${BINS}\` 中的一個值。\`%\` 會匹配到 \`foo\`（\`%\`匹配任意一個目標）。下面是規則展開後的內容：</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span>foo: foo.o</span></span>
<span class="line"><span>   @echo &quot;Checking..&quot;</span></span>
<span class="line"><span>   gcc -lm foo.o -o foo</span></span></code></pre></div><pre><code>如上所示，\`%\` 被 \`foo\` 替換掉了。\`$&lt;\` 被 \`foo.o\` 替換掉。\`$&lt;\`用於匹配預置條件，\`$@\` 匹配目標。對 \`\${BINS}\` 中的每個值，這條規則都會被調用一遍。
</code></pre><ul><li><p>規則：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span></code></pre></div></li></ul><p>%.o: %.c   @echo &quot;Creating object..&quot;   \${CC} -c $&lt;</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>    之前規則中的每個預置條件在這條規則中都會都被作為一個目標。下面是展開後的內容：</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span>foo.o: foo.c</span></span>
<span class="line"><span>  @echo &quot;Creating object..&quot;</span></span>
<span class="line"><span>  gcc -c foo.c</span></span></code></pre></div><ul><li>最後，在 <code>clean</code> 目標中，所有的二進制文件和編譯文件將被刪除。</li></ul><p>下面是重寫後的 <code>Makefile</code>，該文件應該被放置在一個有 <code>foo.c</code> 文件的目錄下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Usage:</span></span>
<span class="line"><span># make        # compile all binary</span></span>
<span class="line"><span># make clean  # remove ALL binaries and objects</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.PHONY = all clean</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CC = gcc                        # compiler to use</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LINKERFLAG = -lm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SRCS := foo.c</span></span>
<span class="line"><span>BINS := foo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: foo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo: foo.o</span></span>
<span class="line"><span>        @echo &quot;Checking..&quot;</span></span>
<span class="line"><span>        gcc -lm foo.o -o foo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo.o: foo.c</span></span>
<span class="line"><span>        @echo &quot;Creating object..&quot;</span></span>
<span class="line"><span>        gcc -c foo.c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        @echo &quot;Cleaning up...&quot;</span></span>
<span class="line"><span>        rm -rvf foo.o foo</span></span></code></pre></div>`,65)),p("p",null,[s[1]||(s[1]=a("關於 ",-1)),s[2]||(s[2]=p("code",null,"Makefile",-1)),s[3]||(s[3]=a(" 的更多信息，",-1)),e(n,{href:"https://www.gnu.org/software/make/manual/make.pdf"},{default:l(()=>[...s[0]||(s[0]=[a("GNU Make 手冊",-1)])]),_:1}),s[4]||(s[4]=a("提供了更完整的説明和實例。",-1))]),s[21]||(s[21]=p("hr",null,null,-1)),p("p",null,[s[6]||(s[6]=a("via: ",-1)),e(n,{href:"https://opensource.com/article/18/8/what-how-makefile"},{default:l(()=>[...s[5]||(s[5]=[a("https://opensource.com/article/18/8/what-how-makefile",-1)])]),_:1})]),p("p",null,[s[11]||(s[11]=a("作者：",-1)),e(n,{href:"https://opensource.com/users/psachin"},{default:l(()=>[...s[7]||(s[7]=[a("Sachin Patil",-1)])]),_:1}),s[12]||(s[12]=a(" 選題：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[8]||(s[8]=[a("lujun9972",-1)])]),_:1}),s[13]||(s[13]=a(" 譯者：",-1)),e(n,{href:"https://github.com/zafiry"},{default:l(()=>[...s[9]||(s[9]=[a("Zafiry",-1)])]),_:1}),s[14]||(s[14]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:l(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[17]||(s[17]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[15]||(s[15]=[a("LCTT",-1)])]),_:1}),s[18]||(s[18]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:l(()=>[...s[16]||(s[16]=[a("Linux中國",-1)])]),_:1}),s[19]||(s[19]=a(" 榮譽推出",-1))])])}const v=i(h,[["render",r]]);export{y as __pageData,v as default};
