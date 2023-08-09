import BottomNavLayout from '@/shared/components/layout/BottomNavLayout';
import { useRouter } from 'next/router';
import React from 'react';
 
import useSwr from 'swr'
import { WafList } from '../api/wafv2';
import Link from 'next/link';

export default function WafList() {

  const { query } = useRouter()
  const { data, error, isLoading } = useSwr<WafList>(`/api/wafv2`,
    (url: string) => fetch(url).then((res) => res.json())
  )

  if (error) return <div>Failed to load user</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  const wafList = data

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">AWS WAF Managed Rules</h1>
        <div className="bg-white p-4 rounded shadow">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">#</th>
                <th className="border p-2">KEY</th>
                <th className="border p-2">VALUE</th>
              </tr>
            </thead>
            <tbody>
              {wafList.map((item, index) => (
                <tr className="hover:bg-gray-50" key={index}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{Object.keys(item)[0]}</td>
                  <td className="border p-2 flexitems-center justify-between">
                     { Object.values(item)[0] }
                     <Link href={`/waflist/${Object.keys(item)[0]}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

WafList.getLayout = function getLayout(page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>;
};
