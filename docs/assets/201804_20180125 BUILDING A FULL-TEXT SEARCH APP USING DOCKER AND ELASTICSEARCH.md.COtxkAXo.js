import{_ as i,a0 as o,w as r,s as c,I as n,x as a,a1 as e,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"使用 Docker 和 Elasticsearch 构建一个全文搜索应用程序 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Docker 和 Elasticsearch 构建一个全文搜索应用程序 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Docker 和 Elasticsearch 构建一个全文搜索应用程序 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Docker 和 Elasticsearch 构建一个全文搜索应用程序 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180125 BUILDING A FULL-TEXT SEARCH APP USING DOCKER AND ELASTICSEARCH","title":"使用 Docker 和 Elasticsearch 构建一个全文搜索应用程序","tag":"201804","desc":""},"relativePath":"201804/20180125 BUILDING A FULL-TEXT SEARCH APP USING DOCKER AND ELASTICSEARCH.md","filePath":"[post].md"}'),d={name:"201804/20180125 BUILDING A FULL-TEXT SEARCH APP USING DOCKER AND ELASTICSEARCH.md"};function u(h,s,g,b,k,m){const p=o("Link");return r(),c("div",null,[s[137]||(s[137]=n("h1",{id:"使用-docker-和-elasticsearch-构建一个全文搜索应用程序",tabindex:"-1"},[a("使用 Docker 和 Elasticsearch 构建一个全文搜索应用程序 "),n("a",{class:"header-anchor",href:"#使用-docker-和-elasticsearch-构建一个全文搜索应用程序","aria-label":"Permalink to “使用 Docker 和 Elasticsearch 构建一个全文搜索应用程序”"},"​")],-1)),s[138]||(s[138]=n("p",null,[n("img",{src:"https://blog-images.patricktriest.com/uploads/library.jpg",alt:""})],-1)),s[139]||(s[139]=n("p",null,[n("em",null,"如何在超过 500 万篇文章的 Wikipedia 上找到与你研究相关的文章？")],-1)),s[140]||(s[140]=n("p",null,[n("em",null,"如何在超过 20 亿用户的 Facebook 中找到你的朋友（并且还拼错了名字）？")],-1)),s[141]||(s[141]=n("p",null,[n("em",null,"谷歌如何在整个因特网上搜索你的模糊的、充满拼写错误的查询？")],-1)),s[142]||(s[142]=n("p",null,"在本教程中，我们将带你探索如何配置我们自己的全文搜索应用程序（与上述问题中的系统相比，它的复杂度要小很多）。我们的示例应用程序将提供一个 UI 和 API 去从 100 部经典文学（比如，《彼得·潘》 、  《弗兰肯斯坦》 和  《金银岛》）中搜索完整的文本。",-1)),n("p",null,[s[1]||(s[1]=a("你可以在这里（",-1)),e(p,{href:"https://search.patricktriest.com/"},{default:l(()=>[...s[0]||(s[0]=[a("https://search.patricktriest.com",-1)])]),_:1}),s[2]||(s[2]=a("）预览该教程应用的完整版本。",-1))]),s[143]||(s[143]=n("p",null,[n("img",{src:"https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_4_0.png",alt:"preview webapp"})],-1)),n("p",null,[s[4]||(s[4]=a("这个应用程序的源代码是 100% 开源的，可以在 GitHub 仓库上找到它们 —— ",-1)),e(p,{href:"https://github.com/triestpa/guttenberg-search"},{default:l(()=>[...s[3]||(s[3]=[a("https://github.com/triestpa/guttenberg-search",-1)])]),_:1}),s[5]||(s[5]=a(" 。",-1))]),n("p",null,[s[9]||(s[9]=a("在应用程序中添加一个快速灵活的全文搜索可能是个挑战。大多数的主流数据库，比如，",-1)),e(p,{href:"https://www.postgresql.org/"},{default:l(()=>[...s[6]||(s[6]=[a("PostgreSQL",-1)])]),_:1}),s[10]||(s[10]=a(" 和 ",-1)),e(p,{href:"https://www.mongodb.com/"},{default:l(()=>[...s[7]||(s[7]=[a("MongoDB",-1)])]),_:1}),s[11]||(s[11]=a("，由于受其查询和索引结构的限制只能提供一个非常基础的文本搜索功能。为实现高质量的全文搜索，通常的最佳选择是单独的数据存储。",-1)),e(p,{href:"https://www.elastic.co/"},{default:l(()=>[...s[8]||(s[8]=[a("Elasticsearch",-1)])]),_:1}),s[12]||(s[12]=a(" 是一个开源数据存储的领导者，它专门为执行灵活而快速的全文搜索进行了优化。",-1))]),n("p",null,[s[18]||(s[18]=a("我们将使用 ",-1)),e(p,{href:"https://www.docker.com/"},{default:l(()=>[...s[13]||(s[13]=[a("Docker",-1)])]),_:1}),s[19]||(s[19]=a(" 去配置我们自己的项目环境和依赖。Docker 是一个容器化引擎，它被 ",-1)),e(p,{href:"https://www.uber.com/"},{default:l(()=>[...s[14]||(s[14]=[a("Uber",-1)])]),_:1}),s[20]||(s[20]=a("、",-1)),e(p,{href:"https://www.spotify.com/us/"},{default:l(()=>[...s[15]||(s[15]=[a("Spotify",-1)])]),_:1}),s[21]||(s[21]=a("、",-1)),e(p,{href:"https://www.adp.com/"},{default:l(()=>[...s[16]||(s[16]=[a("ADP",-1)])]),_:1}),s[22]||(s[22]=a(" 以及 ",-1)),e(p,{href:"https://www.paypal.com/us/home"},{default:l(()=>[...s[17]||(s[17]=[a("Paypal",-1)])]),_:1}),s[23]||(s[23]=a(" 使用。构建容器化应用的一个主要优势是，项目的设置在 Windows、macOS、以及 Linux 上都是相同的 —— 这使我写这个教程快速又简单。如果你还没有使用过 Docker，不用担心，我们接下来将经历完整的项目配置。",-1))]),n("p",null,[s[27]||(s[27]=a("我也会使用 ",-1)),e(p,{href:"https://nodejs.org/en/"},{default:l(()=>[...s[24]||(s[24]=[a("Node.js",-1)])]),_:1}),s[28]||(s[28]=a(" （使用 ",-1)),e(p,{href:"http://koajs.com/"},{default:l(()=>[...s[25]||(s[25]=[a("Koa",-1)])]),_:1}),s[29]||(s[29]=a(" 框架）和 ",-1)),e(p,{href:"https://vuejs.org/"},{default:l(()=>[...s[26]||(s[26]=[a("Vue.js",-1)])]),_:1}),s[30]||(s[30]=a("，用它们分别去构建我们自己的搜索 API 和前端 Web 应用程序。",-1))]),s[144]||(s[144]=t('<h3 id="_1-elasticsearch-是什么" tabindex="-1">1 - Elasticsearch 是什么？ <a class="header-anchor" href="#_1-elasticsearch-是什么" aria-label="Permalink to “1 - Elasticsearch 是什么？”">​</a></h3><p>全文搜索在现代应用程序中是一个有大量需求的特性。搜索也可能是最难的一项特性 —— 许多流行的网站的搜索功能都不合格，要么返回结果太慢，要么找不到精确的结果。通常，这种情况是被底层的数据库所局限：大多数标准的关系型数据库局限于基本的 <code>CONTAINS</code> 或 <code>LIKE</code> SQL 查询上，它仅提供最基本的字符串匹配功能。</p><p>我们的搜索应用程序将具备：</p><ol><li><strong>快速</strong> - 搜索结果将快速返回，为用户提供一个良好的体验。</li><li><strong>灵活</strong> - 我们希望能够去修改搜索如何执行的方式，这是为了便于在不同的数据库和用户场景下进行优化。</li><li><strong>容错</strong> - 如果所搜索的内容有拼写错误，我们将仍然会返回相关的结果，而这个结果可能正是用户希望去搜索的结果。</li><li><strong>全文</strong> - 我们不想限制我们的搜索只能与指定的关键字或者标签相匹配 —— 我们希望它可以搜索在我们的数据存储中的任何东西（包括大的文本字段）。</li></ol><p><img src="https://storage.googleapis.com/cdn.patricktriest.com/blog/images/posts/elastic-library/Elasticsearch-Logo.png" alt="Elastic Search Logo"></p>',5)),n("p",null,[s[33]||(s[33]=a("为了构建一个功能强大的搜索功能，通常最理想的方法是使用一个为全文搜索任务优化过的数据存储。在这里我们使用 ",-1)),e(p,{href:"https://www.elastic.co/"},{default:l(()=>[...s[31]||(s[31]=[a("Elasticsearch",-1)])]),_:1}),s[34]||(s[34]=a("，Elasticsearch 是一个开源的内存中的数据存储，它是用 Java 写的，最初是在 ",-1)),e(p,{href:"https://lucene.apache.org/core/"},{default:l(()=>[...s[32]||(s[32]=[a("Apache Lucene",-1)])]),_:1}),s[35]||(s[35]=a(" 库上构建的。",-1))]),n("p",null,[s[37]||(s[37]=a("这里有一些来自 ",-1)),e(p,{href:"https://www.elastic.co/guide/en/elasticsearch/guide/2.x/getting-started.html"},{default:l(()=>[...s[36]||(s[36]=[a("Elastic 官方网站",-1)])]),_:1}),s[38]||(s[38]=a(" 上的 Elasticsearch 真实使用案例。",-1))]),s[145]||(s[145]=t('<ul><li>Wikipedia 使用 Elasticsearch 去提供带高亮搜索片断的全文搜索功能，并且提供按类型搜索和 “did-you-mean” 建议。</li><li>Guardian 使用 Elasticsearch 把社交网络数据和访客日志相结合，为编辑去提供新文章的公众意见的实时反馈。</li><li>Stack Overflow 将全文搜索和地理查询相结合，并使用 “类似” 的方法去找到相关的查询和回答。</li><li>GitHub 使用 Elasticsearch 对 1300 亿行代码进行查询。</li></ul><h3 id="与-普通的-数据库相比-elasticsearch-有什么不一样的地方" tabindex="-1">与 “普通的” 数据库相比，Elasticsearch 有什么不一样的地方？ <a class="header-anchor" href="#与-普通的-数据库相比-elasticsearch-有什么不一样的地方" aria-label="Permalink to “与 “普通的” 数据库相比，Elasticsearch 有什么不一样的地方？”">​</a></h3><p>Elasticsearch 之所以能够提供快速灵活的全文搜索，秘密在于它使用<ruby>反转索引<rt>inverted index</rt></ruby> 。</p>',3)),n("p",null,[s[40]||(s[40]=a("“索引” 是数据库中的一种数据结构，它能够以超快的速度进行数据查询和检索操作。数据库通过存储与表中行相关联的字段来生成索引。在一种可搜索的数据结构（一般是 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/B-tree"},{default:l(()=>[...s[39]||(s[39]=[a("B 树",-1)])]),_:1}),s[41]||(s[41]=a("）中排序索引，在优化过的查询中，数据库能够达到接近线性的时间（比如，“使用 ID=5 查找行”）。",-1))]),s[146]||(s[146]=t('<p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/db_index.png" alt="Relational Index"></p><p>我们可以将数据库索引想像成一个图书馆中老式的卡片式目录 —— 只要你知道书的作者和书名，它就会告诉你书的准确位置。为加速特定字段上的查询速度，数据库表一般有多个索引（比如，在 <code>name</code> 列上的索引可以加速指定名字的查询）。</p><p>反转索引本质上是不一样的。每行（或文档）的内容是分开的，并且每个独立的条目（在本案例中是单词）反向指向到包含它的任何文档上。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/invertedIndex.jpg" alt="Inverted Index"></p><p>这种反转索引数据结构可以使我们非常快地查询到，所有出现 “football” 的文档。通过使用大量优化过的内存中的反转索引，Elasticsearch 可以让我们在存储的数据上，执行一些非常强大的和自定义的全文搜索。</p><h3 id="_2-项目设置" tabindex="-1">2 - 项目设置 <a class="header-anchor" href="#_2-项目设置" aria-label="Permalink to “2 - 项目设置”">​</a></h3><h4 id="_2-0-docker" tabindex="-1">2.0 - Docker <a class="header-anchor" href="#_2-0-docker" aria-label="Permalink to “2.0 - Docker”">​</a></h4>',7)),n("p",null,[s[43]||(s[43]=a("我们在这个项目上使用 ",-1)),e(p,{href:"https://www.docker.com/"},{default:l(()=>[...s[42]||(s[42]=[a("Docker",-1)])]),_:1}),s[44]||(s[44]=a(" 管理环境和依赖。Docker 是个容器引擎，它允许应用程序运行在一个独立的环境中，不会受到来自主机操作系统和本地开发环境的影响。现在，许多公司将它们的大规模 Web 应用程序主要运行在容器架构上。这样将提升灵活性和容器化应用程序组件的可组构性。",-1))]),s[147]||(s[147]=n("p",null,[n("img",{src:"https://storage.googleapis.com/cdn.patricktriest.com/blog/images/posts/elastic-library/docker.png",alt:"Docker Logo"})],-1)),s[148]||(s[148]=n("p",null,"对我来说，使用 Docker 的优势是，它对本教程的作者非常方便，它的本地环境设置量最小，并且跨 Windows、macOS 和 Linux 系统的一致性很好。我们只需要在 Docker 配置文件中定义这些依赖关系，而不是按安装说明分别去安装 Node.js、Elasticsearch 和 Nginx，然后，就可以使用这个配置文件在任何其它地方运行我们的应用程序。而且，因为每个应用程序组件都运行在它自己的独立容器中，它们受本地机器上的其它 “垃圾” 干扰的可能性非常小，因此，在调试问题时，像“它在我这里可以工作！”这类的问题将非常少。",-1)),s[149]||(s[149]=n("h4",{id:"_2-1-安装-docker-docker-compose",tabindex:"-1"},[a("2.1 - 安装 Docker & Docker-Compose "),n("a",{class:"header-anchor",href:"#_2-1-安装-docker-docker-compose","aria-label":"Permalink to “2.1 - 安装 Docker & Docker-Compose”"},"​")],-1)),n("p",null,[s[47]||(s[47]=a("这个项目只依赖 ",-1)),e(p,{href:"https://www.docker.com/"},{default:l(()=>[...s[45]||(s[45]=[a("Docker",-1)])]),_:1}),s[48]||(s[48]=a(" 和 ",-1)),e(p,{href:"https://docs.docker.com/compose/"},{default:l(()=>[...s[46]||(s[46]=[a("docker-compose",-1)])]),_:1}),s[49]||(s[49]=a("，docker-compose 是 Docker 官方支持的一个工具，它用来将定义的多个容器配置 ",-1)),s[50]||(s[50]=n("em",null,"组装",-1)),s[51]||(s[51]=a("  成单一的应用程序栈。",-1))]),n("ul",null,[n("li",null,[s[53]||(s[53]=a("安装 Docker - ",-1)),e(p,{href:"https://docs.docker.com/engine/installation/"},{default:l(()=>[...s[52]||(s[52]=[a("https://docs.docker.com/engine/installation/",-1)])]),_:1})]),n("li",null,[s[55]||(s[55]=a("安装 Docker Compose - ",-1)),e(p,{href:"https://docs.docker.com/compose/install/"},{default:l(()=>[...s[54]||(s[54]=[a("https://docs.docker.com/compose/install/",-1)])]),_:1})])]),s[150]||(s[150]=t(`<h4 id="_2-2-设置项目主目录" tabindex="-1">2.2 - 设置项目主目录 <a class="header-anchor" href="#_2-2-设置项目主目录" aria-label="Permalink to “2.2 - 设置项目主目录”">​</a></h4><p>为项目创建一个主目录（名为 <code>guttenberg_search</code>）。我们的项目将工作在主目录的以下两个子目录中。</p><ul><li><code>/public</code> - 保存前端 Vue.js Web 应用程序。</li><li><code>/server</code> - 服务器端 Node.js 源代码。</li></ul><h4 id="_2-3-添加-docker-compose-配置" tabindex="-1">2.3 - 添加 Docker-Compose 配置 <a class="header-anchor" href="#_2-3-添加-docker-compose-配置" aria-label="Permalink to “2.3 - 添加 Docker-Compose 配置”">​</a></h4><p>接下来，我们将创建一个 <code>docker-compose.yml</code> 文件来定义我们的应用程序栈中的每个容器。</p><ol><li><code>gs-api</code> - 后端应用程序逻辑使用的 Node.js 容器</li><li><code>gs-frontend</code> - 前端 Web 应用程序使用的 Ngnix 容器。</li><li><code>gs-search</code> - 保存和搜索数据的 Elasticsearch 容器。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>version: &#39;3&#39;</span></span>
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
<span class="line"><span>  esdata:</span></span></code></pre></div><p>这个文件定义了我们全部的应用程序栈 —— 不需要在你的本地系统上安装 Elasticsearch、Node 和 Nginx。每个容器都将端口转发到宿主机系统（<code>localhost</code>）上，以便于我们在宿主机上去访问和调试 Node API、Elasticsearch 实例和前端 Web 应用程序。</p><h4 id="_2-4-添加-dockerfile" tabindex="-1">2.4 - 添加 Dockerfile <a class="header-anchor" href="#_2-4-添加-dockerfile" aria-label="Permalink to “2.4 - 添加 Dockerfile”">​</a></h4><p>对于 Nginx 和 Elasticsearch，我们使用了官方预构建的镜像，而 Node.js 应用程序需要我们自己去构建。</p><p>在应用程序的根目录下定义一个简单的 <code>Dockerfile</code> 配置文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Use Node v8.9.0 LTS</span></span>
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
<span class="line"><span>CMD [ &quot;npm&quot;, &quot;start&quot; ]</span></span></code></pre></div><p>这个 Docker 配置扩展了官方的 Node.js 镜像、拷贝我们的应用程序源代码、以及在容器内安装 NPM 依赖。</p><p>我们也增加了一个 <code>.dockerignore</code> 文件，以防止我们不需要的文件拷贝到容器中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>node_modules/</span></span>
<span class="line"><span>npm-debug.log</span></span>
<span class="line"><span>books/</span></span>
<span class="line"><span>public/</span></span></code></pre></div><blockquote><p>请注意：我们之所以不拷贝 <code>node_modules</code> 目录到我们的容器中 —— 是因为我们要在容器构建过程里面运行 <code>npm install</code>。从宿主机系统拷贝 <code>node_modules</code> 到容器里面可能会引起错误，因为一些包需要为某些操作系统专门构建。比如说，在 macOS 上安装 <code>bcrypt</code> 包，然后尝试将这个模块直接拷贝到一个 Ubuntu 容器上将不能工作，因为 <code>bcyrpt</code> 需要为每个操作系统构建一个特定的二进制文件。</p></blockquote><h4 id="_2-5-添加基本文件" tabindex="-1">2.5 - 添加基本文件 <a class="header-anchor" href="#_2-5-添加基本文件" aria-label="Permalink to “2.5 - 添加基本文件”">​</a></h4><p>为了测试我们的配置，我们需要添加一些占位符文件到应用程序目录中。</p><p>在 <code>public/index.html</code> 文件中添加如下内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;html&gt;&lt;body&gt;Hello World From The Frontend Container&lt;/body&gt;&lt;/html&gt;</span></span></code></pre></div><p>接下来，在 <code>server/app.js</code> 中添加 Node.js 占位符文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const Koa = require(&#39;koa&#39;)</span></span>
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
<span class="line"><span>})</span></span></code></pre></div><p>最后，添加我们的 <code>package.json</code>  Node 应用配置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个文件定义了应用程序启动命令和 Node.js 包依赖。</p><blockquote><p>注意：不要运行 <code>npm install</code> —— 当它构建时，依赖会在容器内安装。</p></blockquote><h4 id="_2-6-测试它的输出" tabindex="-1">2.6 - 测试它的输出 <a class="header-anchor" href="#_2-6-测试它的输出" aria-label="Permalink to “2.6 - 测试它的输出”">​</a></h4><p>现在一切新绪，我们来测试应用程序的每个组件的输出。从应用程序的主目录运行 <code>docker-compose build</code>，它将构建我们的 Node.js 应用程序容器。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_0_3.png" alt="docker build output"></p><p>接下来，运行 <code>docker-compose up</code> 去启动整个应用程序栈。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_0_2.png" alt="docker compose output"></p><blockquote><p>这一步可能需要几分钟时间，因为 Docker 要为每个容器去下载基础镜像。以后再次运行，启动应用程序会非常快，因为所需要的镜像已经下载完成了。</p></blockquote><p>在你的浏览器中尝试访问 <code>localhost:8080</code> —— 你将看到简单的 “Hello World” Web 页面。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_0_0.png" alt="frontend sample output"></p><p>访问 <code>localhost:3000</code> 去验证我们的 Node 服务器，它将返回 “Hello World” 信息。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_0_1.png" alt="backend sample output"></p><p>最后，访问 <code>localhost:9200</code> 去检查 Elasticsearch 运行状态。它将返回类似如下的内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>如果三个 URL 都显示成功，祝贺你！整个容器栈已经正常运行了，接下来我们进入最有趣的部分。</p><h3 id="_3-连接到-elasticsearch" tabindex="-1">3 - 连接到 Elasticsearch <a class="header-anchor" href="#_3-连接到-elasticsearch" aria-label="Permalink to “3 - 连接到 Elasticsearch”">​</a></h3><p>我们要做的第一件事情是，让我们的应用程序连接到我们本地的 Elasticsearch 实例上。</p><h4 id="_3-0-添加-es-连接模块" tabindex="-1">3.0 - 添加 ES 连接模块 <a class="header-anchor" href="#_3-0-添加-es-连接模块" aria-label="Permalink to “3.0 - 添加 ES 连接模块”">​</a></h4><p>在新文件 <code>server/connection.js</code> 中添加如下的 Elasticsearch 初始化代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const elasticsearch = require(&#39;elasticsearch&#39;)</span></span>
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
<span class="line"><span>checkConnection()</span></span></code></pre></div><p>现在，我们重新构建我们的 Node 应用程序，我们将使用 <code>docker-compose build</code> 来做一些改变。接下来，运行 <code>docker-compose up -d</code> 去启动应用程序栈，它将以守护进程的方式在后台运行。</p><p>应用程序启动之后，在命令行中运行 <code>docker exec gs-api &quot;node&quot; &quot;server/connection.js&quot;</code>，以便于在容器内运行我们的脚本。你将看到类似如下的系统输出信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{ cluster_name: &#39;docker-cluster&#39;,</span></span>
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
<span class="line"><span>  active_shards_percent_as_number: 50 }</span></span></code></pre></div><p>继续之前，我们先删除最下面的 <code>checkConnection()</code> 调用，因为，我们最终的应用程序将调用外部的连接模块。</p><h4 id="_3-1-添加函数去重置索引" tabindex="-1">3.1 - 添加函数去重置索引 <a class="header-anchor" href="#_3-1-添加函数去重置索引" aria-label="Permalink to “3.1 - 添加函数去重置索引”">​</a></h4><p>在 <code>server/connection.js</code> 中的 <code>checkConnection</code> 下面添加如下的函数，以便于重置 Elasticsearch 索引。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** Clear the index, recreate it, and add mappings */</span></span>
<span class="line"><span>async function resetIndex (index) {</span></span>
<span class="line"><span>  if (await client.indices.exists({ index })) {</span></span>
<span class="line"><span>    await client.indices.delete({ index })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  await client.indices.create({ index })</span></span>
<span class="line"><span>  await putBookMapping()</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_3-2-添加图书模式" tabindex="-1">3.2 - 添加图书模式 <a class="header-anchor" href="#_3-2-添加图书模式" aria-label="Permalink to “3.2 - 添加图书模式”">​</a></h4><p>接下来，我们将为图书的数据模式添加一个 “映射”。在 <code>server/connection.js</code> 中的 <code>resetIndex</code> 函数下面添加如下的函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** Add book section schema mapping to ES */</span></span>
<span class="line"><span>async function putBookMapping () {</span></span>
<span class="line"><span>  const schema = {</span></span>
<span class="line"><span>    title: { type: &#39;keyword&#39; },</span></span>
<span class="line"><span>    author: { type: &#39;keyword&#39; },</span></span>
<span class="line"><span>    location: { type: &#39;integer&#39; },</span></span>
<span class="line"><span>    text: { type: &#39;text&#39; }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return client.indices.putMapping({ index, type, body: { properties: schema } })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这是为 <code>book</code> 索引定义了一个映射。Elasticsearch 中的 <code>index</code> 大概类似于 SQL 的 <code>table</code> 或者 MongoDB 的  <code>collection</code>。我们通过添加映射来为存储的文档指定每个字段和它的数据类型。Elasticsearch 是无模式的，因此，从技术角度来看，我们是不需要添加映射的，但是，这样做，我们可以更好地控制如何处理数据。</p><p>比如，我们给 <code>title</code> 和 <code>author</code> 字段分配 <code>keyword</code> 类型，给 <code>text</code> 字段分配 <code>text</code> 类型。之所以这样做的原因是，搜索引擎可以区别处理这些字符串字段 —— 在搜索的时候，搜索引擎将在 <code>text</code> 字段中搜索可能的匹配项，而对于 <code>keyword</code> 类型字段，将对它们进行全文匹配。这看上去差别很小，但是它们对在不同的搜索上的速度和行为的影响非常大。</p><p>在文件的底部，导出对外发布的属性和函数，这样我们的应用程序中的其它模块就可以访问它们了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  client, index, type, checkConnection, resetIndex</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-加载原始数据" tabindex="-1">4 - 加载原始数据 <a class="header-anchor" href="#_4-加载原始数据" aria-label="Permalink to “4 - 加载原始数据”">​</a></h3>`,59)),n("p",null,[s[57]||(s[57]=a("我们将使用来自 ",-1)),e(p,{href:"https://www.gutenberg.org/"},{default:l(()=>[...s[56]||(s[56]=[a("古登堡项目",-1)])]),_:1}),s[58]||(s[58]=a(" 的数据 ——  它致力于为公共提供免费的线上电子书。在这个项目中，我们将使用 100 本经典图书来充实我们的图书馆，包括《福尔摩斯探案集》、《金银岛》、《基督山复仇记》、《环游世界八十天》、《罗密欧与朱丽叶》 和《奥德赛》。",-1))]),s[151]||(s[151]=n("p",null,[n("img",{src:"https://storage.googleapis.com/cdn.patricktriest.com/blog/images/posts/elastic-library/books.jpg",alt:"Book Covers"})],-1)),s[152]||(s[152]=n("h4",{id:"_4-1-下载图书文件",tabindex:"-1"},[a("4.1 - 下载图书文件 "),n("a",{class:"header-anchor",href:"#_4-1-下载图书文件","aria-label":"Permalink to “4.1 - 下载图书文件”"},"​")],-1)),n("p",null,[s[60]||(s[60]=a("我将这 100 本书打包成一个文件，你可以从这里下载它 —— ",-1)),e(p,{href:"https://cdn.patricktriest.com/data/books.zip"},{default:l(()=>[...s[59]||(s[59]=[a("https://cdn.patricktriest.com/data/books.zip",-1)])]),_:1})]),s[153]||(s[153]=n("p",null,[a("将这个文件解压到你的项目的 "),n("code",null,"books/"),a(" 目录中。")],-1)),n("p",null,[s[63]||(s[63]=a("你可以使用以下的命令来完成（需要在命令行下使用 ",-1)),e(p,{href:"https://www.gnu.org/software/wget/"},{default:l(()=>[...s[61]||(s[61]=[a("wget",-1)])]),_:1}),s[64]||(s[64]=a(" 和 ",-1)),e(p,{href:"https://theunarchiver.com/command-line"},{default:l(()=>[...s[62]||(s[62]=[a("The Unarchiver",-1)])]),_:1}),s[65]||(s[65]=a("）。",-1))]),s[154]||(s[154]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>wget https://cdn.patricktriest.com/data/books.zip</span></span>
<span class="line"><span>unar books.zip</span></span></code></pre></div><h4 id="_4-2-预览一本书" tabindex="-1">4.2 - 预览一本书 <a class="header-anchor" href="#_4-2-预览一本书" aria-label="Permalink to “4.2 - 预览一本书”">​</a></h4><p>尝试打开其中的一本书的文件，假设打开的是 <code>219-0.txt</code>。你将注意到它开头是一个公开访问的协议，接下来是一些标识这本书的书名、作者、发行日期、语言和字符编码的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Title: Heart of Darkness</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Author: Joseph Conrad</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Release Date: February 1995 [EBook #219]</span></span>
<span class="line"><span>Last Updated: September 7, 2016</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Language: English</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Character set encoding: UTF-8</span></span></code></pre></div><p>在 <code>*** START OF THIS PROJECT GUTENBERG EBOOK HEART OF DARKNESS ***</code> 这些行后面，是这本书的正式内容。</p><p>如果你滚动到本书的底部，你将看到类似 <code>*** END OF THIS PROJECT GUTENBERG EBOOK HEART OF DARKNESS ***</code> 信息，接下来是本书更详细的协议版本。</p><p>下一步，我们将使用程序从文件头部来解析书的元数据，提取 <code>*** START OF</code> 和 <code>***END OF</code> 之间的内容。</p><h4 id="_4-3-读取数据目录" tabindex="-1">4.3 - 读取数据目录 <a class="header-anchor" href="#_4-3-读取数据目录" aria-label="Permalink to “4.3 - 读取数据目录”">​</a></h4><p>我们将写一个脚本来读取每本书的内容，并将这些数据添加到 Elasticsearch。我们将定义一个新的 Javascript 文件 <code>server/load_data.js</code> 来执行这些操作。</p><p>首先，我们将从 <code>books/</code> 目录中获取每个文件的列表。</p><p>在 <code>server/load_data.js</code> 中添加下列内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const fs = require(&#39;fs&#39;)</span></span>
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
<span class="line"><span>readAndInsertBooks()</span></span></code></pre></div><p>我们将使用一个快捷命令来重构我们的 Node.js 应用程序，并更新运行的容器。</p><p>运行 <code>docker-compose up -d --build</code> 去更新应用程序。这是运行  <code>docker-compose build</code> 和 <code>docker-compose up -d</code> 的快捷命令。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_1_0.png" alt="docker build output"></p><p>为了在容器中运行我们的 <code>load_data</code> 脚本，我们运行 <code>docker exec gs-api &quot;node&quot; &quot;server/load_data.js&quot;</code> 。你将看到 Elasticsearch 的状态输出 <code>Found 100 Books</code>。</p><p>这之后，脚本发生了错误退出，原因是我们调用了一个没有定义的辅助函数（<code>parseBookFile</code>）。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_1_1.png" alt="docker exec output"></p><h4 id="_4-4-读取数据文件" tabindex="-1">4.4 - 读取数据文件 <a class="header-anchor" href="#_4-4-读取数据文件" aria-label="Permalink to “4.4 - 读取数据文件”">​</a></h4><p>接下来，我们读取元数据和每本书的内容。</p><p>在 <code>server/load_data.js</code> 中定义新函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** Read an individual book text file, and extract the title, author, and paragraphs */</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个函数执行几个重要的任务。</p>`,23)),n("ol",null,[s[69]||(s[69]=n("li",null,"从文件系统中读取书的文本。",-1)),n("li",null,[s[67]||(s[67]=a("使用正则表达式（关于正则表达式，请参阅 ",-1)),e(p,{href:"https://blog.patricktriest.com/you-should-learn-regex/"},{default:l(()=>[...s[66]||(s[66]=[a("这篇文章",-1)])]),_:1}),s[68]||(s[68]=a(" ）解析书名和作者。",-1))]),s[70]||(s[70]=n("li",null,"通过匹配 “古登堡项目” 的头部和尾部，识别书的正文内容。",-1)),s[71]||(s[71]=n("li",null,"提取书的内容文本。",-1)),s[72]||(s[72]=n("li",null,"分割每个段落到它的数组中。",-1)),s[73]||(s[73]=n("li",null,"清理文本并删除空白行。",-1))]),s[155]||(s[155]=t(`<p>它的返回值，我们将构建一个对象，这个对象包含书名、作者、以及书中各段落的数组。</p><p>再次运行 <code>docker-compose up -d --build</code> 和 <code>docker exec gs-api &quot;node&quot; &quot;server/load_data.js&quot;</code>，你将看到输出同之前一样，在输出的末尾有三个额外的行。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_2_0.png" alt="docker exec output"></p><p>成功！我们的脚本从文本文件中成功解析出了书名和作者。脚本再次以错误结束，因为到现在为止，我们还没有定义辅助函数。</p><h4 id="_4-5-在-es-中索引数据文件" tabindex="-1">4.5 - 在 ES 中索引数据文件 <a class="header-anchor" href="#_4-5-在-es-中索引数据文件" aria-label="Permalink to “4.5 - 在 ES 中索引数据文件”">​</a></h4><p>最后一步，我们将批量上传每个段落的数组到 Elasticsearch 索引中。</p><p>在 <code>load_data.js</code> 中添加新的 <code>insertBookData</code> 函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** Bulk index the book data in Elasticsearch */</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个函数将使用书名、作者和附加元数据的段落位置来索引书中的每个段落。我们通过批量操作来插入段落，它比逐个段落插入要快的多。</p><blockquote><p>我们分批索引段落，而不是一次性插入全部，是为运行这个应用程序的内存稍有点小（1.7 GB）的服务器  <code>search.patricktriest.com</code> 上做的一个重要优化。如果你的机器内存还行（4 GB 以上），你或许不用分批上传。</p></blockquote><p>运行 <code>docker-compose up -d --build</code> 和 <code>docker exec gs-api &quot;node&quot; &quot;server/load_data.js&quot;</code> 一次或多次 —— 现在你将看到前面解析的 100 本书的完整输出，并插入到了 Elasticsearch。这可能需要几分钟时间，甚至更长。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_3_0.png" alt="data loading output"></p><h3 id="_5-搜索" tabindex="-1">5 - 搜索 <a class="header-anchor" href="#_5-搜索" aria-label="Permalink to “5 - 搜索”">​</a></h3><p>现在，Elasticsearch 中已经有了 100 本书了（大约有 230000 个段落），现在我们尝试搜索查询。</p><h4 id="_5-0-简单的-http-查询" tabindex="-1">5.0 - 简单的 HTTP 查询 <a class="header-anchor" href="#_5-0-简单的-http-查询" aria-label="Permalink to “5.0 - 简单的 HTTP 查询”">​</a></h4><p>首先，我们使用 Elasticsearch 的 HTTP API 对它进行直接查询。</p><p>在你的浏览器上访问这个 URL - <code>http://localhost:9200/library/_search?q=text:Java&amp;pretty</code></p><p>在这里，我们将执行一个极简的全文搜索，在我们的图书馆的书中查找 “Java” 这个词。</p><p>你将看到类似于下面的一个 JSON 格式的响应。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>用 Elasticseach 的 HTTP 接口可以测试我们插入的数据是否成功，但是如果直接将这个 API 暴露给 Web 应用程序将有极大的风险。这个 API 将会暴露管理功能（比如直接添加和删除文档），最理想的情况是完全不要对外暴露它。而是写一个简单的 Node.js API 去接收来自客户端的请求，然后（在我们的本地网络中）生成一个正确的查询发送给 Elasticsearch。</p><h4 id="_5-1-查询脚本" tabindex="-1">5.1 - 查询脚本 <a class="header-anchor" href="#_5-1-查询脚本" aria-label="Permalink to “5.1 - 查询脚本”">​</a></h4><p>我们现在尝试从我们写的 Node.js 脚本中查询 Elasticsearch。</p><p>创建一个新文件，<code>server/search.js</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const { client, index, type } = require(&#39;./connection&#39;)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我们的搜索模块定义一个简单的 <code>search</code> 函数，它将使用输入的词 <code>match</code> 查询。</p><p>这是查询的字段分解 -</p><ul><li><code>from</code> - 允许我们分页查询结果。默认每个查询返回 10 个结果，因此，指定 <code>from: 10</code> 将允许我们取回 10-20 的结果。</li><li><code>query</code> - 这里我们指定要查询的词。</li><li><code>operator</code> - 我们可以修改搜索行为；在本案例中，我们使用 <code>and</code> 操作去对查询中包含所有字元（要查询的词）的结果来确定优先顺序。</li><li><code>fuzziness</code> - 对拼写错误的容错调整，<code>auto</code> 的默认为 <code>fuzziness: 2</code>。模糊值越高，结果越需要更多校正。比如，<code>fuzziness: 1</code> 将允许以 <code>Patricc</code> 为关键字的查询中返回与 <code>Patrick</code> 匹配的结果。</li><li><code>highlights</code> - 为结果返回一个额外的字段，这个字段包含 HTML，以显示精确的文本字集和查询中匹配的关键词。</li></ul>`,28)),n("p",null,[s[75]||(s[75]=a("你可以去浏览 ",-1)),e(p,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/full-text-queries.html"},{default:l(()=>[...s[74]||(s[74]=[a("Elastic Full-Text Query DSL",-1)])]),_:1}),s[76]||(s[76]=a("，学习如何随意调整这些参数，以进一步自定义搜索查询。",-1))]),s[156]||(s[156]=t(`<h3 id="_6-api" tabindex="-1">6 - API <a class="header-anchor" href="#_6-api" aria-label="Permalink to “6 - API”">​</a></h3><p>为了能够从前端应用程序中访问我们的搜索功能，我们来写一个快速的 HTTP API。</p><h4 id="_6-0-api-服务器" tabindex="-1">6.0 - API 服务器 <a class="header-anchor" href="#_6-0-api-服务器" aria-label="Permalink to “6.0 - API 服务器”">​</a></h4><p>用以下的内容替换现有的 <code>server/app.js</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const Koa = require(&#39;koa&#39;)</span></span>
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
<span class="line"><span>  })</span></span></code></pre></div>`,5)),n("p",null,[s[78]||(s[78]=a("这些代码将为 ",-1)),e(p,{href:"http://koajs.com/"},{default:l(()=>[...s[77]||(s[77]=[a("Koa.js",-1)])]),_:1}),s[79]||(s[79]=a(" Node API 服务器导入服务器依赖，设置简单的日志，以及错误处理。",-1))]),s[157]||(s[157]=t(`<h3 id="_6-1-使用查询连接端点" tabindex="-1">6.1 - 使用查询连接端点 <a class="header-anchor" href="#_6-1-使用查询连接端点" aria-label="Permalink to “6.1 - 使用查询连接端点”">​</a></h3><p>接下来，我们将在服务器上添加一个端点，以便于发布我们的 Elasticsearch 查询功能。</p><p>在  <code>server/app.js</code> 文件的 <code>// ADD ENDPOINTS HERE</code>  下面插入下列的代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * GET /search</span></span>
<span class="line"><span> * Search for a term in the library</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>router.get(&#39;/search&#39;, async (ctx, next) =&gt; {</span></span>
<span class="line"><span>    const { term, offset } = ctx.request.query</span></span>
<span class="line"><span>    ctx.body = await search.queryTerm(term, offset)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>使用 <code>docker-compose up -d --build</code> 重启动应用程序。之后在你的浏览器中尝试调用这个搜索端点。比如，<code>http://localhost:3000/search?term=java</code> 这个请求将搜索整个图书馆中提到 “Java” 的内容。</p><p>结果与前面直接调用 Elasticsearch HTTP 界面的结果非常类似。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="_6-2-输入校验" tabindex="-1">6.2 - 输入校验 <a class="header-anchor" href="#_6-2-输入校验" aria-label="Permalink to “6.2 - 输入校验”">​</a></h3><p>这个端点现在还很脆弱 —— 我们没有对请求参数做任何的校验，因此，如果是无效的或者错误的值将使服务器出错。</p>`,9)),n("p",null,[s[82]||(s[82]=a("我们将添加一些使用 ",-1)),e(p,{href:"https://github.com/hapijs/joi"},{default:l(()=>[...s[80]||(s[80]=[a("Joi",-1)])]),_:1}),s[83]||(s[83]=a(" 和 ",-1)),e(p,{href:"https://github.com/triestpa/koa-joi-validate"},{default:l(()=>[...s[81]||(s[81]=[a("Koa-Joi-Validate",-1)])]),_:1}),s[84]||(s[84]=a(" 库的中间件，以对输入做校验。",-1))]),s[158]||(s[158]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
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
<span class="line"><span>)</span></span></code></pre></div><p>现在，重启服务器，如果你使用一个没有搜索关键字的请求（<code>http://localhost:3000/search</code>），你将返回一个带相关消息的 HTTP 400 错误，比如像 <code>Invalid URL Query - child &quot;term&quot; fails because [&quot;term&quot; is required]</code>。</p><p>如果想从 Node 应用程序中查看实时日志，你可以运行 <code>docker-compose logs -f api</code>。</p><h3 id="_7-前端应用程序" tabindex="-1">7 - 前端应用程序 <a class="header-anchor" href="#_7-前端应用程序" aria-label="Permalink to “7 - 前端应用程序”">​</a></h3><p>现在我们的 <code>/search</code> 端点已经就绪，我们来连接到一个简单的 Web 应用程序来测试这个 API。</p><h4 id="_7-0-vue-js-应用程序" tabindex="-1">7.0 - Vue.js 应用程序 <a class="header-anchor" href="#_7-0-vue-js-应用程序" aria-label="Permalink to “7.0 - Vue.js 应用程序”">​</a></h4><p>我们将使用 Vue.js 去协调我们的前端。</p><p>添加一个新文件 <code>/public/app.js</code>，去控制我们的 Vue.js 应用程序代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const vm = new Vue ({</span></span>
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
<span class="line"><span>})</span></span></code></pre></div><p>这个应用程序非常简单 —— 我们只定义了一些共享的数据属性，以及添加了检索和分页搜索结果的方法。为防止每次按键一次都调用 API，搜索输入有一个 100 毫秒的除颤功能。</p>`,10)),n("p",null,[s[86]||(s[86]=a("解释 Vue.js 是如何工作的已经超出了本教程的范围，如果你使用过 Angular 或者 React，其实一些也不可怕。如果你完全不熟悉 Vue，想快速了解它的功能，我建议你从官方的快速指南入手 —— ",-1)),e(p,{href:"https://vuejs.org/v2/guide/"},{default:l(()=>[...s[85]||(s[85]=[a("https://vuejs.org/v2/guide/",-1)])]),_:1})]),s[159]||(s[159]=t(`<h4 id="_7-1-html" tabindex="-1">7.1 - HTML <a class="header-anchor" href="#_7-1-html" aria-label="Permalink to “7.1 - HTML”">​</a></h4><p>使用以下的内容替换 <code>/public/index.html</code> 文件中的占位符，以便于加载我们的 Vue.js 应用程序和设计一个基本的搜索界面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
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
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h4 id="_7-2-css" tabindex="-1">7.2 - CSS <a class="header-anchor" href="#_7-2-css" aria-label="Permalink to “7.2 - CSS”">​</a></h4><p>添加一个新文件 <code>/public/styles.css</code>，使用一些自定义的 UI 样式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>body { font-family: &#39;EB Garamond&#39;, serif; }</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h4 id="_7-3-尝试输出" tabindex="-1">7.3 - 尝试输出 <a class="header-anchor" href="#_7-3-尝试输出" aria-label="Permalink to “7.3 - 尝试输出”">​</a></h4><p>在你的浏览器中打开 <code>localhost:8080</code>，你将看到一个简单的带结果分页功能的搜索界面。在顶部的搜索框中尝试输入不同的关键字来查看它们的搜索情况。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_4_0.png" alt="preview webapp"></p><blockquote><p>你没有必要重新运行 <code>docker-compose up</code> 命令以使更改生效。本地的 <code>public</code> 目录是装载在我们的 Nginx 文件服务器容器中，因此，在本地系统中前端的变化将在容器化应用程序中自动反映出来。</p></blockquote><p>如果你尝试点击任何搜索结果，什么反应也没有 —— 因为我们还没有为这个应用程序添加进一步的相关功能。</p><h3 id="_8-分页预览" tabindex="-1">8 - 分页预览 <a class="header-anchor" href="#_8-分页预览" aria-label="Permalink to “8 - 分页预览”">​</a></h3><p>如果能点击每个搜索结果，然后查看到来自书中的内容，那将是非常棒的体验。</p><h3 id="_8-0-添加-elasticsearch-查询" tabindex="-1">8.0 - 添加 Elasticsearch 查询 <a class="header-anchor" href="#_8-0-添加-elasticsearch-查询" aria-label="Permalink to “8.0 - 添加 Elasticsearch 查询”">​</a></h3><p>首先，我们需要定义一个简单的查询去从给定的书中获取段落范围。</p><p>在 <code>server/search.js</code> 文件中添加如下的函数到 <code>module.exports</code> 块中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** Get the specified range of paragraphs from a book */</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个新函数将返回给定的书的开始位置和结束位置之间的一个排序后的段落数组。</p><h4 id="_8-1-添加-api-端点" tabindex="-1">8.1 - 添加 API 端点 <a class="header-anchor" href="#_8-1-添加-api-端点" aria-label="Permalink to “8.1 - 添加 API 端点”">​</a></h4><p>现在，我们将这个函数链接到 API 端点。</p><p>添加下列内容到 <code>server/app.js</code> 文件中最初的 <code>/search</code> 端点下面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
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
<span class="line"><span>)</span></span></code></pre></div><h4 id="_8-2-添加-ui-功能" tabindex="-1">8.2 - 添加 UI 功能 <a class="header-anchor" href="#_8-2-添加-ui-功能" aria-label="Permalink to “8.2 - 添加 UI 功能”">​</a></h4><p>现在，我们的新端点已经就绪，我们为应用程序添加一些从书中查询和显示全部页面的前端功能。</p><p>在 <code>/public/app.js</code> 文件的 <code>methods</code> 块中添加如下的函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    /** Call the API to get current page of paragraphs */</span></span>
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
<span class="line"><span>    }</span></span></code></pre></div><p>这五个函数提供了通过页码从书中下载和分页（每次十个段落）的逻辑。</p><p>现在，我们需要添加一个 UI 去显示书的页面。在 <code>/public/index.html</code> 的 <code>&lt;!-- INSERT BOOK MODAL HERE --&gt;</code> 注释下面添加如下的内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    &lt;!-- Book Paragraphs Modal Window --&gt;</span></span>
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
<span class="line"><span>    &lt;/div&gt;</span></span></code></pre></div><p>再次重启应用程序服务器（<code>docker-compose up -d --build</code>），然后打开 <code>localhost:8080</code>。当你再次点击搜索结果时，你将能看到关键字附近的段落。如果你感兴趣，你现在甚至可以看这本书的剩余部分。</p><p><img src="https://cdn.patricktriest.com/blog/images/posts/elastic-library/sample_5_0.png" alt="preview webapp book page"></p><p>祝贺你！你现在已经完成了本教程的应用程序。</p>`,32)),n("p",null,[s[88]||(s[88]=a("你可以去比较你的本地结果与托管在这里的完整示例 —— ",-1)),e(p,{href:"https://search.patricktriest.com/"},{default:l(()=>[...s[87]||(s[87]=[a("https://search.patricktriest.com/",-1)])]),_:1})]),s[160]||(s[160]=n("h3",{id:"_9-elasticsearch-的缺点",tabindex:"-1"},[a("9 - Elasticsearch 的缺点 "),n("a",{class:"header-anchor",href:"#_9-elasticsearch-的缺点","aria-label":"Permalink to “9 - Elasticsearch 的缺点”"},"​")],-1)),s[161]||(s[161]=n("h4",{id:"_9-0-耗费资源",tabindex:"-1"},[a("9.0 - 耗费资源 "),n("a",{class:"header-anchor",href:"#_9-0-耗费资源","aria-label":"Permalink to “9.0 - 耗费资源”"},"​")],-1)),n("p",null,[s[91]||(s[91]=a("Elasticsearch 是计算密集型的。",-1)),e(p,{href:"https://www.elastic.co/guide/en/elasticsearch/guide/current/hardware.html"},{default:l(()=>[...s[89]||(s[89]=[a("官方建议",-1)])]),_:1}),s[92]||(s[92]=a(" 运行 ES 的机器最好有 64 GB 的内存，强烈反对在低于 8 GB 内存的机器上运行它。Elasticsearch 是一个 ",-1)),s[93]||(s[93]=n("em",null,"内存中",-1)),s[94]||(s[94]=a(" 数据库，这样使它的查询速度非常快，但这也非常占用系统内存。在生产系统中使用时，",-1)),e(p,{href:"https://www.elastic.co/guide/en/elasticsearch/guide/2.x/distributed-cluster.html"},{default:l(()=>[...s[90]||(s[90]=[a("他们强烈建议在一个集群中运行多个 Elasticsearch 节点",-1)])]),_:1}),s[95]||(s[95]=a("，以实现高可用、自动分区和一个节点失败时的数据冗余。",-1))]),n("p",null,[s[97]||(s[97]=a("我们的这个教程中的应用程序运行在一个 $15/月 的 GCP 计算实例中（ ",-1)),e(p,{href:"https://search.patricktriest.com/"},{default:l(()=>[...s[96]||(s[96]=[a("search.patricktriest.com",-1)])]),_:1}),s[98]||(s[98]=a("），它只有 1.7 GB 的内存，它勉强能运行这个 Elasticsearch 节点；有时候在进行初始的数据加载过程中，整个机器就 ”假死机“ 了。在我的经验中，Elasticsearch 比传统的那些数据库，比如，PostgreSQL 和 MongoDB 耗费的资源要多很多，这样会使托管主机的成本增加很多。",-1))]),s[162]||(s[162]=n("h3",{id:"_9-1-与数据库的同步",tabindex:"-1"},[a("9.1 - 与数据库的同步 "),n("a",{class:"header-anchor",href:"#_9-1-与数据库的同步","aria-label":"Permalink to “9.1 - 与数据库的同步”"},"​")],-1)),s[163]||(s[163]=n("p",null,"对于大多数应用程序，将数据全部保存在 Elasticsearch 并不是个好的选择。可以使用 ES 作为应用程序的主要事务数据库，但是一般不推荐这样做，因为在 Elasticsearch 中缺少 ACID，如果大量读取数据的时候，它能导致写操作丢失。在许多案例中，ES 服务器更多是一个特定的角色，比如做应用程序中的一个文本搜索功能。这种特定的用途，要求它从主数据库中复制数据到 Elasticsearch 实例中。",-1)),s[164]||(s[164]=n("p",null,"比如，假设我们将用户信息保存在一个 PostgreSQL 表中，但是用 Elasticsearch 去提供我们的用户搜索功能。如果一个用户，比如，“Albert”，决定将他的名字改成 “Al”，我们将需要把这个变化同时反映到我们主要的 PostgreSQL 数据库和辅助的 Elasticsearch 集群中。",-1)),n("p",null,[s[101]||(s[101]=a("正确地集成它们可能比较棘手，最好的答案将取决于你现有的应用程序栈。这有多种开源方案可选，从 ",-1)),e(p,{href:"https://github.com/mongodb-labs/mongo-connector"},{default:l(()=>[...s[99]||(s[99]=[a("用一个进程去关注 MongoDB 操作日志",-1)])]),_:1}),s[102]||(s[102]=a(" 并自动同步检测到的变化到 ES，到使用一个 ",-1)),e(p,{href:"https://github.com/zombodb/zombodb"},{default:l(()=>[...s[100]||(s[100]=[a("PostgresSQL 插件",-1)])]),_:1}),s[103]||(s[103]=a(" 去创建一个定制的、基于 PSQL 的索引来与 Elasticsearch 进行自动沟通。",-1))]),s[165]||(s[165]=n("p",null,"如果没有有效的预构建选项可用，你可能需要在你的服务器代码中增加一些钩子，这样可以基于数据库的变化来手动更新 Elasticsearch 索引。最后一招，我认为是一个最后的选择，因为，使用定制的业务逻辑去保持 ES 的同步可能很复杂，这将会给应用程序引入很多的 bug。",-1)),s[166]||(s[166]=n("p",null,"让 Elasticsearch 与一个主数据库同步，将使它的架构更加复杂，其复杂性已经超越了 ES 的相关缺点，但是当在你的应用程序中考虑添加一个专用的搜索引擎的利弊得失时，这个问题是值的好好考虑的。",-1)),s[167]||(s[167]=n("h3",{id:"总结",tabindex:"-1"},[a("总结 "),n("a",{class:"header-anchor",href:"#总结","aria-label":"Permalink to “总结”"},"​")],-1)),n("p",null,[s[106]||(s[106]=a("在很多现在流行的应用程序中，全文搜索是一个非常重要的功能 —— 而且是很难实现的一个功能。对于在你的应用程序中添加一个快速而又可定制的文本搜索，Elasticsearch 是一个非常好的选择，但是，在这里也有一个替代者。",-1)),e(p,{href:"https://lucene.apache.org/solr/"},{default:l(()=>[...s[104]||(s[104]=[a("Apache Solr",-1)])]),_:1}),s[107]||(s[107]=a(" 是一个类似的开源搜索平台，它是基于 Apache Lucene 构建的，与 Elasticsearch 的核心库是相同的。",-1)),e(p,{href:"https://www.algolia.com/"},{default:l(()=>[...s[105]||(s[105]=[a("Algolia",-1)])]),_:1}),s[108]||(s[108]=a(" 是一个搜索即服务的 Web 平台，它已经很快流行了起来，并且它对新手非常友好，很易于上手（但是作为折衷，它的可定制性较小，并且使用成本较高）。",-1))]),s[168]||(s[168]=n("p",null,"“搜索” 特性并不是 Elasticsearch 唯一功能。ES 也是日志存储和分析的常用工具，在一个 ELK（Elasticsearch、Logstash、Kibana）架构配置中通常会使用它。灵活的全文搜索功能使得 Elasticsearch 在数据量非常大的科学任务中用处很大 —— 比如，在一个数据集中正确的/标准化的条目拼写，或者为了类似的词组搜索一个文本数据集。",-1)),s[169]||(s[169]=n("p",null,"对于你自己的项目，这里有一些创意。",-1)),n("ul",null,[s[120]||(s[120]=n("li",null,"添加更多你喜欢的书到教程的应用程序中，然后创建你自己的私人图书馆搜索引擎。",-1)),n("li",null,[s[110]||(s[110]=a("利用来自 ",-1)),e(p,{href:"https://scholar.google.com/"},{default:l(()=>[...s[109]||(s[109]=[a("Google Scholar",-1)])]),_:1}),s[111]||(s[111]=a(" 的论文索引，创建一个学术抄袭检测引擎。",-1))]),s[121]||(s[121]=n("li",null,"通过将字典中的每个词索引到 Elasticsearch，创建一个拼写检查应用程序。",-1)),n("li",null,[s[113]||(s[113]=a("通过将 ",-1)),e(p,{href:"https://aws.amazon.com/public-datasets/common-crawl/"},{default:l(()=>[...s[112]||(s[112]=[a("Common Crawl Corpus",-1)])]),_:1}),s[114]||(s[114]=a(" 加载到 Elasticsearch 中，构建你自己的与谷歌竞争的因特网搜索引擎（注意，它可能会超过 50 亿个页面，这是一个成本极高的数据集）。",-1))]),n("li",null,[s[117]||(s[117]=a("在 journalism 上使用 Elasticsearch：在最近的大规模泄露的文档中搜索特定的名字和关键词，比如， ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Panama_Papers"},{default:l(()=>[...s[115]||(s[115]=[a("Panama Papers",-1)])]),_:1}),s[118]||(s[118]=a(" 和 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Paradise_Papers"},{default:l(()=>[...s[116]||(s[116]=[a("Paradise Papers",-1)])]),_:1}),s[119]||(s[119]=a("。",-1))])]),n("p",null,[s[123]||(s[123]=a("本教程中应用程序的源代码是 100% 公开的，你可以在 GitHub 仓库上找到它们 —— ",-1)),e(p,{href:"https://github.com/triestpa/guttenberg-search"},{default:l(()=>[...s[122]||(s[122]=[a("https://github.com/triestpa/guttenberg-search",-1)])]),_:1})]),s[170]||(s[170]=n("p",null,"我希望你喜欢这个教程！你可以在下面的评论区，发表任何你的想法、问题、或者评论。",-1)),s[171]||(s[171]=n("hr",null,null,-1)),s[172]||(s[172]=n("p",null,"作者简介：",-1)),s[173]||(s[173]=n("p",null,"全栈工程师，数据爱好者，学霸，“构建强迫症患者”，探险爱好者。",-1)),s[174]||(s[174]=n("hr",null,null,-1)),n("p",null,[s[125]||(s[125]=a("via: ",-1)),e(p,{href:"https://blog.patricktriest.com/text-search-docker-elasticsearch/"},{default:l(()=>[...s[124]||(s[124]=[a("https://blog.patricktriest.com/text-search-docker-elasticsearch/",-1)])]),_:1})]),n("p",null,[s[129]||(s[129]=a("作者：",-1)),e(p,{href:"https://blog.patricktriest.com/author/patrick/"},{default:l(()=>[...s[126]||(s[126]=[a("Patrick Triest",-1)])]),_:1}),s[130]||(s[130]=a(" 译者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:l(()=>[...s[127]||(s[127]=[a("qhwdw",-1)])]),_:1}),s[131]||(s[131]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[128]||(s[128]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[134]||(s[134]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[132]||(s[132]=[a("LCTT",-1)])]),_:1}),s[135]||(s[135]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[133]||(s[133]=[a("Linux中国",-1)])]),_:1}),s[136]||(s[136]=a(" 荣誉推出",-1))])])}const y=i(d,[["render",u]]);export{x as __pageData,y as default};
