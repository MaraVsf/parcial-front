import { useState } from "react";

const Card = ({ validar }) => {
  return (
    <div className="card-container">
      <h3>Hola {validar.nombre}!</h3>
      <h4>Ahora sabemos que tu libro favorito es: {validar.libro}</h4>
    </div>
  );
};

export default Card;
