import{_ as t,a0 as r,w as o,s as u,ao as l,I as i,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"使用 R 语言构建一个可交互的 Web 应用 | LCTT x X-CMD","titleTemplate":false,"description":"使用 R 语言构建一个可交互的 Web 应用 | LCTT (202309) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 R 语言构建一个可交互的 Web 应用 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 R 语言构建一个可交互的 Web 应用 | LCTT (202309) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202309/20221004 Using R for Building an Interactive Web App","title":"使用 R 语言构建一个可交互的 Web 应用","tag":"202309","desc":""},"relativePath":"202309/20221004 Using R for Building an Interactive Web App.md","filePath":"[post].md"}'),d={name:"202309/20221004 Using R for Building an Interactive Web App.md"};function c(m,s,h,b,g,f){const a=r("Link");return o(),u("div",null,[s[21]||(s[21]=l('<h1 id="使用-r-语言构建一个可交互的-web-应用" tabindex="-1">使用 R 语言构建一个可交互的 Web 应用 <a class="header-anchor" href="#使用-r-语言构建一个可交互的-web-应用" aria-label="Permalink to “使用 R 语言构建一个可交互的 Web 应用”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202309/15/091903rot5yx9z9x8fq5df.jpg" alt=""></p><p>数据分析已成为企业的当务之急，并且对具有用户友好界面的数据驱动应用程序有巨大的需求。本文介绍如何使用 R 语言中的 Shiny 包开发交互式 Web 应用程序，R 语言是一种流行的数据科学编程语言。</p><p>如今，世界各地几乎所有企业都以某种形式依赖于数据。数据科学通过使用数据驱动的应用程序帮助许多企业实现转型，无论是在金融、银行、零售、物流、电子商务、运输、航空还是任何其他领域。</p><p>高性能计算机和低成本存储使我们现在能够在几分钟内预测结果，而不是像以前一样以前需要花费很多时间。数据科学家着眼于未来，正在开发具有高性能和多维可视化的便捷应用。这一切都始于大数据，它由三个组成部分组成：数量、多样性和速度。算法和模型都是根据这些数据提供的。机器学习和人工智能领域最前沿的数据科学家正在创建能够自我改进、检测错误并从中学习的模型。</p><p>在数据科学领域，统计和计算用于将数据转化为有用的信息，通常称为数据驱动科学。数据科学是来自各个领域的方法的综合，用于收集、分析和解释数据，以形成新的见解并做出选择。构成数据科学的技术学科包括统计学、概率、数学、机器学习、商业智能和一些编程。</p><p>数据科学可以应用于各个领域（图 1）。对大型、复杂数据集的分析是数据科学的重点。它帮助我们创建了一个以全新方式看待数据的新宇宙。亚马逊、谷歌和 Facebook 等科技巨头利用数据科学原理进行商业智能和商业决策。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/09/Figure-1-Key-applications-and-use-cases-of-data-science.jpg" alt="Figure 1 Key applications-and use cases of data science"></p><h3 id="r-语言-为数据科学量身打造的语言" tabindex="-1">R 语言：为数据科学量身打造的语言 <a class="header-anchor" href="#r-语言-为数据科学量身打造的语言" aria-label="Permalink to “R 语言：为数据科学量身打造的语言”">​</a></h3><p>由于海量的可用信息，我们迫切需要数据分析以得到新的见解，在多种技术的帮助下，原始数据转化为成品数据产品。在数据研究、处理、转换和可视化方面，没有比 R 语言更好的工具了。</p><p>R 语言用于数据科学的主要功能包括：</p><ul><li>数据预处理</li><li>社交媒体数据获取和分析</li><li>对数据结构的各种操作</li><li>提取、转换、加载（ETL）</li><li>连接到各种数据库，包括 SQL 和电子表格</li><li>与 NoSQL 数据库交互</li><li>使用模型进行训练和预测</li><li>机器学习模型</li><li>聚类</li><li>傅里叶变换</li><li>网页抓取</li></ul><p>R 语言是一种强大的编程语言，常用于统计计算和数据分析。有关优化 R 语言用户界面的努力由来已久。从简单的文本编辑器到更现代的交互式 R Studio 和 Jupyter Notebooks，世界各地的多个数据科学小组都在关注 R 语言的发展。</p><p>只有全世界 R 用户的贡献才使这一切成为可能。R 语言中包含的强大软件包使其日益强大。许多开源软件包使处理大型数据集和可视化数据变得更加容易和高效。</p><h3 id="使用-shiny-在-r-语言中开发交互式-web-应用" tabindex="-1">使用 Shiny 在 R 语言中开发交互式 Web 应用 <a class="header-anchor" href="#使用-shiny-在-r-语言中开发交互式-web-应用" aria-label="Permalink to “使用 Shiny 在 R 语言中开发交互式 Web 应用”">​</a></h3><p>你可以使用 Shiny 包在 R 语言中构建交互式 Web 应用程序。应用程序可以托管在网站上、嵌入 R Markdown 文档中，或用于开发控制面板板和可视化。CSS 主题、HTML 小部件和 JavaScript 操作都可以用于进一步自定义你的 Shiny 应用程序。</p><p>Shiny 是一款 R 语言工具，它可以轻松创建交互式的 Web 应用程序。它允许你将你的 R 代码扩展到 Web 上，从而使更多的人能够使用它，从中获益。</p><p>除了 Shiny 内置的功能外，还有许多第三方扩展包可用，例如 shinythemes、shinydashboard 和 shinyjs。</p><p>使用 Shiny 可以开发各种应用程序。以下是其中一些：</p><ul><li>基于 Web 应用的机器学习</li><li>具有动态控件的 Web 应用程序</li><li>数据驱动的仪表盘</li><li>多重数据集的交互式应用</li><li>实时数据可视化面板</li><li>数据收集表单</li></ul><p>Shiny Web 应用程序可以分为以下几类：</p><ul><li>用户接口</li><li>服务功能逻辑</li><li>Shiny 应用逻辑</li></ul>',22)),i("p",null,[s[1]||(s[1]=n("获取更深理解，请访问以下网站 ",-1)),p(a,{href:"https://shiny.rstudio.com/gallery/"},{default:e(()=>[...s[0]||(s[0]=[n("https://shiny.rstudio.com/gallery/",-1)])]),_:1}),s[2]||(s[2]=n(" 。",-1))]),i("p",null,[s[4]||(s[4]=n("其中某个用 Shiny 开发的应用如图 2（",-1)),p(a,{href:"https://shiny.rstudio.com/gallery/radiant.html"},{default:e(()=>[...s[3]||(s[3]=[n("https://shiny.rstudio.com/gallery/radiant.html",-1)])]),_:1}),s[5]||(s[5]=n(" ）。",-1))]),s[22]||(s[22]=l(`<p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/09/Figure-2-Shiny-based-app.jpg" alt="Figure 2: Shiny based app"></p><h3 id="销售仪表盘的生成" tabindex="-1">销售仪表盘的生成 <a class="header-anchor" href="#销售仪表盘的生成" aria-label="Permalink to “销售仪表盘的生成”">​</a></h3><p>下面是一个与销售仪表盘相关的 Web 应用程序的代码片段。该仪表板具有多个控件和用户界面模块，用于查看数据。</p><p>首先，安装 Shiny 包，然后在代码中调用它，以便将输出呈现为 Web 页面的形式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>library(shiny)</span></span>
<span class="line"><span>library(dplyr)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sales &lt;- vroom::vroom(“salesdata.csv”, na = “”)</span></span>
<span class="line"><span>ui &lt;- fluidPage(</span></span>
<span class="line"><span>    titlePanel(“Dashboard for Sales Data”),</span></span>
<span class="line"><span>    sidebarLayout(</span></span>
<span class="line"><span>        sidebarPanel(</span></span>
<span class="line"><span>            selectInput(“territories”, “territories”, choices = unique(sales$territories)),</span></span>
<span class="line"><span>            selectInput(“Customers”, “Customer”, choices = NULL),</span></span>
<span class="line"><span>            selectInput(“orders”, “Order number”, choices = NULL, size = 5, selectize = FALSE),</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>        mainPanel(</span></span>
<span class="line"><span>            uiOutput(“customer”),</span></span>
<span class="line"><span>            tableOutput(“data”)</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>server &lt;- function(input, output, session) {</span></span>
<span class="line"><span>    territories &lt;- reactive({</span></span>
<span class="line"><span>        req(input$territories)</span></span>
<span class="line"><span>        filter(sales, territories == input$territories)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    customer &lt;- reactive({</span></span>
<span class="line"><span>        req(input$Customers)</span></span>
<span class="line"><span>        filter(territories(), Customers == input$Customers)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    output$customer &lt;- renderUI({</span></span>
<span class="line"><span>        row &lt;- customer()[1, ]</span></span>
<span class="line"><span>        tags$div(</span></span>
<span class="line"><span>            class = “well”,</span></span>
<span class="line"><span>            tags$p(tags$strong(“Name: “), row$customers),</span></span>
<span class="line"><span>            tags$p(tags$strong(“Phone: “), row$contact),</span></span>
<span class="line"><span>            tags$p(tags$strong(“Contact: “), row$fname, “ “, row$lname)</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    order &lt;- reactive({</span></span>
<span class="line"><span>        req(input$order)</span></span>
<span class="line"><span>        customer() %&gt;%</span></span>
<span class="line"><span>        filter(ORDER == input$order) %&gt;%</span></span>
<span class="line"><span>        arrange(OLNUMBER) %&gt;%</span></span>
<span class="line"><span>        select(pline, qty, price, sales, status)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    output$data &lt;- renderTable(order())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    observeEvent(territories(), {</span></span>
<span class="line"><span>        updateSelectInput(session, “Customers”, choices = unique(territories()$Customers), selected = character())</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    observeEvent(customer(), {</span></span>
<span class="line"><span>        updateSelectInput(session, “order”, choices = unique(customer()$order))</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>shinyApp(ui, server)</span></span></code></pre></div><p>运行 Shiny 应用程序的代码后，生成了图 3 所示的输出，可以在任何 Web 浏览器上查看。销售仪表盘具有多个控件，并且具有不同的用户界面模块，非常互动。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/09/Figure-3-Sales-dashboard-with-multiple-controls.jpg" alt="Figure 3: Sales dashboard with multiple controls"></p><p>通过使用 Shiny Cloud，可以将这个应用程序部署和托管在云上，以便随时随地在互联网上使用。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/09/Figure-4-Cloud-for-hosting-and-deployment-of-Shiny-app.jpg" alt="Figure 4: Cloud for hosting and deployment of Shiny app"></p><p>Shiny Cloud 的免费版本允许在 25 个活动小时内部署五个应用程序。研究人员和数据科学家可以使用 R 的 Shiny 库开发基于实时数据驱动的用户友好应用程序。这个库也可以用于在 Web 平台上部署他们的机器学习应用程序。</p><p><em>（题图：MJ/1a76ad20-e56d-480b-b28b-8cf74d2230a1）</em></p><hr>`,12)),i("p",null,[s[7]||(s[7]=n("via: ",-1)),p(a,{href:"https://www.opensourceforu.com/2022/10/using-r-for-building-an-interactive-web-app/"},{default:e(()=>[...s[6]||(s[6]=[n("https://www.opensourceforu.com/2022/10/using-r-for-building-an-interactive-web-app/",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=n("作者：",-1)),p(a,{href:"https://www.opensourceforu.com/author/dr-gaurav-kumar/"},{default:e(()=>[...s[8]||(s[8]=[n("Dr Kumar Gaurav",-1)])]),_:1}),s[13]||(s[13]=n(" 选题：",-1)),p(a,{href:"https://github.com/lkxed"},{default:e(()=>[...s[9]||(s[9]=[n("lkxed",-1)])]),_:1}),s[14]||(s[14]=n(" 译者：",-1)),p(a,{href:"https://github.com/Charonxin"},{default:e(()=>[...s[10]||(s[10]=[n("Charonxin",-1)])]),_:1}),s[15]||(s[15]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[11]||(s[11]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[18]||(s[18]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[16]||(s[16]=[n("LCTT",-1)])]),_:1}),s[19]||(s[19]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[17]||(s[17]=[n("Linux中国",-1)])]),_:1}),s[20]||(s[20]=n(" 荣誉推出",-1))])])}const C=t(d,[["render",c]]);export{S as __pageData,C as default};
