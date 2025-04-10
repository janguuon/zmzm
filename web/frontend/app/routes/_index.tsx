import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "서핑샵 - 즈므즈므" },
    { name: "description", content: "프리미엄 서핑 용품을 판매하는 즈므즈므입니다." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Surfing waves"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-sm shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">
                  즈므즈므
                </Link>
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

        {/* Hero Section */}
        <div className="flex-grow">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              서핑의 즐거움을 함께하세요
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              프리미엄 서핑 용품과 전문가의 조언으로 당신의 서핑 경험을 한 단계 업그레이드하세요.
            </p>
            <div className="mt-10">
              <Link
                to="/products"
                className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                상품 보기
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white/80 backdrop-blur-sm mt-auto">
          <div className="max-w-5xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-black text-lg font-semibold mb-4">즈므즈므</h3>
                <p className="text-gray-800">
                  프리미엄 서핑 용품을 판매하는 즈므즈므입니다.
                </p>
              </div>
              <div>
                <h3 className="text-black text-lg font-semibold mb-4">연락처</h3>
                <p className="text-gray-800">
                  이메일: info@zmzm.com<br />
                  전화: 02-123-4567
                </p>
              </div>
              <div className="max-w-[250px]">
                <h3 className="text-black text-lg font-semibold mb-4">사업자 정보</h3>
                <p className="text-gray-800 text-sm">
                  상호: 즈므즈므<br />
                  대표: 홍길동<br />
                  사업자등록번호: 123-45-67890<br />
                  주소: 서울특별시 강남구 테헤란로 123
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="text-gray-600 text-center">
                © {new Date().getFullYear()} 즈므즈므. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}