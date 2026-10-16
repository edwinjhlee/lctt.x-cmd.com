import{_ as i,a0 as b,w as l,s as a,I as s,x as e,a1 as r,A as o,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"Linux中顯示系統中USB信息的lsusb命令 | LCTT x X-CMD","titleTemplate":false,"description":"Linux中顯示系統中USB信息的lsusb命令 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux中顯示系統中USB信息的lsusb命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux中顯示系統中USB信息的lsusb命令 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/Linux lsusb Command to Print information about USB on System","title":"Linux中顯示系統中USB信息的lsusb命令","tag":"201401","desc":""},"relativePath":"201401/Linux lsusb Command to Print information about USB on System.md","filePath":"[post].md"}'),d={name:"201401/Linux lsusb Command to Print information about USB on System.md"};function p(c,n,v,m,D,g){const t=b("Link");return l(),a("div",null,[n[24]||(n[24]=s("h1",{id:"linux中顯示系統中usb信息的lsusb命令",tabindex:"-1"},[e("Linux中顯示系統中USB信息的lsusb命令 "),s("a",{class:"header-anchor",href:"#linux中顯示系統中usb信息的lsusb命令","aria-label":"Permalink to “Linux中顯示系統中USB信息的lsusb命令”"},"​")],-1)),s("p",null,[n[1]||(n[1]=s("strong",null,"通用串行總線",-1)),n[2]||(n[2]=e("（",-1)),n[3]||(n[3]=s("strong",null,"USB",-1)),n[4]||(n[4]=e("）被設計成為連接計算機外設的標準，如鍵盤、鼠標、打印機、數碼相機、便攜式媒體播放器、磁盤和網絡適配器等等 - 來源：",-1)),r(t,{href:"http://en.wikipedia.org/wiki/USB"},{default:o(()=>[...n[0]||(n[0]=[e("Wikipedia",-1)])]),_:1})]),n[25]||(n[25]=u(`<p><img src="http://linoxide.com/wp-content/uploads/2013/12/lsusb-linux-command.jpg" alt="lsusb 命令"></p><p>它已經成為了一個工業標準，現在很難看到一個沒有USB口的計算機了。USB閃存的使用使得它更加流行。在Linux上，我們可以使用<strong>lsusb</strong>來列出USB設備和它的屬性。</p><h3 id="什麼是lsusb" tabindex="-1">什麼是lsusb <a class="header-anchor" href="#什麼是lsusb" aria-label="Permalink to “什麼是lsusb”">​</a></h3><p>在它的手冊上，lsusb定義成：</p><blockquote><p>顯示系統中以及連接到系統的USB總線信息的工具。</p></blockquote><p>如何運行lsusb? 要運行lsusb，你可以直接在控制台輸入lsusb。</p><pre><code>$ lsusb

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
</code></pre><p><strong>lsusb</strong>會顯示驅動和內部連接到你係統的設備。</p><p>下面介紹如何理解輸出。我抓取了上面輸出的最後一行：</p><pre><code>Bus 008 Device 002 : ID 0a5c:217f Broadcom Corp. Bluetooth Controller
</code></pre><ul><li><strong>Bus 008</strong> : 指明設備連接到哪（哪條總線）</li><li><strong>Device 002</strong> : 表明這是連接到總線上的第二台設備</li><li><strong>ID</strong> : 設備的ID</li><li><strong>Broadcom Corp. Bluetooth Controller</strong> :生產商名字和設備名</li></ul><p>我們同樣可以看到在我們的系統中同時使用了USB2.0 root hub驅動和USB 1.1 root hub驅動。</p>`,12)),s("p",null,[n[6]||(n[6]=e("用",-1)),r(t,{href:"http://linoxide.com/linux-command/linux-dmesg-command/"},{default:o(()=>[...n[5]||(n[5]=[e("dmesg",-1)])]),_:1}),n[7]||(n[7]=e("命令同樣可以看到。下面是一個例子。",-1))]),n[26]||(n[26]=u(`<pre><code>$ dmesg |grep -i usb

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
</code></pre><h3 id="如何列出usb詳細信息" tabindex="-1">如何列出USB詳細信息 <a class="header-anchor" href="#如何列出usb詳細信息" aria-label="Permalink to “如何列出USB詳細信息”">​</a></h3><p>使用<strong>-v</strong>選項來開啓。下面是一個例子。</p><pre><code>$ lsusb -v

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
</code></pre><h3 id="找出連接了多少usb設備" tabindex="-1">找出連接了多少USB設備 <a class="header-anchor" href="#找出連接了多少usb設備" aria-label="Permalink to “找出連接了多少USB設備”">​</a></h3><p>使用下面的命令</p><pre><code>$ find /dev/bus
</code></pre><p>接着你會看到像下面的輸出：</p><pre><code>/dev/bus
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
</code></pre><p>使用<strong>lsusb</strong> 命令 的<strong>-D</strong> 選項，你可以打印特定設備的詳細信息。下面是一個博通藍牙設備的示例。</p><pre><code>$ lsusb -D /dev/bus/usb/008/002

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
</code></pre><h3 id="找出大容量存儲設備" tabindex="-1">找出大容量存儲設備 <a class="header-anchor" href="#找出大容量存儲設備" aria-label="Permalink to “找出大容量存儲設備”">​</a></h3><p>既然 <strong>lsusb -v</strong>給我們很詳細的信息，那麼你或許會錯過一些信息。我們可以使用grep命令指定特定的信息。</p><p>大容量存儲設備會有一個供應商名和ID。我們可以用它作為一個起點。</p><pre><code>$ lsusb -v |grep -Ei ‘(idVendor|Mass\\ Storage)’

idVendor 0×1005 Apacer Technology, Inc.
bInterfaceClass 8 Mass Storage
</code></pre><p>你可以看到，我們系統上有一個來自Apacer Technology, Inc的USB大容量存儲設備。</p><h3 id="以樹層級結構輸出usb設備" tabindex="-1">以樹層級結構輸出USB設備 <a class="header-anchor" href="#以樹層級結構輸出usb設備" aria-label="Permalink to “以樹層級結構輸出USB設備”">​</a></h3><p>使用 <strong>-t</strong>選項滿足這個要求</p><pre><code>$ lsusb -t

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
</code></pre><p>數字<strong>12M和480M</strong> 是<strong>指USB類型的傳輸速率</strong>。</p><ul><li>12M 意味着 USB 1.0 / 1.1的速率是 12Mbit/s</li><li>480M 意味着 USB 2.0的速率是 480Mbit/s</li></ul>`,21)),s("p",null,[n[9]||(n[9]=e("如果你找到5.0G，那意味這你有USB 3.0類型接口。它有5.0Gbit/s的傳輸速率。Linux從",-1)),n[10]||(n[10]=s("strong",null,"/var/lib/usbutils/usb.ids",-1)),n[11]||(n[11]=e("識別USB設備的詳細信息。或者你可以訪問",-1)),r(t,{href:"http://www.linux-usb.org/usb.ids"},{default:o(()=>[...n[8]||(n[8]=[e("Linux-USB.org",-1)])]),_:1}),n[12]||(n[12]=e("獲取最新的USB ID列表。",-1))]),n[27]||(n[27]=s("p",null,[e("這些就是lsusb命令的基礎。你可以用lsusb命令對你的系統上的USB設備做一個診斷。一般來説，你可以通過lsusb的手冊探索命令的更多詳細細節。只要輸入"),s("strong",null,"man lsab"),e("來打開它的手冊。")],-1)),n[28]||(n[28]=s("hr",null,null,-1)),s("p",null,[n[14]||(n[14]=e("via: ",-1)),r(t,{href:"http://linoxide.com/linux-command/linux-lsusb-command-print-usb/"},{default:o(()=>[...n[13]||(n[13]=[e("http://linoxide.com/linux-command/linux-lsusb-command-print-usb/",-1)])]),_:1})]),s("p",null,[n[17]||(n[17]=e("譯者：",-1)),r(t,{href:"https://github.com/geekpi"},{default:o(()=>[...n[15]||(n[15]=[e("geekpi",-1)])]),_:1}),n[18]||(n[18]=e(" 校對：",-1)),r(t,{href:"http://blog.csdn.net/tinyeyeser"},{default:o(()=>[...n[16]||(n[16]=[e("Mr小眼兒",-1)])]),_:1})]),s("p",null,[n[21]||(n[21]=e("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...n[19]||(n[19]=[e("LCTT",-1)])]),_:1}),n[22]||(n[22]=e(" 原創翻譯，",-1)),r(t,{href:"http://linux.cn/"},{default:o(()=>[...n[20]||(n[20]=[e("Linux中國",-1)])]),_:1}),n[23]||(n[23]=e(" 榮譽推出",-1))])])}const S=i(d,[["render",p]]);export{f as __pageData,S as default};
