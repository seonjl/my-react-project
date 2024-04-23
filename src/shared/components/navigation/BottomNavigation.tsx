/* eslint-disable no-use-before-define */
import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomNavigation() {
  const router = useRouter();

  return (
    <footer className="fixed bottom-0 flex h-bottom-nav w-screen items-center justify-around bg-white">
      <button className="text-black-500">
        <Link className="flex flex-col items-center" href="/main">
          안녕
        </Link>
      </button>
      <button className="text-black-500">
        <Link className="flex flex-col items-center" href="/">
          나는
        </Link>
      </button>
      <button className="text-black-500">
        <Link className="flex flex-col items-center" href="/">
          푸터
        </Link>
      </button>
      <button className="text-black-500">
        <Link className="flex flex-col items-center" href="/">
          이다
        </Link>
      </button>
    </footer>
  );
}
