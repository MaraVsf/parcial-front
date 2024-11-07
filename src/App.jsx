import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [validar, setValidar] = useState({
    nombre: "",
    libro: "",
  });
  console.log(validar);

  const [mostrar, setMostrar] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validar.nombre.trim().length > 2 && validar.libro.length > 5) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
      setMostrar(false);
    }
  };

  return (
    <div>
      <h2>¿Cual es tu libro favorito?</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Nombre:</label>
        <input
          type="text"
          onChange={(event) =>
            setValidar({ ...validar, nombre: event.target.value })
          }
        />
        <label>Libro:</label>
        <input
          type="text"
          onChange={(event) =>
            setValidar({ ...validar, libro: event.target.value })
          }
        />
        <button>Enviar</button>
        {error && (
          <h4 className="error-message">
            Por favor chequea que la información sea correcta
          </h4>
        )}
      </form>
      {mostrar ? <Card validar={validar} /> : null}
    </div>
  );
}

export default App;
