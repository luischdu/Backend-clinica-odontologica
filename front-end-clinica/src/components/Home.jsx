import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div >
            <h1 className="center">Bienvenidos a Odontoplus</h1>
            <div className="row justify-content-around">
                <div className="card" style={{ "width": "18rem" }}>
                    <img src="https://clinicadental5deabril.cl/wp-content/uploads/2020/09/odontologia-hombre.png" className="card-img-top" alt="Consultorio" />
                    <div className="card-body">
                        <h5 className="card-title">Consulta los odontologos</h5>
                        <Link to="/odontology" className="btn btn-primary">listar Odontologos</Link>
                    </div>
                </div>

                <div className="card" style={{ "width": "18rem" }}>
                    <img src="https://cdn.pixabay.com/photo/2020/10/23/17/02/dentist-5679320_960_720.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Consulta nuestros pacientes</h5>
                        <Link to="/patients" className="btn btn-primary">listar Pacientes</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
