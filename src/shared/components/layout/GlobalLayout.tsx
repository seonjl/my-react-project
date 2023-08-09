import { useRouter } from 'next/router';
import { useEffect, type ReactNode } from 'react';

type GlobalLayoutProps = {
  children: ReactNode;
};

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div className="mx-auto my-0 w-full">{children}</div>
  );
}
