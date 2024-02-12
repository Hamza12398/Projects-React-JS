import "./App.css";
import { ReactDOM } from "react";
import Header from "./Hearder";
import MyComponent from "./MyComponent";
import MyForm from "./MyForm";
import { useState } from "react";

let nextId = 5;

function App() {
  const [deviceValue, setDeviceValue] = useState("");
  const [devices, setDevices] = useState([
    { id: 1, name: "iphone" },
    { id: 2, name: "ipad" },
    { id: 3, name: "airpods" },
    { id: 4, name: "mac" },
    { id: 5, name: "imac" },
  ]);

  const devicesList = devices.map((device) => {
    return (
      <li key={device.id}>
        {device.name}
        {""}
        <button
          onClick={(e) => {
            // console.log(e);
            handleDelete(device.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={(e) => {
            handleEdit(device.id);
          }}
        >
          Edit
        </button>
      </li>
    );
  });

  function handleDelete(id) {
    const newDevices = devices.filter((device) => {
      return device.id !== id;
    });
    setDevices(newDevices);
  }

  function addOne() {
    setDevices([...devices, { id: nextId, name: deviceValue }]);
    nextId = nextId + 1;
  }

  function handleEdit(id) {
    const newDevices = devices.map((device) => {
      if (device.id === id) {
        let newDevice = {...device, name: device.name + "H"};
        return newDevice;
      } else return device
    });
    setDevices(newDevices)
  }

  return (
    <div style={{ margin: "100px", fontSize: "30px" }}>
      {devicesList}
      <div>
        <input
          value={deviceValue}
          onChange={(e) => {
            setDeviceValue(e.target.value);
            // console.log(e);
          }}
        />
        <button onClick={addOne}>Add</button>
      </div>
    </div>
  );
}

export default App;
