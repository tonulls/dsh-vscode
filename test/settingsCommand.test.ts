import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openExtensionSettings } from '../src/settingsCommand';

test('opens VS Code Settings filtered to the current extension', async () => {
  const calls: Array<[string, string]> = [];
  await openExtensionSettings('tonulls.dsh-vscode-panel', async (command, query) => {
    calls.push([command, query]);
  });
  assert.deepEqual(calls, [[
    'workbench.action.openSettings',
    '@ext:tonulls.dsh-vscode-panel',
  ]]);
});
