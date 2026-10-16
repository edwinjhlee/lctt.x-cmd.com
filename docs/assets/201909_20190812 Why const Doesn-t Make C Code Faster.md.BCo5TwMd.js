import{_ as t,a0 as o,w as c,s as d,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"为什么 const 无法让 C 代码跑得更快？ | LCTT x X-CMD","titleTemplate":false,"description":"为什么 const 无法让 C 代码跑得更快？ | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"为什么 const 无法让 C 代码跑得更快？ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"为什么 const 无法让 C 代码跑得更快？ | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20190812 Why const Doesn-t Make C Code Faster","title":"为什么 const 无法让 C 代码跑得更快？","tag":"201909","desc":""},"relativePath":"201909/20190812 Why const Doesn-t Make C Code Faster.md","filePath":"[post].md"}'),r={name:"201909/20190812 Why const Doesn-t Make C Code Faster.md"};function h(g,s,u,b,f,k){const p=o("Link");return c(),d("div",null,[s[35]||(s[35]=a("h1",{id:"为什么-const-无法让-c-代码跑得更快",tabindex:"-1"},[n("为什么 const 无法让 C 代码跑得更快？ "),a("a",{class:"header-anchor",href:"#为什么-const-无法让-c-代码跑得更快","aria-label":"Permalink to “为什么 const 无法让 C 代码跑得更快？”"},"​")],-1)),s[36]||(s[36]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201909/14/181535lsrt9t93k1c1n0mt.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("在几个月前的一篇文章里，我曾说过“",-1)),e(p,{href:"https://theartofmachinery.com/2019/04/05/d_as_c_replacement.html#const-and-immutable"},{default:i(()=>[...s[0]||(s[0]=[n("有个一个流行的传言，",-1),a("code",null,"const",-1),n(" 有助于编译器优化 C 和 C++ 代码",-1)])]),_:1}),s[2]||(s[2]=n("”。我觉得我需要解释一下，尤其是曾经我自己也以为这是显然对的。我将会用一些理论并构造一些例子来论证，然后在一个真实的代码库 ",-1)),s[3]||(s[3]=a("code",null,"Sqlite",-1)),s[4]||(s[4]=n(" 上做一些实验和基准测试。",-1))]),s[37]||(s[37]=l(`<h3 id="一个简单的测试" tabindex="-1">一个简单的测试 <a class="header-anchor" href="#一个简单的测试" aria-label="Permalink to “一个简单的测试”">​</a></h3><p>让我们从一个最简单、最明显的例子开始，以前认为这是一个 <code>const</code> 让 C 代码跑得更快的例子。首先，假设我们有如下两个函数声明：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void func(int *x);</span></span>
<span class="line"><span>void constFunc(const int *x);</span></span></code></pre></div><p>然后假设我们如下两份代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void byArg(int *x)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>调用 <code>printf()</code> 时，CPU 会通过指针从 RAM 中取得 <code>*x</code> 的值。很显然，<code>constByArg()</code> 会稍微快一点，因为编译器知道 <code>*x</code> 是常量，因此不需要在调用 <code>constFunc()</code> 之后再次获取它的值。它仅是打印相同的东西。没问题吧？让我们来看下 GCC 在如下编译选项下生成的汇编代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc -S -Wall -O3 test.c</span></span>
<span class="line"><span>$ view test.s</span></span></code></pre></div><p>以下是函数 <code>byArg()</code> 的完整汇编代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>byArg:</span></span>
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
<span class="line"><span>    .cfi_endproc</span></span></code></pre></div><p>函数 <code>byArg()</code> 和函数 <code>constByArg()</code> 生成的汇编代码中唯一的不同之处是 <code>constByArg()</code> 有一句汇编代码 <code>call constFunc@PLT</code>，这正是源代码中的调用。关键字 <code>const</code> 本身并没有造成任何字面上的不同。</p><p>好了，这是 GCC 的结果。或许我们需要一个更聪明的编译器。Clang 会有更好的表现吗？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ clang -S -Wall -O3 -emit-llvm test.c</span></span>
<span class="line"><span>$ view test.ll</span></span></code></pre></div><p>这是 <code>IR</code> 代码（LCTT 译注：LLVM 的中间语言）。它比汇编代码更加紧凑，所以我可以把两个函数都导出来，让你可以看清楚我所说的“除了调用外，没有任何字面上的不同”是什么意思：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>; Function Attrs: nounwind uwtable</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="某些有作用的东西" tabindex="-1">某些有作用的东西 <a class="header-anchor" href="#某些有作用的东西" aria-label="Permalink to “某些有作用的东西”">​</a></h3><p>接下来是一组 <code>const</code> 能够真正产生作用的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void localVar()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int x = 42;</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, x);</span></span>
<span class="line"><span>  constFunc(&amp;x);</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, x);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void constLocalVar()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  const int x = 42;  // 对本地变量使用 const</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, x);</span></span>
<span class="line"><span>  constFunc(&amp;x);</span></span>
<span class="line"><span>  printf(&quot;%d\\n&quot;, x);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下面是 <code>localVar()</code> 的汇编代码，其中有两条指令在 <code>constLocalVar()</code> 中会被优化掉：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>localVar:</span></span>
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
<span class="line"><span>    movl    4(%rsp), %edx  # 在 constLocalVar() 中没有</span></span>
<span class="line"><span>    xorl    %eax, %eax</span></span>
<span class="line"><span>    movl    $1, %edi</span></span>
<span class="line"><span>    leaq    .LC0(%rip), %rsi  # 在 constLocalVar() 中没有</span></span>
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
<span class="line"><span>    .cfi_endproc</span></span></code></pre></div><p>在 LLVM 生成的 <code>IR</code> 代码中更明显一点。在 <code>constLocalVar()</code> 中，第二次调用 <code>printf()</code> 之前的 <code>load</code> 会被优化掉：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>; Function Attrs: nounwind uwtable</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>好吧，现在，<code>constLocalVar()</code> 成功的省略了对 <code>*x</code> 的重新读取，但是可能你已经注意到一些问题：<code>localVar()</code> 和 <code>constLocalVar()</code> 在函数体中做了同样的 <code>constFunc()</code> 调用。如果编译器能够推断出 <code>constFunc()</code> 没有修改 <code>constLocalVar()</code> 中的 <code>*x</code>，那为什么不能推断出完全一样的函数调用也没有修改 <code>localVar()</code> 中的 <code>*x</code>？</p><p>这个解释更贴近于为什么 C 语言的 <code>const</code> 不能作为优化手段的核心原因。C 语言的 <code>const</code> 有两个有效的含义：它可以表示这个变量是某个可能是常数也可能不是常数的数据的一个只读别名，或者它可以表示该变量是真正的常量。如果你移除了一个指向常量的指针的 <code>const</code> 属性并写入数据，那结果将是一个未定义行为。另一方面，如果是一个指向非常量值的 <code>const</code> 指针，将就没问题。</p><p>这份 <code>constFunc()</code> 的可能实现揭示了这意味着什么：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// x 是一个指向某个可能是常数也可能不是常数的数据的只读指针</span></span>
<span class="line"><span>void constFunc(const int *x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // local_var 是一个真正的常数</span></span>
<span class="line"><span>  const int local_var = 42;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // C 语言规定的未定义行为</span></span>
<span class="line"><span>  doubleIt((int*)&amp;local_var);</span></span>
<span class="line"><span>  // 谁知道这是不是一个未定义行为呢？</span></span>
<span class="line"><span>  doubleIt((int*)x);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void doubleIt(int *x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  *x *= 2;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>localVar()</code> 传递给 <code>constFunc()</code> 一个指向非 <code>const</code> 变量的 <code>const</code> 指针。因为这个变量并非常量，<code>constFunc()</code> 可以撒个谎并强行修改它而不触发未定义行为。所以，编译器不能断定变量在调用 <code>constFunc()</code> 后仍是同样的值。在 <code>constLocalVar()</code> 中的变量是真正的常量，因此，编译器可以断定它不会改变 —— 因为在 <code>constFunc()</code> 去除变量的 <code>const</code> 属性并写入它<em>将</em>会是一个未定义行为。</p><p>第一个例子中的函数 <code>byArg()</code> 和 <code>constByArg()</code> 是没有可能优化的，因为编译器没有任何方法能知道 <code>*x</code> 是否真的是 <code>const</code> 常量。</p><blockquote><p>补充（和题外话）：相当多的读者已经正确地指出，使用 <code>const int *x</code>，该指针本身不是限定的常量，只是该数据被加个了别名，而 <code>const int * const extra_const</code> 是一个“双向”限定为常量的指针。但是因为指针本身的常量与别名数据的常量无关，所以结果是相同的。仅在 <code>extra_const</code> 指向使用 <code>const</code> 定义的对象时，<code>*(int*const)extra_const = 0</code> 才是未定义行为。（实际上，<code>*(int*)extra_const = 0</code> 也不会更糟。）因为它们之间的区别可以一句话说明白，一个是完全的 <code>const</code> 指针，另外一个可能是也可能不是常量本身的指针，而是一个可能是也可能不是常量的对象的只读别名，我将继续不严谨地引用“常量指针”。（题外话结束）</p></blockquote><p>但是为什么不一致呢？如果编译器能够推断出 <code>constLocalVar()</code> 中调用的 <code>constFunc()</code> 不会修改它的参数，那么肯定也能继续在其他 <code>constFunc()</code> 的调用上实施相同的优化，是吗？并不。编译器不能假设 <code>constLocalVar()</code> 根本没有运行。如果不是这样（例如，它只是代码生成器或者宏的一些未使用的额外输出），<code>constFunc()</code> 就能偷偷地修改数据而不触发未定义行为。</p><p>你可能需要重复阅读几次上述说明和示例，但不要担心，它听起来很荒谬，它确实是正确的。不幸的是，对 <code>const</code> 变量进行写入是最糟糕的未定义行为：大多数情况下，编译器无法知道它是否将会是未定义行为。所以，大多数情况下，编译器看见 <code>const</code> 时必须假设它未来可能会被移除掉，这意味着编译器不能使用它进行优化。这在实践中是正确的，因为真实的 C 代码会在“深思熟虑”后移除 <code>const</code>。</p><p>简而言之，很多事情都可以阻止编译器使用 <code>const</code> 进行优化，包括使用指针从另一内存空间接受数据，或者在堆空间上分配数据。更糟糕的是，在大部分编译器能够使用 <code>const</code> 进行优化的情况，它都不是必须的。例如，任何像样的编译器都能推断出下面代码中的 <code>x</code> 是一个常量，甚至都不需要 <code>const</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int x = 42, y = 0;</span></span>
<span class="line"><span>printf(&quot;%d %d\\n&quot;, x, y);</span></span>
<span class="line"><span>y += x;</span></span>
<span class="line"><span>printf(&quot;%d %d\\n&quot;, x, y);</span></span></code></pre></div><p>总结，<code>const</code> 对优化而言几乎无用，因为：</p><ol><li>除了特殊情况，编译器需要忽略它，因为其他代码可能合法地移除它</li><li>在 #1 以外的大多数例外中，编译器无论如何都能推断出该变量是常量</li></ol><h3 id="c" tabindex="-1">C++ <a class="header-anchor" href="#c" aria-label="Permalink to “C++”">​</a></h3><p>如果你在使用 C++ 那么有另外一个方法让 <code>const</code> 能够影响到代码的生成：函数重载。你可以用 <code>const</code> 和非 <code>const</code> 的参数重载同一个函数，而非 <code>const</code> 版本的代码可能可以被优化（由程序员优化而不是编译器），减少某些拷贝或者其他事情。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void foo(int *p)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // 需要做更多的数据拷贝</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void foo(const int *p)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // 不需要保护性的拷贝副本</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  const int x = 42;</span></span>
<span class="line"><span>  // const 影响被调用的是哪一个版本的重载函数</span></span>
<span class="line"><span>  foo(&amp;x);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>一方面，我不认为这会在实际的 C++ 代码中大量使用。另一方面，为了导致差异，程序员需要假设编译器无法做出，因为它们不受语言保护。</p><h3 id="用-sqlite3-进行实验" tabindex="-1">用 Sqlite3 进行实验 <a class="header-anchor" href="#用-sqlite3-进行实验" aria-label="Permalink to “用 Sqlite3 进行实验”">​</a></h3><p>有了足够的理论和例子。那么 <code>const</code> 在一个真正的代码库中有多大的影响呢？我将会在代码库 <code>Sqlite</code>（版本：3.30.0）上做一个测试，因为：</p><ul><li>它真正地使用了 <code>const</code></li><li>它不是一个简单的代码库（超过 20 万行代码）</li><li>作为一个数据库，它包括了字符串处理、数学计算、日期处理等一系列内容</li><li>它能够在绑定 CPU 的情况下进行负载测试</li></ul><p>此外，作者和贡献者们已经进行了多年的性能优化工作，因此我能确定他们没有错过任何有显著效果的优化。</p><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to “配置”">​</a></h4>`,43)),a("p",null,[s[6]||(s[6]=n("我做了两份",-1)),e(p,{href:"https://sqlite.org/src/doc/trunk/README.md"},{default:i(()=>[...s[5]||(s[5]=[n("源码",-1)])]),_:1}),s[7]||(s[7]=n("拷贝，并且正常编译其中一份。而对于另一份拷贝，我插入了这个特殊的预处理代码段，将 ",-1)),s[8]||(s[8]=a("code",null,"const",-1)),s[9]||(s[9]=n(" 变成一个空操作：",-1))]),s[38]||(s[38]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define const</span></span></code></pre></div><p>(GNU) <code>sed</code> 可以将一些东西添加到每个文件的顶端，比如 <code>sed -i &#39;1i#define const&#39; *.c *.h</code>。</p><p>在编译期间使用脚本生成 <code>Sqlite</code> 代码稍微有点复杂。幸运的是当 <code>const</code> 代码和非 <code>const</code> 代码混合时，编译器会产生了大量的提醒，因此很容易发现它并调整脚本来包含我的反 <code>const</code> 代码段。</p><p>直接比较编译结果毫无意义，因为任意微小的改变就会影响整个内存布局，这可能会改变整个代码中的指针和函数调用。因此，我用每个指令的二进制大小和汇编代码作为识别码（<code>objdump -d libsqlite3.so.0.8.6</code>）。举个例子，这个函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>000000000005d570 &lt;sqlite3_blob_read&gt;:</span></span>
<span class="line"><span>   5d570:       4c 8d 05 59 a2 ff ff    lea    -0x5da7(%rip),%r8        # 577d0 &lt;sqlite3BtreePayloadChecked&gt;</span></span>
<span class="line"><span>   5d577:       e9 04 fe ff ff          jmpq   5d380 &lt;blobReadWrite&gt;</span></span>
<span class="line"><span>   5d57c:       0f 1f 40 00             nopl   0x0(%rax)</span></span></code></pre></div><p>将会变成这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sqlite3_blob_read   7lea 5jmpq 4nopl</span></span></code></pre></div><p>在编译时，我保留了所有 <code>Sqlite</code> 的编译设置。</p><h4 id="分析编译结果" tabindex="-1">分析编译结果 <a class="header-anchor" href="#分析编译结果" aria-label="Permalink to “分析编译结果”">​</a></h4><p><code>const</code> 版本的 <code>libsqlite3.so</code> 的大小是 4,740,704 字节，大约比 4,736,712 字节的非 <code>const</code> 版本大了 0.1% 。在全部 1374 个导出函数（不包括类似 PLT 里的底层辅助函数）中，一共有 13 个函数的识别码不一致。</p><p>其中的一些改变是由于插入的预处理代码。举个例子，这里有一个发生了更改的函数（已经删去一些 <code>Sqlite</code> 特有的定义）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define LARGEST_INT64  (0xffffffff|(((int64_t)0x7fffffff)&lt;&lt;32))</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>删去 <code>const</code> 使得这些常量变成了 <code>static</code> 变量。我不明白为什么会有不了解 <code>const</code> 的人让这些变量加上 <code>static</code>。同时删去 <code>static</code> 和 <code>const</code> 会让 GCC 再次认为它们是常量，而我们将得到同样的编译输出。由于类似这样的局部的 <code>static const</code> 变量，使得 13 个函数中有 3 个函数产生假的变化，但我一个都不打算修复它们。</p>`,13)),a("p",null,[s[11]||(s[11]=a("code",null,"Sqlite",-1)),s[12]||(s[12]=n(" 使用了很多全局变量，而这正是大多数真正的 ",-1)),s[13]||(s[13]=a("code",null,"const",-1)),s[14]||(s[14]=n(" 优化产生的地方。通常情况下，它们类似于将一个变量比较代替成一个常量比较，或者一个循环在部分展开的一步。（",-1)),e(p,{href:"https://rada.re/r/"},{default:i(()=>[...s[10]||(s[10]=[n("Radare toolkit",-1)])]),_:1}),s[15]||(s[15]=n(" 可以很方便的找出这些优化措施。）一些变化则令人失望。",-1)),s[16]||(s[16]=a("code",null,"sqlite3ParseUri()",-1)),s[17]||(s[17]=n(" 有 487 个指令，但 ",-1)),s[18]||(s[18]=a("code",null,"const",-1)),s[19]||(s[19]=n(" 产生的唯一区别是进行了这个比较：",-1))]),s[39]||(s[39]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>test %al, %al</span></span>
<span class="line"><span>je &lt;sqlite3ParseUri+0x717&gt;</span></span>
<span class="line"><span>cmp $0x23, %al</span></span>
<span class="line"><span>je &lt;sqlite3ParseUri+0x717&gt;</span></span></code></pre></div><p>并交换了它们的顺序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cmp $0x23, %al</span></span>
<span class="line"><span>je &lt;sqlite3ParseUri+0x717&gt;</span></span>
<span class="line"><span>test %al, %al</span></span>
<span class="line"><span>je &lt;sqlite3ParseUri+0x717&gt;</span></span></code></pre></div><h4 id="基准测试" tabindex="-1">基准测试 <a class="header-anchor" href="#基准测试" aria-label="Permalink to “基准测试”">​</a></h4><p><code>Sqlite</code> 自带了一个性能回归测试，因此我尝试每个版本的代码执行一百次，仍然使用默认的 <code>Sqlite</code> 编译设置。以秒为单位的测试结果如下：</p><div class="table-wrap"><table><thead><tr><th></th><th>const</th><th>非 const</th></tr></thead><tbody><tr><td>最小值</td><td>10.658s</td><td>10.803s</td></tr><tr><td>中间值</td><td>11.571s</td><td>11.519s</td></tr><tr><td>最大值</td><td>11.832s</td><td>11.658s</td></tr><tr><td>平均值</td><td>11.531s</td><td>11.492s</td></tr></tbody></table></div><p>就我个人看来，我没有发现足够的证据来说明这个差异值得关注。我是说，我从整个程序中删去 <code>const</code>，所以如果它有明显的差别，那么我希望它是显而易见的。但也许你关心任何微小的差异，因为你正在做一些绝对性能非常重要的事。那让我们试一下统计分析。</p><p>我喜欢使用类似 Mann-Whitney U 检验这样的东西。它类似于更著名的 T 检验，但对你在机器上计时时产生的复杂随机变量（由于不可预测的上下文切换、页错误等）更加健壮。以下是结果：</p><div class="table-wrap"><table><thead><tr><th></th><th>const</th><th>非 const</th></tr></thead><tbody><tr><td>N</td><td>100</td><td>100</td></tr><tr><td>Mean rank</td><td>121.38</td><td>79.62</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Mann-Whitney U</td><td>2912</td></tr><tr><td>Z</td><td>-5.10</td></tr><tr><td>2-sided p value</td><td>&lt;10-6</td></tr><tr><td>HL median difference</td><td>-0.056s</td></tr><tr><td>95% confidence interval</td><td>-0.077s – -0.038s</td></tr></tbody></table></div><p>U 检验已经发现统计意义上具有显著的性能差异。但是，令人惊讶的是，实际上是非 <code>const</code> 版本更快——大约 60ms，0.5%。似乎 <code>const</code> 启用的少量“优化”不值得额外代码的开销。这不像是 <code>const</code> 启用了任何类似于自动矢量化的重要的优化。当然，你的结果可能因为编译器配置、编译器版本或者代码库等等而有所不同，但是我觉得这已经说明了 <code>const</code> 是否能够有效地提高 <code>C</code> 的性能，我们现在已经看到答案了。</p><h3 id="那么-const-有什么用呢" tabindex="-1">那么，const 有什么用呢？ <a class="header-anchor" href="#那么-const-有什么用呢" aria-label="Permalink to “那么，const 有什么用呢？”">​</a></h3><p>尽管存在缺陷，C/C++ 的 <code>const</code> 仍有助于类型安全。特别是，结合 C++ 的移动语义和 <code>std::unique_pointer</code>，<code>const</code> 可以使指针所有权显式化。在超过十万行代码的 C++ 旧代码库里，指针所有权模糊是一个大难题，我对此深有感触。</p><p>但是，我以前常常使用 <code>const</code> 来实现有意义的类型安全。我曾听说过基于性能上的原因，最好是尽可能多地使用 <code>const</code>。我曾听说过当性能很重要时，重构代码并添加更多的 <code>const</code> 非常重要，即使以降低代码可读性的方式。<strong>当时觉得这没问题，但后来我才知道这并不对。</strong></p><hr>`,15)),a("p",null,[s[21]||(s[21]=n("via: ",-1)),e(p,{href:"https://theartofmachinery.com/2019/08/12/c_const_isnt_for_performance.html"},{default:i(()=>[...s[20]||(s[20]=[n("https://theartofmachinery.com/2019/08/12/c_const_isnt_for_performance.html",-1)])]),_:1})]),a("p",null,[s[26]||(s[26]=n("作者：",-1)),e(p,{href:"https://theartofmachinery.com"},{default:i(()=>[...s[22]||(s[22]=[n("Simon Arneaud",-1)])]),_:1}),s[27]||(s[27]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[23]||(s[23]=[n("lujun9972",-1)])]),_:1}),s[28]||(s[28]=n(" 译者：",-1)),e(p,{href:"https://github.com/LazyWolfLin"},{default:i(()=>[...s[24]||(s[24]=[n("LazyWolfLin",-1)])]),_:1}),s[29]||(s[29]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[25]||(s[25]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[32]||(s[32]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[30]||(s[30]=[n("LCTT",-1)])]),_:1}),s[33]||(s[33]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[31]||(s[31]=[n("Linux中国",-1)])]),_:1}),s[34]||(s[34]=n(" 荣誉推出",-1))])])}const y=t(r,[["render",h]]);export{C as __pageData,y as default};
