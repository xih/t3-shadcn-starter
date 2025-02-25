import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { nanoid } from 'nanoid';
import type {
  ApiKeys,
  ChatMessage,
  ChatSession,
  UISettings,
} from '~/types/chat';

// Persist API keys in localStorage
export const apiKeysAtom = atomWithStorage<ApiKeys>('ai-chat-api-keys', {});

// Persist UI settings in localStorage
export const uiSettingsAtom = atomWithStorage<UISettings>(
  'ai-chat-ui-settings',
  {
    theme: 'light',
    fontSize: 'medium',
    streamResponses: true,
  }
);

// Persist chat sessions in localStorage
export const chatSessionsAtom = atomWithStorage<ChatSession[]>(
  'ai-chat-sessions',
  []
);

// Current active session
export const activeSessionIdAtom = atomWithStorage<string>(
  'ai-chat-active-session',
  ''
);

// Derived atom for current session
export const activeSessionAtom = atom(
  (get) => {
    const sessions = get(chatSessionsAtom);
    const activeId = get(activeSessionIdAtom);
    return sessions.find((s) => s.id === activeId);
  },
  (get, set, update: Partial<ChatSession>) => {
    const sessions = get(chatSessionsAtom);
    const activeId = get(activeSessionIdAtom);

    set(
      chatSessionsAtom,
      sessions.map((session) =>
        session.id === activeId
          ? { ...session, ...update, updatedAt: Date.now() }
          : session
      )
    );
  }
);
