import{_ as a,a0 as d,w as p,s,ao as c,I as r,x as t,a1 as n,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const D=JSON.parse('{"title":"如何在Linux命令列下查詢字典？ | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux命令列下查詢字典？ | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux命令列下查詢字典？ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux命令列下查詢字典？ | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/How To Look Up Dictionary Definitions Via Terminal","title":"如何在Linux命令列下查詢字典？","tag":"201405","desc":""},"relativePath":"201405/How To Look Up Dictionary Definitions Via Terminal.md","filePath":"[post].md"}'),l={name:"201405/How To Look Up Dictionary Definitions Via Terminal.md"};function u(g,e,f,m,T,x){const i=d("Link");return p(),s("div",null,[e[11]||(e[11]=c(`<h1 id="如何在linux命令列下查詢字典" tabindex="-1">如何在Linux命令列下查詢字典？ <a class="header-anchor" href="#如何在linux命令列下查詢字典" aria-label="Permalink to “如何在Linux命令列下查詢字典？”">​</a></h1><p>大多數人在遇到他們不熟悉的單詞時會查詢google。或者他們用一個最喜歡的在線字典來提供答案。當你在沒有網絡連接的時候怎麼辦？或者你只有一個古老的Linux發行版且你沒有GUI界面？你需要離線查找的話，這裏有一個好的方法。</p><p>首先你需要本地設置dictd。<strong>dictd</strong> 是一個字典資料庫服務器。它允許你訪問在線字典。但是等一下，我們不是要離線使用麼？這是為什麼我們要將其安裝到本地的原因。它帶有一個命令列客户端。</p><p>要在Ubuntu或者Debian上安裝你要輸入：</p><pre><code>$ sudo apt-get install dictd
</code></pre><p>這個很簡單。現在你需要安裝用的字典。安裝完每個字典插件後dictd都會自動重新加載它的資料庫。讓我們來安裝英語字典和英語同義詞詞典。</p><p>輸入：</p><pre><code>$ sudo apt-get install dict-gcide
$ sudo apt-get  install dict-moby-thesaurus
</code></pre><p>如果你希望查詢其他可以查詢的語言，你可以輸入：</p><pre><code>$ sudo apt-cache search “dict package”
</code></pre><p>這會列出下面這樣的：</p><pre><code>dict-freedict-eng-ara - Dict package for English-Arabic Freedict dictionary
dict-freedict-eng-cro - Dict package for English-Croatian Freedict dictionary
dict-freedict-eng-cze - Dict package for English-Czech Freedict dictionary
dict-freedict-eng-deu - Dict package for English-German Freedict dictionary
dict-freedict-eng-fra - Dict package for English-French Freedict dictionary
</code></pre><p>現在你已成功安裝dictd了，之後你就可以查找字典了。</p><p>首先，讓我們檢查一下dictd服務是否在運行並且安裝了什麼資料庫：</p><pre><code>$ dict -I
</code></pre><p>示例輸出：</p><pre><code>dictd 1.12.0/rf on Linux 3.2.0-29-generic-pae
On my_host: up 95.000, 2 forks (75.8/hour)

Database      Headwords         Index          Data  Uncompressed
gcide              203645       3859 kB         12 MB         38 MB
moby-thesaurus      30263        528 kB         10 MB         28 MB
</code></pre><p>為了查詢一個單詞，你可以指定要查詢的字典。讓我們查詢一下English one字典（gcid）：</p><pre><code>$ dict -d gcide [你要查的單詞]
</code></pre><p>如果你不使用<strong>-d</strong> 參數，dictd會搜尋所有的安裝字典並返回匹配的結果。</p><hr>`,21)),r("p",null,[e[1]||(e[1]=t("via: ",-1)),n(i,{href:"http://www.unixmen.com/look-dictionary-definitions-via-terminal/"},{default:o(()=>[...e[0]||(e[0]=[t("http://www.unixmen.com/look-dictionary-definitions-via-terminal/",-1)])]),_:1})]),r("p",null,[e[4]||(e[4]=t("譯者：",-1)),n(i,{href:"https://github.com/geekpi"},{default:o(()=>[...e[2]||(e[2]=[t("geekpi",-1)])]),_:1}),e[5]||(e[5]=t(" 校對：",-1)),n(i,{href:"https://github.com/wxy"},{default:o(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[8]||(e[8]=t("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原創翻譯，",-1)),n(i,{href:"http://linux.cn/"},{default:o(()=>[...e[7]||(e[7]=[t("Linux中國",-1)])]),_:1}),e[10]||(e[10]=t(" 榮譽推出",-1))])])}const C=a(l,[["render",u]]);export{D as __pageData,C as default};
