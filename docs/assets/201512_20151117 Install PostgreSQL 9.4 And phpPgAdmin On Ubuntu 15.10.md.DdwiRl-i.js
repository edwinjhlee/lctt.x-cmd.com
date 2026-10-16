import{_ as a,a0 as d,w as l,s as g,ao as n,I as t,a1 as r,A as s,x as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const A=JSON.parse('{"title":"在 Ubuntu 上安装世界上最先进的开源数据库 PostgreSQL 9.4 和 phpPgAdmin | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 上安装世界上最先进的开源数据库 PostgreSQL 9.4 和 phpPgAdmin | LCTT (201512) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 上安装世界上最先进的开源数据库 PostgreSQL 9.4 和 phpPgAdmin | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 上安装世界上最先进的开源数据库 PostgreSQL 9.4 和 phpPgAdmin | LCTT (201512) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201512/20151117 Install PostgreSQL 9.4 And phpPgAdmin On Ubuntu 15.10","title":"在 Ubuntu 上安装世界上最先进的开源数据库 PostgreSQL 9.4 和 phpPgAdmin","tag":"201512","desc":""},"relativePath":"201512/20151117 Install PostgreSQL 9.4 And phpPgAdmin On Ubuntu 15.10.md","filePath":"[post].md"}'),i={name:"201512/20151117 Install PostgreSQL 9.4 And phpPgAdmin On Ubuntu 15.10.md"};function u(c,p,h,m,P,b){const o=d("Link");return l(),g("div",null,[p[22]||(p[22]=n('<h1 id="在-ubuntu-上安装世界上最先进的开源数据库-postgresql-9-4-和-phppgadmin" tabindex="-1">在 Ubuntu 上安装世界上最先进的开源数据库 PostgreSQL 9.4 和 phpPgAdmin <a class="header-anchor" href="#在-ubuntu-上安装世界上最先进的开源数据库-postgresql-9-4-和-phppgadmin" aria-label="Permalink to “在 Ubuntu 上安装世界上最先进的开源数据库 PostgreSQL 9.4 和 phpPgAdmin”">​</a></h1><p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2014/05/postgresql.png" alt=""></p><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to “简介”">​</a></h3>',3)),t("p",null,[r(o,{href:"http://www.postgresql.org/"},{default:s(()=>[...p[0]||(p[0]=[e("PostgreSQL",-1)])]),_:1}),p[1]||(p[1]=e(" 是一款强大的，开源的，对象关系型数据库系统。它支持所有的主流操作系统，包括 Linux、Unix（AIX、BSD、HP-UX，SGI IRIX、Mac OS、Solaris、Tru64） 以及 Windows 操作系统。",-1))]),p[23]||(p[23]=n(`<p>下面是 <strong>Ubuntu</strong> 发起者 <strong>Mark Shuttleworth</strong> 对 PostgreSQL 的一段评价。</p><blockquote><p>PostgreSQL 是一款极赞的数据库系统。刚开始我们在 Launchpad 上使用它的时候，并不确定它能否胜任工作。但我是错了。它很强壮、快速，在各个方面都很专业。</p><p>— Mark Shuttleworth.</p></blockquote><p>在这篇简短的指南中，让我们来看看如何在 Ubuntu 15.10 服务器中安装 PostgreSQL 9.4。</p><h3 id="安装-postgresql" tabindex="-1">安装 PostgreSQL <a class="header-anchor" href="#安装-postgresql" aria-label="Permalink to “安装 PostgreSQL”">​</a></h3><p>默认仓库中就有可用的 PostgreSQL。在终端中输入下面的命令安装它。</p><pre><code>sudo apt-get install postgresql postgresql-contrib
</code></pre><p>如果你需要其它的版本，按照下面那样先添加 PostgreSQL 仓库然后再安装。</p><p><strong>PostgreSQL apt 仓库</strong> 支持 amd64 和 i386 架构的 Ubuntu 长期支持版（10.04、12.04 和 14.04），以及非长期支持版（14.04）。对于其它非长期支持版，该软件包虽然没有完全支持，但使用和 LTS 版本近似的也能正常工作。</p><h4 id="ubuntu-14-10-系统" tabindex="-1">Ubuntu 14.10 系统： <a class="header-anchor" href="#ubuntu-14-10-系统" aria-label="Permalink to “Ubuntu 14.10 系统：”">​</a></h4><p>新建文件<strong>/etc/apt/sources.list.d/pgdg.list</strong>；</p><pre><code>sudo vi /etc/apt/sources.list.d/pgdg.list
</code></pre><p>用下面一行添加仓库：</p><pre><code>deb http://apt.postgresql.org/pub/repos/apt/ utopic-pgdg main
</code></pre><p><strong>注意</strong>： 上面的库只能用于 Ubuntu 14.10。还没有升级到 Ubuntu 15.04 和 15.10。</p><p>对于 <strong>Ubuntu 14.04</strong>，添加下面一行：</p><pre><code>deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main
</code></pre><p>对于 <strong>Ubuntu 12.04</strong>，添加下面一行：</p><pre><code>deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main
</code></pre><p>导入库签名密钥：</p><pre><code>wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc

sudo apt-key add -
</code></pre><p>更新软件包列表：</p><pre><code>sudo apt-get update
</code></pre><p>然后安装需要的版本。</p><pre><code>sudo apt-get install postgresql-9.4
</code></pre><h3 id="访问-postgresql-命令窗口" tabindex="-1">访问 PostgreSQL 命令窗口 <a class="header-anchor" href="#访问-postgresql-命令窗口" aria-label="Permalink to “访问 PostgreSQL 命令窗口”">​</a></h3><p>默认的数据库名称和数据库用户名称都是 “<strong>postgres</strong>”。切换到 postgres 用户进行 postgresql 相关的操作：</p><pre><code>sudo -u postgres psql postgres
</code></pre><h4 id="示例输出" tabindex="-1">示例输出： <a class="header-anchor" href="#示例输出" aria-label="Permalink to “示例输出：”">​</a></h4><pre><code>psql (9.4.5)
Type &quot;help&quot; for help.
postgres=#
</code></pre><p>要退出 postgresql 窗口，在 <strong>psql</strong> 窗口输入 <strong>\\q</strong> 退出到终端。</p><h3 id="设置-postgres-用户密码" tabindex="-1">设置 “postgres” 用户密码 <a class="header-anchor" href="#设置-postgres-用户密码" aria-label="Permalink to “设置 “postgres” 用户密码”">​</a></h3><p>登录到 postgresql 窗口，</p><pre><code>sudo -u postgres psql postgres
</code></pre><p>用下面的命令为用户 postgres 设置密码：</p><pre><code>postgres=# \\password postgres 
Enter new password: 
Enter it again: 
postgres=# \\q
</code></pre><p>要安装 PostgreSQL Adminpack 扩展，在 postgresql 窗口输入下面的命令：</p><pre><code>sudo -u postgres psql postgres
</code></pre><hr><pre><code>postgres=# CREATE EXTENSION adminpack;
CREATE EXTENSION
</code></pre><p>在 <strong>psql</strong> 窗口输入 <strong>\\q</strong> 从 postgresql 窗口退回到终端。</p><h3 id="创建新用户和数据库" tabindex="-1">创建新用户和数据库 <a class="header-anchor" href="#创建新用户和数据库" aria-label="Permalink to “创建新用户和数据库”">​</a></h3><p>例如，让我们创建一个新的用户，名为 “<strong>senthil</strong>”，密码是 “<strong>ubuntu</strong>”，以及名为 “<strong>mydb</strong>” 的数据库。</p><pre><code>sudo -u postgres createuser -D -A -P senthil
</code></pre><hr><pre><code>sudo -u postgres createdb -O senthil mydb
</code></pre><h3 id="删除用户和数据库" tabindex="-1">删除用户和数据库 <a class="header-anchor" href="#删除用户和数据库" aria-label="Permalink to “删除用户和数据库”">​</a></h3><p>要删除数据库，首先切换到 postgres 用户：</p><pre><code>sudo -u postgres psql postgres
</code></pre><p>输入命令：</p><pre><code>$ drop database &lt;database-name&gt;
</code></pre><p>要删除一个用户，输入下面的命令：</p><pre><code>$ drop user &lt;user-name&gt;
</code></pre><h3 id="配置-postgresql-md5-验证" tabindex="-1">配置 PostgreSQL-MD5 验证 <a class="header-anchor" href="#配置-postgresql-md5-验证" aria-label="Permalink to “配置 PostgreSQL-MD5 验证”">​</a></h3><p><strong>MD5 验证</strong> 要求用户提供一个 MD5 加密的密码用于认证。首先编辑 <strong>/etc/postgresql/9.4/main/pg_hba.conf</strong> 文件：</p><pre><code>sudo vi /etc/postgresql/9.4/main/pg_hba.conf
</code></pre><p>按照下面所示添加或修改行</p><pre><code>[...]
# TYPE  DATABASE        USER            ADDRESS                 METHOD
# &quot;local&quot; is for Unix domain socket connections only
local   all             all                                     md5
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
host    all             all             192.168.1.0/24          md5
# IPv6 local connections:
host    all             all             ::1/128                 md5
[...]
</code></pre><p>其中， 192.168.1.0/24 是我的本地网络 IP 地址。用你自己的地址替换。</p><p>重启 postgresql 服务以使更改生效：</p><pre><code>sudo systemctl restart postgresql
</code></pre><p>或者，</p><pre><code>sudo service postgresql restart
</code></pre><h3 id="配置-postgresql-tcp-ip-配置" tabindex="-1">配置 PostgreSQL TCP/IP 配置 <a class="header-anchor" href="#配置-postgresql-tcp-ip-配置" aria-label="Permalink to “配置 PostgreSQL TCP/IP 配置”">​</a></h3><p>默认情况下，没有启用 TCP/IP 连接，因此其它计算机的用户不能访问 postgresql。为了允许其它计算机的用户访问，编辑文件 <strong>/etc/postgresql/9.4/main/postgresql.conf:</strong></p><pre><code>sudo vi /etc/postgresql/9.4/main/postgresql.conf
</code></pre><p>找到下面一行：</p><pre><code>[...]
#listen_addresses = &#39;localhost&#39;
[...]
#port = 5432
[...]
</code></pre><p>取消该行的注释，然后设置你 postgresql 服务器的 IP 地址，或者设置为 ‘*’ 监听所有用户。你应该谨慎设置所有远程用户都可以访问 PostgreSQL。</p><pre><code>[...]
listen_addresses = &#39;*&#39;
[...]
port = 5432
[...]
</code></pre><p>重启 postgresql 服务保存更改：</p><pre><code>sudo systemctl restart postgresql
</code></pre><p>或者，</p><pre><code>sudo service postgresql restart
</code></pre><h3 id="用-phppgadmin-管理-postgresql" tabindex="-1">用 phpPgAdmin 管理 PostgreSQL <a class="header-anchor" href="#用-phppgadmin-管理-postgresql" aria-label="Permalink to “用 phpPgAdmin 管理 PostgreSQL”">​</a></h3>`,74)),t("p",null,[r(o,{href:"http://phppgadmin.sourceforge.net/doku.php"},{default:s(()=>[...p[2]||(p[2]=[t("strong",null,"phpPgAdmin",-1)])]),_:1}),p[3]||(p[3]=e(" 是基于 web 用 PHP 写的 PostgreSQL 管理工具。",-1))]),p[24]||(p[24]=t("p",null,"默认仓库中有可用的 phpPgAdmin。用下面的命令安装 phpPgAdmin：",-1)),p[25]||(p[25]=t("pre",null,[t("code",null,`sudo apt-get install phppgadmin
`)],-1)),t("p",null,[p[5]||(p[5]=e("默认情况下，你可以在本地系统的 web 浏览器用 ",-1)),t("strong",null,[r(o,{href:"http://localhost/phppgadmin"},{default:s(()=>[...p[4]||(p[4]=[e("http://localhost/phppgadmin",-1)])]),_:1})]),p[6]||(p[6]=e(" 访问 phppgadmin。",-1))]),p[26]||(p[26]=n(`<p>要访问远程系统，在 Ubuntu 15.10 上做如下操作：</p><p>编辑文件 <strong>/etc/apache2/conf-available/phppgadmin.conf</strong>,</p><pre><code>sudo vi /etc/apache2/conf-available/phppgadmin.conf
</code></pre><p>找到 <strong>Require local</strong> 的一行在这行前面添加 <strong>#</strong> 注释掉它。</p><pre><code>#Require local
</code></pre><p>添加下面的一行：</p><pre><code>allow from all
</code></pre><p>保存并退出文件。</p><p>然后重启 apache 服务。</p><pre><code>sudo systemctl restart apache2
</code></pre><p>对于 Ubuntu 14.10 及之前版本：</p><p>编辑 <strong>/etc/apache2/conf.d/phppgadmin</strong>:</p><pre><code>sudo nano /etc/apache2/conf.d/phppgadmin
</code></pre><p>注释掉下面一行：</p><pre><code>[...]
#allow from 127.0.0.0/255.0.0.0 ::1/128
</code></pre><p>取消下面一行的注释使所有系统都可以访问 phppgadmin。</p><pre><code>allow from all
</code></pre><p>编辑 <strong>/etc/apache2/apache2.conf</strong>:</p><pre><code>sudo vi /etc/apache2/apache2.conf
</code></pre><p>添加下面一行：</p><pre><code>Include /etc/apache2/conf.d/phppgadmin
</code></pre><p>然后重启 apache 服务。</p><pre><code>sudo service apache2 restart
</code></pre><h3 id="配置-phppgadmin" tabindex="-1">配置 phpPgAdmin <a class="header-anchor" href="#配置-phppgadmin" aria-label="Permalink to “配置 phpPgAdmin”">​</a></h3><p>编辑文件 <strong>/etc/phppgadmin/config.inc.php</strong>， 做以下更改。下面大部分选项都带有解释。认真阅读以便了解为什么要更改这些值。</p><pre><code>sudo nano /etc/phppgadmin/config.inc.php
</code></pre><p>找到下面一行：</p><pre><code>$conf[&#39;servers&#39;][0][&#39;host&#39;] = &#39;&#39;;
</code></pre><p>按照下面这样更改：</p><pre><code>$conf[&#39;servers&#39;][0][&#39;host&#39;] = &#39;localhost&#39;;
</code></pre><p>找到这一行：</p><pre><code>$conf[&#39;extra_login_security&#39;] = true;
</code></pre><p>更改值为 <strong>false</strong>。</p><pre><code>$conf[&#39;extra_login_security&#39;] = false;
</code></pre><p>找到这一行：</p><pre><code>$conf[&#39;owned_only&#39;] = false;
</code></pre><p>更改值为 <strong>true</strong>。</p><pre><code>$conf[&#39;owned_only&#39;] = true;
</code></pre><p>保存并关闭文件。重启 postgresql 服务和 Apache 服务。</p><pre><code>sudo systemctl restart postgresql

sudo systemctl restart apache2
</code></pre><p>或者，</p><pre><code>sudo service postgresql restart

sudo service apache2 restart
</code></pre>`,42)),t("p",null,[p[8]||(p[8]=e("现在打开你的浏览器并导航到 **",-1)),r(o,{href:"http://ip-address/phppgadmin**%E3%80%82%E4%BD%A0%E4%BC%9A%E7%9C%8B%E5%88%B0%E4%BB%A5%E4%B8%8B%E6%88%AA%E5%9B%BE%E3%80%82"},{default:s(()=>[...p[7]||(p[7]=[e("http://ip-address/phppgadmin**。你会看到以下截图。",-1)])]),_:1})]),p[27]||(p[27]=n('<p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2015/11/phpPgAdmin-Google-Chrome_001.jpg" alt="phpPgAdmin "></p><p>用你之前创建的用户登录。我之前已经创建了一个名为 “<strong>senthil</strong>” 的用户，密码是 “<strong>ubuntu</strong>”，因此我以 “senthil” 用户登录。</p><p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2015/11/phpPgAdmin-Google-Chrome_002.jpg" alt="phpPgAdmin  "></p><p>然后你就可以访问 phppgadmin 面板了。</p><p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2015/11/phpPgAdmin-Google-Chrome_003.jpg" alt="phpPgAdmin "></p><p>用 postgres 用户登录：</p><p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2015/11/phpPgAdmin-Google-Chrome_004.jpg" alt="phpPgAdmin "></p><p>就是这样。现在你可以用 phppgadmin 可视化创建、删除或者更改数据库了。</p><p>加油！</p><hr>',10)),t("p",null,[p[10]||(p[10]=e("via: ",-1)),r(o,{href:"http://www.unixmen.com/install-postgresql-9-4-and-phppgadmin-on-ubuntu-15-10/"},{default:s(()=>[...p[9]||(p[9]=[e("http://www.unixmen.com/install-postgresql-9-4-and-phppgadmin-on-ubuntu-15-10/",-1)])]),_:1})]),t("p",null,[p[14]||(p[14]=e("作者：",-1)),r(o,{href:"http://www.twitter.com/ostechnix"},{default:s(()=>[...p[11]||(p[11]=[e("SK",-1)])]),_:1}),p[15]||(p[15]=e(" 译者：",-1)),r(o,{href:"http://mutouxiaogui.cn/blog/"},{default:s(()=>[...p[12]||(p[12]=[e("ictlyh",-1)])]),_:1}),p[16]||(p[16]=e(" 校对：",-1)),r(o,{href:"https://github.com/wxy"},{default:s(()=>[...p[13]||(p[13]=[e("wxy",-1)])]),_:1})]),t("p",null,[p[19]||(p[19]=e("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...p[17]||(p[17]=[e("LCTT",-1)])]),_:1}),p[20]||(p[20]=e(" 原创编译，",-1)),r(o,{href:"https://linux.cn/"},{default:s(()=>[...p[18]||(p[18]=[e("Linux中国",-1)])]),_:1}),p[21]||(p[21]=e(" 荣誉推出",-1))])])}const S=a(i,[["render",u]]);export{A as __pageData,S as default};
