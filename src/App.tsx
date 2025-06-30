import { useState } from "react";
import { CategoryFilter } from "./components/CategoryFilter";
import { ErrorCard } from "./components/ErrorCard";
import { ErrorPage } from "./components/ErrorPage";
import { SearchBar } from "./components/SearchBar";
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
            <SearchBar value={search} onChange={setSearch} />
            <CategoryFilter category={category} setCategory={setCategory} />
          </header>
          <main>
            <div className="error-grid">
              {filteredErrors.length > 0 ? (
                filteredErrors.map((error) => (
                  <ErrorCard key={error.code} error={error} onClick={() => setSelectedError(error)} />
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
