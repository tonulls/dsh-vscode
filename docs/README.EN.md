# DSH for VS Code 🐳

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/tonulls/dsh-vscode?style=social)](https://github.com/tonulls/dsh-vscode)

[Русский](../README.md) | **English** | [简体中文](README.zh.md)

Use the [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) web interface inside a VS Code sidebar. The extension starts `dsh web` or connects to an existing service, keeping DSH and your project files in one window.

## Install and start

Requirements: VS Code 1.91 or later and the `dsh` command from [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

Download the `.vsix` file from [GitHub Releases](https://github.com/tonulls/dsh-vscode/releases). In VS Code, open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`), run **Extensions: Install from VSIX...**, and select the downloaded file.

After installation, click the DSH icon in the left or right sidebar. The extension connects to a running DSH service or starts `dsh web` automatically. It does not open a separate browser window by default. See the [full user guide](user-guide.en.md) for building a VSIX from the [`tonulls` branch](https://github.com/tonulls/dsh-vscode/tree/tonulls).

Service controls and common settings are available from the DSH panel, status bar, and Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).

## Check and troubleshoot

<details>
<summary>Show diagnostic steps</summary>

- Confirm that `dsh` runs in a terminal and that the intended DSH version is installed.
- Open **DSH: Show Logs** from the Command Palette. **DSH: Copy Logs** copies diagnostic output for review.
- If the panel asks you to sign in, use the DSH launch URL with its token. Authentication is usually automatic for a service started by the extension; a manually started service may require pasting the URL once.
- The bridge provides file navigation, external links, and clipboard integration. Use **DSH: Retry Bridge Install** or **DSH: Uninstall Bridge** to manage it.

See the [authentication](user-guide.en.md#-dsh-012-authentication--the-local-relay) and [bridge](user-guide.en.md#-bridge-integration) sections for details. Remove tokens and other secrets before sharing logs.

</details>

## Stop and uninstall

<details>
<summary>Show stop and uninstall instructions</summary>

- To stop a service started by the extension, run **DSH: Stop Service** from the Command Palette or panel title bar.
- To remove the extension, open **Extensions**, select **DSH**, and choose **Uninstall**.

Removing the extension does not delete DSH conversation history or account data stored in a DSH profile. To remove the bridge separately, run **DSH: Uninstall Bridge** before uninstalling the extension.

</details>

## Documentation and development

- [Full user guide (English)](user-guide.en.md)
- [Подробное руководство на русском](user-guide.ru.md)
- [中文使用指南](user-guide.zh.md)
- [简体中文 quick start](README.zh.md)
- [Changelog](CHANGELOG.md)
- [Contributing](CONTRIBUTING.md)
- [Report an issue](https://github.com/tonulls/dsh-vscode/issues)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Acknowledgements and license

Thanks to Fengze233 and the original DSH for VS Code contributors for creating and maintaining the extension, and to the community for issue reports and suggestions. This extension is distributed under the [MIT License](../LICENSE); attribution details are available in the original project and changelog.

🛠️ Modified with Codex
