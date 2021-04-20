
import '../css/App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  let cambioZona = (String) =>{
        
    window.location.href='./'+String
 }


  return (
    <div className="App">
      <header className="App-header">
        <p id="p1">¿Que quieres hacer?</p>
        <div className = "row" style = {{height : "100px", width : "100px"}}>
        <Button variant="contained" color="primary" id="uno" onClick={()=>cambioZona("PAS")}>Dar de alta PAS</Button>
        <Button variant="contained" color="primary" id="dos" onClick = {() => cambioZona("Centro")}>Dar de alta Centro Sanitario</Button>
        <Button variant="contained" color="primary" id="tres">Dar de alta médico</Button>
        <Button variant="contained" color="primary" id="cuatro">Crear cuadro médico</Button>
        <Button variant="contained" color="primary" id="cinco">Visualizar Cuadros<br></br> Médicos</Button>
        <Button variant="contained" color="primary" id="seis">Buscar, modificar y<br></br> eliminar Cuadro Médico</Button>
        <Button variant="contained" color="primary" id="siete">Buscar Centro Sanitario</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
