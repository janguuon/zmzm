import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import mainImage from "~/public/즈므즈므_메인이미지.jpeg";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "서핑샵 - 즈므즈므" },
    { name: "description", content: "프리미엄 서핑 용품을 판매하는 즈므즈므입니다." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5EE]">
      {/* Navigation */}
      <nav className="bg-[#FFF5EE]/80 backdrop-blur-sm shadow-lg relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
                <img src="/public/즈므즈므로고.png" alt="즈므즈므 로고" className="h-24" />
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/products" className="text-gray-600 hover:text-gray-900">
                상품
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">
                소개
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                문의
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/1.jpg"
            alt="즈므즈므 메인 이미지"
          />
          <div className="absolute inset-0 bg-[#FFF5EE]/1"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-screen flex flex-col">
          <div className="flex-grow flex items-center justify-start">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative top-[100px] right-[300px]">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-300 sm:text-5xl lg:text-6xl">
                서핑의 즐거움을 함께하세요
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                프리미엄 서핑 용품과 전문가의 조언으로 당신의 서핑 경험을 한 단계 업그레이드하세요.
              </p>
              <div className="mt-10">
                <Link
                  to="/products"
                  className="inline-block bg-white py-3 px-8 border border-gray-900 rounded-md text-base font-medium text-gray-900 hover:bg-[#FAEBD7]/90"
                >
                  강습 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer 
      <Footer />*/}
    </div>
  );
}