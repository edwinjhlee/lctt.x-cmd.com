import{_ as t,a0 as o,w as d,s as c,I as p,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const $=JSON.parse('{"title":"如何构建一台网络引导服务器（三） | LCTT x X-CMD","titleTemplate":false,"description":"如何构建一台网络引导服务器（三） | LCTT (201901) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何构建一台网络引导服务器（三） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何构建一台网络引导服务器（三） | LCTT (201901) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201901/20181221 How to Build a Netboot Server, Part 3","title":"如何构建一台网络引导服务器（三）","tag":"201901","desc":""},"relativePath":"201901/20181221 How to Build a Netboot Server, Part 3.md","filePath":"[post].md"}'),r={name:"201901/20181221 How to Build a Netboot Server, Part 3.md"};function u(g,s,h,m,b,k){const a=o("Link");return d(),c("div",null,[s[25]||(s[25]=p("h1",{id:"如何构建一台网络引导服务器-三",tabindex:"-1"},[n("如何构建一台网络引导服务器（三） "),p("a",{class:"header-anchor",href:"#如何构建一台网络引导服务器-三","aria-label":"Permalink to “如何构建一台网络引导服务器（三）”"},"​")],-1)),s[26]||(s[26]=p("p",null,[p("img",{src:"https://fedoramagazine.org/wp-content/uploads/2018/12/netboot3-816x345.jpg",alt:""})],-1)),p("p",null,[s[2]||(s[2]=n("在 ",-1)),e(a,{href:"https://linux.cn/article-10379-1.html"},{default:i(()=>[...s[0]||(s[0]=[n("如何构建一台网络引导服务器（一）",-1)])]),_:1}),s[3]||(s[3]=n(" 中，我们提供了一个极简的 ",-1)),e(a,{href:"https://ipxe.org/"},{default:i(()=>[...s[1]||(s[1]=[n("iPXE",-1)])]),_:1}),s[4]||(s[4]=n(" 引导脚本来引导你的网络引导镜像。许多用户除了使用网络引导镜像外，可能在机器本地也有一个操作系统。但是使用常见的工作站的 BIOS 去切换引导加载器是很笨拙的。在本系列文件的第三部分，我们将向你展示如何设置一个更复杂的 iPXE 配置。它将允许终端用户以更容易的方式去选择引导哪个操作系统。它也可以配置为让系统管理员从一台中央服务器来统一管理引导菜单。",-1))]),s[27]||(s[27]=l(`<h3 id="一个交互式-ipxe-引导菜单" tabindex="-1">一个交互式 iPXE 引导菜单 <a class="header-anchor" href="#一个交互式-ipxe-引导菜单" aria-label="Permalink to “一个交互式 iPXE 引导菜单”">​</a></h3><p>下面这些命令重定义了网络引导镜像的 <code>boot.cfg</code> 来作为一个交互式的 iPXE 引导菜单，并使用了一个 5 秒倒计时的定时器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ MY_FVER=29</span></span>
<span class="line"><span>$ MY_KRNL=$(ls -c /fc$MY_FVER/lib/modules | head -n 1)</span></span>
<span class="line"><span>$ MY_DNS1=192.0.2.91</span></span>
<span class="line"><span>$ MY_DNS2=192.0.2.92</span></span>
<span class="line"><span>$ MY_NAME=server-01.example.edu</span></span>
<span class="line"><span>$ MY_EMAN=$(echo $MY_NAME | tr &#39;.&#39; &quot;\\n&quot; | tac | tr &quot;\\n&quot; &#39;.&#39; | cut -b -\${#MY_NAME})</span></span>
<span class="line"><span>$ MY_ADDR=$(host -t A $MY_NAME | awk &#39;{print $4}&#39;)</span></span>
<span class="line"><span>$ cat &lt;&lt; END &gt; $HOME/esp/linux/boot.cfg</span></span>
<span class="line"><span>#!ipxe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set timeout 5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:menu</span></span>
<span class="line"><span>menu iPXE Boot Menu</span></span>
<span class="line"><span>item --key 1 lcl 1. Microsoft Windows 10</span></span>
<span class="line"><span>item --key 2 f$MY_FVER 2. RedHat Fedora $MY_FVER</span></span>
<span class="line"><span>choose --timeout \\\${timeout} --default lcl selected || goto shell</span></span>
<span class="line"><span>set timeout 0</span></span>
<span class="line"><span>goto \\\${selected}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:failed</span></span>
<span class="line"><span>echo boot failed, dropping to shell...</span></span>
<span class="line"><span>goto shell</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:shell</span></span>
<span class="line"><span>echo type &#39;exit&#39; to get the back to the menu</span></span>
<span class="line"><span>set timeout 0</span></span>
<span class="line"><span>shell</span></span>
<span class="line"><span>goto menu</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:lcl</span></span>
<span class="line"><span>exit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:f$MY_FVER</span></span>
<span class="line"><span>kernel --name kernel.efi \\\${prefix}/vmlinuz-$MY_KRNL initrd=initrd.img ro ip=dhcp rd.peerdns=0 nameserver=$MY_DNS1 nameserver=$MY_DNS2 root=/dev/disk/by-path/ip-$MY_ADDR:3260-iscsi-iqn.$MY_EMAN:fc$MY_FVER-lun-1 netroot=iscsi:$MY_ADDR::::iqn.$MY_EMAN:fc$MY_FVER console=tty0 console=ttyS0,115200n8 audit=0 selinux=0 quiet</span></span>
<span class="line"><span>initrd --name initrd.img \\\${prefix}/initramfs-$MY_KRNL.img</span></span>
<span class="line"><span>boot || goto failed</span></span>
<span class="line"><span>END</span></span></code></pre></div><p>上述菜单有五个节：</p><ul><li><code>menu</code> 定义了显示在屏幕上的实际菜单内容。</li><li><code>failed</code> 提示用户发生了错误，并将用户带到 shell 以错误错误。</li><li><code>shell</code> 提供了交互式命令提示符。你可以在引导菜单出现时按下 <code>Esc</code> 键进入，或者是 <code>boot</code> 命令失败时也会进入到命令提示符。</li><li><code>lcl</code> 包含一个提供给 iPXE 退出的简单命令，以及返还控制权给 BIOS。在 iPXE 之后，无论你希望缺省引导的设备（即：工作站的本地硬件）是什么，都必须在你的工作站的 BIOS 中正确地作为下一个引导设备列出来。</li><li><code>f29</code> 包含前面文章提到同一个网络引导代码，但使用最终的退出代码来替换掉 <code>goto failed</code>。</li></ul><p>从你的 <code>$HOME/esp/linux</code> 目录中复制更新后的 <code>boot.cfg</code> 到所有客户端系统的 ESP 中。如果一切顺利，你应该会看到类似下面图片的结果：</p><p><img src="https://fedoramagazine.org/wp-content/uploads/2018/11/netboot-menu-1024x641.png" alt=""></p><h3 id="一个服务器托管的引导菜单" tabindex="-1">一个服务器托管的引导菜单 <a class="header-anchor" href="#一个服务器托管的引导菜单" aria-label="Permalink to “一个服务器托管的引导菜单”">​</a></h3>`,8)),p("p",null,[s[6]||(s[6]=n("你可以添加到网络引导服务器的另一个特性是，能够从一台中央位置去管理所有客户端的引导菜单。这个特性尤其适用于批量安装（升级）一个新版本的操作系统。在你将新内核和新的 ",-1)),s[7]||(s[7]=p("code",null,"initramfs",-1)),s[8]||(s[8]=n(" 复制到所有客户端的 ESP 之后，这个特性可以让你执行一种 ",-1)),e(a,{href:"https://en.wikipedia.org/wiki/Atomicity_(database_systems)"},{default:i(()=>[...s[5]||(s[5]=[n("原子事务",-1)])]),_:1}),s[9]||(s[9]=n(" 去切换所有客户端到新操作系统。",-1))]),s[28]||(s[28]=l(`<p>安装 Mojolicious：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo -i</span></span>
<span class="line"><span># dnf install -y perl-Mojolicious</span></span></code></pre></div><p>定义 “bootmenu” 应用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mkdir /opt/bootmenu</span></span>
<span class="line"><span># cat &lt;&lt; END &gt; /opt/bootmenu/bootmenu.pl</span></span>
<span class="line"><span>#!/usr/bin/env perl</span></span>
<span class="line"><span>use Mojolicious::Lite;</span></span>
<span class="line"><span>use Mojolicious::Plugins;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plugin &#39;Config&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>get &#39;/menu&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app-&gt;start;</span></span>
<span class="line"><span>END</span></span>
<span class="line"><span># chmod 755 /opt/bootmenu/bootmenu.pl</span></span></code></pre></div><p>为 “bootmenu” 应用程序定义配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat &lt;&lt; END &gt; /opt/bootmenu/bootmenu.conf</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> hypnotoad =&gt; {</span></span>
<span class="line"><span> listen =&gt; [&#39;http://*:80&#39;],</span></span>
<span class="line"><span> pid_file =&gt; &#39;/run/bootmenu/bootmenu.pid&#39;,</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>END</span></span></code></pre></div><p>这是一个非常简单的 Mojolicious 应用程序，它监听 80 端口，并且只回应对 <code>/menu</code> 的请求。如果你想快速了解 Mojolicious 能做什么，运行 <code>man Mojolicious::Guides::Growing</code> 去查看手册。按 <code>Q</code> 键退出手册。</p><p>将 <code>boot.cfg</code> 移到我们的网络引导应用程序中作为一个名为 <code>menu.html.ep</code> 的模板：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mkdir /opt/bootmenu/templates</span></span>
<span class="line"><span># mv $HOME/esp/linux/boot.cfg /opt/bootmenu/templates/menu.html.ep</span></span></code></pre></div><p>定义一个 systemd 服务去管理引导菜单应用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat &lt;&lt; END &gt; /etc/systemd/system/bootmenu.service</span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Serves iPXE Menus over HTTP</span></span>
<span class="line"><span>After=network-online.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=forking</span></span>
<span class="line"><span>DynamicUser=true</span></span>
<span class="line"><span>RuntimeDirectory=bootmenu</span></span>
<span class="line"><span>PIDFile=/run/bootmenu/bootmenu.pid</span></span>
<span class="line"><span>ExecStart=/usr/bin/hypnotoad /opt/bootmenu/bootmenu.pl</span></span>
<span class="line"><span>ExecReload=/usr/bin/hypnotoad /opt/bootmenu/bootmenu.pl</span></span>
<span class="line"><span>AmbientCapabilities=CAP_NET_BIND_SERVICE</span></span>
<span class="line"><span>KillMode=process</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span>
<span class="line"><span>END</span></span></code></pre></div><p>在本地防火墙中为 HTTP 服务添加一个例外规则，并启动 bootmenu 服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># firewall-cmd --add-service http</span></span>
<span class="line"><span># firewall-cmd --runtime-to-permanent</span></span>
<span class="line"><span># systemctl enable bootmenu.service</span></span>
<span class="line"><span># systemctl start bootmenu.service</span></span></code></pre></div><p>用 <code>wget</code> 测试它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install -y wget</span></span>
<span class="line"><span>$ MY_BOOTMENU_SERVER=server-01.example.edu</span></span>
<span class="line"><span>$ wget -q -O - http://$MY_BOOTMENU_SERVER/menu</span></span></code></pre></div><p>以上的命令应该会输出类似下面的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!ipxe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set timeout 5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:menu</span></span>
<span class="line"><span>menu iPXE Boot Menu</span></span>
<span class="line"><span>item --key 1 lcl 1. Microsoft Windows 10</span></span>
<span class="line"><span>item --key 2 f29 2. RedHat Fedora 29</span></span>
<span class="line"><span>choose --timeout \${timeout} --default lcl selected || goto shell</span></span>
<span class="line"><span>set timeout 0</span></span>
<span class="line"><span>goto \${selected}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:failed</span></span>
<span class="line"><span>echo boot failed, dropping to shell...</span></span>
<span class="line"><span>goto shell</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:shell</span></span>
<span class="line"><span>echo type &#39;exit&#39; to get the back to the menu</span></span>
<span class="line"><span>set timeout 0</span></span>
<span class="line"><span>shell</span></span>
<span class="line"><span>goto menu</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:lcl</span></span>
<span class="line"><span>exit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:f29</span></span>
<span class="line"><span>kernel --name kernel.efi \${prefix}/vmlinuz-4.19.4-300.fc29.x86_64 initrd=initrd.img ro ip=dhcp rd.peerdns=0 nameserver=192.0.2.91 nameserver=192.0.2.92 root=/dev/disk/by-path/ip-192.0.2.158:3260-iscsi-iqn.edu.example.server-01:fc29-lun-1 netroot=iscsi:192.0.2.158::::iqn.edu.example.server-01:fc29 console=tty0 console=ttyS0,115200n8 audit=0 selinux=0 quiet</span></span>
<span class="line"><span>initrd --name initrd.img \${prefix}/initramfs-4.19.4-300.fc29.x86_64.img</span></span>
<span class="line"><span>boot || goto failed</span></span></code></pre></div><p>现在，引导菜单服务器已经正常工作了，重新构建 <code>ipxe.efi</code> 引导加载器，使用一个初始化脚本指向它。</p><p>第一步，先更新我们在本系列文章的第一部分中创建的 <code>init.ipxe</code> 脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ MY_BOOTMENU_SERVER=server-01.example.edu</span></span>
<span class="line"><span>$ cat &lt;&lt; END &gt; $HOME/ipxe/init.ipxe</span></span>
<span class="line"><span>#!ipxe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dhcp || exit</span></span>
<span class="line"><span>set prefix file:///linux</span></span>
<span class="line"><span>chain http://$MY_BOOTMENU_SERVER/menu || exit</span></span>
<span class="line"><span>END</span></span></code></pre></div><p>现在，重新构建引导加载器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd $HOME/ipxe/src</span></span>
<span class="line"><span>$ make clean</span></span>
<span class="line"><span>$ make bin-x86_64-efi/ipxe.efi EMBED=../init.ipxe</span></span></code></pre></div><p>将更新后的引导加载器复制到你的 ESP 中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cp $HOME/ipxe/src/bin-x86_64-efi/ipxe.efi $HOME/esp/efi/boot/bootx64.efi</span></span></code></pre></div><p>将更新后的引导加载器复制到所有的客户端中之后，以后更新引导菜单只需要简单地编辑 <code>/opt/bootmenu/templates/menu.html.ep</code> 文件，然后再运行如下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl restart bootmenu.service</span></span></code></pre></div><h3 id="做一步的改变" tabindex="-1">做一步的改变 <a class="header-anchor" href="#做一步的改变" aria-label="Permalink to “做一步的改变”">​</a></h3><p>如果引导菜单服务器工作正常，在你的客户端系统上的 <code>boot.cfg</code> 文件将更长。</p><p>比如，重新添加 Fedora 28 镜像到引导菜单中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo -i</span></span>
<span class="line"><span># MY_FVER=28</span></span>
<span class="line"><span># MY_KRNL=$(ls -c /fc$MY_FVER/lib/modules | head -n 1)</span></span>
<span class="line"><span># MY_DNS1=192.0.2.91</span></span>
<span class="line"><span># MY_DNS2=192.0.2.92</span></span>
<span class="line"><span># MY_NAME=$(&lt;/etc/hostname)</span></span>
<span class="line"><span># MY_EMAN=$(echo $MY_NAME | tr &#39;.&#39; &quot;\\n&quot; | tac | tr &quot;\\n&quot; &#39;.&#39; | cut -b -\${#MY_NAME})</span></span>
<span class="line"><span># MY_ADDR=$(host -t A $MY_NAME | awk &#39;{print $4}&#39;)</span></span>
<span class="line"><span># cat &lt;&lt; END &gt;&gt; /opt/bootmenu/templates/menu.html.ep</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:f$MY_FVER</span></span>
<span class="line"><span>kernel --name kernel.efi \\\${prefix}/vmlinuz-$MY_KRNL initrd=initrd.img ro ip=dhcp rd.peerdns=0 nameserver=$MY_DNS1 nameserver=$MY_DNS2 root=/dev/disk/by-path/ip-$MY_ADDR:3260-iscsi-iqn.$MY_EMAN:fc$MY_FVER-lun-1 netroot=iscsi:$MY_ADDR::::iqn.$MY_EMAN:fc$MY_FVER console=tty0 console=ttyS0,115200n8 audit=0 selinux=0 quiet</span></span>
<span class="line"><span>initrd --name initrd.img \\\${prefix}/initramfs-$MY_KRNL.img</span></span>
<span class="line"><span>boot || goto failed</span></span>
<span class="line"><span>END</span></span>
<span class="line"><span># sed -i &quot;/item --key 2/a item --key 3 f$MY_FVER 3. RedHat Fedora $MY_FVER&quot; /opt/bootmenu/templates/menu.html.ep</span></span>
<span class="line"><span># systemctl restart bootmenu.service</span></span></code></pre></div><p>如果一切顺利，你的客户端下次引导时，应该看到如下图所示的结果：</p><p><img src="https://fedoramagazine.org/wp-content/uploads/2018/11/netboot-menu-updated-1024x641.png" alt=""></p><hr>`,33)),p("p",null,[s[11]||(s[11]=n("via: ",-1)),e(a,{href:"https://fedoramagazine.org/how-to-build-a-netboot-server-part-3/"},{default:i(()=>[...s[10]||(s[10]=[n("https://fedoramagazine.org/how-to-build-a-netboot-server-part-3/",-1)])]),_:1})]),p("p",null,[s[16]||(s[16]=n("作者：",-1)),e(a,{href:"https://fedoramagazine.org/author/glb/"},{default:i(()=>[...s[12]||(s[12]=[n("Gregory Bartholomew",-1)])]),_:1}),s[17]||(s[17]=n(" 选题：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[13]||(s[13]=[n("lujun9972",-1)])]),_:1}),s[18]||(s[18]=n(" 译者：",-1)),e(a,{href:"https://github.com/qhwdw"},{default:i(()=>[...s[14]||(s[14]=[n("qhwdw",-1)])]),_:1}),s[19]||(s[19]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[15]||(s[15]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[22]||(s[22]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[20]||(s[20]=[n("LCTT",-1)])]),_:1}),s[23]||(s[23]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:i(()=>[...s[21]||(s[21]=[n("Linux中国",-1)])]),_:1}),s[24]||(s[24]=n(" 荣誉推出",-1))])])}const E=t(r,[["render",u]]);export{$ as __pageData,E as default};
