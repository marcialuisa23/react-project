import React from "react";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        {" "}
        <h2 className="Result-tittle"> {props.result.word}</h2>
        <hr/>
       <p>
          {" "}
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                {" "}
                <Meaning meaning={meaning} />{" "}
              </div>
            );
          })}
       </p>
      </div>
    );
  } else {
    return null;
  }
}
