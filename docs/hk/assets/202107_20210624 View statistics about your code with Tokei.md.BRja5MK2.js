import{_ as i,a0 as t,w as o,s as r,I as a,x as n,a1 as e,A as l,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"使用 Tokei 查看有關代碼的統計信息 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Tokei 查看有關代碼的統計信息 | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Tokei 查看有關代碼的統計信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Tokei 查看有關代碼的統計信息 | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20210624 View statistics about your code with Tokei","title":"使用 Tokei 查看有關代碼的統計信息","tag":"202107","desc":""},"relativePath":"202107/20210624 View statistics about your code with Tokei.md","filePath":"[post].md"}'),d={name:"202107/20210624 View statistics about your code with Tokei.md"};function k(c,s,g,h,m,f){const p=t("Link");return o(),r("div",null,[s[34]||(s[34]=a("h1",{id:"使用-tokei-查看有關代碼的統計信息",tabindex:"-1"},[n("使用 Tokei 查看有關代碼的統計信息 "),a("a",{class:"header-anchor",href:"#使用-tokei-查看有關代碼的統計信息","aria-label":"Permalink to “使用 Tokei 查看有關代碼的統計信息”"},"​")],-1)),s[35]||(s[35]=a("blockquote",null,[a("p",null,"瞭解有關項目編程語言的詳細信息。")],-1)),s[36]||(s[36]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202107/06/114306ar6zjnrr92rn2vnz.jpg",alt:""})],-1)),s[37]||(s[37]=a("p",null,"近來，GitHub 添加了一個小指標來展示項目的細節，包括項目使用的編程語言。在這之前，對一個新的貢獻者來説，瞭解他們感興趣的項目的信息是較為困難的。",-1)),a("p",null,[s[1]||(s[1]=n("這個補充很有幫助，但是如果您想知道有關本地存儲庫中項目的相同信息該怎麼辦呢？ 這正是 ",-1)),e(p,{href:"https://github.com/XAMPPRocky/tokei"},{default:l(()=>[...s[0]||(s[0]=[n("Tokei",-1)])]),_:1}),s[2]||(s[2]=n(" 派上用場的地方。這是一個當你想和精通不同語言的人想要構建一個項目時可以告訴你項目的代碼數據的特別有用的工具。",-1))]),s[38]||(s[38]=a("h3",{id:"探索-tokei",tabindex:"-1"},[n("探索 Tokei "),a("a",{class:"header-anchor",href:"#探索-tokei","aria-label":"Permalink to “探索 Tokei”"},"​")],-1)),a("p",null,[s[5]||(s[5]=n("據其 ",-1)),e(p,{href:"https://github.com/XAMPPRocky/tokei/blob/master/README.md"},{default:l(()=>[...s[3]||(s[3]=[n("README",-1)])]),_:1}),s[6]||(s[6]=n("，“Tokei 是一個可以展示你的代碼數據的程序。Tokei 將會展示文件的數量，和這些文件中不同語言的代碼、註釋、空白的行數。”它的 v.12.1.0 版本 ",-1)),e(p,{href:"https://github.com/XAMPPRocky/tokei/releases/tag/v12.1.0"},{default:l(()=>[...s[4]||(s[4]=[n("elaborates",-1)])]),_:1}),s[7]||(s[7]=n(" 是這樣子介紹的，“Tokei 是一個快速準確的代碼分析 CLI 工具和庫，可以使你輕鬆快速地在你的代碼庫中看到有多少空白、評論和代碼行”。它能夠識別超過 150 種編程語言。",-1))]),s[39]||(s[39]=u(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./tokei ~/exa/src ~/Work/wildfly/jaxrs</span></span>
<span class="line"><span>==================</span></span>
<span class="line"><span>Language   Files Lines Code Comments Blank</span></span>
<span class="line"><span>Java        46    6135  4324  945     632</span></span>
<span class="line"><span>XML         23    5211  4839  473     224</span></span>
<span class="line"><span>---------------------------------</span></span>
<span class="line"><span>Rust</span></span>
<span class="line"><span>Markdown</span></span>
<span class="line"><span>-----------------------------------</span></span>
<span class="line"><span>Total</span></span></code></pre></div><h3 id="安裝-tokei" tabindex="-1">安裝 Tokei <a class="header-anchor" href="#安裝-tokei" aria-label="Permalink to “安裝 Tokei”">​</a></h3><p>在 Fedora 上安裝 Tokei：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install tokei</span></span></code></pre></div><p>用 Rust&#39;s Cargo 包管理器安裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo install tokei</span></span></code></pre></div><h3 id="使用-tokei" tabindex="-1">使用 Tokei <a class="header-anchor" href="#使用-tokei" aria-label="Permalink to “使用 Tokei”">​</a></h3><p>要列出當前目錄中的代碼統計：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tokei</span></span>
<span class="line"><span>===============================================================================</span></span>
<span class="line"><span> Language            Files        Lines         Code     Comments       Blanks</span></span>
<span class="line"><span>===============================================================================</span></span>
<span class="line"><span> Ada                    10         2840         1681          560          599</span></span>
<span class="line"><span> Assembly                4         2508         1509          458          541</span></span>
<span class="line"><span> GNU Style Assembly      4         2751         1528          748          475</span></span>
<span class="line"><span> Autoconf               16         2294         1153          756          385</span></span>
<span class="line"><span> Automake                1           45           34            0           11</span></span>
<span class="line"><span> BASH                    4         1895         1602          133          160</span></span>
<span class="line"><span> Batch                   2            4            4            0            0</span></span>
<span class="line"><span> C                     330       206433       150241        23402        32790</span></span>
<span class="line"><span> C Header              342        60941        24682        29143         7116</span></span>
<span class="line"><span> CMake                  48         4572         3459          548          565</span></span>
<span class="line"><span> C#                      9         1615          879          506          230</span></span>
<span class="line"><span> C++                     5          907          599          136          172</span></span>
<span class="line"><span> Dockerfile              2           16           10            0            6</span></span>
<span class="line"><span> Fish                    1           87           77            5            5</span></span>
<span class="line"><span> HTML                    1          545          544            1            0</span></span>
<span class="line"><span> JSON                    5         8995         8995            0            0</span></span>
<span class="line"><span> Makefile               10          504          293           72          139</span></span>
<span class="line"><span> Module-Definition      12         1183         1046           65           72</span></span>
<span class="line"><span> MSBuild                 1          141          140            0            1</span></span>
<span class="line"><span> Pascal                  4         1443         1016          216          211</span></span>
<span class="line"><span> Perl                    2          189          137           16           36</span></span>
<span class="line"><span> Python                  4         1257          949          112          196</span></span>
<span class="line"><span> Ruby                    1           23           18            1            4</span></span>
<span class="line"><span> Shell                  15         1860         1411          222          227</span></span>
<span class="line"><span> Plain Text             35        29425            0        26369         3056</span></span>
<span class="line"><span> TOML                   64         3180         2302          453          425</span></span>
<span class="line"><span> Visual Studio Pro|     30        14597        14597            0            0</span></span>
<span class="line"><span> Visual Studio Sol|      6          655          650            0            5</span></span>
<span class="line"><span> XML                     1          116           95           17            4</span></span>
<span class="line"><span> YAML                    2           81           56           12           13</span></span>
<span class="line"><span> Zsh                     1           59           48            8            3</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span> Markdown               55         4677            0         3214         1463</span></span>
<span class="line"><span> |- C                    1            2            2            0            0</span></span>
<span class="line"><span> |- Rust                19          336          268           20           48</span></span>
<span class="line"><span> |- TOML                23           61           60            0            1</span></span>
<span class="line"><span> (Total)                           5076          330         3234         1512</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span> Rust                  496       210966       188958         5348        16660</span></span>
<span class="line"><span> |- Markdown           249        17676         1551        12502         3623</span></span>
<span class="line"><span> (Total)                         228642       190509        17850        20283</span></span>
<span class="line"><span>===============================================================================</span></span>
<span class="line"><span> Total                1523       566804       408713        92521        65570</span></span>
<span class="line"><span>===============================================================================</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>下面的命令打印出了支持的語言和拓展：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tokei -l</span></span>
<span class="line"><span>ABNF</span></span>
<span class="line"><span>ABAP</span></span>
<span class="line"><span>ActionScript</span></span>
<span class="line"><span>Ada</span></span>
<span class="line"><span>Agda</span></span>
<span class="line"><span>Alex</span></span>
<span class="line"><span>Alloy</span></span>
<span class="line"><span>Arduino C++</span></span>
<span class="line"><span>AsciiDoc</span></span>
<span class="line"><span>ASN.1</span></span>
<span class="line"><span>ASP</span></span>
<span class="line"><span>ASP.NET</span></span>
<span class="line"><span>Assembly</span></span>
<span class="line"><span>GNU Style Assembly</span></span></code></pre></div><p>如果你在兩個文件夾上運行 <code>tokei</code> 並指定其位置作為參數，它將以先入先出的規則打印單個文件的統計數據：</p><p><img src="https://opensource.com/sites/default/files/uploads/tokei-two-files_0.png" alt="Running Tokei on two files" title="Running Tokei on two files"></p><p>默認情況下，<code>tokei</code> 僅僅輸出有關語言的數據，但是使用 <code>--files</code> 標記可提供單個文件統計信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tokei ~/exa/src --files</span></span>
<span class="line"><span>===========================================================================================</span></span>
<span class="line"><span> Language                              Files      Lines      Code             Comments     Blanks</span></span>
<span class="line"><span>===========================================================================================</span></span>
<span class="line"><span> Rust                                   54          9339        7070             400       1869</span></span>
<span class="line"><span> |- Markdown                            33          1306           0            1165        141</span></span>
<span class="line"><span> (Total)                                           10645        7070        1565       2010</span></span>
<span class="line"><span>-------------------------------------------------------------------------------------------</span></span>
<span class="line"><span> /home/ssur/exa/src/theme/default_theme.rs           130         107           0         23</span></span>
<span class="line"><span> /home/ssur/exa/src/output/render/times.rs            30          24           0          6</span></span>
<span class="line"><span> /home/ssur/exa/src/output/render/users.rs            98          76           0         22</span></span>
<span class="line"><span> /home/ssur/exa/src/output/render/size.rs            182         141           3         38</span></span>
<span class="line"><span> /home/ssur/exa/src/output/render/octal.rs           116          88           0         28</span></span>
<span class="line"><span> /home/ssur/exa/src/output/render/mod.rs              33          20           3         10</span></span>
<span class="line"><span> /home/ssur/exa/src/output/render/inode.rs            28          20           0          8</span></span>
<span class="line"><span> /home/ssur/exa/src/output/render/links.rs            87          65           0         22</span></span>
<span class="line"><span> /home/ssur/exa/src/output/render/groups.rs          123          93           0         30</span></span>
<span class="line"><span> |ome/ssur/exa/src/output/render/filetype.rs          31          26           0          5</span></span>
<span class="line"><span> /home/ssur/exa/src/output/render/blocks.rs           57          40           0         17</span></span>
<span class="line"><span> /home/ssur/exa/src/output/render/git.rs             108          87           0         21</span></span>
<span class="line"><span> |/ssur/exa/src/output/render/permissions.rs         204         160           3         41</span></span>
<span class="line"><span> /home/ssur/exa/src/output/grid.rs                    67          51           3         13</span></span>
<span class="line"><span> /home/ssur/exa/src/output/escape.rs                  26          18           4          4</span></span>
<span class="line"><span> /home/ssur/exa/src/theme/lsc.rs                     235         158          39         38</span></span>
<span class="line"><span> /home/ssur/exa/src/options/theme.rs                 159         124           6         29</span></span>
<span class="line"><span> /home/ssur/exa/src/options/file_name.rs              46          39           0          7</span></span>
<span class="line"><span> /home/ssur/exa/src/options/flags.rs                  84          63           6         15</span></span>
<span class="line"><span> /home/ssur/exa/src/fs/mod.rs                         10           8           0          2</span></span>
<span class="line"><span> /home/ssur/exa/src/fs/feature/mod.rs                 33          25           0          8</span></span>
<span class="line"><span>-- /home/ssur/exa/src/output/time.rs ---------------------------------------------------------------</span></span>
<span class="line"><span> |- Rust                                             215          170          5         40</span></span>
<span class="line"><span> |- Markdown                                          28            0         25          3</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3>`,16)),a("p",null,[s[11]||(s[11]=n("我發現使用 ",-1)),s[12]||(s[12]=a("code",null,"tokei",-1)),s[13]||(s[13]=n(" 來了解我的代碼統計數據十分容易。另一個使用 ",-1)),s[14]||(s[14]=a("code",null,"tokei",-1)),s[15]||(s[15]=n(" 的好處就是它可以用作為一個很容易集成到其他項目的庫。訪問 Tokei 的 ",-1)),e(p,{href:"https://crates.io/crates/tokei"},{default:l(()=>[...s[8]||(s[8]=[n("Crate.io page",-1)])]),_:1}),s[16]||(s[16]=n(" 和 ",-1)),e(p,{href:"https://docs.rs/tokei/12.1.2/tokei/"},{default:l(()=>[...s[9]||(s[9]=[n("Docs.rs",-1)])]),_:1}),s[17]||(s[17]=n(" 網站來了解其更多用法。如果你想參與其中，你也可以通過它的 ",-1)),e(p,{href:"https://github.com/XAMPPRocky/tokei"},{default:l(()=>[...s[10]||(s[10]=[n("GitHub 倉庫",-1)])]),_:1}),s[18]||(s[18]=n(" 來為 Tokei 作貢獻。",-1))]),s[40]||(s[40]=a("p",null,"你是否覺得 Tokei 很有用呢？可以在下方的評論區告訴我們。",-1)),s[41]||(s[41]=a("hr",null,null,-1)),a("p",null,[s[20]||(s[20]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/21/6/tokei"},{default:l(()=>[...s[19]||(s[19]=[n("https://opensource.com/article/21/6/tokei",-1)])]),_:1})]),a("p",null,[s[25]||(s[25]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/sudeshna-sur"},{default:l(()=>[...s[21]||(s[21]=[n("Sudeshna Sur",-1)])]),_:1}),s[26]||(s[26]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[22]||(s[22]=[n("lujun9972",-1)])]),_:1}),s[27]||(s[27]=n(" 譯者：",-1)),e(p,{href:"https://github.com/zepoch"},{default:l(()=>[...s[23]||(s[23]=[n("zepoch",-1)])]),_:1}),s[28]||(s[28]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[24]||(s[24]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[31]||(s[31]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[29]||(s[29]=[n("LCTT",-1)])]),_:1}),s[32]||(s[32]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[30]||(s[30]=[n("Linux中國",-1)])]),_:1}),s[33]||(s[33]=n(" 榮譽推出",-1))])])}const C=i(d,[["render",k]]);export{x as __pageData,C as default};
