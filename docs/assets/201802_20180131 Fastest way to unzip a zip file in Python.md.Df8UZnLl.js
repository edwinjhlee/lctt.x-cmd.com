import{_ as l,a0 as t,w as o,s as r,I as p,x as n,a1 as e,A as i,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"Python 中最快解压 zip 文件的方法 | LCTT x X-CMD","titleTemplate":false,"description":"Python 中最快解压 zip 文件的方法 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Python 中最快解压 zip 文件的方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Python 中最快解压 zip 文件的方法 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20180131 Fastest way to unzip a zip file in Python","title":"Python 中最快解压 zip 文件的方法","tag":"201802","desc":""},"relativePath":"201802/20180131 Fastest way to unzip a zip file in Python.md","filePath":"[post].md"}'),d={name:"201802/20180131 Fastest way to unzip a zip file in Python.md"};function f(u,s,h,b,m,g){const a=t("Link");return o(),r("div",null,[s[17]||(s[17]=p("h1",{id:"python-中最快解压-zip-文件的方法",tabindex:"-1"},[n("Python 中最快解压 zip 文件的方法 "),p("a",{class:"header-anchor",href:"#python-中最快解压-zip-文件的方法","aria-label":"Permalink to “Python 中最快解压 zip 文件的方法”"},"​")],-1)),p("p",null,[s[1]||(s[1]=n("假设现在的上下文（LCTT 译注：context，计算机术语，此处意为业务情景）是这样的：一个 zip 文件被上传到一个",-1)),e(a,{href:"https://symbols.mozilla.org"},{default:i(()=>[...s[0]||(s[0]=[n("Web 服务",-1)])]),_:1}),s[2]||(s[2]=n("中，然后 Python 需要解压这个 zip 文件然后分析和处理其中的每个文件。这个特殊的应用查看每个文件各自的名称和大小，并和已经上传到 AWS S3 上的文件进行比较，如果文件（和 AWS S3 上的相比）有所不同或者文件本身更新，那么就将它上传到 AWS S3。",-1))]),p("p",null,[e(a,{href:"https://cdn-2916.kxcdn.com/cache/e6/dc/e6dc20acd37d94239edbbc0727721e4a.png"},{default:i(()=>[...s[3]||(s[3]=[p("img",{src:"https://cdn-2916.kxcdn.com/cache/b7/bb/b7bbcf60347a5fa91420f71bbeed6d37.png",alt:"Uploads today"},null,-1)])]),_:1})]),s[18]||(s[18]=c(`<p>挑战在于这些 zip 文件太大了。它们的平均大小是 560MB 但是其中一些大于 1GB。这些文件中大多数是文本文件，但是其中同样也有一些巨大的二进制文件。不同寻常的是，每个 zip 文件包含 100 个文件但是其中 1-3 个文件却占据了多达 95% 的 zip 文件大小。</p><p>最开始我尝试在内存中解压文件，并且每次只处理一个文件。在各种内存爆炸和 EC2 耗尽内存的情况下，这个方法壮烈失败了。我觉得这个原因是这样的。最开始你有 1GB 文件在内存中，然后你现在解压每个文件，在内存中大约就要占用 2-3GB。所以，在很多次测试之后，解决方案是将这些 zip 文件复制到磁盘上（在临时目录 <code>/tmp</code> 中），然后遍历这些文件。这次情况好多了但是我仍然注意到了整个解压过程花费了巨量的时间。<strong>是否可能有方法优化呢？</strong></p><h3 id="原始函数" tabindex="-1">原始函数 <a class="header-anchor" href="#原始函数" aria-label="Permalink to “原始函数”">​</a></h3><p>首先是下面这些模拟对 zip 文件中文件实际操作的普通函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def _count_file(fn):</span></span>
<span class="line"><span> with open(fn, &#39;rb&#39;) as f:</span></span>
<span class="line"><span>   return _count_file_object(f)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def _count_file_object(f):</span></span>
<span class="line"><span> # Note that this iterates on &#39;f&#39;.</span></span>
<span class="line"><span> # You *could* do &#39;return len(f.read())&#39;</span></span>
<span class="line"><span> # which would be faster but potentially memory</span></span>
<span class="line"><span> # inefficient and unrealistic in terms of this</span></span>
<span class="line"><span> # benchmark experiment.</span></span>
<span class="line"><span> total = 0</span></span>
<span class="line"><span> for line in f:</span></span>
<span class="line"><span>   total += len(line)</span></span>
<span class="line"><span> return total</span></span></code></pre></div><p>这里是可能最简单的另一个函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def f1(fn, dest):</span></span>
<span class="line"><span> with open(fn, &#39;rb&#39;) as f:</span></span>
<span class="line"><span>   zf = zipfile.ZipFile(f)</span></span>
<span class="line"><span>   zf.extractall(dest)</span></span>
<span class="line"><span></span></span>
<span class="line"><span> total = 0</span></span>
<span class="line"><span> for root, dirs, files in os.walk(dest):</span></span>
<span class="line"><span>   for file_ in files:</span></span>
<span class="line"><span>     fn = os.path.join(root, file_)</span></span>
<span class="line"><span>     total += _count_file(fn)</span></span>
<span class="line"><span> return total</span></span></code></pre></div><p>如果我更仔细地分析一下，我将会发现这个函数花费时间 40% 运行 <code>extractall</code>，60% 的时间在遍历各个文件并读取其长度。</p><h3 id="第一步尝试" tabindex="-1">第一步尝试 <a class="header-anchor" href="#第一步尝试" aria-label="Permalink to “第一步尝试”">​</a></h3><p>我的第一步尝试是使用线程。先创建一个 <code>zipfile.ZipFile</code> 的实例，展开其中的每个文件名，然后为每一个文件开始一个线程。每个线程都给它一个函数来做“实质工作”（在这个基准测试中，就是遍历每个文件然后获取它的名称）。实际业务中的函数进行的工作是复杂的 S3、Redis 和 PostgreSQL 操作，但是在我的基准测试中我只需要制作一个可以找出文件长度的函数就好了。线程池函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def f2(fn, dest):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def unzip_member(zf, member, dest):</span></span>
<span class="line"><span>        zf.extract(member, dest)</span></span>
<span class="line"><span>        fn = os.path.join(dest, member.filename)</span></span>
<span class="line"><span>        return _count_file(fn)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    with open(fn, &#39;rb&#39;) as f:</span></span>
<span class="line"><span>        zf = zipfile.ZipFile(f)</span></span>
<span class="line"><span>        futures = []</span></span>
<span class="line"><span>        with concurrent.futures.ThreadPoolExecutor() as executor:</span></span>
<span class="line"><span>            for member in zf.infolist():</span></span>
<span class="line"><span>                futures.append(</span></span>
<span class="line"><span>                    executor.submit(</span></span>
<span class="line"><span>                        unzip_member,</span></span>
<span class="line"><span>                        zf,</span></span>
<span class="line"><span>                        member,</span></span>
<span class="line"><span>                        dest,</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span>            total = 0</span></span>
<span class="line"><span>            for future in concurrent.futures.as_completed(futures):</span></span>
<span class="line"><span>                total += future.result()</span></span>
<span class="line"><span>    return total</span></span></code></pre></div><p><strong>结果：加速 ~10%</strong></p><h3 id="第二步尝试" tabindex="-1">第二步尝试 <a class="header-anchor" href="#第二步尝试" aria-label="Permalink to “第二步尝试”">​</a></h3><p>所以可能是 GIL（LCTT 译注：Global Interpreter Lock，一种全局锁，CPython 中的一个概念）阻碍了我。最自然的想法是尝试使用多线程在多个 CPU 上分配工作。但是这样做有缺点，那就是你不能传递一个非可 pickle 序列化的对象（LCTT 译注：意为只有可 pickle 序列化的对象可以被传递），所以你只能发送文件名到之后的函数中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def unzip_member_f3(zip_filepath, filename, dest):</span></span>
<span class="line"><span>    with open(zip_filepath, &#39;rb&#39;) as f:</span></span>
<span class="line"><span>        zf = zipfile.ZipFile(f)</span></span>
<span class="line"><span>        zf.extract(filename, dest)</span></span>
<span class="line"><span>    fn = os.path.join(dest, filename)</span></span>
<span class="line"><span>    return _count_file(fn)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def f3(fn, dest):</span></span>
<span class="line"><span>    with open(fn, &#39;rb&#39;) as f:</span></span>
<span class="line"><span>        zf = zipfile.ZipFile(f)</span></span>
<span class="line"><span>        futures = []</span></span>
<span class="line"><span>        with concurrent.futures.ProcessPoolExecutor() as executor:</span></span>
<span class="line"><span>            for member in zf.infolist():</span></span>
<span class="line"><span>                futures.append(</span></span>
<span class="line"><span>                    executor.submit(</span></span>
<span class="line"><span>                        unzip_member_f3,</span></span>
<span class="line"><span>                        fn,</span></span>
<span class="line"><span>                        member.filename,</span></span>
<span class="line"><span>                        dest,</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span>            total = 0</span></span>
<span class="line"><span>            for future in concurrent.futures.as_completed(futures):</span></span>
<span class="line"><span>                total += future.result()</span></span>
<span class="line"><span>    return total</span></span></code></pre></div><p><strong>结果: 加速 ~300%</strong></p><h3 id="这是作弊" tabindex="-1">这是作弊 <a class="header-anchor" href="#这是作弊" aria-label="Permalink to “这是作弊”">​</a></h3><p>使用处理器池的问题是这样需要存储在磁盘上的原始 <code>.zip</code> 文件。所以为了在我的 web 服务器上使用这个解决方案，我首先得要将内存中的 zip 文件保存到磁盘，然后调用这个函数。这样做的代价我不是很清楚但是应该不低。</p><p>好吧，再翻翻看又没有损失。可能，解压过程加速到足以弥补这样做的损失了吧。</p><p>但是一定记住！这个优化取决于使用所有可用的 CPU。如果一些其它的 CPU 需要执行在 <code>gunicorn</code> 中的其它事务呢？这时，这些其它进程必须等待，直到有 CPU 可用。由于在这个服务器上有其他的事务正在进行，我不是很确定我想要在进程中接管所有其他 CPU。</p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>一步一步地做这个任务的这个过程感觉挺好的。你被限制在一个 CPU 上但是表现仍然特别好。同样地，一定要看看在<code>f1</code> 和 <code>f2</code> 两段代码之间的不同之处！利用 <code>concurrent.futures</code> 池类你可以获取到允许使用的 CPU 的个数，但是这样做同样给人感觉不是很好。如果你在虚拟环境中获取的个数是错的呢？或者可用的个数太低以致无法从负载分配获取好处并且现在你仅仅是为了移动负载而支付营运开支呢？</p><p>我将会继续使用 <code>zipfile.ZipFile(file_buffer).extractall(temp_dir)</code>。这个工作这样做已经足够好了。</p><h3 id="想试试手吗" tabindex="-1">想试试手吗？ <a class="header-anchor" href="#想试试手吗" aria-label="Permalink to “想试试手吗？”">​</a></h3><p>我使用一个 <code>c5.4xlarge</code> EC2 服务器来进行我的基准测试。文件可以从此处下载：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>wget https://www.peterbe.com/unzip-in-parallel/hack.unzip-in-parallel.py</span></span>
<span class="line"><span>wget https://www.peterbe.com/unzip-in-parallel/symbols-2017-11-27T14_15_30.zip</span></span></code></pre></div><p>这里的 <code>.zip</code> 文件有 34MB。和在服务器上的相比已经小了很多。</p><p><code>hack.unzip-in-parallel.py</code> 文件里是一团糟。它包含了大量可怕的修正和丑陋的代码，但是这只是一个开始。</p><hr>`,29)),p("p",null,[s[5]||(s[5]=n("via: ",-1)),e(a,{href:"https://www.peterbe.com/plog/fastest-way-to-unzip-a-zip-file-in-python"},{default:i(()=>[...s[4]||(s[4]=[n("https://www.peterbe.com/plog/fastest-way-to-unzip-a-zip-file-in-python",-1)])]),_:1})]),p("p",null,[s[9]||(s[9]=n("作者：",-1)),e(a,{href:"https://www.peterbe.com/"},{default:i(()=>[...s[6]||(s[6]=[n("Peterbe",-1)])]),_:1}),s[10]||(s[10]=n(" 译者：",-1)),e(a,{href:"https://github.com/leemeans"},{default:i(()=>[...s[7]||(s[7]=[n("Leemeans",-1)])]),_:1}),s[11]||(s[11]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[8]||(s[8]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[14]||(s[14]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[12]||(s[12]=[n("LCTT",-1)])]),_:1}),s[15]||(s[15]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:i(()=>[...s[13]||(s[13]=[n("Linux中国",-1)])]),_:1}),s[16]||(s[16]=n(" 荣誉推出",-1))])])}const x=l(d,[["render",f]]);export{y as __pageData,x as default};
