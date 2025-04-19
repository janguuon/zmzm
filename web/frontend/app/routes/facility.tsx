import type { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "시설안내 - 즈므즈므" },
    { name: "description", content: "즈므즈므의 시설 정보를 확인하세요." },
  ];
};

export default function Facility() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">시설안내</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 시설 이미지 및 설명을 여기에 추가 */}
        </div>
      </div>
    </Layout>
  );
} 