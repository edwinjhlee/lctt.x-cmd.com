import{_ as i,a0 as t,w as _,s as o,ao as r,I as p,x as n,a1 as l,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const L=JSON.parse('{"title":"使用你的 Linux 終端慶祝新年 | LCTT x X-CMD","titleTemplate":false,"description":"使用你的 Linux 終端慶祝新年 | LCTT (201901) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用你的 Linux 終端慶祝新年 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用你的 Linux 終端慶祝新年 | LCTT (201901) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201901/20181218 Use your Linux terminal to celebrate a banner year","title":"使用你的 Linux 終端慶祝新年","tag":"201901","desc":""},"relativePath":"201901/20181218 Use your Linux terminal to celebrate a banner year.md","filePath":"[post].md"}'),u={name:"201901/20181218 Use your Linux terminal to celebrate a banner year.md"};function d(g,s,f,b,k,m){const a=t("Link");return _(),o("div",null,[s[28]||(s[28]=r(`<h1 id="使用你的-linux-終端慶祝新年" tabindex="-1">使用你的 Linux 終端慶祝新年 <a class="header-anchor" href="#使用你的-linux-終端慶祝新年" aria-label="Permalink to “使用你的 Linux 終端慶祝新年”">​</a></h1><blockquote><p>想讓你的終端被記住麼？將它打在橫幅上，不要錯過。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/uploads/linux-toy-figlet.png?itok=o4XmTL-b" alt=""></p><p>歡迎再次來到為期 24 天的 Linux 命令列玩具日曆。如果這是你第一次訪問該系列，你甚至可能會問自己什麼是命令列玩具。我們也在思考，但一般來説，它可能是一個遊戲，或任何簡單的消遣，可以幫助你在終端玩得開心。</p><p>很可能你們中的一些人之前已經看過我們日曆中的各種玩具，但我們希望每個人至少見到一件新事物。</p><p>今天的玩具是 <code>figlet</code>，一個在 Linux 終端上以橫幅形式打印文本的程序。</p><p>你可能會再標準倉庫中找到 <code>figlet</code>。在我的 Fedora 上，這意味着安裝就像下面這樣簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install figlet</span></span></code></pre></div><p>之後，只需使用程序的名稱來調用它。你可以以交互方式使用它，或者將一些文本通過管道輸入，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello world&quot; | figlet</span></span>
<span class="line"><span> _   _      _ _                            _     _</span></span>
<span class="line"><span>| | | | ___| | | ___   __      _____  _ __| | __| |</span></span>
<span class="line"><span>| |_| |/ _ \\ | |/ _ \\  \\ \\ /\\ / / _ \\| &#39;__| |/ _\` |</span></span>
<span class="line"><span>|  _  |  __/ | | (_) |  \\ V  V / (_) | |  | | (_| |</span></span>
<span class="line"><span>|_| |_|\\___|_|_|\\___/    \\_/\\_/ \\___/|_|  |_|\\__,_|</span></span></code></pre></div><p><code>figlet</code> 有許多不同的字體。要查看可用的字體，請嘗試使用命令 <code>showfigfonts</code>。在我這裏顯示了十幾個。我在下面複製了一些我的最愛。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>block :</span></span>
<span class="line"><span>                                           </span></span>
<span class="line"><span>_|        _|                      _|        </span></span>
<span class="line"><span>_|_|_|    _|    _|_|      _|_|_|  _|  _|    </span></span>
<span class="line"><span>_|    _|  _|  _|    _|  _|        _|_|      </span></span>
<span class="line"><span>_|    _|  _|  _|    _|  _|        _|  _|    </span></span>
<span class="line"><span>_|_|_|    _|    _|_|      _|_|_|  _|    _|  </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>bubble :</span></span>
<span class="line"><span>  _   _   _   _   _   _  </span></span>
<span class="line"><span> / \\ / \\ / \\ / \\ / \\ / \\</span></span>
<span class="line"><span>( b | u | b | b | l | e )</span></span>
<span class="line"><span> \\_/ \\_/ \\_/ \\_/ \\_/ \\_/</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>lean :</span></span>
<span class="line"><span>                                     </span></span>
<span class="line"><span>    _/                              </span></span>
<span class="line"><span>   _/    _/_/      _/_/_/  _/_/_/    </span></span>
<span class="line"><span>  _/  _/_/_/_/  _/    _/  _/    _/  </span></span>
<span class="line"><span> _/  _/        _/    _/  _/    _/    </span></span>
<span class="line"><span>_/    _/_/_/    _/_/_/  _/    _/  </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>script :</span></span>
<span class="line"><span>                         </span></span>
<span class="line"><span>               o          </span></span>
<span class="line"><span> ,   __   ,_        _ _|_</span></span>
<span class="line"><span>/ \\_/    /  |  |  |/ \\_|  </span></span>
<span class="line"><span> \\/ \\___/   |_/|_/|__/ |_/</span></span>
<span class="line"><span>                 /|      </span></span>
<span class="line"><span>                 \\|</span></span></code></pre></div>`,12)),p("p",null,[s[1]||(s[1]=n("你可以在項目的",-1)),l(a,{href:"http://www.figlet.org/"},{default:e(()=>[...s[0]||(s[0]=[n("主頁",-1)])]),_:1}),s[2]||(s[2]=n("上找到有關 ",-1)),s[3]||(s[3]=p("code",null,"figlet",-1)),s[4]||(s[4]=n(" 的更多信息。我下載的版本是以 MIT 許可開源的。",-1))]),p("p",null,[s[6]||(s[6]=n("你會發現 ",-1)),s[7]||(s[7]=p("code",null,"figlet",-1)),s[8]||(s[8]=n(" 不是唯一的 Linux 終端橫幅打印機。另外一個你可以選擇的是 ",-1)),l(a,{href:"http://caca.zoy.org/wiki/toilet"},{default:e(()=>[...s[5]||(s[5]=[n("toilet",-1)])]),_:1}),s[9]||(s[9]=n("，它有一套自己的 ASCII 藝術風格的打印選項。",-1))]),s[29]||(s[29]=p("p",null,"你有特別喜歡的命令列小玩具需要我介紹的嗎？我們的日曆基本上滿了，但我們仍然希望在新的一年中展示一些很酷的命令列玩具。請在評論中留言，我會查看的。記得讓我知道你對今天玩具的看法。",-1)),p("p",null,[s[11]||(s[11]=n("一定要看看昨天的玩具，",-1)),l(a,{href:"https://opensource.com/article/18/12/linux-toy-asciiquarium"},{default:e(()=>[...s[10]||(s[10]=[n("使用 asciiquarium 在終端中游泳",-1)])]),_:1}),s[12]||(s[12]=n("，記得明天回來！",-1))]),s[30]||(s[30]=p("hr",null,null,-1)),p("p",null,[s[14]||(s[14]=n("via: ",-1)),l(a,{href:"https://opensource.com/article/18/12/linux-toy-figlet"},{default:e(()=>[...s[13]||(s[13]=[n("https://opensource.com/article/18/12/linux-toy-figlet",-1)])]),_:1})]),p("p",null,[s[19]||(s[19]=n("作者：",-1)),l(a,{href:"https://opensource.com/users/jason-baker"},{default:e(()=>[...s[15]||(s[15]=[n("Jason Baker",-1)])]),_:1}),s[20]||(s[20]=n(" 選題：",-1)),l(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[16]||(s[16]=[n("lujun9972",-1)])]),_:1}),s[21]||(s[21]=n(" 譯者：",-1)),l(a,{href:"https://github.com/geekpi"},{default:e(()=>[...s[17]||(s[17]=[n("geekpi",-1)])]),_:1}),s[22]||(s[22]=n(" 校對：",-1)),l(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[18]||(s[18]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[25]||(s[25]=n("本文由 ",-1)),l(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[23]||(s[23]=[n("LCTT",-1)])]),_:1}),s[26]||(s[26]=n(" 原創編譯，",-1)),l(a,{href:"https://linux.cn/"},{default:e(()=>[...s[24]||(s[24]=[n("Linux中國",-1)])]),_:1}),s[27]||(s[27]=n(" 榮譽推出",-1))])])}const T=i(u,[["render",d]]);export{L as __pageData,T as default};
