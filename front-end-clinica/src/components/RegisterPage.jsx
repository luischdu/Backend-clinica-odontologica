import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = ({
    handleInputChange,
    nombre,
    apellido,
    dni,
    fechaIngreso,
    calle,
    numero,
    localidad,
    provincia,
    usuario,
    password,
    handleSubmit
}) => {
    return (
        <div className="container">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        name="nombre"
                        required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido"
                        value={apellido}
                        onChange={handleInputChange}
                        name="apellido"
                        required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" id="dni"
                        value={dni}
                        onChange={handleInputChange}
                        name="dni"
                        required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="fechaIngreso" className="form-label">Fecha de Ingreso</label>
                    <div className="input-group">
                        <input type="datetime-local" className="form-control" id="fechaIngreso" aria-describedby="fechaIngreso"
                            value={fechaIngreso}
                            onChange={handleInputChange}
                            name="fechaIngreso"
                            required />
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="calle" className="form-label">Calle</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="calle" aria-describedby="calle"
                            value={calle}
                            onChange={handleInputChange}
                            name="calle"
                            required />
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="numero" className="form-label">Numero de calle</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="numero" aria-describedby="numero"
                            value={numero}
                            onChange={handleInputChange}
                            name="numero"
                            required />
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="localidad" className="form-label">Localidad</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="localidad" aria-describedby="localidad"
                            value={localidad}
                            onChange={handleInputChange}
                            name="localidad"
                            required />
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="provincia" className="form-label">Provincia</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="provincia" aria-describedby="provincia"
                            value={provincia}
                            onChange={handleInputChange}
                            name="provincia"
                            required />
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <div className="input-group">
                        <span className="input-group-text" id="usuario">@</span>
                        <input type="text" className="form-control" id="usuario" aria-describedby="usuario"
                            value={usuario}
                            onChange={handleInputChange}
                            name="usuario"
                            required />
                    </div>
                </div>
               
                <div className="col-md-4">
                    <label htmlFor="contraseña" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="contraseña"
                        value={password}
                        onChange={handleInputChange}
                        name="password"
                        required />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Registrar paciente</button>
                </div>


                <div className="checkbox mt-3 mb-3">
                    <Link to="/meets">Ya tengo una cuenta</Link>
                </div>
            </form >
        </div >
    )
}

export default RegisterPage
