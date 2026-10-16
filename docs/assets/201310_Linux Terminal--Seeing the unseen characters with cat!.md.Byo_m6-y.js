import{_ as s,a0 as o,w as p,s as l,ao as m,I as r,x as e,a1 as i,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const $=JSON.parse('{"title":"Linux终端：用cat命令查看不可见字符 | LCTT x X-CMD","titleTemplate":false,"description":"Linux终端：用cat命令查看不可见字符 | LCTT (201310) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux终端：用cat命令查看不可见字符 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux终端：用cat命令查看不可见字符 | LCTT (201310) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201310/Linux Terminal--Seeing the unseen characters with cat!","title":"Linux终端：用cat命令查看不可见字符","tag":"201310","desc":""},"relativePath":"201310/Linux Terminal--Seeing the unseen characters with cat!.md","filePath":"[post].md"}'),g={name:"201310/Linux Terminal--Seeing the unseen characters with cat!.md"};function u(c,t,d,x,T,L){const n=o("Link");return p(),l("div",null,[t[11]||(t[11]=m(`<h1 id="linux终端-用cat命令查看不可见字符" tabindex="-1">Linux终端：用cat命令查看不可见字符 <a class="header-anchor" href="#linux终端-用cat命令查看不可见字符" aria-label="Permalink to “Linux终端：用cat命令查看不可见字符”">​</a></h1><p>时常，某个程序或软件并没有语法错误，并且你检查它的相关内容也确实没有发现问题。这是因为你用普通文本编辑器软件来查看的时候，有许多字符没有显示出来，但在终端使用cat命令可以很容易地检测出是否存在这些字符。</p><p>首先，我们创建一个简单的文本文件，写入一些特殊字符。打开终端，运行命令：</p><pre><code>printf &#39;testing\\012\\011\\011testing\\014\\010\\012more testing\\012\\011\\000\\013\\000even more testing\\012\\011\\011\\011\\012&#39; &gt; /tmp/testing.txt
</code></pre><p>现在用不同的编辑器软件打开，显示的结果会不同。用简单的cat打开将显示：</p><pre><code>$ cat /tmp/testing.txt 
testing
		testing
 
more testing
 
even more testing
</code></pre><p>如果用nano或者vim打开，将会看到：</p><pre><code>testing
            testing^L^H

more testing
    ^@^K^@even more testing
</code></pre><p>现在我们给cat加上一些选项参数，以便能显示出特殊字符来。</p><p>###用cat -T命令来显示TAB键的字符^I</p><pre><code>cat -T /tmp/testing.txt
testing
^I^Itesting
 
more testing
^I
  even more testing
^I^I^I
</code></pre><p>###用cat -E命令来显示行尾的结束字符$</p><pre><code>$ cat -E /tmp/testing.txt
testing$
		testing
  $
more testing$
 
even more testing$
			$
</code></pre><p>###用简单的cat -A命令就可以显示所有不可见的字符：</p><pre><code>$ cat -A /tmp/testing.txt
testing$
^I^Itesting^L^H$
more testing$
^I^@^K^@even more testing$
^I^I^I$
</code></pre><hr>`,16)),r("p",null,[t[1]||(t[1]=e("via: ",-1)),i(n,{href:"http://linuxaria.com/pills/linux-terminal-seeing-the-unseen-characters-with-cat?lang=en#more-7645"},{default:a(()=>[...t[0]||(t[0]=[e("http://linuxaria.com/pills/linux-terminal-seeing-the-unseen-characters-with-cat?lang=en#more-7645",-1)])]),_:1})]),r("p",null,[t[4]||(t[4]=e("本文由 ",-1)),i(n,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[2]||(t[2]=[e("LCTT",-1)])]),_:1}),t[5]||(t[5]=e(" 原创翻译，",-1)),i(n,{href:"http://linux.cn/"},{default:a(()=>[...t[3]||(t[3]=[e("Linux中国",-1)])]),_:1}),t[6]||(t[6]=e(" 荣誉推出",-1))]),r("p",null,[t[9]||(t[9]=e("译者：",-1)),i(n,{href:"https://github.com/runningwater"},{default:a(()=>[...t[7]||(t[7]=[e("runningwater",-1)])]),_:1}),t[10]||(t[10]=e(" 校对：",-1)),i(n,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...t[8]||(t[8]=[e("Caroline",-1)])]),_:1})])])}const C=s(g,[["render",u]]);export{$ as __pageData,C as default};
