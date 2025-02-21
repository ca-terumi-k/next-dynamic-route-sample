import Link from 'next/link';

const SideMenu = [
  "main",
  "sub",
  "sub2",
]

export const SideNav = () => {
  return (
    <>
      <div className="h-full bg-gray-800 text-white">
        <ul className="space-y-4 p-4">
          <li>
            <Link href="/chat" className="block p-2 hover:bg-gray-700 rounded">
              chat
            </Link>
          </li>
          <li>
            <Link href="/rag1" className="block p-2 hover:bg-gray-700 rounded">
              rag1
            </Link>
          </li>
          <li>
            <Link href="/rag2" className="block p-2 hover:bg-gray-700 rounded">
              rag2
            </Link>
          </li>
          <hr />
          <li>
            {SideMenu.map((menu, index) => (
              <Link key={index} href={`/rag/${menu}`} className="block p-2 hover:bg-gray-700 rounded">
                {menu}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
};
