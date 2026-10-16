import{_ as i,a0 as d,w as p,s as l,ao as u,I as n,x as o,a1 as r,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse(`{"title":"Linux中的15個‘echo’ 命令實例 | LCTT x X-CMD","titleTemplate":false,"description":"Linux中的15個‘echo’ 命令實例 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux中的15個‘echo’ 命令實例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux中的15個‘echo’ 命令實例 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140822 15 Practical Examples of 'echo' command in Linux","title":"Linux中的15個‘echo’ 命令實例","tag":"201410","desc":""},"relativePath":"201410/20140822 15 Practical Examples of 'echo' command in Linux.md","filePath":"[post].md"}`),g={name:"201410/20140822 15 Practical Examples of 'echo' command in Linux.md"};function a(c,t,m,x,h,T){const e=d("Link");return p(),l("div",null,[t[13]||(t[13]=u(`<h1 id="linux中的15個-echo-命令實例" tabindex="-1">Linux中的15個‘echo’ 命令實例 <a class="header-anchor" href="#linux中的15個-echo-命令實例" aria-label="Permalink to “Linux中的15個‘echo’ 命令實例”">​</a></h1><p><strong>echo</strong>是一種最常用的與廣泛使用的內置於Linux的bash和C shell的命令，通常用在腳本語言和批處理文件中來在標準輸出或者文件中顯示一行文本或者字符串。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/08/echo-command.png" alt="echo command examples"></p><p>echo命令例子</p><p>echo命令的語法是：</p><pre><code>echo [選項] [字符串]
</code></pre><p>###<strong>1.</strong> 輸入一行文本並顯示在標準輸出上</p><pre><code>$ echo Tecmint is a community of Linux Nerds 
</code></pre><p>會輸出下面的文本:</p><pre><code>Tecmint is a community of Linux Nerds 
</code></pre><p>###<strong>2.</strong> 輸出一個聲明的變量值</p><p>比如，聲明變量<strong>x</strong>並給它賦值為<strong>10</strong>。</p><pre><code> $ x=10
</code></pre><p>會輸出它的值：</p><pre><code>$ echo The value of variable x = $x 

The value of variable x = 10 
</code></pre><p>###<strong>3.</strong> 使用‘<strong>\\b</strong>‘選項</p><p>‘<strong>-e</strong>‘後帶上&#39;\\b&#39;會刪除字符間的所有空格。</p><p><strong>注意：</strong> Linux中的選項‘<strong>-e</strong>‘扮演了轉義字符反斜線的翻譯器。</p><pre><code>$ echo -e &quot;Tecmint \\bis \\ba \\bcommunity \\bof \\bLinux \\bNerds&quot; 

TecmintisacommunityofLinuxNerds 
</code></pre><p>###<strong>4.</strong> 使用‘<strong>\\n</strong>‘選項</p><p>‘<strong>-e</strong>‘後面的帶上‘\\n’行會在遇到的地方作為新的一行</p><pre><code>$ echo -e &quot;Tecmint \\nis \\na \\ncommunity \\nof \\nLinux \\nNerds&quot; 

Tecmint 
is 
a 
community 
of 
Linux 
Nerds 
</code></pre><p>###<strong>5.</strong> 使用‘<strong>\\t</strong>‘選項</p><p>‘<strong>-e</strong>‘後面跟上‘\\t’會在空格間加上水平製表符。</p><pre><code>$ echo -e &quot;Tecmint \\tis \\ta \\tcommunity \\tof \\tLinux \\tNerds&quot; 

Tecmint 	is 	a 	community 	of 	Linux 	Nerds 
</code></pre><p>###<strong>6.</strong> 也可以同時使用換行‘<strong>\\n</strong>‘與水平製表符‘<strong>\\t</strong>‘</p><pre><code>$ echo -e &quot;\\n\\tTecmint \\n\\tis \\n\\ta \\n\\tcommunity \\n\\tof \\n\\tLinux \\n\\tNerds&quot; 

	Tecmint 
	is 
	a 
	community 
	of 
	Linux 
	Nerds 
</code></pre><p>###<strong>7.</strong> 使用‘<strong>\\v</strong>‘選項</p><p>‘<strong>-e</strong>‘後面跟上‘\\v’會加上垂直製表符。</p><pre><code>$ echo -e &quot;\\vTecmint \\vis \\va \\vcommunity \\vof \\vLinux \\vNerds&quot; 

Tecmint 
        is 
           a 
             community 
                       of 
                          Linux 
                                Nerds 
</code></pre><p>###<strong>8.</strong> 也可以同時使用換行‘<strong>\\n</strong>‘與垂直製表符‘<strong>\\v</strong>‘</p><pre><code>$ echo -e &quot;\\n\\vTecmint \\n\\vis \\n\\va \\n\\vcommunity \\n\\vof \\n\\vLinux \\n\\vNerds&quot; 


Tecmint 

is 

a 

community 

of 

Linux 

Nerds 
</code></pre><p><strong>注意：</strong> 你可以按照你的需求連續使用兩個或者多個垂直製表符，水平製表符與換行符。</p><p>###<strong>9.</strong> 使用‘<strong>\\r</strong>‘選項</p><p>‘<strong>-e</strong>‘後面跟上‘\\r’來指定輸出中的回車符。（LCTT 譯註：會覆寫行開頭的字符）</p><pre><code>$ echo -e &quot;Tecmint \\ris a community of Linux Nerds&quot; 

is a community of Linux Nerds 
</code></pre><p>###<strong>10.</strong> 使用‘<strong>\\c</strong>‘選項</p><p>‘<strong>-e</strong>‘後面跟上‘\\c’會抑制輸出後面的字符並且最後不會換新行。</p><pre><code>$ echo -e &quot;Tecmint is a community \\cof Linux Nerds&quot; 

Tecmint is a community @tecmint:~$ 
</code></pre><p>###<strong>11.</strong> ‘<strong>-n</strong>‘會在echo完後不會輸出新行</p><pre><code>$ echo -n &quot;Tecmint is a community of Linux Nerds&quot; 
Tecmint is a community of Linux Nerds@tecmint:~/Documents$ 
</code></pre><p>###<strong>12.</strong> 使用‘<strong>\\a</strong>‘選項</p><p>‘<strong>-e</strong>‘後面跟上‘\\a’選項會聽到聲音警告。</p><pre><code>$ echo -e &quot;Tecmint is a community of \\aLinux Nerds&quot; 
Tecmint is a community of Linux Nerds
</code></pre><p><strong>注意：</strong> 在你開始前，請先檢查你的音量設置。</p><p>###<strong>13.</strong> 使用echo命令打印所有的文件和文件夾（ls命令的替代）</p><pre><code>$ echo * 

103.odt 103.pdf 104.odt 104.pdf 105.odt 105.pdf 106.odt 106.pdf 107.odt 107.pdf 108a.odt 108.odt 108.pdf 109.odt 109.pdf 110b.odt 110.odt 110.pdf 111.odt 111.pdf 112.odt 112.pdf 113.odt linux-headers-3.16.0-customkernel_1_amd64.deb linux-image-3.16.0-customkernel_1_amd64.deb network.jpeg 
</code></pre><p>###<strong>14.</strong> 打印製定的文件類型</p><p>比如，讓我們假設你想要打印所有的‘<strong>.jpeg</strong>‘文件，使用下面的命令。</p><pre><code>$ echo *.jpeg 

network.jpeg 
</code></pre><p>###<strong>15.</strong> echo可以使用重定向符來輸出到一個文件而不是標準輸出</p><pre><code>$ echo &quot;Test Page&quot; &gt; testpage 

## Check Content
avi@tecmint:~$ cat testpage 
Test Page 
</code></pre><h3 id="echo-選項列表" tabindex="-1">echo 選項列表 <a class="header-anchor" href="#echo-選項列表" aria-label="Permalink to “echo 選項列表”">​</a></h3>`,53)),t[14]||(t[14]=n("table",{border:"0",cellspacing:"0"},[n("colgroup",{width:"85"}),n("colgroup",{width:"271"}),n("tbody",null,[n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," 選項")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"},[n("b",null," 描述")])]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," -n")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 不輸出末尾的換行符。")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," -e")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 啓用反斜線轉義。")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\b")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 退格")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\\\")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 反斜線")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\n")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 新行")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\r")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 回車")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\t")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 水平製表符")]),n("tr",null,[n("td",{style:{border:"1px solid #000000"},align:"LEFT",height:"16"},[n("b",null," \\v")]),n("td",{style:{border:"1px solid #000000"},align:"LEFT"}," 垂直製表符")])])],-1)),t[15]||(t[15]=n("p",null,"就是這些了，不要忘記在下面留下你的反饋。",-1)),t[16]||(t[16]=n("hr",null,null,-1)),n("p",null,[t[1]||(t[1]=o("via: ",-1)),r(e,{href:"http://www.tecmint.com/echo-command-in-linux/"},{default:s(()=>[...t[0]||(t[0]=[o("http://www.tecmint.com/echo-command-in-linux/",-1)])]),_:1})]),n("p",null,[t[5]||(t[5]=o("作者：",-1)),r(e,{href:"http://www.tecmint.com/author/avishek/"},{default:s(()=>[...t[2]||(t[2]=[o("Avishek Kumar",-1)])]),_:1}),t[6]||(t[6]=o(" 譯者：",-1)),r(e,{href:"https://github.com/geekpi"},{default:s(()=>[...t[3]||(t[3]=[o("geekpi",-1)])]),_:1}),t[7]||(t[7]=o(" 校對：",-1)),r(e,{href:"https://github.com/wxy"},{default:s(()=>[...t[4]||(t[4]=[o("wxy",-1)])]),_:1})]),n("p",null,[t[10]||(t[10]=o("本文由 ",-1)),r(e,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[8]||(t[8]=[o("LCTT",-1)])]),_:1}),t[11]||(t[11]=o(" 原創翻譯，",-1)),r(e,{href:"http://linux.cn/"},{default:s(()=>[...t[9]||(t[9]=[o("Linux中國",-1)])]),_:1}),t[12]||(t[12]=o(" 榮譽推出",-1))])])}const y=i(g,[["render",a]]);export{b as __pageData,y as default};
