import{_ as i,a0 as d,w as p,s as l,ao as u,I as n,x as o,a1 as r,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse(`{"title":"Linux中的15个‘echo’ 命令实例 | LCTT x X-CMD","titleTemplate":false,"description":"Linux中的15个‘echo’ 命令实例 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux中的15个‘echo’ 命令实例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux中的15个‘echo’ 命令实例 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140822 15 Practical Examples of 'echo' command in Linux","title":"Linux中的15个‘echo’ 命令实例","tag":"201410","desc":""},"relativePath":"201410/20140822 15 Practical Examples of 'echo' command in Linux.md","filePath":"[post].md"}`),g={name:"201410/20140822 15 Practical Examples of 'echo' command in Linux.md"};function a(c,t,m,x,h,T){const e=d("Link");return p(),l("div",null,[t[13]||(t[13]=u(`<h1 id="linux中的15个-echo-命令实例" tabindex="-1">Linux中的15个‘echo’ 命令实例 <a class="header-anchor" href="#linux中的15个-echo-命令实例" aria-label="Permalink to “Linux中的15个‘echo’ 命令实例”">​</a></h1><p><strong>echo</strong>是一种最常用的与广泛使用的内置于Linux的bash和C shell的命令，通常用在脚本语言和批处理文件中来在标准输出或者文件中显示一行文本或者字符串。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/08/echo-command.png" alt="echo command examples"></p><p>echo命令例子</p><p>echo命令的语法是：</p><pre><code>echo [选项] [字符串]
</code></pre><p>###<strong>1.</strong> 输入一行文本并显示在标准输出上</p><pre><code>$ echo Tecmint is a community of Linux Nerds 
</code></pre><p>会输出下面的文本:</p><pre><code>Tecmint is a community of Linux Nerds 
</code></pre><p>###<strong>2.</strong> 输出一个声明的变量值</p><p>比如，声明变量<strong>x</strong>并给它赋值为<strong>10</strong>。</p><pre><code> $ x=10
</code></pre><p>会输出它的值：</p><pre><code>$ echo The value of variable x = $x 

The value of variable x = 10 
</code></pre><p>###<strong>3.</strong> 使用‘<strong>\\b</strong>‘选项</p><p>‘<strong>-e</strong>‘后带上&#39;\\b&#39;会删除字符间的所有空格。</p><p><strong>注意：</strong> Linux中的选项‘<strong>-e</strong>‘扮演了转义字符反斜线的翻译器。</p><pre><code>$ echo -e &quot;Tecmint \\bis \\ba \\bcommunity \\bof \\bLinux \\bNerds&quot; 

TecmintisacommunityofLinuxNerds 
</code></pre><p>###<strong>4.</strong> 使用‘<strong>\\n</strong>‘选项</p><p>‘<strong>-e</strong>‘后面的带上‘\\n’行会在遇到的地方作为新的一行</p><pre><code>$ echo -e &quot;Tecmint \\nis \\na \\ncommunity \\nof \\nLinux \\nNerds&quot; 

Tecmint 
is 
a 
community 
of 
Linux 
Nerds 
</code></pre><p>###<strong>5.</strong> 使用‘<strong>\\t</strong>‘选项</p><p>‘<strong>-e</strong>‘后面跟上‘\\t’会在空格间加上水平制表符。</p><pre><code>$ echo -e &quot;Tecmint \\tis \\ta \\tcommunity \\tof \\tLinux \\tNerds&quot; 

Tecmint 	is 	a 	community 	of 	Linux 	Nerds 
</code></pre><p>###<strong>6.</strong> 也可以同时使用换行‘<strong>\\n</strong>‘与水平制表符‘<strong>\\t</strong>‘</p><pre><code>$ echo -e &quot;\\n\\tTecmint \\n\\tis \\n\\ta \\n\\tcommunity \\n\\tof \\n\\tLinux \\n\\tNerds&quot; 

	Tecmint 
	is 
	a 
	community 
	of 
	Linux 
	Nerds 
</code></pre><p>###<strong>7.</strong> 使用‘<strong>\\v</strong>‘选项</p><p>‘<strong>-e</strong>‘后面跟上‘\\v’会加上垂直制表符。</p><pre><code>$ echo -e &quot;\\vTecmint \\vis \\va \\vcommunity \\vof \\vLinux \\vNerds&quot; 

Tecmint 
        is 
           a 
             community 
                       of 
                          Linux 
                                Nerds 
</code></pre><p>###<strong>8.</strong> 也可以同时使用换行‘<strong>\\n</strong>‘与垂直制表符‘<strong>\\v</strong>‘</p><pre><code>$ echo -e &quot;\\n\\vTecmint \\n\\vis \\n\\va \\n\\vcommunity \\n\\vof \\n\\vLinux \\n\\vNerds&quot; 


Tecmint 

is 

a 

community 

of 

Linux 

Nerds 
</code></pre><p><strong>注意：</strong> 你可以按照你的需求连续使用两个或者多个垂直制表符，水平制表符与换行符。</p><p>###<strong>9.</strong> 使用‘<strong>\\r</strong>‘选项</p><p>‘<strong>-e</strong>‘后面跟上‘\\r’来指定输出中的回车符。（LCTT 译注：会覆写行开头的字符）</p><pre><code>$ echo -e &quot;Tecmint \\ris a community of Linux Nerds&quot; 

is a community of Linux Nerds 
</code></pre><p>###<strong>10.</strong> 使用‘<strong>\\c</strong>‘选项</p><p>‘<strong>-e</strong>‘后面跟上‘\\c’会抑制输出后面的字符并且最后不会换新行。</p><pre><code>$ echo -e &quot;Tecmint is a community \\cof Linux Nerds&quot; 

Tecmint is a community @tecmint:~$ 
</code></pre><p>###<strong>11.</strong> ‘<strong>-n</strong>‘会在echo完后不会输出新行</p><pre><code>$ echo -n &quot;Tecmint is a community of Linux Nerds&quot; 
Tecmint is a community of Linux Nerds@tecmint:~/Documents$ 
</code></pre><p>###<strong>12.</strong> 使用‘<strong>\\a</strong>‘选项</p><p>‘<strong>-e</strong>‘后面跟上‘\\a’选项会听到声音警告。</p><pre><code>$ echo -e &quot;Tecmint is a community of \\aLinux Nerds&quot; 
Tecmint is a community of Linux Nerds
</code></pre><p><strong>注意：</strong> 在你开始前，请先检查你的音量设置。</p><p>###<strong>13.</strong> 使用echo命令打印所有的文件和文件夹（ls命令的替代）</p><pre><code>$ echo * 

103.odt 103.pdf 104.odt 104.pdf 105.odt 105.pdf 106.odt 106.pdf 107.odt 107.pdf 108a.odt 108.odt 108.pdf 109.odt 109.pdf 110b.odt 110.odt 110.pdf 111.odt 111.pdf 112.odt 112.pdf 113.odt linux-headers-3.16.0-customkernel_1_amd64.deb linux-image-3.16.0-customkernel_1_amd64.deb network.jpeg 
</code></pre><p>###<strong>14.</strong> 打印制定的文件类型</p><p>比如，让我们假设你想要打印所有的‘<strong>.jpeg</strong>‘文件，使用下面的命令。</p><pre><code>$ echo *.jpeg 

network.jpeg 
</code></pre><p>###<strong>15.</strong> echo可以使用重定向符来输出到一个文件而不是标准输出</p><pre><code>$ echo &quot;Test Page&quot; &gt; testpage 

## Check Content
avi@tecmint:~$ cat testpage 
Test Page 
</code></pre><h3 id="echo-选项列表" tabindex="-1">echo 选项列表 <a class="header-anchor" href="#echo-选项列表" aria-label="Permalink to “echo 选项列表”">​</a></h3>`,53)),t[14]||(t[14]=n("table",{border:"0",cellspacing:"0"},[n("colgroup",{width:"85"}),n("colgroup",{width:"271"}),n("tbody",null,[n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," 选项")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"},[n("b",null," 描述")])]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," -n")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 不输出末尾的换行符。")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," -e")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 启用反斜线转义。")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\b")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 退格")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\\\")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 反斜线")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\n")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 新行")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\r")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 回车")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\t")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 水平制表符")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\v")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 垂直制表符")])])],-1)),t[15]||(t[15]=n("p",null,"就是这些了，不要忘记在下面留下你的反馈。",-1)),t[16]||(t[16]=n("hr",null,null,-1)),n("p",null,[t[1]||(t[1]=o("via: ",-1)),r(e,{href:"http://www.tecmint.com/echo-command-in-linux/"},{default:s(()=>[...t[0]||(t[0]=[o("http://www.tecmint.com/echo-command-in-linux/",-1)])]),_:1})]),n("p",null,[t[5]||(t[5]=o("作者：",-1)),r(e,{href:"http://www.tecmint.com/author/avishek/"},{default:s(()=>[...t[2]||(t[2]=[o("Avishek Kumar",-1)])]),_:1}),t[6]||(t[6]=o(" 译者：",-1)),r(e,{href:"https://github.com/geekpi"},{default:s(()=>[...t[3]||(t[3]=[o("geekpi",-1)])]),_:1}),t[7]||(t[7]=o(" 校对：",-1)),r(e,{href:"https://github.com/wxy"},{default:s(()=>[...t[4]||(t[4]=[o("wxy",-1)])]),_:1})]),n("p",null,[t[10]||(t[10]=o("本文由 ",-1)),r(e,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[8]||(t[8]=[o("LCTT",-1)])]),_:1}),t[11]||(t[11]=o(" 原创翻译，",-1)),r(e,{href:"http://linux.cn/"},{default:s(()=>[...t[9]||(t[9]=[o("Linux中国",-1)])]),_:1}),t[12]||(t[12]=o(" 荣誉推出",-1))])])}const y=i(g,[["render",a]]);export{b as __pageData,y as default};
