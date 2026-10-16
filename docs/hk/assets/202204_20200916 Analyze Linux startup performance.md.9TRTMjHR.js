import{_ as l,a0 as r,w as d,s as o,I as a,x as n,a1 as p,A as i,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"Linux 啓動性能分析 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 啓動性能分析 | LCTT (202204) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 啓動性能分析 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 啓動性能分析 | LCTT (202204) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202204/20200916 Analyze Linux startup performance","title":"Linux 啓動性能分析","tag":"202204","desc":""},"relativePath":"202204/20200916 Analyze Linux startup performance.md","filePath":"[post].md"}'),m={name:"202204/20200916 Analyze Linux startup performance.md"};function u(c,s,g,y,f,h){const e=r("Link");return d(),o("div",null,[s[67]||(s[67]=a("h1",{id:"linux-啓動性能分析",tabindex:"-1"},[n("Linux 啓動性能分析 "),a("a",{class:"header-anchor",href:"#linux-啓動性能分析","aria-label":"Permalink to “Linux 啓動性能分析”"},"​")],-1)),s[68]||(s[68]=a("blockquote",null,[a("p",null,"用 systemd-analyze 洞悉並解決 Linux 啓動性能問題。")],-1)),s[69]||(s[69]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202204/12/120909ygssda7j3t3a3a3a.jpg",alt:""})],-1)),s[70]||(s[70]=a("p",null,"系統管理員的一部分工作就是分析系統性能，發現並解決引起性能不佳、啓動時間長的問題。系統管理員也需要去檢查 systemd 的配置和使用的其它方面。",-1)),a("p",null,[s[1]||(s[1]=n("systemd 初始化系統提供了 ",-1)),s[2]||(s[2]=a("code",null,"systemd-analyze",-1)),s[3]||(s[3]=n(" 工具，可以幫助發現性能問題和其他重要的 systemd 信息。在以前的文章《",-1)),p(e,{href:"https://opensource.com/article/20/7/systemd-calendar-timespans"},{default:i(()=>[...s[0]||(s[0]=[n("分析 systemd 日曆和時間跨度",-1)])]),_:1}),s[4]||(s[4]=n("》裏，我用了 ",-1)),s[5]||(s[5]=a("code",null,"systemd-analyze",-1)),s[6]||(s[6]=n(" 去分析 systemd 裏的時間戳和時間跨度，但是這個工具還有很多其他用法，這個文章裏我將再揭示一些。",-1))]),s[71]||(s[71]=t('<p>（LCTT 譯註：systemd 是目前主流 Linux 發行版採用的系統管理系統）</p><p>（LCTT 譯註：為了區分英文的 “boot” 和 “startup” 的不同涵義，此處將 “boot” 翻譯為“引導”，“startup” 翻譯為“啓動”。）</p><h3 id="概述啓動" tabindex="-1">概述啓動 <a class="header-anchor" href="#概述啓動" aria-label="Permalink to “概述啓動”">​</a></h3><p>Linux 啓動過程是值得學習關注的地方，因為 <code>systemd-analyze</code> 工具很多功能聚焦在<ruby>啓動<rt>startup</rt></ruby>過程。但是首先，要理解<ruby>引導<rt>boot</rt></ruby>和<ruby>啓動<rt>startup</rt></ruby>。引導階段從 BIOS 加電自檢（POST）開始，結束於內核完成加載並控制主機系統，然後是開始了啓動過程，也是 systemd 日誌的開始點。</p>',4)),a("p",null,[s[8]||(s[8]=n("這個系列的第二篇文章《",-1)),p(e,{href:"https://opensource.com/article/20/5/systemd-startup?utm_campaign=intrel"},{default:i(()=>[...s[7]||(s[7]=[n("理解 Linux 啓動時的 systemd",-1)])]),_:1}),s[9]||(s[9]=n("》中，我詳細討論了啓動階段的內容和過程。在這篇文章裏，我想研究一下啓動過程，看看需要多少時間和大部分時間花費在哪裏。",-1))]),s[72]||(s[72]=t(`<p>下面我將展示的結果來自我的主要工作站，這比虛擬機的結果要有趣得多。這個工作站包括一塊 華碩 TUF X299 Mark 2 主板、一個英特爾 i9-7960X CPU（16 核 32 線程），64 G 內存。下面的一些命令非 root 用户也可以使用，但是我在這篇文章裏使用了 root 用户，以避免在用户之間切換。</p><p>檢查啓動過程有幾種方法，最簡單的 <code>systemd-analyze</code> 命令顯示了啓動的幾個主要部分耗費的時間，包括內核啓動、裝載運行 initrd（即初始 ramdisk，這是一個用來初始化一些硬件、掛載 <code>/</code> 根文件系統的臨時系統鏡像），還有用户空間（加載所有使主機達到可用狀態的程序和守護程序）。如果沒有像該命令傳遞子命令，默認是 <code>systemd-analyze time</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]$ systemd-analyze</span></span>
<span class="line"><span>Startup finished in 53.921s (firmware) + 2.643s (loader) + 2.236s (kernel) + 4.348s (initrd) + 10.082s (userspace) = 1min 13.233s</span></span>
<span class="line"><span>graphical.target reached after 10.071s in userspace</span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>這個輸出中最值得注意的數據是在固件（BIOS）中花費的時間：幾乎 54 秒。這是一個不太正常的時間，我的其他物理系統都沒有花費這麼長的時間來通過 BIOS。</p><p>我的 System76 Oryx Pro 筆記本在 BIOS 階段只花了 8.506 秒，我家裏所有的系統都在 10 秒以內。在線搜索一陣之後，我發現這塊主板以其超長的 BIOS 引導時間而聞名。我的主板從不“馬上啓動”，總是掛起，我需要關機再開機，BIOS 報錯，按 <code>F1</code> 進入 BIOS 設置，選擇要引導的驅動器完成引導，多花費的時間就是這樣用掉的。</p><p>不是所有主機都會顯示固件數據（LCTT 譯註：固件引導中不涉及 systemd）。我的不科學的實驗使我相信，這個數據只顯示給英特爾 9 代或以上的處理器。但這可能是不正確的。</p><p>這個關於引導、啓動的概述提供了很好的（雖然有限）的信息，但是還有很多關於啓動的信息，我將在下面描述。</p><h3 id="分配責任" tabindex="-1">分配責任 <a class="header-anchor" href="#分配責任" aria-label="Permalink to “分配責任”">​</a></h3><p>你可以用 <code>systemd-analyze blame</code> 來發現哪個 systemd 單元的初始化時間最長。其結果按照初始化時間長短排序，從多到少：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]$ systemd-analyze blame  </span></span>
<span class="line"><span>       5.417s NetworkManager-wait-online.service</span></span>
<span class="line"><span>       3.423s dracut-initqueue.service</span></span>
<span class="line"><span>       2.715s systemd-udev-settle.service</span></span>
<span class="line"><span>       2.519s fstrim.service</span></span>
<span class="line"><span>       1.275s udisks2.service</span></span>
<span class="line"><span>       1.271s smartd.service</span></span>
<span class="line"><span>        996ms upower.service</span></span>
<span class="line"><span>        637ms lvm2-monitor.service</span></span>
<span class="line"><span>        533ms lvm2-pvscan@8:17.service</span></span>
<span class="line"><span>        520ms dmraid-activation.service</span></span>
<span class="line"><span>        460ms vboxdrv.service</span></span>
<span class="line"><span>        396ms initrd-switch-root.service</span></span>
<span class="line"><span>&lt;截斷：刪去了好多時間不長的條目&gt;</span></span></code></pre></div><p>因為很多服務是並行開始的，在 BIOS 之後所有單元加在一起的總數大大超過了 <code>systemd-analyze time</code> 彙總數。很多都是小數，不能顯著的節省時間。</p><p>這個命令提供的數據指明瞭改善啓動時間的辦法。無用的服務可以禁用（<code>disable</code>）。在這個啓動過程中，似乎沒有任何一個服務需要花費過長的時間。你可能會在每次啓動時看到不同的結果。（LCTT 譯註：並行啓動服務的原因）</p><h3 id="關鍵鏈" tabindex="-1">關鍵鏈 <a class="header-anchor" href="#關鍵鏈" aria-label="Permalink to “關鍵鏈”">​</a></h3><p>就像項目管理中的關鍵路徑一樣，關鍵鏈顯示了在啓動過程中發生的時間關鍵的事件鏈（LCTT 譯註：systemd 可以定義服務間的依賴，構成關鍵鏈）。如果啓動緩慢，這些是你想查看的 systemd 單元，因為它們是導致延遲的單元。這個工具不會顯示所有啓動的單元，只顯示這個關鍵事件鏈中的單元。（LCTT 譯註：相當於最短路徑。並不顯示依賴不在關鍵鏈上的服務單元）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze critical-chain</span></span>
<span class="line"><span>The time when unit became active or started is printed after the &quot;@&quot; character.</span></span>
<span class="line"><span>The time the unit took to start is printed after the &quot;+&quot; character.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>graphical.target @10.071s</span></span>
<span class="line"><span>└─lxdm.service @10.071s</span></span>
<span class="line"><span>  └─plymouth-quit.service @10.047s +22ms</span></span>
<span class="line"><span>    └─systemd-user-sessions.service @10.031s +7ms</span></span>
<span class="line"><span>      └─remote-fs.target @10.026s</span></span>
<span class="line"><span>        └─remote-fs-pre.target @10.025s</span></span>
<span class="line"><span>          └─nfs-client.target @4.636s</span></span>
<span class="line"><span>            └─gssproxy.service @4.607s +28ms</span></span>
<span class="line"><span>              └─network.target @4.604s</span></span>
<span class="line"><span>                └─NetworkManager.service @4.383s +219ms</span></span>
<span class="line"><span>                  └─dbus-broker.service @4.434s +136ms</span></span>
<span class="line"><span>                    └─dbus.socket @4.369s</span></span>
<span class="line"><span>                      └─sysinit.target @4.354s</span></span>
<span class="line"><span>                        └─systemd-update-utmp.service @4.345s +9ms</span></span>
<span class="line"><span>                          └─auditd.service @4.301s +42ms</span></span>
<span class="line"><span>                            └─systemd-tmpfiles-setup.service @4.254s +42ms</span></span>
<span class="line"><span>                              └─import-state.service @4.233s +19ms</span></span>
<span class="line"><span>                                └─local-fs.target @4.229s</span></span>
<span class="line"><span>                                  └─Virtual.mount @4.019s +209ms</span></span>
<span class="line"><span>                                    └─systemd-fsck@dev-mapper-vg_david2\\x2dVirtual.service @3.742s +274ms</span></span>
<span class="line"><span>                                      └─local-fs-pre.target @3.726s</span></span>
<span class="line"><span>                                        └─lvm2-monitor.service @356ms +637ms</span></span>
<span class="line"><span>                                          └─dm-event.socket @319ms</span></span>
<span class="line"><span>                                            └─-.mount</span></span>
<span class="line"><span>                                              └─system.slice</span></span>
<span class="line"><span>                                                └─-.slice</span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>前面有 <code>@</code> 的數字表示單元激活開始啓動所使用的絕對秒數。前面有 <code>+</code> 的數字顯示單元啓動所需的時間。</p><h3 id="系統狀態" tabindex="-1">系統狀態 <a class="header-anchor" href="#系統狀態" aria-label="Permalink to “系統狀態”">​</a></h3><p>有時候你需要確定系統的當前狀態，<code>systemd-analyze dump</code> 命令轉儲了當前系統狀態的大量數據。有主要的啓動時間戳，一個每個 systemd 單元的列表，並對每個單元狀態進行了完整描述：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze dump</span></span>
<span class="line"><span>Timestamp firmware: 1min 7.983523s</span></span>
<span class="line"><span>Timestamp loader: 3.872325s</span></span>
<span class="line"><span>Timestamp kernel: Wed 2020-08-26 12:33:35 EDT</span></span>
<span class="line"><span>Timestamp initrd: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp userspace: Wed 2020-08-26 12:33:42 EDT</span></span>
<span class="line"><span>Timestamp finish: Wed 2020-08-26 16:33:56 EDT</span></span>
<span class="line"><span>Timestamp security-start: Wed 2020-08-26 12:33:42 EDT</span></span>
<span class="line"><span>Timestamp security-finish: Wed 2020-08-26 12:33:42 EDT</span></span>
<span class="line"><span>Timestamp generators-start: Wed 2020-08-26 16:33:42 EDT</span></span>
<span class="line"><span>Timestamp generators-finish: Wed 2020-08-26 16:33:43 EDT</span></span>
<span class="line"><span>Timestamp units-load-start: Wed 2020-08-26 16:33:43 EDT</span></span>
<span class="line"><span>Timestamp units-load-finish: Wed 2020-08-26 16:33:43 EDT</span></span>
<span class="line"><span>Timestamp initrd-security-start: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp initrd-security-finish: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp initrd-generators-start: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp initrd-generators-finish: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp initrd-units-load-start: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp initrd-units-load-finish: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>-&gt; Unit system.slice:</span></span>
<span class="line"><span>        Description: System Slice</span></span>
<span class="line"><span>        Instance: n/a</span></span>
<span class="line"><span>        Unit Load State: loaded</span></span>
<span class="line"><span>        Unit Active State: active</span></span>
<span class="line"><span>        State Change Timestamp: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>        Inactive Exit Timestamp: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>        Active Enter Timestamp: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>        Active Exit Timestamp: n/a</span></span>
<span class="line"><span>        Inactive Enter Timestamp: n/a</span></span>
<span class="line"><span>        May GC: no</span></span>
<span class="line"><span>&lt;截斷：刪除了大量的輸出行&gt;</span></span></code></pre></div><p>在我的主工作站上，這個命令生成了 49680 行輸出，大概 1.66MB，這個命令非常快，不需要等待。</p><p>我很喜歡為各種連接設備（如存儲設備）提供的大量細節。每個 systemd 單元有一個部分，包括各種運行時、緩存、日誌目錄的模式、啓動單元的命令列、PID、開始時間戳，以及內存和文件限制等細節。</p><p><code>systemd-analyze</code> 的手冊頁裏展示了 <code>systemd-analyze --user dump</code> 選項，目的是顯示用户管理器的內部狀態。但這個選項對我來説是失敗的，互聯網搜索之後表明它可能有一些問題。在 systemd 裏，<code>--user</code> 實例用來管理和控制處理器給每個用户的進程資源。處理能力按分給每個用户的進程都屬於一個控制組，我將在以後的文章中介紹。</p><h3 id="分析圖表" tabindex="-1">分析圖表 <a class="header-anchor" href="#分析圖表" aria-label="Permalink to “分析圖表”">​</a></h3>`,23)),a("p",null,[s[11]||(s[11]=n("大多數啥都不懂的猥瑣老闆（PHB）和許多優秀的管理者都發現漂亮的圖表比我通常喜歡的基於文本的系統性能數據更容易閲讀和理解。但有時，即使是我也喜歡一個好的圖表，",-1)),s[12]||(s[12]=a("code",null,"systemd-analyze",-1)),s[13]||(s[13]=n(" 提供了顯示引導/啓動數據的 ",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Scalable_Vector_Graphics"},{default:i(()=>[...s[10]||(s[10]=[n("SVG",-1)])]),_:1}),s[14]||(s[14]=n(" 矢量圖表。",-1))]),s[73]||(s[73]=t('<p>下面的命令生成一個矢量圖文件，來顯示在引導和啓動過程發生的事件。生成這個文件只需要幾秒：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze plot &gt; /tmp/bootup.svg</span></span></code></pre></div><p>這個命令創建了一個 SVG 文件，SVG 是一個定義了一系列圖形矢量的文本文件，包括 Image Viewer、Ristretto、Okular、Eye of Mate、LibreOffice Draw 在內的這些可以生成圖形的應用，可以用 SVG 來創建圖像。</p><p>我用 LibreOffice Draw（LCTT 譯註：一個辦公文檔軟件）來渲染一幅圖形。這張圖形很大，你需要放到很大才能看清細節。這裏是它的一小部分：</p><p><img src="https://opensource.com/sites/default/files/uploads/bootup.svg-graph.png" alt="The bootup.svg file displayed in LibreOffice Draw." title="The bootup.svg file displayed in LibreOffice Draw."></p><p>圖中時間軸上零點（0）的左邊是引導階段，零點的右邊是啓動階段。這一小部分顯示了內核、initrd 和 initrd 啓動的進程。</p><p>這張圖一目瞭然地顯示了什麼時候啓動，啓動需要多少時間，以及主要的依賴項。關鍵路徑用紅色高亮顯示。</p>',7)),a("p",null,[s[16]||(s[16]=n("另外一個生成圖形輸出的命令是 ",-1)),s[17]||(s[17]=a("code",null,"systemd-analyze plot",-1)),s[18]||(s[18]=n("，它生成了 ",-1)),p(e,{href:"https://en.wikipedia.org/wiki/DOT_(graph_description_language)"},{default:i(()=>[...s[15]||(s[15]=[n("DOT",-1)])]),_:1}),s[19]||(s[19]=n(" 格式的文本依賴圖。產生的數據流通過 ",-1)),s[20]||(s[20]=a("code",null,"dot",-1)),s[21]||(s[21]=n(" 工具進行處理，這是一組用來從多種類型數據中生成矢量圖文件的程序。這些 SVG 文件也能被上面列出的工具處理。",-1))]),s[74]||(s[74]=t(`<p>首先，生成文件，在我的主工作站花了 9 分鐘：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# time systemd-analyze dot | dot -Tsvg &gt; /tmp/test.svg</span></span>
<span class="line"><span>   Color legend: black     = Requires</span></span>
<span class="line"><span>                 dark blue = Requisite</span></span>
<span class="line"><span>                 dark grey = Wants</span></span>
<span class="line"><span>                 red       = Conflicts</span></span>
<span class="line"><span>                 green     = After</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    8m37.544s</span></span>
<span class="line"><span>user    8m35.375s</span></span>
<span class="line"><span>sys     0m0.070s</span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>我不會在這裏重現輸出，因為產生的圖形就像一大堆意大利麪條。但是你應該試試，看看我想讓你看到的結果。</p><h3 id="條件" tabindex="-1">條件 <a class="header-anchor" href="#條件" aria-label="Permalink to “條件”">​</a></h3><p>在閲讀 systemd-analyze(1) 的手冊頁時，我發現了一個更有趣的功能，但又有點通用，就是條件子命令。（是的，我確實在讀手冊頁，而且我神奇地通過這種方式學到了很多東西！）。這個 <code>condition</code> 子命令能用來測試 systemd 單元文件中的條件和斷言。</p><p>它也可以在腳本中用來評估一個或多個條件 —— 如果所有條件都滿足，則返回 0；如果有條件不滿足，則返回 1。在其它情況下，它都會輸出其結果文本。</p><p>下面的例子來自手冊頁，稍微有點複雜。它測試了內核版本是否在 4.0 和 5.1 之間，主機是否使用交流電供電，系統結構是否是 ARM，以及 <code>/etc/os-release</code> 目錄是否存在。我添加了 <code>echo $?</code> 來打印返回值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze condition &#39;ConditionKernelVersion = ! &lt;4.0&#39; \\</span></span>
<span class="line"><span>                    &#39;ConditionKernelVersion = &gt;=5.1&#39; \\</span></span>
<span class="line"><span>                    &#39;ConditionACPower=|false&#39; \\</span></span>
<span class="line"><span>                    &#39;ConditionArchitecture=|!arm&#39; \\</span></span>
<span class="line"><span>                    &#39;AssertPathExists=/etc/os-release&#39; ; \\</span></span>
<span class="line"><span>echo $?</span></span>
<span class="line"><span>test.service: AssertPathExists=/etc/os-release succeeded.</span></span>
<span class="line"><span>Asserts succeeded.</span></span>
<span class="line"><span>test.service: ConditionArchitecture=|!arm succeeded.</span></span>
<span class="line"><span>test.service: ConditionACPower=|false failed.</span></span>
<span class="line"><span>test.service: ConditionKernelVersion=&gt;=5.1 succeeded.</span></span>
<span class="line"><span>test.service: ConditionKernelVersion=!&lt;4.0 succeeded.</span></span>
<span class="line"><span>Conditions succeeded.</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>條件和斷言的列表大約從 systemd.unit(5) 手冊頁的第 600 行左右開始。</p><h3 id="列出配置文件" tabindex="-1">列出配置文件 <a class="header-anchor" href="#列出配置文件" aria-label="Permalink to “列出配置文件”">​</a></h3><p><code>systemd-analyze</code> 工具提供了一種將各種配置文件的內容發送到 STDOUT 的方法，如圖所示。其基本目錄是 <code>/etc/</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze cat-config systemd/system/display-manager.service</span></span>
<span class="line"><span># /etc/systemd/system/display-manager.service</span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=LXDM (Lightweight X11 Display Manager)</span></span>
<span class="line"><span>#Documentation=man:lxdm(8)</span></span>
<span class="line"><span>Conflicts=getty@tty1.service</span></span>
<span class="line"><span>After=systemd-user-sessions.service getty@tty1.service plymouth-quit.service livesys-late.service</span></span>
<span class="line"><span>#Conflicts=plymouth-quit.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>ExecStart=/usr/sbin/lxdm</span></span>
<span class="line"><span>Restart=always</span></span>
<span class="line"><span>IgnoreSIGPIPE=no</span></span>
<span class="line"><span>#BusName=org.freedesktop.lxdm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>Alias=display-manager.service</span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>打了這麼多字卻和標準的 <code>cat</code> 命令做的差不多。我發現下一條命令小有幫助，它能在標準的 systemd 所在的位置搜索具有指定模式的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemctl cat backup*</span></span>
<span class="line"><span># /etc/systemd/system/backup.timer</span></span>
<span class="line"><span># This timer unit runs the local backup program</span></span>
<span class="line"><span># (C) David Both</span></span>
<span class="line"><span># Licensed under GPL V2</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Perform system backups</span></span>
<span class="line"><span>Requires=backup.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>Unit=backup.service</span></span>
<span class="line"><span>OnCalendar=*-*-* 00:15:30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=timers.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># /etc/systemd/system/backup.service</span></span>
<span class="line"><span># This service unit runs the rsbu backup program</span></span>
<span class="line"><span># By David Both</span></span>
<span class="line"><span># Licensed under GPL V2</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Backup services using rsbu</span></span>
<span class="line"><span>Wants=backup.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=oneshot</span></span>
<span class="line"><span>Environment=&quot;HOME=/root&quot;</span></span>
<span class="line"><span>ExecStart=/usr/local/bin/rsbu -bvd1</span></span>
<span class="line"><span>ExecStart=/usr/local/bin/rsbu -buvd2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>這兩個命令在每個文件的內容前面都有一個註釋行，包含文件的完整路徑和名稱。</p><h3 id="單元文件檢查" tabindex="-1">單元文件檢查 <a class="header-anchor" href="#單元文件檢查" aria-label="Permalink to “單元文件檢查”">​</a></h3><p>當創建了一個新的單元文件，可以利用 <code>verify</code> 子命令幫助檢查語法是否正確。它能指出來不正確的拼寫，並列出缺失的服務單元。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze verify /etc/systemd/system/backup.service</span></span></code></pre></div><p>秉承 Unix/Linux 的“沉默是金”的宗旨，沒有輸出意味着掃描的文件中沒有錯誤。</p><h3 id="安全性" tabindex="-1">安全性 <a class="header-anchor" href="#安全性" aria-label="Permalink to “安全性”">​</a></h3><p><code>security</code> 子命令檢查指定服務的安全級別。它只能針對服務單元，其他類型的單元文件不起作用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze security display-manager</span></span>
<span class="line"><span>  NAME                                                        DESCRIPTION                                                     &gt;</span></span>
<span class="line"><span>✗ PrivateNetwork=                                             Service has access to the host&#39;s network                        &gt;</span></span>
<span class="line"><span>✗ User=/DynamicUser=                                          Service runs as root user                                       &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_SET(UID|GID|PCAP)                Service may change UID/GID identities/capabilities              &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_SYS_ADMIN                        Service has administrator privileges                            &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_SYS_PTRACE                       Service has ptrace() debugging abilities                        &gt;</span></span>
<span class="line"><span>✗ RestrictAddressFamilies=~AF_(INET|INET6)                    Service may allocate Internet sockets                           &gt;</span></span>
<span class="line"><span>✗ RestrictNamespaces=~CLONE_NEWUSER                           Service may create user namespaces                              &gt;</span></span>
<span class="line"><span>✗ RestrictAddressFamilies=~…                                  Service may allocate exotic sockets                             &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_(CHOWN|FSETID|SETFCAP)           Service may change file ownership/access mode/capabilities unres&gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_(DAC_*|FOWNER|IPC_OWNER)         Service may override UNIX file/IPC permission checks            &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_NET_ADMIN                        Service has network configuration privileges                    &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_SYS_MODULE                       Service may load kernel modules</span></span>
<span class="line"><span>&lt;截斷&gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_SYS_TTY_CONFIG                   Service may issue vhangup()                                     &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_WAKE_ALARM                       Service may program timers that wake up the system              &gt;</span></span>
<span class="line"><span>✗ RestrictAddressFamilies=~AF_UNIX                            Service may allocate local sockets                              &gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>→ Overall exposure level for backup.service: 9.6 UNSAFE ?</span></span>
<span class="line"><span>lines 34-81/81 (END)</span></span></code></pre></div><p>是的，表情符是輸出的一部分。但是，當然，許多服務需要幾乎完全訪問所有的東西，以便完成它們的工作。我針對幾個服務運行了這個程序，包括我自己的備份服務；結果可能有所不同，但最底下一行似乎大多是一樣的。</p><p>這個工具對於在嚴格的安全環境檢查和修復用户空間的服務單元是很有用的。我不認為我們的大多數都能用到它。</p><h3 id="最後總結" tabindex="-1">最後總結 <a class="header-anchor" href="#最後總結" aria-label="Permalink to “最後總結”">​</a></h3><p>這個強力的工具提供了一些有趣而驚人的有用選項。本文探討的大部分內容是關於使用 systemd-analyze 來深入瞭解 Linux 使用 systemd 的啓動性能。它還可以分析 systemd 的其他方面。</p><p>其中有些工具的作用有限，有幾個應該完全忘記。但在解決啓動和其他 systemd 功能的問題時，大多數都能起到很好的作用。</p><h3 id="資源" tabindex="-1">資源 <a class="header-anchor" href="#資源" aria-label="Permalink to “資源”">​</a></h3><p>互聯網上關於 systemd 有很多信息，但是很多過於簡略、晦澀，甚至是誤導。除了這篇文章中提到的資源外，以下網頁提供了關於systemd啓動的更詳細和可靠的信息。這個列表在我開始寫這一系列文章後有所增長，以反映我所做的研究。</p>`,29)),a("ul",null,[a("li",null,[p(e,{href:"https://man7.org/linux/man-pages/man5/systemd.unit.5.html"},{default:i(()=>[...s[22]||(s[22]=[n("systemd.unit(5) 手冊頁",-1)])]),_:1}),s[23]||(s[23]=n(" 包含了一份單元文件部分及其配置選項的清單，並對每個部分進行了簡明的描述。",-1))]),a("li",null,[s[25]||(s[25]=n("Fedora 項目有一個很好的實用 ",-1)),p(e,{href:"https://docs.fedoraproject.org/en-US/quick-docs/understanding-and-administering-systemd/index.html"},{default:i(()=>[...s[24]||(s[24]=[n("systemd 指南",-1)])]),_:1}),s[26]||(s[26]=n("。它包含了配置、管理和維護使用 systemd 的 Fedora 計算機所需的幾乎所有知識。",-1))]),a("li",null,[s[28]||(s[28]=n("Fedora 項目還有一份很好的 ",-1)),p(e,{href:"https://fedoraproject.org/wiki/SysVinit_to_Systemd_Cheatsheet"},{default:i(()=>[...s[27]||(s[27]=[n("備忘錄",-1)])]),_:1}),s[29]||(s[29]=n("，將舊的 SystemV 命令與 systemd 命令進行了對照。",-1))]),a("li",null,[s[31]||(s[31]=n("Red Hat 文檔包含了對 ",-1)),p(e,{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_basic_system_settings/managing-services-with-systemd_configuring-basic-system-settings#Managing_Services_with_systemd-Unit_File_Structure"},{default:i(()=>[...s[30]||(s[30]=[n("單元文件結構",-1)])]),_:1}),s[32]||(s[32]=n(" 的詳細描述和其他重要的信息。",-1))]),a("li",null,[s[34]||(s[34]=n("關於 systemd 技術的細節和創建它的原因，可以去看 Freedesktop.org ",-1)),p(e,{href:"https://www.freedesktop.org/wiki/Software/systemd/"},{default:i(()=>[...s[33]||(s[33]=[n("systemd 詳述",-1)])]),_:1}),s[35]||(s[35]=n("。",-1))]),a("li",null,[p(e,{href:"http://Linux.com"},{default:i(()=>[...s[36]||(s[36]=[n("Linux.com",-1)])]),_:1}),s[38]||(s[38]=n(" 的“更多 systemd 樂趣”提供了很多高級的 systemd ",-1)),p(e,{href:"https://www.linux.com/training-tutorials/more-systemd-fun-blame-game-and-stopping-services-prejudice/"},{default:i(()=>[...s[37]||(s[37]=[n("信息和技巧",-1)])]),_:1}),s[39]||(s[39]=n("。",-1))])]),s[75]||(s[75]=a("p",null,"此外，systemd 設計者和主要開發者 Lennart Poettering 也為 Linux 系統管理員撰寫了一系列深度技術文檔，儘管這些文章寫於 2010 年 4 月到 2011 年 9 月，現在看也是非常適應時宜。關於 systemd 及其生態系統的其他好文章，大部分都是基於這些文章的。",-1)),a("ul",null,[a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/systemd.html"},{default:i(()=>[...s[40]||(s[40]=[n("Rethinking PID 1",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/systemd-for-admins-1.html"},{default:i(()=>[...s[41]||(s[41]=[n("systemd for Administrators, Part I",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/systemd-for-admins-2.html"},{default:i(()=>[...s[42]||(s[42]=[n("systemd for Administrators, Part II",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/systemd-for-admins-3.html"},{default:i(()=>[...s[43]||(s[43]=[n("systemd for Administrators, Part III",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/systemd-for-admins-4.html"},{default:i(()=>[...s[44]||(s[44]=[n("systemd for Administrators, Part IV",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/three-levels-of-off.html"},{default:i(()=>[...s[45]||(s[45]=[n("systemd for Administrators, Part V",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/changing-roots"},{default:i(()=>[...s[46]||(s[46]=[n("systemd for Administrators, Part VI",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/blame-game.html"},{default:i(()=>[...s[47]||(s[47]=[n("systemd for Administrators, Part VII",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/the-new-configuration-files.html"},{default:i(()=>[...s[48]||(s[48]=[n("systemd for Administrators, Part VIII",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/on-etc-sysinit.html"},{default:i(()=>[...s[49]||(s[49]=[n("systemd for Administrators, Part IX",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/instances.html"},{default:i(()=>[...s[50]||(s[50]=[n("systemd for Administrators, Part X",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/inetd.html"},{default:i(()=>[...s[51]||(s[51]=[n("systemd for Administrators, Part XI",-1)])]),_:1})])]),s[76]||(s[76]=a("hr",null,null,-1)),a("p",null,[s[53]||(s[53]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/20/9/systemd-startup-configuration"},{default:i(()=>[...s[52]||(s[52]=[n("https://opensource.com/article/20/9/systemd-startup-configuration",-1)])]),_:1})]),a("p",null,[s[58]||(s[58]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/dboth"},{default:i(()=>[...s[54]||(s[54]=[n("David Both",-1)])]),_:1}),s[59]||(s[59]=n(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[55]||(s[55]=[n("lujun9972",-1)])]),_:1}),s[60]||(s[60]=n(" 譯者：",-1)),p(e,{href:"https://github.com/jiamn"},{default:i(()=>[...s[56]||(s[56]=[n("jiamn",-1)])]),_:1}),s[61]||(s[61]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[57]||(s[57]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[64]||(s[64]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[62]||(s[62]=[n("LCTT",-1)])]),_:1}),s[65]||(s[65]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[63]||(s[63]=[n("Linux中國",-1)])]),_:1}),s[66]||(s[66]=n(" 榮譽推出",-1))])])}const T=l(m,[["render",u]]);export{v as __pageData,T as default};
