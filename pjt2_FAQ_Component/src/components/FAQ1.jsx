import React, { useState } from "react";
import Questions from "../assets/Questions.json";
import "./FAQ1css.css";

export default function FAQ1() {
  const [questionJson, setQuestionJson] = useState(Questions);

  const [showId, setShowId] = useState(null);

  function handleShowAnswer(id) {
    if (id == showId) {
      setShowId(null);
    } else {
      setShowId(id);
    }
  }

  return (
    <div className="faq1comp">
      <h2>FAQ Component</h2>
      <h4>In this component, I am targetting to expand/collapse only one question at a time.</h4>
      <div className="faq-component">
        {questionJson.map((i) => {
          return (
            <div className="faq-indiv">
              <div className="faq-question">
                {i.question}{" "}
                <span className="arrow" onClick={() => handleShowAnswer(i.id)}>
                  {i.id == showId ? <span>➡️</span> : <span>⬇️</span>}
                </span>
              </div>
              {i.id == showId && <div className="faq-answer">{i.ans}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
