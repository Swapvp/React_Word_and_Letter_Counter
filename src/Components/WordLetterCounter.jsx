// WordLetterCounter.js
import React, { useState } from "react";
import "./WordLetterCounter.css";

function WordLetterCounter() {
  const [text, setText] = useState("");
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const letterCount = text.length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        placeholder="Type your text here..."
        onChange={handleTextChange}
        value={text}
        rows={5}
        cols={50}
      />
      <div className="counter-container">
        <p>
          Word Count:
          {wordCount}
        </p>
        <p>Letter Count: {letterCount}</p>
      </div>
    </div>
  );
}

export default WordLetterCounter;
