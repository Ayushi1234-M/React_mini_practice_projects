import React, { useState } from "react";
import "./StarCss.css";

function Star() {
  const arr = [1, 2, 3, 4, 5];

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      <h2>Star Rating</h2>

      <div className="mapStars">
        {arr.map((i) => {
          return (
            <div
              className={i<=((rating && hover) || hover) ? 'starEmojiFill' : 'starEmojiBlank'}
              onClick={() => setRating(i)}
              onMouseOver={() => setHover(i)}
              onMouseLeave={() => setHover(rating)}
            >
              &#9733;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Star;
