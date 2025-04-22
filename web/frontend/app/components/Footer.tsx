import { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const lastScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const footerHeight = footerRef.current.offsetHeight;
      const threshold = 50;

      // 스크롤 방향 확인
      const isScrollingDown = scrollPosition > lastScrollPosition.current;
      lastScrollPosition.current = scrollPosition;

      // 문서 끝에 도달했는지 확인
      const isAtBottom = scrollPosition + windowHeight >= documentHeight - threshold;

      if (isAtBottom) {
        setIsVisible(true);
      } else if (!isAtBottom && !isScrollingDown) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // 초기 상태 설정
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`fixed bottom-0 left-0 right-0 bg-[#FFF5EE] shadow-lg transition-all duration-500 z-50 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">즈므즈므</h3>
            <p className="text-gray-600">
              주소: 서울특별시 강남구 테헤란로 123<br />
              전화: 02-123-4567<br />
              이메일: info@zmzm.com
            </p>
          </div>

          {/* 사업자 정보 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">사업자 정보</h3>
            <p className="text-gray-600">
              사업자등록번호: 123-45-67890<br />
              대표자: 홍길동<br />
              개인정보보호책임자: 홍길동
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/facility" className="text-gray-600 hover:text-gray-900">
                  시설안내
                </Link>
              </li>
              <li>
                <Link to="/surfing" className="text-gray-600 hover:text-gray-900">
                  서핑강습 및 렌탈
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-gray-600 hover:text-gray-900">
                  오시는길
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; 2024 즈므즈므. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 