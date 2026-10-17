# 中文语言包（fork 独立目录）

简体中文界面在这个目录里，不在上游的 `src/i18n/locales/`。

从上游合并新代码时，Git 不会改这里的文件，因为上游仓库没有 `i18n-local/`。词条不会被盖掉。

会一起改动、合并时可能冲突的只有几处挂钩：

- `src/i18n/locale.js`（语言列表里的 `zh`）
- `src/i18n/index.js`（加载 `zh.json`）
- `scripts/i18n.mjs`（校验时读这个目录）
- `scripts/package-boundaries.json`（每个引用 `ru.json` 的分组也列出本目录的 `zh.json`）
- `src/ui/localePicker.test.mjs`（语言顺序断言）

冲突解决后，或这几处被上游版本盖掉之后，在仓库根目录运行：

```sh
node i18n-local/relink.mjs
```

它会把挂钩接回去，不会改 `zh.json`。

界面用 `?lang=zh` 打开，或用右下角地球按钮选「中文」。浏览器语言是 `zh-CN` / `zh-TW` 时也会落到 `zh`。

上游新增英文文案后：

```sh
npm run i18n -- --missing zh
```

把缺的键补进 `zh.json`。占位符 `{name}` 必须和英文完全一致。中文复数只有 `other`。故意保持英文的词写在 `same-as-english.json` 的 `zh` 列表里。
