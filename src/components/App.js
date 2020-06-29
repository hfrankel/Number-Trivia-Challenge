import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Number from "./Number";

function App() {
  const [number, setNumber] = useState("");
  // state = { number: "" };

  const onSearchSubmit = async (numberSel, option) => {
    const response = await axios.get(
      `http://numbersapi.com/${numberSel}/${option}`
    );

    setNumber(response.data);
    // this.setState({ number: response.data });
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <Number number={number} />
    </div>
  );
}

export default App;
