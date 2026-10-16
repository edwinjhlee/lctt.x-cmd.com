import{_ as t,a0 as d,w as s,s as p,ao as l,I as o,x as r,a1 as a,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const D=JSON.parse('{"title":"20个令人惊叹的桌面Docker容器 | LCTT x X-CMD","titleTemplate":false,"description":"20个令人惊叹的桌面Docker容器 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"20个令人惊叹的桌面Docker容器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"20个令人惊叹的桌面Docker容器 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150423 20 Awesome Docker Containers for a Desktop User","title":"20个令人惊叹的桌面Docker容器","tag":"201506","desc":""},"relativePath":"201506/20150423 20 Awesome Docker Containers for a Desktop User.md","filePath":"[post].md"}'),c={name:"201506/20150423 20 Awesome Docker Containers for a Desktop User.md"};function h(m,e,u,k,f,x){const n=d("Link");return s(),p("div",null,[e[13]||(e[13]=l(`<h1 id="_20个令人惊叹的桌面docker容器" tabindex="-1">20个令人惊叹的桌面Docker容器 <a class="header-anchor" href="#_20个令人惊叹的桌面docker容器" aria-label="Permalink to “20个令人惊叹的桌面Docker容器”">​</a></h1><p>大家好，今天我们会列出一些运行在Docker容器中的很棒的桌面软件，我们可以在自己的桌面系统中运行它们。Docker 是一个开源项目，提供了一个可以打包、装载和运行任何应用的轻量级容器的开放平台。它没有语言支持、框架和打包系统的限制，从小型的家用电脑到高端服务器，在何时何地都可以运行。它可以使部署和扩展web应用程序、数据库和后端服务像搭积木一样容易，而不依赖特定技术栈或提供商。它主要是由开发、运维工程师使用的，因为它简单、快速和方便，可以用来测试和辅助开发他们产品，但是我们也可以在桌面环境使用Docker，这样一些桌面程序可以开箱即用。</p><p>下边是20个非常棒的桌面软件docker镜像，我们可以使用Docker来运行。</p><h3 id="_1-lynx" tabindex="-1">1. Lynx <a class="header-anchor" href="#_1-lynx" aria-label="Permalink to “1. Lynx”">​</a></h3><p>Lynx是一个一直以来最受欢迎的文本界面网页浏览器，很多Linux用户都很熟悉它。它应该是现在还在日常和开发环境中被使用的最古老的网页浏览器了。可以使用如下命令运行Lync。</p><pre><code>$ docker run -it \\
--name lynx \\
jess/lynx
</code></pre><h3 id="_2-irssi" tabindex="-1">2. Irssi <a class="header-anchor" href="#_2-irssi" aria-label="Permalink to “2. Irssi”">​</a></h3><p>Irssi是一个非常棒的文本界面IRC客户端。可以使用如下命令运行Irssi。</p><pre><code>docker run -it --name my-irssi -e TERM -u $(id -u):$(id -g) \\
-v $HOME/.irssi:/home/user/.irssi:ro \\
-v /etc/localtime:/etc/localtime:ro \\
irssi
</code></pre><h3 id="_3-chrome" tabindex="-1">3. Chrome <a class="header-anchor" href="#_3-chrome" aria-label="Permalink to “3. Chrome”">​</a></h3><p>Chrome是一个令人惊叹的图形界面网页浏览器，由Google开发，它基于开源的Chromium项目。Google Chrome是一个被广泛使用的、快速安全的网页浏览器，经常上网的人会非常熟悉它。我们可以使用如下命令在Docker中运行Chrome。</p><pre><code>$ docker run -it \\
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
</code></pre><h3 id="_4-tor浏览器" tabindex="-1">4. Tor浏览器 <a class="header-anchor" href="#_4-tor浏览器" aria-label="Permalink to “4. Tor浏览器”">​</a></h3><p>Tor浏览器是一个支持匿名访问的网页浏览器。它让我们可以自由地在网络世界遨游，或者浏览被特定组织或者网络服务提供商封锁的网站。它会阻止别人通过监视我们的网络连接来窃取我们在网络上的一举一动以及我们的确切位置。运行如下命令运行Tor浏览器。</p><pre><code>$ docker run -it \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e DISPLAY=unix$DISPLAY \\
-v /dev/snd:/dev/snd --privileged \\
--name tor-browser \\
jess/tor-browser
</code></pre><h3 id="_5-firefox浏览器" tabindex="-1">5. Firefox浏览器 <a class="header-anchor" href="#_5-firefox浏览器" aria-label="Permalink to “5. Firefox浏览器”">​</a></h3><p>Firefox浏览器是一个自由开源的网页浏览器，它由Mozilla基金会开发。它使用Gecko和SpiderMonkey引擎。Firefox浏览器有很多新特性，并且它以性能和安全性著称。</p><pre><code>$ docker run -d \\
--name firefox \\
-e DISPLAY=$DISPLAY \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
kennethkl/firefox
</code></pre><h3 id="_6-rainbow-stream" tabindex="-1">6. Rainbow Stream <a class="header-anchor" href="#_6-rainbow-stream" aria-label="Permalink to “6. Rainbow Stream”">​</a></h3><p>Rainbow Stream是一个文本界面的Twitter客户端，有实时显示tweetstream、搜索、喜欢和更多其他特性，可以直接在终端使用。使用如下命令运行Rainbow Stream。</p><pre><code>$ docker run -it \\
-v /etc/localtime:/etc/localtime \\
-v $HOME/.rainbow_oauth:/root/.rainbow_oauth \\
-v $HOME/.rainbow_config.json:/root/.rainbow_config.json \\
--name rainbowstream \\
jess/rainbowstream
</code></pre><h3 id="_7-gparted" tabindex="-1">7. Gparted <a class="header-anchor" href="#_7-gparted" aria-label="Permalink to “7. Gparted”">​</a></h3><p>Gparted是一个用来给磁盘分区的开源软件。现在可以在Docker容器里享受分区的乐趣了。可以使用如下命令运行gparted。</p><pre><code>$ docker run -it \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e DISPLAY=unix$DISPLAY \\
--device /dev/sda:/dev/sda \\ # 将设备挂载为分区
--name gparted \\
jess/gparted
</code></pre><h3 id="_8-gimp图片编辑器" tabindex="-1">8. GIMP图片编辑器 <a class="header-anchor" href="#_8-gimp图片编辑器" aria-label="Permalink to “8. GIMP图片编辑器”">​</a></h3><p>GIMP（Gnu Image Manipulation Program）是一个令人惊叹的Linux图片编辑软件。它是一个可以自由分发的可以处理照片修正、图像合成和图像创作等任务的工具。</p><pre><code>$ docker run -it \\
--rm -e DISPLAY=$DISPLAY \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
jarfil/gimp-git
</code></pre><h3 id="_9-thunderbird" tabindex="-1">9. Thunderbird <a class="header-anchor" href="#_9-thunderbird" aria-label="Permalink to “9. Thunderbird”">​</a></h3><p>Thunderbird是一个自由开源的电子邮件软件，它由Mozilla基金会开发和维护。它有众多一个电子邮件软件应该具有的功能。Thunderbird非常易于安装和定制。使用如下命令在Docker中运行Thunderbird。</p><pre><code>$ docker run -d \\
-e DISPLAY \\
-v /tmp/.X11-unix:/tmp/.X11-unix:ro \\
-u docker \\
-v $HOME/docker-data/thunderbird:/home/docker/.thunderbird/ \\
yantis/thunderbird thunderbird
</code></pre><h3 id="_10-mutt" tabindex="-1">10. Mutt <a class="header-anchor" href="#_10-mutt" aria-label="Permalink to “10. Mutt”">​</a></h3><p>Mutt是一个文本界面的电子邮件客户端，有很多很酷的功能，如彩色支持，IMAP、POP3、SMTP支持，邮件存储支持等。 使用如下命令运行Mutt。</p><pre><code>$ docker run -it \\
-v /etc/localtime:/etc/localtime \\
-e GMAIL -e GMAIL_NAME \\
-e GMAIL_PASS -e GMAIL_FROM \\
-v $HOME/.gnupg:/home/user/.gnupg \\
--name mutt \\
jess/mutt
</code></pre><h3 id="_11-skype" tabindex="-1">11. Skype <a class="header-anchor" href="#_11-skype" aria-label="Permalink to “11. Skype”">​</a></h3><p>Skype是一个支持文字、语音和视频的即时通讯软件，它不是开源的，但在Linux下可以运行的很好。我们同样可以在Docker中运行Skype，使用如下命令。</p><pre><code>$ docker run -it \\
-v /tmp/.X11-unix:/tmp/.X11-unix:ro \\
-v /dev/snd:/dev/snd --privileged \\
-e DISPLAY=&quot;unix$DISPLAY&quot; \\
tianon/skype
</code></pre><h3 id="_12-cathode" tabindex="-1">12. Cathode <a class="header-anchor" href="#_12-cathode" aria-label="Permalink to “12. Cathode”">​</a></h3><p>Cathode是一个漂亮并且高度可定制的终端模拟器，灵感来自古典计算机。使用如下命令运行Cathode。</p><pre><code>$ docker run -it \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e DISPLAY=unix$DISPLAY \\
--name cathode \\
jess/1995
</code></pre><h3 id="_13-libreoffice" tabindex="-1">13. LibreOffice <a class="header-anchor" href="#_13-libreoffice" aria-label="Permalink to “13. LibreOffice”">​</a></h3><p>LibreOffice是一个功能强大的办公套件，它是自由开源的，现在由The Document基金会维护。它有干净的界面和强大的功能，让我们释放创造力和提升生产力。LibreOffice将数个应用程序集成在一起，是市面上最强大的自由并且开源的办公套件。</p><pre><code>$docker run \\
-v $HOME/Documents:/home/libreoffice/Documents:rw \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e uid=$(id -u) -e gid=$(id -g) \\
-e DISPLAY=unix$DISPLAY --name libreoffice \\
chrisdaish/libreoffice
</code></pre><h3 id="_14-spotify" tabindex="-1">14. Spotify <a class="header-anchor" href="#_14-spotify" aria-label="Permalink to “14. Spotify”">​</a></h3><p>Spotify可以即时访问数百万的歌曲，从经典老歌到最新单曲。可以使用如下命令在Docker中听我们最喜欢的歌曲。</p><pre><code>$ docker run -it \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e DISPLAY=unix$DISPLAY \\
-v /dev/snd:/dev/snd --privileged \\
--name spotify \\
jess/spotify
</code></pre><h3 id="_15-audacity" tabindex="-1">15. Audacity <a class="header-anchor" href="#_15-audacity" aria-label="Permalink to “15. Audacity”">​</a></h3><p>Audacity是一个自由开源的跨平台软件，用来录制和编辑音频。Audacity可以用来做所有类型音频（例如podcast）的后期处理，如归一化、调整、淡入淡出。使用如下命令来运行Audacity。</p><pre><code>$ docker run --rm \\
-u $(id -u):$(id -g) \\
-v /tmp/.X11-unix:/tmp/.X11-unix:ro \\
-v /dev/snd:/dev/snd \\
-v &quot;$HOME:$HOME&quot; \\
-w &quot;$HOME&quot; \\
-e DISPLAY=&quot;unix$DISPLAY&quot; \\
-e HOME \\
$(find /dev/snd/ -type c | sed &#39;s/^/--device /&#39;) \\
knickers/audacity
</code></pre><h3 id="_16-eclipse" tabindex="-1">16. Eclipse <a class="header-anchor" href="#_16-eclipse" aria-label="Permalink to “16. Eclipse”">​</a></h3><p>Eclipse是一个集成开发环境。它包含基本的工作区和用来定制环境的可扩展插件系统。它在Java开发者中很流行。</p><pre><code>$ docker run -v ~/workspace/:/home/eclipse/workspace/ \\
-e DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix:ro \\
-d leesah/eclipse
</code></pre><h3 id="_17-vlc媒体播放器" tabindex="-1">17. VLC媒体播放器 <a class="header-anchor" href="#_17-vlc媒体播放器" aria-label="Permalink to “17. VLC媒体播放器”">​</a></h3><p>VLC是一个自由开源的跨平台多媒体播放器，可以播放本地文件、DVD、CD、VCD和各种流媒体。VLC由VideoLAN组织开发和维护。使用如下命令运行VLC。</p><pre><code>$ docker run -v\\
$HOME/Documents:/home/vlc/Documents:rw \\
-v /dev/snd:/dev/snd --privileged \\
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-e uid=$(id -u) -e gid=$(id -g) \\
-e DISPLAY=unix$DISPLAY --name vlc \\
chrisdaish/vlc
</code></pre><h3 id="_18-vim编辑器" tabindex="-1">18. Vim编辑器 <a class="header-anchor" href="#_18-vim编辑器" aria-label="Permalink to “18. Vim编辑器”">​</a></h3><p>Vim是一个高度可配置的文本界面文字编辑器，为高效的文本编辑而生。它是预装在多数UNIX系统中的vi编辑器的改进版本。</p><pre><code>$ docker run -i -t --name my-vim -v ~/:/home/dev/src haron/vim
</code></pre><h3 id="_19-inkscape" tabindex="-1">19. Inkscape <a class="header-anchor" href="#_19-inkscape" aria-label="Permalink to “19. Inkscape”">​</a></h3><p>Inkscape是一个自由开源的矢量图形编辑器。它可以创建、编辑矢量图形，如插图、图示、线条艺术、图表、徽标以及更复杂的绘画。Inkscape使用的主要矢量图形格式是SVG 1.1版本。它也可以导入和导出一些其他的格式，但实际编辑使用的还是SVG格式。</p><pre><code>$docker build -t rasch/inkscape --rm .
$ docker run --rm -e DISPLAY \\
-u inkscaper
-v /tmp/.X11-unix:/tmp/.X11-unix \\
-v $HOME/.Xauthority:/home/inkscaper/.Xauthority \\
--net=host rasch/inkscape
</code></pre><h3 id="_20-filezilla" tabindex="-1">20. Filezilla <a class="header-anchor" href="#_20-filezilla" aria-label="Permalink to “20. Filezilla”">​</a></h3><p>Filezilla是一个免费的FTP解决方案，支持FTP、SFTP、FTPS协议。它的客户端是一个功能强大的文件管理工具。它是一个很棒的高度可靠和易用的开源FTP解决方案。</p><pre><code>$ xhost +si:localuser:$(whoami)
$ docker run \\
-d \\
-e DISPLAY \\
-v /tmp/.X11-unix:/tmp/.X11-unix:ro \\
-u docker \\
-v /:/host \\
-v $HOME/docker-data/filezilla:/home/docker/.config/filezilla/ \\
yantis/filezilla filezilla
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>使用Docker运行桌面软件真的是很棒的体验。Docker是一个快速、简单的开发平台，适合从家里、办公室到生产环境里传送和开发软件的场景。使用Docker运行桌面软件是试用而不将其安装到自己实体机文件系统中的很酷的方法。如果你有任何问题、评论或者反馈，清写在下方的评论框中，让我们知道哪些是需要增加或者改进的。谢谢！享受Docker吧 😃</p><hr>`,66)),o("p",null,[e[1]||(e[1]=r("via: ",-1)),a(n,{href:"http://linoxide.com/how-tos/20-docker-containers-desktop-user/"},{default:i(()=>[...e[0]||(e[0]=[r("http://linoxide.com/how-tos/20-docker-containers-desktop-user/",-1)])]),_:1})]),o("p",null,[e[5]||(e[5]=r("作者：",-1)),a(n,{href:"http://linoxide.com/author/arunp/"},{default:i(()=>[...e[2]||(e[2]=[r("Arun Pyasi",-1)])]),_:1}),e[6]||(e[6]=r(" 译者：",-1)),a(n,{href:"https://github.com/goreliu"},{default:i(()=>[...e[3]||(e[3]=[r("goreliu",-1)])]),_:1}),e[7]||(e[7]=r(" 校对：",-1)),a(n,{href:"https://github.com/wxy"},{default:i(()=>[...e[4]||(e[4]=[r("wxy",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=r("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[8]||(e[8]=[r("LCTT",-1)])]),_:1}),e[11]||(e[11]=r(" 原创翻译，",-1)),a(n,{href:"http://linux.cn/"},{default:i(()=>[...e[9]||(e[9]=[r("Linux中国",-1)])]),_:1}),e[12]||(e[12]=r(" 荣誉推出",-1))])])}const P=t(c,[["render",h]]);export{D as __pageData,P as default};
