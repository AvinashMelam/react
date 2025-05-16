import React from "react";

const Palindrome = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [result, setResult] = React.useState("");

    const checkPalindrome = () => {
        const cleanedInput = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const reversedInput = cleanedInput.split("").reverse().join("");
        setResult(cleanedInput === reversedInput ? "Palindrome" : "Not a Palindrome");
    };

    return (
        <>
            <h3>Palindrome Checker</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Enter Text"
                    style={{
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '16px',
                    }}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    className="btn btn-primary"
                    onClick={checkPalindrome}
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
                    The text is: <span style={{ fontWeight: 'bold' }}>{result}</span>
                </p>
            </div>
        </>
    );          
}

export default Palindrome;  