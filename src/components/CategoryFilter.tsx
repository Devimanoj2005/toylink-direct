import { categories, Category } from "@/data/products";

interface CategoryFilterProps {
  selected: Category;
  onSelect: (cat: Category) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onSelect(cat.value)}
          className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
            selected === cat.value
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-card text-foreground/70 hover:bg-muted card-shadow"
          }`}
        >
          {cat.emoji} {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
