import{_ as a,a0 as s,w as d,s as l,ao as i,I as t,x as e,a1 as p,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const M=JSON.parse('{"title":"如何配置 MongoDB 副本集 | LCTT x X-CMD","titleTemplate":false,"description":"如何配置 MongoDB 副本集 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何配置 MongoDB 副本集 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何配置 MongoDB 副本集 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150518 How to set up a Replica Set on MongoDB","title":"如何配置 MongoDB 副本集","tag":"201508","desc":""},"relativePath":"201508/20150518 How to set up a Replica Set on MongoDB.md","filePath":"[post].md"}'),g={name:"201508/20150518 How to set up a Replica Set on MongoDB.md"};function m(u,o,c,y,b,h){const n=s("Link");return d(),l("div",null,[o[16]||(o[16]=i(`<h1 id="如何配置-mongodb-副本集" tabindex="-1">如何配置 MongoDB 副本集 <a class="header-anchor" href="#如何配置-mongodb-副本集" aria-label="Permalink to “如何配置 MongoDB 副本集”">​</a></h1><p>MongoDB 已经成为市面上最知名的 NoSQL 数据库。MongoDB 是面向文档的，它的无模式设计使得它在各种各样的WEB 应用当中广受欢迎。最让我喜欢的特性之一是它的副本集（Replica Set），副本集将同一数据的多份拷贝放在一组 mongod 节点上，从而实现数据的冗余以及高可用性。</p><p>这篇教程将向你介绍如何配置一个 MongoDB 副本集。</p><p>副本集的最常见配置需要一个主节点以及多个副节点。这之后启动的复制行为会从这个主节点到其他副节点。副本集不止可以针对意外的硬件故障和停机事件对数据库提供保护，同时也因为提供了更多的节点从而提高了数据库客户端数据读取的吞吐量。</p><h3 id="配置环境" tabindex="-1">配置环境 <a class="header-anchor" href="#配置环境" aria-label="Permalink to “配置环境”">​</a></h3><p>这个教程里，我们会配置一个包括一个主节点以及两个副节点的副本集。</p><p><img src="https://farm8.staticflickr.com/7667/17801038505_529a5224a1.jpg" alt=""></p><p>为了达到这个目的，我们使用了3个运行在 VirtualBox 上的虚拟机。我会在这些虚拟机上安装 Ubuntu 14.04，并且安装 MongoDB 官方包。</p><p>我会在一个虚拟机实例上配置好所需的环境，然后将它克隆到其他的虚拟机实例上。因此，选择一个名为 master 的虚拟机，执行以下安装过程。</p><p>首先，我们需要给 apt 增加一个 MongoDB 密钥：</p><pre><code>$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
</code></pre><p>然后，将官方的 MongoDB 仓库添加到 source.list 中：</p><pre><code>$ sudo su
# echo &quot;deb http://repo.mongodb.org/apt/ubuntu &quot;$(lsb_release -sc)&quot;/mongodb-org/3.0 multiverse&quot; | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
</code></pre><p>接下来更新 apt 仓库并且安装 MongoDB。</p><pre><code>$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
</code></pre><p>现在对 /etc/mongodb.conf 做一些更改</p><pre><code>auth = true
dbpath=/var/lib/mongodb
logpath=/var/log/mongodb/mongod.log
logappend=true
keyFile=/var/lib/mongodb/keyFile
replSet=myReplica
</code></pre><p>第一行的作用是表明我们的数据库需要验证才可以使用。keyfile 配置用于 MongoDB 节点间复制行为的密钥文件。replSet 为副本集设置一个名称。</p><p>接下来我们创建一个用于所有实例的密钥文件。</p><pre><code>$ echo -n &quot;MyRandomStringForReplicaSet&quot; | md5sum &gt; keyFile
</code></pre><p>这将会创建一个含有 MD5 字符串的密钥文件，但是由于其中包含了一些噪音，我们需要对他们清理后才能正式在 MongoDB 中使用。</p><pre><code>$ echo -n &quot;MyReplicaSetKey&quot; | md5sum|grep -o &quot;[0-9a-z]\\+&quot; &gt; keyFile
</code></pre><p>grep 命令的作用的是把将空格等我们不想要的内容过滤掉之后的 MD5 字符串打印出来。</p><p>现在我们对密钥文件进行一些操作，让它真正可用。</p><pre><code>$ sudo cp keyFile /var/lib/mongodb
$ sudo chown mongodb:nogroup keyFile
$ sudo chmod 400 keyFile
</code></pre><p>接下来，关闭此虚拟机。将其 Ubuntu 系统克隆到其他虚拟机上。</p><p><img src="https://farm9.staticflickr.com/8729/17800903865_9876a9cc9c.jpg" alt=""></p><p>这是克隆后的副节点1和副节点2。确认你已经将它们的MAC地址重新初始化，并且克隆整个硬盘。</p><p><img src="https://farm6.staticflickr.com/5333/17613392900_6de45c9450.jpg" alt=""></p><p>请注意，三个虚拟机示例需要在同一个网络中以便相互通讯。因此，我们需要它们弄到“互联网&quot;上去。</p><p>这里推荐给每个虚拟机设置一个静态 IP 地址，而不是使用 DHCP。这样它们就不至于在 DHCP 分配IP地址给他们的时候失去连接。</p><p>像下面这样编辑每个虚拟机的 /etc/networks/interfaces 文件。</p><p>在主节点上:</p><pre><code>auto eth1
    iface eth1 inet static
    address 192.168.50.2
    netmask 255.255.255.0
</code></pre><p>在副节点1上:</p><pre><code>auto eth1
    iface eth1 inet static
    address 192.168.50.3
    netmask 255.255.255.0
</code></pre><p>在副节点2上:</p><pre><code>auto eth1
    iface eth1 inet static
    address 192.168.50.4
    netmask 255.255.255.0
</code></pre><p>由于我们没有 DNS 服务，所以需要设置设置一下 /etc/hosts 这个文件，手工将主机名称放到此文件中。</p><p>在主节点上:</p><pre><code>127.0.0.1 localhost primary
192.168.50.2 primary
192.168.50.3 secondary1
192.168.50.4 secondary2
</code></pre><p>在副节点1上:</p><pre><code>127.0.0.1 localhost secondary1
192.168.50.2 primary
192.168.50.3 secondary1
192.168.50.4 secondary2
</code></pre><p>在副节点2上:</p><pre><code>127.0.0.1 localhost secondary2
192.168.50.2 primary
192.168.50.3 secondary1
192.168.50.4 secondary2
</code></pre><p>使用 ping 命令检查各个节点之间的连接。</p><pre><code>$ ping primary
$ ping secondary1
$ ping secondary2
</code></pre><h3 id="配置副本集" tabindex="-1">配置副本集 <a class="header-anchor" href="#配置副本集" aria-label="Permalink to “配置副本集”">​</a></h3><p>验证各个节点可以正常连通后，我们就可以新建一个管理员用户，用于之后的副本集操作。</p><p>在主节点上，打开 /etc/mongodb.conf 文件，将 auth 和 replSet 两项注释掉。</p><pre><code>dbpath=/var/lib/mongodb
logpath=/var/log/mongodb/mongod.log
logappend=true
#auth = true
keyFile=/var/lib/mongodb/keyFile
#replSet=myReplica
</code></pre><p>在一个新安装的 MongoDB 上配置任何用户或副本集之前，你需要注释掉 auth 行。默认情况下，MongoDB 并没有创建任何用户。而如果在你创建用户前启用了 auth，你就不能够做任何事情。你可以在创建一个用户后再次启用 auth。</p><p>修改 /etc/mongodb.conf 之后，重启 mongod 进程。</p><pre><code>$ sudo service mongod restart
</code></pre><p>现在连接到 MongoDB master：</p><pre><code>$ mongo &lt;master-ip-address&gt;:27017
</code></pre><p>连接 MongoDB 后，新建管理员用户。</p><pre><code>&gt; use admin
&gt; db.createUser({
user:&quot;admin&quot;,
pwd:&quot;
})
</code></pre><p>重启 MongoDB：</p><pre><code>$ sudo service mongod restart
</code></pre><p>再次连接到 MongoDB，用以下命令将 副节点1 和副节点2节点添加到我们的副本集中。</p><pre><code>&gt; use admin
&gt; db.auth(&quot;admin&quot;,&quot;myreallyhardpassword&quot;)
&gt; rs.initiate()
&gt; rs.add (&quot;secondary1:27017&quot;)
&gt; rs.add(&quot;secondary2:27017&quot;)
</code></pre>`,62)),t("p",null,[o[1]||(o[1]=e("现在副本集到手了，可以开始我们的项目了。参照 ",-1)),p(n,{href:"http://docs.mongodb.org/ecosystem/drivers/"},{default:r(()=>[...o[0]||(o[0]=[e("官方驱动文档",-1)])]),_:1}),o[2]||(o[2]=e(" 来了解如何连接到副本集。如果你想要用 Shell 来请求数据，那么你需要连接到主节点上来插入或者请求数据，副节点不行。如果你执意要尝试用副本集操作，那么以下错误信息就蹦出来招呼你了。",-1))]),o[17]||(o[17]=t("pre",null,[t("code",null,`myReplica:SECONDARY>
myReplica:SECONDARY> show databases
2015-05-10T03:09:24.131+0000 E QUERY    Error: listDatabases failed:{ "note" : "from execCommand", "ok" : 0, "errmsg" : "not master" }
    at Error ()
    at Mongo.getDBs (src/mongo/shell/mongo.js:47:15)
    at shellHelper.show (src/mongo/shell/utils.js:630:33)
at shellHelper (src/mongo/shell/utils.js:524:36)
    at (shellhelp2):1:1 at src/mongo/shell/mongo.js:47
`)],-1)),o[18]||(o[18]=t("p",null,"如果你要从 shell 连接到整个副本集，你可以安装如下命令。在副本集中的失败切换是自动的。",-1)),o[19]||(o[19]=t("pre",null,[t("code",null,`$ mongo primary,secondary1,secondary2:27017/?replicaSet=myReplica
`)],-1)),o[20]||(o[20]=t("p",null,"如果你使用其它驱动语言（例如，JavaScript、Ruby 等等），格式也许不同。",-1)),o[21]||(o[21]=t("p",null,"希望这篇教程能对你有所帮助。你可以使用Vagrant来自动完成你的本地环境配置，并且加速你的代码。",-1)),o[22]||(o[22]=t("hr",null,null,-1)),t("p",null,[o[4]||(o[4]=e("via: ",-1)),p(n,{href:"http://xmodulo.com/setup-replica-set-mongodb.html"},{default:r(()=>[...o[3]||(o[3]=[e("http://xmodulo.com/setup-replica-set-mongodb.html",-1)])]),_:1})]),t("p",null,[o[8]||(o[8]=e("作者：",-1)),p(n,{href:"http://xmodulo.com/author/valerio"},{default:r(()=>[...o[5]||(o[5]=[e("Christopher Valerio",-1)])]),_:1}),o[9]||(o[9]=e(" 译者：",-1)),p(n,{href:"https://github.com/mr-ping"},{default:r(()=>[...o[6]||(o[6]=[e("mr-ping",-1)])]),_:1}),o[10]||(o[10]=e(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:r(()=>[...o[7]||(o[7]=[e("wxy",-1)])]),_:1})]),t("p",null,[o[13]||(o[13]=e("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...o[11]||(o[11]=[e("LCTT",-1)])]),_:1}),o[14]||(o[14]=e(" 原创翻译，",-1)),p(n,{href:"https://linux.cn/"},{default:r(()=>[...o[12]||(o[12]=[e("Linux中国",-1)])]),_:1}),o[15]||(o[15]=e(" 荣誉推出",-1))])])}const B=a(g,[["render",m]]);export{M as __pageData,B as default};
