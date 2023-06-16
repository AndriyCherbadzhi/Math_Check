import './App.css';
import {useState} from "react";

const operandVariants = ["+", "-", "*"]

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

const getRandomOperand = () => operandVariants[random(0, 2)];

const randomNumber = () => random(0, 15);

const calculate = (n1, n2, operand) => {
    if (operand === "+") return n1 + n2
    if (operand === "-") return n1 - n2
    if (operand === "*") return n1 * n2
};


function App() {

    const n1Initial = randomNumber();
    const n2Initial = randomNumber();
    const operandInitial = getRandomOperand();

    const [operand, setOperand] = useState(operandInitial);
    const [n1, setN1] = useState(n1Initial);
    const [n2, setN2] = useState(n2Initial);
    const [answer, setAnswer] = useState();
    const [res, setRes] = useState("");
    const [posCounter, setPosCounter] = useState(0)
    const [negCounter, setNegCounter] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)


    const [result, setResult] = useState(calculate(n1Initial, n2Initial, operandInitial));


    const shake = () => {
        const n1 = randomNumber(), n2 = randomNumber(), operand = getRandomOperand()
        setN1(n1);
        setN2(n2);
        setOperand(operand);
        setResult(calculate(n1, n2, operand));
    };
    const check = () => {
        if (answer === result) {
            setRes("Correct")
            setPosCounter(posCounter + 1)

        } else {
            setRes("Incorrect")
            setNegCounter(negCounter + 1)
        }

        shake()
        setAnswer("")
    };

    function openAnswer() {
        setShowAnswer(!showAnswer)
    }




    return (
        <div className="App">

            {n1} {operand} {n2} = <input type="number" value={answer} onChange={e => setAnswer(+e.target.value)}/>
            <button onClick={check}>check</button>
            <hr/>
            {res}
            <br/>
            <button onClick={shake}>shake</button>
            <hr/>
            <button onClick={openAnswer}>{showAnswer? "Hide Answer": "Show Answer"}</button>
            <br/>
            {showAnswer && result}
            <hr/>
            <table align={"center"} border={2}>
                <tr>
                    <td> Correct</td>
                    <td> Incorrect</td>
                </tr>
                <tr>
                    <td>{posCounter}</td>
                    <td> {negCounter}</td>
                </tr>
            </table>

        </div>
    );
}

export default App;
