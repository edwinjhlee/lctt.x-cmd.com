import{_ as p,a0 as r,w as s,s as h,ao as a,I as o,x as e,a1 as i,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"如何在Bash Shell腳本中顯示對話框 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Bash Shell腳本中顯示對話框 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Bash Shell腳本中顯示對話框 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Bash Shell腳本中顯示對話框 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150413 How to Show Dialog Box from Bash Shell Script with Examples","title":"如何在Bash Shell腳本中顯示對話框","tag":"201506","desc":""},"relativePath":"201506/20150413 How to Show Dialog Box from Bash Shell Script with Examples.md","filePath":"[post].md"}'),u={name:"201506/20150413 How to Show Dialog Box from Bash Shell Script with Examples.md"};function d(m,t,g,x,q,w){const n=r("Link");return s(),h("div",null,[t[19]||(t[19]=a(`<h1 id="如何在bash-shell腳本中顯示對話框" tabindex="-1">如何在Bash Shell腳本中顯示對話框 <a class="header-anchor" href="#如何在bash-shell腳本中顯示對話框" aria-label="Permalink to “如何在Bash Shell腳本中顯示對話框”">​</a></h1><p>這個教程給出幾個如何使用類似zenity和whiptail的工具在Bash Shell 腳本中提供消息/對話框的例子。使用這些工具，你的腳本能夠告知用户當前程序運行的狀態並能與用户進行交互。這兩個工具的不同之處在於顯示消息框或者對話框的方式。Zenity用GTK工具包創建圖形用户界面，而whiptail則在終端窗口內創建消息框。</p><h3 id="zenity-工具" tabindex="-1">Zenity 工具 <a class="header-anchor" href="#zenity-工具" aria-label="Permalink to “Zenity 工具”">​</a></h3><p>在Ubuntu中安裝zenity，運行:</p><pre><code>sudo apt-get install zenity
</code></pre><p>用zenity創建消息框或者對話框的命令是不言自明的，我們會給你提供一些例子來參考。</p><h3 id="創建消息框" tabindex="-1">創建消息框 <a class="header-anchor" href="#創建消息框" aria-label="Permalink to “創建消息框”">​</a></h3><pre><code>zenity --info --title &quot;Information Box&quot; --text &quot;This should be information&quot; --width=300 --height=200
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Screenshot-Information-Box.png" alt="消息框截圖"></p><p>創建 Yes/No 詢問對話框</p><pre><code>zenity --question --text &quot;Do you want this?&quot; --ok-label &quot;Yeah&quot; --cancel-label=&quot;Nope&quot;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Screenshot-Question.png" alt="問題截圖"></p><p>創建輸入框並將輸入值保存到變量中</p><pre><code>a=$(zenity --entry --title &quot;Entry box&quot; --text &quot;Please enter the value&quot; --width=300 --height=200)
echo $a
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Screenshot-Entry-box.png" alt="輸入框截圖"></p><p>輸入後，值會保存在變量 $a 中。</p><p>這是一個獲取用户姓名並顯示的實際事例。</p><pre><code>#!/bin/bash
#
# This script will ask for couple of parameters
# and then continue to work depending on entered values
#

# Giving the option to user
zenity --question --text &quot;Do you want to continue?&quot;

# Checking if user wants to proceed
[ $? -eq 0 ] || exit 1

# Letting user input some values
FIRSTNAME=$(zenity --entry --title &quot;Entry box&quot; --text &quot;Please, enter your first name.&quot; --width=300 --height=150)
LASTNAME=$(zenity --entry --title &quot;Entry box&quot; --text &quot;Please, enter your last name.&quot; --width=300 --height=150)
AGE=$(zenity --entry --title &quot;Entry box&quot; --text &quot;Please, enter your age.&quot; --width=300 --height=150)

# Displaying entered values in information box
zenity --info --title &quot;Information&quot; --text &quot;You are \${FIRSTNAME} \${LASTNAME} and you are \${AGE}(s) old.&quot; --width=300 --height=100
</code></pre><p>這些是運行前面腳本的截圖。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Example1-Question-1.png" alt="例1-問題-1"></p><p>框1</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Example1-Entry-box-1.png" alt="例1-輸入框-1"></p><p>輸入框</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Example1-Entry-box-2.png" alt="例1-輸入框-2"></p><p>輸入框</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Example1-Entry-box-3.png" alt="例1-輸入框-3"></p><p>輸入框</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Example1-Information.png" alt="例1-信息"></p><p>信息框</p>`,29)),o("p",null,[t[1]||(t[1]=e("別忘了查看也許能幫助到你的有用的",-1)),i(n,{href:"https://help.gnome.org/users/zenity/stable/"},{default:l(()=>[...t[0]||(t[0]=[e("zenity 選項",-1)])]),_:1}),t[2]||(t[2]=e("。",-1))]),t[20]||(t[20]=a(`<h3 id="whiptail-工具" tabindex="-1">Whiptail 工具 <a class="header-anchor" href="#whiptail-工具" aria-label="Permalink to “Whiptail 工具”">​</a></h3><p>在Ubuntu上安裝whiptail，運行</p><pre><code>sudo apt-get install whiptail
</code></pre><p>用whiptail創建消息框或者對話框的命令也是無需解釋的，我們會給你提供一些基本例子作為參考。</p><h3 id="創建消息框-1" tabindex="-1">創建消息框 <a class="header-anchor" href="#創建消息框-1" aria-label="Permalink to “創建消息框”">​</a></h3><pre><code>whiptail --msgbox &quot;This is a message&quot; 10 40
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Screenshot-whiptail-msgbox.png" alt="whiptail消息框截圖"></p><h3 id="創建-yes-no-對話框" tabindex="-1">創建 Yes/No 對話框 <a class="header-anchor" href="#創建-yes-no-對話框" aria-label="Permalink to “創建 Yes/No 對話框”">​</a></h3><pre><code>whiptail --yes-button &quot;Yeah&quot; --no-button &quot;Nope&quot; --title &quot;Choose the answer&quot; --yesno &quot;Will you choose yes?&quot; 10 30
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Screenshot-whiptail-yesno.png" alt="whiptail對話框截圖"></p><h3 id="創建有缺省值的輸入框" tabindex="-1">創建有缺省值的輸入框 <a class="header-anchor" href="#創建有缺省值的輸入框" aria-label="Permalink to “創建有缺省值的輸入框”">​</a></h3><pre><code>whiptail --inputbox &quot;Enter your number please.&quot; 10 30 &quot;10&quot;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Screenshot-whiptail-entry.png" alt="whiptail輸入框截圖"></p><p>嘗試使用輸入值要注意的一點是whiptail用stdout顯示對話框，用stderr輸出值。這樣的話，如果你用 var=$(...)，你就根本不會看到對話框，也不能獲得輸入的值。解決方法是交換stdout和stderr。在whiptail命令後面添加 <strong>3&gt;&amp;1 1&gt;&amp;2 2&gt;&amp;3</strong> 就可以做到。你想獲取輸入值的任何whiptail命令也是如此。</p><h3 id="創建菜單對話框" tabindex="-1">創建菜單對話框 <a class="header-anchor" href="#創建菜單對話框" aria-label="Permalink to “創建菜單對話框”">​</a></h3><pre><code>whiptail --menu &quot;This is a menu. Choose an option:&quot; 20 50 10 1 &quot;first&quot; 2 &quot;second&quot; 3 &quot;third&quot;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Screenshot-whiptail-menu.png" alt="whiptail菜單截圖"></p><p>這是一個請求用户輸入一個文件夾的路徑並輸出它的大小的 <strong>shell 腳本</strong>。</p><pre><code>#!/bin/bash
#
#

# Since whiptail has to use stdout to display dialog, entered value will
# be stored in stderr. To switch them and get the value to stdout you must
# use 3&gt;&amp;1 1&gt;&amp;2 2&gt;&amp;3
FOLDER_PATH=$(whiptail --title &quot;Get the size of folder&quot; \\
--inputbox &quot;Enter folder path:&quot; \\
10 30 \\
&quot;/home&quot; \\
3&gt;&amp;1 1&gt;&amp;2 2&gt;&amp;3)

if [ -d $FOLDER_PATH ]
then
size=$(du -hs &quot;$FOLDER_PATH&quot; | awk &#39;{print $1}&#39;)
whiptail --title &quot;Information&quot; \\
--msgbox &quot;Size of \${FOLDER_PATH} is \${size}&quot; \\
10 40
elif [ -f $FOLDER_PATH ]
then
whiptail --title &quot;Warning!!!&quot; \\
--msgbox &quot;The path you entered is a path to a file not a folder!&quot; \\
10 40
else
whiptail --title &quot;Error!!!&quot;
--msgbox &quot;Path you entered is not recognized. Please try again&quot; \\
10 40
fi
</code></pre><p>這是之前例子的一些截圖：</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Example2-Entry-box.png" alt="例2-輸入框"></p><p>輸入框</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Example2-Information.png" alt="例2-消息框"></p><p>消息框</p>`,24)),o("p",null,[t[4]||(t[4]=e("如果你在終端下工作，",-1)),i(n,{href:"http://linux.die.net/man/1/whiptail"},{default:l(()=>[...t[3]||(t[3]=[e("幫助手冊",-1)])]),_:1}),t[5]||(t[5]=e("總是有用的。",-1))]),t[21]||(t[21]=o("h3",{id:"結論",tabindex:"-1"},[e("結論 "),o("a",{class:"header-anchor",href:"#結論","aria-label":"Permalink to “結論”"},"​")],-1)),t[22]||(t[22]=o("p",null,"選擇合適的工具顯示對話框取決於你期望在桌面機器還是服務器上運行你的腳本。桌面機器用户通常使用GUI窗口環境，也可能運行腳本並與顯示的窗口進行交互。然而，如果你期望用户是在服務器上工作的，（在沒有圖形界面時，）你也許希望能確保總能顯示，那就使用whiptail或者任何其它在純終端窗口顯示對話框的工具。",-1)),t[23]||(t[23]=o("hr",null,null,-1)),o("p",null,[t[7]||(t[7]=e("via: ",-1)),i(n,{href:"http://linoxide.com/linux-shell-script/bash-shell-script-show-dialog-box/"},{default:l(()=>[...t[6]||(t[6]=[e("http://linoxide.com/linux-shell-script/bash-shell-script-show-dialog-box/",-1)])]),_:1})]),o("p",null,[t[11]||(t[11]=e("作者：",-1)),i(n,{href:"http://linoxide.com/author/ilijala/"},{default:l(()=>[...t[8]||(t[8]=[e("Ilija Lazarevic",-1)])]),_:1}),t[12]||(t[12]=e(" 譯者：",-1)),i(n,{href:"https://github.com/ictlyh"},{default:l(()=>[...t[9]||(t[9]=[e("ictlyh",-1)])]),_:1}),t[13]||(t[13]=e(" 校對：",-1)),i(n,{href:"https://github.com/wxy"},{default:l(()=>[...t[10]||(t[10]=[e("wxy",-1)])]),_:1})]),o("p",null,[t[16]||(t[16]=e("本文由 ",-1)),i(n,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...t[14]||(t[14]=[e("LCTT",-1)])]),_:1}),t[17]||(t[17]=e(" 原創翻譯，",-1)),i(n,{href:"http://linux.cn/"},{default:l(()=>[...t[15]||(t[15]=[e("Linux中國",-1)])]),_:1}),t[18]||(t[18]=e(" 榮譽推出",-1))])])}const c=p(u,[["render",d]]);export{y as __pageData,c as default};
