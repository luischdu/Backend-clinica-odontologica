import React, { useState, useEffect } from "react";
import CitasPage from "../components/CitasPage";
import axios from "axios";
import { useForm } from "../Hooks/useForm";
import Swal from "sweetalert2";

const Citas = () => {
  
  const [dataOdontologos, setDataOdontologos] = useState([]);

  const dataUsuario = JSON.parse(localStorage.getItem("token"));

  const [formValues, handleInputChange] = useForm({
    medico: "",
    fechaTurno: "",
  });

  const { medico, fechaTurno } = formValues;

  console.log(medico);

  let url = "http://localhost:8081/odontologos/";

  useEffect(
    () =>
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          setDataOdontologos(res.data);
        })
        .catch((err) => {
          console.error(err);
        }),
    [url]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8081/turnos",
      data: {
        paciente: { id: dataUsuario.id },
        medico: { id: medico },
        fechaTurno: fechaTurno,
      },
    });
    Swal.fire({
      title: "Turno registrado",
      text: "Se ha asignado con exito",
      icon: "success",
      timer: 1500,
    });
  };

  return (
    <div>
      <CitasPage
        dataOdontologos={dataOdontologos}
        fechaTurno={fechaTurno}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        medico={medico}
      />
    </div>
  );
};

export default Citas;
