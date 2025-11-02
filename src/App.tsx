import { sdk } from "@farcaster/frame-sdk";
import { useEffect } from "react";
import { DancingTroll } from "./components/DancingTroll";

function App() {
  useEffect(() => {
    try {
      sdk.actions.ready();
    } catch (error) {
      console.error("Failed to initialize Farcaster SDK:", error);
    }
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>🔄 Troll Mini App</h1>
      <DancingTroll />
    </div>
  );
}

export default App;
