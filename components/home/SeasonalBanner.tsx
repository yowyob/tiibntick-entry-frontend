'use client'

const SNOWFLAKE_COUNT = 30

function seededValue(index: number, salt: number): number {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}

const FLAKES = Array.from({ length: SNOWFLAKE_COUNT }, (_, i) => ({
  id: i,
  left: `${seededValue(i, 1) * 100}%`,
  delay: `${seededValue(i, 2) * 10}s`,
  duration: `${8 + seededValue(i, 3) * 12}s`,
  size: 4 + seededValue(i, 4) * 8,
}))

export default function SeasonalBanner() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {FLAKES.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            width: flake.size,
            height: flake.size,
          }}
        />
      ))}
    </div>
  )
}
