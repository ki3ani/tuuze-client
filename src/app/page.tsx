// app/page.tsx
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link'; // Import Link from Next.js for navigation

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
      <UserButton />
      <nav className="mt-4">
        {/* Updated Link usage */}
        <Link href="/dashboard">Dashboard</Link>
        <span className="mx-2">|</span> {/* Optional, for visual separation */}
        <Link href="/protected">Protected Page</Link>
      </nav>
    </div>
  );
}
