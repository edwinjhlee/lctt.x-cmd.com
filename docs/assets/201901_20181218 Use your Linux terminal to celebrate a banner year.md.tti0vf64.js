import{_ as i,a0 as t,w as _,s as o,ao as r,I as p,x as n,a1 as l,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const L=JSON.parse('{"title":"使用你的 Linux 终端庆祝新年 | LCTT x X-CMD","titleTemplate":false,"description":"使用你的 Linux 终端庆祝新年 | LCTT (201901) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用你的 Linux 终端庆祝新年 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用你的 Linux 终端庆祝新年 | LCTT (201901) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201901/20181218 Use your Linux terminal to celebrate a banner year","title":"使用你的 Linux 终端庆祝新年","tag":"201901","desc":""},"relativePath":"201901/20181218 Use your Linux terminal to celebrate a banner year.md","filePath":"[post].md"}'),u={name:"201901/20181218 Use your Linux terminal to celebrate a banner year.md"};function d(g,s,f,b,k,m){const a=t("Link");return _(),o("div",null,[s[28]||(s[28]=r(`<h1 id="使用你的-linux-终端庆祝新年" tabindex="-1">使用你的 Linux 终端庆祝新年 <a class="header-anchor" href="#使用你的-linux-终端庆祝新年" aria-label="Permalink to “使用你的 Linux 终端庆祝新年”">​</a></h1><blockquote><p>想让你的终端被记住么？将它打在横幅上，不要错过。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/uploads/linux-toy-figlet.png?itok=o4XmTL-b" alt=""></p><p>欢迎再次来到为期 24 天的 Linux 命令行玩具日历。如果这是你第一次访问该系列，你甚至可能会问自己什么是命令行玩具。我们也在思考，但一般来说，它可能是一个游戏，或任何简单的消遣，可以帮助你在终端玩得开心。</p><p>很可能你们中的一些人之前已经看过我们日历中的各种玩具，但我们希望每个人至少见到一件新事物。</p><p>今天的玩具是 <code>figlet</code>，一个在 Linux 终端上以横幅形式打印文本的程序。</p><p>你可能会再标准仓库中找到 <code>figlet</code>。在我的 Fedora 上，这意味着安装就像下面这样简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install figlet</span></span></code></pre></div><p>之后，只需使用程序的名称来调用它。你可以以交互方式使用它，或者将一些文本通过管道输入，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello world&quot; | figlet</span></span>
<span class="line"><span> _   _      _ _                            _     _</span></span>
<span class="line"><span>| | | | ___| | | ___   __      _____  _ __| | __| |</span></span>
<span class="line"><span>| |_| |/ _ \\ | |/ _ \\  \\ \\ /\\ / / _ \\| &#39;__| |/ _\` |</span></span>
<span class="line"><span>|  _  |  __/ | | (_) |  \\ V  V / (_) | |  | | (_| |</span></span>
<span class="line"><span>|_| |_|\\___|_|_|\\___/    \\_/\\_/ \\___/|_|  |_|\\__,_|</span></span></code></pre></div><p><code>figlet</code> 有许多不同的字体。要查看可用的字体，请尝试使用命令 <code>showfigfonts</code>。在我这里显示了十几个。我在下面复制了一些我的最爱。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>block :</span></span>
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
<span class="line"><span>                 \\|</span></span></code></pre></div>`,12)),p("p",null,[s[1]||(s[1]=n("你可以在项目的",-1)),l(a,{href:"http://www.figlet.org/"},{default:e(()=>[...s[0]||(s[0]=[n("主页",-1)])]),_:1}),s[2]||(s[2]=n("上找到有关 ",-1)),s[3]||(s[3]=p("code",null,"figlet",-1)),s[4]||(s[4]=n(" 的更多信息。我下载的版本是以 MIT 许可开源的。",-1))]),p("p",null,[s[6]||(s[6]=n("你会发现 ",-1)),s[7]||(s[7]=p("code",null,"figlet",-1)),s[8]||(s[8]=n(" 不是唯一的 Linux 终端横幅打印机。另外一个你可以选择的是 ",-1)),l(a,{href:"http://caca.zoy.org/wiki/toilet"},{default:e(()=>[...s[5]||(s[5]=[n("toilet",-1)])]),_:1}),s[9]||(s[9]=n("，它有一套自己的 ASCII 艺术风格的打印选项。",-1))]),s[29]||(s[29]=p("p",null,"你有特别喜欢的命令行小玩具需要我介绍的吗？我们的日历基本上满了，但我们仍然希望在新的一年中展示一些很酷的命令行玩具。请在评论中留言，我会查看的。记得让我知道你对今天玩具的看法。",-1)),p("p",null,[s[11]||(s[11]=n("一定要看看昨天的玩具，",-1)),l(a,{href:"https://opensource.com/article/18/12/linux-toy-asciiquarium"},{default:e(()=>[...s[10]||(s[10]=[n("使用 asciiquarium 在终端中游泳",-1)])]),_:1}),s[12]||(s[12]=n("，记得明天回来！",-1))]),s[30]||(s[30]=p("hr",null,null,-1)),p("p",null,[s[14]||(s[14]=n("via: ",-1)),l(a,{href:"https://opensource.com/article/18/12/linux-toy-figlet"},{default:e(()=>[...s[13]||(s[13]=[n("https://opensource.com/article/18/12/linux-toy-figlet",-1)])]),_:1})]),p("p",null,[s[19]||(s[19]=n("作者：",-1)),l(a,{href:"https://opensource.com/users/jason-baker"},{default:e(()=>[...s[15]||(s[15]=[n("Jason Baker",-1)])]),_:1}),s[20]||(s[20]=n(" 选题：",-1)),l(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[16]||(s[16]=[n("lujun9972",-1)])]),_:1}),s[21]||(s[21]=n(" 译者：",-1)),l(a,{href:"https://github.com/geekpi"},{default:e(()=>[...s[17]||(s[17]=[n("geekpi",-1)])]),_:1}),s[22]||(s[22]=n(" 校对：",-1)),l(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[18]||(s[18]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[25]||(s[25]=n("本文由 ",-1)),l(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[23]||(s[23]=[n("LCTT",-1)])]),_:1}),s[26]||(s[26]=n(" 原创编译，",-1)),l(a,{href:"https://linux.cn/"},{default:e(()=>[...s[24]||(s[24]=[n("Linux中国",-1)])]),_:1}),s[27]||(s[27]=n(" 荣誉推出",-1))])])}const T=i(u,[["render",d]]);export{L as __pageData,T as default};
