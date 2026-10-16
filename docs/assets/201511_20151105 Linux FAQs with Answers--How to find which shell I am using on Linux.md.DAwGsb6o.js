import{_ as r,a0 as i,w as h,s as p,I as s,x as e,a1 as t,A as o,ao as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const $=JSON.parse('{"title":"Linux 有问必答：如何知道当前正在使用的 shell 是哪个？ | LCTT x X-CMD","titleTemplate":false,"description":"Linux 有问必答：如何知道当前正在使用的 shell 是哪个？ | LCTT (201511) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 有问必答：如何知道当前正在使用的 shell 是哪个？ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 有问必答：如何知道当前正在使用的 shell 是哪个？ | LCTT (201511) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201511/20151105 Linux FAQs with Answers--How to find which shell I am using on Linux","title":"Linux 有问必答：如何知道当前正在使用的 shell 是哪个？","tag":"201511","desc":""},"relativePath":"201511/20151105 Linux FAQs with Answers--How to find which shell I am using on Linux.md","filePath":"[post].md"}'),u={name:"201511/20151105 Linux FAQs with Answers--How to find which shell I am using on Linux.md"};function d(m,l,x,g,f,L){const n=i("Link");return h(),p("div",null,[l[16]||(l[16]=s("h1",{id:"linux-有问必答-如何知道当前正在使用的-shell-是哪个",tabindex:"-1"},[e("Linux 有问必答：如何知道当前正在使用的 shell 是哪个？ "),s("a",{class:"header-anchor",href:"#linux-有问必答-如何知道当前正在使用的-shell-是哪个","aria-label":"Permalink to “Linux 有问必答：如何知道当前正在使用的 shell 是哪个？”"},"​")],-1)),l[17]||(l[17]=s("blockquote",null,[s("p",null,[s("strong",null,"问题"),e(": 我经常在命令行中切换 shell。是否有一个快速简便的方法来找出我当前正在使用的 shell 呢？此外，我怎么能找到当前 shell 的版本？")])],-1)),l[18]||(l[18]=s("h3",{id:"找到你当前正在使用的-shell-版本",tabindex:"-1"},[e("找到你当前正在使用的 Shell 版本 "),s("a",{class:"header-anchor",href:"#找到你当前正在使用的-shell-版本","aria-label":"Permalink to “找到你当前正在使用的 Shell 版本”"},"​")],-1)),l[19]||(l[19]=s("p",null,"有多种方式可以查看你目前在使用什么 shell，最简单的方法就是通过使用 shell 的特殊参数。",-1)),s("p",null,[l[1]||(l[1]=e("其一，",-1)),t(n,{href:"http://ask.xmodulo.com/process-id-pid-shell-script.html"},{default:o(()=>[...l[0]||(l[0]=[e('一个名为 "$$" 的特殊参数',-1)])]),_:1}),l[2]||(l[2]=e(" 表示当前你正在运行的 shell 实例的 PID。此参数是只读的，不能被修改。所以，下面的命令也将显示你正在运行的 shell 的名字：",-1))]),l[20]||(l[20]=a(`<pre><code>$ ps -p $$

  PID TTY          TIME CMD
21666 pts/4    00:00:00 bash
</code></pre><p>上述命令可在所有可用的 shell 中工作。</p><p>如果你不使用 csh，找到当前使用的 shell 的另外一个办法是使用特殊参数 “$0” ，它表示当前正在运行的 shell 或 shell 脚本的名称。这是 Bash 的一个特殊参数，但也可用在其他 shell 中，如 sh、zsh、tcsh 或 dash。使用 echo 命令可以查看你目前正在使用的 shell 的名称。</p><pre><code>$ echo $0

bash
</code></pre><p>不要被一个叫做 $SHELL 的单独的环境变量所迷惑，它被设置为你的默认 shell 的完整路径。因此，这个变量并不一定指向你当前使用的 shell。例如，即使你在终端中调用不同的 shell，$SHELL 也保持不变。</p><pre><code>$ echo $SHELL

/bin/shell
</code></pre><p><img src="https://c2.staticflickr.com/6/5688/22544087680_4a9c180485_c.jpg" alt=""></p><p>因此，找出当前的shell，你应该使用 $$ 或 $0，但不是 $SHELL。</p><h3 id="找出当前-shell-的版本" tabindex="-1">找出当前 Shell 的版本 <a class="header-anchor" href="#找出当前-shell-的版本" aria-label="Permalink to “找出当前 Shell 的版本”">​</a></h3><p>一旦你知道你使用的是哪个 shell，你可能想知道此 shell 的版本。为此，在命令行中输入 shell 并在后面加上 “--version” 参数可以查看版本信息。例如：</p><p><strong>对于</strong> bash <strong>shell</strong> :</p><pre><code>$ bash --version

GNU bash, version 4.3.30(1)-release (x86_64-pc-linux-gnu)
Copyright (C) 2013 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later 

This is free software; you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
</code></pre><p><strong>对于</strong> zsh <strong>shell</strong>:</p><pre><code>$ zsh --version

zsh 5.0.7 (x86_64-pc-linux-gnu)
</code></pre><p><strong>对于</strong> tcsh <strong>shell</strong>: $ tcsh --version</p><pre><code>tcsh 6.18.01 (Astron) 2012-02-14 (x86_64-unknown-linux) options wide,nls,dl,al,kan,rh,nd,color,filec
</code></pre><p>对于某些 shell，你还可以使用 shell 特定的变量（例如，$BASH_VERSION 或 $ZSH_VERSION）。</p><pre><code>$ echo $BASH_VERSION

4.3.8(1)-release
</code></pre><hr>`,19)),s("p",null,[l[4]||(l[4]=e("via: ",-1)),t(n,{href:"http://ask.xmodulo.com/which-shell-am-i-using.html"},{default:o(()=>[...l[3]||(l[3]=[e("http://ask.xmodulo.com/which-shell-am-i-using.html",-1)])]),_:1})]),s("p",null,[l[8]||(l[8]=e("作者：",-1)),t(n,{href:"http://ask.xmodulo.com/author/nanni"},{default:o(()=>[...l[5]||(l[5]=[e("Dan Nanni",-1)])]),_:1}),l[9]||(l[9]=e(" 译者：",-1)),t(n,{href:"https://github.com/strugglingyouth"},{default:o(()=>[...l[6]||(l[6]=[e("strugglingyouth",-1)])]),_:1}),l[10]||(l[10]=e(" 校对：",-1)),t(n,{href:"https://github.com/wxy"},{default:o(()=>[...l[7]||(l[7]=[e("wxy",-1)])]),_:1})]),s("p",null,[l[13]||(l[13]=e("本文由 ",-1)),t(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...l[11]||(l[11]=[e("LCTT",-1)])]),_:1}),l[14]||(l[14]=e(" 原创编译，",-1)),t(n,{href:"https://linux.cn/"},{default:o(()=>[...l[12]||(l[12]=[e("Linux中国",-1)])]),_:1}),l[15]||(l[15]=e(" 荣誉推出",-1))])])}const S=r(u,[["render",d]]);export{$ as __pageData,S as default};
