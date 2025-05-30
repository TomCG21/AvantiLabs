export function Button({ children, className }: any) {
  return <button className={`bg-blue-600 text-white rounded px-4 py-2 ${className}`}>{children}</button>;
}