import{_ as l,a0 as t,w as o,s as c,ao as r,I as i,x as a,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"在 Kubernetes 上使用 Flask 搭建 Python 微服务 | LCTT x X-CMD","titleTemplate":false,"description":"在 Kubernetes 上使用 Flask 搭建 Python 微服务 | LCTT (202210) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Kubernetes 上使用 Flask 搭建 Python 微服务 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Kubernetes 上使用 Flask 搭建 Python 微服务 | LCTT (202210) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202210/20220912 Python Microservices Using Flask on Kubernetes","title":"在 Kubernetes 上使用 Flask 搭建 Python 微服务","tag":"202210","desc":""},"relativePath":"202210/20220912 Python Microservices Using Flask on Kubernetes.md","filePath":"[post].md"}'),d={name:"202210/20220912 Python Microservices Using Flask on Kubernetes.md"};function h(u,s,g,k,b,f){const n=t("Link");return o(),c("div",null,[s[15]||(s[15]=r(`<h1 id="在-kubernetes-上使用-flask-搭建-python-微服务" tabindex="-1">在 Kubernetes 上使用 Flask 搭建 Python 微服务 <a class="header-anchor" href="#在-kubernetes-上使用-flask-搭建-python-微服务" aria-label="Permalink to “在 Kubernetes 上使用 Flask 搭建 Python 微服务”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202210/19/124429nmw0xmfz3x3mrrf2.jpg" alt=""></p><p><em>微服务遵循领域驱动设计（DDD），与开发平台无关。Python 微服务也不例外。Python3 的面向对象特性使得按照 DDD 对服务进行建模变得更加容易。本系列的第 10 部分演示了如何将用户管理系统的查找服务作为 Python 微服务部署在 Kubernetes 上。</em></p><p>微服务架构的强大之处在于它的多语言性。企业将其功能分解为一组微服务，每个团队自由选择一个平台。</p><p>我们的用户管理系统已经分解为四个微服务，分别是添加、查找、搜索和日志服务。添加服务在 Java 平台上开发并部署在 Kubernetes 集群上，以实现弹性和可扩展性。这并不意味着其余的服务也要使用 Java 开发，我们可以自由选择适合个人服务的平台。</p><p>让我们选择 Python 作为开发查找服务的平台。查找服务的模型已经设计好了（参考 2022 年 3 月份的文章），我们只需要将这个模型转换为代码和配置。</p><h3 id="pythonic-方法" tabindex="-1">Pythonic 方法 <a class="header-anchor" href="#pythonic-方法" aria-label="Permalink to “Pythonic 方法”">​</a></h3><p>Python 是一种通用编程语言，已经存在了大约 30 年。早期，它是自动化脚本的首选。然而，随着 Django 和 Flask 等框架的出现，它的受欢迎程度越来越高，现在各种领域中都在应用它，如企业应用程序开发。数据科学和机器学习进一步推动了它的发展，Python 现在是三大编程语言之一。</p><p>许多人将 Python 的成功归功于它容易编码。这只是一部分原因。只要你的目标是开发小型脚本，Python 就像一个玩具，你会非常喜欢它。然而，当你进入严肃的大规模应用程序开发领域时，你将不得不处理大量的 <code>if</code> 和 <code>else</code>，Python 变得与任何其他平台一样好或一样坏。例如，采用一种面向对象的方法！许多 Python 开发人员甚至可能没意识到 Python 支持类、继承等功能。Python 确实支持成熟的面向对象开发，但是有它自己的方式 -- Pythonic！让我们探索一下！</p><h3 id="领域模型" tabindex="-1">领域模型 <a class="header-anchor" href="#领域模型" aria-label="Permalink to “领域模型”">​</a></h3><p><code>AddService</code> 通过将数据保存到一个 MySQL 数据库中来将用户添加到系统中。<code>FindService</code> 的目标是提供一个 REST API 按用户名查找用户。域模型如图 1 所示。它主要由一些值对象组成，如 <code>User</code> 实体的<code>Name</code>、<code>PhoneNumber</code> 以及 <code>UserRepository</code>。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/08/Figure-1-The-domain-model-of-FindService-1.png" alt="图 1: 查找服务的域模型"></p><p>让我们从 <code>Name</code> 开始。由于它是一个值对象，因此必须在创建时进行验证，并且必须保持不可变。基本结构如所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Name:</span></span>
<span class="line"><span>    value: str</span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        if self.value is None or len(self.value.strip()) &lt; 8 or len(self.value.strip()) &gt; 32:</span></span>
<span class="line"><span>            raise ValueError(&quot;Invalid Name&quot;)</span></span></code></pre></div><p>如你所见，<code>Name</code> 包含一个字符串类型的值。作为后期初始化的一部分，我们会验证它。</p><p>Python 3.7 提供了 <code>@dataclass</code> 装饰器，它提供了许多开箱即用的数据承载类的功能，如构造函数、比较运算符等。如下是装饰后的 <code>Name</code> 类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from dataclasses import dataclass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@dataclass</span></span>
<span class="line"><span>class Name:</span></span>
<span class="line"><span>    value: str</span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        if self.value is None or len(self.value.strip()) &lt; 8 or len(self.value.strip()) &gt; 32:</span></span>
<span class="line"><span>            raise ValueError(&quot;Invalid Name&quot;)</span></span></code></pre></div><p>以下代码可以创建一个 <code>Name</code> 对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name = Name(&quot;Krishna&quot;)</span></span></code></pre></div><p><code>value</code> 属性可以按照如下方式读取或写入：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name.value = &quot;Mohan&quot;</span></span>
<span class="line"><span>print(name.value)</span></span></code></pre></div><p>可以很容易地与另一个 <code>Name</code> 对象比较，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>other = Name(&quot;Mohan&quot;)</span></span>
<span class="line"><span>if name == other:</span></span>
<span class="line"><span>    print(&quot;same&quot;)</span></span></code></pre></div><p>如你所见，对象比较的是值而不是引用。这一切都是开箱即用的。我们还可以通过冻结对象使对象不可变。这是 <code>Name</code> 值对象的最终版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from dataclasses import dataclass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@dataclass(frozen=True)</span></span>
<span class="line"><span>class Name:</span></span>
<span class="line"><span>    value: str</span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        if self.value is None or len(self.value.strip()) &lt; 8 or len(self.value.strip()) &gt; 32:</span></span>
<span class="line"><span>            raise ValueError(&quot;Invalid Name&quot;)</span></span></code></pre></div><p><code>PhoneNumber</code> 也遵循类似的方法，因为它也是一个值对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(frozen=True)</span></span>
<span class="line"><span>class PhoneNumber:</span></span>
<span class="line"><span>    value: int</span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        if self.value &lt; 9000000000:</span></span>
<span class="line"><span>            raise ValueError(&quot;Invalid Phone Number&quot;)</span></span></code></pre></div><p><code>User</code> 类是一个实体，不是一个值对象。换句话说，<code>User</code> 是可变的。以下是结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from dataclasses import dataclass</span></span>
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
<span class="line"><span>            self.since = datetime.datetime.now()</span></span></code></pre></div><p>你能观察到 <code>User</code> 并没有冻结，因为我们希望它是可变的。但是，我们不希望所有属性都是可变的。标识字段如 <code>_name</code> 和 <code>_since</code> 是希望不会修改的。那么，这如何做到呢？</p><p>Python3 提供了所谓的描述符协议，它会帮助我们正确定义 getter 和 setter。让我们使用 <code>@property</code> 装饰器将 getter 添加到 <code>User</code> 的所有三个字段中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@property</span></span>
<span class="line"><span>def name(self) -&gt; Name:</span></span>
<span class="line"><span>    return self._name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@property</span></span>
<span class="line"><span>def phone(self) -&gt; PhoneNumber:</span></span>
<span class="line"><span>    return self._phone</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@property</span></span>
<span class="line"><span>def since(self) -&gt; datetime.datetime:</span></span>
<span class="line"><span>    return self._since</span></span></code></pre></div><p><code>phone</code> 字段的 setter 可以使用 <code>@&lt;字段&gt;.setter</code> 来装饰：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@phone.setter</span></span>
<span class="line"><span>def phone(self, phone: PhoneNumber) -&gt; None:</span></span>
<span class="line"><span>    if phone is None:</span></span>
<span class="line"><span>        raise ValueError(&quot;Invalid phone&quot;)</span></span>
<span class="line"><span>    self._phone = phone</span></span></code></pre></div><p>通过重写 <code>__str__()</code> 函数，也可以为 <code>User</code> 提供一个简单的打印方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def __str__(self):</span></span>
<span class="line"><span>    return self.name.value + &quot; [&quot; + str(self.phone.value) + &quot;] since &quot; + str(self.since)</span></span></code></pre></div><p>这样，域模型的实体和值对象就准备好了。创建异常类如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class UserNotFoundException(Exception):</span></span>
<span class="line"><span>    pass</span></span></code></pre></div><p>域模型现在只剩下 <code>UserRepository</code> 了。Python 提供了一个名为 <code>abc</code> 的有用模块来创建抽象方法和抽象类。因为 <code>UserRepository</code> 只是一个接口，所以我们可以使用 <code>abc</code> 模块。</p><p>任何继承自 <code>abc.ABC</code> 的类都将变为抽象类，任何带有 <code>@abc.abstractmethod</code> 装饰器的函数都会变为一个抽象函数。下面是 <code>UserRepository</code> 的结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from abc import ABC, abstractmethod</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class UserRepository(ABC):</span></span>
<span class="line"><span>    @abstractmethod</span></span>
<span class="line"><span>    def fetch(self, name:Name) -&gt; User:</span></span>
<span class="line"><span>        pass</span></span></code></pre></div><p><code>UserRepository</code> 遵循仓储模式。换句话说，它在 <code>User</code> 实体上提供适当的 CRUD 操作，而不会暴露底层数据存储语义。在本例中，我们只需要 <code>fetch()</code> 操作，因为 <code>FindService</code> 只查找用户。</p><p>因为 <code>UserRepository</code> 是一个抽象类，我们不能从抽象类创建实例对象。创建对象必须依赖于一个具体类实现这个抽象类。数据层 <code>UserRepositoryImpl</code> 提供了 <code>UserRepository</code> 的具体实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class UserRepositoryImpl(UserRepository):</span></span>
<span class="line"><span>    def fetch(self, name:Name) -&gt; User:</span></span>
<span class="line"><span>        pass</span></span></code></pre></div><p>由于 <code>AddService</code> 将用户数据存储在一个 MySQL 数据库中，因此 <code>UserRepositoryImpl</code> 也必须连接到相同的数据库去检索数据。下面是连接到数据库的代码。注意，我们正在使用 MySQL 的连接库。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from mysql.connector import connect, Error</span></span>
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
<span class="line"><span>            raise e</span></span></code></pre></div><p>在上面的片段中，我们使用用户 <code>root</code> / 密码 <code>admin</code> 连接到一个名为 <code>mysqldb</code> 的数据库服务器，使用名为 <code>glarimy</code> 的数据库（模式）。在演示代码中是可以包含这些信息的，但在生产中不建议这么做，因为这会暴露敏感信息。</p><p><code>fetch()</code> 操作的逻辑非常直观，它对 <code>ums_users</code> 表执行 SELECT 查询。回想一下，<code>AddService</code> 正在将用户数据写入同一个表中。如果 SELECT 查询没有返回记录，<code>fetch()</code> 函数将抛出 <code>UserNotFoundException</code> 异常。否则，它会从记录中构造 <code>User</code> 实体并将其返回给调用者。这没有什么特殊的。</p><h3 id="应用层" tabindex="-1">应用层 <a class="header-anchor" href="#应用层" aria-label="Permalink to “应用层”">​</a></h3><p>最终，我们需要创建应用层。此模型如图 2 所示。它只包含两个类：控制器和一个 DTO。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/08/Figure-2-The-application-layer-of-FindService.png" alt="图 2: 添加服务的应用层"></p><p>众所周知，一个 DTO 只是一个没有任何业务逻辑的数据容器。它主要用于在 <code>FindService</code> 和外部之间传输数据。我们只是提供了在 REST 层中将 <code>UserRecord</code> 转换为字典以便用于 JSON 传输：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class UserRecord:</span></span>
<span class="line"><span>    def toJSON(self):</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            &quot;name&quot;: self.name,</span></span>
<span class="line"><span>            &quot;phone&quot;: self.phone,</span></span>
<span class="line"><span>            &quot;since&quot;: self.since</span></span>
<span class="line"><span>        }</span></span></code></pre></div><p>控制器的工作是将 DTO 转换为用于域服务的域对象，反之亦然。可以从 <code>find()</code> 操作中观察到这一点。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class UserController:</span></span>
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
<span class="line"><span>            return None</span></span></code></pre></div><p><code>find()</code> 操作接收一个字符串作为用户名，然后将其转换为 <code>Name</code> 对象，并调用 <code>UserRepository</code> 获取相应的 <code>User</code> 对象。如果找到了，则使用检索到的 <code>User\`\` 对象创建 </code>UserRecord\`。回想一下，将域对象转换为 DTO 是很有必要的，这样可以对外部服务隐藏域模型。</p><p><code>UserController</code> 不需要有多个实例，它也可以是单例的。通过重写 <code>__new__</code>，可以将其建模为一个单例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class UserController:</span></span>
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
<span class="line"><span>            return None</span></span></code></pre></div><p>我们已经完全实现了 <code>FindService</code> 的模型，剩下的唯一任务是将其作为 REST 服务公开。</p><h3 id="rest-api" tabindex="-1">REST API <a class="header-anchor" href="#rest-api" aria-label="Permalink to “REST API”">​</a></h3><p><code>FindService</code> 只提供一个 API，那就是通过用户名查找用户。显然 URI 如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>GET /user/{name}</span></span></code></pre></div><p>此 API 希望根据提供的用户名查找用户，并以 JSON 格式返回用户的电话号码等详细信息。如果没有找到用户，API 将返回一个 404 状态码。</p><p>我们可以使用 Flask 框架来构建 REST API，它最初的目的是使用 Python 开发 Web 应用程序。除了 HTML 视图，它还进一步扩展到支持 REST 视图。我们选择这个框架是因为它足够简单。 创建一个 Flask 应用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from flask import Flask</span></span>
<span class="line"><span>app = Flask(__name__)</span></span></code></pre></div><p>然后为 Flask 应用程序定义路由，就像函数一样简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@app.route(&#39;/user/&lt;name&gt;&#39;)</span></span>
<span class="line"><span>def get(name):</span></span>
<span class="line"><span>    pass</span></span></code></pre></div><p>注意 <code>@app.route</code> 映射到 API <code>/user/&lt;name&gt;</code>，与之对应的函数的 <code>get()</code>。</p><p>如你所见，每次用户访问 API 如 <code>http://server:port/user/Krishna</code> 时，都将调用这个 <code>get()</code> 函数。Flask 足够智能，可以从 URL 中提取 <code>Krishna</code> 作为用户名，并将其传递给 <code>get()</code> 函数。</p><p><code>get()</code> 函数很简单。它要求控制器找到该用户，并将其与通常的 HTTP 头一起打包为 JSON 格式后返回。如果控制器返回 <code>None</code>，则 <code>get()</code> 函数返回合适的 HTTP 状态码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from flask import jsonify, abort</span></span>
<span class="line"><span></span></span>
<span class="line"><span>controller = UserController()</span></span>
<span class="line"><span>record = controller.find(name)</span></span>
<span class="line"><span>if record is None:</span></span>
<span class="line"><span>    abort(404)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    resp = jsonify(record.toJSON())</span></span>
<span class="line"><span>    resp.status_code = 200</span></span>
<span class="line"><span>    return resp</span></span></code></pre></div><p>最后，我们需要 Flask 应用程序提供服务，可以使用 <code>waitress</code> 服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from waitress import serve</span></span>
<span class="line"><span>serve(app, host=&quot;0.0.0.0&quot;, port=8080)</span></span></code></pre></div><p>在上面的片段中，应用程序在本地主机的 8080 端口上提供服务。最终代码如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from flask import Flask, jsonify, abort</span></span>
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
<span class="line"><span>serve(app, host=&quot;0.0.0.0&quot;, port=8080)</span></span></code></pre></div><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to “部署”">​</a></h3><p><code>FindService</code> 的代码已经准备完毕。除了 REST API 之外，它还有域模型、数据层和应用程序层。下一步是构建此服务，将其容器化，然后部署到 Kubernetes 上。此过程与部署其他服务妹有任何区别，但有一些 Python 特有的步骤。</p><p>在继续前进之前，让我们来看下文件夹和文件结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>+ ums-find-service</span></span>
<span class="line"><span>+ ums</span></span>
<span class="line"><span>- domain.py</span></span>
<span class="line"><span>- data.py</span></span>
<span class="line"><span>- app.py</span></span>
<span class="line"><span>- Dockerfile</span></span>
<span class="line"><span>- requirements.txt</span></span>
<span class="line"><span>- kube-find-deployment.yml</span></span></code></pre></div><p>如你所见，整个工作文件夹都位于 <code>ums-find-service</code> 下，它包含了 <code>ums</code> 文件夹中的代码和一些配置文件，例如 <code>Dockerfile</code>、<code>requirements.txt</code> 和 <code>kube-find-deployment.yml</code>。</p><p><code>domain.py</code> 包含域模型，<code>data.py</code> 包含 <code>UserRepositoryImpl</code>，<code>app.py</code> 包含剩余代码。我们已经阅读过代码了，现在我们来看看配置文件。</p><p>第一个是 <code>requirements.txt</code>，它声明了 Python 系统需要下载和安装的外部依赖项。我们需要用查找服务中用到的每个外部 Python 模块来填充它。如你所见，我们使用了 MySQL 连接器、Flask 和 Waitress 模块。因此，下面是 <code>requirements.txt</code> 的内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Flask==2.1.1</span></span>
<span class="line"><span>Flask_RESTful</span></span>
<span class="line"><span>mysql-connector-python</span></span>
<span class="line"><span>waitress</span></span></code></pre></div><p>第二步是在 <code>Dockerfile</code> 中声明 Docker 相关的清单，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>FROM python:3.8-slim-buster</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORKDIR /ums</span></span>
<span class="line"><span>ADD ums /ums</span></span>
<span class="line"><span>ADD requirements.txt requirements.txt</span></span>
<span class="line"><span>RUN pip3 install -r requirements.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EXPOSE 8080</span></span>
<span class="line"><span>ENTRYPOINT [&quot;python&quot;]</span></span>
<span class="line"><span>CMD [&quot;/ums/app.py&quot;]</span></span></code></pre></div><p>总的来说，我们使用 Python 3.8 作为基线，除了移动 <code>requirements.txt</code> 之外，我们还将代码从 <code>ums</code> 文件夹移动到 Docker 容器中对应的文件夹中。然后，我们指示容器运行 <code>pip3 install</code> 命令安装对应模块。最后，我们向外暴露 8080 端口（因为 waitress 运行在此端口上）。</p><p>为了运行此服务，我们指示容器使用使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>python /ums/app.py</span></span></code></pre></div><p>一旦 <code>Dockerfile</code> 准备完成，在 <code>ums-find-service</code> 文件夹中运行以下命令，创建 Docker 镜像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>docker build -t glarimy/ums-find-service</span></span></code></pre></div><p>它会创建 Docker 镜像，可以使用以下命令查找镜像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>docker images</span></span></code></pre></div><p>尝试将镜像推送到 Docker Hub，你也可以登录到 Docker。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>docker login</span></span>
<span class="line"><span>docker push glarimy/ums-find-service</span></span></code></pre></div><p>最后一步是为 Kubernetes 部署构建清单。</p><p>在之前的文章中，我们已经介绍了如何建立 Kubernetes 集群、部署和使用服务的方法。我假设仍然使用之前文章中的清单文件来部署添加服务、MySQL、Kafka 和 Zookeeper。我们只需要将以下内容添加到 <code>kube-find-deployment.yml</code> 文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>apiVersion: apps/v1</span></span>
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
<span class="line"><span>app: ums-find-service</span></span></code></pre></div><p>上面清单文件的第一部分声明了 <code>glarimy/ums-find-service</code> 镜像的 <code>FindService</code>，它包含三个副本。它还暴露 8080 端口。清单的后半部分声明了一个 Kubernetes 服务作为 <code>FindService</code> 部署的前端。请记住，在之前文章中，mysqldb 服务已经是上述清单的一部分了。</p><p>运行以下命令在 Kubernetes 集群上部署清单文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>kubectl create -f kube-find-deployment.yml</span></span></code></pre></div><p>部署完成后，可以使用以下命令验证容器组和服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>kubectl get services</span></span></code></pre></div><p>输出如图 3 所示：</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/08/Figure-3-Kubernetes-services-1.png" alt="图 3: Kubernetes 服务"></p><p>它会列出集群上运行的所有服务。注意查找服务的外部 IP，使用 <code>curl</code> 调用此服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>curl http://10.98.45.187:8080/user/KrishnaMohan</span></span></code></pre></div><p>注意：10.98.45.187 对应查找服务，如图 3 所示。</p><p>如果我们使用 <code>AddService</code> 创建一个名为 <code>KrishnaMohan</code> 的用户，那么上面的 <code>curl</code> 命令看起来如图 4 所示：</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/08/Figure-4-FindService.png" alt="图 4: 查找服务"></p><p>用户管理系统（UMS）的体系结构包含 <code>AddService</code> 和 <code>FindService</code>，以及存储和消息传递所需的后端服务，如图 5 所示。可以看到终端用户使用 <code>ums-add-service</code> 的 IP 地址添加新用户，使用 <code>ums-find-service</code> 的 IP 地址查找已有用户。每个 Kubernetes 服务都由三个对应容器的节点支持。还要注意：同样的 mysqldb 服务用于存储和检索用户数据。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/08/Figure-5-UMS-with-AddService-and-FindService.png" alt="图 5: UMS 的添加服务和查找服务"></p><h3 id="其他服务" tabindex="-1">其他服务 <a class="header-anchor" href="#其他服务" aria-label="Permalink to “其他服务”">​</a></h3><p>UMS 系统还包含两个服务：<code>SearchService</code> 和 <code>JournalService</code>。在本系列的下一部分中，我们将在 Node 平台上设计这些服务，并将它们部署到同一个 Kubernetes 集群，以演示多语言微服务架构的真正魅力。最后，我们将观察一些与微服务相关的设计模式。</p><hr>`,114)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://www.opensourceforu.com/2022/09/python-microservices-using-flask-on-kubernetes/"},{default:p(()=>[...s[0]||(s[0]=[a("https://www.opensourceforu.com/2022/09/python-microservices-using-flask-on-kubernetes/",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://www.opensourceforu.com/author/krishna-mohan-koyya/"},{default:p(()=>[...s[2]||(s[2]=[a("Krishna Mohan Koyya",-1)])]),_:1}),s[7]||(s[7]=a(" 选题：",-1)),e(n,{href:"https://github.com/lkxed"},{default:p(()=>[...s[3]||(s[3]=[a("lkxed",-1)])]),_:1}),s[8]||(s[8]=a(" 译者：",-1)),e(n,{href:"https://github.com/MjSeven"},{default:p(()=>[...s[4]||(s[4]=[a("MjSeven",-1)])]),_:1}),s[9]||(s[9]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[a("Linux中国",-1)])]),_:1}),s[14]||(s[14]=a(" 荣誉推出",-1))])])}const C=l(d,[["render",h]]);export{v as __pageData,C as default};
