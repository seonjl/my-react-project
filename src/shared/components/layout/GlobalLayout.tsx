import { type ReactNode } from "react";

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return <div className="w-full max-w-2xl">{children}</div>;
}
