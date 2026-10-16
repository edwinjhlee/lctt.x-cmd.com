import{_ as i,a0 as o,w as r,s as d,I as n,x as a,a1 as t,A as l,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"大數據初步：在樹莓派上通過 Apache Spark on YARN 搭建 Hadoop 集羣 | LCTT x X-CMD","titleTemplate":false,"description":"大數據初步：在樹莓派上通過 Apache Spark on YARN 搭建 Hadoop 集羣 | LCTT (201705) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"大數據初步：在樹莓派上通過 Apache Spark on YARN 搭建 Hadoop 集羣 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"大數據初步：在樹莓派上通過 Apache Spark on YARN 搭建 Hadoop 集羣 | LCTT (201705) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201705/20160901 A Raspberry Pi Hadoop Cluster with Apache Spark on YARN - Big Data 101","title":"大數據初步：在樹莓派上通過 Apache Spark on YARN 搭建 Hadoop 集羣","tag":"201705","desc":""},"relativePath":"201705/20160901 A Raspberry Pi Hadoop Cluster with Apache Spark on YARN - Big Data 101.md","filePath":"[post].md"}'),u={name:"201705/20160901 A Raspberry Pi Hadoop Cluster with Apache Spark on YARN - Big Data 101.md"};function g(m,s,h,k,f,y){const p=o("Link");return r(),d("div",null,[s[82]||(s[82]=n("h1",{id:"大數據初步-在樹莓派上通過-apache-spark-on-yarn-搭建-hadoop-集羣",tabindex:"-1"},[a("大數據初步：在樹莓派上通過 Apache Spark on YARN 搭建 Hadoop 集羣 "),n("a",{class:"header-anchor",href:"#大數據初步-在樹莓派上通過-apache-spark-on-yarn-搭建-hadoop-集羣","aria-label":"Permalink to “大數據初步：在樹莓派上通過 Apache Spark on YARN 搭建 Hadoop 集羣”"},"​")],-1)),n("p",null,[s[2]||(s[2]=a("有些時候我們想從 DQYDJ 網站的數據中分析點有用的東西出來，在過去，我們要",-1)),t(p,{href:"https://dqydj.com/how-to-import-fixed-width-data-into-a-spreadsheet-via-r-playing-with-ipums-cps-data/"},{default:l(()=>[...s[0]||(s[0]=[a("用 R 語言提取固定寬度的數據",-1)])]),_:1}),s[3]||(s[3]=a("，然後通過數學建模來分析",-1)),t(p,{href:"http://dqydj.com/negative-income-tax-cost-calculator-united-states/"},{default:l(()=>[...s[1]||(s[1]=[a("美國的最低收入補貼",-1)])]),_:1}),s[4]||(s[4]=a("，當然也包括其他優秀的方法。",-1))]),n("p",null,[s[6]||(s[6]=a("今天我將向你展示對大數據的一點探索，不過有點變化，使用的是全世界最流行的微型電腦————",-1)),t(p,{href:"https://www.raspberrypi.org/"},{default:l(()=>[...s[5]||(s[5]=[a("樹莓派",-1)])]),_:1}),s[7]||(s[7]=a("，如果手頭沒有，那就看下一篇吧（可能是已經處理好的數據），對於其他用户，請繼續閲讀吧，今天我們要建立一個樹莓派 Hadoop集羣！",-1))]),s[83]||(s[83]=n("h3",{id:"i-為什麼要建立一個樹莓派的-hadoop-集羣",tabindex:"-1"},[a("I. 為什麼要建立一個樹莓派的 Hadoop 集羣？ "),n("a",{class:"header-anchor",href:"#i-為什麼要建立一個樹莓派的-hadoop-集羣","aria-label":"Permalink to “I. 為什麼要建立一個樹莓派的 Hadoop 集羣？”"},"​")],-1)),s[84]||(s[84]=n("p",null,[n("img",{src:"https://dqydj.com/wp-content/uploads/2016/08/IMG_9132-245x300.png",alt:""})],-1)),s[85]||(s[85]=n("p",null,[n("em",null,"由三個樹莓派節點組成的 Hadoop 集羣")],-1)),n("p",null,[s[9]||(s[9]=a("我們對 DQYDJ 的數據做了",-1)),t(p,{href:"https://dqydj.com/finance-calculators-investment-calculators-and-visualizations/"},{default:l(()=>[...s[8]||(s[8]=[a("大量的處理工作",-1)])]),_:1}),s[10]||(s[10]=a("，但這些還不能稱得上是大數據。",-1))]),s[86]||(s[86]=e('<p>和許許多多有爭議的話題一樣，數據的大小之別被解釋成這樣一個笑話：</p><blockquote><p>如果能被內存所存儲，那麼它就不是大數據。 ————佚名</p></blockquote><p>似乎這兒有兩種解決問題的方法：</p><ol><li>我們可以找到一個足夠大的數據集合，任何家用電腦的物理或虛擬內存都存不下。</li><li>我們可以買一些不用特別定製，我們現有數據就能淹沒它的電腦：</li></ol><p>—— 上手樹莓派 2B</p><p>這個由設計師和工程師製作出來的精緻小玩意兒擁有 1GB 的內存， MicroSD 卡充當它的硬盤，此外，每一台的價格都低於 50 美元，這意味着你可以花不到 250 美元的價格搭建一個 Hadoop 集羣。</p><p>或許天下沒有比這更便宜的入場券來帶你進入大數據的大門。</p><h3 id="ii-製作一個樹莓派集羣" tabindex="-1">II. 製作一個樹莓派集羣 <a class="header-anchor" href="#ii-製作一個樹莓派集羣" aria-label="Permalink to “II. 製作一個樹莓派集羣”">​</a></h3><p>我最喜歡製作的原材料。</p><p>這裏我將給出我原來為了製作樹莓派集羣購買原材料的鏈接，如果以後要在亞馬遜購買的話你可先這些鏈接收藏起來，也是對本站的一點支持。(謝謝)</p>',10)),n("ul",null,[n("li",null,[t(p,{href:"http://amzn.to/2bEFTVh"},{default:l(()=>[...s[11]||(s[11]=[a("樹莓派 2B 3 塊",-1)])]),_:1})]),n("li",null,[t(p,{href:"http://amzn.to/2bTo1br"},{default:l(()=>[...s[12]||(s[12]=[a("4 層亞克力支架",-1)])]),_:1})]),n("li",null,[t(p,{href:"http://amzn.to/2bEGO8g"},{default:l(()=>[...s[13]||(s[13]=[a("6 口 USB 轉接器",-1)])]),_:1}),s[14]||(s[14]=a("，我選了白色 RAVPower 50W 10A 6 口 USB 轉接器",-1))]),n("li",null,[t(p,{href:"http://amzn.to/2cguV9I"},{default:l(()=>[...s[15]||(s[15]=[a("MicroSD 卡",-1)])]),_:1}),s[16]||(s[16]=a("，這個五件套 32GB 卡非常棒",-1))]),n("li",null,[t(p,{href:"http://amzn.to/2bX2mwm"},{default:l(()=>[...s[17]||(s[17]=[a("短的 MicroUSB 數據線",-1)])]),_:1}),s[18]||(s[18]=a("，用於給樹莓派供電",-1))]),n("li",null,[t(p,{href:"http://amzn.to/2bDACQJ"},{default:l(()=>[...s[19]||(s[19]=[a("短網線",-1)])]),_:1})]),s[20]||(s[20]=n("li",null,"雙面膠，我有一些 3M 的，很好用",-1))]),s[87]||(s[87]=e('<h4 id="開始製作" tabindex="-1">開始製作 <a class="header-anchor" href="#開始製作" aria-label="Permalink to “開始製作”">​</a></h4><ol><li>首先，裝好三個樹莓派，每一個用螺絲釘固定在亞克力面板上。（看下圖）</li><li>接下來，安裝以太網交換機，用雙面膠貼在其中一個在亞克力面板上。</li><li>用雙面膠貼將 USB 轉接器貼在一個在亞克力面板使之成為最頂層。</li><li>接着就是一層一層都拼好——這裏我選擇將樹莓派放在交換機和USB轉接器的底下（可以看看完整安裝好的兩張截圖）</li></ol><p>想辦法把線路放在需要的地方——如果你和我一樣購買力 USB 線和網線，我可以將它們捲起來放在亞克力板子的每一層</p><p>現在不要急着上電，需要將系統燒錄到 SD 卡上才能繼續。</p><h4 id="燒錄-raspbian" tabindex="-1">燒錄 Raspbian <a class="header-anchor" href="#燒錄-raspbian" aria-label="Permalink to “燒錄 Raspbian”">​</a></h4>',5)),n("p",null,[s[23]||(s[23]=a("按照",-1)),t(p,{href:"https://www.raspberrypi.org/downloads/raspbian/"},{default:l(()=>[...s[21]||(s[21]=[a("這個教程",-1)])]),_:1}),s[24]||(s[24]=a("將 Raspbian 燒錄到三張 SD 卡上，我使用的是 Win7 下的 ",-1)),t(p,{href:"https://sourceforge.net/projects/win32diskimager/"},{default:l(()=>[...s[22]||(s[22]=[a("Win32DiskImager",-1)])]),_:1}),s[25]||(s[25]=a("。",-1))]),s[88]||(s[88]=n("p",null,"將其中一張燒錄好的 SD 卡插在你想作為主節點的樹莓派上，連接 USB 線並啓動它。",-1)),s[89]||(s[89]=n("h4",{id:"啓動主節點",tabindex:"-1"},[a("啓動主節點 "),n("a",{class:"header-anchor",href:"#啓動主節點","aria-label":"Permalink to “啓動主節點”"},"​")],-1)),n("p",null,[s[27]||(s[27]=a("這裏有",-1)),t(p,{href:"http://www.becausewecangeek.com/building-a-raspberry-pi-hadoop-cluster-part-1/"},{default:l(()=>[...s[26]||(s[26]=[a("一篇非常棒的“Because We Can Geek”的教程",-1)])]),_:1}),s[28]||(s[28]=a("，講如何安裝 Hadoop 2.7.1，此處就不再熬述。",-1))]),s[90]||(s[90]=n("p",null,"在啓動過程中有一些要注意的地方，我將帶着你一起設置直到最後一步，記住我現在使用的 IP 段為 192.168.1.50 – 192.168.1.52，主節點是 .50，從節點是 .51 和 .52，你的網絡可能會有所不同，如果你想設置靜態 IP 的話可以在評論區看看或討論。",-1)),s[91]||(s[91]=n("p",null,"一旦你完成了這些步驟，接下來要做的就是啓用交換文件，Spark on YARN 將分割出一塊非常接近內存大小的交換文件，當你內存快用完時便會使用這個交換分區。",-1)),n("p",null,[s[30]||(s[30]=a("（如果你以前沒有做過有關交換分區的操作的話，可以看看",-1)),t(p,{href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04"},{default:l(()=>[...s[29]||(s[29]=[a("這篇教程",-1)])]),_:1}),s[31]||(s[31]=a("，讓 ",-1)),s[32]||(s[32]=n("code",null,"swappiness",-1)),s[33]||(s[33]=a(" 保持較低水準，因為 MicroSD 卡的性能扛不住）",-1))]),s[92]||(s[92]=e(`<p>現在我準備介紹有關我的和“Because We Can Geek”關於啓動設置一些微妙的區別。</p><p>對於初學者，確保你給你的樹莓派起了一個正式的名字——在 <code>/etc/hostname</code> 設置，我的主節點設置為 ‘RaspberryPiHadoopMaster’ ，從節點設置為 ‘RaspberryPiHadoopSlave#’</p><p>主節點的 <code>/etc/hosts</code> 配置如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#/etc/hosts</span></span>
<span class="line"><span>127.0.0.1       localhost</span></span>
<span class="line"><span>::1             localhost ip6-localhost ip6-loopback</span></span>
<span class="line"><span>ff02::1         ip6-allnodes</span></span>
<span class="line"><span>ff02::2         ip6-allrouters</span></span>
<span class="line"><span></span></span>
<span class="line"><span>192.168.1.50    RaspberryPiHadoopMaster</span></span>
<span class="line"><span>192.168.1.51    RaspberryPiHadoopSlave1</span></span>
<span class="line"><span>192.168.1.52    RaspberryPiHadoopSlave2</span></span></code></pre></div><p>如果你想讓 Hadoop、YARN 和 Spark 運行正常的話，你也需要修改這些配置文件（不妨現在就編輯）。</p><p>這是 <code>hdfs-site.xml</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
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
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><p>這是 <code>yarn-site.xml</code> （注意內存方面的改變）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot;?&gt;</span></span>
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
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><h4 id="設置兩個從節點" tabindex="-1">設置兩個從節點： <a class="header-anchor" href="#設置兩個從節點" aria-label="Permalink to “設置兩個從節點：”">​</a></h4>`,14)),n("p",null,[s[35]||(s[35]=a("接下來",-1)),t(p,{href:"http://www.becausewecangeek.com/building-a-raspberry-pi-hadoop-cluster-part-2/"},{default:l(()=>[...s[34]||(s[34]=[a("按照 “Because We Can Geek”上的教程",-1)])]),_:1}),s[36]||(s[36]=a("，你需要對上面的文件作出小小的改動。 在 ",-1)),s[37]||(s[37]=n("code",null,"yarn-site.xml",-1)),s[38]||(s[38]=a(" 中主節點沒有改變，所以從節點中不必含有這個 ",-1)),s[39]||(s[39]=n("code",null,"slaves",-1)),s[40]||(s[40]=a(" 文件。",-1))]),s[93]||(s[93]=e(`<h3 id="iii-在我們的樹莓派集羣中測試-yarn" tabindex="-1">III. 在我們的樹莓派集羣中測試 YARN <a class="header-anchor" href="#iii-在我們的樹莓派集羣中測試-yarn" aria-label="Permalink to “III. 在我們的樹莓派集羣中測試 YARN”">​</a></h3><p>如果所有設備都正常工作，在主節點上你應該執行如下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>start-dfs.sh</span></span>
<span class="line"><span>start-yarn.sh</span></span></code></pre></div><p>當設備啓動後，以 Hadoop 用户執行，如果你遵循教程，用户應該是 <code>hduser</code>。</p><p>接下來執行 <code>hdfs dfsadmin -report</code> 查看三個節點是否都正確啓動，確認你看到一行粗體文字 ‘Live datanodes (3)’：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Configured Capacity: 93855559680 (87.41 GB)</span></span>
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
<span class="line"><span>Decommission Status : Normal</span></span></code></pre></div><p>你現在可以做一些簡單的諸如 ‘Hello, World!’ 的測試，或者直接進行下一步。</p><h3 id="iv-安裝-spark-on-yarn" tabindex="-1">IV. 安裝 SPARK ON YARN <a class="header-anchor" href="#iv-安裝-spark-on-yarn" aria-label="Permalink to “IV. 安裝 SPARK ON YARN”">​</a></h3><p>YARN 的意思是另一種非常好用的資源調度器（Yet Another Resource Negotiator），已經作為一個易用的資源管理器集成在 Hadoop 基礎安裝包中。</p>`,9)),n("p",null,[t(p,{href:"https://spark.apache.org/"},{default:l(()=>[...s[41]||(s[41]=[a("Apache Spark",-1)])]),_:1}),s[43]||(s[43]=a(" 是 Hadoop 生態圈中的另一款軟件包，它是一個譭譽參半的執行引擎和",-1)),t(p,{href:"https://hadoop.apache.org/docs/r1.2.1/mapred_tutorial.html"},{default:l(()=>[...s[42]||(s[42]=[a("捆綁的 MapReduce",-1)])]),_:1}),s[44]||(s[44]=a("。在一般情況下，相對於基於磁盤存儲的 MapReduce，Spark 更適合基於內存的存儲，某些運行任務能夠得到 10-100 倍提升——安裝完成集羣后你可以試試 Spark 和 MapReduce 有什麼不同。",-1))]),s[94]||(s[94]=n("p",null,"我個人對 Spark 還是留下非常深刻的印象，因為它提供了兩種數據工程師和科學家都比較擅長的語言—— Python 和 R。",-1)),n("p",null,[s[46]||(s[46]=a("安裝 Apache Spark 非常簡單，在你家目錄下，",-1)),s[47]||(s[47]=n("code",null,'wget "為 Hadoop 2.7 構建的 Apache Spark”',-1)),s[48]||(s[48]=a("（",-1)),t(p,{href:"https://spark.apache.org/downloads.html"},{default:l(()=>[...s[45]||(s[45]=[a("來自這個頁面",-1)])]),_:1}),s[49]||(s[49]=a("），然後運行 ",-1)),s[50]||(s[50]=n("code",null,"tar -xzf “tgz 文件”",-1)),s[51]||(s[51]=a("，最後把解壓出來的文件移動至 ",-1)),s[52]||(s[52]=n("code",null,"/opt",-1)),s[53]||(s[53]=a("，並清除剛才下載的文件，以上這些就是安裝步驟。",-1))]),s[95]||(s[95]=e(`<p>我又創建了只有兩行的文件 <code>spark-env.sh</code>，其中包含 Spark 的配置文件目錄。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SPARK_MASTER_IP=192.168.1.50</span></span>
<span class="line"><span>SPARK_WORKER_MEMORY=512m</span></span></code></pre></div><p>(在 YARN 跑起來之前我不確定這些是否有必要。)</p><h3 id="v-你好-世界-為-apache-spark-尋找有趣的數據集" tabindex="-1">V. 你好，世界! 為 Apache Spark 尋找有趣的數據集! <a class="header-anchor" href="#v-你好-世界-為-apache-spark-尋找有趣的數據集" aria-label="Permalink to “V. 你好，世界! 為 Apache Spark 尋找有趣的數據集!”">​</a></h3><p>在 Hadoop 世界裏面的 ‘Hello, World!’ 就是做單詞計數。</p><p>我決定讓我們的作品做一些內省式……為什麼不統計本站最常用的單詞呢？也許統計一些關於本站的大數據會更有用。</p><p>如果你有一個正在運行的 WordPress Blog，可以通過簡單的兩步來導出和淨化。</p>`,7)),n("ol",null,[n("li",null,[s[55]||(s[55]=a("我使用 ",-1)),t(p,{href:"https://wordpress.org/support/plugin/export-to-text"},{default:l(()=>[...s[54]||(s[54]=[a("Export to Text",-1)])]),_:1}),s[56]||(s[56]=a(" 插件導出文章的內容到純文本文件中",-1))]),n("li",null,[s[58]||(s[58]=a("我使用一些",-1)),t(p,{href:"https://pypi.python.org/pypi/bleach"},{default:l(()=>[...s[57]||(s[57]=[a("壓縮庫",-1)])]),_:1}),s[59]||(s[59]=a("編寫了一個 Python 腳本來剔除 HTML",-1))])]),s[96]||(s[96]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import bleach</span></span>
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
<span class="line"><span>f.close()</span></span></code></pre></div><p>現在我們有了一個更小的、適合複製到樹莓派所搭建的 HDFS 集羣上的文件。</p><p>如果你不能樹莓派主節點上完成上面的操作，找個辦法將它傳輸上去（scp、 rsync 等等），然後用下列命令列複製到 HDFS 上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>hdfs dfs -copyFromLocal dqydj_stripped.txt /dqydj_stripped.txt</span></span></code></pre></div><p>現在準備進行最後一步 - 向 Apache Spark 寫入一些代碼。</p><h3 id="vi-點亮-apache-spark" tabindex="-1">VI. 點亮 Apache Spark <a class="header-anchor" href="#vi-點亮-apache-spark" aria-label="Permalink to “VI. 點亮 Apache Spark”">​</a></h3>`,6)),n("p",null,[s[61]||(s[61]=a("Cloudera 有個極棒的程序可以作為我們的超級單詞計數程序的基礎，",-1)),t(p,{href:"https://www.cloudera.com/documentation/enterprise/5-6-x/topics/spark_develop_run.html"},{default:l(()=>[...s[60]||(s[60]=[a("你可以在這裏找到",-1)])]),_:1}),s[62]||(s[62]=a("。我們接下來為我們的內省式單詞計數程序修改它。",-1))]),n("p",null,[s[64]||(s[64]=a("在主節點上",-1)),t(p,{href:"https://pypi.python.org/pypi/stop-words"},{default:l(()=>[...s[63]||(s[63]=[a("安裝‘stop-words’",-1)])]),_:1}),s[65]||(s[65]=a("這個 python 第三方包，雖然有趣（我在 DQYDJ 上使用了 23,295 次 the 這個單詞），你可能不想看到這些語法單詞佔據着單詞計數的前列，另外，在下列代碼用你自己的數據集替換所有有關指向 dqydj 文件的地方。",-1))]),s[97]||(s[97]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
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
<span class="line"><span>  for (word, count) in no_stop_words: print &quot;%s : %d&quot; % (word.encode(&#39;utf-8&#39;).strip(), count)</span></span></code></pre></div><p>保存好 wordCount.py，確保上面的路徑都是正確無誤的。</p><p>現在，準備念出咒語，讓運行在 YARN 上的 Spark 跑起來，你可以看到我在 DQYDJ 使用最多的單詞是哪一個。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/opt/spark-2.0.0-bin-hadoop2.7/bin/spark-submit –master yarn –executor-memory 512m –name wordcount –executor-cores 8 wordCount.py /dqydj_stripped.txt</span></span></code></pre></div><h3 id="vii-我在-dqydj-使用最多的單詞" tabindex="-1">VII. 我在 DQYDJ 使用最多的單詞 <a class="header-anchor" href="#vii-我在-dqydj-使用最多的單詞" aria-label="Permalink to “VII. 我在 DQYDJ 使用最多的單詞”">​</a></h3><p>可能入列的單詞有哪一些呢？“can, will, it’s, one, even, like, people, money, don’t, also“.</p><p>嘿，不錯，“money”悄悄擠進了前十。在一個致力於金融、投資和經濟的網站上談論這似乎是件好事，對吧？</p><p>下面是的前 50 個最常用的詞彙，請用它們刻畫出有關我的文章的水平的結論。</p><p><img src="https://dqydj.com/wp-content/uploads/2016/08/dqydj_pk_most_used_words.png" alt=""></p><p>我希望你能喜歡這篇關於 Hadoop、YARN 和 Apache Spark 的教程，現在你可以在 Spark 運行和編寫其他的應用了。</p>`,10)),n("p",null,[s[67]||(s[67]=a("你的下一步是任務是開始",-1)),t(p,{href:"https://spark.apache.org/docs/2.0.0/api/python/index.html"},{default:l(()=>[...s[66]||(s[66]=[a("閲讀 pyspark 文檔",-1)])]),_:1}),s[68]||(s[68]=a("（以及用於其他語言的該庫），去學習一些可用的功能。根據你的興趣和你實際存儲的數據，你將會深入學習到更多——有流數據、SQL，甚至機器學習的軟件包！",-1))]),s[98]||(s[98]=n("p",null,"你怎麼看？你要建立一個樹莓派 Hadoop 集羣嗎？想要在其中挖掘一些什麼嗎？你在上面看到最令你驚奇的單詞是什麼？為什麼 'S&P' 也能上榜？",-1)),s[99]||(s[99]=n("hr",null,null,-1)),n("p",null,[s[70]||(s[70]=a("via: ",-1)),t(p,{href:"https://dqydj.com/raspberry-pi-hadoop-cluster-apache-spark-yarn/"},{default:l(()=>[...s[69]||(s[69]=[a("https://dqydj.com/raspberry-pi-hadoop-cluster-apache-spark-yarn/",-1)])]),_:1})]),n("p",null,[s[74]||(s[74]=a("作者：",-1)),t(p,{href:"https://dqydj.com/about/#contact_us"},{default:l(()=>[...s[71]||(s[71]=[a("PK",-1)])]),_:1}),s[75]||(s[75]=a(" 譯者：",-1)),t(p,{href:"https://github.com/sfantree"},{default:l(()=>[...s[72]||(s[72]=[a("popy32",-1)])]),_:1}),s[76]||(s[76]=a(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[73]||(s[73]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[79]||(s[79]=a("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[77]||(s[77]=[a("LCTT",-1)])]),_:1}),s[80]||(s[80]=a(" 組織編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:l(()=>[...s[78]||(s[78]=[a("Linux中國",-1)])]),_:1}),s[81]||(s[81]=a(" 榮譽推出",-1))])])}const S=i(u,[["render",g]]);export{v as __pageData,S as default};
