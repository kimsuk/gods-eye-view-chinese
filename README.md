<div align="center">

# 🌐 God's Eye View &nbsp; [English](https://github.com/bilawalsidhu/gods-eye-view/blob/main/README.md)

[![CI](https://github.com/bilawalsidhu/gods-eye-view/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bilawalsidhu/gods-eye-view/actions/workflows/ci.yml) [![Reached #1 on GitHub Trending](https://img.shields.io/badge/%231_GitHub_Trending-thank_you!-F0A63C?style=flat-square&logo=github)](https://x.com/bilawalsidhu/status/2093798887815348521)

### 浏览器里的间谍卫星模拟器——直到你发现，数据源是公开的，数据是真的。

照片级真实的三维地球。实时飞机、船舶、卫星、地震、交通和公共摄像头。由实时 AI 代理驱动的免提语音控制。

_不留任何地方。_

![轨道 HUD、被跟踪的实时地球、FLIR 地形——然后开源](docs/media/hero-open-source-reveal.gif)

<a href="https://www.youtube.com/@bilawalsidhu">
  <img src="docs/media/youtube-popular-videos.png" alt="YouTube 上的 God's Eye View 视频系列" width="100%">
</a>

▶️ **这个项目背后是爆火的 God's Eye View 系列** _（前称 WorldView）_ — [YouTube 播放超过 500 万次](https://youtube.com/playlist?list=PL6qSg2I-7_koPbDnSMo0QeeHX_RknA2uv&si=nBGYMoHWQw41v93Q) · [全网播放超过 2500 万次](https://www.google.com/search?q=god%27s+eye+view)

🏆 **2026 年 8 月登上 GitHub Trending 日榜和周榜第 1**

**[Product Hunt 当日第 8](https://www.producthunt.com/products/god-s-eye-view?launch=god-s-eye-view)** · 由话题标签的创造者 Chris Messina 猎荐

_“pretty cool”_ — [Brendan Eich](https://x.com/BrendanEich/status/2094592096401490266)，JavaScript 创造者，Mozilla 与 Brave 联合创始人 · 获 **[Pinokio](https://pinokio.co/posts/01m1m4p9xxm3qw7dnnpj2wr93g)** 专题介绍

⚡ **不用 API 密钥也能开始。** 用 [Pinokio](https://pinokio.co/apps/github-com-bilawalsidhu-gods-eye-view) 安装，或在终端本地运行。可选密钥在应用里添加。**[→ 快速开始](#quick-start)**

</div>

---

<div align="center">

**[快速开始](#quick-start) · [最初五分钟](#first-five) · [和它对话](#talk) · [地球上有什么](#globe) · [底层原理](#hood) · [密钥与费用](#keys) · [贡献](CONTRIBUTING.md)**

</div>

---

## <a id="why"></a>🌍 为什么做这个

God's Eye View 把公开信号放进同一个可以探索的地球。实时跟踪这个世界。跟它说话。拆开它。扩展它。

航班应答机、船舶信标、轨道根数、地震仪和公共摄像头，本来就已经在告诉我们很多关于世界的事。God's Eye View 把它们放在同一个地方，让你能从全球画面走到一架飞机、一艘船或一条街。它在你的浏览器里本地运行，源代码可以检查，也可以扩展。

> 一半的魔力在于它看起来像一座不该让你进去的座舱。另一半在于每一行代码都可以检查。

大多数数据源是实时的，或定期刷新。交通是沿着真实道路、用聚合位置数据做的模拟。CCTV 摄像头姿态和火箭发射轨迹是粗略估计。

先用自带的数据源，再加你自己的。每个图层都是一个独立模块。

---

## <a id="what"></a>🎛️ 它能做什么

- **🛩️ 座舱视角：** 坐进一架被跟踪的航班——相机一直把你脚下的地形稳住，直到落地。
- **📡 目标：** 目标周围 250 公里内的一切都列在名册里——逐架切换实时飞机，并进入任意座舱。
- **🎯 点击即可跟踪：** 相机锁定，画出逐渐淡去的尾迹，展开完整元数据——跟踪中的火点或船舶还能一键交给最近的实时摄像头。
- **🖊️ 语音白板：** 把标注说进世界里——真实的边界多边形、标记和路线。
- **🛫 三维机库：** 按机型使用真实飞机模型——787、ATR-72、Citation、Bell 206、MQ-9——被跟踪的目标在你靠近时会从符号换成三维模型。
- **🎨 给现实换皮：** 在普通地球上叠加 GLSL 传感器外观——CRT、NVG、FLIR／热成像、Noir、Snow。
- **🟩 检测叠加：** 给视野里的一切画上屏幕空间包围盒和编号。
- **🎖️ 军事 HUD：** 带情报风格遥测的战术平视显示。
- **🌐 全球态势：** 一个开关摆出完整的态势图——离开时再把你原来的视角精确还回来。
- **🎥 场景导演：** 为片段和演示捕捉电影感的相机巡游。
- **🔗 分享链接：** 相机、风格、图层，甚至一个被跟踪的目标，都能写进一条 URL——实时目标是一次交接，不是书签。
- **🏠 重置地球：** 一个控件，或一句话，回到完整的地球。
- **🌦️ 天气：** 在同一条时间线上动画播放 GFS 或 ECMWF 预报风，回放观测雷达、卫星云图和闪电，并跟随 NHC／CPHC 的气旋路径。不需要密钥。
- **📷 已测绘的 ALPR 摄像头：** OpenStreetMap 上标注的车牌识别摄像头位置，一次一座城市。只有位置和标签，不需要密钥。
- **🔭 卫星过境：** 用语音询问任意已加载卫星下一次在你上方升起的时间：升起、最高点和落下，以及你能否看见它。
- **🔎 分析员回答：** 用语音计数、筛选和排序卫星、数据中心和水坝，也可以问航班、船舶、火点和地震；数据源过期或走了备用源时，回答会说明。
- **🧭 倾斜与北向上：** 在垂直向下和 35° 斜视之间切换，或把北放到画面上方，被跟踪的目标仍保持在中心。
- **🔍 免密钥搜索：** 输入十进制坐标、二维 WGS84 `geo:` URI（例如 `geo:39.7392,-104.9903`），或自带的城市与地标，不向地理编码器发请求就能飞过去；其他名称在配置了 Google 时先用 Google，然后是 Photon 和 Nominatim。
- **📦 可分享的场景：** 把导演场景作为文件或数据包导入、预览和分享，包含相机锚点、编排好的运动和数据包。
- **🌊 尼泊尔洪水场景：** 回放波德科西洪水：洪水路径、目击者来源，以及前后对比影像（捆绑数据不可商用，见 [DATA_SOURCES.md](DATA_SOURCES.md)）。

---

<div align="center">

[![关于 God's Eye View 开源发布的 YouTube 视频](https://img.youtube.com/vi/GRJaKcXZS94/maxresdefault.jpg)](https://www.youtube.com/watch?v=GRJaKcXZS94)

▶️ **[下面这一切的完整演示，在 YouTube 上](https://www.youtube.com/watch?v=GRJaKcXZS94)**

</div>

## <a id="quick-start"></a>⚡ 快速开始

**不需要账号，也不需要 API 密钥。** 两条路径打开的是同一个应用，使用 Esri 卫星影像和免密钥地形。Esri 不可达时回退到 OSM。航班、军事交通、卫星、地震、公共摄像头、电台和发射，都可以在没有密钥时使用。

要照片级真实的三维效果，可以添加 **Cesium ion 令牌**（符合条件的个人、非商业用途），或添加 **Google Maps 密钥** 走直接、按量计费的路径，并使用 Google 地点搜索。提供商的条款和配额适用。通过应用里的 **启动** 面板添加密钥；[密钥与费用](#keys) 说明各个选项。

> **已经装过？** 请更新到最新版本。旧版本会查询公共的 OpenStreetMap Overpass 服务器，而这些服务器现在会拒绝它们，所以在你更新之前，交通、已测绘设施和 ALPR 会一直是空的。

### 路径 1 — 一次点击，不用终端

1. 安装或更新 [Pinokio](https://desktop.pinokio.co/) 到 **8.2 或更高版本**。
2. 打开 [Pinokio 里的 God's Eye View](https://pinokio.co/apps/github-com-bilawalsidhu-gods-eye-view)。
3. 点击 **Install**，然后 **Start**。

可用于 **Windows、macOS 和 Linux**。Pinokio 维护者报告过这个固定安装包的跨平台测试。启动器会安装锁定的依赖，找一个空闲的本地端口，并打开应用。

**以前试过但安装失败？** 更新 Pinokio 再试一次。8.2 版修复了启动器的安装问题；[Pinokio 维护者的说明](https://pinokio.co/posts/01m1m4p9xxm3qw7dnnpj2wr93g)。

**Pinokio 能打开，但地球非常卡？** 在把它当成 GPU 兼容性或最低硬件问题之前，先复制 Pinokio 显示的本地服务器地址，用你平时开启了硬件加速的浏览器打开同一个地址。有一位 Pinokio 8.2.0 用户报告，内嵌视图严重卡顿，但把同一个正在运行的服务器放到外部浏览器里就消失了（[#365](https://github.com/bilawalsidhu/gods-eye-view/issues/365)）。这指向内嵌浏览器，而不是应用服务器或你的硬件；它并不构成最低 GPU 要求。

### 路径 2 — 终端 / 编程代理

使用 **Node.js 24.x（24.14.0 或更高）或 26.x**。安装检查会警告 Node 25，它已经结束支持。

```bash
git clone https://github.com/kimsuk/gods-eye-view-chinese.git
cd gods-eye-view-chinese
npm ci
npm run doctor
npm run dev
```

打开 **`http://localhost:4173`**。在首次运行面板里选择 **实时目标**、**太空任务**、**环境** 或 **手动探索**。

<details>
<summary>启动性能</summary>

一次 M5／Chrome 的时点采样测得冷启动中位数为 1.86 秒。这是比较基线，不是对你的机器或网络的保证。见 [docs/PERFORMANCE.md](docs/PERFORMANCE.md)。

</details>

**macOS 快捷方式：** `./scripts/dev-fresh.sh` 会清掉 Vite 缓存，并把已配置的密钥直接从钥匙串里取出。没有密钥时它也能启动。

### 路径 3 — Docker

不需要安装 Node；容器发布的是同一个开发服务器。

```bash
git clone https://github.com/kimsuk/gods-eye-view-chinese.git
cd gods-eye-view-chinese
docker compose up
```

像上面一样打开 **`http://localhost:4173`**。应用保存的一切都留在你克隆的文件夹里，所以 `docker compose down` 不会丢掉任何东西：

- `.env` — 你的 API 密钥，无论是从数据源设置保存的，还是手工填进去的
- `.gev-cache/` — 下载的地图和卫星数据，让以后的启动更快
- `.gev-logs/` — 日志

备份这个文件夹就备份了一切；删掉 `.env` 就会忘掉密钥。源码修改仍然会热重载。端口只发布到 `127.0.0.1`，因此默认行为和本机运行一致。

本地 MCP 服务器和 ChatGPT OAuth 语音在 Docker 下不可用；语音请使用 OpenAI API 密钥。

把发布范围放宽是 [共享一个实例](#sharing) 里的显式选项，而且它也会把 **数据源设置** 交出去：启动器把容器网关信任为本机，更宽的发布会把其他所有人从同一个地址送进来。如果你打算共享这个实例，请改为手工把密钥放进 `.env`。细节见 [SECURITY.md](SECURITY.md)。

放宽发布时，再设置 `GEV_KEY_SETUP_TRUSTED_PEERS=none`，让启动器不信任任何网关地址。

<details>
<summary>在 Linux、NAS 上运行，或放在反向代理后面</summary>

用应该拥有这些文件的用户来运行。`id` 会显示数字；在 Linux 上查看你自己：

```bash
env UID=$(id -u) GID=$(id -g) docker compose up
```

在 NAS 上，把仓库克隆到你希望存放数据的共享目录，并使用共享目录所有者的 id：

```bash
cd /volume1/docker
git clone https://github.com/kimsuk/gods-eye-view-chinese.git
cd gods-eye-view-chinese
env UID=1026 GID=100 docker compose up -d
```

保留 `env`：bash 把 `UID` 当成只读变量，所以直接在命令前面写 `UID=1026` 会被静默忽略。如果容器写不了检出目录，启动时会说明。macOS 和 Windows 上的 Docker Desktop 会替你映射所有权。

放在反向代理后面时，把密钥放进 `.env`，或作为环境变量传入——数据源设置会故意拒绝被代理的请求——并加上你对外提供服务的主机名，例如 `GEV_ALLOWED_HOSTS=globe.example.lan`（见 [共享一个实例](#sharing)）。

</details>

<details>
<summary>仅 IPv6 的网络、重新构建，以及测试套件</summary>

启动器读取 IPv4 默认网关，所以仅 IPv6 的 Docker 网络找不到网关：它会记录 `No default gateway; Provider Settings stays loopback-only`，面板会拒绝每一次保存。在那里请手工把密钥放进 `.env`，或在阅读 [SECURITY.md](SECURITY.md) 之后用 `GEV_KEY_SETUP_TRUSTED_PEERS` 自己指定网关。

`node_modules` 故意留在镜像里，因此会活在一个匿名卷中，跨重启保留：一次改变了依赖的 `git pull` 之后，用 `docker compose down -v && docker compose up --build` 重建。镜像也会跳过 Puppeteer 的 Chromium 下载，这样镜像更小，但 `npm run test:track` 要留在宿主机上——`npm run build` 和 `npm test` 在容器里可以正常运行。

</details>

### <a id="power-up"></a>然后在应用里启动——不是在文件里

密钥是升级，不是前提。想要密钥时，点击右下角的 **启动** 芯片：数据源设置列出每一个支持的密钥、它会打开什么，以及去哪里获取。粘贴，点 **保存密钥**，应用会自己重启，并打开这项新能力。全部配置好之后，芯片会显示 **已启动**——如果紧凑布局把它藏起来了，`?setup=1` 会重新打开同一个面板。

- **密钥写到哪里：** Pinokio → 应用忽略的 `pinokio/ENVIRONMENT`；终端克隆 → 仓库根目录的 `.env`。任一文件都会在写入秘密之前先设成仅所有者可读。它们是本地明文文件，不进入 Git；应用用你的密钥去联系提供商。
- **你已经有的密钥仍归你：** 来自 shell 或 macOS 钥匙串的值会显示为 _外部配置_，面板里是只读的。
- **先拿什么：** 免费的 [Cesium ion](https://cesium.com/ion) 令牌（符合条件的个人、非商业用途；以当前条款和配额为准），用于照片级真实三维和世界地形；Google Maps 密钥只用于已开启计费的按量路径和 Google 地点搜索；想跟这个世界说话时再用 OpenAI。完整对照和费用见 [密钥与费用](#keys)。

<details>
<summary>较旧的 Pinokio 版本和凭据存储</summary>

不要在 Pinokio 8.0.40 自带的 **Configure** 面板里输入凭据：那个版本不能正确保存这个嵌套应用文件，而且会记录提交的值。请改用 GEV 里面的 **启动 → 数据源设置**。Pinokio 8.2 的公告修复的是安装；它并没有证明这个单独的 Configure 问题已经解决。在 macOS 上，通过 `./scripts/dev-fresh.sh` 使用钥匙串仍然是更稳妥的存储方式。

</details>

两条路径上服务器都绑定 **localhost**，数据源设置只回答来自你这台机器的请求。浏览器侧的密钥（Google Maps、Cesium ion）必须在提供商那里限制——[SECURITY.md](SECURITY.md) 说明怎么做，并和 [密钥与费用](#keys) 一起写明局域网共享规则。

---

## <a id="first-five"></a>🕐 最初五分钟

选一个首次运行任务，或按这个顺序试。GIF 展示的是 Google 照片级真实三维；你的起始底图取决于你添加了哪些密钥。

1. **把天空点亮。** 进入 **实时目标** 任务（或自己打开 **航班**）——成千上万架实时飞机，沿着真实遥测滑行，检测网格已经在读这个场景。点一架：相机锁定，身后画出尾迹，实时遥测卡片弹出来。
2. **接管操纵。** 在你跟踪的飞机上点 **座舱**，跟着它下降，中途切换传感器：从 NVG 到 Ironbow FLIR。

![在座舱视角里跟着一架实时飞机，并切换传感器模式](docs/media/06-cockpit-ar.gif)

3. **降到一座繁忙机场。** 搜索一座机场，打开 **3D** 飞机，降到滑行道上——地面上的目标、滑行尾迹，整个停机坪在实时运转。

![从整座机场的俯视降到近处滑行道，并用三维航班模型检视](docs/media/start-here/airport-ground-traffic-google-3d.gif)

4. **透过公共摄像头看。** 在奥斯汀、伦敦、加利福尼亚、芬兰或特拉华（实时视频）打开 **摄像头**。这些不是嵌入的网络摄像头——它们被投影 _进_ 三维城市。把覆盖切到 **VIEWSHED**，每台摄像头都会画出估计的覆盖体积——它能看到哪里，又在哪里失明。

![俯冲进奥斯汀的一个路口，实时公共摄像头被投影进三维场景](docs/media/03-austin-cctv.gif)

5. **跟踪轨道上的东西。** 打开 **卫星**，点击国际空间站——你沿着轨道距离跟着它飞，轨道环也在。

![跟踪国际空间站沿轨道飞越乌克兰](docs/media/14-iss-over-ukraine.gif)

6. **换光学系统。** 按 `1`–`7`——CRT、NVG、FLIR——整颗实时行星会用另一种传感器重新绘制。

![在同一个连续视角里，把密集的实时地球在 CRT、FLIR 和 NVG 之间切换](docs/media/01-style-sweep.gif)

7. **跟它说话** _（需要 OpenAI 密钥）_：_“带我去 LAX，并选中最近的空中飞机。”_
8. **回家。** 点 **重置地球**——或者直接说 _“缩小到地球视角。”_

**键盘：** `1`–`7` 视觉风格 · `H` HUD · `D` 检测 · `C` 座舱 · `` ` `` 帧率 · `Esc` 退出。触控板双指缩放地球。

---

## <a id="cockpit"></a>🛩️ 座舱

> 每架飞机都应该让你能这样做。

用实时航班数据做成的实时座舱模式：相机骑在你的目标上，真实地形一直托在下面，直到落地——传感器风格跟着走，**目标** 把 250 公里名册放在一次点击之外：从一架飞机跳到另一架，直接掉进下一座座舱。

![在实时飞机之间跳转，并直接进入座舱视角](docs/media/12-switch-aircraft-cockpit.gif)

座舱甚至自带一条简报带：附近的实时信号、区域头条，以及真实的本地天气——还有一个可选的 **WX** 模式，用你这架飞机周围的实际观测渲染体积云。

![一架实时军机目标在普通、NVG 和 Ironbow FLIR 之间切换，并带有密集检测](docs/media/start-here/military-cockpit-dense-google-3d.gif)

_座舱模式存在的原因：你骑在一架真实飞机上，飞过真实地形——而且你可以选择用哪种传感器看这个世界。_

---

## <a id="talk"></a>🎙️ 和它对话

> 语音可以使用 **OpenAI API 密钥**，或者在同一台机器上使用可选的、已登录的 **ChatGPT／Codex OAuth** 会话。API 密钥路径仍然是默认。在数据源设置里选择 ChatGPT OAuth，会复用已有的本地登录，或启动 Codex 的浏览器登录流程，完成后选用 OAuth。OpenAI 密钥仍然驱动 **AI HUD 摘要**：用情报风格、五个词的简短读数描述当前视角，并在你移动时重新生成。

OAuth 选项是实验性的。OpenAI 为 [Responses API](https://developers.openai.com/siwc/token-sharing-open-source/models-and-inference) 记录了 ChatGPT 套餐用量；复用 Codex 令牌的、受支持的第三方 Realtime 合同尚未确认。成功铸出一个令牌，并不构成计费或支持条款。

GEV 读取 Codex 的文件凭据，但不会写入或刷新它们。它检查令牌的形状和过期时间，并把过期登录报告为需要重新认证。登录按钮运行 `codex login`，只允许一次待处理的尝试，并报告退出失败或两分钟超时。`CODEX_HOME` 必须和 Codex 使用的目录一致。如果 `CODEX_AUTH_JSON` 指向别处，请单独登录，或在使用按钮之前先修正这个不一致。Codex 凭据存储必须使用 `auth.json`；仅钥匙串和仅内存的存储，GEV 读不到。在 Windows 上，登录按钮可能无法启动用 npm 安装的 Codex；请自己运行 `codex login`，然后再选 OAuth。见 [Codex 凭据存储](https://learn.chatgpt.com/docs/auth#credential-storage)。

要做一次实时语音检查，对着本地开发服务器运行 `node scripts/qa-voice-auth.mjs http://127.0.0.1:4189 oauth microphone.wav`。使用一段 WAV：前面三秒静音，后面是一句短的口头回答请求。把 `oauth` 换成 `api-key` 可以检查 API 密钥路径。这次检查会验证音频输入、一次完成的口头回答、用量、资源清理和重连。它把截图和不含凭据的结果保存在 `.gev-logs/voice-auth/`。

点击 **GEV MIC**，允许麦克风，然后直接说。这不只是一个语音遥控器：

- **🧠 它知道自己在看什么。** 代理在回答前会拉取实时场景上下文——包括坐标、街道名、活动图层和视角尺度。飞行中问 _“这是哪座城市？”_，它知道。
- **🎯 实体问答。** 点任意飞机、船舶或数据中心，问 _“这是什么？”_ 它用这个对象的实时遥测来回答。
- **👁️ 视觉落地。** 在街道尺度，它读取视口截图，辨认可读的招牌和建筑名，并被指示绝不编造标签。
- **🎬 电影构图。** _“给我看头顶的飞机”_ 会把相机拉远、转一个角度，像导演一样框住实时交通。
- **🔒 诚实，而且安全。** 代理只确认真正成功的动作。你的 `OPENAI_API_KEY` 不会进入浏览器；客户端只拿到一个短时会话令牌。如果你在数据源设置里选择 **使用 ChatGPT OAuth**，本地服务器只用那次登录来铸造同一种短时 Realtime 凭据，并对非回环客户端拒绝 OAuth 路径。

三十个工具，四项工作——下面这些命令直接来自产品的语音测试套件和工具手册：

**🎥 指挥它** — 无人机操作员式的相机动词：

> 🗣️ _“带我去东京。”_ · _“绕着这一带慢慢转。”_ · _“画出从国会大厦到 Zilker Park 的步行路线。”_ → _“沿着我们刚画的路线飞。”_ · _“缩小到地球视角。”_

**🖊️ 标注它** — 盖在真实世界上的白板：

> 🗣️ _“勾出德克萨斯州的轮廓。”_ · _“标注德克萨斯州议会大厦和它的场地”_ — 它画的是 **真实的外边界**，不是一个圆。 · _“埃菲尔铁塔离卢浮宫有多远？”_ — 会出现一条连接箭头，并说出距离。一切都会保留，直到你说 _“清空地图。”_

**✍️ 或者自己画** — 显示 ▸ **绘制**：选择区域、线条或标记，在真实世界上点击顶点，双击完成，再给它起名。同一块白板，同样会保留，不需要麦克风。

![Zilker Park 和 Lady Bird Lake 被语音画成三维城市上的持久矢量标注](docs/media/01-voice-annotate-zilker.gif)

![一段用语音测出的、横跨机场的距离，从轨道上检视](docs/media/04-airport-distance.gif)

**🔎 盘问它** — 对着实时图层做分析员查询：

> 🗣️ _“现在德克萨斯上空有多少航班？”_ · _“哪些船正驶向奥克兰？”_ · _“洛杉矶附近最大的火是哪一个？”_ · _“有没有东西飞在四万英尺以上？”_ · _“国际空间站下一次什么时候过境？”_ · _“视野里有多少个数据中心？”_

**🎛️ 操作它** — 整个控制台，双手放开：

> 🗣️ _“切换到夜视，并打开航班图层。”_ · _“打开摄像头视域。”_ · _“播放奥斯汀附近的一个新闻电台。”_ · _“跟踪那架飞机。”_ → _“进入座舱。”_

**还有速射这一档** — 每句一句：

> 🗣️ _“给我看全球基础设施。”_（摆出图层并拉回到地球） · _“播放轨道监视。”_（一段完整的电影场景） · _“把检测密度设成百分之五十。”_ · _“下一个目标——只要直升机。”_（座舱中途） · _“给我看太空任务。”_ · _“切换到 OSM。”_ · _“把图像稍微锐化一点。”_ · _“切换到战术布局。”_ · _“现在打开了什么？”_

![地球上铺开世界各地的电台，成为又一个实时图层](docs/media/15-global-radio-layer.gif)

_让它播放任何地方附近的电台，地球就开始广播——每个电台都是一个你可以飞过去的真实地点。_

---

**💬 也可以从 Claude 和 Codex 里问。** God's Eye View 也是一个 MCP 服务器：让 Claude Desktop、Codex 或 ChatGPT 桌面版展示一个地方，实时地球会直接在对话里打开。设置只要一分钟——见 [docs/MCP_SETUP.md](docs/MCP_SETUP.md)。

## <a id="globe"></a>🛰️ 地球上有什么

二十个图层和地图源。**其中十八个无需密钥。** 有些在有提供商密钥时会多出能力。（🟢 无需密钥 · 🟡 免费密钥 · 🔴 按量计费。）

| 图层 | 你得到什么 | 来源 | 认证 |
| --- | --- | --- | --- |
| 🗺️ **地图栈** | Esri 卫星影像、Google 照片级真实三维、OSM，以及更多由 ion 托管的栈 | Esri / Google / Ion / OSM | 🟢 Esri 卫星 + OSM · 🟡 ion 托管的 Google 三维 + 世界地形 · 🔴 直连 Google + 地点搜索 |
| ✈️ **实时航班** | 11000 架以上实时飞机 + 航路历史 | OpenSky + adsb.lol | 🟢（🟡 可选，用于更多轮询额度） |
| 🎖️ **军机** | 琥珀色的 ADS-B 军事交通，红色的紧急广播 | adsb.lol | 🟢 |
| 📡 **GNSS 完好性** | 区域导航精度评分；异常并不证实存在干扰 | adsb.lol、GPSJAM 聚合 | 🟢 |
| 🔥 **火灾边界** | 事件边界和报告的控制比例 | WFIGS / NIFC | 🟢 |
| 🚢 **实时船舶** | 全世界成千上万艘船 | AISStream | 🟡 |
| 🛰️ **卫星** | 838 个目标的目录，按类别着色，并有实时图例——**密集** 芯片会放进整个 Starlink 壳层 | CelesTrak | 🟢 |
| 🌍 **地震** | 全球地震活动，最近 24 小时 | USGS | 🟢 |
| ◍ **空气质量** | 按已发布的 1–10+ 健康风险刻度显示实时 AQHI，天气面板卡片给出等级图例和视野内的最高读数。**仅加拿大**——ECCC 是第一个登记的提供商 | ECCC MSC GeoMet | 🟢 |
| 🚗 **交通** | OSM 道路上的模拟车辆。有 TomTom 时，实时车流速度驱动模拟，并在约 8 公里以下给拥堵上色；单车位置不是实时观测 | TomTom + OSM | 🟢 模拟 · 🟡 实时车流速度 |
| 📹 **CCTV 网格** | 约 4000 台公共摄像头（共享上限）被投影 _进_ 三维空间——奥斯汀 · 德克萨斯（TxDOT） · 加利福尼亚（Caltrans） · 伦敦（TfL） · 安大略（511） · 芬兰（Fintraffic） · 不列颠哥伦比亚（DriveBC） · 爱沙尼亚（塔林，Tarktee） · 特拉华（DelDOT 实时视频） · 新南威尔士（Live Traffic NSW） · 卡尔加里 · 挪威（Statens vegvesen） · 多伦多 · 金县（华盛顿州） · 华盛顿（WSDOT） · 加泰罗尼亚（Servei Català de Trànsit），另加可选的纽约市（NYC DOT TMC，需要你自己的 NYC DOT 协议）和可选的立陶宛（Via Lietuva / Eismoinfo，照片许可未确认）。位置是发布的；姿态是估计先验，**你在摄像头本身上拖动控制器来标定** | 城市 API | 🟢 |
| 📷 **已测绘的 ALPR 摄像头** | OpenStreetMap 贡献者标注的车牌识别摄像头位置，按一座城市大小的视野加载，并有 **显示最近**。只有位置和标签：没有车牌数据，没有视频 | OpenStreetMap（含 DeFlock 测绘） | 🟢 |
| 📷 **街景** | 一个面板后面的街道照片，每个提供商一个芯片：街道上的覆盖、影像锥、内嵌查看器和 **跟随**。Mapillary、Google 街景、KartaView 和 Panoramax | Mapillary · Google · KartaView · Panoramax | 🟢 KartaView、Panoramax · 🟡 Mapillary 令牌 · 🔴 Google Maps 密钥 |
| 📻 **电台** | 带 **模拟调谐器** 的有地理位置的世界电台——把指针拖过最多 750 个电台，地球会飞到每一个广播者 | Radio Browser / 广播者 | 🟢 |
| 🚌 **公交** | 实时巴士、有轨电车、地铁、火车和渡轮，在两次报告之间延迟回放，选中车辆有尾迹，并按方式着色的 DETECT 标签——波士顿、奥斯汀、明尼阿波利斯、赫尔辛基、荷兰、挪威、昆士兰东南部，以及安大略的九个：多伦多（地面车辆；地铁不发布位置）、密西沙加、汉密尔顿、达勒姆区、约克区、圭尔夫、伯灵顿、巴里和金斯顿 | 运营商 GTFS-Realtime 数据源 | 🟢 |
| 🚲 **共享单车** | 实时站点可用数量 | GBFS | 🟢 |
| 🧭 **路线** | 在地球上点击 A 和 B，得到贴在地形上的驾车、步行或骑行路线和逐步转向——然后让相机沿着它飞。无需密钥、地理编码器或麦克风 | FOSSGIS 服务器上的 OSRM（OpenStreetMap） | 🟢 |
| 🔥 **活跃火点** | 实时 NASA FIRMS 检测，回溯 24 小时 | NASA FIRMS | 🟡 |
| 🚀 **太空任务** | 滚动 30 天的发射，含载荷、级和回收细节 | Launch Library 2 | 🟢（🟡 可选令牌会提高额度） |
| 🎖️ **已测绘设施** | 来自社区测绘、以视口为界的军事场地上下文——本质上不完整，并且就是这样标注的 | OpenStreetMap | 🟢 |
| 🌬️ **风** | 动画的 10 米预报风，可选速度、温度或气压色场，并在地图中心给出读数 | NOAA GFS / ECMWF IFS | 🟢 |
| 🌦️ **观测天气** | 同一条历史时间线上的降雨雷达（美国本土）、卫星云图（GOES 区域或全球红外，仅云或完整图像）和闪电密度（美洲和太平洋） | NOAA nowCOAST | 🟢 |
| 🌀 **气旋** | 大西洋和北太平洋东部／中部的警报位置、预报路径和不确定锥 | NOAA NHC / CPHC | 🟢 |

**天气，无需密钥。** **风** 用来自 NOAA GFS 或 ECMWF IFS 的 10 米预报流做动画，可选色场，并在地图中心给出读数。**降雨雷达**、**卫星云图** 和 **闪电密度** 是 **天气** 面板里同一条历史时间线上的观测（后退、**播放**、**最新**）；**气旋警报** 画出 NHC 和 CPHC 的位置、预报路径和锥。在 Google 3D Tiles 上，观测图层作为半透明壳浮在城市上方，并在你的视角周围变清晰。

在应用里，**数据图层** 把它们分成运动、摄像头、基础设施、事件、天气和工具。

**底图阶梯——每一档买到什么：**

| 你有 | 你得到的地球 |
| --- | --- |
| 🟢 什么都没有 | Esri World Imagery 卫星底图 + 免密钥地形，二维。Esri 不可达时自动改用 OSM；地形不可用时地球继续，只是没有地形 |
| 🟡 一个免费的 Cesium ion 令牌 | **Google 照片级真实三维城市** 和世界地形——符合条件的个人、非商业用途；以当前 ion 条款和配额为准 |
| 🔴 一个 Google Maps 密钥 | 同样的三维直接来自 Google，外加 Google 地点搜索——已开启计费的按量路径 |

![重建的猎鹰 9 号上升，爬升并弯进它的预计轨道](docs/media/08-falcon9-replay.gif)

_太空任务图层回放一次猎鹰 9 号上升——标注为 `RECONSTRUCTED ESTIMATE`，可在 0.25×–4× 之间拖动。_

**地球上还有：** 街区叠加 · 可选的座舱 WX 云效果。**捆绑的静态基础设施：** 数据中心（4351）、水坝（704）和海底电缆（712）。

![俯冲进巴哈马，并在地球下方揭示标注好的海底电缆路线](docs/media/09-undersea-cables.gif)

**缺一个你想要的图层？** 开一个 issue——或者自己加上，再发 PR。

---

## <a id="street"></a>📷 街景

> 任意提供商的街道照片都在同一个面板里。这个版本带有 **Mapillary**（免费的客户端令牌）、**Google 街景**（你的 Google Maps 密钥）、**KartaView** 和 **Panoramax**（无需密钥）。

**设置。** 在 [mapillary.com/dashboard/developers](https://www.mapillary.com/dashboard/developers) 注册一个具有 **Read** 权限的应用，并复制它的 **Client Token**（`MLY|…`）。把它粘贴进 **启动 → Mapillary**，或在 `.env` 里设置 `MAPILLARY_CLIENT_TOKEN` 后重启。没有它时，面板显示 **需要密钥**。**Google 街景** 使用 `GOOGLE_MAPS_API_KEY`，并要在 Google Cloud 里为它启用 **Maps JavaScript API**；它的芯片默认关闭，因为每一张全景都会计到这把密钥上。**KartaView** 和 **Panoramax** 什么都不需要：它们的公共 API 无需密钥。

**使用。** 在数据图层 → 摄像头下打开 **街景**，或用街景面板标题上的药丸。每个提供商有一枚自己颜色的芯片（Mapillary 为绿色），一次只亮一枚：点亮一枚会关掉其他的。免费的 Mapillary 默认点亮。**影像**（全部 / 360° / 平面）和 **起始于** 过滤器适用于 Mapillary、KartaView 和 Panoramax；街景全景都是 360°，所以点亮街景时过滤器和图例会隐藏。点击一条覆盖线得到它的影像锥，点击一个锥打开照片。点亮 **KARTAVIEW**（紫色）并放大到大约 6 公里以下：它的线是 KartaView 有照片的街道，点击一条会打开离点击最近的照片，平面或 360°（拖动环视），锥沿着这次行驶排开；**‹ ›** 或 ← → 沿行驶步进（Shift+← →、↑ ↓ 和 + − 环视 360° 照片；手机上双指缩放）。KartaView 已归档的照片会被跳过，如果全部都已归档，面板会说明。对 KartaView，**起始于** 按上传日期，和 KartaView 自己的地图一样（它不能按别的过滤），面板会在滑块下注明；KartaView 在自己的服务器上过滤这些线，一块它以前没画过的过滤区域可能要几秒，其间会显示未过滤的线。点亮 **PANORAMAX**（橙色）进入开放的联邦共享（在法国和比利时最强）：从轨道上看，点表示它有照片的地方，大约 60 公里以下的线是序列。点击一条线会打开该序列里离点击最近的照片，相机不移动，平面或 360°，锥沿着周围的序列排开；**‹ ›** 或 ← → 步进，两个过滤器都适用。说明文字写出照片的作者（或持有它的实例）和许可（大多是 CC BY-SA 4.0；IGN 实例上的照片是 Licence Ouverte 2.0）。在 **Google 3D** 地图上（Google 的条款让街景不出现在其他地图上），点亮 **GOOGLE STREET VIEW**，从 3 公里以下点击一条街，或按 **打开街景** 打开视图中心，以打开 Google 在那里的全景；沿着它的箭头走。照片上方：**展开**、**适应 / 填充**（Mapillary，以及平面的 KartaView 和 Panoramax 照片）和 **跟随**（地球相机跟随照片的视角；仅 Google 3D 地图）。说明文字链接到提供商网站上的图像，地球会署上每一个打开的提供商（“© Mapillary contributors, CC BY-SA 4.0”、“Street View imagery © Google”、“© KartaView contributors, CC BY-SA 4.0”、“© Panoramax contributors, licence per picture”）。KartaView 自己的照片页对未登录访客会失败，所以它的链接打开的是全尺寸照片。

拖动面板标题可以让面板浮动，并从任意边缘调整大小。双击标题或折叠它，把它放回栏里。分享链接携带提供商开关和过滤器（`0.m.0` 关闭 Mapillary，`0.m.0_0.r.google-1` 打开街景，`0.m.0_0.r.google-0*kartaview-1*panoramax-0` 打开 KartaView，`0.m.0_0.r.google-0*kartaview-0*panoramax-1` 打开 Panoramax，按应用写出的样子（`0.m.0_0.r.kartaview-1` 和 `0.m.0_0.r.panoramax-1` 也可以；省略 `m` 的链接保持 Mapillary 这个默认项点亮），`0.p.p` 只要全景，`0.s.365` 最近一年）。要添加一个提供商，实现 `src/layers/streetLevel/registry.js` 里的契约，并在 `src/app/layers/streetLevel.js` 里登记。

## <a id="missions"></a>🎖️ 外勤任务

基础操作顺了之后，跑这些：

| 任务 | 怎么做 |
| --- | --- |
| **🚁 问这颗行星** | _“为什么这些军用直升机都在转圈？”_ 选中一条军机航迹——它会静默补上大约 24 小时的真实轨迹历史——再看它一直在做什么，解析成叠起来的三维环。 |
| **✈️ 最后进近** | 点击跟踪一架正在对正跑道的客机，跳进 **座舱**，跟着它下降。 |
| **🌃 夜巡** | 飞到你自己的城市，切换到 **NVG**，让检测网格和 HUD 读这个场景。 |
| **🚢 进港** | 在长滩港上方打开船舶。点一艘油轮，看它的战术卡片和尾迹——然后在 CCTV 面板里点 **最近**，透过公共摄像头看同一片水。 |
| **📻 东京 FM** | 打开 **电台** 图层绕着涩谷转——然后拖动模拟调谐指针：每一个位置都会吸到一个真实电台，地球飞到正在广播的那一家。 |
| **🔥 火线** | 在加利福尼亚上方打开 FIRMS。点一个检测——相机俯冲过去——读强度，再在 CCTV 面板里点 **最近** 看地面。 |
| **🚶 要一条步行路线** _🎙️_ | 告诉这个世界你想去哪里，看一条真实的沿街路线自己穿过三维城市——然后 _“飞过去”_：带坡度的转弯、缓和的两端，相机像无人机镜头一样领着这条路。 |
| **📏 量 LAX 到 DFW** _🎙️_ | _“LAX 离 DFW 有多远？”_ — 一支箭头跨过整个国家，距离落在说明里，端点在你环绕时仍然钉在真实世界上。 |
| **🚀 发射回放** | 打开 **太空任务**，选最近 30 天里的一次发射，从 T 减倒计时骑过上升到入轨——在 0.25×–4× 之间拖动。标注为 `RECONSTRUCTED ESTIMATE`，因为它就是一次估计。 |
| **🪦 走过骨场** | 从区域上下文降进密集、完全解析的退役飞机行列。 |
| **🏗️ 环绕三峡** | 一眼扫过大坝和它的地形——然后打开 **水坝** 图层，再找到另外 703 座。 |

_🎙️ = 语音任务——它们需要 OpenAI 密钥。_

![把选中飞机最近的飞行路径解析成地形上方叠起的三维环](docs/media/07-helicopter-loops.gif)

_问这颗行星：一个军机目标最近约 24 小时的真实轨迹历史，解析成叠起的三维环。_

![要一条步行路线，并沿着生成的路径飞过三维城市](docs/media/10-walking-route-flythrough.gif)

_“画出步行路线……现在飞过去”——带坡度的转弯、缓和的两端，相机像无人机镜头一样领着这条路。_

![从区域上下文降进骨场里密集的退役飞机行列](docs/media/08-boneyard.gif)

_走过骨场：一排排退役机体，在三维里完全解析。_

---

## <a id="hood"></a>🔧 底层原理

地球如何处理实时数据：

- **世界稳定的图标。** 飞机和船舶在每一个相机角度都沿着它们的 _真实世界航向_ 指向——无论是否被跟踪，无论垂直向下还是掠过地平线——靠的是逐帧的屏幕空间航向投影。不打转，不锁在视口上。
- **用断续的数据做出平滑运动。** 实时数据源每 15–30 秒来一次；地球渲染在真实时间后面一个间隔，并在已知定位之间插值。缺口用航位推算补上。
- **诚实的卫星。** 用 SGP4 传播，轨道环通过 GMST 重对齐保持锁在卫星上——不漂移，不每秒闪一下。
- **贴在真实地面上。** 实体高度与 Google 3D 瓦片对齐，因此飞机停在停机坪上，摄像头立在街角，而不是悬在空中。
- **缓存和请求预算。** OpenSky 额度调节器、TomTom 每日瓦片预算，以及磁盘缓存的 TLE，减少重复请求。这些控制不能代替提供商的配额或计费控制。
- **服务器侧凭据。** 每一个碰到私有密钥的 API（OpenAI、AISStream、OpenSky OAuth、摄像头帧）都经过加固的服务器侧代理，带有 SSRF 防护、响应上限和清洗过的错误。浏览器能看到的密钥只有 Google Maps 和 Cesium ion（两者都要在提供商那里限制）。
- **没有框架。** 原生 JavaScript、**CesiumJS** 和 **Vite**——再加上行星用的 **Google 照片级真实 3D Tiles**，以及语音用的 **OpenAI Realtime API**。读起来快，改起来也快。

```
src/
├── main.js                 # 引导：Google 3D 瓦片、图层登记
├── ui.js                   # 运行时界面——面板、HUD、风格、控制门面
├── hud.js                  # 情报 HUD + AI 场景摘要
├── keySetup.js             # 启动面板——应用内的提供商密钥（仅开发服务器）
├── mapStackController.js   # 底图切换——Google 3D / Esri / OSM / ion 栈
├── voice/                  # OpenAI Realtime 会话 + 30 个语音工具
├── layers/                 # 图层组件——天气、风、气旋、公交、ALPR……
├── data/                   # 每个图层一个模块 + 编排 + 上下文存储
│   ├── iconOrientation.js  # 屏幕投影航向 + 地平线剔除
│   └── local_data/         # 捆绑数据集（按文件夹记录来源）
└── scenes/                 # 电影场景导演
```

权威的运行时参考见 [`docs/CURRENT-STATE.md`](docs/CURRENT-STATE.md)。

---

## <a id="keys"></a>🔑 API 密钥

🟢 **无需密钥** · 🟡 **免费密钥** · 🔴 **按量计费**

用 **启动 → 数据源设置** 添加密钥。下面的表说明每个提供商打开什么；开始时一个都不需要。存储和配置细节见 [设置说明](#power-up)。

风、降雨雷达、卫星云图、闪电密度、气旋警报、已测绘的 ALPR 摄像头、公交、路线、特拉华实时视频，以及坐标或捆绑地点搜索，都不需要密钥。正在等一把密钥的图层行会写出它的名字。

### 选择你想要的能力

七把密钥。五把有免费档，两把 🔴 是按量计费：

| | 密钥 | 为什么 | 去哪里拿 |
| --- | --- | --- | --- |
| 🟡 | **Cesium ion** | 🗺️ Google 照片级真实三维、世界地形，以及更多 ion 托管的影像栈。免费的 Community 计划面向符合条件的个人、个人／非商业用途，并有配额 | [cesium.com/ion](https://cesium.com/ion) — 使用公开的 `assets:read` 令牌，并核对当前的 [定价／资格](https://cesium.com/platform/cesium-ion/pricing/) |
| 🔴 | **Google Maps** | 直连 Google 照片级真实三维、Google 地点搜索和街景（[Map Tiles API](https://developers.google.com/maps/documentation/tile)；街景还需要 Maps JavaScript API） | [Google Cloud Console](https://console.cloud.google.com/) — 用 URL 限制它 |
| 🔴 | **OpenAI** | 🎙️ 通过 API 密钥使用语音 + AI HUD 摘要。数据源设置也提供 **使用 ChatGPT OAuth**，用于云端语音，同时不移除 API 密钥选项 | [platform.openai.com](https://platform.openai.com) — API 密钥用量按量计费，费用见下 |
| 🟡 | **AISStream** | 🚢 实时的全球船舶 | [aisstream.io](https://aisstream.io) — 免费注册 |
| 🟡 | **NASA FIRMS** | 🔥 实时活跃火点 | [firms.modaps.eosdis.nasa.gov](https://firms.modaps.eosdis.nasa.gov/api/map_key/) — 免费 |
| 🟡 | **TomTom** | 🚦 模拟交通图层的实时车流速度和拥堵颜色 | [my.tomtom.com](https://my.tomtom.com/keys) — 有免费档 |
| 🟡 | **Mapillary** | 📷 街景覆盖和照片。按设计是公开的客户端令牌（见 SECURITY.md） | [mapillary.com/dashboard/developers](https://www.mapillary.com/dashboard/developers) — 注册一个应用，复制它的 Client Token |

![从城市尺度的实时拥堵直接俯冲进一个路口的公共摄像头](docs/media/05-traffic-to-cctv.gif)

_TomTom 密钥买到的是：高峰密度画在城市上——然后从拥堵里直接俯冲进看着它的摄像头。_

### 锦上添花

| | 密钥 | 为什么 | 去哪里拿 |
| --- | --- | --- | --- |
| 🟡 | **OpenSky** | ✈️ 更多航班轮询额度（🟢 匿名不用它也能工作） | [opensky-network.org](https://opensky-network.org) |
| 🟡 | **Launch Library 2** | 🚀 更高的太空任务请求额度（🟢 不用它也能工作） | [thespacedevs.com](https://thespacedevs.com) |

需要更高轮询额度时再加这些。

`npm run doctor` 报告 Node／npm 是否就绪、主要提供商路径，以及每个已配置的提供商是在哪里找到的，同时不打印凭据的值。在 macOS 上，它那份认得钥匙串的结果会预览 `./scripts/dev-fresh.sh`；普通的 `npm run dev` 只读取显式的环境和 Vite dotenv 值。OpenSky 摘要对显式的 `anon`、或没有客户端对的 OAuth 模式报告免密钥匿名访问，对完整的 OAuth 对只保留“是否存在”的措辞，并识别所选的 Basic 或自动模式，而不猜测运行时会接受哪些凭据。Basic 和凭据文件模式仍然是 `dev-fresh.sh` 的高级配置。

<details>
<summary>高级设置：环境变量和 macOS 钥匙串</summary>

无头机器、编程代理或脚本化设置：

```bash
# 把密钥放进 .env（见 .env.example），或作为环境变量传入：
OPENAI_API_KEY="…" AISSTREAM_API_KEY="…" npm run dev -- --host localhost --port 4173

# 在 macOS 上，把其中任意一把存进钥匙串，dev-fresh.sh 会把它们取出来：
security add-generic-password -U -s "google-maps-api" -a "api-key" -w
security add-generic-password -U -s "openai-api"      -a "api-key" -w
security add-generic-password -U -s "aisstream-api"   -a "api-key" -w
security add-generic-password -U -s "firms-map"       -a "map-key" -w
security add-generic-password -U -s "cesium-ion"      -a "token"   -w
```

OpenSky 可以完全匿名运行（`OPENSKY_AUTH_MODE=anon`），或用 `./scripts/opensky-import-client.sh /path/to/credentials.json` 导入 OAuth 凭据。

</details>

<details>
<summary>实时视频摄像头（HLS）</summary>

带有 `"feedType": "hls"` 和已登记的 HTTP(S) `.m3u8` URL 的 CCTV 源，通过一个懒加载的 hls.js 解码器播放，监视平面和面板共用它。DelDOT 使用它官方的 HTTPS HLS 目录链接。用 `CCTV_DELDOT_ENABLED=0` 关闭这个包。

服务器允许两个并发会话。每个会话最多保留 12 个分片和 24 MiB 内存；单次下载上限 4 MiB，时限十秒。没有分片文件，也没有 ffmpeg 进程。重定向、跨源引用、加密播放列表和非 MPEG-TS 分片会被拒绝。每个解码器有自己的客户端租约（每个会话最多八个），包括原生 HLS。关闭它只释放那一份租约；被丢下的租约在 15 秒没有访问后过期。最后一次释放会停掉上游工作。失败的实时视频使用现有的静帧／街景／合成回退，那不是实时视频。这个集成不支持仅 RTMP 的源。

</details>

### 💸 实际要花多少

诚实的数字，大致按 2026 年中——始终以提供商的定价页为准：

| | 费用实情 |
| --- | --- |
| **🟢 大多数图层** | **0 美元，不用注册。** OpenSky 匿名、USGS、CelesTrak、adsb.lol、城市 CCTV、Radio Browser、GBFS、Launch Library 2、公交数据源、OSRM 路线、NOAA 和 ECMWF 天气、OpenStreetMap 的 ALPR 测绘、捆绑数据集。 |
| **🟡 免费密钥这一档** | **注册后 0 美元。** AISStream、FIRMS、TomTom、OpenSky，以及符合个人／非商业用途资格的 Cesium ion。提供商配额和资格仍然适用。 |
| **🗺️ Google 三维瓦片** | **通过符合资格的 Cesium ion Community 账号，在其配额内免费；通过直连 Google 密钥则按量计费。** 要 Google 地点搜索或商业部署时走直连，核对当前的提供商条款，并在开启计费的地方设置预算警报。 |
| **🔴 OpenAI 语音** | API 密钥会话保留实时花费读数、STD／MINI 模型开关、2 美元警告和 **5 美元硬上限**。ChatGPT OAuth 是数据源设置里的显式选择。它的用量会被跟踪，但没有 API 美元估计，也没有花费上限。语音上下文窗口故意保持很短。 |

Google 的直连三维路径出乎意料地大方：目前每个月前 1000 次照片级真实 3D Tiles 会话免费，一次根请求大约支撑三小时渲染。一个节省使用的单独用户，实际上可以留在免费用量之内。计费仍然必须开启，所以要限制密钥，并设置配额或预算警报。在依赖这些数字之前，先看 Google 的 [当前定价](https://developers.google.com/maps/billing-and-pricing/pricing)。

### 🧗 地板故意放得很低

上面这一切是故意做便宜的基线——足够让你真正尝到地理空间情报、GEOINT 和 OSINT 的味道，而不必跟销售谈。你也会看见天花板：陆地 AIS 到了大洋中部就安静了，卫星 AIS 要花真钱；高级影像、SAR 和更深的商业数据源活在企业合同后面。这不是架构的限制——这里的每一个图层都是一个模式，你可以把它指向自己的数据源。这个仓库把地基交给你；你往里面融合什么，由你决定。

### <a id="sharing"></a>🔒 共享一个实例

默认没有别人能碰到你的服务器——它绑定 localhost。要在局域网里共享，请显式选择（`npm run dev -- --host 0.0.0.0 --port 4173`，或在 macOS／Linux 上 `HOST=0.0.0.0 ./scripts/dev-fresh.sh`）。IP 地址照原样可用；如果你用局域网主机名，用 `GEV_ALLOWED_HOSTS=globe.lan` 加上它，因为绑定到 `0.0.0.0` 并不会信任任意 Host 头。但要知道 ⚠️ **一台局域网可见的服务器，会把你配置的 API 密钥代理给任何一个够得到它的人。** 花钱的端点默认按 IP 限流（`GEV_RATELIMIT_OPENAI_PER_MIN`、`GEV_RATELIMIT_GOOGLE_PER_MIN`——调它们见 `.env.example`），但在一切之前，**先配置提供商配额、用量限制和计费警报**：应用层限流不是计费上限，单独一个预算警报也不会停止花费。完整威胁模型见 [SECURITY.md](SECURITY.md)。

服务器被共享时，数据源设置会停用，所以远程用户进不了密钥输入面板。

**这个启动器的 Pinokio 局域网和 Cloudflare 共享仍然关闭。** 如果需要远程访问，请使用单独审查过的认证代理。[SECURITY.md](SECURITY.md) 解释了限制和威胁模型。

---

## <a id="responsible"></a>📋 责任与开放

God's Eye View 跑在 **公开数据、清楚的来源和本地优先的执行** 上。没有秘密，没有私有数据集，没有来路不明的抓取——任何涉及私有密钥的东西都在服务器侧代理。它有一间机密作战室的视觉语法，却完全由开放信号和可检查的代码建成。

**那条线。** 这个项目建模的是 **事件、资产、基础设施和系统**——飞机、船舶、卫星、火、摄像头、城市。它不为点名搜索、人脸识别或跟踪个人做功能，越过这条线的拉取请求不会被合并。人在这里不是一种查询类型。

**来一起做。** 这是那个掀起最近一波空间情报工具的项目里，正典的实时三维客户端——它也是一块画布：这里的图层是一个人能找到并融合的信号。加一个城市包、一个数据源、一种风格、一个语音工具。它是你看见世界的那扇窗；把这扇窗带给别人。

**状态：** 一个仍在演进的开源客户端，用于探索和学习——一个快、可以改的地基，不是加固过的生产服务。以 **[MIT 许可证](LICENSE)** 发布。捆绑和实时数据集有它们自己的条款——见 **[DATA_SOURCES.md](DATA_SOURCES.md)**。安全模型：**[SECURITY.md](SECURITY.md)**。想贡献？**[CONTRIBUTING.md](CONTRIBUTING.md)**。

**维护者：** [Halfpixel](https://halfpixel.ai) 的 [Bilawal Sidhu](https://github.com/bilawalsidhu) 和 [Sameh Khamis](https://github.com/samehkhamis)。

<sub>媒体说明：本页的捕捉 GIF 展示 Google 照片级真实 3D Tiles 和实时数据图层，带画面内署名用于宣传；它们没有被许可单独再使用。见 [媒体来源与许可](docs/media/README.md)；完整的来源条款见 [DATA_SOURCES.md](DATA_SOURCES.md)。</sub>

> [!IMPORTANT]
> God's Eye View 是对公开数据和第三方数据的探索性可视化。
> 数据可能延迟、不完整、被建模、被推断，或是错的。不要把它用于飞行或海上导航、应急响应、医疗或健康决定、投资决定，或其他安全关键或运行用途。重要信息请向权威来源核实。

---

## <a id="next"></a>🧭 接下来

首先——谢谢。谢谢每一个看过上帝视角演示、然后自己去做的人，也谢谢每一个一直来要代码的人：我心存感激。当我问这件事该不该开源时，你们的态度并不含糊：

<img src="docs/media/open-source-survey.png" alt="关于是否开源 God's Eye View 的社区调查" width="460">

所以它在这里了。走进这座间谍惊悚片的座舱——只不过数据是真的——让我们把它变成理解这个世界的共享沙盒，并且玩得开心。这个仓库是基线，它保持开放，整个意义就是让你拆东西，再接上我们还没想到的图层。

来自里面的一句提醒：在这个领域做一周，你就会明白 **当下是便宜的那一部分**。一旦你想回到过去——以任何真正的分辨率去切片、分发和拖动 _发生过什么_ 以及 _改变了什么_——数据会变贵，计算会变得残酷。那是长远的局。

**更新——托管版本正在到来。** 我们原本计划把这个仓库留作开源客户端，并另做一个专业产品。然后发布发生了，最大声的请求不是又一个功能——而是 _“给我一个链接就行。”_ 所以我们正在 [Halfpixel](https://halfpixel.ai) 做一个官方托管的 God's Eye View：不用安装，在浏览器里打开就行。托管版是进入这个开源项目最容易的路。很快还有更多。

---

<div align="center">

▶️ [观看 God's Eye View 系列](https://youtube.com/playlist?list=PL6qSg2I-7_koPbDnSMo0QeeHX_RknA2uv&si=nBGYMoHWQw41v93Q) · 📬 [Map the World](https://maptheworld.ai/) — 这个项目背后的通讯

**🌐 God's Eye View。不留任何地方。**

</div>
