import Link from "next/link";
import { useState } from "react";

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-lg mx-auto p-5">
      <div className="flex justify-center border">
        <button
          className={`bg-gray-100 px-4 py-2 rounded`}
          onClick={() => {
            handleTabClick("tab1");
          }}
        >
          <Link className="flex flex-col items-center" href="/main">
            소개
          </Link>
        </button>
        <button
          className={`bg-gray-100 px-4 py-2 rounded`}
          onClick={() => {
            handleTabClick("tab1");
          }}
        >
          <Link className="flex flex-col items-center" href="/main/establish">
            탐색
          </Link>
        </button>
        <button
          className={`bg-gray-100 px-4 py-2 rounded`}
          onClick={() => {
            handleTabClick("tab1");
          }}
        >
          <Link className="flex flex-col items-center" href="/main/establish">
            지원받기
          </Link>
        </button>
      </div>
      {/* <div>
        {activeTab === "tab1" && (
          <div className="p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-semibold mb-2">탭 1의 내용</h2>
            <p>여기에 탭 1의 내용을 추가하세요.</p>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-semibold mb-2">탭 2의 내용</h2>
            <p>여기에 탭 2의 내용을 추가하세요.</p>
          </div>
        )}
      </div> */}
    </div>
  );
}
