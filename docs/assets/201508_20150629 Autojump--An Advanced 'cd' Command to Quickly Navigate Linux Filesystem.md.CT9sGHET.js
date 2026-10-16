import{_ as m,a0 as l,w as i,s as d,I as e,x as p,a1 as n,A as u,ao as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const $=JSON.parse(`{"title":"Autojump：一个可以在 Linux 文件系统快速导航的高级 cd 命令 | LCTT x X-CMD","titleTemplate":false,"description":"Autojump：一个可以在 Linux 文件系统快速导航的高级 cd 命令 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Autojump：一个可以在 Linux 文件系统快速导航的高级 cd 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Autojump：一个可以在 Linux 文件系统快速导航的高级 cd 命令 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150629 Autojump--An Advanced 'cd' Command to Quickly Navigate Linux Filesystem","title":"Autojump：一个可以在 Linux 文件系统快速导航的高级 cd 命令","tag":"201508","desc":""},"relativePath":"201508/20150629 Autojump--An Advanced 'cd' Command to Quickly Navigate Linux Filesystem.md","filePath":"[post].md"}`),r={name:"201508/20150629 Autojump--An Advanced 'cd' Command to Quickly Navigate Linux Filesystem.md"};function s(c,t,j,w,g,h){const o=l("Link");return i(),d("div",null,[t[26]||(t[26]=e("h1",{id:"autojump-一个可以在-linux-文件系统快速导航的高级-cd-命令",tabindex:"-1"},[p("Autojump：一个可以在 Linux 文件系统快速导航的高级 cd 命令 "),e("a",{class:"header-anchor",href:"#autojump-一个可以在-linux-文件系统快速导航的高级-cd-命令","aria-label":"Permalink to “Autojump：一个可以在 Linux 文件系统快速导航的高级 cd 命令”"},"​")],-1)),t[27]||(t[27]=e("p",null,"对于那些主要通过控制台或终端使用 Linux 命令行来工作的 Linux 用户来说，他们真切地感受到了 Linux 的强大。 然而在 Linux 的分层文件系统中进行导航有时或许是一件头疼的事，尤其是对于那些新手来说。",-1)),e("p",null,[t[1]||(t[1]=p("现在，有一个用 Python 写的名为 ",-1)),t[2]||(t[2]=e("code",null,"autojump",-1)),t[3]||(t[3]=p(" 的 Linux 命令行实用程序，它是 Linux ‘",-1)),n(o,{href:"http://www.tecmint.com/cd-command-in-linux/"},{default:u(()=>[...t[0]||(t[0]=[p("cd",-1)])]),_:1}),t[4]||(t[4]=p("’命令的高级版本。",-1))]),t[28]||(t[28]=a(`<p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Autojump-Command.jpg" alt="Autojump 命令"></p><p><em>Autojump – Linux 文件系统导航的最快方式</em></p><p>这个应用原本由 Joël Schaerer 编写，现在由 +William Ting 维护。</p><p>Autojump 应用可以从用户那里学习并帮助用户在 Linux 命令行中进行更轻松的目录导航。与传统的 <code>cd</code> 命令相比，autojump 能够更加快速地导航至目的目录。</p><h4 id="autojump-的特色" tabindex="-1">autojump 的特色 <a class="header-anchor" href="#autojump-的特色" aria-label="Permalink to “autojump 的特色”">​</a></h4><ul><li>自由开源的应用，在 GPL V3 协议下发布。</li><li>自主学习的应用，从用户的导航习惯中学习。</li><li>更快速地导航。不必包含子目录的名称。</li><li>对于大多数的标准 Linux 发行版本，能够在软件仓库中下载得到，它们包括 Debian (testing/unstable), Ubuntu, Mint, Arch, Gentoo, Slackware, CentOS, RedHat 和 Fedora。</li><li>也能在其他平台中使用，例如 OS X(使用 Homebrew) 和 Windows (通过 Clink 来实现)</li><li>使用 autojump 你可以跳至任何特定的目录或一个子目录。你还可以用文件管理器打开某个目录，并查看你在某个目录中所待时间的统计数据。</li></ul><h4 id="前提" tabindex="-1">前提 <a class="header-anchor" href="#前提" aria-label="Permalink to “前提”">​</a></h4><ul><li>版本号不低于 2.6 的 Python</li></ul><h3 id="第-1-步-做一次完整的系统升级" tabindex="-1">第 1 步: 做一次完整的系统升级 <a class="header-anchor" href="#第-1-步-做一次完整的系统升级" aria-label="Permalink to “第 1 步: 做一次完整的系统升级”">​</a></h3><p>1、 以 <strong>root</strong> 用户的身份，做一次系统更新或升级，以此保证你安装有最新版本的 Python。</p><pre><code># apt-get update &amp;&amp; apt-get upgrade &amp;&amp; apt-get dist-upgrade [基于 APT 的系统]
# yum update &amp;&amp; yum upgrade [基于 YUM 的系统]
# dnf update &amp;&amp; dnf upgrade [基于 DNF 的系统]
</code></pre><p><strong>注</strong> : 这里特别提醒，在基于 YUM 或 DNF 的系统中，更新和升级执行相同的行动，大多数时间里它们是通用的，这点与基于 APT 的系统不同。</p><h3 id="第-2-步-下载和安装-autojump" tabindex="-1">第 2 步: 下载和安装 Autojump <a class="header-anchor" href="#第-2-步-下载和安装-autojump" aria-label="Permalink to “第 2 步: 下载和安装 Autojump”">​</a></h3><p>2、 正如前面所言，在大多数的 Linux 发行版本的软件仓库中， autojump 都可获取到。通过包管理器你就可以安装它。但若你想从源代码开始来安装它，你需要克隆源代码并执行 python 脚本，如下面所示：</p><h4 id="从源代码安装" tabindex="-1">从源代码安装 <a class="header-anchor" href="#从源代码安装" aria-label="Permalink to “从源代码安装”">​</a></h4><p>若没有安装 git，请安装它。我们需要使用它来克隆 git 仓库。</p><pre><code># apt-get install git   [基于 APT 的系统]
# yum install git       [基于 YUM 的系统]
# dnf install git       [基于 DNF 的系统]
</code></pre><p>一旦安装完 git，以普通用户身份登录，然后像下面那样来克隆 autojump：</p><pre><code>$ git clone git://github.com/joelthelion/autojump.git
</code></pre><p>接着，使用 <code>cd</code> 命令切换到下载目录。</p><pre><code>$ cd autojump
</code></pre><p>下载，赋予安装脚本文件可执行权限，并以 root 用户身份来运行安装脚本。</p><pre><code># chmod 755 install.py
# ./install.py
</code></pre><h4 id="从软件仓库中安装" tabindex="-1">从软件仓库中安装 <a class="header-anchor" href="#从软件仓库中安装" aria-label="Permalink to “从软件仓库中安装”">​</a></h4><p>3、 假如你不想麻烦，你可以以 <strong>root</strong> 用户身份从软件仓库中直接安装它:</p><p>在 Debian, Ubuntu, Mint 及类似系统中安装 autojump :</p><pre><code># apt-get install autojump
</code></pre>`,27)),e("p",null,[t[6]||(t[6]=p("为了在 Fedora, CentOS, RedHat 及类似系统中安装 autojump, 你需要启用 ",-1)),n(o,{href:"https://linux.cn/article-2324-1.html"},{default:u(()=>[...t[5]||(t[5]=[p("EPEL 软件仓库",-1)])]),_:1}),t[7]||(t[7]=p("。",-1))]),t[29]||(t[29]=a(`<pre><code># yum install epel-release
# yum install autojump
或
# dnf install autojump
</code></pre><h3 id="第-3-步-安装后的配置" tabindex="-1">第 3 步: 安装后的配置 <a class="header-anchor" href="#第-3-步-安装后的配置" aria-label="Permalink to “第 3 步: 安装后的配置”">​</a></h3><p>4、 在 Debian 及其衍生系统 (Ubuntu, Mint,…) 中, 激活 autojump 应用是非常重要的。</p><p>为了暂时激活 autojump 应用，即直到你关闭当前会话或打开一个新的会话之前让 autojump 均有效，你需要以常规用户身份运行下面的命令:</p><pre><code>$ source /usr/share/autojump/autojump.sh on startup
</code></pre><p>为了使得 autojump 在 BASH shell 中永久有效，你需要运行下面的命令。</p><pre><code>$ echo &#39;. /usr/share/autojump/autojump.sh&#39; &gt;&gt; ~/.bashrc
</code></pre><h3 id="第-4-步-autojump-的预测试和使用" tabindex="-1">第 4 步: Autojump 的预测试和使用 <a class="header-anchor" href="#第-4-步-autojump-的预测试和使用" aria-label="Permalink to “第 4 步: Autojump 的预测试和使用”">​</a></h3><p>5、 如先前所言， autojump 将只跳到先前 <code>cd</code> 命令到过的目录。所以在我们开始测试之前，我们要使用 <code>cd</code> 切换到一些目录中去，并创建一些目录。下面是我所执行的命令。</p><pre><code>$ cd
$ cd
$ cd Desktop/
$ cd
$ cd Documents/
$ cd
$ cd Downloads/
$ cd
$ cd Music/
$ cd
$ cd Pictures/
$ cd
$ cd Public/
$ cd
$ cd Templates
$ cd
$ cd /var/www/
$ cd
$ mkdir autojump-test/
$ cd
$ mkdir autojump-test/a/ &amp;&amp; cd autojump-test/a/
$ cd
$ mkdir autojump-test/b/ &amp;&amp; cd autojump-test/b/
$ cd
$ mkdir autojump-test/c/ &amp;&amp; cd autojump-test/c/
$ cd
</code></pre><p>现在，我们已经切换到过上面所列的目录，并为了测试创建了一些目录，一切准备就绪，让我们开始吧。</p><p><strong>需要记住的一点</strong> : <code>j</code> 是 autojump 的一个封装，你可以使用 j 来代替 autojump， 相反亦可。</p><p>6、 使用 -v 选项查看安装的 autojump 的版本。</p><pre><code>$ j -v
或
$ autojump -v
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Check-Autojump-Version.png" alt="查看 Autojump 的版本"></p><p><em>查看 Autojump 的版本</em></p><p>7、 跳到先前到过的目录 ‘/var/www‘。</p><pre><code>$ j www
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Jump-To-Directory.png" alt="跳到目录"></p><p><em>跳到目录</em></p><p>8、 跳到先前到过的子目录‘/home/avi/autojump-test/b‘ 而不键入子目录的全名。</p><pre><code>$ jc b
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Jump-to-Child-Directory.png" alt="跳到子目录"></p><p><em>跳到子目录</em></p><p>9、 使用下面的命令，你就可以从命令行打开一个文件管理器，例如 GNOME Nautilus ，而不是跳到一个目录。</p><pre><code>$ jo www
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Jump-to-Direcotory.png" alt="打开目录"></p><p><em>打开目录</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Open-Directory-in-File-Browser.png" alt="在文件管理器中打开目录"></p><p><em>在文件管理器中打开目录</em></p><p>你也可以在一个文件管理器中打开一个子目录。</p><pre><code>$ jco c
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Open-Child-Directory1.png" alt="打开子目录"></p><p><em>打开子目录</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Open-Child-Directory-in-File-Browser1.png" alt="在文件管理器中打开子目录"></p><p><em>在文件管理器中打开子目录</em></p><p>10、 查看每个文件夹的权重和全部文件夹计算得出的总权重的统计数据。文件夹的权重代表在这个文件夹中所花的总时间。 文件夹权重是该列表中目录的数字。(LCTT 译注: 在这一句中，我觉得原文中的 if 应该为 is)</p><pre><code>$ j --stat
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Check-Statistics.png" alt="查看文件夹统计数据"></p><p><em>查看文件夹统计数据</em></p><p><strong>提醒</strong> : autojump 存储其运行日志和错误日志的地方是文件夹 <code>~/.local/share/autojump/</code>。千万不要重写这些文件，否则你将失去你所有的统计状态结果。</p><pre><code>$ ls -l ~/.local/share/autojump/
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Autojump-Logs.png" alt="Autojump 的日志"></p><p><em>Autojump 的日志</em></p><p>11、 假如需要，你只需运行下面的命令就可以查看帮助 :</p><pre><code>$ j --help
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Autojump-help-options.png" alt="Autojump 的帮助和选项"></p><p><em>Autojump 的帮助和选项</em></p><h3 id="功能需求和已知的冲突" tabindex="-1">功能需求和已知的冲突 <a class="header-anchor" href="#功能需求和已知的冲突" aria-label="Permalink to “功能需求和已知的冲突”">​</a></h3>`,49)),e("ul",null,[t[11]||(t[11]=e("li",null,[p("autojump 只能让你跳到那些你已经用 "),e("code",null,"cd"),p(" 到过的目录。一旦你用 "),e("code",null,"cd"),p(" 切换到一个特定的目录，这个行为就会被记录到 autojump 的数据库中，这样 autojump 才能工作。不管怎样，在你设定了 autojump 后，你不能跳到那些你没有用 "),e("code",null,"cd"),p(" 到过的目录。")],-1)),e("li",null,[t[9]||(t[9]=p("你不能跳到名称以破折号 (-) 开头的目录。或许你可以考虑阅读我的有关",-1)),n(o,{href:"http://www.tecmint.com/manage-linux-filenames-with-special-characters/"},{default:u(()=>[...t[8]||(t[8]=[p("操作文件或目录",-1)])]),_:1}),t[10]||(t[10]=p(" 的文章，尤其是有关操作那些以‘-‘ 或其他特殊字符开头的文件和目录的内容。",-1))]),t[12]||(t[12]=e("li",null,[p("在 BASH shell 中，autojump 通过修改 "),e("code",null,"$PROMPT_COMMAND"),p(" 环境变量来跟踪目录的行为，所以强烈建议不要去重写 "),e("code",null,"$PROMPT_COMMAND"),p(" 这个环境变量。若你需要添加其他的命令到现存的 "),e("code",null,"$PROMPT_COMMAND"),p(" 环境变量中，请添加到"),e("code",null,"$PROMPT_COMMAND"),p(" 环境变量的最后。")],-1))]),t[30]||(t[30]=e("h3",{id:"结论",tabindex:"-1"},[p("结论: "),e("a",{class:"header-anchor",href:"#结论","aria-label":"Permalink to “结论:”"},"​")],-1)),t[31]||(t[31]=e("p",null,"假如你是一个命令行用户， autojump 是你必备的实用程序。它可以简化许多事情。它是一个在命令行中导航 Linux 目录的绝佳的程序。请自行尝试它，并在下面的评论框中让我知晓你宝贵的反馈。保持联系，保持分享。喜爱并分享，帮助我们更好地传播。",-1)),t[32]||(t[32]=e("hr",null,null,-1)),e("p",null,[t[14]||(t[14]=p("via: ",-1)),n(o,{href:"http://www.tecmint.com/autojump-a-quickest-way-to-navigate-linux-filesystem/"},{default:u(()=>[...t[13]||(t[13]=[p("http://www.tecmint.com/autojump-a-quickest-way-to-navigate-linux-filesystem/",-1)])]),_:1})]),e("p",null,[t[18]||(t[18]=p("作者：",-1)),n(o,{href:"http://www.tecmint.com/author/avishek/"},{default:u(()=>[...t[15]||(t[15]=[p("Avishek Kumar",-1)])]),_:1}),t[19]||(t[19]=p(" 译者：",-1)),n(o,{href:"https://github.com/FSSlc"},{default:u(()=>[...t[16]||(t[16]=[p("FSSlc",-1)])]),_:1}),t[20]||(t[20]=p(" 校对：",-1)),n(o,{href:"https://github.com/wxy"},{default:u(()=>[...t[17]||(t[17]=[p("wxy",-1)])]),_:1})]),e("p",null,[t[23]||(t[23]=p("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:u(()=>[...t[21]||(t[21]=[p("LCTT",-1)])]),_:1}),t[24]||(t[24]=p(" 原创翻译，",-1)),n(o,{href:"https://linux.cn/"},{default:u(()=>[...t[22]||(t[22]=[p("Linux中国",-1)])]),_:1}),t[25]||(t[25]=p(" 荣誉推出",-1))])])}const f=m(r,[["render",s]]);export{$ as __pageData,f as default};
