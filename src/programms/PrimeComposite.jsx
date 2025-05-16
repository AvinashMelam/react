import React from "react";

const PrimeComposite = () => {
    const [number, setNumber] = React.useState(0);
    const [result, setResult] = React.useState("");

    const checkPrimeComposite = () => {
        if (number < 2) {
            setResult("Neither Prime nor Composite");
            return;
        }
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        setResult(isPrime ? "Prime" : "Composite");
    };

    return (
        <>
            <h3>Prime or Composite</h3>
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
                    onClick={checkPrimeComposite}
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
                    The number is: <span style={{ fontWeight: 'bold' }}>{result}</span>
                </p>
            </div>
        </>
    );
};
export default PrimeComposite;