import React, { useState } from "react";

function NewTaskForm(props) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(props.categories[0]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onTaskFormSubmit({ text: text, category: category });
    setText("");
    setCategory(props.categories[0]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text}
          onChange={function(e) { setText(e.target.value); }}
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={category}
          onChange={function(e) { setCategory(e.target.value); }}
        >
          {props.categories.map(function(category) {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
