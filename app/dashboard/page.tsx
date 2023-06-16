import { getUser } from '@/server/rsc/user.rsc';
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = await getUser();

  return (
    <div className="wavy-div">
      <div className="content">hello</div>
    </div>
  );

  // if (user) redirect('/dashboard/reading');
}
