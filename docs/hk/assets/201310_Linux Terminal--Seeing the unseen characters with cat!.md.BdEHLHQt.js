import{_ as s,a0 as o,w as p,s as l,ao as m,I as r,x as e,a1 as i,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const $=JSON.parse('{"title":"Linux終端：用cat命令查看不可見字符 | LCTT x X-CMD","titleTemplate":false,"description":"Linux終端：用cat命令查看不可見字符 | LCTT (201310) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux終端：用cat命令查看不可見字符 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux終端：用cat命令查看不可見字符 | LCTT (201310) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201310/Linux Terminal--Seeing the unseen characters with cat!","title":"Linux終端：用cat命令查看不可見字符","tag":"201310","desc":""},"relativePath":"201310/Linux Terminal--Seeing the unseen characters with cat!.md","filePath":"[post].md"}'),g={name:"201310/Linux Terminal--Seeing the unseen characters with cat!.md"};function u(c,t,d,x,T,L){const n=o("Link");return p(),l("div",null,[t[11]||(t[11]=m(`<h1 id="linux終端-用cat命令查看不可見字符" tabindex="-1">Linux終端：用cat命令查看不可見字符 <a class="header-anchor" href="#linux終端-用cat命令查看不可見字符" aria-label="Permalink to “Linux終端：用cat命令查看不可見字符”">​</a></h1><p>時常，某個程序或軟件並沒有語法錯誤，並且你檢查它的相關內容也確實沒有發現問題。這是因為你用普通文本編輯器軟件來查看的時候，有許多字符沒有顯示出來，但在終端使用cat命令可以很容易地檢測出是否存在這些字符。</p><p>首先，我們創建一個簡單的文本文件，寫入一些特殊字符。打開終端，運行命令：</p><pre><code>printf &#39;testing\\012\\011\\011testing\\014\\010\\012more testing\\012\\011\\000\\013\\000even more testing\\012\\011\\011\\011\\012&#39; &gt; /tmp/testing.txt
</code></pre><p>現在用不同的編輯器軟件打開，顯示的結果會不同。用簡單的cat打開將顯示：</p><pre><code>$ cat /tmp/testing.txt 
testing
		testing
 
more testing
 
even more testing
</code></pre><p>如果用nano或者vim打開，將會看到：</p><pre><code>testing
            testing^L^H

more testing
    ^@^K^@even more testing
</code></pre><p>現在我們給cat加上一些選項參數，以便能顯示出特殊字符來。</p><p>###用cat -T命令來顯示TAB鍵的字符^I</p><pre><code>cat -T /tmp/testing.txt
testing
^I^Itesting
 
more testing
^I
  even more testing
^I^I^I
</code></pre><p>###用cat -E命令來顯示行尾的結束字符$</p><pre><code>$ cat -E /tmp/testing.txt
testing$
		testing
  $
more testing$
 
even more testing$
			$
</code></pre><p>###用簡單的cat -A命令就可以顯示所有不可見的字符：</p><pre><code>$ cat -A /tmp/testing.txt
testing$
^I^Itesting^L^H$
more testing$
^I^@^K^@even more testing$
^I^I^I$
</code></pre><hr>`,16)),r("p",null,[t[1]||(t[1]=e("via: ",-1)),i(n,{href:"http://linuxaria.com/pills/linux-terminal-seeing-the-unseen-characters-with-cat?lang=en#more-7645"},{default:a(()=>[...t[0]||(t[0]=[e("http://linuxaria.com/pills/linux-terminal-seeing-the-unseen-characters-with-cat?lang=en#more-7645",-1)])]),_:1})]),r("p",null,[t[4]||(t[4]=e("本文由 ",-1)),i(n,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[2]||(t[2]=[e("LCTT",-1)])]),_:1}),t[5]||(t[5]=e(" 原創翻譯，",-1)),i(n,{href:"http://linux.cn/"},{default:a(()=>[...t[3]||(t[3]=[e("Linux中國",-1)])]),_:1}),t[6]||(t[6]=e(" 榮譽推出",-1))]),r("p",null,[t[9]||(t[9]=e("譯者：",-1)),i(n,{href:"https://github.com/runningwater"},{default:a(()=>[...t[7]||(t[7]=[e("runningwater",-1)])]),_:1}),t[10]||(t[10]=e(" 校對：",-1)),i(n,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...t[8]||(t[8]=[e("Caroline",-1)])]),_:1})])])}const C=s(g,[["render",u]]);export{$ as __pageData,C as default};
