import { useState } from "react";
import type { ErrorInfo } from "../data/errors";
import "../styles/ErrorPage.css";

export function ErrorPage({
  error,
  onBack,
}: {
  error: ErrorInfo;
  onBack: () => void;
}) {
  const [showExample, setShowExample] = useState(false);

  return (
    <div className="error-page">
      <img src="/oopsify.svg" alt="Oopsify Logo" className="oopsify-logo" />
      <h1 className="error-code">{error.code}</h1>
      <h2 className="error-title">{error.title}</h2>
      <p className="error-description">{error.description}</p>
      {error.example && (
        <div className="error-example-expandable">
          <button
            className="example-toggle"
            onClick={() => setShowExample((v) => !v)}
            aria-expanded={showExample}
          >
            {showExample ? "Hide Example ▲" : "Show Example ▼"}
          </button>
          {showExample && (
            <pre className="example-content">{error.example}</pre>
          )}
        </div>
      )}
      <button className="back-btn" onClick={onBack}>
        Back to Home
      </button>
    </div>
  );
}