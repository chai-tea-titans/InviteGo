import React, { useState, useEffect } from "react";

const DisplaytickerNote = ({ dayOfMonth, monthName, currentYear, onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [savedValue, setSavedValue] = useState("");

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSaveClick = () => {
    // Create a unique key for the saved value using the current date and time
    const now = new Date().toISOString(); // get the current date and time as a string
    const key = `savedValue-${now}`;
    localStorage.setItem(key, inputValue);
    setSavedValue(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    // Retrieve the saved value using the formatted date as the key
    const key = `savedValue_${formattedDate}`;
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setSavedValue(storedValue);
    }
  }, []);

  // Format the date for display
  const date = new Date(`${monthName} ${dayOfMonth}, ${currentYear}`);
  const formattedDate = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}/${date
    .getFullYear()
    .toString()
    .slice(-2)}`;

  return (
    <div>
      <p>{formattedDate}</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSaveClick}>Save</button>
      {savedValue && <p>Stored Value: {savedValue}</p>}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default DisplaytickerNote;