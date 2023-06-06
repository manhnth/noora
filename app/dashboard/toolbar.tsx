import { getUser } from '@/server/rsc/user.rsc';

export default async function Toolbar() {
  const user = await getUser();
  return (
    <div
      id="toolbar"
      className="border border-y-0 border-l-0 p-4 font-light dark:border-grey-700 dark:bg-grey-800"
    >
      <div>{user?.username}</div>
      <div>
        <span>Note</span>
      </div>
      <div>
        <span>Writing</span>
      </div>
      <div>
        <span>Reading</span>
      </div>
      <div>
        <span>Resource</span>
      </div>
    </div>
  );
}
