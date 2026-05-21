import styles from "./MapFilters.module.css";

function MapFilters({ categories, activeCategory, onSelect }) {
  return (
    <nav className={styles.tabs}>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${styles.tab} ${activeCategory === cat ? styles.activeTab : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}

export default MapFilters;