import { useState } from "react";
import "./DancingTroll.css";

export function DancingTroll() {
  const [useGif, setUseGif] = useState(false);
  const [isJumping, setIsJumping] = useState<number | null>(null);
  const [jumpStyles, setJumpStyles] = useState<{ [key: number]: React.CSSProperties }>({});

  const handleClick = (index?: number) => {
    const targetIndex = index ?? 0;
    
    // Генерируем случайное направление в радианах (0-2π)
    const angle = Math.random() * Math.PI * 2;
    const distance = 80; // расстояние прыжка
    
    // Вычисляем координаты для разных этапов анимации
    const x1 = Math.cos(angle) * distance * 0.7;
    const y1 = Math.sin(angle) * distance * 0.7;
    const x2 = Math.cos(angle) * distance;
    const y2 = Math.sin(angle) * distance;
    const rotation = (angle * 180) / Math.PI; // конвертируем в градусы
    
    // Устанавливаем стили для анимации
    const newJumpStyle = {
      '--jump-x1': `${x1}px`,
      '--jump-y1': `${y1}px`,
      '--jump-x2': `${x2}px`,
      '--jump-y2': `${y2}px`,
      '--jump-rotation': `${rotation}deg`,
    } as React.CSSProperties;
    
    setJumpStyles(prev => ({ ...prev, [targetIndex]: newJumpStyle }));
    setIsJumping(targetIndex);
    
    // Сбрасываем состояние после анимации
    setTimeout(() => {
      setJumpStyles(prev => {
        const updated = { ...prev };
        delete updated[targetIndex];
        return updated;
      });
      setIsJumping(prev => prev === targetIndex ? null : prev);
    }, 600);
  };

  return (
    <div className="dancing-troll-container">
      <div className="troll-switcher">
        <span className="switch-label">Troll</span>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={useGif}
            onChange={(e) => setUseGif(e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <span className="switch-label">Troll v2</span>
      </div>
      
      {useGif ? (
        <div className="troll-gifs-grid">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`troll-gif-wrapper ${isJumping === index ? 'jump' : ''}`}
              onClick={() => handleClick(index)}
              style={jumpStyles[index] || {}}
            >
              <img 
                src="/images/green_troll.gif" 
                alt={`Dancing Green Troll ${index + 1}`} 
                className="troll-gif"
              />
            </div>
          ))}
        </div>
      ) : (
        <div 
          className={`troll ${isJumping === 0 ? 'jump' : ''}`}
          onClick={() => handleClick()}
          style={jumpStyles[0] || {}}
        >
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
      )}
    </div>
  );
}
