import '../styles/SearchBar.css';

export function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="search-bar-wrapper">
      <span className="search-icon">
        <svg width="20" height="20" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      </span>
      <input
        type="text"
        className="error-search"
        placeholder="Search error code or title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}