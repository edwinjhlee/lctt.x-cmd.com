import{_ as r,a0 as u,w as i,s,ao as n,I as o,x as t,a1 as p,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"如何在Ubuntu / CentOS 6.x上安装Bugzilla 4.4 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Ubuntu / CentOS 6.x上安装Bugzilla 4.4 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Ubuntu / CentOS 6.x上安装Bugzilla 4.4 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Ubuntu / CentOS 6.x上安装Bugzilla 4.4 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141229 How to Install Bugzilla 4.4 on Ubuntu or CentOS 6.x","title":"如何在Ubuntu / CentOS 6.x上安装Bugzilla 4.4","tag":"201501","desc":""},"relativePath":"201501/20141229 How to Install Bugzilla 4.4 on Ubuntu or CentOS 6.x.md","filePath":"[post].md"}'),d={name:"201501/20141229 How to Install Bugzilla 4.4 on Ubuntu or CentOS 6.x.md"};function c(g,e,h,b,m,z){const l=u("Link");return i(),s("div",null,[e[15]||(e[15]=n(`<h1 id="如何在ubuntu-centos-6-x上安装bugzilla-4-4" tabindex="-1">如何在Ubuntu / CentOS 6.x上安装Bugzilla 4.4 <a class="header-anchor" href="#如何在ubuntu-centos-6-x上安装bugzilla-4-4" aria-label="Permalink to “如何在Ubuntu / CentOS 6.x上安装Bugzilla 4.4”">​</a></h1><p>这里，我们将展示如何在一台Ubuntu 14.04或CentOS 6.5/7上安装Bugzilla。Bugzilla是一款基于web，用来记录跟踪缺陷数据库的bug跟踪软件，它同时是一款免费及开源软件(FOSS)，它的bug跟踪系统允许个人和开发团体有效地记录下他们产品的一些突出问题。尽管是&quot;免费&quot;的，Bugzilla依然有很多其它同类产品所没有的“珍贵”特性。因此，Bugzilla很快就变成了全球范围内数以千计的组织最喜欢的bug管理工具。</p><p>Bugzilla对于不同使用场景的适应能力非常强。如今它们应用在各个不同的IT领域，如系统管理中的部署管理、芯片设计及部署的问题跟踪(制造前期和后期)，还有为那些诸如Redhat，NASA，Linux-Mandrake和VA Systems这些著名公司提供软硬件bug跟踪。</p><h3 id="_1-安装依赖程序" tabindex="-1">1. 安装依赖程序 <a class="header-anchor" href="#_1-安装依赖程序" aria-label="Permalink to “1. 安装依赖程序”">​</a></h3><p>安装Bugzilla相当<strong>简单</strong>。这篇文章特别针对Ubuntu 14.04和CentOS 6.5两个版本(不过也适用于更老的版本)。</p><p>为了获取并能在Ubuntu或CentOS系统中运行Bugzilla，我们要安装Apache网络服务器(启用SSL)，MySQL数据库服务器和一些需要来安装并配置Bugzilla的工具。</p><p>要在你的服务器上安装使用Bugzilla，你需要安装好以下程序：</p><ul><li>Perl(5.8.1 或以上)</li><li>MySQL</li><li>Apache2</li><li>Bugzilla</li><li>Perl模块</li><li>使用apache的Bugzilla</li></ul><p>正如我们所提到的本文会阐述Ubuntu 14.04和CentOS 6.5/7两种发行版的安装过程，为此我们会分成两部分来表示。</p><p>以下就是在你的Ubuntu 14.04 LTS和CentOS 7机器安装Bugzilla的步骤：</p><p><strong>准备所需的依赖包：</strong></p><p>你需要运行以下命令来安装些必要的包：</p><p><strong>Ubuntu版本:</strong></p><pre><code>$ sudo apt-get install apache2 mysql-server libapache2-mod-perl2 libapache2-mod-perl2-dev libapache2-mod-perl2-doc perl postfix make gcc g++
</code></pre><p><strong>CentOS版本:</strong></p><pre><code>$ sudo yum install httpd mod_ssl mysql-server mysql php-mysql gcc perl* mod_perl-devel
</code></pre><p><strong>注意：请在shell或者终端下运行所有的命令并且确保你用root用户（sudo）操作机器。</strong></p><h3 id="_2-启动apache服务" tabindex="-1">2. 启动Apache服务 <a class="header-anchor" href="#_2-启动apache服务" aria-label="Permalink to “2. 启动Apache服务”">​</a></h3><p>你已经按照以上步骤安装好了apache服务，那么我们现在需要配置apache服务并运行它。我们需要用sodo或root来敲命令去完成它，我们先切换到root连接。</p><pre><code>$ sudo -s
</code></pre><p>我们需要在防火墙中打开80端口并保存改动。</p><pre><code># iptables -I INPUT -p tcp --dport 80 -j ACCEPT
# service iptables save
</code></pre><p>现在，我们需要启动服务:</p><p>CentOS版本:</p><pre><code># service httpd start
</code></pre><p>我们来确保Apache会在每次你重启机器的时候一并启动起来：</p><pre><code># /sbin/chkconfig httpd on
</code></pre><p>Ubuntu版本:</p><pre><code># service apache2 start
</code></pre><p>现在，由于我们已经启动了我们apache的http服务，我们就能在默认的127.0.0.1地址下打开apache服务了。</p><h3 id="_3-配置mysql服务器" tabindex="-1">3. 配置MySQL服务器 <a class="header-anchor" href="#_3-配置mysql服务器" aria-label="Permalink to “3. 配置MySQL服务器”">​</a></h3><p>现在我们需要启动我们的MySQL服务：</p><p>CentOS版本:</p><pre><code># chkconfig mysqld on
# service start mysqld
</code></pre><p>Ubuntu版本:</p><pre><code># service mysql-server start
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/mysql.png" alt="mysql"></p><p>用root用户登录连接MySQL并给Bugzilla创建一个数据库，把你的mysql密码更改成你想要的，稍后配置Bugzilla的时候会用到它。</p><p>CentOS 6.5和Ubuntu 14.04 Trusty两个版本：</p><pre><code># mysql -u root -p

# password: (You&#39;ll need to enter your password)

# mysql &gt; create database bugs;

# mysql &gt; grant all on bugs.* to root@localhost identified by &quot;mypassword&quot;;

#mysql &gt; quit
</code></pre><p><strong>注意：请记住数据库名和mysql的密码，我们稍后会用到它们。</strong></p><h3 id="_4-安装并配置bugzilla" tabindex="-1">4. 安装并配置Bugzilla <a class="header-anchor" href="#_4-安装并配置bugzilla" aria-label="Permalink to “4. 安装并配置Bugzilla”">​</a></h3><p>现在，我们所有需要的包已经设置完毕并运行起来了，我们就要配置我们的Bugzilla。</p><p>那么，首先我们要下载最新版的Bugzilla包，这里我下载的是4.5.2版本。</p><p>使用wget工具在shell或终端上下载：</p><pre><code>wget http://ftp.mozilla.org/pub/mozilla.org/webtools/bugzilla-4.5.2.tar.gz
</code></pre>`,46)),o("p",null,[e[1]||(e[1]=t("你也可以从官方网站进行下载。",-1)),p(l,{href:"http://www.bugzilla.org/download/"},{default:a(()=>[...e[0]||(e[0]=[t("http://www.bugzilla.org/download/",-1)])]),_:1})]),e[16]||(e[16]=n(`<p><strong>从下载下来的bugzilla压缩包中提取文件并重命名：</strong></p><pre><code># tar zxvf bugzilla-4.5.2.tar.gz -C /var/www/html/

# cd /var/www/html/

# mv -v bugzilla-4.5.2 bugzilla
</code></pre><p><strong>注意</strong>：这里,<strong>/var/www/html/bugzilla/</strong>就是<strong>Bugzilla主目录</strong>.</p><p>现在，我们来配置buzilla：</p><pre><code># cd /var/www/html/bugzilla/
</code></pre><h1 id="checksetup-pl-check-modules" tabindex="-1">./checksetup.pl --check-modules <a class="header-anchor" href="#checksetup-pl-check-modules" aria-label="Permalink to “./checksetup.pl --check-modules”">​</a></h1><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/bugzilla2-300x198.png" alt="bugzilla-check-module"></p><p>检查完成之后，我们会发现缺少了一些组件，我们需要安装它们，用以下命令即可实现：</p><pre><code># cd /var/www/html/bugzilla
# perl install-module.pl --all
</code></pre><p>这一步会花掉一点时间去下载安装所有依赖程序，然后再次运行<strong>checksetup.pl --check-modules</strong>命令来验证有没有漏装什么。</p><p>现在我们需要运行以下这条命令，它会在/var/www/html/bugzilla路径下自动生成一个名为localconfig的文件。</p><pre><code># ./checksetup.pl
</code></pre><p>确认一下你刚才在localconfig文件中所输入的数据库名、用户和密码是否正确。</p><pre><code># nano ./localconfig

# checksetup.pl
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/bugzilla-success.png" alt="bugzilla-success"></p><p>如果一切正常，checksetup.pl现在应该就成功地配置Bugzilla了。</p><p>现在我们需要添加Bugzilla至我们的Apache配置文件中。那么，我们需要用文本编辑器打开 /etc/httpd/conf/httpd.conf 文件(CentOS版本)或者 /etc/apache2/apache2.conf 文件(Ubuntu版本)：</p><p>CentOS版本:</p><pre><code># nano /etc/httpd/conf/httpd.conf
</code></pre><p>Ubuntu版本:</p><pre><code># nano etc/apache2/apache2.conf
</code></pre><p>现在，我们需要配置Apache服务器，我们要把以下配置添加到配置文件里：</p><pre><code>&lt;VirtualHost *:80&gt;
     DocumentRoot /var/www/html/bugzilla/
&lt;/VirtualHost&gt;

&lt;Directory /var/www/html/bugzilla&gt;
     AddHandler cgi-script .cgi
     Options +Indexes +ExecCGI
     DirectoryIndex index.cgi
     AllowOverride Limit FileInfo Indexes
&lt;/Directory&gt;
</code></pre><p>接着，我们需要编辑 .htaccess 文件并用“#”注释掉顶部“Options -Indexes”这一行。</p><p>让我们重启我们的apache服务并测试下我们的安装情况。</p><p>CentOS版本:</p><pre><code># service httpd restart
</code></pre><p>Ubuntu版本:</p><pre><code># service apache2 restart
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/bugzilla_apache.png" alt="bugzilla-install-success"></p><p>这样，我们的Bugzilla就准备好在我们的Ubuntu 14.04 LTS和CentOS 6.5上获取bug报告了，你就可以通过本地回环地址或你网页浏览器上的IP地址来浏览bugzilla了。</p><hr>`,32)),o("p",null,[e[3]||(e[3]=t("via: ",-1)),p(l,{href:"http://linoxide.com/tools/install-bugzilla-ubuntu-centos/"},{default:a(()=>[...e[2]||(e[2]=[t("http://linoxide.com/tools/install-bugzilla-ubuntu-centos/",-1)])]),_:1})]),o("p",null,[e[7]||(e[7]=t("作者：",-1)),p(l,{href:"http://linoxide.com/author/arunp/"},{default:a(()=>[...e[4]||(e[4]=[t("Arun Pyasi",-1)])]),_:1}),e[8]||(e[8]=t(" 译者：",-1)),p(l,{href:"https://github.com/ZTinoZ"},{default:a(()=>[...e[5]||(e[5]=[t("ZTinoZ",-1)])]),_:1}),e[9]||(e[9]=t(" 校对：",-1)),p(l,{href:"https://github.com/wxy"},{default:a(()=>[...e[6]||(e[6]=[t("wxy",-1)])]),_:1})]),o("p",null,[e[12]||(e[12]=t("本文由 ",-1)),p(l,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[10]||(e[10]=[t("LCTT",-1)])]),_:1}),e[13]||(e[13]=t(" 原创翻译，",-1)),p(l,{href:"http://linux.cn/"},{default:a(()=>[...e[11]||(e[11]=[t("Linux中国",-1)])]),_:1}),e[14]||(e[14]=t(" 荣誉推出",-1))])])}const S=r(d,[["render",c]]);export{C as __pageData,S as default};
