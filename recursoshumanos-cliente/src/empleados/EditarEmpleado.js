import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditarEmpleado() {
    let navegacion = useNavigate();
    const urlBase = "http://localhost:8080/api/rh/empleado";

    const {id} = useParams();

    const [empleado,setEmpleado] = useState({
        nombre : "",
        departamento : "",
        sueldo: 0
    });

    const {nombre, departamento, sueldo} = empleado;

    const onInputChange = (evento) =>{
      setEmpleado({...empleado, [evento.target.name]: evento.target.value})
    }

    const onSubmit = async (evento) => {
        evento.preventDefault();
        
        await axios.put(`${urlBase}/${id}`, empleado);
        navegacion('/')
    }

    useEffect(()=>{
      cargarEmpleado(id);
    },[])

    const cargarEmpleado = async () =>{
      const resultado = await axios.get(`${urlBase}/${id}`);
      setEmpleado(resultado.data);
    }

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Editar Empleado</h3>
      </div>
      <form onSubmit={(evento) => onSubmit(evento)}>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" name="nombre" required={true} value={nombre} onChange={(evento) => onInputChange(evento)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="departamento" className="form-label">Departamento</label>
            <input type="text" className="form-control" id="departamento" name="departamento"  required={true} value={departamento} onChange={(evento) => onInputChange(evento)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="Sueldo" className="form-label">Sueldo</label>
            <input type="number" className="form-control" id="sueldo" name="sueldo"  required={true} value={sueldo} onChange={(evento) => onInputChange(evento)}/>
        </div>
        <div className="text-center">
            <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
            <Link  to="/" className="btn btn-danger btn-sm">Regresar</Link>
        </div>
        </form>
    </div>
  );
}
