import{_ as i,a0 as c,w as s,s as l,ao as d,I as r,x as t,a1 as o,A as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"14 个 grep 命令的例子 | LCTT x X-CMD","titleTemplate":false,"description":"14 个 grep 命令的例子 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"14 个 grep 命令的例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"14 个 grep 命令的例子 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/Linux grep command with 14 different examples","title":"14 个 grep 命令的例子","tag":"201505","desc":""},"relativePath":"201505/Linux grep command with 14 different examples.md","filePath":"[post].md"}'),u={name:"201505/Linux grep command with 14 different examples.md"};function a(x,e,h,w,g,m){const p=c("Link");return s(),l("div",null,[e[13]||(e[13]=d(`<h1 id="_14-个-grep-命令的例子" tabindex="-1">14 个 grep 命令的例子 <a class="header-anchor" href="#_14-个-grep-命令的例子" aria-label="Permalink to “14 个 grep 命令的例子”">​</a></h1><p>###概述：###</p><p>所有的类linux系统都会提供一个名为<strong>grep(global regular expression print，全局正则表达式输出)</strong>的搜索工具。grep命令在对一个或多个文件的内容进行基于模式的搜索的情况下是非常有用的。模式可以是单个字符、多个字符、单个单词、或者是一个句子。</p><p>当命令匹配到执行命令时指定的模式时，grep会将包含模式的一行输出，但是并不对原文件内容进行修改。</p><p>在本文中，我们将会讨论到14个grep命令的例子。</p><p>###例1 在文件中查找模式（单词）###</p><p>在/etc/passwd文件中查找单词“linuxtechi”</p><pre><code>root@Linux-world:~# grep linuxtechi /etc/passwd
linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash
root@Linux-world:~#
</code></pre><p>###例2 在多个文件中查找模式。###</p><pre><code>root@Linux-world:~# grep linuxtechi /etc/passwd /etc/shadow /etc/gshadow
/etc/passwd:linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash
/etc/shadow:linuxtechi:$6$DdgXjxlM$4flz4JRvefvKp0DG6re:16550:0:99999:7:::/etc/gshadow:adm:*::syslog,linuxtechi
/etc/gshadow:cdrom:*::linuxtechi
/etc/gshadow:sudo:*::linuxtechi
/etc/gshadow:dip:*::linuxtechi
/etc/gshadow:plugdev:*::linuxtechi
/etc/gshadow:lpadmin:!::linuxtechi
/etc/gshadow:linuxtechi:!::
/etc/gshadow:sambashare:!::linuxtechi
root@Linux-world:~#
</code></pre><p>###例3 使用-l参数列出包含指定模式的文件的文件名。###</p><pre><code>root@Linux-world:~# grep -l linuxtechi /etc/passwd /etc/shadow /etc/fstab /etc/mtab
/etc/passwd
/etc/shadow
root@Linux-world:~#
</code></pre><p>###例4 使用-n参数，在文件中查找指定模式并显示匹配行的行号###</p><pre><code>root@Linux-world:~# grep -n linuxtechi /etc/passwd
39:linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash
root@Linux-world:~#
</code></pre><p>root@Linux-world:~# grep -n root /etc/passwd /etc/shadow</p><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-n-root.jpg" alt=""></p><p>###例5 使用-v参数输出不包含指定模式的行###</p><p>输出/etc/passwd文件中所有不含单词“linuxtechi”的行</p><pre><code>root@Linux-world:~# grep -v linuxtechi /etc/passwd
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-v-option.jpg" alt=""></p><p>###例6 使用 ^ 符号输出所有以某指定模式开头的行###</p><p>Bash脚本将 ^ 符号视作特殊字符，用于指定一行或者一个单词的开始。例如输出/etc/passes文件中所有以“root”开头的行</p><pre><code>root@Linux-world:~# grep ^root /etc/passwd
root:x:0:0:root:/root:/bin/bash
root@Linux-world:~#
</code></pre><p>###例7 使用 $ 符号输出所有以指定模式结尾的行。###</p><p>输出/etc/passwd文件中所有以“bash”结尾的行。</p><pre><code>root@Linux-world:~# grep bash$ /etc/passwd
root:x:0:0:root:/root:/bin/bash
linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash
root@Linux-world:~#
</code></pre><p>Bash脚本将美元($)符号视作特殊字符，用于指定一行或者一个单词的结尾。</p><p>###例8 使用 -r 参数递归地查找特定模式###</p><pre><code>root@Linux-world:~# grep -r linuxtechi /etc/
/etc/subuid:linuxtechi:100000:65536
/etc/group:adm:x:4:syslog,linuxtechi
/etc/group:cdrom:x:24:linuxtechi
/etc/group:sudo:x:27:linuxtechi
/etc/group:dip:x:30:linuxtechi
/etc/group:plugdev:x:46:linuxtechi
/etc/group:lpadmin:x:115:linuxtechi
/etc/group:linuxtechi:x:1000:
/etc/group:sambashare:x:131:linuxtechi
/etc/passwd-:linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash
/etc/passwd:linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash
............................................................................
</code></pre><p>上面的命令将会递归的在/etc目录中查找“linuxtechi”单词</p><p>###例9 使用 grep 查找文件中所有的空行</p><pre><code>root@Linux-world:~# grep ^$ /etc/shadow
root@Linux-world:~#
</code></pre><p>由于/etc/shadow文件中没有空行，所以没有任何输出</p><p>###例10 使用 -i 参数查找模式###</p><p>grep命令的-i参数在查找时忽略字符的大小写。</p><p>我们来看一个例子，在paswd文件中查找“LinuxTechi”单词。</p><pre><code>nextstep4it@localhost:~$ grep -i LinuxTechi /etc/passwd
linuxtechi:x:1001:1001::/home/linuxtechi:/bin/bash
nextstep4it@localhost:~$
</code></pre><p>###例11 使用 -e 参数查找多个模式###</p><p>例如，我想在一条grep命令中查找‘linuxtechi’和‘root’单词，使用-e参数，我们可以查找多个模式。</p><pre><code>root@Linux-world:~# grep -e &quot;linuxtechi&quot; -e &quot;root&quot; /etc/passwd
root:x:0:0:root:/root:/bin/bash
linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash
root@Linux-world:~#
</code></pre><p>###例12 使用 -f 用文件指定待查找的模式###</p><p>首先，在当前目录中创建一个搜索模式文件“grep_pattern”，我想文件中输入的如下内容。</p><pre><code>root@Linux-world:~# cat grep_pattern
^linuxtechi
root
false$
root@Linux-world:~#
</code></pre><p>现在，试试使用grep_pattern文件进行搜索</p><pre><code>root@Linux-world:~# grep -f grep_pattern /etc/passwd
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-f-option.jpg" alt=""></p><p>###例13 使用 -c 参数计算模式匹配到的数量###</p><p>继续上面例子，我们在grep命令中使用-c命令计算匹配指定模式的数量</p><pre><code>root@Linux-world:~# grep -c -f grep_pattern /etc/passwd
22
root@Linux-world:~#
</code></pre><p>###例14 输出匹配指定模式行的前或者后面N行###</p><p>a)使用-B参数输出匹配行的前4行</p><pre><code>root@Linux-world:~# grep -B 4 &quot;games&quot; /etc/passwd
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-B-option.jpg" alt=""></p><p>b)使用-A参数输出匹配行的后4行</p><pre><code>root@Linux-world:~# grep -A 4 &quot;games&quot; /etc/passwd
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-A-option.jpg" alt=""></p><p>c)使用-C参数输出匹配行的前后各4行</p><pre><code>root@Linux-world:~# grep -C 4 &quot;games&quot; /etc/passwd
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-C-option.jpg" alt=""></p><hr>`,60)),r("p",null,[e[1]||(e[1]=t("via: ",-1)),o(p,{href:"http://www.linuxtechi.com/linux-grep-command-with-14-different-examples/"},{default:n(()=>[...e[0]||(e[0]=[t("http://www.linuxtechi.com/linux-grep-command-with-14-different-examples/",-1)])]),_:1})]),r("p",null,[e[5]||(e[5]=t("作者：",-1)),o(p,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:n(()=>[...e[2]||(e[2]=[t("Pradeep Kumar",-1)])]),_:1}),e[6]||(e[6]=t(" 译者：",-1)),o(p,{href:"https://github.com/cvsher"},{default:n(()=>[...e[3]||(e[3]=[t("cvsher",-1)])]),_:1}),e[7]||(e[7]=t(" 校对：",-1)),o(p,{href:"https://github.com/wxy"},{default:n(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[10]||(e[10]=t("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原创翻译，",-1)),o(p,{href:"https://linux.cn/"},{default:n(()=>[...e[9]||(e[9]=[t("Linux中国",-1)])]),_:1}),e[12]||(e[12]=t(" 荣誉推出",-1))])])}const T=i(u,[["render",a]]);export{b as __pageData,T as default};
