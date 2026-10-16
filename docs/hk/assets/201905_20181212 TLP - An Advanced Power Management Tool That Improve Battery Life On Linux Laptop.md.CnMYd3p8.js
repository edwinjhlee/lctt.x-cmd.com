import{_ as t,a0 as o,w as c,s as r,I as n,x as a,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"TLP：一個可以延長 Linux 筆記本電池壽命的高級電源管理工具 | LCTT x X-CMD","titleTemplate":false,"description":"TLP：一個可以延長 Linux 筆記本電池壽命的高級電源管理工具 | LCTT (201905) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"TLP：一個可以延長 Linux 筆記本電池壽命的高級電源管理工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"TLP：一個可以延長 Linux 筆記本電池壽命的高級電源管理工具 | LCTT (201905) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201905/20181212 TLP - An Advanced Power Management Tool That Improve Battery Life On Linux Laptop","title":"TLP：一個可以延長 Linux 筆記本電池壽命的高級電源管理工具","tag":"201905","desc":""},"relativePath":"201905/20181212 TLP - An Advanced Power Management Tool That Improve Battery Life On Linux Laptop.md","filePath":"[post].md"}'),d={name:"201905/20181212 TLP - An Advanced Power Management Tool That Improve Battery Life On Linux Laptop.md"};function u(h,s,g,k,b,m){const p=o("Link");return c(),r("div",null,[s[44]||(s[44]=n("h1",{id:"tlp-一個可以延長-linux-筆記本電池壽命的高級電源管理工具",tabindex:"-1"},[a("TLP：一個可以延長 Linux 筆記本電池壽命的高級電源管理工具 "),n("a",{class:"header-anchor",href:"#tlp-一個可以延長-linux-筆記本電池壽命的高級電源管理工具","aria-label":"Permalink to “TLP：一個可以延長 Linux 筆記本電池壽命的高級電源管理工具”"},"​")],-1)),s[45]||(s[45]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/201905/13/094413iu77i8w75t80tq7h.jpg",alt:""})],-1)),s[46]||(s[46]=n("p",null,"筆記本電池是針對 Windows 操作系統進行了高度優化的，當我在筆記本電腦中使用 Windows 操作系統時，我已經意識到這一點，但對於 Linux 來説卻不一樣。",-1)),s[47]||(s[47]=n("p",null,"多年來，Linux 在電池優化方面取得了很大進步，但我們仍然需要做一些必要的事情來改善 Linux 中筆記本電腦的電池壽命。",-1)),s[48]||(s[48]=n("p",null,"當我考慮延長電池壽命時，我沒有多少選擇，但我覺得 TLP 對我來説是一個更好的解決方案，所以我會繼續使用它。",-1)),s[49]||(s[49]=n("p",null,"在本教程中，我們將詳細討論 TLP 以延長電池壽命。",-1)),n("p",null,[s[3]||(s[3]=a("我們之前在我們的網站上寫過三篇關於 Linux ",-1)),e(p,{href:"https://www.2daygeek.com/check-laptop-battery-status-and-charging-state-in-linux-terminal/"},{default:l(()=>[...s[0]||(s[0]=[a("筆記本電池節電工具",-1)])]),_:1}),s[4]||(s[4]=a(" 的文章：",-1)),e(p,{href:"https://www.2daygeek.com/powertop-monitors-laptop-battery-usage-linux/"},{default:l(()=>[...s[1]||(s[1]=[a("PowerTOP",-1)])]),_:1}),s[5]||(s[5]=a(" 和 ",-1)),e(p,{href:"https://www.2daygeek.com/monitor-laptop-battery-charging-state-linux/"},{default:l(()=>[...s[2]||(s[2]=[a("電池充電狀態",-1)])]),_:1}),s[6]||(s[6]=a("。",-1))]),s[50]||(s[50]=n("h3",{id:"tlp",tabindex:"-1"},[a("TLP "),n("a",{class:"header-anchor",href:"#tlp","aria-label":"Permalink to “TLP”"},"​")],-1)),n("p",null,[e(p,{href:"https://linrunner.de/en/tlp/docs/tlp-linux-advanced-power-management.html"},{default:l(()=>[...s[7]||(s[7]=[a("TLP",-1)])]),_:1}),s[8]||(s[8]=a(" 是一款自由開源的高級電源管理工具，可在不進行任何配置更改的情況下延長電池壽命。",-1))]),s[51]||(s[51]=i('<p>由於它的默認配置已針對電池壽命進行了優化，因此你可能只需要安裝，然後就忘記它吧。</p><p>此外，它可以高度定製化，以滿足你的特定要求。TLP 是一個具有自動後台任務的純命令列工具。它不包含GUI。</p><p>TLP 適用於各種品牌的筆記本電腦。設置電池充電閾值僅適用於 IBM/Lenovo ThinkPad。</p><p>所有 TLP 設置都存儲在 <code>/etc/default/tlp</code> 中。其默認配置提供了開箱即用的優化的節能設置。</p><p>以下 TLP 設置可用於自定義，如果需要，你可以相應地進行必要的更改。</p><h3 id="tlp-功能" tabindex="-1">TLP 功能 <a class="header-anchor" href="#tlp-功能" aria-label="Permalink to “TLP 功能”">​</a></h3><ul><li>內核筆記本電腦模式和髒緩衝區超時</li><li>處理器頻率調整，包括 “turbo boost”/“turbo core”</li><li>限制最大/最小的 P 狀態以控制 CPU 的功耗</li><li>HWP 能源性能提示</li><li>用於多核/超線程的功率感知進程調度程序</li><li>處理器性能與節能策略（<code>x86_energy_perf_policy</code>）</li><li>硬盤高級電源管理級別（APM）和降速超時（按磁盤）</li><li>AHCI 鏈路電源管理（ALPM）與設備黑名單</li><li>PCIe 活動狀態電源管理（PCIe ASPM）</li><li>PCI(e) 總線設備的運行時電源管理</li><li>Radeon 圖形電源管理（KMS 和 DPM）</li><li>Wifi 省電模式</li><li>關閉驅動器托架中的光盤驅動器</li><li>音頻省電模式</li><li>I/O 調度程序（按磁盤）</li><li>USB 自動暫停，支持設備黑名單/白名單（輸入設備自動排除）</li><li>在系統啓動和關閉時啓用或禁用集成的 wifi、藍牙或 wwan 設備</li><li>在系統啓動時恢復無線電設備狀態（從之前的關機時的狀態）</li><li>無線電設備嚮導：在網絡連接/斷開和停靠/取消停靠時切換無線電</li><li>禁用 LAN 喚醒</li><li>掛起/休眠後恢復集成的 WWAN 和藍牙狀態</li><li>英特爾處理器的動態電源降低 —— 需要內核和 PHC-Patch 支持</li><li>電池充電閾值 —— 僅限 ThinkPad</li><li>重新校準電池 —— 僅限 ThinkPad</li></ul><h3 id="如何在-linux-上安裝-tlp" tabindex="-1">如何在 Linux 上安裝 TLP <a class="header-anchor" href="#如何在-linux-上安裝-tlp" aria-label="Permalink to “如何在 Linux 上安裝 TLP”">​</a></h3>',8)),n("p",null,[s[10]||(s[10]=a("TLP 包在大多數發行版官方存儲庫中都可用，因此，使用發行版的 ",-1)),e(p,{href:"https://www.2daygeek.com/category/package-management/"},{default:l(()=>[...s[9]||(s[9]=[a("包管理器",-1)])]),_:1}),s[11]||(s[11]=a(" 來安裝它。",-1))]),n("p",null,[s[13]||(s[13]=a("對於 Fedora 系統，使用 ",-1)),e(p,{href:"https://www.2daygeek.com/dnf-command-examples-manage-packages-fedora-system/"},{default:l(()=>[...s[12]||(s[12]=[a("DNF 命令",-1)])]),_:1}),s[14]||(s[14]=a(" 安裝 TLP。",-1))]),s[52]||(s[52]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install tlp tlp-rdw</span></span></code></pre></div><p>ThinkPad 需要一些附加軟件包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm</span></span>
<span class="line"><span>$ sudo dnf install http://repo.linrunner.de/fedora/tlp/repos/releases/tlp-release.fc$(rpm -E %fedora).noarch.rpm</span></span>
<span class="line"><span>$ sudo dnf install akmod-tp_smapi akmod-acpi_call kernel-devel</span></span></code></pre></div><p>安裝 smartmontool 以顯示 tlp-stat 中 S.M.A.R.T. 數據。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install smartmontools</span></span></code></pre></div>`,5)),n("p",null,[s[17]||(s[17]=a("對於 Debian/Ubuntu 系統，使用 ",-1)),e(p,{href:"https://www.2daygeek.com/apt-get-apt-cache-command-examples-manage-packages-debian-ubuntu-systems/"},{default:l(()=>[...s[15]||(s[15]=[a("APT-GET 命令",-1)])]),_:1}),s[18]||(s[18]=a(" 或 ",-1)),e(p,{href:"https://www.2daygeek.com/apt-command-examples-manage-packages-debian-ubuntu-systems/"},{default:l(()=>[...s[16]||(s[16]=[a("APT 命令",-1)])]),_:1}),s[19]||(s[19]=a(" 安裝 TLP。",-1))]),s[53]||(s[53]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt install tlp tlp-rdw</span></span></code></pre></div><p>ThinkPad 需要一些附加軟件包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt-get install tp-smapi-dkms acpi-call-dkms</span></span></code></pre></div><p>安裝 smartmontool 以顯示 tlp-stat 中 S.M.A.R.T. 數據。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt-get install smartmontools</span></span></code></pre></div><p>當基於 Ubuntu 的系統的官方軟件包過時時，請使用以下 PPA 存儲庫，該存儲庫提供最新版本。運行以下命令以使用 PPA 安裝 TLP。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo add-apt-repository ppa:linrunner/tlp</span></span>
<span class="line"><span>$ sudo apt-get update</span></span>
<span class="line"><span>$ sudo apt-get install tlp</span></span></code></pre></div>`,7)),n("p",null,[s[21]||(s[21]=a("對於基於 Arch Linux 的系統，使用 ",-1)),e(p,{href:"https://www.2daygeek.com/pacman-command-examples-manage-packages-arch-linux-system/"},{default:l(()=>[...s[20]||(s[20]=[a("Pacman 命令",-1)])]),_:1}),s[22]||(s[22]=a(" 安裝 TLP。",-1))]),s[54]||(s[54]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo pacman -S tlp tlp-rdw</span></span></code></pre></div><p>ThinkPad 需要一些附加軟件包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pacman -S tp_smapi acpi_call</span></span></code></pre></div><p>安裝 smartmontool 以顯示 tlp-stat 中 S.M.A.R.T. 數據。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo pacman -S smartmontools</span></span></code></pre></div><p>對於基於 Arch Linux 的系統，在啓動時啓用 TLP 和 TLP-Sleep 服務。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl enable tlp.service</span></span>
<span class="line"><span>$ sudo systemctl enable tlp-sleep.service</span></span></code></pre></div><p>對於基於 Arch Linux 的系統，你還應該屏蔽以下服務以避免衝突，並確保 TLP 的無線電設備切換選項的正確操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl mask systemd-rfkill.service</span></span>
<span class="line"><span>$ sudo systemctl mask systemd-rfkill.socket</span></span></code></pre></div>`,9)),n("p",null,[s[24]||(s[24]=a("對於 RHEL/CentOS 系統，使用 ",-1)),e(p,{href:"https://www.2daygeek.com/yum-command-examples-manage-packages-rhel-centos-systems/"},{default:l(()=>[...s[23]||(s[23]=[a("YUM 命令",-1)])]),_:1}),s[25]||(s[25]=a(" 安裝 TLP。",-1))]),s[55]||(s[55]=i('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo yum install tlp tlp-rdw</span></span></code></pre></div><p>安裝 smartmontool 以顯示 tlp-stat 中 S.M.A.R.T. 數據。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo yum install smartmontools</span></span></code></pre></div>',3)),n("p",null,[s[27]||(s[27]=a("對於 openSUSE Leap 系統，使用 ",-1)),e(p,{href:"https://www.2daygeek.com/zypper-command-examples-manage-packages-opensuse-system/"},{default:l(()=>[...s[26]||(s[26]=[a("Zypper 命令",-1)])]),_:1}),s[28]||(s[28]=a(" 安裝 TLP。",-1))]),s[56]||(s[56]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo zypper install TLP</span></span></code></pre></div><p>安裝 smartmontool 以顯示 tlp-stat 中 S.M.A.R.T. 數據。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo zypper install smartmontools</span></span></code></pre></div><p>成功安裝 TLP 後，使用以下命令啓動服務。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ systemctl start tlp.service</span></span></code></pre></div><h3 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to “使用方法”">​</a></h3><h4 id="顯示電池信息" tabindex="-1">顯示電池信息 <a class="header-anchor" href="#顯示電池信息" aria-label="Permalink to “顯示電池信息”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -b</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>$ sudo tlp-stat --battery</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Battery Status</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/manufacturer                   = SMP</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/model_name                     = L14M4P23</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/cycle_count                    = (not supported)</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/energy_full_design             =  60000 [mWh]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/energy_full                    =  48850 [mWh]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/energy_now                     =  48850 [mWh]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/power_now                      =      0 [mW]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/status                         = Full</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Charge                                                      =  100.0 [%]</span></span>
<span class="line"><span>Capacity                                                    =   81.4 [%]</span></span></code></pre></div><h4 id="顯示磁盤信息" tabindex="-1">顯示磁盤信息 <a class="header-anchor" href="#顯示磁盤信息" aria-label="Permalink to “顯示磁盤信息”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -d</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>$ sudo tlp-stat --disk</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Storage Devices</span></span>
<span class="line"><span>/dev/sda:</span></span>
<span class="line"><span>  Model     = WDC WD10SPCX-24HWST1                    </span></span>
<span class="line"><span>  Firmware  = 02.01A02</span></span>
<span class="line"><span>  APM Level = 128</span></span>
<span class="line"><span>  Status    = active/idle</span></span>
<span class="line"><span>  Scheduler = mq-deadline</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Runtime PM: control = on, autosuspend_delay = (not available)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  SMART info:</span></span>
<span class="line"><span>      4 Start_Stop_Count          =    18787 </span></span>
<span class="line"><span>      5 Reallocated_Sector_Ct     =        0 </span></span>
<span class="line"><span>      9 Power_On_Hours            =      606 [h]</span></span>
<span class="line"><span>     12 Power_Cycle_Count         =     1792 </span></span>
<span class="line"><span>    193 Load_Cycle_Count          =    25775 </span></span>
<span class="line"><span>    194 Temperature_Celsius       =       31    [°C]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ AHCI Link Power Management (ALPM)</span></span>
<span class="line"><span>/sys/class/scsi_host/host0/link_power_management_policy  = med_power_with_dipm</span></span>
<span class="line"><span>/sys/class/scsi_host/host1/link_power_management_policy  = med_power_with_dipm</span></span>
<span class="line"><span>/sys/class/scsi_host/host2/link_power_management_policy  = med_power_with_dipm</span></span>
<span class="line"><span>/sys/class/scsi_host/host3/link_power_management_policy  = med_power_with_dipm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ AHCI Host Controller Runtime Power Management</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:17.0/ata1/power/control = on</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:17.0/ata2/power/control = on</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:17.0/ata3/power/control = on</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:17.0/ata4/power/control = on</span></span></code></pre></div><h4 id="顯示-pci-設備信息" tabindex="-1">顯示 PCI 設備信息 <a class="header-anchor" href="#顯示-pci-設備信息" aria-label="Permalink to “顯示 PCI 設備信息”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -e</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>$ sudo tlp-stat --pcie</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -e</span></span>
<span class="line"><span>or</span></span>
<span class="line"><span>$ sudo tlp-stat --pcie</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Runtime Power Management</span></span>
<span class="line"><span>Device blacklist = (not configured)</span></span>
<span class="line"><span>Driver blacklist = amdgpu nouveau nvidia radeon pcieport</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:00.0/power/control = auto (0x060000, Host bridge, skl_uncore)</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:01.0/power/control = auto (0x060400, PCI bridge, pcieport)</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:02.0/power/control = auto (0x030000, VGA compatible controller, i915)</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:14.0/power/control = auto (0x0c0330, USB controller, xhci_hcd)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>......</span></span></code></pre></div><h4 id="顯示圖形卡信息" tabindex="-1">顯示圖形卡信息 <a class="header-anchor" href="#顯示圖形卡信息" aria-label="Permalink to “顯示圖形卡信息”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -g</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>$ sudo tlp-stat --graphics</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Intel Graphics</span></span>
<span class="line"><span>/sys/module/i915/parameters/enable_dc        = -1 (use per-chip default)</span></span>
<span class="line"><span>/sys/module/i915/parameters/enable_fbc       =  1 (enabled)</span></span>
<span class="line"><span>/sys/module/i915/parameters/enable_psr       =  0 (disabled)</span></span>
<span class="line"><span>/sys/module/i915/parameters/modeset          = -1 (use per-chip default)</span></span></code></pre></div><h4 id="顯示處理器信息" tabindex="-1">顯示處理器信息 <a class="header-anchor" href="#顯示處理器信息" aria-label="Permalink to “顯示處理器信息”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -p</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>$ sudo tlp-stat --processor</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Processor</span></span>
<span class="line"><span>CPU model      = Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/sys/devices/system/cpu/cpu0/cpufreq/scaling_driver    = intel_pstate</span></span>
<span class="line"><span>/sys/devices/system/cpu/cpu0/cpufreq/scaling_governor  = powersave</span></span>
<span class="line"><span>/sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors = performance powersave</span></span>
<span class="line"><span>/sys/devices/system/cpu/cpu0/cpufreq/scaling_min_freq  =   800000 [kHz]</span></span>
<span class="line"><span>/sys/devices/system/cpu/cpu0/cpufreq/scaling_max_freq  =  3500000 [kHz]</span></span>
<span class="line"><span>/sys/devices/system/cpu/cpu0/cpufreq/energy_performance_preference = balance_power</span></span>
<span class="line"><span>/sys/devices/system/cpu/cpu0/cpufreq/energy_performance_available_preferences = default performance balance_performance balance_power power </span></span>
<span class="line"><span></span></span>
<span class="line"><span>......</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/sys/devices/system/cpu/intel_pstate/min_perf_pct      =  22 [%]</span></span>
<span class="line"><span>/sys/devices/system/cpu/intel_pstate/max_perf_pct      = 100 [%]</span></span>
<span class="line"><span>/sys/devices/system/cpu/intel_pstate/no_turbo          =   0</span></span>
<span class="line"><span>/sys/devices/system/cpu/intel_pstate/turbo_pct         =  33 [%]</span></span>
<span class="line"><span>/sys/devices/system/cpu/intel_pstate/num_pstates       =  28</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x86_energy_perf_policy: program not installed.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/sys/module/workqueue/parameters/power_efficient       = Y</span></span>
<span class="line"><span>/proc/sys/kernel/nmi_watchdog                          = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Undervolting</span></span>
<span class="line"><span>PHC kernel not available.</span></span></code></pre></div><h4 id="顯示系統數據信息" tabindex="-1">顯示系統數據信息 <a class="header-anchor" href="#顯示系統數據信息" aria-label="Permalink to “顯示系統數據信息”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -s</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>$ sudo tlp-stat --system</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ System Info</span></span>
<span class="line"><span>System         = LENOVO Lenovo ideapad Y700-15ISK 80NV</span></span>
<span class="line"><span>BIOS           = CDCN35WW</span></span>
<span class="line"><span>Release        = &quot;Manjaro Linux&quot;</span></span>
<span class="line"><span>Kernel         = 4.19.6-1-MANJARO #1 SMP PREEMPT Sat Dec 1 12:21:26 UTC 2018 x86_64</span></span>
<span class="line"><span>/proc/cmdline  = BOOT_IMAGE=/boot/vmlinuz-4.19-x86_64 root=UUID=69d9dd18-36be-4631-9ebb-78f05fe3217f rw quiet resume=UUID=a2092b92-af29-4760-8e68-7a201922573b</span></span>
<span class="line"><span>Init system    = systemd </span></span>
<span class="line"><span>Boot mode      = BIOS (CSM, Legacy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ TLP Status</span></span>
<span class="line"><span>State          = enabled</span></span>
<span class="line"><span>Last run       = 11:04:00  IST,    596 sec(s) ago</span></span>
<span class="line"><span>Mode           = battery</span></span>
<span class="line"><span>Power source   = battery</span></span></code></pre></div><h4 id="顯示温度和風扇速度信息" tabindex="-1">顯示温度和風扇速度信息 <a class="header-anchor" href="#顯示温度和風扇速度信息" aria-label="Permalink to “顯示温度和風扇速度信息”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -t</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>$ sudo tlp-stat --temp</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Temperatures</span></span>
<span class="line"><span>CPU temp               =    36 [°C]</span></span>
<span class="line"><span>Fan speed              = (not available)</span></span></code></pre></div><h4 id="顯示-usb-設備數據信息" tabindex="-1">顯示 USB 設備數據信息 <a class="header-anchor" href="#顯示-usb-設備數據信息" aria-label="Permalink to “顯示 USB 設備數據信息”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -u</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>$ sudo tlp-stat --usb</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ USB</span></span>
<span class="line"><span>Autosuspend         = disabled</span></span>
<span class="line"><span>Device whitelist    = (not configured)</span></span>
<span class="line"><span>Device blacklist    = (not configured)</span></span>
<span class="line"><span>Bluetooth blacklist = disabled</span></span>
<span class="line"><span>Phone blacklist     = disabled</span></span>
<span class="line"><span>WWAN blacklist      = enabled</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Bus 002 Device 001 ID 1d6b:0003 control = auto, autosuspend_delay_ms =     0 -- Linux Foundation 3.0 root hub (hub)</span></span>
<span class="line"><span>Bus 001 Device 003 ID 174f:14e8 control = auto, autosuspend_delay_ms =  2000 -- Syntek  (uvcvideo)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>......</span></span></code></pre></div><h4 id="顯示警告信息" tabindex="-1">顯示警告信息 <a class="header-anchor" href="#顯示警告信息" aria-label="Permalink to “顯示警告信息”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -w</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>$ sudo tlp-stat --warn</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>No warnings detected.</span></span></code></pre></div><h4 id="狀態報告及配置和所有活動的設置" tabindex="-1">狀態報告及配置和所有活動的設置 <a class="header-anchor" href="#狀態報告及配置和所有活動的設置" aria-label="Permalink to “狀態報告及配置和所有活動的設置”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Configured Settings: /etc/default/tlp</span></span>
<span class="line"><span>TLP_ENABLE=1</span></span>
<span class="line"><span>TLP_DEFAULT_MODE=AC</span></span>
<span class="line"><span>TLP_PERSISTENT_DEFAULT=0</span></span>
<span class="line"><span>DISK_IDLE_SECS_ON_AC=0</span></span>
<span class="line"><span>DISK_IDLE_SECS_ON_BAT=2</span></span>
<span class="line"><span>MAX_LOST_WORK_SECS_ON_AC=15</span></span>
<span class="line"><span>MAX_LOST_WORK_SECS_ON_BAT=60</span></span>
<span class="line"><span></span></span>
<span class="line"><span>......</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ System Info</span></span>
<span class="line"><span>System = LENOVO Lenovo ideapad Y700-15ISK 80NV</span></span>
<span class="line"><span>BIOS = CDCN35WW</span></span>
<span class="line"><span>Release = &quot;Manjaro Linux&quot;</span></span>
<span class="line"><span>Kernel = 4.19.6-1-MANJARO #1 SMP PREEMPT Sat Dec 1 12:21:26 UTC 2018 x86_64</span></span>
<span class="line"><span>/proc/cmdline = BOOT_IMAGE=/boot/vmlinuz-4.19-x86_64 root=UUID=69d9dd18-36be-4631-9ebb-78f05fe3217f rw quiet resume=UUID=a2092b92-af29-4760-8e68-7a201922573b</span></span>
<span class="line"><span>Init system = systemd</span></span>
<span class="line"><span>Boot mode = BIOS (CSM, Legacy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ TLP Status</span></span>
<span class="line"><span>State = enabled</span></span>
<span class="line"><span>Last run = 11:04:00 IST, 684 sec(s) ago</span></span>
<span class="line"><span>Mode = battery</span></span>
<span class="line"><span>Power source = battery</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Processor</span></span>
<span class="line"><span>CPU model = Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/sys/devices/system/cpu/cpu0/cpufreq/scaling_driver = intel_pstate</span></span>
<span class="line"><span>/sys/devices/system/cpu/cpu0/cpufreq/scaling_governor = powersave</span></span>
<span class="line"><span>/sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors = performance powersave</span></span>
<span class="line"><span></span></span>
<span class="line"><span>......</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/sys/devices/system/cpu/intel_pstate/min_perf_pct = 22 [%]</span></span>
<span class="line"><span>/sys/devices/system/cpu/intel_pstate/max_perf_pct = 100 [%]</span></span>
<span class="line"><span>/sys/devices/system/cpu/intel_pstate/no_turbo = 0</span></span>
<span class="line"><span>/sys/devices/system/cpu/intel_pstate/turbo_pct = 33 [%]</span></span>
<span class="line"><span>/sys/devices/system/cpu/intel_pstate/num_pstates = 28</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x86_energy_perf_policy: program not installed.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/sys/module/workqueue/parameters/power_efficient = Y</span></span>
<span class="line"><span>/proc/sys/kernel/nmi_watchdog = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Undervolting</span></span>
<span class="line"><span>PHC kernel not available.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Temperatures</span></span>
<span class="line"><span>CPU temp = 42 [°C]</span></span>
<span class="line"><span>Fan speed = (not available)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ File System</span></span>
<span class="line"><span>/proc/sys/vm/laptop_mode = 2</span></span>
<span class="line"><span>/proc/sys/vm/dirty_writeback_centisecs = 6000</span></span>
<span class="line"><span>/proc/sys/vm/dirty_expire_centisecs = 6000</span></span>
<span class="line"><span>/proc/sys/vm/dirty_ratio = 20</span></span>
<span class="line"><span>/proc/sys/vm/dirty_background_ratio = 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Storage Devices</span></span>
<span class="line"><span>/dev/sda:</span></span>
<span class="line"><span> Model = WDC WD10SPCX-24HWST1</span></span>
<span class="line"><span> Firmware = 02.01A02</span></span>
<span class="line"><span> APM Level = 128</span></span>
<span class="line"><span> Status = active/idle</span></span>
<span class="line"><span> Scheduler = mq-deadline</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Runtime PM: control = on, autosuspend_delay = (not available)</span></span>
<span class="line"><span></span></span>
<span class="line"><span> SMART info:</span></span>
<span class="line"><span> 4 Start_Stop_Count = 18787</span></span>
<span class="line"><span> 5 Reallocated_Sector_Ct = 0</span></span>
<span class="line"><span> 9 Power_On_Hours = 606 [h]</span></span>
<span class="line"><span> 12 Power_Cycle_Count = 1792</span></span>
<span class="line"><span> 193 Load_Cycle_Count = 25777</span></span>
<span class="line"><span> 194 Temperature_Celsius = 31 [°C]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ AHCI Link Power Management (ALPM)</span></span>
<span class="line"><span>/sys/class/scsi_host/host0/link_power_management_policy = med_power_with_dipm</span></span>
<span class="line"><span>/sys/class/scsi_host/host1/link_power_management_policy = med_power_with_dipm</span></span>
<span class="line"><span>/sys/class/scsi_host/host2/link_power_management_policy = med_power_with_dipm</span></span>
<span class="line"><span>/sys/class/scsi_host/host3/link_power_management_policy = med_power_with_dipm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ AHCI Host Controller Runtime Power Management</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:17.0/ata1/power/control = on</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:17.0/ata2/power/control = on</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:17.0/ata3/power/control = on</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:17.0/ata4/power/control = on</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ PCIe Active State Power Management</span></span>
<span class="line"><span>/sys/module/pcie_aspm/parameters/policy = powersave</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Intel Graphics</span></span>
<span class="line"><span>/sys/module/i915/parameters/enable_dc = -1 (use per-chip default)</span></span>
<span class="line"><span>/sys/module/i915/parameters/enable_fbc = 1 (enabled)</span></span>
<span class="line"><span>/sys/module/i915/parameters/enable_psr = 0 (disabled)</span></span>
<span class="line"><span>/sys/module/i915/parameters/modeset = -1 (use per-chip default)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Wireless</span></span>
<span class="line"><span>bluetooth = on</span></span>
<span class="line"><span>wifi = on</span></span>
<span class="line"><span>wwan = none (no device)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hci0(btusb) : bluetooth, not connected</span></span>
<span class="line"><span>wlp8s0(iwlwifi) : wifi, connected, power management = on</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Audio</span></span>
<span class="line"><span>/sys/module/snd_hda_intel/parameters/power_save = 1</span></span>
<span class="line"><span>/sys/module/snd_hda_intel/parameters/power_save_controller = Y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Runtime Power Management</span></span>
<span class="line"><span>Device blacklist = (not configured)</span></span>
<span class="line"><span>Driver blacklist = amdgpu nouveau nvidia radeon pcieport</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:00.0/power/control = auto (0x060000, Host bridge, skl_uncore)</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:01.0/power/control = auto (0x060400, PCI bridge, pcieport)</span></span>
<span class="line"><span>/sys/bus/pci/devices/0000:00:02.0/power/control = auto (0x030000, VGA compatible controller, i915)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>......</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ USB</span></span>
<span class="line"><span>Autosuspend = disabled</span></span>
<span class="line"><span>Device whitelist = (not configured)</span></span>
<span class="line"><span>Device blacklist = (not configured)</span></span>
<span class="line"><span>Bluetooth blacklist = disabled</span></span>
<span class="line"><span>Phone blacklist = disabled</span></span>
<span class="line"><span>WWAN blacklist = enabled</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Bus 002 Device 001 ID 1d6b:0003 control = auto, autosuspend_delay_ms = 0 -- Linux Foundation 3.0 root hub (hub)</span></span>
<span class="line"><span>Bus 001 Device 003 ID 174f:14e8 control = auto, autosuspend_delay_ms = 2000 -- Syntek (uvcvideo)</span></span>
<span class="line"><span>Bus 001 Device 002 ID 17ef:6053 control = on, autosuspend_delay_ms = 2000 -- Lenovo (usbhid)</span></span>
<span class="line"><span>Bus 001 Device 004 ID 8087:0a2b control = auto, autosuspend_delay_ms = 2000 -- Intel Corp. (btusb)</span></span>
<span class="line"><span>Bus 001 Device 001 ID 1d6b:0002 control = auto, autosuspend_delay_ms = 0 -- Linux Foundation 2.0 root hub (hub)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Battery Status</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/manufacturer = SMP</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/model_name = L14M4P23</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/cycle_count = (not supported)</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/energy_full_design = 60000 [mWh]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/energy_full = 51690 [mWh]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/energy_now = 50140 [mWh]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/power_now = 12185 [mW]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/status = Discharging</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Charge = 97.0 [%]</span></span>
<span class="line"><span>Capacity = 86.2 [%]</span></span></code></pre></div><hr>`,37)),n("p",null,[s[30]||(s[30]=a("via: ",-1)),e(p,{href:"https://www.2daygeek.com/tlp-increase-optimize-linux-laptop-battery-life/"},{default:l(()=>[...s[29]||(s[29]=[a("https://www.2daygeek.com/tlp-increase-optimize-linux-laptop-battery-life/",-1)])]),_:1})]),n("p",null,[s[35]||(s[35]=a("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/magesh/"},{default:l(()=>[...s[31]||(s[31]=[a("Magesh Maruthamuthu",-1)])]),_:1}),s[36]||(s[36]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[32]||(s[32]=[a("lujun9972",-1)])]),_:1}),s[37]||(s[37]=a(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[33]||(s[33]=[a("wxy",-1)])]),_:1}),s[38]||(s[38]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[34]||(s[34]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[41]||(s[41]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[39]||(s[39]=[a("LCTT",-1)])]),_:1}),s[42]||(s[42]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[40]||(s[40]=[a("Linux中國",-1)])]),_:1}),s[43]||(s[43]=a(" 榮譽推出",-1))])])}const v=t(d,[["render",u]]);export{_ as __pageData,v as default};
