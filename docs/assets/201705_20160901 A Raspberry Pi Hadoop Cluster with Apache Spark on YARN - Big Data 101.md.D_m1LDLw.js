import{_ as i,a0 as o,w as r,s as d,I as n,x as a,a1 as t,A as l,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"大数据初步：在树莓派上通过 Apache Spark on YARN 搭建 Hadoop 集群 | LCTT x X-CMD","titleTemplate":false,"description":"大数据初步：在树莓派上通过 Apache Spark on YARN 搭建 Hadoop 集群 | LCTT (201705) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"大数据初步：在树莓派上通过 Apache Spark on YARN 搭建 Hadoop 集群 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"大数据初步：在树莓派上通过 Apache Spark on YARN 搭建 Hadoop 集群 | LCTT (201705) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201705/20160901 A Raspberry Pi Hadoop Cluster with Apache Spark on YARN - Big Data 101","title":"大数据初步：在树莓派上通过 Apache Spark on YARN 搭建 Hadoop 集群","tag":"201705","desc":""},"relativePath":"201705/20160901 A Raspberry Pi Hadoop Cluster with Apache Spark on YARN - Big Data 101.md","filePath":"[post].md"}'),u={name:"201705/20160901 A Raspberry Pi Hadoop Cluster with Apache Spark on YARN - Big Data 101.md"};function g(m,s,h,k,f,y){const p=o("Link");return r(),d("div",null,[s[82]||(s[82]=n("h1",{id:"大数据初步-在树莓派上通过-apache-spark-on-yarn-搭建-hadoop-集群",tabindex:"-1"},[a("大数据初步：在树莓派上通过 Apache Spark on YARN 搭建 Hadoop 集群 "),n("a",{class:"header-anchor",href:"#大数据初步-在树莓派上通过-apache-spark-on-yarn-搭建-hadoop-集群","aria-label":"Permalink to “大数据初步：在树莓派上通过 Apache Spark on YARN 搭建 Hadoop 集群”"},"​")],-1)),n("p",null,[s[2]||(s[2]=a("有些时候我们想从 DQYDJ 网站的数据中分析点有用的东西出来，在过去，我们要",-1)),t(p,{href:"https://dqydj.com/how-to-import-fixed-width-data-into-a-spreadsheet-via-r-playing-with-ipums-cps-data/"},{default:l(()=>[...s[0]||(s[0]=[a("用 R 语言提取固定宽度的数据",-1)])]),_:1}),s[3]||(s[3]=a("，然后通过数学建模来分析",-1)),t(p,{href:"http://dqydj.com/negative-income-tax-cost-calculator-united-states/"},{default:l(()=>[...s[1]||(s[1]=[a("美国的最低收入补贴",-1)])]),_:1}),s[4]||(s[4]=a("，当然也包括其他优秀的方法。",-1))]),n("p",null,[s[6]||(s[6]=a("今天我将向你展示对大数据的一点探索，不过有点变化，使用的是全世界最流行的微型电脑————",-1)),t(p,{href:"https://www.raspberrypi.org/"},{default:l(()=>[...s[5]||(s[5]=[a("树莓派",-1)])]),_:1}),s[7]||(s[7]=a("，如果手头没有，那就看下一篇吧（可能是已经处理好的数据），对于其他用户，请继续阅读吧，今天我们要建立一个树莓派 Hadoop集群！",-1))]),s[83]||(s[83]=n("h3",{id:"i-为什么要建立一个树莓派的-hadoop-集群",tabindex:"-1"},[a("I. 为什么要建立一个树莓派的 Hadoop 集群？ "),n("a",{class:"header-anchor",href:"#i-为什么要建立一个树莓派的-hadoop-集群","aria-label":"Permalink to “I. 为什么要建立一个树莓派的 Hadoop 集群？”"},"​")],-1)),s[84]||(s[84]=n("p",null,[n("img",{src:"https://dqydj.com/wp-content/uploads/2016/08/IMG_9132-245x300.png",alt:""})],-1)),s[85]||(s[85]=n("p",null,[n("em",null,"由三个树莓派节点组成的 Hadoop 集群")],-1)),n("p",null,[s[9]||(s[9]=a("我们对 DQYDJ 的数据做了",-1)),t(p,{href:"https://dqydj.com/finance-calculators-investment-calculators-and-visualizations/"},{default:l(()=>[...s[8]||(s[8]=[a("大量的处理工作",-1)])]),_:1}),s[10]||(s[10]=a("，但这些还不能称得上是大数据。",-1))]),s[86]||(s[86]=e('<p>和许许多多有争议的话题一样，数据的大小之别被解释成这样一个笑话：</p><blockquote><p>如果能被内存所存储，那么它就不是大数据。 ————佚名</p></blockquote><p>似乎这儿有两种解决问题的方法：</p><ol><li>我们可以找到一个足够大的数据集合，任何家用电脑的物理或虚拟内存都存不下。</li><li>我们可以买一些不用特别定制，我们现有数据就能淹没它的电脑：</li></ol><p>—— 上手树莓派 2B</p><p>这个由设计师和工程师制作出来的精致小玩意儿拥有 1GB 的内存， MicroSD 卡充当它的硬盘，此外，每一台的价格都低于 50 美元，这意味着你可以花不到 250 美元的价格搭建一个 Hadoop 集群。</p><p>或许天下没有比这更便宜的入场券来带你进入大数据的大门。</p><h3 id="ii-制作一个树莓派集群" tabindex="-1">II. 制作一个树莓派集群 <a class="header-anchor" href="#ii-制作一个树莓派集群" aria-label="Permalink to “II. 制作一个树莓派集群”">​</a></h3><p>我最喜欢制作的原材料。</p><p>这里我将给出我原来为了制作树莓派集群购买原材料的链接，如果以后要在亚马逊购买的话你可先这些链接收藏起来，也是对本站的一点支持。(谢谢)</p>',10)),n("ul",null,[n("li",null,[t(p,{href:"http://amzn.to/2bEFTVh"},{default:l(()=>[...s[11]||(s[11]=[a("树莓派 2B 3 块",-1)])]),_:1})]),n("li",null,[t(p,{href:"http://amzn.to/2bTo1br"},{default:l(()=>[...s[12]||(s[12]=[a("4 层亚克力支架",-1)])]),_:1})]),n("li",null,[t(p,{href:"http://amzn.to/2bEGO8g"},{default:l(()=>[...s[13]||(s[13]=[a("6 口 USB 转接器",-1)])]),_:1}),s[14]||(s[14]=a("，我选了白色 RAVPower 50W 10A 6 口 USB 转接器",-1))]),n("li",null,[t(p,{href:"http://amzn.to/2cguV9I"},{default:l(()=>[...s[15]||(s[15]=[a("MicroSD 卡",-1)])]),_:1}),s[16]||(s[16]=a("，这个五件套 32GB 卡非常棒",-1))]),n("li",null,[t(p,{href:"http://amzn.to/2bX2mwm"},{default:l(()=>[...s[17]||(s[17]=[a("短的 MicroUSB 数据线",-1)])]),_:1}),s[18]||(s[18]=a("，用于给树莓派供电",-1))]),n("li",null,[t(p,{href:"http://amzn.to/2bDACQJ"},{default:l(()=>[...s[19]||(s[19]=[a("短网线",-1)])]),_:1})]),s[20]||(s[20]=n("li",null,"双面胶，我有一些 3M 的，很好用",-1))]),s[87]||(s[87]=e('<h4 id="开始制作" tabindex="-1">开始制作 <a class="header-anchor" href="#开始制作" aria-label="Permalink to “开始制作”">​</a></h4><ol><li>首先，装好三个树莓派，每一个用螺丝钉固定在亚克力面板上。（看下图）</li><li>接下来，安装以太网交换机，用双面胶贴在其中一个在亚克力面板上。</li><li>用双面胶贴将 USB 转接器贴在一个在亚克力面板使之成为最顶层。</li><li>接着就是一层一层都拼好——这里我选择将树莓派放在交换机和USB转接器的底下（可以看看完整安装好的两张截图）</li></ol><p>想办法把线路放在需要的地方——如果你和我一样购买力 USB 线和网线，我可以将它们卷起来放在亚克力板子的每一层</p><p>现在不要急着上电，需要将系统烧录到 SD 卡上才能继续。</p><h4 id="烧录-raspbian" tabindex="-1">烧录 Raspbian <a class="header-anchor" href="#烧录-raspbian" aria-label="Permalink to “烧录 Raspbian”">​</a></h4>',5)),n("p",null,[s[23]||(s[23]=a("按照",-1)),t(p,{href:"https://www.raspberrypi.org/downloads/raspbian/"},{default:l(()=>[...s[21]||(s[21]=[a("这个教程",-1)])]),_:1}),s[24]||(s[24]=a("将 Raspbian 烧录到三张 SD 卡上，我使用的是 Win7 下的 ",-1)),t(p,{href:"https://sourceforge.net/projects/win32diskimager/"},{default:l(()=>[...s[22]||(s[22]=[a("Win32DiskImager",-1)])]),_:1}),s[25]||(s[25]=a("。",-1))]),s[88]||(s[88]=n("p",null,"将其中一张烧录好的 SD 卡插在你想作为主节点的树莓派上，连接 USB 线并启动它。",-1)),s[89]||(s[89]=n("h4",{id:"启动主节点",tabindex:"-1"},[a("启动主节点 "),n("a",{class:"header-anchor",href:"#启动主节点","aria-label":"Permalink to “启动主节点”"},"​")],-1)),n("p",null,[s[27]||(s[27]=a("这里有",-1)),t(p,{href:"http://www.becausewecangeek.com/building-a-raspberry-pi-hadoop-cluster-part-1/"},{default:l(()=>[...s[26]||(s[26]=[a("一篇非常棒的“Because We Can Geek”的教程",-1)])]),_:1}),s[28]||(s[28]=a("，讲如何安装 Hadoop 2.7.1，此处就不再熬述。",-1))]),s[90]||(s[90]=n("p",null,"在启动过程中有一些要注意的地方，我将带着你一起设置直到最后一步，记住我现在使用的 IP 段为 192.168.1.50 – 192.168.1.52，主节点是 .50，从节点是 .51 和 .52，你的网络可能会有所不同，如果你想设置静态 IP 的话可以在评论区看看或讨论。",-1)),s[91]||(s[91]=n("p",null,"一旦你完成了这些步骤，接下来要做的就是启用交换文件，Spark on YARN 将分割出一块非常接近内存大小的交换文件，当你内存快用完时便会使用这个交换分区。",-1)),n("p",null,[s[30]||(s[30]=a("（如果你以前没有做过有关交换分区的操作的话，可以看看",-1)),t(p,{href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04"},{default:l(()=>[...s[29]||(s[29]=[a("这篇教程",-1)])]),_:1}),s[31]||(s[31]=a("，让 ",-1)),s[32]||(s[32]=n("code",null,"swappiness",-1)),s[33]||(s[33]=a(" 保持较低水准，因为 MicroSD 卡的性能扛不住）",-1))]),s[92]||(s[92]=e(`<p>现在我准备介绍有关我的和“Because We Can Geek”关于启动设置一些微妙的区别。</p><p>对于初学者，确保你给你的树莓派起了一个正式的名字——在 <code>/etc/hostname</code> 设置，我的主节点设置为 ‘RaspberryPiHadoopMaster’ ，从节点设置为 ‘RaspberryPiHadoopSlave#’</p><p>主节点的 <code>/etc/hosts</code> 配置如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#/etc/hosts</span></span>
<span class="line"><span>127.0.0.1       localhost</span></span>
<span class="line"><span>::1             localhost ip6-localhost ip6-loopback</span></span>
<span class="line"><span>ff02::1         ip6-allnodes</span></span>
<span class="line"><span>ff02::2         ip6-allrouters</span></span>
<span class="line"><span></span></span>
<span class="line"><span>192.168.1.50    RaspberryPiHadoopMaster</span></span>
<span class="line"><span>192.168.1.51    RaspberryPiHadoopSlave1</span></span>
<span class="line"><span>192.168.1.52    RaspberryPiHadoopSlave2</span></span></code></pre></div><p>如果你想让 Hadoop、YARN 和 Spark 运行正常的话，你也需要修改这些配置文件（不妨现在就编辑）。</p><p>这是 <code>hdfs-site.xml</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;?xml-stylesheet type=&quot;text/xsl&quot; href=&quot;configuration.xsl&quot;?&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span>&lt;property&gt;  </span></span>
<span class="line"><span>  &lt;name&gt;fs.default.name&lt;/name&gt;</span></span>
<span class="line"><span>  &lt;value&gt;hdfs://RaspberryPiHadoopMaster:54310&lt;/value&gt;</span></span>
<span class="line"><span>&lt;/property&gt;  </span></span>
<span class="line"><span>&lt;property&gt;  </span></span>
<span class="line"><span>  &lt;name&gt;hadoop.tmp.dir&lt;/name&gt;</span></span>
<span class="line"><span>  &lt;value&gt;/hdfs/tmp&lt;/value&gt;</span></span>
<span class="line"><span>&lt;/property&gt;  </span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><p>这是 <code>yarn-site.xml</code> （注意内存方面的改变）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot;?&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- Site specific YARN configuration properties --&gt;</span></span>
<span class="line"><span>  &lt;property&gt;</span></span>
<span class="line"><span>    &lt;name&gt;yarn.nodemanager.aux-services&lt;/name&gt;</span></span>
<span class="line"><span>    &lt;value&gt;mapreduce_shuffle&lt;/value&gt;</span></span>
<span class="line"><span>  &lt;/property&gt;</span></span>
<span class="line"><span>  &lt;property&gt;</span></span>
<span class="line"><span>    &lt;name&gt;yarn.nodemanager.resource.cpu-vcores&lt;/name&gt;</span></span>
<span class="line"><span>    &lt;value&gt;4&lt;/value&gt;</span></span>
<span class="line"><span>  &lt;/property&gt;</span></span>
<span class="line"><span>  &lt;property&gt;</span></span>
<span class="line"><span>    &lt;name&gt;yarn.nodemanager.resource.memory-mb&lt;/name&gt;</span></span>
<span class="line"><span>    &lt;value&gt;1024&lt;/value&gt;</span></span>
<span class="line"><span>  &lt;/property&gt;</span></span>
<span class="line"><span>  &lt;property&gt;</span></span>
<span class="line"><span>    &lt;name&gt;yarn.scheduler.minimum-allocation-mb&lt;/name&gt;</span></span>
<span class="line"><span>    &lt;value&gt;128&lt;/value&gt;</span></span>
<span class="line"><span>  &lt;/property&gt;</span></span>
<span class="line"><span>  &lt;property&gt;</span></span>
<span class="line"><span>    &lt;name&gt;yarn.scheduler.maximum-allocation-mb&lt;/name&gt;</span></span>
<span class="line"><span>    &lt;value&gt;1024&lt;/value&gt;</span></span>
<span class="line"><span>  &lt;/property&gt;</span></span>
<span class="line"><span>  &lt;property&gt;</span></span>
<span class="line"><span>    &lt;name&gt;yarn.scheduler.minimum-allocation-vcores&lt;/name&gt;</span></span>
<span class="line"><span>    &lt;value&gt;1&lt;/value&gt;</span></span>
<span class="line"><span>  &lt;/property&gt;</span></span>
<span class="line"><span>  &lt;property&gt;</span></span>
<span class="line"><span>    &lt;name&gt;yarn.scheduler.maximum-allocation-vcores&lt;/name&gt;</span></span>
<span class="line"><span>    &lt;value&gt;4&lt;/value&gt;</span></span>
<span class="line"><span>  &lt;/property&gt;</span></span>
<span class="line"><span>&lt;property&gt;</span></span>
<span class="line"><span>   &lt;name&gt;yarn.nodemanager.vmem-check-enabled&lt;/name&gt;</span></span>
<span class="line"><span>   &lt;value&gt;false&lt;/value&gt;</span></span>
<span class="line"><span>   &lt;description&gt;Whether virtual memory limits will be enforced for containers&lt;/description&gt;</span></span>
<span class="line"><span>&lt;/property&gt;</span></span>
<span class="line"><span>&lt;property&gt;</span></span>
<span class="line"><span>   &lt;name&gt;yarn.nodemanager.vmem-pmem-ratio&lt;/name&gt;</span></span>
<span class="line"><span>   &lt;value&gt;4&lt;/value&gt;</span></span>
<span class="line"><span>   &lt;description&gt;Ratio between virtual memory to physical memory when setting memory limits for containers&lt;/description&gt;</span></span>
<span class="line"><span>&lt;/property&gt;</span></span>
<span class="line"><span>&lt;property&gt;  </span></span>
<span class="line"><span>&lt;name&gt;yarn.resourcemanager.resource-tracker.address&lt;/name&gt;  </span></span>
<span class="line"><span>&lt;value&gt;RaspberryPiHadoopMaster:8025&lt;/value&gt;  </span></span>
<span class="line"><span>&lt;/property&gt;  </span></span>
<span class="line"><span>&lt;property&gt;  </span></span>
<span class="line"><span>&lt;name&gt;yarn.resourcemanager.scheduler.address&lt;/name&gt;  </span></span>
<span class="line"><span>&lt;value&gt;RaspberryPiHadoopMaster:8030&lt;/value&gt;  </span></span>
<span class="line"><span>&lt;/property&gt;  </span></span>
<span class="line"><span>&lt;property&gt;  </span></span>
<span class="line"><span>&lt;name&gt;yarn.resourcemanager.address&lt;/name&gt;  </span></span>
<span class="line"><span>&lt;value&gt;RaspberryPiHadoopMaster:8040&lt;/value&gt;  </span></span>
<span class="line"><span>&lt;/property&gt; </span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><p><code>slaves</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>RaspberryPiHadoopMaster</span></span>
<span class="line"><span>RaspberryPiHadoopSlave1</span></span>
<span class="line"><span>RaspberryPiHadoopSlave2</span></span></code></pre></div><p><code>core-site.xml</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;?xml-stylesheet type=&quot;text/xsl&quot; href=&quot;configuration.xsl&quot;?&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span>&lt;property&gt;  </span></span>
<span class="line"><span>  &lt;name&gt;fs.default.name&lt;/name&gt;</span></span>
<span class="line"><span>  &lt;value&gt;hdfs://RaspberryPiHadoopMaster:54310&lt;/value&gt;</span></span>
<span class="line"><span>&lt;/property&gt;  </span></span>
<span class="line"><span>&lt;property&gt;  </span></span>
<span class="line"><span>  &lt;name&gt;hadoop.tmp.dir&lt;/name&gt;</span></span>
<span class="line"><span>  &lt;value&gt;/hdfs/tmp&lt;/value&gt;</span></span>
<span class="line"><span>&lt;/property&gt;  </span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><h4 id="设置两个从节点" tabindex="-1">设置两个从节点： <a class="header-anchor" href="#设置两个从节点" aria-label="Permalink to “设置两个从节点：”">​</a></h4>`,14)),n("p",null,[s[35]||(s[35]=a("接下来",-1)),t(p,{href:"http://www.becausewecangeek.com/building-a-raspberry-pi-hadoop-cluster-part-2/"},{default:l(()=>[...s[34]||(s[34]=[a("按照 “Because We Can Geek”上的教程",-1)])]),_:1}),s[36]||(s[36]=a("，你需要对上面的文件作出小小的改动。 在 ",-1)),s[37]||(s[37]=n("code",null,"yarn-site.xml",-1)),s[38]||(s[38]=a(" 中主节点没有改变，所以从节点中不必含有这个 ",-1)),s[39]||(s[39]=n("code",null,"slaves",-1)),s[40]||(s[40]=a(" 文件。",-1))]),s[93]||(s[93]=e(`<h3 id="iii-在我们的树莓派集群中测试-yarn" tabindex="-1">III. 在我们的树莓派集群中测试 YARN <a class="header-anchor" href="#iii-在我们的树莓派集群中测试-yarn" aria-label="Permalink to “III. 在我们的树莓派集群中测试 YARN”">​</a></h3><p>如果所有设备都正常工作，在主节点上你应该执行如下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>start-dfs.sh</span></span>
<span class="line"><span>start-yarn.sh</span></span></code></pre></div><p>当设备启动后，以 Hadoop 用户执行，如果你遵循教程，用户应该是 <code>hduser</code>。</p><p>接下来执行 <code>hdfs dfsadmin -report</code> 查看三个节点是否都正确启动，确认你看到一行粗体文字 ‘Live datanodes (3)’：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Configured Capacity: 93855559680 (87.41 GB)</span></span>
<span class="line"><span>Raspberry Pi Hadoop Cluster picture Straight On</span></span>
<span class="line"><span>Present Capacity: 65321992192 (60.84 GB)</span></span>
<span class="line"><span>DFS Remaining: 62206627840 (57.93 GB)</span></span>
<span class="line"><span>DFS Used: 3115364352 (2.90 GB)</span></span>
<span class="line"><span>DFS Used%: 4.77%</span></span>
<span class="line"><span>Under replicated blocks: 0</span></span>
<span class="line"><span>Blocks with corrupt replicas: 0</span></span>
<span class="line"><span>Missing blocks: 0</span></span>
<span class="line"><span>Missing blocks (with replication factor 1): 0</span></span>
<span class="line"><span>————————————————-</span></span>
<span class="line"><span>Live datanodes (3):</span></span>
<span class="line"><span>Name: 192.168.1.51:50010 (RaspberryPiHadoopSlave1)</span></span>
<span class="line"><span>Hostname: RaspberryPiHadoopSlave1</span></span>
<span class="line"><span>Decommission Status : Normal</span></span></code></pre></div><p>你现在可以做一些简单的诸如 ‘Hello, World!’ 的测试，或者直接进行下一步。</p><h3 id="iv-安装-spark-on-yarn" tabindex="-1">IV. 安装 SPARK ON YARN <a class="header-anchor" href="#iv-安装-spark-on-yarn" aria-label="Permalink to “IV. 安装 SPARK ON YARN”">​</a></h3><p>YARN 的意思是另一种非常好用的资源调度器（Yet Another Resource Negotiator），已经作为一个易用的资源管理器集成在 Hadoop 基础安装包中。</p>`,9)),n("p",null,[t(p,{href:"https://spark.apache.org/"},{default:l(()=>[...s[41]||(s[41]=[a("Apache Spark",-1)])]),_:1}),s[43]||(s[43]=a(" 是 Hadoop 生态圈中的另一款软件包，它是一个毁誉参半的执行引擎和",-1)),t(p,{href:"https://hadoop.apache.org/docs/r1.2.1/mapred_tutorial.html"},{default:l(()=>[...s[42]||(s[42]=[a("捆绑的 MapReduce",-1)])]),_:1}),s[44]||(s[44]=a("。在一般情况下，相对于基于磁盘存储的 MapReduce，Spark 更适合基于内存的存储，某些运行任务能够得到 10-100 倍提升——安装完成集群后你可以试试 Spark 和 MapReduce 有什么不同。",-1))]),s[94]||(s[94]=n("p",null,"我个人对 Spark 还是留下非常深刻的印象，因为它提供了两种数据工程师和科学家都比较擅长的语言—— Python 和 R。",-1)),n("p",null,[s[46]||(s[46]=a("安装 Apache Spark 非常简单，在你家目录下，",-1)),s[47]||(s[47]=n("code",null,'wget "为 Hadoop 2.7 构建的 Apache Spark”',-1)),s[48]||(s[48]=a("（",-1)),t(p,{href:"https://spark.apache.org/downloads.html"},{default:l(()=>[...s[45]||(s[45]=[a("来自这个页面",-1)])]),_:1}),s[49]||(s[49]=a("），然后运行 ",-1)),s[50]||(s[50]=n("code",null,"tar -xzf “tgz 文件”",-1)),s[51]||(s[51]=a("，最后把解压出来的文件移动至 ",-1)),s[52]||(s[52]=n("code",null,"/opt",-1)),s[53]||(s[53]=a("，并清除刚才下载的文件，以上这些就是安装步骤。",-1))]),s[95]||(s[95]=e(`<p>我又创建了只有两行的文件 <code>spark-env.sh</code>，其中包含 Spark 的配置文件目录。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SPARK_MASTER_IP=192.168.1.50</span></span>
<span class="line"><span>SPARK_WORKER_MEMORY=512m</span></span></code></pre></div><p>(在 YARN 跑起来之前我不确定这些是否有必要。)</p><h3 id="v-你好-世界-为-apache-spark-寻找有趣的数据集" tabindex="-1">V. 你好，世界! 为 Apache Spark 寻找有趣的数据集! <a class="header-anchor" href="#v-你好-世界-为-apache-spark-寻找有趣的数据集" aria-label="Permalink to “V. 你好，世界! 为 Apache Spark 寻找有趣的数据集!”">​</a></h3><p>在 Hadoop 世界里面的 ‘Hello, World!’ 就是做单词计数。</p><p>我决定让我们的作品做一些内省式……为什么不统计本站最常用的单词呢？也许统计一些关于本站的大数据会更有用。</p><p>如果你有一个正在运行的 WordPress 博客，可以通过简单的两步来导出和净化。</p>`,7)),n("ol",null,[n("li",null,[s[55]||(s[55]=a("我使用 ",-1)),t(p,{href:"https://wordpress.org/support/plugin/export-to-text"},{default:l(()=>[...s[54]||(s[54]=[a("Export to Text",-1)])]),_:1}),s[56]||(s[56]=a(" 插件导出文章的内容到纯文本文件中",-1))]),n("li",null,[s[58]||(s[58]=a("我使用一些",-1)),t(p,{href:"https://pypi.python.org/pypi/bleach"},{default:l(()=>[...s[57]||(s[57]=[a("压缩库",-1)])]),_:1}),s[59]||(s[59]=a("编写了一个 Python 脚本来剔除 HTML",-1))])]),s[96]||(s[96]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import bleach</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Change this next line to your &#39;import&#39; filename, whatever you would like to strip</span></span>
<span class="line"><span># HTML tags from.</span></span>
<span class="line"><span>ascii_string = open(&#39;dqydj_with_tags.txt&#39;, &#39;r&#39;).read()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>new_string = bleach.clean(ascii_string, tags=[], attributes={}, styles=[], strip=True)</span></span>
<span class="line"><span>new_string = new_string.encode(&#39;utf-8&#39;).strip()</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Change this next line to your &#39;export&#39; filename</span></span>
<span class="line"><span>f = open(&#39;dqydj_stripped.txt&#39;, &#39;w&#39;)</span></span>
<span class="line"><span>f.write(new_string)</span></span>
<span class="line"><span>f.close()</span></span></code></pre></div><p>现在我们有了一个更小的、适合复制到树莓派所搭建的 HDFS 集群上的文件。</p><p>如果你不能树莓派主节点上完成上面的操作，找个办法将它传输上去（scp、 rsync 等等），然后用下列命令行复制到 HDFS 上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>hdfs dfs -copyFromLocal dqydj_stripped.txt /dqydj_stripped.txt</span></span></code></pre></div><p>现在准备进行最后一步 - 向 Apache Spark 写入一些代码。</p><h3 id="vi-点亮-apache-spark" tabindex="-1">VI. 点亮 Apache Spark <a class="header-anchor" href="#vi-点亮-apache-spark" aria-label="Permalink to “VI. 点亮 Apache Spark”">​</a></h3>`,6)),n("p",null,[s[61]||(s[61]=a("Cloudera 有个极棒的程序可以作为我们的超级单词计数程序的基础，",-1)),t(p,{href:"https://www.cloudera.com/documentation/enterprise/5-6-x/topics/spark_develop_run.html"},{default:l(()=>[...s[60]||(s[60]=[a("你可以在这里找到",-1)])]),_:1}),s[62]||(s[62]=a("。我们接下来为我们的内省式单词计数程序修改它。",-1))]),n("p",null,[s[64]||(s[64]=a("在主节点上",-1)),t(p,{href:"https://pypi.python.org/pypi/stop-words"},{default:l(()=>[...s[63]||(s[63]=[a("安装‘stop-words’",-1)])]),_:1}),s[65]||(s[65]=a("这个 python 第三方包，虽然有趣（我在 DQYDJ 上使用了 23,295 次 the 这个单词），你可能不想看到这些语法单词占据着单词计数的前列，另外，在下列代码用你自己的数据集替换所有有关指向 dqydj 文件的地方。",-1))]),s[97]||(s[97]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from stop_words import get_stop_words</span></span>
<span class="line"><span>from pyspark import SparkContext, SparkConf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # create Spark context with Spark configuration</span></span>
<span class="line"><span>  conf = SparkConf().setAppName(&quot;Spark Count&quot;)</span></span>
<span class="line"><span>  sc = SparkContext(conf=conf)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # get threshold</span></span>
<span class="line"><span>  try:</span></span>
<span class="line"><span>    threshold = int(sys.argv[2])</span></span>
<span class="line"><span>  except:</span></span>
<span class="line"><span>    threshold = 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # read in text file and split each document into words</span></span>
<span class="line"><span>  tokenized = sc.textFile(sys.argv[1]).flatMap(lambda line: line.split(&quot; &quot;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # count the occurrence of each word</span></span>
<span class="line"><span>  wordCounts = tokenized.map(lambda word: (word.lower().strip(), 1)).reduceByKey(lambda v1,v2:v1 +v2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # filter out words with fewer than threshold occurrences</span></span>
<span class="line"><span>  filtered = wordCounts.filter(lambda pair:pair[1] &gt;= threshold)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  print &quot;*&quot; * 80</span></span>
<span class="line"><span>  print &quot;Printing top words used&quot;</span></span>
<span class="line"><span>  print &quot;-&quot; * 80</span></span>
<span class="line"><span>  filtered_sorted = sorted(filtered.collect(), key=lambda x: x[1], reverse = True)</span></span>
<span class="line"><span>  for (word, count) in filtered_sorted: print &quot;%s : %d&quot; % (word.encode(&#39;utf-8&#39;).strip(), count)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # Remove stop words</span></span>
<span class="line"><span>  print &quot;\\n\\n&quot;</span></span>
<span class="line"><span>  print &quot;*&quot; * 80</span></span>
<span class="line"><span>  print &quot;Printing top non-stop words used&quot;</span></span>
<span class="line"><span>  print &quot;-&quot; * 80</span></span>
<span class="line"><span>  # Change this to your language code (see the stop-words documentation)</span></span>
<span class="line"><span>  stop_words = set(get_stop_words(&#39;en&#39;))</span></span>
<span class="line"><span>  no_stop_words = filter(lambda x: x[0] not in stop_words, filtered_sorted)</span></span>
<span class="line"><span>  for (word, count) in no_stop_words: print &quot;%s : %d&quot; % (word.encode(&#39;utf-8&#39;).strip(), count)</span></span></code></pre></div><p>保存好 wordCount.py，确保上面的路径都是正确无误的。</p><p>现在，准备念出咒语，让运行在 YARN 上的 Spark 跑起来，你可以看到我在 DQYDJ 使用最多的单词是哪一个。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/opt/spark-2.0.0-bin-hadoop2.7/bin/spark-submit –master yarn –executor-memory 512m –name wordcount –executor-cores 8 wordCount.py /dqydj_stripped.txt</span></span></code></pre></div><h3 id="vii-我在-dqydj-使用最多的单词" tabindex="-1">VII. 我在 DQYDJ 使用最多的单词 <a class="header-anchor" href="#vii-我在-dqydj-使用最多的单词" aria-label="Permalink to “VII. 我在 DQYDJ 使用最多的单词”">​</a></h3><p>可能入列的单词有哪一些呢？“can, will, it’s, one, even, like, people, money, don’t, also“.</p><p>嘿，不错，“money”悄悄挤进了前十。在一个致力于金融、投资和经济的网站上谈论这似乎是件好事，对吧？</p><p>下面是的前 50 个最常用的词汇，请用它们刻画出有关我的文章的水平的结论。</p><p><img src="https://dqydj.com/wp-content/uploads/2016/08/dqydj_pk_most_used_words.png" alt=""></p><p>我希望你能喜欢这篇关于 Hadoop、YARN 和 Apache Spark 的教程，现在你可以在 Spark 运行和编写其他的应用了。</p>`,10)),n("p",null,[s[67]||(s[67]=a("你的下一步是任务是开始",-1)),t(p,{href:"https://spark.apache.org/docs/2.0.0/api/python/index.html"},{default:l(()=>[...s[66]||(s[66]=[a("阅读 pyspark 文档",-1)])]),_:1}),s[68]||(s[68]=a("（以及用于其他语言的该库），去学习一些可用的功能。根据你的兴趣和你实际存储的数据，你将会深入学习到更多——有流数据、SQL，甚至机器学习的软件包！",-1))]),s[98]||(s[98]=n("p",null,"你怎么看？你要建立一个树莓派 Hadoop 集群吗？想要在其中挖掘一些什么吗？你在上面看到最令你惊奇的单词是什么？为什么 'S&P' 也能上榜？",-1)),s[99]||(s[99]=n("hr",null,null,-1)),n("p",null,[s[70]||(s[70]=a("via: ",-1)),t(p,{href:"https://dqydj.com/raspberry-pi-hadoop-cluster-apache-spark-yarn/"},{default:l(()=>[...s[69]||(s[69]=[a("https://dqydj.com/raspberry-pi-hadoop-cluster-apache-spark-yarn/",-1)])]),_:1})]),n("p",null,[s[74]||(s[74]=a("作者：",-1)),t(p,{href:"https://dqydj.com/about/#contact_us"},{default:l(()=>[...s[71]||(s[71]=[a("PK",-1)])]),_:1}),s[75]||(s[75]=a(" 译者：",-1)),t(p,{href:"https://github.com/sfantree"},{default:l(()=>[...s[72]||(s[72]=[a("popy32",-1)])]),_:1}),s[76]||(s[76]=a(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[73]||(s[73]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[79]||(s[79]=a("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[77]||(s[77]=[a("LCTT",-1)])]),_:1}),s[80]||(s[80]=a(" 组织编译，",-1)),t(p,{href:"https://linux.cn/"},{default:l(()=>[...s[78]||(s[78]=[a("Linux中国",-1)])]),_:1}),s[81]||(s[81]=a(" 荣誉推出",-1))])])}const S=i(u,[["render",g]]);export{v as __pageData,S as default};
