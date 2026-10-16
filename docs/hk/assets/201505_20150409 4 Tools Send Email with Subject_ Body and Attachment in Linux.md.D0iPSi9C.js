import{_ as i,a0 as u,w as r,s as d,ao as l,I as s,x as t,a1 as n,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"4個可以發送完整電子郵件的命令列工具 | LCTT x X-CMD","titleTemplate":false,"description":"4個可以發送完整電子郵件的命令列工具 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"4個可以發送完整電子郵件的命令列工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"4個可以發送完整電子郵件的命令列工具 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150409 4 Tools Send Email with Subject, Body and Attachment in Linux","title":"4個可以發送完整電子郵件的命令列工具","tag":"201505","desc":""},"relativePath":"201505/20150409 4 Tools Send Email with Subject, Body and Attachment in Linux.md","filePath":"[post].md"}'),c={name:"201505/20150409 4 Tools Send Email with Subject, Body and Attachment in Linux.md"};function m(p,e,h,q,f,T){const o=u("Link");return r(),d("div",null,[e[13]||(e[13]=l(`<h1 id="_4個可以發送完整電子郵件的命令列工具" tabindex="-1">4個可以發送完整電子郵件的命令列工具 <a class="header-anchor" href="#_4個可以發送完整電子郵件的命令列工具" aria-label="Permalink to “4個可以發送完整電子郵件的命令列工具”">​</a></h1><p>今天的文章裏我們會講到一些使用Linux命令列工具來發送帶附件的電子郵件的方法。它有很多用處，比如在應用程序所在服務器上，使用電子郵件發送一個文件過來，或者你可以在腳本中使用這些命令來做一些自動化操作。在本文的例子中，我們會使用foo.tar.gz文件作為附件。</p><p>有不同的命令列工具可以發送郵件，這裏我分享幾個多數用户會使用的工具，如<code>mailx</code>、<code>mutt</code>和<code>swaks</code>。</p><p>我們即將呈現的這些工具都是非常有名的，並且存在於多數Linux發行版默認的軟件倉庫中，你可以使用如下命令安裝：</p><p>在 <strong>Debian / Ubuntu</strong> 系統</p><pre><code>apt-get install mutt
apt-get install swaks
apt-get install mailx
apt-get install sharutils
</code></pre><p>在基於Red Hat的系統，如 <strong>CentOS</strong> 或者 <strong>Fedora</strong></p><pre><code>yum install mutt
yum install swaks
yum install mailx
yum install sharutils
</code></pre><h3 id="_1-使用-mail-mailx" tabindex="-1">1) 使用 mail / mailx <a class="header-anchor" href="#_1-使用-mail-mailx" aria-label="Permalink to “1) 使用 mail / mailx”">​</a></h3><p><code>mailx</code>工具在多數Linux發行版中是默認的郵件程序，現在已經支持發送附件了。如果它不在你的系統中，你可以使用上邊的命令安裝。有一點需要注意，老版本的mailx可能不支持發送附件，運行如下命令查看是否支持。</p><pre><code>$ man mail
</code></pre><p>第一行看起來是這樣的：</p><pre><code>mailx [-BDdEFintv~] [-s subject] [-a attachment ] [-c cc-addr] [-b bcc-addr] [-r from-addr] [-h hops] [-A account] [-S variable[=value]] to-addr . . .
</code></pre><p>如果你看到它支持<code>-a</code>的選項（-a 文件名，將文件作為附件添加到郵件）和<code>-s</code>選項（-s 主題，指定郵件的主題），那就是支持的。可以使用如下的幾個例子發送郵件。</p><p><strong>a) 簡單的郵件</strong></p><p>運行<code>mail</code>命令，然後<code>mailx</code>會等待你輸入郵件內容。你可以按回車來換行。當輸入完成後，按Ctrl + D，<code>mailx</code>會顯示EOT表示結束。</p><p>然後<code>mailx</code>會自動將郵件發送給收件人。</p><pre><code>$ mail user@example.com

HI,
Good Morning
How are you
EOT
</code></pre><p><strong>b) 發送有主題的郵件</strong></p><pre><code>$ echo &quot;Email text&quot; | mail -s &quot;Test Subject&quot; user@example.com
</code></pre><p><code>-s</code>的用處是指定郵件的主題。</p><p><strong>c) 從文件中讀取郵件內容併發送</strong></p><pre><code>$ mail -s &quot;message send from file&quot; user@example.com &lt; /path/to/file
</code></pre><p><strong>d) 將從管道獲取到的<code>echo</code>命令輸出作為郵件內容發送</strong></p><pre><code>$ echo &quot;This is message body&quot; | mail -s &quot;This is Subject&quot; user@example.com
</code></pre><p><strong>e) 發送帶附件的郵件</strong></p><pre><code>$ echo “Body with attachment &quot;| mail -a foo.tar.gz -s &quot;attached file&quot; user@example.com
</code></pre><p><code>-a</code>選項用於指定附件。</p><h3 id="_2-mutt" tabindex="-1">2) mutt <a class="header-anchor" href="#_2-mutt" aria-label="Permalink to “2) mutt”">​</a></h3><p>Mutt是類Unix系統上的一個文本界面郵件客户端。它有20多年的歷史，在Linux歷史中也是一個很重要的部分，它是最早支持進程打分和多線程處理的客户端程序之一。按照如下的例子來發送郵件。</p><p><strong>a) 帶有主題，從文件中讀取郵件的正文，併發送</strong></p><pre><code>$ mutt -s &quot;Testing from mutt&quot; user@example.com &lt; /tmp/message.txt
</code></pre><p><strong>b) 通過管道獲取<code>echo</code>命令輸出作為郵件內容發送</strong></p><pre><code>$ echo &quot;This is the body&quot; | mutt -s &quot;Testing mutt&quot; user@example.com
</code></pre><p><strong>c) 發送帶附件的郵件</strong></p><pre><code>$ echo &quot;This is the body&quot; | mutt -s &quot;Testing mutt&quot; user@example.com -a /tmp/foo.tar.gz
</code></pre><p><strong>d) 發送帶有多個附件的郵件</strong></p><pre><code>$ echo &quot;This is the body&quot; | mutt -s &quot;Testing&quot; user@example.com -a foo.tar.gz –a bar.tar.gz
</code></pre><h3 id="_3-swaks" tabindex="-1">3) swaks <a class="header-anchor" href="#_3-swaks" aria-label="Permalink to “3) swaks”">​</a></h3><p>Swaks（Swiss Army Knife，瑞士軍刀）是SMTP服務上的瑞士軍刀，它是一個功能強大、靈活、可編程、面向事務的SMTP測試工具，由John Jetmore開發和維護。你可以使用如下語法發送帶附件的郵件：</p><pre><code>$ swaks -t &quot;foo@bar.com&quot; --header &quot;Subject: Subject&quot; --body &quot;Email Text&quot; --attach foo.tar.gz
</code></pre><p>關於Swaks一個重要的地方是，它會為你顯示整個郵件發送過程，所以如果你想調試郵件發送過程，它是一個非常有用的工具。</p><p>它會給你提供了郵件發送過程的所有細節，包括郵件接收服務器的功能支持、兩個服務器之間的每一步交互。</p><h3 id="_4-uuencode" tabindex="-1">4) uuencode <a class="header-anchor" href="#_4-uuencode" aria-label="Permalink to “4) uuencode”">​</a></h3><p>郵件傳輸系統最初是被設計來傳送7位編碼（類似ASCII）的內容的。這就意味這它是用來發送文本內容，而不能發會使用8位的二進制內容（如程序文件或者圖片）。<code>uuencode</code>（“UNIX to UNIX encoding”，UNIX之間使用的編碼方式）程序用來解決這個限制。使用<code>uuencode</code>，發送端將二進制格式的轉換成文本格式來傳輸，接收端再轉換回去。</p><p>我們可以簡單地使用<code>uuencode</code>和<code>mailx</code>或者<code>mutt</code>配合，來發送二進制內容，類似這樣：</p><pre><code>$ uuencode example.jpeg example.jpeg | mail user@example.com
</code></pre><h3 id="shell腳本-解釋如何發送郵件" tabindex="-1">Shell腳本：解釋如何發送郵件 <a class="header-anchor" href="#shell腳本-解釋如何發送郵件" aria-label="Permalink to “Shell腳本：解釋如何發送郵件”">​</a></h3><pre><code>#!/bin/bash

FROM=&quot;&quot;
SUBJECT=&quot;&quot;
ATTACHMENTS=&quot;&quot;
TO=&quot;&quot;
BODY=&quot;&quot;

# 檢查文件名對應的文件是否存在
function check_files()
{
output_files=&quot;&quot;
for file in $1
do
if [ -s $file ]
then
output_files=&quot;\${output_files}\${file} &quot;
fi
done
echo $output_files
}

echo &quot;*********************&quot;
echo &quot;E-mail sending script.&quot;
echo &quot;*********************&quot;
echo

# 讀取用户輸入的郵件地址
while [ 1 ]
do
if [ ! $FROM ]
then
echo -n -e &quot;Enter the e-mail address you wish to send mail from:\\n[Enter] &quot;
else
echo -n -e &quot;The address you provided is not valid:\\n[Enter] &quot;
fi

read FROM
echo $FROM | grep -E &#39;^.+@.+$&#39; &gt; /dev/null
if [ $? -eq 0 ]
then
break
fi
done

echo

# 讀取用户輸入的收件人地址
while [ 1 ]
do
if [ ! $TO ]
then
echo -n -e &quot;Enter the e-mail address you wish to send mail to:\\n[Enter] &quot;
else
echo -n -e &quot;The address you provided is not valid:\\n[Enter] &quot;
fi

read TO
echo $TO | grep -E &#39;^.+@.+$&#39; &gt; /dev/null
if [ $? -eq 0 ]
then
break
fi
done

echo

# 讀取用户輸入的郵件主題
echo -n -e &quot;Enter e-mail subject:\\n[Enter] &quot;
read SUBJECT

echo

if [ &quot;$SUBJECT&quot; == &quot;&quot; ]
then
echo &quot;Proceeding without the subject...&quot;
fi

# 讀取作為附件的文件名
echo -e &quot;Provide the list of attachments. Separate names by space.
If there are spaces in file name, quote file name with \\&quot;.&quot;
read att

echo

# 確保文件名指向真實文件
attachments=$(check_files &quot;$att&quot;)
echo &quot;Attachments: $attachments&quot;

for attachment in $attachments
do
ATTACHMENTS=&quot;$ATTACHMENTS-a $attachment &quot;
done

echo

# 讀取完整的郵件正文
echo &quot;Enter message. To mark the end of message type ;; in new line.&quot;
read line

while [ &quot;$line&quot; != &quot;;;&quot; ]
do
BODY=&quot;$BODY$line\\n&quot;
read line
done

SENDMAILCMD=&quot;mutt -e \\&quot;set from=$FROM\\&quot; -s \\&quot;$SUBJECT\\&quot; \\
$ATTACHMENTS -- \\&quot;$TO\\&quot; &lt;&lt;&lt; \\&quot;$BODY\\&quot;&quot;
echo $SENDMAILCMD

mutt -e &quot;set from=$FROM&quot; -s &quot;$SUBJECT&quot; $ATTACHMENTS -- $TO &lt;&lt;&lt; $BODY
</code></pre><p>** 腳本輸出 **</p><pre><code>$ bash send_mail.sh
*********************
E-mail sending script.
*********************

Enter the e-mail address you wish to send mail from:
[Enter] test@gmail.com

Enter the e-mail address you wish to send mail to:
[Enter] test@gmail.com

Enter e-mail subject:
[Enter] Message subject

Provide the list of attachments. Separate names by space.
If there are spaces in file name, quote file name with &quot;.
send_mail.sh

Attachments: send_mail.sh

Enter message. To mark the end of message type ;; in new line.
This is a message
text
;;
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>有很多方法可以使用命令列/Shell腳本來發送郵件，這裏我們只分享了其中4個類Unix系統可用的工具。希望你喜歡我們的文章，並且提供您的寶貴意見，讓我們知道您想了解哪些新工具。</p><hr>`,54)),s("p",null,[e[1]||(e[1]=t("via: ",-1)),n(o,{href:"http://linoxide.com/linux-shell-script/send-email-subject-body-attachment-linux/"},{default:a(()=>[...e[0]||(e[0]=[t("http://linoxide.com/linux-shell-script/send-email-subject-body-attachment-linux/",-1)])]),_:1})]),s("p",null,[e[5]||(e[5]=t("作者：",-1)),n(o,{href:"http://linoxide.com/author/bobbin/"},{default:a(()=>[...e[2]||(e[2]=[t("Bobbin Zachariah",-1)])]),_:1}),e[6]||(e[6]=t(" 譯者：",-1)),n(o,{href:"https://github.com/goreliu"},{default:a(()=>[...e[3]||(e[3]=[t("goreliu",-1)])]),_:1}),e[7]||(e[7]=t(" 校對：",-1)),n(o,{href:"https://github.com/wxy"},{default:a(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),s("p",null,[e[10]||(e[10]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原創翻譯，",-1)),n(o,{href:"http://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[t("Linux中國",-1)])]),_:1}),e[12]||(e[12]=t(" 榮譽推出",-1))])])}const $=i(c,[["render",m]]);export{b as __pageData,$ as default};
