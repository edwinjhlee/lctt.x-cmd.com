import{_ as i,a0 as p,w as s,s as d,ao as o,I as t,x as n,a1 as a,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"在红帽Linux中使用YUM包管理器 | LCTT x X-CMD","titleTemplate":false,"description":"在红帽Linux中使用YUM包管理器 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在红帽Linux中使用YUM包管理器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在红帽Linux中使用YUM包管理器 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Package Management Using YUM In Red Hat Linux","title":"在红帽Linux中使用YUM包管理器","tag":"201311","desc":""},"relativePath":"201311/Package Management Using YUM In Red Hat Linux.md","filePath":"[post].md"}'),_={name:"201311/Package Management Using YUM In Red Hat Linux.md"};function g(c,e,u,h,x,m){const l=p("Link");return s(),d("div",null,[e[11]||(e[11]=o(`<h1 id="在红帽linux中使用yum包管理器" tabindex="-1">在红帽Linux中使用YUM包管理器 <a class="header-anchor" href="#在红帽linux中使用yum包管理器" aria-label="Permalink to “在红帽Linux中使用YUM包管理器”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/11/yum-package-install.png" alt=""></p><p><strong>YUM</strong>是RHEL系统中提供的一个安装，卸载和搜索软件包的工具。它能做的不仅仅是安装、卸载软件包，它能做的还有更多，下面我们将在本文中为你展示。</p><p>YUM可以自动安装软件包的依赖包，例如当你使用yum安装httpd时，它还会自动安装https apache server以及它依赖的软件包。通过rpm软件包安装时就没有这么方便咯（译注：就是不会自动处理软件包依赖问题咯！），你必须下载所有它依赖的软件包，然后依序安装它们。</p><p>yum工具从远端服务器上的软件仓库（通常由OS提供商提供）获取软件包的信息。一个软件仓库是能在特定架构上运行的一系列rpm软件包的集合。例如，对于32位和64位系统各有一个软件仓库，还有针对RHEL5以及RHEL6的软件仓库。你也可以建立一个本地仓库，配置你的yum让其从你的本地仓库里搜索安装软件包。在接下来的例子中，我将向你展示除了安装和卸载软件，yum还可以做的其它事情。为方便理解，我将在我的Amazon EC2 RHEL 6.4服务器上使用httpd软件包为例。</p><p>###从软件仓库里搜索软件包 # yum search httpd</p><pre><code>Loaded plugins: amazon-id, rhui-lb, security
=============================================== N/S Matched: httpd ==========
httpd.x86_64 : Apache HTTP Server
httpd-devel.i686 : Development interfaces for the Apache HTTP server
httpd-devel.x86_64 : Development interfaces for the Apache HTTP server
httpd-manual.noarch : Documentation for the Apache HTTP server
httpd-tools.x86_64 : Tools for use with the Apache HTTP Server
mod_dav_svn.x86_64 : Apache httpd module for Subversion server
mod_dnssd.x86_64 : An Apache HTTPD module which adds Zeroconf support
</code></pre><p>想获得详细的输出信息，可以使用下面的命令：</p><pre><code># yum provides httpd

Loaded plugins: amazon-id, rhui-lb, security
httpd-2.2.15-26.el6.x86_64 : Apache HTTP Server
Repo : rhui-REGION-rhel-server-releases
Matched from:
</code></pre><p><strong>yum provides httpd</strong>在软件仓库里搜索含有httpd的软件包。</p><p>###提供所有软件组列表</p><pre><code># yum grouplist
</code></pre><p>以上命令将为你显示已经安装的以及可用的软件组。你可以使用软件组安装选项来安装其中一个软件组。例如，我们将安装一个PHP Support的软件组。这个软件组内包含需要的PHP软件包。</p><pre><code># yum groupinstall PHP Support

Loaded plugins: amazon-id, downloadonly, rhui-lb, security
Setting up Group Process
Warning: Group Support does not exist.
Resolving Dependencies
-&gt; Running transaction check
--&gt; Package php.x86_64 0:5.3.3-23.el6_4 will be installed
-&gt; Processing Dependency: php-common(x86-64) = 5.3.3-23.el6_4 for package: php-5.3.3-23.el6_4.x86_64
-&gt; Processing Dependency: php-cli(x86-64) = 5.3.3-23.el6_4 for package: php-5.3.3-23.el6_4.x86_64
--&gt; Package php-gd.x86_64 0:5.3.3-23.el6_4 will be installed
-&gt; Processing Dependency: libXpm.so.4()(64bit) for package: php-gd-5.3.3-23.el6_4.x86_64
--&gt; Package php-pdo.x86_64 0:5.3.3-23.el6_4 will be installed
--&gt; Package php-pear.noarch 1:1.9.4-4.el6 will be installed
--&gt; Package php-xml.x86_64 0:5.3.3-23.el6_4 will be installed
-&gt; Running transaction check
--&gt; Package libXpm.x86_64 0:3.5.10-2.el6 will be installed
--&gt; Package php-cli.x86_64 0:5.3.3-23.el6_4 will be installed
--&gt; Package php-common.x86_64 0:5.3.3-23.el6_4 will be installed
-&gt; Finished Dependency Resolution

Dependencies Resolved

=====================================================================
Package Arch Version Repository Size
=====================================================================
Installing:
php x86_64 5.3.3-23.el6_4 rhui-REGION-rhel-server-releases 1.1 M
php-gd x86_64 5.3.3-23.el6_4 rhui-REGION-rhel-server-releases 106 k
php-pdo x86_64 5.3.3-23.el6_4 rhui-REGION-rhel-server-releases 75 k
php-pear noarch 1:1.9.4-4.el6 rhui-REGION-rhel-server-releases 393 k
php-xml x86_64 5.3.3-23.el6_4 rhui-REGION-rhel-server-releases 103 k
Installing for dependencies:
libXpm x86_64 3.5.10-2.el6 rhui-REGION-rhel-server-releases 51 k
php-cli x86_64 5.3.3-23.el6_4 rhui-REGION-rhel-server-releases 2.2 M
php-common x86_64 5.3.3-23.el6_4 rhui-REGION-rhel-server-releases 524 k

Transaction Summary
========================================================================
Install 8 Package(s)

Total download size: 4.5 M
Installed size: 16 M
Is this ok [y/N]: y

Downloading Packages:
(1/8): libXpm-3.5.10-2.el6.x86_64.rpm | 51 kB 00:00
(2/8): php-5.3.3-23.el6_4.x86_64.rpm | 1.1 MB 00:00
(3/8): php-cli-5.3.3-23.el6_4.x86_64.rpm | 2.2 MB 00:00
(4/8): php-common-5.3.3-23.el6_4.x86_64.rpm | 524 kB 00:00
(5/8): php-gd-5.3.3-23.el6_4.x86_64.rpm | 106 kB 00:00
(6/8): php-pdo-5.3.3-23.el6_4.x86_64.rpm | 75 kB 00:00
(7/8): php-pear-1.9.4-4.el6.noarch.rpm | 393 kB 00:00
(8/8): php-xml-5.3.3-23.el6_4.x86_64.rpm | 103 kB 00:00
-----------------------------------------------
Total 2.9 MB/s | 4.5 MB 00:01
Running rpm_check_debug
Running Transaction Test
Transaction Test Succeeded
Running Transaction
Installing : php-common-5.3.3-23.el6_4.x86_64 1/8
Installing : php-cli-5.3.3-23.el6_4.x86_64 2/8
Installing : libXpm-3.5.10-2.el6.x86_64 3/8
Installing : php-gd-5.3.3-23.el6_4.x86_64 4/8
Installing : 1:php-pear-1.9.4-4.el6.noarch 5/8
Installing : php-5.3.3-23.el6_4.x86_64 6/8
Installing : php-xml-5.3.3-23.el6_4.x86_64 7/8
Installing : php-pdo-5.3.3-23.el6_4.x86_64 8/8
Verifying : 1:php-pear-1.9.4-4.el6.noarch 1/8
Verifying : php-xml-5.3.3-23.el6_4.x86_64 2/8
Verifying : php-common-5.3.3-23.el6_4.x86_64 3/8
Verifying : libXpm-3.5.10-2.el6.x86_64 4/8
Verifying : php-cli-5.3.3-23.el6_4.x86_64 5/8
Verifying : php-5.3.3-23.el6_4.x86_64 6/8
Verifying : php-pdo-5.3.3-23.el6_4.x86_64 7/8
Verifying : php-gd-5.3.3-23.el6_4.x86_64 8/8

Installed:
php.x86_64 0:5.3.3-23.el6_4 php-gd.x86_64 0:5.3.3-23.el6_4 php-pdo.x86_64 0:5.3.3-23.el6_4
php-pear.noarch 1:1.9.4-4.el6 php-xml.x86_64 0:5.3.3-23.el6_4

Dependency Installed:
libXpm.x86_64 0:3.5.10-2.el6 php-cli.x86_64 0:5.3.3-23.el6_4 php-common.x86_64 0:5.3.3-23.el6_4

Complete!
</code></pre><p>###使用YUM安装软件包</p><p>可以使用<strong>yum install</strong>命令安装软件包，如下所示：</p><pre><code>#  yum install httpd

Loaded plugins: amazon-id, rhui-lb, security
Setting up Install Process
Resolving Dependencies
-&gt; Running transaction check
--&gt; Package httpd.x86_64 0:2.2.15-29.el6_4 will be installed
-&gt; Processing Dependency: httpd-tools = 2.2.15-29.el6_4 for package: httpd-2.2.15-29.el6_4.x86_64
-&gt; Processing Dependency: apr-util-ldap for package: httpd-2.2.15-29.el6_4.x86_64
-&gt; Processing Dependency: libaprutil-1.so.0()(64bit) for package: httpd-2.2.15-29.el6_4.x86_64
-&gt; Processing Dependency: libapr-1.so.0()(64bit) for package: httpd-2.2.15-29.el6_4.x86_64
-&gt; Running transaction check
--&gt; Package apr.x86_64 0:1.3.9-5.el6_2 will be installed
--&gt; Package apr-util.x86_64 0:1.3.9-3.el6_0.1 will be installed
--&gt; Package apr-util-ldap.x86_64 0:1.3.9-3.el6_0.1 will be installed
--&gt; Package httpd-tools.x86_64 0:2.2.15-29.el6_4 will be installed
-&gt; Finished Dependency Resolution

Dependencies Resolved

=============================================================================
Package Arch Version Repository Size
=============================================================================
Installing:
httpd x86_64 2.2.15-29.el6_4 rhui-REGION-rhel-server-releases 821 k
Installing for dependencies:
apr x86_64 1.3.9-5.el6_2 rhui-REGION-rhel-server-releases 123 k
apr-util x86_64 1.3.9-3.el6_0.1 rhui-REGION-rhel-server-releases 87 k
apr-util-ldap x86_64 1.3.9-3.el6_0.1 rhui-REGION-rhel-server-releases 15 k
httpd-tools x86_64 2.2.15-29.el6_4 rhui-REGION-rhel-server-releases 73 k

Transaction Summary
==============================================================================
Install 5 Package(s)

Total download size: 1.1 M
Installed size: 3.6 M
Is this ok [y/N]: y
</code></pre><p>如你所见，在安装httpd时yum安装了额外的软件包。这称为yum完成的依赖包解析。</p><p>假如你不想让yum弹出[y/N]选项，可以使用<strong>yum install -y httpd</strong></p><p>####使用yum update 命令更新一个已存在的软件包</p><pre><code># yum update httpd
Loaded plugins: amazon-id, rhui-lb, security
Setting up Update Process
No Packages marked for Update
</code></pre><p>这意味着你系统中安装的httpd软件包已经是yum软件仓库里的最新版本的了。</p><p>####更新服务器上所有的软件包</p><pre><code># yum update
</code></pre><p>以上命令将系统上的所有软件包更新到最新版本，包括内核软件包，这意味着你的OS更新到了RHEL提供的最新版本了。</p><p>###下载RPM软件包但是不安装</p><p>可以使用yum从RHEL或者CentOS的软件仓库里下载RPM软件包但是不安装。你首先需要下载一个插件让yum只下载rpm软件包而不安装。插件名字叫downloadonly，可以通过yum安装，如下所示：</p><pre><code># yum install yum-downloadonly
Loaded plugins: amazon-id, rhui-lb, security
Setting up Install Process
Resolving Dependencies
-&gt; Running transaction check
--&gt; Package yum-plugin-downloadonly.noarch 0:1.1.30-14.el6 will be installed
-&gt; Finished Dependency Resolution

Dependencies Resolved

===========================================================================
Package Arch Version Repository Size
===========================================================================
Installing:
yum-plugin-downloadonly noarch 1.1.30-14.el6 rhui-REGION-rhel-server-releases 20 k

Transaction Summary
===========================================================================
Install 1 Package(s)

Total download size: 20 k
Installed size: 21 k
Is this ok [y/N]: y
Downloading Packages:
yum-plugin-downloadonly-1.1.30-14.el6.noarch.rpm | 20 kB 00:00
Running rpm_check_debug
Running Transaction Test
Transaction Test Succeeded
Running Transaction
Installing : yum-plugin-downloadonly-1.1.30-14.el6.noarch 1/1
Verifying : yum-plugin-downloadonly-1.1.30-14.el6.noarch 1/1

Installed:
yum-plugin-downloadonly.noarch 0:1.1.30-14.el6

Complete!
</code></pre><p>现在你就可以从软件仓库里只下载软件包而不安装了，命令如下：</p><pre><code># yum install httpd-devel -downloadonly
</code></pre><p>默认情况下软件包会被下载到<strong>/var/cache/yum/&lt;arch&gt;</strong>目录，但是你可以添加额外选项将其下载到指定位置</p><pre><code># yum install httpd-devel -downloadonly -downloaddir=/opt
</code></pre><p>假如你有一个rpm软件包但是没有它所依赖的软件包，你不知道到哪去得到它所依赖的软件包。你仍然可以通过yum安装这个rpm软件包，并从软件仓库里得到它所依赖的软件包。让我们安装刚刚下载的httpd-devel-2.2.15-29.el6_4.x86_64 RPM软件包。</p><pre><code># yum localinstall /opt/httpd-devel-2.2.15-29.el6_4.x86_64.rpm

Loaded plugins: amazon-id, downloadonly, rhui-lb, security
Setting up Local Package Process
Examining /opt/httpd-devel-2.2.15-29.el6_4.x86_64.rpm: httpd-devel-2.2.15-29.el6_4.x86_64
Marking /opt/httpd-devel-2.2.15-29.el6_4.x86_64.rpm to be installed
Resolving Dependencies
-&gt; Running transaction check
--&gt; Package httpd-devel.x86_64 0:2.2.15-29.el6_4 will be installed
-&gt; Processing Dependency: apr-devel for package: httpd-devel-2.2.15-29.el6_4.x86_64
-&gt; Processing Dependency: apr-util-devel for package: httpd-devel-2.2.15-29.el6_4.x86_64
-&gt; Running transaction check
--&gt; Package apr-devel.x86_64 0:1.3.9-5.el6_2 will be installed
--&gt; Package apr-util-devel.x86_64 0:1.3.9-3.el6_0.1 will be installed
-&gt; Processing Dependency: openldap-devel for package: apr-util-devel-1.3.9-3.el6_0.1.x86_64
-&gt; Processing Dependency: expat-devel for package: apr-util-devel-1.3.9-3.el6_0.1.x86_64
-&gt; Processing Dependency: db4-devel for package: apr-util-devel-1.3.9-3.el6_0.1.x86_64
-&gt; Running transaction check
--&gt; Package db4-devel.x86_64 0:4.7.25-18.el6_4 will be installed
-&gt; Processing Dependency: db4-cxx = 4.7.25-18.el6_4 for package: db4-devel-4.7.25-18.el6_4.x86_64
-&gt; Processing Dependency: db4 = 4.7.25-18.el6_4 for package: db4-devel-4.7.25-18.el6_4.x86_64
-&gt; Processing Dependency: libdb_cxx-4.7.so()(64bit) for package: db4-devel-4.7.25-18.el6_4.x86_64
--&gt; Package expat-devel.x86_64 0:2.0.1-11.el6_2 will be installed
--&gt; Package openldap-devel.x86_64 0:2.4.23-32.el6_4.1 will be installed
-&gt; Processing Dependency: cyrus-sasl-devel &gt;= 2.1 for package: openldap-devel-2.4.23-32.el6_4.1.x86_64
-&gt; Running transaction check
--&gt; Package cyrus-sasl-devel.x86_64 0:2.1.23-13.el6_3.1 will be installed
--&gt; Package db4.x86_64 0:4.7.25-17.el6 will be updated
-&gt; Processing Dependency: db4 = 4.7.25-17.el6 for package: db4-utils-4.7.25-17.el6.x86_64
--&gt; Package db4.x86_64 0:4.7.25-18.el6_4 will be an update
--&gt; Package db4-cxx.x86_64 0:4.7.25-18.el6_4 will be installed
-&gt; Running transaction check
--&gt; Package db4-utils.x86_64 0:4.7.25-17.el6 will be updated
--&gt; Package db4-utils.x86_64 0:4.7.25-18.el6_4 will be an update
-&gt; Finished Dependency Resolution

Dependencies Resolved

=============================================================================
Package Arch Version Repository Size
=============================================================================
Installing:
httpd-devel x86_64 2.2.15-29.el6_4 /httpd-devel-2.2.15-29.el6_4.x86_64 526 k
Installing for dependencies:
apr-devel x86_64 1.3.9-5.el6_2 rhui-REGION-rhel-server-releases 176 k
apr-util-devel x86_64 1.3.9-3.el6_0.1 rhui-REGION-rhel-server-releases 69 k
cyrus-sasl-devel x86_64 2.1.23-13.el6_3.1 rhui-REGION-rhel-server-releases 302 k
db4-cxx x86_64 4.7.25-18.el6_4 rhui-REGION-rhel-server-releases 588 k
db4-devel x86_64 4.7.25-18.el6_4 rhui-REGION-rhel-server-releases 6.6 M
expat-devel x86_64 2.0.1-11.el6_2 rhui-REGION-rhel-server-releases 120 k
openldap-devel x86_64 2.4.23-32.el6_4.1 rhui-REGION-rhel-server-releases 1.1 M
Updating for dependencies:
db4 x86_64 4.7.25-18.el6_4 rhui-REGION-rhel-server-releases 563 k
db4-utils x86_64 4.7.25-18.el6_4 rhui-REGION-rhel-server-releases 130 k

Transaction Summary
=======================================================================
Install 8 Package(s)
Upgrade 2 Package(s)

Total size: 10 M
Is this ok [y/N]: y
Downloading Packages:
Running rpm_check_debug
Running Transaction Test
Transaction Test Succeeded
Running Transaction
Updating : db4-4.7.25-18.el6_4.x86_64 1/12
Installing : apr-devel-1.3.9-5.el6_2.x86_64 2/12
Installing : expat-devel-2.0.1-11.el6_2.x86_64 3/12
Installing : db4-cxx-4.7.25-18.el6_4.x86_64 4/12
Installing : db4-devel-4.7.25-18.el6_4.x86_64 5/12
Installing : cyrus-sasl-devel-2.1.23-13.el6_3.1.x86_64 6/12
Installing : openldap-devel-2.4.23-32.el6_4.1.x86_64 7/12
Installing : apr-util-devel-1.3.9-3.el6_0.1.x86_64 8/12
Installing : httpd-devel-2.2.15-29.el6_4.x86_64 9/12
Updating : db4-utils-4.7.25-18.el6_4.x86_64 10/12
Cleanup : db4-utils-4.7.25-17.el6.x86_64 11/12
Cleanup : db4-4.7.25-17.el6.x86_64 12/12
Verifying : apr-devel-1.3.9-5.el6_2.x86_64 1/12
Verifying : cyrus-sasl-devel-2.1.23-13.el6_3.1.x86_64 2/12
Verifying : apr-util-devel-1.3.9-3.el6_0.1.x86_64 3/12
Verifying : db4-cxx-4.7.25-18.el6_4.x86_64 4/12
Verifying : httpd-devel-2.2.15-29.el6_4.x86_64 5/12
Verifying : openldap-devel-2.4.23-32.el6_4.1.x86_64 6/12
Verifying : expat-devel-2.0.1-11.el6_2.x86_64 7/12
Verifying : db4-devel-4.7.25-18.el6_4.x86_64 8/12
Verifying : db4-4.7.25-18.el6_4.x86_64 9/12
Verifying : db4-utils-4.7.25-18.el6_4.x86_64 10/12
Verifying : db4-4.7.25-17.el6.x86_64 11/12
Verifying : db4-utils-4.7.25-17.el6.x86_64 12/12

Installed:
httpd-devel.x86_64 0:2.2.15-29.el6_4

Dependency Installed:
apr-devel.x86_64 0:1.3.9-5.el6_2 apr-util-devel.x86_64 0:1.3.9-3.el6_0.1
cyrus-sasl-devel.x86_64 0:2.1.23-13.el6_3.1 db4-cxx.x86_64 0:4.7.25-18.el6_4
db4-devel.x86_64 0:4.7.25-18.el6_4 expat-devel.x86_64 0:2.0.1-11.el6_2
openldap-devel.x86_64 0:2.4.23-32.el6_4.1

Dependency Updated:
db4.x86_64 0:4.7.25-18.el6_4 db4-utils.x86_64 0:4.7.25-18.el6_4

Complete!
</code></pre><p>###使用yum卸载软件包</p><p>使用 <strong>yum remove</strong> 卸载软件包。举例如下：</p><pre><code># yum remove httpd
Failed to set locale, defaulting to C
Loaded plugins: amazon-id, downloadonly, rhui-lb, security
Setting up Remove Process
Resolving Dependencies
-&gt; Running transaction check
--&gt; Package httpd.x86_64 0:2.2.15-29.el6_4 will be erased
-&gt; Processing Dependency: httpd-mmn = 20051115 for package: php-5.3.3-23.el6_4.x86_64
-&gt; Processing Dependency: httpd = 2.2.15-29.el6_4 for package: httpd-devel-2.2.15-29.el6_4.x86_64
-&gt; Running transaction check
--&gt; Package httpd-devel.x86_64 0:2.2.15-29.el6_4 will be erased
--&gt; Package php.x86_64 0:5.3.3-23.el6_4 will be erased
-&gt; Finished Dependency Resolution

Dependencies Resolved

========================================================================
Package Arch Version Repository Size
========================================================================
Removing:
httpd x86_64 2.2.15-29.el6_4 @rhui-REGION-rhel-server-releases 2.9 M
Removing for dependencies:
httpd-devel x86_64 2.2.15-29.el6_4 @/httpd-devel-2.2.15-29.el6_4.x86_64 526 k
php x86_64 5.3.3-23.el6_4 @rhui-REGION-rhel-server-releases 3.5 M

Transaction Summary
==========================================================================
Remove 3 Package(s)

Installed size: 7.0 M
Is this ok [y/N]: y
Downloading Packages:
Running rpm_check_debug
Running Transaction Test
Transaction Test Succeeded
Running Transaction
Erasing : httpd-devel-2.2.15-29.el6_4.x86_64 1/3
Erasing : php-5.3.3-23.el6_4.x86_64 2/3
Erasing : httpd-2.2.15-29.el6_4.x86_64 3/3
Verifying : httpd-2.2.15-29.el6_4.x86_64 1/3
Verifying : httpd-devel-2.2.15-29.el6_4.x86_64 2/3
Verifying : php-5.3.3-23.el6_4.x86_64 3/3

Removed:
httpd.x86_64 0:2.2.15-29.el6_4

Dependency Removed:
httpd-devel.x86_64 0:2.2.15-29.el6_4 php.x86_64 0:5.3.3-23.el6_4

Complete!
</code></pre><p>###列出所有安装的软件包</p><p>假如你要列出你系统上安装的所有软件包，你可以使用<strong>yum list installed</strong>命令。这条命令结合grep命令是非常有用的，可以用来检查某个特定的软件包是否已被安装。这与使用rpm -qa命令询问已经安装的软件包相似。</p><pre><code># yum list installed
Loaded plugins: amazon-id, downloadonly, rhui-lb, security
Installed Packages
ConsoleKit.x86_64 0.4.1-3.el6 @koji-override-0/$releasever
ConsoleKit-libs.x86_64 0.4.1-3.el6 @koji-override-0/$releasever
MAKEDEV.x86_64 3.24-6.el6 @koji-override-0/$releasever
PyYAML.x86_64 3.10-3.1.el6 @koji-override-0/$releasever
Red_Hat_Enterprise_Linux-Release_Notes-6-en-US.noarch
4-2.el6 @koji-override-0/$releasever
SDL.x86_64 1.2.14-3.el6 @koji-override-0/$releasever
abrt.x86_64 2.0.8-15.el6 @koji-override-0/$releasever
abrt-addon-ccpp.x86_64 2.0.8-15.el6 @koji-override-0/$releasever
abrt-addon-kerneloops.x86_64 2.0.8-15.el6 @koji-override-0/$releasever
abrt-addon-python.x86_64 2.0.8-15.el6 @koji-override-0/$releasever
abrt-cli.x86_64 2.0.8-15.el6 @koji-override-0/$releasever
abrt-libs.x86_64 2.0.8-15.el6 @koji-override-0/$releasever
abrt-tui.x86_64 2.0.8-15.el6 @koji-override-0/$releasever
acl.x86_64 2.2.49-6.el6 @koji-override-0/$releasever
acpid.x86_64 1.0.10-2.1.el6 @koji-override-0/$releasever
aic94xx-firmware.noarch 30-2.el6 @koji-override-0/$releasever
.
.
Output Truncated.
</code></pre><p>###列出可用的软件库，通过它们可以查询、安装和更新软件包</p><pre><code># yum repolist

Loaded plugins: amazon-id, downloadonly, rhui-lb, security
repo id repo name status
rhui-REGION-client-config-server-6 Red Hat Update Infrastructure 2.0 Client Configuration Server 6 4
rhui-REGION-rhel-server-releases Red Hat Enterprise Linux Server 6 (RPMs) 10994
rhui-REGION-rhel-server-releases-optional Red Hat Enterprise Linux Server 6 Optional (RPMs) 6250
repolist: 17248
</code></pre><hr>`,43)),t("p",null,[e[1]||(e[1]=n("via: ",-1)),a(l,{href:"http://linoxide.com/linux-command/package-management-yum-redhat-linux/"},{default:r(()=>[...e[0]||(e[0]=[n("http://linoxide.com/linux-command/package-management-yum-redhat-linux/",-1)])]),_:1})]),t("p",null,[e[4]||(e[4]=n("译者：",-1)),a(l,{href:"https://github.com/Linux-pdz"},{default:r(()=>[...e[2]||(e[2]=[n("Linux-pdz",-1)])]),_:1}),e[5]||(e[5]=n(" 校对：",-1)),a(l,{href:"https://github.com/jasminepeng"},{default:r(()=>[...e[3]||(e[3]=[n("jasminepeng",-1)])]),_:1})]),t("p",null,[e[8]||(e[8]=n("本文由 ",-1)),a(l,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[n("LCTT",-1)])]),_:1}),e[9]||(e[9]=n(" 原创翻译，",-1)),a(l,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[n("Linux中国",-1)])]),_:1}),e[10]||(e[10]=n(" 荣誉推出",-1))])])}const b=i(_,[["render",g]]);export{k as __pageData,b as default};
