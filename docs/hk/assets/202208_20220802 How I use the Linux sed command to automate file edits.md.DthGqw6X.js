import{_ as i,a0 as t,w as d,s as o,ao as c,I as l,x as a,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"如何使用 Linux sed 命令自動進行文件編輯 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Linux sed 命令自動進行文件編輯 | LCTT (202208) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Linux sed 命令自動進行文件編輯 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Linux sed 命令自動進行文件編輯 | LCTT (202208) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202208/20220802 How I use the Linux sed command to automate file edits","title":"如何使用 Linux sed 命令自動進行文件編輯","tag":"202208","desc":""},"relativePath":"202208/20220802 How I use the Linux sed command to automate file edits.md","filePath":"[post].md"}'),g={name:"202208/20220802 How I use the Linux sed command to automate file edits.md"};function r(u,s,f,h,k,m){const n=t("Link");return d(),o("div",null,[s[15]||(s[15]=c(`<h1 id="如何使用-linux-sed-命令自動進行文件編輯" tabindex="-1">如何使用 Linux sed 命令自動進行文件編輯 <a class="header-anchor" href="#如何使用-linux-sed-命令自動進行文件編輯" aria-label="Permalink to “如何使用 Linux sed 命令自動進行文件編輯”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202208/17/120535by5jfu5dovfesd56.jpg" alt=""></p><blockquote><p>以下是從 Linux 命令列自動編輯文件的一些提示和技巧。</p></blockquote><p>當我使用 Linux 命令列時，無論是在台式機上編寫新程序還是在 Web 服務器上管理網站，我經常需要處理文本文件。Linux 提供了強大的工具，我可以利用這些工具來完成我的工作。我經常使用 <code>sed</code>，一個可以根據模式修改文本的編輯器。</p><p><code>sed</code> 代表 <ruby>流編輯器<rt>Stream EDitor</rt></ruby>，它編輯文件中的文本並打印結果。使用 <code>sed</code> 的一種方法是識別一個字符串在文件中的幾次出現，並將它們替換為不同的字符串。使用 <code>sed</code> 來處理文本文件的方式似乎是無窮無盡的，但我想分享一些使用 <code>sed</code> 來幫助我管理文件的方法。</p><h3 id="在-linux-上搜索和替換文件中的文本" tabindex="-1">在 Linux 上搜索和替換文件中的文本 <a class="header-anchor" href="#在-linux-上搜索和替換文件中的文本" aria-label="Permalink to “在 Linux 上搜索和替換文件中的文本”">​</a></h3><p>要使用 <code>sed</code>，你需要使用一個<em>正則表達式</em>。正則表達式是定義模式的一組特殊字符。我最常使用 <code>sed</code> 的例子是替換文件中的文本。替換文本的語法如下：<code>s/originaltext/newtext</code>。<code>s</code> 告訴 <code>sed</code> 執行文本替換或交換出現的文本。在斜線之間提供原始文本和新文本。</p><p>此語法將僅替換每行中第一次出現的 <code>originaltext</code>。要替換每個匹配項，即使在一行中原始文本出現了不止一次，要將 <code>g</code> 追加到表達式的末尾。例如：<code>s/originaltext/newtext/g</code>。</p><p>要在 <code>sed</code> 中使用此表達式，請使用 <code>-e</code> 選項指定此正則表達式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -e &#39;s/originaltext/newtext/g&#39;</span></span></code></pre></div><p>例如，假設我有一個名為 <code>game</code> 程序的 Makefile 文件，該程序模擬了康威的《生命遊戲》：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.PHONY: all run clean</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: game</span></span>
<span class="line"><span></span></span>
<span class="line"><span>game: game.o</span></span>
<span class="line"><span>        $(CC) $(CFLAGS) -o game game.o $(LDFLAGS)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run: game</span></span>
<span class="line"><span>        ./game</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        $(RM) *~</span></span>
<span class="line"><span>        $(RM) *.o</span></span>
<span class="line"><span>        $(RM) game</span></span></code></pre></div><p><code>game</code> 這個名字並不是很有描述性，所以我想會把它改名為 <code>life</code>。將 <code>game.c</code> 源文件重命名為 <code>life.c</code> 非常簡單，但現在我需要修改 Makefile 以使用新名稱。我可以使用 <code>sed</code> 來將所有的 <code>game</code> 更改為 <code>life</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -e &#39;s/game/life/g&#39; Makefile</span></span>
<span class="line"><span>.PHONY: all run clean</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: life</span></span>
<span class="line"><span></span></span>
<span class="line"><span>life: life.o</span></span>
<span class="line"><span>        $(CC) $(CFLAGS) -o life life.o $(LDFLAGS)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run: life</span></span>
<span class="line"><span>        ./life</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        $(RM) *~</span></span>
<span class="line"><span>        $(RM) *.o</span></span>
<span class="line"><span>        $(RM) life</span></span></code></pre></div><p><code>sed</code> 會將輸出打印到屏幕上，這是檢查文本替換是否符合你要求的好方法。要對 Makefile 進行這些更改，首先，備份文件，然後運行 <code>sed</code> 並將輸出保存到原始文件名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cp Makefile Makefile.old</span></span>
<span class="line"><span>$ sed -e &#39;s/game/life/g&#39; Makefile.old &gt; Makefile</span></span></code></pre></div><p>如果你確信你的更改正是你想要的，請使用 <code>-i</code> 或 <code>--in-place</code> 選項來編輯文件。但是，我建議添加一個備份文件後綴，如 <code>--in-place=.old</code>，用來備份原始文件，以備日後需要恢復時使用。它看起來像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed --in-place=.old -e &#39;s/game/life/g&#39; Makefile</span></span>
<span class="line"><span>$ ls Makefile*</span></span>
<span class="line"><span>Makefile  Makefile.old</span></span></code></pre></div><h3 id="在-linux-上使用-sed-引用文件" tabindex="-1">在 Linux 上使用 sed 引用文件 <a class="header-anchor" href="#在-linux-上使用-sed-引用文件" aria-label="Permalink to “在 Linux 上使用 sed 引用文件”">​</a></h3><p>你可以使用正則表達式的其它功能來匹配特定的文本實例。例如，你可能需要替換出現在行首的文本。使用 <code>sed</code>，你可以用上尖號 <code>^</code> 來匹配行的開頭。</p><p>我使用“行首”來替換文本的一種方式是當我需要在電子郵件中引用一個文件時。假設我想在電子郵件中共享我的 Makefile，但我不想將其作為文件附件包含在內。相反，我更喜歡在電子郵件正文中“引用”文件，在每行之前使用 <code>&gt;</code>。我可以使用以下 <code>sed</code> 命令將編輯後的版本打印到我的終端，並將其複製粘貼到新的電子郵件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -e &#39;s/^/&gt;/&#39; Makefile</span></span>
<span class="line"><span>&gt;.PHONY: all run clean</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;all: life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;life: life.o</span></span>
<span class="line"><span>&gt;       $(CC) $(CFLAGS) -o life life.o $(LDFLAGS)</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;run: life</span></span>
<span class="line"><span>&gt;       ./life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;clean:</span></span>
<span class="line"><span>&gt;       $(RM) *~</span></span>
<span class="line"><span>&gt;       $(RM) *.o</span></span>
<span class="line"><span>&gt;       $(RM) life</span></span></code></pre></div><p><code>s/^/&gt;/</code> 正則表達式匹配每行的開頭（<code>^</code>），並在那裏放置一個 <code>&gt;</code>。實際上，這相當於每行都以 <code>&gt;</code> 符號開始。</p><p>製表符可能無法在電子郵件中正確顯示，但我可以通過添加另一個正則表達式將 Makefile 中的所有制表符替換為幾個空格：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -e &#39;s/^/&gt;/&#39; -e &#39;s/\\t/  /g&#39; Makefile</span></span>
<span class="line"><span>&gt;.PHONY: all run clean</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;all: life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;life: life.o</span></span>
<span class="line"><span>&gt;  $(CC) $(CFLAGS) -o life life.o $(LDFLAGS)</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;run: life</span></span>
<span class="line"><span>&gt;  ./life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;clean:</span></span>
<span class="line"><span>&gt;  $(RM) *~</span></span>
<span class="line"><span>&gt;  $(RM) *.o</span></span>
<span class="line"><span>&gt;  $(RM) life</span></span></code></pre></div><p><code>\\t</code> 表示文字製表符，因此 <code>s/\\t/ /g</code> 告訴 <code>sed</code> 用輸出中的兩個空格替換輸入中的所有制表符。</p><p>如果你需要對文件進行大量編輯，你可以將 <code>-e</code> 命令保存在文件中，並使用 <code>-f</code> 選項來告訴 <code>sed</code> 將該文件用作“腳本”。如果你需要經常進行相同的編輯，這種方法特別有用。我已經準備了 <code>quotemail.sed</code> 的腳本文件來在我的電子郵件中引用 Makefile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat quotemail.sed</span></span>
<span class="line"><span>s/^/&gt;/</span></span>
<span class="line"><span>s/\\t/  /g</span></span>
<span class="line"><span>$ sed -f quotemail.sed Makefile</span></span>
<span class="line"><span>&gt;.PHONY: all run clean</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;all: life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;life: life.o</span></span>
<span class="line"><span>&gt;  $(CC) $(CFLAGS) -o life life.o $(LDFLAGS)</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;run: life</span></span>
<span class="line"><span>&gt;  ./life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;clean:</span></span>
<span class="line"><span>&gt;  $(RM) *~</span></span>
<span class="line"><span>&gt;  $(RM) *.o</span></span>
<span class="line"><span>&gt;  $(RM) life</span></span></code></pre></div><h3 id="學習在-linux-上使用-sed" tabindex="-1">學習在 Linux 上使用 sed <a class="header-anchor" href="#學習在-linux-上使用-sed" aria-label="Permalink to “學習在 Linux 上使用 sed”">​</a></h3><p><code>sed</code> 是一個很好的工具，可以保存在你的 Linux 命令列工具包中。瀏覽 <code>sed</code> 手冊頁並瞭解有關如何使用它的更多信息。在命令列中鍵入 <code>man sed</code> 以獲取有關不同命令列選項的完整文檔，以及如何使用 <code>sed</code> 處理文本文件。</p><hr>`,31)),l("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://opensource.com/article/22/8/automate-file-edits-sed-linux"},{default:p(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/22/8/automate-file-edits-sed-linux",-1)])]),_:1})]),l("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://opensource.com/users/jim-hall"},{default:p(()=>[...s[2]||(s[2]=[a("Jim Hall",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),e(n,{href:"https://github.com/lkxed"},{default:p(()=>[...s[3]||(s[3]=[a("lkxed",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),e(n,{href:"https://github.com/perfiffer"},{default:p(()=>[...s[4]||(s[4]=[a("perfiffer",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const L=i(g,[["render",r]]);export{C as __pageData,L as default};
