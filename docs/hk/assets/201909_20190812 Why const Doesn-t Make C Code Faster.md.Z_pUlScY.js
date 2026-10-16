import{_ as t,a0 as o,w as c,s as d,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"為什麼 const 無法讓 C 代碼跑得更快？ | LCTT x X-CMD","titleTemplate":false,"description":"為什麼 const 無法讓 C 代碼跑得更快？ | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"為什麼 const 無法讓 C 代碼跑得更快？ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"為什麼 const 無法讓 C 代碼跑得更快？ | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20190812 Why const Doesn-t Make C Code Faster","title":"為什麼 const 無法讓 C 代碼跑得更快？","tag":"201909","desc":""},"relativePath":"201909/20190812 Why const Doesn-t Make C Code Faster.md","filePath":"[post].md"}'),r={name:"201909/20190812 Why const Doesn-t Make C Code Faster.md"};function h(g,s,u,b,f,k){const p=o("Link");return c(),d("div",null,[s[35]||(s[35]=a("h1",{id:"為什麼-const-無法讓-c-代碼跑得更快",tabindex:"-1"},[n("為什麼 const 無法讓 C 代碼跑得更快？ "),a("a",{class:"header-anchor",href:"#為什麼-const-無法讓-c-代碼跑得更快","aria-label":"Permalink to “為什麼 const 無法讓 C 代碼跑得更快？”"},"​")],-1)),s[36]||(s[36]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201909/14/181535lsrt9t93k1c1n0mt.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("在幾個月前的一篇文章裏，我曾説過“",-1)),e(p,{href:"https://theartofmachinery.com/2019/04/05/d_as_c_replacement.html#const-and-immutable"},{default:i(()=>[...s[0]||(s[0]=[n("有個一個流行的傳言，",-1),a("code",null,"const",-1),n(" 有助於編譯器優化 C 和 C++ 代碼",-1)])]),_:1}),s[2]||(s[2]=n("”。我覺得我需要解釋一下，尤其是曾經我自己也以為這是顯然對的。我將會用一些理論並構造一些例子來論證，然後在一個真實的代碼庫 ",-1)),s[3]||(s[3]=a("code",null,"Sqlite",-1)),s[4]||(s[4]=n(" 上做一些實驗和基準測試。",-1))]),s[37]||(s[37]=l(`<h3 id="一個簡單的測試" tabindex="-1">一個簡單的測試 <a class="header-anchor" href="#一個簡單的測試" aria-label="Permalink to “一個簡單的測試”">​</a></h3><p>讓我們從一個最簡單、最明顯的例子開始，以前認為這是一個 <code>const</code> 讓 C 代碼跑得更快的例子。首先，假設我們有如下兩個函數聲明：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void func(int *x);</span></span>
<span class="line"><span>void constFunc(const int *x);</span></span></code></pre></div><p>然後假設我們如下兩份代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void byArg(int *x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, *x);</span></span>
<span class="line"><span>  func(x);</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, *x);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void constByArg(const int *x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, *x);</span></span>
<span class="line"><span>  constFunc(x);</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, *x);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>調用 <code>printf()</code> 時，CPU 會通過指針從 RAM 中取得 <code>*x</code> 的值。很顯然，<code>constByArg()</code> 會稍微快一點，因為編譯器知道 <code>*x</code> 是常量，因此不需要在調用 <code>constFunc()</code> 之後再次獲取它的值。它僅是打印相同的東西。沒問題吧？讓我們來看下 GCC 在如下編譯選項下生成的彙編代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc -S -Wall -O3 test.c</span></span>
<span class="line"><span>$ view test.s</span></span></code></pre></div><p>以下是函數 <code>byArg()</code> 的完整彙編代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>byArg:</span></span>
<span class="line"><span>.LFB23:</span></span>
<span class="line"><span>    .cfi_startproc</span></span>
<span class="line"><span>    pushq   %rbx</span></span>
<span class="line"><span>    .cfi_def_cfa_offset 16</span></span>
<span class="line"><span>    .cfi_offset 3, -16</span></span>
<span class="line"><span>    movl    (%rdi), %edx</span></span>
<span class="line"><span>    movq    %rdi, %rbx</span></span>
<span class="line"><span>    leaq    .LC0(%rip), %rsi</span></span>
<span class="line"><span>    movl    $1, %edi</span></span>
<span class="line"><span>    xorl    %eax, %eax</span></span>
<span class="line"><span>    call    __printf_chk@PLT</span></span>
<span class="line"><span>    movq    %rbx, %rdi</span></span>
<span class="line"><span>    call    func@PLT  # constFoo 中唯一不同的指令</span></span>
<span class="line"><span>    movl    (%rbx), %edx</span></span>
<span class="line"><span>    leaq    .LC0(%rip), %rsi</span></span>
<span class="line"><span>    xorl    %eax, %eax</span></span>
<span class="line"><span>    movl    $1, %edi</span></span>
<span class="line"><span>    popq    %rbx</span></span>
<span class="line"><span>    .cfi_def_cfa_offset 8</span></span>
<span class="line"><span>    jmp __printf_chk@PLT</span></span>
<span class="line"><span>    .cfi_endproc</span></span></code></pre></div><p>函數 <code>byArg()</code> 和函數 <code>constByArg()</code> 生成的彙編代碼中唯一的不同之處是 <code>constByArg()</code> 有一句彙編代碼 <code>call constFunc@PLT</code>，這正是源代碼中的調用。關鍵字 <code>const</code> 本身並沒有造成任何字面上的不同。</p><p>好了，這是 GCC 的結果。或許我們需要一個更聰明的編譯器。Clang 會有更好的表現嗎？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ clang -S -Wall -O3 -emit-llvm test.c</span></span>
<span class="line"><span>$ view test.ll</span></span></code></pre></div><p>這是 <code>IR</code> 代碼（LCTT 譯註：LLVM 的中間語言）。它比彙編代碼更加緊湊，所以我可以把兩個函數都導出來，讓你可以看清楚我所説的“除了調用外，沒有任何字面上的不同”是什麼意思：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>; Function Attrs: nounwind uwtable</span></span>
<span class="line"><span>define dso_local void @byArg(i32*) local_unnamed_addr #0 {</span></span>
<span class="line"><span>  %2 = load i32, i32* %0, align 4, !tbaa !2</span></span>
<span class="line"><span>  %3 = tail call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([4 x i8], [4 x i8]* @.str, i64 0, i64 0), i32 %2)</span></span>
<span class="line"><span>  tail call void @func(i32* %0) #4</span></span>
<span class="line"><span>  %4 = load i32, i32* %0, align 4, !tbaa !2</span></span>
<span class="line"><span>  %5 = tail call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([4 x i8], [4 x i8]* @.str, i64 0, i64 0), i32 %4)</span></span>
<span class="line"><span>  ret void</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; Function Attrs: nounwind uwtable</span></span>
<span class="line"><span>define dso_local void @constByArg(i32*) local_unnamed_addr #0 {</span></span>
<span class="line"><span>  %2 = load i32, i32* %0, align 4, !tbaa !2</span></span>
<span class="line"><span>  %3 = tail call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([4 x i8], [4 x i8]* @.str, i64 0, i64 0), i32 %2)</span></span>
<span class="line"><span>  tail call void @constFunc(i32* %0) #4</span></span>
<span class="line"><span>  %4 = load i32, i32* %0, align 4, !tbaa !2</span></span>
<span class="line"><span>  %5 = tail call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([4 x i8], [4 x i8]* @.str, i64 0, i64 0), i32 %4)</span></span>
<span class="line"><span>  ret void</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="某些有作用的東西" tabindex="-1">某些有作用的東西 <a class="header-anchor" href="#某些有作用的東西" aria-label="Permalink to “某些有作用的東西”">​</a></h3><p>接下來是一組 <code>const</code> 能夠真正產生作用的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void localVar()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int x = 42;</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, x);</span></span>
<span class="line"><span>  constFunc(&amp;x);</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, x);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void constLocalVar()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  const int x = 42;  // 對本地變量使用 const</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, x);</span></span>
<span class="line"><span>  constFunc(&amp;x);</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, x);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下面是 <code>localVar()</code> 的彙編代碼，其中有兩條指令在 <code>constLocalVar()</code> 中會被優化掉：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>localVar:</span></span>
<span class="line"><span>.LFB25:</span></span>
<span class="line"><span>    .cfi_startproc</span></span>
<span class="line"><span>    subq    $24, %rsp</span></span>
<span class="line"><span>    .cfi_def_cfa_offset 32</span></span>
<span class="line"><span>    movl    $42, %edx</span></span>
<span class="line"><span>    movl    $1, %edi</span></span>
<span class="line"><span>    movq    %fs:40, %rax</span></span>
<span class="line"><span>    movq    %rax, 8(%rsp)</span></span>
<span class="line"><span>    xorl    %eax, %eax</span></span>
<span class="line"><span>    leaq    .LC0(%rip), %rsi</span></span>
<span class="line"><span>    movl    $42, 4(%rsp)</span></span>
<span class="line"><span>    call    __printf_chk@PLT</span></span>
<span class="line"><span>    leaq    4(%rsp), %rdi</span></span>
<span class="line"><span>    call    constFunc@PLT</span></span>
<span class="line"><span>    movl    4(%rsp), %edx  # 在 constLocalVar() 中沒有</span></span>
<span class="line"><span>    xorl    %eax, %eax</span></span>
<span class="line"><span>    movl    $1, %edi</span></span>
<span class="line"><span>    leaq    .LC0(%rip), %rsi  # 在 constLocalVar() 中沒有</span></span>
<span class="line"><span>    call    __printf_chk@PLT</span></span>
<span class="line"><span>    movq    8(%rsp), %rax</span></span>
<span class="line"><span>    xorq    %fs:40, %rax</span></span>
<span class="line"><span>    jne .L9</span></span>
<span class="line"><span>    addq    $24, %rsp</span></span>
<span class="line"><span>    .cfi_remember_state</span></span>
<span class="line"><span>    .cfi_def_cfa_offset 8</span></span>
<span class="line"><span>    ret</span></span>
<span class="line"><span>.L9:</span></span>
<span class="line"><span>    .cfi_restore_state</span></span>
<span class="line"><span>    call    __stack_chk_fail@PLT</span></span>
<span class="line"><span>    .cfi_endproc</span></span></code></pre></div><p>在 LLVM 生成的 <code>IR</code> 代碼中更明顯一點。在 <code>constLocalVar()</code> 中，第二次調用 <code>printf()</code> 之前的 <code>load</code> 會被優化掉：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>; Function Attrs: nounwind uwtable</span></span>
<span class="line"><span>define dso_local void @localVar() local_unnamed_addr #0 {</span></span>
<span class="line"><span>  %1 = alloca i32, align 4</span></span>
<span class="line"><span>  %2 = bitcast i32* %1 to i8*</span></span>
<span class="line"><span>  call void @llvm.lifetime.start.p0i8(i64 4, i8* nonnull %2) #4</span></span>
<span class="line"><span>  store i32 42, i32* %1, align 4, !tbaa !2</span></span>
<span class="line"><span>  %3 = tail call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([4 x i8], [4 x i8]* @.str, i64 0, i64 0), i32 42)</span></span>
<span class="line"><span>  call void @constFunc(i32* nonnull %1) #4</span></span>
<span class="line"><span>  %4 = load i32, i32* %1, align 4, !tbaa !2</span></span>
<span class="line"><span>  %5 = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([4 x i8], [4 x i8]* @.str, i64 0, i64 0), i32 %4)</span></span>
<span class="line"><span>  call void @llvm.lifetime.end.p0i8(i64 4, i8* nonnull %2) #4</span></span>
<span class="line"><span>  ret void</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>好吧，現在，<code>constLocalVar()</code> 成功的省略了對 <code>*x</code> 的重新讀取，但是可能你已經注意到一些問題：<code>localVar()</code> 和 <code>constLocalVar()</code> 在函數體中做了同樣的 <code>constFunc()</code> 調用。如果編譯器能夠推斷出 <code>constFunc()</code> 沒有修改 <code>constLocalVar()</code> 中的 <code>*x</code>，那為什麼不能推斷出完全一樣的函數調用也沒有修改 <code>localVar()</code> 中的 <code>*x</code>？</p><p>這個解釋更貼近於為什麼 C 語言的 <code>const</code> 不能作為優化手段的核心原因。C 語言的 <code>const</code> 有兩個有效的含義：它可以表示這個變量是某個可能是常數也可能不是常數的數據的一個只讀別名，或者它可以表示該變量是真正的常量。如果你移除了一個指向常量的指針的 <code>const</code> 屬性並寫入數據，那結果將是一個未定義行為。另一方面，如果是一個指向非常量值的 <code>const</code> 指針，將就沒問題。</p><p>這份 <code>constFunc()</code> 的可能實現揭示了這意味着什麼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// x 是一個指向某個可能是常數也可能不是常數的數據的只讀指針</span></span>
<span class="line"><span>void constFunc(const int *x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // local_var 是一個真正的常數</span></span>
<span class="line"><span>  const int local_var = 42;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // C 語言規定的未定義行為</span></span>
<span class="line"><span>  doubleIt((int*)&amp;local_var);</span></span>
<span class="line"><span>  // 誰知道這是不是一個未定義行為呢？</span></span>
<span class="line"><span>  doubleIt((int*)x);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void doubleIt(int *x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  *x *= 2;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>localVar()</code> 傳遞給 <code>constFunc()</code> 一個指向非 <code>const</code> 變量的 <code>const</code> 指針。因為這個變量並非常量，<code>constFunc()</code> 可以撒個謊並強行修改它而不觸發未定義行為。所以，編譯器不能斷定變量在調用 <code>constFunc()</code> 後仍是同樣的值。在 <code>constLocalVar()</code> 中的變量是真正的常量，因此，編譯器可以斷定它不會改變 —— 因為在 <code>constFunc()</code> 去除變量的 <code>const</code> 屬性並寫入它<em>將</em>會是一個未定義行為。</p><p>第一個例子中的函數 <code>byArg()</code> 和 <code>constByArg()</code> 是沒有可能優化的，因為編譯器沒有任何方法能知道 <code>*x</code> 是否真的是 <code>const</code> 常量。</p><blockquote><p>補充（和題外話）：相當多的讀者已經正確地指出，使用 <code>const int *x</code>，該指針本身不是限定的常量，只是該數據被加個了別名，而 <code>const int * const extra_const</code> 是一個“雙向”限定為常量的指針。但是因為指針本身的常量與別名數據的常量無關，所以結果是相同的。僅在 <code>extra_const</code> 指向使用 <code>const</code> 定義的對象時，<code>*(int*const)extra_const = 0</code> 才是未定義行為。（實際上，<code>*(int*)extra_const = 0</code> 也不會更糟。）因為它們之間的區別可以一句話説明白，一個是完全的 <code>const</code> 指針，另外一個可能是也可能不是常量本身的指針，而是一個可能是也可能不是常量的對象的只讀別名，我將繼續不嚴謹地引用“常量指針”。（題外話結束）</p></blockquote><p>但是為什麼不一致呢？如果編譯器能夠推斷出 <code>constLocalVar()</code> 中調用的 <code>constFunc()</code> 不會修改它的參數，那麼肯定也能繼續在其他 <code>constFunc()</code> 的調用上實施相同的優化，是嗎？並不。編譯器不能假設 <code>constLocalVar()</code> 根本沒有運行。如果不是這樣（例如，它只是代碼生成器或者宏的一些未使用的額外輸出），<code>constFunc()</code> 就能偷偷地修改數據而不觸發未定義行為。</p><p>你可能需要重複閲讀幾次上述説明和示例，但不要擔心，它聽起來很荒謬，它確實是正確的。不幸的是，對 <code>const</code> 變量進行寫入是最糟糕的未定義行為：大多數情況下，編譯器無法知道它是否將會是未定義行為。所以，大多數情況下，編譯器看見 <code>const</code> 時必須假設它未來可能會被移除掉，這意味着編譯器不能使用它進行優化。這在實踐中是正確的，因為真實的 C 代碼會在“深思熟慮”後移除 <code>const</code>。</p><p>簡而言之，很多事情都可以阻止編譯器使用 <code>const</code> 進行優化，包括使用指針從另一內存空間接受數據，或者在堆空間上分配數據。更糟糕的是，在大部分編譯器能夠使用 <code>const</code> 進行優化的情況，它都不是必須的。例如，任何像樣的編譯器都能推斷出下面代碼中的 <code>x</code> 是一個常量，甚至都不需要 <code>const</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int x = 42, y = 0;</span></span>
<span class="line"><span>printf(&quot;%d %d\\n&quot;, x, y);</span></span>
<span class="line"><span>y += x;</span></span>
<span class="line"><span>printf(&quot;%d %d\\n&quot;, x, y);</span></span></code></pre></div><p>總結，<code>const</code> 對優化而言幾乎無用，因為：</p><ol><li>除了特殊情況，編譯器需要忽略它，因為其他代碼可能合法地移除它</li><li>在 #1 以外的大多數例外中，編譯器無論如何都能推斷出該變量是常量</li></ol><h3 id="c" tabindex="-1">C++ <a class="header-anchor" href="#c" aria-label="Permalink to “C++”">​</a></h3><p>如果你在使用 C++ 那麼有另外一個方法讓 <code>const</code> 能夠影響到代碼的生成：函數重載。你可以用 <code>const</code> 和非 <code>const</code> 的參數重載同一個函數，而非 <code>const</code> 版本的代碼可能可以被優化（由程序員優化而不是編譯器），減少某些拷貝或者其他事情。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void foo(int *p)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // 需要做更多的數據拷貝</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void foo(const int *p)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // 不需要保護性的拷貝副本</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  const int x = 42;</span></span>
<span class="line"><span>  // const 影響被調用的是哪一個版本的重載函數</span></span>
<span class="line"><span>  foo(&amp;x);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>一方面，我不認為這會在實際的 C++ 代碼中大量使用。另一方面，為了導致差異，程序員需要假設編譯器無法做出，因為它們不受語言保護。</p><h3 id="用-sqlite3-進行實驗" tabindex="-1">用 Sqlite3 進行實驗 <a class="header-anchor" href="#用-sqlite3-進行實驗" aria-label="Permalink to “用 Sqlite3 進行實驗”">​</a></h3><p>有了足夠的理論和例子。那麼 <code>const</code> 在一個真正的代碼庫中有多大的影響呢？我將會在代碼庫 <code>Sqlite</code>（版本：3.30.0）上做一個測試，因為：</p><ul><li>它真正地使用了 <code>const</code></li><li>它不是一個簡單的代碼庫（超過 20 萬行代碼）</li><li>作為一個數據庫，它包括了字符串處理、數學計算、日期處理等一系列內容</li><li>它能夠在綁定 CPU 的情況下進行負載測試</li></ul><p>此外，作者和貢獻者們已經進行了多年的性能優化工作，因此我能確定他們沒有錯過任何有顯著效果的優化。</p><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to “配置”">​</a></h4>`,43)),a("p",null,[s[6]||(s[6]=n("我做了兩份",-1)),e(p,{href:"https://sqlite.org/src/doc/trunk/README.md"},{default:i(()=>[...s[5]||(s[5]=[n("源碼",-1)])]),_:1}),s[7]||(s[7]=n("拷貝，並且正常編譯其中一份。而對於另一份拷貝，我插入了這個特殊的預處理代碼段，將 ",-1)),s[8]||(s[8]=a("code",null,"const",-1)),s[9]||(s[9]=n(" 變成一個空操作：",-1))]),s[38]||(s[38]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define const</span></span></code></pre></div><p>(GNU) <code>sed</code> 可以將一些東西添加到每個文件的頂端，比如 <code>sed -i &#39;1i#define const&#39; *.c *.h</code>。</p><p>在編譯期間使用腳本生成 <code>Sqlite</code> 代碼稍微有點複雜。幸運的是當 <code>const</code> 代碼和非 <code>const</code> 代碼混合時，編譯器會產生了大量的提醒，因此很容易發現它並調整腳本來包含我的反 <code>const</code> 代碼段。</p><p>直接比較編譯結果毫無意義，因為任意微小的改變就會影響整個內存佈局，這可能會改變整個代碼中的指針和函數調用。因此，我用每個指令的二進制大小和彙編代碼作為識別碼（<code>objdump -d libsqlite3.so.0.8.6</code>）。舉個例子，這個函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>000000000005d570 &lt;sqlite3_blob_read&gt;:</span></span>
<span class="line"><span>   5d570:       4c 8d 05 59 a2 ff ff    lea    -0x5da7(%rip),%r8        # 577d0 &lt;sqlite3BtreePayloadChecked&gt;</span></span>
<span class="line"><span>   5d577:       e9 04 fe ff ff          jmpq   5d380 &lt;blobReadWrite&gt;</span></span>
<span class="line"><span>   5d57c:       0f 1f 40 00             nopl   0x0(%rax)</span></span></code></pre></div><p>將會變成這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sqlite3_blob_read   7lea 5jmpq 4nopl</span></span></code></pre></div><p>在編譯時，我保留了所有 <code>Sqlite</code> 的編譯設置。</p><h4 id="分析編譯結果" tabindex="-1">分析編譯結果 <a class="header-anchor" href="#分析編譯結果" aria-label="Permalink to “分析編譯結果”">​</a></h4><p><code>const</code> 版本的 <code>libsqlite3.so</code> 的大小是 4,740,704 字節，大約比 4,736,712 字節的非 <code>const</code> 版本大了 0.1% 。在全部 1374 個導出函數（不包括類似 PLT 裏的底層輔助函數）中，一共有 13 個函數的識別碼不一致。</p><p>其中的一些改變是由於插入的預處理代碼。舉個例子，這裏有一個發生了更改的函數（已經刪去一些 <code>Sqlite</code> 特有的定義）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define LARGEST_INT64  (0xffffffff|(((int64_t)0x7fffffff)&lt;&lt;32))</span></span>
<span class="line"><span>#define SMALLEST_INT64 (((int64_t)-1) - LARGEST_INT64)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static int64_t doubleToInt64(double r){</span></span>
<span class="line"><span>  /*</span></span>
<span class="line"><span>  ** Many compilers we encounter do not define constants for the</span></span>
<span class="line"><span>  ** minimum and maximum 64-bit integers, or they define them</span></span>
<span class="line"><span>  ** inconsistently.  And many do not understand the &quot;LL&quot; notation.</span></span>
<span class="line"><span>  ** So we define our own static constants here using nothing</span></span>
<span class="line"><span>  ** larger than a 32-bit integer constant.</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>  static const int64_t maxInt = LARGEST_INT64;</span></span>
<span class="line"><span>  static const int64_t minInt = SMALLEST_INT64;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if( r&lt;=(double)minInt ){</span></span>
<span class="line"><span>    return minInt;</span></span>
<span class="line"><span>  }else if( r&gt;=(double)maxInt ){</span></span>
<span class="line"><span>    return maxInt;</span></span>
<span class="line"><span>  }else{</span></span>
<span class="line"><span>    return (int64_t)r;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>刪去 <code>const</code> 使得這些常量變成了 <code>static</code> 變量。我不明白為什麼會有不瞭解 <code>const</code> 的人讓這些變量加上 <code>static</code>。同時刪去 <code>static</code> 和 <code>const</code> 會讓 GCC 再次認為它們是常量，而我們將得到同樣的編譯輸出。由於類似這樣的局部的 <code>static const</code> 變量，使得 13 個函數中有 3 個函數產生假的變化，但我一個都不打算修復它們。</p>`,13)),a("p",null,[s[11]||(s[11]=a("code",null,"Sqlite",-1)),s[12]||(s[12]=n(" 使用了很多全局變量，而這正是大多數真正的 ",-1)),s[13]||(s[13]=a("code",null,"const",-1)),s[14]||(s[14]=n(" 優化產生的地方。通常情況下，它們類似於將一個變量比較代替成一個常量比較，或者一個循環在部分展開的一步。（",-1)),e(p,{href:"https://rada.re/r/"},{default:i(()=>[...s[10]||(s[10]=[n("Radare toolkit",-1)])]),_:1}),s[15]||(s[15]=n(" 可以很方便的找出這些優化措施。）一些變化則令人失望。",-1)),s[16]||(s[16]=a("code",null,"sqlite3ParseUri()",-1)),s[17]||(s[17]=n(" 有 487 個指令，但 ",-1)),s[18]||(s[18]=a("code",null,"const",-1)),s[19]||(s[19]=n(" 產生的唯一區別是進行了這個比較：",-1))]),s[39]||(s[39]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>test %al, %al</span></span>
<span class="line"><span>je &lt;sqlite3ParseUri+0x717&gt;</span></span>
<span class="line"><span>cmp $0x23, %al</span></span>
<span class="line"><span>je &lt;sqlite3ParseUri+0x717&gt;</span></span></code></pre></div><p>並交換了它們的順序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cmp $0x23, %al</span></span>
<span class="line"><span>je &lt;sqlite3ParseUri+0x717&gt;</span></span>
<span class="line"><span>test %al, %al</span></span>
<span class="line"><span>je &lt;sqlite3ParseUri+0x717&gt;</span></span></code></pre></div><h4 id="基準測試" tabindex="-1">基準測試 <a class="header-anchor" href="#基準測試" aria-label="Permalink to “基準測試”">​</a></h4><p><code>Sqlite</code> 自帶了一個性能迴歸測試，因此我嘗試每個版本的代碼執行一百次，仍然使用默認的 <code>Sqlite</code> 編譯設置。以秒為單位的測試結果如下：</p><div class="table-wrap"><table><thead><tr><th></th><th>const</th><th>非 const</th></tr></thead><tbody><tr><td>最小值</td><td>10.658s</td><td>10.803s</td></tr><tr><td>中間值</td><td>11.571s</td><td>11.519s</td></tr><tr><td>最大值</td><td>11.832s</td><td>11.658s</td></tr><tr><td>平均值</td><td>11.531s</td><td>11.492s</td></tr></tbody></table></div><p>就我個人看來，我沒有發現足夠的證據來説明這個差異值得關注。我是説，我從整個程序中刪去 <code>const</code>，所以如果它有明顯的差別，那麼我希望它是顯而易見的。但也許你關心任何微小的差異，因為你正在做一些絕對性能非常重要的事。那讓我們試一下統計分析。</p><p>我喜歡使用類似 Mann-Whitney U 檢驗這樣的東西。它類似於更著名的 T 檢驗，但對你在機器上計時時產生的複雜隨機變量（由於不可預測的上下文切換、頁錯誤等）更加健壯。以下是結果：</p><div class="table-wrap"><table><thead><tr><th></th><th>const</th><th>非 const</th></tr></thead><tbody><tr><td>N</td><td>100</td><td>100</td></tr><tr><td>Mean rank</td><td>121.38</td><td>79.62</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Mann-Whitney U</td><td>2912</td></tr><tr><td>Z</td><td>-5.10</td></tr><tr><td>2-sided p value</td><td>&lt;10-6</td></tr><tr><td>HL median difference</td><td>-0.056s</td></tr><tr><td>95% confidence interval</td><td>-0.077s – -0.038s</td></tr></tbody></table></div><p>U 檢驗已經發現統計意義上具有顯著的性能差異。但是，令人驚訝的是，實際上是非 <code>const</code> 版本更快——大約 60ms，0.5%。似乎 <code>const</code> 啓用的少量“優化”不值得額外代碼的開銷。這不像是 <code>const</code> 啓用了任何類似於自動矢量化的重要的優化。當然，你的結果可能因為編譯器配置、編譯器版本或者代碼庫等等而有所不同，但是我覺得這已經説明了 <code>const</code> 是否能夠有效地提高 <code>C</code> 的性能，我們現在已經看到答案了。</p><h3 id="那麼-const-有什麼用呢" tabindex="-1">那麼，const 有什麼用呢？ <a class="header-anchor" href="#那麼-const-有什麼用呢" aria-label="Permalink to “那麼，const 有什麼用呢？”">​</a></h3><p>儘管存在缺陷，C/C++ 的 <code>const</code> 仍有助於類型安全。特別是，結合 C++ 的移動語義和 <code>std::unique_pointer</code>，<code>const</code> 可以使指針所有權顯式化。在超過十萬行代碼的 C++ 舊代碼庫裏，指針所有權模糊是一個大難題，我對此深有感觸。</p><p>但是，我以前常常使用 <code>const</code> 來實現有意義的類型安全。我曾聽説過基於性能上的原因，最好是儘可能多地使用 <code>const</code>。我曾聽説過當性能很重要時，重構代碼並添加更多的 <code>const</code> 非常重要，即使以降低代碼可讀性的方式。<strong>當時覺得這沒問題，但後來我才知道這並不對。</strong></p><hr>`,15)),a("p",null,[s[21]||(s[21]=n("via: ",-1)),e(p,{href:"https://theartofmachinery.com/2019/08/12/c_const_isnt_for_performance.html"},{default:i(()=>[...s[20]||(s[20]=[n("https://theartofmachinery.com/2019/08/12/c_const_isnt_for_performance.html",-1)])]),_:1})]),a("p",null,[s[26]||(s[26]=n("作者：",-1)),e(p,{href:"https://theartofmachinery.com"},{default:i(()=>[...s[22]||(s[22]=[n("Simon Arneaud",-1)])]),_:1}),s[27]||(s[27]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[23]||(s[23]=[n("lujun9972",-1)])]),_:1}),s[28]||(s[28]=n(" 譯者：",-1)),e(p,{href:"https://github.com/LazyWolfLin"},{default:i(()=>[...s[24]||(s[24]=[n("LazyWolfLin",-1)])]),_:1}),s[29]||(s[29]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[25]||(s[25]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[32]||(s[32]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[30]||(s[30]=[n("LCTT",-1)])]),_:1}),s[33]||(s[33]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[31]||(s[31]=[n("Linux中國",-1)])]),_:1}),s[34]||(s[34]=n(" 榮譽推出",-1))])])}const y=t(r,[["render",h]]);export{C as __pageData,y as default};
