import "./styles.css";
import { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        margin: "auto",
        height: "100px",
        width: "100px",
        border: "1px solid red",
        position: "absolute",
        top: "30px",
        left: "calc(50% - 50px)",
        backgroundColor: "yellowgreen"
      }}
    >
      <span onClick={closeModal} style={{ cursor: "pointer" }}>
        close
      </span>
    </div>,
    document.getElementById("modal")
  );
};

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <div className="App">
      <button onClick={openModal}>Open Model</button>
      {showModal && <Modal closeModal={closeModal} />}
      <div>lower area</div>
    </div>
  );
}
