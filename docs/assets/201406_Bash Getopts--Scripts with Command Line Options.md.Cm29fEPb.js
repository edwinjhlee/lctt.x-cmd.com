import{_ as i,a0 as p,w as u,s as r,ao as l,I as e,x as o,a1 as s,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const c=JSON.parse('{"title":"Bash Getopts - 让你的脚本支持命令行参数 | LCTT x X-CMD","titleTemplate":false,"description":"Bash Getopts - 让你的脚本支持命令行参数 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Bash Getopts - 让你的脚本支持命令行参数 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Bash Getopts - 让你的脚本支持命令行参数 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/Bash Getopts--Scripts with Command Line Options","title":"Bash Getopts - 让你的脚本支持命令行参数","tag":"201406","desc":""},"relativePath":"201406/Bash Getopts--Scripts with Command Line Options.md","filePath":"[post].md"}'),h={name:"201406/Bash Getopts--Scripts with Command Line Options.md"};function d($,t,q,m,O,g){const n=p("Link");return u(),r("div",null,[t[12]||(t[12]=l(`<h1 id="bash-getopts-让你的脚本支持命令行参数" tabindex="-1">Bash Getopts - 让你的脚本支持命令行参数 <a class="header-anchor" href="#bash-getopts-让你的脚本支持命令行参数" aria-label="Permalink to “Bash Getopts - 让你的脚本支持命令行参数”">​</a></h1><p>以前我总想知道如何为我的Bash脚本创建命令行参数。经过搜索，我发现了2个函数可以处理这个问题，<strong>getopt</strong> 函数和 <strong>getopts</strong> 函数。我无意争论哪一个函数更好的。<strong>getopts</strong> 是一个shell内建命令，而且似乎比 <strong>getopt</strong> 更容易实现这个功能，所以在这篇文章里我准备讲讲getopts。</p><h3 id="bash-getopts" tabindex="-1">bash getopts <a class="header-anchor" href="#bash-getopts" aria-label="Permalink to “bash getopts”">​</a></h3><p>开始的时候，我只试着处理传递给脚本的命令行参数。最后，我添加了另外一些有用的功能函数，使得这个脚本可以成为其他任何交互式脚本处理命令行的开始模板。我还添加了一个纯文本格式的帮助函数，让脚本更加容易阅读。</p><p>与其来一长段文字解释 <strong>getopts</strong> 在bash中是如何工作的，我认为不如直接来一个能工作的脚本更让人觉得轻松一些。</p><pre><code>#!/bin/bash

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

#Set fonts for Help.[译注: 这里tput用来更改终端文本属性,比如加粗，高亮等]
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
#如果选项需要后跟参数，在选项后面加&quot;:&quot;
#注意&quot;-h&quot;选项后面没有&quot;:&quot;，因为他不需要参数。选项字符串最开始的&quot;:&quot;是用来去掉来自getopts本身的报错的，同时获取不能识别的选项。（译注：如果选项字符串不以&quot;:&quot;开头，发生错误（非法的选项或者缺少参数）时，getopts会向错误输出打印错误信息；如果以&quot;:&quot;开头，则不会打印[在man中叫slient error reporting]，同时将出错的选项赋给OPTARG变量）

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
	  #在这里如果你不想打印完整的帮助信息，只想显示简单的错误信息，去掉上面的两行，同时使用下面的两行。
      #echo -e &quot;Use \${BOLD}$SCRIPT -h\${NORM} to see the help documentation.&quot;\\\\n
      #exit 2
      ;;
  esac
done

shift $((OPTIND-1))  #This tells getopts to move on to the next argument.

### End getopts code ###


### Main loop to process files ###

#这里你可以用你的脚本处理逻辑来替代。这个例子只是在终端中打印文件的文件名和后缀名。你可以把任意其他的文件处理任务放到这个while-do循环中。   

while [ $# -ne 0 ]; do
  FILE=$1
  TEMPFILE=\`basename $FILE\`
  #TEMPFILE=&quot;\${FILE##*/}&quot;  #另外一种获取不带后缀的文件名的方法。
  FILE_BASE=\`echo &quot;\${TEMPFILE%.*}&quot;\`  #file without extension
  FILE_EXT=&quot;\${TEMPFILE##*.}&quot;  #file extension


  echo -e \\\\n&quot;Input file is: $FILE&quot;
  echo &quot;File withouth extension is: $FILE_BASE&quot;
  echo -e &quot;File extension is: $FILE_EXT&quot;\\\\n
  shift  #Move on to next input file.
done

### End main loop ###

exit 0
</code></pre><p>将上面的代码复制到你的文本编辑器里，然后保存到你的可执行路径下。我将这个脚本命名为 <strong>options</strong> 并保存到 <strong>/home/linerd/bin</strong> 路径下。保存之后记得给你的脚本添加可执行权限。</p><pre><code>chmod +x ~/bin/options
</code></pre><p>现在脚本已经可以运行了。试试用 <strong>-h</strong> 参数来打印帮助信息吧。</p><pre><code>options -h
</code></pre><p>遇到不支持的选项，脚本同样可以给出提示，并打印帮助信息。</p><pre><code>options -z
</code></pre><p>最后，getopts可以以任意的顺序处理你给的命令行参数。唯一的限制是你要处理的文件必须放在所有参数的最后。</p><pre><code>options -d bar -c chu -b man -a foo example1.txt example2.txt
</code></pre>`,14)),e("p",null,[t[1]||(t[1]=o("现在你可以从这些例子里看到如何通过命令行参数给脚本里的变量赋值。这个脚本里除了getopts还有很多其他的东西，但是我认为这些就足以成为一个新脚本的开头模板了。如果你有兴趣更深入地学习bash的getopts，你可以找找深埋在man page的“Builtins”这一节里的文档，也可以从 ",-1)),s(n,{href:"http://tuxtweaks.com/2014/05/bash-getopts/www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html"},{default:a(()=>[...t[0]||(t[0]=[o("Bash Reference Manual",-1)])]),_:1}),t[2]||(t[2]=o(" 找到信息。",-1))]),t[13]||(t[13]=e("h3",{id:"接下来呢",tabindex:"-1"},[o("接下来呢? "),e("a",{class:"header-anchor",href:"#接下来呢","aria-label":"Permalink to “接下来呢?”"},"​")],-1)),t[14]||(t[14]=e("p",null,"你会用getops来干什么呢？在评论里告诉我吧。",-1)),t[15]||(t[15]=e("hr",null,null,-1)),e("p",null,[t[4]||(t[4]=o("via: ",-1)),s(n,{href:"http://tuxtweaks.com/2014/05/bash-getopts/"},{default:a(()=>[...t[3]||(t[3]=[o("http://tuxtweaks.com/2014/05/bash-getopts/",-1)])]),_:1})]),e("p",null,[t[6]||(t[6]=o("译者： CNprober <travelwithheart@yeah.net, QQ619913541> 校对：",-1)),s(n,{href:"https://github.com/wxy"},{default:a(()=>[...t[5]||(t[5]=[o("wxy",-1)])]),_:1})]),e("p",null,[t[9]||(t[9]=o("本文由 ",-1)),s(n,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[7]||(t[7]=[o("LCTT",-1)])]),_:1}),t[10]||(t[10]=o(" 原创翻译，",-1)),s(n,{href:"http://linux.cn/"},{default:a(()=>[...t[8]||(t[8]=[o("Linux中国",-1)])]),_:1}),t[11]||(t[11]=o(" 荣誉推出",-1))])])}const P=i(h,[["render",d]]);export{c as __pageData,P as default};
