import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import Footer from "~/components/Footer";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const meta: MetaFunction = () => {
  return [
    { title: "오시는길 - 즈므즈므" },
    { name: "description", content: "즈므즈므의 위치 정보를 확인하세요." },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  return json({ apiKey });
};

const containerStyle = {
  width: '100%',
  height: '400px'  // 지도 높이 증가
};

const center = {
  lat: 37.5665,  // 서울시청 위도
  lng: 126.9780  // 서울시청 경도
};

export default function Location() {
  const { apiKey } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Layout>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mb-48">  {/* 하단 여백을 mb-32에서 mb-48로 증가 */}
          <h1 className="text-3xl font-bold text-gray-900 mb-12">오시는길</h1>  {/* 상단 여백 증가 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  {/* 그리드 간격 증가 */}
            {/* 지도 */}
            <div className="w-full h-full">
              {apiKey ? (
                <LoadScript googleMapsApiKey={apiKey}>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
              ) : (
                <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">지도를 불러오는 중입니다...</p>
                </div>
              )}
            </div>

            {/* 위치 정보 */}
            <div className="space-y-8">  {/* 세로 간격 증가 */}
              <h2 className="text-2xl font-semibold text-gray-800">찾아오시는 길</h2>
              <div className="space-y-4">  {/* 세로 간격 증가 */}
                <p className="text-gray-600">
                  <span className="font-medium">주소:</span> 서울특별시 강남구 테헤란로 123
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">전화:</span> 02-123-4567
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">이메일:</span> info@zmzm.com
                </p>
              </div>
              
              <div className="mt-8">  {/* 상단 여백 증가 */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">교통편</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600">  {/* 리스트 간격 증가 */}
                  <li>지하철: 2호선 강남역 3번 출구에서 5분</li>
                  <li>버스: 강남역 정류장에서 하차</li>
                  <li>주차: 건물 내 지하주차장 이용 가능</li>
                </ul>
              </div>

              {/* 추가 정보 섹션 */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">이용 안내</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600">
                  <li>영업시간: 평일 10:00 - 22:00, 주말 09:00 - 23:00</li>
                  <li>휴무일: 매월 첫째, 셋째 월요일</li>
                  <li>예약 문의: 전화 또는 이메일로 연락주세요</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
} 