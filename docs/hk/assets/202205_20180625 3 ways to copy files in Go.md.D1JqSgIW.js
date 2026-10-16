import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"在 Go 中複製文件的三種方法 | LCTT x X-CMD","titleTemplate":false,"description":"在 Go 中複製文件的三種方法 | LCTT (202205) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Go 中複製文件的三種方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Go 中複製文件的三種方法 | LCTT (202205) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202205/20180625 3 ways to copy files in Go","title":"在 Go 中複製文件的三種方法","tag":"202205","desc":""},"relativePath":"202205/20180625 3 ways to copy files in Go.md","filePath":"[post].md"}'),c={name:"202205/20180625 3 ways to copy files in Go.md"};function u(g,s,f,m,k,b){const p=o("Link");return r(),d("div",null,[s[37]||(s[37]=a("h1",{id:"在-go-中複製文件的三種方法",tabindex:"-1"},[n("在 Go 中複製文件的三種方法 "),a("a",{class:"header-anchor",href:"#在-go-中複製文件的三種方法","aria-label":"Permalink to “在 Go 中複製文件的三種方法”"},"​")],-1)),s[38]||(s[38]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202205/31/153413kcrth9v8c93r5u8e.jpg",alt:""})],-1)),s[39]||(s[39]=a("blockquote",null,[a("p",null,"本文是 Go 系列的第三篇文章，我將介紹三種最流行的複製文件的方法。")],-1)),a("p",null,[s[1]||(s[1]=n("本文將介紹展示如何使用 ",-1)),e(p,{href:"https://golang.org/"},{default:i(()=>[...s[0]||(s[0]=[n("Go 編程語言",-1)])]),_:1}),s[2]||(s[2]=n(" 來複制文件。在 Go 中複製文件的方法有很多，我只介紹三種最常見的：使用 Go 庫中的 ",-1)),s[3]||(s[3]=a("code",null,"io.Copy()",-1)),s[4]||(s[4]=n(" 函數調用、一次讀取輸入文件並將其寫入另一個文件，以及使用緩衝區一塊塊地複製文件。",-1))]),s[40]||(s[40]=l(`<h3 id="方法一-使用-io-copy" tabindex="-1">方法一：使用 io.Copy() <a class="header-anchor" href="#方法一-使用-io-copy" aria-label="Permalink to “方法一：使用 io.Copy()”">​</a></h3><p>第一種方法就是使用 Go 標準庫的 <code>io.Copy()</code> 函數。你可以在 <code>copy()</code> 函數的代碼中找到它的實現邏輯，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func copy(src, dst string) (int64, error) {</span></span>
<span class="line"><span>  sourceFileStat, err := os.Stat(src)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return 0, err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if !sourceFileStat.Mode().IsRegular() {</span></span>
<span class="line"><span>    return 0, fmt.Errorf(&quot;%s is not a regular file&quot;, src)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  source, err := os.Open(src)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return 0, err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  defer source.Close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  destination, err := os.Create(dst)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return 0, err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  defer destination.Close()</span></span>
<span class="line"><span>  nBytes, err := io.Copy(destination, source)</span></span>
<span class="line"><span>    return nBytes, err</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>首先，上述代碼做了兩個判斷，以便確定它可以被打開讀取：一是判斷將要複製的文件是否存在（<code>os.Stat(src)</code>），二是判斷它是否為常規文件（<code>sourceFileStat.Mode().IsRegular()</code>）。剩下的所有工作都由 <code>io.Copy(destination, source)</code> 這行代碼來完成。<code>io.Copy()</code> 函數執行結束後，會返回複製的字節數和複製過程中發生的第一條錯誤消息。在 Go 中，如果沒有錯誤消息，錯誤變量的值就為 <code>nil</code>。</p>`,4)),a("p",null,[s[6]||(s[6]=n("你可以在 ",-1)),e(p,{href:"https://golang.org/pkg/io/"},{default:i(()=>[...s[5]||(s[5]=[n("io 包",-1)])]),_:1}),s[7]||(s[7]=n(" 的文檔頁面瞭解有關 ",-1)),s[8]||(s[8]=a("code",null,"io.Copy()",-1)),s[9]||(s[9]=n(" 函數的更多信息。",-1))]),s[41]||(s[41]=l(`<p>運行 <code>cp1.go</code> 將產生以下輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run cp1.go</span></span>
<span class="line"><span>Please provide two command line arguments!</span></span>
<span class="line"><span>$ go run cp1.go fileCP.txt /tmp/fileCPCOPY</span></span>
<span class="line"><span>Copied 3826 bytes!</span></span>
<span class="line"><span>$ diff fileCP.txt /tmp/fileCPCOPY</span></span></code></pre></div><p>這個方法已經非常簡單了，不過它沒有為開發者提供靈活性。這並不總是一件壞事，但是，有些時候，開發者可能會需要/想要告訴程序該如何讀取文件。</p><h3 id="方法二-使用-ioutil-writefile-和-ioutil-readfile" tabindex="-1">方法二：使用 ioutil.WriteFile() 和 ioutil.ReadFile() <a class="header-anchor" href="#方法二-使用-ioutil-writefile-和-ioutil-readfile" aria-label="Permalink to “方法二：使用 ioutil.WriteFile() 和 ioutil.ReadFile()”">​</a></h3><p>複製文件的第二種方法是使用 <code>ioutil.ReadFile()</code> 和 <code>ioutil.WriteFile()</code> 函數。第一個函數用於將整個文件的內容，一次性地讀入到某個內存中的字節切片裏；第二個函數則用於將字節切片的內容寫入到一個磁盤文件中。</p><p>實現代碼如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>input, err := ioutil.ReadFile(sourceFile)</span></span>
<span class="line"><span>if err != nil {</span></span>
<span class="line"><span>  fmt.Println(err)</span></span>
<span class="line"><span>  return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>err = ioutil.WriteFile(destinationFile, input, 0644)</span></span>
<span class="line"><span>if err != nil {</span></span>
<span class="line"><span>  fmt.Println(&quot;Error creating&quot;, destinationFile)</span></span>
<span class="line"><span>  fmt.Println(err)</span></span>
<span class="line"><span>  return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上述代碼包括了兩個 <code>if</code> 代碼塊（嗯，用 Go 寫程序就是這樣的），程序的實際功能其實體現在 <code>ioutil.ReadFile()</code> 和 <code>ioutil.WriteFile()</code> 這兩行代碼中。</p><p>運行 <code>cp2.go</code>，你會得到下面的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run cp2.go</span></span>
<span class="line"><span>Please provide two command line arguments!</span></span>
<span class="line"><span>$ go run cp2.go fileCP.txt /tmp/copyFileCP</span></span>
<span class="line"><span>$ diff fileCP.txt /tmp/copyFileCP</span></span></code></pre></div><p>請注意，雖然這種方法能夠實現文件複製，但它在複製大文件時的效率可能不高。這是因為當文件很大時，<code>ioutil.ReadFile()</code> 返回的字節切片會很大。</p><h3 id="方法三-使用-os-read-和-os-write" tabindex="-1">方法三：使用 os.Read() 和 os.Write() <a class="header-anchor" href="#方法三-使用-os-read-和-os-write" aria-label="Permalink to “方法三：使用 os.Read() 和 os.Write()”">​</a></h3><p>在 Go 中複製文件的第三種方法就是下面要介紹的 <code>cp3.go</code>。它接受三個參數：輸入文件名、輸出文件名和緩衝區大小。</p><p><code>cp3.go</code> 最重要的部分位於以下 <code>for</code> 循環中，你可以在 <code>copy()</code> 函數中找到它，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>buf := make([]byte, BUFFERSIZE)</span></span>
<span class="line"><span>for {</span></span>
<span class="line"><span>  n, err := source.Read(buf)</span></span>
<span class="line"><span>  if err != nil &amp;&amp; err != io.EOF {</span></span>
<span class="line"><span>    return err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if n == 0 {</span></span>
<span class="line"><span>    break</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if _, err := destination.Write(buf[:n]); err != nil {</span></span>
<span class="line"><span>    return err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>該方法使用 <code>os.Read()</code> 將輸入文件的一小部分讀入名為 <code>buf</code> 的緩衝區，然後使用 <code>os.Write()</code> 將該緩衝區的內容寫入文件。當讀取出錯或到達文件末尾（<code>io.EOF</code>）時，複製過程將停止。</p><p>運行 <code>cp3.go</code>，你會得到下面的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run cp3.go</span></span>
<span class="line"><span>usage: cp3 source destination BUFFERSIZE</span></span>
<span class="line"><span>$ go run cp3.go fileCP.txt /tmp/buf10 10</span></span>
<span class="line"><span>Copying fileCP.txt to /tmp/buf10</span></span>
<span class="line"><span>$ go run cp3.go fileCP.txt /tmp/buf20 20</span></span>
<span class="line"><span>Copying fileCP.txt to /tmp/buf20</span></span></code></pre></div><p>在接下來的基準測試中，你會發現，緩衝區的大小極大地影響了 <code>cp3.go</code> 的性能。</p><h3 id="運行基準測試" tabindex="-1">運行基準測試 <a class="header-anchor" href="#運行基準測試" aria-label="Permalink to “運行基準測試”">​</a></h3><p>在本文的最後一部分，我將嘗試比較這三個程序以及 <code>cp3.go</code> 在不同緩衝區大小下的性能（使用 <code>time(1)</code> 命令列工具）。</p><p>以下輸出顯示了複製 500MB 大小的文件時，<code>cp1.go</code>、<code>cp2.go</code> 和 <code>cp3.go</code> 的性能對比：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l INPUT</span></span>
<span class="line"><span>-rw-r--r--  1 mtsouk  staff  512000000 Jun  5 09:39 INPUT</span></span>
<span class="line"><span>$ time go run cp1.go INPUT /tmp/cp1</span></span>
<span class="line"><span>Copied 512000000 bytes!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.980s</span></span>
<span class="line"><span>user    0m0.219s</span></span>
<span class="line"><span>sys     0m0.719s</span></span>
<span class="line"><span>$ time go run cp2.go INPUT /tmp/cp2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m1.139s</span></span>
<span class="line"><span>user    0m0.196s</span></span>
<span class="line"><span>sys     0m0.654s</span></span>
<span class="line"><span>$ time go run cp3.go INPUT /tmp/cp3 1000000</span></span>
<span class="line"><span>Copying INPUT to /tmp/cp3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m1.025s</span></span>
<span class="line"><span>user    0m0.195s</span></span>
<span class="line"><span>sys     0m0.486s</span></span></code></pre></div><p>我們可以看出，這三個程序的性能非常接近，這意味着 Go 標準庫函數的實現非常聰明、經過了充分優化。</p><p>現在，讓我們測試一下緩衝區大小對 <code>cp3.go</code> 的性能有什麼影響吧！執行 <code>cp3.go</code>，並分別指定緩衝區大小為 10、20 和 1000 字節，在一台運行很快的機器上覆制 500MB 文件，得到的結果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l INPUT</span></span>
<span class="line"><span>-rw-r--r--  1 mtsouk  staff  512000000 Jun  5 09:39 INPUT</span></span>
<span class="line"><span>$ time go run cp3.go INPUT /tmp/buf10 10</span></span>
<span class="line"><span>Copying INPUT to /tmp/buf10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    6m39.721s</span></span>
<span class="line"><span>user    1m18.457s</span></span>
<span class="line"><span>sys 5m19.186s</span></span>
<span class="line"><span>$ time go run cp3.go INPUT /tmp/buf20 20</span></span>
<span class="line"><span>Copying INPUT to /tmp/buf20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    3m20.819s</span></span>
<span class="line"><span>user    0m39.444s</span></span>
<span class="line"><span>sys 2m40.380s</span></span>
<span class="line"><span>$ time go run cp3.go INPUT /tmp/buf1000 1000</span></span>
<span class="line"><span>Copying INPUT to /tmp/buf1000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m4.916s</span></span>
<span class="line"><span>user    0m1.001s</span></span>
<span class="line"><span>sys     0m3.986s</span></span></code></pre></div><p>我們可以發現，緩衝區越大，<code>cp3.go</code> 運行得就越快，這或多或少是符合預期的。此外，使用小於 20 字節的緩衝區來複制大文件會非常緩慢，應該避免。</p>`,27)),a("p",null,[s[11]||(s[11]=n("你可以在 ",-1)),e(p,{href:"https://github.com/mactsouk/opensource.com"},{default:i(()=>[...s[10]||(s[10]=[n("GitHub",-1)])]),_:1}),s[12]||(s[12]=n(" 找到 ",-1)),s[13]||(s[13]=a("code",null,"cp1.go",-1)),s[14]||(s[14]=n("、",-1)),s[15]||(s[15]=a("code",null,"cp2.go",-1)),s[16]||(s[16]=n(" 和 ",-1)),s[17]||(s[17]=a("code",null,"cp3.go",-1)),s[18]||(s[18]=n(" 的 Go 代碼。",-1))]),a("p",null,[s[20]||(s[20]=n("如果你有任何問題或反饋，請在（原文）下方發表評論或在 ",-1)),e(p,{href:"https://twitter.com/mactsouk"},{default:i(()=>[...s[19]||(s[19]=[n("Twitter",-1)])]),_:1}),s[21]||(s[21]=n(" 上與我（原作者）聯繫。",-1))]),s[42]||(s[42]=a("hr",null,null,-1)),a("p",null,[s[23]||(s[23]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/18/6/copying-files-go"},{default:i(()=>[...s[22]||(s[22]=[n("https://opensource.com/article/18/6/copying-files-go",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/mtsouk"},{default:i(()=>[...s[24]||(s[24]=[n("Mihalis Tsoukalos",-1)])]),_:1}),s[29]||(s[29]=n(" 選題：",-1)),e(p,{href:"https://github.com/lkxed"},{default:i(()=>[...s[25]||(s[25]=[n("lkxed",-1)])]),_:1}),s[30]||(s[30]=n(" 譯者：",-1)),e(p,{href:"https://github.com/lkxed"},{default:i(()=>[...s[26]||(s[26]=[n("lkxed",-1)])]),_:1}),s[31]||(s[31]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[27]||(s[27]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[32]||(s[32]=[n("LCTT",-1)])]),_:1}),s[35]||(s[35]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[33]||(s[33]=[n("Linux中國",-1)])]),_:1}),s[36]||(s[36]=n(" 榮譽推出",-1))])])}const P=t(c,[["render",u]]);export{C as __pageData,P as default};
