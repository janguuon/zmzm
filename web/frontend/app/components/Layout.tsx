import { Link } from "@remix-run/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5EE]">
      {/* Navigation */}
      <nav className="bg-[#FFF5EE]/80 backdrop-blur-sm shadow-lg relative z-20">
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
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
} 