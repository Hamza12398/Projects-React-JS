import "./CihStyles.css";

export default function Modal({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: (errorMessage ? 'red' : 'green') }}>
            {(errorMessage ? errorMessage : "Login Successfuly")}
          </h1>
        </div>
      </div>
    );
  } else <></>;
}
