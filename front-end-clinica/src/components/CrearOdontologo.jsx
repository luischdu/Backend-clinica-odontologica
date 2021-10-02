import React from 'react'

const CrearOdontologo = ({
    handleInputChange,
    nombre,
    apellido,
    matricula,
    usuario,
    password,
    handleSubmit
}) => {
    return (
        <div>
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
                    <label htmlFor="matricula" className="form-label">Matricula</label>
                    <input type="number" className="form-control" id="matricula"
                        value={matricula}
                        onChange={handleInputChange}
                        name="matricula"
                        required />
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
                    <button className="btn btn-primary" type="submit">Registrar odontologo</button>
                </div>
            </form>
        </div>
    )
}

export default CrearOdontologo
