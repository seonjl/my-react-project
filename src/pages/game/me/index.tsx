// pages/me.tsx
import router from "next/router";
import { useEffect, useState } from "react";

export default function Me() {
  const [user, setUser] = useState<{
    username: string;
    wins: number;
    losses: number;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/me");
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    };
    void fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">My Info</h2>
        {user != null ? (
          <div>
            <p>Username: {user.username}</p>
            <p>Wins: {user.wins}</p>
            <p>Losses: {user.losses}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button
          onClick={async () => await router.push("/menu")}
          className="bg-gray-500 text-white py-2 px-4 rounded mt-4"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}
