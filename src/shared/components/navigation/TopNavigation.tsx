/* eslint-disable no-use-before-define */
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TopNavigation() {
  const router = useRouter();

  return (
    <div className="fixed top-0 flex h-top-nav w-screen items-center justify-evenly bg-white">
      {/* back button */}
      <button type="button" onClick={() => router.back()}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            // eslint-disable-next-line max-len
            d="M15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L10.4142 14L15.7071 19.2929C16.0976 19.6834 16.0976 20.3166 15.7071 20.7071C15.3166 21.0976 14.6834 21.0976 14.2929 20.7071L8.29289 14.7071C7.90237 14.3166 7.90237 13.6834 8.29289 13.2929L14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289Z"
            fill="#000000"
          />
        </svg>
      </button>

      {/* home button */}
      <button type="button">
        <Link className="items-center" href="/">
          HOME
        </Link>
      </button>

      {/* waf list button */}
      <button type="button">
        <Link className="items-center" href="/waflist">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* eslint-disable-next-line max-len */}
            <path

              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </Link>
      </button>
    </div>
  );
}
