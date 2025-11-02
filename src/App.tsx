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
    <div style={{ 
      padding: "20px", 
      maxWidth: "600px", 
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      justifyContent: "center"
    }}>
      <h1 style={{ marginBottom: "20px" }}>🔄 Dancing Troll</h1>
      <DancingTroll />
    </div>
  );
}

export default App;
