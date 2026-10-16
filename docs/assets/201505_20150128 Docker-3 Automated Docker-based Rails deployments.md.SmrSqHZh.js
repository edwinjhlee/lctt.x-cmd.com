import{_ as a,a0 as i,w as d,s as p,I as r,x as o,a1 as n,A as t,ao as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const h=JSON.parse('{"title":"自动化部署基于Docker的Rails应用 | LCTT x X-CMD","titleTemplate":false,"description":"自动化部署基于Docker的Rails应用 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"自动化部署基于Docker的Rails应用 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"自动化部署基于Docker的Rails应用 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150128 Docker-3 Automated Docker-based Rails deployments","title":"自动化部署基于Docker的Rails应用","tag":"201505","desc":""},"relativePath":"201505/20150128 Docker-3 Automated Docker-based Rails deployments.md","filePath":"[post].md"}'),u={name:"201505/20150128 Docker-3 Automated Docker-based Rails deployments.md"};function k(m,e,b,f,g,R){const l=i("Link");return d(),p("div",null,[e[42]||(e[42]=r("h1",{id:"自动化部署基于docker的rails应用",tabindex:"-1"},[o("自动化部署基于Docker的Rails应用 "),r("a",{class:"header-anchor",href:"#自动化部署基于docker的rails应用","aria-label":"Permalink to “自动化部署基于Docker的Rails应用”"},"​")],-1)),e[43]||(e[43]=r("p",null,[r("img",{src:"http://cocoahunter.com/content/images/2015/01/docker3.jpeg",alt:""})],-1)),e[44]||(e[44]=r("p",null,"[TL;DR] 这是系列文章的第三篇，讲述了我的公司是如何将基础设施从PaaS移植到Docker上的。",-1)),r("ul",null,[r("li",null,[n(l,{href:"https://linux.cn/article-5339-1.html"},{default:t(()=>[...e[0]||(e[0]=[o("第一部分",-1)])]),_:1}),e[1]||(e[1]=o(":谈论了我接触Docker之前的经历；",-1))]),r("li",null,[n(l,{href:"https://linux.cn/article-5379-1.html"},{default:t(()=>[...e[2]||(e[2]=[o("第二部分",-1)])]),_:1}),e[3]||(e[3]=o(":一步步搭建一个安全而又私有的registry。",-1))])]),e[45]||(e[45]=s(`<hr><p>在系列文章的最后一篇里，我们将用一个实例来学习如何自动化整个部署过程。</p><h3 id="基本的rails应用程序" tabindex="-1">基本的Rails应用程序### <a class="header-anchor" href="#基本的rails应用程序" aria-label="Permalink to “基本的Rails应用程序###”">​</a></h3><p>现在让我们启动一个基本的Rails应用。为了更好的展示，我使用Ruby 2.2.0和Rails 4.1.1</p><p>在终端运行：</p><pre><code>$ rvm use 2.2.0
$ rails new  &amp;&amp; cd docker-test
</code></pre><p>创建一个基本的控制器：</p><pre><code>$ rails g controller welcome index
</code></pre><p>……，然后编辑 <code>routes.rb</code> ，以便让该项目的根指向我们新创建的welcome#index方法：</p><pre><code>root &#39;welcome#index&#39;  
</code></pre>`,10)),r("p",null,[e[5]||(e[5]=o("在终端运行 ",-1)),e[6]||(e[6]=r("code",null,"rails s",-1)),e[7]||(e[7]=o(" ，然后打开浏览器，登录",-1)),n(l,{href:"http://localhost:3000/"},{default:t(()=>[...e[4]||(e[4]=[o("http://localhost:3000",-1)])]),_:1}),e[8]||(e[8]=o("，你会进入到索引界面当中。我们不准备给应用加上多么神奇的东西，这只是一个基础的实例，当我们将要创建并部署容器的时候，用它来验证一切是否运行正常。",-1))]),e[46]||(e[46]=r("h3",{id:"安装webserver",tabindex:"-1"},[o("安装webserver "),r("a",{class:"header-anchor",href:"#安装webserver","aria-label":"Permalink to “安装webserver”"},"​")],-1)),e[47]||(e[47]=r("p",null,[o("我们打算使用Unicorn当做我们的webserver。在Gemfile中添加 "),r("code",null,"gem 'unicorn'"),o("和 "),r("code",null,"gem 'foreman'"),o("然后将它bundle起来(运行 "),r("code",null,"bundle install"),o("命令）。")],-1)),r("p",null,[e[10]||(e[10]=o("启动Rails应用时，需要先配置好Unicorn，所以我们将一个",-1)),e[11]||(e[11]=r("strong",null,"unicorn.rb",-1)),e[12]||(e[12]=o("文件放在",-1)),e[13]||(e[13]=r("strong",null,"config",-1)),e[14]||(e[14]=o("目录下。",-1)),n(l,{href:"https://gist.github.com/chasseurmic/0dad4d692ff499761b20"},{default:t(()=>[...e[9]||(e[9]=[o("这里有一个Unicorn配置文件的例子",-1)])]),_:1}),e[15]||(e[15]=o("，你可以直接复制粘贴Gist的内容。",-1))]),e[48]||(e[48]=r("p",null,"接下来，在项目的根目录下添加一个Procfile，以便可以使用foreman启动应用，内容为下：",-1)),e[49]||(e[49]=r("pre",null,[r("code",null,`web: bundle exec unicorn -p $PORT -c ./config/unicorn.rb  
`)],-1)),r("p",null,[e[17]||(e[17]=o("现在运行",-1)),e[18]||(e[18]=r("strong",null,"foreman start",-1)),e[19]||(e[19]=o("命令启动应用，一切都将正常运行，并且你将能够在",-1)),n(l,{href:"http://localhost:5000/"},{default:t(()=>[...e[16]||(e[16]=[o("http://localhost:5000",-1)])]),_:1}),e[20]||(e[20]=o("上看到一个正在运行的应用。",-1))]),e[50]||(e[50]=s(`<h3 id="构建一个docker镜像" tabindex="-1">构建一个Docker镜像 <a class="header-anchor" href="#构建一个docker镜像" aria-label="Permalink to “构建一个Docker镜像”">​</a></h3><p>现在我们构建一个镜像来运行我们的应用。在这个Rails项目的根目录下，创建一个名为<strong>Dockerfile</strong>的文件，然后粘贴进以下内容：</p><pre><code># 基于镜像 ruby 2.2.0
FROM ruby:2.2.0

# 安装所需的库和依赖
RUN apt-get update &amp;&amp; apt-get install -qy nodejs postgresql-client sqlite3 --no-install-recommends &amp;&amp; rm -rf /var/lib/apt/lists/*

# 设置 Rails 版本
ENV RAILS_VERSION 4.1.1

# 安装 Rails
RUN gem install rails --version &quot;$RAILS_VERSION&quot;

# 创建代码所运行的目录 
RUN mkdir -p /usr/src/app  
WORKDIR /usr/src/app

# 使 webserver 可以在容器外面访问
EXPOSE 3000

# 设置环境变量
ENV PORT=3000

# 启动 web 应用
CMD [&quot;foreman&quot;,&quot;start&quot;]

# 安装所需的 gems 
ADD Gemfile /usr/src/app/Gemfile  
ADD Gemfile.lock /usr/src/app/Gemfile.lock  
RUN bundle install --without development test

# 将 rails 项目（和 Dockerfile 同一个目录）添加到项目目录
ADD ./ /usr/src/app

# 运行 rake 任务
RUN RAILS_ENV=production rake db:create db:migrate  
</code></pre><p>使用上述Dockerfile，执行下列命令创建一个镜像（确保<strong>boot2docker</strong>已经启动并在运行当中）:</p><pre><code>$ docker build -t localhost:5000/your_username/docker-test .
</code></pre><p>然后，如果一切正常，长长的日志输出的最后一行应该类似于：</p><pre><code>Successfully built 82e48769506c  
$ docker images
REPOSITORY                                       TAG                 IMAGE ID            CREATED              VIRTUAL SIZE  
localhost:5000/your_username/docker-test         latest              82e48769506c        About a minute ago   884.2 MB  
</code></pre><p>让我们运行一下容器试试！</p><pre><code>$ docker run -d -p 3000:3000 --name docker-test localhost:5000/your_username/docker-test
</code></pre>`,9)),r("p",null,[e[22]||(e[22]=o("通过你的boot2docker虚拟机的3000号端口（我的是",-1)),n(l,{href:"http://192.168.59.103:3000/"},{default:t(()=>[...e[21]||(e[21]=[o("http://192.168.59.103:3000",-1)])]),_:1}),e[23]||(e[23]=o("），你可以观察你的Rails应用。（如果不清楚你的boot2docker虚拟地址，输入",-1)),e[24]||(e[24]=r("code",null," $ boot2docker ip",-1)),e[25]||(e[25]=o("命令查看。）",-1))]),e[51]||(e[51]=s(`<h3 id="使用shell脚本进行自动化部署" tabindex="-1">使用shell脚本进行自动化部署 <a class="header-anchor" href="#使用shell脚本进行自动化部署" aria-label="Permalink to “使用shell脚本进行自动化部署”">​</a></h3><p>前面的文章（指文章1和文章2）已经告诉了你如何将新创建的镜像推送到私有registry中，并将其部署在服务器上，所以我们跳过这一部分直接开始自动化进程。</p><p>我们将要定义3个shell脚本，然后最后使用rake将它们捆绑在一起。</p><h3 id="清除" tabindex="-1">清除 <a class="header-anchor" href="#清除" aria-label="Permalink to “清除”">​</a></h3><p>每当我们创建镜像的时候，</p><ul><li>停止并重启boot2docker；</li><li>去除Docker孤儿镜像（那些没有标签，并且不再被容器所使用的镜像们）。</li></ul><p>在你的工程根目录下的<strong>clean.sh</strong>文件中输入下列命令。</p><pre><code>echo Restarting boot2docker...  
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
</code></pre><p>给脚本加上执行权限：</p><pre><code>$ chmod +x clean.sh
</code></pre><h3 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to “构建”">​</a></h3><p>构建的过程基本上和之前我们所做的（docker build）内容相似。在工程的根目录下创建一个<strong>build.sh</strong>脚本，填写如下内容：</p><pre><code>docker build -t localhost:5000/your_username/docker-test .  
</code></pre><p>记得给脚本执行权限。</p><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to “部署”">​</a></h3><p>最后，创建一个<strong>deploy.sh</strong>脚本，在里面填进如下内容：</p><pre><code># 打开 boot2docker 到私有注册库的 SSH 连接
boot2docker ssh &quot;ssh -o &#39;StrictHostKeyChecking no&#39; -i /Users/username/.ssh/id_boot2docker -N -L 5000:localhost:5000 root@your-registry.com &amp;&quot; &amp;

# 在推送前先确认该 SSH 通道是开放的。
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
</code></pre>`,17)),r("p",null,[e[27]||(e[27]=o("如果你不理解这其中的含义，请先仔细阅读这部分",-1)),n(l,{href:"https://linux.cn/article-5379-1.html"},{default:t(()=>[...e[26]||(e[26]=[o("第二部分",-1)])]),_:1}),e[28]||(e[28]=o("。",-1))]),e[52]||(e[52]=s(`<p>给脚本加上执行权限。</p><h3 id="使用rake将以上所有绑定" tabindex="-1">使用rake将以上所有绑定 <a class="header-anchor" href="#使用rake将以上所有绑定" aria-label="Permalink to “使用rake将以上所有绑定”">​</a></h3><p>现在的情况是，每次你想要部署你的应用时，你都需要单独运行这三个脚本。</p><ol><li>clean</li><li>build</li><li>deploy / push</li></ol><p>这一点都不费工夫，可是事实上开发者比你想象的要懒得多！那么咱们就索性再懒一点！</p><p>我们最后再把工作好好整理一番，我们现在要将三个脚本通过rake捆绑在一起。</p><p>为了更简单一点，你可以在工程根目录下已经存在的Rakefile中添加几行代码，打开Rakefile文件，把下列内容粘贴进去。</p><pre><code>namespace :docker do  
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
</code></pre><p>即使你不清楚rake的语法（其实你真应该去了解一下，这玩意太酷了！），上面的内容也是很显然的吧。我们在一个命名空间（docker）里声明了三个任务。</p><p>三个任务是：</p><ul><li>rake docker:clean</li><li>rake docker:build</li><li>rake docker:deploy</li></ul><p>Deploy独立于build，build独立于clean。所以每次我们输入命令运行的时候。</p><pre><code>$ rake docker:deploy
</code></pre><p>所有的脚本都会按照顺序执行。</p><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to “测试”">​</a></h3><p>现在我们来看看是否一切正常，你只需要在app的代码里做一个小改动：</p><pre><code>$ rake docker:deploy
</code></pre><p>接下来就是见证奇迹的时刻了。一旦镜像文件被上传（第一次可能花费较长的时间），你就可以ssh登录产品服务器，并且（通过SSH管道）把docker镜像拉取到服务器并运行了。多么简单！</p><p>也许你需要一段时间来习惯，但是一旦成功，它几乎与用Heroku部署一样简单。</p><p>备注：像往常一样，请让我了解到你的意见。我不敢保证这种方法是最好，最快，或者最安全的Docker开发的方法，但是这东西对我们确实奏效。</p><hr>`,21)),r("p",null,[e[30]||(e[30]=o("via: ",-1)),n(l,{href:"http://cocoahunter.com/2015/01/23/docker-3/"},{default:t(()=>[...e[29]||(e[29]=[o("http://cocoahunter.com/2015/01/23/docker-3/",-1)])]),_:1})]),r("p",null,[e[34]||(e[34]=o("作者：",-1)),n(l,{href:"http://cocoahunter.com/author/michelangelo/"},{default:t(()=>[...e[31]||(e[31]=[o("Michelangelo Chasseur",-1)])]),_:1}),e[35]||(e[35]=o(" 译者：",-1)),n(l,{href:"https://github.com/DongShuaike"},{default:t(()=>[...e[32]||(e[32]=[o("DongShuaike",-1)])]),_:1}),e[36]||(e[36]=o(" 校对：",-1)),n(l,{href:"https://github.com/wxy"},{default:t(()=>[...e[33]||(e[33]=[o("wxy",-1)])]),_:1})]),r("p",null,[e[39]||(e[39]=o("本文由 ",-1)),n(l,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[37]||(e[37]=[o("LCTT",-1)])]),_:1}),e[40]||(e[40]=o(" 原创翻译，",-1)),n(l,{href:"http://linux.cn/"},{default:t(()=>[...e[38]||(e[38]=[o("Linux中国",-1)])]),_:1}),e[41]||(e[41]=o(" 荣誉推出",-1))])])}const c=a(u,[["render",k]]);export{h as __pageData,c as default};
