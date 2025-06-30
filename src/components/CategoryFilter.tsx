import '../styles/CategoryFilter.css';

type Category = "All" | "Client Error" | "Server Error" | "Other";

interface CategoryFilterProps {
  category: Category;
  setCategory: (cat: Category) => void;
}

export function CategoryFilter({ category, setCategory }: CategoryFilterProps) {
  return (
    <div className="category-filter">
      {["All", "Client Error", "Server Error", "Other"].map((cat) => (
        <button
          key={cat}
          className={category === cat ? "category-btn active" : "category-btn"}
          onClick={() => setCategory(cat as Category)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}