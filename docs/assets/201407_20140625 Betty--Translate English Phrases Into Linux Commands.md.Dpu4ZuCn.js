import{_ as r,a0 as i,w as p,s as y,ao as m,I as s,a1 as a,A as o,x as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"Betty：通过大白话执行Linux命令 | LCTT x X-CMD","titleTemplate":false,"description":"Betty：通过大白话执行Linux命令 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Betty：通过大白话执行Linux命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Betty：通过大白话执行Linux命令 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140625 Betty--Translate English Phrases Into Linux Commands","title":"Betty：通过大白话执行Linux命令","tag":"201407","desc":""},"relativePath":"201407/20140625 Betty--Translate English Phrases Into Linux Commands.md","filePath":"[post].md"}'),l={name:"201407/20140625 Betty--Translate English Phrases Into Linux Commands.md"};function h(u,t,d,b,g,c){const n=i("Link");return p(),y("div",null,[t[12]||(t[12]=m(`<h1 id="betty-通过大白话执行linux命令" tabindex="-1">Betty：通过大白话执行Linux命令 <a class="header-anchor" href="#betty-通过大白话执行linux命令" aria-label="Permalink to “Betty：通过大白话执行Linux命令”">​</a></h1><p><strong>Betty</strong> 是一个将类英语短语翻译成Linux命令的开源工具。这个项目的主要目的是让大家可以通过输入自然语言来使用强大的Linux系统。让我们来看一下它是怎么工作的。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h3><p>Betty的安装非常简单直接。首先确认你已经安装了下面这些依赖包[LCTT译注，需要安装至少Ruby1.9以上版本]。</p><h4 id="对于基于debian的系统" tabindex="-1">对于基于Debian的系统：#### <a class="header-anchor" href="#对于基于debian的系统" aria-label="Permalink to “对于基于Debian的系统：####”">​</a></h4><pre><code>sudo apt-get install git curl ruby
</code></pre><p>####对于基于RPM的系统：####</p><pre><code>yum install git curl ruby
</code></pre><p>现在用git工具把Betty库clone到你自定义的任何路径。这里我克隆到我的home目录，<strong>例如 /home/sk/</strong>.</p><pre><code>git clone https://github.com/pickhardt/betty
</code></pre><p>添加betty的别名到你的bashrc配置文件。</p><pre><code>sudo nano ~/.bashrc
</code></pre><p>将下列行添加到文件的末尾：</p><pre><code>alias betty=&quot;/home/sk/betty/main.rb&quot;
</code></pre><p>确保你已经正确地设置好了betty的路径。</p><p>好了，现在是时候和betty好好地玩耍了。</p><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to “用法”">​</a></h3><p>你应该在英语短语之前加上单词“betty” [LCTT译注，你自然可以用你的小甜心的名字来替换这个不是知道是谁的Betty :&gt;]。你也许已经知道，如果我们想知道在系统中我们的用户名，应该运行下面的命令：</p><pre><code>whoami
</code></pre><p>输出是这样的：</p><p>sk</p><p>如你所见，我当前登录的用户名是 <strong>sk</strong>. 现在我也可以通过下面的betty命令获取相同的结果。</p><pre><code>betty whats my username
</code></pre><p>输出是这样的：</p><pre><code>Betty: Running whoami
sk
</code></pre><p>真的好酷，是不是？Betty理解我输入的“whats my username”短语，然后运行“whoami”命令，最后输出结果。</p><p>让我们也来看其他命令。</p><p>如果你的输入不够准确，Betty也能以多种方式回应你。例如，我们运行下面的命令：</p><pre><code>betty whats my name
</code></pre><p>Betty不确定她应该查找系统用户名还是用户全名。这种情况下，她会询问你多个问题来找到准确的结果。如你下面所见，Betty问我想要运行哪一条命令（whoami 还是 finger $(whoami) | sed &#39;s/.<em>:</em>//;q&#39;)[LCTT译注，需要你的系统已经安装finger]。我只想知道我的用户名，所以我选择数字<strong>1</strong>。</p><pre><code>Betty: Okay, I have multiple ways to respond.
Betty: Enter the number of the command you want me to run, or N (no) if you don&#39;t want me to run any.
[1] whoami
Gets your system username.
[2] finger $(whoami) | sed &#39;s/.*: *//;q&#39;
Gets your full name.
1
Betty: Running whoami
sk
</code></pre><h3 id="压缩和解压缩文件夹" tabindex="-1">压缩和解压缩文件夹 <a class="header-anchor" href="#压缩和解压缩文件夹" aria-label="Permalink to “压缩和解压缩文件夹”">​</a></h3><p>如果你想要压缩一个文件或者文件夹，用下面的命令。例如，我想压缩我home目录下的“test”文件夹。</p><pre><code>betty compress test/ test.tar.gz
</code></pre><p>输出是这样的：</p><pre><code>Betty: Running tar -czvf test.tar.gz test/
test/
test/home/
test/home/sk/
test/home/sk/test/
test/home/sk/test/sample
</code></pre><p>类似的，我们可以用下面的命令来解压缩一个归档文件。</p><pre><code>betty uncompress test.tar.gz
</code></pre><p>输出是这样的：</p><pre><code>Betty: Running mkdir test &amp;&amp;  tar -zxvf test.tar.gz -C test
test/
test/home/
test/home/sk/
test/home/sk/test/
test/home/sk/test/sample
</code></pre><h3 id="完整的betty命令行列表" tabindex="-1">完整的Betty命令行列表 <a class="header-anchor" href="#完整的betty命令行列表" aria-label="Permalink to “完整的Betty命令行列表”">​</a></h3><p>Betty工具有一些命令格式。如果你输入“what is my user name”而不是“whats my username”，它是不能识别的。所以，你只能输入Betty支持的英语短语。</p><p>下面给出一个Betty支持的完整的命令行列表。</p><pre><code>Count:
betty how many words are in this directory
betty how many characters are in myfile.py
betty count lines in this folder
(Note that there&#39;s many ways to say more or less the same thing.)

Config:
betty change your name to Joe
betty speak to me
betty stop speaking to me

Datetime:
betty what time is it
betty what is todays date
betty what month is it
betty whats today

Find:
betty find me all files that contain california

Internet:
betty download http://www.mysite.com/something.tar.gz to something.tar.gz
betty uncompress something.tar.gz
betty unarchive something.tar.gz to somedir
(You can use unzip, unarchive, untar, uncompress, and expand interchangeably.)
betty compress /path/to/dir

iTunes:
betty mute itunes
betty unmute itunes
betty pause the music
betty resume itunes
betty stop my music
betty next song
betty prev track
betty what song is playing
(Note that the words song, track, music, etc. are interchangeable)

Fun:
betty go crazy
betty whats the meaning of life
...and more that are left for you to discover!

Map:
betty show me a map of mountain view

Meta:
betty what version are you (or just betty version)
betty whats your github again

Permissions:
betty give me permission to this directory
betty give anotheruser ownership of myfile.txt

Process:
betty show me all processes by root containing grep
betty show me all my processes containing netbio

Sizes:
betty show size for myfile.txt

Spotify:
betty play spotify
betty pause spotify
betty next spotify
betty previous spotify

User:
betty whats my username
betty whats my real name
betty whats my ip address
betty who else is logged in
betty whats my version of ruby

Web queries:
betty turn web on
betty please tell me what is the weather like in London
</code></pre><p>对Linux初级使用者来说，Betty似乎是一个非常nice的工具。希望这个工具对你也会非常有用。</p><p>Cheers!</p><p>源代码：</p>`,47)),s("ul",null,[s("li",null,[a(n,{href:"https://github.com/pickhardt/betty"},{default:o(()=>[...t[0]||(t[0]=[e("Betty Homepage",-1)])]),_:1})])]),t[13]||(t[13]=s("hr",null,null,-1)),s("p",null,[t[2]||(t[2]=e("via: ",-1)),a(n,{href:"http://www.unixmen.com/betty-translate-english-phrases-linux-commands/"},{default:o(()=>[...t[1]||(t[1]=[e("http://www.unixmen.com/betty-translate-english-phrases-linux-commands/",-1)])]),_:1})]),s("p",null,[t[5]||(t[5]=e("译者：",-1)),a(n,{href:"https://github.com/CNprober"},{default:o(()=>[...t[3]||(t[3]=[e("love_daisy_love",-1)])]),_:1}),t[6]||(t[6]=e(" 校对：",-1)),a(n,{href:"https://github.com/wxy"},{default:o(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),s("p",null,[t[9]||(t[9]=e("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[7]||(t[7]=[e("LCTT",-1)])]),_:1}),t[10]||(t[10]=e(" 原创翻译，",-1)),a(n,{href:"http://linux.cn/"},{default:o(()=>[...t[8]||(t[8]=[e("Linux中国",-1)])]),_:1}),t[11]||(t[11]=e(" 荣誉推出",-1))])])}const B=r(l,[["render",h]]);export{x as __pageData,B as default};
