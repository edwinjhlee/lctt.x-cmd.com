import{_ as p,a0 as r,w as i,s as m,I as e,x as t,a1 as u,A as a,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const g=JSON.parse('{"title":"使用backupninja为Debian定制备份计划 | LCTT x X-CMD","titleTemplate":false,"description":"使用backupninja为Debian定制备份计划 | LCTT (201504) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用backupninja为Debian定制备份计划 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用backupninja为Debian定制备份计划 | LCTT (201504) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201504/How to create a custom backup plan for Debian with backupninja","title":"使用backupninja为Debian定制备份计划","tag":"201504","desc":""},"relativePath":"201504/How to create a custom backup plan for Debian with backupninja.md","filePath":"[post].md"}'),s={name:"201504/How to create a custom backup plan for Debian with backupninja.md"};function c(q,n,d,b,h,f){const o=r("Link");return i(),m("div",null,[n[19]||(n[19]=e("h1",{id:"使用backupninja为debian定制备份计划",tabindex:"-1"},[t("使用backupninja为Debian定制备份计划 "),e("a",{class:"header-anchor",href:"#使用backupninja为debian定制备份计划","aria-label":"Permalink to “使用backupninja为Debian定制备份计划”"},"​")],-1)),e("p",null,[n[1]||(n[1]=t("backupninja是Debian系统（以及基于Debian的发行版）中一个强大的、高度可配置的备份软件。在",-1)),u(o,{href:"http://linux.cn/article-5096-1.html"},{default:a(()=>[...n[0]||(n[0]=[t("前一篇文章",-1)])]),_:1}),n[2]||(n[2]=t("中，我们探讨了如何安装backupninja以及如何设置两个备份操作并执行。然而，那些只是冰山一角。这一次，我们要讨论如何定制 Handler 和 Helper ，使用这些功能定制策略以完成任何备份需要。",-1))]),n[20]||(n[20]=l(`<p>###回顾 backupninja</p><p>backupninja的一个独特的地方是它可以完全抛弃/etc/backup.d中的纯文本配置文件和操作文件，软件自己会搞定。另外，我们可以编写自定义脚本（又叫 “handler”）放在/usr/share/backupninja 目录下来完成不同类型的备份操作。此外，可以通过ninjahelper的基于ncurses的交互式菜单（又叫“helper”）来指导我们创建一些配置文件，使得人工错误降到最低。</p><p>###创建定制的Handler与Helper</p><p>这一节的目标是创建一个脚本，将home目录以<strong>gzip</strong>或<strong>bzip2</strong>压缩包的形式备份起来，不包括音乐与视频文件。我们将这个文件命名为home，将它放在/usr/backup/ninja目录下。</p><p>尽管你可以使用默认的tar handler（参考 /usr/share/backupninja/tar 与 /usr/share/backupninja/tar.helper）来达到这个效果，但是我们使用这种方法来展示如何创建实用的 handler 脚本与基于 ncurses 的 helper。你可以根据你的需求来决定如何运用这里的方法。</p><p>由于 handlers 来源于主脚本，所以无需以#!/bin/bash开始的释伴行（shebang line）。</p><p>我们编写的 handler （/usr/share/backupninja/home）如下所示。已经详细注释了。getconf 函数用来读取备份操作的配置文件。如果你指定了一个变量的值，那么它会覆盖配置文件中对应变量的值：</p><pre><code>#/home 目录 handler 脚本
 
# 每个备份文件会通过 FQDN 来鉴别主机
getconf backupname
 
# 备份文件的保存目录
getconf backupdir
 
# 默认压缩
getconf compress
 
# 包含 /home 目录
getconf includes
 
#不包含 *.mp3 与 *.mp4 文件
getconf excludes
 
# 要打包备份文件的默认扩展名
getconf EXTENSION
 
# tar 程序的绝对路径
getconf TAR \`which tar\`
 
# date 程序的绝对路径
getconf DATE    \`which date\`
 
# 日期格式
DATEFORMAT=&quot;%Y-%m-%d&quot;
 
# 如果备份目录不存在，以致命错误退出
if [ ! -d &quot;$backupdir&quot; ]
then
   mkdir -p &quot;$backupdir&quot; || fatal &quot;Can not make directory $backupdir&quot;
fi
 
# 如果备份目录不可写，同样以致命错误退出
if [ ! -w &quot;$backupdir&quot; ]
then
   fatal &quot;Directory $backupdir is not writable&quot;
fi
 
# 根据压缩格式选择对应的tar选项
case $compress in
   &quot;gzip&quot;)
    compress_option=&quot;-z&quot;
    EXTENSION=&quot;tar.gz&quot;
    ;;
   &quot;bzip&quot;)
    compress_option=&quot;-j&quot;
    EXTENSION=&quot;tar.bz2&quot;
    ;;
   &quot;none&quot;)
    compress_option=&quot;&quot;
    ;;
   *)
    warning &quot;Unknown compress filter ($tar_compress)&quot;
    compress_option=&quot;&quot;
    EXTENSION=&quot;tar.gz&quot;
    ;;
esac
 
# 不包含一些文件类型/目录
exclude_options=&quot;&quot;
for i in $excludes
do
   exclude_options=&quot;$exclude_options --exclude $i&quot;
done
 
# 调试信息，执行备份操作
debug &quot;Running backup: &quot; $TAR -c -p -v $compress_option $exclude_options \\
   -f &quot;$backupdir/$backupname-&quot;\`$DATE &quot;+$DATEFORMAT&quot;\`&quot;.$EXTENSION&quot; \\
   $includes
 
# 将标准输出重定向到以.list为扩展的文件  
# 将标准错误输出重定向到以.err为扩展的文件
$TAR -c -p -v $compress_option $exclude_options \\
   -f &quot;$backupdir/$backupname-&quot;\`$DATE &quot;+$DATEFORMAT&quot;\`&quot;.$EXTENSION&quot; \\
   $includes \\
   &gt; &quot;$backupdir/$backupname-&quot;\`$DATE &quot;+$DATEFORMAT&quot;\`.list \\
   2&gt; &quot;$backupdir/$backupname-&quot;\`$DATE &quot;+$DATEFORMAT&quot;\`.err
 
[ $? -ne 0 ] &amp;&amp; fatal &quot;Tar backup failed&quot;
</code></pre><p>接下来我们将要创建helper文件（/usr/share/backupninja/home.helper）。这样，hendlers将会以菜单的形式在<strong>ninjahelper</strong>中显示：</p><pre><code># 备份操作描述，以下划线分割单词
HELPERS=&quot;$HELPERS home:backup_of_home_directories&quot;
 
home_wizard() {
   home_title=&quot;Home action wizard&quot;
 
   backupname=\`hostname --fqdn\`
 
# 指定备份操作的时间
   inputBox &quot;$home_title&quot; &quot;When to run this action?&quot; &quot;everyday at 01&quot;
   [ $? = 1 ] &amp;&amp; return
   home_when_run=&quot;when = $REPLY&quot;
 
# 指定备份文件名
   inputBox &quot;$home_title&quot; &quot;\\&quot;Name\\&quot; of backups&quot; &quot;$backupname&quot;
   [ $? = 1 ] &amp;&amp; return
   home_backupname=&quot;backupname = $REPLY&quot;
   backupname=&quot;$REPLY&quot;
 
# 指定保存备份文件的默认路径
   inputBox &quot;$home_title&quot; &quot;Directory where to store the backups&quot; &quot;/var/backups/home&quot;
   [ $? = 1 ] &amp;&amp; return
   home_backupdir=&quot;backupdir = $REPLY&quot;
 
# 指定复选框的默认值
   radioBox &quot;$home_title&quot; &quot;Compression&quot; \\
    &quot;none&quot;  &quot;No compression&quot; off \\
    &quot;gzip&quot;  &quot;Compress with gzip&quot; on \\
    &quot;bzip&quot;  &quot;Compress with bzip&quot; off
   [ $? = 1 ] &amp;&amp; return;
   result=&quot;$REPLY&quot;
   home_compress=&quot;compress = $REPLY &quot;
 
   REPLY=
   while [ -z &quot;$REPLY&quot; ]; do
    formBegin &quot;$home_title: Includes&quot;
        formItem &quot;Include:&quot; /home/gacanepa
    formDisplay
    [ $? = 0 ] || return 1
    home_includes=&quot;includes = &quot;
    for i in $REPLY; do
        [ -n &quot;$i&quot; ] &amp;&amp; home_includes=&quot;$home_includes $i&quot;
    done
   done
 
   REPLY=
   while [ -z &quot;$REPLY&quot; ]; do
    formBegin &quot;$home_title: Excludes&quot;
        formItem &quot;Exclude:&quot; *.mp3
        formItem &quot;Exclude:&quot; *.mp4
        # 按需增加多个“Exclude”文本框指定其他不须包含的内容
formItem &quot;Exclude:&quot;
        formItem &quot;Exclude:&quot;
    formDisplay
    [ $? = 0 ] || return 1
    home_excludes=&quot;excludes = &quot;
    for i in $REPLY; do
        [ -n &quot;$i&quot; ] &amp;&amp; home_excludes=&quot;$home_excludes $i&quot;
    done
   done
 
# 保存配置
   get_next_filename $configdirectory/10.home
   cat &gt; $next_filename &lt;&lt;EOF
$home_when_run
$home_backupname
$home_backupdir
$home_compress
$home_includes
$home_excludes
 
# tar 程序的路径，必须为GNU tar
TAR    \`which tar\`
DATE    \`which date\`
DATEFORMAT  &quot;%Y-%m-%d&quot;
EXTENSION    tar
 
EOF
# 将配置文件的权限改为600
   chmod 600 $next_filename
}
</code></pre><p>###运行 ninjahelper###</p><p>当创建了名为home的handler脚本以及对应的home.helper后，运行ninjahelper命令创建一个新的备份操作。</p><pre><code>#ninjahelper
</code></pre><p>选择 create a new backup action（创建一个新的备份操作）。</p><p><img src="https://farm8.staticflickr.com/7467/15322605273_90edaa5bc1_z.jpg" alt=""></p><p>接下来将看到可选的操作类型，这里选择“backup of home directories&quot;（备份home目录）：</p><p><img src="https://farm9.staticflickr.com/8636/15754955450_f3ef82217b_z.jpg" alt=""></p><p>然后会显示在helper中设置的默认值（这里只显示了3个）。可以编辑文本框中的值。注意，关于“when”变量的语法，参考文档的日程安排章节。</p><p><img src="https://farm8.staticflickr.com/7508/15941578982_24b680e1c3_z.jpg" alt=""></p><p><img src="https://farm8.staticflickr.com/7562/15916429476_6e84b307aa_z.jpg" alt=""></p><p><img src="https://farm8.staticflickr.com/7528/15319968994_41705b7283_z.jpg" alt=""></p><p>当完成备份操作的创建后，它会显示在ninjahelper的初始化菜单中：</p><p><img src="https://farm8.staticflickr.com/7534/15942239225_bb66dbdb63.jpg" alt=""></p><p>按回车键显示这个备份操作的选项。因为它非常简单，所以我们可以随便对它进行一些实验。</p><p>注意，“run this action now&quot;（立即运行）选项会不顾日程表安排的时间而立即进行备份操作：</p><p><img src="https://farm8.staticflickr.com/7508/15754955470_9af6251096_z.jpg" alt=""></p><p>备份操作会发生一些错误，debug会提供一些有用的信息以帮助你定位错误并纠正。例如，当备份操作有错误并且没有被纠正，那么当它运行时将会打印出如下所示的错误信息。</p><p><img src="https://farm9.staticflickr.com/8662/15754955480_487d040fcd_z.jpg" alt=""></p><p>上面的图片告诉我们，用于完成备份操作的连接没有建立，因为它所需要链接的远程主机似乎宕机了。另外，在helper文件中指定的目标目录不存在。当纠正这些问题后，重新开始备份操作。</p><p>需要牢记的事情：</p><ul><li>当你在/usr/share/backupninja 下新建了一个自定义脚本（如foobar）来处理特殊的备份操作时，那么你还需要编写与之对应的helper（foobar.helper）文件，ninjahelper 将通过它生成名为10.foobar（下一个操作为11，以此类推）的文件，保存在/etc/backup.d目录下，而这个文件才是备份操作的真正的配置文件。</li><li>可以通过ninjahelper设定好备份操作的执行时间，或按照“when”变量中设置的频率来执行。</li></ul><p>###总结###</p>`,32)),e("p",null,[n[4]||(n[4]=t("在这篇文章中，我们探讨了如何从头创建我们自己的备份操作，以及如何向ninjahelper添加相关的菜单以生成对应的配置文件。通过",-1)),u(o,{href:"http://linux.cn/article-5096-1.html"},{default:a(()=>[...n[3]||(n[3]=[t("上一篇",-1)])]),_:1}),n[5]||(n[5]=t("与这一篇文章，我希望我已经给出了足够好的理由让你继续研究，或者至少应该尝试一下。",-1))]),n[21]||(n[21]=e("hr",null,null,-1)),e("p",null,[n[7]||(n[7]=t("via: ",-1)),u(o,{href:"http://xmodulo.com/create-custom-backup-plan-debian.html"},{default:a(()=>[...n[6]||(n[6]=[t("http://xmodulo.com/create-custom-backup-plan-debian.html",-1)])]),_:1})]),e("p",null,[n[11]||(n[11]=t("作者：",-1)),u(o,{href:"http://xmodulo.com/author/gabriel"},{default:a(()=>[...n[8]||(n[8]=[t("Gabriel Cánepa",-1)])]),_:1}),n[12]||(n[12]=t(" 译者：",-1)),u(o,{href:"https://github.com/SPccman"},{default:a(()=>[...n[9]||(n[9]=[t("SPccman",-1)])]),_:1}),n[13]||(n[13]=t(" 校对：",-1)),u(o,{href:"https://github.com/wxy"},{default:a(()=>[...n[10]||(n[10]=[t("wxy",-1)])]),_:1})]),e("p",null,[n[16]||(n[16]=t("本文由 ",-1)),u(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...n[14]||(n[14]=[t("LCTT",-1)])]),_:1}),n[17]||(n[17]=t(" 原创翻译，",-1)),u(o,{href:"http://linux.cn/"},{default:a(()=>[...n[15]||(n[15]=[t("Linux中国",-1)])]),_:1}),n[18]||(n[18]=t(" 荣誉推出",-1))])])}const _=p(s,[["render",c]]);export{g as __pageData,_ as default};
