import{_ as p,a0 as i,w as u,s as l,I as o,x as e,a1 as r,A as n,ao as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const c=JSON.parse('{"title":"Linux 上使用 backup-manager 进行系统备份 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 上使用 backup-manager 进行系统备份 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 上使用 backup-manager 进行系统备份 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 上使用 backup-manager 进行系统备份 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141115 How to perform system backup with backup-manager on Linux","title":"Linux 上使用 backup-manager 进行系统备份","tag":"201501","desc":""},"relativePath":"201501/20141115 How to perform system backup with backup-manager on Linux.md","filePath":"[post].md"}'),d={name:"201501/20141115 How to perform system backup with backup-manager on Linux.md"};function m(b,t,h,S,L,g){const a=i("Link");return u(),l("div",null,[t[19]||(t[19]=o("h1",{id:"linux-上使用-backup-manager-进行系统备份",tabindex:"-1"},[e("Linux 上使用 backup-manager 进行系统备份 "),o("a",{class:"header-anchor",href:"#linux-上使用-backup-manager-进行系统备份","aria-label":"Permalink to “Linux 上使用 backup-manager 进行系统备份”"},"​")],-1)),t[20]||(t[20]=o("p",null,"无论简单与否，我们都有机会去了解这么一件事，那就是备份的重要性从来都不可以被低估。考虑到备份的方法真的多如牛毛，你可能想要知道怎样来有效地为你的系统选择正确的工具和和合适的策略。",-1)),o("p",null,[t[1]||(t[1]=e("在本文中，我将为你介绍",-1)),r(a,{href:"https://github.com/sukria/Backup-Manager"},{default:n(()=>[...t[0]||(t[0]=[e("backup-manager",-1)])]),_:1}),t[2]||(t[2]=e("，一个简单易用的命令行备份工具，在大多数的Linux发行版的标准软件库中都能见到它的身影。",-1))]),t[21]||(t[21]=s(`<p>是什么让备份管理器在众多的备份工具或备份策略中脱颖而出呢？让我来简单介绍一些它的与众不同的特性吧：</p><ul><li><strong>简单的设计与管理</strong>：配置文件易于读懂和编辑，即便是初学者也很容易上手。</li><li><strong>一劳永逸</strong>：它在配置好后就可以通过cron周期性运作。</li><li><strong>支持多种协议远程备份</strong>：无缝整合多种传输协议、应用和云后端（如，FTP，SCP，SSH-GPG，rsync，AWS S3等等）来传输生成的归档包到一组远程主机。</li><li><strong>支持数据库备份</strong>：包括支持开箱即用备份MySQL/MariaDB和PostgreSQL数据库。</li><li><strong>支持加密</strong>：备份过程中支持基于GPG文件的加密。</li></ul><h3 id="在linux上安装备份管理器" tabindex="-1">在Linux上安装备份管理器 <a class="header-anchor" href="#在linux上安装备份管理器" aria-label="Permalink to “在Linux上安装备份管理器”">​</a></h3><p>备份管理器的安装是快速而无痛的，因为它就包含在大多数Linux发行版的基础软件库中。</p><h4 id="debian-ubuntu及其衍生版" tabindex="-1">Debian，Ubuntu及其衍生版 <a class="header-anchor" href="#debian-ubuntu及其衍生版" aria-label="Permalink to “Debian，Ubuntu及其衍生版”">​</a></h4><pre><code># aptitude install backup-manager 
</code></pre><p>在基于Debian的系统中安装时，会提示你输入要存放备份归档文件的目录。如果选择的目录不存在，那么当你首次运行备份管理器时它会自动创建。</p><p>选择OK并按回车键。</p><p><img src="https://farm6.staticflickr.com/5614/15600105060_8cf4491e3b_z.jpg" alt=""></p><p>在下一步中，会询问你要备份的所有目录（用空格分隔）。建议，但不是严格要求，列出同一父目录中的几个子目录，而不要仅仅输入父目录。</p><p>你可以跳过该步骤并在以后对配置文件中BM_TARBALL_DIRECTORIESb变量进行设置。否则的话，就请尽可能多地添加你想要的目录，然后选择OK：</p><p><img src="https://farm6.staticflickr.com/5610/15761238616_c9651fea1c_z.jpg" alt=""></p><h4 id="fedora或centos-rhel" tabindex="-1">Fedora或CentOS/RHEL <a class="header-anchor" href="#fedora或centos-rhel" aria-label="Permalink to “Fedora或CentOS/RHEL”">​</a></h4><pre><code># yum install backup-manager 
</code></pre>`,14)),o("p",null,[t[4]||(t[4]=e("在CentOS/RHEL上，在运行以上yum命令前，你将需要先启用",-1)),r(a,{href:"http://xmodulo.com/how-to-set-up-epel-repository-on-centos.html"},{default:n(()=>[...t[3]||(t[3]=[e("EPEL仓库",-1)])]),_:1}),t[5]||(t[5]=e("。",-1))]),t[22]||(t[22]=s(`<h3 id="配置备份管理器" tabindex="-1">配置备份管理器 <a class="header-anchor" href="#配置备份管理器" aria-label="Permalink to “配置备份管理器”">​</a></h3><p>备份管理器的主配置文件是/etc/backup-manager.conf。该文件被划分为几个章节，里面定义了备份方法和相关的变量（或“键值”），这些配置让备份管理器成为一个多样化的工具，可以广泛地应付各种状况。</p><p>出于演示目的，我们将考虑以下环境：</p><ul><li>每周对/etc，/home以及/var/log目录进行一次完整备份（我们将在下面通过cron设置备份的频率）。</li><li>通过SSH传输.tar.gz备份归档文件到两台不同主机dev1和dev3上指定的目标目录。</li><li>通过SSH备份本地MySQL数据库到相同目标主机。</li></ul><p>用你喜爱的文本编辑器打开/etc/backup-manager.conf文件，并编辑以下变量。如果你愿意，你大可不必理会那些#开头的行。在本文中，它只是用作说明的注释：</p><pre><code># Specify the backup method(s) that will be used.
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
</code></pre><h3 id="运行备份管理器" tabindex="-1">运行备份管理器 <a class="header-anchor" href="#运行备份管理器" aria-label="Permalink to “运行备份管理器”">​</a></h3><p>要手动运行备份管理器，请输入以下命令。你也可以选择添加‘-v’标识以便一步一步详细检查运行过程。</p><pre><code># backup-manager 
</code></pre><p>BM_TARBALL_DIRECTORIES列出的目录将作为tarball备份到BM_REPOSITORY_ROOT目录，然后通过SSH传输到BM_UPLOAD_SSH_DESTINATION指定的主机dev1和dev3。</p><p><img src="https://farm8.staticflickr.com/7497/15761238646_945620d8b7_z.jpg" alt=""></p><p>正如你在上面图片中看到的那样，备份管理器在运行的时候创建了一个名为/root/.back-manager_my.cnf的文件，MySQL密码通过BM_MYSQL_ADMINPASS指定。那样，mysqldump可以验证到MySQL服务器，而不必在命令行以明文格式接受密码，那样会有安全风险。</p><h3 id="通过cron运行备份管理器" tabindex="-1">通过cron运行备份管理器 <a class="header-anchor" href="#通过cron运行备份管理器" aria-label="Permalink to “通过cron运行备份管理器”">​</a></h3><p>一旦决定哪一天是进行每周备份的最佳日子（最佳时间），你可以让cron来为你运行备份管理器。</p><p>打开root的crontab文件（注意，你必须以root登录）：</p><pre><code># crontab -e 
</code></pre><p>假定你想要在星期天的上午5:15分运行备份管理器，那么就添加下面这行。</p><pre><code>15 05 * * 0 /usr/sbin/backup-manager &gt; /dev/null 2&gt;&amp;1
</code></pre><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to “小结”">​</a></h3><p>在本文中，我已经展示了备份管理器这个备份工具是怎样的简单而强大，并且易于使用。在你的备份策略中，你可能还有其它几个选项需要考虑，请参阅手册页或用户手册，里面也包含了几个部署实例和建议。</p><p>希望此文对你有所帮助，请在下面随意提问和评论。</p><hr>`,22)),o("p",null,[t[7]||(t[7]=e("via: ",-1)),r(a,{href:"http://xmodulo.com/linux-backup-manager.html"},{default:n(()=>[...t[6]||(t[6]=[e("http://xmodulo.com/linux-backup-manager.html",-1)])]),_:1})]),o("p",null,[t[11]||(t[11]=e("作者：",-1)),r(a,{href:"http://xmodulo.com/author/gabriel"},{default:n(()=>[...t[8]||(t[8]=[e("Gabriel Cánepa",-1)])]),_:1}),t[12]||(t[12]=e(" 译者：",-1)),r(a,{href:"https://github.com/GOLinux"},{default:n(()=>[...t[9]||(t[9]=[e("GOLinux",-1)])]),_:1}),t[13]||(t[13]=e(" 校对：",-1)),r(a,{href:"https://github.com/wxy"},{default:n(()=>[...t[10]||(t[10]=[e("wxy",-1)])]),_:1})]),o("p",null,[t[16]||(t[16]=e("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...t[14]||(t[14]=[e("LCTT",-1)])]),_:1}),t[17]||(t[17]=e(" 原创翻译，",-1)),r(a,{href:"http://linux.cn/"},{default:n(()=>[...t[15]||(t[15]=[e("Linux中国",-1)])]),_:1}),t[18]||(t[18]=e(" 荣誉推出",-1))])])}const f=p(d,[["render",m]]);export{c as __pageData,f as default};
