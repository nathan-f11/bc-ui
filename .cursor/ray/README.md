# Ray — 项目内安装

Ray 工作流已安装到本仓库，供 Cursor Agent 使用。

## 路径

| 用途 | 路径 |
|------|------|
| Skills | `.cursor/skills/ray/` |
| 工具脚本 | `.cursor/ray/scripts/search.py` |
| 插件元数据 | `.cursor/ray/plugin.json` |

Agent 执行 Ray skill 时，`{ray_plugin_path}` 解析为：

```
.cursor/ray
```

示例：

```bash
python3 .cursor/ray/scripts/search.py --init --project-dir .
```

## 可用命令

| 命令 | 用途 |
|------|------|
| `/trace` | 开发者需求入口（技术 trace） |
| `/propose` | 产品经理需求入口 |
| `/pipeline` | trace 确认后启动开发流水线 |
| `/origin` | 引导活文档系统（新项目） |
| `/explore` | 快速了解项目 |
| `/ship` | 创建 PR |

完整说明见源仓库 README：`/Users/iwalking11/AI/skills/ray/README.md`

## 更新

从本地 Ray 源同步：

```bash
cp -r /Users/iwalking11/AI/skills/ray/skills/* .cursor/skills/ray/
cp /Users/iwalking11/AI/skills/ray/scripts/search.py .cursor/ray/scripts/
```
