import{_ as i,a0 as u,w as r,s as d,ao as l,I as s,x as t,a1 as n,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"4个可以发送完整电子邮件的命令行工具 | LCTT x X-CMD","titleTemplate":false,"description":"4个可以发送完整电子邮件的命令行工具 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"4个可以发送完整电子邮件的命令行工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"4个可以发送完整电子邮件的命令行工具 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150409 4 Tools Send Email with Subject, Body and Attachment in Linux","title":"4个可以发送完整电子邮件的命令行工具","tag":"201505","desc":""},"relativePath":"201505/20150409 4 Tools Send Email with Subject, Body and Attachment in Linux.md","filePath":"[post].md"}'),c={name:"201505/20150409 4 Tools Send Email with Subject, Body and Attachment in Linux.md"};function m(p,e,h,q,f,T){const o=u("Link");return r(),d("div",null,[e[13]||(e[13]=l(`<h1 id="_4个可以发送完整电子邮件的命令行工具" tabindex="-1">4个可以发送完整电子邮件的命令行工具 <a class="header-anchor" href="#_4个可以发送完整电子邮件的命令行工具" aria-label="Permalink to “4个可以发送完整电子邮件的命令行工具”">​</a></h1><p>今天的文章里我们会讲到一些使用Linux命令行工具来发送带附件的电子邮件的方法。它有很多用处，比如在应用程序所在服务器上，使用电子邮件发送一个文件过来，或者你可以在脚本中使用这些命令来做一些自动化操作。在本文的例子中，我们会使用foo.tar.gz文件作为附件。</p><p>有不同的命令行工具可以发送邮件，这里我分享几个多数用户会使用的工具，如<code>mailx</code>、<code>mutt</code>和<code>swaks</code>。</p><p>我们即将呈现的这些工具都是非常有名的，并且存在于多数Linux发行版默认的软件仓库中，你可以使用如下命令安装：</p><p>在 <strong>Debian / Ubuntu</strong> 系统</p><pre><code>apt-get install mutt
apt-get install swaks
apt-get install mailx
apt-get install sharutils
</code></pre><p>在基于Red Hat的系统，如 <strong>CentOS</strong> 或者 <strong>Fedora</strong></p><pre><code>yum install mutt
yum install swaks
yum install mailx
yum install sharutils
</code></pre><h3 id="_1-使用-mail-mailx" tabindex="-1">1) 使用 mail / mailx <a class="header-anchor" href="#_1-使用-mail-mailx" aria-label="Permalink to “1) 使用 mail / mailx”">​</a></h3><p><code>mailx</code>工具在多数Linux发行版中是默认的邮件程序，现在已经支持发送附件了。如果它不在你的系统中，你可以使用上边的命令安装。有一点需要注意，老版本的mailx可能不支持发送附件，运行如下命令查看是否支持。</p><pre><code>$ man mail
</code></pre><p>第一行看起来是这样的：</p><pre><code>mailx [-BDdEFintv~] [-s subject] [-a attachment ] [-c cc-addr] [-b bcc-addr] [-r from-addr] [-h hops] [-A account] [-S variable[=value]] to-addr . . .
</code></pre><p>如果你看到它支持<code>-a</code>的选项（-a 文件名，将文件作为附件添加到邮件）和<code>-s</code>选项（-s 主题，指定邮件的主题），那就是支持的。可以使用如下的几个例子发送邮件。</p><p><strong>a) 简单的邮件</strong></p><p>运行<code>mail</code>命令，然后<code>mailx</code>会等待你输入邮件内容。你可以按回车来换行。当输入完成后，按Ctrl + D，<code>mailx</code>会显示EOT表示结束。</p><p>然后<code>mailx</code>会自动将邮件发送给收件人。</p><pre><code>$ mail user@example.com

HI,
Good Morning
How are you
EOT
</code></pre><p><strong>b) 发送有主题的邮件</strong></p><pre><code>$ echo &quot;Email text&quot; | mail -s &quot;Test Subject&quot; user@example.com
</code></pre><p><code>-s</code>的用处是指定邮件的主题。</p><p><strong>c) 从文件中读取邮件内容并发送</strong></p><pre><code>$ mail -s &quot;message send from file&quot; user@example.com &lt; /path/to/file
</code></pre><p><strong>d) 将从管道获取到的<code>echo</code>命令输出作为邮件内容发送</strong></p><pre><code>$ echo &quot;This is message body&quot; | mail -s &quot;This is Subject&quot; user@example.com
</code></pre><p><strong>e) 发送带附件的邮件</strong></p><pre><code>$ echo “Body with attachment &quot;| mail -a foo.tar.gz -s &quot;attached file&quot; user@example.com
</code></pre><p><code>-a</code>选项用于指定附件。</p><h3 id="_2-mutt" tabindex="-1">2) mutt <a class="header-anchor" href="#_2-mutt" aria-label="Permalink to “2) mutt”">​</a></h3><p>Mutt是类Unix系统上的一个文本界面邮件客户端。它有20多年的历史，在Linux历史中也是一个很重要的部分，它是最早支持进程打分和多线程处理的客户端程序之一。按照如下的例子来发送邮件。</p><p><strong>a) 带有主题，从文件中读取邮件的正文，并发送</strong></p><pre><code>$ mutt -s &quot;Testing from mutt&quot; user@example.com &lt; /tmp/message.txt
</code></pre><p><strong>b) 通过管道获取<code>echo</code>命令输出作为邮件内容发送</strong></p><pre><code>$ echo &quot;This is the body&quot; | mutt -s &quot;Testing mutt&quot; user@example.com
</code></pre><p><strong>c) 发送带附件的邮件</strong></p><pre><code>$ echo &quot;This is the body&quot; | mutt -s &quot;Testing mutt&quot; user@example.com -a /tmp/foo.tar.gz
</code></pre><p><strong>d) 发送带有多个附件的邮件</strong></p><pre><code>$ echo &quot;This is the body&quot; | mutt -s &quot;Testing&quot; user@example.com -a foo.tar.gz –a bar.tar.gz
</code></pre><h3 id="_3-swaks" tabindex="-1">3) swaks <a class="header-anchor" href="#_3-swaks" aria-label="Permalink to “3) swaks”">​</a></h3><p>Swaks（Swiss Army Knife，瑞士军刀）是SMTP服务上的瑞士军刀，它是一个功能强大、灵活、可编程、面向事务的SMTP测试工具，由John Jetmore开发和维护。你可以使用如下语法发送带附件的邮件：</p><pre><code>$ swaks -t &quot;foo@bar.com&quot; --header &quot;Subject: Subject&quot; --body &quot;Email Text&quot; --attach foo.tar.gz
</code></pre><p>关于Swaks一个重要的地方是，它会为你显示整个邮件发送过程，所以如果你想调试邮件发送过程，它是一个非常有用的工具。</p><p>它会给你提供了邮件发送过程的所有细节，包括邮件接收服务器的功能支持、两个服务器之间的每一步交互。</p><h3 id="_4-uuencode" tabindex="-1">4) uuencode <a class="header-anchor" href="#_4-uuencode" aria-label="Permalink to “4) uuencode”">​</a></h3><p>邮件传输系统最初是被设计来传送7位编码（类似ASCII）的内容的。这就意味这它是用来发送文本内容，而不能发会使用8位的二进制内容（如程序文件或者图片）。<code>uuencode</code>（“UNIX to UNIX encoding”，UNIX之间使用的编码方式）程序用来解决这个限制。使用<code>uuencode</code>，发送端将二进制格式的转换成文本格式来传输，接收端再转换回去。</p><p>我们可以简单地使用<code>uuencode</code>和<code>mailx</code>或者<code>mutt</code>配合，来发送二进制内容，类似这样：</p><pre><code>$ uuencode example.jpeg example.jpeg | mail user@example.com
</code></pre><h3 id="shell脚本-解释如何发送邮件" tabindex="-1">Shell脚本：解释如何发送邮件 <a class="header-anchor" href="#shell脚本-解释如何发送邮件" aria-label="Permalink to “Shell脚本：解释如何发送邮件”">​</a></h3><pre><code>#!/bin/bash

FROM=&quot;&quot;
SUBJECT=&quot;&quot;
ATTACHMENTS=&quot;&quot;
TO=&quot;&quot;
BODY=&quot;&quot;

# 检查文件名对应的文件是否存在
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

# 读取用户输入的邮件地址
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

# 读取用户输入的收件人地址
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

# 读取用户输入的邮件主题
echo -n -e &quot;Enter e-mail subject:\\n[Enter] &quot;
read SUBJECT

echo

if [ &quot;$SUBJECT&quot; == &quot;&quot; ]
then
echo &quot;Proceeding without the subject...&quot;
fi

# 读取作为附件的文件名
echo -e &quot;Provide the list of attachments. Separate names by space.
If there are spaces in file name, quote file name with \\&quot;.&quot;
read att

echo

# 确保文件名指向真实文件
attachments=$(check_files &quot;$att&quot;)
echo &quot;Attachments: $attachments&quot;

for attachment in $attachments
do
ATTACHMENTS=&quot;$ATTACHMENTS-a $attachment &quot;
done

echo

# 读取完整的邮件正文
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
</code></pre><p>** 脚本输出 **</p><pre><code>$ bash send_mail.sh
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
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>有很多方法可以使用命令行/Shell脚本来发送邮件，这里我们只分享了其中4个类Unix系统可用的工具。希望你喜欢我们的文章，并且提供您的宝贵意见，让我们知道您想了解哪些新工具。</p><hr>`,54)),s("p",null,[e[1]||(e[1]=t("via: ",-1)),n(o,{href:"http://linoxide.com/linux-shell-script/send-email-subject-body-attachment-linux/"},{default:a(()=>[...e[0]||(e[0]=[t("http://linoxide.com/linux-shell-script/send-email-subject-body-attachment-linux/",-1)])]),_:1})]),s("p",null,[e[5]||(e[5]=t("作者：",-1)),n(o,{href:"http://linoxide.com/author/bobbin/"},{default:a(()=>[...e[2]||(e[2]=[t("Bobbin Zachariah",-1)])]),_:1}),e[6]||(e[6]=t(" 译者：",-1)),n(o,{href:"https://github.com/goreliu"},{default:a(()=>[...e[3]||(e[3]=[t("goreliu",-1)])]),_:1}),e[7]||(e[7]=t(" 校对：",-1)),n(o,{href:"https://github.com/wxy"},{default:a(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),s("p",null,[e[10]||(e[10]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原创翻译，",-1)),n(o,{href:"http://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[t("Linux中国",-1)])]),_:1}),e[12]||(e[12]=t(" 荣誉推出",-1))])])}const $=i(c,[["render",m]]);export{b as __pageData,$ as default};
