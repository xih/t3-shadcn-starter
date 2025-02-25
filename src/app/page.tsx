import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-center">
        AI Chat Compare
      </h1>
      <p className="mt-4 text-xl text-center">
        Compare responses from different AI models
      </p>
    </main>
  );
}
