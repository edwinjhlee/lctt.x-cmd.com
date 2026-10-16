import{_ as t,a0 as c,w as o,s as r,I as p,x as n,a1 as l,A as e,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const m=JSON.parse('{"title":"通过 SYCL 在 GPU 上加速 C++ | LCTT x X-CMD","titleTemplate":false,"description":"通过 SYCL 在 GPU 上加速 C++ | LCTT (201706) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通过 SYCL 在 GPU 上加速 C++ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通过 SYCL 在 GPU 上加速 C++ | LCTT (201706) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201706/20170519 Accelerating your C++ on GPU with SYCL","title":"通过 SYCL 在 GPU 上加速 C++","tag":"201706","desc":""},"relativePath":"201706/20170519 Accelerating your C++ on GPU with SYCL.md","filePath":"[post].md"}'),d={name:"201706/20170519 Accelerating your C++ on GPU with SYCL.md"};function u(g,s,h,f,b,y){const a=c("Link");return o(),r("div",null,[s[41]||(s[41]=p("h1",{id:"通过-sycl-在-gpu-上加速-c",tabindex:"-1"},[n("通过 SYCL 在 GPU 上加速 C++ "),p("a",{class:"header-anchor",href:"#通过-sycl-在-gpu-上加速-c","aria-label":"Permalink to “通过 SYCL 在 GPU 上加速 C++”"},"​")],-1)),p("p",null,[s[1]||(s[1]=n("在机器学习、计算机视觉以及高性能计算领域，充分利用显卡计算应用程序的能力已成为当前的热门。类似 OpenCL 的技术通过硬件无关的编程模型展现了这种能力，使得你可以编写抽象于不同体系架构的代码。它的目标是“一次编写，到处运行”，不管它是 Intel CPU、AMD 独立显卡还是 DSP 等等。不幸的是，对于日常程序员，OpenCL 的学习曲线陡峭；一个简单的 Hello World 程序可能就需要上百行晦涩难懂的代码。因此，为了减轻这种痛苦，Khronos 组织已经开发了一个称为 ",-1)),l(a,{href:"https://www.khronos.org/sycl"},{default:e(()=>[...s[0]||(s[0]=[n("SYCL",-1)])]),_:1}),s[2]||(s[2]=n(" 的新标准，这是一个在 OpenCL 之上的 C++ 抽象层。通过 SYCL，你可以使用干净、现代的 C++ 开发出这些通用 GPU（GPGPU）应用程序，而无需拘泥于 OpenCL。下面是一个使用 SYCL 开发，通过并行 STL 实现的向量乘法事例：",-1))]),s[42]||(s[42]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;vector&gt;</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;sycl/execution_policy&gt;</span></span>
<span class="line"><span>#include &lt;experimental/algorithm&gt;</span></span>
<span class="line"><span>#include &lt;sycl/helpers/sycl_buffers.hpp&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using namespace std::experimental::parallel;</span></span>
<span class="line"><span>using namespace sycl::helpers;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>  constexpr size_t array_size = 1024*512;</span></span>
<span class="line"><span>  std::array&lt;cl::sycl::cl_int, array_size&gt; a;</span></span>
<span class="line"><span>  std::iota(begin(a),end(a),0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    cl::sycl::buffer&lt;int&gt; b(a.data(), cl::sycl::range&lt;1&gt;(a.size()));</span></span>
<span class="line"><span>    cl::sycl::queue q;</span></span>
<span class="line"><span>    sycl::sycl_execution_policy&lt;class Mul&gt; sycl_policy(q);</span></span>
<span class="line"><span>    transform(sycl_policy, begin(b), end(b), begin(b),</span></span>
<span class="line"><span>              [](int x) { return x*2; });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>为了作为对比，下面是一个通过 C++ API 使用 OpenCL 编写的大概对应版本（无需花过多时间阅读，只需注意到它看起来难看而且冗长）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;array&gt;</span></span>
<span class="line"><span>#include &lt;numeric&gt;</span></span>
<span class="line"><span>#include &lt;CL/cl.hpp&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>    std::vector&lt;cl::Platform&gt; all_platforms;</span></span>
<span class="line"><span>    cl::Platform::get(&amp;all_platforms);</span></span>
<span class="line"><span>    if(all_platforms.size()==0){</span></span>
<span class="line"><span>        std::cout&lt;&lt;&quot; No platforms found. Check OpenCL installation!\\n&quot;;</span></span>
<span class="line"><span>        exit(1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    cl::Platform default_platform=all_platforms[0];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::vector&lt;cl::Device&gt; all_devices;</span></span>
<span class="line"><span>    default_platform.getDevices(CL_DEVICE_TYPE_ALL, &amp;all_devices);</span></span>
<span class="line"><span>    if(all_devices.size()==0){</span></span>
<span class="line"><span>        std::cout&lt;&lt;&quot; No devices found. Check OpenCL installation!\\n&quot;;</span></span>
<span class="line"><span>        exit(1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cl::Device default_device=all_devices[0];</span></span>
<span class="line"><span>    cl::Context context({default_device});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cl::Program::Sources sources;</span></span>
<span class="line"><span>    std::string kernel_code=</span></span>
<span class="line"><span>        &quot;   void kernel mul2(global int* A){&quot;</span></span>
<span class="line"><span>        &quot;       A[get_global_id(0)]=A[get_global_id(0)]*2;&quot;</span></span>
<span class="line"><span>        &quot;   }&quot;;</span></span>
<span class="line"><span>    sources.push_back({kernel_code.c_str(),kernel_code.length()});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cl::Program program(context,sources);</span></span>
<span class="line"><span>    if(program.build({default_device})!=CL_SUCCESS){</span></span>
<span class="line"><span>        std::cout&lt;&lt;&quot; Error building: &quot;&lt;&lt;program.getBuildInfo&lt;CL_PROGRAM_BUILD_LOG&gt;(default_device)&lt;&lt;&quot;\\n&quot;;</span></span>
<span class="line"><span>        exit(1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    constexpr size_t array_size = 1024*512;</span></span>
<span class="line"><span>    std::array&lt;cl_int, array_size&gt; a;</span></span>
<span class="line"><span>    std::iota(begin(a),end(a),0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cl::Buffer buffer_A(context,CL_MEM_READ_WRITE,sizeof(int)*a.size());</span></span>
<span class="line"><span>    cl::CommandQueue queue(context,default_device);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (queue.enqueueWriteBuffer(buffer_A,CL_TRUE,0,sizeof(int)*a.size(),a.data()) != CL_SUCCESS) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Failed to write memory;n&quot;;</span></span>
<span class="line"><span>        exit(1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cl::Kernel kernel_add = cl::Kernel(program,&quot;mul2&quot;);</span></span>
<span class="line"><span>    kernel_add.setArg(0,buffer_A);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (queue.enqueueNDRangeKernel(kernel_add,cl::NullRange,cl::NDRange(a.size()),cl::NullRange) != CL_SUCCESS) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Failed to enqueue kernel\\n&quot;;</span></span>
<span class="line"><span>        exit(1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (queue.finish() != CL_SUCCESS) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Failed to finish kernel\\n&quot;;</span></span>
<span class="line"><span>        exit(1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (queue.enqueueReadBuffer(buffer_A,CL_TRUE,0,sizeof(int)*a.size(),a.data()) != CL_SUCCESS) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Failed to read result\\n&quot;;</span></span>
<span class="line"><span>        exit(1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这篇博文中我会介绍使用 SYCL 加速你 GPU 上的 C++ 代码。</p><h3 id="gpgpu-简介" tabindex="-1">GPGPU 简介 <a class="header-anchor" href="#gpgpu-简介" aria-label="Permalink to “GPGPU 简介”">​</a></h3><p>在我开始介绍如何使用 SYCL 之前，我首先给那些不熟悉这方面的人简要介绍一下为什么你可能想要在 GPU 上运行计算任务。如果已经使用过 OpenCL、CUDA 或类似的库，可以跳过这一节。</p><p>GPU 和 CPU 的一个关键不同就是 GPU 有大量小的、简单的处理单元，而不是少量（对于普通消费者桌面硬件通常是 1-8 个）复杂而强大的核。</p><p><img src="https://blog.tartanllama.xyz/assets/cpu.png" alt="CPU 架构"></p><p>上面是一个 4 核 CPU 的简单漫画示意图。每个核都有一组寄存器以及不同等级的缓存（有些是共享缓存、有些不是），然后是主内存。</p><p><img src="https://blog.tartanllama.xyz/assets/gpu.png" alt="GPU 架构"></p><p>在 GPU 上，多个小处理单元被组成一个执行单元。每个小处理单元都附有少量内存，每个执行单元都有一些共享内存用于它的处理单元。除此之外，还有一些 GPU 范围的内存，然后是 CPU 使用的主内存。执行单元内部的单元是 <em>lockstep</em> ，每个单元都在不同的数据片上执行相同的指令。</p><p>这可以使 GPU 同时处理大量的数据。如果是在 CPU 上，也许你可以使用多线程和向量指令在给定时间内完成大量的工作，但是 GPU 所能处理的远多于此。在 GPU 上一次性能够处理的数据规模使得它非常适合于类似图形（duh）、数学处理、神经网络等等。</p><p>GPGPU 编程的很多方面使得它和日常的 CPU 编程完全不同。例如，从主内存传输数据到 GPU 是_很慢的_。_真的_很慢。会完全干掉你的性能使你慢下来。因此，GPU 编程的权衡是尽可能多地利用加速器的高吞吐量来掩盖数据来往的延迟。</p><p>这里还有一些不那么明显的问题，例如分支的开销。由于执行单元内的处理单元按照 lockstep 工作，使它们执行不同路径（不同的控制流）的嵌套分支就是个真正的问题。这通常通过在所有单元上执行所有分支并标记出无用结果来解决。这是一个基于嵌套级别的指数级的复杂度，这当然是坏事情。当然，有一些优化方法可以拯救该问题，但需要注意：你从 CPU 领域带来的简单假设和知识在 GPU 领域可能导致大问题。</p><p>在我们回到 SYCL 之前，需要介绍一些术语。主机（host）是主 CPU 运行的机器，设备（device）是会运行你 OpenCL 代码的地方。设备可能就是主机，但也可能是你机器上的一些加速器、模拟器等。内核（kernel）是一个特殊函数，它是在你设备上运行代码的入口点。通常还会提供一些主机设置好的缓存给它用于输入和输出数据。</p><h3 id="回到-sycl" tabindex="-1">回到 SYCL <a class="header-anchor" href="#回到-sycl" aria-label="Permalink to “回到 SYCL”">​</a></h3>`,16)),p("p",null,[s[5]||(s[5]=n("这里有两个可用的 SYCL 实现：",-1)),l(a,{href:"https://github.com/Xilinx/triSYCL"},{default:e(()=>[...s[3]||(s[3]=[n("triSYCL",-1)])]),_:1}),s[6]||(s[6]=n("，由 Xilinx 开发的实验性开源版本（通常作为标准的试验台使用），以及 ",-1)),l(a,{href:"https://www.codeplay.com/products/computesuite/computecpp"},{default:e(()=>[...s[4]||(s[4]=[n("ComputeCpp",-1)])]),_:1}),s[7]||(s[7]=n("，由 Codeplay（我在 Codeplay 工作，但这篇文章是在没有我雇主建议的情况下使用我自己时间编写的） 开发的工业级实现（当前处于开发测试版）。只有 ComputeCpp 支持在 GPU 上执行内核，因此在这篇文章中我们会使用它。",-1))]),p("p",null,[s[12]||(s[12]=n("第一步是在你的机器上配置以及运行 ComputeCpp。主要组件是一个实现了 SYCL API 的运行时库，以及一个基于 Clang 的编译器，它负责编译你的主机代码和设备代码。在本文写作时，已经在 Ubuntu 和 CentOS 上官方支持 Intel CPU 以及某些 AMD GPU。在其它 Linux 发行版上让它工作也非常简单（例如，我让它在我的 Arch 系统上运行）。对更多的硬件和操作系统的支持正在进行中，查看",-1)),l(a,{href:"https://www.codeplay.com/products/computesuite/computecpp/reference/platform-support-notes"},{default:e(()=>[...s[8]||(s[8]=[n("支持平台文档",-1)])]),_:1}),s[13]||(s[13]=n("获取最新列表。",-1)),l(a,{href:"https://www.codeplay.com/products/computesuite/computecpp/reference/release-notes/"},{default:e(()=>[...s[9]||(s[9]=[n("这里",-1)])]),_:1}),s[14]||(s[14]=n("列出了依赖和组件。你也可能想要下载 ",-1)),l(a,{href:"https://github.com/codeplaysoftware/computecpp-sdk"},{default:e(()=>[...s[10]||(s[10]=[n("SDK",-1)])]),_:1}),s[15]||(s[15]=n("，其中包括了示例、文档、构建系统集成文件，以及其它。在这篇文章中我会使用 ",-1)),l(a,{href:"https://github.com/KhronosGroup/SyclParallelSTL"},{default:e(()=>[...s[11]||(s[11]=[n("SYCL 并行 STL",-1)])]),_:1}),s[16]||(s[16]=n("，如果你想要自己在家学习的话也要下载它。",-1))]),s[43]||(s[43]=i(`<p>一旦你设置好了一切，我们就可以开始通用 GPU 编程了！正如简介中提到的，我的第一个示例使用 SYCL 并行 STL 实现。我们现在来看看如何使用纯 SYCL 编写代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;CL/sycl.hpp&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;array&gt;</span></span>
<span class="line"><span>#include &lt;numeric&gt;</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>      const size_t array_size = 1024*512;</span></span>
<span class="line"><span>      std::array&lt;cl::sycl::cl_int, array_size&gt; in,out;</span></span>
<span class="line"><span>      std::iota(begin(in),end(in),0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>          cl::sycl::queue device_queue;</span></span>
<span class="line"><span>          cl::sycl::range&lt;1&gt; n_items{array_size};</span></span>
<span class="line"><span>          cl::sycl::buffer&lt;cl::sycl::cl_int, 1&gt; in_buffer(in.data(), n_items);</span></span>
<span class="line"><span>          cl::sycl::buffer&lt;cl::sycl::cl_int, 1&gt; out_buffer(out.data(), n_items);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          device_queue.submit([&amp;](cl::sycl::handler &amp;cgh) {</span></span>
<span class="line"><span>              constexpr auto sycl_read = cl::sycl::access::mode::read;</span></span>
<span class="line"><span>              constexpr auto sycl_write = cl::sycl::access::mode::write;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              auto in_accessor = in_buffer.get_access&lt;sycl_read&gt;(cgh);</span></span>
<span class="line"><span>              auto out_accessor = out_buffer.get_access&lt;sycl_write&gt;(cgh);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              cgh.parallel_for&lt;class VecScalMul&gt;(n_items,</span></span>
<span class="line"><span>                  [=](cl::sycl::id&lt;1&gt; wiID) {</span></span>
<span class="line"><span>                      out_accessor[wiID] = in_accessor[wiID]*2;</span></span>
<span class="line"><span>                  });</span></span>
<span class="line"><span>         });</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我会把它划分为一个个片段。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;CL/sycl.hpp&gt;</span></span></code></pre></div><p>我们做的第一件事就是包含 SYCL 头文件，它会在我们的命令中添加 SYCL 运行时库。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const size_t array_size = 1024*512;</span></span>
<span class="line"><span>std::array&lt;cl::sycl::cl_int, array_size&gt; in,out;</span></span>
<span class="line"><span>std::iota(begin(in),end(in),0);</span></span></code></pre></div><p>这里我们构造了一个很大的整型数组并用数字 <code>0</code> 到 <code>array_size-1</code> 初始化（这就是 <code>std::iota</code> 所做的）。注意我们使用 <code>cl::sycl::cl_int</code> 确保兼容性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接着我们打开一个新的作用域，其目的为二：</p><ol><li><code>device_queue</code> 将在该作用域结束时解构，它将阻塞，直到内核完成。</li><li><code>in_buffer</code> 和 <code>out_buffer</code> 也将解构，这将强制数据传输回主机并允许我们从 <code>in</code> 和 <code>out</code> 中访问数据。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cl::sycl::queue device_queue;</span></span></code></pre></div><p>现在我们创建我们的命令队列。命令队列是所有工作（内核）在分发到设备之前需要入队的地方。有很多方法可以定制队列，例如说提供设备用于入队或者设置异步错误处理器，但对于这个例子默认构造器就可以了；它会查找兼容的 GPU，如果失败的话会回退到主机 CPU。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cl::sycl::range&lt;1&gt; n_items{array_size};</span></span></code></pre></div><p>接下来我们创建一个范围，它描述了内核在上面执行的数据的形状。在我们简单的例子中，它是一个一维数组，因此我们使用 <code>cl::sycl::range&lt;1&gt;</code>。如果数据是二维的，我们就会使用 <code>cl::sycl::range&lt;2&gt;</code>，以此类推。除了 <code>cl::sycl::range</code>，还有 <code>cl::sycl::ndrange</code>，它允许你指定工作组大小以及越界范围，但在我们的例子中我们不需要使用它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cl::sycl::buffer&lt;cl::sycl::cl_int, 1&gt; in_buffer(in.data(), n_items);</span></span>
<span class="line"><span>cl::sycl::buffer&lt;cl::sycl::cl_int, 1&gt; out_buffer(out.data(), n_items);</span></span></code></pre></div><p>为了控制主机和设备之间的数据共享和传输，SYCL 提供了一个 <code>buffer</code> 类。我们创建了两个 SYCL 缓存用于管理我们的输入和输出数组。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>      device_queue.submit([&amp;](cl::sycl::handler &amp;cgh) {/*...*/});</span></span></code></pre></div><p>设置好了我们所有数据之后，我们就可以入队真正的工作。有多种方法可以做到，但设置并行执行的一个简单方法是在我们的队列中调用 <code>.submit</code> 函数。对于这个函数我们传递了一个运行时调度该任务时会被执行的“命令组伪函数”（伪函数是规范，不是我创造的）。命令组处理器设置任何内核需要的余下资源并分发它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>constexpr auto sycl_read = cl::sycl::access::mode::read_write;</span></span>
<span class="line"><span>constexpr auto sycl_write = cl::sycl::access::mode::write;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>auto in_accessor = in_buffer.get_access&lt;sycl_read&gt;(cgh);</span></span>
<span class="line"><span>auto out_accessor = out_buffer.get_access&lt;sycl_write&gt;(cgh);</span></span></code></pre></div><p>为了控制到我们缓存的访问并告诉该运行时环境我们会如何使用数据，我们需要创建访问器。很显然，我们创建了一个访问器用于从 <code>in_buffer</code> 读入，一个访问器用于写到 <code>out_buffer</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cgh.parallel_for&lt;class VecScalMul&gt;(n_items,</span></span>
<span class="line"><span>    [=](cl::sycl::id&lt;1&gt; wiID) {</span></span>
<span class="line"><span>         out_accessor[wiID] = in_accessor[wiID]*2;</span></span>
<span class="line"><span>    });</span></span></code></pre></div><p>现在我们已经完成了所有设置，我们可以真正的在我们的设备上做一些计算了。这里我们根据范围 <code>n_items</code> 在命令组处理器 <code>cgh</code> 之上分发一个内核。实际内核自身是一个使用 work-item 标识符作为输入、输出我们计算结果的 lamda 表达式。在这种情况下，我们从 <code>in_accessor</code> 使用 work-item 标识符作为索引读入，将其乘以 <code>2</code>，然后将结果保存到 <code>out_accessor</code> 相应的位置。<code>&lt;class VecScalMul&gt;</code> 是一个为了在标准 C++ 范围内工作的不幸的副产品，因此我们需要给内核一个唯一的类名以便编译器能完成它的工作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>}</span></span></code></pre></div><p>在此之后，我们现在可以访问 <code>out</code> 并期望看到正确的结果。</p><p>这里有相当多的新概念在起作用，但使用这些技术你可以看到这些能力和所展现出来的东西。当然，如果你只是想在你的 GPU 上执行一些代码而不关心定制化，那么你就可以使用 SYCL 并行 STL 实现。</p><h3 id="sycl-并行-stl" tabindex="-1">SYCL 并行 STL <a class="header-anchor" href="#sycl-并行-stl" aria-label="Permalink to “SYCL 并行 STL”">​</a></h3><p>SYCL 并行 STL 是一个 TS 的并行化实现，它分发你的算法函数对象作为 SYCL 内核。在这个页面前面我们已经看过这样的例子，让我们来快速过一遍。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;vector&gt;</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;sycl/execution_policy&gt;</span></span>
<span class="line"><span>#include &lt;experimental/algorithm&gt;</span></span>
<span class="line"><span>#include &lt;sycl/helpers/sycl_buffers.hpp&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using namespace std::experimental::parallel;</span></span>
<span class="line"><span>using namespace sycl::helpers;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>  constexpr size_t array_size = 1024*512;</span></span>
<span class="line"><span>  std::array&lt;cl::sycl::cl_int, array_size&gt; in,out;</span></span>
<span class="line"><span>  std::iota(begin(in),end(in),0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    cl::sycl::buffer&lt;int&gt; in_buffer(in.data(), cl::sycl::range&lt;1&gt;(in.size()));</span></span>
<span class="line"><span>    cl::sycl::buffer&lt;int&gt; out_buffer(out.data(), cl::sycl::range&lt;1&gt;(out.size()));</span></span>
<span class="line"><span>    cl::sycl::queue q;</span></span>
<span class="line"><span>    sycl::sycl_execution_policy&lt;class Mul&gt; sycl_policy(q);</span></span>
<span class="line"><span>    transform(sycl_policy, begin(in_buffer), end(in_buffer), begin(out_buffer),</span></span>
<span class="line"><span>              [](int x) { return x*2; });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  constexpr size_t array_size = 1024*512;</span></span>
<span class="line"><span>  std::array&lt;cl::sycl::cl_int, array_size&gt; in, out;</span></span>
<span class="line"><span>  std::iota(begin(in),end(in),0);</span></span></code></pre></div><p>到现在为止一切如此相似。我们再一次创建一组数组用于保存我们的输入输出数据。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cl::sycl::buffer&lt;int&gt; in_buffer(in.data(), cl::sycl::range&lt;1&gt;(in.size()));</span></span>
<span class="line"><span>cl::sycl::buffer&lt;int&gt; out_buffer(out.data(), cl::sycl::range&lt;1&gt;(out.size()));</span></span>
<span class="line"><span>cl::sycl::queue q;</span></span></code></pre></div><p>这里我们创建类似上个例子的缓存和队列。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sycl::sycl_execution_policy&lt;class Mul&gt; sycl_policy(q);</span></span></code></pre></div><p>这就是有趣的部分。我们从我们的队列中创建 <code>sycl_execution_policy</code>，给它一个名称让内核使用。这个执行策略然后可以像 <code>std::execution::par</code> 或 <code>std::execution::seq</code> 那样使用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>transform(sycl_policy, begin(in_buffer), end(in_buffer), begin(out_buffer),</span></span>
<span class="line"><span>          [](int x) { return x*2; });</span></span></code></pre></div><p>现在我们的内核分发看起来像提供了一个执行策略的 <code>std::transform</code> 调用。我们传递的闭包会被编译并在设备上执行，而不需要我们做其它更加复杂的设置。</p><p>当然，除了 <code>transform</code> 你可以做更多。开发的时候，SYCL 并行 STL 支持以下算法：</p><ul><li><code>sort</code></li><li><code>transform</code></li><li><code>for_each</code></li><li><code>for_each_n</code></li><li><code>count_if</code></li><li><code>reduce</code></li><li><code>inner_product</code></li><li><code>transform_reduce</code></li></ul>`,38)),p("p",null,[s[22]||(s[22]=n("这就是这篇短文需要介绍的东西。如果你想和 SYCL 的开发保持同步，那就要看 ",-1)),l(a,{href:"http://sycl.tech/"},{default:e(()=>[...s[17]||(s[17]=[n("sycl.tech",-1)])]),_:1}),s[23]||(s[23]=n("。最近重要的开发就是移植 ",-1)),l(a,{href:"https://github.com/ville-k/sycl_starter"},{default:e(()=>[...s[18]||(s[18]=[n("Eigen",-1)])]),_:1}),s[24]||(s[24]=n(" 和 ",-1)),l(a,{href:"http://deep-beta.co.uk/setting-up-tensorflow-with-opencl-using-sycl/"},{default:e(()=>[...s[19]||(s[19]=[n("Tensorflow",-1)])]),_:1}),s[25]||(s[25]=n(" 到 SYCL ，为 OpenCL 设备带来引入关注的人工智能编程。对我个人而言，我很高兴看到高级编程模型可以用于异构程序自动优化，以及它们是怎样支持类似 ",-1)),l(a,{href:"https://github.com/STEllAR-GROUP/hpx"},{default:e(()=>[...s[20]||(s[20]=[n("HPX",-1)])]),_:1}),s[26]||(s[26]=n(" 或 ",-1)),l(a,{href:"https://github.com/skelcl/skelcl"},{default:e(()=>[...s[21]||(s[21]=[n("SkelCL",-1)])]),_:1}),s[27]||(s[27]=n(" 等更高级的技术。",-1))]),s[44]||(s[44]=p("hr",null,null,-1)),p("p",null,[s[29]||(s[29]=n("via: ",-1)),l(a,{href:"https://blog.tartanllama.xyz/c++/2017/05/19/sycl/"},{default:e(()=>[...s[28]||(s[28]=[n("https://blog.tartanllama.xyz/c++/2017/05/19/sycl/",-1)])]),_:1})]),p("p",null,[s[33]||(s[33]=n("作者：",-1)),l(a,{href:"https://www.twitter.com/TartanLlama"},{default:e(()=>[...s[30]||(s[30]=[n("TartanLlama",-1)])]),_:1}),s[34]||(s[34]=n(" 译者：",-1)),l(a,{href:"https://github.com/ictlyh"},{default:e(()=>[...s[31]||(s[31]=[n("ictlyh",-1)])]),_:1}),s[35]||(s[35]=n(" 校对：",-1)),l(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[32]||(s[32]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[38]||(s[38]=n("本文由 ",-1)),l(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[36]||(s[36]=[n("LCTT",-1)])]),_:1}),s[39]||(s[39]=n(" 原创编译，",-1)),l(a,{href:"https://linux.cn/"},{default:e(()=>[...s[37]||(s[37]=[n("Linux中国",-1)])]),_:1}),s[40]||(s[40]=n(" 荣誉推出",-1))])])}const _=t(d,[["render",u]]);export{m as __pageData,_ as default};
