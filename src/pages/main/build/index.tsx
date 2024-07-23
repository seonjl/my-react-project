import BottomNavLayout from "@/shared/components/layout/BottomNavLayout";
import router from "next/router";

export default function UnderConstructionPage() {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8">
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">준비 중입니다</h1>
          <p className="text-lg text-center mb-8">
            이 페이지는 현재 준비 중입니다. 곧 완성될 예정입니다. 기다려 주셔서
            감사합니다!
          </p>
          <img
            src="https://via.placeholder.com/600x400?text=Under+Construction"
            alt="Under Construction"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

UnderConstructionPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>;
};
