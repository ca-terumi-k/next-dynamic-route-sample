import { ChatArea } from "@/app/components/ChatAreaComponent";
import { SideNav } from "@/app/components/SideNavComponent";

export default function ChatLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <SideNav />

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto">
        <ChatArea title={slug} page_name={slug} />
      </div>
    </div>
  );
}
