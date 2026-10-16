import{_ as t,a0 as o,w as r,s as u,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"免費電子書《Linux 進程間通信指南》介紹 | LCTT x X-CMD","titleTemplate":false,"description":"免費電子書《Linux 進程間通信指南》介紹 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"免費電子書《Linux 進程間通信指南》介紹 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"免費電子書《Linux 進程間通信指南》介紹 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20200103 Introducing the guide to inter-process communication in Linux","title":"免費電子書《Linux 進程間通信指南》介紹","tag":"202001","desc":""},"relativePath":"202001/20200103 Introducing the guide to inter-process communication in Linux.md","filePath":"[post].md"}'),d={name:"202001/20200103 Introducing the guide to inter-process communication in Linux.md"};function g(m,s,c,h,k,b){const p=o("Link");return r(),u("div",null,[s[37]||(s[37]=a("h1",{id:"免費電子書《linux-進程間通信指南》介紹",tabindex:"-1"},[n("免費電子書《Linux 進程間通信指南》介紹 "),a("a",{class:"header-anchor",href:"#免費電子書《linux-進程間通信指南》介紹","aria-label":"Permalink to “免費電子書《Linux 進程間通信指南》介紹”"},"​")],-1)),s[38]||(s[38]=a("blockquote",null,[a("p",null,"這本免費的電子書使經驗豐富的程序員更深入瞭解 Linux 中進程間通信（IPC）的核心概念和機制。")],-1)),s[39]||(s[39]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/30/115631jthl0h61zhhmwpv1.jpeg",alt:""})],-1)),s[40]||(s[40]=a("p",null,[n("讓一個軟件過程與另一個軟件過程進行對話是一個微妙的平衡行為。但是，它對於應用程序而言可能是至關重要的功能，因此這是任何從事複雜項目的程序員都必須解決的問題。你的應用程序是否需要啓動由其它軟件處理的工作；監視外設或網絡上正在執行的操作；或者檢測來自其它來源的信號，當你的軟件需要依賴其自身代碼之外的東西來知道下一步做什麼或什麼時候做時，你就需要考慮"),a("ruby",null,[n("進程間通信"),a("rt",null,"inter-process communication")]),n("（IPC）。")],-1)),a("p",null,[s[1]||(s[1]=n("這在 Unix 操作系統上已經由來已久了，這可能是因為人們早期預期軟件會來自各種來源。按照相同的傳統，Linux 提供了一些同樣的 IPC 接口和一些新接口。Linux 內核具有多種 IPC 方法，",-1)),e(p,{href:"https://mirrors.edge.kernel.org/pub/linux/utils/util-linux/"},{default:i(()=>[...s[0]||(s[0]=[n("util-linux 包",-1)])]),_:1}),s[2]||(s[2]=n("包含了 ",-1)),s[3]||(s[3]=a("code",null,"ipcmk",-1)),s[4]||(s[4]=n("、",-1)),s[5]||(s[5]=a("code",null,"ipcrm",-1)),s[6]||(s[6]=n("、",-1)),s[7]||(s[7]=a("code",null,"ipcs",-1)),s[8]||(s[8]=n(" 和 ",-1)),s[9]||(s[9]=a("code",null,"lsipc",-1)),s[10]||(s[10]=n(" 命令，用於監視和管理 IPC 消息。",-1))]),s[41]||(s[41]=l(`<h3 id="顯示進程間通信信息" tabindex="-1">顯示進程間通信信息 <a class="header-anchor" href="#顯示進程間通信信息" aria-label="Permalink to “顯示進程間通信信息”">​</a></h3><p>在嘗試 IPC 之前，你應該知道系統上已經有哪些 IPC 設施。<code>lsipc</code> 命令提供了該信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>RESOURCE DESCRIPTION               LIMIT  USED  USE%</span></span>
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
<span class="line"><span>SEMVMX   Semaphore max value       32767     -     -</span></span></code></pre></div><p>你可能注意到，這個示例清單包含三種不同類型的 IPC 機制，每種機制在 Linux 內核中都是可用的：消息（MSG）、共享內存（SHM）和信號量（SEM）。你可以用 <code>ipcs</code> 命令查看每個子系統的當前活動：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ipcs</span></span>
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
<span class="line"><span>semid     perms     cuid      cgid  [...]</span></span></code></pre></div><p>這表明當前沒有消息或信號量陣列，但是使用了一些共享內存段。</p>`,6)),a("p",null,[s[13]||(s[13]=n("你可以在系統上執行一個簡單的示例，這樣就可以看到正在工作的系統之一。它涉及到一些 C 代碼，所以你必須在系統上有構建工具。必須安裝這些軟件包才能從源代碼構建軟件，這些軟件包的名稱取決於發行版，因此請參考文檔以獲取詳細信息。例如，在基於 Debian 的發行版上，你可以在 wiki 的",-1)),e(p,{href:"https://wiki.debian.org/BuildingTutorial"},{default:i(()=>[...s[11]||(s[11]=[n("構建教程",-1)])]),_:1}),s[14]||(s[14]=n("部分了解構建需求，而在基於 Fedora 的發行版上，你可以參考該文檔的",-1)),e(p,{href:"https://docs.pagure.org/docs-fedora/installing-software-from-source.html"},{default:i(()=>[...s[12]||(s[12]=[n("從源代碼安裝軟件",-1)])]),_:1}),s[15]||(s[15]=n("部分。",-1))]),s[42]||(s[42]=l(`<h3 id="創建一個消息隊列" tabindex="-1">創建一個消息隊列 <a class="header-anchor" href="#創建一個消息隊列" aria-label="Permalink to “創建一個消息隊列”">​</a></h3><p>你的系統已經有一個默認的消息隊列，但是你可以使用 <code>ipcmk</code> 命令創建你自己的消息隊列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ipcmk --queue</span></span>
<span class="line"><span>Message queue id: 32764</span></span></code></pre></div><p>編寫一個簡單的 IPC 消息發送器，為了簡單，在隊列 ID 中硬編碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;sys/ipc.h&gt;</span></span>
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
<span class="line"><span>        }</span></span></code></pre></div><p>編譯該應用程序並運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc msgsend.c -o msg.bin</span></span>
<span class="line"><span>$ ./msg.bin</span></span>
<span class="line"><span>Message: opensource.com</span></span>
<span class="line"><span>Queue: 32769</span></span></code></pre></div><p>你剛剛向你的消息隊列發送了一條消息。你可以使用 <code>ipcs</code> 命令驗證這一點，可以使用 <code>——queue</code> 選項將輸出限制到該消息隊列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ipcs -q</span></span>
<span class="line"><span></span></span>
<span class="line"><span>------ Message Queues --------</span></span>
<span class="line"><span>key        msqid   owner  perms  used-bytes  messages</span></span>
<span class="line"><span>0x7b341ab9 0       seth   666    0          0</span></span>
<span class="line"><span>0x72bd8410 32764   seth   644    24         1</span></span></code></pre></div><p>你也可以檢索這些消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;sys/ipc.h&gt;</span></span>
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
<span class="line"><span>    return 0;</span></span></code></pre></div><p>編譯並運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc get.c -o get.bin</span></span>
<span class="line"><span>$ ./get.bin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Queue: 32764</span></span>
<span class="line"><span>Got this message: opensource.com</span></span></code></pre></div><h3 id="下載這本電子書" tabindex="-1">下載這本電子書 <a class="header-anchor" href="#下載這本電子書" aria-label="Permalink to “下載這本電子書”">​</a></h3>`,14)),a("p",null,[s[17]||(s[17]=n("這只是 Marty Kalin 的《",-1)),e(p,{href:"https://opensource.com/downloads/guide-inter-process-communication-linux"},{default:i(()=>[...s[16]||(s[16]=[n("Linux 進程間通信指南",-1)])]),_:1}),s[18]||(s[18]=n("》中課程的一個例子，可從 Opensource.com 下載的這本最新免費（且 CC 授權）的電子書。在短短的幾節課中，你將從消息隊列、共享內存和信號量、套接字、信號等中瞭解 IPC 的 POSIX 方法。認真閲讀 Marty 的書，你將成為一個博識的程序員。而這不僅適用於經驗豐富的編碼人員，如果你編寫的只是 shell 腳本，那麼你將擁有有關管道（命名和未命名）和共享文件的大量實踐知識，以及使用共享文件或外部消息隊列時需要了解的重要概念。",-1))]),a("p",null,[s[20]||(s[20]=n("如果你對製作具有動態和具有系統感知的優秀軟件感興趣，那麼你需要了解 IPC。讓",-1)),e(p,{href:"https://opensource.com/downloads/guide-inter-process-communication-linux"},{default:i(()=>[...s[19]||(s[19]=[n("這本書",-1)])]),_:1}),s[21]||(s[21]=n("做你的嚮導。",-1))]),s[43]||(s[43]=a("hr",null,null,-1)),a("p",null,[s[23]||(s[23]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/1/inter-process-communication-linux"},{default:i(()=>[...s[22]||(s[22]=[n("https://opensource.com/article/20/1/inter-process-communication-linux",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:i(()=>[...s[24]||(s[24]=[n("Seth Kenlon",-1)])]),_:1}),s[29]||(s[29]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[25]||(s[25]=[n("lujun9972",-1)])]),_:1}),s[30]||(s[30]=n(" 譯者：",-1)),e(p,{href:"https://github.com/laingke"},{default:i(()=>[...s[26]||(s[26]=[n("laingke",-1)])]),_:1}),s[31]||(s[31]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[27]||(s[27]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[32]||(s[32]=[n("LCTT",-1)])]),_:1}),s[35]||(s[35]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[33]||(s[33]=[n("Linux中國",-1)])]),_:1}),s[36]||(s[36]=n(" 榮譽推出",-1))])])}const M=t(d,[["render",g]]);export{C as __pageData,M as default};
