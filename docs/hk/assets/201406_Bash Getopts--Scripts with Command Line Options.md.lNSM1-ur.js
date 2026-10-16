import{_ as i,a0 as p,w as u,s as r,ao as l,I as e,x as o,a1 as s,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const c=JSON.parse('{"title":"Bash Getopts - 讓你的腳本支持命令列參數 | LCTT x X-CMD","titleTemplate":false,"description":"Bash Getopts - 讓你的腳本支持命令列參數 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Bash Getopts - 讓你的腳本支持命令列參數 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Bash Getopts - 讓你的腳本支持命令列參數 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/Bash Getopts--Scripts with Command Line Options","title":"Bash Getopts - 讓你的腳本支持命令列參數","tag":"201406","desc":""},"relativePath":"201406/Bash Getopts--Scripts with Command Line Options.md","filePath":"[post].md"}'),h={name:"201406/Bash Getopts--Scripts with Command Line Options.md"};function d($,t,q,m,O,g){const n=p("Link");return u(),r("div",null,[t[12]||(t[12]=l(`<h1 id="bash-getopts-讓你的腳本支持命令列參數" tabindex="-1">Bash Getopts - 讓你的腳本支持命令列參數 <a class="header-anchor" href="#bash-getopts-讓你的腳本支持命令列參數" aria-label="Permalink to “Bash Getopts - 讓你的腳本支持命令列參數”">​</a></h1><p>以前我總想知道如何為我的Bash腳本創建命令列參數。經過搜索，我發現了2個函數可以處理這個問題，<strong>getopt</strong> 函數和 <strong>getopts</strong> 函數。我無意爭論哪一個函數更好的。<strong>getopts</strong> 是一個shell內建命令，而且似乎比 <strong>getopt</strong> 更容易實現這個功能，所以在這篇文章裏我準備講講getopts。</p><h3 id="bash-getopts" tabindex="-1">bash getopts <a class="header-anchor" href="#bash-getopts" aria-label="Permalink to “bash getopts”">​</a></h3><p>開始的時候，我只試着處理傳遞給腳本的命令列參數。最後，我添加了另外一些有用的功能函數，使得這個腳本可以成為其他任何交互式腳本處理命令列的開始模板。我還添加了一個純文本格式的幫助函數，讓腳本更加容易閲讀。</p><p>與其來一長段文字解釋 <strong>getopts</strong> 在bash中是如何工作的，我認為不如直接來一個能工作的腳本更讓人覺得輕鬆一些。</p><pre><code>#!/bin/bash

######################################################################
#This is an example of using getopts in Bash. It also contains some
#other bits of code I find useful.
#Author: Linerd
#Website: http://tuxtweaks.com/
#Copyright 2014
#License: Creative Commons Attribution-ShareAlike 4.0
#http://creativecommons.org/licenses/by-sa/4.0/legalcode
######################################################################
    
#Set Script Name variable
SCRIPT=\`basename \${BASH_SOURCE[0]}\`

#Initialize variables to default values.
OPT_A=A
OPT_B=B
OPT_C=C
OPT_D=D

#Set fonts for Help.[譯註: 這裏tput用來更改終端文本屬性,比如加粗，高亮等]
NORM=\`tput sgr0\`
BOLD=\`tput bold\`
REV=\`tput smso\`

#Help function
function HELP {
  echo -e \\\\n&quot;Help documentation for \${BOLD}\${SCRIPT}.\${NORM}&quot;\\\\n
  echo -e &quot;\${REV}Basic usage:\${NORM} \${BOLD}$SCRIPT file.ext\${NORM}&quot;\\\\n
  echo &quot;Command line switches are optional. The following switches are recognized.&quot;
  echo &quot;\${REV}-a\${NORM}  --Sets the value for option \${BOLD}a\${NORM}. Default is \${BOLD}A\${NORM}.&quot;
  echo &quot;\${REV}-b\${NORM}  --Sets the value for option \${BOLD}b\${NORM}. Default is \${BOLD}B\${NORM}.&quot;
  echo &quot;\${REV}-c\${NORM}  --Sets the value for option \${BOLD}c\${NORM}. Default is \${BOLD}C\${NORM}.&quot;
  echo &quot;\${REV}-d\${NORM}  --Sets the value for option \${BOLD}d\${NORM}. Default is \${BOLD}D\${NORM}.&quot;
  echo -e &quot;\${REV}-h\${NORM}  --Displays this help message. No further functions are performed.&quot;\\\\n
  echo -e &quot;Example: \${BOLD}$SCRIPT -a foo -b man -c chu -d bar file.ext\${NORM}&quot;\\\\n
  exit 1
}

#Check the number of arguments. If none are passed, print help and exit.
NUMARGS=$#
echo -e \\\\n&quot;Number of arguments: $NUMARGS&quot;
if [ $NUMARGS -eq 0 ]; then
  HELP
fi

### Start getopts code ###

#Parse command line flags
#如果選項需要後跟參數，在選項後面加&quot;:&quot;
#注意&quot;-h&quot;選項後面沒有&quot;:&quot;，因為他不需要參數。選項字符串最開始的&quot;:&quot;是用來去掉來自getopts本身的報錯的，同時獲取不能識別的選項。（譯註：如果選項字符串不以&quot;:&quot;開頭，發生錯誤（非法的選項或者缺少參數）時，getopts會向錯誤輸出打印錯誤信息；如果以&quot;:&quot;開頭，則不會打印[在man中叫slient error reporting]，同時將出錯的選項賦給OPTARG變量）

while getopts :a:b:c:d:h FLAG; do
  case $FLAG in
    a)  #set option &quot;a&quot;
      OPT_A=$OPTARG
      echo &quot;-a used: $OPTARG&quot;
      echo &quot;OPT_A = $OPT_A&quot;
      ;;
    b)  #set option &quot;b&quot;
      OPT_B=$OPTARG
      echo &quot;-b used: $OPTARG&quot;
      echo &quot;OPT_B = $OPT_B&quot;
      ;;
    c)  #set option &quot;c&quot;
      OPT_C=$OPTARG
      echo &quot;-c used: $OPTARG&quot;
      echo &quot;OPT_C = $OPT_C&quot;
      ;;
    d)  #set option &quot;d&quot;
      OPT_D=$OPTARG
      echo &quot;-d used: $OPTARG&quot;
      echo &quot;OPT_D = $OPT_D&quot;
      ;;
    h)  #show help
      HELP
      ;;
    \\?) #unrecognized option - show help
      echo -e \\\\n&quot;Option -\${BOLD}$OPTARG\${NORM} not allowed.&quot;
      HELP
	  #在這裏如果你不想打印完整的幫助信息，只想顯示簡單的錯誤信息，去掉上面的兩行，同時使用下面的兩行。
      #echo -e &quot;Use \${BOLD}$SCRIPT -h\${NORM} to see the help documentation.&quot;\\\\n
      #exit 2
      ;;
  esac
done

shift $((OPTIND-1))  #This tells getopts to move on to the next argument.

### End getopts code ###


### Main loop to process files ###

#這裏你可以用你的腳本處理邏輯來替代。這個例子只是在終端中打印文件的文件名和後綴名。你可以把任意其他的文件處理任務放到這個while-do循環中。   

while [ $# -ne 0 ]; do
  FILE=$1
  TEMPFILE=\`basename $FILE\`
  #TEMPFILE=&quot;\${FILE##*/}&quot;  #另外一種獲取不帶後綴的文件名的方法。
  FILE_BASE=\`echo &quot;\${TEMPFILE%.*}&quot;\`  #file without extension
  FILE_EXT=&quot;\${TEMPFILE##*.}&quot;  #file extension


  echo -e \\\\n&quot;Input file is: $FILE&quot;
  echo &quot;File withouth extension is: $FILE_BASE&quot;
  echo -e &quot;File extension is: $FILE_EXT&quot;\\\\n
  shift  #Move on to next input file.
done

### End main loop ###

exit 0
</code></pre><p>將上面的代碼複製到你的文本編輯器裏，然後保存到你的可執行路徑下。我將這個腳本命名為 <strong>options</strong> 並保存到 <strong>/home/linerd/bin</strong> 路徑下。保存之後記得給你的腳本添加可執行權限。</p><pre><code>chmod +x ~/bin/options
</code></pre><p>現在腳本已經可以運行了。試試用 <strong>-h</strong> 參數來打印幫助信息吧。</p><pre><code>options -h
</code></pre><p>遇到不支持的選項，腳本同樣可以給出提示，並打印幫助信息。</p><pre><code>options -z
</code></pre><p>最後，getopts可以以任意的順序處理你給的命令列參數。唯一的限制是你要處理的文件必須放在所有參數的最後。</p><pre><code>options -d bar -c chu -b man -a foo example1.txt example2.txt
</code></pre>`,14)),e("p",null,[t[1]||(t[1]=o("現在你可以從這些例子裏看到如何通過命令列參數給腳本里的變量賦值。這個腳本里除了getopts還有很多其他的東西，但是我認為這些就足以成為一個新腳本的開頭模板了。如果你有興趣更深入地學習bash的getopts，你可以找找深埋在man page的“Builtins”這一節裏的文檔，也可以從 ",-1)),s(n,{href:"http://tuxtweaks.com/2014/05/bash-getopts/www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html"},{default:a(()=>[...t[0]||(t[0]=[o("Bash Reference Manual",-1)])]),_:1}),t[2]||(t[2]=o(" 找到信息。",-1))]),t[13]||(t[13]=e("h3",{id:"接下來呢",tabindex:"-1"},[o("接下來呢? "),e("a",{class:"header-anchor",href:"#接下來呢","aria-label":"Permalink to “接下來呢?”"},"​")],-1)),t[14]||(t[14]=e("p",null,"你會用getops來幹什麼呢？在評論裏告訴我吧。",-1)),t[15]||(t[15]=e("hr",null,null,-1)),e("p",null,[t[4]||(t[4]=o("via: ",-1)),s(n,{href:"http://tuxtweaks.com/2014/05/bash-getopts/"},{default:a(()=>[...t[3]||(t[3]=[o("http://tuxtweaks.com/2014/05/bash-getopts/",-1)])]),_:1})]),e("p",null,[t[6]||(t[6]=o("譯者： CNprober <travelwithheart@yeah.net, QQ619913541> 校對：",-1)),s(n,{href:"https://github.com/wxy"},{default:a(()=>[...t[5]||(t[5]=[o("wxy",-1)])]),_:1})]),e("p",null,[t[9]||(t[9]=o("本文由 ",-1)),s(n,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[7]||(t[7]=[o("LCTT",-1)])]),_:1}),t[10]||(t[10]=o(" 原創翻譯，",-1)),s(n,{href:"http://linux.cn/"},{default:a(()=>[...t[8]||(t[8]=[o("Linux中國",-1)])]),_:1}),t[11]||(t[11]=o(" 榮譽推出",-1))])])}const P=i(h,[["render",d]]);export{c as __pageData,P as default};
