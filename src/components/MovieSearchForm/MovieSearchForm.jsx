import { useState } from 'react';
import styles from './MovieSearchForm.module.css';

const MovieSearchForm = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim()) {
      onSearch(search.trim());
      setSearch('');
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input type="text" value={search} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearchForm;
