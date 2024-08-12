import React from "react";

function CategoryFilter(props) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {props.categories.map(function(category) {
        return (
          <button 
            key={category} 
            className={category === props.selectedCategory ? "selected" : ""}
            onClick={function() { props.onSelectCategory(category); }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
