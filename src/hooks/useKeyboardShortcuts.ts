import { useEffect, useRef } from 'react';

interface UseKeyboardShortcutsProps {
  onSubmit: () => void;
  inputRef: React.RefObject<HTMLTextAreaElement>;
}

export function useKeyboardShortcuts({
  onSubmit,
  inputRef,
}: UseKeyboardShortcutsProps) {
  useEffect(() => {
    function handleGlobalKeyPress(e: KeyboardEvent) {
      // Handle global "/" shortcut
      if (
        (e.key === '/' || (e.key === '/' && e.metaKey)) &&
        document.activeElement !== inputRef.current
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleGlobalKeyPress);
    return () => document.removeEventListener('keydown', handleGlobalKeyPress);
  }, [inputRef]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return { handleKeyPress };
}
