import{_ as l,a0 as i,w as s,s as a,ao as c,I as r,x as t,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"監控 Linux 容器性能的命令列神器 | LCTT x X-CMD","titleTemplate":false,"description":"監控 Linux 容器性能的命令列神器 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"監控 Linux 容器性能的命令列神器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"監控 Linux 容器性能的命令列神器 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150507 Command Line Tool to Monitor Linux Containers Performance","title":"監控 Linux 容器性能的命令列神器","tag":"201505","desc":""},"relativePath":"201505/20150507 Command Line Tool to Monitor Linux Containers Performance.md","filePath":"[post].md"}'),u={name:"201505/20150507 Command Line Tool to Monitor Linux Containers Performance.md"};function m(d,o,g,f,h,L){const n=i("Link");return s(),a("div",null,[o[16]||(o[16]=c(`<h1 id="監控-linux-容器性能的命令列神器" tabindex="-1">監控 Linux 容器性能的命令列神器 <a class="header-anchor" href="#監控-linux-容器性能的命令列神器" aria-label="Permalink to “監控 Linux 容器性能的命令列神器”">​</a></h1><p>ctop是一個新的基於命令列的工具，它可用於在容器層級監控進程。容器通過利用控制器組（cgroup）的資源管理功能，提供了操作系統層級的虛擬化環境。該工具從cgroup收集與內存、CPU、塊輸入輸出的相關數據，以及擁有者、開機時間等元數據，並以人性化的格式呈現給用户，這樣就可以快速對系統健康狀況進行評估。基於所獲得的數據，它可以嘗試推測下層的容器技術。ctop也有助於在低內存環境中檢測出誰在消耗大量的內存。</p><h3 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to “功能”">​</a></h3><p>ctop的一些功能如下：</p><ul><li>收集CPU、內存和塊輸入輸出的度量值</li><li>收集與擁有者、容器技術和任務統計相關的信息</li><li>通過任意欄對信息排序</li><li>以樹狀視圖顯示信息</li><li>摺疊/展開cgroup樹</li><li>選擇並跟蹤cgroup/容器</li><li>選擇顯示數據刷新的時間窗口</li><li>暫停刷新數據</li><li>檢測基於systemd、Docker和LXC的容器</li><li>基於Docker和LXC的容器的高級特性 <ul><li>打開/連接shell以進行深度診斷</li><li>停止/殺死容器類型</li></ul></li></ul><h3 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to “安裝”">​</a></h3><p><strong>ctop</strong>是由Python寫成的，因此，除了需要Python 2.6或其更高版本外（帶有內建的光標支持），別無其它外部依賴。推薦使用Python的pip進行安裝，如果還沒有安裝pip，請先安裝，然後使用pip安裝ctop。</p><p><em>注意：本文樣例來自Ubuntu（14.10）系統</em></p><pre><code>$ sudo apt-get install python-pip
</code></pre><p>使用pip安裝ctop：</p><pre><code>poornima@poornima-Lenovo:~$ sudo pip install ctop

[sudo] password for poornima:

Downloading/unpacking ctop

Downloading ctop-0.4.0.tar.gz

Running setup.py (path:/tmp/pip_build_root/ctop/setup.py) egg_info for package ctop

Installing collected packages: ctop

Running setup.py install for ctop

changing mode of build/scripts-2.7/ctop from 644 to 755

changing mode of /usr/local/bin/ctop to 755

Successfully installed ctop

Cleaning up...
</code></pre><p>如果不選擇使用pip安裝，你也可以使用wget直接從github安裝：</p><pre><code>poornima@poornima-Lenovo:~$ wget https://raw.githubusercontent.com/yadutaf/ctop/master/cgroup_top.py -O ctop

--2015-04-29 19:32:53-- https://raw.githubusercontent.com/yadutaf/ctop/master/cgroup_top.py

Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 199.27.78.133

Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|199.27.78.133|:443... connected.

HTTP request sent, awaiting response... 200 OK Length: 27314 (27K) [text/plain]

Saving to: ctop

100%[======================================&gt;] 27,314 --.-K/s in 0s

2015-04-29 19:32:59 (61.0 MB/s) - ctop saved [27314/27314]
</code></pre><hr><pre><code>poornima@poornima-Lenovo:~$ chmod +x ctop
</code></pre><p>如果cgroup-bin包沒有安裝，你可能會碰到一個錯誤消息，你可以通過安裝需要的包來解決。</p><pre><code>poornima@poornima-Lenovo:~$ ./ctop

[ERROR] Failed to locate cgroup mountpoints.

poornima@poornima-Lenovo:~$ sudo apt-get install cgroup-bin
</code></pre><p>下面是ctop的輸出樣例：</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/ctop.png" alt="ctop screen"></p><p><em>ctop屏幕</em></p><h3 id="用法選項" tabindex="-1">用法選項 <a class="header-anchor" href="#用法選項" aria-label="Permalink to “用法選項”">​</a></h3><pre><code>ctop [--tree] [--refresh=] [--columns=] [--sort-col=] [--follow=] [--fold=, ...] ctop (-h | --help)
</code></pre><p>當你進入ctop屏幕，可使用上（↑）和下（↓）箭頭鍵在容器間導航。點擊某個容器就選定了該容器，按q或Ctrl+C退出該容器。</p><p>現在，讓我們來看看上面列出的那一堆選項究竟是怎麼用的吧。</p><p><strong>-h / --help - 顯示幫助信息</strong></p><pre><code>poornima@poornima-Lenovo:~$ ctop -h
Usage: ctop [options]

Options:
-h, --help show this help message and exit
--tree show tree view by default
--refresh=REFRESH Refresh display every &lt;seconds&gt;
--follow=FOLLOW Follow cgroup path
--columns=COLUMNS List of optional columns to display. Always includes
&#39;name&#39;
--sort-col=SORT_COL Select column to sort by initially. Can be changed
dynamically.
</code></pre><p><strong>--tree - 顯示容器的樹形視圖</strong></p><p>默認情況下，會顯示列表視圖</p><p>當你進入ctop窗口，你可以使用F5按鈕在樹狀/列表視圖間切換。</p><p><strong><code>--fold=&lt;name&gt;</code> - 在樹形視圖中摺疊名為 <code>&lt;name&gt;</code> 的 cgroup 路徑</strong></p><p>該選項需要與 --tree 選項組合使用。</p><p>例子: ctop --tree --fold=/user.slice</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/ctop-fold.png" alt="Output of &#39;ctop --fold&#39;"></p><p><em>&#39;ctop --fold&#39;的輸出</em></p><p>在ctop窗口中，使用+/-鍵來展開或摺疊子cgroup。</p><p>注意：在寫本文時，pip倉庫中還沒有最新版的ctop，還不支持命令列的‘--fold’選項</p><p><strong>--follow= - 跟蹤/高亮 cgroup 路徑</strong></p><p>例子: ctop --follow=/user.slice/user-1000.slice</p><p>正如你在下面屏幕中所見到的那樣，帶有“/user.slice/user-1000.slice”路徑的cgroup被高亮顯示，這讓用户易於跟蹤，就算顯示位置變了也一樣。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/ctop-follow.png" alt="Output of &#39;ctop --follow&#39;"></p><p><em>&#39;ctop --follow&#39;的輸出</em></p><p>你也可以使用‘f’按鈕來讓高亮的行跟蹤選定的容器。默認情況下，跟蹤是關閉的。</p><p><strong>--refresh= - 按指定頻率刷新顯示，默認1秒</strong></p><p>這對於按每用户需求來顯示改變刷新率時很有用。使用‘p’按鈕可以暫停刷新並選擇文本。</p><p><strong><code>--columns=&lt;columns&gt;</code> - 限定只顯示選定的列。&#39;name&#39; 需要是第一個字段，其後跟着其它字段。默認情況下，字段包括：owner, processes,memory, cpu-sys, cpu-user, blkio, cpu-time</strong></p><p>例子: ctop --columns=name,owner,type,memory</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/ctop-column.png" alt="Output of &#39;ctop --column&#39;"></p><p><em>&#39;ctop --column&#39;的輸出</em></p><p><strong><code>-sort-col=&lt;sort-col&gt;</code> - 按指定的列排序。默認使用 cpu-user 排序</strong></p><p>例子: ctop --sort-col=blkio</p><p>如果有Docker和LXC支持的額外容器，跟蹤選項也是可用的：</p><pre><code>press &#39;a&#39; - 接駁到終端輸出

press &#39;e&#39; - 打開容器中的一個 shell

press &#39;s&#39; - 停止容器 (SIGTERM)

press &#39;k&#39; - 殺死容器 (SIGKILL)
</code></pre>`,52)),r("p",null,[o[1]||(o[1]=t("目前 Jean-Tiare Le Bigot 還在積極開發 ",-1)),p(n,{href:"https://github.com/yadutaf/ctop"},{default:e(()=>[...o[0]||(o[0]=[t("ctop",-1)])]),_:1}),o[2]||(o[2]=t(" 中，希望我們能在該工具中見到像本地 top 命令一樣的特性 😃",-1))]),o[17]||(o[17]=r("hr",null,null,-1)),r("p",null,[o[4]||(o[4]=t("via: ",-1)),p(n,{href:"http://linoxide.com/how-tos/monitor-linux-containers-performance/"},{default:e(()=>[...o[3]||(o[3]=[t("http://linoxide.com/how-tos/monitor-linux-containers-performance/",-1)])]),_:1})]),r("p",null,[o[8]||(o[8]=t("作者：",-1)),p(n,{href:"http://linoxide.com/author/bnpoornima/"},{default:e(()=>[...o[5]||(o[5]=[t("B N Poornima",-1)])]),_:1}),o[9]||(o[9]=t(" 譯者：",-1)),p(n,{href:"https://github.com/GOLinux"},{default:e(()=>[...o[6]||(o[6]=[t("GOLinux",-1)])]),_:1}),o[10]||(o[10]=t(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...o[7]||(o[7]=[t("wxy",-1)])]),_:1})]),r("p",null,[o[13]||(o[13]=t("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...o[11]||(o[11]=[t("LCTT",-1)])]),_:1}),o[14]||(o[14]=t(" 原創翻譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...o[12]||(o[12]=[t("Linux中國",-1)])]),_:1}),o[15]||(o[15]=t(" 榮譽推出",-1))])])}const b=l(u,[["render",m]]);export{C as __pageData,b as default};
