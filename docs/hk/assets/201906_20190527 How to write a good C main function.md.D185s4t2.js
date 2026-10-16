import{_ as t,a0 as o,w as d,s as c,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"如何寫好 C main 函數 | LCTT x X-CMD","titleTemplate":false,"description":"如何寫好 C main 函數 | LCTT (201906) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何寫好 C main 函數 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何寫好 C main 函數 | LCTT (201906) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201906/20190527 How to write a good C main function","title":"如何寫好 C main 函數","tag":"201906","desc":""},"relativePath":"201906/20190527 How to write a good C main function.md","filePath":"[post].md"}'),r={name:"201906/20190527 How to write a good C main function.md"};function u(g,s,h,b,f,k){const p=o("Link");return d(),c("div",null,[s[39]||(s[39]=a("h1",{id:"如何寫好-c-main-函數",tabindex:"-1"},[n("如何寫好 C main 函數 "),a("a",{class:"header-anchor",href:"#如何寫好-c-main-函數","aria-label":"Permalink to “如何寫好 C main 函數”"},"​")],-1)),s[40]||(s[40]=a("blockquote",null,[a("p",null,"學習如何構造一個 C 文件並編寫一個 C main 函數來成功地處理命令列參數。")],-1)),s[41]||(s[41]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201906/08/211422umrzznnvmapcwuc3.jpg",alt:'Hand drawing out the word "code"'})],-1)),a("p",null,[s[1]||(s[1]=n("我知道，現在孩子們用 Python 和 JavaScript 編寫他們的瘋狂“應用程序”。但是不要這麼快就否定 C 語言 —— 它能夠提供很多東西，並且簡潔。如果你需要速度，用 C 語言編寫可能就是你的答案。如果你正在尋找穩定的職業或者想學習如何捕獲",-1)),e(p,{href:"https://www.owasp.org/index.php/Null_Dereference"},{default:i(()=>[...s[0]||(s[0]=[n("空指針解引用",-1)])]),_:1}),s[2]||(s[2]=n("，C 語言也可能是你的答案！在本文中，我將解釋如何構造一個 C 文件並編寫一個 C main 函數來成功地處理命令列參數。",-1))]),s[42]||(s[42]=l(`<p>我：一個頑固的 Unix 系統程序員。</p><p>你：一個有編輯器、C 編譯器，並有時間打發的人。</p><p>讓我們開工吧。</p><h3 id="一個無聊但正確的-c-程序" tabindex="-1">一個無聊但正確的 C 程序 <a class="header-anchor" href="#一個無聊但正確的-c-程序" aria-label="Permalink to “一個無聊但正確的 C 程序”">​</a></h3><p><img src="https://opensource.com/sites/default/files/uploads/hatingotherpeoplescode-big.png" alt="Parody O&#39;Reilly book cover, &quot;Hating Other People&#39;s Code&quot;" title="Parody O&#39;Reilly book cover, &quot;Hating Other People&#39;s Code&quot;"></p><p>C 程序以 <code>main()</code> 函數開頭，通常保存在名為 <code>main.c</code> 的文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>int main(int argc, char *argv[]) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個程序可以<em>編譯</em>但不<em>幹</em>任何事。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc main.c</span></span>
<span class="line"><span>$ ./a.out -o foo -vv</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>正確但無聊。</p><h3 id="main-函數是唯一的。" tabindex="-1">main 函數是唯一的。 <a class="header-anchor" href="#main-函數是唯一的。" aria-label="Permalink to “main 函數是唯一的。”">​</a></h3><p><code>main()</code> 函數是開始執行時所執行的程序的第一個函數，但不是第一個執行的函數。<em>第一個</em>函數是 <code>_start()</code>，它通常由 C 運行庫提供，在編譯程序時自動鏈入。此細節高度依賴於操作系統和編譯器工具鏈，所以我假裝沒有提到它。</p><p><code>main()</code> 函數有兩個參數，通常稱為 <code>argc</code> 和 <code>argv</code>，並返回一個有符號整數。大多數 Unix 環境都希望程序在成功時返回 <code>0</code>（零），失敗時返回 <code>-1</code>（負一）。</p><div class="table-wrap"><table><thead><tr><th>參數</th><th>名稱</th><th>描述</th></tr></thead><tbody><tr><td><code>argc</code></td><td>參數個數</td><td>參數向量的個數</td></tr><tr><td><code>argv</code></td><td>參數向量</td><td>字符指針數組</td></tr></tbody></table></div><p>參數向量 <code>argv</code> 是調用你的程序的命令列的標記化表示形式。在上面的例子中，<code>argv</code> 將是以下字符串的列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>argv = [ &quot;/path/to/a.out&quot;, &quot;-o&quot;, &quot;foo&quot;, &quot;-vv&quot; ];</span></span></code></pre></div><p>參數向量在其第一個索引 <code>argv[0]</code> 中確保至少會有一個字符串，這是執行程序的完整路徑。</p><h3 id="main-c-文件的剖析" tabindex="-1">main.c 文件的剖析 <a class="header-anchor" href="#main-c-文件的剖析" aria-label="Permalink to “main.c 文件的剖析”">​</a></h3><p>當我從頭開始編寫 <code>main.c</code> 時，它的結構通常如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>/* 0 版權/許可證 */</span></span>
<span class="line"><span>/* 1 包含 */</span></span>
<span class="line"><span>/* 2 定義 */</span></span>
<span class="line"><span>/* 3 外部聲明 */</span></span>
<span class="line"><span>/* 4 類型定義 */</span></span>
<span class="line"><span>/* 5 全局變量聲明 */</span></span>
<span class="line"><span>/* 6 函數原型 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char *argv[]) {</span></span>
<span class="line"><span>/* 7 命令列解析 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 8 函數聲明 */</span></span></code></pre></div><p>下面我將討論這些編號的各個部分，除了編號為 0 的那部分。如果你必須把版權或許可文本放在源代碼中，那就放在那裏。</p><p>另一件我不想討論的事情是註釋。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>“評論謊言。”</span></span>
<span class="line"><span>- 一個憤世嫉俗但聰明又好看的程序員。</span></span></code></pre></div><p>與其使用註釋，不如使用有意義的函數名和變量名。</p><p>鑑於程序員固有的惰性，一旦添加了註釋，維護負擔就會增加一倍。如果更改或重構代碼，則需要更新或擴充註釋。隨着時間的推移，代碼會變得面目全非，與註釋所描述的內容完全不同。</p><p>如果你必須寫註釋，不要寫關於代碼正在做<em>什麼</em>，相反，寫下代碼<em>為什麼</em>要這樣寫。寫一些你將要在五年後讀到的註釋，那時你已經將這段代碼忘得一乾二淨。世界的命運取決於你。<em>不要有壓力。</em></p><h4 id="_1、包含" tabindex="-1">1、包含 <a class="header-anchor" href="#_1、包含" aria-label="Permalink to “1、包含”">​</a></h4><p>我添加到 <code>main.c</code> 文件的第一個東西是包含文件，它們為程序提供大量標準 C 標準庫函數和變量。C 標準庫做了很多事情。瀏覽 <code>/usr/include</code> 中的頭文件，你可以瞭解到它們可以做些什麼。</p>`,28)),a("p",null,[s[4]||(s[4]=a("code",null,"#include",-1)),s[5]||(s[5]=n(" 字符串是 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/C_preprocessor"},{default:i(()=>[...s[3]||(s[3]=[n("C 預處理程序",-1)])]),_:1}),s[6]||(s[6]=n("（cpp）指令，它會將引用的文件完整地包含在當前文件中。C 中的頭文件通常以 ",-1)),s[7]||(s[7]=a("code",null,".h",-1)),s[8]||(s[8]=n(" 擴展名命名，且不應包含任何可執行代碼。它只有宏、定義、類型定義、外部變量和函數原型。字符串 ",-1)),s[9]||(s[9]=a("code",null,"<header.h>",-1)),s[10]||(s[10]=n(" 告訴 cpp 在系統定義的頭文件路徑中查找名為 ",-1)),s[11]||(s[11]=a("code",null,"header.h",-1)),s[12]||(s[12]=n(" 的文件，它通常在 ",-1)),s[13]||(s[13]=a("code",null,"/usr/include",-1)),s[14]||(s[14]=n(" 目錄中。",-1))]),s[43]||(s[43]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span>#include &lt;libgen.h&gt;</span></span>
<span class="line"><span>#include &lt;errno.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span>#include &lt;getopt.h&gt;</span></span>
<span class="line"><span>#include &lt;sys/types.h&gt;</span></span></code></pre></div><p>這是我默認會全局包含的最小包含集合，它將引入：</p><div class="table-wrap"><table><thead><tr><th>#include 文件</th><th>提供的東西</th></tr></thead><tbody><tr><td>stdio</td><td>提供 <code>FILE</code>、<code>stdin</code>、<code>stdout</code>、<code>stderr</code> 和 <code>fprint()</code> 函數系列</td></tr><tr><td>stdlib</td><td>提供 <code>malloc()</code>、<code>calloc()</code> 和 <code>realloc()</code></td></tr><tr><td>unistd</td><td>提供 <code>EXIT_FAILURE</code>、<code>EXIT_SUCCESS</code></td></tr><tr><td>libgen</td><td>提供 <code>basename()</code> 函數</td></tr><tr><td>errno</td><td>定義外部 <code>errno</code> 變量及其可以接受的所有值</td></tr><tr><td>string</td><td>提供 <code>memcpy()</code>、<code>memset()</code> 和 <code>strlen()</code> 函數系列</td></tr><tr><td>getopt</td><td>提供外部 <code>optarg</code>、<code>opterr</code>、<code>optind</code> 和 <code>getopt()</code> 函數</td></tr><tr><td>sys/types</td><td>類型定義快捷方式，如 <code>uint32_t</code> 和 <code>uint64_t</code></td></tr></tbody></table></div><h4 id="_2、定義" tabindex="-1">2、定義 <a class="header-anchor" href="#_2、定義" aria-label="Permalink to “2、定義”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define OPTSTR &quot;vi:o:f:h&quot;</span></span>
<span class="line"><span>#define USAGE_FMT  &quot;%s [-v] [-f hexflag] [-i inputfile] [-o outputfile] [-h]&quot;</span></span>
<span class="line"><span>#define ERR_FOPEN_INPUT  &quot;fopen(input, r)&quot;</span></span>
<span class="line"><span>#define ERR_FOPEN_OUTPUT &quot;fopen(output, w)&quot;</span></span>
<span class="line"><span>#define ERR_DO_THE_NEEDFUL &quot;do_the_needful blew up&quot;</span></span>
<span class="line"><span>#define DEFAULT_PROGNAME &quot;george&quot;</span></span></code></pre></div>`,5)),a("p",null,[s[16]||(s[16]=n("這在現在沒有多大意義，但 ",-1)),s[17]||(s[17]=a("code",null,"OPTSTR",-1)),s[18]||(s[18]=n(" 定義我這裏會説明一下，它是程序推薦的命令列開關。參考 ",-1)),e(p,{href:"https://linux.die.net/man/3/getopt"},{default:i(()=>[...s[15]||(s[15]=[n("getopt(3)",-1)])]),_:1}),s[19]||(s[19]=n(" man 頁面，瞭解 ",-1)),s[20]||(s[20]=a("code",null,"OPTSTR",-1)),s[21]||(s[21]=n(" 將如何影響 ",-1)),s[22]||(s[22]=a("code",null,"getopt()",-1)),s[23]||(s[23]=n(" 的行為。",-1))]),s[44]||(s[44]=l(`<p><code>USAGE_FMT</code> 定義了一個 <code>printf()</code> 風格的格式字符串，它用在 <code>usage()</code> 函數中。</p><p>我還喜歡將字符串常量放在文件的 <code>#define</code> 這一部分。如果需要，把它們收集在一起可以更容易地修正拼寫、重用消息和國際化消息。</p><p>最後，在命名 <code>#define</code> 時全部使用大寫字母，以區別變量和函數名。如果需要，可以將單詞放連在一起或使用下劃線分隔，只要確保它們都是大寫的就行。</p><h4 id="_3、外部聲明" tabindex="-1">3、外部聲明 <a class="header-anchor" href="#_3、外部聲明" aria-label="Permalink to “3、外部聲明”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern int errno;</span></span>
<span class="line"><span>extern char *optarg;</span></span>
<span class="line"><span>extern int opterr, optind;</span></span></code></pre></div><p><code>extern</code> 聲明將該名稱帶入當前編譯單元的命名空間（即 “文件”），並允許程序訪問該變量。這裏我們引入了三個整數變量和一個字符指針的定義。<code>opt</code> 前綴的幾個變量是由 <code>getopt()</code> 函數使用的，C 標準庫使用 <code>errno</code> 作為帶外通信通道來傳達函數可能的失敗原因。</p><h4 id="_4、類型定義" tabindex="-1">4、類型定義 <a class="header-anchor" href="#_4、類型定義" aria-label="Permalink to “4、類型定義”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  int           verbose;</span></span>
<span class="line"><span>  uint32_t      flags;</span></span>
<span class="line"><span>  FILE         *input;</span></span>
<span class="line"><span>  FILE         *output;</span></span>
<span class="line"><span>} options_t;</span></span></code></pre></div><p>在外部聲明之後，我喜歡為結構、聯合和枚舉聲明 <code>typedef</code>。命名一個 <code>typedef</code> 是一種傳統習慣。我非常喜歡使用 <code>_t</code> 後綴來表示該名稱是一種類型。在這個例子中，我將 <code>options_t</code> 聲明為一個包含 4 個成員的 <code>struct</code>。C 是一種空格無關的編程語言，因此我使用空格將字段名排列在同一列中。我只是喜歡它看起來的樣子。對於指針聲明，我在名稱前面加上星號，以明確它是一個指針。</p><h4 id="_5、全局變量聲明" tabindex="-1">5、全局變量聲明 <a class="header-anchor" href="#_5、全局變量聲明" aria-label="Permalink to “5、全局變量聲明”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int dumb_global_variable = -11;</span></span></code></pre></div><p>全局變量是一個壞主意，你永遠不應該使用它們。但如果你必須使用全局變量，請在這裏聲明，並確保給它們一個默認值。説真的，<em>不要使用全局變量</em>。</p><h4 id="_6、函數原型" tabindex="-1">6、函數原型 <a class="header-anchor" href="#_6、函數原型" aria-label="Permalink to “6、函數原型”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void usage(char *progname, int opt);</span></span>
<span class="line"><span>int do_the_needful(options_t *options);</span></span></code></pre></div><p>在編寫函數時，將它們添加到 <code>main()</code> 函數之後而不是之前，在這裏放函數原型。早期的 C 編譯器使用單遍策略，這意味着你在程序中使用的每個符號（變量或函數名稱）必須在使用之前聲明。現代編譯器幾乎都是多遍編譯器，它們在生成代碼之前構建一個完整的符號表，因此並不嚴格要求使用函數原型。但是，有時你無法選擇代碼要使用的編譯器，所以請編寫函數原型並繼續這樣做下去。</p><p>當然，我總是包含一個 <code>usage()</code> 函數，當 <code>main()</code> 函數不理解你從命令列傳入的內容時，它會調用這個函數。</p><h4 id="_7、命令列解析" tabindex="-1">7、命令列解析 <a class="header-anchor" href="#_7、命令列解析" aria-label="Permalink to “7、命令列解析”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char *argv[]) {</span></span>
<span class="line"><span>    int opt;</span></span>
<span class="line"><span>    options_t options = { 0, 0x0, stdin, stdout };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    opterr = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while ((opt = getopt(argc, argv, OPTSTR)) != EOF) </span></span>
<span class="line"><span>       switch(opt) {</span></span>
<span class="line"><span>           case &#39;i&#39;:</span></span>
<span class="line"><span>              if (!(options.input = fopen(optarg, &quot;r&quot;)) ){</span></span>
<span class="line"><span>                 perror(ERR_FOPEN_INPUT);</span></span>
<span class="line"><span>                 exit(EXIT_FAILURE);</span></span>
<span class="line"><span>                 /* NOTREACHED */</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;o&#39;:</span></span>
<span class="line"><span>              if (!(options.output = fopen(optarg, &quot;w&quot;)) ){</span></span>
<span class="line"><span>                 perror(ERR_FOPEN_OUTPUT);</span></span>
<span class="line"><span>                 exit(EXIT_FAILURE);</span></span>
<span class="line"><span>                 /* NOTREACHED */</span></span>
<span class="line"><span>              }    </span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>              </span></span>
<span class="line"><span>           case &#39;f&#39;:</span></span>
<span class="line"><span>              options.flags = (uint32_t )strtoul(optarg, NULL, 16);</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;v&#39;:</span></span>
<span class="line"><span>              options.verbose += 1;</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;h&#39;:</span></span>
<span class="line"><span>           default:</span></span>
<span class="line"><span>              usage(basename(argv[0]), opt);</span></span>
<span class="line"><span>              /* NOTREACHED */</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (do_the_needful(&amp;options) != EXIT_SUCCESS) {</span></span>
<span class="line"><span>       perror(ERR_DO_THE_NEEDFUL);</span></span>
<span class="line"><span>       exit(EXIT_FAILURE);</span></span>
<span class="line"><span>       /* NOTREACHED */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return EXIT_SUCCESS;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>好吧，代碼有點多。這個 <code>main()</code> 函數的目的是收集用户提供的參數，執行最基本的輸入驗證，然後將收集到的參數傳遞給使用它們的函數。這個示例聲明一個使用默認值初始化的 <code>options</code> 變量，並解析命令列，根據需要更新 <code>options</code>。</p><p><code>main()</code> 函數的核心是一個 <code>while</code> 循環，它使用 <code>getopt()</code> 來遍歷 <code>argv</code>，尋找命令列選項及其參數（如果有的話）。文件前面定義的 <code>OPTSTR</code> 是驅動 <code>getopt()</code> 行為的模板。<code>opt</code> 變量接受 <code>getopt()</code> 找到的任何命令列選項的字符值，程序對檢測命令列選項的響應發生在 <code>switch</code> 語句中。</p><p>如果你注意到了可能會問，為什麼 <code>opt</code> 被聲明為 32 位 <code>int</code>，但是預期是 8 位 <code>char</code>？事實上 <code>getopt()</code> 返回一個 <code>int</code>，當它到達 <code>argv</code> 末尾時取負值，我會使用 <code>EOF</code>（<em>文件末尾</em>標記）匹配。<code>char</code> 是有符號的，但我喜歡將變量匹配到它們的函數返回值。</p><p>當檢測到一個已知的命令列選項時，會發生特定的行為。在 <code>OPTSTR</code> 中指定一個以冒號結尾的參數，這些選項可以有一個參數。當一個選項有一個參數時，<code>argv</code> 中的下一個字符串可以通過外部定義的變量 <code>optarg</code> 提供給程序。我使用 <code>optarg</code> 來打開文件進行讀寫，或者將命令列參數從字符串轉換為整數值。</p><p>這裏有幾個關於代碼風格的要點：</p><ul><li>將 <code>opterr</code> 初始化為 <code>0</code>，禁止 <code>getopt</code> 觸發 <code>?</code>。</li><li>在 <code>main()</code> 的中間使用 <code>exit(EXIT_FAILURE);</code> 或 <code>exit(EXIT_SUCCESS);</code>。</li><li><code>/* NOTREACHED */</code> 是我喜歡的一個 lint 指令。</li><li>在返回 int 類型的函數末尾使用 <code>return EXIT_SUCCESS;</code>。</li><li>顯示強制轉換隱式類型。</li></ul><p>這個程序的命令列格式，經過編譯如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./a.out -h</span></span>
<span class="line"><span>a.out [-v] [-f hexflag] [-i inputfile] [-o outputfile] [-h]</span></span></code></pre></div><p>事實上，在編譯後 <code>usage()</code> 就會向 <code>stderr</code> 發出這樣的內容。</p><h4 id="_8、函數聲明" tabindex="-1">8、函數聲明 <a class="header-anchor" href="#_8、函數聲明" aria-label="Permalink to “8、函數聲明”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void usage(char *progname, int opt) {</span></span>
<span class="line"><span>   fprintf(stderr, USAGE_FMT, progname?progname:DEFAULT_PROGNAME);</span></span>
<span class="line"><span>   exit(EXIT_FAILURE);</span></span>
<span class="line"><span>   /* NOTREACHED */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int do_the_needful(options_t *options) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!options) {</span></span>
<span class="line"><span>     errno = EINVAL;</span></span>
<span class="line"><span>     return EXIT_FAILURE;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!options-&gt;input || !options-&gt;output) {</span></span>
<span class="line"><span>     errno = ENOENT;</span></span>
<span class="line"><span>     return EXIT_FAILURE;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /* XXX do needful stuff */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return EXIT_SUCCESS;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我最後編寫的函數不是個樣板函數。在本例中，函數 <code>do_the_needful()</code> 接受一個指向 <code>options_t</code> 結構的指針。我驗證 <code>options</code> 指針不為 <code>NULL</code>，然後繼續驗證 <code>input</code> 和 <code>output</code> 結構成員。如果其中一個測試失敗，返回 <code>EXIT_FAILURE</code>，並且通過將外部全局變量 <code>errno</code> 設置為常規錯誤代碼，我可以告知調用者常規的錯誤原因。調用者可以使用便捷函數 <code>perror()</code> 來根據 <code>errno</code> 的值發出便於閲讀的錯誤消息。</p><p>函數幾乎總是以某種方式驗證它們的輸入。如果完全驗證代價很大，那麼嘗試執行一次並將驗證後的數據視為不可變。<code>usage()</code> 函數使用 <code>fprintf()</code> 調用中的條件賦值驗證 <code>progname</code> 參數。接下來 <code>usage()</code> 函數就退出了，所以我不會費心設置 <code>errno</code>，也不用操心是否使用正確的程序名。</p><p>在這裏，我要避免的最大錯誤是解引用 <code>NULL</code> 指針。這將導致操作系統向我的進程發送一個名為 <code>SYSSEGV</code> 的特殊信號，導致不可避免的死亡。用户最不希望看到的是由 <code>SYSSEGV</code> 而導致的崩潰。最好是捕獲 <code>NULL</code> 指針以發出更合適的錯誤消息並優雅地關閉程序。</p><p>有些人抱怨在函數體中有多個 <code>return</code> 語句，他們喋喋不休地説些“控制流的連續性”之類的東西。老實説，如果函數中間出現錯誤，那就應該返回這個錯誤條件。寫一大堆嵌套的 <code>if</code> 語句只有一個 <code>return</code> 絕不是一個“好主意”™。</p><p>最後，如果你編寫的函數接受四個以上的參數，請考慮將它們綁定到一個結構中，並傳遞一個指向該結構的指針。這使得函數簽名更簡單，更容易記住，並且在以後調用時不會出錯。它還可以使調用函數速度稍微快一些，因為需要複製到函數堆棧中的東西更少。在實踐中，只有在函數被調用數百萬或數十億次時，才會考慮這個問題。如果認為這沒有意義，那也無所謂。</p><h3 id="等等-你不是説沒有註釋嗎" tabindex="-1">等等，你不是説沒有註釋嗎！？！！ <a class="header-anchor" href="#等等-你不是説沒有註釋嗎" aria-label="Permalink to “等等，你不是説沒有註釋嗎！？！！”">​</a></h3><p>在 <code>do_the_needful()</code> 函數中，我寫了一種特殊類型的註釋，它被是作為佔位符設計的，而不是為了説明代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* XXX do needful stuff */</span></span></code></pre></div><p>當你寫到這裏時，有時你不想停下來編寫一些特別複雜的代碼，你會之後再寫，而不是現在。那就是我留給自己再次回來的地方。我插入一個帶有 <code>XXX</code> 前綴的註釋和一個描述需要做什麼的簡短註釋。之後，當我有更多時間的時候，我會在源代碼中尋找 <code>XXX</code>。使用什麼前綴並不重要，只要確保它不太可能在另一個上下文環境（如函數名或變量）中出現在你代碼庫裏。</p><h3 id="把它們組合在一起" tabindex="-1">把它們組合在一起 <a class="header-anchor" href="#把它們組合在一起" aria-label="Permalink to “把它們組合在一起”">​</a></h3><p>好吧，當你編譯這個程序後，它<em>仍然</em>幾乎沒有任何作用。但是現在你有了一個堅實的骨架來構建你自己的命令列解析 C 程序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c - the complete listing */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span>#include &lt;libgen.h&gt;</span></span>
<span class="line"><span>#include &lt;errno.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span>#include &lt;getopt.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define OPTSTR &quot;vi:o:f:h&quot;</span></span>
<span class="line"><span>#define USAGE_FMT  &quot;%s [-v] [-f hexflag] [-i inputfile] [-o outputfile] [-h]&quot;</span></span>
<span class="line"><span>#define ERR_FOPEN_INPUT  &quot;fopen(input, r)&quot;</span></span>
<span class="line"><span>#define ERR_FOPEN_OUTPUT &quot;fopen(output, w)&quot;</span></span>
<span class="line"><span>#define ERR_DO_THE_NEEDFUL &quot;do_the_needful blew up&quot;</span></span>
<span class="line"><span>#define DEFAULT_PROGNAME &quot;george&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern int errno;</span></span>
<span class="line"><span>extern char *optarg;</span></span>
<span class="line"><span>extern int opterr, optind;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  int           verbose;</span></span>
<span class="line"><span>  uint32_t      flags;</span></span>
<span class="line"><span>  FILE         *input;</span></span>
<span class="line"><span>  FILE         *output;</span></span>
<span class="line"><span>} options_t;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int dumb_global_variable = -11;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void usage(char *progname, int opt);</span></span>
<span class="line"><span>int  do_the_needful(options_t *options);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char *argv[]) {</span></span>
<span class="line"><span>    int opt;</span></span>
<span class="line"><span>    options_t options = { 0, 0x0, stdin, stdout };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    opterr = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while ((opt = getopt(argc, argv, OPTSTR)) != EOF) </span></span>
<span class="line"><span>       switch(opt) {</span></span>
<span class="line"><span>           case &#39;i&#39;:</span></span>
<span class="line"><span>              if (!(options.input = fopen(optarg, &quot;r&quot;)) ){</span></span>
<span class="line"><span>                 perror(ERR_FOPEN_INPUT);</span></span>
<span class="line"><span>                 exit(EXIT_FAILURE);</span></span>
<span class="line"><span>                 /* NOTREACHED */</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;o&#39;:</span></span>
<span class="line"><span>              if (!(options.output = fopen(optarg, &quot;w&quot;)) ){</span></span>
<span class="line"><span>                 perror(ERR_FOPEN_OUTPUT);</span></span>
<span class="line"><span>                 exit(EXIT_FAILURE);</span></span>
<span class="line"><span>                 /* NOTREACHED */</span></span>
<span class="line"><span>              }    </span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>              </span></span>
<span class="line"><span>           case &#39;f&#39;:</span></span>
<span class="line"><span>              options.flags = (uint32_t )strtoul(optarg, NULL, 16);</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;v&#39;:</span></span>
<span class="line"><span>              options.verbose += 1;</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;h&#39;:</span></span>
<span class="line"><span>           default:</span></span>
<span class="line"><span>              usage(basename(argv[0]), opt);</span></span>
<span class="line"><span>              /* NOTREACHED */</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (do_the_needful(&amp;options) != EXIT_SUCCESS) {</span></span>
<span class="line"><span>       perror(ERR_DO_THE_NEEDFUL);</span></span>
<span class="line"><span>       exit(EXIT_FAILURE);</span></span>
<span class="line"><span>       /* NOTREACHED */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return EXIT_SUCCESS;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void usage(char *progname, int opt) {</span></span>
<span class="line"><span>   fprintf(stderr, USAGE_FMT, progname?progname:DEFAULT_PROGNAME);</span></span>
<span class="line"><span>   exit(EXIT_FAILURE);</span></span>
<span class="line"><span>   /* NOTREACHED */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int do_the_needful(options_t *options) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!options) {</span></span>
<span class="line"><span>     errno = EINVAL;</span></span>
<span class="line"><span>     return EXIT_FAILURE;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!options-&gt;input || !options-&gt;output) {</span></span>
<span class="line"><span>     errno = ENOENT;</span></span>
<span class="line"><span>     return EXIT_FAILURE;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /* XXX do needful stuff */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return EXIT_SUCCESS;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>現在，你已經準備好編寫更易於維護的 C 語言。如果你有任何問題或反饋，請在評論中分享。</p><hr>`,43)),a("p",null,[s[25]||(s[25]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/5/how-write-good-c-main-function"},{default:i(()=>[...s[24]||(s[24]=[n("https://opensource.com/article/19/5/how-write-good-c-main-function",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/jnyjny"},{default:i(()=>[...s[26]||(s[26]=[n("Erik O'Shaughnessy",-1)])]),_:1}),s[31]||(s[31]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[27]||(s[27]=[n("lujun9972",-1)])]),_:1}),s[32]||(s[32]=n(" 譯者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:i(()=>[...s[28]||(s[28]=[n("MjSeven",-1)])]),_:1}),s[33]||(s[33]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[29]||(s[29]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[34]||(s[34]=[n("LCTT",-1)])]),_:1}),s[37]||(s[37]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[35]||(s[35]=[n("Linux中國",-1)])]),_:1}),s[38]||(s[38]=n(" 榮譽推出",-1))])])}const T=t(r,[["render",u]]);export{C as __pageData,T as default};
