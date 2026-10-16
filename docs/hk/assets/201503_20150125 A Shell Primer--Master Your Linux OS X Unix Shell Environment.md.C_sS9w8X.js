import{_ as t,a0 as i,w as h,s as p,ao as o,I as n,a1 as r,A as a,x as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"Shell入門：掌握Linux，OS X，Unix的Shell環境 | LCTT x X-CMD","titleTemplate":false,"description":"Shell入門：掌握Linux，OS X，Unix的Shell環境 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shell入門：掌握Linux，OS X，Unix的Shell環境 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shell入門：掌握Linux，OS X，Unix的Shell環境 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150125 A Shell Primer--Master Your Linux OS X Unix Shell Environment","title":"Shell入門：掌握Linux，OS X，Unix的Shell環境","tag":"201503","desc":""},"relativePath":"201503/20150125 A Shell Primer--Master Your Linux OS X Unix Shell Environment.md","filePath":"[post].md"}'),d={name:"201503/20150125 A Shell Primer--Master Your Linux OS X Unix Shell Environment.md"};function u(b,e,m,c,f,x){const s=i("Link");return h(),p("div",null,[e[46]||(e[46]=o(`<h1 id="shell入門-掌握linux-os-x-unix的shell環境" tabindex="-1">Shell入門：掌握Linux，OS X，Unix的Shell環境 <a class="header-anchor" href="#shell入門-掌握linux-os-x-unix的shell環境" aria-label="Permalink to “Shell入門：掌握Linux，OS X，Unix的Shell環境”">​</a></h1><p>在Linux或類Unix系統中，每個用户和進程都運行在一個特定環境中。這個環境包含了變量、設置、別名、函數以及更多的東西。下面是對Shell環境下一些常用命令的簡單介紹，包括每個命令如何使用的例子，以及在命令列下設定你自己的環境來提高效率。</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/01/bash-shell-welcome-image.jpg" alt=""></p><h3 id="找出你當前的shell" tabindex="-1">找出你當前的shell <a class="header-anchor" href="#找出你當前的shell" aria-label="Permalink to “找出你當前的shell”">​</a></h3><p>在終端應用中輸入下面命令中的任意一個：</p><pre><code>ps $$
ps -p $$
</code></pre><p>或者</p><pre><code>echo &quot;$0&quot;
</code></pre><p>輸出範例：</p>`,9)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/finding-your-shell-like-a-pro/"},{default:a(()=>[...e[0]||(e[0]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/finding-your-shell-like-a-pro.jpg",alt:"圖1: Finding out your shell name"},null,-1)])]),_:1})]),e[47]||(e[47]=n("p",null,[n("em",null,"圖1：找出當前的shell")],-1)),e[48]||(e[48]=n("h3",{id:"找出所有已安裝的shell",tabindex:"-1"},[l("找出所有已安裝的shell "),n("a",{class:"header-anchor",href:"#找出所有已安裝的shell","aria-label":"Permalink to “找出所有已安裝的shell”"},"​")],-1)),e[49]||(e[49]=n("p",null,"找到已安裝shell的完整路徑：",-1)),e[50]||(e[50]=n("pre",null,[n("code",null,`type -a zsh
type -a ksh
type -a sh
type -a bash
`)],-1)),e[51]||(e[51]=n("p",null,"輸出範例：",-1)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/finding-and-verifying-shell-path/"},{default:a(()=>[...e[1]||(e[1]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/finding-and-verifying-shell-path.jpg",alt:"Fig.02: Finding out your shell path"},null,-1)])]),_:1})]),e[52]||(e[52]=n("p",null,[n("em",null,"圖2：找出shell的路徑")],-1)),n("p",null,[e[3]||(e[3]=l("文件/etc/shells裏包含了系統所支持的shell列表。每一行代表一個shell，是相對根目錄的完整路徑。用這個",-1)),r(s,{href:"http://www.cyberciti.biz/faq/linux-unix-appleosx-bsd-cat-command-examples/"},{default:a(()=>[...e[2]||(e[2]=[l("cat命令",-1)])]),_:1}),e[4]||(e[4]=l("來查看這些數據：",-1))]),e[53]||(e[53]=o(`<pre><code>cat /etc/shells
</code></pre><p>輸出範例：</p><pre><code># List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.
 
/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/usr/local/bin/fish
</code></pre><h3 id="臨時改變當前shell" tabindex="-1">臨時改變當前shell <a class="header-anchor" href="#臨時改變當前shell" aria-label="Permalink to “臨時改變當前shell”">​</a></h3><p>只需要輸入shell的名字。在下面的例子裏，我從bash切換到了zsh：</p><pre><code>zsh
</code></pre><p>這只是臨時改變了系統shell。也叫做子shell。要從子/臨時shell退出，輸入下面的命令或者按下CTRL-D：</p><pre><code>exit
</code></pre><h3 id="找出子shell的層級或臨時shell的嵌套層級" tabindex="-1">找出子shell的層級或臨時shell的嵌套層級 <a class="header-anchor" href="#找出子shell的層級或臨時shell的嵌套層級" aria-label="Permalink to “找出子shell的層級或臨時shell的嵌套層級”">​</a></h3><p>每個bash實例啓動後，變量$SHLVL的值都會加一。輸入下面的命令：</p><pre><code>echo &quot;$SHLVL&quot;
</code></pre><p>示例輸出：</p>`,12)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/a-nested-shell-level-command/"},{default:a(()=>[...e[5]||(e[5]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/a-nested-shell-level-command.jpg",alt:"Fig. 03: Bash shell nesting level (subshell numbers)"},null,-1)])]),_:1})]),e[54]||(e[54]=o(`<p><em>圖3：Bash shell嵌套層級（子shell數目）</em></p><h3 id="通過chsh命令永久變更系統shell" tabindex="-1">通過chsh命令永久變更系統shell <a class="header-anchor" href="#通過chsh命令永久變更系統shell" aria-label="Permalink to “通過chsh命令永久變更系統shell”">​</a></h3><p>想要把當前系統shell從bash永久換成zsh？試試這個：</p><pre><code>chsh -s /bin/zsh
</code></pre><p>想把其他用户的shell從bash永久換成ksh？試試這個：</p><pre><code>sudo chsh -s /bin/ksh userNameHere
</code></pre><h3 id="查看當前的環境變量" tabindex="-1">查看當前的環境變量 <a class="header-anchor" href="#查看當前的環境變量" aria-label="Permalink to “查看當前的環境變量”">​</a></h3><p>你需要用到：</p><pre><code>env
env | more
env | less
env | grep &#39;NAME&#39;
</code></pre><p>示例輸出：</p><pre><code>TERM_PROGRAM=Apple_Terminal
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
</code></pre><p>下面是bash shell裏一些常見變量的列表：</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/01/common-shell-vars.jpg" alt="Fig.04: Common bash environment variables"></p><p><em>圖4：常見bash環境變量</em></p><blockquote><p><strong>注意</strong>：下面這些環境變量沒事不要亂改。很可能會造成不穩定的shell會話：</p><p>SHELL</p><p>UID</p><p>RANDOM</p><p>PWD</p><p>PPID</p><p>SSH_AUTH_SOCK</p><p>USER</p><p>HOME</p><p>LINENO</p></blockquote><h3 id="顯示環境變量的值" tabindex="-1">顯示環境變量的值 <a class="header-anchor" href="#顯示環境變量的值" aria-label="Permalink to “顯示環境變量的值”">​</a></h3><p>使用下面任意一條命令顯示環境變量HOME的值：</p><pre><code>## 使用printenv ##
printenv HOME
 
## 或者用echo ##
echo &quot;$HOME&quot;
 
# 考慮到可移植性，也可以用printf ##
printf &quot;%s\\n&quot; &quot;$HOME&quot;
</code></pre><p>示例輸出：</p><pre><code>/home/vivek
</code></pre><h3 id="增加或設定一個新環境變量" tabindex="-1">增加或設定一個新環境變量 <a class="header-anchor" href="#增加或設定一個新環境變量" aria-label="Permalink to “增加或設定一個新環境變量”">​</a></h3><p>下面是bash，zsh，sh和ksh的語法：</p><pre><code>## 語法 ##
VAR=value
FOO=bar
 
## 設定vim為默認文本編輯器 ##
EDITOR=vim
export $EDITOR
 
## 考慮安全性，設定默認shell連接超時時間 ##
TMOUT=300
export TMOUT
 
## 你可以直接使用export命令設定命令的搜素路徑 ##
export PATH=$PATH:$HOME/bin:/usr/local/bin:/path/to/mycoolapps
</code></pre><p>然後，使用printenv或者echo或printf命令查看環境變量PATH，EDITOR，和TMOUT的值：</p><pre><code>printenv PATH
echo &quot;$EDITOR&quot;
printf &quot;%s\\n&quot; $TMOUT
</code></pre><h3 id="怎麼修改一個現有的環境變量" tabindex="-1">怎麼修改一個現有的環境變量？ <a class="header-anchor" href="#怎麼修改一個現有的環境變量" aria-label="Permalink to “怎麼修改一個現有的環境變量？”">​</a></h3><p>下面是語法：</p><pre><code>export VAR=value
## 或者 ##
VAR=value
export $VAR
 
## 把默認文本編輯器從vim改為emacs ##
echo &quot;$EDITOR&quot; ## &lt;--- 屏幕輸出vim
EDITOR=emacs   ## &lt;--- 修改
export $EDITOR ## &lt;--- 讓修改在其他會話生效
echo &quot;$EDITOR&quot; ## &lt;--- 屏幕輸出emacs 
</code></pre><p><strong>tcsh shell下增加和修改變量</strong>的語法是下面這樣的：</p><pre><code>## 語法
setenv var value
printenv var
 
## 設置變量foo的值為bar ##
setenv foo bar
echo &quot;$foo&quot;
printenv foo
 
## 設置變量PATH ##
setenv PATH $PATH\\:$HOME/bin
echo &quot;$PATH&quot;
 
## 設置變量PAGER ##
setenv PAGER most
printf &quot;%s\\n&quot; $PAGER
</code></pre><h3 id="找出bash-shell的配置文件" tabindex="-1">找出bash shell的配置文件 <a class="header-anchor" href="#找出bash-shell的配置文件" aria-label="Permalink to “找出bash shell的配置文件”">​</a></h3><p>用下面的命令列出bash shell的文件：</p><pre><code>ls -l ~/.bash* ~/.profile /etc/bash* /etc/profile
</code></pre><p>示例輸出：</p>`,34)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/list-bash-enviroment-variables/"},{default:a(()=>[...e[6]||(e[6]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/list-bash-enviroment-variables.jpg",alt:"Fig.05: List all bash environment configuration files"},null,-1)])]),_:1})]),e[55]||(e[55]=o(`<p><em>圖5：列出bash的所有配置文件</em></p><p>要查看所有的bash配置文件，輸入：</p><pre><code>less ~/.bash* ~/.profile /etc/bash* /etc/profile
</code></pre><p>可以使用文字編輯器比如vim或emacs來一個一個編輯bash配置文件：</p><pre><code>vim ~/.bashrc
</code></pre><p>編輯/etc/目錄下的文件，輸入：</p><pre><code>## 首先是備份，以防萬一
sudo cp -v /etc/bashrc /etc/bashrc.bak.22_jan_15
 
########################################################################
## 然後，隨心所欲隨便改吧，好好玩玩shell環境或者提高一下效率:)                 ##
########################################################################
sudo vim /etc/bashrc
</code></pre><h3 id="被bash-shell初始化過程中應用的文件搞糊塗了嗎" tabindex="-1">被Bash shell初始化過程中應用的文件搞糊塗了嗎？ <a class="header-anchor" href="#被bash-shell初始化過程中應用的文件搞糊塗了嗎" aria-label="Permalink to “被Bash shell初始化過程中應用的文件搞糊塗了嗎？”">​</a></h3><p>下面的&quot;bash初始化文件&quot;流程圖應該有些幫助：</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/01/BashStartupfiles.jpg" alt=""></p><p>根據賬户設定的默認shell，你的用户配置或系統配置可能是下面其中一種：</p><h3 id="找出zsh-shell配置文件" tabindex="-1">找出zsh shell配置文件 <a class="header-anchor" href="#找出zsh-shell配置文件" aria-label="Permalink to “找出zsh shell配置文件”">​</a></h3>`,12)),n("p",null,[e[8]||(e[8]=l("zsh的",-1)),r(s,{href:"http://zshwiki.org/home/config/files"},{default:a(()=>[...e[7]||(e[7]=[l("wiki",-1)])]),_:1}),e[9]||(e[9]=l("中建議用下面的命令：",-1))]),e[56]||(e[56]=o(`<pre><code>strings =zsh | grep zshrc
</code></pre><p>示例輸出：</p><pre><code>/etc/zshrc
.zshrc
</code></pre><p>輸入下面的命令列出你的zsh shell文件：</p><pre><code>ls -l /etc/zsh/* /etc/profile ~/.z*
</code></pre><p>查看所有zsh配置文件：</p><pre><code>less /etc/zsh/* /etc/profile ~/.z*
</code></pre><h3 id="找出ksh-shell配置文件" tabindex="-1">找出ksh shell配置文件 <a class="header-anchor" href="#找出ksh-shell配置文件" aria-label="Permalink to “找出ksh shell配置文件”">​</a></h3><ol><li>查看~/.profile或者/etc/profile文件。</li></ol><h3 id="找出tcsh-shell配置文件" tabindex="-1">找出tcsh shell配置文件 <a class="header-anchor" href="#找出tcsh-shell配置文件" aria-label="Permalink to “找出tcsh shell配置文件”">​</a></h3><ol><li>C shell查看~/.login，~/.cshrc文件。</li><li>TC shell查看~/.tcshrc和~/.cshrc文件。</li></ol><h3 id="我可以寫個類似這樣每次登錄時都自動執行的腳本嗎" tabindex="-1">我可以寫個類似這樣每次登錄時都自動執行的腳本嗎？ <a class="header-anchor" href="#我可以寫個類似這樣每次登錄時都自動執行的腳本嗎" aria-label="Permalink to “我可以寫個類似這樣每次登錄時都自動執行的腳本嗎？”">​</a></h3><p>是的，把你的命令或別名或其他設定添加到~/.bashrc（bash shell）或者~/.profile（sh/ksh/bash）或者~/.login（csh/tcsh）文件中。</p><h3 id="我可以寫個類似這樣每次登出都自動執行的腳本嗎" tabindex="-1">我可以寫個類似這樣每次登出都自動執行的腳本嗎？ <a class="header-anchor" href="#我可以寫個類似這樣每次登出都自動執行的腳本嗎" aria-label="Permalink to “我可以寫個類似這樣每次登出都自動執行的腳本嗎？”">​</a></h3><p>是的，把你的命令或別名或其他設定添加到~/.bash_logout（bash）或者~/.logout（csh/tcsh）文件。</p><h3 id="history-獲取關於shell會話的更多信息" tabindex="-1">history：獲取關於shell會話的更多信息 <a class="header-anchor" href="#history-獲取關於shell會話的更多信息" aria-label="Permalink to “history：獲取關於shell會話的更多信息”">​</a></h3><p>輸入history命令來查看本次會話的歷史：</p><pre><code>history
</code></pre><p>示例輸出：</p><pre><code>    9  ls
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
</code></pre><p>輸入history 20來查看命令歷史的後20條：</p><pre><code>history 20
</code></pre><p>示例輸出：</p>`,23)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/attachment/history-outputs/"},{default:a(()=>[...e[10]||(e[10]=[n("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/history-outputs.jpg",alt:"Fig.06: View session history in the bash shell using history command"},null,-1)])]),_:1})]),e[57]||(e[57]=o(`<p><em>圖6：在bash shell中使用history命令查看會話歷史</em></p><p>你可以重複使用之前的命令。簡單地按下[上]或[下]方向鍵就可以查看之前的命令。在shell提示符下按下[CTRL-R]可以向後搜索歷史緩存或文件來查找命令。重複最後一次命令，只需要在shell提示符下輸入!!就好了：</p><pre><code>ls -l /foo/bar
!!
</code></pre><p>在以上的歷史記錄中找到命令#93 (hddtemp /dev/sda)，輸入：</p><pre><code>!93
</code></pre><h3 id="使用sudo或su改變用户" tabindex="-1">使用sudo或su改變用户 <a class="header-anchor" href="#使用sudo或su改變用户" aria-label="Permalink to “使用sudo或su改變用户”">​</a></h3><p>下面是語法：</p><pre><code>su userName
 
## 登錄為tom用户 ##
su tom
 
## 為用户tom打開一個新的shell會話 ##
su tom
 
## 登錄為root用户 ##
su -
 
## sudo命令語法（必須在系統中配置有這個命令） ##
sudo -s
sudo tom
</code></pre>`,8)),n("p",null,[e[12]||(e[12]=l('看看帖子"',-1)),r(s,{href:"http://www.cyberciti.biz/open-source/command-line-hacks/linux-run-command-as-different-user/"},{default:a(()=>[...e[11]||(e[11]=[l("Linux下使用其他用户身份運行命令",-1)])]),_:1}),e[13]||(e[13]=l('"更多地瞭解sudo，su和runuser命令。',-1))]),e[58]||(e[58]=o(`<h3 id="shell別名" tabindex="-1">shell別名 <a class="header-anchor" href="#shell別名" aria-label="Permalink to “shell別名”">​</a></h3><p>別名僅僅是命令的一個快捷方式。</p><h3 id="列出所有的別名" tabindex="-1">列出所有的別名 <a class="header-anchor" href="#列出所有的別名" aria-label="Permalink to “列出所有的別名”">​</a></h3><p>輸入下面的命令：</p><pre><code>alias
</code></pre><p>示例輸出：</p><pre><code>alias ..=&#39;cd ..&#39;
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
</code></pre><h3 id="設定一個別名" tabindex="-1">設定一個別名 <a class="header-anchor" href="#設定一個別名" aria-label="Permalink to “設定一個別名”">​</a></h3><p>bash/zsh語法：</p><pre><code>alias c=&#39;clear&#39;
alias down=&#39;sudo /sbin/shutdown -h now&#39;
</code></pre><p>對於命令clear可以輸入c別名，這樣我們就可以輸入c代替clear命令來清空屏幕：</p><pre><code>c
</code></pre><p>或者輸入down來關閉基於Linux的服務器：</p><pre><code>down
</code></pre>`,14)),n("p",null,[e[15]||(e[15]=l('你可以設定任意多的別名。看下"',-1)),r(s,{href:"http://www.cyberciti.biz/tips/bash-aliases-mac-centos-linux-unix.html"},{default:a(()=>[...e[14]||(e[14]=[l("Linux/Unix/Mac OS X系統中的30個方便的bash shell別名",-1)])]),_:1}),e[16]||(e[16]=l('"瞭解在類Unix系統中別名的實際應用。',-1))]),e[59]||(e[59]=n("h3",{id:"shell函數",tabindex:"-1"},[l("shell函數 "),n("a",{class:"header-anchor",href:"#shell函數","aria-label":"Permalink to “shell函數”"},"​")],-1)),e[60]||(e[60]=n("p",null,"Bash/ksh/zsh函數允許你更進一步地配置shell環境。在這個例子中，我寫了一個簡單的名叫memcpu()的bash函數，用來顯示前10個最佔用CPU和內存的進程：",-1)),e[61]||(e[61]=n("pre",null,[n("code",null,`memcpu() { echo "*** Top 10 cpu eating process ***"; ps auxf | sort -nr -k 3 | head -10;
echo  "*** Top 10 memory eating process ***"; ps auxf | sort -nr -k 4 | head -10;  }
`)],-1)),e[62]||(e[62]=n("p",null,"輸入memcpu就可以在屏幕上看到下面的信息：",-1)),e[63]||(e[63]=n("pre",null,[n("code",null,`memcpu
 
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
`)],-1)),n("p",null,[e[18]||(e[18]=l('看下"',-1)),r(s,{href:"http://bash.cyberciti.biz/guide/Chapter_9:_Functions"},{default:a(()=>[...e[17]||(e[17]=[l("如何編寫和應用shell函數",-1)])]),_:1}),e[19]||(e[19]=l('"瞭解更多信息。',-1))]),e[64]||(e[64]=o(`<h3 id="綜合一下-定製你自己的linux或unix-bash-shell工作環境" tabindex="-1">綜合一下：定製你自己的Linux或Unix bash shell工作環境 <a class="header-anchor" href="#綜合一下-定製你自己的linux或unix-bash-shell工作環境" aria-label="Permalink to “綜合一下：定製你自己的Linux或Unix bash shell工作環境”">​</a></h3><p>現在，你將使用bash shell配置自己的環境。我只介紹bash。但是理論上zsh，ksh和其他常用shell都差不多。讓我們看看如何調整shell來適合我作為系統管理員的需求。編輯你的~/.bashrc文件來附加設定。下面是一些常用的配置選項。</p><h4 id="_1-設定bash路徑和環境變量" tabindex="-1">#1: 設定bash路徑和環境變量 <a class="header-anchor" href="#_1-設定bash路徑和環境變量" aria-label="Permalink to “#1: 設定bash路徑和環境變量”">​</a></h4><pre><code># 設定路徑 ##
export PATH=$PATH:/usr/local/bin:/home/vivek/bin:/opt/firefox/bin:/opt/oraapp/bin
 
# 為cd命令設定路徑
export CDPATH=.:$HOME:/var/www
</code></pre><p>使用less或more命令作為翻頁器：</p><pre><code>export PAGER=less
</code></pre><p>設定vim作為默認文本編輯器：</p><pre><code>export EDITOR=vim
export VISUAL=vim
export SVN_EDITOR=&quot;$VISUAL&quot;
</code></pre><p>設定Oracle資料庫特別要求的參數：</p><pre><code>export ORACLE_HOME=/usr/lib/oracle/xe/app/oracle/product/10.2.0/server
export ORACLE_SID=XE
export NLS_LANG=$($ORACLE_HOME/bin/nls_lang.sh)
</code></pre><p>設定JAVA_HOME和其他java路徑，比如java版本：</p><pre><code>export JAVA_HOME=/usr/lib/jvm/java-6-sun/jre
 
# 把ORACLE和JAVA加入到PATH裏
export PATH=$PATH:$ORACLE_HOME/bin:$JAVA_HOME/bin
</code></pre>`,12)),n("p",null,[r(s,{href:"http://www.cyberciti.biz/faq/ssh-passwordless-login-with-keychain-for-scripts/"},{default:a(()=>[...e[20]||(e[20]=[l("使用密鑰實現免密碼登錄",-1)])]),_:1}),e[21]||(e[21]=l("讓ssh遠程登錄更安全：",-1))]),e[65]||(e[65]=n("pre",null,[n("code",null,`# 再也不用輸密碼了
/usr/bin/keychain $HOME/.ssh/id_rsa
source $HOME/.keychain/$HOSTNAME-sh
`)],-1)),n("p",null,[e[23]||(e[23]=l("最後，",-1)),r(s,{href:"http://www.cyberciti.biz/faq/fedora-redhat-scientific-linuxenable-bash-completion/"},{default:a(()=>[...e[22]||(e[22]=[l("打開bash命令補齊",-1)])]),_:1})]),e[66]||(e[66]=n("pre",null,[n("code",null,`source /etc/bash_completion
`)],-1)),e[67]||(e[67]=n("h4",{id:"_2-設定bash命令提示符",tabindex:"-1"},[l("#2: 設定bash命令提示符 "),n("a",{class:"header-anchor",href:"#_2-設定bash命令提示符","aria-label":"Permalink to “#2: 設定bash命令提示符”"},"​")],-1)),n("p",null,[e[25]||(e[25]=l("設定",-1)),r(s,{href:"http://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html"},{default:a(()=>[...e[24]||(e[24]=[l("定製的bash提示符(PS1)",-1)])]),_:1}),e[26]||(e[26]=l(":",-1))]),e[68]||(e[68]=o(`<pre><code>PS1=&#39;{\\u@\\h:\\w }\\$ &#39;
</code></pre><h4 id="_3-設定默認文件權限" tabindex="-1">#3: 設定默認文件權限 <a class="header-anchor" href="#_3-設定默認文件權限" aria-label="Permalink to “#3: 設定默認文件權限”">​</a></h4><pre><code>## 設定默認權限為644 ##
umask 022
</code></pre><h4 id="_4-調整shell命令歷史設定" tabindex="-1">#4: 調整shell命令歷史設定 <a class="header-anchor" href="#_4-調整shell命令歷史設定" aria-label="Permalink to “#4: 調整shell命令歷史設定”">​</a></h4><pre><code># 不往命令歷史裏寫入相同的行
HISTCONTROL=ignoreboth
 
# 忽略這些命令
HISTIGNORE=&quot;reboot:shutdown *:ls:pwd:exit:mount:man *:history&quot;
 
# 通過HISTSIZE和HISTFILESIZE設定命令歷史的長度
export HISTSIZE=10000
export HISTFILESIZE=10000
 
# 為命令歷史文件增加時間戳
export HISTTIMEFORMAT=&quot;%F %T &quot;
 
# 附加到命令歷史文件，而不是覆蓋
shopt -s histappend
</code></pre><h4 id="_5-設定shell會話的時區" tabindex="-1">#5: 設定shell會話的時區 <a class="header-anchor" href="#_5-設定shell會話的時區" aria-label="Permalink to “#5: 設定shell會話的時區”">​</a></h4><pre><code>## 為我自己的shell會話設定IST（印度標準時間） ##
TZ=Asia/Kolkata
</code></pre><h4 id="_6-設定shell行編輯接口" tabindex="-1">#6: 設定shell行編輯接口 <a class="header-anchor" href="#_6-設定shell行編輯接口" aria-label="Permalink to “#6: 設定shell行編輯接口”">​</a></h4><pre><code>## 使用vi風格的行編輯接口，替代bash默認的emacs模式 ##
set -o vi
</code></pre><h4 id="_7-設定自己喜好的別名" tabindex="-1">#7: 設定自己喜好的別名 <a class="header-anchor" href="#_7-設定自己喜好的別名" aria-label="Permalink to “#7: 設定自己喜好的別名”">​</a></h4><pre><code>## 增加一些保護 ##
alias rm=&#39;rm -i&#39;
alias cp=&#39;cp -i&#39;
alias mv=&#39;mv -i&#39;
 
## Memcached ##
alias mcdstats=&#39;/usr/bin/memcached-tool 10.10.29.68:11211 stats&#39;
alias mcdshow=&#39;/usr/bin/memcached-tool 10.10.29.68:11211 display&#39;
alias mcdflush=&#39;echo &quot;flush_all&quot; | nc 10.10.29.68 11211&#39;
 
## 默認命令參數 ##
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
</code></pre><p>下面是一些額外的OS X Unix bash shell別名：</p><pre><code># 從bash打開桌面應用
alias preview=&quot;open -a &#39;$PREVIEW&#39;&quot;
alias safari=&quot;open -a safari&quot;
alias firefox=&quot;open -a firefox&quot;
alias chrome=&quot;open -a google\\ chrome&quot;
alias f=&#39;open -a Finder &#39;
 
# 清理那些.DS_Store文件
alias dsclean=&#39;find . -type f -name .DS_Store -delete&#39;
</code></pre><h4 id="_8-寡人好色" tabindex="-1">#8: 寡人好色 <a class="header-anchor" href="#_8-寡人好色" aria-label="Permalink to “#8: 寡人好色”">​</a></h4><pre><code># 彩色的grep輸出 
alias grep=&#39;grep --color=auto&#39;
export GREP_COLOR=&#39;1;33&#39;
 
# 彩色的ls
export LSCOLORS=&#39;Gxfxcxdxdxegedabagacad&#39;
# Gnu/linux的ls
ls=&#39;ls --color=auto&#39;
 
# BSD/os x的ls命令
# alias ls=&#39;ls -G&#39;
</code></pre><h4 id="_9-設定自己喜好的bash函數" tabindex="-1">#9: 設定自己喜好的bash函數 <a class="header-anchor" href="#_9-設定自己喜好的bash函數" aria-label="Permalink to “#9: 設定自己喜好的bash函數”">​</a></h4><pre><code># 在屏幕上顯示10個最近的歷史命令
function ht {
  history | awk &#39;{a[$2]++}END{for(i in a){print a[i] &quot; &quot; i}}&#39; | sort -rn | head
}
 
# host和ping命令的替代
# 接受http:// 或 https:// 或 ftps:// 名稱用作域或主機名
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
</code></pre><h4 id="_10-通過shell-shopt命令設定bash-shell行為" tabindex="-1">#10: 通過shell shopt命令設定bash shell行為 <a class="header-anchor" href="#_10-通過shell-shopt命令設定bash-shell行為" aria-label="Permalink to “#10: 通過shell shopt命令設定bash shell行為”">​</a></h4>`,18)),n("p",null,[e[28]||(e[28]=l("最後，你可以",-1)),r(s,{href:"http://bash.cyberciti.biz/guide/Setting_shell_options"},{default:a(()=>[...e[27]||(e[27]=[l("使用set和shopt命令調整bash shell環境",-1)])]),_:1}),e[29]||(e[29]=l("：",-1))]),e[69]||(e[69]=n("pre",null,[n("code",null,`# 目錄拼寫糾正
shopt -q -s cdspell
 
# 保證每次終端窗口改變大小後會更新顯示
shopt -q -s checkwinsize
 
# 打開高級模式匹配功能
shopt -q -s extglob
 
# 退出時附加命令歷史而不是覆蓋
shopt -s histappend
 
# 在命令歷史使用多行
shopt -q -s cmdhist
 
# 在後台任務結束時立刻通知
set -o notify
 
# 禁用[CTRL-D]來結束shell
set -o ignoreeof
`)],-1)),e[70]||(e[70]=n("h3",{id:"總結",tabindex:"-1"},[l("總結 "),n("a",{class:"header-anchor",href:"#總結","aria-label":"Permalink to “總結”"},"​")],-1)),e[71]||(e[71]=n("p",null,"這個帖子不難理解。它簡短地將如何定製用户環境從頭介紹了一下。要深入瞭解bash/ksh/zsh/csh/tcsh/的能力，我建議你用下面的命令閲讀man文檔：",-1)),e[72]||(e[72]=n("pre",null,[n("code",null,`man bash
man zsh
man tcsh
man ksh
`)],-1)),n("blockquote",null,[n("p",null,[e[31]||(e[31]=l("這篇文章由Aadrika T. J.貢獻；由admin編輯並增加了額外內容。你也可以",-1)),r(s,{href:"http://www.cyberciti.biz/write-for-nixcraft/"},{default:a(()=>[...e[30]||(e[30]=[l("為nixCraft做出貢獻",-1)])]),_:1}),e[32]||(e[32]=l("。",-1))])]),e[73]||(e[73]=n("hr",null,null,-1)),n("p",null,[e[34]||(e[34]=l("via: ",-1)),r(s,{href:"http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/"},{default:a(()=>[...e[33]||(e[33]=[l("http://www.cyberciti.biz/howto/shell-primer-configuring-your-linux-unix-osx-environment/",-1)])]),_:1})]),n("p",null,[e[38]||(e[38]=l("作者：",-1)),r(s,{href:"http://www.cyberciti.biz/tips/about-us"},{default:a(()=>[...e[35]||(e[35]=[l("nixCraft",-1)])]),_:1}),e[39]||(e[39]=l(" 譯者：",-1)),r(s,{href:"https://github.com/zpl1025"},{default:a(()=>[...e[36]||(e[36]=[l("zpl1025",-1)])]),_:1}),e[40]||(e[40]=l(" 校對：",-1)),r(s,{href:"https://github.com/wxy"},{default:a(()=>[...e[37]||(e[37]=[l("wxy",-1)])]),_:1})]),n("p",null,[e[43]||(e[43]=l("本文由 ",-1)),r(s,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[41]||(e[41]=[l("LCTT",-1)])]),_:1}),e[44]||(e[44]=l(" 原創翻譯，",-1)),r(s,{href:"http://linux.cn/"},{default:a(()=>[...e[42]||(e[42]=[l("Linux中國",-1)])]),_:1}),e[45]||(e[45]=l(" 榮譽推出",-1))])])}const v=t(d,[["render",u]]);export{S as __pageData,v as default};
