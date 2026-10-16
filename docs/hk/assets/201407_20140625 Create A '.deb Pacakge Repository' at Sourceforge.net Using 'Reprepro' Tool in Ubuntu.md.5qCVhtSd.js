import{_ as i,a0 as p,w as d,s as u,ao as a,I as r,x as t,a1 as n,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse(`{"title":"在Ubuntu下如何創建遠程 .deb 包倉庫 | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu下如何創建遠程 .deb 包倉庫 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu下如何創建遠程 .deb 包倉庫 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu下如何創建遠程 .deb 包倉庫 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140625 Create A '.deb Pacakge Repository' at Sourceforge.net Using 'Reprepro' Tool in Ubuntu","title":"在Ubuntu下如何創建遠程 .deb 包倉庫","tag":"201407","desc":""},"relativePath":"201407/20140625 Create A '.deb Pacakge Repository' at Sourceforge.net Using 'Reprepro' Tool in Ubuntu.md","filePath":"[post].md"}`),l={name:"201407/20140625 Create A '.deb Pacakge Repository' at Sourceforge.net Using 'Reprepro' Tool in Ubuntu.md"};function g(m,e,c,y,b,f){const o=p("Link");return d(),u("div",null,[e[19]||(e[19]=a(`<h1 id="在ubuntu下如何創建遠程-deb-包倉庫" tabindex="-1">在Ubuntu下如何創建遠程&quot;.deb&quot;包倉庫 <a class="header-anchor" href="#在ubuntu下如何創建遠程-deb-包倉庫" aria-label="Permalink to “在Ubuntu下如何創建遠程.deb包倉庫”">​</a></h1><p><strong>Reprepro</strong>是一款小巧的命令列工具來方便地創建並管理<strong>.deb</strong>倉庫。今天我們會展示給你如何使用reprepro簡單地創建一個Debian包倉庫，並使用<strong>rsync</strong>上傳到Sourceforge.net。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/06/Create-Debian-Package-Repository1.png" alt="Create Deb Package Repository"></p><h3 id="步驟-1-安裝reprepro並生成key" tabindex="-1">步驟 1: 安裝Reprepro並生成key <a class="header-anchor" href="#步驟-1-安裝reprepro並生成key" aria-label="Permalink to “步驟 1: 安裝Reprepro並生成key”">​</a></h3><p>首先，安裝所有需要的包，使用下面的apt-get命令。</p><pre><code>$ sudo apt-get install reprepro gnupg
</code></pre><p>現在你需要使用gnupg生成一個gpg key，這裏使用下面的命令。</p><pre><code>$ gpg --gen-key
</code></pre><p>它會詢問你一些問題，比如你想要哪種key、key的有效期、如果你不知道如何回答，只需點擊<strong>回車</strong> 來選擇默認選項（建議）</p><p>當然，它會詢問你用户名和密碼，在腦海中記住這些，因為我們會在之後需要它。</p><pre><code>gpg (GnuPG) 1.4.14; Copyright (C) 2013 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
Your selection? 
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048) 
Requested keysize is 2048 bits
Please specify how long the key should be valid.
         0 = key does not expire
        = key expires in n days
      w = key expires in n weeks
      m = key expires in n months
      y = key expires in n years
Key is valid for? (0) 
Key does not expire at all
Is this correct? (y/N) Y

You need a user ID to identify your key; the software constructs the user ID
from the Real Name, Comment and Email Address in this form:
    &quot;Heinrich Heine (Der Dichter) &lt;heinrichh@duesseldorf.de&gt;&quot;

Real name: ravisaive
Email address: tecmint.com@gmail.com
Comment: tecmint
You selected this USER-ID:
    &quot;Ravi Saive (tecmint) &lt;tecmint.com@gmail.com&gt;&quot;

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
You need a Passphrase to protect your secret key.

We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

+++++
gpg: key 2EB446DD marked as ultimately trusted
public and secret key created and signed.

gpg: checking the trustdb
gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
pub   2048R/2EB446DD 2014-06-24
      Key fingerprint = D222 B1C9 342E 5911 02B1  9147 3BD6 7918 2EB4 46DD
uid                  Ravi Saive (tecmint) &lt;tecmint.com@gmail.com&gt;
sub   2048R/7EF2F750 2014-06-24
</code></pre><p>現在你的key已經生成了，要檢查一下，用root權限運行這條命令。</p><pre><code>$ sudo gpg --list-keys
</code></pre><h4 id="示例輸出" tabindex="-1">示例輸出 <a class="header-anchor" href="#示例輸出" aria-label="Permalink to “示例輸出”">​</a></h4><pre><code>/home/ravisaive/.gnupg/pubring.gpg
----------------------------------
pub   2048R/2EB446DD 2014-06-24
uid                  ravisaive (tecmint) &lt;tecmint.com@gmail.com&gt;
sub   2048R/7EF2F750 2014-06-24
</code></pre><h3 id="步驟-2-創建一個包倉庫並導出key" tabindex="-1">步驟 2: 創建一個包倉庫並導出key <a class="header-anchor" href="#步驟-2-創建一個包倉庫並導出key" aria-label="Permalink to “步驟 2: 創建一個包倉庫並導出key”">​</a></h3><p>我們現在要開始創建倉庫，首先你需要創建一些文件夾，我們的倉庫會放在<strong>/var/www/apt</strong>目錄，讓我們先創建這些目錄。</p><pre><code>$ sudo su
# cd /var/www
# mkdir apt
# mkdir -p ./apt/incoming 
# mkdir -p ./apt/conf
# mkdir -p ./apt/key
</code></pre><p>你現在需要將key導出到倉庫文件夾，運行：</p><pre><code># gpg --armor --export username yourmail@mail.com &gt;&gt; /var/www/apt/key/deb.gpg.key
</code></pre><p>注意：用你之前步驟中輸入的用户名代替username，用你的email代替上面的yourmail@mail.com。</p><p>我們需要在<strong>/var/www/apt/conf</strong>創建一個文件“<strong>distributions</strong>”。</p><pre><code># touch /var/www/apt/conf/distributions
</code></pre><p>加入下面這幾行到distributions這個文件中並保存。</p><pre><code>Origin: (你的名字)
Label: (庫的名字)
Suite: (stable 或 unstable)
Codename: (發佈的代碼名，比如  trusty)
Version: (發佈的版本，比如 14.04)
Architectures: (軟件包所支持的架構， 比如 i386 或 amd64)
Components: (包含的部件，比如 main restricted universe multiverse)
Description: (描述)
SignWith: yes
</code></pre><p>接下來我們會創建倉庫樹，運行這些命令：</p><pre><code># reprepro --ask-passphrase -Vb /var/www/apt export
</code></pre><h4 id="示例輸出-1" tabindex="-1">示例輸出 <a class="header-anchor" href="#示例輸出-1" aria-label="Permalink to “示例輸出”">​</a></h4><pre><code>Created directory &quot;/var/www/apt/db&quot;
Exporting Trusty...
Created directory &quot;/var/www/apt/dists&quot;
Created directory &quot;/var/www/apt/dists/Trusty&quot;
Created directory &quot;/var/www/apt/dists/Trusty/universe&quot;
Created directory &quot;/var/www/apt/dists/Trusty/universe/binary-i386&quot;
FF5097B479C8220C ravisaive (tecmint) &lt;tecmint.com@gmail.com&gt; needs a passphrase
Please enter passphrase:
Successfully created &#39;/var/www/apt/dists/Trusty/Release.gpg.new&#39;
FF5097B479C8220C ravisaive (tecmint) &lt;tecmint.com@gmail.com&gt; needs a passphrase
Please enter passphrase:
Successfully created &#39;/var/www/apt/dists/Trusty/InRelease.new&#39;
</code></pre><h3 id="步驟-3-在新創建的倉庫中加入包" tabindex="-1">步驟 3: 在新創建的倉庫中加入包 <a class="header-anchor" href="#步驟-3-在新創建的倉庫中加入包" aria-label="Permalink to “步驟 3: 在新創建的倉庫中加入包”">​</a></h3><p>現在準備你的<strong>.deb</strong>包來加入到倉庫中。進入 <strong>/var/www/apt</strong>目錄，你每次要加包的時候都必須這麼做。</p><pre><code># cd /var/www/apt
# reprepro --ask-passphrase -Vb . includedeb Trusty /home/ravisaive/packages.deb
</code></pre><p><strong>注意</strong>:用你在distributions文件中輸入的倉庫代號來代替<strong>trusty</strong> ，並且用包的路徑替換<strong>/home/username/package.deb</strong>，你會被要求輸入密碼。</p><h4 id="示例輸出-2" tabindex="-1">示例輸出#### <a class="header-anchor" href="#示例輸出-2" aria-label="Permalink to “示例輸出####”">​</a></h4><pre><code>/home/ravisaive/packages.deb : component guessed as &#39;universe&#39;
Created directory &quot;./pool&quot;
Created directory &quot;./pool/universe&quot;
Created directory &quot;./pool/universe/o&quot;
Created directory &quot;./pool/universe/o/ojuba-personal-lock&quot;
Exporting indices...
FF5097B479C8220C ravisaive (tecmint) &lt;tecmint.com@gmail.com&gt; needs a passphrase
Please enter passphrase:
Successfully created &#39;./dists/Trusty/Release.gpg.new&#39;
FF5097B479C8220C ravisaive (tecmint) &lt;tecmint.com@gmail.com&gt; needs a passphrase
Please enter passphrase:
Successfully created &#39;./dists/Trusty/InRelease.new&#39;
</code></pre><p>你的包已經加入了倉庫，如果要移除它的話採用如下命令：</p><pre><code># reprepro --ask-passphrase -Vb /var/www/apt remove trusty  package.deb
</code></pre><p>當然你需要用你的包名與倉庫代號來修改命令。</p><h3 id="步驟-4-上傳倉庫到sourceforge-net" tabindex="-1">步驟 4: 上傳倉庫到Sourceforge.net <a class="header-anchor" href="#步驟-4-上傳倉庫到sourceforge-net" aria-label="Permalink to “步驟 4: 上傳倉庫到Sourceforge.net”">​</a></h3>`,39)),r("p",null,[e[2]||(e[2]=t("要上傳倉庫到",-1)),e[3]||(e[3]=r("strong",null,"Sourceforge.net",-1)),e[4]||(e[4]=t("，你當然需要一個可用的賬號與一個可用的項目，讓我假設你想要上傳倉庫到**",-1)),n(o,{href:"http://sourceforge.net/projects/myfoo/testrepository**%EF%BC%8C%E9%80%99%E8%A3%8F%E7%9A%84myfoo%E6%98%AF%E9%A0%85%E7%9B%AE%E5%90%8D%EF%BC%88UNIX%E4%B8%8A%E7%9A%84%E5%90%8D%E7%A8%B1%EF%BC%8C%E4%B8%8D%E6%98%AFURL%EF%BC%8C%E4%B8%8D%E6%98%AF%E6%A8%99%E9%A1%8C%EF%BC%89%EF%BC%8Ctestrepository%E6%98%AF%E4%BD%A0%E6%83%B3%E8%A6%81%E4%B8%8A%E5%82%B3%E6%96%87%E4%BB%B6%E5%88%B0%E9%80%99%E4%B8%8A%E9%9D%A2%E7%9A%84%E7%9B%AE%E9%8C%84%EF%BC%8C%E9%80%99%E8%A3%8F%E6%88%91%E5%80%91%E6%9C%83%E4%BD%BF%E7%94%A8"},{default:s(()=>[...e[0]||(e[0]=[t("http://sourceforge.net/projects/myfoo/testrepository**，這裏的myfoo是項目名（UNIX上的名稱，不是URL，不是標題），testrepository是你想要上傳文件到這上面的目錄，這裏我們會使用",-1)])]),_:1}),n(o,{href:"http://www.tecmint.com/rsync-local-remote-file-synchronization-commands/"},{default:s(()=>[...e[1]||(e[1]=[t("rsync 命令",-1)])]),_:1}),e[5]||(e[5]=t("。（LCTT譯註：當然你也可以上傳到其它的支持Http/Rsync的服務器上，以提供遠程軟件庫的服務。）",-1))]),e[20]||(e[20]=r("pre",null,[r("code",null,`# rsync -avP -e ssh /var/www/apt/ username@frs.sourceforge.net:/home/frs/project/myfoo/testrepository/
`)],-1)),e[21]||(e[21]=r("p",null,[r("strong",null,"注意"),t("：用你在sourceforge.net上的用户名代替username，用你的項目的UNIX名稱代替myfoo，用你想要存儲的文件夾代替testrepository。")],-1)),r("p",null,[e[7]||(e[7]=t("現在你的倉庫（包括設置和key等等）上傳到了**",-1)),n(o,{href:"http://sourceforge.net/projects/myfoo/testrepository**%E3%80%82"},{default:s(()=>[...e[6]||(e[6]=[t("http://sourceforge.net/projects/myfoo/testrepository**。",-1)])]),_:1})]),e[22]||(e[22]=a(`<p>要把它加入到一個已裝好的系統，首先你需要導入倉庫key，它實際上就是<strong>/var/www/apt/key/deb.gpg.key</strong>，但是這是一個本地路徑，使用你的倉庫的其它用户不能添加到他們的系統中，這就是為什麼我們要導入來自sourceforge.net的key的原因。</p><pre><code>$ sudo su
# wget -O - http://sourceforge.net/projects/myfoo/testrepository/apt/key/deb.gpg.key | apt-key add -
</code></pre><p>你現在可以非常輕鬆地把倉庫加入到系統中了，打開<strong>/etc/apt/sources.list</strong>，並加入下面這行：</p><pre><code>deb http://sourceforge.net/projects/myfoo/testrepository/apt/key/deb.gpg.key trusty main
</code></pre><p><strong>Note</strong>：用你的項目的UNIX類型名稱代替myfoo，用你的倉庫代碼代替trusty，用你上傳存儲的文件夾代替testrepository，用你在distributionsj加入的倉庫組件代替main。</p><p>接下來，運行下面的命令來更新倉庫列表。</p><pre><code>$ sudo apt-get update
</code></pre><p><strong>祝賀你</strong>! 你的軟件倉庫已經激活了！你現在可以非常簡單地在你需要的時候安裝包了。</p><hr>`,9)),r("p",null,[e[9]||(e[9]=t("via: ",-1)),n(o,{href:"http://www.tecmint.com/create-deb-pacakge-repository-in-ubuntu/"},{default:s(()=>[...e[8]||(e[8]=[t("http://www.tecmint.com/create-deb-pacakge-repository-in-ubuntu/",-1)])]),_:1})]),r("p",null,[e[12]||(e[12]=t("譯者：",-1)),n(o,{href:"https://github.com/geekpi"},{default:s(()=>[...e[10]||(e[10]=[t("geekpi",-1)])]),_:1}),e[13]||(e[13]=t(" 校對：",-1)),n(o,{href:"https://github.com/wxy"},{default:s(()=>[...e[11]||(e[11]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[16]||(e[16]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[14]||(e[14]=[t("LCTT",-1)])]),_:1}),e[17]||(e[17]=t(" 原創翻譯，",-1)),n(o,{href:"http://linux.cn/"},{default:s(()=>[...e[15]||(e[15]=[t("Linux中國",-1)])]),_:1}),e[18]||(e[18]=t(" 榮譽推出",-1))])])}const C=i(l,[["render",g]]);export{k as __pageData,C as default};
