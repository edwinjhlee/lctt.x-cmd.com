import{_ as t,a0 as c,w as r,s as b,ao as l,I as i,a1 as p,A as e,x as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const $=JSON.parse('{"title":"使用 OpenSSL 加密和解密文件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 OpenSSL 加密和解密文件 | LCTT (202105) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 OpenSSL 加密和解密文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 OpenSSL 加密和解密文件 | LCTT (202105) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202105/20210429 Encrypting and decrypting files with OpenSSL","title":"使用 OpenSSL 加密和解密文件","tag":"202105","desc":""},"relativePath":"202105/20210429 Encrypting and decrypting files with OpenSSL.md","filePath":"[post].md"}'),o={name:"202105/20210429 Encrypting and decrypting files with OpenSSL.md"};function d(h,s,g,k,f,u){const n=c("Link");return r(),b("div",null,[s[23]||(s[23]=l('<h1 id="使用-openssl-加密和解密文件" tabindex="-1">使用 OpenSSL 加密和解密文件 <a class="header-anchor" href="#使用-openssl-加密和解密文件" aria-label="Permalink to “使用 OpenSSL 加密和解密文件”">​</a></h1><blockquote><p>OpenSSL 是一個實用工具，它可以確保其他人員無法打開你的敏感和機密消息。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202105/07/163825a9yh74h9yh4h77y2.jpg" alt=""></p><p>加密是對消息進行編碼的一種方法，這樣可以保護消息的內容免遭他人窺視。一般有兩種類型：</p><ol><li>密鑰加密或對稱加密</li><li>公鑰加密或非對稱加密</li></ol><p><ruby>密鑰加密<rt>secret-key encryption</rt></ruby>使用相同的密鑰進行加密和解密，而<ruby>公鑰加密<rt>public-key encryption</rt></ruby>使用不同的密鑰進行加密和解密。每種方法各有利弊。密鑰加密速度更快，而公鑰加密更安全，因為它解決了安全共享密鑰的問題，將它們結合在一起可以最大限度地利用每種類型的優勢。</p><h3 id="公鑰加密" tabindex="-1">公鑰加密 <a class="header-anchor" href="#公鑰加密" aria-label="Permalink to “公鑰加密”">​</a></h3><p>公鑰加密使用兩組密鑰，稱為密鑰對。一個是公鑰，可以與你想要秘密通信的任何人自由共享。另一個是私鑰，應該是一個秘密，永遠不會共享。</p><p>公鑰用於加密。如果某人想與你交流敏感信息，你可以將你的公鑰發送給他們，他們可以使用公鑰加密消息或文件，然後再將其發送給你。私鑰用於解密。解密發件人加密的消息的唯一方法是使用私鑰。因此，它們被稱為“密鑰對”，它們是相互關聯的。</p><h3 id="如何使用-openssl-加密文件" tabindex="-1">如何使用 OpenSSL 加密文件 <a class="header-anchor" href="#如何使用-openssl-加密文件" aria-label="Permalink to “如何使用 OpenSSL 加密文件”">​</a></h3>',10)),i("p",null,[p(n,{href:"https://www.openssl.org/"},{default:e(()=>[...s[0]||(s[0]=[a("OpenSSL",-1)])]),_:1}),s[1]||(s[1]=a(" 是一個了不起的工具，可以執行各種任務，例如加密文件。本文使用安裝了 OpenSSL 的 Fedora 計算機。如果你的機器上沒有，則可以使用軟件包管理器進行安裝：",-1))]),s[24]||(s[24]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ cat /etc/fedora-release</span></span>
<span class="line"><span>Fedora release 33 (Thirty Three)</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ openssl version</span></span>
<span class="line"><span>OpenSSL 1.1.1i FIPS  8 Dec 2020</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>要探索文件加密和解密，假如有兩個用户 Alice 和 Bob，他們想通過使用 OpenSSL 交換加密文件來相互通信。</p><h4 id="步驟-1-生成密鑰對" tabindex="-1">步驟 1：生成密鑰對 <a class="header-anchor" href="#步驟-1-生成密鑰對" aria-label="Permalink to “步驟 1：生成密鑰對”">​</a></h4><p>在加密文件之前，你需要生成密鑰對。你還需要一個<ruby>密碼短語<rt>passphrase</rt></ruby>，每當你使用 OpenSSL 時都必須使用該密碼短語，因此務必記住它。</p><p>Alice 使用以下命令生成她的一組密鑰對：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl genrsa -aes128 -out alice_private.pem 1024</span></span></code></pre></div>`,6)),i("p",null,[s[3]||(s[3]=a("此命令使用 OpenSSL 的 ",-1)),p(n,{href:"https://www.openssl.org/docs/man1.0.2/man1/genrsa.html"},{default:e(()=>[...s[2]||(s[2]=[a("genrsa",-1)])]),_:1}),s[4]||(s[4]=a(" 命令生成一個 1024 位的公鑰/私鑰對。這是可以的，因為 RSA 算法是不對稱的。它還使用了 aes128 對稱密鑰算法來加密 Alice 生成的私鑰。",-1))]),s[25]||(s[25]=l(`<p>輸入命令後，OpenSSL 會提示 Alice 輸入密碼，每次使用密鑰時，她都必須輸入該密碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl genrsa -aes128 -out alice_private.pem 1024</span></span>
<span class="line"><span>Generating RSA private key, 1024 bit long modulus (2 primes)</span></span>
<span class="line"><span>..........+++++</span></span>
<span class="line"><span>..................................+++++</span></span>
<span class="line"><span>e is 65537 (0x010001)</span></span>
<span class="line"><span>Enter pass phrase for alice_private.pem:</span></span>
<span class="line"><span>Verifying - Enter pass phrase for alice_private.pem:</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ ls -l alice_private.pem</span></span>
<span class="line"><span>-rw-------. 1 alice alice 966 Mar 22 17:44 alice_private.pem</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ file alice_private.pem</span></span>
<span class="line"><span>alice_private.pem: PEM RSA private key</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>Bob 使用相同的步驟來創建他的密鑰對：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ openssl genrsa -aes128 -out bob_private.pem 1024</span></span>
<span class="line"><span>Generating RSA private key, 1024 bit long modulus (2 primes)</span></span>
<span class="line"><span>..................+++++</span></span>
<span class="line"><span>............................+++++</span></span>
<span class="line"><span>e is 65537 (0x010001)</span></span>
<span class="line"><span>Enter pass phrase for bob_private.pem:</span></span>
<span class="line"><span>Verifying - Enter pass phrase for bob_private.pem:</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ ls -l bob_private.pem</span></span>
<span class="line"><span>-rw-------. 1 bob bob 986 Mar 22 13:48 bob_private.pem</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ file bob_private.pem</span></span>
<span class="line"><span>bob_private.pem: PEM RSA private key</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><p>如果你對密鑰文件感到好奇，可以打開命令生成的 .pem 文件，但是你會看到屏幕上的一堆文本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ head alice_private.pem</span></span>
<span class="line"><span>-----BEGIN RSA PRIVATE KEY-----</span></span>
<span class="line"><span>Proc-Type: 4,ENCRYPTED</span></span>
<span class="line"><span>DEK-Info: AES-128-CBC,E26FAC1F143A30632203F09C259200B9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pdKj8Gm5eeAOF0RHzBx8l1tjmA1HSSvy0RF42bOeb7sEVZtJ6pMnrJ26ouwTQnkL</span></span>
<span class="line"><span>JJjUVPPHoKZ7j4QpwzbPGrz/hVeMXVT/y33ZEEA+3nrobwisLKz+Q+C9TVJU3m7M</span></span>
<span class="line"><span>/veiBO9xHMGV01YBNeic7MqXBkhIrNZW6pPRfrbjsBMBGSsL8nwJbb3wvHhzPkeM</span></span>
<span class="line"><span>e+wtt9S5PWhcnGMj3T+2mtFfW6HWpd8Kdp60z7Nh5mhA9+5aDWREfJhJYzl1zfcv</span></span>
<span class="line"><span>Bmxjf2wZ3sFJNty+sQVajYfk6UXMyJIuWgAjnqjw6c3vxQi0KE3NUNZYO93GQgEF</span></span>
<span class="line"><span>pyAnN9uGUTBCDYeTwdw8TEzkyaL08FkzLfFbS2N9BDksA3rpI1cxpxRVFr9+jDBz</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>要查看密鑰的詳細信息，可以使用以下 OpenSSL 命令打開 .pem 文件並顯示內容。你可能想知道在哪裏可以找到另一個配對的密鑰，因為這是單個文件。你觀察的很細緻，獲取公鑰的方法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl rsa -in alice_private.pem -noout -text</span></span>
<span class="line"><span>Enter pass phrase for alice_private.pem:</span></span>
<span class="line"><span>RSA Private-Key: (1024 bit, 2 primes)</span></span>
<span class="line"><span>modulus:</span></span>
<span class="line"><span>    00:bd:e8:61:72:f8:f6:c8:f2:cc:05:fa:07:aa:99:</span></span>
<span class="line"><span>    47:a6:d8:06:cf:09:bf:d1:66:b7:f9:37:29:5d:dc:</span></span>
<span class="line"><span>    c7:11:56:59:d7:83:b4:81:f6:cf:e2:5f:16:0d:47:</span></span>
<span class="line"><span>    81:fe:62:9a:63:c5:20:df:ee:d3:95:73:dc:0a:3f:</span></span>
<span class="line"><span>    65:d3:36:1d:c1:7d:8b:7d:0f:79:de:80:fc:d2:c0:</span></span>
<span class="line"><span>    e4:27:fc:e9:66:2d:e2:7e:fc:e6:73:d1:c9:28:6b:</span></span>
<span class="line"><span>    6a:8a:e8:96:9d:65:a0:8a:46:e0:b8:1f:b0:48:d4:</span></span>
<span class="line"><span>    db:d4:a3:7f:0d:53:36:9a:7d:2e:e7:d8:f2:16:d3:</span></span>
<span class="line"><span>    ff:1b:12:af:53:22:c0:41:51</span></span>
<span class="line"><span>publicExponent: 65537 (0x10001)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt; 截斷 &gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exponent2:</span></span>
<span class="line"><span>    6e:aa:8c:6e:37:d0:57:37:13:c0:08:7e:75:43:96:</span></span>
<span class="line"><span>    33:01:99:25:24:75:9c:0b:45:3c:a2:39:44:69:84:</span></span>
<span class="line"><span>    a4:64:48:f4:5c:bc:40:40:bf:84:b8:f8:0f:1d:7b:</span></span>
<span class="line"><span>    96:7e:16:00:eb:49:da:6b:20:65:fc:a9:20:d9:98:</span></span>
<span class="line"><span>    76:ca:59:e1</span></span>
<span class="line"><span>coefficient:</span></span>
<span class="line"><span>    68:9e:2e:fa:a3:a4:72:1d:2b:60:61:11:b1:8b:30:</span></span>
<span class="line"><span>    6e:7e:2d:f9:79:79:f2:27:ab:a0:a0:b6:45:08:df:</span></span>
<span class="line"><span>    12:f7:a4:3b:d9:df:c5:6e:c7:e8:81:29:07:cd:7e:</span></span>
<span class="line"><span>    47:99:5d:33:8c:b7:fb:3b:a9:bb:52:c0:47:7a:1c:</span></span>
<span class="line"><span>    e3:64:90:26</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><h4 id="步驟-2-提取公鑰" tabindex="-1">步驟 2：提取公鑰 <a class="header-anchor" href="#步驟-2-提取公鑰" aria-label="Permalink to “步驟 2：提取公鑰”">​</a></h4><p>注意，公鑰是你可以與他人自由共享的密鑰，而你必須將私鑰保密。因此，Alice 必須提取她的公鑰，並將其保存到文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl rsa -in alice_private.pem -pubout &gt; alice_public.pem</span></span>
<span class="line"><span>Enter pass phrase for alice_private.pem:</span></span>
<span class="line"><span>writing RSA key</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ ls -l *.pem</span></span>
<span class="line"><span>-rw-------. 1 alice alice 966 Mar 22 17:44 alice_private.pem</span></span>
<span class="line"><span>-rw-rw-r--. 1 alice alice 272 Mar 22 17:47 alice_public.pem</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>你可以使用與之前相同的方式查看公鑰詳細信息，但是這次，輸入公鑰 .pem 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ openssl rsa -in alice_public.pem -pubin -text -noout</span></span>
<span class="line"><span>RSA Public-Key: (1024 bit)</span></span>
<span class="line"><span>Modulus:</span></span>
<span class="line"><span>    00:bd:e8:61:72:f8:f6:c8:f2:cc:05:fa:07:aa:99:</span></span>
<span class="line"><span>    47:a6:d8:06:cf:09:bf:d1:66:b7:f9:37:29:5d:dc:</span></span>
<span class="line"><span>    c7:11:56:59:d7:83:b4:81:f6:cf:e2:5f:16:0d:47:</span></span>
<span class="line"><span>    81:fe:62:9a:63:c5:20:df:ee:d3:95:73:dc:0a:3f:</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>Bob 可以按照相同的過程來提取他的公鑰並將其保存到文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ openssl rsa -in bob_private.pem -pubout &gt; bob_public.pem</span></span>
<span class="line"><span>Enter pass phrase for bob_private.pem:</span></span>
<span class="line"><span>writing RSA key</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ ls -l *.pem</span></span>
<span class="line"><span>-rw-------. 1 bob bob 986 Mar 22 13:48 bob_private.pem</span></span>
<span class="line"><span>-rw-r--r--. 1 bob bob 272 Mar 22 13:51 bob_public.pem</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><h4 id="步驟-3-交換公鑰" tabindex="-1">步驟 3：交換公鑰 <a class="header-anchor" href="#步驟-3-交換公鑰" aria-label="Permalink to “步驟 3：交換公鑰”">​</a></h4><p>這些公鑰在 Alice 和 Bob 彼此交換之前沒有太大用處。有幾種共享公鑰的方法，例如使用 <code>scp</code> 命令將密鑰複製到彼此的工作站。</p><p>將 Alice 的公鑰發送到 Bob 的工作站：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ scp alice_public.pem bob@bob-machine-or-ip:/path/</span></span></code></pre></div><p>將 Bob 的公鑰發送到 Alice 的工作站：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ scp bob_public.pem alice@alice-machine-or-ip:/path/</span></span></code></pre></div><p>現在，Alice 有了 Bob 的公鑰，反之亦然：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ ls -l bob_public.pem</span></span>
<span class="line"><span>-rw-r--r--. 1 alice alice 272 Mar 22 17:51 bob_public.pem</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ ls -l alice_public.pem</span></span>
<span class="line"><span>-rw-r--r--. 1 bob bob 272 Mar 22 13:54 alice_public.pem</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><h4 id="步驟-4-使用公鑰交換加密的消息" tabindex="-1">步驟 4：使用公鑰交換加密的消息 <a class="header-anchor" href="#步驟-4-使用公鑰交換加密的消息" aria-label="Permalink to “步驟 4：使用公鑰交換加密的消息”">​</a></h4><p>假設 Alice 需要與 Bob 秘密交流。她將秘密信息寫入文件中，並將其保存到 <code>top_secret.txt</code> 中。由於這是一個普通文件，因此任何人都可以打開它並查看其內容，這裏並沒有太多保護：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ echo &quot;vim or emacs ?&quot; &gt; top_secret.txt</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ cat top_secret.txt</span></span>
<span class="line"><span>vim or emacs ?</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>要加密此秘密消息，Alice 需要使用 <code>openssls -encrypt</code> 命令。她需要為該工具提供三個輸入：</p><ol><li>秘密消息文件的名稱</li><li>Bob 的公鑰（文件）</li><li>加密後新文件的名稱</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl rsautl -encrypt -inkey bob_public.pem -pubin -in top_secret.txt -out top_secret.enc</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ ls -l top_secret.*</span></span>
<span class="line"><span>-rw-rw-r--. 1 alice alice 128 Mar 22 17:54 top_secret.enc</span></span>
<span class="line"><span>-rw-rw-r--. 1 alice alice  15 Mar 22 17:53 top_secret.txt</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>加密後，原始文件仍然是可見的，而新創建的加密文件在屏幕上看起來像亂碼。這樣，你可以確定秘密消息已被加密：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ cat top_secret.txt</span></span>
<span class="line"><span>vim or emacs ?</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ cat top_secret.enc</span></span>
<span class="line"><span>�s��uM)M&amp;&gt;��N��}dmCy92#1X�q󺕦��v���M��@��E�~��1�k~&amp;PU�VhHL�@^P��(��zi�M�4p�e��g+R�1�Ԁ���s�������q_8�lr����C�I-��alice $</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ hexdump -C ./top_secret.enc</span></span>
<span class="line"><span>00000000  9e 73 12 8f e3 75 4d 29  4d 26 3e bf 80 4e a0 c5  |.s...uM)M&amp;&gt;..N..|</span></span>
<span class="line"><span>00000010  7d 64 6d 43 79 39 32 23  31 58 ce 71 f3 ba 95 a6  |}dmCy92#1X.q....|</span></span>
<span class="line"><span>00000020  c0 c0 76 17 fb f7 bf 4d  ce fc 40 e6 f4 45 7f db  |..v....M..@..E..|</span></span>
<span class="line"><span>00000030  7e ae c0 31 f8 6b 10 06  7e 26 50 55 b5 05 56 68  |~..1.k..~&amp;PU..Vh|</span></span>
<span class="line"><span>00000040  48 4c eb 40 5e 50 fe 19  ea 28 a8 b8 7a 13 69 d7  |HL.@^P...(..z.i.|</span></span>
<span class="line"><span>00000050  4d b0 34 70 d8 65 d5 07  95 67 2b 52 ea 31 aa d4  |M.4p.e...g+R.1..|</span></span>
<span class="line"><span>00000060  80 b3 a8 ec a1 73 ed a7  f9 17 c3 13 d4 fa c1 71  |.....s.........q|</span></span>
<span class="line"><span>00000070  5f 38 b9 6c 07 72 81 a6  fe af 43 a6 49 2d c4 ee  |_8.l.r....C.I-..|</span></span>
<span class="line"><span>00000080</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ file top_secret.enc</span></span>
<span class="line"><span>top_secret.enc: data</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>刪除秘密消息的原始文件是安全的，這樣確保任何痕跡都沒有：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ rm -f top_secret.txt</span></span></code></pre></div><p>現在，Alice 需要再次使用 <code>scp</code> 命令將此加密文件通過網絡發送給 Bob 的工作站。注意，即使文件被截獲，其內容也會是加密的，因此內容不會被泄露：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $  scp top_secret.enc bob@bob-machine-or-ip:/path/</span></span></code></pre></div><p>如果 Bob 使用常規方法嘗試打開並查看加密的消息，他將無法看懂該消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ ls -l top_secret.enc</span></span>
<span class="line"><span>-rw-r--r--. 1 bob bob 128 Mar 22 13:59 top_secret.enc</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ cat top_secret.enc</span></span>
<span class="line"><span>�s��uM)M&amp;&gt;��N��}dmCy92#1X�q󺕦��v���M��@��E�~��1�k~&amp;PU�VhHL�@^P��(��zi�M�4p�e��g+R�1�Ԁ���s�������q_8�lr����C�I-��bob $</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ hexdump -C top_secret.enc</span></span>
<span class="line"><span>00000000  9e 73 12 8f e3 75 4d 29  4d 26 3e bf 80 4e a0 c5  |.s...uM)M&amp;&gt;..N..|</span></span>
<span class="line"><span>00000010  7d 64 6d 43 79 39 32 23  31 58 ce 71 f3 ba 95 a6  |}dmCy92#1X.q....|</span></span>
<span class="line"><span>00000020  c0 c0 76 17 fb f7 bf 4d  ce fc 40 e6 f4 45 7f db  |..v....M..@..E..|</span></span>
<span class="line"><span>00000030  7e ae c0 31 f8 6b 10 06  7e 26 50 55 b5 05 56 68  |~..1.k..~&amp;PU..Vh|</span></span>
<span class="line"><span>00000040  48 4c eb 40 5e 50 fe 19  ea 28 a8 b8 7a 13 69 d7  |HL.@^P...(..z.i.|</span></span>
<span class="line"><span>00000050  4d b0 34 70 d8 65 d5 07  95 67 2b 52 ea 31 aa d4  |M.4p.e...g+R.1..|</span></span>
<span class="line"><span>00000060  80 b3 a8 ec a1 73 ed a7  f9 17 c3 13 d4 fa c1 71  |.....s.........q|</span></span>
<span class="line"><span>00000070  5f 38 b9 6c 07 72 81 a6  fe af 43 a6 49 2d c4 ee  |_8.l.r....C.I-..|</span></span>
<span class="line"><span>00000080</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><h4 id="步驟-5-使用私鑰解密文件" tabindex="-1">步驟 5：使用私鑰解密文件 <a class="header-anchor" href="#步驟-5-使用私鑰解密文件" aria-label="Permalink to “步驟 5：使用私鑰解密文件”">​</a></h4><p>Bob 需要使用 OpenSSL 來解密消息，但是這次使用的是 <code>-decrypt</code> 命令列參數。他需要向工具程序提供以下信息：</p><ol><li>加密的文件（從 Alice 那裏得到）</li><li>Bob 的私鑰（用於解密，因為文件是用 Bob 的公鑰加密的）</li><li>通過重定向保存解密輸出的文件名</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ openssl rsautl -decrypt -inkey bob_private.pem -in top_secret.enc &gt; top_secret.txt</span></span>
<span class="line"><span>Enter pass phrase for bob_private.pem:</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><p>現在，Bob 可以閲讀 Alice 發送給他的秘密消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ ls -l top_secret.txt</span></span>
<span class="line"><span>-rw-r--r--. 1 bob bob 15 Mar 22 14:02 top_secret.txt</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ cat top_secret.txt</span></span>
<span class="line"><span>vim or emacs ?</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><p>Bob 需要回復 Alice，因此他將秘密回覆寫在一個文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ echo &quot;nano for life&quot; &gt; reply_secret.txt</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ cat reply_secret.txt</span></span>
<span class="line"><span>nano for life</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><h4 id="步驟-6-使用其他密鑰重複該過程" tabindex="-1">步驟 6：使用其他密鑰重複該過程 <a class="header-anchor" href="#步驟-6-使用其他密鑰重複該過程" aria-label="Permalink to “步驟 6：使用其他密鑰重複該過程”">​</a></h4><p>為了發送消息，Bob 採用和 Alice 相同的步驟，但是由於該消息是發送給 Alice 的，因此他需要使用 Alice 的公鑰來加密文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ openssl rsautl -encrypt -inkey alice_public.pem -pubin -in reply_secret.txt -out reply_secret.enc</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ ls -l reply_secret.enc</span></span>
<span class="line"><span>-rw-r--r--. 1 bob bob 128 Mar 22 14:03 reply_secret.enc</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ cat reply_secret.enc</span></span>
<span class="line"><span>�F݇��.4&quot;f�1��\\��{o԰$�M��I{5�|�\\�l͂�e��Y�V��{�|!$c^a</span></span>
<span class="line"><span>                                                 �*Ԫ\\vQ�Ϡ9����&#39;��ٮsP��&#39;��Z�1W�n��k���J�0�I;P8������&amp;:bob $</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ hexdump -C ./reply_secret.enc</span></span>
<span class="line"><span>00000000  92 46 dd 87 04 bc a7 2e  34 22 01 66 1a 13 31 db  |.F......4&quot;.f..1.|</span></span>
<span class="line"><span>00000010  c4 5c b4 8e 7b 6f d4 b0  24 d2 4d 92 9b 49 7b 35  |.\\..{o..$.M..I{5|</span></span>
<span class="line"><span>00000020  da 7c ee 5c bb 6c cd 82  f1 1b 92 65 f1 8d f2 59  |.|.\\.l.....e...Y|</span></span>
<span class="line"><span>00000030  82 56 81 80 7b 89 07 7c  21 24 63 5e 61 0c ae 2a  |.V..{..|!$c^a..*|</span></span>
<span class="line"><span>00000040  d4 aa 5c 76 51 8d cf a0  39 04 c1 d7 dc f0 ad 99  |..\\vQ...9.......|</span></span>
<span class="line"><span>00000050  27 ed 8e de d9 ae 02 73  50 e0 dd 27 13 ae 8e 5a  |&#39;......sP..&#39;...Z|</span></span>
<span class="line"><span>00000060  12 e4 9a 31 57 b3 03 6e  dd e1 16 7f 6b c0 b3 8b  |...1W..n....k...|</span></span>
<span class="line"><span>00000070  4a cf 30 b8 49 3b 50 38  e0 9f 84 f6 83 da 26 3a  |J.0.I;P8......&amp;:|</span></span>
<span class="line"><span>00000080</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ # remove clear text secret message file</span></span>
<span class="line"><span>bob $ rm -f reply_secret.txt</span></span></code></pre></div><p>Bob 通過 <code>scp</code> 將加密的文件發送至 Alice 的工作站：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ scp reply_secret.enc alice@alice-machine-or-ip:/path/</span></span></code></pre></div><p>如果 Alice 嘗試使用常規工具去閲讀加密的文本，她將無法理解加密的文本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ ls -l reply_secret.enc</span></span>
<span class="line"><span>-rw-r--r--. 1 alice alice 128 Mar 22 18:01 reply_secret.enc</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ cat reply_secret.enc</span></span>
<span class="line"><span>�F݇��.4&quot;f�1��\\��{o԰$�M��I{5�|�\\�l͂�e��Y�V��{�|!$c^a</span></span>
<span class="line"><span>                                                 �*Ԫ\\vQ�Ϡ9����&#39;��ٮsP��&#39;��Z�1W�n��k���J�0�I;P8������&amp;:alice $</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ hexdump -C ./reply_secret.enc</span></span>
<span class="line"><span>00000000  92 46 dd 87 04 bc a7 2e  34 22 01 66 1a 13 31 db  |.F......4&quot;.f..1.|</span></span>
<span class="line"><span>00000010  c4 5c b4 8e 7b 6f d4 b0  24 d2 4d 92 9b 49 7b 35  |.\\..{o..$.M..I{5|</span></span>
<span class="line"><span>00000020  da 7c ee 5c bb 6c cd 82  f1 1b 92 65 f1 8d f2 59  |.|.\\.l.....e...Y|</span></span>
<span class="line"><span>00000030  82 56 81 80 7b 89 07 7c  21 24 63 5e 61 0c ae 2a  |.V..{..|!$c^a..*|</span></span>
<span class="line"><span>00000040  d4 aa 5c 76 51 8d cf a0  39 04 c1 d7 dc f0 ad 99  |..\\vQ...9.......|</span></span>
<span class="line"><span>00000050  27 ed 8e de d9 ae 02 73  50 e0 dd 27 13 ae 8e 5a  |&#39;......sP..&#39;...Z|</span></span>
<span class="line"><span>00000060  12 e4 9a 31 57 b3 03 6e  dd e1 16 7f 6b c0 b3 8b  |...1W..n....k...|</span></span>
<span class="line"><span>00000070  4a cf 30 b8 49 3b 50 38  e0 9f 84 f6 83 da 26 3a  |J.0.I;P8......&amp;:|</span></span>
<span class="line"><span>00000080</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>所以，她使用 OpenSSL 解密消息，只不過這次她提供了自己的私鑰並將輸出保存到文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl rsautl -decrypt -inkey alice_private.pem -in reply_secret.enc &gt; reply_secret.txt</span></span>
<span class="line"><span>Enter pass phrase for alice_private.pem:</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ ls -l reply_secret.txt</span></span>
<span class="line"><span>-rw-rw-r--. 1 alice alice 14 Mar 22 18:02 reply_secret.txt</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ cat reply_secret.txt</span></span>
<span class="line"><span>nano for life</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><h3 id="瞭解-openssl-的更多信息" tabindex="-1">瞭解 OpenSSL 的更多信息 <a class="header-anchor" href="#瞭解-openssl-的更多信息" aria-label="Permalink to “瞭解 OpenSSL 的更多信息”">​</a></h3>`,56)),i("p",null,[s[6]||(s[6]=a("OpenSSL 在加密界是真正的瑞士軍刀。除了加密文件外，它還可以執行許多任務，你可以通過訪問 OpenSSL ",-1)),p(n,{href:"https://www.openssl.org/docs/"},{default:e(()=>[...s[5]||(s[5]=[a("文檔頁面",-1)])]),_:1}),s[7]||(s[7]=a("來找到使用它的所有方式，包括手冊的鏈接、 《OpenSSL Cookbook》、常見問題解答等。要了解更多信息，嘗試使用其自帶的各種加密算法，看看它是如何工作的。",-1))]),s[26]||(s[26]=i("hr",null,null,-1)),i("p",null,[s[9]||(s[9]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/21/4/encryption-decryption-openssl"},{default:e(()=>[...s[8]||(s[8]=[a("https://opensource.com/article/21/4/encryption-decryption-openssl",-1)])]),_:1})]),i("p",null,[s[14]||(s[14]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/gkamathe"},{default:e(()=>[...s[10]||(s[10]=[a("Gaurav Kamathe",-1)])]),_:1}),s[15]||(s[15]=a(" 選題：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[11]||(s[11]=[a("lujun9972",-1)])]),_:1}),s[16]||(s[16]=a(" 譯者：",-1)),p(n,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[12]||(s[12]=[a("MjSeven",-1)])]),_:1}),s[17]||(s[17]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[13]||(s[13]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[20]||(s[20]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[18]||(s[18]=[a("LCTT",-1)])]),_:1}),s[21]||(s[21]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[19]||(s[19]=[a("Linux中國",-1)])]),_:1}),s[22]||(s[22]=a(" 榮譽推出",-1))])])}const v=t(o,[["render",d]]);export{$ as __pageData,v as default};
