import{_ as i,a0 as o,w as r,s as d,I as a,x as n,a1 as l,A as t,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"x86 和 ARM 的 Python 爬蟲速度對比 | LCTT x X-CMD","titleTemplate":false,"description":"x86 和 ARM 的 Python 爬蟲速度對比 | LCTT (201903) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"x86 和 ARM 的 Python 爬蟲速度對比 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"x86 和 ARM 的 Python 爬蟲速度對比 | LCTT (201903) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201903/20190218 SPEED TEST- x86 vs. ARM for Web Crawling in Python","title":"x86 和 ARM 的 Python 爬蟲速度對比","tag":"201903","desc":""},"relativePath":"201903/20190218 SPEED TEST- x86 vs. ARM for Web Crawling in Python.md","filePath":"[post].md"}'),u={name:"201903/20190218 SPEED TEST- x86 vs. ARM for Web Crawling in Python.md"};function m(f,s,w,A,c,g){const p=o("Link");return r(),d("div",null,[s[74]||(s[74]=a("h1",{id:"x86-和-arm-的-python-爬蟲速度對比",tabindex:"-1"},[n("x86 和 ARM 的 Python 爬蟲速度對比 "),a("a",{class:"header-anchor",href:"#x86-和-arm-的-python-爬蟲速度對比","aria-label":"Permalink to “x86 和 ARM 的 Python 爬蟲速度對比”"},"​")],-1)),s[75]||(s[75]=a("p",null,[a("img",{src:"https://blog.dxmtechsupport.com.au/wp-content/uploads/2019/02/quadbike-1024x683.jpg",alt:""})],-1)),s[76]||(s[76]=a("p",null,"假如説，如果你的老闆給你的任務是一次又一次地訪問競爭對手的網站，把對方商品的價格記錄下來，而且要純手工操作，恐怕你會想要把整個辦公室都燒掉。",-1)),s[77]||(s[77]=a("p",null,"之所以現在網絡爬蟲的影響力如此巨大，就是因為網絡爬蟲可以被用於追蹤客户的情緒和趨向、搜尋空缺的職位、監控房地產的交易，甚至是獲取 UFC 的比賽結果。除此以外，還有很多意想不到的用途。",-1)),a("p",null,[s[1]||(s[1]=n("對於有這方面愛好的人來説，爬蟲無疑是一個很好的工具。因此，我使用了 ",-1)),l(p,{href:"https://scrapy.org/"},{default:t(()=>[...s[0]||(s[0]=[n("Scrapy",-1)])]),_:1}),s[2]||(s[2]=n(" 這個基於 Python 編寫的開源網絡爬蟲框架。",-1))]),s[78]||(s[78]=a("p",null,"鑑於我不太瞭解這個工具是否會對我的計算機造成傷害，我並沒有將它搭建在我的主力機器上，而是搭建在了一台樹莓派上面。",-1)),s[79]||(s[79]=a("p",null,"令人感到意外的是，Scrapy 在樹莓派上面的性能並不差，或許這是 ARM 架構服務器的又一個成功例子？",-1)),a("p",null,[s[4]||(s[4]=n("我嘗試 Google 了一下，但並沒有得到令我滿意的結果，僅僅找到了一篇相關的《",-1)),l(p,{href:"https://www.info2007.net/blog/2018/review-scaleway-arm-based-cloud-server.html"},{default:t(()=>[...s[3]||(s[3]=[n("Drupal 建站對比",-1)])]),_:1}),s[5]||(s[5]=n("》。這篇文章的結論是，ARM 架構服務器性能比昂貴的 x86 架構服務器要更好。",-1))]),s[80]||(s[80]=a("p",null,"從另一個角度來看，這種 web 服務可以看作是一個“被爬蟲”服務，但和 Scrapy 對比起來，前者是基於 LAMP 技術棧，而後者則依賴於 Python，這就導致兩者之間沒有太多的可比性。",-1)),s[81]||(s[81]=a("p",null,"那我們該怎樣做呢？只能在一些 VPS 上搭建服務來對比一下了。",-1)),s[82]||(s[82]=a("h3",{id:"什麼是-arm-架構處理器",tabindex:"-1"},[n("什麼是 ARM 架構處理器？ "),a("a",{class:"header-anchor",href:"#什麼是-arm-架構處理器","aria-label":"Permalink to “什麼是 ARM 架構處理器？”"},"​")],-1)),s[83]||(s[83]=a("p",null,"ARM 是目前世界上最流行的 CPU 架構。",-1)),s[84]||(s[84]=a("p",null,"但 ARM 架構處理器在很多人眼中的地位只是作為一個省錢又省電的選擇，而不是跑在生產環境中的處理器的首選。",-1)),a("p",null,[s[7]||(s[7]=n("然而，誕生於英國劍橋的 ARM CPU，最初是用於極其昂貴的 ",-1)),l(p,{href:"https://blog.dxmtechsupport.com.au/playing-badass-acorn-archimedes-games-on-a-raspberry-pi/"},{default:t(()=>[...s[6]||(s[6]=[n("Acorn Archimedes",-1)])]),_:1}),s[8]||(s[8]=n(" 計算機上的，這是當時世界上最強大的桌面計算機，甚至在很長一段時間內，它的運算速度甚至比最快的 386 還要快好幾倍。",-1))]),s[85]||(s[85]=a("p",null,"Acorn 公司和 Commodore、Atari 的理念類似，他們認為一家偉大的計算機公司就應該製造出偉大的計算機，讓人感覺有點目光短淺。而比爾蓋茨的想法則有所不同，他力圖在更多不同種類和價格的 x86 機器上使用他的 DOS 系統。",-1)),s[86]||(s[86]=a("p",null,"擁有大量用户基數的平台會成為第三方開發者開發軟件的平台，而軟件資源豐富又會讓你的計算機更受用户歡迎。",-1)),s[87]||(s[87]=a("p",null,"即使是蘋果公司也幾乎被打敗。在 x86 芯片上投入大量的財力，最終，這些芯片被用於生產環境計算任務。",-1)),s[88]||(s[88]=a("p",null,"但 ARM 架構也並沒有消失。基於 ARM 架構的芯片不僅運算速度快，同時也非常節能。因此諸如機頂盒、PDA、數碼相機、MP3 播放器這些電子產品多數都會採用 ARM 架構的芯片，甚至在很多需要用電池或不配備大散熱風扇的電子產品上，都可以見到 ARM 芯片的身影。",-1)),s[89]||(s[89]=a("p",null,"而 ARM 則脱離 Acorn 成為了一種特殊的商業模式，他們不生產實物芯片，僅僅是向芯片生產廠商出售相關的知識產權。",-1)),s[90]||(s[90]=a("p",null,"因此，這或多或少是 ARM 芯片被應用於如此之多的手機和平板電腦上的原因。當 Linux 被移植到這種架構的芯片上時，開源技術的大門就已經向它打開了，這才讓我們今天得以在這些芯片上運行 web 爬蟲程序。",-1)),s[91]||(s[91]=a("h4",{id:"服務器端的-arm",tabindex:"-1"},[n("服務器端的 ARM "),a("a",{class:"header-anchor",href:"#服務器端的-arm","aria-label":"Permalink to “服務器端的 ARM”"},"​")],-1)),a("p",null,[s[11]||(s[11]=n("諸如",-1)),l(p,{href:"https://www.computerworld.com/article/3178544/microsoft-windows/microsoft-and-arm-look-to-topple-intel-in-servers.html"},{default:t(()=>[...s[9]||(s[9]=[n("微軟",-1)])]),_:1}),s[12]||(s[12]=n("和 ",-1)),l(p,{href:"https://www.datacenterknowledge.com/design/cloudflare-bets-arm-servers-it-expands-its-data-center-network"},{default:t(()=>[...s[10]||(s[10]=[n("Cloudflare",-1)])]),_:1}),s[13]||(s[13]=n(" 這些大廠都在基礎設施建設上花了重金，所以對於我們這些預算不高的用户來説，可以選擇的餘地並不多。",-1))]),a("p",null,[s[15]||(s[15]=n("實際上，如果你的信用卡只夠付每月數美元的 VPS 費用，一直以來只能考慮 ",-1)),l(p,{href:"https://www.scaleway.com/"},{default:t(()=>[...s[14]||(s[14]=[n("Scaleway",-1)])]),_:1}),s[16]||(s[16]=n(" 這個高性價比的廠商。",-1))]),a("p",null,[s[19]||(s[19]=n("但自從數個月前公有云巨頭 ",-1)),l(p,{href:"https://aws.amazon.com/"},{default:t(()=>[...s[17]||(s[17]=[n("AWS",-1)])]),_:1}),s[20]||(s[20]=n(" 推出了他們自研的 ARM 處理器 ",-1)),l(p,{href:"https://www.theregister.co.uk/2018/11/27/amazon_aws_graviton_specs/"},{default:t(()=>[...s[18]||(s[18]=[n("AWS Graviton",-1)])]),_:1}),s[21]||(s[21]=n(" 之後，選擇似乎就豐富了一些。",-1))]),s[92]||(s[92]=a("p",null,"我決定在其中選擇一款 VPS 廠商，將它提供的 ARM 處理器和 x86 處理器作出對比。",-1)),s[93]||(s[93]=a("h3",{id:"深入瞭解",tabindex:"-1"},[n("深入瞭解 "),a("a",{class:"header-anchor",href:"#深入瞭解","aria-label":"Permalink to “深入瞭解”"},"​")],-1)),s[94]||(s[94]=a("p",null,"所以我們要對比的是什麼指標呢？",-1)),s[95]||(s[95]=a("h4",{id:"scaleway",tabindex:"-1"},[n("Scaleway "),a("a",{class:"header-anchor",href:"#scaleway","aria-label":"Permalink to “Scaleway”"},"​")],-1)),s[96]||(s[96]=a("p",null,"Scaleway 自身的定位是“專為開發者設計”。我覺得這個定位很準確，對於開發和原型設計來説，Scaleway 提供的產品確實可以作為一個很好的沙盒環境。",-1)),s[97]||(s[97]=a("p",null,"Scaleway 提供了一個簡潔的儀表盤頁面，讓用户可以快速地從主頁進入 bash shell 界面。對於很多小企業、自由職業者或者技術顧問，如果想要運行 web 爬蟲，這個產品毫無疑問是一個物美價廉的選擇。",-1)),a("p",null,[s[23]||(s[23]=n("ARM 方面我們選擇 ",-1)),l(p,{href:"https://www.scaleway.com/virtual-cloud-servers/#anchor_arm"},{default:t(()=>[...s[22]||(s[22]=[n("ARM64-2GB",-1)])]),_:1}),s[24]||(s[24]=n(" 這一款服務器，每月只需要 3 歐元。它帶有 4 個 Cavium ThunderX 核心，這是在 2014 年推出的第一款服務器級的 ARMv8 處理器。但現在看來它已經顯得有點落後了，並逐漸被更新的 ThunderX2 取代。",-1))]),a("p",null,[s[26]||(s[26]=n("x86 方面我們選擇 ",-1)),l(p,{href:"https://www.scaleway.com/virtual-cloud-servers/#anchor_starter"},{default:t(()=>[...s[25]||(s[25]=[n("1-S",-1)])]),_:1}),s[27]||(s[27]=n("，每月的費用是 4 歐元。它擁有 2 個英特爾 Atom C3995 核心。英特爾的 Atom 系列處理器的特點是低功耗、單線程，最初是用在筆記本電腦上的，後來也被服務器所採用。",-1))]),s[98]||(s[98]=a("p",null,"兩者在處理器以外的條件都大致相同，都使用 2 GB 的內存、50 GB 的 SSD 存儲以及 200 Mbit/s 的帶寬。磁盤驅動器可能會有所不同，但由於我們運行的是 web 爬蟲，基本都是在內存中完成操作，因此這方面的差異可以忽略不計。",-1)),s[99]||(s[99]=a("p",null,"為了避免我不能熟練使用包管理器的尷尬局面，兩方的操作系統我都會選擇使用 Debian 9。",-1)),s[100]||(s[100]=a("h4",{id:"amazon-web-services-aws",tabindex:"-1"},[n("Amazon Web Services（AWS） "),a("a",{class:"header-anchor",href:"#amazon-web-services-aws","aria-label":"Permalink to “Amazon Web Services（AWS）”"},"​")],-1)),s[101]||(s[101]=a("p",null,"當你還在註冊 AWS 賬號的時候，使用 Scaleway 的用户可能已經把提交信用卡信息、啓動 VPS 實例、添加 sudo 用户、安裝依賴包這一系列流程都完成了。AWS 的操作相對來説比較繁瑣，甚至需要詳細閲讀手冊才能知道你正在做什麼。",-1)),s[102]||(s[102]=a("p",null,"當然這也是合理的，對於一些需求複雜或者特殊的企業用户，確實需要通過詳細的配置來定製合適的使用方案。",-1)),a("p",null,[s[30]||(s[30]=n("我們所採用的 AWS Graviton 處理器是 AWS EC2（",-1)),s[31]||(s[31]=a("ruby",null,[n("彈性計算雲"),a("rt",null,"Elastic Compute Cloud")],-1)),s[32]||(s[32]=n("）的一部分，我會以按需實例的方式來運行，這也是最貴但最簡捷的方式。AWS 同時也提供",-1)),l(p,{href:"https://aws.amazon.com/ec2/spot/pricing/"},{default:t(()=>[...s[28]||(s[28]=[n("競價實例",-1)])]),_:1}),s[33]||(s[33]=n("，這樣可以用較低的價格運行實例，但實例的運行時間並不固定。如果實例需要長時間持續運行，還可以選擇",-1)),l(p,{href:"https://aws.amazon.com/ec2/pricing/reserved-instances/"},{default:t(()=>[...s[29]||(s[29]=[n("預留實例",-1)])]),_:1}),s[34]||(s[34]=n("。",-1))]),s[103]||(s[103]=a("p",null,"看，AWS 就是這麼複雜……",-1)),a("p",null,[s[37]||(s[37]=n("我們分別選擇 ",-1)),l(p,{href:"https://aws.amazon.com/ec2/instance-types/a1/"},{default:t(()=>[...s[35]||(s[35]=[n("a1.medium",-1)])]),_:1}),s[38]||(s[38]=n(" 和 ",-1)),l(p,{href:"https://aws.amazon.com/ec2/instance-types/t2/"},{default:t(()=>[...s[36]||(s[36]=[n("t2.small",-1)])]),_:1}),s[39]||(s[39]=n(" 兩種型號的實例進行對比，兩者都帶有 2GB 內存。這個時候問題來了，這裏提到的 vCPU 又是什麼？兩種型號的不同之處就在於此。",-1))]),s[104]||(s[104]=e('<p>對於 a1.medium 型號的實例，vCPU 是 AWS Graviton 芯片提供的單個計算核心。這個芯片由被亞馬遜在 2015 收購的以色列廠商 Annapurna Labs 研發，是 AWS 獨有的單線程 64 位 ARMv8 內核。它的按需價格為每小時 0.0255 美元。</p><p>而 t2.small 型號實例使用英特爾至強系列芯片，但我不確定具體是其中的哪一款。它每個核心有兩個線程，但我們並不能用到整個核心，甚至整個線程。</p><p>我們能用到的只是“20% 的基準性能，可以使用 CPU 積分突破這個基準”。這可能有一定的原因，但我沒有弄懂。它的按需價格是每小時 0.023 美元。</p><p>在鏡像庫中沒有 Debian 發行版的鏡像，因此我選擇了 Ubuntu 18.04。</p><h3 id="癟四與大頭蛋爬取-moz-排行榜前-500-的網站" tabindex="-1">癟四與大頭蛋爬取 Moz 排行榜前 500 的網站 <a class="header-anchor" href="#癟四與大頭蛋爬取-moz-排行榜前-500-的網站" aria-label="Permalink to “癟四與大頭蛋爬取 Moz 排行榜前 500 的網站”">​</a></h3><p>要測試這些 VPS 的 CPU 性能，就該使用爬蟲了。一個方法是對幾個網站在儘可能短的時間裏發出儘可能多的請求，但這種操作不太禮貌，我的做法是隻向大量網站發出少數幾個請求。</p><p>為此，我編寫了 <code>beavis.py</code>（癟四）這個爬蟲程序（致敬我最喜歡的物理學家和製片人 Mike Judge）。這個程序會將 Moz 上排行前 500 的網站都爬取 3 層的深度，並計算 “wood” 和 “ass” 這兩個單詞在 HTML 文件中出現的次數。（LCTT 譯註：beavis（癟四）和 butt-head（大頭蛋） 都是 Mike Judge 的動畫片《癟四與大頭蛋》中的角色）</p><p>但我實際爬取的網站可能不足 500 個，因為我需要遵循網站的 <code>robot.txt</code> 協定，另外還有些網站需要提交 javascript 請求，也不一定會計算在內。但這已經是一個足以讓 CPU 保持繁忙的爬蟲任務了。</p>',8)),a("p",null,[s[41]||(s[41]=n("Python 的",-1)),l(p,{href:"https://wiki.python.org/moin/GlobalInterpreterLock"},{default:t(()=>[...s[40]||(s[40]=[n("全局解釋器鎖",-1)])]),_:1}),s[42]||(s[42]=n("機制會讓我的程序只能用到一個 CPU 線程。為了測試多線程的性能，我需要啓動多個獨立的爬蟲程序進程。",-1))]),s[105]||(s[105]=e('<p>因此我還編寫了 <code>butthead.py</code>，儘管大頭蛋很粗魯，它也總是比癟四要略勝一籌。</p><p>我將整個爬蟲任務拆分為多個部分，這可能會對爬取到的鏈接數量有一點輕微的影響。但無論如何，每次爬取都會有所不同，我們要關注的是爬取了多少個頁面，以及耗時多長。</p><h3 id="在-arm-服務器上安裝-scrapy" tabindex="-1">在 ARM 服務器上安裝 Scrapy <a class="header-anchor" href="#在-arm-服務器上安裝-scrapy" aria-label="Permalink to “在 ARM 服務器上安裝 Scrapy”">​</a></h3><p>安裝 Scrapy 的過程與芯片的不同架構沒有太大的關係，都是安裝 <code>pip</code> 和相關的依賴包之後，再使用 <code>pip</code> 來安裝 Scrapy。</p><p>據我觀察，在使用 ARM 的機器上使用 <code>pip</code> 安裝 Scrapy 確實耗時要長一點，我估計是由於需要從源碼編譯為二進制文件。</p><p>在 Scrapy 安裝結束後，就可以通過 shell 來查看它的工作狀態了。</p><p>在 Scaleway 的 ARM 機器上，Scrapy 安裝完成後會無法正常運行，這似乎和 <code>service_identity</code> 模組有關。這個現象也會在樹莓派上出現，但在 AWS Graviton 上不會出現。</p><p>對於這個問題，可以用這個命令來解決：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pip3 install service_identity --force --upgrade</span></span></code></pre></div><p>接下來就可以開始對比了。</p><h3 id="單線程爬蟲" tabindex="-1">單線程爬蟲 <a class="header-anchor" href="#單線程爬蟲" aria-label="Permalink to “單線程爬蟲”">​</a></h3>',11)),a("p",null,[s[44]||(s[44]=n("Scrapy 的官方文檔建議",-1)),l(p,{href:"https://docs.scrapy.org/en/latest/topics/broad-crawls.html"},{default:t(()=>[...s[43]||(s[43]=[n("將爬蟲程序的 CPU 使用率控制在 80% 到 90% 之間",-1)])]),_:1}),s[45]||(s[45]=n("，在真實操作中並不容易，尤其是對於我自己寫的代碼。根據我的觀察，實際的 CPU 使用率變動情況是一開始非常繁忙，隨後稍微下降，接着又再次升高。",-1))]),s[106]||(s[106]=e('<p>在爬取任務的最後，也就是大部分目標網站都已經被爬取了的這個階段，會持續數分鐘的時間。這讓人有點失望，因為在這個階段當中，任務的運行時長只和網站的大小有比較直接的關係，並不能以之衡量 CPU 的性能。</p><p>所以這並不是一次嚴謹的基準測試，只是我通過自己寫的爬蟲程序來觀察實際的現象。</p><p>下面我們來看看最終的結果。首先是 Scaleway 的機器：</p><div class="table-wrap"><table><thead><tr><th>機器種類</th><th>耗時</th><th>爬取頁面數</th><th>每小時爬取頁面數</th><th>每百萬頁面費用（歐元）</th></tr></thead><tbody><tr><td>Scaleway ARM64-2GB</td><td>108m 59.27s</td><td>38,205</td><td>21,032.623</td><td>0.28527</td></tr><tr><td>Scaleway 1-S</td><td>97m 44.067s</td><td>39,476</td><td>24,324.648</td><td>0.33011</td></tr></tbody></table></div>',4)),a("p",null,[s[47]||(s[47]=n("我使用了 ",-1)),l(p,{href:"https://linux.die.net/man/1/top"},{default:t(()=>[...s[46]||(s[46]=[n("top",-1)])]),_:1}),s[48]||(s[48]=n(" 工具來查看爬蟲程序運行期間的 CPU 使用率。在任務剛開始的時候，兩者的 CPU 使用率都達到了 100%，但 ThunderX 大部分時間都達到了 CPU 的極限，無法看出來 Atom 的性能會比 ThunderX 超出多少。",-1))]),s[107]||(s[107]=e('<p>通過 <code>top</code> 工具，我還觀察了它們的內存使用情況。隨着爬取任務的進行，ARM 機器的內存使用率最終達到了 14.7%，而 x86 則最終是 15%。</p><p>從運行日誌還可以看出來，當 CPU 使用率到達極限時，會有大量的超時頁面產生，最終導致頁面丟失。這也是合理出現的現象，因為 CPU 過於繁忙會無法完整地記錄所有爬取到的頁面。</p><p>如果僅僅是為了對比爬蟲的速度，頁面丟失並不是什麼大問題。但在實際中，業務成果和爬蟲數據的質量是息息相關的，因此必須為 CPU 留出一些用量，以防出現這種現象。</p><p>再來看看 AWS 這邊：</p><div class="table-wrap"><table><thead><tr><th>機器種類</th><th>耗時</th><th>爬取頁面數</th><th>每小時爬取頁面數</th><th>每百萬頁面費用（美元）</th></tr></thead><tbody><tr><td>a1.medium</td><td>100m 39.900s</td><td>41,294</td><td>24,612.725</td><td>1.03605</td></tr><tr><td>t2.small</td><td>78m 53.171s</td><td>41,200</td><td>31,336.286</td><td>0.73397</td></tr></tbody></table></div><p>為了方便比較，對於在 AWS 上跑的爬蟲，我記錄的指標和 Scaleway 上一致，但似乎沒有達到預期的效果。這裏我沒有使用 <code>top</code>，而是使用了 AWS 提供的控制台來監控 CPU 的使用情況，從監控結果來看，我的爬蟲程序並沒有完全用到這兩款服務器所提供的所有性能。</p><p>a1.medium 型號的機器尤為如此，在任務開始階段，它的 CPU 使用率達到了峯值 45%，但隨後一直在 20% 到 30% 之間。</p><p>讓我有點感到意外的是，這個程序在 ARM 處理器上的運行速度相當慢，但卻遠未達到 Graviton CPU 能力的極限，而在 Intel Atom 處理器上則可以在某些時候達到 CPU 能力的極限。它們運行的代碼是完全相同的，處理器的不同架構可能導致了對代碼的不同處理方式。</p><p>箇中原因無論是由於處理器本身的特性，還是二進制文件的編譯，又或者是兩者皆有，對我來説都是一個黑盒般的存在。我認為，既然在 AWS 機器上沒有達到 CPU 處理能力的極限，那麼只有在 Scaleway 機器上跑出來的性能數據是可以作為參考的。</p><p>t2.small 型號的機器性能讓人費解。CPU 利用率大概 20%，最高才達到 35%，是因為手冊中説的“20% 的基準性能，可以使用 CPU 積分突破這個基準”嗎？但在控制台中可以看到 CPU 積分並沒有被消耗。</p>',10)),a("p",null,[s[50]||(s[50]=n("為了確認這一點，我安裝了 ",-1)),l(p,{href:"https://linux.die.net/man/1/stress"},{default:t(()=>[...s[49]||(s[49]=[n("stress",-1)])]),_:1}),s[51]||(s[51]=n(" 這個軟件，然後運行了一段時間，這個時候發現居然可以把 CPU 使用率提高到 100% 了。",-1))]),s[108]||(s[108]=e('<p>顯然，我需要調整一下它們的配置文件。我將 <code>CONCURRENT_REQUESTS</code> 參數設置為 5000，將 <code>REACTOR_THREADPOOL_MAXSIZE</code> 參數設置為 120，將爬蟲任務的負載調得更大。</p><div class="table-wrap"><table><thead><tr><th>機器種類</th><th>耗時</th><th>爬取頁面數</th><th>每小時爬取頁面數</th><th>每萬頁面費用（美元）</th></tr></thead><tbody><tr><td>a1.medium</td><td>46m 13.619s</td><td>40,283</td><td>52,285.047</td><td>0.48771</td></tr><tr><td>t2.small</td><td>41m7.619s</td><td>36,241</td><td>52,871.857</td><td>0.43501</td></tr><tr><td>t2.small（無 CPU 積分）</td><td>73m 8.133s</td><td>34,298</td><td>28,137.8891</td><td>0.81740</td></tr></tbody></table></div><p>a1.medium 型號機器的 CPU 使用率在爬蟲任務開始後 5 分鐘飆升到了 100%，隨後下降到 80% 並持續了 20 分鐘，然後再次攀升到 96%，直到任務接近結束時再次下降。這大概就是我想要的效果了。</p><p>而 t2.small 型號機器在爬蟲任務的前期就達到了 50%，並一直保持在這個水平直到任務接近結束。如果每個核心都有兩個線程，那麼 50% 的 CPU 使用率確實是單個線程可以達到的極限了。</p><p>現在我們看到它們的性能都差不多了。但至強處理器的線程持續跑滿了 CPU，Graviton 處理器則只是有一段時間如此。可以認為 Graviton 略勝一籌。</p><p>然而，如果 CPU 積分耗盡了呢？這種情況下的對比可能更為公平。為了測試這種情況，我使用 <code>stress</code> 把所有的 CPU 積分用完，然後再次啓動了爬蟲任務。</p><p>在沒有 CPU 積分的情況下，CPU 使用率在 27% 就到達極限不再上升了，同時又出現了丟失頁面的現象。這麼看來，它的性能比負載較低的時候更差。</p><h3 id="多線程爬蟲" tabindex="-1">多線程爬蟲 <a class="header-anchor" href="#多線程爬蟲" aria-label="Permalink to “多線程爬蟲”">​</a></h3><p>將爬蟲任務分散到不同的進程中，可以有效利用機器所提供的多個核心。</p><p>一開始，我將爬蟲任務分佈在 10 個不同的進程中並同時啓動，結果發現比每個核心僅使用 1 個進程的時候還要慢。</p><p>經過嘗試，我得到了一個比較好的方案。把爬蟲任務分佈在 10 個進程中，但每個核心只啓動 1 個進程，在每個進程接近結束的時候，再從剩餘的進程中選出 1 個進程啓動起來。</p><p>如果還需要優化，還可以讓運行時間越長的爬蟲進程在啓動順序中排得越靠前，我也在嘗試實現這個方法。</p><p>想要預估某個域名的頁面量，一定程度上可以參考這個域名主頁的鏈接數量。我用另一個程序來對這個數量進行了統計，然後按照降序排序。經過這樣的預處理之後，只會額外增加 1 分鐘左右的時間。</p><p>結果，爬蟲運行的總耗時超過了兩個小時！畢竟把鏈接最多的域名都堆在同一個進程中也存在一定的弊端。</p><p>針對這個問題，也可以通過調整各個進程爬取的域名數量來進行優化，又或者在排序之後再作一定的修改。不過這種優化可能有點複雜了。</p><p>因此，我還是用回了最初的方法，它的效果還是相當不錯的：</p><div class="table-wrap"><table><thead><tr><th>機器種類</th><th>耗時</th><th>爬取頁面數</th><th>每小時爬取頁面數</th><th>每萬頁面費用（歐元）</th></tr></thead><tbody><tr><td>Scaleway ARM64-2GB</td><td>62m 10.078s</td><td>36,158</td><td>34,897.0719</td><td>0.17193</td></tr><tr><td>Scaleway 1-S</td><td>60m 56.902s</td><td>36,725</td><td>36,153.5529</td><td>0.22128</td></tr></tbody></table></div><p>畢竟，使用多個核心能夠大大加快爬蟲的速度。</p><p>我認為，如果讓一個經驗豐富的程序員來優化的話，一定能夠更好地利用所有的計算核心。但對於開箱即用的 Scrapy 來説，想要提高性能，使用更快的線程似乎比使用更多核心要簡單得多。</p><p>從數量來看，Atom 處理器在更短的時間內爬取到了更多的頁面。但如果從性價比角度來看，ThunderX 又是稍稍領先的。不過總的來説差距不大。</p><h3 id="爬取結果分析" tabindex="-1">爬取結果分析 <a class="header-anchor" href="#爬取結果分析" aria-label="Permalink to “爬取結果分析”">​</a></h3><p>在爬取了 38205 個頁面之後，我們可以統計到在這些頁面中 “ass” 出現了 24170435 次，而 “wood” 出現了 54368 次。</p><p><img src="https://blog.dxmtechsupport.com.au/wp-content/uploads/2019/02/Screenshot-from-2019-02-16-17-01-08.png" alt=""></p><p>“wood” 的出現次數不少，但和 “ass” 比起來簡直微不足道。</p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>從上面的數據來看，對於性能而言，CPU 的架構並沒有它們的問世時間重要，2018 年生產的 AWS Graviton 是單線程情況下性能最佳的。</p><p>你當然可以説按核心來比，Xeon 仍然贏了。但是，你不但需要計算美元的變化，甚至還要計算線程數。</p><p>另外在性能方面 2017 年生產的 Atom 輕鬆擊敗了 2014 年生產的 ThunderX，而 ThunderX 則在性價比方面佔優。當然，如果你使用 AWS 的機器的話，還是使用 Graviton 吧。</p><p>總之，ARM 架構的硬件是可以用來運行爬蟲程序的，而且在性能和費用方面也相當有競爭力。</p><p>而這種差異是否足以讓你將整個技術架構遷移到 ARM 上？這就是另一回事了。當然，如果你已經是 AWS 用户，並且你的代碼有很強的可移植性，那麼不妨嘗試一下 a1 型號的實例。</p><p>希望 ARM 設備在不久的將來能夠在公有云上大放異彩。</p><h3 id="源代碼" tabindex="-1">源代碼 <a class="header-anchor" href="#源代碼" aria-label="Permalink to “源代碼”">​</a></h3><p>這是我第一次使用 Python 和 Scrapy 來做一個項目，所以我的代碼寫得可能不是很好，例如代碼中使用全局變量就有點力不從心。</p><p>不過我仍然會在下面開源我的代碼。</p>',34)),a("p",null,[s[54]||(s[54]=n("要運行這些代碼，需要預先安裝 Scrapy，並且需要 ",-1)),l(p,{href:"https://moz.com/top500"},{default:t(()=>[...s[52]||(s[52]=[n("Moz 上排名前 500 的網站",-1)])]),_:1}),s[55]||(s[55]=n("的 csv 文件。如果要運行 ",-1)),s[56]||(s[56]=a("code",null,"butthead.py",-1)),s[57]||(s[57]=n("，還需要安裝 ",-1)),l(p,{href:"https://pypi.org/project/psutil/"},{default:t(()=>[...s[53]||(s[53]=[n("psutil",-1)])]),_:1}),s[58]||(s[58]=n(" 這個庫。",-1))]),s[109]||(s[109]=e(`<p><em>beavis.py</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import scrapy</span></span>
<span class="line"><span>from scrapy.spiders import CrawlSpider, Rule</span></span>
<span class="line"><span>from scrapy.linkextractors import LinkExtractor</span></span>
<span class="line"><span>from scrapy.crawler import CrawlerProcess</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ass = 0</span></span>
<span class="line"><span>wood = 0</span></span>
<span class="line"><span>totalpages = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def getdomains():</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  moz500file = open(&#39;top500.domains.05.18.csv&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  domains = []</span></span>
<span class="line"><span>  moz500csv = moz500file.readlines()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  del moz500csv[0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for csvline in moz500csv:</span></span>
<span class="line"><span>    leftquote = csvline.find(&#39;&quot;&#39;)    </span></span>
<span class="line"><span>    rightquote = leftquote + csvline[leftquote + 1:].find(&#39;&quot;&#39;)</span></span>
<span class="line"><span>    domains.append(csvline[leftquote + 1:rightquote])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return domains</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def getstartpages(domains):</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  startpages = []</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  for domain in domains:</span></span>
<span class="line"><span>    startpages.append(&#39;http://&#39; + domain)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return startpages</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class AssWoodItem(scrapy.Item):</span></span>
<span class="line"><span>  ass = scrapy.Field()</span></span>
<span class="line"><span>  wood = scrapy.Field()</span></span>
<span class="line"><span>  url = scrapy.Field()</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class AssWoodPipeline(object):</span></span>
<span class="line"><span>  def __init__(self):</span></span>
<span class="line"><span>    self.asswoodstats = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  def process_item(self, item, spider):</span></span>
<span class="line"><span>    self.asswoodstats.append((item.get(&#39;url&#39;), item.get(&#39;ass&#39;), item.get(&#39;wood&#39;)))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  def close_spider(self, spider):</span></span>
<span class="line"><span>    asstally, woodtally = 0, 0</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    for asswoodcount in self.asswoodstats:</span></span>
<span class="line"><span>      asstally += asswoodcount[1]</span></span>
<span class="line"><span>      woodtally += asswoodcount[2]</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    global ass, wood, totalpages</span></span>
<span class="line"><span>    ass = asstally</span></span>
<span class="line"><span>    wood = woodtally</span></span>
<span class="line"><span>    totalpages = len(self.asswoodstats)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class BeavisSpider(CrawlSpider):</span></span>
<span class="line"><span>  name = &quot;Beavis&quot;</span></span>
<span class="line"><span>  allowed_domains = getdomains()</span></span>
<span class="line"><span>  start_urls = getstartpages(allowed_domains)</span></span>
<span class="line"><span>  #start_urls = [ &#39;http://medium.com&#39; ]</span></span>
<span class="line"><span>  custom_settings = {</span></span>
<span class="line"><span>    &#39;DEPTH_LIMIT&#39;: 3,</span></span>
<span class="line"><span>    &#39;DOWNLOAD_DELAY&#39;: 3,</span></span>
<span class="line"><span>    &#39;CONCURRENT_REQUESTS&#39;: 1500,</span></span>
<span class="line"><span>    &#39;REACTOR_THREADPOOL_MAXSIZE&#39;: 60,</span></span>
<span class="line"><span>    &#39;ITEM_PIPELINES&#39;: { &#39;__main__.AssWoodPipeline&#39;: 10 },</span></span>
<span class="line"><span>    &#39;LOG_LEVEL&#39;: &#39;INFO&#39;,</span></span>
<span class="line"><span>    &#39;RETRY_ENABLED&#39;: False,</span></span>
<span class="line"><span>    &#39;DOWNLOAD_TIMEOUT&#39;: 30,</span></span>
<span class="line"><span>    &#39;COOKIES_ENABLED&#39;: False,</span></span>
<span class="line"><span>    &#39;AJAXCRAWL_ENABLED&#39;: True</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  rules = ( Rule(LinkExtractor(), callback=&#39;parse_asswood&#39;), )</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  def parse_asswood(self, response):</span></span>
<span class="line"><span>    if isinstance(response, scrapy.http.TextResponse):</span></span>
<span class="line"><span>      item = AssWoodItem()</span></span>
<span class="line"><span>      item[&#39;ass&#39;] = response.text.casefold().count(&#39;ass&#39;)</span></span>
<span class="line"><span>      item[&#39;wood&#39;] = response.text.casefold().count(&#39;wood&#39;)</span></span>
<span class="line"><span>      item[&#39;url&#39;] = response.url</span></span>
<span class="line"><span>      yield item</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  process = CrawlerProcess({</span></span>
<span class="line"><span>      &#39;USER_AGENT&#39;: &#39;Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)&#39;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  process.crawl(BeavisSpider)</span></span>
<span class="line"><span>  process.start()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  print(&#39;Uhh, that was, like, &#39; + str(totalpages) + &#39; pages crawled.&#39;)</span></span>
<span class="line"><span>  print(&#39;Uh huhuhuhuh. It said ass &#39; + str(ass) + &#39; times.&#39;)</span></span>
<span class="line"><span>  print(&#39;Uh huhuhuhuh. It said wood &#39; + str(wood) + &#39; times.&#39;)</span></span></code></pre></div><p><em>butthead.py</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import scrapy, time, psutil</span></span>
<span class="line"><span>from scrapy.spiders import CrawlSpider, Rule, Spider</span></span>
<span class="line"><span>from scrapy.linkextractors import LinkExtractor</span></span>
<span class="line"><span>from scrapy.crawler import CrawlerProcess</span></span>
<span class="line"><span>from multiprocessing import Process, Queue, cpu_count</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ass = 0</span></span>
<span class="line"><span>wood = 0</span></span>
<span class="line"><span>totalpages = 0</span></span>
<span class="line"><span>linkcounttuples =[]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def getdomains():</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  moz500file = open(&#39;top500.domains.05.18.csv&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  domains = []</span></span>
<span class="line"><span>  moz500csv = moz500file.readlines()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  del moz500csv[0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for csvline in moz500csv:</span></span>
<span class="line"><span>    leftquote = csvline.find(&#39;&quot;&#39;)    </span></span>
<span class="line"><span>    rightquote = leftquote + csvline[leftquote + 1:].find(&#39;&quot;&#39;)</span></span>
<span class="line"><span>    domains.append(csvline[leftquote + 1:rightquote])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return domains</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def getstartpages(domains):</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  startpages = []</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  for domain in domains:</span></span>
<span class="line"><span>    startpages.append(&#39;http://&#39; + domain)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return startpages</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class AssWoodItem(scrapy.Item):</span></span>
<span class="line"><span>  ass = scrapy.Field()</span></span>
<span class="line"><span>  wood = scrapy.Field()</span></span>
<span class="line"><span>  url = scrapy.Field()</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class AssWoodPipeline(object):</span></span>
<span class="line"><span>  def __init__(self):</span></span>
<span class="line"><span>    self.asswoodstats = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  def process_item(self, item, spider):</span></span>
<span class="line"><span>    self.asswoodstats.append((item.get(&#39;url&#39;), item.get(&#39;ass&#39;), item.get(&#39;wood&#39;)))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  def close_spider(self, spider):</span></span>
<span class="line"><span>    asstally, woodtally = 0, 0</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    for asswoodcount in self.asswoodstats:</span></span>
<span class="line"><span>      asstally += asswoodcount[1]</span></span>
<span class="line"><span>      woodtally += asswoodcount[2]</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    global ass, wood, totalpages</span></span>
<span class="line"><span>    ass = asstally</span></span>
<span class="line"><span>    wood = woodtally</span></span>
<span class="line"><span>    totalpages = len(self.asswoodstats)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ButtheadSpider(CrawlSpider):</span></span>
<span class="line"><span>  name = &quot;Butthead&quot;</span></span>
<span class="line"><span>  custom_settings = {</span></span>
<span class="line"><span>    &#39;DEPTH_LIMIT&#39;: 3,</span></span>
<span class="line"><span>    &#39;DOWNLOAD_DELAY&#39;: 3,</span></span>
<span class="line"><span>    &#39;CONCURRENT_REQUESTS&#39;: 250,</span></span>
<span class="line"><span>    &#39;REACTOR_THREADPOOL_MAXSIZE&#39;: 30,</span></span>
<span class="line"><span>    &#39;ITEM_PIPELINES&#39;: { &#39;__main__.AssWoodPipeline&#39;: 10 },</span></span>
<span class="line"><span>    &#39;LOG_LEVEL&#39;: &#39;INFO&#39;,</span></span>
<span class="line"><span>    &#39;RETRY_ENABLED&#39;: False,</span></span>
<span class="line"><span>    &#39;DOWNLOAD_TIMEOUT&#39;: 30,</span></span>
<span class="line"><span>    &#39;COOKIES_ENABLED&#39;: False,</span></span>
<span class="line"><span>    &#39;AJAXCRAWL_ENABLED&#39;: True</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  rules = ( Rule(LinkExtractor(), callback=&#39;parse_asswood&#39;), )</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  def parse_asswood(self, response):</span></span>
<span class="line"><span>    if isinstance(response, scrapy.http.TextResponse):</span></span>
<span class="line"><span>      item = AssWoodItem()</span></span>
<span class="line"><span>      item[&#39;ass&#39;] = response.text.casefold().count(&#39;ass&#39;)</span></span>
<span class="line"><span>      item[&#39;wood&#39;] = response.text.casefold().count(&#39;wood&#39;)</span></span>
<span class="line"><span>      item[&#39;url&#39;] = response.url</span></span>
<span class="line"><span>      yield item</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def startButthead(domainslist, urlslist, asswoodqueue):</span></span>
<span class="line"><span>  crawlprocess = CrawlerProcess({</span></span>
<span class="line"><span>      &#39;USER_AGENT&#39;: &#39;Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)&#39;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  crawlprocess.crawl(ButtheadSpider, allowed_domains = domainslist, start_urls = urlslist)</span></span>
<span class="line"><span>  crawlprocess.start()</span></span>
<span class="line"><span>  asswoodqueue.put( (ass, wood, totalpages) )</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>  asswoodqueue = Queue()</span></span>
<span class="line"><span>  domains=getdomains()</span></span>
<span class="line"><span>  startpages=getstartpages(domains)</span></span>
<span class="line"><span>  processlist =[]</span></span>
<span class="line"><span>  cores = cpu_count()</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  for i in range(10):</span></span>
<span class="line"><span>    domainsublist = domains[i * 50:(i + 1) * 50]</span></span>
<span class="line"><span>    pagesublist = startpages[i * 50:(i + 1) * 50]</span></span>
<span class="line"><span>    p = Process(target = startButthead, args = (domainsublist, pagesublist, asswoodqueue))</span></span>
<span class="line"><span>    processlist.append(p)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  for i in range(cores):</span></span>
<span class="line"><span>    processlist[i].start()</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  time.sleep(180)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  i = cores</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  while i != 10:</span></span>
<span class="line"><span>    time.sleep(60)</span></span>
<span class="line"><span>    if psutil.cpu_percent() &lt; 66.7:</span></span>
<span class="line"><span>      processlist[i].start()</span></span>
<span class="line"><span>      i += 1</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  for i in range(10):</span></span>
<span class="line"><span>    processlist[i].join()</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  for i in range(10):</span></span>
<span class="line"><span>    asswoodtuple = asswoodqueue.get()</span></span>
<span class="line"><span>    ass += asswoodtuple[0]</span></span>
<span class="line"><span>    wood += asswoodtuple[1]</span></span>
<span class="line"><span>    totalpages += asswoodtuple[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  print(&#39;Uhh, that was, like, &#39; + str(totalpages) + &#39; pages crawled.&#39;)</span></span>
<span class="line"><span>  print(&#39;Uh huhuhuhuh. It said ass &#39; + str(ass) + &#39; times.&#39;)</span></span>
<span class="line"><span>  print(&#39;Uh huhuhuhuh. It said wood &#39; + str(wood) + &#39; times.&#39;)</span></span></code></pre></div><hr>`,5)),a("p",null,[s[60]||(s[60]=n("via: ",-1)),l(p,{href:"https://blog.dxmtechsupport.com.au/speed-test-x86-vs-arm-for-web-crawling-in-python/"},{default:t(()=>[...s[59]||(s[59]=[n("https://blog.dxmtechsupport.com.au/speed-test-x86-vs-arm-for-web-crawling-in-python/",-1)])]),_:1})]),a("p",null,[s[65]||(s[65]=n("作者：",-1)),l(p,{href:"https://blog.dxmtechsupport.com.au/author/james-mawson/"},{default:t(()=>[...s[61]||(s[61]=[n("James Mawson",-1)])]),_:1}),s[66]||(s[66]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[62]||(s[62]=[n("lujun9972",-1)])]),_:1}),s[67]||(s[67]=n(" 譯者：",-1)),l(p,{href:"https://github.com/HankChow"},{default:t(()=>[...s[63]||(s[63]=[n("HankChow",-1)])]),_:1}),s[68]||(s[68]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[64]||(s[64]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[71]||(s[71]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[69]||(s[69]=[n("LCTT",-1)])]),_:1}),s[72]||(s[72]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:t(()=>[...s[70]||(s[70]=[n("Linux中國",-1)])]),_:1}),s[73]||(s[73]=n(" 榮譽推出",-1))])])}const P=i(u,[["render",m]]);export{S as __pageData,P as default};
