import type { ErrorInfo } from "../data/errors";
import "../styles/ErrorCard.css";

export function ErrorCard({ error, onClick }: { error: ErrorInfo; onClick: () => void }) {
  return (
    <button
      className="error-card"
      onClick={onClick}
      aria-label={`Simulate ${error.code} ${error.title}`}
    >
      <div className="error-card-header">
        <span className="error-code">{error.code}</span>
        <span className="error-title">{error.title}</span>
      </div>
    </button>
  );
}