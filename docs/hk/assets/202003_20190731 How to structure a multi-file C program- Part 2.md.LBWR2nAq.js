import{_ as t,a0 as d,w as o,s as r,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"如何組織構建多文件 C 語言程序（二） | LCTT x X-CMD","titleTemplate":false,"description":"如何組織構建多文件 C 語言程序（二） | LCTT (202003) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何組織構建多文件 C 語言程序（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何組織構建多文件 C 語言程序（二） | LCTT (202003) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202003/20190731 How to structure a multi-file C program- Part 2","title":"如何組織構建多文件 C 語言程序（二）","tag":"202003","desc":""},"relativePath":"202003/20190731 How to structure a multi-file C program- Part 2.md","filePath":"[post].md"}'),u={name:"202003/20190731 How to structure a multi-file C program- Part 2.md"};function c(f,s,b,m,g,h){const p=d("Link");return o(),r("div",null,[s[43]||(s[43]=a("h1",{id:"如何組織構建多文件-c-語言程序-二",tabindex:"-1"},[n("如何組織構建多文件 C 語言程序（二） "),a("a",{class:"header-anchor",href:"#如何組織構建多文件-c-語言程序-二","aria-label":"Permalink to “如何組織構建多文件 C 語言程序（二）”"},"​")],-1)),s[44]||(s[44]=a("blockquote",null,[a("p",null,"我將在本系列的第二篇中深入研究由多個文件組成的 C 程序的結構。")],-1)),s[45]||(s[45]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202003/16/122928i6qheufnh24jq2qf.jpg",alt:""})],-1)),a("p",null,[s[3]||(s[3]=n("在",-1)),e(p,{href:"https://linux.cn/article-11935-1.html"},{default:l(()=>[...s[0]||(s[0]=[n("第一篇",-1)])]),_:1}),s[4]||(s[4]=n("中，我設計了一個名為",-1)),e(p,{href:"https://github.com/jnyjny/MeowMeow.git"},{default:l(()=>[...s[1]||(s[1]=[n("喵嗚喵嗚",-1)])]),_:1}),s[5]||(s[5]=n("的多文件 C 程序，該程序實現了一個玩具",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Codec"},{default:l(()=>[...s[2]||(s[2]=[n("編解碼器",-1)])]),_:1}),s[6]||(s[6]=n("。我也提到了程序設計中的 Unix 哲學，即在一開始創建多個空文件，並建立一個好的結構。最後，我創建了一個 ",-1)),s[7]||(s[7]=a("code",null,"Makefile",-1)),s[8]||(s[8]=n(" 文件夾並闡述了它的作用。在本文中將另一個方向展開：現在我將介紹簡單但具有指導性的喵嗚喵嗚編解碼器的實現。",-1))]),a("p",null,[s[10]||(s[10]=n("當讀過我的《",-1)),e(p,{href:"https://linux.cn/article-10949-1.html"},{default:l(()=>[...s[9]||(s[9]=[n("如何寫一個好的 C 語言 main 函數",-1)])]),_:1}),s[11]||(s[11]=n("》後，你會覺得喵嗚喵嗚編解碼器的 ",-1)),s[12]||(s[12]=a("code",null,"main.c",-1)),s[13]||(s[13]=n(" 文件的結構很熟悉，其主體結構如下：",-1))]),s[46]||(s[46]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c - 喵嗚喵嗚流式編解碼器 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 00 系統包含文件 */</span></span>
<span class="line"><span>/* 01 項目包含文件 */</span></span>
<span class="line"><span>/* 02 外部聲明 */</span></span>
<span class="line"><span>/* 03 定義 */</span></span>
<span class="line"><span>/* 04 類型定義 */</span></span>
<span class="line"><span>/* 05 全局變量聲明（不要用）*/</span></span>
<span class="line"><span>/* 06 附加的函數原型 */</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>int main(int argc, char *argv[])</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  /* 07 變量聲明 */</span></span>
<span class="line"><span>  /* 08 檢查 argv[0] 以查看該程序是被如何調用的 */</span></span>
<span class="line"><span>  /* 09 處理來自用户的命令列選項 */</span></span>
<span class="line"><span>  /* 10 做點有用的事情 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>/* 11 其它輔助函數 */</span></span></code></pre></div><h3 id="包含項目頭文件" tabindex="-1">包含項目頭文件 <a class="header-anchor" href="#包含項目頭文件" aria-label="Permalink to “包含項目頭文件”">​</a></h3><p>位於第二部分中的 <code>/* 01 項目包含文件 */</code> 的源代碼如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c - 喵嗚喵嗚流式編解碼器 */</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>/* 01 項目包含文件 */</span></span>
<span class="line"><span>#include &quot;main.h&quot;</span></span>
<span class="line"><span>#include &quot;mmecode.h&quot;</span></span>
<span class="line"><span>#include &quot;mmdecode.h&quot;</span></span></code></pre></div><p><code>#include</code> 是 C 語言的預處理命令，它會將該文件名的文件內容拷貝到當前文件中。如果程序員在頭文件名稱周圍使用雙引號（<code>&quot;&quot;</code>），編譯器將會在當前目錄尋找該文件。如果文件被尖括號包圍（<code>&lt;&gt;</code>），編譯器將在一組預定義的目錄中查找該文件。</p>`,5)),a("p",null,[e(p,{href:"https://github.com/JnyJny/meowmeow/blob/master/main.h"},{default:l(()=>[...s[14]||(s[14]=[n("main.h",-1)])]),_:1}),s[16]||(s[16]=n(" 文件中包含了 ",-1)),e(p,{href:"https://github.com/JnyJny/meowmeow/blob/master/main.c"},{default:l(()=>[...s[15]||(s[15]=[n("main.c",-1)])]),_:1}),s[17]||(s[17]=n(" 文件中用到的定義和類型定義。我喜歡儘可能多將聲明放在頭文件裏，以便我在我的程序的其他位置使用這些定義。",-1))]),a("p",null,[s[20]||(s[20]=n("頭文件 ",-1)),e(p,{href:"https://github.com/JnyJny/meowmeow/blob/master/mmencode.h"},{default:l(()=>[...s[18]||(s[18]=[n("mmencode.h",-1)])]),_:1}),s[21]||(s[21]=n(" 和 ",-1)),e(p,{href:"https://github.com/JnyJny/meowmeow/blob/master/mmdecode.h"},{default:l(()=>[...s[19]||(s[19]=[n("mmdecode.h",-1)])]),_:1}),s[22]||(s[22]=n(" 幾乎相同，因此我以 ",-1)),s[23]||(s[23]=a("code",null,"mmencode.h",-1)),s[24]||(s[24]=n(" 為例來分析。",-1))]),s[47]||(s[47]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* mmencode.h - 喵嗚喵嗚流編解碼器 */</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>#ifndef _MMENCODE_H</span></span>
<span class="line"><span>#define _MMENCODE_H</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int mm_encode(FILE *src, FILE *dst);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>#endif /* _MMENCODE_H */</span></span></code></pre></div><p><code>#ifdef</code>、<code>#define</code>、<code>#endif</code> 指令統稱為 “防護” 指令。其可以防止 C 編譯器在一個文件中多次包含同一文件。如果編譯器在一個文件中發現多個定義/原型/聲明，它將會產生警告。因此這些防護措施是必要的。</p><p>在這些防護內部，只有兩個東西：<code>#include</code> 指令和函數原型聲明。我在這裏包含了 <code>stdio.h</code> 頭文件，以便於能在函數原型中使用 <code>FILE</code> 定義。函數原型也可以被包含在其他 C 文件中，以便於在文件的命名空間中創建它。你可以將每個文件視為一個獨立的命名空間，其中的變量和函數不能被另一個文件中的函數或者變量使用。</p><p>編寫頭文件很複雜，並且在大型項目中很難管理它。不要忘記使用防護。</p><h3 id="喵嗚喵嗚編碼的最終實現" tabindex="-1">喵嗚喵嗚編碼的最終實現 <a class="header-anchor" href="#喵嗚喵嗚編碼的最終實現" aria-label="Permalink to “喵嗚喵嗚編碼的最終實現”">​</a></h3><p>該程序的功能是按照字節進行 <code>MeowMeow</code> 字符串的編解碼，事實上這是該項目中最簡單的部分。截止目前我所做的工作便是支持允許在適當的位置調用此函數：解析命令列，確定要使用的操作，並打開將要操作的文件。下面的循環是編碼的過程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* mmencode.c - 喵嗚喵嗚流式編解碼器 */</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>   while (!feof(src)) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     if (!fgets(buf, sizeof(buf), src))</span></span>
<span class="line"><span>       break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     for(i=0; i&lt;strlen(buf); i++) {</span></span>
<span class="line"><span>       lo = (buf[i] &amp; 0x000f);</span></span>
<span class="line"><span>       hi = (buf[i] &amp; 0x00f0) &gt;&gt; 4;</span></span>
<span class="line"><span>       fputs(tbl[hi], dst);</span></span>
<span class="line"><span>       fputs(tbl[lo], dst);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span></code></pre></div><p>簡單的説，當文件中還有數據塊時（ <code>feof(3)</code> ），該循環讀取（<code>feof(3)</code> ）文件中的一個數據塊。然後將讀入的內容的每個字節分成兩個 <code>hi</code> 和 <code>lo</code> 的<ruby>半字節<rt>nibble</rt></ruby>。半字節是半個字節，即 4 個位。這裏的奧妙之處在於可以用 4 個位來編碼 16 個值。我將 <code>hi</code> 和 <code>lo</code> 用作 16 個字符串查找表 <code>tbl</code> 的索引，表中包含了用半字節編碼的 <code>MeowMeow</code> 字符串。這些字符串使用 <code>fputs(3)</code> 函數寫入目標 <code>FILE</code> 流，然後我們繼續處理緩存區的下一個字節。</p>`,8)),a("p",null,[s[26]||(s[26]=n("該表使用 ",-1)),e(p,{href:"https://github.com/JnyJny/meowmeow/blob/master/table.h"},{default:l(()=>[...s[25]||(s[25]=[n("table.h",-1)])]),_:1}),s[27]||(s[27]=n(" 中的宏定義進行初始化，在沒有特殊原因（比如：要展示包含了另一個項目的本地頭文件）時，我喜歡使用宏來進行初始化。我將在未來的文章中進一步探討原因。",-1))]),s[48]||(s[48]=i(`<h3 id="喵嗚喵嗚解碼的實現" tabindex="-1">喵嗚喵嗚解碼的實現 <a class="header-anchor" href="#喵嗚喵嗚解碼的實現" aria-label="Permalink to “喵嗚喵嗚解碼的實現”">​</a></h3><p>我承認在開始工作前花了一些時間。解碼的循環與編碼類似：讀取 <code>MeowMeow</code> 字符串到緩衝區，將編碼從字符串轉換為字節</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> /* mmdecode.c - 喵嗚喵嗚流式編解碼器 */</span></span>
<span class="line"><span> ...</span></span>
<span class="line"><span> int mm_decode(FILE *src, FILE *dst)</span></span>
<span class="line"><span> {</span></span>
<span class="line"><span>   if (!src || !dst) {</span></span>
<span class="line"><span>     errno = EINVAL;</span></span>
<span class="line"><span>     return -1;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   return stupid_decode(src, dst);</span></span>
<span class="line"><span> }</span></span></code></pre></div><p>這不符合你的期望嗎？</p><p>在這裏，我通過外部公開的 <code>mm_decode()</code> 函數公開了 <code>stupid_decode()</code> 函數細節。我上面所説的“外部”是指在這個文件之外。因為 <code>stupid_decode()</code> 函數不在該頭文件中，因此無法在其他文件中調用它。</p><p>當我們想發佈一個可靠的公共接口時，有時候會這樣做，但是我們還沒有完全使用函數解決問題。在本例中，我編寫了一個 I/O 密集型函數，該函數每次從源中讀取 8 個字節，然後解碼獲得 1 個字節寫入目標流中。較好的實現是一次處理多於 8 個字節的緩衝區。更好的實現還可以通過緩衝區輸出字節，進而減少目標流中單字節的寫入次數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* mmdecode.c - 喵嗚喵嗚流式編解碼器 */</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>int stupid_decode(FILE *src, FILE *dst)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  char           buf[9];</span></span>
<span class="line"><span>  decoded_byte_t byte;</span></span>
<span class="line"><span>  int            i;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  while (!feof(src)) {</span></span>
<span class="line"><span>    if (!fgets(buf, sizeof(buf), src))</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    byte.field.f0 = isupper(buf[0]);</span></span>
<span class="line"><span>    byte.field.f1 = isupper(buf[1]);</span></span>
<span class="line"><span>    byte.field.f2 = isupper(buf[2]);</span></span>
<span class="line"><span>    byte.field.f3 = isupper(buf[3]);</span></span>
<span class="line"><span>    byte.field.f4 = isupper(buf[4]);</span></span>
<span class="line"><span>    byte.field.f5 = isupper(buf[5]);</span></span>
<span class="line"><span>    byte.field.f6 = isupper(buf[6]);</span></span>
<span class="line"><span>    byte.field.f7 = isupper(buf[7]);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    fputc(byte.value, dst);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我並沒有使用編碼器中使用的位移方法，而是創建了一個名為 <code>decoded_byte_t</code> 的自定義數據結構。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* mmdecode.c - 喵嗚喵嗚流式編解碼器 */</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  unsigned char f7:1;</span></span>
<span class="line"><span>  unsigned char f6:1;</span></span>
<span class="line"><span>  unsigned char f5:1;</span></span>
<span class="line"><span>  unsigned char f4:1;</span></span>
<span class="line"><span>  unsigned char f3:1;</span></span>
<span class="line"><span>  unsigned char f2:1;</span></span>
<span class="line"><span>  unsigned char f1:1;</span></span>
<span class="line"><span>  unsigned char f0:1;</span></span>
<span class="line"><span>} fields_t;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>typedef union {</span></span>
<span class="line"><span>  fields_t      field;</span></span>
<span class="line"><span>  unsigned char value;</span></span>
<span class="line"><span>} decoded_byte_t;</span></span></code></pre></div><p>初次看到代碼時可能會感到有點兒複雜，但不要放棄。<code>decoded_byte_t</code> 被定義為 <code>fields_t</code> 和 <code>unsigned char</code> 的 <strong>聯合</strong>。可以將聯合中的命名成員看作同一內存區域的別名。在這種情況下，<code>value</code> 和 <code>field</code> 指向相同的 8 位內存區域。將 <code>field.f0</code> 設置為 <code>1</code> 也將會設置 <code>value</code> 中的最低有效位。</p><p>雖然 <code>unsigned char</code> 並不神秘，但是對 <code>fields_t</code> 的類型定義（<code>typedef</code>）也許看起來有些陌生。現代 C 編譯器允許程序員在結構體中指定單個位字段的值。字段所在的類型是一個無符號整數類型，並在成員標識符後緊跟一個冒號和一個整數，該整數指定了位字段的長度。</p><p>這種數據結構使得按字段名稱訪問字節中的每個位變得簡單，並可以通過聯合中的 <code>value</code> 字段訪問組合後的值。我們依賴編譯器生成正確的移位指令來訪問字段，這可以在調試時為你節省不少時間。</p><p>最後，因為 <code>stupid_decode()</code> 函數一次僅從源 <code>FILE</code> 流中讀取 8 個字節，所以它效率並不高。通常我們嘗試最小化讀寫次數，以提高性能和降低調用系統調用的開銷。請記住：少量的讀取/寫入大的塊比大量的讀取/寫入小的塊好得多。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>用 C 語言編寫一個多文件程序需要程序員要比只是是一個 <code>main.c</code> 做更多的規劃。但是當你添加功能或者重構時，只需要多花費一點兒努力便可以節省大量時間以及避免讓你頭痛的問題。</p><p>回顧一下，我更喜歡這樣做：多個文件，每個文件僅有簡單功能；通過頭文件公開那些文件中的小部分功能；把數字常量和字符串常量保存在頭文件中；使用 <code>Makefile</code> 而不是 Bash 腳本來自動化處理事務；使用 <code>main()</code> 函數來處理命令列參數解析並作為程序主要功能的框架。</p><p>我知道我只是蜻蜓點水般介紹了這個簡單的程序，並且我很高興知道哪些事情對你有所幫助，以及哪些主題需要詳細的解釋。請在評論中分享你的想法，讓我知道。</p><hr>`,18)),a("p",null,[s[29]||(s[29]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/7/structure-multi-file-c-part-2"},{default:l(()=>[...s[28]||(s[28]=[n("https://opensource.com/article/19/7/structure-multi-file-c-part-2",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/jnyjny"},{default:l(()=>[...s[30]||(s[30]=[n("Erik O'Shaughnessy",-1)])]),_:1}),s[35]||(s[35]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[31]||(s[31]=[n("lujun9972",-1)])]),_:1}),s[36]||(s[36]=n(" 譯者：",-1)),e(p,{href:"https://github.com/mengxinayan"},{default:l(()=>[...s[32]||(s[32]=[n("萌新阿巖",-1)])]),_:1}),s[37]||(s[37]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[33]||(s[33]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[40]||(s[40]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[38]||(s[38]=[n("LCTT",-1)])]),_:1}),s[41]||(s[41]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[39]||(s[39]=[n("Linux中國",-1)])]),_:1}),s[42]||(s[42]=n(" 榮譽推出",-1))])])}const T=t(u,[["render",c]]);export{C as __pageData,T as default};
