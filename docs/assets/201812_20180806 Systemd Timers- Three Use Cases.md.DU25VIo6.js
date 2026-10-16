import{_ as l,a0 as o,w as d,s as r,I as e,x as n,a1 as i,A as p,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"Systemd 定时器：三种使用场景 | LCTT x X-CMD","titleTemplate":false,"description":"Systemd 定时器：三种使用场景 | LCTT (201812) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Systemd 定时器：三种使用场景 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Systemd 定时器：三种使用场景 | LCTT (201812) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201812/20180806 Systemd Timers- Three Use Cases","title":"Systemd 定时器：三种使用场景","tag":"201812","desc":""},"relativePath":"201812/20180806 Systemd Timers- Three Use Cases.md","filePath":"[post].md"}'),c={name:"201812/20180806 Systemd Timers- Three Use Cases.md"};function m(u,s,g,b,h,k){const a=o("Link");return d(),r("div",null,[s[38]||(s[38]=e("h1",{id:"systemd-定时器-三种使用场景",tabindex:"-1"},[n("Systemd 定时器：三种使用场景 "),e("a",{class:"header-anchor",href:"#systemd-定时器-三种使用场景","aria-label":"Permalink to “Systemd 定时器：三种使用场景”"},"​")],-1)),s[39]||(s[39]=e("blockquote",null,[e("p",null,"继续 systemd 教程，这些特殊的例子可以展示给你如何更好的利用 systemd 定时器单元。")],-1)),s[40]||(s[40]=e("p",null,[e("img",{src:"https://www.linux.com/sites/lcom/files/styles/rendered_file/public/timer-analogue-1078057.jpg?itok=IKS4TrkE",alt:""})],-1)),e("p",null,[s[1]||(s[1]=n("在这个 systemd 系列教程中，我们",-1)),i(a,{href:"https://linux.cn/article-10182-1.html"},{default:p(()=>[...s[0]||(s[0]=[n("已经在某种程度上讨论了 systemd 定时器单元",-1)])]),_:1}),s[2]||(s[2]=n("。不过，在我们开始讨论 sockets 之前，我们先来看三个例子，这些例子展示了如何最佳化利用这些单元。",-1))]),s[41]||(s[41]=e("h3",{id:"简单的类-cron-行为",tabindex:"-1"},[n("简单的类 cron 行为 "),e("a",{class:"header-anchor",href:"#简单的类-cron-行为","aria-label":"Permalink to “简单的类 cron 行为”"},"​")],-1)),e("p",null,[s[4]||(s[4]=n("我每周都要去收集 ",-1)),i(a,{href:"https://popcon.debian.org/"},{default:p(()=>[...s[3]||(s[3]=[n("Debian popcon 数据",-1)])]),_:1}),s[5]||(s[5]=n("，如果每次都能在同一时间收集更好，这样我就能看到某些应用程序的下载趋势。这是一个可以使用 cron 任务来完成的典型事例，但 systemd 定时器同样能做到：",-1))]),s[42]||(s[42]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 类 cron 的 popcon.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 这里描述了下载并处理 popcon 数据的时刻</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>OnCalendar= Thu *-*-* 05:32:07</span></span>
<span class="line"><span>Unit= popcon.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= basic.target</span></span></code></pre></div><p>实际的 <code>popcon.service</code> 会执行一个常规的 <code>wget</code> 任务，并没有什么特别之处。这里的新内容是 <code>OnCalendar=</code> 指令。这个指令可以让你在一个特定日期的特定时刻来运行某个服务。在这个例子中，<code>Thu</code> 表示 “在周四运行”，<code>*-*-*</code> 表示“具体年份、月份和日期无关紧要”，这些可以翻译成 “不管年月日，只在每周四运行”。</p><p>这样，你就设置了这个服务的运行时间。我选择在欧洲中部夏令时区的上午 5:30 左右运行，那个时候服务器不是很忙。</p><p>如果你的服务器关闭了，而且刚好错过了每周的截止时间，你还可以在同一个计时器中使用像 anacron 一样的功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 具备类似 anacron 功能的 popcon.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 这里描述了下载并处理 popcon 数据的时刻</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>Unit=popcon.service</span></span>
<span class="line"><span>OnCalendar=Thu *-*-* 05:32:07</span></span>
<span class="line"><span>Persistent=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=basic.target</span></span></code></pre></div><p>当你将 <code>Persistent=</code> 指令设为真值时，它会告诉 systemd，如果服务器在本该它运行的时候关闭了，那么在启动后就要立刻运行服务。这意味着，如果机器在周四凌晨停机了（比如说维护），一旦它再次启动后，<code>popcon.service</code> 将会立刻执行。在这之后，它的运行时间将会回到例行性的每周四早上 5:32.</p><p>到目前为止，就是这么简单直白。</p><h3 id="延迟执行" tabindex="-1">延迟执行 <a class="header-anchor" href="#延迟执行" aria-label="Permalink to “延迟执行”">​</a></h3>`,8)),e("p",null,[s[7]||(s[7]=n("但是，我们提升一个档次，来“改进”这个",-1)),i(a,{href:"https://www.linux.com/blog/intro-to-linux/2018/6/systemd-services-reacting-change"},{default:p(()=>[...s[6]||(s[6]=[n("基于 systemd 的监控系统",-1)])]),_:1}),s[8]||(s[8]=n("。你应该记得，当你接入摄像头的时候，系统就会开始拍照。假设你并不希望它在你安装摄像头的时候拍下你的脸。你希望将拍照服务的启动时间向后推迟一两分钟，这样你就有时间接入摄像头，然后走到画框外面。",-1))]),s[43]||(s[43]=t(`<p>为了完成这件事，首先你要更改 Udev 规则，将它指向一个定时器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ACTION==&quot;add&quot;, SUBSYSTEM==&quot;video4linux&quot;, ATTRS{idVendor}==&quot;03f0&quot;, </span></span>
<span class="line"><span>ATTRS{idProduct}==&quot;e207&quot;, TAG+=&quot;systemd&quot;, ENV{SYSTEMD_WANTS}=&quot;picchanged.timer&quot;, </span></span>
<span class="line"><span>SYMLINK+=&quot;mywebcam&quot;, MODE=&quot;0666&quot;</span></span></code></pre></div><p>这个定时器看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># picchanged.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 在摄像头接入的一分钟后，开始运行 picchanged</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>OnActiveSec= 1 m</span></span>
<span class="line"><span>Unit= picchanged.path</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= basic.target</span></span></code></pre></div>`,4)),e("p",null,[s[10]||(s[10]=n("在你接入摄像头后，Udev 规则被触发，它会调用定时器。这个定时器启动后会等上一分钟（",-1)),s[11]||(s[11]=e("code",null,"OnActiveSec= 1 m",-1)),s[12]||(s[12]=n("），然后运行 ",-1)),s[13]||(s[13]=e("code",null,"picchanged.path",-1)),s[14]||(s[14]=n("，它会",-1)),i(a,{href:"https://www.linux.com/blog/learn/intro-to-linux/2018/6/systemd-services-monitoring-files-and-directories"},{default:p(()=>[...s[9]||(s[9]=[n("监视主图片的变化",-1)])]),_:1}),s[15]||(s[15]=n("。",-1)),s[16]||(s[16]=e("code",null,"picchanged.path",-1)),s[17]||(s[17]=n(" 还会负责接触 ",-1)),s[18]||(s[18]=e("code",null,"webcan.service",-1)),s[19]||(s[19]=n("，这个实际用来拍照的服务。",-1))]),s[44]||(s[44]=t(`<h3 id="在每天的特定时刻启停-minetest-服务器" tabindex="-1">在每天的特定时刻启停 Minetest 服务器 <a class="header-anchor" href="#在每天的特定时刻启停-minetest-服务器" aria-label="Permalink to “在每天的特定时刻启停 Minetest 服务器”">​</a></h3><p>在最后一个例子中，我们认为你决定用 systemd 作为唯一的依赖。讲真，不管怎么样，systemd 差不多要接管你的生活了。为什么不拥抱这个必然性呢？</p><p>你有个为你的孩子设置的 Minetest 服务。不过，你还想要假装关心一下他们的教育和成长，要让他们做作业和家务活。所以你要确保 Minetest 只在每天晚上的一段时间内可用，比如五点到七点。</p><p>这个跟之前的“<em>在特定时间启动服务</em>”不太一样。写个定时器在下午五点启动服务很简单…：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># minetest.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 在每天下午五点运行 minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>OnCalendar= *-*-* 17:00:00</span></span>
<span class="line"><span>Unit= minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= basic.target</span></span></code></pre></div><p>…可是编写一个对应的定时器，让它在特定时刻关闭服务，则需要更大剂量的横向思维。</p><p>我们从最明显的东西开始 —— 设置定时器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># stopminetest.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 每天晚上七点停止 minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>OnCalendar= *-*-* 19:05:00</span></span>
<span class="line"><span>Unit= stopminetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= basic.target</span></span></code></pre></div><p>这里棘手的部分是如何去告诉 <code>stopminetest.service</code> 去 —— 你知道的 —— 停止 Minetest. 我们无法从 <code>minetest.service</code> 中传递 Minetest 服务器的 PID. 而且 systemd 的单元词汇表中也没有明显的命令来停止或禁用正在运行的服务。</p><p>我们的诀窍是使用 systemd 的 <code>Conflicts=</code> 指令。它和 systemd 的 <code>Wants=</code> 指令类似，不过它所做的事情_正相反_。如果你有一个 <code>b.service</code> 单元，其中包含一个 <code>Wants=a.service</code> 指令，在这个单元启动时，如果 <code>a.service</code> 没有运行，则 <code>b.service</code> 会运行它。同样，如果你的 <code>b.service</code> 单元中有一行写着 <code>Conflicts= a.service</code>，那么在 <code>b.service</code> 启动时，systemd 会停止 <code>a.service</code>.</p><p>这种机制用于两个服务在尝试同时控制同一资源时会发生冲突的场景，例如当两个服务要同时访问打印机的时候。通过在首选服务中设置 <code>Conflicts=</code>，你就可以确保它会覆盖掉最不重要的服务。</p><p>不过，你会在一个稍微不同的场景中来使用 <code>Conflicts=</code>. 你将使用 <code>Conflicts=</code> 来干净地关闭 <code>minetest.service</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># stopminetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 关闭 Minetest 服务</span></span>
<span class="line"><span>Conflicts= minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type= oneshot</span></span>
<span class="line"><span>ExecStart= /bin/echo &quot;Closing down minetest.service&quot;</span></span></code></pre></div><p><code>stopminetest.service</code> 并不会做特别的东西。事实上，它什么都不会做。不过因为它包含那行 <code>Conflicts=</code>，所以在它启动时，systemd 会关掉 <code>minetest.service</code>.</p><p>在你完美的 Minetest 设置中，还有最后一点涟漪：你下班晚了，错过了服务器的开机时间，可当你开机的时候游戏时间还没结束，这该怎么办？<code>Persistent=</code> 指令（如上所述）在错过开始时间后仍然可以运行服务，但这个方案还是不行。如果你在早上十一点把服务器打开，它就会启动 Minetest，而这不是你想要的。你真正需要的是一个确保 systemd 只在晚上五到七点启动 Minetest 的方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># minetest.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 在下午五到七点内的每分钟都运行 minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>OnCalendar= *-*-* 17..19:*:00</span></span>
<span class="line"><span>Unit= minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= basic.target</span></span></code></pre></div><p><code>OnCalendar= *-*-* 17..19:*:00</code> 这一行有两个有趣的地方：(1) <code>17..19</code> 并不是一个时间点，而是一个时间段，在这个场景中是 17 到 19 点；以及，(2) 分钟字段中的 <code>*</code> 表示服务每分钟都要运行。因此，你会把它读做 “在下午五到七点间的每分钟，运行 minetest.service”</p><p>不过还有一个问题：一旦 <code>minetest.service</code> 启动并运行，你会希望 <code>minetest.timer</code> 不要再次尝试运行它。你可以在 <code>minetest.service</code> 中包含一条 <code>Conflicts=</code> 指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># minetest.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description= 运行 Minetest 服务器</span></span>
<span class="line"><span>Conflicts= minetest.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type= simple</span></span>
<span class="line"><span>User= &lt;your user name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ExecStart= /usr/bin/minetest --server</span></span>
<span class="line"><span>ExecStop= /bin/kill -2 $MAINPID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy= multi-user.targe</span></span></code></pre></div><p>上面的 <code>Conflicts=</code> 指令会保证在 <code>minstest.service</code> 成功运行后，<code>minetest.timer</code> 就会立即停止。</p><p>现在，启用并启动 <code>minetest.timer</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemctl enable minetest.timer</span></span>
<span class="line"><span>systemctl start minetest.timer</span></span></code></pre></div><p>而且，如果你在六点钟启动了服务器，<code>minetest.timer</code> 会启用；到了五到七点，<code>minetest.timer</code> 每分钟都会尝试启动 <code>minetest.service</code>。不过，一旦 <code>minetest.service</code> 开始运行，systemd 会停止 <code>minetest.timer</code>，因为它会与 <code>minetest.service</code> “冲突”，从而避免计时器在服务已经运行的情况下还会不断尝试启动服务。</p><p>在首先启动某个服务时杀死启动它的计时器，这么做有点反直觉，但它是有效的。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>你可能会认为，有更好的方式来做上面这些事。我在很多文章中看到过“过度设计”这个术语，尤其是在用 systemd 定时器来代替 cron 的时候。</p><p>但是，这个系列文章的目的不是为任何具体问题提供最佳解决方案。它的目的是为了尽可能多地使用 systemd 来解决问题，甚至会到荒唐的程度。它的目的是展示大量的例子，来说明如何利用不同类型的单位及其包含的指令。我们的读者，也就是你，可以从这篇文章中找到所有这些的可实践范例。</p><p>尽管如此，我们还有一件事要做：下回中，我们会关注 sockets 和 targets，然后我们将完成对 systemd 单元的介绍。</p>`,28)),e("p",null,[s[21]||(s[21]=n("你可以在 Linux 基金会和 edX 中，通过免费的 ",-1)),i(a,{href:"https://training.linuxfoundation.org/linux-courses/system-administration-training/introduction-to-linux"},{default:p(()=>[...s[20]||(s[20]=[n("Linux 介绍",-1)])]),_:1}),s[22]||(s[22]=n("课程中，学到更多关于 Linux 的知识。",-1))]),s[45]||(s[45]=e("hr",null,null,-1)),e("p",null,[s[24]||(s[24]=n("via: ",-1)),i(a,{href:"https://www.linux.com/blog/intro-to-linux/2018/8/systemd-timers-two-use-cases-0"},{default:p(()=>[...s[23]||(s[23]=[n("https://www.linux.com/blog/intro-to-linux/2018/8/systemd-timers-two-use-cases-0",-1)])]),_:1})]),e("p",null,[s[29]||(s[29]=n("作者：",-1)),i(a,{href:"https://www.linux.com/users/bro66"},{default:p(()=>[...s[25]||(s[25]=[n("Paul Brown",-1)])]),_:1}),s[30]||(s[30]=n(" 选题：",-1)),i(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[26]||(s[26]=[n("lujun9972",-1)])]),_:1}),s[31]||(s[31]=n(" 译者：",-1)),i(a,{href:"https://github.com/StdioA"},{default:p(()=>[...s[27]||(s[27]=[n("StdioA",-1)])]),_:1}),s[32]||(s[32]=n(" 校对：",-1)),i(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[28]||(s[28]=[n("wxy",-1)])]),_:1})]),e("p",null,[s[35]||(s[35]=n("本文由 ",-1)),i(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[33]||(s[33]=[n("LCTT",-1)])]),_:1}),s[36]||(s[36]=n(" 原创编译，",-1)),i(a,{href:"https://linux.cn/"},{default:p(()=>[...s[34]||(s[34]=[n("Linux中国",-1)])]),_:1}),s[37]||(s[37]=n(" 荣誉推出",-1))])])}const T=l(c,[["render",m]]);export{v as __pageData,T as default};
