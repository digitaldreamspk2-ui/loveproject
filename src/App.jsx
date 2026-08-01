import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";

export default function App() {
  const [step, setStep] = useState(0);

  const next = () => setStep(step + 1);

  const moveNo = (e) => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    e.target.style.position = "fixed";
    e.target.style.left = x + "px";
    e.target.style.top = y + "px";
  };
const celebrate = () => {

  confetti({
    particleCount: 250,
    spread: 180,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    confetti({
      particleCount: 200,
      angle: 60,
      spread: 70,
      origin: { x: 0 }
    });

    confetti({
      particleCount: 200,
      angle: 120,
      spread: 70,
      origin: { x: 1 }
    });
  },400);

  document.body.classList.add("glow");

  setTimeout(()=>{
      alert("💖 I Love You Faiza 💖");
      document.body.classList.remove("glow");
  },1000);

};
  return (
    <div className="app">
      <div className="hearts"></div>

      {step === 0 && (
        <div className="card">
          <h1>Hey Faiza ❤️</h1>
          <p>Bas 30 seconds chahiye... phir jo faisla hoga woh mujhe qubool hoga.</p>
          <button onClick={next}>Start ✨</button>
        </div>
      )}

      {step === 1 && (
        <div className="card">
          <h2>Question 1 ❤️</h2>
          <p>Kya tum mujh par sirf 30 seconds ke liye trust karogi?</p>
          <button onClick={next}>Yes ❤️</button>
        </div>
      )}

      {step === 2 && (
        <div className="card">
          <h2>Question 2 🌸</h2>
          <p>
            Agar koi tumhari respect kare, care kare aur hamesha tumhari smile
            ki wajah banna chahe...
          </p>
          <button onClick={next}>Bilkul 💕</button>
        </div>
      )}

      {step === 3 && (
        <div className="card">
          <h2>Last Question 🥺</h2>
          <p>Kya tum dil ki baat sunne ke liye ready ho?</p>
          <button onClick={next}>Ready ❤️</button>
        </div>
      )}

      {step === 4 && (
        <div className="card">
          <h1>❤️ Dear Faiza ❤️</h1>

          <p>
            Shayad main perfect nahi hoon...
            <br /><br />
            Lekin meri feelings bilkul real hain.
            <br /><br />
            Jab bhi tumhari smile dekhta hoon,
            dil sirf yehi kehta hai...
            <br /><br />
            <b>Will You Be Mine? 💍</b>
          </p>

          <div className="buttons">
            <button
              onClick={celebrate}
            >
              YES ❤️
            </button>

            <button onMouseOver={moveNo}>
              No 🙈
            </button>
          </div>
        </div>
      )}
    </div>
  );
}