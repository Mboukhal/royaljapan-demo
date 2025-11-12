"use client";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const API_BASE = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`;

const Page = () => {

  const [stake, setStake] = React.useState('');
  const [stakeError, setStakeError] = React.useState(null);
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const data = useQuery({
    queryKey: ['data-list'],
    queryFn: async () => {

      const res = axios({
        method: "get",
        url: `${API_BASE}/get-list`,
      })
        .then(async (response) => {
          if (response.status !== 200) {
            throw new Error('Network response was not ok');
          }
          return response.data.data;
        })
        .catch((err) => {
          throw new Error('Fetch error: ' + err.message);
        });

      return res;
    }
  });


  return (
    <div className="container py-16 space-y-8">
      <div className="bg-gray-200 px-6 py-4  rounded-lg">
        <h1>ローディングページ</h1>
        <p className="mt-4 text-gray-700">
          これはローディングページの例です。ここにローディングインジケーターやメッセージを表示できます。
        </p>

        <div className="mt-6">
          {data.isLoading && <p>データを読み込み中...</p>}
          {data.isError && <p className="text-red-500">エラーが発生しました: {data.error.message}</p>}
          {data.isSuccess && (
            <ul className="list-disc list-inside">
              {data.data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

      </div>

      <div className="bg-gray-200 px-6 py-4 rounded-lg flex flex-col">
        {/* input number test */}
        <h1>Stake</h1>
        <div className="text-gray-700 mt-2">
          <input
            type="number"
            value={stake}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (isNaN(value) || value < 1) {
                setStakeError("1以上の有効な数値を入力してください");
              } else {
                setStakeError(null);
              }
              setStake(value);
            }}
            // min={1}
            className="border border-gray-300 rounded px-3 py-2 mt-2"
            placeholder="数値を入力してください"
          />
          <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={async () => {
              if (stake < 1 || isNaN(stake)) {
                setStakeError("1以上の有効な数値を入力してください");
                return;
              }
              setStakeError(null);
              setLoading(true);
              await axios({
                method: "post",
                url: `${API_BASE}/stake`,
                data: {
                  data: stake,
                }
              })
                .then(async (response) => {
                  if (response.status !== 200) {
                    setStakeError('Network response was not ok');
                  }
                  // alert("送信成功: " + response.data.message);
                  setResult("送信成功: " + response.data.message);
                })
                .catch((err) => {
                  setStakeError("送信エラー: " + err.message);
                });
              setLoading(false);
            }}
          >
            {loading ? '送信中...' : '送信'}
          </button>
        </div>
        {stakeError && <p className="text-red-400 mt-2 text-sm">{stakeError}</p>}
        {result && <p className="text-green-600 mt-2 text-sm">{result}</p>}
      </div>
    </div >
  )
}

export default Page
