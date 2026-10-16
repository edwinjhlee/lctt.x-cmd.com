import{_ as e,a0 as s,w as m,s as r,ao as a,I as n,x as l,a1 as i,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const D=JSON.parse('{"title":"在Linux中使用matplotlib进行科学画图 | LCTT x X-CMD","titleTemplate":false,"description":"在Linux中使用matplotlib进行科学画图 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Linux中使用matplotlib进行科学画图 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Linux中使用matplotlib进行科学画图 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20141211 How to use matplotlib for scientific plotting on Linux","title":"在Linux中使用matplotlib进行科学画图","tag":"201502","desc":""},"relativePath":"201502/20141211 How to use matplotlib for scientific plotting on Linux.md","filePath":"[post].md"}'),u={name:"201502/20141211 How to use matplotlib for scientific plotting on Linux.md"};function y(d,t,f,b,x,g){const p=s("Link");return m(),r("div",null,[t[19]||(t[19]=a('<h1 id="在linux中使用matplotlib进行科学画图" tabindex="-1">在Linux中使用matplotlib进行科学画图 <a class="header-anchor" href="#在linux中使用matplotlib进行科学画图" aria-label="Permalink to “在Linux中使用matplotlib进行科学画图”">​</a></h1><p>如果你想要在Linxu中获得一个高效、自动化、高质量的科学画图的解决方案，应该考虑尝试下matplotlib库。Matplotlib是基于python的开源科学测绘包，基于python软件基金会许可证发布。大量的文档和例子、集成了Python和Numpy科学计算包、以及自动化能力，是作为Linux环境中进行科学画图的可靠选择的几个原因。这个教程将提供几个用matplotlib画图的例子。</p><p>###特性###</p><ul><li>支持众多的图表类型，如：bar,box,contour,histogram,scatter,line plots....</li><li>基于python的语法</li><li>集成Numpy科学计算包</li><li>数据源可以是 python 的列表、键值对和数组</li><li>可定制的图表格式（坐标轴缩放、标签位置及标签内容等)</li><li>可定制文本（字体，大小，位置...)</li><li>支持TeX格式（等式，符号，希腊字体...)</li><li>与IPython相兼容（允许在 python shell 中与图表交互）</li><li>自动化（使用 Python 循环创建图表）</li><li>用Python 的循环迭代生成图片</li><li>保存所绘图片格式为图片文件，如：png,pdf,ps,eps,svg等</li></ul><p>基于Python语法的matplotlib是其许多特性和高效工作流的基础。世面上有许多用于绘制高质量图的科学绘图包，但是这些包允许你直接在你的Python代码中去使用吗？除此以外，这些包允许你创建可以保存为图片文件的图片吗？Matplotlib允许你完成所有的这些任务。从而你可以节省时间，使用它你能够花更少的时间创建更多的图片。</p>',5)),n("p",null,[t[1]||(t[1]=l("###安装### 安装Python和Numpy包是使用Matplotlib的前提，安装Numpy的指引请见",-1)),i(p,{href:"http://xmodulo.com/numpy-scientific-computing-linux.html"},{default:o(()=>[...t[0]||(t[0]=[l("该链接",-1)])]),_:1}),t[2]||(t[2]=l("。",-1))]),t[20]||(t[20]=a(`<p>可以通过如下命令在Debian或Ubuntu中安装Matplotlib：</p><pre><code>$ sudo apt-get install python-matplotlib 
</code></pre><p>在Fedora或CentOS/RHEL环境则可用如下命令：</p><pre><code>$ sudo yum install python-matplotlib 
</code></pre><p>###Matplotlib 例子###</p><p>本教程会提供几个绘图例子演示如何使用matplotlib:</p><ul><li>离散图和线性图</li><li>柱状图</li><li>饼状图</li></ul><p>在这些例子中我们将用Python脚本来执行Mapplotlib命令。注意numpy和matplotlib模块需要通过import命令在脚本中进行导入。</p><p>np为nuupy模块的命名空间引用，plt为matplotlib.pyplot的命名空间引用：</p><pre><code>import numpy as np
import matplotlib.pyplot as plt
</code></pre><p>###例1：离散和线性图###</p><p>第一个脚本，script1.py 完成如下任务:</p><ul><li>创建3个数据集（xData,yData1和yData2)</li><li>创建一个宽8英寸、高6英寸的图(赋值1）</li><li>设置图画的标题、x轴标签、y轴标签（字号均为14）</li><li>绘制第一个数据集：yData1为xData数据集的函数，用圆点标识的离散蓝线，标识为&quot;y1 data&quot;</li><li>绘制第二个数据集：yData2为xData数据集的函数，采用红实线，标识为&quot;y2 data&quot;</li><li>把图例放置在图的左上角</li><li>保存图片为PNG格式文件</li></ul><p>script1.py的内容如下：</p><pre><code>import numpy as np
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
</code></pre><p>所画之图如下：</p><p><img src="https://farm8.staticflickr.com/7529/15927002365_f5ae11cf02_z.jpg" alt=""></p><p>###例2：柱状图###</p><p>第二个脚本，script2.py 完成如下任务：</p><ul><li>创建一个包含1000个随机样本的正态分布数据集。</li><li>创建一个宽8英寸、高6英寸的图(赋值1）</li><li>设置图的标题、x轴标签、y轴标签（字号均为14）</li><li>用samples这个数据集画一个40个柱状，边从-10到10的柱状图</li><li>添加文本,用TeX格式显示希腊字母mu和sigma(字号为16）</li><li>保存图片为PNG格式。</li></ul><p>script2.py代码如下：</p><pre><code>import numpy as np
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
</code></pre><p>结果见如下链接：</p><p><img src="https://farm8.staticflickr.com/7531/15304765024_1cc271b6e0_z.jpg" alt=""></p><p>###例3：饼状图###</p><p>第三个脚本，script3.py 完成如下任务：</p><ul><li>创建一个包含5个整数的列表</li><li>创建一个宽6英寸、高6英寸的图(赋值1）</li><li>添加一个长宽比为1的轴图</li><li>设置图的标题（字号为14）</li><li>用data列表画一个包含标签的饼状图</li><li>保存图为PNG格式</li></ul><p>脚本script3.py的代码如下：</p><pre><code>import numpy as np
import matplotlib.pyplot as plt
 
data = [33, 25, 20, 12, 10]
plt.figure(num=1, figsize=(6, 6))
plt.axes(aspect=1)
plt.title(&#39;Plot 3&#39;, size=14)
plt.pie(data, labels=(&#39;Group 1&#39;, &#39;Group 2&#39;, &#39;Group 3&#39;, &#39;Group 4&#39;, &#39;Group 5&#39;))
plt.savefig(&#39;images/plot3.png&#39;, format=&#39;png&#39;)
</code></pre><p>结果如下链接所示：</p><p><img src="https://farm8.staticflickr.com/7504/15926356092_7c3e5217aa_z.jpg" alt=""></p><p>###总结###</p>`,32)),n("p",null,[t[4]||(t[4]=l("这个教程提供了几个用matplotlib科学画图包进行画图的例子，Matplotlib是在Linux环境中用于解决科学画图的绝佳方案，表现在其无缝地和Python、Numpy连接、自动化能力，和提供多种自定义的高质量的画图产品。matplotlib包的文档和例子详见",-1)),i(p,{href:"http://matplotlib.org/"},{default:o(()=>[...t[3]||(t[3]=[l("这里",-1)])]),_:1}),t[5]||(t[5]=l("。",-1))]),t[21]||(t[21]=n("hr",null,null,-1)),n("p",null,[t[7]||(t[7]=l("via: ",-1)),i(p,{href:"http://xmodulo.com/matplotlib-scientific-plotting-linux.html"},{default:o(()=>[...t[6]||(t[6]=[l("http://xmodulo.com/matplotlib-scientific-plotting-linux.html",-1)])]),_:1})]),n("p",null,[t[11]||(t[11]=l("作者：",-1)),i(p,{href:"http://xmodulo.com/author/joshua"},{default:o(()=>[...t[8]||(t[8]=[l("Joshua Reed",-1)])]),_:1}),t[12]||(t[12]=l(" 译者：",-1)),i(p,{href:"https://github.com/ideas4u"},{default:o(()=>[...t[9]||(t[9]=[l("ideas4u",-1)])]),_:1}),t[13]||(t[13]=l(" 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:o(()=>[...t[10]||(t[10]=[l("wxy",-1)])]),_:1})]),n("p",null,[t[16]||(t[16]=l("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[14]||(t[14]=[l("LCTT",-1)])]),_:1}),t[17]||(t[17]=l(" 原创翻译，",-1)),i(p,{href:"http://linux.cn/"},{default:o(()=>[...t[15]||(t[15]=[l("Linux中国",-1)])]),_:1}),t[18]||(t[18]=l(" 荣誉推出",-1))])])}const P=e(u,[["render",y]]);export{D as __pageData,P as default};
