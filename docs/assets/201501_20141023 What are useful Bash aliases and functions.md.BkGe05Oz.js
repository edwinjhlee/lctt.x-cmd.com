import{_ as p,a0 as n,w as l,s as i,ao as d,I as r,x as t,a1 as o,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"一大波有用的 bash 别名和函数 | LCTT x X-CMD","titleTemplate":false,"description":"一大波有用的 bash 别名和函数 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一大波有用的 bash 别名和函数 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一大波有用的 bash 别名和函数 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141023 What are useful Bash aliases and functions","title":"一大波有用的 bash 别名和函数","tag":"201501","desc":""},"relativePath":"201501/20141023 What are useful Bash aliases and functions.md","filePath":"[post].md"}'),u={name:"201501/20141023 What are useful Bash aliases and functions.md"};function c(m,e,f,g,$,h){const a=n("Link");return l(),i("div",null,[e[20]||(e[20]=d(`<h1 id="一大波有用的-bash-别名和函数" tabindex="-1">一大波有用的 bash 别名和函数 <a class="header-anchor" href="#一大波有用的-bash-别名和函数" aria-label="Permalink to “一大波有用的 bash 别名和函数”">​</a></h1><p>作为一个命令行探索者，你或许发现你自己一遍又一遍重复同样的命令。如果你总是用ssh进入到同一台电脑，如果你总是将一连串命令连接起来，如果你总是用同样的参数运行一个程序，你也许希望在这种不断的重复中为你的生命节约下几秒钟。</p><p>解决方案是使用一个别名（alias）。正如你可能知道的，别名用一种让你的shell记住一个特定的命令并且给它一个新的名字的方式。不管怎么样，别名有一些限制，它只是shell命令的快捷方式，不能传递或者控制其中的参数。所以作为补充，bash 也允许你创建你自己的函数，这可能更长一些和复杂一点，它允许任意数量的参数。</p><p>当然，当你有美食时，比如某种汤，你要分享它给大家。我这里有一个列表，列出了一些最有用bash别名和函数的。注意“最有用的”只是个说法，别名的是否有用要看你是否每天都需要在 shell 里面用它。</p><p>在你开始你的别名体验之旅前，这里有一个便于使用的小技巧：如果你的别名和原本的命令名字相同，你可以用如下技巧来访问原本的命令（LCTT 译注：你也可以直接原本命令的完整路径来访问它。）</p><pre><code>\\command 
</code></pre><p>例如，如果有一个替换了ls命令的别名 ls。如果你想使用原本的ls命令而不是别名，通过调用它:</p><pre><code>\\ls 
</code></pre><h3 id="提升生产力" tabindex="-1">提升生产力 <a class="header-anchor" href="#提升生产力" aria-label="Permalink to “提升生产力”">​</a></h3><p>这些别名真的很简单并且真的很短，但他们大多数是为了给你的生命节省几秒钟，最终也许为你这一辈子节省出来几年，也许呢。</p><pre><code>alias ls=&quot;ls --color=auto&quot;
</code></pre><p>简单但非常重要。使ls命令带着彩色输出。</p><pre><code>alias ll=&quot;ls --color -al&quot;
</code></pre><p>以彩色的列表方式列出目录里面的全部文件。</p><pre><code>alias grep=&#39;grep --color=auto&#39;
</code></pre><p>类似，只是在grep里输出带上颜色。</p><pre><code>mcd() { mkdir -p &quot;$1&quot;; cd &quot;$1&quot;;} 
</code></pre><p>我的最爱之一。创建一个目录并进入该目录里： mcd [目录名]。</p><pre><code>cls() { cd &quot;$1&quot;; ls;}
</code></pre><p>类似上一个函数，进入一个目录并列出它的的内容：cls[目录名]。</p><pre><code>backup() { cp &quot;$1&quot;{,.bak};}
</code></pre><p>简单的给文件创建一个备份: backup [文件] 将会在同一个目录下创建 [文件].bak。</p><pre><code>md5check() { md5sum &quot;$1&quot; | grep &quot;$2&quot;;}
</code></pre><p>因为我讨厌通过手工比较文件的md5校验值，这个函数会计算它并进行比较：md5check[文件][校验值]。</p><p><img src="https://farm6.staticflickr.com/5616/15412389280_8be57841ae_o.jpg" alt=""></p><pre><code>alias makescript=&quot;fc -rnl | head -1 &gt;&quot; 
</code></pre><p>很容易用你上一个运行的命令创建一个脚本：makescript [脚本名字.sh]</p><pre><code>alias genpasswd=&quot;strings /dev/urandom | grep -o &#39;[[:alnum:]]&#39; | head -n 30 | tr -d &#39;\\n&#39;; echo&quot; 
</code></pre><p>只是瞬间产生一个强壮的密码。</p><p><img src="https://farm4.staticflickr.com/3955/15574321206_dd365f0f0e.jpg" alt=""></p><pre><code>alias c=&quot;clear&quot;
</code></pre><p>清除你终端屏幕不能更简单了吧？</p><pre><code>alias histg=&quot;history | grep&quot;
</code></pre><p>快速搜索你的命令输入历史：histg [关键字]</p><pre><code>alias ..=&#39;cd ..&#39;
</code></pre><p>回到上层目录还需要输入 cd 吗？</p><pre><code>alias ...=&#39;cd ../..&#39;
</code></pre><p>自然，去到上两层目录。</p><pre><code>extract() { 
    if [ -f $1 ] ; then 
      case $1 in 
        *.tar.bz2)   tar xjf $1     ;; 
        *.tar.gz)    tar xzf $1     ;; 
        *.bz2)       bunzip2 $1     ;; 
        *.rar)       unrar e $1     ;; 
        *.gz)        gunzip $1      ;; 
        *.tar)       tar xf $1      ;; 
        *.tbz2)      tar xjf $1     ;; 
        *.tgz)       tar xzf $1     ;; 
        *.zip)       unzip $1       ;; 
        *.Z)         uncompress $1  ;; 
        *.7z)        7z x $1        ;; 
        *)     echo &quot;&#39;$1&#39; cannot be extracted via extract()&quot; ;; 
         esac 
     else 
         echo &quot;&#39;$1&#39; is not a valid file&quot; 
     fi 
}
</code></pre><p>很长，但是也是最有用的。解压任何的文档类型：extract: [压缩文件]</p><h3 id="系统信息" tabindex="-1">系统信息 <a class="header-anchor" href="#系统信息" aria-label="Permalink to “系统信息”">​</a></h3><p>想尽快地知道关于你的系统一切信息？</p><pre><code>alias cmount=&quot;mount | column -t&quot;
</code></pre><p>按列格式化输出mount信息。</p><p><img src="https://farm6.staticflickr.com/5603/15598830622_587b77a363_z.jpg" alt=""></p><pre><code>alias tree=&quot;ls -R | grep &quot;:$&quot; | sed -e &#39;s/:$//&#39; -e &#39;s/[^-][^\\/]*\\//--/g&#39; -e &#39;s/^/   /&#39; -e &#39;s/-/|/&#39;&quot; 
</code></pre><p>以树形结构递归地显示目录结构。</p><pre><code>sbs() { du -b --max-depth 1 | sort -nr | perl -pe &#39;s{([0-9]+)}{sprintf &quot;%.1f%s&quot;, $1&gt;=2**30? ($1/2**30, &quot;G&quot;): $1&gt;=2**20? ($1/2**20, &quot;M&quot;): $1&gt;=2**10? ($1/2**10, &quot;K&quot;): ($1, &quot;&quot;)}e&#39;;} 
</code></pre><p>安装文件在磁盘存储的大小排序，显示当前目录的文件列表。</p><pre><code>alias intercept=&quot;sudo strace -ff -e trace=write -e write=1,2 -p&quot; 
</code></pre><p>接管某个进程的标准输出和标准错误。注意你需要安装了 strace。</p><pre><code>alias meminfo=&#39;free -m -l -t&#39;
</code></pre><p>查看你还有剩下多少内存。</p><p><img src="https://farm4.staticflickr.com/3955/15411891448_0b9d6450bd_z.jpg" alt=""></p><pre><code>alias ps? = &quot;ps aux | grep&quot;
</code></pre><p>可以很容易地找到某个进程的PID：ps? [名字]。</p><pre><code>alias volume=&quot;amixer get Master | sed &#39;1,4 d&#39; | cut -d [ -f 2 | cut -d ] -f 1&quot;
</code></pre><p>显示当前音量设置。</p><p><img src="https://farm4.staticflickr.com/3939/15597995445_99ea7ffcd5_o.jpg" alt=""></p><h3 id="网络" tabindex="-1">网络 <a class="header-anchor" href="#网络" aria-label="Permalink to “网络”">​</a></h3><p>对于所有用在互联网和本地网络的命令，也有一些神奇的别名给它们。</p><pre><code>alias websiteget=&quot;wget --random-wait -r -p -e robots=off -U mozilla&quot;
</code></pre><p>下载整个网站：websiteget [URL]。</p><pre><code>alias listen=&quot;lsof -P -i -n&quot; 
</code></pre><p>显示出哪个应用程序连接到网络。</p><p><img src="https://farm4.staticflickr.com/3943/15598830552_c7e5eaaa0d_z.jpg" alt=""></p><pre><code>alias port=&#39;netstat -tulanp&#39;
</code></pre><p>显示出活动的端口。</p><pre><code>gmail() { curl -u &quot;$1&quot; --silent &quot;https://mail.google.com/mail/feed/atom&quot; | sed -e &#39;s/&lt;\\/fullcount.*/\\n/&#39; | sed -e &#39;s/.*fullcount&gt;//&#39;}
</code></pre><p>大概的显示你的谷歌邮件里未读邮件的数量：gmail [用户名]</p><pre><code>alias ipinfo=&quot;curl ifconfig.me &amp;&amp; curl ifconfig.me/host&quot;
</code></pre><p>获得你的公网IP地址和主机名。</p><pre><code>getlocation() { lynx -dump http://www.ip-adress.com/ip_tracer/?QRY=$1|grep address|egrep &#39;city|state|country&#39;|awk &#39;{print $3,$4,$5,$6,$7,$8}&#39;|sed &#39;s\\ip address flag \\\\&#39;|sed &#39;s\\My\\\\&#39;;} 
</code></pre><p>返回你的当前IP地址的地理位置。</p><h3 id="也许无用" tabindex="-1">也许无用 <a class="header-anchor" href="#也许无用" aria-label="Permalink to “也许无用”">​</a></h3><p>所以呢，如果一些别名并不是全都具有使用价值？它们可能仍然有趣。</p><pre><code>kernelgraph() { lsmod | perl -e &#39;print &quot;digraph \\&quot;lsmod\\&quot; {&quot;;&lt;&gt;;while(&lt;&gt;){@_=split/\\s+/; print &quot;\\&quot;$_[0]\\&quot; -&gt; \\&quot;$_\\&quot;\\n&quot; for split/,/,$_[3]}print &quot;}&quot;&#39; | dot -Tpng | display -;}
</code></pre><p>绘制内核模块依赖曲线图。需要可以查看图片。</p><pre><code>alias busy=&quot;cat /dev/urandom | hexdump -C | grep &#39;ca fe&#39;&quot; 
</code></pre><p>在那些非技术人员的眼里你看起来是总是那么忙和神秘。</p><p><img src="https://farm6.staticflickr.com/5599/15574321326_ab3fbc1ef9_z.jpg" alt=""></p>`,81)),r("p",null,[e[3]||(e[3]=t("最后，这些别名和函数的很大一部分来自于我个人的.bashrc。而那些令人点赞的网站 ",-1)),o(a,{href:"http://alias.sh/"},{default:s(()=>[...e[0]||(e[0]=[t("alias.sh",-1)])]),_:1}),e[4]||(e[4]=t("和",-1)),o(a,{href:"http://www.commandlinefu.com/commands/browse"},{default:s(()=>[...e[1]||(e[1]=[t("commandlinefu.com",-1)])]),_:1}),e[5]||(e[5]=t("我早已在我的帖子",-1)),o(a,{href:"http://xmodulo.com/useful-online-tools-linux.html"},{default:s(()=>[...e[2]||(e[2]=[t("best online tools for Linux",-1)])]),_:1}),e[6]||(e[6]=t(" 里面介绍过。你可以去看看，如果你愿意，也可以分享下你的。也欢迎你在这里评论，分享一下你的智慧。",-1))]),e[21]||(e[21]=r("p",null,"做为奖励，这里有我提到的全部别名和函数的纯文本版本，随时可以复制粘贴到你的.bashrc。（如果你已经一行一行的复制到这里了，哈哈，你发现你又浪费了生命的几秒钟~）",-1)),e[22]||(e[22]=r("pre",null,[r("code",null,`#Productivity
alias ls="ls --color=auto"
alias ll="ls --color -al"
alias grep='grep --color=auto'
mcd() { mkdir -p "$1"; cd "$1";}
cls() { cd "$1"; ls;}
backup() { cp "$1"{,.bak};}
md5check() { md5sum "$1" | grep "$2";}
alias makescript="fc -rnl | head -1 >"
alias genpasswd="strings /dev/urandom | grep -o '[[:alnum:]]' | head -n 30 | tr -d '\\n'; echo"
alias c="clear"
alias histg="history | grep"
alias ..='cd ..'
alias ...='cd ../..'
extract() {
    if [ -f $1 ] ; then
      case $1 in
        *.tar.bz2)   tar xjf $1     ;;
        *.tar.gz)    tar xzf $1     ;;
        *.bz2)       bunzip2 $1     ;;
        *.rar)       unrar e $1     ;;
        *.gz)        gunzip $1      ;;
        *.tar)       tar xf $1      ;;
        *.tbz2)      tar xjf $1     ;;
        *.tgz)       tar xzf $1     ;;
        *.zip)       unzip $1       ;;
        *.Z)         uncompress $1  ;;
        *.7z)        7z x $1        ;;
        *)     echo "'$1' cannot be extracted via extract()" ;;
         esac
     else
         echo "'$1' is not a valid file"
     fi
}
  
#System info
alias cmount="mount | column -t"
alias tree="ls -R | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\\/]*\\//--/g' -e 's/^/   /' -e 's/-/|/'"
sbs(){ du -b --max-depth 1 | sort -nr | perl -pe 's{([0-9]+)}{sprintf "%.1f%s", $1>=2**30? ($1/2**30, "G"): $1>=2**20? ($1/2**20, "M"): $1>=2**10? ($1/2**10, "K"): ($1, "")}e';}
alias intercept="sudo strace -ff -e trace=write -e write=1,2 -p"
alias meminfo='free -m -l -t'
alias ps?="ps aux | grep"
alias volume="amixer get Master | sed '1,4 d' | cut -d [ -f 2 | cut -d ] -f 1"
  
#Network
alias websiteget="wget --random-wait -r -p -e robots=off -U mozilla"
alias listen="lsof -P -i -n"
alias port='netstat -tulanp'
gmail() { curl -u "$1" --silent "https://mail.google.com/mail/feed/atom" | sed -e 's/<\\/fullcount.*/\\n/' | sed -e 's/.*fullcount>//'}
alias ipinfo="curl ifconfig.me && curl ifconfig.me/host"
getlocation() { lynx -dump http://www.ip-adress.com/ip_tracer/?QRY=$1|grep address|egrep 'city|state|country'|awk '{print $3,$4,$5,$6,$7,$8}'|sed 's\\ip address flag \\\\'|sed 's\\My\\\\';}
  
#Funny
kernelgraph() { lsmod | perl -e 'print "digraph \\"lsmod\\" {";<>;while(<>){@_=split/\\s+/; print "\\"$_[0]\\" -> \\"$_\\"\\n" for split/,/,$_[3]}print "}"' | dot -Tpng | display -;}
alias busy="cat /dev/urandom | hexdump -C | grep \\"ca fe\\""
`)],-1)),e[23]||(e[23]=r("hr",null,null,-1)),r("p",null,[e[8]||(e[8]=t("via: ",-1)),o(a,{href:"http://xmodulo.com/useful-bash-aliases-functions.html"},{default:s(()=>[...e[7]||(e[7]=[t("http://xmodulo.com/useful-bash-aliases-functions.html",-1)])]),_:1})]),r("p",null,[e[12]||(e[12]=t("作者：",-1)),o(a,{href:"http://xmodulo.com/author/adrien"},{default:s(()=>[...e[9]||(e[9]=[t("Adrien Brochard",-1)])]),_:1}),e[13]||(e[13]=t(" 译者：",-1)),o(a,{href:"https://github.com/luoyutiantang"},{default:s(()=>[...e[10]||(e[10]=[t("luoyutiantang",-1)])]),_:1}),e[14]||(e[14]=t(" 校对：",-1)),o(a,{href:"https://github.com/wxy"},{default:s(()=>[...e[11]||(e[11]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[17]||(e[17]=t("本文由 ",-1)),o(a,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[15]||(e[15]=[t("LCTT",-1)])]),_:1}),e[18]||(e[18]=t(" 原创翻译，",-1)),o(a,{href:"http://linux.cn/"},{default:s(()=>[...e[16]||(e[16]=[t("Linux中国",-1)])]),_:1}),e[19]||(e[19]=t(" 荣誉推出",-1))])])}const k=p(u,[["render",c]]);export{x as __pageData,k as default};
