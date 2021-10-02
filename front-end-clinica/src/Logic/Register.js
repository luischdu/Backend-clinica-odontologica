import React from "react";
import RegisterPage from "../components/RegisterPage";
import { useForm } from "../Hooks/useForm";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const [formValues, handleInputChange] = useForm({
    nombre: "",
    apellido: "",
    dni: "",
    fechaIngreso: "",
    calle: "",
    numero: "",
    localidad: "",
    provincia: "",
    usuario: "",
    password: "",
  });

  const {
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
  } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8081/pacientes",
      data: {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        fechaIngreso: fechaIngreso,

        domicilio: {
          calle: calle,
          numero: numero,
          localidad: localidad,
          provincia: provincia,
        },
        usuario: {
          username: usuario,
          password: password,
          rolUsuario: "PACIENTE",
        },
      },
    });
    Swal.fire({
      title: "Paciente creado",
      text: "El paciente ha sido creado con exito",
      icon: "success",
      timer: 1500,
    });
  };

  return (
    <div>
      <RegisterPage
        handleInputChange={handleInputChange}
        nombre={nombre}
        apellido={apellido}
        dni={dni}
        fechaIngreso={fechaIngreso}
        calle={calle}
        numero={numero}
        localidad={localidad}
        provincia={provincia}
        usuario={usuario}
        password={password}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register;
