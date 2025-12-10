import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Game() {
  const navigate = useNavigate();
  function displayNumbers() {
    
    //4x4 matrix
    //[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];

    const list = [];

    for (let i = 1; i <= 3; i++) {
      list.push(i);
      list.push(i);
    }

    return list.sort(() => Math.random() - 0.5);
  }

  const [displayNums, setDisplayNums] = useState(displayNumbers());

  const [currIdxOne, setCurrIdxOne] = useState("");
  const [currIdxTwo, setCurrIdxTwo] = useState("");

  function handleCards(num, idx) {
    if (currIdxOne === "") {
      setCurrIdxOne(idx);
    } else if (currIdxTwo === "") {
      setCurrIdxTwo(idx);
    }
  }

  const[matchedIndexes, setMatchedIndexes]=useState([]);

  useEffect(() => {
    if (currIdxOne !== "" && currIdxTwo !== "") {
      if (displayNums[currIdxOne] == displayNums[currIdxTwo]) {
        setMatchedIndexes([...matchedIndexes, currIdxOne, currIdxTwo]);
        setCurrIdxOne("");
        setCurrIdxTwo("");
      } else {
        setTimeout(() => {
          setCurrIdxOne("");
          setCurrIdxTwo("");
        }, 1000);
      }
    }
  }, [currIdxOne, currIdxTwo, matchedIndexes]);

  useEffect(() => {
    if (matchedIndexes.length === displayNums.length && matchedIndexes.length > 0) {
      navigate('/done');
    }
  }, [matchedIndexes, navigate]);

  return (
    <div>
      <h3>Game Started!</h3>

      <div className="boxes">
        {displayNums.map((i, idx) => {
          return (
            <div
              className={
                matchedIndexes.includes(idx)?'matchedcards' :
                idx === currIdxOne || idx === currIdxTwo
                  ? "cellsShow"
                  : "cellsHide"
              }
              onClick={() => handleCards(i, idx)}
            >
              {idx === currIdxOne || idx === currIdxTwo ? i : ""}
            </div>
          );
        })}
      </div>      
    </div>
  );
}

export default Game;
