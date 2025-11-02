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
      <h1 style={{ marginBottom: "10px" }}>🔄 Dancing Troll</h1>
      <div className="help-tooltip" style={{ marginBottom: "20px" }}>
        <span className="help-icon">?</span>
        <span className="tooltip-text">Click on the troll and it will do a trick for you</span>
      </div>
      <DancingTroll />
    </div>
  );
}

export default App;
