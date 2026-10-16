import{_ as t,a0 as l,w as o,s as c,ao as r,I as p,x as n,a1 as e,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"編寫 android 測試單元該做的和不該做的事 | LCTT x X-CMD","titleTemplate":false,"description":"編寫 android 測試單元該做的和不該做的事 | LCTT (201702) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"編寫 android 測試單元該做的和不該做的事 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"編寫 android 測試單元該做的和不該做的事 | LCTT (201702) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201702/20161227 The Dos and Donts of Writing Test cases in Android","title":"編寫 android 測試單元該做的和不該做的事","tag":"201702","desc":""},"relativePath":"201702/20161227 The Dos and Donts of Writing Test cases in Android.md","filePath":"[post].md"}'),d={name:"201702/20161227 The Dos and Donts of Writing Test cases in Android.md"};function h(u,s,g,w,y,k){const a=l("Link");return o(),c("div",null,[s[18]||(s[18]=r(`<h1 id="編寫-android-測試單元該做的和不該做的事" tabindex="-1">編寫 android 測試單元該做的和不該做的事 <a class="header-anchor" href="#編寫-android-測試單元該做的和不該做的事" aria-label="Permalink to “編寫 android 測試單元該做的和不該做的事”">​</a></h1><p>在本文中, 我將根據我的實際經驗，為大家闡述一個編寫測試用例的最佳實踐。在本文中我將使用 Espresso 編碼, 但是它們可以用到單元測試和儀器測試（instrumentation test）當中。基於以上目的，我們來研究一個新聞程序。</p><blockquote><p>以下內容純屬虛構，如有雷同純屬巧合 😛</p></blockquote><p>一個新聞 APP 應該會有以下這些 activity。</p><ul><li>語言選擇 - 當用户第一次打開軟件, 他必須至少選擇一種語言。選擇後，選項保存在共享偏好中，用户跳轉到新聞列表 activity。</li><li>新聞列表 - 當用户來到新聞列表 activity，將發送一個包含語言參數的請求到服務器，並將服務器返回的內容顯示在 recycler view 上（包含有新聞列表的 id， <em>news_list</em>）。 如果共享偏好中未存語言參數，或者服務器沒有返回一個成功消息, 就會彈出一個錯誤對話框並且 recycler view 將不可見。如果用户只選擇了一種語言，新聞列表 activity 有個 “Change your Language” 的按鈕，或者如果用户選擇多種語言，則按鈕為 “Change your Languages” 。 （我對天發誓這是一個虛構的 APP 軟件）</li><li>新聞細節 - 如同名字所述, 當用户點選新聞列表項時將啓動這個 activity。</li></ul><p>這個 APP 功能已經足夠,，讓我們深入研究下為新聞列表 activity 編寫的測試用例。 這是我第一次寫的代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/*</span></span>
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
<span class="line"><span> ?}</span></span></code></pre></div><h4 id="仔細想想測試什麼" tabindex="-1">仔細想想測試什麼 <a class="header-anchor" href="#仔細想想測試什麼" aria-label="Permalink to “仔細想想測試什麼”">​</a></h4><p>在第一個測試用例 <code>testClickOnAnyNewsItem()</code>， 如果服務器沒有返回成功信息，測試用例將會返回失敗，因為 recycler view 是不可見的。但是這個測試用例的目的並非如此。 <strong>不管該用例為 PASS 還是 FAIL，它的最低要求是 recycler view 總是可見的，</strong> 如果因某種原因，recycler view 不可見，那麼測試用例不應視為 FAILED。正確的測試代碼應該像下面這個樣子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> /*</span></span>
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
<span class="line"><span>    //在這裏我們確信，news_list的 recyclerview 對用户是可見的。</span></span>
<span class="line"><span>    onView(allOf(withId(R.id.news_list), isDisplayed())).perform(RecyclerViewActions</span></span>
<span class="line"><span>        .actionOnItemAtPosition(1, click()));</span></span>
<span class="line"><span>    intended(hasComponent(NewsDetailsActivity.class.getName()));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="一個測試用例本身應該是完整的" tabindex="-1">一個測試用例本身應該是完整的 <a class="header-anchor" href="#一個測試用例本身應該是完整的" aria-label="Permalink to “一個測試用例本身應該是完整的”">​</a></h4><p>當我開始測試, 我通常按如下順序測試 activity:</p><ul><li>語言選擇</li><li>新聞列表</li><li>新聞細節</li></ul><p>因為我首先測試語言選擇 activity，在測試 NewsList activity 之前，總有一種語言已經是選擇好了的。但是當我先測試新聞列表 activity 時，測試用例開始返回錯誤信息。原因很簡單 - 沒有選擇語言，recycler view 不會顯示。<strong>注意, 測試用例的執行順序不能影響測試結果。</strong> 因此在運行測試用例之前, 語言選項必須是保存在共享偏好中的。在本例中，測試用例獨立於語言選擇 activity 的測試。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@Rule</span></span>
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
<span class="line"><span> ?}</span></span></code></pre></div><h4 id="在測試用例中避免使用條件代碼" tabindex="-1">在測試用例中避免使用條件代碼 <a class="header-anchor" href="#在測試用例中避免使用條件代碼" aria-label="Permalink to “在測試用例中避免使用條件代碼”">​</a></h4><p>現在在第二個測試用例 <code>testChangeLanguageFeature()</code> 中，我們獲取到用户選擇語言的個數，基於這個數目，我們寫了 if-else 條件來進行測試。 但是 if-else 條件應該寫在你的代碼當中，而不是測試代碼裏。每一個條件應該單獨測試。 因此，在本例中，不是隻寫一條測試用例，而是要寫如下兩個測試用例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
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
<span class="line"><span>  }</span></span></code></pre></div><h4 id="測試用例應該獨立於外部因素" tabindex="-1">測試用例應該獨立於外部因素 <a class="header-anchor" href="#測試用例應該獨立於外部因素" aria-label="Permalink to “測試用例應該獨立於外部因素”">​</a></h4><p>在大多數應用中，我們與外部網絡或者資料庫進行交互。一個測試用例運行時可以向服務器發送一個請求，並獲取成功或失敗的返回信息。但是不能因從服務器獲取到失敗信息，就認為測試用例沒有通過。這樣想這個問題 - 如果測試用例失敗，然後我們修改客户端代碼，以便測試用例通過。 但是在本例中, 我們要在客户端進行任何更改嗎？- <strong>NO</strong>。</p><p>但是你應該也無法完全避免要測試網絡請求和響應。由於服務器是一個外部代理，我們可以設想一個場景，發送一些可能導致程序崩潰的錯誤響應。因此，你寫的測試用例應該覆蓋所有可能來自服務器的響應，甚至包括服務器決不會發出的響應。這樣可以覆蓋所有代碼，並能保證應用可以處理所有響應，而不會崩潰。</p><blockquote><p>正確的編寫測試用例與編寫這些測試代碼同等重要。</p></blockquote>`,22)),p("p",null,[s[2]||(s[2]=n("感謝你閲讀此文章。希望對測試用例寫的更好有所幫助。你可以在 ",-1)),e(a,{href:"http://www.linkedin.com/in/anshul-jain-b7082573"},{default:i(()=>[...s[0]||(s[0]=[n("LinkedIn",-1)])]),_:1}),s[3]||(s[3]=n(" 上聯繫我。還可以",-1)),e(a,{href:"https://medium.com/@anshuljain"},{default:i(()=>[...s[1]||(s[1]=[n("在這裏",-1)])]),_:1}),s[4]||(s[4]=n("閲讀我的其他文章。",-1))]),s[19]||(s[19]=p("p",null,"獲取更多資訊請關注我們, 我們發新文章時您將獲得通知。",-1)),s[20]||(s[20]=p("hr",null,null,-1)),p("p",null,[s[6]||(s[6]=n("via: ",-1)),e(a,{href:"https://blog.mindorks.com/the-dos-and-don-ts-of-writing-test-cases-in-android-70f1b5dab3e1#.lfilq9k5e"},{default:i(()=>[...s[5]||(s[5]=[n("https://blog.mindorks.com/the-dos-and-don-ts-of-writing-test-cases-in-android-70f1b5dab3e1#.lfilq9k5e",-1)])]),_:1})]),p("p",null,[s[10]||(s[10]=n("作者：",-1)),e(a,{href:"https://blog.mindorks.com/@anshuljain?source=post_header_lockup"},{default:i(()=>[...s[7]||(s[7]=[n("Anshul Jain",-1)])]),_:1}),s[11]||(s[11]=n(" 譯者：",-1)),e(a,{href:"https://github.com/kokialoves"},{default:i(()=>[...s[8]||(s[8]=[n("kokialoves",-1)])]),_:1}),s[12]||(s[12]=n(" 校對：",-1)),e(a,{href:"https://github.com/jasminepeng"},{default:i(()=>[...s[9]||(s[9]=[n("jasminepeng",-1)])]),_:1})]),p("p",null,[s[15]||(s[15]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:i(()=>[...s[14]||(s[14]=[n("Linux中國",-1)])]),_:1}),s[17]||(s[17]=n(" 榮譽推出",-1))])])}const b=t(d,[["render",h]]);export{v as __pageData,b as default};
