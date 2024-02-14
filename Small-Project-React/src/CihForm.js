import "./CihStyles.css";
import Modal from "./Modal";
import { useState } from "react";

export default function CihForm() {
  const [showModal, setShowModal] = useState(false);
  const [cihInput, setCihInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isOk: false,
    salary: "",
  });
  let btnIsDisable =
    cihInput.name == "" || cihInput.age == "" || cihInput.phoneNumber == "";

  function handlBtn(event) {
    event.preventDefault();
    setShowModal(true);
  }

  function handlDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  return (
    <div
      onClick={handlDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form id="cih-form" className="flex" style={{ flexDirection: "column" }}>
        <h1 style={{ fontSize: "40px" }}>Requesting a CIH</h1>
        <hr></hr>

        <label>FULL NAME :</label>
        <input
          value={cihInput.name}
          onChange={(event) => {
            setCihInput({ ...cihInput, name: event.target.value });
          }}
        />

        <label>PHONE NUMBER :</label>
        <input
          value={cihInput.phoneNumber}
          onChange={(event) => {
            setCihInput({ ...cihInput, phoneNumber: event.target.value });
          }}
        />

        <label>AGE :</label>
        <input
          value={cihInput.age}
          onChange={(event) => {
            setCihInput({ ...cihInput, age: event.target.value });
          }}
        />

        <label style={{ marginTop: "20px" }}>Are you a employee: </label>
        <input
          type="checkbox"
          checked={cihInput.isOk}
          onChange={(e) => {
            setCihInput({ ...cihInput, isOk: e.target.checked });
          }}
        />

        <label>Salary</label>
        <select
          value={cihInput.salary}
          onChange={(event) => {
            setCihInput({ ...cihInput, salary: event.target.value });
          }}
        >
          <option>less then 500$</option>
          <option>500$</option>
          <option>height then 500$</option>
        </select>

        <button
          className={btnIsDisable ? "disable" : ""}
          onClick={handlBtn}
          disabled={btnIsDisable}
          id="cih-btn"
        >
          Submit
        </button>
      </form>
      <Modal isVisible={showModal} />
    </div>
  );
}
