import{_ as l,a0 as t,w as r,s as o,I as n,x as a,a1 as e,A as i,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"如何在 CentOS 中添加、启用和禁用一个仓库 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 中添加、启用和禁用一个仓库 | LCTT (201811) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 中添加、启用和禁用一个仓库 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 中添加、启用和禁用一个仓库 | LCTT (201811) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201811/20180530 How To Add, Enable And Disable A Repository In Linux","title":"如何在 CentOS 中添加、启用和禁用一个仓库","tag":"201811","desc":""},"relativePath":"201811/20180530 How To Add, Enable And Disable A Repository In Linux.md","filePath":"[post].md"}'),d={name:"201811/20180530 How To Add, Enable And Disable A Repository In Linux.md"};function g(u,s,h,k,m,b){const p=t("Link");return r(),o("div",null,[s[19]||(s[19]=n("h1",{id:"如何在-centos-中添加、启用和禁用一个仓库",tabindex:"-1"},[a("如何在 CentOS 中添加、启用和禁用一个仓库 "),n("a",{class:"header-anchor",href:"#如何在-centos-中添加、启用和禁用一个仓库","aria-label":"Permalink to “如何在 CentOS 中添加、启用和禁用一个仓库”"},"​")],-1)),s[20]||(s[20]=n("p",null,"在基于 RPM 的系统上，例如 RHEL、CentOS 等，我们中的许多人使用 yum 包管理器来管理软件的安装、删除、更新、搜索等。",-1)),s[21]||(s[21]=n("p",null,"Linux 发行版的大部分软件都来自发行版官方仓库。官方仓库包含大量免费和开源的应用和软件。它很容易安装和使用。",-1)),s[22]||(s[22]=n("p",null,"由于一些限制和专有问题，基于 RPM 的发行版在其官方仓库中没有提供某些包。另外，出于稳定性考虑，它不会提供最新版本的核心包。",-1)),s[23]||(s[23]=n("p",null,"为了克服这种情况，我们需要安装或启用需要的第三方仓库。对于基于 RPM 的系统，有许多第三方仓库可用，但所建议使用的仓库很少，因为这些不会替换大量的基础包。",-1)),s[24]||(s[24]=n("p",null,"建议阅读：",-1)),n("ul",null,[n("li",null,[e(p,{href:"https://www.2daygeek.com/yum-command-examples-manage-packages-rhel-centos-systems/"},{default:i(()=>[...s[0]||(s[0]=[a("在 RHEL/CentOS 系统中使用 YUM 命令管理包",-1)])]),_:1})]),n("li",null,[e(p,{href:"https://www.2daygeek.com/dnf-command-examples-manage-packages-fedora-system/"},{default:i(()=>[...s[1]||(s[1]=[a("在 Fedora 系统中使用 DNF (YUM 的分支) 命令来管理包",-1)])]),_:1})]),n("li",null,[e(p,{href:"https://www.2daygeek.com/list-of-command-line-package-manager-for-linux/"},{default:i(()=>[...s[2]||(s[2]=[a("命令行包管理器和用法列表",-1)])]),_:1})]),n("li",null,[e(p,{href:"https://www.2daygeek.com/list-of-graphical-frontend-tool-for-linux-package-manager/"},{default:i(()=>[...s[3]||(s[3]=[a("Linux 包管理器的图形化工具",-1)])]),_:1})])]),s[25]||(s[25]=c(`<p>这可以在基于 RPM 的系统上完成，比如 RHEL, CentOS, OEL, Fedora 等。</p><ul><li>Fedora 系统使用 <code>dnf config-manager [options] [section …]</code></li><li>其它基于 RPM 的系统使用 <code>yum-config-manager [options] [section …]</code></li></ul><h3 id="如何列出启用的仓库" tabindex="-1">如何列出启用的仓库 <a class="header-anchor" href="#如何列出启用的仓库" aria-label="Permalink to “如何列出启用的仓库”">​</a></h3><p>只需运行以下命令即可检查系统上启用的仓库列表。</p><p>对于 CentOS/RHEL/OLE 系统：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum repolist</span></span>
<span class="line"><span>Loaded plugins: fastestmirror, security</span></span>
<span class="line"><span>Loading mirror speeds from cached hostfile</span></span>
<span class="line"><span>repo id                                                       repo name                                                                 status</span></span>
<span class="line"><span>base                                                          CentOS-6 - Base                                                           6,706</span></span>
<span class="line"><span>extras                                                        CentOS-6 - Extras                                                            53</span></span>
<span class="line"><span>updates                                                       CentOS-6 - Updates                                                        1,255</span></span>
<span class="line"><span>repolist: 8,014</span></span></code></pre></div><p>对于 Fedora 系统：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf repolist</span></span></code></pre></div><h3 id="如何在系统中添加一个新仓库" tabindex="-1">如何在系统中添加一个新仓库 <a class="header-anchor" href="#如何在系统中添加一个新仓库" aria-label="Permalink to “如何在系统中添加一个新仓库”">​</a></h3><p>每个仓库通常都提供自己的 <code>.repo</code> 文件。要将此类仓库添加到系统中，使用 root 用户运行以下命令。在我们的例子中将添加 EPEL 仓库 和 IUS 社区仓库，见下文。</p><p>但是没有 <code>.repo</code> 文件可用于这些仓库。因此，我们使用以下方法进行安装。</p><p>对于 EPEL 仓库，因为它可以从 CentOS 额外仓库获得，所以运行以下命令来安装它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum install epel-release -y</span></span></code></pre></div><p>对于 IUS 社区仓库，运行以下 bash 脚本来安装。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># curl &#39;https://setup.ius.io/&#39; -o setup-ius.sh</span></span>
<span class="line"><span># sh setup-ius.sh</span></span></code></pre></div><p>如果你有 <code>.repo</code> 文件，在 RHEL/CentOS/OEL 中，只需运行以下命令来添加一个仓库。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum-config-manager --add-repo http://www.example.com/example.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Loaded plugins: product-id, refresh-packagekit, subscription-manager</span></span>
<span class="line"><span>adding repo from: http://www.example.com/example.repo</span></span>
<span class="line"><span>grabbing file http://www.example.com/example.repo to /etc/yum.repos.d/example.repo</span></span>
<span class="line"><span>example.repo                                             |  413 B     00:00</span></span>
<span class="line"><span>repo saved to /etc/yum.repos.d/example.repo</span></span></code></pre></div><p>对于 Fedora 系统，运行以下命令来添加一个仓库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf config-manager --add-repo http://www.example.com/example.repo</span></span>
<span class="line"><span>adding repo from: http://www.example.com/example.repo</span></span></code></pre></div><p>如果在添加这些仓库之后运行 <code>yum repolist</code> 命令，你就可以看到新添加的仓库了。Yes，我看到了。</p><p>注意：每当运行 <code>yum repolist</code> 命令时，该命令会自动从相应的仓库获取更新，并将缓存保存在本地系统中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum repolist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Loaded plugins: fastestmirror, security</span></span>
<span class="line"><span>Loading mirror speeds from cached hostfile</span></span>
<span class="line"><span>epel/metalink                                                                                                          | 6.1 kB     00:00</span></span>
<span class="line"><span>* epel: epel.mirror.constant.com</span></span>
<span class="line"><span>* ius: ius.mirror.constant.com</span></span>
<span class="line"><span>ius                                                                                                                    | 2.3 kB     00:00</span></span>
<span class="line"><span>repo id                                     repo name                                                                                   status</span></span>
<span class="line"><span>base                                        CentOS-6 - Base                                                                              6,706</span></span>
<span class="line"><span>epel                                        Extra Packages for Enterprise Linux 6 - x86_64                                              12,505</span></span>
<span class="line"><span>extras                                      CentOS-6 - Extras                                                                               53</span></span>
<span class="line"><span>ius                                         IUS Community Packages for Enterprise Linux 6 - x86_64                                         390</span></span>
<span class="line"><span>updates                                     CentOS-6 - Updates                                                                           1,255</span></span>
<span class="line"><span>repolist: 20,909</span></span></code></pre></div><p>每个仓库都有多个渠道，比如测试（Testing）、开发（Dev）和存档（Archive）等。通过导航到仓库文件位置，你可以更好地理解这一点。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ls -lh /etc/yum.repos.d</span></span>
<span class="line"><span>total 64K</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 2.0K Apr 12 02:44 CentOS-Base.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 647 Apr 12 02:44 CentOS-Debuginfo.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 289 Apr 12 02:44 CentOS-fasttrack.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 630 Apr 12 02:44 CentOS-Media.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 916 May 18 11:07 CentOS-SCLo-scl.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 892 May 18 10:36 CentOS-SCLo-scl-rh.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 6.2K Apr 12 02:44 CentOS-Vault.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 7.9K Apr 12 02:44 CentOS-Vault.repo.rpmnew</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 957 May 18 10:41 epel.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 1.1K Nov 4 2012 epel-testing.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 1.2K Feb 23 2017 ius-archive.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 1.2K Feb 23 2017 ius-dev.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 1.1K May 18 10:41 ius.repo</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 1.2K Feb 23 2017 ius-testing.repo</span></span></code></pre></div><h3 id="如何在系统中启用一个仓库" tabindex="-1">如何在系统中启用一个仓库 <a class="header-anchor" href="#如何在系统中启用一个仓库" aria-label="Permalink to “如何在系统中启用一个仓库”">​</a></h3><p>当你在默认情况下添加一个新仓库时，它将启用它们的稳定仓库，这就是为什么我们在运行 <code>yum repolist</code> 命令时获取了仓库信息。在某些情况下，如果你希望启用它们的测试、开发或存档仓库，使用以下命令。另外，我们还可以使用此命令启用任何禁用的仓库。</p><p>为了验证这一点，我们将启用 <code>epel-testing.repo</code>，运行下面的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum-config-manager --enable epel-testing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Loaded plugins: fastestmirror</span></span>
<span class="line"><span>==================================================================================== repo: epel-testing =====================================================================================</span></span>
<span class="line"><span>[epel-testing]</span></span>
<span class="line"><span>bandwidth = 0</span></span>
<span class="line"><span>base_persistdir = /var/lib/yum/repos/x86_64/6</span></span>
<span class="line"><span>baseurl =</span></span>
<span class="line"><span>cache = 0</span></span>
<span class="line"><span>cachedir = /var/cache/yum/x86_64/6/epel-testing</span></span>
<span class="line"><span>cost = 1000</span></span>
<span class="line"><span>enabled = 1</span></span>
<span class="line"><span>enablegroups = True</span></span>
<span class="line"><span>exclude =</span></span>
<span class="line"><span>failovermethod = priority</span></span>
<span class="line"><span>ftp_disable_epsv = False</span></span>
<span class="line"><span>gpgcadir = /var/lib/yum/repos/x86_64/6/epel-testing/gpgcadir</span></span>
<span class="line"><span>gpgcakey =</span></span>
<span class="line"><span>gpgcheck = True</span></span>
<span class="line"><span>gpgdir = /var/lib/yum/repos/x86_64/6/epel-testing/gpgdir</span></span>
<span class="line"><span>gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6</span></span>
<span class="line"><span>hdrdir = /var/cache/yum/x86_64/6/epel-testing/headers</span></span>
<span class="line"><span>http_caching = all</span></span>
<span class="line"><span>includepkgs =</span></span>
<span class="line"><span>keepalive = True</span></span>
<span class="line"><span>mdpolicy = group:primary</span></span>
<span class="line"><span>mediaid =</span></span>
<span class="line"><span>metadata_expire = 21600</span></span>
<span class="line"><span>metalink =</span></span>
<span class="line"><span>mirrorlist = https://mirrors.fedoraproject.org/metalink?repo=testing-epel6&amp;arch=x86_64</span></span>
<span class="line"><span>mirrorlist_expire = 86400</span></span>
<span class="line"><span>name = Extra Packages for Enterprise Linux 6 - Testing - x86_64</span></span>
<span class="line"><span>old_base_cache_dir =</span></span>
<span class="line"><span>password =</span></span>
<span class="line"><span>persistdir = /var/lib/yum/repos/x86_64/6/epel-testing</span></span>
<span class="line"><span>pkgdir = /var/cache/yum/x86_64/6/epel-testing/packages</span></span>
<span class="line"><span>proxy = False</span></span>
<span class="line"><span>proxy_dict =</span></span>
<span class="line"><span>proxy_password =</span></span>
<span class="line"><span>proxy_username =</span></span>
<span class="line"><span>repo_gpgcheck = False</span></span>
<span class="line"><span>retries = 10</span></span>
<span class="line"><span>skip_if_unavailable = False</span></span>
<span class="line"><span>ssl_check_cert_permissions = True</span></span>
<span class="line"><span>sslcacert =</span></span>
<span class="line"><span>sslclientcert =</span></span>
<span class="line"><span>sslclientkey =</span></span>
<span class="line"><span>sslverify = True</span></span>
<span class="line"><span>throttle = 0</span></span>
<span class="line"><span>timeout = 30.0</span></span>
<span class="line"><span>username =</span></span></code></pre></div><p>运行 <code>yum repolist</code> 命令来检查是否启用了 “epel-testing”。它被启用了，我可以从列表中看到它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum repolist</span></span>
<span class="line"><span>Loaded plugins: fastestmirror, security</span></span>
<span class="line"><span>Determining fastest mirrors</span></span>
<span class="line"><span>epel/metalink                                                                                                                                                         |  18 kB     00:00</span></span>
<span class="line"><span>epel-testing/metalink                                                                                                                                                 |  17 kB     00:00</span></span>
<span class="line"><span> * epel: mirror.us.leaseweb.net</span></span>
<span class="line"><span> * epel-testing: mirror.us.leaseweb.net</span></span>
<span class="line"><span> * ius: mirror.team-cymru.com</span></span>
<span class="line"><span>base                                                                                                                                                                  | 3.7 kB     00:00</span></span>
<span class="line"><span>centos-sclo-sclo                                                                                                                                                      | 2.9 kB     00:00</span></span>
<span class="line"><span>epel                                                                                                                                                                  | 4.7 kB     00:00</span></span>
<span class="line"><span>epel/primary_db                                                                                                                                                       | 6.0 MB     00:00</span></span>
<span class="line"><span>epel-testing                                                                                                                                                          | 4.7 kB     00:00</span></span>
<span class="line"><span>epel-testing/primary_db                                                                                                                                               | 368 kB     00:00</span></span>
<span class="line"><span>extras                                                                                                                                                                | 3.4 kB     00:00</span></span>
<span class="line"><span>ius                                                                                                                                                                   | 2.3 kB     00:00</span></span>
<span class="line"><span>ius/primary_db                                                                                                                                                        | 216 kB     00:00</span></span>
<span class="line"><span>updates                                                                                                                                                               | 3.4 kB     00:00</span></span>
<span class="line"><span>updates/primary_db                                                                                                                                                    | 8.1 MB     00:00 ...</span></span>
<span class="line"><span>repo id                                                                repo name                                                                                                       status</span></span>
<span class="line"><span>base                                                                   CentOS-6 - Base                                                                                                  6,706</span></span>
<span class="line"><span>centos-sclo-sclo                                                       CentOS-6 - SCLo sclo                                                                                               495</span></span>
<span class="line"><span>epel                                                                   Extra Packages for Enterprise Linux 6 - x86_64                                                                  12,509</span></span>
<span class="line"><span>epel-testing                                                           Extra Packages for Enterprise Linux 6 - Testing - x86_64                                                           809</span></span>
<span class="line"><span>extras                                                                 CentOS-6 - Extras                                                                                                   53</span></span>
<span class="line"><span>ius                                                                    IUS Community Packages for Enterprise Linux 6 - x86_64                                                             390</span></span>
<span class="line"><span>updates                                                                CentOS-6 - Updates                                                                                               1,288</span></span>
<span class="line"><span>repolist: 22,250</span></span></code></pre></div><p>如果你想同时启用多个仓库，使用以下格式。这个命令将启用 epel、epel-testing 和 ius 仓库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum-config-manager --enable epel epel-testing ius</span></span></code></pre></div><p>对于 Fedora 系统，运行下面的命令来启用仓库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf config-manager --set-enabled epel-testing</span></span></code></pre></div><h3 id="如何在系统中禁用一个仓库" tabindex="-1">如何在系统中禁用一个仓库 <a class="header-anchor" href="#如何在系统中禁用一个仓库" aria-label="Permalink to “如何在系统中禁用一个仓库”">​</a></h3><p>无论何时你在默认情况下添加一个新的仓库，它都会启用它们的稳定仓库，这就是为什么我们在运行 <code>yum repolist</code> 命令时获取了仓库信息。如果你不想使用仓库，那么可以通过下面的命令来禁用它。</p><p>为了验证这点，我们将要禁用 <code>epel-testing.repo</code> 和 <code>ius.repo</code>，运行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum-config-manager --disable epel-testing ius</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Loaded plugins: fastestmirror</span></span>
<span class="line"><span>==================================================================================== repo: epel-testing =====================================================================================</span></span>
<span class="line"><span>[epel-testing]</span></span>
<span class="line"><span>bandwidth = 0</span></span>
<span class="line"><span>base_persistdir = /var/lib/yum/repos/x86_64/6</span></span>
<span class="line"><span>baseurl =</span></span>
<span class="line"><span>cache = 0</span></span>
<span class="line"><span>cachedir = /var/cache/yum/x86_64/6/epel-testing</span></span>
<span class="line"><span>cost = 1000</span></span>
<span class="line"><span>enabled = 0</span></span>
<span class="line"><span>enablegroups = True</span></span>
<span class="line"><span>exclude =</span></span>
<span class="line"><span>failovermethod = priority</span></span>
<span class="line"><span>ftp_disable_epsv = False</span></span>
<span class="line"><span>gpgcadir = /var/lib/yum/repos/x86_64/6/epel-testing/gpgcadir</span></span>
<span class="line"><span>gpgcakey =</span></span>
<span class="line"><span>gpgcheck = True</span></span>
<span class="line"><span>gpgdir = /var/lib/yum/repos/x86_64/6/epel-testing/gpgdir</span></span>
<span class="line"><span>gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6</span></span>
<span class="line"><span>hdrdir = /var/cache/yum/x86_64/6/epel-testing/headers</span></span>
<span class="line"><span>http_caching = all</span></span>
<span class="line"><span>includepkgs =</span></span>
<span class="line"><span>keepalive = True</span></span>
<span class="line"><span>mdpolicy = group:primary</span></span>
<span class="line"><span>mediaid =</span></span>
<span class="line"><span>metadata_expire = 21600</span></span>
<span class="line"><span>metalink =</span></span>
<span class="line"><span>mirrorlist = https://mirrors.fedoraproject.org/metalink?repo=testing-epel6&amp;arch=x86_64</span></span>
<span class="line"><span>mirrorlist_expire = 86400</span></span>
<span class="line"><span>name = Extra Packages for Enterprise Linux 6 - Testing - x86_64</span></span>
<span class="line"><span>old_base_cache_dir =</span></span>
<span class="line"><span>password =</span></span>
<span class="line"><span>persistdir = /var/lib/yum/repos/x86_64/6/epel-testing</span></span>
<span class="line"><span>pkgdir = /var/cache/yum/x86_64/6/epel-testing/packages</span></span>
<span class="line"><span>proxy = False</span></span>
<span class="line"><span>proxy_dict =</span></span>
<span class="line"><span>proxy_password =</span></span>
<span class="line"><span>proxy_username =</span></span>
<span class="line"><span>repo_gpgcheck = False</span></span>
<span class="line"><span>retries = 10</span></span>
<span class="line"><span>skip_if_unavailable = False</span></span>
<span class="line"><span>ssl_check_cert_permissions = True</span></span>
<span class="line"><span>sslcacert =</span></span>
<span class="line"><span>sslclientcert =</span></span>
<span class="line"><span>sslclientkey =</span></span>
<span class="line"><span>sslverify = True</span></span>
<span class="line"><span>throttle = 0</span></span>
<span class="line"><span>timeout = 30.0</span></span>
<span class="line"><span>username =</span></span>
<span class="line"><span></span></span>
<span class="line"><span>========================================================================================= repo: ius =========================================================================================</span></span>
<span class="line"><span>[ius]</span></span>
<span class="line"><span>bandwidth = 0</span></span>
<span class="line"><span>base_persistdir = /var/lib/yum/repos/x86_64/6</span></span>
<span class="line"><span>baseurl =</span></span>
<span class="line"><span>cache = 0</span></span>
<span class="line"><span>cachedir = /var/cache/yum/x86_64/6/ius</span></span>
<span class="line"><span>cost = 1000</span></span>
<span class="line"><span>enabled = 0</span></span>
<span class="line"><span>enablegroups = True</span></span>
<span class="line"><span>exclude =</span></span>
<span class="line"><span>failovermethod = priority</span></span>
<span class="line"><span>ftp_disable_epsv = False</span></span>
<span class="line"><span>gpgcadir = /var/lib/yum/repos/x86_64/6/ius/gpgcadir</span></span>
<span class="line"><span>gpgcakey =</span></span>
<span class="line"><span>gpgcheck = True</span></span>
<span class="line"><span>gpgdir = /var/lib/yum/repos/x86_64/6/ius/gpgdir</span></span>
<span class="line"><span>gpgkey = file:///etc/pki/rpm-gpg/IUS-COMMUNITY-GPG-KEY</span></span>
<span class="line"><span>hdrdir = /var/cache/yum/x86_64/6/ius/headers</span></span>
<span class="line"><span>http_caching = all</span></span>
<span class="line"><span>includepkgs =</span></span>
<span class="line"><span>keepalive = True</span></span>
<span class="line"><span>mdpolicy = group:primary</span></span>
<span class="line"><span>mediaid =</span></span>
<span class="line"><span>metadata_expire = 21600</span></span>
<span class="line"><span>metalink =</span></span>
<span class="line"><span>mirrorlist = https://mirrors.iuscommunity.org/mirrorlist?repo=ius-centos6&amp;arch=x86_64&amp;protocol=http</span></span>
<span class="line"><span>mirrorlist_expire = 86400</span></span>
<span class="line"><span>name = IUS Community Packages for Enterprise Linux 6 - x86_64</span></span>
<span class="line"><span>old_base_cache_dir =</span></span>
<span class="line"><span>password =</span></span>
<span class="line"><span>persistdir = /var/lib/yum/repos/x86_64/6/ius</span></span>
<span class="line"><span>pkgdir = /var/cache/yum/x86_64/6/ius/packages</span></span>
<span class="line"><span>proxy = False</span></span>
<span class="line"><span>proxy_dict =</span></span>
<span class="line"><span>proxy_password =</span></span>
<span class="line"><span>proxy_username =</span></span>
<span class="line"><span>repo_gpgcheck = False</span></span>
<span class="line"><span>retries = 10</span></span>
<span class="line"><span>skip_if_unavailable = False</span></span>
<span class="line"><span>ssl_check_cert_permissions = True</span></span>
<span class="line"><span>sslcacert =</span></span>
<span class="line"><span>sslclientcert =</span></span>
<span class="line"><span>sslclientkey =</span></span>
<span class="line"><span>sslverify = True</span></span>
<span class="line"><span>throttle = 0</span></span>
<span class="line"><span>timeout = 30.0</span></span>
<span class="line"><span>username =</span></span></code></pre></div><p>运行 <code>yum repolist</code> 命令检查 “epel-testing” 和 “ius” 仓库是否被禁用。它被禁用了，我不能看到那些仓库，除了 “epel”。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum repolist</span></span>
<span class="line"><span>Loaded plugins: fastestmirror, security</span></span>
<span class="line"><span>Loading mirror speeds from cached hostfile</span></span>
<span class="line"><span> * epel: mirror.us.leaseweb.net</span></span>
<span class="line"><span>repo id                                                                     repo name                                                                                                  status</span></span>
<span class="line"><span>base                                                                        CentOS-6 - Base                                                                                             6,706</span></span>
<span class="line"><span>centos-sclo-sclo                                                            CentOS-6 - SCLo sclo                                                                                          495</span></span>
<span class="line"><span>epel                                        Extra Packages for Enterprise Linux 6 - x86_64                                              12,505</span></span>
<span class="line"><span>extras                                                                      CentOS-6 - Extras                                                                                              53</span></span>
<span class="line"><span>updates                                                                     CentOS-6 - Updates                                                                                          1,288</span></span>
<span class="line"><span>repolist: 21,051</span></span></code></pre></div><p>或者，我们可以运行以下命令查看详细信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum repolist all | grep &quot;epel*\\|ius*&quot;</span></span>
<span class="line"><span> * epel: mirror.steadfast.net</span></span>
<span class="line"><span>epel                       Extra Packages for Enterprise Linux 6 enabled: 12,509</span></span>
<span class="line"><span>epel-debuginfo             Extra Packages for Enterprise Linux 6 disabled</span></span>
<span class="line"><span>epel-source                Extra Packages for Enterprise Linux 6 disabled</span></span>
<span class="line"><span>epel-testing               Extra Packages for Enterprise Linux 6 disabled</span></span>
<span class="line"><span>epel-testing-debuginfo     Extra Packages for Enterprise Linux 6 disabled</span></span>
<span class="line"><span>epel-testing-source        Extra Packages for Enterprise Linux 6 disabled</span></span>
<span class="line"><span>ius                        IUS Community Packages for Enterprise disabled</span></span>
<span class="line"><span>ius-archive                IUS Community Packages for Enterprise disabled</span></span>
<span class="line"><span>ius-archive-debuginfo      IUS Community Packages for Enterprise disabled</span></span>
<span class="line"><span>ius-archive-source         IUS Community Packages for Enterprise disabled</span></span>
<span class="line"><span>ius-debuginfo              IUS Community Packages for Enterprise disabled</span></span>
<span class="line"><span>ius-dev                    IUS Community Packages for Enterprise disabled</span></span>
<span class="line"><span>ius-dev-debuginfo          IUS Community Packages for Enterprise disabled</span></span>
<span class="line"><span>ius-dev-source             IUS Community Packages for Enterprise disabled</span></span>
<span class="line"><span>ius-source                 IUS Community Packages for Enterprise disabled</span></span>
<span class="line"><span>ius-testing                IUS Community Packages for Enterprise disabled</span></span>
<span class="line"><span>ius-testing-debuginfo      IUS Community Packages for Enterprise disabled</span></span>
<span class="line"><span>ius-testing-source         IUS Community Packages for Enterprise disabled</span></span></code></pre></div><p>对于 Fedora 系统，运行以下命令来启用一个仓库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf config-manager --set-disabled epel-testing</span></span></code></pre></div><p>或者，可以通过手动编辑适当的 repo 文件来完成。为此，打开相应的 repo 文件并将值从 <code>enabled=0</code> 改为 <code>enabled=1</code>（启用仓库）或从 <code>enabled=1</code> 变为 <code>enabled=0</code>（禁用仓库）。</p><p>即从：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[epel]</span></span>
<span class="line"><span>name=Extra Packages for Enterprise Linux 6 - $basearch</span></span>
<span class="line"><span>#baseurl=http://download.fedoraproject.org/pub/epel/6/$basearch</span></span>
<span class="line"><span>mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=epel-6&amp;arch=$basearch</span></span>
<span class="line"><span>failovermethod=priority</span></span>
<span class="line"><span>enabled=0</span></span>
<span class="line"><span>gpgcheck=1</span></span>
<span class="line"><span>gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6</span></span></code></pre></div><p>改为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[epel]</span></span>
<span class="line"><span>name=Extra Packages for Enterprise Linux 6 - $basearch</span></span>
<span class="line"><span>#baseurl=http://download.fedoraproject.org/pub/epel/6/$basearch</span></span>
<span class="line"><span>mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=epel-6&amp;arch=$basearch</span></span>
<span class="line"><span>failovermethod=priority</span></span>
<span class="line"><span>enabled=1</span></span>
<span class="line"><span>gpgcheck=1</span></span>
<span class="line"><span>gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6</span></span></code></pre></div><hr>`,50)),n("p",null,[s[5]||(s[5]=a("via: ",-1)),e(p,{href:"https://www.2daygeek.com/how-to-add-enable-disable-a-repository-dnf-yum-config-manager-on-linux/"},{default:i(()=>[...s[4]||(s[4]=[a("https://www.2daygeek.com/how-to-add-enable-disable-a-repository-dnf-yum-config-manager-on-linux/",-1)])]),_:1})]),n("p",null,[s[10]||(s[10]=a("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/prakash/"},{default:i(()=>[...s[6]||(s[6]=[a("Prakash Subramanian",-1)])]),_:1}),s[11]||(s[11]=a(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[7]||(s[7]=[a("lujun9972",-1)])]),_:1}),s[12]||(s[12]=a(" 译者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:i(()=>[...s[8]||(s[8]=[a("MjSeven",-1)])]),_:1}),s[13]||(s[13]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[9]||(s[9]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[16]||(s[16]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[14]||(s[14]=[a("LCTT",-1)])]),_:1}),s[17]||(s[17]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[15]||(s[15]=[a("Linux中国",-1)])]),_:1}),s[18]||(s[18]=a(" 荣誉推出",-1))])])}const C=l(d,[["render",g]]);export{x as __pageData,C as default};
