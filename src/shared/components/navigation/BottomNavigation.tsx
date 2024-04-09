/* eslint-disable no-use-before-define */
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BottomNavigation () {
  const router = useRouter()

  return (
    <div className="fixed bottom-0 flex h-bottom-nav w-screen items-center justify-between bg-white">
      {/* home button */}
      <button type="button">
        <Link className="flex flex-col items-center" href="/">
          HOME
        </Link>
      </button>
      {/* some button */}
      <button type="button">
        <Link className="flex flex-col items-center" href="/">
          Some1
        </Link>
      </button>
      {/* mypage button */}
      <button type="button">
        <Link className="flex flex-col items-center" href="/">
          My Page
        </Link>
      </button>
    </div>
  )
}
