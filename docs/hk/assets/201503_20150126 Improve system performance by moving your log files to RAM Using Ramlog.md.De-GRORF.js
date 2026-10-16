import{_ as n,a0 as s,w as p,s as g,ao as m,I as t,x as r,a1 as l,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"性能優化：使用ramlog將日誌文件轉移到內存中 | LCTT x X-CMD","titleTemplate":false,"description":"性能優化：使用ramlog將日誌文件轉移到內存中 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"性能優化：使用ramlog將日誌文件轉移到內存中 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"性能優化：使用ramlog將日誌文件轉移到內存中 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150126 Improve system performance by moving your log files to RAM Using Ramlog","title":"性能優化：使用ramlog將日誌文件轉移到內存中","tag":"201503","desc":""},"relativePath":"201503/20150126 Improve system performance by moving your log files to RAM Using Ramlog.md","filePath":"[post].md"}'),d={name:"201503/20150126 Improve system performance by moving your log files to RAM Using Ramlog.md"};function i(u,o,f,b,_,k){const a=s("Link");return p(),g("div",null,[o[16]||(o[16]=m('<h1 id="性能優化-使用ramlog將日誌文件轉移到內存中" tabindex="-1">性能優化：使用ramlog將日誌文件轉移到內存中 <a class="header-anchor" href="#性能優化-使用ramlog將日誌文件轉移到內存中" aria-label="Permalink to “性能優化：使用ramlog將日誌文件轉移到內存中”">​</a></h1><p>Ramlog 以系統守護進程的形式運行。在系統啓動時它創建虛擬磁盤（ramdisk），將 /var/log 下的文件複製到虛擬磁盤中，同時把虛擬磁盤掛載為/var/log。然後所有的日誌就會更新到虛擬磁盤上。而當 ramlog 重啓或停止時，需要記錄到硬盤上的日誌就會保留在目錄/var/log.hdd中。而關機的時候，（ramdisk上的）日誌文件會重新保存到硬盤上，以確保日誌一致性。Ramlog 2.x默認使用tmpfs文件系統，同時也可以支持ramfs和內核ramdisk。使用rsync（譯註：Linux數據鏡像備份工具）這個工具來同步日誌。</p><p>注意：如果突然斷電或者內核崩潰（kernel panic）時，沒有保存進硬盤的日誌將會丟失。</p><p>如果你擁有夠多的可用內存，而又想把日誌放進虛擬磁盤，就安裝ramlog吧。它是筆記本用户、帶有UPS的系統或是直接在flash中運行的系統的優良選擇，可以節省日誌的寫入時間。</p><p>Ramlog的運行機制以及步驟如下：</p><ol><li><p>Ramlog 由第一個守護進程（這取決於你所安裝過的其它守護進程）啓動。</p></li><li><p>然後創建目錄/var/log.hdd並將其硬鏈至/var/log。</p></li><li><p>如果使用的是tmpfs（默認）或者ramfs 文件系統，將其掛載到/var/log上。</p></li><li><p>而如果使用的是內核ramdisk，ramdisk會在/dev/ram9中創建，並將其掛載至/var/log。默認情況下ramlog會佔用所有ramdisk的內存，其大小由內核參數&quot;ramdisk_size&quot;指定。</p></li><li><p>接着其它的守護進程被啓動，並在ramdisk中更新日誌。Logrotate（譯註：Linux日誌輪替工具）和 ramdisk 配合的也很好。</p></li><li><p>重啓（默認一天一次）ramlog時，目錄/var/log.hdd將藉助rsync與/var/log保持同步。日誌自動保存的頻率可以通過cron（譯註：Linux例行性工作調度）來控制。默認情況下，ramlog 的調度任務放置在目錄/etc/cron.daily下。</p></li><li><p>系統關機時，ramlog在最後一個守護進程關閉之前關閉。</p></li><li><p>在ramlog關閉期間，/var/log.hdd中的文件將被同步至/var/log，接着/var/log和/var/log.hdd都被卸載，然後刪除空目錄/var/log.hdd。</p></li></ol><p><strong>注意:- 此文僅面向高級用户</strong></p><h3 id="在ubuntu中安裝ramlog" tabindex="-1">在Ubuntu中安裝Ramlog <a class="header-anchor" href="#在ubuntu中安裝ramlog" aria-label="Permalink to “在Ubuntu中安裝Ramlog”">​</a></h3>',8)),t("p",null,[o[1]||(o[1]=r("首先需要用以下命令，從",-1)),l(a,{href:"http://www.tremende.com/ramlog/download/ramlog_2.0.0_all.deb"},{default:e(()=>[...o[0]||(o[0]=[r("這裏",-1)])]),_:1}),o[2]||(o[2]=r("下載.deb安裝包：",-1))]),o[17]||(o[17]=m(`<pre><code>wget http://www.tremende.com/ramlog/download/ramlog_2.0.0_all.deb
</code></pre><p>下載ramlog_2.0.0_all.deb安裝包完畢，使用以下命令進行安裝：</p><pre><code>sudo dpkg -i ramlog_2.0.0_all.deb
</code></pre><p>這一步會完成整個安裝，現在你需要運行以下命令：</p><pre><code>sudo update-rc.d ramlog start 2 2 3 4 5 . stop 99 0 1 6 .
</code></pre><p>現在，在更新sysklogd的初始化順序，使之能在ramlog停止運行前正確關閉：</p><pre><code>sudo update-rc.d -f sysklogd remove

sudo update-rc.d sysklogd start 10 2 3 4 5 . stop 90 0 1 6 .
</code></pre><p>然後重啓系統：</p><pre><code>sudo reboot
</code></pre><p>系統重啓完畢，運行&#39;ramlog getlogsize&#39;來獲取你當前的/var/log的空間大小。在此基礎之上多分配40%的空間，確保ramdisk有足夠的空間（這整個都將作為ramdisk的空間大小）。</p><p>編輯引導配置文件，如/etc/grub.conf,、/boot/grub/menu.lst 或/etc/lilo.conf（譯註：具體哪個配置文件視不同引導加載程序而定），給你的當前內核的新增選項 &#39;ramdisk_size=xxx&#39; ，其中xxx是ramdisk的空間大小。</p><h3 id="配置ramlog" tabindex="-1">配置Ramlog <a class="header-anchor" href="#配置ramlog" aria-label="Permalink to “配置Ramlog”">​</a></h3><p>基於deb的系統中，Ramlog的配置文件位於/etc/default/ramlog，你可以在該配置文件中設置以下變量：</p><pre><code>RAMDISKTYPE=0
# 取值:
# 0 -- tmpfs （可被交換到交換分區） -- 默認
# 1 -- ramfs （舊內核不能設置最大空間大小， 
# 不能被交換到交換分區，和 SELinux 不兼容）
# 2 -- 老式的內核 ramdisk
TMPFS_RAMFS_SIZE=
# 可以用於 tmpfs 或 ramfs 的最大內存大小
# 這個值可以是百分比或數值（單位是 Mb），例如：
# TMPFS_RAMFS_SIZE=40%
# TMPFS_RAMFS_SIZE=100m
# 該值為空表示 tmpfs/ramfs 的大小是全部內存的 50%
# 更多選項可以參考 ‘man mount&#39; 中的‘Mount options for tmpfs&#39; 一節
# （補充，在較新的內核中，ramfs  支持大小限制，
# 雖然 man 中説沒有這個掛載選項）
# 該選項僅用於 RAMDISKTYPE=0 或 1 時
KERNEL_RAMDISK_SIZE=MAX
#以 kb 為單位指定的內核 ramdisk 大小，或者使用 MAX 來使用整個 ramdisk。
#該選項僅用於 RAMDISKTYPE=2 時
LOGGING=1
# 0=關閉, 1=打開 。記錄自身的日誌到 /var/log/ramdisk
LOGNAME=ramlog
# 自身的日誌文件名 （用於 LOGGING=1時）
VERBOSE=1
# 0=關閉, 1=打開 （設置為 1時，啓動或停止失敗時會調用 teststartstop 將細節
# 寫到日誌中） 
</code></pre><h3 id="在ubuntu中卸載ramlog" tabindex="-1">在Ubuntu中卸載ramlog <a class="header-anchor" href="#在ubuntu中卸載ramlog" aria-label="Permalink to “在Ubuntu中卸載ramlog”">​</a></h3><p>打開終端運行以下命令：</p><pre><code>sudo dpkg -P ramlog
</code></pre><p>注意：如果ramlog卸載之前仍在運行，需要重啓系統完成整個卸載工作。</p><hr>`,19)),t("p",null,[o[4]||(o[4]=r("via: ",-1)),l(a,{href:"http://www.ubuntugeek.com/improve-system-performance-by-moving-your-log-files-to-ram-using-ramlog.html"},{default:e(()=>[...o[3]||(o[3]=[r("http://www.ubuntugeek.com/improve-system-performance-by-moving-your-log-files-to-ram-using-ramlog.html",-1)])]),_:1})]),t("p",null,[o[8]||(o[8]=r("作者：",-1)),l(a,{href:"http://www.ubuntugeek.com/author/ubuntufix"},{default:e(()=>[...o[5]||(o[5]=[r("ruchi",-1)])]),_:1}),o[9]||(o[9]=r(" 譯者：",-1)),l(a,{href:"https://github.com/soooogreen"},{default:e(()=>[...o[6]||(o[6]=[r("soooogreen",-1)])]),_:1}),o[10]||(o[10]=r(" 校對：",-1)),l(a,{href:"https://github.com/wxy"},{default:e(()=>[...o[7]||(o[7]=[r("wxy",-1)])]),_:1})]),t("p",null,[o[13]||(o[13]=r("本文由 ",-1)),l(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...o[11]||(o[11]=[r("LCTT",-1)])]),_:1}),o[14]||(o[14]=r(" 原創翻譯，",-1)),l(a,{href:"http://linux.cn/"},{default:e(()=>[...o[12]||(o[12]=[r("Linux中國",-1)])]),_:1}),o[15]||(o[15]=r(" 榮譽推出",-1))])])}const R=n(d,[["render",i]]);export{x as __pageData,R as default};
