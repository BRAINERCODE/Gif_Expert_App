import react, { useState } from "react";

export default function AddCategory({ setCategories }) {
  const [inputValue, setImputValue] = useState("");

  function handleImputChange(event) {
    setImputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [inputValue, ...cat]);
      setImputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleImputChange} value={inputValue} />
    </form>
  );
}
