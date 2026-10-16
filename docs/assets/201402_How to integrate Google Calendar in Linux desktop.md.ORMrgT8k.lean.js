import{_ as r,a0 as g,w as p,s as d,I as n,x as o,a1 as e,A as a,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何在Linux桌面墙纸上显示Google Calendar | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux桌面墙纸上显示Google Calendar | LCTT (201402) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux桌面墙纸上显示Google Calendar | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux桌面墙纸上显示Google Calendar | LCTT (201402) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201402/How to integrate Google Calendar in Linux desktop","title":"如何在Linux桌面墙纸上显示Google Calendar","tag":"201402","desc":""},"relativePath":"201402/How to integrate Google Calendar in Linux desktop.md","filePath":"[post].md"}'),u={name:"201402/How to integrate Google Calendar in Linux desktop.md"};function s(m,l,f,x,C,k){const t=g("Link");return p(),d("div",null,[l[31]||(l[31]=n("h1",{id:"如何在linux桌面墙纸上显示google-calendar",tabindex:"-1"},[o("如何在Linux桌面墙纸上显示Google Calendar "),n("a",{class:"header-anchor",href:"#如何在linux桌面墙纸上显示google-calendar","aria-label":"Permalink to “如何在Linux桌面墙纸上显示Google Calendar”"},"​")],-1)),l[32]||(l[32]=n("p",null,"Google Calendar 是时下最流行的网页应用程序之一。用户可以通过网络接口或者本地的应用程序跨设备访问或同步 Google Calendar。在 Linux 上，有很多方法可以本地访问 Google Calendar，比如用电子邮件客户端插件（如 Evolution 或 Thunderbird ）或者用日历应用程序（如 Sunbird 或 Rainklendar）。这些方法通常都需要安装不必要的大型软件，这些软件你很可能根本不需要。",-1)),n("p",null,[l[2]||(l[2]=o("如果你只是想在本地的 Linux 上翻翻 Google Calendar 或者用它设置提醒，那么你可以考虑使用",-1)),e(t,{href:"https://github.com/insanum/gcalcli"},{default:a(()=>[...l[0]||(l[0]=[o("Google Calendar 命令行接口（或者 gcalcli）",-1)])]),_:1}),l[3]||(l[3]=o("，这是一种更轻型化的方法。对于 Linux 桌面操作系统用户来说，好处不止这些，如果将 gcalcli 与",-1)),e(t,{href:"http://conky.sourceforge.net/"},{default:a(()=>[...l[1]||(l[1]=[o("Conky",-1)])]),_:1}),l[4]||(l[4]=o("搭配使用你就可以把 Google Calendar 透明地融入桌面主题。",-1))]),l[33]||(l[33]=i("",13)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216331146/"},{default:a(()=>[...l[5]||(l[5]=[n("img",{src:"http://farm4.staticflickr.com/3791/11216331146_d2c5f95963_z.jpg",alt:""},null,-1)])]),_:1})]),l[34]||(l[34]=n("p",null,"同时这个命令也会弹出一个指向该 URL 的浏览器窗口。如果因为一些原因，你的浏览器没有反应，你可以手动复制粘贴这个 URL 到你的浏览器中。",-1)),l[35]||(l[35]=n("p",null,"如果你还没有登录你的 Google 帐号，你得先登录。然后你会看到下面要求你许可 gcalcli 管理 Google Calendar 的信息。点击“Accept”即可。",-1)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216308465/"},{default:a(()=>[...l[6]||(l[6]=[n("img",{src:"http://farm4.staticflickr.com/3810/11216308465_1008fc1bb3_z.jpg",alt:""},null,-1)])]),_:1})]),l[36]||(l[36]=n("h3",{id:"支持-google-calendar-api",tabindex:"-1"},[o("支持 Google Calendar API "),n("a",{class:"header-anchor",href:"#支持-google-calendar-api","aria-label":"Permalink to “支持 Google Calendar API”"},"​")],-1)),l[37]||(l[37]=n("p",null,"认证后，下一步就是支持 Google Calendar 的 API 访问。gcalcli 通过 Google Calendar API 访问Google Calendar 。但是，如果要使用 Google API 就必须明确设置你的 Google 帐号支持 Google API。",-1)),n("p",null,[l[8]||(l[8]=o("首先到：",-1)),e(t,{href:"https://cloud.google.com/console"},{default:a(()=>[...l[7]||(l[7]=[o("https://cloud.google.com/console",-1)])]),_:1}),l[9]||(l[9]=o("。点击项目列表下的“API Project ”",-1))]),l[38]||(l[38]=n("p",null,"转到“APIs & auth ”下面的“APIs”你会看见一个 Google APIs 列表。点击“Calendar API”的开关按钮使其能支持 API。",-1)),l[39]||(l[39]=n("p",null,"现在转到“APIs & auth”下的“Registered apps”那里，去注册 gcalcli app。点击最顶端的“Registered app”按钮。",-1)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216363656/"},{default:a(()=>[...l[10]||(l[10]=[n("img",{src:"http://farm8.staticflickr.com/7293/11216363656_c203b6dfa2_z.jpg",alt:""},null,-1)])]),_:1})]),l[40]||(l[40]=n("p",null,"填写 app 的名字（如，“My Gcalcli”），然后选择“ Native ”作为平台。点击“Registered”按钮。",-1)),l[41]||(l[41]=n("p",null,"这一步会生成并显示 OAuth 用户的 ID 和密码。另外关于上面提示的“You have not set up your product name（您没有设置您的产品名称）”，你可以忽略掉。",-1)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216593546/"},{default:a(()=>[...l[11]||(l[11]=[n("img",{src:"http://farm3.staticflickr.com/2890/11216593546_312a564f1f_z.jpg",alt:""},null,-1)])]),_:1})]),l[42]||(l[42]=i("",9)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216465043/"},{default:a(()=>[...l[12]||(l[12]=[n("img",{src:"http://farm4.staticflickr.com/3780/11216465043_c8f6d8967d_z.jpg",alt:""},null,-1)])]),_:1})]),l[43]||(l[43]=n("h3",{id:"将-gcalcli-与-conky-结合",tabindex:"-1"},[o("将 gcalcli 与 Conky 结合 "),n("a",{class:"header-anchor",href:"#将-gcalcli-与-conky-结合","aria-label":"Permalink to “将 gcalcli 与 Conky 结合”"},"​")],-1)),l[44]||(l[44]=n("p",null,"最后一步就是将 gcalcli 的输出导入你的桌面主题中。为了做到这一点，你需要 Conky 这个非常强大的工具，它可以把许多信息直接显示在你的桌面主题中。",-1)),n("p",null,[l[14]||(l[14]=o("首先在你的 Linux 系统上 ",-1)),e(t,{href:"http://xmodulo.com/2013/12/install-configure-conky-linux.html"},{default:a(()=>[...l[13]||(l[13]=[o("安装 Conky",-1)])]),_:1}),l[15]||(l[15]=o("。",-1))]),l[45]||(l[45]=n("p",null,"然后，在你的家目录下的某个地方( 例如 ～/bin )创建如下的脚本程序。",-1)),l[46]||(l[46]=n("pre",null,[n("code",null,`$ vi ~/bin/gcal.sh 

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
`)],-1)),l[47]||(l[47]=n("p",null,[n("strong",null,"重要提醒"),o("：上面脚本中的 ‘^[’ 必须是"),n("strong",null,"真正的 ESCAPE 键"),o("( 也就是说在 vi 中按 Ctrl-V 然后按 Esc )。")],-1)),n("p",null,[l[17]||(l[17]=o("这个脚本程序将 VT100 转义序列转成Unicode组件图字符。这是",-1)),e(t,{href:"https://github.com/insanum/gcalcli/issues/97"},{default:a(()=>[...l[16]||(l[16]=[o("必须的一步",-1)])]),_:1}),l[18]||(l[18]=o("，因为 Conky 不支持 gcalcli 使用的 ANSI 字符画。",-1))]),l[48]||(l[48]=n("p",null,"最后，在你的家目录中创建下面的 Conky 配置文件。",-1)),l[49]||(l[49]=n("pre",null,[n("code",null,`$ vi ~/.conkyrc 

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
`)],-1)),l[50]||(l[50]=n("p",null,"这个 Conky 配置文件会直接在你的桌面主题上显示你的 Google Calendar 的一个日程表和一个两个星期的时间表。",-1)),l[51]||(l[51]=n("p",null,"现在，你可以运行下面的命令激活 Conky。",-1)),l[52]||(l[52]=n("pre",null,[n("code",null,`$ conky 
`)],-1)),l[53]||(l[53]=n("p",null,"你应该可以在 Linux 桌面的右边看到 Google Calendar。",-1)),n("p",null,[e(t,{href:"http://www.flickr.com/photos/xmodulo/11216377436/"},{default:a(()=>[...l[19]||(l[19]=[n("img",{src:"http://farm8.staticflickr.com/7390/11216377436_72d00cec49_z.jpg",alt:""},null,-1)])]),_:1})]),l[54]||(l[54]=n("p",null,"确认 Google Calendar 可以正常运行后，你可以将 Conky 设为在每次登录时自动启动。",-1)),l[55]||(l[55]=n("h3",{id:"设置-google-calendar-提醒",tabindex:"-1"},[o("设置 Google Calendar 提醒 "),n("a",{class:"header-anchor",href:"#设置-google-calendar-提醒","aria-label":"Permalink to “设置 Google Calendar 提醒”"},"​")],-1)),l[56]||(l[56]=n("p",null,"gcalcli 也可以为 Google Calendar 中即将到来的事件发送一个提醒。它使用 notify-send 命令。对于 Google Calendar 提醒，你可以像下面一样设置一个工作进程。",-1)),l[57]||(l[57]=n("pre",null,[n("code",null,`$ crontab -l 
`)],-1)),l[58]||(l[58]=n("blockquote",null,[n("p",null,"*/10 * * * * /usr/local/bin/gcalcli remind")],-1)),l[59]||(l[59]=n("hr",null,null,-1)),n("p",null,[l[21]||(l[21]=o("via: ",-1)),e(t,{href:"http://xmodulo.com/2013/12/integrate-google-calendar-linux-desktop.html"},{default:a(()=>[...l[20]||(l[20]=[o("http://xmodulo.com/2013/12/integrate-google-calendar-linux-desktop.html",-1)])]),_:1})]),n("p",null,[l[24]||(l[24]=o("译者：",-1)),e(t,{href:"https://github.com/Linchenguang"},{default:a(()=>[...l[22]||(l[22]=[o("Linchenguang",-1)])]),_:1}),l[25]||(l[25]=o(" 校对：",-1)),e(t,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...l[23]||(l[23]=[o("Caroline",-1)])]),_:1})]),n("p",null,[l[28]||(l[28]=o("本文由 ",-1)),e(t,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...l[26]||(l[26]=[o("LCTT",-1)])]),_:1}),l[29]||(l[29]=o(" 原创翻译，",-1)),e(t,{href:"http://linux.cn/"},{default:a(()=>[...l[27]||(l[27]=[o("Linux中国",-1)])]),_:1}),l[30]||(l[30]=o(" 荣誉推出",-1))])])}const c=r(u,[["render",s]]);export{y as __pageData,c as default};
