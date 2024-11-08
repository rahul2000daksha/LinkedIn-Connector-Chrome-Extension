import React from 'react';
import { createRoot } from 'react-dom/client';

function ConnectButton() {
  const connectWithAll = () => {
    const connectButtons = document.querySelectorAll("button");
    let index = 0;

    const connectInterval = setInterval(() => {
      if (index >= connectButtons.length) {
        clearInterval(connectInterval);
        return;
      }
      const button = connectButtons[index];
      if (button.innerText === "Connect") {
        button.click();
      }
      index++;
    }, Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000);
  };

  return (
    <button
      style={{
        position: "fixed",
        bottom: "100px",
        right: "20px",
        padding: "10px 20px",
        backgroundColor: "#0073b1",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        zIndex: 1000,
      }}
      onClick={connectWithAll}
    >
      Connect with All
    </button>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<ConnectButton />);
