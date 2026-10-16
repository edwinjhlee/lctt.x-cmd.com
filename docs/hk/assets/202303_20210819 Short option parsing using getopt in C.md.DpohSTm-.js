import{_ as l,a0 as t,w as o,s as c,ao as d,I as a,x as n,a1 as e,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"在 C 語言中使用 getopt 解析命令列短選項 | LCTT x X-CMD","titleTemplate":false,"description":"在 C 語言中使用 getopt 解析命令列短選項 | LCTT (202303) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 C 語言中使用 getopt 解析命令列短選項 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 C 語言中使用 getopt 解析命令列短選項 | LCTT (202303) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202303/20210819 Short option parsing using getopt in C","title":"在 C 語言中使用 getopt 解析命令列短選項","tag":"202303","desc":""},"relativePath":"202303/20210819 Short option parsing using getopt in C.md","filePath":"[post].md"}'),r={name:"202303/20210819 Short option parsing using getopt in C.md"};function g(h,s,u,k,b,f){const p=t("Link");return o(),c("div",null,[s[26]||(s[26]=d(`<h1 id="在-c-語言中使用-getopt-解析命令列短選項" tabindex="-1">在 C 語言中使用 getopt 解析命令列短選項 <a class="header-anchor" href="#在-c-語言中使用-getopt-解析命令列短選項" aria-label="Permalink to “在 C 語言中使用 getopt 解析命令列短選項”">​</a></h1><blockquote><p>通過使用命令列讓用户告訴程序要什麼，可以讓程序更加靈活。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202303/02/141038srs54y5t4pv3r1ym.jpg" alt=""></p><p>在已經知道要處理什麼文件和對文件進行哪些操作的情況下，編寫處理文件的 C 語言程序就很容易了。如果將文件名“硬編碼”在程序中，或者你的程序只以一種方式來處理文件，那麼你的程序總是知道要做什麼。</p><p>但是如果程序每次運行時能夠對用户的輸入做出反應，可以使程序更靈活。讓用户告訴程序要處理什麼文件，或者以不同的方式完成任務，要實現這樣的功能就需要讀取命令列參數。</p><h3 id="讀取命令列" tabindex="-1">讀取命令列 <a class="header-anchor" href="#讀取命令列" aria-label="Permalink to “讀取命令列”">​</a></h3><p>一個 C 語言程序可以用如下聲明開頭：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main()</span></span></code></pre></div><p>這是啓動 C 程序最簡單的形式。但如果在圓括號中加入標準參數，你的程序就可以從命令列中讀取選項了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main(int argc, char **argv)</span></span></code></pre></div><p><code>argc</code> 表示命令列中的參數個數。它總是一個至少為 1 的數。</p><p><code>argv</code> 是一個二級指針，它指向一個字符串數組。這個數組中保存的是從命令列接收的各個參數。數組的第一個元素 <code>*argv[0]</code> 是程序的名稱。<code>**argv</code> 數組的其它元素包含剩下的命令列參數。</p><p>下面我將寫一個簡單的示例程序，它能夠回顯通過命令列參數傳遞給它的選項。它跟 Linux 的 <code>echo</code> 命令類似，只不過我們的程序會打印出程序名。同時它還會調用 <code>puts</code> 函數將命令列選項按行打印輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main(int argc, char **argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int i;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  printf(&quot;argc=%d\\n&quot;, argc); /* debugging */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (i = 0; i &lt; argc; i++) {</span></span>
<span class="line"><span>    puts(argv[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>編譯此程序，並在運行時提供一些命令列參數，你會看到傳入的命令列參數被逐行打印出來：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./echo this program can read the command line</span></span>
<span class="line"><span>argc=8</span></span>
<span class="line"><span>./echo</span></span>
<span class="line"><span>this</span></span>
<span class="line"><span>program</span></span>
<span class="line"><span>can</span></span>
<span class="line"><span>read</span></span>
<span class="line"><span>the</span></span>
<span class="line"><span>command</span></span>
<span class="line"><span>line</span></span></code></pre></div><p>這個命令列將程序的 <code>argc</code> 置為 8，<code>**argv</code> 數組包含 8 個元素：程序名以及用户輸入的 7 個單詞。由於 C 語言中數組下標從 0 開始，所以這些元素的標號分別是 0 到 7。這也是在 <code>for</code> 循環中處理命令列參數時能夠用 <code>i &lt; argc</code> 作為比較條件的原因。</p><p>你也可以用這個方式實現自己的 <code>cat</code> 或 <code>cp</code> 命令。<code>cat</code> 命令的基本功能是顯示一個或幾個文件的內容。下面是一個簡化版的<code>cat</code> 命令，它從命令列獲取文件名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void</span></span>
<span class="line"><span>copyfile(FILE *in, FILE *out)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int ch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while ((ch = fgetc(in)) != EOF) {</span></span>
<span class="line"><span>    fputc(ch, out);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main(int argc, char **argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int i;</span></span>
<span class="line"><span>  FILE *fileptr;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (i = 1; i &lt; argc; i++) {</span></span>
<span class="line"><span>    fileptr = fopen(argv[i], &quot;r&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (fileptr != NULL) {</span></span>
<span class="line"><span>      copyfile(fileptr, stdout);</span></span>
<span class="line"><span>      fclose(fileptr);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個簡化版的 <code>cat</code> 命令從命令列讀取文件名列表，然後將各個文件的內容逐字符地顯示到標準輸出上。假定我有一個叫做 <code>hello.txt</code> 的文件，其中包含數行文本內容。我能用自己實現的 <code>cat</code> 命令將它的內容顯示出來：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./cat hello.txt</span></span>
<span class="line"><span>Hi there!</span></span>
<span class="line"><span>This is a sample text file.</span></span></code></pre></div><p>以這個簡單程序為出發點，你也可以實現自己版本的其它 Linux 命令。比如 <code>cp</code> 命令，它從命令列讀取兩個文件名：要讀取的文件和要寫入的文件。</p><h3 id="讀取命令列選項" tabindex="-1">讀取命令列選項 <a class="header-anchor" href="#讀取命令列選項" aria-label="Permalink to “讀取命令列選項”">​</a></h3><p>通過命令列讀取文件名和其它文本固然很棒，但是如果想要程序根據用户給出的選項改變行為呢？比如 Linux 的 <code>cat</code> 命令就支持以下命令列選項：</p><ul><li><code>-b</code> 顯示非空行的行號</li><li><code>-E</code> 在行尾顯示 <code>$</code></li><li><code>-n</code> 顯示行號</li><li><code>-s</code> 合併顯示空行</li><li><code>-T</code> 將製表符顯示為 <code>^I</code></li><li><code>-v</code> 用 <code>^x</code> 和 <code>M-x</code> 方式顯示非打印字符，換行符和製表符除外</li></ul><p>這些以一個連字符開頭的單字母的選項叫做短選項。通常短選項是分開使用的，就像這樣 <code>cat -E -n</code>。但是也可以將多個短選項合併，比如 <code>cat -En</code>。</p><p>值得慶幸的是，所有 Linux 和 Unix 系統都包含 <code>getopt</code> 庫。它提供了一種簡單的方式來讀取命令列參數。<code>getopt</code> 定義在頭文件 <code>unistd.h</code> 中。你可以在程序中使用 <code>getopt</code> 來讀取命令列短選項。</p><p>與其它 Unix 系統不同的是，Linux 上的 <code>getopt</code> 總是保證短選項出現在命令列參數的最前面。比如，用户輸入的是 <code>cat -E file -n</code>。<code>-E</code> 在最前面，<code>-n</code> 在文件名之後。如果使用 Linux 的 <code>getopt</code> 來處理，程序會認為用户輸入的是 <code>cat -E -n file</code>。這樣做可以使處理過程更順暢，因為 <code>getopt</code> 可以解析完所有短選項，剩下的文件名列表可以通過 <code>**argv</code> 來統一處理。</p><p>你可以這樣使用 <code>getopt</code>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int getopt(int argc, char **argv, char *optstring);</span></span></code></pre></div><p><code>optstring</code> 是由所有合法的選項字符組成的字符串。比如你的程序允許的選項是 <code>-E</code> 和 <code>-n</code>， 那麼 <code>optstring</code> 的值就是 <code>&quot;En&quot;</code>。</p><p>通常通過在循環中調用 <code>getopt</code> 來解析命令列選項。每次調用時 <code>getopt</code> 會返回找到的下一個短選項，如果遇到無法識別的選項則返回 <code>&#39;?&#39;</code>。當沒有更多短選項時它返回 <code>-1</code>，並且設置全局變量 <code>optind</code> 的值指向 <code>**argv</code> 中所有段選項之後的第一個元素。</p><p>下面看一個簡單的例子。這個演示程序沒有實現 <code>cat</code> 命令的所有選項，但它只是能夠解析命令列。每當發現一個合法的命令列選項，它就打印出相應的提示消息。在你自己的程序中，你可能會根據這些命令列選項執行變量賦值等者其它操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main(int argc, char **argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int i;</span></span>
<span class="line"><span>  int option;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* parse short options */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while ((option = getopt(argc, argv, &quot;bEnsTv&quot;)) != -1) {</span></span>
<span class="line"><span>    switch (option) {</span></span>
<span class="line"><span>    case &#39;b&#39;:</span></span>
<span class="line"><span>      puts(&quot;Put line numbers next to non-blank lines&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case &#39;E&#39;:</span></span>
<span class="line"><span>      puts(&quot;Show the ends of lines as $&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case &#39;n&#39;:</span></span>
<span class="line"><span>      puts(&quot;Put line numbers next to all lines&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case &#39;s&#39;:</span></span>
<span class="line"><span>      puts(&quot;Suppress printing repeated blank lines&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case &#39;T&#39;:</span></span>
<span class="line"><span>      puts(&quot;Show tabs as ^I&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case &#39;v&#39;:</span></span>
<span class="line"><span>      puts(&quot;Verbose&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    default:                          /* &#39;?&#39; */</span></span>
<span class="line"><span>      puts(&quot;What&#39;s that??&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* print the rest of the command line */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;------------------------------&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (i = optind; i &lt; argc; i++) {</span></span>
<span class="line"><span>    puts(argv[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>假如你把程序編譯為 <code>args</code>，你可以通過嘗試不同的命令列參數組合，來了解程序是怎麼解析短選項，以及是怎麼將其它的命令列參數留下來的。最簡單的例子是將所有的選項都放在最前面，就像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./args -b -T file1 file2</span></span>
<span class="line"><span>Put line numbers next to non-blank lines</span></span>
<span class="line"><span>Show tabs as ^I</span></span>
<span class="line"><span>------------------------------</span></span>
<span class="line"><span>file1</span></span>
<span class="line"><span>file2</span></span></code></pre></div><p>現在試試將兩個短選項合併使用的效果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./args -bT file1 file2</span></span>
<span class="line"><span>Put line numbers next to non-blank lines</span></span>
<span class="line"><span>Show tabs as ^I</span></span>
<span class="line"><span>------------------------------</span></span>
<span class="line"><span>file1</span></span>
<span class="line"><span>file2</span></span></code></pre></div><p>如果有必要的話，<code>getopt</code>可以對命令列參數進行重排：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./args -E file1 file2 -T</span></span>
<span class="line"><span>Show the ends of lines as $</span></span>
<span class="line"><span>Show tabs as ^I</span></span>
<span class="line"><span>------------------------------</span></span>
<span class="line"><span>file1</span></span>
<span class="line"><span>file2</span></span></code></pre></div><p>如果用户輸入了錯誤的短選項，<code>getopt</code> 會打印一條消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./args -s -an file1 file2</span></span>
<span class="line"><span>Suppress printing repeated blank lines</span></span>
<span class="line"><span>./args: invalid option -- &#39;a&#39;</span></span>
<span class="line"><span>What&#39;s that??</span></span>
<span class="line"><span>Put line numbers next to all lines</span></span>
<span class="line"><span>------------------------------</span></span>
<span class="line"><span>file1</span></span>
<span class="line"><span>file2</span></span></code></pre></div><h3 id="下載速查表" tabindex="-1">下載速查表 <a class="header-anchor" href="#下載速查表" aria-label="Permalink to “下載速查表”">​</a></h3><p><code>getopt</code> 還有更多的功能。例如，通過設計 <code>-s string</code> 或 <code>-f file</code> 這樣的命令列語法規則，可以讓短選項擁有自己的二級選項。你也可以告訴 <code>getopt</code> 在遇到無法識別的選項時不顯示錯誤信息。使用 <code>man 3 getopt</code> 命令查看 <code>getopt(3)</code> 手冊可以瞭解 <code>getopt</code> 的更多功能。</p>`,44)),a("p",null,[s[1]||(s[1]=n("如果你需要 ",-1)),s[2]||(s[2]=a("code",null,"getopt()",-1)),s[3]||(s[3]=n(" 和 ",-1)),s[4]||(s[4]=a("code",null,"getopt_long()",-1)),s[5]||(s[5]=n("的使用語法和結構上的提示，可以 ",-1)),e(p,{href:"https://opensource.com/downloads/c-getopt-cheat-sheet"},{default:i(()=>[...s[0]||(s[0]=[n("下載我製作的速查表",-1)])]),_:1}),s[6]||(s[6]=n("。它提供了最小可行代碼，並列出了你需要了解的一些全局變量的含義。速查表的一面是 ",-1)),s[7]||(s[7]=a("code",null,"getopt()",-1)),s[8]||(s[8]=n(" 的用法，另一面是 ",-1)),s[9]||(s[9]=a("code",null,"getopt_long()",-1)),s[10]||(s[10]=n("的用法。",-1))]),s[27]||(s[27]=a("hr",null,null,-1)),a("p",null,[s[12]||(s[12]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/21/8/short-option-parsing-c"},{default:i(()=>[...s[11]||(s[11]=[n("https://opensource.com/article/21/8/short-option-parsing-c",-1)])]),_:1})]),a("p",null,[s[17]||(s[17]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/jim-hall"},{default:i(()=>[...s[13]||(s[13]=[n("Jim Hall",-1)])]),_:1}),s[18]||(s[18]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[14]||(s[14]=[n("lujun9972",-1)])]),_:1}),s[19]||(s[19]=n(" 譯者：",-1)),e(p,{href:"https://github.com/toknow-gh"},{default:i(()=>[...s[15]||(s[15]=[n("toknow-gh",-1)])]),_:1}),s[20]||(s[20]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[16]||(s[16]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[23]||(s[23]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[n("LCTT",-1)])]),_:1}),s[24]||(s[24]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[n("Linux中國",-1)])]),_:1}),s[25]||(s[25]=n(" 榮譽推出",-1))])])}const x=l(r,[["render",g]]);export{v as __pageData,x as default};
