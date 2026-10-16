import{_ as t,a0 as o,w as h,s as d,I as p,x as a,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const $=JSON.parse('{"title":"如何在 Bash shell 脚本中解析命令行选项 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Bash shell 脚本中解析命令行选项 | LCTT (202108) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Bash shell 脚本中解析命令行选项 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Bash shell 脚本中解析命令行选项 | LCTT (202108) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202108/20210824 How to include options in your Bash shell scripts","title":"如何在 Bash shell 脚本中解析命令行选项","tag":"202108","desc":""},"relativePath":"202108/20210824 How to include options in your Bash shell scripts.md","filePath":"[post].md"}'),r={name:"202108/20210824 How to include options in your Bash shell scripts.md"};function c(u,s,b,g,f,k){const n=o("Link");return h(),d("div",null,[s[25]||(s[25]=p("h1",{id:"如何在-bash-shell-脚本中解析命令行选项",tabindex:"-1"},[a("如何在 Bash shell 脚本中解析命令行选项 "),p("a",{class:"header-anchor",href:"#如何在-bash-shell-脚本中解析命令行选项","aria-label":"Permalink to “如何在 Bash shell 脚本中解析命令行选项”"},"​")],-1)),s[26]||(s[26]=p("blockquote",null,[p("p",null,"给你的 shell 脚本添加选项。")],-1)),s[27]||(s[27]=p("p",null,[p("img",{src:"https://img.linux.net.cn/data/attachment/album/202108/29/110849lvhr1bjg1r43sfcx.jpg",alt:""})],-1)),p("p",null,[s[3]||(s[3]=a("终端命令通常具有 ",-1)),e(n,{href:"https://opensource.com/article/21/8/linux-terminal#options"},{default:l(()=>[...s[0]||(s[0]=[a("选项或开关",-1)])]),_:1}),s[4]||(s[4]=a("，用户可以使用它们来修改命令的执行方式。关于命令行界面的 ",-1)),e(n,{href:"https://opensource.com/article/19/7/what-posix-richard-stallman-explains"},{default:l(()=>[...s[1]||(s[1]=[a("POSIX 规范",-1)])]),_:1}),s[5]||(s[5]=a(" 中就对选项做出了规范，这也是最早的 UNIX 应用程序建立的一个由来已久的惯例，因此你在创建自己的命令时，最好知道如何将选项包含进 ",-1)),e(n,{href:"https://opensource.com/downloads/bash-scripting-ebook"},{default:l(()=>[...s[2]||(s[2]=[a("Bash 脚本",-1)])]),_:1}),s[6]||(s[6]=a(" 中。",-1))]),s[28]||(s[28]=i(`<p>与大多数语言一样，有若干种方法可以解决 Bash 中解析选项的问题。但直到今天，我最喜欢的方法仍然是我从 Patrick Volkerding 的 Slackware 构建脚本中学到的方法，当我第一次发现 Linux 并敢于冒险探索操作系统所附带的纯文本文件时，这些脚本就是我的 shell 脚本的引路人。</p><h3 id="bash-中的选项解析" tabindex="-1">Bash 中的选项解析 <a class="header-anchor" href="#bash-中的选项解析" aria-label="Permalink to “Bash 中的选项解析”">​</a></h3><p>在 Bash 中解析选项的策略是循环遍历所有传递给 shell 脚本的参数，确定它们是否是一个选项，然后转向下一个参数。重复这个过程，直到没有选项为止。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ True ]; do</span></span>
<span class="line"><span>if [ &quot;$1&quot; = &quot;--alpha&quot; -o &quot;$1&quot; = &quot;-a&quot; ]; then</span></span>
<span class="line"><span>    ALPHA=1</span></span>
<span class="line"><span>    shift 1</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    break</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $ALPHA</span></span></code></pre></div><p>在这段代码中，我创建了一个 <code>while</code> 循环，它会一直进行循环操作，直到处理完所有参数。<code>if</code> 语句会试着将在第一个位置（<code>$1</code>）中找到的参数与 <code>--alpha</code> 或 <code>-a</code> 匹配。（此处的待匹配项是任意选项名称，并没有特殊意义。在实际的脚本中，你可以使用 <code>--verbose</code> 和 <code>-v</code> 来触发详细输出）。</p><p><code>shift</code> 关键字会使所有参数位移一位，这样位置 2（<code>$2</code>）的参数移动到位置 1（<code>$1</code>）。处理完所有参数后会触发 <code>else</code> 语句，进而中断 <code>while</code> 循环。</p><p>在脚本的末尾，<code>$ALPHA</code> 的值会输出到终端。</p><p>测试一下这个脚本:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash ./test.sh --alpha</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ bash ./test.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ bash ./test.sh -a</span></span>
<span class="line"><span>1</span></span></code></pre></div><p>可以看到，选项被正确地检测到了。</p><h3 id="在-bash-中检测参数" tabindex="-1">在 Bash 中检测参数 <a class="header-anchor" href="#在-bash-中检测参数" aria-label="Permalink to “在 Bash 中检测参数”">​</a></h3><p>但上面的脚本还有一个问题：多余的参数被忽略了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash ./test.sh --alpha foo</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$</span></span></code></pre></div>`,13)),p("p",null,[s[8]||(s[8]=a("要想捕获非选项名的参数，可以将剩余的参数转储到 ",-1)),e(n,{href:"https://opensource.com/article/18/5/you-dont-know-bash-intro-bash-arrays"},{default:l(()=>[...s[7]||(s[7]=[a("Bash 数组",-1)])]),_:1}),s[9]||(s[9]=a(" 中。",-1))]),s[29]||(s[29]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ True ]; do</span></span>
<span class="line"><span>if [ &quot;$1&quot; = &quot;--alpha&quot; -o &quot;$1&quot; = &quot;-a&quot; ]; then</span></span>
<span class="line"><span>    ALPHA=1</span></span>
<span class="line"><span>    shift 1</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    break</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $ALPHA</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ARG=( &quot;\${@}&quot; )</span></span>
<span class="line"><span>for i in \${ARG[@]}; do</span></span>
<span class="line"><span>    echo $i</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>测试一下新版的脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash ./test.sh --alpha foo</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>foo</span></span>
<span class="line"><span>$ bash ./test.sh foo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo</span></span>
<span class="line"><span>$ bash ./test.sh --alpha foo bar</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>foo</span></span>
<span class="line"><span>bar</span></span></code></pre></div><h3 id="带参选项" tabindex="-1">带参选项 <a class="header-anchor" href="#带参选项" aria-label="Permalink to “带参选项”">​</a></h3><p>有一些选项需要传入参数。比如，你可能希望允许用户设置诸如颜色或图形分辨率之类的属性，或者将应用程序指向自定义配置文件。</p><p>要在 Bash 中实现这一点，你仍然可以像使用布尔开关一样使用 <code>shift</code> 关键字，但参数需要位移两位而不是一位。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ True ]; do</span></span>
<span class="line"><span>if [ &quot;$1&quot; = &quot;--alpha&quot; -o &quot;$1&quot; = &quot;-a&quot; ]; then</span></span>
<span class="line"><span>    ALPHA=1</span></span>
<span class="line"><span>    shift 1</span></span>
<span class="line"><span>elif [ &quot;$1&quot; = &quot;--config&quot; -o &quot;$1&quot; = &quot;-c&quot; ]; then</span></span>
<span class="line"><span>    CONFIG=$2</span></span>
<span class="line"><span>    shift 2</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    break</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $ALPHA</span></span>
<span class="line"><span>echo $CONFIG</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ARG=( &quot;\${@}&quot; )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for i in \${ARG[@]}; do</span></span>
<span class="line"><span>    echo $i</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>在这段代码中，我添加了一个 <code>elif</code> 子句来将每个参数与 <code>--config</code> 和 <code>-c</code> 进行比较。如果匹配，名为 <code>CONFIG</code> 的变量的值就设置为下一个参数的值（这就表示 <code>--config</code> 选项需要一个参数）。所有参数都位移两位：其中一位是跳过 <code>--config</code> 或 <code>-c</code>，另一位是跳过其参数。与上节一样，循环重复直到没有匹配的参数。</p><p>下面是新版脚本的测试：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash ./test.sh --config my.conf foo bar</span></span>
<span class="line"><span>my.conf</span></span>
<span class="line"><span>foo</span></span>
<span class="line"><span>bar</span></span>
<span class="line"><span>$ bash ./test.sh -a --config my.conf baz</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>my.conf</span></span>
<span class="line"><span>baz</span></span></code></pre></div><h3 id="bash-让选项解析变得简单" tabindex="-1">Bash 让选项解析变得简单 <a class="header-anchor" href="#bash-让选项解析变得简单" aria-label="Permalink to “Bash 让选项解析变得简单”">​</a></h3><p>还有一些其他方法也可以解析 Bash 中的选项。你可以替换使用 <code>case</code> 语句或 <code>getopt</code> 命令。无论使用什么方法，给你的用户提供选项都是应用程序的重要功能，而 Bash 让解析选项成为了一件简单的事。</p><hr>`,13)),p("p",null,[s[11]||(s[11]=a("via: ",-1)),e(n,{href:"https://opensource.com/article/21/8/option-parsing-bash"},{default:l(()=>[...s[10]||(s[10]=[a("https://opensource.com/article/21/8/option-parsing-bash",-1)])]),_:1})]),p("p",null,[s[16]||(s[16]=a("作者：",-1)),e(n,{href:"https://opensource.com/users/seth"},{default:l(()=>[...s[12]||(s[12]=[a("Seth Kenlon",-1)])]),_:1}),s[17]||(s[17]=a(" 选题：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[13]||(s[13]=[a("lujun9972",-1)])]),_:1}),s[18]||(s[18]=a(" 译者：",-1)),e(n,{href:"https://github.com/unigeorge"},{default:l(()=>[...s[14]||(s[14]=[a("unigeorge",-1)])]),_:1}),s[19]||(s[19]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:l(()=>[...s[15]||(s[15]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[22]||(s[22]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[20]||(s[20]=[a("LCTT",-1)])]),_:1}),s[23]||(s[23]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:l(()=>[...s[21]||(s[21]=[a("Linux中国",-1)])]),_:1}),s[24]||(s[24]=a(" 荣誉推出",-1))])])}const C=t(r,[["render",c]]);export{$ as __pageData,C as default};
