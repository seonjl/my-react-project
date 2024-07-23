// pages/match-status.tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MatchStatus() {
  const [status, setStatus] = useState("Searching");
  const [gameSessionInfo, setGameSessionInfo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(async () => {
      console.log(router.query);
      const res = await fetch(
        "https://zofg6ai9t8.execute-api.ap-northeast-2.amazonaws.com/game/match/status",
        {
          method: "POST",
          body: JSON.stringify({
            ticketId: router.query.ticketId,
          }),
        }
      );
      const data = await res.json();
      setStatus(data.status);

      if (data.status === "COMPLETED") {
        setGameSessionInfo(data.gameSessionInfo);
        clearInterval(interval);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (status === "COMPLETED" && gameSessionInfo) {
      // 게임 세션 정보가 설정되면 게임 페이지로 이동
      const { IpAddress, Port } = gameSessionInfo as Record<string, string>;
      void router.push(`/game-room?session=${IpAddress}&port=${Port}`);
    }
  }, [status, gameSessionInfo, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Match Status</h2>
        <p>Status: {status}</p>
        {status === "COMPLETED" && gameSessionInfo && (
          <div>
            <p>
              Game Session: {(gameSessionInfo as any).IpAddress}:
              {(gameSessionInfo as any).Port}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
