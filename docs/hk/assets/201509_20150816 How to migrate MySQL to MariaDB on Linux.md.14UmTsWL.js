import{_ as i,a0 as n,w as d,s as l,I as s,x as r,a1 as t,A as o,ao as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const D=JSON.parse('{"title":"在 Linux 中怎樣將 MySQL 遷移到 MariaDB 上 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中怎樣將 MySQL 遷移到 MariaDB 上 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中怎樣將 MySQL 遷移到 MariaDB 上 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中怎樣將 MySQL 遷移到 MariaDB 上 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150816 How to migrate MySQL to MariaDB on Linux","title":"在 Linux 中怎樣將 MySQL 遷移到 MariaDB 上","tag":"201509","desc":""},"relativePath":"201509/20150816 How to migrate MySQL to MariaDB on Linux.md","filePath":"[post].md"}'),m={name:"201509/20150816 How to migrate MySQL to MariaDB on Linux.md"};function u(y,a,M,b,L,S){const e=n("Link");return d(),l("div",null,[a[23]||(a[23]=s("h1",{id:"在-linux-中怎樣將-mysql-遷移到-mariadb-上",tabindex:"-1"},[r("在 Linux 中怎樣將 MySQL 遷移到 MariaDB 上 "),s("a",{class:"header-anchor",href:"#在-linux-中怎樣將-mysql-遷移到-mariadb-上","aria-label":"Permalink to “在 Linux 中怎樣將 MySQL 遷移到 MariaDB 上”"},"​")],-1)),s("p",null,[a[1]||(a[1]=r("自從甲骨文收購 MySQL 後，由於甲骨文對 MySQL 的開發和維護更多傾向於閉門的立場，很多 MySQL 的開發者和用户放棄了 MySQL。在社區驅動下，促使更多人移到 MySQL 的另一個叫 MariaDB 的分支。在原有 MySQL 開發人員的帶領下，MariaDB 的開發遵循開源的理念，並確保",-1)),t(e,{href:"https://mariadb.com/kb/en/mariadb/mariadb-vs-mysql-compatibility/"},{default:o(()=>[...a[0]||(a[0]=[r("它的二進制格式與 MySQL 兼容",-1)])]),_:1}),a[2]||(a[2]=r("。Linux 發行版如 Red Hat 家族（Fedora，CentOS，RHEL），Ubuntu 和 Mint，openSUSE 和 Debian 已經開始使用，並支持 MariaDB 作為 MySQL 的直接替換品。",-1))]),a[24]||(a[24]=p(`<p>如果你想要將 MySQL 中的資料庫遷移到 MariaDB 中，這篇文章就是你所期待的。幸運的是，由於他們的二進制兼容性，MySQL-to-MariaDB 遷移過程是非常簡單的。如果你按照下面的步驟，將 MySQL 遷移到 MariaDB 會是無痛的。</p><h3 id="準備-mysql-資料庫和表" tabindex="-1">準備 MySQL 資料庫和表 <a class="header-anchor" href="#準備-mysql-資料庫和表" aria-label="Permalink to “準備 MySQL 資料庫和表”">​</a></h3><p>出於演示的目的，我們在做遷移之前在資料庫中創建一個測試的 MySQL 資料庫和表。如果你在 MySQL 中已經有了要遷移到 MariaDB 的資料庫，跳過此步驟。否則，按以下步驟操作。</p><p>在終端輸入 root 密碼登錄到 MySQL 。</p><pre><code>$ mysql -u root -p 
</code></pre><p>創建一個數據庫和表。</p><pre><code>mysql&gt; create database test01;
mysql&gt; use test01;
mysql&gt; create table pet(name varchar(30), owner varchar(30), species varchar(20), sex char(1));
</code></pre><p>在表中添加一些數據。</p><pre><code>mysql&gt; insert into pet values(&#39;brandon&#39;,&#39;Jack&#39;,&#39;puddle&#39;,&#39;m&#39;),(&#39;dixie&#39;,&#39;Danny&#39;,&#39;chihuahua&#39;,&#39;f&#39;); 
</code></pre><p>退出 MySQL 資料庫.</p><h3 id="備份-mysql-資料庫" tabindex="-1">備份 MySQL 資料庫 <a class="header-anchor" href="#備份-mysql-資料庫" aria-label="Permalink to “備份 MySQL 資料庫”">​</a></h3><p>下一步是備份現有的 MySQL 資料庫。使用下面的 mysqldump 命令導出現有的資料庫到文件中。運行此命令之前，請確保你的 MySQL 服務器上啓用了二進制日誌。如果你不知道如何啓用二進制日誌，請參閲結尾的教程説明。</p><pre><code>$ mysqldump --all-databases --user=root --password --master-data &gt; backupdb.sql 
</code></pre><p><img src="https://farm6.staticflickr.com/5775/20555772385_21b89335e3_b.jpg" alt=""></p><p>現在，在卸載 MySQL 之前先在系統上備份 my.cnf 文件。此步是可選的。</p><pre><code>$ sudo cp /etc/mysql/my.cnf /opt/my.cnf.bak 
</code></pre><h3 id="卸載-mysql" tabindex="-1">卸載 MySQL <a class="header-anchor" href="#卸載-mysql" aria-label="Permalink to “卸載 MySQL”">​</a></h3><p>首先，停止 MySQL 服務。</p><pre><code>$ sudo service mysql stop
</code></pre><p>或者:</p><pre><code>$ sudo systemctl stop mysql
</code></pre><p>或:</p><pre><code>$ sudo /etc/init.d/mysql stop 
</code></pre><p>然後繼續下一步，使用以下命令移除 MySQL 和配置文件。</p><p>在基於 RPM 的系統上 (例如, CentOS, Fedora 或 RHEL):</p><pre><code>$ sudo yum remove mysql* mysql-server mysql-devel mysql-libs
$ sudo rm -rf /var/lib/mysql 
</code></pre><p>在基於 Debian 的系統上(例如, Debian, Ubuntu 或 Mint):</p><pre><code>$ sudo apt-get remove mysql-server mysql-client mysql-common
$ sudo apt-get autoremove
$ sudo apt-get autoclean
$ sudo deluser mysql
$ sudo rm -rf /var/lib/mysql 
</code></pre><h3 id="安裝-mariadb" tabindex="-1">安裝 MariaDB <a class="header-anchor" href="#安裝-mariadb" aria-label="Permalink to “安裝 MariaDB”">​</a></h3><p>在 CentOS/RHEL 7和Ubuntu（14.04或更高版本）上，最新的 MariaDB 已經包含在其官方源。在 Fedora 上，自19 版本後 MariaDB 已經替代了 MySQL。如果你使用的是舊版本或 LTS 類型如 Ubuntu 13.10 或更早的，你仍然可以通過添加其官方倉庫來安裝 MariaDB。</p>`,30)),s("p",null,[t(e,{href:"https://downloads.mariadb.org/mariadb/repositories/#mirror=aasaam"},{default:o(()=>[...a[3]||(a[3]=[r("MariaDB 網站",-1)])]),_:1}),a[4]||(a[4]=r(" 提供了一個在線工具幫助你依據你的 Linux 發行版中來添加 MariaDB 的官方倉庫。此工具為 openSUSE, Arch Linux, Mageia, Fedora, CentOS, RedHat, Mint, Ubuntu, 和 Debian 提供了 MariaDB 的官方倉庫.",-1))]),a[25]||(a[25]=p(`<p><img src="https://farm6.staticflickr.com/5809/20367745260_073020b910_c.jpg" alt=""></p><p>下面例子中，我們使用 Ubuntu 14.04 發行版和 CentOS 7 配置 MariaDB 庫。</p><p><strong>Ubuntu 14.04</strong></p><pre><code>$ sudo apt-get install software-properties-common
$ sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db
$ sudo add-apt-repository &#39;deb http://mirror.mephi.ru/mariadb/repo/5.5/ubuntu trusty main&#39;
$ sudo apt-get update
$ sudo apt-get install mariadb-server 
</code></pre><p><strong>CentOS 7</strong></p><p>以下為 MariaDB 創建一個自定義的 yum 倉庫文件。</p><pre><code>$ sudo vi /etc/yum.repos.d/MariaDB.repo 
</code></pre><hr><pre><code>[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/5.5/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
</code></pre><hr><pre><code>$ sudo yum install MariaDB-server MariaDB-client 
</code></pre><p>安裝了所有必要的軟件包後，你可能會被要求為 MariaDB 的 root 用户創建一個新密碼。設置 root 的密碼後，別忘了恢復備份的 my.cnf 文件。</p><pre><code>$ sudo cp /opt/my.cnf /etc/mysql/
</code></pre><p>現在啓動 MariaDB 服務。</p><pre><code>$ sudo service mariadb start
</code></pre><p>或:</p><pre><code>$ sudo systemctl start mariadb
</code></pre><p>或:</p><pre><code>$ sudo /etc/init.d/mariadb start 
</code></pre><h3 id="導入-mysql-的資料庫" tabindex="-1">導入 MySQL 的資料庫 <a class="header-anchor" href="#導入-mysql-的資料庫" aria-label="Permalink to “導入 MySQL 的資料庫”">​</a></h3><p>最後，我們將以前導出的資料庫導入到 MariaDB 服務器中。</p><pre><code>$ mysql -u root -p &lt; backupdb.sql 
</code></pre><p>輸入你 MariaDB 的 root 密碼，資料庫導入過程將開始。導入過程完成後，將返回到命令提示符下。</p><p>要檢查導入過程是否完全成功，請登錄到 MariaDB 服務器，並查看一些樣本來檢查。</p><pre><code>$ mysql -u root -p
</code></pre><hr><pre><code>MariaDB [(none)]&gt; show databases;
MariaDB [(none)]&gt; use test01;
MariaDB [test01]&gt; select * from pet; 
</code></pre><p><img src="https://farm6.staticflickr.com/5820/20562243721_428a9a12a7_b.jpg" alt=""></p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>如你在本教程中看到的，MySQL-to-MariaDB 的遷移並不難。你應該知道，MariaDB 相比 MySQL 有很多新的功能。至於配置方面，在我的測試情況下，我只是將我舊的 MySQL 配置文件（my.cnf）作為 MariaDB 的配置文件，導入過程完全沒有出現任何問題。對於配置文件，我建議你在遷移之前請仔細閲讀 MariaDB 配置選項的文件，特別是如果你正在使用 MySQL 的特定配置。</p>`,30)),s("p",null,[a[7]||(a[7]=r("如果你正在運行有海量的表、包括羣集或主從複製的資料庫的複雜配置，看一看 Mozilla IT 和 Operations 團隊的 ",-1)),t(e,{href:"https://blog.mozilla.org/it/2013/12/16/upgrading-from-mysql-5-1-to-mariadb-5-5/"},{default:o(()=>[...a[5]||(a[5]=[r("更詳細的指南",-1)])]),_:1}),a[8]||(a[8]=r(" ，或者 ",-1)),t(e,{href:"https://mariadb.com/kb/en/mariadb/documentation/"},{default:o(()=>[...a[6]||(a[6]=[r("官方的 MariaDB 文檔",-1)])]),_:1}),a[9]||(a[9]=r("。",-1))]),a[26]||(a[26]=p(`<h3 id="故障排除" tabindex="-1">故障排除 <a class="header-anchor" href="#故障排除" aria-label="Permalink to “故障排除”">​</a></h3><p>1、 在運行 mysqldump 命令備份資料庫時出現以下錯誤。</p><pre><code>$ mysqldump --all-databases --user=root --password --master-data &gt; backupdb.sql 
</code></pre><hr><pre><code>mysqldump: Error: Binlogging on server not active
</code></pre><p>通過使用 &quot;--master-data&quot;，你可以在導出的輸出中包含二進制日誌信息，這對於資料庫的複製和恢復是有用的。但是，二進制日誌未在 MySQL 服務器啓用。要解決這個錯誤，修改 my.cnf 文件，並在 [mysqld] 部分添加下面的選項。</p><pre><code>log-bin=mysql-bin
</code></pre><p>保存 my.cnf 文件，並重新啓動 MySQL 服務：</p><pre><code>$ sudo service mysql restart
</code></pre><p>或者:</p><pre><code>$ sudo systemctl restart mysql
</code></pre><p>或:</p><pre><code>$ sudo /etc/init.d/mysql restart 
</code></pre><hr>`,14)),s("p",null,[a[11]||(a[11]=r("via: ",-1)),t(e,{href:"http://xmodulo.com/migrate-mysql-to-mariadb-linux.html"},{default:o(()=>[...a[10]||(a[10]=[r("http://xmodulo.com/migrate-mysql-to-mariadb-linux.html",-1)])]),_:1})]),s("p",null,[a[15]||(a[15]=r("作者：",-1)),t(e,{href:"http://xmodulo.com/author/kristophorus"},{default:o(()=>[...a[12]||(a[12]=[r("Kristophorus Hadiono",-1)])]),_:1}),a[16]||(a[16]=r(" 譯者：",-1)),t(e,{href:"https://github.com/strugglingyouth"},{default:o(()=>[...a[13]||(a[13]=[r("strugglingyouth",-1)])]),_:1}),a[17]||(a[17]=r(" 校對：",-1)),t(e,{href:"https://github.com/wxy"},{default:o(()=>[...a[14]||(a[14]=[r("wxy",-1)])]),_:1})]),s("p",null,[a[20]||(a[20]=r("本文由 ",-1)),t(e,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...a[18]||(a[18]=[r("LCTT",-1)])]),_:1}),a[21]||(a[21]=r(" 原創翻譯，",-1)),t(e,{href:"http://linux.cn/"},{default:o(()=>[...a[19]||(a[19]=[r("Linux中國",-1)])]),_:1}),a[22]||(a[22]=r(" 榮譽推出",-1))])])}const f=i(m,[["render",u]]);export{D as __pageData,f as default};
