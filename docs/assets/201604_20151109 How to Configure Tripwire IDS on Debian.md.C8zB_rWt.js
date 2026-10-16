import{_ as a,a0 as s,w as p,s as l,ao as c,I as o,x as e,a1 as i,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"如何在 Debian 中配置 Tripewire IDS | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Debian 中配置 Tripewire IDS | LCTT (201604) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Debian 中配置 Tripewire IDS | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Debian 中配置 Tripewire IDS | LCTT (201604) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201604/20151109 How to Configure Tripwire IDS on Debian","title":"如何在 Debian 中配置 Tripewire IDS","tag":"201604","desc":""},"relativePath":"201604/20151109 How to Configure Tripwire IDS on Debian.md","filePath":"[post].md"}'),d={name:"201604/20151109 How to Configure Tripwire IDS on Debian.md"};function g(w,n,C,I,S,u){const t=s("Link");return p(),l("div",null,[n[13]||(n[13]=c(`<h1 id="如何在-debian-中配置-tripewire-ids" tabindex="-1">如何在 Debian 中配置 Tripewire IDS <a class="header-anchor" href="#如何在-debian-中配置-tripewire-ids" aria-label="Permalink to “如何在 Debian 中配置 Tripewire IDS”">​</a></h1><p>本文是一篇关于 Debian 中安装和配置 Tripewire 的文章。它是 Linux 环境下基于主机的入侵检测系统（IDS）。tripwire 的高级功能有检测并报告任何 Linux 中未授权的（文件和目录）的更改。tripewire 安装之后，会先创建一个基本的数据库，tripewire 监控并检测新文件的创建修改和谁修改了它等等。如果修改是合法的，你可以接受修改并更新 tripwire 的数据库。</p><h3 id="安装和配置" tabindex="-1">安装和配置 <a class="header-anchor" href="#安装和配置" aria-label="Permalink to “安装和配置”">​</a></h3><p>tripwire 在 Debian VM 中的安装如下。</p><pre><code># apt-get install tripwire
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/installation.png" alt="installation"></p><p>安装中，tripwire 会有下面的配置提示。</p><h4 id="站点密钥创建" tabindex="-1">站点密钥创建 <a class="header-anchor" href="#站点密钥创建" aria-label="Permalink to “站点密钥创建”">​</a></h4><p>tripwire 需要一个站点口令（site passphrase）来加密 tripwire 的配置文件 tw.cfg 和策略文件 tw.pol。tripewire 使用指定的密码加密两个文件。一个 tripewire 实例必须指定站点口令。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/site-key1.png" alt="site key1"></p><h4 id="本地密钥口令" tabindex="-1">本地密钥口令 <a class="header-anchor" href="#本地密钥口令" aria-label="Permalink to “本地密钥口令”">​</a></h4><p>本地口令用来保护 tripwire 数据库和报告文件。本地密钥用于阻止非授权的 tripewire 数据库修改。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/local-key1.png" alt="local key1"></p><h4 id="tripwire-配置路径" tabindex="-1">tripwire 配置路径 <a class="header-anchor" href="#tripwire-配置路径" aria-label="Permalink to “tripwire 配置路径”">​</a></h4><p>tripewire 配置存储在 /etc/tripwire/twcfg.txt。它用于生成加密的配置文件 tw.cfg。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuration-file.png" alt="configuration file"></p><p><strong>tripwire 策略路径</strong></p><p>tripwire 在 /etc/tripwire/twpol.txt 中保存策略文件。它用于生成加密的策略文件 tw.pol。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/tripwire-policy.png" alt="tripwire policy"></p><p>安装完成后如下图所示。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/installed-tripewire1.png" alt="installed tripewire1"></p><h4 id="tripwire-配置文件-twcfg-txt" tabindex="-1">tripwire 配置文件 (twcfg.txt) <a class="header-anchor" href="#tripwire-配置文件-twcfg-txt" aria-label="Permalink to “tripwire 配置文件 (twcfg.txt)”">​</a></h4><p>tripewire 配置文件（twcfg.txt）细节如下图所示。加密策略文件（tw.pol）、站点密钥（site.key）和本地密钥（hostname-local.key）在后面展示。</p><pre><code>ROOT         =/usr/sbin

POLFILE       =/etc/tripwire/tw.pol

DBFILE       =/var/lib/tripwire/$(HOSTNAME).twd

REPORTFILE   =/var/lib/tripwire/report/$(HOSTNAME)-$(DATE).twr

SITEKEYFILE   =/etc/tripwire/site.key

LOCALKEYFILE =/etc/tripwire/$(HOSTNAME)-local.key

EDITOR       =/usr/bin/editor

LATEPROMPTING =false

LOOSEDIRECTORYCHECKING =false

MAILNOVIOLATIONS =true

EMAILREPORTLEVEL =3

REPORTLEVEL   =3

SYSLOGREPORTING =true

MAILMETHOD   =SMTP

SMTPHOST     =localhost

SMTPPORT     =25

TEMPDIRECTORY =/tmp
</code></pre><h4 id="tripwire-策略配置" tabindex="-1">tripwire 策略配置 <a class="header-anchor" href="#tripwire-策略配置" aria-label="Permalink to “tripwire 策略配置”">​</a></h4><p>在生成基础数据库之前先配置 tripwire 配置。有必要经用一些策略如 /dev、 /proc 、/root/mail 等。详细的 twpol.txt 策略文件如下所示。</p><pre><code>@@section GLOBAL
TWBIN = /usr/sbin;
TWETC = /etc/tripwire;
TWVAR = /var/lib/tripwire;

#
# File System Definitions
#
@@section FS

#
# First, some variables to make configuration easier
#
SEC_CRIT      = $(IgnoreNone)-SHa ; # Critical files that cannot change

SEC_BIN       = $(ReadOnly) ;        # Binaries that should not change

SEC_CONFIG    = $(Dynamic) ;         # Config files that are changed
# infrequently but accessed
# often

SEC_LOG       = $(Growing) ;         # Files that grow, but that
# should never change ownership

SEC_INVARIANT = +tpug ;              # Directories that should never
# change permission or ownership

SIG_LOW       = 33 ;                 # Non-critical files that are of
# minimal security impact

SIG_MED       = 66 ;                 # Non-critical files that are of
# significant security impact

SIG_HI        = 100 ;                # Critical files that are
# significant points of
# vulnerability

#
# tripwire Binaries
#
(
rulename = &quot;tripwire Binaries&quot;,
severity = $(SIG_HI)
)
{
$(TWBIN)/siggen            -&gt; $(SEC_BIN) ;
$(TWBIN)/tripwire        -&gt; $(SEC_BIN) ;
$(TWBIN)/twadmin        -&gt; $(SEC_BIN) ;
$(TWBIN)/twprint        -&gt; $(SEC_BIN) ;
}
{
/boot            -&gt; $(SEC_CRIT) ;
/lib/modules        -&gt; $(SEC_CRIT) ;
}

(
rulename = &quot;Boot Scripts&quot;,
severity = $(SIG_HI)
)
{
/etc/init.d        -&gt; $(SEC_BIN) ;
#/etc/rc.boot        -&gt; $(SEC_BIN) ;
/etc/rcS.d        -&gt; $(SEC_BIN) ;
/etc/rc0.d        -&gt; $(SEC_BIN) ;
/etc/rc1.d        -&gt; $(SEC_BIN) ;
/etc/rc2.d        -&gt; $(SEC_BIN) ;
/etc/rc3.d        -&gt; $(SEC_BIN) ;
/etc/rc4.d        -&gt; $(SEC_BIN) ;
/etc/rc5.d        -&gt; $(SEC_BIN) ;
/etc/rc6.d        -&gt; $(SEC_BIN) ;
}

(
rulename = &quot;Root file-system executables&quot;,
severity = $(SIG_HI)
)
{
/bin            -&gt; $(SEC_BIN) ;
/sbin            -&gt; $(SEC_BIN) ;
}

#
# Critical Libraries
#
(
rulename = &quot;Root file-system libraries&quot;,
severity = $(SIG_HI)
)
{
/lib            -&gt; $(SEC_BIN) ;
}

#
# Login and Privilege Raising Programs
#
(
rulename = &quot;Security Control&quot;,
severity = $(SIG_MED)
)
{
/etc/passwd        -&gt; $(SEC_CONFIG) ;
/etc/shadow        -&gt; $(SEC_CONFIG) ;
}
{
#/var/lock        -&gt; $(SEC_CONFIG) ;
#/var/run        -&gt; $(SEC_CONFIG) ; # daemon PIDs
/var/log        -&gt; $(SEC_CONFIG) ;
}

# These files change the behavior of the root account
(
rulename = &quot;Root config files&quot;,
severity = 100
)
{
/root                -&gt; $(SEC_CRIT) ; # Catch all additions to /root
#/root/mail            -&gt; $(SEC_CONFIG) ;
#/root/Mail            -&gt; $(SEC_CONFIG) ;
/root/.xsession-errors        -&gt; $(SEC_CONFIG) ;
#/root/.xauth            -&gt; $(SEC_CONFIG) ;
#/root/.tcshrc            -&gt; $(SEC_CONFIG) ;
#/root/.sawfish            -&gt; $(SEC_CONFIG) ;
#/root/.pinerc            -&gt; $(SEC_CONFIG) ;
#/root/.mc            -&gt; $(SEC_CONFIG) ;
#/root/.gnome_private        -&gt; $(SEC_CONFIG) ;
#/root/.gnome-desktop        -&gt; $(SEC_CONFIG) ;
#/root/.gnome            -&gt; $(SEC_CONFIG) ;
#/root/.esd_auth            -&gt; $(SEC_CONFIG) ;
#    /root/.elm            -&gt; $(SEC_CONFIG) ;
#/root/.cshrc                -&gt; $(SEC_CONFIG) ;
#/root/.bashrc            -&gt; $(SEC_CONFIG) ;
#/root/.bash_profile        -&gt; $(SEC_CONFIG) ;
#    /root/.bash_logout        -&gt; $(SEC_CONFIG) ;
#/root/.bash_history        -&gt; $(SEC_CONFIG) ;
#/root/.amandahosts        -&gt; $(SEC_CONFIG) ;
#/root/.addressbook.lu        -&gt; $(SEC_CONFIG) ;
#/root/.addressbook        -&gt; $(SEC_CONFIG) ;
#/root/.Xresources        -&gt; $(SEC_CONFIG) ;
#/root/.Xauthority        -&gt; $(SEC_CONFIG) -i ; # Changes Inode number on login
/root/.ICEauthority            -&gt; $(SEC_CONFIG) ;
}

#
# Critical devices
#
(
rulename = &quot;Devices &amp; Kernel information&quot;,
severity = $(SIG_HI),
)
{
#/dev        -&gt; $(Device) ;
#/proc        -&gt; $(Device) ;
}
</code></pre><h4 id="tripwire-报告" tabindex="-1">tripwire 报告 <a class="header-anchor" href="#tripwire-报告" aria-label="Permalink to “tripwire 报告”">​</a></h4><p><strong>tripwire-check</strong> 命令检查 twpol.txt 文件并基于此文件生成 tripwire 报告如下。如果 twpol.txt 中有任何错误，tripwire 不会生成报告。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/tripwire-report.png" alt="tripwire report"></p><p><strong>文本形式报告</strong></p><pre><code>root@VMdebian:/home/labadmin# tripwire --check

Parsing policy file: /etc/tripwire/tw.pol

*** Processing Unix File System ***

Performing integrity check...

Wrote report file: /var/lib/tripwire/report/VMdebian-20151024-122322.twr

Open Source tripwire(R) 2.4.2.2 Integrity Check Report

Report generated by:         root

Report created on:           Sat Oct 24 12:23:22 2015

Database last updated on:     Never

Report Summary:

=========================================================

Host name:                   VMdebian

Host IP address:             127.0.1.1

Host ID:                     None

Policy file used:             /etc/tripwire/tw.pol

Configuration file used:     /etc/tripwire/tw.cfg

Database file used:           /var/lib/tripwire/VMdebian.twd

Command line used:           tripwire --check

=========================================================

Rule Summary:

=========================================================

-------------------------------------------------------------------------------

Section: Unix File System

-------------------------------------------------------------------------------

Rule Name                       Severity Level   Added   Removed Modified

---------                       --------------   -----   ------- --------

Other binaries                 66               0       0       0      

tripwire Binaries               100               0       0       0      

Other libraries                 66               0       0       0      

Root file-system executables   100               0       0       0      

tripwire Data Files             100               0       0       0      

System boot changes             100               0       0       0      

(/var/log)

Root file-system libraries     100               0       0       0      

(/lib)

Critical system boot files     100               0       0       0      

Other configuration files       66               0       0       0      

(/etc)

Boot Scripts                   100               0       0       0      

Security Control               66               0       0       0      

Root config files               100               0       0       0      

Invariant Directories           66               0       0       0      

Total objects scanned: 25943

Total violations found: 0

=========================Object Summary:================================

-------------------------------------------------------------------------------

# Section: Unix File System

-------------------------------------------------------------------------------

No violations.

===========================Error Report:=====================================

No Errors

-------------------------------------------------------------------------------

*** End of report ***

Open Source tripwire 2.4 Portions copyright 2000 tripwire, Inc. tripwire is a registered

trademark of tripwire, Inc. This software comes with ABSOLUTELY NO WARRANTY;

for details use --version. This is free software which may be redistributed

or modified only under certain conditions; see COPYING for details.

All rights reserved.

Integrity check complete.
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>本篇中，我们学习安装配置开源入侵检测软件 tripwire。首先生成基础数据库并通过比较检测出任何改动（文件/文件夹）。然而，tripwire 并不是实时监测的 IDS。</p><hr>`,35)),o("p",null,[n[1]||(n[1]=e("via: ",-1)),i(t,{href:"http://linoxide.com/security/configure-tripwire-ids-debian/"},{default:r(()=>[...n[0]||(n[0]=[e("http://linoxide.com/security/configure-tripwire-ids-debian/",-1)])]),_:1})]),o("p",null,[n[5]||(n[5]=e("作者：",-1)),i(t,{href:"http://linoxide.com/author/naveeda/"},{default:r(()=>[...n[2]||(n[2]=[e("nido",-1)])]),_:1}),n[6]||(n[6]=e(" 译者：",-1)),i(t,{href:"https://github.com/geekpi"},{default:r(()=>[...n[3]||(n[3]=[e("geekpi",-1)])]),_:1}),n[7]||(n[7]=e(" 校对：",-1)),i(t,{href:"https://github.com/wxy"},{default:r(()=>[...n[4]||(n[4]=[e("wxy",-1)])]),_:1})]),o("p",null,[n[10]||(n[10]=e("本文由 ",-1)),i(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[8]||(n[8]=[e("LCTT",-1)])]),_:1}),n[11]||(n[11]=e(" 原创编译，",-1)),i(t,{href:"https://linux.cn/"},{default:r(()=>[...n[9]||(n[9]=[e("Linux中国",-1)])]),_:1}),n[12]||(n[12]=e(" 荣誉推出",-1))])])}const b=a(d,[["render",g]]);export{f as __pageData,b as default};
