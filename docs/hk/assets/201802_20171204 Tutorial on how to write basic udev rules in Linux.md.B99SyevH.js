import{_ as o,a0 as i,w as l,s as d,ao as u,I as t,x as a,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse('{"title":"在 Linux 中如何編寫基本的 udev 規則 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中如何編寫基本的 udev 規則 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中如何編寫基本的 udev 規則 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中如何編寫基本的 udev 規則 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20171204 Tutorial on how to write basic udev rules in Linux","title":"在 Linux 中如何編寫基本的 udev 規則","tag":"201802","desc":""},"relativePath":"201802/20171204 Tutorial on how to write basic udev rules in Linux.md","filePath":"[post].md"}'),c={name:"201802/20171204 Tutorial on how to write basic udev rules in Linux.md"};function r(h,s,T,q,b,v){const n=i("Link");return l(),d("div",null,[s[13]||(s[13]=u(`<h1 id="在-linux-中如何編寫基本的-udev-規則" tabindex="-1">在 Linux 中如何編寫基本的 udev 規則 <a class="header-anchor" href="#在-linux-中如何編寫基本的-udev-規則" aria-label="Permalink to “在 Linux 中如何編寫基本的 udev 規則”">​</a></h1><h3 id="讀者對象" tabindex="-1">讀者對象 <a class="header-anchor" href="#讀者對象" aria-label="Permalink to “讀者對象”">​</a></h3><p>理解 udev 背後的基本概念，學習如何寫簡單的規則。</p><h3 id="要求" tabindex="-1">要求 <a class="header-anchor" href="#要求" aria-label="Permalink to “要求”">​</a></h3><ul><li>root 權限</li></ul><h3 id="難度" tabindex="-1">難度 <a class="header-anchor" href="#難度" aria-label="Permalink to “難度”">​</a></h3><p>中等</p><h3 id="約定" tabindex="-1">約定 <a class="header-anchor" href="#約定" aria-label="Permalink to “約定”">​</a></h3><ul><li><code>#</code> - 要求給定的命令使用 root 權限或者直接以一個 root 用户或者使用 <code>sudo</code> 命令去運行。</li><li><code>$</code> - 要求給定的命令以一個普通的非特權用户運行。</li></ul><h3 id="介紹" tabindex="-1">介紹 <a class="header-anchor" href="#介紹" aria-label="Permalink to “介紹”">​</a></h3><p>在 GNU/Linux 系統中，雖然設備的底層支持是在內核層面處理的，但是，它們相關的事件管理是在用户空間中通過 <code>udev</code> 來管理的。確切地説是由 <code>udevd</code> 守護進程來完成的。學習如何去寫規則，並應用到發生的這些事件上，將有助於我們修改系統的行為並使它適合我們的需要。</p><h3 id="規則如何組織" tabindex="-1">規則如何組織 <a class="header-anchor" href="#規則如何組織" aria-label="Permalink to “規則如何組織”">​</a></h3><p>udev 規則是定義在一個以 <code>.rules</code> 為擴展名的文件中。那些文件主要放在兩個位置：<code>/usr/lib/udev/rules.d</code>，這個目錄用於存放系統安裝的規則；<code>/etc/udev/rules.d/</code> 這個目錄是保留給自定義規則的。</p><p>定義那些規則的文件的命名慣例是使用一個數字作為前綴（比如，<code>50-udev-default.rules</code>），並且以它們在目錄中的詞彙順序進行處理的。在 <code>/etc/udev/rules.d</code> 中安裝的文件，會覆蓋安裝在系統默認路徑中的同名文件。</p><h3 id="規則語法" tabindex="-1">規則語法 <a class="header-anchor" href="#規則語法" aria-label="Permalink to “規則語法”">​</a></h3><p>如果你理解了 udev 規則的行為邏輯，它的語法並不複雜。一個規則由兩個主要的節構成：<code>match</code> 部分，它使用一系列用逗號分隔的鍵定義了規則應用的條件，而 <code>action</code> 部分，是當條件滿足時，我們執行一些動作。</p><h3 id="測試案例" tabindex="-1">測試案例 <a class="header-anchor" href="#測試案例" aria-label="Permalink to “測試案例”">​</a></h3><p>講解可能的選項的最好方法莫過於配置一個真實的案例，因此，我們去定義一個規則作為演示，當鼠標被連接時禁用觸摸板。顯然，在該規則定義中提供的屬性將反映我的硬件。</p><p>我們將在 <code>/etc/udev/rules.d/99-togglemouse.rules</code> 文件中用我們喜歡的文本編輯器來寫我們的規則。一條規則定義允許跨多個行，但是，如果是這種情況，必須在一個換行字符之前使用一個反斜線（<code>\\</code>）表示行的延續，就和 shell 腳本一樣。這是我們的規則：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ACTION==&quot;add&quot; \\</span></span>
<span class="line"><span>, ATTRS{idProduct}==&quot;c52f&quot; \\</span></span>
<span class="line"><span>, ATTRS{idVendor}==&quot;046d&quot; \\</span></span>
<span class="line"><span>, ENV{DISPLAY}=&quot;:0&quot; \\</span></span>
<span class="line"><span>, ENV{XAUTHORITY}=&quot;/run/user/1000/gdm/Xauthority&quot; \\</span></span>
<span class="line"><span>, RUN+=&quot;/usr/bin/xinput --disable 16&quot;</span></span></code></pre></div><p>我們來分析一下這個規則。</p><h3 id="操作符" tabindex="-1">操作符 <a class="header-anchor" href="#操作符" aria-label="Permalink to “操作符”">​</a></h3><p>首先，對已經使用以及將要使用的操作符解釋如下：</p><h4 id="和-操作符" tabindex="-1">== 和 != 操作符 <a class="header-anchor" href="#和-操作符" aria-label="Permalink to “== 和 != 操作符”">​</a></h4><p><code>==</code> 是相等操作符，而 <code>!=</code> 是不等於操作符。通過使用它們，我們可以確認規則上應用的鍵是否匹配各自的值。</p><h4 id="分配操作符-和" tabindex="-1">分配操作符 = 和 := <a class="header-anchor" href="#分配操作符-和" aria-label="Permalink to “分配操作符 = 和 :=”">​</a></h4><p><code>=</code> 是賦值操作符，是用於為一個鍵賦值。當我們想要賦值，並且想確保它不會被其它規則所覆蓋，我們就需要使用 <code>:=</code> 操作符來代替，使用這個操作符分配的值，它就不能被改變。</p><h4 id="和-操作符-1" tabindex="-1">+= 和 -= 操作符 <a class="header-anchor" href="#和-操作符-1" aria-label="Permalink to “+= 和 -= 操作符”">​</a></h4><p><code>+=</code> 和 <code>-=</code> 操作符各自用於從一個指定的鍵定義的值列表中增加或者移除一個值。</p><h3 id="我們使用的鍵" tabindex="-1">我們使用的鍵 <a class="header-anchor" href="#我們使用的鍵" aria-label="Permalink to “我們使用的鍵”">​</a></h3><p>現在，來分析一下在這個規則中我們使用的鍵。首先，我們有一個 <code>ACTION</code> 鍵：通過使用它，當在一個設備上發生了特定的事件，我們將指定我們要應用的規則的具體內容。有效的值有 <code>add</code>、<code>remove </code> 以及 <code>change</code>。</p><p>然後，我們使用 <code>ATTRS</code> 關鍵字去指定一個屬性去匹配。我們可以使用 <code>udevadm info</code> 命令去列出一個設備屬性，提供它的名字或者 <code>sysfs</code> 路徑即可：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>udevadm info -ap /devices/pci0000:00/0000:00:1d.0/usb2/2-1/2-1.2/2-1.2:1.1/0003:046D:C52F.0010/input/input39</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Udevadm info starts with the device specified by the devpath and then</span></span>
<span class="line"><span>walks up the chain of parent devices. It prints for every device</span></span>
<span class="line"><span>found, all possible attributes in the udev rules key format.</span></span>
<span class="line"><span>A rule to match, can be composed by the attributes of the device</span></span>
<span class="line"><span>and the attributes from one single parent device.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  looking at device &#39;/devices/pci0000:00/0000:00:1d.0/usb2/2-1/2-1.2/2-1.2:1.1/0003:046D:C52F.0010/input/input39&#39;:</span></span>
<span class="line"><span>    KERNEL==&quot;input39&quot;</span></span>
<span class="line"><span>    SUBSYSTEM==&quot;input&quot;</span></span>
<span class="line"><span>    DRIVER==&quot;&quot;</span></span>
<span class="line"><span>    ATTR{name}==&quot;Logitech USB Receiver&quot;</span></span>
<span class="line"><span>    ATTR{phys}==&quot;usb-0000:00:1d.0-1.2/input1&quot;</span></span>
<span class="line"><span>    ATTR{properties}==&quot;0&quot;</span></span>
<span class="line"><span>    ATTR{uniq}==&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  looking at parent device &#39;/devices/pci0000:00/0000:00:1d.0/usb2/2-1/2-1.2/2-1.2:1.1/0003:046D:C52F.0010&#39;:</span></span>
<span class="line"><span>    KERNELS==&quot;0003:046D:C52F.0010&quot;</span></span>
<span class="line"><span>    SUBSYSTEMS==&quot;hid&quot;</span></span>
<span class="line"><span>    DRIVERS==&quot;hid-generic&quot;</span></span>
<span class="line"><span>    ATTRS{country}==&quot;00&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  looking at parent device &#39;/devices/pci0000:00/0000:00:1d.0/usb2/2-1/2-1.2/2-1.2:1.1&#39;:</span></span>
<span class="line"><span>    KERNELS==&quot;2-1.2:1.1&quot;</span></span>
<span class="line"><span>    SUBSYSTEMS==&quot;usb&quot;</span></span>
<span class="line"><span>    DRIVERS==&quot;usbhid&quot;</span></span>
<span class="line"><span>    ATTRS{authorized}==&quot;1&quot;</span></span>
<span class="line"><span>    ATTRS{bAlternateSetting}==&quot; 0&quot;</span></span>
<span class="line"><span>    ATTRS{bInterfaceClass}==&quot;03&quot;</span></span>
<span class="line"><span>    ATTRS{bInterfaceNumber}==&quot;01&quot;</span></span>
<span class="line"><span>    ATTRS{bInterfaceProtocol}==&quot;00&quot;</span></span>
<span class="line"><span>    ATTRS{bInterfaceSubClass}==&quot;00&quot;</span></span>
<span class="line"><span>    ATTRS{bNumEndpoints}==&quot;01&quot;</span></span>
<span class="line"><span>    ATTRS{supports_autosuspend}==&quot;1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  looking at parent device &#39;/devices/pci0000:00/0000:00:1d.0/usb2/2-1/2-1.2&#39;:</span></span>
<span class="line"><span>    KERNELS==&quot;2-1.2&quot;</span></span>
<span class="line"><span>    SUBSYSTEMS==&quot;usb&quot;</span></span>
<span class="line"><span>    DRIVERS==&quot;usb&quot;</span></span>
<span class="line"><span>    ATTRS{authorized}==&quot;1&quot;</span></span>
<span class="line"><span>    ATTRS{avoid_reset_quirk}==&quot;0&quot;</span></span>
<span class="line"><span>    ATTRS{bConfigurationValue}==&quot;1&quot;</span></span>
<span class="line"><span>    ATTRS{bDeviceClass}==&quot;00&quot;</span></span>
<span class="line"><span>    ATTRS{bDeviceProtocol}==&quot;00&quot;</span></span>
<span class="line"><span>    ATTRS{bDeviceSubClass}==&quot;00&quot;</span></span>
<span class="line"><span>    ATTRS{bMaxPacketSize0}==&quot;8&quot;</span></span>
<span class="line"><span>    ATTRS{bMaxPower}==&quot;98mA&quot;</span></span>
<span class="line"><span>    ATTRS{bNumConfigurations}==&quot;1&quot;</span></span>
<span class="line"><span>    ATTRS{bNumInterfaces}==&quot; 2&quot;</span></span>
<span class="line"><span>    ATTRS{bcdDevice}==&quot;3000&quot;</span></span>
<span class="line"><span>    ATTRS{bmAttributes}==&quot;a0&quot;</span></span>
<span class="line"><span>    ATTRS{busnum}==&quot;2&quot;</span></span>
<span class="line"><span>    ATTRS{configuration}==&quot;RQR30.00_B0009&quot;</span></span>
<span class="line"><span>    ATTRS{devnum}==&quot;12&quot;</span></span>
<span class="line"><span>    ATTRS{devpath}==&quot;1.2&quot;</span></span>
<span class="line"><span>    ATTRS{idProduct}==&quot;c52f&quot;</span></span>
<span class="line"><span>    ATTRS{idVendor}==&quot;046d&quot;</span></span>
<span class="line"><span>    ATTRS{ltm_capable}==&quot;no&quot;</span></span>
<span class="line"><span>    ATTRS{manufacturer}==&quot;Logitech&quot;</span></span>
<span class="line"><span>    ATTRS{maxchild}==&quot;0&quot;</span></span>
<span class="line"><span>    ATTRS{product}==&quot;USB Receiver&quot;</span></span>
<span class="line"><span>    ATTRS{quirks}==&quot;0x0&quot;</span></span>
<span class="line"><span>    ATTRS{removable}==&quot;removable&quot;</span></span>
<span class="line"><span>    ATTRS{speed}==&quot;12&quot;</span></span>
<span class="line"><span>    ATTRS{urbnum}==&quot;1401&quot;</span></span>
<span class="line"><span>    ATTRS{version}==&quot; 2.00&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [...]</span></span></code></pre></div><p>上面截取了運行這個命令之後的輸出的一部分。正如你從它的輸出中看到的那樣，<code>udevadm</code> 從我們提供的指定路徑開始，並且提供了所有父級設備的信息。注意設備的屬性都是以單數的形式報告的（比如，<code>KERNEL</code>），而它的父級是以複數形式出現的（比如，<code>KERNELS</code>）。父級信息可以做為規則的一部分，但是同一時間只能有一個父級可以被引用：不同父級設備的屬性混合在一起是不能工作的。在上面我們定義的規則中，我們使用了一個父級設備屬性：<code>idProduct</code> 和 <code>idVendor</code>。</p><p>在我們的規則中接下來做的事情是，去使用 <code>ENV</code> 關鍵字：它既可以用於設置也可以用於去匹配環境變量。我們給 <code>DISPLAY</code> 和 <code>XAUTHORITY</code> 分配值。當我們使用 X 服務器程序進行交互去設置一些需要的信息時，這些變量是非常必要的：使用 <code>DISPLAY</code> 變量，我們指定服務器運行在哪個機器上，用的是哪個顯示和屏幕；使用 <code>XAUTHORITY</code> 提供了一個文件路徑，其包含了 Xorg 認證和授權信息。這個文件一般位於用户的家目錄中。</p><p>最後，我們使用了 <code>RUN</code> 字：它用於運行外部程序。非常重要：這裏沒有立即運行，但是一旦所有的規則被解析，將運行各種動作。在這個案例中，我們使用 <code>xinput</code> 實用程序去改變觸摸板的狀態。我不想解釋這裏的 <code>xinput</code> 的語法，它超出了本文的範圍，只需要注意這個觸摸板的 ID 是 <code>16</code>。</p><p>規則設置完成之後，我們可以通過使用 <code>udevadm test</code> 命令去調試它。這個命令對調試非常有用，它並不真實去運行 <code>RUN</code> 指定的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ udevadm test --action=&quot;add&quot; /devices/pci0000:00/0000:00:1d.0/usb2/2-1/2-1.2/2-1.2:1.1/0003:046D:C52F.0010/input/input39</span></span></code></pre></div><p>我們提供給命令的是使用 <code>--action</code> 選項，以及設備的 sysfs 路徑的模擬動作。如果沒有報告錯誤，説明我們的規則運行的很好。要在真實的環境中去使用它，我們需要重新加載規則：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># udevadm control --reload</span></span></code></pre></div><p>這個命令將重新加載規則文件，但是，它只對重新加載之後發生的事件有效果。</p><p>我們通過創建一個 udev 規則瞭解了基本的概念和邏輯，這只是 udev 規則中眾多的選項和可能的設置中的一小部分。udev 手冊頁提供了一個詳盡的列表，如果你想深入瞭解，請參考它。</p><hr>`,43)),t("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://linuxconfig.org/tutorial-on-how-to-write-basic-udev-rules-in-linux"},{default:p(()=>[...s[0]||(s[0]=[a("https://linuxconfig.org/tutorial-on-how-to-write-basic-udev-rules-in-linux",-1)])]),_:1})]),t("p",null,[s[5]||(s[5]=a("作者：",-1)),e(n,{href:"https://disqus.com/by/egidiodocile/"},{default:p(()=>[...s[2]||(s[2]=[a("Egidio Docile",-1)])]),_:1}),s[6]||(s[6]=a(" 譯者：",-1)),e(n,{href:"https://github.com/qhwdw"},{default:p(()=>[...s[3]||(s[3]=[a("qhwdw",-1)])]),_:1}),s[7]||(s[7]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[4]||(s[4]=[a("wxy",-1)])]),_:1})]),t("p",null,[s[10]||(s[10]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[8]||(s[8]=[a("LCTT",-1)])]),_:1}),s[11]||(s[11]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[9]||(s[9]=[a("Linux中國",-1)])]),_:1}),s[12]||(s[12]=a(" 榮譽推出",-1))])])}const m=o(c,[["render",r]]);export{g as __pageData,m as default};
