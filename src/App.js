import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [list, setList] = useState("");
  const [arreglo, setArreglo] = useState([]);
  const eliminar = (index) => {
    let modificar = arreglo.splice(index, 1)
    console.log("eliminar",modificar)
    setArreglo(modificar) }
  console.log(list)
  console.log(arreglo)
  return <div>
    
    <p>Lista de tareas </p>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Busqueda de Tareas</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Busca Aqui" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit"></button>
    </form>
  </div>
</nav>
    <div class="p-3 mb-2 bg-dark text-white">Todos List</div>
    <label htmlFor="email">Nombre del Usuario A Cargo de las Tareas</label>
    <input
      type="text"
      placeholder="Escribe tu email"
      className="form-control"
      id="email"
      value={list}
      name="email"
      required
      onChange={(evento) => setList(evento.target.value)}


    />
    <button type="button" class="btn btn-dark">Presiona para Enviar </button>
    <button onClick={() => setArreglo([...arreglo, list])}>Enviar</button>
    {arreglo.map((element, index) => {
      return (
        <div key={index}>
          <p>{element}</p>
          <button onClick={()=>{eliminar(index)}}>x</button> </div>
          )
    })}
        </div>
};



    export default App;