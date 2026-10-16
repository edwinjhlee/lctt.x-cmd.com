import{_ as p,a0 as n,w as l,s as i,ao as d,I as r,x as t,a1 as o,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"一大波有用的 bash 別名和函數 | LCTT x X-CMD","titleTemplate":false,"description":"一大波有用的 bash 別名和函數 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一大波有用的 bash 別名和函數 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一大波有用的 bash 別名和函數 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141023 What are useful Bash aliases and functions","title":"一大波有用的 bash 別名和函數","tag":"201501","desc":""},"relativePath":"201501/20141023 What are useful Bash aliases and functions.md","filePath":"[post].md"}'),u={name:"201501/20141023 What are useful Bash aliases and functions.md"};function c(m,e,f,g,$,h){const a=n("Link");return l(),i("div",null,[e[20]||(e[20]=d("",81)),r("p",null,[e[3]||(e[3]=t("最後，這些別名和函數的很大一部分來自於我個人的.bashrc。而那些令人點讚的網站 ",-1)),o(a,{href:"http://alias.sh/"},{default:s(()=>[...e[0]||(e[0]=[t("alias.sh",-1)])]),_:1}),e[4]||(e[4]=t("和",-1)),o(a,{href:"http://www.commandlinefu.com/commands/browse"},{default:s(()=>[...e[1]||(e[1]=[t("commandlinefu.com",-1)])]),_:1}),e[5]||(e[5]=t("我早已在我的帖子",-1)),o(a,{href:"http://xmodulo.com/useful-online-tools-linux.html"},{default:s(()=>[...e[2]||(e[2]=[t("best online tools for Linux",-1)])]),_:1}),e[6]||(e[6]=t(" 裏面介紹過。你可以去看看，如果你願意，也可以分享下你的。也歡迎你在這裏評論，分享一下你的智慧。",-1))]),e[21]||(e[21]=r("p",null,"做為獎勵，這裏有我提到的全部別名和函數的純文本版本，隨時可以複製粘貼到你的.bashrc。（如果你已經一行一行的複製到這裏了，哈哈，你發現你又浪費了生命的幾秒鐘~）",-1)),e[22]||(e[22]=r("pre",null,[r("code",null,`#Productivity
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
