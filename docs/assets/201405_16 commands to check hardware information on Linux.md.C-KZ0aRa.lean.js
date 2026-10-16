import{_ as s,a0 as d,w as l,s as p,ao as i,I as o,a1 as t,A as a,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"Linux硬件信息命令大全 | LCTT x X-CMD","titleTemplate":false,"description":"Linux硬件信息命令大全 | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux硬件信息命令大全 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux硬件信息命令大全 | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/16 commands to check hardware information on Linux","title":"Linux硬件信息命令大全","tag":"201405","desc":""},"relativePath":"201405/16 commands to check hardware information on Linux.md","filePath":"[post].md"}'),c={name:"201405/16 commands to check hardware information on Linux.md"};function u(m,e,C,f,I,h){const r=d("Link");return l(),p("div",null,[e[13]||(e[13]=i("",11)),o("p",null,[t(r,{href:"http://www.binarytides.com/linux-lshw-command/"},{default:a(()=>[...e[0]||(e[0]=[n("在Linux上使用lshw命令获取硬件信息",-1)])]),_:1})]),e[14]||(e[14]=o("h3",{id:"_3-hwinfo-hardware-information",tabindex:"-1"},[n("3. hwinfo - Hardware Information "),o("a",{class:"header-anchor",href:"#_3-hwinfo-hardware-information","aria-label":"Permalink to “3. hwinfo - Hardware Information”"},"​")],-1)),e[15]||(e[15]=o("p",null,"hwinfo同样是一个使用非常广泛的硬件信息查询命令，类似于lshw，它同样可以详细或概要地报告多个部件的硬件信息，但不同的是，它有时可以给出比lshw更多的信息。",-1)),e[16]||(e[16]=o("pre",null,[o("code",null,`$ hwinfo --short
cpu:                                                            
                       Intel(R) Core(TM)2 Quad CPU    Q8400  @ 2.66GHz, 2000 MHz
                       Intel(R) Core(TM)2 Quad CPU    Q8400  @ 2.66GHz, 2000 MHz
                       Intel(R) Core(TM)2 Quad CPU    Q8400  @ 2.66GHz, 2666 MHz
                       Intel(R) Core(TM)2 Quad CPU    Q8400  @ 2.66GHz, 2666 MHz
keyboard:
  /dev/input/event2    AT Translated Set 2 keyboard
mouse:
  /dev/input/mice      Microsoft Basic Optical Mouse v2.0
graphics card:
                       Intel 965G-1
                       Intel 82G35 Express Integrated Graphics Controller
sound:
                       Intel 82801H (ICH8 Family) HD Audio Controller
storage:
                       Intel 82801H (ICH8 Family) 4 port SATA IDE Controller
                       Intel 82801H (ICH8 Family) 2 port SATA IDE Controller
                       JMicron JMB368 IDE controller
network:
  eth0                 Intel 82566DC Gigabit Network Connection
network interface:
  eth0                 Ethernet network interface
  lo                   Loopback network interface
disk:
  /dev/sda             ST3500418AS
partition:
  /dev/sda1            Partition
  /dev/sda2            Partition
  /dev/sda5            Partition
  /dev/sda6            Partition
  /dev/sda7            Partition
  /dev/sda8            Partition
cdrom:
  /dev/sr0             SONY DVD RW DRU-190A
usb controller:
                       Intel 82801H (ICH8 Family) USB UHCI Controller #4
                       Intel 82801H (ICH8 Family) USB UHCI Controller #5
                       Intel 82801H (ICH8 Family) USB2 EHCI Controller #2
                       Intel 82801H (ICH8 Family) USB UHCI Controller #1
                       Intel 82801H (ICH8 Family) USB UHCI Controller #2
                       Intel 82801H (ICH8 Family) USB UHCI Controller #3
                       Intel 82801H (ICH8 Family) USB2 EHCI Controller #1
bios:
                       BIOS

... TRUNCATED ...
`)],-1)),e[17]||(e[17]=o("p",null,"点击下面的链接可以查看更多关于hwinfo的信息。",-1)),o("p",null,[t(r,{href:"http://www.binarytides.com/linux-hwinfo-command/"},{default:a(()=>[...e[1]||(e[1]=[n("在Linux上使用hwinfo命令获取硬件信息",-1)])]),_:1})]),e[18]||(e[18]=i("",57)),o("p",null,[e[3]||(e[3]=n("via: ",-1)),t(r,{href:"http://www.binarytides.com/linux-commands-hardware-info/"},{default:a(()=>[...e[2]||(e[2]=[n("http://www.binarytides.com/linux-commands-hardware-info/",-1)])]),_:1})]),o("p",null,[e[6]||(e[6]=n("译者：",-1)),t(r,{href:"https://github.com/stallonederek"},{default:a(()=>[...e[4]||(e[4]=[n("stallonederek",-1)])]),_:1}),e[7]||(e[7]=n(" 校对：",-1)),t(r,{href:"https://github.com/%E6%A0%A1wxy"},{default:a(()=>[...e[5]||(e[5]=[n("wxy",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=n("本文由 ",-1)),t(r,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原创翻译，",-1)),t(r,{href:"http://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[n("Linux中国",-1)])]),_:1}),e[12]||(e[12]=n(" 荣誉推出",-1))])])}const v=s(c,[["render",u]]);export{y as __pageData,v as default};
