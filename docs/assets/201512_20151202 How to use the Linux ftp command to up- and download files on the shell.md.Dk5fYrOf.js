import{_ as r,a0 as s,w as i,s as l,ao as d,I as a,x as t,a1 as p,A as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"如何在命令行中使用 ftp 命令上传和下载文件 | LCTT x X-CMD","titleTemplate":false,"description":"如何在命令行中使用 ftp 命令上传和下载文件 | LCTT (201512) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在命令行中使用 ftp 命令上传和下载文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在命令行中使用 ftp 命令上传和下载文件 | LCTT (201512) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201512/20151202 How to use the Linux ftp command to up- and download files on the shell","title":"如何在命令行中使用 ftp 命令上传和下载文件","tag":"201512","desc":""},"relativePath":"201512/20151202 How to use the Linux ftp command to up- and download files on the shell.md","filePath":"[post].md"}'),h={name:"201512/20151202 How to use the Linux ftp command to up- and download files on the shell.md"};function c(f,e,m,u,g,w){const o=s("Link");return i(),l("div",null,[e[11]||(e[11]=d(`<h1 id="如何在命令行中使用-ftp-命令上传和下载文件" tabindex="-1">如何在命令行中使用 ftp 命令上传和下载文件 <a class="header-anchor" href="#如何在命令行中使用-ftp-命令上传和下载文件" aria-label="Permalink to “如何在命令行中使用 ftp 命令上传和下载文件”">​</a></h1><p>本文中，介绍在 Linux shell 中如何使用 ftp 命令。包括如何连接 FTP 服务器，上传或下载文件以及创建文件夹。尽管现在有许多不错的 FTP 桌面应用，但是在服务器、SSH、远程会话中命令行 ftp 命令还是有很多应用的。比如。需要服务器从 ftp 仓库拉取备份。</p><h3 id="步骤-1-建立-ftp-连接" tabindex="-1">步骤 1: 建立 FTP 连接 <a class="header-anchor" href="#步骤-1-建立-ftp-连接" aria-label="Permalink to “步骤 1: 建立 FTP 连接”">​</a></h3><p>想要连接 FTP 服务器，在命令上中先输入<code>ftp</code>然后空格跟上 FTP 服务器的域名 &#39;domain.com&#39; 或者 IP 地址</p><h4 id="例如" tabindex="-1">例如: <a class="header-anchor" href="#例如" aria-label="Permalink to “例如:”">​</a></h4><pre><code>ftp domain.com

ftp 192.168.0.1

ftp user@ftpdomain.com
</code></pre><p><strong>注意: 本例中使用匿名服务器。</strong></p><p>替换下面例子中 IP 或域名为你的服务器地址。</p><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/ftpanonymous.png" alt="FTP 登录"></p><h3 id="步骤-2-使用用户名密码登录" tabindex="-1">步骤 2: 使用用户名密码登录 <a class="header-anchor" href="#步骤-2-使用用户名密码登录" aria-label="Permalink to “步骤 2: 使用用户名密码登录”">​</a></h3><p>绝大多数的 FTP 服务器是使用密码保护的，因此这些 FTP 服务器会询问&#39;<strong>username</strong>&#39;和&#39;<strong>password</strong>&#39;.</p><p>如果你连接到被称作匿名 FTP 服务器（LCTT 译注：即，并不需要你有真实的用户信息即可使用的 FTP 服务器称之为匿名 FTP 服务器），可以尝试<code>anonymous</code>作为用户名以及使用空密码：</p><pre><code>Name: anonymous

Password:
</code></pre><p>之后，终端会返回如下的信息：</p><pre><code>230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp&gt;
</code></pre><p>登录成功。</p><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/login.png" alt="FTP 登录成功"></p><h3 id="步骤-3-目录操作" tabindex="-1">步骤 3: 目录操作 <a class="header-anchor" href="#步骤-3-目录操作" aria-label="Permalink to “步骤 3: 目录操作”">​</a></h3><p>FTP 命令可以列出、移动和创建文件夹，如同我们在本地使用我们的电脑一样。<code>ls</code>可以打印目录列表，<code>cd</code>可以改变目录，<code>mkdir</code>可以创建文件夹。</p><h4 id="使用安全设置列出目录" tabindex="-1">使用安全设置列出目录 <a class="header-anchor" href="#使用安全设置列出目录" aria-label="Permalink to “使用安全设置列出目录”">​</a></h4><pre><code>ftp&gt; ls
</code></pre><p>服务器将返回：</p><pre><code>200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
directory list
....
....
226 Directory send OK.
</code></pre><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/listing.png" alt="打印目录"></p><h4 id="改变目录" tabindex="-1">改变目录: <a class="header-anchor" href="#改变目录" aria-label="Permalink to “改变目录:”">​</a></h4><p>改变目录可以输入：</p><pre><code>ftp&gt; cd directory
</code></pre><p>服务器将会返回：</p><pre><code>250 Directory succesfully changed.
</code></pre><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/directory.png" alt="FTP中改变目录"></p><h3 id="步骤-4-使用-ftp-下载文件" tabindex="-1">步骤 4: 使用 FTP 下载文件 <a class="header-anchor" href="#步骤-4-使用-ftp-下载文件" aria-label="Permalink to “步骤 4: 使用 FTP 下载文件”">​</a></h3><p>在下载一个文件之前，我们首先需要使用<code>lcd</code>命令设定本地接受目录位置。</p><pre><code>lcd /home/user/yourdirectoryname
</code></pre><p>如果你不指定下载目录，文件将会下载到你登录 FTP 时候的工作目录。</p><p>现在，我们可以使用命令 get 来下载文件，比如：</p><pre><code>get file
</code></pre><p>文件会保存在使用lcd命令设置的目录位置。</p><p>服务器返回消息：</p><pre><code>local: file remote: file
200 PORT command successful. Consider using PASV.
150 Opening BINARY mode data connection for file (xxx bytes).
226 File send OK.
XXX bytes received in x.xx secs (x.xxx MB/s).
</code></pre><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/gettingfile.png" alt="使用FTP下载文件"></p><p>下载多个文件可以使用通配符及 <code>mget</code> 命令。例如，下面这个例子我打算下载所有以 .xls 结尾的文件。</p><pre><code>mget *.xls
</code></pre><h3 id="步骤-5-使用-ftp-上传文件" tabindex="-1">步骤 5: 使用 FTP 上传文件 <a class="header-anchor" href="#步骤-5-使用-ftp-上传文件" aria-label="Permalink to “步骤 5: 使用 FTP 上传文件”">​</a></h3><p>完成 FTP 连接后，FTP 同样可以上传文件</p><p>使用 <code>put</code>命令上传文件：</p><pre><code>put file
</code></pre><p>当文件不再当前本地目录下的时候，可以使用绝对路径：</p><pre><code>put /path/file
</code></pre><p>同样，可以上传多个文件：</p><pre><code>mput *.xls
</code></pre><h3 id="步骤-6-关闭-ftp-连接" tabindex="-1">步骤 6: 关闭 FTP 连接 <a class="header-anchor" href="#步骤-6-关闭-ftp-连接" aria-label="Permalink to “步骤 6: 关闭 FTP 连接”">​</a></h3><p>完成FTP工作后，为了安全起见需要关闭连接。有三个命令可以关闭连接：</p><pre><code>bye

exit

quit
</code></pre><p>任意一个命令可以断开FTP服务器连接并返回：</p><pre><code>221 Goodbye
</code></pre><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/goodbye.png" alt=""></p><p>需要更多帮助，在使用 ftp 命令连接到服务器后，可以使用<code>help</code>获得更多帮助。</p><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/helpwindow.png" alt=""></p><hr>`,59)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),p(o,{href:"https://www.howtoforge.com/tutorial/how-to-use-ftp-on-the-linux-shell/"},{default:n(()=>[...e[0]||(e[0]=[t("https://www.howtoforge.com/tutorial/how-to-use-ftp-on-the-linux-shell/",-1)])]),_:1})]),a("p",null,[e[4]||(e[4]=t("译者：",-1)),p(o,{href:"http://vicyu.net"},{default:n(()=>[...e[2]||(e[2]=[t("VicYu",-1)])]),_:1}),e[5]||(e[5]=t(" 校对：",-1)),p(o,{href:"https://github.com/wxy"},{default:n(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[8]||(e[8]=t("本文由 ",-1)),p(o,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原创编译，",-1)),p(o,{href:"https://linux.cn/"},{default:n(()=>[...e[7]||(e[7]=[t("Linux中国",-1)])]),_:1}),e[10]||(e[10]=t(" 荣誉推出",-1))])])}const b=r(h,[["render",c]]);export{P as __pageData,b as default};
