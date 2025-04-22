import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "시설안내 - 즈므즈므" },
    { name: "description", content: "즈므즈므의 시설을 확인하세요." },
  ];
};

// 시설 정보 타입 정의
type Facility = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

// 시설 데이터
const facilities: Facility[] = [
  {
    id: 1,
    title: "서핑 연습장",
    description: "초보자부터 전문가까지 모두가 이용할 수 있는 넓은 연습장입니다. 최신 장비와 전문 강사진이 함께합니다.",
    images: ["/facility1.jpg", "/facility2.jpg", "/facility3.jpg"]
  },
  {
    id: 2,
    title: "장비 대여소",
    description: "다양한 서핑 보드와 장비를 대여할 수 있습니다. 모든 장비는 정기적으로 점검하고 관리됩니다.",
    images: ["/facility4.jpg", "/facility5.jpg", "/facility6.jpg"]
  },
  {
    id: 3,
    title: "샤워실",
    description: "편안한 샤워 시설과 탈의실이 구비되어 있습니다. 서핑 후 깨끗하게 씻을 수 있습니다.",
    images: ["/facility7.jpg", "/facility8.jpg", "/facility9.jpg"]
  }
];

export default function Facility() {
  const [currentFacility, setCurrentFacility] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => 
      prev === facilities[currentFacility].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) => 
      prev === 0 ? facilities[currentFacility].images.length - 1 : prev - 1
    );
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#FFF5EE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">시설안내</h1>
          
          {/* 시설 선택 버튼 */}
          <div className="flex space-x-4 mb-8">
            {facilities.map((facility, index) => (
              <button
                key={facility.id}
                onClick={() => {
                  setCurrentFacility(index);
                  setCurrentImage(0);
                }}
                className={`px-4 py-2 rounded-md ${
                  currentFacility === index
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {facility.title}
              </button>
            ))}
          </div>

          {/* 이미지 슬라이더 */}
          <div className="relative mb-8">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={facilities[currentFacility].images[currentImage]}
                alt={facilities[currentFacility].title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* 이미지 네비게이션 버튼 */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              →
            </button>
          </div>

          {/* 시설 설명 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {facilities[currentFacility].title}
            </h2>
            <p className="text-gray-600">
              {facilities[currentFacility].description}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 