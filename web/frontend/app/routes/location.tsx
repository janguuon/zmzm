import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const meta: MetaFunction = () => {
  return [
    { title: "오시는길 - 즈므즈므" },
    { name: "description", content: "즈므즈므의 위치 정보를 확인하세요." },
  ];
};

export const loader: LoaderFunction = () => {
  return json({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });
};

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.5665,  // 서울시청 위도
  lng: 126.9780  // 서울시청 경도
};

export default function Location() {
  const { googleMapsApiKey } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">오시는길</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 지도 */}
          <div className="w-full h-full">
            <LoadScript googleMapsApiKey={googleMapsApiKey || ''}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
          
          {/* 위치 정보 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">찾아오시는 길</h2>
            <div className="space-y-2">
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
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">교통편</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>지하철: 2호선 강남역 3번 출구에서 5분</li>
                <li>버스: 강남역 정류장에서 하차</li>
                <li>주차: 건물 내 지하주차장 이용 가능</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 