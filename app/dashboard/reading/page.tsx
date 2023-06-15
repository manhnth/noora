import { getUser } from '@/server/rsc/user.rsc';
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = await getUser();

  if (!user) redirect('/auth/signup');
  return (
    <div id="reading" className="mt-16 w-full md:max-w-[40rem]">
      <div id="title">
        <span>create</span>
      </div>
      <div id="content">
        <div id="row-header" className="grid grid-cols-12 text-grey-400">
          <div className="col-span-6">Name</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">edit</div>
        </div>
        <div
          id="row-header"
          className="grid grid-cols-12 border-0 border-b-[1px] border-grey-500 "
        >
          <div className="col-span-6">1</div>
          <div className="col-span-2 border-l-[1px] border-grey-500">1</div>
          <div className="col-span-2 border-l-[1px] border-grey-500">1</div>
          <div className="col-span-2 border-l-[1px] border-grey-500"></div>
        </div>
      </div>
    </div>
  );
}
