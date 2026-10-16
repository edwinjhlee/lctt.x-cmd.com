import{_ as e,a0 as l,w as o,s as r,ao as d,I as t,x as a,a1 as p,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"使用 Python 解析配置文件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 解析配置文件 | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 解析配置文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 解析配置文件 | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20210625 Use Python to parse configuration files","title":"使用 Python 解析配置文件","tag":"202107","desc":""},"relativePath":"202107/20210625 Use Python to parse configuration files.md","filePath":"[post].md"}'),u={name:"202107/20210625 Use Python to parse configuration files.md"};function c(h,s,g,f,k,b){const n=l("Link");return o(),r("div",null,[s[15]||(s[15]=d(`<h1 id="使用-python-解析配置文件" tabindex="-1">使用 Python 解析配置文件 <a class="header-anchor" href="#使用-python-解析配置文件" aria-label="Permalink to “使用 Python 解析配置文件”">​</a></h1><blockquote><p>第一步是選擇配置文件的格式：INI、JSON、YAML 或 TOML。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202107/05/113551tm0d0yp0px0xzp0n.jpg" alt=""></p><p>有時，程序需要足夠的參數，將它們全部作為命令列參數或環境變量既不讓人愉快也不可行。 在這些情況下，你將需要使用配置文件。</p><p>有幾種流行的配置文件格式。其中包括古老的（雖然有時定義不明確）INI 格式，雖然流行但有時難以手寫的 JSON 格式，使用廣泛但有時在細節方面令人意外的 YAML 格式，以及很多人還沒有聽説過的最新出現的 TOML。</p><p>你的首要任務是選擇一種格式，然後記錄該選擇。解決了這個簡單的部分之後就是時候解析配置了。</p><p>有時，在配置中擁有一個與“抽象“數據相對應的類是一個不錯的想法。因為這段代碼不會對配置做任何事情，所以這是展示解析邏輯最簡單的方式。</p><p>想像一下文件處理器的配置：它包括一個輸入目錄、一個輸出目錄和要提取的文件。</p><p>配置類的抽象定義可能類似於：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from __future__ import annotations</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import attr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@attr.frozen</span></span>
<span class="line"><span>class Configuration:</span></span>
<span class="line"><span>    @attr.frozen</span></span>
<span class="line"><span>    class Files:</span></span>
<span class="line"><span>        input_dir: str</span></span>
<span class="line"><span>        output_dir: str</span></span>
<span class="line"><span>    files: Files</span></span>
<span class="line"><span>    @attr.frozen</span></span>
<span class="line"><span>    class Parameters:</span></span>
<span class="line"><span>        patterns: List[str]</span></span>
<span class="line"><span>    parameters: Parameters</span></span></code></pre></div><p>為了使特定於格式的代碼更簡單，你還需要編寫一個函數來從字典中解析此類。請注意，這假設配置將使用破折號，而不是下劃線。 這種差異並不少見。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def configuration_from_dict(details):</span></span>
<span class="line"><span>    files = Configuration.Files(</span></span>
<span class="line"><span>        input_dir=details[&quot;files&quot;][&quot;input-dir&quot;],</span></span>
<span class="line"><span>        output_dir=details[&quot;files&quot;][&quot;output-dir&quot;],</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    parameters = Configuration.Paraneters(</span></span>
<span class="line"><span>        patterns=details[&quot;parameters&quot;][&quot;patterns&quot;]</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    return Configuration(</span></span>
<span class="line"><span>        files=files,</span></span>
<span class="line"><span>        parameters=parameters,</span></span>
<span class="line"><span>    )</span></span></code></pre></div><h3 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-label="Permalink to “JSON”">​</a></h3><p>JSON（JavaScript Object Notation）是一種類似於 JavaScript 的格式。</p><p>以下是 JSON 格式的示例配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>json_config = &quot;&quot;&quot;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;files&quot;: {</span></span>
<span class="line"><span>        &quot;input-dir&quot;: &quot;inputs&quot;,</span></span>
<span class="line"><span>        &quot;output-dir&quot;: &quot;outputs&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;parameters&quot;: {</span></span>
<span class="line"><span>        &quot;patterns&quot;: [</span></span>
<span class="line"><span>            &quot;*.txt&quot;,</span></span>
<span class="line"><span>            &quot;*.md&quot;</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><p>解析邏輯使用 <code>json</code> 模組將 JSON 解析為 Python 的內置數據結構（字典、列表、字符串），然後從字典中創建類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import json</span></span>
<span class="line"><span>def configuration_from_json(data):</span></span>
<span class="line"><span>    parsed = json.loads(data)</span></span>
<span class="line"><span>    return configuration_from_dict(parsed)</span></span></code></pre></div><h3 id="ini" tabindex="-1">INI <a class="header-anchor" href="#ini" aria-label="Permalink to “INI”">​</a></h3><p>INI 格式，最初只在 Windows 上流行，之後成為配置標準格式。</p><p>這是與 INI 相同的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ini_config=&quot;&quot;&quot;</span></span>
<span class="line"><span>[files]</span></span>
<span class="line"><span>input-dir = inputs</span></span>
<span class="line"><span>output-dir = outputs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[parameters]</span></span>
<span class="line"><span>patterns = [&#39;*.txt&#39;, &#39;*.md&#39;]</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><p>Python 可以使用內置的 <code>configparser</code> 模組解析它。解析器充當類似 <code>dict</code> 的對象，因此可以直接傳遞給 <code>configuration_from_dict</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import configparser</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def configuration_from_ini(data):</span></span>
<span class="line"><span>    parser = configparser.ConfigParser()</span></span>
<span class="line"><span>    parser.read_string(data)</span></span>
<span class="line"><span>    return configuration_from_dict(parser)</span></span></code></pre></div><h3 id="yaml" tabindex="-1">YAML <a class="header-anchor" href="#yaml" aria-label="Permalink to “YAML”">​</a></h3><p>YAML（Yet Another Markup Language）是 JSON 的擴展，旨在更易於手動編寫。為了實現了這一點，部分原因是有一個很長的規範。</p><p>以下是 YAML 中的相同配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yaml_config = &quot;&quot;&quot;</span></span>
<span class="line"><span>files:</span></span>
<span class="line"><span>  input-dir: inputs</span></span>
<span class="line"><span>  output-dir: outputs</span></span>
<span class="line"><span>parameters:</span></span>
<span class="line"><span>  patterns:</span></span>
<span class="line"><span>  - &#39;*.txt&#39;</span></span>
<span class="line"><span>  - &#39;*.md&#39;</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><p>要讓 Python 解析它，你需要安裝第三方模組。最受歡迎的是<code>PyYAML</code>（<code>pip install pyyaml</code>）。 YAML 解析器還返回可以傳遞給 <code>configuration_from_dict</code> 的內置 Python 數據類型。但是，YAML 解析器需要一個字節流，因此你需要將字符串轉換為字節流。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import io</span></span>
<span class="line"><span>import yaml</span></span>
<span class="line"><span>def configuration_from_yaml(data):</span></span>
<span class="line"><span>    fp = io.StringIO(data)</span></span>
<span class="line"><span>    parsed = yaml.safe_load(fp)</span></span>
<span class="line"><span>    return configuration_from_dict(parsed)</span></span></code></pre></div><h3 id="toml" tabindex="-1">TOML <a class="header-anchor" href="#toml" aria-label="Permalink to “TOML”">​</a></h3><p>TOML（Tom&#39;s Own Markup Language）旨在成為 YAML 的輕量級替代品。其規範比較短，已經在一些地方流行了（比如 Rust 的包管理器 Cargo 就用它來進行包配置）。</p><p>這是與 TOML 相同的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>toml_config = &quot;&quot;&quot;</span></span>
<span class="line"><span>[files]</span></span>
<span class="line"><span>input-dir = &quot;inputs&quot;</span></span>
<span class="line"><span>output-dir = &quot;outputs&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[parameters]</span></span>
<span class="line"><span>patterns = [ &quot;*.txt&quot;, &quot;*.md&quot;,]</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><p>為了解析 TOML，你需要安裝第三方包。最流行的一種被簡單地稱為 <code>toml</code>。 與 YAML 和 JSON 一樣，它返回基本的 Python 數據類型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import toml</span></span>
<span class="line"><span>def configuration_from_toml(data):</span></span>
<span class="line"><span>    parsed = toml.loads(data)</span></span>
<span class="line"><span>    return configuration_from_dict(parsed)</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>選擇配置格式是一種微妙的權衡。但是，一旦你做出決定，Python 就可以使用少量代碼來解析大多數流行的格式。</p><hr>`,40)),t("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/21/6/parse-configuration-files-python"},{default:i(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/21/6/parse-configuration-files-python",-1)])]),_:1})]),t("p",null,[s[6]||(s[6]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/moshez"},{default:i(()=>[...s[2]||(s[2]=[a("Moshe Zadka",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),p(n,{href:"https://github.com/zepoch"},{default:i(()=>[...s[4]||(s[4]=[a("zepoch",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),t("p",null,[s[12]||(s[12]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:i(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const C=e(u,[["render",c]]);export{q as __pageData,C as default};
