import{_ as l,a0 as s,w as d,s as i,ao as a,I as n,x as t,a1 as r,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"如何在 CentOS 7.x 上安裝 Zephyr 測試管理工具 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7.x 上安裝 Zephyr 測試管理工具 | LCTT (201512) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7.x 上安裝 Zephyr 測試管理工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7.x 上安裝 Zephyr 測試管理工具 | LCTT (201512) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201512/20150824 How to Setup Zephyr Test Management Tool on CentOS 7.x","title":"如何在 CentOS 7.x 上安裝 Zephyr 測試管理工具","tag":"201512","desc":""},"relativePath":"201512/20150824 How to Setup Zephyr Test Management Tool on CentOS 7.x.md","filePath":"[post].md"}'),h={name:"201512/20150824 How to Setup Zephyr Test Management Tool on CentOS 7.x.md"};function m(y,e,c,u,g,x){const o=s("Link");return d(),i("div",null,[e[16]||(e[16]=a(`<h1 id="如何在-centos-7-x-上安裝-zephyr-測試管理工具" tabindex="-1">如何在 CentOS 7.x 上安裝 Zephyr 測試管理工具 <a class="header-anchor" href="#如何在-centos-7-x-上安裝-zephyr-測試管理工具" aria-label="Permalink to “如何在 CentOS 7.x 上安裝 Zephyr 測試管理工具”">​</a></h1><p>測試管理（Test Management）指測試人員所需要的任何的所有東西。測試管理工具用來記錄測試執行的結果、計劃測試活動以及彙報質量控制活動的情況。在這篇文章中我們會向你介紹如何配置 Zephyr 測試管理工具，它包括了管理測試活動需要的所有東西，不需要單獨安裝測試活動所需要的應用程序從而降低測試人員不必要的麻煩。一旦你安裝完它，你就看可以用它跟蹤 bug 和缺陷，和你的團隊成員協作項目任務，因為你可以輕鬆地共享和訪問測試過程中多個項目團隊的數據。</p><h3 id="zephyr-要求" tabindex="-1">Zephyr 要求 <a class="header-anchor" href="#zephyr-要求" aria-label="Permalink to “Zephyr 要求”">​</a></h3><p>安裝和運行 Zephyr 要求滿足以下最低條件。可以根據你的基礎設施提高資源。我們會在 64 位 CentOS-7 系統上安裝 Zephyr，幾乎在所有的 Linux 操作系統中都有可用的 Zephyr 二進制發行版。</p><p>注：表格</p><table width="669" style="height:231px;"><tbody><tr><td width="660" colspan="3"><strong>Zephyr test management tool</strong></td></tr><tr><td width="140"><strong>Linux OS</strong></td><td width="312">CentOS Linux 7 (Core), 64-bit</td><td width="209"></td></tr><tr><td width="140"><strong>Packages</strong></td><td width="312">JDK 7 或更高 ,  Oracle JDK 6 update</td><td width="209">沒有事先安裝的 Tomcat 和 MySQL</td></tr><tr><td width="140"><strong>RAM</strong></td><td width="312">4 GB</td><td width="209">推薦 8 GB</td></tr><tr><td width="140"><strong>CPU</strong></td><td width="521" colspan="2">2.0 GHZ 或更高</td></tr><tr><td width="140"><strong>Hard Disk</strong></td><td width="521" colspan="2">30 GB , 至少 5GB </td></tr></tbody></table><p>安裝 Zephyr 要求你有超級用户（root）權限，並確保你已經正確配置了網絡的靜態 IP ，默認端口必須可用並允許通過防火牆。其中 tomcat 會使用 80/443、 8005、 8009、 8010 端口， Zephyr 內部使用 RTMP 協議的 flex 會使用 443 和 2099 號端口。</p><h3 id="安裝-java-jdk-7" tabindex="-1">安裝 Java JDK 7 <a class="header-anchor" href="#安裝-java-jdk-7" aria-label="Permalink to “安裝 Java JDK 7”">​</a></h3><p>安裝 Zephyr 首先需要安裝 Java JDK 7，如果你的系統上還沒有安裝，可以按照下面的方法安裝 Java 並設置 JAVA_HOME 環境變量。</p><p>輸入以下的命令安裝 Java JDK 7。</p><pre><code>[root@centos-007 ~]# yum install java-1.7.0-openjdk-1.7.0.79-2.5.5.2.el7_1

[root@centos-007 ~]# yum install java-1.7.0-openjdk-devel-1.7.0.85-2.6.1.2.el7_1.x86_64
</code></pre><p>安裝完 java 和它的所有依賴後，運行下面的命令設置 JAVA_HOME 環境變量。</p><pre><code>[root@centos-007 ~]# export JAVA_HOME=/usr/java/default
[root@centos-007 ~]# export PATH=/usr/java/default/bin:$PATH
</code></pre><p>用下面的命令檢查 java 版本以驗證安裝。</p><pre><code>[root@centos-007 ~]# java –version

java version &quot;1.7.0_79&quot;
OpenJDK Runtime Environment (rhel-2.5.5.2.el7_1-x86_64 u79-b14)
OpenJDK 64-Bit Server VM (build 24.79-b02, mixed mode)
</code></pre><p>輸出顯示我們已經正確安裝了 1.7.0_79 版本的 OpenJDK Java。</p><h3 id="安裝-mysql-5-6-x" tabindex="-1">安裝 MySQL 5.6.x <a class="header-anchor" href="#安裝-mysql-5-6-x" aria-label="Permalink to “安裝 MySQL 5.6.x”">​</a></h3><p>如果的機器上有其它的 MySQL，建議你先卸載它們並安裝這個版本，或者升級它們的模式（schemas）到指定的版本。因為 Zephyr 前提要求這個指定的 5.6.x 版本的 MySQL ，要有 root 用户名。</p><p>可以按照下面的步驟在 CentOS-7.1 上安裝 MySQL 5.6 ：</p><p>下載 rpm 軟件包，它會為安裝 MySQL 服務器創建一個 yum 庫文件。</p><pre><code>[root@centos-007 ~]# yum install wget
[root@centos-007 ~]# wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
</code></pre><p>然後用 rpm 命令安裝下載下來的 rpm 軟件包。</p><pre><code>[root@centos-007 ~]# rpm -ivh mysql-community-release-el7-5.noarch.rpm
</code></pre><p>安裝完這個軟件包後你會有兩個和 MySQL 相關的新的 yum 庫。然後使用 yum 命令安裝 MySQL Server 5.6，它會自動安裝所有需要的依賴。</p><pre><code>[root@centos-007 ~]# yum install mysql-server
</code></pre><p>安裝過程完成之後，運行下面的命令啓動 mysqld 服務並檢查它的狀態是否激活。</p><pre><code>[root@centos-007 ~]# service mysqld start
[root@centos-007 ~]# service mysqld status
</code></pre><p>對於全新安裝的 MySQL 服務器，MySQL root 用户的密碼為空。為了安全起見，我們應該重置 MySQL root 用户的密碼。用自動生成的空密碼連接到 MySQL 並更改 root 用户密碼。</p><pre><code>[root@centos-007 ~]# mysql
mysql&gt; SET PASSWORD FOR &#39;root&#39;@&#39;localhost&#39; = PASSWORD(&#39;your_password&#39;);
mysql&gt; flush privileges;
mysql&gt; quit;
</code></pre><p>現在我們需要在 MySQL 默認的配置文件中配置所需的資料庫參數。打開 &quot;/etc/&quot; 目錄中的文件並按照下面那樣更新。</p><pre><code>[root@centos-007 ~]# vi /etc/my.cnf
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
</code></pre><p>保存配置文件中的更新並重啓 mysql 服務。</p><pre><code>[root@centos-007 ~]# service mysqld restart
</code></pre><h3 id="下載-zephyr-安裝包" tabindex="-1">下載 Zephyr 安裝包 <a class="header-anchor" href="#下載-zephyr-安裝包" aria-label="Permalink to “下載 Zephyr 安裝包”">​</a></h3>`,36)),n("p",null,[e[1]||(e[1]=t("我們已經安裝完了安裝 Zephyr 所需要的軟件包。現在我們需要獲取 Zephyr 二進制發佈包和它的許可證密鑰。到 Zephyr 官方下載鏈接 ",-1)),r(o,{href:"http://download.yourzephyr.com/linux/download.php"},{default:p(()=>[...e[0]||(e[0]=[t("http://download.yourzephyr.com/linux/download.php",-1)])]),_:1}),e[2]||(e[2]=t(" 輸入你的電子郵件 ID 並點擊下載。",-1))]),e[17]||(e[17]=a(`<p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/13.png" alt="下載 Zephyr"></p><p>然後確認你的電子郵件地址，你會獲得 Zephyr 下載鏈接和它的許可證密鑰鏈接。點擊提供的鏈接從服務器中選擇和你操作系統合適的版本下載二進制安裝包以及許可證文件。</p><p>我們把它下載到 home 目錄並更改它的權限為可執行。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/22.png" alt="Zephyr 二進制包"></p><h3 id="開始安裝和配置-zephyr" tabindex="-1">開始安裝和配置 Zephyr <a class="header-anchor" href="#開始安裝和配置-zephyr" aria-label="Permalink to “開始安裝和配置 Zephyr”">​</a></h3><p>現在我們通過執行它的二進制安裝腳本開始安裝 Zephyr。</p><pre><code>[root@centos-007 ~]# ./zephyr_4_7_9213_linux_setup.sh –c
</code></pre><p>一旦你運行了上面的命令，它會檢查是否正確配置了 Java 環境變量。如果配置不正確，你可能會看到類似下面的錯誤。</p><pre><code>testing JVM in /usr ...
Starting Installer ...
Error : Either JDK is not found at expected locations or JDK version is mismatched.
Zephyr requires Oracle Java Development Kit (JDK) version 1.7 or higher.
</code></pre><p>如果你正確配置了 Java，它會開始安裝 Zephyr 並要求你輸入 “o” 繼續或者輸入 “c” 取消安裝。讓我們敲擊 “o” 並輸入回車鍵開始安裝。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/32.png" alt="安裝 zephyr"></p><p>下一個選項是檢查安裝 Zephyr 所有的要求，輸入回車進入下一個選項。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/42.png" alt="zephyr 要求"></p><p>輸入 “1” 並回車同意許可證協議。</p><pre><code>I accept the terms of this license agreement [1], I do not accept the terms of this license agreement [2, Enter]
</code></pre><p>我們需要選擇安裝 Zephyr 合適的目標位置以及默認端口，如果你想用默認端口之外的其它端口，也可以在這裏配置。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/52.png" alt="installation folder"></p><p>然後自定義 mysql 資料庫參數並給出配置文件的正確路徑。在這一步你可能看到類似下面的錯誤。</p><pre><code>Please update MySQL configuration. Configuration parameter max_connection should be at least 500 (max_connection = 500) and max_allowed_packet should be at least 50MB (max_allowed_packet = 50M).
</code></pre><p>要消除這個錯誤，你要確保在 mysql 配置文件中正確配置了 &quot;max_connection&quot; 和 &quot;max_allowed_packet&quot; 參數。運行所示的命令連接到資料庫確認這些設置。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/62.png" alt="連接 mysql"></p><p>當你正確配置了 mysql 資料庫，它會提取配置文件並完成安裝。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/72.png" alt="配置 mysql"></p><p>安裝過程在你的計算機上成功的安裝了 Zephyr 4.7。要啓動 Zephyr 桌面，輸入 “y” 完成 Zephyr 安裝。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/82.png" alt="啓動 zephyr"></p><h3 id="啓動-zephyr-桌面" tabindex="-1">啓動 Zephyr 桌面 <a class="header-anchor" href="#啓動-zephyr-桌面" aria-label="Permalink to “啓動 Zephyr 桌面”">​</a></h3><p>打開你的 web 瀏覽器並用你的本機 IP 地址啓動 Zephyr 桌面，你會被導向 Zephyr 桌面。</p><pre><code>http://your_server_IP/zephyr/desktop/
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/91.png" alt="Zephyr 桌面"></p><p>從 Zephyr 儀表盤點擊 &quot;Test Manager&quot; 並用默認的用户名和密碼 &quot;test.manager&quot; 登錄。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/test_manager_login.png" alt="Test Manage 登錄"></p><p>你登錄進去後你就可以配置你的管理設置了。根據你的環境選擇你想要的設置。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/test_manage_admin.png" alt="Test Manage 管理"></p><p>完成管理設置後保存設置，資源管理和項目配置也類似，然後開始使用 Zephyr 作為你的測試管理工具吧。如圖所示在 Department Dashboard Management 中檢查和編輯管理設置狀態。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/08/dashboard.png" alt="zephyr 儀表盤"></p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>好了！ 我們已經在 CentOS 7.1 上安裝完了 Zephyr。我們希望你能更加深入瞭解 Zephyr 測試管理工具，它提供簡化測試流程、允許快速訪問數據分析、協作工具以及多個項目成員之間交流。如果在你的環境中遇到任何問題，歡迎和我們聯繫。</p><hr>`,38)),n("p",null,[e[4]||(e[4]=t("via: ",-1)),r(o,{href:"http://linoxide.com/linux-how-to/setup-zephyr-tool-centos-7-x/"},{default:p(()=>[...e[3]||(e[3]=[t("http://linoxide.com/linux-how-to/setup-zephyr-tool-centos-7-x/",-1)])]),_:1})]),n("p",null,[e[8]||(e[8]=t("作者：",-1)),r(o,{href:"http://linoxide.com/author/kashifs/"},{default:p(()=>[...e[5]||(e[5]=[t("Kashif Siddique",-1)])]),_:1}),e[9]||(e[9]=t(" 譯者：",-1)),r(o,{href:"http://mutouxiaogui.cn/blog/"},{default:p(()=>[...e[6]||(e[6]=[t("ictlyh",-1)])]),_:1}),e[10]||(e[10]=t(" 校對：",-1)),r(o,{href:"https://github.com/wxy"},{default:p(()=>[...e[7]||(e[7]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[13]||(e[13]=t("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[11]||(e[11]=[t("LCTT",-1)])]),_:1}),e[14]||(e[14]=t(" 原創翻譯，",-1)),r(o,{href:"https://linux.cn/"},{default:p(()=>[...e[12]||(e[12]=[t("Linux中國",-1)])]),_:1}),e[15]||(e[15]=t(" 榮譽推出",-1))])])}const f=l(h,[["render",m]]);export{T as __pageData,f as default};
