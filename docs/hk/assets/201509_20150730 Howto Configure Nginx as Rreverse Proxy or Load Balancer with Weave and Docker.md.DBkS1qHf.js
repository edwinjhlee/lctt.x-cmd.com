import{_ as s,a0 as u,w as i,s as d,I as a,x as n,a1 as t,A as r,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const c=JSON.parse('{"title":"如何使用 Weave 以及 Docker 搭建 Nginx 反向代理/負載均衡服務器 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Weave 以及 Docker 搭建 Nginx 反向代理/負載均衡服務器 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Weave 以及 Docker 搭建 Nginx 反向代理/負載均衡服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Weave 以及 Docker 搭建 Nginx 反向代理/負載均衡服務器 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150730 Howto Configure Nginx as Rreverse Proxy or Load Balancer with Weave and Docker","title":"如何使用 Weave 以及 Docker 搭建 Nginx 反向代理/負載均衡服務器","tag":"201509","desc":""},"relativePath":"201509/20150730 Howto Configure Nginx as Rreverse Proxy or Load Balancer with Weave and Docker.md","filePath":"[post].md"}'),p={name:"201509/20150730 Howto Configure Nginx as Rreverse Proxy or Load Balancer with Weave and Docker.md"};function w(v,e,x,g,m,h){const o=u("Link");return i(),d("div",null,[e[18]||(e[18]=a("h1",{id:"如何使用-weave-以及-docker-搭建-nginx-反向代理-負載均衡服務器",tabindex:"-1"},[n("如何使用 Weave 以及 Docker 搭建 Nginx 反向代理/負載均衡服務器 "),a("a",{class:"header-anchor",href:"#如何使用-weave-以及-docker-搭建-nginx-反向代理-負載均衡服務器","aria-label":"Permalink to “如何使用 Weave 以及 Docker 搭建 Nginx 反向代理/負載均衡服務器”"},"​")],-1)),e[19]||(e[19]=a("p",null,"Hi， 今天我們將會學習如何使用 Weave 和 Docker 搭建 Nginx 的反向代理/負載均衡服務器。Weave 可以創建一個虛擬網絡將 Docker 容器彼此連接在一起，支持跨主機部署及自動發現。它可以讓我們更加專注於應用的開發，而不是基礎架構。Weave 提供了一個如此棒的環境，彷彿它的所有容器都屬於同個網絡，不需要端口/映射/連接等的配置。容器中的應用提供的服務在 weave 網絡中可以輕易地被外部世界訪問，不論你的容器運行在哪裏。在這個教程裏我們將會使用 weave 快速並且簡單地將 nginx web 服務器部署為一個負載均衡器，反向代理一個運行在 Amazon Web Services 裏面多個節點上的 docker 容器中的簡單 php 應用。這裏我們將會介紹 WeaveDNS，它提供一個不需要改變代碼就可以讓容器利用主機名找到的簡單方式，並且能夠讓其他容器通過主機名連接彼此。",-1)),e[20]||(e[20]=a("p",null,"在這篇教程裏，我們將使用 nginx 來將負載均衡分配到一個運行 Apache 的容器集合。最簡單輕鬆的方法就是使用 Weave 來把運行在 ubuntu 上的 docker 容器中的 nginx 配置成負載均衡服務器。",-1)),e[21]||(e[21]=a("h3",{id:"_1-搭建-aws-實例",tabindex:"-1"},[n("1. 搭建 AWS 實例 "),a("a",{class:"header-anchor",href:"#_1-搭建-aws-實例","aria-label":"Permalink to “1. 搭建 AWS 實例”"},"​")],-1)),a("p",null,[e[1]||(e[1]=n("首先，我們需要搭建 Amzaon Web Service 實例，這樣才能在 ubuntu 下用 weave 跑 docker 容器。我們將會使用",-1)),t(o,{href:"http://console.aws.amazon.com/"},{default:r(()=>[...e[0]||(e[0]=[n("AWS 命令列",-1)])]),_:1}),e[2]||(e[2]=n(" 來搭建和配置兩個 AWS EC2 實例。在這裏，我們使用最小的可用實例，t1.micro。我們需要一個有效的",-1)),e[3]||(e[3]=a("strong",null,"Amazon Web Services 賬户",-1)),e[4]||(e[4]=n("使用 AWS 命令列界面來搭建和配置。我們先在 AWS 命令列界面下使用下面的命令將 github 上的 weave 倉庫克隆下來。",-1))]),e[22]||(e[22]=l(`<pre><code>$ git clone http://github.com/fintanr/weave-gs
$ cd weave-gs/aws-nginx-ubuntu-simple
</code></pre><p>在克隆完倉庫之後，我們執行下面的腳本，這個腳本將會部署兩個 t1.micro 實例，每個實例中都是 ubuntu 作為操作系統並用 weave 跑着 docker 容器。</p><pre><code>$ sudo ./demo-aws-setup.sh
</code></pre><p>在這裏，我們將會在以後用到這些實例的 IP 地址。這些地址儲存在一個 weavedemo.env 文件中，這個文件創建於執行 demo-aws-setup.sh 腳本期間。為了獲取這些 IP 地址，我們需要執行下面的命令，命令輸出類似下面的信息。</p><pre><code>$ cat weavedemo.env

export WEAVE_AWS_DEMO_HOST1=52.26.175.175
export WEAVE_AWS_DEMO_HOST2=52.26.83.141
export WEAVE_AWS_DEMO_HOSTCOUNT=2
export WEAVE_AWS_DEMO_HOSTS=(52.26.175.175 52.26.83.141)
</code></pre><p>請注意這些不是固定的 IP 地址，AWS 會為我們的實例動態地分配 IP 地址。</p><p>我們在 bash 下執行下面的命令使環境變量生效。</p><pre><code> . ./weavedemo.env
</code></pre><h3 id="_2-啓動-weave-和-weavedns" tabindex="-1">2. 啓動 Weave 和 WeaveDNS <a class="header-anchor" href="#_2-啓動-weave-和-weavedns" aria-label="Permalink to “2. 啓動 Weave 和 WeaveDNS”">​</a></h3><p>在安裝完實例之後，我們將會在每台主機上啓動 weave 以及 weavedns。Weave 以及 weavedns 使得我們能夠輕易地將容器部署到一個全新的基礎架構以及配置中， 不需要改變代碼，也不需要去理解像 Ambassador 容器以及 Link 機制之類的概念。下面是在第一台主機上啓動 weave 以及 weavedns 的命令。</p><pre><code>ssh -i weavedemo-key.pem ubuntu@$WEAVE_AWS_DEMO_HOST1
$ sudo weave launch
$ sudo weave launch-dns 10.2.1.1/24
</code></pre><p>下一步，我也準備在第二台主機上啓動 weave 以及 weavedns。</p><pre><code>ssh -i weavedemo-key.pem ubuntu@$WEAVE_AWS_DEMO_HOST2
$ sudo weave launch $WEAVE_AWS_DEMO_HOST1
$ sudo weave launch-dns 10.2.1.2/24
</code></pre><h3 id="_3-啓動應用容器" tabindex="-1">3. 啓動應用容器 <a class="header-anchor" href="#_3-啓動應用容器" aria-label="Permalink to “3. 啓動應用容器”">​</a></h3><p>現在，我們準備跨兩台主機啓動六個容器，這兩台主機都用 Apache2 Web 服務實例跑着簡單的 php 網站。為了在第一個 Apache2 Web 服務器實例跑三個容器， 我們將會使用下面的命令。</p><pre><code>ssh -i weavedemo-key.pem ubuntu@$WEAVE_AWS_DEMO_HOST1
$ sudo weave run --with-dns 10.3.1.1/24 -h ws1.weave.local fintanr/weave-gs-nginx-apache
$ sudo weave run --with-dns 10.3.1.2/24 -h ws2.weave.local fintanr/weave-gs-nginx-apache
$ sudo weave run --with-dns 10.3.1.3/24 -h ws3.weave.local fintanr/weave-gs-nginx-apache
</code></pre><p>在那之後，我們將會在第二個實例上啓動另外三個容器，請使用下面的命令。</p><pre><code>ssh -i weavedemo-key.pem ubuntu@$WEAVE_AWS_DEMO_HOST2
$ sudo weave run --with-dns 10.3.1.4/24 -h ws4.weave.local fintanr/weave-gs-nginx-apache
$ sudo weave run --with-dns 10.3.1.5/24 -h ws5.weave.local fintanr/weave-gs-nginx-apache
$ sudo weave run --with-dns 10.3.1.6/24 -h ws6.weave.local fintanr/weave-gs-nginx-apache
</code></pre><p>注意: 在這裏，--with-dns 選項告訴容器使用 weavedns 來解析主機名，-h x.weave.local 則使得 weavedns 能夠解析該主機。</p><h3 id="_4-啓動-nginx-容器" tabindex="-1">4. 啓動 Nginx 容器 <a class="header-anchor" href="#_4-啓動-nginx-容器" aria-label="Permalink to “4. 啓動 Nginx 容器”">​</a></h3><p>在應用容器如預期的運行後，我們將會啓動 nginx 容器，它將會在六個應用容器服務之間輪詢並提供反向代理或者負載均衡。 為了啓動 nginx 容器，請使用下面的命令。</p><pre><code>ssh -i weavedemo-key.pem ubuntu@$WEAVE_AWS_DEMO_HOST1
$ sudo weave run --with-dns 10.3.1.7/24 -ti -h nginx.weave.local -d -p 80:80 fintanr/weave-gs-nginx-simple
</code></pre><p>因此，我們的 nginx 容器在 $WEAVE_AWS_DEMO_HOST1 上公開地暴露成為一個 http 服務器。</p><h3 id="_5-測試負載均衡服務器" tabindex="-1">5. 測試負載均衡服務器 <a class="header-anchor" href="#_5-測試負載均衡服務器" aria-label="Permalink to “5. 測試負載均衡服務器”">​</a></h3><p>為了測試我們的負載均衡服務器是否可以工作，我們執行一段可以發送 http 請求給 nginx 容器的腳本。我們將會發送6個請求，這樣我們就能看到 nginx 在一次的輪詢中服務於每台 web 服務器之間。</p><pre><code>$ ./access-aws-hosts.sh

{
&quot;message&quot; : &quot;Hello Weave - nginx example&quot;,
&quot;hostname&quot; : &quot;ws1.weave.local&quot;,
&quot;date&quot; : &quot;2015-06-26 12:24:23&quot;
}
{
&quot;message&quot; : &quot;Hello Weave - nginx example&quot;,
&quot;hostname&quot; : &quot;ws2.weave.local&quot;,
&quot;date&quot; : &quot;2015-06-26 12:24:23&quot;
}
{
&quot;message&quot; : &quot;Hello Weave - nginx example&quot;,
&quot;hostname&quot; : &quot;ws3.weave.local&quot;,
&quot;date&quot; : &quot;2015-06-26 12:24:23&quot;
}
{
&quot;message&quot; : &quot;Hello Weave - nginx example&quot;,
&quot;hostname&quot; : &quot;ws4.weave.local&quot;,
&quot;date&quot; : &quot;2015-06-26 12:24:23&quot;
}
{
&quot;message&quot; : &quot;Hello Weave - nginx example&quot;,
&quot;hostname&quot; : &quot;ws5.weave.local&quot;,
&quot;date&quot; : &quot;2015-06-26 12:24:23&quot;
}
{
&quot;message&quot; : &quot;Hello Weave - nginx example&quot;,
&quot;hostname&quot; : &quot;ws6.weave.local&quot;,
&quot;date&quot; : &quot;2015-06-26 12:24:23&quot;
}
</code></pre><h3 id="結束語" tabindex="-1">結束語 <a class="header-anchor" href="#結束語" aria-label="Permalink to “結束語”">​</a></h3><p>我們最終成功地將 nginx 配置成一個反向代理/負載均衡服務器，通過使用 weave 以及運行在 AWS（Amazon Web Service）EC2 裏面的 ubuntu 服務器中的 docker。從上面的步驟輸出可以清楚的看到我們已經成功地配置了 nginx。我們可以看到請求在一次輪詢中被髮送到6個應用容器，這些容器在 Apache2 Web 服務器中跑着 PHP 應用。在這裏，我們部署了一個容器化的 PHP 應用，使用 nginx 橫跨多台在 AWS EC2 上的主機而不需要改變代碼，利用 weavedns 使得每個容器連接在一起，只需要主機名就夠了，眼前的這些便捷， 都要歸功於 weave 以及 weavedns。</p><p>如果你有任何的問題、建議、反饋，請在評論中註明，這樣我們才能夠做得更好，謝謝:-）</p><hr>`,30)),a("p",null,[e[6]||(e[6]=n("via: ",-1)),t(o,{href:"http://linoxide.com/linux-how-to/nginx-load-balancer-weave-docker/"},{default:r(()=>[...e[5]||(e[5]=[n("http://linoxide.com/linux-how-to/nginx-load-balancer-weave-docker/",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=n("作者：",-1)),t(o,{href:"http://linoxide.com/author/arunp/"},{default:r(()=>[...e[7]||(e[7]=[n("Arun Pyasi",-1)])]),_:1}),e[11]||(e[11]=n(" 譯者：",-1)),t(o,{href:"https://github.com/dingdongnigetou"},{default:r(()=>[...e[8]||(e[8]=[n("dingdongnigetou",-1)])]),_:1}),e[12]||(e[12]=n(" 校對：",-1)),t(o,{href:"https://github.com/wxy"},{default:r(()=>[...e[9]||(e[9]=[n("wxy",-1)])]),_:1})]),a("p",null,[e[15]||(e[15]=n("本文由 ",-1)),t(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[13]||(e[13]=[n("LCTT",-1)])]),_:1}),e[16]||(e[16]=n(" 原創翻譯，",-1)),t(o,{href:"https://linux.cn/"},{default:r(()=>[...e[14]||(e[14]=[n("Linux中國",-1)])]),_:1}),e[17]||(e[17]=n(" 榮譽推出",-1))])])}const A=s(p,[["render",w]]);export{c as __pageData,A as default};
