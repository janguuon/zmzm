import type { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "서핑강습 및 렌탈 - 즈므즈므" },
    { name: "description", content: "즈므즈므의 서핑강습과 렌탈 서비스를 확인하세요." },
  ];
};

export default function Surfing() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">서핑강습 및 렌탈</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 강습 및 렌탈 정보를 여기에 추가 */}
        </div>
      </div>
    </Layout>
  );
} 