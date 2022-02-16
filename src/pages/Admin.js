import React from 'react'
import { useState, useEffect } from "react";
import { TextareaAutosize } from "@mui/base";
import JsonProduceChooser from "../components/JsonProduceChooser";
import JsonFarmsteadChooser from "../components/JsonFarmsteadChooser";

let json;
let Data;
let JsonData;

const Admin = () => {
  const [inputFields, setInputFields] = useState([
    { Produce: '', FarmStead: '', Region: '' },
  ]);

  let [farmList, setFarmList] = useState([]);

  //connect to backend server
  useEffect(() => {
    fetch(`https://wonkyboxnz-django.herokuapp.com/GetAllFarms`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer awXpFWmbbjcKzveLhJh4aHBW7ChQVLUrY836j63mRGoWr2JnsazMJgFzemgjhqE6FDMUXtaADb2AG3Xxjq`,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setFarmList(resp))
      .catch((error) => console.log(error));
  }, []);

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
      let ProduceData = ProduceRaw[i];
      let FarmSteadData = FarmSteadRaw[i];

      let selected_farm
      for (let ii = 0; ii < farmList.length; ii++) {
        if (farmList[ii].name === FarmSteadRaw[i]) selected_farm = farmList[ii]
      }

      let ProduceInfo =
        '"Name":"' +
        ProduceData +
        '","Farmstead":["' +
        FarmSteadData +
        '"],"Region":["' +
        selected_farm.region +
        '"]';

      Data[i] = "{" + ProduceInfo + "}";
    }

    JsonData = JSON.stringify(Data);
    // ProduceConvert = JsonData;
    // let ProduceConvert = JSON.stringify([Data]);
    json = '{"Produce":[' + Data + "]}";
    console.log(json);
    document.getElementById("Test").innerHTML = json;

    return json;
  };

  const handleChangeInput = (index, event) => {
    const textValues = event.split(":");
    const values = [...inputFields];
    values[index][textValues[0]] = textValues[1];
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
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
            <JsonProduceChooser
              name="Produce"
              label="Produce"
              variant="filled"
              index={index}
              value={inputField.Produce}
              onSelect={(event) => handleChangeInput(index, event)}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <JsonFarmsteadChooser
              name="FarmStead"
              label="FarmStead"
              variant="filled"
              index={index}
              value={inputField.FarmStead}
              onSelect={(event) => handleChangeInput(index, event)}
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