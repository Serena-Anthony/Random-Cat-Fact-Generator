import React, { useState } from "react";
import axios from "axios";
import "./MeowFacts.css";
import MyLogo from './cat_logo.png'
const MeowFacts = () => {
  const [fact, setFact] = useState("");

  const fetchFact = async () => {
    try {
      const response = await axios.get(`https://meowfacts.herokuapp.com/`);
      setFact(response.data.data[0]); // Assuming response.data.data is an array with facts
    } catch (error) {
      console.error("error fetching facts:", error);
    }
  };

  return (
    <>
    <header>
        <img src={MyLogo} alt="Logo" className="logo" />
    </header>
      <div className="body">
        <h1>Random Cat Fact Generator</h1>
        <br />
        <button onClick={fetchFact}>Click here for a Cat Fact</button>
        <br />
        {fact && (
          <div className="fact">
            <p>{fact}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MeowFacts;
