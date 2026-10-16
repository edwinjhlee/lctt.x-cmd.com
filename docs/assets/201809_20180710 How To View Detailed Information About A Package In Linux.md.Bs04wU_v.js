import{_ as t,a0 as o,w as r,s as d,ao as l,I as a,a1 as e,A as i,x as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"如何在 Linux 上检查一个软件包的详细信息 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 上检查一个软件包的详细信息 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 上检查一个软件包的详细信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 上检查一个软件包的详细信息 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180710 How To View Detailed Information About A Package In Linux","title":"如何在 Linux 上检查一个软件包的详细信息","tag":"201809","desc":""},"relativePath":"201809/20180710 How To View Detailed Information About A Package In Linux.md","filePath":"[post].md"}'),c={name:"201809/20180710 How To View Detailed Information About A Package In Linux.md"};function u(g,n,h,m,b,f){const p=o("Link");return r(),d("div",null,[n[55]||(n[55]=l('<h1 id="如何在-linux-上检查一个软件包的详细信息" tabindex="-1">如何在 Linux 上检查一个软件包的详细信息 <a class="header-anchor" href="#如何在-linux-上检查一个软件包的详细信息" aria-label="Permalink to “如何在 Linux 上检查一个软件包的详细信息”">​</a></h1><p>我们可以就这个已经被广泛讨论的话题写出大量的文章，大多数情况下，因为各种各样的原因，我们都愿意让<ruby>包管理器<rt>package manager</rt></ruby>来帮我们做这些事情。</p><p>每个 Linux 发行版都有自己的包管理器，并且每个都有各自有不同的特性，这些特性包括允许用户执行安装新软件包，删除无用的软件包，更新现存的软件包，搜索某些具体的软件包，以及更新整个系统到其最新的状态之类的操作。</p><p>习惯于命令行的用户大多数时间都会使用基于命令行方式的包管理器。对于 Linux 而言，这些基于命令行的包管理器有 <code>yum</code>、<code>dnf</code>、<code>rpm</code>、<code>apt</code>、<code>apt-get</code>、<code>dpkg</code>、<code>pacman</code> 和 <code>zypper</code>。</p><p><strong>推荐阅读</strong></p>',5)),a("ul",null,[a("li",null,[e(p,{href:"https://www.2daygeek.com/list-of-command-line-package-manager-for-linux/"},{default:i(()=>[...n[0]||(n[0]=[s("Linux 命令行包管理器列表及其用法",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.2daygeek.com/list-of-graphical-frontend-tool-for-linux-package-manager/"},{default:i(()=>[...n[1]||(n[1]=[s("一个图形化的 Linux 包管理器前端工具",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.2daygeek.com/how-to-search-if-a-package-is-available-on-your-linux-distribution-or-not/"},{default:i(()=>[...n[2]||(n[2]=[s("如何搜索知道一个软件包是否存在于你的 Linux 发行版",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.2daygeek.com/how-to-add-enable-disable-a-repository-dnf-yum-config-manager-on-linux/"},{default:i(()=>[...n[3]||(n[3]=[s("如何使用 dnf/yum 配置包管理器在 Linux 上来添加、启用和禁用软件仓库",-1)])]),_:1})])]),n[56]||(n[56]=a("p",null,"作为一个系统管理员你应该清楚地知道：安装包来自何方，具体来自哪个软件仓库，包的具体版本，包的大小，版本，包的源代码 URL，包的许可证信息，等等。",-1)),n[57]||(n[57]=a("p",null,"这篇短文将用尽可能简单的方式帮你从随包自带的总结和描述中了解该包的用法。按你所使用的 Linux 发行版的不同，运行下面相应的命令，你能得到你所使用的发行版下的包的详细信息。",-1)),n[58]||(n[58]=a("h3",{id:"yum-命令-在-rhel-和-centos-系统上获得包的信息",tabindex:"-1"},[s("YUM 命令：在 RHEL 和 CentOS 系统上获得包的信息 "),a("a",{class:"header-anchor",href:"#yum-命令-在-rhel-和-centos-系统上获得包的信息","aria-label":"Permalink to “YUM 命令：在 RHEL 和 CentOS 系统上获得包的信息”"},"​")],-1)),a("p",null,[e(p,{href:"https://www.2daygeek.com/yum-command-examples-manage-packages-rhel-centos-systems/"},{default:i(()=>[...n[4]||(n[4]=[s("YUM",-1)])]),_:1}),n[5]||(n[5]=s(" 英文直译是“",-1)),n[6]||(n[6]=a("ruby",null,[s("黄狗更新器--修改版"),a("rt",null,"Yellowdog Updater, Modified")],-1)),n[7]||(n[7]=s("”，它是一个开源的基于命令行的包管理器前端实用工具。它被广泛应用在基于 RPM 的系统上，例如：RHEL 和 CentOS。",-1))]),n[59]||(n[59]=l(`<p>Yum 是用于在官方发行版仓库以及其他第三方发行版仓库下获取、安装、删除、查询 RPM 包的主要工具。</p><p>（LCTT 译注：用 <code>yum info</code> 获取 python 包的信息）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum info python</span></span>
<span class="line"><span>Loaded plugins: fastestmirror, security</span></span>
<span class="line"><span>Loading mirror speeds from cached hostfile</span></span>
<span class="line"><span> * epel: epel.mirror.constant.com</span></span>
<span class="line"><span>Installed Packages</span></span>
<span class="line"><span>Name        : python</span></span>
<span class="line"><span>Arch        : x86_64</span></span>
<span class="line"><span>Version     : 2.6.6</span></span>
<span class="line"><span>Release     : 66.el6_8</span></span>
<span class="line"><span>Size        : 78 k</span></span>
<span class="line"><span>Repo        : installed</span></span>
<span class="line"><span>From repo   : updates</span></span>
<span class="line"><span>Summary     : An interpreted, interactive, object-oriented programming language</span></span>
<span class="line"><span>URL         : http://www.python.org/</span></span>
<span class="line"><span>License     : Python</span></span>
<span class="line"><span>Description : Python is an interpreted, interactive, object-oriented programming</span></span>
<span class="line"><span>            : language often compared to Tcl, Perl, Scheme or Java. Python includes</span></span>
<span class="line"><span>            : modules, classes, exceptions, very high level dynamic data types and</span></span>
<span class="line"><span>            : dynamic typing. Python supports interfaces to many system calls and</span></span>
<span class="line"><span>            : libraries, as well as to various windowing systems (X11, Motif, Tk,</span></span>
<span class="line"><span>            : Mac and MFC).</span></span>
<span class="line"><span>            :</span></span>
<span class="line"><span>            : Programmers can write new built-in modules for Python in C or C++.</span></span>
<span class="line"><span>            : Python can be used as an extension language for applications that need</span></span>
<span class="line"><span>            : a programmable interface.</span></span>
<span class="line"><span>            :</span></span>
<span class="line"><span>            : Note that documentation for Python is provided in the python-docs</span></span>
<span class="line"><span>            : package.</span></span>
<span class="line"><span>            :</span></span>
<span class="line"><span>            : This package provides the &quot;python&quot; executable; most of the actual</span></span>
<span class="line"><span>            : implementation is within the &quot;python-libs&quot; package.</span></span></code></pre></div><h3 id="yumdb-命令-查看-rhel-和-centos-系统上的包信息" tabindex="-1">YUMDB 命令：查看 RHEL 和 CentOS 系统上的包信息 <a class="header-anchor" href="#yumdb-命令-查看-rhel-和-centos-系统上的包信息" aria-label="Permalink to “YUMDB 命令：查看 RHEL 和 CentOS 系统上的包信息”">​</a></h3><p><code>yumdb info</code> 这个命令提供与 <code>yum info</code> 相类似的的信息，不过它还额外提供了诸如包校验值、包类型、用户信息（由何人安装）。从 yum 3.2.26 版本后，<code>yum</code> 开始在 rpm 数据库外储存额外的信息了（此处如显示 <code>user</code> 表明该包由用户安装，而 <code>dep</code> 说明该包是被作为被依赖的包而被安装的）。</p><p>（LCTT 译注：用 <code>yumdb info</code> 来获取 python 包的信息）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yumdb info python</span></span>
<span class="line"><span>Loaded plugins: fastestmirror</span></span>
<span class="line"><span>python-2.6.6-66.el6_8.x86_64</span></span>
<span class="line"><span>     changed_by = 4294967295</span></span>
<span class="line"><span>     checksum_data = 53c75a1756e5b4f6564c5229a37948c9b4561e0bf58076bd7dab7aff85a417f2</span></span>
<span class="line"><span>     checksum_type = sha256</span></span>
<span class="line"><span>     command_line = update -y</span></span>
<span class="line"><span>     from_repo = updates</span></span>
<span class="line"><span>     from_repo_revision = 1488370672</span></span>
<span class="line"><span>     from_repo_timestamp = 1488371100</span></span>
<span class="line"><span>     installed_by = 4294967295</span></span>
<span class="line"><span>     reason = dep</span></span>
<span class="line"><span>     releasever = 6</span></span></code></pre></div><h3 id="rpm-命令-在-rhel-centos-fedora-系统上查看包的信息" tabindex="-1">RPM 命令：在 RHEL/CentOS/Fedora 系统上查看包的信息 <a class="header-anchor" href="#rpm-命令-在-rhel-centos-fedora-系统上查看包的信息" aria-label="Permalink to “RPM 命令：在 RHEL/CentOS/Fedora 系统上查看包的信息”">​</a></h3>`,8)),a("p",null,[e(p,{href:"https://www.2daygeek.com/rpm-command-examples/"},{default:i(()=>[...n[8]||(n[8]=[s("RPM",-1)])]),_:1}),n[9]||(n[9]=s(" 英文直译为“",-1)),n[10]||(n[10]=a("ruby",null,[s("红帽包管理器"),a("rt",null,"Red Hat Package Manager")],-1)),n[11]||(n[11]=s("”，这是一个在 RedHat 以及其变种发行版（如RHEL、CentOS、Fedora、openSUSE、Megeia）下的功能强大的命令行包管理工具。它能让你轻松的安装、升级、删除、查询以及校验你的系统或服务器上的软件。RPM 文件以 ",-1)),n[12]||(n[12]=a("code",null,".rpm",-1)),n[13]||(n[13]=s(" 结尾。RPM 包由它所依赖的软件库以及其他依赖构成，它不会与系统上已经安装的包冲突。",-1))]),n[60]||(n[60]=l(`<p>（LCTT 译注：用 <code>rpm -qi</code> 查询 nano 包的具体信息）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rpm -qi nano</span></span>
<span class="line"><span>Name        : nano                         Relocations: (not relocatable)</span></span>
<span class="line"><span>Version     : 2.0.9                             Vendor: CentOS</span></span>
<span class="line"><span>Release     : 7.el6                         Build Date: Fri 12 Nov 2010 02:18:36 AM EST</span></span>
<span class="line"><span>Install Date: Fri 03 Mar 2017 08:57:47 AM EST      Build Host: c5b2.bsys.dev.centos.org</span></span>
<span class="line"><span>Group       : Applications/Editors          Source RPM: nano-2.0.9-7.el6.src.rpm</span></span>
<span class="line"><span>Size        : 1588347                          License: GPLv3+</span></span>
<span class="line"><span>Signature   : RSA/8, Sun 03 Jul 2011 12:46:50 AM EDT, Key ID 0946fca2c105b9de</span></span>
<span class="line"><span>Packager    : CentOS BuildSystem </span></span>
<span class="line"><span>URL         : http://www.nano-editor.org</span></span>
<span class="line"><span>Summary     : A small text editor</span></span>
<span class="line"><span>Description :</span></span>
<span class="line"><span>GNU nano is a small and friendly text editor.</span></span></code></pre></div><h3 id="dnf-命令-在-fedora-系统上查看包信息" tabindex="-1">DNF 命令：在 Fedora 系统上查看包信息 <a class="header-anchor" href="#dnf-命令-在-fedora-系统上查看包信息" aria-label="Permalink to “DNF 命令：在 Fedora 系统上查看包信息”">​</a></h3>`,3)),a("p",null,[e(p,{href:"https://www.2daygeek.com/dnf-command-examples-manage-packages-fedora-system/"},{default:i(()=>[...n[14]||(n[14]=[s("DNF",-1)])]),_:1}),n[15]||(n[15]=s(" 指“",-1)),n[16]||(n[16]=a("ruby",null,[s("时髦版的 Yum"),a("rt",null,"Dandified yum")],-1)),n[17]||(n[17]=s("”，我们也可以认为 DNF 是下一代的 yum 包管理器（Yum 的一个分支），它在后台使用了 hawkey/libsolv 库。Aleš Kozumplík 在Fedora 18 上开始开发 DNF，在 Fedora 22 上正式最后发布。 ",-1)),n[18]||(n[18]=a("code",null,"dnf",-1)),n[19]||(n[19]=s(" 命令用来在 Fedora 22 及以后的系统上安装、更新、搜索以及删除包。它能自动的解决包安装过程中的包依赖问题。",-1))]),n[61]||(n[61]=l(`<p>（LCTT 译注： 用 <code>dnf info</code> 查看 tilix 包信息）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf info tilix</span></span>
<span class="line"><span>Last metadata expiration check: 27 days, 10:00:23 ago on Wed 04 Oct 2017 06:43:27 AM IST.</span></span>
<span class="line"><span>Installed Packages</span></span>
<span class="line"><span>Name         : tilix</span></span>
<span class="line"><span>Version      : 1.6.4</span></span>
<span class="line"><span>Release      : 1.fc26</span></span>
<span class="line"><span>Arch         : x86_64</span></span>
<span class="line"><span>Size         : 3.6 M</span></span>
<span class="line"><span>Source       : tilix-1.6.4-1.fc26.src.rpm</span></span>
<span class="line"><span>Repo         : @System</span></span>
<span class="line"><span>From repo    : @commandline</span></span>
<span class="line"><span>Summary      : Tiling terminal emulator</span></span>
<span class="line"><span>URL          : https://github.com/gnunn1/tilix</span></span>
<span class="line"><span>License      : MPLv2.0 and GPLv3+ and CC-BY-SA</span></span>
<span class="line"><span>Description  : Tilix is a tiling terminal emulator with the following features:</span></span>
<span class="line"><span>             : </span></span>
<span class="line"><span>             :  - Layout terminals in any fashion by splitting them horizontally or vertically</span></span>
<span class="line"><span>             :  - Terminals can be re-arranged using drag and drop both within and between</span></span>
<span class="line"><span>             :    windows</span></span>
<span class="line"><span>             :  - Terminals can be detached into a new window via drag and drop</span></span>
<span class="line"><span>             :  - Input can be synchronized between terminals so commands typed in one</span></span>
<span class="line"><span>             :    terminal are replicated to the others</span></span>
<span class="line"><span>             :  - The grouping of terminals can be saved and loaded from disk</span></span>
<span class="line"><span>             :  - Terminals support custom titles</span></span>
<span class="line"><span>             :  - Color schemes are stored in files and custom color schemes can be created by</span></span>
<span class="line"><span>             :    simply creating a new file</span></span>
<span class="line"><span>             :  - Transparent background</span></span>
<span class="line"><span>             :  - Supports notifications when processes are completed out of view</span></span>
<span class="line"><span>             : </span></span>
<span class="line"><span>             : The application was written using GTK 3 and an effort was made to conform to</span></span>
<span class="line"><span>             : GNOME Human Interface Guidelines (HIG).</span></span></code></pre></div><h3 id="zypper-命令-在-opensuse-系统上查看包信息" tabindex="-1">Zypper 命令：在 openSUSE 系统上查看包信息 <a class="header-anchor" href="#zypper-命令-在-opensuse-系统上查看包信息" aria-label="Permalink to “Zypper 命令：在 openSUSE 系统上查看包信息”">​</a></h3>`,3)),a("p",null,[e(p,{href:"https://www.2daygeek.com/zypper-command-examples-manage-packages-opensuse-system/"},{default:i(()=>[...n[20]||(n[20]=[s("zypper",-1)])]),_:1}),n[21]||(n[21]=s(" 是一个使用 libzypp 库的命令行包管理器。",-1)),n[22]||(n[22]=a("code",null,"zypper",-1)),n[23]||(n[23]=s(" 提供诸如软件仓库访问，安装依赖解决，软件包安装等等功能。",-1))]),n[62]||(n[62]=l(`<p>（LCTT 译注： 用 <code>zypper info</code> 查询 nano 包的信息）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ zypper info nano</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Loading repository data...</span></span>
<span class="line"><span>Reading installed packages...</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Information for package nano:</span></span>
<span class="line"><span>-----------------------------</span></span>
<span class="line"><span>Repository     : Main Repository (OSS)              </span></span>
<span class="line"><span>Name           : nano                               </span></span>
<span class="line"><span>Version        : 2.4.2-5.3                          </span></span>
<span class="line"><span>Arch           : x86_64                             </span></span>
<span class="line"><span>Vendor         : openSUSE                           </span></span>
<span class="line"><span>Installed Size : 1017.8 KiB                         </span></span>
<span class="line"><span>Installed      : No                                 </span></span>
<span class="line"><span>Status         : not installed                      </span></span>
<span class="line"><span>Source package : nano-2.4.2-5.3.src                 </span></span>
<span class="line"><span>Summary        : Pico editor clone with enhancements</span></span>
<span class="line"><span>Description    :                                    </span></span>
<span class="line"><span>    GNU nano is a small and friendly text editor. It aims to emulate</span></span>
<span class="line"><span>    the Pico text editor while also offering a few enhancements.</span></span></code></pre></div><h3 id="pacman-命令-在-archlinux-及-manjaro-系统上查看包信息" tabindex="-1">Pacman 命令：在 ArchLinux 及 Manjaro 系统上查看包信息 <a class="header-anchor" href="#pacman-命令-在-archlinux-及-manjaro-系统上查看包信息" aria-label="Permalink to “Pacman 命令：在 ArchLinux 及 Manjaro 系统上查看包信息”">​</a></h3>`,3)),a("p",null,[e(p,{href:"https://www.2daygeek.com/pacman-command-examples-manage-packages-arch-linux-system/"},{default:i(()=>[...n[24]||(n[24]=[s("Pacman",-1)])]),_:1}),n[25]||(n[25]=s(" 意即",-1)),n[26]||(n[26]=a("ruby",null,[s("包管理器"),a("rt",null,"package manager")],-1)),n[27]||(n[27]=s("实用工具。",-1)),n[28]||(n[28]=a("code",null,"pacman",-1)),n[29]||(n[29]=s(" 是一个用于安装、构建、删除、管理 Arch Linux 上包的命令行工具。它后端使用 libalpm（Arch Linux package Manager（ALPM）库）来完成所有功能。",-1))]),n[63]||(n[63]=l(`<p>（LCTT 译注： 用 <code>pacman -Qi</code> 来查询 bash 包信息）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pacman -Qi bash</span></span>
<span class="line"><span>Name            : bash</span></span>
<span class="line"><span>Version         : 4.4.012-2</span></span>
<span class="line"><span>Description     : The GNU Bourne Again shell</span></span>
<span class="line"><span>Architecture    : x86_64</span></span>
<span class="line"><span>URL             : http://www.gnu.org/software/bash/bash.html</span></span>
<span class="line"><span>Licenses        : GPL</span></span>
<span class="line"><span>Groups          : base</span></span>
<span class="line"><span>Provides        : sh</span></span>
<span class="line"><span>Depends On      : readline&gt;=7.0  glibc  ncurses</span></span>
<span class="line"><span>Optional Deps   : bash-completion: for tab completion</span></span>
<span class="line"><span>Required By     : autoconf  automake  bison  bzip2  ca-certificates-utils  db</span></span>
<span class="line"><span>                  dhcpcd  diffutils  e2fsprogs  fakeroot  figlet  findutils</span></span>
<span class="line"><span>                  flex  freetype2  gawk  gdbm  gettext  gmp  grub  gzip  icu</span></span>
<span class="line"><span>                  iptables  keyutils  libgpg-error  libksba  libpcap  libpng</span></span>
<span class="line"><span>                  libtool  lvm2  m4  man-db  mkinitcpio  nano  neofetch  nspr</span></span>
<span class="line"><span>                  nss  openresolv  os-prober  pacman  pcre  pcre2  shadow</span></span>
<span class="line"><span>                  systemd  texinfo  vte-common  which  xdg-user-dirs  xdg-utils</span></span>
<span class="line"><span>                  xfsprogs  xorg-mkfontdir  xorg-xpr  xz</span></span>
<span class="line"><span>Optional For    : None</span></span>
<span class="line"><span>Conflicts With  : None</span></span>
<span class="line"><span>Replaces        : None</span></span>
<span class="line"><span>Installed Size  : 7.13 MiB</span></span>
<span class="line"><span>Packager        : Jan Alexander Steffens (heftig) </span></span>
<span class="line"><span>Build Date      : Tue 14 Feb 2017 01:16:51 PM UTC</span></span>
<span class="line"><span>Install Date    : Thu 24 Aug 2017 06:08:12 AM UTC</span></span>
<span class="line"><span>Install Reason  : Explicitly installed</span></span>
<span class="line"><span>Install Script  : No</span></span>
<span class="line"><span>Validated By    : Signature</span></span></code></pre></div><h3 id="apt-cache-命令-在-debian-ubuntu-mint-系统上查看包信息" tabindex="-1">apt-cache 命令：在 Debian/Ubuntu/Mint 系统上查看包信息 <a class="header-anchor" href="#apt-cache-命令-在-debian-ubuntu-mint-系统上查看包信息" aria-label="Permalink to “apt-cache 命令：在 Debian/Ubuntu/Mint 系统上查看包信息”">​</a></h3>`,3)),a("p",null,[e(p,{href:"https://www.2daygeek.com/apt-get-apt-cache-command-examples-manage-packages-debian-ubuntu-systems/"},{default:i(()=>[...n[30]||(n[30]=[s("apt-cache",-1)])]),_:1}),n[31]||(n[31]=s(" 命令能显示 apt 内部数据库中的大量信息。这些信息是从 ",-1)),n[32]||(n[32]=a("code",null,"sources.list",-1)),n[33]||(n[33]=s(" 中的不同的软件源中搜集而来，因此从某种意义上这些信息也可以被认为是某种缓存。这些信息搜集工作是在运行 ",-1)),n[34]||(n[34]=a("code",null,"apt update",-1)),n[35]||(n[35]=s(" 命令时执行的。",-1))]),n[64]||(n[64]=l(`<p>（LCTT 译注：用管理员权限查询 apache2 包的信息）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt-cache show apache2</span></span>
<span class="line"><span>Package: apache2</span></span>
<span class="line"><span>Priority: optional</span></span>
<span class="line"><span>Section: web</span></span>
<span class="line"><span>Installed-Size: 473</span></span>
<span class="line"><span>Maintainer: Ubuntu Developers </span></span>
<span class="line"><span>Original-Maintainer: Debian Apache Maintainers </span></span>
<span class="line"><span>Architecture: amd64</span></span>
<span class="line"><span>Version: 2.4.12-2ubuntu2</span></span>
<span class="line"><span>Replaces: apache2.2-common</span></span>
<span class="line"><span>Provides: httpd, httpd-cgi</span></span>
<span class="line"><span>Depends: lsb-base, procps, perl, mime-support, apache2-bin (= 2.4.12-2ubuntu2), apache2-utils (&gt;= 2.4), apache2-data (= 2.4.12-2ubuntu2)</span></span>
<span class="line"><span>Pre-Depends: dpkg (&gt;= 1.17.14)</span></span>
<span class="line"><span>Recommends: ssl-cert</span></span>
<span class="line"><span>Suggests: www-browser, apache2-doc, apache2-suexec-pristine | apache2-suexec-custom, ufw</span></span>
<span class="line"><span>Conflicts: apache2.2-common (&lt;&lt; 2.3~)</span></span>
<span class="line"><span>Filename: pool/main/a/apache2/apache2_2.4.12-2ubuntu2_amd64.deb</span></span>
<span class="line"><span>Size: 91348</span></span>
<span class="line"><span>MD5sum: ab0ee0b0d1c6b3d19bd87aa2a9537125</span></span>
<span class="line"><span>SHA1: 350c9a1a954906088ed032aebb77de3d5bb24004</span></span>
<span class="line"><span>SHA256: 03f515f7ebc3b67b050b06e82ebca34b5e83e34a528868498fce020bf1dbbe34</span></span>
<span class="line"><span>Description-en: Apache HTTP Server</span></span>
<span class="line"><span> The Apache HTTP Server Project&#39;s goal is to build a secure, efficient and</span></span>
<span class="line"><span> extensible HTTP server as standards-compliant open source software. The</span></span>
<span class="line"><span> result has long been the number one web server on the Internet.</span></span>
<span class="line"><span> .</span></span>
<span class="line"><span> Installing this package results in a full installation, including the</span></span>
<span class="line"><span> configuration files, init scripts and support scripts.</span></span>
<span class="line"><span>Description-md5: d02426bc360345e5acd45367716dc35c</span></span>
<span class="line"><span>Homepage: http://httpd.apache.org/</span></span>
<span class="line"><span>Bugs: https://bugs.launchpad.net/ubuntu/+filebug</span></span>
<span class="line"><span>Origin: Ubuntu</span></span>
<span class="line"><span>Supported: 9m</span></span>
<span class="line"><span>Task: lamp-server, mythbuntu-frontend, mythbuntu-desktop, mythbuntu-backend-slave, mythbuntu-backend-master, mythbuntu-backend-master</span></span></code></pre></div><h3 id="apt-命令-查看-debian-ubuntu-mint-系统上的包信息" tabindex="-1">APT 命令：查看 Debian/Ubuntu/Mint 系统上的包信息 <a class="header-anchor" href="#apt-命令-查看-debian-ubuntu-mint-系统上的包信息" aria-label="Permalink to “APT 命令：查看 Debian/Ubuntu/Mint 系统上的包信息”">​</a></h3>`,3)),a("p",null,[e(p,{href:"https://www.2daygeek.com/apt-command-examples-manage-packages-debian-ubuntu-systems/"},{default:i(()=>[...n[36]||(n[36]=[s("APT",-1)])]),_:1}),n[37]||(n[37]=l(" 意为<ruby>高级打包工具<rt>Advanced Packaging Tool</rt></ruby>，就像 DNF 将如何替代 YUM 一样，APT 是 apt-get 的替代物。它功能丰富的命令行工具包括了如下所有命令的功能如 <code>apt-cache</code>、<code>apt-search</code>、<code>dpkg</code>、<code>apt-cdrom</code>、<code>apt-config</code>、<code>apt-key</code> 等等，我们可以方便的通过 <code>apt</code> 来安装 <code>.dpkg</code> 包，但是我们却不能通过 <code>apt-get</code> 来完成这一点，还有一些其他的类似的功能也不能用 <code>apt-get</code> 来完成，所以 <code>apt-get</code> 因为没有解决上述功能缺乏的原因而被 <code>apt</code> 所取代。",27))]),n[65]||(n[65]=l(`<p>（LCTT 译注： 用 <code>apt show</code> 查看 nano 包信息）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ apt show nano</span></span>
<span class="line"><span>Package: nano</span></span>
<span class="line"><span>Version: 2.8.6-3</span></span>
<span class="line"><span>Priority: standard</span></span>
<span class="line"><span>Section: editors</span></span>
<span class="line"><span>Origin: Ubuntu</span></span>
<span class="line"><span>Maintainer: Ubuntu Developers </span></span>
<span class="line"><span>Original-Maintainer: Jordi Mallach </span></span>
<span class="line"><span>Bugs: https://bugs.launchpad.net/ubuntu/+filebug</span></span>
<span class="line"><span>Installed-Size: 766 kB</span></span>
<span class="line"><span>Depends: libc6 (&gt;= 2.14), libncursesw5 (&gt;= 6), libtinfo5 (&gt;= 6)</span></span>
<span class="line"><span>Suggests: spell</span></span>
<span class="line"><span>Conflicts: pico</span></span>
<span class="line"><span>Breaks: nano-tiny (&lt;&lt; 2.8.6-2)</span></span>
<span class="line"><span>Replaces: nano-tiny (&lt;&lt; 2.8.6-2), pico</span></span>
<span class="line"><span>Homepage: https://www.nano-editor.org/</span></span>
<span class="line"><span>Task: standard, ubuntu-touch-core, ubuntu-touch</span></span>
<span class="line"><span>Supported: 9m</span></span>
<span class="line"><span>Download-Size: 222 kB</span></span>
<span class="line"><span>APT-Manual-Installed: yes</span></span>
<span class="line"><span>APT-Sources: http://in.archive.ubuntu.com/ubuntu artful/main amd64 Packages</span></span>
<span class="line"><span>Description: small, friendly text editor inspired by Pico</span></span>
<span class="line"><span> GNU nano is an easy-to-use text editor originally designed as a replacement</span></span>
<span class="line"><span> for Pico, the ncurses-based editor from the non-free mailer package Pine</span></span>
<span class="line"><span> (itself now available under the Apache License as Alpine).</span></span>
<span class="line"><span> .</span></span>
<span class="line"><span> However, GNU nano also implements many features missing in pico, including:</span></span>
<span class="line"><span>  - undo/redo</span></span>
<span class="line"><span>  - line numbering</span></span>
<span class="line"><span>  - syntax coloring</span></span>
<span class="line"><span>  - soft-wrapping of overlong lines</span></span>
<span class="line"><span>  - selecting text by holding Shift</span></span>
<span class="line"><span>  - interactive search and replace (with regular expression support)</span></span>
<span class="line"><span>  - a go-to line (and column) command</span></span>
<span class="line"><span>  - support for multiple file buffers</span></span>
<span class="line"><span>  - auto-indentation</span></span>
<span class="line"><span>  - tab completion of filenames and search terms</span></span>
<span class="line"><span>  - toggling features while running</span></span>
<span class="line"><span>  - and full internationalization support</span></span></code></pre></div><h3 id="dpkg-命令-查看debian-ubuntu-mint系统上的包信息" tabindex="-1">dpkg 命令：查看Debian/Ubuntu/Mint系统上的包信息 <a class="header-anchor" href="#dpkg-命令-查看debian-ubuntu-mint系统上的包信息" aria-label="Permalink to “dpkg 命令：查看Debian/Ubuntu/Mint系统上的包信息”">​</a></h3>`,3)),a("p",null,[e(p,{href:"https://www.2daygeek.com/dpkg-command-to-manage-packages-on-debian-ubuntu-linux-mint-systems/"},{default:i(()=>[...n[38]||(n[38]=[s("dpkg",-1)])]),_:1}),n[39]||(n[39]=l(" 意指 <ruby>Debian 包管理器<rt>Debian package manager</rt></ruby>。<code>dpkg</code> 是用于 Debian 系统上安装、构建、移除以及管理 Debian 包的命令行工具。<code>dpkg</code> 使用 <code>aptitude</code>（因为它更为主流及用户友好）作为前端工具来完成所有的功能。其他的工具如<code> dpkg-deb</code> 和 <code>dpkg-query</code> 使用 <code>dpkg</code> 做为前端来实现功能。尽管系统管理员还是时不时会在必要时使用 <code>dpkg</code> 来完成一些软件安装的任务，他大多数情况下还是会因为 <code>apt</code>、<code>apt-get</code> 以及 <code>aptitude</code> 的健壮性而使用后者。",23))]),n[66]||(n[66]=l(`<p>（LCTT 译注： 用 <code>dpkg -s</code> 查看 python 包的信息）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dpkg -s python</span></span>
<span class="line"><span>Package: python</span></span>
<span class="line"><span>Status: install ok installed</span></span>
<span class="line"><span>Priority: optional</span></span>
<span class="line"><span>Section: python</span></span>
<span class="line"><span>Installed-Size: 626</span></span>
<span class="line"><span>Maintainer: Ubuntu Developers </span></span>
<span class="line"><span>Architecture: amd64</span></span>
<span class="line"><span>Multi-Arch: allowed</span></span>
<span class="line"><span>Source: python-defaults</span></span>
<span class="line"><span>Version: 2.7.14-2ubuntu1</span></span>
<span class="line"><span>Replaces: python-dev (&lt;&lt; 2.6.5-2)</span></span>
<span class="line"><span>Provides: python-ctypes, python-email, python-importlib, python-profiler, python-wsgiref</span></span>
<span class="line"><span>Depends: python2.7 (&gt;= 2.7.14-1~), libpython-stdlib (= 2.7.14-2ubuntu1)</span></span>
<span class="line"><span>Pre-Depends: python-minimal (= 2.7.14-2ubuntu1)</span></span>
<span class="line"><span>Suggests: python-doc (= 2.7.14-2ubuntu1), python-tk (&gt;= 2.7.14-1~)</span></span>
<span class="line"><span>Breaks: update-manager-core (&lt;&lt; 0.200.5-2)</span></span>
<span class="line"><span>Conflicts: python-central (&lt;&lt; 0.5.5)</span></span>
<span class="line"><span>Description: interactive high-level object-oriented language (default version)</span></span>
<span class="line"><span> Python, the high-level, interactive object oriented language,</span></span>
<span class="line"><span> includes an extensive class library with lots of goodies for</span></span>
<span class="line"><span> network programming, system administration, sounds and graphics.</span></span>
<span class="line"><span> .</span></span>
<span class="line"><span> This package is a dependency package, which depends on Debian&#39;s default</span></span>
<span class="line"><span> Python version (currently v2.7).</span></span>
<span class="line"><span>Homepage: http://www.python.org/</span></span>
<span class="line"><span>Original-Maintainer: Matthias Klose</span></span></code></pre></div><p>我们也可使用 <code>dpkg</code> 的 <code>-p</code> 选项，这个选项提供和 <code>dpkg -s</code> 相类似的信息，但是它还提供了包的校验值和包类型。</p><p>（LCTT 译注： 用 <code>dpkg -p</code> 查看 python3 包的信息）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dpkg -p python3</span></span>
<span class="line"><span>Package: python3</span></span>
<span class="line"><span>Priority: important</span></span>
<span class="line"><span>Section: python</span></span>
<span class="line"><span>Installed-Size: 67</span></span>
<span class="line"><span>Origin: Ubuntu</span></span>
<span class="line"><span>Maintainer: Ubuntu Developers </span></span>
<span class="line"><span>Bugs: https://bugs.launchpad.net/ubuntu/+filebug</span></span>
<span class="line"><span>Architecture: amd64</span></span>
<span class="line"><span>Multi-Arch: allowed</span></span>
<span class="line"><span>Source: python3-defaults</span></span>
<span class="line"><span>Version: 3.6.3-0ubuntu2</span></span>
<span class="line"><span>Replaces: python3-minimal (&lt;&lt; 3.1.2-2)</span></span>
<span class="line"><span>Provides: python3-profiler</span></span>
<span class="line"><span>Depends: python3.6 (&gt;= 3.6.3-1~), libpython3-stdlib (= 3.6.3-0ubuntu2), dh-python</span></span>
<span class="line"><span>Pre-Depends: python3-minimal (= 3.6.3-0ubuntu2)</span></span>
<span class="line"><span>Suggests: python3-doc (&gt;= 3.6.3-0ubuntu2), python3-tk (&gt;= 3.6.3-1~), python3-venv (&gt;= 3.6.3-0ubuntu2)</span></span>
<span class="line"><span>Filename: pool/main/p/python3-defaults/python3_3.6.3-0ubuntu2_amd64.deb</span></span>
<span class="line"><span>Size: 8712</span></span>
<span class="line"><span>MD5sum: a8bae494c6e5d1896287675faf40d373</span></span>
<span class="line"><span>Description: interactive high-level object-oriented language (default python3 version)</span></span>
<span class="line"><span>Original-Maintainer: Matthias Klose </span></span>
<span class="line"><span>SHA1: 2daec885cea7d4dc83c284301c3bebf42b23e095</span></span>
<span class="line"><span>SHA256: 865e509c91d2504a16c4b573dbe27e260c36fceec2add3fa43a30c1751d7e9bb</span></span>
<span class="line"><span>Homepage: http://www.python.org/</span></span>
<span class="line"><span>Task: minimal, ubuntu-core, ubuntu-core</span></span>
<span class="line"><span>Description-md5: 950ebd8122c0a7340f0a740c295b9eab</span></span>
<span class="line"><span>Supported: 9m</span></span></code></pre></div><h3 id="aptitude-命令-查看-debian-ubuntu-mint-系统上的包信息" tabindex="-1">aptitude 命令：查看 Debian/Ubuntu/Mint 系统上的包信息 <a class="header-anchor" href="#aptitude-命令-查看-debian-ubuntu-mint-系统上的包信息" aria-label="Permalink to “aptitude 命令：查看 Debian/Ubuntu/Mint 系统上的包信息”">​</a></h3><p><code>aptitude</code> 是 Debian GNU/Linux 包管理系统的文本界面。它允许用户查看已安装的包的列表，以及完成诸如安装、升级、删除包之类的包管理任务。这些管理行为也能从图形接口来执行。</p><p>（LCTT 译注： 用 <code>aptitude show</code> 查看 htop 包信息）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ aptitude show htop</span></span>
<span class="line"><span>Package: htop                     </span></span>
<span class="line"><span>Version: 2.0.2-1</span></span>
<span class="line"><span>State: installed</span></span>
<span class="line"><span>Automatically installed: no</span></span>
<span class="line"><span>Priority: optional</span></span>
<span class="line"><span>Section: universe/utils</span></span>
<span class="line"><span>Maintainer: Ubuntu Developers </span></span>
<span class="line"><span>Architecture: amd64</span></span>
<span class="line"><span>Uncompressed Size: 216 k</span></span>
<span class="line"><span>Depends: libc6 (&gt;= 2.15), libncursesw5 (&gt;= 6), libtinfo5 (&gt;= 6)</span></span>
<span class="line"><span>Suggests: lsof, strace</span></span>
<span class="line"><span>Conflicts: htop:i386</span></span>
<span class="line"><span>Description: interactive processes viewer</span></span>
<span class="line"><span> Htop is an ncursed-based process viewer similar to top, but it allows one to scroll the list vertically and horizontally to see all processes and their full command lines. </span></span>
<span class="line"><span> </span></span>
<span class="line"><span> Tasks related to processes (killing, renicing) can be done without entering their PIDs.</span></span>
<span class="line"><span>Homepage: http://hisham.hm/htop/</span></span></code></pre></div><hr>`,10)),a("p",null,[n[41]||(n[41]=s("via: ",-1)),e(p,{href:"https://www.2daygeek.com/how-to-view-detailed-information-about-a-package-in-linux/"},{default:i(()=>[...n[40]||(n[40]=[s("https://www.2daygeek.com/how-to-view-detailed-information-about-a-package-in-linux/",-1)])]),_:1})]),a("p",null,[n[46]||(n[46]=s("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/prakash/"},{default:i(()=>[...n[42]||(n[42]=[s("Prakash Subramanian",-1)])]),_:1}),n[47]||(n[47]=s(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...n[43]||(n[43]=[s("lujun9972",-1)])]),_:1}),n[48]||(n[48]=s(" 译者：",-1)),e(p,{href:"https://github.com/davidchenliang"},{default:i(()=>[...n[44]||(n[44]=[s("DavidChenLiang",-1)])]),_:1}),n[49]||(n[49]=s(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...n[45]||(n[45]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[52]||(n[52]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[50]||(n[50]=[s("LCTT",-1)])]),_:1}),n[53]||(n[53]=s(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...n[51]||(n[51]=[s("Linux中国",-1)])]),_:1}),n[54]||(n[54]=s(" 荣誉推出",-1))])])}const w=t(c,[["render",u]]);export{T as __pageData,w as default};
