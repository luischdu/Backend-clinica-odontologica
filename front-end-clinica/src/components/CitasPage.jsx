import React from 'react'

const CitasPage = ({ fechaTurno, handleInputChange, handleSubmit, dataOdontologos, medico }) => {
    return (
        <div>
            <h1>Agenda tu cita</h1>

            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="fechaIngreso" className="form-label">Fecha de Turno</label>
                    <div className="input-group">
                        <input type="datetime-local" className="form-control" id="fechaIngreso" aria-describedby="fechaIngreso"
                            value={fechaTurno}
                            onChange={handleInputChange}
                            name="fechaIngreso"
                            required />
                    </div>
                </div>
                <select value={medico} onChange={handleInputChange} className="form-select" aria-label="Default select example">
                    <option defaultValue>Elige tu medico</option>

                    {
                        dataOdontologos.map(odontologo => (
                            <option key={odontologo.id} value={odontologo.id}>{odontologo.nombre} {odontologo.apellido}</option>
                        ))
                    }
                </select>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Agendar turno</button>
                </div>

            </form>


        </div>
    )
}

export default CitasPage
