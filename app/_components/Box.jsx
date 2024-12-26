export default function Box({ varient, children, className }) {
  const base = ` bg-white ${className} `;

  const variantStyle = {
    roundedFull: base + "rounded-full p-3 inline-block",
  };

  return <button className={`${variantStyle[varient]}`}>{children}</button>;
}
