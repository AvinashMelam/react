import React from "react";

const Factorial = () => {
    const [number, setNumber] = React.useState(0);
    const [result, setResult] = React.useState(1);

    const calculateFactorial = () => {
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact *= i;
        }
        setResult(fact);
    };

    return (
        <>
            <h3>Factorial</h3>
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
                    onChange={(e) => setNumber(e.target.value)}
                />
                <button
                    className="btn btn-primary"
                    onClick={calculateFactorial}
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
                    Factorial of {number} is <span style={{ fontWeight: 'bold' }}>{result}</span>
                </p>
            </div>
        </>
    );      
}

export default Factorial;