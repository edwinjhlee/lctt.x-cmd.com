import{_ as i,a0 as t,w as c,s as r,ao as d,I as l,x as s,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"在 Linux 命令行上使用日历 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 命令行上使用日历 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 命令行上使用日历 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 命令行上使用日历 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180326 Working with calendars on Linux","title":"在 Linux 命令行上使用日历","tag":"201804","desc":""},"relativePath":"201804/20180326 Working with calendars on Linux.md","filePath":"[post].md"}'),o={name:"201804/20180326 Working with calendars on Linux.md"};function h(u,a,g,k,b,f){const n=t("Link");return c(),r("div",null,[a[23]||(a[23]=d(`<h1 id="在-linux-命令行上使用日历" tabindex="-1">在 Linux 命令行上使用日历 <a class="header-anchor" href="#在-linux-命令行上使用日历" aria-label="Permalink to “在 Linux 命令行上使用日历”">​</a></h1><blockquote><p>通过 Linux 上的日历，不仅仅可以提醒你今天是星期几。诸如 date、cal、 ncal 和 calendar 等命令可以提供很多有用信息。</p></blockquote><p><img src="https://images.idgesg.net/images/article/2018/03/calendars-100753173-large.jpg" alt=""></p><p>Linux 系统可以为你的日程安排提供更多帮助，而不仅仅是提醒你今天是星期几。日历显示有很多选项 —— 有些可能很有帮助，有些可能会让你大开眼界。</p><h3 id="日期" tabindex="-1">日期 <a class="header-anchor" href="#日期" aria-label="Permalink to “日期”">​</a></h3><p>首先，你可能知道可以使用 <code>date</code> 命令显示当前日期。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ date</span></span>
<span class="line"><span>Mon Mar 26 08:01:41 EDT 2018</span></span></code></pre></div><h3 id="cal-和-ncal" tabindex="-1">cal 和 ncal <a class="header-anchor" href="#cal-和-ncal" aria-label="Permalink to “cal 和 ncal”">​</a></h3><p>你可以使用 <code>cal</code> 命令显示整个月份。没有参数时，<code>cal</code> 显示当前月份，默认情况下，通过反转前景色和背景颜色来突出显示当天。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal</span></span>
<span class="line"><span>     March 2018</span></span>
<span class="line"><span>Su Mo Tu We Th Fr Sa</span></span>
<span class="line"><span>             1  2  3</span></span>
<span class="line"><span> 4  5  6  7  8  9 10</span></span>
<span class="line"><span>11 12 13 14 15 16 17</span></span>
<span class="line"><span>18 19 20 21 22 23 24</span></span>
<span class="line"><span>25 26 27 28 29 30 31</span></span></code></pre></div><p>如果你想以“横向”格式显示当前月份，则可以使用 <code>ncal</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ncal</span></span>
<span class="line"><span>    March 2018</span></span>
<span class="line"><span>Su     4 11 18 25</span></span>
<span class="line"><span>Mo     5 12 19 26</span></span>
<span class="line"><span>Tu     6 13 20 27</span></span>
<span class="line"><span>We     7 14 21 28</span></span>
<span class="line"><span>Th  1  8 15 22 29</span></span>
<span class="line"><span>Fr  2  9 16 23 30</span></span>
<span class="line"><span>Sa  3 10 17 24 31</span></span></code></pre></div><p>例如，如果你只想查看特定周几的日期，这个命令可能特别有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ncal | grep Th</span></span>
<span class="line"><span>Th  1  8 15 22 29</span></span></code></pre></div><p><code>ncal</code> 命令还可以以“横向”格式显示一整年，只需在命令后提供年份。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ncal 2018</span></span>
<span class="line"><span>                                  2018</span></span>
<span class="line"><span>    January           February          March             April</span></span>
<span class="line"><span>Su     7 14 21 28        4 11 18 25        4 11 18 25     1  8 15 22 29</span></span>
<span class="line"><span>Mo  1  8 15 22 29        5 12 19 26        5 12 19 26     2  9 16 23 30</span></span>
<span class="line"><span>Tu  2  9 16 23 30        6 13 20 27        6 13 20 27     3 10 17 24</span></span>
<span class="line"><span>We  3 10 17 24 31        7 14 21 28        7 14 21 28     4 11 18 25</span></span>
<span class="line"><span>Th  4 11 18 25        1  8 15 22        1  8 15 22 29     5 12 19 26</span></span>
<span class="line"><span>Fr  5 12 19 26        2  9 16 23        2  9 16 23 30     6 13 20 27</span></span>
<span class="line"><span>Sa  6 13 20 27        3 10 17 24        3 10 17 24 31     7 14 21 28</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>你也可以使用 <code>cal</code> 命令显示一整年。请记住，你需要输入年份的四位数字。如果你输入 <code>cal 18</code>，你将获得公元 18 年的历年，而不是 2018 年。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal 2018</span></span>
<span class="line"><span>                            2018</span></span>
<span class="line"><span>      January               February               March</span></span>
<span class="line"><span>Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa</span></span>
<span class="line"><span>    1  2  3  4  5  6               1  2  3               1  2  3</span></span>
<span class="line"><span> 7  8  9 10 11 12 13   4  5  6  7  8  9 10   4  5  6  7  8  9 10</span></span>
<span class="line"><span>14 15 16 17 18 19 20  11 12 13 14 15 16 17  11 12 13 14 15 16 17</span></span>
<span class="line"><span>21 22 23 24 25 26 27  18 19 20 21 22 23 24  18 19 20 21 22 23 24</span></span>
<span class="line"><span>28 29 30 31           25 26 27 28           25 26 27 28 29 30 31</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>       April                  May                   June</span></span>
<span class="line"><span>Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa</span></span>
<span class="line"><span> 1  2  3  4  5  6  7         1  2  3  4  5                  1  2</span></span>
<span class="line"><span> 8  9 10 11 12 13 14   6  7  8  9 10 11 12   3  4  5  6  7  8  9</span></span>
<span class="line"><span>15 16 17 18 19 20 21  13 14 15 16 17 18 19  10 11 12 13 14 15 16</span></span>
<span class="line"><span>22 23 24 25 26 27 28  20 21 22 23 24 25 26  17 18 19 20 21 22 23</span></span>
<span class="line"><span>29 30                 27 28 29 30 31        24 25 26 27 28 29 30</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        July                 August              September</span></span>
<span class="line"><span>Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa</span></span>
<span class="line"><span> 1  2  3  4  5  6  7            1  2  3  4                     1</span></span>
<span class="line"><span> 8  9 10 11 12 13 14   5  6  7  8  9 10 11   2  3  4  5  6  7  8</span></span>
<span class="line"><span>15 16 17 18 19 20 21  12 13 14 15 16 17 18   9 10 11 12 13 14 15</span></span>
<span class="line"><span>22 23 24 25 26 27 28  19 20 21 22 23 24 25  16 17 18 19 20 21 22</span></span>
<span class="line"><span>29 30 31              26 27 28 29 30 31     23 24 25 26 27 28 29</span></span>
<span class="line"><span>                                            30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      October               November              December</span></span>
<span class="line"><span>Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa</span></span>
<span class="line"><span>    1  2  3  4  5  6               1  2  3                     1</span></span>
<span class="line"><span> 7  8  9 10 11 12 13   4  5  6  7  8  9 10   2  3  4  5  6  7  8</span></span>
<span class="line"><span>14 15 16 17 18 19 20  11 12 13 14 15 16 17   9 10 11 12 13 14 15</span></span>
<span class="line"><span>21 22 23 24 25 26 27  18 19 20 21 22 23 24  16 17 18 19 20 21 22</span></span>
<span class="line"><span>28 29 30 31           25 26 27 28 29 30     23 24 25 26 27 28 29</span></span>
<span class="line"><span>                                            30 31</span></span></code></pre></div><p>要指定年份和月份，使用 <code>-d</code> 选项，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal -d 1949-03</span></span>
<span class="line"><span>     March 1949</span></span>
<span class="line"><span>Su Mo Tu We Th Fr Sa</span></span>
<span class="line"><span>       1  2  3  4  5</span></span>
<span class="line"><span> 6  7  8  9 10 11 12</span></span>
<span class="line"><span>13 14 15 16 17 18 19</span></span>
<span class="line"><span>20 21 22 23 24 25 26</span></span>
<span class="line"><span>27 28 29 30 31</span></span></code></pre></div><p>另一个可能有用的日历选项是 <code>cal</code> 命令的 <code>-j</code> 选项。让我们来看看它显示的是什么。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal -j</span></span>
<span class="line"><span>        March 2018</span></span>
<span class="line"><span> Su  Mo  Tu  We  Th  Fr  Sa</span></span>
<span class="line"><span>                 60  61  62</span></span>
<span class="line"><span> 63  64  65  66  67  68  69</span></span>
<span class="line"><span> 70  71  72  73  74  75  76</span></span>
<span class="line"><span> 77  78  79  80  81  82  83</span></span>
<span class="line"><span> 84  85  86  87  88  89  90</span></span></code></pre></div><p>你可能会问：“什么鬼？？？” OK， <code>-j</code> 选项显示 Julian 日期 -- 一年中从 1 到 365 年的数字日期。所以，1 是 1 月 1 日，32 是 2 月 1 日。命令 <code>cal -j 2018</code> 将显示一整年的数字，像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal -j 2018 | tail -9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         November                     December</span></span>
<span class="line"><span> Su  Mo  Tu  We  Th  Fr  Sa   Su  Mo  Tu  We  Th  Fr  Sa</span></span>
<span class="line"><span>                305 306 307                          335</span></span>
<span class="line"><span>308 309 310 311 312 313 314  336 337 338 339 340 341 342</span></span>
<span class="line"><span>315 316 317 318 319 320 321  343 344 345 346 347 348 349</span></span>
<span class="line"><span>322 323 324 325 326 327 328  350 351 352 353 354 355 356</span></span>
<span class="line"><span>329 330 331 332 333 334      357 358 359 360 361 362 363</span></span>
<span class="line"><span>                             364 365</span></span></code></pre></div><p>这种显示可能有助于提醒你，自从你做了新年计划之后，你已经有多少天没有采取行动了。</p><p>运行类似的命令，对于 2020 年，你会注意到这是一个闰年：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal -j 2020 | tail -9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         November                     December</span></span>
<span class="line"><span> Su  Mo  Tu  We  Th  Fr  Sa   Su  Mo  Tu  We  Th  Fr  Sa</span></span>
<span class="line"><span>306 307 308 309 310 311 312          336 337 338 339 340</span></span>
<span class="line"><span>313 314 315 316 317 318 319  341 342 343 344 345 346 347</span></span>
<span class="line"><span>320 321 322 323 324 325 326  348 349 350 351 352 353 354</span></span>
<span class="line"><span>327 328 329 330 331 332 333  355 356 357 358 359 360 361</span></span>
<span class="line"><span>334 335                      362 363 364 365 366</span></span></code></pre></div><h3 id="calendar" tabindex="-1">calendar <a class="header-anchor" href="#calendar" aria-label="Permalink to “calendar”">​</a></h3><p>另一个有趣但潜在的令人沮丧的命令可以告诉你关于假期的事情，这个命令有很多选项，但我们这里介绍下你想看到即将到来的假期和值得注意的日历列表。日历的 <code>-l</code> 选项允许你选择今天想要查看的天数，因此 <code>0</code> 表示“仅限今天”。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ calendar -l 0</span></span>
<span class="line"><span>Mar 26  Benjamin Thompson born, 1753, Count Rumford; physicist</span></span>
<span class="line"><span>Mar 26  David Packard died, 1996; age of 83</span></span>
<span class="line"><span>Mar 26  Popeye statue unveiled, Crystal City TX Spinach Festival, 1937</span></span>
<span class="line"><span>Mar 26  Independence Day in Bangladesh</span></span>
<span class="line"><span>Mar 26  Prince Jonah Kuhio Kalanianaole Day in Hawaii</span></span>
<span class="line"><span>Mar 26* Seward&#39;s Day in Alaska (last Monday)</span></span>
<span class="line"><span>Mar 26  Emerson, Lake, and Palmer record &quot;Pictures at an Exhibition&quot; live, 1971</span></span>
<span class="line"><span>Mar 26  Ludwig van Beethoven dies in Vienna, Austria, 1827</span></span>
<span class="line"><span>Mar 26  Bonne fête aux Lara !</span></span>
<span class="line"><span>Mar 26  Aujourd&#39;hui, c&#39;est la St(e) Ludger.</span></span>
<span class="line"><span>Mar 26  N&#39;oubliez pas les Larissa !</span></span>
<span class="line"><span>Mar 26  Ludwig van Beethoven in Wien gestorben, 1827</span></span>
<span class="line"><span>Mar 26  Emánuel</span></span></code></pre></div><p>对于我们大多数人来说，这庆祝活动有点多。如果你看到类似这样的内容，可以将其归咎于你的 <code>calendar.all</code> 文件，该文件告诉系统你希望包含哪些国际日历。当然，你可以通过删除此文件中包含其他文件的一些行来削减此问题。文件看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;calendar.world&gt;</span></span>
<span class="line"><span>#include &lt;calendar.argentina&gt;</span></span>
<span class="line"><span>#include &lt;calendar.australia&gt;</span></span>
<span class="line"><span>#include &lt;calendar.belgium&gt;</span></span>
<span class="line"><span>#include &lt;calendar.birthday&gt;</span></span>
<span class="line"><span>#include &lt;calendar.christian&gt;</span></span>
<span class="line"><span>#include &lt;calendar.computer&gt;</span></span></code></pre></div><p>假设我们只通过移除除上面显示的第一个 <code>#include</code> 行之外的所有行，将我们的显示切换到世界日历。 我们会看到这个：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ calendar -l 0</span></span>
<span class="line"><span>Mar 26 Benjamin Thompson born, 1753, Count Rumford; physicist</span></span>
<span class="line"><span>Mar 26 David Packard died, 1996; age of 83</span></span>
<span class="line"><span>Mar 26 Popeye statue unveiled, Crystal City TX Spinach Festival, 1937</span></span>
<span class="line"><span>Mar 26 Independence Day in Bangladesh</span></span>
<span class="line"><span>Mar 26 Prince Jonah Kuhio Kalanianaole Day in Hawaii</span></span>
<span class="line"><span>Mar 26* Seward&#39;s Day in Alaska (last Monday)</span></span>
<span class="line"><span>Mar 26 Emerson, Lake, and Palmer record &quot;Pictures at an Exhibition&quot; live, 1971</span></span>
<span class="line"><span>Mar 26 Ludwig van Beethoven dies in Vienna, Austria, 1827</span></span></code></pre></div><p>显然，世界日历的特殊日子非常多。但是，像这样的展示可以让你不要忘记所有重要的“大力水手雕像”揭幕日以及在庆祝“世界菠菜之都”中它所扮演的角色。</p><p>更有用的日历选择可能是将与工作相关的日历放入特殊文件中，并在 <code>calendar.all</code> 文件中使用该日历来确定在运行命令时将看到哪些事件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /usr/share/calendar/calendar.all</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> * International and national calendar files</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * This is the calendar master file.  In the standard setup, it is</span></span>
<span class="line"><span> * included by /etc/calendar/default, so you can make any system-wide</span></span>
<span class="line"><span> * changes there and they will be kept when you upgrade.  If you want</span></span>
<span class="line"><span> * to edit this file, copy it into /etc/calendar/calendar.all and</span></span>
<span class="line"><span> * edit it there.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#ifndef _calendar_all_</span></span>
<span class="line"><span>#define _calendar_all_</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;calendar.usholiday&gt;</span></span>
<span class="line"><span>#include &lt;calendar.work&gt;			&lt;==</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif /* !_calendar_all_ */</span></span></code></pre></div><p>日历文件的格式非常简单 - <code>mm/dd</code> 格式日期，空格和事件描述。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat calendar.work</span></span>
<span class="line"><span>03/26   Describe how the cal and calendar commands work</span></span>
<span class="line"><span>03/27   Throw a party!</span></span></code></pre></div><h3 id="注意事项和怀旧" tabindex="-1">注意事项和怀旧 <a class="header-anchor" href="#注意事项和怀旧" aria-label="Permalink to “注意事项和怀旧”">​</a></h3><p>注意，有关日历的命令可能不适用于所有 Linux 发行版，你可能必须记住自己的“大力水手”雕像。</p>`,41)),l("p",null,[a[1]||(a[1]=s("如果你想知道，你可以显示一个日历，远至 9999 —— 即使是预言性的 ",-1)),p(n,{href:"https://www.youtube.com/watch?v=izQB2-Kmiic"},{default:e(()=>[...a[0]||(a[0]=[s("2525",-1)])]),_:1}),a[2]||(a[2]=s("。",-1))]),l("p",null,[a[5]||(a[5]=s("在 ",-1)),p(n,{href:"https://www.facebook.com/NetworkWorld/"},{default:e(()=>[...a[3]||(a[3]=[s("Facebook",-1)])]),_:1}),a[6]||(a[6]=s(" 和 ",-1)),p(n,{href:"https://www.linkedin.com/company/network-world"},{default:e(()=>[...a[4]||(a[4]=[s("LinkedIn",-1)])]),_:1}),a[7]||(a[7]=s(" 上加入网络社区，对那些重要的话题发表评论。",-1))]),a[24]||(a[24]=l("hr",null,null,-1)),l("p",null,[a[9]||(a[9]=s("via: ",-1)),p(n,{href:"https://www.networkworld.com/article/3265752/linux/working-with-calendars-on-linux.html"},{default:e(()=>[...a[8]||(a[8]=[s("https://www.networkworld.com/article/3265752/linux/working-with-calendars-on-linux.html",-1)])]),_:1})]),l("p",null,[a[14]||(a[14]=s("作者：",-1)),p(n,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...a[10]||(a[10]=[s("Sandra Henry-Stocker",-1)])]),_:1}),a[15]||(a[15]=s(" 选题：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...a[11]||(a[11]=[s("lujun9972",-1)])]),_:1}),a[16]||(a[16]=s(" 译者：",-1)),p(n,{href:"https://github.com/MjSeven"},{default:e(()=>[...a[12]||(a[12]=[s("MjSeven",-1)])]),_:1}),a[17]||(a[17]=s(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...a[13]||(a[13]=[s("wxy",-1)])]),_:1})]),l("p",null,[a[20]||(a[20]=s("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...a[18]||(a[18]=[s("LCTT",-1)])]),_:1}),a[21]||(a[21]=s(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...a[19]||(a[19]=[s("Linux中国",-1)])]),_:1}),a[22]||(a[22]=s(" 荣誉推出",-1))])])}const M=i(o,[["render",h]]);export{T as __pageData,M as default};
