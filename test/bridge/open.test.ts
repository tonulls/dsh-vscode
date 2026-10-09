import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openFileWithDefaultEditor } from '../../src/bridge/open';

test('openFileWithDefaultEditor использует vscode.open для выбора текстового или бинарного редактора', async () => {
  const calls: { command: string; args: unknown[] }[] = [];
  const api = {
    Uri: { file: (path: string) => ({ scheme: 'file', path }) },
    commands: {
      executeCommand: (command: string, ...args: unknown[]) => {
        calls.push({ command, args });
        return Promise.resolve(undefined);
      },
    },
  };

  await openFileWithDefaultEditor(api, 'C:\\tmp\\image.png');

  assert.deepEqual(calls, [{
    command: 'vscode.open',
    args: [{ scheme: 'file', path: 'C:\\tmp\\image.png' }, { preview: false }],
  }]);
});
