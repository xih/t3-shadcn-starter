'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { apiKeysAtom, uiSettingsAtom } from '~/atoms/chat';
import { useChatState } from '~/hooks/useChatState';

export function ChatStateTest() {
  const [apiKeys, setApiKeys] = useAtom(apiKeysAtom);
  const [uiSettings, setUiSettings] = useAtom(uiSettingsAtom);
  const { activeSession, addMessage, clearSession } = useChatState();

  // Test persistence on mount
  useEffect(() => {
    console.log('Loaded API Keys:', apiKeys);
    console.log('Loaded UI Settings:', uiSettings);
    console.log('Loaded Active Session:', activeSession);
  }, [apiKeys, uiSettings, activeSession]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">API Keys</h2>
        <input
          type="password"
          placeholder="OpenAI API Key"
          value={apiKeys.openai || ''}
          onChange={(e) => setApiKeys({ ...apiKeys, openai: e.target.value })}
          className="border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold">UI Settings</h2>
        <select
          value={uiSettings.theme}
          onChange={(e) =>
            setUiSettings({
              ...uiSettings,
              theme: e.target.value as 'light' | 'dark',
            })
          }
          className="border p-2 rounded"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold">Chat</h2>
        <button
          onClick={() => addMessage('Test message', 'gpt')}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Add Message
        </button>
        <button
          onClick={clearSession}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear Session
        </button>
      </div>

      <div className="mt-4">
        <h3 className="font-bold">Current Session:</h3>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(activeSession, null, 2)}
        </pre>
      </div>
    </div>
  );
}
