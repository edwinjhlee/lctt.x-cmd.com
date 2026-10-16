import{_ as o,a0 as p,w as a,s as d,ao as g,I as r,x as t,a1 as s,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"Linux 內核測試和調試（5） | LCTT x X-CMD","titleTemplate":false,"description":"Linux 內核測試和調試（5） | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 內核測試和調試（5） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 內核測試和調試（5） | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140718 Linux Kernel Testing and Debugging 5","title":"Linux 內核測試和調試（5）","tag":"201408","desc":""},"relativePath":"201408/20140718 Linux Kernel Testing and Debugging 5.md","filePath":"[post].md"}'),c={name:"201408/20140718 Linux Kernel Testing and Debugging 5.md"};function l(u,e,m,b,x,f){const i=p("Link");return a(),d("div",null,[e[11]||(e[11]=g(`<h1 id="linux-內核測試和調試-5" tabindex="-1">Linux 內核測試和調試（5） <a class="header-anchor" href="#linux-內核測試和調試-5" aria-label="Permalink to “Linux 內核測試和調試（5）”">​</a></h1><h3 id="仿真環境下進行-linux-電源管理子系統測試" tabindex="-1">仿真環境下進行 Linux 電源管理子系統測試 <a class="header-anchor" href="#仿真環境下進行-linux-電源管理子系統測試" aria-label="Permalink to “仿真環境下進行 Linux 電源管理子系統測試”">​</a></h3><p>Linux 電源管理子系統在仿真環境下提供5種測試方式。這些方式僅僅在內核各層之間運行休眠的代碼而不是真正的讓系統進入休眠狀態。有些平台不能掛起系統，比如説我們需要模擬飛機的飛行環境，這時候使用這種仿真環境就非常有用處了。</p><p>freezer - 測試停掉處理器：</p><pre><code>echo freezer &gt; /sys/power/pm_test
echo platform &gt; /sys/power/disk
echo disk &gt; /sys/power/state
</code></pre><p>devices - 測試停掉處理器以及掛起設備：</p><pre><code>echo devices &gt; /sys/power/pm_test
echo platform &gt; /sys/power/disk
echo disk &gt; /sys/power/state
</code></pre><p>platform - 測試停掉處理器、掛起設備以及平台全局控制方法(*)</p><pre><code>echo platform &gt; /sys/power/pm_test
echo platform &gt; /sys/power/disk
echo disk &gt; /sys/power/state
</code></pre><p>processors - 測試停掉處理器、掛起設備和平台全局控制方法(*)，以及關閉未啓動的 CPU。</p><pre><code>echo processors &gt; /sys/power/pm_test
echo platform &gt; /sys/power/disk
echo disk &gt; /sys/power/state
</code></pre><p>core - 測試停掉處理器、掛起設備和平台全局控制方法(*)，關閉未啓動的 CPU，以及掛起平台或系統的設備。注意：這個測試模式運行在 ACPI 系統。</p><pre><code>echo core &gt; /sys/power/pm_test
echo platform &gt; /sys/power/disk
echo disk &gt; /sys/power/state
</code></pre><h3 id="linux-電源管理子系統追蹤事件" tabindex="-1">Linux 電源管理子系統追蹤事件 <a class="header-anchor" href="#linux-電源管理子系統追蹤事件" aria-label="Permalink to “Linux 電源管理子系統追蹤事件”">​</a></h3><p>電源管理子系統在運行過程中支持多種追蹤點和追蹤事件。我將對如何使用這些追蹤時間以及如何找到追蹤信息作一個簡單的介紹：</p><p>在運行時開啓電源管理事件：</p><pre><code>cd /sys/kernel/debug/tracing/events/power
echo 1 &gt; cpu_frequency/enable
cat /sys/kernel/debug/tracing/set_event
less /sys/kernel/debug/tracing/trace
</code></pre><p>為內核啓動的命令添加一個參數：</p><pre><code>trace_event=cpu_frequency
</code></pre><p>更多信息查看 Documentation/power/basic-pm-debugging.txt 以及同目錄下其他的文檔。</p><h3 id="git-bisect-命令" tabindex="-1">git bisect 命令 <a class="header-anchor" href="#git-bisect-命令" aria-label="Permalink to “git bisect 命令”">​</a></h3><p>git bisect 是一個非常有用非常強大的工具，用於將 git 上的一個 commit 分離出來。我簡單過一遍它的用法。</p><p>下面是 git bisect 的用法：</p><pre><code>git bisect start
git bisect bad	 # 當前版本是壞的
git bisect good v3.14-rc6	# 上個版本是好的
</code></pre><p>一旦指定好好的版本和壞的版本，git bisect 就會開始把好壞兩個版本之間的所有 commit 對半分，並將其中的一半提交 pull 下來。然後重新編譯安裝測試內核，並標記這個內核是好是壞。重複這個過程，知道某個你選好的 commit 被標記被好或者壞。我們可能需要測試多個內核版本，測到最後一個版本時，git bisect 會將一個 commit 標記為壞。下面的命令可以在 git bisect 分析過程中起到幫助作用：</p><p>查看 bisect 操作的過程：</p><pre><code>git bisect log
</code></pre><p>重置 git bisect，標記錯誤時可以用到，保存 git log 的輸出，重新操作上一次 bisect 的步驟：</p><pre><code>git bisect reset
</code></pre><p>重放 git bisect 操作過程：</p><pre><code>git bisect replay git_log_output
</code></pre><p>如果一個問題很清楚是在某個區域內，git bisect 命令可以定位到一個具體的內核源碼樹枝幹上。舉個例子，在調試一個鐳龍顯卡驅動的問題時，為 git bisect 指定 drivers/drm/radeon 參數，可以讓 git bisect 只檢索對 drivers/drm/radeon 裏面的文件有修改的 commit。</p><p>讓 git bisect 只檢索內核樹的某個枝幹：</p><pre><code>git bisect start drivers/drm/radeon
</code></pre><hr>`,35)),r("p",null,[e[1]||(e[1]=t("via: ",-1)),s(i,{href:"http://www.linuxjournal.com/content/linux-kernel-testing-and-debugging?page=0,4"},{default:n(()=>[...e[0]||(e[0]=[t("http://www.linuxjournal.com/content/linux-kernel-testing-and-debugging?page=0,4",-1)])]),_:1})]),r("p",null,[e[4]||(e[4]=t("譯者：",-1)),s(i,{href:"https://github.com/bazz2"},{default:n(()=>[...e[2]||(e[2]=[t("bazz2",-1)])]),_:1}),e[5]||(e[5]=t(" 校對：",-1)),s(i,{href:"https://github.com/wxy"},{default:n(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[8]||(e[8]=t("本文由 ",-1)),s(i,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原創翻譯，",-1)),s(i,{href:"http://linux.cn/"},{default:n(()=>[...e[7]||(e[7]=[t("Linux中國",-1)])]),_:1}),e[10]||(e[10]=t(" 榮譽推出",-1))])])}const L=o(c,[["render",l]]);export{T as __pageData,L as default};
