import{_ as i,a0 as s,w as l,s as c,ao as m,I as r,x as n,a1 as o,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"Linux命令及Linux终端的20个趣事 | LCTT x X-CMD","titleTemplate":false,"description":"Linux命令及Linux终端的20个趣事 | LCTT (201404) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux命令及Linux终端的20个趣事 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux命令及Linux终端的20个趣事 | LCTT (201404) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201404/20 Funny Commands of Linux or Linux is Fun in Terminal","title":"Linux命令及Linux终端的20个趣事","tag":"201404","desc":""},"relativePath":"201404/20 Funny Commands of Linux or Linux is Fun in Terminal.md","filePath":"[post].md"}'),p={name:"201404/20 Funny Commands of Linux or Linux is Fun in Terminal.md"};function d(u,t,h,x,g,_){const e=s("Link");return l(),c("div",null,[t[11]||(t[11]=m(`<h1 id="linux命令及linux终端的20个趣事" tabindex="-1">Linux命令及Linux终端的20个趣事 <a class="header-anchor" href="#linux命令及linux终端的20个趣事" aria-label="Permalink to “Linux命令及Linux终端的20个趣事”">​</a></h1><p>玩<strong>Linux</strong>其乐无穷！<strong>哈哈</strong>。不相信。记住我的话，在文章结尾时你就会相信<strong>Linux</strong>确实好玩了。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/Linux-Funny-Commands.png" alt="20 Linux Funny Commands"></p><h3 id="_1-命令-sl-蒸汽机车" tabindex="-1">1. 命令：sl （蒸汽机车） <a class="header-anchor" href="#_1-命令-sl-蒸汽机车" aria-label="Permalink to “1. 命令：sl （蒸汽机车）”">​</a></h3><p>你可能了解 ‘ls’ 命令，并经常使用它来查看文件夹的内容。但是，有些时候你可能会拼写成 ‘sl’ ,这时我们应该如何获得一些乐趣而不是看见“command not found”呢？</p><h4 id="安装-sl" tabindex="-1">安装 sl <a class="header-anchor" href="#安装-sl" aria-label="Permalink to “安装 sl”">​</a></h4><pre><code>root@tecmint:~# apt-get install sl 		(In Debian like OS)
root@tecmint:~# yum -y install sl 		(In Red Hat like OS)
</code></pre><h4 id="输出" tabindex="-1">输出 <a class="header-anchor" href="#输出" aria-label="Permalink to “输出”">​</a></h4><pre><code>root@tecmint:~# sl
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/sl.png" alt="sl command"></p><p>当你敲入的是‘<strong>LS</strong>‘而不是’<strong>ls</strong>‘时，这个命令也会运行。</p><h3 id="_2-命令-telnet" tabindex="-1">2. 命令：telnet <a class="header-anchor" href="#_2-命令-telnet" aria-label="Permalink to “2. 命令：telnet”">​</a></h3><p><strong>非也！非也！！</strong>这可不像它平常那样复杂。你可能很熟悉<strong>telnet</strong>。Telnet 是一个文本化的双向网络协议。这里不需要安装什么东西。你需要的就是一个Linux系统和一个连通的网络。</p><pre><code>root@tecmint:~# telnet towel.blinkenlights.nl
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/telnet.png" alt="telnet command"></p><h3 id="_3-命令-fortune" tabindex="-1">3. 命令：fortune <a class="header-anchor" href="#_3-命令-fortune" aria-label="Permalink to “3. 命令：fortune”">​</a></h3><p>试试你未知的运气，终端里有时也有好玩的。</p><h4 id="安装-fortune" tabindex="-1">安装 fortune <a class="header-anchor" href="#安装-fortune" aria-label="Permalink to “安装 fortune”">​</a></h4><pre><code>root@tecmint:~# apt-get install fortune 	(for aptitude based system)
root@tecmint:~# yum install fortune 		(for yum based system)

root@tecmint:~# fortune

You&#39;re not my type.  For that matter, you&#39;re not even my species!!!
Future looks spotty.  You will spill soup in late evening.
You worry too much about your job.  Stop it.  You are not paid enough to worry.
Your love life will be... interesting.
</code></pre><h3 id="_4-命令-rev-翻转" tabindex="-1">4. 命令：rev（翻转）### <a class="header-anchor" href="#_4-命令-rev-翻转" aria-label="Permalink to “4. 命令：rev（翻转）###”">​</a></h3><p>它会把传递给它的的每个字符串都反过来，是不是很好玩。</p><pre><code>root@tecmint:~# rev

123abc 
cba321 

xuniL eb ot nrob
born to be Linux
</code></pre><h3 id="_5-命令-factor" tabindex="-1">5. 命令：factor <a class="header-anchor" href="#_5-命令-factor" aria-label="Permalink to “5. 命令：factor”">​</a></h3><p>该谈点儿关于<strong>Mathematics</strong>的了，这个命令输出给定数字的所有因子。</p><pre><code>root@tecmint:~# factor

5 
5: 5 

12 
12: 2 2 3 

1001 
1001: 7 11 13 

5442134 
5442134: 2 2721067
</code></pre><h3 id="_6-命令-script" tabindex="-1">6.命令：script <a class="header-anchor" href="#_6-命令-script" aria-label="Permalink to “6.命令：script”">​</a></h3><p>好的，这不是什么命令，而是一个脚本，一个很有趣的脚本。</p><pre><code>root@tecmint:~# for i in {1..12}; do for j in $(seq 1 $i); do echo -ne $i x $j=$((i*j))\\\\t;done; echo;done 

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
</code></pre><h3 id="_7-命令-cowsay" tabindex="-1">7.命令：Cowsay <a class="header-anchor" href="#_7-命令-cowsay" aria-label="Permalink to “7.命令：Cowsay”">​</a></h3><p>一个在终端用<strong>ASCII</strong>码组成的小牛，这个小牛会说出你想要它说的话。</p><h4 id="安装cowsay" tabindex="-1">安装Cowsay <a class="header-anchor" href="#安装cowsay" aria-label="Permalink to “安装Cowsay”">​</a></h4><pre><code>root@tecmint:~# apt-get install cowsay 		(for Debian based OS)
root@tecmint:~# yum install cowsay		(for Red Hat based OS)
</code></pre><h4 id="输出-1" tabindex="-1">输出 <a class="header-anchor" href="#输出-1" aria-label="Permalink to “输出”">​</a></h4><pre><code>root@tecmint:~# cowsay I Love nix 

 ____________
&lt; I Love nix &gt;
 ------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre><p>如果用管道将‘<strong>fortune command</strong>’命令重定向到cowsay会怎样呢？</p><p>root@tecmint:~# fortune | cowsay</p><pre><code> _________________________________________
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
</code></pre><p><strong>提示：‘|’</strong>是管道命令符。通常它是将一个命令的输出作为下一个命令的输入。在上面的例子中‘<strong>fortune</strong>’的输出作为‘<strong>cowsay</strong>’命令的输出。管道命令会经常用在脚本和程序编写中。</p><p><strong>xcowsay</strong>是一个图形界面程序。它与<strong>cowsay</strong>类似只是以一种图形的方式来表达，可以说是<strong>X</strong>版本的cowsay。</p><pre><code>apt-get insatll xcowsay
yum install xcowsay
</code></pre><h4 id="输出-2" tabindex="-1">输出 <a class="header-anchor" href="#输出-2" aria-label="Permalink to “输出”">​</a></h4><pre><code>root@tecmint:~# xcowsay I Love nix
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/xcowsay.png" alt="xcowsay command"></p><p><strong>cowthink</strong>是另一个命令。运行“cowthink Linux is sooo funny ”看看它与cowsay的不同吧。</p><pre><code>apt-get insatll cowthink
yum install cowthink
</code></pre><h4 id="输出-3" tabindex="-1">输出 <a class="header-anchor" href="#输出-3" aria-label="Permalink to “输出”">​</a></h4><pre><code>root@tecmint:~# cowthink ....Linux is sooo funny
 _________________________
( ....Linux is sooo funny )
 -------------------------
        o   ^__^
         o  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre><h3 id="_8-命令-yes" tabindex="-1">8. 命令：yes <a class="header-anchor" href="#_8-命令-yes" aria-label="Permalink to “8. 命令：yes”">​</a></h3><p>yes 是一个非常有趣又有用的命令，尤其对于脚本编写和系统管理员来说，它可以自动地生成预先定义的响应或者将其传到终端。</p><pre><code>root@tecmint:~# yes I Love Linux

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
</code></pre><p><strong>提示</strong>: (直到你按下<strong>ctrl+c</strong>才停止)</p><h3 id="_9-命令-toilet" tabindex="-1">9. 命令: toilet <a class="header-anchor" href="#_9-命令-toilet" aria-label="Permalink to “9. 命令: toilet”">​</a></h3><p>什么？你在开玩笑吗! 当然没有，但肯定的是这个命令的名字太搞了，我也不知道这个命令的名字从何而来。</p><h4 id="安装toilet" tabindex="-1">安装toilet <a class="header-anchor" href="#安装toilet" aria-label="Permalink to “安装toilet”">​</a></h4><pre><code>root@tecmint:~# apt-get install toilet 
root@tecmint:~# yum install toilet
</code></pre><h4 id="输出-4" tabindex="-1">输出 <a class="header-anchor" href="#输出-4" aria-label="Permalink to “输出”">​</a></h4><pre><code>root@tecmint:~# toilet tecmint 

mmmmmmm                        &quot;             m                               
   #     mmm    mmm   mmmmm  mmm    m mm   mm#mm          mmm    mmm   mmmmm 
   #    #&quot;  #  #&quot;  &quot;  # # #    #    #&quot;  #    #           #&quot;  &quot;  #&quot; &quot;#  # # # 
   #    #&quot;&quot;&quot;&quot;  #      # # #    #    #   #    #           #      #   #  # # # 
   #    &quot;#mm&quot;  &quot;#mm&quot;  # # #  mm#mm  #   #    &quot;mm    #    &quot;#mm&quot;  &quot;#m#&quot;  # # #
</code></pre><p>这个命令甚至提供了一些颜色和字体格式。</p><pre><code>root@tecmint:~# toilet -f mono12 -F metal Tecmint.com
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/toilet.png" alt="toilet command"></p><p><strong>提示：Figlet</strong> 是另外一个与toilet产生的效果类似的命令。</p><h3 id="_10-命令-cmatrix" tabindex="-1">10. 命令：cmatrix <a class="header-anchor" href="#_10-命令-cmatrix" aria-label="Permalink to “10. 命令：cmatrix”">​</a></h3><p>你可能看多好莱坞的电影‘<strong>黑客帝国</strong>’并陶醉于被赋予<strong>Neo</strong>的能看到在矩阵中任何事物的能力，或者你会想到一幅类似于‘<strong>Hacker</strong>’的桌面的生动画面。</p><h4 id="安装-cmatrix" tabindex="-1">安装 cmatrix <a class="header-anchor" href="#安装-cmatrix" aria-label="Permalink to “安装 cmatrix”">​</a></h4><pre><code>root@tecmint:~# apt-get install cmatrix
root@tecmint:~# yum install cmatrix
</code></pre><h4 id="输出-5" tabindex="-1">输出 <a class="header-anchor" href="#输出-5" aria-label="Permalink to “输出”">​</a></h4><pre><code>root@tecmint:~# cmatrix
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/cmatrix.png" alt="cmatrix command"></p><h3 id="_11-命令-oneko" tabindex="-1">11. 命令: oneko <a class="header-anchor" href="#_11-命令-oneko" aria-label="Permalink to “11. 命令: oneko”">​</a></h3><p>可能你坚信Linux的鼠标指针永远是同样的黑色或白色一点儿也不生动，那你就错了。“<strong>oneko</strong>”是一个会让一个“<strong>Jerry</strong>”你的鼠标指针附着到你鼠标上的一个软件包。</p><h4 id="安装-oneko" tabindex="-1">安装 oneko <a class="header-anchor" href="#安装-oneko" aria-label="Permalink to “安装 oneko”">​</a></h4><pre><code>root@tecmint:~# apt-get install oneko
root@tecmint:~# yum install oneko
</code></pre><h4 id="输出-6" tabindex="-1">输出 <a class="header-anchor" href="#输出-6" aria-label="Permalink to “输出”">​</a></h4><pre><code>root@tecmint:~# oneko
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/oneko.png" alt="oneko command"></p><p><strong>提示</strong>：关闭运行着<strong>oneko</strong>的终端时，<strong>Jerry</strong>也会随之消失，重新启动终端时也不会再出项。你可以将这个程序添加到启动选项中然后继续使用它。</p><h3 id="_12-fork炸弹" tabindex="-1">12. Fork炸弹 <a class="header-anchor" href="#_12-fork炸弹" aria-label="Permalink to “12. Fork炸弹”">​</a></h3><p>这是一段非常欠抽的代码。运行这个命令的后果自己负责。这个命令其实是一个fork炸弹，它会以指数级的自乘，直到所有的系统资源都被利用了或者系统挂起（想要见识这个命令的威力你可以试一次这个命令，但是后果自负，记得在运行它之前关掉并保存其它所有程序和文件）。</p><pre><code>root@tecmint:~# :(){ :|:&amp; }:
</code></pre><h3 id="_13-命令-while" tabindex="-1">13. 命令：while <a class="header-anchor" href="#_13-命令-while" aria-label="Permalink to “13. 命令：while”">​</a></h3><p>下面的”while“命令是一个脚本，这个脚本可以为你提供彩色的日期和文件直到你按下中断键（ctrl+c）。复制粘贴这个命令到你的终端。</p><pre><code>root@tecmint:~# while true; do echo &quot;$(date &#39;+%D %T&#39; | toilet -f term -F border --gay)&quot;; sleep 1; done
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/while.png" alt="Linux while command"></p><p><strong>提示</strong>：以上脚本通过下面的修改也会产生类似的输出但是还是有点不同的，在你的终端试试吧。</p><pre><code>root@tecmint:~# while true; do clear; echo &quot;$(date &#39;+%D %T&#39; | toilet -f term -F border --gay)&quot;; sleep 1; done
</code></pre><h3 id="_14-命令-espeak" tabindex="-1">14. 命令: espeak <a class="header-anchor" href="#_14-命令-espeak" aria-label="Permalink to “14. 命令: espeak”">​</a></h3><p>将你的多媒体音箱的音量调到最大，然后在将这个命令复制到你的终端，来看看你听到上帝的声音时的反应吧。</p><h4 id="安装-espeak" tabindex="-1">安装 espeak <a class="header-anchor" href="#安装-espeak" aria-label="Permalink to “安装 espeak”">​</a></h4><pre><code>root@tecmint:~# apt-get install espeak
root@tecmint:~# yum install espeak
</code></pre><h4 id="输出-7" tabindex="-1">输出 <a class="header-anchor" href="#输出-7" aria-label="Permalink to “输出”">​</a></h4><pre><code>root@tecmint:~# espeak &quot;Tecmint is a very good website dedicated to Foss Community&quot;
</code></pre><h3 id="_15-命令-aafire" tabindex="-1">15. 命令: aafire <a class="header-anchor" href="#_15-命令-aafire" aria-label="Permalink to “15. 命令: aafire”">​</a></h3><p>在你的终端放一把火如何。把这个“<strong>aafire</strong>”敲到你的终端，不需要什么引号看看这神奇的一幕吧。按下任意键中指该程序。</p><h4 id="安装-aafire" tabindex="-1">安装 aafire <a class="header-anchor" href="#安装-aafire" aria-label="Permalink to “安装 aafire”">​</a></h4><pre><code>root@tecmint:~# apt-get install libaa-bin
</code></pre><h4 id="输出-8" tabindex="-1">输出 <a class="header-anchor" href="#输出-8" aria-label="Permalink to “输出”">​</a></h4><pre><code>root@tecmint:~# aafire
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/aafire.png" alt=""></p><h3 id="_16-命令-bb" tabindex="-1">16. 命令: bb <a class="header-anchor" href="#_16-命令-bb" aria-label="Permalink to “16. 命令: bb”">​</a></h3><p>首先安装“<strong>apt-get install bb</strong>”,然后敲入“<strong>bb</strong>”看看会发生什么吧。</p><pre><code>root@tecmint:~# bb
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/bb.png" alt="bb command"></p><h3 id="_17-命令-url" tabindex="-1">17. 命令: url <a class="header-anchor" href="#_17-命令-url" aria-label="Permalink to “17. 命令: url”">​</a></h3><p>如果在你的朋友面前用命令行来改变你的 <strong>twitter status</strong> 会不会很酷呢。用你的<strong>用户名密码</strong>和<strong>你想要的状态</strong>分别替换<strong>username, password</strong> 和“<strong>your status message</strong>“就可以了。</p><pre><code>root@tecmint:~# url -u YourUsername:YourPassword -d status=&quot;Your status message&quot; http://twitter.com/statuses/update.xml
</code></pre><h3 id="_18-asciiquarium" tabindex="-1">18. ASCIIquarium <a class="header-anchor" href="#_18-asciiquarium" aria-label="Permalink to “18. ASCIIquarium”">​</a></h3><p>想要在终端弄一个水族馆该，怎么办？</p><pre><code>root@tecmint:~# apt-get install libcurses-perl
root@tecmint:~# cd /tmp 
root@tecmint:~# wget http://search.cpan.org/CPAN/authors/id/K/KB/KBAUCOM/Term-Animation-2.4.tar.gz
root@tecmint:~# tar -zxvf Term-Animation-2.4.tar.gz
root@tecmint:~# cd Term-Animation-2.4/
root@tecmint:~# perl Makefile.PL &amp;&amp;  make &amp;&amp;   make test
root@tecmint:~# make install
</code></pre><h4 id="安装-asciiquarium" tabindex="-1">安装 ASCIIquarium <a class="header-anchor" href="#安装-asciiquarium" aria-label="Permalink to “安装 ASCIIquarium”">​</a></h4><p>下载并安装<strong>ASCIIquarium</strong>。</p><pre><code>root@tecmint:~# cd /tmp
root@tecmint:~# wget http://www.robobunny.com/projects/asciiquarium/asciiquarium.tar.gz
root@tecmint:~# tar -zxvf asciiquarium.tar.gz
root@tecmint:~# cd asciiquarium_1.1/
root@tecmint:~# cp asciiquarium /usr/local/bin
root@tecmint:~# chmod 0755 /usr/local/bin/asciiquarium
</code></pre><p>最后在终端运行“<strong>asciiquarium</strong>”或者“<strong>/usr/local/bin/asciiquarium</strong>”，记得不要加引号，神奇的一幕将在你眼前展现。</p><pre><code>root@tecmint:~# asciiquarium
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/05/ascliquarium.png" alt="aquarium command"></p><h3 id="_19-命令-funny-manpages" tabindex="-1">19. 命令: funny manpages <a class="header-anchor" href="#_19-命令-funny-manpages" aria-label="Permalink to “19. 命令: funny manpages”">​</a></h3><p>首先安装“<strong>apt-get install funny－manpages</strong>”然后运行下面命令的man手册。其中一些</p><pre><code>baby
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
</code></pre><h3 id="_20-linux-tweaks" tabindex="-1">20. Linux Tweaks <a class="header-anchor" href="#_20-linux-tweaks" aria-label="Permalink to “20. Linux Tweaks”">​</a></h3><p>该到了做一些优化的时候了</p><pre><code>root@tecmint:~# world

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
</code></pre><p>Linux总是sexy：<strong>who | grep -i blonde | date; cd ~; unzip; touch; strip; finger; mount; gasp; yes; uptime; umount; sleep</strong>（如果你知道我的意思，汗！）</p><p>还有一些其它的命令，只是这些命令并不能在所有的系统上运行，所以本文没有涉及到。比如说<strong>dog , filter, banner</strong></p><p>使用愉快，你可以稍后再对我说谢谢：）您的评价是我们前进的不竭动力。告诉我们你最喜欢的命令。继续关注，不久我会有另一篇值得阅读的文章。</p><hr>`,124)),r("p",null,[t[1]||(t[1]=n("via: ",-1)),o(e,{href:"http://www.tecmint.com/20-funny-commands-of-linux-or-linux-is-fun-in-terminal/"},{default:a(()=>[...t[0]||(t[0]=[n("http://www.tecmint.com/20-funny-commands-of-linux-or-linux-is-fun-in-terminal/",-1)])]),_:1})]),r("p",null,[t[4]||(t[4]=n("译者：",-1)),o(e,{href:"https://github.com/Linchenguang"},{default:a(()=>[...t[2]||(t[2]=[n("Linchenguang",-1)])]),_:1}),t[5]||(t[5]=n(" 校对：",-1)),o(e,{href:"https://github.com/wxy"},{default:a(()=>[...t[3]||(t[3]=[n("wxy",-1)])]),_:1})]),r("p",null,[t[8]||(t[8]=n("本文由 ",-1)),o(e,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[6]||(t[6]=[n("LCTT",-1)])]),_:1}),t[9]||(t[9]=n(" 原创翻译，",-1)),o(e,{href:"http://linux.cn/"},{default:a(()=>[...t[7]||(t[7]=[n("Linux中国",-1)])]),_:1}),t[10]||(t[10]=n(" 荣誉推出",-1))])])}const k=i(p,[["render",d]]);export{w as __pageData,k as default};
