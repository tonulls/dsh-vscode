/** Минимальная часть VS Code API для открытия URI подходящим редактором. */
export interface VscodeResourceOpener {
  Uri: { file(path: string): unknown };
  commands: {
    executeCommand(command: string, ...args: unknown[]): PromiseLike<unknown>;
  };
}

/**
 * Открыть ресурс через штатный selector VS Code: текст — редактор текста, изображение/PDF — preview,
 * неизвестный бинарный формат — штатная заглушка. showTextDocument здесь непригоден для binary.
 */
export async function openFileWithDefaultEditor(api: VscodeResourceOpener, path: string): Promise<void> {
  const uri = api.Uri.file(path);
  await api.commands.executeCommand('vscode.open', uri, { preview: false });
}
