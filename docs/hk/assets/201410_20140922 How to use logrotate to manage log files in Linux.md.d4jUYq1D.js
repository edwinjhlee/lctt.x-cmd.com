import{_ as n,a0 as g,w as i,s,ao as d,I as a,x as t,a1 as l,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const L=JSON.parse('{"title":"Linux日誌文件總管——logrotate | LCTT x X-CMD","titleTemplate":false,"description":"Linux日誌文件總管——logrotate | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux日誌文件總管——logrotate | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux日誌文件總管——logrotate | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140922 How to use logrotate to manage log files in Linux","title":"Linux日誌文件總管——logrotate","tag":"201410","desc":""},"relativePath":"201410/20140922 How to use logrotate to manage log files in Linux.md","filePath":"[post].md"}'),p={name:"201410/20140922 How to use logrotate to manage log files in Linux.md"};function c(f,o,m,u,h,x){const e=g("Link");return i(),s("div",null,[o[13]||(o[13]=d(`<h1 id="linux日誌文件總管——logrotate" tabindex="-1">Linux日誌文件總管——logrotate <a class="header-anchor" href="#linux日誌文件總管——logrotate" aria-label="Permalink to “Linux日誌文件總管——logrotate”">​</a></h1><p>日誌文件包含了關於系統中發生的事件的有用信息，在排障過程中或者系統性能分析時經常被用到。對於忙碌的服務器，日誌文件大小會增長極快，服務器會很快消耗磁盤空間，這成了個問題。除此之外，處理一個單個的龐大日誌文件也常常是件十分棘手的事。</p><p>logrotate是個十分有用的工具，它可以自動對日誌進行截斷（或輪循）、壓縮以及刪除舊的日誌文件。例如，你可以設置logrotate，讓/var/log/foo日誌文件每30天輪循，並刪除超過6個月的日誌。配置完後，logrotate的運作完全自動化，不必進行任何進一步的人為干預。另外，舊日誌也可以通過電子郵件發送，不過該選項超出了本教程的討論範圍。</p><p>主流Linux發行版上都默認安裝有logrotate包，如果出於某種原因，logrotate沒有出現在裏頭，你可以使用apt-get或yum命令來安裝。</p><p>在Debian或Ubuntu上：</p><pre><code># apt-get install logrotate cron 
</code></pre><p>在Fedora，CentOS或RHEL上：</p><pre><code># yum install logrotate crontabs 
</code></pre><p>logrotate的配置文件是/etc/logrotate.conf，通常不需要對它進行修改。日誌文件的輪循設置在獨立的配置文件中，它（們）放在/etc/logrotate.d/目錄下。</p><h3 id="樣例一" tabindex="-1">樣例一 <a class="header-anchor" href="#樣例一" aria-label="Permalink to “樣例一”">​</a></h3><p>在第一個樣例中，我們將創建一個10MB的日誌文件/var/log/log-file。我們將展示怎樣使用logrotate來管理該日誌文件。</p><p>我們從創建一個日誌文件開始吧，然後在其中填入一個10MB的隨機比特流數據。</p><pre><code># touch /var/log/log-file
# head -c 10M &lt; /dev/urandom &gt; /var/log/log-file 
</code></pre><p>由於現在日誌文件已經準備好，我們將配置logrotate來輪循該日誌文件。讓我們為該文件創建一個配置文件。</p><pre><code># vim /etc/logrotate.d/log-file 
</code></pre><hr><pre><code>/var/log/log-file {
    monthly
    rotate 5
    compress
    delaycompress
    missingok
    notifempty
    create 644 root root
    postrotate
        /usr/bin/killall -HUP rsyslogd
    endscript
}
</code></pre><p>這裏：</p><ul><li><strong>monthly</strong>: 日誌文件將按月輪循。其它可用值為‘daily’，‘weekly’或者‘yearly’。</li><li><strong>rotate 5</strong>: 一次將存儲5個歸檔日誌。對於第六個歸檔，時間最久的歸檔將被刪除。</li><li><strong>compress</strong>: 在輪循任務完成後，已輪循的歸檔將使用gzip進行壓縮。</li><li><strong>delaycompress</strong>: 總是與compress選項一起用，delaycompress選項指示logrotate不要將最近的歸檔壓縮，壓縮將在下一次輪循週期進行。這在你或任何軟件仍然需要讀取最新歸檔時很有用。</li><li><strong>missingok</strong>: 在日誌輪循期間，任何錯誤將被忽略，例如“文件無法找到”之類的錯誤。</li><li><strong>notifempty</strong>: 如果日誌文件為空，輪循不會進行。</li><li><strong>create 644 root root</strong>: 以指定的權限創建全新的日誌文件，同時logrotate也會重命名原始日誌文件。</li><li><strong>postrotate/endscript</strong>: 在所有其它指令完成後，postrotate和endscript裏面指定的命令將被執行。在這種情況下，rsyslogd 進程將立即再次讀取其配置並繼續運行。</li></ul><p>上面的模板是通用的，而配置參數則根據你的需求進行調整，不是所有的參數都是必要的。</p><h3 id="樣例二" tabindex="-1">樣例二 <a class="header-anchor" href="#樣例二" aria-label="Permalink to “樣例二”">​</a></h3><p>在本例中，我們只想要輪循一個日誌文件，然而日誌文件大小可以增長到50MB。</p><pre><code># vim /etc/logrotate.d/log-file 
</code></pre><hr><pre><code>/var/log/log-file {
    size=50M
    rotate 5
    create 644 root root
    postrotate
        /usr/bin/killall -HUP rsyslogd
    endscript
}
</code></pre><h3 id="樣例三" tabindex="-1">樣例三 <a class="header-anchor" href="#樣例三" aria-label="Permalink to “樣例三”">​</a></h3><p>我們想要讓舊日誌文件以創建日期命名，這可以通過添加dateext常熟實現。</p><pre><code># vim /etc/logrotate.d/log-file 
</code></pre><hr><pre><code>/var/log/log-file {
    monthly
    rotate 5
    dateext
    create 644 root root
    postrotate
        /usr/bin/killall -HUP rsyslogd
    endscript
}
</code></pre><p>這將讓歸檔文件在它們的文件名中包含日期信息。</p><h3 id="排障" tabindex="-1">排障 <a class="header-anchor" href="#排障" aria-label="Permalink to “排障”">​</a></h3><p>這裏提供了一些logrotate設置的排障提示。</p><h4 id="_1-手動運行logrotate" tabindex="-1">1. 手動運行logrotate <a class="header-anchor" href="#_1-手動運行logrotate" aria-label="Permalink to “1. 手動運行logrotate”">​</a></h4><p><strong>logrotate</strong>可以在任何時候從命令列手動調用。</p><p>要調用為/etc/lograte.d/下配置的所有日誌調用<strong>logrotate</strong>：</p><pre><code># logrotate /etc/logrotate.conf 
</code></pre><p>要為某個特定的配置調用logrotate：</p><pre><code># logrotate /etc/logrotate.d/log-file 
</code></pre><h4 id="_2-演練" tabindex="-1">2. 演練 <a class="header-anchor" href="#_2-演練" aria-label="Permalink to “2. 演練”">​</a></h4><p>排障過程中的最佳選擇是使用‘-d’選項以預演方式運行logrotate。要進行驗證，不用實際輪循任何日誌文件，可以模擬演練日誌輪循並顯示其輸出。</p><pre><code># logrotate -d /etc/logrotate.d/log-file 
</code></pre><p><img src="https://farm6.staticflickr.com/5561/15096836737_33d3cd1ccb_z.jpg" alt=""></p><p>正如我們從上面的輸出結果可以看到的，logrotate判斷該輪循是不必要的。如果文件的時間小於一天，這就會發生了。</p><h4 id="_3-強制輪循" tabindex="-1">3. 強制輪循 <a class="header-anchor" href="#_3-強制輪循" aria-label="Permalink to “3. 強制輪循”">​</a></h4><p>即使輪循條件沒有滿足，我們也可以通過使用‘-f’選項來強制logrotate輪循日誌文件，‘-v’參數提供了詳細的輸出。</p><pre><code># logrotate -vf /etc/logrotate.d/log-file 
</code></pre><hr><pre><code>reading config file /etc/logrotate.d/log-file
reading config info for /var/log/log-file

Handling 1 logs

rotating pattern: /var/log/log-file  forced from command line (5 rotations)
empty log files are rotated, old logs are removed
considering log /var/log/log-file
  log needs rotating
rotating log /var/log/log-file, log-&gt;rotateCount is 5
dateext suffix &#39;-20140916&#39;
glob pattern &#39;-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]&#39;
renaming /var/log/log-file.5.gz to /var/log/log-file.6.gz (rotatecount 5, logstart 1, i 5),
old log /var/log/log-file.5.gz does not exist
renaming /var/log/log-file.4.gz to /var/log/log-file.5.gz (rotatecount 5, logstart 1, i 4),
old log /var/log/log-file.4.gz does not exist
. . .
renaming /var/log/log-file.0.gz to /var/log/log-file.1.gz (rotatecount 5, logstart 1, i 0),
old log /var/log/log-file.0.gz does not exist
log /var/log/log-file.6.gz doesn&#39;t exist -- won&#39;t try to dispose of it
renaming /var/log/log-file to /var/log/log-file.1
creating new /var/log/log-file mode = 0644 uid = 0 gid = 0
running postrotate script
compressing log with: /bin/gzip
</code></pre><h4 id="_4-logrotate的記錄日誌" tabindex="-1">4. Logrotate的記錄日誌 <a class="header-anchor" href="#_4-logrotate的記錄日誌" aria-label="Permalink to “4. Logrotate的記錄日誌”">​</a></h4><p>logrotate自身的日誌通常存放於/var/lib/logrotate/status目錄。如果處於排障目的，我們想要logrotate記錄到任何指定的文件，我們可以指定像下面這樣從命令列指定。</p><pre><code># logrotate -vf –s /var/log/logrotate-status /etc/logrotate.d/log-file
</code></pre><h4 id="_5-logrotate定時任務" tabindex="-1">5. Logrotate定時任務 <a class="header-anchor" href="#_5-logrotate定時任務" aria-label="Permalink to “5. Logrotate定時任務”">​</a></h4><p>logrotate需要的<strong>cron</strong>任務應該在安裝時就自動創建了，我把cron文件的內容貼出來，以供大家參考。</p><pre><code># cat /etc/cron.daily/logrotate 
</code></pre><hr><pre><code>#!/bin/sh
 
# Clean non existent log file entries from status file
cd /var/lib/logrotate
test -e status || touch status
head -1 status &gt; status.clean
sed &#39;s/&quot;//g&#39; status | while read logfile date
do
    [ -e &quot;$logfile&quot; ] &amp;&amp; echo &quot;\\&quot;$logfile\\&quot; $date&quot;
done &gt;&gt; status.clean
mv status.clean status
 
test -x /usr/sbin/logrotate || exit 0
/usr/sbin/logrotate /etc/logrotate.conf
</code></pre><p>小結一下，logrotate工具對於防止因龐大的日誌文件而耗盡存儲空間是十分有用的。配置完畢後，進程是全自動的，可以長時間在不需要人為干預下運行。本教程重點關注幾個使用logrotate的幾個基本樣例，你也可以定製它以滿足你的需求。</p><p>希望本文對你有所幫助。</p><hr>`,60)),a("p",null,[o[1]||(o[1]=t("via: ",-1)),l(e,{href:"http://xmodulo.com/2014/09/logrotate-manage-log-files-linux.html"},{default:r(()=>[...o[0]||(o[0]=[t("http://xmodulo.com/2014/09/logrotate-manage-log-files-linux.html",-1)])]),_:1})]),a("p",null,[o[5]||(o[5]=t("作者：",-1)),l(e,{href:"http://xmodulo.com/author/sarmed"},{default:r(()=>[...o[2]||(o[2]=[t("Sarmed Rahman",-1)])]),_:1}),o[6]||(o[6]=t(" 譯者：",-1)),l(e,{href:"https://github.com/GOLinux"},{default:r(()=>[...o[3]||(o[3]=[t("GOLinux",-1)])]),_:1}),o[7]||(o[7]=t(" 校對：",-1)),l(e,{href:"https://github.com/wxy"},{default:r(()=>[...o[4]||(o[4]=[t("wxy",-1)])]),_:1})]),a("p",null,[o[10]||(o[10]=t("本文由 ",-1)),l(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...o[8]||(o[8]=[t("LCTT",-1)])]),_:1}),o[11]||(o[11]=t(" 原創翻譯，",-1)),l(e,{href:"http://linux.cn/"},{default:r(()=>[...o[9]||(o[9]=[t("Linux中國",-1)])]),_:1}),o[12]||(o[12]=t(" 榮譽推出",-1))])])}const _=n(p,[["render",c]]);export{L as __pageData,_ as default};
