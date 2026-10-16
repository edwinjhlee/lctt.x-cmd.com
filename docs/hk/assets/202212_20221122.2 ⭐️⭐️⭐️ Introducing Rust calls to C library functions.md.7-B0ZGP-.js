import{_ as l,a0 as o,w as d,s as c,I as a,x as n,a1 as p,A as t,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"從 Rust 調用 C 庫函數 | LCTT x X-CMD","titleTemplate":false,"description":"從 Rust 調用 C 庫函數 | LCTT (202212) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"從 Rust 調用 C 庫函數 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"從 Rust 調用 C 庫函數 | LCTT (202212) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202212/20221122.2 ⭐️⭐️⭐️ Introducing Rust calls to C library functions","title":"從 Rust 調用 C 庫函數","tag":"202212","desc":""},"relativePath":"202212/20221122.2 ⭐️⭐️⭐️ Introducing Rust calls to C library functions.md","filePath":"[post].md"}'),u={name:"202212/20221122.2 ⭐️⭐️⭐️ Introducing Rust calls to C library functions.md"};function r(m,s,b,g,C,f){const e=o("Link");return d(),c("div",null,[s[60]||(s[60]=a("h1",{id:"從-rust-調用-c-庫函數",tabindex:"-1"},[n("從 Rust 調用 C 庫函數 "),a("a",{class:"header-anchor",href:"#從-rust-調用-c-庫函數","aria-label":"Permalink to “從 Rust 調用 C 庫函數”"},"​")],-1)),s[61]||(s[61]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202212/16/110147q4kk0qoqe0e3m6bb.jpg",alt:""})],-1)),s[62]||(s[62]=a("blockquote",null,[a("p",null,"Rust FFI 和 bindgen 工具是為 Rust 調用 C 庫而設計的。Rust 很容易與 C 語言對話，從而與任何其它可以與 C 語言對話的語言對話。")],-1)),a("p",null,[s[1]||(s[1]=n("為什麼要從 Rust 調用 C 函數？簡短的答案就是軟件庫。冗長的答案則觸及到 C 在眾多編程語言中的地位，特別是相對 Rust 而言。C、C++，還有 Rust 都是系統語言，這意味着程序員可以訪問機器層面的數據類型與操作。在這三個系統語言中，C 依然佔據主導地位。現代操作系統的內核主要是用 C 來寫的，其餘部分依靠彙編語言補充。在標準系統函數庫中，輸入與輸出、數字處理、加密計算、安全、網絡、國際化、字符串處理、內存管理等等，大多都是用 C 來寫的。這些函數庫所代表的是一個龐大的基礎設施，支撐着用其他語言寫出來的應用。Rust 發展至今也有着可觀的函數庫，但是 C 的函數庫 —— 自 1970 年代就已存在，迄今還在蓬勃發展 —— 是一種無法被忽視的資源。最後一點是，C 依然還是編程語言中的 ",-1)),p(e,{href:"https://baike.baidu.com/item/lingua%20franka/5359711"},{default:t(()=>[...s[0]||(s[0]=[n("通用語",-1)])]),_:1}),s[2]||(s[2]=n("：大部分語言都可以與 C 交流，透過 C，語言之間可以互相交流。",-1))]),s[63]||(s[63]=i('<h3 id="兩個概念證明的例子" tabindex="-1">兩個概念證明的例子 <a class="header-anchor" href="#兩個概念證明的例子" aria-label="Permalink to “兩個概念證明的例子”">​</a></h3><p>Rust 支持 FFI（<ruby>外部函數接口<rt>Foreign Function Interface</rt></ruby>）用以調用 C 函數。任何 FFI 所需要面臨的問題是調用方語言是否涵蓋了被調用語言的數據類型。例如，<code>ctypes</code> 是 Python 調用 C 的 FFI，但是 Python 並沒有包括 C 所支持的無符號整數類型。結果就是，<code>ctypes</code> 必須尋求解決方案。</p><p>相比之下，Rust 包含了所有 C 中的原始（即，機器層面）類型。比如説，Rust 中的 <code>i32</code> 類對應 C 中的 <code>int</code> 類。C 特別聲明瞭 <code>char</code> 類必須是一個字節大小，而其他類型，比如 <code>int</code>，必須至少是這個大小（LCTT 譯註：原文處有評論指出 <code>int</code> 大小依照 C 標準應至少為 2 字節）；然而如今所有合理的 C 編譯器都支持四字節的 <code>int</code>，以及八字節的 <code>double</code>（Rust 中則是 <code>f64</code> 類），以此類推。</p><p>針對 C 的 FFI 所面臨的另一個挑戰是：FFI 是否能夠處理 C 的裸指針，包括指向被看作是字符串的數組指針。C 沒有字符串類型，它通過結合字符組和一個非打印終止符（大名鼎鼎的 <em>空終止符</em>）來實現字符串。相比之下，Rust 有兩個字符串類型：<code>String</code> 和 <code>&amp;str</code> （字符串切片）。問題是，Rust FFI 是否能將 C 字符串轉化成 Rust 字符串——答案是 <em>肯定的</em>。</p><p>出於對效率的追求，結構體指針在 C 中也很常見。一個 C 結構體在作為一個函數的參數或者返回值的時候，其默認行為是傳遞值（即，逐字節複製）。C 結構體，如同它在 Rust 中的對應部分一樣，可以包含數組和嵌套其他結構體，所以其大小是不定的。結構體在兩種語言中的最佳用法是傳遞或返回引用，也就是説，傳遞或返回結構體的地址而不是結構體本身的副本。Rust FFI 再一次成功處理了 C 的結構體指針，其在 C 函數庫中十分普遍。</p>',5)),a("p",null,[s[5]||(s[5]=n("第一段代碼案例專注於調用相對簡單的 C 庫函數，比如 ",-1)),s[6]||(s[6]=a("code",null,"abs",-1)),s[7]||(s[7]=n("（絕對值）和 ",-1)),s[8]||(s[8]=a("code",null,"sqrt",-1)),s[9]||(s[9]=n("（平方根）。這些函數使用非指針標量參數並返回一個非指針標量值。第二段代碼案例則涉及了字符串和結構體指針，在這裏會介紹工具 ",-1)),p(e,{href:"https://github.com/rust-lang/rust-bindgen"},{default:t(()=>[...s[3]||(s[3]=[n("bindgen",-1)])]),_:1}),s[10]||(s[10]=n("，其通過 C 接口（頭文件）生成 Rust 代碼，比如 ",-1)),s[11]||(s[11]=a("code",null,"math.h",-1)),s[12]||(s[12]=n(" 以及 ",-1)),s[13]||(s[13]=a("code",null,"time.h",-1)),s[14]||(s[14]=n("。C 頭文件聲明瞭 C 函數的調用語法，並定義了會被調用的結構體。兩段代碼都能在 ",-1)),p(e,{href:"https://condor.depaul.edu/mkalin"},{default:t(()=>[...s[4]||(s[4]=[n("我的主頁上",-1)])]),_:1}),s[15]||(s[15]=n(" 找到。",-1))]),s[64]||(s[64]=i(`<h3 id="調用相對簡單的-c-函數" tabindex="-1">調用相對簡單的 C 函數 <a class="header-anchor" href="#調用相對簡單的-c-函數" aria-label="Permalink to “調用相對簡單的 C 函數”">​</a></h3><p>第一段代碼案例有四處 Rust 對標準數學庫內的 C 函數的調用：兩處分別調用了 <code>abs</code>（絕對值）和 <code>pow</code>（冪），兩處重複調用了 <code>sqrt</code>（平方根）。這個程序可以直接用 <code>rustc</code> 編譯器進行構建，或者使用更方便的命令 <code>cargo build</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::os::raw::c_int;  // 32位</span></span>
<span class="line"><span>use std::os::raw::c_double; // 64位</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 從標準庫 libc 中引入三個函數。</span></span>
<span class="line"><span>// 此處是 Rust 對三個 C 函數的聲明：</span></span>
<span class="line"><span>extern &quot;C&quot; {</span></span>
<span class="line"><span>  fn abs(num: c_int) -&gt; c_int;</span></span>
<span class="line"><span>  fn sqrt(num: c_double) -&gt; c_double;</span></span>
<span class="line"><span>  fn pow(num: c_double, power: c_double) -&gt; c_double;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>  let x: i32 = -123;</span></span>
<span class="line"><span>  println!(&quot;\\n{x}的絕對值是: {}.&quot;, unsafe { abs(x) });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let n: f64 = 9.0;</span></span>
<span class="line"><span>  let p: f64 = 3.0;</span></span>
<span class="line"><span>  println!(&quot;\\n{n}的{p}次方是: {}.&quot;, unsafe { pow(n, p) });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let mut y: f64 = 64.0;</span></span>
<span class="line"><span>  println!(&quot;\\n{y}的平方根是: {}.&quot;, unsafe { sqrt(y) });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  y = -3.14;</span></span>
<span class="line"><span>  println!(&quot;\\n{y}的平方根是: {}.&quot;, unsafe { sqrt(y) }); //** NaN = NotaNumber（不是數字）</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>頂部的兩個 <code>use</code> 聲明是 Rust 的數據類型 <code>c_int</code> 和 <code>c_double</code>，對應 C 類型裏的 <code>int</code> 和 <code>double</code>。Rust 標準模組 <code>std::os::raw</code> 定義了 14 個類似的類型以確保跟 C 的兼容性。模組 <code>std::ffi</code> 中有 14 個同樣的類型定義，以及對字符串的支持。</p><p>位於 <code>main</code> 函數上的 <code>extern &quot;C&quot;</code> 區域聲明瞭 3 個 C 庫函數，這些函數會在 <code>main</code> 函數內被調用。每次調用都使用了標準的 C 函數名，但每次調用都必須發生在一個 <code>unsafe</code> 區域內。正如每個新接觸 Rust 的程序員所發現的那樣，Rust 編譯器極度強制內存安全。其他語言（特別是 C 和 C++）作不出相同的保證。<code>unsafe</code> 區域其實是説：Rust 對外部調用中可能存在的不安全行為不負責。</p><p>第一個程序輸出為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-123的絕對值是: 123.</span></span>
<span class="line"><span>9的3次方是: 729.</span></span>
<span class="line"><span>64的平方根是: 8.</span></span>
<span class="line"><span>-3.14的平方根是: NaN.</span></span></code></pre></div><p>輸出的最後一行的 <code>NaN</code> 表示<ruby>不是數字<rt>Not a Number</rt></ruby>：C 庫函數 <code>sqrt</code> 期待一個非負值作為參數，這使得參數 <code>-3.14</code> 生成了 <code>NaN</code> 作為返回值。</p><h3 id="調用涉及指針的-c-函數" tabindex="-1">調用涉及指針的 C 函數 <a class="header-anchor" href="#調用涉及指針的-c-函數" aria-label="Permalink to “調用涉及指針的 C 函數”">​</a></h3><p>C 庫函數為了提高效率，經常在安全、網絡、字符串處理、內存管理，以及其他領域中使用指針。例如，庫函數 <code>asctime</code>（ASCII 字符串形式的時間）期待一個結構體指針作為其參數。Rust 調用類似 <code>asctime</code> 的 C 函數就會比調用 <code>sqrt</code> 要更加棘手一些，後者既沒有牽扯到指針，也不涉及到結構體。</p>`,10)),a("p",null,[s[18]||(s[18]=i("函數 <code>asctime</code> 調用的 C 結構體類型為 <code>struct tm</code>。一個指向此結構體的指針會作為參數被傳遞給庫函數 <code>mktime</code>（時間作為值）。此結構體會將時間拆分成諸如年、月、小時之類的單位。此結構體的<ruby>字段<rt>field</rt></ruby>類型為 <code>time_t</code>，是 <code>int</code>（32位）和 <code>long</code>（64 位）的別名。兩個庫函數將這些破碎的時間片段組合成了一個單一值：<code>asctime</code> 返回一個以字符串表示的時間，而 <code>mktime</code> 返回一個 <code>time_t</code> 值表示自 “",21)),a("ruby",null,[p(e,{href:"https://baike.baidu.com/item/UNIX%E6%99%82%E9%96%93/8932323"},{default:t(()=>[...s[16]||(s[16]=[n("紀元",-1)])]),_:1}),s[17]||(s[17]=a("rt",null,"Epoch",-1))]),s[19]||(s[19]=n(" 以來所經歷的秒數，這是一個系統的時鐘和時間戳的相對時間。典型的紀元設置為 1900 年或 1970 年，1 月 1 日 0 時 0 分 0 秒。（LCTT 校注：Unix、Linux 乃至於如今所有主要的計算機和網絡的時間紀元均採用 1970 年為起點。）",-1))]),s[65]||(s[65]=i(`<p>以下的 C 程序調用了 <code>asctime</code> 和 <code>mktime</code>，並使用了其他庫函數 <code>strftime</code> 來將 <code>mktime</code> 的返回值轉化成一個格式化的字符串。這個程序可被視作 Rust 對應版本的預熱：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;time.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main () {</span></span>
<span class="line"><span>  struct tm sometime;  /* 時間被打破細分 */</span></span>
<span class="line"><span>  char buffer[80];</span></span>
<span class="line"><span>  int utc;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  sometime.tm_sec = 1;</span></span>
<span class="line"><span>  sometime.tm_min = 1;</span></span>
<span class="line"><span>  sometime.tm_hour = 1;</span></span>
<span class="line"><span>  sometime.tm_mday = 1;</span></span>
<span class="line"><span>  sometime.tm_mon = 1;</span></span>
<span class="line"><span>  sometime.tm_year = 1; /*LCTT 校注：注意，相對於 1900 年的年數*/</span></span>
<span class="line"><span>  sometime.tm_hour = 1;</span></span>
<span class="line"><span>  sometime.tm_wday = 1;</span></span>
<span class="line"><span>  sometime.tm_yday = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  printf(&quot;日期與時間: %s\\n&quot;, asctime(&amp;sometime));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  utc = mktime(&amp;sometime);</span></span>
<span class="line"><span>  if( utc &lt; 0 ) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;錯誤: mktime 無法生成時間\\n&quot;);</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    printf(&quot;返回的整數值: %d\\n&quot;, utc);</span></span>
<span class="line"><span>    strftime(buffer, sizeof(buffer), &quot;%c&quot;, &amp;sometime);</span></span>
<span class="line"><span>    printf(&quot;更加可讀的版本: %s\\n&quot;, buffer);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>程序輸出為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>日期與時間: Fri Feb  1 01:01:01 1901</span></span>
<span class="line"><span>返回的整數值: 2120218157</span></span>
<span class="line"><span>更加可讀的版本: Fri Feb  1 01:01:01 1901</span></span></code></pre></div>`,4)),a("p",null,[s[22]||(s[22]=n("（LCTT 譯註：如果你嘗試在自己電腦上運行這段代碼，然後得到了一行關於 ",-1)),s[23]||(s[23]=a("code",null,"mktime",-1)),s[24]||(s[24]=n(" 的錯誤信息，然後又在網上隨便找了個在線 C 編譯器，複製代碼然後得到了跟這裏的結果有區別但是沒有錯誤的結果，不要慌，我的電腦上也是這樣的。導致本地機器上 ",-1)),s[25]||(s[25]=a("code",null,"mktime",-1)),s[26]||(s[26]=n(" 失敗的原因是作者沒有設置 ",-1)),s[27]||(s[27]=a("code",null,"tm_isdst",-1)),s[28]||(s[28]=n("，這個是用來標記夏令時的標誌。",-1)),p(e,{href:"https://cplusplus.com/reference/ctime/tm/"},{default:t(()=>[...s[20]||(s[20]=[a("code",null,"tm_isdst",-1),n(" 大於零則夏令時生效中，等於零則不生效，小於零標記未知",-1)])]),_:1}),s[29]||(s[29]=n("。加入 ",-1)),s[30]||(s[30]=a("code",null,"sometime.tm_isdst = 0",-1)),s[31]||(s[31]=n(" 或 ",-1)),s[32]||(s[32]=a("code",null,"= -1",-1)),s[33]||(s[33]=n(" 後應該就能得到跟在線編譯器大致一樣的結果。不同的地方在於結果第一行我得到的是 ",-1)),s[34]||(s[34]=a("code",null,"Mon Feb ...",-1)),s[35]||(s[35]=n("，這個與作者代碼中 ",-1)),s[36]||(s[36]=a("code",null,"sometime.tm_wday = 1",-1)),s[37]||(s[37]=n(" 對應，這裏應該是作者",-1)),s[38]||(s[38]=a("strong",null,"寫錯了",-1)),s[39]||(s[39]=n("；第二行我和作者和網上得到的數字都不一樣，這大概是合理的，因為這與機器的紀元有關；第三行我跟作者的結果是一樣的，1901 年 2 月 1 日也確實是週五，這是因為 ",-1)),p(e,{href:"https://cplusplus.com/reference/ctime/mktime/"},{default:t(()=>[...s[21]||(s[21]=[a("code",null,"mktime",-1),n(" 其實會修正時間參數中不合理的地方",-1)])]),_:1}),s[40]||(s[40]=n("。至於夏令時具體是如何影響 ",-1)),s[41]||(s[41]=a("code",null,"mktime",-1)),s[42]||(s[42]=n(" 這個問題，我能查到的只有 ",-1)),s[43]||(s[43]=a("code",null,"mktime",-1)),s[44]||(s[44]=n(" 的計算受時區影響，更底層的原因我也不知道了。）",-1))]),s[66]||(s[66]=i(`<p>總的來説，Rust 在調用庫函數 <code>asctime</code> 和 <code>mktime</code> 時，必須處理以下兩個問題：</p><ul><li>將裸指針作為唯一參數傳遞給每個庫函數。</li><li>把從 <code>asctime</code> 返回的 C 字符串轉化為 Rust 字符串。</li></ul><h3 id="rust-調用-asctime-和-mktime" tabindex="-1">Rust 調用 asctime 和 mktime <a class="header-anchor" href="#rust-調用-asctime-和-mktime" aria-label="Permalink to “Rust 調用 asctime 和 mktime”">​</a></h3><p>工具 <code>bindgen</code> 會根據類似 <code>math.h</code> 和 <code>time.h</code> 之類的 C 頭文件生成 Rust 支持的代碼。下面這個簡化版的 <code>time.h</code> 就可以用來做例子，簡化版與原版主要有兩個不同：</p><ul><li>內置類型 <code>int</code> 被用來取代別名類型 <code>time_t</code>。工具 bindgen 可以處理 <code>time_t</code> 類，但是會生成一些煩人的警告，因為 <code>time_t</code> 不符合 Rust 的命名規範：<code>time_t</code> 以下劃線區分 <code>time</code> 和 <code>t</code>；Rust 更偏好駝峯式命名方法，比如 <code>TimeT</code>。</li><li>出於同樣的原因，這裏選擇 <code>StructTM</code> 作為 <code>struct tm</code> 的別名。</li></ul><p>以下是一份簡化版的頭文件，<code>mktime</code> 和 <code>asctime</code> 在文件底部：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>typedef struct tm {</span></span>
<span class="line"><span>  int tm_sec;  /* 秒 */</span></span>
<span class="line"><span>  int tm_min;  /* 分鐘 */</span></span>
<span class="line"><span>  int tm_hour;   /* 小時 */</span></span>
<span class="line"><span>  int tm_mday;   /* 日 */</span></span>
<span class="line"><span>  int tm_mon;  /* 月 */</span></span>
<span class="line"><span>  int tm_year;   /* 年 */</span></span>
<span class="line"><span>  int tm_wday;   /* 星期 */</span></span>
<span class="line"><span>  int tm_yday;   /* 一年中的第幾天 */</span></span>
<span class="line"><span>  int tm_isdst;  /* 夏令時 */</span></span>
<span class="line"><span>} StructTM;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern int mktime(StructTM*);</span></span>
<span class="line"><span>extern char* asctime(StructTM*);</span></span></code></pre></div><p><code>bindgen</code> 安裝好後，<code>mytime.h</code> 作為以上提到的頭文件，以下命令（<code>%</code> 是命令列提示符）可以生成所需的 Rust 代碼並將其保存到文件 <code>mytime.rs</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% bindgen mytime.h &gt; mytime.rs</span></span></code></pre></div><p>以下是 <code>mytime.rs</code> 中的重要部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* automatically generated by rust-bindgen 0.61.0 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[repr(C)]</span></span>
<span class="line"><span>#[derive(Debug, Copy, Clone)]</span></span>
<span class="line"><span>pub struct tm {</span></span>
<span class="line"><span>  pub tm_sec: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_min: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_hour: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_mday: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_mon: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_year: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_wday: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_yday: ::std::os::raw::c_int,</span></span>
<span class="line"><span>  pub tm_isdst: ::std::os::raw::c_int,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pub type StructTM = tm;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern &quot;C&quot; {</span></span>
<span class="line"><span>  pub fn mktime(arg1: *mut StructTM) -&gt; ::std::os::raw::c_int;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern &quot;C&quot; {</span></span>
<span class="line"><span>  pub fn asctime(arg1: *mut StructTM) -&gt; *mut ::std::os::raw::c_char;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[test]</span></span>
<span class="line"><span>fn bindgen_test_layout_tm() {</span></span>
<span class="line"><span>  const UNINIT: ::std::mem::MaybeUninit&lt;tm&gt; = ::std::mem::MaybeUninit::uninit();</span></span>
<span class="line"><span>  let ptr = UNINIT.as_ptr();</span></span>
<span class="line"><span>  assert_eq!(</span></span>
<span class="line"><span>  ::std::mem::size_of::&lt;tm&gt;(),</span></span>
<span class="line"><span>  36usize,</span></span>
<span class="line"><span>  concat!(&quot;Size of: &quot;, stringify!(tm))</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  ...</span></span></code></pre></div><p>Rust 結構體 <code>struct tm</code>，跟原本在 C 中的一樣，包含了 9 個 4 字節的整型字段。這些字段名稱在 C 和 Rust 中是一樣的。<code>extern &quot;C&quot;</code> 區域聲明瞭庫函數 <code>astime</code> 和 <code>mktime</code> 分別需要只一個參數，一個指向可變實例 <code>StructTM</code> 的裸指針。（庫函數可能會通過指針改變作為參數傳遞的結構體。）</p><p><code>#[test]</code> 屬性下的其餘代碼是用來測試 Rust 版的時間結構體的佈局。通過命令 <code>cargo test</code> 可以進行這些測試。問題在於，C 沒有規定編譯器應該如何對結構體中的字段進行佈局。比如説，C 的 <code>struct tm</code> 以字段 <code>tm_sec</code> 開頭用以表示秒；但是 C 不需要編譯版本遵循這個排序。不管怎樣，Rust 測試應該會成功，而 Rust 對庫函數的調用也應如預期般工作。</p><h3 id="設置好第二個案例並開始運行" tabindex="-1">設置好第二個案例並開始運行 <a class="header-anchor" href="#設置好第二個案例並開始運行" aria-label="Permalink to “設置好第二個案例並開始運行”">​</a></h3><p>從 <code>bindgen</code> 生成的代碼不包含 <code>main</code> 函數，所以是一個天然的模組。以下是一個 <code>main</code> 函數初始化了 <code>StructTM</code> 並調用了 <code>asctime</code> 和 <code>mktime</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mod mytime;</span></span>
<span class="line"><span>use mytime::*;</span></span>
<span class="line"><span>use std::ffi::CStr;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>  let mut sometime  = StructTM {</span></span>
<span class="line"><span>    tm_year: 1,</span></span>
<span class="line"><span>    tm_mon: 1,</span></span>
<span class="line"><span>    tm_mday: 1,</span></span>
<span class="line"><span>    tm_hour: 1,</span></span>
<span class="line"><span>    tm_min: 1,</span></span>
<span class="line"><span>    tm_sec: 1,</span></span>
<span class="line"><span>    tm_isdst: -1,</span></span>
<span class="line"><span>    tm_wday: 1,</span></span>
<span class="line"><span>    tm_yday: 1</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  unsafe {</span></span>
<span class="line"><span>    let c_ptr = &amp;mut sometime; // 裸指針</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 調用，轉化，並擁有</span></span>
<span class="line"><span>    // 返回的 C 字符串</span></span>
<span class="line"><span>    let char_ptr = asctime(c_ptr);</span></span>
<span class="line"><span>    let c_str = CStr::from_ptr(char_ptr);</span></span>
<span class="line"><span>    println!(&quot;{:#?}&quot;, c_str.to_str());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let utc = mktime(c_ptr);</span></span>
<span class="line"><span>    println!(&quot;{}&quot;, utc);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這段 Rust 代碼可以被編譯（直接用 <code>rustc</code> 或使用 <code>cargo</code>）並運行。輸出為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Ok(</span></span>
<span class="line"><span>    &quot;Mon Feb  1 01:01:01 1901\\n&quot;,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>2120218157</span></span></code></pre></div><p>對 C 函數 <code>asctime</code> 和 <code>mktime</code> 的調用必須再一次被放在 <code>unsafe</code> 區域內，因為 Rust 編譯器無法對這些外部函數的潛在內存安全風險負責。此處聲明一下，<code>asctime</code> 和 <code>mktime</code> 並沒有安全風險。調用的兩個函數的參數是裸指針 <code>ptr</code>，其指向結構體 <code>sometime</code> （在<ruby>棧<rt>stack</rt></ruby>中）的地址。</p><p><code>asctime</code> 是兩個函數中調用起來更棘手的那個，因為這個函數返回的是一個指向 C <code>char</code> 的指針，如果函數返回 <code>Mon</code> 那麼指針就指向 <code>M</code>。但是 Rust 編譯器並不知道 C 字符串 （<code>char</code> 的空終止數組）的儲存位置。是內存裏的靜態空間？還是<ruby>堆<rt>heap</rt></ruby>？<code>asctime</code> 函數內用來儲存時間的文字表達的數組實際上是在內存的靜態空間裏。無論如何，C 到 Rust 字符串轉化需要兩個步驟來避免編譯錯誤：</p><ul><li>調用 <code>Cstr::from_ptr(char_ptr)</code> 來將 C 字符串轉化為 Rust 字符串並返回一個引用儲存在變量 <code>c_str</code> 中。</li><li>對 <code>c_str.to_str()</code> 的調用確保了 <code>c_str</code> 是所有者。</li></ul><p>Rust 代碼不會增加從 <code>mktime</code> 返回的整型值的易讀性，這一部分留作課外作業給感興趣的人去探究。Rust 模板 <code>chrono::format</code> 也有一個 <code>strftime</code> 函數，它可以被當作 C 的同名函數來使用，兩者都是獲取時間的文字表達。</p><h3 id="使用-ffi-和-bindgen-調用-c" tabindex="-1">使用 FFI 和 bindgen 調用 C <a class="header-anchor" href="#使用-ffi-和-bindgen-調用-c" aria-label="Permalink to “使用 FFI 和 bindgen 調用 C”">​</a></h3><p>Rust FFI 和工具 <code>bindgen</code> 都能夠出色地協助 Rust 調用 C 庫，無論是標準庫還是第三方庫。Rust 可以輕鬆地與 C 交流，並透過 C 與其他語言交流。對於調用像 <code>sqrt</code> 一樣簡單的庫函數，Rust FFI 表現直截了當，這是因為 Rust 的原始數據類型覆蓋了它們在 C 中的對應部分。</p><p>對於更為複雜的交流 —— 特別是 Rust 調用像 <code>asctime</code> 和 <code>mktime</code> 一樣，會涉及到結構體和指針的 C 庫函數 —— <code>bindgen</code> 工具是優秀的幫手。這個工具會生成支持代碼以及所需要的測試。當然，Rust 編譯器無法假設 C 代碼對內存安全的考慮會符合 Rust 的標準；因此，Rust 必須在 <code>unsafe</code> 區域內調用 C。</p><hr>`,26)),a("p",null,[s[46]||(s[46]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/22/11/rust-calls-c-library-functions"},{default:t(()=>[...s[45]||(s[45]=[n("https://opensource.com/article/22/11/rust-calls-c-library-functions",-1)])]),_:1})]),a("p",null,[s[51]||(s[51]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/mkalindepauledu"},{default:t(()=>[...s[47]||(s[47]=[n("Marty Kalin",-1)])]),_:1}),s[52]||(s[52]=n(" 選題：",-1)),p(e,{href:"https://github.com/lkxed"},{default:t(()=>[...s[48]||(s[48]=[n("lkxed",-1)])]),_:1}),s[53]||(s[53]=n(" 譯者：",-1)),p(e,{href:"https://github.com/yzuowei"},{default:t(()=>[...s[49]||(s[49]=[n("yzuowei",-1)])]),_:1}),s[54]||(s[54]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:t(()=>[...s[50]||(s[50]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[57]||(s[57]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[55]||(s[55]=[n("LCTT",-1)])]),_:1}),s[58]||(s[58]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:t(()=>[...s[56]||(s[56]=[n("Linux中國",-1)])]),_:1}),s[59]||(s[59]=n(" 榮譽推出",-1))])])}const R=l(u,[["render",r]]);export{h as __pageData,R as default};
