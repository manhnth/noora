import { getUser } from '@/server/rsc/user.rsc';
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = await getUser();

  if (!user) redirect('/auth/signup');
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">{`hello, ${user.username}`}</div>
    </div>
  );
}
