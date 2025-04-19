import type { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "커뮤니티 - 즈므즈므" },
    { name: "description", content: "즈므즈므 커뮤니티에 참여하세요." },
  ];
};

export default function Community() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">커뮤니티</h1>
        <div className="grid grid-cols-1 gap-8">
          {/* 커뮤니티 게시판을 여기에 추가 */}
        </div>
      </div>
    </Layout>
  );
} 