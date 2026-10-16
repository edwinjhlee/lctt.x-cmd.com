import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"在 Go 中复制文件的三种方法 | LCTT x X-CMD","titleTemplate":false,"description":"在 Go 中复制文件的三种方法 | LCTT (202205) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Go 中复制文件的三种方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Go 中复制文件的三种方法 | LCTT (202205) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202205/20180625 3 ways to copy files in Go","title":"在 Go 中复制文件的三种方法","tag":"202205","desc":""},"relativePath":"202205/20180625 3 ways to copy files in Go.md","filePath":"[post].md"}'),c={name:"202205/20180625 3 ways to copy files in Go.md"};function u(g,s,f,m,k,b){const p=o("Link");return r(),d("div",null,[s[37]||(s[37]=a("h1",{id:"在-go-中复制文件的三种方法",tabindex:"-1"},[n("在 Go 中复制文件的三种方法 "),a("a",{class:"header-anchor",href:"#在-go-中复制文件的三种方法","aria-label":"Permalink to “在 Go 中复制文件的三种方法”"},"​")],-1)),s[38]||(s[38]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202205/31/153413kcrth9v8c93r5u8e.jpg",alt:""})],-1)),s[39]||(s[39]=a("blockquote",null,[a("p",null,"本文是 Go 系列的第三篇文章，我将介绍三种最流行的复制文件的方法。")],-1)),a("p",null,[s[1]||(s[1]=n("本文将介绍展示如何使用 ",-1)),e(p,{href:"https://golang.org/"},{default:i(()=>[...s[0]||(s[0]=[n("Go 编程语言",-1)])]),_:1}),s[2]||(s[2]=n(" 来复制文件。在 Go 中复制文件的方法有很多，我只介绍三种最常见的：使用 Go 库中的 ",-1)),s[3]||(s[3]=a("code",null,"io.Copy()",-1)),s[4]||(s[4]=n(" 函数调用、一次读取输入文件并将其写入另一个文件，以及使用缓冲区一块块地复制文件。",-1))]),s[40]||(s[40]=l(`<h3 id="方法一-使用-io-copy" tabindex="-1">方法一：使用 io.Copy() <a class="header-anchor" href="#方法一-使用-io-copy" aria-label="Permalink to “方法一：使用 io.Copy()”">​</a></h3><p>第一种方法就是使用 Go 标准库的 <code>io.Copy()</code> 函数。你可以在 <code>copy()</code> 函数的代码中找到它的实现逻辑，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func copy(src, dst string) (int64, error) {</span></span>
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
<span class="line"><span>  }</span></span></code></pre></div><p>首先，上述代码做了两个判断，以便确定它可以被打开读取：一是判断将要复制的文件是否存在（<code>os.Stat(src)</code>），二是判断它是否为常规文件（<code>sourceFileStat.Mode().IsRegular()</code>）。剩下的所有工作都由 <code>io.Copy(destination, source)</code> 这行代码来完成。<code>io.Copy()</code> 函数执行结束后，会返回复制的字节数和复制过程中发生的第一条错误消息。在 Go 中，如果没有错误消息，错误变量的值就为 <code>nil</code>。</p>`,4)),a("p",null,[s[6]||(s[6]=n("你可以在 ",-1)),e(p,{href:"https://golang.org/pkg/io/"},{default:i(()=>[...s[5]||(s[5]=[n("io 包",-1)])]),_:1}),s[7]||(s[7]=n(" 的文档页面了解有关 ",-1)),s[8]||(s[8]=a("code",null,"io.Copy()",-1)),s[9]||(s[9]=n(" 函数的更多信息。",-1))]),s[41]||(s[41]=l(`<p>运行 <code>cp1.go</code> 将产生以下输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run cp1.go</span></span>
<span class="line"><span>Please provide two command line arguments!</span></span>
<span class="line"><span>$ go run cp1.go fileCP.txt /tmp/fileCPCOPY</span></span>
<span class="line"><span>Copied 3826 bytes!</span></span>
<span class="line"><span>$ diff fileCP.txt /tmp/fileCPCOPY</span></span></code></pre></div><p>这个方法已经非常简单了，不过它没有为开发者提供灵活性。这并不总是一件坏事，但是，有些时候，开发者可能会需要/想要告诉程序该如何读取文件。</p><h3 id="方法二-使用-ioutil-writefile-和-ioutil-readfile" tabindex="-1">方法二：使用 ioutil.WriteFile() 和 ioutil.ReadFile() <a class="header-anchor" href="#方法二-使用-ioutil-writefile-和-ioutil-readfile" aria-label="Permalink to “方法二：使用 ioutil.WriteFile() 和 ioutil.ReadFile()”">​</a></h3><p>复制文件的第二种方法是使用 <code>ioutil.ReadFile()</code> 和 <code>ioutil.WriteFile()</code> 函数。第一个函数用于将整个文件的内容，一次性地读入到某个内存中的字节切片里；第二个函数则用于将字节切片的内容写入到一个磁盘文件中。</p><p>实现代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>input, err := ioutil.ReadFile(sourceFile)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>上述代码包括了两个 <code>if</code> 代码块（嗯，用 Go 写程序就是这样的），程序的实际功能其实体现在 <code>ioutil.ReadFile()</code> 和 <code>ioutil.WriteFile()</code> 这两行代码中。</p><p>运行 <code>cp2.go</code>，你会得到下面的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run cp2.go</span></span>
<span class="line"><span>Please provide two command line arguments!</span></span>
<span class="line"><span>$ go run cp2.go fileCP.txt /tmp/copyFileCP</span></span>
<span class="line"><span>$ diff fileCP.txt /tmp/copyFileCP</span></span></code></pre></div><p>请注意，虽然这种方法能够实现文件复制，但它在复制大文件时的效率可能不高。这是因为当文件很大时，<code>ioutil.ReadFile()</code> 返回的字节切片会很大。</p><h3 id="方法三-使用-os-read-和-os-write" tabindex="-1">方法三：使用 os.Read() 和 os.Write() <a class="header-anchor" href="#方法三-使用-os-read-和-os-write" aria-label="Permalink to “方法三：使用 os.Read() 和 os.Write()”">​</a></h3><p>在 Go 中复制文件的第三种方法就是下面要介绍的 <code>cp3.go</code>。它接受三个参数：输入文件名、输出文件名和缓冲区大小。</p><p><code>cp3.go</code> 最重要的部分位于以下 <code>for</code> 循环中，你可以在 <code>copy()</code> 函数中找到它，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>buf := make([]byte, BUFFERSIZE)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>该方法使用 <code>os.Read()</code> 将输入文件的一小部分读入名为 <code>buf</code> 的缓冲区，然后使用 <code>os.Write()</code> 将该缓冲区的内容写入文件。当读取出错或到达文件末尾（<code>io.EOF</code>）时，复制过程将停止。</p><p>运行 <code>cp3.go</code>，你会得到下面的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run cp3.go</span></span>
<span class="line"><span>usage: cp3 source destination BUFFERSIZE</span></span>
<span class="line"><span>$ go run cp3.go fileCP.txt /tmp/buf10 10</span></span>
<span class="line"><span>Copying fileCP.txt to /tmp/buf10</span></span>
<span class="line"><span>$ go run cp3.go fileCP.txt /tmp/buf20 20</span></span>
<span class="line"><span>Copying fileCP.txt to /tmp/buf20</span></span></code></pre></div><p>在接下来的基准测试中，你会发现，缓冲区的大小极大地影响了 <code>cp3.go</code> 的性能。</p><h3 id="运行基准测试" tabindex="-1">运行基准测试 <a class="header-anchor" href="#运行基准测试" aria-label="Permalink to “运行基准测试”">​</a></h3><p>在本文的最后一部分，我将尝试比较这三个程序以及 <code>cp3.go</code> 在不同缓冲区大小下的性能（使用 <code>time(1)</code> 命令行工具）。</p><p>以下输出显示了复制 500MB 大小的文件时，<code>cp1.go</code>、<code>cp2.go</code> 和 <code>cp3.go</code> 的性能对比：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l INPUT</span></span>
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
<span class="line"><span>sys     0m0.486s</span></span></code></pre></div><p>我们可以看出，这三个程序的性能非常接近，这意味着 Go 标准库函数的实现非常聪明、经过了充分优化。</p><p>现在，让我们测试一下缓冲区大小对 <code>cp3.go</code> 的性能有什么影响吧！执行 <code>cp3.go</code>，并分别指定缓冲区大小为 10、20 和 1000 字节，在一台运行很快的机器上复制 500MB 文件，得到的结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l INPUT</span></span>
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
<span class="line"><span>sys     0m3.986s</span></span></code></pre></div><p>我们可以发现，缓冲区越大，<code>cp3.go</code> 运行得就越快，这或多或少是符合预期的。此外，使用小于 20 字节的缓冲区来复制大文件会非常缓慢，应该避免。</p>`,27)),a("p",null,[s[11]||(s[11]=n("你可以在 ",-1)),e(p,{href:"https://github.com/mactsouk/opensource.com"},{default:i(()=>[...s[10]||(s[10]=[n("GitHub",-1)])]),_:1}),s[12]||(s[12]=n(" 找到 ",-1)),s[13]||(s[13]=a("code",null,"cp1.go",-1)),s[14]||(s[14]=n("、",-1)),s[15]||(s[15]=a("code",null,"cp2.go",-1)),s[16]||(s[16]=n(" 和 ",-1)),s[17]||(s[17]=a("code",null,"cp3.go",-1)),s[18]||(s[18]=n(" 的 Go 代码。",-1))]),a("p",null,[s[20]||(s[20]=n("如果你有任何问题或反馈，请在（原文）下方发表评论或在 ",-1)),e(p,{href:"https://twitter.com/mactsouk"},{default:i(()=>[...s[19]||(s[19]=[n("Twitter",-1)])]),_:1}),s[21]||(s[21]=n(" 上与我（原作者）联系。",-1))]),s[42]||(s[42]=a("hr",null,null,-1)),a("p",null,[s[23]||(s[23]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/18/6/copying-files-go"},{default:i(()=>[...s[22]||(s[22]=[n("https://opensource.com/article/18/6/copying-files-go",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/mtsouk"},{default:i(()=>[...s[24]||(s[24]=[n("Mihalis Tsoukalos",-1)])]),_:1}),s[29]||(s[29]=n(" 选题：",-1)),e(p,{href:"https://github.com/lkxed"},{default:i(()=>[...s[25]||(s[25]=[n("lkxed",-1)])]),_:1}),s[30]||(s[30]=n(" 译者：",-1)),e(p,{href:"https://github.com/lkxed"},{default:i(()=>[...s[26]||(s[26]=[n("lkxed",-1)])]),_:1}),s[31]||(s[31]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[27]||(s[27]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[32]||(s[32]=[n("LCTT",-1)])]),_:1}),s[35]||(s[35]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[33]||(s[33]=[n("Linux中国",-1)])]),_:1}),s[36]||(s[36]=n(" 荣誉推出",-1))])])}const P=t(c,[["render",u]]);export{C as __pageData,P as default};
