import{_ as d,a0 as s,w as a,s as l,I as t,x as e,a1 as u,A as n,ao as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const c=JSON.parse('{"title":"如何在 Linux 中安裝 Visual Studio Code | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 中安裝 Visual Studio Code | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 中安裝 Visual Studio Code | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 中安裝 Visual Studio Code | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150821 How to Install Visual Studio Code in Linux","title":"如何在 Linux 中安裝 Visual Studio Code","tag":"201508","desc":""},"relativePath":"201508/20150821 How to Install Visual Studio Code in Linux.md","filePath":"[post].md"}'),r={name:"201508/20150821 How to Install Visual Studio Code in Linux.md"};function m(C,o,x,S,b,g){const i=s("Link");return a(),l("div",null,[o[21]||(o[21]=t("h1",{id:"如何在-linux-中安裝-visual-studio-code",tabindex:"-1"},[e("如何在 Linux 中安裝 Visual Studio Code "),t("a",{class:"header-anchor",href:"#如何在-linux-中安裝-visual-studio-code","aria-label":"Permalink to “如何在 Linux 中安裝 Visual Studio Code”"},"​")],-1)),o[22]||(o[22]=t("p",null,"大家好，今天我們一起來學習如何在 Linux 發行版中安裝 Visual Studio Code。Visual Studio Code 是基於 Electron 優化代碼後的編輯器，後者是基於 Chromium 的一款軟件，用於為桌面系統發佈 io.js 應用。Visual Studio Code 是微軟開發的支持包括 Linux 在內的全平台代碼編輯器和文本編輯器。它是免費軟件但不開源，在專有軟件許可條款下發布。它是可以用於我們日常使用的超級強大和快速的代碼編輯器。Visual Studio Code 有很多很酷的功能，例如導航、智能感知支持、語法高亮、括號匹配、自動補全、代碼片段、支持自定義鍵盤綁定、並且支持多種語言，例如 Python、C++、Jade、PHP、XML、Batch、F#、DockerFile、Coffee Script、Java、HandleBars、 R、 Objective-C、 PowerShell、 Luna、 Visual Basic、 .Net、 Asp.Net、 C#、 JSON、 Node.js、 Javascript、 HTML、 CSS、 Less、 Sass 和 Markdown。Visual Studio Code 集成了包管理器、庫、構建，以及其它通用任務，以加速日常的工作流。Visual Studio Code 中最受歡迎的是它的調試功能，它包括流式支持 Node.js 的預覽調試。",-1)),o[23]||(o[23]=t("p",null,"注意：請注意 Visual Studio Code 只支持 64 位的 Linux 發行版。",-1)),o[24]||(o[24]=t("p",null,"下面是在所有 Linux 發行版中安裝 Visual Studio Code 的幾個簡單步驟。",-1)),o[25]||(o[25]=t("h3",{id:"_1-下載-visual-studio-code-軟件包",tabindex:"-1"},[e("1. 下載 Visual Studio Code 軟件包 "),t("a",{class:"header-anchor",href:"#_1-下載-visual-studio-code-軟件包","aria-label":"Permalink to “1. 下載 Visual Studio Code 軟件包”"},"​")],-1)),t("p",null,[o[1]||(o[1]=e("首先，我們要從微軟服務器中下載 64 位 Linux 操作系統的 Visual Studio Code 安裝包，鏈接是 ",-1)),u(i,{href:"http://go.microsoft.com/fwlink/?LinkID=534108"},{default:n(()=>[...o[0]||(o[0]=[e("http://go.microsoft.com/fwlink/?LinkID=534108",-1)])]),_:1}),o[2]||(o[2]=e("。這裏我們使用 wget 下載並保存到 tmp/VSCODE 目錄。",-1))]),o[26]||(o[26]=p(`<pre><code># mkdir /tmp/vscode; cd /tmp/vscode/
# wget https://az764295.vo.msecnd.net/public/0.3.0/VSCode-linux-x64.zip

--2015-06-24 06:02:54-- https://az764295.vo.msecnd.net/public/0.3.0/VSCode-linux-x64.zip
Resolving az764295.vo.msecnd.net (az764295.vo.msecnd.net)... 93.184.215.200, 2606:2800:11f:179a:1972:2405:35b:459
Connecting to az764295.vo.msecnd.net (az764295.vo.msecnd.net)|93.184.215.200|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 64992671 (62M) [application/octet-stream]
Saving to: ‘VSCode-linux-x64.zip’
100%[================================================&gt;] 64,992,671 14.9MB/s in 4.1s
2015-06-24 06:02:58 (15.0 MB/s) - ‘VSCode-linux-x64.zip’ saved [64992671/64992671]
</code></pre><h3 id="_2-提取軟件包" tabindex="-1">2. 提取軟件包 <a class="header-anchor" href="#_2-提取軟件包" aria-label="Permalink to “2. 提取軟件包”">​</a></h3><p>現在，下載好 Visual Studio Code 的 zip 壓縮包之後，我們打算使用 unzip 命令解壓它。我們要在終端或者控制台中運行以下命令。</p><pre><code># unzip /tmp/vscode/VSCode-linux-x64.zip -d /opt/
</code></pre><p>注意：如果我們還沒有安裝 unzip，我們首先需要通過軟件包管理器安裝它。如果你運行的是 Ubuntu，使用 apt-get，如果運行的是 Fedora、CentOS、可以用 dnf 或 yum 安裝它。</p><h3 id="_3-運行-visual-studio-code" tabindex="-1">3. 運行 Visual Studio Code <a class="header-anchor" href="#_3-運行-visual-studio-code" aria-label="Permalink to “3. 運行 Visual Studio Code”">​</a></h3><p>展開軟件包之後，我們可以直接運行一個名為 Code 的文件啓動 Visual Studio Code。</p><pre><code># sudo chmod +x /opt/VSCode-linux-x64/Code
# sudo /opt/VSCode-linux-x64/Code
</code></pre><p>如果我們想通過終端在任何地方啓動 Code，我們就需要創建 /opt/vscode/Code 的一個鏈接 /usr/local/bin/code。</p><pre><code># ln -s /opt/VSCode-linux-x64/Code /usr/local/bin/code
</code></pre><p>現在，我們就可以在終端中運行以下命令啓動 Visual Studio Code 了。</p><pre><code># code .
</code></pre><h3 id="_4-創建桌面啓動" tabindex="-1">4. 創建桌面啓動 <a class="header-anchor" href="#_4-創建桌面啓動" aria-label="Permalink to “4. 創建桌面啓動”">​</a></h3><p>下一步，成功展開 Visual Studio Code 軟件包之後，我們打算創建桌面啓動程序，使得根據不同桌面環境能夠從啓動器、菜單、桌面啓動它。首先我們要複製一個圖標文件到 /usr/share/icons/ 目錄。</p><pre><code># cp /opt/VSCode-linux-x64/resources/app/vso.png /usr/share/icons/
</code></pre><p>然後，我們創建一個桌面啓動程序，文件擴展名為 .desktop。這裏我們使用喜歡的文本編輯器在 /tmp/VSCODE/ 目錄中創建名為 visualstudiocode.desktop 的文件。</p><pre><code># vi /tmp/vscode/visualstudiocode.desktop
</code></pre><p>然後，粘貼下面的行到那個文件中。</p><pre><code>[Desktop Entry]
Name=Visual Studio Code
Comment=Multi-platform code editor for Linux
Exec=/opt/VSCode-linux-x64/Code
Icon=/usr/share/icons/vso.png
Type=Application
StartupNotify=true
Categories=TextEditor;Development;Utility;
MimeType=text/plain;
</code></pre><p>創建完桌面文件之後，我們會複製這個桌面文件到 /usr/share/applications/ 目錄，這樣啓動器和菜單中就可以單擊啓動 Visual Studio Code 了。</p><pre><code># cp /tmp/vscode/visualstudiocode.desktop /usr/share/applications/
</code></pre><p>完成之後，我們可以在啓動器或者菜單中啓動它。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/visual-studio-code.png" alt="Visual Studio Code"></p><h3 id="在-ubuntu-中-visual-studio-code" tabindex="-1">在 Ubuntu 中 Visual Studio Code <a class="header-anchor" href="#在-ubuntu-中-visual-studio-code" aria-label="Permalink to “在 Ubuntu 中 Visual Studio Code”">​</a></h3><p>要在 Ubuntu 14.04/14.10/15.04 Linux 發行版中安裝 Visual Studio Code，我們可以使用 Ubuntu Make 0.7。這是在 ubuntu 中安裝 code 最簡單的方法，因為我們只需要執行幾個命令。首先，我們要在我們的 ubuntu linux 發行版中安裝 Ubuntu Make 0.7。要安裝它，首先要為它添加 PPA。可以通過運行下面命令完成。</p><pre><code># add-apt-repository ppa:ubuntu-desktop/ubuntu-make

This ppa proposes package backport of Ubuntu make for supported releases.
More info: https://launchpad.net/~ubuntu-desktop/+archive/ubuntu/ubuntu-make
Press [ENTER] to continue or ctrl-c to cancel adding it
gpg: keyring \`/tmp/tmpv0vf24us/secring.gpg&#39; created
gpg: keyring \`/tmp/tmpv0vf24us/pubring.gpg&#39; created
gpg: requesting key A1231595 from hkp server keyserver.ubuntu.com
gpg: /tmp/tmpv0vf24us/trustdb.gpg: trustdb created
gpg: key A1231595: public key &quot;Launchpad PPA for Ubuntu Desktop&quot; imported
gpg: no ultimately trusted keys found
gpg: Total number processed: 1
gpg: imported: 1 (RSA: 1)
OK
</code></pre><p>然後，更新本地庫索引並安裝 ubuntu-make。</p><pre><code># apt-get update
# apt-get install ubuntu-make
</code></pre><p>在我們的 ubuntu 操作系統上安裝完 Ubuntu Make 之後，我們可以在一個終端中運行以下命令來安裝 Code。</p><pre><code># umake web visual-studio-code
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/umake-web-code.png" alt="Umake Web Code"></p><p>運行完上面的命令之後，會要求我們輸入想要的安裝路徑。然後，會請求我們允許在 ubuntu 系統中安裝 Visual Studio Code。我們輸入“a”（接受）。輸入完後，它會在 ubuntu 機器上下載和安裝 Code。最後，我們可以在啓動器或者菜單中啓動它。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3>`,33)),t("p",null,[o[5]||(o[5]=e("我們已經成功地在 Linux 發行版上安裝了 Visual Studio Code。在所有 linux 發行版上安裝 Visual Studio Code 都和上面介紹的相似，我們也可以使用 umake 在 Ubuntu 發行版中安裝。Umake 是一個安裝開發工具，IDEs 和語言的流行工具。我們可以用 Umake 輕鬆地安裝 Android Studios、Eclipse 和很多其它流行 IDE。Visual Studio Code 是基於 Github 上一個叫 ",-1)),u(i,{href:"https://github.com/atom/electron"},{default:n(()=>[...o[3]||(o[3]=[e("Electron",-1)])]),_:1}),o[6]||(o[6]=e(" 的項目，它是 ",-1)),u(i,{href:"https://github.com/atom/atom"},{default:n(()=>[...o[4]||(o[4]=[e("Atom.io",-1)])]),_:1}),o[7]||(o[7]=e(" 編輯器的一部分。它有很多 Atom.io 編輯器沒有的改進功能。當前 Visual Studio Code 只支持 64 位 linux 操作系統平台。",-1))]),o[27]||(o[27]=t("p",null,"如果你有任何疑問、建議或者反饋，請在下面的評論框中留言以便我們改進和更新我們的內容。非常感謝！Enjoy 😃",-1)),o[28]||(o[28]=t("hr",null,null,-1)),t("p",null,[o[9]||(o[9]=e("via: ",-1)),u(i,{href:"http://linoxide.com/linux-how-to/install-visual-studio-code-linux/"},{default:n(()=>[...o[8]||(o[8]=[e("http://linoxide.com/linux-how-to/install-visual-studio-code-linux/",-1)])]),_:1})]),t("p",null,[o[13]||(o[13]=e("作者：",-1)),u(i,{href:"http://linoxide.com/author/arunp/"},{default:n(()=>[...o[10]||(o[10]=[e("Arun Pyasi",-1)])]),_:1}),o[14]||(o[14]=e(" 譯者：",-1)),u(i,{href:"https://github.com/ictlyh"},{default:n(()=>[...o[11]||(o[11]=[e("ictlyh",-1)])]),_:1}),o[15]||(o[15]=e(" 校對：",-1)),u(i,{href:"https://github.com/wxy"},{default:n(()=>[...o[12]||(o[12]=[e("wxy",-1)])]),_:1})]),t("p",null,[o[18]||(o[18]=e("本文由 ",-1)),u(i,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...o[16]||(o[16]=[e("LCTT",-1)])]),_:1}),o[19]||(o[19]=e(" 原創翻譯，",-1)),u(i,{href:"https://linux.cn/"},{default:n(()=>[...o[17]||(o[17]=[e("Linux中國",-1)])]),_:1}),o[20]||(o[20]=e(" 榮譽推出",-1))])])}const k=d(r,[["render",m]]);export{c as __pageData,k as default};
