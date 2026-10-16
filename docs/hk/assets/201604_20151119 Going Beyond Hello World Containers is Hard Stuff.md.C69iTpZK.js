import{_ as i,a0 as d,w as a,s,I as n,x as t,a1 as r,A as p,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const D=JSON.parse('{"title":"從 Hello World 容器進階是件困難的事情 | LCTT x X-CMD","titleTemplate":false,"description":"從 Hello World 容器進階是件困難的事情 | LCTT (201604) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"從 Hello World 容器進階是件困難的事情 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"從 Hello World 容器進階是件困難的事情 | LCTT (201604) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201604/20151119 Going Beyond Hello World Containers is Hard Stuff","title":"從 Hello World 容器進階是件困難的事情","tag":"201604","desc":""},"relativePath":"201604/20151119 Going Beyond Hello World Containers is Hard Stuff.md","filePath":"[post].md"}'),u={name:"201604/20151119 Going Beyond Hello World Containers is Hard Stuff.md"};function m(g,e,f,b,k,T){const o=d("Link");return a(),s("div",null,[e[42]||(e[42]=n("h1",{id:"從-hello-world-容器進階是件困難的事情",tabindex:"-1"},[t("從 Hello World 容器進階是件困難的事情 "),n("a",{class:"header-anchor",href:"#從-hello-world-容器進階是件困難的事情","aria-label":"Permalink to “從 Hello World 容器進階是件困難的事情”"},"​")],-1)),n("p",null,[e[1]||(e[1]=t("在",-1)),r(o,{href:"https://linux.cn/article-6594-1.html"},{default:p(()=>[...e[0]||(e[0]=[t("我的上一篇文章裏",-1)])]),_:1}),e[2]||(e[2]=t("， 我介紹了 Linux 容器背後的技術的概念。我寫了我知道的一切。容器對我來説也是比較新的概念。我寫這篇文章的目的就是鼓勵我真正的來學習這些東西。",-1))]),e[43]||(e[43]=l('<p>我打算在使用中學習。首先實踐，然後上手並記錄下我是怎麼走過來的。我假設這裏肯定有很多像 &quot;Hello World&quot; 這種類型的知識幫助我快速的掌握基礎。然後我能夠更進一步，構建一個微服務容器或者其它東西。</p><p>我想，它應該不會有多難的。</p><p>但是我錯了。</p><p>可能對某些人來説這很簡單，因為他們在運維工作方面付出了大量的時間。但是對我來説實際上是很困難的，可以從我在Facebook 上的狀態展示出來的挫折感就可以看出了。</p><p>但是還有一個好消息：我最終搞定了。而且它工作的還不錯。所以我準備分享向你分享我如何製作我的第一個微服務容器。我的痛苦可能會節省你不少時間呢。</p><p>如果你曾經發現你也處於過這種境地，不要害怕：像我這樣的人都能搞定，所以你也肯定行。</p><p>讓我們開始吧。</p><h3 id="一個縮略圖微服務" tabindex="-1">一個縮略圖微服務 <a class="header-anchor" href="#一個縮略圖微服務" aria-label="Permalink to “一個縮略圖微服務”">​</a></h3><p>我設計的微服務在理論上很簡單。以 JPG 或者 PNG 格式在 HTTP 終端發佈一張數字照片，然後獲得一個100像素寬的縮略圖。</p><p>下面是它的流程：</p><p><img src="https://deis.com/images/blog-images/containers-hard-0.png" alt="container-diagram-0"></p>',11)),n("p",null,[e[4]||(e[4]=t("我決定使用 NodeJS 作為我的開發語言，使用 ",-1)),r(o,{href:"https://github.com/rsms/node-imagemagick"},{default:p(()=>[...e[3]||(e[3]=[t("ImageMagick",-1)])]),_:1}),e[5]||(e[5]=t(" 來轉換縮略圖。",-1))]),e[44]||(e[44]=n("p",null,"我的服務的第一版的邏輯如下所示：",-1)),e[45]||(e[45]=n("p",null,[n("img",{src:"https://deis.com/images/blog-images/containers-hard-1.png",alt:"container-diagram-1"})],-1)),n("p",null,[e[7]||(e[7]=t("我下載了 ",-1)),r(o,{href:"https://www.docker.com/toolbox"},{default:p(()=>[...e[6]||(e[6]=[t("Docker Toolbox",-1)])]),_:1}),e[8]||(e[8]=t("，用它安裝了 Docker 的快速啓動終端（Docker Quickstart Terminal）。Docker 快速啓動終端使得創建容器更簡單了。終端會啓動一個裝好了 Docker 的 Linux 虛擬機，它允許你在一個終端裏運行 Docker 命令。",-1))]),e[46]||(e[46]=l(`<p>雖然在我的例子裏，我的操作系統是 Mac OS X。但是 Windows 下也有相同的工具。</p><p>我準備使用 Docker 快速啓動終端裏為我的微服務創建一個容器鏡像，然後從這個鏡像運行容器。</p><p>Docker 快速啓動終端就運行在你使用的普通終端裏，就像這樣：</p><p><img src="https://deis.com/images/blog-images/containers-hard-2.png" alt="container-diagram-2"></p><h3 id="第一個小問題和第一個大問題" tabindex="-1">第一個小問題和第一個大問題### <a class="header-anchor" href="#第一個小問題和第一個大問題" aria-label="Permalink to “第一個小問題和第一個大問題###”">​</a></h3><p>我用 NodeJS 和 ImageMagick 瞎搞了一通，然後讓我的服務在本地運行起來了。</p><p>然後我創建了 Dockerfile，這是 Docker 用來構建容器的配置腳本。（我會在後面深入介紹構建過程和 Dockerfile）</p><p>這是我運行 Docker 快速啓動終端的命令：</p><pre><code>$ docker build -t thumbnailer:0.1
</code></pre><p>獲得如下回應：</p><pre><code>docker: &quot;build&quot; requires 1 argument.
</code></pre><p>呃。</p><p>我估摸着過了15分鐘我才反應過來：我忘記了在末尾參數輸入一個點<code>.</code>。</p><p>正確的指令應該是這樣的：</p><pre><code>$ docker build -t thumbnailer:0.1 .
</code></pre><p>但是這不是我遇到的最後一個問題。</p>`,16)),n("p",null,[e[10]||(e[10]=t("我讓這個鏡像構建好了，然後我在 Docker 快速啓動終端輸入了 ",-1)),r(o,{href:"https://docs.docker.com/reference/commandline/run/"},{default:p(()=>[...e[9]||(e[9]=[n("code",null,"run",-1),t(" 命令",-1)])]),_:1}),e[11]||(e[11]=t("來啓動容器，名字叫 ",-1)),e[12]||(e[12]=n("code",null,"thumbnailer:0.1",-1)),e[13]||(e[13]=t(":",-1))]),e[47]||(e[47]=l(`<pre><code>$ docker run -d -p 3001:3000 thumbnailer:0.1
</code></pre><p>參數 <code>-p 3001:3000</code> 讓 NodeJS 微服務在 Docker 內運行在端口3000，而綁定在宿主主機上的3001。</p><p>到目前看起來都很好，對吧？</p><p>錯了。事情要馬上變糟了。</p><p>我通過運行 <code>docker-machine</code> 命令為這個 Docker 快速啓動終端裏創建的虛擬機指定了 ip 地址：</p><pre><code>$ docker-machine ip default
</code></pre><p>這句話返回了默認虛擬機的 IP 地址，它運行在 Docker 快速啓動終端裏。在我這裏，這個 ip 地址是 192.168.99.100。</p>`,7)),n("p",null,[e[15]||(e[15]=t("我瀏覽網頁 ",-1)),r(o,{href:"http://192.168.99.100:3001/"},{default:p(()=>[...e[14]||(e[14]=[t("http://192.168.99.100:3001/",-1)])]),_:1}),e[16]||(e[16]=t(" ，然後找到了我創建的上傳圖片的網頁：",-1))]),e[48]||(e[48]=l(`<p><img src="https://deis.com/images/blog-images/containers-hard-3.png" alt="container-diagram-3"></p><p>我選擇了一個文件，然後點擊上傳圖片的按鈕。</p><p>但是它並沒有工作。</p><p>終端告訴我他無法找到我的微服務需要的 <code>/upload</code> 目錄。</p><p>現在，你要知道，我已經在此耗費了將近一天的時間－從浪費時間到研究問題。我此時感到了一些挫折感。</p><p>然後靈光一閃。某人記起來微服務不應該自己做任何數據持久化的工作！保存數據應該是另一個服務的工作。</p><p>所以容器找不到目錄 <code>/upload</code> 的原因到底是什麼？這個問題的根本就是我的微服務在基礎設計上就有問題。</p><p>讓我們看看另一幅圖：</p><p><img src="https://deis.com/images/blog-images/containers-hard-4.png" alt="container-diagram-4"></p><p>我為什麼要把文件保存到磁盤？微服務按理來説是很快的。為什麼不能讓我的全部工作都在內存裏完成？使用內存緩衝可以解決“找不到目錄”這個問題，而且可以提高我的應用的性能。</p><p>這就是我現在所做的。下面是我的計劃：</p><p><img src="https://deis.com/images/blog-images/containers-hard-5.png" alt="container-diagram-5"></p><p>這是我用 NodeJS 寫的在內存運行、生成縮略圖的代碼：</p><pre><code>// Bind to the packages
var express = require(&#39;express&#39;);
var router = express.Router();
var path = require(&#39;path&#39;); // used for file path
var im = require(&quot;imagemagick&quot;);

// Simple get that allows you test that you can access the thumbnail process
router.get(&#39;/&#39;, function (req, res, next) {
 res.status(200).send(&#39;Thumbnailer processor is up and running&#39;);
});

// This is the POST handler. It will take the uploaded file and make a thumbnail from the 
// submitted byte array. I know, it&#39;s not rocket science, but it serves a purpose
router.post(&#39;/&#39;, function (req, res, next) {
 req.pipe(req.busboy);
 req.busboy.on(&#39;file&#39;, function (fieldname, file, filename) {
   var ext = path.extname(filename)

   // Make sure that only png and jpg is allowed 
   if(ext.toLowerCase() != &#39;.jpg&#39; &amp;&amp; ext.toLowerCase() != &#39;.png&#39;){
     res.status(406).send(&quot;Service accepts only jpg or png files&quot;);
   }

   var bytes = [];

   // put the bytes from the request into a byte array 
   file.on(&#39;data&#39;, function(data) {
     for (var i = 0; i &lt; data.length; ++i) {
       bytes.push(data[i]);
     }
     console.log(&#39;File [&#39; + fieldname + &#39;] got bytes &#39; + bytes.length + &#39; bytes&#39;);
   });

   // Once the request is finished pushing the file bytes into the array, put the bytes in 
   // a buffer and process that buffer with the imagemagick resize function
   file.on(&#39;end&#39;, function() {
     var buffer = new Buffer(bytes,&#39;binary&#39;);
     console.log(&#39;Bytes  got &#39; + bytes.length + &#39; bytes&#39;);

     //resize
     im.resize({
         srcData: buffer,
         height: 100
     }, function(err, stdout, stderr){
       if (err){
         throw err;
       }
       // get the extension without the period
       var typ = path.extname(filename).replace(&#39;.&#39;,&#39;&#39;);
       res.setHeader(&quot;content-type&quot;, &quot;image/&quot; + typ);
       res.status(200);
       // send the image back as a response
       res.send(new Buffer(stdout,&#39;binary&#39;));
     });
   });
 });
});

module.exports = router;
</code></pre><p>好了，一切回到了正軌，已經可以在我的本地機器正常工作了。我該去休息了。</p><p>但是，在我測試把這個微服務當作一個普通的 Node 應用運行在本地時...</p><p><img src="https://deis.com/images/blog-images/containers-hard-6.png" alt="Containers Hard"></p><p>它工作的很好。現在我要做的就是讓它在容器裏面工作。</p><p>第二天我起牀後喝點咖啡，然後創建一個鏡像——這次沒有忘記那個&quot;.&quot;!</p><pre><code>$ docker build -t thumbnailer:01 .
</code></pre><p>我從縮略圖項目的根目錄開始構建。構建命令使用了根目錄下的 Dockerfile。它是這樣工作的：把 Dockerfile 放到你想構建鏡像的地方，然後系統就默認使用這個 Dockerfile。</p><p>下面是我使用的Dockerfile 的內容：</p><pre><code>FROM ubuntu:latest
MAINTAINER bob@CogArtTech.com

RUN apt-get update
RUN apt-get install -y nodejs nodejs-legacy npm
RUN apt-get install imagemagick libmagickcore-dev libmagickwand-dev
RUN apt-get clean

COPY ./package.json src/

RUN cd src &amp;&amp; npm install

COPY . /src

WORKDIR src/

CMD npm start
</code></pre><p>這怎麼可能出錯呢？</p><h3 id="第二個大問題" tabindex="-1">第二個大問題 <a class="header-anchor" href="#第二個大問題" aria-label="Permalink to “第二個大問題”">​</a></h3><p>我運行了 <code>build</code> 命令，然後出了這個錯：</p><pre><code>Do you want to continue? [Y/n] Abort.

The command &#39;/bin/sh -c apt-get install imagemagick libmagickcore-dev libmagickwand-dev&#39; returned a non-zero code: 1
</code></pre><p>我猜測微服務出錯了。我回到本地機器，從本機啓動微服務，然後試着上傳文件。</p><p>然後我從 NodeJS 獲得了這個錯誤：</p><pre><code>Error: spawn convert ENOENT
</code></pre><p>怎麼回事？之前還是好好的啊！</p><p>我搜索了我能想到的所有的錯誤原因。差不多4個小時後，我想：為什麼不重啓一下機器呢？</p><p>重啓了，你猜猜結果？錯誤消失了！（LCTT 譯註：萬能的“重啓試試”）</p><p>繼續。</p><h3 id="將精靈關進瓶子裏" tabindex="-1">將精靈關進瓶子裏 <a class="header-anchor" href="#將精靈關進瓶子裏" aria-label="Permalink to “將精靈關進瓶子裏”">​</a></h3><p>跳回正題：我需要完成構建工作。</p>`,36)),n("p",null,[e[18]||(e[18]=t("我使用 ",-1)),r(o,{href:"https://docs.docker.com/reference/commandline/rm/"},{default:p(()=>[...e[17]||(e[17]=[n("code",null,"rm",-1),t(" 命令",-1)])]),_:1}),e[19]||(e[19]=t("刪除了虛擬機裏所有的容器。",-1))]),e[49]||(e[49]=n("pre",null,[n("code",null,`$ docker rm -f $(docker ps -a -q)
`)],-1)),e[50]||(e[50]=n("p",null,[n("code",null,"-f"),t(" 在這裏的用處是強制刪除運行中的鏡像。")],-1)),n("p",null,[e[21]||(e[21]=t("然後刪除了全部 Docker 鏡像，用的是",-1)),r(o,{href:"https://docs.docker.com/reference/commandline/rmi/"},{default:p(()=>[...e[20]||(e[20]=[t("命令 ",-1),n("code",null,"rmi",-1)])]),_:1}),e[22]||(e[22]=t(":",-1))]),e[51]||(e[51]=l(`<pre><code>$ docker rmi if $(docker images | tail -n +2 | awk &#39;{print $3}&#39;)
</code></pre><p>我重新執行了重新構建鏡像、安裝容器、運行微服務的整個過程。然後過了一個充滿自我懷疑和沮喪的一個小時，我告訴我自己：這個錯誤可能不是微服務的原因。</p><p>所以我重新看到了這個錯誤：</p><pre><code>Do you want to continue? [Y/n] Abort.

The command &#39;/bin/sh -c apt-get install imagemagick libmagickcore-dev libmagickwand-dev&#39; returned a non-zero code: 1
</code></pre><p>這太打擊我了：構建腳本好像需要有人從鍵盤輸入 Y！ 但是，這是一個非交互的 Dockerfile 腳本啊。這裏並沒有鍵盤。</p><p>回到 Dockerfile，腳本原來是這樣的：</p><pre><code>RUN apt-get update
RUN apt-get install -y nodejs nodejs-legacy npm
RUN apt-get install imagemagick libmagickcore-dev libmagickwand-dev
RUN apt-get clean
</code></pre><p>第二個<code>apt-get</code> 忘記了<code>-y</code> 標誌，它用於自動應答提示所需要的“yes”。這才是錯誤的根本原因。</p><p>我在這條命令後面添加了<code>-y</code> ：</p><pre><code>RUN apt-get update
RUN apt-get install -y nodejs nodejs-legacy npm
RUN apt-get install -y imagemagick libmagickcore-dev libmagickwand-dev
RUN apt-get clean
</code></pre><p>猜一猜結果：經過將近兩天的嘗試和痛苦，容器終於正常工作了！整整兩天啊！</p><p>我完成了構建工作：</p><pre><code>$ docker build -t thumbnailer:0.1 .
</code></pre><p>啓動了容器：</p><pre><code>$ docker run -d -p 3001:3000 thumbnailer:0.1
</code></pre><p>獲取了虛擬機的IP 地址：</p><pre><code>$ docker-machine ip default
</code></pre>`,17)),n("p",null,[e[24]||(e[24]=t("在我的瀏覽器裏面輸入 ",-1)),r(o,{href:"http://192.168.99.100:3001/"},{default:p(()=>[...e[23]||(e[23]=[t("http://192.168.99.100:3001/",-1)])]),_:1}),e[25]||(e[25]=t(" ：",-1))]),e[52]||(e[52]=n("p",null,"上傳頁面打開了。",-1)),e[53]||(e[53]=n("p",null,"我選擇了一個圖片，然後得到了這個：",-1)),e[54]||(e[54]=n("p",null,[n("img",{src:"https://deis.com/images/blog-images/containers-hard-7.png",alt:"container-diagram-7"})],-1)),e[55]||(e[55]=n("p",null,"工作了！",-1)),e[56]||(e[56]=n("p",null,"在容器裏面工作了，我的第一次啊！",-1)),e[57]||(e[57]=n("h3",{id:"這讓我學到了什麼",tabindex:"-1"},[t("這讓我學到了什麼? "),n("a",{class:"header-anchor",href:"#這讓我學到了什麼","aria-label":"Permalink to “這讓我學到了什麼?”"},"​")],-1)),e[58]||(e[58]=n("p",null,"很久以前，我接受了這樣一個道理：當你剛開始嘗試某項技術時，即使是最簡單的事情也會變得很困難。因此，我不會把自己當成最聰明的那個人，然而最近幾天嘗試容器的過程就是一個充滿自我懷疑的旅程。",-1)),e[59]||(e[59]=n("p",null,"但是你想知道一些其它的事情嗎？這篇文章是我在凌晨2點完成的，而每一個受折磨的時刻都值得了。為什麼？因為這段時間你將自己全身心投入了喜歡的工作裏。這件事很難，對於所有人來説都不是很容易就獲得結果的。但是不要忘記：你在學習技術，運行世界的技術。",-1)),n("p",null,[e[27]||(e[27]=t("P.S. 瞭解一下Hello World 容器的兩段視頻，這裏會有 ",-1)),r(o,{href:"http://twitter.com/RazielTabib"},{default:p(()=>[...e[26]||(e[26]=[t("Raziel Tabib’s",-1)])]),_:1}),e[28]||(e[28]=t(" 的精彩工作內容。",-1))]),e[60]||(e[60]=n("p",null,"注：youtube視頻",-1)),e[61]||(e[61]=n("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PJ95WY2DqXo",frameborder:"0",allowfullscreen:""},null,-1)),e[62]||(e[62]=n("p",null,"千萬被忘記第二部分...",-1)),e[63]||(e[63]=n("p",null,"注：youtube視頻",-1)),e[64]||(e[64]=n("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lss2rZ3Ppuk",frameborder:"0",allowfullscreen:""},null,-1)),e[65]||(e[65]=n("hr",null,null,-1)),n("p",null,[e[30]||(e[30]=t("via: ",-1)),r(o,{href:"https://deis.com/blog/2015/beyond-hello-world-containers-hard-stuff"},{default:p(()=>[...e[29]||(e[29]=[t("https://deis.com/blog/2015/beyond-hello-world-containers-hard-stuff",-1)])]),_:1})]),n("p",null,[e[34]||(e[34]=t("作者：",-1)),r(o,{href:"https://deis.com/blog"},{default:p(()=>[...e[31]||(e[31]=[t("Bob Reselman",-1)])]),_:1}),e[35]||(e[35]=t(" 譯者：",-1)),r(o,{href:"https://github.com/oska874"},{default:p(()=>[...e[32]||(e[32]=[t("Ezio",-1)])]),_:1}),e[36]||(e[36]=t(" 校對：",-1)),r(o,{href:"https://github.com/wxy"},{default:p(()=>[...e[33]||(e[33]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[39]||(e[39]=t("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[37]||(e[37]=[t("LCTT",-1)])]),_:1}),e[40]||(e[40]=t(" 原創編譯，",-1)),r(o,{href:"https://linux.cn/"},{default:p(()=>[...e[38]||(e[38]=[t("Linux中國",-1)])]),_:1}),e[41]||(e[41]=t(" 榮譽推出",-1))])])}const x=i(u,[["render",m]]);export{D as __pageData,x as default};
