import{_ as e,a0 as l,w as o,s as r,ao as d,I as t,x as a,a1 as p,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"使用 Python 解析配置文件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 解析配置文件 | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 解析配置文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 解析配置文件 | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20210625 Use Python to parse configuration files","title":"使用 Python 解析配置文件","tag":"202107","desc":""},"relativePath":"202107/20210625 Use Python to parse configuration files.md","filePath":"[post].md"}'),u={name:"202107/20210625 Use Python to parse configuration files.md"};function c(h,s,g,f,k,b){const n=l("Link");return o(),r("div",null,[s[15]||(s[15]=d(`<h1 id="使用-python-解析配置文件" tabindex="-1">使用 Python 解析配置文件 <a class="header-anchor" href="#使用-python-解析配置文件" aria-label="Permalink to “使用 Python 解析配置文件”">​</a></h1><blockquote><p>第一步是选择配置文件的格式：INI、JSON、YAML 或 TOML。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202107/05/113551tm0d0yp0px0xzp0n.jpg" alt=""></p><p>有时，程序需要足够的参数，将它们全部作为命令行参数或环境变量既不让人愉快也不可行。 在这些情况下，你将需要使用配置文件。</p><p>有几种流行的配置文件格式。其中包括古老的（虽然有时定义不明确）INI 格式，虽然流行但有时难以手写的 JSON 格式，使用广泛但有时在细节方面令人意外的 YAML 格式，以及很多人还没有听说过的最新出现的 TOML。</p><p>你的首要任务是选择一种格式，然后记录该选择。解决了这个简单的部分之后就是时候解析配置了。</p><p>有时，在配置中拥有一个与“抽象“数据相对应的类是一个不错的想法。因为这段代码不会对配置做任何事情，所以这是展示解析逻辑最简单的方式。</p><p>想象一下文件处理器的配置：它包括一个输入目录、一个输出目录和要提取的文件。</p><p>配置类的抽象定义可能类似于：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from __future__ import annotations</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import attr</span></span>
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
<span class="line"><span>    parameters: Parameters</span></span></code></pre></div><p>为了使特定于格式的代码更简单，你还需要编写一个函数来从字典中解析此类。请注意，这假设配置将使用破折号，而不是下划线。 这种差异并不少见。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def configuration_from_dict(details):</span></span>
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
<span class="line"><span>    )</span></span></code></pre></div><h3 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-label="Permalink to “JSON”">​</a></h3><p>JSON（JavaScript Object Notation）是一种类似于 JavaScript 的格式。</p><p>以下是 JSON 格式的示例配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>json_config = &quot;&quot;&quot;</span></span>
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
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><p>解析逻辑使用 <code>json</code> 模块将 JSON 解析为 Python 的内置数据结构（字典、列表、字符串），然后从字典中创建类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import json</span></span>
<span class="line"><span>def configuration_from_json(data):</span></span>
<span class="line"><span>    parsed = json.loads(data)</span></span>
<span class="line"><span>    return configuration_from_dict(parsed)</span></span></code></pre></div><h3 id="ini" tabindex="-1">INI <a class="header-anchor" href="#ini" aria-label="Permalink to “INI”">​</a></h3><p>INI 格式，最初只在 Windows 上流行，之后成为配置标准格式。</p><p>这是与 INI 相同的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ini_config=&quot;&quot;&quot;</span></span>
<span class="line"><span>[files]</span></span>
<span class="line"><span>input-dir = inputs</span></span>
<span class="line"><span>output-dir = outputs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[parameters]</span></span>
<span class="line"><span>patterns = [&#39;*.txt&#39;, &#39;*.md&#39;]</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><p>Python 可以使用内置的 <code>configparser</code> 模块解析它。解析器充当类似 <code>dict</code> 的对象，因此可以直接传递给 <code>configuration_from_dict</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import configparser</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def configuration_from_ini(data):</span></span>
<span class="line"><span>    parser = configparser.ConfigParser()</span></span>
<span class="line"><span>    parser.read_string(data)</span></span>
<span class="line"><span>    return configuration_from_dict(parser)</span></span></code></pre></div><h3 id="yaml" tabindex="-1">YAML <a class="header-anchor" href="#yaml" aria-label="Permalink to “YAML”">​</a></h3><p>YAML（Yet Another Markup Language）是 JSON 的扩展，旨在更易于手动编写。为了实现了这一点，部分原因是有一个很长的规范。</p><p>以下是 YAML 中的相同配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yaml_config = &quot;&quot;&quot;</span></span>
<span class="line"><span>files:</span></span>
<span class="line"><span>  input-dir: inputs</span></span>
<span class="line"><span>  output-dir: outputs</span></span>
<span class="line"><span>parameters:</span></span>
<span class="line"><span>  patterns:</span></span>
<span class="line"><span>  - &#39;*.txt&#39;</span></span>
<span class="line"><span>  - &#39;*.md&#39;</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><p>要让 Python 解析它，你需要安装第三方模块。最受欢迎的是<code>PyYAML</code>（<code>pip install pyyaml</code>）。 YAML 解析器还返回可以传递给 <code>configuration_from_dict</code> 的内置 Python 数据类型。但是，YAML 解析器需要一个字节流，因此你需要将字符串转换为字节流。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import io</span></span>
<span class="line"><span>import yaml</span></span>
<span class="line"><span>def configuration_from_yaml(data):</span></span>
<span class="line"><span>    fp = io.StringIO(data)</span></span>
<span class="line"><span>    parsed = yaml.safe_load(fp)</span></span>
<span class="line"><span>    return configuration_from_dict(parsed)</span></span></code></pre></div><h3 id="toml" tabindex="-1">TOML <a class="header-anchor" href="#toml" aria-label="Permalink to “TOML”">​</a></h3><p>TOML（Tom&#39;s Own Markup Language）旨在成为 YAML 的轻量级替代品。其规范比较短，已经在一些地方流行了（比如 Rust 的包管理器 Cargo 就用它来进行包配置）。</p><p>这是与 TOML 相同的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>toml_config = &quot;&quot;&quot;</span></span>
<span class="line"><span>[files]</span></span>
<span class="line"><span>input-dir = &quot;inputs&quot;</span></span>
<span class="line"><span>output-dir = &quot;outputs&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[parameters]</span></span>
<span class="line"><span>patterns = [ &quot;*.txt&quot;, &quot;*.md&quot;,]</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><p>为了解析 TOML，你需要安装第三方包。最流行的一种被简单地称为 <code>toml</code>。 与 YAML 和 JSON 一样，它返回基本的 Python 数据类型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import toml</span></span>
<span class="line"><span>def configuration_from_toml(data):</span></span>
<span class="line"><span>    parsed = toml.loads(data)</span></span>
<span class="line"><span>    return configuration_from_dict(parsed)</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>选择配置格式是一种微妙的权衡。但是，一旦你做出决定，Python 就可以使用少量代码来解析大多数流行的格式。</p><hr>`,40)),t("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/21/6/parse-configuration-files-python"},{default:i(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/21/6/parse-configuration-files-python",-1)])]),_:1})]),t("p",null,[s[6]||(s[6]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/moshez"},{default:i(()=>[...s[2]||(s[2]=[a("Moshe Zadka",-1)])]),_:1}),s[7]||(s[7]=a(" 选题：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 译者：",-1)),p(n,{href:"https://github.com/zepoch"},{default:i(()=>[...s[4]||(s[4]=[a("zepoch",-1)])]),_:1}),s[9]||(s[9]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),t("p",null,[s[12]||(s[12]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:i(()=>[...s[11]||(s[11]=[a("Linux中国",-1)])]),_:1}),s[14]||(s[14]=a(" 荣誉推出",-1))])])}const C=e(u,[["render",c]]);export{q as __pageData,C as default};
