import{_ as r,a0 as s,w as i,s as l,ao as d,I as a,x as t,a1 as p,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"如何在命令列中使用 ftp 命令上傳和下載文件 | LCTT x X-CMD","titleTemplate":false,"description":"如何在命令列中使用 ftp 命令上傳和下載文件 | LCTT (201512) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在命令列中使用 ftp 命令上傳和下載文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在命令列中使用 ftp 命令上傳和下載文件 | LCTT (201512) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201512/20151202 How to use the Linux ftp command to up- and download files on the shell","title":"如何在命令列中使用 ftp 命令上傳和下載文件","tag":"201512","desc":""},"relativePath":"201512/20151202 How to use the Linux ftp command to up- and download files on the shell.md","filePath":"[post].md"}'),h={name:"201512/20151202 How to use the Linux ftp command to up- and download files on the shell.md"};function c(f,e,m,u,g,w){const o=s("Link");return i(),l("div",null,[e[11]||(e[11]=d(`<h1 id="如何在命令列中使用-ftp-命令上傳和下載文件" tabindex="-1">如何在命令列中使用 ftp 命令上傳和下載文件 <a class="header-anchor" href="#如何在命令列中使用-ftp-命令上傳和下載文件" aria-label="Permalink to “如何在命令列中使用 ftp 命令上傳和下載文件”">​</a></h1><p>本文中，介紹在 Linux shell 中如何使用 ftp 命令。包括如何連接 FTP 服務器，上傳或下載文件以及創建文件夾。儘管現在有許多不錯的 FTP 桌面應用，但是在服務器、SSH、遠程會話中命令列 ftp 命令還是有很多應用的。比如。需要服務器從 ftp 倉庫拉取備份。</p><h3 id="步驟-1-建立-ftp-連接" tabindex="-1">步驟 1: 建立 FTP 連接 <a class="header-anchor" href="#步驟-1-建立-ftp-連接" aria-label="Permalink to “步驟 1: 建立 FTP 連接”">​</a></h3><p>想要連接 FTP 服務器，在命令上中先輸入<code>ftp</code>然後空格跟上 FTP 服務器的域名 &#39;domain.com&#39; 或者 IP 地址</p><h4 id="例如" tabindex="-1">例如: <a class="header-anchor" href="#例如" aria-label="Permalink to “例如:”">​</a></h4><pre><code>ftp domain.com

ftp 192.168.0.1

ftp user@ftpdomain.com
</code></pre><p><strong>注意: 本例中使用匿名服務器。</strong></p><p>替換下面例子中 IP 或域名為你的服務器地址。</p><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/ftpanonymous.png" alt="FTP 登錄"></p><h3 id="步驟-2-使用用户名密碼登錄" tabindex="-1">步驟 2: 使用用户名密碼登錄 <a class="header-anchor" href="#步驟-2-使用用户名密碼登錄" aria-label="Permalink to “步驟 2: 使用用户名密碼登錄”">​</a></h3><p>絕大多數的 FTP 服務器是使用密碼保護的，因此這些 FTP 服務器會詢問&#39;<strong>username</strong>&#39;和&#39;<strong>password</strong>&#39;.</p><p>如果你連接到被稱作匿名 FTP 服務器（LCTT 譯註：即，並不需要你有真實的用户信息即可使用的 FTP 服務器稱之為匿名 FTP 服務器），可以嘗試<code>anonymous</code>作為用户名以及使用空密碼：</p><pre><code>Name: anonymous

Password:
</code></pre><p>之後，終端會返回如下的信息：</p><pre><code>230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp&gt;
</code></pre><p>登錄成功。</p><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/login.png" alt="FTP 登錄成功"></p><h3 id="步驟-3-目錄操作" tabindex="-1">步驟 3: 目錄操作 <a class="header-anchor" href="#步驟-3-目錄操作" aria-label="Permalink to “步驟 3: 目錄操作”">​</a></h3><p>FTP 命令可以列出、移動和創建文件夾，如同我們在本地使用我們的電腦一樣。<code>ls</code>可以打印目錄列表，<code>cd</code>可以改變目錄，<code>mkdir</code>可以創建文件夾。</p><h4 id="使用安全設置列出目錄" tabindex="-1">使用安全設置列出目錄 <a class="header-anchor" href="#使用安全設置列出目錄" aria-label="Permalink to “使用安全設置列出目錄”">​</a></h4><pre><code>ftp&gt; ls
</code></pre><p>服務器將返回：</p><pre><code>200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
directory list
....
....
226 Directory send OK.
</code></pre><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/listing.png" alt="打印目錄"></p><h4 id="改變目錄" tabindex="-1">改變目錄: <a class="header-anchor" href="#改變目錄" aria-label="Permalink to “改變目錄:”">​</a></h4><p>改變目錄可以輸入：</p><pre><code>ftp&gt; cd directory
</code></pre><p>服務器將會返回：</p><pre><code>250 Directory succesfully changed.
</code></pre><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/directory.png" alt="FTP中改變目錄"></p><h3 id="步驟-4-使用-ftp-下載文件" tabindex="-1">步驟 4: 使用 FTP 下載文件 <a class="header-anchor" href="#步驟-4-使用-ftp-下載文件" aria-label="Permalink to “步驟 4: 使用 FTP 下載文件”">​</a></h3><p>在下載一個文件之前，我們首先需要使用<code>lcd</code>命令設定本地接受目錄位置。</p><pre><code>lcd /home/user/yourdirectoryname
</code></pre><p>如果你不指定下載目錄，文件將會下載到你登錄 FTP 時候的工作目錄。</p><p>現在，我們可以使用命令 get 來下載文件，比如：</p><pre><code>get file
</code></pre><p>文件會保存在使用lcd命令設置的目錄位置。</p><p>服務器返回消息：</p><pre><code>local: file remote: file
200 PORT command successful. Consider using PASV.
150 Opening BINARY mode data connection for file (xxx bytes).
226 File send OK.
XXX bytes received in x.xx secs (x.xxx MB/s).
</code></pre><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/gettingfile.png" alt="使用FTP下載文件"></p><p>下載多個文件可以使用通配符及 <code>mget</code> 命令。例如，下面這個例子我打算下載所有以 .xls 結尾的文件。</p><pre><code>mget *.xls
</code></pre><h3 id="步驟-5-使用-ftp-上傳文件" tabindex="-1">步驟 5: 使用 FTP 上傳文件 <a class="header-anchor" href="#步驟-5-使用-ftp-上傳文件" aria-label="Permalink to “步驟 5: 使用 FTP 上傳文件”">​</a></h3><p>完成 FTP 連接後，FTP 同樣可以上傳文件</p><p>使用 <code>put</code>命令上傳文件：</p><pre><code>put file
</code></pre><p>當文件不再當前本地目錄下的時候，可以使用絕對路徑：</p><pre><code>put /path/file
</code></pre><p>同樣，可以上傳多個文件：</p><pre><code>mput *.xls
</code></pre><h3 id="步驟-6-關閉-ftp-連接" tabindex="-1">步驟 6: 關閉 FTP 連接 <a class="header-anchor" href="#步驟-6-關閉-ftp-連接" aria-label="Permalink to “步驟 6: 關閉 FTP 連接”">​</a></h3><p>完成FTP工作後，為了安全起見需要關閉連接。有三個命令可以關閉連接：</p><pre><code>bye

exit

quit
</code></pre><p>任意一個命令可以斷開FTP服務器連接並返回：</p><pre><code>221 Goodbye
</code></pre><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/goodbye.png" alt=""></p><p>需要更多幫助，在使用 ftp 命令連接到服務器後，可以使用<code>help</code>獲得更多幫助。</p><p><img src="https://www.howtoforge.com/images/how-to-use-ftp-in-the-linux-shell/big/helpwindow.png" alt=""></p><hr>`,59)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),p(o,{href:"https://www.howtoforge.com/tutorial/how-to-use-ftp-on-the-linux-shell/"},{default:n(()=>[...e[0]||(e[0]=[t("https://www.howtoforge.com/tutorial/how-to-use-ftp-on-the-linux-shell/",-1)])]),_:1})]),a("p",null,[e[4]||(e[4]=t("譯者：",-1)),p(o,{href:"http://vicyu.net"},{default:n(()=>[...e[2]||(e[2]=[t("VicYu",-1)])]),_:1}),e[5]||(e[5]=t(" 校對：",-1)),p(o,{href:"https://github.com/wxy"},{default:n(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[8]||(e[8]=t("本文由 ",-1)),p(o,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原創編譯，",-1)),p(o,{href:"https://linux.cn/"},{default:n(()=>[...e[7]||(e[7]=[t("Linux中國",-1)])]),_:1}),e[10]||(e[10]=t(" 榮譽推出",-1))])])}const b=r(h,[["render",c]]);export{P as __pageData,b as default};
