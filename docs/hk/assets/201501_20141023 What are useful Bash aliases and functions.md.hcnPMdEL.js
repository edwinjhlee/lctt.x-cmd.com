import{_ as p,a0 as n,w as l,s as i,ao as d,I as r,x as t,a1 as o,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"一大波有用的 bash 別名和函數 | LCTT x X-CMD","titleTemplate":false,"description":"一大波有用的 bash 別名和函數 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一大波有用的 bash 別名和函數 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一大波有用的 bash 別名和函數 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141023 What are useful Bash aliases and functions","title":"一大波有用的 bash 別名和函數","tag":"201501","desc":""},"relativePath":"201501/20141023 What are useful Bash aliases and functions.md","filePath":"[post].md"}'),u={name:"201501/20141023 What are useful Bash aliases and functions.md"};function c(m,e,f,g,$,h){const a=n("Link");return l(),i("div",null,[e[20]||(e[20]=d(`<h1 id="一大波有用的-bash-別名和函數" tabindex="-1">一大波有用的 bash 別名和函數 <a class="header-anchor" href="#一大波有用的-bash-別名和函數" aria-label="Permalink to “一大波有用的 bash 別名和函數”">​</a></h1><p>作為一個命令列探索者，你或許發現你自己一遍又一遍重複同樣的命令。如果你總是用ssh進入到同一台電腦，如果你總是將一連串命令連接起來，如果你總是用同樣的參數運行一個程序，你也許希望在這種不斷的重複中為你的生命節約下幾秒鐘。</p><p>解決方案是使用一個別名（alias）。正如你可能知道的，別名用一種讓你的shell記住一個特定的命令並且給它一個新的名字的方式。不管怎麼樣，別名有一些限制，它只是shell命令的快捷方式，不能傳遞或者控制其中的參數。所以作為補充，bash 也允許你創建你自己的函數，這可能更長一些和複雜一點，它允許任意數量的參數。</p><p>當然，當你有美食時，比如某種湯，你要分享它給大家。我這裏有一個列表，列出了一些最有用bash別名和函數的。注意“最有用的”只是個説法，別名的是否有用要看你是否每天都需要在 shell 裏面用它。</p><p>在你開始你的別名體驗之旅前，這裏有一個便於使用的小技巧：如果你的別名和原本的命令名字相同，你可以用如下技巧來訪問原本的命令（LCTT 譯註：你也可以直接原本命令的完整路徑來訪問它。）</p><pre><code>\\command 
</code></pre><p>例如，如果有一個替換了ls命令的別名 ls。如果你想使用原本的ls命令而不是別名，通過調用它:</p><pre><code>\\ls 
</code></pre><h3 id="提升生產力" tabindex="-1">提升生產力 <a class="header-anchor" href="#提升生產力" aria-label="Permalink to “提升生產力”">​</a></h3><p>這些別名真的很簡單並且真的很短，但他們大多數是為了給你的生命節省幾秒鐘，最終也許為你這一輩子節省出來幾年，也許呢。</p><pre><code>alias ls=&quot;ls --color=auto&quot;
</code></pre><p>簡單但非常重要。使ls命令帶着彩色輸出。</p><pre><code>alias ll=&quot;ls --color -al&quot;
</code></pre><p>以彩色的列表方式列出目錄裏面的全部文件。</p><pre><code>alias grep=&#39;grep --color=auto&#39;
</code></pre><p>類似，只是在grep裏輸出帶上顏色。</p><pre><code>mcd() { mkdir -p &quot;$1&quot;; cd &quot;$1&quot;;} 
</code></pre><p>我的最愛之一。創建一個目錄並進入該目錄裏： mcd [目錄名]。</p><pre><code>cls() { cd &quot;$1&quot;; ls;}
</code></pre><p>類似上一個函數，進入一個目錄並列出它的的內容：cls[目錄名]。</p><pre><code>backup() { cp &quot;$1&quot;{,.bak};}
</code></pre><p>簡單的給文件創建一個備份: backup [文件] 將會在同一個目錄下創建 [文件].bak。</p><pre><code>md5check() { md5sum &quot;$1&quot; | grep &quot;$2&quot;;}
</code></pre><p>因為我討厭通過手工比較文件的md5校驗值，這個函數會計算它並進行比較：md5check[文件][校驗值]。</p><p><img src="https://farm6.staticflickr.com/5616/15412389280_8be57841ae_o.jpg" alt=""></p><pre><code>alias makescript=&quot;fc -rnl | head -1 &gt;&quot; 
</code></pre><p>很容易用你上一個運行的命令創建一個腳本：makescript [腳本名字.sh]</p><pre><code>alias genpasswd=&quot;strings /dev/urandom | grep -o &#39;[[:alnum:]]&#39; | head -n 30 | tr -d &#39;\\n&#39;; echo&quot; 
</code></pre><p>只是瞬間產生一個強壯的密碼。</p><p><img src="https://farm4.staticflickr.com/3955/15574321206_dd365f0f0e.jpg" alt=""></p><pre><code>alias c=&quot;clear&quot;
</code></pre><p>清除你終端屏幕不能更簡單了吧？</p><pre><code>alias histg=&quot;history | grep&quot;
</code></pre><p>快速搜索你的命令輸入歷史：histg [關鍵字]</p><pre><code>alias ..=&#39;cd ..&#39;
</code></pre><p>回到上層目錄還需要輸入 cd 嗎？</p><pre><code>alias ...=&#39;cd ../..&#39;
</code></pre><p>自然，去到上兩層目錄。</p><pre><code>extract() { 
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
</code></pre><p>很長，但是也是最有用的。解壓任何的文檔類型：extract: [壓縮文件]</p><h3 id="系統信息" tabindex="-1">系統信息 <a class="header-anchor" href="#系統信息" aria-label="Permalink to “系統信息”">​</a></h3><p>想盡快地知道關於你的系統一切信息？</p><pre><code>alias cmount=&quot;mount | column -t&quot;
</code></pre><p>按列格式化輸出mount信息。</p><p><img src="https://farm6.staticflickr.com/5603/15598830622_587b77a363_z.jpg" alt=""></p><pre><code>alias tree=&quot;ls -R | grep &quot;:$&quot; | sed -e &#39;s/:$//&#39; -e &#39;s/[^-][^\\/]*\\//--/g&#39; -e &#39;s/^/   /&#39; -e &#39;s/-/|/&#39;&quot; 
</code></pre><p>以樹形結構遞歸地顯示目錄結構。</p><pre><code>sbs() { du -b --max-depth 1 | sort -nr | perl -pe &#39;s{([0-9]+)}{sprintf &quot;%.1f%s&quot;, $1&gt;=2**30? ($1/2**30, &quot;G&quot;): $1&gt;=2**20? ($1/2**20, &quot;M&quot;): $1&gt;=2**10? ($1/2**10, &quot;K&quot;): ($1, &quot;&quot;)}e&#39;;} 
</code></pre><p>安裝文件在磁盤存儲的大小排序，顯示當前目錄的文件列表。</p><pre><code>alias intercept=&quot;sudo strace -ff -e trace=write -e write=1,2 -p&quot; 
</code></pre><p>接管某個進程的標準輸出和標準錯誤。注意你需要安裝了 strace。</p><pre><code>alias meminfo=&#39;free -m -l -t&#39;
</code></pre><p>查看你還有剩下多少內存。</p><p><img src="https://farm4.staticflickr.com/3955/15411891448_0b9d6450bd_z.jpg" alt=""></p><pre><code>alias ps? = &quot;ps aux | grep&quot;
</code></pre><p>可以很容易地找到某個進程的PID：ps? [名字]。</p><pre><code>alias volume=&quot;amixer get Master | sed &#39;1,4 d&#39; | cut -d [ -f 2 | cut -d ] -f 1&quot;
</code></pre><p>顯示當前音量設置。</p><p><img src="https://farm4.staticflickr.com/3939/15597995445_99ea7ffcd5_o.jpg" alt=""></p><h3 id="網絡" tabindex="-1">網絡 <a class="header-anchor" href="#網絡" aria-label="Permalink to “網絡”">​</a></h3><p>對於所有用在互聯網和本地網絡的命令，也有一些神奇的別名給它們。</p><pre><code>alias websiteget=&quot;wget --random-wait -r -p -e robots=off -U mozilla&quot;
</code></pre><p>下載整個網站：websiteget [URL]。</p><pre><code>alias listen=&quot;lsof -P -i -n&quot; 
</code></pre><p>顯示出哪個應用程序連接到網絡。</p><p><img src="https://farm4.staticflickr.com/3943/15598830552_c7e5eaaa0d_z.jpg" alt=""></p><pre><code>alias port=&#39;netstat -tulanp&#39;
</code></pre><p>顯示出活動的端口。</p><pre><code>gmail() { curl -u &quot;$1&quot; --silent &quot;https://mail.google.com/mail/feed/atom&quot; | sed -e &#39;s/&lt;\\/fullcount.*/\\n/&#39; | sed -e &#39;s/.*fullcount&gt;//&#39;}
</code></pre><p>大概的顯示你的谷歌郵件裏未讀郵件的數量：gmail [用户名]</p><pre><code>alias ipinfo=&quot;curl ifconfig.me &amp;&amp; curl ifconfig.me/host&quot;
</code></pre><p>獲得你的公網IP地址和主機名。</p><pre><code>getlocation() { lynx -dump http://www.ip-adress.com/ip_tracer/?QRY=$1|grep address|egrep &#39;city|state|country&#39;|awk &#39;{print $3,$4,$5,$6,$7,$8}&#39;|sed &#39;s\\ip address flag \\\\&#39;|sed &#39;s\\My\\\\&#39;;} 
</code></pre><p>返回你的當前IP地址的地理位置。</p><h3 id="也許無用" tabindex="-1">也許無用 <a class="header-anchor" href="#也許無用" aria-label="Permalink to “也許無用”">​</a></h3><p>所以呢，如果一些別名並不是全都具有使用價值？它們可能仍然有趣。</p><pre><code>kernelgraph() { lsmod | perl -e &#39;print &quot;digraph \\&quot;lsmod\\&quot; {&quot;;&lt;&gt;;while(&lt;&gt;){@_=split/\\s+/; print &quot;\\&quot;$_[0]\\&quot; -&gt; \\&quot;$_\\&quot;\\n&quot; for split/,/,$_[3]}print &quot;}&quot;&#39; | dot -Tpng | display -;}
</code></pre><p>繪製內核模組依賴曲線圖。需要可以查看圖片。</p><pre><code>alias busy=&quot;cat /dev/urandom | hexdump -C | grep &#39;ca fe&#39;&quot; 
</code></pre><p>在那些非技術人員的眼裏你看起來是總是那麼忙和神秘。</p><p><img src="https://farm6.staticflickr.com/5599/15574321326_ab3fbc1ef9_z.jpg" alt=""></p>`,81)),r("p",null,[e[3]||(e[3]=t("最後，這些別名和函數的很大一部分來自於我個人的.bashrc。而那些令人點讚的網站 ",-1)),o(a,{href:"http://alias.sh/"},{default:s(()=>[...e[0]||(e[0]=[t("alias.sh",-1)])]),_:1}),e[4]||(e[4]=t("和",-1)),o(a,{href:"http://www.commandlinefu.com/commands/browse"},{default:s(()=>[...e[1]||(e[1]=[t("commandlinefu.com",-1)])]),_:1}),e[5]||(e[5]=t("我早已在我的帖子",-1)),o(a,{href:"http://xmodulo.com/useful-online-tools-linux.html"},{default:s(()=>[...e[2]||(e[2]=[t("best online tools for Linux",-1)])]),_:1}),e[6]||(e[6]=t(" 裏面介紹過。你可以去看看，如果你願意，也可以分享下你的。也歡迎你在這裏評論，分享一下你的智慧。",-1))]),e[21]||(e[21]=r("p",null,"做為獎勵，這裏有我提到的全部別名和函數的純文本版本，隨時可以複製粘貼到你的.bashrc。（如果你已經一行一行的複製到這裏了，哈哈，你發現你又浪費了生命的幾秒鐘~）",-1)),e[22]||(e[22]=r("pre",null,[r("code",null,`#Productivity
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
`)],-1)),e[23]||(e[23]=r("hr",null,null,-1)),r("p",null,[e[8]||(e[8]=t("via: ",-1)),o(a,{href:"http://xmodulo.com/useful-bash-aliases-functions.html"},{default:s(()=>[...e[7]||(e[7]=[t("http://xmodulo.com/useful-bash-aliases-functions.html",-1)])]),_:1})]),r("p",null,[e[12]||(e[12]=t("作者：",-1)),o(a,{href:"http://xmodulo.com/author/adrien"},{default:s(()=>[...e[9]||(e[9]=[t("Adrien Brochard",-1)])]),_:1}),e[13]||(e[13]=t(" 譯者：",-1)),o(a,{href:"https://github.com/luoyutiantang"},{default:s(()=>[...e[10]||(e[10]=[t("luoyutiantang",-1)])]),_:1}),e[14]||(e[14]=t(" 校對：",-1)),o(a,{href:"https://github.com/wxy"},{default:s(()=>[...e[11]||(e[11]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[17]||(e[17]=t("本文由 ",-1)),o(a,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[15]||(e[15]=[t("LCTT",-1)])]),_:1}),e[18]||(e[18]=t(" 原創翻譯，",-1)),o(a,{href:"http://linux.cn/"},{default:s(()=>[...e[16]||(e[16]=[t("Linux中國",-1)])]),_:1}),e[19]||(e[19]=t(" 榮譽推出",-1))])])}const k=p(u,[["render",c]]);export{x as __pageData,k as default};
