import{_ as i,a0 as p,w as l,s,I as n,x as e,a1 as r,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"如何在 CentOS 6/7 上移除被 Fail2ban 禁止的 IP | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 6/7 上移除被 Fail2ban 禁止的 IP | LCTT (201512) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 6/7 上移除被 Fail2ban 禁止的 IP | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 6/7 上移除被 Fail2ban 禁止的 IP | LCTT (201512) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201512/20151204 How to Remove Banned IP from Fail2ban on CentOS 6 or CentOS 7","title":"如何在 CentOS 6/7 上移除被 Fail2ban 禁止的 IP","tag":"201512","desc":""},"relativePath":"201512/20151204 How to Remove Banned IP from Fail2ban on CentOS 6 or CentOS 7.md","filePath":"[post].md"}'),w={name:"201512/20151204 How to Remove Banned IP from Fail2ban on CentOS 6 or CentOS 7.md"};function h(f,t,d,C,b,u){const a=p("Link");return l(),s("div",null,[t[15]||(t[15]=n("h1",{id:"如何在-centos-6-7-上移除被-fail2ban-禁止的-ip",tabindex:"-1"},[e("如何在 CentOS 6/7 上移除被 Fail2ban 禁止的 IP "),n("a",{class:"header-anchor",href:"#如何在-centos-6-7-上移除被-fail2ban-禁止的-ip","aria-label":"Permalink to “如何在 CentOS 6/7 上移除被 Fail2ban 禁止的 IP”"},"​")],-1)),t[16]||(t[16]=n("p",null,[n("img",{src:"http://www.ehowstuff.com/wp-content/uploads/2015/12/security-265130_1280.jpg",alt:""})],-1)),n("p",null,[r(a,{href:"http://www.fail2ban.org/wiki/index.php/Main_Page"},{default:o(()=>[...t[0]||(t[0]=[e("fail2ban",-1)])]),_:1}),t[1]||(t[1]=e(" 是一款用于保护你的服务器免于暴力攻击的入侵保护软件。fail2ban 用 python 写成，并广泛用于很多服务器上。fail2ban 会扫描日志文件和 IP 黑名单来显示恶意软件、过多的密码失败尝试、web 服务器利用、wordpress 插件攻击和其他漏洞。如果你已经安装并使用了 fail2ban 来保护你的 web 服务器，你也许会想知道如何在 CentOS 6、CentOS 7、RHEL 6、RHEL 7 和 Oracle Linux 6/7 中找到被 fail2ban 阻止的 IP，或者你想将 ip 从 fail2ban 监狱中移除。",-1))]),t[17]||(t[17]=n("h3",{id:"如何列出被禁止的-ip",tabindex:"-1"},[e("如何列出被禁止的 IP "),n("a",{class:"header-anchor",href:"#如何列出被禁止的-ip","aria-label":"Permalink to “如何列出被禁止的 IP”"},"​")],-1)),t[18]||(t[18]=n("p",null,"要查看所有被禁止的 ip 地址，运行下面的命令：",-1)),t[19]||(t[19]=n("pre",null,[n("code",null,`# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
f2b-AccessForbidden  tcp  --  anywhere             anywhere            tcp dpt:http
f2b-WPLogin  tcp  --  anywhere             anywhere            tcp dpt:http
f2b-ConnLimit  tcp  --  anywhere             anywhere            tcp dpt:http
f2b-ReqLimit  tcp  --  anywhere             anywhere            tcp dpt:http
f2b-NoAuthFailures  tcp  --  anywhere             anywhere            tcp dpt:http
f2b-SSH    tcp  --  anywhere             anywhere            tcp dpt:ssh
f2b-php-url-open  tcp  --  anywhere             anywhere            tcp dpt:http
f2b-nginx-http-auth  tcp  --  anywhere             anywhere            multiport dports http,https
ACCEPT     all  --  anywhere             anywhere            state RELATED,ESTABLISHED
ACCEPT     icmp --  anywhere             anywhere
ACCEPT     all  --  anywhere             anywhere
ACCEPT     tcp  --  anywhere             anywhere            tcp dpt:EtherNet/IP-1
ACCEPT     tcp  --  anywhere             anywhere            tcp dpt:http
REJECT     all  --  anywhere             anywhere            reject-with icmp-host-prohibited

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination
REJECT     all  --  anywhere             anywhere            reject-with icmp-host-prohibited

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination


Chain f2b-NoAuthFailures (1 references)
target     prot opt source               destination
REJECT     all  --  64.68.50.128         anywhere            reject-with icmp-port-unreachable
REJECT     all  --  104.194.26.205       anywhere            reject-with icmp-port-unreachable
RETURN     all  --  anywhere             anywhere
`)],-1)),t[20]||(t[20]=n("h3",{id:"如何从-fail2ban-中移除-ip",tabindex:"-1"},[e("如何从 Fail2ban 中移除 IP "),n("a",{class:"header-anchor",href:"#如何从-fail2ban-中移除-ip","aria-label":"Permalink to “如何从 Fail2ban 中移除 IP”"},"​")],-1)),t[21]||(t[21]=n("pre",null,[n("code",null,`# iptables -D f2b-NoAuthFailures -s banned_ip -j REJECT
`)],-1)),t[22]||(t[22]=n("p",null,"我希望这篇教程可以给你在 CentOS 6、CentOS 7、RHEL 6、RHEL 7 和 Oracle Linux 6/7 中移除被禁止的 ip 一些指导。",-1)),t[23]||(t[23]=n("hr",null,null,-1)),n("p",null,[t[3]||(t[3]=e("via: ",-1)),r(a,{href:"http://www.ehowstuff.com/how-to-remove-banned-ip-from-fail2ban-on-centos/"},{default:o(()=>[...t[2]||(t[2]=[e("http://www.ehowstuff.com/how-to-remove-banned-ip-from-fail2ban-on-centos/",-1)])]),_:1})]),n("p",null,[t[7]||(t[7]=e("作者：",-1)),r(a,{href:"http://www.ehowstuff.com/author/skytech/"},{default:o(()=>[...t[4]||(t[4]=[e("skytech",-1)])]),_:1}),t[8]||(t[8]=e(" 译者：",-1)),r(a,{href:"https://github.com/geekpi"},{default:o(()=>[...t[5]||(t[5]=[e("geekpi",-1)])]),_:1}),t[9]||(t[9]=e(" 校对：",-1)),r(a,{href:"https://github.com/wxy"},{default:o(()=>[...t[6]||(t[6]=[e("wxy",-1)])]),_:1})]),n("p",null,[t[12]||(t[12]=e("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[10]||(t[10]=[e("LCTT",-1)])]),_:1}),t[13]||(t[13]=e(" 原创编译，",-1)),r(a,{href:"https://linux.cn/"},{default:o(()=>[...t[11]||(t[11]=[e("Linux中国",-1)])]),_:1}),t[14]||(t[14]=e(" 荣誉推出",-1))])])}const T=i(w,[["render",h]]);export{P as __pageData,T as default};
