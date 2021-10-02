import React from 'react'

const OdontologoPage = ({ dataOdontologos,handleEdit, handleDelete }) => {
  return (
    <div>
      <h1>Odontologos</h1>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Matricula</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {dataOdontologos.map(odontologo => (
            <tr key={odontologo.id} id={odontologo.id}>
              <td><button onClick={handleEdit} className="btn btn-primary">{odontologo.id}</button></td>
              <td>{odontologo.nombre}</td>
              <td>{odontologo.apellido}</td>
              <td>{odontologo.matricula}</td>
              <td><button onClick={()=>{handleDelete(odontologo.id)}} className="btn btn-danger">Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OdontologoPage

