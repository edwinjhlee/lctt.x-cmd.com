import{_ as l,W as o,s as r,u as d,I as a,ah as i,w as s,Z as p,A as t}from"./chunks/framework.DYeiaKBS.js";import"./chunks/theme.DJBbXXYU.js";const y=JSON.parse('{"title":"创建一个容器化的机器学习模型 | LCTT x X-CMD","titleTemplate":false,"description":"创建一个容器化的机器学习模型 | LCTT (201812) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"创建一个容器化的机器学习模型 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"创建一个容器化的机器学习模型 | LCTT (201812) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201812/20181102 Create a containerized machine learning model","title":"创建一个容器化的机器学习模型","tag":"201812"},"relativePath":"201812/20181102 Create a containerized machine learning model.md","filePath":"[post].md"}'),m={name:"201812/20181102 Create a containerized machine learning model.md"};function u(g,n,b,c,f,h){const e=o("Link");return d(),r("div",null,[n[40]||(n[40]=a("h1",{id:"创建一个容器化的机器学习模型",tabindex:"-1"},[s("创建一个容器化的机器学习模型 "),a("a",{class:"header-anchor",href:"#创建一个容器化的机器学习模型","aria-label":"Permalink to 创建一个容器化的机器学习模型"},"​")],-1)),n[41]||(n[41]=a("p",null,[a("img",{src:"https://fedoramagazine.org/wp-content/uploads/2018/10/machinelearning-816x345.jpg",alt:""})],-1)),a("p",null,[n[3]||(n[3]=s("数据科学家在创建机器学习模型后，必须将其部署到生产中。要在不同的基础架构上运行它，使用容器并通过 REST API 公开模型是部署机器学习模型的常用方法。本文演示了如何在 ")),p(e,{href:"https://fedoramagazine.org/running-containers-with-podman/"},{default:t(()=>n[0]||(n[0]=[s("Podman")])),_:1}),n[4]||(n[4]=s(" 容器中使用 ")),p(e,{href:"https://connexion.readthedocs.io/en/latest/"},{default:t(()=>n[1]||(n[1]=[s("Connexion")])),_:1}),n[5]||(n[5]=s(" 推出使用 REST API 的 ")),p(e,{href:"https://www.tensorflow.org"},{default:t(()=>n[2]||(n[2]=[s("TensorFlow")])),_:1}),n[6]||(n[6]=s(" 机器学习模型。"))]),n[42]||(n[42]=i('<h3 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to 准备">​</a></h3><p>首先，使用以下命令安装 Podman：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo dnf -y install podman</span></span></code></pre></div><p>接下来，为容器创建一个新文件夹并切换到该目录。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir deployment_container &amp;&amp; cd deployment_container</span></span></code></pre></div><h3 id="tensorflow-模型的-rest-api" tabindex="-1">TensorFlow 模型的 REST API <a class="header-anchor" href="#tensorflow-模型的-rest-api" aria-label="Permalink to TensorFlow 模型的 REST API">​</a></h3>',6)),a("p",null,[n[8]||(n[8]=s("下一步是为机器学习模型创建 REST API。这个 ")),p(e,{href:"https://github.com/svenboesiger/titanic_tf_ml_model"},{default:t(()=>n[7]||(n[7]=[s("github 仓库")])),_:1}),n[9]||(n[9]=s("包含一个预训练模型，以及能让 REST API 工作的设置。"))]),n[43]||(n[43]=i('<p>使用以下命令在 <code>deployment_container</code> 目录中克隆它：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git clone https://github.com/svenboesiger/titanic_tf_ml_model.git</span></span></code></pre></div><h4 id="prediction-py-和-ml-model" tabindex="-1">prediction.py 和 ml_model/ <a class="header-anchor" href="#prediction-py-和-ml-model" aria-label="Permalink to prediction.py 和 ml_model/">​</a></h4>',3)),a("p",null,[p(e,{href:"https://github.com/svenboesiger/titanic_tf_ml_model/blob/master/prediction.py"},{default:t(()=>n[10]||(n[10]=[s("prediction.py")])),_:1}),n[12]||(n[12]=s(" 能进行 Tensorflow 预测，而 20x20x20 神经网络的权重位于文件夹 ")),p(e,{href:"https://github.com/svenboesiger/titanic_tf_ml_model/tree/master/ml_model/titanic"},{default:t(()=>n[11]||(n[11]=[s("ml_model/")])),_:1}),n[13]||(n[13]=s(" 中。"))]),n[44]||(n[44]=a("h4",{id:"swagger-yaml",tabindex:"-1"},[s("swagger.yaml "),a("a",{class:"header-anchor",href:"#swagger-yaml","aria-label":"Permalink to swagger.yaml"},"​")],-1)),a("p",null,[p(e,{href:"https://github.com/svenboesiger/titanic_tf_ml_model/blob/master/swagger.yaml"},{default:t(()=>n[14]||(n[14]=[s("swagger.yaml")])),_:1}),n[16]||(n[16]=s(" 使用 ")),p(e,{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md"},{default:t(()=>n[15]||(n[15]=[s("Swagger规范")])),_:1}),n[17]||(n[17]=s(" 定义 Connexion 库的 API。此文件包含让你的服务器提供输入参数验证、输出响应数据验证、URL 端点定义所需的所有信息。"))]),n[45]||(n[45]=i(`<p>额外地，Connexion 还将给你提供一个简单但有用的单页 Web 应用，它演示了如何使用 Javascript 调用 API 和更新 DOM。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>swagger: &quot;2.0&quot;</span></span>
<span class="line"><span>info:</span></span>
<span class="line"><span>  description: This is the swagger file that goes with our server code</span></span>
<span class="line"><span>  version: &quot;1.0.0&quot;</span></span>
<span class="line"><span>  title: Tensorflow Podman Article</span></span>
<span class="line"><span>consumes:</span></span>
<span class="line"><span>  - &quot;application/json&quot;</span></span>
<span class="line"><span>produces:</span></span>
<span class="line"><span>  - &quot;application/json&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>basePath: &quot;/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>paths:</span></span>
<span class="line"><span>  /survival_probability:</span></span>
<span class="line"><span>    post:</span></span>
<span class="line"><span>      operationId: &quot;prediction.post&quot;</span></span>
<span class="line"><span>      tags:</span></span>
<span class="line"><span>        - &quot;Prediction&quot;</span></span>
<span class="line"><span>      summary: &quot;The prediction data structure provided by the server application&quot;</span></span>
<span class="line"><span>      description: &quot;Retrieve the chance of surviving the titanic disaster&quot;</span></span>
<span class="line"><span>      parameters:</span></span>
<span class="line"><span>        - in: body</span></span>
<span class="line"><span>          name: passenger</span></span>
<span class="line"><span>          required: true</span></span>
<span class="line"><span>          schema:</span></span>
<span class="line"><span>            $ref: &#39;#/definitions/PredictionPost&#39;</span></span>
<span class="line"><span>      responses:</span></span>
<span class="line"><span>        &#39;201&#39;:</span></span>
<span class="line"><span>          description: &#39;Survival probability of an individual Titanic passenger&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>definitions:</span></span>
<span class="line"><span>  PredictionPost:</span></span>
<span class="line"><span>    type: object</span></span></code></pre></div><h4 id="server-py-和-requirements-txt" tabindex="-1">server.py 和 requirements.txt <a class="header-anchor" href="#server-py-和-requirements-txt" aria-label="Permalink to server.py 和 requirements.txt">​</a></h4>`,3)),a("p",null,[p(e,{href:"https://github.com/svenboesiger/titanic_tf_ml_model/blob/master/server.py"},{default:t(()=>n[18]||(n[18]=[s("server.py")])),_:1}),n[19]||(n[19]=s(" 定义了启动 Connexion 服务器的入口点。"))]),n[46]||(n[46]=i(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import connexion</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = connexion.App(__name__, specification_dir=&#39;./&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.add_api(&#39;swagger.yaml&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span> app.run(debug=True)</span></span></code></pre></div>`,1)),a("p",null,[p(e,{href:"https://github.com/svenboesiger/titanic_tf_ml_model/blob/master/requirements.txt"},{default:t(()=>n[20]||(n[20]=[s("requirements.txt")])),_:1}),n[21]||(n[21]=s(" 定义了运行程序所需的 python 包。"))]),n[47]||(n[47]=i(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>connexion</span></span>
<span class="line"><span>tensorflow</span></span>
<span class="line"><span>pandas</span></span></code></pre></div><h3 id="容器化" tabindex="-1">容器化！ <a class="header-anchor" href="#容器化" aria-label="Permalink to 容器化！">​</a></h3><p>为了让 Podman 构建映像，请在上面的准备步骤中创建的 <code>deployment_container</code> 目录中创建一个名为 <code>Dockerfile</code> 的新文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FROM fedora:28</span></span>
<span class="line"><span></span></span>
<span class="line"><span># File Author / Maintainer</span></span>
<span class="line"><span>MAINTAINER Sven Boesiger &lt;donotspam@ujelang.com&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Update the sources</span></span>
<span class="line"><span>RUN dnf -y update --refresh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Install additional dependencies</span></span>
<span class="line"><span>RUN dnf -y install libstdc++</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN dnf -y autoremove</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Copy the application folder inside the container</span></span>
<span class="line"><span>ADD /titanic_tf_ml_model /titanic_tf_ml_model</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Get pip to download and install requirements:</span></span>
<span class="line"><span>RUN pip3 install -r /titanic_tf_ml_model/requirements.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Expose ports</span></span>
<span class="line"><span>EXPOSE 5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Set the default directory where CMD will execute</span></span>
<span class="line"><span>WORKDIR /titanic_tf_ml_model</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Set the default command to execute</span></span>
<span class="line"><span># when creating a new container</span></span>
<span class="line"><span>CMD python3 server.py</span></span></code></pre></div><p>接下来，使用以下命令构建容器镜像：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>podman build -t ml_deployment .</span></span></code></pre></div><h3 id="运行容器" tabindex="-1">运行容器 <a class="header-anchor" href="#运行容器" aria-label="Permalink to 运行容器">​</a></h3><p>随着容器镜像的构建和准备就绪，你可以使用以下命令在本地运行它：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>podman run -p 5000:5000 ml_deployment</span></span></code></pre></div>`,9)),a("p",null,[n[23]||(n[23]=s("在 Web 浏览器中输入 ")),p(e,{href:"http://0.0.0.0:5000/"},{default:t(()=>n[22]||(n[22]=[s("http://0.0.0.0:5000/ui")])),_:1}),n[24]||(n[24]=s(" 访问 Swagger/Connexion UI 并测试模型："))]),n[48]||(n[48]=a("p",null,[a("img",{src:"https://fedoramagazine.org/wp-content/uploads/2018/10/Screenshot-from-2018-10-27-14-46-56-682x1024.png",alt:""})],-1)),n[49]||(n[49]=a("p",null,"当然，你现在也可以在应用中通过 REST API 访问模型。",-1)),n[50]||(n[50]=a("hr",null,null,-1)),a("p",null,[n[26]||(n[26]=s("via: ")),p(e,{href:"https://fedoramagazine.org/create-containerized-machine-learning-model/"},{default:t(()=>n[25]||(n[25]=[s("https://fedoramagazine.org/create-containerized-machine-learning-model/")])),_:1})]),a("p",null,[n[31]||(n[31]=s("作者：")),p(e,{href:"https://fedoramagazine.org/author/r00nz/"},{default:t(()=>n[27]||(n[27]=[s("Sven Bösiger")])),_:1}),n[32]||(n[32]=s(" 选题：")),p(e,{href:"https://github.com/lujun9972"},{default:t(()=>n[28]||(n[28]=[s("lujun9972")])),_:1}),n[33]||(n[33]=s(" 译者：")),p(e,{href:"https://github.com/geekpi"},{default:t(()=>n[29]||(n[29]=[s("geekpi")])),_:1}),n[34]||(n[34]=s(" 校对：")),p(e,{href:"https://github.com/wxy"},{default:t(()=>n[30]||(n[30]=[s("wxy")])),_:1})]),a("p",null,[n[37]||(n[37]=s("本文由 ")),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>n[35]||(n[35]=[s("LCTT")])),_:1}),n[38]||(n[38]=s(" 原创编译，")),p(e,{href:"https://linux.cn/"},{default:t(()=>n[36]||(n[36]=[s("Linux中国")])),_:1}),n[39]||(n[39]=s(" 荣誉推出"))])])}const C=l(m,[["render",u]]);export{y as __pageData,C as default};
