import{_ as s,a0 as f,w as d,s as i,ao as l,I as o,x as r,a1 as a,A as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"檢測 Linux 內存使用情況的 free 命令的10個例子 | LCTT x X-CMD","titleTemplate":false,"description":"檢測 Linux 內存使用情況的 free 命令的10個例子 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"檢測 Linux 內存使用情況的 free 命令的10個例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"檢測 Linux 內存使用情況的 free 命令的10個例子 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141205 10 free Commands to Check Memory Usage in Linux","title":"檢測 Linux 內存使用情況的 free 命令的10個例子","tag":"201501","desc":""},"relativePath":"201501/20141205 10 free Commands to Check Memory Usage in Linux.md","filePath":"[post].md"}'),p={name:"201501/20141205 10 free Commands to Check Memory Usage in Linux.md"};function h(m,e,u,c,g,x){const n=f("Link");return d(),i("div",null,[e[13]||(e[13]=l(`<h1 id="檢測-linux-內存使用情況的-free-命令的10個例子" tabindex="-1">檢測 Linux 內存使用情況的 free 命令的10個例子 <a class="header-anchor" href="#檢測-linux-內存使用情況的-free-命令的10個例子" aria-label="Permalink to “檢測 Linux 內存使用情況的 free 命令的10個例子”">​</a></h1><p><strong>Linux</strong>是最有名的開源操作系統之一，它擁有着極其巨大的命令集。確定<strong>物理內存</strong>和<strong>交換內存</strong>所有可用空間的最重要、也是唯一的方法是使用“<strong>free</strong>”命令。</p><p>Linux “<strong>free</strong>”命令可以給出類<strong>Linux/Unix</strong>操作系統中<strong>物理內存</strong>和<strong>交換內存</strong>的總使用量、可用量及內核使用的<strong>緩衝區</strong>情況。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2012/09/Linux-Free-commands.png" alt="10 Linux Free Command Examples"></p><p>這篇文章提供一些各種參數選項的“<strong>free</strong>”命令，這些命令對於你更好地利用你的內存會有幫助。</p><h3 id="_1-顯示你的系統內存" tabindex="-1">1. 顯示你的系統內存 <a class="header-anchor" href="#_1-顯示你的系統內存" aria-label="Permalink to “1. 顯示你的系統內存”">​</a></h3><p>free命令用於檢測<strong>物理內存</strong>和<strong>交換內存</strong>已使用量和可用量（默認單位為<strong>KB</strong>）。下面演示命令的使用情況。</p><pre><code># free

             total       used       free     shared    buffers     cached
Mem:       1021628     912548     109080          0     120368     655548
-/+ buffers/cache:     136632     884996
Swap:      4194296          0    4194296
</code></pre><h3 id="_2-以字節為單位顯示內存" tabindex="-1">2. 以字節為單位顯示內存 <a class="header-anchor" href="#_2-以字節為單位顯示內存" aria-label="Permalink to “2. 以字節為單位顯示內存”">​</a></h3><p>加上<strong>-b</strong>參數的free命令，以<strong>字節</strong>為單位顯示內存的大小。</p><pre><code># free -b

             total       used       free     shared    buffers     cached
Mem:    1046147072  934420480  111726592          0  123256832  671281152
-/+ buffers/cache:  139882496  906264576
Swap:   4294959104          0 4294959104
</code></pre><h3 id="_3-以千字節為單位顯示內存" tabindex="-1">3. 以千字節為單位顯示內存 <a class="header-anchor" href="#_3-以千字節為單位顯示內存" aria-label="Permalink to “3. 以千字節為單位顯示內存”">​</a></h3><p>加上<strong>-k</strong>參數的free命令（默認單位，所以可以不用使用它），以(KB)<strong>千字節</strong>為單位顯示內存大小。</p><pre><code># free -k

             total       used       free     shared    buffers     cached
Mem:       1021628     912520     109108          0     120368     655548
-/+ buffers/cache:     136604     885024
Swap:      4194296          0    4194296
</code></pre><h3 id="_4-以兆字節為單位顯示內存" tabindex="-1">4. 以兆字節為單位顯示內存 <a class="header-anchor" href="#_4-以兆字節為單位顯示內存" aria-label="Permalink to “4. 以兆字節為單位顯示內存”">​</a></h3><p>想以<strong>(兆字節)</strong>顯示內存大小，使用<strong>-m</strong>參數。</p><pre><code># free -m

             total       used       free     shared    buffers     cached
Mem:           997        891        106          0        117        640
-/+ buffers/cache:        133        864
Swap:         4095          0       4095
</code></pre><h3 id="_5-以千兆字節為單位顯示內存" tabindex="-1">5. 以千兆字節為單位顯示內存 <a class="header-anchor" href="#_5-以千兆字節為單位顯示內存" aria-label="Permalink to “5. 以千兆字節為單位顯示內存”">​</a></h3><p>使用<strong>-g</strong>為參數，將會以<strong>GB(千兆字節)</strong>為單位顯示內存大小。</p><pre><code># free -g
             total       used       free     shared    buffers     cached
Mem:             0          0          0          0          0          0
-/+ buffers/cache:          0          0
Swap:            3          0          3
</code></pre><h3 id="_6-顯示總計行" tabindex="-1">6. 顯示總計行 <a class="header-anchor" href="#_6-顯示總計行" aria-label="Permalink to “6. 顯示總計行”">​</a></h3><p>加上-t選項，將會在屏幕最後列出總計一行。</p><pre><code># free -t

             total       used       free     shared    buffers     cached
Mem:       1021628     912520     109108          0     120368     655548
-/+ buffers/cache:     136604     885024
Swap:      4194296          0    4194296
Total: 5215924 912520 4303404
</code></pre><h3 id="_7-關閉顯示緩衝區調整一行" tabindex="-1">7. 關閉顯示緩衝區調整一行 <a class="header-anchor" href="#_7-關閉顯示緩衝區調整一行" aria-label="Permalink to “7.  關閉顯示緩衝區調整一行”">​</a></h3><p>默認情況下，free命令是顯示“<strong>緩衝區調整</strong>”一行的，為了關閉顯示，可以加上-o參數。</p><pre><code># free -o                                                              

             total       used       free     shared    buffers     cached                                                                          
Mem:       1021628     912520     109108          0     120368     655548                                                                         
Swap:      4194296          0    4194296                               
</code></pre><h3 id="_8-定期時間間隔更新內存狀態" tabindex="-1">8. 定期時間間隔更新內存狀態 <a class="header-anchor" href="#_8-定期時間間隔更新內存狀態" aria-label="Permalink to “8. 定期時間間隔更新內存狀態”">​</a></h3><p>-s選項加上一個整數，用來在定期時間間隔內更新free命令。舉個例子，下面的命令將會在每5秒更新一個free命令。</p><pre><code># free -s 5

             total       used       free     shared    buffers     cached
Mem:       1021628     912368     109260          0     120368     655548
-/+ buffers/cache:     136452     885176
Swap:      4194296          0    4194296
</code></pre><h3 id="_9-顯示底和高內存統計信息" tabindex="-1">9. 顯示底和高內存統計信息 <a class="header-anchor" href="#_9-顯示底和高內存統計信息" aria-label="Permalink to “9. 顯示底和高內存統計信息”">​</a></h3><p>-l選項顯示了具體的高和低內存的使用統計情況。</p><pre><code># free -l

             total       used       free     shared    buffers     cached
Mem:       1021628     912368     109260          0     120368     655548
Low:        890036     789064     100972
High:       131592     123304       8288
-/+ buffers/cache:     136452     885176
Swap:      4194296          0    4194296
</code></pre><h3 id="_10-檢查free命令版本" tabindex="-1">10. 檢查free命令版本 <a class="header-anchor" href="#_10-檢查free命令版本" aria-label="Permalink to “10. 檢查free命令版本”">​</a></h3><p>-V選項，顯示free命令版本信息。</p><pre><code># free -V

procps version 3.2.8
</code></pre><hr>`,36)),o("p",null,[e[1]||(e[1]=r("via: ",-1)),a(n,{href:"http://www.tecmint.com/check-memory-usage-in-linux/"},{default:t(()=>[...e[0]||(e[0]=[r("http://www.tecmint.com/check-memory-usage-in-linux/",-1)])]),_:1})]),o("p",null,[e[5]||(e[5]=r("作者：",-1)),a(n,{href:"http://www.tecmint.com/author/admin/"},{default:t(()=>[...e[2]||(e[2]=[r("Ravi Saive",-1)])]),_:1}),e[6]||(e[6]=r(" 譯者：",-1)),a(n,{href:"https://github.com/su-kaiyao"},{default:t(()=>[...e[3]||(e[3]=[r("su-kaiyao",-1)])]),_:1}),e[7]||(e[7]=r(" 校對：",-1)),a(n,{href:"https://github.com/wxy"},{default:t(()=>[...e[4]||(e[4]=[r("wxy",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=r("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[8]||(e[8]=[r("LCTT",-1)])]),_:1}),e[11]||(e[11]=r(" 原創翻譯，",-1)),a(n,{href:"http://linux.cn/"},{default:t(()=>[...e[9]||(e[9]=[r("Linux中> 國",-1)])]),_:1}),e[12]||(e[12]=r(" 榮譽推出",-1))])])}const L=s(p,[["render",h]]);export{w as __pageData,L as default};
