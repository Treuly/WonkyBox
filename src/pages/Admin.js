import React, { useState } from "react";
import { TextareaAutosize } from "@mui/base";

let json;
let Data;
let JsonData;
const Admin = () => {
  const [inputFields, setInputFields] = useState([
    { Produce: "", FarmStead: "", Region: "" },
  ]);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    let size = inputFields.length;
    let ProduceRaw = [size];
    let FarmSteadRaw = [size];
    let RegionRaw = [size];
    Data = [size];
    JsonData = [size];
    for (let i = 0; i < size; i++) {
      ProduceRaw[i] = inputFields[i].Produce;
      FarmSteadRaw[i] = inputFields[i].FarmStead;
      RegionRaw[i] = inputFields[i].Region;
      let RegionData = RegionRaw[i];
      let FarmSteadData = FarmSteadRaw[i];
      let ProduceData = ProduceRaw[i];
      let ProduceInfo =
        '"Name":"' +
        ProduceData +
        '","Farmstead":["' +
        FarmSteadData +
        '"],"Region":["' +
        RegionData +
        '"]';

      Data[i] = "{" + ProduceInfo + "}";
    }

    JsonData = JSON.stringify(Data);
    // ProduceConvert = JsonData;
    // let ProduceConvert = JSON.stringify([Data]);
    json = '{"Produce":[' + Data + "]}";
    // console.log("Size ", size);
    console.log(json);
    document.getElementById("Test").innerHTML = json;

    return json;
  };

  const handleChangeInput = (index, event) => {
    console.log(index, event.target.name);
    console.log(event.target.value);
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { Produce: "", FarmStead: "", Region: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <div>
      <h1>Add New WeeklyBox</h1>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <input
              name="Produce"
              label="Produce"
              variant="filled"
              value={inputField.Produce}
              onChange={(event) => handleChangeInput(index, event)}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              name="FarmStead"
              label="FarmStead"
              variant="filled"
              value={inputField.FarmStead}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <input
              name="Region"
              label="Region"
              variant="filled"
              value={inputField.Region}
              onChange={(event) => handleChangeInput(index, event)}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => handleRemoveFields(index)}>-</button>
            &nbsp;&nbsp;
            <button onClick={() => handleAddFields()}>+</button>
          </div>
        ))}
      </form>
      <br />
      <button onClick={handleSubmit}>Convert</button> <br />
      <br />
      <TextareaAutosize
        id="Test"
        onChange={handleSubmit}
        aria-label="minimum height"
        minRows={3}
        placeholder="Minimum 3 rows"
        style={{ width: 450 }}
      />
    </div>
  );
};

export default Admin;
