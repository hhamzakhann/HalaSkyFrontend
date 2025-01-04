export default function Card({ varient, className, borderd, children }) {
  const baseClasses = "bg-white rounded-xl shadow-sm ";

  const varientStyle = {
    small: baseClasses + "p-2 ",
    medium: baseClasses + "px-4 py-3 ",
    large: baseClasses + "px-6 py-5 ",
  };

  return (
    <div
      className={`${varientStyle[varient]} ${
        borderd ? "border border-slate-200 " : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
