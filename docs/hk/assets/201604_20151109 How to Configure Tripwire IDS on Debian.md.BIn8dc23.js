import{_ as a,a0 as s,w as p,s as l,ao as c,I as o,x as e,a1 as i,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"如何在 Debian 中配置 Tripewire IDS | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Debian 中配置 Tripewire IDS | LCTT (201604) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Debian 中配置 Tripewire IDS | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Debian 中配置 Tripewire IDS | LCTT (201604) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201604/20151109 How to Configure Tripwire IDS on Debian","title":"如何在 Debian 中配置 Tripewire IDS","tag":"201604","desc":""},"relativePath":"201604/20151109 How to Configure Tripwire IDS on Debian.md","filePath":"[post].md"}'),d={name:"201604/20151109 How to Configure Tripwire IDS on Debian.md"};function g(w,n,C,I,S,u){const t=s("Link");return p(),l("div",null,[n[13]||(n[13]=c(`<h1 id="如何在-debian-中配置-tripewire-ids" tabindex="-1">如何在 Debian 中配置 Tripewire IDS <a class="header-anchor" href="#如何在-debian-中配置-tripewire-ids" aria-label="Permalink to “如何在 Debian 中配置 Tripewire IDS”">​</a></h1><p>本文是一篇關於 Debian 中安裝和配置 Tripewire 的文章。它是 Linux 環境下基於主機的入侵檢測系統（IDS）。tripwire 的高級功能有檢測並報告任何 Linux 中未授權的（文件和目錄）的更改。tripewire 安裝之後，會先創建一個基本的資料庫，tripewire 監控並檢測新文件的創建修改和誰修改了它等等。如果修改是合法的，你可以接受修改並更新 tripwire 的資料庫。</p><h3 id="安裝和配置" tabindex="-1">安裝和配置 <a class="header-anchor" href="#安裝和配置" aria-label="Permalink to “安裝和配置”">​</a></h3><p>tripwire 在 Debian VM 中的安裝如下。</p><pre><code># apt-get install tripwire
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/installation.png" alt="installation"></p><p>安裝中，tripwire 會有下面的配置提示。</p><h4 id="站點密鑰創建" tabindex="-1">站點密鑰創建 <a class="header-anchor" href="#站點密鑰創建" aria-label="Permalink to “站點密鑰創建”">​</a></h4><p>tripwire 需要一個站點口令（site passphrase）來加密 tripwire 的配置文件 tw.cfg 和策略文件 tw.pol。tripewire 使用指定的密碼加密兩個文件。一個 tripewire 實例必須指定站點口令。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/site-key1.png" alt="site key1"></p><h4 id="本地密鑰口令" tabindex="-1">本地密鑰口令 <a class="header-anchor" href="#本地密鑰口令" aria-label="Permalink to “本地密鑰口令”">​</a></h4><p>本地口令用來保護 tripwire 資料庫和報告文件。本地密鑰用於阻止非授權的 tripewire 資料庫修改。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/local-key1.png" alt="local key1"></p><h4 id="tripwire-配置路徑" tabindex="-1">tripwire 配置路徑 <a class="header-anchor" href="#tripwire-配置路徑" aria-label="Permalink to “tripwire 配置路徑”">​</a></h4><p>tripewire 配置存儲在 /etc/tripwire/twcfg.txt。它用於生成加密的配置文件 tw.cfg。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuration-file.png" alt="configuration file"></p><p><strong>tripwire 策略路徑</strong></p><p>tripwire 在 /etc/tripwire/twpol.txt 中保存策略文件。它用於生成加密的策略文件 tw.pol。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/tripwire-policy.png" alt="tripwire policy"></p><p>安裝完成後如下圖所示。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/installed-tripewire1.png" alt="installed tripewire1"></p><h4 id="tripwire-配置文件-twcfg-txt" tabindex="-1">tripwire 配置文件 (twcfg.txt) <a class="header-anchor" href="#tripwire-配置文件-twcfg-txt" aria-label="Permalink to “tripwire 配置文件 (twcfg.txt)”">​</a></h4><p>tripewire 配置文件（twcfg.txt）細節如下圖所示。加密策略文件（tw.pol）、站點密鑰（site.key）和本地密鑰（hostname-local.key）在後面展示。</p><pre><code>ROOT         =/usr/sbin

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
</code></pre><h4 id="tripwire-策略配置" tabindex="-1">tripwire 策略配置 <a class="header-anchor" href="#tripwire-策略配置" aria-label="Permalink to “tripwire 策略配置”">​</a></h4><p>在生成基礎資料庫之前先配置 tripwire 配置。有必要經用一些策略如 /dev、 /proc 、/root/mail 等。詳細的 twpol.txt 策略文件如下所示。</p><pre><code>@@section GLOBAL
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
</code></pre><h4 id="tripwire-報告" tabindex="-1">tripwire 報告 <a class="header-anchor" href="#tripwire-報告" aria-label="Permalink to “tripwire 報告”">​</a></h4><p><strong>tripwire-check</strong> 命令檢查 twpol.txt 文件並基於此文件生成 tripwire 報告如下。如果 twpol.txt 中有任何錯誤，tripwire 不會生成報告。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/tripwire-report.png" alt="tripwire report"></p><p><strong>文本形式報告</strong></p><pre><code>root@VMdebian:/home/labadmin# tripwire --check

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
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>本篇中，我們學習安裝配置開源入侵檢測軟件 tripwire。首先生成基礎資料庫並通過比較檢測出任何改動（文件/文件夾）。然而，tripwire 並不是實時監測的 IDS。</p><hr>`,35)),o("p",null,[n[1]||(n[1]=e("via: ",-1)),i(t,{href:"http://linoxide.com/security/configure-tripwire-ids-debian/"},{default:r(()=>[...n[0]||(n[0]=[e("http://linoxide.com/security/configure-tripwire-ids-debian/",-1)])]),_:1})]),o("p",null,[n[5]||(n[5]=e("作者：",-1)),i(t,{href:"http://linoxide.com/author/naveeda/"},{default:r(()=>[...n[2]||(n[2]=[e("nido",-1)])]),_:1}),n[6]||(n[6]=e(" 譯者：",-1)),i(t,{href:"https://github.com/geekpi"},{default:r(()=>[...n[3]||(n[3]=[e("geekpi",-1)])]),_:1}),n[7]||(n[7]=e(" 校對：",-1)),i(t,{href:"https://github.com/wxy"},{default:r(()=>[...n[4]||(n[4]=[e("wxy",-1)])]),_:1})]),o("p",null,[n[10]||(n[10]=e("本文由 ",-1)),i(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[8]||(n[8]=[e("LCTT",-1)])]),_:1}),n[11]||(n[11]=e(" 原創編譯，",-1)),i(t,{href:"https://linux.cn/"},{default:r(()=>[...n[9]||(n[9]=[e("Linux中國",-1)])]),_:1}),n[12]||(n[12]=e(" 榮譽推出",-1))])])}const b=a(d,[["render",g]]);export{f as __pageData,b as default};
