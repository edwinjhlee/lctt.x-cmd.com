import{_ as t,a0 as l,w as o,s as c,ao as r,I as p,x as n,a1 as e,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"编写 android 测试单元该做的和不该做的事 | LCTT x X-CMD","titleTemplate":false,"description":"编写 android 测试单元该做的和不该做的事 | LCTT (201702) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"编写 android 测试单元该做的和不该做的事 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"编写 android 测试单元该做的和不该做的事 | LCTT (201702) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201702/20161227 The Dos and Donts of Writing Test cases in Android","title":"编写 android 测试单元该做的和不该做的事","tag":"201702","desc":""},"relativePath":"201702/20161227 The Dos and Donts of Writing Test cases in Android.md","filePath":"[post].md"}'),d={name:"201702/20161227 The Dos and Donts of Writing Test cases in Android.md"};function h(u,s,g,w,y,k){const a=l("Link");return o(),c("div",null,[s[18]||(s[18]=r(`<h1 id="编写-android-测试单元该做的和不该做的事" tabindex="-1">编写 android 测试单元该做的和不该做的事 <a class="header-anchor" href="#编写-android-测试单元该做的和不该做的事" aria-label="Permalink to “编写 android 测试单元该做的和不该做的事”">​</a></h1><p>在本文中, 我将根据我的实际经验，为大家阐述一个编写测试用例的最佳实践。在本文中我将使用 Espresso 编码, 但是它们可以用到单元测试和仪器测试（instrumentation test）当中。基于以上目的，我们来研究一个新闻程序。</p><blockquote><p>以下内容纯属虚构，如有雷同纯属巧合 😛</p></blockquote><p>一个新闻 APP 应该会有以下这些 activity。</p><ul><li>语言选择 - 当用户第一次打开软件, 他必须至少选择一种语言。选择后，选项保存在共享偏好中，用户跳转到新闻列表 activity。</li><li>新闻列表 - 当用户来到新闻列表 activity，将发送一个包含语言参数的请求到服务器，并将服务器返回的内容显示在 recycler view 上（包含有新闻列表的 id， <em>news_list</em>）。 如果共享偏好中未存语言参数，或者服务器没有返回一个成功消息, 就会弹出一个错误对话框并且 recycler view 将不可见。如果用户只选择了一种语言，新闻列表 activity 有个 “Change your Language” 的按钮，或者如果用户选择多种语言，则按钮为 “Change your Languages” 。 （我对天发誓这是一个虚构的 APP 软件）</li><li>新闻细节 - 如同名字所述, 当用户点选新闻列表项时将启动这个 activity。</li></ul><p>这个 APP 功能已经足够,，让我们深入研究下为新闻列表 activity 编写的测试用例。 这是我第一次写的代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/*</span></span>
<span class="line"><span>    Click on the first news item.</span></span>
<span class="line"><span>    It should open NewsDetailActivity</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testClickOnAnyNewsItem() {</span></span>
<span class="line"><span>        onView(allOf(withId(R.id.news_list), isDisplayed())).perform(RecyclerViewActions</span></span>
<span class="line"><span>                .actionOnItemAtPosition(1, click()));</span></span>
<span class="line"><span>        intended(hasComponent(NewsDetailsActivity.class.getName()));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * To test the correct text on the button</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  @Test</span></span>
<span class="line"><span>  public void testChangeLanguageFeature() {</span></span>
<span class="line"><span>    int count = UserPreferenceUtil.getSelectedLanguagesCount();</span></span>
<span class="line"><span>    if (count == 1) {</span></span>
<span class="line"><span>      onView(withText(&quot;Choose your Language&quot;)).check(matches(isDisplayed()));</span></span>
<span class="line"><span>    } else if (count &gt; 1) {</span></span>
<span class="line"><span>      onView(withText(&quot;Choose your Languages&quot;)).check(matches(isDisplayed()));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> ?}</span></span></code></pre></div><h4 id="仔细想想测试什么" tabindex="-1">仔细想想测试什么 <a class="header-anchor" href="#仔细想想测试什么" aria-label="Permalink to “仔细想想测试什么”">​</a></h4><p>在第一个测试用例 <code>testClickOnAnyNewsItem()</code>， 如果服务器没有返回成功信息，测试用例将会返回失败，因为 recycler view 是不可见的。但是这个测试用例的目的并非如此。 <strong>不管该用例为 PASS 还是 FAIL，它的最低要求是 recycler view 总是可见的，</strong> 如果因某种原因，recycler view 不可见，那么测试用例不应视为 FAILED。正确的测试代码应该像下面这个样子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> /*</span></span>
<span class="line"><span>  Click on any news item.</span></span>
<span class="line"><span>  It should open NewsDetailActivity</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  @Test</span></span>
<span class="line"><span>  public void testClickOnAnyNewsItem() {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>            /*To test this case, we need to have recyclerView present. If we don&#39;t have the</span></span>
<span class="line"><span>            recyclerview present either due to the presence of error_screen, then we should consider</span></span>
<span class="line"><span>            this test case successful. The test case should be unsuccesful only when we click on a</span></span>
<span class="line"><span>            news item and it doesn&#39;t open NewsDetail activity</span></span>
<span class="line"><span>            */</span></span>
<span class="line"><span>      ViewInteraction viewInteraction = onView(withId(R.id.news_list));</span></span>
<span class="line"><span>      viewInteraction.check(matches(isDisplayed()));</span></span>
<span class="line"><span>    } catch (NoMatchingViewException e) {</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    } catch (AssertionFailedError e) {</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //在这里我们确信，news_list的 recyclerview 对用户是可见的。</span></span>
<span class="line"><span>    onView(allOf(withId(R.id.news_list), isDisplayed())).perform(RecyclerViewActions</span></span>
<span class="line"><span>        .actionOnItemAtPosition(1, click()));</span></span>
<span class="line"><span>    intended(hasComponent(NewsDetailsActivity.class.getName()));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="一个测试用例本身应该是完整的" tabindex="-1">一个测试用例本身应该是完整的 <a class="header-anchor" href="#一个测试用例本身应该是完整的" aria-label="Permalink to “一个测试用例本身应该是完整的”">​</a></h4><p>当我开始测试, 我通常按如下顺序测试 activity:</p><ul><li>语言选择</li><li>新闻列表</li><li>新闻细节</li></ul><p>因为我首先测试语言选择 activity，在测试 NewsList activity 之前，总有一种语言已经是选择好了的。但是当我先测试新闻列表 activity 时，测试用例开始返回错误信息。原因很简单 - 没有选择语言，recycler view 不会显示。<strong>注意, 测试用例的执行顺序不能影响测试结果。</strong> 因此在运行测试用例之前, 语言选项必须是保存在共享偏好中的。在本例中，测试用例独立于语言选择 activity 的测试。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@Rule</span></span>
<span class="line"><span>  public ActivityTestRule activityTestRule =</span></span>
<span class="line"><span>      new ActivityTestRule(TopicsActivity.class, false, false);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  /*</span></span>
<span class="line"><span>  Click on any news item.</span></span>
<span class="line"><span>  It should open NewsDetailActivity</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  @Test</span></span>
<span class="line"><span>  public void testClickOnAnyNewsItem() {</span></span>
<span class="line"><span>    UserPreferenceUtil.saveUserPrimaryLanguage(&quot;english&quot;);</span></span>
<span class="line"><span>    Intent intent = new Intent();</span></span>
<span class="line"><span>    activityTestRule.launchActivity(intent);</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      ViewInteraction viewInteraction = onView(withId(R.id.news_list));</span></span>
<span class="line"><span>      viewInteraction.check(matches(isDisplayed()));</span></span>
<span class="line"><span>    } catch (NoMatchingViewException e) {</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    } catch (AssertionFailedError e) {</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    onView(allOf(withId(R.id.news_list), isDisplayed())).perform(RecyclerViewActions</span></span>
<span class="line"><span>        .actionOnItemAtPosition(1, click()));</span></span>
<span class="line"><span>    intended(hasComponent(NewsDetailsActivity.class.getName()));</span></span>
<span class="line"><span> ?}</span></span></code></pre></div><h4 id="在测试用例中避免使用条件代码" tabindex="-1">在测试用例中避免使用条件代码 <a class="header-anchor" href="#在测试用例中避免使用条件代码" aria-label="Permalink to “在测试用例中避免使用条件代码”">​</a></h4><p>现在在第二个测试用例 <code>testChangeLanguageFeature()</code> 中，我们获取到用户选择语言的个数，基于这个数目，我们写了 if-else 条件来进行测试。 但是 if-else 条件应该写在你的代码当中，而不是测试代码里。每一个条件应该单独测试。 因此，在本例中，不是只写一条测试用例，而是要写如下两个测试用例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
<span class="line"><span>   * To test the correct text on the button when only one language is selected.</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  @Test</span></span>
<span class="line"><span>  public void testChangeLanguageFeatureForSingeLanguage() {</span></span>
<span class="line"><span>    //Other initializations</span></span>
<span class="line"><span>    UserPreferenceUtil.saveSelectedLanguagesCount(1);</span></span>
<span class="line"><span>    Intent intent = new Intent();</span></span>
<span class="line"><span>    activityTestRule.launchActivity(intent);</span></span>
<span class="line"><span>      onView(withText(&quot;Choose your Language&quot;)).check(matches(isDisplayed()));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * To test the correct text on the button when more than one language is selected.</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  @Test</span></span>
<span class="line"><span>  public void testChangeLanguageFeatureForMultipleLanguages() {</span></span>
<span class="line"><span>    //Other initializations</span></span>
<span class="line"><span>    UserPreferenceUtil.saveSelectedLanguagesCount(5); //Write anything greater than 1.</span></span>
<span class="line"><span>    Intent intent = new Intent();</span></span>
<span class="line"><span>    activityTestRule.launchActivity(intent);</span></span>
<span class="line"><span>    onView(withText(&quot;Choose your Languages&quot;)).check(matches(isDisplayed()));</span></span>
<span class="line"><span>  }</span></span></code></pre></div><h4 id="测试用例应该独立于外部因素" tabindex="-1">测试用例应该独立于外部因素 <a class="header-anchor" href="#测试用例应该独立于外部因素" aria-label="Permalink to “测试用例应该独立于外部因素”">​</a></h4><p>在大多数应用中，我们与外部网络或者数据库进行交互。一个测试用例运行时可以向服务器发送一个请求，并获取成功或失败的返回信息。但是不能因从服务器获取到失败信息，就认为测试用例没有通过。这样想这个问题 - 如果测试用例失败，然后我们修改客户端代码，以便测试用例通过。 但是在本例中, 我们要在客户端进行任何更改吗？- <strong>NO</strong>。</p><p>但是你应该也无法完全避免要测试网络请求和响应。由于服务器是一个外部代理，我们可以设想一个场景，发送一些可能导致程序崩溃的错误响应。因此，你写的测试用例应该覆盖所有可能来自服务器的响应，甚至包括服务器决不会发出的响应。这样可以覆盖所有代码，并能保证应用可以处理所有响应，而不会崩溃。</p><blockquote><p>正确的编写测试用例与编写这些测试代码同等重要。</p></blockquote>`,22)),p("p",null,[s[2]||(s[2]=n("感谢你阅读此文章。希望对测试用例写的更好有所帮助。你可以在 ",-1)),e(a,{href:"http://www.linkedin.com/in/anshul-jain-b7082573"},{default:i(()=>[...s[0]||(s[0]=[n("LinkedIn",-1)])]),_:1}),s[3]||(s[3]=n(" 上联系我。还可以",-1)),e(a,{href:"https://medium.com/@anshuljain"},{default:i(()=>[...s[1]||(s[1]=[n("在这里",-1)])]),_:1}),s[4]||(s[4]=n("阅读我的其他文章。",-1))]),s[19]||(s[19]=p("p",null,"获取更多资讯请关注我们, 我们发新文章时您将获得通知。",-1)),s[20]||(s[20]=p("hr",null,null,-1)),p("p",null,[s[6]||(s[6]=n("via: ",-1)),e(a,{href:"https://blog.mindorks.com/the-dos-and-don-ts-of-writing-test-cases-in-android-70f1b5dab3e1#.lfilq9k5e"},{default:i(()=>[...s[5]||(s[5]=[n("https://blog.mindorks.com/the-dos-and-don-ts-of-writing-test-cases-in-android-70f1b5dab3e1#.lfilq9k5e",-1)])]),_:1})]),p("p",null,[s[10]||(s[10]=n("作者：",-1)),e(a,{href:"https://blog.mindorks.com/@anshuljain?source=post_header_lockup"},{default:i(()=>[...s[7]||(s[7]=[n("Anshul Jain",-1)])]),_:1}),s[11]||(s[11]=n(" 译者：",-1)),e(a,{href:"https://github.com/kokialoves"},{default:i(()=>[...s[8]||(s[8]=[n("kokialoves",-1)])]),_:1}),s[12]||(s[12]=n(" 校对：",-1)),e(a,{href:"https://github.com/jasminepeng"},{default:i(()=>[...s[9]||(s[9]=[n("jasminepeng",-1)])]),_:1})]),p("p",null,[s[15]||(s[15]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:i(()=>[...s[14]||(s[14]=[n("Linux中国",-1)])]),_:1}),s[17]||(s[17]=n(" 荣誉推出",-1))])])}const b=t(d,[["render",h]]);export{v as __pageData,b as default};
