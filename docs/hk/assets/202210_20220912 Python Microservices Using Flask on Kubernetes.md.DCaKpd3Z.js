import{_ as l,a0 as t,w as o,s as c,ao as r,I as i,x as a,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"在 Kubernetes 上使用 Flask 搭建 Python 微服務 | LCTT x X-CMD","titleTemplate":false,"description":"在 Kubernetes 上使用 Flask 搭建 Python 微服務 | LCTT (202210) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Kubernetes 上使用 Flask 搭建 Python 微服務 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Kubernetes 上使用 Flask 搭建 Python 微服務 | LCTT (202210) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202210/20220912 Python Microservices Using Flask on Kubernetes","title":"在 Kubernetes 上使用 Flask 搭建 Python 微服務","tag":"202210","desc":""},"relativePath":"202210/20220912 Python Microservices Using Flask on Kubernetes.md","filePath":"[post].md"}'),d={name:"202210/20220912 Python Microservices Using Flask on Kubernetes.md"};function h(u,s,g,k,b,f){const n=t("Link");return o(),c("div",null,[s[15]||(s[15]=r(`<h1 id="在-kubernetes-上使用-flask-搭建-python-微服務" tabindex="-1">在 Kubernetes 上使用 Flask 搭建 Python 微服務 <a class="header-anchor" href="#在-kubernetes-上使用-flask-搭建-python-微服務" aria-label="Permalink to “在 Kubernetes 上使用 Flask 搭建 Python 微服務”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202210/19/124429nmw0xmfz3x3mrrf2.jpg" alt=""></p><p><em>微服務遵循領域驅動設計（DDD），與開發平台無關。Python 微服務也不例外。Python3 的面向對象特性使得按照 DDD 對服務進行建模變得更加容易。本系列的第 10 部分演示瞭如何將用户管理系統的查找服務作為 Python 微服務部署在 Kubernetes 上。</em></p><p>微服務架構的強大之處在於它的多語言性。企業將其功能分解為一組微服務，每個團隊自由選擇一個平台。</p><p>我們的用户管理系統已經分解為四個微服務，分別是添加、查找、搜索和日誌服務。添加服務在 Java 平台上開發並部署在 Kubernetes 集羣上，以實現彈性和可擴展性。這並不意味着其餘的服務也要使用 Java 開發，我們可以自由選擇適合個人服務的平台。</p><p>讓我們選擇 Python 作為開發查找服務的平台。查找服務的模型已經設計好了（參考 2022 年 3 月份的文章），我們只需要將這個模型轉換為代碼和配置。</p><h3 id="pythonic-方法" tabindex="-1">Pythonic 方法 <a class="header-anchor" href="#pythonic-方法" aria-label="Permalink to “Pythonic 方法”">​</a></h3><p>Python 是一種通用編程語言，已經存在了大約 30 年。早期，它是自動化腳本的首選。然而，隨着 Django 和 Flask 等框架的出現，它的受歡迎程度越來越高，現在各種領域中都在應用它，如企業應用程序開發。數據科學和機器學習進一步推動了它的發展，Python 現在是三大編程語言之一。</p><p>許多人將 Python 的成功歸功於它容易編碼。這只是一部分原因。只要你的目標是開發小型腳本，Python 就像一個玩具，你會非常喜歡它。然而，當你進入嚴肅的大規模應用程序開發領域時，你將不得不處理大量的 <code>if</code> 和 <code>else</code>，Python 變得與任何其他平台一樣好或一樣壞。例如，採用一種面向對象的方法！許多 Python 開發人員甚至可能沒意識到 Python 支持類、繼承等功能。Python 確實支持成熟的面向對象開發，但是有它自己的方式 -- Pythonic！讓我們探索一下！</p><h3 id="領域模型" tabindex="-1">領域模型 <a class="header-anchor" href="#領域模型" aria-label="Permalink to “領域模型”">​</a></h3><p><code>AddService</code> 通過將數據保存到一個 MySQL 資料庫中來將用户添加到系統中。<code>FindService</code> 的目標是提供一個 REST API 按用户名查找用户。域模型如圖 1 所示。它主要由一些值對象組成，如 <code>User</code> 實體的<code>Name</code>、<code>PhoneNumber</code> 以及 <code>UserRepository</code>。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/08/Figure-1-The-domain-model-of-FindService-1.png" alt="圖 1: 查找服務的域模型"></p><p>讓我們從 <code>Name</code> 開始。由於它是一個值對象，因此必須在創建時進行驗證，並且必須保持不可變。基本結構如所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Name:</span></span>
<span class="line"><span>    value: str</span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        if self.value is None or len(self.value.strip()) &lt; 8 or len(self.value.strip()) &gt; 32:</span></span>
<span class="line"><span>            raise ValueError(&quot;Invalid Name&quot;)</span></span></code></pre></div><p>如你所見，<code>Name</code> 包含一個字符串類型的值。作為後期初始化的一部分，我們會驗證它。</p><p>Python 3.7 提供了 <code>@dataclass</code> 裝飾器，它提供了許多開箱即用的數據承載類的功能，如構造函數、比較運算符等。如下是裝飾後的 <code>Name</code> 類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from dataclasses import dataclass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@dataclass</span></span>
<span class="line"><span>class Name:</span></span>
<span class="line"><span>    value: str</span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        if self.value is None or len(self.value.strip()) &lt; 8 or len(self.value.strip()) &gt; 32:</span></span>
<span class="line"><span>            raise ValueError(&quot;Invalid Name&quot;)</span></span></code></pre></div><p>以下代碼可以創建一個 <code>Name</code> 對象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name = Name(&quot;Krishna&quot;)</span></span></code></pre></div><p><code>value</code> 屬性可以按照如下方式讀取或寫入：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name.value = &quot;Mohan&quot;</span></span>
<span class="line"><span>print(name.value)</span></span></code></pre></div><p>可以很容易地與另一個 <code>Name</code> 對象比較，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>other = Name(&quot;Mohan&quot;)</span></span>
<span class="line"><span>if name == other:</span></span>
<span class="line"><span>    print(&quot;same&quot;)</span></span></code></pre></div><p>如你所見，對象比較的是值而不是引用。這一切都是開箱即用的。我們還可以通過凍結對象使對象不可變。這是 <code>Name</code> 值對象的最終版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from dataclasses import dataclass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@dataclass(frozen=True)</span></span>
<span class="line"><span>class Name:</span></span>
<span class="line"><span>    value: str</span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        if self.value is None or len(self.value.strip()) &lt; 8 or len(self.value.strip()) &gt; 32:</span></span>
<span class="line"><span>            raise ValueError(&quot;Invalid Name&quot;)</span></span></code></pre></div><p><code>PhoneNumber</code> 也遵循類似的方法，因為它也是一個值對象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(frozen=True)</span></span>
<span class="line"><span>class PhoneNumber:</span></span>
<span class="line"><span>    value: int</span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        if self.value &lt; 9000000000:</span></span>
<span class="line"><span>            raise ValueError(&quot;Invalid Phone Number&quot;)</span></span></code></pre></div><p><code>User</code> 類是一個實體，不是一個值對象。換句話説，<code>User</code> 是可變的。以下是結構：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from dataclasses import dataclass</span></span>
<span class="line"><span>import datetime</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@dataclass</span></span>
<span class="line"><span>class User:</span></span>
<span class="line"><span>    _name: Name</span></span>
<span class="line"><span>    _phone: PhoneNumber</span></span>
<span class="line"><span>    _since: datetime.datetime</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        if self._name is None or self._phone is None:</span></span>
<span class="line"><span>            raise ValueError(&quot;Invalid user&quot;)</span></span>
<span class="line"><span>        if self._since is None:</span></span>
<span class="line"><span>            self.since = datetime.datetime.now()</span></span></code></pre></div><p>你能觀察到 <code>User</code> 並沒有凍結，因為我們希望它是可變的。但是，我們不希望所有屬性都是可變的。標識字段如 <code>_name</code> 和 <code>_since</code> 是希望不會修改的。那麼，這如何做到呢？</p><p>Python3 提供了所謂的描述符協議，它會幫助我們正確定義 getter 和 setter。讓我們使用 <code>@property</code> 裝飾器將 getter 添加到 <code>User</code> 的所有三個字段中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@property</span></span>
<span class="line"><span>def name(self) -&gt; Name:</span></span>
<span class="line"><span>    return self._name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@property</span></span>
<span class="line"><span>def phone(self) -&gt; PhoneNumber:</span></span>
<span class="line"><span>    return self._phone</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@property</span></span>
<span class="line"><span>def since(self) -&gt; datetime.datetime:</span></span>
<span class="line"><span>    return self._since</span></span></code></pre></div><p><code>phone</code> 字段的 setter 可以使用 <code>@&lt;字段&gt;.setter</code> 來裝飾：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@phone.setter</span></span>
<span class="line"><span>def phone(self, phone: PhoneNumber) -&gt; None:</span></span>
<span class="line"><span>    if phone is None:</span></span>
<span class="line"><span>        raise ValueError(&quot;Invalid phone&quot;)</span></span>
<span class="line"><span>    self._phone = phone</span></span></code></pre></div><p>通過重寫 <code>__str__()</code> 函數，也可以為 <code>User</code> 提供一個簡單的打印方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def __str__(self):</span></span>
<span class="line"><span>    return self.name.value + &quot; [&quot; + str(self.phone.value) + &quot;] since &quot; + str(self.since)</span></span></code></pre></div><p>這樣，域模型的實體和值對象就準備好了。創建異常類如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class UserNotFoundException(Exception):</span></span>
<span class="line"><span>    pass</span></span></code></pre></div><p>域模型現在只剩下 <code>UserRepository</code> 了。Python 提供了一個名為 <code>abc</code> 的有用模組來創建抽象方法和抽象類。因為 <code>UserRepository</code> 只是一個接口，所以我們可以使用 <code>abc</code> 模組。</p><p>任何繼承自 <code>abc.ABC</code> 的類都將變為抽象類，任何帶有 <code>@abc.abstractmethod</code> 裝飾器的函數都會變為一個抽象函數。下面是 <code>UserRepository</code> 的結構：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from abc import ABC, abstractmethod</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class UserRepository(ABC):</span></span>
<span class="line"><span>    @abstractmethod</span></span>
<span class="line"><span>    def fetch(self, name:Name) -&gt; User:</span></span>
<span class="line"><span>        pass</span></span></code></pre></div><p><code>UserRepository</code> 遵循倉儲模式。換句話説，它在 <code>User</code> 實體上提供適當的 CRUD 操作，而不會暴露底層數據存儲語義。在本例中，我們只需要 <code>fetch()</code> 操作，因為 <code>FindService</code> 只查找用户。</p><p>因為 <code>UserRepository</code> 是一個抽象類，我們不能從抽象類創建實例對象。創建對象必須依賴於一個具體類實現這個抽象類。數據層 <code>UserRepositoryImpl</code> 提供了 <code>UserRepository</code> 的具體實現：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class UserRepositoryImpl(UserRepository):</span></span>
<span class="line"><span>    def fetch(self, name:Name) -&gt; User:</span></span>
<span class="line"><span>        pass</span></span></code></pre></div><p>由於 <code>AddService</code> 將用户數據存儲在一個 MySQL 資料庫中，因此 <code>UserRepositoryImpl</code> 也必須連接到相同的資料庫去檢索數據。下面是連接到資料庫的代碼。注意，我們正在使用 MySQL 的連接庫。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from mysql.connector import connect, Error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class UserRepositoryImpl(UserRepository):</span></span>
<span class="line"><span>    def fetch(self, name:Name) -&gt; User:</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            with connect(</span></span>
<span class="line"><span>                    host=&quot;mysqldb&quot;,</span></span>
<span class="line"><span>                    user=&quot;root&quot;,</span></span>
<span class="line"><span>                    password=&quot;admin&quot;,</span></span>
<span class="line"><span>                    database=&quot;glarimy&quot;,</span></span>
<span class="line"><span>                ) as connection:</span></span>
<span class="line"><span>                with connection.cursor() as cursor:</span></span>
<span class="line"><span>                    cursor.execute(&quot;SELECT * FROM ums_users where name=%s&quot;, (name.value,))</span></span>
<span class="line"><span>                    row = cursor.fetchone()</span></span>
<span class="line"><span>                    if cursor.rowcount == -1:</span></span>
<span class="line"><span>                        raise UserNotFoundException()</span></span>
<span class="line"><span>                    else:</span></span>
<span class="line"><span>                        return User(Name(row[0]), PhoneNumber(row[1]), row[2])</span></span>
<span class="line"><span>        except Error as e:</span></span>
<span class="line"><span>            raise e</span></span></code></pre></div><p>在上面的片段中，我們使用用户 <code>root</code> / 密碼 <code>admin</code> 連接到一個名為 <code>mysqldb</code> 的資料庫服務器，使用名為 <code>glarimy</code> 的資料庫（模式）。在演示代碼中是可以包含這些信息的，但在生產中不建議這麼做，因為這會暴露敏感信息。</p><p><code>fetch()</code> 操作的邏輯非常直觀，它對 <code>ums_users</code> 表執行 SELECT 查詢。回想一下，<code>AddService</code> 正在將用户數據寫入同一個表中。如果 SELECT 查詢沒有返回記錄，<code>fetch()</code> 函數將拋出 <code>UserNotFoundException</code> 異常。否則，它會從記錄中構造 <code>User</code> 實體並將其返回給調用者。這沒有什麼特殊的。</p><h3 id="應用層" tabindex="-1">應用層 <a class="header-anchor" href="#應用層" aria-label="Permalink to “應用層”">​</a></h3><p>最終，我們需要創建應用層。此模型如圖 2 所示。它只包含兩個類：控制器和一個 DTO。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/08/Figure-2-The-application-layer-of-FindService.png" alt="圖 2: 添加服務的應用層"></p><p>眾所周知，一個 DTO 只是一個沒有任何業務邏輯的數據容器。它主要用於在 <code>FindService</code> 和外部之間傳輸數據。我們只是提供了在 REST 層中將 <code>UserRecord</code> 轉換為字典以便用於 JSON 傳輸：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class UserRecord:</span></span>
<span class="line"><span>    def toJSON(self):</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            &quot;name&quot;: self.name,</span></span>
<span class="line"><span>            &quot;phone&quot;: self.phone,</span></span>
<span class="line"><span>            &quot;since&quot;: self.since</span></span>
<span class="line"><span>        }</span></span></code></pre></div><p>控制器的工作是將 DTO 轉換為用於域服務的域對象，反之亦然。可以從 <code>find()</code> 操作中觀察到這一點。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class UserController:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        self._repo = UserRepositoryImpl()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def find(self, name: str):</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            user: User = self._repo.fetch(Name(name))</span></span>
<span class="line"><span>            record: UserRecord = UserRecord()</span></span>
<span class="line"><span>            record.name = user.name.value</span></span>
<span class="line"><span>            record.phone = user.phone.value</span></span>
<span class="line"><span>            record.since = user.since</span></span>
<span class="line"><span>            return record</span></span>
<span class="line"><span>        except UserNotFoundException as e:</span></span>
<span class="line"><span>            return None</span></span></code></pre></div><p><code>find()</code> 操作接收一個字符串作為用户名，然後將其轉換為 <code>Name</code> 對象，並調用 <code>UserRepository</code> 獲取相應的 <code>User</code> 對象。如果找到了，則使用檢索到的 <code>User\`\` 對象創建 </code>UserRecord\`。回想一下，將域對象轉換為 DTO 是很有必要的，這樣可以對外部服務隱藏域模型。</p><p><code>UserController</code> 不需要有多個實例，它也可以是單例的。通過重寫 <code>__new__</code>，可以將其建模為一個單例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class UserController:</span></span>
<span class="line"><span>    def __new__(self):</span></span>
<span class="line"><span>        if not hasattr(self, ‘instance’):</span></span>
<span class="line"><span>            self.instance = super().__new__(self)</span></span>
<span class="line"><span>        return self.instance</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        self._repo = UserRepositoryImpl()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def find(self, name: str):</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            user: User = self._repo.fetch(Name(name))</span></span>
<span class="line"><span>            record: UserRecord = UserRecord()</span></span>
<span class="line"><span>            record.name = user.name.getValue()</span></span>
<span class="line"><span>            record.phone = user.phone.getValue()</span></span>
<span class="line"><span>            record.since = user.since</span></span>
<span class="line"><span>            return record</span></span>
<span class="line"><span>        except UserNotFoundException as e:</span></span>
<span class="line"><span>            return None</span></span></code></pre></div><p>我們已經完全實現了 <code>FindService</code> 的模型，剩下的唯一任務是將其作為 REST 服務公開。</p><h3 id="rest-api" tabindex="-1">REST API <a class="header-anchor" href="#rest-api" aria-label="Permalink to “REST API”">​</a></h3><p><code>FindService</code> 只提供一個 API，那就是通過用户名查找用户。顯然 URI 如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>GET /user/{name}</span></span></code></pre></div><p>此 API 希望根據提供的用户名查找用户，並以 JSON 格式返回用户的電話號碼等詳細信息。如果沒有找到用户，API 將返回一個 404 狀態碼。</p><p>我們可以使用 Flask 框架來構建 REST API，它最初的目的是使用 Python 開發 Web 應用程序。除了 HTML 視圖，它還進一步擴展到支持 REST 視圖。我們選擇這個框架是因為它足夠簡單。 創建一個 Flask 應用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from flask import Flask</span></span>
<span class="line"><span>app = Flask(__name__)</span></span></code></pre></div><p>然後為 Flask 應用程序定義路由，就像函數一樣簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@app.route(&#39;/user/&lt;name&gt;&#39;)</span></span>
<span class="line"><span>def get(name):</span></span>
<span class="line"><span>    pass</span></span></code></pre></div><p>注意 <code>@app.route</code> 映射到 API <code>/user/&lt;name&gt;</code>，與之對應的函數的 <code>get()</code>。</p><p>如你所見，每次用户訪問 API 如 <code>http://server:port/user/Krishna</code> 時，都將調用這個 <code>get()</code> 函數。Flask 足夠智能，可以從 URL 中提取 <code>Krishna</code> 作為用户名，並將其傳遞給 <code>get()</code> 函數。</p><p><code>get()</code> 函數很簡單。它要求控制器找到該用户，並將其與通常的 HTTP 頭一起打包為 JSON 格式後返回。如果控制器返回 <code>None</code>，則 <code>get()</code> 函數返回合適的 HTTP 狀態碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from flask import jsonify, abort</span></span>
<span class="line"><span></span></span>
<span class="line"><span>controller = UserController()</span></span>
<span class="line"><span>record = controller.find(name)</span></span>
<span class="line"><span>if record is None:</span></span>
<span class="line"><span>    abort(404)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    resp = jsonify(record.toJSON())</span></span>
<span class="line"><span>    resp.status_code = 200</span></span>
<span class="line"><span>    return resp</span></span></code></pre></div><p>最後，我們需要 Flask 應用程序提供服務，可以使用 <code>waitress</code> 服務：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from waitress import serve</span></span>
<span class="line"><span>serve(app, host=&quot;0.0.0.0&quot;, port=8080)</span></span></code></pre></div><p>在上面的片段中，應用程序在本地主機的 8080 端口上提供服務。最終代碼如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from flask import Flask, jsonify, abort</span></span>
<span class="line"><span>from waitress import serve</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = Flask(__name__)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@app.route(&#39;/user/&lt;name&gt;&#39;)</span></span>
<span class="line"><span>def get(name):</span></span>
<span class="line"><span>    controller = UserController()</span></span>
<span class="line"><span>    record = controller.find(name)</span></span>
<span class="line"><span>    if record is None:</span></span>
<span class="line"><span>        abort(404)</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        resp = jsonify(record.toJSON())</span></span>
<span class="line"><span>        resp.status_code = 200</span></span>
<span class="line"><span>        return resp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>serve(app, host=&quot;0.0.0.0&quot;, port=8080)</span></span></code></pre></div><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to “部署”">​</a></h3><p><code>FindService</code> 的代碼已經準備完畢。除了 REST API 之外，它還有域模型、數據層和應用程序層。下一步是構建此服務，將其容器化，然後部署到 Kubernetes 上。此過程與部署其他服務妹有任何區別，但有一些 Python 特有的步驟。</p><p>在繼續前進之前，讓我們來看下文件夾和文件結構：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>+ ums-find-service</span></span>
<span class="line"><span>+ ums</span></span>
<span class="line"><span>- domain.py</span></span>
<span class="line"><span>- data.py</span></span>
<span class="line"><span>- app.py</span></span>
<span class="line"><span>- Dockerfile</span></span>
<span class="line"><span>- requirements.txt</span></span>
<span class="line"><span>- kube-find-deployment.yml</span></span></code></pre></div><p>如你所見，整個工作文件夾都位於 <code>ums-find-service</code> 下，它包含了 <code>ums</code> 文件夾中的代碼和一些配置文件，例如 <code>Dockerfile</code>、<code>requirements.txt</code> 和 <code>kube-find-deployment.yml</code>。</p><p><code>domain.py</code> 包含域模型，<code>data.py</code> 包含 <code>UserRepositoryImpl</code>，<code>app.py</code> 包含剩餘代碼。我們已經閲讀過代碼了，現在我們來看看配置文件。</p><p>第一個是 <code>requirements.txt</code>，它聲明瞭 Python 系統需要下載和安裝的外部依賴項。我們需要用查找服務中用到的每個外部 Python 模組來填充它。如你所見，我們使用了 MySQL 連接器、Flask 和 Waitress 模組。因此，下面是 <code>requirements.txt</code> 的內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Flask==2.1.1</span></span>
<span class="line"><span>Flask_RESTful</span></span>
<span class="line"><span>mysql-connector-python</span></span>
<span class="line"><span>waitress</span></span></code></pre></div><p>第二步是在 <code>Dockerfile</code> 中聲明 Docker 相關的清單，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>FROM python:3.8-slim-buster</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORKDIR /ums</span></span>
<span class="line"><span>ADD ums /ums</span></span>
<span class="line"><span>ADD requirements.txt requirements.txt</span></span>
<span class="line"><span>RUN pip3 install -r requirements.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EXPOSE 8080</span></span>
<span class="line"><span>ENTRYPOINT [&quot;python&quot;]</span></span>
<span class="line"><span>CMD [&quot;/ums/app.py&quot;]</span></span></code></pre></div><p>總的來説，我們使用 Python 3.8 作為基線，除了移動 <code>requirements.txt</code> 之外，我們還將代碼從 <code>ums</code> 文件夾移動到 Docker 容器中對應的文件夾中。然後，我們指示容器運行 <code>pip3 install</code> 命令安裝對應模組。最後，我們向外暴露 8080 端口（因為 waitress 運行在此端口上）。</p><p>為了運行此服務，我們指示容器使用使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>python /ums/app.py</span></span></code></pre></div><p>一旦 <code>Dockerfile</code> 準備完成，在 <code>ums-find-service</code> 文件夾中運行以下命令，創建 Docker 鏡像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>docker build -t glarimy/ums-find-service</span></span></code></pre></div><p>它會創建 Docker 鏡像，可以使用以下命令查找鏡像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>docker images</span></span></code></pre></div><p>嘗試將鏡像推送到 Docker Hub，你也可以登錄到 Docker。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>docker login</span></span>
<span class="line"><span>docker push glarimy/ums-find-service</span></span></code></pre></div><p>最後一步是為 Kubernetes 部署構建清單。</p><p>在之前的文章中，我們已經介紹瞭如何建立 Kubernetes 集羣、部署和使用服務的方法。我假設仍然使用之前文章中的清單文件來部署添加服務、MySQL、Kafka 和 Zookeeper。我們只需要將以下內容添加到 <code>kube-find-deployment.yml</code> 文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>apiVersion: apps/v1</span></span>
<span class="line"><span>kind: Deployment</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>name: ums-find-service</span></span>
<span class="line"><span>labels:</span></span>
<span class="line"><span>app: ums-find-service</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>replicas: 3</span></span>
<span class="line"><span>selector:</span></span>
<span class="line"><span>matchLabels:</span></span>
<span class="line"><span>app: ums-find-service</span></span>
<span class="line"><span>template:</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>labels:</span></span>
<span class="line"><span>app: ums-find-service</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>containers:</span></span>
<span class="line"><span>- name: ums-find-service</span></span>
<span class="line"><span>image: glarimy/ums-find-service</span></span>
<span class="line"><span>ports:</span></span>
<span class="line"><span>- containerPort: 8080</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: Service</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>name: ums-find-service</span></span>
<span class="line"><span>labels:</span></span>
<span class="line"><span>name: ums-find-service</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>type: LoadBalancer</span></span>
<span class="line"><span>ports:</span></span>
<span class="line"><span>- port: 8080</span></span>
<span class="line"><span>selector:</span></span>
<span class="line"><span>app: ums-find-service</span></span></code></pre></div><p>上面清單文件的第一部分聲明瞭 <code>glarimy/ums-find-service</code> 鏡像的 <code>FindService</code>，它包含三個副本。它還暴露 8080 端口。清單的後半部分聲明瞭一個 Kubernetes 服務作為 <code>FindService</code> 部署的前端。請記住，在之前文章中，mysqldb 服務已經是上述清單的一部分了。</p><p>運行以下命令在 Kubernetes 集羣上部署清單文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>kubectl create -f kube-find-deployment.yml</span></span></code></pre></div><p>部署完成後，可以使用以下命令驗證容器組和服務：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>kubectl get services</span></span></code></pre></div><p>輸出如圖 3 所示：</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/08/Figure-3-Kubernetes-services-1.png" alt="圖 3: Kubernetes 服務"></p><p>它會列出集羣上運行的所有服務。注意查找服務的外部 IP，使用 <code>curl</code> 調用此服務：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>curl http://10.98.45.187:8080/user/KrishnaMohan</span></span></code></pre></div><p>注意：10.98.45.187 對應查找服務，如圖 3 所示。</p><p>如果我們使用 <code>AddService</code> 創建一個名為 <code>KrishnaMohan</code> 的用户，那麼上面的 <code>curl</code> 命令看起來如圖 4 所示：</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/08/Figure-4-FindService.png" alt="圖 4: 查找服務"></p><p>用户管理系統（UMS）的體系結構包含 <code>AddService</code> 和 <code>FindService</code>，以及存儲和消息傳遞所需的後端服務，如圖 5 所示。可以看到終端用户使用 <code>ums-add-service</code> 的 IP 地址添加新用户，使用 <code>ums-find-service</code> 的 IP 地址查找已有用户。每個 Kubernetes 服務都由三個對應容器的節點支持。還要注意：同樣的 mysqldb 服務用於存儲和檢索用户數據。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/08/Figure-5-UMS-with-AddService-and-FindService.png" alt="圖 5: UMS 的添加服務和查找服務"></p><h3 id="其他服務" tabindex="-1">其他服務 <a class="header-anchor" href="#其他服務" aria-label="Permalink to “其他服務”">​</a></h3><p>UMS 系統還包含兩個服務：<code>SearchService</code> 和 <code>JournalService</code>。在本系列的下一部分中，我們將在 Node 平台上設計這些服務，並將它們部署到同一個 Kubernetes 集羣，以演示多語言微服務架構的真正魅力。最後，我們將觀察一些與微服務相關的設計模式。</p><hr>`,114)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://www.opensourceforu.com/2022/09/python-microservices-using-flask-on-kubernetes/"},{default:p(()=>[...s[0]||(s[0]=[a("https://www.opensourceforu.com/2022/09/python-microservices-using-flask-on-kubernetes/",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://www.opensourceforu.com/author/krishna-mohan-koyya/"},{default:p(()=>[...s[2]||(s[2]=[a("Krishna Mohan Koyya",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),e(n,{href:"https://github.com/lkxed"},{default:p(()=>[...s[3]||(s[3]=[a("lkxed",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),e(n,{href:"https://github.com/MjSeven"},{default:p(()=>[...s[4]||(s[4]=[a("MjSeven",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const C=l(d,[["render",h]]);export{v as __pageData,C as default};
