import{_ as t,a0 as c,w as o,s as r,I as p,x as n,a1 as l,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const m=JSON.parse('{"title":"通過 SYCL 在 GPU 上加速 C++ | LCTT x X-CMD","titleTemplate":false,"description":"通過 SYCL 在 GPU 上加速 C++ | LCTT (201706) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通過 SYCL 在 GPU 上加速 C++ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通過 SYCL 在 GPU 上加速 C++ | LCTT (201706) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201706/20170519 Accelerating your C++ on GPU with SYCL","title":"通過 SYCL 在 GPU 上加速 C++","tag":"201706","desc":""},"relativePath":"201706/20170519 Accelerating your C++ on GPU with SYCL.md","filePath":"[post].md"}'),d={name:"201706/20170519 Accelerating your C++ on GPU with SYCL.md"};function u(g,s,h,f,b,y){const a=c("Link");return o(),r("div",null,[s[41]||(s[41]=p("h1",{id:"通過-sycl-在-gpu-上加速-c",tabindex:"-1"},[n("通過 SYCL 在 GPU 上加速 C++ "),p("a",{class:"header-anchor",href:"#通過-sycl-在-gpu-上加速-c","aria-label":"Permalink to “通過 SYCL 在 GPU 上加速 C++”"},"​")],-1)),p("p",null,[s[1]||(s[1]=n("在機器學習、計算機視覺以及高性能計算領域，充分利用顯卡計算應用程序的能力已成為當前的熱門。類似 OpenCL 的技術通過硬件無關的編程模型展現了這種能力，使得你可以編寫抽象於不同體系架構的代碼。它的目標是“一次編寫，到處運行”，不管它是 Intel CPU、AMD 獨立顯卡還是 DSP 等等。不幸的是，對於日常程序員，OpenCL 的學習曲線陡峭；一個簡單的 Hello World 程序可能就需要上百行晦澀難懂的代碼。因此，為了減輕這種痛苦，Khronos 組織已經開發了一個稱為 ",-1)),l(a,{href:"https://www.khronos.org/sycl"},{default:e(()=>[...s[0]||(s[0]=[n("SYCL",-1)])]),_:1}),s[2]||(s[2]=n(" 的新標準，這是一個在 OpenCL 之上的 C++ 抽象層。通過 SYCL，你可以使用乾淨、現代的 C++ 開發出這些通用 GPU（GPGPU）應用程序，而無需拘泥於 OpenCL。下面是一個使用 SYCL 開發，通過並行 STL 實現的向量乘法事例：",-1))]),s[42]||(s[42]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;vector&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>為了作為對比，下面是一個通過 C++ API 使用 OpenCL 編寫的大概對應版本（無需花過多時間閲讀，只需注意到它看起來難看而且冗長）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在這篇博文中我會介紹使用 SYCL 加速你 GPU 上的 C++ 代碼。</p><h3 id="gpgpu-簡介" tabindex="-1">GPGPU 簡介 <a class="header-anchor" href="#gpgpu-簡介" aria-label="Permalink to “GPGPU 簡介”">​</a></h3><p>在我開始介紹如何使用 SYCL 之前，我首先給那些不熟悉這方面的人簡要介紹一下為什麼你可能想要在 GPU 上運行計算任務。如果已經使用過 OpenCL、CUDA 或類似的庫，可以跳過這一節。</p><p>GPU 和 CPU 的一個關鍵不同就是 GPU 有大量小的、簡單的處理單元，而不是少量（對於普通消費者桌面硬件通常是 1-8 個）複雜而強大的核。</p><p><img src="https://blog.tartanllama.xyz/assets/cpu.png" alt="CPU 架構"></p><p>上面是一個 4 核 CPU 的簡單漫畫示意圖。每個核都有一組寄存器以及不同等級的緩存（有些是共享緩存、有些不是），然後是主內存。</p><p><img src="https://blog.tartanllama.xyz/assets/gpu.png" alt="GPU 架構"></p><p>在 GPU 上，多個小處理單元被組成一個執行單元。每個小處理單元都附有少量內存，每個執行單元都有一些共享內存用於它的處理單元。除此之外，還有一些 GPU 範圍的內存，然後是 CPU 使用的主內存。執行單元內部的單元是 <em>lockstep</em> ，每個單元都在不同的數據片上執行相同的指令。</p><p>這可以使 GPU 同時處理大量的數據。如果是在 CPU 上，也許你可以使用多線程和向量指令在給定時間內完成大量的工作，但是 GPU 所能處理的遠多於此。在 GPU 上一次性能夠處理的數據規模使得它非常適合於類似圖形（duh）、數學處理、神經網絡等等。</p><p>GPGPU 編程的很多方面使得它和日常的 CPU 編程完全不同。例如，從主內存傳輸數據到 GPU 是_很慢的_。_真的_很慢。會完全乾掉你的性能使你慢下來。因此，GPU 編程的權衡是儘可能多地利用加速器的高吞吐量來掩蓋數據來往的延遲。</p><p>這裏還有一些不那麼明顯的問題，例如分支的開銷。由於執行單元內的處理單元按照 lockstep 工作，使它們執行不同路徑（不同的控制流）的嵌套分支就是個真正的問題。這通常通過在所有單元上執行所有分支並標記出無用結果來解決。這是一個基於嵌套級別的指數級的複雜度，這當然是壞事情。當然，有一些優化方法可以拯救該問題，但需要注意：你從 CPU 領域帶來的簡單假設和知識在 GPU 領域可能導致大問題。</p><p>在我們回到 SYCL 之前，需要介紹一些術語。主機（host）是主 CPU 運行的機器，設備（device）是會運行你 OpenCL 代碼的地方。設備可能就是主機，但也可能是你機器上的一些加速器、模擬器等。內核（kernel）是一個特殊函數，它是在你設備上運行代碼的入口點。通常還會提供一些主機設置好的緩存給它用於輸入和輸出數據。</p><h3 id="回到-sycl" tabindex="-1">回到 SYCL <a class="header-anchor" href="#回到-sycl" aria-label="Permalink to “回到 SYCL”">​</a></h3>`,16)),p("p",null,[s[5]||(s[5]=n("這裏有兩個可用的 SYCL 實現：",-1)),l(a,{href:"https://github.com/Xilinx/triSYCL"},{default:e(()=>[...s[3]||(s[3]=[n("triSYCL",-1)])]),_:1}),s[6]||(s[6]=n("，由 Xilinx 開發的實驗性開源版本（通常作為標準的試驗枱使用），以及 ",-1)),l(a,{href:"https://www.codeplay.com/products/computesuite/computecpp"},{default:e(()=>[...s[4]||(s[4]=[n("ComputeCpp",-1)])]),_:1}),s[7]||(s[7]=n("，由 Codeplay（我在 Codeplay 工作，但這篇文章是在沒有我僱主建議的情況下使用我自己時間編寫的） 開發的工業級實現（當前處於開發測試版）。只有 ComputeCpp 支持在 GPU 上執行內核，因此在這篇文章中我們會使用它。",-1))]),p("p",null,[s[12]||(s[12]=n("第一步是在你的機器上配置以及運行 ComputeCpp。主要組件是一個實現了 SYCL API 的運行時庫，以及一個基於 Clang 的編譯器，它負責編譯你的主機代碼和設備代碼。在本文寫作時，已經在 Ubuntu 和 CentOS 上官方支持 Intel CPU 以及某些 AMD GPU。在其它 Linux 發行版上讓它工作也非常簡單（例如，我讓它在我的 Arch 系統上運行）。對更多的硬件和操作系統的支持正在進行中，查看",-1)),l(a,{href:"https://www.codeplay.com/products/computesuite/computecpp/reference/platform-support-notes"},{default:e(()=>[...s[8]||(s[8]=[n("支持平台文檔",-1)])]),_:1}),s[13]||(s[13]=n("獲取最新列表。",-1)),l(a,{href:"https://www.codeplay.com/products/computesuite/computecpp/reference/release-notes/"},{default:e(()=>[...s[9]||(s[9]=[n("這裏",-1)])]),_:1}),s[14]||(s[14]=n("列出了依賴和組件。你也可能想要下載 ",-1)),l(a,{href:"https://github.com/codeplaysoftware/computecpp-sdk"},{default:e(()=>[...s[10]||(s[10]=[n("SDK",-1)])]),_:1}),s[15]||(s[15]=n("，其中包括了示例、文檔、構建系統集成文件，以及其它。在這篇文章中我會使用 ",-1)),l(a,{href:"https://github.com/KhronosGroup/SyclParallelSTL"},{default:e(()=>[...s[11]||(s[11]=[n("SYCL 並行 STL",-1)])]),_:1}),s[16]||(s[16]=n("，如果你想要自己在家學習的話也要下載它。",-1))]),s[43]||(s[43]=i(`<p>一旦你設置好了一切，我們就可以開始通用 GPU 編程了！正如簡介中提到的，我的第一個示例使用 SYCL 並行 STL 實現。我們現在來看看如何使用純 SYCL 編寫代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;CL/sycl.hpp&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我會把它劃分為一個個片段。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;CL/sycl.hpp&gt;</span></span></code></pre></div><p>我們做的第一件事就是包含 SYCL 頭文件，它會在我們的命令中添加 SYCL 運行時庫。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const size_t array_size = 1024*512;</span></span>
<span class="line"><span>std::array&lt;cl::sycl::cl_int, array_size&gt; in,out;</span></span>
<span class="line"><span>std::iota(begin(in),end(in),0);</span></span></code></pre></div><p>這裏我們構造了一個很大的整型數組並用數字 <code>0</code> 到 <code>array_size-1</code> 初始化（這就是 <code>std::iota</code> 所做的）。注意我們使用 <code>cl::sycl::cl_int</code> 確保兼容性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接着我們打開一個新的作用域，其目的為二：</p><ol><li><code>device_queue</code> 將在該作用域結束時解構，它將阻塞，直到內核完成。</li><li><code>in_buffer</code> 和 <code>out_buffer</code> 也將解構，這將強制數據傳輸回主機並允許我們從 <code>in</code> 和 <code>out</code> 中訪問數據。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cl::sycl::queue device_queue;</span></span></code></pre></div><p>現在我們創建我們的命令隊列。命令隊列是所有工作（內核）在分發到設備之前需要入隊的地方。有很多方法可以定製隊列，例如説提供設備用於入隊或者設置異步錯誤處理器，但對於這個例子默認構造器就可以了；它會查找兼容的 GPU，如果失敗的話會回退到主機 CPU。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cl::sycl::range&lt;1&gt; n_items{array_size};</span></span></code></pre></div><p>接下來我們創建一個範圍，它描述了內核在上面執行的數據的形狀。在我們簡單的例子中，它是一個一維數組，因此我們使用 <code>cl::sycl::range&lt;1&gt;</code>。如果數據是二維的，我們就會使用 <code>cl::sycl::range&lt;2&gt;</code>，以此類推。除了 <code>cl::sycl::range</code>，還有 <code>cl::sycl::ndrange</code>，它允許你指定工作組大小以及越界範圍，但在我們的例子中我們不需要使用它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cl::sycl::buffer&lt;cl::sycl::cl_int, 1&gt; in_buffer(in.data(), n_items);</span></span>
<span class="line"><span>cl::sycl::buffer&lt;cl::sycl::cl_int, 1&gt; out_buffer(out.data(), n_items);</span></span></code></pre></div><p>為了控制主機和設備之間的數據共享和傳輸，SYCL 提供了一個 <code>buffer</code> 類。我們創建了兩個 SYCL 緩存用於管理我們的輸入和輸出數組。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>      device_queue.submit([&amp;](cl::sycl::handler &amp;cgh) {/*...*/});</span></span></code></pre></div><p>設置好了我們所有數據之後，我們就可以入隊真正的工作。有多種方法可以做到，但設置並行執行的一個簡單方法是在我們的隊列中調用 <code>.submit</code> 函數。對於這個函數我們傳遞了一個運行時調度該任務時會被執行的“命令組偽函數”（偽函數是規範，不是我創造的）。命令組處理器設置任何內核需要的餘下資源並分發它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>constexpr auto sycl_read = cl::sycl::access::mode::read_write;</span></span>
<span class="line"><span>constexpr auto sycl_write = cl::sycl::access::mode::write;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>auto in_accessor = in_buffer.get_access&lt;sycl_read&gt;(cgh);</span></span>
<span class="line"><span>auto out_accessor = out_buffer.get_access&lt;sycl_write&gt;(cgh);</span></span></code></pre></div><p>為了控制到我們緩存的訪問並告訴該運行時環境我們會如何使用數據，我們需要創建訪問器。很顯然，我們創建了一個訪問器用於從 <code>in_buffer</code> 讀入，一個訪問器用於寫到 <code>out_buffer</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cgh.parallel_for&lt;class VecScalMul&gt;(n_items,</span></span>
<span class="line"><span>    [=](cl::sycl::id&lt;1&gt; wiID) {</span></span>
<span class="line"><span>         out_accessor[wiID] = in_accessor[wiID]*2;</span></span>
<span class="line"><span>    });</span></span></code></pre></div><p>現在我們已經完成了所有設置，我們可以真正的在我們的設備上做一些計算了。這裏我們根據範圍 <code>n_items</code> 在命令組處理器 <code>cgh</code> 之上分發一個內核。實際內核自身是一個使用 work-item 標識符作為輸入、輸出我們計算結果的 lamda 表達式。在這種情況下，我們從 <code>in_accessor</code> 使用 work-item 標識符作為索引讀入，將其乘以 <code>2</code>，然後將結果保存到 <code>out_accessor</code> 相應的位置。<code>&lt;class VecScalMul&gt;</code> 是一個為了在標準 C++ 範圍內工作的不幸的副產品，因此我們需要給內核一個唯一的類名以便編譯器能完成它的工作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>}</span></span></code></pre></div><p>在此之後，我們現在可以訪問 <code>out</code> 並期望看到正確的結果。</p><p>這裏有相當多的新概念在起作用，但使用這些技術你可以看到這些能力和所展現出來的東西。當然，如果你只是想在你的 GPU 上執行一些代碼而不關心定製化，那麼你就可以使用 SYCL 並行 STL 實現。</p><h3 id="sycl-並行-stl" tabindex="-1">SYCL 並行 STL <a class="header-anchor" href="#sycl-並行-stl" aria-label="Permalink to “SYCL 並行 STL”">​</a></h3><p>SYCL 並行 STL 是一個 TS 的並行化實現，它分發你的算法函數對象作為 SYCL 內核。在這個頁面前面我們已經看過這樣的例子，讓我們來快速過一遍。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;vector&gt;</span></span>
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
<span class="line"><span>  std::iota(begin(in),end(in),0);</span></span></code></pre></div><p>到現在為止一切如此相似。我們再一次創建一組數組用於保存我們的輸入輸出數據。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cl::sycl::buffer&lt;int&gt; in_buffer(in.data(), cl::sycl::range&lt;1&gt;(in.size()));</span></span>
<span class="line"><span>cl::sycl::buffer&lt;int&gt; out_buffer(out.data(), cl::sycl::range&lt;1&gt;(out.size()));</span></span>
<span class="line"><span>cl::sycl::queue q;</span></span></code></pre></div><p>這裏我們創建類似上個例子的緩存和隊列。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sycl::sycl_execution_policy&lt;class Mul&gt; sycl_policy(q);</span></span></code></pre></div><p>這就是有趣的部分。我們從我們的隊列中創建 <code>sycl_execution_policy</code>，給它一個名稱讓內核使用。這個執行策略然後可以像 <code>std::execution::par</code> 或 <code>std::execution::seq</code> 那樣使用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>transform(sycl_policy, begin(in_buffer), end(in_buffer), begin(out_buffer),</span></span>
<span class="line"><span>          [](int x) { return x*2; });</span></span></code></pre></div><p>現在我們的內核分發看起來像提供了一個執行策略的 <code>std::transform</code> 調用。我們傳遞的閉包會被編譯並在設備上執行，而不需要我們做其它更加複雜的設置。</p><p>當然，除了 <code>transform</code> 你可以做更多。開發的時候，SYCL 並行 STL 支持以下算法：</p><ul><li><code>sort</code></li><li><code>transform</code></li><li><code>for_each</code></li><li><code>for_each_n</code></li><li><code>count_if</code></li><li><code>reduce</code></li><li><code>inner_product</code></li><li><code>transform_reduce</code></li></ul>`,38)),p("p",null,[s[22]||(s[22]=n("這就是這篇短文需要介紹的東西。如果你想和 SYCL 的開發保持同步，那就要看 ",-1)),l(a,{href:"http://sycl.tech/"},{default:e(()=>[...s[17]||(s[17]=[n("sycl.tech",-1)])]),_:1}),s[23]||(s[23]=n("。最近重要的開發就是移植 ",-1)),l(a,{href:"https://github.com/ville-k/sycl_starter"},{default:e(()=>[...s[18]||(s[18]=[n("Eigen",-1)])]),_:1}),s[24]||(s[24]=n(" 和 ",-1)),l(a,{href:"http://deep-beta.co.uk/setting-up-tensorflow-with-opencl-using-sycl/"},{default:e(()=>[...s[19]||(s[19]=[n("Tensorflow",-1)])]),_:1}),s[25]||(s[25]=n(" 到 SYCL ，為 OpenCL 設備帶來引入關注的人工智能編程。對我個人而言，我很高興看到高級編程模型可以用於異構程序自動優化，以及它們是怎樣支持類似 ",-1)),l(a,{href:"https://github.com/STEllAR-GROUP/hpx"},{default:e(()=>[...s[20]||(s[20]=[n("HPX",-1)])]),_:1}),s[26]||(s[26]=n(" 或 ",-1)),l(a,{href:"https://github.com/skelcl/skelcl"},{default:e(()=>[...s[21]||(s[21]=[n("SkelCL",-1)])]),_:1}),s[27]||(s[27]=n(" 等更高級的技術。",-1))]),s[44]||(s[44]=p("hr",null,null,-1)),p("p",null,[s[29]||(s[29]=n("via: ",-1)),l(a,{href:"https://blog.tartanllama.xyz/c++/2017/05/19/sycl/"},{default:e(()=>[...s[28]||(s[28]=[n("https://blog.tartanllama.xyz/c++/2017/05/19/sycl/",-1)])]),_:1})]),p("p",null,[s[33]||(s[33]=n("作者：",-1)),l(a,{href:"https://www.twitter.com/TartanLlama"},{default:e(()=>[...s[30]||(s[30]=[n("TartanLlama",-1)])]),_:1}),s[34]||(s[34]=n(" 譯者：",-1)),l(a,{href:"https://github.com/ictlyh"},{default:e(()=>[...s[31]||(s[31]=[n("ictlyh",-1)])]),_:1}),s[35]||(s[35]=n(" 校對：",-1)),l(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[32]||(s[32]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[38]||(s[38]=n("本文由 ",-1)),l(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[36]||(s[36]=[n("LCTT",-1)])]),_:1}),s[39]||(s[39]=n(" 原創編譯，",-1)),l(a,{href:"https://linux.cn/"},{default:e(()=>[...s[37]||(s[37]=[n("Linux中國",-1)])]),_:1}),s[40]||(s[40]=n(" 榮譽推出",-1))])])}const _=t(d,[["render",u]]);export{m as __pageData,_ as default};
