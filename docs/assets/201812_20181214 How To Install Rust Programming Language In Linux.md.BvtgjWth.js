import{_ as l,a0 as t,w as o,s as r,ao as u,I as e,x as n,a1 as i,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何在 Linux 中安装 Rust 编程语言 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 中安装 Rust 编程语言 | LCTT (201812) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 中安装 Rust 编程语言 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 中安装 Rust 编程语言 | LCTT (201812) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201812/20181214 How To Install Rust Programming Language In Linux","title":"如何在 Linux 中安装 Rust 编程语言","tag":"201812","desc":""},"relativePath":"201812/20181214 How To Install Rust Programming Language In Linux.md","filePath":"[post].md"}'),d={name:"201812/20181214 How To Install Rust Programming Language In Linux.md"};function c(g,s,h,k,b,f){const a=t("Link");return o(),r("div",null,[s[15]||(s[15]=u(`<h1 id="如何在-linux-中安装-rust-编程语言" tabindex="-1">如何在 Linux 中安装 Rust 编程语言 <a class="header-anchor" href="#如何在-linux-中安装-rust-编程语言" aria-label="Permalink to “如何在 Linux 中安装 Rust 编程语言”">​</a></h1><p>Rust 通常被称为 rust-lang。Rust 是一个由 Mozilla Research 赞助的通用的、多范式、现代的、跨平台和开源系统编程语言。</p><p>它旨在实现安全性、速度和并发性等目标。</p><p>Rust 在语法上与 C++ 相似，但它的设计者希望它在保持性能的同时提供更好的内存安全性。</p><p>Rust 目前在许多组织中使用，例如 Firefox、Chef、Dropbox、Oracle、GNOME 等。</p><h3 id="如何在-linux-中安装-rust-语言" tabindex="-1">如何在 Linux 中安装 Rust 语言？ <a class="header-anchor" href="#如何在-linux-中安装-rust-语言" aria-label="Permalink to “如何在 Linux 中安装 Rust 语言？”">​</a></h3><p>我们可以通过多种方式安装 Rust，但以下是官方推荐的安装方式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl https://sh.rustup.rs -sSf | sh</span></span>
<span class="line"><span>info: downloading installer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Welcome to Rust!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This will download and install the official compiler for the Rust programming </span></span>
<span class="line"><span>language, and its package manager, Cargo.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>It will add the cargo, rustc, rustup and other commands to Cargo&#39;s bin </span></span>
<span class="line"><span>directory, located at:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /home/daygeek/.cargo/bin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This path will then be added to your PATH environment variable by modifying the</span></span>
<span class="line"><span>profile files located at:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /home/daygeek/.profile</span></span>
<span class="line"><span>  /home/daygeek/.bash_profile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You can uninstall at any time with rustup self uninstall and these changes will</span></span>
<span class="line"><span>be reverted.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Current installation options:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   default host triple: x86_64-unknown-linux-gnu</span></span>
<span class="line"><span>     default toolchain: stable</span></span>
<span class="line"><span>  modify PATH variable: yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1) Proceed with installation (default)</span></span>
<span class="line"><span>2) Customize installation</span></span>
<span class="line"><span>3) Cancel installation</span></span>
<span class="line"><span>&gt;1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>info: syncing channel updates for &#39;stable-x86_64-unknown-linux-gnu&#39;</span></span>
<span class="line"><span>info: latest update on 2018-12-06, rust version 1.31.0 (abe02cefd 2018-12-04)</span></span>
<span class="line"><span>info: downloading component &#39;rustc&#39;</span></span>
<span class="line"><span> 77.7 MiB /  77.7 MiB (100 %)   1.2 MiB/s ETA:   0 s                </span></span>
<span class="line"><span>info: downloading component &#39;rust-std&#39;</span></span>
<span class="line"><span> 54.2 MiB /  54.2 MiB (100 %)   1.2 MiB/s ETA:   0 s                </span></span>
<span class="line"><span>info: downloading component &#39;cargo&#39;</span></span>
<span class="line"><span>  4.7 MiB /   4.7 MiB (100 %)   1.2 MiB/s ETA:   0 s                </span></span>
<span class="line"><span>info: downloading component &#39;rust-docs&#39;</span></span>
<span class="line"><span>  8.5 MiB /   8.5 MiB (100 %)   1.2 MiB/s ETA:   0 s                </span></span>
<span class="line"><span>info: installing component &#39;rustc&#39;</span></span>
<span class="line"><span>info: installing component &#39;rust-std&#39;</span></span>
<span class="line"><span>info: installing component &#39;cargo&#39;</span></span>
<span class="line"><span>info: installing component &#39;rust-docs&#39;</span></span>
<span class="line"><span>info: default toolchain set to &#39;stable&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  stable installed - rustc 1.31.0 (abe02cefd 2018-12-04)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Rust is installed now. Great!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To get started you need Cargo&#39;s bin directory ($HOME/.cargo/bin) in your PATH </span></span>
<span class="line"><span>environment variable. Next time you log in this will be done automatically.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To configure your current shell run source $HOME/.cargo/env</span></span></code></pre></div><p>运行以下命令配置当前 shell。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ source $HOME/.cargo/env</span></span></code></pre></div><p>运行以下命令验证已安装的 Rust 版本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rustc --version</span></span>
<span class="line"><span>rustc 1.31.0 (abe02cefd 2018-12-04)</span></span></code></pre></div><h3 id="如何测试-rust-编程语言" tabindex="-1">如何测试 Rust 编程语言？ <a class="header-anchor" href="#如何测试-rust-编程语言" aria-label="Permalink to “如何测试 Rust 编程语言？”">​</a></h3><p>安装 Rust 后，请按照以下步骤检查 Rust 语言是否正常工作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir ~/projects</span></span>
<span class="line"><span>$ cd ~/projects</span></span>
<span class="line"><span>$ mkdir hello_world</span></span>
<span class="line"><span>$ cd hello_world</span></span></code></pre></div><p>创建一个文件并添加以下代码并保存。确保 Rust 文件始终以 .rs 扩展名结尾。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vi 2g.rs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span> println!(&quot;Hello, It&#39;s 2DayGeek.com - Best Linux Practical Blog!&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>运行以下命令编译 rust 代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rustc 2g.rs</span></span></code></pre></div><p>上面的命令将在同一目录中创建一个可执行的 Rust 程序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -lh</span></span>
<span class="line"><span>total 3.9M</span></span>
<span class="line"><span>-rwxr-xr-x 1 daygeek daygeek 3.9M Dec 14 11:09 2g</span></span>
<span class="line"><span>-rw-r--r-- 1 daygeek daygeek 86 Dec 14 11:09 2g.rs</span></span></code></pre></div><p>运行 Rust 可执行文件得到输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./2g</span></span>
<span class="line"><span>Hello, It&#39;s 2DayGeek.com - Best Linux Practical Blog!</span></span></code></pre></div><p>好了！正常工作了。</p><p>将 Rust 更新到最新版本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rustup update</span></span>
<span class="line"><span>info: syncing channel updates for &#39;stable-x86_64-unknown-linux-gnu&#39;</span></span>
<span class="line"><span>info: checking for self-updates</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  stable-x86_64-unknown-linux-gnu unchanged - rustc 1.31.0 (abe02cefd 2018-12-04)</span></span></code></pre></div><p>运行以下命令从系统中删除 Rust 包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rustup self uninstall</span></span></code></pre></div><p>卸载 Rust 包后，删除 Rust 项目目录。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rm -fr ~/projects</span></span></code></pre></div><hr>`,31)),e("p",null,[s[1]||(s[1]=n("via: ",-1)),i(a,{href:"https://www.2daygeek.com/how-to-install-rust-programming-language-in-linux/"},{default:p(()=>[...s[0]||(s[0]=[n("https://www.2daygeek.com/how-to-install-rust-programming-language-in-linux/",-1)])]),_:1})]),e("p",null,[s[6]||(s[6]=n("作者：",-1)),i(a,{href:"https://www.2daygeek.com/author/prakash/"},{default:p(()=>[...s[2]||(s[2]=[n("Prakash Subramanian",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),i(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),i(a,{href:"https://github.com/geekpi"},{default:p(()=>[...s[4]||(s[4]=[n("geekpi",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),i(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),e("p",null,[s[12]||(s[12]=n("本文由 ",-1)),i(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),i(a,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const C=l(d,[["render",c]]);export{y as __pageData,C as default};
