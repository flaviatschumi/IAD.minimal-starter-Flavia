import React, { useState } from "react";
import "./styles.scss";

const Like = ({ start }) => {
  const [count, setCount] = useState(start);

  return (
    <div className="like">
      <button className="like__btn" onClick={() => setCount(count + 1)}>
        <span className="like__count">{234}</span>
        <img className="share" src="./assets/images/heart.svg" alt="heart.svg" />

      </button>
    </div>
  );
};

export default Like;

// used on start to convert start-prop to number
export const convert = (props) => {
  return { ...props, start: parseInt(props.start, 10) || 0 };
};
