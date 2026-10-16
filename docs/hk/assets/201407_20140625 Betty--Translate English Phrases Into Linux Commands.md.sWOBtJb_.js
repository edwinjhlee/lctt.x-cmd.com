import{_ as r,a0 as i,w as p,s as y,ao as m,I as s,a1 as a,A as o,x as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"Betty：通過大白話執行Linux命令 | LCTT x X-CMD","titleTemplate":false,"description":"Betty：通過大白話執行Linux命令 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Betty：通過大白話執行Linux命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Betty：通過大白話執行Linux命令 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140625 Betty--Translate English Phrases Into Linux Commands","title":"Betty：通過大白話執行Linux命令","tag":"201407","desc":""},"relativePath":"201407/20140625 Betty--Translate English Phrases Into Linux Commands.md","filePath":"[post].md"}'),l={name:"201407/20140625 Betty--Translate English Phrases Into Linux Commands.md"};function h(u,t,d,b,g,c){const n=i("Link");return p(),y("div",null,[t[12]||(t[12]=m(`<h1 id="betty-通過大白話執行linux命令" tabindex="-1">Betty：通過大白話執行Linux命令 <a class="header-anchor" href="#betty-通過大白話執行linux命令" aria-label="Permalink to “Betty：通過大白話執行Linux命令”">​</a></h1><p><strong>Betty</strong> 是一個將類英語短語翻譯成Linux命令的開源工具。這個項目的主要目的是讓大家可以通過輸入自然語言來使用強大的Linux系統。讓我們來看一下它是怎麼工作的。</p><h3 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to “安裝”">​</a></h3><p>Betty的安裝非常簡單直接。首先確認你已經安裝了下面這些依賴包[LCTT譯註，需要安裝至少Ruby1.9以上版本]。</p><h4 id="對於基於debian的系統" tabindex="-1">對於基於Debian的系統：#### <a class="header-anchor" href="#對於基於debian的系統" aria-label="Permalink to “對於基於Debian的系統：####”">​</a></h4><pre><code>sudo apt-get install git curl ruby
</code></pre><p>####對於基於RPM的系統：####</p><pre><code>yum install git curl ruby
</code></pre><p>現在用git工具把Betty庫clone到你自定義的任何路徑。這裏我克隆到我的home目錄，<strong>例如 /home/sk/</strong>.</p><pre><code>git clone https://github.com/pickhardt/betty
</code></pre><p>添加betty的別名到你的bashrc配置文件。</p><pre><code>sudo nano ~/.bashrc
</code></pre><p>將下列行添加到文件的末尾：</p><pre><code>alias betty=&quot;/home/sk/betty/main.rb&quot;
</code></pre><p>確保你已經正確地設置好了betty的路徑。</p><p>好了，現在是時候和betty好好地玩耍了。</p><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to “用法”">​</a></h3><p>你應該在英語短語之前加上單詞“betty” [LCTT譯註，你自然可以用你的小甜心的名字來替換這個不是知道是誰的Betty :&gt;]。你也許已經知道，如果我們想知道在系統中我們的用户名，應該運行下面的命令：</p><pre><code>whoami
</code></pre><p>輸出是這樣的：</p><p>sk</p><p>如你所見，我當前登錄的用户名是 <strong>sk</strong>. 現在我也可以通過下面的betty命令獲取相同的結果。</p><pre><code>betty whats my username
</code></pre><p>輸出是這樣的：</p><pre><code>Betty: Running whoami
sk
</code></pre><p>真的好酷，是不是？Betty理解我輸入的“whats my username”短語，然後運行“whoami”命令，最後輸出結果。</p><p>讓我們也來看其他命令。</p><p>如果你的輸入不夠準確，Betty也能以多種方式回應你。例如，我們運行下面的命令：</p><pre><code>betty whats my name
</code></pre><p>Betty不確定她應該查找系統用户名還是用户全名。這種情況下，她會詢問你多個問題來找到準確的結果。如你下面所見，Betty問我想要運行哪一條命令（whoami 還是 finger $(whoami) | sed &#39;s/.<em>:</em>//;q&#39;)[LCTT譯註，需要你的系統已經安裝finger]。我只想知道我的用户名，所以我選擇數字<strong>1</strong>。</p><pre><code>Betty: Okay, I have multiple ways to respond.
Betty: Enter the number of the command you want me to run, or N (no) if you don&#39;t want me to run any.
[1] whoami
Gets your system username.
[2] finger $(whoami) | sed &#39;s/.*: *//;q&#39;
Gets your full name.
1
Betty: Running whoami
sk
</code></pre><h3 id="壓縮和解壓縮文件夾" tabindex="-1">壓縮和解壓縮文件夾 <a class="header-anchor" href="#壓縮和解壓縮文件夾" aria-label="Permalink to “壓縮和解壓縮文件夾”">​</a></h3><p>如果你想要壓縮一個文件或者文件夾，用下面的命令。例如，我想壓縮我home目錄下的“test”文件夾。</p><pre><code>betty compress test/ test.tar.gz
</code></pre><p>輸出是這樣的：</p><pre><code>Betty: Running tar -czvf test.tar.gz test/
test/
test/home/
test/home/sk/
test/home/sk/test/
test/home/sk/test/sample
</code></pre><p>類似的，我們可以用下面的命令來解壓縮一個歸檔文件。</p><pre><code>betty uncompress test.tar.gz
</code></pre><p>輸出是這樣的：</p><pre><code>Betty: Running mkdir test &amp;&amp;  tar -zxvf test.tar.gz -C test
test/
test/home/
test/home/sk/
test/home/sk/test/
test/home/sk/test/sample
</code></pre><h3 id="完整的betty命令列列表" tabindex="-1">完整的Betty命令列列表 <a class="header-anchor" href="#完整的betty命令列列表" aria-label="Permalink to “完整的Betty命令列列表”">​</a></h3><p>Betty工具有一些命令格式。如果你輸入“what is my user name”而不是“whats my username”，它是不能識別的。所以，你只能輸入Betty支持的英語短語。</p><p>下面給出一個Betty支持的完整的命令列列表。</p><pre><code>Count:
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
</code></pre><p>對Linux初級使用者來説，Betty似乎是一個非常nice的工具。希望這個工具對你也會非常有用。</p><p>Cheers!</p><p>源代碼：</p>`,47)),s("ul",null,[s("li",null,[a(n,{href:"https://github.com/pickhardt/betty"},{default:o(()=>[...t[0]||(t[0]=[e("Betty Homepage",-1)])]),_:1})])]),t[13]||(t[13]=s("hr",null,null,-1)),s("p",null,[t[2]||(t[2]=e("via: ",-1)),a(n,{href:"http://www.unixmen.com/betty-translate-english-phrases-linux-commands/"},{default:o(()=>[...t[1]||(t[1]=[e("http://www.unixmen.com/betty-translate-english-phrases-linux-commands/",-1)])]),_:1})]),s("p",null,[t[5]||(t[5]=e("譯者：",-1)),a(n,{href:"https://github.com/CNprober"},{default:o(()=>[...t[3]||(t[3]=[e("love_daisy_love",-1)])]),_:1}),t[6]||(t[6]=e(" 校對：",-1)),a(n,{href:"https://github.com/wxy"},{default:o(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),s("p",null,[t[9]||(t[9]=e("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[7]||(t[7]=[e("LCTT",-1)])]),_:1}),t[10]||(t[10]=e(" 原創翻譯，",-1)),a(n,{href:"http://linux.cn/"},{default:o(()=>[...t[8]||(t[8]=[e("Linux中國",-1)])]),_:1}),t[11]||(t[11]=e(" 榮譽推出",-1))])])}const B=r(l,[["render",h]]);export{x as __pageData,B as default};
