// pages/menu.tsx
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();

  const startMatchmaking = async () => {
    const res = await fetch(
      "https://zofg6ai9t8.execute-api.ap-northeast-2.amazonaws.com/game/match/request",
      {
        method: "POST",
        body: JSON.stringify({
          playerId: Math.random().toString(36).substring(7),
        }),
      }
    );

    if (res.ok) {
      const data = await res.json();
      const { ticketId } = data as Record<string, string>;
      void router.push(`/game/match-status?ticketId=${ticketId}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Menu</h2>
        <button
          onClick={startMatchmaking}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Start Matchmaking
        </button>
        <button
          onClick={async () => await router.push("/me")}
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        >
          My Info
        </button>
        <button
          onClick={async () => await router.push("/rankings")}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Rankings
        </button>
      </div>
    </div>
  );
}
