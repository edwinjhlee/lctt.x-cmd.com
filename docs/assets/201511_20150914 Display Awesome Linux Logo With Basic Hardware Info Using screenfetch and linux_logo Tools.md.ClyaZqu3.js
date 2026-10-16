import{_ as i,a0 as l,w as p,s as c,ao as a,I as n,x as t,a1 as r,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"用 screenfetch 和 linux_logo 显示带有酷炫 Linux 标志的基本硬件信息 | LCTT x X-CMD","titleTemplate":false,"description":"用 screenfetch 和 linux_logo 显示带有酷炫 Linux 标志的基本硬件信息 | LCTT (201511) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 screenfetch 和 linux_logo 显示带有酷炫 Linux 标志的基本硬件信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 screenfetch 和 linux_logo 显示带有酷炫 Linux 标志的基本硬件信息 | LCTT (201511) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201511/20150914 Display Awesome Linux Logo With Basic Hardware Info Using screenfetch and linux_logo Tools","title":"用 screenfetch 和 linux_logo 显示带有酷炫 Linux 标志的基本硬件信息","tag":"201511","desc":""},"relativePath":"201511/20150914 Display Awesome Linux Logo With Basic Hardware Info Using screenfetch and linux_logo Tools.md","filePath":"[post].md"}'),d={name:"201511/20150914 Display Awesome Linux Logo With Basic Hardware Info Using screenfetch and linux_logo Tools.md"};function u(h,e,g,f,m,x){const s=l("Link");return p(),c("div",null,[e[22]||(e[22]=a('<h1 id="用-screenfetch-和-linux-logo-显示带有酷炫-linux-标志的基本硬件信息" tabindex="-1">用 screenfetch 和 linux_logo 显示带有酷炫 Linux 标志的基本硬件信息 <a class="header-anchor" href="#用-screenfetch-和-linux-logo-显示带有酷炫-linux-标志的基本硬件信息" aria-label="Permalink to “用 screenfetch 和 linux_logo 显示带有酷炫 Linux 标志的基本硬件信息”">​</a></h1><p>想在屏幕上显示出你的 Linux 发行版的酷炫标志和基本硬件信息吗？不用找了，来试试超赞的 screenfetch 和 linux_logo 工具。</p><h3 id="来看看-screenfetch-吧" tabindex="-1">来看看 screenfetch 吧 <a class="header-anchor" href="#来看看-screenfetch-吧" aria-label="Permalink to “来看看 screenfetch 吧”">​</a></h3><p>screenFetch 是一个能够在截屏中显示系统/主题信息的命令行脚本。它可以在 Linux，OS X，FreeBSD 以及其它的许多类Unix系统上使用。来自 man 手册的说明：</p><blockquote><p>这个方便的 Bash 脚本可以用来生成那些漂亮的终端主题信息和用 ASCII 构成的发行版标志，就像如今你在别人的截屏里看到的那样。它会自动检测你的发行版并显示 ASCII 版的发行版标志，并且在右边显示一些有价值的信息。</p></blockquote><h4 id="在-linux-上安装-screenfetch" tabindex="-1">在 Linux 上安装 screenfetch <a class="header-anchor" href="#在-linux-上安装-screenfetch" aria-label="Permalink to “在 Linux 上安装 screenfetch”">​</a></h4>',6)),n("p",null,[e[1]||(e[1]=t("打开终端应用。在基于 Debian 或 Ubuntu 或 Mint 的系统上只需要输入下列 ",-1)),r(s,{href:"http://www.cyberciti.biz/tips/linux-debian-package-management-cheat-sheet.html"},{default:o(()=>[...e[0]||(e[0]=[t("apt-get 命令",-1)])]),_:1}),e[2]||(e[2]=t("：",-1))]),e[23]||(e[23]=a(`<pre><code>$ sudo apt-get install screenfetch
</code></pre><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/ubuntu-debian-linux-apt-get-install-screenfetch.jpg" alt=""></p><p><em>图一：用 apt-get 安装 screenfetch</em></p><h4 id="在-mac-os-x-上安装-screenfetch" tabindex="-1">在 Mac OS X 上安装 screenfetch <a class="header-anchor" href="#在-mac-os-x-上安装-screenfetch" aria-label="Permalink to “在 Mac OS X 上安装 screenfetch”">​</a></h4><p>输入下列命令：</p><pre><code>$ brew install screenfetch
</code></pre><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/apple-mac-osx-install-screenfetch.jpg" alt=""></p><p><em>图二：用 brew 命令安装 screenfetch</em></p><h4 id="在-freebsd-上安装-screenfetch" tabindex="-1">在 FreeBSD 上安装 screenfetch <a class="header-anchor" href="#在-freebsd-上安装-screenfetch" aria-label="Permalink to “在 FreeBSD 上安装 screenfetch”">​</a></h4><p>输入下列 pkg 命令：</p><pre><code>$ sudo pkg install sysutils/screenfetch
</code></pre><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/freebsd-install-pkg-screenfetch.jpg" alt=""></p><p><em>图三：在 FreeBSD 用 pkg 安装 screenfetch</em></p><h4 id="在-fedora-上安装-screenfetch" tabindex="-1">在 Fedora 上安装 screenfetch <a class="header-anchor" href="#在-fedora-上安装-screenfetch" aria-label="Permalink to “在 Fedora 上安装 screenfetch”">​</a></h4><p>输入下列 dnf 命令：</p><pre><code>$ sudo dnf install screenfetch
</code></pre><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/fedora-dnf-install-screenfetch.jpg" alt=""></p><p><em>图四：在 Fedora 22 用 dnf 安装 screenfetch</em></p><h4 id="我该怎么使用-screefetch-工具" tabindex="-1">我该怎么使用 screefetch 工具？ <a class="header-anchor" href="#我该怎么使用-screefetch-工具" aria-label="Permalink to “我该怎么使用 screefetch 工具？”">​</a></h4><p>只需输入以下命令：</p><pre><code>$ screenfetch
</code></pre><p>这是不同系统的输出：</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/fedora-screenfetch.jpg" alt=""></p><p><em>Fedora 上的 Screenfetch</em></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/screenfetch-osx.jpg" alt=""></p><p><em>OS X 上的 Screenfetch</em></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/screenfetch-freebsd.jpg" alt=""></p><p><em>FreeBSD 上的 Screenfetch</em></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/debian-ubutnu-screenfetch-outputs.jpg" alt=""></p><p><em>Debian 上的 Screenfetch</em></p><h4 id="获取截屏" tabindex="-1">获取截屏 <a class="header-anchor" href="#获取截屏" aria-label="Permalink to “获取截屏”">​</a></h4><p>要获取截屏并保存成文件，输入：</p><pre><code>$ screenfetch -s
</code></pre><p>你会看到一个文件 ~/Desktop/screenFetch-*.jpg。获取截屏并直接上传到 imgur，输入：</p><pre><code>$ screenfetch -su imgur
</code></pre><p><strong>输出示例：</strong></p><pre><code>                 -/+:.          veryv@Viveks-MacBook-Pro
                :++++.          OS: 64bit Mac OS X 10.10.5 14F27
               /+++/.           Kernel: x86_64 Darwin 14.5.0
       .:-::- .+/:-\`\`.::-       Uptime: 3d 1h 36m
    .:/++++++/::::/++++++/:\`    Packages: 56
  .:///////////////////////:\`   Shell: bash 3.2.57
  ////////////////////////\`     Resolution: 2560x1600 1920x1200
 -+++++++++++++++++++++++\`      DE: Aqua
 /++++++++++++++++++++++/       WM: Quartz Compositor
 /sssssssssssssssssssssss.      WM Theme: Blue
 :ssssssssssssssssssssssss-     Font: Not Found
  osssssssssssssssssssssssso/\`  CPU: Intel Core i5-4288U CPU @ 2.60GHz
  \`syyyyyyyyyyyyyyyyyyyyyyyy+\`  GPU: Intel Iris
   \`ossssssssssssssssssssss/    RAM: 6405MB / 8192MB
     :ooooooooooooooooooo+.
      \`:+oo+/:-..-:/+o+/-      

Taking shot in 3.. 2.. 1.. 0.
==&gt;  Uploading your screenshot now...your screenshot can be viewed at http://imgur.com/HKIUznn
</code></pre>`,37)),n("p",null,[e[4]||(e[4]=t("你可以访问 ",-1)),r(s,{href:"http://imgur.com/HKIUznn"},{default:o(()=>[...e[3]||(e[3]=[t("http://imgur.com/HKIUznn",-1)])]),_:1}),e[5]||(e[5]=t(" 来查看上传的截屏。",-1))]),e[24]||(e[24]=a(`<h3 id="再来看看-linux-logo" tabindex="-1">再来看看 linux_logo <a class="header-anchor" href="#再来看看-linux-logo" aria-label="Permalink to “再来看看 linux_logo”">​</a></h3><p>linux_logo 程序生成一个彩色的 ANSI 版企鹅图片，还包含一些来自 /proc 的系统信息。</p><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h4><p>只需按照你的 Linux 发行版输入对应的命令：</p><h4 id="debian-ubutnu-mint" tabindex="-1">Debian/Ubutnu/Mint <a class="header-anchor" href="#debian-ubutnu-mint" aria-label="Permalink to “Debian/Ubutnu/Mint”">​</a></h4><pre><code># apt-get install linux_logo
</code></pre><h4 id="centos-rhel-旧版-fedora" tabindex="-1">CentOS/RHEL/旧版 Fedora <a class="header-anchor" href="#centos-rhel-旧版-fedora" aria-label="Permalink to “CentOS/RHEL/旧版 Fedora”">​</a></h4><pre><code># yum install linux_logo
</code></pre><h4 id="fedora-linux-v22-或更新版本" tabindex="-1">Fedora Linux v22+ 或更新版本 <a class="header-anchor" href="#fedora-linux-v22-或更新版本" aria-label="Permalink to “Fedora Linux v22+ 或更新版本”">​</a></h4><pre><code># dnf install linux_logo
</code></pre><h4 id="运行它" tabindex="-1">运行它 <a class="header-anchor" href="#运行它" aria-label="Permalink to “运行它”">​</a></h4><p>只需输入下列命令：</p><pre><code>$ linux_logo
</code></pre><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/debian-linux_logo.jpg" alt=""></p><p><em>运行 linux_logo</em></p><h4 id="等等-还有更多" tabindex="-1">等等，还有更多！ <a class="header-anchor" href="#等等-还有更多" aria-label="Permalink to “等等，还有更多！”">​</a></h4><p>你可以用这个命令查看内置的标志列表：</p><pre><code>$ linux_logo -f -L list
</code></pre><p><strong>输出示例：</strong></p><pre><code>Available Built-in Logos:
	Num	Type	Ascii	Name		Description
	1	Classic	Yes	aix		AIX Logo
	2	Banner	Yes	bsd_banner	FreeBSD Logo
	3	Classic	Yes	bsd		FreeBSD Logo
	4	Classic	Yes	irix		Irix Logo
	5	Banner	Yes	openbsd_banner	OpenBSD Logo
	6	Classic	Yes	openbsd		OpenBSD Logo
	7	Banner	Yes	solaris		The Default Banner Logos
	8	Banner	Yes	banner		The Default Banner Logo
	9	Banner	Yes	banner-simp	Simplified Banner Logo
	10	Classic	Yes	classic		The Default Classic Logo
	11	Classic	Yes	classic-nodots	The Classic Logo, No Periods
	12	Classic	Yes	classic-simp	Classic No Dots Or Letters
	13	Classic	Yes	core		Core Linux Logo
	14	Banner	Yes	debian_banner_2	Debian Banner 2
	15	Banner	Yes	debian_banner	Debian Banner (white)
	16	Classic	Yes	debian		Debian Swirl Logos
	17	Classic	Yes	debian_old	Debian Old Penguin Logos
	18	Classic	Yes	gnu_linux	Classic GNU/Linux
	19	Banner	Yes	mandrake	Mandrakelinux(TM) Banner
	20	Banner	Yes	mandrake_banner	Mandrake(TM) Linux Banner
	21	Banner	Yes	mandriva	Mandriva(TM) Linux Banner
	22	Banner	Yes	pld		PLD Linux banner
	23	Classic	Yes	raspi		An ASCII Raspberry Pi logo
	24	Banner	Yes	redhat		RedHat Banner (white)
	25	Banner	Yes	slackware	Slackware Logo
	26	Banner	Yes	sme		SME Server Banner Logo
	27	Banner	Yes	sourcemage_ban	Source Mage GNU/Linux banner
	28	Banner	Yes	sourcemage	Source Mage GNU/Linux large
	29	Banner	Yes	suse		SUSE Logo
	30	Banner	Yes	ubuntu		Ubuntu Logo

Do &quot;linux_logo -L num&quot; where num is from above to get the appropriate logo.
Remember to also use -a to get ascii version.
</code></pre><p>查看 aix 的标志，输入：</p><pre><code>$ linux_logo -f -L aix
</code></pre><p>查看 openbsd 的标志：</p><pre><code>$ linux_logo -f -L openbsd
</code></pre><p>或者只是随机看看一些 Linux 标志：</p><pre><code>$ linux_logo -f -L random_xy
</code></pre>`,26)),n("p",null,[e[7]||(e[7]=t("你",-1)),r(s,{href:"http://www.cyberciti.biz/faq/bash-for-loop/"},{default:o(()=>[...e[6]||(e[6]=[t("可以像下面那样结合 bash 的循环来显示不同的标志",-1)])]),_:1}),e[8]||(e[8]=t("，输入：",-1))]),e[25]||(e[25]=n("p",null,[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/09/linux-logo-fun.gif",alt:""})],-1)),e[26]||(e[26]=n("p",null,[n("em",null,"动图1： linux_logo 和 bash 循环，既有趣又能发朋友圈耍酷")],-1)),e[27]||(e[27]=n("h3",{id:"获取帮助",tabindex:"-1"},[t("获取帮助 "),n("a",{class:"header-anchor",href:"#获取帮助","aria-label":"Permalink to “获取帮助”"},"​")],-1)),e[28]||(e[28]=n("p",null,"输入下列命令：",-1)),e[29]||(e[29]=n("pre",null,[n("code",null,`$ screefetch -h
$ linux_logo -h
`)],-1)),e[30]||(e[30]=n("p",null,[n("strong",null,"参考")],-1)),n("ul",null,[n("li",null,[r(s,{href:"https://github.com/KittyKatt/screenFetch"},{default:o(()=>[...e[9]||(e[9]=[t("screenFetch 主页",-1)])]),_:1})]),n("li",null,[r(s,{href:"https://github.com/deater/linux_logo"},{default:o(()=>[...e[10]||(e[10]=[t("linux_logo 主页",-1)])]),_:1})])]),e[31]||(e[31]=n("hr",null,null,-1)),n("p",null,[e[12]||(e[12]=t("via: ",-1)),r(s,{href:"http://www.cyberciti.biz/hardware/howto-display-linux-logo-in-bash-terminal-using-screenfetch-linux_logo/"},{default:o(()=>[...e[11]||(e[11]=[t("http://www.cyberciti.biz/hardware/howto-display-linux-logo-in-bash-terminal-using-screenfetch-linux_logo/",-1)])]),_:1})]),n("p",null,[e[15]||(e[15]=t("作者：Vivek Gite 译者：",-1)),r(s,{href:"https://github.com/alim0x"},{default:o(()=>[...e[13]||(e[13]=[t("alim0x",-1)])]),_:1}),e[16]||(e[16]=t(" 校对：",-1)),r(s,{href:"https://github.com/wxy"},{default:o(()=>[...e[14]||(e[14]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[19]||(e[19]=t("本文由 ",-1)),r(s,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[17]||(e[17]=[t("LCTT",-1)])]),_:1}),e[20]||(e[20]=t(" 原创编译，",-1)),r(s,{href:"https://linux.cn/"},{default:o(()=>[...e[18]||(e[18]=[t("Linux中国",-1)])]),_:1}),e[21]||(e[21]=t(" 荣誉推出",-1))])])}const _=i(d,[["render",u]]);export{y as __pageData,_ as default};
