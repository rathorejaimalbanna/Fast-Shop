import React from 'react';
import styles from '../../app.module.css';
import CheckBox from './checkbox';
import UseValue from '../../contextApi';

// Aside component responsible for rendering filter options
export default function Aside() {
  // Retrieve filter state and setter function from context
  var { filter, setFilter, setDependency,dependency } = UseValue();

  // Function to handle checkbox change
  function handleChange(type) {
    const index = filter.indexOf(type);
    if (index > -1) {
      // Remove type from filter if it exists
      filter = filter.filter((_, id) => id !== index);
      setFilter(filter);
    } else {
      // Add type to filter if it doesn't exist
      filter.push(type);
      setFilter(filter);
    }
    setDependency(!dependency)
  }

  return (
    <div className={styles.asideSection}>
      {/* Render filter options */}
      <h3 style={{ marginLeft: '15%', marginBottom: '15%' }}>Filter</h3>
      <ul>
        <li className={styles.asideLineItem}>
          {/* Render checkbox for Men's Fashion */}
          <CheckBox option="Men's Fashion" handleChange={handleChange} />
        </li>
        <li className={styles.asideLineItem}>
          {/* Render checkbox for Women's Fashion */}
          <CheckBox option="Women's Fashion" handleChange={handleChange} />
        </li>
        <li className={styles.asideLineItem}>
          {/* Render checkbox for Books */}
          <CheckBox option="Books" handleChange={handleChange} />
        </li>
        <li className={styles.asideLineItem}>
          {/* Render checkbox for Electronics */}
          <CheckBox option="Electronics" handleChange={handleChange} />
        </li>
      </ul>
    </div>
  );
}
