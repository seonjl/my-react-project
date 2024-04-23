import BottomNavLayout from "@/shared/components/layout/BottomNavLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MainPage() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [netflixChecked, setNetflixChecked] = useState(false);
  const [youtubeChecked, setYoutubeChecked] = useState(false);
  const [disneyChecked, setDisneyChecked] = useState(false);
  const [twitchChecked, setTwitchChecked] = useState(false);

  return (
    <div className="bg-gray-100">
      <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-center border-b pb-4">
          {/* back button */}
          <div className="absolute left-12">
            <button
              onClick={() => {
                router.back();
              }}
              className="flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-lg font-semibold">마이페이지</h1>
        </div>
        <div className="mt-4">
          <div className="flex flex-col p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold mb-2">계정관리</h3>
            <h3 className="font-semibold mb-2">단체관리</h3>
            <h3 className="font-semibold mb-2">로그아웃</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

MainPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>;
};

function ServiceCard({
  serviceName,
  logoSrc,
  href = "/",
}: {
  serviceName: string;
  logoSrc: string;
  href?: string;
  onChange: () => void;
}) {
  return (
    <Link href={href}>
      <div className="flex flex-col p-4 bg-gray-100 rounded-lg">
        <div className="flex items-center justify-between">
          <span>이름</span>
          <span>{serviceName}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>소속</span>
          <span>{serviceName}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>대표자</span>
          <span>{serviceName}</span>
        </div>
      </div>
    </Link>
  );
}
