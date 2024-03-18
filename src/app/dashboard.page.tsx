import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      // Redirect users to sign-in page if not authenticated
      router.push('/sign-in');
    }
  }, [isSignedIn, router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! This page is protected.</p>
    </div>
  );
}
