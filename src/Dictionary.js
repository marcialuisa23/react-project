import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  function handleResponse(response) {
   
   setResult(response.data);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = "2500ff940720t52b8co404b3bd5325a6";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyword} />
      </form>
      <Result result = {result} />
    </div>
  );
}
