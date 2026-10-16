import{_ as n,a0 as s,w as l,s as i,ao as u,I as a,x as e,a1 as p,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"如何在Ubuntu 14.04 LTS安装网络爬虫工具：Scrapy | LCTT x X-CMD","titleTemplate":false,"description":"如何在Ubuntu 14.04 LTS安装网络爬虫工具：Scrapy | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Ubuntu 14.04 LTS安装网络爬虫工具：Scrapy | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Ubuntu 14.04 LTS安装网络爬虫工具：Scrapy | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150108 How to Install Scrapy a Web Crawling Tool in Ubuntu 14.04 LTS","title":"如何在Ubuntu 14.04 LTS安装网络爬虫工具：Scrapy","tag":"201503","desc":""},"relativePath":"201503/20150108 How to Install Scrapy a Web Crawling Tool in Ubuntu 14.04 LTS.md","filePath":"[post].md"}'),m={name:"201503/20150108 How to Install Scrapy a Web Crawling Tool in Ubuntu 14.04 LTS.md"};function c(d,t,y,g,S,f){const o=s("Link");return l(),i("div",null,[t[13]||(t[13]=u(`<h1 id="如何在ubuntu-14-04-lts安装网络爬虫工具-scrapy" tabindex="-1">如何在Ubuntu 14.04 LTS安装网络爬虫工具：Scrapy <a class="header-anchor" href="#如何在ubuntu-14-04-lts安装网络爬虫工具-scrapy" aria-label="Permalink to “如何在Ubuntu 14.04 LTS安装网络爬虫工具：Scrapy”">​</a></h1><p>这是一款提取网站数据的开源工具。Scrapy框架用Python开发而成，它使抓取工作又快又简单，且可扩展。我们已经在virtual box中创建一台虚拟机（VM）并且在上面安装了Ubuntu 14.04 LTS。</p><h3 id="安装-scrapy" tabindex="-1">安装 Scrapy <a class="header-anchor" href="#安装-scrapy" aria-label="Permalink to “安装 Scrapy”">​</a></h3><p>Scrapy依赖于Python、开发库和pip。Python最新的版本已经在Ubuntu上预装了。因此我们在安装Scrapy之前只需安装pip和python开发库就可以了。</p><p>pip是作为python包索引器easy_install的替代品，用于安装和管理Python包。pip包的安装可见图 1。</p><pre><code>sudo apt-get install python-pip
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f1.png" alt="Fig:1 Pip installation"></p><p><em>图:1 pip安装</em></p><p>我们必须要用下面的命令安装python开发库。如果包没有安装那么就会在安装scrapy框架的时候报关于python.h头文件的错误。</p><pre><code>sudo apt-get install python-dev
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f2.png" alt="Fig:2 Python Developer Libraries"></p><p><em>图:2 Python 开发库</em></p><p>scrapy框架既可从deb包安装也可以从源码安装。在图3中我们用pip（Python 包管理器）安装了deb包了。</p><pre><code>sudo pip install scrapy 
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f3.png" alt="Fig:3 Scrapy Installation"></p><p><em>图:3 Scrapy 安装</em></p><p>图4中scrapy的成功安装需要一些时间。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f4.png" alt="Fig:4 Successful installation of Scrapy Framework"></p><p><em>图:4 成功安装Scrapy框架</em></p><h3 id="使用scrapy框架提取数据" tabindex="-1">使用scrapy框架提取数据 <a class="header-anchor" href="#使用scrapy框架提取数据" aria-label="Permalink to “使用scrapy框架提取数据”">​</a></h3><p>####基础教程####</p><p>我们将用scrapy从fatwallet.com上提取商店名称（卖卡的店）。首先，我们使用下面的命令新建一个scrapy项目“store name”， 见图5。</p><pre><code>$sudo scrapy startproject store_name
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f5.png" alt="Fig:5 Creation of new project in Scrapy Framework"></p><p><em>图:5 Scrapy框架新建项目</em></p><p>上面的命令在当前路径创建了一个“store_name”的目录。项目主目录下包含的文件/文件夹见图6。</p><pre><code>$sudo ls –lR store_name
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f6.png" alt="Fig:6 Contents of store_name project."></p><p><em>图:6 store_name项目的内容</em></p><p>每个文件/文件夹的概要如下：</p><ul><li>scrapy.cfg 是项目配置文件</li><li>store_name/ 主目录下的另一个文件夹。 这个目录包含了项目的python代码</li><li>store_name/items.py 包含了将由蜘蛛爬取的项目</li><li>store_name/pipelines.py 是管道文件</li><li>store_name/settings.py 是项目的配置文件</li><li>store_name/spiders/， 包含了用于爬取的蜘蛛</li></ul><p>由于我们要从fatwallet.com上如提取店名，因此我们如下修改文件（LCTT 译注：这里没说明是哪个文件，译者认为应该是 items.py）。</p><pre><code>import scrapy

class StoreNameItem(scrapy.Item):

   name = scrapy.Field()   #  取出卡片商店的名称
</code></pre><p>之后我们要在项目的store_name/spiders/文件夹下写一个新的蜘蛛。蜘蛛是一个python类，它包含了下面几个必须的属性：</p><ol><li>蜘蛛名 (name )</li><li>爬取起点url (start_urls)</li><li>包含了从响应中提取需要内容相应的正则表达式的解析方法。解析方法对爬虫而言很重要。</li></ol><p>我们在store_name/spiders/目录下创建了“store_name.py”爬虫，并添加如下的代码来从fatwallet.com上提取店名。爬虫的输出写到文件（<strong>StoreName.txt</strong>）中，见图7。</p><pre><code>from scrapy.selector import Selector
from scrapy.spider import BaseSpider
from scrapy.http import Request
from scrapy.http import FormRequest
import re
class StoreNameItem(BaseSpider):
name = &quot;storename&quot;
allowed_domains = [&quot;fatwallet.com&quot;]
start_urls = [&quot;http://fatwallet.com/cash-back-shopping/&quot;]

def parse(self,response):
output = open(&#39;StoreName.txt&#39;,&#39;w&#39;)
resp = Selector(response)

tags = resp.xpath(&#39;//tr[@class=&quot;storeListRow&quot;]|\\
         //tr[@class=&quot;storeListRow even&quot;]|\\
         //tr[@class=&quot;storeListRow even last&quot;]|\\
          //tr[@class=&quot;storeListRow last&quot;]&#39;).extract()
for i in tags:
i = i.encode(&#39;utf-8&#39;, &#39;ignore&#39;).strip()
store_name = &#39;&#39;
if re.search(r&quot;class=\\&quot;storeListStoreName\\&quot;&gt;.*?&lt;&quot;,i,re.I|re.S):
store_name = re.search(r&quot;class=\\&quot;storeListStoreName\\&quot;&gt;.*?&lt;&quot;,i,re.I|re.S).group()
store_name = re.search(r&quot;&gt;.*?&lt;&quot;,store_name,re.I|re.S).group()
store_name = re.sub(r&#39;&gt;&#39;,&quot;&quot;,re.sub(r&#39;&lt;&#39;,&quot;&quot;,store_name,re.I))
store_name = re.sub(r&#39;&amp;amp;&#39;,&quot;&amp;&quot;,re.sub(r&#39;&amp;amp;&#39;,&quot;&amp;&quot;,store_name,re.I))
#print store_name
output.write(store_name+&quot;&quot;+&quot;\\n&quot;)
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f7.png" alt="Fig:7 Output of the Spider code ."></p><p><em>图:7 爬虫的输出</em></p><p><em>注意: 本教程的目的仅用于理解scrapy框架</em></p><hr>`,41)),a("p",null,[t[1]||(t[1]=e("via: ",-1)),p(o,{href:"http://linoxide.com/ubuntu-how-to/scrapy-install-ubuntu/"},{default:r(()=>[...t[0]||(t[0]=[e("http://linoxide.com/ubuntu-how-to/scrapy-install-ubuntu/",-1)])]),_:1})]),a("p",null,[t[5]||(t[5]=e("作者：",-1)),p(o,{href:"http://linoxide.com/author/naveeda/"},{default:r(()=>[...t[2]||(t[2]=[e("nido",-1)])]),_:1}),t[6]||(t[6]=e(" 译者：",-1)),p(o,{href:"https://github.com/geekpi"},{default:r(()=>[...t[3]||(t[3]=[e("geekpi",-1)])]),_:1}),t[7]||(t[7]=e(" 校对：",-1)),p(o,{href:"https://github.com/wxy"},{default:r(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),a("p",null,[t[10]||(t[10]=e("本文由 ",-1)),p(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原创翻译，",-1)),p(o,{href:"http://linux.cn/"},{default:r(()=>[...t[9]||(t[9]=[e("Linux中国",-1)])]),_:1}),t[12]||(t[12]=e(" 荣誉推出",-1))])])}const T=n(m,[["render",c]]);export{_ as __pageData,T as default};
