import{_ as s,a0 as a,w as i,s as d,I as p,x as t,a1 as o,A as r,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"使用一次性密碼本通過 SSH 安全登錄 Linux | LCTT x X-CMD","titleTemplate":false,"description":"使用一次性密碼本通過 SSH 安全登錄 Linux | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用一次性密碼本通過 SSH 安全登錄 Linux | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用一次性密碼本通過 SSH 安全登錄 Linux | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150330 How to secure SSH login with one-time passwords on Linux","title":"使用一次性密碼本通過 SSH 安全登錄 Linux","tag":"201505","desc":""},"relativePath":"201505/20150330 How to secure SSH login with one-time passwords on Linux.md","filePath":"[post].md"}'),u={name:"201505/20150330 How to secure SSH login with one-time passwords on Linux.md"};function m(h,e,S,w,f,c){const n=a("Link");return i(),d("div",null,[e[21]||(e[21]=p("h1",{id:"使用一次性密碼本通過-ssh-安全登錄-linux",tabindex:"-1"},[t("使用一次性密碼本通過 SSH 安全登錄 Linux "),p("a",{class:"header-anchor",href:"#使用一次性密碼本通過-ssh-安全登錄-linux","aria-label":"Permalink to “使用一次性密碼本通過 SSH 安全登錄 Linux”"},"​")],-1)),e[22]||(e[22]=p("p",null,"有人説，安全不是一個產品，而是一個過程（LCTT 注：安全公司 McAfee 認為，安全風險管理是一個方法論，而不是安全產品的堆疊）。雖然 SSH 協議被設計成使用加密技術來確保安全，但如果使用不當，別人還是能夠破壞你的系統：比如弱密碼、密鑰泄露、使用過時的 SSH 客户端等，都能引發安全問題。",-1)),p("p",null,[e[1]||(e[1]=t("在考慮 SSH 認證方案時，大家普遍認為",-1)),o(n,{href:"https://linux.cn/article-5444-1.html"},{default:r(()=>[...e[0]||(e[0]=[t("公鑰認證",-1)])]),_:1}),e[2]||(e[2]=t("比密碼認證更安全。然而，公鑰認證技術並不是為公共環境設置的，如果你在一台公用電腦上使用公鑰認證登錄 SSH 服務器，你的服務器已經毫無安全可言了，公用的電腦可能會記錄你的公鑰，或從你的內存中讀取公鑰。如果你不信任本地電腦，那你最好還是使用其他方式登錄服務器。現在就是“一次性密碼（OTP）”派上用場的時候了，就像名字所示，一次性密碼只能被使用一次。這種一次性密碼非常合適在不安全的環境下發揮作用，就算它被竊取，也無法再次使用。",-1))]),p("p",null,[e[5]||(e[5]=t("有個生成一次性密碼的方法是通過",-1)),o(n,{href:"https://linux.cn/article-2642-1.html"},{default:r(()=>[...e[3]||(e[3]=[t("谷歌認證器",-1)])]),_:1}),e[6]||(e[6]=t("，但在本文中，我要介紹的是另一種 SSH 登錄方案：",-1)),o(n,{href:"http://www.cl.cam.ac.uk/~mgk25/otpw.html"},{default:r(()=>[...e[4]||(e[4]=[t("OTPW",-1)])]),_:1}),e[7]||(e[7]=t("，它是個一次性密碼登錄的軟件包。不像谷歌認證，OTPW 不需要依賴任何第三方庫。",-1))]),e[23]||(e[23]=l(`<h3 id="otpw-是什麼" tabindex="-1">OTPW 是什麼 <a class="header-anchor" href="#otpw-是什麼" aria-label="Permalink to “OTPW 是什麼”">​</a></h3><p>OTPW 由一次性密碼生成器和 PAM 認證規則組成。在 OTPW 中一次性密碼由生成器事先生成，然後由用户以某種安全的方式獲得（比如打印到紙上）。另一方面，這些密碼會通過 Hash 加密保存在 SSH 服務器端。當用户使用一次性密碼登錄系統時，OTPW 的 PAM 模組認證這些密碼，並且保證它們不能再次使用。</p><h3 id="步驟1-otpw-的安裝和配置" tabindex="-1">步驟1：OTPW 的安裝和配置 <a class="header-anchor" href="#步驟1-otpw-的安裝和配置" aria-label="Permalink to “步驟1：OTPW 的安裝和配置”">​</a></h3><h4 id="在-debian-ubuntu-或-linux-mint-發行版上" tabindex="-1">在 Debian, Ubuntu 或 Linux Mint 發行版上 <a class="header-anchor" href="#在-debian-ubuntu-或-linux-mint-發行版上" aria-label="Permalink to “在 Debian, Ubuntu 或 Linux Mint 發行版上”">​</a></h4><p>使用 apt-get 安裝：</p><pre><code>$ sudo apt-get install libpam-otpw otpw-bin
</code></pre><p>打開針對 SSH 服務的 PAM 配置文件（/etc/pam.d/sshd），註釋掉下面這行（目的是禁用 PAM 的密碼認證功能）：</p><pre><code>#@include common-auth
</code></pre><p>添加下面兩行（用於打開一次性密碼認證功能）：</p><pre><code>auth       required     pam_otpw.so
session    optional     pam_otpw.so
</code></pre><p><img src="https://farm8.staticflickr.com/7599/16775121360_d1f93feefa_b.jpg" alt=""></p><h4 id="在-fedora-或-centos-rhel-發行版上" tabindex="-1">在 Fedora 或 CentOS/RHEL 發行版上 <a class="header-anchor" href="#在-fedora-或-centos-rhel-發行版上" aria-label="Permalink to “在 Fedora 或 CentOS/RHEL 發行版上”">​</a></h4><p>在基於 RedHat 的發行版中沒有編譯好的 OTPW，所以我們需要使用源代碼來安裝它。</p><p>首先，安裝編譯環境：</p><pre><code>$ sudo yum git gcc pam-devel
$ git clone https://www.cl.cam.ac.uk/~mgk25/git/otpw
$ cd otpw
</code></pre><p>打開 Makefile 文件，編輯以“PAMLIB=”開頭的那行配置：</p><p>64 位系統：</p><pre><code>PAMLIB=/usr/lib64/security
</code></pre><p>32 位系統：</p><pre><code>PAMLIB=/usr/lib/security
</code></pre><p>編譯安裝。需要注意的是安裝過程會自動重啓 SSH 服務一下，所以如果你是使用 SSH 連接到服務器，做好被斷開連接的準備吧（LCTT 譯註：也許不會被斷開連接，即便被斷開連接，請使用原來的方式重新連接即可，現在還沒有換成一次性口令方式。）。</p><pre><code>$ make
$ sudo make install
</code></pre><p>現在你需要更新 SELinux 策略，因為 /usr/sbin/sshd 會往你的 home 目錄寫數據，而 SELinux 默認是不允許這麼做的。如果沒有使用 SELinux 服務（LCTT 注：使用 getenforce 命令查看結果，如果是 enforcing，就是打開了 SELinux 服務），請跳過這一步。</p><pre><code>$ sudo grep sshd /var/log/audit/audit.log | audit2allow -M mypol
$ sudo semodule -i mypol.pp
</code></pre><p>接下來打開 PAM 配置文件（/etc/pam.d/sshd），註釋下面這行（為了禁用密碼認證）：</p><pre><code>#auth       substack     password-auth
</code></pre><p>添加下面兩行（用於打開一次性密碼認證功能）：</p><pre><code>auth       required     pam_otpw.so
session    optional     pam_otpw.so
</code></pre><h4 id="步驟2-配置-ssh-服務器-使用一次性密碼" tabindex="-1">步驟2：配置 SSH 服務器，使用一次性密碼 <a class="header-anchor" href="#步驟2-配置-ssh-服務器-使用一次性密碼" aria-label="Permalink to “步驟2：配置 SSH 服務器，使用一次性密碼”">​</a></h4><p>打開 /etc/ssh/sshd_config 文件，設置下面三個參數。你要確保下面的參數不會重複存在，否則 SSH 服務器可能會出現異常。</p><pre><code>UsePrivilegeSeparation yes
ChallengeResponseAuthentication yes
UsePAM yes
</code></pre><p>你還需要禁用默認的密碼認證功能。另外可以選擇開啓公鑰認證功能，那樣的話你就可以在沒有一次性密碼的時候使用公鑰進行認證。</p><pre><code>PubkeyAuthentication yes
PasswordAuthentication no
</code></pre><p>重啓 SSH 服務器。</p><p>Debian, Ubuntu 或 Linux Mint 發行版：</p><pre><code>$ sudo service ssh restart
</code></pre><p>Fedora 或 CentOS/RHEL 7 發行版：</p><pre><code>$ sudo systemctl restart sshd
</code></pre><p>（LCTT 譯註：雖然這裏重啓了 sshd 服務，但是你當前的 ssh 連接應該不受影響，只是在你完成下述步驟之前，無法按照原有方式建立新的連接了。因此，保險起見，要麼多開一個 ssh 連接，避免誤退出當前連接；要麼將重啓 sshd 服務器步驟放到步驟3完成之後。）</p><h4 id="步驟3-使用-otpw-產生一次性密碼" tabindex="-1">步驟3：使用 OTPW 產生一次性密碼 <a class="header-anchor" href="#步驟3-使用-otpw-產生一次性密碼" aria-label="Permalink to “步驟3：使用 OTPW 產生一次性密碼”">​</a></h4><p>之前提到過，你需要事先創建一次性密碼，並保存起來。使用 otpw-gen 命令創建密碼：</p><pre><code>$ cd ~
$ otpw-gen &gt; temporary_password.txt
</code></pre><p><img src="https://farm9.staticflickr.com/8751/16961258882_c49cfe03fb_b.jpg" alt=""></p><p>這個命令會讓你輸入密碼前綴，當你以後登錄的時候，你需要同時輸入這個前綴以及一次性密碼。密碼前綴是另外一層保護，就算你的一次性密碼錶被泄漏，別人也無法通過暴力破解你的 SSH 密碼。</p><p>設置好密碼前綴後，這個命令會產生 280 個一次性密碼（LCTT 譯註：保存到 ~/.otpw 下），並將它們導出到一個文本文件中（如 temporary_password.txt）。每個密碼（默認是 8 個字符）由一個 3 位十進制數索引。你需要將這個密碼錶打印出來，並隨身攜帶。</p><p><img src="https://farm8.staticflickr.com/7281/16962594055_c2696d5ae1_b.jpg" alt=""></p><p>查看 ./.otpw 文件，它存放了一次性密碼的 HASH 值。頭 3 位十進制數與你隨身攜帶的密碼錶的索引一一對應，在你登錄 SSH 服務器的時候會被用到。</p><pre><code>$ more ~/.otpw
</code></pre><hr><pre><code>OTPW1
280 3 12 8
191ai+:ENwmMqwn
218tYRZc%PIY27a
241ve8ns%NsHFmf
055W4/YCauQJkr:
102ZnJ4VWLFrk5N
2273Xww55hteJ8Y
1509d4b5=A64jBT
168FWBXY%ztm9j%
000rWUSdBYr%8UE
037NvyryzcI+YRX
122rEwA3GXvOk=z
</code></pre><h3 id="測試一次性密碼登錄-ssh-服務器" tabindex="-1">測試一次性密碼登錄 SSH 服務器 <a class="header-anchor" href="#測試一次性密碼登錄-ssh-服務器" aria-label="Permalink to “測試一次性密碼登錄 SSH 服務器”">​</a></h3><p>使用普通的方式登錄 SSH 服務器：</p><pre><code>$ ssh user@remote_host
</code></pre><p>如果 OTPW 成功運行，你會看到一點與平時登錄不同的地方：</p><pre><code>Password 191:
</code></pre><p>現在打開你的密碼錶，找到索引號為 191 的密碼。</p><pre><code>023 kBvp tq/G  079 jKEw /HRM  135 oW/c /UeB  191 fOO+ PeiD  247 vAnZ EgUt
</code></pre><p>從上表可知，191 號密碼是“fOO+PeiD”。你需要加上密碼前綴，比如你設置的前綴是“000”，則你實際需要輸入的密碼是“000fOO+PeiD”。</p><p>成功登錄後，你這次輸入的密碼自動失效。查看 ~/.otpw　文件，你會發現第一行變成“---------------”，這表示 191 號密碼失效了。</p><pre><code>OTPW1
280 3 12 8
---------------
218tYRZc%PIY27a
241ve8ns%NsHFmf
055W4/YCauQJkr:
102ZnJ4VWLFrk5N
2273Xww55hteJ8Y
1509d4b5=A64jBT
168FWBXY%ztm9j%
000rWUSdBYr%8UE
037NvyryzcI+YRX
122rEwA3GXvOk=z
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>在這個教程中，我介紹瞭如何使用 OTPW 工具來設置一次性登錄密碼。你也許意識到了在這種雙因子的認證方式中，打印一張密碼錶讓人感覺好 low，但是這種方式是最簡單的，並且不用依賴任何第三方軟件。無論你用哪種方式創建一次性密碼，在你需要在一個不可信任的環境登錄 SSH 服務器的時候，它們都很有用。你可以就這個主題來分享你的經驗和觀點。</p><hr>`,63)),p("p",null,[e[9]||(e[9]=t("via: ",-1)),o(n,{href:"http://xmodulo.com/secure-ssh-login-one-time-passwords-linux.html"},{default:r(()=>[...e[8]||(e[8]=[t("http://xmodulo.com/secure-ssh-login-one-time-passwords-linux.html",-1)])]),_:1})]),p("p",null,[e[13]||(e[13]=t("作者：",-1)),o(n,{href:"http://xmodulo.com/author/nanni"},{default:r(()=>[...e[10]||(e[10]=[t("Dan Nanni",-1)])]),_:1}),e[14]||(e[14]=t(" 譯者：",-1)),o(n,{href:"https://github.com/bazz2"},{default:r(()=>[...e[11]||(e[11]=[t("bazz2",-1)])]),_:1}),e[15]||(e[15]=t(" 校對：",-1)),o(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[12]||(e[12]=[t("wxy",-1)])]),_:1})]),p("p",null,[e[18]||(e[18]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[16]||(e[16]=[t("LCTT",-1)])]),_:1}),e[19]||(e[19]=t(" 原創翻譯，",-1)),o(n,{href:"http://linux.cn/"},{default:r(()=>[...e[17]||(e[17]=[t("Linux中國",-1)])]),_:1}),e[20]||(e[20]=t(" 榮譽推出",-1))])])}const b=s(u,[["render",m]]);export{P as __pageData,b as default};
