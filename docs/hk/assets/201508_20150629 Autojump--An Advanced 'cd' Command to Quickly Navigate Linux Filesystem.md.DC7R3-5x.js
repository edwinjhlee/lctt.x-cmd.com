import{_ as m,a0 as l,w as i,s as d,I as e,x as p,a1 as n,A as u,ao as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const $=JSON.parse(`{"title":"Autojump：一個可以在 Linux 文件系統快速導航的高級 cd 命令 | LCTT x X-CMD","titleTemplate":false,"description":"Autojump：一個可以在 Linux 文件系統快速導航的高級 cd 命令 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Autojump：一個可以在 Linux 文件系統快速導航的高級 cd 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Autojump：一個可以在 Linux 文件系統快速導航的高級 cd 命令 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150629 Autojump--An Advanced 'cd' Command to Quickly Navigate Linux Filesystem","title":"Autojump：一個可以在 Linux 文件系統快速導航的高級 cd 命令","tag":"201508","desc":""},"relativePath":"201508/20150629 Autojump--An Advanced 'cd' Command to Quickly Navigate Linux Filesystem.md","filePath":"[post].md"}`),r={name:"201508/20150629 Autojump--An Advanced 'cd' Command to Quickly Navigate Linux Filesystem.md"};function s(c,t,j,w,g,h){const o=l("Link");return i(),d("div",null,[t[26]||(t[26]=e("h1",{id:"autojump-一個可以在-linux-文件系統快速導航的高級-cd-命令",tabindex:"-1"},[p("Autojump：一個可以在 Linux 文件系統快速導航的高級 cd 命令 "),e("a",{class:"header-anchor",href:"#autojump-一個可以在-linux-文件系統快速導航的高級-cd-命令","aria-label":"Permalink to “Autojump：一個可以在 Linux 文件系統快速導航的高級 cd 命令”"},"​")],-1)),t[27]||(t[27]=e("p",null,"對於那些主要通過控制台或終端使用 Linux 命令列來工作的 Linux 用户來説，他們真切地感受到了 Linux 的強大。 然而在 Linux 的分層文件系統中進行導航有時或許是一件頭疼的事，尤其是對於那些新手來説。",-1)),e("p",null,[t[1]||(t[1]=p("現在，有一個用 Python 寫的名為 ",-1)),t[2]||(t[2]=e("code",null,"autojump",-1)),t[3]||(t[3]=p(" 的 Linux 命令列實用程序，它是 Linux ‘",-1)),n(o,{href:"http://www.tecmint.com/cd-command-in-linux/"},{default:u(()=>[...t[0]||(t[0]=[p("cd",-1)])]),_:1}),t[4]||(t[4]=p("’命令的高級版本。",-1))]),t[28]||(t[28]=a(`<p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Autojump-Command.jpg" alt="Autojump 命令"></p><p><em>Autojump – Linux 文件系統導航的最快方式</em></p><p>這個應用原本由 Joël Schaerer 編寫，現在由 +William Ting 維護。</p><p>Autojump 應用可以從用户那裏學習並幫助用户在 Linux 命令列中進行更輕鬆的目錄導航。與傳統的 <code>cd</code> 命令相比，autojump 能夠更加快速地導航至目的目錄。</p><h4 id="autojump-的特色" tabindex="-1">autojump 的特色 <a class="header-anchor" href="#autojump-的特色" aria-label="Permalink to “autojump 的特色”">​</a></h4><ul><li>自由開源的應用，在 GPL V3 協議下發布。</li><li>自主學習的應用，從用户的導航習慣中學習。</li><li>更快速地導航。不必包含子目錄的名稱。</li><li>對於大多數的標準 Linux 發行版本，能夠在軟件倉庫中下載得到，它們包括 Debian (testing/unstable), Ubuntu, Mint, Arch, Gentoo, Slackware, CentOS, RedHat 和 Fedora。</li><li>也能在其他平台中使用，例如 OS X(使用 Homebrew) 和 Windows (通過 Clink 來實現)</li><li>使用 autojump 你可以跳至任何特定的目錄或一個子目錄。你還可以用文件管理器打開某個目錄，並查看你在某個目錄中所待時間的統計數據。</li></ul><h4 id="前提" tabindex="-1">前提 <a class="header-anchor" href="#前提" aria-label="Permalink to “前提”">​</a></h4><ul><li>版本號不低於 2.6 的 Python</li></ul><h3 id="第-1-步-做一次完整的系統升級" tabindex="-1">第 1 步: 做一次完整的系統升級 <a class="header-anchor" href="#第-1-步-做一次完整的系統升級" aria-label="Permalink to “第 1 步: 做一次完整的系統升級”">​</a></h3><p>1、 以 <strong>root</strong> 用户的身份，做一次系統更新或升級，以此保證你安裝有最新版本的 Python。</p><pre><code># apt-get update &amp;&amp; apt-get upgrade &amp;&amp; apt-get dist-upgrade [基於 APT 的系統]
# yum update &amp;&amp; yum upgrade [基於 YUM 的系統]
# dnf update &amp;&amp; dnf upgrade [基於 DNF 的系統]
</code></pre><p><strong>注</strong> : 這裏特別提醒，在基於 YUM 或 DNF 的系統中，更新和升級執行相同的行動，大多數時間裏它們是通用的，這點與基於 APT 的系統不同。</p><h3 id="第-2-步-下載和安裝-autojump" tabindex="-1">第 2 步: 下載和安裝 Autojump <a class="header-anchor" href="#第-2-步-下載和安裝-autojump" aria-label="Permalink to “第 2 步: 下載和安裝 Autojump”">​</a></h3><p>2、 正如前面所言，在大多數的 Linux 發行版本的軟件倉庫中， autojump 都可獲取到。通過包管理器你就可以安裝它。但若你想從源代碼開始來安裝它，你需要克隆源代碼並執行 python 腳本，如下面所示：</p><h4 id="從源代碼安裝" tabindex="-1">從源代碼安裝 <a class="header-anchor" href="#從源代碼安裝" aria-label="Permalink to “從源代碼安裝”">​</a></h4><p>若沒有安裝 git，請安裝它。我們需要使用它來克隆 git 倉庫。</p><pre><code># apt-get install git   [基於 APT 的系統]
# yum install git       [基於 YUM 的系統]
# dnf install git       [基於 DNF 的系統]
</code></pre><p>一旦安裝完 git，以普通用户身份登錄，然後像下面那樣來克隆 autojump：</p><pre><code>$ git clone git://github.com/joelthelion/autojump.git
</code></pre><p>接着，使用 <code>cd</code> 命令切換到下載目錄。</p><pre><code>$ cd autojump
</code></pre><p>下載，賦予安裝腳本文件可執行權限，並以 root 用户身份來運行安裝腳本。</p><pre><code># chmod 755 install.py
# ./install.py
</code></pre><h4 id="從軟件倉庫中安裝" tabindex="-1">從軟件倉庫中安裝 <a class="header-anchor" href="#從軟件倉庫中安裝" aria-label="Permalink to “從軟件倉庫中安裝”">​</a></h4><p>3、 假如你不想麻煩，你可以以 <strong>root</strong> 用户身份從軟件倉庫中直接安裝它:</p><p>在 Debian, Ubuntu, Mint 及類似系統中安裝 autojump :</p><pre><code># apt-get install autojump
</code></pre>`,27)),e("p",null,[t[6]||(t[6]=p("為了在 Fedora, CentOS, RedHat 及類似系統中安裝 autojump, 你需要啓用 ",-1)),n(o,{href:"https://linux.cn/article-2324-1.html"},{default:u(()=>[...t[5]||(t[5]=[p("EPEL 軟件倉庫",-1)])]),_:1}),t[7]||(t[7]=p("。",-1))]),t[29]||(t[29]=a(`<pre><code># yum install epel-release
# yum install autojump
或
# dnf install autojump
</code></pre><h3 id="第-3-步-安裝後的配置" tabindex="-1">第 3 步: 安裝後的配置 <a class="header-anchor" href="#第-3-步-安裝後的配置" aria-label="Permalink to “第 3 步: 安裝後的配置”">​</a></h3><p>4、 在 Debian 及其衍生系統 (Ubuntu, Mint,…) 中, 激活 autojump 應用是非常重要的。</p><p>為了暫時激活 autojump 應用，即直到你關閉當前會話或打開一個新的會話之前讓 autojump 均有效，你需要以常規用户身份運行下面的命令:</p><pre><code>$ source /usr/share/autojump/autojump.sh on startup
</code></pre><p>為了使得 autojump 在 BASH shell 中永久有效，你需要運行下面的命令。</p><pre><code>$ echo &#39;. /usr/share/autojump/autojump.sh&#39; &gt;&gt; ~/.bashrc
</code></pre><h3 id="第-4-步-autojump-的預測試和使用" tabindex="-1">第 4 步: Autojump 的預測試和使用 <a class="header-anchor" href="#第-4-步-autojump-的預測試和使用" aria-label="Permalink to “第 4 步: Autojump 的預測試和使用”">​</a></h3><p>5、 如先前所言， autojump 將只跳到先前 <code>cd</code> 命令到過的目錄。所以在我們開始測試之前，我們要使用 <code>cd</code> 切換到一些目錄中去，並創建一些目錄。下面是我所執行的命令。</p><pre><code>$ cd
$ cd
$ cd Desktop/
$ cd
$ cd Documents/
$ cd
$ cd Downloads/
$ cd
$ cd Music/
$ cd
$ cd Pictures/
$ cd
$ cd Public/
$ cd
$ cd Templates
$ cd
$ cd /var/www/
$ cd
$ mkdir autojump-test/
$ cd
$ mkdir autojump-test/a/ &amp;&amp; cd autojump-test/a/
$ cd
$ mkdir autojump-test/b/ &amp;&amp; cd autojump-test/b/
$ cd
$ mkdir autojump-test/c/ &amp;&amp; cd autojump-test/c/
$ cd
</code></pre><p>現在，我們已經切換到過上面所列的目錄，併為了測試創建了一些目錄，一切準備就緒，讓我們開始吧。</p><p><strong>需要記住的一點</strong> : <code>j</code> 是 autojump 的一個封裝，你可以使用 j 來代替 autojump， 相反亦可。</p><p>6、 使用 -v 選項查看安裝的 autojump 的版本。</p><pre><code>$ j -v
或
$ autojump -v
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Check-Autojump-Version.png" alt="查看 Autojump 的版本"></p><p><em>查看 Autojump 的版本</em></p><p>7、 跳到先前到過的目錄 ‘/var/www‘。</p><pre><code>$ j www
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Jump-To-Directory.png" alt="跳到目錄"></p><p><em>跳到目錄</em></p><p>8、 跳到先前到過的子目錄‘/home/avi/autojump-test/b‘ 而不鍵入子目錄的全名。</p><pre><code>$ jc b
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Jump-to-Child-Directory.png" alt="跳到子目錄"></p><p><em>跳到子目錄</em></p><p>9、 使用下面的命令，你就可以從命令列打開一個文件管理器，例如 GNOME Nautilus ，而不是跳到一個目錄。</p><pre><code>$ jo www
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Jump-to-Direcotory.png" alt="打開目錄"></p><p><em>打開目錄</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Open-Directory-in-File-Browser.png" alt="在文件管理器中打開目錄"></p><p><em>在文件管理器中打開目錄</em></p><p>你也可以在一個文件管理器中打開一個子目錄。</p><pre><code>$ jco c
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Open-Child-Directory1.png" alt="打開子目錄"></p><p><em>打開子目錄</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Open-Child-Directory-in-File-Browser1.png" alt="在文件管理器中打開子目錄"></p><p><em>在文件管理器中打開子目錄</em></p><p>10、 查看每個文件夾的權重和全部文件夾計算得出的總權重的統計數據。文件夾的權重代表在這個文件夾中所花的總時間。 文件夾權重是該列表中目錄的數字。(LCTT 譯註: 在這一句中，我覺得原文中的 if 應該為 is)</p><pre><code>$ j --stat
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Check-Statistics.png" alt="查看文件夾統計數據"></p><p><em>查看文件夾統計數據</em></p><p><strong>提醒</strong> : autojump 存儲其運行日誌和錯誤日誌的地方是文件夾 <code>~/.local/share/autojump/</code>。千萬不要重寫這些文件，否則你將失去你所有的統計狀態結果。</p><pre><code>$ ls -l ~/.local/share/autojump/
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Autojump-Logs.png" alt="Autojump 的日誌"></p><p><em>Autojump 的日誌</em></p><p>11、 假如需要，你只需運行下面的命令就可以查看幫助 :</p><pre><code>$ j --help
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Autojump-help-options.png" alt="Autojump 的幫助和選項"></p><p><em>Autojump 的幫助和選項</em></p><h3 id="功能需求和已知的衝突" tabindex="-1">功能需求和已知的衝突 <a class="header-anchor" href="#功能需求和已知的衝突" aria-label="Permalink to “功能需求和已知的衝突”">​</a></h3>`,49)),e("ul",null,[t[11]||(t[11]=e("li",null,[p("autojump 只能讓你跳到那些你已經用 "),e("code",null,"cd"),p(" 到過的目錄。一旦你用 "),e("code",null,"cd"),p(" 切換到一個特定的目錄，這個行為就會被記錄到 autojump 的資料庫中，這樣 autojump 才能工作。不管怎樣，在你設定了 autojump 後，你不能跳到那些你沒有用 "),e("code",null,"cd"),p(" 到過的目錄。")],-1)),e("li",null,[t[9]||(t[9]=p("你不能跳到名稱以破折號 (-) 開頭的目錄。或許你可以考慮閲讀我的有關",-1)),n(o,{href:"http://www.tecmint.com/manage-linux-filenames-with-special-characters/"},{default:u(()=>[...t[8]||(t[8]=[p("操作文件或目錄",-1)])]),_:1}),t[10]||(t[10]=p(" 的文章，尤其是有關操作那些以‘-‘ 或其他特殊字符開頭的文件和目錄的內容。",-1))]),t[12]||(t[12]=e("li",null,[p("在 BASH shell 中，autojump 通過修改 "),e("code",null,"$PROMPT_COMMAND"),p(" 環境變量來跟蹤目錄的行為，所以強烈建議不要去重寫 "),e("code",null,"$PROMPT_COMMAND"),p(" 這個環境變量。若你需要添加其他的命令到現存的 "),e("code",null,"$PROMPT_COMMAND"),p(" 環境變量中，請添加到"),e("code",null,"$PROMPT_COMMAND"),p(" 環境變量的最後。")],-1))]),t[30]||(t[30]=e("h3",{id:"結論",tabindex:"-1"},[p("結論: "),e("a",{class:"header-anchor",href:"#結論","aria-label":"Permalink to “結論:”"},"​")],-1)),t[31]||(t[31]=e("p",null,"假如你是一個命令列用户， autojump 是你必備的實用程序。它可以簡化許多事情。它是一個在命令列中導航 Linux 目錄的絕佳的程序。請自行嘗試它，並在下面的評論框中讓我知曉你寶貴的反饋。保持聯繫，保持分享。喜愛並分享，幫助我們更好地傳播。",-1)),t[32]||(t[32]=e("hr",null,null,-1)),e("p",null,[t[14]||(t[14]=p("via: ",-1)),n(o,{href:"http://www.tecmint.com/autojump-a-quickest-way-to-navigate-linux-filesystem/"},{default:u(()=>[...t[13]||(t[13]=[p("http://www.tecmint.com/autojump-a-quickest-way-to-navigate-linux-filesystem/",-1)])]),_:1})]),e("p",null,[t[18]||(t[18]=p("作者：",-1)),n(o,{href:"http://www.tecmint.com/author/avishek/"},{default:u(()=>[...t[15]||(t[15]=[p("Avishek Kumar",-1)])]),_:1}),t[19]||(t[19]=p(" 譯者：",-1)),n(o,{href:"https://github.com/FSSlc"},{default:u(()=>[...t[16]||(t[16]=[p("FSSlc",-1)])]),_:1}),t[20]||(t[20]=p(" 校對：",-1)),n(o,{href:"https://github.com/wxy"},{default:u(()=>[...t[17]||(t[17]=[p("wxy",-1)])]),_:1})]),e("p",null,[t[23]||(t[23]=p("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:u(()=>[...t[21]||(t[21]=[p("LCTT",-1)])]),_:1}),t[24]||(t[24]=p(" 原創翻譯，",-1)),n(o,{href:"https://linux.cn/"},{default:u(()=>[...t[22]||(t[22]=[p("Linux中國",-1)])]),_:1}),t[25]||(t[25]=p(" 榮譽推出",-1))])])}const f=m(r,[["render",s]]);export{$ as __pageData,f as default};
