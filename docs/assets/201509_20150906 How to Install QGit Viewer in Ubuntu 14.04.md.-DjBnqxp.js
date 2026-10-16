import{_ as r,a0 as p,w as s,s as l,ao as u,I as o,x as e,a1 as n,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"如何在 Ubuntu 中安装 QGit 客户端 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Ubuntu 中安装 QGit 客户端 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Ubuntu 中安装 QGit 客户端 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Ubuntu 中安装 QGit 客户端 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150906 How to Install QGit Viewer in Ubuntu 14.04","title":"如何在 Ubuntu 中安装 QGit 客户端","tag":"201509","desc":""},"relativePath":"201509/20150906 How to Install QGit Viewer in Ubuntu 14.04.md","filePath":"[post].md"}'),d={name:"201509/20150906 How to Install QGit Viewer in Ubuntu 14.04.md"};function g(m,t,b,c,q,h){const i=p("Link");return s(),l("div",null,[t[13]||(t[13]=u(`<h1 id="如何在-ubuntu-中安装-qgit-客户端" tabindex="-1">如何在 Ubuntu 中安装 QGit 客户端 <a class="header-anchor" href="#如何在-ubuntu-中安装-qgit-客户端" aria-label="Permalink to “如何在 Ubuntu 中安装 QGit 客户端”">​</a></h1><p>QGit是一款由Marco Costalba用Qt和C++写的开源的图形界面 Git 客户端。它是一款可以在图形界面环境下更好地提供浏览版本历史、查看提交记录和文件补丁的客户端。它利用git命令行来执行并显示输出。它有一些常规的功能像浏览版本历史、比较、文件历史、文件标注、归档树。我们可以格式化并用选中的提交应用补丁，在两个或多个实例之间拖拽并提交等等。它允许我们用它内置的生成器来创建自定义的按钮去执行特定的命令。</p><p>这里有简单的几步在Ubuntu 14.04 LTS &quot;Trusty&quot;中编译并安装QGit客户端。</p><h3 id="_1-安装-qt4-库" tabindex="-1">1. 安装 QT4 库 <a class="header-anchor" href="#_1-安装-qt4-库" aria-label="Permalink to “1. 安装 QT4 库”">​</a></h3><p>首先在ubuntu中运行QGit需要先安装QT4库。由于apt是ubuntu默认的包管理器，同时qt4也在官方的仓库中，因此我们直接用下面的apt-get命令来安装qt4。</p><pre><code>$ sudo apt-get install qt4-default
</code></pre><h3 id="_2-下载qgit压缩包" tabindex="-1">2. 下载QGit压缩包 <a class="header-anchor" href="#_2-下载qgit压缩包" aria-label="Permalink to “2. 下载QGit压缩包”">​</a></h3><p>安装完Qt4之后，我们要安装git，这样我们才能在QGit中克隆git仓库。运行下面的apt-get命令。</p><pre><code>$ sudo apt-get install git
</code></pre><p>现在，我们要使用下面的git命令来克隆QGit客户端的仓库。</p><pre><code>$ git clone git://repo.or.cz/qgit4/redivivus.git

Cloning into &#39;redivivus&#39;...
remote: Counting objects: 7128, done.
remote: Compressing objects: 100% (2671/2671), done.
remote: Total 7128 (delta 5464), reused 5711 (delta 4438)
Receiving objects: 100% (7128/7128), 2.39 MiB | 470.00 KiB/s, done.
Resolving deltas: 100% (5464/5464), done.
Checking connectivity... done.
</code></pre><h3 id="_3-编译-qgit" tabindex="-1">3. 编译 QGit <a class="header-anchor" href="#_3-编译-qgit" aria-label="Permalink to “3. 编译 QGit”">​</a></h3><p>克隆之后，我们现在进入redivivus的目录，并创建我们编译需要的makefile文件。进入目录，运行下面的命令。</p><pre><code>$ cd redivivus
</code></pre><p>接下来，我们运行下面的命令从qmake项目文件（qgit.pro）来生成新的Makefile。</p><pre><code>$ qmake qgit.pro
</code></pre><p>生成Makefile之后，我们现在终于可以编译qgit的源代码并生成二进制。首先我们要安装make和g++包用于编译，因为这是一个用C++写的程序。</p><pre><code>$ sudo apt-get install make g++
</code></pre><p>现在，我们要用make命令来编译代码了。</p><pre><code>$ make
</code></pre><h3 id="_4-安装-qgit" tabindex="-1">4. 安装 QGit <a class="header-anchor" href="#_4-安装-qgit" aria-label="Permalink to “4. 安装 QGit”">​</a></h3><p>成功编译QGit的源码之后，我们就要在Ubuntu 14.04中安装它了，这样就可以在系统中执行它。因此我们将运行下面的命令。</p><pre><code>$ sudo make install

cd src/ &amp;&amp; make -f Makefile install
make[1]: Entering directory \`/home/arun/redivivus/src&#39;
make -f Makefile.Release install
make[2]: Entering directory \`/home/arun/redivivus/src&#39;
install -m 755 -p &quot;../bin/qgit&quot; &quot;/usr/lib/x86_64-linux-gnu/qt4/bin/qgit&quot;
strip &quot;/usr/lib/x86_64-linux-gnu/qt4/bin/qgit&quot;
make[2]: Leaving directory \`/home/arun/redivivus/src&#39;
make[1]: Leaving directory \`/home/arun/redivivus/src&#39;
</code></pre><p>接下来，我们需要从bin目录下复制qgit的二进制文件到/usr/bin/，这样我们就可以全局运行它了。</p><pre><code>$ sudo cp bin/qgit /usr/bin/
</code></pre><h3 id="_5-创建桌面文件" tabindex="-1">5. 创建桌面文件 <a class="header-anchor" href="#_5-创建桌面文件" aria-label="Permalink to “5. 创建桌面文件”">​</a></h3><p>既然我们已经在ubuntu中成功安装了qgit，我们来创建一个桌面文件，这样QGit就可以在我们桌面环境中的菜单或者启动器中找到了。要做到这点，我们要在/usr/share/applications/创建一个新文件叫qgit.desktop。</p><pre><code>$ sudo nano /usr/share/applications/qgit.desktop
</code></pre><p>接下来复制下面的行到文件中。</p><pre><code>[Desktop Entry]
Name=qgit
GenericName=git 图形界面 viewer
Exec=qgit
Icon=qgit
Type=Application
Comment=git 图形界面 viewer
Terminal=false
MimeType=inode/directory;
Categories=Qt;Development;RevisionControl;
</code></pre><p>完成之后，保存并退出。</p><h3 id="_6-运行-qgit-客户端" tabindex="-1">6. 运行 QGit 客户端 <a class="header-anchor" href="#_6-运行-qgit-客户端" aria-label="Permalink to “6. 运行 QGit 客户端”">​</a></h3><p>QGit安装完成之后，我们现在就可以从任何启动器或者程序菜单中启动它了。要在终端下面运行QGit，我们可以像下面那样。</p><pre><code>$ qgit
</code></pre><p>这会打开基于Qt4框架图形界面模式的QGit。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/qgit-viewer.png" alt="QGit Viewer"></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>QGit是一个很棒的基于QT的git客户端。它可以在Linux、MAC OSX和 Microsoft Windows所有这三个平台中运行。它帮助我们很容易地浏览历史、版本、分支等等git仓库提供的信息。它减少了使用命令行的方式去执行诸如浏览版本、历史、比较功能的需求，并用图形化的方式来简化了这些任务。最新的qgit版本也在默认仓库中，你可以使用 <strong>apt-get install qgit</strong> 命令来安装。因此，QGit用它简单的图形界面使得我们的工作更加简单和快速。</p><hr>`,39)),o("p",null,[t[1]||(t[1]=e("via: ",-1)),n(i,{href:"http://linoxide.com/ubuntu-how-to/install-qgit-viewer-ubuntu-14-04/"},{default:a(()=>[...t[0]||(t[0]=[e("http://linoxide.com/ubuntu-how-to/install-qgit-viewer-ubuntu-14-04/",-1)])]),_:1})]),o("p",null,[t[5]||(t[5]=e("作者：",-1)),n(i,{href:"http://linoxide.com/author/arunp/"},{default:a(()=>[...t[2]||(t[2]=[e("Arun Pyasi",-1)])]),_:1}),t[6]||(t[6]=e(" 译者：",-1)),n(i,{href:"https://github.com/geekpi"},{default:a(()=>[...t[3]||(t[3]=[e("geekpi",-1)])]),_:1}),t[7]||(t[7]=e(" 校对：",-1)),n(i,{href:"https://github.com/wxy"},{default:a(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),o("p",null,[t[10]||(t[10]=e("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原创编译，",-1)),n(i,{href:"https://linux.cn/"},{default:a(()=>[...t[9]||(t[9]=[e("Linux中国",-1)])]),_:1}),t[12]||(t[12]=e(" 荣誉推出",-1))])])}const G=r(d,[["render",g]]);export{k as __pageData,G as default};
