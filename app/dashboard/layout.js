import DashboardSidebar from "../_components/DashboardSidebar";
import DashboardMainContainer from "../_components/UI/DashboardMainContainer";

export default function DashboardLayout({ children }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[350px_1fr] h-screen `}>
      <DashboardSidebar />
      <div className="max-h-screen overflow-auto">{children}</div>
    </div>
  );
}
