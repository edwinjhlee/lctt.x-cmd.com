import{_ as i,a0 as n,w as d,s as l,I as s,x as r,a1 as t,A as o,ao as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const D=JSON.parse('{"title":"在 Linux 中怎样将 MySQL 迁移到 MariaDB 上 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中怎样将 MySQL 迁移到 MariaDB 上 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中怎样将 MySQL 迁移到 MariaDB 上 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中怎样将 MySQL 迁移到 MariaDB 上 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150816 How to migrate MySQL to MariaDB on Linux","title":"在 Linux 中怎样将 MySQL 迁移到 MariaDB 上","tag":"201509","desc":""},"relativePath":"201509/20150816 How to migrate MySQL to MariaDB on Linux.md","filePath":"[post].md"}'),m={name:"201509/20150816 How to migrate MySQL to MariaDB on Linux.md"};function u(y,a,M,b,L,S){const e=n("Link");return d(),l("div",null,[a[23]||(a[23]=s("h1",{id:"在-linux-中怎样将-mysql-迁移到-mariadb-上",tabindex:"-1"},[r("在 Linux 中怎样将 MySQL 迁移到 MariaDB 上 "),s("a",{class:"header-anchor",href:"#在-linux-中怎样将-mysql-迁移到-mariadb-上","aria-label":"Permalink to “在 Linux 中怎样将 MySQL 迁移到 MariaDB 上”"},"​")],-1)),s("p",null,[a[1]||(a[1]=r("自从甲骨文收购 MySQL 后，由于甲骨文对 MySQL 的开发和维护更多倾向于闭门的立场，很多 MySQL 的开发者和用户放弃了 MySQL。在社区驱动下，促使更多人移到 MySQL 的另一个叫 MariaDB 的分支。在原有 MySQL 开发人员的带领下，MariaDB 的开发遵循开源的理念，并确保",-1)),t(e,{href:"https://mariadb.com/kb/en/mariadb/mariadb-vs-mysql-compatibility/"},{default:o(()=>[...a[0]||(a[0]=[r("它的二进制格式与 MySQL 兼容",-1)])]),_:1}),a[2]||(a[2]=r("。Linux 发行版如 Red Hat 家族（Fedora，CentOS，RHEL），Ubuntu 和 Mint，openSUSE 和 Debian 已经开始使用，并支持 MariaDB 作为 MySQL 的直接替换品。",-1))]),a[24]||(a[24]=p(`<p>如果你想要将 MySQL 中的数据库迁移到 MariaDB 中，这篇文章就是你所期待的。幸运的是，由于他们的二进制兼容性，MySQL-to-MariaDB 迁移过程是非常简单的。如果你按照下面的步骤，将 MySQL 迁移到 MariaDB 会是无痛的。</p><h3 id="准备-mysql-数据库和表" tabindex="-1">准备 MySQL 数据库和表 <a class="header-anchor" href="#准备-mysql-数据库和表" aria-label="Permalink to “准备 MySQL 数据库和表”">​</a></h3><p>出于演示的目的，我们在做迁移之前在数据库中创建一个测试的 MySQL 数据库和表。如果你在 MySQL 中已经有了要迁移到 MariaDB 的数据库，跳过此步骤。否则，按以下步骤操作。</p><p>在终端输入 root 密码登录到 MySQL 。</p><pre><code>$ mysql -u root -p 
</code></pre><p>创建一个数据库和表。</p><pre><code>mysql&gt; create database test01;
mysql&gt; use test01;
mysql&gt; create table pet(name varchar(30), owner varchar(30), species varchar(20), sex char(1));
</code></pre><p>在表中添加一些数据。</p><pre><code>mysql&gt; insert into pet values(&#39;brandon&#39;,&#39;Jack&#39;,&#39;puddle&#39;,&#39;m&#39;),(&#39;dixie&#39;,&#39;Danny&#39;,&#39;chihuahua&#39;,&#39;f&#39;); 
</code></pre><p>退出 MySQL 数据库.</p><h3 id="备份-mysql-数据库" tabindex="-1">备份 MySQL 数据库 <a class="header-anchor" href="#备份-mysql-数据库" aria-label="Permalink to “备份 MySQL 数据库”">​</a></h3><p>下一步是备份现有的 MySQL 数据库。使用下面的 mysqldump 命令导出现有的数据库到文件中。运行此命令之前，请确保你的 MySQL 服务器上启用了二进制日志。如果你不知道如何启用二进制日志，请参阅结尾的教程说明。</p><pre><code>$ mysqldump --all-databases --user=root --password --master-data &gt; backupdb.sql 
</code></pre><p><img src="https://farm6.staticflickr.com/5775/20555772385_21b89335e3_b.jpg" alt=""></p><p>现在，在卸载 MySQL 之前先在系统上备份 my.cnf 文件。此步是可选的。</p><pre><code>$ sudo cp /etc/mysql/my.cnf /opt/my.cnf.bak 
</code></pre><h3 id="卸载-mysql" tabindex="-1">卸载 MySQL <a class="header-anchor" href="#卸载-mysql" aria-label="Permalink to “卸载 MySQL”">​</a></h3><p>首先，停止 MySQL 服务。</p><pre><code>$ sudo service mysql stop
</code></pre><p>或者:</p><pre><code>$ sudo systemctl stop mysql
</code></pre><p>或:</p><pre><code>$ sudo /etc/init.d/mysql stop 
</code></pre><p>然后继续下一步，使用以下命令移除 MySQL 和配置文件。</p><p>在基于 RPM 的系统上 (例如, CentOS, Fedora 或 RHEL):</p><pre><code>$ sudo yum remove mysql* mysql-server mysql-devel mysql-libs
$ sudo rm -rf /var/lib/mysql 
</code></pre><p>在基于 Debian 的系统上(例如, Debian, Ubuntu 或 Mint):</p><pre><code>$ sudo apt-get remove mysql-server mysql-client mysql-common
$ sudo apt-get autoremove
$ sudo apt-get autoclean
$ sudo deluser mysql
$ sudo rm -rf /var/lib/mysql 
</code></pre><h3 id="安装-mariadb" tabindex="-1">安装 MariaDB <a class="header-anchor" href="#安装-mariadb" aria-label="Permalink to “安装 MariaDB”">​</a></h3><p>在 CentOS/RHEL 7和Ubuntu（14.04或更高版本）上，最新的 MariaDB 已经包含在其官方源。在 Fedora 上，自19 版本后 MariaDB 已经替代了 MySQL。如果你使用的是旧版本或 LTS 类型如 Ubuntu 13.10 或更早的，你仍然可以通过添加其官方仓库来安装 MariaDB。</p>`,30)),s("p",null,[t(e,{href:"https://downloads.mariadb.org/mariadb/repositories/#mirror=aasaam"},{default:o(()=>[...a[3]||(a[3]=[r("MariaDB 网站",-1)])]),_:1}),a[4]||(a[4]=r(" 提供了一个在线工具帮助你依据你的 Linux 发行版中来添加 MariaDB 的官方仓库。此工具为 openSUSE, Arch Linux, Mageia, Fedora, CentOS, RedHat, Mint, Ubuntu, 和 Debian 提供了 MariaDB 的官方仓库.",-1))]),a[25]||(a[25]=p(`<p><img src="https://farm6.staticflickr.com/5809/20367745260_073020b910_c.jpg" alt=""></p><p>下面例子中，我们使用 Ubuntu 14.04 发行版和 CentOS 7 配置 MariaDB 库。</p><p><strong>Ubuntu 14.04</strong></p><pre><code>$ sudo apt-get install software-properties-common
$ sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db
$ sudo add-apt-repository &#39;deb http://mirror.mephi.ru/mariadb/repo/5.5/ubuntu trusty main&#39;
$ sudo apt-get update
$ sudo apt-get install mariadb-server 
</code></pre><p><strong>CentOS 7</strong></p><p>以下为 MariaDB 创建一个自定义的 yum 仓库文件。</p><pre><code>$ sudo vi /etc/yum.repos.d/MariaDB.repo 
</code></pre><hr><pre><code>[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/5.5/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
</code></pre><hr><pre><code>$ sudo yum install MariaDB-server MariaDB-client 
</code></pre><p>安装了所有必要的软件包后，你可能会被要求为 MariaDB 的 root 用户创建一个新密码。设置 root 的密码后，别忘了恢复备份的 my.cnf 文件。</p><pre><code>$ sudo cp /opt/my.cnf /etc/mysql/
</code></pre><p>现在启动 MariaDB 服务。</p><pre><code>$ sudo service mariadb start
</code></pre><p>或:</p><pre><code>$ sudo systemctl start mariadb
</code></pre><p>或:</p><pre><code>$ sudo /etc/init.d/mariadb start 
</code></pre><h3 id="导入-mysql-的数据库" tabindex="-1">导入 MySQL 的数据库 <a class="header-anchor" href="#导入-mysql-的数据库" aria-label="Permalink to “导入 MySQL 的数据库”">​</a></h3><p>最后，我们将以前导出的数据库导入到 MariaDB 服务器中。</p><pre><code>$ mysql -u root -p &lt; backupdb.sql 
</code></pre><p>输入你 MariaDB 的 root 密码，数据库导入过程将开始。导入过程完成后，将返回到命令提示符下。</p><p>要检查导入过程是否完全成功，请登录到 MariaDB 服务器，并查看一些样本来检查。</p><pre><code>$ mysql -u root -p
</code></pre><hr><pre><code>MariaDB [(none)]&gt; show databases;
MariaDB [(none)]&gt; use test01;
MariaDB [test01]&gt; select * from pet; 
</code></pre><p><img src="https://farm6.staticflickr.com/5820/20562243721_428a9a12a7_b.jpg" alt=""></p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>如你在本教程中看到的，MySQL-to-MariaDB 的迁移并不难。你应该知道，MariaDB 相比 MySQL 有很多新的功能。至于配置方面，在我的测试情况下，我只是将我旧的 MySQL 配置文件（my.cnf）作为 MariaDB 的配置文件，导入过程完全没有出现任何问题。对于配置文件，我建议你在迁移之前请仔细阅读 MariaDB 配置选项的文件，特别是如果你正在使用 MySQL 的特定配置。</p>`,30)),s("p",null,[a[7]||(a[7]=r("如果你正在运行有海量的表、包括群集或主从复制的数据库的复杂配置，看一看 Mozilla IT 和 Operations 团队的 ",-1)),t(e,{href:"https://blog.mozilla.org/it/2013/12/16/upgrading-from-mysql-5-1-to-mariadb-5-5/"},{default:o(()=>[...a[5]||(a[5]=[r("更详细的指南",-1)])]),_:1}),a[8]||(a[8]=r(" ，或者 ",-1)),t(e,{href:"https://mariadb.com/kb/en/mariadb/documentation/"},{default:o(()=>[...a[6]||(a[6]=[r("官方的 MariaDB 文档",-1)])]),_:1}),a[9]||(a[9]=r("。",-1))]),a[26]||(a[26]=p(`<h3 id="故障排除" tabindex="-1">故障排除 <a class="header-anchor" href="#故障排除" aria-label="Permalink to “故障排除”">​</a></h3><p>1、 在运行 mysqldump 命令备份数据库时出现以下错误。</p><pre><code>$ mysqldump --all-databases --user=root --password --master-data &gt; backupdb.sql 
</code></pre><hr><pre><code>mysqldump: Error: Binlogging on server not active
</code></pre><p>通过使用 &quot;--master-data&quot;，你可以在导出的输出中包含二进制日志信息，这对于数据库的复制和恢复是有用的。但是，二进制日志未在 MySQL 服务器启用。要解决这个错误，修改 my.cnf 文件，并在 [mysqld] 部分添加下面的选项。</p><pre><code>log-bin=mysql-bin
</code></pre><p>保存 my.cnf 文件，并重新启动 MySQL 服务：</p><pre><code>$ sudo service mysql restart
</code></pre><p>或者:</p><pre><code>$ sudo systemctl restart mysql
</code></pre><p>或:</p><pre><code>$ sudo /etc/init.d/mysql restart 
</code></pre><hr>`,14)),s("p",null,[a[11]||(a[11]=r("via: ",-1)),t(e,{href:"http://xmodulo.com/migrate-mysql-to-mariadb-linux.html"},{default:o(()=>[...a[10]||(a[10]=[r("http://xmodulo.com/migrate-mysql-to-mariadb-linux.html",-1)])]),_:1})]),s("p",null,[a[15]||(a[15]=r("作者：",-1)),t(e,{href:"http://xmodulo.com/author/kristophorus"},{default:o(()=>[...a[12]||(a[12]=[r("Kristophorus Hadiono",-1)])]),_:1}),a[16]||(a[16]=r(" 译者：",-1)),t(e,{href:"https://github.com/strugglingyouth"},{default:o(()=>[...a[13]||(a[13]=[r("strugglingyouth",-1)])]),_:1}),a[17]||(a[17]=r(" 校对：",-1)),t(e,{href:"https://github.com/wxy"},{default:o(()=>[...a[14]||(a[14]=[r("wxy",-1)])]),_:1})]),s("p",null,[a[20]||(a[20]=r("本文由 ",-1)),t(e,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...a[18]||(a[18]=[r("LCTT",-1)])]),_:1}),a[21]||(a[21]=r(" 原创翻译，",-1)),t(e,{href:"http://linux.cn/"},{default:o(()=>[...a[19]||(a[19]=[r("Linux中国",-1)])]),_:1}),a[22]||(a[22]=r(" 荣誉推出",-1))])])}const f=i(m,[["render",u]]);export{D as __pageData,f as default};
