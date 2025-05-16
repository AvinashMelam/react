import React from "react";
import { useState } from "react";

const EvenOrOdd = () => {

    const [number, setNumber] = useState(0);
    const check = () => {
        const inputValue = document.querySelector("input").value;
        setNumber(
            inputValue % 2 === 0 ? "Even" : "Odd"
        );
    }   
    return (
        <>
                    <h3>Even Or Odd</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input
        type="number"
        placeholder="Enter Number"
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
        }}
      />
      <button
        className="btn btn-primary" // You can still use Bootstrap classes if included
        onClick={check}
        style={{
          padding: '8px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Submit
      </button>
<p style={{ fontSize: '16px', color: '#333', marginTop: '10px' }}>
      The number is: <span style={{ fontWeight: 'bold' }}>{number}</span>
    </p>
    </div>
    </>
    )
}

export default EvenOrOdd;   