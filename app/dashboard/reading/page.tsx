import { getUser } from '@/server/rsc/user.rsc';
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = await getUser();

  if (!user) redirect('/auth/signup');
  return (
    <div id="reading" className="mt-16 w-full md:ml-16 md:max-w-[40rem]">
      <div>
        <span>create</span>
      </div>
    </div>
  );
}
