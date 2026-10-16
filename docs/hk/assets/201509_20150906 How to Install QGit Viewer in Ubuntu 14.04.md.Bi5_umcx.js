import{_ as r,a0 as p,w as s,s as l,ao as u,I as o,x as e,a1 as n,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"如何在 Ubuntu 中安裝 QGit 客户端 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Ubuntu 中安裝 QGit 客户端 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Ubuntu 中安裝 QGit 客户端 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Ubuntu 中安裝 QGit 客户端 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150906 How to Install QGit Viewer in Ubuntu 14.04","title":"如何在 Ubuntu 中安裝 QGit 客户端","tag":"201509","desc":""},"relativePath":"201509/20150906 How to Install QGit Viewer in Ubuntu 14.04.md","filePath":"[post].md"}'),d={name:"201509/20150906 How to Install QGit Viewer in Ubuntu 14.04.md"};function g(m,t,b,c,q,h){const i=p("Link");return s(),l("div",null,[t[13]||(t[13]=u(`<h1 id="如何在-ubuntu-中安裝-qgit-客户端" tabindex="-1">如何在 Ubuntu 中安裝 QGit 客户端 <a class="header-anchor" href="#如何在-ubuntu-中安裝-qgit-客户端" aria-label="Permalink to “如何在 Ubuntu 中安裝 QGit 客户端”">​</a></h1><p>QGit是一款由Marco Costalba用Qt和C++寫的開源的圖形界面 Git 客户端。它是一款可以在圖形界面環境下更好地提供瀏覽版本歷史、查看提交記錄和文件補丁的客户端。它利用git命令列來執行並顯示輸出。它有一些常規的功能像瀏覽版本歷史、比較、文件歷史、文件標註、歸檔樹。我們可以格式化並用選中的提交應用補丁，在兩個或多個實例之間拖拽並提交等等。它允許我們用它內置的生成器來創建自定義的按鈕去執行特定的命令。</p><p>這裏有簡單的幾步在Ubuntu 14.04 LTS &quot;Trusty&quot;中編譯並安裝QGit客户端。</p><h3 id="_1-安裝-qt4-庫" tabindex="-1">1. 安裝 QT4 庫 <a class="header-anchor" href="#_1-安裝-qt4-庫" aria-label="Permalink to “1. 安裝 QT4 庫”">​</a></h3><p>首先在ubuntu中運行QGit需要先安裝QT4庫。由於apt是ubuntu默認的包管理器，同時qt4也在官方的倉庫中，因此我們直接用下面的apt-get命令來安裝qt4。</p><pre><code>$ sudo apt-get install qt4-default
</code></pre><h3 id="_2-下載qgit壓縮包" tabindex="-1">2. 下載QGit壓縮包 <a class="header-anchor" href="#_2-下載qgit壓縮包" aria-label="Permalink to “2. 下載QGit壓縮包”">​</a></h3><p>安裝完Qt4之後，我們要安裝git，這樣我們才能在QGit中克隆git倉庫。運行下面的apt-get命令。</p><pre><code>$ sudo apt-get install git
</code></pre><p>現在，我們要使用下面的git命令來克隆QGit客户端的倉庫。</p><pre><code>$ git clone git://repo.or.cz/qgit4/redivivus.git

Cloning into &#39;redivivus&#39;...
remote: Counting objects: 7128, done.
remote: Compressing objects: 100% (2671/2671), done.
remote: Total 7128 (delta 5464), reused 5711 (delta 4438)
Receiving objects: 100% (7128/7128), 2.39 MiB | 470.00 KiB/s, done.
Resolving deltas: 100% (5464/5464), done.
Checking connectivity... done.
</code></pre><h3 id="_3-編譯-qgit" tabindex="-1">3. 編譯 QGit <a class="header-anchor" href="#_3-編譯-qgit" aria-label="Permalink to “3. 編譯 QGit”">​</a></h3><p>克隆之後，我們現在進入redivivus的目錄，並創建我們編譯需要的makefile文件。進入目錄，運行下面的命令。</p><pre><code>$ cd redivivus
</code></pre><p>接下來，我們運行下面的命令從qmake項目文件（qgit.pro）來生成新的Makefile。</p><pre><code>$ qmake qgit.pro
</code></pre><p>生成Makefile之後，我們現在終於可以編譯qgit的源代碼並生成二進制。首先我們要安裝make和g++包用於編譯，因為這是一個用C++寫的程序。</p><pre><code>$ sudo apt-get install make g++
</code></pre><p>現在，我們要用make命令來編譯代碼了。</p><pre><code>$ make
</code></pre><h3 id="_4-安裝-qgit" tabindex="-1">4. 安裝 QGit <a class="header-anchor" href="#_4-安裝-qgit" aria-label="Permalink to “4. 安裝 QGit”">​</a></h3><p>成功編譯QGit的源碼之後，我們就要在Ubuntu 14.04中安裝它了，這樣就可以在系統中執行它。因此我們將運行下面的命令。</p><pre><code>$ sudo make install

cd src/ &amp;&amp; make -f Makefile install
make[1]: Entering directory \`/home/arun/redivivus/src&#39;
make -f Makefile.Release install
make[2]: Entering directory \`/home/arun/redivivus/src&#39;
install -m 755 -p &quot;../bin/qgit&quot; &quot;/usr/lib/x86_64-linux-gnu/qt4/bin/qgit&quot;
strip &quot;/usr/lib/x86_64-linux-gnu/qt4/bin/qgit&quot;
make[2]: Leaving directory \`/home/arun/redivivus/src&#39;
make[1]: Leaving directory \`/home/arun/redivivus/src&#39;
</code></pre><p>接下來，我們需要從bin目錄下複製qgit的二進制文件到/usr/bin/，這樣我們就可以全局運行它了。</p><pre><code>$ sudo cp bin/qgit /usr/bin/
</code></pre><h3 id="_5-創建桌面文件" tabindex="-1">5. 創建桌面文件 <a class="header-anchor" href="#_5-創建桌面文件" aria-label="Permalink to “5. 創建桌面文件”">​</a></h3><p>既然我們已經在ubuntu中成功安裝了qgit，我們來創建一個桌面文件，這樣QGit就可以在我們桌面環境中的菜單或者啓動器中找到了。要做到這點，我們要在/usr/share/applications/創建一個新文件叫qgit.desktop。</p><pre><code>$ sudo nano /usr/share/applications/qgit.desktop
</code></pre><p>接下來複制下面的行到文件中。</p><pre><code>[Desktop Entry]
Name=qgit
GenericName=git 圖形界面 viewer
Exec=qgit
Icon=qgit
Type=Application
Comment=git 圖形界面 viewer
Terminal=false
MimeType=inode/directory;
Categories=Qt;Development;RevisionControl;
</code></pre><p>完成之後，保存並退出。</p><h3 id="_6-運行-qgit-客户端" tabindex="-1">6. 運行 QGit 客户端 <a class="header-anchor" href="#_6-運行-qgit-客户端" aria-label="Permalink to “6. 運行 QGit 客户端”">​</a></h3><p>QGit安裝完成之後，我們現在就可以從任何啓動器或者程序菜單中啓動它了。要在終端下面運行QGit，我們可以像下面那樣。</p><pre><code>$ qgit
</code></pre><p>這會打開基於Qt4框架圖形界面模式的QGit。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/qgit-viewer.png" alt="QGit Viewer"></p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>QGit是一個很棒的基於QT的git客户端。它可以在Linux、MAC OSX和 Microsoft Windows所有這三個平台中運行。它幫助我們很容易地瀏覽歷史、版本、分支等等git倉庫提供的信息。它減少了使用命令列的方式去執行諸如瀏覽版本、歷史、比較功能的需求，並用圖形化的方式來簡化了這些任務。最新的qgit版本也在默認倉庫中，你可以使用 <strong>apt-get install qgit</strong> 命令來安裝。因此，QGit用它簡單的圖形界面使得我們的工作更加簡單和快速。</p><hr>`,39)),o("p",null,[t[1]||(t[1]=e("via: ",-1)),n(i,{href:"http://linoxide.com/ubuntu-how-to/install-qgit-viewer-ubuntu-14-04/"},{default:a(()=>[...t[0]||(t[0]=[e("http://linoxide.com/ubuntu-how-to/install-qgit-viewer-ubuntu-14-04/",-1)])]),_:1})]),o("p",null,[t[5]||(t[5]=e("作者：",-1)),n(i,{href:"http://linoxide.com/author/arunp/"},{default:a(()=>[...t[2]||(t[2]=[e("Arun Pyasi",-1)])]),_:1}),t[6]||(t[6]=e(" 譯者：",-1)),n(i,{href:"https://github.com/geekpi"},{default:a(()=>[...t[3]||(t[3]=[e("geekpi",-1)])]),_:1}),t[7]||(t[7]=e(" 校對：",-1)),n(i,{href:"https://github.com/wxy"},{default:a(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),o("p",null,[t[10]||(t[10]=e("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原創編譯，",-1)),n(i,{href:"https://linux.cn/"},{default:a(()=>[...t[9]||(t[9]=[e("Linux中國",-1)])]),_:1}),t[12]||(t[12]=e(" 榮譽推出",-1))])])}const G=r(d,[["render",g]]);export{k as __pageData,G as default};
