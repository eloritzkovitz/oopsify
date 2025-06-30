import { useState } from "react";
import { CategoryFilter } from "./components/CategoryFilter";
import { ErrorPage } from "./components/ErrorPage";
import { errors } from "./data/errors";
import type { ErrorInfo } from "./data/errors";
import "./styles/App.css";

function App() {
  const [selectedError, setSelectedError] = useState<ErrorInfo | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<
    "All" | "Client Error" | "Server Error" | "Other"
  >("All");

  // Filter errors by category and by code or title
  const filteredErrors = errors.filter(
    (error) =>
      (category === "All" || error.category === category) &&
      (error.code.toString().includes(search.trim()) ||
        error.title.toLowerCase().includes(search.trim().toLowerCase()))
  );

  return (
    <div className="oopsify-container">
      {!selectedError ? (
        <>
          <header className="oopsify-header">
            <h1 className="header-animate">
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
            <div className="search-bar-wrapper">
              <span className="search-icon">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="21" y2="21" />
                </svg>
              </span>
              <input
                type="text"
                className="error-search"
                placeholder="Search error code or title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <CategoryFilter category={category} setCategory={setCategory} />
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
                <div
                  style={{
                    gridColumn: "1/-1",
                    textAlign: "center",
                    color: "#64748b",
                  }}
                >
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
