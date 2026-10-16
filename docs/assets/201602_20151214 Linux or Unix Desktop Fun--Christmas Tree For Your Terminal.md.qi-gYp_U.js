import{_ as l,a0 as s,w as o,s as m,ao as p,I as a,x as n,a1 as t,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const A=JSON.parse('{"title":"Linux/Unix 桌面趣事：终端上的圣诞树 | LCTT x X-CMD","titleTemplate":false,"description":"Linux/Unix 桌面趣事：终端上的圣诞树 | LCTT (201602) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux/Unix 桌面趣事：终端上的圣诞树 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux/Unix 桌面趣事：终端上的圣诞树 | LCTT (201602) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201602/20151214 Linux or Unix Desktop Fun--Christmas Tree For Your Terminal","title":"Linux/Unix 桌面趣事：终端上的圣诞树","tag":"201602","desc":""},"relativePath":"201602/20151214 Linux or Unix Desktop Fun--Christmas Tree For Your Terminal.md","filePath":"[post].md"}'),u={name:"201602/20151214 Linux or Unix Desktop Fun--Christmas Tree For Your Terminal.md"};function d(c,e,T,x,P,h){const r=s("Link");return o(),m("div",null,[e[11]||(e[11]=p(`<h1 id="linux-unix-桌面趣事-终端上的圣诞树" tabindex="-1">Linux/Unix 桌面趣事：终端上的圣诞树 <a class="header-anchor" href="#linux-unix-桌面趣事-终端上的圣诞树" aria-label="Permalink to “Linux/Unix 桌面趣事：终端上的圣诞树”">​</a></h1><p>给你的Linux或Unix控制台创造一棵圣诞树玩玩吧。在此之前，需要先安装一个Perl模块，命名为Acme::POE::Tree。这是一棵很喜庆的圣诞树，我已经在Linux、OSX和类Unix系统上验证过了。</p><h3 id="安装-acme-poe-tree" tabindex="-1">安装 Acme::POE::Tree <a class="header-anchor" href="#安装-acme-poe-tree" aria-label="Permalink to “安装 Acme::POE::Tree”">​</a></h3><p>安装perl模块最简单的办法就是使用CPAN（Perl综合典藏网（Comprehensive Perl Archive Network））。打开终端，把下面的指令敲进去便可安装Acme::POE::Tree。</p><pre><code>## 以root身份运行 ##
perl -MCPAN -e &#39;install Acme::POE::Tree&#39;
</code></pre><p><strong>示例输出：</strong></p><pre><code>Installing /home/vivek/perl5/man/man3/POE::NFA.3pm
Installing /home/vivek/perl5/man/man3/POE::Kernel.3pm
Installing /home/vivek/perl5/man/man3/POE::Loop.3pm
Installing /home/vivek/perl5/man/man3/POE::Resource.3pm
Installing /home/vivek/perl5/man/man3/POE::Filter::Map.3pm
Installing /home/vivek/perl5/man/man3/POE::Resource::SIDs.3pm
Installing /home/vivek/perl5/man/man3/POE::Loop::IO_Poll.3pm
Installing /home/vivek/perl5/man/man3/POE::Pipe::TwoWay.3pm
Appending installation info to /home/vivek/perl5/lib/perl5/x86_64-linux-gnu-thread-multi/perllocal.pod
  RCAPUTO/POE-1.367.tar.gz
  /usr/bin/make install  -- OK
  RCAPUTO/Acme-POE-Tree-1.022.tar.gz
  Has already been unwrapped into directory /home/vivek/.cpan/build/Acme-POE-Tree-1.022-uhlZUz
  RCAPUTO/Acme-POE-Tree-1.022.tar.gz
  Has already been prepared
Running make for R/RC/RCAPUTO/Acme-POE-Tree-1.022.tar.gz
cp lib/Acme/POE/Tree.pm blib/lib/Acme/POE/Tree.pm
Manifying 1 pod document
  RCAPUTO/Acme-POE-Tree-1.022.tar.gz
  /usr/bin/make -- OK
Running make test
PERL_DL_NONLAZY=1 &quot;/usr/bin/perl&quot; &quot;-MExtUtils::Command::MM&quot; &quot;-MTest::Harness&quot; &quot;-e&quot; &quot;undef *Test::Harness::Switches; test_harness(0, &#39;blib/lib&#39;, &#39;blib/arch&#39;)&quot; t/*.t
t/01_basic.t .. ok
All tests successful.
Files=1, Tests=2,  6 wallclock secs ( 0.09 usr  0.03 sys +  0.53 cusr  0.06 csys =  0.71 CPU)
Result: PASS
  RCAPUTO/Acme-POE-Tree-1.022.tar.gz
Tests succeeded but one dependency not OK (Curses)
  RCAPUTO/Acme-POE-Tree-1.022.tar.gz
  [dependencies] -- NA
</code></pre><h3 id="在shell中显示圣诞树" tabindex="-1">在Shell中显示圣诞树 <a class="header-anchor" href="#在shell中显示圣诞树" aria-label="Permalink to “在Shell中显示圣诞树”">​</a></h3><p>只需要在终端上运行以下命令：</p><pre><code>perl -MAcme::POE::Tree -e &#39;Acme::POE::Tree-&gt;new()-&gt;run()&#39;
</code></pre><p><strong>示例输出</strong></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/12/perl-tree.gif" alt="Gif 01: An animated christmas tree in Perl"></p><p>Gif 01: 一棵用Perl写的喜庆圣诞树</p><h3 id="树的定制" tabindex="-1">树的定制 <a class="header-anchor" href="#树的定制" aria-label="Permalink to “树的定制”">​</a></h3><p>以下是我的脚本文件tree.pl的内容：</p><pre><code>#!/usr/bin/perl
 
use Acme::POE::Tree;
my $tree = Acme::POE::Tree-&gt;new(
{
  star_delay =&gt; 1.5,  # shimmer star every 1.5 sec
  light_delay =&gt; 2,   # twinkle lights every 2 sec
  run_for =&gt; 10,      # automatically exit after 10 sec
}
);
$tree-&gt;run();
</code></pre><p>这样就可以通过修改star_delay、run_for和light_delay参数的值来自定义你的树了。一棵好玩的终端圣诞树就此诞生。</p><hr>`,18)),a("p",null,[e[1]||(e[1]=n("via: ",-1)),t(r,{href:"http://www.cyberciti.biz/open-source/command-line-hacks/linux-unix-desktop-fun-christmas-tree-for-your-terminal/"},{default:i(()=>[...e[0]||(e[0]=[n("http://www.cyberciti.biz/open-source/command-line-hacks/linux-unix-desktop-fun-christmas-tree-for-your-terminal/",-1)])]),_:1})]),a("p",null,[e[4]||(e[4]=n("作者：Vivek Gite 译者：",-1)),t(r,{href:"https://github.com/soooogreen"},{default:i(()=>[...e[2]||(e[2]=[n("soooogreen",-1)])]),_:1}),e[5]||(e[5]=n(" 校对：",-1)),t(r,{href:"https://github.com/wxy"},{default:i(()=>[...e[3]||(e[3]=[n("wxy",-1)])]),_:1})]),a("p",null,[e[8]||(e[8]=n("本文由 ",-1)),t(r,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[6]||(e[6]=[n("LCTT",-1)])]),_:1}),e[9]||(e[9]=n(" 原创编译，",-1)),t(r,{href:"https://linux.cn/"},{default:i(()=>[...e[7]||(e[7]=[n("Linux中国",-1)])]),_:1}),e[10]||(e[10]=n(" 荣誉推出",-1))])])}const f=l(u,[["render",d]]);export{A as __pageData,f as default};
