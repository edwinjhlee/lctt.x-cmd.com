import{_ as p,a0 as r,w as i,s as m,I as e,x as t,a1 as u,A as a,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse('{"title":"使用backupninja為Debian定製備份計劃 | LCTT x X-CMD","titleTemplate":false,"description":"使用backupninja為Debian定製備份計劃 | LCTT (201504) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用backupninja為Debian定製備份計劃 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用backupninja為Debian定製備份計劃 | LCTT (201504) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201504/How to create a custom backup plan for Debian with backupninja","title":"使用backupninja為Debian定製備份計劃","tag":"201504","desc":""},"relativePath":"201504/How to create a custom backup plan for Debian with backupninja.md","filePath":"[post].md"}'),s={name:"201504/How to create a custom backup plan for Debian with backupninja.md"};function c(q,n,d,b,h,f){const o=r("Link");return i(),m("div",null,[n[19]||(n[19]=e("h1",{id:"使用backupninja為debian定製備份計劃",tabindex:"-1"},[t("使用backupninja為Debian定製備份計劃 "),e("a",{class:"header-anchor",href:"#使用backupninja為debian定製備份計劃","aria-label":"Permalink to “使用backupninja為Debian定製備份計劃”"},"​")],-1)),e("p",null,[n[1]||(n[1]=t("backupninja是Debian系統（以及基於Debian的發行版）中一個強大的、高度可配置的備份軟件。在",-1)),u(o,{href:"http://linux.cn/article-5096-1.html"},{default:a(()=>[...n[0]||(n[0]=[t("前一篇文章",-1)])]),_:1}),n[2]||(n[2]=t("中，我們探討了如何安裝backupninja以及如何設置兩個備份操作並執行。然而，那些只是冰山一角。這一次，我們要討論如何定製 Handler 和 Helper ，使用這些功能定製策略以完成任何備份需要。",-1))]),n[20]||(n[20]=l(`<p>###回顧 backupninja</p><p>backupninja的一個獨特的地方是它可以完全拋棄/etc/backup.d中的純文本配置文件和操作文件，軟件自己會搞定。另外，我們可以編寫自定義腳本（又叫 “handler”）放在/usr/share/backupninja 目錄下來完成不同類型的備份操作。此外，可以通過ninjahelper的基於ncurses的交互式菜單（又叫“helper”）來指導我們創建一些配置文件，使得人工錯誤降到最低。</p><p>###創建定製的Handler與Helper</p><p>這一節的目標是創建一個腳本，將home目錄以<strong>gzip</strong>或<strong>bzip2</strong>壓縮包的形式備份起來，不包括音樂與視頻文件。我們將這個文件命名為home，將它放在/usr/backup/ninja目錄下。</p><p>儘管你可以使用默認的tar handler（參考 /usr/share/backupninja/tar 與 /usr/share/backupninja/tar.helper）來達到這個效果，但是我們使用這種方法來展示如何創建實用的 handler 腳本與基於 ncurses 的 helper。你可以根據你的需求來決定如何運用這裏的方法。</p><p>由於 handlers 來源於主腳本，所以無需以#!/bin/bash開始的釋伴行（shebang line）。</p><p>我們編寫的 handler （/usr/share/backupninja/home）如下所示。已經詳細註釋了。getconf 函數用來讀取備份操作的配置文件。如果你指定了一個變量的值，那麼它會覆蓋配置文件中對應變量的值：</p><pre><code>#/home 目錄 handler 腳本
 
# 每個備份文件會通過 FQDN 來鑑別主機
getconf backupname
 
# 備份文件的保存目錄
getconf backupdir
 
# 默認壓縮
getconf compress
 
# 包含 /home 目錄
getconf includes
 
#不包含 *.mp3 與 *.mp4 文件
getconf excludes
 
# 要打包備份文件的默認擴展名
getconf EXTENSION
 
# tar 程序的絕對路徑
getconf TAR \`which tar\`
 
# date 程序的絕對路徑
getconf DATE    \`which date\`
 
# 日期格式
DATEFORMAT=&quot;%Y-%m-%d&quot;
 
# 如果備份目錄不存在，以致命錯誤退出
if [ ! -d &quot;$backupdir&quot; ]
then
   mkdir -p &quot;$backupdir&quot; || fatal &quot;Can not make directory $backupdir&quot;
fi
 
# 如果備份目錄不可寫，同樣以致命錯誤退出
if [ ! -w &quot;$backupdir&quot; ]
then
   fatal &quot;Directory $backupdir is not writable&quot;
fi
 
# 根據壓縮格式選擇對應的tar選項
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
 
# 不包含一些文件類型/目錄
exclude_options=&quot;&quot;
for i in $excludes
do
   exclude_options=&quot;$exclude_options --exclude $i&quot;
done
 
# 調試信息，執行備份操作
debug &quot;Running backup: &quot; $TAR -c -p -v $compress_option $exclude_options \\
   -f &quot;$backupdir/$backupname-&quot;\`$DATE &quot;+$DATEFORMAT&quot;\`&quot;.$EXTENSION&quot; \\
   $includes
 
# 將標準輸出重定向到以.list為擴展的文件  
# 將標準錯誤輸出重定向到以.err為擴展的文件
$TAR -c -p -v $compress_option $exclude_options \\
   -f &quot;$backupdir/$backupname-&quot;\`$DATE &quot;+$DATEFORMAT&quot;\`&quot;.$EXTENSION&quot; \\
   $includes \\
   &gt; &quot;$backupdir/$backupname-&quot;\`$DATE &quot;+$DATEFORMAT&quot;\`.list \\
   2&gt; &quot;$backupdir/$backupname-&quot;\`$DATE &quot;+$DATEFORMAT&quot;\`.err
 
[ $? -ne 0 ] &amp;&amp; fatal &quot;Tar backup failed&quot;
</code></pre><p>接下來我們將要創建helper文件（/usr/share/backupninja/home.helper）。這樣，hendlers將會以菜單的形式在<strong>ninjahelper</strong>中顯示：</p><pre><code># 備份操作描述，以下劃線分割單詞
HELPERS=&quot;$HELPERS home:backup_of_home_directories&quot;
 
home_wizard() {
   home_title=&quot;Home action wizard&quot;
 
   backupname=\`hostname --fqdn\`
 
# 指定備份操作的時間
   inputBox &quot;$home_title&quot; &quot;When to run this action?&quot; &quot;everyday at 01&quot;
   [ $? = 1 ] &amp;&amp; return
   home_when_run=&quot;when = $REPLY&quot;
 
# 指定備份文件名
   inputBox &quot;$home_title&quot; &quot;\\&quot;Name\\&quot; of backups&quot; &quot;$backupname&quot;
   [ $? = 1 ] &amp;&amp; return
   home_backupname=&quot;backupname = $REPLY&quot;
   backupname=&quot;$REPLY&quot;
 
# 指定保存備份文件的默認路徑
   inputBox &quot;$home_title&quot; &quot;Directory where to store the backups&quot; &quot;/var/backups/home&quot;
   [ $? = 1 ] &amp;&amp; return
   home_backupdir=&quot;backupdir = $REPLY&quot;
 
# 指定複選框的默認值
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
        # 按需增加多個“Exclude”文本框指定其他不須包含的內容
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
 
# tar 程序的路徑，必須為GNU tar
TAR    \`which tar\`
DATE    \`which date\`
DATEFORMAT  &quot;%Y-%m-%d&quot;
EXTENSION    tar
 
EOF
# 將配置文件的權限改為600
   chmod 600 $next_filename
}
</code></pre><p>###運行 ninjahelper###</p><p>當創建了名為home的handler腳本以及對應的home.helper後，運行ninjahelper命令創建一個新的備份操作。</p><pre><code>#ninjahelper
</code></pre><p>選擇 create a new backup action（創建一個新的備份操作）。</p><p><img src="https://farm8.staticflickr.com/7467/15322605273_90edaa5bc1_z.jpg" alt=""></p><p>接下來將看到可選的操作類型，這裏選擇“backup of home directories&quot;（備份home目錄）：</p><p><img src="https://farm9.staticflickr.com/8636/15754955450_f3ef82217b_z.jpg" alt=""></p><p>然後會顯示在helper中設置的默認值（這裏只顯示了3個）。可以編輯文本框中的值。注意，關於“when”變量的語法，參考文檔的日程安排章節。</p><p><img src="https://farm8.staticflickr.com/7508/15941578982_24b680e1c3_z.jpg" alt=""></p><p><img src="https://farm8.staticflickr.com/7562/15916429476_6e84b307aa_z.jpg" alt=""></p><p><img src="https://farm8.staticflickr.com/7528/15319968994_41705b7283_z.jpg" alt=""></p><p>當完成備份操作的創建後，它會顯示在ninjahelper的初始化菜單中：</p><p><img src="https://farm8.staticflickr.com/7534/15942239225_bb66dbdb63.jpg" alt=""></p><p>按回車鍵顯示這個備份操作的選項。因為它非常簡單，所以我們可以隨便對它進行一些實驗。</p><p>注意，“run this action now&quot;（立即運行）選項會不顧日程表安排的時間而立即進行備份操作：</p><p><img src="https://farm8.staticflickr.com/7508/15754955470_9af6251096_z.jpg" alt=""></p><p>備份操作會發生一些錯誤，debug會提供一些有用的信息以幫助你定位錯誤並糾正。例如，當備份操作有錯誤並且沒有被糾正，那麼當它運行時將會打印出如下所示的錯誤信息。</p><p><img src="https://farm9.staticflickr.com/8662/15754955480_487d040fcd_z.jpg" alt=""></p><p>上面的圖片告訴我們，用於完成備份操作的連接沒有建立，因為它所需要鏈接的遠程主機似乎宕機了。另外，在helper文件中指定的目標目錄不存在。當糾正這些問題後，重新開始備份操作。</p><p>需要牢記的事情：</p><ul><li>當你在/usr/share/backupninja 下新建了一個自定義腳本（如foobar）來處理特殊的備份操作時，那麼你還需要編寫與之對應的helper（foobar.helper）文件，ninjahelper 將通過它生成名為10.foobar（下一個操作為11，以此類推）的文件，保存在/etc/backup.d目錄下，而這個文件才是備份操作的真正的配置文件。</li><li>可以通過ninjahelper設定好備份操作的執行時間，或按照“when”變量中設置的頻率來執行。</li></ul><p>###總結###</p>`,32)),e("p",null,[n[4]||(n[4]=t("在這篇文章中，我們探討了如何從頭創建我們自己的備份操作，以及如何向ninjahelper添加相關的菜單以生成對應的配置文件。通過",-1)),u(o,{href:"http://linux.cn/article-5096-1.html"},{default:a(()=>[...n[3]||(n[3]=[t("上一篇",-1)])]),_:1}),n[5]||(n[5]=t("與這一篇文章，我希望我已經給出了足夠好的理由讓你繼續研究，或者至少應該嘗試一下。",-1))]),n[21]||(n[21]=e("hr",null,null,-1)),e("p",null,[n[7]||(n[7]=t("via: ",-1)),u(o,{href:"http://xmodulo.com/create-custom-backup-plan-debian.html"},{default:a(()=>[...n[6]||(n[6]=[t("http://xmodulo.com/create-custom-backup-plan-debian.html",-1)])]),_:1})]),e("p",null,[n[11]||(n[11]=t("作者：",-1)),u(o,{href:"http://xmodulo.com/author/gabriel"},{default:a(()=>[...n[8]||(n[8]=[t("Gabriel Cánepa",-1)])]),_:1}),n[12]||(n[12]=t(" 譯者：",-1)),u(o,{href:"https://github.com/SPccman"},{default:a(()=>[...n[9]||(n[9]=[t("SPccman",-1)])]),_:1}),n[13]||(n[13]=t(" 校對：",-1)),u(o,{href:"https://github.com/wxy"},{default:a(()=>[...n[10]||(n[10]=[t("wxy",-1)])]),_:1})]),e("p",null,[n[16]||(n[16]=t("本文由 ",-1)),u(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...n[14]||(n[14]=[t("LCTT",-1)])]),_:1}),n[17]||(n[17]=t(" 原創翻譯，",-1)),u(o,{href:"http://linux.cn/"},{default:a(()=>[...n[15]||(n[15]=[t("Linux中國",-1)])]),_:1}),n[18]||(n[18]=t(" 榮譽推出",-1))])])}const _=p(s,[["render",c]]);export{g as __pageData,_ as default};
