import{_ as t,a0 as o,w as r,s as d,ao as l,I as i,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"UNIX 的怪东西 | LCTT x X-CMD","titleTemplate":false,"description":"UNIX 的怪东西 | LCTT (201808) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"UNIX 的怪东西 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"UNIX 的怪东西 | LCTT (201808) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201808/20180803 UNIX curiosities","title":"UNIX 的怪东西","tag":"201808","desc":""},"relativePath":"201808/20180803 UNIX curiosities.md","filePath":"[post].md"}'),u={name:"201808/20180803 UNIX curiosities.md"};function f(g,s,m,k,c,T){const a=o("Link");return r(),d("div",null,[s[27]||(s[27]=l(`<h1 id="unix-的怪东西" tabindex="-1">UNIX 的怪东西 <a class="header-anchor" href="#unix-的怪东西" aria-label="Permalink to “UNIX 的怪东西”">​</a></h1><p>最近我在用我编写的各种工具做更多 UNIX 下的事情，我遇到了两个有趣的问题。这些都不是 “bug”，而是我没想到的行为。</p><h3 id="线程安全的-printf" tabindex="-1">线程安全的 printf <a class="header-anchor" href="#线程安全的-printf" aria-label="Permalink to “线程安全的 printf”">​</a></h3><p>我有一个 C 程序从磁盘读取一些图像，进行一些处理，并将有关这些图像的输出写入 STDOUT。伪代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for(imagefilename in images)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    results = process(imagefilename);</span></span>
<span class="line"><span>    printf(results);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>对于每个图像都是独立处理的，因此我自然希望将处理任务分配在各个 CPU 之间以加快速度。我通常使用 <code>fork()</code>，所以我写了这个：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for(child in children)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    pipe = create_pipe();</span></span>
<span class="line"><span>    worker(pipe);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// main parent process</span></span>
<span class="line"><span>for(imagefilename in images)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    write(pipe[i_image % N_children], imagefilename)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>worker()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    while(1)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        imagefilename = read(pipe);</span></span>
<span class="line"><span>        results = process(imagefilename);</span></span>
<span class="line"><span>        printf(results);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,7)),i("p",null,[s[1]||(s[1]=n("这是正常的做法：我为 IPC 创建管道，并通过这些管道给子进程 worker 发送图像名。每个 worker _能够_通过另一组管道将其结果写回主进程，但这很痛苦，所以每个 worker 都直接写入共享 STDOUT。这工作正常，但正如人们所预料的那样，对 STDOUT 的写入发生冲突，因此各种图像的结果最终会混杂在一起。那很糟糕。我不想自己设置个锁，但幸运的是 GNU libc 为它提供了函数：",-1)),p(a,{href:"https://www.gnu.org/software/libc/manual/html_node/Streams-and-Threads.html"},{default:e(()=>[...s[0]||(s[0]=[n("flockfile()",-1)])]),_:1}),s[2]||(s[2]=n("。我把它们放进去了……但是没有用！为什么？因为 ",-1)),s[3]||(s[3]=i("code",null,"flockfile()",-1)),s[4]||(s[4]=n(" 最终因为 ",-1)),s[5]||(s[5]=i("code",null,"fork()",-1)),s[6]||(s[6]=n(" 的写时复制行为而被限制在单个子进程中。即 ",-1)),s[7]||(s[7]=i("code",null,"fork()",-1)),s[8]||(s[8]=n("提供的额外安全性（与线程相比），这实际上最终破坏了锁。",-1))]),s[28]||(s[28]=l(`<p>我没有尝试使用其他锁机制（例如 pthread 互斥锁），但我可以想象它们会遇到类似的问题。我想保持简单，所以将输出发送回父输出是不可能的：这给程序员和运行程序的计算机制造了更多的工作。</p><p>解决方案：使用线程而不是 <code>fork()</code>。这有制造冗余管道的好的副作用。最终的伪代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for(children)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    pthread_create(worker, child_index);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>for(children)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    pthread_join(child);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>worker(child_index)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    for(i_image = child_index; i_image &lt; N_images; i_image += N_children)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        results = process(images[i_image]);</span></span>
<span class="line"><span>        flockfile(stdout);</span></span>
<span class="line"><span>        printf(results);</span></span>
<span class="line"><span>        funlockfile(stdout);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这更简单，如预期的那样工作。我猜有时线程更好。</p><h3 id="将部分读取的文件传递给子进程" tabindex="-1">将部分读取的文件传递给子进程 <a class="header-anchor" href="#将部分读取的文件传递给子进程" aria-label="Permalink to “将部分读取的文件传递给子进程”">​</a></h3>`,5)),i("p",null,[s[10]||(s[10]=n("对于各种 ",-1)),p(a,{href:"http://www.github.com/dkogan/vnlog"},{default:e(()=>[...s[9]||(s[9]=[n("vnlog",-1)])]),_:1}),s[11]||(s[11]=n(" 工具，我需要实现这个操作序列：",-1))]),s[29]||(s[29]=l("<ol><li>进程打开一个关闭 <code>O_CLOEXEC</code> 标志的文件</li><li>进程读取此文件的一部分（在 vnlog 的情况下直到图例的末尾）</li><li>进程调用 <code>exec()</code> 以调用另一个程序来处理已经打开的文件的其余部分</li></ol><p>第二个程序可能需要命令行中的文件名而不是已打开的文件描述符，因为第二个程序可能自己调用 <code>​​open()</code>。如果我传递文件名，这个新程序将重新打开文件，然后从头开始读取文件，而不是从原始程序停止的位置开始读取。在我的程序上不可以这样做，因此将文件名传递给第二个程序是行不通的。</p><p>所以我真的需要以某种方式传递已经打开的文件描述符。我在使用 Linux（其他操作系统可能在这里表现不同），所以我理论上可以通过传递 <code>/dev/fd/N</code> 而不是文件名来实现。但事实证明这也不起作用。在 Linux上（再说一次，也许是特定于 Linux）对于普通文件 <code>/dev/fd/N</code> 是原始文件的符号链接。所以这最终做的是与传递文件名完全相同的事情。</p><p>但有一个临时方案！如果我们正在读取管道而不是文件，那么没有什么可以符号链接，并且 <code>/dev/fd/N</code> 最终将原始管道传递给第二个进程，然后程序正常工作。我可以通过将上面的 <code>open(&quot;filename&quot;)</code> 更改为 <code>popen(&quot;cat filename&quot;)</code> 之类的东西来伪装。呸！这真的是我们所能做到最好的吗？这在 BSD 上看上去会怎么样？</p><hr>",5)),i("p",null,[s[13]||(s[13]=n("via: ",-1)),p(a,{href:"http://notes.secretsauce.net/notes/2018/08/03_unix-curiosities.html"},{default:e(()=>[...s[12]||(s[12]=[n("http://notes.secretsauce.net/notes/2018/08/03_unix-curiosities.html",-1)])]),_:1})]),i("p",null,[s[18]||(s[18]=n("作者：",-1)),p(a,{href:"http://notes.secretsauce.net/"},{default:e(()=>[...s[14]||(s[14]=[n("Dima Kogan",-1)])]),_:1}),s[19]||(s[19]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[15]||(s[15]=[n("lujun9972",-1)])]),_:1}),s[20]||(s[20]=n(" 译者：",-1)),p(a,{href:"https://github.com/geekpi"},{default:e(()=>[...s[16]||(s[16]=[n("geekpi",-1)])]),_:1}),s[21]||(s[21]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[24]||(s[24]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[22]||(s[22]=[n("LCTT",-1)])]),_:1}),s[25]||(s[25]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[23]||(s[23]=[n("Linux中国",-1)])]),_:1}),s[26]||(s[26]=n(" 荣誉推出",-1))])])}const x=t(u,[["render",f]]);export{C as __pageData,x as default};
