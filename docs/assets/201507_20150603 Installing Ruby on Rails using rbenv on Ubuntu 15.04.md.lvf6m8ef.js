import{_ as i,a0 as a,w as u,s as p,I as t,x as n,a1 as s,A as r,ao as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"在Ubuntu 15.04中安装Ruby on Rails | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu 15.04中安装Ruby on Rails | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu 15.04中安装Ruby on Rails | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu 15.04中安装Ruby on Rails | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150603 Installing Ruby on Rails using rbenv on Ubuntu 15.04","title":"在Ubuntu 15.04中安装Ruby on Rails","tag":"201507","desc":""},"relativePath":"201507/20150603 Installing Ruby on Rails using rbenv on Ubuntu 15.04.md","filePath":"[post].md"}'),b={name:"201507/20150603 Installing Ruby on Rails using rbenv on Ubuntu 15.04.md"};function d(g,e,m,y,h,v){const l=a("Link");return u(),p("div",null,[e[22]||(e[22]=t("h1",{id:"在ubuntu-15-04中安装ruby-on-rails",tabindex:"-1"},[n("在Ubuntu 15.04中安装Ruby on Rails "),t("a",{class:"header-anchor",href:"#在ubuntu-15-04中安装ruby-on-rails","aria-label":"Permalink to “在Ubuntu 15.04中安装Ruby on Rails”"},"​")],-1)),t("p",null,[e[1]||(e[1]=n("本篇我们会学习如何用rbenv在Ubuntu 15.04中安装Ruby on Rails。我们选择Ubuntu作为操作系统是因为Ubuntu是Linux发行版中自带很多包和完整文档的操作系统，因此我认为这是正确的选择。如果你还没有安装最新的Ubuntu，你可以从",-1)),s(l,{href:"http://release.ubuntu.com/15.04"},{default:r(()=>[...e[0]||(e[0]=[n("下载iso文件",-1)])]),_:1}),e[2]||(e[2]=n("开始。",-1))]),e[23]||(e[23]=o(`<h3 id="安装-ruby" tabindex="-1">安装 Ruby <a class="header-anchor" href="#安装-ruby" aria-label="Permalink to “安装 Ruby”">​</a></h3><p>我们要做的第一件事是更新Ubuntu包并且为Ruby安装一些依赖。</p><pre><code>sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev
</code></pre><p>有三种方法来安装Ruby：rbenv、rvm和从源码安装。每种都有各自的好处，但是近来开发者们更倾向使用rbenv而不是rvm和源码来安装。我们将安装最新的Ruby版本，2.2.2。</p><p>用rbenv来安装只有简单的两步。第一步安装rbenv，接着是ruby-build：</p><pre><code>cd
git clone git://github.com/sstephenson/rbenv.git .rbenv
echo &#39;eval &quot;$(rbenv init -)&quot;&#39; &gt;&gt; ~/.bashrc
exec $SHELL

git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
echo &#39;export PATH=&quot;$HOME/.rbenv/plugins/ruby-build/bin:$PATH&quot;&#39; &gt;&gt; ~/.bashrc
exec $SHELL

git clone https://github.com/sstephenson/rbenv-gem-rehash.git ~/.rbenv/plugins/rbenv-gem-rehash

rbenv install 2.2.2
rbenv global 2.2.2
ruby -v
</code></pre><p>我们需要安装Bundler，但是我们要在安装之前告诉rubygems不要为每个包安装本地文档。</p><pre><code>echo &quot;gem: --no-ri --no-rdoc&quot; &gt; ~/.gemrc
gem install bundler
</code></pre><h3 id="配置-git" tabindex="-1">配置 GIT <a class="header-anchor" href="#配置-git" aria-label="Permalink to “配置 GIT”">​</a></h3>`,9)),t("p",null,[e[4]||(e[4]=n("配置git之前，你要创建一个github账号，你可以注册一个",-1)),s(l,{href:"http://github.com"},{default:r(()=>[...e[3]||(e[3]=[n("github 账号",-1)])]),_:1}),e[5]||(e[5]=n("。我们需要git作为版本控制系统，因此我们要设置它来匹配github账号。",-1))]),e[24]||(e[24]=t("p",null,[n("用户的github账号来替换下面的"),t("strong",null,"Name"),n(" 和 "),t("strong",null,"Email address"),n(" 。")],-1)),e[25]||(e[25]=t("pre",null,[t("code",null,`git config --global color.ui true
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR@EMAIL.com"
ssh-keygen -t rsa -C "YOUR@EMAIL.com"
`)],-1)),t("p",null,[e[7]||(e[7]=n("接下来用新生成的ssh key添加到github账号中。这样你需要复制下面命令的输出并",-1)),s(l,{href:"https://github.com/settings/ssh"},{default:r(()=>[...e[6]||(e[6]=[n("粘贴在Github的设置页面里面",-1)])]),_:1}),e[8]||(e[8]=n("。",-1))]),e[26]||(e[26]=o(`<pre><code>cat ~/.ssh/id_rsa.pub
</code></pre><p>如果你做完了，检查是否已经成功。</p><pre><code>ssh -T git@github.com
</code></pre><p>你应该得到下面这样的信息。</p><pre><code>Hi excid3! You&#39;ve successfully authenticated, but GitHub does not provide shell access.
</code></pre><h3 id="安装-rails" tabindex="-1">安装 Rails <a class="header-anchor" href="#安装-rails" aria-label="Permalink to “安装 Rails”">​</a></h3><p>我们需要安装像NodeJS这样的javascript运行时环境，因为近来Rails的依赖越来越多了。这样我们可以合并和压缩你的javascript，从而提供一个更快的生产环境。</p><p>我们需要添加PPA来安装nodeJS。</p><pre><code>sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
</code></pre><p>如果在更新时遇到了问题，你可以试试这个命令：</p><pre><code># Note the new setup script name for Node.js v0.12
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -

# Then install with:
sudo apt-get install -y nodejs
</code></pre><p>下一步，用这个命令安装 rails：</p><pre><code>gem install rails -v 4.2.1
</code></pre><p>因为我们正在使用rbenv，用下面的命令来让rails的执行程序可以使用。</p><pre><code>rbenv rehash
</code></pre><p>要确保rails已经正确安装，你可以运行rails -v，显示如下：</p><pre><code>rails -v
# Rails 4.2.1
</code></pre><p>如果你得到的是不同的结果可能是环境没有设置正确。</p><h3 id="设置-mysql" tabindex="-1">设置 MySQL <a class="header-anchor" href="#设置-mysql" aria-label="Permalink to “设置 MySQL”">​</a></h3><p>或许你已经熟悉MySQL了，你可以从Ubuntu的仓库中安装MySQL的客户端与服务端。你可以在安装时设置root用户密码。这个信息将来会进入你rails程序的database.yml文件中。用下面的命令来安装mysql。</p><pre><code>sudo apt-get install mysql-server mysql-client libmysqlclient-dev
</code></pre><p>安装libmysqlclient-dev用于mysql2 gem的编译；在设置rails程序时，rails通过它来连接mysql。</p><h3 id="最后一步" tabindex="-1">最后一步 <a class="header-anchor" href="#最后一步" aria-label="Permalink to “最后一步”">​</a></h3><p>让我们尝试创建你的第一个rails程序：</p><pre><code># 使用 MySQL 数据库

rails new myapp -d mysql

# 进入到应用目录

cd myapp

# 创建数据库

rake db:create

rails server
</code></pre><p>访问http://localhost:3000来访问你的新网站。现在你的电脑上已经可以构建rails程序了。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/localhost_3000.png" alt=""></p><p>如果你在创建数据库时遇到了“Access denied for user &#39;root&#39;@&#39;localhost&#39; (Using password: NO)”这个错误信息，你需要更新你的config/database.yml文件来匹配数据库的<strong>用户名</strong>和<strong>密码</strong>。</p><pre><code># Edit your database.yml in config folder

nano config/database.yml
</code></pre><p>接着填入MySql root用户的密码。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/root_passw.png" alt=""></p><p>退出 (Ctrl+X)并保存。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>Rails是用Ruby写的， 也是随着rails一起使用的编程语言。在Ubuntu 15.04中Ruby on Rails可以用rbenv、 rvm和源码的方式来安装。本篇我们使用的是rbenv方式并用了MySQL作为数据库。有任何的问题或建议，请在评论栏指出。</p><hr>`,35)),t("p",null,[e[10]||(e[10]=n("via: ",-1)),s(l,{href:"http://linoxide.com/ubuntu-how-to/installing-ruby-rails-using-rbenv-ubuntu-15-04/"},{default:r(()=>[...e[9]||(e[9]=[n("http://linoxide.com/ubuntu-how-to/installing-ruby-rails-using-rbenv-ubuntu-15-04/",-1)])]),_:1})]),t("p",null,[e[14]||(e[14]=n("作者：",-1)),s(l,{href:"http://linoxide.com/author/obetp/"},{default:r(()=>[...e[11]||(e[11]=[n("Obet",-1)])]),_:1}),e[15]||(e[15]=n(" 译者：",-1)),s(l,{href:"https://github.com/geekpi"},{default:r(()=>[...e[12]||(e[12]=[n("geekpi",-1)])]),_:1}),e[16]||(e[16]=n(" 校对：",-1)),s(l,{href:"https://github.com/wxy"},{default:r(()=>[...e[13]||(e[13]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[19]||(e[19]=n("本文由 ",-1)),s(l,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[17]||(e[17]=[n("LCTT",-1)])]),_:1}),e[20]||(e[20]=n(" 原创翻译，",-1)),s(l,{href:"https://linux.cn/"},{default:r(()=>[...e[18]||(e[18]=[n("Linux中国",-1)])]),_:1}),e[21]||(e[21]=n(" 荣誉推出",-1))])])}const x=i(b,[["render",d]]);export{T as __pageData,x as default};
