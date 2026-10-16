import{_ as i,a0 as t,w as c,s as r,ao as d,I as l,x as s,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"在 Linux 命令列上使用日曆 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 命令列上使用日曆 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 命令列上使用日曆 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 命令列上使用日曆 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180326 Working with calendars on Linux","title":"在 Linux 命令列上使用日曆","tag":"201804","desc":""},"relativePath":"201804/20180326 Working with calendars on Linux.md","filePath":"[post].md"}'),o={name:"201804/20180326 Working with calendars on Linux.md"};function h(u,a,g,k,b,f){const n=t("Link");return c(),r("div",null,[a[23]||(a[23]=d(`<h1 id="在-linux-命令列上使用日曆" tabindex="-1">在 Linux 命令列上使用日曆 <a class="header-anchor" href="#在-linux-命令列上使用日曆" aria-label="Permalink to “在 Linux 命令列上使用日曆”">​</a></h1><blockquote><p>通過 Linux 上的日曆，不僅僅可以提醒你今天是星期幾。諸如 date、cal、 ncal 和 calendar 等命令可以提供很多有用信息。</p></blockquote><p><img src="https://images.idgesg.net/images/article/2018/03/calendars-100753173-large.jpg" alt=""></p><p>Linux 系統可以為你的日程安排提供更多幫助，而不僅僅是提醒你今天是星期幾。日曆顯示有很多選項 —— 有些可能很有幫助，有些可能會讓你大開眼界。</p><h3 id="日期" tabindex="-1">日期 <a class="header-anchor" href="#日期" aria-label="Permalink to “日期”">​</a></h3><p>首先，你可能知道可以使用 <code>date</code> 命令顯示當前日期。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ date</span></span>
<span class="line"><span>Mon Mar 26 08:01:41 EDT 2018</span></span></code></pre></div><h3 id="cal-和-ncal" tabindex="-1">cal 和 ncal <a class="header-anchor" href="#cal-和-ncal" aria-label="Permalink to “cal 和 ncal”">​</a></h3><p>你可以使用 <code>cal</code> 命令顯示整個月份。沒有參數時，<code>cal</code> 顯示當前月份，默認情況下，通過反轉前景色和背景顏色來突出顯示當天。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal</span></span>
<span class="line"><span>     March 2018</span></span>
<span class="line"><span>Su Mo Tu We Th Fr Sa</span></span>
<span class="line"><span>             1  2  3</span></span>
<span class="line"><span> 4  5  6  7  8  9 10</span></span>
<span class="line"><span>11 12 13 14 15 16 17</span></span>
<span class="line"><span>18 19 20 21 22 23 24</span></span>
<span class="line"><span>25 26 27 28 29 30 31</span></span></code></pre></div><p>如果你想以“橫向”格式顯示當前月份，則可以使用 <code>ncal</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ncal</span></span>
<span class="line"><span>    March 2018</span></span>
<span class="line"><span>Su     4 11 18 25</span></span>
<span class="line"><span>Mo     5 12 19 26</span></span>
<span class="line"><span>Tu     6 13 20 27</span></span>
<span class="line"><span>We     7 14 21 28</span></span>
<span class="line"><span>Th  1  8 15 22 29</span></span>
<span class="line"><span>Fr  2  9 16 23 30</span></span>
<span class="line"><span>Sa  3 10 17 24 31</span></span></code></pre></div><p>例如，如果你只想查看特定周幾的日期，這個命令可能特別有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ncal | grep Th</span></span>
<span class="line"><span>Th  1  8 15 22 29</span></span></code></pre></div><p><code>ncal</code> 命令還可以以“橫向”格式顯示一整年，只需在命令後提供年份。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ncal 2018</span></span>
<span class="line"><span>                                  2018</span></span>
<span class="line"><span>    January           February          March             April</span></span>
<span class="line"><span>Su     7 14 21 28        4 11 18 25        4 11 18 25     1  8 15 22 29</span></span>
<span class="line"><span>Mo  1  8 15 22 29        5 12 19 26        5 12 19 26     2  9 16 23 30</span></span>
<span class="line"><span>Tu  2  9 16 23 30        6 13 20 27        6 13 20 27     3 10 17 24</span></span>
<span class="line"><span>We  3 10 17 24 31        7 14 21 28        7 14 21 28     4 11 18 25</span></span>
<span class="line"><span>Th  4 11 18 25        1  8 15 22        1  8 15 22 29     5 12 19 26</span></span>
<span class="line"><span>Fr  5 12 19 26        2  9 16 23        2  9 16 23 30     6 13 20 27</span></span>
<span class="line"><span>Sa  6 13 20 27        3 10 17 24        3 10 17 24 31     7 14 21 28</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>你也可以使用 <code>cal</code> 命令顯示一整年。請記住，你需要輸入年份的四位數字。如果你輸入 <code>cal 18</code>，你將獲得公元 18 年的歷年，而不是 2018 年。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal 2018</span></span>
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
<span class="line"><span>                                            30 31</span></span></code></pre></div><p>要指定年份和月份，使用 <code>-d</code> 選項，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal -d 1949-03</span></span>
<span class="line"><span>     March 1949</span></span>
<span class="line"><span>Su Mo Tu We Th Fr Sa</span></span>
<span class="line"><span>       1  2  3  4  5</span></span>
<span class="line"><span> 6  7  8  9 10 11 12</span></span>
<span class="line"><span>13 14 15 16 17 18 19</span></span>
<span class="line"><span>20 21 22 23 24 25 26</span></span>
<span class="line"><span>27 28 29 30 31</span></span></code></pre></div><p>另一個可能有用的日曆選項是 <code>cal</code> 命令的 <code>-j</code> 選項。讓我們來看看它顯示的是什麼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal -j</span></span>
<span class="line"><span>        March 2018</span></span>
<span class="line"><span> Su  Mo  Tu  We  Th  Fr  Sa</span></span>
<span class="line"><span>                 60  61  62</span></span>
<span class="line"><span> 63  64  65  66  67  68  69</span></span>
<span class="line"><span> 70  71  72  73  74  75  76</span></span>
<span class="line"><span> 77  78  79  80  81  82  83</span></span>
<span class="line"><span> 84  85  86  87  88  89  90</span></span></code></pre></div><p>你可能會問：“什麼鬼？？？” OK， <code>-j</code> 選項顯示 Julian 日期 -- 一年中從 1 到 365 年的數字日期。所以，1 是 1 月 1 日，32 是 2 月 1 日。命令 <code>cal -j 2018</code> 將顯示一整年的數字，像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal -j 2018 | tail -9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         November                     December</span></span>
<span class="line"><span> Su  Mo  Tu  We  Th  Fr  Sa   Su  Mo  Tu  We  Th  Fr  Sa</span></span>
<span class="line"><span>                305 306 307                          335</span></span>
<span class="line"><span>308 309 310 311 312 313 314  336 337 338 339 340 341 342</span></span>
<span class="line"><span>315 316 317 318 319 320 321  343 344 345 346 347 348 349</span></span>
<span class="line"><span>322 323 324 325 326 327 328  350 351 352 353 354 355 356</span></span>
<span class="line"><span>329 330 331 332 333 334      357 358 359 360 361 362 363</span></span>
<span class="line"><span>                             364 365</span></span></code></pre></div><p>這種顯示可能有助於提醒你，自從你做了新年計劃之後，你已經有多少天沒有采取行動了。</p><p>運行類似的命令，對於 2020 年，你會注意到這是一個閏年：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cal -j 2020 | tail -9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         November                     December</span></span>
<span class="line"><span> Su  Mo  Tu  We  Th  Fr  Sa   Su  Mo  Tu  We  Th  Fr  Sa</span></span>
<span class="line"><span>306 307 308 309 310 311 312          336 337 338 339 340</span></span>
<span class="line"><span>313 314 315 316 317 318 319  341 342 343 344 345 346 347</span></span>
<span class="line"><span>320 321 322 323 324 325 326  348 349 350 351 352 353 354</span></span>
<span class="line"><span>327 328 329 330 331 332 333  355 356 357 358 359 360 361</span></span>
<span class="line"><span>334 335                      362 363 364 365 366</span></span></code></pre></div><h3 id="calendar" tabindex="-1">calendar <a class="header-anchor" href="#calendar" aria-label="Permalink to “calendar”">​</a></h3><p>另一個有趣但潛在的令人沮喪的命令可以告訴你關於假期的事情，這個命令有很多選項，但我們這裏介紹下你想看到即將到來的假期和值得注意的日曆列表。日曆的 <code>-l</code> 選項允許你選擇今天想要查看的天數，因此 <code>0</code> 表示“僅限今天”。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ calendar -l 0</span></span>
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
<span class="line"><span>Mar 26  Emánuel</span></span></code></pre></div><p>對於我們大多數人來説，這慶祝活動有點多。如果你看到類似這樣的內容，可以將其歸咎於你的 <code>calendar.all</code> 文件，該文件告訴系統你希望包含哪些國際日曆。當然，你可以通過刪除此文件中包含其他文件的一些行來削減此問題。文件看起來像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;calendar.world&gt;</span></span>
<span class="line"><span>#include &lt;calendar.argentina&gt;</span></span>
<span class="line"><span>#include &lt;calendar.australia&gt;</span></span>
<span class="line"><span>#include &lt;calendar.belgium&gt;</span></span>
<span class="line"><span>#include &lt;calendar.birthday&gt;</span></span>
<span class="line"><span>#include &lt;calendar.christian&gt;</span></span>
<span class="line"><span>#include &lt;calendar.computer&gt;</span></span></code></pre></div><p>假設我們只通過移除除上面顯示的第一個 <code>#include</code> 行之外的所有行，將我們的顯示切換到世界日曆。 我們會看到這個：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ calendar -l 0</span></span>
<span class="line"><span>Mar 26 Benjamin Thompson born, 1753, Count Rumford; physicist</span></span>
<span class="line"><span>Mar 26 David Packard died, 1996; age of 83</span></span>
<span class="line"><span>Mar 26 Popeye statue unveiled, Crystal City TX Spinach Festival, 1937</span></span>
<span class="line"><span>Mar 26 Independence Day in Bangladesh</span></span>
<span class="line"><span>Mar 26 Prince Jonah Kuhio Kalanianaole Day in Hawaii</span></span>
<span class="line"><span>Mar 26* Seward&#39;s Day in Alaska (last Monday)</span></span>
<span class="line"><span>Mar 26 Emerson, Lake, and Palmer record &quot;Pictures at an Exhibition&quot; live, 1971</span></span>
<span class="line"><span>Mar 26 Ludwig van Beethoven dies in Vienna, Austria, 1827</span></span></code></pre></div><p>顯然，世界日曆的特殊日子非常多。但是，像這樣的展示可以讓你不要忘記所有重要的“大力水手雕像”揭幕日以及在慶祝“世界菠菜之都”中它所扮演的角色。</p><p>更有用的日曆選擇可能是將與工作相關的日曆放入特殊文件中，並在 <code>calendar.all</code> 文件中使用該日曆來確定在運行命令時將看到哪些事件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /usr/share/calendar/calendar.all</span></span>
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
<span class="line"><span>#endif /* !_calendar_all_ */</span></span></code></pre></div><p>日曆文件的格式非常簡單 - <code>mm/dd</code> 格式日期，空格和事件描述。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat calendar.work</span></span>
<span class="line"><span>03/26   Describe how the cal and calendar commands work</span></span>
<span class="line"><span>03/27   Throw a party!</span></span></code></pre></div><h3 id="注意事項和懷舊" tabindex="-1">注意事項和懷舊 <a class="header-anchor" href="#注意事項和懷舊" aria-label="Permalink to “注意事項和懷舊”">​</a></h3><p>注意，有關日曆的命令可能不適用於所有 Linux 發行版，你可能必須記住自己的“大力水手”雕像。</p>`,41)),l("p",null,[a[1]||(a[1]=s("如果你想知道，你可以顯示一個日曆，遠至 9999 —— 即使是預言性的 ",-1)),p(n,{href:"https://www.youtube.com/watch?v=izQB2-Kmiic"},{default:e(()=>[...a[0]||(a[0]=[s("2525",-1)])]),_:1}),a[2]||(a[2]=s("。",-1))]),l("p",null,[a[5]||(a[5]=s("在 ",-1)),p(n,{href:"https://www.facebook.com/NetworkWorld/"},{default:e(()=>[...a[3]||(a[3]=[s("Facebook",-1)])]),_:1}),a[6]||(a[6]=s(" 和 ",-1)),p(n,{href:"https://www.linkedin.com/company/network-world"},{default:e(()=>[...a[4]||(a[4]=[s("LinkedIn",-1)])]),_:1}),a[7]||(a[7]=s(" 上加入網絡社區，對那些重要的話題發表評論。",-1))]),a[24]||(a[24]=l("hr",null,null,-1)),l("p",null,[a[9]||(a[9]=s("via: ",-1)),p(n,{href:"https://www.networkworld.com/article/3265752/linux/working-with-calendars-on-linux.html"},{default:e(()=>[...a[8]||(a[8]=[s("https://www.networkworld.com/article/3265752/linux/working-with-calendars-on-linux.html",-1)])]),_:1})]),l("p",null,[a[14]||(a[14]=s("作者：",-1)),p(n,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...a[10]||(a[10]=[s("Sandra Henry-Stocker",-1)])]),_:1}),a[15]||(a[15]=s(" 選題：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...a[11]||(a[11]=[s("lujun9972",-1)])]),_:1}),a[16]||(a[16]=s(" 譯者：",-1)),p(n,{href:"https://github.com/MjSeven"},{default:e(()=>[...a[12]||(a[12]=[s("MjSeven",-1)])]),_:1}),a[17]||(a[17]=s(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...a[13]||(a[13]=[s("wxy",-1)])]),_:1})]),l("p",null,[a[20]||(a[20]=s("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...a[18]||(a[18]=[s("LCTT",-1)])]),_:1}),a[21]||(a[21]=s(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...a[19]||(a[19]=[s("Linux中國",-1)])]),_:1}),a[22]||(a[22]=s(" 榮譽推出",-1))])])}const M=i(o,[["render",h]]);export{T as __pageData,M as default};
