import{_ as a,w as n,s as p,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"用帶有 Amazon Cognito Identity SDK 的 webpack 打包 JavaScript | LCTT x X-CMD","titleTemplate":false,"description":"用帶有 Amazon Cognito Identity SDK 的 webpack 打包 JavaScript | LCTT (201612) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用帶有 Amazon Cognito Identity SDK 的 webpack 打包 JavaScript | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用帶有 Amazon Cognito Identity SDK 的 webpack 打包 JavaScript | LCTT (201612) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201612/20160908 Using webpack with the Amazon Cognito Identity SDK for JavaScript","title":"用帶有 Amazon Cognito Identity SDK 的 webpack 打包 JavaScript","tag":"201612","desc":""},"relativePath":"201612/20160908 Using webpack with the Amazon Cognito Identity SDK for JavaScript.md","filePath":"[post].md"}'),e={name:"201612/20160908 Using webpack with the Amazon Cognito Identity SDK for JavaScript.md"};function i(o,s,l,c,r,h){return n(),p("div",null,[...s[0]||(s[0]=[t(`<h1 id="用帶有-amazon-cognito-identity-sdk-的-webpack-打包-javascript" tabindex="-1">用帶有 Amazon Cognito Identity SDK 的 webpack 打包 JavaScript <a class="header-anchor" href="#用帶有-amazon-cognito-identity-sdk-的-webpack-打包-javascript" aria-label="Permalink to “用帶有 Amazon Cognito Identity SDK 的 webpack 打包 JavaScript”">​</a></h1><p>這篇文章針對開發和部署基於 JavaScript 的應用（服務器端的 Node.js 或者客户端）的各種經驗水平的開發者，通過本文，你將看到如何把 AWS SDK， Amazon Cognito Identity SDK 嵌入到 JavaScript 中，以及如何使用流行的 [webpack][1] 模組打包器。</p><p>2016 年 7 月， AWS [推出了 Amazon Cognito 用户庫（user pool）][2]，這個新特性極大的方便了開發者在移動和 Web 應用程序上添加註冊和登錄功能。為了讓開發者更容易在自己的應用程序中實現用户庫功能，我們也發佈了[用於 JavaScript 的 Amazon Cognito Identity SDK][3]。</p><p>Amazon Cognito 用户庫可以讓你在移動和 Web 應用程序上添加用户註冊和登錄功能更加容易。全託管用户庫可以擴展到數以百萬計的用户，你可以在每個 AWS 賬户下有多重目錄。創建一個用户庫只需要幾分鐘的時間，並且你可以決定當一個新用户在你的應用程序或服務上註冊時哪些屬性（包括地址、郵箱、電話號碼以及自定義屬性）是強制的，哪些是可選擇的。你的應用程序也可以指定所需的密碼強度，指定用户需要進行多因素認證（MFA），以及通過電話號碼或者郵件地址來驗證新用户，從而進一步加強應用程序的安全性。</p><p>如果你是首次接觸用於 JavaScript 的 Amazon Cognito Identity SDK，那麼請先閲讀[這篇 AWS 文章][4]作為開始。</p><h3 id="為什麼在-javascript-上使用-asset-及模組捆綁的-amazon-cogtito-identity-sdk" tabindex="-1">為什麼在 JavaScript 上使用 Asset 及模組捆綁的 Amazon Cogtito Identity SDK <a class="header-anchor" href="#為什麼在-javascript-上使用-asset-及模組捆綁的-amazon-cogtito-identity-sdk" aria-label="Permalink to “為什麼在 JavaScript 上使用 Asset 及模組捆綁的 Amazon Cogtito Identity SDK”">​</a></h3><p>今天，針對移動和桌面的現代 Web 應用程序都能為用户提供安全、快捷、靈敏以及類本地應用的體驗。毫無疑問，現代的瀏覽器功能足夠強大，能夠肩負起大量可能的功能實現。許多流行的實現很大程度上依賴於 JavaScript 應用程序通過某種形式的 asset 封裝和/或模組捆綁進行部署。這使得許多開發人員能夠很好的維護自己的 JavaScript 應用程序，並且可以通過使用 script 標籤創建一個或多個可以加載到客户端瀏覽器上的文件。</p><p>關於如何實現打包有許多爭鳴，包括 [Grunt][5] 和 [Gulp][6] 這樣的 task runner，以及 [Browserity][7] 這樣的打包器。然而，一個普遍的共識是， asset 打包不僅可以改善加載時間 - 它可以在確保可測試性和健壯性的前提下使你的應用程序模組化。</p><h3 id="使用帶有-amazon-cognito-identity-sdk-的-webpack-打包-javascript" tabindex="-1">使用帶有 Amazon Cognito Identity SDK 的 webpack 打包 JavaScript <a class="header-anchor" href="#使用帶有-amazon-cognito-identity-sdk-的-webpack-打包-javascript" aria-label="Permalink to “使用帶有 Amazon Cognito Identity SDK 的 webpack 打包 JavaScript”">​</a></h3><p>我們接到了許多請求，要求我們提供如何在 webpack 環境下整合用於 JavaScript 的 Amazon Cognito Identity SDK 的更多細節。我們特地要求確保 webpack 正確管理一下第三方的依賴包：</p><ul><li>[用於 BigInteger 計算的 JavaScript BN 庫][8]（jsbn）</li><li>[jsbn 擴展][9]及包含大多數公共 BigInteger 方法的其它 jsbn 方法（jsbn2）</li><li>[Stanford JavaScript Crypto 庫][10]（jscl）</li></ul><p>通過這些例子，可以看到，下面這些 bower 庫都被 bower.json 使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&quot;aws-cognito-sdk&quot;: &quot;https://raw.githubusercontent.com/aws/amazon-cognito-identity-js/master/dist/aws-cognito-sdk.js&quot;,</span></span>
<span class="line"><span>&quot;amazon-cognito-identity&quot;: &quot;https://raw.githubusercontent.com/aws/amazon-cognito-identity-js/master/dist/amazon-cognito-identity.min.js&quot;,</span></span>
<span class="line"><span>&quot;sjcl&quot;: &quot;https://raw.githubusercontent.com/bitwiseshiftleft/sjcl/master/sjcl.js&quot;,</span></span>
<span class="line"><span>&quot;jsbn&quot;: &quot;https://raw.githubusercontent.com/andyperlitch/jsbn/master/index.js&quot;,</span></span></code></pre></div><p>出於我們前面給出的關於 asset 打包對於開發過程的重要性的原因，除非你的應用程序非常小，否則使用像 webpack 這樣的 asset 打包工具幾乎總是必須的。當然，還有一個方法是可以通過使用標籤簡單的處理所有依賴關係。然而，這會污染全局命名空間，而且不能夠提供最優的資源管理和加載方式。許多開發者首次使用的是具有標準 babel 加載器的標準 webpack.config.js 文件，像下面展示的這樣。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  /** test for file ending in js or jsx </span></span>
<span class="line"><span>   * exclude node_module and bower_components - we dont want to babel these </span></span>
<span class="line"><span>   * use the babel loader </span></span>
<span class="line"><span>   * apply the react and es2015 (es6) transformations **/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  test: /\\.jsx?$/,</span></span>
<span class="line"><span>  exclude: /(node_modules|bower_components)/,</span></span>
<span class="line"><span>  loader: &#39;babel&#39;,</span></span>
<span class="line"><span>  query: {</span></span>
<span class="line"><span>    presets: [&#39;react&#39;, &#39;es2015&#39;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>需要重點記住的是，這個配置沒有考慮一些第三方依賴關係，這些被用於 JavaScript 的 Amazon Cognito Identity SDK 所使用的第三方依賴目前沒有使用 [JavaScript 通用模組定義(UMD)][11]。</p><p>UMD 模式試圖提供與 [RequireJS][12] 和 [CommonJS][13] 這些當前最流行的腳本加載器的異步模組定義 [AMD] 的基本兼容。</p><p>這是 webpack 所依賴的模式，為了讓 webpack 能夠工作，我們必須進行一些改變。不做這些改變，你可能會遇到下面這些錯誤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>amazon-cognito-identity.min.js:19 Uncaught ReferenceError: BigInteger is not defined</span></span></code></pre></div><p>這樣一個錯誤可能會在調用 AWSCognito.CognitoIdentityServiceProvider.CognitoUser property authenticateUser 的時候出現。在這個錯誤例子中，我們可以利用 webpack 的 import 和 export 加載器的能力來解決這個錯誤。</p><h3 id="使用-webpack-加載器" tabindex="-1">使用 webpack 加載器 <a class="header-anchor" href="#使用-webpack-加載器" aria-label="Permalink to “使用 webpack 加載器”">​</a></h3><p>根據 [webpack 文檔]，“加載器允許你通過 require() 或 load 來預處理文件。加載器是一種類似其它構建工具中 “tasks” 的工具，它可以提供一個處理前端構建步驟的強大方法。加載器可以把一個文件從一種語言轉化成另一種語言，比如把 CoffeeScript 轉化成 JavaScript ，或者把圖像轉換為 data URL。“</p><p>為了解決 UMD 的兼容性缺乏的問題，你必須依賴兩個具體的加載器， import 和 export 加載器。</p><h4 id="使用-export-加載器" tabindex="-1">使用 export 加載器 <a class="header-anchor" href="#使用-export-加載器" aria-label="Permalink to “使用 export 加載器”">​</a></h4><p>在使用用於 JavaScript 的 Amazon Cognito Identity SDK 的情況下，我們需要確保把 theAWSCognito 變量導出到 require /import 它們的模組的變量範圍內（針對 ES6）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  test: /aws-cognito-sdk\\/index\\.js/,</span></span>
<span class="line"><span>  loader: &#39;exports?AWSCognito&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在由 webpack 創建的捆綁中，使用 export 加載器會有導出模組方法的效果。因此， 在 require 和 import 後，AWSCognito 和 AWS 是可訪問的（針對 ES6）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var AWSCognito = require(&#39;aws-cognito-sdk&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*** EXPORTS from export-loader ***/ </span></span>
<span class="line"><span>module.exports = AWSCongito</span></span></code></pre></div><p>[這兒][18]可以找到更多關於 export 加載器的信息。</p><h4 id="使用-import-加載器" tabindex="-1">使用 import 加載器 <a class="header-anchor" href="#使用-import-加載器" aria-label="Permalink to “使用 import 加載器”">​</a></h4><p>import 加載器主要用於把變量注入（import）到另一個模組的變量範圍內。當第三方模組需要依賴全局變量的時候， import 加載器非常有用，比如針對 JavaScript 的 Amazon Cognito Identity SDK 需要依賴 BigInteger 或者 sjcl 的時候。</p><p>如果你不使用 webpack 加載器，下面這些內容會在一個捆綁中生成。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>__webpack_require__(431);       // refers to jsbin</span></span>
<span class="line"><span>__webpack_require__(432);       // refers to sjcl</span></span></code></pre></div><p>因為 jsbin 和 sjcl 都不能 export 任何東西，因此任何依賴於這些模組的調用都會導致一個錯誤。</p><p>為了解決這個問題，我們需要使用下面的 webpack 加載器配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  test: /amazon-cognito-identity\\/index\\.js/,</span></span>
<span class="line"><span>  loader: &#39;imports?jsbn,BigInteger=&gt;jsbn.BigInteger,sjcl&#39;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  test: /sjcl\\/index\\.js/,</span></span>
<span class="line"><span>  loader: &#39;imports?sjcl&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個配置把下面的這些內容嵌入到了由 webpack 創建的捆綁中（此時是 bundle.js）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/*** IMPORTS FROM imports-loader ***/</span></span>
<span class="line"><span>var jsbn = __webpack_require__(431);</span></span>
<span class="line"><span>var BigInteger = jsbn.BigInteger;</span></span>
<span class="line"><span>var sjcl = __webpack_require__(432);</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>結果，jsbn、BigInteger 和 sjcl 都被從它們各自的模組中導入到了用於 JavaScript 的 Amazon Cognito Identity SDK 中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>有關 import 加載器的更多信息可以在[這兒][15]找到。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 下一步</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我們鼓勵你下載[用於 JavaScript 的 Amazon Cognito Identity SDK][16] 並開始構建你的應用，並在這篇文章的指導下通過 webpack 能夠迅速掌握。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果你有任何意見或問題，請在下面自由評論，也可以發郵件到 teichtah@amazon.com 或者在[這兒][17]提出問題。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 引用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>這篇文章引用了下面這些第三方資源：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- webpack - https://webpack.github.io/</span></span>
<span class="line"><span>- webpack 文件 - http://webpack.github.io/docs/what-is-webpack.html</span></span>
<span class="line"><span>- webpack export 加載器 - https://github.com/webpack/exports-loader</span></span>
<span class="line"><span>- webpack import 加載器 - https://github.com/webpack/imports-loader</span></span>
<span class="line"><span>- 用於 BigInteger 計算的 JavaScript BN 庫- http://www-cs-students.stanford.edu/~tjw/jsbn/jsbn.js</span></span>
<span class="line"><span>- jsbns - http://www-cs-students.stanford.edu/~tjw/jsbn/jsbn2.js</span></span>
<span class="line"><span>- Stanford JavaScript Crypto 庫 - https://github.com/bitwiseshiftleft/sjcl</span></span>
<span class="line"><span>- RequireJS - http://requirejs.org/</span></span>
<span class="line"><span>- CommonJS - http://www.commonjs.org/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>via: https://mobile.awsblog.com/post/Tx1A84CLMDJ744T/Using-webpack-with-the-Amazon-Cognito-Identity-SDK-for-JavaScript</span></span>
<span class="line"><span></span></span>
<span class="line"><span>作者：[Marc Teichtahl][a]</span></span>
<span class="line"><span>譯者：[ucasFL](https://github.com/ucasFL)</span></span>
<span class="line"><span>校對：[wxy](https://github.com/wxy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>本文由 [LCTT](https://github.com/LCTT/TranslateProject) 原創編譯，[Linux中國](https://linux.cn/) 榮譽推出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[a]: https://mobile.awsblog.com/blog/author/Marc+Teichtahl</span></span>
<span class="line"><span>[1]: https://webpack.github.io/</span></span>
<span class="line"><span>[2]: https://blogs.aws.amazon.com/security/post/Tx13NVD4AWG9QK9/Amazon-Cognito-Your-User-Pools-is-Now-Generally-Available</span></span>
<span class="line"><span>[3]: https://github.com/aws/amazon-cognito-identity-js</span></span>
<span class="line"><span>[4]: http://mobile.awsblog.com/post/Tx2O14ZY8A5LFHT/Accessing-Your-User-Pools-using-the-Amazon-Cognito-Identity-SDK-for-JavaScript</span></span>
<span class="line"><span>[5]: http://gruntjs.com/</span></span>
<span class="line"><span>[6]: http://gulpjs.com/</span></span>
<span class="line"><span>[7]: http://browserify.org/</span></span>
<span class="line"><span>[8]: http://www-cs-students.stanford.edu/~tjw/jsbn/jsbn.js</span></span>
<span class="line"><span>[9]: http://www-cs-students.stanford.edu/~tjw/jsbn/jsbn2.js</span></span>
<span class="line"><span>[10]: https://github.com/bitwiseshiftleft/sjcl</span></span>
<span class="line"><span>[11]: https://github.com/umdjs/umd</span></span>
<span class="line"><span>[12]: http://requirejs.org/</span></span>
<span class="line"><span>[13]: http://www.commonjs.org/</span></span>
<span class="line"><span>[14]: http://webpack.github.io/docs/what-is-webpack.html</span></span>
<span class="line"><span>[15]: https://github.com/webpack/imports-loader</span></span>
<span class="line"><span>[16]: https://github.com/aws/amazon-cognito-identity-js</span></span>
<span class="line"><span>[17]: https://github.com/aws/amazon-cognito-identity-js/issues</span></span>
<span class="line"><span>[18]: https://github.com/webpack/exports-loader</span></span></code></pre></div>`,38)])])}const k=a(e,[["render",i]]);export{b as __pageData,k as default};
