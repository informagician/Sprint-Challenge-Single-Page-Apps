import React, { useState} from "react";

export default function SearchForm(props) {
  
  const handleChange = e => {
    props.setSearchTerm(e.target.value);
  }
  return (
    <section className="search-form">
      <form>
        <label htmlFor="seach">Search Characters
          <input 
            id="search"
            name="search" 
            placeholder="Search"
            value={props.searchTerm}
            onChange={handleChange}
          />
        </label>
      </form>
    </section>
  );
}
