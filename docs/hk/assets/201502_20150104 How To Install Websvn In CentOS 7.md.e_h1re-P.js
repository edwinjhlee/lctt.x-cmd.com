import{_ as i,a0 as p,w as u,s as a,ao as l,I as e,a1 as s,A as r,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"在 CentOS 7中安裝Websvn | LCTT x X-CMD","titleTemplate":false,"description":"在 CentOS 7中安裝Websvn | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 CentOS 7中安裝Websvn | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 CentOS 7中安裝Websvn | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20150104 How To Install Websvn In CentOS 7","title":"在 CentOS 7中安裝Websvn","tag":"201502","desc":""},"relativePath":"201502/20150104 How To Install Websvn In CentOS 7.md","filePath":"[post].md"}'),d={name:"201502/20150104 How To Install Websvn In CentOS 7.md"};function b(m,t,f,v,w,g){const o=p("Link");return u(),a("div",null,[t[16]||(t[16]=l('<h1 id="在-centos-7中安裝websvn" tabindex="-1">在 CentOS 7中安裝Websvn <a class="header-anchor" href="#在-centos-7中安裝websvn" aria-label="Permalink to “在 CentOS 7中安裝Websvn”">​</a></h1><p><strong>WebSVN</strong>為你的Subversion提供了一個視圖，其設計用來對應Subversion的各種功能。你可以檢查任何文件或目錄的日誌，以及查看任何指定版本中所修改、添加或刪除過的文件列表。你也可以檢查同一文件兩個版本的不同之處，以便確切地查看某個特定的修訂版本的變化。</p><h3 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to “特性”">​</a></h3><p>WebSVN提供了以下這些特性：</p><ul><li>易於使用的界面；</li><li>可自定義的模板系統；</li><li>彩色文件列表；</li><li>過錯視圖；</li><li>日誌信息搜索；</li><li>支持RSS訂閲；</li></ul><h3 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to “安裝”">​</a></h3><p>我按以下鏈接來將Subversion安裝到CentOS 7。</p>',7)),e("ul",null,[e("li",null,[s(o,{href:"http://www.unixmen.com/install-subversion-centos-7/"},{default:r(()=>[...t[0]||(t[0]=[n("CentOS 7上如何安裝Subversion",-1)])]),_:1})])]),t[17]||(t[17]=l(`<p><strong>1 – 下載websvn到/var/www/html。</strong></p><pre><code>cd /var/www/html
wget http://websvn.tigris.org/files/documents/1380/49057/websvn-2.3.3.zip
</code></pre><p><strong>2 – 解壓zip包。</strong></p><pre><code>unzip websvn-2.3.3.zip
mv websvn-2.3.3 websvn
</code></pre><p><strong>3 – 安裝php到你的系統。</strong></p><pre><code>yum install php
</code></pre><p><strong>4 – 編輯web svn配置。</strong></p><pre><code>cd /var/www/html/websvn/include
cp distconfig.php config.php
vi config.php
</code></pre><hr><pre><code>// Configure these lines if your commands aren&#39;t on your path.
//
 $config-&gt;setSVNCommandPath(&#39;/usr/bin&#39;); // e.g. c:\\\\program files\\\\subversion\\\\bin
 $config-&gt;setDiffPath(&#39;/usr/bin&#39;);
</code></pre><hr><pre><code>// For syntax colouring, if option enabled...
 $config-&gt;setEnscriptPath(&#39;/usr/bin&#39;);
 $config-&gt;setSedPath(&#39;/bin&#39;);
</code></pre><hr><pre><code>// For delivered tarballs, if option enabled...
 $config-&gt;setTarPath(&#39;/bin&#39;);
</code></pre><hr><pre><code>// For delivered GZIP&#39;d files and tarballs, if option enabled...
 $config-&gt;setGZipPath(&#39;/bin&#39;);
</code></pre><hr><pre><code>//
 $config-&gt;parentPath(&#39;/svn/&#39;);
</code></pre><hr><pre><code>$extEnscript[&quot;.pl&quot;] = &quot;perl&quot;;
$extEnscript[&quot;.py&quot;] = &quot;python&quot;;
$extEnscript[&quot;.sql&quot;] = &quot;sql&quot;;
$extEnscript[&quot;.java&quot;] = &quot;java&quot;;
$extEnscript[&quot;.html&quot;] = &quot;html&quot;;
$extEnscript[&quot;.xml&quot;] = &quot;html&quot;;
$extEnscript[&quot;.thtml&quot;] = &quot;html&quot;;
$extEnscript[&quot;.tpl&quot;] = &quot;html&quot;;
$extEnscript[&quot;.sh&quot;] = &quot;bash&quot;;
~
</code></pre><p>保存並退出。</p>`,21)),e("p",null,[e("strong",null,[t[2]||(t[2]=n("6 – 重新加載apache並啓動websvn鏈接",-1)),s(o,{href:"http://ip/websvn%E3%80%82"},{default:r(()=>[...t[1]||(t[1]=[n("http://ip/websvn。",-1)])]),_:1})])]),t[18]||(t[18]=e("p",null,[e("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2015/01/websvn.png",alt:"websvn"})],-1)),t[19]||(t[19]=e("p",null,"一切搞定。",-1)),t[20]||(t[20]=e("hr",null,null,-1)),e("p",null,[t[4]||(t[4]=n("via: ",-1)),s(o,{href:"http://www.unixmen.com/install-websvn-centos-7/"},{default:r(()=>[...t[3]||(t[3]=[n("http://www.unixmen.com/install-websvn-centos-7/",-1)])]),_:1})]),e("p",null,[t[8]||(t[8]=n("作者：",-1)),s(o,{href:"http://www.unixmen.com/author/pirat9/"},{default:r(()=>[...t[5]||(t[5]=[n("M.el Khamlichi",-1)])]),_:1}),t[9]||(t[9]=n(" 譯者：",-1)),s(o,{href:"https://github.com/GOLinux"},{default:r(()=>[...t[6]||(t[6]=[n("GOLinux",-1)])]),_:1}),t[10]||(t[10]=n(" 校對：",-1)),s(o,{href:"https://github.com/wxy"},{default:r(()=>[...t[7]||(t[7]=[n("wxy",-1)])]),_:1})]),e("p",null,[t[13]||(t[13]=n("本文由 ",-1)),s(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[11]||(t[11]=[n("LCTT",-1)])]),_:1}),t[14]||(t[14]=n(" 原創翻譯，",-1)),s(o,{href:"http://linux.cn/"},{default:r(()=>[...t[12]||(t[12]=[n("Linux中國",-1)])]),_:1}),t[15]||(t[15]=n(" 榮譽推出",-1))]),t[21]||(t[21]=e("p",null,"[20]:",-1))])}const x=i(d,[["render",b]]);export{T as __pageData,x as default};
