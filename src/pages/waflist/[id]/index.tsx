import { Waf } from '@/pages/api/wafv2/[id]';
import BottomNavLayout from '@/shared/components/layout/BottomNavLayout';
import { Toggle } from '@/shared/components/toggle';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import useSwr from 'swr'
 

const updateWaf = async (id:string, waf: Waf) => {
  const res = await fetch(`/api/wafv2/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(waf),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}

export default function WafDetailPage() {

  const { query } = useRouter()
  const { data: waf, error, isLoading, mutate} = useSwr<Waf>(`/api/wafv2/${query.id}`,
    (url: string) => fetch(url).then((res) => res.json())
  )
  if (error) return <div>Failed to load user</div>
  if (isLoading) return <div>Loading...</div>
  if (!waf) return null

  const toggleOverrideAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    waf.override_action = waf.override_action === 'None' ? 'Count' : 'None';
    mutate(updateWaf(query.id as string, waf), {
      revalidate: false // 수정 요청이, 수정된 결과를 반환한다고 가정하고 개발되었음.
    })
  }

  const toggleActionToUse = (index: number) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    waf.rule_action_override[index].action_to_use = waf.rule_action_override[index].action_to_use === 'None' ? 'Count' : 'None';
    mutate(updateWaf(query.id as string, waf), { 
      revalidate: false // 수정 요청이, 수정된 결과를 반환한다고 가정하고 개발되었음.
    })
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">waf - {query.id}</h1>
        <div className="bg-white p-4 rounded shadow">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">KEY</th>
                <th className="border p-2">VALUE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border p-2">name</td>
                <td className="border p-2">{waf.name}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border p-2">priority</td>
                <td className="border p-2">{waf.priority}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border p-2">override_action</td>
                <td className="border p-2 flex item-center justify-between">
                  {waf.override_action}
                  <Toggle 
                    checked={waf.override_action === 'None' ? false : true} 
                    onClick={toggleOverrideAction}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">{waf.name} 
        
        </h1>
        <div className="bg-white p-4 rounded shadow">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">#</th>
                <th className="border p-2">name</th>
                <th className="border p-2">action_to_use</th>
                <th className="border p-2"></th>
              </tr>
            </thead>
            <tbody>
              {waf.rule_action_override.map((item, index) => (
                <tr className="hover:bg-gray-50" key={index}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2"> { item.action_to_use }</td>
                  <td className="border p-2 bg-yellow"> 
                    <Toggle 
                      checked={item.action_to_use === 'None' ? false : true} 
                      onClick={toggleActionToUse(index)}
                    />
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

WafDetailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>;
};
