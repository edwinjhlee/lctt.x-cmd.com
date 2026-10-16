import{_ as u,a0 as r,w as a,s as i,ao as s,I as l,x as t,a1 as d,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"Ubuntu下使用CloudFlare 動態域名 | LCTT x X-CMD","titleTemplate":false,"description":"Ubuntu下使用CloudFlare 動態域名 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Ubuntu下使用CloudFlare 動態域名 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Ubuntu下使用CloudFlare 動態域名 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140924 How to use CloudFlare as a ddclient provider under Ubuntu","title":"Ubuntu下使用CloudFlare 動態域名","tag":"201410","desc":""},"relativePath":"201410/20140924 How to use CloudFlare as a ddclient provider under Ubuntu.md","filePath":"[post].md"}'),p={name:"201410/20140924 How to use CloudFlare as a ddclient provider under Ubuntu.md"};function b(m,e,f,C,c,w){const n=r("Link");return a(),i("div",null,[e[16]||(e[16]=s(`<h1 id="ubuntu下使用cloudflare-動態域名" tabindex="-1">Ubuntu下使用CloudFlare 動態域名 <a class="header-anchor" href="#ubuntu下使用cloudflare-動態域名" aria-label="Permalink to “Ubuntu下使用CloudFlare 動態域名”">​</a></h1><h3 id="需求" tabindex="-1">需求 <a class="header-anchor" href="#需求" aria-label="Permalink to “需求”">​</a></h3><p>首先保證你有一個自有域名，然後登錄到CloudFlare，添加你的域名。遵循指令操作，使用它給出的默認值就行了。你將讓CloudFlare來託管你的域，所以你需要調整你的註冊機構的設置。如果你想要使用子域名，請為它添加一條‘A’記錄。目前，任何IP地址都可以。</p><p>DDclient是一個Perl客户端，用於更新動態DNS網絡服務提供商帳號下的動態DNS條目。它最初是由保羅·巴利編寫的，現在大多數是由維姆潘科在做。它能做的不僅僅是動態DNS，也可以通過幾種不同的方式獲取你的WAN口IP地址。</p><p>CloudFlare 的一個功能是它允許你通過API或叫做ddclient的命令列腳本更新你的DNS記錄。不管哪一個，結果都一樣，而且它是個免費軟件。</p><p>不幸的是，ddclient並不能在CloudFlare中即開即用。它需要打補丁，這裏就是要介紹怎樣在Debian或Ubuntu上破解它，它也能在帶有Raspberry Pi的Raspbian上工作。</p><h3 id="在ubuntu上安裝ddclient" tabindex="-1">在Ubuntu上安裝ddclient <a class="header-anchor" href="#在ubuntu上安裝ddclient" aria-label="Permalink to “在Ubuntu上安裝ddclient”">​</a></h3><p>打開終端，並運行以下命令</p><pre><code>sudo apt-get install ddclient
</code></pre><p>現在，你需要使用以下命令來安裝補丁</p><pre><code>sudo apt-get install curl sendmail libjson-any-perl libio-socket-ssl-perl

curl -O http://blog.peter-r.co.uk/uploads/ddclient-3.8.0-cloudflare-22-6-2014.patch

sudo patch /usr/sbin/ddclient &lt; ddclient-3.8.0-cloudflare-22-6-2014.patch
</code></pre><p>以上命令用來完成ddclient的安裝和打補丁</p><h3 id="配置ddclient" tabindex="-1">配置ddclient <a class="header-anchor" href="#配置ddclient" aria-label="Permalink to “配置ddclient”">​</a></h3><p>你需要使用以下命令來編輯ddclient.conf文件</p><pre><code>sudo vi /etc/ddclient.conf
</code></pre><p>添加以下信息</p><pre><code>##
### CloudFlare (cloudflare.com)
###
ssl=yes
use=web, web=dyndns
protocol=cloudflare, \\
server=www.cloudflare.com, \\
zone=domain.com, \\
login=you@email.com, \\
password=api-key \\
host.domain.com

Comment out:

#daemon=300
</code></pre><p>你的 api-key 可以從 CloudFlare帳號頁面找到，ssl=yes 可能已經設置，use=web, web=dyndns 表示使用 dyndns 來確定 IP（用於 NAT）。</p>`,18)),l("p",null,[e[2]||(e[2]=t("你已經搞定了。登錄到 ",-1)),d(n,{href:"https://www.cloudflare.com"},{default:o(()=>[...e[0]||(e[0]=[t("https://www.cloudflare.com",-1)])]),_:1}),e[3]||(e[3]=t(" 並檢查列出的與你域名對應的IP地址是否與 ",-1)),d(n,{href:"http://checkip.dyndns.com"},{default:o(()=>[...e[1]||(e[1]=[t("http://checkip.dyndns.com",-1)])]),_:1}),e[4]||(e[4]=t(" 列出的相匹配。",-1))]),e[17]||(e[17]=l("p",null,"使用以下命令來驗證你的設置：",-1)),e[18]||(e[18]=l("pre",null,[l("code",null,`sudo ddclient -daemon=0 -debug -verbose -noquiet
`)],-1)),e[19]||(e[19]=l("hr",null,null,-1)),l("p",null,[e[6]||(e[6]=t("via: ",-1)),d(n,{href:"http://www.ubuntugeek.com/how-to-use-cloudflare-as-a-ddclient-provider-under-ubuntu.html"},{default:o(()=>[...e[5]||(e[5]=[t("http://www.ubuntugeek.com/how-to-use-cloudflare-as-a-ddclient-provider-under-ubuntu.html",-1)])]),_:1})]),l("p",null,[e[9]||(e[9]=t("譯者：",-1)),d(n,{href:"https://github.com/GOLinux"},{default:o(()=>[...e[7]||(e[7]=[t("GOLinux",-1)])]),_:1}),e[10]||(e[10]=t(" 校對：",-1)),d(n,{href:"https://github.com/wxy"},{default:o(()=>[...e[8]||(e[8]=[t("wxy",-1)])]),_:1})]),l("p",null,[e[13]||(e[13]=t("本文由 ",-1)),d(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[11]||(e[11]=[t("LCTT",-1)])]),_:1}),e[14]||(e[14]=t(" 原創翻譯，",-1)),d(n,{href:"http://linux.cn/"},{default:o(()=>[...e[12]||(e[12]=[t("Linux中國",-1)])]),_:1}),e[15]||(e[15]=t(" 榮譽推出",-1))])])}const F=u(p,[["render",b]]);export{h as __pageData,F as default};
