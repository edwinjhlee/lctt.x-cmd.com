import{_ as o,a0 as a,w as s,s as d,ao as r,I as p,x as i,a1 as l,A as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"Linux：使用bash刪除目錄中的特定文件 | LCTT x X-CMD","titleTemplate":false,"description":"Linux：使用bash刪除目錄中的特定文件 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux：使用bash刪除目錄中的特定文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux：使用bash刪除目錄中的特定文件 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140607 Linux--Bash Delete All Files In Directory Except Few","title":"Linux：使用bash刪除目錄中的特定文件","tag":"201406","desc":""},"relativePath":"201406/20140607 Linux--Bash Delete All Files In Directory Except Few.md","filePath":"[post].md"}'),m={name:"201406/20140607 Linux--Bash Delete All Files In Directory Except Few.md"};function f(u,e,h,x,b,g){const n=a("Link");return s(),d("div",null,[e[19]||(e[19]=r(`<h1 id="linux-使用bash刪除目錄中的特定文件" tabindex="-1">Linux：使用bash刪除目錄中的特定文件 <a class="header-anchor" href="#linux-使用bash刪除目錄中的特定文件" aria-label="Permalink to “Linux：使用bash刪除目錄中的特定文件”">​</a></h1><p><img src="http://s0.cyberciti.org/images/category/old/terminal.png" alt=""></p><p>我是一名Linux新用户。現在我需要清理一個下載目錄中的文件，其實我就是想從～/Download/文件夾刪去除了以下格式的文件外所以其它文件：</p><ul><li>*.iso - 所有的iso格式的文件。</li><li>*.zip - 所有zip格式的文件。</li></ul><p>我如何在一個基於Linux，OS X 或者 Unix-like 系統上的bash shell中刪除特定的文件呢？</p><p>Bash shell 支持豐富的文件模式匹配符例如：</p><ul><li><ul><li>－ 匹配所有的文件。</li></ul></li><li>？ － 匹配文件名中的單個字母。</li><li>[...] － 匹配封閉括號中的任何一個字母。</li></ul><h3 id="策略-1-見識一下擴展的模式匹配符" tabindex="-1">策略 #1: 見識一下擴展的模式匹配符 <a class="header-anchor" href="#策略-1-見識一下擴展的模式匹配符" aria-label="Permalink to “策略 #1: 見識一下擴展的模式匹配符”">​</a></h3><p>這裏你需要用系統內置的shopt命令來開啓shell中的extglob選項，然後你就可以使用擴展的模式符了，這些模式匹配符如下：</p><ol><li>?(模式列表) － 匹配零次或一次給定的模式。</li><li>*(模式列表) － 匹配零次或多次給定的模式。</li><li>+(模式列表) － 至少匹配一次給定的模式。</li><li>@(模式列表) － 匹配一次給定的模式。</li><li>!(模式列表) － 不匹配給定模式。</li></ol><p>一個模式列表就是一個或多個用 | 分開的模式（文件名）。</p><p>首先要打開extgolb選項：</p><pre><code>shopt -s extglob
</code></pre><h4 id="在bash中刪掉除-zip和-iso文件以外的所有文件" tabindex="-1">在Bash中刪掉除<em>.zip和</em>.iso文件以外的所有文件 <a class="header-anchor" href="#在bash中刪掉除-zip和-iso文件以外的所有文件" aria-label="Permalink to “在Bash中刪掉除.zip和.iso文件以外的所有文件”">​</a></h4><p>rm 命令的語法格式為：</p><pre><code>## 僅保留 file1 文件 ##
rm  !(file1)
 
## 僅保留 file1 和 file2 文件## 
rm  !(file1|file2)
 
## 僅保留 zip 文件 ##
rm  !(*.zip)
 
## 僅保留 zip 和 iso 文件 ##
rm  !(*.zip|*.iso)

## 你也可以使用完整的目錄 ##
rm /Users/vivek/!(*.zip|*.iso|*.mp3)
 
## 也可以傳遞參數 ##
rm [選項]  !(*.zip|*.iso)
rm -v  !(*.zip|*.iso)
rm -f  !(*.zip|*.iso)
rm -v -i  !(*.php)
</code></pre><p>最後，關閉 extglob 選項方法如下：</p><pre><code>shopt -u extglob
</code></pre><h3 id="策略-2-使用bash的-globignore-變量刪除指定文件以外的所有文件" tabindex="-1">策略 #2: 使用bash的 GLOBIGNORE 變量刪除指定文件以外的所有文件 <a class="header-anchor" href="#策略-2-使用bash的-globignore-變量刪除指定文件以外的所有文件" aria-label="Permalink to “策略 #2: 使用bash的 GLOBIGNORE 變量刪除指定文件以外的所有文件”">​</a></h3>`,19)),p("p",null,[e[1]||(e[1]=i("摘自 ",-1)),l(n,{href:"http://www.manpager.com/linux/man1/bash.1.html"},{default:t(()=>[...e[0]||(e[0]=[i("bash(1)",-1)])]),_:1}),e[2]||(e[2]=i(" 手冊頁:",-1))]),e[20]||(e[20]=r(`<blockquote><p>這是一個用冒號分開的模式列表，通過路徑展開方式定義了要忽略的文件集合。如果一個匹配到路徑展開模式的文件也匹配GLOBIGNORE中的模式，那麼它會從匹配列表中移除。</p></blockquote><p>要刪除所有文件只保留 zip 和 iso 文件，應如下設置 GLOBIGNORE：</p><pre><code>## 只在 BASH 中可行 ##
cd ~/Downloads/
GLOBIGNORE=*.zip:*.iso
rm -v *
unset GLOBIGNORE
</code></pre><h3 id="策略-3-用-find-命令刪除所有其它文件僅保留-zip-和-iso-文件" tabindex="-1">策略 #3: 用 find 命令刪除所有其它文件僅保留 zip 和 iso 文件 <a class="header-anchor" href="#策略-3-用-find-命令刪除所有其它文件僅保留-zip-和-iso-文件" aria-label="Permalink to “策略 #3: 用 find 命令刪除所有其它文件僅保留 zip 和 iso 文件”">​</a></h3><p>如果你正在使用 tcsh/csh/sh/ksh 或者其它shell，你可以在Unix－like系統上試着用下面find命令的語法格式來刪除文件：</p><pre><code>find /dir/ -type f -not -name &#39;匹配模式&#39; -delete
</code></pre><p>或者</p><pre><code>## 對於怪異的文件名可以使用 xargs ##
find /dir/ -type f -not -name &#39;匹配模式&#39; -print0 | xargs -0 -I {} rm {}
find /dir/ -type f -not -name &#39;匹配模式&#39; -print0 | xargs -0 -I {} rm [選項] {}
</code></pre><p>想要刪除 ～/source 目錄下除 php 以外的文件，鍵入：</p><pre><code>find ~/sources/ -type f -not -name &#39;*.php&#39; -delete
</code></pre><p>或者</p><pre><code>find ~/sources/ -type f -not -name &#39;*.php&#39; -print0 | xargs -0 -I {} rm -v {}
</code></pre><p>只保留 *.zip 和 *.iso 文件的語法如下：</p><pre><code>find . -type f -not \\( -name &#39;*zip&#39; -or -name &#39;*iso&#39; \\) -delete
</code></pre>`,14)),p("p",null,[e[5]||(e[5]=i("更多信息參見",-1)),l(n,{href:"http://www.manpager.com/linux/man1/bash.1.html"},{default:t(()=>[...e[3]||(e[3]=[i("bash command man page",-1)])]),_:1}),e[6]||(e[6]=i("和",-1)),l(n,{href:"http://www.manpager.com/linux/man1/find.1.html"},{default:t(()=>[...e[4]||(e[4]=[i("find command man page",-1)])]),_:1}),e[7]||(e[7]=i("。",-1))]),e[21]||(e[21]=p("hr",null,null,-1)),p("p",null,[e[9]||(e[9]=i("via: ",-1)),l(n,{href:"http://www.cyberciti.biz/faq/linux-bash-delete-all-files-in-directory-except-few/"},{default:t(()=>[...e[8]||(e[8]=[i("http://www.cyberciti.biz/faq/linux-bash-delete-all-files-in-directory-except-few/",-1)])]),_:1})]),p("p",null,[e[12]||(e[12]=i("譯者：",-1)),l(n,{href:"https://github.com/Linchenguang"},{default:t(()=>[...e[10]||(e[10]=[i("Linchenguang",-1)])]),_:1}),e[13]||(e[13]=i(" 校對：",-1)),l(n,{href:"https://github.com/carolinewuyan"},{default:t(()=>[...e[11]||(e[11]=[i("Caroline",-1)])]),_:1})]),p("p",null,[e[16]||(e[16]=i("本文由 ",-1)),l(n,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[14]||(e[14]=[i("LCTT",-1)])]),_:1}),e[17]||(e[17]=i(" 原創翻譯，",-1)),l(n,{href:"http://linux.cn/"},{default:t(()=>[...e[15]||(e[15]=[i("Linux中國",-1)])]),_:1}),e[18]||(e[18]=i(" 榮譽推出",-1))])])}const z=o(m,[["render",f]]);export{w as __pageData,z as default};
