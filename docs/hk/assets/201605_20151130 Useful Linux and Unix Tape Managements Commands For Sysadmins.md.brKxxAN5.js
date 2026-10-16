import{_ as s,a0 as l,w as o,s as m,ao as d,I as i,x as n,a1 as t,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"給系統管理員的15條實用 Linux/Unix 磁帶管理命令 | LCTT x X-CMD","titleTemplate":false,"description":"給系統管理員的15條實用 Linux/Unix 磁帶管理命令 | LCTT (201605) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"給系統管理員的15條實用 Linux/Unix 磁帶管理命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"給系統管理員的15條實用 Linux/Unix 磁帶管理命令 | LCTT (201605) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201605/20151130 Useful Linux and Unix Tape Managements Commands For Sysadmins","title":"給系統管理員的15條實用 Linux/Unix 磁帶管理命令","tag":"201605","desc":""},"relativePath":"201605/20151130 Useful Linux and Unix Tape Managements Commands For Sysadmins.md","filePath":"[post].md"}'),p={name:"201605/20151130 Useful Linux and Unix Tape Managements Commands For Sysadmins.md"};function f(u,e,h,c,x,v){const a=l("Link");return o(),m("div",null,[e[24]||(e[24]=d(`<h1 id="給系統管理員的15條實用-linux-unix-磁帶管理命令" tabindex="-1">給系統管理員的15條實用 Linux/Unix 磁帶管理命令 <a class="header-anchor" href="#給系統管理員的15條實用-linux-unix-磁帶管理命令" aria-label="Permalink to “給系統管理員的15條實用 Linux/Unix 磁帶管理命令”">​</a></h1><p>磁帶設備應只用於定期的文件歸檔或將數據從一台服務器傳送至另一台。通常磁帶設備與 Unix 機器連接，用 mt 或 mtx 控制。強烈建議您將所有的數據同時備份到磁盤（也許是雲中）和磁帶設備中。在本教程中你將會了解到：</p><ul><li>磁帶設備名</li><li>管理磁帶驅動器的基本命令</li><li>基本的備份和恢復命令</li></ul><h3 id="為什麼備份" tabindex="-1">為什麼備份？ <a class="header-anchor" href="#為什麼備份" aria-label="Permalink to “為什麼備份？”">​</a></h3><p>一個備份計劃對定期備份文件來説很有必要，如果你寧願選擇不備份，那麼丟失重要數據的風險會大大增加。有了備份，你就有了從磁盤故障中恢復的能力。備份還可以幫助你抵禦：</p><ul><li>意外的文件刪除</li><li>文件或文件系統損壞</li><li>服務器完全毀壞，包括由於火災或其他問題導致的同盤備份毀壞</li><li>硬盤或 SSD 崩潰</li><li>病毒或勒索軟件破壞或刪除文件</li></ul><p>你可以使用磁帶歸檔備份整個服務器並將其離線存儲。</p><h3 id="理解磁帶文件標記和塊大小" tabindex="-1">理解磁帶文件標記和塊大小 <a class="header-anchor" href="#理解磁帶文件標記和塊大小" aria-label="Permalink to “理解磁帶文件標記和塊大小”">​</a></h3><p><img src="http://s0.cyberciti.org/uploads/cms/2015/10/tape-format.jpg" alt="Fig.01: Tape file marks"></p><p><em>圖01：磁帶文件標記</em></p><p>每個磁帶設備能存儲多個備份文件。磁帶備份文件通過 cpio，tar，dd 等命令創建。同時，磁帶設備可以由多種程序打開、寫入數據、及關閉。你可以存儲若干備份（磁帶文件）到一個物理磁帶上。在每個磁帶文件之間有個“磁帶文件標記”。這用來指示一個物理磁帶上磁帶文件的結尾以及另一個文件的開始。你需要使用 mt 命令來定位磁帶（快進，倒帶和標記）。</p><h4 id="磁帶上的數據是如何存儲的" tabindex="-1">磁帶上的數據是如何存儲的 <a class="header-anchor" href="#磁帶上的數據是如何存儲的" aria-label="Permalink to “磁帶上的數據是如何存儲的”">​</a></h4><p><img src="http://s0.cyberciti.org/uploads/cms/2015/10/how-data-is-stored-on-a-tape.jpg" alt="Fig.02: How data is stored on a tape"></p><p><em>圖02：磁帶上的數據是如何存儲的</em></p><p>所有的數據使用 tar 以連續磁帶存儲格式連續地存儲。第一個磁帶歸檔會從磁帶的物理開始端開始存儲（tar #0）。接下來的就是 tar #1，以此類推。</p><h3 id="unix-上的磁帶設備名" tabindex="-1">Unix 上的磁帶設備名 <a class="header-anchor" href="#unix-上的磁帶設備名" aria-label="Permalink to “Unix 上的磁帶設備名”">​</a></h3><ol><li>/dev/rmt/0 或 /dev/rmt/1 或 /dev/rmt/[0-127] ：Unix 上的常規磁帶設備名。磁帶自動倒回。</li><li>/dev/rmt/0n ：以無倒回為特徵，換言之，磁帶使用之後，停留在當前狀態等待下個命令。</li><li>/dev/rmt/0b ：使用磁帶接口，也就是 BSD 的行為。各種類型的操作系統比如 AIX，Windows，Linux，FreeBSD 等的行為更有可讀性。</li><li>/dev/rmt/0l ：設置密度為低。</li><li>/dev/rmt/0m ：設置密度為中。</li><li>/dev/rmt/0u ：設置密度為高。</li><li>/dev/rmt/0c ：設置密度為壓縮。</li><li>/dev/st[0-9] ：Linux 特定 SCSI 磁帶設備名。</li><li>/dev/sa[0-9] ：FreeBSD 特定 SCSI 磁帶設備名。</li><li>/dev/esa0 ：FreeBSD 特定 SCSI 磁帶設備名，在關閉時彈出（如果可以的話）。</li></ol><h4 id="磁帶設備名示例" tabindex="-1">磁帶設備名示例 <a class="header-anchor" href="#磁帶設備名示例" aria-label="Permalink to “磁帶設備名示例”">​</a></h4><ul><li>/dev/rmt/1cn 指明正在使用 unity 1，壓縮密度，無倒回。</li><li>/dev/rmt/0hb 指明正在使用 unity 0，高密度，BSD 行為。</li><li>Linux 上的自動倒回 SCSI 磁帶設備名：/dev/st0</li><li>Linux 上的無倒回 SCSI 磁帶設備名：/dev/nst0</li><li>FreeBSD 上的自動倒回 SCSI 磁帶設備名：/dev/sa0</li><li>FreeBSD 上的無倒回 SCSI 磁帶設備名：/dev/nsa0</li></ul><h4 id="如何列出已安裝的-scsi-磁帶設備" tabindex="-1">如何列出已安裝的 scsi 磁帶設備？ <a class="header-anchor" href="#如何列出已安裝的-scsi-磁帶設備" aria-label="Permalink to “如何列出已安裝的 scsi 磁帶設備？”">​</a></h4><p>輸入下列命令：</p><pre><code>### Linux（更多信息參閲 man） ###
lsscsi
lsscsi -g

### IBM AIX ###
lsdev -Cc tape
lsdev -Cc adsm
lscfg -vl rmt*

### Solaris Unix ###
cfgadm –a
cfgadm -al
luxadm probe
iostat -En

### HP-UX Unix ###
ioscan Cf
ioscan -funC tape
ioscan -fnC tape
ioscan -kfC tape
</code></pre><p>來自我的 Linux 服務器的輸出示例：</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/10/linux-find-tape-devices-command.jpg" alt="Fig.03: Installed tape devices on Linux server"></p><p><em>圖03：Linux 服務器上已安裝的磁帶設備</em></p><h3 id="mt-命令示例" tabindex="-1">mt 命令示例 <a class="header-anchor" href="#mt-命令示例" aria-label="Permalink to “mt 命令示例”">​</a></h3><p>在 Linux 和類 Unix 系統上，mt 命令用來控制磁帶驅動器的操作，比如查看狀態或查找磁帶上的文件或寫入磁帶控制標記。下列大多數命令需要作為 root 用户執行。語法如下：</p><pre><code>mt -f /tape/device/name operation
</code></pre><h4 id="設置環境" tabindex="-1">設置環境 <a class="header-anchor" href="#設置環境" aria-label="Permalink to “設置環境”">​</a></h4><p>你可以設置 TAPE shell 變量。這是磁帶驅動器的路徑名。在 FreeBSD 上默認的（如果變量沒有設置，而不是 null）是 /dev/nsa0。可以通過 mt 命令的 -f 參數傳遞變量覆蓋它，就像下面解釋的那樣。</p><pre><code> ### 添加到你的 shell 配置文件 ###
 TAPE=/dev/st1 #Linux
 TAPE=/dev/rmt/2 #Unix
 TAPE=/dev/nsa3 #FreeBSD
 export TAPE
</code></pre><h3 id="_1-顯示磁帶-驅動器狀態" tabindex="-1">1：顯示磁帶/驅動器狀態 <a class="header-anchor" href="#_1-顯示磁帶-驅動器狀態" aria-label="Permalink to “1：顯示磁帶/驅動器狀態”">​</a></h3><pre><code>mt status  ### Use default
mt -f /dev/rmt/0  status ### Unix
mt -f /dev/st0 status ### Linux
mt -f /dev/nsa0 status ### FreeBSD
mt -f /dev/rmt/1 status ### Unix unity 1 也就是 tape device no. 1
</code></pre><p>你可以像下面一樣使用 shell 循環語句遍歷一個系統並定位其所有的磁帶驅動器：</p><pre><code>for d in 0 1 2 3 4 5
do
 mt -f &quot;/dev/rmt/\${d}&quot; status
done
</code></pre><h3 id="_2-倒帶" tabindex="-1">2：倒帶 <a class="header-anchor" href="#_2-倒帶" aria-label="Permalink to “2：倒帶”">​</a></h3><pre><code>mt rew
mt rewind
mt -f /dev/mt/0 rewind
mt -f /dev/st0 rewind
</code></pre><h3 id="_3-彈出磁帶" tabindex="-1">3：彈出磁帶 <a class="header-anchor" href="#_3-彈出磁帶" aria-label="Permalink to “3：彈出磁帶”">​</a></h3><pre><code>mt off
mt offline
mt eject
mt -f /dev/mt/0 off
mt -f /dev/st0 eject
</code></pre><h3 id="_4-擦除磁帶-倒帶-在支持的情況下卸載磁帶" tabindex="-1">4：擦除磁帶（倒帶，在支持的情況下卸載磁帶） <a class="header-anchor" href="#_4-擦除磁帶-倒帶-在支持的情況下卸載磁帶" aria-label="Permalink to “4：擦除磁帶（倒帶，在支持的情況下卸載磁帶）”">​</a></h3><pre><code>mt erase
mt -f /dev/st0 erase  #Linux
mt -f /dev/rmt/0 erase #Unix
</code></pre><h3 id="_5-張緊磁帶盒" tabindex="-1">5：張緊磁帶盒 <a class="header-anchor" href="#_5-張緊磁帶盒" aria-label="Permalink to “5：張緊磁帶盒”">​</a></h3><p>如果磁帶在讀取時發生錯誤，你重新張緊磁帶，清潔磁帶驅動器，像下面這樣再試一次：</p><pre><code>mt retension
mt -f /dev/rmt/1 retension #Unix
mt -f /dev/st0 retension #Linux
</code></pre><h3 id="_6-在磁帶當前位置寫入-eof-標記" tabindex="-1">6：在磁帶當前位置寫入 EOF 標記 <a class="header-anchor" href="#_6-在磁帶當前位置寫入-eof-標記" aria-label="Permalink to “6：在磁帶當前位置寫入 EOF 標記”">​</a></h3><pre><code>mt eof
mt weof
mt -f /dev/st0 eof
</code></pre><h3 id="_7-將磁帶前進指定的文件標記數目-即跳過指定個-eof-標記" tabindex="-1">7：將磁帶前進指定的文件標記數目，即跳過指定個 EOF 標記 <a class="header-anchor" href="#_7-將磁帶前進指定的文件標記數目-即跳過指定個-eof-標記" aria-label="Permalink to “7：將磁帶前進指定的文件標記數目，即跳過指定個 EOF 標記”">​</a></h3><p>磁帶定位在下一個文件的第一個塊，即磁帶會定位在下一區域的第一個塊（見圖01）：</p><pre><code>mt fsf
mt -f /dev/rmt/0 fsf
mt -f /dev/rmt/1 fsf 1 #go 1 forward file/tape (see fig.01)
</code></pre><h3 id="_8-將磁帶後退指定的文件標記數目-即倒帶指定個-eof-標記" tabindex="-1">8：將磁帶後退指定的文件標記數目，即倒帶指定個 EOF 標記 <a class="header-anchor" href="#_8-將磁帶後退指定的文件標記數目-即倒帶指定個-eof-標記" aria-label="Permalink to “8：將磁帶後退指定的文件標記數目，即倒帶指定個 EOF 標記”">​</a></h3><p>磁帶定位在下一個文件的第一個塊，即磁帶會定位在 EOF 標記之後（見圖01）：</p><pre><code>mt bsf
mt -f /dev/rmt/1 bsf
mt -f /dev/rmt/1 bsf 1 #go 1 backward file/tape (see fig.01)
</code></pre><p>這裏是磁帶定位命令列表：</p><pre><code>   fsf    前進指定的文件標記數目。磁帶定位在下一個文件的第一塊。

   fsfm   前進指定的文件標記數目。磁帶定位在前一文件的最後一塊。

   bsf    後退指定的文件標記數目。磁帶定位在前一文件的最後一塊。

   bsfm   後退指定的文件標記數目。磁帶定位在下一個文件的第一塊。

   asf    磁帶定位在指定文件標記數目的開始位置。定位通過先倒帶，再前進指定的文件標記數目來實現。

   fsr    前進指定的記錄數。

   bsr    後退指定的記錄數。

   fss    （SCSI tapes）前進指定的 setmarks。

   bss    （SCSI tapes）後退指定的 setmarks。
</code></pre><h3 id="基本備份命令" tabindex="-1">基本備份命令 <a class="header-anchor" href="#基本備份命令" aria-label="Permalink to “基本備份命令”">​</a></h3><p>讓我們來看看備份和恢復命令。</p><h3 id="_9-備份目錄-tar-格式" tabindex="-1">9：備份目錄（tar 格式） <a class="header-anchor" href="#_9-備份目錄-tar-格式" aria-label="Permalink to “9：備份目錄（tar 格式）”">​</a></h3><pre><code>tar cvf /dev/rmt/0n /etc
tar cvf /dev/st0 /etc
</code></pre><h3 id="_10-恢復目錄-tar-格式" tabindex="-1">10：恢復目錄（tar 格式） <a class="header-anchor" href="#_10-恢復目錄-tar-格式" aria-label="Permalink to “10：恢復目錄（tar 格式）”">​</a></h3><pre><code>tar xvf /dev/rmt/0n -C /path/to/restore
tar xvf /dev/st0 -C /tmp
</code></pre><h3 id="_11-列出或檢查磁帶內容-tar-格式" tabindex="-1">11：列出或檢查磁帶內容（tar 格式） <a class="header-anchor" href="#_11-列出或檢查磁帶內容-tar-格式" aria-label="Permalink to “11：列出或檢查磁帶內容（tar 格式）”">​</a></h3><pre><code>mt -f /dev/st0 rewind; dd if=/dev/st0 of=-

### tar 格式 ###
tar tvf {DEVICE} {Directory-FileName}
tar tvf /dev/st0
tar tvf /dev/st0 desktop
tar tvf /dev/rmt/0 foo &gt; list.txt
</code></pre><h3 id="_12-使用-dump-或-ufsdump-備份分區" tabindex="-1">12：使用 dump 或 ufsdump 備份分區 <a class="header-anchor" href="#_12-使用-dump-或-ufsdump-備份分區" aria-label="Permalink to “12：使用 dump 或 ufsdump 備份分區”">​</a></h3><pre><code>### Unix 備份 c0t0d0s2 分區 ###
ufsdump 0uf /dev/rmt/0  /dev/rdsk/c0t0d0s2

### Linux 備份 /home 分區 ###
dump 0uf /dev/nst0 /dev/sda5
dump 0uf /dev/nst0 /home

### FreeBSD 備份 /usr 分區 ###
dump -0aL -b64 -f /dev/nsa0 /usr
</code></pre><h3 id="_12-使用-ufsrestore-或-restore-恢復分區" tabindex="-1">12：使用 ufsrestore 或 restore 恢復分區 <a class="header-anchor" href="#_12-使用-ufsrestore-或-restore-恢復分區" aria-label="Permalink to “12：使用 ufsrestore 或 restore 恢復分區”">​</a></h3><pre><code>### Unix ###
ufsrestore xf /dev/rmt/0
### Unix 交互式恢復 ###
ufsrestore if /dev/rmt/0

### Linux ###
restore rf /dev/nst0
### 從磁帶媒介上的第6個備份交互式恢復 ###
restore isf 6 /dev/nst0

### FreeBSD 恢復 ufsdump 格式 ###
restore -i -f /dev/nsa0
</code></pre><h3 id="_13-從磁帶開頭開始寫入-見圖02" tabindex="-1">13：從磁帶開頭開始寫入（見圖02） <a class="header-anchor" href="#_13-從磁帶開頭開始寫入-見圖02" aria-label="Permalink to “13：從磁帶開頭開始寫入（見圖02）”">​</a></h3><pre><code>### 這會覆蓋磁帶上的所有數據 ###
mt -f /dev/st1 rewind

### 備份 home ###
tar cvf /dev/st1 /home

### 離線並卸載磁帶 ###
mt -f /dev/st0 offline
</code></pre><p>從磁帶開頭開始恢復：</p><pre><code>mt -f /dev/st0 rewind
tar xvf /dev/st0
mt -f /dev/st0 offline
</code></pre><h3 id="_14-從最後一個-tar-後開始寫入-見圖02" tabindex="-1">14：從最後一個 tar 後開始寫入（見圖02） <a class="header-anchor" href="#_14-從最後一個-tar-後開始寫入-見圖02" aria-label="Permalink to “14：從最後一個 tar 後開始寫入（見圖02）”">​</a></h3><pre><code>### 這會保留之前寫入的數據 ###
mt -f /dev/st1 eom

### 備份 home ###
tar cvf /dev/st1 /home

### 卸載 ###
mt -f /dev/st0 offline
</code></pre><h3 id="_15-從-tar-number-2-後開始寫入-見圖02" tabindex="-1">15：從 tar number 2 後開始寫入（見圖02） <a class="header-anchor" href="#_15-從-tar-number-2-後開始寫入-見圖02" aria-label="Permalink to “15：從 tar number 2 後開始寫入（見圖02）”">​</a></h3><pre><code>### 在 tar number 2 之後寫入（應該是 2+1）###
mt -f /dev/st0 asf 3
tar cvf /dev/st0 /usr

### asf 等效於 fsf ###
mt -f /dev/sf0 rewind
mt -f /dev/st0 fsf 2
</code></pre><p>從 tar number 2 恢復 tar：</p><pre><code>mt -f /dev/st0 asf 3
tar xvf /dev/st0
mt -f /dev/st0 offline
</code></pre><h3 id="如何驗證使用-tar-創建的備份磁帶" tabindex="-1">如何驗證使用 tar 創建的備份磁帶？ <a class="header-anchor" href="#如何驗證使用-tar-創建的備份磁帶" aria-label="Permalink to “如何驗證使用 tar 創建的備份磁帶？”">​</a></h3>`,77)),i("p",null,[e[1]||(e[1]=n("定期做全系統修復和服務測試是很重要的，這是唯一確定整個系統正確工作的途徑。參見我們的",-1)),t(a,{href:"http://www.cyberciti.biz/faq/unix-verify-tape-backup/"},{default:r(()=>[...e[0]||(e[0]=[n("驗證 tar 命令磁帶備份的教程",-1)])]),_:1}),e[2]||(e[2]=n("以獲取更多信息。",-1))]),e[25]||(e[25]=d(`<h3 id="示例-shell-腳本" tabindex="-1">示例 shell 腳本 <a class="header-anchor" href="#示例-shell-腳本" aria-label="Permalink to “示例 shell 腳本”">​</a></h3><pre><code>#!/bin/bash
# A UNIX / Linux shell script to backup dirs to tape device like /dev/st0 (linux)
# This script make both full and incremental backups.
# You need at two sets of five  tapes. Label each tape as Mon, Tue, Wed, Thu and Fri.
# You can run script at midnight or early morning each day using cronjons.
# The operator or sys admin can replace the tape every day after the script has done.
# Script must run as root or configure permission via sudo.
# -------------------------------------------------------------------------
# Copyright (c) 1999 Vivek Gite &lt;vivek@nixcraft.com&gt;
# This script is licensed under GNU GPL version 2.0 or above
# -------------------------------------------------------------------------
# This script is part of nixCraft shell script collection (NSSC)
# Visit http://bash.cyberciti.biz/ for more information.
# -------------------------------------------------------------------------
# Last updated on : March-2003 - Added log file support.
# Last updated on : Feb-2007 - Added support for excluding files / dirs.
# -------------------------------------------------------------------------
LOGBASE=/root/backup/log

# Backup dirs; do not prefix /
BACKUP_ROOT_DIR=&quot;home sales&quot;

# Get todays day like Mon, Tue and so on
NOW=$(date +&quot;%a&quot;)

# Tape devie name
TAPE=&quot;/dev/st0&quot;

# Exclude file
TAR_ARGS=&quot;&quot;
EXCLUDE_CONF=/root/.backup.exclude.conf

# Backup Log file
LOGFIILE=$LOGBASE/$NOW.backup.log

# Path to binaries
TAR=/bin/tar
MT=/bin/mt
MKDIR=/bin/mkdir

# ------------------------------------------------------------------------
# Excluding files when using tar
# Create a file called $EXCLUDE_CONF using a text editor
# Add files matching patterns such as follows (regex allowed):
# home/vivek/iso
# home/vivek/*.cpp~
# ------------------------------------------------------------------------
[ -f $EXCLUDE_CONF ] &amp;&amp; TAR_ARGS=&quot;-X $EXCLUDE_CONF&quot;

#### Custom functions #####
# Make a full backup
full_backup(){
	local old=$(pwd)
	cd /
	$TAR $TAR_ARGS -cvpf $TAPE $BACKUP_ROOT_DIR
	$MT -f $TAPE rewind
	$MT -f $TAPE offline
	cd $old
}

# Make a  partial backup
partial_backup(){
	local old=$(pwd)
	cd /
	$TAR $TAR_ARGS -cvpf $TAPE -N &quot;$(date -d &#39;1 day ago&#39;)&quot; $BACKUP_ROOT_DIR
	$MT -f $TAPE rewind
	$MT -f $TAPE offline
	cd $old
}

# Make sure all dirs exits
verify_backup_dirs(){
	local s=0
	for d in $BACKUP_ROOT_DIR
	do
		if [ ! -d /$d ];
		then
			echo &quot;Error : /$d directory does not exits!&quot;
			s=1
		fi
	done
	# if not; just die
	[ $s -eq 1 ] &amp;&amp; exit 1
}

#### Main logic ####

# Make sure log dir exits
[ ! -d $LOGBASE ] &amp;&amp; $MKDIR -p $LOGBASE

# Verify dirs
verify_backup_dirs

# Okay let us start backup procedure
# If it is Monday make a full backup;
# For Tue to Fri make a partial backup
# Weekend no backups
case $NOW in
	Mon)	full_backup;;
	Tue|Wed|Thu|Fri) 	partial_backup;;
	*) ;;
esac &gt; $LOGFIILE 2&gt;&amp;1
</code></pre><h3 id="關於第三方備份工具" tabindex="-1">關於第三方備份工具 <a class="header-anchor" href="#關於第三方備份工具" aria-label="Permalink to “關於第三方備份工具”">​</a></h3><p>Linux 和類Unix系統都提供了許多第三方工具，可以用來安排備份，包括磁帶備份在內，如：</p><ul><li>Amanda</li><li>Bacula</li><li>rsync</li><li>duplicity</li><li>rsnapshot</li></ul><p>另行參閲</p>`,6)),i("ul",null,[i("li",null,[e[8]||(e[8]=n("Man pages - ",-1)),t(a,{href:"http://www.manpager.com/linux/man1/mt.1.html"},{default:r(()=>[...e[3]||(e[3]=[n("mt(1)",-1)])]),_:1}),e[9]||(e[9]=n(", ",-1)),t(a,{href:"http://www.manpager.com/linux/man1/mtx.1.html"},{default:r(()=>[...e[4]||(e[4]=[n("mtx(1)",-1)])]),_:1}),e[10]||(e[10]=n(", ",-1)),t(a,{href:"http://www.manpager.com/linux/man1/tar.1.html"},{default:r(()=>[...e[5]||(e[5]=[n("tar(1)",-1)])]),_:1}),e[11]||(e[11]=n(", ",-1)),t(a,{href:"http://www.manpager.com/linux/man8/dump.8.html"},{default:r(()=>[...e[6]||(e[6]=[n("dump(8)",-1)])]),_:1}),e[12]||(e[12]=n(", ",-1)),t(a,{href:"http://www.manpager.com/linux/man8/restore.8.html"},{default:r(()=>[...e[7]||(e[7]=[n("restore(8)",-1)])]),_:1})])]),e[26]||(e[26]=i("hr",null,null,-1)),i("p",null,[e[14]||(e[14]=n("via: ",-1)),t(a,{href:"http://www.cyberciti.biz/hardware/unix-linux-basic-tape-management-commands/"},{default:r(()=>[...e[13]||(e[13]=[n("http://www.cyberciti.biz/hardware/unix-linux-basic-tape-management-commands/",-1)])]),_:1})]),i("p",null,[e[17]||(e[17]=n("作者：Vivek Gite 譯者：",-1)),t(a,{href:"https://github.com/alim0x"},{default:r(()=>[...e[15]||(e[15]=[n("alim0x",-1)])]),_:1}),e[18]||(e[18]=n(" 校對：",-1)),t(a,{href:"https://github.com/tinyeyeser"},{default:r(()=>[...e[16]||(e[16]=[n("Mr小眼兒",-1)])]),_:1})]),i("p",null,[e[21]||(e[21]=n("本文由 ",-1)),t(a,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[19]||(e[19]=[n("LCTT",-1)])]),_:1}),e[22]||(e[22]=n(" 原創編譯，",-1)),t(a,{href:"https://linux.cn/"},{default:r(()=>[...e[20]||(e[20]=[n("Linux中國",-1)])]),_:1}),e[23]||(e[23]=n(" 榮譽推出",-1))])])}const g=s(p,[["render",f]]);export{T as __pageData,g as default};
