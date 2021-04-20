
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import '../css/App.css'

const baseUrl = "https://6b879fbb-dcd7-47a5-bd07-1bb17232f1a6.mock.pstmn.io"
class altaProver extends Component {


constructor(props){
    super(props);
    this.cif = React.createRef()
    this.nombre = React.createRef()
    this.direccion = React.createRef()
    this.poblacion = React.createRef()
    this.provincia= React.createRef()
    this.codPostal = React.createRef()
    this.PersCont= React.createRef()
    this.Email= React.createRef()
    this.proveedores= React.createRef()
}

    savePAS = async () => {
        var pas={
            cif : this.cif.current.value,
            nombre : this.nombre.current.value, 
            direccion: this.direccion.current.value,
            poblacion:this.poblacion.current.value,
            provincia:this.provincia.current.value,
            codPostal:this.codPostal.current.value,
            PersCont:this.PersCont.current.value,
            Email:this.Email.current.value,
            proveedores:this.proveedores.current.value
        }  
        }

        alta = async () => {
            await axios.post(baseUrl, {param:this.pas})

        }
        
    
   
    render() {
        return (
            <div>
            <div className="App-header">
              <p id="p1">Alta de Proveedor de Asistencia Sanitaria</p>
              <input id = "standard-basic" ref = {this.cif} placeholder={"CIF"} label="CIF" onChange = { this.savePAS}/>
              <input id="standard-basic" label="Nombre Completo" ref = {this.nombre} placeholder={"Nombre Completo"}/>
              <input id="standard-basic" label="Dirección"ref = {this.direccion} placeholder={"Direccion"}/>
              <input id="standard-basic" label="Población" ref = {this.poblacion}placeholder={"Ploblación"}/>
              <input id="standard-basic" label="Provincia"ref = {this.provincia}placeholder={"Provicia"} />
              <input id="standard-basic" label="Código Postal" ref = {this.codPostal}placeholder={"Códifo Postal"}/>
              <input id="standard-basic" label="Persona de contacto" ref = {this.PersCont}placeholder={"Persona de Contacto"}/>
              <input id="standard-basic" label="Email" ref = {this.Email}placeholder={"Email"}/>
              <input id="standard-basic" label="Tipo de proveedor" ref = {this.proveedores}placeholder={"Tipo de proveedor"}/>
              <Button variant="contained" color="primary" id="ocho" onClick={this.alta()}>Dar de alta PAS</Button>
              <Button variant="contained" color="primary" id="nueve">Dar de alta Centro Sanitario</Button>
      
            </div>
            </div>
        );
    }
}

export default altaProver;
