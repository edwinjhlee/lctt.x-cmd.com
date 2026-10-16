import{_ as t,a0 as o,w as r,s as d,ao as l,I as a,x as n,a1 as p,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"查看 Linux 發行版名稱和版本號的 8 種方法 | LCTT x X-CMD","titleTemplate":false,"description":"查看 Linux 發行版名稱和版本號的 8 種方法 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"查看 Linux 發行版名稱和版本號的 8 種方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"查看 Linux 發行版名稱和版本號的 8 種方法 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180215 Check Linux Distribution Name and Version","title":"查看 Linux 發行版名稱和版本號的 8 種方法","tag":"201804","desc":""},"relativePath":"201804/20180215 Check Linux Distribution Name and Version.md","filePath":"[post].md"}'),u={name:"201804/20180215 Check Linux Distribution Name and Version.md"};function c(h,s,g,b,m,k){const e=o("Link");return r(),d("div",null,[s[28]||(s[28]=l(`<h1 id="查看-linux-發行版名稱和版本號的-8-種方法" tabindex="-1">查看 Linux 發行版名稱和版本號的 8 種方法 <a class="header-anchor" href="#查看-linux-發行版名稱和版本號的-8-種方法" aria-label="Permalink to “查看 Linux 發行版名稱和版本號的 8 種方法”">​</a></h1><p>如果你加入了一家新公司，要為開發團隊安裝所需的軟件並重啓服務，這個時候首先要弄清楚它們運行在什麼發行版以及哪個版本的系統上，你才能正確完成後續的工作。作為系統管理員，充分了解系統信息是首要的任務。</p><p>查看 Linux 發行版名稱和版本號有很多種方法。你可能會問，為什麼要去了解這些基本信息呢？</p><p>因為對於諸如 RHEL、Debian、openSUSE、Arch Linux 這幾種主流發行版來説，它們各自擁有不同的包管理器來管理系統上的軟件包，如果不知道所使用的是哪一個發行版的系統，在軟件包安裝的時候就會無從下手，而且由於大多數發行版都是用 systemd 命令而不是 SysVinit 腳本，在重啓服務的時候也難以執行正確的命令。</p><p>下面來看看可以使用那些基本命令來查看 Linux 發行版名稱和版本號。</p><h3 id="方法總覽" tabindex="-1">方法總覽 <a class="header-anchor" href="#方法總覽" aria-label="Permalink to “方法總覽”">​</a></h3><ul><li><code>lsb_release</code> 命令</li><li><code>/etc/*-release</code> 文件</li><li><code>uname</code> 命令</li><li><code>/proc/version</code> 文件</li><li><code>dmesg</code> 命令</li><li>YUM 或 DNF 命令</li><li>RPM 命令</li><li>APT-GET 命令</li></ul><h3 id="方法-1-lsb-release-命令" tabindex="-1">方法 1： lsb_release 命令 <a class="header-anchor" href="#方法-1-lsb-release-命令" aria-label="Permalink to “方法 1： lsb_release 命令”">​</a></h3><p>LSB（<ruby>Linux 標準庫<rt>Linux Standard Base</rt></ruby>）能夠打印發行版的具體信息，包括髮行版名稱、版本號、代號等。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># lsb_release -a</span></span>
<span class="line"><span>No LSB modules are available.</span></span>
<span class="line"><span>Distributor ID: Ubuntu</span></span>
<span class="line"><span>Description: Ubuntu 16.04.3 LTS</span></span>
<span class="line"><span>Release: 16.04</span></span>
<span class="line"><span>Codename: xenial</span></span></code></pre></div><h3 id="方法-2-etc-release-文件" tabindex="-1">方法 2： /etc/*-release 文件 <a class="header-anchor" href="#方法-2-etc-release-文件" aria-label="Permalink to “方法 2： /etc/*-release 文件”">​</a></h3><p>release 文件通常被視為操作系統的標識。在 <code>/etc</code> 目錄下放置了很多記錄着發行版各種信息的文件，每個發行版都各自有一套這樣記錄着相關信息的文件。下面是一組在 Ubuntu/Debian 系統上顯示出來的文件內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat /etc/issue</span></span>
<span class="line"><span>Ubuntu 16.04.3 LTS \\n \\l</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat /etc/issue.net</span></span>
<span class="line"><span>Ubuntu 16.04.3 LTS</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat /etc/lsb-release</span></span>
<span class="line"><span>DISTRIB_ID=Ubuntu</span></span>
<span class="line"><span>DISTRIB_RELEASE=16.04</span></span>
<span class="line"><span>DISTRIB_CODENAME=xenial</span></span>
<span class="line"><span>DISTRIB_DESCRIPTION=&quot;Ubuntu 16.04.3 LTS&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat /etc/os-release</span></span>
<span class="line"><span>NAME=&quot;Ubuntu&quot;</span></span>
<span class="line"><span>VERSION=&quot;16.04.3 LTS (Xenial Xerus)&quot;</span></span>
<span class="line"><span>ID=ubuntu</span></span>
<span class="line"><span>ID_LIKE=debian</span></span>
<span class="line"><span>PRETTY_NAME=&quot;Ubuntu 16.04.3 LTS&quot;</span></span>
<span class="line"><span>VERSION_ID=&quot;16.04&quot;</span></span>
<span class="line"><span>HOME_URL=&quot;http://www.ubuntu.com/&quot;</span></span>
<span class="line"><span>SUPPORT_URL=&quot;http://help.ubuntu.com/&quot;</span></span>
<span class="line"><span>BUG_REPORT_URL=&quot;http://bugs.launchpad.net/ubuntu/&quot;</span></span>
<span class="line"><span>VERSION_CODENAME=xenial</span></span>
<span class="line"><span>UBUNTU_CODENAME=xenial</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat /etc/debian_version</span></span>
<span class="line"><span>9.3</span></span></code></pre></div><p>下面這一組是在 RHEL/CentOS/Fedora 系統上顯示出來的文件內容。其中 <code>/etc/redhat-release</code> 和 <code>/etc/system-release</code> 文件是指向 <code>/etc/[發行版名稱]-release</code> 文件的一個連接。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat /etc/centos-release</span></span>
<span class="line"><span>CentOS release 6.9 (Final)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat /etc/fedora-release</span></span>
<span class="line"><span>Fedora release 27 (Twenty Seven)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat /etc/os-release</span></span>
<span class="line"><span>NAME=Fedora</span></span>
<span class="line"><span>VERSION=&quot;27 (Twenty Seven)&quot;</span></span>
<span class="line"><span>ID=fedora</span></span>
<span class="line"><span>VERSION_ID=27</span></span>
<span class="line"><span>PRETTY_NAME=&quot;Fedora 27 (Twenty Seven)&quot;</span></span>
<span class="line"><span>ANSI_COLOR=&quot;0;34&quot;</span></span>
<span class="line"><span>CPE_NAME=&quot;cpe:/o:fedoraproject:fedora:27&quot;</span></span>
<span class="line"><span>HOME_URL=&quot;https://fedoraproject.org/&quot;</span></span>
<span class="line"><span>SUPPORT_URL=&quot;https://fedoraproject.org/wiki/Communicating_and_getting_help&quot;</span></span>
<span class="line"><span>BUG_REPORT_URL=&quot;https://bugzilla.redhat.com/&quot;</span></span>
<span class="line"><span>REDHAT_BUGZILLA_PRODUCT=&quot;Fedora&quot;</span></span>
<span class="line"><span>REDHAT_BUGZILLA_PRODUCT_VERSION=27</span></span>
<span class="line"><span>REDHAT_SUPPORT_PRODUCT=&quot;Fedora&quot;</span></span>
<span class="line"><span>REDHAT_SUPPORT_PRODUCT_VERSION=27</span></span>
<span class="line"><span>PRIVACY_POLICY_URL=&quot;https://fedoraproject.org/wiki/Legal:PrivacyPolicy&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat /etc/redhat-release</span></span>
<span class="line"><span>Fedora release 27 (Twenty Seven)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat /etc/system-release</span></span>
<span class="line"><span>Fedora release 27 (Twenty Seven)</span></span></code></pre></div><h3 id="方法-3-uname-命令" tabindex="-1">方法 3： uname 命令 <a class="header-anchor" href="#方法-3-uname-命令" aria-label="Permalink to “方法 3： uname 命令”">​</a></h3><p>uname（unix name 的意思） 是一個打印系統信息的工具，包括內核名稱、版本號、系統詳細信息以及所運行的操作系統等等。</p>`,17)),a("ul",null,[a("li",null,[s[1]||(s[1]=a("strong",null,"建議閲讀：",-1)),s[2]||(s[2]=n()),p(e,{href:"https://www.2daygeek.com/check-find-determine-running-installed-linux-kernel-version/"},{default:i(()=>[...s[0]||(s[0]=[n("6種查看系統 Linux 內核的方法",-1)])]),_:1})])]),s[29]||(s[29]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># uname -a</span></span>
<span class="line"><span>Linux localhost.localdomain 4.12.14-300.fc26.x86_64 #1 SMP Wed Sep 20 16:28:07 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux</span></span></code></pre></div><p>以上運行結果説明使用的操作系統版本是 Fedora 26。</p><h3 id="方法-4-proc-version-文件" tabindex="-1">方法 4： /proc/version 文件 <a class="header-anchor" href="#方法-4-proc-version-文件" aria-label="Permalink to “方法 4： /proc/version 文件”">​</a></h3><p>這個文件記錄了 Linux 內核的版本、用於編譯內核的 gcc 的版本、內核編譯的時間，以及內核編譯者的用户名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat /proc/version</span></span>
<span class="line"><span>Linux version 4.12.14-300.fc26.x86_64 ([email protected]) (gcc version 7.2.1 20170915 (Red Hat 7.2.1-2) (GCC) ) #1 SMP Wed Sep 20 16:28:07 UTC 2017</span></span></code></pre></div><h3 id="方法-5-dmesg-命令" tabindex="-1">方法 5： dmesg 命令 <a class="header-anchor" href="#方法-5-dmesg-命令" aria-label="Permalink to “方法 5： dmesg 命令”">​</a></h3><p>dmesg（<ruby>展示信息<rt>display message</rt></ruby> 或<ruby>驅動程序信息<rt>driver message</rt></ruby>）是大多數類 Unix 操作系統上的一個命令，用於打印內核的消息緩衝區的信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dmesg | grep &quot;Linux&quot;</span></span>
<span class="line"><span>[ 0.000000] Linux version 4.12.14-300.fc26.x86_64 ([email protected]) (gcc version 7.2.1 20170915 (Red Hat 7.2.1-2) (GCC) ) #1 SMP Wed Sep 20 16:28:07 UTC 2017</span></span>
<span class="line"><span>[ 0.001000] SELinux: Initializing.</span></span>
<span class="line"><span>[ 0.001000] SELinux: Starting in permissive mode</span></span>
<span class="line"><span>[ 0.470288] SELinux: Registering netfilter hooks</span></span>
<span class="line"><span>[ 0.616351] Linux agpgart interface v0.103</span></span>
<span class="line"><span>[ 0.630063] usb usb1: Manufacturer: Linux 4.12.14-300.fc26.x86_64 ehci_hcd</span></span>
<span class="line"><span>[ 0.688949] usb usb2: Manufacturer: Linux 4.12.14-300.fc26.x86_64 ohci_hcd</span></span>
<span class="line"><span>[ 2.564554] SELinux: Disabled at runtime.</span></span>
<span class="line"><span>[ 2.564584] SELinux: Unregistering netfilter hooks</span></span></code></pre></div><h3 id="方法-6-yum-dnf-命令" tabindex="-1">方法 6： Yum/Dnf 命令 <a class="header-anchor" href="#方法-6-yum-dnf-命令" aria-label="Permalink to “方法 6： Yum/Dnf 命令”">​</a></h3><p>Yum（<ruby>Yellowdog 更新器修改版<rt>Yellowdog Updater Modified</rt></ruby>）是 Linux 操作系統上的一個包管理工具，而 <code>yum</code> 命令被用於一些基於 RedHat 的 Linux 發行版上安裝、更新、查找、刪除軟件包。</p>`,10)),a("ul",null,[a("li",null,[s[4]||(s[4]=a("strong",null,"建議閲讀：",-1)),s[5]||(s[5]=n()),p(e,{href:"https://www.2daygeek.com/yum-command-examples-manage-packages-rhel-centos-systems/"},{default:i(()=>[...s[3]||(s[3]=[n("在 RHEL/CentOS 系統上使用 yum 命令管理軟件包",-1)])]),_:1})])]),s[30]||(s[30]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum info nano</span></span>
<span class="line"><span>Loaded plugins: fastestmirror, ovl</span></span>
<span class="line"><span>Loading mirror speeds from cached hostfile</span></span>
<span class="line"><span> * base: centos.zswap.net</span></span>
<span class="line"><span> * extras: mirror2.evolution-host.com</span></span>
<span class="line"><span> * updates: centos.zswap.net</span></span>
<span class="line"><span>Available Packages</span></span>
<span class="line"><span>Name : nano</span></span>
<span class="line"><span>Arch : x86_64</span></span>
<span class="line"><span>Version : 2.3.1</span></span>
<span class="line"><span>Release : 10.el7</span></span>
<span class="line"><span>Size : 440 k</span></span>
<span class="line"><span>Repo : base/7/x86_64</span></span>
<span class="line"><span>Summary : A small text editor</span></span>
<span class="line"><span>URL : http://www.nano-editor.org</span></span>
<span class="line"><span>License : GPLv3+</span></span>
<span class="line"><span>Description : GNU nano is a small and friendly text editor.</span></span></code></pre></div><p>下面的 <code>yum repolist</code> 命令執行後顯示了 yum 的基礎源倉庫、額外源倉庫、更新源倉庫都來自 CentOS 7 倉庫。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum repolist</span></span>
<span class="line"><span>Loaded plugins: fastestmirror, ovl</span></span>
<span class="line"><span>Loading mirror speeds from cached hostfile</span></span>
<span class="line"><span> * base: centos.zswap.net</span></span>
<span class="line"><span> * extras: mirror2.evolution-host.com</span></span>
<span class="line"><span> * updates: centos.zswap.net</span></span>
<span class="line"><span>repo id repo name status</span></span>
<span class="line"><span>base/7/x86_64 CentOS-7 - Base 9591</span></span>
<span class="line"><span>extras/7/x86_64 CentOS-7 - Extras 388</span></span>
<span class="line"><span>updates/7/x86_64 CentOS-7 - Updates 1929</span></span>
<span class="line"><span>repolist: 11908</span></span></code></pre></div><p>使用 <code>dnf</code> 命令也同樣可以查看發行版名稱和版本號。</p>`,4)),a("ul",null,[a("li",null,[s[7]||(s[7]=a("strong",null,"建議閲讀：",-1)),s[8]||(s[8]=n()),p(e,{href:"https://www.2daygeek.com/dnf-command-examples-manage-packages-fedora-system/"},{default:i(()=>[...s[6]||(s[6]=[n("在 Fedora 系統上使用 DNF（YUM 的一個分支）命令管理軟件包",-1)])]),_:1})])]),s[31]||(s[31]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf info nano</span></span>
<span class="line"><span>Last metadata expiration check: 0:01:25 ago on Thu Feb 15 01:59:31 2018.</span></span>
<span class="line"><span>Installed Packages</span></span>
<span class="line"><span>Name : nano</span></span>
<span class="line"><span>Version : 2.8.7</span></span>
<span class="line"><span>Release : 1.fc27</span></span>
<span class="line"><span>Arch : x86_64</span></span>
<span class="line"><span>Size : 2.1 M</span></span>
<span class="line"><span>Source : nano-2.8.7-1.fc27.src.rpm</span></span>
<span class="line"><span>Repo : @System</span></span>
<span class="line"><span>From repo : fedora</span></span>
<span class="line"><span>Summary : A small text editor</span></span>
<span class="line"><span>URL : https://www.nano-editor.org</span></span>
<span class="line"><span>License : GPLv3+</span></span>
<span class="line"><span>Description : GNU nano is a small and friendly text editor.</span></span></code></pre></div><h3 id="方法-7-rpm-命令" tabindex="-1">方法 7： RPM 命令 <a class="header-anchor" href="#方法-7-rpm-命令" aria-label="Permalink to “方法 7： RPM 命令”">​</a></h3><p>RPM（<ruby>紅帽包管理器<rt>RedHat Package Manager</rt></ruby>）是在 CentOS、Oracle Linux、Fedora 這些基於 RedHat 的操作系統上的一個強大的命令列包管理工具，同樣也可以幫助我們查看系統的版本信息。</p>`,3)),a("ul",null,[a("li",null,[s[10]||(s[10]=a("strong",null,"建議閲讀：",-1)),s[11]||(s[11]=n()),p(e,{href:"https://www.2daygeek.com/rpm-command-examples/"},{default:i(()=>[...s[9]||(s[9]=[n("在基於 RHEL 的系統上使用 RPM 命令管理軟件包",-1)])]),_:1})])]),s[32]||(s[32]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rpm -q nano</span></span>
<span class="line"><span>nano-2.8.7-1.fc27.x86_64</span></span></code></pre></div><h3 id="方法-8-apt-get-命令" tabindex="-1">方法 8： APT-GET 命令 <a class="header-anchor" href="#方法-8-apt-get-命令" aria-label="Permalink to “方法 8： APT-GET 命令”">​</a></h3><p>Apt-Get（<ruby>高級打包工具<rt>Advanced Packaging Tool</rt></ruby>）是一個強大的命令列工具，可以自動下載安裝新軟件包、更新已有的軟件包、更新軟件包列表索引，甚至更新整個 Debian 系統。</p>`,3)),a("ul",null,[a("li",null,[s[13]||(s[13]=a("strong",null,"建議閲讀：",-1)),s[14]||(s[14]=n()),p(e,{href:"https://www.2daygeek.com/apt-get-apt-cache-command-examples-manage-packages-debian-ubuntu-systems/"},{default:i(()=>[...s[12]||(s[12]=[n("在基於 Debian 的系統上使用 Apt-Get 和 Apt-Cache 命令管理軟件包",-1)])]),_:1})])]),s[33]||(s[33]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># apt-cache policy nano</span></span>
<span class="line"><span>nano:</span></span>
<span class="line"><span> Installed: 2.5.3-2ubuntu2</span></span>
<span class="line"><span> Candidate: 2.5.3-2ubuntu2</span></span>
<span class="line"><span> Version table:</span></span>
<span class="line"><span> * 2.5.3-2ubuntu2 500</span></span>
<span class="line"><span> 500 http://nova.clouds.archive.ubuntu.com/ubuntu xenial-updates/main amd64 Packages</span></span>
<span class="line"><span> 100 /var/lib/dpkg/status</span></span>
<span class="line"><span> 2.5.3-2 500</span></span>
<span class="line"><span> 500 http://nova.clouds.archive.ubuntu.com/ubuntu xenial/main amd64 Packages</span></span></code></pre></div><hr>`,2)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),p(e,{href:"https://www.2daygeek.com/check-find-linux-distribution-name-and-version/"},{default:i(()=>[...s[15]||(s[15]=[n("https://www.2daygeek.com/check-find-linux-distribution-name-and-version/",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("作者：",-1)),p(e,{href:"https://www.2daygeek.com/author/magesh/"},{default:i(()=>[...s[17]||(s[17]=[n("Magesh Maruthamuthu",-1)])]),_:1}),s[21]||(s[21]=n(" 譯者：",-1)),p(e,{href:"https://github.com/HankChow"},{default:i(()=>[...s[18]||(s[18]=[n("HankChow",-1)])]),_:1}),s[22]||(s[22]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[19]||(s[19]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[25]||(s[25]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[23]||(s[23]=[n("LCTT",-1)])]),_:1}),s[26]||(s[26]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[24]||(s[24]=[n("Linux中國",-1)])]),_:1}),s[27]||(s[27]=n(" 榮譽推出",-1))])])}const _=t(u,[["render",c]]);export{T as __pageData,_ as default};
