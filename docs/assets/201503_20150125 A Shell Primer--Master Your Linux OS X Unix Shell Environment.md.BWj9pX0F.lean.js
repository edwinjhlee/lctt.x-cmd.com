import{_ as t,a0 as i,w as h,s as p,ao as o,I as n,a1 as r,A as a,x as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"Shell入门：掌握Linux，OS X，Unix的Shell环境 | LCTT x X-CMD","titleTemplate":false,"description":"Shell入门：掌握Linux，OS X，Unix的Shell环境 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shell入门：掌握Linux，OS X，Unix的Shell环境 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shell入门：掌握Linux，OS X，Unix的Shell环境 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150125 A Shell Primer--Master Your Linux OS X Unix Shell Environment","title":"Shell入门：掌握Linux，OS X，Unix的Shell环境","tag":"201503","desc":""},"relativePath":"201503/20150125 A Shell Primer--Master Your Linux OS X Unix Shell Environment.md","filePath":"[post].md"}'),d={name:"201503/20150125 A Shell Primer--Master Your Linux OS X Unix Shell Environment.md"};function u(b,e,m,c,f,x){const s=i("Link");return h(),p("div",null,[e[46]||(e[46]=o("",9)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/finding-your-shell-like-a-pro/"},{default:a(()=>[...e[0]||(e[0]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/finding-your-shell-like-a-pro.jpg",alt:"图1: Finding out your shell name"},null,-1)])]),_:1})]),e[47]||(e[47]=n("p",null,[n("em",null,"图1：找出当前的shell")],-1)),e[48]||(e[48]=n("h3",{id:"找出所有已安装的shell",tabindex:"-1"},[l("找出所有已安装的shell "),n("a",{class:"header-anchor",href:"#找出所有已安装的shell","aria-label":"Permalink to “找出所有已安装的shell”"},"​")],-1)),e[49]||(e[49]=n("p",null,"找到已安装shell的完整路径：",-1)),e[50]||(e[50]=n("pre",null,[n("code",null,`type -a zsh
type -a ksh
type -a sh
type -a bash
`)],-1)),e[51]||(e[51]=n("p",null,"输出范例：",-1)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/finding-and-verifying-shell-path/"},{default:a(()=>[...e[1]||(e[1]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/finding-and-verifying-shell-path.jpg",alt:"Fig.02: Finding out your shell path"},null,-1)])]),_:1})]),e[52]||(e[52]=n("p",null,[n("em",null,"图2：找出shell的路径")],-1)),n("p",null,[e[3]||(e[3]=l("文件/etc/shells里包含了系统所支持的shell列表。每一行代表一个shell，是相对根目录的完整路径。用这个",-1)),r(s,{href:"http://www.cyberciti.biz/faq/linux-unix-appleosx-bsd-cat-command-examples/"},{default:a(()=>[...e[2]||(e[2]=[l("cat命令",-1)])]),_:1}),e[4]||(e[4]=l("来查看这些数据：",-1))]),e[53]||(e[53]=o("",12)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/a-nested-shell-level-command/"},{default:a(()=>[...e[5]||(e[5]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/a-nested-shell-level-command.jpg",alt:"Fig. 03: Bash shell nesting level (subshell numbers)"},null,-1)])]),_:1})]),e[54]||(e[54]=o("",34)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/list-bash-enviroment-variables/"},{default:a(()=>[...e[6]||(e[6]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/list-bash-enviroment-variables.jpg",alt:"Fig.05: List all bash environment configuration files"},null,-1)])]),_:1})]),e[55]||(e[55]=o("",12)),n("p",null,[e[8]||(e[8]=l("zsh的",-1)),r(s,{href:"http://zshwiki.org/home/config/files"},{default:a(()=>[...e[7]||(e[7]=[l("wiki",-1)])]),_:1}),e[9]||(e[9]=l("中建议用下面的命令：",-1))]),e[56]||(e[56]=o("",23)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/history-outputs/"},{default:a(()=>[...e[10]||(e[10]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/history-outputs.jpg",alt:"Fig.06: View session history in the bash shell using history command"},null,-1)])]),_:1})]),e[57]||(e[57]=o("",8)),n("p",null,[e[12]||(e[12]=l('看看帖子"',-1)),r(s,{href:"http://www.cyberciti.biz/open-source/command-line-hacks/linux-run-command-as-different-user/"},{default:a(()=>[...e[11]||(e[11]=[l("Linux下使用其他用户身份运行命令",-1)])]),_:1}),e[13]||(e[13]=l('"更多地了解sudo，su和runuser命令。',-1))]),e[58]||(e[58]=o("",14)),n("p",null,[e[15]||(e[15]=l('你可以设定任意多的别名。看下"',-1)),r(s,{href:"http://www.cyberciti.biz/tips/bash-aliases-mac-centos-linux-unix.html"},{default:a(()=>[...e[14]||(e[14]=[l("Linux/Unix/Mac OS X系统中的30个方便的bash shell别名",-1)])]),_:1}),e[16]||(e[16]=l('"了解在类Unix系统中别名的实际应用。',-1))]),e[59]||(e[59]=n("h3",{id:"shell函数",tabindex:"-1"},[l("shell函数 "),n("a",{class:"header-anchor",href:"#shell函数","aria-label":"Permalink to “shell函数”"},"​")],-1)),e[60]||(e[60]=n("p",null,"Bash/ksh/zsh函数允许你更进一步地配置shell环境。在这个例子中，我写了一个简单的名叫memcpu()的bash函数，用来显示前10个最占用CPU和内存的进程：",-1)),e[61]||(e[61]=n("pre",null,[n("code",null,`memcpu() { echo "*** Top 10 cpu eating process ***"; ps auxf | sort -nr -k 3 | head -10;
echo  "*** Top 10 memory eating process ***"; ps auxf | sort -nr -k 4 | head -10;  }
`)],-1)),e[62]||(e[62]=n("p",null,"输入memcpu就可以在屏幕上看到下面的信息：",-1)),e[63]||(e[63]=n("pre",null,[n("code",null,`memcpu
 
*** Top 10 cpu eating process ***
nginx    39559 13.0  0.2 264020 35168 ?        S    04:26   0:00      \\_ /usr/bin/php-cgi
nginx    39545  6.6  0.1 216484 13088 ?        S    04:25   0:04      \\_ /usr/bin/php-cgi
nginx    39471  6.2  0.6 273352 81704 ?        S    04:22   0:17      \\_ /usr/bin/php-cgi
nginx    39544  5.7  0.1 216484 13084 ?        S    04:25   0:03      \\_ /usr/bin/php-cgi
nginx    39540  5.5  0.1 221260 19296 ?        S    04:25   0:04      \\_ /usr/bin/php-cgi
nginx    39542  5.4  0.1 216484 13152 ?        S    04:25   0:04      \\_ /usr/bin/php-cgi
nixcraft 39543  5.3  0.1 216484 14096 ?        S    04:25   0:04      \\_ /usr/bin/php-cgi
nixcraft 39538  5.2  0.1 221248 18608 ?        S    04:25   0:04      \\_ /usr/bin/php-cgi
nixcraft 39539  5.0  0.1 216484 16272 ?        S    04:25   0:04      \\_ /usr/bin/php-cgi
nixcraft 39541  4.8  0.1 216484 14860 ?        S    04:25   0:04      \\_ /usr/bin/php-cgi
 
*** Top 10 memory eating process ***
498      63859  0.5  4.0 2429652 488084 ?      Ssl   2014 177:41 memcached -d -p 11211 -u memcached -m 2048 -c 18288 -P /var/run/memcached/memcached.pid -l 10.10.29.68 -L
mysql    64221  4.2  3.4 4653600 419868 ?      Sl    2014 1360:40  \\_ /usr/libexec/mysqld --basedir=/usr --datadir=/var/lib/mysql --user=mysql --log-error=/var/log/mysqld.log --open-files-limit=65535 --pid-file=/var/run/mysqld/mysqld.pid --socket=/var/lib/mysql/mysql.sock
nixcraft 39418  0.4  1.1 295312 138624 ?       S    04:17   0:02  |   \\_ /usr/bin/php-cgi
nixcraft 39419  0.5  0.9 290284 113036 ?       S    04:18   0:02  |   \\_ /usr/bin/php-cgi
nixcraft 39464  0.7  0.8 294356 99200 ?        S    04:20   0:02  |   \\_ /usr/bin/php-cgi
nixcraft 39469  0.3  0.7 288400 91256 ?        S    04:20   0:01  |   \\_ /usr/bin/php-cgi
nixcraft 39471  6.2  0.6 273352 81704 ?        S    04:22   0:17      \\_ /usr/bin/php-cgi
vivek    39261  2.2  0.6 253172 82812 ?        S    04:05   0:28      \\_ /usr/bin/php-cgi
squid     9995  0.0  0.5 175152 72396 ?        S     2014  27:00  \\_ (squid) -f /etc/squid/squid.conf
cybercit  3922  0.0  0.4 303380 56304 ?        S    Jan10   0:13  |   \\_ /usr/bin/php-cgi
`)],-1)),n("p",null,[e[18]||(e[18]=l('看下"',-1)),r(s,{href:"http://bash.cyberciti.biz/guide/Chapter_9:_Functions"},{default:a(()=>[...e[17]||(e[17]=[l("如何编写和应用shell函数",-1)])]),_:1}),e[19]||(e[19]=l('"了解更多信息。',-1))]),e[64]||(e[64]=o("",12)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/faq/ssh-passwordless-login-with-keychain-for-scripts/"},{default:a(()=>[...e[20]||(e[20]=[l("使用密钥实现免密码登录",-1)])]),_:1}),e[21]||(e[21]=l("让ssh远程登录更安全：",-1))]),e[65]||(e[65]=n("pre",null,[n("code",null,`# 再也不用输密码了
/usr/bin/keychain $HOME/.ssh/id_rsa
source $HOME/.keychain/$HOSTNAME-sh
`)],-1)),n("p",null,[e[23]||(e[23]=l("最后，",-1)),r(s,{href:"http://www.cyberciti.biz/faq/fedora-redhat-scientific-linuxenable-bash-completion/"},{default:a(()=>[...e[22]||(e[22]=[l("打开bash命令补齐",-1)])]),_:1})]),e[66]||(e[66]=n("pre",null,[n("code",null,`source /etc/bash_completion
`)],-1)),e[67]||(e[67]=n("h4",{id:"_2-设定bash命令提示符",tabindex:"-1"},[l("#2: 设定bash命令提示符 "),n("a",{class:"header-anchor",href:"#_2-设定bash命令提示符","aria-label":"Permalink to “#2: 设定bash命令提示符”"},"​")],-1)),n("p",null,[e[25]||(e[25]=l("设定",-1)),r(s,{href:"http://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html"},{default:a(()=>[...e[24]||(e[24]=[l("定制的bash提示符(PS1)",-1)])]),_:1}),e[26]||(e[26]=l(":",-1))]),e[68]||(e[68]=o("",18)),n("p",null,[e[28]||(e[28]=l("最后，你可以",-1)),r(s,{href:"http://bash.cyberciti.biz/guide/Setting_shell_options"},{default:a(()=>[...e[27]||(e[27]=[l("使用set和shopt命令调整bash shell环境",-1)])]),_:1}),e[29]||(e[29]=l("：",-1))]),e[69]||(e[69]=n("pre",null,[n("code",null,`# 目录拼写纠正
shopt -q -s cdspell
 
# 保证每次终端窗口改变大小后会更新显示
shopt -q -s checkwinsize
 
# 打开高级模式匹配功能
shopt -q -s extglob
 
# 退出时附加命令历史而不是覆盖
shopt -s histappend
 
# 在命令历史使用多行
shopt -q -s cmdhist
 
# 在后台任务结束时立刻通知
set -o notify
 
# 禁用[CTRL-D]来结束shell
set -o ignoreeof
`)],-1)),e[70]||(e[70]=n("h3",{id:"总结",tabindex:"-1"},[l("总结 "),n("a",{class:"header-anchor",href:"#总结","aria-label":"Permalink to “总结”"},"​")],-1)),e[71]||(e[71]=n("p",null,"这个帖子不难理解。它简短地将如何定制用户环境从头介绍了一下。要深入了解bash/ksh/zsh/csh/tcsh/的能力，我建议你用下面的命令阅读man文档：",-1)),e[72]||(e[72]=n("pre",null,[n("code",null,`man bash
man zsh
man tcsh
man ksh
`)],-1)),n("blockquote",null,[n("p",null,[e[31]||(e[31]=l("这篇文章由Aadrika T. J.贡献；由admin编辑并增加了额外内容。你也可以",-1)),r(s,{href:"http://www.cyberciti.biz/write-for-nixcraft/"},{default:a(()=>[...e[30]||(e[30]=[l("为nixCraft做出贡献",-1)])]),_:1}),e[32]||(e[32]=l("。",-1))])]),e[73]||(e[73]=n("hr",null,null,-1)),n("p",null,[e[34]||(e[34]=l("via: ",-1)),r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/"},{default:a(()=>[...e[33]||(e[33]=[l("http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/",-1)])]),_:1})]),n("p",null,[e[38]||(e[38]=l("作者：",-1)),r(s,{href:"http://www.cyberciti.biz/tips/about-us"},{default:a(()=>[...e[35]||(e[35]=[l("nixCraft",-1)])]),_:1}),e[39]||(e[39]=l(" 译者：",-1)),r(s,{href:"https://github.com/zpl1025"},{default:a(()=>[...e[36]||(e[36]=[l("zpl1025",-1)])]),_:1}),e[40]||(e[40]=l(" 校对：",-1)),r(s,{href:"https://github.com/wxy"},{default:a(()=>[...e[37]||(e[37]=[l("wxy",-1)])]),_:1})]),n("p",null,[e[43]||(e[43]=l("本文由 ",-1)),r(s,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[41]||(e[41]=[l("LCTT",-1)])]),_:1}),e[44]||(e[44]=l(" 原创翻译，",-1)),r(s,{href:"http://linux.cn/"},{default:a(()=>[...e[42]||(e[42]=[l("Linux中国",-1)])]),_:1}),e[45]||(e[45]=l(" 荣誉推出",-1))])])}const v=t(d,[["render",u]]);export{S as __pageData,v as default};
