import BottomNavLayout from "@/shared/components/layout/BottomNavLayout";
import TabSwitcher from "@/shared/components/navigation/TopMainTabNavigation";
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
        <div className="flex justify-between items-center border-b pb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt={"logo"}
            className="h-6"
          />
          <form className="max-w-md w-full mx-5">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-wh-900 border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </form>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Person_icon_%28the_Noun_Project_2817719%29.svg"
            alt={"logo"}
            className="h-6"
            onClick={() => {
              void router.push("/mypage");
            }}
          />
        </div>
        <div className="mt-4">
          <TabSwitcher />
          <div className="flex justify-between items-center">
            <h2 className="text-sm text-gray-600">현재 등록된 파티 수</h2>
            <span className="text-green-500">9999 개</span>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Intro</h3>
            <div className="grid grid-cols-2 gap-4">
              <ServiceCard
                serviceName="만들기"
                logoSrc="https://upload.wikimedia.org/wikipedia/commons/9/9e/Plus_symbol.svg"
                href="/main/build"
                onChange={() => {}}
              />
              <ServiceCard
                serviceName="가입하기"
                logoSrc="public/svgs"
                href="/main/search"
                onChange={() => {
                  setTwitchChecked(!twitchChecked);
                }}
              />
              <ServiceCard
                serviceName="찾아보기"
                logoSrc="public/svgs"
                href="/main/search"
                onChange={() => {
                  setYoutubeChecked(!youtubeChecked);
                }}
              />
              <ServiceCard
                serviceName="활동하기"
                logoSrc="public/svgs"
                href="/organizations"
                onChange={() => {
                  setDisneyChecked(!disneyChecked);
                }}
              />
            </div>
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
    <Link
      className="flex flex-col items-center p-4 bg-gray-100 rounded-lg"
      href={href}
    >
      <img src={logoSrc} alt={serviceName} className="h-40" />
      <span>{serviceName}</span>
    </Link>
  );
}
