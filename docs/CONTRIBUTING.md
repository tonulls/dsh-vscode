# Contributing

Thanks for your interest in contributing!

## Development

Requirements: Node.js ≥ 22, VS Code ≥ 1.91, and the `dsh` CLI from
[deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) on PATH.

```bash
npm install
npm run typecheck
npm run compile
```

Press `F5` in VS Code to launch the Extension Development Host.

## Conventions

- Основной README проекта — `../README.md` (русский); английская и китайская версии находятся рядом в `README.EN.md` и `README.zh.md`. Синхронизируйте переводы при изменении пользовательской документации.
- Сохраняйте runtime-переводы синхронными между `src/i18n.ts` (en/zh/ru) и статическими файлами `package.nls*.json`.

## Submitting changes

Open a pull request; CI runs typecheck and packages a VSIX. Bug
reports and feature requests go through the issue templates.
