import{_ as i,a0 as p,w as s,s as l,ao as o,I as r,x as a,a1 as n,A as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const D=JSON.parse('{"title":"Linux date命令 - 显示和设置系统日期与时间 | LCTT x X-CMD","titleTemplate":false,"description":"Linux date命令 - 显示和设置系统日期与时间 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux date命令 - 显示和设置系统日期与时间 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux date命令 - 显示和设置系统日期与时间 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Linux date command – Display and Set System Date and Time","title":"Linux date命令 - 显示和设置系统日期与时间","tag":"201312","desc":""},"relativePath":"201312/Linux date command – Display and Set System Date and Time.md","filePath":"[post].md"}'),m={name:"201312/Linux date command – Display and Set System Date and Time.md"};function c(u,e,h,T,g,x){const t=p("Link");return s(),l("div",null,[e[14]||(e[14]=o(`<h1 id="linux-date命令-显示和设置系统日期与时间" tabindex="-1">Linux date命令 - 显示和设置系统日期与时间 <a class="header-anchor" href="#linux-date命令-显示和设置系统日期与时间" aria-label="Permalink to “Linux date命令 - 显示和设置系统日期与时间”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/12/date-linux-command.jpg" alt=""></p><p>操作系统上的时间也许只是当做一个时钟。特别在控制台下, 我们通常并不认为时间有什么重要的。但是对于管理员，这种认识是错误的。你知道错误的日期和时间会导致你不能编译程序么?</p><p>因为日期和时间很重要，这或许就是开发网络时间协议(NTP:Network Time Protocol)的原因。让我们了解下date命令是如何工作的。</p><h3 id="显示系统日期" tabindex="-1">显示系统日期 <a class="header-anchor" href="#显示系统日期" aria-label="Permalink to “显示系统日期”">​</a></h3><p>要显示系统日期,只要输入:</p><pre><code>$ date
Thu Dec 5 22:55:41 WIB 2013
</code></pre><h3 id="格式化显示日期" tabindex="-1">格式化显示日期 <a class="header-anchor" href="#格式化显示日期" aria-label="Permalink to “格式化显示日期”">​</a></h3><p>日期有很多格式。如果你不喜欢默认的格式，你可以换一种格式。你可能会想&quot;为什么我需要改变格式? 默认的输出对我足够了。&quot;</p><p>是的，你说的对，但是当你在编程时，默认输出或许无法满足你的需求，因此需要一些自定义输出。</p><h3 id="rfc-2822-的日期与时间输出格式" tabindex="-1">RFC 2822 的日期与时间输出格式 <a class="header-anchor" href="#rfc-2822-的日期与时间输出格式" aria-label="Permalink to “RFC 2822 的日期与时间输出格式”">​</a></h3><pre><code>$ date -R
Thu, 05 Dec 2013 23:40:53 +0700
</code></pre><p><strong>RFC 2822</strong> 的格式像这样 : <strong>星期, 日-月-年, 小时:分钟:秒 时区</strong></p><p>时区 +0700 等同于 GMT +7。</p><p>默认上<strong>date</strong>使用的是定义在<strong>/etc/localtime</strong>的时区。有效时区数据定义在<strong>/usr/share/timezones</strong>。</p><h3 id="显示或者设置协调世界时" tabindex="-1">显示或者设置协调世界时 <a class="header-anchor" href="#显示或者设置协调世界时" aria-label="Permalink to “显示或者设置协调世界时”">​</a></h3>`,16)),r("p",null,[e[1]||(e[1]=a("在 ",-1)),n(t,{href:"http://en.wikipedia.org/wiki/Coordinated_Universal_Time"},{default:d(()=>[...e[0]||(e[0]=[a("Wikipedia",-1)])]),_:1}),e[2]||(e[2]=a("上, UTC 意思是",-1))]),e[15]||(e[15]=o(`<blockquote><p>世界上主要的时钟和时间的标准。这是格林位置标准时间几个非常相近的替代者之一。</p></blockquote><p>以UTC形式显示日期和时间, 使用 -u 参数</p><pre><code>$ date -u
Thu Dec 5 16:45:58:UTC 2013
</code></pre><h3 id="使用格式化选项" tabindex="-1">使用格式化选项 <a class="header-anchor" href="#使用格式化选项" aria-label="Permalink to “使用格式化选项”">​</a></h3><p>要自定义你的日期格式, <strong>使用加号 (+)</strong></p><pre><code>$ date +”Day : %d Month : %m Year : %Y”
Day: 05 Month: 12 Year: 2013
</code></pre><ul><li>$ date +%D 12/05/13</li></ul><p><strong>%D</strong> 格式是 <strong>年/月/日 的格式</strong>.</p><p>如果你想的话，你可以输出日期的名字。下面是一些例子:</p><pre><code>$ date +”%a %b %d %y”
Fri 06 Dec 2013

$ date +”%A %B %d %Y”
Friday December 06 2013

$ date +”%A %B %d %Y %T”
Friday December 06 2013 00:30:37 

$ date +”%A %B-%d-%Y %c”
Friday December-06-2013 12:30:37 AM WIB
</code></pre><p>还有很多的日期格式。只要输入:</p><pre><code>$ date –help
</code></pre><p>或者</p><pre><code>$ man date
</code></pre><p>来显示date命令的语法和参数。</p><p>基本上，date命令会翻译所有所有的百分号(%)开头的格式和输出在引号(&quot;&quot;)内所有的内容。</p><h3 id="设置系统日期和时间" tabindex="-1">设置系统日期和时间 <a class="header-anchor" href="#设置系统日期和时间" aria-label="Permalink to “设置系统日期和时间”">​</a></h3><p>通常地，你希望你的系统日期和时间是自动设置的。如果由于一些原因，你想要手动修改它，我们可以使用这个命令。</p><pre><code># date –set=”20140125 09:17:00”
</code></pre><p>这会<strong>设置</strong>你当前的系统日期和时间到<strong>一月 25, 2014 and 09:17:00 AM。请注意</strong>,你<strong>必须</strong>拥有root特权来这么做。不然你会得到这样一个错误。</p><pre><code>date: cannot set date: Operation not permitted
Sat Jan 25 09:17:00 WIB 2014
</code></pre><h3 id="重置你的时间" tabindex="-1">重置你的时间 <a class="header-anchor" href="#重置你的时间" aria-label="Permalink to “重置你的时间”">​</a></h3><p>如果你希望重置你的系统日期和时间到原始值，你可以用这个技巧。</p><pre><code># hwclock
Fri 06 Dec 2013 03:44:10 AM WIB -0.314082 seconds
</code></pre><p>这回设置你的系统日期和时间到hwclock命令的输出的样子。</p><h3 id="在脚本中使用date命令" tabindex="-1">在脚本中使用date命令 <a class="header-anchor" href="#在脚本中使用date命令" aria-label="Permalink to “在脚本中使用date命令”">​</a></h3><p>还记得我之前说为什么你需要改变date的输出么?一个答案是你或许需要编程。让我们看下bash脚本下的一个例子。</p><pre><code>$ vi display.date

#! /bin/bash
DATETIME=$(date +”DATE: %a %b-%d-%Y TIME: %T WEEK NUMBER: %W”)
echo $DATETIME
</code></pre><p>保存并运行它:</p><pre><code>$ ./display.date
DATE : Fri Dec-06-2013 TIME: 03:08:19 WEEK Number :40
</code></pre><p>如果你发现权限拒绝错误信息,输入:</p><pre><code>$ chmod 755 display.date
</code></pre><h3 id="在备份流程中使用date" tabindex="-1">在备份流程中使用date <a class="header-anchor" href="#在备份流程中使用date" aria-label="Permalink to “在备份流程中使用date”">​</a></h3><p>另外一个例子是子你备份流程中使用date。</p><pre><code>$ date +%F
2013-12-06

$ tar zcfv /daily_backup/backup-\`date +%F\`.tar.gz /home/pungki/Documents
</code></pre><p>它会压缩文件夹<strong>/home/pungki/Documents</strong>到一个位于<strong>/daily_backup folder</strong>的文件<strong>backup-2013-12-06.tar.gz</strong>中。（译注：通过“\` 命令 \`”来在命令行内嵌其它命令，这个字符不是单引号，而是和波浪号~同一个键位的那个符号。）</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>date可能被认为在某些方面不重要。但是date扮演了一个重要的角色。要想知道关于date命令更多的细节，在你的控制台下输入man date访问man页面。</p><hr>`,39)),r("p",null,[e[4]||(e[4]=a("via: ",-1)),n(t,{href:"http://linoxide.com/linux-command/date-command-linux/"},{default:d(()=>[...e[3]||(e[3]=[a("http://linoxide.com/linux-command/date-command-linux/",-1)])]),_:1})]),r("p",null,[e[7]||(e[7]=a("译者：",-1)),n(t,{href:"https://github.com/geekpi"},{default:d(()=>[...e[5]||(e[5]=[a("geekpi",-1)])]),_:1}),e[8]||(e[8]=a(" 校对：",-1)),n(t,{href:"https://github.com/wxy"},{default:d(()=>[...e[6]||(e[6]=[a("wxy",-1)])]),_:1})]),r("p",null,[e[11]||(e[11]=a("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[9]||(e[9]=[a("LCTT",-1)])]),_:1}),e[12]||(e[12]=a(" 原创翻译，",-1)),n(t,{href:"http://linux.cn/"},{default:d(()=>[...e[10]||(e[10]=[a("Linux中国",-1)])]),_:1}),e[13]||(e[13]=a(" 荣誉推出",-1))])])}const k=i(m,[["render",c]]);export{D as __pageData,k as default};
