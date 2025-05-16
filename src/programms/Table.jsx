import React, { useState } from 'react';

const MultiplicationTable = () => {
  const [numberInput, setNumberInput] = useState(''); // State for the input field value
  const [number, setNumber] = useState(5); // State for the number to multiply
  const [tableRows, setTableRows] = useState([]);

  const handleInputChange = (event) => {
    setNumberInput(event.target.value); // Update the input field state
  };

  const generateTable = () => {
    const value = parseInt(numberInput);
    if (!isNaN(value)) {
      setNumber(value);
      const rows = [];
      for (let i = 1; i <= 10; i++) {
        const product = value * i;
        rows.push(<p key={i}>{value} x {i} = {product}</p>);
      }
      setTableRows(rows);
    } else {
      setTableRows([]); // Clear table if input is not a valid number
    }
  };

  return (
    <div>
      <h3>Multiplication Table</h3>
      <div>
        <label htmlFor="numberInput">Enter a number: </label>
        <input
          type="number"
          id="numberInput"
          value={numberInput} // Bind input value to numberInput state
          onChange={handleInputChange}
          placeholder="Enter a number" // Optional placeholder
        />
        <button  className="btn btn-primary" onClick={generateTable}>Generate Table</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        {tableRows}
      </div>
    </div>
  );
};

export default MultiplicationTable;