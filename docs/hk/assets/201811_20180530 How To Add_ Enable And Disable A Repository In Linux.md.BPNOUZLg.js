import{_ as l,a0 as t,w as r,s as o,I as n,x as a,a1 as e,A as i,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"如何在 CentOS 中添加、啓用和禁用一個倉庫 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 中添加、啓用和禁用一個倉庫 | LCTT (201811) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 中添加、啓用和禁用一個倉庫 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 中添加、啓用和禁用一個倉庫 | LCTT (201811) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201811/20180530 How To Add, Enable And Disable A Repository In Linux","title":"如何在 CentOS 中添加、啓用和禁用一個倉庫","tag":"201811","desc":""},"relativePath":"201811/20180530 How To Add, Enable And Disable A Repository In Linux.md","filePath":"[post].md"}'),d={name:"201811/20180530 How To Add, Enable And Disable A Repository In Linux.md"};function g(u,s,h,k,m,b){const p=t("Link");return r(),o("div",null,[s[19]||(s[19]=n("h1",{id:"如何在-centos-中添加、啓用和禁用一個倉庫",tabindex:"-1"},[a("如何在 CentOS 中添加、啓用和禁用一個倉庫 "),n("a",{class:"header-anchor",href:"#如何在-centos-中添加、啓用和禁用一個倉庫","aria-label":"Permalink to “如何在 CentOS 中添加、啓用和禁用一個倉庫”"},"​")],-1)),s[20]||(s[20]=n("p",null,"在基於 RPM 的系統上，例如 RHEL、CentOS 等，我們中的許多人使用 yum 包管理器來管理軟件的安裝、刪除、更新、搜索等。",-1)),s[21]||(s[21]=n("p",null,"Linux 發行版的大部分軟件都來自發行版官方倉庫。官方倉庫包含大量免費和開源的應用和軟件。它很容易安裝和使用。",-1)),s[22]||(s[22]=n("p",null,"由於一些限制和專有問題，基於 RPM 的發行版在其官方倉庫中沒有提供某些包。另外，出於穩定性考慮，它不會提供最新版本的核心包。",-1)),s[23]||(s[23]=n("p",null,"為了克服這種情況，我們需要安裝或啓用需要的第三方倉庫。對於基於 RPM 的系統，有許多第三方倉庫可用，但所建議使用的倉庫很少，因為這些不會替換大量的基礎包。",-1)),s[24]||(s[24]=n("p",null,"建議閲讀：",-1)),n("ul",null,[n("li",null,[e(p,{href:"https://www.2daygeek.com/yum-command-examples-manage-packages-rhel-centos-systems/"},{default:i(()=>[...s[0]||(s[0]=[a("在 RHEL/CentOS 系統中使用 YUM 命令管理包",-1)])]),_:1})]),n("li",null,[e(p,{href:"https://www.2daygeek.com/dnf-command-examples-manage-packages-fedora-system/"},{default:i(()=>[...s[1]||(s[1]=[a("在 Fedora 系統中使用 DNF (YUM 的分支) 命令來管理包",-1)])]),_:1})]),n("li",null,[e(p,{href:"https://www.2daygeek.com/list-of-command-line-package-manager-for-linux/"},{default:i(()=>[...s[2]||(s[2]=[a("命令列包管理器和用法列表",-1)])]),_:1})]),n("li",null,[e(p,{href:"https://www.2daygeek.com/list-of-graphical-frontend-tool-for-linux-package-manager/"},{default:i(()=>[...s[3]||(s[3]=[a("Linux 包管理器的圖形化工具",-1)])]),_:1})])]),s[25]||(s[25]=c(`<p>這可以在基於 RPM 的系統上完成，比如 RHEL, CentOS, OEL, Fedora 等。</p><ul><li>Fedora 系統使用 <code>dnf config-manager [options] [section …]</code></li><li>其它基於 RPM 的系統使用 <code>yum-config-manager [options] [section …]</code></li></ul><h3 id="如何列出啓用的倉庫" tabindex="-1">如何列出啓用的倉庫 <a class="header-anchor" href="#如何列出啓用的倉庫" aria-label="Permalink to “如何列出啓用的倉庫”">​</a></h3><p>只需運行以下命令即可檢查系統上啓用的倉庫列表。</p><p>對於 CentOS/RHEL/OLE 系統：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum repolist</span></span>
<span class="line"><span>Loaded plugins: fastestmirror, security</span></span>
<span class="line"><span>Loading mirror speeds from cached hostfile</span></span>
<span class="line"><span>repo id                                                       repo name                                                                 status</span></span>
<span class="line"><span>base                                                          CentOS-6 - Base                                                           6,706</span></span>
<span class="line"><span>extras                                                        CentOS-6 - Extras                                                            53</span></span>
<span class="line"><span>updates                                                       CentOS-6 - Updates                                                        1,255</span></span>
<span class="line"><span>repolist: 8,014</span></span></code></pre></div><p>對於 Fedora 系統：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf repolist</span></span></code></pre></div><h3 id="如何在系統中添加一個新倉庫" tabindex="-1">如何在系統中添加一個新倉庫 <a class="header-anchor" href="#如何在系統中添加一個新倉庫" aria-label="Permalink to “如何在系統中添加一個新倉庫”">​</a></h3><p>每個倉庫通常都提供自己的 <code>.repo</code> 文件。要將此類倉庫添加到系統中，使用 root 用户運行以下命令。在我們的例子中將添加 EPEL 倉庫 和 IUS 社區倉庫，見下文。</p><p>但是沒有 <code>.repo</code> 文件可用於這些倉庫。因此，我們使用以下方法進行安裝。</p><p>對於 EPEL 倉庫，因為它可以從 CentOS 額外倉庫獲得，所以運行以下命令來安裝它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum install epel-release -y</span></span></code></pre></div><p>對於 IUS 社區倉庫，運行以下 bash 腳本來安裝。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># curl &#39;https://setup.ius.io/&#39; -o setup-ius.sh</span></span>
<span class="line"><span># sh setup-ius.sh</span></span></code></pre></div><p>如果你有 <code>.repo</code> 文件，在 RHEL/CentOS/OEL 中，只需運行以下命令來添加一個倉庫。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum-config-manager --add-repo http://www.example.com/example.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Loaded plugins: product-id, refresh-packagekit, subscription-manager</span></span>
<span class="line"><span>adding repo from: http://www.example.com/example.repo</span></span>
<span class="line"><span>grabbing file http://www.example.com/example.repo to /etc/yum.repos.d/example.repo</span></span>
<span class="line"><span>example.repo                                             |  413 B     00:00</span></span>
<span class="line"><span>repo saved to /etc/yum.repos.d/example.repo</span></span></code></pre></div><p>對於 Fedora 系統，運行以下命令來添加一個倉庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf config-manager --add-repo http://www.example.com/example.repo</span></span>
<span class="line"><span>adding repo from: http://www.example.com/example.repo</span></span></code></pre></div><p>如果在添加這些倉庫之後運行 <code>yum repolist</code> 命令，你就可以看到新添加的倉庫了。Yes，我看到了。</p><p>注意：每當運行 <code>yum repolist</code> 命令時，該命令會自動從相應的倉庫獲取更新，並將緩存保存在本地系統中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum repolist</span></span>
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
<span class="line"><span>repolist: 20,909</span></span></code></pre></div><p>每個倉庫都有多個渠道，比如測試（Testing）、開發（Dev）和存檔（Archive）等。通過導航到倉庫文件位置，你可以更好地理解這一點。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ls -lh /etc/yum.repos.d</span></span>
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
<span class="line"><span>-rw-r--r-- 1 root root 1.2K Feb 23 2017 ius-testing.repo</span></span></code></pre></div><h3 id="如何在系統中啓用一個倉庫" tabindex="-1">如何在系統中啓用一個倉庫 <a class="header-anchor" href="#如何在系統中啓用一個倉庫" aria-label="Permalink to “如何在系統中啓用一個倉庫”">​</a></h3><p>當你在默認情況下添加一個新倉庫時，它將啓用它們的穩定倉庫，這就是為什麼我們在運行 <code>yum repolist</code> 命令時獲取了倉庫信息。在某些情況下，如果你希望啓用它們的測試、開發或存檔倉庫，使用以下命令。另外，我們還可以使用此命令啓用任何禁用的倉庫。</p><p>為了驗證這一點，我們將啓用 <code>epel-testing.repo</code>，運行下面的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum-config-manager --enable epel-testing</span></span>
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
<span class="line"><span>username =</span></span></code></pre></div><p>運行 <code>yum repolist</code> 命令來檢查是否啓用了 “epel-testing”。它被啓用了，我可以從列表中看到它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum repolist</span></span>
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
<span class="line"><span>repolist: 22,250</span></span></code></pre></div><p>如果你想同時啓用多個倉庫，使用以下格式。這個命令將啓用 epel、epel-testing 和 ius 倉庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum-config-manager --enable epel epel-testing ius</span></span></code></pre></div><p>對於 Fedora 系統，運行下面的命令來啓用倉庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf config-manager --set-enabled epel-testing</span></span></code></pre></div><h3 id="如何在系統中禁用一個倉庫" tabindex="-1">如何在系統中禁用一個倉庫 <a class="header-anchor" href="#如何在系統中禁用一個倉庫" aria-label="Permalink to “如何在系統中禁用一個倉庫”">​</a></h3><p>無論何時你在默認情況下添加一個新的倉庫，它都會啓用它們的穩定倉庫，這就是為什麼我們在運行 <code>yum repolist</code> 命令時獲取了倉庫信息。如果你不想使用倉庫，那麼可以通過下面的命令來禁用它。</p><p>為了驗證這點，我們將要禁用 <code>epel-testing.repo</code> 和 <code>ius.repo</code>，運行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum-config-manager --disable epel-testing ius</span></span>
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
<span class="line"><span>username =</span></span></code></pre></div><p>運行 <code>yum repolist</code> 命令檢查 “epel-testing” 和 “ius” 倉庫是否被禁用。它被禁用了，我不能看到那些倉庫，除了 “epel”。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum repolist</span></span>
<span class="line"><span>Loaded plugins: fastestmirror, security</span></span>
<span class="line"><span>Loading mirror speeds from cached hostfile</span></span>
<span class="line"><span> * epel: mirror.us.leaseweb.net</span></span>
<span class="line"><span>repo id                                                                     repo name                                                                                                  status</span></span>
<span class="line"><span>base                                                                        CentOS-6 - Base                                                                                             6,706</span></span>
<span class="line"><span>centos-sclo-sclo                                                            CentOS-6 - SCLo sclo                                                                                          495</span></span>
<span class="line"><span>epel                                        Extra Packages for Enterprise Linux 6 - x86_64                                              12,505</span></span>
<span class="line"><span>extras                                                                      CentOS-6 - Extras                                                                                              53</span></span>
<span class="line"><span>updates                                                                     CentOS-6 - Updates                                                                                          1,288</span></span>
<span class="line"><span>repolist: 21,051</span></span></code></pre></div><p>或者，我們可以運行以下命令查看詳細信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum repolist all | grep &quot;epel*\\|ius*&quot;</span></span>
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
<span class="line"><span>ius-testing-source         IUS Community Packages for Enterprise disabled</span></span></code></pre></div><p>對於 Fedora 系統，運行以下命令來啓用一個倉庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf config-manager --set-disabled epel-testing</span></span></code></pre></div><p>或者，可以通過手動編輯適當的 repo 文件來完成。為此，打開相應的 repo 文件並將值從 <code>enabled=0</code> 改為 <code>enabled=1</code>（啓用倉庫）或從 <code>enabled=1</code> 變為 <code>enabled=0</code>（禁用倉庫）。</p><p>即從：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[epel]</span></span>
<span class="line"><span>name=Extra Packages for Enterprise Linux 6 - $basearch</span></span>
<span class="line"><span>#baseurl=http://download.fedoraproject.org/pub/epel/6/$basearch</span></span>
<span class="line"><span>mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=epel-6&amp;arch=$basearch</span></span>
<span class="line"><span>failovermethod=priority</span></span>
<span class="line"><span>enabled=0</span></span>
<span class="line"><span>gpgcheck=1</span></span>
<span class="line"><span>gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6</span></span></code></pre></div><p>改為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[epel]</span></span>
<span class="line"><span>name=Extra Packages for Enterprise Linux 6 - $basearch</span></span>
<span class="line"><span>#baseurl=http://download.fedoraproject.org/pub/epel/6/$basearch</span></span>
<span class="line"><span>mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=epel-6&amp;arch=$basearch</span></span>
<span class="line"><span>failovermethod=priority</span></span>
<span class="line"><span>enabled=1</span></span>
<span class="line"><span>gpgcheck=1</span></span>
<span class="line"><span>gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6</span></span></code></pre></div><hr>`,50)),n("p",null,[s[5]||(s[5]=a("via: ",-1)),e(p,{href:"https://www.2daygeek.com/how-to-add-enable-disable-a-repository-dnf-yum-config-manager-on-linux/"},{default:i(()=>[...s[4]||(s[4]=[a("https://www.2daygeek.com/how-to-add-enable-disable-a-repository-dnf-yum-config-manager-on-linux/",-1)])]),_:1})]),n("p",null,[s[10]||(s[10]=a("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/prakash/"},{default:i(()=>[...s[6]||(s[6]=[a("Prakash Subramanian",-1)])]),_:1}),s[11]||(s[11]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[7]||(s[7]=[a("lujun9972",-1)])]),_:1}),s[12]||(s[12]=a(" 譯者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:i(()=>[...s[8]||(s[8]=[a("MjSeven",-1)])]),_:1}),s[13]||(s[13]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[9]||(s[9]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[16]||(s[16]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[14]||(s[14]=[a("LCTT",-1)])]),_:1}),s[17]||(s[17]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[15]||(s[15]=[a("Linux中國",-1)])]),_:1}),s[18]||(s[18]=a(" 榮譽推出",-1))])])}const C=l(d,[["render",g]]);export{x as __pageData,C as default};
