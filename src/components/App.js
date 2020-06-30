import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Number from "./Number";

const App = () => {
  const [state, setState] = useState({
    number: "",
  });

  const onSearchSubmit = async (numberSel, option) => {
    const response = await axios.get(
      `http://numbersapi.com/${numberSel}/${option}`
    );
    setState({ number: response.data });
  };

  return (
    <div className='ui container' style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <Number number={state.number} />
    </div>
  );
};

export default App;
