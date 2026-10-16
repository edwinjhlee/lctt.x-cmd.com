import{_ as d,a0 as e,w as s,s as p,ao as l,I as a,x as i,a1 as o,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"Linux id 命令 - 显示用户id和组id信息 | LCTT x X-CMD","titleTemplate":false,"description":"Linux id 命令 - 显示用户id和组id信息 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux id 命令 - 显示用户id和组id信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux id 命令 - 显示用户id和组id信息 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/Linux id Command - Print user ID and group ID information","title":"Linux id 命令 - 显示用户id和组id信息","tag":"201401","desc":""},"relativePath":"201401/Linux id Command - Print user ID and group ID information.md","filePath":"[post].md"}'),g={name:"201401/Linux id Command - Print user ID and group ID information.md"};function u(m,n,x,h,D,I){const t=e("Link");return s(),p("div",null,[n[11]||(n[11]=l(`<h1 id="linux-id-命令-显示用户id和组id信息" tabindex="-1">Linux id 命令 - 显示用户id和组id信息 <a class="header-anchor" href="#linux-id-命令-显示用户id和组id信息" aria-label="Permalink to “Linux id 命令 - 显示用户id和组id信息”">​</a></h1><p>要登入一台计算机，我们需要一个用户名。用户名是一个可以被计算机识别的身份。基于此，计算机会对使用这个用户名的登陆的人应用一系列的规则。在Linux系统下，我们可以使用 <strong>id</strong> 命令。</p><h3 id="什么是-id-命令" tabindex="-1">什么是 id 命令 <a class="header-anchor" href="#什么是-id-命令" aria-label="Permalink to “什么是 id 命令”">​</a></h3><p><strong>id</strong> 命令可以显示真实有效的用户 ID(UID) 和组 ID(GID)。UID 是对一个用户的单一身份标识。组 ID（GID）则对应多个UID。</p><h3 id="如何使用-id-命令" tabindex="-1">如何使用 id 命令 <a class="header-anchor" href="#如何使用-id-命令" aria-label="Permalink to “如何使用 id 命令”">​</a></h3><p><strong>id</strong> 命令已经默认预装在大多数 Linux 系统中。要使用它，只需要在你的控制台输入id。不带选项输入 id 会显示如下。结果会使用活跃用户。</p><pre><code>$ id
</code></pre><p><img src="http://linoxide.com/wp-content/uploads/2013/12/id_default.png" alt="id默认输出"></p><h4 id="如何读取输出" tabindex="-1">如何读取输出: <a class="header-anchor" href="#如何读取输出" aria-label="Permalink to “如何读取输出:”">​</a></h4><ul><li><p>用户 <strong>pungki</strong> 的 <strong>UID</strong> 号码= <strong>1000</strong>, <strong>GID</strong> 号码= <strong>1000</strong></p></li><li><p>用户 **pungki ** 是下面的组成员 :</p><p><strong>pungki</strong> 的 GID 号码= <strong>1000</strong><strong>adm</strong> 的 GID 号码= <strong>4</strong><strong>cdrom</strong> 的 GID 号码= <strong>24</strong><strong>sudo</strong> 的 GID 号码= <strong>27</strong><strong>dip</strong> 的 GID 号码= <strong>30</strong><strong>plugdev</strong> 的 GID 号码= <strong>46</strong><strong>lpadmin</strong> 的 GID 号码= <strong>108</strong><strong>sambashare</strong> 的 GID 号码= <strong>124</strong></p></li></ul><h3 id="带选项使用id" tabindex="-1">带选项使用id <a class="header-anchor" href="#带选项使用id" aria-label="Permalink to “带选项使用id”">​</a></h3><p>id 命令可以使用一些选项。下面有一些在日常使用中有用的选项。</p><h4 id="打印用户名、uid-和该用户所属的所有组" tabindex="-1">打印用户名、UID 和该用户所属的所有组 <a class="header-anchor" href="#打印用户名、uid-和该用户所属的所有组" aria-label="Permalink to “打印用户名、UID 和该用户所属的所有组”">​</a></h4><p>要这么做，我们可以使用 <strong>-a</strong> 选项</p><pre><code>$ id -a
</code></pre><p><img src="http://linoxide.com/wp-content/uploads/2013/12/id_a.png" alt="-a 选项"></p><h4 id="输出所有不同的组id-有效的-真实的和补充的" tabindex="-1">输出所有不同的组ID (有效的，真实的和补充的) <a class="header-anchor" href="#输出所有不同的组id-有效的-真实的和补充的" aria-label="Permalink to “输出所有不同的组ID (有效的，真实的和补充的)”">​</a></h4><p>我们可以使用 <strong>-G</strong> 选项来实现。</p><pre><code>$ id -G
</code></pre><p><img src="http://linoxide.com/wp-content/uploads/2013/12/id_G.png" alt="-G 选项"></p><p>结果只会显示 GID 号。你可以和 <strong>/etc/group</strong> 文件比较。下面是 <strong>/etc/group</strong> 文件的示例内容：</p><pre><code>root:x:0:
daemon:x:1:
bin:x:2:
sys:x:3:
adm:x:4:pungki
fax:x:21:
voice:x:22:
cdrom:x:24:pungki
floppy:x:25:
tape:x:26:
sudo:x:27:pungki
audio:x:29:pulse
dip:x:30:pungki
www-data:x:33:
backup:x:34:
operator:x:37:
sasl:x:45:
plugdev:x:46:pungki
ssl-cert:x:107:
lpadmin:x:108:pungki
saned:x:123:
sambashare:x:124:pungki
winbindd_priv:x:125:
</code></pre><h4 id="只输出有效的组id" tabindex="-1">只输出有效的组ID <a class="header-anchor" href="#只输出有效的组id" aria-label="Permalink to “只输出有效的组ID”">​</a></h4><p>通过使用 <strong>-g</strong> 选项来只输出有效组ID。</p><pre><code>$ id -g
</code></pre><p><img src="http://linoxide.com/wp-content/uploads/2013/12/id_g1.png" alt="-g 选项"></p><h4 id="输出特定用户信息" tabindex="-1">输出特定用户信息 <a class="header-anchor" href="#输出特定用户信息" aria-label="Permalink to “输出特定用户信息”">​</a></h4><p>我们可以输出特定的用户信息相关的 UID 和 GID。只需要在 id 命令后跟上用户名。</p><pre><code>$ id leni
</code></pre><p><img src="http://linoxide.com/wp-content/uploads/2013/12/id_leni.png" alt="leni 用户"></p><p>上面的命令会打印用户 <strong>leni</strong> 的 UID 和 GID。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>当我们想知道某个用户的 UID 和 GID 时 id 命令是非常有用的。一些程序可能需要 UID/GID 来运行。id 使我们更加容易地找出用户的 UID 以 GID 而不必在 /etc/group 文件中搜寻。如往常一样，你可以在控制台输入 <strong>man id</strong> 进入 id 的手册页来获取更多的详情。</p><hr>`,34)),a("p",null,[n[1]||(n[1]=i("via: ",-1)),o(t,{href:"http://linoxide.com/linux-command/linux-id-command/"},{default:r(()=>[...n[0]||(n[0]=[i("http://linoxide.com/linux-command/linux-id-command/",-1)])]),_:1})]),a("p",null,[n[4]||(n[4]=i("译者：",-1)),o(t,{href:"https://github.com/geekpi"},{default:r(()=>[...n[2]||(n[2]=[i("geekpi",-1)])]),_:1}),n[5]||(n[5]=i(" 校对：",-1)),o(t,{href:"https://github.com/carolinewuyan"},{default:r(()=>[...n[3]||(n[3]=[i("Caroline",-1)])]),_:1})]),a("p",null,[n[8]||(n[8]=i("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[6]||(n[6]=[i("LCTT",-1)])]),_:1}),n[9]||(n[9]=i(" 原创翻译，",-1)),o(t,{href:"http://linux.cn/"},{default:r(()=>[...n[7]||(n[7]=[i("Linux中国",-1)])]),_:1}),n[10]||(n[10]=i(" 荣誉推出",-1))])])}const k=d(g,[["render",u]]);export{b as __pageData,k as default};
