import React from "react";

let json;
const Admin = () => {


  const [inputFields, setInputFields] = React.useState([
    { Produce: "", FarmStead: "", Region: "" },
  ]);


  const handleSubmit = (e) => {
    e.preventDefault();

    let size = inputFields.length;
    let ProduceRaw = [size];
    let FarmSteadRaw = [size];
    let RegionRaw = [size];
    let Data = [size];
    let ProduceConvert = [size];
    let JsonData = [size];
    for (let i = 0; i < size; i++) {
      ProduceRaw[i] = inputFields[i].Produce;
      FarmSteadRaw[i] = inputFields[i].FarmStead;
      RegionRaw[i] = inputFields[i].Region;
      let RegionData = RegionRaw[i];
      let FarmSteadData = FarmSteadRaw[i];
      let ProduceData = ProduceRaw[i];
      let ProduceInfo =
        '"Name":["' +
        ProduceData +
        '"],"Farmstead":["' +
        FarmSteadData +
        '"],"Region":["' +
        RegionData +
        '"]';

      Data[i] = "{" + ProduceInfo + "}";
    }
    JsonData = JSON.stringify(Data);
    ProduceConvert = JsonData;
    // let ProduceConvert = JSON.stringify([Data]);
    json = '{"Produce":[' + Data + "]}";
    console.log("Size ", size);
    console.log("Produce", json);

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
            &nbsp;&nbsp;
            <button onClick={() => handleRemoveFields(index)}>-</button>
            &nbsp;&nbsp;
            <button onClick={() => handleAddFields()}>+</button>
          </div>
        ))}
      </form>
      <br />
      <button onClick={handleSubmit}>Convert</button> <br />
      <br />
      <textarea id="Test" onChange={(event) => handleSubmit}>
      This is where the text will convert
      </textarea>
    </div>
  );
};

export default Admin;
