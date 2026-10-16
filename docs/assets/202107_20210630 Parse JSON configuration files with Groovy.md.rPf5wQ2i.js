import{_ as l,a0 as e,w as i,s as u,I as a,x as n,a1 as o,A as t,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"用 Groovy 解析 JSON 配置文件 | LCTT x X-CMD","titleTemplate":false,"description":"用 Groovy 解析 JSON 配置文件 | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Groovy 解析 JSON 配置文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Groovy 解析 JSON 配置文件 | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20210630 Parse JSON configuration files with Groovy","title":"用 Groovy 解析 JSON 配置文件","tag":"202107","desc":""},"relativePath":"202107/20210630 Parse JSON configuration files with Groovy.md","filePath":"[post].md"}'),d={name:"202107/20210630 Parse JSON configuration files with Groovy.md"};function c(g,s,q,m,f,v){const p=e("Link");return i(),u("div",null,[s[46]||(s[46]=a("h1",{id:"用-groovy-解析-json-配置文件",tabindex:"-1"},[n("用 Groovy 解析 JSON 配置文件 "),a("a",{class:"header-anchor",href:"#用-groovy-解析-json-配置文件","aria-label":"Permalink to “用 Groovy 解析 JSON 配置文件”"},"​")],-1)),s[47]||(s[47]=a("blockquote",null,[a("p",null,"抛开关于是否使用 JSON 作为配置格式的争论，只需学习如何用 Groovy 来解析它。")],-1)),s[48]||(s[48]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202107/12/232406vpp4qrv6ee5a3erz.jpg",alt:""})],-1)),s[49]||(s[49]=a("p",null,"应用程序通常包括某种类型的默认或“开箱即用”的状态或配置，以及某种让用户根据自己的需要定制配置的方式。",-1)),a("p",null,[s[4]||(s[4]=n("例如，",-1)),o(p,{href:"https://www.libreoffice.org/discover/writer/"},{default:t(()=>[...s[0]||(s[0]=[n("LibreOffice Writer",-1)])]),_:1}),s[5]||(s[5]=n(" 通过其菜单栏上的",-1)),s[6]||(s[6]=a("strong",null,"工具 > 选项",-1)),s[7]||(s[7]=n("，可以访问诸如用户数据、字体、语言设置等（以及更多的）设置。一些应用程序（如 LibreOffice）提供了一个点选式的用户界面来管理这些设置。有些，像 ",-1)),o(p,{href:"https://gitlab.gnome.org/GNOME/tracker"},{default:t(()=>[...s[1]||(s[1]=[n("Tracker",-1)])]),_:1}),s[8]||(s[8]=n("（GNOME 的“任务”，用于索引文件）使用 XML 文件。还有一些，特别是基于 JavaScript 的应用，使用 JSON，尽管它有许多人抗议（例如，",-1)),o(p,{href:"https://www.lucidchart.com/techblog/2018/07/16/why-json-isnt-a-good-configuration-language/"},{default:t(()=>[...s[2]||(s[2]=[n("这位作者",-1)])]),_:1}),s[9]||(s[9]=n(" 和 ",-1)),o(p,{href:"https://medium.com/trabe/stop-using-json-config-files-ab9bc55d82fa"},{default:t(()=>[...s[3]||(s[3]=[n("这位其他作者",-1)])]),_:1}),s[10]||(s[10]=n("）。",-1))]),a("p",null,[s[12]||(s[12]=n("在这篇文章中，我将回避关于是否使用 JSON 作为配置文件格式的争论，并解释如何使用 ",-1)),o(p,{href:"https://groovy-lang.org/"},{default:t(()=>[...s[11]||(s[11]=[n("Groovy 编程语言",-1)])]),_:1}),s[13]||(s[13]=n(" 来解析这类信息。Groovy 以 Java 为基础，但有一套不同的设计重点，使 Groovy 感觉更像 Python。",-1))]),s[50]||(s[50]=a("h3",{id:"安装-groovy",tabindex:"-1"},[n("安装 Groovy "),a("a",{class:"header-anchor",href:"#安装-groovy","aria-label":"Permalink to “安装 Groovy”"},"​")],-1)),a("p",null,[s[16]||(s[16]=n("由于 Groovy 是基于 Java 的，它也需要安装 Java。你可能会在你的 Linux 发行版的软件库中找到最近的、合适的 Java 和 Groovy 版本。或者，你可以按照其网站上的 ",-1)),o(p,{href:"https://groovy.apache.org/download.html"},{default:t(()=>[...s[14]||(s[14]=[n("说明",-1)])]),_:1}),s[17]||(s[17]=n(" 安装 Groovy。 Linux 用户的一个不错的选择是 ",-1)),o(p,{href:"https://sdkman.io/"},{default:t(()=>[...s[15]||(s[15]=[n("SDKMan",-1)])]),_:1}),s[18]||(s[18]=n("，你可以使用它来获取 Java、Groovy 和许多其他相关工具的多个版本。 对于本文，我将使用我的发行版的 OpenJDK11 和 SDKMan 的 Groovy 3.0.7。",-1))]),s[51]||(s[51]=a("h3",{id:"演示的-json-配置文件",tabindex:"-1"},[n("演示的 JSON 配置文件 "),a("a",{class:"header-anchor",href:"#演示的-json-配置文件","aria-label":"Permalink to “演示的 JSON 配置文件”"},"​")],-1)),a("p",null,[s[20]||(s[20]=n("在这个演示中，我从 ",-1)),o(p,{href:"https://www.drupal.org/node/2008800"},{default:t(()=>[...s[19]||(s[19]=[n("Drupal",-1)])]),_:1}),s[21]||(s[21]=n(" 中截取了这个 JSON 文件，它是 Drupal CMS 使用的主要配置文件，并将其保存在文件 ",-1)),s[22]||(s[22]=a("code",null,"config.json",-1)),s[23]||(s[23]=n(" 中：",-1))]),s[52]||(s[52]=r(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这是一个漂亮的、复杂的 JSON 文件，有几层结构，如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;&gt;.vdd.sites.drupal8.account_name</span></span></code></pre></div><p>和一些列表，如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;&gt;.vm.synced_folders</span></span></code></pre></div><p>这里，<code>&lt;&gt;</code> 代表未命名的顶层。让我们看看 Groovy 是如何处理的。</p><h3 id="用-groovy-解析-json" tabindex="-1">用 Groovy 解析 JSON <a class="header-anchor" href="#用-groovy-解析-json" aria-label="Permalink to “用 Groovy 解析 JSON”">​</a></h3><p>Groovy 自带的 <code>groovy.json</code> 包，里面有各种很酷的东西。其中最好的部分是 <code>JsonSlurper</code> 类，它包括几个 <code>parse()</code> 方法，可以将 JSON 转换为 Groovy 的 <code>Map</code>，一种根据键值存储的数据结构。</p><p>下面是一个简短的 Groovy 程序，名为 <code>config1.groovy</code>，它创建了一个 <code>JsonSlurper</code> 实例，然后调用其中的 <code>parse()</code> 方法来解析文件中的 JSON，并将其转换名为 <code>config</code> 的 <code>Map</code> 实例，最后将该 map 输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import groovy.json.JsonSlurper</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def jsonSlurper = new JsonSlurper()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def config = jsonSlurper.parse(new File(&#39;config.json&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>println &quot;config = $config&quot;</span></span></code></pre></div><p>在终端的命令行上运行这个程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovy config1.groovy</span></span>
<span class="line"><span>config = [vm:[ip:192.168.44.44, memory:1024, synced_folders:[[host_path:data/, guest_path:/var/www, type:default]], forwarded_ports:[]], vdd:[sites:[drupal8:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 8, site_mail:box@example.com, vhost:[document_root:drupal8, url:drupal8.dev, alias:[www.drupal8.dev]]], drupal7:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 7, site_mail:box@example.com, vhost:[document_root:drupal7, url:drupal7.dev, alias:[www.drupal7.dev]]]]]]</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>输出显示了一个有两个键的顶层映射：<code>vm</code> 和 <code>vdd</code>。每个键都引用了它自己的值的映射。注意 <code>forwarded_ports</code> 键所引用的空列表。</p><p>这很容易，但它所做的只是把东西打印出来。你是如何获得各种组件的呢？下面是另一个程序，显示如何访问存储在 <code>config.vm.ip</code> 的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import groovy.json.JsonSlurper</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def jsonSlurper = new JsonSlurper()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def config = jsonSlurper.parse(new File(&#39;config.json&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>println &quot;config.vm.ip = \${config.vm.ip}&quot;</span></span></code></pre></div><p>运行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovy config2.groovy</span></span>
<span class="line"><span>config.vm.ip = 192.168.44.44</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>是的，这也很容易。 这利用了 Groovy 速记，这意味着：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>config.vm.ip</span></span></code></pre></div><p>在 Groovy 中等同于：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>config[&#39;vm&#39;][&#39;ip&#39;]</span></span></code></pre></div><p>当 <code>config</code> 和 <code>config.vm</code> 都是 <code>Map</code> 的实例，并且都等同于在 Java 中的:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>config.get(&quot;vm&quot;).get(&quot;ip&quot;)</span></span></code></pre></div><p>仅仅是处理 JSON 就这么多了。如果你想有一个标准的配置并让用户覆盖它呢？在这种情况下，你可能想在程序中硬编码一个 JSON 配置，然后读取用户配置并覆盖任何标准配置的设置。</p><p>假设上面的配置是标准的，而用户只想覆盖其中的一点，只想覆盖 <code>vm</code> 结构中的 <code>ip</code> 和 <code>memory</code> 值，并把它放在 <code>userConfig.json</code> 文件中:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span> &quot;vm&quot;: {</span></span>
<span class="line"><span>  &quot;ip&quot;: &quot;201.201.201.201&quot;,</span></span>
<span class="line"><span>  &quot;memory&quot;: &quot;4096&quot;,</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以用这个程序来做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import groovy.json.JsonSlurper</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def jsonSlurper = new JsonSlurper()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用 parseText() 来解析一个字符串，而不是从文件中读取。</span></span>
<span class="line"><span>// 这给了我们一个“标准配置”</span></span>
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
<span class="line"><span>// 打印标准配置</span></span>
<span class="line"><span>println &quot;standardConfig = $standardConfig&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//读入并解析用户配置信息</span></span>
<span class="line"><span>def userConfig = jsonSlurper.parse(new File(&#39;userConfig.json&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 打印出用户配置信息</span></span>
<span class="line"><span>println &quot;userConfig = $userConfig&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 一个将用户配置与标准配置合并的函数</span></span>
<span class="line"><span>def mergeMaps(Map input, Map merge) {</span></span>
<span class="line"><span>  merge.each { k, v -&amp;gt;</span></span>
<span class="line"><span>    if (v instanceof Map)</span></span>
<span class="line"><span>      mergeMaps(input[k], v)</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>      input[k] = v</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 合并配置并打印出修改后的标准配置</span></span>
<span class="line"><span>mergeMaps(standardConfig, userConfig)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>println &quot;modified standardConfig $standardConfig&quot;</span></span></code></pre></div><p>以下列方式运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovy config3.groovy</span></span>
<span class="line"><span>standardConfig = [vm:[ip:192.168.44.44, memory:1024, synced_folders:[[host_path:data/, guest_path:/var/www, type:default]], forwarded_ports:[]], vdd:[sites:[drupal8:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 8, site_mail:box@example.com, vhost:[document_root:drupal8, url:drupal8.dev, alias:[www.drupal8.dev]]], drupal7:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 7, site_mail:box@example.com, vhost:[document_root:drupal7, url:drupal7.dev, alias:[www.drupal7.dev]]]]]]</span></span>
<span class="line"><span>userConfig = [vm:[ip:201.201.201.201, memory:4096]]</span></span>
<span class="line"><span>modified standardConfig [vm:[ip:201.201.201.201, memory:4096, synced_folders:[[host_path:data/, guest_path:/var/www, type:default]], forwarded_ports:[]], vdd:[sites:[drupal8:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 8, site_mail:box@example.com, vhost:[document_root:drupal8, url:drupal8.dev, alias:[www.drupal8.dev]]], drupal7:[account_name:root, account_pass:root, account_mail:box@example.com, site_name:Drupal 7, site_mail:box@example.com, vhost:[document_root:drupal7, url:drupal7.dev, alias:[www.drupal7.dev]]]]]]</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>以 <code>modified standardConfig</code> 开头的一行显示，<code>vm.ip</code> and <code>vm.memory</code> 的值被覆盖了。</p><p>眼尖的读者会注意到，我没有检查畸形的 JSON，也没有仔细确保用户的配置是有意义的（不创建新字段，提供合理的值，等等）。所以用这个递归方法来合并两个映射在现实中可能并不那么实用。</p><p>好吧，我必须为家庭作业留下 <em>一些</em> 东西，不是吗？</p><h3 id="groovy-资源" tabindex="-1">Groovy 资源 <a class="header-anchor" href="#groovy-资源" aria-label="Permalink to “Groovy 资源”">​</a></h3>`,34)),a("p",null,[s[27]||(s[27]=n("Apache Groovy 网站有很多很棒的 ",-1)),o(p,{href:"http://groovy-lang.org/documentation.html"},{default:t(()=>[...s[24]||(s[24]=[n("文档",-1)])]),_:1}),s[28]||(s[28]=n("。另一个很棒的 Groovy 资源是 ",-1)),o(p,{href:"https://blog.mrhaki.com/"},{default:t(()=>[...s[25]||(s[25]=[n("Mr. Haki",-1)])]),_:1}),s[29]||(s[29]=n("。学习 Groovy 的一个非常好的理由是继续学习 ",-1)),o(p,{href:"https://grails.org/"},{default:t(()=>[...s[26]||(s[26]=[n("Grails",-1)])]),_:1}),s[30]||(s[30]=n("，它是一个非常高效的全栈 Web 框架，建立在 Hibernate、Spring Boot 和 Micronaut 等优秀组件之上。",-1))]),s[53]||(s[53]=a("hr",null,null,-1)),a("p",null,[s[32]||(s[32]=n("via: ",-1)),o(p,{href:"https://opensource.com/article/21/6/groovy-parse-json"},{default:t(()=>[...s[31]||(s[31]=[n("https://opensource.com/article/21/6/groovy-parse-json",-1)])]),_:1})]),a("p",null,[s[37]||(s[37]=n("作者：",-1)),o(p,{href:"https://opensource.com/users/clhermansen"},{default:t(()=>[...s[33]||(s[33]=[n("Chris Hermansen",-1)])]),_:1}),s[38]||(s[38]=n(" 选题：",-1)),o(p,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[34]||(s[34]=[n("lujun9972",-1)])]),_:1}),s[39]||(s[39]=n(" 译者：",-1)),o(p,{href:"https://github.com/geekpi"},{default:t(()=>[...s[35]||(s[35]=[n("geekpi",-1)])]),_:1}),s[40]||(s[40]=n(" 校对：",-1)),o(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[36]||(s[36]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[43]||(s[43]=n("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[41]||(s[41]=[n("LCTT",-1)])]),_:1}),s[44]||(s[44]=n(" 原创编译，",-1)),o(p,{href:"https://linux.cn/"},{default:t(()=>[...s[42]||(s[42]=[n("Linux中国",-1)])]),_:1}),s[45]||(s[45]=n(" 荣誉推出",-1))])])}const y=l(d,[["render",c]]);export{k as __pageData,y as default};
