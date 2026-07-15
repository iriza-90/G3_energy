import { TICKER_ITEMS } from "@/data/content";

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            <span className="sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
