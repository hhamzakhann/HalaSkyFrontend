import Card from "@/app/_components/Card";

export default function SidebarFilter({ children, className = "" }) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between text-xs mb-2">
        <span>Filter</span>
        <span className="text-gray underline">Reset Filter</span>
      </div>
      <Card varient="large" className="absolute top-0 md:static space-y-10">
        {children}
      </Card>
    </div>
  );
}
