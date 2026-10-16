import{_ as l,a0 as r,w as o,s as p,ao as m,I as s,x as t,a1 as a,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const c=JSON.parse('{"title":"Linux有問必答：Perl中本地時間和UNIX時間戳間相互轉換 | LCTT x X-CMD","titleTemplate":false,"description":"Linux有問必答：Perl中本地時間和UNIX時間戳間相互轉換 | LCTT (201504) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux有問必答：Perl中本地時間和UNIX時間戳間相互轉換 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux有問必答：Perl中本地時間和UNIX時間戳間相互轉換 | LCTT (201504) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201504/20150316 Linux FAQs with Answers--How to convert between local time and UNIX timestamp in Perl","title":"Linux有問必答：Perl中本地時間和UNIX時間戳間相互轉換","tag":"201504","desc":""},"relativePath":"201504/20150316 Linux FAQs with Answers--How to convert between local time and UNIX timestamp in Perl.md","filePath":"[post].md"}'),u={name:"201504/20150316 Linux FAQs with Answers--How to convert between local time and UNIX timestamp in Perl.md"};function d(x,e,$,h,P,N){const n=r("Link");return o(),p("div",null,[e[13]||(e[13]=m(`<h1 id="linux有問必答-perl中本地時間和unix時間戳間相互轉換" tabindex="-1">Linux有問必答：Perl中本地時間和UNIX時間戳間相互轉換 <a class="header-anchor" href="#linux有問必答-perl中本地時間和unix時間戳間相互轉換" aria-label="Permalink to “Linux有問必答：Perl中本地時間和UNIX時間戳間相互轉換”">​</a></h1><blockquote><p><strong>問題</strong>: 在Perl語言中，我需要轉換易讀的日期和時間到對應的UNIX時間戳，反之亦然。你可以給我一些將日期及時間轉換到UNIX時間戳的Perl代碼例子嗎？或者相反，轉換UNIX時間戳到可讀的日期和時間。</p></blockquote><p>當你的Perl腳本需要解決時間信息，這裏有兩種方法來表示和處理日期和時間。一種方法是易讀的時間表示（例，&quot;Sat Mar 14 10:14:05 EDT 2015&quot;），另外一種是使用UNIX時間戳（也叫“新紀元時間”），這是從1970年1月1日到今所經過的時間秒數。每一種方法都有它自己的優劣勢，取決於你的需要，也許也就需要轉換一種格式到另一種。</p><h3 id="perl中轉換本地時間到unix時間戳" tabindex="-1">Perl中轉換本地時間到UNIX時間戳 <a class="header-anchor" href="#perl中轉換本地時間到unix時間戳" aria-label="Permalink to “Perl中轉換本地時間到UNIX時間戳”">​</a></h3><p>為了從日期字符串中獲得UNIX時間，可以使用Date::Parse模組中str2time()函數。此函數可以處理多種格式，例如：</p><ul><li>Sat Mar 14 10:14:05 EDT 2015</li><li>3/14/2015 10:14:05 -0400</li><li>14/Mar/15 10:14:05</li><li>14 Mar 15 10:14:05</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use Date::Parse;</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>my $local_time = &quot;Sat Mar 14 10:14:05 EDT 2015&quot;;</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span># 1426342445 will be stored in $unix_time</span></span>
<span class="line"><span>my $unix_time = str2time($local_time);</span></span></code></pre></div><p>Date:Parse 模組支持多種語言（英語，法語，德語和意大利語）和時區。例如:</p><pre><code>use Date::Parse;
use Date::Language;
 
my $lang = Date::Language-&gt;new(&#39;French&#39;);
my $unix_time = $lang-&gt;str2time(&quot;12:14:05, Ago 16, 2014 (CEST)&quot;);
</code></pre><h3 id="perl中unix時間戳到易讀的日期和時間" tabindex="-1">Perl中UNIX時間戳到易讀的日期和時間 <a class="header-anchor" href="#perl中unix時間戳到易讀的日期和時間" aria-label="Permalink to “Perl中UNIX時間戳到易讀的日期和時間”">​</a></h3><p>如果你想要轉換UNIX時間戳到易讀的格式，可以使用localtime()函數，此函數可以轉換UNIX時間戳為一個9元素列表。然後你可以使用返回的list構造任何你需要的可讀格式。這裏有一個代碼片段：</p><pre><code># $sec, $min, $hour: 秒,分,時
# $mday: 月中的某天 (0-31)
# $mon: 月份，範圍 0 (一月) 至 11 (十二月)
# $year: 年份，與1900年的差值(2015年為2015-1900=115)
# $wday: 星期，範圍 0 (星期天) 至 6 (星期六)
# $yday: 年中的某天，範圍 0 至 364 (或 365 閏年)
# $isdst: 是否是夏令時
 
my ($sec, $min, $hour, $mday, $mon, $year, $wday, $yday, $isdst) = localtime($unix_timestamp);
 
# necessary conversion of $mon and $year
$mon += 1;
$year += 1900;
 
print &quot;Current time: $year-$mon-$mday $hour:$min:$sec\\n&quot;;
</code></pre><hr>`,13)),s("p",null,[e[1]||(e[1]=t("via: ",-1)),a(n,{href:"http://ask.xmodulo.com/convert-local-time-unix-timestamp-perl.html"},{default:i(()=>[...e[0]||(e[0]=[t("http://ask.xmodulo.com/convert-local-time-unix-timestamp-perl.html",-1)])]),_:1})]),s("p",null,[e[5]||(e[5]=t("作者：",-1)),a(n,{href:"http://ask.xmodulo.com/author/nanni"},{default:i(()=>[...e[2]||(e[2]=[t("Dan Nanni",-1)])]),_:1}),e[6]||(e[6]=t(" 譯者：",-1)),a(n,{href:"http://vicyu.net"},{default:i(()=>[...e[3]||(e[3]=[t("VicYu/Vic020",-1)])]),_:1}),e[7]||(e[7]=t(" 校對：",-1)),a(n,{href:"https://github.com/wxy"},{default:i(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),s("p",null,[e[10]||(e[10]=t("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原創翻譯，",-1)),a(n,{href:"http://linux.cn/"},{default:i(()=>[...e[9]||(e[9]=[t("Linux中國",-1)])]),_:1}),e[12]||(e[12]=t(" 榮譽推出",-1))])])}const T=l(u,[["render",d]]);export{c as __pageData,T as default};
