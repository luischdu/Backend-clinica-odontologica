import React from "react";
import CrearOdontologo from "../components/CrearOdontologo";
import { useForm } from "../Hooks/useForm";
import Swal from "sweetalert2";
import axios from "axios";

const NewOdontologo = () => {
  const [formValues, handleInputChange] = useForm({
    nombre: "",
    apellido: "",
    matricula: "",
    usuario: "",
    password: "",
  });

  const { nombre, apellido, matricula, usuario, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8081/odontologos",
      data: {
        nombre: nombre,
        apellido: apellido,
        matricula: matricula,
        
        usuario: { username: usuario, password: password, rolUsuario: "ODONTOLOGO", },
      },
    });
    Swal.fire({
      title: "Odontologo creado",
      text: "El odontologo ha sido creado con exito",
      icon: "success",
      timer: 1500,
    });
  };

  return (
    <div>
      <CrearOdontologo
        handleInputChange={handleInputChange}
        nombre={nombre}
        apellido={apellido}
        matricula={matricula}
        usuario={usuario}
        password={password}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default NewOdontologo;
