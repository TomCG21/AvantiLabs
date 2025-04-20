export function Card({ children }: any) {
  return <div className="shadow-md border rounded">{children}</div>;
}

export function CardContent({ children, className }: any) {
  return <div className={className}>{children}</div>;
}