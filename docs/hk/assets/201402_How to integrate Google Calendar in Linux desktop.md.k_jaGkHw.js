import{_ as r,a0 as g,w as p,s as d,I as n,x as o,a1 as e,A as a,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"如何在Linux桌面牆紙上顯示Google Calendar | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux桌面牆紙上顯示Google Calendar | LCTT (201402) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux桌面牆紙上顯示Google Calendar | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux桌面牆紙上顯示Google Calendar | LCTT (201402) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201402/How to integrate Google Calendar in Linux desktop","title":"如何在Linux桌面牆紙上顯示Google Calendar","tag":"201402","desc":""},"relativePath":"201402/How to integrate Google Calendar in Linux desktop.md","filePath":"[post].md"}'),u={name:"201402/How to integrate Google Calendar in Linux desktop.md"};function s(m,l,f,x,C,k){const t=g("Link");return p(),d("div",null,[l[31]||(l[31]=n("h1",{id:"如何在linux桌面牆紙上顯示google-calendar",tabindex:"-1"},[o("如何在Linux桌面牆紙上顯示Google Calendar "),n("a",{class:"header-anchor",href:"#如何在linux桌面牆紙上顯示google-calendar","aria-label":"Permalink to “如何在Linux桌面牆紙上顯示Google Calendar”"},"​")],-1)),l[32]||(l[32]=n("p",null,"Google Calendar 是時下最流行的網頁應用程序之一。用户可以通過網絡接口或者本地的應用程序跨設備訪問或同步 Google Calendar。在 Linux 上，有很多方法可以本地訪問 Google Calendar，比如用電子郵件客户端插件（如 Evolution 或 Thunderbird ）或者用日曆應用程序（如 Sunbird 或 Rainklendar）。這些方法通常都需要安裝不必要的大型軟件，這些軟件你很可能根本不需要。",-1)),n("p",null,[l[2]||(l[2]=o("如果你只是想在本地的 Linux 上翻翻 Google Calendar 或者用它設置提醒，那麼你可以考慮使用",-1)),e(t,{href:"https://github.com/insanum/gcalcli"},{default:a(()=>[...l[0]||(l[0]=[o("Google Calendar 命令列接口（或者 gcalcli）",-1)])]),_:1}),l[3]||(l[3]=o("，這是一種更輕型化的方法。對於 Linux 桌面操作系統用户來説，好處不止這些，如果將 gcalcli 與",-1)),e(t,{href:"http://conky.sourceforge.net/"},{default:a(()=>[...l[1]||(l[1]=[o("Conky",-1)])]),_:1}),l[4]||(l[4]=o("搭配使用你就可以把 Google Calendar 透明地融入桌面主題。",-1))]),l[33]||(l[33]=i(`<p>在這個教程中，我會展示<strong>如何利用 gcalcli 和 Conky 將 Google Calendar 融入 Linux 桌面</strong></p><h3 id="在-linux-安裝-gcalcli" tabindex="-1">在 Linux 安裝 gcalcli <a class="header-anchor" href="#在-linux-安裝-gcalcli" aria-label="Permalink to “在 Linux 安裝 gcalcli”">​</a></h3><p>在安裝 gcalcli 之前，要確保你正在用的是 Python 2 而不是 Python 3 ，因為 Python 3 與 gcalcli 不兼容。</p><p>如果是在 Debian、Ubuntu 或 Linux Mint 上可以用下面的命令安裝 gcalcli</p><pre><code>$ sudo apt-get install git python-pip python-gdata python-dateutil python-gflags python-vobject python-parsedatetime
$ sudo pip install google-api-python-client
$ sudo pip install apiclient urllib3
$ git clone https://github.com/insanum/gcalcli.git
$ cd gcalcli
$ sudo python setup.py install 
</code></pre><p><strong>温馨提醒</strong>：Ubuntu 或 Linux Mint 的軟件庫中雖然有 gcalcli，但是這些版本並不包含其最新的特性和針對 bug 的修復。所以這裏推薦按以上所述的方法由源文件構建 gcalcli。</p><p>對於Fedora 、CentOS 或 RHEL，可按如下方法安裝。</p><pre><code>$ sudo yum install git python-pip python-gdata python-dateutil python-gflags python-vobject
$ sudo pip install google-api-python-client
$ sudo pip install apiclient urllib3
$ git clone https://github.com/insanum/gcalcli.git
$ cd gcalcli
$ sudo python setup.py install 
</code></pre><h3 id="gcalcli-的-google-認證" tabindex="-1">gcalcli 的 Google 認證 <a class="header-anchor" href="#gcalcli-的-google-認證" aria-label="Permalink to “gcalcli 的 Google 認證”">​</a></h3><p>為了能讓 gcalcli 訪問 Google Calendar ，你需要用你的 Google 帳號通過 OAuth2 認證，以使 gcalcli 獲得許可來訪問你的 Google Calendar。</p><p>第一次運行 gcalcli 的時候，OAuth2 認證會自動進行初始化。因此運行下面的命令開始</p><pre><code>$ gcalcli agenda 
</code></pre><p>該命令會輸出如下的一個 URL 。</p>`,13)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216331146/"},{default:a(()=>[...l[5]||(l[5]=[n("img",{src:"http://farm4.staticflickr.com/3791/11216331146_d2c5f95963_z.jpg",alt:""},null,-1)])]),_:1})]),l[34]||(l[34]=n("p",null,"同時這個命令也會彈出一個指向該 URL 的瀏覽器窗口。如果因為一些原因，你的瀏覽器沒有反應，你可以手動複製粘貼這個 URL 到你的瀏覽器中。",-1)),l[35]||(l[35]=n("p",null,"如果你還沒有登錄你的 Google 帳號，你得先登錄。然後你會看到下面要求你許可 gcalcli 管理 Google Calendar 的信息。點擊“Accept”即可。",-1)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216308465/"},{default:a(()=>[...l[6]||(l[6]=[n("img",{src:"http://farm4.staticflickr.com/3810/11216308465_1008fc1bb3_z.jpg",alt:""},null,-1)])]),_:1})]),l[36]||(l[36]=n("h3",{id:"支持-google-calendar-api",tabindex:"-1"},[o("支持 Google Calendar API "),n("a",{class:"header-anchor",href:"#支持-google-calendar-api","aria-label":"Permalink to “支持 Google Calendar API”"},"​")],-1)),l[37]||(l[37]=n("p",null,"認證後，下一步就是支持 Google Calendar 的 API 訪問。gcalcli 通過 Google Calendar API 訪問Google Calendar 。但是，如果要使用 Google API 就必須明確設置你的 Google 帳號支持 Google API。",-1)),n("p",null,[l[8]||(l[8]=o("首先到：",-1)),e(t,{href:"https://cloud.google.com/console"},{default:a(()=>[...l[7]||(l[7]=[o("https://cloud.google.com/console",-1)])]),_:1}),l[9]||(l[9]=o("。點擊項目列表下的“API Project ”",-1))]),l[38]||(l[38]=n("p",null,"轉到“APIs & auth ”下面的“APIs”你會看見一個 Google APIs 列表。點擊“Calendar API”的開關按鈕使其能支持 API。",-1)),l[39]||(l[39]=n("p",null,"現在轉到“APIs & auth”下的“Registered apps”那裏，去註冊 gcalcli app。點擊最頂端的“Registered app”按鈕。",-1)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216363656/"},{default:a(()=>[...l[10]||(l[10]=[n("img",{src:"http://farm8.staticflickr.com/7293/11216363656_c203b6dfa2_z.jpg",alt:""},null,-1)])]),_:1})]),l[40]||(l[40]=n("p",null,"填寫 app 的名字（如，“My Gcalcli”），然後選擇“ Native ”作為平台。點擊“Registered”按鈕。",-1)),l[41]||(l[41]=n("p",null,"這一步會生成並顯示 OAuth 用户的 ID 和密碼。另外關於上面提示的“You have not set up your product name（您沒有設置您的產品名稱）”，你可以忽略掉。",-1)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216593546/"},{default:a(()=>[...l[11]||(l[11]=[n("img",{src:"http://farm3.staticflickr.com/2890/11216593546_312a564f1f_z.jpg",alt:""},null,-1)])]),_:1})]),l[42]||(l[42]=i(`<p>OAuth的認證結果將會保存在 ～/.gcalcli_oauth 文本文件中。</p><h3 id="用-gcalcli-在命令列中訪問-google-calendar" tabindex="-1">用 gcalcli 在命令列中訪問 Google Calendar <a class="header-anchor" href="#用-gcalcli-在命令列中訪問-google-calendar" aria-label="Permalink to “用 gcalcli 在命令列中訪問 Google Calendar”">​</a></h3><p>你現在馬上就可以用 gcalcli 訪問Google Calendar 了。</p><p>在你的家目錄創建一個如下的 gcalcli 配置文件。將你先前獲得的 OAuth 用户 ID 和 密碼按下面格式輸入進去。</p><pre><code>$ vi ~/.gcalclirc 
</code></pre><blockquote><p>--client_id=&#39;XXXXXXXXXX.apps.googleusercontent.com&#39; --client_secret=&#39;YYYYYYYYYYYYYYYY&#39;</p></blockquote><p>到了這一步，你應該可以在命令列運行 gcalcli 了。</p><p>試試下面的命令，這兩個命令會分別打印出一個你的 Google Calendar 的列表和今後 5 天的日程安排。</p><pre><code>$ gcalcli list
$ gcalcli agenda 
</code></pre>`,9)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216465043/"},{default:a(()=>[...l[12]||(l[12]=[n("img",{src:"http://farm4.staticflickr.com/3780/11216465043_c8f6d8967d_z.jpg",alt:""},null,-1)])]),_:1})]),l[43]||(l[43]=n("h3",{id:"將-gcalcli-與-conky-結合",tabindex:"-1"},[o("將 gcalcli 與 Conky 結合 "),n("a",{class:"header-anchor",href:"#將-gcalcli-與-conky-結合","aria-label":"Permalink to “將 gcalcli 與 Conky 結合”"},"​")],-1)),l[44]||(l[44]=n("p",null,"最後一步就是將 gcalcli 的輸出導入你的桌面主題中。為了做到這一點，你需要 Conky 這個非常強大的工具，它可以把許多信息直接顯示在你的桌面主題中。",-1)),n("p",null,[l[14]||(l[14]=o("首先在你的 Linux 系統上 ",-1)),e(t,{href:"http://xmodulo.com/2013/12/install-configure-conky-linux.html"},{default:a(()=>[...l[13]||(l[13]=[o("安裝 Conky",-1)])]),_:1}),l[15]||(l[15]=o("。",-1))]),l[45]||(l[45]=n("p",null,"然後，在你的家目錄下的某個地方( 例如 ～/bin )創建如下的腳本程序。",-1)),l[46]||(l[46]=n("pre",null,[n("code",null,`$ vi ~/bin/gcal.sh 

#!/bin/sh

gcalcli --conky calw 2 |
  sed -e 's/^[(0\\x71^[(B/?/g' \\
      -e 's/^[(0\\x78^[(B/?/g' \\
      -e 's/^[(0\\x6A^[(B/?/g' \\
      -e 's/^[(0\\x6B^[(B/?/g' \\
      -e 's/^[(0\\x6C^[(B/?/g' \\
      -e 's/^[(0\\x6D^[(B/?/g' \\
      -e 's/^[(0\\x6E^[(B/?/g' \\
      -e 's/^[(0\\x74^[(B/?/g' \\
      -e 's/^[(0\\x75^[(B/?/g' \\
      -e 's/^[(0\\x76^[(B/?/g' \\
      -e 's/^[(0\\x77^[(B/?/g'

$ chmod +x ~/bin/gcal.sh 
`)],-1)),l[47]||(l[47]=n("p",null,[n("strong",null,"重要提醒"),o("：上面腳本中的 ‘^[’ 必須是"),n("strong",null,"真正的 ESCAPE 鍵"),o("( 也就是説在 vi 中按 Ctrl-V 然後按 Esc )。")],-1)),n("p",null,[l[17]||(l[17]=o("這個腳本程序將 VT100 轉義序列轉成Unicode組件圖字符。這是",-1)),e(t,{href:"https://github.com/insanum/gcalcli/issues/97"},{default:a(()=>[...l[16]||(l[16]=[o("必須的一步",-1)])]),_:1}),l[18]||(l[18]=o("，因為 Conky 不支持 gcalcli 使用的 ANSI 字符畫。",-1))]),l[48]||(l[48]=n("p",null,"最後，在你的家目錄中創建下面的 Conky 配置文件。",-1)),l[49]||(l[49]=n("pre",null,[n("code",null,`$ vi ~/.conkyrc 

alignment top_right
maximum_width 630
minimum_size 330 10
gap_x 25
gap_y 50

own_window yes
own_window_type conky
own_window_hints undecorated,below,sticky,skip_taskbar,skip_pager
own_window_transparent yes
own_window_argb_visual yes
own_window_argb_value 0

update_interval 300
background no

border_width 1
default_color cornflowerblue
default_outline_color white
default_shade_color white
double_buffer no
draw_borders no
draw_graph_borders no
draw_outline no
draw_shades no
max_port_monitor_connections 64
max_specials 512
max_user_text 16384
text_buffer_size 8096
no_buffers yes
out_to_console no
uppercase no
use_xft yes
xftfont Bitstream Vera Sans Mono:size=10

TEXT
*** Google Calendar Agenda ***
\${execpi 300 gcalcli --conky agenda}
\${execpi 300 ~/bin/gcal.sh}
`)],-1)),l[50]||(l[50]=n("p",null,"這個 Conky 配置文件會直接在你的桌面主題上顯示你的 Google Calendar 的一個日程表和一個兩個星期的時間表。",-1)),l[51]||(l[51]=n("p",null,"現在，你可以運行下面的命令激活 Conky。",-1)),l[52]||(l[52]=n("pre",null,[n("code",null,`$ conky 
`)],-1)),l[53]||(l[53]=n("p",null,"你應該可以在 Linux 桌面的右邊看到 Google Calendar。",-1)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216377436/"},{default:a(()=>[...l[19]||(l[19]=[n("img",{src:"http://farm8.staticflickr.com/7390/11216377436_72d00cec49_z.jpg",alt:""},null,-1)])]),_:1})]),l[54]||(l[54]=n("p",null,"確認 Google Calendar 可以正常運行後，你可以將 Conky 設為在每次登錄時自動啓動。",-1)),l[55]||(l[55]=n("h3",{id:"設置-google-calendar-提醒",tabindex:"-1"},[o("設置 Google Calendar 提醒 "),n("a",{class:"header-anchor",href:"#設置-google-calendar-提醒","aria-label":"Permalink to “設置 Google Calendar 提醒”"},"​")],-1)),l[56]||(l[56]=n("p",null,"gcalcli 也可以為 Google Calendar 中即將到來的事件發送一個提醒。它使用 notify-send 命令。對於 Google Calendar 提醒，你可以像下面一樣設置一個工作進程。",-1)),l[57]||(l[57]=n("pre",null,[n("code",null,`$ crontab -l 
`)],-1)),l[58]||(l[58]=n("blockquote",null,[n("p",null,"*/10 * * * * /usr/local/bin/gcalcli remind")],-1)),l[59]||(l[59]=n("hr",null,null,-1)),n("p",null,[l[21]||(l[21]=o("via: ",-1)),e(t,{href:"http://xmodulo.com/2013/12/integrate-google-calendar-linux-desktop.html"},{default:a(()=>[...l[20]||(l[20]=[o("http://xmodulo.com/2013/12/integrate-google-calendar-linux-desktop.html",-1)])]),_:1})]),n("p",null,[l[24]||(l[24]=o("譯者：",-1)),e(t,{href:"https://github.com/Linchenguang"},{default:a(()=>[...l[22]||(l[22]=[o("Linchenguang",-1)])]),_:1}),l[25]||(l[25]=o(" 校對：",-1)),e(t,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...l[23]||(l[23]=[o("Caroline",-1)])]),_:1})]),n("p",null,[l[28]||(l[28]=o("本文由 ",-1)),e(t,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...l[26]||(l[26]=[o("LCTT",-1)])]),_:1}),l[29]||(l[29]=o(" 原創翻譯，",-1)),e(t,{href:"http://linux.cn/"},{default:a(()=>[...l[27]||(l[27]=[o("Linux中國",-1)])]),_:1}),l[30]||(l[30]=o(" 榮譽推出",-1))])])}const c=r(u,[["render",s]]);export{y as __pageData,c as default};
