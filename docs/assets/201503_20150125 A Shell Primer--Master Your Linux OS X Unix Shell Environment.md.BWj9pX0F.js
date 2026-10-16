import{_ as t,a0 as i,w as h,s as p,ao as o,I as n,a1 as r,A as a,x as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"Shell入门：掌握Linux，OS X，Unix的Shell环境 | LCTT x X-CMD","titleTemplate":false,"description":"Shell入门：掌握Linux，OS X，Unix的Shell环境 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shell入门：掌握Linux，OS X，Unix的Shell环境 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shell入门：掌握Linux，OS X，Unix的Shell环境 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150125 A Shell Primer--Master Your Linux OS X Unix Shell Environment","title":"Shell入门：掌握Linux，OS X，Unix的Shell环境","tag":"201503","desc":""},"relativePath":"201503/20150125 A Shell Primer--Master Your Linux OS X Unix Shell Environment.md","filePath":"[post].md"}'),d={name:"201503/20150125 A Shell Primer--Master Your Linux OS X Unix Shell Environment.md"};function u(b,e,m,c,f,x){const s=i("Link");return h(),p("div",null,[e[46]||(e[46]=o(`<h1 id="shell入门-掌握linux-os-x-unix的shell环境" tabindex="-1">Shell入门：掌握Linux，OS X，Unix的Shell环境 <a class="header-anchor" href="#shell入门-掌握linux-os-x-unix的shell环境" aria-label="Permalink to “Shell入门：掌握Linux，OS X，Unix的Shell环境”">​</a></h1><p>在Linux或类Unix系统中，每个用户和进程都运行在一个特定环境中。这个环境包含了变量、设置、别名、函数以及更多的东西。下面是对Shell环境下一些常用命令的简单介绍，包括每个命令如何使用的例子，以及在命令行下设定你自己的环境来提高效率。</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/01/bash-shell-welcome-image.jpg" alt=""></p><h3 id="找出你当前的shell" tabindex="-1">找出你当前的shell <a class="header-anchor" href="#找出你当前的shell" aria-label="Permalink to “找出你当前的shell”">​</a></h3><p>在终端应用中输入下面命令中的任意一个：</p><pre><code>ps $$
ps -p $$
</code></pre><p>或者</p><pre><code>echo &quot;$0&quot;
</code></pre><p>输出范例：</p>`,9)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/finding-your-shell-like-a-pro/"},{default:a(()=>[...e[0]||(e[0]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/finding-your-shell-like-a-pro.jpg",alt:"图1: Finding out your shell name"},null,-1)])]),_:1})]),e[47]||(e[47]=n("p",null,[n("em",null,"图1：找出当前的shell")],-1)),e[48]||(e[48]=n("h3",{id:"找出所有已安装的shell",tabindex:"-1"},[l("找出所有已安装的shell "),n("a",{class:"header-anchor",href:"#找出所有已安装的shell","aria-label":"Permalink to “找出所有已安装的shell”"},"​")],-1)),e[49]||(e[49]=n("p",null,"找到已安装shell的完整路径：",-1)),e[50]||(e[50]=n("pre",null,[n("code",null,`type -a zsh
type -a ksh
type -a sh
type -a bash
`)],-1)),e[51]||(e[51]=n("p",null,"输出范例：",-1)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/finding-and-verifying-shell-path/"},{default:a(()=>[...e[1]||(e[1]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/finding-and-verifying-shell-path.jpg",alt:"Fig.02: Finding out your shell path"},null,-1)])]),_:1})]),e[52]||(e[52]=n("p",null,[n("em",null,"图2：找出shell的路径")],-1)),n("p",null,[e[3]||(e[3]=l("文件/etc/shells里包含了系统所支持的shell列表。每一行代表一个shell，是相对根目录的完整路径。用这个",-1)),r(s,{href:"http://www.cyberciti.biz/faq/linux-unix-appleosx-bsd-cat-command-examples/"},{default:a(()=>[...e[2]||(e[2]=[l("cat命令",-1)])]),_:1}),e[4]||(e[4]=l("来查看这些数据：",-1))]),e[53]||(e[53]=o(`<pre><code>cat /etc/shells
</code></pre><p>输出范例：</p><pre><code># List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.
 
/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/usr/local/bin/fish
</code></pre><h3 id="临时改变当前shell" tabindex="-1">临时改变当前shell <a class="header-anchor" href="#临时改变当前shell" aria-label="Permalink to “临时改变当前shell”">​</a></h3><p>只需要输入shell的名字。在下面的例子里，我从bash切换到了zsh：</p><pre><code>zsh
</code></pre><p>这只是临时改变了系统shell。也叫做子shell。要从子/临时shell退出，输入下面的命令或者按下CTRL-D：</p><pre><code>exit
</code></pre><h3 id="找出子shell的层级或临时shell的嵌套层级" tabindex="-1">找出子shell的层级或临时shell的嵌套层级 <a class="header-anchor" href="#找出子shell的层级或临时shell的嵌套层级" aria-label="Permalink to “找出子shell的层级或临时shell的嵌套层级”">​</a></h3><p>每个bash实例启动后，变量$SHLVL的值都会加一。输入下面的命令：</p><pre><code>echo &quot;$SHLVL&quot;
</code></pre><p>示例输出：</p>`,12)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/a-nested-shell-level-command/"},{default:a(()=>[...e[5]||(e[5]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/a-nested-shell-level-command.jpg",alt:"Fig. 03: Bash shell nesting level (subshell numbers)"},null,-1)])]),_:1})]),e[54]||(e[54]=o(`<p><em>图3：Bash shell嵌套层级（子shell数目）</em></p><h3 id="通过chsh命令永久变更系统shell" tabindex="-1">通过chsh命令永久变更系统shell <a class="header-anchor" href="#通过chsh命令永久变更系统shell" aria-label="Permalink to “通过chsh命令永久变更系统shell”">​</a></h3><p>想要把当前系统shell从bash永久换成zsh？试试这个：</p><pre><code>chsh -s /bin/zsh
</code></pre><p>想把其他用户的shell从bash永久换成ksh？试试这个：</p><pre><code>sudo chsh -s /bin/ksh userNameHere
</code></pre><h3 id="查看当前的环境变量" tabindex="-1">查看当前的环境变量 <a class="header-anchor" href="#查看当前的环境变量" aria-label="Permalink to “查看当前的环境变量”">​</a></h3><p>你需要用到：</p><pre><code>env
env | more
env | less
env | grep &#39;NAME&#39;
</code></pre><p>示例输出：</p><pre><code>TERM_PROGRAM=Apple_Terminal
SHELL=/bin/bash
TERM=xterm-256color
TMPDIR=/var/folders/6x/45252d6j1lqbtyy_xt62h40c0000gn/T/
Apple_PubSub_Socket_Render=/tmp/launch-djaOJg/Render
TERM_PROGRAM_VERSION=326
TERM_SESSION_ID=16F470E3-501C-498E-B315-D70E538DA825
USER=vivek
SSH_AUTH_SOCK=/tmp/launch-uQGJ2h/Listeners
__CF_USER_TEXT_ENCODING=0x1F5:0:0
PATH=/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/opt/X11/bin:/usr/local/go/bin:/usr/local/sbin/modemZapp:/Users/vivek/google-cloud-sdk/bin
__CHECKFIX1436934=1
PWD=/Users/vivek
SHLVL=2
HOME=/Users/vivek
LOGNAME=vivek
LC_CTYPE=UTF-8
DISPLAY=/tmp/launch-6hNAhh/org.macosforge.xquartz:0
_=/usr/bin/env
OLDPWD=/Users/vivek
</code></pre><p>下面是bash shell里一些常见变量的列表：</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/01/common-shell-vars.jpg" alt="Fig.04: Common bash environment variables"></p><p><em>图4：常见bash环境变量</em></p><blockquote><p><strong>注意</strong>：下面这些环境变量没事不要乱改。很可能会造成不稳定的shell会话：</p><p>SHELL</p><p>UID</p><p>RANDOM</p><p>PWD</p><p>PPID</p><p>SSH_AUTH_SOCK</p><p>USER</p><p>HOME</p><p>LINENO</p></blockquote><h3 id="显示环境变量的值" tabindex="-1">显示环境变量的值 <a class="header-anchor" href="#显示环境变量的值" aria-label="Permalink to “显示环境变量的值”">​</a></h3><p>使用下面任意一条命令显示环境变量HOME的值：</p><pre><code>## 使用printenv ##
printenv HOME
 
## 或者用echo ##
echo &quot;$HOME&quot;
 
# 考虑到可移植性，也可以用printf ##
printf &quot;%s\\n&quot; &quot;$HOME&quot;
</code></pre><p>示例输出：</p><pre><code>/home/vivek
</code></pre><h3 id="增加或设定一个新环境变量" tabindex="-1">增加或设定一个新环境变量 <a class="header-anchor" href="#增加或设定一个新环境变量" aria-label="Permalink to “增加或设定一个新环境变量”">​</a></h3><p>下面是bash，zsh，sh和ksh的语法：</p><pre><code>## 语法 ##
VAR=value
FOO=bar
 
## 设定vim为默认文本编辑器 ##
EDITOR=vim
export $EDITOR
 
## 考虑安全性，设定默认shell连接超时时间 ##
TMOUT=300
export TMOUT
 
## 你可以直接使用export命令设定命令的搜素路径 ##
export PATH=$PATH:$HOME/bin:/usr/local/bin:/path/to/mycoolapps
</code></pre><p>然后，使用printenv或者echo或printf命令查看环境变量PATH，EDITOR，和TMOUT的值：</p><pre><code>printenv PATH
echo &quot;$EDITOR&quot;
printf &quot;%s\\n&quot; $TMOUT
</code></pre><h3 id="怎么修改一个现有的环境变量" tabindex="-1">怎么修改一个现有的环境变量？ <a class="header-anchor" href="#怎么修改一个现有的环境变量" aria-label="Permalink to “怎么修改一个现有的环境变量？”">​</a></h3><p>下面是语法：</p><pre><code>export VAR=value
## 或者 ##
VAR=value
export $VAR
 
## 把默认文本编辑器从vim改为emacs ##
echo &quot;$EDITOR&quot; ## &lt;--- 屏幕输出vim
EDITOR=emacs   ## &lt;--- 修改
export $EDITOR ## &lt;--- 让修改在其他会话生效
echo &quot;$EDITOR&quot; ## &lt;--- 屏幕输出emacs 
</code></pre><p><strong>tcsh shell下增加和修改变量</strong>的语法是下面这样的：</p><pre><code>## 语法
setenv var value
printenv var
 
## 设置变量foo的值为bar ##
setenv foo bar
echo &quot;$foo&quot;
printenv foo
 
## 设置变量PATH ##
setenv PATH $PATH\\:$HOME/bin
echo &quot;$PATH&quot;
 
## 设置变量PAGER ##
setenv PAGER most
printf &quot;%s\\n&quot; $PAGER
</code></pre><h3 id="找出bash-shell的配置文件" tabindex="-1">找出bash shell的配置文件 <a class="header-anchor" href="#找出bash-shell的配置文件" aria-label="Permalink to “找出bash shell的配置文件”">​</a></h3><p>用下面的命令列出bash shell的文件：</p><pre><code>ls -l ~/.bash* ~/.profile /etc/bash* /etc/profile
</code></pre><p>示例输出：</p>`,34)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/list-bash-enviroment-variables/"},{default:a(()=>[...e[6]||(e[6]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/list-bash-enviroment-variables.jpg",alt:"Fig.05: List all bash environment configuration files"},null,-1)])]),_:1})]),e[55]||(e[55]=o(`<p><em>图5：列出bash的所有配置文件</em></p><p>要查看所有的bash配置文件，输入：</p><pre><code>less ~/.bash* ~/.profile /etc/bash* /etc/profile
</code></pre><p>可以使用文字编辑器比如vim或emacs来一个一个编辑bash配置文件：</p><pre><code>vim ~/.bashrc
</code></pre><p>编辑/etc/目录下的文件，输入：</p><pre><code>## 首先是备份，以防万一
sudo cp -v /etc/bashrc /etc/bashrc.bak.22_jan_15
 
########################################################################
## 然后，随心所欲随便改吧，好好玩玩shell环境或者提高一下效率:)                 ##
########################################################################
sudo vim /etc/bashrc
</code></pre><h3 id="被bash-shell初始化过程中应用的文件搞糊涂了吗" tabindex="-1">被Bash shell初始化过程中应用的文件搞糊涂了吗？ <a class="header-anchor" href="#被bash-shell初始化过程中应用的文件搞糊涂了吗" aria-label="Permalink to “被Bash shell初始化过程中应用的文件搞糊涂了吗？”">​</a></h3><p>下面的&quot;bash初始化文件&quot;流程图应该有些帮助：</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/01/BashStartupfiles.jpg" alt=""></p><p>根据账户设定的默认shell，你的用户配置或系统配置可能是下面其中一种：</p><h3 id="找出zsh-shell配置文件" tabindex="-1">找出zsh shell配置文件 <a class="header-anchor" href="#找出zsh-shell配置文件" aria-label="Permalink to “找出zsh shell配置文件”">​</a></h3>`,12)),n("p",null,[e[8]||(e[8]=l("zsh的",-1)),r(s,{href:"http://zshwiki.org/home/config/files"},{default:a(()=>[...e[7]||(e[7]=[l("wiki",-1)])]),_:1}),e[9]||(e[9]=l("中建议用下面的命令：",-1))]),e[56]||(e[56]=o(`<pre><code>strings =zsh | grep zshrc
</code></pre><p>示例输出：</p><pre><code>/etc/zshrc
.zshrc
</code></pre><p>输入下面的命令列出你的zsh shell文件：</p><pre><code>ls -l /etc/zsh/* /etc/profile ~/.z*
</code></pre><p>查看所有zsh配置文件：</p><pre><code>less /etc/zsh/* /etc/profile ~/.z*
</code></pre><h3 id="找出ksh-shell配置文件" tabindex="-1">找出ksh shell配置文件 <a class="header-anchor" href="#找出ksh-shell配置文件" aria-label="Permalink to “找出ksh shell配置文件”">​</a></h3><ol><li>查看~/.profile或者/etc/profile文件。</li></ol><h3 id="找出tcsh-shell配置文件" tabindex="-1">找出tcsh shell配置文件 <a class="header-anchor" href="#找出tcsh-shell配置文件" aria-label="Permalink to “找出tcsh shell配置文件”">​</a></h3><ol><li>C shell查看~/.login，~/.cshrc文件。</li><li>TC shell查看~/.tcshrc和~/.cshrc文件。</li></ol><h3 id="我可以写个类似这样每次登录时都自动执行的脚本吗" tabindex="-1">我可以写个类似这样每次登录时都自动执行的脚本吗？ <a class="header-anchor" href="#我可以写个类似这样每次登录时都自动执行的脚本吗" aria-label="Permalink to “我可以写个类似这样每次登录时都自动执行的脚本吗？”">​</a></h3><p>是的，把你的命令或别名或其他设定添加到~/.bashrc（bash shell）或者~/.profile（sh/ksh/bash）或者~/.login（csh/tcsh）文件中。</p><h3 id="我可以写个类似这样每次登出都自动执行的脚本吗" tabindex="-1">我可以写个类似这样每次登出都自动执行的脚本吗？ <a class="header-anchor" href="#我可以写个类似这样每次登出都自动执行的脚本吗" aria-label="Permalink to “我可以写个类似这样每次登出都自动执行的脚本吗？”">​</a></h3><p>是的，把你的命令或别名或其他设定添加到~/.bash_logout（bash）或者~/.logout（csh/tcsh）文件。</p><h3 id="history-获取关于shell会话的更多信息" tabindex="-1">history：获取关于shell会话的更多信息 <a class="header-anchor" href="#history-获取关于shell会话的更多信息" aria-label="Permalink to “history：获取关于shell会话的更多信息”">​</a></h3><p>输入history命令来查看本次会话的历史：</p><pre><code>history
</code></pre><p>示例输出：</p><pre><code>    9  ls
   10  vi advanced-cache.php
   11  cd ..
   12  ls
   13  w
   14  cd ..
   15  ls
   16  pwd
   17  ls
   ....
   ..
   ...
   91  hddtemp /dev/sda
   92  yum install hddtemp
   93  hddtemp /dev/sda
   94  hddtemp /dev/sg0
   95  hddtemp /dev/sg1
   96  smartctl -d ata -A /dev/sda | grep -i temperature
   97  smartctl -d ata -A /dev/sg1 | grep -i temperature
   98  smartctl  -A /dev/sg1 | grep -i temperature
   99  sensors
</code></pre><p>输入history 20来查看命令历史的后20条：</p><pre><code>history 20
</code></pre><p>示例输出：</p>`,23)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/history-outputs/"},{default:a(()=>[...e[10]||(e[10]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/history-outputs.jpg",alt:"Fig.06: View session history in the bash shell using history command"},null,-1)])]),_:1})]),e[57]||(e[57]=o(`<p><em>图6：在bash shell中使用history命令查看会话历史</em></p><p>你可以重复使用之前的命令。简单地按下[上]或[下]方向键就可以查看之前的命令。在shell提示符下按下[CTRL-R]可以向后搜索历史缓存或文件来查找命令。重复最后一次命令，只需要在shell提示符下输入!!就好了：</p><pre><code>ls -l /foo/bar
!!
</code></pre><p>在以上的历史记录中找到命令#93 (hddtemp /dev/sda)，输入：</p><pre><code>!93
</code></pre><h3 id="使用sudo或su改变用户" tabindex="-1">使用sudo或su改变用户 <a class="header-anchor" href="#使用sudo或su改变用户" aria-label="Permalink to “使用sudo或su改变用户”">​</a></h3><p>下面是语法：</p><pre><code>su userName
 
## 登录为tom用户 ##
su tom
 
## 为用户tom打开一个新的shell会话 ##
su tom
 
## 登录为root用户 ##
su -
 
## sudo命令语法（必须在系统中配置有这个命令） ##
sudo -s
sudo tom
</code></pre>`,8)),n("p",null,[e[12]||(e[12]=l('看看帖子"',-1)),r(s,{href:"http://www.cyberciti.biz/open-source/command-line-hacks/linux-run-command-as-different-user/"},{default:a(()=>[...e[11]||(e[11]=[l("Linux下使用其他用户身份运行命令",-1)])]),_:1}),e[13]||(e[13]=l('"更多地了解sudo，su和runuser命令。',-1))]),e[58]||(e[58]=o(`<h3 id="shell别名" tabindex="-1">shell别名 <a class="header-anchor" href="#shell别名" aria-label="Permalink to “shell别名”">​</a></h3><p>别名仅仅是命令的一个快捷方式。</p><h3 id="列出所有的别名" tabindex="-1">列出所有的别名 <a class="header-anchor" href="#列出所有的别名" aria-label="Permalink to “列出所有的别名”">​</a></h3><p>输入下面的命令：</p><pre><code>alias
</code></pre><p>示例输出：</p><pre><code>alias ..=&#39;cd ..&#39;
alias ...=&#39;cd ../../../&#39;
alias ....=&#39;cd ../../../../&#39;
alias .....=&#39;cd ../../../../&#39;
alias .4=&#39;cd ../../../../&#39;
alias .5=&#39;cd ../../../../..&#39;
alias bc=&#39;bc -l&#39;
alias cd..=&#39;cd ..&#39;
alias chgrp=&#39;chgrp --preserve-root&#39;
alias chmod=&#39;chmod --preserve-root&#39;
alias chown=&#39;chown --preserve-root&#39;
alias cp=&#39;cp -i&#39;
alias dnstop=&#39;dnstop -l 5 eth1&#39;
alias egrep=&#39;egrep --color=auto&#39;
alias ethtool=&#39;ethtool eth1&#39;
</code></pre><h3 id="设定一个别名" tabindex="-1">设定一个别名 <a class="header-anchor" href="#设定一个别名" aria-label="Permalink to “设定一个别名”">​</a></h3><p>bash/zsh语法：</p><pre><code>alias c=&#39;clear&#39;
alias down=&#39;sudo /sbin/shutdown -h now&#39;
</code></pre><p>对于命令clear可以输入c别名，这样我们就可以输入c代替clear命令来清空屏幕：</p><pre><code>c
</code></pre><p>或者输入down来关闭基于Linux的服务器：</p><pre><code>down
</code></pre>`,14)),n("p",null,[e[15]||(e[15]=l('你可以设定任意多的别名。看下"',-1)),r(s,{href:"http://www.cyberciti.biz/tips/bash-aliases-mac-centos-linux-unix.html"},{default:a(()=>[...e[14]||(e[14]=[l("Linux/Unix/Mac OS X系统中的30个方便的bash shell别名",-1)])]),_:1}),e[16]||(e[16]=l('"了解在类Unix系统中别名的实际应用。',-1))]),e[59]||(e[59]=n("h3",{id:"shell函数",tabindex:"-1"},[l("shell函数 "),n("a",{class:"header-anchor",href:"#shell函数","aria-label":"Permalink to “shell函数”"},"​")],-1)),e[60]||(e[60]=n("p",null,"Bash/ksh/zsh函数允许你更进一步地配置shell环境。在这个例子中，我写了一个简单的名叫memcpu()的bash函数，用来显示前10个最占用CPU和内存的进程：",-1)),e[61]||(e[61]=n("pre",null,[n("code",null,`memcpu() { echo "*** Top 10 cpu eating process ***"; ps auxf | sort -nr -k 3 | head -10;
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
`)],-1)),n("p",null,[e[18]||(e[18]=l('看下"',-1)),r(s,{href:"http://bash.cyberciti.biz/guide/Chapter_9:_Functions"},{default:a(()=>[...e[17]||(e[17]=[l("如何编写和应用shell函数",-1)])]),_:1}),e[19]||(e[19]=l('"了解更多信息。',-1))]),e[64]||(e[64]=o(`<h3 id="综合一下-定制你自己的linux或unix-bash-shell工作环境" tabindex="-1">综合一下：定制你自己的Linux或Unix bash shell工作环境 <a class="header-anchor" href="#综合一下-定制你自己的linux或unix-bash-shell工作环境" aria-label="Permalink to “综合一下：定制你自己的Linux或Unix bash shell工作环境”">​</a></h3><p>现在，你将使用bash shell配置自己的环境。我只介绍bash。但是理论上zsh，ksh和其他常用shell都差不多。让我们看看如何调整shell来适合我作为系统管理员的需求。编辑你的~/.bashrc文件来附加设定。下面是一些常用的配置选项。</p><h4 id="_1-设定bash路径和环境变量" tabindex="-1">#1: 设定bash路径和环境变量 <a class="header-anchor" href="#_1-设定bash路径和环境变量" aria-label="Permalink to “#1: 设定bash路径和环境变量”">​</a></h4><pre><code># 设定路径 ##
export PATH=$PATH:/usr/local/bin:/home/vivek/bin:/opt/firefox/bin:/opt/oraapp/bin
 
# 为cd命令设定路径
export CDPATH=.:$HOME:/var/www
</code></pre><p>使用less或more命令作为翻页器：</p><pre><code>export PAGER=less
</code></pre><p>设定vim作为默认文本编辑器：</p><pre><code>export EDITOR=vim
export VISUAL=vim
export SVN_EDITOR=&quot;$VISUAL&quot;
</code></pre><p>设定Oracle数据库特别要求的参数：</p><pre><code>export ORACLE_HOME=/usr/lib/oracle/xe/app/oracle/product/10.2.0/server
export ORACLE_SID=XE
export NLS_LANG=$($ORACLE_HOME/bin/nls_lang.sh)
</code></pre><p>设定JAVA_HOME和其他java路径，比如java版本：</p><pre><code>export JAVA_HOME=/usr/lib/jvm/java-6-sun/jre
 
# 把ORACLE和JAVA加入到PATH里
export PATH=$PATH:$ORACLE_HOME/bin:$JAVA_HOME/bin
</code></pre>`,12)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/faq/ssh-passwordless-login-with-keychain-for-scripts/"},{default:a(()=>[...e[20]||(e[20]=[l("使用密钥实现免密码登录",-1)])]),_:1}),e[21]||(e[21]=l("让ssh远程登录更安全：",-1))]),e[65]||(e[65]=n("pre",null,[n("code",null,`# 再也不用输密码了
/usr/bin/keychain $HOME/.ssh/id_rsa
source $HOME/.keychain/$HOSTNAME-sh
`)],-1)),n("p",null,[e[23]||(e[23]=l("最后，",-1)),r(s,{href:"http://www.cyberciti.biz/faq/fedora-redhat-scientific-linuxenable-bash-completion/"},{default:a(()=>[...e[22]||(e[22]=[l("打开bash命令补齐",-1)])]),_:1})]),e[66]||(e[66]=n("pre",null,[n("code",null,`source /etc/bash_completion
`)],-1)),e[67]||(e[67]=n("h4",{id:"_2-设定bash命令提示符",tabindex:"-1"},[l("#2: 设定bash命令提示符 "),n("a",{class:"header-anchor",href:"#_2-设定bash命令提示符","aria-label":"Permalink to “#2: 设定bash命令提示符”"},"​")],-1)),n("p",null,[e[25]||(e[25]=l("设定",-1)),r(s,{href:"http://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html"},{default:a(()=>[...e[24]||(e[24]=[l("定制的bash提示符(PS1)",-1)])]),_:1}),e[26]||(e[26]=l(":",-1))]),e[68]||(e[68]=o(`<pre><code>PS1=&#39;{\\u@\\h:\\w }\\$ &#39;
</code></pre><h4 id="_3-设定默认文件权限" tabindex="-1">#3: 设定默认文件权限 <a class="header-anchor" href="#_3-设定默认文件权限" aria-label="Permalink to “#3: 设定默认文件权限”">​</a></h4><pre><code>## 设定默认权限为644 ##
umask 022
</code></pre><h4 id="_4-调整shell命令历史设定" tabindex="-1">#4: 调整shell命令历史设定 <a class="header-anchor" href="#_4-调整shell命令历史设定" aria-label="Permalink to “#4: 调整shell命令历史设定”">​</a></h4><pre><code># 不往命令历史里写入相同的行
HISTCONTROL=ignoreboth
 
# 忽略这些命令
HISTIGNORE=&quot;reboot:shutdown *:ls:pwd:exit:mount:man *:history&quot;
 
# 通过HISTSIZE和HISTFILESIZE设定命令历史的长度
export HISTSIZE=10000
export HISTFILESIZE=10000
 
# 为命令历史文件增加时间戳
export HISTTIMEFORMAT=&quot;%F %T &quot;
 
# 附加到命令历史文件，而不是覆盖
shopt -s histappend
</code></pre><h4 id="_5-设定shell会话的时区" tabindex="-1">#5: 设定shell会话的时区 <a class="header-anchor" href="#_5-设定shell会话的时区" aria-label="Permalink to “#5: 设定shell会话的时区”">​</a></h4><pre><code>## 为我自己的shell会话设定IST（印度标准时间） ##
TZ=Asia/Kolkata
</code></pre><h4 id="_6-设定shell行编辑接口" tabindex="-1">#6: 设定shell行编辑接口 <a class="header-anchor" href="#_6-设定shell行编辑接口" aria-label="Permalink to “#6: 设定shell行编辑接口”">​</a></h4><pre><code>## 使用vi风格的行编辑接口，替代bash默认的emacs模式 ##
set -o vi
</code></pre><h4 id="_7-设定自己喜好的别名" tabindex="-1">#7: 设定自己喜好的别名 <a class="header-anchor" href="#_7-设定自己喜好的别名" aria-label="Permalink to “#7: 设定自己喜好的别名”">​</a></h4><pre><code>## 增加一些保护 ##
alias rm=&#39;rm -i&#39;
alias cp=&#39;cp -i&#39;
alias mv=&#39;mv -i&#39;
 
## Memcached ##
alias mcdstats=&#39;/usr/bin/memcached-tool 10.10.29.68:11211 stats&#39;
alias mcdshow=&#39;/usr/bin/memcached-tool 10.10.29.68:11211 display&#39;
alias mcdflush=&#39;echo &quot;flush_all&quot; | nc 10.10.29.68 11211&#39;
 
## 默认命令参数 ##
alias vi=&#39;vim&#39;
alias grep=&#39;grep --color=auto&#39;
alias egrep=&#39;egrep --color=auto&#39;
alias fgrep=&#39;fgrep --color=auto&#39;
alias bc=&#39;bc -l&#39;
alias wget=&#39;wget -c&#39;
alias chown=&#39;chown --preserve-root&#39;
alias chmod=&#39;chmod --preserve-root&#39;
alias chgrp=&#39;chgrp --preserve-root&#39;
alias rm=&#39;rm -I --preserve-root&#39;
alias ln=&#39;ln -i&#39;
</code></pre><p>下面是一些额外的OS X Unix bash shell别名：</p><pre><code># 从bash打开桌面应用
alias preview=&quot;open -a &#39;$PREVIEW&#39;&quot;
alias safari=&quot;open -a safari&quot;
alias firefox=&quot;open -a firefox&quot;
alias chrome=&quot;open -a google\\ chrome&quot;
alias f=&#39;open -a Finder &#39;
 
# 清理那些.DS_Store文件
alias dsclean=&#39;find . -type f -name .DS_Store -delete&#39;
</code></pre><h4 id="_8-寡人好色" tabindex="-1">#8: 寡人好色 <a class="header-anchor" href="#_8-寡人好色" aria-label="Permalink to “#8: 寡人好色”">​</a></h4><pre><code># 彩色的grep输出 
alias grep=&#39;grep --color=auto&#39;
export GREP_COLOR=&#39;1;33&#39;
 
# 彩色的ls
export LSCOLORS=&#39;Gxfxcxdxdxegedabagacad&#39;
# Gnu/linux的ls
ls=&#39;ls --color=auto&#39;
 
# BSD/os x的ls命令
# alias ls=&#39;ls -G&#39;
</code></pre><h4 id="_9-设定自己喜好的bash函数" tabindex="-1">#9: 设定自己喜好的bash函数 <a class="header-anchor" href="#_9-设定自己喜好的bash函数" aria-label="Permalink to “#9: 设定自己喜好的bash函数”">​</a></h4><pre><code># 在屏幕上显示10个最近的历史命令
function ht {
  history | awk &#39;{a[$2]++}END{for(i in a){print a[i] &quot; &quot; i}}&#39; | sort -rn | head
}
 
# host和ping命令的替代
# 接受http:// 或 https:// 或 ftps:// 名称用作域或主机名
_getdomainnameonly(){
	local h=&quot;$1&quot;
	local f=&quot;\${h,,}&quot;
	# remove protocol part of hostname
        f=&quot;\${f#http://}&quot;
        f=&quot;\${f#https://}&quot;
	f=&quot;\${f#ftp://}&quot;
	f=&quot;\${f#scp://}&quot;
	f=&quot;\${f#scp://}&quot;
	f=&quot;\${f#sftp://}&quot;
	# remove username and/or username:password part of hostname
	f=&quot;\${f#*:*@}&quot;
	f=&quot;\${f#*@}&quot;
	# remove all /foo/xyz.html*  
	f=\${f%%/*}
	# show domain name only
	echo &quot;$f&quot;
}
 
 
ping(){
	local array=( $@ )  		# get all args in an array
	local len=\${#array[@]}          # find the length of an array
	local host=\${array[$len-1]}     # get the last arg
	local args=\${array[@]:0:$len-1} # get all args before the last arg in $@ in an array 
	local _ping=&quot;/bin/ping&quot;
	local c=$(_getdomainnameonly &quot;$host&quot;)
	[ &quot;$t&quot; != &quot;$c&quot; ] &amp;&amp; echo &quot;Sending ICMP ECHO_REQUEST to \\&quot;$c\\&quot;...&quot;
	# pass args and host
	$_ping $args $c
}
 
host(){
	local array=( $@ )
	local len=\${#array[@]}
	local host=\${array[$len-1]}
	local args=\${array[@]:0:$len-1}
	local _host=&quot;/usr/bin/host&quot;
	local c=$(_getdomainnameonly &quot;$host&quot;)
	[ &quot;$t&quot; != &quot;$c&quot; ] &amp;&amp; echo &quot;Performing DNS lookups for \\&quot;$c\\&quot;...&quot;
  	$_host $args $c
}
</code></pre><h4 id="_10-通过shell-shopt命令设定bash-shell行为" tabindex="-1">#10: 通过shell shopt命令设定bash shell行为 <a class="header-anchor" href="#_10-通过shell-shopt命令设定bash-shell行为" aria-label="Permalink to “#10: 通过shell shopt命令设定bash shell行为”">​</a></h4>`,18)),n("p",null,[e[28]||(e[28]=l("最后，你可以",-1)),r(s,{href:"http://bash.cyberciti.biz/guide/Setting_shell_options"},{default:a(()=>[...e[27]||(e[27]=[l("使用set和shopt命令调整bash shell环境",-1)])]),_:1}),e[29]||(e[29]=l("：",-1))]),e[69]||(e[69]=n("pre",null,[n("code",null,`# 目录拼写纠正
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
