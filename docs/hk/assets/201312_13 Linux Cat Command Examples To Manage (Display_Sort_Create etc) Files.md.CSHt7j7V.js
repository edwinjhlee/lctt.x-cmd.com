import{_ as i,a0 as l,w as s,s as c,ao as p,I as r,x as t,a1 as o,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"13個Cat命令管理(顯示，排序，建立)文件實例 | LCTT x X-CMD","titleTemplate":false,"description":"13個Cat命令管理(顯示，排序，建立)文件實例 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"13個Cat命令管理(顯示，排序，建立)文件實例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"13個Cat命令管理(顯示，排序，建立)文件實例 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/13 Linux Cat Command Examples To Manage (Display,Sort,Create etc) Files","title":"13個Cat命令管理(顯示，排序，建立)文件實例","tag":"201312","desc":""},"relativePath":"201312/13 Linux Cat Command Examples To Manage (Display,Sort,Create etc) Files.md","filePath":"[post].md"}'),d={name:"201312/13 Linux Cat Command Examples To Manage (Display,Sort,Create etc) Files.md"};function m(h,e,u,f,x,g){const n=l("Link");return s(),c("div",null,[e[11]||(e[11]=p(`<h1 id="_13個cat命令管理-顯示-排序-建立-文件實例" tabindex="-1">13個Cat命令管理(顯示，排序，建立)文件實例 <a class="header-anchor" href="#_13個cat命令管理-顯示-排序-建立-文件實例" aria-label="Permalink to “13個Cat命令管理(顯示，排序，建立)文件實例”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/11/linux-cat-command.png" alt=""></p><p>在Linux系統中，大多數配置文件、日誌文件，甚至shell腳本都使用文本文件格式，因此，Linux系統存在着多種文本編輯器，但當你僅僅想要查看一下這些文件的內容時，可使用一個簡單的命令-cat。</p><p>cat手冊裏這樣描述：</p><blockquote><p>cat命令讀取文件內容，並輸出到標準設備上面</p></blockquote><p>cat是一條linux內置命令. 幾乎所有linux發行版都內置（譯註：或者説我從未聽説過不內置cat命令的發行版）。接下來，讓我們開始學習如何使用.</p><h3 id="_1-顯示文件內容" tabindex="-1">1. 顯示文件內容 <a class="header-anchor" href="#_1-顯示文件內容" aria-label="Permalink to “1. 顯示文件內容”">​</a></h3><p>最簡單的方法是直接輸入‘cat file_name’.</p><pre><code># cat /etc/issue

CentOS release 5.10 (Final)
Kernel \\r on an \\m
</code></pre><h3 id="_2-同時顯示行號" tabindex="-1">2. 同時顯示行號 <a class="header-anchor" href="#_2-同時顯示行號" aria-label="Permalink to “2. 同時顯示行號”">​</a></h3><p>當在讀取內容很多的配置文件時，如果同時顯示行號將會使操作變簡單，加上-n參數可以實現.</p><pre><code># cat -n /etc/ntp.conf

1 # Permit time synchronization our time resource but do not
2 # permit the source to query or modify the service on this system
3 restrict default kod nomodify notrap nopeer noquery
4 restrict -6 default kod nomodify notrap nopeer noquery
5
6 # Permit all access over the loopback interface. This could be
7 # tightened as well, but to do so would effect some of the
8 # administration functions
9 restrict 127.0.0.1
10 restrict -6 ::1
</code></pre><h3 id="_3-在非空格行首顯示行號" tabindex="-1">3. 在非空格行首顯示行號 <a class="header-anchor" href="#_3-在非空格行首顯示行號" aria-label="Permalink to “3. 在非空格行首顯示行號”">​</a></h3><p>類似於-n參數，-b也可以顯示行號。區別在於-b只在非空行前顯示行號。</p><pre><code>#cat -b /etc/ntp.conf

1 # Permit time synchronization our time resource but do not
2 # permit the source to query or modify the service on this system
3 restrict default kod nomodify notrap nopeer noquery
4 restrict -6 default kod nomodify notrap nopeer noquery

5 # Permit all access over the loopback interface. This could be
6 # tightened as well, but to do so would effect some of the
7 # administration functions
8 restrict 127.0.0.1
9 restrict -6 ::1
</code></pre><h3 id="_4-顯示tab製表符" tabindex="-1">4. 顯示tab製表符 <a class="header-anchor" href="#_4-顯示tab製表符" aria-label="Permalink to “4. 顯示tab製表符”">​</a></h3><p>當你想要顯示文本中的tab製表位時. 可使用-T參數. 它會在輸入結果中標識為 <strong>^I</strong> .</p><pre><code># cat -T /etc/hosts

# Do not remove the following line, or various programs 
# that require network functionality will fail.
127.0.0.1^I^Ilocalhost.localdomain localhost
::1^I^Ilocalhost6.localdomain6 localhost6
</code></pre><h3 id="_5-顯示換行符" tabindex="-1">5. 顯示換行符 <a class="header-anchor" href="#_5-顯示換行符" aria-label="Permalink to “5. 顯示換行符”">​</a></h3><p>-E參數在每行結尾使用 <strong>$</strong> 表示換行符。如下所示 :</p><pre><code># cat -E /etc/hosts

# Do not remove the following line, or various programs$
# that require network functionality will fail.$
127.0.0.1 localhost.localdomain localhost$
::1 localhost6.localdomain6 localhost6$
</code></pre><h3 id="_6-同時顯示製表符及換行符" tabindex="-1">6. 同時顯示製表符及換行符 <a class="header-anchor" href="#_6-同時顯示製表符及換行符" aria-label="Permalink to “6. 同時顯示製表符及換行符”">​</a></h3><p>當你想要同時達到-T及-E的效果, 可使用-A參數.</p><pre><code># cat -A /etc/hosts

# Do not remove the following line, or various programs$
# that require network functionality will fail.$
127.0.0.1^I^Ilocalhost.localdomain localhost$
::1^I^Ilocalhost6.localdomain6 localhost6$
</code></pre><h3 id="_7-分屏顯示" tabindex="-1">7. 分屏顯示 <a class="header-anchor" href="#_7-分屏顯示" aria-label="Permalink to “7. 分屏顯示”">​</a></h3><p>當文件內容顯示超過了你的屏幕大小, 可結合cat命令與其它命令分屏顯示。使用管道符 ( | )來連接。</p><pre><code># cat /proc/meminfo | less

# cat /proc/meminfo | more
</code></pre><p>在less與more顯示結果的區別在於less參數可pageup及pagedown上下翻滾。而more僅能使用空格向下翻屏。</p><h3 id="_8-同時查看2個文件中的內容" tabindex="-1">8. 同時查看2個文件中的內容 <a class="header-anchor" href="#_8-同時查看2個文件中的內容" aria-label="Permalink to “8. 同時查看2個文件中的內容”">​</a></h3><p>位於/root文件夾裏有兩個文件取名linux及desktop，每個文件含有以下內容 :</p><p><strong>Linux</strong> : ubuntu, centos, redhat, mint and slackware</p><p><strong>Desktop</strong> : gnome kde, xfce, enlightment, and cinnamon</p><p>當你想同時查看兩文件中的內容時，可按如下方法 :</p><pre><code># cat /root/linux /root/desktop

ubuntu
centos
redhat
mint
slackware
gnome
kde
xfce
enlightment
cinnamon
</code></pre><h3 id="_9-排序顯示" tabindex="-1">9. 排序顯示 <a class="header-anchor" href="#_9-排序顯示" aria-label="Permalink to “9. 排序顯示”">​</a></h3><p>類似. 你也可以結合cat命令與其它命令來進行自定義輸出. 如結合 <strong>sort</strong> ，通過管道符對內容進行排序顯示。舉例 :</p><pre><code># cat /root/linux | sort

centos
mint
redhat
slackware
Ubuntu
</code></pre><h3 id="_10-輸入重定向" tabindex="-1">10. 輸入重定向 <a class="header-anchor" href="#_10-輸入重定向" aria-label="Permalink to “10. 輸入重定向”">​</a></h3><p>你也可將顯示結果輸出重定向到屏幕或另一個文件。 只需要使用 &gt; 符號（大於號）即可輸出生成到另一個文件。</p><pre><code># cat /root/linux &gt; /root/linuxdistro
</code></pre><p>以上命令會生成一個與/root/linux內容一模一樣的叫linuxdistro的文件.</p><h3 id="_11-新建文件" tabindex="-1">11. 新建文件 <a class="header-anchor" href="#_11-新建文件" aria-label="Permalink to “11. 新建文件”">​</a></h3><p>Linux下有多種方法新建文件。其中使用cat就是方法之一.</p><pre><code># cat &gt; operating_system

Unix
Linux
Windows
MacOS
</code></pre><p>當你輸入cat &gt; operating_system，它會生成一個operating_system的文件。然後下面會顯示空行。此時你可輸入內容。比如我們輸入Unix, Linux, Windows 和 MacOS， 輸入完成後，按<strong>Ctrl-D</strong>存盤退出cat。此時你會發現當前文件夾下會生成一個包含你剛才輸入內容的叫 <strong>operating_system</strong>的文件。</p><h3 id="_12-向文件中追加內容" tabindex="-1">12.向文件中追加內容 <a class="header-anchor" href="#_12-向文件中追加內容" aria-label="Permalink to “12.向文件中追加內容”">​</a></h3><p>當你使用兩個 &gt; 符時, 會將第一個文件中的內容追加到第二個文件的末尾。 舉例 :</p><pre><code># cat /root/linux &gt;&gt; /root/desktop

# cat /root/desktop
</code></pre><p>它會將 /root/linux的內容追加到/root/desktop文件的末尾。</p><p>第二個文件的內容將會變成這樣:</p><pre><code>gnome
kde
xfce
enlightment
cinnamon
ubuntu
centos
redhat
mint
slackware
</code></pre><h3 id="_13-重定向輸入" tabindex="-1">13. 重定向輸入 <a class="header-anchor" href="#_13-重定向輸入" aria-label="Permalink to “13. 重定向輸入”">​</a></h3><p>你可使用 <strong>&lt;</strong>命令（小於號）將文件輸入到cat中.</p><pre><code># cat &lt; /root/linux
</code></pre><p>上面命令表示 /root/linux中的內容作為cat的輸入。屏幕上顯示如下 :</p><pre><code>ubuntu
centos
redhat
mint
slackware
</code></pre><p>為了更清楚表示它的意義，我們使用以下命令 :</p><pre><code># cat &lt; /root/linux | sort &gt; linux-sort
</code></pre><p>此命令這樣理解: <strong>從/root/linux中讀取內容，然後排序，將結果輸出並生成linux-sort新文件</strong></p><p>然後我們看看linux-sort中的內容 :</p><pre><code>centos
mint
redhat
slackware
ubuntu
</code></pre><p>以上是一些cat命令的日常基本應用. 更多相關你可從cat命令手冊中學到並記得經常練習它們.</p><hr>`,63)),r("p",null,[e[1]||(e[1]=t("via: ",-1)),o(n,{href:"http://linoxide.com/linux-command/13-cat-command-examples/"},{default:a(()=>[...e[0]||(e[0]=[t("http://linoxide.com/linux-command/13-cat-command-examples/",-1)])]),_:1})]),r("p",null,[e[4]||(e[4]=t("譯者：",-1)),o(n,{href:"https://github.com/%E8%AD%AF%E8%80%85ID"},{default:a(()=>[...e[2]||(e[2]=[t("hongchuntang",-1)])]),_:1}),e[5]||(e[5]=t(" 校對：",-1)),o(n,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...e[3]||(e[3]=[t("Caroline",-1)])]),_:1})]),r("p",null,[e[8]||(e[8]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原創翻譯，",-1)),o(n,{href:"http://linux.cn/"},{default:a(()=>[...e[7]||(e[7]=[t("Linux中國",-1)])]),_:1}),e[10]||(e[10]=t(" 榮譽推出",-1))])])}const C=i(d,[["render",m]]);export{k as __pageData,C as default};
