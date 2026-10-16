import{_ as n,a0 as s,w as l,s as i,ao as u,I as a,x as e,a1 as p,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"如何在Ubuntu 14.04 LTS安裝網絡爬蟲工具：Scrapy | LCTT x X-CMD","titleTemplate":false,"description":"如何在Ubuntu 14.04 LTS安裝網絡爬蟲工具：Scrapy | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Ubuntu 14.04 LTS安裝網絡爬蟲工具：Scrapy | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Ubuntu 14.04 LTS安裝網絡爬蟲工具：Scrapy | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150108 How to Install Scrapy a Web Crawling Tool in Ubuntu 14.04 LTS","title":"如何在Ubuntu 14.04 LTS安裝網絡爬蟲工具：Scrapy","tag":"201503","desc":""},"relativePath":"201503/20150108 How to Install Scrapy a Web Crawling Tool in Ubuntu 14.04 LTS.md","filePath":"[post].md"}'),m={name:"201503/20150108 How to Install Scrapy a Web Crawling Tool in Ubuntu 14.04 LTS.md"};function c(d,t,y,g,S,f){const o=s("Link");return l(),i("div",null,[t[13]||(t[13]=u(`<h1 id="如何在ubuntu-14-04-lts安裝網絡爬蟲工具-scrapy" tabindex="-1">如何在Ubuntu 14.04 LTS安裝網絡爬蟲工具：Scrapy <a class="header-anchor" href="#如何在ubuntu-14-04-lts安裝網絡爬蟲工具-scrapy" aria-label="Permalink to “如何在Ubuntu 14.04 LTS安裝網絡爬蟲工具：Scrapy”">​</a></h1><p>這是一款提取網站數據的開源工具。Scrapy框架用Python開發而成，它使抓取工作又快又簡單，且可擴展。我們已經在virtual box中創建一台虛擬機（VM）並且在上面安裝了Ubuntu 14.04 LTS。</p><h3 id="安裝-scrapy" tabindex="-1">安裝 Scrapy <a class="header-anchor" href="#安裝-scrapy" aria-label="Permalink to “安裝 Scrapy”">​</a></h3><p>Scrapy依賴於Python、開發庫和pip。Python最新的版本已經在Ubuntu上預裝了。因此我們在安裝Scrapy之前只需安裝pip和python開發庫就可以了。</p><p>pip是作為python包索引器easy_install的替代品，用於安裝和管理Python包。pip包的安裝可見圖 1。</p><pre><code>sudo apt-get install python-pip
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f1.png" alt="Fig:1 Pip installation"></p><p><em>圖:1 pip安裝</em></p><p>我們必須要用下面的命令安裝python開發庫。如果包沒有安裝那麼就會在安裝scrapy框架的時候報關於python.h頭文件的錯誤。</p><pre><code>sudo apt-get install python-dev
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f2.png" alt="Fig:2 Python Developer Libraries"></p><p><em>圖:2 Python 開發庫</em></p><p>scrapy框架既可從deb包安裝也可以從源碼安裝。在圖3中我們用pip（Python 包管理器）安裝了deb包了。</p><pre><code>sudo pip install scrapy 
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f3.png" alt="Fig:3 Scrapy Installation"></p><p><em>圖:3 Scrapy 安裝</em></p><p>圖4中scrapy的成功安裝需要一些時間。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f4.png" alt="Fig:4 Successful installation of Scrapy Framework"></p><p><em>圖:4 成功安裝Scrapy框架</em></p><h3 id="使用scrapy框架提取數據" tabindex="-1">使用scrapy框架提取數據 <a class="header-anchor" href="#使用scrapy框架提取數據" aria-label="Permalink to “使用scrapy框架提取數據”">​</a></h3><p>####基礎教程####</p><p>我們將用scrapy從fatwallet.com上提取商店名稱（賣卡的店）。首先，我們使用下面的命令新建一個scrapy項目“store name”， 見圖5。</p><pre><code>$sudo scrapy startproject store_name
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f5.png" alt="Fig:5 Creation of new project in Scrapy Framework"></p><p><em>圖:5 Scrapy框架新建項目</em></p><p>上面的命令在當前路徑創建了一個“store_name”的目錄。項目主目錄下包含的文件/文件夾見圖6。</p><pre><code>$sudo ls –lR store_name
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f6.png" alt="Fig:6 Contents of store_name project."></p><p><em>圖:6 store_name項目的內容</em></p><p>每個文件/文件夾的概要如下：</p><ul><li>scrapy.cfg 是項目配置文件</li><li>store_name/ 主目錄下的另一個文件夾。 這個目錄包含了項目的python代碼</li><li>store_name/items.py 包含了將由蜘蛛爬取的項目</li><li>store_name/pipelines.py 是管道文件</li><li>store_name/settings.py 是項目的配置文件</li><li>store_name/spiders/， 包含了用於爬取的蜘蛛</li></ul><p>由於我們要從fatwallet.com上如提取店名，因此我們如下修改文件（LCTT 譯註：這裏沒説明是哪個文件，譯者認為應該是 items.py）。</p><pre><code>import scrapy

class StoreNameItem(scrapy.Item):

   name = scrapy.Field()   #  取出卡片商店的名稱
</code></pre><p>之後我們要在項目的store_name/spiders/文件夾下寫一個新的蜘蛛。蜘蛛是一個python類，它包含了下面幾個必須的屬性：</p><ol><li>蜘蛛名 (name )</li><li>爬取起點url (start_urls)</li><li>包含了從響應中提取需要內容相應的正則表達式的解析方法。解析方法對爬蟲而言很重要。</li></ol><p>我們在store_name/spiders/目錄下創建了“store_name.py”爬蟲，並添加如下的代碼來從fatwallet.com上提取店名。爬蟲的輸出寫到文件（<strong>StoreName.txt</strong>）中，見圖7。</p><pre><code>from scrapy.selector import Selector
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
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/11/f7.png" alt="Fig:7 Output of the Spider code ."></p><p><em>圖:7 爬蟲的輸出</em></p><p><em>注意: 本教程的目的僅用於理解scrapy框架</em></p><hr>`,41)),a("p",null,[t[1]||(t[1]=e("via: ",-1)),p(o,{href:"http://linoxide.com/ubuntu-how-to/scrapy-install-ubuntu/"},{default:r(()=>[...t[0]||(t[0]=[e("http://linoxide.com/ubuntu-how-to/scrapy-install-ubuntu/",-1)])]),_:1})]),a("p",null,[t[5]||(t[5]=e("作者：",-1)),p(o,{href:"http://linoxide.com/author/naveeda/"},{default:r(()=>[...t[2]||(t[2]=[e("nido",-1)])]),_:1}),t[6]||(t[6]=e(" 譯者：",-1)),p(o,{href:"https://github.com/geekpi"},{default:r(()=>[...t[3]||(t[3]=[e("geekpi",-1)])]),_:1}),t[7]||(t[7]=e(" 校對：",-1)),p(o,{href:"https://github.com/wxy"},{default:r(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),a("p",null,[t[10]||(t[10]=e("本文由 ",-1)),p(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原創翻譯，",-1)),p(o,{href:"http://linux.cn/"},{default:r(()=>[...t[9]||(t[9]=[e("Linux中國",-1)])]),_:1}),t[12]||(t[12]=e(" 榮譽推出",-1))])])}const T=n(m,[["render",c]]);export{_ as __pageData,T as default};
