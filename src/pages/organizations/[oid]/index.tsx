import BottomNavLayout from "@/shared/components/layout/BottomNavLayout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MainPage() {
  const router = useRouter();

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
          <h1 className="text-lg font-semibold">내가 가입한 단체</h1>
        </div>
        <div className="mt-4">
          <div className="bg-white text-gray-800">
            <div className="max-w-4xl mx-auto p-5">
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/50x50"
                    alt="Company Logo"
                    className="rounded-full"
                  />
                  <div>
                    <h1 className="text-xl font-bold">나래에너지서비스</h1>
                    <div className="flex items-center">
                      <span className="rating-star">★</span>
                      <span>2.9 (196개 리뷰)</span>
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
                  이 회사 문의하기
                </button>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    나래에너지서비스 회사소개
                  </h3>
                  <div className="mt-2">
                    <p>
                      <strong>홈페이지:</strong>{" "}
                      <a
                        href="http://www.skens.com/naraeonm/main/index.do"
                        className="text-blue-500"
                      >
                        www.skens.com/naraeonm/main/index.do
                      </a>
                    </p>
                    <p>
                      <strong>업계:</strong> 전기/가스/증기사업
                    </p>
                    <p>
                      <strong>본사:</strong> 경기도 하남시
                    </p>
                    <p>
                      <strong>설립:</strong> 2012
                    </p>
                    <p>
                      <strong>직원수:</strong> 201~500명
                    </p>
                    <p>
                      <strong>연락정보:</strong> -
                    </p>
                    <p>
                      나래에너지서비스(O&M)는 발전소 운영(Operation)과 정비
                      (Maintenance)사업을 수행하는 Total O&M Solution을 제공하는
                      기업
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <div className="py-5">
              <div className="flex justify-between items-center border-b pb-2">
                <div className="text-lg">소개</div>
                <div className="text-lg">리뷰</div>
                <div className="text-lg">게시글</div>
                <div className="text-lg">영업</div>
                <div className="text-lg">재용</div>
                <div className="text-lg active-tab">뉴스</div>
                <div className="text-lg">갤러리</div>
              </div>
            </div>

            <div className="py-5">
              <h1 className="text-3xl font-bold">토스증권 뉴스</h1>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">토스증권</h2>
                <p className="text-sm text-gray-600">조선비즈 / 2024.04.23</p>
                <p className="mt-1">
                  강세 도피 토스 관련주 테마, 하나금융지주 +8.78%, 한화투자증권
                  +2.54%
                </p>
                <a
                  href="https://biz.chosun.com/stock/c-biz_bot/2024/04/22/CLZODS22LY7W6N2EAWCZB6SDI/"
                  className="text-blue-500"
                >
                  https://biz.chosun.com/stock/c-biz_bot/2024/04/22/CLZODS22LY7W6N2EAWCZB6SDI/
                </a>
              </div>
              <div className="mt-4">
                <img
                  src="https://via.placeholder.com/600x300?text=Stock+Chart"
                  alt="Stock Chart"
                  className="w-full"
                />
                <p className="text-red-500 mt-2">조선비즈</p>
              </div>
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
