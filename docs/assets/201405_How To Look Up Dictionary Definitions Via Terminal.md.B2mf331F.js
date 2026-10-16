import{_ as a,a0 as d,w as p,s,ao as c,I as r,x as t,a1 as n,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const D=JSON.parse('{"title":"如何在Linux命令行下查询字典？ | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux命令行下查询字典？ | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux命令行下查询字典？ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux命令行下查询字典？ | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/How To Look Up Dictionary Definitions Via Terminal","title":"如何在Linux命令行下查询字典？","tag":"201405","desc":""},"relativePath":"201405/How To Look Up Dictionary Definitions Via Terminal.md","filePath":"[post].md"}'),l={name:"201405/How To Look Up Dictionary Definitions Via Terminal.md"};function u(g,e,f,m,T,x){const i=d("Link");return p(),s("div",null,[e[11]||(e[11]=c(`<h1 id="如何在linux命令行下查询字典" tabindex="-1">如何在Linux命令行下查询字典？ <a class="header-anchor" href="#如何在linux命令行下查询字典" aria-label="Permalink to “如何在Linux命令行下查询字典？”">​</a></h1><p>大多数人在遇到他们不熟悉的单词时会查询google。或者他们用一个最喜欢的在线字典来提供答案。当你在没有网络连接的时候怎么办？或者你只有一个古老的Linux发行版且你没有GUI界面？你需要离线查找的话，这里有一个好的方法。</p><p>首先你需要本地设置dictd。<strong>dictd</strong> 是一个字典数据库服务器。它允许你访问在线字典。但是等一下，我们不是要离线使用么？这是为什么我们要将其安装到本地的原因。它带有一个命令行客户端。</p><p>要在Ubuntu或者Debian上安装你要输入：</p><pre><code>$ sudo apt-get install dictd
</code></pre><p>这个很简单。现在你需要安装用的字典。安装完每个字典插件后dictd都会自动重新加载它的数据库。让我们来安装英语字典和英语同义词词典。</p><p>输入：</p><pre><code>$ sudo apt-get install dict-gcide
$ sudo apt-get  install dict-moby-thesaurus
</code></pre><p>如果你希望查询其他可以查询的语言，你可以输入：</p><pre><code>$ sudo apt-cache search “dict package”
</code></pre><p>这会列出下面这样的：</p><pre><code>dict-freedict-eng-ara - Dict package for English-Arabic Freedict dictionary
dict-freedict-eng-cro - Dict package for English-Croatian Freedict dictionary
dict-freedict-eng-cze - Dict package for English-Czech Freedict dictionary
dict-freedict-eng-deu - Dict package for English-German Freedict dictionary
dict-freedict-eng-fra - Dict package for English-French Freedict dictionary
</code></pre><p>现在你已成功安装dictd了，之后你就可以查找字典了。</p><p>首先，让我们检查一下dictd服务是否在运行并且安装了什么数据库：</p><pre><code>$ dict -I
</code></pre><p>示例输出：</p><pre><code>dictd 1.12.0/rf on Linux 3.2.0-29-generic-pae
On my_host: up 95.000, 2 forks (75.8/hour)

Database      Headwords         Index          Data  Uncompressed
gcide              203645       3859 kB         12 MB         38 MB
moby-thesaurus      30263        528 kB         10 MB         28 MB
</code></pre><p>为了查询一个单词，你可以指定要查询的字典。让我们查询一下English one字典（gcid）：</p><pre><code>$ dict -d gcide [你要查的单词]
</code></pre><p>如果你不使用<strong>-d</strong> 参数，dictd会搜寻所有的安装字典并返回匹配的结果。</p><hr>`,21)),r("p",null,[e[1]||(e[1]=t("via: ",-1)),n(i,{href:"http://www.unixmen.com/look-dictionary-definitions-via-terminal/"},{default:o(()=>[...e[0]||(e[0]=[t("http://www.unixmen.com/look-dictionary-definitions-via-terminal/",-1)])]),_:1})]),r("p",null,[e[4]||(e[4]=t("译者：",-1)),n(i,{href:"https://github.com/geekpi"},{default:o(()=>[...e[2]||(e[2]=[t("geekpi",-1)])]),_:1}),e[5]||(e[5]=t(" 校对：",-1)),n(i,{href:"https://github.com/wxy"},{default:o(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[8]||(e[8]=t("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原创翻译，",-1)),n(i,{href:"http://linux.cn/"},{default:o(()=>[...e[7]||(e[7]=[t("Linux中国",-1)])]),_:1}),e[10]||(e[10]=t(" 荣誉推出",-1))])])}const C=a(l,[["render",u]]);export{D as __pageData,C as default};
