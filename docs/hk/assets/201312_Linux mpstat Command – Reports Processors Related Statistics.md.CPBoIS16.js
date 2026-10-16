import{_ as o,a0 as i,w as p,s as l,ao as m,I as r,x as s,a1 as n,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"Linux mpstat 命令- 報告處理器的相關統計信息 | LCTT x X-CMD","titleTemplate":false,"description":"Linux mpstat 命令- 報告處理器的相關統計信息 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux mpstat 命令- 報告處理器的相關統計信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux mpstat 命令- 報告處理器的相關統計信息 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Linux mpstat Command – Reports Processors Related Statistics","title":"Linux mpstat 命令- 報告處理器的相關統計信息","tag":"201312","desc":""},"relativePath":"201312/Linux mpstat Command – Reports Processors Related Statistics.md","filePath":"[post].md"}'),d={name:"201312/Linux mpstat Command – Reports Processors Related Statistics.md"};function u(P,t,g,C,c,x){const a=i("Link");return p(),l("div",null,[t[11]||(t[11]=m(`<h1 id="linux-mpstat-命令-報告處理器的相關統計信息" tabindex="-1">Linux mpstat 命令- 報告處理器的相關統計信息 <a class="header-anchor" href="#linux-mpstat-命令-報告處理器的相關統計信息" aria-label="Permalink to “Linux mpstat 命令- 報告處理器的相關統計信息”">​</a></h1><p>現在的計算機一般都使用着多處理器或四核單處理器。在服務器端，更多的處理器或核心意味着更強的能力，但另一方面，應用程序也需要更高的能耗。你還可能遇到過這樣的場景：當你的cpu利用率很高時你卻感覺自己根本沒有運行任何程序。以上種種情況，在Linux系統上，你可以使用 <strong>mpstate</strong> 來監控這樣的活動。 <img src="http://linoxide.com/wp-content/uploads/2013/12/linux-mpstat-command.jpg" alt="linux mpstat command"></p><h3 id="什麼是mpstat" tabindex="-1">什麼是mpstat <a class="header-anchor" href="#什麼是mpstat" aria-label="Permalink to “什麼是mpstat”">​</a></h3><p><strong>mpstat</strong> 用於監控你的系統上cpu的利用率。如果你的系統有多個處理器，它會發揮更大的作用。 第一個處理器會被標記為CPU 0。第二個會被標記為CPU 2，以此類推。在操作手冊中，如下描述mpstat：</p><blockquote><p>mpstat命令把每個可用的處理器的狀態寫到標準輸出，默認第一個處理器為processor 0。所有處理器的全局平均狀態也會以報告形式給出。mpstat命令可以用於SMP和UP的機器上，但是在UP機器上，只有全局平均狀態會被打印出來。如果沒有選擇具體行為，默認將報告CPU的利用率</p></blockquote><h3 id="如何運行mpstat" tabindex="-1">如何運行mpstat <a class="header-anchor" href="#如何運行mpstat" aria-label="Permalink to “如何運行mpstat”">​</a></h3><p>只需在你的終端輸入 <strong>mpstat</strong> 就可以運行mpstat.</p><pre><code>$ mpstat

Linux 3.2.0-57-generic (USERNB01) 12/12/2013 _x86_64_ (2 CPU)

03:29:29 PM CPU %usr %nice %sys %iowait %irq %soft %steal %guest %idle
03:29:29 PM all 6.30 0.06 1.94 3.75 0.00 0.06 0.00 0.00 87.88
</code></pre><p>如果你發現譬如 <strong>命令找不到</strong>或者類似的錯誤，説明你可能沒有安裝mpstat。</p><p>如果你使用的是 <strong>CentOS, RedHat or Fedora</strong>，運行下列命令來安裝mpstat</p><pre><code># yum install sysstat
</code></pre><p>如果你使用的是 <strong>Debian, Ubuntu or 它的衍生版</strong>， 運行下列命令來安裝mpstat</p><pre><code># apt-get install sysstat
</code></pre><p>下面是如何理解上面顯示出來的信息。</p><ul><li><strong>03:29:29 PM</strong> : 指mpstat運行的時間</li><li><strong>all</strong> : 指所有CPU</li><li><strong>%usr</strong> : 顯示在用户級別（例如應用程序）執行時CPU利用率的百分比</li><li><strong>%nice</strong> :顯示在擁有nice優先級的用户級別執行時CPU利用率的百分比</li><li><strong>%sys</strong> : 現實在系統級別（例如內核）執行時CPU利用率的百分比</li><li><strong>%iowait</strong> : 顯示在系統有未完成的磁盤I/O請求期間CPU空閒時間的百分比</li><li><strong>%irq</strong> : 顯示CPU服務硬件中斷所花費時間的百分比</li><li><strong>%soft</strong> : 顯示CPU服務軟件中斷所花費時間的百分比</li><li><strong>%steal</strong> : 顯示虛擬機管理器在服務另一個虛擬處理器時虛擬CPU處在非自願等待下花費時間的百分比</li><li><strong>%guest</strong> : 顯示運行虛擬處理器時CPU花費時間的百分比</li><li><strong>%idle</strong> : 顯示CPU空閒和系統沒有未完成的磁盤I/O請求情況下的時間百分比</li></ul><h3 id="打印每個處理器的cpu利用率" tabindex="-1">打印每個處理器的CPU利用率 <a class="header-anchor" href="#打印每個處理器的cpu利用率" aria-label="Permalink to “打印每個處理器的CPU利用率”">​</a></h3><p>正如上面的命令結果所示，我們的系統有兩個CPU。如果你願意，你可以使用參數 -P 然後緊跟CPU編號得到指定CPU的利用率。</p><pre><code>$ mpstat -P 0

Linux 3.2.0-57-generic (USERNB01) 12/12/2013 _x86_64_ (2 CPU)

03:54:00 PM CPU %usr %nice %sys %iowait %irq %soft %steal %guest %idle
03:54:00 PM 0 3.82 0.01 1.16 3.88 0.00 0.06 0.00 0.00 91.06

$ mpstat -P 1
Linux 3.2.0-57-generic (USERNB01) 12/12/2013 _x86_64_ (2 CPU)

03:53:58 PM CPU %usr %nice %sys %iowait %irq %soft %steal %guest %idle
03:53:58 PM 1 16.52 0.20 4.48 0.46 0.00 0.04 0.00 0.00 78.30
</code></pre><h3 id="打印所有cpu的利用率" tabindex="-1">打印所有CPU的利用率 <a class="header-anchor" href="#打印所有cpu的利用率" aria-label="Permalink to “打印所有CPU的利用率”">​</a></h3><p>你也可以在一頁裏打印每個處理器的CPU利用率，只需使用 <strong>-P ALL</strong> 參數來指定。</p><pre><code>$ mpstat -P ALL

Linux 3.2.0-57-generic (USERNB01) 12/12/2013 _x86_64_ (2 CPU)

04:07:36 PM CPU %usr %nice %sys %iowait %irq %soft %steal %guest %idle
04:07:36 PM all 6.02 0.04 1.72 2.99 0.00 0.05 0.00 0.00 89.17
04:07:36 PM 0 3.84 0.01 1.15 3.72 0.00 0.06 0.00 0.00 91.21
04:07:36 PM 1 13.55 0.15 3.66 0.46 0.00 0.03 0.00 0.00 82.15
</code></pre><h3 id="使用時間間隔打印cpu利用率" tabindex="-1">使用時間間隔打印CPU利用率 <a class="header-anchor" href="#使用時間間隔打印cpu利用率" aria-label="Permalink to “使用時間間隔打印CPU利用率”">​</a></h3><p>如果你想觀察CPU的利用率變化，你可以使用時間間隔，下面是一個例子。</p><pre><code>$ mpstat 3 4

Linux 3.2.0-57-generic (USERNB01) 12/12/2013 _x86_64_ (2 CPU)

04:27:11 PM CPU %usr %nice %sys %iowait %irq %soft %steal %guest %idle
04:27:14 PM all 0.67 0.00 0.34 0.00 0.00 0.00 0.00 0.00 98.99
04:27:17 PM all 1.17 0.00 0.33 1.33 0.00 0.00 0.00 0.00 97.17
04:27:20 PM all 0.84 0.00 0.17 0.00 0.00 0.00 0.00 0.00 98.99
04:27:23 PM all 1.00 0.00 0.17 1.51 0.00 0.00 0.00 0.00 97.32
Average: all 0.92 0.00 0.25 0.71 0.00 0.00 0.00 0.00 98.12
</code></pre><p>上面的命令會<strong>每隔3秒</strong>顯示CPU利用的<strong>4個報告</strong>。</p><h3 id="打印mpstat的版本" tabindex="-1">打印mpstat的版本 <a class="header-anchor" href="#打印mpstat的版本" aria-label="Permalink to “打印mpstat的版本”">​</a></h3><p>最後，為了打印mpstat的版本，使用參數 -V</p><pre><code>$ mpstat -V

sysstat version 10.0.3
(C) Sebastien Godard (sysstat orange.
</code></pre><p>這就是在linux系統上快速使用mpstat的方法。想要了解更多細節，可以輸入 <strong>man mpstat</strong>來查看mpstat的手冊。</p><hr>`,30)),r("p",null,[t[1]||(t[1]=s("via: ",-1)),n(a,{href:"http://linoxide.com/linux-command/linux-mpstat-command/"},{default:e(()=>[...t[0]||(t[0]=[s("http://linoxide.com/linux-command/linux-mpstat-command/",-1)])]),_:1})]),r("p",null,[t[4]||(t[4]=s("譯者：",-1)),n(a,{href:"https://github.com/KayGuoWhu"},{default:e(()=>[...t[2]||(t[2]=[s("KayGuoWhu",-1)])]),_:1}),t[5]||(t[5]=s(" 校對：",-1)),n(a,{href:"https://github.com/tinyeyeser"},{default:e(()=>[...t[3]||(t[3]=[s("Mr小眼兒",-1)])]),_:1})]),r("p",null,[t[8]||(t[8]=s("本文由 ",-1)),n(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...t[6]||(t[6]=[s("LCTT",-1)])]),_:1}),t[9]||(t[9]=s(" 原創翻譯，",-1)),n(a,{href:"http://linux.cn/"},{default:e(()=>[...t[7]||(t[7]=[s("Linux中國",-1)])]),_:1}),t[10]||(t[10]=s(" 榮譽推出",-1))])])}const L=o(d,[["render",u]]);export{f as __pageData,L as default};
