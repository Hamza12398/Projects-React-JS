import "./CihStyles.css";

export default function Modal({isVisible}) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1>Login Successfully</h1>
        </div>
      </div>
    )
  } else (<></>)
}