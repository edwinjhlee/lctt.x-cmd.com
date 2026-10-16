import{_ as r,a0 as u,w as i,s,ao as n,I as o,x as t,a1 as p,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"如何在Ubuntu / CentOS 6.x上安裝Bugzilla 4.4 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Ubuntu / CentOS 6.x上安裝Bugzilla 4.4 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Ubuntu / CentOS 6.x上安裝Bugzilla 4.4 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Ubuntu / CentOS 6.x上安裝Bugzilla 4.4 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141229 How to Install Bugzilla 4.4 on Ubuntu or CentOS 6.x","title":"如何在Ubuntu / CentOS 6.x上安裝Bugzilla 4.4","tag":"201501","desc":""},"relativePath":"201501/20141229 How to Install Bugzilla 4.4 on Ubuntu or CentOS 6.x.md","filePath":"[post].md"}'),d={name:"201501/20141229 How to Install Bugzilla 4.4 on Ubuntu or CentOS 6.x.md"};function c(g,e,h,b,m,z){const l=u("Link");return i(),s("div",null,[e[15]||(e[15]=n(`<h1 id="如何在ubuntu-centos-6-x上安裝bugzilla-4-4" tabindex="-1">如何在Ubuntu / CentOS 6.x上安裝Bugzilla 4.4 <a class="header-anchor" href="#如何在ubuntu-centos-6-x上安裝bugzilla-4-4" aria-label="Permalink to “如何在Ubuntu / CentOS 6.x上安裝Bugzilla 4.4”">​</a></h1><p>這裏，我們將展示如何在一台Ubuntu 14.04或CentOS 6.5/7上安裝Bugzilla。Bugzilla是一款基於web，用來記錄跟蹤缺陷資料庫的bug跟蹤軟件，它同時是一款免費及開源軟件(FOSS)，它的bug跟蹤系統允許個人和開發團體有效地記錄下他們產品的一些突出問題。儘管是&quot;免費&quot;的，Bugzilla依然有很多其它同類產品所沒有的“珍貴”特性。因此，Bugzilla很快就變成了全球範圍內數以千計的組織最喜歡的bug管理工具。</p><p>Bugzilla對於不同使用場景的適應能力非常強。如今它們應用在各個不同的IT領域，如系統管理中的部署管理、芯片設計及部署的問題跟蹤(製造前期和後期)，還有為那些諸如Redhat，NASA，Linux-Mandrake和VA Systems這些著名公司提供軟硬件bug跟蹤。</p><h3 id="_1-安裝依賴程序" tabindex="-1">1. 安裝依賴程序 <a class="header-anchor" href="#_1-安裝依賴程序" aria-label="Permalink to “1. 安裝依賴程序”">​</a></h3><p>安裝Bugzilla相當<strong>簡單</strong>。這篇文章特別針對Ubuntu 14.04和CentOS 6.5兩個版本(不過也適用於更老的版本)。</p><p>為了獲取並能在Ubuntu或CentOS系統中運行Bugzilla，我們要安裝Apache網絡服務器(啓用SSL)，MySQL資料庫服務器和一些需要來安裝並配置Bugzilla的工具。</p><p>要在你的服務器上安裝使用Bugzilla，你需要安裝好以下程序：</p><ul><li>Perl(5.8.1 或以上)</li><li>MySQL</li><li>Apache2</li><li>Bugzilla</li><li>Perl模組</li><li>使用apache的Bugzilla</li></ul><p>正如我們所提到的本文會闡述Ubuntu 14.04和CentOS 6.5/7兩種發行版的安裝過程，為此我們會分成兩部分來表示。</p><p>以下就是在你的Ubuntu 14.04 LTS和CentOS 7機器安裝Bugzilla的步驟：</p><p><strong>準備所需的依賴包：</strong></p><p>你需要運行以下命令來安裝些必要的包：</p><p><strong>Ubuntu版本:</strong></p><pre><code>$ sudo apt-get install apache2 mysql-server libapache2-mod-perl2 libapache2-mod-perl2-dev libapache2-mod-perl2-doc perl postfix make gcc g++
</code></pre><p><strong>CentOS版本:</strong></p><pre><code>$ sudo yum install httpd mod_ssl mysql-server mysql php-mysql gcc perl* mod_perl-devel
</code></pre><p><strong>注意：請在shell或者終端下運行所有的命令並且確保你用root用户（sudo）操作機器。</strong></p><h3 id="_2-啓動apache服務" tabindex="-1">2. 啓動Apache服務 <a class="header-anchor" href="#_2-啓動apache服務" aria-label="Permalink to “2. 啓動Apache服務”">​</a></h3><p>你已經按照以上步驟安裝好了apache服務，那麼我們現在需要配置apache服務並運行它。我們需要用sodo或root來敲命令去完成它，我們先切換到root連接。</p><pre><code>$ sudo -s
</code></pre><p>我們需要在防火牆中打開80端口並保存改動。</p><pre><code># iptables -I INPUT -p tcp --dport 80 -j ACCEPT
# service iptables save
</code></pre><p>現在，我們需要啓動服務:</p><p>CentOS版本:</p><pre><code># service httpd start
</code></pre><p>我們來確保Apache會在每次你重啓機器的時候一併啓動起來：</p><pre><code># /sbin/chkconfig httpd on
</code></pre><p>Ubuntu版本:</p><pre><code># service apache2 start
</code></pre><p>現在，由於我們已經啓動了我們apache的http服務，我們就能在默認的127.0.0.1地址下打開apache服務了。</p><h3 id="_3-配置mysql服務器" tabindex="-1">3. 配置MySQL服務器 <a class="header-anchor" href="#_3-配置mysql服務器" aria-label="Permalink to “3. 配置MySQL服務器”">​</a></h3><p>現在我們需要啓動我們的MySQL服務：</p><p>CentOS版本:</p><pre><code># chkconfig mysqld on
# service start mysqld
</code></pre><p>Ubuntu版本:</p><pre><code># service mysql-server start
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/mysql.png" alt="mysql"></p><p>用root用户登錄連接MySQL並給Bugzilla創建一個數據庫，把你的mysql密碼更改成你想要的，稍後配置Bugzilla的時候會用到它。</p><p>CentOS 6.5和Ubuntu 14.04 Trusty兩個版本：</p><pre><code># mysql -u root -p

# password: (You&#39;ll need to enter your password)

# mysql &gt; create database bugs;

# mysql &gt; grant all on bugs.* to root@localhost identified by &quot;mypassword&quot;;

#mysql &gt; quit
</code></pre><p><strong>注意：請記住資料庫名和mysql的密碼，我們稍後會用到它們。</strong></p><h3 id="_4-安裝並配置bugzilla" tabindex="-1">4. 安裝並配置Bugzilla <a class="header-anchor" href="#_4-安裝並配置bugzilla" aria-label="Permalink to “4. 安裝並配置Bugzilla”">​</a></h3><p>現在，我們所有需要的包已經設置完畢並運行起來了，我們就要配置我們的Bugzilla。</p><p>那麼，首先我們要下載最新版的Bugzilla包，這裏我下載的是4.5.2版本。</p><p>使用wget工具在shell或終端上下載：</p><pre><code>wget http://ftp.mozilla.org/pub/mozilla.org/webtools/bugzilla-4.5.2.tar.gz
</code></pre>`,46)),o("p",null,[e[1]||(e[1]=t("你也可以從官方網站進行下載。",-1)),p(l,{href:"http://www.bugzilla.org/download/"},{default:a(()=>[...e[0]||(e[0]=[t("http://www.bugzilla.org/download/",-1)])]),_:1})]),e[16]||(e[16]=n(`<p><strong>從下載下來的bugzilla壓縮包中提取文件並重命名：</strong></p><pre><code># tar zxvf bugzilla-4.5.2.tar.gz -C /var/www/html/

# cd /var/www/html/

# mv -v bugzilla-4.5.2 bugzilla
</code></pre><p><strong>注意</strong>：這裏,<strong>/var/www/html/bugzilla/</strong>就是<strong>Bugzilla主目錄</strong>.</p><p>現在，我們來配置buzilla：</p><pre><code># cd /var/www/html/bugzilla/
</code></pre><h1 id="checksetup-pl-check-modules" tabindex="-1">./checksetup.pl --check-modules <a class="header-anchor" href="#checksetup-pl-check-modules" aria-label="Permalink to “./checksetup.pl --check-modules”">​</a></h1><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/bugzilla2-300x198.png" alt="bugzilla-check-module"></p><p>檢查完成之後，我們會發現缺少了一些組件，我們需要安裝它們，用以下命令即可實現：</p><pre><code># cd /var/www/html/bugzilla
# perl install-module.pl --all
</code></pre><p>這一步會花掉一點時間去下載安裝所有依賴程序，然後再次運行<strong>checksetup.pl --check-modules</strong>命令來驗證有沒有漏裝什麼。</p><p>現在我們需要運行以下這條命令，它會在/var/www/html/bugzilla路徑下自動生成一個名為localconfig的文件。</p><pre><code># ./checksetup.pl
</code></pre><p>確認一下你剛才在localconfig文件中所輸入的資料庫名、用户和密碼是否正確。</p><pre><code># nano ./localconfig

# checksetup.pl
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/bugzilla-success.png" alt="bugzilla-success"></p><p>如果一切正常，checksetup.pl現在應該就成功地配置Bugzilla了。</p><p>現在我們需要添加Bugzilla至我們的Apache配置文件中。那麼，我們需要用文本編輯器打開 /etc/httpd/conf/httpd.conf 文件(CentOS版本)或者 /etc/apache2/apache2.conf 文件(Ubuntu版本)：</p><p>CentOS版本:</p><pre><code># nano /etc/httpd/conf/httpd.conf
</code></pre><p>Ubuntu版本:</p><pre><code># nano etc/apache2/apache2.conf
</code></pre><p>現在，我們需要配置Apache服務器，我們要把以下配置添加到配置文件裏：</p><pre><code>&lt;VirtualHost *:80&gt;
     DocumentRoot /var/www/html/bugzilla/
&lt;/VirtualHost&gt;

&lt;Directory /var/www/html/bugzilla&gt;
     AddHandler cgi-script .cgi
     Options +Indexes +ExecCGI
     DirectoryIndex index.cgi
     AllowOverride Limit FileInfo Indexes
&lt;/Directory&gt;
</code></pre><p>接着，我們需要編輯 .htaccess 文件並用“#”註釋掉頂部“Options -Indexes”這一行。</p><p>讓我們重啓我們的apache服務並測試下我們的安裝情況。</p><p>CentOS版本:</p><pre><code># service httpd restart
</code></pre><p>Ubuntu版本:</p><pre><code># service apache2 restart
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/bugzilla_apache.png" alt="bugzilla-install-success"></p><p>這樣，我們的Bugzilla就準備好在我們的Ubuntu 14.04 LTS和CentOS 6.5上獲取bug報告了，你就可以通過本地迴環地址或你網頁瀏覽器上的IP地址來瀏覽bugzilla了。</p><hr>`,32)),o("p",null,[e[3]||(e[3]=t("via: ",-1)),p(l,{href:"http://linoxide.com/tools/install-bugzilla-ubuntu-centos/"},{default:a(()=>[...e[2]||(e[2]=[t("http://linoxide.com/tools/install-bugzilla-ubuntu-centos/",-1)])]),_:1})]),o("p",null,[e[7]||(e[7]=t("作者：",-1)),p(l,{href:"http://linoxide.com/author/arunp/"},{default:a(()=>[...e[4]||(e[4]=[t("Arun Pyasi",-1)])]),_:1}),e[8]||(e[8]=t(" 譯者：",-1)),p(l,{href:"https://github.com/ZTinoZ"},{default:a(()=>[...e[5]||(e[5]=[t("ZTinoZ",-1)])]),_:1}),e[9]||(e[9]=t(" 校對：",-1)),p(l,{href:"https://github.com/wxy"},{default:a(()=>[...e[6]||(e[6]=[t("wxy",-1)])]),_:1})]),o("p",null,[e[12]||(e[12]=t("本文由 ",-1)),p(l,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[10]||(e[10]=[t("LCTT",-1)])]),_:1}),e[13]||(e[13]=t(" 原創翻譯，",-1)),p(l,{href:"http://linux.cn/"},{default:a(()=>[...e[11]||(e[11]=[t("Linux中國",-1)])]),_:1}),e[14]||(e[14]=t(" 榮譽推出",-1))])])}const S=r(d,[["render",c]]);export{C as __pageData,S as default};
