# DSH for VS Code 🐳

[![Лицензия: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Звёзды GitHub](https://img.shields.io/github/stars/tonulls/dsh-vscode?style=social)](https://github.com/tonulls/dsh-vscode)

**Русский** | [English](docs/README.EN.md) | [简体中文](docs/README.zh.md)

Используйте веб-интерфейс [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) во встроенной панели VS Code. Расширение запускает `dsh web` или подключается к уже работающему сервису, чтобы DSH и рабочие файлы были доступны в одном окне.

## Установка и запуск

Требования: VS Code 1.91 или новее и установленная команда `dsh` из [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

Скачайте файл `.vsix` из [GitHub Releases](https://github.com/tonulls/dsh-vscode/releases). В VS Code откройте палитру команд (`Ctrl+Shift+P` / `Cmd+Shift+P`), выполните **Extensions: Install from VSIX...** и выберите скачанный файл.

После установки нажмите значок DSH на левой или правой боковой панели. Расширение автоматически подключится к работающему DSH либо запустит `dsh web`. По умолчанию браузер отдельно не открывается. Сборка VSIX из исходников ветки [`tonulls`](https://github.com/tonulls/dsh-vscode/tree/tonulls) описана в [подробном руководстве](docs/user-guide.ru.md).

Управление службой и основные настройки доступны из панели DSH, строки состояния и палитры команд (`Ctrl+Shift+P` / `Cmd+Shift+P`).

## Проверка и диагностика

<details>
<summary>Показать способы проверки и устранения неполадок</summary>

- Проверьте, что `dsh` запускается из терминала и что нужная версия DSH установлена.
- Откройте **DSH: Show Logs** из палитры команд. Команда **DSH: Copy Logs** копирует диагностический журнал для анализа.
- Если панель просит войти, используйте ссылку запуска DSH с токеном. Для службы, запущенной расширением, авторизация обычно выполняется автоматически; для вручную запущенной службы может потребоваться вставить ссылку один раз.
- Bridge отвечает за переходы к файлам, внешние ссылки и интеграцию буфера обмена. Диагностика и повторная установка доступны командами **DSH: Retry Bridge Install** и **DSH: Uninstall Bridge**.

Подробности — в разделах [авторизация](docs/user-guide.ru.md#-авторизация-dsh-012-и-локальный-relay) и [Bridge](docs/user-guide.ru.md#-интеграция-bridge). Перед отправкой журналов проверьте, что в них нет токенов или других секретов.

</details>

## Остановка и удаление

<details>
<summary>Показать команды остановки и удаления</summary>

- Чтобы остановить службу, запущенную расширением, выполните **DSH: Stop Service** из палитры команд или заголовка панели.
- Чтобы удалить расширение, откройте **Extensions**, выберите **DSH** и нажмите **Uninstall**.

Удаление расширения не удаляет историю DSH и данные аккаунтов из профиля DSH. Если нужно отдельно удалить Bridge, выполните **DSH: Uninstall Bridge** до удаления расширения.

</details>

## Документация и разработка

- [Подробное руководство на русском](docs/user-guide.ru.md)
- [English user guide](docs/user-guide.en.md)
- [中文使用指南](docs/user-guide.zh.md)
- [Английская краткая страница](docs/README.EN.md) · [Китайская краткая страница](docs/README.zh.md)
- [История изменений](docs/CHANGELOG.md)
- [Разработка и вклад в проект](docs/CONTRIBUTING.md)
- [Сообщить об ошибке](https://github.com/tonulls/dsh-vscode/issues)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо Fengze233 и участникам оригинального проекта за создание и развитие DSH for VS Code, а также сообществу за сообщения об ошибках и предложения. Расширение распространяется по лицензии [MIT](LICENSE); подробности авторства приведены в исходном проекте и истории изменений.

🛠️ Модифицировано с помощью Codex
