import { useState } from "react";
import { ErrorPage } from "./components/ErrorPage";
import { errors } from "./data/errors";
import type { ErrorInfo } from "./data/errors";
import "./styles/App.css";

function App() {
  const [selectedError, setSelectedError] = useState<ErrorInfo | null>(null);
  const [search, setSearch] = useState("");

  // Filter errors by code or title
  const filteredErrors = errors.filter(
    (error) =>
      error.code.toString().includes(search.trim()) ||
      error.title.toLowerCase().includes(search.trim().toLowerCase())
  );

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
                  height: "2.2em",
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
            <input
              type="text"
              className="error-search"
              placeholder="Search error code or title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                marginTop: "1.5rem",
                padding: "0.7rem 1.2rem",
                borderRadius: "0.7rem",
                border: "1.5px solid #6366f1",
                fontSize: "1rem",
                width: "100%",
                maxWidth: "340px",
                outline: "none",
              }}
            />
          </header>
          <main>
            <div className="error-grid">
              {filteredErrors.length > 0 ? (
                filteredErrors.map((error) => (
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
                ))
              ) : (
                <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#64748b" }}>
                  No errors found.
                </div>
              )}
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