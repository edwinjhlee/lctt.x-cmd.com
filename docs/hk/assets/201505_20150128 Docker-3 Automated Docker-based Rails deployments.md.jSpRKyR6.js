import{_ as a,a0 as i,w as d,s as p,I as r,x as o,a1 as n,A as t,ao as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"自動化部署基於Docker的Rails應用 | LCTT x X-CMD","titleTemplate":false,"description":"自動化部署基於Docker的Rails應用 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"自動化部署基於Docker的Rails應用 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"自動化部署基於Docker的Rails應用 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150128 Docker-3 Automated Docker-based Rails deployments","title":"自動化部署基於Docker的Rails應用","tag":"201505","desc":""},"relativePath":"201505/20150128 Docker-3 Automated Docker-based Rails deployments.md","filePath":"[post].md"}'),u={name:"201505/20150128 Docker-3 Automated Docker-based Rails deployments.md"};function k(m,e,b,f,g,R){const l=i("Link");return d(),p("div",null,[e[42]||(e[42]=r("h1",{id:"自動化部署基於docker的rails應用",tabindex:"-1"},[o("自動化部署基於Docker的Rails應用 "),r("a",{class:"header-anchor",href:"#自動化部署基於docker的rails應用","aria-label":"Permalink to “自動化部署基於Docker的Rails應用”"},"​")],-1)),e[43]||(e[43]=r("p",null,[r("img",{src:"http://cocoahunter.com/content/images/2015/01/docker3.jpeg",alt:""})],-1)),e[44]||(e[44]=r("p",null,"[TL;DR] 這是系列文章的第三篇，講述了我的公司是如何將基礎設施從PaaS移植到Docker上的。",-1)),r("ul",null,[r("li",null,[n(l,{href:"https://linux.cn/article-5339-1.html"},{default:t(()=>[...e[0]||(e[0]=[o("第一部分",-1)])]),_:1}),e[1]||(e[1]=o(":談論了我接觸Docker之前的經歷；",-1))]),r("li",null,[n(l,{href:"https://linux.cn/article-5379-1.html"},{default:t(()=>[...e[2]||(e[2]=[o("第二部分",-1)])]),_:1}),e[3]||(e[3]=o(":一步步搭建一個安全而又私有的registry。",-1))])]),e[45]||(e[45]=s(`<hr><p>在系列文章的最後一篇裏，我們將用一個實例來學習如何自動化整個部署過程。</p><h3 id="基本的rails應用程序" tabindex="-1">基本的Rails應用程序### <a class="header-anchor" href="#基本的rails應用程序" aria-label="Permalink to “基本的Rails應用程序###”">​</a></h3><p>現在讓我們啓動一個基本的Rails應用。為了更好的展示，我使用Ruby 2.2.0和Rails 4.1.1</p><p>在終端運行：</p><pre><code>$ rvm use 2.2.0
$ rails new  &amp;&amp; cd docker-test
</code></pre><p>創建一個基本的控制器：</p><pre><code>$ rails g controller welcome index
</code></pre><p>……，然後編輯 <code>routes.rb</code> ，以便讓該項目的根指向我們新創建的welcome#index方法：</p><pre><code>root &#39;welcome#index&#39;  
</code></pre>`,10)),r("p",null,[e[5]||(e[5]=o("在終端運行 ",-1)),e[6]||(e[6]=r("code",null,"rails s",-1)),e[7]||(e[7]=o(" ，然後打開瀏覽器，登錄",-1)),n(l,{href:"http://localhost:3000/"},{default:t(()=>[...e[4]||(e[4]=[o("http://localhost:3000",-1)])]),_:1}),e[8]||(e[8]=o("，你會進入到索引界面當中。我們不準備給應用加上多麼神奇的東西，這只是一個基礎的實例，當我們將要創建並部署容器的時候，用它來驗證一切是否運行正常。",-1))]),e[46]||(e[46]=r("h3",{id:"安裝webserver",tabindex:"-1"},[o("安裝webserver "),r("a",{class:"header-anchor",href:"#安裝webserver","aria-label":"Permalink to “安裝webserver”"},"​")],-1)),e[47]||(e[47]=r("p",null,[o("我們打算使用Unicorn當做我們的webserver。在Gemfile中添加 "),r("code",null,"gem 'unicorn'"),o("和 "),r("code",null,"gem 'foreman'"),o("然後將它bundle起來(運行 "),r("code",null,"bundle install"),o("命令）。")],-1)),r("p",null,[e[10]||(e[10]=o("啓動Rails應用時，需要先配置好Unicorn，所以我們將一個",-1)),e[11]||(e[11]=r("strong",null,"unicorn.rb",-1)),e[12]||(e[12]=o("文件放在",-1)),e[13]||(e[13]=r("strong",null,"config",-1)),e[14]||(e[14]=o("目錄下。",-1)),n(l,{href:"https://gist.github.com/chasseurmic/0dad4d692ff499761b20"},{default:t(()=>[...e[9]||(e[9]=[o("這裏有一個Unicorn配置文件的例子",-1)])]),_:1}),e[15]||(e[15]=o("，你可以直接複製粘貼Gist的內容。",-1))]),e[48]||(e[48]=r("p",null,"接下來，在項目的根目錄下添加一個Procfile，以便可以使用foreman啓動應用，內容為下：",-1)),e[49]||(e[49]=r("pre",null,[r("code",null,`web: bundle exec unicorn -p $PORT -c ./config/unicorn.rb  
`)],-1)),r("p",null,[e[17]||(e[17]=o("現在運行",-1)),e[18]||(e[18]=r("strong",null,"foreman start",-1)),e[19]||(e[19]=o("命令啓動應用，一切都將正常運行，並且你將能夠在",-1)),n(l,{href:"http://localhost:5000/"},{default:t(()=>[...e[16]||(e[16]=[o("http://localhost:5000",-1)])]),_:1}),e[20]||(e[20]=o("上看到一個正在運行的應用。",-1))]),e[50]||(e[50]=s(`<h3 id="構建一個docker鏡像" tabindex="-1">構建一個Docker鏡像 <a class="header-anchor" href="#構建一個docker鏡像" aria-label="Permalink to “構建一個Docker鏡像”">​</a></h3><p>現在我們構建一個鏡像來運行我們的應用。在這個Rails項目的根目錄下，創建一個名為<strong>Dockerfile</strong>的文件，然後粘貼進以下內容：</p><pre><code># 基於鏡像 ruby 2.2.0
FROM ruby:2.2.0

# 安裝所需的庫和依賴
RUN apt-get update &amp;&amp; apt-get install -qy nodejs postgresql-client sqlite3 --no-install-recommends &amp;&amp; rm -rf /var/lib/apt/lists/*

# 設置 Rails 版本
ENV RAILS_VERSION 4.1.1

# 安裝 Rails
RUN gem install rails --version &quot;$RAILS_VERSION&quot;

# 創建代碼所運行的目錄 
RUN mkdir -p /usr/src/app  
WORKDIR /usr/src/app

# 使 webserver 可以在容器外面訪問
EXPOSE 3000

# 設置環境變量
ENV PORT=3000

# 啓動 web 應用
CMD [&quot;foreman&quot;,&quot;start&quot;]

# 安裝所需的 gems 
ADD Gemfile /usr/src/app/Gemfile  
ADD Gemfile.lock /usr/src/app/Gemfile.lock  
RUN bundle install --without development test

# 將 rails 項目（和 Dockerfile 同一個目錄）添加到項目目錄
ADD ./ /usr/src/app

# 運行 rake 任務
RUN RAILS_ENV=production rake db:create db:migrate  
</code></pre><p>使用上述Dockerfile，執行下列命令創建一個鏡像（確保<strong>boot2docker</strong>已經啓動並在運行當中）:</p><pre><code>$ docker build -t localhost:5000/your_username/docker-test .
</code></pre><p>然後，如果一切正常，長長的日誌輸出的最後一行應該類似於：</p><pre><code>Successfully built 82e48769506c  
$ docker images
REPOSITORY                                       TAG                 IMAGE ID            CREATED              VIRTUAL SIZE  
localhost:5000/your_username/docker-test         latest              82e48769506c        About a minute ago   884.2 MB  
</code></pre><p>讓我們運行一下容器試試！</p><pre><code>$ docker run -d -p 3000:3000 --name docker-test localhost:5000/your_username/docker-test
</code></pre>`,9)),r("p",null,[e[22]||(e[22]=o("通過你的boot2docker虛擬機的3000號端口（我的是",-1)),n(l,{href:"http://192.168.59.103:3000/"},{default:t(()=>[...e[21]||(e[21]=[o("http://192.168.59.103:3000",-1)])]),_:1}),e[23]||(e[23]=o("），你可以觀察你的Rails應用。（如果不清楚你的boot2docker虛擬地址，輸入",-1)),e[24]||(e[24]=r("code",null," $ boot2docker ip",-1)),e[25]||(e[25]=o("命令查看。）",-1))]),e[51]||(e[51]=s(`<h3 id="使用shell腳本進行自動化部署" tabindex="-1">使用shell腳本進行自動化部署 <a class="header-anchor" href="#使用shell腳本進行自動化部署" aria-label="Permalink to “使用shell腳本進行自動化部署”">​</a></h3><p>前面的文章（指文章1和文章2）已經告訴了你如何將新創建的鏡像推送到私有registry中，並將其部署在服務器上，所以我們跳過這一部分直接開始自動化進程。</p><p>我們將要定義3個shell腳本，然後最後使用rake將它們捆綁在一起。</p><h3 id="清除" tabindex="-1">清除 <a class="header-anchor" href="#清除" aria-label="Permalink to “清除”">​</a></h3><p>每當我們創建鏡像的時候，</p><ul><li>停止並重啓boot2docker；</li><li>去除Docker孤兒鏡像（那些沒有標籤，並且不再被容器所使用的鏡像們）。</li></ul><p>在你的工程根目錄下的<strong>clean.sh</strong>文件中輸入下列命令。</p><pre><code>echo Restarting boot2docker...  
boot2docker down  
boot2docker up

echo Exporting Docker variables...  
sleep 1  
export DOCKER_HOST=tcp://192.168.59.103:2376  
export DOCKER_CERT_PATH=/Users/user/.boot2docker/certs/boot2docker-vm  
export DOCKER_TLS_VERIFY=1

sleep 1  
echo Removing orphaned images without tags...  
docker images | grep &quot;&lt;none&gt;&quot; | awk &#39;{print $3}&#39; | xargs docker rmi  
</code></pre><p>給腳本加上執行權限：</p><pre><code>$ chmod +x clean.sh
</code></pre><h3 id="構建" tabindex="-1">構建 <a class="header-anchor" href="#構建" aria-label="Permalink to “構建”">​</a></h3><p>構建的過程基本上和之前我們所做的（docker build）內容相似。在工程的根目錄下創建一個<strong>build.sh</strong>腳本，填寫如下內容：</p><pre><code>docker build -t localhost:5000/your_username/docker-test .  
</code></pre><p>記得給腳本執行權限。</p><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to “部署”">​</a></h3><p>最後，創建一個<strong>deploy.sh</strong>腳本，在裏面填進如下內容：</p><pre><code># 打開 boot2docker 到私有註冊庫的 SSH 連接
boot2docker ssh &quot;ssh -o &#39;StrictHostKeyChecking no&#39; -i /Users/username/.ssh/id_boot2docker -N -L 5000:localhost:5000 root@your-registry.com &amp;&quot; &amp;

# 在推送前先確認該 SSH 通道是開放的。
echo Waiting 5 seconds before pushing image.

echo 5...  
sleep 1  
echo 4...  
sleep 1  
echo 3...  
sleep 1  
echo 2...  
sleep 1  
echo 1...  
sleep 1

# Push image onto remote registry / repo
echo Starting push!  
docker push localhost:5000/username/docker-test  
</code></pre>`,17)),r("p",null,[e[27]||(e[27]=o("如果你不理解這其中的含義，請先仔細閲讀這部分",-1)),n(l,{href:"https://linux.cn/article-5379-1.html"},{default:t(()=>[...e[26]||(e[26]=[o("第二部分",-1)])]),_:1}),e[28]||(e[28]=o("。",-1))]),e[52]||(e[52]=s(`<p>給腳本加上執行權限。</p><h3 id="使用rake將以上所有綁定" tabindex="-1">使用rake將以上所有綁定 <a class="header-anchor" href="#使用rake將以上所有綁定" aria-label="Permalink to “使用rake將以上所有綁定”">​</a></h3><p>現在的情況是，每次你想要部署你的應用時，你都需要單獨運行這三個腳本。</p><ol><li>clean</li><li>build</li><li>deploy / push</li></ol><p>這一點都不費工夫，可是事實上開發者比你想像的要懶得多！那麼咱們就索性再懶一點！</p><p>我們最後再把工作好好整理一番，我們現在要將三個腳本通過rake捆綁在一起。</p><p>為了更簡單一點，你可以在工程根目錄下已經存在的Rakefile中添加幾行代碼，打開Rakefile文件，把下列內容粘貼進去。</p><pre><code>namespace :docker do  
  desc &quot;Remove docker container&quot;
  task :clean do
    sh &#39;./clean.sh&#39;
  end

  desc &quot;Build Docker image&quot;
  task :build =&gt; [:clean] do
    sh &#39;./build.sh&#39;
  end

  desc &quot;Deploy Docker image&quot;
  task :deploy =&gt; [:build] do
    sh &#39;./deploy.sh&#39;
  end
end  
</code></pre><p>即使你不清楚rake的語法（其實你真應該去了解一下，這玩意太酷了！），上面的內容也是很顯然的吧。我們在一個命名空間（docker）裏聲明瞭三個任務。</p><p>三個任務是：</p><ul><li>rake docker:clean</li><li>rake docker:build</li><li>rake docker:deploy</li></ul><p>Deploy獨立於build，build獨立於clean。所以每次我們輸入命令運行的時候。</p><pre><code>$ rake docker:deploy
</code></pre><p>所有的腳本都會按照順序執行。</p><h3 id="測試" tabindex="-1">測試 <a class="header-anchor" href="#測試" aria-label="Permalink to “測試”">​</a></h3><p>現在我們來看看是否一切正常，你只需要在app的代碼裏做一個小改動：</p><pre><code>$ rake docker:deploy
</code></pre><p>接下來就是見證奇蹟的時刻了。一旦鏡像文件被上傳（第一次可能花費較長的時間），你就可以ssh登錄產品服務器，並且（通過SSH管道）把docker鏡像拉取到服務器並運行了。多麼簡單！</p><p>也許你需要一段時間來習慣，但是一旦成功，它幾乎與用Heroku部署一樣簡單。</p><p>備註：像往常一樣，請讓我瞭解到你的意見。我不敢保證這種方法是最好，最快，或者最安全的Docker開發的方法，但是這東西對我們確實奏效。</p><hr>`,21)),r("p",null,[e[30]||(e[30]=o("via: ",-1)),n(l,{href:"http://cocoahunter.com/2015/01/23/docker-3/"},{default:t(()=>[...e[29]||(e[29]=[o("http://cocoahunter.com/2015/01/23/docker-3/",-1)])]),_:1})]),r("p",null,[e[34]||(e[34]=o("作者：",-1)),n(l,{href:"http://cocoahunter.com/author/michelangelo/"},{default:t(()=>[...e[31]||(e[31]=[o("Michelangelo Chasseur",-1)])]),_:1}),e[35]||(e[35]=o(" 譯者：",-1)),n(l,{href:"https://github.com/DongShuaike"},{default:t(()=>[...e[32]||(e[32]=[o("DongShuaike",-1)])]),_:1}),e[36]||(e[36]=o(" 校對：",-1)),n(l,{href:"https://github.com/wxy"},{default:t(()=>[...e[33]||(e[33]=[o("wxy",-1)])]),_:1})]),r("p",null,[e[39]||(e[39]=o("本文由 ",-1)),n(l,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[37]||(e[37]=[o("LCTT",-1)])]),_:1}),e[40]||(e[40]=o(" 原創翻譯，",-1)),n(l,{href:"http://linux.cn/"},{default:t(()=>[...e[38]||(e[38]=[o("Linux中國",-1)])]),_:1}),e[41]||(e[41]=o(" 榮譽推出",-1))])])}const c=a(u,[["render",k]]);export{h as __pageData,c as default};
