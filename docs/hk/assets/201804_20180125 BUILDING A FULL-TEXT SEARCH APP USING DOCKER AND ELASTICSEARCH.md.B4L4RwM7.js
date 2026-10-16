import{_ as i,a0 as o,w as r,s as c,I as n,x as a,a1 as e,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"使用 Docker 和 Elasticsearch 構建一個全文搜索應用程序 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Docker 和 Elasticsearch 構建一個全文搜索應用程序 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Docker 和 Elasticsearch 構建一個全文搜索應用程序 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Docker 和 Elasticsearch 構建一個全文搜索應用程序 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180125 BUILDING A FULL-TEXT SEARCH APP USING DOCKER AND ELASTICSEARCH","title":"使用 Docker 和 Elasticsearch 構建一個全文搜索應用程序","tag":"201804","desc":""},"relativePath":"201804/20180125 BUILDING A FULL-TEXT SEARCH APP USING DOCKER AND ELASTICSEARCH.md","filePath":"[post].md"}'),d={name:"201804/20180125 BUILDING A FULL-TEXT SEARCH APP USING DOCKER AND ELASTICSEARCH.md"};function u(h,s,g,b,k,m){const p=o("Link");return r(),c("div",null,[s[137]||(s[137]=n("h1",{id:"使用-docker-和-elasticsearch-構建一個全文搜索應用程序",tabindex:"-1"},[a("使用 Docker 和 Elasticsearch 構建一個全文搜索應用程序 "),n("a",{class:"header-anchor",href:"#使用-docker-和-elasticsearch-構建一個全文搜索應用程序","aria-label":"Permalink to “使用 Docker 和 Elasticsearch 構建一個全文搜索應用程序”"},"​")],-1)),s[138]||(s[138]=n("p",null,[n("img",{src:"https://blog-images.patricktriest.com/uploads/library.jpg",alt:""})],-1)),s[139]||(s[139]=n("p",null,[n("em",null,"如何在超過 500 萬篇文章的 Wikipedia 上找到與你研究相關的文章？")],-1)),s[140]||(s[140]=n("p",null,[n("em",null,"如何在超過 20 億用户的 Facebook 中找到你的朋友（並且還拼錯了名字）？")],-1)),s[141]||(s[141]=n("p",null,[n("em",null,"谷歌如何在整個因特網上搜索你的模糊的、充滿拼寫錯誤的查詢？")],-1)),s[142]||(s[142]=n("p",null,"在本教程中，我們將帶你探索如何配置我們自己的全文搜索應用程序（與上述問題中的系統相比，它的複雜度要小很多）。我們的示例應用程序將提供一個 UI 和 API 去從 100 部經典文學（比如，《彼得·潘》 、  《弗蘭肯斯坦》 和  《金銀島》）中搜索完整的文本。",-1)),n("p",null,[s[1]||(s[1]=a("你可以在這裏（",-1)),e(p,{href:"https://search.patricktriest.com/"},{default:l(()=>[...s[0]||(s[0]=[a("https://search.patricktriest.com",-1)])]),_:1}),s[2]||(s[2]=a("）預覽該教程應用的完整版本。",-1))]),s[143]||(s[143]=n("p",null,[n("img",{src:"https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_4_0.png",alt:"preview webapp"})],-1)),n("p",null,[s[4]||(s[4]=a("這個應用程序的源代碼是 100% 開源的，可以在 GitHub 倉庫上找到它們 —— ",-1)),e(p,{href:"https://github.com/triestpa/guttenberg-search"},{default:l(()=>[...s[3]||(s[3]=[a("https://github.com/triestpa/guttenberg-search",-1)])]),_:1}),s[5]||(s[5]=a(" 。",-1))]),n("p",null,[s[9]||(s[9]=a("在應用程序中添加一個快速靈活的全文搜索可能是個挑戰。大多數的主流資料庫，比如，",-1)),e(p,{href:"https://www.postgresql.org/"},{default:l(()=>[...s[6]||(s[6]=[a("PostgreSQL",-1)])]),_:1}),s[10]||(s[10]=a(" 和 ",-1)),e(p,{href:"https://www.mongodb.com/"},{default:l(()=>[...s[7]||(s[7]=[a("MongoDB",-1)])]),_:1}),s[11]||(s[11]=a("，由於受其查詢和索引結構的限制只能提供一個非常基礎的文本搜索功能。為實現高質量的全文搜索，通常的最佳選擇是單獨的數據存儲。",-1)),e(p,{href:"https://www.elastic.co/"},{default:l(()=>[...s[8]||(s[8]=[a("Elasticsearch",-1)])]),_:1}),s[12]||(s[12]=a(" 是一個開源數據存儲的領導者，它專門為執行靈活而快速的全文搜索進行了優化。",-1))]),n("p",null,[s[18]||(s[18]=a("我們將使用 ",-1)),e(p,{href:"https://www.docker.com/"},{default:l(()=>[...s[13]||(s[13]=[a("Docker",-1)])]),_:1}),s[19]||(s[19]=a(" 去配置我們自己的項目環境和依賴。Docker 是一個容器化引擎，它被 ",-1)),e(p,{href:"https://www.uber.com/"},{default:l(()=>[...s[14]||(s[14]=[a("Uber",-1)])]),_:1}),s[20]||(s[20]=a("、",-1)),e(p,{href:"https://www.spotify.com/us/"},{default:l(()=>[...s[15]||(s[15]=[a("Spotify",-1)])]),_:1}),s[21]||(s[21]=a("、",-1)),e(p,{href:"https://www.adp.com/"},{default:l(()=>[...s[16]||(s[16]=[a("ADP",-1)])]),_:1}),s[22]||(s[22]=a(" 以及 ",-1)),e(p,{href:"https://www.paypal.com/us/home"},{default:l(()=>[...s[17]||(s[17]=[a("Paypal",-1)])]),_:1}),s[23]||(s[23]=a(" 使用。構建容器化應用的一個主要優勢是，項目的設置在 Windows、macOS、以及 Linux 上都是相同的 —— 這使我寫這個教程快速又簡單。如果你還沒有使用過 Docker，不用擔心，我們接下來將經歷完整的項目配置。",-1))]),n("p",null,[s[27]||(s[27]=a("我也會使用 ",-1)),e(p,{href:"https://nodejs.org/en/"},{default:l(()=>[...s[24]||(s[24]=[a("Node.js",-1)])]),_:1}),s[28]||(s[28]=a(" （使用 ",-1)),e(p,{href:"http://koajs.com/"},{default:l(()=>[...s[25]||(s[25]=[a("Koa",-1)])]),_:1}),s[29]||(s[29]=a(" 框架）和 ",-1)),e(p,{href:"https://vuejs.org/"},{default:l(()=>[...s[26]||(s[26]=[a("Vue.js",-1)])]),_:1}),s[30]||(s[30]=a("，用它們分別去構建我們自己的搜索 API 和前端 Web 應用程序。",-1))]),s[144]||(s[144]=t('<h3 id="_1-elasticsearch-是什麼" tabindex="-1">1 - Elasticsearch 是什麼？ <a class="header-anchor" href="#_1-elasticsearch-是什麼" aria-label="Permalink to “1 - Elasticsearch 是什麼？”">​</a></h3><p>全文搜索在現代應用程序中是一個有大量需求的特性。搜索也可能是最難的一項特性 —— 許多流行的網站的搜索功能都不合格，要麼返回結果太慢，要麼找不到精確的結果。通常，這種情況是被底層的資料庫所侷限：大多數標準的關係型資料庫侷限於基本的 <code>CONTAINS</code> 或 <code>LIKE</code> SQL 查詢上，它僅提供最基本的字符串匹配功能。</p><p>我們的搜索應用程序將具備：</p><ol><li><strong>快速</strong> - 搜索結果將快速返回，為用户提供一個良好的體驗。</li><li><strong>靈活</strong> - 我們希望能夠去修改搜索如何執行的方式，這是為了便於在不同的資料庫和用户場景下進行優化。</li><li><strong>容錯</strong> - 如果所搜索的內容有拼寫錯誤，我們將仍然會返回相關的結果，而這個結果可能正是用户希望去搜索的結果。</li><li><strong>全文</strong> - 我們不想限制我們的搜索只能與指定的關鍵字或者標籤相匹配 —— 我們希望它可以搜索在我們的數據存儲中的任何東西（包括大的文本字段）。</li></ol><p><img src="https://storage.googleapis.com/cdn.patricktriest.com/blog/images/posts/elastic-library/Elasticsearch-Logo.png" alt="Elastic Search Logo"></p>',5)),n("p",null,[s[33]||(s[33]=a("為了構建一個功能強大的搜索功能，通常最理想的方法是使用一個為全文搜索任務優化過的數據存儲。在這裏我們使用 ",-1)),e(p,{href:"https://www.elastic.co/"},{default:l(()=>[...s[31]||(s[31]=[a("Elasticsearch",-1)])]),_:1}),s[34]||(s[34]=a("，Elasticsearch 是一個開源的內存中的數據存儲，它是用 Java 寫的，最初是在 ",-1)),e(p,{href:"https://lucene.apache.org/core/"},{default:l(()=>[...s[32]||(s[32]=[a("Apache Lucene",-1)])]),_:1}),s[35]||(s[35]=a(" 庫上構建的。",-1))]),n("p",null,[s[37]||(s[37]=a("這裏有一些來自 ",-1)),e(p,{href:"https://www.elastic.co/guide/en/elasticsearch/guide/2.x/getting-started.html"},{default:l(()=>[...s[36]||(s[36]=[a("Elastic 官方網站",-1)])]),_:1}),s[38]||(s[38]=a(" 上的 Elasticsearch 真實使用案例。",-1))]),s[145]||(s[145]=t('<ul><li>Wikipedia 使用 Elasticsearch 去提供帶高亮搜索片斷的全文搜索功能，並且提供按類型搜索和 “did-you-mean” 建議。</li><li>Guardian 使用 Elasticsearch 把社交網絡數據和訪客日誌相結合，為編輯去提供新文章的公眾意見的實時反饋。</li><li>Stack Overflow 將全文搜索和地理查詢相結合，並使用 “類似” 的方法去找到相關的查詢和回答。</li><li>GitHub 使用 Elasticsearch 對 1300 億行代碼進行查詢。</li></ul><h3 id="與-普通的-資料庫相比-elasticsearch-有什麼不一樣的地方" tabindex="-1">與 “普通的” 資料庫相比，Elasticsearch 有什麼不一樣的地方？ <a class="header-anchor" href="#與-普通的-資料庫相比-elasticsearch-有什麼不一樣的地方" aria-label="Permalink to “與 “普通的” 資料庫相比，Elasticsearch 有什麼不一樣的地方？”">​</a></h3><p>Elasticsearch 之所以能夠提供快速靈活的全文搜索，秘密在於它使用<ruby>反轉索引<rt>inverted index</rt></ruby> 。</p>',3)),n("p",null,[s[40]||(s[40]=a("“索引” 是資料庫中的一種數據結構，它能夠以超快的速度進行數據查詢和檢索操作。資料庫通過存儲與表中行相關聯的字段來生成索引。在一種可搜索的數據結構（一般是 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/B-tree"},{default:l(()=>[...s[39]||(s[39]=[a("B 樹",-1)])]),_:1}),s[41]||(s[41]=a("）中排序索引，在優化過的查詢中，資料庫能夠達到接近線性的時間（比如，“使用 ID=5 查找行”）。",-1))]),s[146]||(s[146]=t('<p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/db_index.png" alt="Relational Index"></p><p>我們可以將資料庫索引想像成一個圖書館中老式的卡片式目錄 —— 只要你知道書的作者和書名，它就會告訴你書的準確位置。為加速特定字段上的查詢速度，資料庫表一般有多個索引（比如，在 <code>name</code> 列上的索引可以加速指定名字的查詢）。</p><p>反轉索引本質上是不一樣的。每行（或文檔）的內容是分開的，並且每個獨立的條目（在本案例中是單詞）反向指向到包含它的任何文檔上。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/invertedIndex.jpg" alt="Inverted Index"></p><p>這種反轉索引數據結構可以使我們非常快地查詢到，所有出現 “football” 的文檔。通過使用大量優化過的內存中的反轉索引，Elasticsearch 可以讓我們在存儲的數據上，執行一些非常強大的和自定義的全文搜索。</p><h3 id="_2-項目設置" tabindex="-1">2 - 項目設置 <a class="header-anchor" href="#_2-項目設置" aria-label="Permalink to “2 - 項目設置”">​</a></h3><h4 id="_2-0-docker" tabindex="-1">2.0 - Docker <a class="header-anchor" href="#_2-0-docker" aria-label="Permalink to “2.0 - Docker”">​</a></h4>',7)),n("p",null,[s[43]||(s[43]=a("我們在這個項目上使用 ",-1)),e(p,{href:"https://www.docker.com/"},{default:l(()=>[...s[42]||(s[42]=[a("Docker",-1)])]),_:1}),s[44]||(s[44]=a(" 管理環境和依賴。Docker 是個容器引擎，它允許應用程序運行在一個獨立的環境中，不會受到來自主機操作系統和本地開發環境的影響。現在，許多公司將它們的大規模 Web 應用程序主要運行在容器架構上。這樣將提升靈活性和容器化應用程序組件的可組構性。",-1))]),s[147]||(s[147]=n("p",null,[n("img",{src:"https://storage.googleapis.com/cdn.patricktriest.com/blog/images/posts/elastic-library/docker.png",alt:"Docker Logo"})],-1)),s[148]||(s[148]=n("p",null,"對我來説，使用 Docker 的優勢是，它對本教程的作者非常方便，它的本地環境設置量最小，並且跨 Windows、macOS 和 Linux 系統的一致性很好。我們只需要在 Docker 配置文件中定義這些依賴關係，而不是按安裝説明分別去安裝 Node.js、Elasticsearch 和 Nginx，然後，就可以使用這個配置文件在任何其它地方運行我們的應用程序。而且，因為每個應用程序組件都運行在它自己的獨立容器中，它們受本地機器上的其它 “垃圾” 干擾的可能性非常小，因此，在調試問題時，像“它在我這裏可以工作！”這類的問題將非常少。",-1)),s[149]||(s[149]=n("h4",{id:"_2-1-安裝-docker-docker-compose",tabindex:"-1"},[a("2.1 - 安裝 Docker & Docker-Compose "),n("a",{class:"header-anchor",href:"#_2-1-安裝-docker-docker-compose","aria-label":"Permalink to “2.1 - 安裝 Docker & Docker-Compose”"},"​")],-1)),n("p",null,[s[47]||(s[47]=a("這個項目只依賴 ",-1)),e(p,{href:"https://www.docker.com/"},{default:l(()=>[...s[45]||(s[45]=[a("Docker",-1)])]),_:1}),s[48]||(s[48]=a(" 和 ",-1)),e(p,{href:"https://docs.docker.com/compose/"},{default:l(()=>[...s[46]||(s[46]=[a("docker-compose",-1)])]),_:1}),s[49]||(s[49]=a("，docker-compose 是 Docker 官方支持的一個工具，它用來將定義的多個容器配置 ",-1)),s[50]||(s[50]=n("em",null,"組裝",-1)),s[51]||(s[51]=a("  成單一的應用程序棧。",-1))]),n("ul",null,[n("li",null,[s[53]||(s[53]=a("安裝 Docker - ",-1)),e(p,{href:"https://docs.docker.com/engine/installation/"},{default:l(()=>[...s[52]||(s[52]=[a("https://docs.docker.com/engine/installation/",-1)])]),_:1})]),n("li",null,[s[55]||(s[55]=a("安裝 Docker Compose - ",-1)),e(p,{href:"https://docs.docker.com/compose/install/"},{default:l(()=>[...s[54]||(s[54]=[a("https://docs.docker.com/compose/install/",-1)])]),_:1})])]),s[150]||(s[150]=t(`<h4 id="_2-2-設置項目主目錄" tabindex="-1">2.2 - 設置項目主目錄 <a class="header-anchor" href="#_2-2-設置項目主目錄" aria-label="Permalink to “2.2 - 設置項目主目錄”">​</a></h4><p>為項目創建一個主目錄（名為 <code>guttenberg_search</code>）。我們的項目將工作在主目錄的以下兩個子目錄中。</p><ul><li><code>/public</code> - 保存前端 Vue.js Web 應用程序。</li><li><code>/server</code> - 服務器端 Node.js 源代碼。</li></ul><h4 id="_2-3-添加-docker-compose-配置" tabindex="-1">2.3 - 添加 Docker-Compose 配置 <a class="header-anchor" href="#_2-3-添加-docker-compose-配置" aria-label="Permalink to “2.3 - 添加 Docker-Compose 配置”">​</a></h4><p>接下來，我們將創建一個 <code>docker-compose.yml</code> 文件來定義我們的應用程序棧中的每個容器。</p><ol><li><code>gs-api</code> - 後端應用程序邏輯使用的 Node.js 容器</li><li><code>gs-frontend</code> - 前端 Web 應用程序使用的 Ngnix 容器。</li><li><code>gs-search</code> - 保存和搜索數據的 Elasticsearch 容器。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>version: &#39;3&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  api: # Node.js App</span></span>
<span class="line"><span>    container_name: gs-api</span></span>
<span class="line"><span>    build: .</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;3000:3000&quot; # Expose API port</span></span>
<span class="line"><span>      - &quot;9229:9229&quot; # Expose Node process debug port (disable in production)</span></span>
<span class="line"><span>    environment: # Set ENV vars</span></span>
<span class="line"><span>     - NODE_ENV=local</span></span>
<span class="line"><span>     - ES_HOST=elasticsearch</span></span>
<span class="line"><span>     - PORT=3000</span></span>
<span class="line"><span>    volumes: # Attach local book data directory</span></span>
<span class="line"><span>      - ./books:/usr/src/app/books</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  frontend: # Nginx Server For Frontend App</span></span>
<span class="line"><span>    container_name: gs-frontend</span></span>
<span class="line"><span>    image: nginx</span></span>
<span class="line"><span>    volumes: # Serve local &quot;public&quot; dir</span></span>
<span class="line"><span>      - ./public:/usr/share/nginx/html</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;8080:80&quot; # Forward site to localhost:8080</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  elasticsearch: # Elasticsearch Instance</span></span>
<span class="line"><span>    container_name: gs-search</span></span>
<span class="line"><span>    image: docker.elastic.co/elasticsearch/elasticsearch:6.1.1</span></span>
<span class="line"><span>    volumes: # Persist ES data in seperate &quot;esdata&quot; volume</span></span>
<span class="line"><span>      - esdata:/usr/share/elasticsearch/data</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - bootstrap.memory_lock=true</span></span>
<span class="line"><span>      - &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span></span>
<span class="line"><span>      - discovery.type=single-node</span></span>
<span class="line"><span>    ports: # Expose Elasticsearch ports</span></span>
<span class="line"><span>      - &quot;9300:9300&quot;</span></span>
<span class="line"><span>      - &quot;9200:9200&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>volumes: # Define seperate volume for Elasticsearch data</span></span>
<span class="line"><span>  esdata:</span></span></code></pre></div><p>這個文件定義了我們全部的應用程序棧 —— 不需要在你的本地系統上安裝 Elasticsearch、Node 和 Nginx。每個容器都將端口轉發到宿主機系統（<code>localhost</code>）上，以便於我們在宿主機上去訪問和調試 Node API、Elasticsearch 實例和前端 Web 應用程序。</p><h4 id="_2-4-添加-dockerfile" tabindex="-1">2.4 - 添加 Dockerfile <a class="header-anchor" href="#_2-4-添加-dockerfile" aria-label="Permalink to “2.4 - 添加 Dockerfile”">​</a></h4><p>對於 Nginx 和 Elasticsearch，我們使用了官方預構建的鏡像，而 Node.js 應用程序需要我們自己去構建。</p><p>在應用程序的根目錄下定義一個簡單的 <code>Dockerfile</code> 配置文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Use Node v8.9.0 LTS</span></span>
<span class="line"><span>FROM node:carbon</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Setup app working directory</span></span>
<span class="line"><span>WORKDIR /usr/src/app</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Copy package.json and package-lock.json</span></span>
<span class="line"><span>COPY package*.json ./</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Install app dependencies</span></span>
<span class="line"><span>RUN npm install</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Copy sourcecode</span></span>
<span class="line"><span>COPY . .</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Start app</span></span>
<span class="line"><span>CMD [ &quot;npm&quot;, &quot;start&quot; ]</span></span></code></pre></div><p>這個 Docker 配置擴展了官方的 Node.js 鏡像、拷貝我們的應用程序源代碼、以及在容器內安裝 NPM 依賴。</p><p>我們也增加了一個 <code>.dockerignore</code> 文件，以防止我們不需要的文件拷貝到容器中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>node_modules/</span></span>
<span class="line"><span>npm-debug.log</span></span>
<span class="line"><span>books/</span></span>
<span class="line"><span>public/</span></span></code></pre></div><blockquote><p>請注意：我們之所以不拷貝 <code>node_modules</code> 目錄到我們的容器中 —— 是因為我們要在容器構建過程裏面運行 <code>npm install</code>。從宿主機系統拷貝 <code>node_modules</code> 到容器裏面可能會引起錯誤，因為一些包需要為某些操作系統專門構建。比如説，在 macOS 上安裝 <code>bcrypt</code> 包，然後嘗試將這個模組直接拷貝到一個 Ubuntu 容器上將不能工作，因為 <code>bcyrpt</code> 需要為每個操作系統構建一個特定的二進制文件。</p></blockquote><h4 id="_2-5-添加基本文件" tabindex="-1">2.5 - 添加基本文件 <a class="header-anchor" href="#_2-5-添加基本文件" aria-label="Permalink to “2.5 - 添加基本文件”">​</a></h4><p>為了測試我們的配置，我們需要添加一些佔位符文件到應用程序目錄中。</p><p>在 <code>public/index.html</code> 文件中添加如下內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;html&gt;&lt;body&gt;Hello World From The Frontend Container&lt;/body&gt;&lt;/html&gt;</span></span></code></pre></div><p>接下來，在 <code>server/app.js</code> 中添加 Node.js 佔位符文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const Koa = require(&#39;koa&#39;)</span></span>
<span class="line"><span>const app = new Koa()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(async (ctx, next) =&gt; {</span></span>
<span class="line"><span>  ctx.body = &#39;Hello World From the Backend Container&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const port = process.env.PORT || 3000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.listen(port, err =&gt; {</span></span>
<span class="line"><span>  if (err) console.error(err)</span></span>
<span class="line"><span>  console.log(\`App Listening on Port \${port}\`)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>最後，添加我們的 <code>package.json</code>  Node 應用配置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;guttenberg-search&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;0.0.1&quot;,</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;Source code for Elasticsearch tutorial using 100 classic open source books.&quot;,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;start&quot;: &quot;node --inspect=0.0.0.0:9229 server/app.js&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;repository&quot;: {</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;git&quot;,</span></span>
<span class="line"><span>    &quot;url&quot;: &quot;git+https://github.com/triestpa/guttenberg-search.git&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;author&quot;: &quot;patrick.triest@gmail.com&quot;,</span></span>
<span class="line"><span>  &quot;license&quot;: &quot;MIT&quot;,</span></span>
<span class="line"><span>  &quot;bugs&quot;: {</span></span>
<span class="line"><span>    &quot;url&quot;: &quot;https://github.com/triestpa/guttenberg-search/issues&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;homepage&quot;: &quot;https://github.com/triestpa/guttenberg-search#readme&quot;,</span></span>
<span class="line"><span>  &quot;dependencies&quot;: {</span></span>
<span class="line"><span>    &quot;elasticsearch&quot;: &quot;13.3.1&quot;,</span></span>
<span class="line"><span>    &quot;joi&quot;: &quot;13.0.1&quot;,</span></span>
<span class="line"><span>    &quot;koa&quot;: &quot;2.4.1&quot;,</span></span>
<span class="line"><span>    &quot;koa-joi-validate&quot;: &quot;0.5.1&quot;,</span></span>
<span class="line"><span>    &quot;koa-router&quot;: &quot;7.2.1&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個文件定義了應用程序啓動命令和 Node.js 包依賴。</p><blockquote><p>注意：不要運行 <code>npm install</code> —— 當它構建時，依賴會在容器內安裝。</p></blockquote><h4 id="_2-6-測試它的輸出" tabindex="-1">2.6 - 測試它的輸出 <a class="header-anchor" href="#_2-6-測試它的輸出" aria-label="Permalink to “2.6 - 測試它的輸出”">​</a></h4><p>現在一切新緒，我們來測試應用程序的每個組件的輸出。從應用程序的主目錄運行 <code>docker-compose build</code>，它將構建我們的 Node.js 應用程序容器。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_0_3.png" alt="docker build output"></p><p>接下來，運行 <code>docker-compose up</code> 去啓動整個應用程序棧。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_0_2.png" alt="docker compose output"></p><blockquote><p>這一步可能需要幾分鐘時間，因為 Docker 要為每個容器去下載基礎鏡像。以後再次運行，啓動應用程序會非常快，因為所需要的鏡像已經下載完成了。</p></blockquote><p>在你的瀏覽器中嘗試訪問 <code>localhost:8080</code> —— 你將看到簡單的 “Hello World” Web 頁面。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_0_0.png" alt="frontend sample output"></p><p>訪問 <code>localhost:3000</code> 去驗證我們的 Node 服務器，它將返回 “Hello World” 信息。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_0_1.png" alt="backend sample output"></p><p>最後，訪問 <code>localhost:9200</code> 去檢查 Elasticsearch 運行狀態。它將返回類似如下的內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot; : &quot;SLTcfpI&quot;,</span></span>
<span class="line"><span>  &quot;cluster_name&quot; : &quot;docker-cluster&quot;,</span></span>
<span class="line"><span>  &quot;cluster_uuid&quot; : &quot;iId8e0ZeS_mgh9ALlWQ7-w&quot;,</span></span>
<span class="line"><span>  &quot;version&quot; : {</span></span>
<span class="line"><span>    &quot;number&quot; : &quot;6.1.1&quot;,</span></span>
<span class="line"><span>    &quot;build_hash&quot; : &quot;bd92e7f&quot;,</span></span>
<span class="line"><span>    &quot;build_date&quot; : &quot;2017-12-17T20:23:25.338Z&quot;,</span></span>
<span class="line"><span>    &quot;build_snapshot&quot; : false,</span></span>
<span class="line"><span>    &quot;lucene_version&quot; : &quot;7.1.0&quot;,</span></span>
<span class="line"><span>    &quot;minimum_wire_compatibility_version&quot; : &quot;5.6.0&quot;,</span></span>
<span class="line"><span>    &quot;minimum_index_compatibility_version&quot; : &quot;5.0.0&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;tagline&quot; : &quot;You Know, for Search&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果三個 URL 都顯示成功，祝賀你！整個容器棧已經正常運行了，接下來我們進入最有趣的部分。</p><h3 id="_3-連接到-elasticsearch" tabindex="-1">3 - 連接到 Elasticsearch <a class="header-anchor" href="#_3-連接到-elasticsearch" aria-label="Permalink to “3 - 連接到 Elasticsearch”">​</a></h3><p>我們要做的第一件事情是，讓我們的應用程序連接到我們本地的 Elasticsearch 實例上。</p><h4 id="_3-0-添加-es-連接模組" tabindex="-1">3.0 - 添加 ES 連接模組 <a class="header-anchor" href="#_3-0-添加-es-連接模組" aria-label="Permalink to “3.0 - 添加 ES 連接模組”">​</a></h4><p>在新文件 <code>server/connection.js</code> 中添加如下的 Elasticsearch 初始化代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const elasticsearch = require(&#39;elasticsearch&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Core ES variables for this project</span></span>
<span class="line"><span>const index = &#39;library&#39;</span></span>
<span class="line"><span>const type = &#39;novel&#39;</span></span>
<span class="line"><span>const port = 9200</span></span>
<span class="line"><span>const host = process.env.ES_HOST || &#39;localhost&#39;</span></span>
<span class="line"><span>const client = new elasticsearch.Client({ host: { host, port } })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/** Check the ES connection status */</span></span>
<span class="line"><span>async function checkConnection () {</span></span>
<span class="line"><span>  let isConnected = false</span></span>
<span class="line"><span>  while (!isConnected) {</span></span>
<span class="line"><span>    console.log(&#39;Connecting to ES&#39;)</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      const health = await client.cluster.health({})</span></span>
<span class="line"><span>      console.log(health)</span></span>
<span class="line"><span>      isConnected = true</span></span>
<span class="line"><span>    } catch (err) {</span></span>
<span class="line"><span>      console.log(&#39;Connection Failed, Retrying...&#39;, err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>checkConnection()</span></span></code></pre></div><p>現在，我們重新構建我們的 Node 應用程序，我們將使用 <code>docker-compose build</code> 來做一些改變。接下來，運行 <code>docker-compose up -d</code> 去啓動應用程序棧，它將以守護進程的方式在後台運行。</p><p>應用程序啓動之後，在命令列中運行 <code>docker exec gs-api &quot;node&quot; &quot;server/connection.js&quot;</code>，以便於在容器內運行我們的腳本。你將看到類似如下的系統輸出信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{ cluster_name: &#39;docker-cluster&#39;,</span></span>
<span class="line"><span>  status: &#39;yellow&#39;,</span></span>
<span class="line"><span>  timed_out: false,</span></span>
<span class="line"><span>  number_of_nodes: 1,</span></span>
<span class="line"><span>  number_of_data_nodes: 1,</span></span>
<span class="line"><span>  active_primary_shards: 1,</span></span>
<span class="line"><span>  active_shards: 1,</span></span>
<span class="line"><span>  relocating_shards: 0,</span></span>
<span class="line"><span>  initializing_shards: 0,</span></span>
<span class="line"><span>  unassigned_shards: 1,</span></span>
<span class="line"><span>  delayed_unassigned_shards: 0,</span></span>
<span class="line"><span>  number_of_pending_tasks: 0,</span></span>
<span class="line"><span>  number_of_in_flight_fetch: 0,</span></span>
<span class="line"><span>  task_max_waiting_in_queue_millis: 0,</span></span>
<span class="line"><span>  active_shards_percent_as_number: 50 }</span></span></code></pre></div><p>繼續之前，我們先刪除最下面的 <code>checkConnection()</code> 調用，因為，我們最終的應用程序將調用外部的連接模組。</p><h4 id="_3-1-添加函數去重置索引" tabindex="-1">3.1 - 添加函數去重置索引 <a class="header-anchor" href="#_3-1-添加函數去重置索引" aria-label="Permalink to “3.1 - 添加函數去重置索引”">​</a></h4><p>在 <code>server/connection.js</code> 中的 <code>checkConnection</code> 下面添加如下的函數，以便於重置 Elasticsearch 索引。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** Clear the index, recreate it, and add mappings */</span></span>
<span class="line"><span>async function resetIndex (index) {</span></span>
<span class="line"><span>  if (await client.indices.exists({ index })) {</span></span>
<span class="line"><span>    await client.indices.delete({ index })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  await client.indices.create({ index })</span></span>
<span class="line"><span>  await putBookMapping()</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_3-2-添加圖書模式" tabindex="-1">3.2 - 添加圖書模式 <a class="header-anchor" href="#_3-2-添加圖書模式" aria-label="Permalink to “3.2 - 添加圖書模式”">​</a></h4><p>接下來，我們將為圖書的數據模式添加一個 “映射”。在 <code>server/connection.js</code> 中的 <code>resetIndex</code> 函數下面添加如下的函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** Add book section schema mapping to ES */</span></span>
<span class="line"><span>async function putBookMapping () {</span></span>
<span class="line"><span>  const schema = {</span></span>
<span class="line"><span>    title: { type: &#39;keyword&#39; },</span></span>
<span class="line"><span>    author: { type: &#39;keyword&#39; },</span></span>
<span class="line"><span>    location: { type: &#39;integer&#39; },</span></span>
<span class="line"><span>    text: { type: &#39;text&#39; }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return client.indices.putMapping({ index, type, body: { properties: schema } })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這是為 <code>book</code> 索引定義了一個映射。Elasticsearch 中的 <code>index</code> 大概類似於 SQL 的 <code>table</code> 或者 MongoDB 的  <code>collection</code>。我們通過添加映射來為存儲的文檔指定每個字段和它的數據類型。Elasticsearch 是無模式的，因此，從技術角度來看，我們是不需要添加映射的，但是，這樣做，我們可以更好地控制如何處理數據。</p><p>比如，我們給 <code>title</code> 和 <code>author</code> 字段分配 <code>keyword</code> 類型，給 <code>text</code> 字段分配 <code>text</code> 類型。之所以這樣做的原因是，搜索引擎可以區別處理這些字符串字段 —— 在搜索的時候，搜索引擎將在 <code>text</code> 字段中搜索可能的匹配項，而對於 <code>keyword</code> 類型字段，將對它們進行全文匹配。這看上去差別很小，但是它們對在不同的搜索上的速度和行為的影響非常大。</p><p>在文件的底部，導出對外發布的屬性和函數，這樣我們的應用程序中的其它模組就可以訪問它們了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  client, index, type, checkConnection, resetIndex</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-加載原始數據" tabindex="-1">4 - 加載原始數據 <a class="header-anchor" href="#_4-加載原始數據" aria-label="Permalink to “4 - 加載原始數據”">​</a></h3>`,59)),n("p",null,[s[57]||(s[57]=a("我們將使用來自 ",-1)),e(p,{href:"https://www.gutenberg.org/"},{default:l(()=>[...s[56]||(s[56]=[a("古登堡項目",-1)])]),_:1}),s[58]||(s[58]=a(" 的數據 ——  它致力於為公共提供免費的線上電子書。在這個項目中，我們將使用 100 本經典圖書來充實我們的圖書館，包括《福爾摩斯探案集》、《金銀島》、《基督山復仇記》、《環遊世界八十天》、《羅密歐與朱麗葉》 和《奧德賽》。",-1))]),s[151]||(s[151]=n("p",null,[n("img",{src:"https://storage.googleapis.com/cdn.patricktriest.com/blog/images/posts/elastic-library/books.jpg",alt:"Book Covers"})],-1)),s[152]||(s[152]=n("h4",{id:"_4-1-下載圖書文件",tabindex:"-1"},[a("4.1 - 下載圖書文件 "),n("a",{class:"header-anchor",href:"#_4-1-下載圖書文件","aria-label":"Permalink to “4.1 - 下載圖書文件”"},"​")],-1)),n("p",null,[s[60]||(s[60]=a("我將這 100 本書打包成一個文件，你可以從這裏下載它 —— ",-1)),e(p,{href:"https://cdn.patricktriest.com/data/books.zip"},{default:l(()=>[...s[59]||(s[59]=[a("https://cdn.patricktriest.com/data/books.zip",-1)])]),_:1})]),s[153]||(s[153]=n("p",null,[a("將這個文件解壓到你的項目的 "),n("code",null,"books/"),a(" 目錄中。")],-1)),n("p",null,[s[63]||(s[63]=a("你可以使用以下的命令來完成（需要在命令列下使用 ",-1)),e(p,{href:"https://www.gnu.org/software/wget/"},{default:l(()=>[...s[61]||(s[61]=[a("wget",-1)])]),_:1}),s[64]||(s[64]=a(" 和 ",-1)),e(p,{href:"https://theunarchiver.com/command-line"},{default:l(()=>[...s[62]||(s[62]=[a("The Unarchiver",-1)])]),_:1}),s[65]||(s[65]=a("）。",-1))]),s[154]||(s[154]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>wget https://cdn.patricktriest.com/data/books.zip</span></span>
<span class="line"><span>unar books.zip</span></span></code></pre></div><h4 id="_4-2-預覽一本書" tabindex="-1">4.2 - 預覽一本書 <a class="header-anchor" href="#_4-2-預覽一本書" aria-label="Permalink to “4.2 - 預覽一本書”">​</a></h4><p>嘗試打開其中的一本書的文件，假設打開的是 <code>219-0.txt</code>。你將注意到它開頭是一個公開訪問的協議，接下來是一些標識這本書的書名、作者、發行日期、語言和字符編碼的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Title: Heart of Darkness</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Author: Joseph Conrad</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Release Date: February 1995 [EBook #219]</span></span>
<span class="line"><span>Last Updated: September 7, 2016</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Language: English</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Character set encoding: UTF-8</span></span></code></pre></div><p>在 <code>*** START OF THIS PROJECT GUTENBERG EBOOK HEART OF DARKNESS ***</code> 這些行後面，是這本書的正式內容。</p><p>如果你滾動到本書的底部，你將看到類似 <code>*** END OF THIS PROJECT GUTENBERG EBOOK HEART OF DARKNESS ***</code> 信息，接下來是本書更詳細的協議版本。</p><p>下一步，我們將使用程序從文件頭部來解析書的元數據，提取 <code>*** START OF</code> 和 <code>***END OF</code> 之間的內容。</p><h4 id="_4-3-讀取數據目錄" tabindex="-1">4.3 - 讀取數據目錄 <a class="header-anchor" href="#_4-3-讀取數據目錄" aria-label="Permalink to “4.3 - 讀取數據目錄”">​</a></h4><p>我們將寫一個腳本來讀取每本書的內容，並將這些數據添加到 Elasticsearch。我們將定義一個新的 Javascript 文件 <code>server/load_data.js</code> 來執行這些操作。</p><p>首先，我們將從 <code>books/</code> 目錄中獲取每個文件的列表。</p><p>在 <code>server/load_data.js</code> 中添加下列內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const fs = require(&#39;fs&#39;)</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>const esConnection = require(&#39;./connection&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/** Clear ES index, parse and index all files from the books directory */</span></span>
<span class="line"><span>async function readAndInsertBooks () {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    // Clear previous ES index</span></span>
<span class="line"><span>    await esConnection.resetIndex()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Read books directory</span></span>
<span class="line"><span>    let files = fs.readdirSync(&#39;./books&#39;).filter(file =&gt; file.slice(-4) === &#39;.txt&#39;)</span></span>
<span class="line"><span>    console.log(\`Found \${files.length} Files\`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Read each book file, and index each paragraph in elasticsearch</span></span>
<span class="line"><span>    for (let file of files) {</span></span>
<span class="line"><span>      console.log(\`Reading File - \${file}\`)</span></span>
<span class="line"><span>      const filePath = path.join(&#39;./books&#39;, file)</span></span>
<span class="line"><span>      const { title, author, paragraphs } = parseBookFile(filePath)</span></span>
<span class="line"><span>      await insertBookData(title, author, paragraphs)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    console.error(err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>readAndInsertBooks()</span></span></code></pre></div><p>我們將使用一個快捷命令來重構我們的 Node.js 應用程序，並更新運行的容器。</p><p>運行 <code>docker-compose up -d --build</code> 去更新應用程序。這是運行  <code>docker-compose build</code> 和 <code>docker-compose up -d</code> 的快捷命令。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_1_0.png" alt="docker build output"></p><p>為了在容器中運行我們的 <code>load_data</code> 腳本，我們運行 <code>docker exec gs-api &quot;node&quot; &quot;server/load_data.js&quot;</code> 。你將看到 Elasticsearch 的狀態輸出 <code>Found 100 Books</code>。</p><p>這之後，腳本發生了錯誤退出，原因是我們調用了一個沒有定義的輔助函數（<code>parseBookFile</code>）。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_1_1.png" alt="docker exec output"></p><h4 id="_4-4-讀取數據文件" tabindex="-1">4.4 - 讀取數據文件 <a class="header-anchor" href="#_4-4-讀取數據文件" aria-label="Permalink to “4.4 - 讀取數據文件”">​</a></h4><p>接下來，我們讀取元數據和每本書的內容。</p><p>在 <code>server/load_data.js</code> 中定義新函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** Read an individual book text file, and extract the title, author, and paragraphs */</span></span>
<span class="line"><span>function parseBookFile (filePath) {</span></span>
<span class="line"><span>  // Read text file</span></span>
<span class="line"><span>  const book = fs.readFileSync(filePath, &#39;utf8&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Find book title and author</span></span>
<span class="line"><span>  const title = book.match(/^Title:\\s(.+)$/m)[1]</span></span>
<span class="line"><span>  const authorMatch = book.match(/^Author:\\s(.+)$/m)</span></span>
<span class="line"><span>  const author = (!authorMatch || authorMatch[1].trim() === &#39;&#39;) ? &#39;Unknown Author&#39; : authorMatch[1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(\`Reading Book - \${title} By \${author}\`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Find Guttenberg metadata header and footer</span></span>
<span class="line"><span>  const startOfBookMatch = book.match(/^\\*{3}\\s*START OF (THIS|THE) PROJECT GUTENBERG EBOOK.+\\*{3}$/m)</span></span>
<span class="line"><span>  const startOfBookIndex = startOfBookMatch.index + startOfBookMatch[0].length</span></span>
<span class="line"><span>  const endOfBookIndex = book.match(/^\\*{3}\\s*END OF (THIS|THE) PROJECT GUTENBERG EBOOK.+\\*{3}$/m).index</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Clean book text and split into array of paragraphs</span></span>
<span class="line"><span>  const paragraphs = book</span></span>
<span class="line"><span>    .slice(startOfBookIndex, endOfBookIndex) // Remove Guttenberg header and footer</span></span>
<span class="line"><span>    .split(/\\n\\s+\\n/g) // Split each paragraph into it&#39;s own array entry</span></span>
<span class="line"><span>    .map(line =&gt; line.replace(/\\r\\n/g, &#39; &#39;).trim()) // Remove paragraph line breaks and whitespace</span></span>
<span class="line"><span>    .map(line =&gt; line.replace(/_/g, &#39;&#39;)) // Guttenberg uses &quot;_&quot; to signify italics.  We&#39;ll remove it, since it makes the raw text look messy.</span></span>
<span class="line"><span>    .filter((line) =&gt; (line &amp;&amp; line.length !== &#39;&#39;)) // Remove empty lines</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(\`Parsed \${paragraphs.length} Paragraphs\\n\`)</span></span>
<span class="line"><span>  return { title, author, paragraphs }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個函數執行幾個重要的任務。</p>`,23)),n("ol",null,[s[69]||(s[69]=n("li",null,"從文件系統中讀取書的文本。",-1)),n("li",null,[s[67]||(s[67]=a("使用正則表達式（關於正則表達式，請參閲 ",-1)),e(p,{href:"https://blog.patricktriest.com/you-should-learn-regex/"},{default:l(()=>[...s[66]||(s[66]=[a("這篇文章",-1)])]),_:1}),s[68]||(s[68]=a(" ）解析書名和作者。",-1))]),s[70]||(s[70]=n("li",null,"通過匹配 “古登堡項目” 的頭部和尾部，識別書的正文內容。",-1)),s[71]||(s[71]=n("li",null,"提取書的內容文本。",-1)),s[72]||(s[72]=n("li",null,"分割每個段落到它的數組中。",-1)),s[73]||(s[73]=n("li",null,"清理文本並刪除空白行。",-1))]),s[155]||(s[155]=t(`<p>它的返回值，我們將構建一個對象，這個對象包含書名、作者、以及書中各段落的數組。</p><p>再次運行 <code>docker-compose up -d --build</code> 和 <code>docker exec gs-api &quot;node&quot; &quot;server/load_data.js&quot;</code>，你將看到輸出同之前一樣，在輸出的末尾有三個額外的行。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_2_0.png" alt="docker exec output"></p><p>成功！我們的腳本從文本文件中成功解析出了書名和作者。腳本再次以錯誤結束，因為到現在為止，我們還沒有定義輔助函數。</p><h4 id="_4-5-在-es-中索引數據文件" tabindex="-1">4.5 - 在 ES 中索引數據文件 <a class="header-anchor" href="#_4-5-在-es-中索引數據文件" aria-label="Permalink to “4.5 - 在 ES 中索引數據文件”">​</a></h4><p>最後一步，我們將批量上傳每個段落的數組到 Elasticsearch 索引中。</p><p>在 <code>load_data.js</code> 中添加新的 <code>insertBookData</code> 函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** Bulk index the book data in Elasticsearch */</span></span>
<span class="line"><span>async function insertBookData (title, author, paragraphs) {</span></span>
<span class="line"><span>  let bulkOps = [] // Array to store bulk operations</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Add an index operation for each section in the book</span></span>
<span class="line"><span>  for (let i = 0; i &lt; paragraphs.length; i++) {</span></span>
<span class="line"><span>    // Describe action</span></span>
<span class="line"><span>    bulkOps.push({ index: { _index: esConnection.index, _type: esConnection.type } })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Add document</span></span>
<span class="line"><span>    bulkOps.push({</span></span>
<span class="line"><span>      author,</span></span>
<span class="line"><span>      title,</span></span>
<span class="line"><span>      location: i,</span></span>
<span class="line"><span>      text: paragraphs[i]</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (i &gt; 0 &amp;&amp; i % 500 === 0) { // Do bulk insert in 500 paragraph batches</span></span>
<span class="line"><span>      await esConnection.client.bulk({ body: bulkOps })</span></span>
<span class="line"><span>      bulkOps = []</span></span>
<span class="line"><span>      console.log(\`Indexed Paragraphs \${i - 499} - \${i}\`)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Insert remainder of bulk ops array</span></span>
<span class="line"><span>  await esConnection.client.bulk({ body: bulkOps })</span></span>
<span class="line"><span>  console.log(\`Indexed Paragraphs \${paragraphs.length - (bulkOps.length / 2)} - \${paragraphs.length}\\n\\n\\n\`)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個函數將使用書名、作者和附加元數據的段落位置來索引書中的每個段落。我們通過批量操作來插入段落，它比逐個段落插入要快的多。</p><blockquote><p>我們分批索引段落，而不是一次性插入全部，是為運行這個應用程序的內存稍有點小（1.7 GB）的服務器  <code>search.patricktriest.com</code> 上做的一個重要優化。如果你的機器內存還行（4 GB 以上），你或許不用分批上傳。</p></blockquote><p>運行 <code>docker-compose up -d --build</code> 和 <code>docker exec gs-api &quot;node&quot; &quot;server/load_data.js&quot;</code> 一次或多次 —— 現在你將看到前面解析的 100 本書的完整輸出，並插入到了 Elasticsearch。這可能需要幾分鐘時間，甚至更長。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_3_0.png" alt="data loading output"></p><h3 id="_5-搜索" tabindex="-1">5 - 搜索 <a class="header-anchor" href="#_5-搜索" aria-label="Permalink to “5 - 搜索”">​</a></h3><p>現在，Elasticsearch 中已經有了 100 本書了（大約有 230000 個段落），現在我們嘗試搜索查詢。</p><h4 id="_5-0-簡單的-http-查詢" tabindex="-1">5.0 - 簡單的 HTTP 查詢 <a class="header-anchor" href="#_5-0-簡單的-http-查詢" aria-label="Permalink to “5.0 - 簡單的 HTTP 查詢”">​</a></h4><p>首先，我們使用 Elasticsearch 的 HTTP API 對它進行直接查詢。</p><p>在你的瀏覽器上訪問這個 URL - <code>http://localhost:9200/library/_search?q=text:Java&amp;pretty</code></p><p>在這裏，我們將執行一個極簡的全文搜索，在我們的圖書館的書中查找 “Java” 這個詞。</p><p>你將看到類似於下面的一個 JSON 格式的響應。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;took&quot; : 11,</span></span>
<span class="line"><span>  &quot;timed_out&quot; : false,</span></span>
<span class="line"><span>  &quot;_shards&quot; : {</span></span>
<span class="line"><span>    &quot;total&quot; : 5,</span></span>
<span class="line"><span>    &quot;successful&quot; : 5,</span></span>
<span class="line"><span>    &quot;skipped&quot; : 0,</span></span>
<span class="line"><span>    &quot;failed&quot; : 0</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;hits&quot; : {</span></span>
<span class="line"><span>    &quot;total&quot; : 13,</span></span>
<span class="line"><span>    &quot;max_score&quot; : 14.259304,</span></span>
<span class="line"><span>    &quot;hits&quot; : [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;_index&quot; : &quot;library&quot;,</span></span>
<span class="line"><span>        &quot;_type&quot; : &quot;novel&quot;,</span></span>
<span class="line"><span>        &quot;_id&quot; : &quot;p_GwFWEBaZvLlaAUdQgV&quot;,</span></span>
<span class="line"><span>        &quot;_score&quot; : 14.259304,</span></span>
<span class="line"><span>        &quot;_source&quot; : {</span></span>
<span class="line"><span>          &quot;author&quot; : &quot;Charles Darwin&quot;,</span></span>
<span class="line"><span>          &quot;title&quot; : &quot;On the Origin of Species&quot;,</span></span>
<span class="line"><span>          &quot;location&quot; : 1080,</span></span>
<span class="line"><span>          &quot;text&quot; : &quot;Java, plants of, 375.&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;_index&quot; : &quot;library&quot;,</span></span>
<span class="line"><span>        &quot;_type&quot; : &quot;novel&quot;,</span></span>
<span class="line"><span>        &quot;_id&quot; : &quot;wfKwFWEBaZvLlaAUkjfk&quot;,</span></span>
<span class="line"><span>        &quot;_score&quot; : 10.186235,</span></span>
<span class="line"><span>        &quot;_source&quot; : {</span></span>
<span class="line"><span>          &quot;author&quot; : &quot;Edgar Allan Poe&quot;,</span></span>
<span class="line"><span>          &quot;title&quot; : &quot;The Works of Edgar Allan Poe&quot;,</span></span>
<span class="line"><span>          &quot;location&quot; : 827,</span></span>
<span class="line"><span>          &quot;text&quot; : &quot;After many years spent in foreign travel, I sailed in the year 18-- , from the port of Batavia, in the rich and populous island of Java, on a voyage to the Archipelago of the Sunda islands. I went as passenger--having no other inducement than a kind of nervous restlessness which haunted me as a fiend.&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>用 Elasticseach 的 HTTP 接口可以測試我們插入的數據是否成功，但是如果直接將這個 API 暴露給 Web 應用程序將有極大的風險。這個 API 將會暴露管理功能（比如直接添加和刪除文檔），最理想的情況是完全不要對外暴露它。而是寫一個簡單的 Node.js API 去接收來自客户端的請求，然後（在我們的本地網絡中）生成一個正確的查詢發送給 Elasticsearch。</p><h4 id="_5-1-查詢腳本" tabindex="-1">5.1 - 查詢腳本 <a class="header-anchor" href="#_5-1-查詢腳本" aria-label="Permalink to “5.1 - 查詢腳本”">​</a></h4><p>我們現在嘗試從我們寫的 Node.js 腳本中查詢 Elasticsearch。</p><p>創建一個新文件，<code>server/search.js</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const { client, index, type } = require(&#39;./connection&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  /** Query ES index for the provided term */</span></span>
<span class="line"><span>  queryTerm (term, offset = 0) {</span></span>
<span class="line"><span>    const body = {</span></span>
<span class="line"><span>      from: offset,</span></span>
<span class="line"><span>      query: { match: {</span></span>
<span class="line"><span>        text: {</span></span>
<span class="line"><span>          query: term,</span></span>
<span class="line"><span>          operator: &#39;and&#39;,</span></span>
<span class="line"><span>          fuzziness: &#39;auto&#39;</span></span>
<span class="line"><span>        } } },</span></span>
<span class="line"><span>      highlight: { fields: { text: {} } }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return client.search({ index, type, body })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們的搜索模組定義一個簡單的 <code>search</code> 函數，它將使用輸入的詞 <code>match</code> 查詢。</p><p>這是查詢的字段分解 -</p><ul><li><code>from</code> - 允許我們分頁查詢結果。默認每個查詢返回 10 個結果，因此，指定 <code>from: 10</code> 將允許我們取回 10-20 的結果。</li><li><code>query</code> - 這裏我們指定要查詢的詞。</li><li><code>operator</code> - 我們可以修改搜索行為；在本案例中，我們使用 <code>and</code> 操作去對查詢中包含所有字元（要查詢的詞）的結果來確定優先順序。</li><li><code>fuzziness</code> - 對拼寫錯誤的容錯調整，<code>auto</code> 的默認為 <code>fuzziness: 2</code>。模糊值越高，結果越需要更多校正。比如，<code>fuzziness: 1</code> 將允許以 <code>Patricc</code> 為關鍵字的查詢中返回與 <code>Patrick</code> 匹配的結果。</li><li><code>highlights</code> - 為結果返回一個額外的字段，這個字段包含 HTML，以顯示精確的文本字集和查詢中匹配的關鍵詞。</li></ul>`,28)),n("p",null,[s[75]||(s[75]=a("你可以去瀏覽 ",-1)),e(p,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/full-text-queries.html"},{default:l(()=>[...s[74]||(s[74]=[a("Elastic Full-Text Query DSL",-1)])]),_:1}),s[76]||(s[76]=a("，學習如何隨意調整這些參數，以進一步自定義搜索查詢。",-1))]),s[156]||(s[156]=t(`<h3 id="_6-api" tabindex="-1">6 - API <a class="header-anchor" href="#_6-api" aria-label="Permalink to “6 - API”">​</a></h3><p>為了能夠從前端應用程序中訪問我們的搜索功能，我們來寫一個快速的 HTTP API。</p><h4 id="_6-0-api-服務器" tabindex="-1">6.0 - API 服務器 <a class="header-anchor" href="#_6-0-api-服務器" aria-label="Permalink to “6.0 - API 服務器”">​</a></h4><p>用以下的內容替換現有的 <code>server/app.js</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const Koa = require(&#39;koa&#39;)</span></span>
<span class="line"><span>const Router = require(&#39;koa-router&#39;)</span></span>
<span class="line"><span>const joi = require(&#39;joi&#39;)</span></span>
<span class="line"><span>const validate = require(&#39;koa-joi-validate&#39;)</span></span>
<span class="line"><span>const search = require(&#39;./search&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = new Koa()</span></span>
<span class="line"><span>const router = new Router()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Log each request to the console</span></span>
<span class="line"><span>app.use(async (ctx, next) =&gt; {</span></span>
<span class="line"><span>  const start = Date.now()</span></span>
<span class="line"><span>  await next()</span></span>
<span class="line"><span>  const ms = Date.now() - start</span></span>
<span class="line"><span>  console.log(\`\${ctx.method} \${ctx.url} - \${ms}\`)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Log percolated errors to the console</span></span>
<span class="line"><span>app.on(&#39;error&#39;, err =&gt; {</span></span>
<span class="line"><span>  console.error(&#39;Server Error&#39;, err)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Set permissive CORS header</span></span>
<span class="line"><span>app.use(async (ctx, next) =&gt; {</span></span>
<span class="line"><span>  ctx.set(&#39;Access-Control-Allow-Origin&#39;, &#39;*&#39;)</span></span>
<span class="line"><span>  return next()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ADD ENDPOINTS HERE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const port = process.env.PORT || 3000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app</span></span>
<span class="line"><span>  .use(router.routes())</span></span>
<span class="line"><span>  .use(router.allowedMethods())</span></span>
<span class="line"><span>  .listen(port, err =&gt; {</span></span>
<span class="line"><span>    if (err) throw err</span></span>
<span class="line"><span>    console.log(\`App Listening on Port \${port}\`)</span></span>
<span class="line"><span>  })</span></span></code></pre></div>`,5)),n("p",null,[s[78]||(s[78]=a("這些代碼將為 ",-1)),e(p,{href:"http://koajs.com/"},{default:l(()=>[...s[77]||(s[77]=[a("Koa.js",-1)])]),_:1}),s[79]||(s[79]=a(" Node API 服務器導入服務器依賴，設置簡單的日誌，以及錯誤處理。",-1))]),s[157]||(s[157]=t(`<h3 id="_6-1-使用查詢連接端點" tabindex="-1">6.1 - 使用查詢連接端點 <a class="header-anchor" href="#_6-1-使用查詢連接端點" aria-label="Permalink to “6.1 - 使用查詢連接端點”">​</a></h3><p>接下來，我們將在服務器上添加一個端點，以便於發佈我們的 Elasticsearch 查詢功能。</p><p>在  <code>server/app.js</code> 文件的 <code>// ADD ENDPOINTS HERE</code>  下面插入下列的代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * GET /search</span></span>
<span class="line"><span> * Search for a term in the library</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>router.get(&#39;/search&#39;, async (ctx, next) =&gt; {</span></span>
<span class="line"><span>    const { term, offset } = ctx.request.query</span></span>
<span class="line"><span>    ctx.body = await search.queryTerm(term, offset)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>使用 <code>docker-compose up -d --build</code> 重啓動應用程序。之後在你的瀏覽器中嘗試調用這個搜索端點。比如，<code>http://localhost:3000/search?term=java</code> 這個請求將搜索整個圖書館中提到 “Java” 的內容。</p><p>結果與前面直接調用 Elasticsearch HTTP 界面的結果非常類似。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;took&quot;: 242,</span></span>
<span class="line"><span>    &quot;timed_out&quot;: false,</span></span>
<span class="line"><span>    &quot;_shards&quot;: {</span></span>
<span class="line"><span>        &quot;total&quot;: 5,</span></span>
<span class="line"><span>        &quot;successful&quot;: 5,</span></span>
<span class="line"><span>        &quot;skipped&quot;: 0,</span></span>
<span class="line"><span>        &quot;failed&quot;: 0</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;hits&quot;: {</span></span>
<span class="line"><span>        &quot;total&quot;: 93,</span></span>
<span class="line"><span>        &quot;max_score&quot;: 13.356944,</span></span>
<span class="line"><span>        &quot;hits&quot;: [{</span></span>
<span class="line"><span>            &quot;_index&quot;: &quot;library&quot;,</span></span>
<span class="line"><span>            &quot;_type&quot;: &quot;novel&quot;,</span></span>
<span class="line"><span>            &quot;_id&quot;: &quot;eHYHJmEBpQg9B4622421&quot;,</span></span>
<span class="line"><span>            &quot;_score&quot;: 13.356944,</span></span>
<span class="line"><span>            &quot;_source&quot;: {</span></span>
<span class="line"><span>                &quot;author&quot;: &quot;Charles Darwin&quot;,</span></span>
<span class="line"><span>                &quot;title&quot;: &quot;On the Origin of Species&quot;,</span></span>
<span class="line"><span>                &quot;location&quot;: 1080,</span></span>
<span class="line"><span>                &quot;text&quot;: &quot;Java, plants of, 375.&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &quot;highlight&quot;: {</span></span>
<span class="line"><span>                &quot;text&quot;: [&quot;&lt;em&gt;Java&lt;/em&gt;, plants of, 375.&quot;]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }, {</span></span>
<span class="line"><span>            &quot;_index&quot;: &quot;library&quot;,</span></span>
<span class="line"><span>            &quot;_type&quot;: &quot;novel&quot;,</span></span>
<span class="line"><span>            &quot;_id&quot;: &quot;2HUHJmEBpQg9B462xdNg&quot;,</span></span>
<span class="line"><span>            &quot;_score&quot;: 9.030668,</span></span>
<span class="line"><span>            &quot;_source&quot;: {</span></span>
<span class="line"><span>                &quot;author&quot;: &quot;Unknown Author&quot;,</span></span>
<span class="line"><span>                &quot;title&quot;: &quot;The King James Bible&quot;,</span></span>
<span class="line"><span>                &quot;location&quot;: 186,</span></span>
<span class="line"><span>                &quot;text&quot;: &quot;10:4 And the sons of Javan; Elishah, and Tarshish, Kittim, and Dodanim.&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &quot;highlight&quot;: {</span></span>
<span class="line"><span>                &quot;text&quot;: [&quot;10:4 And the sons of &lt;em&gt;Javan&lt;/em&gt;; Elishah, and Tarshish, Kittim, and Dodanim.&quot;]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_6-2-輸入校驗" tabindex="-1">6.2 - 輸入校驗 <a class="header-anchor" href="#_6-2-輸入校驗" aria-label="Permalink to “6.2 - 輸入校驗”">​</a></h3><p>這個端點現在還很脆弱 —— 我們沒有對請求參數做任何的校驗，因此，如果是無效的或者錯誤的值將使服務器出錯。</p>`,9)),n("p",null,[s[82]||(s[82]=a("我們將添加一些使用 ",-1)),e(p,{href:"https://github.com/hapijs/joi"},{default:l(()=>[...s[80]||(s[80]=[a("Joi",-1)])]),_:1}),s[83]||(s[83]=a(" 和 ",-1)),e(p,{href:"https://github.com/triestpa/koa-joi-validate"},{default:l(()=>[...s[81]||(s[81]=[a("Koa-Joi-Validate",-1)])]),_:1}),s[84]||(s[84]=a(" 庫的中間件，以對輸入做校驗。",-1))]),s[158]||(s[158]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * GET /search</span></span>
<span class="line"><span> * Search for a term in the library</span></span>
<span class="line"><span> * Query Params -</span></span>
<span class="line"><span> * term: string under 60 characters</span></span>
<span class="line"><span> * offset: positive integer</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>router.get(&#39;/search&#39;,</span></span>
<span class="line"><span>  validate({</span></span>
<span class="line"><span>    query: {</span></span>
<span class="line"><span>      term: joi.string().max(60).required(),</span></span>
<span class="line"><span>      offset: joi.number().integer().min(0).default(0)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }),</span></span>
<span class="line"><span>  async (ctx, next) =&gt; {</span></span>
<span class="line"><span>    const { term, offset } = ctx.request.query</span></span>
<span class="line"><span>    ctx.body = await search.queryTerm(term, offset)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>現在，重啓服務器，如果你使用一個沒有搜索關鍵字的請求（<code>http://localhost:3000/search</code>），你將返回一個帶相關消息的 HTTP 400 錯誤，比如像 <code>Invalid URL Query - child &quot;term&quot; fails because [&quot;term&quot; is required]</code>。</p><p>如果想從 Node 應用程序中查看實時日誌，你可以運行 <code>docker-compose logs -f api</code>。</p><h3 id="_7-前端應用程序" tabindex="-1">7 - 前端應用程序 <a class="header-anchor" href="#_7-前端應用程序" aria-label="Permalink to “7 - 前端應用程序”">​</a></h3><p>現在我們的 <code>/search</code> 端點已經就緒，我們來連接到一個簡單的 Web 應用程序來測試這個 API。</p><h4 id="_7-0-vue-js-應用程序" tabindex="-1">7.0 - Vue.js 應用程序 <a class="header-anchor" href="#_7-0-vue-js-應用程序" aria-label="Permalink to “7.0 - Vue.js 應用程序”">​</a></h4><p>我們將使用 Vue.js 去協調我們的前端。</p><p>添加一個新文件 <code>/public/app.js</code>，去控制我們的 Vue.js 應用程序代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const vm = new Vue ({</span></span>
<span class="line"><span>  el: &#39;#vue-instance&#39;,</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      baseUrl: &#39;http://localhost:3000&#39;, // API url</span></span>
<span class="line"><span>      searchTerm: &#39;Hello World&#39;, // Default search term</span></span>
<span class="line"><span>      searchDebounce: null, // Timeout for search bar debounce</span></span>
<span class="line"><span>      searchResults: [], // Displayed search results</span></span>
<span class="line"><span>      numHits: null, // Total search results found</span></span>
<span class="line"><span>      searchOffset: 0, // Search result pagination offset</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      selectedParagraph: null, // Selected paragraph object</span></span>
<span class="line"><span>      bookOffset: 0, // Offset for book paragraphs being displayed</span></span>
<span class="line"><span>      paragraphs: [] // Paragraphs being displayed in book preview window</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  async created () {</span></span>
<span class="line"><span>    this.searchResults = await this.search() // Search for default term</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    /** Debounce search input by 100 ms */</span></span>
<span class="line"><span>    onSearchInput () {</span></span>
<span class="line"><span>      clearTimeout(this.searchDebounce)</span></span>
<span class="line"><span>      this.searchDebounce = setTimeout(async () =&gt; {</span></span>
<span class="line"><span>        this.searchOffset = 0</span></span>
<span class="line"><span>        this.searchResults = await this.search()</span></span>
<span class="line"><span>      }, 100)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    /** Call API to search for inputted term */</span></span>
<span class="line"><span>    async search () {</span></span>
<span class="line"><span>      const response = await axios.get(\`\${this.baseUrl}/search\`, { params: { term: this.searchTerm, offset: this.searchOffset } })</span></span>
<span class="line"><span>      this.numHits = response.data.hits.total</span></span>
<span class="line"><span>      return response.data.hits.hits</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    /** Get next page of search results */</span></span>
<span class="line"><span>    async nextResultsPage () {</span></span>
<span class="line"><span>      if (this.numHits &gt; 10) {</span></span>
<span class="line"><span>        this.searchOffset += 10</span></span>
<span class="line"><span>        if (this.searchOffset + 10 &gt; this.numHits) { this.searchOffset = this.numHits - 10}</span></span>
<span class="line"><span>        this.searchResults = await this.search()</span></span>
<span class="line"><span>        document.documentElement.scrollTop = 0</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    /** Get previous page of search results */</span></span>
<span class="line"><span>    async prevResultsPage () {</span></span>
<span class="line"><span>      this.searchOffset -= 10</span></span>
<span class="line"><span>      if (this.searchOffset &lt; 0) { this.searchOffset = 0 }</span></span>
<span class="line"><span>      this.searchResults = await this.search()</span></span>
<span class="line"><span>      document.documentElement.scrollTop = 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>這個應用程序非常簡單 —— 我們只定義了一些共享的數據屬性，以及添加了檢索和分頁搜索結果的方法。為防止每次按鍵一次都調用 API，搜索輸入有一個 100 毫秒的除顫功能。</p>`,10)),n("p",null,[s[86]||(s[86]=a("解釋 Vue.js 是如何工作的已經超出了本教程的範圍，如果你使用過 Angular 或者 React，其實一些也不可怕。如果你完全不熟悉 Vue，想快速瞭解它的功能，我建議你從官方的快速指南入手 —— ",-1)),e(p,{href:"https://vuejs.org/v2/guide/"},{default:l(()=>[...s[85]||(s[85]=[a("https://vuejs.org/v2/guide/",-1)])]),_:1})]),s[159]||(s[159]=t(`<h4 id="_7-1-html" tabindex="-1">7.1 - HTML <a class="header-anchor" href="#_7-1-html" aria-label="Permalink to “7.1 - HTML”">​</a></h4><p>使用以下的內容替換 <code>/public/index.html</code> 文件中的佔位符，以便於加載我們的 Vue.js 應用程序和設計一個基本的搜索界面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Elastic Library&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;description&quot; content=&quot;Literary Classic Search Engine.&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no&quot;&gt;</span></span>
<span class="line"><span>  &lt;link href=&quot;https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot; /&gt;</span></span>
<span class="line"><span>  &lt;link href=&quot;https://cdn.muicss.com/mui-0.9.20/css/mui.min.css&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot; /&gt;</span></span>
<span class="line"><span>  &lt;link href=&quot;https://fonts.googleapis.com/css?family=EB+Garamond:400,700|Open+Sans&quot; rel=&quot;stylesheet&quot;&gt;</span></span>
<span class="line"><span>  &lt;link href=&quot;styles.css&quot; rel=&quot;stylesheet&quot; /&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;app-container&quot; id=&quot;vue-instance&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- Search Bar Header --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;mui-panel&quot;&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;mui-textfield&quot;&gt;</span></span>
<span class="line"><span>        &lt;input v-model=&quot;searchTerm&quot; type=&quot;text&quot; v-on:keyup=&quot;onSearchInput()&quot;&gt;</span></span>
<span class="line"><span>        &lt;label&gt;Search&lt;/label&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- Search Metadata Card --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;mui-panel&quot;&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;mui--text-headline&quot;&gt;{{ numHits }} Hits&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;mui--text-subhead&quot;&gt;Displaying Results {{ searchOffset }} - {{ searchOffset + 9 }}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- Top Pagination Card --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;mui-panel pagination-panel&quot;&gt;</span></span>
<span class="line"><span>        &lt;button class=&quot;mui-btn mui-btn--flat&quot; v-on:click=&quot;prevResultsPage()&quot;&gt;Prev Page&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button class=&quot;mui-btn mui-btn--flat&quot; v-on:click=&quot;nextResultsPage()&quot;&gt;Next Page&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- Search Results Card List --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;search-results&quot; ref=&quot;searchResults&quot;&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;mui-panel&quot; v-for=&quot;hit in searchResults&quot; v-on:click=&quot;showBookModal(hit)&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;mui--text-title&quot; v-html=&quot;hit.highlight.text[0]&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;mui-divider&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;mui--text-subhead&quot;&gt;{{ hit._source.title }} - {{ hit._source.author }}&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;mui--text-body2&quot;&gt;Location {{ hit._source.location }}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- Bottom Pagination Card --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;mui-panel pagination-panel&quot;&gt;</span></span>
<span class="line"><span>        &lt;button class=&quot;mui-btn mui-btn--flat&quot; v-on:click=&quot;prevResultsPage()&quot;&gt;Prev Page&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button class=&quot;mui-btn mui-btn--flat&quot; v-on:click=&quot;nextResultsPage()&quot;&gt;Next Page&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- INSERT BOOK MODAL HERE --&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;https://cdn.muicss.com/mui-0.9.28/js/mui.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.3/vue.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.0/axios.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;app.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h4 id="_7-2-css" tabindex="-1">7.2 - CSS <a class="header-anchor" href="#_7-2-css" aria-label="Permalink to “7.2 - CSS”">​</a></h4><p>添加一個新文件 <code>/public/styles.css</code>，使用一些自定義的 UI 樣式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>body { font-family: &#39;EB Garamond&#39;, serif; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.mui-textfield &gt; input, .mui-btn, .mui--text-subhead, .mui-panel &gt; .mui--text-headline {</span></span>
<span class="line"><span>  font-family: &#39;Open Sans&#39;, sans-serif;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.all-caps { text-transform: uppercase; }</span></span>
<span class="line"><span>.app-container { padding: 16px; }</span></span>
<span class="line"><span>.search-results em { font-weight: bold; }</span></span>
<span class="line"><span>.book-modal &gt; button { width: 100%; }</span></span>
<span class="line"><span>.search-results .mui-divider { margin: 14px 0; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.search-results {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-direction: row;</span></span>
<span class="line"><span>  flex-wrap: wrap;</span></span>
<span class="line"><span>  justify-content: space-around;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.search-results &gt; div {</span></span>
<span class="line"><span>  flex-basis: 45%;</span></span>
<span class="line"><span>  box-sizing: border-box;</span></span>
<span class="line"><span>  cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media (max-width: 600px) {</span></span>
<span class="line"><span>  .search-results &gt; div { flex-basis: 100%; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.paragraphs-container {</span></span>
<span class="line"><span>  max-width: 800px;</span></span>
<span class="line"><span>  margin: 0 auto;</span></span>
<span class="line"><span>  margin-bottom: 48px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.paragraphs-container .mui--text-body1, .paragraphs-container .mui--text-body2 {</span></span>
<span class="line"><span>  font-size: 1.8rem;</span></span>
<span class="line"><span>  line-height: 35px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.book-modal {</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  height: 100%;</span></span>
<span class="line"><span>  padding: 40px 10%;</span></span>
<span class="line"><span>  box-sizing: border-box;</span></span>
<span class="line"><span>  margin: 0 auto;</span></span>
<span class="line"><span>  background-color: white;</span></span>
<span class="line"><span>  overflow-y: scroll;</span></span>
<span class="line"><span>  position: fixed;</span></span>
<span class="line"><span>  top: 0;</span></span>
<span class="line"><span>  left: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.pagination-panel {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: space-between;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.title-row {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: space-between;</span></span>
<span class="line"><span>  align-items: flex-end;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media (max-width: 600px) {</span></span>
<span class="line"><span>  .title-row{ </span></span>
<span class="line"><span>    flex-direction: column; </span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    align-items: center</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.locations-label {</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>  margin: 8px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.modal-footer {</span></span>
<span class="line"><span>  position: fixed;</span></span>
<span class="line"><span>  bottom: 0;</span></span>
<span class="line"><span>  left: 0;</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: space-around;</span></span>
<span class="line"><span>  background: white;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_7-3-嘗試輸出" tabindex="-1">7.3 - 嘗試輸出 <a class="header-anchor" href="#_7-3-嘗試輸出" aria-label="Permalink to “7.3 - 嘗試輸出”">​</a></h4><p>在你的瀏覽器中打開 <code>localhost:8080</code>，你將看到一個簡單的帶結果分頁功能的搜索界面。在頂部的搜索框中嘗試輸入不同的關鍵字來查看它們的搜索情況。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_4_0.png" alt="preview webapp"></p><blockquote><p>你沒有必要重新運行 <code>docker-compose up</code> 命令以使更改生效。本地的 <code>public</code> 目錄是裝載在我們的 Nginx 文件服務器容器中，因此，在本地系統中前端的變化將在容器化應用程序中自動反映出來。</p></blockquote><p>如果你嘗試點擊任何搜索結果，什麼反應也沒有 —— 因為我們還沒有為這個應用程序添加進一步的相關功能。</p><h3 id="_8-分頁預覽" tabindex="-1">8 - 分頁預覽 <a class="header-anchor" href="#_8-分頁預覽" aria-label="Permalink to “8 - 分頁預覽”">​</a></h3><p>如果能點擊每個搜索結果，然後查看到來自書中的內容，那將是非常棒的體驗。</p><h3 id="_8-0-添加-elasticsearch-查詢" tabindex="-1">8.0 - 添加 Elasticsearch 查詢 <a class="header-anchor" href="#_8-0-添加-elasticsearch-查詢" aria-label="Permalink to “8.0 - 添加 Elasticsearch 查詢”">​</a></h3><p>首先，我們需要定義一個簡單的查詢去從給定的書中獲取段落範圍。</p><p>在 <code>server/search.js</code> 文件中添加如下的函數到 <code>module.exports</code> 塊中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** Get the specified range of paragraphs from a book */</span></span>
<span class="line"><span>getParagraphs (bookTitle, startLocation, endLocation) {</span></span>
<span class="line"><span>  const filter = [</span></span>
<span class="line"><span>    { term: { title: bookTitle } },</span></span>
<span class="line"><span>    { range: { location: { gte: startLocation, lte: endLocation } } }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const body = {</span></span>
<span class="line"><span>    size: endLocation - startLocation,</span></span>
<span class="line"><span>    sort: { location: &#39;asc&#39; },</span></span>
<span class="line"><span>    query: { bool: { filter } }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return client.search({ index, type, body })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個新函數將返回給定的書的開始位置和結束位置之間的一個排序後的段落數組。</p><h4 id="_8-1-添加-api-端點" tabindex="-1">8.1 - 添加 API 端點 <a class="header-anchor" href="#_8-1-添加-api-端點" aria-label="Permalink to “8.1 - 添加 API 端點”">​</a></h4><p>現在，我們將這個函數鏈接到 API 端點。</p><p>添加下列內容到 <code>server/app.js</code> 文件中最初的 <code>/search</code> 端點下面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * GET /paragraphs</span></span>
<span class="line"><span> * Get a range of paragraphs from the specified book</span></span>
<span class="line"><span> * Query Params -</span></span>
<span class="line"><span> * bookTitle: string under 256 characters</span></span>
<span class="line"><span> * start: positive integer</span></span>
<span class="line"><span> * end: positive integer greater than start</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>router.get(&#39;/paragraphs&#39;,</span></span>
<span class="line"><span>  validate({</span></span>
<span class="line"><span>    query: {</span></span>
<span class="line"><span>      bookTitle: joi.string().max(256).required(),</span></span>
<span class="line"><span>      start: joi.number().integer().min(0).default(0),</span></span>
<span class="line"><span>      end: joi.number().integer().greater(joi.ref(&#39;start&#39;)).default(10)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }),</span></span>
<span class="line"><span>  async (ctx, next) =&gt; {</span></span>
<span class="line"><span>    const { bookTitle, start, end } = ctx.request.query</span></span>
<span class="line"><span>    ctx.body = await search.getParagraphs(bookTitle, start, end)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="_8-2-添加-ui-功能" tabindex="-1">8.2 - 添加 UI 功能 <a class="header-anchor" href="#_8-2-添加-ui-功能" aria-label="Permalink to “8.2 - 添加 UI 功能”">​</a></h4><p>現在，我們的新端點已經就緒，我們為應用程序添加一些從書中查詢和顯示全部頁面的前端功能。</p><p>在 <code>/public/app.js</code> 文件的 <code>methods</code> 塊中添加如下的函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    /** Call the API to get current page of paragraphs */</span></span>
<span class="line"><span>    async getParagraphs (bookTitle, offset) {</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>        this.bookOffset = offset</span></span>
<span class="line"><span>        const start = this.bookOffset</span></span>
<span class="line"><span>        const end = this.bookOffset + 10</span></span>
<span class="line"><span>        const response = await axios.get(\`\${this.baseUrl}/paragraphs\`, { params: { bookTitle, start, end } })</span></span>
<span class="line"><span>        return response.data.hits.hits</span></span>
<span class="line"><span>      } catch (err) {</span></span>
<span class="line"><span>        console.error(err)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    /** Get next page (next 10 paragraphs) of selected book */</span></span>
<span class="line"><span>    async nextBookPage () {</span></span>
<span class="line"><span>      this.$refs.bookModal.scrollTop = 0</span></span>
<span class="line"><span>      this.paragraphs = await this.getParagraphs(this.selectedParagraph._source.title, this.bookOffset + 10)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    /** Get previous page (previous 10 paragraphs) of selected book */</span></span>
<span class="line"><span>    async prevBookPage () {</span></span>
<span class="line"><span>      this.$refs.bookModal.scrollTop = 0</span></span>
<span class="line"><span>      this.paragraphs = await this.getParagraphs(this.selectedParagraph._source.title, this.bookOffset - 10)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    /** Display paragraphs from selected book in modal window */</span></span>
<span class="line"><span>    async showBookModal (searchHit) {</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>        document.body.style.overflow = &#39;hidden&#39;</span></span>
<span class="line"><span>        this.selectedParagraph = searchHit</span></span>
<span class="line"><span>        this.paragraphs = await this.getParagraphs(searchHit._source.title, searchHit._source.location - 5)</span></span>
<span class="line"><span>      } catch (err) {</span></span>
<span class="line"><span>        console.error(err)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    /** Close the book detail modal */</span></span>
<span class="line"><span>    closeBookModal () {</span></span>
<span class="line"><span>      document.body.style.overflow = &#39;auto&#39;</span></span>
<span class="line"><span>      this.selectedParagraph = null</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>這五個函數提供了通過頁碼從書中下載和分頁（每次十個段落）的邏輯。</p><p>現在，我們需要添加一個 UI 去顯示書的頁面。在 <code>/public/index.html</code> 的 <code>&lt;!-- INSERT BOOK MODAL HERE --&gt;</code> 註釋下面添加如下的內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    &lt;!-- Book Paragraphs Modal Window --&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;selectedParagraph&quot; ref=&quot;bookModal&quot; class=&quot;book-modal&quot;&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;paragraphs-container&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- Book Section Metadata --&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;title-row&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;mui--text-display2 all-caps&quot;&gt;{{ selectedParagraph._source.title }}&lt;/div&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;mui--text-display1&quot;&gt;{{ selectedParagraph._source.author }}&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;br&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;mui-divider&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;mui--text-subhead locations-label&quot;&gt;Locations {{ bookOffset - 5 }} to {{ bookOffset + 5 }}&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;mui-divider&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;br&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!-- Book Paragraphs --&gt;</span></span>
<span class="line"><span>        &lt;div v-for=&quot;paragraph in paragraphs&quot;&gt;</span></span>
<span class="line"><span>          &lt;div v-if=&quot;paragraph._source.location === selectedParagraph._source.location&quot; class=&quot;mui--text-body2&quot;&gt;</span></span>
<span class="line"><span>            &lt;strong&gt;{{ paragraph._source.text }}&lt;/strong&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>          &lt;div v-else class=&quot;mui--text-body1&quot;&gt;</span></span>
<span class="line"><span>            {{ paragraph._source.text }}</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>          &lt;br&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;!-- Book Pagination Footer --&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;modal-footer&quot;&gt;</span></span>
<span class="line"><span>        &lt;button class=&quot;mui-btn mui-btn--flat&quot; v-on:click=&quot;prevBookPage()&quot;&gt;Prev Page&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button class=&quot;mui-btn mui-btn--flat&quot; v-on:click=&quot;closeBookModal()&quot;&gt;Close&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button class=&quot;mui-btn mui-btn--flat&quot; v-on:click=&quot;nextBookPage()&quot;&gt;Next Page&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span></code></pre></div><p>再次重啓應用程序服務器（<code>docker-compose up -d --build</code>），然後打開 <code>localhost:8080</code>。當你再次點擊搜索結果時，你將能看到關鍵字附近的段落。如果你感興趣，你現在甚至可以看這本書的剩餘部分。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_5_0.png" alt="preview webapp book page"></p><p>祝賀你！你現在已經完成了本教程的應用程序。</p>`,32)),n("p",null,[s[88]||(s[88]=a("你可以去比較你的本地結果與託管在這裏的完整示例 —— ",-1)),e(p,{href:"https://search.patricktriest.com/"},{default:l(()=>[...s[87]||(s[87]=[a("https://search.patricktriest.com/",-1)])]),_:1})]),s[160]||(s[160]=n("h3",{id:"_9-elasticsearch-的缺點",tabindex:"-1"},[a("9 - Elasticsearch 的缺點 "),n("a",{class:"header-anchor",href:"#_9-elasticsearch-的缺點","aria-label":"Permalink to “9 - Elasticsearch 的缺點”"},"​")],-1)),s[161]||(s[161]=n("h4",{id:"_9-0-耗費資源",tabindex:"-1"},[a("9.0 - 耗費資源 "),n("a",{class:"header-anchor",href:"#_9-0-耗費資源","aria-label":"Permalink to “9.0 - 耗費資源”"},"​")],-1)),n("p",null,[s[91]||(s[91]=a("Elasticsearch 是計算密集型的。",-1)),e(p,{href:"https://www.elastic.co/guide/en/elasticsearch/guide/current/hardware.html"},{default:l(()=>[...s[89]||(s[89]=[a("官方建議",-1)])]),_:1}),s[92]||(s[92]=a(" 運行 ES 的機器最好有 64 GB 的內存，強烈反對在低於 8 GB 內存的機器上運行它。Elasticsearch 是一個 ",-1)),s[93]||(s[93]=n("em",null,"內存中",-1)),s[94]||(s[94]=a(" 資料庫，這樣使它的查詢速度非常快，但這也非常佔用系統內存。在生產系統中使用時，",-1)),e(p,{href:"https://www.elastic.co/guide/en/elasticsearch/guide/2.x/distributed-cluster.html"},{default:l(()=>[...s[90]||(s[90]=[a("他們強烈建議在一個集羣中運行多個 Elasticsearch 節點",-1)])]),_:1}),s[95]||(s[95]=a("，以實現高可用、自動分區和一個節點失敗時的數據冗餘。",-1))]),n("p",null,[s[97]||(s[97]=a("我們的這個教程中的應用程序運行在一個 $15/月 的 GCP 計算實例中（ ",-1)),e(p,{href:"https://search.patricktriest.com/"},{default:l(()=>[...s[96]||(s[96]=[a("search.patricktriest.com",-1)])]),_:1}),s[98]||(s[98]=a("），它只有 1.7 GB 的內存，它勉強能運行這個 Elasticsearch 節點；有時候在進行初始的數據加載過程中，整個機器就 ”假死機“ 了。在我的經驗中，Elasticsearch 比傳統的那些資料庫，比如，PostgreSQL 和 MongoDB 耗費的資源要多很多，這樣會使託管主機的成本增加很多。",-1))]),s[162]||(s[162]=n("h3",{id:"_9-1-與資料庫的同步",tabindex:"-1"},[a("9.1 - 與資料庫的同步 "),n("a",{class:"header-anchor",href:"#_9-1-與資料庫的同步","aria-label":"Permalink to “9.1 - 與資料庫的同步”"},"​")],-1)),s[163]||(s[163]=n("p",null,"對於大多數應用程序，將數據全部保存在 Elasticsearch 並不是個好的選擇。可以使用 ES 作為應用程序的主要事務資料庫，但是一般不推薦這樣做，因為在 Elasticsearch 中缺少 ACID，如果大量讀取數據的時候，它能導致寫操作丟失。在許多案例中，ES 服務器更多是一個特定的角色，比如做應用程序中的一個文本搜索功能。這種特定的用途，要求它從主資料庫中複製數據到 Elasticsearch 實例中。",-1)),s[164]||(s[164]=n("p",null,"比如，假設我們將用户信息保存在一個 PostgreSQL 表中，但是用 Elasticsearch 去提供我們的用户搜索功能。如果一個用户，比如，“Albert”，決定將他的名字改成 “Al”，我們將需要把這個變化同時反映到我們主要的 PostgreSQL 資料庫和輔助的 Elasticsearch 集羣中。",-1)),n("p",null,[s[101]||(s[101]=a("正確地集成它們可能比較棘手，最好的答案將取決於你現有的應用程序棧。這有多種開源方案可選，從 ",-1)),e(p,{href:"https://github.com/mongodb-labs/mongo-connector"},{default:l(()=>[...s[99]||(s[99]=[a("用一個進程去關注 MongoDB 操作日誌",-1)])]),_:1}),s[102]||(s[102]=a(" 並自動同步檢測到的變化到 ES，到使用一個 ",-1)),e(p,{href:"https://github.com/zombodb/zombodb"},{default:l(()=>[...s[100]||(s[100]=[a("PostgresSQL 插件",-1)])]),_:1}),s[103]||(s[103]=a(" 去創建一個定製的、基於 PSQL 的索引來與 Elasticsearch 進行自動溝通。",-1))]),s[165]||(s[165]=n("p",null,"如果沒有有效的預構建選項可用，你可能需要在你的服務器代碼中增加一些鈎子，這樣可以基於資料庫的變化來手動更新 Elasticsearch 索引。最後一招，我認為是一個最後的選擇，因為，使用定製的業務邏輯去保持 ES 的同步可能很複雜，這將會給應用程序引入很多的 bug。",-1)),s[166]||(s[166]=n("p",null,"讓 Elasticsearch 與一個主資料庫同步，將使它的架構更加複雜，其複雜性已經超越了 ES 的相關缺點，但是當在你的應用程序中考慮添加一個專用的搜索引擎的利弊得失時，這個問題是值的好好考慮的。",-1)),s[167]||(s[167]=n("h3",{id:"總結",tabindex:"-1"},[a("總結 "),n("a",{class:"header-anchor",href:"#總結","aria-label":"Permalink to “總結”"},"​")],-1)),n("p",null,[s[106]||(s[106]=a("在很多現在流行的應用程序中，全文搜索是一個非常重要的功能 —— 而且是很難實現的一個功能。對於在你的應用程序中添加一個快速而又可定製的文本搜索，Elasticsearch 是一個非常好的選擇，但是，在這裏也有一個替代者。",-1)),e(p,{href:"https://lucene.apache.org/solr/"},{default:l(()=>[...s[104]||(s[104]=[a("Apache Solr",-1)])]),_:1}),s[107]||(s[107]=a(" 是一個類似的開源搜索平台，它是基於 Apache Lucene 構建的，與 Elasticsearch 的核心庫是相同的。",-1)),e(p,{href:"https://www.algolia.com/"},{default:l(()=>[...s[105]||(s[105]=[a("Algolia",-1)])]),_:1}),s[108]||(s[108]=a(" 是一個搜索即服務的 Web 平台，它已經很快流行了起來，並且它對新手非常友好，很易於上手（但是作為折衷，它的可定製性較小，並且使用成本較高）。",-1))]),s[168]||(s[168]=n("p",null,"“搜索” 特性並不是 Elasticsearch 唯一功能。ES 也是日誌存儲和分析的常用工具，在一個 ELK（Elasticsearch、Logstash、Kibana）架構配置中通常會使用它。靈活的全文搜索功能使得 Elasticsearch 在數據量非常大的科學任務中用處很大 —— 比如，在一個數據集中正確的/標準化的條目拼寫，或者為了類似的詞組搜索一個文本數據集。",-1)),s[169]||(s[169]=n("p",null,"對於你自己的項目，這裏有一些創意。",-1)),n("ul",null,[s[120]||(s[120]=n("li",null,"添加更多你喜歡的書到教程的應用程序中，然後創建你自己的私人圖書館搜索引擎。",-1)),n("li",null,[s[110]||(s[110]=a("利用來自 ",-1)),e(p,{href:"https://scholar.google.com/"},{default:l(()=>[...s[109]||(s[109]=[a("Google Scholar",-1)])]),_:1}),s[111]||(s[111]=a(" 的論文索引，創建一個學術抄襲檢測引擎。",-1))]),s[121]||(s[121]=n("li",null,"通過將字典中的每個詞索引到 Elasticsearch，創建一個拼寫檢查應用程序。",-1)),n("li",null,[s[113]||(s[113]=a("通過將 ",-1)),e(p,{href:"https://aws.amazon.com/public-datasets/common-crawl/"},{default:l(()=>[...s[112]||(s[112]=[a("Common Crawl Corpus",-1)])]),_:1}),s[114]||(s[114]=a(" 加載到 Elasticsearch 中，構建你自己的與谷歌競爭的因特網搜索引擎（注意，它可能會超過 50 億個頁面，這是一個成本極高的數據集）。",-1))]),n("li",null,[s[117]||(s[117]=a("在 journalism 上使用 Elasticsearch：在最近的大規模泄露的文檔中搜索特定的名字和關鍵詞，比如， ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Panama_Papers"},{default:l(()=>[...s[115]||(s[115]=[a("Panama Papers",-1)])]),_:1}),s[118]||(s[118]=a(" 和 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Paradise_Papers"},{default:l(()=>[...s[116]||(s[116]=[a("Paradise Papers",-1)])]),_:1}),s[119]||(s[119]=a("。",-1))])]),n("p",null,[s[123]||(s[123]=a("本教程中應用程序的源代碼是 100% 公開的，你可以在 GitHub 倉庫上找到它們 —— ",-1)),e(p,{href:"https://github.com/triestpa/guttenberg-search"},{default:l(()=>[...s[122]||(s[122]=[a("https://github.com/triestpa/guttenberg-search",-1)])]),_:1})]),s[170]||(s[170]=n("p",null,"我希望你喜歡這個教程！你可以在下面的評論區，發表任何你的想法、問題、或者評論。",-1)),s[171]||(s[171]=n("hr",null,null,-1)),s[172]||(s[172]=n("p",null,"作者簡介：",-1)),s[173]||(s[173]=n("p",null,"全棧工程師，數據愛好者，學霸，“構建強迫症患者”，探險愛好者。",-1)),s[174]||(s[174]=n("hr",null,null,-1)),n("p",null,[s[125]||(s[125]=a("via: ",-1)),e(p,{href:"https://blog.patricktriest.com/text-search-docker-elasticsearch/"},{default:l(()=>[...s[124]||(s[124]=[a("https://blog.patricktriest.com/text-search-docker-elasticsearch/",-1)])]),_:1})]),n("p",null,[s[129]||(s[129]=a("作者：",-1)),e(p,{href:"https://blog.patricktriest.com/author/patrick/"},{default:l(()=>[...s[126]||(s[126]=[a("Patrick Triest",-1)])]),_:1}),s[130]||(s[130]=a(" 譯者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:l(()=>[...s[127]||(s[127]=[a("qhwdw",-1)])]),_:1}),s[131]||(s[131]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[128]||(s[128]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[134]||(s[134]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[132]||(s[132]=[a("LCTT",-1)])]),_:1}),s[135]||(s[135]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[133]||(s[133]=[a("Linux中國",-1)])]),_:1}),s[136]||(s[136]=a(" 榮譽推出",-1))])])}const y=i(d,[["render",u]]);export{x as __pageData,y as default};
