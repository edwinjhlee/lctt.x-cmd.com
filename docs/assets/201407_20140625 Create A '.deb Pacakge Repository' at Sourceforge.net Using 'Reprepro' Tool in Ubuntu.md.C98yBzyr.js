import{_ as i,a0 as p,w as d,s as u,ao as a,I as r,x as t,a1 as n,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse(`{"title":"在Ubuntu下如何创建远程 .deb 包仓库 | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu下如何创建远程 .deb 包仓库 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu下如何创建远程 .deb 包仓库 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu下如何创建远程 .deb 包仓库 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140625 Create A '.deb Pacakge Repository' at Sourceforge.net Using 'Reprepro' Tool in Ubuntu","title":"在Ubuntu下如何创建远程 .deb 包仓库","tag":"201407","desc":""},"relativePath":"201407/20140625 Create A '.deb Pacakge Repository' at Sourceforge.net Using 'Reprepro' Tool in Ubuntu.md","filePath":"[post].md"}`),l={name:"201407/20140625 Create A '.deb Pacakge Repository' at Sourceforge.net Using 'Reprepro' Tool in Ubuntu.md"};function g(m,e,c,y,b,f){const o=p("Link");return d(),u("div",null,[e[19]||(e[19]=a(`<h1 id="在ubuntu下如何创建远程-deb-包仓库" tabindex="-1">在Ubuntu下如何创建远程&quot;.deb&quot;包仓库 <a class="header-anchor" href="#在ubuntu下如何创建远程-deb-包仓库" aria-label="Permalink to “在Ubuntu下如何创建远程.deb包仓库”">​</a></h1><p><strong>Reprepro</strong>是一款小巧的命令行工具来方便地创建并管理<strong>.deb</strong>仓库。今天我们会展示给你如何使用reprepro简单地创建一个Debian包仓库，并使用<strong>rsync</strong>上传到Sourceforge.net。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/06/Create-Debian-Package-Repository1.png" alt="Create Deb Package Repository"></p><h3 id="步骤-1-安装reprepro并生成key" tabindex="-1">步骤 1: 安装Reprepro并生成key <a class="header-anchor" href="#步骤-1-安装reprepro并生成key" aria-label="Permalink to “步骤 1: 安装Reprepro并生成key”">​</a></h3><p>首先，安装所有需要的包，使用下面的apt-get命令。</p><pre><code>$ sudo apt-get install reprepro gnupg
</code></pre><p>现在你需要使用gnupg生成一个gpg key，这里使用下面的命令。</p><pre><code>$ gpg --gen-key
</code></pre><p>它会询问你一些问题，比如你想要哪种key、key的有效期、如果你不知道如何回答，只需点击<strong>回车</strong> 来选择默认选项（建议）</p><p>当然，它会询问你用户名和密码，在脑海中记住这些，因为我们会在之后需要它。</p><pre><code>gpg (GnuPG) 1.4.14; Copyright (C) 2013 Free Software Foundation, Inc.
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
</code></pre><p>现在你的key已经生成了，要检查一下，用root权限运行这条命令。</p><pre><code>$ sudo gpg --list-keys
</code></pre><h4 id="示例输出" tabindex="-1">示例输出 <a class="header-anchor" href="#示例输出" aria-label="Permalink to “示例输出”">​</a></h4><pre><code>/home/ravisaive/.gnupg/pubring.gpg
----------------------------------
pub   2048R/2EB446DD 2014-06-24
uid                  ravisaive (tecmint) &lt;tecmint.com@gmail.com&gt;
sub   2048R/7EF2F750 2014-06-24
</code></pre><h3 id="步骤-2-创建一个包仓库并导出key" tabindex="-1">步骤 2: 创建一个包仓库并导出key <a class="header-anchor" href="#步骤-2-创建一个包仓库并导出key" aria-label="Permalink to “步骤 2: 创建一个包仓库并导出key”">​</a></h3><p>我们现在要开始创建仓库，首先你需要创建一些文件夹，我们的仓库会放在<strong>/var/www/apt</strong>目录，让我们先创建这些目录。</p><pre><code>$ sudo su
# cd /var/www
# mkdir apt
# mkdir -p ./apt/incoming 
# mkdir -p ./apt/conf
# mkdir -p ./apt/key
</code></pre><p>你现在需要将key导出到仓库文件夹，运行：</p><pre><code># gpg --armor --export username yourmail@mail.com &gt;&gt; /var/www/apt/key/deb.gpg.key
</code></pre><p>注意：用你之前步骤中输入的用户名代替username，用你的email代替上面的yourmail@mail.com。</p><p>我们需要在<strong>/var/www/apt/conf</strong>创建一个文件“<strong>distributions</strong>”。</p><pre><code># touch /var/www/apt/conf/distributions
</code></pre><p>加入下面这几行到distributions这个文件中并保存。</p><pre><code>Origin: (你的名字)
Label: (库的名字)
Suite: (stable 或 unstable)
Codename: (发布的代码名，比如  trusty)
Version: (发布的版本，比如 14.04)
Architectures: (软件包所支持的架构， 比如 i386 或 amd64)
Components: (包含的部件，比如 main restricted universe multiverse)
Description: (描述)
SignWith: yes
</code></pre><p>接下来我们会创建仓库树，运行这些命令：</p><pre><code># reprepro --ask-passphrase -Vb /var/www/apt export
</code></pre><h4 id="示例输出-1" tabindex="-1">示例输出 <a class="header-anchor" href="#示例输出-1" aria-label="Permalink to “示例输出”">​</a></h4><pre><code>Created directory &quot;/var/www/apt/db&quot;
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
</code></pre><h3 id="步骤-3-在新创建的仓库中加入包" tabindex="-1">步骤 3: 在新创建的仓库中加入包 <a class="header-anchor" href="#步骤-3-在新创建的仓库中加入包" aria-label="Permalink to “步骤 3: 在新创建的仓库中加入包”">​</a></h3><p>现在准备你的<strong>.deb</strong>包来加入到仓库中。进入 <strong>/var/www/apt</strong>目录，你每次要加包的时候都必须这么做。</p><pre><code># cd /var/www/apt
# reprepro --ask-passphrase -Vb . includedeb Trusty /home/ravisaive/packages.deb
</code></pre><p><strong>注意</strong>:用你在distributions文件中输入的仓库代号来代替<strong>trusty</strong> ，并且用包的路径替换<strong>/home/username/package.deb</strong>，你会被要求输入密码。</p><h4 id="示例输出-2" tabindex="-1">示例输出#### <a class="header-anchor" href="#示例输出-2" aria-label="Permalink to “示例输出####”">​</a></h4><pre><code>/home/ravisaive/packages.deb : component guessed as &#39;universe&#39;
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
</code></pre><p>你的包已经加入了仓库，如果要移除它的话采用如下命令：</p><pre><code># reprepro --ask-passphrase -Vb /var/www/apt remove trusty  package.deb
</code></pre><p>当然你需要用你的包名与仓库代号来修改命令。</p><h3 id="步骤-4-上传仓库到sourceforge-net" tabindex="-1">步骤 4: 上传仓库到Sourceforge.net <a class="header-anchor" href="#步骤-4-上传仓库到sourceforge-net" aria-label="Permalink to “步骤 4: 上传仓库到Sourceforge.net”">​</a></h3>`,39)),r("p",null,[e[2]||(e[2]=t("要上传仓库到",-1)),e[3]||(e[3]=r("strong",null,"Sourceforge.net",-1)),e[4]||(e[4]=t("，你当然需要一个可用的账号与一个可用的项目，让我假设你想要上传仓库到**",-1)),n(o,{href:"http://sourceforge.net/projects/myfoo/testrepository**%EF%BC%8C%E8%BF%99%E9%87%8C%E7%9A%84myfoo%E6%98%AF%E9%A1%B9%E7%9B%AE%E5%90%8D%EF%BC%88UNIX%E4%B8%8A%E7%9A%84%E5%90%8D%E7%A7%B0%EF%BC%8C%E4%B8%8D%E6%98%AFURL%EF%BC%8C%E4%B8%8D%E6%98%AF%E6%A0%87%E9%A2%98%EF%BC%89%EF%BC%8Ctestrepository%E6%98%AF%E4%BD%A0%E6%83%B3%E8%A6%81%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E5%88%B0%E8%BF%99%E4%B8%8A%E9%9D%A2%E7%9A%84%E7%9B%AE%E5%BD%95%EF%BC%8C%E8%BF%99%E9%87%8C%E6%88%91%E4%BB%AC%E4%BC%9A%E4%BD%BF%E7%94%A8"},{default:s(()=>[...e[0]||(e[0]=[t("http://sourceforge.net/projects/myfoo/testrepository**，这里的myfoo是项目名（UNIX上的名称，不是URL，不是标题），testrepository是你想要上传文件到这上面的目录，这里我们会使用",-1)])]),_:1}),n(o,{href:"http://www.tecmint.com/rsync-local-remote-file-synchronization-commands/"},{default:s(()=>[...e[1]||(e[1]=[t("rsync 命令",-1)])]),_:1}),e[5]||(e[5]=t("。（LCTT译注：当然你也可以上传到其它的支持Http/Rsync的服务器上，以提供远程软件库的服务。）",-1))]),e[20]||(e[20]=r("pre",null,[r("code",null,`# rsync -avP -e ssh /var/www/apt/ username@frs.sourceforge.net:/home/frs/project/myfoo/testrepository/
`)],-1)),e[21]||(e[21]=r("p",null,[r("strong",null,"注意"),t("：用你在sourceforge.net上的用户名代替username，用你的项目的UNIX名称代替myfoo，用你想要存储的文件夹代替testrepository。")],-1)),r("p",null,[e[7]||(e[7]=t("现在你的仓库（包括设置和key等等）上传到了**",-1)),n(o,{href:"http://sourceforge.net/projects/myfoo/testrepository**%E3%80%82"},{default:s(()=>[...e[6]||(e[6]=[t("http://sourceforge.net/projects/myfoo/testrepository**。",-1)])]),_:1})]),e[22]||(e[22]=a(`<p>要把它加入到一个已装好的系统，首先你需要导入仓库key，它实际上就是<strong>/var/www/apt/key/deb.gpg.key</strong>，但是这是一个本地路径，使用你的仓库的其它用户不能添加到他们的系统中，这就是为什么我们要导入来自sourceforge.net的key的原因。</p><pre><code>$ sudo su
# wget -O - http://sourceforge.net/projects/myfoo/testrepository/apt/key/deb.gpg.key | apt-key add -
</code></pre><p>你现在可以非常轻松地把仓库加入到系统中了，打开<strong>/etc/apt/sources.list</strong>，并加入下面这行：</p><pre><code>deb http://sourceforge.net/projects/myfoo/testrepository/apt/key/deb.gpg.key trusty main
</code></pre><p><strong>Note</strong>：用你的项目的UNIX类型名称代替myfoo，用你的仓库代码代替trusty，用你上传存储的文件夹代替testrepository，用你在distributionsj加入的仓库组件代替main。</p><p>接下来，运行下面的命令来更新仓库列表。</p><pre><code>$ sudo apt-get update
</code></pre><p><strong>祝贺你</strong>! 你的软件仓库已经激活了！你现在可以非常简单地在你需要的时候安装包了。</p><hr>`,9)),r("p",null,[e[9]||(e[9]=t("via: ",-1)),n(o,{href:"http://www.tecmint.com/create-deb-pacakge-repository-in-ubuntu/"},{default:s(()=>[...e[8]||(e[8]=[t("http://www.tecmint.com/create-deb-pacakge-repository-in-ubuntu/",-1)])]),_:1})]),r("p",null,[e[12]||(e[12]=t("译者：",-1)),n(o,{href:"https://github.com/geekpi"},{default:s(()=>[...e[10]||(e[10]=[t("geekpi",-1)])]),_:1}),e[13]||(e[13]=t(" 校对：",-1)),n(o,{href:"https://github.com/wxy"},{default:s(()=>[...e[11]||(e[11]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[16]||(e[16]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[14]||(e[14]=[t("LCTT",-1)])]),_:1}),e[17]||(e[17]=t(" 原创翻译，",-1)),n(o,{href:"http://linux.cn/"},{default:s(()=>[...e[15]||(e[15]=[t("Linux中国",-1)])]),_:1}),e[18]||(e[18]=t(" 荣誉推出",-1))])])}const C=i(l,[["render",g]]);export{k as __pageData,C as default};
