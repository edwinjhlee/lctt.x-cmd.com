import{_ as p,a0 as i,w as u,s as l,I as o,x as e,a1 as r,A as n,ao as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const c=JSON.parse('{"title":"Linux 上使用 backup-manager 進行系統備份 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 上使用 backup-manager 進行系統備份 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 上使用 backup-manager 進行系統備份 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 上使用 backup-manager 進行系統備份 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141115 How to perform system backup with backup-manager on Linux","title":"Linux 上使用 backup-manager 進行系統備份","tag":"201501","desc":""},"relativePath":"201501/20141115 How to perform system backup with backup-manager on Linux.md","filePath":"[post].md"}'),d={name:"201501/20141115 How to perform system backup with backup-manager on Linux.md"};function m(b,t,h,S,L,g){const a=i("Link");return u(),l("div",null,[t[19]||(t[19]=o("h1",{id:"linux-上使用-backup-manager-進行系統備份",tabindex:"-1"},[e("Linux 上使用 backup-manager 進行系統備份 "),o("a",{class:"header-anchor",href:"#linux-上使用-backup-manager-進行系統備份","aria-label":"Permalink to “Linux 上使用 backup-manager 進行系統備份”"},"​")],-1)),t[20]||(t[20]=o("p",null,"無論簡單與否，我們都有機會去了解這麼一件事，那就是備份的重要性從來都不可以被低估。考慮到備份的方法真的多如牛毛，你可能想要知道怎樣來有效地為你的系統選擇正確的工具和和合適的策略。",-1)),o("p",null,[t[1]||(t[1]=e("在本文中，我將為你介紹",-1)),r(a,{href:"https://github.com/sukria/Backup-Manager"},{default:n(()=>[...t[0]||(t[0]=[e("backup-manager",-1)])]),_:1}),t[2]||(t[2]=e("，一個簡單易用的命令列備份工具，在大多數的Linux發行版的標準軟件庫中都能見到它的身影。",-1))]),t[21]||(t[21]=s(`<p>是什麼讓備份管理器在眾多的備份工具或備份策略中脱穎而出呢？讓我來簡單介紹一些它的與眾不同的特性吧：</p><ul><li><strong>簡單的設計與管理</strong>：配置文件易於讀懂和編輯，即便是初學者也很容易上手。</li><li><strong>一勞永逸</strong>：它在配置好後就可以通過cron週期性運作。</li><li><strong>支持多種協議遠程備份</strong>：無縫整合多種傳輸協議、應用和雲後端（如，FTP，SCP，SSH-GPG，rsync，AWS S3等等）來傳輸生成的歸檔包到一組遠程主機。</li><li><strong>支持資料庫備份</strong>：包括支持開箱即用備份MySQL/MariaDB和PostgreSQL資料庫。</li><li><strong>支持加密</strong>：備份過程中支持基於GPG文件的加密。</li></ul><h3 id="在linux上安裝備份管理器" tabindex="-1">在Linux上安裝備份管理器 <a class="header-anchor" href="#在linux上安裝備份管理器" aria-label="Permalink to “在Linux上安裝備份管理器”">​</a></h3><p>備份管理器的安裝是快速而無痛的，因為它就包含在大多數Linux發行版的基礎軟件庫中。</p><h4 id="debian-ubuntu及其衍生版" tabindex="-1">Debian，Ubuntu及其衍生版 <a class="header-anchor" href="#debian-ubuntu及其衍生版" aria-label="Permalink to “Debian，Ubuntu及其衍生版”">​</a></h4><pre><code># aptitude install backup-manager 
</code></pre><p>在基於Debian的系統中安裝時，會提示你輸入要存放備份歸檔文件的目錄。如果選擇的目錄不存在，那麼當你首次運行備份管理器時它會自動創建。</p><p>選擇OK並按回車鍵。</p><p><img src="https://farm6.staticflickr.com/5614/15600105060_8cf4491e3b_z.jpg" alt=""></p><p>在下一步中，會詢問你要備份的所有目錄（用空格分隔）。建議，但不是嚴格要求，列出同一父目錄中的幾個子目錄，而不要僅僅輸入父目錄。</p><p>你可以跳過該步驟並在以後對配置文件中BM_TARBALL_DIRECTORIESb變量進行設置。否則的話，就請儘可能多地添加你想要的目錄，然後選擇OK：</p><p><img src="https://farm6.staticflickr.com/5610/15761238616_c9651fea1c_z.jpg" alt=""></p><h4 id="fedora或centos-rhel" tabindex="-1">Fedora或CentOS/RHEL <a class="header-anchor" href="#fedora或centos-rhel" aria-label="Permalink to “Fedora或CentOS/RHEL”">​</a></h4><pre><code># yum install backup-manager 
</code></pre>`,14)),o("p",null,[t[4]||(t[4]=e("在CentOS/RHEL上，在運行以上yum命令前，你將需要先啓用",-1)),r(a,{href:"http://xmodulo.com/how-to-set-up-epel-repository-on-centos.html"},{default:n(()=>[...t[3]||(t[3]=[e("EPEL倉庫",-1)])]),_:1}),t[5]||(t[5]=e("。",-1))]),t[22]||(t[22]=s(`<h3 id="配置備份管理器" tabindex="-1">配置備份管理器 <a class="header-anchor" href="#配置備份管理器" aria-label="Permalink to “配置備份管理器”">​</a></h3><p>備份管理器的主配置文件是/etc/backup-manager.conf。該文件被劃分為幾個章節，裏面定義了備份方法和相關的變量（或“鍵值”），這些配置讓備份管理器成為一個多樣化的工具，可以廣泛地應付各種狀況。</p><p>出於演示目的，我們將考慮以下環境：</p><ul><li>每週對/etc，/home以及/var/log目錄進行一次完整備份（我們將在下面通過cron設置備份的頻率）。</li><li>通過SSH傳輸.tar.gz備份歸檔文件到兩台不同主機dev1和dev3上指定的目標目錄。</li><li>通過SSH備份本地MySQL資料庫到相同目標主機。</li></ul><p>用你喜愛的文本編輯器打開/etc/backup-manager.conf文件，並編輯以下變量。如果你願意，你大可不必理會那些#開頭的行。在本文中，它只是用作説明的註釋：</p><pre><code># Specify the backup method(s) that will be used.
# tarball: takes a list of directories and builds the corresponding tarballs.
# mysql: archives MySQL databases using mysqldump. To restore the database, you # need to use the same tool manually.
export BM_ARCHIVE_METHOD=&quot;tarball mysql&quot;

# Where to store the backups.
export BM_REPOSITORY_ROOT=&quot;/var/archives&quot;

# The following directive indicates backup-manager to name 
# the generated files after the directory that was backed up.
export BM_TARBALL_NAMEFORMAT=&quot;long&quot;

# Define the compression type for the generated files.
export BM_TARBALL_FILETYPE=&quot;tar.gz&quot;

# List the directories that you want to backup.
export BM_TARBALL_DIRECTORIES=&quot;/etc /home /var/log&quot;

# Exclude some subdirectories or file extensions.
export BM_TARBALL_BLACKLIST=&quot;/var/log/myotherapp.log *.mp3 *.mp4&quot;

# List the database(s) that you want to backup, separated by spaces.
export BM_MYSQL_DATABASES=&quot;mysql mybase wordpress dotclear phpbb2&quot;

# MySQL username.
export BM_MYSQL_ADMINLOGIN=&quot;root&quot;

# MySQL password for username.
export BM_MYSQL_ADMINPASS=&quot;mypassword&quot;

# Add support for DROP statements (optional).
export BM_MYSQL_SAFEDUMPS=&quot;true&quot;

# The hostname or IP address where the database(s) reside.
export BM_MYSQL_HOST=&quot;localhost&quot;

# Port where MySQL server is listening.
export BM_MYSQL_PORT=&quot;3306&quot;

# Compression type (optional).
export BM_MYSQL_FILETYPE=&quot;gzip&quot;

# Do not archive remote hosts, but only localhost.
BM_TARBALL_OVER_SSH=&quot;false&quot;

# User account for SSH upload.
export BM_UPLOAD_SSH_USER=&quot;root&quot;

# Absolute path of the user&#39;s private key for passwordless SSH login.
export BM_UPLOAD_SSH_KEY=&quot;/root/.ssh/id_rsa&quot;

# Remote hosts (make sure you have exported your public key to them):
export BM_UPLOAD_SSH_HOSTS=&quot;dev1 dev3&quot;

# Remote destination for uploading backups. If it doesn&#39;t exist, 
# this directory will be created automatically the first time
# backup-manager runs.
export BM_UPLOAD_SSH_DESTINATION=&quot;/var/archives/backups/$HOSTNAME&quot;
</code></pre><h3 id="運行備份管理器" tabindex="-1">運行備份管理器 <a class="header-anchor" href="#運行備份管理器" aria-label="Permalink to “運行備份管理器”">​</a></h3><p>要手動運行備份管理器，請輸入以下命令。你也可以選擇添加‘-v’標識以便一步一步詳細檢查運行過程。</p><pre><code># backup-manager 
</code></pre><p>BM_TARBALL_DIRECTORIES列出的目錄將作為tarball備份到BM_REPOSITORY_ROOT目錄，然後通過SSH傳輸到BM_UPLOAD_SSH_DESTINATION指定的主機dev1和dev3。</p><p><img src="https://farm8.staticflickr.com/7497/15761238646_945620d8b7_z.jpg" alt=""></p><p>正如你在上面圖片中看到的那樣，備份管理器在運行的時候創建了一個名為/root/.back-manager_my.cnf的文件，MySQL密碼通過BM_MYSQL_ADMINPASS指定。那樣，mysqldump可以驗證到MySQL服務器，而不必在命令列以明文格式接受密碼，那樣會有安全風險。</p><h3 id="通過cron運行備份管理器" tabindex="-1">通過cron運行備份管理器 <a class="header-anchor" href="#通過cron運行備份管理器" aria-label="Permalink to “通過cron運行備份管理器”">​</a></h3><p>一旦決定哪一天是進行每週備份的最佳日子（最佳時間），你可以讓cron來為你運行備份管理器。</p><p>打開root的crontab文件（注意，你必須以root登錄）：</p><pre><code># crontab -e 
</code></pre><p>假定你想要在星期天的上午5:15分運行備份管理器，那麼就添加下面這行。</p><pre><code>15 05 * * 0 /usr/sbin/backup-manager &gt; /dev/null 2&gt;&amp;1
</code></pre><h3 id="小結" tabindex="-1">小結 <a class="header-anchor" href="#小結" aria-label="Permalink to “小結”">​</a></h3><p>在本文中，我已經展示了備份管理器這個備份工具是怎樣的簡單而強大，並且易於使用。在你的備份策略中，你可能還有其它幾個選項需要考慮，請參閲手冊頁或用户手冊，裏面也包含了幾個部署實例和建議。</p><p>希望此文對你有所幫助，請在下面隨意提問和評論。</p><hr>`,22)),o("p",null,[t[7]||(t[7]=e("via: ",-1)),r(a,{href:"http://xmodulo.com/linux-backup-manager.html"},{default:n(()=>[...t[6]||(t[6]=[e("http://xmodulo.com/linux-backup-manager.html",-1)])]),_:1})]),o("p",null,[t[11]||(t[11]=e("作者：",-1)),r(a,{href:"http://xmodulo.com/author/gabriel"},{default:n(()=>[...t[8]||(t[8]=[e("Gabriel Cánepa",-1)])]),_:1}),t[12]||(t[12]=e(" 譯者：",-1)),r(a,{href:"https://github.com/GOLinux"},{default:n(()=>[...t[9]||(t[9]=[e("GOLinux",-1)])]),_:1}),t[13]||(t[13]=e(" 校對：",-1)),r(a,{href:"https://github.com/wxy"},{default:n(()=>[...t[10]||(t[10]=[e("wxy",-1)])]),_:1})]),o("p",null,[t[16]||(t[16]=e("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...t[14]||(t[14]=[e("LCTT",-1)])]),_:1}),t[17]||(t[17]=e(" 原創翻譯，",-1)),r(a,{href:"http://linux.cn/"},{default:n(()=>[...t[15]||(t[15]=[e("Linux中國",-1)])]),_:1}),t[18]||(t[18]=e(" 榮譽推出",-1))])])}const f=p(d,[["render",m]]);export{c as __pageData,f as default};
