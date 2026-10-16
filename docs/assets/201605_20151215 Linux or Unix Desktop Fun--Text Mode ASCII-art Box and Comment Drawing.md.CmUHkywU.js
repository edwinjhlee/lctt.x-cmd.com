import{_ as a,a0 as l,w as d,s as p,I as t,x as n,a1 as i,A as s,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"Linux/Unix 桌面趣事：文字模式下的 ASCII 艺术与注释绘画 | LCTT x X-CMD","titleTemplate":false,"description":"Linux/Unix 桌面趣事：文字模式下的 ASCII 艺术与注释绘画 | LCTT (201605) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux/Unix 桌面趣事：文字模式下的 ASCII 艺术与注释绘画 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux/Unix 桌面趣事：文字模式下的 ASCII 艺术与注释绘画 | LCTT (201605) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201605/20151215 Linux or Unix Desktop Fun--Text Mode ASCII-art Box and Comment Drawing","title":"Linux/Unix 桌面趣事：文字模式下的 ASCII 艺术与注释绘画","tag":"201605","desc":""},"relativePath":"201605/20151215 Linux or Unix Desktop Fun--Text Mode ASCII-art Box and Comment Drawing.md","filePath":"[post].md"}'),u={name:"201605/20151215 Linux or Unix Desktop Fun--Text Mode ASCII-art Box and Comment Drawing.md"};function x(b,e,m,_,g,f){const o=l("Link");return d(),p("div",null,[e[22]||(e[22]=t("h1",{id:"linux-unix-桌面趣事-文字模式下的-ascii-艺术与注释绘画",tabindex:"-1"},[n("Linux/Unix 桌面趣事：文字模式下的 ASCII 艺术与注释绘画 "),t("a",{class:"header-anchor",href:"#linux-unix-桌面趣事-文字模式下的-ascii-艺术与注释绘画","aria-label":"Permalink to “Linux/Unix 桌面趣事：文字模式下的 ASCII 艺术与注释绘画”"},"​")],-1)),e[23]||(e[23]=t("p",null,"boxes 命令不仅是一个文本过滤器，同时是一个很少人知道的有趣工具，它可以在输入的文本或者代码周围框上各种ASCII 艺术画。你可以用它快速创建邮件签名，或者在各种编程语言中留下评论块。这个命令可以在 vim 文本编辑器中使用，但是也可以在各种支持过滤器的文本编辑器中使用，同时也可以在命令行中单独使用。",-1)),e[24]||(e[24]=t("h3",{id:"任务-安装-boxes",tabindex:"-1"},[n("任务: 安装 boxes "),t("a",{class:"header-anchor",href:"#任务-安装-boxes","aria-label":"Permalink to “任务: 安装 boxes”"},"​")],-1)),t("p",null,[e[1]||(e[1]=n("使用 ",-1)),i(o,{href:"http://www.cyberciti.biz/tips/linux-debian-package-management-cheat-sheet.html"},{default:s(()=>[...e[0]||(e[0]=[n("apt-get 命令",-1)])]),_:1}),e[2]||(e[2]=n(" 在 Debian / Ubuntu Linux 中安装 boxes：",-1))]),e[25]||(e[25]=t("pre",null,[t("code",null,`$ sudo apt-get install boxes
`)],-1)),e[26]||(e[26]=t("p",null,"输出示例：",-1)),e[27]||(e[27]=t("pre",null,[t("code",null,`Reading package lists... Done
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
`)],-1)),t("p",null,[e[5]||(e[5]=n("RHEL / CentOS / Fedora Linux 用户, 使用 ",-1)),i(o,{href:"http://www.cyberciti.biz/faq/rhel-centos-fedora-linux-yum-command-howto/"},{default:s(()=>[...e[3]||(e[3]=[n("yum 命令来安装",-1)])]),_:1}),e[6]||(e[6]=n(" boxes，(请先",-1)),i(o,{href:"http://www.cyberciti.biz/faq/fedora-sl-centos-redhat6-enable-epel-repo/"},{default:s(()=>[...e[4]||(e[4]=[n("启用 EPEL 软件仓库",-1)])]),_:1}),e[7]||(e[7]=n(")：",-1))]),e[28]||(e[28]=r(`<pre><code># yum install boxes
</code></pre><p>输出示例：</p><pre><code>Loaded plugins: rhnplugin
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
</code></pre><p>或者，使用 pkg_add 命令来增加包：</p><pre><code># pkg_add -r boxes
</code></pre><h3 id="在一些给定文本周围画出任何种类的包围框" tabindex="-1">在一些给定文本周围画出任何种类的包围框 <a class="header-anchor" href="#在一些给定文本周围画出任何种类的包围框" aria-label="Permalink to “在一些给定文本周围画出任何种类的包围框”">​</a></h3><p>输入下列命令：</p><pre><code>echo &quot;This is a test&quot; | boxes
</code></pre><p>或者，指定要使用的图案的名字：</p><pre><code>echo -e &quot;\\n\\tVivek Gite\\n\\tvivek@nixcraft.com\\n\\twww.cyberciti.biz&quot; | boxes -d dog
</code></pre><p>输出示例 :</p><p><img src="http://s0.cyberciti.org/uploads/l/tips/2012/06/unix-linux-boxes-draw-dog-design.png" alt="Unix / Linux: Boxes Command To Draw Various Designs"></p><p>*图01: Unix / Linux: Boxes 命令来画出各式各样的图案 *</p><h4 id="怎么样输出所有的图案" tabindex="-1">怎么样输出所有的图案 <a class="header-anchor" href="#怎么样输出所有的图案" aria-label="Permalink to “怎么样输出所有的图案”">​</a></h4><p>语法如下：</p><pre><code>boxes option
pipe | boxes options
echo &quot;text&quot; | boxes -d foo
boxes -l
</code></pre><p>-d 选项用来设置要使用的图案的名字。语法如下：</p><pre><code>echo &quot;Text&quot; | boxes -d design
pipe | boxes -d desig
</code></pre><p>-l 选项列出所有图案。它显示了在配置文件中的所有的框线设计图，同时也显示关于其创作者的信息。</p><pre><code>boxes -l
boxes -l | more
boxes -l | less
</code></pre><p>输出示例：</p><pre><code>43 Available Styles in &quot;/etc/boxes/boxes-config&quot;:
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
</code></pre><h3 id="在使用-vi-vim-文本编辑器时如何通过-boxes-过滤文本" tabindex="-1">在使用 vi/vim 文本编辑器时如何通过 boxes 过滤文本? <a class="header-anchor" href="#在使用-vi-vim-文本编辑器时如何通过-boxes-过滤文本" aria-label="Permalink to “在使用 vi/vim 文本编辑器时如何通过 boxes 过滤文本?”">​</a></h3>`,25)),t("p",null,[e[9]||(e[9]=n("你可以在 vi 或 vim 中使用任何外部命令，比如在这个例子中，",-1)),i(o,{href:"http://www.cyberciti.biz/faq/vim-inserting-current-date-time-under-linux-unix-osx/"},{default:s(()=>[...e[8]||(e[8]=[n("插入当前日期和时间",-1)])]),_:1}),e[10]||(e[10]=n("，输入：",-1))]),e[29]||(e[29]=r(`<pre><code>!!date
</code></pre><p>或者</p><pre><code>:r !date
</code></pre><p>你需要在 vim 中输入以上命令来读取 date 命令的输出，这将在当前行后面加入日期和时分秒：</p><pre><code>Tue Jun 12 00:05:38 IST 2012
</code></pre><p>你可以用 boxes 命令做到同样的功能。如下创建一个作为示例的 shell 脚本或者c程序：</p><pre><code>#!/bin/bash
Purpose: Backup mysql database to remote server.
Author: Vivek Gite
Last updated on: Tue Jun, 12 2012
</code></pre><p>现在输入如下（将光标移到第二行，也就是以“Purpose: ...”开头的行）</p><pre><code>3!!boxes
</code></pre><p>瞧，你就会看到如下的输出 :</p><pre><code>#!/bin/bash
/****************************************************/
/* Purpose: Backup mysql database to remote server. */
/* Author: Vivek Gite           */
/* Last updated on: Tue Jun, 12 2012                */
/****************************************************/
</code></pre><p>这个短片将会给你介绍boxes命令:</p><p>注：youtube 视频</p>`,13)),e[30]||(e[30]=t("iframe",{width:"595",height:"446",frameborder:"0",src:"http://www.youtube.com/embed/glzXjNvrYOc?rel=0"},null,-1)),e[31]||(e[31]=t("p",null,"参见",-1)),e[32]||(e[32]=t("ul",null,[t("li",null,"boxes 帮助手册")],-1)),e[33]||(e[33]=t("hr",null,null,-1)),t("p",null,[e[12]||(e[12]=n("via: ",-1)),i(o,{href:"http://www.cyberciti.biz/tips/unix-linux-draw-any-kind-of-boxes-around-text-editor.html"},{default:s(()=>[...e[11]||(e[11]=[n("http://www.cyberciti.biz/tips/unix-linux-draw-any-kind-of-boxes-around-text-editor.html",-1)])]),_:1})]),t("p",null,[e[15]||(e[15]=n("作者：Vivek Gite 译者：",-1)),i(o,{href:"https://github.com/zky001"},{default:s(()=>[...e[13]||(e[13]=[n("zky001",-1)])]),_:1}),e[16]||(e[16]=n(" 校对：",-1)),i(o,{href:"https://github.com/wxy"},{default:s(()=>[...e[14]||(e[14]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[19]||(e[19]=n("本文由 ",-1)),i(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[17]||(e[17]=[n("LCTT",-1)])]),_:1}),e[20]||(e[20]=n(" 原创编译，",-1)),i(o,{href:"https://linux.cn/"},{default:s(()=>[...e[18]||(e[18]=[n("Linux中国",-1)])]),_:1}),e[21]||(e[21]=n(" 荣誉推出",-1))])])}const I=a(u,[["render",x]]);export{w as __pageData,I as default};
