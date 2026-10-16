import{_ as d,a0 as e,w as s,s as p,ao as l,I as a,x as i,a1 as o,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"Linux id 命令 - 顯示用户id和組id信息 | LCTT x X-CMD","titleTemplate":false,"description":"Linux id 命令 - 顯示用户id和組id信息 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux id 命令 - 顯示用户id和組id信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux id 命令 - 顯示用户id和組id信息 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/Linux id Command - Print user ID and group ID information","title":"Linux id 命令 - 顯示用户id和組id信息","tag":"201401","desc":""},"relativePath":"201401/Linux id Command - Print user ID and group ID information.md","filePath":"[post].md"}'),g={name:"201401/Linux id Command - Print user ID and group ID information.md"};function u(m,n,x,h,D,I){const t=e("Link");return s(),p("div",null,[n[11]||(n[11]=l(`<h1 id="linux-id-命令-顯示用户id和組id信息" tabindex="-1">Linux id 命令 - 顯示用户id和組id信息 <a class="header-anchor" href="#linux-id-命令-顯示用户id和組id信息" aria-label="Permalink to “Linux id 命令 - 顯示用户id和組id信息”">​</a></h1><p>要登入一台計算機，我們需要一個用户名。用户名是一個可以被計算機識別的身份。基於此，計算機會對使用這個用户名的登陸的人應用一系列的規則。在Linux系統下，我們可以使用 <strong>id</strong> 命令。</p><h3 id="什麼是-id-命令" tabindex="-1">什麼是 id 命令 <a class="header-anchor" href="#什麼是-id-命令" aria-label="Permalink to “什麼是 id 命令”">​</a></h3><p><strong>id</strong> 命令可以顯示真實有效的用户 ID(UID) 和組 ID(GID)。UID 是對一個用户的單一身份標識。組 ID（GID）則對應多個UID。</p><h3 id="如何使用-id-命令" tabindex="-1">如何使用 id 命令 <a class="header-anchor" href="#如何使用-id-命令" aria-label="Permalink to “如何使用 id 命令”">​</a></h3><p><strong>id</strong> 命令已經默認預裝在大多數 Linux 系統中。要使用它，只需要在你的控制台輸入id。不帶選項輸入 id 會顯示如下。結果會使用活躍用户。</p><pre><code>$ id
</code></pre><p><img src="http://linoxide.com/wp-content/uploads/2013/12/id_default.png" alt="id默認輸出"></p><h4 id="如何讀取輸出" tabindex="-1">如何讀取輸出: <a class="header-anchor" href="#如何讀取輸出" aria-label="Permalink to “如何讀取輸出:”">​</a></h4><ul><li><p>用户 <strong>pungki</strong> 的 <strong>UID</strong> 號碼= <strong>1000</strong>, <strong>GID</strong> 號碼= <strong>1000</strong></p></li><li><p>用户 **pungki ** 是下面的組成員 :</p><p><strong>pungki</strong> 的 GID 號碼= <strong>1000</strong><strong>adm</strong> 的 GID 號碼= <strong>4</strong><strong>cdrom</strong> 的 GID 號碼= <strong>24</strong><strong>sudo</strong> 的 GID 號碼= <strong>27</strong><strong>dip</strong> 的 GID 號碼= <strong>30</strong><strong>plugdev</strong> 的 GID 號碼= <strong>46</strong><strong>lpadmin</strong> 的 GID 號碼= <strong>108</strong><strong>sambashare</strong> 的 GID 號碼= <strong>124</strong></p></li></ul><h3 id="帶選項使用id" tabindex="-1">帶選項使用id <a class="header-anchor" href="#帶選項使用id" aria-label="Permalink to “帶選項使用id”">​</a></h3><p>id 命令可以使用一些選項。下面有一些在日常使用中有用的選項。</p><h4 id="打印用户名、uid-和該用户所屬的所有組" tabindex="-1">打印用户名、UID 和該用户所屬的所有組 <a class="header-anchor" href="#打印用户名、uid-和該用户所屬的所有組" aria-label="Permalink to “打印用户名、UID 和該用户所屬的所有組”">​</a></h4><p>要這麼做，我們可以使用 <strong>-a</strong> 選項</p><pre><code>$ id -a
</code></pre><p><img src="http://linoxide.com/wp-content/uploads/2013/12/id_a.png" alt="-a 選項"></p><h4 id="輸出所有不同的組id-有效的-真實的和補充的" tabindex="-1">輸出所有不同的組ID (有效的，真實的和補充的) <a class="header-anchor" href="#輸出所有不同的組id-有效的-真實的和補充的" aria-label="Permalink to “輸出所有不同的組ID (有效的，真實的和補充的)”">​</a></h4><p>我們可以使用 <strong>-G</strong> 選項來實現。</p><pre><code>$ id -G
</code></pre><p><img src="http://linoxide.com/wp-content/uploads/2013/12/id_G.png" alt="-G 選項"></p><p>結果只會顯示 GID 號。你可以和 <strong>/etc/group</strong> 文件比較。下面是 <strong>/etc/group</strong> 文件的示例內容：</p><pre><code>root:x:0:
daemon:x:1:
bin:x:2:
sys:x:3:
adm:x:4:pungki
fax:x:21:
voice:x:22:
cdrom:x:24:pungki
floppy:x:25:
tape:x:26:
sudo:x:27:pungki
audio:x:29:pulse
dip:x:30:pungki
www-data:x:33:
backup:x:34:
operator:x:37:
sasl:x:45:
plugdev:x:46:pungki
ssl-cert:x:107:
lpadmin:x:108:pungki
saned:x:123:
sambashare:x:124:pungki
winbindd_priv:x:125:
</code></pre><h4 id="只輸出有效的組id" tabindex="-1">只輸出有效的組ID <a class="header-anchor" href="#只輸出有效的組id" aria-label="Permalink to “只輸出有效的組ID”">​</a></h4><p>通過使用 <strong>-g</strong> 選項來只輸出有效組ID。</p><pre><code>$ id -g
</code></pre><p><img src="http://linoxide.com/wp-content/uploads/2013/12/id_g1.png" alt="-g 選項"></p><h4 id="輸出特定用户信息" tabindex="-1">輸出特定用户信息 <a class="header-anchor" href="#輸出特定用户信息" aria-label="Permalink to “輸出特定用户信息”">​</a></h4><p>我們可以輸出特定的用户信息相關的 UID 和 GID。只需要在 id 命令後跟上用户名。</p><pre><code>$ id leni
</code></pre><p><img src="http://linoxide.com/wp-content/uploads/2013/12/id_leni.png" alt="leni 用户"></p><p>上面的命令會打印用户 <strong>leni</strong> 的 UID 和 GID。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>當我們想知道某個用户的 UID 和 GID 時 id 命令是非常有用的。一些程序可能需要 UID/GID 來運行。id 使我們更加容易地找出用户的 UID 以 GID 而不必在 /etc/group 文件中搜尋。如往常一樣，你可以在控制台輸入 <strong>man id</strong> 進入 id 的手冊頁來獲取更多的詳情。</p><hr>`,34)),a("p",null,[n[1]||(n[1]=i("via: ",-1)),o(t,{href:"http://linoxide.com/linux-command/linux-id-command/"},{default:r(()=>[...n[0]||(n[0]=[i("http://linoxide.com/linux-command/linux-id-command/",-1)])]),_:1})]),a("p",null,[n[4]||(n[4]=i("譯者：",-1)),o(t,{href:"https://github.com/geekpi"},{default:r(()=>[...n[2]||(n[2]=[i("geekpi",-1)])]),_:1}),n[5]||(n[5]=i(" 校對：",-1)),o(t,{href:"https://github.com/carolinewuyan"},{default:r(()=>[...n[3]||(n[3]=[i("Caroline",-1)])]),_:1})]),a("p",null,[n[8]||(n[8]=i("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[6]||(n[6]=[i("LCTT",-1)])]),_:1}),n[9]||(n[9]=i(" 原創翻譯，",-1)),o(t,{href:"http://linux.cn/"},{default:r(()=>[...n[7]||(n[7]=[i("Linux中國",-1)])]),_:1}),n[10]||(n[10]=i(" 榮譽推出",-1))])])}const k=d(g,[["render",u]]);export{b as __pageData,k as default};
