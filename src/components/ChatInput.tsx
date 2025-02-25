'use client';

import { useRef, useState } from 'react';
import { Button } from '~/components/ui/button';
import { Textarea } from '~/components/ui/textarea';
import { useKeyboardShortcuts } from '~/hooks/useKeyboardShortcuts';
import { useChatState } from '~/hooks/useChatState';
import { Plus, Search, MoreHorizontal, Mic } from 'lucide-react';

export function ChatInput() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { addMessage } = useChatState();

  const handleSubmit = () => {
    if (!input.trim()) return;
    addMessage(input.trim(), 'gpt');
    setInput('');
  };

  const { handleKeyPress } = useKeyboardShortcuts({
    onSubmit: handleSubmit,
    inputRef,
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-gradient-to-t from-background to-background/0 p-4">
      <div className="mx-auto max-w-3xl ">
        <div className="flex w-full cursor-text shadow-md bg-white flex-col rounded-3xl bg-background px-3 py-1 transition-shadow duration-150 ease-in-out focus-within:shadow-[0_2px_12px_0px_rgba(0,0,0,0.04),_0_9px_9px_0px_rgba(0,0,0,0.01),_0_2px_5px_0px_rgba(0,0,0,0.06)] dark:border-none dark:bg-[#303030]">
          <div className="flex min-h-[44px] items-start pl-1">
            <div className="min-w-0 max-w-full flex-1">
              <Textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask anything"
                className="min-h-[44px] max-h-[25vh] w-full resize-none border-0 bg-transparent p-2 focus:outline-none focus:ring-0"
                rows={1}
              />
            </div>
          </div>

          <div className="mb-2 mt-1 flex items-center justify-between">
            <div className="flex gap-1.5">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full border"
              >
                <Plus className="h-[18px] w-[18px]" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full border"
              >
                <Search className="h-[18px] w-[18px]" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full border"
              >
                <MoreHorizontal className="h-[18px] w-[18px]" />
              </Button>
            </div>

            <Button
              size="icon"
              className="h-9 w-9 rounded-full bg-black text-white hover:opacity-70 dark:bg-white dark:text-black"
              onClick={handleSubmit}
              disabled={!input.trim()}
            >
              <Mic className="h-[18px] w-[18px]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
