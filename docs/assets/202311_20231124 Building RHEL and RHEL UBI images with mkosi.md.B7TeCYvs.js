import{_ as t,a0 as o,w as d,s as r,I as a,x as n,a1 as p,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"使用 mkosi 构建 RHEL 和 RHEL UBI 镜像 | LCTT x X-CMD","titleTemplate":false,"description":"使用 mkosi 构建 RHEL 和 RHEL UBI 镜像 | LCTT (202311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 mkosi 构建 RHEL 和 RHEL UBI 镜像 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 mkosi 构建 RHEL 和 RHEL UBI 镜像 | LCTT (202311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202311/20231124 Building RHEL and RHEL UBI images with mkosi","title":"使用 mkosi 构建 RHEL 和 RHEL UBI 镜像","tag":"202311","desc":""},"relativePath":"202311/20231124 Building RHEL and RHEL UBI images with mkosi.md","filePath":"[post].md"}'),c={name:"202311/20231124 Building RHEL and RHEL UBI images with mkosi.md"};function u(g,s,h,m,k,b){const e=o("Link");return d(),r("div",null,[s[47]||(s[47]=a("h1",{id:"使用-mkosi-构建-rhel-和-rhel-ubi-镜像",tabindex:"-1"},[n("使用 mkosi 构建 RHEL 和 RHEL UBI 镜像 "),a("a",{class:"header-anchor",href:"#使用-mkosi-构建-rhel-和-rhel-ubi-镜像","aria-label":"Permalink to “使用 mkosi 构建 RHEL 和 RHEL UBI 镜像”"},"​")],-1)),s[48]||(s[48]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202311/27/232213c9y5jt85t7vj8men.png",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("mkosi 是一个轻量级工具，用于从发行版软件包构建镜像。本文介绍如何使用 mkosi 从 RHEL 和 RHEL ",-1)),a("ruby",null,[p(e,{href:"https://uapi-group.org/specifications/specs/discoverable_disk_image/"},{default:i(()=>[...s[0]||(s[0]=[n("通用基础镜像",-1)])]),_:1}),s[1]||(s[1]=a("rt",null,"Universal Base Image",-1))]),s[3]||(s[3]=n("（UBI）的软件包构建镜像。RHEL UBI 是 RHEL 的一个子集，可以在没有订阅的情况下免费使用。",-1))]),s[49]||(s[49]=a("h3",{id:"mkosi-特性",tabindex:"-1"},[n("mkosi 特性 "),a("a",{class:"header-anchor",href:"#mkosi-特性","aria-label":"Permalink to “mkosi 特性”"},"​")],-1)),a("p",null,[s[6]||(s[6]=n("mkosi 支持一些输出格式，但最重要的是 ",-1)),a("ruby",null,[p(e,{href:"https://uapi-group.org/specifications/specs/discoverable_disk_image/"},{default:i(()=>[...s[4]||(s[4]=[n("可发现磁盘镜像",-1)])]),_:1}),s[5]||(s[5]=a("rt",null,"Discoverable Disk Images",-1))]),s[7]||(s[7]=n("（DDI）。同一个 DDI 可用于引导容器、或运行在虚拟机、抑或是复制到 U 盘以引导真实物理机，然后从 U 盘复制到磁盘以引导系统。该镜像具有标准化的布局和描述其用途的元数据。",-1))]),s[50]||(s[50]=l("<p>mkosi 依赖其他工具来完成大部分工作：使用 <code>systemd-repart</code> 在磁盘镜像上创建分区，使用 <code>mkfs.btrfs</code> / <code>mkfs.ext4</code> / <code>mkfs.xfs</code> 等创建文件系统，并使用 <code>dnf</code> / <code>apt</code> / <code>pacman</code> / <code>zypper</code> 下载和解压包。</p><p>mkosi 支持一系列发行版：Debian 和 Ubuntu、Arch Linux、openSUSE，当然还包括 Fedora、CentOS Stream 及其衍生版本，以及最近的 RHEL UBI 和 RHEL 。由于实际的“重活”是由其他工具完成的，mkosi 可以进行交叉构建。这意味着可以使用一个发行版构建各种其他发行版的镜像。唯一的要求是主机上安装了相应的工具。Fedora 有原生的 <code>apt</code>、<code>pacman</code> 和 <code>zypper</code>，因此它为使用 mkosi 构建任何其他发行版提供了良好的基础。</p><p>它还有一些有趣的功能：镜像可以由非特权用户创建，或者在没有设备文件的容器中创建，特别是没有对回环设备的访问权限。它还可以在没有特权的情况下将这些镜像启动为虚拟机（使用 <code>qemu</code>）。</p><p>配置是声明性的，非常容易创建。使用 <code>systemd-repart</code> 创建磁盘分区，并使用 <code>repart.d</code> 配置文件定义应该如何完成此操作。</p>",4)),a("p",null,[s[10]||(s[10]=n("有关更多详细信息，请参见 Daan DeMeyer 在 All Systems Go 大会上的两个演讲：《",-1)),p(e,{href:"https://media.ccc.de/v/all-systems-go-2023-191-systemd-repart-building-discoverable-disk-images"},{default:i(()=>[...s[8]||(s[8]=[n("systemd-repart: Building Discoverable Disk Images",-1)])]),_:1}),s[11]||(s[11]=n("》 和 《",-1)),p(e,{href:"https://media.ccc.de/v/all-systems-go-2023-190-mkosi-building-bespoke-operating-system-images"},{default:i(()=>[...s[9]||(s[9]=[n("mkosi: Building Bespoke Operating System Images",-1)])]),_:1}),s[12]||(s[12]=n("》。",-1))]),s[51]||(s[51]=l(`<h3 id="项目目标" tabindex="-1">项目目标 <a class="header-anchor" href="#项目目标" aria-label="Permalink to “项目目标”">​</a></h3><p>mkosi 的一个目标是允许对软件项目进行针对不同发行版的测试。它将为一个发行版创建一个镜像（使用该发行版的软件包），然后将软件项目编译并安装到该镜像中，插入不属于软件包的额外文件。但是，首个阶段，即从软件包创建镜像的过程，本身就是有用的。这是我们将首先展示的内容。</p><p>我们 [^1] 最近添加了对 RHEL 和 RHEL UBI 的支持。让我们从 RHEL UBI 开始，利用发行版软件包创建镜像。</p><p>请注意，下面的示例要求 mkosi 19，而且不适用于更早的版本。</p><h3 id="带有-shell-的基本-rhel-ubi-镜像" tabindex="-1">带有 Shell 的基本 RHEL UBI 镜像 <a class="header-anchor" href="#带有-shell-的基本-rhel-ubi-镜像" aria-label="Permalink to “带有 Shell 的基本 RHEL UBI 镜像”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir -p mkosi.cache</span></span>
<span class="line"><span>$ mkosi \\</span></span>
<span class="line"><span>    -d rhel-ubi \\</span></span>
<span class="line"><span>    -t directory \\</span></span>
<span class="line"><span>    -p bash,coreutils,util-linux,systemd,rpm \\</span></span>
<span class="line"><span>    --autologin</span></span></code></pre></div><p>上面的命令指定了发行版 <code>rhel-ubi</code>，输出格式 <code>directory</code>，并请求安装软件包 <code>bash</code>、<code>coreutils</code>、…、<code>rpm</code>。<code>rpm</code> 通常不需要放到镜像内部，但在这里用于内省会很有用。我们还启用了以 root 用户自动登录。</p><p>在启动构建之前，我们创建了缓存目录 <code>mkosi.cache</code>。当存在缓存目录时，mkosi 会自动使用它来持久化下载的 RPM 包。这将使相同软件包集合的后续调用速度更快。</p><p>然后，我们可以使用 <code>systemd-nspawn</code> 将此镜像作为容器启动：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkosi \\</span></span>
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
<span class="line"><span>systemd-252-14.el9_2.3.x86_64</span></span></code></pre></div><p>正如前面提到的，此镜像可以用于启动虚拟机。但在此设置下，这是不可能的 —— 我们的镜像没有内核。事实上，RHEL UBI 根本不提供内核，因此我们无法使用它进行引导（无论是在虚拟机上还是在裸机上）。</p><h3 id="创建镜像" tabindex="-1">创建镜像 <a class="header-anchor" href="#创建镜像" aria-label="Permalink to “创建镜像”">​</a></h3><p>我一开始说是要创建镜像，但到目前为止我们只有一个目录。让我们开始实际创建一个镜像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkosi \\</span></span>
<span class="line"><span>    -d rhel-ubi \\</span></span>
<span class="line"><span>    -t disk \\</span></span>
<span class="line"><span>    -p bash,coreutils,util-linux,systemd,rpm \\</span></span>
<span class="line"><span>    --autologin</span></span></code></pre></div><p>这将生成 <code>image.raw</code>，一个带有 GPT 分区表和单个根分区（用于本机架构）的磁盘镜像。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemd-dissect image.raw</span></span>
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
<span class="line"><span>rw root 1236e211-4729-4561-a6fc-9ef8f18b828f root-x86-64 xfs x86-64 no yes /dev/loop0p1 1</span></span></code></pre></div><p>好的，我们现在有一个镜像，镜像中包含了一些来自 RHEL UBI 软件包的内容。我们如何在其上加点我们自己的东西呢？</p><h3 id="使用自己的文件扩展镜像" tabindex="-1">使用自己的文件扩展镜像 <a class="header-anchor" href="#使用自己的文件扩展镜像" aria-label="Permalink to “使用自己的文件扩展镜像”">​</a></h3><p>有几种方法可以扩展镜像，包括从头开始编译某些东西。但在那之前，让我们做一些更简单的事情，将一个现成的文件系统注入到镜像中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir -p mkosi.extra/srv/www/content</span></span>
<span class="line"><span>$ cat &gt;mkosi.extra/srv/www/content/index.html &lt;&lt;&#39;EOF&#39;</span></span>
<span class="line"><span>&lt;h1&gt;Hello, World!&lt;/h1&gt;</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>现在，该镜像将包含 <code>/srv/www/content/index.html</code>。</p><p>这种方法用于注入额外的配置或简单的程序。</p><h3 id="从源代码构建" tabindex="-1">从源代码构建 <a class="header-anchor" href="#从源代码构建" aria-label="Permalink to “从源代码构建”">​</a></h3><p>现在让我们过一遍完整流程，从源代码构建一些东西。例如，一个简单的 Meson 项目，有一个单独的 C 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat &gt;hello.c &lt;&lt;&#39;EOF&#39;</span></span>
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
<span class="line"><span>$ chmod +x mkosi.build</span></span></code></pre></div><p>总结一下：我们有一些源代码（<code>hello.c</code>），一个构建系统配置文件（<code>meson.build</code>），以及一个由 mkosi 调用的胶水脚本（<code>mkosi.build</code>）。对于实际的项目，也会有相同的元素，只是更加复杂。</p><p>这个脚本需要一些解释。mkosi 在创建镜像时使用用户命名空间。这允许包管理器（例如 <code>dnf</code>）安装由不同用户拥有的文件，即使它是由一个普通非特权用户调用的。我们使用 <code>mkosi-as-caller</code> 切换回调用者以进行编译。这样，在 <code>$BUILDDIR</code> 下编译期间创建的文件将由调用者拥有。</p><p>现在让我们使用我们的程序构建镜像。与之前的调用相比，我们需要额外的软件包：<code>meson</code>、<code>gcc</code>。由于我们现在有了构建脚本，mkosi 将执行两个构建阶段：首先创建一个构建镜像，并在其中调用构建脚本，将安装产物存储在一个临时目录中，然后构建最终镜像，并将安装产物注入其中。（mkosi 设置 <code>$DESTDIR</code>，<code>meson install</code> 自动使用 <code>$DESTDIR</code>，因此并不需要我们明确指定。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkosi \\</span></span>
<span class="line"><span>    -d rhel-ubi \\</span></span>
<span class="line"><span>    -t disk \\</span></span>
<span class="line"><span>    -p bash,coreutils,util-linux,systemd,rpm \\</span></span>
<span class="line"><span>    --autologin \\</span></span>
<span class="line"><span>    --build-package=meson,gcc \\</span></span>
<span class="line"><span>    --build-dir=mkosi.builddir \\</span></span>
<span class="line"><span>    --build-script=mkosi.build \\</span></span>
<span class="line"><span>    -f</span></span></code></pre></div><p>此时，我们有了带有自定义载荷的镜像 <code>image.raw</code>。我们可以启动我们新创建的可执行文件作为 shell 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkosi -d rhel-ubi -t directory shell hello</span></span>
<span class="line"><span>&lt;h1&gt;Hello, World!&lt;/h1&gt;</span></span></code></pre></div><h3 id="获取-rhel-的开发者订阅" tabindex="-1">获取 RHEL 的开发者订阅 <a class="header-anchor" href="#获取-rhel-的开发者订阅" aria-label="Permalink to “获取 RHEL 的开发者订阅”">​</a></h3><p>RHEL UBI 主要用作容器构建的基础层。它提供了有限的软件包（约 1500 个）。现在让我们切换到完整的 RHEL 安装。</p>`,35)),a("p",null,[s[14]||(s[14]=n("获取 RHEL 的最简单方法是使用 ",-1)),p(e,{href:"https://developers.redhat.com/articles/faqs-no-cost-red-hat-enterprise-linux"},{default:i(()=>[...s[13]||(s[13]=[n("开发者许可证",-1)])]),_:1}),s[15]||(s[15]=n("。它提供了权限注册 16 个运行 RHEL 的物理或虚拟节点，并提供自助式支持。",-1))]),a("p",null,[s[19]||(s[19]=n("首先，",-1)),p(e,{href:"https://developers.redhat.com/register"},{default:i(()=>[...s[16]||(s[16]=[n("创建一个账户",-1)])]),_:1}),s[20]||(s[20]=n("。然后，转到 ",-1)),p(e,{href:"https://access.redhat.com/management"},{default:i(()=>[...s[17]||(s[17]=[n("管理页面",-1)])]),_:1}),s[21]||(s[21]=n(" 并确保启用了“用于 Red Hat 订阅管理的简化内容访问”。接下来，",-1)),p(e,{href:"https://access.redhat.com/management/activation_keys/new"},{default:i(()=>[...s[18]||(s[18]=[n("创建一个新的激活密钥",-1)])]),_:1}),s[22]||(s[22]=n("，选择 “Red Hat 个人开发者订阅”。记下显示的组织 ID。在下面，我们将使用密钥名称和组织 ID 分别表示为 ",-1)),s[23]||(s[23]=a("code",null,"$KEY_NAME",-1)),s[24]||(s[24]=n(" 和 ",-1)),s[25]||(s[25]=a("code",null,"$ORGANIZATION_ID",-1)),s[26]||(s[26]=n("。",-1))]),s[52]||(s[52]=l(`<p>现在，我们准备使用 RHEL 内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install subscription-manager</span></span>
<span class="line"><span>$ sudo subscription-manager register \\</span></span>
<span class="line"><span>    --org $ORGANIZATION_ID --activationkey $KEY_NAME</span></span></code></pre></div><h3 id="使用-rhel-构建镜像" tabindex="-1">使用 RHEL 构建镜像 <a class="header-anchor" href="#使用-rhel-构建镜像" aria-label="Permalink to “使用 RHEL 构建镜像”">​</a></h3><p>在之前的示例中，我们通过参数开关指定了所有配置。这对于快速开发很友好，但可能在情况复杂时变得难以处理。RHEL 是一个严肃的发行版，所以让我们改为使用配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat &gt;mkosi.conf &lt;&lt;&#39;EOF&#39;</span></span>
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
<span class="line"><span>EOF</span></span></code></pre></div><p>首先，让我们检查一下一切是否正常：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkosi summary</span></span></code></pre></div><p>现在让我们构建镜像（呃，或者说，目录）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkosi build</span></span>
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
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>很好，我们将“镜像”构建为一个带有文件系统树的目录，并在虚拟机中引导了它。</p><p>在引导的虚拟机中，<code>findmnt /</code> 显示根文件系统是 virtiofs。这是一个虚拟文件系统，将主机的目录暴露给客户机。我们其实也可以构建一个更传统的镜像，其中包含文件系统和文件内的分区表，但“目录 + virtiofs” 对于开发来说更快且更友好。</p><p>我们刚刚引导的镜像未注册。要允许从镜像“内部”下载更新，我们必须将 <code>yum</code> 、<code>subscription-manager</code> 和 <code>NetworkManager</code> 添加到软件包列表，并在下载任何更新之前以与上述相同的方式调用 <code>subscription-manager</code>。在这之后，我们在基本仓库中就有大约 4500 个软件包可用，并且还有一些包含更多专业软件包的额外仓库。</p><h3 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to “最后”">​</a></h3>`,14)),a("p",null,[s[29]||(s[29]=n("今天就是这些了。如果您有问题，可以在 Matrix 上找到我们，地址为 ",-1)),p(e,{href:"https://matrix.to/#/#mkosi:matrix.org"},{default:i(()=>[...s[27]||(s[27]=[n("#mkosi:matrix.org",-1)])]),_:1}),s[30]||(s[30]=n("，或者在 ",-1)),p(e,{href:"https://lists.freedesktop.org/mailman/listinfo/systemd-devel"},{default:i(()=>[...s[28]||(s[28]=[n("systemd 邮件列表",-1)])]),_:1}),s[31]||(s[31]=n(" 上找到我们。",-1))]),s[53]||(s[53]=a("p",null,"[^1]: Daan DeMeyer、Lukáš Nykrýn、Michal Sekletár、Zbigiew Jędrzejewski-Szmek",-1)),s[54]||(s[54]=a("p",null,[a("em",null,"（题图：MJ/a6e60316-ed03-4e23-b8b4-22332a0f5bfa）")],-1)),s[55]||(s[55]=a("hr",null,null,-1)),a("p",null,[s[33]||(s[33]=n("via: ",-1)),p(e,{href:"https://fedoramagazine.org/create-images-directly-from-rhel-and-rhel-ubi-package-using-mkosi/"},{default:i(()=>[...s[32]||(s[32]=[n("https://fedoramagazine.org/create-images-directly-from-rhel-and-rhel-ubi-package-using-mkosi/",-1)])]),_:1})]),a("p",null,[s[38]||(s[38]=n("作者：",-1)),p(e,{href:"https://fedoramagazine.org/author/zbyszek/"},{default:i(()=>[...s[34]||(s[34]=[n("Zbigniew Jędrzejewski-Szmek",-1)])]),_:1}),s[39]||(s[39]=n(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[35]||(s[35]=[n("lujun9972",-1)])]),_:1}),s[40]||(s[40]=n(" 译者：",-1)),p(e,{href:"https://github.com/GlassFoxowo-Dev"},{default:i(()=>[...s[36]||(s[36]=[n("GlassFoxowo",-1)])]),_:1}),s[41]||(s[41]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[37]||(s[37]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[44]||(s[44]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[42]||(s[42]=[n("LCTT",-1)])]),_:1}),s[45]||(s[45]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[43]||(s[43]=[n("Linux中国",-1)])]),_:1}),s[46]||(s[46]=n(" 荣誉推出",-1))])])}const E=t(c,[["render",u]]);export{y as __pageData,E as default};
