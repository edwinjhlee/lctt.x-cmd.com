import{_ as p,a0 as s,w as a,s as r,ao as l,I as n,x as d,a1 as o,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"使用 dd 命令進行硬盤 I/O 性能檢測 | LCTT x X-CMD","titleTemplate":false,"description":"使用 dd 命令進行硬盤 I/O 性能檢測 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 dd 命令進行硬盤 I/O 性能檢測 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 dd 命令進行硬盤 I/O 性能檢測 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/Linux and Unix Test Disk IO Performance With dd Command","title":"使用 dd 命令進行硬盤 I/O 性能檢測","tag":"201508","desc":""},"relativePath":"201508/Linux and Unix Test Disk IO Performance With dd Command.md","filePath":"[post].md"}'),c={name:"201508/Linux and Unix Test Disk IO Performance With dd Command.md"};function m(u,e,f,g,h,b){const t=s("Link");return a(),r("div",null,[e[11]||(e[11]=l(`<h1 id="使用-dd-命令進行硬盤-i-o-性能檢測" tabindex="-1">使用 dd 命令進行硬盤 I/O 性能檢測 <a class="header-anchor" href="#使用-dd-命令進行硬盤-i-o-性能檢測" aria-label="Permalink to “使用 dd 命令進行硬盤 I/O 性能檢測”">​</a></h1><p>如何使用dd命令測試我的硬盤性能？如何在linux操作系統下檢測硬盤的讀寫速度？</p><p>你可以使用以下命令在一個Linux或類Unix操作系統上進行簡單的I/O性能測試。</p><ul><li><strong>dd命令</strong> ：它被用來在Linux和類Unix系統下對硬盤設備進行寫性能的檢測。</li><li><strong>hparm命令</strong>：它用來在基於 Linux 的系統上獲取或設置硬盤參數，包括測試讀性能以及緩存性能等。</li></ul><p>在這篇指南中，你將會學到如何使用dd命令來測試硬盤性能。</p><h3 id="使用dd命令來監控硬盤的讀寫性能" tabindex="-1">使用dd命令來監控硬盤的讀寫性能：### <a class="header-anchor" href="#使用dd命令來監控硬盤的讀寫性能" aria-label="Permalink to “使用dd命令來監控硬盤的讀寫性能：###”">​</a></h3><ul><li>打開shell終端。</li><li>或者通過ssh登錄到遠程服務器。</li><li>使用dd命令來測量服務器的吞吐率（寫速度) <code>dd if=/dev/zero of=/tmp/test1.img bs=1G count=1 oflag=dsync</code></li><li>使用dd命令測量服務器延遲 <code>dd if=/dev/zero of=/tmp/test2.img bs=512 count=1000 oflag=dsync</code></li></ul><p>####理解dd命令的選項###</p><p>在這個例子當中，我將使用搭載Ubuntu Linux 14.04 LTS系統的RAID-10（配有SAS SSD的Adaptec 5405Z）服務器陣列來運行。基本語法為：</p><pre><code>dd if=/dev/input.file  of=/path/to/output.file  bs=block-size  count=number-of-blocks  oflag=dsync
## GNU dd語法 ##
dd if=/dev/zero of=/tmp/test1.img bs=1G count=1 oflag=dsync
##另外一種GNU dd的語法 ##
dd if=/dev/zero of=/tmp/testALT.img bs=1G count=1 conv=fdatasync
</code></pre><p>輸出樣例：</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/dd-server-test-io-speed-output.jpg" alt="Fig.01: Ubuntu Linux Server with RAID10 and testing server throughput with dd"></p><p><em>圖01: 使用dd命令獲取的服務器吞吐率</em></p><p>請各位注意在這個實驗中，我們寫入一個G的數據，可以發現，服務器的吞吐率是135 MB/s，這其中</p><ul><li><code>if=/dev/zero</code> (if=/dev/input.file) ：用來設置dd命令讀取的輸入文件名。</li><li><code>of=/tmp/test1.img</code> (of=/path/to/output.file)：dd命令將input.file寫入的輸出文件的名字。</li><li><code>bs=1G</code> (bs=block-size) ：設置dd命令讀取的塊的大小。例子中為1個G。</li><li><code>count=1</code> (count=number-of-blocks)：dd命令讀取的塊的個數。</li><li><code>oflag=dsync</code> (oflag=dsync) ：使用同步I/O。不要省略這個選項。這個選項能夠幫助你去除caching的影響，以便呈現給你精準的結果。</li><li><code>conv=fdatasyn</code>: 這個選項和<code>oflag=dsync</code>含義一樣。</li></ul><p>在下面這個例子中，一共寫了1000次，每次寫入512字節來獲得RAID10服務器的延遲時間：</p><pre><code>dd if=/dev/zero of=/tmp/test2.img bs=512 count=1000 oflag=dsync
</code></pre><p>輸出樣例：</p><pre><code>1000+0 records in
1000+0 records out
512000 bytes (512 kB) copied, 0.60362 s, 848 kB/s
</code></pre><p>請注意服務器的吞吐率以及延遲時間也取決於服務器/應用的負載。所以我推薦你在一個剛剛重啓過並且處於峯值時間的服務器上來運行測試，以便得到更加準確的度量。現在你可以在你的所有設備上互相比較這些測試結果了。</p><p>###為什麼服務器的吞吐率和延遲時間都這麼差？###</p><p>低的數值並不意味着你在使用差勁的硬件。可能是硬件 RAID10的控制器緩存導致的。</p><p>使用hdparm命令來查看硬盤緩存的讀速度。</p><p>我建議你運行下面的命令2-3次來對設備讀性能進行檢測，以作為參照和相互比較：</p><pre><code>### 有緩存的硬盤讀性能測試——/dev/sda ###
hdparm -t /dev/sda1
## 或者 ##
hdparm -t /dev/sda
</code></pre><p>然後運行下面這個命令2-3次來對緩存的讀性能進行對照性檢測：</p><pre><code>## Cache讀基準——/dev/sda ###
hdparm -T /dev/sda1
## 或者 ##
hdparm -T /dev/sda
</code></pre><p>或者乾脆把兩個測試結合起來：</p><pre><code>hdparm -Tt /dev/sda
</code></pre><p>輸出樣例：</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/hdparam-output.jpg" alt="Fig.02: Linux hdparm command to test reading and caching disk performance"></p><p><em>圖02: 檢測硬盤讀入以及緩存性能的Linux hdparm命令</em></p><p>請再次注意，由於文件文件操作的緩存屬性，你將總是會看到很高的讀速度。</p><p>###使用dd命令來測試讀取速度###</p><p>為了獲得精確的讀測試數據，首先在測試前運行下列命令，來將緩存設置為無效：</p><pre><code>flush
echo 3 | sudo tee /proc/sys/vm/drop_caches
time time dd if=/path/to/bigfile of=/dev/null bs=8k
</code></pre><p>####筆記本上的示例####</p><p>運行下列命令：</p><pre><code>### 帶有Cache的Debian系統筆記本吞吐率###
dd if=/dev/zero of=/tmp/laptop.bin bs=1G count=1 oflag=direct
 
###使cache失效###
hdparm -W0 /dev/sda
 
###沒有Cache的Debian系統筆記本吞吐率###
dd if=/dev/zero of=/tmp/laptop.bin bs=1G count=1 oflag=direct
</code></pre><p>####蘋果OS X Unix(Macbook pro)的例子####</p><p>GNU dd has many more options but OS X/BSD and Unix-like dd command need to run as follows to test real disk I/O and not memory add sync option as follows:</p><p>GNU dd命令有其他許多選項，但是在 OS X/BSD 以及類Unix中， dd命令需要像下面那樣執行來檢測去除掉內存地址同步的硬盤真實I/O性能：</p><pre><code>## 運行這個命令2-3次來獲得更好地結果 ###
time sh -c &quot;dd if=/dev/zero of=/tmp/testfile bs=100k count=1k &amp;&amp; sync&quot;
</code></pre><p>輸出樣例：</p><pre><code>1024+0 records in
1024+0 records out
104857600 bytes transferred in 0.165040 secs (635346520 bytes/sec)
 
real	0m0.241s
user	0m0.004s
sys	0m0.113s
</code></pre><p>本人Macbook Pro的寫速度是635346520字節（635.347MB/s)。</p><p>###不喜歡用命令列?^_^###</p><p>你可以在Linux或基於Unix的系統上使用disk utility(gnome-disk-utility)這款工具來得到同樣的信息。下面的那個圖就是在我的Fedora Linux v22 VM上截取的。</p><p>####圖形化方法####</p><p>點擊“Activites”或者“Super”按鍵來在桌面和Activites視圖間切換。輸入“Disks”</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/disk-1.jpg" alt="Fig.03: Start the Gnome disk utility"></p><p><em>圖03: 打開Gnome硬盤工具</em></p><p>在左邊的面板上選擇你的硬盤，點擊configure按鈕，然後點擊“Benchmark partition”：</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/disks-2.jpg" alt="Fig.04: Benchmark disk/partition"></p><p><em>圖04: 評測硬盤/分區</em></p><p>最後，點擊“Start Benchmark...”按鈕（你可能需要輸入管理員用户名和密碼）：</p><p><img src="http://s0.cyberciti.org/uploads/faq/2015/08/disks-3.jpg" alt="Fig.05: Final benchmark result"></p><p><em>圖05: 最終的評測結果</em></p><p>如果你要問，我推薦使用哪種命令和方法？</p><ul><li>我推薦在所有的類Unix系統上使用dd命令（<code>time sh -c &quot;dd if=/dev/zero of=/tmp/testfile bs=100k count=1k &amp;&amp; sync</code>）</li><li>如果你在使用GNU/Linux，使用dd命令 (<code>dd if=/dev/zero of=/tmp/testALT.img bs=1G count=1 conv=fdatasync</code>)</li><li>確保你每次使用時，都調整了count以及bs參數以獲得更好的結果。</li><li>GUI方法只適合桌面系統為Gnome2或Gnome3的Linux/Unix筆記本用户。</li></ul><hr>`,61)),n("p",null,[e[1]||(e[1]=d("via: ",-1)),o(t,{href:"http://www.cyberciti.biz/faq/howto-linux-unix-test-disk-performance-with-dd-command/"},{default:i(()=>[...e[0]||(e[0]=[d("http://www.cyberciti.biz/faq/howto-linux-unix-test-disk-performance-with-dd-command/",-1)])]),_:1})]),n("p",null,[e[4]||(e[4]=d("作者：Vivek Gite 譯者：",-1)),o(t,{href:"https://github.com/DongShuaike"},{default:i(()=>[...e[2]||(e[2]=[d("DongShuaike",-1)])]),_:1}),e[5]||(e[5]=d(" 校對：",-1)),o(t,{href:"https://github.com/wxy"},{default:i(()=>[...e[3]||(e[3]=[d("wxy",-1)])]),_:1})]),n("p",null,[e[8]||(e[8]=d("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[6]||(e[6]=[d("LCTT",-1)])]),_:1}),e[9]||(e[9]=d(" 原創翻譯，",-1)),o(t,{href:"https://linux.cn/"},{default:i(()=>[...e[7]||(e[7]=[d("Linux中國",-1)])]),_:1}),e[10]||(e[10]=d(" 榮譽推出",-1))])])}const y=p(c,[["render",m]]);export{v as __pageData,y as default};
