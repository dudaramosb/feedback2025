import iconStar from "./assets/icon-star.svg"
import illustrationThankYou from "./assets/illustration-thank-you.svg"
import { useState } from "react"
import { CardInicial } from "./components/CardInicial";

export function App() {
  const [nota, setNota] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleTrocarNota(nota) {
    setNota(nota);

    console.log(nota);
  }

  function handleSubmit() {
    if (nota !== 0) {
      setSubmitted(true)
      return;
    }

    alert("Please, select a rate button!");
  }

  return (
    submitted === false ? (
      <CardInicial />
    ) : (
      <div className="max-w-103 bg-gradient-dark p-6 rounded-2xl text-white font-overpass text-center">
        <img className="mx-auto mb-6" src={illustrationThankYou} alt="illustration thank you" />

        <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl text-sm">
          You selected {nota} out of 5
        </p>

        <h1 className="text-2xl font-bold mb-2.5">Thank you!</h1>

        <p className="text-sm text-light-grey mb-6">
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>

        <p className="text-sm text-light-grey mb-6"></p>
      </div>
    )
  );
}
