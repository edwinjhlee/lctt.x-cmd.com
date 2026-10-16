import{_ as o,a0 as t,w as d,s as c,ao as i,I as e,x as a,a1 as l,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"我最喜歡的 Go 構建選項 | LCTT x X-CMD","titleTemplate":false,"description":"我最喜歡的 Go 構建選項 | LCTT (202204) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"我最喜歡的 Go 構建選項 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"我最喜歡的 Go 構建選項 | LCTT (202204) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202204/20220414 My favorite build options for Go","title":"我最喜歡的 Go 構建選項","tag":"202204","desc":""},"relativePath":"202204/20220414 My favorite build options for Go.md","filePath":"[post].md"}'),h={name:"202204/20220414 My favorite build options for Go.md"};function r(g,s,b,u,k,f){const n=t("Link");return d(),c("div",null,[s[21]||(s[21]=i('<h1 id="我最喜歡的-go-構建選項" tabindex="-1">我最喜歡的 Go 構建選項 <a class="header-anchor" href="#我最喜歡的-go-構建選項" aria-label="Permalink to “我最喜歡的 Go 構建選項”">​</a></h1><blockquote><p>這些方便的 Go 構建選項可以幫助你更好地理解 Go 的編譯過程。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202204/30/172121exam5k8vx45kzk7p.jpg" alt=""></p><p>學習一門新的編程語言最令人欣慰的部分之一，就是最終運行了一個可執行文件，並獲得預期的輸出。當我開始學習 Go 這門編程語言時，我先是閲讀一些示例程序來熟悉語法，然後是嘗試寫一些小的測試程序。隨着時間的推移，這種方法幫助我熟悉了編譯和構建程序的過程。</p><p>Go 的構建選項提供了更好地控制構建過程的方法。它們還可以提供額外的信息，幫助把這個過程分成更小的部分。在這篇文章中，我將演示我所使用的一些選項。注意：我使用的“<ruby>構建<rt>build</rt></ruby>”和“<ruby>編譯<rt>compile</rt></ruby>”這兩個詞是同一個意思。</p><h3 id="開始使用-go" tabindex="-1">開始使用 Go <a class="header-anchor" href="#開始使用-go" aria-label="Permalink to “開始使用 Go”">​</a></h3>',6)),e("p",null,[s[1]||(s[1]=a("我使用的 Go 版本是 1.16.7。但是，這裏給出的命令應該也能在最新的版本上運行。如果你沒有安裝 Go，你可以從 ",-1)),l(n,{href:"https://go.dev/doc/install"},{default:p(()=>[...s[0]||(s[0]=[a("Go 官網",-1)])]),_:1}),s[2]||(s[2]=a(" 上下載它，並按照説明進行安裝。你可以通過打開一個命令提示符，並鍵入下面的命令來驗證你所安裝的版本：",-1))]),s[22]||(s[22]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go version</span></span></code></pre></div><p>你應該會得到類似下面這樣的輸出，具體取決於你安裝的版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>go version go1.16.7 linux/amd64</span></span></code></pre></div><h3 id="基本的-go-程序的編譯和執行方法" tabindex="-1">基本的 Go 程序的編譯和執行方法 <a class="header-anchor" href="#基本的-go-程序的編譯和執行方法" aria-label="Permalink to “基本的 Go 程序的編譯和執行方法”">​</a></h3><p>我將從一個在屏幕上簡單打印 “Hello World” 的 Go 程序示例開始，就像下面這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat hello.go</span></span>
<span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    fmt.Println(&quot;Hello World&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在討論更高級的選項之前，我將解釋如何編譯這個 Go 示例程序。我使用了 <code>build</code> 命令，後面跟着 Go 程序的源文件名，本例中是 <code>hello.go</code>，就像下面這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build hello.go</span></span></code></pre></div><p>如果一切工作正常，你應該看到在你的當前目錄下創建了一個名為 <code>hello</code> 的可執行文件。你可以通過使用 <code>file</code> 命令驗證它是 ELF 二進制可執行格式（在 Linux 平台上）。你也可以直接執行它，你會看到它輸出 “Hello World”。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>hello  hello.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ file ./hello</span></span>
<span class="line"><span>./hello: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked, not stripped</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ./hello</span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><p>Go 提供了一個方便的 <code>run</code> 命令，以便你只是想看看程序是否能正常工作，並獲得預期的輸出，而不想生成一個最終的二進制文件。請記住，即使你在當前目錄中沒有看到可執行文件，Go 仍然會在某個地方編譯並生成可執行文件並運行它，然後把它從系統中刪除。我將在本文後面的章節中解釋。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run hello.go</span></span>
<span class="line"><span>Hello World</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>hello.go</span></span></code></pre></div><h3 id="更多細節" tabindex="-1">更多細節 <a class="header-anchor" href="#更多細節" aria-label="Permalink to “更多細節”">​</a></h3><p>上面的命令就像一陣風一樣，一下子就運行完了我的程序。然而，如果你想知道 Go 在編譯這些程序的過程中做了什麼，Go 提供了一個 <code>-x</code> 選項，它可以打印出 Go 為產生這個可執行文件所做的一切。</p><p>簡單看一下你就會發現，Go 在 <code>/tmp</code> 內創建了一個臨時工作目錄，並生成了可執行文件，然後把它移到了 Go 源程序所在的當前目錄。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build -x hello.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORK=/tmp/go-build1944767317</span></span>
<span class="line"><span>mkdir -p $WORK/b001/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; snip &gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p $WORK/b001/exe/</span></span>
<span class="line"><span>cd .</span></span>
<span class="line"><span>/usr/lib/golang/pkg/tool/linux_amd64/link -o $WORK \\</span></span>
<span class="line"><span>/b001/exe/a.out -importcfg $WORK/b001 \\</span></span>
<span class="line"><span>/importcfg.link -buildmode=exe -buildid=K26hEYzgDkqJjx2Hf-wz/\\</span></span>
<span class="line"><span>nDueg0kBjIygx25rYwbK/W-eJaGIOdPEWgwC6o546 \\</span></span>
<span class="line"><span>/K26hEYzgDkqJjx2Hf-wz -extld=gcc /root/.cache/go-build /cc \\</span></span>
<span class="line"><span>/cc72cb2f4fbb61229885fc434995964a7a4d6e10692a23cc0ada6707c5d3435b-d</span></span>
<span class="line"><span>/usr/lib/golang/pkg/tool/linux_amd64/buildid -w $WORK \\</span></span>
<span class="line"><span>/b001/exe/a.out # internal</span></span>
<span class="line"><span>mv $WORK/b001/exe/a.out hello</span></span>
<span class="line"><span>rm -r $WORK/b001/</span></span></code></pre></div><p>這有助於解決在程序運行後卻在當前目錄下沒有生成可執行文件的謎團。使用 <code>-x</code> 顯示可執行文件確實在 <code>/tmp</code> 工作目錄下創建並被執行了。然而，與 <code>build</code> 命令不同的是，可執行文件並沒有移動到當前目錄，這使得看起來沒有可執行文件被創建。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run -x hello.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p $WORK/b001/exe/</span></span>
<span class="line"><span>cd .</span></span>
<span class="line"><span>/usr/lib/golang/pkg/tool/linux_amd64/link -o $WORK/b001 \\</span></span>
<span class="line"><span>/exe/hello -importcfg $WORK/b001/importcfg.link -s -w -buildmode=exe -buildid=hK3wnAP20DapUDeuvAAS/E_TzkbzwXz6tM5dEC8Mx \\</span></span>
<span class="line"><span>/7HYBzuaDGVdaZwSMEWAa/hK3wnAP20DapUDeuvAAS -extld=gcc \\</span></span>
<span class="line"><span>/root/.cache/go-build/75/ \\</span></span>
<span class="line"><span>7531fcf5e48444eed677bfc5cda1276a52b73c62ebac3aa99da3c4094fa57dc3-d</span></span>
<span class="line"><span>$WORK/b001/exe/hello</span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><h3 id="模仿編譯而不產生可執行文件" tabindex="-1">模仿編譯而不產生可執行文件 <a class="header-anchor" href="#模仿編譯而不產生可執行文件" aria-label="Permalink to “模仿編譯而不產生可執行文件”">​</a></h3><p>假設你不想編譯程序併產生一個實際的二進制文件，但你確實想看到這個過程中的所有步驟。你可以通過使用 <code>-n</code> 這個構建選項來做到這一點，該選項會打印出通常的執行步驟，而不會實際創建二進制文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build -n hello.go</span></span></code></pre></div><h3 id="保存臨時目錄" tabindex="-1">保存臨時目錄 <a class="header-anchor" href="#保存臨時目錄" aria-label="Permalink to “保存臨時目錄”">​</a></h3><p>很多工作都發生在 <code>/tmp</code> 工作目錄中，一旦可執行文件被創建和運行，它就會被刪除。但是如果你想看看哪些文件是在編譯過程中創建的呢？Go 提供了一個 <code>-work</code> 選項，它可以在編譯程序時使用。<code>-work</code> 選項除了運行程序外，還打印了工作目錄的路徑，但它並不會在這之後刪除工作目錄，所以你可以切換到該目錄，檢查在編譯過程中創建的所有文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run -work hello.go</span></span>
<span class="line"><span>WORK=/tmp/go-build3209320645</span></span>
<span class="line"><span>Hello World</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ find /tmp/go-build3209320645</span></span>
<span class="line"><span>/tmp/go-build3209320645</span></span>
<span class="line"><span>/tmp/go-build3209320645/b001</span></span>
<span class="line"><span>/tmp/go-build3209320645/b001/importcfg.link</span></span>
<span class="line"><span>/tmp/go-build3209320645/b001/exe</span></span>
<span class="line"><span>/tmp/go-build3209320645/b001/exe/hello</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ /tmp/go-build3209320645/b001/exe/hello</span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><h3 id="其他編譯選項" tabindex="-1">其他編譯選項 <a class="header-anchor" href="#其他編譯選項" aria-label="Permalink to “其他編譯選項”">​</a></h3><p>如果説，你想手動編譯程序，而不是使用 Go 的 <code>build</code> 和 <code>run</code> 這兩個方便的命令，最後得到一個可以直接由你的操作系統（這裏指 Linux）運行的可執行文件。那麼，你該怎麼做呢？這個過程可以分為兩部分：編譯和鏈接。你可以使用 <code>tool</code> 選項來看看它是如何工作的。</p><p>首先，使用 <code>tool compile</code> 命令產生結果的 <code>ar</code> 歸檔文件，它包含了 <code>.o</code> 中間文件。接下來，對這個 <code>hello.o</code> 文件執行 <code>tool link</code> 命令，產生最終的可執行文件，然後你就可以運行它了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go tool compile hello.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ file hello.o</span></span>
<span class="line"><span>hello.o: current ar archive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ar t hello.o</span></span>
<span class="line"><span>__.PKGDEF</span></span>
<span class="line"><span>_go_.o</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ go tool link -o hello hello.o</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ file hello</span></span>
<span class="line"><span>hello: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked, not stripped</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ./hello</span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><p>如果你想進一步查看基於 <code>hello.o</code> 文件產生可執行文件的鏈接過程，你可以使用 <code>-v</code> 選項，它會搜索每個 Go 可執行文件中包含的 <code>runtime.a</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go tool link -v -o hello hello.o</span></span>
<span class="line"><span>HEADER = -H5 -T0x401000 -R0x1000</span></span>
<span class="line"><span>searching for runtime.a in /usr/lib/golang/pkg/linux_amd64/runtime.a</span></span>
<span class="line"><span>82052 symbols, 18774 reachable</span></span>
<span class="line"><span>        1 package symbols, 1106 hashed symbols, 77185 non-package symbols, 3760 external symbols</span></span>
<span class="line"><span>81968 liveness data</span></span></code></pre></div><h3 id="交叉編譯選項" tabindex="-1">交叉編譯選項 <a class="header-anchor" href="#交叉編譯選項" aria-label="Permalink to “交叉編譯選項”">​</a></h3><p>現在我已經解釋了 Go 程序的編譯過程，接下來，我將演示 Go 如何通過在實際的 <code>build</code> 命令之前提供 <code>GOOS</code> 和 <code>GOARCH</code> 這兩個環境變量，來允許你構建針對不同硬件架構和操作系統的可執行文件。</p><p>這有什麼用呢？舉個例子，你會發現為 ARM（arch64）架構製作的可執行文件不能在英特爾（x86_64）架構上運行，而且會產生一個 Exec 格式錯誤。</p><p>下面的這些選項使得生成跨平台的二進制文件變得小菜一碟：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ GOOS=linux GOARCH=arm64 go build hello.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ file ./hello</span></span>
<span class="line"><span>./hello: ELF 64-bit LSB executable, ARM aarch64, version 1 (SYSV), statically linked, not stripped</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ./hello</span></span>
<span class="line"><span>bash: ./hello: cannot execute binary file: Exec format error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ uname -m</span></span>
<span class="line"><span>x86_64</span></span></code></pre></div>`,35)),e("p",null,[s[4]||(s[4]=a("你可以閲讀我之前的博文，以更多瞭解我在 ",-1)),l(n,{href:"https://opensource.com/article/21/1/go-cross-compiling"},{default:p(()=>[...s[3]||(s[3]=[a("使用 Go 進行交叉編譯",-1)])]),_:1}),s[5]||(s[5]=a(" 方面的經驗。",-1))]),s[23]||(s[23]=i(`<h3 id="查看底層彙編指令" tabindex="-1">查看底層彙編指令 <a class="header-anchor" href="#查看底層彙編指令" aria-label="Permalink to “查看底層彙編指令”">​</a></h3><p>源代碼並不會直接轉換為可執行文件，儘管它生成了一種中間彙編格式，然後最終被組裝為可執行文件。在 Go 中，這被映射為一種中間彙編格式，而不是底層硬件彙編指令。</p><p>要查看這個中間彙編格式，請在使用 <code>build</code> 命令時，提供 <code>-gcflags</code> 選項，後面跟着 <code>-S</code>。這個命令將會顯示使用到的彙編指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build -gcflags=&quot;-S&quot; hello.go</span></span>
<span class="line"><span># command-line-arguments</span></span>
<span class="line"><span>&quot;&quot;.main STEXT size=138 args=0x0 locals=0x58 funcid=0x0</span></span>
<span class="line"><span>        0x0000 00000 (/test/hello.go:5) TEXT    &quot;&quot;.main(SB), ABIInternal, $88-0</span></span>
<span class="line"><span>        0x0000 00000 (/test/hello.go:5) MOVQ    (TLS), CX</span></span>
<span class="line"><span>        0x0009 00009 (/test/hello.go:5) CMPQ    SP, 16(CX)</span></span>
<span class="line"><span>        0x000d 00013 (/test/hello.go:5) PCDATA  $0, $-2</span></span>
<span class="line"><span>        0x000d 00013 (/test/hello.go:5) JLS     128</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; snip &gt;&gt;</span></span></code></pre></div><p>你也可以使用 <code>objdump -s</code> 選項，來查看已經編譯好的可執行程序的彙編指令，就像下面這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>hello  hello.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ go tool objdump -s main.main hello</span></span>
<span class="line"><span>TEXT main.main(SB) /test/hello.go</span></span>
<span class="line"><span>  hello.go:5            0x4975a0                64488b0c25f8ffffff      MOVQ FS:0xfffffff8, CX                  </span></span>
<span class="line"><span>  hello.go:5            0x4975a9                483b6110                CMPQ 0x10(CX), SP                       </span></span>
<span class="line"><span>  hello.go:5            0x4975ad                7671                    JBE 0x497620                            </span></span>
<span class="line"><span>  hello.go:5            0x4975af                4883ec58                SUBQ $0x58, SP                          </span></span>
<span class="line"><span>  hello.go:6            0x4975d8                4889442448              MOVQ AX, 0x48(SP)                       </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; snip &gt;&gt;</span></span></code></pre></div><h3 id="分離二進制文件以減少其大小" tabindex="-1">分離二進制文件以減少其大小 <a class="header-anchor" href="#分離二進制文件以減少其大小" aria-label="Permalink to “分離二進制文件以減少其大小”">​</a></h3><p>Go 的二進制文件通常比較大。例如, 一個簡單的 “Hello World” 程序將會產生一個 1.9M 大小的二進制文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build hello.go</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ du -sh hello</span></span>
<span class="line"><span>1.9M    hello</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file hello</span></span>
<span class="line"><span>hello: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked, not stripped</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>為了減少生成的二進制文件的大小，你可以分離執行過程中不需要的信息。使用 <code>-ldflags</code> 和 <code>-s -w</code> 選項可以使生成的二進制文件略微變小為 1.3M。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build -ldflags=&quot;-s -w&quot; hello.go</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ du -sh hello</span></span>
<span class="line"><span>1.3M    hello</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file hello</span></span>
<span class="line"><span>hello: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked, stripped</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>我希望這篇文章向你介紹了一些方便的 Go 編譯選項，同時幫助了你更好地理解 Go 編譯過程。關於構建過程的其他信息和其他有趣的選項，請參考 Go 命令幫助：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go help build</span></span></code></pre></div><hr>`,15)),e("p",null,[s[7]||(s[7]=a("via: ",-1)),l(n,{href:"https://opensource.com/article/22/4/go-build-options"},{default:p(()=>[...s[6]||(s[6]=[a("https://opensource.com/article/22/4/go-build-options",-1)])]),_:1})]),e("p",null,[s[12]||(s[12]=a("作者：",-1)),l(n,{href:"https://opensource.com/users/gkamathe"},{default:p(()=>[...s[8]||(s[8]=[a("Gaurav Kamathe",-1)])]),_:1}),s[13]||(s[13]=a(" 選題：",-1)),l(n,{href:"https://github.com/lkxed"},{default:p(()=>[...s[9]||(s[9]=[a("lkxed",-1)])]),_:1}),s[14]||(s[14]=a(" 譯者：",-1)),l(n,{href:"https://github.com/lkxed"},{default:p(()=>[...s[10]||(s[10]=[a("lkxed",-1)])]),_:1}),s[15]||(s[15]=a(" 校對：",-1)),l(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[11]||(s[11]=[a("wxy",-1)])]),_:1})]),e("p",null,[s[18]||(s[18]=a("本文由 ",-1)),l(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[16]||(s[16]=[a("LCTT",-1)])]),_:1}),s[19]||(s[19]=a(" 原創編譯，",-1)),l(n,{href:"https://linux.cn/"},{default:p(()=>[...s[17]||(s[17]=[a("Linux中國",-1)])]),_:1}),s[20]||(s[20]=a(" 榮譽推出",-1))])])}const C=o(h,[["render",r]]);export{y as __pageData,C as default};
