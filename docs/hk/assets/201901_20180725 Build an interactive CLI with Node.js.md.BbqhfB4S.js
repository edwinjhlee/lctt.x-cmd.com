import{_ as i,a0 as t,w as o,s as c,I as a,x as n,a1 as e,A as l,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"使用 Node.js 構建交互式命令列工具 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Node.js 構建交互式命令列工具 | LCTT (201901) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Node.js 構建交互式命令列工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Node.js 構建交互式命令列工具 | LCTT (201901) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201901/20180725 Build an interactive CLI with Node.js","title":"使用 Node.js 構建交互式命令列工具","tag":"201901","desc":""},"relativePath":"201901/20180725 Build an interactive CLI with Node.js.md","filePath":"[post].md"}'),r={name:"201901/20180725 Build an interactive CLI with Node.js.md"};function d(h,s,g,q,k,f){const p=t("Link");return o(),c("div",null,[s[27]||(s[27]=a("h1",{id:"使用-node-js-構建交互式命令列工具",tabindex:"-1"},[n("使用 Node.js 構建交互式命令列工具 "),a("a",{class:"header-anchor",href:"#使用-node-js-構建交互式命令列工具","aria-label":"Permalink to “使用 Node.js 構建交互式命令列工具”"},"​")],-1)),s[28]||(s[28]=a("blockquote",null,[a("p",null,"使用 Node.js 構建一個根據詢問創建文件的命令列工具。")],-1)),s[29]||(s[29]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/programming_keyboard_coding.png?itok=E0Vvam7A",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("當用於構建命令列界面（CLI）時，Node.js 十分有用。在這篇文章中，我將會教你如何使用 ",-1)),e(p,{href:"https://nodejs.org/en/"},{default:l(()=>[...s[0]||(s[0]=[n("Node.js",-1)])]),_:1}),s[2]||(s[2]=n(" 來構建一個問一些問題並基於回答創建一個文件的命令列工具。",-1))]),s[30]||(s[30]=a("h3",{id:"開始",tabindex:"-1"},[n("開始 "),a("a",{class:"header-anchor",href:"#開始","aria-label":"Permalink to “開始”"},"​")],-1)),a("p",null,[s[4]||(s[4]=n("首先，創建一個新的 ",-1)),e(p,{href:"https://www.npmjs.com/"},{default:l(()=>[...s[3]||(s[3]=[n("npm",-1)])]),_:1}),s[5]||(s[5]=n(" 包（NPM 是 JavaScript 包管理器）。",-1))]),s[31]||(s[31]=u(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir my-script</span></span>
<span class="line"><span>cd my-script</span></span>
<span class="line"><span>npm init</span></span></code></pre></div><p>NPM 將會問一些問題。隨後，我們需要安裝一些包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm install --save chalk figlet inquirer shelljs</span></span></code></pre></div><p>這是我們需要的包：</p><ul><li>Chalk：正確設定終端的字符樣式</li><li>Figlet：使用普通字符製作大字母的程序（LCTT 譯註：使用標準字符，拼湊出圖片）</li><li>Inquirer：通用交互式命令列用户界面的集合</li><li>ShellJS：Node.js 版本的可移植 Unix Shell 命令列工具</li></ul><h3 id="創建一個-index-js-文件" tabindex="-1">創建一個 index.js 文件 <a class="header-anchor" href="#創建一個-index-js-文件" aria-label="Permalink to “創建一個 index.js 文件”">​</a></h3><p>現在我們要使用下述內容創建一個 <code>index.js</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const inquirer = require(&quot;inquirer&quot;);</span></span>
<span class="line"><span>const chalk = require(&quot;chalk&quot;);</span></span>
<span class="line"><span>const figlet = require(&quot;figlet&quot;);</span></span>
<span class="line"><span>const shell = require(&quot;shelljs&quot;);</span></span></code></pre></div><h3 id="規劃命令列工具" tabindex="-1">規劃命令列工具 <a class="header-anchor" href="#規劃命令列工具" aria-label="Permalink to “規劃命令列工具”">​</a></h3><p>在我們寫命令列工具所需的任何代碼之前，做計劃總是很棒的。這個命令列工具只做一件事：<strong>創建一個文件</strong>。</p><p>它將會問兩個問題：文件名是什麼以及文件後綴名是什麼？然後創建文件，並展示一個包含了所創建文件路徑的成功信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// index.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const run = async () =&gt; {</span></span>
<span class="line"><span>  // show script introduction</span></span>
<span class="line"><span>  // ask questions</span></span>
<span class="line"><span>  // create the file</span></span>
<span class="line"><span>  // show success message</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run();</span></span></code></pre></div><p>第一個函數只是該腳本的介紹。讓我們使用 <code>chalk</code> 和 <code>figlet</code> 來把它完成。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const init = () =&gt; {</span></span>
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
<span class="line"><span>run();</span></span></code></pre></div><p>然後，我們來寫一個函數來問問題。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const askQuestions = () =&gt; {</span></span>
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
<span class="line"><span>};</span></span></code></pre></div><p>注意，常量 <code>FILENAME</code> 和 <code>EXTENSIONS</code> 來自 <code>inquirer</code> 包。</p><p>下一步將會創建文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const createFile = (filename, extension) =&gt; {</span></span>
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
<span class="line"><span>};</span></span></code></pre></div><p>最後，重要的是，我們將展示成功信息以及文件路徑。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const success = (filepath) =&gt; {</span></span>
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
<span class="line"><span>};</span></span></code></pre></div><p>來讓我們通過運行 <code>node index.js</code> 來測試這個腳本，這是我們得到的：</p><p><img src="https://opensource.com/sites/default/files/uploads/nodejs_output.png" alt=""></p><h3 id="完整代碼" tabindex="-1">完整代碼 <a class="header-anchor" href="#完整代碼" aria-label="Permalink to “完整代碼”">​</a></h3><p>下述代碼為完整代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env node</span></span>
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
<span class="line"><span>run();</span></span></code></pre></div><h3 id="使用這個腳本" tabindex="-1">使用這個腳本 <a class="header-anchor" href="#使用這個腳本" aria-label="Permalink to “使用這個腳本”">​</a></h3><p>想要在其它地方執行這個腳本，在你的 <code>package.json</code> 文件中添加一個 <code>bin</code> 部分，並執行 <code>npm link</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>執行 <code>npm link</code> 使得這個腳本可以在任何地方調用。</p><p>這就是是當你運行這個命令時的結果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/usr/bin/creator -&gt; /usr/lib/node_modules/creator/index.js</span></span>
<span class="line"><span>/usr/lib/node_modules/creator -&gt; /home/hugo/code/creator</span></span></code></pre></div><p>這會連接 <code>index.js</code> 作為一個可執行文件。這是完全可能的，因為這個 CLI 腳本的第一行是 <code>#!/usr/bin/env node</code>。</p><p>現在我們可以通過執行如下命令來調用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ creator</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>正如你所看到的，Node.js 使得構建一個好的命令列工具變得非常簡單。如果你希望瞭解更多內容，查看下列包。</p>`,37)),a("ul",null,[a("li",null,[e(p,{href:"https://github.com/sindresorhus/meow"},{default:l(()=>[...s[6]||(s[6]=[n("meow",-1)])]),_:1}),s[7]||(s[7]=n("：一個簡單的命令列助手工具",-1))]),a("li",null,[e(p,{href:"https://github.com/yargs/yargs"},{default:l(()=>[...s[8]||(s[8]=[n("yargs",-1)])]),_:1}),s[9]||(s[9]=n("：一個命令列參數解析工具",-1))]),a("li",null,[e(p,{href:"https://github.com/zeit/pkg"},{default:l(()=>[...s[10]||(s[10]=[n("pkg",-1)])]),_:1}),s[11]||(s[11]=n("：將你的 Node.js 程序包裝在一個可執行文件中。",-1))])]),s[32]||(s[32]=a("p",null,"在評論中留下你關於構建命令列工具的經驗吧！",-1)),s[33]||(s[33]=a("hr",null,null,-1)),a("p",null,[s[13]||(s[13]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/18/7/node-js-interactive-cli"},{default:l(()=>[...s[12]||(s[12]=[n("https://opensource.com/article/18/7/node-js-interactive-cli",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/hugodias"},{default:l(()=>[...s[14]||(s[14]=[n("Hugo Dias",-1)])]),_:1}),s[19]||(s[19]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[15]||(s[15]=[n("lujun9972",-1)])]),_:1}),s[20]||(s[20]=n(" 譯者：",-1)),e(p,{href:"https://github.com/bestony"},{default:l(()=>[...s[16]||(s[16]=[n("bestony",-1)])]),_:1}),s[21]||(s[21]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[24]||(s[24]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[22]||(s[22]=[n("LCTT",-1)])]),_:1}),s[25]||(s[25]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[23]||(s[23]=[n("Linux中國",-1)])]),_:1}),s[26]||(s[26]=n(" 榮譽推出",-1))])])}const N=i(r,[["render",d]]);export{y as __pageData,N as default};
