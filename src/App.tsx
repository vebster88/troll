import { sdk } from "@farcaster/frame-sdk";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useSignMessage } from "wagmi";

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      sdk.actions.ready();
      setIsReady(true);
    } catch (error) {
      console.error("Failed to initialize Farcaster SDK:", error);
      // Still allow the app to render even if SDK fails
      setIsReady(true);
    }
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Troll Mini App</h1>
      <p>Built with Vite + TypeScript + React + Wagmi</p>
      {isReady && <ConnectMenu />}
    </div>
  );
}

function ConnectMenu() {
  const { isConnected, address } = useAccount();
  const { connect, connectors, isPending: isConnecting, error: connectError } = useConnect();

  if (isConnected) {
    return (
      <div>
        <div style={{ marginBottom: "20px" }}>
          <h2>✅ Connected</h2>
          <p style={{ wordBreak: "break-all" }}>Address: {address}</p>
        </div>
        <SignButton />
      </div>
    );
  }

  return (
    <div>
      <button 
        type="button" 
        onClick={() => connect({ connector: connectors[0] })}
        disabled={isConnecting || connectors.length === 0}
        style={{ 
          padding: "10px 20px", 
          fontSize: "16px",
          cursor: isConnecting || connectors.length === 0 ? "not-allowed" : "pointer"
        }}
      >
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </button>
      {connectError && (
        <div style={{ marginTop: "10px", color: "red" }}>
          Error: {connectError.message}
        </div>
      )}
      {connectors.length === 0 && (
        <div style={{ marginTop: "10px", color: "orange" }}>
          No connectors available
        </div>
      )}
    </div>
  );
}

function SignButton() {
  const { signMessage, isPending, data, error } = useSignMessage();

  return (
    <div style={{ marginTop: "20px" }}>
      <button 
        type="button" 
        onClick={() => signMessage({ message: "Hello from Troll Mini App!" })} 
        disabled={isPending}
        style={{ 
          padding: "10px 20px", 
          fontSize: "16px",
          cursor: isPending ? "not-allowed" : "pointer"
        }}
      >
        {isPending ? "Signing..." : "Sign Message"}
      </button>
      {data && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "rgba(0, 255, 0, 0.1)", borderRadius: "5px" }}>
          <div style={{ fontWeight: "bold" }}>✅ Signature:</div>
          <div style={{ wordBreak: "break-all", fontSize: "12px" }}>{data}</div>
        </div>
      )}
      {error && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "rgba(255, 0, 0, 0.1)", borderRadius: "5px", color: "red" }}>
          <div style={{ fontWeight: "bold" }}>❌ Error:</div>
          <div>{error.message}</div>
        </div>
      )}
    </div>
  );
}

export default App;
