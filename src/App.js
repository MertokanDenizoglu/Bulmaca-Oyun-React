import { useState, useEffect } from "react";
import "./App.css";
import { DATA } from "./Data";
const alphabet = [
  "A",
  "B",
  "C",
  "Ç",
  "D",
  "E",
  "F",
  "G",
  "Ğ",
  "H",
  "I",
  "İ",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ö",
  "P",
  "R",
  "S",
  "Ş",
  "T",
  "U",
  "Ü",
  "V",
  "Y",
  "Z",
];

function App() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(" ");
  const [answer, setAnswer] = useState(" ");
  const [answerArray, setAnswerArray] = useState([""]);
  const [resultQuestions,setResultQuestions] = useState(false);
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const [keywords, setKeywords] = useState([]);
  const setKeyword = (keyword) => {
    if (keywords.length < answer.length) {
      keywords.push(keyword);
      setKeywords([...keywords]);
    }
    if(keywords.length == answer.length){
      if(answer== keywords.join("")){
        setIndex(index+1)
        setKeywords([]);
        setResultQuestions(true);
      }else{
        alert("Cevabınız Yanlış...");
        setKeywords([]);
      }
    }
  };
  useEffect(() => {
    setResultQuestions(false);
    if(typeof DATA[index] != undefined){
    const answer = DATA[index].answer.toUpperCase();
    setAnswer(answer);
    setQuestion(DATA[index].question);
    const stringToArray = answer.split("");
    stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    setAnswerArray(shuffle(stringToArray));
    console.log(shuffle(stringToArray));}
  }, [resultQuestions]);
  const removeKeyword=(index)=>{
      keywords.splice(index,1);
      setKeywords([...keywords]);

  }
  return (
    <div className="App">
      <div>
        <span className="output1">{question}</span>
      </div>
      <div>
        {keywords.map((item, index) => (
          <span className={"output"} key={index} onClick={()=>removeKeyword(index)}>{item}</span>
        ))}
      </div>
      <div>
        {answerArray.map((item, index) => (
          <button className="button" key={index} onClick={() => setKeyword(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
