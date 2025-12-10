import React, { useState } from "react";
import Questions from "../assets/Questions.json";
import "./FAQ1css.css";

function FAQ2() {
 
  const [questionJson, setQuestionJson] = useState(Questions);

  function handleShowAnswer(idx) {

    const copiedJson = [...questionJson];

    copiedJson[idx].isOpen = !copiedJson[idx].isOpen;

    setQuestionJson(copiedJson);
    
  }

  return (
    <div className="faq2comp">
      <h2>FAQ Component</h2>
      <h4>In this component, I am targetting to expand/collapse multiple questions at a time.</h4>
      <div className="faq-component">
        {questionJson.map((i, index) => {
          return (
            <div className="faq-indiv">
              <div className="faq-question">
                {i.question}
                <span className="arrow" onClick={() => handleShowAnswer(index)}>
                  {i.isOpen == true ? <span>➡️</span> : <span>⬇️</span>}
                </span>
              </div>
              {i.isOpen == true && <div className="faq-answer">{i.ans}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ2
