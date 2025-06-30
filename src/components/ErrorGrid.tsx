import { ErrorCard } from "./ErrorCard";
import type { ErrorInfo } from "../data/errors";

interface ErrorGridProps {
  errors: ErrorInfo[];
  onSelect: (error: ErrorInfo) => void;
}

export function ErrorGrid({ errors, onSelect }: ErrorGridProps) {
  if (errors.length === 0) {
    return (
      <div
        style={{
          gridColumn: "1/-1",
          textAlign: "center",
          color: "#64748b",
        }}
      >
        No errors found.
      </div>
    );
  }

  return (
    <div className="error-grid">
      {errors.map((error) => (
        <ErrorCard key={error.code} error={error} onClick={() => onSelect(error)} />
      ))}
    </div>
  );
}