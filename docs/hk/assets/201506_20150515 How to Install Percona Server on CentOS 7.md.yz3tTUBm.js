import{_ as l,a0 as s,w as p,s as i,ao as d,I as t,x as r,a1 as n,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"如何在 CentOS 7 上安裝 Percona服務器 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7 上安裝 Percona服務器 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7 上安裝 Percona服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7 上安裝 Percona服務器 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150515 How to Install Percona Server on CentOS 7","title":"如何在 CentOS 7 上安裝 Percona服務器","tag":"201506","desc":""},"relativePath":"201506/20150515 How to Install Percona Server on CentOS 7.md","filePath":"[post].md"}'),c={name:"201506/20150515 How to Install Percona Server on CentOS 7.md"};function m(h,e,f,y,b,u){const a=s("Link");return p(),i("div",null,[e[13]||(e[13]=d(`<h1 id="如何在-centos-7-上安裝-percona服務器" tabindex="-1">如何在 CentOS 7 上安裝 Percona服務器 <a class="header-anchor" href="#如何在-centos-7-上安裝-percona服務器" aria-label="Permalink to “如何在 CentOS 7 上安裝 Percona服務器”">​</a></h1><p>在這篇文章中我們將瞭解關於 Percona 服務器，一個開源的MySQL，MariaDB的替代品。InnoDB的資料庫引擎使得Percona 服務器非常有吸引力，如果你需要的高性能，高可靠性和高性價比的解決方案，它將是一個很好的選擇。</p><p>在下文中將介紹在CentOS 7上Percona 服務器的安裝，以及備份當前數據，配置的步驟和如何恢復備份。</p><h3 id="_1-什麼是percona-為什麼使用它" tabindex="-1">1.什麼是Percona，為什麼使用它 <a class="header-anchor" href="#_1-什麼是percona-為什麼使用它" aria-label="Permalink to “1.什麼是Percona，為什麼使用它”">​</a></h3><p>Percona是一個MySQL，MariaDB資料庫的開源替代品，它是MySQL的一個分支，相當多的改進和獨特的功能使得它比MYSQL更可靠，性能更強，速度更快，它與MYSQL完全兼容，你甚至可以在Oracle的MySQL與Percona之間使用複製。</p><h4 id="在percona中獨具特色的功能" tabindex="-1">在Percona中獨具特色的功能 <a class="header-anchor" href="#在percona中獨具特色的功能" aria-label="Permalink to “在Percona中獨具特色的功能”">​</a></h4><ul><li>分區適應哈希搜索</li><li>快速校驗算法</li><li>緩衝池預加載</li><li>支持FlashCache</li></ul><h4 id="mysql企業版和percona中的特有功能" tabindex="-1">MySQL企業版和Percona中的特有功能 <a class="header-anchor" href="#mysql企業版和percona中的特有功能" aria-label="Permalink to “MySQL企業版和Percona中的特有功能”">​</a></h4><ul><li>從不同的服務器導入表</li><li>PAM認證</li><li>審計日誌</li><li>線程池</li></ul><p>現在，你肯定很興奮地看到這些好的東西整合在一起，我們將告訴你如何安裝和對Percona Server做基本配置。</p><h3 id="_2-備份你的資料庫" tabindex="-1">2. 備份你的資料庫 <a class="header-anchor" href="#_2-備份你的資料庫" aria-label="Permalink to “2. 備份你的資料庫”">​</a></h3><p>接下來，在命令列下使用SQL命令創建一個mydatabases.sql文件，來重建或恢復salesdb和employeedb資料庫，根據你的設置替換資料庫名稱，如果沒有安裝MySQL則跳過此步：</p><pre><code>mysqldump -u root -p --databases employeedb salesdb &gt; mydatabases.sql
</code></pre><p>複製當前的配置文件，如果你沒有安裝MYSQL也可跳過：</p><pre><code>cp my.cnf my.cnf.bkp
</code></pre><h3 id="_3-刪除之前的sql服務器" tabindex="-1">3.刪除之前的SQL服務器 <a class="header-anchor" href="#_3-刪除之前的sql服務器" aria-label="Permalink to “3.刪除之前的SQL服務器”">​</a></h3><p>停止MYSQL/MariaDB，如果它們還在運行：</p><pre><code>systemctl stop mysql.service
</code></pre><p>卸載MariaDB和MYSQL：</p><pre><code>yum remove MariaDB-server MariaDB-client MariaDB-shared mysql mysql-server
</code></pre><p>移動重命名放在/var/lib/mysql當中的MariaDB文件。這比僅僅只是移除更為安全快速，這就像2級即時備份。😃</p><pre><code>mv /var/lib/mysql /var/lib/mysql_mariadb
</code></pre><h3 id="_4-使用二進制包安裝percona" tabindex="-1">4.使用二進制包安裝Percona <a class="header-anchor" href="#_4-使用二進制包安裝percona" aria-label="Permalink to “4.使用二進制包安裝Percona”">​</a></h3><p>你可以在眾多Percona安裝方法中選擇，在CentOS中使用Yum或者RPM包安裝通常是更好的主意，所以這些是本文介紹的方式，下載源文件編譯後安裝在本文中並沒有介紹。</p><p>從Yum倉庫中安裝：</p><p>首先，你需要設置Percona的Yum庫:</p><pre><code>yum install http://www.percona.com/downloads/percona-release/redhat/0.1-3/percona-release-0.1-3.noarch.rpm
</code></pre><p>接下來安裝Percona:</p><pre><code>yum install Percona-Server-client-56 Percona-Server-server-56
</code></pre><p>上面的命令安裝Percona的服務器和客户端、共享庫，可能需要Perl和Perl模組，以及其他依賴的需要，如DBI::MySQL。如果這些尚未安裝，可能需要安裝更多的依賴包。</p><p>使用RPM包安裝：</p><p>我們可以使用wget命令下載所有的rpm包:</p><pre><code>wget -r -l 1 -nd -A rpm -R &quot;*devel*,*debuginfo*&quot; \\
http://www.percona.com/downloads/Percona-Server-5.5/Percona-Server-5.5.42-37.1/binary/redhat/7/x86_64/
</code></pre><p>使用rpm工具，一次性安裝所有的rpm包：</p><pre><code>rpm -ivh Percona-Server-server-55-5.5.42-rel37.1.el7.x86_64.rpm \\
Percona-Server-client-55-5.5.42-rel37.1.el7.x86_64.rpm \\
Percona-Server-shared-55-5.5.42-rel37.1.el7.x86_64.rpm
</code></pre><p>注意在上面命令語句中最後的反斜槓&#39;&#39;（只是為了換行方便）。如果您安裝單獨的軟件包，記住要解決依賴關係，在安裝客户端之前要先安裝共享包，在安裝服務器之前請先安裝客户端。</p><h3 id="_5-配置percona服務器" tabindex="-1">5.配置Percona服務器 <a class="header-anchor" href="#_5-配置percona服務器" aria-label="Permalink to “5.配置Percona服務器”">​</a></h3><h4 id="恢復之前的配置" tabindex="-1">恢復之前的配置 <a class="header-anchor" href="#恢復之前的配置" aria-label="Permalink to “恢復之前的配置”">​</a></h4><p>當我們從MariaDB遷移過來時，你可以將之前的my.cnf的備份文件恢復回來。</p><pre><code>cp /etc/my.cnf.bkp /etc/my.cnf
</code></pre><h4 id="創建一個新的my-cnf文件" tabindex="-1">創建一個新的my.cnf文件 <a class="header-anchor" href="#創建一個新的my-cnf文件" aria-label="Permalink to “創建一個新的my.cnf文件”">​</a></h4><p>如果你需要一個適合你需求的新的配置文件或者你並沒有備份配置文件，你可以使用以下方法，通過簡單的幾步生成新的配置文件。</p><p>下面是Percona-server軟件包自帶的my.cnf文件</p><pre><code># Percona Server template configuration

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
</code></pre><p>根據你的需要配置好my.cnf後，就可以啓動該服務了：</p><pre><code>systemctl restart mysql.service
</code></pre><p>如果一切順利的話，它已經準備好執行SQL命令了，你可以用以下命令檢查它是否已經正常啓動：</p><pre><code>mysql -u root -p -e &#39;SHOW VARIABLES LIKE &quot;version_comment&quot;&#39;
</code></pre><p>如果你不能夠正常啓動它，你可以在<strong>/var/log/mysql/mysqld.log</strong>中查找原因，該文件可在my.cnf的[mysql_safe]的log-error中設置。</p><pre><code>tail /var/log/mysql/mysqld.log
</code></pre><p>你也可以在/var/lib/mysql/文件夾下查找格式為[主機名].err的文件，就像下面這個例子：</p><pre><code>tail /var/lib/mysql/centos7.err
</code></pre><p>如果還是沒找出原因，你可以試試strace：</p><pre><code>yum install strace &amp;&amp; systemctl stop mysql.service &amp;&amp; strace -f -f mysqld_safe
</code></pre><p>上面的命令挺長的，輸出的結果也相對簡單，但絕大多數時候你都能找到無法啓動的原因。</p><h3 id="_6-保護你的數據" tabindex="-1">6.保護你的數據 <a class="header-anchor" href="#_6-保護你的數據" aria-label="Permalink to “6.保護你的數據”">​</a></h3><p>好了，你的關係資料庫管理系統已經準備好接收SQL查詢，但是把你寶貴的數據放在沒有最起碼安全保護的服務器上並不可取，為了更為安全最好使用mysql_secure_install來安裝，這個工具可以幫助你刪除未使用的默認功能，並設置root的密碼，限制使用此用户進行訪問。只需要在shell中執行該命令，並參照屏幕上的説明操作。</p><pre><code>mysql_secure_install
</code></pre><h3 id="_7-還原備份" tabindex="-1">7.還原備份 <a class="header-anchor" href="#_7-還原備份" aria-label="Permalink to “7.還原備份”">​</a></h3><p>如果您參照之前的設置，現在你可以恢復資料庫，只需再用mysqldump一次。</p><pre><code>mysqldump -u root -p &lt; mydatabases.sql
</code></pre><p>恭喜你，你剛剛已經在你的CentOS上成功安裝了Percona，你的服務器已經可以正式投入使用；你可以像使用MySQL一樣使用它，你的服務器與它完全兼容。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>為了獲得更強的性能你需要對配置文件做大量的修改，但這裏也有一些簡單的選項來提高機器的性能。當使用InnoDB引擎時，將innodb_file_per_table設置為on，它將在一個文件中為每個表創建索引表，這意味着每個表都有它自己的索引文件，它使系統更強大和更容易維修。</p><p>可以修改innodb_buffer_pool_size選項，InnoDB應該有足夠的緩存池來應對你的數據集，大小應該為當前可用內存的70%到80%。</p><p>將innodb-flush-method設置為O_DIRECT，關閉寫入高速緩存，如果你使用了RAID，這可以提升性能，因為在底層已經完成了緩存操作。</p><p>如果你的數據並不是十分關鍵並且並不需要對資料庫事務正確執行的四個基本要素完全兼容，可以將innodb_flush_log_at_trx_commit設置為2，這也能提升系統的性能。</p><hr>`,68)),t("p",null,[e[1]||(e[1]=r("via: ",-1)),n(a,{href:"http://linoxide.com/linux-how-to/percona-server-centos-7/"},{default:o(()=>[...e[0]||(e[0]=[r("http://linoxide.com/linux-how-to/percona-server-centos-7/",-1)])]),_:1})]),t("p",null,[e[5]||(e[5]=r("作者：",-1)),n(a,{href:"http://linoxide.com/author/carlosal/"},{default:o(()=>[...e[2]||(e[2]=[r("Carlos Alberto",-1)])]),_:1}),e[6]||(e[6]=r(" 譯者：",-1)),n(a,{href:"https://github.com/FatJoe123"},{default:o(()=>[...e[3]||(e[3]=[r("FatJoe123",-1)])]),_:1}),e[7]||(e[7]=r(" 校對：",-1)),n(a,{href:"https://github.com/wxy"},{default:o(()=>[...e[4]||(e[4]=[r("wxy",-1)])]),_:1})]),t("p",null,[e[10]||(e[10]=r("本文由 ",-1)),n(a,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[8]||(e[8]=[r("LCTT",-1)])]),_:1}),e[11]||(e[11]=r(" 原創翻譯，",-1)),n(a,{href:"https://linux.cn/"},{default:o(()=>[...e[9]||(e[9]=[r("Linux中國",-1)])]),_:1}),e[12]||(e[12]=r(" 榮譽推出",-1))])])}const v=l(c,[["render",m]]);export{S as __pageData,v as default};
