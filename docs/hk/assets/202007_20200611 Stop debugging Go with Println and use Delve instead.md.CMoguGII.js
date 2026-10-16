import{_ as t,a0 as o,w as d,s as c,ao as i,I as l,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"使用 Delve 代替 Println 來調試 Go 程序 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Delve 代替 Println 來調試 Go 程序 | LCTT (202007) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Delve 代替 Println 來調試 Go 程序 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Delve 代替 Println 來調試 Go 程序 | LCTT (202007) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202007/20200611 Stop debugging Go with Println and use Delve instead","title":"使用 Delve 代替 Println 來調試 Go 程序","tag":"202007","desc":""},"relativePath":"202007/20200611 Stop debugging Go with Println and use Delve instead.md","filePath":"[post].md"}'),r={name:"202007/20200611 Stop debugging Go with Println and use Delve instead.md"};function g(h,s,u,b,k,f){const a=o("Link");return d(),c("div",null,[s[34]||(s[34]=i('<h1 id="使用-delve-代替-println-來調試-go-程序" tabindex="-1">使用 Delve 代替 Println 來調試 Go 程序 <a class="header-anchor" href="#使用-delve-代替-println-來調試-go-程序" aria-label="Permalink to “使用 Delve 代替 Println 來調試 Go 程序”">​</a></h1><blockquote><p>Delve 是能讓調試變成輕而易舉的事的萬能工具包。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202007/09/234357pavw88sbxab0makj.jpg" alt=""></p><p>你上次嘗試去學習一種新的編程語言時什麼時候？你有沒有持之以恆，你是那些在新事物發佈的第一時間就勇敢地去嘗試的一員嗎？不管怎樣，學習一種新的語言也許非常有用，也會有很多樂趣。</p><p>你嘗試着寫簡單的 “Hello, world!”，然後寫一些示例代碼並執行，繼續做一些小的修改，之後繼續前進。我敢保證我們都有過這個經歷，不論我們使用哪種技術。假如你嘗試用一段時間一種語言，並且你希望能夠精通它，那麼有一些事物能在你的進取之路上幫助你。</p><p>其中之一就是調試器。有些人喜歡在代碼中用簡單的 “print” 語句進行調試，這種方式很適合代碼量少的簡單程序；然而，如果你處理的是有多個開發者和幾千行代碼的大型項目，你應該使用調試器。</p><p>最近我開始學習 Go 編程語言了，在本文中，我們將探討一種名為 Delve 的調試器。Delve 是專門用來調試 Go 程序的工具，我們會藉助一些 Go 示例代碼來了解下它的一些功能。不要擔心這裏展示的 Go 示例代碼；即使你之前沒有寫過 Go 代碼也能看懂。Go 的目標之一是簡單，因此代碼是始終如一的，理解和解釋起來都很容易。</p><h3 id="delve-介紹" tabindex="-1">Delve 介紹 <a class="header-anchor" href="#delve-介紹" aria-label="Permalink to “Delve 介紹”">​</a></h3>',8)),l("p",null,[s[1]||(s[1]=n("Delve 是託管在 ",-1)),p(a,{href:"https://github.com/go-delve/delve"},{default:e(()=>[...s[0]||(s[0]=[n("GitHub",-1)])]),_:1}),s[2]||(s[2]=n(" 上的一個開源項目。",-1))]),s[35]||(s[35]=i(`<p>它自己的文檔中寫道：</p><blockquote><p>Delve 是 Go 編程語言的調試器。該項目的目標是為 Go 提供一個簡單、全功能的調試工具。Delve 應該是易於調用和易於使用的。當你使用調試器時，事情可能不會按你的思路運行。如果你這樣想，那麼你不適合用 Delve。</p></blockquote><p>讓我們來近距離看一下。</p><p>我的測試系統是運行着 Fedora Linux 的筆記本電腦，Go 編譯器版本如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /etc/fedora-release</span></span>
<span class="line"><span>Fedora release 30 (Thirty)</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ go version</span></span>
<span class="line"><span>go version go1.12.17 linux/amd64</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="golang-安裝" tabindex="-1">Golang 安裝 <a class="header-anchor" href="#golang-安裝" aria-label="Permalink to “Golang 安裝”">​</a></h3><p>如果你沒有安裝 Go，你可以運行下面的命令，很輕鬆地就可以從配置的倉庫中獲取。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf install golang.x86_64</span></span></code></pre></div>`,8)),l("p",null,[s[4]||(s[4]=n("或者，你可以在",-1)),p(a,{href:"https://golang.org/doc/install"},{default:e(()=>[...s[3]||(s[3]=[n("安裝頁面",-1)])]),_:1}),s[5]||(s[5]=n("找到適合你的操作系統的其他安裝版本。",-1))]),s[36]||(s[36]=i(`<p>在開始之前，請先確認已經設置好了 Go 工具依賴的下列各個路徑。如果這些路徑沒有設置，有些示例可能不能正常運行。你可以在 SHELL 的 RC 文件中輕鬆設置這些環境變量，我的機器上是在 <code>$HOME/bashrc</code> 文件中設置的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go env | grep GOPATH</span></span>
<span class="line"><span>GOPATH=&quot;/home/user/go&quot;</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ go env | grep GOBIN</span></span>
<span class="line"><span>GOBIN=&quot;/home/user/go/gobin&quot;</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="delve-安裝" tabindex="-1">Delve 安裝 <a class="header-anchor" href="#delve-安裝" aria-label="Permalink to “Delve 安裝”">​</a></h3>`,3)),l("p",null,[s[7]||(s[7]=n("你可以像下面那樣，通過運行一個簡單的 ",-1)),s[8]||(s[8]=l("code",null,"go get",-1)),s[9]||(s[9]=n(" 命令來安裝 Delve。",-1)),s[10]||(s[10]=l("code",null,"go get",-1)),s[11]||(s[11]=n(" 是 Golang 從外部源下載和安裝需要的包的方式。如果你安裝過程中遇到了問題，可以查看 ",-1)),p(a,{href:"https://github.com/go-delve/delve/blob/master/Documentation/installation/linux/install.md"},{default:e(()=>[...s[6]||(s[6]=[n("Delve 安裝教程",-1)])]),_:1}),s[12]||(s[12]=n("。",-1))]),s[37]||(s[37]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go get -u github.com/go-delve/delve/cmd/dlv</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>運行上面的命令，就會把 Delve 下載到你的 <code>$GOPATH</code> 的位置，如果你沒有把 <code>$GOPATH</code> 設置成其他值，那麼默認情況下 <code>$GOPATH</code> 和 <code>$HOME/go</code> 是同一個路徑。</p><p>你可以進入 <code>go/</code> 目錄，你可以在 <code>bin/</code> 目錄下看到 <code>dlv</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l $HOME/go</span></span>
<span class="line"><span>total 8</span></span>
<span class="line"><span>drwxrwxr-x. 2 user user 4096 May 25 19:11 bin</span></span>
<span class="line"><span>drwxrwxr-x. 4 user user 4096 May 25 19:21 src</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l ~/go/bin/</span></span>
<span class="line"><span>total 19596</span></span>
<span class="line"><span>-rwxrwxr-x. 1 user user 20062654 May 25 19:17 dlv</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>因為你把 Delve 安裝到了 <code>$GOPATH</code>，所以你可以像運行普通的 shell 命令一樣運行它，即每次運行時你不必先進入它所在的目錄。你可以通過 <code>version</code> 選項來驗證 <code>dlv</code> 是否正確安裝。示例中安裝的版本是 1.4.1。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ which dlv</span></span>
<span class="line"><span>~/go/bin/dlv</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ dlv version</span></span>
<span class="line"><span>Delve Debugger</span></span>
<span class="line"><span>Version: 1.4.1</span></span>
<span class="line"><span>Build: $Id: bda606147ff48b58bde39e20b9e11378eaa4db46 $</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>現在，我們一起在 Go 程序中使用 Delve 來理解下它的功能以及如何使用它們。我們先來寫一個 <code>hello.go</code>，簡單地打印一條 <code>Hello, world!</code> 信息。</p><p>記着，我把這些示例程序放到了 <code>$GOBIN</code> 目錄下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pwd</span></span>
<span class="line"><span>/home/user/go/gobin</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ cat hello.go</span></span>
<span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        fmt.Println(&quot;Hello, world!&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>運行 <code>build</code> 命令來編譯一個 Go 程序，它的輸入是 <code>.go</code> 後綴的文件。如果程序沒有語法錯誤，Go 編譯器把它編譯成一個二進制可執行文件。這個文件可以被直接運行，運行後我們會在屏幕上看到 <code>Hello, world!</code> 信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build hello.go</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l hello</span></span>
<span class="line"><span>-rwxrwxr-x. 1 user user 1997284 May 26 12:13 hello</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ./hello</span></span>
<span class="line"><span>Hello, world!</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="在-delve-中加載程序" tabindex="-1">在 Delve 中加載程序 <a class="header-anchor" href="#在-delve-中加載程序" aria-label="Permalink to “在 Delve 中加載程序”">​</a></h3><p>把一個程序加載進 Delve 調試器有兩種方式。</p><h4 id="在源碼編譯成二進制文件之前使用-debug-參數" tabindex="-1">在源碼編譯成二進制文件之前使用 debug 參數 <a class="header-anchor" href="#在源碼編譯成二進制文件之前使用-debug-參數" aria-label="Permalink to “在源碼編譯成二進制文件之前使用 debug 參數”">​</a></h4><p>第一種方式是在需要時對源碼使用 <code>debug</code> 命令。Delve 會為你編譯出一個名為 <code>__debug_bin</code> 的二進制文件，並把它加載進調試器。</p><p>在這個例子中，你可以進入 <code>hello.go</code> 所在的目錄，然後運行 <code>dlv debug</code> 命令。如果目錄中有多個源文件且每個文件都有自己的主函數，Delve 則可能拋出錯誤，它期望的是單個程序或從單個項目構建成單個二進制文件。如果出現了這種錯誤，那麼你就應該用下面展示的第二種方式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l</span></span>
<span class="line"><span>total 4</span></span>
<span class="line"><span>-rw-rw-r--. 1 user user 74 Jun  4 11:48 hello.go</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ dlv debug</span></span>
<span class="line"><span>Type &#39;help&#39; for list of commands.</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><p>現在打開另一個終端，列出目錄下的文件。你可以看到一個多出來的 <code>__debug_bin</code> 二進制文件，這個文件是由源碼編譯生成的，並會加載進調試器。你現在可以回到 <code>dlv</code> 提示框繼續使用 Delve。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l</span></span>
<span class="line"><span>total 2036</span></span>
<span class="line"><span>-rwxrwxr-x. 1 user user 2077085 Jun  4 11:48 __debug_bin</span></span>
<span class="line"><span>-rw-rw-r--. 1 user user      74 Jun  4 11:48 hello.go</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="使用-exec-參數" tabindex="-1">使用 exec 參數 <a class="header-anchor" href="#使用-exec-參數" aria-label="Permalink to “使用 exec 參數”">​</a></h4><p>如果你已經有提前編譯好的 Go 程序或者已經用 <code>go build</code> 命令編譯完成了，不想再用 Delve 編譯出 <code>__debug_bin</code> 二進制文件，那麼第二種把程序加載進 Delve 的方法在這些情況下會很有用。在上述情況下，你可以使用 <code>exec</code> 命令來把整個目錄加載進 Delve 調試器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l</span></span>
<span class="line"><span>total 4</span></span>
<span class="line"><span>-rw-rw-r--. 1 user user 74 Jun  4 11:48 hello.go</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ go build hello.go</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ ls -l</span></span>
<span class="line"><span>total 1956</span></span>
<span class="line"><span>-rwxrwxr-x. 1 user user 1997284 Jun  4 11:54 hello</span></span>
<span class="line"><span>-rw-rw-r--. 1 user user      74 Jun  4 11:48 hello.go</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ dlv exec ./hello</span></span>
<span class="line"><span>Type &#39;help&#39; for list of commands.</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h3 id="查看-delve-幫助信息" tabindex="-1">查看 delve 幫助信息 <a class="header-anchor" href="#查看-delve-幫助信息" aria-label="Permalink to “查看 delve 幫助信息”">​</a></h3><p>在 <code>dlv</code> 提示符中，你可以運行 <code>help</code> 來查看 Delve 提供的多種幫助選項。命令列表相當長，這裏我們只列舉一些重要的功能。下面是 Delve 的功能概覽。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) help</span></span>
<span class="line"><span>The following commands are available:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Running the program:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Manipulating breakpoints:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Viewing program variables and memory:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Listing and switching between threads and goroutines:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Viewing the call stack and selecting frames:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Other commands:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type help followed by a command for full documentation.</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h4 id="設置斷點" tabindex="-1">設置斷點 <a class="header-anchor" href="#設置斷點" aria-label="Permalink to “設置斷點”">​</a></h4><p>現在我們已經把 hello.go 程序加載進了 Delve 調試器，我們在主函數處設置斷點，稍後來確認它。在 Go 中，主程序從 <code>main.main</code> 處開始執行，因此你需要給這個名字提供個 <code>break</code> 命令。之後，我們可以用 <code>breakpoints</code> 命令來檢查斷點是否正確設置了。</p><p>不要忘了你還可以用命令簡寫，因此你可以用 <code>b main.main</code> 來代替 <code>break main.main</code>，兩者效果相同，<code>bp</code> 和 <code>breakpoints</code> 同理。你可以通過運行 <code>help</code> 命令查看幫助信息來找到你想要的命令簡寫。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) break main.main</span></span>
<span class="line"><span>Breakpoint 1 set at 0x4a228f for main.main() ./hello.go:5</span></span>
<span class="line"><span>(dlv) breakpoints</span></span>
<span class="line"><span>Breakpoint runtime-fatal-throw at 0x42c410 for runtime.fatalthrow() /usr/lib/golang/src/runtime/panic.go:663 (0)</span></span>
<span class="line"><span>Breakpoint unrecovered-panic at 0x42c480 for runtime.fatalpanic() /usr/lib/golang/src/runtime/panic.go:690 (0)</span></span>
<span class="line"><span>        print runtime.curg._panic.arg</span></span>
<span class="line"><span>Breakpoint 1 at 0x4a228f for main.main() ./hello.go:5 (0)</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h4 id="程序繼續執行" tabindex="-1">程序繼續執行 <a class="header-anchor" href="#程序繼續執行" aria-label="Permalink to “程序繼續執行”">​</a></h4><p>現在，我們用 <code>continue</code> 來繼續運行程序。它會運行到斷點處中止，在我們的例子中，會運行到主函數的 <code>main.main</code> 處中止。從這裏開始，我們可以用 <code>next</code> 命令來逐行執行程序。請注意，當我們運行到 <code>fmt.Println(&quot;Hello, world!&quot;)</code> 處時，即使我們還在調試器裏，我們也能看到打印到屏幕的 <code>Hello, world!</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) continue</span></span>
<span class="line"><span>&gt; main.main() ./hello.go:5 (hits goroutine(1):1 total:1) (PC: 0x4a228f)</span></span>
<span class="line"><span>     1: package main</span></span>
<span class="line"><span>     2:</span></span>
<span class="line"><span>     3: import &quot;fmt&quot;</span></span>
<span class="line"><span>     4:</span></span>
<span class="line"><span>=&gt;   5:      func main() {</span></span>
<span class="line"><span>     6:         fmt.Println(&quot;Hello, world!&quot;)</span></span>
<span class="line"><span>     7: }</span></span>
<span class="line"><span>(dlv) next</span></span>
<span class="line"><span>&gt; main.main() ./hello.go:6 (PC: 0x4a229d)</span></span>
<span class="line"><span>     1: package main</span></span>
<span class="line"><span>     2:</span></span>
<span class="line"><span>     3: import &quot;fmt&quot;</span></span>
<span class="line"><span>     4:</span></span>
<span class="line"><span>     5: func main() {</span></span>
<span class="line"><span>=&gt;   6:              fmt.Println(&quot;Hello, world!&quot;)</span></span>
<span class="line"><span>     7: }</span></span>
<span class="line"><span>(dlv) next</span></span>
<span class="line"><span>Hello, world!</span></span>
<span class="line"><span>&gt; main.main() ./hello.go:7 (PC: 0x4a22ff)</span></span>
<span class="line"><span>     2:</span></span>
<span class="line"><span>     3: import &quot;fmt&quot;</span></span>
<span class="line"><span>     4:</span></span>
<span class="line"><span>     5: func main() {</span></span>
<span class="line"><span>     6:         fmt.Println(&quot;Hello, world!&quot;)</span></span>
<span class="line"><span>=&gt;   7:      }</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h4 id="退出-delve" tabindex="-1">退出 Delve <a class="header-anchor" href="#退出-delve" aria-label="Permalink to “退出 Delve”">​</a></h4><p>你隨時可以運行 <code>quit</code> 命令來退出調試器，退出之後你會回到 shell 提示符。相當簡單，對嗎？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) quit</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="delve-的其他功能" tabindex="-1">Delve 的其他功能 <a class="header-anchor" href="#delve-的其他功能" aria-label="Permalink to “Delve 的其他功能”">​</a></h3>`,36)),l("p",null,[s[14]||(s[14]=n("我們用其他的 Go 程序來探索下 Delve 的其他功能。這次，我們從 ",-1)),p(a,{href:"https://tour.golang.org/basics/4"},{default:e(()=>[...s[13]||(s[13]=[n("golang 教程",-1)])]),_:1}),s[15]||(s[15]=n(" 中找了一個程序。如果你要學習 Go 語言，那麼 Golang 教程應該是你的第一站。",-1))]),s[38]||(s[38]=i(`<p>下面的程序，<code>functions.go</code> 中簡單展示了 Go 程序中是怎樣定義和調用函數的。這裏，我們有一個簡單的把兩數相加並返回和值的 <code>add()</code> 函數。你可以像下面那樣構建程序並運行它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat functions.go</span></span>
<span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func add(x int, y int) int {</span></span>
<span class="line"><span>        return x + y</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        fmt.Println(add(42, 13))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>你可以像下面那樣構建和運行程序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build functions.go  &amp;&amp; ./functions</span></span>
<span class="line"><span>55</span></span>
<span class="line"><span>$</span></span></code></pre></div><h4 id="進入函數" tabindex="-1">進入函數 <a class="header-anchor" href="#進入函數" aria-label="Permalink to “進入函數”">​</a></h4><p>跟前面展示的一樣，我們用前面提到的一個選項來把二進制文件加載進 Delve 調試器，再一次在 <code>main.main</code> 處設置斷點，繼續運行程序直到斷點處。然後執行 <code>next</code> 直到 <code>fmt.Println(add(42, 13))</code> 處；這裏我們調用了 <code>add()</code> 函數。我們可以像下面展示的那樣，用 Delve 的 <code>step</code> 命令從 <code>main</code> 函數進入 <code>add()</code> 函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dlv debug</span></span>
<span class="line"><span>Type &#39;help&#39; for list of commands.</span></span>
<span class="line"><span>(dlv) break main.main</span></span>
<span class="line"><span>Breakpoint 1 set at 0x4a22b3 for main.main() ./functions.go:9</span></span>
<span class="line"><span>(dlv) c</span></span>
<span class="line"><span>&gt; main.main() ./functions.go:9 (hits goroutine(1):1 total:1) (PC: 0x4a22b3)</span></span>
<span class="line"><span>     4:</span></span>
<span class="line"><span>     5: func add(x int, y int) int {</span></span>
<span class="line"><span>     6:         return x + y</span></span>
<span class="line"><span>     7: }</span></span>
<span class="line"><span>     8:</span></span>
<span class="line"><span>=&gt;   9:      func main() {</span></span>
<span class="line"><span>    10:         fmt.Println(add(42, 13))</span></span>
<span class="line"><span>    11: }</span></span>
<span class="line"><span>(dlv) next</span></span>
<span class="line"><span>&gt; main.main() ./functions.go:10 (PC: 0x4a22c1)</span></span>
<span class="line"><span>     5: func add(x int, y int) int {</span></span>
<span class="line"><span>     6:         return x + y</span></span>
<span class="line"><span>     7: }</span></span>
<span class="line"><span>     8:</span></span>
<span class="line"><span>     9: func main() {</span></span>
<span class="line"><span>=&gt;  10:              fmt.Println(add(42, 13))</span></span>
<span class="line"><span>    11: }</span></span>
<span class="line"><span>(dlv) step</span></span>
<span class="line"><span>&gt; main.add() ./functions.go:5 (PC: 0x4a2280)</span></span>
<span class="line"><span>     1: package main</span></span>
<span class="line"><span>     2:</span></span>
<span class="line"><span>     3: import &quot;fmt&quot;</span></span>
<span class="line"><span>     4:</span></span>
<span class="line"><span>=&gt;   5:      func add(x int, y int) int {</span></span>
<span class="line"><span>     6:         return x + y</span></span>
<span class="line"><span>     7: }</span></span>
<span class="line"><span>     8:</span></span>
<span class="line"><span>     9: func main() {</span></span>
<span class="line"><span>    10:         fmt.Println(add(42, 13))</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h4 id="使用文件名-行號來設置斷點" tabindex="-1">使用<code>文件名:行號</code>來設置斷點 <a class="header-anchor" href="#使用文件名-行號來設置斷點" aria-label="Permalink to “使用文件名:行號來設置斷點”">​</a></h4><p>上面的例子中，我們經過 <code>main</code> 函數進入了 <code>add()</code> 函數，但是你也可以在你想加斷點的地方直接使用“文件名:行號”的組合。下面是在 <code>add()</code> 函數開始處加斷點的另一種方式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) break functions.go:5</span></span>
<span class="line"><span>Breakpoint 1 set at 0x4a2280 for main.add() ./functions.go:5</span></span>
<span class="line"><span>(dlv) continue</span></span>
<span class="line"><span>&gt; main.add() ./functions.go:5 (hits goroutine(1):1 total:1) (PC: 0x4a2280)</span></span>
<span class="line"><span>     1: package main</span></span>
<span class="line"><span>     2:</span></span>
<span class="line"><span>     3: import &quot;fmt&quot;</span></span>
<span class="line"><span>     4:</span></span>
<span class="line"><span>=&gt;   5:      func add(x int, y int) int {</span></span>
<span class="line"><span>     6:         return x + y</span></span>
<span class="line"><span>     7: }</span></span>
<span class="line"><span>     8:</span></span>
<span class="line"><span>     9: func main() {</span></span>
<span class="line"><span>    10:         fmt.Println(add(42, 13))</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h4 id="查看當前的棧信息" tabindex="-1">查看當前的棧信息 <a class="header-anchor" href="#查看當前的棧信息" aria-label="Permalink to “查看當前的棧信息”">​</a></h4><p>現在我們運行到了 <code>add()</code> 函數，我們可以在 Delve 中用 <code>stack</code> 命令查看當前棧的內容。這裏在 <code>0</code> 位置展示了棧頂的函數 <code>add()</code> ，緊接着在 <code>1</code> 位置展示了調用 <code>add()</code> 函數的 <code>main.main</code>。在 <code>main.main</code> 下面的函數屬於 Go 運行時，是用來處理加載和執行該程序的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) stack</span></span>
<span class="line"><span>0  0x00000000004a2280 in main.add</span></span>
<span class="line"><span>   at ./functions.go:5</span></span>
<span class="line"><span>1  0x00000000004a22d7 in main.main</span></span>
<span class="line"><span>   at ./functions.go:10</span></span>
<span class="line"><span>2  0x000000000042dd1f in runtime.main</span></span>
<span class="line"><span>   at /usr/lib/golang/src/runtime/proc.go:200</span></span>
<span class="line"><span>3  0x0000000000458171 in runtime.goexit</span></span>
<span class="line"><span>   at /usr/lib/golang/src/runtime/asm_amd64.s:1337</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h4 id="在幀之間跳轉" tabindex="-1">在幀之間跳轉 <a class="header-anchor" href="#在幀之間跳轉" aria-label="Permalink to “在幀之間跳轉”">​</a></h4><p>在 Delve 中我們可以用 <code>frame</code> 命令實現幀之間的跳轉。在下面的例子中，我們用 <code>frame</code> 實現了從 <code>add()</code> 幀跳到 <code>main.main</code> 幀，以此類推。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) frame 0</span></span>
<span class="line"><span>&gt; main.add() ./functions.go:5 (hits goroutine(1):1 total:1) (PC: 0x4a2280)</span></span>
<span class="line"><span>Frame 0: ./functions.go:5 (PC: 4a2280)</span></span>
<span class="line"><span>     1: package main</span></span>
<span class="line"><span>     2:</span></span>
<span class="line"><span>     3: import &quot;fmt&quot;</span></span>
<span class="line"><span>     4:</span></span>
<span class="line"><span>=&gt;   5:      func add(x int, y int) int {</span></span>
<span class="line"><span>     6:         return x + y</span></span>
<span class="line"><span>     7: }</span></span>
<span class="line"><span>     8:</span></span>
<span class="line"><span>     9: func main() {</span></span>
<span class="line"><span>    10:         fmt.Println(add(42, 13))</span></span>
<span class="line"><span>(dlv) frame 1</span></span>
<span class="line"><span>&gt; main.add() ./functions.go:5 (hits goroutine(1):1 total:1) (PC: 0x4a2280)</span></span>
<span class="line"><span>Frame 1: ./functions.go:10 (PC: 4a22d7)</span></span>
<span class="line"><span>     5: func add(x int, y int) int {</span></span>
<span class="line"><span>     6:         return x + y</span></span>
<span class="line"><span>     7: }</span></span>
<span class="line"><span>     8:</span></span>
<span class="line"><span>     9: func main() {</span></span>
<span class="line"><span>=&gt;  10:              fmt.Println(add(42, 13))</span></span>
<span class="line"><span>    11: }</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h4 id="打印函數參數" tabindex="-1">打印函數參數 <a class="header-anchor" href="#打印函數參數" aria-label="Permalink to “打印函數參數”">​</a></h4><p>一個函數通常會接收多個參數。在 <code>add()</code> 函數中，它的入參是兩個整型。Delve 有個便捷的 <code>args</code> 命令，它能打印出命令列傳給函數的參數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) args</span></span>
<span class="line"><span>x = 42</span></span>
<span class="line"><span>y = 13</span></span>
<span class="line"><span>~r2 = 824633786832</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h4 id="查看反彙編碼" tabindex="-1">查看反彙編碼 <a class="header-anchor" href="#查看反彙編碼" aria-label="Permalink to “查看反彙編碼”">​</a></h4><p>由於我們是調試編譯出的二進制文件，因此如果我們能查看編譯器生成的彙編語言指令將會非常有用。Delve 提供了一個 <code>disassemble</code> 命令來查看這些指令。在下面的例子中，我們用它來查看 <code>add()</code> 函數的彙編指令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) step</span></span>
<span class="line"><span>&gt; main.add() ./functions.go:5 (PC: 0x4a2280)</span></span>
<span class="line"><span>     1: package main</span></span>
<span class="line"><span>     2:</span></span>
<span class="line"><span>     3: import &quot;fmt&quot;</span></span>
<span class="line"><span>     4:</span></span>
<span class="line"><span>=&gt;   5:      func add(x int, y int) int {</span></span>
<span class="line"><span>     6:         return x + y</span></span>
<span class="line"><span>     7: }</span></span>
<span class="line"><span>     8:</span></span>
<span class="line"><span>     9: func main() {</span></span>
<span class="line"><span>    10:         fmt.Println(add(42, 13))</span></span>
<span class="line"><span>(dlv) disassemble</span></span>
<span class="line"><span>TEXT main.add(SB) /home/user/go/gobin/functions.go</span></span>
<span class="line"><span>=&gt;   functions.go:5  0x4a2280   48c744241800000000   mov qword ptr [rsp+0x18], 0x0</span></span>
<span class="line"><span>        functions.go:6  0x4a2289   488b442408           mov rax, qword ptr [rsp+0x8]</span></span>
<span class="line"><span>        functions.go:6  0x4a228e   4803442410           add rax, qword ptr [rsp+0x10]</span></span>
<span class="line"><span>        functions.go:6  0x4a2293   4889442418           mov qword ptr [rsp+0x18], rax</span></span>
<span class="line"><span>        functions.go:6  0x4a2298   c3                   ret</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h4 id="單步退出函數" tabindex="-1">單步退出函數 <a class="header-anchor" href="#單步退出函數" aria-label="Permalink to “單步退出函數”">​</a></h4><p>另一個功能是 <code>stepout</code>，這個功能可以讓我們跳回到函數被調用的地方。在我們的例子中，如果我們想回到 <code>main.main</code> 函數，我們只需要簡單地運行 <code>stepout</code> 命令，它就會把我們帶回去。在我們調試大型代碼庫時，這個功能會是一個非常便捷的工具。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) stepout</span></span>
<span class="line"><span>&gt; main.main() ./functions.go:10 (PC: 0x4a22d7)</span></span>
<span class="line"><span>Values returned:</span></span>
<span class="line"><span>        ~r2: 55</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     5: func add(x int, y int) int {</span></span>
<span class="line"><span>     6:         return x + y</span></span>
<span class="line"><span>     7: }</span></span>
<span class="line"><span>     8:</span></span>
<span class="line"><span>     9: func main() {</span></span>
<span class="line"><span>=&gt;  10:              fmt.Println(add(42, 13))</span></span>
<span class="line"><span>    11: }</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h4 id="打印變量信息" tabindex="-1">打印變量信息 <a class="header-anchor" href="#打印變量信息" aria-label="Permalink to “打印變量信息”">​</a></h4>`,26)),l("p",null,[s[17]||(s[17]=n("我們一起通過 ",-1)),p(a,{href:"https://tour.golang.org/basics/9"},{default:e(()=>[...s[16]||(s[16]=[n("Go 教程",-1)])]),_:1}),s[18]||(s[18]=n(" 的另一個示例程序來看下 Delve 是怎麼處理 Go 中的變量的。下面的示例程序定義和初始化了一些不同類型的變量。你可以構建和運行程序。",-1))]),s[39]||(s[39]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat variables.go</span></span>
<span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var i, j int = 1, 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        var c, python, java = true, false, &quot;no!&quot;</span></span>
<span class="line"><span>        fmt.Println(i, j, c, python, java)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ go build variables.go &amp;&amp;; ./variables</span></span>
<span class="line"><span>1 2 true false no!</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>像前面説過的那樣，用 <code>delve debug</code> 在調試器中加載程序。你可以在 Delve 中用 <code>print</code> 命令通過變量名來展示他們當前的值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) print c</span></span>
<span class="line"><span>true</span></span>
<span class="line"><span>(dlv) print java</span></span>
<span class="line"><span>&quot;no!&quot;</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><p>或者，你還可以用 <code>locals</code> 命令來打印函數內所有的局部變量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) locals</span></span>
<span class="line"><span>python = false</span></span>
<span class="line"><span>c = true</span></span>
<span class="line"><span>java = &quot;no!&quot;</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><p>如果你不知道變量的類型，你可以用 <code>whatis</code> 命令來通過變量名來打印它的類型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(dlv) whatis python</span></span>
<span class="line"><span>bool</span></span>
<span class="line"><span>(dlv) whatis c</span></span>
<span class="line"><span>bool</span></span>
<span class="line"><span>(dlv) whatis java</span></span>
<span class="line"><span>string</span></span>
<span class="line"><span>(dlv)</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>現在我們只是瞭解了 Delve 所有功能的皮毛。你可以自己去查看幫助內容，嘗試下其它的命令。你還可以把 Delve 綁定到運行中的 Go 程序上（守護進程！），如果你安裝了 Go 源碼庫，你甚至可以用 Delve 導出 Golang 庫內部的信息。勇敢去探索吧！</p><hr>`,10)),l("p",null,[s[20]||(s[20]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/20/6/debug-go-delve"},{default:e(()=>[...s[19]||(s[19]=[n("https://opensource.com/article/20/6/debug-go-delve",-1)])]),_:1})]),l("p",null,[s[25]||(s[25]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/gkamathe"},{default:e(()=>[...s[21]||(s[21]=[n("Gaurav Kamathe",-1)])]),_:1}),s[26]||(s[26]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[22]||(s[22]=[n("lujun9972",-1)])]),_:1}),s[27]||(s[27]=n(" 譯者：",-1)),p(a,{href:"https://github.com/lxbwolf"},{default:e(()=>[...s[23]||(s[23]=[n("lxbwolf",-1)])]),_:1}),s[28]||(s[28]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[24]||(s[24]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[31]||(s[31]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[29]||(s[29]=[n("LCTT",-1)])]),_:1}),s[32]||(s[32]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[30]||(s[30]=[n("Linux中國",-1)])]),_:1}),s[33]||(s[33]=n(" 榮譽推出",-1))])])}const y=t(r,[["render",g]]);export{x as __pageData,y as default};
