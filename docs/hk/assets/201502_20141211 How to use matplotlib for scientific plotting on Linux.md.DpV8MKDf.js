import{_ as e,a0 as s,w as m,s as r,ao as a,I as n,x as l,a1 as i,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const D=JSON.parse('{"title":"在Linux中使用matplotlib進行科學畫圖 | LCTT x X-CMD","titleTemplate":false,"description":"在Linux中使用matplotlib進行科學畫圖 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Linux中使用matplotlib進行科學畫圖 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Linux中使用matplotlib進行科學畫圖 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20141211 How to use matplotlib for scientific plotting on Linux","title":"在Linux中使用matplotlib進行科學畫圖","tag":"201502","desc":""},"relativePath":"201502/20141211 How to use matplotlib for scientific plotting on Linux.md","filePath":"[post].md"}'),u={name:"201502/20141211 How to use matplotlib for scientific plotting on Linux.md"};function y(d,t,f,b,x,g){const p=s("Link");return m(),r("div",null,[t[19]||(t[19]=a('<h1 id="在linux中使用matplotlib進行科學畫圖" tabindex="-1">在Linux中使用matplotlib進行科學畫圖 <a class="header-anchor" href="#在linux中使用matplotlib進行科學畫圖" aria-label="Permalink to “在Linux中使用matplotlib進行科學畫圖”">​</a></h1><p>如果你想要在Linxu中獲得一個高效、自動化、高質量的科學畫圖的解決方案，應該考慮嘗試下matplotlib庫。Matplotlib是基於python的開源科學測繪包，基於python軟件基金會許可證發佈。大量的文檔和例子、集成了Python和Numpy科學計算包、以及自動化能力，是作為Linux環境中進行科學畫圖的可靠選擇的幾個原因。這個教程將提供幾個用matplotlib畫圖的例子。</p><p>###特性###</p><ul><li>支持眾多的圖表類型，如：bar,box,contour,histogram,scatter,line plots....</li><li>基於python的語法</li><li>集成Numpy科學計算包</li><li>數據源可以是 python 的列表、鍵值對和數組</li><li>可定製的圖表格式（座標軸縮放、標籤位置及標籤內容等)</li><li>可定製文本（字體，大小，位置...)</li><li>支持TeX格式（等式，符號，希臘字體...)</li><li>與IPython相兼容（允許在 python shell 中與圖表交互）</li><li>自動化（使用 Python 循環創建圖表）</li><li>用Python 的循環迭代生成圖片</li><li>保存所繪圖片格式為圖片文件，如：png,pdf,ps,eps,svg等</li></ul><p>基於Python語法的matplotlib是其許多特性和高效工作流的基礎。世面上有許多用於繪製高質量圖的科學繪圖包，但是這些包允許你直接在你的Python代碼中去使用嗎？除此以外，這些包允許你創建可以保存為圖片文件的圖片嗎？Matplotlib允許你完成所有的這些任務。從而你可以節省時間，使用它你能夠花更少的時間創建更多的圖片。</p>',5)),n("p",null,[t[1]||(t[1]=l("###安裝### 安裝Python和Numpy包是使用Matplotlib的前提，安裝Numpy的指引請見",-1)),i(p,{href:"http://xmodulo.com/numpy-scientific-computing-linux.html"},{default:o(()=>[...t[0]||(t[0]=[l("該鏈接",-1)])]),_:1}),t[2]||(t[2]=l("。",-1))]),t[20]||(t[20]=a(`<p>可以通過如下命令在Debian或Ubuntu中安裝Matplotlib：</p><pre><code>$ sudo apt-get install python-matplotlib 
</code></pre><p>在Fedora或CentOS/RHEL環境則可用如下命令：</p><pre><code>$ sudo yum install python-matplotlib 
</code></pre><p>###Matplotlib 例子###</p><p>本教程會提供幾個繪圖例子演示如何使用matplotlib:</p><ul><li>離散圖和線性圖</li><li>柱狀圖</li><li>餅狀圖</li></ul><p>在這些例子中我們將用Python腳本來執行Mapplotlib命令。注意numpy和matplotlib模組需要通過import命令在腳本中進行導入。</p><p>np為nuupy模組的命名空間引用，plt為matplotlib.pyplot的命名空間引用：</p><pre><code>import numpy as np
import matplotlib.pyplot as plt
</code></pre><p>###例1：離散和線性圖###</p><p>第一個腳本，script1.py 完成如下任務:</p><ul><li>創建3個數據集（xData,yData1和yData2)</li><li>創建一個寬8英寸、高6英寸的圖(賦值1）</li><li>設置圖畫的標題、x軸標籤、y軸標籤（字號均為14）</li><li>繪製第一個數據集：yData1為xData數據集的函數，用圓點標識的離散藍線，標識為&quot;y1 data&quot;</li><li>繪製第二個數據集：yData2為xData數據集的函數，採用紅實線，標識為&quot;y2 data&quot;</li><li>把圖例放置在圖的左上角</li><li>保存圖片為PNG格式文件</li></ul><p>script1.py的內容如下：</p><pre><code>import numpy as np
import matplotlib.pyplot as plt
 
xData = np.arange(0, 10, 1)
yData1 = xData.__pow__(2.0)
yData2 = np.arange(15, 61, 5)
plt.figure(num=1, figsize=(8, 6))
plt.title(&#39;Plot 1&#39;, size=14)
plt.xlabel(&#39;x-axis&#39;, size=14)
plt.ylabel(&#39;y-axis&#39;, size=14)
plt.plot(xData, yData1, color=&#39;b&#39;, linestyle=&#39;--&#39;, marker=&#39;o&#39;, label=&#39;y1 data&#39;)
plt.plot(xData, yData2, color=&#39;r&#39;, linestyle=&#39;-&#39;, label=&#39;y2 data&#39;)
plt.legend(loc=&#39;upper left&#39;)
plt.savefig(&#39;images/plot1.png&#39;, format=&#39;png&#39;)
</code></pre><p>所畫之圖如下：</p><p><img src="https://farm8.staticflickr.com/7529/15927002365_f5ae11cf02_z.jpg" alt=""></p><p>###例2：柱狀圖###</p><p>第二個腳本，script2.py 完成如下任務：</p><ul><li>創建一個包含1000個隨機樣本的正態分佈數據集。</li><li>創建一個寬8英寸、高6英寸的圖(賦值1）</li><li>設置圖的標題、x軸標籤、y軸標籤（字號均為14）</li><li>用samples這個數據集畫一個40個柱狀，邊從-10到10的柱狀圖</li><li>添加文本,用TeX格式顯示希臘字母mu和sigma(字號為16）</li><li>保存圖片為PNG格式。</li></ul><p>script2.py代碼如下：</p><pre><code>import numpy as np
import matplotlib.pyplot as plt
 
mu = 0.0
sigma = 2.0
samples = np.random.normal(loc=mu, scale=sigma, size=1000)
plt.figure(num=1, figsize=(8, 6))
plt.title(&#39;Plot 2&#39;, size=14)
plt.xlabel(&#39;value&#39;, size=14)
plt.ylabel(&#39;counts&#39;, size=14)
plt.hist(samples, bins=40, range=(-10, 10))
plt.text(-9, 100, r&#39;$\\mu$ = 0.0, $\\sigma$ = 2.0&#39;, size=16)
plt.savefig(&#39;images/plot2.png&#39;, format=&#39;png&#39;)
</code></pre><p>結果見如下鏈接：</p><p><img src="https://farm8.staticflickr.com/7531/15304765024_1cc271b6e0_z.jpg" alt=""></p><p>###例3：餅狀圖###</p><p>第三個腳本，script3.py 完成如下任務：</p><ul><li>創建一個包含5個整數的列表</li><li>創建一個寬6英寸、高6英寸的圖(賦值1）</li><li>添加一個長寬比為1的軸圖</li><li>設置圖的標題（字號為14）</li><li>用data列表畫一個包含標籤的餅狀圖</li><li>保存圖為PNG格式</li></ul><p>腳本script3.py的代碼如下：</p><pre><code>import numpy as np
import matplotlib.pyplot as plt
 
data = [33, 25, 20, 12, 10]
plt.figure(num=1, figsize=(6, 6))
plt.axes(aspect=1)
plt.title(&#39;Plot 3&#39;, size=14)
plt.pie(data, labels=(&#39;Group 1&#39;, &#39;Group 2&#39;, &#39;Group 3&#39;, &#39;Group 4&#39;, &#39;Group 5&#39;))
plt.savefig(&#39;images/plot3.png&#39;, format=&#39;png&#39;)
</code></pre><p>結果如下鏈接所示：</p><p><img src="https://farm8.staticflickr.com/7504/15926356092_7c3e5217aa_z.jpg" alt=""></p><p>###總結###</p>`,32)),n("p",null,[t[4]||(t[4]=l("這個教程提供了幾個用matplotlib科學畫圖包進行畫圖的例子，Matplotlib是在Linux環境中用於解決科學畫圖的絕佳方案，表現在其無縫地和Python、Numpy連接、自動化能力，和提供多種自定義的高質量的畫圖產品。matplotlib包的文檔和例子詳見",-1)),i(p,{href:"http://matplotlib.org/"},{default:o(()=>[...t[3]||(t[3]=[l("這裏",-1)])]),_:1}),t[5]||(t[5]=l("。",-1))]),t[21]||(t[21]=n("hr",null,null,-1)),n("p",null,[t[7]||(t[7]=l("via: ",-1)),i(p,{href:"http://xmodulo.com/matplotlib-scientific-plotting-linux.html"},{default:o(()=>[...t[6]||(t[6]=[l("http://xmodulo.com/matplotlib-scientific-plotting-linux.html",-1)])]),_:1})]),n("p",null,[t[11]||(t[11]=l("作者：",-1)),i(p,{href:"http://xmodulo.com/author/joshua"},{default:o(()=>[...t[8]||(t[8]=[l("Joshua Reed",-1)])]),_:1}),t[12]||(t[12]=l(" 譯者：",-1)),i(p,{href:"https://github.com/ideas4u"},{default:o(()=>[...t[9]||(t[9]=[l("ideas4u",-1)])]),_:1}),t[13]||(t[13]=l(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:o(()=>[...t[10]||(t[10]=[l("wxy",-1)])]),_:1})]),n("p",null,[t[16]||(t[16]=l("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[14]||(t[14]=[l("LCTT",-1)])]),_:1}),t[17]||(t[17]=l(" 原創翻譯，",-1)),i(p,{href:"http://linux.cn/"},{default:o(()=>[...t[15]||(t[15]=[l("Linux中國",-1)])]),_:1}),t[18]||(t[18]=l(" 榮譽推出",-1))])])}const P=e(u,[["render",y]]);export{D as __pageData,P as default};
