import{_ as l,a0 as t,w as o,s as r,I as p,x as n,a1 as e,A as i,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"Python 中最快解壓 zip 文件的方法 | LCTT x X-CMD","titleTemplate":false,"description":"Python 中最快解壓 zip 文件的方法 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Python 中最快解壓 zip 文件的方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Python 中最快解壓 zip 文件的方法 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20180131 Fastest way to unzip a zip file in Python","title":"Python 中最快解壓 zip 文件的方法","tag":"201802","desc":""},"relativePath":"201802/20180131 Fastest way to unzip a zip file in Python.md","filePath":"[post].md"}'),d={name:"201802/20180131 Fastest way to unzip a zip file in Python.md"};function f(u,s,h,b,m,g){const a=t("Link");return o(),r("div",null,[s[17]||(s[17]=p("h1",{id:"python-中最快解壓-zip-文件的方法",tabindex:"-1"},[n("Python 中最快解壓 zip 文件的方法 "),p("a",{class:"header-anchor",href:"#python-中最快解壓-zip-文件的方法","aria-label":"Permalink to “Python 中最快解壓 zip 文件的方法”"},"​")],-1)),p("p",null,[s[1]||(s[1]=n("假設現在的上下文（LCTT 譯註：context，計算機術語，此處意為業務情景）是這樣的：一個 zip 文件被上傳到一個",-1)),e(a,{href:"https://symbols.mozilla.org"},{default:i(()=>[...s[0]||(s[0]=[n("Web 服務",-1)])]),_:1}),s[2]||(s[2]=n("中，然後 Python 需要解壓這個 zip 文件然後分析和處理其中的每個文件。這個特殊的應用查看每個文件各自的名稱和大小，並和已經上傳到 AWS S3 上的文件進行比較，如果文件（和 AWS S3 上的相比）有所不同或者文件本身更新，那麼就將它上傳到 AWS S3。",-1))]),p("p",null,[e(a,{href:"https://cdn-2916.kxcdn.com/cache/e6/dc/e6dc20acd37d94239edbbc0727721e4a.png"},{default:i(()=>[...s[3]||(s[3]=[p("img",{src:"https://cdn-2916.kxcdn.com/cache/b7/bb/b7bbcf60347a5fa91420f71bbeed6d37.png",alt:"Uploads today"},null,-1)])]),_:1})]),s[18]||(s[18]=c(`<p>挑戰在於這些 zip 文件太大了。它們的平均大小是 560MB 但是其中一些大於 1GB。這些文件中大多數是文本文件，但是其中同樣也有一些巨大的二進制文件。不同尋常的是，每個 zip 文件包含 100 個文件但是其中 1-3 個文件卻佔據了多達 95% 的 zip 文件大小。</p><p>最開始我嘗試在內存中解壓文件，並且每次只處理一個文件。在各種內存爆炸和 EC2 耗盡內存的情況下，這個方法壯烈失敗了。我覺得這個原因是這樣的。最開始你有 1GB 文件在內存中，然後你現在解壓每個文件，在內存中大約就要佔用 2-3GB。所以，在很多次測試之後，解決方案是將這些 zip 文件複製到磁盤上（在臨時目錄 <code>/tmp</code> 中），然後遍歷這些文件。這次情況好多了但是我仍然注意到了整個解壓過程花費了巨量的時間。<strong>是否可能有方法優化呢？</strong></p><h3 id="原始函數" tabindex="-1">原始函數 <a class="header-anchor" href="#原始函數" aria-label="Permalink to “原始函數”">​</a></h3><p>首先是下面這些模擬對 zip 文件中文件實際操作的普通函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def _count_file(fn):</span></span>
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
<span class="line"><span> return total</span></span></code></pre></div><p>這裏是可能最簡單的另一個函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def f1(fn, dest):</span></span>
<span class="line"><span> with open(fn, &#39;rb&#39;) as f:</span></span>
<span class="line"><span>   zf = zipfile.ZipFile(f)</span></span>
<span class="line"><span>   zf.extractall(dest)</span></span>
<span class="line"><span></span></span>
<span class="line"><span> total = 0</span></span>
<span class="line"><span> for root, dirs, files in os.walk(dest):</span></span>
<span class="line"><span>   for file_ in files:</span></span>
<span class="line"><span>     fn = os.path.join(root, file_)</span></span>
<span class="line"><span>     total += _count_file(fn)</span></span>
<span class="line"><span> return total</span></span></code></pre></div><p>如果我更仔細地分析一下，我將會發現這個函數花費時間 40% 運行 <code>extractall</code>，60% 的時間在遍歷各個文件並讀取其長度。</p><h3 id="第一步嘗試" tabindex="-1">第一步嘗試 <a class="header-anchor" href="#第一步嘗試" aria-label="Permalink to “第一步嘗試”">​</a></h3><p>我的第一步嘗試是使用線程。先創建一個 <code>zipfile.ZipFile</code> 的實例，展開其中的每個文件名，然後為每一個文件開始一個線程。每個線程都給它一個函數來做“實質工作”（在這個基準測試中，就是遍歷每個文件然後獲取它的名稱）。實際業務中的函數進行的工作是複雜的 S3、Redis 和 PostgreSQL 操作，但是在我的基準測試中我只需要製作一個可以找出文件長度的函數就好了。線程池函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def f2(fn, dest):</span></span>
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
<span class="line"><span>    return total</span></span></code></pre></div><p><strong>結果：加速 ~10%</strong></p><h3 id="第二步嘗試" tabindex="-1">第二步嘗試 <a class="header-anchor" href="#第二步嘗試" aria-label="Permalink to “第二步嘗試”">​</a></h3><p>所以可能是 GIL（LCTT 譯註：Global Interpreter Lock，一種全局鎖，CPython 中的一個概念）阻礙了我。最自然的想法是嘗試使用多線程在多個 CPU 上分配工作。但是這樣做有缺點，那就是你不能傳遞一個非可 pickle 序列化的對象（LCTT 譯註：意為只有可 pickle 序列化的對象可以被傳遞），所以你只能發送文件名到之後的函數中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def unzip_member_f3(zip_filepath, filename, dest):</span></span>
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
<span class="line"><span>    return total</span></span></code></pre></div><p><strong>結果: 加速 ~300%</strong></p><h3 id="這是作弊" tabindex="-1">這是作弊 <a class="header-anchor" href="#這是作弊" aria-label="Permalink to “這是作弊”">​</a></h3><p>使用處理器池的問題是這樣需要存儲在磁盤上的原始 <code>.zip</code> 文件。所以為了在我的 web 服務器上使用這個解決方案，我首先得要將內存中的 zip 文件保存到磁盤，然後調用這個函數。這樣做的代價我不是很清楚但是應該不低。</p><p>好吧，再翻翻看又沒有損失。可能，解壓過程加速到足以彌補這樣做的損失了吧。</p><p>但是一定記住！這個優化取決於使用所有可用的 CPU。如果一些其它的 CPU 需要執行在 <code>gunicorn</code> 中的其它事務呢？這時，這些其它進程必須等待，直到有 CPU 可用。由於在這個服務器上有其他的事務正在進行，我不是很確定我想要在進程中接管所有其他 CPU。</p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>一步一步地做這個任務的這個過程感覺挺好的。你被限制在一個 CPU 上但是表現仍然特別好。同樣地，一定要看看在<code>f1</code> 和 <code>f2</code> 兩段代碼之間的不同之處！利用 <code>concurrent.futures</code> 池類你可以獲取到允許使用的 CPU 的個數，但是這樣做同樣給人感覺不是很好。如果你在虛擬環境中獲取的個數是錯的呢？或者可用的個數太低以致無法從負載分配獲取好處並且現在你僅僅是為了移動負載而支付營運開支呢？</p><p>我將會繼續使用 <code>zipfile.ZipFile(file_buffer).extractall(temp_dir)</code>。這個工作這樣做已經足夠好了。</p><h3 id="想試試手嗎" tabindex="-1">想試試手嗎？ <a class="header-anchor" href="#想試試手嗎" aria-label="Permalink to “想試試手嗎？”">​</a></h3><p>我使用一個 <code>c5.4xlarge</code> EC2 服務器來進行我的基準測試。文件可以從此處下載：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>wget https://www.peterbe.com/unzip-in-parallel/hack.unzip-in-parallel.py</span></span>
<span class="line"><span>wget https://www.peterbe.com/unzip-in-parallel/symbols-2017-11-27T14_15_30.zip</span></span></code></pre></div><p>這裏的 <code>.zip</code> 文件有 34MB。和在服務器上的相比已經小了很多。</p><p><code>hack.unzip-in-parallel.py</code> 文件裏是一團糟。它包含了大量可怕的修正和醜陋的代碼，但是這只是一個開始。</p><hr>`,29)),p("p",null,[s[5]||(s[5]=n("via: ",-1)),e(a,{href:"https://www.peterbe.com/plog/fastest-way-to-unzip-a-zip-file-in-python"},{default:i(()=>[...s[4]||(s[4]=[n("https://www.peterbe.com/plog/fastest-way-to-unzip-a-zip-file-in-python",-1)])]),_:1})]),p("p",null,[s[9]||(s[9]=n("作者：",-1)),e(a,{href:"https://www.peterbe.com/"},{default:i(()=>[...s[6]||(s[6]=[n("Peterbe",-1)])]),_:1}),s[10]||(s[10]=n(" 譯者：",-1)),e(a,{href:"https://github.com/leemeans"},{default:i(()=>[...s[7]||(s[7]=[n("Leemeans",-1)])]),_:1}),s[11]||(s[11]=n(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[8]||(s[8]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[14]||(s[14]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[12]||(s[12]=[n("LCTT",-1)])]),_:1}),s[15]||(s[15]=n(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:i(()=>[...s[13]||(s[13]=[n("Linux中國",-1)])]),_:1}),s[16]||(s[16]=n(" 榮譽推出",-1))])])}const x=l(d,[["render",f]]);export{y as __pageData,x as default};
