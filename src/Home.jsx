import { useState } from "react";
import EvenOrOdd from "./programms/EvenOrOdd";
import Factorial from "./programms/Factorial";
import PrimeComposite from "./programms/PrimeComposite";
import Palindrome from "./programms/Palindrome";    
import MultiplicationTable from "./programms/Table";

const Home = () =>{

    const questions = ["Even or Odd", "Factorial","Prime or Composite", "Palindrome", "Multiplication Table", "Another New Program"];  
    const [component_name, setComponentName] = useState(null);

    const handlelistItemClick = (event) => {
        const selectedComponent = event.target.innerText;
        setComponentName(selectedComponent);
    
    }

    const renderComponent = () => {
        switch(component_name){
            case "Even or Odd":
                return <EvenOrOdd />;
            case "Factorial":
                return <Factorial/>;
            case "Prime or Composite":
                return <PrimeComposite />;
            case "Palindrome":
                return <Palindrome />;
            case "Multiplication Table":
                return <MultiplicationTable />;
            default:
                return null;
        }   

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
        <h3 className="heading"> 5 Basic Programmes</h3>
        <ul className="list">
            {questions.map(questions =>{
                return <li key={questions} className="list-item" onClick={handlelistItemClick}>{questions}</li>;
            })}
        </ul>
                </div>

                <div className="col-6">
                    {renderComponent()}
                </div>
            </div>

        <p className="paragraph">
            These are some of the most popular and basic Programmes for beginners.
        </p>
    </div>
    )
}

export default Home;