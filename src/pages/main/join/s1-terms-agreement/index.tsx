import BottomNavLayout from "@/shared/components/layout/BottomNavLayout";
import { useState } from "react";

export default function DailyMarket() {
  const [option1Checked, setOption1Checked] = useState(false);
  const [option2Checked, setOption2Checked] = useState(false);
  const [allTermsChecked, setAllTermsChecked] = useState(false);
  const [activeTab, setActiveTab] = useState("tab2");

  const handleOption1Change = () => {
    setOption1Checked(!option1Checked);
  };
  const handleOption2Change = () => {
    setOption2Checked(!option2Checked);
  };
  const handleAllTermsChange = () => {
    setAllTermsChecked(!allTermsChecked);
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
                가입을 위해 아래 약관을 자세히 읽은 후 동의해 주시기 바랍니다.
              </p>
              <div className="flex justify-between items-center mb-6">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  약관동의
                </button>
                <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
                  본인인증
                </button>
                <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
                  정보입력
                </button>
                <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
                  신청완료
                </button>
              </div>
              {activeTab === "tab1" && (
                <TermsAgreement
                  checked1={option1Checked}
                  onChange1={handleOption1Change}
                  checked2={option2Checked}
                  onChange2={handleOption2Change}
                />
              )}
              {activeTab === "tab2" && (
                <TermsAgreement
                  checked1={option1Checked}
                  onChange1={handleOption1Change}
                  checked2={option2Checked}
                  onChange2={handleOption2Change}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DailyMarket.getLayout = function getLayout(page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>;
};

function TermsCheckbox({ label, checked, onChange }: any) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={label}
        className="mr-2"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={label} className="flex-1">
        {label}
      </label>
      <button className="bg-gray-300 text-gray-800 py-1 px-3 rounded">
        보기
      </button>
    </div>
  );
}

// 약관동의 탭
export const TermsAgreement = ({
  checked1,
  onChange1,
  checked2,
  onChange2,
}: {
  checked1: boolean;
  onChange1: () => any;
  checked2: boolean;
  onChange2: () => any;
}) => {
  return (
    <div>
      <div className="space-y-4 mb-6">
        <TermsCheckbox
          label="가입 안내 (필수)"
          checked={checked1}
          onChange={onChange1}
        />
        <TermsCheckbox
          label="개인정보 수집 및 이용동의 (필수)"
          checked={checked2}
          onChange={onChange2}
        />
        <div className="flex items-center">
          <input type="checkbox" id="option3" className="mr-2" />
          <label htmlFor="option3" className="flex-1">
            모든 약관에 동의
          </label>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-full">
          아니요, 동의하지 않습니다.
        </button>
        <button className="bg-black text-white py-2 px-4 rounded-full">
          네, 동의합니다.
        </button>
      </div>
    </div>
  );
};
