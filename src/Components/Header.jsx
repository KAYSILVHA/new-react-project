import React, {useState} from "react";

export default function Header(){
  const [comida, setComida] = useState("");
  const Pizza = ()=> setComida("Pizza")

  return(
    <header>
      <h2>Escolha o seu pedido:</h2>
      <button onClick={()=>setComida("Batata Frita")}>Batata frita</button>
      <button onClick={()=>setComida("Panqueca")}>Panqueca</button>
      <button onClick={Pizza}>Pizza</button>
      <h3>Você escolheu: {comida}</h3>
    </header>
  )
};