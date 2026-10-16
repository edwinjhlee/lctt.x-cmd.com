import{_ as i,a0 as o,w as c,s as r,I as n,x as a,a1 as p,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"利用 Vely 在 Linux 构建你自己的 SaaS | LCTT x X-CMD","titleTemplate":false,"description":"利用 Vely 在 Linux 构建你自己的 SaaS | LCTT (202312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"利用 Vely 在 Linux 构建你自己的 SaaS | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"利用 Vely 在 Linux 构建你自己的 SaaS | LCTT (202312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202312/20221107.2 ⭐️⭐️⭐️ Build your own SaaS on Linux with Vely","title":"利用 Vely 在 Linux 构建你自己的 SaaS","tag":"202312","desc":""},"relativePath":"202312/20221107.2 ⭐️⭐️⭐️ Build your own SaaS on Linux with Vely.md","filePath":"[post].md"}'),d={name:"202312/20221107.2 ⭐️⭐️⭐️ Build your own SaaS on Linux with Vely.md"};function u(h,s,g,q,b,m){const e=o("Link");return c(),r("div",null,[s[20]||(s[20]=n("h1",{id:"利用-vely-在-linux-构建你自己的-saas",tabindex:"-1"},[a("利用 Vely 在 Linux 构建你自己的 SaaS "),n("a",{class:"header-anchor",href:"#利用-vely-在-linux-构建你自己的-saas","aria-label":"Permalink to “利用 Vely 在 Linux 构建你自己的 SaaS”"},"​")],-1)),s[21]||(s[21]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202312/12/110902myyfcm3hdmwqv3zy.jpg",alt:""})],-1)),s[22]||(s[22]=n("blockquote",null,[n("p",null,"Vely 可让你在网络应用程序中利用 C 语言的强大功能。")],-1)),n("p",null,[p(e,{href:"https://opensource.com/article/22/5/write-c-appplications-vely-linux"},{default:l(()=>[...s[0]||(s[0]=[a("Vely",-1)])]),_:1}),s[1]||(s[1]=a(" 将 C 语言的高性能和低内存占用与 PHP 等语言的易用性和安全性相结合。作为自由开源软件，它以 GPLv3 和 LGPL 3 授权，所以你甚至可以用它来构建商业软件。",-1))]),s[23]||(s[23]=t('<h3 id="利用-vely-构建-saas" tabindex="-1">利用 Vely 构建 SaaS <a class="header-anchor" href="#利用-vely-构建-saas" aria-label="Permalink to “利用 Vely 构建 SaaS”">​</a></h3><p>你可以使用 Vely 创建一个多租户网络应用程序，它可以作为软件即服务模式（SaaS）在互联网上运行。每个用户都有一个完全独立的数据空间。</p><p>在这个网络应用程序示例中，用户可以注册一个笔记本服务来创建笔记，然后查看和删除它们。它仅用了 7 个源文件，310 行代码，就展示了如何集成多项技术:</p><ul><li>MariaDB</li><li>网络浏览器</li><li>Apache</li><li>Unix 套接字</li></ul><h4 id="运作原理" tabindex="-1">运作原理 <a class="header-anchor" href="#运作原理" aria-label="Permalink to “运作原理”">​</a></h4><p>以下是从用户的角度来看应用程序是如何工作的。下图是代码演示。</p><p>该应用允许用户通过指定电子邮件地址和密码创建新的登录名。你可以用任何你喜欢的方式设置它们，例如运用 CSS：</p><p><img src="https://opensource.com/sites/default/files/2022-10/1createuser.png" alt="创建一个用户账户"></p><p>验证用户的电子邮件:</p><p><img src="https://opensource.com/sites/default/files/2022-10/2verifyemail.png" alt="验证用户的电子邮件地址"></p><p>每个用户使用自己独有的用户名和密码登录：</p><p><img src="https://opensource.com/sites/default/files/2022-10/3login.png" alt="用户登录"></p><p>一旦登录，用户就可以添加笔记：</p><p><img src="https://opensource.com/sites/default/files/2022-10/4addnote.png" alt="用户可以添加笔记"></p><p>用户可以获取笔记列表：</p><p><img src="https://opensource.com/sites/default/files/2022-10/5listnotes.png" alt="用户列举笔记"></p><p>删除笔记之前，应用会申请确认信息：</p><p><img src="https://opensource.com/sites/default/files/2022-10/6confirmdelete.png" alt="删除笔记之前，应用会申请确认信息"></p><p>用户确认后，笔记被删除：</p><p><img src="https://opensource.com/sites/default/files/2022-10/7notedeleted.png" alt="用户确认后，笔记被删除"></p><h4 id="设置先决条件" tabindex="-1">设置先决条件 <a class="header-anchor" href="#设置先决条件" aria-label="Permalink to “设置先决条件”">​</a></h4>',21)),n("p",null,[s[3]||(s[3]=a("遵照 ",-1)),p(e,{href:"https://vely.dev/"},{default:l(()=>[...s[2]||(s[2]=[a("Vely.dev",-1)])]),_:1}),s[4]||(s[4]=a(" 上的安装指示。这是一个使用 DNF、APT、Pacman 或者 Zypper 等标准工具包的快速流程。",-1))]),s[24]||(s[24]=t(`<p>由于它们都是这个范例的一部分，你必须安装 Apache 作为网络服务器，安装 MariaDB 作为数据库。</p><p>安装 Vely 后，如使用 Vim，打开里面的“语法高亮显示”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vv -m</span></span></code></pre></div><h4 id="获取源代码" tabindex="-1">获取源代码 <a class="header-anchor" href="#获取源代码" aria-label="Permalink to “获取源代码”">​</a></h4><p>这个演示 SaaS 应用程序的源代码是 Vely 安装的一部分。为每个应用程序创建一个单独的源代码目录不失为一个好主意（而且你可以按自己喜好命名）。在这种情况下，解包源代码会帮你完成这些工作:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tar xvf $(vv -o)/examples/multitenant_SaaS.tar.gz</span></span>
<span class="line"><span>$ cd multitenant_SaaS</span></span></code></pre></div><p>默认情况下，该应用程序以 <code>multitenant_SaaS</code> 命名，但你可以将其命名为任何内容（如果这么做，其他每个地方你都需要改一下）。</p><h3 id="创建应用程序" tabindex="-1">创建应用程序 <a class="header-anchor" href="#创建应用程序" aria-label="Permalink to “创建应用程序”">​</a></h3><p>第一步是创建一个应用程序。使用 Vely 的 <code>vf</code> 工具就可以轻松完成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo vf -i-u $(whoami) multitenant_SaaS</span></span></code></pre></div><p>这个命令创建了一个新的应用程序主目录（<code>/var/lib/vv/multitenant_SaaS</code>），并帮你执行应用程序设置。通常，这意味着在该主目录中创建各种子目录并分配权限。在这种情况下，只有当前用户（<code>whoami</code> 的结果）拥有目录，具有 <code>0700</code> 权限，这确保了其他人没有访问文件的权限。</p><h3 id="创建数据库" tabindex="-1">创建数据库 <a class="header-anchor" href="#创建数据库" aria-label="Permalink to “创建数据库”">​</a></h3><p>在你键入任何代码之前，你需要一个能够存储该应用程序所用信息的空间。首先，创建一个名为 <code>db_multitenant_SaaS</code> 的 MariaDB 数据库，由用户名为 <code>vely</code> 的用户所有，密码为 <code>your_password</code> 。你可以修改刚才提到的任何值，但得记住，在这个示例里，你需要将包含这些内容的每个地方都得修改一遍。</p><p>在 MySQL 中以 root 身份登录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>create database if not exists db_multitenant_SaaS;</span></span>
<span class="line"><span>create user if not exists vely identified by &#39;your_password&#39;;</span></span>
<span class="line"><span>grant create,alter,drop,select,insert,delete,update on db_multitenant_SaaS.* to vely;</span></span></code></pre></div><p>然后在数据库内创建数据库对象（表，记录等等）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use db_multitenant_SaaS;</span></span>
<span class="line"><span>source setup.sql;</span></span>
<span class="line"><span>exit</span></span></code></pre></div><h3 id="将-vely-连接至数据库" tabindex="-1">将 Vely 连接至数据库 <a class="header-anchor" href="#将-vely-连接至数据库" aria-label="Permalink to “将 Vely 连接至数据库”">​</a></h3><p>为了让 Vely 知晓你数据库的位置以及如何登录进去，创建一个名为 <code>db_multitenant_SaaS</code> 的数据库配置文件。（该名称用于在源代码中的数据库声明，所以如果你改了它，确保在它存在的每个地方都改一遍。）</p><p>Vely 使用原生的 MariaDB 数据库连接，因此你可以指定给定的数据库所能允许的任何选项:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &#39;[client]</span></span>
<span class="line"><span>user=vely</span></span>
<span class="line"><span>password=your_password</span></span>
<span class="line"><span>database=db_multitenant_SaaS</span></span>
<span class="line"><span>protocol=TCP</span></span>
<span class="line"><span>host=127.0.0.1</span></span>
<span class="line"><span>port=3306&#39; &gt; db_multitenant_SaaS</span></span></code></pre></div><h3 id="构建应用程序" tabindex="-1">构建应用程序 <a class="header-anchor" href="#构建应用程序" aria-label="Permalink to “构建应用程序”">​</a></h3><p>使用 <code>vv</code> 工具构建应用程序，利用 <code>--db</code> 选项指定 MariaDB 数据库和数据库配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vv -q--db=mariadb:db_multitenant_SaaS</span></span></code></pre></div><h3 id="启用应用服务器" tabindex="-1">启用应用服务器 <a class="header-anchor" href="#启用应用服务器" aria-label="Permalink to “启用应用服务器”">​</a></h3><p>启动你的网络应用程序的服务器，需要使用 <code>vf</code> FastCGI 进程管理器。应用程序服务器使用 Unix 套接字与网络服务器（创建反向代理）通信：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vf -w3 multitenant_SaaS</span></span></code></pre></div><p>这么做会启用三个守护进程，为接收到的请求提供服务。你也可以启动一个自适应服务器，它会增加进程的数量从而服务更多的请求，并在不需要他们时减少进程的数量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vf multitenant_SaaS</span></span></code></pre></div><p>请参阅 <code>vf</code> 了解更多选项，以帮助你实现最佳性能。</p><p>当你需要停止你的应用程序服务器，使用 <code>-m quit</code> 选项：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vf -m quit multitenant_SaaS</span></span></code></pre></div><h3 id="创建网络服务器" tabindex="-1">创建网络服务器 <a class="header-anchor" href="#创建网络服务器" aria-label="Permalink to “创建网络服务器”">​</a></h3><p>这是一个网络应用程序，那么应用程序就得需要一个网络服务器。该示例通过一个 Unix 套接字监听器使用 Apache。</p><h4 id="_1、设置-apache" tabindex="-1">1、设置 Apache <a class="header-anchor" href="#_1、设置-apache" aria-label="Permalink to “1、设置 Apache”">​</a></h4><p>将 Apache 配置为一个反向代理，并将你的应用程序与之连接，你需要启用 FastCGI 代理支持，这通常使用 <code>proxy</code> 和 <code>proxy_fcgi</code> 模块。</p><p>对于 Fedora 系统（或者其它的，比如 Arch）来说，通过在 Apache 配置文件 <code>/etc/httpd/conf/httpd.conf</code> 中添加（或取消注释）适当的 <code>LoadModule</code> 指令，就可启用 <code>proxy</code> 和 <code>proxy_fcgi</code> 模块。</p><p>以下指令适用于 Debian，Ubuntu 以及类似的系统，启用 <code>proxy</code> 和 <code>proxy_fcgi</code> 模块：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo a2enmod proxy</span></span>
<span class="line"><span>$ sudo a2enmod proxy_fcgi</span></span></code></pre></div><p>以下指令适用于 OpenSUSE，将这几行添加在 <code>/etc/apache2/httpd.conf</code> 结尾处：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>LoadModule proxy_module modules/mod_proxy.so</span></span>
<span class="line"><span>LoadModule proxy_fcgi_module modules/mod_proxy_fcgi.so</span></span></code></pre></div><h4 id="_2、配置-apache" tabindex="-1">2、配置 Apache <a class="header-anchor" href="#_2、配置-apache" aria-label="Permalink to “2、配置 Apache”">​</a></h4><p>现在你必须将代理信息添加在 Apache 的配置文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ProxyPass &quot;/multitenant_SaaS&quot; unix:///var/lib/vv/multitenant_SaaS/sock/sock|fcgi://localhost/multitenant_SaaS</span></span></code></pre></div><p>你的配置文件的位置可能会有所不同，这取决于不同的 Linux 发行版：</p><ul><li>Fedora、CentOS、Mageia 和 Arch： <code>/etc/httpd/conf/httpd.conf</code></li><li>Debian、Ubuntu、Mint： <code>/etc/apache2/apache2.conf</code></li><li>OpenSUSE：<code>/etc/apache2/httpd.conf</code></li></ul><h4 id="_3、重新启动" tabindex="-1">3、重新启动 <a class="header-anchor" href="#_3、重新启动" aria-label="Permalink to “3、重新启动”">​</a></h4><p>最后，重启 Apache。在 Fedora 和类似系统，还有 Arch Linux 是如下指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl restart httpd</span></span></code></pre></div><p>在 Debian 和基于 Debian 的系统，还有 OpenSUSE 是如下指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl restart apache2</span></span></code></pre></div><h3 id="设置本地邮箱" tabindex="-1">设置本地邮箱 <a class="header-anchor" href="#设置本地邮箱" aria-label="Permalink to “设置本地邮箱”">​</a></h3><p>这个示例中，电子邮件是其功能的一部分。如果你的服务器已经可以发送电子邮件了，你可以跳过这一条。此外，你可以使用本地邮箱（<code>myuser@localhost</code>）来测试它。要做到这一点，需安装 Sendmail。</p><p>在 Fedora 和类似系统中是如下指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf installsendmail</span></span>
<span class="line"><span>$ sudo systemctl start sendmail</span></span></code></pre></div><p>而在 Debian 和类似系统（如 Ubuntu）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt installsendmail</span></span>
<span class="line"><span>$ sudo systemctl start sendmail</span></span></code></pre></div><p>当应用程序向本地用户发送电子邮件，比如说 <code>OS_user@localhost</code>，你就可以通过查看 <code>/var/mail/</code> 处（即所谓“邮件池”）来确认电子邮件是否被发送。</p><h3 id="从浏览器访问应用服务器" tabindex="-1">从浏览器访问应用服务器 <a class="header-anchor" href="#从浏览器访问应用服务器" aria-label="Permalink to “从浏览器访问应用服务器”">​</a></h3><p>假设你在本地运行该应用，可以通过使用 <code>http://127.0.0.1/multitenant_SaaS?req=notes&amp;action=begin</code> 域名从你的网络服务器访问你的应用服务器。如果你在互联网上的在线服务器运行该程序，你可能就需要调整防火墙设置以允许 HTTP 通信。</p><h3 id="源代码" tabindex="-1">源代码 <a class="header-anchor" href="#源代码" aria-label="Permalink to “源代码”">​</a></h3><p>该应用程序示例包含 7 个源文件。你可以自行回顾代码（记住，这些文件只有 310 行代码），下面是每个文件的概述。</p><h4 id="sql-设置-setup-sql" tabindex="-1">SQL 设置（setup.sql） <a class="header-anchor" href="#sql-设置-setup-sql" aria-label="Permalink to “SQL 设置（setup.sql）”">​</a></h4><p>创建的两个表：</p><ul><li><code>users</code>：每个用户的信息。在 <code>users</code> 表中，每个用户都有自己唯一的 ID （<code>userId</code> 列），以及其他信息，如电子邮件地址和该地址是否通过了验证。还有一个哈希密码。实际的密码永远不会存储在纯文本（或其他形式）中，单向哈希用于检查密码。</li><li><code>notes</code>：用户输入的笔记。<code>notes</code> 表包含了所有的笔记，每个笔记都有一个 <code>userId</code> 列，表示哪个用户拥有它们。<code>userId</code> 列的值与 <code>users</code> 表中的同名列匹配。这样，每个笔记显然都属于单个用户。</li></ul><p>该文件内容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>create table if not exists notes (dateOf datetime, noteId bigint auto_increment primary key, userId bigint, note varchar(1000));</span></span>
<span class="line"><span>create table if not exists users (userId bigint auto_increment primary key, email varchar(100), hashed_pwd varchar(100), verified smallint, verify_token varchar(30), session varchar(100));</span></span>
<span class="line"><span>create unique index if not exists users1 on users (email);</span></span></code></pre></div><h4 id="运行时数据-login-h" tabindex="-1">运行时数据（login.h） <a class="header-anchor" href="#运行时数据-login-h" aria-label="Permalink to “运行时数据（login.h）”">​</a></h4><p>为了正确地显示登录、注册和注销链接，你需要一些在应用程序中任何地方都可以使用的标志。此外，应用程序使用 cookie 来维护会话，因此它需要在任何地方都可用，例如，验证会话是否有效。发送到应用程序的每个请求都以这种方式进行确认。只有带有可验证 cookie 的请求是允许的。</p><p>所以要做到这种效果，你需要有一个 <code>global_request_data</code> 类型的 <code>reqdata</code>（请求数据），其中包含 <code>sess_userId</code>（用户的 ID）以及 <code>sess_id</code>（用户目前的会话 ID）。此外，还有一些不言自明的标志，可以帮助渲染页面：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#ifndef _VV_LOGIN</span></span>
<span class="line"><span>#define _VV_LOGIN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct s_reqdata {</span></span>
<span class="line"><span>    bool displayed_logout; // true 则显示登出连接</span></span>
<span class="line"><span>    bool is_logged_in; // true 则会话已验证登录</span></span>
<span class="line"><span>    char *sess_userId; // 目前会话的用户 ID</span></span>
<span class="line"><span>    char *sess_id; // 会话 ID</span></span>
<span class="line"><span>} reqdata;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void login_or_signup ();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif</span></span></code></pre></div><h4 id="会话检查和会话数据-before-vely" tabindex="-1">会话检查和会话数据（_before.vely） <a class="header-anchor" href="#会话检查和会话数据-before-vely" aria-label="Permalink to “会话检查和会话数据（_before.vely）”">​</a></h4><p>Vely 里有一个 <ruby>请求前处理程序<rt>before_request handler</rt></ruby> 的概念。你写的代码会在其它处理请求的代码之前执行的。要达到这个目的，你只需要将这样的代码写在名为 <code>_before.vely</code> 的文件中，然后剩余的部分将会自动处理。</p><p>SaaS 应用程序所作的任何事情，例如处理发送至应用程序的请求，必须验证其安全性。这样，应用程序就能知晓调用方是否有执行操作所需要的权限。</p><p>在这里，通过请求前处理程序进行权限检查。这样，无论其他代码如何处理请求，都已经掌握了会话信息。</p><p>为保持会话数据（比如会话 ID 和用户 ID）在你代码中的任何地方都可用，你可以使用 <code>global_request_data</code>。它只是一个指向内存的通用指针（<code>void*</code>），任何处理请求的代码都可以访问它。这非常适合处理会话，如下所示:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &quot;vely.h&quot;</span></span>
<span class="line"><span>#include &quot;login.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// _before() 是一个请求前处理程序。</span></span>
<span class="line"><span>// 它总是在处理请求的其他代码之前执行。</span></span>
<span class="line"><span>// 对于任何类型的请求范围设置或数据初始化，它都是一个很好的位置。</span></span>
<span class="line"><span>void _before() {</span></span>
<span class="line"><span>    // 输出 HTTP 请求头</span></span>
<span class="line"><span>    out-header default</span></span>
<span class="line"><span>    reqdata *rd; // 这是全局请求数据，见 login.h</span></span>
<span class="line"><span>    // 为全局请求数据分配内存，</span></span>
<span class="line"><span>    // 将在请求结束时自动释放</span></span>
<span class="line"><span>    new-mem rd size sizeof(reqdata)</span></span>
<span class="line"><span>    // 初始化标志</span></span>
<span class="line"><span>    rd-&gt;displayed_logout = false;</span></span>
<span class="line"><span>    rd-&gt;is_logged_in = false;</span></span>
<span class="line"><span>    // 将我们创建的数据设置为全局请求数据，</span></span>
<span class="line"><span>    // 可以从任何处理请求的代码中访问</span></span>
<span class="line"><span>    set-req data rd</span></span>
<span class="line"><span>    // 检查会话是否存在（基于来自客户端的 cookie）</span></span>
<span class="line"><span>    // 这在任何其他请求处理代码之前执行，</span></span>
<span class="line"><span>    // 使其更容易准备好会话信息</span></span>
<span class="line"><span>    _check_session ();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="检查会话是否有效-check-session-vely" tabindex="-1">检查会话是否有效（_check_session.vely） <a class="header-anchor" href="#检查会话是否有效-check-session-vely" aria-label="Permalink to “检查会话是否有效（_check_session.vely）”">​</a></h4><p>多租户 SaaS 应用程序中最重要的任务之一就是通过检查用户是否登录来（尽快）检查会话是否有效。这是通过从客户端（例如网络浏览器）获取会话 ID 和用户 ID 的 cookie，并将它们与存储会话的数据库进行比较来实现的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &quot;vely.h&quot;</span></span>
<span class="line"><span>#include &quot;login.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 检查会话是否有效</span></span>
<span class="line"><span>void _check_session () {</span></span>
<span class="line"><span>    // 获取全局请求数据</span></span>
<span class="line"><span>    reqdata *rd;</span></span>
<span class="line"><span>    get-req data to rd</span></span>
<span class="line"><span>    // 自用户浏览器获取 cookies</span></span>
<span class="line"><span>    get-cookie rd-&gt;sess_userId=&quot;sess_userId&quot;</span></span>
<span class="line"><span>    get-cookie rd-&gt;sess_id=&quot;sess_id&quot;</span></span>
<span class="line"><span>    if (rd-&gt;sess_id[0] != 0) {</span></span>
<span class="line"><span>        // 检查给定用户 ID 下的会话 ID 是否正确</span></span>
<span class="line"><span>        char *email;</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;select email from users where userId=&#39;%s&#39; and session=&#39;%s&#39;&quot; output email : rd-&gt;sess_userId, rd-&gt;sess_id row-count define rcount</span></span>
<span class="line"><span>            query-result email to email</span></span>
<span class="line"><span>        end-query</span></span>
<span class="line"><span>        if (rcount == 1) {</span></span>
<span class="line"><span>            // 如果正确，设置登录标志</span></span>
<span class="line"><span>            rd-&gt;is_logged_in = true;</span></span>
<span class="line"><span>            // 如果登出链接不显示，则显示它</span></span>
<span class="line"><span>            if (rd-&gt;displayed_logout == false) {</span></span>
<span class="line"><span>                @Hi &lt;&lt;p-out email&gt;&gt;! &lt;a href=&quot;https://opensource.com/?req=login&amp;action=logout&quot;&gt;Logout&lt;/a&gt;&lt;br/&gt;</span></span>
<span class="line"><span>                rd-&gt;displayed_logout = true;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else rd-&gt;is_logged_in = false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="注册、登录、登出-login-vely" tabindex="-1">注册、登录、登出（login.vely） <a class="header-anchor" href="#注册、登录、登出-login-vely" aria-label="Permalink to “注册、登录、登出（login.vely）”">​</a></h4><p>任何多租户系统的基础便是具有用户注册\\登录和登出的功能。通常情况下，注册包括验证电子邮件地址；不止于此，同一电子邮件地址会作为一个用户名。这里就是这种情况。</p><p>这里实现了几个执行该功能所必须的子请求：</p><ul><li>注册新用户时，显示 HTML 表单以收集信息。它的 URL 请求签名是 <code>req=login&amp;action=newuser</code>。</li><li>作为对注册表单的响应，创建一个新用户。URL 请求的签名是 <code>req=login&amp;action=createuser</code>。输入参数（<code>input-param</code>）信号获取 <code>email</code> 和 <code>pwd</code> 的 POST 表单字段。密码值是单向散列，电子邮件验证令牌是一个随机的 5 位数字。这些被插入到 <code>users</code> 表中，创建一个新用户。系统会发送一封验证邮件，并提示用户阅读邮件并输入代码。</li><li>通过输入发送到该电子邮件的验证码来验证电子邮件。URL 请求的签名是 <code>req=login&amp;action=verify</code>。</li><li>显示一个登录表单，让用户登录。URL 请求的签名是 <code>req=login</code>（例如，<code>action</code> 为空）。</li><li>通过验证电子邮件地址（用户名）和密码登录。URL 请求的签名是 <code>req=login&amp;action=login</code>。</li><li>应用户要求登出。URL 请求的签名是 <code>req=login&amp;action=logout</code>。</li><li>应用程序的登录页。URL 请求的签名是 <code>req=login&amp;action=begin</code>。</li><li>如果用户当前已登录，转到应用程序的登录页面。</li></ul><p>可以看看下面这些例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &quot;vely.h&quot;</span></span>
<span class="line"><span>#include &quot;login.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 处理云端多租户应用程序的会话维护、登录、注销、会话验证</span></span>
<span class="line"><span>void login () {</span></span>
<span class="line"><span>    // 获取 URL 的输入参数 \`action\`</span></span>
<span class="line"><span>    input-param action</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取全局请求数据，我们在其中记录会话信息，所以它很方便</span></span>
<span class="line"><span>    reqdata *rd;</span></span>
<span class="line"><span>    get-req data to rd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果会话已经建立，我们不会</span></span>
<span class="line"><span>    // 继续到应用程序主页的唯一原因是我们正在登出</span></span>
<span class="line"><span>    if (rd-&gt;is_logged_in) {</span></span>
<span class="line"><span>        if (strcmp(action, &quot;logout&quot;)) {</span></span>
<span class="line"><span>            _show_home();</span></span>
<span class="line"><span>            exit-request</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 应用程序页面启动。显示登录或注册的链接，</span></span>
<span class="line"><span>    // 并显示适当的主屏幕</span></span>
<span class="line"><span>    if (!strcmp (action, &quot;begin&quot;)) {</span></span>
<span class="line"><span>        _show_home();</span></span>
<span class="line"><span>        exit-request</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 开始创建新用户。询问电子邮件和密码，</span></span>
<span class="line"><span>    // 然后提交此表单时创建用户。</span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;newuser&quot;)) {</span></span>
<span class="line"><span>        @Create New User&lt;hr/&gt;</span></span>
<span class="line"><span>        @&lt;form action=&quot;https://opensource.com/?req=login&quot; method=&quot;POST&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;action&quot; type=&quot;hidden&quot; value=&quot;createuser&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;email&quot; type=&quot;text&quot; value=&quot;&quot; size=&quot;50&quot; maxlength=&quot;50&quot; required autofocus placeholder=&quot;Email&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;pwd&quot; type=&quot;password&quot; value=&quot;&quot; size=&quot;50&quot; maxlength=&quot;50&quot; required placeholder=&quot;Password&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input type=&quot;submit&quot; value=&quot;Sign Up&quot;&gt;</span></span>
<span class="line"><span>        @&lt;/form&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 验证用户发送到电子邮件的代码。代码必须匹配，从而验证电子邮件地址   </span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;verify&quot;)) {</span></span>
<span class="line"><span>        input-param code</span></span>
<span class="line"><span>        input-param email</span></span>
<span class="line"><span>        // 获取基于电子邮件的验证令牌</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;select verify_token from users where email=&#39;%s&#39;&quot; output db_verify : email</span></span>
<span class="line"><span>            query-result db_verify to define db_verify</span></span>
<span class="line"><span>            // 将数据库中记录的令牌与用户提供的令牌进行比较</span></span>
<span class="line"><span>            if (!strcmp (code, db_verify)) {</span></span>
<span class="line"><span>                @Your email has been verifed. Please &lt;a href=&quot;https://opensource.com/?req=login&quot;&gt;Login&lt;/a&gt;.</span></span>
<span class="line"><span>                // 如果匹配，更新用户信息以表明已验证。</span></span>
<span class="line"><span>                run-query @db_multitenant_SaaS no-loop = &quot;update users set verified=1 where email=&#39;%s&#39;&quot; : email</span></span>
<span class="line"><span>                exit-request</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        end-query</span></span>
<span class="line"><span>        @Could not verify the code. Please try &lt;a href=&quot;https://opensource.com/?req=login&quot;&gt;again&lt;/a&gt;.</span></span>
<span class="line"><span>        exit-request</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建用户 —— 当用户使用电子邮件和密码提交表单以创建用户时运行    </span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;createuser&quot;)) {</span></span>
<span class="line"><span>        input-param email</span></span>
<span class="line"><span>        input-param pwd</span></span>
<span class="line"><span>        // 创建散列（单向）密码</span></span>
<span class="line"><span>        hash-string pwd to define hashed_pwd</span></span>
<span class="line"><span>        // 生成随机的 5 位数字字符串验证代码</span></span>
<span class="line"><span>        random-string to define verify length 5 number</span></span>
<span class="line"><span>        // 创建用户：插入电子邮件、哈希密码、验证令牌。当前验证状态为 0，或未验证</span></span>
<span class="line"><span>        begin-transaction @db_multitenant_SaaS</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS no-loop = &quot;insert into users (email, hashed_pwd, verified, verify_token, session) values (&#39;%s&#39;, &#39;%s&#39;, &#39;0&#39;, &#39;%s&#39;, &#39;&#39;)&quot; : email, hashed_pwd, verify affected-rows define arows error define err on-error-continue</span></span>
<span class="line"><span>        if (strcmp (err, &quot;0&quot;) || arows != 1) {</span></span>
<span class="line"><span>            // 如果不能添加用户，则可能该用户不存在。不管怎样，我们都无法继续。</span></span>
<span class="line"><span>            login_or_signup();</span></span>
<span class="line"><span>            @User with this email already exists.</span></span>
<span class="line"><span>            rollback-transaction @db_multitenant_SaaS</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 创建带有验证码的电子邮件并将其发送给用户</span></span>
<span class="line"><span>            write-string define msg</span></span>
<span class="line"><span>                @From: vely@vely.dev</span></span>
<span class="line"><span>                @To: &lt;&lt;p-out email&gt;&gt;</span></span>
<span class="line"><span>                @Subject: verify your account</span></span>
<span class="line"><span>                @</span></span>
<span class="line"><span>                @Your verification code is: &lt;&lt;p-out verify&gt;&gt;</span></span>
<span class="line"><span>            end-write-string</span></span>
<span class="line"><span>            exec-program &quot;/usr/sbin/sendmail&quot; args &quot;-i&quot;, &quot;-t&quot; input msg status define st</span></span>
<span class="line"><span>            if (st != 0) {</span></span>
<span class="line"><span>                @Could not send email to &lt;&lt;p-out email&gt;&gt;, code is &lt;&lt;p-out verify&gt;&gt;</span></span>
<span class="line"><span>                rollback-transaction @db_multitenant_SaaS</span></span>
<span class="line"><span>                exit-request</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            commit-transaction @db_multitenant_SaaS</span></span>
<span class="line"><span>            // 通知用户查看邮件并输入验证码</span></span>
<span class="line"><span>            @Please check your email and enter verification code here:</span></span>
<span class="line"><span>            @&lt;form action=&quot;https://opensource.com/?req=login&quot; method=&quot;POST&quot;&gt;</span></span>
<span class="line"><span>            @&lt;input name=&quot;action&quot; type=&quot;hidden&quot; value=&quot;verify&quot; size=&quot;50&quot; maxlength=&quot;50&quot;&gt;</span></span>
<span class="line"><span>            @&lt;input name=&quot;email&quot; type=&quot;hidden&quot; value=&quot;&lt;&lt;p-out email&gt;&gt;&quot;&gt;</span></span>
<span class="line"><span>            @&lt;input name=&quot;code&quot; type=&quot;text&quot; value=&quot;&quot; size=&quot;50&quot; maxlength=&quot;50&quot; required autofocus placeholder=&quot;Verification code&quot;&gt;</span></span>
<span class="line"><span>            @&lt;button type=&quot;submit&quot;&gt;Verify&lt;/button&gt;</span></span>
<span class="line"><span>            @&lt;/form&gt;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 这里在登录用户登出时运行    </span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;logout&quot;)) {</span></span>
<span class="line"><span>        // 更新用户表以清除会话，即没有该用户登录</span></span>
<span class="line"><span>        if (rd-&gt;is_logged_in) {</span></span>
<span class="line"><span>            run-query @db_multitenant_SaaS = &quot;update users set session=&#39;&#39; where userId=&#39;%s&#39;&quot; : rd-&gt;sess_userId no-loop affected-rows define arows</span></span>
<span class="line"><span>            if (arows == 1) {</span></span>
<span class="line"><span>                rd-&gt;is_logged_in = false; // 提示用户未登录</span></span>
<span class="line"><span>                @You have been logged out.&lt;hr/&gt;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        _show_home();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 登录：当用户输入用户名和密码时运行</span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;login&quot;)) {</span></span>
<span class="line"><span>        input-param pwd</span></span>
<span class="line"><span>        input-param email</span></span>
<span class="line"><span>        // 创建单向散列，目的是与用户表进行比较 —— 密码**永远不会**被记录</span></span>
<span class="line"><span>        hash-string pwd to define hashed_pwd</span></span>
<span class="line"><span>        // 为会话 ID 创建一个随机的 30 位长的字符串</span></span>
<span class="line"><span>        random-string to rd-&gt;sess_id length 30</span></span>
<span class="line"><span>        // 检查用户名和哈希密码是否匹配</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;select userId from users where email=&#39;%s&#39; and hashed_pwd=&#39;%s&#39;&quot; output sess_userId : email, hashed_pwd</span></span>
<span class="line"><span>            query-result sess_userId to rd-&gt;sess_userId</span></span>
<span class="line"><span>            // 如果匹配，使用会话 ID 更新用户表</span></span>
<span class="line"><span>            run-query @db_multitenant_SaaS no-loop = &quot;update users set session=&#39;%s&#39; where userId=&#39;%s&#39;&quot; : rd-&gt;sess_id, rd-&gt;sess_userId affected-rows define arows</span></span>
<span class="line"><span>            if (arows != 1) {</span></span>
<span class="line"><span>                @Could not create a session. Please try again. &lt;&lt;.login_or_signup();&gt;&gt; &lt;hr/&gt;</span></span>
<span class="line"><span>                exit-request</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 设置“用户 ID”和“会话 ID”为 cookie。用户的浏览器将在每个请求中返回这些信息</span></span>
<span class="line"><span>            set-cookie &quot;sess_userId&quot; = rd-&gt;sess_userId</span></span>
<span class="line"><span>            set-cookie &quot;sess_id&quot; = rd-&gt;sess_id</span></span>
<span class="line"><span>            // 显示主页，确保会话是正确的，并设置标志</span></span>
<span class="line"><span>            _check_session();</span></span>
<span class="line"><span>            _show_home();</span></span>
<span class="line"><span>            exit-request</span></span>
<span class="line"><span>        end-query</span></span>
<span class="line"><span>        @Email or password are not correct. &lt;&lt;.login_or_signup();&gt;&gt;&lt;hr/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 登录界面，要求用户输入用户名和密码  </span></span>
<span class="line"><span>    } else if (!strcmp (action, &quot;&quot;)) {</span></span>
<span class="line"><span>        login_or_signup();</span></span>
<span class="line"><span>        @Please Login:&lt;hr/&gt;</span></span>
<span class="line"><span>        @&lt;form action=&quot;https://opensource.com/?req=login&quot; method=&quot;POST&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;action&quot; type=&quot;hidden&quot; value=&quot;login&quot; size=&quot;50&quot; maxlength=&quot;50&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;email&quot; type=&quot;text&quot; value=&quot;&quot; size=&quot;50&quot; maxlength=&quot;50&quot; required autofocus placeholder=&quot;Email&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;pwd&quot; type=&quot;password&quot; value=&quot;&quot; size=&quot;50&quot; maxlength=&quot;50&quot; required placeholder=&quot;Password&quot;&gt;</span></span>
<span class="line"><span>        @&lt;button type=&quot;submit&quot;&gt;Go&lt;/button&gt;</span></span>
<span class="line"><span>        @&lt;/form&gt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 显示登录或注册链接</span></span>
<span class="line"><span>void login_or_signup() {</span></span>
<span class="line"><span>        @&lt;a href=&quot;https://opensource.com/?req=login&quot;&gt;Login&lt;/a&gt; &amp; &amp; &lt;a href=&quot;https://opensource.com/?req=login&amp;action=newuser&quot;&gt;Sign Up&lt;/a&gt;&lt;hr/&gt;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="通用应用程序-show-home-vely" tabindex="-1">通用应用程序（_show_home.vely） <a class="header-anchor" href="#通用应用程序-show-home-vely" aria-label="Permalink to “通用应用程序（_show_home.vely）”">​</a></h4><p>借助本教程，你可以创建你想要的任何多租户 SaaS 应用程序。上面的多租户处理模块（<code>login.vely</code>）调用 <code>_show_home()</code> 函数，它可以容纳你的任何代码。这个示例代码展示了笔记应用程序，但它可以是任何内容。<code>_show_home()</code> 函数可以调用你想要的任何代码，它是一个通用的多租户应用程序插件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &quot;vely.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void _show_home() {</span></span>
<span class="line"><span>    notes();</span></span>
<span class="line"><span>    exit-request</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="笔记应用程序-notes-vely" tabindex="-1">笔记应用程序（notes.vely） <a class="header-anchor" href="#笔记应用程序-notes-vely" aria-label="Permalink to “笔记应用程序（notes.vely）”">​</a></h4><p>该应用程序能够添加、列举以及删除任何给定的笔记：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &quot;vely.h&quot;</span></span>
<span class="line"><span>#include &quot;login.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多租户云中的笔记应用程序</span></span>
<span class="line"><span>void notes () {</span></span>
<span class="line"><span>    // 获取全局请求数据</span></span>
<span class="line"><span>    reqdata *rd;</span></span>
<span class="line"><span>    get-req data to rd</span></span>
<span class="line"><span>    // 如果会话有效，显示登录或注册</span></span>
<span class="line"><span>    if (!rd-&gt;is_logged_in) {</span></span>
<span class="line"><span>        login_or_signup();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 问候用户</span></span>
<span class="line"><span>    @&lt;h1&gt;Welcome to Notes!&lt;/h1&gt;&lt;hr/&gt;</span></span>
<span class="line"><span>    // 如果没有登出，退出 —— 这里确保对用户身份的安全验证</span></span>
<span class="line"><span>    if (!rd-&gt;is_logged_in) {</span></span>
<span class="line"><span>        exit-request</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 获取 URL 参数，告诉笔记要做什么</span></span>
<span class="line"><span>    input-param subreq</span></span>
<span class="line"><span>    // 显示笔记能够做什么操作（添加或列举笔记）</span></span>
<span class="line"><span>    @&lt;a href=&quot;https://opensource.com/?req=notes&amp;subreq=add&quot;&gt;Add Note&lt;/a&gt; &lt;a href=&quot;https://opensource.com/?req=notes&amp;subreq=list&quot;&gt;List Notes&lt;/a&gt;&lt;hr/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 列举该用户的所有笔记</span></span>
<span class="line"><span>    if (!strcmp (subreq, &quot;list&quot;)) {</span></span>
<span class="line"><span>        // **只**选取该用户的笔记</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;select dateOf, note, noteId from notes where userId=&#39;%s&#39; order by dateOf desc&quot; : rd-&gt;sess_userId output dateOf, note, noteId</span></span>
<span class="line"><span>            query-result dateOf to define dateOf</span></span>
<span class="line"><span>            query-result note to define note</span></span>
<span class="line"><span>            query-result noteId to define noteId</span></span>
<span class="line"><span>            // 使用快速缓存正则表达式将新行更改为&lt;br/&gt;</span></span>
<span class="line"><span>            match-regex &quot;\\n&quot; in note replace-with &quot;&lt;br/&gt;\\n&quot; result define with_breaks status define st cache</span></span>
<span class="line"><span>            if (st == 0) with_breaks = note; // 什么都没有发现/替换，只用原来的</span></span>
<span class="line"><span>            // 显示笔记</span></span>
<span class="line"><span>            @Date: &lt;&lt;p-out dateOf&gt;&gt; (&lt;a href=&quot;https://opensource.com/?req=notes&amp;subreq=delete_note_ask&amp;note_id=%3C%3Cp-out%20noteId%3E%3E&quot;&gt;delete note&lt;/a&gt;)&lt;br/&gt;</span></span>
<span class="line"><span>            @Note: &lt;&lt;p-out with_breaks&gt;&gt;&lt;br/&gt;</span></span>
<span class="line"><span>            @&lt;hr/&gt;</span></span>
<span class="line"><span>        end-query</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 要求删除笔记</span></span>
<span class="line"><span>    else if (!strcmp (subreq, &quot;delete_note_ask&quot;)) {</span></span>
<span class="line"><span>        input-param note_id</span></span>
<span class="line"><span>        @Are you sure you want to delete a note? Use Back button to go back, or &lt;a href=&quot;https://opensource.com/?req=notes&amp;subreq=delete_note&amp;note_id=%3C%3Cp-out%20note_id%3E%3E&quot;&gt;delete note now&lt;/a&gt;.</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 删除笔记</span></span>
<span class="line"><span>    else if (!strcmp (subreq, &quot;delete_note&quot;)) {</span></span>
<span class="line"><span>        input-param note_id</span></span>
<span class="line"><span>        // 删除笔记</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;delete from notes where noteId=&#39;%s&#39; and userId=&#39;%s&#39;&quot; : note_id, rd-&gt;sess_userId affected-rows define arows no-loop error define errnote</span></span>
<span class="line"><span>        // 告知用户状态</span></span>
<span class="line"><span>        if (arows == 1) {</span></span>
<span class="line"><span>            @Note deleted</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            @Could not delete note (&lt;&lt;p-out errnote&gt;&gt;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 添加笔记</span></span>
<span class="line"><span>    else if (!strcmp (subreq, &quot;add_note&quot;)) {</span></span>
<span class="line"><span>        // 从 note 表单中获取 URL POST 数据</span></span>
<span class="line"><span>        input-param note</span></span>
<span class="line"><span>        // 在该用户的 ID 下插入笔记</span></span>
<span class="line"><span>        run-query @db_multitenant_SaaS = &quot;insert into notes (dateOf, userId, note) values (now(), &#39;%s&#39;, &#39;%s&#39;)&quot; : rd-&gt;sess_userId, note affected-rows define arows no-loop error define errnote</span></span>
<span class="line"><span>        // 告知用户状态</span></span>
<span class="line"><span>        if (arows == 1) {</span></span>
<span class="line"><span>            @Note added</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            @Could not add note (&lt;&lt;p-out errnote&gt;&gt;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 显示一个 HTML 表单来收集笔记，并将其发送回这里（使用 subreq=&quot;add_note&quot; URL 参数）</span></span>
<span class="line"><span>    else if (!strcmp (subreq, &quot;add&quot;)) {</span></span>
<span class="line"><span>        @Add New Note</span></span>
<span class="line"><span>        @&lt;form action=&quot;https://opensource.com/?req=notes&quot; method=&quot;POST&quot;&gt;</span></span>
<span class="line"><span>        @&lt;input name=&quot;subreq&quot; type=&quot;hidden&quot; value=&quot;add_note&quot;&gt;</span></span>
<span class="line"><span>        @&lt;textarea name=&quot;note&quot; rows=&quot;5&quot; cols=&quot;50&quot; required autofocus placeholder=&quot;Enter Note&quot;&gt;&lt;/textarea&gt;</span></span>
<span class="line"><span>        @&lt;button type=&quot;submit&quot;&gt;Create&lt;/button&gt;</span></span>
<span class="line"><span>        @&lt;/form&gt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="具有-c-性能的-saas" tabindex="-1">具有 C 性能的 SaaS <a class="header-anchor" href="#具有-c-性能的-saas" aria-label="Permalink to “具有 C 性能的 SaaS”">​</a></h3><p>Vely 语言使得 C 语言在你的网络应用程序中得到充分利用这件事成为可能。多租户 SaaS 应用程序便是从中受益的一个典型用例。</p><p>看一看参考代码示例，写一写代码，然后试试 Vely。</p><p><em>（题图：DA/126624c8-1a47-481b-b149-92273e8e0f4f）</em></p><hr>`,97)),n("p",null,[s[6]||(s[6]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/22/11/build-your-own-saas-vely"},{default:l(()=>[...s[5]||(s[5]=[a("https://opensource.com/article/22/11/build-your-own-saas-vely",-1)])]),_:1})]),n("p",null,[s[11]||(s[11]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/vely"},{default:l(()=>[...s[7]||(s[7]=[a("Sergio Mijatovic",-1)])]),_:1}),s[12]||(s[12]=a(" 选题：",-1)),p(e,{href:"https://github.com/lkxed"},{default:l(()=>[...s[8]||(s[8]=[a("lkxed",-1)])]),_:1}),s[13]||(s[13]=a(" 译者：",-1)),p(e,{href:"https://github.com/Drwhooooo"},{default:l(()=>[...s[9]||(s[9]=[a("Drwhooooo",-1)])]),_:1}),s[14]||(s[14]=a(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[17]||(s[17]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[15]||(s[15]=[a("LCTT",-1)])]),_:1}),s[18]||(s[18]=a(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[16]||(s[16]=[a("Linux中国",-1)])]),_:1}),s[19]||(s[19]=a(" 荣誉推出",-1))])])}const _=i(d,[["render",u]]);export{y as __pageData,_ as default};
