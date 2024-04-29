import { useState } from "react";

function Search({ setTags }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTags((prev) => [...prev, text]);
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between">
      <input
        autoComplete="off"
        type="text"
        placeholder="busieness"
        name="tag"
        value={text}
        onChange={handleChange}
        className="w-[80%] border border-cyan-300 p-4 text-base outline-none"
      />
      <button
        type="submit"
        className="text-cyan-500 font-bold w-[20%] text-base"
      >
        ADD
      </button>
    </form>
  );
}

export default Search;
