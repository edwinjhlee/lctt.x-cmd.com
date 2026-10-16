import{_ as s,a0 as i,w as l,s as d,ao as m,I as a,x as t,a1 as r,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"硬盤監控和分析工具——Smartctl | LCTT x X-CMD","titleTemplate":false,"description":"硬盤監控和分析工具——Smartctl | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"硬盤監控和分析工具——Smartctl | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"硬盤監控和分析工具——Smartctl | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141119 Smartctl--Monitoring & Analysis tool for Hard drive","title":"硬盤監控和分析工具——Smartctl","tag":"201501","desc":""},"relativePath":"201501/20141119 Smartctl--Monitoring & Analysis tool for Hard drive.md","filePath":"[post].md"}'),c={name:"201501/20141119 Smartctl--Monitoring & Analysis tool for Hard drive.md"};function u(p,e,S,h,T,g){const n=i("Link");return l(),d("div",null,[e[13]||(e[13]=m(`<h1 id="硬盤監控和分析工具——smartctl" tabindex="-1">硬盤監控和分析工具——Smartctl <a class="header-anchor" href="#硬盤監控和分析工具——smartctl" aria-label="Permalink to “硬盤監控和分析工具——Smartctl”">​</a></h1><p><strong>Smartctl</strong>（S.M.A.R.T 自監控，分析和報告技術）是類Unix系統下實施SMART任務命令列套件或工具，它用於打印SMART<strong>自檢</strong>和<strong>錯誤日誌</strong>，啓用並禁用SMRAT<strong>自動檢測</strong>，以及初始化設備自檢。</p><p>Smartctl對於Linux物理服務器十分有用，在這些服務器上，可以對智能磁盤進行錯誤檢查，並將與<strong>硬件RAID</strong>相關的磁盤信息摘錄下來。</p><p>在本帖中，我們將討論smartctl命令的一些實用樣例。如果你的Linux上海沒有安裝smartctl，請按以下步驟來安裝。</p><h3 id="安裝-smartctl" tabindex="-1">安裝 Smartctl <a class="header-anchor" href="#安裝-smartctl" aria-label="Permalink to “安裝 Smartctl”">​</a></h3><p><strong>對於 Ubuntu</strong></p><pre><code>$ sudo apt-get install smartmontools
</code></pre><p><strong>對於 CentOS &amp; RHEL</strong></p><pre><code># yum install smartmontools
</code></pre><p>###啓動Smartctl服務###</p><p><strong>對於 Ubuntu</strong></p><pre><code>$ sudo /etc/init.d/smartmontools start
</code></pre><p><strong>對於 CentOS &amp; RHEL</strong></p><pre><code># service smartd start ; chkconfig smartd on
</code></pre><h3 id="樣例" tabindex="-1">樣例 <a class="header-anchor" href="#樣例" aria-label="Permalink to “樣例”">​</a></h3><h4 id="樣例-1-檢查磁盤的-smart-功能是否啓用" tabindex="-1">樣例：1 檢查磁盤的 Smart 功能是否啓用 <a class="header-anchor" href="#樣例-1-檢查磁盤的-smart-功能是否啓用" aria-label="Permalink to “樣例：1 檢查磁盤的 Smart 功能是否啓用”">​</a></h4><pre><code>root@linuxtechi:~# smartctl -i /dev/sdb
smartctl 6.2 2013-07-26 r3841 [x86_64-linux-3.13.0-32-generic] (local build)
Copyright (C) 2002-13, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Family:     Seagate Momentus 5400.6
Device Model:     ST9320325AS
Serial Number:    5VD2V59T
LU WWN Device Id: 5 000c50 020a37ec4
Firmware Version: 0002BSM1
User Capacity:    320,072,933,376 bytes [320 GB]
Sector Size:      512 bytes logical/physical
Rotation Rate:    5400 rpm
Device is:        In smartctl database [for details use: -P show]
ATA Version is:   ATA8-ACS T13/1699-D revision 4
SATA Version is:  SATA 2.6, 1.5 Gb/s
Local Time is:    Sun Nov 16 12:32:09 2014 IST
SMART support is: Available - device has SMART capability.
SMART support is: Enabled
</code></pre><p>這裏‘/dev/sdb’是你的硬盤。上面輸出中的最後兩行顯示了SMART功能已啓用。</p><h4 id="樣例-2-啓用磁盤的-smart-功能" tabindex="-1">樣例：2 啓用磁盤的 Smart 功能 <a class="header-anchor" href="#樣例-2-啓用磁盤的-smart-功能" aria-label="Permalink to “樣例：2 啓用磁盤的 Smart 功能”">​</a></h4><pre><code>root@linuxtechi:~# smartctl -s on /dev/sdb
smartctl 6.2 2013-07-26 r3841 [x86_64-linux-3.13.0-32-generic] (local build)
Copyright (C) 2002-13, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF ENABLE/DISABLE COMMANDS SECTION ===
SMART Enabled.
</code></pre><h4 id="樣例-3-禁用磁盤的-smart-功能" tabindex="-1">樣例：3 禁用磁盤的 Smart 功能 <a class="header-anchor" href="#樣例-3-禁用磁盤的-smart-功能" aria-label="Permalink to “樣例：3 禁用磁盤的 Smart 功能”">​</a></h4><pre><code>root@linuxtechi:~# smartctl -s off  /dev/sdb
smartctl 6.2 2013-07-26 r3841 [x86_64-linux-3.13.0-32-generic] (local build)
Copyright (C) 2002-13, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF ENABLE/DISABLE COMMANDS SECTION ===
SMART Disabled. Use option -s with argument &#39;on&#39; to enable it.
</code></pre><h4 id="樣例-4-顯示磁盤的詳細-smart-信息" tabindex="-1">樣例：4 顯示磁盤的詳細 Smart 信息 <a class="header-anchor" href="#樣例-4-顯示磁盤的詳細-smart-信息" aria-label="Permalink to “樣例：4 顯示磁盤的詳細 Smart 信息”">​</a></h4><pre><code>root@linuxtechi:~# smartctl -a /dev/sdb              // For IDE drive
root@linuxtechi:~# smartctl -a -d ata /dev/sdb       // For SATA drive
</code></pre><h4 id="樣例-5-顯示磁盤總體健康狀況" tabindex="-1">樣例：5 顯示磁盤總體健康狀況 <a class="header-anchor" href="#樣例-5-顯示磁盤總體健康狀況" aria-label="Permalink to “樣例：5 顯示磁盤總體健康狀況”">​</a></h4><pre><code>root@linuxtechi:~# smartctl -H  /dev/sdb
smartctl 6.2 2013-07-26 r3841 [x86_64-linux-3.13.0-32-generic] (local build)
Copyright (C) 2002-13, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF READ SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED
Warning: This result is based on an Attribute check.
Please note the following marginal Attributes:
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
190 Airflow_Temperature_Cel 0x0022   067   045   045    Old_age   Always   In_the_past 33 (Min/Max 25/33)
</code></pre><h4 id="樣例-6-使用long和short選項測試硬盤" tabindex="-1">樣例：6 使用long和short選項測試硬盤 <a class="header-anchor" href="#樣例-6-使用long和short選項測試硬盤" aria-label="Permalink to “樣例：6 使用long和short選項測試硬盤”">​</a></h4><p><strong>Long測試</strong></p><pre><code>root@linuxtechi:~# smartctl --test=long /dev/sdb
smartctl 6.2 2013-07-26 r3841 [x86_64-linux-3.13.0-32-generic] (local build)
Copyright (C) 2002-13, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF OFFLINE IMMEDIATE AND SELF-TEST SECTION ===
Sending command: &quot;Execute SMART Extended self-test routine immediately in off-line mode&quot;.
Drive command &quot;Execute SMART Extended self-test routine immediately in off-line mode&quot; successful.
Testing has begun.
Please wait 102 minutes for test to complete.
Test will complete after Sun Nov 16 14:29:43 2014

Use smartctl -X to abort test.
</code></pre><p>或者，我們可以重定向測試輸出到日誌文件，就像下面這樣</p><pre><code>root@linuxtechi:~# smartctl --test=long /dev/sdb &gt; /var/log/long.text
</code></pre><p><strong>Short測試</strong></p><pre><code>root@linuxtechi:~# smartctl --test=short /dev/sdb
smartctl 6.2 2013-07-26 r3841 [x86_64-linux-3.13.0-32-generic] (local build)
Copyright (C) 2002-13, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF OFFLINE IMMEDIATE AND SELF-TEST SECTION ===
Sending command: &quot;Execute SMART Short self-test routine immediately in off-line mode&quot;.
Drive command &quot;Execute SMART Short self-test routine immediately in off-line mode&quot; successful.
Testing has begun.
Please wait 1 minutes for test to complete.
Test will complete after Sun Nov 16 12:51:45 2014

Use smartctl -X to abort test.
</code></pre><p>或</p><pre><code>root@linuxtechi:~# smartctl --test=short /dev/sdb &gt; /var/log/short.text
</code></pre><p><strong>注意</strong>：short測試將花費最多2分鐘，而在long測試中沒有時間限制，因為它會讀取並驗證磁盤的每個段。</p><h4 id="樣例-7-查看驅動器的自檢結果" tabindex="-1">樣例：7 查看驅動器的自檢結果 <a class="header-anchor" href="#樣例-7-查看驅動器的自檢結果" aria-label="Permalink to “樣例：7 查看驅動器的自檢結果”">​</a></h4><pre><code>root@linuxtechi:~# smartctl -l selftest /dev/sdb
smartctl 6.2 2013-07-26 r3841 [x86_64-linux-3.13.0-32-generic] (local build)
Copyright (C) 2002-13, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF READ SMART DATA SECTION ===
SMART Self-test log structure revision number 1
Num  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error
# 1  Short offline       Completed: read failure       90%       492         210841222
# 2  Extended offline    Completed: read failure       90%       492         210841222
</code></pre><h4 id="樣例-8-計算測試時間估值" tabindex="-1">樣例：8 計算測試時間估值 <a class="header-anchor" href="#樣例-8-計算測試時間估值" aria-label="Permalink to “樣例：8 計算測試時間估值”">​</a></h4><pre><code>root@linuxtechi:~# smartctl -c  /dev/sdb
smartctl 6.2 2013-07-26 r3841 [x86_64-linux-3.13.0-32-generic] (local build)
Copyright (C) 2002-13, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF READ SMART DATA SECTION ===
General SMART Values:
Offline data collection status:  (0x00)    Offline data collection activity
                    was never started.
                    Auto Offline Data Collection: Disabled.
Self-test execution status:      ( 121)    The previous self-test completed having
                    the read element of the test failed.
Total time to complete Offline 
data collection:         (    0) seconds.
Offline data collection
capabilities:              (0x73) SMART execute Offline immediate.
                    Auto Offline data collection on/off support.
                    Suspend Offline collection upon new
                    command.
                    No Offline surface scan supported.
                    Self-test supported.
                    Conveyance Self-test supported.
                    Selective Self-test supported.
SMART capabilities:            (0x0003)    Saves SMART data before entering
                    power-saving mode.
                    Supports SMART auto save timer.
Error logging capability:        (0x01)    Error logging supported.
                    General Purpose Logging supported.
Short self-test routine 
recommended polling time:      (   1) minutes.
Extended self-test routine
recommended polling time:      ( 102) minutes.
Conveyance self-test routine
recommended polling time:      (   2) minutes.
SCT capabilities:            (0x103b)    SCT Status supported.
                    SCT Error Recovery Control supported.
                    SCT Feature Control supported.
                    SCT Data Table supported.
</code></pre><h4 id="樣例-9-顯示磁盤錯誤日誌" tabindex="-1">樣例：9 顯示磁盤錯誤日誌 <a class="header-anchor" href="#樣例-9-顯示磁盤錯誤日誌" aria-label="Permalink to “樣例：9 顯示磁盤錯誤日誌”">​</a></h4><pre><code>root@linuxtechi:~# smartctl -l error  /dev/sdb

Sample Output

smartctl 6.2 2013-07-26 r3841 [x86_64-linux-3.13.0-32-generic] (local build)
Copyright (C) 2002-13, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF READ SMART DATA SECTION ===
SMART Error Log Version: 1
ATA Error Count: 5
    CR = Command Register [HEX]
    FR = Features Register [HEX]
    SC = Sector Count Register [HEX]
    SN = Sector Number Register [HEX]
    CL = Cylinder Low Register [HEX]
    CH = Cylinder High Register [HEX]
    DH = Device/Head Register [HEX]
    DC = Device Command Register [HEX]
    ER = Error register [HEX]
    ST = Status register [HEX]
Powered_Up_Time is measured from power on, and printed as
DDd+hh:mm:SS.sss where DD=days, hh=hours, mm=minutes,
SS=sec, and sss=millisec. It &quot;wraps&quot; after 49.710 days.

Commands leading to the command that caused the error were:
  CR FR SC SN CL CH DH DC   Powered_Up_Time  Command/Feature_Name
  -- -- -- -- -- -- -- --  ----------------  --------------------
  25 da 08 e7 e5 a5 4c 00      00:30:44.515  READ DMA EXT
  25 da 08 df e5 a5 4c 00      00:30:44.514  READ DMA EXT
  25 da 80 5f e5 a5 4c 00      00:30:44.502  READ DMA EXT
  25 da f0 5f e6 a5 4c 00      00:30:44.496  READ DMA EXT
  25 da 10 4f e6 a5 4c 00      00:30:44.383  READ DMA EXT
</code></pre><hr>`,43)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),r(n,{href:"http://www.linuxtechi.com/smartctl-monitoring-analysis-tool-hard-drive/"},{default:o(()=>[...e[0]||(e[0]=[t("http://www.linuxtechi.com/smartctl-monitoring-analysis-tool-hard-drive/",-1)])]),_:1})]),a("p",null,[e[5]||(e[5]=t("作者：",-1)),r(n,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:o(()=>[...e[2]||(e[2]=[t("Pradeep Kumar",-1)])]),_:1}),e[6]||(e[6]=t(" 譯者：",-1)),r(n,{href:"https://github.com/GOLinux"},{default:o(()=>[...e[3]||(e[3]=[t("GOLinux",-1)])]),_:1}),e[7]||(e[7]=t(" 校對：",-1)),r(n,{href:"https://github.com/wxy"},{default:o(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=t("本文由 ",-1)),r(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原創翻譯，",-1)),r(n,{href:"http://linux.cn/"},{default:o(()=>[...e[9]||(e[9]=[t("Linux中國",-1)])]),_:1}),e[12]||(e[12]=t(" 榮譽推出",-1))])])}const x=s(c,[["render",u]]);export{C as __pageData,x as default};
