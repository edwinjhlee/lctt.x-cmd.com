import{_ as r,a0 as p,w as a,s as l,I as e,x as t,a1 as s,A as i,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const c=JSON.parse('{"title":"如何在CentOS/RHEL中安裝基於Web的監控系統 linux-dash | LCTT x X-CMD","titleTemplate":false,"description":"如何在CentOS/RHEL中安裝基於Web的監控系統 linux-dash | LCTT (201504) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在CentOS/RHEL中安裝基於Web的監控系統 linux-dash | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在CentOS/RHEL中安裝基於Web的監控系統 linux-dash | LCTT (201504) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201504/20150203 How To Install Linux-dash Web Based Monitoring System In CentOS or RHEL","title":"如何在CentOS/RHEL中安裝基於Web的監控系統 linux-dash","tag":"201504","desc":""},"relativePath":"201504/20150203 How To Install Linux-dash Web Based Monitoring System In CentOS or RHEL.md","filePath":"[post].md"}'),u={name:"201504/20150203 How To Install Linux-dash Web Based Monitoring System In CentOS or RHEL.md"};function g(x,n,m,h,f,w){const o=p("Link");return a(),l("div",null,[n[16]||(n[16]=e("h1",{id:"如何在centos-rhel中安裝基於web的監控系統-linux-dash",tabindex:"-1"},[t("如何在CentOS/RHEL中安裝基於Web的監控系統 linux-dash "),e("a",{class:"header-anchor",href:"#如何在centos-rhel中安裝基於web的監控系統-linux-dash","aria-label":"Permalink to “如何在CentOS/RHEL中安裝基於Web的監控系統 linux-dash”"},"​")],-1)),n[17]||(n[17]=e("p",null,[e("strong",null,"Linux-dash"),t("是一款為Linux設計的基於web的輕量級監控面板。這個程序會實時顯示各種不同的系統屬性，比如CPU負載、RAM使用率、磁盤使用率、網速、網絡連接、RX/TX帶寬、登錄用户、運行的進程等等。它不會存儲長期的統計。因為它沒有後端資料庫。")],-1)),n[18]||(n[18]=e("p",null,[t("本篇文章將會向你展示如何安裝和設置Linux dash，這裏所使用的web服務器是"),e("strong",null,"Nginx"),t(".")],-1)),n[19]||(n[19]=e("h3",{id:"安裝",tabindex:"-1"},[t("安裝 "),e("a",{class:"header-anchor",href:"#安裝","aria-label":"Permalink to “安裝”"},"​")],-1)),e("p",null,[n[1]||(n[1]=t("首先我們要啓用",-1)),s(o,{href:"http://linux.cn/article-2324-1.html"},{default:i(()=>[...n[0]||(n[0]=[t("EPEL 倉庫",-1)])]),_:1}),n[2]||(n[2]=t("。",-1))]),n[20]||(n[20]=d(`<p><strong>接下來，我們需要用下面的命令安裝nginx。</strong></p><pre><code>sudo yum install nginx
</code></pre><p><strong>安裝 php-fpm 組件</strong></p><pre><code>sudo yum install git php-common php-fpm
</code></pre><p>現在我們要在nginx中配置Linux-dash。我們如下創建 /etc/nginx/conf.d/linuxdash.conf。</p><pre><code>sudo vim /etc/nginx/conf.d/linuxdash.conf
</code></pre><hr><pre><code>server {
 server_name $domain_name;
 listen 8080;
 root /var/www;
 index index.html index.php;
 access_log /var/log/nginx/access.log;
 error_log /var/log/nginx/error.log;
 
 location ~* \\.(?:xml|ogg|mp3|mp4|ogv|svg|svgz|eot|otf|woff|ttf|css|js|jpg|jpeg|gif|png|ico)$ {
 try_files $uri =404;
 expires max;
 access_log off;
 add_header Pragma public;
 add_header Cache-Control &quot;public, must-revalidate, proxy-revalidate&quot;;
 }
 
 location /linux-dash {
 index index.html index.php;
 }
 
 # PHP-FPM via sockets
 location ~ \\.php(/|$) {
 fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
 fastcgi_split_path_info ^(.+?\\.php)(/.*)$;
 fastcgi_pass unix:/var/run/php-fpm.sock;
 if (!-f $document_root$fastcgi_script_name) {
 return 404;
 }
 try_files $uri $uri/ /index.php?$args;
 include fastcgi_params;
 }
}
</code></pre><p><strong>下一步是配置php-fpm。用編輯器打開/etc/php-fpm.d/www.conf。</strong></p><pre><code>sudo vim /etc/php-fpm.d/www.conf
</code></pre><p><strong>確保設置瞭如下的“listen”，“user”和“group”字段。你可以保留其它的配置不變。</strong></p><pre><code>. . .
listen = /var/run/php-fpm.sock
user = nginx
group = nginx
. . .
</code></pre><p><strong>現在，我們要在/var/www中下載並安裝linux-dash。</strong></p><pre><code>git clone https://github.com/afaqurk/linux-dash.git
sudo cp -r linux-dash/ /var/www/
sudo chown -R nginx:nginx /var/www
</code></pre><p><strong>接下來，重啓 Nginx和php-fpm。</strong></p><pre><code>sudo service nginx restart
sudo service php-fpm restart
</code></pre><p><strong>設置nginx和php-fpm開機自動啓動。</strong></p><pre><code>sudo chkconfig nginx on
sudo chkconfig php-fpm on
</code></pre><p>在本例中，我們使用TCP端口8080配置linux-dash。因此需確保防火牆沒有阻止8080 TCP端口。</p><h3 id="用linux-dash監控linux服務器" tabindex="-1">用linux-dash監控Linux服務器 <a class="header-anchor" href="#用linux-dash監控linux服務器" aria-label="Permalink to “用linux-dash監控Linux服務器”">​</a></h3><p>你現在可以在瀏覽器中輸入<strong>http://&lt;IP地址&gt;:8080/linux-dash/</strong>來訪問Linux-dash。</p><p>web面板包含了不同的組件，每個都顯示獨特的系統屬性。你可以自定義web面板的外觀也可以關閉一些組件。</p><p><img src="http://1102047360.rsc.cdn77.org/wp-content/uploads/2015/01/Lin-dash.png" alt=""></p><p>美好的一天！</p><p>下篇文章中再見。</p><hr>`,26)),e("p",null,[n[4]||(n[4]=t("via: ",-1)),s(o,{href:"http://www.unixmen.com/install-linux-dash-web-based-monitoring-system-centosrhel/"},{default:i(()=>[...n[3]||(n[3]=[t("http://www.unixmen.com/install-linux-dash-web-based-monitoring-system-centosrhel/",-1)])]),_:1})]),e("p",null,[n[8]||(n[8]=t("作者：",-1)),s(o,{href:"http://www.unixmen.com/author/jijo/"},{default:i(()=>[...n[5]||(n[5]=[t("Jijo",-1)])]),_:1}),n[9]||(n[9]=t(" 譯者：",-1)),s(o,{href:"https://github.com/geekpi"},{default:i(()=>[...n[6]||(n[6]=[t("geekpi",-1)])]),_:1}),n[10]||(n[10]=t(" 校對：",-1)),s(o,{href:"https://github.com/wxy"},{default:i(()=>[...n[7]||(n[7]=[t("wxy",-1)])]),_:1})]),e("p",null,[n[13]||(n[13]=t("本文由 ",-1)),s(o,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[11]||(n[11]=[t("LCTT",-1)])]),_:1}),n[14]||(n[14]=t(" 原創翻譯，",-1)),s(o,{href:"http://linux.cn/"},{default:i(()=>[...n[12]||(n[12]=[t("Linux中國",-1)])]),_:1}),n[15]||(n[15]=t(" 榮譽推出",-1))])])}const C=r(u,[["render",g]]);export{c as __pageData,C as default};
