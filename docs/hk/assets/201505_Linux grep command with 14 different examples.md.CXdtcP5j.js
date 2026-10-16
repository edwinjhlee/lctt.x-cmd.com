import{_ as i,a0 as c,w as s,s as l,ao as d,I as r,x as t,a1 as o,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"14 個 grep 命令的例子 | LCTT x X-CMD","titleTemplate":false,"description":"14 個 grep 命令的例子 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"14 個 grep 命令的例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"14 個 grep 命令的例子 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/Linux grep command with 14 different examples","title":"14 個 grep 命令的例子","tag":"201505","desc":""},"relativePath":"201505/Linux grep command with 14 different examples.md","filePath":"[post].md"}'),u={name:"201505/Linux grep command with 14 different examples.md"};function a(x,e,h,w,g,m){const p=c("Link");return s(),l("div",null,[e[13]||(e[13]=d(`<h1 id="_14-個-grep-命令的例子" tabindex="-1">14 個 grep 命令的例子 <a class="header-anchor" href="#_14-個-grep-命令的例子" aria-label="Permalink to “14 個 grep 命令的例子”">​</a></h1><p>###概述：###</p><p>所有的類linux系統都會提供一個名為<strong>grep(global regular expression print，全局正則表達式輸出)</strong>的搜索工具。grep命令在對一個或多個文件的內容進行基於模式的搜索的情況下是非常有用的。模式可以是單個字符、多個字符、單個單詞、或者是一個句子。</p><p>當命令匹配到執行命令時指定的模式時，grep會將包含模式的一行輸出，但是並不對原文件內容進行修改。</p><p>在本文中，我們將會討論到14個grep命令的例子。</p><p>###例1 在文件中查找模式（單詞）###</p><p>在/etc/passwd文件中查找單詞“linuxtechi”</p><pre><code>root@Linux-world:~# grep linuxtechi /etc/passwd
linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash
root@Linux-world:~#
</code></pre><p>###例2 在多個文件中查找模式。###</p><pre><code>root@Linux-world:~# grep linuxtechi /etc/passwd /etc/shadow /etc/gshadow
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
</code></pre><p>###例3 使用-l參數列出包含指定模式的文件的文件名。###</p><pre><code>root@Linux-world:~# grep -l linuxtechi /etc/passwd /etc/shadow /etc/fstab /etc/mtab
/etc/passwd
/etc/shadow
root@Linux-world:~#
</code></pre><p>###例4 使用-n參數，在文件中查找指定模式並顯示匹配行的行號###</p><pre><code>root@Linux-world:~# grep -n linuxtechi /etc/passwd
39:linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash
root@Linux-world:~#
</code></pre><p>root@Linux-world:~# grep -n root /etc/passwd /etc/shadow</p><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-n-root.jpg" alt=""></p><p>###例5 使用-v參數輸出不包含指定模式的行###</p><p>輸出/etc/passwd文件中所有不含單詞“linuxtechi”的行</p><pre><code>root@Linux-world:~# grep -v linuxtechi /etc/passwd
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-v-option.jpg" alt=""></p><p>###例6 使用 ^ 符號輸出所有以某指定模式開頭的行###</p><p>Bash腳本將 ^ 符號視作特殊字符，用於指定一行或者一個單詞的開始。例如輸出/etc/passes文件中所有以“root”開頭的行</p><pre><code>root@Linux-world:~# grep ^root /etc/passwd
root:x:0:0:root:/root:/bin/bash
root@Linux-world:~#
</code></pre><p>###例7 使用 $ 符號輸出所有以指定模式結尾的行。###</p><p>輸出/etc/passwd文件中所有以“bash”結尾的行。</p><pre><code>root@Linux-world:~# grep bash$ /etc/passwd
root:x:0:0:root:/root:/bin/bash
linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash
root@Linux-world:~#
</code></pre><p>Bash腳本將美元($)符號視作特殊字符，用於指定一行或者一個單詞的結尾。</p><p>###例8 使用 -r 參數遞歸地查找特定模式###</p><pre><code>root@Linux-world:~# grep -r linuxtechi /etc/
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
</code></pre><p>上面的命令將會遞歸的在/etc目錄中查找“linuxtechi”單詞</p><p>###例9 使用 grep 查找文件中所有的空行</p><pre><code>root@Linux-world:~# grep ^$ /etc/shadow
root@Linux-world:~#
</code></pre><p>由於/etc/shadow文件中沒有空行，所以沒有任何輸出</p><p>###例10 使用 -i 參數查找模式###</p><p>grep命令的-i參數在查找時忽略字符的大小寫。</p><p>我們來看一個例子，在paswd文件中查找“LinuxTechi”單詞。</p><pre><code>nextstep4it@localhost:~$ grep -i LinuxTechi /etc/passwd
linuxtechi:x:1001:1001::/home/linuxtechi:/bin/bash
nextstep4it@localhost:~$
</code></pre><p>###例11 使用 -e 參數查找多個模式###</p><p>例如，我想在一條grep命令中查找‘linuxtechi’和‘root’單詞，使用-e參數，我們可以查找多個模式。</p><pre><code>root@Linux-world:~# grep -e &quot;linuxtechi&quot; -e &quot;root&quot; /etc/passwd
root:x:0:0:root:/root:/bin/bash
linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash
root@Linux-world:~#
</code></pre><p>###例12 使用 -f 用文件指定待查找的模式###</p><p>首先，在當前目錄中創建一個搜索模式文件“grep_pattern”，我想文件中輸入的如下內容。</p><pre><code>root@Linux-world:~# cat grep_pattern
^linuxtechi
root
false$
root@Linux-world:~#
</code></pre><p>現在，試試使用grep_pattern文件進行搜索</p><pre><code>root@Linux-world:~# grep -f grep_pattern /etc/passwd
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-f-option.jpg" alt=""></p><p>###例13 使用 -c 參數計算模式匹配到的數量###</p><p>繼續上面例子，我們在grep命令中使用-c命令計算匹配指定模式的數量</p><pre><code>root@Linux-world:~# grep -c -f grep_pattern /etc/passwd
22
root@Linux-world:~#
</code></pre><p>###例14 輸出匹配指定模式行的前或者後面N行###</p><p>a)使用-B參數輸出匹配行的前4行</p><pre><code>root@Linux-world:~# grep -B 4 &quot;games&quot; /etc/passwd
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-B-option.jpg" alt=""></p><p>b)使用-A參數輸出匹配行的後4行</p><pre><code>root@Linux-world:~# grep -A 4 &quot;games&quot; /etc/passwd
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-A-option.jpg" alt=""></p><p>c)使用-C參數輸出匹配行的前後各4行</p><pre><code>root@Linux-world:~# grep -C 4 &quot;games&quot; /etc/passwd
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/05/grep-C-option.jpg" alt=""></p><hr>`,60)),r("p",null,[e[1]||(e[1]=t("via: ",-1)),o(p,{href:"http://www.linuxtechi.com/linux-grep-command-with-14-different-examples/"},{default:n(()=>[...e[0]||(e[0]=[t("http://www.linuxtechi.com/linux-grep-command-with-14-different-examples/",-1)])]),_:1})]),r("p",null,[e[5]||(e[5]=t("作者：",-1)),o(p,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:n(()=>[...e[2]||(e[2]=[t("Pradeep Kumar",-1)])]),_:1}),e[6]||(e[6]=t(" 譯者：",-1)),o(p,{href:"https://github.com/cvsher"},{default:n(()=>[...e[3]||(e[3]=[t("cvsher",-1)])]),_:1}),e[7]||(e[7]=t(" 校對：",-1)),o(p,{href:"https://github.com/wxy"},{default:n(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[10]||(e[10]=t("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原創翻譯，",-1)),o(p,{href:"https://linux.cn/"},{default:n(()=>[...e[9]||(e[9]=[t("Linux中國",-1)])]),_:1}),e[12]||(e[12]=t(" 榮譽推出",-1))])])}const T=i(u,[["render",a]]);export{b as __pageData,T as default};
