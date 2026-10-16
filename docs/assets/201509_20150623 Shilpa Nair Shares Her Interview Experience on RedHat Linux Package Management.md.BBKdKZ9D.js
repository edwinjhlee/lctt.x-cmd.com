import{_ as i,a0 as d,w as s,s as l,ao as o,I as p,a1 as r,A as t,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"Shilpa Nair 分享的 RedHat Linux 包管理方面的面试经验 | LCTT x X-CMD","titleTemplate":false,"description":"Shilpa Nair 分享的 RedHat Linux 包管理方面的面试经验 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shilpa Nair 分享的 RedHat Linux 包管理方面的面试经验 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shilpa Nair 分享的 RedHat Linux 包管理方面的面试经验 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150623 Shilpa Nair Shares Her Interview Experience on RedHat Linux Package Management","title":"Shilpa Nair 分享的 RedHat Linux 包管理方面的面试经验","tag":"201509","desc":""},"relativePath":"201509/20150623 Shilpa Nair Shares Her Interview Experience on RedHat Linux Package Management.md","filePath":"[post].md"}'),c={name:"201509/20150623 Shilpa Nair Shares Her Interview Experience on RedHat Linux Package Management.md"};function m(h,e,f,u,x,g){const a=d("Link");return s(),l("div",null,[e[18]||(e[18]=o(`<h1 id="shilpa-nair-分享的-redhat-linux-包管理方面的面试经验" tabindex="-1">Shilpa Nair 分享的 RedHat Linux 包管理方面的面试经验 <a class="header-anchor" href="#shilpa-nair-分享的-redhat-linux-包管理方面的面试经验" aria-label="Permalink to “Shilpa Nair 分享的 RedHat Linux 包管理方面的面试经验”">​</a></h1><p><strong>Shilpa Nair 刚于2015年毕业。她之后去了一家位于 Noida，Delhi 的国家新闻电视台，应聘实习生的岗位。在她去年毕业季的时候，常逛 Tecmint 寻求作业上的帮助。从那时开始，她就常去 Tecmint。</strong></p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Linux-Interview-Questions-on-RPM.jpeg" alt="Linux Interview Questions on RPM"></p><p><em>有关 RPM 方面的 Linux 面试题</em></p><p>所有的问题和回答都是 Shilpa Nair 根据回忆重写的。</p><blockquote><p>“大家好！我是来自 Delhi 的Shilpa Nair。我不久前才顺利毕业，正寻找一个实习的机会。在大学早期的时候，我就对 UNIX 十分喜爱，所以我也希望这个机会能适合我，满足我的兴趣。我被提问了很多问题，大部分都是关于 RedHat 包管理的基础问题。”</p></blockquote><p>下面就是我被问到的问题，和对应的回答。我仅贴出了与 RedHat GNU/Linux 包管理相关的，也是主要被提问的。</p><h3 id="_1-linux-里如何查找一个包安装与否-假设你需要确认-nano-有没有安装-你怎么做" tabindex="-1">1，Linux 里如何查找一个包安装与否？假设你需要确认 ‘nano’ 有没有安装，你怎么做？ <a class="header-anchor" href="#_1-linux-里如何查找一个包安装与否-假设你需要确认-nano-有没有安装-你怎么做" aria-label="Permalink to “1，Linux 里如何查找一个包安装与否？假设你需要确认 ‘nano’ 有没有安装，你怎么做？”">​</a></h3><p><strong>回答</strong>：为了确认 nano 软件包有没有安装，我们可以使用 rpm 命令，配合 -q 和 -a 选项来查询所有已安装的包</p><pre><code># rpm -qa nano
或
# rpm -qa | grep -i nano

nano-2.3.1-10.el7.x86_64
</code></pre><p>同时包的名字必须是完整的，不完整的包名会返回到提示符，不打印任何东西，就是说这包（包名字不全）未安装。下面的例子会更好理解些：</p><p>我们通常使用 vim 替代 vi 命令。当时如果我们查找安装包 vi/vim 的时候，我们就会看到标准输出上没有任何结果。</p><pre><code># vi
# vim
</code></pre><p>尽管如此，我们仍然可以像上面一样运行 vi/vim 命令来清楚地知道包有没有安装。只是因为我们不知道它的完整包名才不能找到的。如果我们不确切知道完整的文件名，我们可以使用通配符：</p><pre><code># rpm -qa vim*

vim-minimal-7.4.160-1.el7.x86_64
</code></pre><p>通过这种方式，我们可以获得任何软件包的信息，安装与否。</p><h3 id="_2-你如何使用-rpm-命令安装-xyz-软件包" tabindex="-1">2. 你如何使用 rpm 命令安装 XYZ 软件包？ <a class="header-anchor" href="#_2-你如何使用-rpm-命令安装-xyz-软件包" aria-label="Permalink to “2. 你如何使用 rpm 命令安装 XYZ 软件包？”">​</a></h3><p><strong>回答</strong>：我们可以使用 rpm 命令安装任何的软件包（*.rpm），像下面这样，选项 -i（安装），-v（冗余或者显示额外的信息）和 -h（在安装过程中，打印#号显示进度）。</p><pre><code># rpm -ivh peazip-1.11-1.el6.rf.x86_64.rpm

Preparing...                          ################################# [100%]
Updating / installing...
   1:peazip-1.11-1.el6.rf             ################################# [100%]
</code></pre><p>如果要升级一个早期版本的包，应加上 -U 选项，选项 -v 和 -h 可以确保我们得到用 # 号表示的冗余输出，这增加了可读性。</p><h3 id="_3-你已经安装了一个软件包-假设是-httpd-现在你想看看软件包创建并安装的所有文件和目录-你会怎么做" tabindex="-1">3. 你已经安装了一个软件包（假设是 httpd），现在你想看看软件包创建并安装的所有文件和目录，你会怎么做？ <a class="header-anchor" href="#_3-你已经安装了一个软件包-假设是-httpd-现在你想看看软件包创建并安装的所有文件和目录-你会怎么做" aria-label="Permalink to “3. 你已经安装了一个软件包（假设是 httpd），现在你想看看软件包创建并安装的所有文件和目录，你会怎么做？”">​</a></h3><p><strong>回答</strong>：使用选项 -l（列出所有文件）和 -q（查询）列出 httpd 软件包安装的所有文件（Linux 哲学：所有的都是文件，包括目录）。</p><pre><code># rpm -ql httpd

/etc/httpd
/etc/httpd/conf
/etc/httpd/conf.d
...
</code></pre><h3 id="_4-假如你要移除一个软件包-叫-postfix。你会怎么做" tabindex="-1">4. 假如你要移除一个软件包，叫 postfix。你会怎么做？ <a class="header-anchor" href="#_4-假如你要移除一个软件包-叫-postfix。你会怎么做" aria-label="Permalink to “4. 假如你要移除一个软件包，叫 postfix。你会怎么做？”">​</a></h3><p><strong>回答</strong>：首先我们需要知道什么包安装了 postfix。查找安装 postfix 的包名后，使用 -e（擦除/卸载软件包）和 -v（冗余输出）两个选项来实现。</p><pre><code># rpm -qa postfix*

postfix-2.10.1-6.el7.x86_64
</code></pre><p>然后移除 postfix，如下:</p><pre><code># rpm -ev postfix-2.10.1-6.el7.x86_64

Preparing packages...
postfix-2:3.0.1-2.fc22.x86_64
</code></pre><h3 id="_5-获得一个已安装包的具体信息-如版本-发行号-安装日期-大小-总结和一个简短的描述。" tabindex="-1">5. 获得一个已安装包的具体信息，如版本，发行号，安装日期，大小，总结和一个简短的描述。 <a class="header-anchor" href="#_5-获得一个已安装包的具体信息-如版本-发行号-安装日期-大小-总结和一个简短的描述。" aria-label="Permalink to “5. 获得一个已安装包的具体信息，如版本，发行号，安装日期，大小，总结和一个简短的描述。”">​</a></h3><p><strong>回答</strong>：我们通过使用 rpm 的选项 -qi，后面接包名，可以获得关于一个已安装包的具体信息。</p><p>举个例子，为了获得 openssh 包的具体信息，我需要做的就是：</p><pre><code># rpm -qi openssh

[root@tecmint tecmint]# rpm -qi openssh
Name        : openssh
Version     : 6.8p1
Release     : 5.fc22
Architecture: x86_64
Install Date: Thursday 28 May 2015 12:34:50 PM IST
Group       : Applications/Internet
Size        : 1542057
License     : BSD
....
</code></pre><h3 id="_6-假如你不确定一个指定包的配置文件在哪-比如-httpd。你如何找到所有-httpd-提供的配置文件列表和位置。" tabindex="-1">6. 假如你不确定一个指定包的配置文件在哪，比如 httpd。你如何找到所有 httpd 提供的配置文件列表和位置。 <a class="header-anchor" href="#_6-假如你不确定一个指定包的配置文件在哪-比如-httpd。你如何找到所有-httpd-提供的配置文件列表和位置。" aria-label="Permalink to “6. 假如你不确定一个指定包的配置文件在哪，比如 httpd。你如何找到所有 httpd 提供的配置文件列表和位置。”">​</a></h3><p><strong>回答</strong>： 我们需要用选项 -c 接包名，这会列出所有配置文件的名字和他们的位置。</p><pre><code># rpm -qc httpd

/etc/httpd/conf.d/autoindex.conf
/etc/httpd/conf.d/userdir.conf
/etc/httpd/conf.d/welcome.conf
/etc/httpd/conf.modules.d/00-base.conf
/etc/httpd/conf/httpd.conf
/etc/sysconfig/httpd
</code></pre><p>相似地，我们可以列出所有相关的文档文件，如下：</p><pre><code># rpm -qd httpd

/usr/share/doc/httpd/ABOUT_APACHE
/usr/share/doc/httpd/CHANGES
/usr/share/doc/httpd/LICENSE
...
</code></pre><p>我们也可以列出所有相关的证书文件，如下：</p><pre><code># rpm -qL openssh

/usr/share/licenses/openssh/LICENCE
</code></pre><p>忘了说明上面的选项 -d 和 -L 分别表示 “文档” 和 “证书”，抱歉。</p><h3 id="_7-你找到了一个配置文件-位于-usr-share-alsa-cards-aaci-conf-现在你不确定该文件属于哪个包。你如何查找出包的名字" tabindex="-1">7. 你找到了一个配置文件，位于‘/usr/share/alsa/cards/AACI.conf’，现在你不确定该文件属于哪个包。你如何查找出包的名字？ <a class="header-anchor" href="#_7-你找到了一个配置文件-位于-usr-share-alsa-cards-aaci-conf-现在你不确定该文件属于哪个包。你如何查找出包的名字" aria-label="Permalink to “7. 你找到了一个配置文件，位于‘/usr/share/alsa/cards/AACI.conf’，现在你不确定该文件属于哪个包。你如何查找出包的名字？”">​</a></h3><p><strong>回答</strong>：当一个包被安装后，相关的信息就存储在了数据库里。所以使用选项 -qf（-f 查询包拥有的文件）很容易追踪谁提供了上述的包。</p><pre><code># rpm -qf /usr/share/alsa/cards/AACI.conf
alsa-lib-1.0.28-2.el7.x86_64
</code></pre><p>类似地，我们可以查找（谁提供的）关于任何子包，文档和证书文件的信息。</p><h3 id="_8-你如何使用-rpm-查找最近安装的软件列表" tabindex="-1">8. 你如何使用 rpm 查找最近安装的软件列表？ <a class="header-anchor" href="#_8-你如何使用-rpm-查找最近安装的软件列表" aria-label="Permalink to “8. 你如何使用 rpm 查找最近安装的软件列表？”">​</a></h3><p><strong>回答</strong>：如刚刚说的，每一样被安装的文件都记录在了数据库里。所以这并不难，通过查询 rpm 的数据库，找到最近安装软件的列表。</p><p>我们通过运行下面的命令，使用选项 -last（打印出最近安装的软件）达到目的。</p><pre><code># rpm -qa --last
</code></pre><p>上面的命令会打印出所有安装的软件，最近安装的软件在列表的顶部。</p><p>如果我们关心的是找出特定的包，我们可以使用 grep 命令从列表中匹配包（假设是 sqlite ），简单如下：</p><pre><code># rpm -qa --last | grep -i sqlite

sqlite-3.8.10.2-1.fc22.x86_64                 Thursday 18 June 2015 05:05:43 PM IST
</code></pre><p>我们也可以获得10个最近安装的软件列表，简单如下：</p><pre><code># rpm -qa --last | head
</code></pre><p>我们可以重定义一下，输出想要的结果，简单如下：</p><pre><code># rpm -qa --last | head -n 2
</code></pre><p>上面的命令中，-n 代表数目，后面接一个常数值。该命令是打印2个最近安装的软件的列表。</p><h3 id="_9-安装一个包之前-你如果要检查其依赖。你会怎么做" tabindex="-1">9. 安装一个包之前，你如果要检查其依赖。你会怎么做？ <a class="header-anchor" href="#_9-安装一个包之前-你如果要检查其依赖。你会怎么做" aria-label="Permalink to “9. 安装一个包之前，你如果要检查其依赖。你会怎么做？”">​</a></h3><p><strong>回答</strong>：检查一个 rpm 包（XYZ.rpm）的依赖，我们可以使用选项 -q（查询包），-p（指定包名）和 -R（查询/列出该包依赖的包，嗯，就是依赖）。</p><pre><code># rpm -qpR gedit-3.16.1-1.fc22.i686.rpm 

/bin/sh
/usr/bin/env
glib2(x86-32) &gt;= 2.40.0
gsettings-desktop-schemas
gtk3(x86-32) &gt;= 3.16
gtksourceview3(x86-32) &gt;= 3.16
gvfs
libX11.so.6
...
</code></pre><h3 id="_10-rpm-是不是一个前端的包管理工具呢" tabindex="-1">10. rpm 是不是一个前端的包管理工具呢？ <a class="header-anchor" href="#_10-rpm-是不是一个前端的包管理工具呢" aria-label="Permalink to “10. rpm 是不是一个前端的包管理工具呢？”">​</a></h3><p><strong>回答</strong>：<strong>不是！</strong>rpm 是一个后端管理工具，适用于基于 Linux 发行版的 RPM （此处指 Redhat Package Management）。</p>`,61)),p("p",null,[r(a,{href:"http://www.tecmint.com/20-linux-yum-yellowdog-updater-modified-commands-for-package-mangement/"},{default:t(()=>[...e[0]||(e[0]=[n("YUM",-1)])]),_:1}),e[1]||(e[1]=n("，全称 Yellowdog Updater Modified，是一个 RPM 的前端工具。YUM 命令自动完成所有工作，包括解决依赖和其他一切事务。",-1))]),p("p",null,[e[3]||(e[3]=n("最近，",-1)),r(a,{href:"https://linux.cn/article-5718-1.html"},{default:t(()=>[...e[2]||(e[2]=[n("DNF",-1)])]),_:1}),e[4]||(e[4]=n("（YUM命令升级版）在Fedora 22发行版中取代了 YUM。尽管 YUM 仍然可以在 RHEL 和 CentOS 平台使用，我们也可以安装 dnf，与 YUM 命令共存使用。据说 DNF 较于 YUM 有很多提高。",-1))]),e[19]||(e[19]=o(`<p>知道更多总是好的，保持自我更新。现在我们移步到前端部分来谈谈。</p><h3 id="_11-你如何列出一个系统上面所有可用的仓库列表。" tabindex="-1">11. 你如何列出一个系统上面所有可用的仓库列表。 <a class="header-anchor" href="#_11-你如何列出一个系统上面所有可用的仓库列表。" aria-label="Permalink to “11. 你如何列出一个系统上面所有可用的仓库列表。”">​</a></h3><p><strong>回答</strong>：简单地使用下面的命令，我们就可以列出一个系统上所有可用的仓库列表。</p><pre><code># yum repolist
或
# dnf repolist

Last metadata expiration check performed 0:30:03 ago on Mon Jun 22 16:50:00 2015.
repo id       repo name                      status
*fedora       Fedora 22 - x86_64             44,762
ozonos        Repository for Ozon OS         61
*updates      Fedora 22 - x86_64 - Updates   
</code></pre><p>上面的命令仅会列出可用的仓库。如果你需要列出所有的仓库，不管可用与否，可以这样做。</p><pre><code># yum repolist all
或
# dnf repolist all

Last metadata expiration check performed 0:29:45 ago on Mon Jun 22 16:50:00 2015.
repo id           repo name                       status
*fedora           Fedora 22 - x86_64              enabled: 44,762
fedora-debuginfo  Fedora 22 - x86_64 - Debug      disabled
fedora-source     Fedora 22 - Source              disabled
ozonos            Repository for Ozon OS          enabled:     61
*updates          Fedora 22 - x86_64 - Updates    enabled:  5,018
updates-debuginfo Fedora 22 - x86_64 - Updates - Debug
</code></pre><h3 id="_12-你如何列出一个系统上所有可用并且安装了的包" tabindex="-1">12. 你如何列出一个系统上所有可用并且安装了的包？ <a class="header-anchor" href="#_12-你如何列出一个系统上所有可用并且安装了的包" aria-label="Permalink to “12. 你如何列出一个系统上所有可用并且安装了的包？”">​</a></h3><p><strong>回答</strong>：列出一个系统上所有可用的包，我们可以这样做：</p><pre><code># yum list available
或
# dnf list available

ast metadata expiration check performed 0:34:09 ago on Mon Jun 22 16:50:00 2015.
Available Packages
0ad.x86_64                 0.0.18-1.fc22                   fedora 
0ad-data.noarch            0.0.18-1.fc22                   fedora 
0install.x86_64            2.6.1-2.fc21                    fedora 
0xFFFF.x86_64              0.3.9-11.fc22                   fedora 
2048-cli.x86_64            0.9-4.git20141214.723738c.fc22  fedora 
2048-cli-nocurses.x86_64   0.9-4.git20141214.723738c.fc22  fedora 
....
</code></pre><p>而列出一个系统上所有已安装的包，我们可以这样做。</p><pre><code># yum list installed
或
# dnf list installed

Last metadata expiration check performed 0:34:30 ago on Mon Jun 22 16:50:00 2015.
Installed Packages
GeoIP.x86_64                    1.6.5-1.fc22       @System
GeoIP-GeoLite-data.noarch       2015.05-1.fc22     @System
NetworkManager.x86_64           1:1.0.2-1.fc22     @System
NetworkManager-libnm.x86_64     1:1.0.2-1.fc22     @System
aajohan-comfortaa-fonts.noarch  2.004-4.fc22       @System
....
</code></pre><p>而要同时满足两个要求的时候，我们可以这样做。</p><pre><code># yum list
或
# dnf list

Last metadata expiration check performed 0:32:56 ago on Mon Jun 22 16:50:00 2015.
Installed Packages
GeoIP.x86_64                    1.6.5-1.fc22       @System
GeoIP-GeoLite-data.noarch       2015.05-1.fc22     @System
NetworkManager.x86_64           1:1.0.2-1.fc22     @System
NetworkManager-libnm.x86_64     1:1.0.2-1.fc22     @System
aajohan-comfortaa-fonts.noarch  2.004-4.fc22       @System
acl.x86_64                      2.2.52-7.fc22      @System
....
</code></pre><h3 id="_13-你会怎么在一个系统上面使用-yum-或-dnf-分别安装和升级一个包与一组包" tabindex="-1">13. 你会怎么在一个系统上面使用 YUM 或 DNF 分别安装和升级一个包与一组包？ <a class="header-anchor" href="#_13-你会怎么在一个系统上面使用-yum-或-dnf-分别安装和升级一个包与一组包" aria-label="Permalink to “13. 你会怎么在一个系统上面使用 YUM 或 DNF 分别安装和升级一个包与一组包？”">​</a></h3><p><strong>回答</strong>：安装一个包（假设是 nano），我们可以这样做，</p><pre><code>  # yum install nano
</code></pre><p>而安装一组包（假设是 Haskell），我们可以这样做，</p><pre><code>  # yum groupinstall &#39;haskell&#39;
</code></pre><p>升级一个包（还是 nano），我们可以这样做，</p><pre><code>  # yum update nano
</code></pre><p>而为了升级一组包（还是 haskell），我们可以这样做，</p><pre><code>  # yum groupupdate &#39;haskell&#39;
</code></pre><h3 id="_14-你会如何同步一个系统上面的所有安装软件到稳定发行版" tabindex="-1">14. 你会如何同步一个系统上面的所有安装软件到稳定发行版？ <a class="header-anchor" href="#_14-你会如何同步一个系统上面的所有安装软件到稳定发行版" aria-label="Permalink to “14. 你会如何同步一个系统上面的所有安装软件到稳定发行版？”">​</a></h3><p><strong>回答</strong>：我们可以一个系统上（假设是 CentOS 或者 Fedora）的所有包到稳定发行版，如下，</p><pre><code> # yum distro-sync		[在 CentOS/ RHEL]
 或
 # dnf distro-sync		[在 Fedora 20之后版本]
</code></pre><p>似乎来面试之前你做了相当不多的功课，很好！在进一步交谈前，我还想问一两个问题。</p><h3 id="_15-你对-yum-本地仓库熟悉吗-你尝试过建立一个本地-yum-仓库吗-让我们简单看看你会怎么建立一个本地-yum-仓库。" tabindex="-1">15. 你对 YUM 本地仓库熟悉吗？你尝试过建立一个本地 YUM 仓库吗？让我们简单看看你会怎么建立一个本地 YUM 仓库。 <a class="header-anchor" href="#_15-你对-yum-本地仓库熟悉吗-你尝试过建立一个本地-yum-仓库吗-让我们简单看看你会怎么建立一个本地-yum-仓库。" aria-label="Permalink to “15. 你对 YUM 本地仓库熟悉吗？你尝试过建立一个本地 YUM 仓库吗？让我们简单看看你会怎么建立一个本地 YUM 仓库。”">​</a></h3><p><strong>回答</strong>：首先，感谢你的夸奖。回到问题，我必须承认我对本地 YUM 仓库十分熟悉，并且在我的本地主机上也部署过，作为测试用。</p><p>1、 为了建立本地 YUM 仓库，我们需要安装下面三个包：</p><pre><code># yum install deltarpm  python-deltarpm  createrepo
</code></pre><p>2、 新建一个目录(假设 /home/$USER/rpm)，然后复制 RedHat/CentOS DVD 上的 RPM 包到这个文件夹下</p><pre><code># mkdir /home/$USER/rpm
# cp /path/to/rpm/on/DVD/*.rpm /home/$USER/rpm
</code></pre><p>3、 新建基本的库头文件如下。</p><pre><code># createrepo -v /home/$USER/rpm
</code></pre><p>4、 在路径 /etc/yum.repo.d 下创建一个 .repo 文件（如 abc.repo):</p><pre><code>cd /etc/yum.repos.d &amp;&amp; cat &lt;&lt; EOF abc.repo
[local-installation]name=yum-local
baseurl=file:///home/$USER/rpm
enabled=1
gpgcheck=0
EOF
</code></pre><p><strong>重要</strong>：用你的用户名替换掉 $USER。</p><p>以上就是创建一个本地 YUM 仓库所要做的全部工作。我们现在可以从这里安装软件了，相对快一些，安全一些，并且最重要的是不需要 Internet 连接。</p><p>好了！面试过程很愉快。我已经问完了。我会将你推荐给 HR。你是一个年轻且十分聪明的候选者，我们很愿意你加入进来。如果你有任何问题，你可以问我。</p><p><strong>我</strong>：谢谢，这确实是一次愉快的面试，我感到今天非常幸运，可以搞定这次面试...</p><p>显然，不会在这里结束。我问了很多问题，比如他们正在做的项目。我会担任什么角色，负责什么，，，balabalabala</p><p>小伙伴们，这之后的 3 天会经过 HR 轮，到时候所有问题到时候也会被写成文档。希望我当时表现不错。感谢你们所有的祝福。</p><p>谢谢伙伴们和 Tecmint，花时间来编辑我的面试经历。我相信 Tecmint 好伙伴们做了很大的努力，必要要赞一个。当我们与他人分享我们的经历的时候，其他人从我们这里知道了更多，而我们自己则发现了自己的不足。</p><p>这增加了我们的信心。如果你最近也有任何类似的面试经历，别自己蔵着。分享出来！让我们所有人都知道。你可以使用如下的表单来与我们分享你的经历。</p><hr>`,45)),p("p",null,[e[6]||(e[6]=n("via: ",-1)),r(a,{href:"http://www.tecmint.com/linux-rpm-package-management-interview-questions/"},{default:t(()=>[...e[5]||(e[5]=[n("http://www.tecmint.com/linux-rpm-package-management-interview-questions/",-1)])]),_:1})]),p("p",null,[e[10]||(e[10]=n("作者：",-1)),r(a,{href:"http://www.tecmint.com/author/avishek/"},{default:t(()=>[...e[7]||(e[7]=[n("Avishek Kumar",-1)])]),_:1}),e[11]||(e[11]=n(" 译者：",-1)),r(a,{href:"https://github.com/wi-cuckoo"},{default:t(()=>[...e[8]||(e[8]=[n("wi-cuckoo",-1)])]),_:1}),e[12]||(e[12]=n(" 校对：",-1)),r(a,{href:"https://github.com/wxy"},{default:t(()=>[...e[9]||(e[9]=[n("wxy",-1)])]),_:1})]),p("p",null,[e[15]||(e[15]=n("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[13]||(e[13]=[n("LCTT",-1)])]),_:1}),e[16]||(e[16]=n(" 原创翻译，",-1)),r(a,{href:"https://linux.cn/"},{default:t(()=>[...e[14]||(e[14]=[n("Linux中国",-1)])]),_:1}),e[17]||(e[17]=n(" 荣誉推出",-1))])])}const S=i(c,[["render",m]]);export{k as __pageData,S as default};
