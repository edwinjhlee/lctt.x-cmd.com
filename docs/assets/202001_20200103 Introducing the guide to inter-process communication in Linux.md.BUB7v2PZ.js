import{_ as t,a0 as o,w as r,s as u,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"免费电子书《Linux 进程间通信指南》介绍 | LCTT x X-CMD","titleTemplate":false,"description":"免费电子书《Linux 进程间通信指南》介绍 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"免费电子书《Linux 进程间通信指南》介绍 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"免费电子书《Linux 进程间通信指南》介绍 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20200103 Introducing the guide to inter-process communication in Linux","title":"免费电子书《Linux 进程间通信指南》介绍","tag":"202001","desc":""},"relativePath":"202001/20200103 Introducing the guide to inter-process communication in Linux.md","filePath":"[post].md"}'),d={name:"202001/20200103 Introducing the guide to inter-process communication in Linux.md"};function g(m,s,c,h,k,b){const p=o("Link");return r(),u("div",null,[s[37]||(s[37]=a("h1",{id:"免费电子书《linux-进程间通信指南》介绍",tabindex:"-1"},[n("免费电子书《Linux 进程间通信指南》介绍 "),a("a",{class:"header-anchor",href:"#免费电子书《linux-进程间通信指南》介绍","aria-label":"Permalink to “免费电子书《Linux 进程间通信指南》介绍”"},"​")],-1)),s[38]||(s[38]=a("blockquote",null,[a("p",null,"这本免费的电子书使经验丰富的程序员更深入了解 Linux 中进程间通信（IPC）的核心概念和机制。")],-1)),s[39]||(s[39]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/30/115631jthl0h61zhhmwpv1.jpeg",alt:""})],-1)),s[40]||(s[40]=a("p",null,[n("让一个软件过程与另一个软件过程进行对话是一个微妙的平衡行为。但是，它对于应用程序而言可能是至关重要的功能，因此这是任何从事复杂项目的程序员都必须解决的问题。你的应用程序是否需要启动由其它软件处理的工作；监视外设或网络上正在执行的操作；或者检测来自其它来源的信号，当你的软件需要依赖其自身代码之外的东西来知道下一步做什么或什么时候做时，你就需要考虑"),a("ruby",null,[n("进程间通信"),a("rt",null,"inter-process communication")]),n("（IPC）。")],-1)),a("p",null,[s[1]||(s[1]=n("这在 Unix 操作系统上已经由来已久了，这可能是因为人们早期预期软件会来自各种来源。按照相同的传统，Linux 提供了一些同样的 IPC 接口和一些新接口。Linux 内核具有多种 IPC 方法，",-1)),e(p,{href:"https://mirrors.edge.kernel.org/pub/linux/utils/util-linux/"},{default:i(()=>[...s[0]||(s[0]=[n("util-linux 包",-1)])]),_:1}),s[2]||(s[2]=n("包含了 ",-1)),s[3]||(s[3]=a("code",null,"ipcmk",-1)),s[4]||(s[4]=n("、",-1)),s[5]||(s[5]=a("code",null,"ipcrm",-1)),s[6]||(s[6]=n("、",-1)),s[7]||(s[7]=a("code",null,"ipcs",-1)),s[8]||(s[8]=n(" 和 ",-1)),s[9]||(s[9]=a("code",null,"lsipc",-1)),s[10]||(s[10]=n(" 命令，用于监视和管理 IPC 消息。",-1))]),s[41]||(s[41]=l(`<h3 id="显示进程间通信信息" tabindex="-1">显示进程间通信信息 <a class="header-anchor" href="#显示进程间通信信息" aria-label="Permalink to “显示进程间通信信息”">​</a></h3><p>在尝试 IPC 之前，你应该知道系统上已经有哪些 IPC 设施。<code>lsipc</code> 命令提供了该信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>RESOURCE DESCRIPTION               LIMIT  USED  USE%</span></span>
<span class="line"><span>MSGMNI   Number of message queues  32000     0 0.00%</span></span>
<span class="line"><span>MSGMAX   Max size of message (byt.. 8192     -     -</span></span>
<span class="line"><span>MSGMNB   Default max size of queue 16384     -     -</span></span>
<span class="line"><span>SHMMNI   Shared memory segments     4096    79 1.93%</span></span>
<span class="line"><span>SHMALL   Shared memory pages       184[...] 25452 0.00%</span></span>
<span class="line"><span>SHMMAX   Max size of shared memory 18446744073692774399</span></span>
<span class="line"><span>SHMMIN   Min size of shared memory     1     -     -</span></span>
<span class="line"><span>SEMMNI   Number of semaphore ident 32000     0 0.00%</span></span>
<span class="line"><span>SEMMNS   Total number of semaphore 1024000.. 0 0.00%</span></span>
<span class="line"><span>SEMMSL   Max semaphores per semap  32000     -     -</span></span>
<span class="line"><span>SEMOPM   Max number of operations p  500     -     -</span></span>
<span class="line"><span>SEMVMX   Semaphore max value       32767     -     -</span></span></code></pre></div><p>你可能注意到，这个示例清单包含三种不同类型的 IPC 机制，每种机制在 Linux 内核中都是可用的：消息（MSG）、共享内存（SHM）和信号量（SEM）。你可以用 <code>ipcs</code> 命令查看每个子系统的当前活动：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ipcs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>------ Message Queues Creators/Owners ---</span></span>
<span class="line"><span>msqid     perms     cuid      cgid  [...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>------ Shared Memory Segment Creators/Owners</span></span>
<span class="line"><span>shmid     perms    cuid    cgid  [...]</span></span>
<span class="line"><span>557056    700      seth    users [...]</span></span>
<span class="line"><span>3571713   700      seth    users [...]</span></span>
<span class="line"><span>2654210   600      seth    users [...]</span></span>
<span class="line"><span>2457603   700      seth    users [...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>------ Semaphore Arrays Creators/Owners ---</span></span>
<span class="line"><span>semid     perms     cuid      cgid  [...]</span></span></code></pre></div><p>这表明当前没有消息或信号量阵列，但是使用了一些共享内存段。</p>`,6)),a("p",null,[s[13]||(s[13]=n("你可以在系统上执行一个简单的示例，这样就可以看到正在工作的系统之一。它涉及到一些 C 代码，所以你必须在系统上有构建工具。必须安装这些软件包才能从源代码构建软件，这些软件包的名称取决于发行版，因此请参考文档以获取详细信息。例如，在基于 Debian 的发行版上，你可以在 wiki 的",-1)),e(p,{href:"https://wiki.debian.org/BuildingTutorial"},{default:i(()=>[...s[11]||(s[11]=[n("构建教程",-1)])]),_:1}),s[14]||(s[14]=n("部分了解构建需求，而在基于 Fedora 的发行版上，你可以参考该文档的",-1)),e(p,{href:"https://docs.pagure.org/docs-fedora/installing-software-from-source.html"},{default:i(()=>[...s[12]||(s[12]=[n("从源代码安装软件",-1)])]),_:1}),s[15]||(s[15]=n("部分。",-1))]),s[42]||(s[42]=l(`<h3 id="创建一个消息队列" tabindex="-1">创建一个消息队列 <a class="header-anchor" href="#创建一个消息队列" aria-label="Permalink to “创建一个消息队列”">​</a></h3><p>你的系统已经有一个默认的消息队列，但是你可以使用 <code>ipcmk</code> 命令创建你自己的消息队列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ipcmk --queue</span></span>
<span class="line"><span>Message queue id: 32764</span></span></code></pre></div><p>编写一个简单的 IPC 消息发送器，为了简单，在队列 ID 中硬编码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;sys/ipc.h&gt;</span></span>
<span class="line"><span>#include &lt;sys/msg.h&gt;</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct msgbuffer {</span></span>
<span class="line"><span>  char text[24];</span></span>
<span class="line"><span>} message;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    int msqid = 32764;</span></span>
<span class="line"><span>    strcpy(message.text,&quot;opensource.com&quot;);</span></span>
<span class="line"><span>    msgsnd(msqid, &amp;message, sizeof(message), 0);</span></span>
<span class="line"><span>    printf(&quot;Message: %s\\n&quot;,message.text);</span></span>
<span class="line"><span>    printf(&quot;Queue: %d\\n&quot;,msqid);</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>        }</span></span></code></pre></div><p>编译该应用程序并运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc msgsend.c -o msg.bin</span></span>
<span class="line"><span>$ ./msg.bin</span></span>
<span class="line"><span>Message: opensource.com</span></span>
<span class="line"><span>Queue: 32769</span></span></code></pre></div><p>你刚刚向你的消息队列发送了一条消息。你可以使用 <code>ipcs</code> 命令验证这一点，可以使用 <code>——queue</code> 选项将输出限制到该消息队列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ipcs -q</span></span>
<span class="line"><span></span></span>
<span class="line"><span>------ Message Queues --------</span></span>
<span class="line"><span>key        msqid   owner  perms  used-bytes  messages</span></span>
<span class="line"><span>0x7b341ab9 0       seth   666    0          0</span></span>
<span class="line"><span>0x72bd8410 32764   seth   644    24         1</span></span></code></pre></div><p>你也可以检索这些消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;sys/ipc.h&gt;</span></span>
<span class="line"><span>#include &lt;sys/msg.h&gt;</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct msgbuffer {</span></span>
<span class="line"><span>    char text[24];</span></span>
<span class="line"><span>} message;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    int msqid = 32764;</span></span>
<span class="line"><span>    msgrcv(msqid, &amp;message, sizeof(message),0,0);</span></span>
<span class="line"><span>    printf(&quot;\\nQueue: %d\\n&quot;,msqid);</span></span>
<span class="line"><span>    printf(&quot;Got this message: %s\\n&quot;, message.text);</span></span>
<span class="line"><span>    msgctl(msqid,IPC_RMID,NULL);</span></span>
<span class="line"><span>    return 0;</span></span></code></pre></div><p>编译并运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc get.c -o get.bin</span></span>
<span class="line"><span>$ ./get.bin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Queue: 32764</span></span>
<span class="line"><span>Got this message: opensource.com</span></span></code></pre></div><h3 id="下载这本电子书" tabindex="-1">下载这本电子书 <a class="header-anchor" href="#下载这本电子书" aria-label="Permalink to “下载这本电子书”">​</a></h3>`,14)),a("p",null,[s[17]||(s[17]=n("这只是 Marty Kalin 的《",-1)),e(p,{href:"https://opensource.com/downloads/guide-inter-process-communication-linux"},{default:i(()=>[...s[16]||(s[16]=[n("Linux 进程间通信指南",-1)])]),_:1}),s[18]||(s[18]=n("》中课程的一个例子，可从 Opensource.com 下载的这本最新免费（且 CC 授权）的电子书。在短短的几节课中，你将从消息队列、共享内存和信号量、套接字、信号等中了解 IPC 的 POSIX 方法。认真阅读 Marty 的书，你将成为一个博识的程序员。而这不仅适用于经验丰富的编码人员，如果你编写的只是 shell 脚本，那么你将拥有有关管道（命名和未命名）和共享文件的大量实践知识，以及使用共享文件或外部消息队列时需要了解的重要概念。",-1))]),a("p",null,[s[20]||(s[20]=n("如果你对制作具有动态和具有系统感知的优秀软件感兴趣，那么你需要了解 IPC。让",-1)),e(p,{href:"https://opensource.com/downloads/guide-inter-process-communication-linux"},{default:i(()=>[...s[19]||(s[19]=[n("这本书",-1)])]),_:1}),s[21]||(s[21]=n("做你的向导。",-1))]),s[43]||(s[43]=a("hr",null,null,-1)),a("p",null,[s[23]||(s[23]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/1/inter-process-communication-linux"},{default:i(()=>[...s[22]||(s[22]=[n("https://opensource.com/article/20/1/inter-process-communication-linux",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:i(()=>[...s[24]||(s[24]=[n("Seth Kenlon",-1)])]),_:1}),s[29]||(s[29]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[25]||(s[25]=[n("lujun9972",-1)])]),_:1}),s[30]||(s[30]=n(" 译者：",-1)),e(p,{href:"https://github.com/laingke"},{default:i(()=>[...s[26]||(s[26]=[n("laingke",-1)])]),_:1}),s[31]||(s[31]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[27]||(s[27]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[32]||(s[32]=[n("LCTT",-1)])]),_:1}),s[35]||(s[35]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[33]||(s[33]=[n("Linux中国",-1)])]),_:1}),s[36]||(s[36]=n(" 荣誉推出",-1))])])}const M=t(d,[["render",g]]);export{C as __pageData,M as default};
