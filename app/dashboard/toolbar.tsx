export default function Toolbar({ username }: { username: string }) {
  return (
    <div
      id="toolbar"
      className="border border-y-0 border-l-0 p-4 font-light dark:border-grey-700 dark:bg-grey-800"
    >
      <div>{username}</div>
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
