import { useState } from "react";

const Desafio = () => {
    const a = 10;
    const b = 15;
    const [number, setNumber] = useState();
  return (
    <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={() => setNumber(a+b) }>Clique para ver a soma</button>
        <p>{number}</p>
    </div>
  )
}

export default Desafio;
