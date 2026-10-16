import{_ as o,a0 as t,w as d,s as c,ao as i,I as e,x as a,a1 as l,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"我最喜欢的 Go 构建选项 | LCTT x X-CMD","titleTemplate":false,"description":"我最喜欢的 Go 构建选项 | LCTT (202204) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"我最喜欢的 Go 构建选项 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"我最喜欢的 Go 构建选项 | LCTT (202204) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202204/20220414 My favorite build options for Go","title":"我最喜欢的 Go 构建选项","tag":"202204","desc":""},"relativePath":"202204/20220414 My favorite build options for Go.md","filePath":"[post].md"}'),h={name:"202204/20220414 My favorite build options for Go.md"};function r(g,s,b,u,k,f){const n=t("Link");return d(),c("div",null,[s[21]||(s[21]=i('<h1 id="我最喜欢的-go-构建选项" tabindex="-1">我最喜欢的 Go 构建选项 <a class="header-anchor" href="#我最喜欢的-go-构建选项" aria-label="Permalink to “我最喜欢的 Go 构建选项”">​</a></h1><blockquote><p>这些方便的 Go 构建选项可以帮助你更好地理解 Go 的编译过程。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202204/30/172121exam5k8vx45kzk7p.jpg" alt=""></p><p>学习一门新的编程语言最令人欣慰的部分之一，就是最终运行了一个可执行文件，并获得预期的输出。当我开始学习 Go 这门编程语言时，我先是阅读一些示例程序来熟悉语法，然后是尝试写一些小的测试程序。随着时间的推移，这种方法帮助我熟悉了编译和构建程序的过程。</p><p>Go 的构建选项提供了更好地控制构建过程的方法。它们还可以提供额外的信息，帮助把这个过程分成更小的部分。在这篇文章中，我将演示我所使用的一些选项。注意：我使用的“<ruby>构建<rt>build</rt></ruby>”和“<ruby>编译<rt>compile</rt></ruby>”这两个词是同一个意思。</p><h3 id="开始使用-go" tabindex="-1">开始使用 Go <a class="header-anchor" href="#开始使用-go" aria-label="Permalink to “开始使用 Go”">​</a></h3>',6)),e("p",null,[s[1]||(s[1]=a("我使用的 Go 版本是 1.16.7。但是，这里给出的命令应该也能在最新的版本上运行。如果你没有安装 Go，你可以从 ",-1)),l(n,{href:"https://go.dev/doc/install"},{default:p(()=>[...s[0]||(s[0]=[a("Go 官网",-1)])]),_:1}),s[2]||(s[2]=a(" 上下载它，并按照说明进行安装。你可以通过打开一个命令提示符，并键入下面的命令来验证你所安装的版本：",-1))]),s[22]||(s[22]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go version</span></span></code></pre></div><p>你应该会得到类似下面这样的输出，具体取决于你安装的版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>go version go1.16.7 linux/amd64</span></span></code></pre></div><h3 id="基本的-go-程序的编译和执行方法" tabindex="-1">基本的 Go 程序的编译和执行方法 <a class="header-anchor" href="#基本的-go-程序的编译和执行方法" aria-label="Permalink to “基本的 Go 程序的编译和执行方法”">​</a></h3><p>我将从一个在屏幕上简单打印 “Hello World” 的 Go 程序示例开始，就像下面这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat hello.go</span></span>
<span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    fmt.Println(&quot;Hello World&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在讨论更高级的选项之前，我将解释如何编译这个 Go 示例程序。我使用了 <code>build</code> 命令，后面跟着 Go 程序的源文件名，本例中是 <code>hello.go</code>，就像下面这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build hello.go</span></span></code></pre></div><p>如果一切工作正常，你应该看到在你的当前目录下创建了一个名为 <code>hello</code> 的可执行文件。你可以通过使用 <code>file</code> 命令验证它是 ELF 二进制可执行格式（在 Linux 平台上）。你也可以直接执行它，你会看到它输出 “Hello World”。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>hello  hello.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ file ./hello</span></span>
<span class="line"><span>./hello: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked, not stripped</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ./hello</span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><p>Go 提供了一个方便的 <code>run</code> 命令，以便你只是想看看程序是否能正常工作，并获得预期的输出，而不想生成一个最终的二进制文件。请记住，即使你在当前目录中没有看到可执行文件，Go 仍然会在某个地方编译并生成可执行文件并运行它，然后把它从系统中删除。我将在本文后面的章节中解释。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run hello.go</span></span>
<span class="line"><span>Hello World</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>hello.go</span></span></code></pre></div><h3 id="更多细节" tabindex="-1">更多细节 <a class="header-anchor" href="#更多细节" aria-label="Permalink to “更多细节”">​</a></h3><p>上面的命令就像一阵风一样，一下子就运行完了我的程序。然而，如果你想知道 Go 在编译这些程序的过程中做了什么，Go 提供了一个 <code>-x</code> 选项，它可以打印出 Go 为产生这个可执行文件所做的一切。</p><p>简单看一下你就会发现，Go 在 <code>/tmp</code> 内创建了一个临时工作目录，并生成了可执行文件，然后把它移到了 Go 源程序所在的当前目录。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build -x hello.go</span></span>
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
<span class="line"><span>rm -r $WORK/b001/</span></span></code></pre></div><p>这有助于解决在程序运行后却在当前目录下没有生成可执行文件的谜团。使用 <code>-x</code> 显示可执行文件确实在 <code>/tmp</code> 工作目录下创建并被执行了。然而，与 <code>build</code> 命令不同的是，可执行文件并没有移动到当前目录，这使得看起来没有可执行文件被创建。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run -x hello.go</span></span>
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
<span class="line"><span>Hello World</span></span></code></pre></div><h3 id="模仿编译而不产生可执行文件" tabindex="-1">模仿编译而不产生可执行文件 <a class="header-anchor" href="#模仿编译而不产生可执行文件" aria-label="Permalink to “模仿编译而不产生可执行文件”">​</a></h3><p>假设你不想编译程序并产生一个实际的二进制文件，但你确实想看到这个过程中的所有步骤。你可以通过使用 <code>-n</code> 这个构建选项来做到这一点，该选项会打印出通常的执行步骤，而不会实际创建二进制文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build -n hello.go</span></span></code></pre></div><h3 id="保存临时目录" tabindex="-1">保存临时目录 <a class="header-anchor" href="#保存临时目录" aria-label="Permalink to “保存临时目录”">​</a></h3><p>很多工作都发生在 <code>/tmp</code> 工作目录中，一旦可执行文件被创建和运行，它就会被删除。但是如果你想看看哪些文件是在编译过程中创建的呢？Go 提供了一个 <code>-work</code> 选项，它可以在编译程序时使用。<code>-work</code> 选项除了运行程序外，还打印了工作目录的路径，但它并不会在这之后删除工作目录，所以你可以切换到该目录，检查在编译过程中创建的所有文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run -work hello.go</span></span>
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
<span class="line"><span>Hello World</span></span></code></pre></div><h3 id="其他编译选项" tabindex="-1">其他编译选项 <a class="header-anchor" href="#其他编译选项" aria-label="Permalink to “其他编译选项”">​</a></h3><p>如果说，你想手动编译程序，而不是使用 Go 的 <code>build</code> 和 <code>run</code> 这两个方便的命令，最后得到一个可以直接由你的操作系统（这里指 Linux）运行的可执行文件。那么，你该怎么做呢？这个过程可以分为两部分：编译和链接。你可以使用 <code>tool</code> 选项来看看它是如何工作的。</p><p>首先，使用 <code>tool compile</code> 命令产生结果的 <code>ar</code> 归档文件，它包含了 <code>.o</code> 中间文件。接下来，对这个 <code>hello.o</code> 文件执行 <code>tool link</code> 命令，产生最终的可执行文件，然后你就可以运行它了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go tool compile hello.go</span></span>
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
<span class="line"><span>Hello World</span></span></code></pre></div><p>如果你想进一步查看基于 <code>hello.o</code> 文件产生可执行文件的链接过程，你可以使用 <code>-v</code> 选项，它会搜索每个 Go 可执行文件中包含的 <code>runtime.a</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go tool link -v -o hello hello.o</span></span>
<span class="line"><span>HEADER = -H5 -T0x401000 -R0x1000</span></span>
<span class="line"><span>searching for runtime.a in /usr/lib/golang/pkg/linux_amd64/runtime.a</span></span>
<span class="line"><span>82052 symbols, 18774 reachable</span></span>
<span class="line"><span>        1 package symbols, 1106 hashed symbols, 77185 non-package symbols, 3760 external symbols</span></span>
<span class="line"><span>81968 liveness data</span></span></code></pre></div><h3 id="交叉编译选项" tabindex="-1">交叉编译选项 <a class="header-anchor" href="#交叉编译选项" aria-label="Permalink to “交叉编译选项”">​</a></h3><p>现在我已经解释了 Go 程序的编译过程，接下来，我将演示 Go 如何通过在实际的 <code>build</code> 命令之前提供 <code>GOOS</code> 和 <code>GOARCH</code> 这两个环境变量，来允许你构建针对不同硬件架构和操作系统的可执行文件。</p><p>这有什么用呢？举个例子，你会发现为 ARM（arch64）架构制作的可执行文件不能在英特尔（x86_64）架构上运行，而且会产生一个 Exec 格式错误。</p><p>下面的这些选项使得生成跨平台的二进制文件变得小菜一碟：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ GOOS=linux GOARCH=arm64 go build hello.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ file ./hello</span></span>
<span class="line"><span>./hello: ELF 64-bit LSB executable, ARM aarch64, version 1 (SYSV), statically linked, not stripped</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ./hello</span></span>
<span class="line"><span>bash: ./hello: cannot execute binary file: Exec format error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ uname -m</span></span>
<span class="line"><span>x86_64</span></span></code></pre></div>`,35)),e("p",null,[s[4]||(s[4]=a("你可以阅读我之前的博文，以更多了解我在 ",-1)),l(n,{href:"https://opensource.com/article/21/1/go-cross-compiling"},{default:p(()=>[...s[3]||(s[3]=[a("使用 Go 进行交叉编译",-1)])]),_:1}),s[5]||(s[5]=a(" 方面的经验。",-1))]),s[23]||(s[23]=i(`<h3 id="查看底层汇编指令" tabindex="-1">查看底层汇编指令 <a class="header-anchor" href="#查看底层汇编指令" aria-label="Permalink to “查看底层汇编指令”">​</a></h3><p>源代码并不会直接转换为可执行文件，尽管它生成了一种中间汇编格式，然后最终被组装为可执行文件。在 Go 中，这被映射为一种中间汇编格式，而不是底层硬件汇编指令。</p><p>要查看这个中间汇编格式，请在使用 <code>build</code> 命令时，提供 <code>-gcflags</code> 选项，后面跟着 <code>-S</code>。这个命令将会显示使用到的汇编指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build -gcflags=&quot;-S&quot; hello.go</span></span>
<span class="line"><span># command-line-arguments</span></span>
<span class="line"><span>&quot;&quot;.main STEXT size=138 args=0x0 locals=0x58 funcid=0x0</span></span>
<span class="line"><span>        0x0000 00000 (/test/hello.go:5) TEXT    &quot;&quot;.main(SB), ABIInternal, $88-0</span></span>
<span class="line"><span>        0x0000 00000 (/test/hello.go:5) MOVQ    (TLS), CX</span></span>
<span class="line"><span>        0x0009 00009 (/test/hello.go:5) CMPQ    SP, 16(CX)</span></span>
<span class="line"><span>        0x000d 00013 (/test/hello.go:5) PCDATA  $0, $-2</span></span>
<span class="line"><span>        0x000d 00013 (/test/hello.go:5) JLS     128</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; snip &gt;&gt;</span></span></code></pre></div><p>你也可以使用 <code>objdump -s</code> 选项，来查看已经编译好的可执行程序的汇编指令，就像下面这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
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
<span class="line"><span>&lt;&lt; snip &gt;&gt;</span></span></code></pre></div><h3 id="分离二进制文件以减少其大小" tabindex="-1">分离二进制文件以减少其大小 <a class="header-anchor" href="#分离二进制文件以减少其大小" aria-label="Permalink to “分离二进制文件以减少其大小”">​</a></h3><p>Go 的二进制文件通常比较大。例如, 一个简单的 “Hello World” 程序将会产生一个 1.9M 大小的二进制文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build hello.go</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ du -sh hello</span></span>
<span class="line"><span>1.9M    hello</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file hello</span></span>
<span class="line"><span>hello: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked, not stripped</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>为了减少生成的二进制文件的大小，你可以分离执行过程中不需要的信息。使用 <code>-ldflags</code> 和 <code>-s -w</code> 选项可以使生成的二进制文件略微变小为 1.3M。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build -ldflags=&quot;-s -w&quot; hello.go</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ du -sh hello</span></span>
<span class="line"><span>1.3M    hello</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ file hello</span></span>
<span class="line"><span>hello: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked, stripped</span></span>
<span class="line"><span>$</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>我希望这篇文章向你介绍了一些方便的 Go 编译选项，同时帮助了你更好地理解 Go 编译过程。关于构建过程的其他信息和其他有趣的选项，请参考 Go 命令帮助：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go help build</span></span></code></pre></div><hr>`,15)),e("p",null,[s[7]||(s[7]=a("via: ",-1)),l(n,{href:"https://opensource.com/article/22/4/go-build-options"},{default:p(()=>[...s[6]||(s[6]=[a("https://opensource.com/article/22/4/go-build-options",-1)])]),_:1})]),e("p",null,[s[12]||(s[12]=a("作者：",-1)),l(n,{href:"https://opensource.com/users/gkamathe"},{default:p(()=>[...s[8]||(s[8]=[a("Gaurav Kamathe",-1)])]),_:1}),s[13]||(s[13]=a(" 选题：",-1)),l(n,{href:"https://github.com/lkxed"},{default:p(()=>[...s[9]||(s[9]=[a("lkxed",-1)])]),_:1}),s[14]||(s[14]=a(" 译者：",-1)),l(n,{href:"https://github.com/lkxed"},{default:p(()=>[...s[10]||(s[10]=[a("lkxed",-1)])]),_:1}),s[15]||(s[15]=a(" 校对：",-1)),l(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[11]||(s[11]=[a("wxy",-1)])]),_:1})]),e("p",null,[s[18]||(s[18]=a("本文由 ",-1)),l(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[16]||(s[16]=[a("LCTT",-1)])]),_:1}),s[19]||(s[19]=a(" 原创编译，",-1)),l(n,{href:"https://linux.cn/"},{default:p(()=>[...s[17]||(s[17]=[a("Linux中国",-1)])]),_:1}),s[20]||(s[20]=a(" 荣誉推出",-1))])])}const C=o(h,[["render",r]]);export{y as __pageData,C as default};
