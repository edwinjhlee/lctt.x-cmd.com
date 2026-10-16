import{_ as i,a0 as o,w as r,s as d,I as n,x as a,a1 as t,A as l,ao as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"在 Grails 中使用 jQuery 和 DataTables | LCTT x X-CMD","titleTemplate":false,"description":"在 Grails 中使用 jQuery 和 DataTables | LCTT (201811) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Grails 中使用 jQuery 和 DataTables | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Grails 中使用 jQuery 和 DataTables | LCTT (201811) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201811/20180928 Using Grails with jQuery and DataTables","title":"在 Grails 中使用 jQuery 和 DataTables","tag":"201811","desc":""},"relativePath":"201811/20180928 Using Grails with jQuery and DataTables.md","filePath":"[post].md"}'),c={name:"201811/20180928 Using Grails with jQuery and DataTables.md"};function u(g,s,h,b,f,k){const e=o("Link");return r(),d("div",null,[s[58]||(s[58]=n("h1",{id:"在-grails-中使用-jquery-和-datatables",tabindex:"-1"},[a("在 Grails 中使用 jQuery 和 DataTables "),n("a",{class:"header-anchor",href:"#在-grails-中使用-jquery-和-datatables","aria-label":"Permalink to “在 Grails 中使用 jQuery 和 DataTables”"},"​")],-1)),s[59]||(s[59]=n("blockquote",null,[n("p",null,"本文介绍如何构建一个基于 Grails 的数据浏览器来可视化复杂的表格数据。")],-1)),s[60]||(s[60]=n("p",null,[n("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/data_container_block.png?itok=S8MbXEYw",alt:""})],-1)),n("p",null,[s[3]||(s[3]=a("我是 ",-1)),t(e,{href:"https://grails.org/"},{default:l(()=>[...s[0]||(s[0]=[a("Grails",-1)])]),_:1}),s[4]||(s[4]=a(" 的忠实粉丝。当然，我主要是热衷于利用命令行工具来探索和分析数据的数据从业人员。数据从业人员经常需要",-1)),s[5]||(s[5]=n("em",null,"查看",-1)),s[6]||(s[6]=a("数据，这也意味着他们通常拥有优秀的数据浏览器。利用 Grails、",-1)),t(e,{href:"https://jquery.com/"},{default:l(()=>[...s[1]||(s[1]=[a("jQuery",-1)])]),_:1}),s[7]||(s[7]=a("，以及 ",-1)),t(e,{href:"https://datatables.net/"},{default:l(()=>[...s[2]||(s[2]=[a("DataTables jQuery 插件",-1)])]),_:1}),s[8]||(s[8]=a("，我们可以制作出非常友好的表格数据浏览器。",-1))]),n("p",null,[t(e,{href:"https://datatables.net/"},{default:l(()=>[...s[9]||(s[9]=[a("DataTables 网站",-1)])]),_:1}),s[11]||(s[11]=a("提供了许多“食谱式”的教程文档，展示了如何组合一些优秀的示例应用程序，这些程序包含了完成一些非常漂亮的东西所必要的 JavaScript、HTML，以及偶尔出现的 ",-1)),t(e,{href:"http://php.net/"},{default:l(()=>[...s[10]||(s[10]=[a("PHP",-1)])]),_:1}),s[12]||(s[12]=a("。但对于那些宁愿使用 Grails 作为后端的人来说，有必要进行一些说明示教。此外，样本程序中使用的数据是一个虚构公司的员工的单个平面表格数据，因此处理这些复杂的表关系可以作为读者的一个练习项目。",-1))]),n("p",null,[s[15]||(s[15]=a("本文中，我们将创建具有略微复杂的数据结构和 DataTables 浏览器的 Grails 应用程序。我们将介绍 Grails 标准，它是 ",-1)),t(e,{href:"http://groovy-lang.org/"},{default:l(()=>[...s[13]||(s[13]=[a("Groovy",-1)])]),_:1}),s[16]||(s[16]=a(" 式的 Java Hibernate 标准。我已将代码托管在 ",-1)),t(e,{href:"https://github.com/monetschemist/grails-datatables"},{default:l(()=>[...s[14]||(s[14]=[a("GitHub",-1)])]),_:1}),s[17]||(s[17]=a(" 上方便大家访问，因此本文主要是对代码细节的解读。",-1))]),n("p",null,[s[21]||(s[21]=a("首先，你需要配置 Java、Groovy、Grails 的使用环境。对于 Grails，我倾向于使用终端窗口和 ",-1)),t(e,{href:"https://www.vim.org/"},{default:l(()=>[...s[18]||(s[18]=[a("Vim",-1)])]),_:1}),s[22]||(s[22]=a("，本文也使用它们。为获得现代的 Java 环境，建议下载并安装 Linux 发行版提供的 ",-1)),t(e,{href:"http://openjdk.java.net/"},{default:l(()=>[...s[19]||(s[19]=[a("Open Java Development Kit",-1)])]),_:1}),s[23]||(s[23]=a(" （OpenJDK）（应该是 Java 8、9、10 或 11 之一，撰写本文时，我正在使用 Java 8）。从我的角度来看，获取最新的 Groovy 和 Grails 的最佳方法是使用 ",-1)),t(e,{href:"http://sdkman.io/"},{default:l(()=>[...s[20]||(s[20]=[a("SDKMAN!",-1)])]),_:1}),s[24]||(s[24]=a("。",-1))]),n("p",null,[s[26]||(s[26]=a("从未尝试过 Grails 的读者可能需要做一些背景资料阅读。作为初学者，推荐文章 ",-1)),t(e,{href:"http://guides.grails.org/creating-your-first-grails-app/guide/index.html"},{default:l(()=>[...s[25]||(s[25]=[a("创建你的第一个 Grails 应用程序",-1)])]),_:1}),s[27]||(s[27]=a("。",-1))]),s[61]||(s[61]=n("h3",{id:"获取员工信息浏览器应用程序",tabindex:"-1"},[a("获取员工信息浏览器应用程序 "),n("a",{class:"header-anchor",href:"#获取员工信息浏览器应用程序","aria-label":"Permalink to “获取员工信息浏览器应用程序”"},"​")],-1)),n("p",null,[s[29]||(s[29]=a("正如上文所提，我将本文中员工信息浏览器的源代码托管在 ",-1)),t(e,{href:"https://github.com/monetschemist/grails-datatables"},{default:l(()=>[...s[28]||(s[28]=[a("GitHub",-1)])]),_:1}),s[30]||(s[30]=a("上。进一步讲，应用程序 ",-1)),s[31]||(s[31]=n("strong",null,"embrow",-1)),s[32]||(s[32]=a(" 是在 Linux 终端中用如下命令构建的：",-1))]),s[62]||(s[62]=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cd Projects</span></span>
<span class="line"><span>grails create-app com.nuevaconsulting.embrow</span></span></code></pre></div><p>域类和单元测试创建如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>grails create-domain-class com.nuevaconsulting.embrow.Position</span></span>
<span class="line"><span>grails create-domain-class com.nuevaconsulting.embrow.Office</span></span>
<span class="line"><span>grails create-domain-class com.nuevaconsulting.embrow.Employeecd embrowgrails createdomaincom.grails createdomaincom.grails createdomaincom.</span></span></code></pre></div><p>这种方式构建的域类没有属性，因此必须按如下方式编辑它们：</p><p><code>Position</code> 域类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.nuevaconsulting.embrow</span></span>
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
<span class="line"><span>}com.Stringint startingstatic constraintsnullableblankstarting nullable</span></span></code></pre></div><p><code>Office</code> 域类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.nuevaconsulting.embrow</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p><code>Enployee</code> 域类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.nuevaconsulting.embrow</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>请注意，虽然 <code>Position</code> 和 <code>Office</code> 域类使用了预定义的 Groovy 类型 <code>String</code> 以及 <code>int</code>，但 <code>Employee</code> 域类定义了 <code>Position</code> 和 <code>Office</code> 字段（以及预定义的 <code>Date</code>）。这会导致创建数据库表，其中存储的 <code>Employee</code> 实例中包含了指向存储 <code>Position</code> 和 <code>Office</code> 实例表的引用或者外键。</p><p>现在你可以生成控制器，视图，以及其他各种测试组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-all com.nuevaconsulting.embrow.Position</span></span>
<span class="line"><span>grails generate-all com.nuevaconsulting.embrow.Office</span></span>
<span class="line"><span>grails generate-all com.nuevaconsulting.embrow.Employeegrails generateall com.grails generateall com.grails generateall com.</span></span></code></pre></div><p>此时，你已经准备好了一个基本的增删改查（CRUD）应用程序。我在 <code>grails-app/init/com/nuevaconsulting/BootStrap.groovy</code> 中包含了一些基础数据来填充表格。</p><p>如果你用如下命令来启动应用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>grails run-app</span></span></code></pre></div><p>在浏览器输入 <code>http://localhost:8080/</code>，你将会看到如下界面：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen_1.png" alt="Embrow home screen"></p><p><em>Embrow 应用程序主界面。</em></p><p>单击 “OfficeController” 链接，会跳转到如下界面：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen_2.png" alt="Office list"></p><p><em>Office 列表</em></p><p>注意，此表由 <code>OfficeController</code> 的 <code>index</code> 方式生成，并由视图 <code>office/index.gsp</code> 显示。</p><p>同样，单击 “EmployeeController” 链接 跳转到如下界面：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen3.png" alt="Employee controller"></p><p><em>employee 控制器</em></p><p>好吧，这很丑陋： Position 和 Office 链接是什么？</p><p>上面的命令 <code>generate-all</code> 生成的视图创建了一个叫 <code>index.gsp</code> 的文件，它使用 Grails <code>&lt;f:table/&gt;</code> 标签，该标签默认会显示类名（<code>com.nuevaconsulting.embrow.Position</code>）和持久化示例标识符（<code>30</code>）。这个操作可以自定义用来产生更好看的东西，并且自动生成链接，自动生成分页以及自动生成可排序列的一些非常简洁直观的东西。</p><p>但该员工信息浏览器功能也是有限的。例如，如果想查找 “position” 信息中包含 “dev” 的员工该怎么办？如果要组合排序，以姓氏为主排序关键字，“office” 为辅助排序关键字，该怎么办？或者，你需要将已排序的数据导出到电子表格或 PDF 文档以便通过电子邮件发送给无法访问浏览器的人，该怎么办？</p><p>jQuery DataTables 插件提供了这些所需的功能。允许你创建一个完成的表格数据浏览器。</p><h3 id="创建员工信息浏览器视图和控制器的方法" tabindex="-1">创建员工信息浏览器视图和控制器的方法 <a class="header-anchor" href="#创建员工信息浏览器视图和控制器的方法" aria-label="Permalink to “创建员工信息浏览器视图和控制器的方法”">​</a></h3><p>要基于 jQuery DataTables 创建员工信息浏览器，你必须先完成以下两个任务：</p><ol><li>创建 Grails 视图，其中包含启用 DataTable 所需的 HTML 和 JavaScript</li><li>给 Grails 控制器增加一个方法来控制新视图。</li></ol><h4 id="员工信息浏览器视图" tabindex="-1">员工信息浏览器视图 <a class="header-anchor" href="#员工信息浏览器视图" aria-label="Permalink to “员工信息浏览器视图”">​</a></h4><p>在目录 <code>embrow/grails-app/views/employee</code> 中，首先复制 <code>index.gsp</code> 文件，重命名为 <code>browser.gsp</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cd Projects</span></span>
<span class="line"><span>cd embrow/grails-app/views/employee</span></span>
<span class="line"><span>cp gsp browser.gsp</span></span></code></pre></div><p>此刻，你自定义新的 <code>browser.gsp</code> 文件来添加相关的 jQuery DataTables 代码。</p><p>通常，在可能的时候，我喜欢从内容提供商处获得 JavaScript 和 CSS；在下面这行后面：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;title&gt;&lt;g:message code=&quot;default.list.label&quot; args=&quot;[entityName]&quot; /&gt;&lt;/title&gt;</span></span></code></pre></div><p>插入如下代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;script src=&quot;https://code.jquery.com/jquery-2.2.4.min.js&quot; integrity=&quot;sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;</span></span>
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
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf8&quot; src=&quot;https://cdn.datatables.net/buttons/1.5.1/js/buttons.print.min.js &quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>然后删除 <code>index.gsp</code> 中提供数据分页的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div id=&quot;list-employee&quot; class=&quot;content scaffold-list&quot; role=&quot;main&quot;&gt;</span></span>
<span class="line"><span>&lt;h1&gt;&lt;g:message code=&quot;default.list.label&quot; args=&quot;[entityName]&quot; /&gt;&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;g:if test=&quot;\${flash.message}&quot;&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;message&quot; role=&quot;status&quot;&gt;\${flash.message}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/g:if&gt;</span></span>
<span class="line"><span>&lt;f:table collection=&quot;\${employeeList}&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;pagination&quot;&gt;</span></span>
<span class="line"><span>&lt;g:paginate total=&quot;\${employeeCount ?: 0}&quot; /&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>并插入实现 jQuery DataTables 的代码。</p><p>要插入的第一部分是 HTML，它将创建浏览器的基本表格结构。DataTables 与后端通信的应用程序来说，它们只提供表格页眉和页脚；DataTables JavaScript 则负责表中内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div id=&quot;employee-browser&quot; class=&quot;content&quot; role=&quot;main&quot;&gt;</span></span>
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
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>接下来，插入一个 JavaScript 块，它主要提供三个功能：它设置页脚中显示的文本框的大小，以进行列过滤，建立 DataTables 表模型，并创建一个处理程序来进行列过滤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;g:javascript&gt;</span></span>
<span class="line"><span>$(&#39;#employee_dt tfoot th&#39;).each( function() {javascript</span></span></code></pre></div><p>下面的代码处理表格列底部的过滤器框的大小：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var title = $(this).text();</span></span>
<span class="line"><span>if (title == &#39;Extension&#39; || title == &#39;Hired&#39;)</span></span>
<span class="line"><span>$(this).html(&#39;&lt;input type=&quot;text&quot; size=&quot;5&quot; placeholder=&quot;&#39; + title + &#39;?&quot; /&gt;&#39;);</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>$(this).html(&#39;&lt;input type=&quot;text&quot; size=&quot;15&quot; placeholder=&quot;&#39; + title + &#39;?&quot; /&gt;&#39;);</span></span>
<span class="line"><span>});titletitletitletitletitle</span></span></code></pre></div><p>接下来，定义表模型。这是提供所有表选项的地方，包括界面的滚动，而不是分页，根据 DOM 字符串提供的装饰，将数据导出为 CSV 和其他格式的能力，以及建立与服务器的 AJAX 连接。 请注意，使用 Groovy GString 调用 Grails <code>createLink()</code> 的方法创建 URL，在 <code>EmployeeController</code> 中指向 <code>browserLister</code> 操作。同样有趣的是表格列的定义。此信息将发送到后端，后端查询数据库并返回相应的记录。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var table = $(&#39;#employee_dt&#39;).DataTable( {</span></span>
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
<span class="line"><span>});</span></span></code></pre></div><p>最后，监视过滤器列以进行更改，并使用它们来应用过滤器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>table.columns().every(function() {</span></span>
<span class="line"><span>var that = this;</span></span>
<span class="line"><span>$(&#39;input&#39;, this.footer()).on(&#39;keyup change&#39;, function(e) {</span></span>
<span class="line"><span>if (that.search() != this.value &amp;&amp; 8 &lt; e.keyCode &amp;&amp; e.keyCode &lt; 32)</span></span>
<span class="line"><span>that.search(this.value).draw();</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>这就是 JavaScript，这样就完成了对视图代码的更改。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>});</span></span>
<span class="line"><span>&lt;/g:javascript&gt;</span></span></code></pre></div><p>以下是此视图创建的UI的屏幕截图：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen_4.png" alt=""></p><p>这是另一个屏幕截图，显示了过滤和多列排序（寻找 “position” 包括字符 “dev” 的员工，先按 “office” 排序，然后按姓氏排序）：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen_5.png" alt=""></p><p>这是另一个屏幕截图，显示单击 CSV 按钮时会发生什么：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen6.png" alt=""></p><p>最后，这是一个截图，显示在 LibreOffice 中打开的 CSV 数据：</p><p><img src="https://opensource.com/sites/default/files/uploads/screen7.png" alt=""></p><p>好的，视图部分看起来非常简单；因此，控制器必须做所有繁重的工作，对吧？ 让我们来看看……</p><h4 id="控制器-browserlister-操作" tabindex="-1">控制器 browserLister 操作 <a class="header-anchor" href="#控制器-browserlister-操作" aria-label="Permalink to “控制器 browserLister 操作”">​</a></h4><p>回想一下，我们看到过这个字符串：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&quot;\${createLink(controller: &#39;employee&#39;, action: &#39;browserLister&#39;)}&quot;</span></span></code></pre></div>`,68)),n("p",null,[s[34]||(s[34]=a("对于从 DataTables 模型中调用 AJAX 的 URL，是在 Grails 服务器上动态创建 HTML 链接，其 Grails 标记背后通过调用 ",-1)),t(e,{href:"https://gsp.grails.org/latest/ref/Tags/createLink.html"},{default:l(()=>[...s[33]||(s[33]=[a("createLink()",-1)])]),_:1}),s[35]||(s[35]=a(" 的方法实现的。这会最终产生一个指向 ",-1)),s[36]||(s[36]=n("code",null,"EmployeeController",-1)),s[37]||(s[37]=a(" 的链接，位于：",-1))]),s[63]||(s[63]=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>embrow/grails-app/controllers/com/nuevaconsulting/embrow/EmployeeController.groovy</span></span></code></pre></div><p>特别是控制器方法 <code>browserLister()</code>。我在代码中留了一些 <code>print</code> 语句，以便在运行时能够在终端看到中间结果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def browserLister() {</span></span>
<span class="line"><span>        // Applies filters and sorting to return a list of desired employees</span></span></code></pre></div><p>首先，打印出传递给 <code>browserLister()</code> 的参数。我通常使用此代码开始构建控制器方法，以便我完全清楚我的控制器正在接收什么。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>      println &quot;employee browserLister params $params&quot;</span></span>
<span class="line"><span>        println()</span></span></code></pre></div><p>接下来，处理这些参数以使它们更加有用。首先，jQuery DataTables 参数，一个名为 <code>jqdtParams</code> 的 Groovy 映射：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def jqdtParams = [:]</span></span>
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
<span class="line"><span>println()</span></span></code></pre></div><p>接下来，列数据，一个名为 <code>columnMap</code> 的 Groovy 映射：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def columnMap = jqdtParams.columns.collectEntries { k, v -&gt;</span></span>
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
<span class="line"><span>println()</span></span></code></pre></div><p>接下来，从 <code>columnMap</code> 中检索的所有列表，以及在视图中应如何排序这些列表，Groovy 列表分别称为 <code>allColumnList</code> 和 <code>orderList</code> ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def allColumnList = columnMap.keySet() as List</span></span>
<span class="line"><span>println &quot;employee allColumnList $allColumnList&quot;</span></span>
<span class="line"><span>def orderList = jqdtParams.order.collect { k, v -&gt; [allColumnList[v.column as Integer], v.dir] }</span></span>
<span class="line"><span>println &quot;employee orderList $orderList&quot;</span></span></code></pre></div><p>我们将使用 Grails 的 Hibernate 标准实现来实际选择要显示的元素以及它们的排序和分页。标准要求过滤器关闭；在大多数示例中，这是作为标准实例本身的创建的一部分给出的，但是在这里我们预先定义过滤器闭包。请注意，在这种情况下，“date hired” 过滤器的相对复杂的解释被视为一年并应用于建立日期范围，并使用 <code>createAlias</code> 以允许我们进入相关类别 <code>Position</code> 和 <code>Office</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def filterer = {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>是时候应用上述内容了。第一步是获取分页代码所需的所有 <code>Employee</code> 实例的总数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        def recordsTotal = Employee.count()</span></span>
<span class="line"><span>        println &quot;employee recordsTotal $recordsTotal&quot;</span></span></code></pre></div><p>接下来，将过滤器应用于 <code>Employee</code> 实例以获取过滤结果的计数，该结果将始终小于或等于总数（同样，这是针对分页代码）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        def c = Employee.createCriteria()</span></span>
<span class="line"><span>        def recordsFiltered = c.count {</span></span>
<span class="line"><span>            filterer.delegate = delegate</span></span>
<span class="line"><span>            filterer()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        println &quot;employee recordsFiltered $recordsFiltered&quot;</span></span></code></pre></div><p>获得这两个计数后，你还可以使用分页和排序信息获取实际过滤的实例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>      def orderer = Employee.withCriteria {</span></span>
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
<span class="line"><span>        }</span></span></code></pre></div><p>要完全清楚，JTable 中的分页代码管理三个计数：数据集中的记录总数，应用过滤器后得到的数字，以及要在页面上显示的数字（显示是滚动还是分页）。 排序应用于所有过滤的记录，并且分页应用于那些过滤的记录的块以用于显示目的。</p><p>接下来，处理命令返回的结果，在每行中创建指向 <code>Employee</code>、<code>Position</code> 和 <code>Office</code> 实例的链接，以便用户可以单击这些链接以获取相关实例的所有详细信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        def dollarFormatter = new DecimalFormat(&#39;$##,###.##&#39;)</span></span>
<span class="line"><span>        def employees = orderer.collect { employee -&gt;</span></span>
<span class="line"><span>            [&#39;surname&#39;: &quot;&lt;a href=&#39;\${createLink(controller: &#39;employee&#39;, action: &#39;show&#39;, id: employee.id)}&#39;&gt;\${employee.surname}&lt;/a&gt;&quot;,</span></span>
<span class="line"><span>                &#39;givenNames&#39;: employee.givenNames,</span></span>
<span class="line"><span>                &#39;position&#39;: &quot;&lt;a href=&#39;\${createLink(controller: &#39;position&#39;, action: &#39;show&#39;, id: employee.position?.id)}&#39;&gt;\${employee.position?.name}&lt;/a&gt;&quot;,</span></span>
<span class="line"><span>                &#39;office&#39;: &quot;&lt;a href=&#39;\${createLink(controller: &#39;office&#39;, action: &#39;show&#39;, id: employee.office?.id)}&#39;&gt;\${employee.office?.name}&lt;/a&gt;&quot;,</span></span>
<span class="line"><span>                &#39;extension&#39;: employee.extension,</span></span>
<span class="line"><span>                &#39;hired&#39;: employee.hired.format(&#39;yyyy/MM/dd&#39;),</span></span>
<span class="line"><span>                &#39;salary&#39;: dollarFormatter.format(employee.salary)]</span></span>
<span class="line"><span>        }</span></span></code></pre></div><p>最后，创建要返回的结果并将其作为 JSON 返回，这是 jQuery DataTables 所需要的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        def result = [draw: jqdtParams.draw, recordsTotal: recordsTotal, recordsFiltered: recordsFiltered, data: employees]</span></span>
<span class="line"><span>        render(result as JSON)</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>大功告成。</p><p>如果你熟悉 Grails，这可能看起来比你原先想象的要多，但这里没有火箭式的一步到位方法，只是很多分散的操作步骤。但是，如果你没有太多接触 Grails（或 Groovy），那么需要了解很多新东西 - 闭包，代理和构建器等等。</p>`,26)),n("p",null,[s[40]||(s[40]=a("在那种情况下，从哪里开始？ 最好的地方是了解 Groovy 本身，尤其是 ",-1)),t(e,{href:"http://groovy-lang.org/closures.html"},{default:l(()=>[...s[38]||(s[38]=[a("Groovy closures",-1)])]),_:1}),s[41]||(s[41]=a(" 和 ",-1)),t(e,{href:"http://groovy-lang.org/dsls.html"},{default:l(()=>[...s[39]||(s[39]=[a("Groovy delegates and builders",-1)])]),_:1}),s[42]||(s[42]=a("。然后再去阅读上面关于 Grails 和 Hibernate 条件查询的建议阅读文章。",-1))]),s[64]||(s[64]=n("h3",{id:"结语",tabindex:"-1"},[a("结语 "),n("a",{class:"header-anchor",href:"#结语","aria-label":"Permalink to “结语”"},"​")],-1)),s[65]||(s[65]=n("p",null,"jQuery DataTables 为 Grails 制作了很棒的表格数据浏览器。对视图进行编码并不是太棘手，但 DataTables 文档中提供的 PHP 示例提供的功能仅到此位置。特别是，它们不是用 Grails 程序员编写的，也不包含探索使用引用其他类（实质上是查找表）的元素的更精细的细节。",-1)),s[66]||(s[66]=n("p",null,"我使用这种方法制作了几个数据浏览器，允许用户选择要查看和累积记录计数的列，或者只是浏览数据。即使在相对适度的 VPS 上的百万行表中，性能也很好。",-1)),s[67]||(s[67]=n("p",null,"一个警告：我偶然发现了 Grails 中暴露的各种 Hibernate 标准机制的一些问题（请参阅我的其他 GitHub 代码库），因此需要谨慎和实验。如果所有其他方法都失败了，另一种方法是动态构建 SQL 字符串并执行它们。在撰写本文时，我更喜欢使用 Grails 标准，除非我遇到杂乱的子查询，但这可能只反映了我在 Hibernate 中对子查询的相对缺乏经验。",-1)),s[68]||(s[68]=n("p",null,"我希望 Grails 程序员发现本文的有趣性。请随时在下面留下评论或建议。",-1)),s[69]||(s[69]=n("hr",null,null,-1)),n("p",null,[s[44]||(s[44]=a("via: ",-1)),t(e,{href:"https://opensource.com/article/18/9/using-grails-jquery-and-datatables"},{default:l(()=>[...s[43]||(s[43]=[a("https://opensource.com/article/18/9/using-grails-jquery-and-datatables",-1)])]),_:1})]),n("p",null,[s[49]||(s[49]=a("作者：",-1)),t(e,{href:"https://opensource.com/users/clhermansen"},{default:l(()=>[...s[45]||(s[45]=[a("Chris Hermansen",-1)])]),_:1}),s[50]||(s[50]=a(" 选题：",-1)),t(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[46]||(s[46]=[a("lujun9972",-1)])]),_:1}),s[51]||(s[51]=a(" 译者：",-1)),t(e,{href:"https://github.com/jrglinux"},{default:l(()=>[...s[47]||(s[47]=[a("jrg",-1)])]),_:1}),s[52]||(s[52]=a(" 校对：",-1)),t(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[48]||(s[48]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[55]||(s[55]=a("本文由 ",-1)),t(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[53]||(s[53]=[a("LCTT",-1)])]),_:1}),s[56]||(s[56]=a(" 原创编译，",-1)),t(e,{href:"https://linux.cn/"},{default:l(()=>[...s[54]||(s[54]=[a("Linux中国",-1)])]),_:1}),s[57]||(s[57]=a(" 荣誉推出",-1))])])}const v=i(c,[["render",u]]);export{q as __pageData,v as default};
