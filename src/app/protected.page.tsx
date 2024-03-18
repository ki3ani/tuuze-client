import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Protected() {
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
      <h1>Protected Page</h1>
      <p>This page is protected. Only authenticated users can see this.</p>
    </div>
  );
}
