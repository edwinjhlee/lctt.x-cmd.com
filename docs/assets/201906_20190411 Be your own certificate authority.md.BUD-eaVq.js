import{_ as l,a0 as r,w as o,s as u,I as a,x as n,a1 as p,A as i,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"自己成为一个证书颁发机构（CA） | LCTT x X-CMD","titleTemplate":false,"description":"自己成为一个证书颁发机构（CA） | LCTT (201906) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"自己成为一个证书颁发机构（CA） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"自己成为一个证书颁发机构（CA） | LCTT (201906) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201906/20190411 Be your own certificate authority","title":"自己成为一个证书颁发机构（CA）","tag":"201906","desc":""},"relativePath":"201906/20190411 Be your own certificate authority.md","filePath":"[post].md"}'),d={name:"201906/20190411 Be your own certificate authority.md"};function c(b,s,g,m,y,f){const e=r("Link");return o(),u("div",null,[s[26]||(s[26]=a("h1",{id:"自己成为一个证书颁发机构-ca",tabindex:"-1"},[n("自己成为一个证书颁发机构（CA） "),a("a",{class:"header-anchor",href:"#自己成为一个证书颁发机构-ca","aria-label":"Permalink to “自己成为一个证书颁发机构（CA）”"},"​")],-1)),s[27]||(s[27]=a("blockquote",null,[a("p",null,"为你的微服务架构或者集成测试创建一个简单的内部 CA。")],-1)),s[28]||(s[28]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201905/31/091023sg9s0ss11rsoseqg.jpg",alt:""})],-1)),a("p",null,[s[3]||(s[3]=n("传输层安全（",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security"},{default:i(()=>[...s[0]||(s[0]=[n("TLS",-1)])]),_:1}),s[4]||(s[4]=n("）模型（有时也称它的旧名称 SSL）基于",-1)),a("ruby",null,[p(e,{href:"https://en.wikipedia.org/wiki/Certificate_authority"},{default:i(()=>[...s[1]||(s[1]=[n("证书颁发机构",-1)])]),_:1}),s[2]||(s[2]=a("rt",null,"certificate authoritie",-1))]),s[5]||(s[5]=n("（CA）的概念。这些机构受到浏览器和操作系统的信任，从而",-1)),s[6]||(s[6]=a("em",null,"签名",-1)),s[7]||(s[7]=n("服务器的的证书以用于验证其所有权。",-1))]),s[29]||(s[29]=t(`<p>但是，对于内部网络，微服务架构或集成测试，有时候<em>本地 CA</em>更有用：一个只在内部受信任的 CA，然后签名本地服务器的证书。</p><p>这对集成测试特别有意义。获取证书可能会带来负担，因为这会占用服务器几分钟。但是在代码中使用“忽略证书”可能会被引入到生产环境，从而导致安全灾难。</p><p>CA 证书与常规服务器证书没有太大区别。重要的是它被本地代码信任。例如，在 Python <code>requests</code> 库中，可以通过将 <code>REQUESTS_CA_BUNDLE</code> 变量设置为包含此证书的目录来完成。</p><p>在为集成测试创建证书的例子中，不需要<em>长期的</em>证书：如果你的集成测试需要超过一天，那么你应该已经测试失败了。</p><p>因此，计算<strong>昨天</strong>和<strong>明天</strong>作为有效期间隔：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import datetime</span></span>
<span class="line"><span>&gt;&gt;&gt; one_day = datetime.timedelta(days=1)</span></span>
<span class="line"><span>&gt;&gt;&gt; today = datetime.date.today()</span></span>
<span class="line"><span>&gt;&gt;&gt; yesterday = today - one_day</span></span>
<span class="line"><span>&gt;&gt;&gt; tomorrow = today - one_day</span></span></code></pre></div><p>现在你已准备好创建一个简单的 CA 证书。你需要生成私钥，创建公钥，设置 CA 的“参数”，然后自签名证书：CA 证书<em>总是</em>自签名的。最后，导出证书文件以及私钥文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from cryptography.hazmat.primitives.asymmetric import rsa</span></span>
<span class="line"><span>from cryptography.hazmat.primitives import hashes, serialization</span></span>
<span class="line"><span>from cryptography import x509</span></span>
<span class="line"><span>from cryptography.x509.oid import NameOID</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>private_key = rsa.generate_private_key(</span></span>
<span class="line"><span>    public_exponent=65537,</span></span>
<span class="line"><span>    key_size=2048,</span></span>
<span class="line"><span>    backend=default_backend()</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>public_key = private_key.public_key()</span></span>
<span class="line"><span>builder = x509.CertificateBuilder()</span></span>
<span class="line"><span>builder = builder.subject_name(x509.Name([</span></span>
<span class="line"><span>    x509.NameAttribute(NameOID.COMMON_NAME, &#39;Simple Test CA&#39;),</span></span>
<span class="line"><span>]))</span></span>
<span class="line"><span>builder = builder.issuer_name(x509.Name([</span></span>
<span class="line"><span>    x509.NameAttribute(NameOID.COMMON_NAME, &#39;Simple Test CA&#39;),</span></span>
<span class="line"><span>]))</span></span>
<span class="line"><span>builder = builder.not_valid_before(yesterday)</span></span>
<span class="line"><span>builder = builder.not_valid_after(tomorrow)</span></span>
<span class="line"><span>builder = builder.serial_number(x509.random_serial_number())</span></span>
<span class="line"><span>builder = builder.public_key(public_key)</span></span>
<span class="line"><span>builder = builder.add_extension(</span></span>
<span class="line"><span>    x509.BasicConstraints(ca=True, path_length=None),</span></span>
<span class="line"><span>    critical=True)</span></span>
<span class="line"><span>certificate = builder.sign(</span></span>
<span class="line"><span>    private_key=private_key, algorithm=hashes.SHA256(),</span></span>
<span class="line"><span>    backend=default_backend()</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>private_bytes = private_key.private_bytes(</span></span>
<span class="line"><span>    encoding=serialization.Encoding.PEM,</span></span>
<span class="line"><span>    format=serialization.PrivateFormat.TraditionalOpenSSL,</span></span>
<span class="line"><span>    encryption_algorithm=serialization.NoEncrption())</span></span>
<span class="line"><span>public_bytes = certificate.public_bytes(</span></span>
<span class="line"><span>    encoding=serialization.Encoding.PEM)</span></span>
<span class="line"><span>with open(&quot;ca.pem&quot;, &quot;wb&quot;) as fout:</span></span>
<span class="line"><span>    fout.write(private_bytes + public_bytes)</span></span>
<span class="line"><span>with open(&quot;ca.crt&quot;, &quot;wb&quot;) as fout:</span></span>
<span class="line"><span>    fout.write(public_bytes)</span></span></code></pre></div>`,8)),a("p",null,[s[9]||(s[9]=n("通常，真正的 CA 会需要",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Certificate_signing_request"},{default:i(()=>[...s[8]||(s[8]=[n("证书签名请求",-1)])]),_:1}),s[10]||(s[10]=n("（CSR）来签名证书。但是，当你是自己的 CA 时，你可以制定自己的规则！可以径直签名你想要的内容。",-1))]),s[30]||(s[30]=t(`<p>继续集成测试的例子，你可以创建私钥并立即签名相应的公钥。注意 <code>COMMON_NAME</code> 需要是 <code>https</code> URL 中的“服务器名称”。如果你已配置名称查询，你需要服务器能响应对 <code>service.test.local</code> 的请求。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>service_private_key = rsa.generate_private_key(</span></span>
<span class="line"><span>    public_exponent=65537,</span></span>
<span class="line"><span>    key_size=2048,</span></span>
<span class="line"><span>    backend=default_backend()</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>service_public_key = service_private_key.public_key()</span></span>
<span class="line"><span>builder = x509.CertificateBuilder()</span></span>
<span class="line"><span>builder = builder.subject_name(x509.Name([</span></span>
<span class="line"><span>   x509.NameAttribute(NameOID.COMMON_NAME, &#39;service.test.local&#39;)</span></span>
<span class="line"><span>]))</span></span>
<span class="line"><span>builder = builder.not_valid_before(yesterday)</span></span>
<span class="line"><span>builder = builder.not_valid_after(tomorrow)</span></span>
<span class="line"><span>builder = builder.public_key(public_key)</span></span>
<span class="line"><span>certificate = builder.sign(</span></span>
<span class="line"><span>    private_key=private_key, algorithm=hashes.SHA256(),</span></span>
<span class="line"><span>    backend=default_backend()</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>private_bytes = service_private_key.private_bytes(</span></span>
<span class="line"><span>    encoding=serialization.Encoding.PEM,</span></span>
<span class="line"><span>    format=serialization.PrivateFormat.TraditionalOpenSSL,</span></span>
<span class="line"><span>    encryption_algorithm=serialization.NoEncrption())</span></span>
<span class="line"><span>public_bytes = certificate.public_bytes(</span></span>
<span class="line"><span>    encoding=serialization.Encoding.PEM)</span></span>
<span class="line"><span>with open(&quot;service.pem&quot;, &quot;wb&quot;) as fout:</span></span>
<span class="line"><span>    fout.write(private_bytes + public_bytes)</span></span></code></pre></div><p>现在 <code>service.pem</code> 文件有一个私钥和一个“有效”的证书：它已由本地的 CA 签名。该文件的格式可以给 Nginx、HAProxy 或大多数其他 HTTPS 服务器使用。</p><p>通过将此逻辑用在测试脚本中，只要客户端配置信任该 CA，那么就可以轻松创建看起来真实的 HTTPS 服务器。</p><hr>`,5)),a("p",null,[s[12]||(s[12]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/19/4/certificate-authority"},{default:i(()=>[...s[11]||(s[11]=[n("https://opensource.com/article/19/4/certificate-authority",-1)])]),_:1})]),a("p",null,[s[17]||(s[17]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/moshez/users/elenajon123"},{default:i(()=>[...s[13]||(s[13]=[n("Moshe Zadka",-1)])]),_:1}),s[18]||(s[18]=n(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[14]||(s[14]=[n("lujun9972",-1)])]),_:1}),s[19]||(s[19]=n(" 译者：",-1)),p(e,{href:"https://github.com/geekpi"},{default:i(()=>[...s[15]||(s[15]=[n("geekpi",-1)])]),_:1}),s[20]||(s[20]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[16]||(s[16]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[23]||(s[23]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[n("LCTT",-1)])]),_:1}),s[24]||(s[24]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[n("Linux中国",-1)])]),_:1}),s[25]||(s[25]=n(" 荣誉推出",-1))])])}const h=l(d,[["render",c]]);export{C as __pageData,h as default};
