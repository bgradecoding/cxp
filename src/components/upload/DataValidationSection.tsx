interface ValidationData {
  id: number;
  departure: string;
  arrival: string;
  transport: string;
  status: string;
  statusColor: string;
}

export default function DataValidationSection() {
  const validationData: ValidationData[] = [
    {
      id: 1,
      departure: "Hamburg, Germany",
      arrival: "서울시 강남구 테헤란로 123",
      transport: "항공",
      status: "✅ 유효",
      statusColor: "text-green-600",
    },
    {
      id: 2,
      departure: "Shanghai, China",
      arrival: "경기도 화성시 동탄대로 456",
      transport: "해상",
      status: "✅ 유효",
      statusColor: "text-green-600",
    },
    {
      id: 3,
      departure: "부산시 해운대구 센텀중앙로 78",
      arrival: "인천시 연수구 송도국제대로 90",
      transport: "항공",
      status: "✅ 유효",
      statusColor: "text-green-600",
    },
    {
      id: 4,
      departure: "Tokyo, Japan",
      arrival: "대전시 유성구 대덕대로 234",
      transport: "해상",
      status: "✅ 유효",
      statusColor: "text-green-600",
    },
    {
      id: 5,
      departure: "Los Angeles, USA",
      arrival: "광주시 북구 첨단과기로 567",
      transport: "",
      status: "☯️ 수단 자동 매핑",
      statusColor: "text-purple-600",
    },
  ];

  return (
    <div className="bg-white border-2 border-secondary-700 rounded-lg p-8 mb-8">
      <h2 className="text-lg font-bold text-secondary-900 mb-5 pb-3 border-b border-secondary-200">
        2. 데이터 검증
      </h2>

      {/* 정보 박스 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5">
        <div className="font-bold text-secondary-900 mb-2">ℹ️ 필수 컬럼 확인</div>
        <div className="text-sm text-secondary-700">
          출발주소, 도착주소 컬럼이 포함되어야 합니다. 컬럼명은 자동으로 매핑됩니다.
        </div>
      </div>

      {/* 검증 결과 */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-5">
        <div className="font-bold text-green-800 mb-3">✅ 검증 완료</div>
        <ul className="text-sm text-green-700 ml-5 space-y-1">
          <li>총 487개 행 데이터 확인</li>
          <li>출발주소 컬럼: "출발지" (487개 유효)</li>
          <li>도착주소 컬럼: "도착지" (487개 유효)</li>
          <li>빈 값: 0개</li>
          <li>중복 데이터: 3개 발견</li>
        </ul>
      </div>

      {/* 데이터 미리보기 */}
      <div className="overflow-x-auto">
        <div className="font-bold text-secondary-900 mb-3">데이터 미리보기 (상위 5개 행)</div>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-secondary-100">
              <th className="border border-secondary-300 p-2 text-left font-bold">번호</th>
              <th className="border border-secondary-300 p-2 text-left font-bold">출발지</th>
              <th className="border border-secondary-300 p-2 text-left font-bold">도착지</th>
              <th className="border border-secondary-300 p-2 text-left font-bold">수단</th>
              <th className="border border-secondary-300 p-2 text-left font-bold">검증상태</th>
            </tr>
          </thead>
          <tbody>
            {validationData.map((row) => (
              <tr key={row.id}>
                <td className="border border-secondary-300 p-2">{row.id}</td>
                <td className="border border-secondary-300 p-2">{row.departure}</td>
                <td className="border border-secondary-300 p-2">{row.arrival}</td>
                <td className="border border-secondary-300 p-2">{row.transport}</td>
                <td className={`border border-secondary-300 p-2 ${row.statusColor}`}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}