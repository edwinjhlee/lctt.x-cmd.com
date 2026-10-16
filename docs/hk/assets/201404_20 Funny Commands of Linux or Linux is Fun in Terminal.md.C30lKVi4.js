import{_ as i,a0 as s,w as l,s as c,ao as m,I as r,x as n,a1 as o,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"Linux命令及Linux終端的20個趣事 | LCTT x X-CMD","titleTemplate":false,"description":"Linux命令及Linux終端的20個趣事 | LCTT (201404) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux命令及Linux終端的20個趣事 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux命令及Linux終端的20個趣事 | LCTT (201404) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201404/20 Funny Commands of Linux or Linux is Fun in Terminal","title":"Linux命令及Linux終端的20個趣事","tag":"201404","desc":""},"relativePath":"201404/20 Funny Commands of Linux or Linux is Fun in Terminal.md","filePath":"[post].md"}'),p={name:"201404/20 Funny Commands of Linux or Linux is Fun in Terminal.md"};function d(u,t,h,x,g,_){const e=s("Link");return l(),c("div",null,[t[11]||(t[11]=m(`<h1 id="linux命令及linux終端的20個趣事" tabindex="-1">Linux命令及Linux終端的20個趣事 <a class="header-anchor" href="#linux命令及linux終端的20個趣事" aria-label="Permalink to “Linux命令及Linux終端的20個趣事”">​</a></h1><p>玩<strong>Linux</strong>其樂無窮！<strong>哈哈</strong>。不相信。記住我的話，在文章結尾時你就會相信<strong>Linux</strong>確實好玩了。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/Linux-Funny-Commands.png" alt="20 Linux Funny Commands"></p><h3 id="_1-命令-sl-蒸汽機車" tabindex="-1">1. 命令：sl （蒸汽機車） <a class="header-anchor" href="#_1-命令-sl-蒸汽機車" aria-label="Permalink to “1. 命令：sl （蒸汽機車）”">​</a></h3><p>你可能瞭解 ‘ls’ 命令，並經常使用它來查看文件夾的內容。但是，有些時候你可能會拼寫成 ‘sl’ ,這時我們應該如何獲得一些樂趣而不是看見“command not found”呢？</p><h4 id="安裝-sl" tabindex="-1">安裝 sl <a class="header-anchor" href="#安裝-sl" aria-label="Permalink to “安裝 sl”">​</a></h4><pre><code>root@tecmint:~# apt-get install sl 		(In Debian like OS)
root@tecmint:~# yum -y install sl 		(In Red Hat like OS)
</code></pre><h4 id="輸出" tabindex="-1">輸出 <a class="header-anchor" href="#輸出" aria-label="Permalink to “輸出”">​</a></h4><pre><code>root@tecmint:~# sl
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/sl.png" alt="sl command"></p><p>當你敲入的是‘<strong>LS</strong>‘而不是’<strong>ls</strong>‘時，這個命令也會運行。</p><h3 id="_2-命令-telnet" tabindex="-1">2. 命令：telnet <a class="header-anchor" href="#_2-命令-telnet" aria-label="Permalink to “2. 命令：telnet”">​</a></h3><p><strong>非也！非也！！</strong>這可不像它平常那樣複雜。你可能很熟悉<strong>telnet</strong>。Telnet 是一個文本化的雙向網絡協議。這裏不需要安裝什麼東西。你需要的就是一個Linux系統和一個連通的網絡。</p><pre><code>root@tecmint:~# telnet towel.blinkenlights.nl
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/telnet.png" alt="telnet command"></p><h3 id="_3-命令-fortune" tabindex="-1">3. 命令：fortune <a class="header-anchor" href="#_3-命令-fortune" aria-label="Permalink to “3. 命令：fortune”">​</a></h3><p>試試你未知的運氣，終端裏有時也有好玩的。</p><h4 id="安裝-fortune" tabindex="-1">安裝 fortune <a class="header-anchor" href="#安裝-fortune" aria-label="Permalink to “安裝 fortune”">​</a></h4><pre><code>root@tecmint:~# apt-get install fortune 	(for aptitude based system)
root@tecmint:~# yum install fortune 		(for yum based system)

root@tecmint:~# fortune

You&#39;re not my type.  For that matter, you&#39;re not even my species!!!
Future looks spotty.  You will spill soup in late evening.
You worry too much about your job.  Stop it.  You are not paid enough to worry.
Your love life will be... interesting.
</code></pre><h3 id="_4-命令-rev-翻轉" tabindex="-1">4. 命令：rev（翻轉）### <a class="header-anchor" href="#_4-命令-rev-翻轉" aria-label="Permalink to “4. 命令：rev（翻轉）###”">​</a></h3><p>它會把傳遞給它的的每個字符串都反過來，是不是很好玩。</p><pre><code>root@tecmint:~# rev

123abc 
cba321 

xuniL eb ot nrob
born to be Linux
</code></pre><h3 id="_5-命令-factor" tabindex="-1">5. 命令：factor <a class="header-anchor" href="#_5-命令-factor" aria-label="Permalink to “5. 命令：factor”">​</a></h3><p>該談點兒關於<strong>Mathematics</strong>的了，這個命令輸出給定數字的所有因子。</p><pre><code>root@tecmint:~# factor

5 
5: 5 

12 
12: 2 2 3 

1001 
1001: 7 11 13 

5442134 
5442134: 2 2721067
</code></pre><h3 id="_6-命令-script" tabindex="-1">6.命令：script <a class="header-anchor" href="#_6-命令-script" aria-label="Permalink to “6.命令：script”">​</a></h3><p>好的，這不是什麼命令，而是一個腳本，一個很有趣的腳本。</p><pre><code>root@tecmint:~# for i in {1..12}; do for j in $(seq 1 $i); do echo -ne $i x $j=$((i*j))\\\\t;done; echo;done 

1 x 1=1	
2 x 1=2	2 x 2=4	
3 x 1=3	3 x 2=6	3 x 3=9	
4 x 1=4	4 x 2=8	4 x 3=12	4 x 4=16	
5 x 1=5	5 x 2=10	5 x 3=15	5 x 4=20	5 x 5=25	
6 x 1=6	6 x 2=12	6 x 3=18	6 x 4=24	6 x 5=30	6 x 6=36	
7 x 1=7	7 x 2=14	7 x 3=21	7 x 4=28	7 x 5=35	7 x 6=42	7 x 7=49	
8 x 1=8	8 x 2=16	8 x 3=24	8 x 4=32	8 x 5=40	8 x 6=48	8 x 7=56	8 x 8=64	
9 x 1=9	9 x 2=18	9 x 3=27	9 x 4=36	9 x 5=45	9 x 6=54	9 x 7=63	9 x 8=72	9 x 9=81	
10 x 1=10	10 x 2=20	10 x 3=30	10 x 4=40	10 x 5=50	10 x 6=60	10 x 7=70	10 x 8=80	10 x 9=90	10 x 10=100	
11 x 1=11	11 x 2=22	11 x 3=33	11 x 4=44	11 x 5=55	11 x 6=66	11 x 7=77	11 x 8=88	11 x 9=99	11 x 10=110	11 x 11=121	
12 x 1=12	12 x 2=24	12 x 3=36	12 x 4=48	12 x 5=60	12 x 6=72	12 x 7=84	12 x 8=96	12 x 9=108	12 x 10=120	12 x 11=132	12 x 12=144
</code></pre><h3 id="_7-命令-cowsay" tabindex="-1">7.命令：Cowsay <a class="header-anchor" href="#_7-命令-cowsay" aria-label="Permalink to “7.命令：Cowsay”">​</a></h3><p>一個在終端用<strong>ASCII</strong>碼組成的小牛，這個小牛會説出你想要它説的話。</p><h4 id="安裝cowsay" tabindex="-1">安裝Cowsay <a class="header-anchor" href="#安裝cowsay" aria-label="Permalink to “安裝Cowsay”">​</a></h4><pre><code>root@tecmint:~# apt-get install cowsay 		(for Debian based OS)
root@tecmint:~# yum install cowsay		(for Red Hat based OS)
</code></pre><h4 id="輸出-1" tabindex="-1">輸出 <a class="header-anchor" href="#輸出-1" aria-label="Permalink to “輸出”">​</a></h4><pre><code>root@tecmint:~# cowsay I Love nix 

 ____________
&lt; I Love nix &gt;
 ------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre><p>如果用管道將‘<strong>fortune command</strong>’命令重定向到cowsay會怎樣呢？</p><p>root@tecmint:~# fortune | cowsay</p><pre><code> _________________________________________
 / Q: How many Oregonians does it take to  \\
 | screw in a light bulb? A: Three. One to |
 | screw in the light bulb and two to fend |
 | off all those                           |
 |                                         |
 | Californians trying to share the        |
 \\ experience.                             /
  -----------------------------------------
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     ||
</code></pre><p><strong>提示：‘|’</strong>是管道命令符。通常它是將一個命令的輸出作為下一個命令的輸入。在上面的例子中‘<strong>fortune</strong>’的輸出作為‘<strong>cowsay</strong>’命令的輸出。管道命令會經常用在腳本和程序編寫中。</p><p><strong>xcowsay</strong>是一個圖形界面程序。它與<strong>cowsay</strong>類似只是以一種圖形的方式來表達，可以説是<strong>X</strong>版本的cowsay。</p><pre><code>apt-get insatll xcowsay
yum install xcowsay
</code></pre><h4 id="輸出-2" tabindex="-1">輸出 <a class="header-anchor" href="#輸出-2" aria-label="Permalink to “輸出”">​</a></h4><pre><code>root@tecmint:~# xcowsay I Love nix
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/xcowsay.png" alt="xcowsay command"></p><p><strong>cowthink</strong>是另一個命令。運行“cowthink Linux is sooo funny ”看看它與cowsay的不同吧。</p><pre><code>apt-get insatll cowthink
yum install cowthink
</code></pre><h4 id="輸出-3" tabindex="-1">輸出 <a class="header-anchor" href="#輸出-3" aria-label="Permalink to “輸出”">​</a></h4><pre><code>root@tecmint:~# cowthink ....Linux is sooo funny
 _________________________
( ....Linux is sooo funny )
 -------------------------
        o   ^__^
         o  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre><h3 id="_8-命令-yes" tabindex="-1">8. 命令：yes <a class="header-anchor" href="#_8-命令-yes" aria-label="Permalink to “8. 命令：yes”">​</a></h3><p>yes 是一個非常有趣又有用的命令，尤其對於腳本編寫和系統管理員來説，它可以自動地生成預先定義的響應或者將其傳到終端。</p><pre><code>root@tecmint:~# yes I Love Linux

I Love Linux
I Love Linux
I Love Linux
I Love Linux
I Love Linux
I Love Linux
I Love Linux
I Love Linux
I Love Linux
I Love Linux
I Love Linux
I Love Linux
</code></pre><p><strong>提示</strong>: (直到你按下<strong>ctrl+c</strong>才停止)</p><h3 id="_9-命令-toilet" tabindex="-1">9. 命令: toilet <a class="header-anchor" href="#_9-命令-toilet" aria-label="Permalink to “9. 命令: toilet”">​</a></h3><p>什麼？你在開玩笑嗎! 當然沒有，但肯定的是這個命令的名字太搞了，我也不知道這個命令的名字從何而來。</p><h4 id="安裝toilet" tabindex="-1">安裝toilet <a class="header-anchor" href="#安裝toilet" aria-label="Permalink to “安裝toilet”">​</a></h4><pre><code>root@tecmint:~# apt-get install toilet 
root@tecmint:~# yum install toilet
</code></pre><h4 id="輸出-4" tabindex="-1">輸出 <a class="header-anchor" href="#輸出-4" aria-label="Permalink to “輸出”">​</a></h4><pre><code>root@tecmint:~# toilet tecmint 

mmmmmmm                        &quot;             m                               
   #     mmm    mmm   mmmmm  mmm    m mm   mm#mm          mmm    mmm   mmmmm 
   #    #&quot;  #  #&quot;  &quot;  # # #    #    #&quot;  #    #           #&quot;  &quot;  #&quot; &quot;#  # # # 
   #    #&quot;&quot;&quot;&quot;  #      # # #    #    #   #    #           #      #   #  # # # 
   #    &quot;#mm&quot;  &quot;#mm&quot;  # # #  mm#mm  #   #    &quot;mm    #    &quot;#mm&quot;  &quot;#m#&quot;  # # #
</code></pre><p>這個命令甚至提供了一些顏色和字體格式。</p><pre><code>root@tecmint:~# toilet -f mono12 -F metal Tecmint.com
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/toilet.png" alt="toilet command"></p><p><strong>提示：Figlet</strong> 是另外一個與toilet產生的效果類似的命令。</p><h3 id="_10-命令-cmatrix" tabindex="-1">10. 命令：cmatrix <a class="header-anchor" href="#_10-命令-cmatrix" aria-label="Permalink to “10. 命令：cmatrix”">​</a></h3><p>你可能看多好萊塢的電影‘<strong>黑客帝國</strong>’並陶醉於被賦予<strong>Neo</strong>的能看到在矩陣中任何事物的能力，或者你會想到一幅類似於‘<strong>Hacker</strong>’的桌面的生動畫面。</p><h4 id="安裝-cmatrix" tabindex="-1">安裝 cmatrix <a class="header-anchor" href="#安裝-cmatrix" aria-label="Permalink to “安裝 cmatrix”">​</a></h4><pre><code>root@tecmint:~# apt-get install cmatrix
root@tecmint:~# yum install cmatrix
</code></pre><h4 id="輸出-5" tabindex="-1">輸出 <a class="header-anchor" href="#輸出-5" aria-label="Permalink to “輸出”">​</a></h4><pre><code>root@tecmint:~# cmatrix
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/cmatrix.png" alt="cmatrix command"></p><h3 id="_11-命令-oneko" tabindex="-1">11. 命令: oneko <a class="header-anchor" href="#_11-命令-oneko" aria-label="Permalink to “11. 命令: oneko”">​</a></h3><p>可能你堅信Linux的鼠標指針永遠是同樣的黑色或白色一點兒也不生動，那你就錯了。“<strong>oneko</strong>”是一個會讓一個“<strong>Jerry</strong>”你的鼠標指針附着到你鼠標上的一個軟件包。</p><h4 id="安裝-oneko" tabindex="-1">安裝 oneko <a class="header-anchor" href="#安裝-oneko" aria-label="Permalink to “安裝 oneko”">​</a></h4><pre><code>root@tecmint:~# apt-get install oneko
root@tecmint:~# yum install oneko
</code></pre><h4 id="輸出-6" tabindex="-1">輸出 <a class="header-anchor" href="#輸出-6" aria-label="Permalink to “輸出”">​</a></h4><pre><code>root@tecmint:~# oneko
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/oneko.png" alt="oneko command"></p><p><strong>提示</strong>：關閉運行着<strong>oneko</strong>的終端時，<strong>Jerry</strong>也會隨之消失，重新啓動終端時也不會再出項。你可以將這個程序添加到啓動選項中然後繼續使用它。</p><h3 id="_12-fork炸彈" tabindex="-1">12. Fork炸彈 <a class="header-anchor" href="#_12-fork炸彈" aria-label="Permalink to “12. Fork炸彈”">​</a></h3><p>這是一段非常欠抽的代碼。運行這個命令的後果自己負責。這個命令其實是一個fork炸彈，它會以指數級的自乘，直到所有的系統資源都被利用了或者系統掛起（想要見識這個命令的威力你可以試一次這個命令，但是後果自負，記得在運行它之前關掉並保存其它所有程序和文件）。</p><pre><code>root@tecmint:~# :(){ :|:&amp; }:
</code></pre><h3 id="_13-命令-while" tabindex="-1">13. 命令：while <a class="header-anchor" href="#_13-命令-while" aria-label="Permalink to “13. 命令：while”">​</a></h3><p>下面的”while“命令是一個腳本，這個腳本可以為你提供彩色的日期和文件直到你按下中斷鍵（ctrl+c）。複製粘貼這個命令到你的終端。</p><pre><code>root@tecmint:~# while true; do echo &quot;$(date &#39;+%D %T&#39; | toilet -f term -F border --gay)&quot;; sleep 1; done
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/while.png" alt="Linux while command"></p><p><strong>提示</strong>：以上腳本通過下面的修改也會產生類似的輸出但是還是有點不同的，在你的終端試試吧。</p><pre><code>root@tecmint:~# while true; do clear; echo &quot;$(date &#39;+%D %T&#39; | toilet -f term -F border --gay)&quot;; sleep 1; done
</code></pre><h3 id="_14-命令-espeak" tabindex="-1">14. 命令: espeak <a class="header-anchor" href="#_14-命令-espeak" aria-label="Permalink to “14. 命令: espeak”">​</a></h3><p>將你的多媒體音箱的音量調到最大，然後在將這個命令複製到你的終端，來看看你聽到上帝的聲音時的反應吧。</p><h4 id="安裝-espeak" tabindex="-1">安裝 espeak <a class="header-anchor" href="#安裝-espeak" aria-label="Permalink to “安裝 espeak”">​</a></h4><pre><code>root@tecmint:~# apt-get install espeak
root@tecmint:~# yum install espeak
</code></pre><h4 id="輸出-7" tabindex="-1">輸出 <a class="header-anchor" href="#輸出-7" aria-label="Permalink to “輸出”">​</a></h4><pre><code>root@tecmint:~# espeak &quot;Tecmint is a very good website dedicated to Foss Community&quot;
</code></pre><h3 id="_15-命令-aafire" tabindex="-1">15. 命令: aafire <a class="header-anchor" href="#_15-命令-aafire" aria-label="Permalink to “15. 命令: aafire”">​</a></h3><p>在你的終端放一把火如何。把這個“<strong>aafire</strong>”敲到你的終端，不需要什麼引號看看這神奇的一幕吧。按下任意鍵中指該程序。</p><h4 id="安裝-aafire" tabindex="-1">安裝 aafire <a class="header-anchor" href="#安裝-aafire" aria-label="Permalink to “安裝 aafire”">​</a></h4><pre><code>root@tecmint:~# apt-get install libaa-bin
</code></pre><h4 id="輸出-8" tabindex="-1">輸出 <a class="header-anchor" href="#輸出-8" aria-label="Permalink to “輸出”">​</a></h4><pre><code>root@tecmint:~# aafire
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/aafire.png" alt=""></p><h3 id="_16-命令-bb" tabindex="-1">16. 命令: bb <a class="header-anchor" href="#_16-命令-bb" aria-label="Permalink to “16. 命令: bb”">​</a></h3><p>首先安裝“<strong>apt-get install bb</strong>”,然後敲入“<strong>bb</strong>”看看會發生什麼吧。</p><pre><code>root@tecmint:~# bb
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/bb.png" alt="bb command"></p><h3 id="_17-命令-url" tabindex="-1">17. 命令: url <a class="header-anchor" href="#_17-命令-url" aria-label="Permalink to “17. 命令: url”">​</a></h3><p>如果在你的朋友面前用命令列來改變你的 <strong>twitter status</strong> 會不會很酷呢。用你的<strong>用户名密碼</strong>和<strong>你想要的狀態</strong>分別替換<strong>username, password</strong> 和“<strong>your status message</strong>“就可以了。</p><pre><code>root@tecmint:~# url -u YourUsername:YourPassword -d status=&quot;Your status message&quot; http://twitter.com/statuses/update.xml
</code></pre><h3 id="_18-asciiquarium" tabindex="-1">18. ASCIIquarium <a class="header-anchor" href="#_18-asciiquarium" aria-label="Permalink to “18. ASCIIquarium”">​</a></h3><p>想要在終端弄一個水族館該，怎麼辦？</p><pre><code>root@tecmint:~# apt-get install libcurses-perl
root@tecmint:~# cd /tmp 
root@tecmint:~# wget http://search.cpan.org/CPAN/authors/id/K/KB/KBAUCOM/Term-Animation-2.4.tar.gz
root@tecmint:~# tar -zxvf Term-Animation-2.4.tar.gz
root@tecmint:~# cd Term-Animation-2.4/
root@tecmint:~# perl Makefile.PL &amp;&amp;  make &amp;&amp;   make test
root@tecmint:~# make install
</code></pre><h4 id="安裝-asciiquarium" tabindex="-1">安裝 ASCIIquarium <a class="header-anchor" href="#安裝-asciiquarium" aria-label="Permalink to “安裝 ASCIIquarium”">​</a></h4><p>下載並安裝<strong>ASCIIquarium</strong>。</p><pre><code>root@tecmint:~# cd /tmp
root@tecmint:~# wget http://www.robobunny.com/projects/asciiquarium/asciiquarium.tar.gz
root@tecmint:~# tar -zxvf asciiquarium.tar.gz
root@tecmint:~# cd asciiquarium_1.1/
root@tecmint:~# cp asciiquarium /usr/local/bin
root@tecmint:~# chmod 0755 /usr/local/bin/asciiquarium
</code></pre><p>最後在終端運行“<strong>asciiquarium</strong>”或者“<strong>/usr/local/bin/asciiquarium</strong>”，記得不要加引號，神奇的一幕將在你眼前展現。</p><pre><code>root@tecmint:~# asciiquarium
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/ascliquarium.png" alt="aquarium command"></p><h3 id="_19-命令-funny-manpages" tabindex="-1">19. 命令: funny manpages <a class="header-anchor" href="#_19-命令-funny-manpages" aria-label="Permalink to “19. 命令: funny manpages”">​</a></h3><p>首先安裝“<strong>apt-get install funny－manpages</strong>”然後運行下面命令的man手冊。其中一些</p><pre><code>baby
celibacy
condom
date
echo
flame
flog
gong
grope, egrope, fgrope 
party 
rescrog 
rm
rtfm
tm
uubp
woman (undocumented)
xkill 
xlart 
sex 
strfry

root@tecmint:~# man baby
</code></pre><h3 id="_20-linux-tweaks" tabindex="-1">20. Linux Tweaks <a class="header-anchor" href="#_20-linux-tweaks" aria-label="Permalink to “20. Linux Tweaks”">​</a></h3><p>該到了做一些優化的時候了</p><pre><code>root@tecmint:~# world

bash: world: not found

root@tecmint:~# touch girls\\ boo** 

touch: cannot touch \`girls boo**\`: Permission denied

root@tecmint:~# nice man woman

No manual entry for woman

root@tecmint:~# ^How did the sex change operation go?^ 

bash: :s^How did the sex change operation go?^ : substitution failed

root@tecmint:~# %blow 

bash: fg: %blow: no such job

root@tecmint:~# make love 

make: *** No rule to make target \`love\`.  Stop.

$ [ whereis my brain?
sh: 2: [: missing ]

% man: why did you get a divorce? 
man:: Too many arguments.

% !:say, what is saccharine? 
Bad substitute.

server@localhost:/srv$ \\(- 
bash: (-: command not found
</code></pre><p>Linux總是sexy：<strong>who | grep -i blonde | date; cd ~; unzip; touch; strip; finger; mount; gasp; yes; uptime; umount; sleep</strong>（如果你知道我的意思，汗！）</p><p>還有一些其它的命令，只是這些命令並不能在所有的系統上運行，所以本文沒有涉及到。比如説<strong>dog , filter, banner</strong></p><p>使用愉快，你可以稍後再對我説謝謝：）您的評價是我們前進的不竭動力。告訴我們你最喜歡的命令。繼續關注，不久我會有另一篇值得閲讀的文章。</p><hr>`,124)),r("p",null,[t[1]||(t[1]=n("via: ",-1)),o(e,{href:"http://www.tecmint.com/20-funny-commands-of-linux-or-linux-is-fun-in-terminal/"},{default:a(()=>[...t[0]||(t[0]=[n("http://www.tecmint.com/20-funny-commands-of-linux-or-linux-is-fun-in-terminal/",-1)])]),_:1})]),r("p",null,[t[4]||(t[4]=n("譯者：",-1)),o(e,{href:"https://github.com/Linchenguang"},{default:a(()=>[...t[2]||(t[2]=[n("Linchenguang",-1)])]),_:1}),t[5]||(t[5]=n(" 校對：",-1)),o(e,{href:"https://github.com/wxy"},{default:a(()=>[...t[3]||(t[3]=[n("wxy",-1)])]),_:1})]),r("p",null,[t[8]||(t[8]=n("本文由 ",-1)),o(e,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[6]||(t[6]=[n("LCTT",-1)])]),_:1}),t[9]||(t[9]=n(" 原創翻譯，",-1)),o(e,{href:"http://linux.cn/"},{default:a(()=>[...t[7]||(t[7]=[n("Linux中國",-1)])]),_:1}),t[10]||(t[10]=n(" 榮譽推出",-1))])])}const k=i(p,[["render",d]]);export{w as __pageData,k as default};
