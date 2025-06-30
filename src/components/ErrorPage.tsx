import type { ErrorInfo } from "../data/errors";
import "../styles/ErrorPage.css";

export function ErrorPage({
  error,
  onBack,
}: {
  error: ErrorInfo;
  onBack: () => void;
}) {
  return (
    <div className="error-page">
      <img src="/oopsify.svg" alt="Oopsify Logo" className="oopsify-logo" />
      <h1 className="error-code">{error.code}</h1>
      <h2 className="error-title">{error.title}</h2>
      <p className="error-description">{error.description}</p>
      <button className="back-btn" onClick={onBack}>
        Back to Home
      </button>
    </div>
  );
}
