import{_ as t,a0 as c,w as r,s as b,ao as l,I as i,a1 as p,A as e,x as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const $=JSON.parse('{"title":"使用 OpenSSL 加密和解密文件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 OpenSSL 加密和解密文件 | LCTT (202105) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 OpenSSL 加密和解密文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 OpenSSL 加密和解密文件 | LCTT (202105) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202105/20210429 Encrypting and decrypting files with OpenSSL","title":"使用 OpenSSL 加密和解密文件","tag":"202105","desc":""},"relativePath":"202105/20210429 Encrypting and decrypting files with OpenSSL.md","filePath":"[post].md"}'),o={name:"202105/20210429 Encrypting and decrypting files with OpenSSL.md"};function d(h,s,g,k,f,u){const n=c("Link");return r(),b("div",null,[s[23]||(s[23]=l('<h1 id="使用-openssl-加密和解密文件" tabindex="-1">使用 OpenSSL 加密和解密文件 <a class="header-anchor" href="#使用-openssl-加密和解密文件" aria-label="Permalink to “使用 OpenSSL 加密和解密文件”">​</a></h1><blockquote><p>OpenSSL 是一个实用工具，它可以确保其他人员无法打开你的敏感和机密消息。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202105/07/163825a9yh74h9yh4h77y2.jpg" alt=""></p><p>加密是对消息进行编码的一种方法，这样可以保护消息的内容免遭他人窥视。一般有两种类型：</p><ol><li>密钥加密或对称加密</li><li>公钥加密或非对称加密</li></ol><p><ruby>密钥加密<rt>secret-key encryption</rt></ruby>使用相同的密钥进行加密和解密，而<ruby>公钥加密<rt>public-key encryption</rt></ruby>使用不同的密钥进行加密和解密。每种方法各有利弊。密钥加密速度更快，而公钥加密更安全，因为它解决了安全共享密钥的问题，将它们结合在一起可以最大限度地利用每种类型的优势。</p><h3 id="公钥加密" tabindex="-1">公钥加密 <a class="header-anchor" href="#公钥加密" aria-label="Permalink to “公钥加密”">​</a></h3><p>公钥加密使用两组密钥，称为密钥对。一个是公钥，可以与你想要秘密通信的任何人自由共享。另一个是私钥，应该是一个秘密，永远不会共享。</p><p>公钥用于加密。如果某人想与你交流敏感信息，你可以将你的公钥发送给他们，他们可以使用公钥加密消息或文件，然后再将其发送给你。私钥用于解密。解密发件人加密的消息的唯一方法是使用私钥。因此，它们被称为“密钥对”，它们是相互关联的。</p><h3 id="如何使用-openssl-加密文件" tabindex="-1">如何使用 OpenSSL 加密文件 <a class="header-anchor" href="#如何使用-openssl-加密文件" aria-label="Permalink to “如何使用 OpenSSL 加密文件”">​</a></h3>',10)),i("p",null,[p(n,{href:"https://www.openssl.org/"},{default:e(()=>[...s[0]||(s[0]=[a("OpenSSL",-1)])]),_:1}),s[1]||(s[1]=a(" 是一个了不起的工具，可以执行各种任务，例如加密文件。本文使用安装了 OpenSSL 的 Fedora 计算机。如果你的机器上没有，则可以使用软件包管理器进行安装：",-1))]),s[24]||(s[24]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ cat /etc/fedora-release</span></span>
<span class="line"><span>Fedora release 33 (Thirty Three)</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ openssl version</span></span>
<span class="line"><span>OpenSSL 1.1.1i FIPS  8 Dec 2020</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>要探索文件加密和解密，假如有两个用户 Alice 和 Bob，他们想通过使用 OpenSSL 交换加密文件来相互通信。</p><h4 id="步骤-1-生成密钥对" tabindex="-1">步骤 1：生成密钥对 <a class="header-anchor" href="#步骤-1-生成密钥对" aria-label="Permalink to “步骤 1：生成密钥对”">​</a></h4><p>在加密文件之前，你需要生成密钥对。你还需要一个<ruby>密码短语<rt>passphrase</rt></ruby>，每当你使用 OpenSSL 时都必须使用该密码短语，因此务必记住它。</p><p>Alice 使用以下命令生成她的一组密钥对：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl genrsa -aes128 -out alice_private.pem 1024</span></span></code></pre></div>`,6)),i("p",null,[s[3]||(s[3]=a("此命令使用 OpenSSL 的 ",-1)),p(n,{href:"https://www.openssl.org/docs/man1.0.2/man1/genrsa.html"},{default:e(()=>[...s[2]||(s[2]=[a("genrsa",-1)])]),_:1}),s[4]||(s[4]=a(" 命令生成一个 1024 位的公钥/私钥对。这是可以的，因为 RSA 算法是不对称的。它还使用了 aes128 对称密钥算法来加密 Alice 生成的私钥。",-1))]),s[25]||(s[25]=l(`<p>输入命令后，OpenSSL 会提示 Alice 输入密码，每次使用密钥时，她都必须输入该密码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl genrsa -aes128 -out alice_private.pem 1024</span></span>
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
<span class="line"><span>alice $</span></span></code></pre></div><p>Bob 使用相同的步骤来创建他的密钥对：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ openssl genrsa -aes128 -out bob_private.pem 1024</span></span>
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
<span class="line"><span>bob $</span></span></code></pre></div><p>如果你对密钥文件感到好奇，可以打开命令生成的 .pem 文件，但是你会看到屏幕上的一堆文本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ head alice_private.pem</span></span>
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
<span class="line"><span>alice $</span></span></code></pre></div><p>要查看密钥的详细信息，可以使用以下 OpenSSL 命令打开 .pem 文件并显示内容。你可能想知道在哪里可以找到另一个配对的密钥，因为这是单个文件。你观察的很细致，获取公钥的方法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl rsa -in alice_private.pem -noout -text</span></span>
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
<span class="line"><span>&lt;&lt; 截断 &gt;&gt;</span></span>
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
<span class="line"><span>alice $</span></span></code></pre></div><h4 id="步骤-2-提取公钥" tabindex="-1">步骤 2：提取公钥 <a class="header-anchor" href="#步骤-2-提取公钥" aria-label="Permalink to “步骤 2：提取公钥”">​</a></h4><p>注意，公钥是你可以与他人自由共享的密钥，而你必须将私钥保密。因此，Alice 必须提取她的公钥，并将其保存到文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl rsa -in alice_private.pem -pubout &gt; alice_public.pem</span></span>
<span class="line"><span>Enter pass phrase for alice_private.pem:</span></span>
<span class="line"><span>writing RSA key</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ ls -l *.pem</span></span>
<span class="line"><span>-rw-------. 1 alice alice 966 Mar 22 17:44 alice_private.pem</span></span>
<span class="line"><span>-rw-rw-r--. 1 alice alice 272 Mar 22 17:47 alice_public.pem</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>你可以使用与之前相同的方式查看公钥详细信息，但是这次，输入公钥 .pem 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ openssl rsa -in alice_public.pem -pubin -text -noout</span></span>
<span class="line"><span>RSA Public-Key: (1024 bit)</span></span>
<span class="line"><span>Modulus:</span></span>
<span class="line"><span>    00:bd:e8:61:72:f8:f6:c8:f2:cc:05:fa:07:aa:99:</span></span>
<span class="line"><span>    47:a6:d8:06:cf:09:bf:d1:66:b7:f9:37:29:5d:dc:</span></span>
<span class="line"><span>    c7:11:56:59:d7:83:b4:81:f6:cf:e2:5f:16:0d:47:</span></span>
<span class="line"><span>    81:fe:62:9a:63:c5:20:df:ee:d3:95:73:dc:0a:3f:</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>Bob 可以按照相同的过程来提取他的公钥并将其保存到文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ openssl rsa -in bob_private.pem -pubout &gt; bob_public.pem</span></span>
<span class="line"><span>Enter pass phrase for bob_private.pem:</span></span>
<span class="line"><span>writing RSA key</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ ls -l *.pem</span></span>
<span class="line"><span>-rw-------. 1 bob bob 986 Mar 22 13:48 bob_private.pem</span></span>
<span class="line"><span>-rw-r--r--. 1 bob bob 272 Mar 22 13:51 bob_public.pem</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><h4 id="步骤-3-交换公钥" tabindex="-1">步骤 3：交换公钥 <a class="header-anchor" href="#步骤-3-交换公钥" aria-label="Permalink to “步骤 3：交换公钥”">​</a></h4><p>这些公钥在 Alice 和 Bob 彼此交换之前没有太大用处。有几种共享公钥的方法，例如使用 <code>scp</code> 命令将密钥复制到彼此的工作站。</p><p>将 Alice 的公钥发送到 Bob 的工作站：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ scp alice_public.pem bob@bob-machine-or-ip:/path/</span></span></code></pre></div><p>将 Bob 的公钥发送到 Alice 的工作站：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ scp bob_public.pem alice@alice-machine-or-ip:/path/</span></span></code></pre></div><p>现在，Alice 有了 Bob 的公钥，反之亦然：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ ls -l bob_public.pem</span></span>
<span class="line"><span>-rw-r--r--. 1 alice alice 272 Mar 22 17:51 bob_public.pem</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ ls -l alice_public.pem</span></span>
<span class="line"><span>-rw-r--r--. 1 bob bob 272 Mar 22 13:54 alice_public.pem</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><h4 id="步骤-4-使用公钥交换加密的消息" tabindex="-1">步骤 4：使用公钥交换加密的消息 <a class="header-anchor" href="#步骤-4-使用公钥交换加密的消息" aria-label="Permalink to “步骤 4：使用公钥交换加密的消息”">​</a></h4><p>假设 Alice 需要与 Bob 秘密交流。她将秘密信息写入文件中，并将其保存到 <code>top_secret.txt</code> 中。由于这是一个普通文件，因此任何人都可以打开它并查看其内容，这里并没有太多保护：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ echo &quot;vim or emacs ?&quot; &gt; top_secret.txt</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ cat top_secret.txt</span></span>
<span class="line"><span>vim or emacs ?</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>要加密此秘密消息，Alice 需要使用 <code>openssls -encrypt</code> 命令。她需要为该工具提供三个输入：</p><ol><li>秘密消息文件的名称</li><li>Bob 的公钥（文件）</li><li>加密后新文件的名称</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl rsautl -encrypt -inkey bob_public.pem -pubin -in top_secret.txt -out top_secret.enc</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ ls -l top_secret.*</span></span>
<span class="line"><span>-rw-rw-r--. 1 alice alice 128 Mar 22 17:54 top_secret.enc</span></span>
<span class="line"><span>-rw-rw-r--. 1 alice alice  15 Mar 22 17:53 top_secret.txt</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><p>加密后，原始文件仍然是可见的，而新创建的加密文件在屏幕上看起来像乱码。这样，你可以确定秘密消息已被加密：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ cat top_secret.txt</span></span>
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
<span class="line"><span>alice $</span></span></code></pre></div><p>删除秘密消息的原始文件是安全的，这样确保任何痕迹都没有：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ rm -f top_secret.txt</span></span></code></pre></div><p>现在，Alice 需要再次使用 <code>scp</code> 命令将此加密文件通过网络发送给 Bob 的工作站。注意，即使文件被截获，其内容也会是加密的，因此内容不会被泄露：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $  scp top_secret.enc bob@bob-machine-or-ip:/path/</span></span></code></pre></div><p>如果 Bob 使用常规方法尝试打开并查看加密的消息，他将无法看懂该消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ ls -l top_secret.enc</span></span>
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
<span class="line"><span>bob $</span></span></code></pre></div><h4 id="步骤-5-使用私钥解密文件" tabindex="-1">步骤 5：使用私钥解密文件 <a class="header-anchor" href="#步骤-5-使用私钥解密文件" aria-label="Permalink to “步骤 5：使用私钥解密文件”">​</a></h4><p>Bob 需要使用 OpenSSL 来解密消息，但是这次使用的是 <code>-decrypt</code> 命令行参数。他需要向工具程序提供以下信息：</p><ol><li>加密的文件（从 Alice 那里得到）</li><li>Bob 的私钥（用于解密，因为文件是用 Bob 的公钥加密的）</li><li>通过重定向保存解密输出的文件名</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ openssl rsautl -decrypt -inkey bob_private.pem -in top_secret.enc &gt; top_secret.txt</span></span>
<span class="line"><span>Enter pass phrase for bob_private.pem:</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><p>现在，Bob 可以阅读 Alice 发送给他的秘密消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ ls -l top_secret.txt</span></span>
<span class="line"><span>-rw-r--r--. 1 bob bob 15 Mar 22 14:02 top_secret.txt</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ cat top_secret.txt</span></span>
<span class="line"><span>vim or emacs ?</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><p>Bob 需要回复 Alice，因此他将秘密回复写在一个文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ echo &quot;nano for life&quot; &gt; reply_secret.txt</span></span>
<span class="line"><span>bob $</span></span>
<span class="line"><span>bob $ cat reply_secret.txt</span></span>
<span class="line"><span>nano for life</span></span>
<span class="line"><span>bob $</span></span></code></pre></div><h4 id="步骤-6-使用其他密钥重复该过程" tabindex="-1">步骤 6：使用其他密钥重复该过程 <a class="header-anchor" href="#步骤-6-使用其他密钥重复该过程" aria-label="Permalink to “步骤 6：使用其他密钥重复该过程”">​</a></h4><p>为了发送消息，Bob 采用和 Alice 相同的步骤，但是由于该消息是发送给 Alice 的，因此他需要使用 Alice 的公钥来加密文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bob $ openssl rsautl -encrypt -inkey alice_public.pem -pubin -in reply_secret.txt -out reply_secret.enc</span></span>
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
<span class="line"><span>bob $ rm -f reply_secret.txt</span></span></code></pre></div><p>Bob 通过 <code>scp</code> 将加密的文件发送至 Alice 的工作站：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ scp reply_secret.enc alice@alice-machine-or-ip:/path/</span></span></code></pre></div><p>如果 Alice 尝试使用常规工具去阅读加密的文本，她将无法理解加密的文本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $</span></span>
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
<span class="line"><span>alice $</span></span></code></pre></div><p>所以，她使用 OpenSSL 解密消息，只不过这次她提供了自己的私钥并将输出保存到文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alice $ openssl rsautl -decrypt -inkey alice_private.pem -in reply_secret.enc &gt; reply_secret.txt</span></span>
<span class="line"><span>Enter pass phrase for alice_private.pem:</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ ls -l reply_secret.txt</span></span>
<span class="line"><span>-rw-rw-r--. 1 alice alice 14 Mar 22 18:02 reply_secret.txt</span></span>
<span class="line"><span>alice $</span></span>
<span class="line"><span>alice $ cat reply_secret.txt</span></span>
<span class="line"><span>nano for life</span></span>
<span class="line"><span>alice $</span></span></code></pre></div><h3 id="了解-openssl-的更多信息" tabindex="-1">了解 OpenSSL 的更多信息 <a class="header-anchor" href="#了解-openssl-的更多信息" aria-label="Permalink to “了解 OpenSSL 的更多信息”">​</a></h3>`,56)),i("p",null,[s[6]||(s[6]=a("OpenSSL 在加密界是真正的瑞士军刀。除了加密文件外，它还可以执行许多任务，你可以通过访问 OpenSSL ",-1)),p(n,{href:"https://www.openssl.org/docs/"},{default:e(()=>[...s[5]||(s[5]=[a("文档页面",-1)])]),_:1}),s[7]||(s[7]=a("来找到使用它的所有方式，包括手册的链接、 《OpenSSL Cookbook》、常见问题解答等。要了解更多信息，尝试使用其自带的各种加密算法，看看它是如何工作的。",-1))]),s[26]||(s[26]=i("hr",null,null,-1)),i("p",null,[s[9]||(s[9]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/21/4/encryption-decryption-openssl"},{default:e(()=>[...s[8]||(s[8]=[a("https://opensource.com/article/21/4/encryption-decryption-openssl",-1)])]),_:1})]),i("p",null,[s[14]||(s[14]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/gkamathe"},{default:e(()=>[...s[10]||(s[10]=[a("Gaurav Kamathe",-1)])]),_:1}),s[15]||(s[15]=a(" 选题：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[11]||(s[11]=[a("lujun9972",-1)])]),_:1}),s[16]||(s[16]=a(" 译者：",-1)),p(n,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[12]||(s[12]=[a("MjSeven",-1)])]),_:1}),s[17]||(s[17]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[13]||(s[13]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[20]||(s[20]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[18]||(s[18]=[a("LCTT",-1)])]),_:1}),s[21]||(s[21]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[19]||(s[19]=[a("Linux中国",-1)])]),_:1}),s[22]||(s[22]=a(" 荣誉推出",-1))])])}const v=t(o,[["render",d]]);export{$ as __pageData,v as default};
