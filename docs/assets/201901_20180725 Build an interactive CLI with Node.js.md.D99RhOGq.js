import{_ as i,a0 as t,w as o,s as c,I as a,x as n,a1 as e,A as l,ao as u}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"使用 Node.js 构建交互式命令行工具 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Node.js 构建交互式命令行工具 | LCTT (201901) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Node.js 构建交互式命令行工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Node.js 构建交互式命令行工具 | LCTT (201901) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201901/20180725 Build an interactive CLI with Node.js","title":"使用 Node.js 构建交互式命令行工具","tag":"201901","desc":""},"relativePath":"201901/20180725 Build an interactive CLI with Node.js.md","filePath":"[post].md"}'),r={name:"201901/20180725 Build an interactive CLI with Node.js.md"};function d(h,s,g,q,k,f){const p=t("Link");return o(),c("div",null,[s[27]||(s[27]=a("h1",{id:"使用-node-js-构建交互式命令行工具",tabindex:"-1"},[n("使用 Node.js 构建交互式命令行工具 "),a("a",{class:"header-anchor",href:"#使用-node-js-构建交互式命令行工具","aria-label":"Permalink to “使用 Node.js 构建交互式命令行工具”"},"​")],-1)),s[28]||(s[28]=a("blockquote",null,[a("p",null,"使用 Node.js 构建一个根据询问创建文件的命令行工具。")],-1)),s[29]||(s[29]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/programming_keyboard_coding.png?itok=E0Vvam7A",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("当用于构建命令行界面（CLI）时，Node.js 十分有用。在这篇文章中，我将会教你如何使用 ",-1)),e(p,{href:"https://nodejs.org/en/"},{default:l(()=>[...s[0]||(s[0]=[n("Node.js",-1)])]),_:1}),s[2]||(s[2]=n(" 来构建一个问一些问题并基于回答创建一个文件的命令行工具。",-1))]),s[30]||(s[30]=a("h3",{id:"开始",tabindex:"-1"},[n("开始 "),a("a",{class:"header-anchor",href:"#开始","aria-label":"Permalink to “开始”"},"​")],-1)),a("p",null,[s[4]||(s[4]=n("首先，创建一个新的 ",-1)),e(p,{href:"https://www.npmjs.com/"},{default:l(()=>[...s[3]||(s[3]=[n("npm",-1)])]),_:1}),s[5]||(s[5]=n(" 包（NPM 是 JavaScript 包管理器）。",-1))]),s[31]||(s[31]=u(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir my-script</span></span>
<span class="line"><span>cd my-script</span></span>
<span class="line"><span>npm init</span></span></code></pre></div><p>NPM 将会问一些问题。随后，我们需要安装一些包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm install --save chalk figlet inquirer shelljs</span></span></code></pre></div><p>这是我们需要的包：</p><ul><li>Chalk：正确设定终端的字符样式</li><li>Figlet：使用普通字符制作大字母的程序（LCTT 译注：使用标准字符，拼凑出图片）</li><li>Inquirer：通用交互式命令行用户界面的集合</li><li>ShellJS：Node.js 版本的可移植 Unix Shell 命令行工具</li></ul><h3 id="创建一个-index-js-文件" tabindex="-1">创建一个 index.js 文件 <a class="header-anchor" href="#创建一个-index-js-文件" aria-label="Permalink to “创建一个 index.js 文件”">​</a></h3><p>现在我们要使用下述内容创建一个 <code>index.js</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const inquirer = require(&quot;inquirer&quot;);</span></span>
<span class="line"><span>const chalk = require(&quot;chalk&quot;);</span></span>
<span class="line"><span>const figlet = require(&quot;figlet&quot;);</span></span>
<span class="line"><span>const shell = require(&quot;shelljs&quot;);</span></span></code></pre></div><h3 id="规划命令行工具" tabindex="-1">规划命令行工具 <a class="header-anchor" href="#规划命令行工具" aria-label="Permalink to “规划命令行工具”">​</a></h3><p>在我们写命令行工具所需的任何代码之前，做计划总是很棒的。这个命令行工具只做一件事：<strong>创建一个文件</strong>。</p><p>它将会问两个问题：文件名是什么以及文件后缀名是什么？然后创建文件，并展示一个包含了所创建文件路径的成功信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// index.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const run = async () =&gt; {</span></span>
<span class="line"><span>  // show script introduction</span></span>
<span class="line"><span>  // ask questions</span></span>
<span class="line"><span>  // create the file</span></span>
<span class="line"><span>  // show success message</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run();</span></span></code></pre></div><p>第一个函数只是该脚本的介绍。让我们使用 <code>chalk</code> 和 <code>figlet</code> 来把它完成。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const init = () =&gt; {</span></span>
<span class="line"><span>  console.log(</span></span>
<span class="line"><span>    chalk.green(</span></span>
<span class="line"><span>      figlet.textSync(&quot;Node JS CLI&quot;, {</span></span>
<span class="line"><span>        font: &quot;Ghost&quot;,</span></span>
<span class="line"><span>        horizontalLayout: &quot;default&quot;,</span></span>
<span class="line"><span>        verticalLayout: &quot;default&quot;</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const run = async () =&gt; {</span></span>
<span class="line"><span>  // show script introduction</span></span>
<span class="line"><span>  init();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // ask questions</span></span>
<span class="line"><span>  // create the file</span></span>
<span class="line"><span>  // show success message</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run();</span></span></code></pre></div><p>然后，我们来写一个函数来问问题。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const askQuestions = () =&gt; {</span></span>
<span class="line"><span>  const questions = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name: &quot;FILENAME&quot;,</span></span>
<span class="line"><span>      type: &quot;input&quot;,</span></span>
<span class="line"><span>      message: &quot;What is the name of the file without extension?&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      type: &quot;list&quot;,</span></span>
<span class="line"><span>      name: &quot;EXTENSION&quot;,</span></span>
<span class="line"><span>      message: &quot;What is the file extension?&quot;,</span></span>
<span class="line"><span>      choices: [&quot;.rb&quot;, &quot;.js&quot;, &quot;.php&quot;, &quot;.css&quot;],</span></span>
<span class="line"><span>      filter: function(val) {</span></span>
<span class="line"><span>        return val.split(&quot;.&quot;)[1];</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ];</span></span>
<span class="line"><span>  return inquirer.prompt(questions);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const run = async () =&gt; {</span></span>
<span class="line"><span>  // show script introduction</span></span>
<span class="line"><span>  init();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // ask questions</span></span>
<span class="line"><span>  const answers = await askQuestions();</span></span>
<span class="line"><span>  const { FILENAME, EXTENSION } = answers;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // create the file</span></span>
<span class="line"><span>  // show success message</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>注意，常量 <code>FILENAME</code> 和 <code>EXTENSIONS</code> 来自 <code>inquirer</code> 包。</p><p>下一步将会创建文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const createFile = (filename, extension) =&gt; {</span></span>
<span class="line"><span>  const filePath = \`\${process.cwd()}/\${filename}.\${extension}\`</span></span>
<span class="line"><span>  shell.touch(filePath);</span></span>
<span class="line"><span>  return filePath;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const run = async () =&gt; {</span></span>
<span class="line"><span>  // show script introduction</span></span>
<span class="line"><span>  init();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // ask questions</span></span>
<span class="line"><span>  const answers = await askQuestions();</span></span>
<span class="line"><span>  const { FILENAME, EXTENSION } = answers;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // create the file</span></span>
<span class="line"><span>  const filePath = createFile(FILENAME, EXTENSION);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // show success message</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>最后，重要的是，我们将展示成功信息以及文件路径。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const success = (filepath) =&gt; {</span></span>
<span class="line"><span>  console.log(</span></span>
<span class="line"><span>    chalk.white.bgGreen.bold(\`Done! File created at \${filepath}\`)</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const run = async () =&gt; {</span></span>
<span class="line"><span>  // show script introduction</span></span>
<span class="line"><span>  init();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // ask questions</span></span>
<span class="line"><span>  const answers = await askQuestions();</span></span>
<span class="line"><span>  const { FILENAME, EXTENSION } = answers;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // create the file</span></span>
<span class="line"><span>  const filePath = createFile(FILENAME, EXTENSION);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // show success message</span></span>
<span class="line"><span>  success(filePath);</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>来让我们通过运行 <code>node index.js</code> 来测试这个脚本，这是我们得到的：</p><p><img src="https://opensource.com/sites/default/files/uploads/nodejs_output.png" alt=""></p><h3 id="完整代码" tabindex="-1">完整代码 <a class="header-anchor" href="#完整代码" aria-label="Permalink to “完整代码”">​</a></h3><p>下述代码为完整代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const inquirer = require(&quot;inquirer&quot;);</span></span>
<span class="line"><span>const chalk = require(&quot;chalk&quot;);</span></span>
<span class="line"><span>const figlet = require(&quot;figlet&quot;);</span></span>
<span class="line"><span>const shell = require(&quot;shelljs&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const init = () =&gt; {</span></span>
<span class="line"><span>  console.log(</span></span>
<span class="line"><span>    chalk.green(</span></span>
<span class="line"><span>      figlet.textSync(&quot;Node JS CLI&quot;, {</span></span>
<span class="line"><span>        font: &quot;Ghost&quot;,</span></span>
<span class="line"><span>        horizontalLayout: &quot;default&quot;,</span></span>
<span class="line"><span>        verticalLayout: &quot;default&quot;</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const askQuestions = () =&gt; {</span></span>
<span class="line"><span>  const questions = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name: &quot;FILENAME&quot;,</span></span>
<span class="line"><span>      type: &quot;input&quot;,</span></span>
<span class="line"><span>      message: &quot;What is the name of the file without extension?&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      type: &quot;list&quot;,</span></span>
<span class="line"><span>      name: &quot;EXTENSION&quot;,</span></span>
<span class="line"><span>      message: &quot;What is the file extension?&quot;,</span></span>
<span class="line"><span>      choices: [&quot;.rb&quot;, &quot;.js&quot;, &quot;.php&quot;, &quot;.css&quot;],</span></span>
<span class="line"><span>      filter: function(val) {</span></span>
<span class="line"><span>        return val.split(&quot;.&quot;)[1];</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ];</span></span>
<span class="line"><span>  return inquirer.prompt(questions);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const createFile = (filename, extension) =&gt; {</span></span>
<span class="line"><span>  const filePath = \`\${process.cwd()}/\${filename}.\${extension}\`</span></span>
<span class="line"><span>  shell.touch(filePath);</span></span>
<span class="line"><span>  return filePath;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const success = filepath =&gt; {</span></span>
<span class="line"><span>  console.log(</span></span>
<span class="line"><span>    chalk.white.bgGreen.bold(\`Done! File created at \${filepath}\`)</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const run = async () =&gt; {</span></span>
<span class="line"><span>  // show script introduction</span></span>
<span class="line"><span>  init();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // ask questions</span></span>
<span class="line"><span>  const answers = await askQuestions();</span></span>
<span class="line"><span>  const { FILENAME, EXTENSION } = answers;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // create the file</span></span>
<span class="line"><span>  const filePath = createFile(FILENAME, EXTENSION);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // show success message</span></span>
<span class="line"><span>  success(filePath);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run();</span></span></code></pre></div><h3 id="使用这个脚本" tabindex="-1">使用这个脚本 <a class="header-anchor" href="#使用这个脚本" aria-label="Permalink to “使用这个脚本”">​</a></h3><p>想要在其它地方执行这个脚本，在你的 <code>package.json</code> 文件中添加一个 <code>bin</code> 部分，并执行 <code>npm link</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;creator&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,</span></span>
<span class="line"><span>    &quot;start&quot;: &quot;node index.js&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span>  &quot;dependencies&quot;: {</span></span>
<span class="line"><span>    &quot;chalk&quot;: &quot;^2.4.1&quot;,</span></span>
<span class="line"><span>    &quot;figlet&quot;: &quot;^1.2.0&quot;,</span></span>
<span class="line"><span>    &quot;inquirer&quot;: &quot;^6.0.0&quot;,</span></span>
<span class="line"><span>    &quot;shelljs&quot;: &quot;^0.8.2&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;bin&quot;: {</span></span>
<span class="line"><span>    &quot;creator&quot;: &quot;./index.js&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>执行 <code>npm link</code> 使得这个脚本可以在任何地方调用。</p><p>这就是是当你运行这个命令时的结果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/usr/bin/creator -&gt; /usr/lib/node_modules/creator/index.js</span></span>
<span class="line"><span>/usr/lib/node_modules/creator -&gt; /home/hugo/code/creator</span></span></code></pre></div><p>这会连接 <code>index.js</code> 作为一个可执行文件。这是完全可能的，因为这个 CLI 脚本的第一行是 <code>#!/usr/bin/env node</code>。</p><p>现在我们可以通过执行如下命令来调用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ creator</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>正如你所看到的，Node.js 使得构建一个好的命令行工具变得非常简单。如果你希望了解更多内容，查看下列包。</p>`,37)),a("ul",null,[a("li",null,[e(p,{href:"https://github.com/sindresorhus/meow"},{default:l(()=>[...s[6]||(s[6]=[n("meow",-1)])]),_:1}),s[7]||(s[7]=n("：一个简单的命令行助手工具",-1))]),a("li",null,[e(p,{href:"https://github.com/yargs/yargs"},{default:l(()=>[...s[8]||(s[8]=[n("yargs",-1)])]),_:1}),s[9]||(s[9]=n("：一个命令行参数解析工具",-1))]),a("li",null,[e(p,{href:"https://github.com/zeit/pkg"},{default:l(()=>[...s[10]||(s[10]=[n("pkg",-1)])]),_:1}),s[11]||(s[11]=n("：将你的 Node.js 程序包装在一个可执行文件中。",-1))])]),s[32]||(s[32]=a("p",null,"在评论中留下你关于构建命令行工具的经验吧！",-1)),s[33]||(s[33]=a("hr",null,null,-1)),a("p",null,[s[13]||(s[13]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/18/7/node-js-interactive-cli"},{default:l(()=>[...s[12]||(s[12]=[n("https://opensource.com/article/18/7/node-js-interactive-cli",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/hugodias"},{default:l(()=>[...s[14]||(s[14]=[n("Hugo Dias",-1)])]),_:1}),s[19]||(s[19]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[15]||(s[15]=[n("lujun9972",-1)])]),_:1}),s[20]||(s[20]=n(" 译者：",-1)),e(p,{href:"https://github.com/bestony"},{default:l(()=>[...s[16]||(s[16]=[n("bestony",-1)])]),_:1}),s[21]||(s[21]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[24]||(s[24]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[22]||(s[22]=[n("LCTT",-1)])]),_:1}),s[25]||(s[25]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[23]||(s[23]=[n("Linux中国",-1)])]),_:1}),s[26]||(s[26]=n(" 荣誉推出",-1))])])}const N=i(r,[["render",d]]);export{y as __pageData,N as default};
