import{_ as l,a0 as e,w as i,s as u,I as a,x as n,a1 as o,A as t,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"用 Groovy 解析 JSON 配置文件 | LCTT x X-CMD","titleTemplate":false,"description":"用 Groovy 解析 JSON 配置文件 | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Groovy 解析 JSON 配置文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Groovy 解析 JSON 配置文件 | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20210630 Parse JSON configuration files with Groovy","title":"用 Groovy 解析 JSON 配置文件","tag":"202107","desc":""},"relativePath":"202107/20210630 Parse JSON configuration files with Groovy.md","filePath":"[post].md"}'),d={name:"202107/20210630 Parse JSON configuration files with Groovy.md"};function c(g,s,q,m,f,v){const p=e("Link");return i(),u("div",null,[s[46]||(s[46]=a("h1",{id:"用-groovy-解析-json-配置文件",tabindex:"-1"},[n("用 Groovy 解析 JSON 配置文件 "),a("a",{class:"header-anchor",href:"#用-groovy-解析-json-配置文件","aria-label":"Permalink to “用 Groovy 解析 JSON 配置文件”"},"​")],-1)),s[47]||(s[47]=a("blockquote",null,[a("p",null,"拋開關於是否使用 JSON 作為配置格式的爭論，只需學習如何用 Groovy 來解析它。")],-1)),s[48]||(s[48]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202107/12/232406vpp4qrv6ee5a3erz.jpg",alt:""})],-1)),s[49]||(s[49]=a("p",null,"應用程序通常包括某種類型的默認或“開箱即用”的狀態或配置，以及某種讓用户根據自己的需要定製配置的方式。",-1)),a("p",null,[s[4]||(s[4]=n("例如，",-1)),o(p,{href:"https://www.libreoffice.org/discover/writer/"},{default:t(()=>[...s[0]||(s[0]=[n("LibreOffice Writer",-1)])]),_:1}),s[5]||(s[5]=n(" 通過其菜單欄上的",-1)),s[6]||(s[6]=a("strong",null,"工具 > 選項",-1)),s[7]||(s[7]=n("，可以訪問諸如用户數據、字體、語言設置等（以及更多的）設置。一些應用程序（如 LibreOffice）提供了一個點選式的用户界面來管理這些設置。有些，像 ",-1)),o(p,{href:"https://gitlab.gnome.org/GNOME/tracker"},{default:t(()=>[...s[1]||(s[1]=[n("Tracker",-1)])]),_:1}),s[8]||(s[8]=n("（GNOME 的“任務”，用於索引文件）使用 XML 文件。還有一些，特別是基於 JavaScript 的應用，使用 JSON，儘管它有許多人抗議（例如，",-1)),o(p,{href:"https://www.lucidchart.com/techblog/2018/07/16/why-json-isnt-a-good-configuration-language/"},{default:t(()=>[...s[2]||(s[2]=[n("這位作者",-1)])]),_:1}),s[9]||(s[9]=n(" 和 ",-1)),o(p,{href:"https://medium.com/trabe/stop-using-json-config-files-ab9bc55d82fa"},{default:t(()=>[...s[3]||(s[3]=[n("這位其他作者",-1)])]),_:1}),s[10]||(s[10]=n("）。",-1))]),a("p",null,[s[12]||(s[12]=n("在這篇文章中，我將回避關於是否使用 JSON 作為配置文件格式的爭論，並解釋如何使用 ",-1)),o(p,{href:"https://groovy-lang.org/"},{default:t(()=>[...s[11]||(s[11]=[n("Groovy 編程語言",-1)])]),_:1}),s[13]||(s[13]=n(" 來解析這類信息。Groovy 以 Java 為基礎，但有一套不同的設計重點，使 Groovy 感覺更像 Python。",-1))]),s[50]||(s[50]=a("h3",{id:"安裝-groovy",tabindex:"-1"},[n("安裝 Groovy "),a("a",{class:"header-anchor",href:"#安裝-groovy","aria-label":"Permalink to “安裝 Groovy”"},"​")],-1)),a("p",null,[s[16]||(s[16]=n("由於 Groovy 是基於 Java 的，它也需要安裝 Java。你可能會在你的 Linux 發行版的軟件庫中找到最近的、合適的 Java 和 Groovy 版本。或者，你可以按照其網站上的 ",-1)),o(p,{href:"https://groovy.apache.org/download.html"},{default:t(()=>[...s[14]||(s[14]=[n("説明",-1)])]),_:1}),s[17]||(s[17]=n(" 安裝 Groovy。 Linux 用户的一個不錯的選擇是 ",-1)),o(p,{href:"https://sdkman.io/"},{default:t(()=>[...s[15]||(s[15]=[n("SDKMan",-1)])]),_:1}),s[18]||(s[18]=n("，你可以使用它來獲取 Java、Groovy 和許多其他相關工具的多個版本。 對於本文，我將使用我的發行版的 OpenJDK11 和 SDKMan 的 Groovy 3.0.7。",-1))]),s[51]||(s[51]=a("h3",{id:"演示的-json-配置文件",tabindex:"-1"},[n("演示的 JSON 配置文件 "),a("a",{class:"header-anchor",href:"#演示的-json-配置文件","aria-label":"Permalink to “演示的 JSON 配置文件”"},"​")],-1)),a("p",null,[s[20]||(s[20]=n("在這個演示中，我從 ",-1)),o(p,{href:"https://www.drupal.org/node/2008800"},{default:t(()=>[...s[19]||(s[19]=[n("Drupal",-1)])]),_:1}),s[21]||(s[21]=n(" 中截取了這個 JSON 文件，它是 Drupal CMS 使用的主要配置文件，並將其保存在文件 ",-1)),s[22]||(s[22]=a("code",null,"config.json",-1)),s[23]||(s[23]=n(" 中：",-1))]),s[52]||(s[52]=r(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span> &quot;vm&quot;: {</span></span>
<span class="line"><span>  &quot;ip&quot;: &quot;192.168.44.44&quot;,</span></span>
<span class="line"><span>  &quot;memory&quot;: &quot;1024&quot;,</span></span>
<span class="line"><span>  &quot;synced_folders&quot;: [</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>    &quot;host_path&quot;: &quot;data/&quot;,</span></span>
<span class="line"><span>    &quot;guest_path&quot;: &quot;/var/www&quot;,</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;default&quot;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;forwarded_ports&quot;: []</span></span>
<span class="line"><span> },</span></span>
<span class="line"><span> &quot;vdd&quot;: {</span></span>
<span class="line"><span>  &quot;sites&quot;: {</span></span>
<span class="line"><span>   &quot;drupal8&quot;: {</span></span>
<span class="line"><span>    &quot;account_name&quot;: &quot;root&quot;,</span></span>
<span class="line"><span>    &quot;account_pass&quot;: &quot;root&quot;,</span></span>
<span class="line"><span>    &quot;account_mail&quot;: &quot;box@example.com&quot;,</span></span>
<span class="line"><span>    &quot;site_name&quot;: &quot;Drupal 8&quot;,</span></span>
<span class="line"><span>    &quot;site_mail&quot;: &quot;box@example.com&quot;,</span></span>
<span class="line"><span>    &quot;vhost&quot;: {</span></span>
<span class="line"><span>     &quot;document_root&quot;: &quot;drupal8&quot;,</span></span>
<span class="line"><span>     &quot;url&quot;: &quot;drupal8.dev&quot;,</span></span>
<span class="line"><span>     &quot;alias&quot;: [&quot;www.drupal8.dev&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   &quot;drupal7&quot;: {</span></span>
<span class="line"><span>    &quot;account_name&quot;: &quot;root&quot;,</span></span>
<span class="line"><span>    &quot;account_pass&quot;: &quot;root&quot;,</span></span>
<span class="line"><span>    &quot;account_mail&quot;: &quot;box@example.com&quot;,</span></span>
<span class="line"><span>    &quot;site_name&quot;: &quot;Drupal 7&quot;,</span></span>
<span class="line"><span>    &quot;site_mail&quot;: &quot;box@example.com&quot;,</span></span>
<span class="line"><span>    &quot;vhost&quot;: {</span></span>
<span class="line"><span>     &quot;document_root&quot;: &quot;drupal7&quot;,</span></span>
<span class="line"><span>     &quot;url&quot;: &quot;drupal7.dev&quot;,</span></span>
<span class="line"><span>     &quot;alias&quot;: [&quot;www.drupal7.dev&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這是一個漂亮的、複雜的 JSON 文件，有幾層結構，如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;&gt;.vdd.sites.drupal8.account_name</span></span></code></pre></div><p>和一些列表，如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;&gt;.vm.synced_folders</span></span></code></pre></div><p>這裏，<code>&lt;&gt;</code> 代表未命名的頂層。讓我們看看 Groovy 是如何處理的。</p><h3 id="用-groovy-解析-json" tabindex="-1">用 Groovy 解析 JSON <a class="header-anchor" href="#用-groovy-解析-json" aria-label="Permalink to “用 Groovy 解析 JSON”">​</a></h3><p>Groovy 自帶的 <code>groovy.json</code> 包，裏面有各種很酷的東西。其中最好的部分是 <code>JsonSlurper</code> 類，它包括幾個 <code>parse()</code> 方法，可以將 JSON 轉換為 Groovy 的 <code>Map</code>，一種根據鍵值存儲的數據結構。</p><p>下面是一個簡短的 Groovy 程序，名為 <code>config1.groovy</code>，它創建了一個 <code>JsonSlurper</code> 實例，然後調用其中的 <code>parse()</code> 方法來解析文件中的 JSON，並將其轉換名為 <code>config</code> 的 <code>Map</code> 實例，最後將該 map 輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import groovy.json.JsonSlurper</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def jsonSlurper = new JsonSlurper()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def config = jsonSlurper.parse(new File(&#39;config.json&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>println &quot;config = $config&quot;</span></span></code></pre></div><p>在終端的命令列上運行這個程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovy config1.groovy</span></span>
<span class="line"><span>config = [vm:[ip:192.168.44.44, memory:1024, synced_folders:[[host_path:data/, guest_path:/var/www, type:default]], forwarded_ports:[]], vdd:[sites:[drupal8:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 8, site_mail:box@example.com, vhost:[document_root:drupal8, url:drupal8.dev, alias:[www.drupal8.dev]]], drupal7:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 7, site_mail:box@example.com, vhost:[document_root:drupal7, url:drupal7.dev, alias:[www.drupal7.dev]]]]]]</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>輸出顯示了一個有兩個鍵的頂層映射：<code>vm</code> 和 <code>vdd</code>。每個鍵都引用了它自己的值的映射。注意 <code>forwarded_ports</code> 鍵所引用的空列表。</p><p>這很容易，但它所做的只是把東西打印出來。你是如何獲得各種組件的呢？下面是另一個程序，顯示如何訪問存儲在 <code>config.vm.ip</code> 的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import groovy.json.JsonSlurper</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def jsonSlurper = new JsonSlurper()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def config = jsonSlurper.parse(new File(&#39;config.json&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>println &quot;config.vm.ip = \${config.vm.ip}&quot;</span></span></code></pre></div><p>運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovy config2.groovy</span></span>
<span class="line"><span>config.vm.ip = 192.168.44.44</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>是的，這也很容易。 這利用了 Groovy 速記，這意味着：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>config.vm.ip</span></span></code></pre></div><p>在 Groovy 中等同於：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>config[&#39;vm&#39;][&#39;ip&#39;]</span></span></code></pre></div><p>當 <code>config</code> 和 <code>config.vm</code> 都是 <code>Map</code> 的實例，並且都等同於在 Java 中的:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>config.get(&quot;vm&quot;).get(&quot;ip&quot;)</span></span></code></pre></div><p>僅僅是處理 JSON 就這麼多了。如果你想有一個標準的配置並讓用户覆蓋它呢？在這種情況下，你可能想在程序中硬編碼一個 JSON 配置，然後讀取用户配置並覆蓋任何標準配置的設置。</p><p>假設上面的配置是標準的，而用户只想覆蓋其中的一點，只想覆蓋 <code>vm</code> 結構中的 <code>ip</code> 和 <code>memory</code> 值，並把它放在 <code>userConfig.json</code> 文件中:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span> &quot;vm&quot;: {</span></span>
<span class="line"><span>  &quot;ip&quot;: &quot;201.201.201.201&quot;,</span></span>
<span class="line"><span>  &quot;memory&quot;: &quot;4096&quot;,</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以用這個程序來做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import groovy.json.JsonSlurper</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def jsonSlurper = new JsonSlurper()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用 parseText() 來解析一個字符串，而不是從文件中讀取。</span></span>
<span class="line"><span>// 這給了我們一個“標準配置”</span></span>
<span class="line"><span>def standardConfig = jsonSlurper.parseText(&quot;&quot;&quot;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> &quot;vm&quot;: {</span></span>
<span class="line"><span>  &quot;ip&quot;: &quot;192.168.44.44&quot;,</span></span>
<span class="line"><span>  &quot;memory&quot;: &quot;1024&quot;,</span></span>
<span class="line"><span>  &quot;synced_folders&quot;: [</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>    &quot;host_path&quot;: &quot;data/&quot;,</span></span>
<span class="line"><span>    &quot;guest_path&quot;: &quot;/var/www&quot;,</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;default&quot;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;forwarded_ports&quot;: []</span></span>
<span class="line"><span> },</span></span>
<span class="line"><span> &quot;vdd&quot;: {</span></span>
<span class="line"><span>  &quot;sites&quot;: {</span></span>
<span class="line"><span>   &quot;drupal8&quot;: {</span></span>
<span class="line"><span>    &quot;account_name&quot;: &quot;root&quot;,</span></span>
<span class="line"><span>    &quot;account_pass&quot;: &quot;root&quot;,</span></span>
<span class="line"><span>    &quot;account_mail&quot;: &quot;box@example.com&quot;,</span></span>
<span class="line"><span>    &quot;site_name&quot;: &quot;Drupal 8&quot;,</span></span>
<span class="line"><span>    &quot;site_mail&quot;: &quot;box@example.com&quot;,</span></span>
<span class="line"><span>    &quot;vhost&quot;: {</span></span>
<span class="line"><span>     &quot;document_root&quot;: &quot;drupal8&quot;,</span></span>
<span class="line"><span>     &quot;url&quot;: &quot;drupal8.dev&quot;,</span></span>
<span class="line"><span>     &quot;alias&quot;: [&quot;www.drupal8.dev&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   &quot;drupal7&quot;: {</span></span>
<span class="line"><span>    &quot;account_name&quot;: &quot;root&quot;,</span></span>
<span class="line"><span>    &quot;account_pass&quot;: &quot;root&quot;,</span></span>
<span class="line"><span>    &quot;account_mail&quot;: &quot;box@example.com&quot;,</span></span>
<span class="line"><span>    &quot;site_name&quot;: &quot;Drupal 7&quot;,</span></span>
<span class="line"><span>    &quot;site_mail&quot;: &quot;box@example.com&quot;,</span></span>
<span class="line"><span>    &quot;vhost&quot;: {</span></span>
<span class="line"><span>     &quot;document_root&quot;: &quot;drupal7&quot;,</span></span>
<span class="line"><span>     &quot;url&quot;: &quot;drupal7.dev&quot;,</span></span>
<span class="line"><span>     &quot;alias&quot;: [&quot;www.drupal7.dev&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&quot;&quot;&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 打印標準配置</span></span>
<span class="line"><span>println &quot;standardConfig = $standardConfig&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//讀入並解析用户配置信息</span></span>
<span class="line"><span>def userConfig = jsonSlurper.parse(new File(&#39;userConfig.json&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 打印出用户配置信息</span></span>
<span class="line"><span>println &quot;userConfig = $userConfig&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 一個將用户配置與標準配置合併的函數</span></span>
<span class="line"><span>def mergeMaps(Map input, Map merge) {</span></span>
<span class="line"><span>  merge.each { k, v -&amp;gt;</span></span>
<span class="line"><span>    if (v instanceof Map)</span></span>
<span class="line"><span>      mergeMaps(input[k], v)</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>      input[k] = v</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 合併配置並打印出修改後的標準配置</span></span>
<span class="line"><span>mergeMaps(standardConfig, userConfig)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>println &quot;modified standardConfig $standardConfig&quot;</span></span></code></pre></div><p>以下列方式運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovy config3.groovy</span></span>
<span class="line"><span>standardConfig = [vm:[ip:192.168.44.44, memory:1024, synced_folders:[[host_path:data/, guest_path:/var/www, type:default]], forwarded_ports:[]], vdd:[sites:[drupal8:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 8, site_mail:box@example.com, vhost:[document_root:drupal8, url:drupal8.dev, alias:[www.drupal8.dev]]], drupal7:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 7, site_mail:box@example.com, vhost:[document_root:drupal7, url:drupal7.dev, alias:[www.drupal7.dev]]]]]]</span></span>
<span class="line"><span>userConfig = [vm:[ip:201.201.201.201, memory:4096]]</span></span>
<span class="line"><span>modified standardConfig [vm:[ip:201.201.201.201, memory:4096, synced_folders:[[host_path:data/, guest_path:/var/www, type:default]], forwarded_ports:[]], vdd:[sites:[drupal8:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 8, site_mail:box@example.com, vhost:[document_root:drupal8, url:drupal8.dev, alias:[www.drupal8.dev]]], drupal7:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 7, site_mail:box@example.com, vhost:[document_root:drupal7, url:drupal7.dev, alias:[www.drupal7.dev]]]]]]</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>以 <code>modified standardConfig</code> 開頭的一行顯示，<code>vm.ip</code> and <code>vm.memory</code> 的值被覆蓋了。</p><p>眼尖的讀者會注意到，我沒有檢查畸形的 JSON，也沒有仔細確保用户的配置是有意義的（不創建新字段，提供合理的值，等等）。所以用這個遞歸方法來合併兩個映射在現實中可能並不那麼實用。</p><p>好吧，我必須為家庭作業留下 <em>一些</em> 東西，不是嗎？</p><h3 id="groovy-資源" tabindex="-1">Groovy 資源 <a class="header-anchor" href="#groovy-資源" aria-label="Permalink to “Groovy 資源”">​</a></h3>`,34)),a("p",null,[s[27]||(s[27]=n("Apache Groovy 網站有很多很棒的 ",-1)),o(p,{href:"http://groovy-lang.org/documentation.html"},{default:t(()=>[...s[24]||(s[24]=[n("文檔",-1)])]),_:1}),s[28]||(s[28]=n("。另一個很棒的 Groovy 資源是 ",-1)),o(p,{href:"https://blog.mrhaki.com/"},{default:t(()=>[...s[25]||(s[25]=[n("Mr. Haki",-1)])]),_:1}),s[29]||(s[29]=n("。學習 Groovy 的一個非常好的理由是繼續學習 ",-1)),o(p,{href:"https://grails.org/"},{default:t(()=>[...s[26]||(s[26]=[n("Grails",-1)])]),_:1}),s[30]||(s[30]=n("，它是一個非常高效的全棧 Web 框架，建立在 Hibernate、Spring Boot 和 Micronaut 等優秀組件之上。",-1))]),s[53]||(s[53]=a("hr",null,null,-1)),a("p",null,[s[32]||(s[32]=n("via: ",-1)),o(p,{href:"https://opensource.com/article/21/6/groovy-parse-json"},{default:t(()=>[...s[31]||(s[31]=[n("https://opensource.com/article/21/6/groovy-parse-json",-1)])]),_:1})]),a("p",null,[s[37]||(s[37]=n("作者：",-1)),o(p,{href:"https://opensource.com/users/clhermansen"},{default:t(()=>[...s[33]||(s[33]=[n("Chris Hermansen",-1)])]),_:1}),s[38]||(s[38]=n(" 選題：",-1)),o(p,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[34]||(s[34]=[n("lujun9972",-1)])]),_:1}),s[39]||(s[39]=n(" 譯者：",-1)),o(p,{href:"https://github.com/geekpi"},{default:t(()=>[...s[35]||(s[35]=[n("geekpi",-1)])]),_:1}),s[40]||(s[40]=n(" 校對：",-1)),o(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[36]||(s[36]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[43]||(s[43]=n("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[41]||(s[41]=[n("LCTT",-1)])]),_:1}),s[44]||(s[44]=n(" 原創編譯，",-1)),o(p,{href:"https://linux.cn/"},{default:t(()=>[...s[42]||(s[42]=[n("Linux中國",-1)])]),_:1}),s[45]||(s[45]=n(" 榮譽推出",-1))])])}const y=l(d,[["render",c]]);export{k as __pageData,y as default};
