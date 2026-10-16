import{_ as i,a0 as p,w as s,s as d,ao as o,I as t,x as n,a1 as a,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"在紅帽Linux中使用YUM包管理器 | LCTT x X-CMD","titleTemplate":false,"description":"在紅帽Linux中使用YUM包管理器 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在紅帽Linux中使用YUM包管理器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在紅帽Linux中使用YUM包管理器 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Package Management Using YUM In Red Hat Linux","title":"在紅帽Linux中使用YUM包管理器","tag":"201311","desc":""},"relativePath":"201311/Package Management Using YUM In Red Hat Linux.md","filePath":"[post].md"}'),_={name:"201311/Package Management Using YUM In Red Hat Linux.md"};function g(c,e,u,h,x,m){const l=p("Link");return s(),d("div",null,[e[11]||(e[11]=o(`<h1 id="在紅帽linux中使用yum包管理器" tabindex="-1">在紅帽Linux中使用YUM包管理器 <a class="header-anchor" href="#在紅帽linux中使用yum包管理器" aria-label="Permalink to “在紅帽Linux中使用YUM包管理器”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/11/yum-package-install.png" alt=""></p><p><strong>YUM</strong>是RHEL系統中提供的一個安裝，卸載和搜索軟件包的工具。它能做的不僅僅是安裝、卸載軟件包，它能做的還有更多，下面我們將在本文中為你展示。</p><p>YUM可以自動安裝軟件包的依賴包，例如當你使用yum安裝httpd時，它還會自動安裝https apache server以及它依賴的軟件包。通過rpm軟件包安裝時就沒有這麼方便咯（譯註：就是不會自動處理軟件包依賴問題咯！），你必須下載所有它依賴的軟件包，然後依序安裝它們。</p><p>yum工具從遠端服務器上的軟件倉庫（通常由OS提供商提供）獲取軟件包的信息。一個軟件倉庫是能在特定架構上運行的一系列rpm軟件包的集合。例如，對於32位和64位系統各有一個軟件倉庫，還有針對RHEL5以及RHEL6的軟件倉庫。你也可以建立一個本地倉庫，配置你的yum讓其從你的本地倉庫裏搜索安裝軟件包。在接下來的例子中，我將向你展示除了安裝和卸載軟件，yum還可以做的其它事情。為方便理解，我將在我的Amazon EC2 RHEL 6.4服務器上使用httpd軟件包為例。</p><p>###從軟件倉庫裏搜索軟件包 # yum search httpd</p><pre><code>Loaded plugins: amazon-id, rhui-lb, security
=============================================== N/S Matched: httpd ==========
httpd.x86_64 : Apache HTTP Server
httpd-devel.i686 : Development interfaces for the Apache HTTP server
httpd-devel.x86_64 : Development interfaces for the Apache HTTP server
httpd-manual.noarch : Documentation for the Apache HTTP server
httpd-tools.x86_64 : Tools for use with the Apache HTTP Server
mod_dav_svn.x86_64 : Apache httpd module for Subversion server
mod_dnssd.x86_64 : An Apache HTTPD module which adds Zeroconf support
</code></pre><p>想獲得詳細的輸出信息，可以使用下面的命令：</p><pre><code># yum provides httpd

Loaded plugins: amazon-id, rhui-lb, security
httpd-2.2.15-26.el6.x86_64 : Apache HTTP Server
Repo : rhui-REGION-rhel-server-releases
Matched from:
</code></pre><p><strong>yum provides httpd</strong>在軟件倉庫裏搜索含有httpd的軟件包。</p><p>###提供所有軟件組列表</p><pre><code># yum grouplist
</code></pre><p>以上命令將為你顯示已經安裝的以及可用的軟件組。你可以使用軟件組安裝選項來安裝其中一個軟件組。例如，我們將安裝一個PHP Support的軟件組。這個軟件組內包含需要的PHP軟件包。</p><pre><code># yum groupinstall PHP Support

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
</code></pre><p>###使用YUM安裝軟件包</p><p>可以使用<strong>yum install</strong>命令安裝軟件包，如下所示：</p><pre><code>#  yum install httpd

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
</code></pre><p>如你所見，在安裝httpd時yum安裝了額外的軟件包。這稱為yum完成的依賴包解析。</p><p>假如你不想讓yum彈出[y/N]選項，可以使用<strong>yum install -y httpd</strong></p><p>####使用yum update 命令更新一個已存在的軟件包</p><pre><code># yum update httpd
Loaded plugins: amazon-id, rhui-lb, security
Setting up Update Process
No Packages marked for Update
</code></pre><p>這意味着你係統中安裝的httpd軟件包已經是yum軟件倉庫裏的最新版本的了。</p><p>####更新服務器上所有的軟件包</p><pre><code># yum update
</code></pre><p>以上命令將系統上的所有軟件包更新到最新版本，包括內核軟件包，這意味着你的OS更新到了RHEL提供的最新版本了。</p><p>###下載RPM軟件包但是不安裝</p><p>可以使用yum從RHEL或者CentOS的軟件倉庫裏下載RPM軟件包但是不安裝。你首先需要下載一個插件讓yum只下載rpm軟件包而不安裝。插件名字叫downloadonly，可以通過yum安裝，如下所示：</p><pre><code># yum install yum-downloadonly
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
</code></pre><p>現在你就可以從軟件倉庫裏只下載軟件包而不安裝了，命令如下：</p><pre><code># yum install httpd-devel -downloadonly
</code></pre><p>默認情況下軟件包會被下載到<strong>/var/cache/yum/&lt;arch&gt;</strong>目錄，但是你可以添加額外選項將其下載到指定位置</p><pre><code># yum install httpd-devel -downloadonly -downloaddir=/opt
</code></pre><p>假如你有一個rpm軟件包但是沒有它所依賴的軟件包，你不知道到哪去得到它所依賴的軟件包。你仍然可以通過yum安裝這個rpm軟件包，並從軟件倉庫裏得到它所依賴的軟件包。讓我們安裝剛剛下載的httpd-devel-2.2.15-29.el6_4.x86_64 RPM軟件包。</p><pre><code># yum localinstall /opt/httpd-devel-2.2.15-29.el6_4.x86_64.rpm

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
</code></pre><p>###使用yum卸載軟件包</p><p>使用 <strong>yum remove</strong> 卸載軟件包。舉例如下：</p><pre><code># yum remove httpd
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
</code></pre><p>###列出所有安裝的軟件包</p><p>假如你要列出你係統上安裝的所有軟件包，你可以使用<strong>yum list installed</strong>命令。這條命令結合grep命令是非常有用的，可以用來檢查某個特定的軟件包是否已被安裝。這與使用rpm -qa命令詢問已經安裝的軟件包相似。</p><pre><code># yum list installed
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
</code></pre><p>###列出可用的軟件庫，通過它們可以查詢、安裝和更新軟件包</p><pre><code># yum repolist

Loaded plugins: amazon-id, downloadonly, rhui-lb, security
repo id repo name status
rhui-REGION-client-config-server-6 Red Hat Update Infrastructure 2.0 Client Configuration Server 6 4
rhui-REGION-rhel-server-releases Red Hat Enterprise Linux Server 6 (RPMs) 10994
rhui-REGION-rhel-server-releases-optional Red Hat Enterprise Linux Server 6 Optional (RPMs) 6250
repolist: 17248
</code></pre><hr>`,43)),t("p",null,[e[1]||(e[1]=n("via: ",-1)),a(l,{href:"http://linoxide.com/linux-command/package-management-yum-redhat-linux/"},{default:r(()=>[...e[0]||(e[0]=[n("http://linoxide.com/linux-command/package-management-yum-redhat-linux/",-1)])]),_:1})]),t("p",null,[e[4]||(e[4]=n("譯者：",-1)),a(l,{href:"https://github.com/Linux-pdz"},{default:r(()=>[...e[2]||(e[2]=[n("Linux-pdz",-1)])]),_:1}),e[5]||(e[5]=n(" 校對：",-1)),a(l,{href:"https://github.com/jasminepeng"},{default:r(()=>[...e[3]||(e[3]=[n("jasminepeng",-1)])]),_:1})]),t("p",null,[e[8]||(e[8]=n("本文由 ",-1)),a(l,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[n("LCTT",-1)])]),_:1}),e[9]||(e[9]=n(" 原創翻譯，",-1)),a(l,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[n("Linux中國",-1)])]),_:1}),e[10]||(e[10]=n(" 榮譽推出",-1))])])}const b=i(_,[["render",g]]);export{k as __pageData,b as default};
