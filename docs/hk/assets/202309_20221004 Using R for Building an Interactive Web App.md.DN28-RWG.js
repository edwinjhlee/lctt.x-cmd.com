import{_ as t,a0 as r,w as o,s as u,ao as l,I as i,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"使用 R 語言構建一個可交互的 Web 應用 | LCTT x X-CMD","titleTemplate":false,"description":"使用 R 語言構建一個可交互的 Web 應用 | LCTT (202309) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 R 語言構建一個可交互的 Web 應用 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 R 語言構建一個可交互的 Web 應用 | LCTT (202309) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202309/20221004 Using R for Building an Interactive Web App","title":"使用 R 語言構建一個可交互的 Web 應用","tag":"202309","desc":""},"relativePath":"202309/20221004 Using R for Building an Interactive Web App.md","filePath":"[post].md"}'),d={name:"202309/20221004 Using R for Building an Interactive Web App.md"};function c(m,s,h,b,g,f){const a=r("Link");return o(),u("div",null,[s[21]||(s[21]=l('<h1 id="使用-r-語言構建一個可交互的-web-應用" tabindex="-1">使用 R 語言構建一個可交互的 Web 應用 <a class="header-anchor" href="#使用-r-語言構建一個可交互的-web-應用" aria-label="Permalink to “使用 R 語言構建一個可交互的 Web 應用”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202309/15/091903rot5yx9z9x8fq5df.jpg" alt=""></p><p>數據分析已成為企業的當務之急，並且對具有用户友好界面的數據驅動應用程序有巨大的需求。本文介紹如何使用 R 語言中的 Shiny 包開發交互式 Web 應用程序，R 語言是一種流行的數據科學編程語言。</p><p>如今，世界各地幾乎所有企業都以某種形式依賴於數據。數據科學通過使用數據驅動的應用程序幫助許多企業實現轉型，無論是在金融、銀行、零售、物流、電子商務、運輸、航空還是任何其他領域。</p><p>高性能計算機和低成本存儲使我們現在能夠在幾分鐘內預測結果，而不是像以前一樣以前需要花費很多時間。數據科學家着眼於未來，正在開發具有高性能和多維可視化的便捷應用。這一切都始於大數據，它由三個組成部分組成：數量、多樣性和速度。算法和模型都是根據這些數據提供的。機器學習和人工智能領域最前沿的數據科學家正在創建能夠自我改進、檢測錯誤並從中學習的模型。</p><p>在數據科學領域，統計和計算用於將數據轉化為有用的信息，通常稱為數據驅動科學。數據科學是來自各個領域的方法的綜合，用於收集、分析和解釋數據，以形成新的見解並做出選擇。構成數據科學的技術學科包括統計學、概率、數學、機器學習、商業智能和一些編程。</p><p>數據科學可以應用於各個領域（圖 1）。對大型、複雜數據集的分析是數據科學的重點。它幫助我們創建了一個以全新方式看待數據的新宇宙。亞馬遜、谷歌和 Facebook 等科技巨頭利用數據科學原理進行商業智能和商業決策。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/09/Figure-1-Key-applications-and-use-cases-of-data-science.jpg" alt="Figure 1 Key applications-and use cases of data science"></p><h3 id="r-語言-為數據科學量身打造的語言" tabindex="-1">R 語言：為數據科學量身打造的語言 <a class="header-anchor" href="#r-語言-為數據科學量身打造的語言" aria-label="Permalink to “R 語言：為數據科學量身打造的語言”">​</a></h3><p>由於海量的可用信息，我們迫切需要數據分析以得到新的見解，在多種技術的幫助下，原始數據轉化為成品數據產品。在數據研究、處理、轉換和可視化方面，沒有比 R 語言更好的工具了。</p><p>R 語言用於數據科學的主要功能包括：</p><ul><li>數據預處理</li><li>社交媒體數據獲取和分析</li><li>對數據結構的各種操作</li><li>提取、轉換、加載（ETL）</li><li>連接到各種資料庫，包括 SQL 和電子表格</li><li>與 NoSQL 資料庫交互</li><li>使用模型進行訓練和預測</li><li>機器學習模型</li><li>聚類</li><li>傅里葉變換</li><li>網頁抓取</li></ul><p>R 語言是一種強大的編程語言，常用於統計計算和數據分析。有關優化 R 語言用户界面的努力由來已久。從簡單的文本編輯器到更現代的交互式 R Studio 和 Jupyter Notebooks，世界各地的多個數據科學小組都在關注 R 語言的發展。</p><p>只有全世界 R 用户的貢獻才使這一切成為可能。R 語言中包含的強大軟件包使其日益強大。許多開源軟件包使處理大型數據集和可視化數據變得更加容易和高效。</p><h3 id="使用-shiny-在-r-語言中開發交互式-web-應用" tabindex="-1">使用 Shiny 在 R 語言中開發交互式 Web 應用 <a class="header-anchor" href="#使用-shiny-在-r-語言中開發交互式-web-應用" aria-label="Permalink to “使用 Shiny 在 R 語言中開發交互式 Web 應用”">​</a></h3><p>你可以使用 Shiny 包在 R 語言中構建交互式 Web 應用程序。應用程序可以託管在網站上、嵌入 R Markdown 文檔中，或用於開發控制面板板和可視化。CSS 主題、HTML 小部件和 JavaScript 操作都可以用於進一步自定義你的 Shiny 應用程序。</p><p>Shiny 是一款 R 語言工具，它可以輕鬆創建交互式的 Web 應用程序。它允許你將你的 R 代碼擴展到 Web 上，從而使更多的人能夠使用它，從中獲益。</p><p>除了 Shiny 內置的功能外，還有許多第三方擴展包可用，例如 shinythemes、shinydashboard 和 shinyjs。</p><p>使用 Shiny 可以開發各種應用程序。以下是其中一些：</p><ul><li>基於 Web 應用的機器學習</li><li>具有動態控件的 Web 應用程序</li><li>數據驅動的儀表盤</li><li>多重數據集的交互式應用</li><li>實時數據可視化面板</li><li>數據收集表單</li></ul><p>Shiny Web 應用程序可以分為以下幾類：</p><ul><li>用户接口</li><li>服務功能邏輯</li><li>Shiny 應用邏輯</li></ul>',22)),i("p",null,[s[1]||(s[1]=n("獲取更深理解，請訪問以下網站 ",-1)),p(a,{href:"https://shiny.rstudio.com/gallery/"},{default:e(()=>[...s[0]||(s[0]=[n("https://shiny.rstudio.com/gallery/",-1)])]),_:1}),s[2]||(s[2]=n(" 。",-1))]),i("p",null,[s[4]||(s[4]=n("其中某個用 Shiny 開發的應用如圖 2（",-1)),p(a,{href:"https://shiny.rstudio.com/gallery/radiant.html"},{default:e(()=>[...s[3]||(s[3]=[n("https://shiny.rstudio.com/gallery/radiant.html",-1)])]),_:1}),s[5]||(s[5]=n(" ）。",-1))]),s[22]||(s[22]=l(`<p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/09/Figure-2-Shiny-based-app.jpg" alt="Figure 2: Shiny based app"></p><h3 id="銷售儀表盤的生成" tabindex="-1">銷售儀表盤的生成 <a class="header-anchor" href="#銷售儀表盤的生成" aria-label="Permalink to “銷售儀表盤的生成”">​</a></h3><p>下面是一個與銷售儀表盤相關的 Web 應用程序的代碼片段。該儀表板具有多個控件和用户界面模組，用於查看數據。</p><p>首先，安裝 Shiny 包，然後在代碼中調用它，以便將輸出呈現為 Web 頁面的形式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>library(shiny)</span></span>
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
<span class="line"><span>shinyApp(ui, server)</span></span></code></pre></div><p>運行 Shiny 應用程序的代碼後，生成了圖 3 所示的輸出，可以在任何 Web 瀏覽器上查看。銷售儀表盤具有多個控件，並且具有不同的用户界面模組，非常互動。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/09/Figure-3-Sales-dashboard-with-multiple-controls.jpg" alt="Figure 3: Sales dashboard with multiple controls"></p><p>通過使用 Shiny Cloud，可以將這個應用程序部署和託管在雲上，以便隨時隨地在互聯網上使用。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/09/Figure-4-Cloud-for-hosting-and-deployment-of-Shiny-app.jpg" alt="Figure 4: Cloud for hosting and deployment of Shiny app"></p><p>Shiny Cloud 的免費版本允許在 25 個活動小時內部署五個應用程序。研究人員和數據科學家可以使用 R 的 Shiny 庫開發基於實時數據驅動的用户友好應用程序。這個庫也可以用於在 Web 平台上部署他們的機器學習應用程序。</p><p><em>（題圖：MJ/1a76ad20-e56d-480b-b28b-8cf74d2230a1）</em></p><hr>`,12)),i("p",null,[s[7]||(s[7]=n("via: ",-1)),p(a,{href:"https://www.opensourceforu.com/2022/10/using-r-for-building-an-interactive-web-app/"},{default:e(()=>[...s[6]||(s[6]=[n("https://www.opensourceforu.com/2022/10/using-r-for-building-an-interactive-web-app/",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=n("作者：",-1)),p(a,{href:"https://www.opensourceforu.com/author/dr-gaurav-kumar/"},{default:e(()=>[...s[8]||(s[8]=[n("Dr Kumar Gaurav",-1)])]),_:1}),s[13]||(s[13]=n(" 選題：",-1)),p(a,{href:"https://github.com/lkxed"},{default:e(()=>[...s[9]||(s[9]=[n("lkxed",-1)])]),_:1}),s[14]||(s[14]=n(" 譯者：",-1)),p(a,{href:"https://github.com/Charonxin"},{default:e(()=>[...s[10]||(s[10]=[n("Charonxin",-1)])]),_:1}),s[15]||(s[15]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[11]||(s[11]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[18]||(s[18]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[16]||(s[16]=[n("LCTT",-1)])]),_:1}),s[19]||(s[19]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[17]||(s[17]=[n("Linux中國",-1)])]),_:1}),s[20]||(s[20]=n(" 榮譽推出",-1))])])}const C=t(d,[["render",c]]);export{S as __pageData,C as default};
