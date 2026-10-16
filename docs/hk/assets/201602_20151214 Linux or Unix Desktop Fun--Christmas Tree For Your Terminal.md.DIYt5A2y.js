import{_ as l,a0 as s,w as o,s as m,ao as p,I as a,x as n,a1 as t,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const A=JSON.parse('{"title":"Linux/Unix 桌面趣事：終端上的聖誕樹 | LCTT x X-CMD","titleTemplate":false,"description":"Linux/Unix 桌面趣事：終端上的聖誕樹 | LCTT (201602) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux/Unix 桌面趣事：終端上的聖誕樹 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux/Unix 桌面趣事：終端上的聖誕樹 | LCTT (201602) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201602/20151214 Linux or Unix Desktop Fun--Christmas Tree For Your Terminal","title":"Linux/Unix 桌面趣事：終端上的聖誕樹","tag":"201602","desc":""},"relativePath":"201602/20151214 Linux or Unix Desktop Fun--Christmas Tree For Your Terminal.md","filePath":"[post].md"}'),u={name:"201602/20151214 Linux or Unix Desktop Fun--Christmas Tree For Your Terminal.md"};function d(c,e,T,x,P,h){const r=s("Link");return o(),m("div",null,[e[11]||(e[11]=p(`<h1 id="linux-unix-桌面趣事-終端上的聖誕樹" tabindex="-1">Linux/Unix 桌面趣事：終端上的聖誕樹 <a class="header-anchor" href="#linux-unix-桌面趣事-終端上的聖誕樹" aria-label="Permalink to “Linux/Unix 桌面趣事：終端上的聖誕樹”">​</a></h1><p>給你的Linux或Unix控制台創造一棵聖誕樹玩玩吧。在此之前，需要先安裝一個Perl模組，命名為Acme::POE::Tree。這是一棵很喜慶的聖誕樹，我已經在Linux、OSX和類Unix系統上驗證過了。</p><h3 id="安裝-acme-poe-tree" tabindex="-1">安裝 Acme::POE::Tree <a class="header-anchor" href="#安裝-acme-poe-tree" aria-label="Permalink to “安裝 Acme::POE::Tree”">​</a></h3><p>安裝perl模組最簡單的辦法就是使用CPAN（Perl綜合典藏網（Comprehensive Perl Archive Network））。打開終端，把下面的指令敲進去便可安裝Acme::POE::Tree。</p><pre><code>## 以root身份運行 ##
perl -MCPAN -e &#39;install Acme::POE::Tree&#39;
</code></pre><p><strong>示例輸出：</strong></p><pre><code>Installing /home/vivek/perl5/man/man3/POE::NFA.3pm
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
</code></pre><h3 id="在shell中顯示聖誕樹" tabindex="-1">在Shell中顯示聖誕樹 <a class="header-anchor" href="#在shell中顯示聖誕樹" aria-label="Permalink to “在Shell中顯示聖誕樹”">​</a></h3><p>只需要在終端上運行以下命令：</p><pre><code>perl -MAcme::POE::Tree -e &#39;Acme::POE::Tree-&gt;new()-&gt;run()&#39;
</code></pre><p><strong>示例輸出</strong></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/12/perl-tree.gif" alt="Gif 01: An animated christmas tree in Perl"></p><p>Gif 01: 一棵用Perl寫的喜慶聖誕樹</p><h3 id="樹的定製" tabindex="-1">樹的定製 <a class="header-anchor" href="#樹的定製" aria-label="Permalink to “樹的定製”">​</a></h3><p>以下是我的腳本文件tree.pl的內容：</p><pre><code>#!/usr/bin/perl
 
use Acme::POE::Tree;
my $tree = Acme::POE::Tree-&gt;new(
{
  star_delay =&gt; 1.5,  # shimmer star every 1.5 sec
  light_delay =&gt; 2,   # twinkle lights every 2 sec
  run_for =&gt; 10,      # automatically exit after 10 sec
}
);
$tree-&gt;run();
</code></pre><p>這樣就可以通過修改star_delay、run_for和light_delay參數的值來自定義你的樹了。一棵好玩的終端聖誕樹就此誕生。</p><hr>`,18)),a("p",null,[e[1]||(e[1]=n("via: ",-1)),t(r,{href:"http://www.cyberciti.biz/open-source/command-line-hacks/linux-unix-desktop-fun-christmas-tree-for-your-terminal/"},{default:i(()=>[...e[0]||(e[0]=[n("http://www.cyberciti.biz/open-source/command-line-hacks/linux-unix-desktop-fun-christmas-tree-for-your-terminal/",-1)])]),_:1})]),a("p",null,[e[4]||(e[4]=n("作者：Vivek Gite 譯者：",-1)),t(r,{href:"https://github.com/soooogreen"},{default:i(()=>[...e[2]||(e[2]=[n("soooogreen",-1)])]),_:1}),e[5]||(e[5]=n(" 校對：",-1)),t(r,{href:"https://github.com/wxy"},{default:i(()=>[...e[3]||(e[3]=[n("wxy",-1)])]),_:1})]),a("p",null,[e[8]||(e[8]=n("本文由 ",-1)),t(r,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[6]||(e[6]=[n("LCTT",-1)])]),_:1}),e[9]||(e[9]=n(" 原創編譯，",-1)),t(r,{href:"https://linux.cn/"},{default:i(()=>[...e[7]||(e[7]=[n("Linux中國",-1)])]),_:1}),e[10]||(e[10]=n(" 榮譽推出",-1))])])}const f=l(u,[["render",d]]);export{A as __pageData,f as default};
