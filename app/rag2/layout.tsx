import { SideNav } from "../components/SideNavComponent";
import { ChatArea } from "../components/ChatAreaComponent";

export default function Rag2Layout() {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <SideNav />

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto">
        <ChatArea title="chat" page_name="rag2" />
      </div>
    </div>
  );
}
