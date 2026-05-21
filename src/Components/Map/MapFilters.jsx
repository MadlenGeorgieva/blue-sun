import styles from "./MapFilters.module.css";

// Displays category buttons and highlights the currently selected category
function MapFilters({ categories, activeCategory, onSelect }) {
  return (

    // Navigation container holding all filter buttons
    <nav className={styles.tabs}>

      {/* Loops through the categories array and creates a button for each category */}
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${styles.tab} ${
            activeCategory === cat
              ? styles.activeTab
              : ""
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}

export default MapFilters;