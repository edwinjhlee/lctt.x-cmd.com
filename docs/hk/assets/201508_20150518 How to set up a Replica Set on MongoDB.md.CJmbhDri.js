import{_ as a,a0 as s,w as d,s as l,ao as i,I as t,x as e,a1 as p,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const M=JSON.parse('{"title":"如何配置 MongoDB 副本集 | LCTT x X-CMD","titleTemplate":false,"description":"如何配置 MongoDB 副本集 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何配置 MongoDB 副本集 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何配置 MongoDB 副本集 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150518 How to set up a Replica Set on MongoDB","title":"如何配置 MongoDB 副本集","tag":"201508","desc":""},"relativePath":"201508/20150518 How to set up a Replica Set on MongoDB.md","filePath":"[post].md"}'),g={name:"201508/20150518 How to set up a Replica Set on MongoDB.md"};function m(u,o,c,y,b,h){const n=s("Link");return d(),l("div",null,[o[16]||(o[16]=i(`<h1 id="如何配置-mongodb-副本集" tabindex="-1">如何配置 MongoDB 副本集 <a class="header-anchor" href="#如何配置-mongodb-副本集" aria-label="Permalink to “如何配置 MongoDB 副本集”">​</a></h1><p>MongoDB 已經成為市面上最知名的 NoSQL 資料庫。MongoDB 是面向文檔的，它的無模式設計使得它在各種各樣的WEB 應用當中廣受歡迎。最讓我喜歡的特性之一是它的副本集（Replica Set），副本集將同一數據的多份拷貝放在一組 mongod 節點上，從而實現數據的冗餘以及高可用性。</p><p>這篇教程將向你介紹如何配置一個 MongoDB 副本集。</p><p>副本集的最常見配置需要一個主節點以及多個副節點。這之後啓動的複製行為會從這個主節點到其他副節點。副本集不止可以針對意外的硬件故障和停機事件對資料庫提供保護，同時也因為提供了更多的節點從而提高了資料庫客户端數據讀取的吞吐量。</p><h3 id="配置環境" tabindex="-1">配置環境 <a class="header-anchor" href="#配置環境" aria-label="Permalink to “配置環境”">​</a></h3><p>這個教程裏，我們會配置一個包括一個主節點以及兩個副節點的副本集。</p><p><img src="https://farm8.staticflickr.com/7667/17801038505_529a5224a1.jpg" alt=""></p><p>為了達到這個目的，我們使用了3個運行在 VirtualBox 上的虛擬機。我會在這些虛擬機上安裝 Ubuntu 14.04，並且安裝 MongoDB 官方包。</p><p>我會在一個虛擬機實例上配置好所需的環境，然後將它克隆到其他的虛擬機實例上。因此，選擇一個名為 master 的虛擬機，執行以下安裝過程。</p><p>首先，我們需要給 apt 增加一個 MongoDB 密鑰：</p><pre><code>$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
</code></pre><p>然後，將官方的 MongoDB 倉庫添加到 source.list 中：</p><pre><code>$ sudo su
# echo &quot;deb http://repo.mongodb.org/apt/ubuntu &quot;$(lsb_release -sc)&quot;/mongodb-org/3.0 multiverse&quot; | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
</code></pre><p>接下來更新 apt 倉庫並且安裝 MongoDB。</p><pre><code>$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
</code></pre><p>現在對 /etc/mongodb.conf 做一些更改</p><pre><code>auth = true
dbpath=/var/lib/mongodb
logpath=/var/log/mongodb/mongod.log
logappend=true
keyFile=/var/lib/mongodb/keyFile
replSet=myReplica
</code></pre><p>第一行的作用是表明我們的資料庫需要驗證才可以使用。keyfile 配置用於 MongoDB 節點間複製行為的密鑰文件。replSet 為副本集設置一個名稱。</p><p>接下來我們創建一個用於所有實例的密鑰文件。</p><pre><code>$ echo -n &quot;MyRandomStringForReplicaSet&quot; | md5sum &gt; keyFile
</code></pre><p>這將會創建一個含有 MD5 字符串的密鑰文件，但是由於其中包含了一些噪音，我們需要對他們清理後才能正式在 MongoDB 中使用。</p><pre><code>$ echo -n &quot;MyReplicaSetKey&quot; | md5sum|grep -o &quot;[0-9a-z]\\+&quot; &gt; keyFile
</code></pre><p>grep 命令的作用的是把將空格等我們不想要的內容過濾掉之後的 MD5 字符串打印出來。</p><p>現在我們對密鑰文件進行一些操作，讓它真正可用。</p><pre><code>$ sudo cp keyFile /var/lib/mongodb
$ sudo chown mongodb:nogroup keyFile
$ sudo chmod 400 keyFile
</code></pre><p>接下來，關閉此虛擬機。將其 Ubuntu 系統克隆到其他虛擬機上。</p><p><img src="https://farm9.staticflickr.com/8729/17800903865_9876a9cc9c.jpg" alt=""></p><p>這是克隆後的副節點1和副節點2。確認你已經將它們的MAC地址重新初始化，並且克隆整個硬盤。</p><p><img src="https://farm6.staticflickr.com/5333/17613392900_6de45c9450.jpg" alt=""></p><p>請注意，三個虛擬機示例需要在同一個網絡中以便相互通訊。因此，我們需要它們弄到“互聯網&quot;上去。</p><p>這裏推薦給每個虛擬機設置一個靜態 IP 地址，而不是使用 DHCP。這樣它們就不至於在 DHCP 分配IP地址給他們的時候失去連接。</p><p>像下面這樣編輯每個虛擬機的 /etc/networks/interfaces 文件。</p><p>在主節點上:</p><pre><code>auto eth1
    iface eth1 inet static
    address 192.168.50.2
    netmask 255.255.255.0
</code></pre><p>在副節點1上:</p><pre><code>auto eth1
    iface eth1 inet static
    address 192.168.50.3
    netmask 255.255.255.0
</code></pre><p>在副節點2上:</p><pre><code>auto eth1
    iface eth1 inet static
    address 192.168.50.4
    netmask 255.255.255.0
</code></pre><p>由於我們沒有 DNS 服務，所以需要設置設置一下 /etc/hosts 這個文件，手工將主機名稱放到此文件中。</p><p>在主節點上:</p><pre><code>127.0.0.1 localhost primary
192.168.50.2 primary
192.168.50.3 secondary1
192.168.50.4 secondary2
</code></pre><p>在副節點1上:</p><pre><code>127.0.0.1 localhost secondary1
192.168.50.2 primary
192.168.50.3 secondary1
192.168.50.4 secondary2
</code></pre><p>在副節點2上:</p><pre><code>127.0.0.1 localhost secondary2
192.168.50.2 primary
192.168.50.3 secondary1
192.168.50.4 secondary2
</code></pre><p>使用 ping 命令檢查各個節點之間的連接。</p><pre><code>$ ping primary
$ ping secondary1
$ ping secondary2
</code></pre><h3 id="配置副本集" tabindex="-1">配置副本集 <a class="header-anchor" href="#配置副本集" aria-label="Permalink to “配置副本集”">​</a></h3><p>驗證各個節點可以正常連通後，我們就可以新建一個管理員用户，用於之後的副本集操作。</p><p>在主節點上，打開 /etc/mongodb.conf 文件，將 auth 和 replSet 兩項註釋掉。</p><pre><code>dbpath=/var/lib/mongodb
logpath=/var/log/mongodb/mongod.log
logappend=true
#auth = true
keyFile=/var/lib/mongodb/keyFile
#replSet=myReplica
</code></pre><p>在一個新安裝的 MongoDB 上配置任何用户或副本集之前，你需要註釋掉 auth 行。默認情況下，MongoDB 並沒有創建任何用户。而如果在你創建用户前啓用了 auth，你就不能夠做任何事情。你可以在創建一個用户後再次啓用 auth。</p><p>修改 /etc/mongodb.conf 之後，重啓 mongod 進程。</p><pre><code>$ sudo service mongod restart
</code></pre><p>現在連接到 MongoDB master：</p><pre><code>$ mongo &lt;master-ip-address&gt;:27017
</code></pre><p>連接 MongoDB 後，新建管理員用户。</p><pre><code>&gt; use admin
&gt; db.createUser({
user:&quot;admin&quot;,
pwd:&quot;
})
</code></pre><p>重啓 MongoDB：</p><pre><code>$ sudo service mongod restart
</code></pre><p>再次連接到 MongoDB，用以下命令將 副節點1 和副節點2節點添加到我們的副本集中。</p><pre><code>&gt; use admin
&gt; db.auth(&quot;admin&quot;,&quot;myreallyhardpassword&quot;)
&gt; rs.initiate()
&gt; rs.add (&quot;secondary1:27017&quot;)
&gt; rs.add(&quot;secondary2:27017&quot;)
</code></pre>`,62)),t("p",null,[o[1]||(o[1]=e("現在副本集到手了，可以開始我們的項目了。參照 ",-1)),p(n,{href:"http://docs.mongodb.org/ecosystem/drivers/"},{default:r(()=>[...o[0]||(o[0]=[e("官方驅動文檔",-1)])]),_:1}),o[2]||(o[2]=e(" 來了解如何連接到副本集。如果你想要用 Shell 來請求數據，那麼你需要連接到主節點上來插入或者請求數據，副節點不行。如果你執意要嘗試用副本集操作，那麼以下錯誤信息就蹦出來招呼你了。",-1))]),o[17]||(o[17]=t("pre",null,[t("code",null,`myReplica:SECONDARY>
myReplica:SECONDARY> show databases
2015-05-10T03:09:24.131+0000 E QUERY    Error: listDatabases failed:{ "note" : "from execCommand", "ok" : 0, "errmsg" : "not master" }
    at Error ()
    at Mongo.getDBs (src/mongo/shell/mongo.js:47:15)
    at shellHelper.show (src/mongo/shell/utils.js:630:33)
at shellHelper (src/mongo/shell/utils.js:524:36)
    at (shellhelp2):1:1 at src/mongo/shell/mongo.js:47
`)],-1)),o[18]||(o[18]=t("p",null,"如果你要從 shell 連接到整個副本集，你可以安裝如下命令。在副本集中的失敗切換是自動的。",-1)),o[19]||(o[19]=t("pre",null,[t("code",null,`$ mongo primary,secondary1,secondary2:27017/?replicaSet=myReplica
`)],-1)),o[20]||(o[20]=t("p",null,"如果你使用其它驅動語言（例如，JavaScript、Ruby 等等），格式也許不同。",-1)),o[21]||(o[21]=t("p",null,"希望這篇教程能對你有所幫助。你可以使用Vagrant來自動完成你的本地環境配置，並且加速你的代碼。",-1)),o[22]||(o[22]=t("hr",null,null,-1)),t("p",null,[o[4]||(o[4]=e("via: ",-1)),p(n,{href:"http://xmodulo.com/setup-replica-set-mongodb.html"},{default:r(()=>[...o[3]||(o[3]=[e("http://xmodulo.com/setup-replica-set-mongodb.html",-1)])]),_:1})]),t("p",null,[o[8]||(o[8]=e("作者：",-1)),p(n,{href:"http://xmodulo.com/author/valerio"},{default:r(()=>[...o[5]||(o[5]=[e("Christopher Valerio",-1)])]),_:1}),o[9]||(o[9]=e(" 譯者：",-1)),p(n,{href:"https://github.com/mr-ping"},{default:r(()=>[...o[6]||(o[6]=[e("mr-ping",-1)])]),_:1}),o[10]||(o[10]=e(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:r(()=>[...o[7]||(o[7]=[e("wxy",-1)])]),_:1})]),t("p",null,[o[13]||(o[13]=e("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...o[11]||(o[11]=[e("LCTT",-1)])]),_:1}),o[14]||(o[14]=e(" 原創翻譯，",-1)),p(n,{href:"https://linux.cn/"},{default:r(()=>[...o[12]||(o[12]=[e("Linux中國",-1)])]),_:1}),o[15]||(o[15]=e(" 榮譽推出",-1))])])}const B=a(g,[["render",m]]);export{M as __pageData,B as default};
