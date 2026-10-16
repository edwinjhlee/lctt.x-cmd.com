import{_ as l,a0 as o,w as d,s as c,ao as t,I as a,x as n,a1 as e,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"完全指南：在 Linux 中如何打印和管理打印機 | LCTT x X-CMD","titleTemplate":false,"description":"完全指南：在 Linux 中如何打印和管理打印機 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"完全指南：在 Linux 中如何打印和管理打印機 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"完全指南：在 Linux 中如何打印和管理打印機 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180206 Manage printers and printing","title":"完全指南：在 Linux 中如何打印和管理打印機","tag":"201804","desc":""},"relativePath":"201804/20180206 Manage printers and printing.md","filePath":"[post].md"}'),r={name:"201804/20180206 Manage printers and printing.md"};function u(b,s,h,g,f,m){const p=o("Link");return d(),c("div",null,[s[60]||(s[60]=t(`<h1 id="完全指南-在-linux-中如何打印和管理打印機" tabindex="-1">完全指南：在 Linux 中如何打印和管理打印機 <a class="header-anchor" href="#完全指南-在-linux-中如何打印和管理打印機" aria-label="Permalink to “完全指南：在 Linux 中如何打印和管理打印機”">​</a></h1><h3 id="linux-中的打印" tabindex="-1">Linux 中的打印 <a class="header-anchor" href="#linux-中的打印" aria-label="Permalink to “Linux 中的打印”">​</a></h3><p>雖然現在大量的溝通都是電子化和無紙化的，但是在我們的公司中還有大量的材料需要打印。銀行結算單、公用事業帳單、財務和其它報告、以及收益結算單等一些東西還是需要打印的。本教程將介紹在 Linux 中如何使用 CUPS 去打印。</p><p>CUPS，是<ruby>通用 Unix 打印系統<rt>Common UNIX Printing System</rt></ruby>的首字母縮寫，它是 Linux 中的打印機和打印任務的管理者。早期計算機上的打印機一般是在特定的字符集和字體大小下打印文本文件行。現在的圖形打印機可以打印各種字體和大小的文本和圖形。儘管如此，現在你所使用的一些命令，在古老的行式打印守護進程（LPD）技術的歷史中仍能找到它們。</p><p>本教程將幫你瞭解 Linux 服務器專業考試（LPIC-1）的第 108 號主題的 108.4 目標。這個目標的權重為 2。</p><h4 id="前提條件" tabindex="-1">前提條件 <a class="header-anchor" href="#前提條件" aria-label="Permalink to “前提條件”">​</a></h4><p>為了更好地學習本系列教程，你需要具備基本的 Linux 知識，和使用 Linux 系統實踐本教程中的命令的能力，你應該熟悉 GNU 和 UNIX® 命令的使用。有時不同版本的程序輸出可能會不同，因此，你的結果可能與本教程中的示例有所不同。</p><p>本教程中的示例使用的是 Fedora 27 的系統。</p><h3 id="有關打印的一些歷史" tabindex="-1">有關打印的一些歷史 <a class="header-anchor" href="#有關打印的一些歷史" aria-label="Permalink to “有關打印的一些歷史”">​</a></h3><p>這一小部分歷史並不是 LPI 目標的，但它有助於你理解這個目標的相關環境。</p><p>早期的計算機大都使用行式打印機。這些都是擊打式打印機，那時，它們使用固定間距的字符和單一的字體來打印文本行。為提升整個系統性能，早期的主機要與慢速的外圍設備（如讀卡器、卡片穿孔機、和運行其它工作的行式打印機）交叉進行工作。因此就產生了在線的或者假脱機的同步外圍操作，這一術語目前在談到計算機打印時仍然在使用。</p><p>在 UNIX 和 Linux 系統上，打印初始化使用的是 BSD（<ruby>伯克利軟件分發版<rt>Berkeley Software Distribution</rt></ruby>）打印子系統，它是由一個作為服務器運行的行式打印守護程序（LPD）組成，而客户端命令如 <code>lpr</code> 是用於提交打印作業。這個協議後來被 IETF 標準化為 RFC 1179 —— <strong>行式打印機守護進程協議</strong>。</p><p>System V 也有一個打印守護程序。它的功能與BSD 的 LPD 守護程序類似，但是它們的命令集不一樣。你在後面會經常看到完成相同的任務使用不同選項的兩個命令。例如，對於打印文件的命令，伯克利實現版本是 <code>lpr</code>，而 System V 實現版本是 <code>lp</code>。</p><p>隨着打印機技術的進步，在一個頁面上混合出現不同字體成為可能，並且可以將圖片像文字一樣打印。可變間距字體，以及更多先進的打印技術，比如間距和連字符，現在都已經標準化。出現了幾種對基本的 lpd/lpr 方法等改進設計，比如 LPRng，下一代的 LPR，以及 CUPS。</p><p>許多可以打印圖形的打印機，使用 Adobe PostScript 語言進行初始化。一個 PostScript 打印機有一個解釋器引擎，它可以解釋打印任務中的命令並從這些命令中生成最終的頁面。PostScript 經常被用做原始文件（比如一個文本文件或者一個圖像文件）和最終格式沒有適合的 PostScript 功能的特定打印機之間的中間層。轉換這些特定的打印任務，比如將一個 ASCII 文本文件或者一個 JPEG 圖像轉換為 PostScript，然後再使用過濾器轉換 PostScript 到非 PostScript 打印機所需要的最終光柵格式。</p><p>現在的<ruby>便攜式文檔格式<rt>Portable Document Format</rt></ruby>（PDF），它就是基於 PostScript 的，已經替換了傳統的原始 PostScript。PDF 設計為與硬件和軟件無關，它封裝了要打印的頁面的完整描述。你可以查看 以及打印 PDF 文件。</p><h3 id="管理打印隊列" tabindex="-1">管理打印隊列 <a class="header-anchor" href="#管理打印隊列" aria-label="Permalink to “管理打印隊列”">​</a></h3><p>用户直接打印作業到一個名為<ruby>打印隊列<rt>print queue</rt></ruby>的邏輯實體。在單用户系統中，打印隊列和打印機通常是幾乎相同的意思。但是，CUPS 允許系統不用連接到一個打印機上，而最終在一個遠程系統上的排隊打印作業，並且通過使用分類，允許將定向到一個分類的打印作業在該分類第一個可用的打印機上打印。</p><p>你可以檢查和管理打印隊列。對於 CUPS 來説，其中一些命令實現了一些新操作。另外的一些是源於 LPD 的兼容命令，不過現在的一些選項通常是最初的 LPD 打印系統選項的有限子集。</p><p>你可以使用 CUPS 的 <code>lpstat</code> 命令去檢查隊列，以瞭解打印系統。一些常見選項如下表 1。</p><div class="table-wrap"><table><thead><tr><th>選項</th><th>作用</th></tr></thead><tbody><tr><td><code>-a</code></td><td>顯示打印機狀態</td></tr><tr><td><code>-c</code></td><td>顯示打印分類</td></tr><tr><td><code>-p</code></td><td>顯示打印狀態：<code>enabled</code> 或者 <code>disabled</code></td></tr><tr><td><code>-s</code></td><td>顯示默認打印機、打印機和類。相當於 <code>-d -c -v</code>。<strong>注意：要指定多個選項，這些選項必須像值一樣分隔開。</strong></td></tr><tr><td><code>-v</code></td><td>顯示打印機和它們的設備。</td></tr></tbody></table></div><p><em>表 1. lpstat 命令的選項</em></p><p>你也可以使用 LPD 的 <code>lpc</code> 命令（它可以在 <code>/usr/sbin</code> 中找到）使用它的 <code>status</code> 選項。如果你不想指定打印機名字，將列出所有的隊列。列表 1 展示了命令的一些示例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ian@atticf27 ~]$ lpstat -d</span></span>
<span class="line"><span>system default destination: HL-2280DW</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpstat -v HL-2280DW</span></span>
<span class="line"><span>device for HL-2280DW: dnssd://Brother%20HL-2280DW._pdl-datastream._tcp.local/</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpstat -s</span></span>
<span class="line"><span>system default destination: HL-2280DW</span></span>
<span class="line"><span>members of class anyprint:</span></span>
<span class="line"><span>    HL-2280DW</span></span>
<span class="line"><span>    XP-610</span></span>
<span class="line"><span>device for anyprint: ///dev/null</span></span>
<span class="line"><span>device for HL-2280DW: dnssd://Brother%20HL-2280DW._pdl-datastream._tcp.local/</span></span>
<span class="line"><span>device for XP-610: dnssd://EPSON%20XP-610%20Series._ipp._tcp.local/?uuid=cfe92100-67c4-11d4-a45f-ac18266c48aa</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpstat -a XP-610</span></span>
<span class="line"><span>XP-610 accepting requests since Thu 27 Apr 2017 05:53:59 PM EDT</span></span>
<span class="line"><span>[ian@atticf27 ~]$ /usr/sbin/lpc status HL-2280DW</span></span>
<span class="line"><span>HL-2280DW:</span></span>
<span class="line"><span>    printer is on device &#39;dnssd&#39; speed -1</span></span>
<span class="line"><span>    queuing is disabled</span></span>
<span class="line"><span>    printing is enabled</span></span>
<span class="line"><span>    no entries</span></span>
<span class="line"><span>    daemon present</span></span></code></pre></div><p><em>列表 1. 顯示可用打印隊列</em></p><p>這個示例展示了兩台打印機 —— HL-2280DW 和 XP-610，和一個分類 <code>anyprint</code>，它允許打印作業定向到這兩台打印機中的第一個可用打印機。</p><p>在這個示例中，已經禁用了打印到 HL-2280DW 隊列，但是打印功能是啓用的，這樣便於將打印機脱機維護之前可以完成打印隊列中的任務。啓用還是禁用隊列，可以使用 <code>cupsaccept</code> 和 <code>cupsreject</code> 命令來管理。以前它們叫做 <code>accept</code> 和 <code>reject</code>，你或許可能在 <code>/usr/sbin</code> 中找到這些命令，但它們現在都是符號鏈接到新的命令上了。同樣，啓用還是禁用打印，你可以使用 <code>cupsenable</code> 和 <code>cupsdisable</code> 命令來管理。在早期版本的 CUPS 中，這些被稱為 <code>enable</code> 和 <code>disable</code>，它也許會與 bash shell 內置的 <code>enable</code> 混淆。列表 2 展示瞭如何去啓用打印機 HL-2280DW 上的隊列，而禁止它的打印。CUPS 的幾個命令支持使用 <code>-r</code> 選項去提供一個該操作的理由。這個理由會在你使用 <code>lpstat</code> 時顯示，但是如果你使用的是 <code>lpc</code> 命令則不會顯示它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ian@atticf27 ~]$ lpstat -a -p HL-2280DW</span></span>
<span class="line"><span>anyprint accepting requests since Mon 29 Jan 2018 01:17:09 PM EST</span></span>
<span class="line"><span>HL-2280DW not accepting requests since Thu 27 Apr 2017 05:52:27 PM EDT -</span></span>
<span class="line"><span>    Maintenance scheduled</span></span>
<span class="line"><span>XP-610 accepting requests since Thu 27 Apr 2017 05:53:59 PM EDT</span></span>
<span class="line"><span>printer HL-2280DW is idle. enabled since Thu 27 Apr 2017 05:52:27 PM EDT</span></span>
<span class="line"><span>    Maintenance scheduled</span></span>
<span class="line"><span>[ian@atticf27 ~]$ accept HL-2280DW</span></span>
<span class="line"><span>[ian@atticf27 ~]$ cupsdisable -r &quot;waiting for toner delivery&quot; HL-2280DW</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpstat -p -a</span></span>
<span class="line"><span>printer anyprint is idle. enabled since Mon 29 Jan 2018 01:17:09 PM EST</span></span>
<span class="line"><span>printer HL-2280DW disabled since Mon 29 Jan 2018 04:03:50 PM EST -</span></span>
<span class="line"><span>    waiting for toner delivery</span></span>
<span class="line"><span>printer XP-610 is idle. enabled since Thu 27 Apr 2017 05:53:59 PM EDT</span></span>
<span class="line"><span>anyprint accepting requests since Mon 29 Jan 2018 01:17:09 PM EST</span></span>
<span class="line"><span>HL-2280DW accepting requests since Mon 29 Jan 2018 04:03:50 PM EST</span></span>
<span class="line"><span>XP-610 accepting requests since Thu 27 Apr 2017 05:53:59 PM EDT</span></span></code></pre></div><p><em>列表 2. 啓用隊列和禁用打印</em></p><p>注意：用户執行這些任務必須經過授權。它可能要求是 root 用户或者其它的授權用户。在 <code>/etc/cups/cups-files.conf</code> 中可以看到 <code>SystemGroup</code> 的條目，<code>cups-files.conf</code> 的 man 頁面有更多授權用户組的信息。</p><h3 id="管理用户打印作業" tabindex="-1">管理用户打印作業 <a class="header-anchor" href="#管理用户打印作業" aria-label="Permalink to “管理用户打印作業”">​</a></h3><p>現在，你已經知道了一些如何去檢查打印隊列和類的方法，我將給你展示如何管理打印隊列上的作業。你要做的第一件事是，如何找到一個特定打印機或者全部打印機上排隊的任意作業。完成上述工作要使用 <code>lpq</code> 命令。如果沒有指定任何選項，<code>lpq</code> 將顯示默認打印機上的隊列。使用 <code>-P</code> 選項和一個打印機名字將指定打印機，或者使用 <code>-a</code> 選項去指定所有的打印機，如下面的列表 3 所示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[pat@atticf27 ~]$ # As user pat (non-administrator)</span></span>
<span class="line"><span>[pat@atticf27 ~]$ lpq</span></span>
<span class="line"><span>HL-2280DW is not ready</span></span>
<span class="line"><span>Rank Owner Job File(s) Total Size</span></span>
<span class="line"><span>1st unknown 4 unknown 6144 bytes</span></span>
<span class="line"><span>2nd pat 6 bitlib.h 6144 bytes</span></span>
<span class="line"><span>3rd pat 7 bitlib.C 6144 bytes</span></span>
<span class="line"><span>4th unknown 8 unknown 1024 bytes</span></span>
<span class="line"><span>5th unknown 9 unknown 1024 bytes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ian@atticf27 ~]$ # As user ian (administrator)</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpq -P xp-610</span></span>
<span class="line"><span>xp-610 is ready</span></span>
<span class="line"><span>no entries</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpq -a</span></span>
<span class="line"><span>Rank Owner Job File(s) Total Size</span></span>
<span class="line"><span>1st ian 4 permutation.C 6144 bytes</span></span>
<span class="line"><span>2nd pat 6 bitlib.h 6144 bytes</span></span>
<span class="line"><span>3rd pat 7 bitlib.C 6144 bytes</span></span>
<span class="line"><span>4th ian 8 .bashrc 1024 bytes</span></span>
<span class="line"><span>5th ian 9 .bashrc 1024 bytes</span></span></code></pre></div><p><em>列表 3. 使用 lpq 檢查打印隊列</em></p><p>在這個示例中，共有五個作業，它們是 4、6、7、8、和 9，並且它是名為 HL-2280DW 的打印機的隊列，而不是 XP-610 的。在這個示例中使用 <code>-P</code> 選項，可簡單地顯示哪個打印機已經準備好，但是沒有隊列任務。注意，CUPS 的打印機命名，是大小寫不敏感的。還要注意的是，用户 ian 提交了同樣的作業兩次，當一個作業沒有第一時間打印時，經常能看到用户的這種動作。</p><p>一般情況下，你可能會查看或者維護你自己的打印作業，但是，root 用户或者其它授權的用户通常會去管理其它打印作業。大多數 CUPS 命令都可以使用一個 <code>-E</code> 選項，對 CUPS 服務器與客户端之間的通訊進行加密。</p><p>使用 <code>lprm</code> 命令從隊列中去刪除一個 <code>.bashrc</code> 作業。如果不使用選項，將刪除當前的作業。使用 <code>-</code> 選項，將刪除全部的作業。要麼就如列表 4 那樣，指定一個要刪除的作業列表。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[[pat@atticf27 ~]$ # As user pat (non-administrator)</span></span>
<span class="line"><span>[pat@atticf27 ~]$ lprm</span></span>
<span class="line"><span>lprm: Forbidden</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ian@atticf27 ~]$ # As user ian (administrator)</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lprm 8</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpq</span></span>
<span class="line"><span>HL-2280DW is not ready</span></span>
<span class="line"><span>Rank Owner Job File(s) Total Size</span></span>
<span class="line"><span>1st ian 4 permutation.C 6144 bytes</span></span>
<span class="line"><span>2nd pat 6 bitlib.h 6144 bytes</span></span>
<span class="line"><span>3rd pat 7 bitlib.C 6144 bytes</span></span>
<span class="line"><span>4th ian 9 .bashrc 1024 bytes</span></span></code></pre></div><p><em>列表 4. 使用 lprm 刪除打印作業</em></p><p>注意，用户 pat 不能刪除隊列中的第一個作業，因為它是用户 ian 的。但是，ian 可以刪除他自己的 8 號作業。</p><p>另外的可以幫你操作打印隊列中的作業的命令是 <code>lp</code>。使用它可以去修改作業屬性，比如打印數量或者優先級。我們假設用户 ian 希望他的作業 9 在用户 pat 的作業之前打印，並且希望打印兩份。作業優先級的默認值是 50，它的優先級範圍從最低的 1 到最高的 100 之間。用户 ian 可以使用 <code>-i</code>、<code>-n</code>、以及 <code>-q</code> 選項去指定一個要修改的作業，而新的打印數量和優先級可以如下面的列表 5 所示的那樣去修改。注意，使用 <code>-l</code> 選項的 <code>lpq</code> 命令可以提供更詳細的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ian@atticf27 ~]$ lpq</span></span>
<span class="line"><span>HL-2280DW is not ready</span></span>
<span class="line"><span>Rank Owner Job File(s) Total Size</span></span>
<span class="line"><span>1st ian 4 permutation.C 6144 bytes</span></span>
<span class="line"><span>2nd pat 6 bitlib.h 6144 bytes</span></span>
<span class="line"><span>3rd pat 7 bitlib.C 6144 bytes</span></span>
<span class="line"><span>4th ian 9 .bashrc 1024 bytes</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lp -i 9 -q 60 -n 2</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpq</span></span>
<span class="line"><span>HL-2280DW is not ready</span></span>
<span class="line"><span>Rank Owner Job File(s) Total Size</span></span>
<span class="line"><span>1st ian 9 .bashrc 1024 bytes</span></span>
<span class="line"><span>2nd ian 4 permutation.C 6144 bytes</span></span>
<span class="line"><span>3rd pat 6 bitlib.h 6144 bytes</span></span>
<span class="line"><span>4th pat 7 bitlib.C 6144 bytes</span></span></code></pre></div><p><em>列表 5. 使用 lp 去改變打印數量和優先級</em></p><p>最後，<code>lpmove</code> 命令可以允許一個作業從一個隊列移動到另一個隊列。例如，我們可能因為打印機 HL-2280DW 現在不能使用，而想去移動一個作業到另外的隊列上。你可以指定一個作業編號，比如 9，或者你可以用一個隊列名加一個連字符去限定它，比如，HL-2280DW-0。<code>lpmove</code> 命令的操作要求是授權用户。列表 6 展示瞭如何去從一個隊列移動作業到另外的隊列，先是指定打印機和作業 ID 移動，然後是移動指定打印機的所有作業。稍後我們可以去再次檢查隊列，其中一個作業已經在打印中了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ian@atticf27 ~]$ lpmove HL-2280DW-9 anyprint</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpmove HL-2280DW xp-610</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpq -a</span></span>
<span class="line"><span>Rank Owner Job File(s) Total Size</span></span>
<span class="line"><span>active ian 9 .bashrc 1024 bytes</span></span>
<span class="line"><span>1st ian 4 permutation.C 6144 bytes</span></span>
<span class="line"><span>2nd pat 6 bitlib.h 6144 bytes</span></span>
<span class="line"><span>3rd pat 7 bitlib.C 6144 bytes</span></span>
<span class="line"><span>[ian@atticf27 ~]$ # A few minutes later</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpq -a</span></span>
<span class="line"><span>Rank Owner Job File(s) Total Size</span></span>
<span class="line"><span>active pat 6 bitlib.h 6144 bytes</span></span>
<span class="line"><span>1st pat 7 bitlib.C 6144 bytes</span></span></code></pre></div><p><em>列表 6. 使用 lpmove 移動作業到另外一個打印隊列</em></p><p>如果你使用的是 CUPS 之外的打印服務器，比如 LPD 或者 LPRng，大多數的隊列管理功能是由 <code>lpc</code> 命令的子命令來處理的。例如，你可以使用 <code>lpc topq</code> 去移動一個作業到隊列的頂端。其它的 <code>lpc</code> 子命令包括 <code>disable</code>、<code>down</code>、<code>enable</code>、<code>hold</code>、<code>move</code>、<code>redirect</code>、<code>release</code>、和 <code>start</code>。這些子命令在 CUPS 的兼容命令中沒有實現。</p><h4 id="打印文件" tabindex="-1">打印文件 <a class="header-anchor" href="#打印文件" aria-label="Permalink to “打印文件”">​</a></h4><p>如何去打印創建的作業？大多數圖形界面程序都提供了一個打印方法，通常是 <strong>文件</strong> 菜單下面的選項。這些程序為選擇打印機、設置頁邊距、彩色或者黑白打印、打印數量、選擇每張紙打印的頁面數（每張紙打印兩個頁面，通常用於講義）等等，都提供了圖形化的工具。現在，我將為你展示如何使用命令列工具去管理這些功能，然後和圖形化實現進行比較。</p><p>打印文件最簡單的方法是使用 <code>lpr</code> 命令，然後提供一個文件名字。這將在默認打印機上打印這個文件。而 <code>lp</code> 命令不僅可以打印文件，也可以修改打印作業。列表 7 展示了使用這個命令的一個簡單示例。注意，<code>lpr</code> 會靜默處理這個作業，但是 <code>lp</code> 會顯示處理後的作業的 ID。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ian@atticf27 ~]$ echo &quot;Print this text&quot; &gt; printexample.txt</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpr printexample.txt</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lp printexample.txt</span></span>
<span class="line"><span>request id is HL-2280DW-12 (1 file(s))</span></span></code></pre></div><p><em>列表 7. 使用 lpr 和 lp 打印</em></p><p>表 2 展示了 <code>lpr</code> 上你可以使用的一些選項。注意， <code>lp</code> 的選項和 <code>lpr</code> 的很類似，但是名字可能不一樣；例如，<code>-#</code> 在 <code>lpr</code> 上是相當於 <code>lp</code> 的 <code>-n</code> 選項。查看 man 頁面瞭解更多的信息。</p><div class="table-wrap"><table><thead><tr><th>選項</th><th>作用</th></tr></thead><tbody><tr><td><code>-C</code>， <code>-J</code> 或 <code>-T</code></td><td>設置一個作業名字。</td></tr><tr><td><code>-P</code></td><td>選擇一個指定的打印機。</td></tr><tr><td><code>-#</code></td><td>指定打印數量。注意這不同於 <code>lp</code> 命令的 <code>-n</code> 選項。</td></tr><tr><td><code>-m</code></td><td>在作業完成時發送電子郵件。</td></tr><tr><td><code>-l</code></td><td>表示打印文件已經為打印做好格式準備。相當於 <code>-o raw</code>。</td></tr><tr><td><code>-o</code></td><td>設置一個作業選項。</td></tr><tr><td><code>-p</code></td><td>格式化一個帶有陰影標題的文本文件。相關於 <code>-o prettyprint</code>。</td></tr><tr><td><code>-q</code></td><td>暫緩（或排隊）後面的打印作業。</td></tr><tr><td><code>-r</code></td><td>在文件進入打印池之後，刪除文件。</td></tr></tbody></table></div><p><em>表 2. lpr 的選項</em></p><p>列表 8 展示了一些選項。我要求打印之後給我發確認電子郵件，那個作業被暫緩執行，並且在打印之後刪除文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ian@atticf27 ~]$ lpr -P HL-2280DW -J &quot;Ian&#39;s text file&quot; -#2 -m -p -q -r printexample.txt</span></span>
<span class="line"><span>[[ian@atticf27 ~]$ lpq -l</span></span>
<span class="line"><span>HL-2280DW is ready</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ian: 1st [job 13 localhost]</span></span>
<span class="line"><span> 2 copies of Ian&#39;s text file 1024 bytes</span></span>
<span class="line"><span>[ian@atticf27 ~]$ ls printexample.txt</span></span>
<span class="line"><span>ls: cannot access &#39;printexample.txt&#39;: No such file or directory</span></span></code></pre></div><p><em>列表 8. 使用 lpr 打印</em></p><p>我現在有一個在 HL-2280DW 打印隊列上暫緩執行的作業。然後怎麼做？<code>lp</code> 命令可以通過使用 <code>-H</code> 的各種選項來暫緩或者投放作業。列表 9 展示瞭如何投放被暫緩的作業。查看 <code>lp</code> 命令的 man 頁面瞭解其它選項的信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ian@atticf27 ~]$ lp -i 13 -H resume</span></span></code></pre></div><p><em>列表 9. 重啓一個暫緩的打印作業</em></p><p>並不是所有的可用打印機都支持相同的選項集。使用 <code>lpoptions</code> 命令去查看一個打印機的常用選項。添加 <code>-l</code> 選項去顯示打印機專用的選項。列表 10 展示了兩個示例。許多常見的選項涉及到人像/風景打印、頁面大小和輸出在紙張上的佈局。詳細信息查看 man 頁面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ian@atticf27 ~]$ lpoptions -p HL-2280DW</span></span>
<span class="line"><span>copies=1 device-uri=dnssd://Brother%20HL-2280DW._pdl-datastream._tcp.local/</span></span>
<span class="line"><span>finishings=3 job-cancel-after=10800 job-hold-until=no-hold job-priority=50</span></span>
<span class="line"><span>job-sheets=none,none marker-change-time=1517325288 marker-colors=#000000,#000000</span></span>
<span class="line"><span>marker-levels=-1,92 marker-names=&#39;Black\\ Toner\\ Cartridge,Drum\\ Unit&#39;</span></span>
<span class="line"><span>marker-types=toner,opc number-up=1 printer-commands=none</span></span>
<span class="line"><span>printer-info=&#39;Brother HL-2280DW&#39; printer-is-accepting-jobs=true</span></span>
<span class="line"><span>printer-is-shared=true printer-is-temporary=false printer-location</span></span>
<span class="line"><span>printer-make-and-model=&#39;Brother HL-2250DN - CUPS+Gutenprint v5.2.13 Simplified&#39;</span></span>
<span class="line"><span>printer-state=3 printer-state-change-time=1517325288 printer-state-reasons=none</span></span>
<span class="line"><span>printer-type=135188 printer-uri-supported=ipp://localhost/printers/HL-2280DW</span></span>
<span class="line"><span>sides=one-sided</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpoptions -l -p xp-610</span></span>
<span class="line"><span>PageSize/Media Size: *Letter Legal Executive Statement A4</span></span>
<span class="line"><span>ColorModel/Color Model: *Gray Black</span></span>
<span class="line"><span>InputSlot/Media Source: *Standard ManualAdj Manual MultiPurposeAdj MultiPurpose</span></span>
<span class="line"><span>UpperAdj Upper LowerAdj Lower LargeCapacityAdj LargeCapacity</span></span>
<span class="line"><span>StpQuality/Print Quality: None Draft *Standard High</span></span>
<span class="line"><span>Resolution/Resolution: *301x300dpi 150dpi 300dpi 600dpi</span></span>
<span class="line"><span>Duplex/2-Sided Printing: *None DuplexNoTumble DuplexTumble</span></span>
<span class="line"><span>StpiShrinkOutput/Shrink Page If Necessary to Fit Borders: *Shrink Crop Expand</span></span>
<span class="line"><span>StpColorCorrection/Color Correction: *None Accurate Bright Hue Uncorrected</span></span>
<span class="line"><span>Desaturated Threshold Density Raw Predithered</span></span>
<span class="line"><span>StpBrightness/Brightness: 0 100 200 300 400 500 600 700 800 900 *None 1100</span></span>
<span class="line"><span>1200 1300 1400 1500 1600 1700 1800 1900 2000 Custom.REAL</span></span>
<span class="line"><span>StpContrast/Contrast: 0 100 200 300 400 500 600 700 800 900 *None 1100 1200</span></span>
<span class="line"><span>1300 1400 1500 1600 1700 1800 1900 2000 2100 2200 2300 2400 2500 2600 2700</span></span>
<span class="line"><span>2800 2900 3000 3100 3200 3300 3400 3500 3600 3700 3800 3900 4000 Custom.REAL</span></span>
<span class="line"><span>StpImageType/Image Type: None Text Graphics *TextGraphics Photo LineArt</span></span></code></pre></div><p><em>列表 10. 檢查打印機選項</em></p><p>大多數的 GUI 應用程序有一個打印對話框，通常你可以使用 <strong>文件 &gt;打印</strong> 菜單去選擇它。圖 1 展示了在 GIMP 中的一個示例，GIMP 是一個圖像處理程序。</p><p><img src="https://www.ibm.com/developerworks/library/l-lpic1-108-4/gimp-print.jpg" alt="Printing from the GIMP"></p><p><em>圖 1. 在 GIMP 中打印</em></p><p>到目前為止，我們所有的命令都是隱式指向到本地的 CUPS 打印服務器上。你也可以通過指定 <code>-h</code> 選項和一個端口號（如果不是 CUPS 的默認端口號 631 的話）將打印轉向到另外一個系統上的服務器。</p><h3 id="cups-和-cups-服務器" tabindex="-1">CUPS 和 CUPS 服務器 <a class="header-anchor" href="#cups-和-cups-服務器" aria-label="Permalink to “CUPS 和 CUPS 服務器”">​</a></h3>`,69)),a("p",null,[s[1]||(s[1]=n("CUPS 打印系統的核心是 ",-1)),s[2]||(s[2]=a("code",null,"cupsd",-1)),s[3]||(s[3]=n(" 打印服務器，它是一個運行的守護進程。CUPS 配置文件一般位於 ",-1)),s[4]||(s[4]=a("code",null,"/etc/cups/cupsd.conf",-1)),s[5]||(s[5]=n("。",-1)),s[6]||(s[6]=a("code",null,"/etc/cups",-1)),s[7]||(s[7]=n(" 目錄也有與 CUPS 相關的其它的配置文件。CUPS 一般在系統初始化期間啓動，根據你的發行版不同，它也可能通過位於 ",-1)),s[8]||(s[8]=a("code",null,"/etc/rc.d/init.d",-1)),s[9]||(s[9]=n(" 或者 ",-1)),s[10]||(s[10]=a("code",null,"/etc/init.d",-1)),s[11]||(s[11]=n(" 目錄中的 CUPS 腳本來控制。對於 最新使用 systemd 來初始化的系統，CUPS 服務腳本可能在 ",-1)),s[12]||(s[12]=a("code",null,"/usr/lib/systemd/system/cups.service",-1)),s[13]||(s[13]=n(" 中。和大多數使用腳本的服務一樣，你可以停止、啓動、或者重啓守護程序。查看我們的教程：",-1)),e(p,{href:"https://www.ibm.com/developerworks/library/l-lpic1-101-3/"},{default:i(()=>[...s[0]||(s[0]=[n("學習 Linux，101：運行級別、引導目標、關閉、和重啓動",-1)])]),_:1}),s[14]||(s[14]=n("，瞭解使用初始化腳本的更多信息。",-1))]),s[61]||(s[61]=t(`<p>配置文件 <code>/etc/cups/cupsd.conf</code> 包含一些管理參數，比如訪問打印系統、是否允許遠程打印、本地打印池文件等等。在一些系統上，第二部分單獨描述了打印隊列，它一般是由配置工具自動生成的。列表 11 展示了一個默認的 <code>cupsd.conf</code> 文件中的一些條目。注意，註釋是以 <code>#</code> 字符開頭的。默認值通常以註釋的方式顯示，並且可以通過刪除前面的 <code>#</code> 字符去改變默認值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Only listen for connections from the local machine.</span></span>
<span class="line"><span>Listen localhost:631</span></span>
<span class="line"><span>Listen /var/run/cups/cups.sock</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Show shared printers on the local network.</span></span>
<span class="line"><span>Browsing On</span></span>
<span class="line"><span>BrowseLocalProtocols dnssd</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Default authentication type, when authentication is required...</span></span>
<span class="line"><span>DefaultAuthType Basic</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Web interface setting...</span></span>
<span class="line"><span>WebInterface Yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Set the default printer/job policies...</span></span>
<span class="line"><span>&lt;Policy default&gt;</span></span>
<span class="line"><span> # Job/subscription privacy...</span></span>
<span class="line"><span> JobPrivateAccess default</span></span>
<span class="line"><span> JobPrivateValues default</span></span>
<span class="line"><span> SubscriptionPrivateAccess default</span></span>
<span class="line"><span> SubscriptionPrivateValues default</span></span>
<span class="line"><span></span></span>
<span class="line"><span> # Job-related operations must be done by the owner or an administrator...</span></span>
<span class="line"><span> &lt;Limit Create-Job Print-Job Print-URI Validate-Job&gt;</span></span>
<span class="line"><span> Order deny,allow</span></span>
<span class="line"><span> &lt;/Limit&gt;</span></span></code></pre></div><p><em>列表 11. 默認的 /etc/cups/cupsd.conf 文件的部分內容</em></p><p>可以用在 <code>cupsd.conf</code> 中使用的文件、目錄、和用户配置命令，現在都存儲在作為替代的 <code>cups-files.conf</code> 中。這是為了防範某些類型的提權攻擊。列表 12 展示了 <code>cups-files.conf</code> 文件中的一些條目。注意，正如在文件層次結構標準（FHS）中所期望的那樣，打印池文件默認保存在文件系統的 <code>/var/spool</code> 目錄中。查看 man 頁面瞭解 <code>cupsd.conf</code> 和 <code>cups-files.conf</code> 配置文件的更多信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Location of the file listing all of the local printers...</span></span>
<span class="line"><span>#Printcap /etc/printcap</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Format of the Printcap file...</span></span>
<span class="line"><span>#PrintcapFormat bsd</span></span>
<span class="line"><span>#PrintcapFormat plist</span></span>
<span class="line"><span>#PrintcapFormat solaris</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Location of all spool files...</span></span>
<span class="line"><span>#RequestRoot /var/spool/cups</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Location of helper programs...</span></span>
<span class="line"><span>#ServerBin /usr/lib/cups</span></span>
<span class="line"><span></span></span>
<span class="line"><span># SSL/TLS keychain for the scheduler...</span></span>
<span class="line"><span>#ServerKeychain ssl</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Location of other configuration files...</span></span>
<span class="line"><span>#ServerRoot /etc/cups</span></span></code></pre></div><p><em>列表 12. 默認的 /etc/cups/cups-files.conf 配置文件的部分內容</em></p><p>列表 12 提及了 <code>/etc/printcap</code> 文件。這是 LPD 打印服務器的配置文件的名字，並且一些應用程序仍然使用它去確定可用的打印機和它們的屬性。它通常是在 CUPS 系統上自動生成的，因此，你可能沒有必要去修改它。但是，如果你在診斷用户打印問題，你可能需要去檢查它。列表 13 展示了一個示例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># This file was automatically generated by cupsd(8) from the</span></span>
<span class="line"><span># /etc/cups/printers.conf file. All changes to this file</span></span>
<span class="line"><span># will be lost.</span></span>
<span class="line"><span>HL-2280DW|Brother HL-2280DW:rm=atticf27:rp=HL-2280DW:</span></span>
<span class="line"><span>anyprint|Any available printer:rm=atticf27:rp=anyprint:</span></span>
<span class="line"><span>XP-610|EPSON XP-610 Series:rm=atticf27:rp=XP-610:</span></span></code></pre></div><p><em>列表 13. 自動生成的 /etc/printcap</em></p><p>這個文件中的每一行都有一個打印機名字、打印機描述，遠程機器（<code>rm</code>）的名字、以及那個遠程機器上的遠程打印機（<code>rp</code>）。老的 <code>/etc/printcap</code> 文件也描述了打印機的能力。</p><h4 id="文件轉換過濾器" tabindex="-1">文件轉換過濾器 <a class="header-anchor" href="#文件轉換過濾器" aria-label="Permalink to “文件轉換過濾器”">​</a></h4><p>你可以使用 CUPS 打印許多類型的文件，包括明文的文本文件、PDF、PostScript、和各種格式的圖像文件，你只需要提供要打印的文件名，除此之外你再無需向 <code>lpr</code> 或 <code>lp</code> 命令提供更多的信息。這個神奇的壯舉是通過使用過濾器來實現的。實際上，這些年來最流行的過濾器就就叫做 magicfilter（神奇的過濾器）。</p><p>當打印一個文件時，CUPS 使用多用途因特網郵件擴展（MIME）類型去決定合適的轉換過濾器。其它的打印數據包可能使用由 <code>file</code> 命令使用的神奇數字機制。關於 <code>file</code> 或者神奇數的更多信息可以查看它們的 man 頁面。</p><p>輸入文件被過濾器轉換成中間層的光柵格式或者 PostScript 格式。一些作業信息，比如打印數量也會被添加進去。數據最終通過一個後端發送到目標打印機。還有一些可以用手動過濾的輸入文件的過濾器（如 a2ps 或 dvips）。你可以通過這些過濾器獲得特殊格式的結果，或者去處理一些 CUPS 原生並不支持的文件格式。</p><h4 id="添加打印機" tabindex="-1">添加打印機 <a class="header-anchor" href="#添加打印機" aria-label="Permalink to “添加打印機”">​</a></h4><p>CUPS 支持多種打印機，包括：</p><ul><li>本地連接的並行口和 USB 口打印機</li><li>因特網打印協議（IPP）打印機</li><li>遠程 LPD 打印機</li><li>使用 SAMBA 的 Microsoft® Windows® 打印機</li><li>使用 NCP 的 Novell 打印機</li><li>HP Jetdirect 打印機</li></ul>`,17)),a("p",null,[s[17]||(s[17]=n("當系統啓動或者設備連接時，現在的大多數系統都會嘗試自動檢測和自動配置本地硬件。同樣，許多網絡打印機也可以被自動檢測到。使用 CUPS 的 web 管理工具（",-1)),e(p,{href:"http://localhost:631"},{default:i(()=>[...s[15]||(s[15]=[n("http://localhost:631",-1)])]),_:1}),s[18]||(s[18]=n(" 或者 ",-1)),e(p,{href:"http://127.0.0.1:631"},{default:i(()=>[...s[16]||(s[16]=[n("http://127.0.0.1:631",-1)])]),_:1}),s[19]||(s[19]=n("）去搜索或添加打印機。許多發行版都包含它們自己的配置工具，比如，在 SUSE 系統上的 YaST。圖 2 展示了使用 localhost:631 的 CUPS 界面，圖 3 展示了 Fedora 27 上的 GNOME 打印機設置對話框。",-1))]),s[62]||(s[62]=t(`<p><img src="https://www.ibm.com/developerworks/library/l-lpic1-108-4/fig-cups-web.jpg" alt="Using the CUPS web interface"></p><p><em>圖 2. 使用 CUPS 的 web 界面</em></p><p><img src="https://www.ibm.com/developerworks/library/l-lpic1-108-4/fig-settings.jpg" alt="Using printer settings on Fedora 27"></p><p><em>圖 3. Fedora 27 上的打印機設置</em></p><p>你也可以從命令列配置打印機。在配置打印機之前，你需要一些關於打印機和它的連接方式的基本信息。如果是一個遠程系統，你還需要一個用户 ID 和密碼。</p><p>你需要去知道你的打印機使用什麼樣的驅動程序。不是所有的打印機都支持 Linux，有些打印機在 Linux 上壓根就不能使用，或者功能受限。你可以去 OpenPrinting.org 去查看是否有你的特定的打印機的驅動程序。<code>lpinfo</code> 命令也可以幫你識別有效的設備類型和驅動程序。使用 <code>-v</code> 選項去列出支持的設備，使用 <code>-m</code> 選項去列出驅動程序，如列表 14 所示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ian@atticf27 ~]$ lpinfo -m | grep -i xp-610</span></span>
<span class="line"><span>lsb/usr/Epson/epson-inkjet-printer-escpr/Epson-XP-610_Series-epson-escpr-en.ppd.gz</span></span>
<span class="line"><span>EPSON XP-610 Series, Epson Inkjet Printer Driver (ESC/P-R) for Linux</span></span>
<span class="line"><span>[ian@atticf27 ~]$ locate &quot;Epson-XP-610_Series-epson-escpr-en.ppd.gz&quot;</span></span>
<span class="line"><span>/usr/share/ppd/Epson/epson-inkjet-printer-escpr/Epson-XP-610_Series-epson-escpr-en.ppd.gz</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpinfo -v</span></span>
<span class="line"><span>network socket</span></span>
<span class="line"><span>network ipps</span></span>
<span class="line"><span>network lpd</span></span>
<span class="line"><span>network beh</span></span>
<span class="line"><span>network ipp</span></span>
<span class="line"><span>network http</span></span>
<span class="line"><span>network https</span></span>
<span class="line"><span>direct hp</span></span>
<span class="line"><span>serial serial:/dev/ttyS0?baud=115200</span></span>
<span class="line"><span>direct parallel:/dev/lp0</span></span>
<span class="line"><span>network smb</span></span>
<span class="line"><span>direct hpfax</span></span>
<span class="line"><span>network dnssd://Brother%20HL-2280DW._pdl-datastream._tcp.local/</span></span>
<span class="line"><span>network dnssd://EPSON%20XP-610%20Series._ipp._tcp.local/?uuid=cfe92100-67c4-11d4-a45f-ac18266c48aa</span></span>
<span class="line"><span>network lpd://BRN001BA98A1891/BINARY_P1</span></span>
<span class="line"><span>network lpd://192.168.1.38:515/PASSTHRU</span></span></code></pre></div><p><em>列表 14. 可用的打印機驅動程序</em></p><p>這個 Epson-XP-610_Series-epson-escpr-en.ppd.gz 驅動程序在我的系統上位於 <code>/usr/share/ppd/Epson/epson-inkjet-printer-escpr/</code> 目錄中。</p><p>如果你找不到驅動程序，你可以到打印機生產商的網站看看，説不定會有專用的驅動程序。例如，在寫這篇文章的時候，Brother 就有一個我的 HL-2280DW 打印機的驅動程序，但是，這個驅動程序在 OpenPrinting.org 上還沒有列出來。</p><p>如果你收集齊了基本信息，你可以如列表 15 所示的那樣，使用 <code>lpadmin</code> 命令去配置打印機。為此，我將為我的 HL-2280DW 打印機創建另外一個實例，以便於雙面打印。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ian@atticf27 ~]$ lpinfo -m | grep -i &quot;hl.*2280&quot;</span></span>
<span class="line"><span>HL2280DW.ppd Brother HL2280DW for CUPS</span></span>
<span class="line"><span>lsb/usr/HL2280DW.ppd Brother HL2280DW for CUPS</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpadmin -p HL-2280DW-duplex -E -m HL2280DW.ppd \\</span></span>
<span class="line"><span>&gt; -v dnssd://Brother%20HL-2280DW._pdl-datastream._tcp.local/ \\</span></span>
<span class="line"><span>&gt; -D &quot;Brother 1&quot; -o sides=two-sided-long-edge</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpstat -a</span></span>
<span class="line"><span>anyprint accepting requests since Mon 29 Jan 2018 01:17:09 PM EST</span></span>
<span class="line"><span>HL-2280DW accepting requests since Tue 30 Jan 2018 10:56:10 AM EST</span></span>
<span class="line"><span>HL-2280DW-duplex accepting requests since Wed 31 Jan 2018 11:41:16 AM EST</span></span>
<span class="line"><span>HXP-610 accepting requests since Mon 29 Jan 2018 10:34:49 PM EST</span></span></code></pre></div><p><em>列表 15. 配置一台打印機</em></p><p>你可以使用帶 <code>-c</code> 選項的 <code>lpadmin</code> 命令去創建一個僅用於雙面打印的新分類，而不用為了雙面打印去創建一個打印機的副本。</p><p>如果你需要刪除一台打印機，使用帶 <code>-x</code> 選項的 <code>lpadmin</code> 命令。</p><p>列表 16 展示瞭如何去刪除打印機和創建一個替代類。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ian@atticf27 ~]$ lpadmin -x HL-2280DW-duplex</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpadmin -p HL-2280DW -c duplex -E -D &quot;Duplex printing&quot; -o sides=two-sided-long-edge</span></span>
<span class="line"><span>[ian@atticf27 ~]$ cupsenable duplex</span></span>
<span class="line"><span>[ian@atticf27 ~]$ cupsaccept duplex</span></span>
<span class="line"><span>[ian@atticf27 ~]$ lpstat -a</span></span>
<span class="line"><span>anyprint accepting requests since Mon 29 Jan 2018 01:17:09 PM EST</span></span>
<span class="line"><span>duplex accepting requests since Wed 31 Jan 2018 12:12:05 PM EST</span></span>
<span class="line"><span>HL-2280DW accepting requests since Wed 31 Jan 2018 11:51:16 AM EST</span></span>
<span class="line"><span>XP-610 accepting requests since Mon 29 Jan 2018 10:34:49 PM EST</span></span></code></pre></div><p><em>列表 16. 刪除一個打印機和創建一個類</em></p><p>你也可以使用 <code>lpadmin</code> 或者 <code>lpoptions</code> 命令去設置各種打印機選項。詳細信息請查看 man 頁面。</p><h3 id="排錯" tabindex="-1">排錯 <a class="header-anchor" href="#排錯" aria-label="Permalink to “排錯”">​</a></h3><p>如果你有打印問題，嘗試下列的提示：</p><ul><li>確保 CUPS 服務器正在運行。你可以使用 <code>lpstat</code> 命令，如果它不能連接到 cupsd 守護程序，它將會報告一個錯誤。或者，你可以使用 <code>ps -ef</code> 命令在輸出中去檢查是否有 cupsd。</li><li>如果你試着排隊一個打印作業而得到一個錯誤信息，指示打印機不接受這個作業，你可以使用 <code>lpstat -a</code> 或者 <code>lpc status</code> 去檢查那個打印機是否接受作業。</li><li>如果一個隊列中的作業沒有打印，使用 <code>lpstat -p</code> 或 <code>lpc status</code> 去檢查那個打印機是否接受作業。如前面所討論的那樣，你可能需要將這個作業移動到其它的打印機。</li><li>如果這個打印機是遠程的，檢查它在遠程系統上是否存在，並且是可操作的。</li><li>檢查配置文件，確保特定的用户或者遠程系統允許在這個打印機上打印。</li><li>確保防火牆允許遠程打印請求，是否允許從其它系統到你的系統，或者從你的系統到其它系統的數據包通訊。</li><li>驗證是否有正確的驅動程序。</li></ul>`,22)),a("p",null,[s[22]||(s[22]=n("正如你所見，打印涉及到你的系統中的幾個組件，甚至還有網絡。在本教程中，基於篇幅的考慮，我們僅能給你的診斷提供了幾個着手點。大多數的 CUPS 系統也有實現我們所討論的命令列功能的圖形界面。一般情況下，這個界面是從本地主機使用瀏覽器指向 631 端口（",-1)),e(p,{href:"http://localhost:631"},{default:i(()=>[...s[20]||(s[20]=[n("http://localhost:631",-1)])]),_:1}),s[23]||(s[23]=n(" 或 ",-1)),e(p,{href:"http://127.0.0.1:631"},{default:i(()=>[...s[21]||(s[21]=[n("http://127.0.0.1:631",-1)])]),_:1}),s[24]||(s[24]=n("）來訪問的，如前面的圖 2 所示。",-1))]),s[63]||(s[63]=a("p",null,[n("你可以通過將 CUPS 運行在前台而不是做為一個守護進程來診斷它的問題。如果有需要，你也可以通過這種方式去測試替代的配置文件。運行 "),a("code",null,"cupsd -h"),n(" 獲得更多信息，或者查看 man 頁面。")],-1)),a("p",null,[s[26]||(s[26]=n("CUPS 也帶有一個訪問日誌和錯誤日誌。你可以在 ",-1)),s[27]||(s[27]=a("code",null,"cupsd.conf",-1)),s[28]||(s[28]=n(" 中使用 ",-1)),s[29]||(s[29]=a("code",null,"LogLevel",-1)),s[30]||(s[30]=n(" 語句來改變日誌級別。默認情況下，日誌是保存在 ",-1)),s[31]||(s[31]=a("code",null,"/var/log/cups",-1)),s[32]||(s[32]=n(" 目錄。它們可以在瀏覽器界面（",-1)),e(p,{href:"http://localhost:631"},{default:i(()=>[...s[25]||(s[25]=[n("http://localhost:631",-1)])]),_:1}),s[33]||(s[33]=n("）下，從 ",-1)),s[34]||(s[34]=a("strong",null,"Administration",-1)),s[35]||(s[35]=n(" 選項卡中查看。使用不帶任何選項的 ",-1)),s[36]||(s[36]=a("code",null,"cupsctl",-1)),s[37]||(s[37]=n(" 命令可以顯示日誌選項。也可以編輯 ",-1)),s[38]||(s[38]=a("code",null,"cupsd.conf",-1)),s[39]||(s[39]=n(" 或者使用 ",-1)),s[40]||(s[40]=a("code",null,"cupsctl",-1)),s[41]||(s[41]=n(" 去調整各種日誌參數。查看 ",-1)),s[42]||(s[42]=a("code",null,"cupsctl",-1)),s[43]||(s[43]=n(" 命令的 man 頁面瞭解更多信息。",-1))]),a("p",null,[s[45]||(s[45]=n("在 Ubuntu 的 Wiki 頁面上的 ",-1)),e(p,{href:"https://wiki.ubuntu.com/DebuggingPrintingProblems"},{default:i(()=>[...s[44]||(s[44]=[n("調試打印問題",-1)])]),_:1}),s[46]||(s[46]=n(" 頁面也是一個非常好的學習的地方。",-1))]),s[64]||(s[64]=a("p",null,"這就是關於打印和 CUPS 的介紹。",-1)),s[65]||(s[65]=a("hr",null,null,-1)),a("p",null,[s[48]||(s[48]=n("via: ",-1)),e(p,{href:"https://www.ibm.com/developerworks/library/l-lpic1-108-4/index.html"},{default:i(()=>[...s[47]||(s[47]=[n("https://www.ibm.com/developerworks/library/l-lpic1-108-4/index.html",-1)])]),_:1})]),a("p",null,[s[52]||(s[52]=n("作者：",-1)),e(p,{href:"https://www.ibm.com"},{default:i(()=>[...s[49]||(s[49]=[n("Ian Shields",-1)])]),_:1}),s[53]||(s[53]=n(" 譯者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:i(()=>[...s[50]||(s[50]=[n("qhwdw",-1)])]),_:1}),s[54]||(s[54]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[51]||(s[51]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[57]||(s[57]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[55]||(s[55]=[n("LCTT",-1)])]),_:1}),s[58]||(s[58]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[56]||(s[56]=[n("Linux中國",-1)])]),_:1}),s[59]||(s[59]=n(" 榮譽推出",-1))])])}const S=l(r,[["render",u]]);export{y as __pageData,S as default};
