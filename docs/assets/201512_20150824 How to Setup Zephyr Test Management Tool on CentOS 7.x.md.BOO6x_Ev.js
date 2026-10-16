import{_ as l,a0 as s,w as d,s as i,ao as a,I as n,x as t,a1 as r,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"如何在 CentOS 7.x 上安装 Zephyr 测试管理工具 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7.x 上安装 Zephyr 测试管理工具 | LCTT (201512) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7.x 上安装 Zephyr 测试管理工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7.x 上安装 Zephyr 测试管理工具 | LCTT (201512) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201512/20150824 How to Setup Zephyr Test Management Tool on CentOS 7.x","title":"如何在 CentOS 7.x 上安装 Zephyr 测试管理工具","tag":"201512","desc":""},"relativePath":"201512/20150824 How to Setup Zephyr Test Management Tool on CentOS 7.x.md","filePath":"[post].md"}'),h={name:"201512/20150824 How to Setup Zephyr Test Management Tool on CentOS 7.x.md"};function m(y,e,c,u,g,x){const o=s("Link");return d(),i("div",null,[e[16]||(e[16]=a(`<h1 id="如何在-centos-7-x-上安装-zephyr-测试管理工具" tabindex="-1">如何在 CentOS 7.x 上安装 Zephyr 测试管理工具 <a class="header-anchor" href="#如何在-centos-7-x-上安装-zephyr-测试管理工具" aria-label="Permalink to “如何在 CentOS 7.x 上安装 Zephyr 测试管理工具”">​</a></h1><p>测试管理（Test Management）指测试人员所需要的任何的所有东西。测试管理工具用来记录测试执行的结果、计划测试活动以及汇报质量控制活动的情况。在这篇文章中我们会向你介绍如何配置 Zephyr 测试管理工具，它包括了管理测试活动需要的所有东西，不需要单独安装测试活动所需要的应用程序从而降低测试人员不必要的麻烦。一旦你安装完它，你就看可以用它跟踪 bug 和缺陷，和你的团队成员协作项目任务，因为你可以轻松地共享和访问测试过程中多个项目团队的数据。</p><h3 id="zephyr-要求" tabindex="-1">Zephyr 要求 <a class="header-anchor" href="#zephyr-要求" aria-label="Permalink to “Zephyr 要求”">​</a></h3><p>安装和运行 Zephyr 要求满足以下最低条件。可以根据你的基础设施提高资源。我们会在 64 位 CentOS-7 系统上安装 Zephyr，几乎在所有的 Linux 操作系统中都有可用的 Zephyr 二进制发行版。</p><p>注：表格</p><table width="669" style="height:231px;"><tbody><tr><td width="660" colspan="3"><strong>Zephyr test management tool</strong></td></tr><tr><td width="140"><strong>Linux OS</strong></td><td width="312">CentOS Linux 7 (Core), 64-bit</td><td width="209"></td></tr><tr><td width="140"><strong>Packages</strong></td><td width="312">JDK 7 或更高 ,  Oracle JDK 6 update</td><td width="209">没有事先安装的 Tomcat 和 MySQL</td></tr><tr><td width="140"><strong>RAM</strong></td><td width="312">4 GB</td><td width="209">推荐 8 GB</td></tr><tr><td width="140"><strong>CPU</strong></td><td width="521" colspan="2">2.0 GHZ 或更高</td></tr><tr><td width="140"><strong>Hard Disk</strong></td><td width="521" colspan="2">30 GB , 至少 5GB </td></tr></tbody></table><p>安装 Zephyr 要求你有超级用户（root）权限，并确保你已经正确配置了网络的静态 IP ，默认端口必须可用并允许通过防火墙。其中 tomcat 会使用 80/443、 8005、 8009、 8010 端口， Zephyr 内部使用 RTMP 协议的 flex 会使用 443 和 2099 号端口。</p><h3 id="安装-java-jdk-7" tabindex="-1">安装 Java JDK 7 <a class="header-anchor" href="#安装-java-jdk-7" aria-label="Permalink to “安装 Java JDK 7”">​</a></h3><p>安装 Zephyr 首先需要安装 Java JDK 7，如果你的系统上还没有安装，可以按照下面的方法安装 Java 并设置 JAVA_HOME 环境变量。</p><p>输入以下的命令安装 Java JDK 7。</p><pre><code>[root@centos-007 ~]# yum install java-1.7.0-openjdk-1.7.0.79-2.5.5.2.el7_1

[root@centos-007 ~]# yum install java-1.7.0-openjdk-devel-1.7.0.85-2.6.1.2.el7_1.x86_64
</code></pre><p>安装完 java 和它的所有依赖后，运行下面的命令设置 JAVA_HOME 环境变量。</p><pre><code>[root@centos-007 ~]# export JAVA_HOME=/usr/java/default
[root@centos-007 ~]# export PATH=/usr/java/default/bin:$PATH
</code></pre><p>用下面的命令检查 java 版本以验证安装。</p><pre><code>[root@centos-007 ~]# java –version

java version &quot;1.7.0_79&quot;
OpenJDK Runtime Environment (rhel-2.5.5.2.el7_1-x86_64 u79-b14)
OpenJDK 64-Bit Server VM (build 24.79-b02, mixed mode)
</code></pre><p>输出显示我们已经正确安装了 1.7.0_79 版本的 OpenJDK Java。</p><h3 id="安装-mysql-5-6-x" tabindex="-1">安装 MySQL 5.6.x <a class="header-anchor" href="#安装-mysql-5-6-x" aria-label="Permalink to “安装 MySQL 5.6.x”">​</a></h3><p>如果的机器上有其它的 MySQL，建议你先卸载它们并安装这个版本，或者升级它们的模式（schemas）到指定的版本。因为 Zephyr 前提要求这个指定的 5.6.x 版本的 MySQL ，要有 root 用户名。</p><p>可以按照下面的步骤在 CentOS-7.1 上安装 MySQL 5.6 ：</p><p>下载 rpm 软件包，它会为安装 MySQL 服务器创建一个 yum 库文件。</p><pre><code>[root@centos-007 ~]# yum install wget
[root@centos-007 ~]# wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
</code></pre><p>然后用 rpm 命令安装下载下来的 rpm 软件包。</p><pre><code>[root@centos-007 ~]# rpm -ivh mysql-community-release-el7-5.noarch.rpm
</code></pre><p>安装完这个软件包后你会有两个和 MySQL 相关的新的 yum 库。然后使用 yum 命令安装 MySQL Server 5.6，它会自动安装所有需要的依赖。</p><pre><code>[root@centos-007 ~]# yum install mysql-server
</code></pre><p>安装过程完成之后，运行下面的命令启动 mysqld 服务并检查它的状态是否激活。</p><pre><code>[root@centos-007 ~]# service mysqld start
[root@centos-007 ~]# service mysqld status
</code></pre><p>对于全新安装的 MySQL 服务器，MySQL root 用户的密码为空。为了安全起见，我们应该重置 MySQL root 用户的密码。用自动生成的空密码连接到 MySQL 并更改 root 用户密码。</p><pre><code>[root@centos-007 ~]# mysql
mysql&gt; SET PASSWORD FOR &#39;root&#39;@&#39;localhost&#39; = PASSWORD(&#39;your_password&#39;);
mysql&gt; flush privileges;
mysql&gt; quit;
</code></pre><p>现在我们需要在 MySQL 默认的配置文件中配置所需的数据库参数。打开 &quot;/etc/&quot; 目录中的文件并按照下面那样更新。</p><pre><code>[root@centos-007 ~]# vi /etc/my.cnf
</code></pre><hr><pre><code>[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
symbolic-links=0

sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
max_allowed_packet=150M
max_connections=600
default-storage-engine=INNODB
character-set-server=utf8
collation-server=utf8_unicode_ci

[mysqld_safe]
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
default-storage-engine=INNODB
character-set-server=utf8
collation-server=utf8_unicode_ci

[mysql]
max_allowed_packet = 150M
[mysqldump]
quick
</code></pre><p>保存配置文件中的更新并重启 mysql 服务。</p><pre><code>[root@centos-007 ~]# service mysqld restart
</code></pre><h3 id="下载-zephyr-安装包" tabindex="-1">下载 Zephyr 安装包 <a class="header-anchor" href="#下载-zephyr-安装包" aria-label="Permalink to “下载 Zephyr 安装包”">​</a></h3>`,36)),n("p",null,[e[1]||(e[1]=t("我们已经安装完了安装 Zephyr 所需要的软件包。现在我们需要获取 Zephyr 二进制发布包和它的许可证密钥。到 Zephyr 官方下载链接 ",-1)),r(o,{href:"http://download.yourzephyr.com/linux/download.php"},{default:p(()=>[...e[0]||(e[0]=[t("http://download.yourzephyr.com/linux/download.php",-1)])]),_:1}),e[2]||(e[2]=t(" 输入你的电子邮件 ID 并点击下载。",-1))]),e[17]||(e[17]=a(`<p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/13.png" alt="下载 Zephyr"></p><p>然后确认你的电子邮件地址，你会获得 Zephyr 下载链接和它的许可证密钥链接。点击提供的链接从服务器中选择和你操作系统合适的版本下载二进制安装包以及许可证文件。</p><p>我们把它下载到 home 目录并更改它的权限为可执行。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/22.png" alt="Zephyr 二进制包"></p><h3 id="开始安装和配置-zephyr" tabindex="-1">开始安装和配置 Zephyr <a class="header-anchor" href="#开始安装和配置-zephyr" aria-label="Permalink to “开始安装和配置 Zephyr”">​</a></h3><p>现在我们通过执行它的二进制安装脚本开始安装 Zephyr。</p><pre><code>[root@centos-007 ~]# ./zephyr_4_7_9213_linux_setup.sh –c
</code></pre><p>一旦你运行了上面的命令，它会检查是否正确配置了 Java 环境变量。如果配置不正确，你可能会看到类似下面的错误。</p><pre><code>testing JVM in /usr ...
Starting Installer ...
Error : Either JDK is not found at expected locations or JDK version is mismatched.
Zephyr requires Oracle Java Development Kit (JDK) version 1.7 or higher.
</code></pre><p>如果你正确配置了 Java，它会开始安装 Zephyr 并要求你输入 “o” 继续或者输入 “c” 取消安装。让我们敲击 “o” 并输入回车键开始安装。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/32.png" alt="安装 zephyr"></p><p>下一个选项是检查安装 Zephyr 所有的要求，输入回车进入下一个选项。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/42.png" alt="zephyr 要求"></p><p>输入 “1” 并回车同意许可证协议。</p><pre><code>I accept the terms of this license agreement [1], I do not accept the terms of this license agreement [2, Enter]
</code></pre><p>我们需要选择安装 Zephyr 合适的目标位置以及默认端口，如果你想用默认端口之外的其它端口，也可以在这里配置。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/52.png" alt="installation folder"></p><p>然后自定义 mysql 数据库参数并给出配置文件的正确路径。在这一步你可能看到类似下面的错误。</p><pre><code>Please update MySQL configuration. Configuration parameter max_connection should be at least 500 (max_connection = 500) and max_allowed_packet should be at least 50MB (max_allowed_packet = 50M).
</code></pre><p>要消除这个错误，你要确保在 mysql 配置文件中正确配置了 &quot;max_connection&quot; 和 &quot;max_allowed_packet&quot; 参数。运行所示的命令连接到数据库确认这些设置。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/62.png" alt="连接 mysql"></p><p>当你正确配置了 mysql 数据库，它会提取配置文件并完成安装。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/72.png" alt="配置 mysql"></p><p>安装过程在你的计算机上成功的安装了 Zephyr 4.7。要启动 Zephyr 桌面，输入 “y” 完成 Zephyr 安装。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/82.png" alt="启动 zephyr"></p><h3 id="启动-zephyr-桌面" tabindex="-1">启动 Zephyr 桌面 <a class="header-anchor" href="#启动-zephyr-桌面" aria-label="Permalink to “启动 Zephyr 桌面”">​</a></h3><p>打开你的 web 浏览器并用你的本机 IP 地址启动 Zephyr 桌面，你会被导向 Zephyr 桌面。</p><pre><code>http://your_server_IP/zephyr/desktop/
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/91.png" alt="Zephyr 桌面"></p><p>从 Zephyr 仪表盘点击 &quot;Test Manager&quot; 并用默认的用户名和密码 &quot;test.manager&quot; 登录。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/test_manager_login.png" alt="Test Manage 登录"></p><p>你登录进去后你就可以配置你的管理设置了。根据你的环境选择你想要的设置。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/test_manage_admin.png" alt="Test Manage 管理"></p><p>完成管理设置后保存设置，资源管理和项目配置也类似，然后开始使用 Zephyr 作为你的测试管理工具吧。如图所示在 Department Dashboard Management 中检查和编辑管理设置状态。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/dashboard.png" alt="zephyr 仪表盘"></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>好了！ 我们已经在 CentOS 7.1 上安装完了 Zephyr。我们希望你能更加深入了解 Zephyr 测试管理工具，它提供简化测试流程、允许快速访问数据分析、协作工具以及多个项目成员之间交流。如果在你的环境中遇到任何问题，欢迎和我们联系。</p><hr>`,38)),n("p",null,[e[4]||(e[4]=t("via: ",-1)),r(o,{href:"http://linoxide.com/linux-how-to/setup-zephyr-tool-centos-7-x/"},{default:p(()=>[...e[3]||(e[3]=[t("http://linoxide.com/linux-how-to/setup-zephyr-tool-centos-7-x/",-1)])]),_:1})]),n("p",null,[e[8]||(e[8]=t("作者：",-1)),r(o,{href:"http://linoxide.com/author/kashifs/"},{default:p(()=>[...e[5]||(e[5]=[t("Kashif Siddique",-1)])]),_:1}),e[9]||(e[9]=t(" 译者：",-1)),r(o,{href:"http://mutouxiaogui.cn/blog/"},{default:p(()=>[...e[6]||(e[6]=[t("ictlyh",-1)])]),_:1}),e[10]||(e[10]=t(" 校对：",-1)),r(o,{href:"https://github.com/wxy"},{default:p(()=>[...e[7]||(e[7]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[13]||(e[13]=t("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[11]||(e[11]=[t("LCTT",-1)])]),_:1}),e[14]||(e[14]=t(" 原创翻译，",-1)),r(o,{href:"https://linux.cn/"},{default:p(()=>[...e[12]||(e[12]=[t("Linux中国",-1)])]),_:1}),e[15]||(e[15]=t(" 荣誉推出",-1))])])}const f=l(h,[["render",m]]);export{T as __pageData,f as default};
