import{_ as a,w as n,s as p,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const u=JSON.parse('{"title":"從 Linux 終端查看筆記本電池狀態和等級的 5 個方法 | LCTT x X-CMD","titleTemplate":false,"description":"從 Linux 終端查看筆記本電池狀態和等級的 5 個方法 | LCTT (201812) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"從 Linux 終端查看筆記本電池狀態和等級的 5 個方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"從 Linux 終端查看筆記本電池狀態和等級的 5 個方法 | LCTT (201812) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201812/20181210 5 Ways To Check Laptop Battery Status And Level From Linux Terminal","title":"從 Linux 終端查看筆記本電池狀態和等級的 5 個方法","tag":"201812","desc":""},"relativePath":"201812/20181210 5 Ways To Check Laptop Battery Status And Level From Linux Terminal.md","filePath":"[post].md"}'),i={name:"201812/20181210 5 Ways To Check Laptop Battery Status And Level From Linux Terminal.md"};function l(t,s,c,o,r,h){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="從-linux-終端查看筆記本電池狀態和等級的-5-個方法" tabindex="-1">從 Linux 終端查看筆記本電池狀態和等級的 5 個方法 <a class="header-anchor" href="#從-linux-終端查看筆記本電池狀態和等級的-5-個方法" aria-label="Permalink to “從 Linux 終端查看筆記本電池狀態和等級的 5 個方法”">​</a></h1><p>我們可以輕鬆地通過圖形化界面查看當前電量百分比、是否在充電以及當前電量還可以使用多長時間等電池狀態，但是卻無法查看電池健康度等相關信息。</p><p>在這篇文章就是為了解決這些問題。</p><p>在 Linux 上有很多這樣的實用工具，而且可以在命令列使用。</p><p>這篇文章今天就要探討這個主題，我會盡我所能的覆蓋儘可能多的信息。</p><p>每月檢查一次你的電池健康度是一個很好的想法。它可以幫你檢查你當前遇到的問題是否與電池或者充電相關。</p><p>同時，我們也可以查看電池模組名稱、電源、廠商以及電池規格等。</p><p>電源管理是在不使用時關閉電源或者切換系統的組件到低耗模式的一種功能。</p><h3 id="幾種在-linux-下檢查電池狀態的實用工具" tabindex="-1">幾種在 Linux 下檢查電池狀態的實用工具 <a class="header-anchor" href="#幾種在-linux-下檢查電池狀態的實用工具" aria-label="Permalink to “幾種在 Linux 下檢查電池狀態的實用工具”">​</a></h3><ul><li><code>upower</code>：是一個命令列工具，其提供了羅列系統中電源的接口。</li><li><code>acpi</code>：顯示來自 <code>/proc</code> 或者 <code>/sys</code> 文件系統中的一些信息，例如電池狀態或者熱量信息。</li><li><code>batstat</code>：是一個為 Linux 打印電池狀態的命令列工具。</li><li><code>tlp</code>：可以為你帶來更高級的電源管理，而無需修改任何配置。</li><li><code>class file</code>：這個 sysfs 文件系統是一個提供了內核數據結構接口的偽文件系統。</li></ul><h3 id="如何使用-upower-命令檢查筆記本電池狀態" tabindex="-1">如何使用 upower 命令檢查筆記本電池狀態 <a class="header-anchor" href="#如何使用-upower-命令檢查筆記本電池狀態" aria-label="Permalink to “如何使用 upower 命令檢查筆記本電池狀態”">​</a></h3><p>[upower][1] 是一個命令列工具，其提供了羅列系統中電源的接口。它在你的電腦上可以控制不同操作的延遲，這可以為你節省很大一部分電量。</p><p>只需要在 Linux 中運行以下命令獲取電池以及它所依賴的其他信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ upower -i /org/freedesktop/UPower/devices/battery_BAT0</span></span>
<span class="line"><span>  native-path:          BAT0</span></span>
<span class="line"><span>  vendor:               SMP</span></span>
<span class="line"><span>  model:                L14M4P23</span></span>
<span class="line"><span>  serial:               756</span></span>
<span class="line"><span>  power supply:         yes</span></span>
<span class="line"><span>  updated:              Monday 03 December 2018 07:56:18 PM IST (95 seconds ago)</span></span>
<span class="line"><span>  has history:          yes</span></span>
<span class="line"><span>  has statistics:       yes</span></span>
<span class="line"><span>  battery</span></span>
<span class="line"><span>    present:             yes</span></span>
<span class="line"><span>    rechargeable:        yes</span></span>
<span class="line"><span>    state:               discharging</span></span>
<span class="line"><span>    warning-level:       none</span></span>
<span class="line"><span>    energy:              28.23 Wh</span></span>
<span class="line"><span>    energy-empty:        0 Wh</span></span>
<span class="line"><span>    energy-full:         52.26 Wh</span></span>
<span class="line"><span>    energy-full-design:  60 Wh</span></span>
<span class="line"><span>    energy-rate:         10.714 W</span></span>
<span class="line"><span>    voltage:             14.819 V</span></span>
<span class="line"><span>    time to empty:       2.6 hours</span></span>
<span class="line"><span>    percentage:          54%</span></span>
<span class="line"><span>    capacity:            87.1%</span></span>
<span class="line"><span>    technology:          lithium-ion</span></span>
<span class="line"><span>    icon-name:          &#39;battery-good-symbolic&#39;</span></span>
<span class="line"><span>  History (charge):</span></span>
<span class="line"><span>    1543847178	54.000	discharging</span></span>
<span class="line"><span>  History (rate):</span></span>
<span class="line"><span>    1543847178	10.714	discharging</span></span></code></pre></div><p>使用下面的格式檢查電池的特定信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep -i &quot;state\\|percentage\\|time to empty&quot;</span></span>
<span class="line"><span>    state:               discharging</span></span>
<span class="line"><span>    time to empty:       2.1 hours</span></span>
<span class="line"><span>    percentage:          43%</span></span></code></pre></div><p>這個類似於上面的那個，但是是在充電線纜的插入後運行，這也就是為什麼下面會顯示正在充電狀態的原因。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep -i &quot;state\\|percentage\\|time to empty&quot;</span></span>
<span class="line"><span>    state:               charging</span></span>
<span class="line"><span>    percentage:          41%</span></span></code></pre></div><h3 id="如何使用-tlp-命令檢查筆記本電池狀態" tabindex="-1">如何使用 TLP 命令檢查筆記本電池狀態 <a class="header-anchor" href="#如何使用-tlp-命令檢查筆記本電池狀態" aria-label="Permalink to “如何使用 TLP 命令檢查筆記本電池狀態”">​</a></h3><p>TLP 是一個自由開源的多功能的命令列工具，它可以優化筆記本電池而無需修改任何配置。</p><p>TLP 可以為你的 Linux 帶來更高級的電源管理，而無需理解任何技術細節。TLP 默認附帶了一個已經為你的電池優化好的配置，所以你可以安裝好後就不再管它了。儘管 TLP 是一個可以根據你的需求高度可定製的工具。</p><p>TLP 在絕大多數 Linux 發行版，例如 Arch、Debian、Fedora、Gentoo、openSUSE 等的官方庫中都可用。使用你的 Linux 發行版的包管理安裝 TLP 即可。</p><p>只需要在 Linux 中運行以下命令獲取電池以及其他所依賴的信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -b</span></span>
<span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+++ Battery Status</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/manufacturer                   = SMP</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/model_name                     = L14M4P23</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/cycle_count                    = (not supported)</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/energy_full_design             =  60000 [mWh]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/energy_full                    =  52260 [mWh]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/energy_now                     =  21950 [mWh]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/power_now                      =  10923 [mW]</span></span>
<span class="line"><span>/sys/class/power_supply/BAT0/status                         = Discharging</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Charge                                                      =   42.0 [%]</span></span>
<span class="line"><span>Capacity                                                    =   87.1 [%]</span></span></code></pre></div><p>也可以查看其他的信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -s</span></span>
<span class="line"><span>--- TLP 1.1 --------------------------------------------</span></span>
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
<span class="line"><span>Last run       = 07:16:12  IST,   4362 sec(s) ago</span></span>
<span class="line"><span>Mode           = battery</span></span>
<span class="line"><span>Power source   = battery\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 如何使用 ACPI 命令檢查電池狀態  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>ACPI 代表&lt;ruby&gt;高級配置和電源接口&lt;rt&gt;Advanced Configuration and Power Interface&lt;/rt&gt;&lt;/ruby&gt;模組，它們是不同 ACPI 部件的內核模組。它們啓用特殊的 ACPI 函數向 \`/proc\` 或者 \`/sys\` 中添加信息。這些信息可以通過事件或者其他監控程序的 acpid 進行解析。</span></span></code></pre></div><p>$ acpi Battery 0: Charging, 43%, 01:05:11 until charged</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>查看電池容量。</span></span></code></pre></div><p>$ acpi -i Battery 0: Charging, 43%, 01:05:07 until charged Battery 0: design capacity 3817 mAh, last full capacity 3324 mAh = 87%</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>查看更多有關電池及其相關的信息。</span></span></code></pre></div><p>$ acpi -V Battery 0: Charging, 43%, 01:05:07 until charged Battery 0: design capacity 3815 mAh, last full capacity 3323 mAh = 87% Adapter 0: on-line Cooling 0: Processor 0 of 10 Cooling 1: Processor 0 of 10 Cooling 2: Processor 0 of 10 Cooling 3: iwlwifi 0 of 19 Cooling 4: Processor 0 of 10 Cooling 5: iwlwifi no state information available Cooling 6: Processor 0 of 10 Cooling 7: Processor 0 of 10 Cooling 8: Processor 0 of 10 Cooling 9: intel_powerclamp no state information available Cooling 10: x86_pkg_temp no state information available Cooling 11: Processor 0 of 10</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>### 如何使用 Batstat 命令查看筆記本電池狀態  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`batstat\` 是一個在 Linux 終端打印電池信息的命令列工具。</span></span></code></pre></div><p>Status: Charging Max energy: 50.00 Wh Energy left: 24.50 Wh Power Consumption: 26.40 W Percentage left: 49.00% Average power Consumption: 0.00 W Time elapsed: 0: 0:12 since 49.00% = Time ======== Percent ============================================ 0: 0: 0 49.00%</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>### 如何使用 sysfs 文件系統查看筆記本電池狀態  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>sysfs 文件系統是一個提供了內核數據結構接口的偽文件系統。sysfs 下的文件提供有關設備、內核模組、文件系統和其他內核組件的信息。  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>sysfs 文件系統通常掛載在 \`/sys\`。通常來説，它會被系統自動掛載，但是也可以使用例如 \`mount -t sysfs sysfs /sys\` 命令進行手動掛載。  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 sysfs 文件系統中的很多文件都是隻讀的，但也有一些是可寫的，允許更改內核變量。為了避免冗餘，符號鏈接被大量用於連接文件系統數中的條目。</span></span></code></pre></div><p>$ cat /sys/class/power_supply/BAT0/* 0 51 Normal 0 cat: /sys/class/power_supply/BAT0/device: Is a directory 52260000 60000000 26660000 SMP L14M4P23 cat: /sys/class/power_supply/BAT0/power: Is a directory 27656000 1 756 Charging cat: /sys/class/power_supply/BAT0/subsystem: Is a directory Li-ion Battery POWER_SUPPLY_NAME=BAT0 POWER_SUPPLY_STATUS=Charging POWER_SUPPLY_PRESENT=1 POWER_SUPPLY_TECHNOLOGY=Li-ion POWER_SUPPLY_CYCLE_COUNT=0 POWER_SUPPLY_VOLTAGE_MIN_DESIGN=14800000 POWER_SUPPLY_VOLTAGE_NOW=15840000 POWER_SUPPLY_POWER_NOW=27656000 POWER_SUPPLY_ENERGY_FULL_DESIGN=60000000 POWER_SUPPLY_ENERGY_FULL=52260000 POWER_SUPPLY_ENERGY_NOW=26660000 POWER_SUPPLY_CAPACITY=51 POWER_SUPPLY_CAPACITY_LEVEL=Normal POWER_SUPPLY_MODEL_NAME=L14M4P23 POWER_SUPPLY_MANUFACTURER=SMP POWER_SUPPLY_SERIAL_NUMBER= 756 14800000 15840000</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>via: https://www.2daygeek.com/check-laptop-battery-status-and-charging-state-in-linux-terminal/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>作者：[Magesh Maruthamuthu][a]</span></span>
<span class="line"><span>選題：[lujun9972][b]</span></span>
<span class="line"><span>譯者：[dianbanjiu](https://github.com/dianbanjiu)</span></span>
<span class="line"><span>校對：[wxy](https://github.com/wxy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>本文由 [LCTT](https://github.com/LCTT/TranslateProject) 原創編譯，[Linux中國](https://linux.cn/) 榮譽推出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[a]: https://www.2daygeek.com/author/magesh/</span></span>
<span class="line"><span>[b]: https://github.com/lujun9972</span></span>
<span class="line"><span>[1]: https://upower.freedesktop.org/</span></span></code></pre></div>`,36)])])}const y=a(i,[["render",l]]);export{u as __pageData,y as default};
