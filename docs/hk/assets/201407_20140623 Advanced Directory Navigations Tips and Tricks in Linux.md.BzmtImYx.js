import{_ as a,a0 as o,w as r,s,ao as l,I as i,x as e,a1 as t,A as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"Linux 目錄導航技巧 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 目錄導航技巧 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 目錄導航技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 目錄導航技巧 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140623 Advanced Directory Navigations Tips and Tricks in Linux","title":"Linux 目錄導航技巧","tag":"201407","desc":""},"relativePath":"201407/20140623 Advanced Directory Navigations Tips and Tricks in Linux.md","filePath":"[post].md"}'),u={name:"201407/20140623 Advanced Directory Navigations Tips and Tricks in Linux.md"};function h(m,n,c,x,T,g){const p=o("Link");return r(),s("div",null,[n[14]||(n[14]=l(`<h1 id="linux-目錄導航技巧" tabindex="-1">Linux 目錄導航技巧 <a class="header-anchor" href="#linux-目錄導航技巧" aria-label="Permalink to “Linux 目錄導航技巧”">​</a></h1><p>目錄當行是命令列系統的基礎概念.雖然不是什麼難以理解的東西，但是知道一些技巧能夠豐富你的經驗並且提高工作效率.在這篇文章中,我們會討論這些小技巧。</p><h3 id="我們已經知道的東西" tabindex="-1">我們已經知道的東西 <a class="header-anchor" href="#我們已經知道的東西" aria-label="Permalink to “我們已經知道的東西”">​</a></h3><p>在開始高級技巧之前，有一些必須知道的基本命令：</p><ul><li>‘pwd’顯示當前目錄</li><li>‘cd’ 改變當前目錄</li><li>‘cd’ 跟兩個點(cd ..)能返回父目錄</li><li>‘cd’ 跟着相對目錄就能直接切換當相對目錄下</li><li>‘cd’ 跟着絕對目錄就能切換到絕對目錄下</li></ul><h3 id="高階技巧" tabindex="-1">高階技巧 <a class="header-anchor" href="#高階技巧" aria-label="Permalink to “高階技巧”">​</a></h3><p>這節將介紹幾個技巧方便你進行目錄的切換</p><h3 id="從任何地方回到home目錄" tabindex="-1">從任何地方回到home目錄 <a class="header-anchor" href="#從任何地方回到home目錄" aria-label="Permalink to “從任何地方回到home目錄”">​</a></h3><p>雖然使用‘cd /home/&lt;你的主目錄&gt;’, 不是什麼大麻煩, 但是有一種方法直接打‘cd’ 就能回到你的主目錄.</p><p>例子：</p><pre><code>$ pwd
/usr/include/netipx
$ cd
$ pwd
/home/himanshu
</code></pre><p>所以無論你在哪個目錄下，都能這麼幹，然後回到home目錄。</p><p><strong>注意</strong>- 如果要切換到某個其它的指定用户的目錄下, 就使用 ‘cd ~user_name&#39;</p><h3 id="用cd-在目錄間切換" tabindex="-1">用cd - 在目錄間切換 <a class="header-anchor" href="#用cd-在目錄間切換" aria-label="Permalink to “用cd - 在目錄間切換”">​</a></h3><p>假設你的當前工作目錄是這樣的：</p><pre><code>$ pwd
/home/himanshu/practice
</code></pre><p>如果你想切換到 <strong>/usr/bin/X11</strong>， 然後又想回到之前的目錄。 你會怎麼做? 最直接的 :</p><pre><code>$ cd /usr/bin/X11
$ cd /home/himanshu/practice/
</code></pre><p>雖然這樣行得通，但是要記住這些複雜的目錄就太笨了。這種情況下使用 ‘cd -’ 命令就行.</p><p>使用 ‘cd -’的第一步和上面的例子是一樣的, 你可以 cd 到你想要切換到的&lt;路徑&gt;下，但是回到之前的目錄用 ‘cd -’就可以。</p><pre><code>$ cd /usr/bin/X11
$ cd -
/home/himanshu/practice
$ pwd
/home/himanshu/practice
</code></pre><p>如果你想再次回到剛剛訪問的目錄(在這個例子中是/usr/bin/X11)，再使用&#39;cd -&#39;就可以。但是這個命令只會記住上一次訪問的目錄，這是一個缺點。</p><h3 id="用-pushd-和-popd-來切換目錄" tabindex="-1">用 pushd 和 popd 來切換目錄 <a class="header-anchor" href="#用-pushd-和-popd-來切換目錄" aria-label="Permalink to “用 pushd 和 popd 來切換目錄”">​</a></h3><p><img src="http://linoxide.com/wp-content/uploads/2014/06/pushd-popd.jpg" alt="directory navigation"></p><p>如果你對&#39;cd -&#39;非常瞭解了的話，你會發現這個命令只能幫助你在兩個目錄之間移動，但是很多場景下需要在很多目錄之間切換。比如你要從A切換到B再到C然後又想回到A。</p><p>一般來説，你需要打出A的完整路徑，但是如果這個路徑非常複雜，將是非常煩人的一件事，特別是在你的切換非常頻繁的話。</p><p>一些場景下可以使用 ‘pushd’ 還有 ‘popd’ 命令。 ‘pushd’ 將一個目錄存到內存中,‘popd’ 將目錄從內存中去除，並且轉換到那個目錄下。</p><p>例如：</p><pre><code>$ pushd .
/usr/include/netipx /usr/include/netipx
$ cd /etc/hp/
$ cd /home/himanshu/practice/
$ cd /media/
$ popd
/usr/include/netipx
$ pwd
/usr/include/netipx
</code></pre><p>使用‘pushd’ 命令存儲當前的工作目錄 (用 .表示)， 然後切換到各種各樣的目錄去。為了返回之前的目錄，只要使用 ‘popd’命令就行了。</p>`,30)),i("p",null,[n[1]||(n[1]=e("（LCTT譯註：顯然，pushd和popd 是堆棧式操作，你可以push多個目錄，然後逐一pop出來，自己試試吧。） （LCTT譯註：我們之前介紹的",-1)),t(p,{href:"http://linux.cn/article-3401-1.html"},{default:d(()=>[...n[0]||(n[0]=[e("autojump",-1)])]),_:1}),n[2]||(n[2]=e("，更加智能，不過需要安裝一下。）",-1))]),n[15]||(n[15]=i("p",null,[i("strong",null,"注意"),e("- 你也可以使用不帶參數的 ‘pushd’ 來切換到之前存儲的目錄, 但是不會像 ‘popd’ 一樣去除這個目錄。")],-1)),n[16]||(n[16]=i("hr",null,null,-1)),i("p",null,[n[4]||(n[4]=e("via: ",-1)),t(p,{href:"http://linoxide.com/linux-command/directory-navigations-tips-tricks/"},{default:d(()=>[...n[3]||(n[3]=[e("http://linoxide.com/linux-command/directory-navigations-tips-tricks/",-1)])]),_:1})]),i("p",null,[n[7]||(n[7]=e("譯者：",-1)),t(p,{href:"https://github.com/ggaaooppeenngg"},{default:d(()=>[...n[5]||(n[5]=[e("ggaaooppeenngg",-1)])]),_:1}),n[8]||(n[8]=e(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:d(()=>[...n[6]||(n[6]=[e("wxy",-1)])]),_:1})]),i("p",null,[n[11]||(n[11]=e("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...n[9]||(n[9]=[e("LCTT",-1)])]),_:1}),n[12]||(n[12]=e(" 原創翻譯，",-1)),t(p,{href:"http://linux.cn/"},{default:d(()=>[...n[10]||(n[10]=[e("Linux中國",-1)])]),_:1}),n[13]||(n[13]=e(" 榮譽推出",-1))])])}const C=a(u,[["render",h]]);export{b as __pageData,C as default};
