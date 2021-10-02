import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = ({usuario,
    password,
    handleInputChange,
    handleSubmit,
    loading},) => {
    return (
        <div>
            <form className="text-center p-4" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Inicia sesion para agendar tu cita</h1>

                <div className="form-floating mb-2">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="usuario"
                        value={usuario}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="floatingInput">Correo electronico</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="floatingPassword">Contraseña</label>
                </div>

                <button
                    className="w-100 btn btn-lg btn-warning mt-2"
                    type="submit"
                    disabled={loading}
                >
                    Iniciar sesión
                </button>


                <div className="checkbox  mt-3 mb-3">
                    <Link to="/register">No tengo cuenta</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
