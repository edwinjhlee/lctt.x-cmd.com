import{_ as i,a0 as d,w as a,s,I as n,x as t,a1 as r,A as p,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const D=JSON.parse('{"title":"从 Hello World 容器进阶是件困难的事情 | LCTT x X-CMD","titleTemplate":false,"description":"从 Hello World 容器进阶是件困难的事情 | LCTT (201604) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"从 Hello World 容器进阶是件困难的事情 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"从 Hello World 容器进阶是件困难的事情 | LCTT (201604) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201604/20151119 Going Beyond Hello World Containers is Hard Stuff","title":"从 Hello World 容器进阶是件困难的事情","tag":"201604","desc":""},"relativePath":"201604/20151119 Going Beyond Hello World Containers is Hard Stuff.md","filePath":"[post].md"}'),u={name:"201604/20151119 Going Beyond Hello World Containers is Hard Stuff.md"};function m(g,e,f,b,k,T){const o=d("Link");return a(),s("div",null,[e[42]||(e[42]=n("h1",{id:"从-hello-world-容器进阶是件困难的事情",tabindex:"-1"},[t("从 Hello World 容器进阶是件困难的事情 "),n("a",{class:"header-anchor",href:"#从-hello-world-容器进阶是件困难的事情","aria-label":"Permalink to “从 Hello World 容器进阶是件困难的事情”"},"​")],-1)),n("p",null,[e[1]||(e[1]=t("在",-1)),r(o,{href:"https://linux.cn/article-6594-1.html"},{default:p(()=>[...e[0]||(e[0]=[t("我的上一篇文章里",-1)])]),_:1}),e[2]||(e[2]=t("， 我介绍了 Linux 容器背后的技术的概念。我写了我知道的一切。容器对我来说也是比较新的概念。我写这篇文章的目的就是鼓励我真正的来学习这些东西。",-1))]),e[43]||(e[43]=l('<p>我打算在使用中学习。首先实践，然后上手并记录下我是怎么走过来的。我假设这里肯定有很多像 &quot;Hello World&quot; 这种类型的知识帮助我快速的掌握基础。然后我能够更进一步，构建一个微服务容器或者其它东西。</p><p>我想，它应该不会有多难的。</p><p>但是我错了。</p><p>可能对某些人来说这很简单，因为他们在运维工作方面付出了大量的时间。但是对我来说实际上是很困难的，可以从我在Facebook 上的状态展示出来的挫折感就可以看出了。</p><p>但是还有一个好消息：我最终搞定了。而且它工作的还不错。所以我准备分享向你分享我如何制作我的第一个微服务容器。我的痛苦可能会节省你不少时间呢。</p><p>如果你曾经发现你也处于过这种境地，不要害怕：像我这样的人都能搞定，所以你也肯定行。</p><p>让我们开始吧。</p><h3 id="一个缩略图微服务" tabindex="-1">一个缩略图微服务 <a class="header-anchor" href="#一个缩略图微服务" aria-label="Permalink to “一个缩略图微服务”">​</a></h3><p>我设计的微服务在理论上很简单。以 JPG 或者 PNG 格式在 HTTP 终端发布一张数字照片，然后获得一个100像素宽的缩略图。</p><p>下面是它的流程：</p><p><img src="https://deis.com/images/blog-images/containers-hard-0.png" alt="container-diagram-0"></p>',11)),n("p",null,[e[4]||(e[4]=t("我决定使用 NodeJS 作为我的开发语言，使用 ",-1)),r(o,{href:"https://github.com/rsms/node-imagemagick"},{default:p(()=>[...e[3]||(e[3]=[t("ImageMagick",-1)])]),_:1}),e[5]||(e[5]=t(" 来转换缩略图。",-1))]),e[44]||(e[44]=n("p",null,"我的服务的第一版的逻辑如下所示：",-1)),e[45]||(e[45]=n("p",null,[n("img",{src:"https://deis.com/images/blog-images/containers-hard-1.png",alt:"container-diagram-1"})],-1)),n("p",null,[e[7]||(e[7]=t("我下载了 ",-1)),r(o,{href:"https://www.docker.com/toolbox"},{default:p(()=>[...e[6]||(e[6]=[t("Docker Toolbox",-1)])]),_:1}),e[8]||(e[8]=t("，用它安装了 Docker 的快速启动终端（Docker Quickstart Terminal）。Docker 快速启动终端使得创建容器更简单了。终端会启动一个装好了 Docker 的 Linux 虚拟机，它允许你在一个终端里运行 Docker 命令。",-1))]),e[46]||(e[46]=l(`<p>虽然在我的例子里，我的操作系统是 Mac OS X。但是 Windows 下也有相同的工具。</p><p>我准备使用 Docker 快速启动终端里为我的微服务创建一个容器镜像，然后从这个镜像运行容器。</p><p>Docker 快速启动终端就运行在你使用的普通终端里，就像这样：</p><p><img src="https://deis.com/images/blog-images/containers-hard-2.png" alt="container-diagram-2"></p><h3 id="第一个小问题和第一个大问题" tabindex="-1">第一个小问题和第一个大问题### <a class="header-anchor" href="#第一个小问题和第一个大问题" aria-label="Permalink to “第一个小问题和第一个大问题###”">​</a></h3><p>我用 NodeJS 和 ImageMagick 瞎搞了一通，然后让我的服务在本地运行起来了。</p><p>然后我创建了 Dockerfile，这是 Docker 用来构建容器的配置脚本。（我会在后面深入介绍构建过程和 Dockerfile）</p><p>这是我运行 Docker 快速启动终端的命令：</p><pre><code>$ docker build -t thumbnailer:0.1
</code></pre><p>获得如下回应：</p><pre><code>docker: &quot;build&quot; requires 1 argument.
</code></pre><p>呃。</p><p>我估摸着过了15分钟我才反应过来：我忘记了在末尾参数输入一个点<code>.</code>。</p><p>正确的指令应该是这样的：</p><pre><code>$ docker build -t thumbnailer:0.1 .
</code></pre><p>但是这不是我遇到的最后一个问题。</p>`,16)),n("p",null,[e[10]||(e[10]=t("我让这个镜像构建好了，然后我在 Docker 快速启动终端输入了 ",-1)),r(o,{href:"https://docs.docker.com/reference/commandline/run/"},{default:p(()=>[...e[9]||(e[9]=[n("code",null,"run",-1),t(" 命令",-1)])]),_:1}),e[11]||(e[11]=t("来启动容器，名字叫 ",-1)),e[12]||(e[12]=n("code",null,"thumbnailer:0.1",-1)),e[13]||(e[13]=t(":",-1))]),e[47]||(e[47]=l(`<pre><code>$ docker run -d -p 3001:3000 thumbnailer:0.1
</code></pre><p>参数 <code>-p 3001:3000</code> 让 NodeJS 微服务在 Docker 内运行在端口3000，而绑定在宿主主机上的3001。</p><p>到目前看起来都很好，对吧？</p><p>错了。事情要马上变糟了。</p><p>我通过运行 <code>docker-machine</code> 命令为这个 Docker 快速启动终端里创建的虚拟机指定了 ip 地址：</p><pre><code>$ docker-machine ip default
</code></pre><p>这句话返回了默认虚拟机的 IP 地址，它运行在 Docker 快速启动终端里。在我这里，这个 ip 地址是 192.168.99.100。</p>`,7)),n("p",null,[e[15]||(e[15]=t("我浏览网页 ",-1)),r(o,{href:"http://192.168.99.100:3001/"},{default:p(()=>[...e[14]||(e[14]=[t("http://192.168.99.100:3001/",-1)])]),_:1}),e[16]||(e[16]=t(" ，然后找到了我创建的上传图片的网页：",-1))]),e[48]||(e[48]=l(`<p><img src="https://deis.com/images/blog-images/containers-hard-3.png" alt="container-diagram-3"></p><p>我选择了一个文件，然后点击上传图片的按钮。</p><p>但是它并没有工作。</p><p>终端告诉我他无法找到我的微服务需要的 <code>/upload</code> 目录。</p><p>现在，你要知道，我已经在此耗费了将近一天的时间－从浪费时间到研究问题。我此时感到了一些挫折感。</p><p>然后灵光一闪。某人记起来微服务不应该自己做任何数据持久化的工作！保存数据应该是另一个服务的工作。</p><p>所以容器找不到目录 <code>/upload</code> 的原因到底是什么？这个问题的根本就是我的微服务在基础设计上就有问题。</p><p>让我们看看另一幅图：</p><p><img src="https://deis.com/images/blog-images/containers-hard-4.png" alt="container-diagram-4"></p><p>我为什么要把文件保存到磁盘？微服务按理来说是很快的。为什么不能让我的全部工作都在内存里完成？使用内存缓冲可以解决“找不到目录”这个问题，而且可以提高我的应用的性能。</p><p>这就是我现在所做的。下面是我的计划：</p><p><img src="https://deis.com/images/blog-images/containers-hard-5.png" alt="container-diagram-5"></p><p>这是我用 NodeJS 写的在内存运行、生成缩略图的代码：</p><pre><code>// Bind to the packages
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
</code></pre><p>好了，一切回到了正轨，已经可以在我的本地机器正常工作了。我该去休息了。</p><p>但是，在我测试把这个微服务当作一个普通的 Node 应用运行在本地时...</p><p><img src="https://deis.com/images/blog-images/containers-hard-6.png" alt="Containers Hard"></p><p>它工作的很好。现在我要做的就是让它在容器里面工作。</p><p>第二天我起床后喝点咖啡，然后创建一个镜像——这次没有忘记那个&quot;.&quot;!</p><pre><code>$ docker build -t thumbnailer:01 .
</code></pre><p>我从缩略图项目的根目录开始构建。构建命令使用了根目录下的 Dockerfile。它是这样工作的：把 Dockerfile 放到你想构建镜像的地方，然后系统就默认使用这个 Dockerfile。</p><p>下面是我使用的Dockerfile 的内容：</p><pre><code>FROM ubuntu:latest
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
</code></pre><p>这怎么可能出错呢？</p><h3 id="第二个大问题" tabindex="-1">第二个大问题 <a class="header-anchor" href="#第二个大问题" aria-label="Permalink to “第二个大问题”">​</a></h3><p>我运行了 <code>build</code> 命令，然后出了这个错：</p><pre><code>Do you want to continue? [Y/n] Abort.

The command &#39;/bin/sh -c apt-get install imagemagick libmagickcore-dev libmagickwand-dev&#39; returned a non-zero code: 1
</code></pre><p>我猜测微服务出错了。我回到本地机器，从本机启动微服务，然后试着上传文件。</p><p>然后我从 NodeJS 获得了这个错误：</p><pre><code>Error: spawn convert ENOENT
</code></pre><p>怎么回事？之前还是好好的啊！</p><p>我搜索了我能想到的所有的错误原因。差不多4个小时后，我想：为什么不重启一下机器呢？</p><p>重启了，你猜猜结果？错误消失了！（LCTT 译注：万能的“重启试试”）</p><p>继续。</p><h3 id="将精灵关进瓶子里" tabindex="-1">将精灵关进瓶子里 <a class="header-anchor" href="#将精灵关进瓶子里" aria-label="Permalink to “将精灵关进瓶子里”">​</a></h3><p>跳回正题：我需要完成构建工作。</p>`,36)),n("p",null,[e[18]||(e[18]=t("我使用 ",-1)),r(o,{href:"https://docs.docker.com/reference/commandline/rm/"},{default:p(()=>[...e[17]||(e[17]=[n("code",null,"rm",-1),t(" 命令",-1)])]),_:1}),e[19]||(e[19]=t("删除了虚拟机里所有的容器。",-1))]),e[49]||(e[49]=n("pre",null,[n("code",null,`$ docker rm -f $(docker ps -a -q)
`)],-1)),e[50]||(e[50]=n("p",null,[n("code",null,"-f"),t(" 在这里的用处是强制删除运行中的镜像。")],-1)),n("p",null,[e[21]||(e[21]=t("然后删除了全部 Docker 镜像，用的是",-1)),r(o,{href:"https://docs.docker.com/reference/commandline/rmi/"},{default:p(()=>[...e[20]||(e[20]=[t("命令 ",-1),n("code",null,"rmi",-1)])]),_:1}),e[22]||(e[22]=t(":",-1))]),e[51]||(e[51]=l(`<pre><code>$ docker rmi if $(docker images | tail -n +2 | awk &#39;{print $3}&#39;)
</code></pre><p>我重新执行了重新构建镜像、安装容器、运行微服务的整个过程。然后过了一个充满自我怀疑和沮丧的一个小时，我告诉我自己：这个错误可能不是微服务的原因。</p><p>所以我重新看到了这个错误：</p><pre><code>Do you want to continue? [Y/n] Abort.

The command &#39;/bin/sh -c apt-get install imagemagick libmagickcore-dev libmagickwand-dev&#39; returned a non-zero code: 1
</code></pre><p>这太打击我了：构建脚本好像需要有人从键盘输入 Y！ 但是，这是一个非交互的 Dockerfile 脚本啊。这里并没有键盘。</p><p>回到 Dockerfile，脚本原来是这样的：</p><pre><code>RUN apt-get update
RUN apt-get install -y nodejs nodejs-legacy npm
RUN apt-get install imagemagick libmagickcore-dev libmagickwand-dev
RUN apt-get clean
</code></pre><p>第二个<code>apt-get</code> 忘记了<code>-y</code> 标志，它用于自动应答提示所需要的“yes”。这才是错误的根本原因。</p><p>我在这条命令后面添加了<code>-y</code> ：</p><pre><code>RUN apt-get update
RUN apt-get install -y nodejs nodejs-legacy npm
RUN apt-get install -y imagemagick libmagickcore-dev libmagickwand-dev
RUN apt-get clean
</code></pre><p>猜一猜结果：经过将近两天的尝试和痛苦，容器终于正常工作了！整整两天啊！</p><p>我完成了构建工作：</p><pre><code>$ docker build -t thumbnailer:0.1 .
</code></pre><p>启动了容器：</p><pre><code>$ docker run -d -p 3001:3000 thumbnailer:0.1
</code></pre><p>获取了虚拟机的IP 地址：</p><pre><code>$ docker-machine ip default
</code></pre>`,17)),n("p",null,[e[24]||(e[24]=t("在我的浏览器里面输入 ",-1)),r(o,{href:"http://192.168.99.100:3001/"},{default:p(()=>[...e[23]||(e[23]=[t("http://192.168.99.100:3001/",-1)])]),_:1}),e[25]||(e[25]=t(" ：",-1))]),e[52]||(e[52]=n("p",null,"上传页面打开了。",-1)),e[53]||(e[53]=n("p",null,"我选择了一个图片，然后得到了这个：",-1)),e[54]||(e[54]=n("p",null,[n("img",{src:"https://deis.com/images/blog-images/containers-hard-7.png",alt:"container-diagram-7"})],-1)),e[55]||(e[55]=n("p",null,"工作了！",-1)),e[56]||(e[56]=n("p",null,"在容器里面工作了，我的第一次啊！",-1)),e[57]||(e[57]=n("h3",{id:"这让我学到了什么",tabindex:"-1"},[t("这让我学到了什么? "),n("a",{class:"header-anchor",href:"#这让我学到了什么","aria-label":"Permalink to “这让我学到了什么?”"},"​")],-1)),e[58]||(e[58]=n("p",null,"很久以前，我接受了这样一个道理：当你刚开始尝试某项技术时，即使是最简单的事情也会变得很困难。因此，我不会把自己当成最聪明的那个人，然而最近几天尝试容器的过程就是一个充满自我怀疑的旅程。",-1)),e[59]||(e[59]=n("p",null,"但是你想知道一些其它的事情吗？这篇文章是我在凌晨2点完成的，而每一个受折磨的时刻都值得了。为什么？因为这段时间你将自己全身心投入了喜欢的工作里。这件事很难，对于所有人来说都不是很容易就获得结果的。但是不要忘记：你在学习技术，运行世界的技术。",-1)),n("p",null,[e[27]||(e[27]=t("P.S. 了解一下Hello World 容器的两段视频，这里会有 ",-1)),r(o,{href:"http://twitter.com/RazielTabib"},{default:p(()=>[...e[26]||(e[26]=[t("Raziel Tabib’s",-1)])]),_:1}),e[28]||(e[28]=t(" 的精彩工作内容。",-1))]),e[60]||(e[60]=n("p",null,"注：youtube视频",-1)),e[61]||(e[61]=n("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PJ95WY2DqXo",frameborder:"0",allowfullscreen:""},null,-1)),e[62]||(e[62]=n("p",null,"千万被忘记第二部分...",-1)),e[63]||(e[63]=n("p",null,"注：youtube视频",-1)),e[64]||(e[64]=n("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lss2rZ3Ppuk",frameborder:"0",allowfullscreen:""},null,-1)),e[65]||(e[65]=n("hr",null,null,-1)),n("p",null,[e[30]||(e[30]=t("via: ",-1)),r(o,{href:"https://deis.com/blog/2015/beyond-hello-world-containers-hard-stuff"},{default:p(()=>[...e[29]||(e[29]=[t("https://deis.com/blog/2015/beyond-hello-world-containers-hard-stuff",-1)])]),_:1})]),n("p",null,[e[34]||(e[34]=t("作者：",-1)),r(o,{href:"https://deis.com/blog"},{default:p(()=>[...e[31]||(e[31]=[t("Bob Reselman",-1)])]),_:1}),e[35]||(e[35]=t(" 译者：",-1)),r(o,{href:"https://github.com/oska874"},{default:p(()=>[...e[32]||(e[32]=[t("Ezio",-1)])]),_:1}),e[36]||(e[36]=t(" 校对：",-1)),r(o,{href:"https://github.com/wxy"},{default:p(()=>[...e[33]||(e[33]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[39]||(e[39]=t("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[37]||(e[37]=[t("LCTT",-1)])]),_:1}),e[40]||(e[40]=t(" 原创编译，",-1)),r(o,{href:"https://linux.cn/"},{default:p(()=>[...e[38]||(e[38]=[t("Linux中国",-1)])]),_:1}),e[41]||(e[41]=t(" 荣誉推出",-1))])])}const x=i(u,[["render",m]]);export{D as __pageData,x as default};
