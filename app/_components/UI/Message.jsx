export default function Message({ children, className }) {
  return (
    <div
      className={`max-w-md bg-accent py-4 px-6 text-center mx-auto rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}
