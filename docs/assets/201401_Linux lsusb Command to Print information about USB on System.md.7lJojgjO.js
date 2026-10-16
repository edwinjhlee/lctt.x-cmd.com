import{_ as i,a0 as b,w as l,s as a,I as s,x as e,a1 as r,A as o,ao as u}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"Linux中显示系统中USB信息的lsusb命令 | LCTT x X-CMD","titleTemplate":false,"description":"Linux中显示系统中USB信息的lsusb命令 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux中显示系统中USB信息的lsusb命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux中显示系统中USB信息的lsusb命令 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/Linux lsusb Command to Print information about USB on System","title":"Linux中显示系统中USB信息的lsusb命令","tag":"201401","desc":""},"relativePath":"201401/Linux lsusb Command to Print information about USB on System.md","filePath":"[post].md"}'),d={name:"201401/Linux lsusb Command to Print information about USB on System.md"};function p(c,n,v,m,D,g){const t=b("Link");return l(),a("div",null,[n[24]||(n[24]=s("h1",{id:"linux中显示系统中usb信息的lsusb命令",tabindex:"-1"},[e("Linux中显示系统中USB信息的lsusb命令 "),s("a",{class:"header-anchor",href:"#linux中显示系统中usb信息的lsusb命令","aria-label":"Permalink to “Linux中显示系统中USB信息的lsusb命令”"},"​")],-1)),s("p",null,[n[1]||(n[1]=s("strong",null,"通用串行总线",-1)),n[2]||(n[2]=e("（",-1)),n[3]||(n[3]=s("strong",null,"USB",-1)),n[4]||(n[4]=e("）被设计成为连接计算机外设的标准，如键盘、鼠标、打印机、数码相机、便携式媒体播放器、磁盘和网络适配器等等 - 来源：",-1)),r(t,{href:"http://en.wikipedia.org/wiki/USB"},{default:o(()=>[...n[0]||(n[0]=[e("Wikipedia",-1)])]),_:1})]),n[25]||(n[25]=u(`<p><img src="http://linoxide.com/wp-content/uploads/2013/12/lsusb-linux-command.jpg" alt="lsusb 命令"></p><p>它已经成为了一个工业标准，现在很难看到一个没有USB口的计算机了。USB闪存的使用使得它更加流行。在Linux上，我们可以使用<strong>lsusb</strong>来列出USB设备和它的属性。</p><h3 id="什么是lsusb" tabindex="-1">什么是lsusb <a class="header-anchor" href="#什么是lsusb" aria-label="Permalink to “什么是lsusb”">​</a></h3><p>在它的手册上，lsusb定义成：</p><blockquote><p>显示系统中以及连接到系统的USB总线信息的工具。</p></blockquote><p>如何运行lsusb? 要运行lsusb，你可以直接在控制台输入lsusb。</p><pre><code>$ lsusb

Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 005 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 006 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 007 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 008 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 002 Device 003: ID 17ef:4811 Lenovo Integrated Webcam [R5U877]
Bus 008 Device 002: ID 0a5c:217f Broadcom Corp. Bluetooth Controller
</code></pre><p><strong>lsusb</strong>会显示驱动和内部连接到你系统的设备。</p><p>下面介绍如何理解输出。我抓取了上面输出的最后一行：</p><pre><code>Bus 008 Device 002 : ID 0a5c:217f Broadcom Corp. Bluetooth Controller
</code></pre><ul><li><strong>Bus 008</strong> : 指明设备连接到哪（哪条总线）</li><li><strong>Device 002</strong> : 表明这是连接到总线上的第二台设备</li><li><strong>ID</strong> : 设备的ID</li><li><strong>Broadcom Corp. Bluetooth Controller</strong> :生产商名字和设备名</li></ul><p>我们同样可以看到在我们的系统中同时使用了USB2.0 root hub驱动和USB 1.1 root hub驱动。</p>`,12)),s("p",null,[n[6]||(n[6]=e("用",-1)),r(t,{href:"http://linoxide.com/linux-command/linux-dmesg-command/"},{default:o(()=>[...n[5]||(n[5]=[e("dmesg",-1)])]),_:1}),n[7]||(n[7]=e("命令同样可以看到。下面是一个例子。",-1))]),n[26]||(n[26]=u(`<pre><code>$ dmesg |grep -i usb

[ 0.353138] usbcore: registered new interface driver usbfs
[ 0.353150] usbcore: registered new interface driver hub
[ 0.353182] usbcore: registered new device driver usb
[ 0.730026] ehci_hcd: USB 2.0 ‘Enhanced’ Host Controller (EHCI) Driver
[ 0.730116] ehci_hcd 0000:00:1a.7: new USB bus registered, assigned bus number 1
[ 0.748019] ehci_hcd 0000:00:1a.7: USB 2.0 started, EHCI 1.00
[ 0.748169] hub 1-0:1.0: USB hub found
[ 0.748336] ehci_hcd 0000:00:1d.7: new USB bus registered, assigned bus number 2
[ 0.768019] ehci_hcd 0000:00:1d.7: USB 2.0 started, EHCI 1.00
[ 0.768147] hub 2-0:1.0: USB hub found
[ 0.768236] ohci_hcd: USB 1.1 ‘Open’ Host Controller (OHCI) Driver
[ 0.768251] uhci_hcd: USB Universal Host Controller Interface driver 
</code></pre><h3 id="如何列出usb详细信息" tabindex="-1">如何列出USB详细信息 <a class="header-anchor" href="#如何列出usb详细信息" aria-label="Permalink to “如何列出USB详细信息”">​</a></h3><p>使用<strong>-v</strong>选项来开启。下面是一个例子。</p><pre><code>$ lsusb -v

Interface Descriptor:
bLength 9
bDescriptorType 4
bInterfaceNumber 1
bAlternateSetting 5
bNumEndpoints 2
bInterfaceClass 224 Wireless
bInterfaceSubClass 1 Radio Frequency
bInterfaceProtocol 1 Bluetooth
iInterface 0
Endpoint Descriptor:
bLength 7
bDescriptorType 5
bEndpointAddress 0×83 EP 3 IN
bmAttributes 1
Transfer Type Isochronous
Synch Type None
Usage Type Data
wMaxPacketSize 0×0040 1x 64 bytes
bInterval 1
Endpoint Descriptor:
bLength 7
bDescriptorType 5
bEndpointAddress 0×03 EP 3 OUT
bmAttributes 1
Transfer Type Isochronous
Synch Type None
Usage Type Data
wMaxPacketSize 0×0040 1x 64 bytes
bInterval 1
</code></pre><h3 id="找出连接了多少usb设备" tabindex="-1">找出连接了多少USB设备 <a class="header-anchor" href="#找出连接了多少usb设备" aria-label="Permalink to “找出连接了多少USB设备”">​</a></h3><p>使用下面的命令</p><pre><code>$ find /dev/bus
</code></pre><p>接着你会看到像下面的输出：</p><pre><code>/dev/bus
/dev/bus/usb
/dev/bus/usb/008
/dev/bus/usb/008/002
/dev/bus/usb/008/001
/dev/bus/usb/007
/dev/bus/usb/007/001
/dev/bus/usb/006
/dev/bus/usb/006/001
/dev/bus/usb/005
/dev/bus/usb/005/001
/dev/bus/usb/004
/dev/bus/usb/004/001
/dev/bus/usb/003
/dev/bus/usb/003/001
/dev/bus/usb/002
/dev/bus/usb/002/004
/dev/bus/usb/002/003
/dev/bus/usb/002/001
/dev/bus/usb/001
/dev/bus/usb/001/001
</code></pre><p>使用<strong>lsusb</strong> 命令 的<strong>-D</strong> 选项，你可以打印特定设备的详细信息。下面是一个博通蓝牙设备的示例。</p><pre><code>$ lsusb -D /dev/bus/usb/008/002

Device: ID 0a5c:217f Broadcom Corp. Bluetooth Controller
Couldn’t open device, some information will be missing
Device Descriptor:
bLength 18
bDescriptorType 1
bcdUSB 2.00
bDeviceClass 224 Wireless
bDeviceSubClass 1 Radio Frequency
bDeviceProtocol 1 Bluetooth
bMaxPacketSize0 64
idVendor 0x0a5c Broadcom Corp.
idProduct 0x217f Bluetooth Controller
bcdDevice 3.60
iManufacturer 1
iProduct 2
iSerial 3
bNumConfigurations 1
Configuration Descriptor:
bLength 9
bDescriptorType 2
wTotalLength 216
bNumInterfaces 4
bConfigurationValue 1
iConfiguration 0
bmAttributes 0xe0
Self Powered
Remote Wakeup
MaxPower 0mA
Interface Descriptor:
bLength 9
bDescriptorType 4
bInterfaceNumber 0
bAlternateSetting 0
bNumEndpoints 3
bInterfaceClass 224 Wireless
bInterfaceSubClass 1 Radio Frequency
bInterfaceProtocol 1 Bluetooth
iInterface 0
Endpoint Descriptor:
bLength 7
bDescriptorType 5
bEndpointAddress 0×81 EP 1 IN
bmAttributes 3
Transfer Type Interrupt
Synch Type None
Usage Type Data
wMaxPacketSize 0×0010 1x 16 bytes
bInterval 1
Endpoint Descriptor:
bLength 7
bDescriptorType 5
bEndpointAddress 0×82 EP 2 IN
bmAttributes 2
Transfer Type Bulk
Synch Type None
Usage Type Data
wMaxPacketSize 0×0040 1x 64 bytes
bInterval 1
Endpoint Descriptor:
bLength 7
bDescriptorType 5
bEndpointAddress 0×02 EP 2 OUT
bmAttributes 2
Transfer Type Bulk
Synch Type None
Usage Type Data
wMaxPacketSize 0×0040 1x 64 bytes
bInterval 1 
</code></pre><h3 id="找出大容量存储设备" tabindex="-1">找出大容量存储设备 <a class="header-anchor" href="#找出大容量存储设备" aria-label="Permalink to “找出大容量存储设备”">​</a></h3><p>既然 <strong>lsusb -v</strong>给我们很详细的信息，那么你或许会错过一些信息。我们可以使用grep命令指定特定的信息。</p><p>大容量存储设备会有一个供应商名和ID。我们可以用它作为一个起点。</p><pre><code>$ lsusb -v |grep -Ei ‘(idVendor|Mass\\ Storage)’

idVendor 0×1005 Apacer Technology, Inc.
bInterfaceClass 8 Mass Storage
</code></pre><p>你可以看到，我们系统上有一个来自Apacer Technology, Inc的USB大容量存储设备。</p><h3 id="以树层级结构输出usb设备" tabindex="-1">以树层级结构输出USB设备 <a class="header-anchor" href="#以树层级结构输出usb设备" aria-label="Permalink to “以树层级结构输出USB设备”">​</a></h3><p>使用 <strong>-t</strong>选项满足这个要求</p><pre><code>$ lsusb -t

/: Bus 08.Port 1: Dev 1, Class=root\\_hub, Driver=uhci_hcd/2p, 12M
/: Bus 07.Port 1: Dev 1, Class=root\\_hub, Driver=uhci_hcd/2p, 12M
/: Bus 06.Port 1: Dev 1, Class=root\\_hub, Driver=uhci_hcd/2p, 12M
/: Bus 05.Port 1: Dev 1, Class=root\\_hub, Driver=uhci_hcd/2p, 12M
/: Bus 04.Port 1: Dev 1, Class=root\\_hub, Driver=uhci_hcd/2p, 12M
/: Bus 03.Port 1: Dev 1, Class=root\\_hub, Driver=uhci_hcd/2p, 12M
/: Bus 02.Port 1: Dev 1, Class=root\\_hub, Driver=ehci_hcd/6p, 480M
|__ Port 1: Dev 4, If 0, Class=stor., Driver=usb-storage, 480M
|__ Port 6: Dev 3, If 0, Class=’bInterfaceClass 0x0e not yet handled’, Driver=uvcvideo, 480M
|__ Port 6: Dev 3, If 1, Class=’bInterfaceClass 0x0e not yet handled’, Driver=uvcvideo, 480M
/: Bus 01.Port 1: Dev 1, Class=root\\_hub, Driver=ehci_hcd/6p, 480M
</code></pre><p>数字<strong>12M和480M</strong> 是<strong>指USB类型的传输速率</strong>。</p><ul><li>12M 意味着 USB 1.0 / 1.1的速率是 12Mbit/s</li><li>480M 意味着 USB 2.0的速率是 480Mbit/s</li></ul>`,21)),s("p",null,[n[9]||(n[9]=e("如果你找到5.0G，那意味这你有USB 3.0类型接口。它有5.0Gbit/s的传输速率。Linux从",-1)),n[10]||(n[10]=s("strong",null,"/var/lib/usbutils/usb.ids",-1)),n[11]||(n[11]=e("识别USB设备的详细信息。或者你可以访问",-1)),r(t,{href:"http://www.linux-usb.org/usb.ids"},{default:o(()=>[...n[8]||(n[8]=[e("Linux-USB.org",-1)])]),_:1}),n[12]||(n[12]=e("获取最新的USB ID列表。",-1))]),n[27]||(n[27]=s("p",null,[e("这些就是lsusb命令的基础。你可以用lsusb命令对你的系统上的USB设备做一个诊断。一般来说，你可以通过lsusb的手册探索命令的更多详细细节。只要输入"),s("strong",null,"man lsab"),e("来打开它的手册。")],-1)),n[28]||(n[28]=s("hr",null,null,-1)),s("p",null,[n[14]||(n[14]=e("via: ",-1)),r(t,{href:"http://linoxide.com/linux-command/linux-lsusb-command-print-usb/"},{default:o(()=>[...n[13]||(n[13]=[e("http://linoxide.com/linux-command/linux-lsusb-command-print-usb/",-1)])]),_:1})]),s("p",null,[n[17]||(n[17]=e("译者：",-1)),r(t,{href:"https://github.com/geekpi"},{default:o(()=>[...n[15]||(n[15]=[e("geekpi",-1)])]),_:1}),n[18]||(n[18]=e(" 校对：",-1)),r(t,{href:"http://blog.csdn.net/tinyeyeser"},{default:o(()=>[...n[16]||(n[16]=[e("Mr小眼儿",-1)])]),_:1})]),s("p",null,[n[21]||(n[21]=e("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...n[19]||(n[19]=[e("LCTT",-1)])]),_:1}),n[22]||(n[22]=e(" 原创翻译，",-1)),r(t,{href:"http://linux.cn/"},{default:o(()=>[...n[20]||(n[20]=[e("Linux中国",-1)])]),_:1}),n[23]||(n[23]=e(" 荣誉推出",-1))])])}const S=i(d,[["render",p]]);export{f as __pageData,S as default};
