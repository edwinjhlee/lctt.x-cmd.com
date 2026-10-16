import{_ as i,a0 as r,w as p,s as u,I as t,x as e,a1 as l,A as s,ao as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"如何在CentOS 7.0 安裝 Websvn | LCTT x X-CMD","titleTemplate":false,"description":"如何在CentOS 7.0 安裝 Websvn | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在CentOS 7.0 安裝 Websvn | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在CentOS 7.0 安裝 Websvn | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150202 How To Install Websvn for Subversion in CentOS 7.0","title":"如何在CentOS 7.0 安裝 Websvn","tag":"201503","desc":""},"relativePath":"201503/20150202 How To Install Websvn for Subversion in CentOS 7.0.md","filePath":"[post].md"}'),b={name:"201503/20150202 How To Install Websvn for Subversion in CentOS 7.0.md"};function d(w,n,f,v,m,g){const o=r("Link");return p(),u("div",null,[n[29]||(n[29]=t("h1",{id:"如何在centos-7-0-安裝-websvn",tabindex:"-1"},[e("如何在CentOS 7.0 安裝 Websvn "),t("a",{class:"header-anchor",href:"#如何在centos-7-0-安裝-websvn","aria-label":"Permalink to “如何在CentOS 7.0 安裝 Websvn”"},"​")],-1)),n[30]||(n[30]=t("p",null,"大家好，今天我們會在CentOS 7.0 上為 subversion（SVN）安裝Web 界面 WebSVN。（subverion 是 apache 的頂級項目，也稱為 Apache SVN 或 SVN）",-1)),n[31]||(n[31]=t("p",null,"WebSVN 將 Svbverion 的操作你的倉庫的各種功能通過 Web 界面提供出來。通過它，我們可以看到任何給定版本的任何文件或者目錄的日誌，並且可看到所有文件改動、添加、刪除的列表。我們同樣可以查看兩個版本間的差異來知道特定版本改動了什麼。",-1)),n[32]||(n[32]=t("h3",{id:"特性",tabindex:"-1"},[e("特性 "),t("a",{class:"header-anchor",href:"#特性","aria-label":"Permalink to “特性”"},"​")],-1)),n[33]||(n[33]=t("p",null,"WebSVN提供了下面這些特性:",-1)),t("ul",null,[n[1]||(n[1]=t("li",null,"易於使用的用户界面",-1)),n[2]||(n[2]=t("li",null,"可定製的模板系統",-1)),n[3]||(n[3]=t("li",null,"色彩化的文件列表",-1)),n[4]||(n[4]=t("li",null,"追溯視圖",-1)),n[5]||(n[5]=t("li",null,"日誌信息查詢",-1)),n[6]||(n[6]=t("li",null,"RSS支持",-1)),t("li",null,[l(o,{href:"http://www.websvn.info/features/"},{default:s(()=>[...n[0]||(n[0]=[e("更多",-1)])]),_:1})])]),n[34]||(n[34]=t("p",null,"由於其使用PHP寫成，WebSVN同樣易於移植和安裝。",-1)),t("p",null,[n[8]||(n[8]=e("現在我們將為Subverison安裝WebSVN。請確保你的服務器上已經安裝了 SVN。如果你還沒有安裝，你可以按",-1)),l(o,{href:"http://linoxide.com/linux-how-to/install-apache-svn-subversion-centos-7/"},{default:s(()=>[...n[7]||(n[7]=[e("本教程",-1)])]),_:1}),n[9]||(n[9]=e("安裝。",-1))]),n[35]||(n[35]=t("p",null,"安裝完SVN後，你需要以下幾步。",-1)),n[36]||(n[36]=t("h3",{id:"_1-下載-websvn",tabindex:"-1"},[e("1. 下載 WebSVN "),t("a",{class:"header-anchor",href:"#_1-下載-websvn","aria-label":"Permalink to “1. 下載 WebSVN”"},"​")],-1)),t("p",null,[n[11]||(n[11]=e("你可以從官方網站 ",-1)),l(o,{href:"http://www.websvn.info/download/"},{default:s(()=>[...n[10]||(n[10]=[e("http://www.websvn.info/download/",-1)])]),_:1}),n[12]||(n[12]=e(" 中下載 WebSVN。我們首先進入 /var/www/html/ 並在這裏下載安裝包。",-1))]),n[37]||(n[37]=a(`<pre><code>$ sudo -s
</code></pre><p><strong>請在shell或者終端中執行上面的命令，因為我們需要切換到root權限來對系統限制區域有訪問權。</strong></p><pre><code># cd /var/www/html
# wget http://websvn.tigris.org/files/documents/1380/49057/websvn-2.3.3.zip
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/01/downloading-websvn.png" alt="downloading websvn package"></p><p>這裏，我下載的是最新的2.3.3版本的 websvn。你可以從上面這個網站找到下載鏈接，用適合你的包的鏈接來替換上面的鏈接。</p><h3 id="_2-解壓下載的zip" tabindex="-1">2. 解壓下載的zip <a class="header-anchor" href="#_2-解壓下載的zip" aria-label="Permalink to “2. 解壓下載的zip”">​</a></h3><pre><code># unzip websvn-2.3.3.zip

# mv websvn-2.3.3 websvn
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/01/extracting-websvn.png" alt="extracting websvn"></p><h3 id="_3-安裝php" tabindex="-1">3. 安裝php <a class="header-anchor" href="#_3-安裝php" aria-label="Permalink to “3. 安裝php”">​</a></h3><pre><code># yum install php
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/01/yum-install-php.png" alt="yum install php"></p><h3 id="_4-編輯websvn配置" tabindex="-1">4. 編輯WebSVN配置 <a class="header-anchor" href="#_4-編輯websvn配置" aria-label="Permalink to “4. 編輯WebSVN配置”">​</a></h3><p>現在，我們需要拷貝位於 /var/www/html/websvn/include 的 distconfig.php 為 config.php，並且接着編輯該配置文件。</p><pre><code># cd /var/www/html/websvn/include

# cp distconfig.php config.php

# nano config.php
</code></pre><p>現在我們需要按如下改變文件。完成之後，請保存並退出。</p><pre><code>// Configure these lines if your commands aren&#39;t on your path.
//
 $config-&gt;setSVNCommandPath(&#39;/usr/bin&#39;); // e.g. c:\\\\program files\\\\subversion\\\\bin
 $config-&gt;setDiffPath(&#39;/usr/bin&#39;);

// For syntax colouring, if option enabled...
 $config-&gt;setEnscriptPath(&#39;/usr/bin&#39;);
 $config-&gt;setSedPath(&#39;/bin&#39;);

// For delivered tarballs, if option enabled...
 $config-&gt;setTarPath(&#39;/bin&#39;);

// For delivered GZIP&#39;d files and tarballs, if option enabled...
 $config-&gt;setGZipPath(&#39;/bin&#39;);

//
 $config-&gt;parentPath(&#39;/svn/&#39;);

$extEnscript[&quot;.pl&quot;] = &quot;perl&quot;;
$extEnscript[&quot;.py&quot;] = &quot;python&quot;;
$extEnscript[&quot;.sql&quot;] = &quot;sql&quot;;
$extEnscript[&quot;.java&quot;] = &quot;java&quot;;
$extEnscript[&quot;.html&quot;] = &quot;html&quot;;
$extEnscript[&quot;.xml&quot;] = &quot;html&quot;;
$extEnscript[&quot;.thtml&quot;] = &quot;html&quot;;
$extEnscript[&quot;.tpl&quot;] = &quot;html&quot;;
$extEnscript[&quot;.sh&quot;] = &quot;bash&quot;;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/01/config-file-websvn.png" alt="websvn config file"></p><h3 id="_5-啓動-websvn" tabindex="-1">5. 啓動 WebSVN <a class="header-anchor" href="#_5-啓動-websvn" aria-label="Permalink to “5. 啓動 WebSVN”">​</a></h3><p>現在，我們將近完成了。現在需要重啓Apache服務。你可以用下面的命令。</p><pre><code># systemctl restart httpd.service
</code></pre>`,20)),t("p",null,[n[14]||(n[14]=e("接着我們在瀏覽器中打開WebSVN，輸入 http:// IP地址/websvn ，或者你在本地的話，你可以輸入 ",-1)),l(o,{href:"http://localhost/websvn"},{default:s(()=>[...n[13]||(n[13]=[e("http://localhost/websvn",-1)])]),_:1}),n[15]||(n[15]=e(" 。",-1))]),n[38]||(n[38]=t("p",null,[t("img",{src:"http://blog.linoxide.com/wp-content/uploads/2015/01/websvn-success.png",alt:"websvn successfully installed"})],-1)),n[39]||(n[39]=t("p",null,[t("strong",null,"注意"),e(': 如果你遇到一個像"Unable to find "enscript" tool at location "/usr/bin/enscript"這樣的問題，那麼你需要使用“yum install enscript”安裝enscript來修復這個問題。')],-1)),n[40]||(n[40]=t("h3",{id:"總結",tabindex:"-1"},[e("總結 "),t("a",{class:"header-anchor",href:"#總結","aria-label":"Permalink to “總結”"},"​")],-1)),n[41]||(n[41]=t("p",null,"好了，我們已經在CentOS 7上完成WebSVN的安裝了。這個教程同樣適用於RHEL 7。WebSVN 提供了 Subverion 中的各種功能來查看你的倉庫。你可以看到任何給定版本的任何文件或者目錄的日誌，並且看到所有文件改動、添加、刪除的列表。",-1)),n[42]||(n[42]=t("p",null,"如果你有任何問題、評論、反饋請在下面的評論欄中留下，來讓我們知道該添加什麼和改進。謝謝！ 用用看吧。😃",-1)),n[43]||(n[43]=t("hr",null,null,-1)),t("p",null,[n[17]||(n[17]=e("via: ",-1)),l(o,{href:"http://linoxide.com/linux-how-to/install-websvn-subversion-centos-7/"},{default:s(()=>[...n[16]||(n[16]=[e("http://linoxide.com/linux-how-to/install-websvn-subversion-centos-7/",-1)])]),_:1})]),t("p",null,[n[21]||(n[21]=e("作者：",-1)),l(o,{href:"http://linoxide.com/author/arunp/"},{default:s(()=>[...n[18]||(n[18]=[e("Arun Pyasi",-1)])]),_:1}),n[22]||(n[22]=e(" 譯者：",-1)),l(o,{href:"https://github.com/geekpi"},{default:s(()=>[...n[19]||(n[19]=[e("geekpi",-1)])]),_:1}),n[23]||(n[23]=e(" 校對：",-1)),l(o,{href:"https://github.com/wxy"},{default:s(()=>[...n[20]||(n[20]=[e("wxy",-1)])]),_:1})]),t("p",null,[n[26]||(n[26]=e("本文由 ",-1)),l(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...n[24]||(n[24]=[e("LCTT",-1)])]),_:1}),n[27]||(n[27]=e(" 原創翻譯，",-1)),l(o,{href:"http://linux.cn/"},{default:s(()=>[...n[25]||(n[25]=[e("Linux中國",-1)])]),_:1}),n[28]||(n[28]=e(" 榮譽推出",-1))])])}const h=i(b,[["render",d]]);export{q as __pageData,h as default};
