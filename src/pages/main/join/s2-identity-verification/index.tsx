import BottomNavLayout from "@/shared/components/layout/BottomNavLayout";
import { useState } from "react";

export default function PersonalInfoForm() {
  const [name, setName] = useState("");
  const [residentNumber, setResidentNumber] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // 폼 데이터 처리 로직 추가
    console.log("Submitted:", { name, residentNumber });
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center border-b pb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt={"logo"}
            className="h-6"
          />
        </div>
        <div className="mt-4">
          <div className="bg-white text-gray-800">
            <div className="max-w-lg mx-auto p-4">
              <h1 className="text-center text-2xl font-bold mb-4">가입 신청</h1>
              <p className="text-center mb-4">
                먼저 실명인증을 거치셔야 합니다.
              </p>
              <div className="flex justify-between items-center mb-6">
                <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
                  약관동의
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  본인인증
                </button>
                <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
                  정보입력
                </button>
                <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
                  신청완료
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-800 mb-1">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="이름을 입력하세요."
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="residentNumber"
                    className="block text-gray-800 mb-1"
                  >
                    전화번호
                  </label>
                  <input
                    type="text"
                    id="residentNumber"
                    value={residentNumber}
                    onChange={(e) => {
                      setResidentNumber(e.target.value);
                    }}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="전화번호를 입력하세요."
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    제출
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PersonalInfoForm.getLayout = function getLayout(page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>;
};
