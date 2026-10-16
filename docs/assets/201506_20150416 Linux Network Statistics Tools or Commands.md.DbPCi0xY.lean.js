import{_ as i,a0 as p,w as c,s as d,ao as a,I as n,x as t,a1 as r,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const D=JSON.parse('{"title":"Linux网络统计工具/命令 | LCTT x X-CMD","titleTemplate":false,"description":"Linux网络统计工具/命令 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux网络统计工具/命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux网络统计工具/命令 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150416 Linux Network Statistics Tools or Commands","title":"Linux网络统计工具/命令","tag":"201506","desc":""},"relativePath":"201506/20150416 Linux Network Statistics Tools or Commands.md","filePath":"[post].md"}'),l={name:"201506/20150416 Linux Network Statistics Tools or Commands.md"};function T(u,e,f,C,m,k){const s=p("Link");return c(),d("div",null,[e[22]||(e[22]=a("",14)),n("p",null,[e[1]||(e[1]=t("查看",-1)),r(s,{href:"https://linux.cn/article-4372-1.html"},{default:o(()=>[...e[0]||(e[0]=[t("ss 命令教程",-1)])]),_:1}),e[2]||(e[2]=t(" 获取更多信息。",-1))]),e[23]||(e[23]=a("",9)),n("p",null,[e[4]||(e[4]=t("查看 ",-1)),r(s,{href:"https://linux.cn/article-2434-1.html"},{default:o(()=>[...e[3]||(e[3]=[t("netstat 命令教程",-1)])]),_:1}),e[5]||(e[5]=t(" 获取更多信息。",-1))]),e[24]||(e[24]=a("",14)),n("p",null,[e[7]||(e[7]=t("输入以下命令 (你需要 ",-1)),r(s,{href:"http://www.cyberciti.biz/tips/identifying-linux-bottlenecks-sar-graphs-with-ksar.html"},{default:o(()=>[...e[6]||(e[6]=[t("通过sysstat包安装并启用sar",-1)])]),_:1}),e[8]||(e[8]=t("):",-1))]),e[25]||(e[25]=n("p",null,"sar -n DEV",-1)),e[26]||(e[26]=n("pre",null,[n("code",null,`Linux 2.6.32-220.2.1.el6.x86_64 (www.cyberciti.biz)    Tuesday 13 March 2012   _x86_64_        (2 CPU)
12:00:01  CDT     IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
12:10:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
12:10:01  CDT      eth0    127.13    121.32     95.45     18.34      0.00      0.00      0.00
12:10:01  CDT      eth1     98.48    110.62     16.72     96.33      0.00      0.00      0.00
12:20:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
12:20:01  CDT      eth0    139.95    133.41    106.30     19.95      0.00      0.00      0.00
12:20:01  CDT      eth1    110.65    121.85     18.14    107.13      0.00      0.00      0.00
12:30:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
12:30:01  CDT      eth0    147.85    132.49    115.78     20.45      0.00      0.00      0.00
12:30:01  CDT      eth1    111.88    127.39     18.61    117.65      0.00      0.00      0.00
12:40:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
12:40:01  CDT      eth0    136.75    124.64    105.24     19.48      0.00      0.00      0.00
12:40:01  CDT      eth1    101.65    115.32     17.58    104.50      0.00      0.00      0.00
12:50:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
12:50:01  CDT      eth0    131.45    125.69     96.49     19.58      0.00      0.00      0.00
12:50:01  CDT      eth1    101.41    111.31     17.54     96.78      0.00      0.00      0.00
01:00:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:00:01  CDT      eth0    140.30    133.27    102.17     20.75      0.00      0.00      0.00
01:00:01  CDT      eth1    106.90    119.51     18.53    103.09      0.00      0.00      0.00
01:10:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:10:01  CDT      eth0    152.03    127.74    125.56     19.85      0.00      0.00      0.00
01:10:01  CDT      eth1    115.60    134.57     18.73    126.96      0.00      0.00      0.00
01:20:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:20:01  CDT      eth0    138.55    130.55    103.03     20.20      0.00      0.00      0.00
....
..
....
..
.
01:00:01  CDT      eth1    156.82    169.48     28.83    138.49      0.00      0.00      0.00
01:10:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:10:01  CDT      eth0    215.19    194.82    163.11     30.99      0.00      0.00      0.00
01:10:01  CDT      eth1    162.49    183.79     28.36    163.70      0.00      0.00      0.00
01:20:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:20:01  CDT      eth0    200.20    192.23    140.64     30.93      0.00      0.00      0.00
01:20:01  CDT      eth1    153.60    166.96     27.32    140.26      0.00      0.00      0.00
01:30:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:30:01  CDT      eth0    111.98    103.58     79.12     16.52      0.00      0.00      0.48
01:30:01  CDT      eth1     87.50     95.58     14.74     79.35      0.00      0.00      0.00
Average:        IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
Average:           lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
Average:         eth0    211.21    196.20    156.18     31.20      0.00      0.00      0.01
Average:         eth1    159.10    174.52     28.00    149.95      0.00      0.00      0.00
`)],-1)),e[27]||(e[27]=n("p",null,"或者输入以下命令:",-1)),e[28]||(e[28]=n("pre",null,[n("code",null,`# sar -n DEV 1 3
`)],-1)),e[29]||(e[29]=n("p",null,"输出样例:",-1)),e[30]||(e[30]=n("pre",null,[n("code",null,`Linux 2.6.32-220.2.1.el6.x86_64 (www.cyberciti.biz)    Tuesday 13 March 2012   _x86_64_        (2 CPU)
01:44:03  CDT     IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
01:44:04  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:44:04  CDT      eth0    161.70    154.26    105.20     26.63      0.00      0.00      0.00
01:44:04  CDT      eth1    145.74    142.55     25.11    144.94      0.00      0.00      0.00
01:44:04  CDT     IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
01:44:05  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:44:05  CDT      eth0    162.14    156.31    107.46     42.18      0.00      0.00      0.00
01:44:05  CDT      eth1    135.92    138.83     39.38    104.92      0.00      0.00      0.00
01:44:05  CDT     IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
01:44:06  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:44:06  CDT      eth0    303.92    293.14    272.91     37.40      0.00      0.00      0.00
01:44:06  CDT      eth1    252.94    290.20     34.87    263.50      0.00      0.00      0.00
Average:        IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
Average:           lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
Average:         eth0    210.37    202.34    163.19     35.66      0.00      0.00      0.00
Average:         eth1    178.93    191.64     33.36    171.60      0.00      0.00      0.00
`)],-1)),e[31]||(e[31]=n("hr",null,null,-1)),n("p",null,[e[10]||(e[10]=t("via: ",-1)),r(s,{href:"http://www.cyberciti.biz/faq/network-statistics-tools-rhel-centos-debian-linux/"},{default:o(()=>[...e[9]||(e[9]=[t("http://www.cyberciti.biz/faq/network-statistics-tools-rhel-centos-debian-linux/",-1)])]),_:1})]),n("p",null,[e[14]||(e[14]=t("作者：",-1)),r(s,{href:"http://www.cyberciti.biz/tips/about-us"},{default:o(()=>[...e[11]||(e[11]=[t("nixCraft",-1)])]),_:1}),e[15]||(e[15]=t(" 译者：",-1)),r(s,{href:"https://github.com/ictlyh"},{default:o(()=>[...e[12]||(e[12]=[t("ictlyh",-1)])]),_:1}),e[16]||(e[16]=t(" 校对：",-1)),r(s,{href:"https://github.com/wxy"},{default:o(()=>[...e[13]||(e[13]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[19]||(e[19]=t("本文由 ",-1)),r(s,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[17]||(e[17]=[t("LCTT",-1)])]),_:1}),e[20]||(e[20]=t(" 原创翻译，",-1)),r(s,{href:"http://linux.cn/"},{default:o(()=>[...e[18]||(e[18]=[t("Linux中国",-1)])]),_:1}),e[21]||(e[21]=t(" 荣誉推出",-1))])])}const P=i(l,[["render",T]]);export{D as __pageData,P as default};
