import{_ as l,W as r,s as o,u as p,ah as m,I as i,w as n,Z as a,A as s}from"./chunks/framework.DYeiaKBS.js";import"./chunks/theme.DJBbXXYU.js";const X=JSON.parse('{"title":"Linux有问必答：Perl中本地时间和UNIX时间戳间相互转换 | LCTT x X-CMD","titleTemplate":false,"description":"Linux有问必答：Perl中本地时间和UNIX时间戳间相互转换 | LCTT (201504) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux有问必答：Perl中本地时间和UNIX时间戳间相互转换 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux有问必答：Perl中本地时间和UNIX时间戳间相互转换 | LCTT (201504) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201504/20150316 Linux FAQs with Answers--How to convert between local time and UNIX timestamp in Perl","title":"Linux有问必答：Perl中本地时间和UNIX时间戳间相互转换","tag":"201504"},"relativePath":"201504/20150316 Linux FAQs with Answers--How to convert between local time and UNIX timestamp in Perl.md","filePath":"[post].md"}'),u={name:"201504/20150316 Linux FAQs with Answers--How to convert between local time and UNIX timestamp in Perl.md"};function d(x,e,$,P,N,h){const t=r("Link");return p(),o("div",null,[e[13]||(e[13]=m(`<h1 id="linux有问必答-perl中本地时间和unix时间戳间相互转换" tabindex="-1">Linux有问必答：Perl中本地时间和UNIX时间戳间相互转换 <a class="header-anchor" href="#linux有问必答-perl中本地时间和unix时间戳间相互转换" aria-label="Permalink to Linux有问必答：Perl中本地时间和UNIX时间戳间相互转换">​</a></h1><blockquote><p><strong>问题</strong>: 在Perl语言中，我需要转换易读的日期和时间到对应的UNIX时间戳，反之亦然。你可以给我一些将日期及时间转换到UNIX时间戳的Perl代码例子吗？或者相反，转换UNIX时间戳到可读的日期和时间。</p></blockquote><p>当你的Perl脚本需要解决时间信息，这里有两种方法来表示和处理日期和时间。一种方法是易读的时间表示（例，&quot;Sat Mar 14 10:14:05 EDT 2015&quot;），另外一种是使用UNIX时间戳（也叫“新纪元时间”），这是从1970年1月1日到今所经过的时间秒数。每一种方法都有它自己的优劣势，取决于你的需要，也许也就需要转换一种格式到另一种。</p><h3 id="perl中转换本地时间到unix时间戳" tabindex="-1">Perl中转换本地时间到UNIX时间戳 <a class="header-anchor" href="#perl中转换本地时间到unix时间戳" aria-label="Permalink to Perl中转换本地时间到UNIX时间戳">​</a></h3><p>为了从日期字符串中获得UNIX时间，可以使用Date::Parse模块中str2time()函数。此函数可以处理多种格式，例如：</p><ul><li>Sat Mar 14 10:14:05 EDT 2015</li><li>3/14/2015 10:14:05 -0400</li><li>14/Mar/15 10:14:05</li><li>14 Mar 15 10:14:05</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>use Date::Parse;</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>my $local_time = &quot;Sat Mar 14 10:14:05 EDT 2015&quot;;</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span># 1426342445 will be stored in $unix_time</span></span>
<span class="line"><span>my $unix_time = str2time($local_time);</span></span></code></pre></div><p>Date:Parse 模块支持多种语言（英语，法语，德语和意大利语）和时区。例如:</p><pre><code>use Date::Parse;
use Date::Language;
 
my $lang = Date::Language-&gt;new(&#39;French&#39;);
my $unix_time = $lang-&gt;str2time(&quot;12:14:05, Ago 16, 2014 (CEST)&quot;);
</code></pre><h3 id="perl中unix时间戳到易读的日期和时间" tabindex="-1">Perl中UNIX时间戳到易读的日期和时间 <a class="header-anchor" href="#perl中unix时间戳到易读的日期和时间" aria-label="Permalink to Perl中UNIX时间戳到易读的日期和时间">​</a></h3><p>如果你想要转换UNIX时间戳到易读的格式，可以使用localtime()函数，此函数可以转换UNIX时间戳为一个9元素列表。然后你可以使用返回的list构造任何你需要的可读格式。这里有一个代码片段：</p><pre><code># $sec, $min, $hour: 秒,分,时
# $mday: 月中的某天 (0-31)
# $mon: 月份，范围 0 (一月) 至 11 (十二月)
# $year: 年份，与1900年的差值(2015年为2015-1900=115)
# $wday: 星期，范围 0 (星期天) 至 6 (星期六)
# $yday: 年中的某天，范围 0 至 364 (或 365 闰年)
# $isdst: 是否是夏令时
 
my ($sec, $min, $hour, $mday, $mon, $year, $wday, $yday, $isdst) = localtime($unix_timestamp);
 
# necessary conversion of $mon and $year
$mon += 1;
$year += 1900;
 
print &quot;Current time: $year-$mon-$mday $hour:$min:$sec\\n&quot;;
</code></pre><hr>`,13)),i("p",null,[e[1]||(e[1]=n("via: ")),a(t,{href:"http://ask.xmodulo.com/convert-local-time-unix-timestamp-perl.html"},{default:s(()=>e[0]||(e[0]=[n("http://ask.xmodulo.com/convert-local-time-unix-timestamp-perl.html")])),_:1})]),i("p",null,[e[5]||(e[5]=n("作者：")),a(t,{href:"http://ask.xmodulo.com/author/nanni"},{default:s(()=>e[2]||(e[2]=[n("Dan Nanni")])),_:1}),e[6]||(e[6]=n(" 译者：")),a(t,{href:"http://vicyu.net"},{default:s(()=>e[3]||(e[3]=[n("VicYu/Vic020")])),_:1}),e[7]||(e[7]=n(" 校对：")),a(t,{href:"https://github.com/wxy"},{default:s(()=>e[4]||(e[4]=[n("wxy")])),_:1})]),i("p",null,[e[10]||(e[10]=n("本文由 ")),a(t,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>e[8]||(e[8]=[n("LCTT")])),_:1}),e[11]||(e[11]=n(" 原创翻译，")),a(t,{href:"http://linux.cn/"},{default:s(()=>e[9]||(e[9]=[n("Linux中国")])),_:1}),e[12]||(e[12]=n(" 荣誉推出"))])])}const f=l(u,[["render",d]]);export{X as __pageData,f as default};
