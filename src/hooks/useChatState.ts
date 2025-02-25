import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { nanoid } from 'nanoid';
import {
  activeSessionAtom,
  activeSessionIdAtom,
  apiKeysAtom,
  chatSessionsAtom,
} from '~/atoms/chat';
import type { ChatMessage } from '~/types/chat';

export function useChatState() {
  const [sessions, setSessions] = useAtom(chatSessionsAtom);
  const [activeSessionId, setActiveSessionId] = useAtom(activeSessionIdAtom);
  const activeSession = useAtomValue(activeSessionAtom);
  const apiKeys = useAtomValue(apiKeysAtom);

  const createNewSession = () => {
    const newSession = {
      id: nanoid(),
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    setSessions((prev) => [...prev, newSession]);
    setActiveSessionId(newSession.id);
    return newSession;
  };

  const addMessage = (content: string, model: ChatMessage['model']) => {
    if (!activeSession) {
      createNewSession();
    }

    const newMessage: ChatMessage = {
      id: nanoid(),
      content,
      role: 'user',
      model,
      timestamp: Date.now(),
    };

    setSessions((prev) =>
      prev.map((session) =>
        session.id === activeSessionId
          ? {
              ...session,
              messages: [...session.messages, newMessage],
              updatedAt: Date.now(),
            }
          : session
      )
    );

    return newMessage;
  };

  const clearSession = () => {
    setSessions((prev) =>
      prev.filter((session) => session.id !== activeSessionId)
    );
    createNewSession();
  };

  return {
    sessions,
    activeSession,
    activeSessionId,
    apiKeys,
    addMessage,
    clearSession,
    createNewSession,
    setActiveSessionId,
  };
}
