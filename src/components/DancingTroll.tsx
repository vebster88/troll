import "./DancingTroll.css";

export function DancingTroll() {
  return (
    <div className="dancing-troll-container">
      <div className="troll">
        {/* Голова */}
        <div className="troll-head">
          <div className="troll-eye left"></div>
          <div className="troll-eye right"></div>
          <div className="troll-mouth"></div>
        </div>
        {/* Тело */}
        <div className="troll-body">
          <div className="troll-arm left"></div>
          <div className="troll-arm right"></div>
          <div className="troll-leg left"></div>
          <div className="troll-leg right"></div>
        </div>
      </div>
    </div>
  );
}
