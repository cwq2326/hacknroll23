import "./InputForm.css";
import React, { useRef, useState } from "react";
import axios from "axios";
import Output from "../Output/Output";

const InputForm = (props) => {
  const postalCodeRef = useRef();
  const [station, setStation] = useState("");

  const handleSubmit = async (code) => {
    try {
      const respond = await axios.get(`http://localhost:8000/${code}`);
      const station = respond.data.data.name;
      setStation(station);
    } catch (err) {
      setStation("No data found!");
    }
  };

  return (
    <div>
        <div className="new-input__controls">
          <div className="new-input__control">
            <label>Enter Postal Code</label>
            <input type="text" ref={postalCodeRef} />
            <div className="button" onClick={() => handleSubmit(postalCodeRef.current.value)}>
              &rarr;
            </div>
          </div>
        </div>
      <Output station={station} />
    </div>
  );
};

export default InputForm;
