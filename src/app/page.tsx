import Link from 'next/link';

import { LatestPost } from '~/app/_components/post';
import { auth } from '~/server/auth';
import { api, HydrateClient } from '~/trpc/server';
import { ChatStateTest } from '~/components/ChatStateTest';
import { ChatInput } from '~/components/ChatInput';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center mb-8">AI Chat Compare</h1>
        <ChatStateTest />
      </div>
      <ChatInput />
    </main>
  );
}
