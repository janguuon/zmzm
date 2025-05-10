import type { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "서핑강습 및 렌탈 - 즈므즈므" },
    { name: "description", content: "즈므즈므의 서핑 강습과 장비 렌탈을 예약하세요." },
  ];
};

export default function Surfing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Layout>
        <div className="min-h-screen bg-[#FFF5EE] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">서핑강습 및 렌탈</h1>
            
            {/* 서핑 강습 섹션 */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* 강습 이미지 */}
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src="/surfing-lesson.jpg"
                    alt="서핑 강습"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                {/* 강습 설명 */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-semibold text-gray-900">서핑 강습</h2>
                  <p className="text-gray-600">
                    초보자부터 중급자까지 맞춤형 서핑 강습을 제공합니다. 
                    전문 강사진과 함께 안전하고 즐거운 서핑을 배워보세요.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>1:1 개인 강습</li>
                    <li>그룹 강습 (최대 4명)</li>
                    <li>초보자 맞춤 커리큘럼</li>
                    <li>장비 대여 포함</li>
                  </ul>
                  <a
                    href="https://smartstore.naver.com/your-store-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    강습 예약하기
                  </a>
                </div>
              </div>
            </div>

            {/* 장비 렌탈 섹션 */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* 렌탈 설명 */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-semibold text-gray-900">장비 렌탈</h2>
                  <p className="text-gray-600">
                    최신 서핑 보드와 장비를 렌탈할 수 있습니다. 
                    모든 장비는 정기적으로 점검하고 관리되며, 
                    다양한 사이즈와 타입의 보드를 선택할 수 있습니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>서핑 보드</li>
                    <li>웻슈트</li>
                    <li>핀</li>
                    <li>리시프 코드</li>
                  </ul>
                  <a
                    href="https://smartstore.naver.com/your-store-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    렌탈 예약하기
                  </a>
                </div>

                {/* 렌탈 이미지 */}
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src="/surfing-rental.jpg"
                    alt="서핑 장비 렌탈"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
} 