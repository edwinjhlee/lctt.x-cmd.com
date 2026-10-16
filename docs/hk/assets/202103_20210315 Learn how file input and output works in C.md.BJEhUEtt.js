import{_ as l,a0 as t,w as c,s as o,ao as d,I as i,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"學習如何用 C 語言來進行文件輸入輸出操作 | LCTT x X-CMD","titleTemplate":false,"description":"學習如何用 C 語言來進行文件輸入輸出操作 | LCTT (202103) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"學習如何用 C 語言來進行文件輸入輸出操作 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"學習如何用 C 語言來進行文件輸入輸出操作 | LCTT (202103) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202103/20210315 Learn how file input and output works in C","title":"學習如何用 C 語言來進行文件輸入輸出操作","tag":"202103","desc":""},"relativePath":"202103/20210315 Learn how file input and output works in C.md","filePath":"[post].md"}'),r={name:"202103/20210315 Learn how file input and output works in C.md"};function f(h,s,u,g,k,b){const a=t("Link");return c(),o("div",null,[s[15]||(s[15]=d(`<h1 id="學習如何用-c-語言來進行文件輸入輸出操作" tabindex="-1">學習如何用 C 語言來進行文件輸入輸出操作 <a class="header-anchor" href="#學習如何用-c-語言來進行文件輸入輸出操作" aria-label="Permalink to “學習如何用 C 語言來進行文件輸入輸出操作”">​</a></h1><blockquote><p>理解 I/O 有助於提升你的效率。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202103/30/222717gyuegz88ryu8ry7i.jpg" alt=""></p><p>如果你打算學習 C 語言的輸入、輸出，可以從 <code>stdio.h</code> 包含文件開始。正如你從其名字中猜到的，該文件定義了所有的標準（“std”）的輸入和輸出（“io”）函數。</p><p>大多數人學習的第一個 <code>stdio.h</code> 的函數是打印格式化輸出的 <code>printf</code> 函數。或者是用來打印一個字符串的 <code>puts</code> 函數。這些函數非常有用，可以將信息打印給用户，但是如果你想做更多的事情，則需要了解其他函數。</p><p>你可以通過編寫一個常見 Linux 命令的副本來了解其中一些功能和方法。<code>cp</code> 命令主要用於複製文件。如果你查看 <code>cp</code> 的幫助手冊，可以看到 <code>cp</code> 命令支持非常多的參數和選項。但最簡單的功能，就是複製文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cp infile outfile</span></span></code></pre></div><p>你只需使用一些讀寫文件的基本函數，就可以用 C 語言來自己實現 <code>cp</code> 命令。</p><h3 id="一次讀寫一個字符" tabindex="-1">一次讀寫一個字符 <a class="header-anchor" href="#一次讀寫一個字符" aria-label="Permalink to “一次讀寫一個字符”">​</a></h3><p>你可以使用 <code>fgetc</code> 和 <code>fputc</code> 函數輕鬆地進行輸入輸出。這些函數一次只讀寫一個字符。該用法被定義在 <code>stdio.h</code>，並且這也很淺顯易懂：<code>fgetc</code> 是從文件中讀取一個字符，<code>fputc</code> 是將一個字符保存到文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int fgetc(FILE *stream);</span></span>
<span class="line"><span>int fputc(int c, FILE *stream);</span></span></code></pre></div><p>編寫 <code>cp</code> 命令需要訪問文件。在 C 語言中，你使用 <code>fopen</code> 函數打開一個文件，該函數需要兩個參數：文件名和打開文件的模式。模式通常是從文件讀取（<code>r</code>）或向文件寫入（<code>w</code>）。打開文件的方式也有其他選項，但是對於本教程而言，僅關注於讀寫操作。</p><p>因此，將一個文件複製到另一個文件就變成了打開源文件和目標文件，接着，不斷從第一個文件讀取字符，然後將該字符寫入第二個文件。<code>fgetc</code> 函數返回從輸入文件中讀取的單個字符，或者當文件完成後返回文件結束標記（<code>EOF</code>）。一旦讀取到 <code>EOF</code>，你就完成了複製操作，就可以關閉兩個文件。該代碼如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  do {</span></span>
<span class="line"><span>    ch = fgetc(infile);</span></span>
<span class="line"><span>    if (ch != EOF) {</span></span>
<span class="line"><span>      fputc(ch, outfile);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } while (ch != EOF);</span></span></code></pre></div><p>你可以使用此循環編寫自己的 <code>cp</code> 程序，以使用 <code>fgetc</code> 和 <code>fputc</code> 函數一次讀寫一個字符。<code>cp.c</code> 源代碼如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main(int argc, char **argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  FILE *infile;</span></span>
<span class="line"><span>  FILE *outfile;</span></span>
<span class="line"><span>  int ch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* parse the command line */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* usage: cp infile outfile */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (argc != 3) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Incorrect usage\\n&quot;);</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Usage: cp infile outfile\\n&quot;);</span></span>
<span class="line"><span>    return 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* open the input file */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  infile = fopen(argv[1], &quot;r&quot;);</span></span>
<span class="line"><span>  if (infile == NULL) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Cannot open file for reading: %s\\n&quot;, argv[1]);</span></span>
<span class="line"><span>    return 2;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* open the output file */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  outfile = fopen(argv[2], &quot;w&quot;);</span></span>
<span class="line"><span>  if (outfile == NULL) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Cannot open file for writing: %s\\n&quot;, argv[2]);</span></span>
<span class="line"><span>    fclose(infile);</span></span>
<span class="line"><span>    return 3;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* copy one file to the other */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* use fgetc and fputc */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  do {</span></span>
<span class="line"><span>    ch = fgetc(infile);</span></span>
<span class="line"><span>    if (ch != EOF) {</span></span>
<span class="line"><span>      fputc(ch, outfile);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } while (ch != EOF);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* done */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fclose(infile);</span></span>
<span class="line"><span>  fclose(outfile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以使用 <code>gcc</code> 來將 <code>cp.c</code> 文件編譯成一個可執行文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc -Wall -o cp cp.c</span></span></code></pre></div><p><code>-o cp</code> 選項告訴編譯器將編譯後的程序保存到 <code>cp</code> 文件中。<code>-Wall</code> 選項告訴編譯器提示所有可能的警告，如果你沒有看到任何警告，則表示一切正常。</p><h3 id="讀寫數據塊" tabindex="-1">讀寫數據塊 <a class="header-anchor" href="#讀寫數據塊" aria-label="Permalink to “讀寫數據塊”">​</a></h3><p>通過每次讀寫一個字符來實現自己的 <code>cp</code> 命令可以完成這項工作，但這並不是很快。在複製“日常”文件（例如文檔和文本文件）時，你可能不會注意到，但是在複製大型文件或通過網絡複製文件時，你才會注意到差異。每次處理一個字符需要大量的開銷。</p><p>實現此 <code>cp</code> 命令的一種更好的方法是，讀取一塊的輸入數據到內存中（稱為緩存），然後將該數據集合寫入到第二個文件。這樣做的速度要快得多，因為程序可以一次讀取更多的數據，這就就減少了從文件中“讀取”的次數。</p><p>你可以使用 <code>fread</code> 函數將文件讀入一個變量中。這個函數有幾個參數：將數據讀入的數組或內存緩衝區的指針（<code>ptr</code>），要讀取的最小對象的大小（<code>size</code>），要讀取對象的個數（<code>nmemb</code>），以及要讀取的文件（<code>stream</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);</span></span></code></pre></div><p>不同的選項為更高級的文件輸入和輸出（例如，讀取和寫入具有特定數據結構的文件）提供了很大的靈活性。但是，在從一個文件讀取數據並將數據寫入另一個文件的簡單情況下，可以使用一個由字符數組組成的緩衝區。</p><p>你可以使用 <code>fwrite</code> 函數將緩衝區中的數據寫入到另一個文件。這使用了與 <code>fread</code> 函數有相似的一組選項：要從中讀取數據的數組或內存緩衝區的指針，要讀取的最小對象的大小，要讀取對象的個數以及要寫入的文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);</span></span></code></pre></div><p>如果程序將文件讀入緩衝區，然後將該緩衝區寫入另一個文件，則數組（<code>ptr</code>）可以是固定大小的數組。例如，你可以使用長度為 200 個字符的字符數組作為緩衝區。</p><p>在該假設下，你需要更改 <code>cp</code> 程序中的循環，以將數據從文件讀取到緩衝區中，然後將該緩衝區寫入另一個文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  while (!feof(infile)) {</span></span>
<span class="line"><span>    buffer_length = fread(buffer, sizeof(char), 200, infile);</span></span>
<span class="line"><span>    fwrite(buffer, sizeof(char), buffer_length, outfile);</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>這是更新後的 <code>cp</code> 程序的完整源代碼，該程序現在使用緩衝區讀取和寫入數據：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main(int argc, char **argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  FILE *infile;</span></span>
<span class="line"><span>  FILE *outfile;</span></span>
<span class="line"><span>  char buffer[200];</span></span>
<span class="line"><span>  size_t buffer_length;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* parse the command line */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* usage: cp infile outfile */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (argc != 3) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Incorrect usage\\n&quot;);</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Usage: cp infile outfile\\n&quot;);</span></span>
<span class="line"><span>    return 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* open the input file */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  infile = fopen(argv[1], &quot;r&quot;);</span></span>
<span class="line"><span>  if (infile == NULL) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Cannot open file for reading: %s\\n&quot;, argv[1]);</span></span>
<span class="line"><span>    return 2;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* open the output file */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  outfile = fopen(argv[2], &quot;w&quot;);</span></span>
<span class="line"><span>  if (outfile == NULL) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Cannot open file for writing: %s\\n&quot;, argv[2]);</span></span>
<span class="line"><span>    fclose(infile);</span></span>
<span class="line"><span>    return 3;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* copy one file to the other */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* use fread and fwrite */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while (!feof(infile)) {</span></span>
<span class="line"><span>    buffer_length = fread(buffer, sizeof(char), 200, infile);</span></span>
<span class="line"><span>    fwrite(buffer, sizeof(char), buffer_length, outfile);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* done */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fclose(infile);</span></span>
<span class="line"><span>  fclose(outfile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>由於你想將此程序與其他程序進行比較，因此請將此源代碼另存為 <code>cp2.c</code>。你可以使用 <code>gcc</code> 編譯程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc -Wall -o cp2 cp2.c</span></span></code></pre></div><p>和之前一樣，<code>-o cp2</code> 選項告訴編譯器將編譯後的程序保存到 <code>cp2</code> 程序文件中。<code>-Wall</code> 選項告訴編譯器打開所有警告。如果你沒有看到任何警告，則表示一切正常。</p><h3 id="是的-這真的更快了" tabindex="-1">是的，這真的更快了 <a class="header-anchor" href="#是的-這真的更快了" aria-label="Permalink to “是的，這真的更快了”">​</a></h3><p>使用緩衝區讀取和寫入數據是實現此版本 <code>cp</code> 程序更好的方法。由於它可以一次將文件的多個數據讀取到內存中，因此該程序不需要頻繁讀取數據。在小文件中，你可能沒有注意到使用這兩種方案的區別，但是如果你需要複製大文件，或者在較慢的介質（例如通過網絡連接）上覆制數據時，會發現明顯的差距。</p><p>我使用 Linux <code>time</code> 命令進行了比較。此命令可以運行另一個程序，然後告訴你該程序花費了多長時間。對於我的測試，我希望瞭解所花費時間的差距，因此我複製了系統上的 628 MB CD-ROM 鏡像文件。</p><p>我首先使用標準的 Linux 的 <code>cp</code> 命令複製了映像文件，以查看所需多長時間。一開始通過運行 Linux 的 <code>cp</code> 命令，同時我還避免使用 Linux 內置的文件緩存系統，使其不會給程序帶來誤導性能提升的可能性。使用 Linux <code>cp</code> 進行的測試，總計花費不到一秒鐘的時間：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time cp FD13LIVE.iso tmpfile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.040s</span></span>
<span class="line"><span>user    0m0.001s</span></span>
<span class="line"><span>sys     0m0.003s</span></span></code></pre></div><p>運行我自己實現的 <code>cp</code> 命令版本，複製同一文件要花費更長的時間。每次讀寫一個字符則花了將近五秒鐘來複制文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time ./cp FD13LIVE.iso tmpfile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m4.823s</span></span>
<span class="line"><span>user    0m4.100s</span></span>
<span class="line"><span>sys     0m0.571s</span></span></code></pre></div><p>從輸入讀取數據到緩衝區，然後將該緩衝區寫入輸出文件則要快得多。使用此方法複製文件花不到一秒鐘：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time ./cp2 FD13LIVE.iso tmpfile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.944s</span></span>
<span class="line"><span>user    0m0.224s</span></span>
<span class="line"><span>sys     0m0.608s</span></span></code></pre></div><p>我演示的 <code>cp</code> 程序使用了 200 個字符大小的緩衝區。我確信如果一次將更多文件數據讀入內存，該程序將運行得更快。但是，通過這種比較，即使只有 200 個字符的緩衝區，你也已經看到了性能上的巨大差異。</p><hr>`,46)),i("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/21/3/file-io-c"},{default:e(()=>[...s[0]||(s[0]=[n("https://opensource.com/article/21/3/file-io-c",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/jim-hall"},{default:e(()=>[...s[2]||(s[2]=[n("Jim Hall",-1)])]),_:1}),s[7]||(s[7]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 譯者：",-1)),p(a,{href:"https://github.com/wyxplus"},{default:e(()=>[...s[4]||(s[4]=[n("wyxplus",-1)])]),_:1}),s[9]||(s[9]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中國",-1)])]),_:1}),s[14]||(s[14]=n(" 榮譽推出",-1))])])}const v=l(r,[["render",f]]);export{y as __pageData,v as default};
