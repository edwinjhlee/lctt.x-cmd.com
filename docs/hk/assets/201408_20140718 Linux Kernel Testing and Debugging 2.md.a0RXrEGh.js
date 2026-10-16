import{_ as a,a0 as p,w as o,s as d,ao as g,I as l,x as t,a1 as i,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"Linux 內核測試與調試（2） | LCTT x X-CMD","titleTemplate":false,"description":"Linux 內核測試與調試（2） | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 內核測試與調試（2） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 內核測試與調試（2） | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140718 Linux Kernel Testing and Debugging 2","title":"Linux 內核測試與調試（2）","tag":"201408","desc":""},"relativePath":"201408/20140718 Linux Kernel Testing and Debugging 2.md","filePath":"[post].md"}'),u={name:"201408/20140718 Linux Kernel Testing and Debugging 2.md"};function s(c,e,x,m,T,b){const n=p("Link");return o(),d("div",null,[e[11]||(e[11]=g(`<h1 id="linux-內核測試與調試-2" tabindex="-1">Linux 內核測試與調試（2） <a class="header-anchor" href="#linux-內核測試與調試-2" aria-label="Permalink to “Linux 內核測試與調試（2）”">​</a></h1><h3 id="編譯安裝穩定版內核" tabindex="-1">編譯安裝穩定版內核 <a class="header-anchor" href="#編譯安裝穩定版內核" aria-label="Permalink to “編譯安裝穩定版內核”">​</a></h3><p>如果你用 git 下載源碼，就執行以下命令：</p><pre><code>cd linux-stable

git checkout linux-3.x.y
</code></pre><p>如果是直接下載壓縮文件，用以下命令進入源碼目錄：</p><pre><code>cd linux-3.x.y
</code></pre><p>如果你想把內核安裝到自己的系統上，最安全的方法是使用你安裝好的發行版擁有的配置文件。你可以在 /boot 目錄找到當前發行版的內核配置文件：</p><pre><code>cp /boot/config-3.x.y-z-generic .config
</code></pre><p>運行下面的命令，可以在當前內核配置的基礎上修改一些小地方，然後產生新的內核配置文件。比如説新的內核比你的 Ubuntu 發行版自帶的內核多了些新功能，而你正好需要用到它們，這個時候你就要修改配置了。</p><pre><code>make oldconfig
</code></pre><p>完成配置後，就可以編譯了：</p><pre><code>make all
</code></pre><p>完成編譯後，安裝這個新的內核：</p><pre><code>sudo &quot;make modules_install install&quot;
</code></pre><p>上面的命令安裝新內核，並把新內核作為啓動項添加到 grub 文件（LCTT：就是你下次開機時會多出一個開機選項）。好了你可以重啓電腦，然後選擇新的內核啓動系統。等等！先別衝動，在重啓電腦之前，我們保存下編譯內核產生的日誌，用於比較和查找錯誤（如果有錯誤發生的話）：</p><pre><code>dmesg -t &gt; dmesg_current

dmesg -t -k &gt; dmesg_kernel

dmesg -t -l emerg &gt; dmesg_current_emerg

dmesg -t -l alert &gt; dmesg_current_alert

dmesg -t -l crit &gt; dmesg_current_alert

dmesg -t -l err &gt; dmesg_current_err

dmesg -t -l warn &gt; dmesg_current_warn
</code></pre><p>正常的話，dmesg 不會輸出 emerg, alert, crit 和 err 級別的信息。如果你不幸看到這些輸出了，説明內核或者你的硬件環境有問題。</p><p>再介紹一些重啓前的需要執行的操作。誰也不能保證新內核能夠正常啓動，所以請不要瀟灑地把老內核刪除，至少保留一個穩定可用的內核在系統上。修改一下 /etc/default/grub 文件：</p><p>使用 earlyprink=vga 作為內核啓動選項，把系統早期啓動的信息打印到顯示屏上：</p><pre><code>GRUB_CMDLINE_LINUX=&quot;earlyprink=vga&quot; 
</code></pre><p>將 GRUB_TIMEOUT 的值設置成10秒到15秒之間的值，保證在開機啓動的時候你有足夠的時間來選擇啓動哪個內核：</p><pre><code>取消對 GRUB_TIMEOUT 的註釋，並把它設置為10：GRUB_TIMEOUT=10
註釋掉 GRUB_HIDDEN_TIMEOUT 和 GRUB_HIDDEN_TIMEOUT_QUIET
</code></pre><p>運行 update-grub 命令，更新 /boot 目錄下的 grub 配置文件：</p><pre><code>sudo update-grub 
</code></pre><p>現在可以重啓系統了。新內核起來後，比較新老內核的 dmesg 信息，看看新的內核有沒有編譯錯誤。如果新內核啓動失敗，你需要通過老內核啓動系統，然後分析下為什麼失敗。</p><h3 id="跟上節奏-永不落後-編譯最新版內核" tabindex="-1">跟上節奏，永不落後（編譯最新版內核） <a class="header-anchor" href="#跟上節奏-永不落後-編譯最新版內核" aria-label="Permalink to “跟上節奏，永不落後（編譯最新版內核）”">​</a></h3><p>如果你想開上內核快車道，追求與時俱進，那就去下載 mainline 狀態的內核或 linux-next 狀態的內核（LCTT：讀者可進入 kernel.org 獲取代碼，linux 代碼被分為4種狀態：mainline, stable, longterm, linux-next）。安裝測試 mainline 狀態或 linux-next 狀態的內核，你就可以在正式發佈之前幫助內核找到並修復裏面的 bug。</p><p>mainline 狀態的內核源碼：</p><pre><code>git clone git://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git
</code></pre><p>linux-next 狀態的內核源碼：</p><pre><code>git clone git://git.kernel.org/pub/scm/linux/kernel/git/next/linux-next.git
</code></pre><p>編譯安裝這兩種內核的步驟與編譯安裝穩定版內核一樣。按之前講過的步驟來就行了。</p><h3 id="打補丁" tabindex="-1">打補丁 <a class="header-anchor" href="#打補丁" aria-label="Permalink to “打補丁”">​</a></h3><p>Linux 內核的補丁是一個文本文件，包含新源碼與老源碼之間的差異。每個補丁只包含自己所依賴的源碼的改動，除非它被特意包含進一系列補丁之中。打補丁方法如下：</p><pre><code>patch -p1 &lt; file.patch

git apply --index file.patch 
</code></pre><p>兩種方法都可以打補丁。但是，如果你要打的補丁包含一個新文件，git 命令不能識別這個新增的文件，也就是説這個新文件在 git 裏面屬於 untracked 文件（LCTT：玩 git 的人對這個會比較熟悉，就是文件處於未被跟蹤的狀態，你需要使用 <code>git add &lt;file&gt;</code> 命令將文件放入暫存區）。git diff 命令不會將這個文件的增量顯示出來，並且 git status 命令會顯示這個文件處於 untracked 狀態。</p><p>大多數情況下，有個沒被跟蹤的文件，對於編譯安裝內核來説沒什麼問題，但是 git 操作就會出現一些問題了： git reset --hard 命令不會刪除這個新加的文件，並且接下來的 git pull 操作也會失敗。你有多種選擇來避免上面所説的狀況：</p><p>選項1，不跟蹤這個新文件：</p><blockquote><p>如果打補丁後新添加了文件，在 git reset --hard 前使用 git clean 命令來刪除沒有被跟蹤的文件。舉個例子，git clean -dfx 命令會強制刪除未被跟蹤的目錄和文件，忽略在 .gitigniore 文件內規定的文件。如果你不在乎哪些文件會被刪除，你可以使用 -q 選項讓 git clean 命令進入安靜模式，不輸出任何處理過程。</p></blockquote><p>選項2，跟蹤新文件：</p><blockquote><p>你可以在使用 git apply --index file.patch 命令後讓 git 跟蹤打完補丁後新產生的文件（LCTT：使用 <code>git add &lt;new file&gt;</code> 命令），就是讓 git 把文件放入 index 區域。做完這個後，git diff 命令會將新文件的增量打印出來，git status 也會顯示者這是一個正常的新增文件。</p></blockquote><hr>`,42)),l("p",null,[e[1]||(e[1]=t("via: ",-1)),i(n,{href:"http://www.linuxjournal.com/content/linux-kernel-testing-and-debugging?page=0,1"},{default:r(()=>[...e[0]||(e[0]=[t("http://www.linuxjournal.com/content/linux-kernel-testing-and-debugging?page=0,1",-1)])]),_:1})]),l("p",null,[e[4]||(e[4]=t("譯者：",-1)),i(n,{href:"https://github.com/bazz2"},{default:r(()=>[...e[2]||(e[2]=[t("bazz2",-1)])]),_:1}),e[5]||(e[5]=t(" 校對：",-1)),i(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),l("p",null,[e[8]||(e[8]=t("本文由 ",-1)),i(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原創翻譯，",-1)),i(n,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[t("Linux中國",-1)])]),_:1}),e[10]||(e[10]=t(" 榮譽推出",-1))])])}const L=a(u,[["render",s]]);export{k as __pageData,L as default};
