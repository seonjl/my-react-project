import { useRouter } from 'next/router';
import { useEffect, type ReactNode } from 'react';

type GlobalLayoutProps = {
  children: ReactNode;
};

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div className="w-full max-w-2xl">{children}</div>
  );
}
