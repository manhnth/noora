import { getUser } from '@/server/rsc/user.rsc';
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = await getUser();

  console.log('user', user);

  if (!user) redirect('/auth/signup');
  redirect('/dashboard');
}
