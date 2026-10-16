import{_ as s,a0 as a,w as l,s as d,ao as i,I as n,x as t,a1 as p,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"十個最好的ZSH技巧 | LCTT x X-CMD","titleTemplate":false,"description":"十個最好的ZSH技巧 | LCTT (201309) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"十個最好的ZSH技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"十個最好的ZSH技巧 | LCTT (201309) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201309/Ten Great Zsh Tips","title":"十個最好的ZSH技巧","tag":"201309","desc":""},"relativePath":"201309/Ten Great Zsh Tips.md","filePath":"[post].md"}'),T={name:"201309/Ten Great Zsh Tips.md"};function m(h,e,c,f,u,$){const o=a("Link");return l(),d("div",null,[e[9]||(e[9]=i(`<h1 id="十個最好的zsh技巧" tabindex="-1">十個最好的ZSH技巧 <a class="header-anchor" href="#十個最好的zsh技巧" aria-label="Permalink to “十個最好的ZSH技巧”">​</a></h1><p>1: 使用 ** 作為下級目錄的通配符:</p><pre><code>$ ls **/*.pyc
foo.pyc bar.pyc lib/wibble.pyc
$ rm **/*.pyc
$ ls **/*.pyc
</code></pre><p>2: 在文件篩選中使用匹配模式:</p><pre><code>$ ls *.(py|sh)
</code></pre><p>3: 在文件篩選中使用修飾符，如：(@) 限制只匹配符號鏈接：</p><pre><code>$ ls -l *(@)
</code></pre><p>4: 使用製表符TAB來自動完成，如man的時候：</p><pre><code>$ man zsh[TAB]
</code></pre><p>5: 也可以用製表符來自動補全命令選項：</p><pre><code>$ python -[TAB]
</code></pre><p>6: 或者在kill的時候自動完成：</p><pre><code>$ kill Dock[TAB]
</code></pre><p>7: 在製表符自動補全時，可以使用光標鍵（上下左右等）：</p><pre><code>$ man zsh[TAB][DOWN][RIGHT][LEFT][UP]
</code></pre><p>8: 自動修改錯誤的輸入：</p><pre><code>$ pythn -V
zsh: correct &#39;pythn&#39; to &#39;python&#39; [nyae]? y
Python 2.7.1
</code></pre><p>9: 使用<strong>r</strong>來重複上一條命令，可以帶替換方式！</p><pre><code>$ touch foo.htm bar.htm
$ mv foo.htm foo.html
$ r foo=bar
mv bar.htm bar.html
</code></pre><p>10: 高可定製性的提示符，使用RPROMPT居然可以設置提示符在右邊！</p><pre><code>$ RPROMPT=&quot;%t&quot;
</code></pre>`,21)),n("p",null,[e[1]||(e[1]=t("via: ",-1)),p(o,{href:"http://blog.goosoftware.co.uk/2012/05/22/ten-great-zsh-tips/"},{default:r(()=>[...e[0]||(e[0]=[t("http://blog.goosoftware.co.uk/2012/05/22/ten-great-zsh-tips/",-1)])]),_:1})]),n("p",null,[e[4]||(e[4]=t("本文由 ",-1)),p(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[2]||(e[2]=[t("LCTT",-1)])]),_:1}),e[5]||(e[5]=t(" 原創翻譯，",-1)),p(o,{href:"http://linux.cn/portal.php"},{default:r(()=>[...e[3]||(e[3]=[t("Linux中國",-1)])]),_:1}),e[6]||(e[6]=t(" 榮譽推出",-1))]),n("p",null,[e[8]||(e[8]=t("譯者：冰雨玉潔 校對：",-1)),p(o,{href:"http://linux.cn/space/wxy"},{default:r(()=>[...e[7]||(e[7]=[t("wxy",-1)])]),_:1})])])}const g=s(T,[["render",m]]);export{x as __pageData,g as default};
