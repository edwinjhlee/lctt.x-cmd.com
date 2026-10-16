import{_ as o,a0 as i,w as l,s as d,ao as u,I as t,x as a,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const g=JSON.parse('{"title":"在 Linux 中如何编写基本的 udev 规则 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中如何编写基本的 udev 规则 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中如何编写基本的 udev 规则 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中如何编写基本的 udev 规则 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20171204 Tutorial on how to write basic udev rules in Linux","title":"在 Linux 中如何编写基本的 udev 规则","tag":"201802","desc":""},"relativePath":"201802/20171204 Tutorial on how to write basic udev rules in Linux.md","filePath":"[post].md"}'),c={name:"201802/20171204 Tutorial on how to write basic udev rules in Linux.md"};function r(h,s,T,q,b,v){const n=i("Link");return l(),d("div",null,[s[13]||(s[13]=u(`<h1 id="在-linux-中如何编写基本的-udev-规则" tabindex="-1">在 Linux 中如何编写基本的 udev 规则 <a class="header-anchor" href="#在-linux-中如何编写基本的-udev-规则" aria-label="Permalink to “在 Linux 中如何编写基本的 udev 规则”">​</a></h1><h3 id="读者对象" tabindex="-1">读者对象 <a class="header-anchor" href="#读者对象" aria-label="Permalink to “读者对象”">​</a></h3><p>理解 udev 背后的基本概念，学习如何写简单的规则。</p><h3 id="要求" tabindex="-1">要求 <a class="header-anchor" href="#要求" aria-label="Permalink to “要求”">​</a></h3><ul><li>root 权限</li></ul><h3 id="难度" tabindex="-1">难度 <a class="header-anchor" href="#难度" aria-label="Permalink to “难度”">​</a></h3><p>中等</p><h3 id="约定" tabindex="-1">约定 <a class="header-anchor" href="#约定" aria-label="Permalink to “约定”">​</a></h3><ul><li><code>#</code> - 要求给定的命令使用 root 权限或者直接以一个 root 用户或者使用 <code>sudo</code> 命令去运行。</li><li><code>$</code> - 要求给定的命令以一个普通的非特权用户运行。</li></ul><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to “介绍”">​</a></h3><p>在 GNU/Linux 系统中，虽然设备的底层支持是在内核层面处理的，但是，它们相关的事件管理是在用户空间中通过 <code>udev</code> 来管理的。确切地说是由 <code>udevd</code> 守护进程来完成的。学习如何去写规则，并应用到发生的这些事件上，将有助于我们修改系统的行为并使它适合我们的需要。</p><h3 id="规则如何组织" tabindex="-1">规则如何组织 <a class="header-anchor" href="#规则如何组织" aria-label="Permalink to “规则如何组织”">​</a></h3><p>udev 规则是定义在一个以 <code>.rules</code> 为扩展名的文件中。那些文件主要放在两个位置：<code>/usr/lib/udev/rules.d</code>，这个目录用于存放系统安装的规则；<code>/etc/udev/rules.d/</code> 这个目录是保留给自定义规则的。</p><p>定义那些规则的文件的命名惯例是使用一个数字作为前缀（比如，<code>50-udev-default.rules</code>），并且以它们在目录中的词汇顺序进行处理的。在 <code>/etc/udev/rules.d</code> 中安装的文件，会覆盖安装在系统默认路径中的同名文件。</p><h3 id="规则语法" tabindex="-1">规则语法 <a class="header-anchor" href="#规则语法" aria-label="Permalink to “规则语法”">​</a></h3><p>如果你理解了 udev 规则的行为逻辑，它的语法并不复杂。一个规则由两个主要的节构成：<code>match</code> 部分，它使用一系列用逗号分隔的键定义了规则应用的条件，而 <code>action</code> 部分，是当条件满足时，我们执行一些动作。</p><h3 id="测试案例" tabindex="-1">测试案例 <a class="header-anchor" href="#测试案例" aria-label="Permalink to “测试案例”">​</a></h3><p>讲解可能的选项的最好方法莫过于配置一个真实的案例，因此，我们去定义一个规则作为演示，当鼠标被连接时禁用触摸板。显然，在该规则定义中提供的属性将反映我的硬件。</p><p>我们将在 <code>/etc/udev/rules.d/99-togglemouse.rules</code> 文件中用我们喜欢的文本编辑器来写我们的规则。一条规则定义允许跨多个行，但是，如果是这种情况，必须在一个换行字符之前使用一个反斜线（<code>\\</code>）表示行的延续，就和 shell 脚本一样。这是我们的规则：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ACTION==&quot;add&quot; \\</span></span>
<span class="line"><span>, ATTRS{idProduct}==&quot;c52f&quot; \\</span></span>
<span class="line"><span>, ATTRS{idVendor}==&quot;046d&quot; \\</span></span>
<span class="line"><span>, ENV{DISPLAY}=&quot;:0&quot; \\</span></span>
<span class="line"><span>, ENV{XAUTHORITY}=&quot;/run/user/1000/gdm/Xauthority&quot; \\</span></span>
<span class="line"><span>, RUN+=&quot;/usr/bin/xinput --disable 16&quot;</span></span></code></pre></div><p>我们来分析一下这个规则。</p><h3 id="操作符" tabindex="-1">操作符 <a class="header-anchor" href="#操作符" aria-label="Permalink to “操作符”">​</a></h3><p>首先，对已经使用以及将要使用的操作符解释如下：</p><h4 id="和-操作符" tabindex="-1">== 和 != 操作符 <a class="header-anchor" href="#和-操作符" aria-label="Permalink to “== 和 != 操作符”">​</a></h4><p><code>==</code> 是相等操作符，而 <code>!=</code> 是不等于操作符。通过使用它们，我们可以确认规则上应用的键是否匹配各自的值。</p><h4 id="分配操作符-和" tabindex="-1">分配操作符 = 和 := <a class="header-anchor" href="#分配操作符-和" aria-label="Permalink to “分配操作符 = 和 :=”">​</a></h4><p><code>=</code> 是赋值操作符，是用于为一个键赋值。当我们想要赋值，并且想确保它不会被其它规则所覆盖，我们就需要使用 <code>:=</code> 操作符来代替，使用这个操作符分配的值，它就不能被改变。</p><h4 id="和-操作符-1" tabindex="-1">+= 和 -= 操作符 <a class="header-anchor" href="#和-操作符-1" aria-label="Permalink to “+= 和 -= 操作符”">​</a></h4><p><code>+=</code> 和 <code>-=</code> 操作符各自用于从一个指定的键定义的值列表中增加或者移除一个值。</p><h3 id="我们使用的键" tabindex="-1">我们使用的键 <a class="header-anchor" href="#我们使用的键" aria-label="Permalink to “我们使用的键”">​</a></h3><p>现在，来分析一下在这个规则中我们使用的键。首先，我们有一个 <code>ACTION</code> 键：通过使用它，当在一个设备上发生了特定的事件，我们将指定我们要应用的规则的具体内容。有效的值有 <code>add</code>、<code>remove </code> 以及 <code>change</code>。</p><p>然后，我们使用 <code>ATTRS</code> 关键字去指定一个属性去匹配。我们可以使用 <code>udevadm info</code> 命令去列出一个设备属性，提供它的名字或者 <code>sysfs</code> 路径即可：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>udevadm info -ap /devices/pci0000:00/0000:00:1d.0/usb2/2-1/2-1.2/2-1.2:1.1/0003:046D:C52F.0010/input/input39</span></span>
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
<span class="line"><span>    [...]</span></span></code></pre></div><p>上面截取了运行这个命令之后的输出的一部分。正如你从它的输出中看到的那样，<code>udevadm</code> 从我们提供的指定路径开始，并且提供了所有父级设备的信息。注意设备的属性都是以单数的形式报告的（比如，<code>KERNEL</code>），而它的父级是以复数形式出现的（比如，<code>KERNELS</code>）。父级信息可以做为规则的一部分，但是同一时间只能有一个父级可以被引用：不同父级设备的属性混合在一起是不能工作的。在上面我们定义的规则中，我们使用了一个父级设备属性：<code>idProduct</code> 和 <code>idVendor</code>。</p><p>在我们的规则中接下来做的事情是，去使用 <code>ENV</code> 关键字：它既可以用于设置也可以用于去匹配环境变量。我们给 <code>DISPLAY</code> 和 <code>XAUTHORITY</code> 分配值。当我们使用 X 服务器程序进行交互去设置一些需要的信息时，这些变量是非常必要的：使用 <code>DISPLAY</code> 变量，我们指定服务器运行在哪个机器上，用的是哪个显示和屏幕；使用 <code>XAUTHORITY</code> 提供了一个文件路径，其包含了 Xorg 认证和授权信息。这个文件一般位于用户的家目录中。</p><p>最后，我们使用了 <code>RUN</code> 字：它用于运行外部程序。非常重要：这里没有立即运行，但是一旦所有的规则被解析，将运行各种动作。在这个案例中，我们使用 <code>xinput</code> 实用程序去改变触摸板的状态。我不想解释这里的 <code>xinput</code> 的语法，它超出了本文的范围，只需要注意这个触摸板的 ID 是 <code>16</code>。</p><p>规则设置完成之后，我们可以通过使用 <code>udevadm test</code> 命令去调试它。这个命令对调试非常有用，它并不真实去运行 <code>RUN</code> 指定的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ udevadm test --action=&quot;add&quot; /devices/pci0000:00/0000:00:1d.0/usb2/2-1/2-1.2/2-1.2:1.1/0003:046D:C52F.0010/input/input39</span></span></code></pre></div><p>我们提供给命令的是使用 <code>--action</code> 选项，以及设备的 sysfs 路径的模拟动作。如果没有报告错误，说明我们的规则运行的很好。要在真实的环境中去使用它，我们需要重新加载规则：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># udevadm control --reload</span></span></code></pre></div><p>这个命令将重新加载规则文件，但是，它只对重新加载之后发生的事件有效果。</p><p>我们通过创建一个 udev 规则了解了基本的概念和逻辑，这只是 udev 规则中众多的选项和可能的设置中的一小部分。udev 手册页提供了一个详尽的列表，如果你想深入了解，请参考它。</p><hr>`,43)),t("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://linuxconfig.org/tutorial-on-how-to-write-basic-udev-rules-in-linux"},{default:p(()=>[...s[0]||(s[0]=[a("https://linuxconfig.org/tutorial-on-how-to-write-basic-udev-rules-in-linux",-1)])]),_:1})]),t("p",null,[s[5]||(s[5]=a("作者：",-1)),e(n,{href:"https://disqus.com/by/egidiodocile/"},{default:p(()=>[...s[2]||(s[2]=[a("Egidio Docile",-1)])]),_:1}),s[6]||(s[6]=a(" 译者：",-1)),e(n,{href:"https://github.com/qhwdw"},{default:p(()=>[...s[3]||(s[3]=[a("qhwdw",-1)])]),_:1}),s[7]||(s[7]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[4]||(s[4]=[a("wxy",-1)])]),_:1})]),t("p",null,[s[10]||(s[10]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[8]||(s[8]=[a("LCTT",-1)])]),_:1}),s[11]||(s[11]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[9]||(s[9]=[a("Linux中国",-1)])]),_:1}),s[12]||(s[12]=a(" 荣誉推出",-1))])])}const m=o(c,[["render",r]]);export{g as __pageData,m as default};
