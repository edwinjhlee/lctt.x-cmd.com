import{_ as a,w as n,s as p,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const u=JSON.parse('{"title":"从 Linux 终端查看笔记本电池状态和等级的 5 个方法 | LCTT x X-CMD","titleTemplate":false,"description":"从 Linux 终端查看笔记本电池状态和等级的 5 个方法 | LCTT (201812) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"从 Linux 终端查看笔记本电池状态和等级的 5 个方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"从 Linux 终端查看笔记本电池状态和等级的 5 个方法 | LCTT (201812) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201812/20181210 5 Ways To Check Laptop Battery Status And Level From Linux Terminal","title":"从 Linux 终端查看笔记本电池状态和等级的 5 个方法","tag":"201812","desc":""},"relativePath":"201812/20181210 5 Ways To Check Laptop Battery Status And Level From Linux Terminal.md","filePath":"[post].md"}'),i={name:"201812/20181210 5 Ways To Check Laptop Battery Status And Level From Linux Terminal.md"};function l(t,s,c,o,r,h){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="从-linux-终端查看笔记本电池状态和等级的-5-个方法" tabindex="-1">从 Linux 终端查看笔记本电池状态和等级的 5 个方法 <a class="header-anchor" href="#从-linux-终端查看笔记本电池状态和等级的-5-个方法" aria-label="Permalink to “从 Linux 终端查看笔记本电池状态和等级的 5 个方法”">​</a></h1><p>我们可以轻松地通过图形化界面查看当前电量百分比、是否在充电以及当前电量还可以使用多长时间等电池状态，但是却无法查看电池健康度等相关信息。</p><p>在这篇文章就是为了解决这些问题。</p><p>在 Linux 上有很多这样的实用工具，而且可以在命令行使用。</p><p>这篇文章今天就要探讨这个主题，我会尽我所能的覆盖尽可能多的信息。</p><p>每月检查一次你的电池健康度是一个很好的想法。它可以帮你检查你当前遇到的问题是否与电池或者充电相关。</p><p>同时，我们也可以查看电池模组名称、电源、厂商以及电池规格等。</p><p>电源管理是在不使用时关闭电源或者切换系统的组件到低耗模式的一种功能。</p><h3 id="几种在-linux-下检查电池状态的实用工具" tabindex="-1">几种在 Linux 下检查电池状态的实用工具 <a class="header-anchor" href="#几种在-linux-下检查电池状态的实用工具" aria-label="Permalink to “几种在 Linux 下检查电池状态的实用工具”">​</a></h3><ul><li><code>upower</code>：是一个命令行工具，其提供了罗列系统中电源的接口。</li><li><code>acpi</code>：显示来自 <code>/proc</code> 或者 <code>/sys</code> 文件系统中的一些信息，例如电池状态或者热量信息。</li><li><code>batstat</code>：是一个为 Linux 打印电池状态的命令行工具。</li><li><code>tlp</code>：可以为你带来更高级的电源管理，而无需修改任何配置。</li><li><code>class file</code>：这个 sysfs 文件系统是一个提供了内核数据结构接口的伪文件系统。</li></ul><h3 id="如何使用-upower-命令检查笔记本电池状态" tabindex="-1">如何使用 upower 命令检查笔记本电池状态 <a class="header-anchor" href="#如何使用-upower-命令检查笔记本电池状态" aria-label="Permalink to “如何使用 upower 命令检查笔记本电池状态”">​</a></h3><p>[upower][1] 是一个命令行工具，其提供了罗列系统中电源的接口。它在你的电脑上可以控制不同操作的延迟，这可以为你节省很大一部分电量。</p><p>只需要在 Linux 中运行以下命令获取电池以及它所依赖的其他信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ upower -i /org/freedesktop/UPower/devices/battery_BAT0</span></span>
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
<span class="line"><span>    1543847178	10.714	discharging</span></span></code></pre></div><p>使用下面的格式检查电池的特定信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep -i &quot;state\\|percentage\\|time to empty&quot;</span></span>
<span class="line"><span>    state:               discharging</span></span>
<span class="line"><span>    time to empty:       2.1 hours</span></span>
<span class="line"><span>    percentage:          43%</span></span></code></pre></div><p>这个类似于上面的那个，但是是在充电线缆的插入后运行，这也就是为什么下面会显示正在充电状态的原因。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep -i &quot;state\\|percentage\\|time to empty&quot;</span></span>
<span class="line"><span>    state:               charging</span></span>
<span class="line"><span>    percentage:          41%</span></span></code></pre></div><h3 id="如何使用-tlp-命令检查笔记本电池状态" tabindex="-1">如何使用 TLP 命令检查笔记本电池状态 <a class="header-anchor" href="#如何使用-tlp-命令检查笔记本电池状态" aria-label="Permalink to “如何使用 TLP 命令检查笔记本电池状态”">​</a></h3><p>TLP 是一个自由开源的多功能的命令行工具，它可以优化笔记本电池而无需修改任何配置。</p><p>TLP 可以为你的 Linux 带来更高级的电源管理，而无需理解任何技术细节。TLP 默认附带了一个已经为你的电池优化好的配置，所以你可以安装好后就不再管它了。尽管 TLP 是一个可以根据你的需求高度可定制的工具。</p><p>TLP 在绝大多数 Linux 发行版，例如 Arch、Debian、Fedora、Gentoo、openSUSE 等的官方库中都可用。使用你的 Linux 发行版的包管理安装 TLP 即可。</p><p>只需要在 Linux 中运行以下命令获取电池以及其他所依赖的信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tlp-stat -b</span></span>
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
<span class="line"><span>### 如何使用 ACPI 命令检查电池状态  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>ACPI 代表&lt;ruby&gt;高级配置和电源接口&lt;rt&gt;Advanced Configuration and Power Interface&lt;/rt&gt;&lt;/ruby&gt;模块，它们是不同 ACPI 部件的内核模块。它们启用特殊的 ACPI 函数向 \`/proc\` 或者 \`/sys\` 中添加信息。这些信息可以通过事件或者其他监控程序的 acpid 进行解析。</span></span></code></pre></div><p>$ acpi Battery 0: Charging, 43%, 01:05:11 until charged</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>查看电池容量。</span></span></code></pre></div><p>$ acpi -i Battery 0: Charging, 43%, 01:05:07 until charged Battery 0: design capacity 3817 mAh, last full capacity 3324 mAh = 87%</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>查看更多有关电池及其相关的信息。</span></span></code></pre></div><p>$ acpi -V Battery 0: Charging, 43%, 01:05:07 until charged Battery 0: design capacity 3815 mAh, last full capacity 3323 mAh = 87% Adapter 0: on-line Cooling 0: Processor 0 of 10 Cooling 1: Processor 0 of 10 Cooling 2: Processor 0 of 10 Cooling 3: iwlwifi 0 of 19 Cooling 4: Processor 0 of 10 Cooling 5: iwlwifi no state information available Cooling 6: Processor 0 of 10 Cooling 7: Processor 0 of 10 Cooling 8: Processor 0 of 10 Cooling 9: intel_powerclamp no state information available Cooling 10: x86_pkg_temp no state information available Cooling 11: Processor 0 of 10</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>### 如何使用 Batstat 命令查看笔记本电池状态  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`batstat\` 是一个在 Linux 终端打印电池信息的命令行工具。</span></span></code></pre></div><p>Status: Charging Max energy: 50.00 Wh Energy left: 24.50 Wh Power Consumption: 26.40 W Percentage left: 49.00% Average power Consumption: 0.00 W Time elapsed: 0: 0:12 since 49.00% = Time ======== Percent ============================================ 0: 0: 0 49.00%</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>### 如何使用 sysfs 文件系统查看笔记本电池状态  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>sysfs 文件系统是一个提供了内核数据结构接口的伪文件系统。sysfs 下的文件提供有关设备、内核模块、文件系统和其他内核组件的信息。  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>sysfs 文件系统通常挂载在 \`/sys\`。通常来说，它会被系统自动挂载，但是也可以使用例如 \`mount -t sysfs sysfs /sys\` 命令进行手动挂载。  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 sysfs 文件系统中的很多文件都是只读的，但也有一些是可写的，允许更改内核变量。为了避免冗余，符号链接被大量用于连接文件系统数中的条目。</span></span></code></pre></div><p>$ cat /sys/class/power_supply/BAT0/* 0 51 Normal 0 cat: /sys/class/power_supply/BAT0/device: Is a directory 52260000 60000000 26660000 SMP L14M4P23 cat: /sys/class/power_supply/BAT0/power: Is a directory 27656000 1 756 Charging cat: /sys/class/power_supply/BAT0/subsystem: Is a directory Li-ion Battery POWER_SUPPLY_NAME=BAT0 POWER_SUPPLY_STATUS=Charging POWER_SUPPLY_PRESENT=1 POWER_SUPPLY_TECHNOLOGY=Li-ion POWER_SUPPLY_CYCLE_COUNT=0 POWER_SUPPLY_VOLTAGE_MIN_DESIGN=14800000 POWER_SUPPLY_VOLTAGE_NOW=15840000 POWER_SUPPLY_POWER_NOW=27656000 POWER_SUPPLY_ENERGY_FULL_DESIGN=60000000 POWER_SUPPLY_ENERGY_FULL=52260000 POWER_SUPPLY_ENERGY_NOW=26660000 POWER_SUPPLY_CAPACITY=51 POWER_SUPPLY_CAPACITY_LEVEL=Normal POWER_SUPPLY_MODEL_NAME=L14M4P23 POWER_SUPPLY_MANUFACTURER=SMP POWER_SUPPLY_SERIAL_NUMBER= 756 14800000 15840000</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>via: https://www.2daygeek.com/check-laptop-battery-status-and-charging-state-in-linux-terminal/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>作者：[Magesh Maruthamuthu][a]</span></span>
<span class="line"><span>选题：[lujun9972][b]</span></span>
<span class="line"><span>译者：[dianbanjiu](https://github.com/dianbanjiu)</span></span>
<span class="line"><span>校对：[wxy](https://github.com/wxy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>本文由 [LCTT](https://github.com/LCTT/TranslateProject) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[a]: https://www.2daygeek.com/author/magesh/</span></span>
<span class="line"><span>[b]: https://github.com/lujun9972</span></span>
<span class="line"><span>[1]: https://upower.freedesktop.org/</span></span></code></pre></div>`,36)])])}const y=a(i,[["render",l]]);export{u as __pageData,y as default};
