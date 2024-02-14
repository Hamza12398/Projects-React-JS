import "./CihStyles.css";
import Modal from "./Modal";

export default function LoanForm() {
  return (
    <div className="flex" style={{ flexDirection: "column" }}>
      <form id="cih-form" className="flex" style={{ flexDirection: "column" }}>
        <h1 style={{ fontSize: "40px" }}>Requesting a CIH</h1>
        <hr></hr>

        <label>FULL NAME :</label>
        <input />

        <label>PHONE NUMBER :</label>
        <input />

        <label>AGE :</label>
        <input />

        <label style={{ marginTop: "20px" }}>Are you a employee: </label>
        <input type="chckbox" />

        <label>Salary</label>
        <select>
          <option>less then 500$</option>
          <option>500$</option>
          <option>height then 500$</option>
        </select>

        <button id="cih-btn">Submit</button>
      </form>
      {/* <Modal /> */}
    </div>
  );
}
