import{_ as i,a0 as s,w as d,s as p,ao as l,I as a,x as e,a1 as o,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"Linux基础：如何找出你的系统所支持的最大内存 | LCTT x X-CMD","titleTemplate":false,"description":"Linux基础：如何找出你的系统所支持的最大内存 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux基础：如何找出你的系统所支持的最大内存 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux基础：如何找出你的系统所支持的最大内存 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150304 Linux Basics--How To Find Maximum Supported RAM By Your System","title":"Linux基础：如何找出你的系统所支持的最大内存","tag":"201503","desc":""},"relativePath":"201503/20150304 Linux Basics--How To Find Maximum Supported RAM By Your System.md","filePath":"[post].md"}'),c={name:"201503/20150304 Linux Basics--How To Find Maximum Supported RAM By Your System.md"};function y(u,n,M,m,D,S){const t=s("Link");return d(),p("div",null,[n[13]||(n[13]=l(`<h1 id="linux基础-如何找出你的系统所支持的最大内存" tabindex="-1">Linux基础：如何找出你的系统所支持的最大内存 <a class="header-anchor" href="#linux基础-如何找出你的系统所支持的最大内存" aria-label="Permalink to “Linux基础：如何找出你的系统所支持的最大内存”">​</a></h1><p><img src="https://1102047360.rsc.cdn77.org/wp-content/uploads/2015/02/RAM-790x527.jpg" alt=""></p><p>大多数情况下你可以从BIOS、产品目录或者干脆手动找出你的系统所持的最大内存。这里，我们介绍一种简单有用的技巧——使用Dmidecode来找出系统支持的最大内存，这样你就无需打开机箱或者参照BIOS和产品目录了。</p><h3 id="什么是-dmidecode" tabindex="-1">什么是 Dmidecode? <a class="header-anchor" href="#什么是-dmidecode" aria-label="Permalink to “什么是 Dmidecode?”">​</a></h3><p>就像你可能知道的一样， <strong>Dmidecode</strong>是一个将计算机DMI（又名SMBIOS）表的内容转换为可读格式的工具。这个表包含了系统硬件组件的介绍以及其他一些如序列号和IOS版本等有用的信息。使用Dmidecode你能够获取此项信息，而无需去探测真实的硬件。</p><h3 id="找出你的系统所支持的最大内存" tabindex="-1">找出你的系统所支持的最大内存 <a class="header-anchor" href="#找出你的系统所支持的最大内存" aria-label="Permalink to “找出你的系统所支持的最大内存”">​</a></h3><p>请确定你已经在系统中安装了dmidecode，我觉得你的操作系统应该已经自动安装过了，不过并不非常确定。</p><p><strong>在基于Deb的系统中安装</strong></p><pre><code>sudo apt-get install dmidecode
</code></pre><p><strong>在基于RPM的系统中安装</strong></p><pre><code>sudo yum install dmidecode
</code></pre><p><strong>在SUSE/openSUSE中安装</strong></p><pre><code>sudo zypper in dmidecode
</code></pre><p>好了，我们已经安装了dmidecode，接下来让我们找出支持的最大内存。输入以下命令：</p><pre><code>sudo dmidecode -t 16
</code></pre><p><strong>输出样本</strong></p><pre><code># dmidecode 2.12
SMBIOS 2.6 present.

Handle 0x0014, DMI type 16, 15 bytes
Physical Memory Array
    Location: System Board Or Motherboard
    Use: System Memory
    Error Correction Type: None
    Maximum Capacity: 16 GB
    Error Information Handle: Not Provided
    Number Of Devices: 2
</code></pre><p>就像你看到的，我的系统支持最大内存到16G，并且有两个内存插槽，简单吧？</p><p>接下来，让我们找出现在已经安装的内存的详细信息。</p><pre><code>sudo dmidecode -t 17
</code></pre><p><strong>输出样本</strong></p><pre><code># dmidecode 2.12
SMBIOS 2.6 present.

Handle 0x0017, DMI type 17, 28 bytes
Memory Device
    Array Handle: 0x0014
    Error Information Handle: 0x0000
    Total Width: Unknown
    Data Width: Unknown
    Size: No Module Installed
    Form Factor: DIMM
    Set: None
    Locator: DIMM_B
    Bank Locator: BANK 2
    Type: Unknown
    Type Detail: None
    Speed: Unknown
    Manufacturer: Not Specified
    Serial Number: Not Specified
    Asset Tag: Not Specified
    Part Number: Not Specified
    Rank: Unknown

Handle 0x0015, DMI type 17, 28 bytes
Memory Device
    Array Handle: 0x0014
    Error Information Handle: 0x0000
    Total Width: 64 bits
    Data Width: 64 bits
    Size: 4096 MB
    Form Factor: SODIMM
    Set: None
    Locator: DIMM_A
    Bank Locator: BANK 0
    Type: DDR3
    Type Detail: Synchronous
    Speed: 1067 MHz
    Manufacturer: 014F
    Serial Number: 00092AF2
    Asset Tag: 54114000     
    Part Number: JM1066KSN-4G      
    Rank: Unknown
</code></pre><p>就像上边输出的一样，我在插槽1里边安装了一个内存条。内存大小为<strong>4G</strong>，类型为<strong>DDR3</strong>，速度为<strong>1067 MHz</strong>。</p><p>同样的，我们可以通过下边命令得到完整的内存信息。</p><pre><code>sudo dmidecode -t memory
sudo dmidecode -t memory | less
sudo dmidecode -t memory | more
</code></pre><p><strong>输出样本</strong></p><pre><code># dmidecode 2.12
SMBIOS 2.6 present.

Handle 0x0014, DMI type 16, 15 bytes
Physical Memory Array
    Location: System Board Or Motherboard
    Use: System Memory
    Error Correction Type: None
    Maximum Capacity: 16 GB
    Error Information Handle: Not Provided
    Number Of Devices: 2

Handle 0x0017, DMI type 17, 28 bytes
Memory Device
    Array Handle: 0x0014
    Error Information Handle: 0x0000
    Total Width: Unknown
    Data Width: Unknown
    Size: No Module Installed
    Form Factor: DIMM
    Set: None
    Locator: DIMM_B
    Bank Locator: BANK 2
    Type: Unknown
    Type Detail: None
    Speed: Unknown
    Manufacturer: Not Specified
    Serial Number: Not Specified
    Asset Tag: Not Specified
    Part Number: Not Specified
    Rank: Unknown

Handle 0x0015, DMI type 17, 28 bytes
Memory Device
    Array Handle: 0x0014
    Error Information Handle: 0x0000
    Total Width: 64 bits
    Data Width: 64 bits
    Size: 4096 MB
    Form Factor: SODIMM
    Set: None
    Locator: DIMM_A
    Bank Locator: BANK 0
    Type: DDR3
    Type Detail: Synchronous
    Speed: 1067 MHz
    Manufacturer: 014F
    Serial Number: 00092AF2
    Asset Tag: 54114000     
    Part Number: JM1066KSN-4G      
    Rank: Unknown
</code></pre><p>如果你好奇想要知道整个系统的详细信息，例如主板、内存、BIOS等，那么可以输入以下命令来获取。</p><pre><code>sudo dmidecode
</code></pre><p><strong>输出样本</strong></p><pre><code># dmidecode 2.12
SMBIOS 2.6 present.
48 structures occupying 2173 bytes.
Table at 0x000EB840.

Handle 0xDA00, DMI type 218, 251 bytes
OEM-specific Type
    Header and Data:
        DA FB 00 DA B2 00 0D 5F 0F 37 40 7D 00 00 00 00
        00 7E 00 01 00 00 00 DC 01 00 80 02 00 DD 01 00
        80 03 00 75 01 01 80 01 00 76 01 02 80 01 00 2D
        01 03 80 01 00 2E 01 03 80 00 00 81 01 07 80 00
        00 82 01 07 80 01 00 83 01 08 80 00 00 84 01 08
        80 01 00 85 01 06 80 00 00 86 01 06 80 01 00 58
        02 05 80 00 00 57 02 05 80 01 00 9C 00 02 00 01
        00 9B 00 02 00 00 00 8A 01 03 00 01 00 89 01 03
        00 00 00 7F 01 04 00 00 00 80 01 04 00 01 00 53
        01 05 00 00 00 52 01 05 00 01 00 7B 01 06 00 00
        00 7C 01 06 00 01 00 94 01 07 00 00 00 93 01 07
        00 01 00 7D 00 08 00 00 00 2D 00 09 00 01 00 2E
        00 09 00 00 00 6E 00 0A 00 00 00 95 00 0B 00 01
        00 96 00 0B 00 00 00 2F 02 0C 00 01 00 30 02 0C
        00 00 00 50 02 0D 00 00 00 51 02 0D 00 01 00 52
        02 0D 00 02 00 FF FF 00 00 00 00

Handle 0xDA01, DMI type 218, 59 bytes
OEM-specific Type
    Header and Data:
        DA 3B 01 DA B2 00 0D 5F 0F 37 40 53 02 0D 00 03
        00 54 02 0D 00 04 00 56 02 0D 00 05 00 4B 01 0E
        00 01 00 4A 01 0E 00 00 00 EA 00 0F 00 01 00 EB
        00 0F 00 00 00 FF FF 00 00 00 00

Handle 0x0004, DMI type 4, 42 bytes
Processor Information
    Socket Designation: CPU 1
    Type: Central Processor
    Family: Core i3
    Manufacturer: Intel            
    ID: A7 06 03 01 FF FB AB BE
    Signature: Type 0, Family 6, Model 42, Stepping 7
    Flags:
        FPU (Floating-point unit on-chip)
        VME (Virtual mode extension)
        DE (Debugging extension)
        PSE (Page size extension)
        TSC (Time stamp counter)
        MSR (Model specific registers)
        PAE (Physical address extension)
        MCE (Machine check exception)
        CX8 (CMPXCHG8 instruction supported)
        APIC (On-chip APIC hardware supported)
        SEP (Fast system call)
        MTRR (Memory type range registers)
        PGE (Page global enable)
        MCA (Machine check architecture)
        CMOV (Conditional move instruction supported)
        PAT (Page attribute table)
        PSE-36 (36-bit page size extension)
        CLFSH (CLFLUSH instruction supported)
        DS (Debug store)
        ACPI (ACPI supported)
        MMX (MMX technology supported)
        FXSR (FXSAVE and FXSTOR instructions supported)
        SSE (Streaming SIMD extensions)
        SSE2 (Streaming SIMD extensions 2)
        SS (Self-snoop)
        HTT (Multi-threading)
        TM (Thermal monitor supported)
        PBE (Pending break enabled)
    Version: Intel(R) Core(TM) i3-2350M CPU @ 2.30GHz       
    Voltage: 1.1 V
    External Clock: 100 MHz
    Max Speed: 2300 MHz
    Current Speed: 2300 MHz
    Status: Populated, Enabled
    Upgrade: Other
    L1 Cache Handle: 0x0005
    L2 Cache Handle: 0x0006
    L3 Cache Handle: 0x0007
    Serial Number: To Be Filled By O.E.M.
    Asset Tag: To Be Filled By O.E.M.
    Part Number: To Be Filled By O.E.M.
    Core Count: 2
    Core Enabled: 1
    Thread Count: 2
    Characteristics:
        64-bit capable

Handle 0x0005, DMI type 7, 19 bytes
Cache Information
    Socket Designation: L1-Cache
    Configuration: Enabled, Not Socketed, Level 1
    Operational Mode: Write Back
    Location: Internal
    Installed Size: 64 kB
    Maximum Size: 64 kB
    Supported SRAM Types:
        Other
    Installed SRAM Type: Other
    Speed: Unknown
    Error Correction Type: None
    System Type: Unified
    Associativity: 8-way Set-associative

Handle 0x0006, DMI type 7, 19 bytes
Cache Information
    Socket Designation: L2-Cache
    Configuration: Enabled, Not Socketed, Level 2
    Operational Mode: Varies With Memory Address
    Location: Internal
    Installed Size: 512 kB
    Maximum Size: 512 kB
    Supported SRAM Types:
        Other
    Installed SRAM Type: Other
    Speed: Unknown
    Error Correction Type: None
    System Type: Unified
    Associativity: 8-way Set-associative

Handle 0x0007, DMI type 7, 19 bytes
Cache Information
    Socket Designation: L3-Cache
    Configuration: Enabled, Not Socketed, Level 3
    Operational Mode: Varies With Memory Address
    Location: Internal
    Installed Size: 3072 kB
    Maximum Size: 3072 kB
    Supported SRAM Types:
        Other
    Installed SRAM Type: Other
    Speed: Unknown
    Error Correction Type: None
    System Type: Unified
    Associativity: Other

Handle 0x0008, DMI type 8, 9 bytes
Port Connector Information
    Internal Reference Designator: J1A1
    Internal Connector Type: None
    External Reference Designator: PS2Mouse
    External Connector Type: PS/2
    Port Type: Mouse Port

Handle 0x0009, DMI type 8, 9 bytes
Port Connector Information
    Internal Reference Designator: J1A1
    Internal Connector Type: None
    External Reference Designator: Keyboard
    External Connector Type: PS/2
    Port Type: Keyboard Port

Handle 0x000A, DMI type 8, 9 bytes
Port Connector Information
    Internal Reference Designator: J2A2B
    Internal Connector Type: None
    External Reference Designator: Video
    External Connector Type: DB-15 female
    Port Type: Video Port

Handle 0x000B, DMI type 8, 9 bytes
Port Connector Information
    Internal Reference Designator: J3A1
    Internal Connector Type: None
    External Reference Designator: USB1
    External Connector Type: Access Bus (USB)
    Port Type: USB

Handle 0x000C, DMI type 8, 9 bytes
Port Connector Information
    Internal Reference Designator: J3A1
    Internal Connector Type: None
    External Reference Designator: USB2
    External Connector Type: Access Bus (USB)
    Port Type: USB

Handle 0x000D, DMI type 8, 9 bytes
Port Connector Information
    Internal Reference Designator: J3A1
    Internal Connector Type: None
    External Reference Designator: USB3
    External Connector Type: Access Bus (USB)
    Port Type: USB

Handle 0x000E, DMI type 8, 9 bytes
Port Connector Information
    Internal Reference Designator: J5A1
    Internal Connector Type: None
    External Reference Designator: LAN
    External Connector Type: RJ-45
    Port Type: Network Port

Handle 0x000F, DMI type 9, 17 bytes
System Slot Information
    Designation: J6B2
    Type: x16 PCI Express
    Current Usage: In Use
    Length: Long
    ID: 0
    Characteristics:
        3.3 V is provided
        Opening is shared
        PME signal is supported
    Bus Address: 0000:00:01.0

Handle 0x0010, DMI type 9, 17 bytes
System Slot Information
    Designation: J6B1
    Type: x1 PCI Express
    Current Usage: In Use
    Length: Short
    ID: 1
    Characteristics:
        3.3 V is provided
        Opening is shared
        PME signal is supported
    Bus Address: 0000:00:1c.3

Handle 0x0012, DMI type 11, 5 bytes
OEM Strings
    String 1: Dell System
    String 2: 5[0003]
    String 3: 13[P18F]

Handle 0x0013, DMI type 12, 5 bytes
System Configuration Options
    Option 1: To Be Filled By O.E.M.

Handle 0x001C, DMI type 21, 7 bytes
Built-in Pointing Device
    Type: Touch Pad
    Interface: Bus Mouse
    Buttons: 2

Handle 0x001D, DMI type 22, 26 bytes
Portable Battery
    Location: Sys. Battery Bay
    Manufacturer: Sanyo              
    Serial Number: 5390     
    Name: DELL 4YRJH22
    Chemistry: Lithium Ion
    Design Capacity: 45000 mWh
    Design Voltage: 10800 mV
    SBDS Version: 1.0                
    Maximum Error: 2%
    SBDS Manufacture Date: 2012-02-28
    OEM-specific Information: 0x00000001

Handle 0x001E, DMI type 32, 20 bytes
System Boot Information
    Status: No errors detected

Handle 0x0020, DMI type 27, 12 bytes
Cooling Device
    Type: Fan
    Status: OK
    OEM-specific Information: 0x00000000

Handle 0x0021, DMI type 28, 20 bytes
Temperature Probe
    Description: CPU Internal Temperature
    Location: Processor
    Status: OK
    Maximum Value: 127.0 deg C
    Minimum Value: 0.0 deg C
    Resolution: 1.000 deg C
    Tolerance: 0.5 deg C
    Accuracy: Unknown
    OEM-specific Information: 0x00000000

Handle 0xB000, DMI type 176, 5 bytes
OEM-specific Type
    Header and Data:
        B0 05 00 B0 00

Handle 0xB100, DMI type 177, 12 bytes
OEM-specific Type
    Header and Data:
        B1 0C 00 B1 1A 0E 00 00 00 00 00 00

Handle 0x0025, DMI type 209, 12 bytes
OEM-specific Type
    Header and Data:
        D1 0C 25 00 00 00 00 03 05 01 00 03

Handle 0x0026, DMI type 210, 12 bytes
OEM-specific Type
    Header and Data:
        D2 0C 26 00 00 00 00 03 05 20 01 03

Handle 0x0027, DMI type 211, 13 bytes
OEM-specific Type
    Header and Data:
        D3 0D 27 00 01 00 00 00 00 02 03 04 04
    Strings:
        Front               

Handle 0x0028, DMI type 212, 57 bytes
OEM-specific Type
    Header and Data:
        D4 39 28 00 70 00 71 00 01 49 50 48 9C 00 49 FC
        01 9B 00 49 FC 00 7F 01 4A FB 04 80 01 4A FB 00
        53 01 4A F7 08 52 01 4A F7 08 7B 01 4A EF 10 7C
        01 4A EF 10 FF FF 00 00 00

Handle 0x002A, DMI type 217, 8 bytes
OEM-specific Type
    Header and Data:
        D9 08 2A 00 01 02 00 00
    Strings:                                       

Handle 0x002B, DMI type 219, 11 bytes
OEM-specific Type
    Header and Data:
        DB 0B 2B 00 00 01 02 03 00 04 05
    Strings:                                                                                                    

Handle 0x002C, DMI type 220, 22 bytes
OEM-specific Type
    Header and Data:
        DC 16 2C 00 01 F0 00 00 02 F0 00 00 00 00 03 F0
        04 F0 00 00 00 00

Handle 0x002D, DMI type 221, 19 bytes
OEM-specific Type
    Header and Data:
        DD 13 2D 00 00 00 00 00 00 03 00 00 00 00 00 00
        00 00 00

Handle 0x002E, DMI type 222, 16 bytes
OEM-specific Type
    Header and Data:
        DE 10 2E 00 01 08 FF FF 00 00 00 00 00 00 00 00

Handle 0x0014, DMI type 16, 15 bytes
Physical Memory Array
    Location: System Board Or Motherboard
    Use: System Memory
    Error Correction Type: None
    Maximum Capacity: 16 GB
    Error Information Handle: Not Provided
    Number Of Devices: 2

Handle 0x0016, DMI type 20, 19 bytes
Memory Device Mapped Address
    Starting Address: 0x00000000000
    Ending Address: 0x000FFFFFFFF
    Range Size: 4 GB
    Physical Device Handle: 0x0015
    Memory Array Mapped Address Handle: 0x0018
    Partition Row Position: 1
    Interleave Position: 1
    Interleaved Data Depth: 1

Handle 0x0017, DMI type 17, 28 bytes
Memory Device
    Array Handle: 0x0014
    Error Information Handle: 0x0000
    Total Width: Unknown
    Data Width: Unknown
    Size: No Module Installed
    Form Factor: DIMM
    Set: None
    Locator: DIMM_B
    Bank Locator: BANK 2
    Type: Unknown
    Type Detail: None
    Speed: Unknown
    Manufacturer: Not Specified
    Serial Number: Not Specified
    Asset Tag: Not Specified
    Part Number: Not Specified
    Rank: Unknown

Handle 0x0018, DMI type 19, 15 bytes
Memory Array Mapped Address
    Starting Address: 0x00000000000
    Ending Address: 0x000FFFFFFFF
    Range Size: 4 GB
    Physical Array Handle: 0x0014
    Partition Width: 2

Handle 0x002F, DMI type 13, 22 bytes
BIOS Language Information
    Language Description Format: Abbreviated
    Installable Languages: 1
        eng
        Currently Installed Language: eng

Handle 0x0030, DMI type 131, 64 bytes
OEM-specific Type
    Header and Data:
        83 40 30 00 31 00 00 00 00 00 00 00 00 00 00 00
        F8 00 4B 1C FF FF FF FF 01 00 00 00 00 00 07 00
        AD 04 04 00 00 00 00 00 C8 00 FF FF 00 00 00 00
        00 00 00 00 32 00 00 00 76 50 72 6F 00 00 00 00

Handle 0x0029, DMI type 216, 9 bytes
OEM-specific Type
    Header and Data:
        D8 09 29 00 01 02 01 00 00
    Strings:
        INTEL
        0000

Handle 0x0000, DMI type 0, 24 bytes
BIOS Information
    Vendor: Dell Inc.
    Version: A05
    Release Date: 08/03/2012
    Address: 0xF0000
    Runtime Size: 64 kB
    ROM Size: 2048 kB
    Characteristics:
        MCA is supported
        PCI is supported
        BIOS is upgradeable
        BIOS shadowing is allowed
        ESCD support is available
        Boot from CD is supported
        Selectable boot is supported
        BIOS ROM is socketed
        EDD is supported
        5.25&quot;/1.2 MB floppy services are supported (int 13h)
        3.5&quot;/720 kB floppy services are supported (int 13h)
        3.5&quot;/2.88 MB floppy services are supported (int 13h)
        Print screen service is supported (int 5h)
        8042 keyboard services are supported (int 9h)
        Serial services are supported (int 14h)
        Printer services are supported (int 17h)
        CGA/mono video services are supported (int 10h)
        ACPI is supported
        USB legacy is supported
        ATAPI Zip drive boot is supported
        BIOS boot specification is supported
        Targeted content distribution is supported
    BIOS Revision: 0.5
    Firmware Revision: 0.5

Handle 0x0002, DMI type 2, 15 bytes
Base Board Information
    Manufacturer: Dell Inc.
    Product Name: 01HXXJ
    Version: A05
    Serial Number: .JSQ7PA1.CN7117623M00J2.
    Asset Tag: Not Specified
    Features:
        Board is a hosting board
        Board is replaceable
    Location In Chassis: To Be Filled By O.E.M.
    Chassis Handle: 0x0003
    Type: Motherboard
    Contained Object Handles: 0

Handle 0x0003, DMI type 3, 21 bytes
Chassis Information
    Manufacturer: Dell Inc.
    Type: Portable
    Lock: Not Present
    Version: Not Specified
    Serial Number: JSR1
    Asset Tag: Not Specified
    Boot-up State: Safe
    Power Supply State: Safe
    Thermal State: Safe
    Security Status: None
    OEM Information: 0x00000000
    Height: Unspecified
    Number Of Power Cords: 1
    Contained Elements: 0

Handle 0x0001, DMI type 1, 27 bytes
System Information
    Manufacturer: Dell Inc.
    Product Name: Inspiron N5050
    Version: Not Specified
    Serial Number: JSR1
    UUID: 4C4C4544-0053-5110-8029-CAC05241
    Wake-up Type: Power Switch
    SKU Number: To be filled by O.E.M.
    Family:                       

Handle 0x0024, DMI type 208, 12 bytes
OEM-specific Type
    Header and Data:
        D0 0C 24 00 02 05 FE 00 04 05 01 02
    Strings:
        20120323
        20120323

Handle 0x0011, DMI type 10, 6 bytes
On Board Device Information
    Type: Video
    Status: Enabled
    Description: Mobile Intel SandyBridge HD Graphics

Handle 0x0015, DMI type 17, 28 bytes
Memory Device
    Array Handle: 0x0014
    Error Information Handle: 0x0000
    Total Width: 64 bits
    Data Width: 64 bits
    Size: 4096 MB
    Form Factor: SODIMM
    Set: None
    Locator: DIMM_A
    Bank Locator: BANK 0
    Type: DDR3
    Type Detail: Synchronous
    Speed: 1067 MHz
    Manufacturer: 014F
    Serial Number: 0009F2
    Asset Tag: 54114000     
    Part Number: JM1066-4G      
    Rank: Unknown

Handle 0x0031, DMI type 127, 4 bytes
End Of Table
</code></pre><p>好了，就是这样。</p><hr>`,33)),a("p",null,[n[1]||(n[1]=e("via: ",-1)),o(t,{href:"http://www.unixmen.com/linux-basics-how-to-find-maximum-supported-ram-by-your-system/"},{default:r(()=>[...n[0]||(n[0]=[e("http://www.unixmen.com/linux-basics-how-to-find-maximum-supported-ram-by-your-system/",-1)])]),_:1})]),a("p",null,[n[5]||(n[5]=e("作者：",-1)),o(t,{href:"https://www.unixmen.com/author/sk/"},{default:r(()=>[...n[2]||(n[2]=[e("SK",-1)])]),_:1}),n[6]||(n[6]=e(" 译者：",-1)),o(t,{href:"https://github.com/mr-ping"},{default:r(()=>[...n[3]||(n[3]=[e("mr-ping",-1)])]),_:1}),n[7]||(n[7]=e(" 校对：",-1)),o(t,{href:"https://github.com/wxy"},{default:r(()=>[...n[4]||(n[4]=[e("wxy",-1)])]),_:1})]),a("p",null,[n[10]||(n[10]=e("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[8]||(n[8]=[e("LCTT",-1)])]),_:1}),n[11]||(n[11]=e(" 原创翻译，",-1)),o(t,{href:"http://linux.cn/"},{default:r(()=>[...n[9]||(n[9]=[e("Linux中国",-1)])]),_:1}),n[12]||(n[12]=e(" 荣誉推出",-1))])])}const b=i(c,[["render",y]]);export{f as __pageData,b as default};
