import{_ as i,a0 as l,w as p,s as c,ao as a,I as n,x as t,a1 as r,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"用 screenfetch 和 linux_logo 顯示帶有酷炫 Linux 標誌的基本硬件信息 | LCTT x X-CMD","titleTemplate":false,"description":"用 screenfetch 和 linux_logo 顯示帶有酷炫 Linux 標誌的基本硬件信息 | LCTT (201511) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 screenfetch 和 linux_logo 顯示帶有酷炫 Linux 標誌的基本硬件信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 screenfetch 和 linux_logo 顯示帶有酷炫 Linux 標誌的基本硬件信息 | LCTT (201511) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201511/20150914 Display Awesome Linux Logo With Basic Hardware Info Using screenfetch and linux_logo Tools","title":"用 screenfetch 和 linux_logo 顯示帶有酷炫 Linux 標誌的基本硬件信息","tag":"201511","desc":""},"relativePath":"201511/20150914 Display Awesome Linux Logo With Basic Hardware Info Using screenfetch and linux_logo Tools.md","filePath":"[post].md"}'),d={name:"201511/20150914 Display Awesome Linux Logo With Basic Hardware Info Using screenfetch and linux_logo Tools.md"};function u(h,e,g,f,m,x){const s=l("Link");return p(),c("div",null,[e[22]||(e[22]=a('<h1 id="用-screenfetch-和-linux-logo-顯示帶有酷炫-linux-標誌的基本硬件信息" tabindex="-1">用 screenfetch 和 linux_logo 顯示帶有酷炫 Linux 標誌的基本硬件信息 <a class="header-anchor" href="#用-screenfetch-和-linux-logo-顯示帶有酷炫-linux-標誌的基本硬件信息" aria-label="Permalink to “用 screenfetch 和 linux_logo 顯示帶有酷炫 Linux 標誌的基本硬件信息”">​</a></h1><p>想在屏幕上顯示出你的 Linux 發行版的酷炫標誌和基本硬件信息嗎？不用找了，來試試超讚的 screenfetch 和 linux_logo 工具。</p><h3 id="來看看-screenfetch-吧" tabindex="-1">來看看 screenfetch 吧 <a class="header-anchor" href="#來看看-screenfetch-吧" aria-label="Permalink to “來看看 screenfetch 吧”">​</a></h3><p>screenFetch 是一個能夠在截屏中顯示系統/主題信息的命令列腳本。它可以在 Linux，OS X，FreeBSD 以及其它的許多類Unix系統上使用。來自 man 手冊的説明：</p><blockquote><p>這個方便的 Bash 腳本可以用來生成那些漂亮的終端主題信息和用 ASCII 構成的發行版標誌，就像如今你在別人的截屏裏看到的那樣。它會自動檢測你的發行版並顯示 ASCII 版的發行版標誌，並且在右邊顯示一些有價值的信息。</p></blockquote><h4 id="在-linux-上安裝-screenfetch" tabindex="-1">在 Linux 上安裝 screenfetch <a class="header-anchor" href="#在-linux-上安裝-screenfetch" aria-label="Permalink to “在 Linux 上安裝 screenfetch”">​</a></h4>',6)),n("p",null,[e[1]||(e[1]=t("打開終端應用。在基於 Debian 或 Ubuntu 或 Mint 的系統上只需要輸入下列 ",-1)),r(s,{href:"http://www.cyberciti.biz/tips/linux-debian-package-management-cheat-sheet.html"},{default:o(()=>[...e[0]||(e[0]=[t("apt-get 命令",-1)])]),_:1}),e[2]||(e[2]=t("：",-1))]),e[23]||(e[23]=a(`<pre><code>$ sudo apt-get install screenfetch
</code></pre><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/ubuntu-debian-linux-apt-get-install-screenfetch.jpg" alt=""></p><p><em>圖一：用 apt-get 安裝 screenfetch</em></p><h4 id="在-mac-os-x-上安裝-screenfetch" tabindex="-1">在 Mac OS X 上安裝 screenfetch <a class="header-anchor" href="#在-mac-os-x-上安裝-screenfetch" aria-label="Permalink to “在 Mac OS X 上安裝 screenfetch”">​</a></h4><p>輸入下列命令：</p><pre><code>$ brew install screenfetch
</code></pre><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/apple-mac-osx-install-screenfetch.jpg" alt=""></p><p><em>圖二：用 brew 命令安裝 screenfetch</em></p><h4 id="在-freebsd-上安裝-screenfetch" tabindex="-1">在 FreeBSD 上安裝 screenfetch <a class="header-anchor" href="#在-freebsd-上安裝-screenfetch" aria-label="Permalink to “在 FreeBSD 上安裝 screenfetch”">​</a></h4><p>輸入下列 pkg 命令：</p><pre><code>$ sudo pkg install sysutils/screenfetch
</code></pre><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/freebsd-install-pkg-screenfetch.jpg" alt=""></p><p><em>圖三：在 FreeBSD 用 pkg 安裝 screenfetch</em></p><h4 id="在-fedora-上安裝-screenfetch" tabindex="-1">在 Fedora 上安裝 screenfetch <a class="header-anchor" href="#在-fedora-上安裝-screenfetch" aria-label="Permalink to “在 Fedora 上安裝 screenfetch”">​</a></h4><p>輸入下列 dnf 命令：</p><pre><code>$ sudo dnf install screenfetch
</code></pre><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/fedora-dnf-install-screenfetch.jpg" alt=""></p><p><em>圖四：在 Fedora 22 用 dnf 安裝 screenfetch</em></p><h4 id="我該怎麼使用-screefetch-工具" tabindex="-1">我該怎麼使用 screefetch 工具？ <a class="header-anchor" href="#我該怎麼使用-screefetch-工具" aria-label="Permalink to “我該怎麼使用 screefetch 工具？”">​</a></h4><p>只需輸入以下命令：</p><pre><code>$ screenfetch
</code></pre><p>這是不同系統的輸出：</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/fedora-screenfetch.jpg" alt=""></p><p><em>Fedora 上的 Screenfetch</em></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/screenfetch-osx.jpg" alt=""></p><p><em>OS X 上的 Screenfetch</em></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/screenfetch-freebsd.jpg" alt=""></p><p><em>FreeBSD 上的 Screenfetch</em></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/debian-ubutnu-screenfetch-outputs.jpg" alt=""></p><p><em>Debian 上的 Screenfetch</em></p><h4 id="獲取截屏" tabindex="-1">獲取截屏 <a class="header-anchor" href="#獲取截屏" aria-label="Permalink to “獲取截屏”">​</a></h4><p>要獲取截屏並保存成文件，輸入：</p><pre><code>$ screenfetch -s
</code></pre><p>你會看到一個文件 ~/Desktop/screenFetch-*.jpg。獲取截屏並直接上傳到 imgur，輸入：</p><pre><code>$ screenfetch -su imgur
</code></pre><p><strong>輸出示例：</strong></p><pre><code>                 -/+:.          veryv@Viveks-MacBook-Pro
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
</code></pre>`,37)),n("p",null,[e[4]||(e[4]=t("你可以訪問 ",-1)),r(s,{href:"http://imgur.com/HKIUznn"},{default:o(()=>[...e[3]||(e[3]=[t("http://imgur.com/HKIUznn",-1)])]),_:1}),e[5]||(e[5]=t(" 來查看上傳的截屏。",-1))]),e[24]||(e[24]=a(`<h3 id="再來看看-linux-logo" tabindex="-1">再來看看 linux_logo <a class="header-anchor" href="#再來看看-linux-logo" aria-label="Permalink to “再來看看 linux_logo”">​</a></h3><p>linux_logo 程序生成一個彩色的 ANSI 版企鵝圖片，還包含一些來自 /proc 的系統信息。</p><h4 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to “安裝”">​</a></h4><p>只需按照你的 Linux 發行版輸入對應的命令：</p><h4 id="debian-ubutnu-mint" tabindex="-1">Debian/Ubutnu/Mint <a class="header-anchor" href="#debian-ubutnu-mint" aria-label="Permalink to “Debian/Ubutnu/Mint”">​</a></h4><pre><code># apt-get install linux_logo
</code></pre><h4 id="centos-rhel-舊版-fedora" tabindex="-1">CentOS/RHEL/舊版 Fedora <a class="header-anchor" href="#centos-rhel-舊版-fedora" aria-label="Permalink to “CentOS/RHEL/舊版 Fedora”">​</a></h4><pre><code># yum install linux_logo
</code></pre><h4 id="fedora-linux-v22-或更新版本" tabindex="-1">Fedora Linux v22+ 或更新版本 <a class="header-anchor" href="#fedora-linux-v22-或更新版本" aria-label="Permalink to “Fedora Linux v22+ 或更新版本”">​</a></h4><pre><code># dnf install linux_logo
</code></pre><h4 id="運行它" tabindex="-1">運行它 <a class="header-anchor" href="#運行它" aria-label="Permalink to “運行它”">​</a></h4><p>只需輸入下列命令：</p><pre><code>$ linux_logo
</code></pre><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/debian-linux_logo.jpg" alt=""></p><p><em>運行 linux_logo</em></p><h4 id="等等-還有更多" tabindex="-1">等等，還有更多！ <a class="header-anchor" href="#等等-還有更多" aria-label="Permalink to “等等，還有更多！”">​</a></h4><p>你可以用這個命令查看內置的標誌列表：</p><pre><code>$ linux_logo -f -L list
</code></pre><p><strong>輸出示例：</strong></p><pre><code>Available Built-in Logos:
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
</code></pre><p>查看 aix 的標誌，輸入：</p><pre><code>$ linux_logo -f -L aix
</code></pre><p>查看 openbsd 的標誌：</p><pre><code>$ linux_logo -f -L openbsd
</code></pre><p>或者只是隨機看看一些 Linux 標誌：</p><pre><code>$ linux_logo -f -L random_xy
</code></pre>`,26)),n("p",null,[e[7]||(e[7]=t("你",-1)),r(s,{href:"http://www.cyberciti.biz/faq/bash-for-loop/"},{default:o(()=>[...e[6]||(e[6]=[t("可以像下面那樣結合 bash 的循環來顯示不同的標誌",-1)])]),_:1}),e[8]||(e[8]=t("，輸入：",-1))]),e[25]||(e[25]=n("p",null,[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/09/linux-logo-fun.gif",alt:""})],-1)),e[26]||(e[26]=n("p",null,[n("em",null,"動圖1： linux_logo 和 bash 循環，既有趣又能發朋友圈耍酷")],-1)),e[27]||(e[27]=n("h3",{id:"獲取幫助",tabindex:"-1"},[t("獲取幫助 "),n("a",{class:"header-anchor",href:"#獲取幫助","aria-label":"Permalink to “獲取幫助”"},"​")],-1)),e[28]||(e[28]=n("p",null,"輸入下列命令：",-1)),e[29]||(e[29]=n("pre",null,[n("code",null,`$ screefetch -h
$ linux_logo -h
`)],-1)),e[30]||(e[30]=n("p",null,[n("strong",null,"參考")],-1)),n("ul",null,[n("li",null,[r(s,{href:"https://github.com/KittyKatt/screenFetch"},{default:o(()=>[...e[9]||(e[9]=[t("screenFetch 主頁",-1)])]),_:1})]),n("li",null,[r(s,{href:"https://github.com/deater/linux_logo"},{default:o(()=>[...e[10]||(e[10]=[t("linux_logo 主頁",-1)])]),_:1})])]),e[31]||(e[31]=n("hr",null,null,-1)),n("p",null,[e[12]||(e[12]=t("via: ",-1)),r(s,{href:"http://www.cyberciti.biz/hardware/howto-display-linux-logo-in-bash-terminal-using-screenfetch-linux_logo/"},{default:o(()=>[...e[11]||(e[11]=[t("http://www.cyberciti.biz/hardware/howto-display-linux-logo-in-bash-terminal-using-screenfetch-linux_logo/",-1)])]),_:1})]),n("p",null,[e[15]||(e[15]=t("作者：Vivek Gite 譯者：",-1)),r(s,{href:"https://github.com/alim0x"},{default:o(()=>[...e[13]||(e[13]=[t("alim0x",-1)])]),_:1}),e[16]||(e[16]=t(" 校對：",-1)),r(s,{href:"https://github.com/wxy"},{default:o(()=>[...e[14]||(e[14]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[19]||(e[19]=t("本文由 ",-1)),r(s,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[17]||(e[17]=[t("LCTT",-1)])]),_:1}),e[20]||(e[20]=t(" 原創編譯，",-1)),r(s,{href:"https://linux.cn/"},{default:o(()=>[...e[18]||(e[18]=[t("Linux中國",-1)])]),_:1}),e[21]||(e[21]=t(" 榮譽推出",-1))])])}const _=i(d,[["render",u]]);export{y as __pageData,_ as default};
