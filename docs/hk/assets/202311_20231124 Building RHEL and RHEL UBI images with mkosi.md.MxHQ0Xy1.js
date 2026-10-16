import{_ as t,a0 as o,w as d,s as r,I as a,x as n,a1 as p,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"使用 mkosi 構建 RHEL 和 RHEL UBI 鏡像 | LCTT x X-CMD","titleTemplate":false,"description":"使用 mkosi 構建 RHEL 和 RHEL UBI 鏡像 | LCTT (202311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 mkosi 構建 RHEL 和 RHEL UBI 鏡像 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 mkosi 構建 RHEL 和 RHEL UBI 鏡像 | LCTT (202311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202311/20231124 Building RHEL and RHEL UBI images with mkosi","title":"使用 mkosi 構建 RHEL 和 RHEL UBI 鏡像","tag":"202311","desc":""},"relativePath":"202311/20231124 Building RHEL and RHEL UBI images with mkosi.md","filePath":"[post].md"}'),c={name:"202311/20231124 Building RHEL and RHEL UBI images with mkosi.md"};function u(g,s,h,m,k,b){const e=o("Link");return d(),r("div",null,[s[47]||(s[47]=a("h1",{id:"使用-mkosi-構建-rhel-和-rhel-ubi-鏡像",tabindex:"-1"},[n("使用 mkosi 構建 RHEL 和 RHEL UBI 鏡像 "),a("a",{class:"header-anchor",href:"#使用-mkosi-構建-rhel-和-rhel-ubi-鏡像","aria-label":"Permalink to “使用 mkosi 構建 RHEL 和 RHEL UBI 鏡像”"},"​")],-1)),s[48]||(s[48]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202311/27/232213c9y5jt85t7vj8men.png",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("mkosi 是一個輕量級工具，用於從發行版軟件包構建鏡像。本文介紹如何使用 mkosi 從 RHEL 和 RHEL ",-1)),a("ruby",null,[p(e,{href:"https://uapi-group.org/specifications/specs/discoverable_disk_image/"},{default:i(()=>[...s[0]||(s[0]=[n("通用基礎鏡像",-1)])]),_:1}),s[1]||(s[1]=a("rt",null,"Universal Base Image",-1))]),s[3]||(s[3]=n("（UBI）的軟件包構建鏡像。RHEL UBI 是 RHEL 的一個子集，可以在沒有訂閲的情況下免費使用。",-1))]),s[49]||(s[49]=a("h3",{id:"mkosi-特性",tabindex:"-1"},[n("mkosi 特性 "),a("a",{class:"header-anchor",href:"#mkosi-特性","aria-label":"Permalink to “mkosi 特性”"},"​")],-1)),a("p",null,[s[6]||(s[6]=n("mkosi 支持一些輸出格式，但最重要的是 ",-1)),a("ruby",null,[p(e,{href:"https://uapi-group.org/specifications/specs/discoverable_disk_image/"},{default:i(()=>[...s[4]||(s[4]=[n("可發現磁盤鏡像",-1)])]),_:1}),s[5]||(s[5]=a("rt",null,"Discoverable Disk Images",-1))]),s[7]||(s[7]=n("（DDI）。同一個 DDI 可用於引導容器、或運行在虛擬機、抑或是複製到 U 盤以引導真實物理機，然後從 U 盤複製到磁盤以引導系統。該鏡像具有標準化的佈局和描述其用途的元數據。",-1))]),s[50]||(s[50]=l("<p>mkosi 依賴其他工具來完成大部分工作：使用 <code>systemd-repart</code> 在磁盤鏡像上創建分區，使用 <code>mkfs.btrfs</code> / <code>mkfs.ext4</code> / <code>mkfs.xfs</code> 等創建文件系統，並使用 <code>dnf</code> / <code>apt</code> / <code>pacman</code> / <code>zypper</code> 下載和解壓包。</p><p>mkosi 支持一系列發行版：Debian 和 Ubuntu、Arch Linux、openSUSE，當然還包括 Fedora、CentOS Stream 及其衍生版本，以及最近的 RHEL UBI 和 RHEL 。由於實際的“重活”是由其他工具完成的，mkosi 可以進行交叉構建。這意味着可以使用一個發行版構建各種其他發行版的鏡像。唯一的要求是主機上安裝了相應的工具。Fedora 有原生的 <code>apt</code>、<code>pacman</code> 和 <code>zypper</code>，因此它為使用 mkosi 構建任何其他發行版提供了良好的基礎。</p><p>它還有一些有趣的功能：鏡像可以由非特權用户創建，或者在沒有設備文件的容器中創建，特別是沒有對迴環設備的訪問權限。它還可以在沒有特權的情況下將這些鏡像啓動為虛擬機（使用 <code>qemu</code>）。</p><p>配置是聲明性的，非常容易創建。使用 <code>systemd-repart</code> 創建磁盤分區，並使用 <code>repart.d</code> 配置文件定義應該如何完成此操作。</p>",4)),a("p",null,[s[10]||(s[10]=n("有關更多詳細信息，請參見 Daan DeMeyer 在 All Systems Go 大會上的兩個演講：《",-1)),p(e,{href:"https://media.ccc.de/v/all-systems-go-2023-191-systemd-repart-building-discoverable-disk-images"},{default:i(()=>[...s[8]||(s[8]=[n("systemd-repart: Building Discoverable Disk Images",-1)])]),_:1}),s[11]||(s[11]=n("》 和 《",-1)),p(e,{href:"https://media.ccc.de/v/all-systems-go-2023-190-mkosi-building-bespoke-operating-system-images"},{default:i(()=>[...s[9]||(s[9]=[n("mkosi: Building Bespoke Operating System Images",-1)])]),_:1}),s[12]||(s[12]=n("》。",-1))]),s[51]||(s[51]=l(`<h3 id="項目目標" tabindex="-1">項目目標 <a class="header-anchor" href="#項目目標" aria-label="Permalink to “項目目標”">​</a></h3><p>mkosi 的一個目標是允許對軟件項目進行針對不同發行版的測試。它將為一個發行版創建一個鏡像（使用該發行版的軟件包），然後將軟件項目編譯並安裝到該鏡像中，插入不屬於軟件包的額外文件。但是，首個階段，即從軟件包創建鏡像的過程，本身就是有用的。這是我們將首先展示的內容。</p><p>我們 [^1] 最近添加了對 RHEL 和 RHEL UBI 的支持。讓我們從 RHEL UBI 開始，利用發行版軟件包創建鏡像。</p><p>請注意，下面的示例要求 mkosi 19，而且不適用於更早的版本。</p><h3 id="帶有-shell-的基本-rhel-ubi-鏡像" tabindex="-1">帶有 Shell 的基本 RHEL UBI 鏡像 <a class="header-anchor" href="#帶有-shell-的基本-rhel-ubi-鏡像" aria-label="Permalink to “帶有 Shell 的基本 RHEL UBI 鏡像”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir -p mkosi.cache</span></span>
<span class="line"><span>$ mkosi \\</span></span>
<span class="line"><span>    -d rhel-ubi \\</span></span>
<span class="line"><span>    -t directory \\</span></span>
<span class="line"><span>    -p bash,coreutils,util-linux,systemd,rpm \\</span></span>
<span class="line"><span>    --autologin</span></span></code></pre></div><p>上面的命令指定了發行版 <code>rhel-ubi</code>，輸出格式 <code>directory</code>，並請求安裝軟件包 <code>bash</code>、<code>coreutils</code>、…、<code>rpm</code>。<code>rpm</code> 通常不需要放到鏡像內部，但在這裏用於內省會很有用。我們還啓用了以 root 用户自動登錄。</p><p>在啓動構建之前，我們創建了緩存目錄 <code>mkosi.cache</code>。當存在緩存目錄時，mkosi 會自動使用它來持久化下載的 RPM 包。這將使相同軟件包集合的後續調用速度更快。</p><p>然後，我們可以使用 <code>systemd-nspawn</code> 將此鏡像作為容器啓動：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkosi \\</span></span>
<span class="line"><span>    -d rhel-ubi \\</span></span>
<span class="line"><span>    -t directory \\</span></span>
<span class="line"><span>    boot</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemd 252-14.el9_2.3 running in system mode (+PAM +AUDIT +SELINUX -APPARMOR +IMA +SMACK +SECCOMP +GCRYPT +GNUTLS +OPENSSL +ACL +BLKID +CURL +ELFUTILS -FIDO2 +IDN2 -IDN -IPTC +KMOD +LIBCRYPTSETUP +LIBFDISK +PCRE2 -PWQUALITY +P11KIT -QRENCODE +TPM2 +BZIP2 +LZ4 +XZ +ZLIB +ZSTD -BPF_FRAMEWORK +XKBCOMMON +UTMP +SYSVINIT default-hierarchy=unified)</span></span>
<span class="line"><span>Detected virtualization systemd-nspawn.</span></span>
<span class="line"><span>Detected architecture x86-64.</span></span>
<span class="line"><span>Detected first boot.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Red Hat Enterprise Linux 9.2 (Plow)</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>[ OK ] Created slice Slice /system/getty.</span></span>
<span class="line"><span>[ OK ] Created slice Slice /system/modprobe.</span></span>
<span class="line"><span>[ OK ] Created slice User and Session Slice.</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>[ OK ] Started User Login Management.</span></span>
<span class="line"><span>[ OK ] Reached target Multi-User System.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Red Hat Enterprise Linux 9.2 (Plow)</span></span>
<span class="line"><span>Kernel 6.5.6-300.fc39.x86_64 on an x86_64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>image login: root (automatic login)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@image ~]# rpm -q rpm systemd</span></span>
<span class="line"><span>rpm-4.16.1.3-22.el9.x86_64</span></span>
<span class="line"><span>systemd-252-14.el9_2.3.x86_64</span></span></code></pre></div><p>正如前面提到的，此鏡像可以用於啓動虛擬機。但在此設置下，這是不可能的 —— 我們的鏡像沒有內核。事實上，RHEL UBI 根本不提供內核，因此我們無法使用它進行引導（無論是在虛擬機上還是在裸機上）。</p><h3 id="創建鏡像" tabindex="-1">創建鏡像 <a class="header-anchor" href="#創建鏡像" aria-label="Permalink to “創建鏡像”">​</a></h3><p>我一開始説是要創建鏡像，但到目前為止我們只有一個目錄。讓我們開始實際創建一個鏡像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkosi \\</span></span>
<span class="line"><span>    -d rhel-ubi \\</span></span>
<span class="line"><span>    -t disk \\</span></span>
<span class="line"><span>    -p bash,coreutils,util-linux,systemd,rpm \\</span></span>
<span class="line"><span>    --autologin</span></span></code></pre></div><p>這將生成 <code>image.raw</code>，一個帶有 GPT 分區表和單個根分區（用於本機架構）的磁盤鏡像。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemd-dissect image.raw</span></span>
<span class="line"><span>Name: image.raw</span></span>
<span class="line"><span>Size: 301.0M</span></span>
<span class="line"><span>Sec. Size: 512</span></span>
<span class="line"><span>Arch.: x86-64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Image UUID: dcbd6499-409e-4b62-b251-e0dd15e446d5</span></span>
<span class="line"><span>OS Release: NAME=Red Hat Enterprise Linux</span></span>
<span class="line"><span>VERSION=9.2 (Plow)</span></span>
<span class="line"><span>ID=rhel</span></span>
<span class="line"><span>ID_LIKE=fedora</span></span>
<span class="line"><span>VERSION_ID=9.2</span></span>
<span class="line"><span>PLATFORM_ID=platform:el9</span></span>
<span class="line"><span>PRETTY_NAME=Red Hat Enterprise Linux 9.2 (Plow)</span></span>
<span class="line"><span>ANSI_COLOR=0;31</span></span>
<span class="line"><span>LOGO=fedora-logo-icon</span></span>
<span class="line"><span>CPE_NAME=cpe:/o:redhat:enterprise_linux:9::baseos</span></span>
<span class="line"><span>HOME_URL=https://www.redhat.com/</span></span>
<span class="line"><span>DOCUMENTATION_URL=https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9</span></span>
<span class="line"><span>BUG_REPORT_URL=https://bugzilla.redhat.com/</span></span>
<span class="line"><span>REDHAT_BUGZILLA_PRODUCT=Red Hat Enterprise Linux 9</span></span>
<span class="line"><span>REDHAT_BUGZILLA_PRODUCT_VERSION=9.2</span></span>
<span class="line"><span>REDHAT_SUPPORT_PRODUCT=Red Hat Enterprise Linux</span></span>
<span class="line"><span>REDHAT_SUPPORT_PRODUCT_VERSION=9.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Use As: ✗ bootable system for UEFI</span></span>
<span class="line"><span>        ✓ bootable system for container</span></span>
<span class="line"><span>        ✗ portable service</span></span>
<span class="line"><span>        ✗ initrd</span></span>
<span class="line"><span>        ✗ sysext extension for system</span></span>
<span class="line"><span>        ✗ sysext extension for initrd</span></span>
<span class="line"><span>        ✗ sysext extension for portable service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RW DESIGNATOR PARTITION UUID PARTITION LABEL FSTYPE ARCHITECTURE VERITY GROWFS NODE PARTNO</span></span>
<span class="line"><span>rw root 1236e211-4729-4561-a6fc-9ef8f18b828f root-x86-64 xfs x86-64 no yes /dev/loop0p1 1</span></span></code></pre></div><p>好的，我們現在有一個鏡像，鏡像中包含了一些來自 RHEL UBI 軟件包的內容。我們如何在其上加點我們自己的東西呢？</p><h3 id="使用自己的文件擴展鏡像" tabindex="-1">使用自己的文件擴展鏡像 <a class="header-anchor" href="#使用自己的文件擴展鏡像" aria-label="Permalink to “使用自己的文件擴展鏡像”">​</a></h3><p>有幾種方法可以擴展鏡像，包括從頭開始編譯某些東西。但在那之前，讓我們做一些更簡單的事情，將一個現成的文件系統注入到鏡像中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir -p mkosi.extra/srv/www/content</span></span>
<span class="line"><span>$ cat &gt;mkosi.extra/srv/www/content/index.html &lt;&lt;&#39;EOF&#39;</span></span>
<span class="line"><span>&lt;h1&gt;Hello, World!&lt;/h1&gt;</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>現在，該鏡像將包含 <code>/srv/www/content/index.html</code>。</p><p>這種方法用於注入額外的配置或簡單的程序。</p><h3 id="從源代碼構建" tabindex="-1">從源代碼構建 <a class="header-anchor" href="#從源代碼構建" aria-label="Permalink to “從源代碼構建”">​</a></h3><p>現在讓我們過一遍完整流程，從源代碼構建一些東西。例如，一個簡單的 Meson 項目，有一個單獨的 C 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat &gt;hello.c &lt;&lt;&#39;EOF&#39;</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char **argv) {</span></span>
<span class="line"><span>    char buf[1024];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    FILE *f = fopen(&quot;/srv/www/content/index.html&quot;, &quot;re&quot;);</span></span>
<span class="line"><span>    size_t n = fread(buf, 1, sizeof buf, f);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fwrite(buf, 1, n, stdout);</span></span>
<span class="line"><span>    fclose(f);</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ cat &gt;meson.build &lt;&lt;&#39;EOF&#39;</span></span>
<span class="line"><span>project(&#39;hello&#39;, &#39;c&#39;)</span></span>
<span class="line"><span>executable(&#39;hello&#39;, &#39;hello.c&#39;,</span></span>
<span class="line"><span>            install: true)</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat &gt;mkosi.build &lt;&lt;&#39;EOF&#39;</span></span>
<span class="line"><span>set -ex</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkosi-as-caller rm -rf &quot;$BUILDDIR/build&quot;</span></span>
<span class="line"><span>mkosi-as-caller meson setup &quot;$BUILDDIR/build&quot; &quot;$SRCDIR&quot;</span></span>
<span class="line"><span>mkosi-as-caller meson compile -C &quot;$BUILDDIR/build&quot;</span></span>
<span class="line"><span>meson install -C &quot;$BUILDDIR/build&quot; --no-rebuild</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>$ chmod +x mkosi.build</span></span></code></pre></div><p>總結一下：我們有一些源代碼（<code>hello.c</code>），一個構建系統配置文件（<code>meson.build</code>），以及一個由 mkosi 調用的膠水腳本（<code>mkosi.build</code>）。對於實際的項目，也會有相同的元素，只是更加複雜。</p><p>這個腳本需要一些解釋。mkosi 在創建鏡像時使用用户命名空間。這允許包管理器（例如 <code>dnf</code>）安裝由不同用户擁有的文件，即使它是由一個普通非特權用户調用的。我們使用 <code>mkosi-as-caller</code> 切換回調用者以進行編譯。這樣，在 <code>$BUILDDIR</code> 下編譯期間創建的文件將由調用者擁有。</p><p>現在讓我們使用我們的程序構建鏡像。與之前的調用相比，我們需要額外的軟件包：<code>meson</code>、<code>gcc</code>。由於我們現在有了構建腳本，mkosi 將執行兩個構建階段：首先創建一個構建鏡像，並在其中調用構建腳本，將安裝產物存儲在一個臨時目錄中，然後構建最終鏡像，並將安裝產物注入其中。（mkosi 設置 <code>$DESTDIR</code>，<code>meson install</code> 自動使用 <code>$DESTDIR</code>，因此並不需要我們明確指定。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkosi \\</span></span>
<span class="line"><span>    -d rhel-ubi \\</span></span>
<span class="line"><span>    -t disk \\</span></span>
<span class="line"><span>    -p bash,coreutils,util-linux,systemd,rpm \\</span></span>
<span class="line"><span>    --autologin \\</span></span>
<span class="line"><span>    --build-package=meson,gcc \\</span></span>
<span class="line"><span>    --build-dir=mkosi.builddir \\</span></span>
<span class="line"><span>    --build-script=mkosi.build \\</span></span>
<span class="line"><span>    -f</span></span></code></pre></div><p>此時，我們有了帶有自定義載荷的鏡像 <code>image.raw</code>。我們可以啓動我們新創建的可執行文件作為 shell 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkosi -d rhel-ubi -t directory shell hello</span></span>
<span class="line"><span>&lt;h1&gt;Hello, World!&lt;/h1&gt;</span></span></code></pre></div><h3 id="獲取-rhel-的開發者訂閲" tabindex="-1">獲取 RHEL 的開發者訂閲 <a class="header-anchor" href="#獲取-rhel-的開發者訂閲" aria-label="Permalink to “獲取 RHEL 的開發者訂閲”">​</a></h3><p>RHEL UBI 主要用作容器構建的基礎層。它提供了有限的軟件包（約 1500 個）。現在讓我們切換到完整的 RHEL 安裝。</p>`,35)),a("p",null,[s[14]||(s[14]=n("獲取 RHEL 的最簡單方法是使用 ",-1)),p(e,{href:"https://developers.redhat.com/articles/faqs-no-cost-red-hat-enterprise-linux"},{default:i(()=>[...s[13]||(s[13]=[n("開發者許可證",-1)])]),_:1}),s[15]||(s[15]=n("。它提供了權限註冊 16 個運行 RHEL 的物理或虛擬節點，並提供自助式支持。",-1))]),a("p",null,[s[19]||(s[19]=n("首先，",-1)),p(e,{href:"https://developers.redhat.com/register"},{default:i(()=>[...s[16]||(s[16]=[n("創建一個賬户",-1)])]),_:1}),s[20]||(s[20]=n("。然後，轉到 ",-1)),p(e,{href:"https://access.redhat.com/management"},{default:i(()=>[...s[17]||(s[17]=[n("管理頁面",-1)])]),_:1}),s[21]||(s[21]=n(" 並確保啓用了“用於 Red Hat 訂閲管理的簡化內容訪問”。接下來，",-1)),p(e,{href:"https://access.redhat.com/management/activation_keys/new"},{default:i(()=>[...s[18]||(s[18]=[n("創建一個新的激活密鑰",-1)])]),_:1}),s[22]||(s[22]=n("，選擇 “Red Hat 個人開發者訂閲”。記下顯示的組織 ID。在下面，我們將使用密鑰名稱和組織 ID 分別表示為 ",-1)),s[23]||(s[23]=a("code",null,"$KEY_NAME",-1)),s[24]||(s[24]=n(" 和 ",-1)),s[25]||(s[25]=a("code",null,"$ORGANIZATION_ID",-1)),s[26]||(s[26]=n("。",-1))]),s[52]||(s[52]=l(`<p>現在，我們準備使用 RHEL 內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install subscription-manager</span></span>
<span class="line"><span>$ sudo subscription-manager register \\</span></span>
<span class="line"><span>    --org $ORGANIZATION_ID --activationkey $KEY_NAME</span></span></code></pre></div><h3 id="使用-rhel-構建鏡像" tabindex="-1">使用 RHEL 構建鏡像 <a class="header-anchor" href="#使用-rhel-構建鏡像" aria-label="Permalink to “使用 RHEL 構建鏡像”">​</a></h3><p>在之前的示例中，我們通過參數開關指定了所有配置。這對於快速開發很友好，但可能在情況複雜時變得難以處理。RHEL 是一個嚴肅的發行版，所以讓我們改為使用配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat &gt;mkosi.conf &lt;&lt;&#39;EOF&#39;</span></span>
<span class="line"><span>[Output]</span></span>
<span class="line"><span>Format=directory</span></span>
<span class="line"><span>Output=rhel-directory</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Distribution]</span></span>
<span class="line"><span>Distribution=rhel</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Content]</span></span>
<span class="line"><span>Packages=</span></span>
<span class="line"><span>bash</span></span>
<span class="line"><span>coreutils</span></span>
<span class="line"><span>util-linux</span></span>
<span class="line"><span>systemd</span></span>
<span class="line"><span>systemd-boot</span></span>
<span class="line"><span>systemd-udev</span></span>
<span class="line"><span>kernel-core</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Bootable=yes</span></span>
<span class="line"><span>Bootloader=uki</span></span>
<span class="line"><span>Autologin=yes</span></span>
<span class="line"><span>WithDocs=no</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>首先，讓我們檢查一下一切是否正常：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkosi summary</span></span></code></pre></div><p>現在讓我們構建鏡像（呃，或者説，目錄）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkosi build</span></span>
<span class="line"><span>$ mkosi qemu</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Welcome to Red Hat Enterprise Linux 9.2 (Plow)!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ OK ] Created slice Slice /system/modprobe.</span></span>
<span class="line"><span>[ OK ] Reached target Initrd Root Device.</span></span>
<span class="line"><span>[ OK ] Reached target Initrd /usr File System.</span></span>
<span class="line"><span>[ OK ] Reached target Local Integrity Protected Volumes.</span></span>
<span class="line"><span>[ OK ] Reached target Local File Systems.</span></span>
<span class="line"><span>[ OK ] Reached target Path Units.</span></span>
<span class="line"><span>[ OK ] Reached target Remote Encrypted Volumes.</span></span>
<span class="line"><span>[ OK ] Reached target Remote Verity Protected Volumes.</span></span>
<span class="line"><span>[ OK ] Reached target Slice Units.</span></span>
<span class="line"><span>[ OK ] Reached target Swaps.</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>[ OK ] Listening on Journal Socket.</span></span>
<span class="line"><span>[ OK ] Listening on udev Control Socket.</span></span>
<span class="line"><span>[ OK ] Listening on udev Kernel Socket.</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>Red Hat Enterprise Linux 9.2 (Plow)</span></span>
<span class="line"><span>Kernel 5.14.0-284.30.1.el9_2.x86_64 on an x86_64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>localhost login: root (automatic login)</span></span>
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>很好，我們將“鏡像”構建為一個帶有文件系統樹的目錄，並在虛擬機中引導了它。</p><p>在引導的虛擬機中，<code>findmnt /</code> 顯示根文件系統是 virtiofs。這是一個虛擬文件系統，將主機的目錄暴露給客户機。我們其實也可以構建一個更傳統的鏡像，其中包含文件系統和文件內的分區表，但“目錄 + virtiofs” 對於開發來説更快且更友好。</p><p>我們剛剛引導的鏡像未註冊。要允許從鏡像“內部”下載更新，我們必須將 <code>yum</code> 、<code>subscription-manager</code> 和 <code>NetworkManager</code> 添加到軟件包列表，並在下載任何更新之前以與上述相同的方式調用 <code>subscription-manager</code>。在這之後，我們在基本倉庫中就有大約 4500 個軟件包可用，並且還有一些包含更多專業軟件包的額外倉庫。</p><h3 id="最後" tabindex="-1">最後 <a class="header-anchor" href="#最後" aria-label="Permalink to “最後”">​</a></h3>`,14)),a("p",null,[s[29]||(s[29]=n("今天就是這些了。如果您有問題，可以在 Matrix 上找到我們，地址為 ",-1)),p(e,{href:"https://matrix.to/#/#mkosi:matrix.org"},{default:i(()=>[...s[27]||(s[27]=[n("#mkosi:matrix.org",-1)])]),_:1}),s[30]||(s[30]=n("，或者在 ",-1)),p(e,{href:"https://lists.freedesktop.org/mailman/listinfo/systemd-devel"},{default:i(()=>[...s[28]||(s[28]=[n("systemd 郵件列表",-1)])]),_:1}),s[31]||(s[31]=n(" 上找到我們。",-1))]),s[53]||(s[53]=a("p",null,"[^1]: Daan DeMeyer、Lukáš Nykrýn、Michal Sekletár、Zbigiew Jędrzejewski-Szmek",-1)),s[54]||(s[54]=a("p",null,[a("em",null,"（題圖：MJ/a6e60316-ed03-4e23-b8b4-22332a0f5bfa）")],-1)),s[55]||(s[55]=a("hr",null,null,-1)),a("p",null,[s[33]||(s[33]=n("via: ",-1)),p(e,{href:"https://fedoramagazine.org/create-images-directly-from-rhel-and-rhel-ubi-package-using-mkosi/"},{default:i(()=>[...s[32]||(s[32]=[n("https://fedoramagazine.org/create-images-directly-from-rhel-and-rhel-ubi-package-using-mkosi/",-1)])]),_:1})]),a("p",null,[s[38]||(s[38]=n("作者：",-1)),p(e,{href:"https://fedoramagazine.org/author/zbyszek/"},{default:i(()=>[...s[34]||(s[34]=[n("Zbigniew Jędrzejewski-Szmek",-1)])]),_:1}),s[39]||(s[39]=n(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[35]||(s[35]=[n("lujun9972",-1)])]),_:1}),s[40]||(s[40]=n(" 譯者：",-1)),p(e,{href:"https://github.com/GlassFoxowo-Dev"},{default:i(()=>[...s[36]||(s[36]=[n("GlassFoxowo",-1)])]),_:1}),s[41]||(s[41]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[37]||(s[37]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[44]||(s[44]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[42]||(s[42]=[n("LCTT",-1)])]),_:1}),s[45]||(s[45]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[43]||(s[43]=[n("Linux中國",-1)])]),_:1}),s[46]||(s[46]=n(" 榮譽推出",-1))])])}const E=t(c,[["render",u]]);export{y as __pageData,E as default};
