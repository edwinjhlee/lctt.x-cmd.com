import{_ as r,a0 as i,w as d,s as m,ao as p,I as a,x as e,a1 as t,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"如何在Linux中顯示和設置主機名 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux中顯示和設置主機名 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux中顯示和設置主機名 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux中顯示和設置主機名 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/How To Display And Set Hostname in Linux","title":"如何在Linux中顯示和設置主機名","tag":"201312","desc":""},"relativePath":"201312/How To Display And Set Hostname in Linux.md","filePath":"[post].md"}'),h={name:"201312/How To Display And Set Hostname in Linux.md"};function l(c,n,g,u,x,v){const o=i("Link");return d(),m("div",null,[n[11]||(n[11]=p(`<h1 id="如何在linux中顯示和設置主機名" tabindex="-1">如何在Linux中顯示和設置主機名 <a class="header-anchor" href="#如何在linux中顯示和設置主機名" aria-label="Permalink to “如何在Linux中顯示和設置主機名”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/11/hostname-command-linux.jpg" alt=""></p><p>隨着連接到網絡的計算機數量越來越多，每一台計算機都需要有一個屬性來區別於其它計算機。和現實世界中的人一樣，計算機也有一個叫做hostname（主機名）的屬性。</p><h3 id="什麼是hostname" tabindex="-1">什麼是hostname <a class="header-anchor" href="#什麼是hostname" aria-label="Permalink to “什麼是hostname”">​</a></h3><p>從它的操作手冊來看，hostname是用來顯示系統的DNS名字以及為了顯示和設置它的主機名或者NIS域名名字。所以hostname依賴於DNS（Domain Name System域名系統）或者NIS（Network Information System網絡信息系統）。</p><h3 id="怎麼顯示hostname" tabindex="-1">怎麼顯示hostname <a class="header-anchor" href="#怎麼顯示hostname" aria-label="Permalink to “怎麼顯示hostname”">​</a></h3><p>hostname是為每一個linux發行版的預安裝命令。通過在控制台輸入hostname，可以顯示你的機器的hostname。這裏有一個有個簡單的命令及其輸出。</p><pre><code>$ hostname
ubuntu
</code></pre><p>上面的命令將會告訴你，計算機的名字是<strong>ubuntu</strong> 。</p><h3 id="如何設置hostname" tabindex="-1">如何設置hostname <a class="header-anchor" href="#如何設置hostname" aria-label="Permalink to “如何設置hostname”">​</a></h3><p>Hostname是在你第一次安裝Linux的時候設置。其中有一個步驟Linux會讓你輸入主機名稱的信息。不過，如果你願意的話，你在之後設置也可以。</p><p>設置你的hostname，你可以使用下面的命令：</p><pre><code># hostname dev-machine

$ hostname
dev-machine
</code></pre><p>你<strong>需要使用root權限</strong>，或者等同root的權限來設置/修改你計算機的主機名。“#”標識證明你是root用户。上述命令把你的計算機主機名設置成為<strong>dev-machine</strong>。如果你沒有收到任何報錯信息，那麼你的hostname已經改變了。再一次使用hostname命令檢查，看看結果。</p><p>使用hostname命令設置你的hostname <strong>不是永久的</strong> 。當你重啓你的計算機，你的設定將會失效。 <strong>為了永久改變</strong> ，你必須手動修改hostname配置文件。</p><p><strong>Debian / Ubuntu系的Linux</strong></p><p>你可以在 <strong>/etc/hostname</strong> 和 <strong>/etc/hosts</strong> 文件夾中找到這個文件</p><p>下面是每一個文件的內容</p><p><strong>/etc/hostname</strong></p><pre><code># vi /etc/hostname
dev-machine
</code></pre><p><strong>/etc/hosts</strong></p><pre><code># vi /etc/hosts
127.0.0.1 localhost
127.0.0.1 dev-machine
</code></pre><p>你將會發現不用重啓你的linux它就即刻生效。</p><p><strong>RedHat / CentOS系的Linux</strong></p><p>你可以在 <strong>/etc/hosts</strong> 和 <strong>/etc/sysconfig/networks</strong> 文件夾中找到這個文件。</p><p>下面是每一個文件的內容</p><p><strong>/etc/hosts</strong></p><pre><code>127.0.0.1 localhost.localdomain localhost dev-machine
::localhost 127.0.0.1
</code></pre><p><strong>/etc/sysconfig/network</strong></p><pre><code>NETWORKING=yes
NETWORKING_IPV6=no
HOSTNAME=dev-machine
</code></pre><h3 id="怎麼顯示dns域名" tabindex="-1">怎麼顯示DNS域名 <a class="header-anchor" href="#怎麼顯示dns域名" aria-label="Permalink to “怎麼顯示DNS域名”">​</a></h3><p>來自上面的hostname的定義，hostname也可以顯示你的Linux的DNS名字。如果你的hostname命令會顯示你的hostname，那麼dnsdomainname命令也就會顯示你的域名。來看看這個簡單的例子。</p><pre><code>$ dnsdomainname
bris.co.id
</code></pre><p>在本篇文章，dnsdomainname命令的結果是 <strong>bris.co.id</strong>。</p><p>如果你看見結果是 (<strong>none</strong>)，那麼你的機器<strong>沒有配置FQDN（Fully Qualified Domain Name 完全符合標準的域名）</strong> 。dnsdomainname命令摘取來自<strong>/etc/hosts</strong>文件的信息。你應該配置它為FQDN格式。下面是一個簡單的例子：</p><p><strong>/etc/hosts</strong></p><pre><code>127.0.0.1 localhost.localdomain localhost dev-machine
::localhost 127.0.0.1
192.168.0.104 dev-machine.bris.co.id dev-machine
</code></pre><p>為了顯示更多的細節，你可以使用參數<strong>-v</strong></p><pre><code>$ dnsdomainname -v
gethostname()=’dev-machine.bris.co.id’
Resolving ‘dev-machine.bris.co.id’ …
Result: h_name=’dev-machine.bris.co.id’
Result: h_aliases=’dev-machine’
Result: h_addr_list=’192.168.0.104’
</code></pre><h3 id="如何顯示hostname的更多細節信息" tabindex="-1">如何顯示hostname的更多細節信息### <a class="header-anchor" href="#如何顯示hostname的更多細節信息" aria-label="Permalink to “如何顯示hostname的更多細節信息###”">​</a></h3><p>Hostname命令可以使用多個參數和一些別名，比如dnsdomainname命令就是它的一個別名。這些參數在每日操作中是有用的。下面這些命令的結果是基於<strong>/etc/hosts</strong>的上述配置。</p><p><strong>顯示IP地址</strong></p><pre><code>$ hostname -i
192.168.0.104
</code></pre><p><strong>顯示域名</strong></p><pre><code>$ hostname -d
bris.co.id
</code></pre><p><strong>顯示短主機名</strong> $ hostname -s dev-machine</p><p><em>這個命令將會產生與只輸入hostname同樣的結果</em></p><p><strong>顯示FQDN格式</strong></p><pre><code>$ hostname -f
dev-machine.bris.co.id
</code></pre><p><strong>顯示細節信息</strong></p><p>所有的參數包括上述信息，都可以通過使用參數<strong>-v</strong> 和 <strong>-d</strong> 來概括。讓我們來看一個例子。</p><pre><code>$ hostname -v -d
gethostname()=’dev-machine.bris.co.id’
Resolving ‘dev-machine.bris.co.id’ …
 Result: h_name=’dev-machine.bris.co.id’
Result: h_aliases=’dev-machine’
Result: h_addr_list=’192.168.0.104’ 
bris.co.id
</code></pre><p>覺得熟悉嗎？沒錯，運行結果與上面提到的 <strong>dnsdomainname -v</strong> 命令式相同的。</p><hr>`,54)),a("p",null,[n[1]||(n[1]=e("via: ",-1)),t(o,{href:"http://linoxide.com/linux-command/display-set-hostname-linux/"},{default:s(()=>[...n[0]||(n[0]=[e("http://linoxide.com/linux-command/display-set-hostname-linux/",-1)])]),_:1})]),a("p",null,[n[4]||(n[4]=e("譯者：",-1)),t(o,{href:"http://blog.csdn.net/Vic___"},{default:s(()=>[...n[2]||(n[2]=[e("Vic___",-1)])]),_:1}),n[5]||(n[5]=e(" 校對：",-1)),t(o,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...n[3]||(n[3]=[e("Caroline",-1)])]),_:1})]),a("p",null,[n[8]||(n[8]=e("本文由 ",-1)),t(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...n[6]||(n[6]=[e("LCTT",-1)])]),_:1}),n[9]||(n[9]=e(" 原創翻譯，",-1)),t(o,{href:"http://linux.cn/"},{default:s(()=>[...n[7]||(n[7]=[e("Linux中國",-1)])]),_:1}),n[10]||(n[10]=e(" 榮譽推出",-1))])])}const _=r(h,[["render",l]]);export{T as __pageData,_ as default};
