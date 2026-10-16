import{_ as i,a0 as a,w as u,s as p,I as t,x as n,a1 as s,A as r,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"在Ubuntu 15.04中安裝Ruby on Rails | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu 15.04中安裝Ruby on Rails | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu 15.04中安裝Ruby on Rails | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu 15.04中安裝Ruby on Rails | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150603 Installing Ruby on Rails using rbenv on Ubuntu 15.04","title":"在Ubuntu 15.04中安裝Ruby on Rails","tag":"201507","desc":""},"relativePath":"201507/20150603 Installing Ruby on Rails using rbenv on Ubuntu 15.04.md","filePath":"[post].md"}'),b={name:"201507/20150603 Installing Ruby on Rails using rbenv on Ubuntu 15.04.md"};function d(g,e,m,y,h,v){const l=a("Link");return u(),p("div",null,[e[22]||(e[22]=t("h1",{id:"在ubuntu-15-04中安裝ruby-on-rails",tabindex:"-1"},[n("在Ubuntu 15.04中安裝Ruby on Rails "),t("a",{class:"header-anchor",href:"#在ubuntu-15-04中安裝ruby-on-rails","aria-label":"Permalink to “在Ubuntu 15.04中安裝Ruby on Rails”"},"​")],-1)),t("p",null,[e[1]||(e[1]=n("本篇我們會學習如何用rbenv在Ubuntu 15.04中安裝Ruby on Rails。我們選擇Ubuntu作為操作系統是因為Ubuntu是Linux發行版中自帶很多包和完整文檔的操作系統，因此我認為這是正確的選擇。如果你還沒有安裝最新的Ubuntu，你可以從",-1)),s(l,{href:"http://release.ubuntu.com/15.04"},{default:r(()=>[...e[0]||(e[0]=[n("下載iso文件",-1)])]),_:1}),e[2]||(e[2]=n("開始。",-1))]),e[23]||(e[23]=o(`<h3 id="安裝-ruby" tabindex="-1">安裝 Ruby <a class="header-anchor" href="#安裝-ruby" aria-label="Permalink to “安裝 Ruby”">​</a></h3><p>我們要做的第一件事是更新Ubuntu包並且為Ruby安裝一些依賴。</p><pre><code>sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev
</code></pre><p>有三種方法來安裝Ruby：rbenv、rvm和從源碼安裝。每種都有各自的好處，但是近來開發者們更傾向使用rbenv而不是rvm和源碼來安裝。我們將安裝最新的Ruby版本，2.2.2。</p><p>用rbenv來安裝只有簡單的兩步。第一步安裝rbenv，接着是ruby-build：</p><pre><code>cd
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
</code></pre><p>我們需要安裝Bundler，但是我們要在安裝之前告訴rubygems不要為每個包安裝本地文檔。</p><pre><code>echo &quot;gem: --no-ri --no-rdoc&quot; &gt; ~/.gemrc
gem install bundler
</code></pre><h3 id="配置-git" tabindex="-1">配置 GIT <a class="header-anchor" href="#配置-git" aria-label="Permalink to “配置 GIT”">​</a></h3>`,9)),t("p",null,[e[4]||(e[4]=n("配置git之前，你要創建一個github賬號，你可以註冊一個",-1)),s(l,{href:"http://github.com"},{default:r(()=>[...e[3]||(e[3]=[n("github 賬號",-1)])]),_:1}),e[5]||(e[5]=n("。我們需要git作為版本控制系統，因此我們要設置它來匹配github賬號。",-1))]),e[24]||(e[24]=t("p",null,[n("用户的github賬號來替換下面的"),t("strong",null,"Name"),n(" 和 "),t("strong",null,"Email address"),n(" 。")],-1)),e[25]||(e[25]=t("pre",null,[t("code",null,`git config --global color.ui true
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR@EMAIL.com"
ssh-keygen -t rsa -C "YOUR@EMAIL.com"
`)],-1)),t("p",null,[e[7]||(e[7]=n("接下來用新生成的ssh key添加到github賬號中。這樣你需要複製下面命令的輸出並",-1)),s(l,{href:"https://github.com/settings/ssh"},{default:r(()=>[...e[6]||(e[6]=[n("粘貼在Github的設置頁面裏面",-1)])]),_:1}),e[8]||(e[8]=n("。",-1))]),e[26]||(e[26]=o(`<pre><code>cat ~/.ssh/id_rsa.pub
</code></pre><p>如果你做完了，檢查是否已經成功。</p><pre><code>ssh -T git@github.com
</code></pre><p>你應該得到下面這樣的信息。</p><pre><code>Hi excid3! You&#39;ve successfully authenticated, but GitHub does not provide shell access.
</code></pre><h3 id="安裝-rails" tabindex="-1">安裝 Rails <a class="header-anchor" href="#安裝-rails" aria-label="Permalink to “安裝 Rails”">​</a></h3><p>我們需要安裝像NodeJS這樣的javascript運行時環境，因為近來Rails的依賴越來越多了。這樣我們可以合併和壓縮你的javascript，從而提供一個更快的生產環境。</p><p>我們需要添加PPA來安裝nodeJS。</p><pre><code>sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
</code></pre><p>如果在更新時遇到了問題，你可以試試這個命令：</p><pre><code># Note the new setup script name for Node.js v0.12
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -

# Then install with:
sudo apt-get install -y nodejs
</code></pre><p>下一步，用這個命令安裝 rails：</p><pre><code>gem install rails -v 4.2.1
</code></pre><p>因為我們正在使用rbenv，用下面的命令來讓rails的執行程序可以使用。</p><pre><code>rbenv rehash
</code></pre><p>要確保rails已經正確安裝，你可以運行rails -v，顯示如下：</p><pre><code>rails -v
# Rails 4.2.1
</code></pre><p>如果你得到的是不同的結果可能是環境沒有設置正確。</p><h3 id="設置-mysql" tabindex="-1">設置 MySQL <a class="header-anchor" href="#設置-mysql" aria-label="Permalink to “設置 MySQL”">​</a></h3><p>或許你已經熟悉MySQL了，你可以從Ubuntu的倉庫中安裝MySQL的客户端與服務端。你可以在安裝時設置root用户密碼。這個信息將來會進入你rails程序的database.yml文件中。用下面的命令來安裝mysql。</p><pre><code>sudo apt-get install mysql-server mysql-client libmysqlclient-dev
</code></pre><p>安裝libmysqlclient-dev用於mysql2 gem的編譯；在設置rails程序時，rails通過它來連接mysql。</p><h3 id="最後一步" tabindex="-1">最後一步 <a class="header-anchor" href="#最後一步" aria-label="Permalink to “最後一步”">​</a></h3><p>讓我們嘗試創建你的第一個rails程序：</p><pre><code># 使用 MySQL 資料庫

rails new myapp -d mysql

# 進入到應用目錄

cd myapp

# 創建資料庫

rake db:create

rails server
</code></pre><p>訪問http://localhost:3000來訪問你的新網站。現在你的電腦上已經可以構建rails程序了。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/localhost_3000.png" alt=""></p><p>如果你在創建資料庫時遇到了“Access denied for user &#39;root&#39;@&#39;localhost&#39; (Using password: NO)”這個錯誤信息，你需要更新你的config/database.yml文件來匹配資料庫的<strong>用户名</strong>和<strong>密碼</strong>。</p><pre><code># Edit your database.yml in config folder

nano config/database.yml
</code></pre><p>接着填入MySql root用户的密碼。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/root_passw.png" alt=""></p><p>退出 (Ctrl+X)並保存。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>Rails是用Ruby寫的， 也是隨着rails一起使用的編程語言。在Ubuntu 15.04中Ruby on Rails可以用rbenv、 rvm和源碼的方式來安裝。本篇我們使用的是rbenv方式並用了MySQL作為資料庫。有任何的問題或建議，請在評論欄指出。</p><hr>`,35)),t("p",null,[e[10]||(e[10]=n("via: ",-1)),s(l,{href:"http://linoxide.com/ubuntu-how-to/installing-ruby-rails-using-rbenv-ubuntu-15-04/"},{default:r(()=>[...e[9]||(e[9]=[n("http://linoxide.com/ubuntu-how-to/installing-ruby-rails-using-rbenv-ubuntu-15-04/",-1)])]),_:1})]),t("p",null,[e[14]||(e[14]=n("作者：",-1)),s(l,{href:"http://linoxide.com/author/obetp/"},{default:r(()=>[...e[11]||(e[11]=[n("Obet",-1)])]),_:1}),e[15]||(e[15]=n(" 譯者：",-1)),s(l,{href:"https://github.com/geekpi"},{default:r(()=>[...e[12]||(e[12]=[n("geekpi",-1)])]),_:1}),e[16]||(e[16]=n(" 校對：",-1)),s(l,{href:"https://github.com/wxy"},{default:r(()=>[...e[13]||(e[13]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[19]||(e[19]=n("本文由 ",-1)),s(l,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[17]||(e[17]=[n("LCTT",-1)])]),_:1}),e[20]||(e[20]=n(" 原創翻譯，",-1)),s(l,{href:"https://linux.cn/"},{default:r(()=>[...e[18]||(e[18]=[n("Linux中國",-1)])]),_:1}),e[21]||(e[21]=n(" 榮譽推出",-1))])])}const x=i(b,[["render",d]]);export{T as __pageData,x as default};
