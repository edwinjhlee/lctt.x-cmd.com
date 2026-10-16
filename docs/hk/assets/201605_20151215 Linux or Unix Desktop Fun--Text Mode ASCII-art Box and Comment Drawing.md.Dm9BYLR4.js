import{_ as a,a0 as l,w as d,s as p,I as t,x as n,a1 as i,A as s,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"Linux/Unix 桌面趣事：文字模式下的 ASCII 藝術與註釋繪畫 | LCTT x X-CMD","titleTemplate":false,"description":"Linux/Unix 桌面趣事：文字模式下的 ASCII 藝術與註釋繪畫 | LCTT (201605) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux/Unix 桌面趣事：文字模式下的 ASCII 藝術與註釋繪畫 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux/Unix 桌面趣事：文字模式下的 ASCII 藝術與註釋繪畫 | LCTT (201605) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201605/20151215 Linux or Unix Desktop Fun--Text Mode ASCII-art Box and Comment Drawing","title":"Linux/Unix 桌面趣事：文字模式下的 ASCII 藝術與註釋繪畫","tag":"201605","desc":""},"relativePath":"201605/20151215 Linux or Unix Desktop Fun--Text Mode ASCII-art Box and Comment Drawing.md","filePath":"[post].md"}'),u={name:"201605/20151215 Linux or Unix Desktop Fun--Text Mode ASCII-art Box and Comment Drawing.md"};function x(b,e,m,_,g,f){const o=l("Link");return d(),p("div",null,[e[22]||(e[22]=t("h1",{id:"linux-unix-桌面趣事-文字模式下的-ascii-藝術與註釋繪畫",tabindex:"-1"},[n("Linux/Unix 桌面趣事：文字模式下的 ASCII 藝術與註釋繪畫 "),t("a",{class:"header-anchor",href:"#linux-unix-桌面趣事-文字模式下的-ascii-藝術與註釋繪畫","aria-label":"Permalink to “Linux/Unix 桌面趣事：文字模式下的 ASCII 藝術與註釋繪畫”"},"​")],-1)),e[23]||(e[23]=t("p",null,"boxes 命令不僅是一個文本過濾器，同時是一個很少人知道的有趣工具，它可以在輸入的文本或者代碼周圍框上各種ASCII 藝術畫。你可以用它快速創建郵件簽名，或者在各種編程語言中留下評論塊。這個命令可以在 vim 文本編輯器中使用，但是也可以在各種支持過濾器的文本編輯器中使用，同時也可以在命令列中單獨使用。",-1)),e[24]||(e[24]=t("h3",{id:"任務-安裝-boxes",tabindex:"-1"},[n("任務: 安裝 boxes "),t("a",{class:"header-anchor",href:"#任務-安裝-boxes","aria-label":"Permalink to “任務: 安裝 boxes”"},"​")],-1)),t("p",null,[e[1]||(e[1]=n("使用 ",-1)),i(o,{href:"http://www.cyberciti.biz/tips/linux-debian-package-management-cheat-sheet.html"},{default:s(()=>[...e[0]||(e[0]=[n("apt-get 命令",-1)])]),_:1}),e[2]||(e[2]=n(" 在 Debian / Ubuntu Linux 中安裝 boxes：",-1))]),e[25]||(e[25]=t("pre",null,[t("code",null,`$ sudo apt-get install boxes
`)],-1)),e[26]||(e[26]=t("p",null,"輸出示例：",-1)),e[27]||(e[27]=t("pre",null,[t("code",null,`Reading package lists... Done
Building dependency tree
Reading state information... Done
The following NEW packages will be installed:
  boxes
0 upgraded, 1 newly installed, 0 to remove and 6 not upgraded.
Need to get 0 B/59.8 kB of archives.
After this operation, 205 kB of additional disk space will be used.
Selecting previously deselected package boxes.
(Reading database ... 224284 files and directories currently installed.)
Unpacking boxes (from .../boxes_1.0.1a-2.3_amd64.deb) ...
Processing triggers for man-db ...
Setting up boxes (1.0.1a-2.3) ...
`)],-1)),t("p",null,[e[5]||(e[5]=n("RHEL / CentOS / Fedora Linux 用户, 使用 ",-1)),i(o,{href:"http://www.cyberciti.biz/faq/rhel-centos-fedora-linux-yum-command-howto/"},{default:s(()=>[...e[3]||(e[3]=[n("yum 命令來安裝",-1)])]),_:1}),e[6]||(e[6]=n(" boxes，(請先",-1)),i(o,{href:"http://www.cyberciti.biz/faq/fedora-sl-centos-redhat6-enable-epel-repo/"},{default:s(()=>[...e[4]||(e[4]=[n("啓用 EPEL 軟件倉庫",-1)])]),_:1}),e[7]||(e[7]=n(")：",-1))]),e[28]||(e[28]=r(`<pre><code># yum install boxes
</code></pre><p>輸出示例：</p><pre><code>Loaded plugins: rhnplugin
Setting up Install Process
Resolving Dependencies
There are unfinished transactions remaining. You might consider running yum-complete-transaction first to finish them.
--&gt; Running transaction check
---&gt; Package boxes.x86_64 0:1.1-8.el6 will be installed
--&gt; Finished Dependency Resolution
Dependencies Resolved
==========================================================================
 Package        Arch            Version               Repository     Size
==========================================================================
Installing:
 boxes          x86_64          1.1-8.el6             epel           64 k
Transaction Summary
==========================================================================
Install       1 Package(s)
Total download size: 64 k
Installed size: 151 k
Is this ok [y/N]: y
Downloading Packages:
boxes-1.1-8.el6.x86_64.rpm                         |  64 kB     00:00
Running rpm_check_debug
Running Transaction Test
Transaction Test Succeeded
Running Transaction
  Installing : boxes-1.1-8.el6.x86_64                                 1/1
Installed:
  boxes.x86_64 0:1.1-8.el6
Complete!
</code></pre><p>FreeBSD 用户可以按如下使用：</p><pre><code>cd /usr/ports/misc/boxes/ &amp;&amp; make install clean
</code></pre><p>或者，使用 pkg_add 命令來增加包：</p><pre><code># pkg_add -r boxes
</code></pre><h3 id="在一些給定文本週圍畫出任何種類的包圍框" tabindex="-1">在一些給定文本週圍畫出任何種類的包圍框 <a class="header-anchor" href="#在一些給定文本週圍畫出任何種類的包圍框" aria-label="Permalink to “在一些給定文本週圍畫出任何種類的包圍框”">​</a></h3><p>輸入下列命令：</p><pre><code>echo &quot;This is a test&quot; | boxes
</code></pre><p>或者，指定要使用的圖案的名字：</p><pre><code>echo -e &quot;\\n\\tVivek Gite\\n\\tvivek@nixcraft.com\\n\\twww.cyberciti.biz&quot; | boxes -d dog
</code></pre><p>輸出示例 :</p><p><img src="http://s0.cyberciti.org/uploads/l/tips/2012/06/unix-linux-boxes-draw-dog-design.png" alt="Unix / Linux: Boxes Command To Draw Various Designs"></p><p>*圖01: Unix / Linux: Boxes 命令來畫出各式各樣的圖案 *</p><h4 id="怎麼樣輸出所有的圖案" tabindex="-1">怎麼樣輸出所有的圖案 <a class="header-anchor" href="#怎麼樣輸出所有的圖案" aria-label="Permalink to “怎麼樣輸出所有的圖案”">​</a></h4><p>語法如下：</p><pre><code>boxes option
pipe | boxes options
echo &quot;text&quot; | boxes -d foo
boxes -l
</code></pre><p>-d 選項用來設置要使用的圖案的名字。語法如下：</p><pre><code>echo &quot;Text&quot; | boxes -d design
pipe | boxes -d desig
</code></pre><p>-l 選項列出所有圖案。它顯示了在配置文件中的所有的框線設計圖，同時也顯示關於其創作者的信息。</p><pre><code>boxes -l
boxes -l | more
boxes -l | less
</code></pre><p>輸出示例：</p><pre><code>43 Available Styles in &quot;/etc/boxes/boxes-config&quot;:
-------------------------------------------------
ada-box (Neil Bird ):
    ---------------
    --           --
    --           --
    ---------------
ada-cmt (Neil Bird ):
    --
    -- regular Ada
    -- comments
    --
boy (Joan G. Stark ):
                    .-&quot;&quot;&quot;-.
                   / .===. \\
                   \\/ 6 6 \\/
                   ( \\___/ )
      _________ooo__\\_____/______________
     /                                   \\
    |   joan stark   spunk1111@juno.com   |
    |     VISIT MY ASCII ART GALLERY:     |
    | http://www.geocities.com/SoHo/7373/ |
     \\_______________________ooo_________/  jgs
                    |  |  |
                    |_ | _|
                    |  |  |
                    |__|__|
                    /-&#39;Y&#39;-\\
                   (__/ \\__)
....
...
output truncated
..
</code></pre><h3 id="在使用-vi-vim-文本編輯器時如何通過-boxes-過濾文本" tabindex="-1">在使用 vi/vim 文本編輯器時如何通過 boxes 過濾文本? <a class="header-anchor" href="#在使用-vi-vim-文本編輯器時如何通過-boxes-過濾文本" aria-label="Permalink to “在使用 vi/vim 文本編輯器時如何通過 boxes 過濾文本?”">​</a></h3>`,25)),t("p",null,[e[9]||(e[9]=n("你可以在 vi 或 vim 中使用任何外部命令，比如在這個例子中，",-1)),i(o,{href:"http://www.cyberciti.biz/faq/vim-inserting-current-date-time-under-linux-unix-osx/"},{default:s(()=>[...e[8]||(e[8]=[n("插入當前日期和時間",-1)])]),_:1}),e[10]||(e[10]=n("，輸入：",-1))]),e[29]||(e[29]=r(`<pre><code>!!date
</code></pre><p>或者</p><pre><code>:r !date
</code></pre><p>你需要在 vim 中輸入以上命令來讀取 date 命令的輸出，這將在當前行後面加入日期和時分秒：</p><pre><code>Tue Jun 12 00:05:38 IST 2012
</code></pre><p>你可以用 boxes 命令做到同樣的功能。如下創建一個作為示例的 shell 腳本或者c程序：</p><pre><code>#!/bin/bash
Purpose: Backup mysql database to remote server.
Author: Vivek Gite
Last updated on: Tue Jun, 12 2012
</code></pre><p>現在輸入如下（將光標移到第二行，也就是以“Purpose: ...”開頭的行）</p><pre><code>3!!boxes
</code></pre><p>瞧，你就會看到如下的輸出 :</p><pre><code>#!/bin/bash
/****************************************************/
/* Purpose: Backup mysql database to remote server. */
/* Author: Vivek Gite           */
/* Last updated on: Tue Jun, 12 2012                */
/****************************************************/
</code></pre><p>這個短片將會給你介紹boxes命令:</p><p>注：youtube 視頻</p>`,13)),e[30]||(e[30]=t("iframe",{width:"595",height:"446",frameborder:"0",src:"http://www.youtube.com/embed/glzXjNvrYOc?rel=0"},null,-1)),e[31]||(e[31]=t("p",null,"參見",-1)),e[32]||(e[32]=t("ul",null,[t("li",null,"boxes 幫助手冊")],-1)),e[33]||(e[33]=t("hr",null,null,-1)),t("p",null,[e[12]||(e[12]=n("via: ",-1)),i(o,{href:"http://www.cyberciti.biz/tips/unix-linux-draw-any-kind-of-boxes-around-text-editor.html"},{default:s(()=>[...e[11]||(e[11]=[n("http://www.cyberciti.biz/tips/unix-linux-draw-any-kind-of-boxes-around-text-editor.html",-1)])]),_:1})]),t("p",null,[e[15]||(e[15]=n("作者：Vivek Gite 譯者：",-1)),i(o,{href:"https://github.com/zky001"},{default:s(()=>[...e[13]||(e[13]=[n("zky001",-1)])]),_:1}),e[16]||(e[16]=n(" 校對：",-1)),i(o,{href:"https://github.com/wxy"},{default:s(()=>[...e[14]||(e[14]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[19]||(e[19]=n("本文由 ",-1)),i(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[17]||(e[17]=[n("LCTT",-1)])]),_:1}),e[20]||(e[20]=n(" 原創編譯，",-1)),i(o,{href:"https://linux.cn/"},{default:s(()=>[...e[18]||(e[18]=[n("Linux中國",-1)])]),_:1}),e[21]||(e[21]=n(" 榮譽推出",-1))])])}const I=a(u,[["render",x]]);export{w as __pageData,I as default};
