import React from "react";
import "./header.css";

function Header({ active = "tasks", onNavigate = () => {} }) {
  const coins = 1250;
  const energy = { current: 7, max: 10 };
  const xp = { current: 3420, max: 5000 };
  const xpPercent = Math.min(100, Math.round((xp.current / xp.max) * 100));

  return (
    <header className="header">
      <div className="header-top">
        <div className="metric metric-coins" title="Coins">
          <span className="icon coin-icon" aria-hidden>
            🪙
          </span>
          <span className="value">{coins.toLocaleString()}</span>
        </div>

        <div className="metric metric-energy" title="Energy">
          <span className="icon energy-icon" aria-hidden>
            ●
          </span>
          <span className="value">
            {energy.current}/{energy.max}
          </span>
        </div>

        <div className="metric metric-xp" title="Experience">
          <span className="icon" aria-hidden>
            ✨
          </span>
          <span className="label">XP</span>
          <div
            className="xp-bar"
            role="progressbar"
            aria-valuenow={xp.current}
            aria-valuemin={0}
            aria-valuemax={xp.max}
          >
            <div className="xp-fill" style={{ width: `${xpPercent}%` }} />
          </div>
          <span className="value">
            {xp.current}/{xp.max}
          </span>
        </div>
      </div>

      <div className="header-divider" />

      <nav className="header-nav" aria-label="Primary">
        <button
          className={"nav-item" + (active === "tasks" ? " active" : "")}
          onClick={() => onNavigate("tasks")}
        >
          <span className="icon" aria-hidden>
            ⚔️
          </span>
          <span>Tasks</span>
        </button>
        <button
          className={"nav-item" + (active === "calendar" ? " active" : "")}
          onClick={() => onNavigate("calendar")}
        >
          <span className="icon" aria-hidden>
            📅
          </span>
          <span>Calendar</span>
        </button>
        <button
          className={"nav-item" + (active === "game" ? " active" : "")}
          onClick={() => onNavigate("game")}
        >
          <span className="icon" aria-hidden>
            🎮
          </span>
          <span>Game</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
