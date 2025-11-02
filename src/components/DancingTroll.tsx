import { useState } from "react";
import "./DancingTroll.css";

export function DancingTroll() {
  const [isJumping, setIsJumping] = useState(false);
  const [jumpStyle, setJumpStyle] = useState<React.CSSProperties>({});

  const handleClick = () => {
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
    setJumpStyle({
      '--jump-x1': `${x1}px`,
      '--jump-y1': `${y1}px`,
      '--jump-x2': `${x2}px`,
      '--jump-y2': `${y2}px`,
      '--jump-rotation': `${rotation}deg`,
    } as React.CSSProperties);
    
    setIsJumping(true);
    
    // Сбрасываем состояние после анимации
    setTimeout(() => {
      setIsJumping(false);
      setJumpStyle({});
    }, 600);
  };

  return (
    <div className="dancing-troll-container">
      <div 
        className={`troll ${isJumping ? 'jump' : ''}`}
        onClick={handleClick}
        style={jumpStyle}
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
    </div>
  );
}
