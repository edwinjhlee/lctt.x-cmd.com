import{_ as i,a0 as p,w as u,s as a,ao as l,I as e,a1 as s,A as r,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"在 CentOS 7中安装Websvn | LCTT x X-CMD","titleTemplate":false,"description":"在 CentOS 7中安装Websvn | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 CentOS 7中安装Websvn | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 CentOS 7中安装Websvn | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20150104 How To Install Websvn In CentOS 7","title":"在 CentOS 7中安装Websvn","tag":"201502","desc":""},"relativePath":"201502/20150104 How To Install Websvn In CentOS 7.md","filePath":"[post].md"}'),d={name:"201502/20150104 How To Install Websvn In CentOS 7.md"};function b(m,t,f,v,w,g){const o=p("Link");return u(),a("div",null,[t[16]||(t[16]=l('<h1 id="在-centos-7中安装websvn" tabindex="-1">在 CentOS 7中安装Websvn <a class="header-anchor" href="#在-centos-7中安装websvn" aria-label="Permalink to “在 CentOS 7中安装Websvn”">​</a></h1><p><strong>WebSVN</strong>为你的Subversion提供了一个视图，其设计用来对应Subversion的各种功能。你可以检查任何文件或目录的日志，以及查看任何指定版本中所修改、添加或删除过的文件列表。你也可以检查同一文件两个版本的不同之处，以便确切地查看某个特定的修订版本的变化。</p><h3 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to “特性”">​</a></h3><p>WebSVN提供了以下这些特性：</p><ul><li>易于使用的界面；</li><li>可自定义的模板系统；</li><li>彩色文件列表；</li><li>过错视图；</li><li>日志信息搜索；</li><li>支持RSS订阅；</li></ul><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h3><p>我按以下链接来将Subversion安装到CentOS 7。</p>',7)),e("ul",null,[e("li",null,[s(o,{href:"http://www.unixmen.com/install-subversion-centos-7/"},{default:r(()=>[...t[0]||(t[0]=[n("CentOS 7上如何安装Subversion",-1)])]),_:1})])]),t[17]||(t[17]=l(`<p><strong>1 – 下载websvn到/var/www/html。</strong></p><pre><code>cd /var/www/html
wget http://websvn.tigris.org/files/documents/1380/49057/websvn-2.3.3.zip
</code></pre><p><strong>2 – 解压zip包。</strong></p><pre><code>unzip websvn-2.3.3.zip
mv websvn-2.3.3 websvn
</code></pre><p><strong>3 – 安装php到你的系统。</strong></p><pre><code>yum install php
</code></pre><p><strong>4 – 编辑web svn配置。</strong></p><pre><code>cd /var/www/html/websvn/include
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
</code></pre><p>保存并退出。</p>`,21)),e("p",null,[e("strong",null,[t[2]||(t[2]=n("6 – 重新加载apache并启动websvn链接",-1)),s(o,{href:"http://ip/websvn%E3%80%82"},{default:r(()=>[...t[1]||(t[1]=[n("http://ip/websvn。",-1)])]),_:1})])]),t[18]||(t[18]=e("p",null,[e("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2015/01/websvn.png",alt:"websvn"})],-1)),t[19]||(t[19]=e("p",null,"一切搞定。",-1)),t[20]||(t[20]=e("hr",null,null,-1)),e("p",null,[t[4]||(t[4]=n("via: ",-1)),s(o,{href:"http://www.unixmen.com/install-websvn-centos-7/"},{default:r(()=>[...t[3]||(t[3]=[n("http://www.unixmen.com/install-websvn-centos-7/",-1)])]),_:1})]),e("p",null,[t[8]||(t[8]=n("作者：",-1)),s(o,{href:"http://www.unixmen.com/author/pirat9/"},{default:r(()=>[...t[5]||(t[5]=[n("M.el Khamlichi",-1)])]),_:1}),t[9]||(t[9]=n(" 译者：",-1)),s(o,{href:"https://github.com/GOLinux"},{default:r(()=>[...t[6]||(t[6]=[n("GOLinux",-1)])]),_:1}),t[10]||(t[10]=n(" 校对：",-1)),s(o,{href:"https://github.com/wxy"},{default:r(()=>[...t[7]||(t[7]=[n("wxy",-1)])]),_:1})]),e("p",null,[t[13]||(t[13]=n("本文由 ",-1)),s(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[11]||(t[11]=[n("LCTT",-1)])]),_:1}),t[14]||(t[14]=n(" 原创翻译，",-1)),s(o,{href:"http://linux.cn/"},{default:r(()=>[...t[12]||(t[12]=[n("Linux中国",-1)])]),_:1}),t[15]||(t[15]=n(" 荣誉推出",-1))]),t[21]||(t[21]=e("p",null,"[20]:",-1))])}const x=i(d,[["render",b]]);export{T as __pageData,x as default};
