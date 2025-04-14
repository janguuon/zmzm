import { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // 부드러운 스크롤 효과
          footerRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isVisible]);

  return (
    <>
      {/* 스크롤 감지를 위한 요소 */}
      <div ref={observerRef} className="h-1" />
      
      <footer
        ref={footerRef}
        className={`bg-[#FAEBD7]/80 backdrop-blur-sm mt-auto transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
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
    </>
  );
} 