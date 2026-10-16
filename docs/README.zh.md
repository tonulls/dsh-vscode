# DSH for VS Code 🐳

[![许可证：MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../LICENSE)
[![GitHub 星标](https://img.shields.io/github/stars/tonulls/dsh-vscode?style=social)](https://github.com/tonulls/dsh-vscode)

[Русский](../README.md) | [English](README.EN.md) | **简体中文**

在 VS Code 侧边栏中使用 [DeepSeek Harness（DSH）](https://github.com/deepseek-ai/deepseek-harness) 网页界面。扩展会启动 `dsh web`，或连接到已运行的服务，让 DSH 与项目文件在同一个窗口中使用。

## 安装与启动

要求：VS Code 1.91 或更高版本，并已安装 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 提供的 `dsh` 命令。

从 [GitHub Releases](https://github.com/tonulls/dsh-vscode/releases) 下载 `.vsix` 文件。在 VS Code 中打开命令面板（`Ctrl+Shift+P` / `Cmd+Shift+P`），运行 **Extensions: Install from VSIX...**，然后选择下载的文件。

安装后，点击左侧或右侧侧边栏中的 DSH 图标。扩展会连接到正在运行的 DSH 服务，或自动启动 `dsh web`。默认不会另外打开浏览器窗口。从 [`tonulls` 分支](https://github.com/tonulls/dsh-vscode/tree/tonulls)构建 VSIX 的方法见[完整使用指南](user-guide.zh.md)。

服务控制和常用设置可在 DSH 面板、状态栏和命令面板（`Ctrl+Shift+P` / `Cmd+Shift+P`）中使用。

## 检查与故障排查

<details>
<summary>显示诊断方法</summary>

- 在终端确认 `dsh` 命令可以运行，并且已安装预期版本的 DSH。
- 在命令面板中运行 **DSH: Show Logs** 查看日志；**DSH: Copy Logs** 可复制诊断信息。
- 如果面板要求登录，请使用包含 token 的 DSH 启动链接。扩展启动的服务通常会自动登录；手动启动的服务可能需要粘贴一次该链接。
- Bridge 提供文件跳转、外部链接和剪贴板集成。可通过 **DSH: Retry Bridge Install** 或 **DSH: Uninstall Bridge** 管理它。

详情请参阅[身份验证](user-guide.zh.md#-dsh-012-鉴权与本地代办)和 [Bridge](user-guide.zh.md#-桥接与联动)章节。分享日志前请删除 token 和其他秘密信息。

</details>

## 停止与卸载

<details>
<summary>显示停止和卸载方法</summary>

- 要停止由扩展启动的服务，请在命令面板或面板标题栏中运行 **DSH: Stop Service**。
- 要卸载扩展，请打开 **Extensions**，选择 **DSH** 并点击 **Uninstall**。

卸载扩展不会删除 DSH 配置文件中保存的对话历史或账户数据。如需单独移除 Bridge，请先运行 **DSH: Uninstall Bridge**。

</details>

## 文档与开发

- [完整使用指南（简体中文）](user-guide.zh.md)
- [Подробное руководство на русском](user-guide.ru.md)
- [Full user guide (English)](user-guide.en.md)
- [English quick start](README.EN.md)
- [更新日志](CHANGELOG.md)
- [参与贡献](CONTRIBUTING.md)
- [反馈问题](https://github.com/tonulls/dsh-vscode/issues)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## 致谢与许可证

感谢 Fengze233 和原始 DSH for VS Code 项目的贡献者创建并维护此扩展，也感谢社区提交问题和建议。本扩展使用 [MIT 许可证](../LICENSE)；作者信息详见原项目和更新日志。

🛠️ 使用 Codex 修改
