import{_ as t,a0 as o,w as d,s as c,ao as l,I as n,x as a,a1 as p,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"FreeDOS 基礎：從 A 到 Z | LCTT x X-CMD","titleTemplate":false,"description":"FreeDOS 基礎：從 A 到 Z | LCTT (202310) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"FreeDOS 基礎：從 A 到 Z | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"FreeDOS 基礎：從 A 到 Z | LCTT (202310) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202310/20220629 ABCs of FreeDOS- 26 commands I use all the time","title":"FreeDOS 基礎：從 A 到 Z","tag":"202310","desc":""},"relativePath":"202310/20220629 ABCs of FreeDOS- 26 commands I use all the time.md","filePath":"[post].md"}'),r={name:"202310/20220629 ABCs of FreeDOS- 26 commands I use all the time.md"};function h(g,s,b,u,k,m){const e=o("Link");return d(),c("div",null,[s[34]||(s[34]=l(`<h1 id="freedos-基礎-從-a-到-z" tabindex="-1">FreeDOS 基礎：從 A 到 Z <a class="header-anchor" href="#freedos-基礎-從-a-到-z" aria-label="Permalink to “FreeDOS 基礎：從 A 到 Z”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202310/12/102950rnookbm1124y54k1.jpg" alt=""></p><blockquote><p>我很高興分享我最喜歡的 26 個 FreeDOS 命令。</p></blockquote><p>我家最早的一批計算機中有一台運行着一款名稱為 DOS 的命令列操作系統，即 “<ruby>磁盤操作系統<rt>Disk Operating System</rt></ruby>”。我是在 DOS 系統環境中長大的，學會了利用命令列來使我的工作更輕鬆。很多其他的人也是如此。我們非常愛 DOS ，所以在 1994 年 6 月 29 日，我們創建了 FreeDOS 工程。</p><p>如果你的 FreeDOS 的初學者，你可能會對如何使用其附帶的不同的命令列程序感到困惑。讓我們從我最喜歡的 26 個 FreeDOS 命令開始吧。要學習更多的信息，在大部分命令的後面添加 <code>/?</code> 選項來獲取更多的信息:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;attrib /?</span></span>
<span class="line"><span>ATTRIB v2.1 - 顯示或更高文件屬性。</span></span>
<span class="line"><span>版權所有 (c) 1998-2003，遵循 GPL2 協議。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>語法：ATTRIB { options | [path][file] | /@[list] }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>選項：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  +H 設置隱藏屬性。     -H  清除隱藏屬性。</span></span>
<span class="line"><span>  +S 設置系統屬性。     -S  清除系統屬性。</span></span>
<span class="line"><span>  +R 設置只讀屬性。     -R  清除只讀屬性。</span></span>
<span class="line"><span>  +A 設置存檔屬性。     -A  清楚存檔屬性。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /S 處理具體指定路徑中的所有目錄中的文件。</span></span>
<span class="line"><span>  /D 處理帶有通配符的參數的目錄名稱。</span></span>
<span class="line"><span>  /@ 處理文件，文件列在具體指定文件 中 [或 stdin]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  attrib file -rhs</span></span>
<span class="line"><span>  attrib +a -r dir1 dir2*.dat /s</span></span>
<span class="line"><span>  attrib -hs/sd /@list.txt *.*</span></span></code></pre></div><h3 id="a-是-attrib" tabindex="-1">A 是 ATTRIB <a class="header-anchor" href="#a-是-attrib" aria-label="Permalink to “A 是 ATTRIB”">​</a></h3><p><code>ATTRIB</code> 程序顯示或更改文件的 <em>屬性</em> 。屬性可以是以下四個值之一：隱藏（<code>H</code>）、系統 <code>S</code>）、只讀（<code>R</code>）、存檔（<code>A</code>）。</p><p>標記為隱藏的文件將不會在目錄列表中顯示。例如，假設你想隱藏一個名稱為 <code>SECRET.TXT</code> 的文件，這樣就不會有人它在那裏。首先，你可以顯示該文件的屬性，以便查看它的當前設置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\FILES&gt;attrib secret.txt </span></span>
<span class="line"><span>[----A] SECRET.TXT</span></span></code></pre></div><p>為隱藏這個文件，使用加號（<code>+</code>）操作符來開啓用隱藏屬性，像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\FILES&gt;attrib +h secret.txt </span></span>
<span class="line"><span>[----A] -&gt; [-H--A] SECRET.TXT</span></span>
<span class="line"><span>C:\\FILES&gt;dir</span></span>
<span class="line"><span> Volume in drive C is FREEDOS2022</span></span>
<span class="line"><span> Volume Serial Number is 333D-0B18</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Directory of C:\\FILES</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.                   &lt;DIR&gt;  05-27-2022  9:22p</span></span>
<span class="line"><span>..                  &lt;DIR&gt;  05-27-2022  9:22p</span></span>
<span class="line"><span>         0 file(s)              0 bytes</span></span>
<span class="line"><span>         2 dir(s)     279,560,192 bytes free</span></span></code></pre></div><p><code>ATTRIB</code> 的另一種常見使用方法是操作只讀屬性，這樣你就不會意外地覆蓋重要的文件。假設你想要保護 <code>SECRET.TXT</code> 文件，這樣你就不能刪除或更改它。使用 <code>+R</code> 修飾符 ，打開只讀屬性，像這樣:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\FILES&gt;attrib +r secret.txt </span></span>
<span class="line"><span>[----A] -&gt; [---RA] SECRET.TXT</span></span>
<span class="line"><span>C:\\FILES&gt;del secret.txt</span></span>
<span class="line"><span>C:\\FILES\\SECRET.TXT: Permission denied</span></span>
<span class="line"><span>no file removed.</span></span></code></pre></div><h3 id="b-是-嗶嗶-聲" tabindex="-1">B 是“嗶嗶”聲 <a class="header-anchor" href="#b-是-嗶嗶-聲" aria-label="Permalink to “B 是“嗶嗶”聲”">​</a></h3><p>如果你需要在一個批處理文件中添加一些激情活力，你可以使用 <code>BEEP</code> 命令來獲取用户的注意力。<code>BEEP</code> 不會在屏幕上顯示任何內容，但是會簡單地發出一個 “嗶嗶” 的聲音信號。</p><p>注意：<code>BEEP</code> 使用個人計算機內置的揚聲器來發出 “嗶嗶” 聲。如果你使用一台虛擬機器來引導啓用 FreeDOS，檢查你的系統是否建立正確的模擬個人計算機揚聲器。否則，你將不會聽到任何聲音。</p><h3 id="c-是-cd" tabindex="-1">C 是 CD <a class="header-anchor" href="#c-是-cd" aria-label="Permalink to “C 是 CD”">​</a></h3><p>像 Linux 一樣，FreeDOS 支持目錄，這會允許你以一種來你有幫助的方式來組織你的文件。例如，你可以在一個名稱為 <code>FILES</code> 的目錄中存放你的全部文件，對於某些類型的文件，你可能會有其它的目錄，例如，針對字處理器文件的 <code>DOCS</code> ，或者針對表格文件的 <code>SPRDSHT</code>。</p><p>你可以使用 <code>CD</code>（即 “<ruby>更改目錄<rt>change directory</rt></ruby>”） 命令來導航到一個目錄。<code>CHDIR</code> 命令和 <code>CD</code> 命令一樣，如果你更喜歡使用這種語法的話。</p><p>為更改到一個新的目錄，使用 <code>CD</code> 目錄和目標目錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;cd files</span></span>
<span class="line"><span>C:\\FILES&gt;cd sprdsht</span></span>
<span class="line"><span>C:\\FILES\\SPRDSHT&gt;dir</span></span>
<span class="line"><span>Volume in drive C is FREEDOS2022</span></span>
<span class="line"><span>Volume Serial Number is 333D-0B18</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Directory of C:\\FILES\\SPRDSHT</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>. &lt;DIR&gt; 05-27-2022 9:59p</span></span>
<span class="line"><span>.. &lt;DIR&gt; 05-27-2022 9:59p</span></span>
<span class="line"><span>FIB WKS 2,093 05-27-2022 10:07p</span></span>
<span class="line"><span>LAB1 WKS 2,087 05-27-2022 10:10p</span></span>
<span class="line"><span>MIS100 WKS 2,232 05-27-2022 10:05p</span></span>
<span class="line"><span>3 file(s) 6,412 bytes</span></span>
<span class="line"><span>2 dir(s) 279,527,424 bytes free</span></span></code></pre></div><p>你不必一次導航一層目錄。相反，你可以使用一個 <code>CD</code> 命令和提供完整的你想要更改到的目錄路徑:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;cd \\files\\sprdsht</span></span>
<span class="line"><span>C:\\FILES\\SPRDSHT&gt;dir</span></span>
<span class="line"><span>Volume in drive C is FREEDOS2022</span></span>
<span class="line"><span>Volume Serial Number is 333D-0B18</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Directory of C:\\FILES\\SPRDSHT</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>.  &lt;DIR&gt; 05-27-2022 9:59p</span></span>
<span class="line"><span>.. &lt;DIR&gt; 05-27-2022 9:59p</span></span>
<span class="line"><span>FIB WKS 2,093 05-27-2022 10:07p</span></span>
<span class="line"><span>LAB1 WKS 2,087 05-27-2022 10:10p</span></span>
<span class="line"><span>MIS100 WKS 2,232 05-27-2022 10:05p</span></span>
<span class="line"><span>3 file(s) 6,412 bytes</span></span>
<span class="line"><span>2 dir(s) 279,527,424 bytes free</span></span></code></pre></div><h3 id="d-是-deltree" tabindex="-1">D 是 DELTREE <a class="header-anchor" href="#d-是-deltree" aria-label="Permalink to “D 是 DELTREE”">​</a></h3><p>如果需要刪除一個單個文件，你可以使用 <code>DEL</code> 命令。為刪除一個空的目錄，你可以使用 <code>RMDIR</code> 或 <code>RD</code> 命令。但是，如果你想刪除一個有很多文件和子目錄的目錄?</p><p>一個包含有其它目錄的目錄稱為 <em>目錄樹</em> 。你可以使用 <code>DELTREE</code> 命令來刪除整個目錄樹。例如，為刪除你的 <code>FILES</code> 目錄，包括其中包含的所有的文件和目錄，輸入這個命令:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;deltree files</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [DEFAULT-BUILD v1.02g] of DELTREE.  The &quot;ROOT-SAFETY-CHECK&quot; is enabled.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Delete directory &quot;C:\\FILES&quot;</span></span>
<span class="line"><span>and all its subdirectories?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Y] [N] [Q], [ENTER] ?  Y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>==&gt; Deleting &quot;C:\\FILES&quot; ...</span></span></code></pre></div><p>你可以使用一個單一的 <code>DELTREE</code> 命令來輕鬆快捷地完成很多工作，因此，FreeDOS 的 <code>DELTREE</code> 提示會詢問你是否真的想要這樣做。謹慎地使用這個命令。</p><h3 id="e-是-edit" tabindex="-1">E 是 EDIT <a class="header-anchor" href="#e-是-edit" aria-label="Permalink to “E 是 EDIT”">​</a></h3><p>如果你需要在 FreeDOS 上編輯一個文本文件，<code>EDIT</code> 程序會讓你輕鬆快速地完成任務。例如，要開始編輯一個名稱為 <code>HELLO.TXT</code> 的文件，輸入 <code>EDIT HELLO.TXT</code> 。如果 <code>HELLO.TXT</code> 文件已經存在，<code>EDIT</code> 打開文件並開始編輯。如果 <code>HELLO.TXT</code> 尚未存在，那麼 <code>EDIT</code> 為你開啓一個新的文件。</p><p><img src="https://opensource.com/sites/default/files/2022-06/FREEDedit_0.png" alt="Image of edit"></p><p>FreeDOS 的 <code>EDIT</code> 使用了一種友好的界面，對大多數人來説應該很容易使用。使用菜單來訪問 <code>EDIT</code> 的各種特色功能，包括保存文件、打開一個新的文件、或者退出編輯器。為訪問菜單，在你的鍵盤上按下 <code>Alt</code> 按鍵，然後使用箭頭按鍵來避開和進入選擇的動作。</p><p><img src="https://opensource.com/sites/default/files/2022-06/Freededit-save.png" alt="Image of save menu"></p><h3 id="f-是-find" tabindex="-1">F 是 FIND <a class="header-anchor" href="#f-是-find" aria-label="Permalink to “F 是 FIND”">​</a></h3><p>如果你需要在一個文件中查找文本，<code>FIND</code> 命令可以完成這項工作。類似於在 Linux 上的 <code>fgrep</code> ，<code>FIND</code> 會打印一些包含一個字符串的行。例如，為檢查 <code>FDCONFIG.SYS</code> 文件中的 &quot;Menu Default&quot; 條目項，像這樣使用 <code>FIND</code> :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;find &quot;MENUDEFAULT&quot; fdconfig.sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---------------- FDCONFIG.SYS</span></span>
<span class="line"><span>MENUDEFAULT=2,5</span></span></code></pre></div><p>如果你不確定你想要查找的字符串是使用的大寫字母還是小寫字母，添加 <code>/I</code> 選項來忽略字母的大小寫情況:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;find /i &quot;menudefault&quot; fdconfig.sys</span></span>
<span class="line"><span>---------------- FDCONFIG.SYS</span></span>
<span class="line"><span>MENUDEFAULT=2,5</span></span></code></pre></div><h3 id="g-是-graphics" tabindex="-1">G 是 GRAPHICS <a class="header-anchor" href="#g-是-graphics" aria-label="Permalink to “G 是 GRAPHICS”">​</a></h3><p>如果你想要捕捉屏幕，你可以使用你鍵盤上的 <code>PrtScr</code>（<ruby>打印屏幕<rt>Print Screen</rt></ruby>）按鍵來直接將你顯示器上的文本打印到打印機上。不過，這隻對純文本來説有效。如果你要打印圖形屏幕，你需要加載 <code>GRAPHICS</code> 程序。</p><p><code>GRAPHICS</code> 支持不同的打印機類型，包括 HP 的 PCL 打印機、Epson 的點陣打印機，和兼容 PostScript 的打印機。例如，如果有一台連接到你的計算機的 HP 的激光打印機，你可以通過輸入這條命令來為這台打印機加載支持:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;graphics hpdefault</span></span>
<span class="line"><span>Running in MS GRAPHICS compatibility mode...</span></span>
<span class="line"><span>Using HPPCL type for type hpdefault</span></span>
<span class="line"><span>  If you think this is not correct, mail me (see help text).</span></span>
<span class="line"><span>Printing black as white and white as black</span></span>
<span class="line"><span>which internally uses /I of this GRAPHICS.</span></span>
<span class="line"><span>You can use the following command directly instead of</span></span>
<span class="line"><span>GRAPHICS [your options] in the future:</span></span>
<span class="line"><span>LH GRAPH-HP /I</span></span>
<span class="line"><span>Note that GRAPH-HP allows extra options:</span></span>
<span class="line"><span>  /E economy mode, /1 use LPT1, /2 use LPT2, /3 use LPT3,</span></span>
<span class="line"><span>  /R for random instead of ordered dither</span></span>
<span class="line"><span>  /C for 300dpi instead of 600dpi</span></span>
<span class="line"><span>Driver to make &#39;shift PrtScr&#39; key work</span></span>
<span class="line"><span>even in CGA, EGA, VGA, MCGA graphics</span></span>
<span class="line"><span>modes loaded, in HP PCL mode.</span></span></code></pre></div><h3 id="h-是-help" tabindex="-1">H 是 HELP <a class="header-anchor" href="#h-是-help" aria-label="Permalink to “H 是 HELP”">​</a></h3><p>如果你剛剛來到 FreeDOS 的世界，你可以通過輸入 <code>HELP</code> 來獲取如何使用不同命令的提示。這將帶來 FreeDOS 的幫助系統，包含所有命令的文檔:</p><p><img src="https://opensource.com/sites/default/files/2022-06/Freedhelp.system.png" alt="Image of FreeDos help system"></p><h3 id="i-是-if" tabindex="-1">I 是 IF <a class="header-anchor" href="#i-是-if" aria-label="Permalink to “I 是 IF”">​</a></h3><p>你可以使用 <code>IF</code> 語句來將條件語句添加到你的命令列或<em>批處理文件</em> 。<code>IF</code> 進行一次簡短的測試，然後執行一個單個命令。例如，如果存在某個文件，那麼打印結果 “It&#39;s there”，你可以輸入:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;if exist kernel.sys echo It&#39;s there</span></span>
<span class="line"><span>It&#39;s there</span></span></code></pre></div><p>如果你想要測試相反的東西，在測試內容前，使用 <code>NOT</code> 關鍵字。例如，如果兩個字符串的值不相同，那麼打印結果 “Not equal” ，輸入這條語句:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;if not &quot;a&quot;==&quot;b&quot; echo Not equal</span></span>
<span class="line"><span>Not equal</span></span></code></pre></div><h3 id="j-是-join" tabindex="-1">J 是 JOIN <a class="header-anchor" href="#j-是-join" aria-label="Permalink to “J 是 JOIN”">​</a></h3><p>早期的 DOS 版本是相當簡單的；DOS 的第一個版本甚至不支持目錄。為向這些較舊的程序提供向後兼容性，我們需要 <code>JOIN</code> 程序來作為一種巧妙的應變方法。<code>JOIN</code> 使用驅動器字母代替路徑，這樣，你可以將舊程序放入其自己的子目錄中，但是，使用一個單個驅動器字母來訪問它。</p><p>讓我們假設你有一個名稱為 <code>VC</code> 的舊應用程序，它不懂目錄。為保持 <code>VC</code> 的工作，你可以將它的路徑 <ruby>連接<rt>join</rt></ruby> 到一個驅動器字母。例如:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>JOIN V: D:\\VC</span></span></code></pre></div><p>FreeDOS 將 <code>JOIN</code> 實施為 <code>SWSUBST</code>，它也兼備類似 <code>SUBST</code> 命令的特色功能。為將 <code>D:\\VC</code> 路徑鏈接到到一個名稱為 <code>V:</code> 的驅動器字母，輸入:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;swsubst v: d:\\vc</span></span>
<span class="line"><span>C:\\&gt;dir v:</span></span>
<span class="line"><span>Volume in drive V is DATA</span></span>
<span class="line"><span>Volume Serial Number is 212C-1DF8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Directory of V:\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>. &lt;DIR&gt; 02-21-2022 10:35p</span></span>
<span class="line"><span>.. &lt;DIR&gt; 02-21-2022 10:35p</span></span>
<span class="line"><span>VC COM 27,520 07-14-2019 4:48p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 file(s) 27,520 bytes</span></span>
<span class="line"><span>2 dir(s) 48,306,176 bytes free</span></span></code></pre></div><h3 id="k-是-keyb" tabindex="-1">K 是 KEYB <a class="header-anchor" href="#k-是-keyb" aria-label="Permalink to “K 是 KEYB”">​</a></h3><p>DOS 默認採用美式英語鍵盤佈局。你的鍵盤是不同的，你可以使用 <code>KEYB</code> 命令來加載新的鍵盤語言佈局。例如，為為加載一種德語鍵盤佈局，輸入:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;keyb gr</span></span>
<span class="line"><span>FreeDOS KEYB 2.01 - (c) Aitor Santamaría Merino - GNU GPL 2.0</span></span>
<span class="line"><span>Keyboard layout : C:\\FREEDOS\\BIN\\KEYBOARD.SYS:GR [858] (3)</span></span></code></pre></div><h3 id="l-是-label" tabindex="-1">L 是 LABEL <a class="header-anchor" href="#l-是-label" aria-label="Permalink to “L 是 LABEL”">​</a></h3><p>FreeDOS 使用 <ruby>標籤<rt>label</rt></ruby> 來命名每個軟盤驅動器和硬盤驅動器。這些標籤提供了一種識別磁盤可能包含內容的方法。當你需要將文件存儲到單個不同的軟盤上時，<code>LABEL</code> 命令是非常有用的，你可以標記一個軟盤 “Data”，另一個軟盤為 “Games” 。</p><p>為分配一個新的標籤到一個驅動器。或者更改在一個驅動器上的現存標籤。像這樣使用標籤:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>D:\\&gt;label d: data</span></span>
<span class="line"><span>D:\\&gt;dir /w</span></span>
<span class="line"><span>Volume in drive D is DATA</span></span>
<span class="line"><span>Volume Serial Number is 212C-1DF8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Directory of D:\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[123] [ABILITY] [ASEASY] [GAMES2] [QUATTRO]</span></span>
<span class="line"><span>[SRC] [TEMP] [THE] [VC] [WORD]</span></span>
<span class="line"><span>[WS400] EDLIN16.EXE EDLIN32.EXE MYENV.BAT</span></span>
<span class="line"><span>3 file(s) 113,910 bytes</span></span>
<span class="line"><span>11 dir(s) 48,306,176 bytes free</span></span></code></pre></div><h3 id="m-是-mem" tabindex="-1">M 是 MEM <a class="header-anchor" href="#m-是-mem" aria-label="Permalink to “M 是 MEM”">​</a></h3><p>運行程序和加載驅動程序會佔用內存。可以查看你的系統有多少內存，以及有多少可用來運行 DOS 程序，使用 <code>MEM</code> 命令:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Memory Type Total Used Free</span></span>
<span class="line"><span>---------------- -------- -------- --------</span></span>
<span class="line"><span>Conventional 639K 11K 628K</span></span>
<span class="line"><span>Upper 104K 18K 86K</span></span>
<span class="line"><span>Reserved 281K 281K 0K</span></span>
<span class="line"><span>Extended (XMS) 15,224K 537K 14,687K</span></span>
<span class="line"><span>---------------- -------- -------- --------</span></span>
<span class="line"><span>Total memory 16,248K 847K 15,401K</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Total under 1 MB 743K 29K 714K</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Total Expanded (EMS) 8,576K (8,781,824 bytes)</span></span>
<span class="line"><span>Free Expanded (EMS) 8,192K (8,388,608 bytes)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Largest executable program size 628K (643,104 bytes)</span></span>
<span class="line"><span>Largest free upper memory block 84K ( 85,728 bytes)</span></span>
<span class="line"><span>FreeDOS is resident in the high memory area.</span></span></code></pre></div><h3 id="n-是-nansi" tabindex="-1">N 是 NANSI <a class="header-anchor" href="#n-是-nansi" aria-label="Permalink to “N 是 NANSI”">​</a></h3><p>如果你想添加一點顏色到 FreeDOS 命令列，你可以使用 ANSI 轉義序列。這些序列之所以叫“轉義”，是因為每個序列都以代碼 33（轉義字符 <code>ESC</code>）和一個由美國國家標準化協會（ANSI）定義的特殊字符序列為開頭。</p><p>FreeDOS 通過 <code>NANSI.SYS</code> 驅動程序來支持 ANSI 轉義序列。隨着 <code>NANSI</code> 的加載，你的 FreeDOS 控制台將解釋 ANSI 轉義序列，例如，設置文本顏色。</p><p><img src="https://opensource.com/sites/default/files/2022-06/FreeDnansi.png" alt="Image of Nansi"></p><h3 id="o-是-ozone" tabindex="-1">O 是 oZone <a class="header-anchor" href="#o-是-ozone" aria-label="Permalink to “O 是 oZone”">​</a></h3><p>FreeDOS 是一款命令列操作系統，但是一些人們更喜歡使用可備選的圖形化用户界面。這就是為什麼 FreeDOS 的 1.3 發行版包含一些圖形化桌面的原因。我喜歡的一款名稱為 oZone 的圖形化桌面，它提供一種時尚、現代化外觀的界面。</p><p><img src="https://opensource.com/sites/default/files/2022-06/FreeDozone.png" alt="Image of Ozone GUI"></p><p>注意，oZone 有一點煩人的錯誤，可能還需要一些來自外部開發者的關愛。如果你想讓 oZone 變得更好，可以下載源文件代碼做些貢獻。</p><h3 id="p-是-prompt" tabindex="-1">P 是 PROMPT <a class="header-anchor" href="#p-是-prompt" aria-label="Permalink to “P 是 PROMPT”">​</a></h3><p>標準的 FreeDOS 命令列提示符會告訴你：你所在文件系統中的位置。當你第一次啓動 FreeDOS 時，你的提示符看起來像 <code>C:\\&gt;</code>, 這意味着 <code>\\</code>（根）目錄在 <code>C:</code> 驅動器。<code>&gt;</code> 字符表示着你可以在那裏輸入命令。</p><p>在你的提示符中，如果你更喜歡不同的信息，使用 <code>PROMPT</code> 目錄來更改它。你可以使用一個帶有 <code>$</code> 的開頭的特殊代碼來顯示不同的信息，例如，<code>$D</code> 用於日期、<code>$T</code> 用於時間。例如，你可以使用 <code>$$</code> 指令來使你的 FreeDOS 命令列看起來像一個 Linux 提示符，來打印一個單個美元符號:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;prompt $$</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>輸入 <code>PROMPT /?</code> 來查看一份全部特殊代碼的列表。</p><h3 id="q-是-qbasic" tabindex="-1">Q 是 QBASIC <a class="header-anchor" href="#q-是-qbasic" aria-label="Permalink to “Q 是 QBASIC”">​</a></h3><p>FreeDOS 實際上沒有 QBASIC 。它是針對 MS-DOS 的專有 BASIC 語言環境。作為備選方案，我們提供一些開放源文件的編譯器，包括一些針對 BASIC 編程的編譯器。</p><p>FreeBASIC 編譯器可以編譯外來的大多數 QBASIC 程序。這裏有一個簡單的 “猜數” 示例:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dim number as integer</span></span>
<span class="line"><span>dim guess as integer</span></span>
<span class="line"><span>randomize timer</span></span>
<span class="line"><span>number = int( 10 * rnd() ) + 1</span></span>
<span class="line"><span>print &quot;Guess the number from 1 to 10:&quot;</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>input guess</span></span>
<span class="line"><span>if guess &lt; number then print &quot;Too low&quot;</span></span>
<span class="line"><span>if guess &gt; number then print &quot;Too high&quot;</span></span>
<span class="line"><span>loop while guess &lt;&gt; number</span></span>
<span class="line"><span>print &quot;That&#39;s right!&quot;</span></span></code></pre></div><p>使用 <code>FBC</code> 命令來編譯 FreeBASIC 程序:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\DEVEL\\FBC&gt;fbc guess.bas</span></span></code></pre></div><p>這裏是這個簡單遊戲的快速演示:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\DEVEL\\FBC&gt;guess</span></span>
<span class="line"><span>Guess the number from 1 to 10:</span></span>
<span class="line"><span>? 5</span></span>
<span class="line"><span>Too high</span></span>
<span class="line"><span>? 3</span></span>
<span class="line"><span>Too low</span></span>
<span class="line"><span>? 4</span></span>
<span class="line"><span>That&#39;s right!</span></span></code></pre></div><h3 id="r-是-rem" tabindex="-1">R 是 REM <a class="header-anchor" href="#r-是-rem" aria-label="Permalink to “R 是 REM”">​</a></h3><p>在編寫程序時，註釋是極好的；註釋幫助我們理解程序應該要做什麼。可以在批處理文件中使用 <code>REM</code> 來做同樣的事。在批處理文件中，在 <code>REM</code> 的後面的任何東西都將會被忽略。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>REM this is a comment</span></span></code></pre></div><h3 id="s-是-set" tabindex="-1">S 是 SET <a class="header-anchor" href="#s-是-set" aria-label="Permalink to “S 是 SET”">​</a></h3><p>FreeDOS 命令列使用一系列稱為 <ruby>環境變量<rt>environment variables</rt></ruby> 的變量，讓你來自定義你的系統。你可以使用 <code>SET</code> 命令來設置這些變量。例如。使用 <code>DIRCMD</code> 變量來控制 <code>DIR</code> 如何排列目錄列表。為設置 <code>DIRCMD</code> 變量，使用 <code>SET</code> 命令:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SET DIRCMD=/O:GNE</span></span></code></pre></div><p>這告訴 <code>DIR</code> 先按照目錄分組（<code>G</code>）來排序（<code>O</code>）輸出，然後再按照名稱（<code>N</code>）和擴展名（<code>E</code>）來排序結果。</p><h3 id="t-是-type" tabindex="-1">T 是 TYPE <a class="header-anchor" href="#t-是-type" aria-label="Permalink to “T 是 TYPE”">​</a></h3><p><code>TYPE</code> 命令是最常使用的 DOS 命令之一。<code>TYPE</code> 顯示一個文件的內容，類似於在 Linux 上的 <code>cat</code> 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\DEVEL&gt;type hello.c</span></span>
<span class="line"><span>#include </span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>puts(&quot;Hello world&quot;);</span></span>
<span class="line"><span>return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="u-是-unzip" tabindex="-1">U 是 UNZIP <a class="header-anchor" href="#u-是-unzip" aria-label="Permalink to “U 是 UNZIP”">​</a></h3><p>在 Linux 上，你可能更熟悉標準的 Unix 存檔命令: <code>tar</code>。在 FreeDOS 上也有一個 <code>tar</code> 版本（和其它大量的流行的存檔程序），但是，在 DOS 上的事實上的標準的存檔命令是 <code>ZIP</code> 和 <code>UNZIP</code> 。兩者都默認安裝在 FreeDOS 1.3 之中。</p><p>比如説，我有一些文件的一個 zip 存檔。如果我想提取整個 Zip 文件，我可以只使用 <code>UNZIP</code> 命令，並將 Zip 文件作為命令列的選項來提供。這將在我當前工作目錄中開始提取存檔文件。除非我正在恢復一些東西的先前版本，我通常不希望覆蓋我的當前文件。在這種情況下，我將提取存檔到一個新的目錄。你可以使用 <code>-d</code>（“<ruby>目標<rt>destination</rt></ruby>”）命令列選項來具體指定目標路徑：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>D:\\SRC&gt;unzip monkeys.zip -d monkeys.new</span></span>
<span class="line"><span>Warning: TZ environment variable not found, cannot use UTC times!!</span></span>
<span class="line"><span>Archive: monkeys.zip</span></span>
<span class="line"><span>creating: monkeys.new/monkeys/</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/banana.c</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/banana.obj</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/banana.exe</span></span>
<span class="line"><span>creating: monkeys.new/monkeys/putimg/</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/putimg/putimg.c</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/putimg/putimg.obj</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/putimg/putimg.exe</span></span></code></pre></div>`,102)),n("p",null,[s[1]||(s[1]=a("為學習更多關於 ",-1)),s[2]||(s[2]=n("code",null,"ZIP",-1)),s[3]||(s[3]=a(" 和 ",-1)),s[4]||(s[4]=n("code",null,"UNZIP",-1)),s[5]||(s[5]=a(" 命令的信息，可以閲讀 ",-1)),p(e,{href:"https://opensource.com/article/21/6/archive-files-freedos"},{default:i(()=>[...s[0]||(s[0]=[a("如何在 FreeDOS 上存檔文件",-1)])]),_:1}),s[6]||(s[6]=a("。",-1))]),s[35]||(s[35]=l(`<h3 id="v-是-ver" tabindex="-1">V 是 VER <a class="header-anchor" href="#v-是-ver" aria-label="Permalink to “V 是 VER”">​</a></h3><p>在 DOS 的古老歲月中，<code>VER</code> 命令會報告你正在運行的 DOS 發行版本，例如：“MS-DOS 5.0.D”。對於 FreeDOS，<code>VER</code> 命令將給予你額外的詳細信息，例如 FreeDOS Shell 的版本:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\DEVEL&gt;ver</span></span>
<span class="line"><span>FreeCom version 0.85a - WATCOMC - XMS_Swap [Jul 10 2021 19:28:06]</span></span></code></pre></div><p>如果你還想查看 FreeDOS 內核版本和 DOS 兼容性等級，添加 <code>/R</code> 選項:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\DEVEL&gt;ver /r</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FreeCom version 0.85a - WATCOMC - XMS_Swap [Jul 10 2021 19:28:06]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DOS version 7.10</span></span>
<span class="line"><span>FreeDOS kernel 2043 (build 2043 OEM:0xfd) [compiled May 14 2021]</span></span></code></pre></div><h3 id="w-是-which" tabindex="-1">W 是 WHICH <a class="header-anchor" href="#w-是-which" aria-label="Permalink to “W 是 WHICH”">​</a></h3><p>FreeDOS 命令列可以運行來自記錄在 <code>PATH</code> 變量中的不同的目錄列表的程序。你可以使用 <code>WHICH</code> 命令來準確地識別出程序的位置。只需要輸入 <code>WHICH</code> 加上你想要定位的程序名稱：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;which xcopy</span></span>
<span class="line"><span>xcopy C:\\FREEDOS\\BIN\\XCOPY.EXE</span></span></code></pre></div><h3 id="x-是-xcopy" tabindex="-1">X 是 XCOPY <a class="header-anchor" href="#x-是-xcopy" aria-label="Permalink to “X 是 XCOPY”">​</a></h3><p><code>COPY</code> 命令只能將文件從一個位置複製到另一個位置。如果你想擴大複製的範圍來包括一些目錄，使用 <code>XCOPY</code> 命令。我通常添加 <code>/E</code> 選項來包含所有的子目錄，包括空的子目錄，這樣，我可以複製整個目錄樹。這樣就可以有效地備份我正在工作的任意工程:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>D:\\SRC&gt;xcopy /e monkeys monkeys.bak</span></span>
<span class="line"><span>Does MONKEYS.BAK specify a file name</span></span>
<span class="line"><span>or directory name on the target (File/Directory)? d</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\PUTIMG\\PUTIMG.C</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\PUTIMG\\PUTIMG.OBJ</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\PUTIMG\\PUTIMG.EXE</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\BANANA.C</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\BANANA.OBJ</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\BANANA.EXE</span></span>
<span class="line"><span>6 file(s) copied</span></span></code></pre></div><h3 id="y-是-yellow" tabindex="-1">Y 是 Yellow <a class="header-anchor" href="#y-是-yellow" aria-label="Permalink to “Y 是 Yellow”">​</a></h3><p>這不是一個命令，而是關於 DOS 如何顯示顏色的有趣的百科知識。如果你仔細留心過 FreeDOS，你可能已經注意到，文本只能獲取有限的顏色範圍—— 十六種文本顏色、八種背景顏色。</p><p>IBM 的 5153 彩色顯示器，通過點亮不同亮度等級的微小的紅、綠、藍熒光點的方式創建 16 種文本顏色和 8 種背景顏色來為用户顯示顏色。早期的個人計算機只能以“標準強度”級別來顯示背景顏色；只有文本顏色可以使用明亮顏色。</p><p>如果你查看文本顏色，你有黑色、藍色、綠色、藍綠色、紅色、品紅色、橙色和白色。這些顏色的“明亮”版本有亮黑色（暗灰色）、亮藍色、亮綠色、亮藍綠色、亮紅色、亮品紅色、黃色和亮白色。橙色的“明亮”版本有實際上是黃色。沒有“亮橙色”。</p>`,15)),n("p",null,[s[8]||(s[8]=a("如果你想要學習更多關於文本顏色的信息，閲讀我們關於 ",-1)),p(e,{href:"https://opensource.com/article/21/6/freedos-sixteen-colors"},{default:i(()=>[...s[7]||(s[7]=[a("FreeDOS 為什麼有 16 種顏色",-1)])]),_:1}),s[9]||(s[9]=a(" 的文章。",-1))]),s[36]||(s[36]=l(`<h3 id="z-是-zip" tabindex="-1">Z 是 ZIP <a class="header-anchor" href="#z-是-zip" aria-label="Permalink to “Z 是 ZIP”">​</a></h3><p>你可以在 DOS 命令列中使用 <code>ZIP</code> 來創建文件和目錄的存檔。這是一種很便利的方法：可以備份你的工作，或者發佈一個 “軟件包” 來在未來的 FreeDOS 發行版中使用。例如，比如説，我想備份我的工程源文件代碼，其中包含這些源文件文件:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>D:\\SRC&gt;zip -9r monkeys.zip monkeys</span></span>
<span class="line"><span>zip warning: TZ environment variable not found, cannot use UTC times!!</span></span>
<span class="line"><span>adding: monkeys/ (stored 0%)</span></span>
<span class="line"><span>adding: monkeys/banana.c (deflated 66%)</span></span>
<span class="line"><span>adding: monkeys/banana.obj (deflated 26%)</span></span>
<span class="line"><span>adding: monkeys/banana.exe (deflated 34%)</span></span>
<span class="line"><span>adding: monkeys/putimg/ (stored 0%)</span></span>
<span class="line"><span>adding: monkeys/putimg/putimg.c (deflated 62%)</span></span>
<span class="line"><span>adding: monkeys/putimg/putimg.obj (deflated 29%)</span></span>
<span class="line"><span>adding: monkeys/putimg/putimg.exe (deflated 34%)</span></span></code></pre></div><p>ZIP 支持很多命令列選項來完成不同的工作，但是，我使用最多的命令列選項是： <code>-r</code> 用於遞歸處理目錄和子目錄、<code>-9</code> 用於提供儘可能大的壓縮比。<code>ZIP</code> 和 <code>UNZIP</code> 使用類 Unix 命令列，因此，你可以在短劃線後面合併選項: <code>-9r</code> 將在 Zip 文件中給予最大壓縮比和包括子目錄。</p>`,4)),n("p",null,[s[11]||(s[11]=a("關於如何使用 ",-1)),s[12]||(s[12]=n("code",null,"ZIP",-1)),s[13]||(s[13]=a(" 和 ",-1)),s[14]||(s[14]=n("code",null,"UNZIP",-1)),s[15]||(s[15]=a(" 命令的更多詳細信息，閲讀 ",-1)),p(e,{href:"https://opensource.com/article/21/6/archive-files-freedos"},{default:i(()=>[...s[10]||(s[10]=[a("如何在 FreeDOS 上存檔文件",-1)])]),_:1}),s[16]||(s[16]=a("。",-1))]),s[37]||(s[37]=n("h3",{id:"新的-freedos-指南",tabindex:"-1"},[a("新的 FreeDOS 指南 "),n("a",{class:"header-anchor",href:"#新的-freedos-指南","aria-label":"Permalink to “新的 FreeDOS 指南”"},"​")],-1)),s[38]||(s[38]=n("p",null,"準備好你的 FreeDOS 旅程的下一步了嗎?查看我們的新的電子書，現在開始嘗試我們的 FreeDOS !",-1)),n("blockquote",null,[n("p",null,[n("strong",null,[p(e,{href:"https://opensource.com/downloads/guide-using-freedos"},{default:i(()=>[...s[17]||(s[17]=[a("FreeDOS 使用指南",-1)])]),_:1})])])]),n("blockquote",null,[n("p",null,[n("strong",null,[p(e,{href:"https://opensource.com/downloads/advanced-freedos"},{default:i(()=>[...s[18]||(s[18]=[a("深入 FreeDOS 高級指南",-1)])]),_:1})])])]),s[39]||(s[39]=n("p",null,[n("em",null,"（題圖：MJ/0b21dcc8-4c8d-457b-9e0d-fbbe5dd08c60）")],-1)),s[40]||(s[40]=n("hr",null,null,-1)),n("p",null,[s[20]||(s[20]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/22/6/26-freedos-commands"},{default:i(()=>[...s[19]||(s[19]=[a("https://opensource.com/article/22/6/26-freedos-commands",-1)])]),_:1})]),n("p",null,[s[25]||(s[25]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/jim-hall"},{default:i(()=>[...s[21]||(s[21]=[a("Jim Hall",-1)])]),_:1}),s[26]||(s[26]=a(" 選題：",-1)),p(e,{href:"https://github.com/lkxed"},{default:i(()=>[...s[22]||(s[22]=[a("lkxed",-1)])]),_:1}),s[27]||(s[27]=a(" 譯者：",-1)),p(e,{href:"https://github.com/robsean"},{default:i(()=>[...s[23]||(s[23]=[a("robsean",-1)])]),_:1}),s[28]||(s[28]=a(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[24]||(s[24]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[31]||(s[31]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[29]||(s[29]=[a("LCTT",-1)])]),_:1}),s[32]||(s[32]=a(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[30]||(s[30]=[a("Linux中國",-1)])]),_:1}),s[33]||(s[33]=a(" 榮譽推出",-1))])])}const y=t(r,[["render",h]]);export{C as __pageData,y as default};
