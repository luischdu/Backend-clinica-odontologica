import React from 'react'

const PacientesPages = ({ dataPacientes, handleEdit, handleDelete }) => {
    return (
        <div>
            <h1>Pacientes</h1>
            <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Fecha de Ingreso</th>
                        <th scope="col">Fecha de Turno</th>
                        <th scope="col">Calle</th>
                        <th scope="col">Numero</th>
                        <th scope="col">Localidad</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {dataPacientes.map(pacciente => (
                        <tr key={pacciente.id}>
                            <td>{pacciente.id}</td>
                            <td>{pacciente.nombre}</td>
                            <td>{pacciente.apellido}</td>
                            <td>{pacciente.dni}</td>
                            <td>{pacciente.fechaIngreso}</td>
                            <td>{pacciente.fechaTurno}</td>
                            <td>{pacciente.domicilio.calle}</td>
                            <td>{pacciente.domicilio.numero}</td>
                            <td>{pacciente.domicilio.localidad}</td>
                            <td>{pacciente.domicilio.provincia}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(pacciente.id)}>Eliminar</button>
                                <button className="btn btn-warning" onClick={() => handleEdit(pacciente.id)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PacientesPages
