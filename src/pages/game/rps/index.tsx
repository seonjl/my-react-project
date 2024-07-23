// pages/game.tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const choices = ["rock", "paper", "scissors"];

export default function Game() {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected != null) {
      const ws = new WebSocket("ws://localhost:3000");

      ws.onopen = () => {
        ws.send(JSON.stringify({ type: "play", choice: selected }));
      };

      ws.onmessage = (message) => {
        const data = JSON.parse(message.data);
        setResult(data.result);
      };

      return () => {
        ws.close();
      };
    }
  }, [selected]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Rock Paper Scissors</h2>
        <div className="flex justify-around mb-4">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => {
                setSelected(choice);
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded"
              disabled={!(selected == null)}
            >
              {choice}
            </button>
          ))}
        </div>
        {result != null && <p className="text-xl">Result: {result}</p>}
        <button
          onClick={async () => await router.push("/game/menu")}
          className="bg-gray-500 text-white py-2 px-4 rounded mt-4"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}
