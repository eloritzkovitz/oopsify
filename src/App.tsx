import { useState } from "react";
import "./App.css";
import { errors } from "./data/errors";
import type { ErrorInfo } from "./data/errors";

function ErrorPage({
  error,
  onBack,
}: {
  error: ErrorInfo;
  onBack: () => void;
}) {
  return (
    <div className="error-page">
      <h1 className="error-code">{error.code}</h1>
      <h2 className="error-title">{error.title}</h2>
      <p className="error-description">{error.description}</p>
      <button className="back-btn" onClick={onBack}>
        Back to Home
      </button>
    </div>
  );
}

function App() {
  const [selectedError, setSelectedError] = useState<ErrorInfo | null>(null);

  return (
    <div className="oopsify-container">
      {!selectedError ? (
        <>
          <header className="oopsify-header">
            <h1>
              <img
                src="/oopsify.svg"
                alt="Oopsify Logo"
                className="oopsify-logo"
                style={{
                  height: "2em",
                  verticalAlign: "middle",
                  marginRight: "0.5em",
                }}
              />
              Oopsify
            </h1>
            <p>
              Simulate and learn about HTTP error messages.
              <br />
              Click any error code below to see a simulated error page!
            </p>
          </header>
          <main>
            <div className="error-grid">
              {errors.map((error) => (
                <button
                  key={error.code}
                  className="error-card"
                  onClick={() => setSelectedError(error)}
                  aria-label={`Simulate ${error.code} ${error.title}`}
                >
                  <div className="error-card-header">
                    <span className="error-code">{error.code}</span>
                    <span className="error-title">{error.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </main>
          <footer className="oopsify-footer">
            <small>
              Made by Elor Itzkovitz, Yuval Ben Shitrit, Noa Gedo and Hinoy
              Solomon.
            </small>
          </footer>
        </>
      ) : (
        <ErrorPage
          error={selectedError}
          onBack={() => setSelectedError(null)}
        />
      )}
    </div>
  );
}

export default App;
