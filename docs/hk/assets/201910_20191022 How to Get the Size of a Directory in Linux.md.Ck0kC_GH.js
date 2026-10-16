import{_ as o,a0 as t,w as l,s as d,I as n,x as e,a1 as p,A as i,ao as h}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"如何獲取 Linux 中的目錄大小 | LCTT x X-CMD","titleTemplate":false,"description":"如何獲取 Linux 中的目錄大小 | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何獲取 Linux 中的目錄大小 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何獲取 Linux 中的目錄大小 | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20191022 How to Get the Size of a Directory in Linux","title":"如何獲取 Linux 中的目錄大小","tag":"201910","desc":""},"relativePath":"201910/20191022 How to Get the Size of a Directory in Linux.md","filePath":"[post].md"}'),u={name:"201910/20191022 How to Get the Size of a Directory in Linux.md"};function r(m,s,g,k,c,y){const a=t("Link");return l(),d("div",null,[s[27]||(s[27]=n("h1",{id:"如何獲取-linux-中的目錄大小",tabindex:"-1"},[e("如何獲取 Linux 中的目錄大小 "),n("a",{class:"header-anchor",href:"#如何獲取-linux-中的目錄大小","aria-label":"Permalink to “如何獲取 Linux 中的目錄大小”"},"​")],-1)),n("p",null,[s[1]||(s[1]=e("你應該已經注意到，在 Linux 中使用 ",-1)),p(a,{href:"https://www.2daygeek.com/linux-unix-ls-command-display-directory-contents/"},{default:i(()=>[...s[0]||(s[0]=[e("ls 命令",-1)])]),_:1}),s[2]||(s[2]=e(" 列出的目錄內容中，目錄的大小僅顯示 4KB。這個大小正確嗎？如果不正確，那它代表什麼，又該如何獲取 Linux 中的目錄或文件夾大小？這是一個默認的大小，是用來存儲磁盤上存儲目錄的元數據的大小。",-1))]),n("p",null,[s[4]||(s[4]=e("Linux 上有一些應用程序可以 ",-1)),p(a,{href:"https://www.2daygeek.com/how-to-get-find-size-of-directory-folder-linux/"},{default:i(()=>[...s[3]||(s[3]=[e("獲取目錄的實際大小",-1)])]),_:1}),s[5]||(s[5]=e("。其中，磁盤使用率（",-1)),s[6]||(s[6]=n("code",null,"du",-1)),s[7]||(s[7]=e("）命令已被 Linux 管理員廣泛使用。",-1))]),s[28]||(s[28]=n("p",null,"我將向您展示如何使用各種選項獲取文件夾大小。",-1)),s[29]||(s[29]=n("h3",{id:"什麼是-du-命令",tabindex:"-1"},[e("什麼是 du 命令? "),n("a",{class:"header-anchor",href:"#什麼是-du-命令","aria-label":"Permalink to “什麼是 du 命令?”"},"​")],-1)),n("p",null,[p(a,{href:"https://www.2daygeek.com/linux-check-disk-usage-files-directories-size-du-command/"},{default:i(()=>[...s[8]||(s[8]=[e("du 命令",-1)])]),_:1}),s[9]||(s[9]=e(" 表示 ",-1)),s[10]||(s[10]=n("ruby",null,[e("磁盤使用率"),n("rt",null,"Disk Usage")],-1)),s[11]||(s[11]=e("。這是一個標準的 Unix 程序，用於估計當前工作目錄中的文件空間使用情況。",-1))]),s[30]||(s[30]=h(`<p>它使用遞歸方式總結磁盤使用情況，以獲取目錄及其子目錄的大小。</p><p>如同我説的那樣, 使用 <code>ls</code> 命令時，目錄大小僅顯示 4KB。參見下面的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -lh | grep ^d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>drwxr-xr-x  3 daygeek daygeek 4.0K Aug  2 13:57 Bank_Details</span></span>
<span class="line"><span>drwxr-xr-x  2 daygeek daygeek 4.0K Mar 15  2019 daygeek</span></span>
<span class="line"><span>drwxr-xr-x  6 daygeek daygeek 4.0K Feb 16  2019 drive-2daygeek</span></span>
<span class="line"><span>drwxr-xr-x 13 daygeek daygeek 4.0K Jan  6  2019 drive-mageshm</span></span>
<span class="line"><span>drwxr-xr-x 15 daygeek daygeek 4.0K Sep 29 21:32 Thanu_Photos</span></span></code></pre></div><h3 id="_1-在-linux-上如何只獲取父目錄的大小" tabindex="-1">1) 在 Linux 上如何只獲取父目錄的大小 <a class="header-anchor" href="#_1-在-linux-上如何只獲取父目錄的大小" aria-label="Permalink to “1) 在 Linux 上如何只獲取父目錄的大小”">​</a></h3><p>使用以下 <code>du</code> 命令格式獲取給定目錄的總大小。在該示例中，我們將得到 <code>/home/daygeek/Documents</code> 目錄的總大小。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ du -hs /home/daygeek/Documents</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>$ du -h --max-depth=0 /home/daygeek/Documents/</span></span>
<span class="line"><span>20G    /home/daygeek/Documents</span></span></code></pre></div><p>詳細説明：</p><ul><li><code>du</code> – 這是一個命令</li><li><code>-h</code> – 以易讀的格式顯示大小 (例如 1K 234M 2G)</li><li><code>-s</code> – 僅顯示每個參數的總數</li><li><code>--max-depth=N</code> – 目錄的打印深度</li></ul><h3 id="_2-在-linux-上如何獲取每個目錄的大小" tabindex="-1">2) 在 Linux 上如何獲取每個目錄的大小 <a class="header-anchor" href="#_2-在-linux-上如何獲取每個目錄的大小" aria-label="Permalink to “2) 在 Linux 上如何獲取每個目錄的大小”">​</a></h3><p>使用以下 <code>du</code> 命令格式獲取每個目錄（包括子目錄）的總大小。</p><p>在該示例中，我們將獲得每個 <code>/home/daygeek/Documents</code> 目錄及其子目錄的總大小。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ du -h /home/daygeek/Documents/ | sort -rh | head -20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>20G    /home/daygeek/Documents/</span></span>
<span class="line"><span>9.6G    /home/daygeek/Documents/drive-2daygeek</span></span>
<span class="line"><span>6.3G    /home/daygeek/Documents/Thanu_Photos</span></span>
<span class="line"><span>5.3G    /home/daygeek/Documents/Thanu_Photos/Camera</span></span>
<span class="line"><span>5.3G    /home/daygeek/Documents/drive-2daygeek/Thanu-videos</span></span>
<span class="line"><span>3.2G    /home/daygeek/Documents/drive-mageshm</span></span>
<span class="line"><span>2.3G    /home/daygeek/Documents/drive-2daygeek/Thanu-Photos</span></span>
<span class="line"><span>2.2G    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month</span></span>
<span class="line"><span>916M    /home/daygeek/Documents/drive-mageshm/Tanisha</span></span>
<span class="line"><span>454M    /home/daygeek/Documents/drive-mageshm/2g-backup</span></span>
<span class="line"><span>415M    /home/daygeek/Documents/Thanu_Photos/WhatsApp Video</span></span>
<span class="line"><span>300M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Jan-2017</span></span>
<span class="line"><span>288M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Oct-2017</span></span>
<span class="line"><span>226M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Sep-2017</span></span>
<span class="line"><span>219M    /home/daygeek/Documents/Thanu_Photos/WhatsApp Documents</span></span>
<span class="line"><span>213M    /home/daygeek/Documents/drive-mageshm/photos</span></span>
<span class="line"><span>163M    /home/daygeek/Documents/Thanu_Photos/WhatsApp Video/Sent</span></span>
<span class="line"><span>161M    /home/daygeek/Documents/Thanu_Photos/WhatsApp Images</span></span>
<span class="line"><span>154M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/June-2017</span></span>
<span class="line"><span>150M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Nov-2016</span></span></code></pre></div><h3 id="_3-在-linux-上如何獲取每個目錄的摘要" tabindex="-1">3) 在 Linux 上如何獲取每個目錄的摘要 <a class="header-anchor" href="#_3-在-linux-上如何獲取每個目錄的摘要" aria-label="Permalink to “3) 在 Linux 上如何獲取每個目錄的摘要”">​</a></h3><p>使用如下 <code>du</code> 命令格式僅獲取每個目錄的摘要。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ du -hs /home/daygeek/Documents/* | sort -rh | head -10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9.6G    /home/daygeek/Documents/drive-2daygeek</span></span>
<span class="line"><span>6.3G    /home/daygeek/Documents/Thanu_Photos</span></span>
<span class="line"><span>3.2G    /home/daygeek/Documents/drive-mageshm</span></span>
<span class="line"><span>756K    /home/daygeek/Documents/Bank_Details</span></span>
<span class="line"><span>272K    /home/daygeek/Documents/user-friendly-zorin-os-15-has-been-released-TouchInterface1.png</span></span>
<span class="line"><span>172K    /home/daygeek/Documents/user-friendly-zorin-os-15-has-been-released-NightLight.png</span></span>
<span class="line"><span>164K    /home/daygeek/Documents/ConfigServer Security and Firewall (csf) Cheat Sheet.pdf</span></span>
<span class="line"><span>132K    /home/daygeek/Documents/user-friendly-zorin-os-15-has-been-released-Todo.png</span></span>
<span class="line"><span>112K    /home/daygeek/Documents/user-friendly-zorin-os-15-has-been-released-ZorinAutoTheme.png</span></span>
<span class="line"><span>96K    /home/daygeek/Documents/distro-info.xlsx</span></span></code></pre></div><h3 id="_4-在-linux-上如何獲取每個目錄的不含子目錄的大小" tabindex="-1">4) 在 Linux 上如何獲取每個目錄的不含子目錄的大小 <a class="header-anchor" href="#_4-在-linux-上如何獲取每個目錄的不含子目錄的大小" aria-label="Permalink to “4) 在 Linux 上如何獲取每個目錄的不含子目錄的大小”">​</a></h3><p>使用如下 <code>du</code> 命令格式來展示每個目錄的總大小，不包括子目錄。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ du -hS /home/daygeek/Documents/ | sort -rh | head -20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.3G    /home/daygeek/Documents/Thanu_Photos/Camera</span></span>
<span class="line"><span>5.3G    /home/daygeek/Documents/drive-2daygeek/Thanu-videos</span></span>
<span class="line"><span>2.3G    /home/daygeek/Documents/drive-2daygeek/Thanu-Photos</span></span>
<span class="line"><span>1.5G    /home/daygeek/Documents/drive-mageshm</span></span>
<span class="line"><span>831M    /home/daygeek/Documents/drive-mageshm/Tanisha</span></span>
<span class="line"><span>454M    /home/daygeek/Documents/drive-mageshm/2g-backup</span></span>
<span class="line"><span>300M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Jan-2017</span></span>
<span class="line"><span>288M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Oct-2017</span></span>
<span class="line"><span>253M    /home/daygeek/Documents/Thanu_Photos/WhatsApp Video</span></span>
<span class="line"><span>226M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Sep-2017</span></span>
<span class="line"><span>219M    /home/daygeek/Documents/Thanu_Photos/WhatsApp Documents</span></span>
<span class="line"><span>213M    /home/daygeek/Documents/drive-mageshm/photos</span></span>
<span class="line"><span>163M    /home/daygeek/Documents/Thanu_Photos/WhatsApp Video/Sent</span></span>
<span class="line"><span>154M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/June-2017</span></span>
<span class="line"><span>150M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Nov-2016</span></span>
<span class="line"><span>127M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Dec-2016</span></span>
<span class="line"><span>100M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Oct-2016</span></span>
<span class="line"><span>94M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Nov-2017</span></span>
<span class="line"><span>92M    /home/daygeek/Documents/Thanu_Photos/WhatsApp Images</span></span>
<span class="line"><span>90M    /home/daygeek/Documents/drive-2daygeek/Thanu-photos-by-month/Dec-2017</span></span></code></pre></div><h3 id="_5-在-linux-上如何僅獲取一級子目錄的大小" tabindex="-1">5) 在 Linux 上如何僅獲取一級子目錄的大小 <a class="header-anchor" href="#_5-在-linux-上如何僅獲取一級子目錄的大小" aria-label="Permalink to “5) 在 Linux 上如何僅獲取一級子目錄的大小”">​</a></h3><p>如果要獲取 Linux 上給定目錄的一級子目錄（包括其子目錄）的大小，請使用以下命令格式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ du -h --max-depth=1 /home/daygeek/Documents/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.2G    /home/daygeek/Documents/drive-mageshm</span></span>
<span class="line"><span>4.0K    /home/daygeek/Documents/daygeek</span></span>
<span class="line"><span>756K    /home/daygeek/Documents/Bank_Details</span></span>
<span class="line"><span>9.6G    /home/daygeek/Documents/drive-2daygeek</span></span>
<span class="line"><span>6.3G    /home/daygeek/Documents/Thanu_Photos</span></span>
<span class="line"><span>20G    /home/daygeek/Documents/</span></span></code></pre></div><h3 id="_6-如何在-du-命令輸出中獲得總計" tabindex="-1">6) 如何在 du 命令輸出中獲得總計 <a class="header-anchor" href="#_6-如何在-du-命令輸出中獲得總計" aria-label="Permalink to “6) 如何在 du 命令輸出中獲得總計”">​</a></h3><p>如果要在 <code>du</code> 命令輸出中獲得總計，請使用以下 <code>du</code> 命令格式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ du -hsc /home/daygeek/Documents/* | sort -rh | head -10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>20G    total</span></span>
<span class="line"><span>9.6G    /home/daygeek/Documents/drive-2daygeek</span></span>
<span class="line"><span>6.3G    /home/daygeek/Documents/Thanu_Photos</span></span>
<span class="line"><span>3.2G    /home/daygeek/Documents/drive-mageshm</span></span>
<span class="line"><span>756K    /home/daygeek/Documents/Bank_Details</span></span>
<span class="line"><span>272K    /home/daygeek/Documents/user-friendly-zorin-os-15-has-been-released-TouchInterface1.png</span></span>
<span class="line"><span>172K    /home/daygeek/Documents/user-friendly-zorin-os-15-has-been-released-NightLight.png</span></span>
<span class="line"><span>164K    /home/daygeek/Documents/ConfigServer Security and Firewall (csf) Cheat Sheet.pdf</span></span>
<span class="line"><span>132K    /home/daygeek/Documents/user-friendly-zorin-os-15-has-been-released-Todo.png</span></span>
<span class="line"><span>112K    /home/daygeek/Documents/user-friendly-zorin-os-15-has-been-released-ZorinAutoTheme.png</span></span></code></pre></div><hr>`,25)),n("p",null,[s[13]||(s[13]=e("via: ",-1)),p(a,{href:"https://www.2daygeek.com/find-get-size-of-directory-folder-linux-disk-usage-du-command/"},{default:i(()=>[...s[12]||(s[12]=[e("https://www.2daygeek.com/find-get-size-of-directory-folder-linux-disk-usage-du-command/",-1)])]),_:1})]),n("p",null,[s[18]||(s[18]=e("作者：",-1)),p(a,{href:"https://www.2daygeek.com/author/magesh/"},{default:i(()=>[...s[14]||(s[14]=[e("Magesh Maruthamuthu",-1)])]),_:1}),s[19]||(s[19]=e(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[15]||(s[15]=[e("lujun9972",-1)])]),_:1}),s[20]||(s[20]=e(" 譯者：",-1)),p(a,{href:"https://github.com/lnrCoder"},{default:i(()=>[...s[16]||(s[16]=[e("lnrCoder",-1)])]),_:1}),s[21]||(s[21]=e(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[17]||(s[17]=[e("wxy",-1)])]),_:1})]),n("p",null,[s[24]||(s[24]=e("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[22]||(s[22]=[e("LCTT",-1)])]),_:1}),s[25]||(s[25]=e(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:i(()=>[...s[23]||(s[23]=[e("Linux中國",-1)])]),_:1}),s[26]||(s[26]=e(" 榮譽推出",-1))])])}const f=o(u,[["render",r]]);export{x as __pageData,f as default};
