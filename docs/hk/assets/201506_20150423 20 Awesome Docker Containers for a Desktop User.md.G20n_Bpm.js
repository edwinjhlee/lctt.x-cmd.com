import{_ as t,a0 as d,w as s,s as p,ao as l,I as o,x as r,a1 as a,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const D=JSON.parse('{"title":"20個令人驚歎的桌面Docker容器 | LCTT x X-CMD","titleTemplate":false,"description":"20個令人驚歎的桌面Docker容器 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"20個令人驚歎的桌面Docker容器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"20個令人驚歎的桌面Docker容器 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150423 20 Awesome Docker Containers for a Desktop User","title":"20個令人驚歎的桌面Docker容器","tag":"201506","desc":""},"relativePath":"201506/20150423 20 Awesome Docker Containers for a Desktop User.md","filePath":"[post].md"}'),c={name:"201506/20150423 20 Awesome Docker Containers for a Desktop User.md"};function h(m,e,u,k,f,x){const n=d("Link");return s(),p("div",null,[e[13]||(e[13]=l(`<h1 id="_20個令人驚歎的桌面docker容器" tabindex="-1">20個令人驚歎的桌面Docker容器 <a class="header-anchor" href="#_20個令人驚歎的桌面docker容器" aria-label="Permalink to “20個令人驚歎的桌面Docker容器”">​</a></h1><p>大家好，今天我們會列出一些運行在Docker容器中的很棒的桌面軟件，我們可以在自己的桌面系統中運行它們。Docker 是一個開源項目，提供了一個可以打包、裝載和運行任何應用的輕量級容器的開放平台。它沒有語言支持、框架和打包系統的限制，從小型的家用電腦到高端服務器，在何時何地都可以運行。它可以使部署和擴展web應用程序、資料庫和後端服務像搭積木一樣容易，而不依賴特定技術棧或提供商。它主要是由開發、運維工程師使用的，因為它簡單、快速和方便，可以用來測試和輔助開發他們產品，但是我們也可以在桌面環境使用Docker，這樣一些桌面程序可以開箱即用。</p><p>下邊是20個非常棒的桌面軟件docker鏡像，我們可以使用Docker來運行。</p><h3 id="_1-lynx" tabindex="-1">1. Lynx <a class="header-anchor" href="#_1-lynx" aria-label="Permalink to “1. Lynx”">​</a></h3><p>Lynx是一個一直以來最受歡迎的文本界面網頁瀏覽器，很多Linux用户都很熟悉它。它應該是現在還在日常和開發環境中被使用的最古老的網頁瀏覽器了。可以使用如下命令運行Lync。</p><pre><code>$ docker run -it \\
--name lynx \\
jess/lynx
</code></pre><h3 id="_2-irssi" tabindex="-1">2. Irssi <a class="header-anchor" href="#_2-irssi" aria-label="Permalink to “2. Irssi”">​</a></h3><p>Irssi是一個非常棒的文本界面IRC客户端。可以使用如下命令運行Irssi。</p><pre><code>docker run -it --name my-irssi -e TERM -u $(id -u):$(id -g) \\
-v $HOME/.irssi:/home/user/.irssi:ro \\
-v /etc/localtime:/etc/localtime:ro \\
irssi
</code></pre><h3 id="_3-chrome" tabindex="-1">3. Chrome <a class="header-anchor" href="#_3-chrome" aria-label="Permalink to “3. Chrome”">​</a></h3><p>Chrome是一個令人驚歎的圖形界面網頁瀏覽器，由Google開發，它基於開源的Chromium項目。Google Chrome是一個被廣泛使用的、快速安全的網頁瀏覽器，經常上網的人會非常熟悉它。我們可以使用如下命令在Docker中運行Chrome。</p><pre><code>$ docker run -it \\
--net host \\
--cpuset 0 \\
--memory 512mb \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e DISPLAY=unix$DISPLAY \\
-v $HOME/Downloads:/root/Downloads \\
-v $HOME/.config/google-chrome/:/data \\
-v /dev/snd:/dev/snd --privileged \\
--name chrome \\
jess/chrome
</code></pre><h3 id="_4-tor瀏覽器" tabindex="-1">4. Tor瀏覽器 <a class="header-anchor" href="#_4-tor瀏覽器" aria-label="Permalink to “4. Tor瀏覽器”">​</a></h3><p>Tor瀏覽器是一個支持匿名訪問的網頁瀏覽器。它讓我們可以自由地在網絡世界遨遊，或者瀏覽被特定組織或者網絡服務提供商封鎖的網站。它會阻止別人通過監視我們的網絡連接來竊取我們在網絡上的一舉一動以及我們的確切位置。運行如下命令運行Tor瀏覽器。</p><pre><code>$ docker run -it \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e DISPLAY=unix$DISPLAY \\
-v /dev/snd:/dev/snd --privileged \\
--name tor-browser \\
jess/tor-browser
</code></pre><h3 id="_5-firefox瀏覽器" tabindex="-1">5. Firefox瀏覽器 <a class="header-anchor" href="#_5-firefox瀏覽器" aria-label="Permalink to “5. Firefox瀏覽器”">​</a></h3><p>Firefox瀏覽器是一個自由開源的網頁瀏覽器，它由Mozilla基金會開發。它使用Gecko和SpiderMonkey引擎。Firefox瀏覽器有很多新特性，並且它以性能和安全性著稱。</p><pre><code>$ docker run -d \\
--name firefox \\
-e DISPLAY=$DISPLAY \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
kennethkl/firefox
</code></pre><h3 id="_6-rainbow-stream" tabindex="-1">6. Rainbow Stream <a class="header-anchor" href="#_6-rainbow-stream" aria-label="Permalink to “6. Rainbow Stream”">​</a></h3><p>Rainbow Stream是一個文本界面的Twitter客户端，有實時顯示tweetstream、搜索、喜歡和更多其他特性，可以直接在終端使用。使用如下命令運行Rainbow Stream。</p><pre><code>$ docker run -it \\
-v /etc/localtime:/etc/localtime \\
-v $HOME/.rainbow_oauth:/root/.rainbow_oauth \\
-v $HOME/.rainbow_config.json:/root/.rainbow_config.json \\
--name rainbowstream \\
jess/rainbowstream
</code></pre><h3 id="_7-gparted" tabindex="-1">7. Gparted <a class="header-anchor" href="#_7-gparted" aria-label="Permalink to “7. Gparted”">​</a></h3><p>Gparted是一個用來給磁盤分區的開源軟件。現在可以在Docker容器裏享受分區的樂趣了。可以使用如下命令運行gparted。</p><pre><code>$ docker run -it \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e DISPLAY=unix$DISPLAY \\
--device /dev/sda:/dev/sda \\ # 將設備掛載為分區
--name gparted \\
jess/gparted
</code></pre><h3 id="_8-gimp圖片編輯器" tabindex="-1">8. GIMP圖片編輯器 <a class="header-anchor" href="#_8-gimp圖片編輯器" aria-label="Permalink to “8. GIMP圖片編輯器”">​</a></h3><p>GIMP（Gnu Image Manipulation Program）是一個令人驚歎的Linux圖片編輯軟件。它是一個可以自由分發的可以處理照片修正、圖像合成和圖像創作等任務的工具。</p><pre><code>$ docker run -it \\
--rm -e DISPLAY=$DISPLAY \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
jarfil/gimp-git
</code></pre><h3 id="_9-thunderbird" tabindex="-1">9. Thunderbird <a class="header-anchor" href="#_9-thunderbird" aria-label="Permalink to “9. Thunderbird”">​</a></h3><p>Thunderbird是一個自由開源的電子郵件軟件，它由Mozilla基金會開發和維護。它有眾多一個電子郵件軟件應該具有的功能。Thunderbird非常易於安裝和定製。使用如下命令在Docker中運行Thunderbird。</p><pre><code>$ docker run -d \\
-e DISPLAY \\
-v /tmp/.X11-unix:/tmp/.X11-unix:ro \\
-u docker \\
-v $HOME/docker-data/thunderbird:/home/docker/.thunderbird/ \\
yantis/thunderbird thunderbird
</code></pre><h3 id="_10-mutt" tabindex="-1">10. Mutt <a class="header-anchor" href="#_10-mutt" aria-label="Permalink to “10. Mutt”">​</a></h3><p>Mutt是一個文本界面的電子郵件客户端，有很多很酷的功能，如彩色支持，IMAP、POP3、SMTP支持，郵件存儲支持等。 使用如下命令運行Mutt。</p><pre><code>$ docker run -it \\
-v /etc/localtime:/etc/localtime \\
-e GMAIL -e GMAIL_NAME \\
-e GMAIL_PASS -e GMAIL_FROM \\
-v $HOME/.gnupg:/home/user/.gnupg \\
--name mutt \\
jess/mutt
</code></pre><h3 id="_11-skype" tabindex="-1">11. Skype <a class="header-anchor" href="#_11-skype" aria-label="Permalink to “11. Skype”">​</a></h3><p>Skype是一個支持文字、語音和視頻的即時通訊軟件，它不是開源的，但在Linux下可以運行的很好。我們同樣可以在Docker中運行Skype，使用如下命令。</p><pre><code>$ docker run -it \\
-v /tmp/.X11-unix:/tmp/.X11-unix:ro \\
-v /dev/snd:/dev/snd --privileged \\
-e DISPLAY=&quot;unix$DISPLAY&quot; \\
tianon/skype
</code></pre><h3 id="_12-cathode" tabindex="-1">12. Cathode <a class="header-anchor" href="#_12-cathode" aria-label="Permalink to “12. Cathode”">​</a></h3><p>Cathode是一個漂亮並且高度可定製的終端模擬器，靈感來自古典計算機。使用如下命令運行Cathode。</p><pre><code>$ docker run -it \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e DISPLAY=unix$DISPLAY \\
--name cathode \\
jess/1995
</code></pre><h3 id="_13-libreoffice" tabindex="-1">13. LibreOffice <a class="header-anchor" href="#_13-libreoffice" aria-label="Permalink to “13. LibreOffice”">​</a></h3><p>LibreOffice是一個功能強大的辦公套件，它是自由開源的，現在由The Document基金會維護。它有乾淨的界面和強大的功能，讓我們釋放創造力和提升生產力。LibreOffice將數個應用程序集成在一起，是市面上最強大的自由並且開源的辦公套件。</p><pre><code>$docker run \\
-v $HOME/Documents:/home/libreoffice/Documents:rw \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e uid=$(id -u) -e gid=$(id -g) \\
-e DISPLAY=unix$DISPLAY --name libreoffice \\
chrisdaish/libreoffice
</code></pre><h3 id="_14-spotify" tabindex="-1">14. Spotify <a class="header-anchor" href="#_14-spotify" aria-label="Permalink to “14. Spotify”">​</a></h3><p>Spotify可以即時訪問數百萬的歌曲，從經典老歌到最新單曲。可以使用如下命令在Docker中聽我們最喜歡的歌曲。</p><pre><code>$ docker run -it \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e DISPLAY=unix$DISPLAY \\
-v /dev/snd:/dev/snd --privileged \\
--name spotify \\
jess/spotify
</code></pre><h3 id="_15-audacity" tabindex="-1">15. Audacity <a class="header-anchor" href="#_15-audacity" aria-label="Permalink to “15. Audacity”">​</a></h3><p>Audacity是一個自由開源的跨平台軟件，用來錄製和編輯音頻。Audacity可以用來做所有類型音頻（例如podcast）的後期處理，如歸一化、調整、淡入淡出。使用如下命令來運行Audacity。</p><pre><code>$ docker run --rm \\
-u $(id -u):$(id -g) \\
-v /tmp/.X11-unix:/tmp/.X11-unix:ro \\
-v /dev/snd:/dev/snd \\
-v &quot;$HOME:$HOME&quot; \\
-w &quot;$HOME&quot; \\
-e DISPLAY=&quot;unix$DISPLAY&quot; \\
-e HOME \\
$(find /dev/snd/ -type c | sed &#39;s/^/--device /&#39;) \\
knickers/audacity
</code></pre><h3 id="_16-eclipse" tabindex="-1">16. Eclipse <a class="header-anchor" href="#_16-eclipse" aria-label="Permalink to “16. Eclipse”">​</a></h3><p>Eclipse是一個集成開發環境。它包含基本的工作區和用來定製環境的可擴展插件系統。它在Java開發者中很流行。</p><pre><code>$ docker run -v ~/workspace/:/home/eclipse/workspace/ \\
-e DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix:ro \\
-d leesah/eclipse
</code></pre><h3 id="_17-vlc媒體播放器" tabindex="-1">17. VLC媒體播放器 <a class="header-anchor" href="#_17-vlc媒體播放器" aria-label="Permalink to “17. VLC媒體播放器”">​</a></h3><p>VLC是一個自由開源的跨平台多媒體播放器，可以播放本地文件、DVD、CD、VCD和各種流媒體。VLC由VideoLAN組織開發和維護。使用如下命令運行VLC。</p><pre><code>$ docker run -v\\
$HOME/Documents:/home/vlc/Documents:rw \\
-v /dev/snd:/dev/snd --privileged \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e uid=$(id -u) -e gid=$(id -g) \\
-e DISPLAY=unix$DISPLAY --name vlc \\
chrisdaish/vlc
</code></pre><h3 id="_18-vim編輯器" tabindex="-1">18. Vim編輯器 <a class="header-anchor" href="#_18-vim編輯器" aria-label="Permalink to “18. Vim編輯器”">​</a></h3><p>Vim是一個高度可配置的文本界面文字編輯器，為高效的文本編輯而生。它是預裝在多數UNIX系統中的vi編輯器的改進版本。</p><pre><code>$ docker run -i -t --name my-vim -v ~/:/home/dev/src haron/vim
</code></pre><h3 id="_19-inkscape" tabindex="-1">19. Inkscape <a class="header-anchor" href="#_19-inkscape" aria-label="Permalink to “19. Inkscape”">​</a></h3><p>Inkscape是一個自由開源的矢量圖形編輯器。它可以創建、編輯矢量圖形，如插圖、圖示、線條藝術、圖表、徽標以及更復雜的繪畫。Inkscape使用的主要矢量圖形格式是SVG 1.1版本。它也可以導入和導出一些其他的格式，但實際編輯使用的還是SVG格式。</p><pre><code>$docker build -t rasch/inkscape --rm .
$ docker run --rm -e DISPLAY \\
-u inkscaper
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-v $HOME/.Xauthority:/home/inkscaper/.Xauthority \\
--net=host rasch/inkscape
</code></pre><h3 id="_20-filezilla" tabindex="-1">20. Filezilla <a class="header-anchor" href="#_20-filezilla" aria-label="Permalink to “20. Filezilla”">​</a></h3><p>Filezilla是一個免費的FTP解決方案，支持FTP、SFTP、FTPS協議。它的客户端是一個功能強大的文件管理工具。它是一個很棒的高度可靠和易用的開源FTP解決方案。</p><pre><code>$ xhost +si:localuser:$(whoami)
$ docker run \\
-d \\
-e DISPLAY \\
-v /tmp/.X11-unix:/tmp/.X11-unix:ro \\
-u docker \\
-v /:/host \\
-v $HOME/docker-data/filezilla:/home/docker/.config/filezilla/ \\
yantis/filezilla filezilla
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>使用Docker運行桌面軟件真的是很棒的體驗。Docker是一個快速、簡單的開發平台，適合從家裏、辦公室到生產環境裏傳送和開發軟件的場景。使用Docker運行桌面軟件是試用而不將其安裝到自己實體機文件系統中的很酷的方法。如果你有任何問題、評論或者反饋，清寫在下方的評論框中，讓我們知道哪些是需要增加或者改進的。謝謝！享受Docker吧 😃</p><hr>`,66)),o("p",null,[e[1]||(e[1]=r("via: ",-1)),a(n,{href:"http://linoxide.com/how-tos/20-docker-containers-desktop-user/"},{default:i(()=>[...e[0]||(e[0]=[r("http://linoxide.com/how-tos/20-docker-containers-desktop-user/",-1)])]),_:1})]),o("p",null,[e[5]||(e[5]=r("作者：",-1)),a(n,{href:"http://linoxide.com/author/arunp/"},{default:i(()=>[...e[2]||(e[2]=[r("Arun Pyasi",-1)])]),_:1}),e[6]||(e[6]=r(" 譯者：",-1)),a(n,{href:"https://github.com/goreliu"},{default:i(()=>[...e[3]||(e[3]=[r("goreliu",-1)])]),_:1}),e[7]||(e[7]=r(" 校對：",-1)),a(n,{href:"https://github.com/wxy"},{default:i(()=>[...e[4]||(e[4]=[r("wxy",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=r("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[8]||(e[8]=[r("LCTT",-1)])]),_:1}),e[11]||(e[11]=r(" 原創翻譯，",-1)),a(n,{href:"http://linux.cn/"},{default:i(()=>[...e[9]||(e[9]=[r("Linux中國",-1)])]),_:1}),e[12]||(e[12]=r(" 榮譽推出",-1))])])}const P=t(c,[["render",h]]);export{D as __pageData,P as default};
