import{_,a0 as t,w as r,s as o,ao as i,I as n,x as a,a1 as e,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"使用深度学习检测疟疾 | LCTT x X-CMD","titleTemplate":false,"description":"使用深度学习检测疟疾 | LCTT (201905) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用深度学习检测疟疾 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用深度学习检测疟疾 | LCTT (201905) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201905/20190416 Detecting malaria with deep learning","title":"使用深度学习检测疟疾","tag":"201905","desc":""},"relativePath":"201905/20190416 Detecting malaria with deep learning.md","filePath":"[post].md"}'),c={name:"201905/20190416 Detecting malaria with deep learning.md"};function d(g,s,u,m,h,f){const p=t("Link");return r(),o("div",null,[s[56]||(s[56]=i('<h1 id="使用深度学习检测疟疾" tabindex="-1">使用深度学习检测疟疾 <a class="header-anchor" href="#使用深度学习检测疟疾" aria-label="Permalink to “使用深度学习检测疟疾”">​</a></h1><blockquote><p>人工智能结合开源硬件工具能够提升严重传染病疟疾的诊断。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/osdc_520x292_opensourcedoctor.png?itok=fk79NwpC" alt=""></p><p>人工智能（AI）和开源工具、技术和框架是促进社会进步的强有力的结合。“健康就是财富”可能有点陈词滥调，但它却是非常准确的！在本篇文章，我们将测试 AI 是如何与低成本、有效、精确的开源深度学习方法结合起来一起用来检测致死的传染病疟疾。</p><p>我既不是一个医生，也不是一个医疗保健研究者，我也绝不像他们那样合格，我只是对将 AI 应用到医疗保健研究感兴趣。在这片文章中我的想法是展示 AI 和开源解决方案如何帮助疟疾检测和减少人工劳动的方法。</p><p><img src="https://opensource.com/sites/default/files/uploads/malaria1_python-tensorflow.png" alt="Python and TensorFlow" title="Python and TensorFlow"></p><p><em>Python 和 TensorFlow: 一个构建开源深度学习方法的很棒的结合</em></p><p>感谢 Python 的强大和像 TensorFlow 这样的深度学习框架，我们能够构建健壮的、大规模的、有效的深度学习方法。因为这些工具是自由和开源的，我们能够构建非常经济且易于被任何人采纳和使用的解决方案。让我们开始吧！</p><h3 id="项目动机" tabindex="-1">项目动机 <a class="header-anchor" href="#项目动机" aria-label="Permalink to “项目动机”">​</a></h3><p>疟疾是由<em>疟原虫</em>造成的致死的、有传染性的、蚊子传播的疾病，主要通过受感染的雌性按蚊叮咬传播。共有五种寄生虫能够引起疟疾，但是大多数病例是这两种类型造成的：恶性疟原虫和间日疟原虫。</p><p><img src="https://opensource.com/sites/default/files/uploads/malaria2_malaria-heat-map.png" alt="疟疾热图" title="Malaria heat map"></p><p>这个地图显示了疟疾在全球传播分布形势，尤其在热带地区，但疾病的性质和致命性是该项目的主要动机。</p><p>如果一只受感染雌性蚊子叮咬了你，蚊子携带的寄生虫进入你的血液，并且开始破坏携带氧气的红细胞（RBC）。通常，疟疾的最初症状类似于流感病毒，在蚊子叮咬后，他们通常在几天或几周内发作。然而，这些致死的寄生虫可以在你的身体里生存长达一年并且不会造成任何症状，延迟治疗可能造成并发症甚至死亡。因此，早期的检查能够挽救生命。</p>',13)),n("p",null,[s[1]||(s[1]=a("世界健康组织（WHO）的",-1)),e(p,{href:"https://www.who.int/features/factfiles/malaria/en/"},{default:l(()=>[...s[0]||(s[0]=[a("疟疾实情",-1)])]),_:1}),s[2]||(s[2]=a("表明，世界近乎一半的人口面临疟疾的风险，有超过 2 亿的疟疾病例，每年由于疟疾造成的死亡将近 40 万。这是使疟疾检测和诊断快速、简单和有效的一个动机。",-1))]),s[57]||(s[57]=n("h3",{id:"检测疟疾的方法",tabindex:"-1"},[a("检测疟疾的方法 "),n("a",{class:"header-anchor",href:"#检测疟疾的方法","aria-label":"Permalink to “检测疟疾的方法”"},"​")],-1)),n("p",null,[s[4]||(s[4]=a("有几种方法能够用来检测和诊断疟疾。该文中的项目就是基于 Rajaraman, et al. 的论文：“",-1)),e(p,{href:"https://peerj.com/articles/4568/"},{default:l(()=>[...s[3]||(s[3]=[a("预先训练的卷积神经网络作为特征提取器，用于改善薄血涂片图像中的疟疾寄生虫检测",-1)])]),_:1}),s[5]||(s[5]=a("”介绍的一些方法，包含聚合酶链反应（PCR）和快速诊断测试（RDT）。这两种测试通常用于无法提供高质量显微镜服务的地方。",-1))]),n("p",null,[s[8]||(s[8]=a("标准的疟疾诊断通常是基于血液涂片工作流程的，根据 Carlos Ariza 的文章“",-1)),e(p,{href:"https://blog.insightdatascience.com/https-blog-insightdatascience-com-malaria-hero-a47d3d5fc4bb"},{default:l(()=>[...s[6]||(s[6]=[a("Malaria Hero：一个更快诊断疟原虫的网络应用",-1)])]),_:1}),s[9]||(s[9]=a("”，我从中了解到 Adrian Rosebrock 的“",-1)),e(p,{href:"https://www.pyimagesearch.com/2018/12/03/deep-learning-and-medical-image-analysis-with-keras/"},{default:l(()=>[...s[7]||(s[7]=[a("使用 Keras 的深度学习和医学图像分析",-1)])]),_:1}),s[10]||(s[10]=a("”。我感激这些优秀的资源的作者，让我在疟原虫预防、诊断和治疗方面有了更多的想法。",-1))]),s[58]||(s[58]=n("p",null,[n("img",{src:"https://opensource.com/sites/default/files/uploads/malaria3_blood-smear.png",alt:"疟原虫检测的血涂片工作流程",title:"Blood smear workflow for Malaria detection"})],-1)),s[59]||(s[59]=n("p",null,[n("em",null,"一个疟原虫检测的血涂片工作流程")],-1)),s[60]||(s[60]=n("p",null,"根据 WHO 方案，诊断通常包括对放大 100 倍的血涂片的集中检测。受过训练的人们手工计算在 5000 个细胞中有多少红细胞中包含疟原虫。正如上述解释中引用的 Rajaraman， et al. 的论文：",-1)),s[61]||(s[61]=n("blockquote",null,[n("p",null,"厚血涂片有助于检测寄生虫的存在，而薄血涂片有助于识别引起感染的寄生虫种类（疾病控制和预防中心, 2012）。诊断准确性在很大程度上取决于诊断人的专业知识，并且可能受到观察者间差异和疾病流行/资源受限区域大规模诊断所造成的不利影响（Mitiku, Mengistu 和 Gelaw, 2003）。可替代的技术是使用聚合酶链反应（PCR）和快速诊断测试（RDT）；然而，PCR 分析受限于它的性能（Hommelsheim, et al., 2014），RDT 在疾病流行的地区成本效益低（Hawkes, Katsuva 和 Masumbuko, 2009）。")],-1)),s[62]||(s[62]=n("p",null,"因此，疟疾检测可能受益于使用机器学习的自动化。",-1)),s[63]||(s[63]=n("h3",{id:"疟疾检测的深度学习",tabindex:"-1"},[a("疟疾检测的深度学习 "),n("a",{class:"header-anchor",href:"#疟疾检测的深度学习","aria-label":"Permalink to “疟疾检测的深度学习”"},"​")],-1)),s[64]||(s[64]=n("p",null,"人工诊断血涂片是一个繁重的手工过程，需要专业知识来分类和计数被寄生虫感染的和未感染的细胞。这个过程可能不能很好的规模化，尤其在那些专业人士不足的地区。在利用最先进的图像处理和分析技术提取人工选取特征和构建基于机器学习的分类模型方面取得了一些进展。然而，这些模型不能大规模推广，因为没有更多的数据用来训练，并且人工选取特征需要花费很长时间。",-1)),n("p",null,[s[12]||(s[12]=a("深度学习模型，或者更具体地讲，卷积神经网络（CNN），已经被证明在各种计算机视觉任务中非常有效。（如果你想更多的了解关于 CNN 的背景知识，我推荐你阅读",-1)),e(p,{href:"http://cs231n.github.io/convolutional-networks/"},{default:l(()=>[...s[11]||(s[11]=[a("视觉识别的 CS2331n 卷积神经网络",-1)])]),_:1}),s[13]||(s[13]=a("。）简单地讲，CNN 模型的关键层包含卷积和池化层，正如下图所示。",-1))]),s[65]||(s[65]=n("p",null,[n("img",{src:"https://opensource.com/sites/default/files/uploads/malaria4_cnn-architecture.png",alt:"A typical CNN architecture",title:"A typical CNN architecture"})],-1)),s[66]||(s[66]=n("p",null,[n("em",null,"一个典型的 CNN 架构")],-1)),s[67]||(s[67]=n("p",null,"卷积层从数据中学习空间层级模式，它是平移不变的，因此它们能够学习图像的不同方面。例如，第一个卷积层将学习小的和局部图案，例如边缘和角落，第二个卷积层将基于第一层的特征学习更大的图案，等等。这允许 CNN 自动化提取特征并且学习对于新数据点通用的有效的特征。池化层有助于下采样和减少尺寸。",-1)),s[68]||(s[68]=n("p",null,"因此，CNN 有助于自动化和规模化的特征工程。同样，在模型末尾加上密集层允许我们执行像图像分类这样的任务。使用像 CNN 这样的深度学习模型自动的疟疾检测可能非常有效、便宜和具有规模性，尤其是迁移学习和预训练模型效果非常好，甚至在少量数据的约束下。",-1)),s[69]||(s[69]=n("p",null,"Rajaraman, et al. 的论文在一个数据集上利用六个预训练模型在检测疟疾对比无感染样本获取到令人吃惊的 95.9% 的准确率。我们的重点是从头开始尝试一些简单的 CNN 模型和用一个预训练的训练模型使用迁移学习来查看我们能够从相同的数据集中得到什么。我们将使用开源工具和框架，包括 Python 和 TensorFlow，来构建我们的模型。",-1)),s[70]||(s[70]=n("h3",{id:"数据集",tabindex:"-1"},[a("数据集 "),n("a",{class:"header-anchor",href:"#数据集","aria-label":"Permalink to “数据集”"},"​")],-1)),n("p",null,[s[16]||(s[16]=a("我们分析的数据来自 Lister Hill 国家生物医学交流中心（LHNCBC）的研究人员，该中心是国家医学图书馆（NLM）的一部分，他们细心收集和标记了公开可用的健康和受感染的血涂片图像的",-1)),e(p,{href:"https://ceb.nlm.nih.gov/repositories/malaria-datasets/"},{default:l(()=>[...s[14]||(s[14]=[a("数据集",-1)])]),_:1}),s[17]||(s[17]=a("。这些研究者已经开发了一个运行在 Android 智能手机的",-1)),e(p,{href:"https://www.ncbi.nlm.nih.gov/pubmed/29360430"},{default:l(()=>[...s[15]||(s[15]=[a("疟疾检测手机应用",-1)])]),_:1}),s[18]||(s[18]=a("，连接到一个传统的光学显微镜。它们使用吉姆萨染液将 150 个受恶性疟原虫感染的和 50 个健康病人的薄血涂片染色，这些薄血涂片是在孟加拉的吉大港医学院附属医院收集和照相的。使用智能手机的内置相机获取每个显微镜视窗内的图像。这些图片由在泰国曼谷的马希多-牛津热带医学研究所的一个专家使用幻灯片阅读器标记的。",-1))]),s[71]||(s[71]=i(`<p>让我们简要地查看一下数据集的结构。首先，我将安装一些基础的依赖（基于使用的操作系统）。</p><p><img src="https://opensource.com/sites/default/files/uploads/malaria5_dependencies.png" alt="Installing dependencies" title="Installing dependencies"></p><p>我使用的是云上的带有一个 GPU 的基于 Debian 的操作系统，这样我能更快的运行我的模型。为了查看目录结构，我们必须使用 <code>sudo apt install tree</code> 安装 <code>tree</code> 及其依赖（如果我们没有安装的话）。</p><p><img src="https://opensource.com/sites/default/files/uploads/malaria6_tree-dependency.png" alt="Installing the tree dependency" title="Installing the tree dependency"></p><p>我们有两个文件夹包含血细胞的图像，包括受感染的和健康的。我们通过输入可以获取关于图像总数更多的细节：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import os</span></span>
<span class="line"><span>import glob</span></span>
<span class="line"><span></span></span>
<span class="line"><span>base_dir = os.path.join(&#39;./cell_images&#39;)</span></span>
<span class="line"><span>infected_dir = os.path.join(base_dir,&#39;Parasitized&#39;)</span></span>
<span class="line"><span>healthy_dir = os.path.join(base_dir,&#39;Uninfected&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>infected_files = glob.glob(infected_dir+&#39;/*.png&#39;)</span></span>
<span class="line"><span>healthy_files = glob.glob(healthy_dir+&#39;/*.png&#39;)</span></span>
<span class="line"><span>len(infected_files), len(healthy_files)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>(13779, 13779)</span></span></code></pre></div><p>看起来我们有一个平衡的数据集，包含 13,779 张疟疾的和 13,779 张非疟疾的（健康的）血细胞图像。让我们根据这些构建数据帧，我们将用这些数据帧来构建我们的数据集。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import numpy as np</span></span>
<span class="line"><span>import pandas as pd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>np.random.seed(42)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>files_df = pd.DataFrame({</span></span>
<span class="line"><span>    &#39;filename&#39;: infected_files + healthy_files,</span></span>
<span class="line"><span>    &#39;label&#39;: [&#39;malaria&#39;] * len(infected_files) + [&#39;healthy&#39;] * len(healthy_files)</span></span>
<span class="line"><span>}).sample(frac=1, random_state=42).reset_index(drop=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>files_df.head()</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/uploads/malaria7_dataset.png" alt="Datasets" title="Datasets"></p><h3 id="构建和了解图像数据集" tabindex="-1">构建和了解图像数据集 <a class="header-anchor" href="#构建和了解图像数据集" aria-label="Permalink to “构建和了解图像数据集”">​</a></h3><p>为了构建深度学习模型，我们需要训练数据，但是我们还需要使用不可见的数据测试模型的性能。相应的，我们将使用 60:10:30 的比例来划分用于训练、验证和测试的数据集。我们将在训练期间应用训练和验证数据集，并用测试数据集来检查模型的性能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from sklearn.model_selection import train_test_split</span></span>
<span class="line"><span>from collections import Counter</span></span>
<span class="line"><span></span></span>
<span class="line"><span>train_files, test_files, train_labels, test_labels = train_test_split(files_df[&#39;filename&#39;].values,</span></span>
<span class="line"><span>                                                                      files_df[&#39;label&#39;].values, </span></span>
<span class="line"><span>                                                                      test_size=0.3, random_state=42)</span></span>
<span class="line"><span>train_files, val_files, train_labels, val_labels = train_test_split(train_files,</span></span>
<span class="line"><span>                                                                    train_labels, </span></span>
<span class="line"><span>                                                                    test_size=0.1, random_state=42)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(train_files.shape, val_files.shape, test_files.shape)</span></span>
<span class="line"><span>print(&#39;Train:&#39;, Counter(train_labels), &#39;\\nVal:&#39;, Counter(val_labels), &#39;\\nTest:&#39;, Counter(test_labels))</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>(17361,) (1929,) (8268,)</span></span>
<span class="line"><span>Train: Counter({&#39;healthy&#39;: 8734, &#39;malaria&#39;: 8627}) </span></span>
<span class="line"><span>Val: Counter({&#39;healthy&#39;: 970, &#39;malaria&#39;: 959}) </span></span>
<span class="line"><span>Test: Counter({&#39;malaria&#39;: 4193, &#39;healthy&#39;: 4075})</span></span></code></pre></div><p>这些图片尺寸并不相同，因为血涂片和细胞图像是基于人、测试方法、图片方向不同而不同的。让我们总结我们的训练数据集的统计信息来决定最佳的图像尺寸（牢记，我们根本不会碰测试数据集）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import cv2</span></span>
<span class="line"><span>from concurrent import futures</span></span>
<span class="line"><span>import threading</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def get_img_shape_parallel(idx, img, total_imgs):</span></span>
<span class="line"><span>    if idx % 5000 == 0 or idx == (total_imgs - 1):</span></span>
<span class="line"><span>        print(&#39;{}: working on img num: {}&#39;.format(threading.current_thread().name,</span></span>
<span class="line"><span>                                                  idx))</span></span>
<span class="line"><span>    return cv2.imread(img).shape</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>ex = futures.ThreadPoolExecutor(max_workers=None)</span></span>
<span class="line"><span>data_inp = [(idx, img, len(train_files)) for idx, img in enumerate(train_files)]</span></span>
<span class="line"><span>print(&#39;Starting Img shape computation:&#39;)</span></span>
<span class="line"><span>train_img_dims_map = ex.map(get_img_shape_parallel, </span></span>
<span class="line"><span>                            [record[0] for record in data_inp],</span></span>
<span class="line"><span>                            [record[1] for record in data_inp],</span></span>
<span class="line"><span>                            [record[2] for record in data_inp])</span></span>
<span class="line"><span>train_img_dims = list(train_img_dims_map)</span></span>
<span class="line"><span>print(&#39;Min Dimensions:&#39;, np.min(train_img_dims, axis=0)) </span></span>
<span class="line"><span>print(&#39;Avg Dimensions:&#39;, np.mean(train_img_dims, axis=0))</span></span>
<span class="line"><span>print(&#39;Median Dimensions:&#39;, np.median(train_img_dims, axis=0))</span></span>
<span class="line"><span>print(&#39;Max Dimensions:&#39;, np.max(train_img_dims, axis=0))</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>Starting Img shape computation:</span></span>
<span class="line"><span>ThreadPoolExecutor-0_0: working on img num: 0</span></span>
<span class="line"><span>ThreadPoolExecutor-0_17: working on img num: 5000</span></span>
<span class="line"><span>ThreadPoolExecutor-0_15: working on img num: 10000</span></span>
<span class="line"><span>ThreadPoolExecutor-0_1: working on img num: 15000</span></span>
<span class="line"><span>ThreadPoolExecutor-0_7: working on img num: 17360</span></span>
<span class="line"><span>Min Dimensions: [46 46  3]</span></span>
<span class="line"><span>Avg Dimensions: [132.77311215 132.45757733   3.]</span></span>
<span class="line"><span>Median Dimensions: [130. 130.   3.]</span></span>
<span class="line"><span>Max Dimensions: [385 394   3]</span></span></code></pre></div><p>我们应用并行处理来加速图像读取，并且基于汇总统计结果，我们将每幅图片的尺寸重新调整到 125x125 像素。让我们载入我们所有的图像并重新调整它们为这些固定尺寸。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>IMG_DIMS = (125, 125)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def get_img_data_parallel(idx, img, total_imgs):</span></span>
<span class="line"><span>    if idx % 5000 == 0 or idx == (total_imgs - 1):</span></span>
<span class="line"><span>        print(&#39;{}: working on img num: {}&#39;.format(threading.current_thread().name,</span></span>
<span class="line"><span>                                                  idx))</span></span>
<span class="line"><span>    img = cv2.imread(img)</span></span>
<span class="line"><span>    img = cv2.resize(img, dsize=IMG_DIMS, </span></span>
<span class="line"><span>                     interpolation=cv2.INTER_CUBIC)</span></span>
<span class="line"><span>    img = np.array(img, dtype=np.float32)</span></span>
<span class="line"><span>    return img</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ex = futures.ThreadPoolExecutor(max_workers=None)</span></span>
<span class="line"><span>train_data_inp = [(idx, img, len(train_files)) for idx, img in enumerate(train_files)]</span></span>
<span class="line"><span>val_data_inp = [(idx, img, len(val_files)) for idx, img in enumerate(val_files)]</span></span>
<span class="line"><span>test_data_inp = [(idx, img, len(test_files)) for idx, img in enumerate(test_files)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&#39;Loading Train Images:&#39;)</span></span>
<span class="line"><span>train_data_map = ex.map(get_img_data_parallel, </span></span>
<span class="line"><span>                        [record[0] for record in train_data_inp],</span></span>
<span class="line"><span>                        [record[1] for record in train_data_inp],</span></span>
<span class="line"><span>                        [record[2] for record in train_data_inp])</span></span>
<span class="line"><span>train_data = np.array(list(train_data_map))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&#39;\\nLoading Validation Images:&#39;)</span></span>
<span class="line"><span>val_data_map = ex.map(get_img_data_parallel, </span></span>
<span class="line"><span>                        [record[0] for record in val_data_inp],</span></span>
<span class="line"><span>                        [record[1] for record in val_data_inp],</span></span>
<span class="line"><span>                        [record[2] for record in val_data_inp])</span></span>
<span class="line"><span>val_data = np.array(list(val_data_map))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&#39;\\nLoading Test Images:&#39;)</span></span>
<span class="line"><span>test_data_map = ex.map(get_img_data_parallel, </span></span>
<span class="line"><span>                        [record[0] for record in test_data_inp],</span></span>
<span class="line"><span>                        [record[1] for record in test_data_inp],</span></span>
<span class="line"><span>                        [record[2] for record in test_data_inp])</span></span>
<span class="line"><span>test_data = np.array(list(test_data_map))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>train_data.shape, val_data.shape, test_data.shape  </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>Loading Train Images:</span></span>
<span class="line"><span>ThreadPoolExecutor-1_0: working on img num: 0</span></span>
<span class="line"><span>ThreadPoolExecutor-1_12: working on img num: 5000</span></span>
<span class="line"><span>ThreadPoolExecutor-1_6: working on img num: 10000</span></span>
<span class="line"><span>ThreadPoolExecutor-1_10: working on img num: 15000</span></span>
<span class="line"><span>ThreadPoolExecutor-1_3: working on img num: 17360</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Loading Validation Images:</span></span>
<span class="line"><span>ThreadPoolExecutor-1_13: working on img num: 0</span></span>
<span class="line"><span>ThreadPoolExecutor-1_18: working on img num: 1928</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Loading Test Images:</span></span>
<span class="line"><span>ThreadPoolExecutor-1_5: working on img num: 0</span></span>
<span class="line"><span>ThreadPoolExecutor-1_19: working on img num: 5000</span></span>
<span class="line"><span>ThreadPoolExecutor-1_8: working on img num: 8267</span></span>
<span class="line"><span>((17361, 125, 125, 3), (1929, 125, 125, 3), (8268, 125, 125, 3))</span></span></code></pre></div><p>我们再次应用并行处理来加速有关图像载入和重新调整大小的计算。最终，我们获得了所需尺寸的图片张量，正如前面的输出所示。我们现在查看一些血细胞图像样本，以对我们的数据有个印象。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import matplotlib.pyplot as plt</span></span>
<span class="line"><span>%matplotlib inline</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plt.figure(1 , figsize = (8 , 8))</span></span>
<span class="line"><span>n = 0 </span></span>
<span class="line"><span>for i in range(16):</span></span>
<span class="line"><span>    n += 1 </span></span>
<span class="line"><span>    r = np.random.randint(0 , train_data.shape[0] , 1)</span></span>
<span class="line"><span>    plt.subplot(4 , 4 , n)</span></span>
<span class="line"><span>    plt.subplots_adjust(hspace = 0.5 , wspace = 0.5)</span></span>
<span class="line"><span>    plt.imshow(train_data[r[0]]/255.)</span></span>
<span class="line"><span>    plt.title(&#39;{}&#39;.format(train_labels[r[0]]))</span></span>
<span class="line"><span>    plt.xticks([]) , plt.yticks([])</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/uploads/malaria8_cell-samples.png" alt="Malaria cell samples" title="Malaria cell samples"></p><p>基于这些样本图像，我们看到一些疟疾和健康细胞图像的细微不同。我们将使我们的深度学习模型试图在模型训练中学习这些模式。</p><p>开始我们的模型训练前，我们必须建立一些基础的配置设置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>BATCH_SIZE = 64</span></span>
<span class="line"><span>NUM_CLASSES = 2</span></span>
<span class="line"><span>EPOCHS = 25</span></span>
<span class="line"><span>INPUT_SHAPE = (125, 125, 3)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>train_imgs_scaled = train_data / 255.</span></span>
<span class="line"><span>val_imgs_scaled = val_data / 255.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># encode text category labels</span></span>
<span class="line"><span>from sklearn.preprocessing import LabelEncoder</span></span>
<span class="line"><span></span></span>
<span class="line"><span>le = LabelEncoder()</span></span>
<span class="line"><span>le.fit(train_labels)</span></span>
<span class="line"><span>train_labels_enc = le.transform(train_labels)</span></span>
<span class="line"><span>val_labels_enc = le.transform(val_labels)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(train_labels[:6], train_labels_enc[:6])</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>[&#39;malaria&#39; &#39;malaria&#39; &#39;malaria&#39; &#39;healthy&#39; &#39;healthy&#39; &#39;malaria&#39;] [1 1 1 0 0 1]</span></span></code></pre></div><p>我们修复我们的图像尺寸、批量大小，和纪元，并编码我们的分类的类标签。TensorFlow 2.0 于 2019 年三月发布，这个练习是尝试它的完美理由。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import tensorflow as tf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Load the TensorBoard notebook extension (optional)</span></span>
<span class="line"><span>%load_ext tensorboard.notebook</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tf.random.set_seed(42)</span></span>
<span class="line"><span>tf.__version__</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>&#39;2.0.0-alpha0&#39;</span></span></code></pre></div><h3 id="深度学习训练" tabindex="-1">深度学习训练 <a class="header-anchor" href="#深度学习训练" aria-label="Permalink to “深度学习训练”">​</a></h3><p>在模型训练阶段，我们将构建三个深度训练模型，使用我们的训练集训练，使用验证数据比较它们的性能。然后，我们保存这些模型并在之后的模型评估阶段使用它们。</p><h4 id="模型-1-从头开始的-cnn" tabindex="-1">模型 1：从头开始的 CNN <a class="header-anchor" href="#模型-1-从头开始的-cnn" aria-label="Permalink to “模型 1：从头开始的 CNN”">​</a></h4><p>我们的第一个疟疾检测模型将从头开始构建和训练一个基础的 CNN。首先，让我们定义我们的模型架构，</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>inp = tf.keras.layers.Input(shape=INPUT_SHAPE)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>conv1 = tf.keras.layers.Conv2D(32, kernel_size=(3, 3), </span></span>
<span class="line"><span>                               activation=&#39;relu&#39;, padding=&#39;same&#39;)(inp)</span></span>
<span class="line"><span>pool1 = tf.keras.layers.MaxPooling2D(pool_size=(2, 2))(conv1)</span></span>
<span class="line"><span>conv2 = tf.keras.layers.Conv2D(64, kernel_size=(3, 3), </span></span>
<span class="line"><span>                               activation=&#39;relu&#39;, padding=&#39;same&#39;)(pool1)</span></span>
<span class="line"><span>pool2 = tf.keras.layers.MaxPooling2D(pool_size=(2, 2))(conv2)</span></span>
<span class="line"><span>conv3 = tf.keras.layers.Conv2D(128, kernel_size=(3, 3), </span></span>
<span class="line"><span>                               activation=&#39;relu&#39;, padding=&#39;same&#39;)(pool2)</span></span>
<span class="line"><span>pool3 = tf.keras.layers.MaxPooling2D(pool_size=(2, 2))(conv3)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>flat = tf.keras.layers.Flatten()(pool3)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hidden1 = tf.keras.layers.Dense(512, activation=&#39;relu&#39;)(flat)</span></span>
<span class="line"><span>drop1 = tf.keras.layers.Dropout(rate=0.3)(hidden1)</span></span>
<span class="line"><span>hidden2 = tf.keras.layers.Dense(512, activation=&#39;relu&#39;)(drop1)</span></span>
<span class="line"><span>drop2 = tf.keras.layers.Dropout(rate=0.3)(hidden2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>out = tf.keras.layers.Dense(1, activation=&#39;sigmoid&#39;)(drop2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>model = tf.keras.Model(inputs=inp, outputs=out)</span></span>
<span class="line"><span>model.compile(optimizer=&#39;adam&#39;,</span></span>
<span class="line"><span>                loss=&#39;binary_crossentropy&#39;,</span></span>
<span class="line"><span>                metrics=[&#39;accuracy&#39;])</span></span>
<span class="line"><span>model.summary()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>Model: &quot;model&quot;</span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>Layer (type)                 Output Shape              Param #   </span></span>
<span class="line"><span>=================================================================</span></span>
<span class="line"><span>input_1 (InputLayer)         [(None, 125, 125, 3)]     0         </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>conv2d (Conv2D)              (None, 125, 125, 32)      896       </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>max_pooling2d (MaxPooling2D) (None, 62, 62, 32)        0         </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>conv2d_1 (Conv2D)            (None, 62, 62, 64)        18496     </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>dense_1 (Dense)              (None, 512)               262656    </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>dropout_1 (Dropout)          (None, 512)               0         </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>dense_2 (Dense)              (None, 1)                 513       </span></span>
<span class="line"><span>=================================================================</span></span>
<span class="line"><span>Total params: 15,102,529</span></span>
<span class="line"><span>Trainable params: 15,102,529</span></span>
<span class="line"><span>Non-trainable params: 0</span></span>
<span class="line"><span>_________________________________________________________________</span></span></code></pre></div><p>基于这些代码的架构，我们的 CNN 模型有三个卷积和一个池化层，其后是两个致密层，以及用于正则化的失活。让我们训练我们的模型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import datetime</span></span>
<span class="line"><span></span></span>
<span class="line"><span>logdir = os.path.join(&#39;/home/dipanzan_sarkar/projects/tensorboard_logs&#39;, </span></span>
<span class="line"><span>                      datetime.datetime.now().strftime(&quot;%Y%m%d-%H%M%S&quot;))</span></span>
<span class="line"><span>tensorboard_callback = tf.keras.callbacks.TensorBoard(logdir, histogram_freq=1)</span></span>
<span class="line"><span>reduce_lr = tf.keras.callbacks.ReduceLROnPlateau(monitor=&#39;val_loss&#39;, factor=0.5,</span></span>
<span class="line"><span>                              patience=2, min_lr=0.000001)</span></span>
<span class="line"><span>callbacks = [reduce_lr, tensorboard_callback]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>history = model.fit(x=train_imgs_scaled, y=train_labels_enc, </span></span>
<span class="line"><span>                    batch_size=BATCH_SIZE,</span></span>
<span class="line"><span>                    epochs=EPOCHS, </span></span>
<span class="line"><span>                    validation_data=(val_imgs_scaled, val_labels_enc), </span></span>
<span class="line"><span>                    callbacks=callbacks,</span></span>
<span class="line"><span>                    verbose=1)</span></span>
<span class="line"><span>                    </span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>Train on 17361 samples, validate on 1929 samples</span></span>
<span class="line"><span>Epoch 1/25</span></span>
<span class="line"><span>17361/17361 [====] - 32s 2ms/sample - loss: 0.4373 - accuracy: 0.7814 - val_loss: 0.1834 - val_accuracy: 0.9393</span></span>
<span class="line"><span>Epoch 2/25</span></span>
<span class="line"><span>17361/17361 [====] - 30s 2ms/sample - loss: 0.1725 - accuracy: 0.9434 - val_loss: 0.1567 - val_accuracy: 0.9513</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>Epoch 24/25</span></span>
<span class="line"><span>17361/17361 [====] - 30s 2ms/sample - loss: 0.0036 - accuracy: 0.9993 - val_loss: 0.3693 - val_accuracy: 0.9565</span></span>
<span class="line"><span>Epoch 25/25</span></span>
<span class="line"><span>17361/17361 [====] - 30s 2ms/sample - loss: 0.0034 - accuracy: 0.9994 - val_loss: 0.3699 - val_accuracy: 0.9559</span></span></code></pre></div><p>我们获得了 95.6% 的验证精确率，这很好，尽管我们的模型看起来有些过拟合（通过查看我们的训练精确度，是 99.9%）。通过绘制训练和验证的精度和损失曲线，我们可以清楚地看到这一点。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>f, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))</span></span>
<span class="line"><span>t = f.suptitle(&#39;Basic CNN Performance&#39;, fontsize=12)</span></span>
<span class="line"><span>f.subplots_adjust(top=0.85, wspace=0.3)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>max_epoch = len(history.history[&#39;accuracy&#39;])+1</span></span>
<span class="line"><span>epoch_list = list(range(1,max_epoch))</span></span>
<span class="line"><span>ax1.plot(epoch_list, history.history[&#39;accuracy&#39;], label=&#39;Train Accuracy&#39;)</span></span>
<span class="line"><span>ax1.plot(epoch_list, history.history[&#39;val_accuracy&#39;], label=&#39;Validation Accuracy&#39;)</span></span>
<span class="line"><span>ax1.set_xticks(np.arange(1, max_epoch, 5))</span></span>
<span class="line"><span>ax1.set_ylabel(&#39;Accuracy Value&#39;)</span></span>
<span class="line"><span>ax1.set_xlabel(&#39;Epoch&#39;)</span></span>
<span class="line"><span>ax1.set_title(&#39;Accuracy&#39;)</span></span>
<span class="line"><span>l1 = ax1.legend(loc=&quot;best&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ax2.plot(epoch_list, history.history[&#39;loss&#39;], label=&#39;Train Loss&#39;)</span></span>
<span class="line"><span>ax2.plot(epoch_list, history.history[&#39;val_loss&#39;], label=&#39;Validation Loss&#39;)</span></span>
<span class="line"><span>ax2.set_xticks(np.arange(1, max_epoch, 5))</span></span>
<span class="line"><span>ax2.set_ylabel(&#39;Loss Value&#39;)</span></span>
<span class="line"><span>ax2.set_xlabel(&#39;Epoch&#39;)</span></span>
<span class="line"><span>ax2.set_title(&#39;Loss&#39;)</span></span>
<span class="line"><span>l2 = ax2.legend(loc=&quot;best&quot;)</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/uploads/malaria9_learningcurves.png" alt="Learning curves for basic CNN" title="Learning curves for basic CNN"></p><p><em>基础 CNN 学习曲线</em></p><p>我们可以看在在第五个纪元，情况并没有改善很多。让我们保存这个模型用于将来的评估。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>model.save(&#39;basic_cnn.h5&#39;)</span></span></code></pre></div><h4 id="深度迁移学习" tabindex="-1">深度迁移学习 <a class="header-anchor" href="#深度迁移学习" aria-label="Permalink to “深度迁移学习”">​</a></h4>`,38)),n("p",null,[s[21]||(s[21]=a("就像人类有与生俱来在不同任务间传输知识的能力一样，迁移学习允许我们利用从以前任务学到的知识用到新的相关的任务，即使在机器学习或深度学习的情况下也是如此。如果想深入探究迁移学习，你应该看我的文章“",-1)),e(p,{href:"https://towardsdatascience.com/a-comprehensive-hands-on-guide-to-transfer-learning-with-real-world-applications-in-deep-learning-212bf3b2f27a"},{default:l(()=>[...s[19]||(s[19]=[a("一个易于理解与现实应用一起学习深度学习中的迁移学习的指导实践",-1)])]),_:1}),s[22]||(s[22]=a("”和我的书《",-1)),e(p,{href:"https://github.com/dipanjanS/hands-on-transfer-learning-with-python"},{default:l(()=>[...s[20]||(s[20]=[a("Python 迁移学习实践",-1)])]),_:1}),s[23]||(s[23]=a("》。",-1))]),s[72]||(s[72]=n("p",null,[n("img",{src:"https://opensource.com/sites/default/files/uploads/malaria10_transferideas.png",alt:"深度迁移学习的想法",title:"Ideas for deep transfer learning"})],-1)),s[73]||(s[73]=n("p",null,"在这篇实践中我们想要探索的想法是：",-1)),s[74]||(s[74]=n("blockquote",null,[n("p",null,"在我们的问题背景下，我们能够利用一个预训练深度学习模型（在大数据集上训练的，像 ImageNet）通过应用和迁移知识来解决疟疾检测的问题吗？")],-1)),s[75]||(s[75]=n("p",null,"我们将应用两个最流行的深度迁移学习策略。",-1)),s[76]||(s[76]=n("ul",null,[n("li",null,"预训练模型作为特征提取器"),n("li",null,"微调的预训练模型")],-1)),n("p",null,[s[25]||(s[25]=a("我们将使用预训练的 VGG-19 深度训练模型（由剑桥大学的视觉几何组（VGG）开发）进行我们的实验。像 VGG-19 这样的预训练模型是在一个大的数据集（",-1)),e(p,{href:"http://image-net.org/index"},{default:l(()=>[...s[24]||(s[24]=[a("Imagenet",-1)])]),_:1}),s[26]||(s[26]=a("）上使用了很多不同的图像分类训练的。因此，这个模型应该已经学习到了健壮的特征层级结构，相对于你的 CNN 模型学到的特征，是空间不变的、转动不变的、平移不变的。因此，这个模型，已经从百万幅图片中学习到了一个好的特征显示，对于像疟疾检测这样的计算机视觉问题，可以作为一个好的合适新图像的特征提取器。在我们的问题中发挥迁移学习的能力之前，让我们先讨论 VGG-19 模型。",-1))]),s[77]||(s[77]=n("h5",{id:"理解-vgg-19-模型",tabindex:"-1"},[a("理解 VGG-19 模型 "),n("a",{class:"header-anchor",href:"#理解-vgg-19-模型","aria-label":"Permalink to “理解 VGG-19 模型”"},"​")],-1)),n("p",null,[s[28]||(s[28]=a("VGG-19 模型是一个构建在 ImageNet 数据库之上的 19 层（卷积和全连接的）的深度学习网络，ImageNet 数据库为了图像识别和分类的目的而开发。该模型是由 Karen Simonyan 和 Andrew Zisserman 构建的，在他们的论文“",-1)),e(p,{href:"https://arxiv.org/pdf/1409.1556.pdf"},{default:l(()=>[...s[27]||(s[27]=[a("大规模图像识别的非常深的卷积网络",-1)])]),_:1}),s[29]||(s[29]=a("”中进行了描述。VGG-19 的架构模型是：",-1))]),s[78]||(s[78]=i(`<p><img src="https://opensource.com/sites/default/files/uploads/malaria11_vgg-19-model-architecture.png" alt="VGG-19 模型架构" title="VGG-19 Model Architecture"></p><p>你可以看到我们总共有 16 个使用 3x3 卷积过滤器的卷积层，与最大的池化层来下采样，和由 4096 个单元组成的两个全连接的隐藏层，每个隐藏层之后跟随一个由 1000 个单元组成的致密层，每个单元代表 ImageNet 数据库中的一个分类。我们不需要最后三层，因为我们将使用我们自己的全连接致密层来预测疟疾。我们更关心前五个块，因此我们可以利用 VGG 模型作为一个有效的特征提取器。</p><p>我们将使用模型之一作为一个简单的特征提取器，通过冻结五个卷积块的方式来确保它们的位权在每个纪元后不会更新。对于最后一个模型，我们会对 VGG 模型进行微调，我们会解冻最后两个块（第 4 和第 5）因此当我们训练我们的模型时，它们的位权在每个时期（每批数据）被更新。</p><h4 id="模型-2-预训练的模型作为一个特征提取器" tabindex="-1">模型 2：预训练的模型作为一个特征提取器 <a class="header-anchor" href="#模型-2-预训练的模型作为一个特征提取器" aria-label="Permalink to “模型 2：预训练的模型作为一个特征提取器”">​</a></h4><p>为了构建这个模型，我们将利用 TensorFlow 载入 VGG-19 模型并冻结卷积块，因此我们能够将它们用作特征提取器。我们在末尾插入我们自己的致密层来执行分类任务。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vgg = tf.keras.applications.vgg19.VGG19(include_top=False, weights=&#39;imagenet&#39;, </span></span>
<span class="line"><span>                                        input_shape=INPUT_SHAPE)</span></span>
<span class="line"><span>vgg.trainable = False</span></span>
<span class="line"><span># Freeze the layers</span></span>
<span class="line"><span>for layer in vgg.layers:</span></span>
<span class="line"><span>    layer.trainable = False</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>base_vgg = vgg</span></span>
<span class="line"><span>base_out = base_vgg.output</span></span>
<span class="line"><span>pool_out = tf.keras.layers.Flatten()(base_out)</span></span>
<span class="line"><span>hidden1 = tf.keras.layers.Dense(512, activation=&#39;relu&#39;)(pool_out)</span></span>
<span class="line"><span>drop1 = tf.keras.layers.Dropout(rate=0.3)(hidden1)</span></span>
<span class="line"><span>hidden2 = tf.keras.layers.Dense(512, activation=&#39;relu&#39;)(drop1)</span></span>
<span class="line"><span>drop2 = tf.keras.layers.Dropout(rate=0.3)(hidden2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>out = tf.keras.layers.Dense(1, activation=&#39;sigmoid&#39;)(drop2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>model = tf.keras.Model(inputs=base_vgg.input, outputs=out)</span></span>
<span class="line"><span>model.compile(optimizer=tf.keras.optimizers.RMSprop(lr=1e-4),</span></span>
<span class="line"><span>                loss=&#39;binary_crossentropy&#39;,</span></span>
<span class="line"><span>                metrics=[&#39;accuracy&#39;])</span></span>
<span class="line"><span>model.summary()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>Model: &quot;model_1&quot;</span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>Layer (type)                 Output Shape              Param #   </span></span>
<span class="line"><span>=================================================================</span></span>
<span class="line"><span>input_2 (InputLayer)         [(None, 125, 125, 3)]     0         </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>block1_conv1 (Conv2D)        (None, 125, 125, 64)      1792      </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>block1_conv2 (Conv2D)        (None, 125, 125, 64)      36928     </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>block5_pool (MaxPooling2D)   (None, 3, 3, 512)         0         </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>flatten_1 (Flatten)          (None, 4608)              0         </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>dense_3 (Dense)              (None, 512)               2359808   </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>dropout_2 (Dropout)          (None, 512)               0         </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>dense_4 (Dense)              (None, 512)               262656    </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>dropout_3 (Dropout)          (None, 512)               0         </span></span>
<span class="line"><span>_________________________________________________________________</span></span>
<span class="line"><span>dense_5 (Dense)              (None, 1)                 513       </span></span>
<span class="line"><span>=================================================================</span></span>
<span class="line"><span>Total params: 22,647,361</span></span>
<span class="line"><span>Trainable params: 2,622,977</span></span>
<span class="line"><span>Non-trainable params: 20,024,384</span></span>
<span class="line"><span>_________________________________________________________________</span></span></code></pre></div><p>从整个输出可以明显看出，在我们的模型中我们有了很多层，我们将只利用 VGG-19 模型的冻结层作为特征提取器。你可以使用下列代码来验证我们的模型有多少层是实际可训练的，以及我们的网络中总共存在多少层。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>print(&quot;Total Layers:&quot;, len(model.layers))</span></span>
<span class="line"><span>print(&quot;Total trainable layers:&quot;, </span></span>
<span class="line"><span>      sum([1 for l in model.layers if l.trainable]))</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>Total Layers: 28</span></span>
<span class="line"><span>Total trainable layers: 6</span></span></code></pre></div>`,8)),n("p",null,[s[31]||(s[31]=a("我们将使用和我们之前的模型相似的配置和回调来训练我们的模型。参考",-1)),e(p,{href:"https://nbviewer.jupyter.org/github/dipanjanS/data_science_for_all/tree/master/os_malaria_detection/"},{default:l(()=>[...s[30]||(s[30]=[a("我的 GitHub 仓库",-1)])]),_:1}),s[32]||(s[32]=a("以获取训练模型的完整代码。我们观察下列图表，以显示模型精确度和损失曲线。",-1))]),s[79]||(s[79]=i(`<p><img src="https://opensource.com/sites/default/files/uploads/malaria12_learningcurves.png" alt="Learning curves for frozen pre-trained CNN" title="Learning curves for frozen pre-trained CNN"></p><p><em>冻结的预训练的 CNN 的学习曲线</em></p><p>这表明我们的模型没有像我们的基础 CNN 模型那样过拟合，但是性能有点不如我们的基础的 CNN 模型。让我们保存这个模型，以备将来的评估。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>model.save(&#39;vgg_frozen.h5&#39;)</span></span></code></pre></div><h4 id="模型-3-使用图像增强来微调预训练的模型" tabindex="-1">模型 3：使用图像增强来微调预训练的模型 <a class="header-anchor" href="#模型-3-使用图像增强来微调预训练的模型" aria-label="Permalink to “模型 3：使用图像增强来微调预训练的模型”">​</a></h4><p>在我们的最后一个模型中，我们将在预定义好的 VGG-19 模型的最后两个块中微调层的位权。我们同样引入了图像增强的概念。图像增强背后的想法和其名字一样。我们从训练数据集中载入现有图像，并且应用转换操作，例如旋转、裁剪、转换、放大缩小等等，来产生新的、改变过的版本。由于这些随机转换，我们每次获取到的图像不一样。我们将应用 tf.keras 中的一个名为 ImageDataGenerator 的优秀工具来帮助构建图像增强器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>train_datagen = tf.keras.preprocessing.image.ImageDataGenerator(rescale=1./255,</span></span>
<span class="line"><span>                                                                zoom_range=0.05, </span></span>
<span class="line"><span>                                                                rotation_range=25,</span></span>
<span class="line"><span>                                                                width_shift_range=0.05, </span></span>
<span class="line"><span>                                                                height_shift_range=0.05, </span></span>
<span class="line"><span>                                                                shear_range=0.05, horizontal_flip=True, </span></span>
<span class="line"><span>                                                                fill_mode=&#39;nearest&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>val_datagen = tf.keras.preprocessing.image.ImageDataGenerator(rescale=1./255)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># build image augmentation generators</span></span>
<span class="line"><span>train_generator = train_datagen.flow(train_data, train_labels_enc, batch_size=BATCH_SIZE, shuffle=True)</span></span>
<span class="line"><span>val_generator = val_datagen.flow(val_data, val_labels_enc, batch_size=BATCH_SIZE, shuffle=False)</span></span></code></pre></div>`,7)),n("p",null,[s[34]||(s[34]=a("我们不会对我们的验证数据集应用任何转换（除非是调整大小，因为这是必须的），因为我们将使用它评估每个纪元的模型性能。对于在传输学习环境中的图像增强的详细解释，请随时查看我上面引用的",-1)),e(p,{href:"https://towardsdatascience.com/a-comprehensive-hands-on-guide-to-transfer-learning-with-real-world-applications-in-deep-learning-212bf3b2f27a"},{default:l(()=>[...s[33]||(s[33]=[a("文章",-1)])]),_:1}),s[35]||(s[35]=a("。让我们从一批图像增强转换中查看一些样本结果。",-1))]),s[80]||(s[80]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>img_id = 0</span></span>
<span class="line"><span>sample_generator = train_datagen.flow(train_data[img_id:img_id+1], train_labels[img_id:img_id+1],</span></span>
<span class="line"><span>                                      batch_size=1)</span></span>
<span class="line"><span>sample = [next(sample_generator) for i in range(0,5)]</span></span>
<span class="line"><span>fig, ax = plt.subplots(1,5, figsize=(16, 6))</span></span>
<span class="line"><span>print(&#39;Labels:&#39;, [item[1][0] for item in sample])</span></span>
<span class="line"><span>l = [ax[i].imshow(sample[i][0][0]) for i in range(0,5)]</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/uploads/malaria13_sampleimages.png" alt="Sample augmented images" title="Sample augmented images"></p><p>你可以清晰的看到与之前的输出的我们图像的轻微变化。我们现在构建我们的学习模型，确保 VGG-19 模型的最后两块是可以训练的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vgg = tf.keras.applications.vgg19.VGG19(include_top=False, weights=&#39;imagenet&#39;, </span></span>
<span class="line"><span>                                        input_shape=INPUT_SHAPE)</span></span>
<span class="line"><span># Freeze the layers</span></span>
<span class="line"><span>vgg.trainable = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set_trainable = False</span></span>
<span class="line"><span>for layer in vgg.layers:</span></span>
<span class="line"><span>    if layer.name in [&#39;block5_conv1&#39;, &#39;block4_conv1&#39;]:</span></span>
<span class="line"><span>        set_trainable = True</span></span>
<span class="line"><span>    if set_trainable:</span></span>
<span class="line"><span>        layer.trainable = True</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        layer.trainable = False</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>base_vgg = vgg</span></span>
<span class="line"><span>base_out = base_vgg.output</span></span>
<span class="line"><span>pool_out = tf.keras.layers.Flatten()(base_out)</span></span>
<span class="line"><span>hidden1 = tf.keras.layers.Dense(512, activation=&#39;relu&#39;)(pool_out)</span></span>
<span class="line"><span>drop1 = tf.keras.layers.Dropout(rate=0.3)(hidden1)</span></span>
<span class="line"><span>hidden2 = tf.keras.layers.Dense(512, activation=&#39;relu&#39;)(drop1)</span></span>
<span class="line"><span>drop2 = tf.keras.layers.Dropout(rate=0.3)(hidden2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>out = tf.keras.layers.Dense(1, activation=&#39;sigmoid&#39;)(drop2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>model = tf.keras.Model(inputs=base_vgg.input, outputs=out)</span></span>
<span class="line"><span>model.compile(optimizer=tf.keras.optimizers.RMSprop(lr=1e-5),</span></span>
<span class="line"><span>                loss=&#39;binary_crossentropy&#39;,</span></span>
<span class="line"><span>                metrics=[&#39;accuracy&#39;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Total Layers:&quot;, len(model.layers))</span></span>
<span class="line"><span>print(&quot;Total trainable layers:&quot;, sum([1 for l in model.layers if l.trainable]))</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>Total Layers: 28</span></span>
<span class="line"><span>Total trainable layers: 16</span></span></code></pre></div><p>在我们的模型中我们降低了学习率，因为我们不想在微调的时候对预训练的层做大的位权更新。模型的训练过程可能有轻微的不同，因为我们使用了数据生成器，因此我们将应用 <code>fit_generator(...)</code> 函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tensorboard_callback = tf.keras.callbacks.TensorBoard(logdir, histogram_freq=1)</span></span>
<span class="line"><span>reduce_lr = tf.keras.callbacks.ReduceLROnPlateau(monitor=&#39;val_loss&#39;, factor=0.5,</span></span>
<span class="line"><span>                              patience=2, min_lr=0.000001)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>callbacks = [reduce_lr, tensorboard_callback]</span></span>
<span class="line"><span>train_steps_per_epoch = train_generator.n // train_generator.batch_size</span></span>
<span class="line"><span>val_steps_per_epoch = val_generator.n // val_generator.batch_size</span></span>
<span class="line"><span>history = model.fit_generator(train_generator, steps_per_epoch=train_steps_per_epoch, epochs=EPOCHS,</span></span>
<span class="line"><span>                              validation_data=val_generator, validation_steps=val_steps_per_epoch, </span></span>
<span class="line"><span>                              verbose=1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>Epoch 1/25</span></span>
<span class="line"><span>271/271 [====] - 133s 489ms/step - loss: 0.2267 - accuracy: 0.9117 - val_loss: 0.1414 - val_accuracy: 0.9531</span></span>
<span class="line"><span>Epoch 2/25</span></span>
<span class="line"><span>271/271 [====] - 129s 475ms/step - loss: 0.1399 - accuracy: 0.9552 - val_loss: 0.1292 - val_accuracy: 0.9589</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>Epoch 24/25</span></span>
<span class="line"><span>271/271 [====] - 128s 473ms/step - loss: 0.0815 - accuracy: 0.9727 - val_loss: 0.1466 - val_accuracy: 0.9682</span></span>
<span class="line"><span>Epoch 25/25</span></span>
<span class="line"><span>271/271 [====] - 128s 473ms/step - loss: 0.0792 - accuracy: 0.9729 - val_loss: 0.1127 - val_accuracy: 0.9641</span></span></code></pre></div><p>这看起来是我们的最好的模型。它给了我们近乎 96.5% 的验证精确率，基于训练精度，它看起来不像我们的第一个模型那样过拟合。这可以通过下列的学习曲线验证。</p><p><img src="https://opensource.com/sites/default/files/uploads/malaria14_learningcurves.png" alt="Learning curves for fine-tuned pre-trained CNN" title="Learning curves for fine-tuned pre-trained CNN"></p><p><em>微调过的预训练 CNN 的学习曲线</em></p><p>让我们保存这个模型，因此我们能够在测试集上使用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>model.save(&#39;vgg_finetuned.h5&#39;)</span></span></code></pre></div><p>这就完成了我们的模型训练阶段。现在我们准备好了在测试集上测试我们模型的性能。</p><h3 id="深度学习模型性能评估" tabindex="-1">深度学习模型性能评估 <a class="header-anchor" href="#深度学习模型性能评估" aria-label="Permalink to “深度学习模型性能评估”">​</a></h3><p>我们将通过在我们的测试集上做预测来评估我们在训练阶段构建的三个模型，因为仅仅验证是不够的！我们同样构建了一个检测工具模块叫做 <code>model_evaluation_utils</code>，我们可以使用相关分类指标用来评估使用我们深度学习模型的性能。第一步是扩展我们的数据集。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>test_imgs_scaled = test_data / 255.</span></span>
<span class="line"><span>test_imgs_scaled.shape, test_labels.shape</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output</span></span>
<span class="line"><span>((8268, 125, 125, 3), (8268,))</span></span></code></pre></div><p>下一步包括载入我们保存的深度学习模型，在测试集上预测。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Load Saved Deep Learning Models</span></span>
<span class="line"><span>basic_cnn = tf.keras.models.load_model(&#39;./basic_cnn.h5&#39;)</span></span>
<span class="line"><span>vgg_frz = tf.keras.models.load_model(&#39;./vgg_frozen.h5&#39;)</span></span>
<span class="line"><span>vgg_ft = tf.keras.models.load_model(&#39;./vgg_finetuned.h5&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Make Predictions on Test Data</span></span>
<span class="line"><span>basic_cnn_preds = basic_cnn.predict(test_imgs_scaled, batch_size=512)</span></span>
<span class="line"><span>vgg_frz_preds = vgg_frz.predict(test_imgs_scaled, batch_size=512)</span></span>
<span class="line"><span>vgg_ft_preds = vgg_ft.predict(test_imgs_scaled, batch_size=512)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>basic_cnn_pred_labels = le.inverse_transform([1 if pred &gt; 0.5 else 0 </span></span>
<span class="line"><span>                                                  for pred in basic_cnn_preds.ravel()])</span></span>
<span class="line"><span>vgg_frz_pred_labels = le.inverse_transform([1 if pred &gt; 0.5 else 0 </span></span>
<span class="line"><span>                                                  for pred in vgg_frz_preds.ravel()])</span></span>
<span class="line"><span>vgg_ft_pred_labels = le.inverse_transform([1 if pred &gt; 0.5 else 0 </span></span>
<span class="line"><span>                                                  for pred in vgg_ft_preds.ravel()])</span></span></code></pre></div><p>下一步是应用我们的 <code>model_evaluation_utils</code> 模块根据相应分类指标来检查每个模块的性能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import model_evaluation_utils as meu</span></span>
<span class="line"><span>import pandas as pd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>basic_cnn_metrics = meu.get_metrics(true_labels=test_labels, predicted_labels=basic_cnn_pred_labels)</span></span>
<span class="line"><span>vgg_frz_metrics = meu.get_metrics(true_labels=test_labels, predicted_labels=vgg_frz_pred_labels)</span></span>
<span class="line"><span>vgg_ft_metrics = meu.get_metrics(true_labels=test_labels, predicted_labels=vgg_ft_pred_labels)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pd.DataFrame([basic_cnn_metrics, vgg_frz_metrics, vgg_ft_metrics], </span></span>
<span class="line"><span>             index=[&#39;Basic CNN&#39;, &#39;VGG-19 Frozen&#39;, &#39;VGG-19 Fine-tuned&#39;])</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/uploads/malaria15_modelaccuracy.png" alt="Model accuracy" title="Model accuracy"></p><p>看起来我们的第三个模型在我们的测试集上执行的最好，给出了一个模型精确性为 96% 的 F1 得分，这非常好，与我们之前提到的研究论文和文章中的更复杂的模型相当。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>疟疾检测不是一个简单的过程，全球的合格人员的不足在病例诊断和治疗当中是一个严重的问题。我们研究了一个关于疟疾的有趣的真实世界的医学影像案例。利用 AI 的、易于构建的、开源的技术在检测疟疾方面可以为我们提供最先进的精确性，因此使 AI 具有社会效益。</p>`,23)),n("p",null,[s[38]||(s[38]=a("我鼓励你查看这篇文章中提到的文章和研究论文，没有它们，我就不能形成概念并写出来。如果你对运行和采纳这些技术感兴趣，本篇文章所有的代码都可以在",-1)),e(p,{href:"https://nbviewer.jupyter.org/github/dipanjanS/data_science_for_all/tree/master/os_malaria_detection/"},{default:l(()=>[...s[36]||(s[36]=[a("我的 GitHub 仓库",-1)])]),_:1}),s[39]||(s[39]=a("获得。记得从",-1)),e(p,{href:"https://ceb.nlm.nih.gov/repositories/malaria-datasets/"},{default:l(()=>[...s[37]||(s[37]=[a("官方网站",-1)])]),_:1}),s[40]||(s[40]=a("下载数据。",-1))]),s[81]||(s[81]=n("p",null,"让我们希望在健康医疗方面更多的采纳开源的 AI 能力，使它在世界范围内变得更便宜、更易用。",-1)),s[82]||(s[82]=n("hr",null,null,-1)),n("p",null,[s[42]||(s[42]=a("via: ",-1)),e(p,{href:"https://opensource.com/article/19/4/detecting-malaria-deep-learning"},{default:l(()=>[...s[41]||(s[41]=[a("https://opensource.com/article/19/4/detecting-malaria-deep-learning",-1)])]),_:1})]),n("p",null,[s[47]||(s[47]=a("作者：",-1)),e(p,{href:"https://opensource.com/users/djsarkar"},{default:l(()=>[...s[43]||(s[43]=[a("Dipanjan (DJ) Sarkar",-1)])]),_:1}),s[48]||(s[48]=a(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[44]||(s[44]=[a("lujun9972",-1)])]),_:1}),s[49]||(s[49]=a(" 译者：",-1)),e(p,{href:"https://github.com/warmfrog"},{default:l(()=>[...s[45]||(s[45]=[a("warmfrog",-1)])]),_:1}),s[50]||(s[50]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[46]||(s[46]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[53]||(s[53]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[51]||(s[51]=[a("LCTT",-1)])]),_:1}),s[54]||(s[54]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[52]||(s[52]=[a("Linux中国",-1)])]),_:1}),s[55]||(s[55]=a(" 荣誉推出",-1))])])}const y=_(c,[["render",d]]);export{v as __pageData,y as default};
