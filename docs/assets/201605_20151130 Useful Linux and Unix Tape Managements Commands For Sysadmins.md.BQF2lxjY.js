import{_ as s,a0 as l,w as o,s as m,ao as d,I as i,x as n,a1 as t,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"给系统管理员的15条实用 Linux/Unix 磁带管理命令 | LCTT x X-CMD","titleTemplate":false,"description":"给系统管理员的15条实用 Linux/Unix 磁带管理命令 | LCTT (201605) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"给系统管理员的15条实用 Linux/Unix 磁带管理命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"给系统管理员的15条实用 Linux/Unix 磁带管理命令 | LCTT (201605) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201605/20151130 Useful Linux and Unix Tape Managements Commands For Sysadmins","title":"给系统管理员的15条实用 Linux/Unix 磁带管理命令","tag":"201605","desc":""},"relativePath":"201605/20151130 Useful Linux and Unix Tape Managements Commands For Sysadmins.md","filePath":"[post].md"}'),p={name:"201605/20151130 Useful Linux and Unix Tape Managements Commands For Sysadmins.md"};function f(u,e,h,c,x,v){const a=l("Link");return o(),m("div",null,[e[24]||(e[24]=d(`<h1 id="给系统管理员的15条实用-linux-unix-磁带管理命令" tabindex="-1">给系统管理员的15条实用 Linux/Unix 磁带管理命令 <a class="header-anchor" href="#给系统管理员的15条实用-linux-unix-磁带管理命令" aria-label="Permalink to “给系统管理员的15条实用 Linux/Unix 磁带管理命令”">​</a></h1><p>磁带设备应只用于定期的文件归档或将数据从一台服务器传送至另一台。通常磁带设备与 Unix 机器连接，用 mt 或 mtx 控制。强烈建议您将所有的数据同时备份到磁盘（也许是云中）和磁带设备中。在本教程中你将会了解到：</p><ul><li>磁带设备名</li><li>管理磁带驱动器的基本命令</li><li>基本的备份和恢复命令</li></ul><h3 id="为什么备份" tabindex="-1">为什么备份？ <a class="header-anchor" href="#为什么备份" aria-label="Permalink to “为什么备份？”">​</a></h3><p>一个备份计划对定期备份文件来说很有必要，如果你宁愿选择不备份，那么丢失重要数据的风险会大大增加。有了备份，你就有了从磁盘故障中恢复的能力。备份还可以帮助你抵御：</p><ul><li>意外的文件删除</li><li>文件或文件系统损坏</li><li>服务器完全毁坏，包括由于火灾或其他问题导致的同盘备份毁坏</li><li>硬盘或 SSD 崩溃</li><li>病毒或勒索软件破坏或删除文件</li></ul><p>你可以使用磁带归档备份整个服务器并将其离线存储。</p><h3 id="理解磁带文件标记和块大小" tabindex="-1">理解磁带文件标记和块大小 <a class="header-anchor" href="#理解磁带文件标记和块大小" aria-label="Permalink to “理解磁带文件标记和块大小”">​</a></h3><p><img src="http://s0.cyberciti.org/uploads/cms/2015/10/tape-format.jpg" alt="Fig.01: Tape file marks"></p><p><em>图01：磁带文件标记</em></p><p>每个磁带设备能存储多个备份文件。磁带备份文件通过 cpio，tar，dd 等命令创建。同时，磁带设备可以由多种程序打开、写入数据、及关闭。你可以存储若干备份（磁带文件）到一个物理磁带上。在每个磁带文件之间有个“磁带文件标记”。这用来指示一个物理磁带上磁带文件的结尾以及另一个文件的开始。你需要使用 mt 命令来定位磁带（快进，倒带和标记）。</p><h4 id="磁带上的数据是如何存储的" tabindex="-1">磁带上的数据是如何存储的 <a class="header-anchor" href="#磁带上的数据是如何存储的" aria-label="Permalink to “磁带上的数据是如何存储的”">​</a></h4><p><img src="http://s0.cyberciti.org/uploads/cms/2015/10/how-data-is-stored-on-a-tape.jpg" alt="Fig.02: How data is stored on a tape"></p><p><em>图02：磁带上的数据是如何存储的</em></p><p>所有的数据使用 tar 以连续磁带存储格式连续地存储。第一个磁带归档会从磁带的物理开始端开始存储（tar #0）。接下来的就是 tar #1，以此类推。</p><h3 id="unix-上的磁带设备名" tabindex="-1">Unix 上的磁带设备名 <a class="header-anchor" href="#unix-上的磁带设备名" aria-label="Permalink to “Unix 上的磁带设备名”">​</a></h3><ol><li>/dev/rmt/0 或 /dev/rmt/1 或 /dev/rmt/[0-127] ：Unix 上的常规磁带设备名。磁带自动倒回。</li><li>/dev/rmt/0n ：以无倒回为特征，换言之，磁带使用之后，停留在当前状态等待下个命令。</li><li>/dev/rmt/0b ：使用磁带接口，也就是 BSD 的行为。各种类型的操作系统比如 AIX，Windows，Linux，FreeBSD 等的行为更有可读性。</li><li>/dev/rmt/0l ：设置密度为低。</li><li>/dev/rmt/0m ：设置密度为中。</li><li>/dev/rmt/0u ：设置密度为高。</li><li>/dev/rmt/0c ：设置密度为压缩。</li><li>/dev/st[0-9] ：Linux 特定 SCSI 磁带设备名。</li><li>/dev/sa[0-9] ：FreeBSD 特定 SCSI 磁带设备名。</li><li>/dev/esa0 ：FreeBSD 特定 SCSI 磁带设备名，在关闭时弹出（如果可以的话）。</li></ol><h4 id="磁带设备名示例" tabindex="-1">磁带设备名示例 <a class="header-anchor" href="#磁带设备名示例" aria-label="Permalink to “磁带设备名示例”">​</a></h4><ul><li>/dev/rmt/1cn 指明正在使用 unity 1，压缩密度，无倒回。</li><li>/dev/rmt/0hb 指明正在使用 unity 0，高密度，BSD 行为。</li><li>Linux 上的自动倒回 SCSI 磁带设备名：/dev/st0</li><li>Linux 上的无倒回 SCSI 磁带设备名：/dev/nst0</li><li>FreeBSD 上的自动倒回 SCSI 磁带设备名：/dev/sa0</li><li>FreeBSD 上的无倒回 SCSI 磁带设备名：/dev/nsa0</li></ul><h4 id="如何列出已安装的-scsi-磁带设备" tabindex="-1">如何列出已安装的 scsi 磁带设备？ <a class="header-anchor" href="#如何列出已安装的-scsi-磁带设备" aria-label="Permalink to “如何列出已安装的 scsi 磁带设备？”">​</a></h4><p>输入下列命令：</p><pre><code>### Linux（更多信息参阅 man） ###
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
</code></pre><p>来自我的 Linux 服务器的输出示例：</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/10/linux-find-tape-devices-command.jpg" alt="Fig.03: Installed tape devices on Linux server"></p><p><em>图03：Linux 服务器上已安装的磁带设备</em></p><h3 id="mt-命令示例" tabindex="-1">mt 命令示例 <a class="header-anchor" href="#mt-命令示例" aria-label="Permalink to “mt 命令示例”">​</a></h3><p>在 Linux 和类 Unix 系统上，mt 命令用来控制磁带驱动器的操作，比如查看状态或查找磁带上的文件或写入磁带控制标记。下列大多数命令需要作为 root 用户执行。语法如下：</p><pre><code>mt -f /tape/device/name operation
</code></pre><h4 id="设置环境" tabindex="-1">设置环境 <a class="header-anchor" href="#设置环境" aria-label="Permalink to “设置环境”">​</a></h4><p>你可以设置 TAPE shell 变量。这是磁带驱动器的路径名。在 FreeBSD 上默认的（如果变量没有设置，而不是 null）是 /dev/nsa0。可以通过 mt 命令的 -f 参数传递变量覆盖它，就像下面解释的那样。</p><pre><code> ### 添加到你的 shell 配置文件 ###
 TAPE=/dev/st1 #Linux
 TAPE=/dev/rmt/2 #Unix
 TAPE=/dev/nsa3 #FreeBSD
 export TAPE
</code></pre><h3 id="_1-显示磁带-驱动器状态" tabindex="-1">1：显示磁带/驱动器状态 <a class="header-anchor" href="#_1-显示磁带-驱动器状态" aria-label="Permalink to “1：显示磁带/驱动器状态”">​</a></h3><pre><code>mt status  ### Use default
mt -f /dev/rmt/0  status ### Unix
mt -f /dev/st0 status ### Linux
mt -f /dev/nsa0 status ### FreeBSD
mt -f /dev/rmt/1 status ### Unix unity 1 也就是 tape device no. 1
</code></pre><p>你可以像下面一样使用 shell 循环语句遍历一个系统并定位其所有的磁带驱动器：</p><pre><code>for d in 0 1 2 3 4 5
do
 mt -f &quot;/dev/rmt/\${d}&quot; status
done
</code></pre><h3 id="_2-倒带" tabindex="-1">2：倒带 <a class="header-anchor" href="#_2-倒带" aria-label="Permalink to “2：倒带”">​</a></h3><pre><code>mt rew
mt rewind
mt -f /dev/mt/0 rewind
mt -f /dev/st0 rewind
</code></pre><h3 id="_3-弹出磁带" tabindex="-1">3：弹出磁带 <a class="header-anchor" href="#_3-弹出磁带" aria-label="Permalink to “3：弹出磁带”">​</a></h3><pre><code>mt off
mt offline
mt eject
mt -f /dev/mt/0 off
mt -f /dev/st0 eject
</code></pre><h3 id="_4-擦除磁带-倒带-在支持的情况下卸载磁带" tabindex="-1">4：擦除磁带（倒带，在支持的情况下卸载磁带） <a class="header-anchor" href="#_4-擦除磁带-倒带-在支持的情况下卸载磁带" aria-label="Permalink to “4：擦除磁带（倒带，在支持的情况下卸载磁带）”">​</a></h3><pre><code>mt erase
mt -f /dev/st0 erase  #Linux
mt -f /dev/rmt/0 erase #Unix
</code></pre><h3 id="_5-张紧磁带盒" tabindex="-1">5：张紧磁带盒 <a class="header-anchor" href="#_5-张紧磁带盒" aria-label="Permalink to “5：张紧磁带盒”">​</a></h3><p>如果磁带在读取时发生错误，你重新张紧磁带，清洁磁带驱动器，像下面这样再试一次：</p><pre><code>mt retension
mt -f /dev/rmt/1 retension #Unix
mt -f /dev/st0 retension #Linux
</code></pre><h3 id="_6-在磁带当前位置写入-eof-标记" tabindex="-1">6：在磁带当前位置写入 EOF 标记 <a class="header-anchor" href="#_6-在磁带当前位置写入-eof-标记" aria-label="Permalink to “6：在磁带当前位置写入 EOF 标记”">​</a></h3><pre><code>mt eof
mt weof
mt -f /dev/st0 eof
</code></pre><h3 id="_7-将磁带前进指定的文件标记数目-即跳过指定个-eof-标记" tabindex="-1">7：将磁带前进指定的文件标记数目，即跳过指定个 EOF 标记 <a class="header-anchor" href="#_7-将磁带前进指定的文件标记数目-即跳过指定个-eof-标记" aria-label="Permalink to “7：将磁带前进指定的文件标记数目，即跳过指定个 EOF 标记”">​</a></h3><p>磁带定位在下一个文件的第一个块，即磁带会定位在下一区域的第一个块（见图01）：</p><pre><code>mt fsf
mt -f /dev/rmt/0 fsf
mt -f /dev/rmt/1 fsf 1 #go 1 forward file/tape (see fig.01)
</code></pre><h3 id="_8-将磁带后退指定的文件标记数目-即倒带指定个-eof-标记" tabindex="-1">8：将磁带后退指定的文件标记数目，即倒带指定个 EOF 标记 <a class="header-anchor" href="#_8-将磁带后退指定的文件标记数目-即倒带指定个-eof-标记" aria-label="Permalink to “8：将磁带后退指定的文件标记数目，即倒带指定个 EOF 标记”">​</a></h3><p>磁带定位在下一个文件的第一个块，即磁带会定位在 EOF 标记之后（见图01）：</p><pre><code>mt bsf
mt -f /dev/rmt/1 bsf
mt -f /dev/rmt/1 bsf 1 #go 1 backward file/tape (see fig.01)
</code></pre><p>这里是磁带定位命令列表：</p><pre><code>   fsf    前进指定的文件标记数目。磁带定位在下一个文件的第一块。

   fsfm   前进指定的文件标记数目。磁带定位在前一文件的最后一块。

   bsf    后退指定的文件标记数目。磁带定位在前一文件的最后一块。

   bsfm   后退指定的文件标记数目。磁带定位在下一个文件的第一块。

   asf    磁带定位在指定文件标记数目的开始位置。定位通过先倒带，再前进指定的文件标记数目来实现。

   fsr    前进指定的记录数。

   bsr    后退指定的记录数。

   fss    （SCSI tapes）前进指定的 setmarks。

   bss    （SCSI tapes）后退指定的 setmarks。
</code></pre><h3 id="基本备份命令" tabindex="-1">基本备份命令 <a class="header-anchor" href="#基本备份命令" aria-label="Permalink to “基本备份命令”">​</a></h3><p>让我们来看看备份和恢复命令。</p><h3 id="_9-备份目录-tar-格式" tabindex="-1">9：备份目录（tar 格式） <a class="header-anchor" href="#_9-备份目录-tar-格式" aria-label="Permalink to “9：备份目录（tar 格式）”">​</a></h3><pre><code>tar cvf /dev/rmt/0n /etc
tar cvf /dev/st0 /etc
</code></pre><h3 id="_10-恢复目录-tar-格式" tabindex="-1">10：恢复目录（tar 格式） <a class="header-anchor" href="#_10-恢复目录-tar-格式" aria-label="Permalink to “10：恢复目录（tar 格式）”">​</a></h3><pre><code>tar xvf /dev/rmt/0n -C /path/to/restore
tar xvf /dev/st0 -C /tmp
</code></pre><h3 id="_11-列出或检查磁带内容-tar-格式" tabindex="-1">11：列出或检查磁带内容（tar 格式） <a class="header-anchor" href="#_11-列出或检查磁带内容-tar-格式" aria-label="Permalink to “11：列出或检查磁带内容（tar 格式）”">​</a></h3><pre><code>mt -f /dev/st0 rewind; dd if=/dev/st0 of=-

### tar 格式 ###
tar tvf {DEVICE} {Directory-FileName}
tar tvf /dev/st0
tar tvf /dev/st0 desktop
tar tvf /dev/rmt/0 foo &gt; list.txt
</code></pre><h3 id="_12-使用-dump-或-ufsdump-备份分区" tabindex="-1">12：使用 dump 或 ufsdump 备份分区 <a class="header-anchor" href="#_12-使用-dump-或-ufsdump-备份分区" aria-label="Permalink to “12：使用 dump 或 ufsdump 备份分区”">​</a></h3><pre><code>### Unix 备份 c0t0d0s2 分区 ###
ufsdump 0uf /dev/rmt/0  /dev/rdsk/c0t0d0s2

### Linux 备份 /home 分区 ###
dump 0uf /dev/nst0 /dev/sda5
dump 0uf /dev/nst0 /home

### FreeBSD 备份 /usr 分区 ###
dump -0aL -b64 -f /dev/nsa0 /usr
</code></pre><h3 id="_12-使用-ufsrestore-或-restore-恢复分区" tabindex="-1">12：使用 ufsrestore 或 restore 恢复分区 <a class="header-anchor" href="#_12-使用-ufsrestore-或-restore-恢复分区" aria-label="Permalink to “12：使用 ufsrestore 或 restore 恢复分区”">​</a></h3><pre><code>### Unix ###
ufsrestore xf /dev/rmt/0
### Unix 交互式恢复 ###
ufsrestore if /dev/rmt/0

### Linux ###
restore rf /dev/nst0
### 从磁带媒介上的第6个备份交互式恢复 ###
restore isf 6 /dev/nst0

### FreeBSD 恢复 ufsdump 格式 ###
restore -i -f /dev/nsa0
</code></pre><h3 id="_13-从磁带开头开始写入-见图02" tabindex="-1">13：从磁带开头开始写入（见图02） <a class="header-anchor" href="#_13-从磁带开头开始写入-见图02" aria-label="Permalink to “13：从磁带开头开始写入（见图02）”">​</a></h3><pre><code>### 这会覆盖磁带上的所有数据 ###
mt -f /dev/st1 rewind

### 备份 home ###
tar cvf /dev/st1 /home

### 离线并卸载磁带 ###
mt -f /dev/st0 offline
</code></pre><p>从磁带开头开始恢复：</p><pre><code>mt -f /dev/st0 rewind
tar xvf /dev/st0
mt -f /dev/st0 offline
</code></pre><h3 id="_14-从最后一个-tar-后开始写入-见图02" tabindex="-1">14：从最后一个 tar 后开始写入（见图02） <a class="header-anchor" href="#_14-从最后一个-tar-后开始写入-见图02" aria-label="Permalink to “14：从最后一个 tar 后开始写入（见图02）”">​</a></h3><pre><code>### 这会保留之前写入的数据 ###
mt -f /dev/st1 eom

### 备份 home ###
tar cvf /dev/st1 /home

### 卸载 ###
mt -f /dev/st0 offline
</code></pre><h3 id="_15-从-tar-number-2-后开始写入-见图02" tabindex="-1">15：从 tar number 2 后开始写入（见图02） <a class="header-anchor" href="#_15-从-tar-number-2-后开始写入-见图02" aria-label="Permalink to “15：从 tar number 2 后开始写入（见图02）”">​</a></h3><pre><code>### 在 tar number 2 之后写入（应该是 2+1）###
mt -f /dev/st0 asf 3
tar cvf /dev/st0 /usr

### asf 等效于 fsf ###
mt -f /dev/sf0 rewind
mt -f /dev/st0 fsf 2
</code></pre><p>从 tar number 2 恢复 tar：</p><pre><code>mt -f /dev/st0 asf 3
tar xvf /dev/st0
mt -f /dev/st0 offline
</code></pre><h3 id="如何验证使用-tar-创建的备份磁带" tabindex="-1">如何验证使用 tar 创建的备份磁带？ <a class="header-anchor" href="#如何验证使用-tar-创建的备份磁带" aria-label="Permalink to “如何验证使用 tar 创建的备份磁带？”">​</a></h3>`,77)),i("p",null,[e[1]||(e[1]=n("定期做全系统修复和服务测试是很重要的，这是唯一确定整个系统正确工作的途径。参见我们的",-1)),t(a,{href:"http://www.cyberciti.biz/faq/unix-verify-tape-backup/"},{default:r(()=>[...e[0]||(e[0]=[n("验证 tar 命令磁带备份的教程",-1)])]),_:1}),e[2]||(e[2]=n("以获取更多信息。",-1))]),e[25]||(e[25]=d(`<h3 id="示例-shell-脚本" tabindex="-1">示例 shell 脚本 <a class="header-anchor" href="#示例-shell-脚本" aria-label="Permalink to “示例 shell 脚本”">​</a></h3><pre><code>#!/bin/bash
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
</code></pre><h3 id="关于第三方备份工具" tabindex="-1">关于第三方备份工具 <a class="header-anchor" href="#关于第三方备份工具" aria-label="Permalink to “关于第三方备份工具”">​</a></h3><p>Linux 和类Unix系统都提供了许多第三方工具，可以用来安排备份，包括磁带备份在内，如：</p><ul><li>Amanda</li><li>Bacula</li><li>rsync</li><li>duplicity</li><li>rsnapshot</li></ul><p>另行参阅</p>`,6)),i("ul",null,[i("li",null,[e[8]||(e[8]=n("Man pages - ",-1)),t(a,{href:"http://www.manpager.com/linux/man1/mt.1.html"},{default:r(()=>[...e[3]||(e[3]=[n("mt(1)",-1)])]),_:1}),e[9]||(e[9]=n(", ",-1)),t(a,{href:"http://www.manpager.com/linux/man1/mtx.1.html"},{default:r(()=>[...e[4]||(e[4]=[n("mtx(1)",-1)])]),_:1}),e[10]||(e[10]=n(", ",-1)),t(a,{href:"http://www.manpager.com/linux/man1/tar.1.html"},{default:r(()=>[...e[5]||(e[5]=[n("tar(1)",-1)])]),_:1}),e[11]||(e[11]=n(", ",-1)),t(a,{href:"http://www.manpager.com/linux/man8/dump.8.html"},{default:r(()=>[...e[6]||(e[6]=[n("dump(8)",-1)])]),_:1}),e[12]||(e[12]=n(", ",-1)),t(a,{href:"http://www.manpager.com/linux/man8/restore.8.html"},{default:r(()=>[...e[7]||(e[7]=[n("restore(8)",-1)])]),_:1})])]),e[26]||(e[26]=i("hr",null,null,-1)),i("p",null,[e[14]||(e[14]=n("via: ",-1)),t(a,{href:"http://www.cyberciti.biz/hardware/unix-linux-basic-tape-management-commands/"},{default:r(()=>[...e[13]||(e[13]=[n("http://www.cyberciti.biz/hardware/unix-linux-basic-tape-management-commands/",-1)])]),_:1})]),i("p",null,[e[17]||(e[17]=n("作者：Vivek Gite 译者：",-1)),t(a,{href:"https://github.com/alim0x"},{default:r(()=>[...e[15]||(e[15]=[n("alim0x",-1)])]),_:1}),e[18]||(e[18]=n(" 校对：",-1)),t(a,{href:"https://github.com/tinyeyeser"},{default:r(()=>[...e[16]||(e[16]=[n("Mr小眼儿",-1)])]),_:1})]),i("p",null,[e[21]||(e[21]=n("本文由 ",-1)),t(a,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[19]||(e[19]=[n("LCTT",-1)])]),_:1}),e[22]||(e[22]=n(" 原创编译，",-1)),t(a,{href:"https://linux.cn/"},{default:r(()=>[...e[20]||(e[20]=[n("Linux中国",-1)])]),_:1}),e[23]||(e[23]=n(" 荣誉推出",-1))])])}const g=s(p,[["render",f]]);export{T as __pageData,g as default};
