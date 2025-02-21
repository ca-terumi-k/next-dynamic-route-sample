import { ChatArea } from "../components/ChatAreaComponent";
import { SideNav } from "../components/SideNavComponent";

export default async function ChatLayout({ children, params }: { children: React.ReactNode, params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
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
