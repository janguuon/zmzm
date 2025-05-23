import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "서핑샵 - 즈므즈므" },
    { name: "description", content: "프리미엄 서핑 용품을 판매하는 즈므즈므입니다." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="bg-white backdrop-blur-sm shadow-lg relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <img src="/zmzm_logo.png" alt="즈므즈므 로고" className="h-16 sm:h-20 md:h-24" />
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/facility" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                시설안내
              </Link>
              <Link to="/surfing" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                서핑강습 및 렌탈
              </Link>
              <Link to="/location" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                오시는길
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
            className="w-full h-full object-cover object-center min-h-screen"
            src="/main_3.jpeg"
            alt="즈므즈므 메인 이미지"
          />
          <div className="absolute inset-0 bg-[#FFF5EE]/1"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-screen flex flex-col">
          <div className="flex-grow flex items-center justify-start">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative sm:text-left 
                          top-[50px] sm:top-[75px] md:top-[100px] 
                          right-0 sm:right-[150px] md:right-[0px]">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-300">
                서핑의 즐거움을 함께하세요
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto sm:mx-0">
                프리미엄 서핑 용품과 전문가의 조언으로 당신의 서핑 경험을 한 단계 업그레이드하세요.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}