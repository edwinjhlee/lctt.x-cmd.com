import{_ as s,a0 as l,w as d,s as a,I as n,x as e,a1 as o,A as r,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const E=JSON.parse('{"title":"树莓派（Raspberry Pi）：完美的家用服务器 | LCTT x X-CMD","titleTemplate":false,"description":"树莓派（Raspberry Pi）：完美的家用服务器 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"树莓派（Raspberry Pi）：完美的家用服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"树莓派（Raspberry Pi）：完美的家用服务器 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Raspberry Pi--the Perfect Home Server","title":"树莓派（Raspberry Pi）：完美的家用服务器","tag":"201311","desc":""},"relativePath":"201311/Raspberry Pi--the Perfect Home Server.md","filePath":"[post].md"}'),u={name:"201311/Raspberry Pi--the Perfect Home Server.md"};function m(g,t,P,f,R,S){const p=l("Link");return d(),a("div",null,[t[34]||(t[34]=n("h1",{id:"树莓派-raspberry-pi-完美的家用服务器",tabindex:"-1"},[e("树莓派（Raspberry Pi）：完美的家用服务器 "),n("a",{class:"header-anchor",href:"#树莓派-raspberry-pi-完美的家用服务器","aria-label":"Permalink to “树莓派（Raspberry Pi）：完美的家用服务器”"},"​")],-1)),t[35]||(t[35]=n("p",null,[e("自从树莓派发布后，所有在互联网上的网站为此激动人心的设备提供了很多有趣和具有挑战性的使用方法。虽然这些想法都很棒，但树莓派( "),n("strong",null,"RPi"),e(" )最明显却又是最不吸引人的用处是：创建你的完美家用服务器。")],-1)),t[36]||(t[36]=n("p",null,"如果你有几个不同的电脑需要同步和自动化备份，RPi可以做到。如果你想通过家中的任意屏幕来访问你的音乐和视频，RPi也能实现。也许你有一个或两个打印机，你想要简单与大家共享，树莓派在硬件和时间上用最小投资就能满足你的这些需求。",-1)),t[37]||(t[37]=n("p",null,"###树莓派的好处",-1)),t[38]||(t[38]=n("p",null,"低成本：35美元（约合242元RMB），B型的RPi接近一台完整的电脑，512M内存，100Mb以太网，SD卡插槽，2个USB接口，音频输出和HDMI或RCA视频输出。我知道HDMI电缆就比树莓派贵。",-1)),t[39]||(t[39]=n("p",null,"能源效率：硬件成本只是服务器费用的一部分，因为你需要考虑能源成本去不断运行设备。家用服务器所需要的服务不会占用太多CPU，大部分时间它都处于空闲状态，等待发挥功效。RPi's超低功率组件非常适合这个工作负载，这有助于降低你的电费消耗。我的一个B型的RPi加上外部硬盘消耗总共只有8瓦，然而用老式速龙代替的机器在闲置时消耗54瓦。假设10美分每千瓦一小时，这使得一个RPi每年的电费在7美元。一个基于速龙的机器是47美元。在不到一年的时间里，RPI基本上能够收回成本。",-1)),n("p",null,[t[1]||(t[1]=e("低噪音：因为RPi没有风扇和移动部件，在你最终配置中的唯一能生成噪音或明显热量的组件就是硬盘。如果你担心噪音，像",-1)),o(p,{href:"http://www.silentpcreview.com/"},{default:r(()=>[...t[0]||(t[0]=[e("Silent PC Review",-1)])]),_:1}),t[2]||(t[2]=e("发烧友网站经常在他们的评论中涉及到噪声基准。我的体会是现代驱动器足够安静，要比其他的设备安静的多（如媒体中心，游戏机或其他电脑）。如果你家里没有为布线提供更多的灵活性选择，RPi的小尺寸、少量发热和低噪音也许让你走过它旁边都很难发现。",-1))]),t[40]||(t[40]=n("p",null,[n("img",{src:"http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1002061/11454f1.jpg",alt:""})],-1)),t[41]||(t[41]=n("p",null,"图1,一个简洁高效的家用服务器",-1)),t[42]||(t[42]=n("p",null,"新机会：一个不怎么实际的好处是-简单快乐的尝试新事物！对我来说，这是我第一次真正工作在基于Debian的发行版，很可能也是许多Linux爱好者们第一次有机会尝试一个基于ARM的体系结构。",-1)),t[43]||(t[43]=n("p",null,"###布置硬件",-1)),t[44]||(t[44]=n("p",null,"对于一个家庭服务器来说，你将需要一个中等容量的SD闪存卡作为本地存储。它可以使用一个USB引导，但那会占用两个宝贵的USB插槽之一。闪存卡不需要很大容量，但是速度越快越好。我选择了一个名牌SD卡，8GB容量和CLASS 10的速度等级。对于备份和存储多媒体文件，一个有USB连接插槽的硬盘驱动器是必须的。我选择一个1.5TB的硬盘和一个Calvary EN-CAHDD-D 2-bay USB 2.0硬盘连接基座。这个连接基座有个功能，在RAID-0模式中连接两个硬盘，总有一天会有用的。最后，RPi不带电源线，但可以用大多数智能手机充电器所用的5v微型USB。看看RPi是否挑剔电源，我为电源已换了三个不同的微型USB手机充电器。我在这周内尝试了每一个，在任何一个上都没有问题。",-1)),t[45]||(t[45]=n("p",null,"###安装操作系统",-1)),t[46]||(t[46]=n("p",null,"安装RPi操作系统包括了许多方面的大量细节，但这里有一些家用特定服务器的安装提示，大致按需要的顺序讲述。",-1)),n("p",null,[t[4]||(t[4]=e("1）直接通过",-1)),o(p,{href:"http://www.raspberrypi.org/downloads"},{default:r(()=>[...t[3]||(t[3]=[e("http://www.raspberrypi.org/downloads",-1)])]),_:1}),t[5]||(t[5]=e('获取Raspbian "Wheezy"安装镜像，并复制到SD卡，用网站上已列出的步骤。',-1))]),t[47]||(t[47]=i(`<p>2）第一次引导RPi时，连接一个键盘、鼠标和显示器。在引导RPi之前别忘打开显示器，可以检测到正确的HDMI或混合输出端口。</p><p>3）RPi有一个很好的&quot;raspi-config&quot;屏幕，在第一次启动时你会看到。对于家庭服务器来说，以下选择将会有用：</p><ul><li>expand_rootfs：调整默认2GB OS镜像的大小，来填满闪存卡剩余的内存。</li><li>change_pass：修改默认密码&quot;raspberry&quot;，但是，越安全的密码越好。</li><li>设置你的地点和时区。</li><li>memory_split：给GPIU服务分配最少的内存（16M）尽可能为其他服务留下更多内存。</li><li>SSH：别忘开启SSH服务。</li><li>boot_behaviour：关闭“启动至桌面（boot to desktop）”（再次为你的其他服务节省内存）。</li></ul><p>完成后，你将在出现 <code>pi@raspberrypi</code> 提示符下。安装脚本可以在任何时间通过 <code>sudo raspi-config</code> 重新运行。</p><p>还有一些其他配置，然后操作系统就可以用了。</p><p>1）一个静态IP让一切变得更容易，切换eth0的网络设置：</p><pre><code>   &gt;&gt; sudo nano -w /etc/network/interfaces  
</code></pre><p>更改eth0的那行 <code>iface eth0 inet dhcp</code> ，如下所示（根据你的家庭网络设置修改）：</p><pre><code>======/etc/network/interfaces======
...
iface eth0 inet static
address 192.168.1.10
netmask 255.255.255.0
gateway 192.168.1.1
...
======/etc/network/interfaces======
</code></pre><p>2）创建本地用户并加入到users组和sudo组：</p><pre><code>&gt;&gt; sudo adduser YOURUSERIDHERE
&gt;&gt; sudo usermod -a -G users YOURUSERIDHERE
&gt;&gt; sudo usermod -a -G sudo YOURUSERIDHERE
</code></pre><p>3）更新系统确保所有的库是最新最好的：</p><pre><code>&gt;&gt; sudo apt-get update; sudo apt-get upgrade
</code></pre><p>4）好了，准备重新启动吧！先关闭PI：</p><pre><code>&gt;&gt; sudo /sbin/shutdown -h now
</code></pre><p>一旦关闭（注意RPi电路板上的绿色LED状态指示灯，可以知道什么时候完成关闭了），拔下显示器，键盘，鼠标和电源线。插入USB端口上的硬盘，然后插回电源重启RPi。</p><p>5）一旦RPi开启（这些绿色LED指示灯用来描述状态），你可以从远程网络上从任何其他机器ssh到RPi并完成所有的配置（更改以下命令里的IP为你的静态IP）：</p><pre><code>&gt;&gt; ssh YOURUSERIDHERE@192.168.1.10
</code></pre><p>祝贺你，有了一个可以工作的树莓派！</p><p>###外设</p><p>第一件事是要连接外设。用dmesg来寻找你的存储设备，会发现——几乎可以肯定是/dev/sda。我喜欢使用自动挂载去挂载移动存储设备，这样更灵活，因为在启动时这些设备也许没有或者没准备好：</p><pre><code>&gt;&gt; sudo apt-get install autofs
&gt;&gt; sudo nano -w /etc/auto.master 
======/etc/auto.master======
...
/misc /etc/auto.misc
...
======/etc/auto.master======

&gt;&gt; sudo nano -w /etc/auto.misc
</code></pre><p>注意，我的外部存储设备是ext4格式，如果需要话可以在下面更改：</p><pre><code>======/etc/auto.misc======
...
storage -fstype=ext4:/dev/sda1
...
======/etc/auto.misc======
&gt;&gt; sudo /etc/init.d/autofs restart 
&gt;&gt; ls -lat /misc/storage 
</code></pre><p>可选的，创建一个符号链接的短路径：</p><pre><code>&gt;&gt; ln -s /misc/storage /storage
</code></pre><p>###备份仓库</p><p>在任何家庭服务器功能列表里面最重要的是提供坚如磐石的备份。对于RPi来说，这很简单而优美，在Linux中有丰富的网络共享选项：Samba/CIFS用于Windows机器，NFS用于基于UNIX的设备，并且甚至SFTP可以用于更多新的备份客户端，如deja-dup。由于RPi只有100MB以太网接口和USB上的存储设备，它没有非常快的传送速度。不过在另一方面，好的备份客户端是在后台自动运行的，所以你不会注意略微缓慢的传输速度。</p>`,28)),n("p",null,[t[7]||(t[7]=e("我的家庭网络包括一台Windows 7电脑。对于它，我通过Samba在RPi's外部USB存储设备上导出一个备份目录。因为备份程序在Windows7基础版上不支持网络设备作为备份目标，我使用",-1)),o(p,{href:"http://www.2brightsparks.com/freeware/freeware-hub.html"},{default:r(()=>[...t[6]||(t[6]=[e("SyncBack Free",-1)])]),_:1}),t[8]||(t[8]=e("去设置使其自动化，每日备份。",-1))]),t[48]||(t[48]=i(`<p>配置Samba是容易的。</p><p>1）安装samba和common-bin库（具有smbpasswd效用）</p><pre><code>&gt;&gt; sudo apt-get install samba samba-common-bin
</code></pre><p>2）使用 <code>smbpasswd</code> 让你的本地ID能访问：</p><pre><code>&gt;&gt; sudo smbpasswd -a YOURUSERIDHERE
</code></pre><p>3）编辑samba配置文件：</p><pre><code>&gt;&gt; sudo nano -w /etc/samba/smb.conf
</code></pre><p>4）更改 <code>workgroup = WORKGROUP</code> 行以匹配你的Windows工作组名称。</p><p>5）注释掉或删除[homes]和[printers]共享。(打印机共享稍后将通过直接CUPS访问来完成。)</p><p>6）为Windows备份路径增加一个条目。这是我的示例，放置在该文件的底部：</p><pre><code>======/etc/samba/smb.conf======
...
[win7pc] 
comment=Backup for windows PC
path=/storage/win7pc 
writeable=Yes 
create mask=0777 
directory mask=0777 
browsable=Yes 
public=Yes 
valid users=YOURUSERIDHERE
...
======/etc/samba/smb.conf======
</code></pre><p>7）重启Samba使你的编辑生效：</p><pre><code>&gt;&gt; sudo /etc/init.d/samba restart
</code></pre><p>8）从Windows机器文件资源管理器通过映射一个网络设备测试连通。</p><p>对Linux设备来说，设置和使用deja-dup非常简单。它被默认安装在我的Fedora 18和Ubuntu 12.10上。包的名称是“deja-dup”，程序名简单的称为“Backup（备份）”。虽然RPi很容易支持NFS导出，我发现使用deja-dup的SSH选项更容易，更方便，在RPi上它不需要额外服务的支持。指定一个deja-dup加密密码是一个好主意，除非你不在意一旦丢失了存储器，别人就可以拿走全部数据：</p><pre><code>&gt;&gt; sudo mkdir /storage/linuxlaptop
&gt;&gt; sudo chown -R YOURUSERIDHERE:YOURUSERIDHERE /storage/linuxlaptop
</code></pre><p>从linux客户端启动备份程序，选择“SSH”作为备份位置，输入RPi的IP地址和你创建的存储位置。首次备份会很慢，但是以后的运行将只发送增量变化，速度更快。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/medium-350px-centered/u1002061/11454f2.png" alt=""></p><p>图2,Deja-dup客户端设置</p><p>###多媒体服务器：DLNA</p><p>现在每个人的文件都已安全备份。让我们继续看些有趣的！一个DLNA服务器可以让你集中存储你的电影、音乐和图片。通过这个中心库，家中每一个屏幕的DLNA客户端都可以轻松重放此内容。</p><p>至少，这是一个宣称。事实是这样的，DNLA规格并不太确定一些重要的事情，如支持哪些格式或编码。每个客户端通常对于支持什么格式和服务器功能都有略微不同的想法。很多高功率的服务器也许能转码本地内容到移动设备支持的格式，但是在RPi上是不可能的，在即时转码上经常扰乱其他功能，如暂停，快进和倒带。一般情况下，高功率设备如PS3、Xbox和WD TV设备支持大多数格式，而无需任何转码。低端设备如智能TVs或Blu-ray播放器只支持更有限的编码列表。</p><p>对于RPi来说，最好的办法是支持你的主要的DLNA设备的标准编码，然后测试你的其他DLNA客户端。如果没有完美播放，在下一节的提示也许有帮助。在我的情况下，我的PlayStation 3充当DLNA客户端，PS3能够流畅播放经Handbrake制作后的.m4v文件。</p><p>对于RPi的DLNA服务器来说，Minidlna是个很好的选择。它已经在Raspbian发行版中，易于设置和使用最小服务资源运行：</p><pre><code>&gt;&gt; sudo apt-get install minidlna
&gt;&gt; sudo nano  -w /etc/minidlna.conf
</code></pre><p>这是我/etc/minidlna.conf文件的相关部分：</p><pre><code>...
# I found keeping video + audio in different paths helpful
media_dir=V,/storage/dlna/video 
media_dir=A,/storage/dlna/music 
...
presentation_url=http://192.168.1.10:8200/
...	
friendly_name=MyRPi
...
# Since I add new media infrequently, turning off 
# inotify keeps minidlna for polling for 
# content changes. It&#39;s simple enough to run 
# sudo /etc/init.d/minidlna force-reload
# when new content is added.
inotify=no
</code></pre><p>一旦完成编辑，重启minidlna以加载新配置：</p><pre><code>&gt;&gt; sudo /etc/init.d/minidlna force-reload
</code></pre><p>Minidlna能够为你的设备支持的电影提供电影海报缩略图（像PS3）。这让我能够更方便地在几十个电影文件中滚屏查找我想要的那个电影。我发现每个电影一个目录是最兼容的文件布局，只包含影片文件和缩略图，图像命名为“Cover.jpg”。使用像&quot;MovieName.m4v&quot;和&quot;MovieName.jpg&quot;的格式在PS3上工作的很好，但它不太适合VLC（除非你能让VLC uPNP插件首先查找服务器的话）。</p>`,30)),n("p",null,[t[10]||(t[10]=e('通过PS3，你可以通过转到在XMB栏上的"Video"测试连通性。当视频列表向下翻页时，你以前设置的"friendly_name"应该是可见的，测试确保Minidlna是通过浏览器转到',-1)),o(p,{href:"http://192.168.1.10:8200/%E3%80%82"},{default:r(()=>[...t[9]||(t[9]=[e("http://192.168.1.10:8200/。",-1)])]),_:1})]),t[49]||(t[49]=n("p",null,"###非DLNA设备的多媒体",-1)),t[50]||(t[50]=n("p",null,"当你让DNLA与你的一些设备一起工作时，你可能会发现有些设备并不适合它，所以多媒体计划B是个好主意。Nginx网站服务器有一个MP4插件尝试在旧式的HTTP连接上改善流媒体传输，但是浏览器回放的性能差别很大，在一部电影里快进也一直不工作。看起来多媒体共享或非 DLNA 设备的最低共同特性是使用传统Samba共享的访客只读访问。",-1)),t[51]||(t[51]=n("p",null,"这是/etc/samba/smb.conf的部分示例：",-1)),t[52]||(t[52]=n("pre",null,[n("code",null,`[dlna] 
path=/storage/dlna 
read only=yes 
browsable=yes 
public=yes 
`)],-1)),t[53]||(t[53]=n("p",null,[e("定义了共享设置后重启Samba（ "),n("code",null,"sudo /etc/init.d/samba restart"),e(" ），你可以开始测试你的客户端。")],-1)),t[54]||(t[54]=n("p",null,"我用一个混合的编码m4v视频文件测试了以下客户端：",-1)),n("ul",null,[t[13]||(t[13]=n("li",null,[n("p",null,'Android 4.0.4手机："ES File Explorer"与"ES Media Player"（播放器附带安装）。')],-1)),t[14]||(t[14]=n("li",null,[n("p",null,'Android 4.1.2平板电脑："ES File Explorer"与"ES Media Player"（播放器附带安装）。')],-1)),n("li",null,[n("p",null,[t[12]||(t[12]=e("Linux设备：自动挂载：",-1)),o(p,{href:"//192.168.1.10/dlna%EF%BC%8C%E7%84%B6%E5%90%8E%E4%BD%BF%E7%94%A8VLC%E6%88%96MPlayer%E3%80%82"},{default:r(()=>[...t[11]||(t[11]=[e("//192.168.1.10/dlna，然后使用VLC或MPlayer。",-1)])]),_:1})])]),t[15]||(t[15]=n("li",null,[n("p",null,"Windows：挂载//192.168.1.10:/dlna，然后使用VLC。")],-1))]),t[55]||(t[55]=i(`<p>所有设备都能几乎立即开始播放和快进没有延迟的情况。</p><p>###打印服务器</p><p>RPi运行CUPS相当不错，所以它容易共享一个较旧的没有本地网络接口的打印机。</p><p>安装你的打印机所需的CUPS和任何软件包。我需要hplip-cups，因为我有一个HP喷墨打印机：</p><pre><code>&gt;&gt;  sudo apt-get install cups hplip-cups
</code></pre><p>更新“Listen”行和增加 <code>Allow @LOCAL</code> 到位置指令，如下所示（你可以使用其他机器在你的LAN上去管理CUPS）：</p><pre><code>======/etc/cups/cupsd.conf======
#Listen localhost:631  #Comment this out
Listen 192.168.1.10:631 #Add this line
...
&lt;Location /&gt; 
  Order allow,deny 
  Allow @LOCAL 
&lt;/Location&gt; 

# Restrict access to the admin pages... 
&lt;Location /admin&gt; 
  Order allow,deny 
  Allow @LOCAL 
&lt;/Location&gt; 

# Restrict access to configuration files... 
&lt;Location /admin/conf&gt; 	
  AuthType Default 
  Require user @SYSTEM 
  Order allow,deny 
  Allow @LOCAL 
&lt;/Location&gt; 
======/etc/cups/cupsd.conf======
</code></pre><p>添加你的本地ID到lpadmin组就能管理CUPS：</p><pre><code>&gt;&gt; sudo usermod -a -G lpadmin  YOURUSERIDHERE
</code></pre><p>重启CUPS：</p><pre><code>&gt;&gt; sudo /etc/init.d/cups restart
</code></pre>`,11)),n("p",null,[t[18]||(t[18]=e("然后转到",-1)),o(p,{href:"http://192.168.1.10:631/%E5%B9%B6%E7%82%B9%E5%87%BB"},{default:r(()=>[...t[16]||(t[16]=[e("http://192.168.1.10:631/并点击",-1)])]),_:1}),t[19]||(t[19]=e(' "Adding Printers and Classes"去设置你的打印机。我的打印机是自动发现的USB设备，所以，我只需点击“share”就可以。同样访问',-1)),o(p,{href:"https://192.168.1.10:631/admin%EF%BC%8C%E7%A1%AE%E4%BF%9D%E6%A3%80%E6%9F%A5%E2%80%9CShare"},{default:r(()=>[...t[17]||(t[17]=[e("https://192.168.1.10:631/admin，确保检查“Share",-1)])]),_:1}),t[20]||(t[20]=e(" printers connected to this system（共享连接至这个系统的打印机）”。",-1))]),n("p",null,[t[22]||(t[22]=e("完成后，你可以用通常的方式设置你的客户端。当我输入主机名，我的Linux客户端就能够自动发现打印机，并选择正确的驱动程序。在我的Windows7的机器上，一旦我选择“Network Printer（网络打印机）”，我必须点击“The printer that I want isn't listed（我想要的打印机未列出）”，选择“Select a shared printer by name（通过名称选择共享的打印机）”，然后从CUPS网络接口输入URL：",-1)),o(p,{href:"http://192.168.1.10:631/printers/HP_J4500%E3%80%82"},{default:r(()=>[...t[21]||(t[21]=[e("http://192.168.1.10:631/printers/HP_J4500。",-1)])]),_:1})]),t[56]||(t[56]=n("p",null,"###结论",-1)),t[57]||(t[57]=n("p",null,"用最少的额外的硬件和配置，树莓派是高效、简洁的家用服务器。它能够花最小的硬件费用来为你的家庭环境带来由Linux提供的广泛企业服务。",-1)),t[58]||(t[58]=n("hr",null,null,-1)),n("p",null,[t[24]||(t[24]=e("via: ",-1)),o(p,{href:"http://www.linuxjournal.com/content/raspberry-pi-perfect-home-server"},{default:r(()=>[...t[23]||(t[23]=[e("http://www.linuxjournal.com/content/raspberry-pi-perfect-home-server",-1)])]),_:1})]),n("p",null,[t[27]||(t[27]=e("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[25]||(t[25]=[e("LCTT",-1)])]),_:1}),t[28]||(t[28]=e(" 原创翻译，",-1)),o(p,{href:"http://linux.cn/"},{default:r(()=>[...t[26]||(t[26]=[e("Linux中国",-1)])]),_:1}),t[29]||(t[29]=e(" 荣誉推出",-1))]),n("p",null,[t[32]||(t[32]=e("译者：",-1)),o(p,{href:"https://github.com/vito-L"},{default:r(()=>[...t[30]||(t[30]=[e("Vito",-1)])]),_:1}),t[33]||(t[33]=e(" 校对：",-1)),o(p,{href:"https://github.com/carolinewuyan"},{default:r(()=>[...t[31]||(t[31]=[e("Caroline",-1)])]),_:1})])])}const L=s(u,[["render",m]]);export{E as __pageData,L as default};
