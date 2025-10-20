import React, { useMemo, useState } from "react";
import "./game.css";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function Game() {
  const MAX_HP = 100;
  const [hp, setHp] = useState(MAX_HP);
  const [log, setLog] = useState([]);

  const hpPct = useMemo(() => Math.round((hp / MAX_HP) * 100), [hp]);

  function attack() {
    if (hp <= 0) return;
    const dmg = Math.floor(Math.random() * 15) + 5; // 5-19 dmg
    const next = clamp(hp - dmg, 0, MAX_HP);
    setHp(next);
    setLog((l) =>
      [
        { t: Date.now(), msg: `You strike for ${Math.min(dmg, hp)} damage!` },
        ...l,
      ].slice(0, 6)
    );
  }

  function reset() {
    setHp(MAX_HP);
    setLog([]);
  }

  return (
    <div className="game-card">
      <div className="dragon-art" aria-hidden>
        {/* Placeholder image area; swap src when you have an asset */}
        <div className="dragon-frame">🐉</div>
      </div>

      <h1 className="boss-name">Shadow Drake</h1>
      <p className="boss-sub">Ancient Guardian of Tasks</p>

      <div className="hp-row">
        <span className="hp-label">HP</span>
        <span className="hp-count">
          {hp}/{MAX_HP}
        </span>
      </div>
      <div
        className="hp-bar"
        role="progressbar"
        aria-valuenow={hp}
        aria-valuemin={0}
        aria-valuemax={MAX_HP}
      >
        <div className="hp-fill" style={{ width: `${hpPct}%` }} />
      </div>

      <div className="game-actions">
        <button className="attack-btn" onClick={attack} disabled={hp <= 0}>
          ⚔️ Attack
        </button>
        {hp <= 0 && (
          <button className="reset-btn" onClick={reset}>
            Reset
          </button>
        )}
      </div>

      <p className="ap-note">Each attack costs 1 Action Point</p>

      {log.length > 0 && (
        <ul className="combat-log">
          {log.map((e) => (
            <li key={e.t}>{e.msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
