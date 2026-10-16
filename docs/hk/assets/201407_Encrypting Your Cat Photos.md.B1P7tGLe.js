import{_ as p,a0 as o,w as i,s as d,ao as l,I as n,x as t,a1 as a,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"給貓咪照片加密 | LCTT x X-CMD","titleTemplate":false,"description":"給貓咪照片加密 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"給貓咪照片加密 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"給貓咪照片加密 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/Encrypting Your Cat Photos","title":"給貓咪照片加密","tag":"201407","desc":""},"relativePath":"201407/Encrypting Your Cat Photos.md","filePath":"[post].md"}'),u={name:"201407/Encrypting Your Cat Photos.md"};function m(h,e,f,c,T,y){const r=o("Link");return i(),d("div",null,[e[14]||(e[14]=l(`<h1 id="給貓咪照片加密" tabindex="-1">給貓咪照片加密 <a class="header-anchor" href="#給貓咪照片加密" aria-label="Permalink to “給貓咪照片加密”">​</a></h1><p>事實上，我的硬盤上不存在那種不願意被別人看到的東西，只存有一些貓咪的照片、一些記錄着想寫的書的想法的文本文件，或者是一些短篇故事的文本，也有一些寫了一半的 NaNoWriMo 小説文件。簡單的説，我的硬盤就沒有加密的必要，因為沒有什麼可隱藏的。可問題是，我們錯誤的把“隱私的渴望”跟“要隱藏某東西”兩概念混淆在一起。比如説我生活的美國，我們視隱私權利是理所當然的事，但不包括那些傳統所認為的“某人的隱藏色情或炸彈”。隱私考慮的是一些平常的事情。</p><p>我居住在密歇根州。這兒的冬天很冷，我趨向於把温度設置在華氏 75 度左右。對您們來説這個温度可能高了，但在我的家裏剛好合適。多虧我的家是屬於私有的，我的鄰居不可能知道我們保持了這麼高的温度，否則一但他們看到冬天如此“浪費”能源的家庭，這些鄰居心裏會很不平衡的。事實上，本地條規中有一條明確指出任何超過華氏 60 度的就算是生態浪費。我並不想與這種僵老的條例較真，所以我僅僅想保守我們舒適的房子的秘密。我們並不想隱藏任何事情，但也並不是任何事情都要讓外人知道。</p><p>很明顯，我舉的例子有點弱智，但我希望的是這能引起大家的思考。現代的 Linux 系統很容易的就可以對我們的數據進行加密，並且很可靠，所以為什麼不好好利用利用呢？</p><h3 id="加密原理" tabindex="-1">加密原理? <a class="header-anchor" href="#加密原理" aria-label="Permalink to “加密原理?”">​</a></h3><p>我不會涉及太多關於加密原理的細節，但要明白最基本的原理，即使是最簡單的實現，這是必須的。要加密和解密一個文件，需要兩把“鑰匙”。一把是私鑰，正如名字所示，屬於私有的。我寧願把私鑰看作是真實的鑰匙——你想要多少就可造出多少，但這樣做是不明智的。同樣的，私鑰你造的越多，某些不懷好意的人得到其中一把的機率就越大，他們就會闖入你的公寓（額，我的意思是指那些文件）。</p><p>公鑰更像是鎖的樣子，只有你能（用你的私鑰）打開此鎖。這公鑰任何人都可以得到，你可以將它張貼在網站上、把它放在你的 E-mail 中、甚至紋在你的背上。其它人想創建一個只有你能訪問的文件，就可以使用此公鑰來加密。</p><p>這種一對多（LCTT譯註：指別人可以加密多個文件，而只有你的一個私鑰才能解密）的情況也有個很酷的副作用。如果你用你的私鑰來加密一些東西，任何人都可以用你提供的公鑰來解密它們。這聽起來很傻，但這種情景很有用。雖然加密的文件不能免於被窺視，但是它能保證此文件確實來自於你而沒有被惡意改動過。用你的公鑰能解密的文件僅僅只能是用你私鑰加密過的。用這種方式，用私鑰加密的文件即是數字“簽名”文件。（LCTT譯註：既然是任何人都可以用公鑰解密，其實加密沒有意義，相反，僅僅用你的私鑰做一個簽名指紋，別人只需要用你的公鑰來驗證該簽名是否一致即可判斷是否來自你。）</p><p>（LCTT譯註：其實本文此處所述的加密解密、簽名校驗等原理不完全正確，和實際的非對稱加密情形有所差異，不過比較容易理解和類比。）</p><h4 id="通用加密步驟" tabindex="-1">通用加密步驟: <a class="header-anchor" href="#通用加密步驟" aria-label="Permalink to “通用加密步驟:”">​</a></h4><ol><li>你有一個文件想要發送給蘇茜 ，所以你得使用蘇茜的公鑰來加密，這樣就只有 蘇茜才能打開這個文件，但蘇茜沒有辦法知道是誰給她發送的文件。因為任何一個人都可以用她的公鑰來加密文件。</li><li>因此，你得把你的文件用蘇茜的公鑰和你的私鑰都加密。蘇茜將不得不解密兩次，但她知道它是來自於你的文件。（LCTT譯註：實際上應該是用你的私鑰要做簽名，生成一小段簽名指紋，而不是對已經加密的文件再次加密。）</li><li>蘇茜接收到此文件後會用能證明來自於你的公鑰來解密第一層。（LCTT譯註：校驗簽名，確認來自你的私鑰的簽名正確。）</li><li>然後用她的私鑰來解密第二層的密碼，這是唯一的能夠將原始文件進行解密的鑰匙了（因為你是用她的公鑰來加密的）。</li></ol><p>當然，這情景就是用來安全傳輸文件的加密手段。這也是加密你的文件（或者分區）相當常用及簡單的方法。就讓我們開始來對文件進行加密吧，因為大多數人都想加密他們的系統。</p><h3 id="始於簡" tabindex="-1">始於簡 <a class="header-anchor" href="#始於簡" aria-label="Permalink to “始於簡”">​</a></h3><p>在深入更復雜的各種加密設置操作前，我們先做簡單的對文件加密例子。能處理加密的應用程序有很多很多，事實上，對文件和系統進行加密的各種可用軟件選擇，很容易就會讓我們變得焦頭爛額。現在，我們就使用一款很基本的（但非常強大）命令列工具來對文件加密。 GPG （英文名：Gnu Privacy Guard）是一款對商業軟件 PGP（英文名：Pretty Good Protection）的開源實現軟件。它具有加密、簽名及管理多個密鑰等功能。用例子説明，讓我們簡單的加密一個文件吧。</p><p>我們假設你有一個名叫 secret_manifesto.txt 的文件，它包含有關於生命、宇宙及一切事物的秘密。使用 GPG，你只需要一個密碼就可以加密此文件。使用密碼遠比使用公鑰和私鑰對簡單，因為它只是用你的密碼加密。雖然這比較容易讓你的文件遭受到破解（比如使用彩虹表或其他黑客工具暴力破解），但像它的名字中所宣稱的：這是相當不錯的保護。要加密你的文件，可以這樣做：</p><pre><code># gpg -c secret_manifesto.txt
  Enter passphrase:
  Repeat passphrase:
</code></pre><p>一但完成，在相同的目錄下就會多出個新的文件，它默認的名字是 secret_manifesto.txt.gpg 。這是一個二進制文件，這意味着它真的比較小，但是要將其內容拷貝/粘貼到電子郵件（e-mail）或 即時消息（IM） 就不可能了（LCTT譯註：當然你可以使用附件方式。）。要使其便於拷貝等操作，可以添加 -a 標誌，這將創建一個只包含 ASCII 碼文本的加密文件：</p><pre><code># gpg -a -c secret_manifesto.txt
  Enter passphrase:
  Repeat passphrase:
# ls -l
-rw-rw-r--  1 spowers spowers    6 Nov 23 1:26 secret_manifesto.txt
-rw-rw-r--  1 spowers spowers  174 Nov 23 1:27 secret_manifesto.txt.asc
-rw-rw-r--  1 spowers spowers   55 Nov 23 1:26 secret_manifesto.txt.gpg
</code></pre><p>注意到現在多了一個以 .asc 為擴展名的文件。它是個純文本文件，從上面的代碼段示例可以看到它比二進制的加密文件還大，當然比原文本文件就大的更多了。一但你把文件加密了，也確實想要對些信息保密，最明智的就是把原文本文件刪除掉。（LCTT譯註：千萬記住密碼啊，否則誰也幫不了你了——你得自己破解自己的密碼啦:&gt;）</p><p>要解密文件，你需要再一次使用 GPG 程序。不管是二進制的還是 ASCII 文件，使用相同的命令就可以解密。如下所示：</p><pre><code># gpg secret_manifesto.txt.asc
 gpg: CAST5 encrypted data
 Enter passphrase:
 gpg: encrypted with 1 passphrase
 File \`secret_manifesto.txt&#39; exists. Overwrite? (y/N)
</code></pre><p>注意到上面的例子中，我沒有刪除源文本文件，所以 GPG 給出了是否覆蓋選項提示。一但操作完成，我的未加密的源文件又回來了。如果你僅僅只有一兩個文件要保護，那基於命令列的 GPG 程序正是你所需的。但如果你想實現在系統上指定一個區域，任何保存到這區域的的文件都會自動加密的話，就有點複雜了。可這也並不是非常的困難，讓我們用一個非常簡單的示範例子來講解吧。</p><h3 id="加密-usb-驅動盤" tabindex="-1">加密 USB 驅動盤 <a class="header-anchor" href="#加密-usb-驅動盤" aria-label="Permalink to “加密 USB 驅動盤”">​</a></h3><p>如我前面提到的，要加密有很多可選的方式方法。加密磁盤分區最通用的一種方法是 LUKS（Linux Unified Key Setup） 系統。一個使用 LUKS 格式化分區的 USB 驅動盤可以被大多數系統自動識別到。實際上，如果你使用的是像 Ubuntu 桌面這樣的桌面環境系統的話，加密 USB 驅動盤其實就是在格式化過程中簡單的勾選上一個複選框而已。雖然這是加密 USB 盤最容易讓人接受的方式，但我還是想演示如何在命令列下進行加密，因為這種方式可以讓你明白在加密的後面具體發生了什麼。</p><h4 id="步驟-1-識別您的-usb-驅動盤。" tabindex="-1">步驟 1: 識別您的 USB 驅動盤。 <a class="header-anchor" href="#步驟-1-識別您的-usb-驅動盤。" aria-label="Permalink to “步驟 1: 識別您的 USB 驅動盤。”">​</a></h4><p>在您插入 USB 驅動盤後，如果在終端輸入 <code>dmesg</code> 命令，將會顯示出所有的系統信息，包括剛插入的 USB 驅動盤的設備名字。 確保設備標識是正確的，因為後面要進行的操作會破壞驅動盤上的所有數據。您也不想一不小心就格式化掉正常的磁盤吧。（雖然不用提醒，但我還是要説，確保您的 USB 驅動盤已經沒有你想保留的數據，因為這是一個破壞性的過程。）</p><h4 id="步驟-2-對-usb-驅動盤進行分區。" tabindex="-1">步驟 2: 對 USB 驅動盤進行分區。 <a class="header-anchor" href="#步驟-2-對-usb-驅動盤進行分區。" aria-label="Permalink to “步驟 2: 對 USB 驅動盤進行分區。”">​</a></h4><p>假設，在您的系統上 USB 驅動盤是 /dev/sdb 這個設備，您需要在這個驅動上創建一個單分區（LCTT譯註：設備是sdb，其上可以有多個分區，分別叫sdb1、sdb2等等）。我們使用 fdisk 命令。下面是 fdisk 必須的交互操作。一般地，用 o 命令來創建一個新的空分區，然後用 w 命令來保存設置。然後重新運行 fdisk 命令，並用 n 命令來創建一個新的主分區，接下來保持默認的以使用整個設備空間：</p><pre><code># sudo fdisk /dev/sdb

Command (m for help): o
Building a new DOS disklabel with disk identifier 0x1234567.
Changes will remain in memory only, until you decide to write them.
After that, of course, the previous content won&#39;t be recoverable.

Command (m for help): w
The partition table has been altered!

# sudo fdisk /dev/sdb
Command (m for help): n
Command action
e   extended
p   primary partition (1-4)
p
Partition number (1-4, default 1): 1
Using default value 1
First sector (2048-1016522, default 2048):
Using default value 2048
Last sector, +sectors or +size{K,M,G} (2048-1016522, default 1016522):
Using default value 1016522

Command (m for help): w
The partition table has been altered!
</code></pre><p>現在你的 USB 驅動盤有了一個單分區了（/dev/sdb1），但還沒有文件系統，這正是我們所想要的，因為 LUKS 系統需要在創建文件系統前在您的分區上創建一個加密層。因此，在創建文件系統之前，就讓我們在分區上先創建一個 LUKS 層吧，可以使用 cryptsetup 程序。如果您還沒有安裝 cryptsetup 的話，可以搜索您系統發佈版本的倉庫源，裏面就有。下面就開始創建 LUKS 加密分區層:</p><pre><code># cryptsetup luksFormat /dev/sdb1

WARNING!
========
This will overwrite data on /dev/sdb1 irrevocably.

Are you sure? (Type uppercase yes): YES
Enter LUKS passphrase:
Verify passphrase: 
</code></pre><p>按照提示的操作，一定要確保記得您的密碼！注意，這兒的“密碼單詞”不僅僅只表示一個單詞。這只是一個習慣，因而得名，設置的越長越複雜，越難被破解。</p><p>一但上面的操作完成，就創建好了一個加密的分區，但它還沒有被掛載或格式化。要做的第一步就是掛載分區，可以再一次使用 cryptsetup 工具：</p><pre><code># cryptsetup luksOpen /dev/sdb1 my_crypto_disk
Enter passphrase for /dev/sdb1:
</code></pre><p>當輸入完密碼後，您輸入名字的設備就會像虛擬硬盤一樣被掛載上。通常，它掛載在 /dev/mapper/設備名 的目錄下，所以這個例子所示的分區就掛載到了 /dev/mapper/my_crypto_disk 目錄。</p><p>現在這個設備就可當做未加密的捲來訪問了。 只要它一被掛載，就跟其它未加密的卷是一樣的了，這就意味着您想要使用它的話就需要先建立文件系統：</p><pre><code># mkfs.vfat /dev/mapper/my_crypto_disk -n my_crypto_disk
mkfs.vfat 3.0.9 (31 Jan 2010)
</code></pre><p>現在磁盤的功能完備了，可以像其它磁盤一樣正常掛載使用了。實際上，如果你使用的是現代的圖形用户界面系統的話，只要你把 USB 驅動盤一插入計算機，將會提示您輸入密碼，然後就自動掛載上了。退出的時候跟普通盤一樣，裏面存儲的數據會被加密，直到下次輸入密碼。在命令列裏使用 cryptsetup 卸載以及重加密驅動盤也是很簡單的：</p><pre><code># cryptsetup luksClose my_crypto_disk
</code></pre><h3 id="這僅僅只是冰山一角" tabindex="-1">這僅僅只是冰山一角 <a class="header-anchor" href="#這僅僅只是冰山一角" aria-label="Permalink to “這僅僅只是冰山一角”">​</a></h3><p>寫這篇文章，我的目的是希望剝開加密後面的秘密。加密和解密單個文件很簡單，要加密整個 USB 驅動盤也不是太困難（如果使用的是圖形用户界面工具就更容易了）。對於大多數系統的發佈版本來説，在安裝過程中就可以對整個 home 目錄進行加密。加密是對您的整個 home 目錄起作用，然而有些問題就需要特別處理了。例如，您沒登陸時就運行的任務在大多數情況下是不會訪問您的 home 目錄的，但如果您有調度任務需要訪問 home 目錄的話，應該進行修改，讓其訪問系統中其它目錄的數據。我覺得在安全和便利之中平衡的中庸之道還是加密 USB 驅動盤，然後在上面存儲個人資料。</p>`,41)),n("p",null,[e[1]||(e[1]=t("我必須警告您，一但您考慮到安全的問題，就會想要把任何東西都加密起來。這不是什麼壞的事情，但是像要對 home 目錄加密這種情況，是會碰到一些問題的。如果您使用不同系統的話，跨平台訪問也是個大問題。像這種情況，我強烈建議您使用 ",-1)),a(r,{href:"http://www.truecrypt.org/"},{default:s(()=>[...e[0]||(e[0]=[t("TrueCrypt",-1)])]),_:1}),e[2]||(e[2]=t("。在前期的文章片段裏我提到過 TrueCrypt，它是一款開源的，跨平台的加密系統軟件。可以對文件、文件夾、分區等等進行加密，同時可以在任何系統中訪問加密的數據。像 Windows、Mac 及 Linux 客户端都可以使用。社區也有大力的支持。（LCTT譯註：悲慘的是，稜鏡門事件之後，TrueCrypt的作者已經放棄了該產品，並且強烈建議大家也不要使用，具體可以參考本站的一些相關消息。所以痛失TrueCrypt之後，我們還有哪些替代品？）",-1))]),e[15]||(e[15]=n("p",null,"希望對文件進行加密的目的並不是為了隱藏某些東西。就像即使您有個好鄰居，最好夜裏也得鎖門一樣，對您的個人數據進行加密也是個很正常的舉動。如果您想在網上與大家分享你的 Whiskerton 先生戴着可愛的小豆豆帽子的照片的話，這是您的權利。但其它的人，比如他們索檢你硬盤的時候，就不需要讓他們看到了。",-1)),e[16]||(e[16]=n("hr",null,null,-1)),n("p",null,[e[4]||(e[4]=t("via: ",-1)),a(r,{href:"http://www.linuxjournal.com/content/encrypting-your-cat-photos"},{default:s(()=>[...e[3]||(e[3]=[t("http://www.linuxjournal.com/content/encrypting-your-cat-photos",-1)])]),_:1})]),n("p",null,[e[7]||(e[7]=t("譯者：",-1)),a(r,{href:"https://github.com/runningwater"},{default:s(()=>[...e[5]||(e[5]=[t("runningwater",-1)])]),_:1}),e[8]||(e[8]=t(" 校對：",-1)),a(r,{href:"https://github.com/wxy"},{default:s(()=>[...e[6]||(e[6]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[11]||(e[11]=t("本文由 ",-1)),a(r,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[9]||(e[9]=[t("LCTT",-1)])]),_:1}),e[12]||(e[12]=t(" 原創翻譯，",-1)),a(r,{href:"http://linux.cn/"},{default:s(()=>[...e[10]||(e[10]=[t("Linux中國",-1)])]),_:1}),e[13]||(e[13]=t(" 榮譽推出",-1))])])}const g=p(u,[["render",m]]);export{w as __pageData,g as default};
