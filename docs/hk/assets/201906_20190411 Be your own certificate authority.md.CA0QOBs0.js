import{_ as l,a0 as r,w as o,s as u,I as a,x as n,a1 as p,A as i,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"自己成為一個證書頒發機構（CA） | LCTT x X-CMD","titleTemplate":false,"description":"自己成為一個證書頒發機構（CA） | LCTT (201906) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"自己成為一個證書頒發機構（CA） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"自己成為一個證書頒發機構（CA） | LCTT (201906) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201906/20190411 Be your own certificate authority","title":"自己成為一個證書頒發機構（CA）","tag":"201906","desc":""},"relativePath":"201906/20190411 Be your own certificate authority.md","filePath":"[post].md"}'),d={name:"201906/20190411 Be your own certificate authority.md"};function c(b,s,g,m,y,f){const e=r("Link");return o(),u("div",null,[s[26]||(s[26]=a("h1",{id:"自己成為一個證書頒發機構-ca",tabindex:"-1"},[n("自己成為一個證書頒發機構（CA） "),a("a",{class:"header-anchor",href:"#自己成為一個證書頒發機構-ca","aria-label":"Permalink to “自己成為一個證書頒發機構（CA）”"},"​")],-1)),s[27]||(s[27]=a("blockquote",null,[a("p",null,"為你的微服務架構或者集成測試創建一個簡單的內部 CA。")],-1)),s[28]||(s[28]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201905/31/091023sg9s0ss11rsoseqg.jpg",alt:""})],-1)),a("p",null,[s[3]||(s[3]=n("傳輸層安全（",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security"},{default:i(()=>[...s[0]||(s[0]=[n("TLS",-1)])]),_:1}),s[4]||(s[4]=n("）模型（有時也稱它的舊名稱 SSL）基於",-1)),a("ruby",null,[p(e,{href:"https://en.wikipedia.org/wiki/Certificate_authority"},{default:i(()=>[...s[1]||(s[1]=[n("證書頒發機構",-1)])]),_:1}),s[2]||(s[2]=a("rt",null,"certificate authoritie",-1))]),s[5]||(s[5]=n("（CA）的概念。這些機構受到瀏覽器和操作系統的信任，從而",-1)),s[6]||(s[6]=a("em",null,"簽名",-1)),s[7]||(s[7]=n("服務器的的證書以用於驗證其所有權。",-1))]),s[29]||(s[29]=t(`<p>但是，對於內部網絡，微服務架構或集成測試，有時候<em>本地 CA</em>更有用：一個只在內部受信任的 CA，然後簽名本地服務器的證書。</p><p>這對集成測試特別有意義。獲取證書可能會帶來負擔，因為這會佔用服務器幾分鐘。但是在代碼中使用“忽略證書”可能會被引入到生產環境，從而導致安全災難。</p><p>CA 證書與常規服務器證書沒有太大區別。重要的是它被本地代碼信任。例如，在 Python <code>requests</code> 庫中，可以通過將 <code>REQUESTS_CA_BUNDLE</code> 變量設置為包含此證書的目錄來完成。</p><p>在為集成測試創建證書的例子中，不需要<em>長期的</em>證書：如果你的集成測試需要超過一天，那麼你應該已經測試失敗了。</p><p>因此，計算<strong>昨天</strong>和<strong>明天</strong>作為有效期間隔：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import datetime</span></span>
<span class="line"><span>&gt;&gt;&gt; one_day = datetime.timedelta(days=1)</span></span>
<span class="line"><span>&gt;&gt;&gt; today = datetime.date.today()</span></span>
<span class="line"><span>&gt;&gt;&gt; yesterday = today - one_day</span></span>
<span class="line"><span>&gt;&gt;&gt; tomorrow = today - one_day</span></span></code></pre></div><p>現在你已準備好創建一個簡單的 CA 證書。你需要生成私鑰，創建公鑰，設置 CA 的“參數”，然後自簽名證書：CA 證書<em>總是</em>自簽名的。最後，導出證書文件以及私鑰文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from cryptography.hazmat.primitives.asymmetric import rsa</span></span>
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
<span class="line"><span>    fout.write(public_bytes)</span></span></code></pre></div>`,8)),a("p",null,[s[9]||(s[9]=n("通常，真正的 CA 會需要",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Certificate_signing_request"},{default:i(()=>[...s[8]||(s[8]=[n("證書籤名請求",-1)])]),_:1}),s[10]||(s[10]=n("（CSR）來簽名證書。但是，當你是自己的 CA 時，你可以制定自己的規則！可以徑直簽名你想要的內容。",-1))]),s[30]||(s[30]=t(`<p>繼續集成測試的例子，你可以創建私鑰並立即簽名相應的公鑰。注意 <code>COMMON_NAME</code> 需要是 <code>https</code> URL 中的“服務器名稱”。如果你已配置名稱查詢，你需要服務器能響應對 <code>service.test.local</code> 的請求。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>service_private_key = rsa.generate_private_key(</span></span>
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
<span class="line"><span>    fout.write(private_bytes + public_bytes)</span></span></code></pre></div><p>現在 <code>service.pem</code> 文件有一個私鑰和一個“有效”的證書：它已由本地的 CA 簽名。該文件的格式可以給 Nginx、HAProxy 或大多數其他 HTTPS 服務器使用。</p><p>通過將此邏輯用在測試腳本中，只要客户端配置信任該 CA，那麼就可以輕鬆創建看起來真實的 HTTPS 服務器。</p><hr>`,5)),a("p",null,[s[12]||(s[12]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/19/4/certificate-authority"},{default:i(()=>[...s[11]||(s[11]=[n("https://opensource.com/article/19/4/certificate-authority",-1)])]),_:1})]),a("p",null,[s[17]||(s[17]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/moshez/users/elenajon123"},{default:i(()=>[...s[13]||(s[13]=[n("Moshe Zadka",-1)])]),_:1}),s[18]||(s[18]=n(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[14]||(s[14]=[n("lujun9972",-1)])]),_:1}),s[19]||(s[19]=n(" 譯者：",-1)),p(e,{href:"https://github.com/geekpi"},{default:i(()=>[...s[15]||(s[15]=[n("geekpi",-1)])]),_:1}),s[20]||(s[20]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[16]||(s[16]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[23]||(s[23]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[n("LCTT",-1)])]),_:1}),s[24]||(s[24]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[n("Linux中國",-1)])]),_:1}),s[25]||(s[25]=n(" 榮譽推出",-1))])])}const h=l(d,[["render",c]]);export{C as __pageData,h as default};
