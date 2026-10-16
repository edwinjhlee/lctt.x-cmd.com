import{_ as l,a0 as s,w as p,s as i,ao as d,I as t,x as r,a1 as n,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"如何在 CentOS 7 上安装 Percona服务器 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7 上安装 Percona服务器 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7 上安装 Percona服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7 上安装 Percona服务器 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150515 How to Install Percona Server on CentOS 7","title":"如何在 CentOS 7 上安装 Percona服务器","tag":"201506","desc":""},"relativePath":"201506/20150515 How to Install Percona Server on CentOS 7.md","filePath":"[post].md"}'),c={name:"201506/20150515 How to Install Percona Server on CentOS 7.md"};function m(h,e,f,y,b,u){const a=s("Link");return p(),i("div",null,[e[13]||(e[13]=d(`<h1 id="如何在-centos-7-上安装-percona服务器" tabindex="-1">如何在 CentOS 7 上安装 Percona服务器 <a class="header-anchor" href="#如何在-centos-7-上安装-percona服务器" aria-label="Permalink to “如何在 CentOS 7 上安装 Percona服务器”">​</a></h1><p>在这篇文章中我们将了解关于 Percona 服务器，一个开源的MySQL，MariaDB的替代品。InnoDB的数据库引擎使得Percona 服务器非常有吸引力，如果你需要的高性能，高可靠性和高性价比的解决方案，它将是一个很好的选择。</p><p>在下文中将介绍在CentOS 7上Percona 服务器的安装，以及备份当前数据，配置的步骤和如何恢复备份。</p><h3 id="_1-什么是percona-为什么使用它" tabindex="-1">1.什么是Percona，为什么使用它 <a class="header-anchor" href="#_1-什么是percona-为什么使用它" aria-label="Permalink to “1.什么是Percona，为什么使用它”">​</a></h3><p>Percona是一个MySQL，MariaDB数据库的开源替代品，它是MySQL的一个分支，相当多的改进和独特的功能使得它比MYSQL更可靠，性能更强，速度更快，它与MYSQL完全兼容，你甚至可以在Oracle的MySQL与Percona之间使用复制。</p><h4 id="在percona中独具特色的功能" tabindex="-1">在Percona中独具特色的功能 <a class="header-anchor" href="#在percona中独具特色的功能" aria-label="Permalink to “在Percona中独具特色的功能”">​</a></h4><ul><li>分区适应哈希搜索</li><li>快速校验算法</li><li>缓冲池预加载</li><li>支持FlashCache</li></ul><h4 id="mysql企业版和percona中的特有功能" tabindex="-1">MySQL企业版和Percona中的特有功能 <a class="header-anchor" href="#mysql企业版和percona中的特有功能" aria-label="Permalink to “MySQL企业版和Percona中的特有功能”">​</a></h4><ul><li>从不同的服务器导入表</li><li>PAM认证</li><li>审计日志</li><li>线程池</li></ul><p>现在，你肯定很兴奋地看到这些好的东西整合在一起，我们将告诉你如何安装和对Percona Server做基本配置。</p><h3 id="_2-备份你的数据库" tabindex="-1">2. 备份你的数据库 <a class="header-anchor" href="#_2-备份你的数据库" aria-label="Permalink to “2. 备份你的数据库”">​</a></h3><p>接下来，在命令行下使用SQL命令创建一个mydatabases.sql文件，来重建或恢复salesdb和employeedb数据库，根据你的设置替换数据库名称，如果没有安装MySQL则跳过此步：</p><pre><code>mysqldump -u root -p --databases employeedb salesdb &gt; mydatabases.sql
</code></pre><p>复制当前的配置文件，如果你没有安装MYSQL也可跳过：</p><pre><code>cp my.cnf my.cnf.bkp
</code></pre><h3 id="_3-删除之前的sql服务器" tabindex="-1">3.删除之前的SQL服务器 <a class="header-anchor" href="#_3-删除之前的sql服务器" aria-label="Permalink to “3.删除之前的SQL服务器”">​</a></h3><p>停止MYSQL/MariaDB，如果它们还在运行：</p><pre><code>systemctl stop mysql.service
</code></pre><p>卸载MariaDB和MYSQL：</p><pre><code>yum remove MariaDB-server MariaDB-client MariaDB-shared mysql mysql-server
</code></pre><p>移动重命名放在/var/lib/mysql当中的MariaDB文件。这比仅仅只是移除更为安全快速，这就像2级即时备份。😃</p><pre><code>mv /var/lib/mysql /var/lib/mysql_mariadb
</code></pre><h3 id="_4-使用二进制包安装percona" tabindex="-1">4.使用二进制包安装Percona <a class="header-anchor" href="#_4-使用二进制包安装percona" aria-label="Permalink to “4.使用二进制包安装Percona”">​</a></h3><p>你可以在众多Percona安装方法中选择，在CentOS中使用Yum或者RPM包安装通常是更好的主意，所以这些是本文介绍的方式，下载源文件编译后安装在本文中并没有介绍。</p><p>从Yum仓库中安装：</p><p>首先，你需要设置Percona的Yum库:</p><pre><code>yum install http://www.percona.com/downloads/percona-release/redhat/0.1-3/percona-release-0.1-3.noarch.rpm
</code></pre><p>接下来安装Percona:</p><pre><code>yum install Percona-Server-client-56 Percona-Server-server-56
</code></pre><p>上面的命令安装Percona的服务器和客户端、共享库，可能需要Perl和Perl模块，以及其他依赖的需要，如DBI::MySQL。如果这些尚未安装，可能需要安装更多的依赖包。</p><p>使用RPM包安装：</p><p>我们可以使用wget命令下载所有的rpm包:</p><pre><code>wget -r -l 1 -nd -A rpm -R &quot;*devel*,*debuginfo*&quot; \\
http://www.percona.com/downloads/Percona-Server-5.5/Percona-Server-5.5.42-37.1/binary/redhat/7/x86_64/
</code></pre><p>使用rpm工具，一次性安装所有的rpm包：</p><pre><code>rpm -ivh Percona-Server-server-55-5.5.42-rel37.1.el7.x86_64.rpm \\
Percona-Server-client-55-5.5.42-rel37.1.el7.x86_64.rpm \\
Percona-Server-shared-55-5.5.42-rel37.1.el7.x86_64.rpm
</code></pre><p>注意在上面命令语句中最后的反斜杠&#39;&#39;（只是为了换行方便）。如果您安装单独的软件包，记住要解决依赖关系，在安装客户端之前要先安装共享包，在安装服务器之前请先安装客户端。</p><h3 id="_5-配置percona服务器" tabindex="-1">5.配置Percona服务器 <a class="header-anchor" href="#_5-配置percona服务器" aria-label="Permalink to “5.配置Percona服务器”">​</a></h3><h4 id="恢复之前的配置" tabindex="-1">恢复之前的配置 <a class="header-anchor" href="#恢复之前的配置" aria-label="Permalink to “恢复之前的配置”">​</a></h4><p>当我们从MariaDB迁移过来时，你可以将之前的my.cnf的备份文件恢复回来。</p><pre><code>cp /etc/my.cnf.bkp /etc/my.cnf
</code></pre><h4 id="创建一个新的my-cnf文件" tabindex="-1">创建一个新的my.cnf文件 <a class="header-anchor" href="#创建一个新的my-cnf文件" aria-label="Permalink to “创建一个新的my.cnf文件”">​</a></h4><p>如果你需要一个适合你需求的新的配置文件或者你并没有备份配置文件，你可以使用以下方法，通过简单的几步生成新的配置文件。</p><p>下面是Percona-server软件包自带的my.cnf文件</p><pre><code># Percona Server template configuration

[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0

[mysqld_safe]
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
</code></pre><p>根据你的需要配置好my.cnf后，就可以启动该服务了：</p><pre><code>systemctl restart mysql.service
</code></pre><p>如果一切顺利的话，它已经准备好执行SQL命令了，你可以用以下命令检查它是否已经正常启动：</p><pre><code>mysql -u root -p -e &#39;SHOW VARIABLES LIKE &quot;version_comment&quot;&#39;
</code></pre><p>如果你不能够正常启动它，你可以在<strong>/var/log/mysql/mysqld.log</strong>中查找原因，该文件可在my.cnf的[mysql_safe]的log-error中设置。</p><pre><code>tail /var/log/mysql/mysqld.log
</code></pre><p>你也可以在/var/lib/mysql/文件夹下查找格式为[主机名].err的文件，就像下面这个例子：</p><pre><code>tail /var/lib/mysql/centos7.err
</code></pre><p>如果还是没找出原因，你可以试试strace：</p><pre><code>yum install strace &amp;&amp; systemctl stop mysql.service &amp;&amp; strace -f -f mysqld_safe
</code></pre><p>上面的命令挺长的，输出的结果也相对简单，但绝大多数时候你都能找到无法启动的原因。</p><h3 id="_6-保护你的数据" tabindex="-1">6.保护你的数据 <a class="header-anchor" href="#_6-保护你的数据" aria-label="Permalink to “6.保护你的数据”">​</a></h3><p>好了，你的关系数据库管理系统已经准备好接收SQL查询，但是把你宝贵的数据放在没有最起码安全保护的服务器上并不可取，为了更为安全最好使用mysql_secure_install来安装，这个工具可以帮助你删除未使用的默认功能，并设置root的密码，限制使用此用户进行访问。只需要在shell中执行该命令，并参照屏幕上的说明操作。</p><pre><code>mysql_secure_install
</code></pre><h3 id="_7-还原备份" tabindex="-1">7.还原备份 <a class="header-anchor" href="#_7-还原备份" aria-label="Permalink to “7.还原备份”">​</a></h3><p>如果您参照之前的设置，现在你可以恢复数据库，只需再用mysqldump一次。</p><pre><code>mysqldump -u root -p &lt; mydatabases.sql
</code></pre><p>恭喜你，你刚刚已经在你的CentOS上成功安装了Percona，你的服务器已经可以正式投入使用；你可以像使用MySQL一样使用它，你的服务器与它完全兼容。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>为了获得更强的性能你需要对配置文件做大量的修改，但这里也有一些简单的选项来提高机器的性能。当使用InnoDB引擎时，将innodb_file_per_table设置为on，它将在一个文件中为每个表创建索引表，这意味着每个表都有它自己的索引文件，它使系统更强大和更容易维修。</p><p>可以修改innodb_buffer_pool_size选项，InnoDB应该有足够的缓存池来应对你的数据集，大小应该为当前可用内存的70%到80%。</p><p>将innodb-flush-method设置为O_DIRECT，关闭写入高速缓存，如果你使用了RAID，这可以提升性能，因为在底层已经完成了缓存操作。</p><p>如果你的数据并不是十分关键并且并不需要对数据库事务正确执行的四个基本要素完全兼容，可以将innodb_flush_log_at_trx_commit设置为2，这也能提升系统的性能。</p><hr>`,68)),t("p",null,[e[1]||(e[1]=r("via: ",-1)),n(a,{href:"http://linoxide.com/linux-how-to/percona-server-centos-7/"},{default:o(()=>[...e[0]||(e[0]=[r("http://linoxide.com/linux-how-to/percona-server-centos-7/",-1)])]),_:1})]),t("p",null,[e[5]||(e[5]=r("作者：",-1)),n(a,{href:"http://linoxide.com/author/carlosal/"},{default:o(()=>[...e[2]||(e[2]=[r("Carlos Alberto",-1)])]),_:1}),e[6]||(e[6]=r(" 译者：",-1)),n(a,{href:"https://github.com/FatJoe123"},{default:o(()=>[...e[3]||(e[3]=[r("FatJoe123",-1)])]),_:1}),e[7]||(e[7]=r(" 校对：",-1)),n(a,{href:"https://github.com/wxy"},{default:o(()=>[...e[4]||(e[4]=[r("wxy",-1)])]),_:1})]),t("p",null,[e[10]||(e[10]=r("本文由 ",-1)),n(a,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[8]||(e[8]=[r("LCTT",-1)])]),_:1}),e[11]||(e[11]=r(" 原创翻译，",-1)),n(a,{href:"https://linux.cn/"},{default:o(()=>[...e[9]||(e[9]=[r("Linux中国",-1)])]),_:1}),e[12]||(e[12]=r(" 荣誉推出",-1))])])}const v=l(c,[["render",m]]);export{S as __pageData,v as default};
