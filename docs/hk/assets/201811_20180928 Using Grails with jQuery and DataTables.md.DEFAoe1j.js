import{_ as i,a0 as o,w as r,s as d,I as n,x as a,a1 as t,A as l,ao as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"在 Grails 中使用 jQuery 和 DataTables | LCTT x X-CMD","titleTemplate":false,"description":"在 Grails 中使用 jQuery 和 DataTables | LCTT (201811) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Grails 中使用 jQuery 和 DataTables | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Grails 中使用 jQuery 和 DataTables | LCTT (201811) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201811/20180928 Using Grails with jQuery and DataTables","title":"在 Grails 中使用 jQuery 和 DataTables","tag":"201811","desc":""},"relativePath":"201811/20180928 Using Grails with jQuery and DataTables.md","filePath":"[post].md"}'),c={name:"201811/20180928 Using Grails with jQuery and DataTables.md"};function u(g,s,h,b,f,k){const e=o("Link");return r(),d("div",null,[s[58]||(s[58]=n("h1",{id:"在-grails-中使用-jquery-和-datatables",tabindex:"-1"},[a("在 Grails 中使用 jQuery 和 DataTables "),n("a",{class:"header-anchor",href:"#在-grails-中使用-jquery-和-datatables","aria-label":"Permalink to “在 Grails 中使用 jQuery 和 DataTables”"},"​")],-1)),s[59]||(s[59]=n("blockquote",null,[n("p",null,"本文介紹如何構建一個基於 Grails 的數據瀏覽器來可視化複雜的表格數據。")],-1)),s[60]||(s[60]=n("p",null,[n("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/data_container_block.png?itok=S8MbXEYw",alt:""})],-1)),n("p",null,[s[3]||(s[3]=a("我是 ",-1)),t(e,{href:"https://grails.org/"},{default:l(()=>[...s[0]||(s[0]=[a("Grails",-1)])]),_:1}),s[4]||(s[4]=a(" 的忠實粉絲。當然，我主要是熱衷於利用命令列工具來探索和分析數據的數據從業人員。數據從業人員經常需要",-1)),s[5]||(s[5]=n("em",null,"查看",-1)),s[6]||(s[6]=a("數據，這也意味着他們通常擁有優秀的數據瀏覽器。利用 Grails、",-1)),t(e,{href:"https://jquery.com/"},{default:l(()=>[...s[1]||(s[1]=[a("jQuery",-1)])]),_:1}),s[7]||(s[7]=a("，以及 ",-1)),t(e,{href:"https://datatables.net/"},{default:l(()=>[...s[2]||(s[2]=[a("DataTables jQuery 插件",-1)])]),_:1}),s[8]||(s[8]=a("，我們可以製作出非常友好的表格數據瀏覽器。",-1))]),n("p",null,[t(e,{href:"https://datatables.net/"},{default:l(()=>[...s[9]||(s[9]=[a("DataTables 網站",-1)])]),_:1}),s[11]||(s[11]=a("提供了許多“食譜式”的教程文檔，展示瞭如何組合一些優秀的示例應用程序，這些程序包含了完成一些非常漂亮的東西所必要的 JavaScript、HTML，以及偶爾出現的 ",-1)),t(e,{href:"http://php.net/"},{default:l(()=>[...s[10]||(s[10]=[a("PHP",-1)])]),_:1}),s[12]||(s[12]=a("。但對於那些寧願使用 Grails 作為後端的人來説，有必要進行一些説明示教。此外，樣本程序中使用的數據是一個虛構公司的員工的單個平面表格數據，因此處理這些複雜的表關係可以作為讀者的一個練習項目。",-1))]),n("p",null,[s[15]||(s[15]=a("本文中，我們將創建具有略微複雜的數據結構和 DataTables 瀏覽器的 Grails 應用程序。我們將介紹 Grails 標準，它是 ",-1)),t(e,{href:"http://groovy-lang.org/"},{default:l(()=>[...s[13]||(s[13]=[a("Groovy",-1)])]),_:1}),s[16]||(s[16]=a(" 式的 Java Hibernate 標準。我已將代碼託管在 ",-1)),t(e,{href:"https://github.com/monetschemist/grails-datatables"},{default:l(()=>[...s[14]||(s[14]=[a("GitHub",-1)])]),_:1}),s[17]||(s[17]=a(" 上方便大家訪問，因此本文主要是對代碼細節的解讀。",-1))]),n("p",null,[s[21]||(s[21]=a("首先，你需要配置 Java、Groovy、Grails 的使用環境。對於 Grails，我傾向於使用終端窗口和 ",-1)),t(e,{href:"https://www.vim.org/"},{default:l(()=>[...s[18]||(s[18]=[a("Vim",-1)])]),_:1}),s[22]||(s[22]=a("，本文也使用它們。為獲得現代的 Java 環境，建議下載並安裝 Linux 發行版提供的 ",-1)),t(e,{href:"http://openjdk.java.net/"},{default:l(()=>[...s[19]||(s[19]=[a("Open Java Development Kit",-1)])]),_:1}),s[23]||(s[23]=a(" （OpenJDK）（應該是 Java 8、9、10 或 11 之一，撰寫本文時，我正在使用 Java 8）。從我的角度來看，獲取最新的 Groovy 和 Grails 的最佳方法是使用 ",-1)),t(e,{href:"http://sdkman.io/"},{default:l(()=>[...s[20]||(s[20]=[a("SDKMAN!",-1)])]),_:1}),s[24]||(s[24]=a("。",-1))]),n("p",null,[s[26]||(s[26]=a("從未嘗試過 Grails 的讀者可能需要做一些背景資料閲讀。作為初學者，推薦文章 ",-1)),t(e,{href:"http://guides.grails.org/creating-your-first-grails-app/guide/index.html"},{default:l(()=>[...s[25]||(s[25]=[a("創建你的第一個 Grails 應用程序",-1)])]),_:1}),s[27]||(s[27]=a("。",-1))]),s[61]||(s[61]=n("h3",{id:"獲取員工信息瀏覽器應用程序",tabindex:"-1"},[a("獲取員工信息瀏覽器應用程序 "),n("a",{class:"header-anchor",href:"#獲取員工信息瀏覽器應用程序","aria-label":"Permalink to “獲取員工信息瀏覽器應用程序”"},"​")],-1)),n("p",null,[s[29]||(s[29]=a("正如上文所提，我將本文中員工信息瀏覽器的源代碼託管在 ",-1)),t(e,{href:"https://github.com/monetschemist/grails-datatables"},{default:l(()=>[...s[28]||(s[28]=[a("GitHub",-1)])]),_:1}),s[30]||(s[30]=a("上。進一步講，應用程序 ",-1)),s[31]||(s[31]=n("strong",null,"embrow",-1)),s[32]||(s[32]=a(" 是在 Linux 終端中用如下命令構建的：",-1))]),s[62]||(s[62]=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cd Projects</span></span>
<span class="line"><span>grails create-app com.nuevaconsulting.embrow</span></span></code></pre></div><p>域類和單元測試創建如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>grails create-domain-class com.nuevaconsulting.embrow.Position</span></span>
<span class="line"><span>grails create-domain-class com.nuevaconsulting.embrow.Office</span></span>
<span class="line"><span>grails create-domain-class com.nuevaconsulting.embrow.Employeecd embrowgrails createdomaincom.grails createdomaincom.grails createdomaincom.</span></span></code></pre></div><p>這種方式構建的域類沒有屬性，因此必須按如下方式編輯它們：</p><p><code>Position</code> 域類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.nuevaconsulting.embrow</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>class Position {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String name</span></span>
<span class="line"><span>    int starting</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static constraints = {</span></span>
<span class="line"><span>        name nullable: false, blank: false</span></span>
<span class="line"><span>        starting nullable: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}com.Stringint startingstatic constraintsnullableblankstarting nullable</span></span></code></pre></div><p><code>Office</code> 域類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.nuevaconsulting.embrow</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>class Office {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String name</span></span>
<span class="line"><span>    String address</span></span>
<span class="line"><span>    String city</span></span>
<span class="line"><span>    String country</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static constraints = {</span></span>
<span class="line"><span>        name nullable: false, blank: false</span></span>
<span class="line"><span>        address nullable: false, blank: false</span></span>
<span class="line"><span>        city nullable: false, blank: false</span></span>
<span class="line"><span>        country nullable: false, blank: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>Enployee</code> 域類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.nuevaconsulting.embrow</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>class Employee {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String surname</span></span>
<span class="line"><span>    String givenNames</span></span>
<span class="line"><span>    Position position</span></span>
<span class="line"><span>    Office office</span></span>
<span class="line"><span>    int extension</span></span>
<span class="line"><span>    Date hired</span></span>
<span class="line"><span>    int salary</span></span>
<span class="line"><span>    static constraints = {</span></span>
<span class="line"><span>        surname nullable: false, blank: false</span></span>
<span class="line"><span>        givenNames nullable: false, blank: false</span></span>
<span class="line"><span>        : false</span></span>
<span class="line"><span>        office nullable: false</span></span>
<span class="line"><span>        extension nullable: false</span></span>
<span class="line"><span>        hired nullable: false</span></span>
<span class="line"><span>        salary nullable: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>請注意，雖然 <code>Position</code> 和 <code>Office</code> 域類使用了預定義的 Groovy 類型 <code>String</code> 以及 <code>int</code>，但 <code>Employee</code> 域類定義了 <code>Position</code> 和 <code>Office</code> 字段（以及預定義的 <code>Date</code>）。這會導致創建資料庫表，其中存儲的 <code>Employee</code> 實例中包含了指向存儲 <code>Position</code> 和 <code>Office</code> 實例表的引用或者外鍵。</p><p>現在你可以生成控制器，視圖，以及其他各種測試組件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-all com.nuevaconsulting.embrow.Position</span></span>
<span class="line"><span>grails generate-all com.nuevaconsulting.embrow.Office</span></span>
<span class="line"><span>grails generate-all com.nuevaconsulting.embrow.Employeegrails generateall com.grails generateall com.grails generateall com.</span></span></code></pre></div><p>此時，你已經準備好了一個基本的增刪改查（CRUD）應用程序。我在 <code>grails-app/init/com/nuevaconsulting/BootStrap.groovy</code> 中包含了一些基礎數據來填充表格。</p><p>如果你用如下命令來啓動應用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>grails run-app</span></span></code></pre></div><p>在瀏覽器輸入 <code>http://localhost:8080/</code>，你將會看到如下界面：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen_1.png" alt="Embrow home screen"></p><p><em>Embrow 應用程序主界面。</em></p><p>單擊 “OfficeController” 鏈接，會跳轉到如下界面：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen_2.png" alt="Office list"></p><p><em>Office 列表</em></p><p>注意，此表由 <code>OfficeController</code> 的 <code>index</code> 方式生成，並由視圖 <code>office/index.gsp</code> 顯示。</p><p>同樣，單擊 “EmployeeController” 鏈接 跳轉到如下界面：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen3.png" alt="Employee controller"></p><p><em>employee 控制器</em></p><p>好吧，這很醜陋： Position 和 Office 鏈接是什麼？</p><p>上面的命令 <code>generate-all</code> 生成的視圖創建了一個叫 <code>index.gsp</code> 的文件，它使用 Grails <code>&lt;f:table/&gt;</code> 標籤，該標籤默認會顯示類名（<code>com.nuevaconsulting.embrow.Position</code>）和持久化示例標識符（<code>30</code>）。這個操作可以自定義用來產生更好看的東西，並且自動生成鏈接，自動生成分頁以及自動生成可排序列的一些非常簡潔直觀的東西。</p><p>但該員工信息瀏覽器功能也是有限的。例如，如果想查找 “position” 信息中包含 “dev” 的員工該怎麼辦？如果要組合排序，以姓氏為主排序關鍵字，“office” 為輔助排序關鍵字，該怎麼辦？或者，你需要將已排序的數據導出到電子表格或 PDF 文檔以便通過電子郵件發送給無法訪問瀏覽器的人，該怎麼辦？</p><p>jQuery DataTables 插件提供了這些所需的功能。允許你創建一個完成的表格數據瀏覽器。</p><h3 id="創建員工信息瀏覽器視圖和控制器的方法" tabindex="-1">創建員工信息瀏覽器視圖和控制器的方法 <a class="header-anchor" href="#創建員工信息瀏覽器視圖和控制器的方法" aria-label="Permalink to “創建員工信息瀏覽器視圖和控制器的方法”">​</a></h3><p>要基於 jQuery DataTables 創建員工信息瀏覽器，你必須先完成以下兩個任務：</p><ol><li>創建 Grails 視圖，其中包含啓用 DataTable 所需的 HTML 和 JavaScript</li><li>給 Grails 控制器增加一個方法來控制新視圖。</li></ol><h4 id="員工信息瀏覽器視圖" tabindex="-1">員工信息瀏覽器視圖 <a class="header-anchor" href="#員工信息瀏覽器視圖" aria-label="Permalink to “員工信息瀏覽器視圖”">​</a></h4><p>在目錄 <code>embrow/grails-app/views/employee</code> 中，首先複製 <code>index.gsp</code> 文件，重命名為 <code>browser.gsp</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cd Projects</span></span>
<span class="line"><span>cd embrow/grails-app/views/employee</span></span>
<span class="line"><span>cp gsp browser.gsp</span></span></code></pre></div><p>此刻，你自定義新的 <code>browser.gsp</code> 文件來添加相關的 jQuery DataTables 代碼。</p><p>通常，在可能的時候，我喜歡從內容提供商處獲得 JavaScript 和 CSS；在下面這行後面：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;title&gt;&lt;g:message code=&quot;default.list.label&quot; args=&quot;[entityName]&quot; /&gt;&lt;/title&gt;</span></span></code></pre></div><p>插入如下代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;script src=&quot;https://code.jquery.com/jquery-2.2.4.min.js&quot; integrity=&quot;sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://cdn.datatables.net/1.10.16/css/jquery.dataTables.css&quot;&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf8&quot; src=&quot;https://cdn.datatables.net/1.10.16/js/jquery.dataTables.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://cdn.datatables.net/scroller/1.4.4/css/scroller.dataTables.min.css&quot;&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf8&quot; src=&quot;https://cdn.datatables.net/scroller/1.4.4/js/dataTables.scroller.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf8&quot; src=&quot;https://cdn.datatables.net/buttons/1.5.1/js/dataTables.buttons.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf8&quot; src=&quot;https://cdn.datatables.net/buttons/1.5.1/js/buttons.flash.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf8&quot; src=&quot;https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf8&quot; src=&quot;https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf8&quot; src=&quot;https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf8&quot; src=&quot;https://cdn.datatables.net/buttons/1.5.1/js/buttons.html5.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf8&quot; src=&quot;https://cdn.datatables.net/buttons/1.5.1/js/buttons.print.min.js &quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>然後刪除 <code>index.gsp</code> 中提供數據分頁的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div id=&quot;list-employee&quot; class=&quot;content scaffold-list&quot; role=&quot;main&quot;&gt;</span></span>
<span class="line"><span>&lt;h1&gt;&lt;g:message code=&quot;default.list.label&quot; args=&quot;[entityName]&quot; /&gt;&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;g:if test=&quot;\${flash.message}&quot;&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;message&quot; role=&quot;status&quot;&gt;\${flash.message}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/g:if&gt;</span></span>
<span class="line"><span>&lt;f:table collection=&quot;\${employeeList}&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;pagination&quot;&gt;</span></span>
<span class="line"><span>&lt;g:paginate total=&quot;\${employeeCount ?: 0}&quot; /&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>並插入實現 jQuery DataTables 的代碼。</p><p>要插入的第一部分是 HTML，它將創建瀏覽器的基本表格結構。DataTables 與後端通信的應用程序來説，它們只提供表格頁眉和頁腳；DataTables JavaScript 則負責表中內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div id=&quot;employee-browser&quot; class=&quot;content&quot; role=&quot;main&quot;&gt;</span></span>
<span class="line"><span>&lt;h1&gt;Employee Browser&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;table id=&quot;employee_dt&quot; class=&quot;display compact&quot; style=&quot;width:99%;&quot;&gt;</span></span>
<span class="line"><span>&lt;thead&gt;</span></span>
<span class="line"><span>&lt;tr&gt;</span></span>
<span class="line"><span>&lt;th&gt;Surname&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Given name(s)&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Position&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Office&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Extension&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Hired&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Salary&lt;/th&gt;</span></span>
<span class="line"><span>&lt;/tr&gt;</span></span>
<span class="line"><span>&lt;/thead&gt;</span></span>
<span class="line"><span>&lt;tfoot&gt;</span></span>
<span class="line"><span>&lt;tr&gt;</span></span>
<span class="line"><span>&lt;th&gt;Surname&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Given name(s)&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Position&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Office&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Extension&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Hired&lt;/th&gt;</span></span>
<span class="line"><span>&lt;th&gt;Salary&lt;/th&gt;</span></span>
<span class="line"><span>&lt;/tr&gt;</span></span>
<span class="line"><span>&lt;/tfoot&gt;</span></span>
<span class="line"><span>&lt;/table&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>接下來，插入一個 JavaScript 塊，它主要提供三個功能：它設置頁腳中顯示的文本框的大小，以進行列過濾，建立 DataTables 表模型，並創建一個處理程序來進行列過濾。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;g:javascript&gt;</span></span>
<span class="line"><span>$(&#39;#employee_dt tfoot th&#39;).each( function() {javascript</span></span></code></pre></div><p>下面的代碼處理表格列底部的過濾器框的大小：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var title = $(this).text();</span></span>
<span class="line"><span>if (title == &#39;Extension&#39; || title == &#39;Hired&#39;)</span></span>
<span class="line"><span>$(this).html(&#39;&lt;input type=&quot;text&quot; size=&quot;5&quot; placeholder=&quot;&#39; + title + &#39;?&quot; /&gt;&#39;);</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>$(this).html(&#39;&lt;input type=&quot;text&quot; size=&quot;15&quot; placeholder=&quot;&#39; + title + &#39;?&quot; /&gt;&#39;);</span></span>
<span class="line"><span>});titletitletitletitletitle</span></span></code></pre></div><p>接下來，定義表模型。這是提供所有表選項的地方，包括界面的滾動，而不是分頁，根據 DOM 字符串提供的裝飾，將數據導出為 CSV 和其他格式的能力，以及建立與服務器的 AJAX 連接。 請注意，使用 Groovy GString 調用 Grails <code>createLink()</code> 的方法創建 URL，在 <code>EmployeeController</code> 中指向 <code>browserLister</code> 操作。同樣有趣的是表格列的定義。此信息將發送到後端，後端查詢資料庫並返回相應的記錄。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var table = $(&#39;#employee_dt&#39;).DataTable( {</span></span>
<span class="line"><span>&quot;scrollY&quot;: 500,</span></span>
<span class="line"><span>&quot;deferRender&quot;: true,</span></span>
<span class="line"><span>&quot;scroller&quot;: true,</span></span>
<span class="line"><span>&quot;dom&quot;: &quot;Brtip&quot;,</span></span>
<span class="line"><span>&quot;buttons&quot;: [ &#39;copy&#39;, &#39;csv&#39;, &#39;excel&#39;, &#39;pdf&#39;, &#39;print&#39; ],</span></span>
<span class="line"><span>&quot;processing&quot;: true,</span></span>
<span class="line"><span>&quot;serverSide&quot;: true,</span></span>
<span class="line"><span>&quot;ajax&quot;: {</span></span>
<span class="line"><span>&quot;url&quot;: &quot;\${createLink(controller: &#39;employee&#39;, action: &#39;browserLister&#39;)}&quot;,</span></span>
<span class="line"><span>&quot;type&quot;: &quot;POST&quot;,</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;columns&quot;: [</span></span>
<span class="line"><span>{ &quot;data&quot;: &quot;surname&quot; },</span></span>
<span class="line"><span>{ &quot;data&quot;: &quot;givenNames&quot; },</span></span>
<span class="line"><span>{ &quot;data&quot;: &quot;position&quot; },</span></span>
<span class="line"><span>{ &quot;data&quot;: &quot;office&quot; },</span></span>
<span class="line"><span>{ &quot;data&quot;: &quot;extension&quot; },</span></span>
<span class="line"><span>{ &quot;data&quot;: &quot;hired&quot; },</span></span>
<span class="line"><span>{ &quot;data&quot;: &quot;salary&quot; }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>最後，監視過濾器列以進行更改，並使用它們來應用過濾器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>table.columns().every(function() {</span></span>
<span class="line"><span>var that = this;</span></span>
<span class="line"><span>$(&#39;input&#39;, this.footer()).on(&#39;keyup change&#39;, function(e) {</span></span>
<span class="line"><span>if (that.search() != this.value &amp;&amp; 8 &lt; e.keyCode &amp;&amp; e.keyCode &lt; 32)</span></span>
<span class="line"><span>that.search(this.value).draw();</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>這就是 JavaScript，這樣就完成了對視圖代碼的更改。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>});</span></span>
<span class="line"><span>&lt;/g:javascript&gt;</span></span></code></pre></div><p>以下是此視圖創建的UI的屏幕截圖：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen_4.png" alt=""></p><p>這是另一個屏幕截圖，顯示了過濾和多列排序（尋找 “position” 包括字符 “dev” 的員工，先按 “office” 排序，然後按姓氏排序）：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen_5.png" alt=""></p><p>這是另一個屏幕截圖，顯示單擊 CSV 按鈕時會發生什麼：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen6.png" alt=""></p><p>最後，這是一個截圖，顯示在 LibreOffice 中打開的 CSV 數據：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen7.png" alt=""></p><p>好的，視圖部分看起來非常簡單；因此，控制器必須做所有繁重的工作，對吧？ 讓我們來看看……</p><h4 id="控制器-browserlister-操作" tabindex="-1">控制器 browserLister 操作 <a class="header-anchor" href="#控制器-browserlister-操作" aria-label="Permalink to “控制器 browserLister 操作”">​</a></h4><p>回想一下，我們看到過這個字符串：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&quot;\${createLink(controller: &#39;employee&#39;, action: &#39;browserLister&#39;)}&quot;</span></span></code></pre></div>`,68)),n("p",null,[s[34]||(s[34]=a("對於從 DataTables 模型中調用 AJAX 的 URL，是在 Grails 服務器上動態創建 HTML 鏈接，其 Grails 標記背後通過調用 ",-1)),t(e,{href:"https://gsp.grails.org/latest/ref/Tags/createLink.html"},{default:l(()=>[...s[33]||(s[33]=[a("createLink()",-1)])]),_:1}),s[35]||(s[35]=a(" 的方法實現的。這會最終產生一個指向 ",-1)),s[36]||(s[36]=n("code",null,"EmployeeController",-1)),s[37]||(s[37]=a(" 的鏈接，位於：",-1))]),s[63]||(s[63]=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>embrow/grails-app/controllers/com/nuevaconsulting/embrow/EmployeeController.groovy</span></span></code></pre></div><p>特別是控制器方法 <code>browserLister()</code>。我在代碼中留了一些 <code>print</code> 語句，以便在運行時能夠在終端看到中間結果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def browserLister() {</span></span>
<span class="line"><span>        // Applies filters and sorting to return a list of desired employees</span></span></code></pre></div><p>首先，打印出傳遞給 <code>browserLister()</code> 的參數。我通常使用此代碼開始構建控制器方法，以便我完全清楚我的控制器正在接收什麼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>      println &quot;employee browserLister params $params&quot;</span></span>
<span class="line"><span>        println()</span></span></code></pre></div><p>接下來，處理這些參數以使它們更加有用。首先，jQuery DataTables 參數，一個名為 <code>jqdtParams</code> 的 Groovy 映射：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def jqdtParams = [:]</span></span>
<span class="line"><span>params.each { key, value -&gt;</span></span>
<span class="line"><span>    def keyFields = key.replace(&#39;]&#39;,&#39;&#39;).split(/\\[/)</span></span>
<span class="line"><span>    def table = jqdtParams</span></span>
<span class="line"><span>    for (int f = 0; f &lt; keyFields.size() - 1; f++) {</span></span>
<span class="line"><span>        def keyField = keyFields[f]</span></span>
<span class="line"><span>        if (!table.containsKey(keyField))</span></span>
<span class="line"><span>            table[keyField] = [:]</span></span>
<span class="line"><span>        table = table[keyField]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    table[keyFields[-1]] = value</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>println &quot;employee dataTableParams $jqdtParams&quot;</span></span>
<span class="line"><span>println()</span></span></code></pre></div><p>接下來，列數據，一個名為 <code>columnMap</code> 的 Groovy 映射：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def columnMap = jqdtParams.columns.collectEntries { k, v -&gt;</span></span>
<span class="line"><span>    def whereTerm = null</span></span>
<span class="line"><span>    switch (v.data) {</span></span>
<span class="line"><span>    case &#39;extension&#39;:</span></span>
<span class="line"><span>    case &#39;hired&#39;:</span></span>
<span class="line"><span>    case &#39;salary&#39;:</span></span>
<span class="line"><span>        if (v.search.value ==~ /\\d+(,\\d+)*/)</span></span>
<span class="line"><span>            whereTerm = v.search.value.split(&#39;,&#39;).collect { it as Integer }</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>    default:</span></span>
<span class="line"><span>        if (v.search.value ==~ /[A-Za-z0-9 ]+/)</span></span>
<span class="line"><span>            whereTerm = &quot;%\${v.search.value}%&quot; as String</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    [(v.data): [where: whereTerm]]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>println &quot;employee columnMap $columnMap&quot;</span></span>
<span class="line"><span>println()</span></span></code></pre></div><p>接下來，從 <code>columnMap</code> 中檢索的所有列表，以及在視圖中應如何排序這些列表，Groovy 列表分別稱為 <code>allColumnList</code> 和 <code>orderList</code> ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def allColumnList = columnMap.keySet() as List</span></span>
<span class="line"><span>println &quot;employee allColumnList $allColumnList&quot;</span></span>
<span class="line"><span>def orderList = jqdtParams.order.collect { k, v -&gt; [allColumnList[v.column as Integer], v.dir] }</span></span>
<span class="line"><span>println &quot;employee orderList $orderList&quot;</span></span></code></pre></div><p>我們將使用 Grails 的 Hibernate 標準實現來實際選擇要顯示的元素以及它們的排序和分頁。標準要求過濾器關閉；在大多數示例中，這是作為標準實例本身的創建的一部分給出的，但是在這裏我們預先定義過濾器閉包。請注意，在這種情況下，“date hired” 過濾器的相對複雜的解釋被視為一年並應用於建立日期範圍，並使用 <code>createAlias</code> 以允許我們進入相關類別 <code>Position</code> 和 <code>Office</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def filterer = {</span></span>
<span class="line"><span>    createAlias &#39;position&#39;,        &#39;p&#39;</span></span>
<span class="line"><span>    createAlias &#39;office&#39;,          &#39;o&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (columnMap.surname.where)    ilike  &#39;surname&#39;,     columnMap.surname.where</span></span>
<span class="line"><span>    if (columnMap.givenNames.where) ilike  &#39;givenNames&#39;,  columnMap.givenNames.where</span></span>
<span class="line"><span>    if (columnMap.position.where)   ilike  &#39;p.name&#39;,      columnMap.position.where</span></span>
<span class="line"><span>    if (columnMap.office.where)     ilike  &#39;o.name&#39;,      columnMap.office.where</span></span>
<span class="line"><span>    if (columnMap.extension.where)  inList &#39;extension&#39;,   columnMap.extension.where</span></span>
<span class="line"><span>    if (columnMap.salary.where)     inList &#39;salary&#39;,      columnMap.salary.where</span></span>
<span class="line"><span>    if (columnMap.hired.where) {</span></span>
<span class="line"><span>        if (columnMap.hired.where.size() &gt; 1) {</span></span>
<span class="line"><span>            or {</span></span>
<span class="line"><span>                columnMap.hired.where.each {</span></span>
<span class="line"><span>                    between &#39;hired&#39;, Date.parse(&#39;yyyy/MM/dd&#39;,&quot;\${it}/01/01&quot; as String),</span></span>
<span class="line"><span>                        Date.parse(&#39;yyyy/MM/dd&#39;,&quot;\${it}/12/31&quot; as String)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            between &#39;hired&#39;, Date.parse(&#39;yyyy/MM/dd&#39;,&quot;\${columnMap.hired.where[0]}/01/01&quot; as String),</span></span>
<span class="line"><span>                Date.parse(&#39;yyyy/MM/dd&#39;,&quot;\${columnMap.hired.where[0]}/12/31&quot; as String)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>是時候應用上述內容了。第一步是獲取分頁代碼所需的所有 <code>Employee</code> 實例的總數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        def recordsTotal = Employee.count()</span></span>
<span class="line"><span>        println &quot;employee recordsTotal $recordsTotal&quot;</span></span></code></pre></div><p>接下來，將過濾器應用於 <code>Employee</code> 實例以獲取過濾結果的計數，該結果將始終小於或等於總數（同樣，這是針對分頁代碼）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        def c = Employee.createCriteria()</span></span>
<span class="line"><span>        def recordsFiltered = c.count {</span></span>
<span class="line"><span>            filterer.delegate = delegate</span></span>
<span class="line"><span>            filterer()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        println &quot;employee recordsFiltered $recordsFiltered&quot;</span></span></code></pre></div><p>獲得這兩個計數後，你還可以使用分頁和排序信息獲取實際過濾的實例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>      def orderer = Employee.withCriteria {</span></span>
<span class="line"><span>            filterer.delegate = delegate</span></span>
<span class="line"><span>            filterer()</span></span>
<span class="line"><span>            orderList.each { oi -&gt;</span></span>
<span class="line"><span>                switch (oi[0]) {</span></span>
<span class="line"><span>                case &#39;surname&#39;:    order &#39;surname&#39;,    oi[1]; break</span></span>
<span class="line"><span>                case &#39;givenNames&#39;: order &#39;givenNames&#39;, oi[1]; break</span></span>
<span class="line"><span>                case &#39;position&#39;:   order &#39;p.name&#39;,     oi[1]; break</span></span>
<span class="line"><span>                case &#39;office&#39;:     order &#39;o.name&#39;,     oi[1]; break</span></span>
<span class="line"><span>                case &#39;extension&#39;:  order &#39;extension&#39;,  oi[1]; break</span></span>
<span class="line"><span>                case &#39;hired&#39;:      order &#39;hired&#39;,      oi[1]; break</span></span>
<span class="line"><span>                case &#39;salary&#39;:     order &#39;salary&#39;,     oi[1]; break</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            maxResults (jqdtParams.length as Integer)</span></span>
<span class="line"><span>            firstResult (jqdtParams.start as Integer)</span></span>
<span class="line"><span>        }</span></span></code></pre></div><p>要完全清楚，JTable 中的分頁代碼管理三個計數：數據集中的記錄總數，應用過濾器後得到的數字，以及要在頁面上顯示的數字（顯示是滾動還是分頁）。 排序應用於所有過濾的記錄，並且分頁應用於那些過濾的記錄的塊以用於顯示目的。</p><p>接下來，處理命令返回的結果，在每行中創建指向 <code>Employee</code>、<code>Position</code> 和 <code>Office</code> 實例的鏈接，以便用户可以單擊這些鏈接以獲取相關實例的所有詳細信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        def dollarFormatter = new DecimalFormat(&#39;$##,###.##&#39;)</span></span>
<span class="line"><span>        def employees = orderer.collect { employee -&gt;</span></span>
<span class="line"><span>            [&#39;surname&#39;: &quot;&lt;a href=&#39;\${createLink(controller: &#39;employee&#39;, action: &#39;show&#39;, id: employee.id)}&#39;&gt;\${employee.surname}&lt;/a&gt;&quot;,</span></span>
<span class="line"><span>                &#39;givenNames&#39;: employee.givenNames,</span></span>
<span class="line"><span>                &#39;position&#39;: &quot;&lt;a href=&#39;\${createLink(controller: &#39;position&#39;, action: &#39;show&#39;, id: employee.position?.id)}&#39;&gt;\${employee.position?.name}&lt;/a&gt;&quot;,</span></span>
<span class="line"><span>                &#39;office&#39;: &quot;&lt;a href=&#39;\${createLink(controller: &#39;office&#39;, action: &#39;show&#39;, id: employee.office?.id)}&#39;&gt;\${employee.office?.name}&lt;/a&gt;&quot;,</span></span>
<span class="line"><span>                &#39;extension&#39;: employee.extension,</span></span>
<span class="line"><span>                &#39;hired&#39;: employee.hired.format(&#39;yyyy/MM/dd&#39;),</span></span>
<span class="line"><span>                &#39;salary&#39;: dollarFormatter.format(employee.salary)]</span></span>
<span class="line"><span>        }</span></span></code></pre></div><p>最後，創建要返回的結果並將其作為 JSON 返回，這是 jQuery DataTables 所需要的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        def result = [draw: jqdtParams.draw, recordsTotal: recordsTotal, recordsFiltered: recordsFiltered, data: employees]</span></span>
<span class="line"><span>        render(result as JSON)</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>大功告成。</p><p>如果你熟悉 Grails，這可能看起來比你原先想像的要多，但這裏沒有火箭式的一步到位方法，只是很多分散的操作步驟。但是，如果你沒有太多接觸 Grails（或 Groovy），那麼需要了解很多新東西 - 閉包，代理和構建器等等。</p>`,26)),n("p",null,[s[40]||(s[40]=a("在那種情況下，從哪裏開始？ 最好的地方是瞭解 Groovy 本身，尤其是 ",-1)),t(e,{href:"http://groovy-lang.org/closures.html"},{default:l(()=>[...s[38]||(s[38]=[a("Groovy closures",-1)])]),_:1}),s[41]||(s[41]=a(" 和 ",-1)),t(e,{href:"http://groovy-lang.org/dsls.html"},{default:l(()=>[...s[39]||(s[39]=[a("Groovy delegates and builders",-1)])]),_:1}),s[42]||(s[42]=a("。然後再去閲讀上面關於 Grails 和 Hibernate 條件查詢的建議閲讀文章。",-1))]),s[64]||(s[64]=n("h3",{id:"結語",tabindex:"-1"},[a("結語 "),n("a",{class:"header-anchor",href:"#結語","aria-label":"Permalink to “結語”"},"​")],-1)),s[65]||(s[65]=n("p",null,"jQuery DataTables 為 Grails 製作了很棒的表格數據瀏覽器。對視圖進行編碼並不是太棘手，但 DataTables 文檔中提供的 PHP 示例提供的功能僅到此位置。特別是，它們不是用 Grails 程序員編寫的，也不包含探索使用引用其他類（實質上是查找表）的元素的更精細的細節。",-1)),s[66]||(s[66]=n("p",null,"我使用這種方法制作了幾個數據瀏覽器，允許用户選擇要查看和累積記錄計數的列，或者只是瀏覽數據。即使在相對適度的 VPS 上的百萬行表中，性能也很好。",-1)),s[67]||(s[67]=n("p",null,"一個警告：我偶然發現了 Grails 中暴露的各種 Hibernate 標準機制的一些問題（請參閲我的其他 GitHub 代碼庫），因此需要謹慎和實驗。如果所有其他方法都失敗了，另一種方法是動態構建 SQL 字符串並執行它們。在撰寫本文時，我更喜歡使用 Grails 標準，除非我遇到雜亂的子查詢，但這可能只反映了我在 Hibernate 中對子查詢的相對缺乏經驗。",-1)),s[68]||(s[68]=n("p",null,"我希望 Grails 程序員發現本文的有趣性。請隨時在下面留下評論或建議。",-1)),s[69]||(s[69]=n("hr",null,null,-1)),n("p",null,[s[44]||(s[44]=a("via: ",-1)),t(e,{href:"https://opensource.com/article/18/9/using-grails-jquery-and-datatables"},{default:l(()=>[...s[43]||(s[43]=[a("https://opensource.com/article/18/9/using-grails-jquery-and-datatables",-1)])]),_:1})]),n("p",null,[s[49]||(s[49]=a("作者：",-1)),t(e,{href:"https://opensource.com/users/clhermansen"},{default:l(()=>[...s[45]||(s[45]=[a("Chris Hermansen",-1)])]),_:1}),s[50]||(s[50]=a(" 選題：",-1)),t(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[46]||(s[46]=[a("lujun9972",-1)])]),_:1}),s[51]||(s[51]=a(" 譯者：",-1)),t(e,{href:"https://github.com/jrglinux"},{default:l(()=>[...s[47]||(s[47]=[a("jrg",-1)])]),_:1}),s[52]||(s[52]=a(" 校對：",-1)),t(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[48]||(s[48]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[55]||(s[55]=a("本文由 ",-1)),t(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[53]||(s[53]=[a("LCTT",-1)])]),_:1}),s[56]||(s[56]=a(" 原創編譯，",-1)),t(e,{href:"https://linux.cn/"},{default:l(()=>[...s[54]||(s[54]=[a("Linux中國",-1)])]),_:1}),s[57]||(s[57]=a(" 榮譽推出",-1))])])}const v=i(c,[["render",u]]);export{q as __pageData,v as default};
