import{_ as t,a0 as u,w as c,s as o,I as a,x as s,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"zzupdate：单条命令升级 Ubuntu 18.04 LTS | LCTT x X-CMD","titleTemplate":false,"description":"zzupdate：单条命令升级 Ubuntu 18.04 LTS | LCTT (201805) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"zzupdate：单条命令升级 Ubuntu 18.04 LTS | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"zzupdate：单条命令升级 Ubuntu 18.04 LTS | LCTT (201805) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201805/20180502 zzupdate - Single Command To Upgrade Ubuntu","title":"zzupdate：单条命令升级 Ubuntu 18.04 LTS","tag":"201805","desc":""},"relativePath":"201805/20180502 zzupdate - Single Command To Upgrade Ubuntu.md","filePath":"[post].md"}'),d={name:"201805/20180502 zzupdate - Single Command To Upgrade Ubuntu.md"};function r(g,n,b,h,m,k){const p=u("Link");return c(),o("div",null,[n[23]||(n[23]=a("h1",{id:"zzupdate-单条命令升级-ubuntu-18-04-lts",tabindex:"-1"},[s("zzupdate：单条命令升级 Ubuntu 18.04 LTS "),a("a",{class:"header-anchor",href:"#zzupdate-单条命令升级-ubuntu-18-04-lts","aria-label":"Permalink to “zzupdate：单条命令升级 Ubuntu 18.04 LTS”"},"​")],-1)),n[24]||(n[24]=a("p",null,"Ubuntu 18.04 版本已经发布，并得到各个社区的一致好评，因为 Ubuntu 18.04 可能是 Ubuntu 多年来最令人兴奋的版本。",-1)),n[25]||(n[25]=a("p",null,"通常情况下，Ubuntu 及其衍生版可以使用命令从一个版本升级到最新版本或者其它版本，这也是官方推荐的升级方式。",-1)),n[26]||(n[26]=a("h3",{id:"ubuntu-18-04-特性-亮点",tabindex:"-1"},[s("Ubuntu 18.04 特性/亮点 "),a("a",{class:"header-anchor",href:"#ubuntu-18-04-特性-亮点","aria-label":"Permalink to “Ubuntu 18.04 特性/亮点”"},"​")],-1)),a("p",null,[n[1]||(n[1]=s("这次更新包含大量改进和新功能，这里只列举的几个主要的。如果您想要更详细的更新信息，请访问 ",-1)),e(p,{href:"https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes"},{default:l(()=>[...n[0]||(n[0]=[s("Ubuntu 18.04 官方",-1)])]),_:1}),n[2]||(n[2]=s(" 页面。",-1))]),n[27]||(n[27]=i('<ul><li>使用 Linux 4.15 内核，提供了从上游继承的新功能</li><li>它具有最新版本的 GNOME 3.28</li><li>它提供了与 RHEL 相似的最简安装选项，该选项可安装只包含一个 web 浏览器和核心系统程序的基本桌面环境</li><li>对于新安装，交换文件将取代默认的交换分区</li><li>您可以启用 Livepatch 安装内核更新而无需重新启动</li><li>笔记本电脑在使用电池供电时会在无操作 20 分钟后自动待机</li><li>不再提供 32 位的 Ubuntu 桌面安装程序映像</li></ul><p>注意：</p><ol><li>不要忘记备份重要数据。如果升级出现问题，我们将重新安装并恢复数据。</li><li>安装所需时间取决于您的网络状况和安装的程序。</li></ol><h3 id="zzupdate-是什么" tabindex="-1">zzupdate 是什么？ <a class="header-anchor" href="#zzupdate-是什么" aria-label="Permalink to “zzupdate 是什么？”">​</a></h3>',4)),a("p",null,[n[4]||(n[4]=s("我们可以只通过一条命令使用 ",-1)),e(p,{href:"https://github.com/TurboLabIt/zzupdate"},{default:l(()=>[...n[3]||(n[3]=[s("zzupdate",-1)])]),_:1}),n[5]||(n[5]=s(" 工具中将 Ubuntu PC/Server 从一个版本升级到另一个版本。它是一个自由开源工具，使用它不需要任何脚本知识，因为它只需要配置文件即可运行。",-1))]),n[28]||(n[28]=i(`<p>工具中提供两个默认 shell 文件。<code>setup.sh</code> 自动安装、更新代码，将脚本转换为一个简单的 zzupdate shell 命令。<code>zzupdate.sh</code> 将执行版本间的升级。</p><h3 id="如何安装-zzupdate" tabindex="-1">如何安装 zzupdate？ <a class="header-anchor" href="#如何安装-zzupdate" aria-label="Permalink to “如何安装 zzupdate？”">​</a></h3><p>要安装 <code>zzupdate</code>，只需执行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -s https://raw.githubusercontent.com/TurboLabIt/zzupdate/master/setup.sh | sudo sh</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>Installing...</span></span>
<span class="line"><span>-------------</span></span>
<span class="line"><span>Cloning into &#39;zzupdate&#39;...</span></span>
<span class="line"><span>remote: Counting objects: 57, done.</span></span>
<span class="line"><span>remote: Total 57 (delta 0), reused 0 (delta 0), pack-reused 57</span></span>
<span class="line"><span>Unpacking objects: 100% (57/57), done.</span></span>
<span class="line"><span>Checking connectivity... done.</span></span>
<span class="line"><span>Already up-to-date.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Setup completed!</span></span>
<span class="line"><span>----------------</span></span>
<span class="line"><span>See https://github.com/TurboLabIt/zzupdate for the quickstart guide.</span></span></code></pre></div><p>将 Ubuntu 系统从一个版本升级到另一个版本，您不需要输入很多命令，也不需要重新启动，只需要运行下面的 <code>zzupdate</code> 命令并坐下喝杯咖啡就可以了。</p><p>请注意，当您远程升级系统时，建议您使用以下的工具来帮助您在任何断开连接时重新连接会话。</p>`,6)),a("p",null,[n[7]||(n[7]=s("建议阅读： ",-1)),e(p,{href:"https://www.2daygeek.com/how-to-keep-a-process-command-running-after-disconnecting-ssh-session/"},{default:l(()=>[...n[6]||(n[6]=[s("如何让一个进程/命令在 SSH 连接断开后继续运行",-1)])]),_:1})]),n[29]||(n[29]=i(`<h3 id="如何配置-zzupdate-可选" tabindex="-1">如何配置 zzupdate（可选） <a class="header-anchor" href="#如何配置-zzupdate-可选" aria-label="Permalink to “如何配置 zzupdate（可选）”">​</a></h3><p>默认情况下，<code>zzupdate</code> 可以开箱即用，不需要配置任何东西。当然，如果您想要自己配置一些内容也是可以的。复制提供的示例配置文件 <code>zzupdate.default.conf</code> 到 <code>zzupdate.conf</code>，并在 <code>zzupdate.conf</code> 中配置您的首选项。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo cp /usr/local/turbolab.it/zzupdate/zzupdate.default.conf /etc/turbolab.it/zzupdate.conf</span></span></code></pre></div><p>打开文件，默认配置如下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nano /etc/turbolab.it/zzupdate.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>REBOOT=1</span></span>
<span class="line"><span>REBOOT_TIMEOUT=15</span></span>
<span class="line"><span>VERSION_UPGRADE=1</span></span>
<span class="line"><span>VERSION_UPGRADE_SILENT=0</span></span>
<span class="line"><span>COMPOSER_UPGRADE=1</span></span>
<span class="line"><span>SWITCH_PROMPT_TO_NORMAL=0</span></span></code></pre></div><ul><li><code>REBOOT=1</code>：系统在更新完成后自动重启</li><li><code>REBOOT_TIMEOUT=15</code>：重启的默认超时值</li><li><code>VERSION_UPGRADE=1</code>：执行从一个版本到另一个版本的版本升级</li><li><code>VERSION_UPGRADE_SILENT=0</code>：禁用自动升级</li><li><code>COMPOSER_UPGRADE=1</code>：自动升级</li><li><code>SWITCH_PROMPT_TO_NORMAL=0</code>：如果值为 <code>0</code>，将寻找相同种类的版本升级。例如您正在运行 LTS 的版本，那么将寻找 LTS 的版本升级，而不是用于正常版本升级。如果值为 <code>1</code>，那么无论您是运行 LTS 还是正常版本，都会查找最新版本</li></ul><p>我现在正在使用 Ubuntu 17.10 ，查看一下详细信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /etc/*-release</span></span>
<span class="line"><span>DISTRIB_ID=Ubuntu</span></span>
<span class="line"><span>DISTRIB_RELEASE=17.10</span></span>
<span class="line"><span>DISTRIB_CODENAME=artful</span></span>
<span class="line"><span>DISTRIB_DESCRIPTION=&quot;Ubuntu 17.10&quot;</span></span>
<span class="line"><span>NAME=&quot;Ubuntu&quot;</span></span>
<span class="line"><span>VERSION=&quot;17.10 (Artful Aardvark)&quot;</span></span>
<span class="line"><span>ID=ubuntu</span></span>
<span class="line"><span>ID_LIKE=debian</span></span>
<span class="line"><span>PRETTY_NAME=&quot;Ubuntu 17.10&quot;</span></span>
<span class="line"><span>VERSION_ID=&quot;17.10&quot;</span></span>
<span class="line"><span>HOME_URL=&quot;https://www.ubuntu.com/&quot;</span></span>
<span class="line"><span>SUPPORT_URL=&quot;https://help.ubuntu.com/&quot;</span></span>
<span class="line"><span>BUG_REPORT_URL=&quot;https://bugs.launchpad.net/ubuntu/&quot;</span></span>
<span class="line"><span>PRIVACY_POLICY_URL=&quot;https://www.ubuntu.com/legal/terms-and-policies/privacy-policy&quot;</span></span>
<span class="line"><span>VERSION_CODENAME=artful</span></span>
<span class="line"><span>UBUNTU_CODENAME=artful</span></span></code></pre></div><p>要升级 Ubuntu 到最新版本，只需要执行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo zzupdate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>O===========================================================O</span></span>
<span class="line"><span> zzupdate - Wed May 2 17:31:16 IST 2018</span></span>
<span class="line"><span>O===========================================================O</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Self-update and update of other zzScript</span></span>
<span class="line"><span>----------------------------------------</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Updating...</span></span>
<span class="line"><span>----------</span></span>
<span class="line"><span>Already up-to-date.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Setup completed!</span></span>
<span class="line"><span>----------------</span></span>
<span class="line"><span>See https://github.com/TurboLabIt/zzupdate for the quickstart guide.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Channel switching is disabled: using pre-existing setting</span></span>
<span class="line"><span>---------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Cleanup local cache</span></span>
<span class="line"><span>-------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Update available packages informations</span></span>
<span class="line"><span>--------------------------------------</span></span>
<span class="line"><span>Hit:1 https://download.docker.com/linux/ubuntu artful InRelease</span></span>
<span class="line"><span>Ign:2 http://dl.google.com/linux/chrome/deb stable InRelease</span></span>
<span class="line"><span>Hit:3 http://security.ubuntu.com/ubuntu artful-security InRelease</span></span>
<span class="line"><span>Hit:4 http://in.archive.ubuntu.com/ubuntu artful InRelease</span></span>
<span class="line"><span>Hit:5 http://dl.google.com/linux/chrome/deb stable Release</span></span>
<span class="line"><span>Hit:6 http://in.archive.ubuntu.com/ubuntu artful-updates InRelease</span></span>
<span class="line"><span>Hit:7 http://in.archive.ubuntu.com/ubuntu artful-backports InRelease</span></span>
<span class="line"><span>Hit:9 http://ppa.launchpad.net/notepadqq-team/notepadqq/ubuntu artful InRelease</span></span>
<span class="line"><span>Hit:10 http://ppa.launchpad.net/papirus/papirus/ubuntu artful InRelease</span></span>
<span class="line"><span>Hit:11 http://ppa.launchpad.net/twodopeshaggy/jarun/ubuntu artful InRelease</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>UPGRADE PACKAGES</span></span>
<span class="line"><span>----------------</span></span>
<span class="line"><span>Reading package lists...</span></span>
<span class="line"><span>Building dependency tree...</span></span>
<span class="line"><span>Reading state information...</span></span>
<span class="line"><span>Calculating upgrade...</span></span>
<span class="line"><span>The following packages were automatically installed and are no longer required:</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>Interactively upgrade to a new release, if any</span></span>
<span class="line"><span>----------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Reading cache</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Checking package manager</span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree</span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span>Ign http://dl.google.com/linux/chrome/deb stable InRelease</span></span>
<span class="line"><span>Hit https://download.docker.com/linux/ubuntu artful InRelease</span></span>
<span class="line"><span>Hit http://security.ubuntu.com/ubuntu artful-security InRelease</span></span>
<span class="line"><span>Hit http://dl.google.com/linux/chrome/deb stable Release</span></span>
<span class="line"><span>Hit http://in.archive.ubuntu.com/ubuntu artful InRelease</span></span>
<span class="line"><span>Hit http://in.archive.ubuntu.com/ubuntu artful-updates InRelease</span></span>
<span class="line"><span>Hit http://in.archive.ubuntu.com/ubuntu artful-backports InRelease</span></span>
<span class="line"><span>Hit http://ppa.launchpad.net/notepadqq-team/notepadqq/ubuntu artful InRelease</span></span>
<span class="line"><span>Hit http://ppa.launchpad.net/papirus/papirus/ubuntu artful InRelease</span></span>
<span class="line"><span>Hit http://ppa.launchpad.net/twodopeshaggy/jarun/ubuntu artful InRelease</span></span>
<span class="line"><span>Fetched 0 B in 6s (0 B/s)</span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree</span></span>
<span class="line"><span>Reading state information... Done</span></span></code></pre></div><p>我们需要按下回车键禁用第三方仓库以继续升级。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Updating repository information</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Third party sources disabled</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Some third party entries in your sources.list were disabled. You can</span></span>
<span class="line"><span>re-enable them after the upgrade with the &#39;software-properties&#39; tool</span></span>
<span class="line"><span>or your package manager.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To continue please press [ENTER]</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>Get:35 http://in.archive.ubuntu.com/ubuntu bionic-updates/universe i386 Packages [2,180 B]</span></span>
<span class="line"><span>Get:36 http://in.archive.ubuntu.com/ubuntu bionic-updates/universe Translation-en [1,644 B]</span></span>
<span class="line"><span>Fetched 38.2 MB in 6s (1,276 kB/s)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Checking package manager</span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree</span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Calculating the changes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Calculating the changes</span></span></code></pre></div><p>开始下载 <code>Ubuntu 18.04 LTS</code> 软件包，所需时间取决于您的网络状况，一般情况下这将需要几分钟。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Do you want to start the upgrade?</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>63 installed packages are no longer supported by Canonical. You can</span></span>
<span class="line"><span>still get support from the community.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4 packages are going to be removed. 175 new packages are going to be</span></span>
<span class="line"><span>installed. 1307 packages are going to be upgraded.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You have to download a total of 999 M. This download will take about</span></span>
<span class="line"><span>12 minutes with your connection.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Installing the upgrade can take several hours. Once the download has</span></span>
<span class="line"><span>finished, the process cannot be canceled.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Continue [yN] Details [d]y</span></span>
<span class="line"><span>Fetching</span></span>
<span class="line"><span>Get:1 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 base-files amd64 10.1ubuntu2 [58.2 kB]</span></span>
<span class="line"><span>Get:2 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 debianutils amd64 4.8.4 [85.7 kB]</span></span>
<span class="line"><span>Get:3 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 bash amd64 4.4.18-2ubuntu1 [614 kB]</span></span>
<span class="line"><span>Get:4 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 locales all 2.27-3ubuntu1 [3,612 kB]</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>Get:1477 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 liblouisutdml-bin amd64 2.7.0-1 [9,588 B]</span></span>
<span class="line"><span>Get:1478 http://in.archive.ubuntu.com/ubuntu bionic/universe amd64 libtbb2 amd64 2017~U7-8 [110 kB]</span></span>
<span class="line"><span>Get:1479 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 libyajl2 amd64 2.1.0-2build1 [20.0 kB]</span></span>
<span class="line"><span>Get:1480 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 usb-modeswitch amd64 2.5.2+repack0-2ubuntu1 [53.6 kB]</span></span>
<span class="line"><span>Get:1481 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 usb-modeswitch-data all 20170806-2 [30.7 kB]</span></span>
<span class="line"><span>Get:1482 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 xbrlapi amd64 5.5-4ubuntu2 [61.8 kB]</span></span>
<span class="line"><span>Fetched 999 MB in 6s (721 kB/s)</span></span></code></pre></div><p>安装新软件包时，很少有服务需要重新启动。 点击 <code>Yes</code> 按钮，它会自动重启所需的服务。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Upgrading</span></span>
<span class="line"><span>Inhibiting until Ctrl+C is pressed...</span></span>
<span class="line"><span>Preconfiguring packages ...</span></span>
<span class="line"><span>Preconfiguring packages ...</span></span>
<span class="line"><span>Preconfiguring packages ...</span></span>
<span class="line"><span>Preconfiguring packages ...</span></span>
<span class="line"><span>(Reading database ... 441375 files and directories currently installed.)</span></span>
<span class="line"><span>Preparing to unpack .../base-files_10.1ubuntu2_amd64.deb ...</span></span>
<span class="line"><span>Warning: Stopping motd-news.service, but it can still be activated by:</span></span>
<span class="line"><span> motd-news.timer</span></span>
<span class="line"><span>Unpacking base-files (10.1ubuntu2) over (9.6ubuntu102) ...</span></span>
<span class="line"><span>Setting up base-files (10.1ubuntu2) ...</span></span>
<span class="line"><span>Installing new version of config file /etc/debian_version ...</span></span>
<span class="line"><span>Installing new version of config file /etc/issue ...</span></span>
<span class="line"><span>Installing new version of config file /etc/issue.net ...</span></span>
<span class="line"><span>Installing new version of config file /etc/lsb-release ...</span></span>
<span class="line"><span>motd-news.service is a disabled or a static unit, not starting it.</span></span>
<span class="line"><span>(Reading database ... 441376 files and directories currently installed.)</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>Progress: [ 80%]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Progress: [ 85%]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Progress: [ 90%]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Progress: [ 95%]</span></span></code></pre></div><p>现在删除旧版的、系统不再需要的包。点击 <code>y</code> 以删除。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Searching for obsolete software</span></span>
<span class="line"><span> ing package lists... 97%</span></span>
<span class="line"><span> ding package lists... 98%</span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree</span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span>Reading state information... 23%</span></span>
<span class="line"><span>Reading state information... 47%</span></span>
<span class="line"><span>Reading state information... 71%</span></span>
<span class="line"><span>Reading state information... 94%</span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Remove obsolete packages?</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>88 packages are going to be removed.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Continue [yN] Details [d]y</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>Removing perlmagick (8:6.9.7.4+dfsg-16ubuntu6) ...</span></span>
<span class="line"><span>Removing snapd-login-service (1.23-0ubuntu1) ...</span></span>
<span class="line"><span>Processing triggers for libc-bin (2.27-3ubuntu1) ...</span></span>
<span class="line"><span>Processing triggers for man-db (2.8.3-2) ...</span></span>
<span class="line"><span>Processing triggers for dbus (1.12.2-1ubuntu1) ...</span></span>
<span class="line"><span>Fetched 0 B in 0s (0 B/s)</span></span></code></pre></div><p>升级成功，需要重启系统。点击 <code>y</code> 以重启系统。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>System upgrade is complete.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Restart required</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To finish the upgrade, a restart is required.</span></span>
<span class="line"><span>If you select &#39;y&#39; the system will be restarted.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Continue [yN]y</span></span></code></pre></div><p>注意： 少数情况下，会要求您确认配置文件替换以继续安装。</p><p>查看升级后的系统详情：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /etc/*-release</span></span>
<span class="line"><span>DISTRIB_ID=Ubuntu</span></span>
<span class="line"><span>DISTRIB_RELEASE=18.04</span></span>
<span class="line"><span>DISTRIB_CODENAME=bionic</span></span>
<span class="line"><span>DISTRIB_DESCRIPTION=&quot;Ubuntu 18.04 LTS&quot;</span></span>
<span class="line"><span>NAME=&quot;Ubuntu&quot;</span></span>
<span class="line"><span>VERSION=&quot;18.04 LTS (Bionic Beaver)&quot;</span></span>
<span class="line"><span>ID=ubuntu</span></span>
<span class="line"><span>ID_LIKE=debian</span></span>
<span class="line"><span>PRETTY_NAME=&quot;Ubuntu 18.04 LTS&quot;</span></span>
<span class="line"><span>VERSION_ID=&quot;18.04&quot;</span></span>
<span class="line"><span>HOME_URL=&quot;https://www.ubuntu.com/&quot;</span></span>
<span class="line"><span>SUPPORT_URL=&quot;https://help.ubuntu.com/&quot;</span></span>
<span class="line"><span>BUG_REPORT_URL=&quot;https://bugs.launchpad.net/ubuntu/&quot;</span></span>
<span class="line"><span>PRIVACY_POLICY_URL=&quot;https://www.ubuntu.com/legal/terms-and-policies/privacy-policy&quot;</span></span>
<span class="line"><span>VERSION_CODENAME=bionic</span></span>
<span class="line"><span>UBUNTU_CODENAME=bionic</span></span></code></pre></div><hr>`,24)),a("p",null,[n[9]||(n[9]=s("via: ",-1)),e(p,{href:"https://www.2daygeek.com/zzupdate-single-command-to-upgrade-ubuntu-18-04/"},{default:l(()=>[...n[8]||(n[8]=[s("https://www.2daygeek.com/zzupdate-single-command-to-upgrade-ubuntu-18-04/",-1)])]),_:1})]),a("p",null,[n[14]||(n[14]=s("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/prakash/"},{default:l(()=>[...n[10]||(n[10]=[s("PRAKASH SUBRAMANIAN",-1)])]),_:1}),n[15]||(n[15]=s(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...n[11]||(n[11]=[s("lujun9972",-1)])]),_:1}),n[16]||(n[16]=s(" 译者：",-1)),e(p,{href:"https://github.com/XiatianSummer"},{default:l(()=>[...n[12]||(n[12]=[s("XiatianSummer",-1)])]),_:1}),n[17]||(n[17]=s(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...n[13]||(n[13]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[20]||(n[20]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[18]||(n[18]=[s("LCTT",-1)])]),_:1}),n[21]||(n[21]=s(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...n[19]||(n[19]=[s("Linux中国",-1)])]),_:1}),n[22]||(n[22]=s(" 荣誉推出",-1))])])}const z=t(d,[["render",r]]);export{T as __pageData,z as default};
