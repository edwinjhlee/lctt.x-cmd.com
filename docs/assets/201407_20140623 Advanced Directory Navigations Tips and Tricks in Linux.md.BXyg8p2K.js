import{_ as a,a0 as o,w as r,s,ao as l,I as i,x as e,a1 as t,A as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"Linux 目录导航技巧 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 目录导航技巧 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 目录导航技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 目录导航技巧 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140623 Advanced Directory Navigations Tips and Tricks in Linux","title":"Linux 目录导航技巧","tag":"201407","desc":""},"relativePath":"201407/20140623 Advanced Directory Navigations Tips and Tricks in Linux.md","filePath":"[post].md"}'),u={name:"201407/20140623 Advanced Directory Navigations Tips and Tricks in Linux.md"};function h(m,n,c,x,T,g){const p=o("Link");return r(),s("div",null,[n[14]||(n[14]=l(`<h1 id="linux-目录导航技巧" tabindex="-1">Linux 目录导航技巧 <a class="header-anchor" href="#linux-目录导航技巧" aria-label="Permalink to “Linux 目录导航技巧”">​</a></h1><p>目录当行是命令行系统的基础概念.虽然不是什么难以理解的东西，但是知道一些技巧能够丰富你的经验并且提高工作效率.在这篇文章中,我们会讨论这些小技巧。</p><h3 id="我们已经知道的东西" tabindex="-1">我们已经知道的东西 <a class="header-anchor" href="#我们已经知道的东西" aria-label="Permalink to “我们已经知道的东西”">​</a></h3><p>在开始高级技巧之前，有一些必须知道的基本命令：</p><ul><li>‘pwd’显示当前目录</li><li>‘cd’ 改变当前目录</li><li>‘cd’ 跟两个点(cd ..)能返回父目录</li><li>‘cd’ 跟着相对目录就能直接切换当相对目录下</li><li>‘cd’ 跟着绝对目录就能切换到绝对目录下</li></ul><h3 id="高阶技巧" tabindex="-1">高阶技巧 <a class="header-anchor" href="#高阶技巧" aria-label="Permalink to “高阶技巧”">​</a></h3><p>这节将介绍几个技巧方便你进行目录的切换</p><h3 id="从任何地方回到home目录" tabindex="-1">从任何地方回到home目录 <a class="header-anchor" href="#从任何地方回到home目录" aria-label="Permalink to “从任何地方回到home目录”">​</a></h3><p>虽然使用‘cd /home/&lt;你的主目录&gt;’, 不是什么大麻烦, 但是有一种方法直接打‘cd’ 就能回到你的主目录.</p><p>例子：</p><pre><code>$ pwd
/usr/include/netipx
$ cd
$ pwd
/home/himanshu
</code></pre><p>所以无论你在哪个目录下，都能这么干，然后回到home目录。</p><p><strong>注意</strong>- 如果要切换到某个其它的指定用户的目录下, 就使用 ‘cd ~user_name&#39;</p><h3 id="用cd-在目录间切换" tabindex="-1">用cd - 在目录间切换 <a class="header-anchor" href="#用cd-在目录间切换" aria-label="Permalink to “用cd - 在目录间切换”">​</a></h3><p>假设你的当前工作目录是这样的：</p><pre><code>$ pwd
/home/himanshu/practice
</code></pre><p>如果你想切换到 <strong>/usr/bin/X11</strong>， 然后又想回到之前的目录。 你会怎么做? 最直接的 :</p><pre><code>$ cd /usr/bin/X11
$ cd /home/himanshu/practice/
</code></pre><p>虽然这样行得通，但是要记住这些复杂的目录就太笨了。这种情况下使用 ‘cd -’ 命令就行.</p><p>使用 ‘cd -’的第一步和上面的例子是一样的, 你可以 cd 到你想要切换到的&lt;路径&gt;下，但是回到之前的目录用 ‘cd -’就可以。</p><pre><code>$ cd /usr/bin/X11
$ cd -
/home/himanshu/practice
$ pwd
/home/himanshu/practice
</code></pre><p>如果你想再次回到刚刚访问的目录(在这个例子中是/usr/bin/X11)，再使用&#39;cd -&#39;就可以。但是这个命令只会记住上一次访问的目录，这是一个缺点。</p><h3 id="用-pushd-和-popd-来切换目录" tabindex="-1">用 pushd 和 popd 来切换目录 <a class="header-anchor" href="#用-pushd-和-popd-来切换目录" aria-label="Permalink to “用 pushd 和 popd 来切换目录”">​</a></h3><p><img src="http://linoxide.com/wp-content/uploads/2014/06/pushd-popd.jpg" alt="directory navigation"></p><p>如果你对&#39;cd -&#39;非常了解了的话，你会发现这个命令只能帮助你在两个目录之间移动，但是很多场景下需要在很多目录之间切换。比如你要从A切换到B再到C然后又想回到A。</p><p>一般来说，你需要打出A的完整路径，但是如果这个路径非常复杂，将是非常烦人的一件事，特别是在你的切换非常频繁的话。</p><p>一些场景下可以使用 ‘pushd’ 还有 ‘popd’ 命令。 ‘pushd’ 将一个目录存到内存中,‘popd’ 将目录从内存中去除，并且转换到那个目录下。</p><p>例如：</p><pre><code>$ pushd .
/usr/include/netipx /usr/include/netipx
$ cd /etc/hp/
$ cd /home/himanshu/practice/
$ cd /media/
$ popd
/usr/include/netipx
$ pwd
/usr/include/netipx
</code></pre><p>使用‘pushd’ 命令存储当前的工作目录 (用 .表示)， 然后切换到各种各样的目录去。为了返回之前的目录，只要使用 ‘popd’命令就行了。</p>`,30)),i("p",null,[n[1]||(n[1]=e("（LCTT译注：显然，pushd和popd 是堆栈式操作，你可以push多个目录，然后逐一pop出来，自己试试吧。） （LCTT译注：我们之前介绍的",-1)),t(p,{href:"http://linux.cn/article-3401-1.html"},{default:d(()=>[...n[0]||(n[0]=[e("autojump",-1)])]),_:1}),n[2]||(n[2]=e("，更加智能，不过需要安装一下。）",-1))]),n[15]||(n[15]=i("p",null,[i("strong",null,"注意"),e("- 你也可以使用不带参数的 ‘pushd’ 来切换到之前存储的目录, 但是不会像 ‘popd’ 一样去除这个目录。")],-1)),n[16]||(n[16]=i("hr",null,null,-1)),i("p",null,[n[4]||(n[4]=e("via: ",-1)),t(p,{href:"http://linoxide.com/linux-command/directory-navigations-tips-tricks/"},{default:d(()=>[...n[3]||(n[3]=[e("http://linoxide.com/linux-command/directory-navigations-tips-tricks/",-1)])]),_:1})]),i("p",null,[n[7]||(n[7]=e("译者：",-1)),t(p,{href:"https://github.com/ggaaooppeenngg"},{default:d(()=>[...n[5]||(n[5]=[e("ggaaooppeenngg",-1)])]),_:1}),n[8]||(n[8]=e(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:d(()=>[...n[6]||(n[6]=[e("wxy",-1)])]),_:1})]),i("p",null,[n[11]||(n[11]=e("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...n[9]||(n[9]=[e("LCTT",-1)])]),_:1}),n[12]||(n[12]=e(" 原创翻译，",-1)),t(p,{href:"http://linux.cn/"},{default:d(()=>[...n[10]||(n[10]=[e("Linux中国",-1)])]),_:1}),n[13]||(n[13]=e(" 荣誉推出",-1))])])}const C=a(u,[["render",h]]);export{b as __pageData,C as default};
