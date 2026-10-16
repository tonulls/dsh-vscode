/** Open the VS Code Settings UI filtered to one extension. */
export async function openExtensionSettings(
  extensionId: string,
  executeCommand: (command: string, query: string) => PromiseLike<unknown>,
): Promise<void> {
  await executeCommand('workbench.action.openSettings', `@ext:${extensionId}`);
}
